// @ts-nocheck
import { GraphQLResolveInfo, SelectionSetNode, FieldNode, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import type { GetMeshOptions } from '@graphql-mesh/runtime';
import type { YamlConfig } from '@graphql-mesh/types';
import { PubSub } from '@graphql-mesh/utils';
import { DefaultLogger } from '@graphql-mesh/utils';
import MeshCache from "@graphql-mesh/cache-localforage";
import { fetch as fetchFn } from '@whatwg-node/fetch';

import { MeshResolvedSource } from '@graphql-mesh/runtime';
import { MeshTransform, MeshPlugin } from '@graphql-mesh/types';
import GraphqlHandler from "@graphql-mesh/graphql"
import StitchingMerger from "@graphql-mesh/merger-stitching";
import { createMeshHTTPHandler, MeshHTTPHandler } from '@graphql-mesh/http';
import { getMesh, ExecuteMeshFn, SubscribeMeshFn, MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';
import { ImportFn } from '@graphql-mesh/types';
import type { InventoryTypes } from './sources/inventory/types';
import type { ProductsTypes } from './sources/products/types';
import type { ReviewsTypes } from './sources/reviews/types';
import type { AccountsTypes } from './sources/accounts/types';
import * as importedModule$0 from "./sources/inventory/introspectionSchema";
import * as importedModule$1 from "./sources/products/introspectionSchema";
import * as importedModule$2 from "./sources/reviews/introspectionSchema";
import * as importedModule$3 from "./sources/accounts/introspectionSchema";
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
  _Any: { input: any; output: any; }
  _FieldSet: { input: any; output: any; }
  link__Import: { input: any; output: any; }
};

export type Query = {
  _entities: Array<Maybe<_Entity>>;
  _service: _Service;
  topProducts?: Maybe<Array<Maybe<Product>>>;
  me?: Maybe<User>;
  user?: Maybe<User>;
  users?: Maybe<Array<Maybe<User>>>;
};


export type Query_entitiesArgs = {
  representations: Array<Scalars['_Any']['input']>;
};


export type QuerytopProductsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryuserArgs = {
  id: Scalars['ID']['input'];
};

export type _Entity = Product | Review | User;

export type link__Purpose =
  | 'SECURITY'
  | 'EXECUTION';

export type _Service = {
  sdl: Scalars['String']['output'];
};

export type Product = {
  upc: Scalars['String']['output'];
  inStock?: Maybe<Scalars['Boolean']['output']>;
  shippingEstimate?: Maybe<Scalars['Int']['output']>;
  reviews?: Maybe<Array<Maybe<Review>>>;
  name?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Int']['output']>;
  weight?: Maybe<Scalars['Int']['output']>;
};

export type Review = {
  id: Scalars['ID']['output'];
  body?: Maybe<Scalars['String']['output']>;
  product?: Maybe<Product>;
  author?: Maybe<User>;
};

export type User = {
  id: Scalars['ID']['output'];
  reviews?: Maybe<Array<Maybe<Review>>>;
  name?: Maybe<Scalars['String']['output']>;
  username?: Maybe<Scalars['String']['output']>;
  birthday?: Maybe<Scalars['Int']['output']>;
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

/** Mapping of union types */
export type ResolversUnionTypes<RefType extends Record<string, unknown>> = ResolversObject<{
  _Entity: ( Product ) | ( Review ) | ( User );
}>;


/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Query: ResolverTypeWrapper<{}>;
  _Entity: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['_Entity']>;
  _Any: ResolverTypeWrapper<Scalars['_Any']['output']>;
  _FieldSet: ResolverTypeWrapper<Scalars['_FieldSet']['output']>;
  link__Import: ResolverTypeWrapper<Scalars['link__Import']['output']>;
  link__Purpose: link__Purpose;
  _Service: ResolverTypeWrapper<_Service>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Product: ResolverTypeWrapper<Product>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Review: ResolverTypeWrapper<Review>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  User: ResolverTypeWrapper<User>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  _Entity: ResolversUnionTypes<ResolversParentTypes>['_Entity'];
  _Any: Scalars['_Any']['output'];
  _FieldSet: Scalars['_FieldSet']['output'];
  link__Import: Scalars['link__Import']['output'];
  _Service: _Service;
  String: Scalars['String']['output'];
  Product: Product;
  Boolean: Scalars['Boolean']['output'];
  Int: Scalars['Int']['output'];
  Review: Review;
  ID: Scalars['ID']['output'];
  User: User;
}>;

export type externalDirectiveArgs = { };

export type externalDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = externalDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type requiresDirectiveArgs = {
  fields: Scalars['_FieldSet']['input'];
};

export type requiresDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = requiresDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type providesDirectiveArgs = {
  fields: Scalars['_FieldSet']['input'];
};

export type providesDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = providesDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type keyDirectiveArgs = {
  fields: Scalars['_FieldSet']['input'];
};

export type keyDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = keyDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type linkDirectiveArgs = {
  url: Scalars['String']['input'];
  as?: Maybe<Scalars['String']['input']>;
  for?: Maybe<link__Purpose>;
  import?: Maybe<Array<Maybe<Scalars['link__Import']['input']>>>;
};

export type linkDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = linkDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type shareableDirectiveArgs = { };

export type shareableDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = shareableDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type inaccessibleDirectiveArgs = { };

export type inaccessibleDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = inaccessibleDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type tagDirectiveArgs = {
  name: Scalars['String']['input'];
};

export type tagDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = tagDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type overrideDirectiveArgs = {
  from: Scalars['String']['input'];
};

export type overrideDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = overrideDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type composeDirectiveDirectiveArgs = {
  name: Scalars['String']['input'];
};

export type composeDirectiveDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = composeDirectiveDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type extendsDirectiveArgs = { };

export type extendsDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = extendsDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  _entities?: Resolver<Array<Maybe<ResolversTypes['_Entity']>>, ParentType, ContextType, RequireFields<Query_entitiesArgs, 'representations'>>;
  _service?: Resolver<ResolversTypes['_Service'], ParentType, ContextType>;
  topProducts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Product']>>>, ParentType, ContextType, RequireFields<QuerytopProductsArgs, 'first'>>;
  me?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryuserArgs, 'id'>>;
  users?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
}>;

