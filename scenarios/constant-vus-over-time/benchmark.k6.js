import http from "k6/http";
import { check } from "k6";
import { Rate } from "k6/metrics";
import { textSummary } from "https://jslib.k6.io/k6-summary/0.0.1/index.js";

const noErrors = `no_errors`;
const expectedResult = `expected_result`;

new Rate(noErrors);
new Rate(expectedResult);

export const options = {
  vus: __ENV.BENCH_VUS ? parseInt(__ENV.BENCH_VUS) : 100,
  duration: __ENV.BENCH_OVER_TIME || 100,
  thresholds: {
    [noErrors]: ["rate==1"],
    [expectedResult]: ["rate==1"],
    http_req_failed: ["rate==0"],
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
      __typename
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

  const res = http.post(__ENV.GATEWAY_ENDPOINT || "http://localhost:4000/graphql", payload, params);
  
  if (res.status !== 200) {
    console.log(`‼️ Failed to run HTTP request:`, res)
  }

  if (res.status === 200 && res.body && res.body.errors && res.body.errors.length > 0) {
    console.log(`‼️ Got GraphQL errors:`, res.body.errors)
  }

  check(res, {
    'response code was 200': (res) => res.status == 200,
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
        !!json.data.__typename
      );
    },
  });
}

export function handleSummary(data) {
  return {
    'stdout': textSummary(data, { indent: ' ', enableColors: true }),
    [`${__ENV.SUMMARY_PATH}/k6_summary.json`]: JSON.stringify(data),
    [`${__ENV.SUMMARY_PATH}/k6_summary.txt`]: textSummary(data, { indent: ' ', enableColors: false }),
  };
}