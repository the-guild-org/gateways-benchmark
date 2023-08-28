import http from "k6/http";
import { check } from "k6";
import { textSummary } from "https://jslib.k6.io/k6-summary/0.0.1/index.js";

const graphqlRequest = {
  payload: JSON.stringify({
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
  }),
  params: {
    headers: {
      "Content-Type": "application/json",
    },
  },
};

export function handleBenchmarkSummary(data, additionalContext = {}) {
  const out = {
    'stdout': textSummary(data, { indent: ' ', enableColors: true })
  };

  if (__ENV.SUMMARY_PATH) {
    out[`${__ENV.SUMMARY_PATH}/k6_summary.json`] = JSON.stringify(Object.assign(data, additionalContext));
    out[`${__ENV.SUMMARY_PATH}/k6_summary.txt`] = textSummary(data, {
      indent: " ",
      enableColors: false,
    });
  }

  return out;
}

export function makeGraphQLRequest() {
  const res = http.post(__ENV.GATEWAY_ENDPOINT || "http://localhost:4000/graphql", graphqlRequest.payload, graphqlRequest.params);
  
  if (res.status !== 200) {
    console.log(`‼️ Failed to run HTTP request:`, res)
  }

  if (res.status === 200 && res.body && res.body.errors && res.body.errors.length > 0) {
    console.log(`‼️ Got GraphQL errors:`, res.body.errors)
  }

  check(res, {
    'response code was 200': (res) => res.status == 200,
    'no graphql errors': (resp) => {
      const json = resp.json();

      return (
        !!json &&
        typeof json === "object" &&
        !Array.isArray(json) &&
        !json.errors
      );
    },
    'valid response structure': (resp) => {
      const json = resp.json();
      
      return checkResponseStructure(json);
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
      users: [
        {
          reviews: [
            {
              id: "",
              body: "",
              product: {
                upc: "",
                weight: 0,
                reviews: [
                  {
                    id: "",
                    body: "",
                    author: {
                      id: "",
                      username: "",
                      name: "",
                      reviews: [
                        {
                          id: "",
                          body: "",
                          product: {
                            name: "",
                            price: 0,
                            shippingEstimate: 0,
                            upc: "",
                            weight: 0,
                            inStock: true,
                          },
                        },
                      ],
                    },
                  },
                ],
                inStock: true,
                name: "",
                price: 0,
                shippingEstimate: 0,
              },
            },
          ],
          id: "",
          username: "",
          name: "",
        },
      ],
      topProducts: [
        {
          upc: "",
          weight: 0,
          reviews: [
            {
              body: "",
              author: {
                name: "",
                reviews: [
                  {
                    id: "",
                    body: "",
                    product: {
                      weight: 0,
                      inStock: true,
                      name: "",
                      price: 0,
                      shippingEstimate: 0,
                      upc: "",
                    },
                  },
                ],
                id: "",
                username: "",
              },
              id: "",
            },
          ],
          inStock: true,
          name: "",
          price: 0,
          shippingEstimate: 0,
        },
      ],
    },
  };

  return checkRecursive(x, expectedStructure);
}
