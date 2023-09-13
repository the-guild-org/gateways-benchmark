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
  me?: Maybe<User>;
  user?: Maybe<User>;
  users?: Maybe<Array<Maybe<User>>>;
  topProducts?: Maybe<Array<Maybe<Product>>>;
};


export type QueryuserArgs = {
  id: Scalars['ID']['input'];
};


export type QuerytopProductsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
};

export type User = {
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  username?: Maybe<Scalars['String']['output']>;
  birthday?: Maybe<Scalars['Int']['output']>;
  reviews?: Maybe<Array<Maybe<Review>>>;
};

export type Product = {
  upc: Scalars['String']['output'];
  inStock?: Maybe<Scalars['Boolean']['output']>;
  shippingEstimate?: Maybe<Scalars['Int']['output']>;
  weight?: Maybe<Scalars['Int']['output']>;
  price?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  reviews?: Maybe<Array<Maybe<Review>>>;
};

export type Review = {
  id: Scalars['ID']['output'];
  body?: Maybe<Scalars['String']['output']>;
  product?: Maybe<Product>;
  author?: Maybe<User>;
};

  export type QuerySdk = {
      /** undefined **/
  me: InContextSdkMethod<Query['me'], {}, MeshContext>,
  /** undefined **/
  user: InContextSdkMethod<Query['user'], QueryuserArgs, MeshContext>,
  /** undefined **/
  users: InContextSdkMethod<Query['users'], {}, MeshContext>,
  /** undefined **/
  topProducts: InContextSdkMethod<Query['topProducts'], QuerytopProductsArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
    
  };

  export type Context = {
      ["Supergraph"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
