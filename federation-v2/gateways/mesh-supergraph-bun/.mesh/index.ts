// @ts-nocheck
import { GraphQLResolveInfo, SelectionSetNode, FieldNode } from 'graphql';
import type { GetMeshOptions } from '@graphql-mesh/runtime';
import type { YamlConfig } from '@graphql-mesh/types';
import { PubSub } from '@graphql-mesh/utils';
import { DefaultLogger } from '@graphql-mesh/utils';
import MeshCache from "@graphql-mesh/cache-localforage";
import { fetch as fetchFn } from '@whatwg-node/fetch';

import { MeshResolvedSource } from '@graphql-mesh/runtime';
import { MeshTransform, MeshPlugin } from '@graphql-mesh/types';
import SupergraphHandler from "@graphql-mesh/supergraph"
import BareMerger from "@graphql-mesh/merger-bare";
import { createMeshHTTPHandler, MeshHTTPHandler } from '@graphql-mesh/http';
import { getMesh, ExecuteMeshFn, SubscribeMeshFn, MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';
import { ImportFn } from '@graphql-mesh/types';
import type { SupergraphTypes } from './sources/Supergraph/types';
import * as importedModule$0 from "./sources/Supergraph/nonExecutableSchema";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };



/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Query = {
  allPandas?: Maybe<Array<Maybe<Panda>>>;
  panda?: Maybe<Panda>;
  allProducts?: Maybe<Array<Maybe<ProductItf>>>;
  product?: Maybe<ProductItf>;
  review?: Maybe<Review>;
};


export type QuerypandaArgs = {
  name: Scalars['ID']['input'];
};


export type QueryproductArgs = {
  id: Scalars['ID']['input'];
};


export type QueryreviewArgs = {
  id: Scalars['Int']['input'];
};

export type DeliveryEstimates = {
  estimatedDelivery?: Maybe<Scalars['String']['output']>;
  fastestDelivery?: Maybe<Scalars['String']['output']>;
};

export type Product = ProductItf & SkuItf & {
  id: Scalars['ID']['output'];
  delivery?: Maybe<DeliveryEstimates>;
  dimensions?: Maybe<ProductDimension>;
  sku?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  package?: Maybe<Scalars['String']['output']>;
  variation?: Maybe<ProductVariation>;
  createdBy?: Maybe<User>;
  hidden?: Maybe<Scalars['String']['output']>;
  oldField?: Maybe<Scalars['String']['output']>;
  reviewsScore: Scalars['Float']['output'];
  reviewsCount: Scalars['Int']['output'];
  reviews: Array<Review>;
};


export type ProductdeliveryArgs = {
  zip?: InputMaybe<Scalars['String']['input']>;
};

export type ProductDimension = {
  size?: Maybe<Scalars['String']['output']>;
  weight?: Maybe<Scalars['Float']['output']>;
};

export type ProductItf = {
  id: Scalars['ID']['output'];
  dimensions?: Maybe<ProductDimension>;
  delivery?: Maybe<DeliveryEstimates>;
  sku?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  package?: Maybe<Scalars['String']['output']>;
  variation?: Maybe<ProductVariation>;
  createdBy?: Maybe<User>;
  /** @deprecated refactored out */
  oldField?: Maybe<Scalars['String']['output']>;
  reviewsCount: Scalars['Int']['output'];
  reviewsScore: Scalars['Float']['output'];
  reviews: Array<Review>;
};


export type ProductItfdeliveryArgs = {
  zip?: InputMaybe<Scalars['String']['input']>;
};

export type ShippingClass =
  | 'STANDARD'
  | 'EXPRESS'
  | 'OVERNIGHT';

export type Panda = {
  name: Scalars['ID']['output'];
  favoriteFood?: Maybe<Scalars['String']['output']>;
};

export type ProductVariation = {
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
};

export type SkuItf = {
  sku?: Maybe<Scalars['String']['output']>;
};

export type User = {
  email: Scalars['ID']['output'];
  totalProductsCreated?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Review = {
  id: Scalars['Int']['output'];
  body: Scalars['String']['output'];
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string | ((fieldNode: FieldNode) => SelectionSetNode);
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;


/** Mapping of interface types */
export type ResolversInterfaceTypes<RefType extends Record<string, unknown>> = ResolversObject<{
  ProductItf: ( Product );
  SkuItf: ( Product );
}>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Query: ResolverTypeWrapper<{}>;
  DeliveryEstimates: ResolverTypeWrapper<DeliveryEstimates>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Product: ResolverTypeWrapper<Product>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  ProductDimension: ResolverTypeWrapper<ProductDimension>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  ProductItf: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['ProductItf']>;
  ShippingClass: ShippingClass;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Panda: ResolverTypeWrapper<Panda>;
  ProductVariation: ResolverTypeWrapper<ProductVariation>;
  SkuItf: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['SkuItf']>;
  User: ResolverTypeWrapper<User>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Review: ResolverTypeWrapper<Review>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  DeliveryEstimates: DeliveryEstimates;
  String: Scalars['String']['output'];
  Product: Product;
  ID: Scalars['ID']['output'];
  ProductDimension: ProductDimension;
  Float: Scalars['Float']['output'];
  ProductItf: ResolversInterfaceTypes<ResolversParentTypes>['ProductItf'];
  Boolean: Scalars['Boolean']['output'];
  Panda: Panda;
  ProductVariation: ProductVariation;
  SkuItf: ResolversInterfaceTypes<ResolversParentTypes>['SkuItf'];
  User: User;
  Int: Scalars['Int']['output'];
  Review: Review;
}>;

export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  allPandas?: Resolver<Maybe<Array<Maybe<ResolversTypes['Panda']>>>, ParentType, ContextType>;
  panda?: Resolver<Maybe<ResolversTypes['Panda']>, ParentType, ContextType, RequireFields<QuerypandaArgs, 'name'>>;
  allProducts?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductItf']>>>, ParentType, ContextType>;
  product?: Resolver<Maybe<ResolversTypes['ProductItf']>, ParentType, ContextType, RequireFields<QueryproductArgs, 'id'>>;
  review?: Resolver<Maybe<ResolversTypes['Review']>, ParentType, ContextType, RequireFields<QueryreviewArgs, 'id'>>;
}>;

