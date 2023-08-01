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
        ...products.find((product) => product.upc === object.upc),
      };
    },
  },
  Query: {
    topProducts(_, args) {
      return products.slice(0, args.first);
    },
  },
};

const delay: (() => number) | null = process.env.SUBGRAPH_DELAY_MS
  ? () => {
      if (process.env.SUBGRAPH_DELAY_MS.includes("~")) {
        const [min, max] = process.env.SUBGRAPH_DELAY_MS.split("~").map((n) =>
          parseInt(n, 10)
        );
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

      return parseInt(process.env.SUBGRAPH_DELAY_MS);
    }
  : null;

const yoga = createYoga({
  schema: buildSubgraphSchema({
    typeDefs: parse(typeDefs),
    resolvers,
  }),
  context: async () => {
    if (delay) {
      await new Promise((resolve) =>
        setTimeout(resolve, delay())
      );
    }
  },
});
const server = createServer(yoga);
const port = process.env.PORT ? parseInt(process.env.PORT) : 9873;

export const productsServer = async () =>
  server.listen(port, () => {
    console.info(`Server is running on http://localhost:${port}/graphql`);
  });

const products = [
  {
    upc: "1",
    name: "Table",
    price: 899,
    weight: 100,
  },
  {
    upc: "2",
    name: "Couch",
    price: 1299,
    weight: 1000,
  },
  {
    upc: "3",
    name: "Chair",
    price: 54,
    weight: 50,
  },
];
