import { createServer } from "node:http";
import { createYoga } from "graphql-yoga";
import { ApolloGateway }  from '@apollo/gateway';
import { readFileSync } from 'fs';
import { useApolloFederation } from '@envelop/apollo-federation';

async function main() {
  const supergraphSdl = readFileSync('./supergraph.graphql').toString();
  const gateway = new ApolloGateway({ supergraphSdl });
  await gateway.load();

  const yoga = createYoga({
    plugins: [
      useApolloFederation({ gateway }),
    ],
  });
  const server = createServer(yoga);
  const port = process.env.PORT ? parseInt(process.env.PORT) : 4000;
  
  server.listen(port, () => {
    console.info(`Server is running on http://localhost:${port}/graphql`);
  });
}

main().catch(console.error)