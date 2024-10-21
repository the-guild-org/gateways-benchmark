import { createGatewayRuntime } from '@graphql-hive/gateway';

const server = Bun.serve({
    port: Bun.env.PORT ? parseInt(Bun.env.PORT) : 4000,
    fetch: (createGatewayRuntime({
        supergraph: () => Bun.file('./supergraph.graphql').text(),
    }) as any),
})

console.info(`Server is running on http://localhost:${server.port}/graphql`);