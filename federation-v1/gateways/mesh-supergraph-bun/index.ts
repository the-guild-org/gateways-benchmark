import { createGatewayRuntime } from '@graphql-hive/gateway';
import { useJIT } from '@graphql-mesh/plugin-jit';

const server = Bun.serve({
    port: Bun.env.PORT ? parseInt(Bun.env.PORT) : 4000,
    fetch: (createGatewayRuntime as any)({
        supergraph: () => Bun.file('./supergraph.graphql').text(),
        plugins: () => [
            useJIT(),
        ]
    }),
})

console.info(`Server is running on http://localhost:${server.port}/graphql`);