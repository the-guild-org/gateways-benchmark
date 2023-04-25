import http from "k6/http";
import { check } from "k6";
import { Rate } from "k6/metrics";
import { textSummary } from "https://jslib.k6.io/k6-summary/0.0.1/index.js";

const noErrors = `no_errors`;
const expectedResult = `expected_result`;

new Rate(noErrors);
new Rate(expectedResult);

const vus = __ENV.BENCH_VUS ? parseInt(__ENV.BENCH_VUS) : 500;
const time = __ENV.BENCH_OVER_TIME || "30s";

export const options = {
  scenarios: {
    test: {
      executor: "ramping-vus",
      startVUs: 50,
      stages: [
        {
          duration: time,
          target: vus,
        },
        { duration: "5s", target: 50 },
        { duration: "5s", target: 0 },
      ],
    },
  },
};

export default function () {
  const payload = JSON.stringify({
    query: `fragment User on User {
      id
      username
      name
    }
    
    fragment Review on Review {
      id
      body
    }
    
    fragment Product on Product {
      inStock
      name
      price
      shippingEstimate
      upc
      weight
    }
    
    query TestQuery {
      users {
        ...User
        reviews {
          ...Review
          product {
            ...Product
            reviews {
              ...Review
              author {
                ...User
                reviews {
                  ...Review
                  product {
                    ...Product
                  }
                }
              }
            }
          }
        }
      }
      topProducts {
        ...Product
        reviews {
          ...Review
          author {
            ...User
            reviews {
              ...Review
              product {
                ...Product
              }
            }
          }
        }
      }
    }`,
  });

  const params = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const res = http.post(
    __ENV.GATEWAY_ENDPOINT || "http://localhost:4000/graphql",
    payload,
    params
  );

  if (res.status !== 200) {
    console.log(`‼️ Failed to run HTTP request:`, res);
  }

  if (
    res.status === 200 &&
    res.body &&
    res.body.errors &&
    res.body.errors.length > 0
  ) {
    console.log(`‼️ Got GraphQL errors:`, res.body.errors);
  }

  if (res.body === null) {
    console.log(`‼️ Got null body:`, res);
  }

  check(res, {
    "response code was 200": (res) => res.status == 200,
    [noErrors]: (resp) => {
      const json = resp.json();
      return (
        !!json &&
        typeof json === "object" &&
        !Array.isArray(json) &&
        !json.errors
      );
    },
    [expectedResult]: (resp) => {
      const json = resp.json();
      return (
        !!json &&
        typeof json === "object" &&
        !Array.isArray(json) &&
        !!json.data &&
        typeof json.data === "object" &&
        !Array.isArray(json.data) &&
        !!json.data.users
      );
    },
  });
}

export function handleSummary(data) {
  const out = {
    stdout: textSummary(data, { indent: " ", enableColors: true }),
  };

  if (__ENV.SUMMARY_PATH) {
    out[`${__ENV.SUMMARY_PATH}/k6_summary.json`] = JSON.stringify(Object.assign(data, { vus, time}));
    out[`${__ENV.SUMMARY_PATH}/k6_summary.txt`] = textSummary(data, {
      indent: " ",
      enableColors: false,
    });
  }

  return out;
}
