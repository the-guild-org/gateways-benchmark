import { PubSub } from '@graphql-mesh/utils';
import { DefaultLogger } from '@graphql-mesh/utils';
import MeshCache from "@graphql-mesh/cache-localforage";
import { fetch as fetchFn } from '@whatwg-node/fetch';
import GraphqlHandler from "@graphql-mesh/graphql";
import StitchingMerger from "@graphql-mesh/merger-stitching";
import { createMeshHTTPHandler } from '@graphql-mesh/http';
import { getMesh } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';
import * as importedModule$0 from "./sources/inventory/introspectionSchema.json";
import * as importedModule$1 from "./sources/reviews/introspectionSchema.json";
import * as importedModule$2 from "./sources/accounts/introspectionSchema.json";
import * as importedModule$3 from "./sources/products/introspectionSchema.json";
import * as importedModule$4 from "./stitchingMerger/products_stitching.json";
import * as importedModule$5 from "./stitchingMerger/inventory_stitching.json";
import * as importedModule$6 from "./stitchingMerger/accounts_stitching.json";
import * as importedModule$7 from "./stitchingMerger/reviews_stitching.json";
import { fileURLToPath } from '@graphql-mesh/utils';
const baseDir = pathModule.join(pathModule.dirname(fileURLToPath(import.meta.url)), '..');
const importFn = (moduleId) => {
    const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
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
const rootStore = new MeshStore('.mesh', new FsStoreStorageAdapter({
    cwd: baseDir,
    importFn,
    fileType: "json",
}), {
    readonly: true,
    validate: false
});
export const rawServeConfig = undefined;
export async function getMeshOptions() {
    const pubsub = new PubSub();
    const sourcesStore = rootStore.child('sources');
    const logger = new DefaultLogger("🕸️  Mesh");
    const cache = new MeshCache({
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
    const accountsHandler = new GraphqlHandler({
      name: "accounts",
      config: { endpoint: "http://accounts:4001/graphql" },
      baseDir,
      cache,
      pubsub,
      store: sourcesStore.child("accounts"),
      logger: logger.child("accounts"),
      importFn,
    });
    const inventoryHandler = new GraphqlHandler({
      name: "inventory",
      config: { endpoint: "http://inventory:4002/graphql" },
      baseDir,
      cache,
      pubsub,
      store: sourcesStore.child("inventory"),
      logger: logger.child("inventory"),
      importFn,
    });
    const productsHandler = new GraphqlHandler({
      name: "products",
      config: { endpoint: "http://products:4003/graphql" },
      baseDir,
      cache,
      pubsub,
      store: sourcesStore.child("products"),
      logger: logger.child("products"),
      importFn,
    });
    const reviewsHandler = new GraphqlHandler({
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
    const merger = new StitchingMerger({
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
        fetchFn,
    };
}
export function createBuiltMeshHTTPHandler() {
    return createMeshHTTPHandler({
        baseDir,
        getBuiltMesh: getBuiltMesh,
        rawServeConfig: undefined,
    });
}
let meshInstance$;
export function getBuiltMesh() {
    if (meshInstance$ == null) {
        meshInstance$ = getMeshOptions().then(meshOptions => getMesh(meshOptions)).then(mesh => {
            const id = mesh.pubsub.subscribe('destroy', () => {
                meshInstance$ = undefined;
                mesh.pubsub.unsubscribe(id);
            });
            return mesh;
        });
    }
    return meshInstance$;
}
export const execute = (...args) => getBuiltMesh().then(({ execute }) => execute(...args));
export const subscribe = (...args) => getBuiltMesh().then(({ subscribe }) => subscribe(...args));