export type DeliveryEstimatesResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DeliveryEstimates'] = ResolversParentTypes['DeliveryEstimates']> = ResolversObject<{
  estimatedDelivery?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fastestDelivery?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  delivery?: Resolver<Maybe<ResolversTypes['DeliveryEstimates']>, ParentType, ContextType, Partial<ProductdeliveryArgs>>;
  dimensions?: Resolver<Maybe<ResolversTypes['ProductDimension']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  package?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  variation?: Resolver<Maybe<ResolversTypes['ProductVariation']>, ParentType, ContextType>;
  createdBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  hidden?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  oldField?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reviewsScore?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  reviewsCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  reviews?: Resolver<Array<ResolversTypes['Review']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductDimensionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ProductDimension'] = ResolversParentTypes['ProductDimension']> = ResolversObject<{
  size?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  weight?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductItfResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ProductItf'] = ResolversParentTypes['ProductItf']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Product', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  dimensions?: Resolver<Maybe<ResolversTypes['ProductDimension']>, ParentType, ContextType>;
  delivery?: Resolver<Maybe<ResolversTypes['DeliveryEstimates']>, ParentType, ContextType, Partial<ProductItfdeliveryArgs>>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  package?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  variation?: Resolver<Maybe<ResolversTypes['ProductVariation']>, ParentType, ContextType>;
  createdBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  oldField?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reviewsCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  reviewsScore?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  reviews?: Resolver<Array<ResolversTypes['Review']>, ParentType, ContextType>;
}>;

export type PandaResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Panda'] = ResolversParentTypes['Panda']> = ResolversObject<{
  name?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  favoriteFood?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductVariationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ProductVariation'] = ResolversParentTypes['ProductVariation']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SkuItfResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SkuItf'] = ResolversParentTypes['SkuItf']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Product', ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
}>;

export type UserResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  email?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  totalProductsCreated?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ReviewResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Review'] = ResolversParentTypes['Review']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  body?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  DeliveryEstimates?: DeliveryEstimatesResolvers<ContextType>;
  Product?: ProductResolvers<ContextType>;
  ProductDimension?: ProductDimensionResolvers<ContextType>;
  ProductItf?: ProductItfResolvers<ContextType>;
  Panda?: PandaResolvers<ContextType>;
  ProductVariation?: ProductVariationResolvers<ContextType>;
  SkuItf?: SkuItfResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  Review?: ReviewResolvers<ContextType>;
}>;


export type MeshContext = SupergraphTypes.Context & BaseMeshContext;


const baseDir = pathModule.join(typeof __dirname === 'string' ? __dirname : '/', '..');

const importFn: ImportFn = <T>(moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
  switch(relativeModuleId) {
    case ".mesh/sources/Supergraph/nonExecutableSchema":
      return Promise.resolve(importedModule$0) as T;
    
    default:
      return Promise.reject(new Error(`Cannot find module '${relativeModuleId}'.`));
  }
};

const rootStore = new MeshStore('.mesh', new FsStoreStorageAdapter({
  cwd: baseDir,
  importFn,
  fileType: "ts",
}), {
  readonly: true,
  validate: false
});

export const rawServeConfig: YamlConfig.Config['serve'] = {"fork":true} as any
export async function getMeshOptions(): Promise<GetMeshOptions> {
const pubsub = new PubSub();
const sourcesStore = rootStore.child('sources');
const logger = new DefaultLogger("🕸️  Mesh");
const cache = new (MeshCache as any)({
      ...({} as any),
      importFn,
      store: rootStore.child('cache'),
      pubsub,
      logger,
    } as any)

const sources: MeshResolvedSource[] = [];
const transforms: MeshTransform[] = [];
const additionalEnvelopPlugins: MeshPlugin<any>[] = [];
const supergraphTransforms = [];
const additionalTypeDefs = [] as any[];
const supergraphHandler = new SupergraphHandler({
              name: "Supergraph",
              config: {"source":"./supergraph.graphql"},
              baseDir,
              cache,
              pubsub,
              store: sourcesStore.child("Supergraph"),
              logger: logger.child("Supergraph"),
              importFn,
            });
sources[0] = {
          name: 'Supergraph',
          handler: supergraphHandler,
          transforms: supergraphTransforms
        }
const additionalResolvers = [] as any[]
const merger = new(BareMerger as any)({
        cache,
        pubsub,
        logger: logger.child('bareMerger'),
        store: rootStore.child('bareMerger')
      })

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
      return [
      
    ];
    },
    fetchFn,
  };
}

export function createBuiltMeshHTTPHandler<TServerContext = {}>(): MeshHTTPHandler<TServerContext> {
  return createMeshHTTPHandler<TServerContext>({
    baseDir,
    getBuiltMesh: getBuiltMesh,
    rawServeConfig: {"fork":true},
  })
}


let meshInstance$: Promise<MeshInstance> | undefined;

export function getBuiltMesh(): Promise<MeshInstance> {
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

export const execute: ExecuteMeshFn = (...args) => getBuiltMesh().then(({ execute }) => execute(...args));

export const subscribe: SubscribeMeshFn = (...args) => getBuiltMesh().then(({ subscribe }) => subscribe(...args));