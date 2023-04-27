import { createServer } from "node:http";
import { createYoga } from "graphql-yoga";
import { getStitchedSchemaWithUrls } from "@graphql-tools/federation";

const schema = getStitchedSchemaWithUrls([
  {
    endpoint: "http://accounts:4001/graphql",
  },
  {
    endpoint: "http://reviews:4004/graphql",
  },
  {
    endpoint: "http://products:4003/graphql",
  },
  {
    endpoint: "http://inventory:4002/graphql",
  },
]);

const yoga = createYoga({ schema });
const server = createServer(yoga);
const port = process.env.PORT ? parseInt(process.env.PORT) : 4000;

server.listen(port, () => {
  console.info(`Server is running on http://localhost:${port}/graphql`);
});
