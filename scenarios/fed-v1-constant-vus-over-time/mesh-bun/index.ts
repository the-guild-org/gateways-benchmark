import { createBuiltMeshHTTPHandler } from './.mesh'

const server = Bun.serve({
    port: process.env.PORT ? parseInt(process.env.PORT) : 4000,
    fetch: createBuiltMeshHTTPHandler(),
})

console.info(`Server is running on http://localhost:${server.port}/graphql`);