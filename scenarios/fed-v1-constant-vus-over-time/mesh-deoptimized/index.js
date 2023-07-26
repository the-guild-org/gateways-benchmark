const { createBuiltMeshHTTPHandler } = require('./.mesh');
const { createServer } = require('http');

createServer(createBuiltMeshHTTPHandler()).listen(
  process.env.PORT ? parseInt(process.env.PORT) : 4000
);