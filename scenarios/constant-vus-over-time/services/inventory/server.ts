import { createServer } from "node:http";
import { createYoga } from "graphql-yoga";
import { buildSubgraphSchema } from "@apollo/subgraph";
import { parse } from "graphql";
import { typeDefs } from "./typedefs";

const resolvers = {
  Product: {
    __resolveReference(object) {
      return {
        ...object,
        ...inventory.find(product => product.upc === object.upc),
      };
    },
    shippingEstimate(object) {
      // free for expensive items
      if (object.price && object.price > 1000) return 0;
      // estimate is based on weight
      return object.weight ? object.weight * 0.5 : 0;
    },
  },
};

const yoga = createYoga({
  schema: buildSubgraphSchema({
    typeDefs: parse(typeDefs),
    resolvers,
  }),
});
const server = createServer(yoga);
const port = process.env.PORT ? parseInt(process.env.PORT) : 9872;

export const inventoryServer = async () =>
server.listen(port, () => {
  console.info(`Server is running on http://localhost:${port}/graphql`);
});

const inventory = [
  { upc: '1', inStock: true },
  { upc: '2', inStock: false },
  { upc: '3', inStock: true },
];
