import { createServer } from "node:http";
import { createYoga } from "graphql-yoga";
import { buildSubgraphSchema } from "@apollo/subgraph";
import { parse } from "graphql";
import { typeDefs } from "./typedefs";

const resolvers = {
  User: {
    __resolveReference(user, context) {
      return { ...user, ...context.users.find((u) => u.id === user.id) };
    },
  },
  Query: {
    me(_root, _args, context) {
      return context.users[0];
    },
    users(_root, _args, context) {
      return context.users;
    },
    user(_root, args, context) {
      return context.users.find((user) => user.id === args.id);
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

    return {
      users: [
        {
          id: "1",
          name: "Ada Lovelace",
          birthDate: "1815-12-10",
          username: "@ada",
        },
        {
          id: "2",
          name: "Alan Turing",
          birthDate: "1912-06-23",
          username: "@complete",
        },
      ],
    };
  },
});
const server = createServer(yoga);
const port = process.env.PORT ? parseInt(process.env.PORT) : 9871;

export const accountsServer = async () =>
  server.listen(port, () => {
    console.info(`Server is running on http://localhost:${port}/graphql`);
  });
