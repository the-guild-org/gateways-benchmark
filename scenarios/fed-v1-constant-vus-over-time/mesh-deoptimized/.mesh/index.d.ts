import { GraphQLResolveInfo, SelectionSetNode, FieldNode, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import type { GetMeshOptions } from '@graphql-mesh/runtime';
import type { YamlConfig } from '@graphql-mesh/types';
import { MeshHTTPHandler } from '@graphql-mesh/http';
import { ExecuteMeshFn, SubscribeMeshFn, MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';
import type { InventoryTypes } from './sources/inventory/types';
import type { ReviewsTypes } from './sources/reviews/types';
import type { AccountsTypes } from './sources/accounts/types';
import type { ProductsTypes } from './sources/products/types';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends {
    [key: string]: unknown;
}> = {
    [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<T extends {
    [key: string]: unknown;
}, K extends keyof T> = {
    [_ in K]?: never;
};
export type Incremental<T> = T | {
    [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
};
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
    [P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: {
        input: string;
        output: string;
    };
    String: {
        input: string;
        output: string;
    };
    Boolean: {
        input: boolean;
        output: boolean;
    };
    Int: {
        input: number;
        output: number;
    };
    Float: {
        input: number;
        output: number;
    };
    _FieldSet: {
        input: any;
        output: any;
    };
    _Any: {
        input: any;
        output: any;
    };
};
export type Query = {
    _entities: Array<Maybe<_Entity>>;
    _service: _Service;
    me?: Maybe<User>;
    user?: Maybe<User>;
    users?: Maybe<Array<Maybe<User>>>;
    topProducts?: Maybe<Array<Maybe<Product>>>;
};
export type Query_entitiesArgs = {
    representations: Array<Scalars['_Any']['input']>;
};
export type QueryuserArgs = {
    id: Scalars['ID']['input'];
};
export type QuerytopProductsArgs = {
    first?: InputMaybe<Scalars['Int']['input']>;
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
export type _Service = {
    sdl?: Maybe<Scalars['String']['output']>;
};
export type _Entity = Product | Review | User;
export type Review = {
    id: Scalars['ID']['output'];
    body?: Maybe<Scalars['String']['output']>;
    author?: Maybe<User>;
    product?: Maybe<Product>;
};
export type User = {
    id: Scalars['ID']['output'];
    reviews?: Maybe<Array<Maybe<Review>>>;
    name?: Maybe<Scalars['String']['output']>;
    username?: Maybe<Scalars['String']['output']>;
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
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs> | StitchingResolver<TResult, TParent, TContext, TArgs>;
export type ResolverFn<TResult, TParent, TContext, TArgs> = (parent: TParent, args: TArgs, context: TContext, info: GraphQLResolveInfo) => Promise<TResult> | TResult;
export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (parent: TParent, args: TArgs, context: TContext, info: GraphQLResolveInfo) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;
export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (parent: TParent, args: TArgs, context: TContext, info: GraphQLResolveInfo) => TResult | Promise<TResult>;
export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
    subscribe: SubscriptionSubscribeFn<{
        [key in TKey]: TResult;
    }, TParent, TContext, TArgs>;
    resolve?: SubscriptionResolveFn<TResult, {
        [key in TKey]: TResult;
    }, TContext, TArgs>;
}
export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
    subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
    resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}
export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> = SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs> | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;
export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> = ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>) | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;
export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (parent: TParent, context: TContext, info: GraphQLResolveInfo) => Maybe<TTypes> | Promise<Maybe<TTypes>>;
export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;
export type NextResolverFn<T> = () => Promise<T>;
export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (next: NextResolverFn<TResult>, parent: TParent, args: TArgs, context: TContext, info: GraphQLResolveInfo) => TResult | Promise<TResult>;
/** Mapping of union types */
export type ResolversUnionTypes<RefType extends Record<string, unknown>> = ResolversObject<{
    _Entity: (Product) | (Review) | (User);
}>;
/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
    Query: ResolverTypeWrapper<{}>;
    Product: ResolverTypeWrapper<Product>;
    String: ResolverTypeWrapper<Scalars['String']['output']>;
    Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
    Int: ResolverTypeWrapper<Scalars['Int']['output']>;
    _FieldSet: ResolverTypeWrapper<Scalars['_FieldSet']['output']>;
    _Any: ResolverTypeWrapper<Scalars['_Any']['output']>;
    _Service: ResolverTypeWrapper<_Service>;
    _Entity: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['_Entity']>;
    Review: ResolverTypeWrapper<Review>;
    ID: ResolverTypeWrapper<Scalars['ID']['output']>;
    User: ResolverTypeWrapper<User>;
}>;
/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
    Query: {};
    Product: Product;
    String: Scalars['String']['output'];
    Boolean: Scalars['Boolean']['output'];
    Int: Scalars['Int']['output'];
    _FieldSet: Scalars['_FieldSet']['output'];
    _Any: Scalars['_Any']['output'];
    _Service: _Service;
    _Entity: ResolversUnionTypes<ResolversParentTypes>['_Entity'];
    Review: Review;
    ID: Scalars['ID']['output'];
    User: User;
}>;
export type keyDirectiveArgs = {
    fields: Scalars['_FieldSet']['input'];
    resolvable?: Maybe<Scalars['Boolean']['input']>;
};
export type keyDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = keyDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;
export type computedDirectiveArgs = {
    selectionSet: Scalars['String']['input'];
};
export type computedDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = computedDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;
export type mergeDirectiveArgs = {
    argsExpr?: Maybe<Scalars['String']['input']>;
    keyArg?: Maybe<Scalars['String']['input']>;
    keyField?: Maybe<Scalars['String']['input']>;
    key?: Maybe<Array<Scalars['String']['input']>>;
    additionalArgs?: Maybe<Scalars['String']['input']>;
};
export type mergeDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = mergeDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;
export type canonicalDirectiveArgs = {};
export type canonicalDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = canonicalDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;
export type requiresDirectiveArgs = {
    fields: Scalars['_FieldSet']['input'];
};
export type requiresDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = requiresDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;
export type providesDirectiveArgs = {
    fields: Scalars['_FieldSet']['input'];
};
export type providesDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = providesDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;
export type externalDirectiveArgs = {
    reason?: Maybe<Scalars['String']['input']>;
};
export type externalDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = externalDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;
export type tagDirectiveArgs = {
    name: Scalars['String']['input'];
};
export type tagDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = tagDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;
export type extendsDirectiveArgs = {};
export type extendsDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = extendsDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;
export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
    _entities?: Resolver<Array<Maybe<ResolversTypes['_Entity']>>, ParentType, ContextType, RequireFields<Query_entitiesArgs, 'representations'>>;
    _service?: Resolver<ResolversTypes['_Service'], ParentType, ContextType>;
    me?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
    user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryuserArgs, 'id'>>;
    users?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
    topProducts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Product']>>>, ParentType, ContextType, RequireFields<QuerytopProductsArgs, 'first'>>;
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
export interface _FieldSetScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['_FieldSet'], any> {
    name: '_FieldSet';
}
export interface _AnyScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['_Any'], any> {
    name: '_Any';
}
export type _ServiceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Service'] = ResolversParentTypes['_Service']> = ResolversObject<{
    sdl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type _EntityResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Entity'] = ResolversParentTypes['_Entity']> = ResolversObject<{
    __resolveType: TypeResolveFn<'Product' | 'Review' | 'User', ParentType, ContextType>;
}>;
export type ReviewResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Review'] = ResolversParentTypes['Review']> = ResolversObject<{
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    body?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    author?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
    product?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type UserResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    reviews?: Resolver<Maybe<Array<Maybe<ResolversTypes['Review']>>>, ParentType, ContextType>;
    name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type Resolvers<ContextType = MeshContext> = ResolversObject<{
    Query?: QueryResolvers<ContextType>;
    Product?: ProductResolvers<ContextType>;
    _FieldSet?: GraphQLScalarType;
    _Any?: GraphQLScalarType;
    _Service?: _ServiceResolvers<ContextType>;
    _Entity?: _EntityResolvers<ContextType>;
    Review?: ReviewResolvers<ContextType>;
    User?: UserResolvers<ContextType>;
}>;
export type DirectiveResolvers<ContextType = MeshContext> = ResolversObject<{
    key?: keyDirectiveResolver<any, any, ContextType>;
    computed?: computedDirectiveResolver<any, any, ContextType>;
    merge?: mergeDirectiveResolver<any, any, ContextType>;
    canonical?: canonicalDirectiveResolver<any, any, ContextType>;
    requires?: requiresDirectiveResolver<any, any, ContextType>;
    provides?: providesDirectiveResolver<any, any, ContextType>;
    external?: externalDirectiveResolver<any, any, ContextType>;
    tag?: tagDirectiveResolver<any, any, ContextType>;
    extends?: extendsDirectiveResolver<any, any, ContextType>;
}>;
export type MeshContext = InventoryTypes.Context & ReviewsTypes.Context & AccountsTypes.Context & ProductsTypes.Context & BaseMeshContext;
export declare const rawServeConfig: YamlConfig.Config['serve'];
export declare function getMeshOptions(): Promise<GetMeshOptions>;
export declare function createBuiltMeshHTTPHandler<TServerContext = {}>(): MeshHTTPHandler<TServerContext>;
export declare function getBuiltMesh(): Promise<MeshInstance>;
export declare const execute: ExecuteMeshFn;
export declare const subscribe: SubscribeMeshFn;