export type _EntityResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Entity'] = ResolversParentTypes['_Entity']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Product' | 'Review' | 'User', ParentType, ContextType>;
}>;

export interface _AnyScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['_Any'], any> {
  name: '_Any';
}

export interface _FieldSetScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['_FieldSet'], any> {
  name: '_FieldSet';
}

export interface link__ImportScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['link__Import'], any> {
  name: 'link__Import';
}

export type _ServiceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Service'] = ResolversParentTypes['_Service']> = ResolversObject<{
  sdl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']> = ResolversObject<{
  upc?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  inStock?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  shippingEstimate?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  reviews?: Resolver<Maybe<Array<Maybe<ResolversTypes['Review']>>>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  weight?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ReviewResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Review'] = ResolversParentTypes['Review']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  body?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType>;
  author?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  reviews?: Resolver<Maybe<Array<Maybe<ResolversTypes['Review']>>>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  birthday?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  _Entity?: _EntityResolvers<ContextType>;
  _Any?: GraphQLScalarType;
  _FieldSet?: GraphQLScalarType;
  link__Import?: GraphQLScalarType;
  _Service?: _ServiceResolvers<ContextType>;
  Product?: ProductResolvers<ContextType>;
  Review?: ReviewResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
}>;

export type DirectiveResolvers<ContextType = MeshContext> = ResolversObject<{
  external?: externalDirectiveResolver<any, any, ContextType>;
  requires?: requiresDirectiveResolver<any, any, ContextType>;
  provides?: providesDirectiveResolver<any, any, ContextType>;
  key?: keyDirectiveResolver<any, any, ContextType>;
  link?: linkDirectiveResolver<any, any, ContextType>;
  shareable?: shareableDirectiveResolver<any, any, ContextType>;
  inaccessible?: inaccessibleDirectiveResolver<any, any, ContextType>;
  tag?: tagDirectiveResolver<any, any, ContextType>;
  override?: overrideDirectiveResolver<any, any, ContextType>;
  composeDirective?: composeDirectiveDirectiveResolver<any, any, ContextType>;
  extends?: extendsDirectiveResolver<any, any, ContextType>;
}>;

export type MeshContext = InventoryTypes.Context & ProductsTypes.Context & ReviewsTypes.Context & AccountsTypes.Context & BaseMeshContext;


import { fileURLToPath } from '@graphql-mesh/utils';
const baseDir = pathModule.join(pathModule.dirname(fileURLToPath(import.meta.url)), '..');

const importFn: ImportFn = <T>(moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
  switch(relativeModuleId) {
    case ".mesh/sources/inventory/introspectionSchema":
      return Promise.resolve(importedModule$0) as T;
    
    case ".mesh/sources/products/introspectionSchema":
      return Promise.resolve(importedModule$1) as T;
    
    case ".mesh/sources/reviews/introspectionSchema":
      return Promise.resolve(importedModule$2) as T;
    
    case ".mesh/sources/accounts/introspectionSchema":
      return Promise.resolve(importedModule$3) as T;
    
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

export const rawServeConfig: YamlConfig.Config['serve'] = undefined as any
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
const accountsTransforms = [];
const inventoryTransforms = [];
const productsTransforms = [];
const reviewsTransforms = [];
const additionalTypeDefs = [] as any[];
const accountsHandler = new GraphqlHandler({
              name: "accounts",
              config: {"source":"../mesh/config/accounts.graphql","endpoint":"http://accounts:4001/graphql"},
              baseDir,
              cache,
              pubsub,
              store: sourcesStore.child("accounts"),
              logger: logger.child("accounts"),
              importFn,
            });
const inventoryHandler = new GraphqlHandler({
              name: "inventory",
              config: {"source":"../mesh/config/inventory.graphql","endpoint":"http://inventory:4002/graphql"},
              baseDir,
              cache,
              pubsub,
              store: sourcesStore.child("inventory"),
              logger: logger.child("inventory"),
              importFn,
            });
const productsHandler = new GraphqlHandler({
              name: "products",
              config: {"source":"../mesh/config/products.graphql","endpoint":"http://products:4003/graphql"},
              baseDir,
              cache,
              pubsub,
              store: sourcesStore.child("products"),
              logger: logger.child("products"),
              importFn,
            });
const reviewsHandler = new GraphqlHandler({
              name: "reviews",
              config: {"source":"../mesh/config/reviews.graphql","endpoint":"http://reviews:4004/graphql"},
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
        }
sources[1] = {
          name: 'inventory',
          handler: inventoryHandler,
          transforms: inventoryTransforms
        }
sources[2] = {
          name: 'products',
          handler: productsHandler,
          transforms: productsTransforms
        }
sources[3] = {
          name: 'reviews',
          handler: reviewsHandler,
          transforms: reviewsTransforms
        }
const additionalResolvers = [] as any[]
const merger = new(StitchingMerger as any)({
        cache,
        pubsub,
        logger: logger.child('stitchingMerger'),
        store: rootStore.child('stitchingMerger')
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
    rawServeConfig: undefined,
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
