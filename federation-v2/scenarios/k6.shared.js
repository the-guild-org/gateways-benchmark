import http from "k6/http";
import { check } from "k6";
import { textSummary } from "https://jslib.k6.io/k6-summary/0.0.1/index.js";

let identifiersMap = {};

function printOnce(identifier, ...args) {
  if (identifiersMap[identifier]) {
    return;
  }

  console.log(...args);
  identifiersMap[identifier] = true;
}

const graphqlRequest = {
  payload: JSON.stringify({
    query: `query {
      allPandas {
        __typename
        favoriteFood
        name
      }
      allProducts {
        __typename
        id
        name
        reviewsCount
        reviewsScore
        reviews {
          body
          id
        }
        createdBy {
          email
          name
          totalProductsCreated
        }
        package
        sku
        ... on ProductItf {
          variation {
            id
            name
          }
        }
        ... on Product {
          dimensions {
            size
            weight
          }
          delivery {
            estimatedDelivery
            fastestDelivery
          }
        }
      }
    }`,
  }),
  params: {
    headers: {
      "Content-Type": "application/json",
    },
  },
};

export function handleBenchmarkSummary(data, additionalContext = {}) {
  const out = {
    stdout: textSummary(data, { indent: " ", enableColors: true }),
  };

  if (__ENV.SUMMARY_PATH) {
    out[`${__ENV.SUMMARY_PATH}/k6_summary.json`] = JSON.stringify(
      Object.assign(data, additionalContext)
    );
    out[`${__ENV.SUMMARY_PATH}/k6_summary.txt`] = textSummary(data, {
      indent: " ",
      enableColors: false,
    });
  }

  return out;
}

export function makeGraphQLRequest() {
  const res = http.post(
    __ENV.GATEWAY_ENDPOINT || "http://localhost:4000/graphql",
    graphqlRequest.payload,
    graphqlRequest.params
  );

  if (res.status !== 200) {
    console.log(`‼️ Failed to run HTTP request:`, res);
  }

  check(res, {
    "response code was 200": (res) => res.status == 200,
    "no graphql errors": (resp) => {
      const json = resp.json();
      const noErrors =
        !!json &&
        typeof json === "object" &&
        !Array.isArray(json) &&
        !json.errors;

      if (!noErrors) {
        printOnce(
          "graphql_errors",
          `‼️ Got GraphQL errors, here's a sample:`,
          res.body
        );
      }

      return noErrors;
    },
    "valid response structure": (resp) => {
      const json = resp.json();

      let isValid = checkResponseStructure(json);

      if (!isValid) {
        printOnce(
          "response_strcuture",
          `‼️ Got invalid structure, here's a sample:`,
          res.body
        );
      }

      return isValid;
    },
  });
}

function checkResponseStructure(x) {
  function checkRecursive(obj, structure) {
    if (obj == null) {
      return false;
    }
    for (var key in structure) {
      if (
        !obj.hasOwnProperty(key) ||
        typeof obj[key] !== typeof structure[key]
      ) {
        return false;
      }
      if (typeof structure[key] === "object" && structure[key] !== null) {
        if (!checkRecursive(obj[key], structure[key])) {
          return false;
        }
      }
    }
    return true;
  }

  const expectedStructure = {
    data: {
      allPandas: [
        { __typename: "Panda", favoriteFood: "bamboo leaves", name: "Basi" },
        { __typename: "Panda", favoriteFood: "apple", name: "Yun" },
      ],
      allProducts: [
        {
          __typename: "Product",
          id: "converse-1",
          name: "Converse Chuck Taylor",
          reviewsCount: 3,
          reviewsScore: 4.6,
          reviews: [],
          createdBy: {
            email: "info@converse.com",
            name: "Converse",
            totalProductsCreated: 1099,
          },
          package: "converse",
          sku: "converse-1",
          variation: { id: "converse-classic", name: "Converse Chuck Taylor" },
          dimensions: { size: "1", weight: 1 },
          delivery: {
            estimatedDelivery: "6/25/2023",
            fastestDelivery: "6/24/2023",
          },
        },
        {
          __typename: "Product",
          id: "vans-1",
          name: "Vans Classic Sneaker",
          reviewsCount: 3,
          reviewsScore: 4.6,
          reviews: [],
          createdBy: {
            email: "info@vans.com",
            name: "Van Doren",
            totalProductsCreated: 1099,
          },
          package: "vans",
          sku: "vans-1",
          variation: { id: "vans-classic", name: "Vans Classic Sneaker" },
          dimensions: { size: "1", weight: 1 },
          delivery: {
            estimatedDelivery: "6/25/2023",
            fastestDelivery: "6/24/2023",
          },
        },
      ],
    },
  };
  return checkRecursive(x, expectedStructure);
}
