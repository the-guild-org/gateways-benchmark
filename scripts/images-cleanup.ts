//
// Important Note!
//
// Add a timeout to the script to prevent it from running indefinitely.
// Add it in the github action file where the script is called.

const {
  CF_IMAGES_LINK,
  CF_IMAGES_TOKEN,
  GITHUB_RUN_ID = "local",
}: {
  CF_IMAGES_LINK: string;
  CF_IMAGES_TOKEN: string;
  GITHUB_RUN_ID?: string;
} = (process as any).env;

// CF_IMAGES_LINK = https://api.cloudflare.com/client/v4/accounts/{account_id}/images/v1
//  ->
// https://api.cloudflare.com/client/v4/accounts/{account_id}/images/v2
const listEndpoint =
  CF_IMAGES_LINK.replace("/images/v1", "/images/v2") + "?sort_order=asc";
const deleteEndpoint = CF_IMAGES_LINK;

const now = new Date();
// 1 month ago
const thresholdDate = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);

async function main() {
  const stack: Array<string> = [];

  let continuation_token: string | null = null;

  do {
    const { result } = await listImages(continuation_token);

    if (!result) {
      throw new Error("Failed to list images from Cloudflare");
    }

    for (const image of result.images) {
      const uploaded = new Date(image.uploaded);

      if (isOlderThanThreshold(uploaded)) {
        if (isBenchmarkImage(image.filename)) {
          stack.push(image.id);
        }
      } else {
        // The images are sorted by uploaded date in ascending order
        // so we can break the loop when we find an image that is newer
        break;
      }
    }

    continuation_token = result.continuation_token;
  } while (continuation_token);

  console.log(`Found ${stack.length} images to delete`);

  // Delete 5 images at a time
  while (stack.length > 0) {
    // Pop 5 images from the stack
    const images = stack.splice(0, 5);

    // I know we could pop the next image when one of the images is finished deleting,
    // but I don't want to spend too much time on this script.
    await Promise.all(images.map((imageId) => deleteImages(imageId)));

    console.log(`Deleted ${images.length} images. ${stack.length} remaining`);
  }

  console.log("Finished cleaning up images");
}

/**
 * @param {string} continuation_token Continuation token for a next page. List images V2 returns continuation_token
 */
async function listImages(
  continuation_token: string | null
): Promise<ListImageResult> {
  const res = await fetch(
    listEndpoint +
      // add continuation token if it exists
      // because the endpoint contains `?sort_order=asc` already
      // we need to add `&`
      (continuation_token ? `&continuation_token=${continuation_token}` : ""),
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${CF_IMAGES_TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );

  if (!res.ok) {
    throw new Error(`Failed to list images from Cloudflare: ${res.statusText}`);
  }

  return res.json();
}

async function deleteImages(image_id: string) {
  const res = await fetch(deleteEndpoint + "/" + image_id, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${CF_IMAGES_TOKEN}`,
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    // We don't want to throw an error here,
    // because we want to continue deleting other images.
    // The image will be deleted eventually, in the next run.
    console.error(`Failed to delete image from Cloudflare: ${res.statusText}`);
  }
}

function isOlderThanThreshold(date: Date) {
  return date.getTime() < thresholdDate.getTime();
}

function isBenchmarkImage(filename: string) {
  return (
    filename.endsWith("-http.png") ||
    filename.endsWith("-overview.png") ||
    filename.endsWith("-report.svg")
  );
}

interface ListImageResult {
  errors: unknown[];
  messages: string[];
  result: {
    continuation_token: string;
    images: Array<{
      id: string;
      filename: string;
      /**
       * Datetime in ISO format
       * @example "2014-01-02T02:20:00.123Z"
       */
      uploaded: string;
    }>;
  };
  success: boolean;
}
