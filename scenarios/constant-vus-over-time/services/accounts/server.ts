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

const yoga = createYoga({
  schema: buildSubgraphSchema({
    typeDefs: parse(typeDefs),
    resolvers,
  }),
  context: () => ({
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
  }),
});
const server = createServer(yoga);
const port = process.env.PORT ? parseInt(process.env.PORT) : 9871;

export const accountsServer = async () =>
  server.listen(port, () => {
    console.info(`Server is running on http://localhost:${port}/graphql`);
  });
