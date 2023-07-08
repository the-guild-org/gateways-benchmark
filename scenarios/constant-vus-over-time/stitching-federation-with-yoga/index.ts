import { createYoga } from "graphql-yoga";
import { getStitchedSchemaWithUrls } from "@graphql-tools/federation";
import { App } from 'uWebSockets'

async function main() {
  const schema = await getStitchedSchemaWithUrls([
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
  const server = App().any("/*", yoga);
  const port = process.env.PORT ? parseInt(process.env.PORT) : 4000;

  server.listen('0.0.0.0', port, () => {
    console.info(`Server is running on http://localhost:${port}/graphql`);
  });
}

main().catch(console.error);
