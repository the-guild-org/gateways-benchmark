// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace SupergraphTypes {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
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

  export type QuerySdk = {
      /** undefined **/
  allPandas: InContextSdkMethod<Query['allPandas'], {}, MeshContext>,
  /** undefined **/
  panda: InContextSdkMethod<Query['panda'], QuerypandaArgs, MeshContext>,
  /** undefined **/
  allProducts: InContextSdkMethod<Query['allProducts'], {}, MeshContext>,
  /** undefined **/
  product: InContextSdkMethod<Query['product'], QueryproductArgs, MeshContext>,
  /** undefined **/
  review: InContextSdkMethod<Query['review'], QueryreviewArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
    
  };

  export type Context = {
      ["Supergraph"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
