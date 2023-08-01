import { createYoga } from "graphql-yoga";
import { getStitchedSchemaFromSupergraphSdl } from "@graphql-tools/federation";
import { createServer } from 'node:http';
import { readFileSync } from "node:fs";

async function main() {
  const supergraphSdl = readFileSync("./supergraph.graphql").toString('utf-8');
  const schema = getStitchedSchemaFromSupergraphSdl({
    supergraphSdl,
    batch: true,
  });

  const yoga = createYoga({ schema });
  const server = createServer(yoga);
  const port = process.env.PORT ? parseInt(process.env.PORT) : 4000;

  server.listen(port, () => {
    console.info(`Server is running on http://localhost:${port}/graphql`);
  });
}

main().catch(console.error);
