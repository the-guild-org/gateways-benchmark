"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subscribe = exports.execute = exports.getBuiltMesh = exports.createBuiltMeshHTTPHandler = exports.getMeshOptions = exports.rawServeConfig = void 0;
const tslib_1 = require("tslib");
const utils_1 = require("@graphql-mesh/utils");
const utils_2 = require("@graphql-mesh/utils");
const cache_localforage_1 = tslib_1.__importDefault(require("@graphql-mesh/cache-localforage"));
const fetch_1 = require("@whatwg-node/fetch");
const graphql_1 = tslib_1.__importDefault(require("@graphql-mesh/graphql"));
const merger_stitching_1 = tslib_1.__importDefault(require("@graphql-mesh/merger-stitching"));
const http_1 = require("@graphql-mesh/http");
const runtime_1 = require("@graphql-mesh/runtime");
const store_1 = require("@graphql-mesh/store");
const cross_helpers_1 = require("@graphql-mesh/cross-helpers");
const importedModule$0 = tslib_1.__importStar(require("./sources/inventory/introspectionSchema.json"));
const importedModule$1 = tslib_1.__importStar(require("./sources/reviews/introspectionSchema.json"));
const importedModule$2 = tslib_1.__importStar(require("./sources/accounts/introspectionSchema.json"));
const importedModule$3 = tslib_1.__importStar(require("./sources/products/introspectionSchema.json"));
const importedModule$4 = tslib_1.__importStar(require("./stitchingMerger/products_stitching.json"));
const importedModule$5 = tslib_1.__importStar(require("./stitchingMerger/inventory_stitching.json"));
const importedModule$6 = tslib_1.__importStar(require("./stitchingMerger/accounts_stitching.json"));
const importedModule$7 = tslib_1.__importStar(require("./stitchingMerger/reviews_stitching.json"));
const baseDir = cross_helpers_1.path.join(typeof __dirname === 'string' ? __dirname : '/', '..');
const importFn = (moduleId) => {
    const relativeModuleId = (cross_helpers_1.path.isAbsolute(moduleId) ? cross_helpers_1.path.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
    switch (relativeModuleId) {
        case ".mesh/sources/inventory/introspectionSchema.json":
            return Promise.resolve(importedModule$0);
        case ".mesh/sources/reviews/introspectionSchema.json":
            return Promise.resolve(importedModule$1);
        case ".mesh/sources/accounts/introspectionSchema.json":
            return Promise.resolve(importedModule$2);
        case ".mesh/sources/products/introspectionSchema.json":
            return Promise.resolve(importedModule$3);
        case ".mesh/stitchingMerger/products_stitching.json":
            return Promise.resolve(importedModule$4);
        case ".mesh/stitchingMerger/inventory_stitching.json":
            return Promise.resolve(importedModule$5);
        case ".mesh/stitchingMerger/accounts_stitching.json":
            return Promise.resolve(importedModule$6);
        case ".mesh/stitchingMerger/reviews_stitching.json":
            return Promise.resolve(importedModule$7);
        default:
            return Promise.reject(new Error(`Cannot find module '${relativeModuleId}'.`));
    }
};
const rootStore = new store_1.MeshStore('.mesh', new store_1.FsStoreStorageAdapter({
    cwd: baseDir,
    importFn,
    fileType: "json",
}), {
    readonly: true,
    validate: false
});
exports.rawServeConfig = undefined;
async function getMeshOptions() {
    const pubsub = new utils_1.PubSub();
    const sourcesStore = rootStore.child('sources');
    const logger = new utils_2.DefaultLogger("🕸️  Mesh");
    const cache = new cache_localforage_1.default({
        ...{},
        importFn,
        store: rootStore.child('cache'),
        pubsub,
        logger,
    });
    const sources = [];
    const transforms = [];
    const additionalEnvelopPlugins = [];
    const accountsTransforms = [];
    const inventoryTransforms = [];
    const productsTransforms = [];
    const reviewsTransforms = [];
    const additionalTypeDefs = [];
    const accountsHandler = new graphql_1.default({
      name: "accounts",
      config: { endpoint: "http://accounts:4001/graphql" },
      baseDir,
      cache,
      pubsub,
      store: sourcesStore.child("accounts"),
      logger: logger.child("accounts"),
      importFn,
    });
    const inventoryHandler = new graphql_1.default({
      name: "inventory",
      config: { endpoint: "http://inventory:4002/graphql" },
      baseDir,
      cache,
      pubsub,
      store: sourcesStore.child("inventory"),
      logger: logger.child("inventory"),
      importFn,
    });
    const productsHandler = new graphql_1.default({
      name: "products",
      config: { endpoint: "http://products:4003/graphql" },
      baseDir,
      cache,
      pubsub,
      store: sourcesStore.child("products"),
      logger: logger.child("products"),
      importFn,
    });
    const reviewsHandler = new graphql_1.default({
      name: "reviews",
      config: { endpoint: "http://reviews:4004/graphql" },
      baseDir,
      cache,
      pubsub,
      store: sourcesStore.child("reviews"),
      logger: logger.child("reviews"),
      importFn,
    });
    sources[0] = {
        name: 'accounts',
        handler: accountsHandler,
        transforms: accountsTransforms
    };
    sources[1] = {
        name: 'inventory',
        handler: inventoryHandler,
        transforms: inventoryTransforms
    };
    sources[2] = {
        name: 'products',
        handler: productsHandler,
        transforms: productsTransforms
    };
    sources[3] = {
        name: 'reviews',
        handler: reviewsHandler,
        transforms: reviewsTransforms
    };
    const additionalResolvers = [];
    const merger = new merger_stitching_1.default({
        cache,
        pubsub,
        logger: logger.child('stitchingMerger'),
        store: rootStore.child('stitchingMerger')
    });
    return {
        sources,
        transforms,
        additionalTypeDefs,
        additionalResolvers,
        cache,
        pubsub,
        merger,
        logger,
        additionalEnvelopPlugins,
        get documents() {
            return [];
        },
        fetchFn: fetch_1.fetch,
    };
}
exports.getMeshOptions = getMeshOptions;
function createBuiltMeshHTTPHandler() {
    return (0, http_1.createMeshHTTPHandler)({
        baseDir,
        getBuiltMesh: getBuiltMesh,
        rawServeConfig: undefined,
    });
}
exports.createBuiltMeshHTTPHandler = createBuiltMeshHTTPHandler;
let meshInstance$;
function getBuiltMesh() {
    if (meshInstance$ == null) {
        meshInstance$ = getMeshOptions().then(meshOptions => (0, runtime_1.getMesh)(meshOptions)).then(mesh => {
            const id = mesh.pubsub.subscribe('destroy', () => {
                meshInstance$ = undefined;
                mesh.pubsub.unsubscribe(id);
            });
            return mesh;
        });
    }
    return meshInstance$;
}
exports.getBuiltMesh = getBuiltMesh;
const execute = (...args) => getBuiltMesh().then(({ execute }) => execute(...args));
exports.execute = execute;
const subscribe = (...args) => getBuiltMesh().then(({ subscribe }) => subscribe(...args));
exports.subscribe = subscribe;
