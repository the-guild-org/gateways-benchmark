import { createServer } from "node:http";
import { createYoga } from "graphql-yoga";
import { buildSubgraphSchema } from "@apollo/subgraph";
import { parse } from "graphql";
import { typeDefs } from "./typedefs";

const resolvers = {
  Review: {
    __resolveReference(review) {
      return {
        ...review,
        ...reviews.find((r) => r.id === review.id),
      };
    },
    author(review) {
      return { __typename: "User", id: review.authorID };
    },
  },
  User: {
    __resolveReference(user) {
      return { ...user, ...usernames.find((u) => u.id === user.id) };
    },
    reviews(user) {
      return reviews.filter((review) => review.authorID === user.id);
    },
    numberOfReviews(user) {
      return reviews.filter((review) => review.authorID === user.id).length;
    },
    username(user) {
      const found = usernames.find((username) => username.id === user.id);
      return found ? found.username : null;
    },
  },
  Product: {
    reviews(product) {
      return reviews.filter((review) => review.product.upc === product.upc);
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
const port = process.env.PORT ? parseInt(process.env.PORT) : 9874;

export const reviewsServer = async () =>
  server.listen(port, () => {
    console.info(`Server is running on http://localhost:${port}/graphql`);
  });

const usernames = [
  { id: "1", username: "@ada" },
  { id: "2", username: "@complete" },
];
const reviews = [
  {
    id: "1",
    authorID: "1",
    product: { upc: "1" },
    body: "Love it!",
  },
  {
    id: "2",
    authorID: "1",
    product: { upc: "2" },
    body: "Too expensive.",
  },
  {
    id: "3",
    authorID: "2",
    product: { upc: "3" },
    body: "Could be better.",
  },
  {
    id: "4",
    authorID: "2",
    product: { upc: "1" },
    body: "Prefer something else.",
  },
];
