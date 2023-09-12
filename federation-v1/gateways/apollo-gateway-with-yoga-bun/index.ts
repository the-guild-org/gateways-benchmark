import { createYoga } from "graphql-yoga";
import { ApolloGateway } from "@apollo/gateway";
import { useApolloFederation } from "@envelop/apollo-federation";

async function main() {
    const supergraphSdlFile = Bun.file("./supergraph.graphql")
    const supergraphSdl = await supergraphSdlFile.text();
    const gateway = new ApolloGateway({ supergraphSdl });
    await gateway.load();

    const yoga = createYoga({
        plugins: [useApolloFederation({ gateway })],
    });
    const port = Bun.env.PORT ? parseInt(Bun.env.PORT) : 4000;

    Bun.serve({
        port,
        fetch: yoga,
    })
}

main().catch(console.error);


