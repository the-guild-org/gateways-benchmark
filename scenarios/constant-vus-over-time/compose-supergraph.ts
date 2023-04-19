import { composeServices } from '@apollo/composition'
import { typeDefs as reviewsSdl } from './services/reviews/typedefs'
import { typeDefs as accountsSdl } from './services/accounts/typedefs'
import { typeDefs as inventorySdl } from './services/inventory/typedefs'
import { typeDefs as productsSdl } from './services/products/typedefs'
import { parse } from 'graphql'
import { writeFileSync } from 'node:fs'

const { supergraphSdl } = composeServices([
    {
        name: 'reviews',
        typeDefs: parse(reviewsSdl),
        url: 'http://reviews:4004/graphql'
    },
    {
        name: 'accounts',
        typeDefs: parse(accountsSdl),
        url: 'http://accounts:4001/graphql'
    },
    {
        name: 'inventory',
        typeDefs: parse(inventorySdl),
        url: 'http://inventory:4002/graphql'
    },
    {
        name: 'products',
        typeDefs: parse(productsSdl),
        url: 'http://products:4003/graphql'
    }
]);

if (supergraphSdl) {
    writeFileSync(__dirname + '/apollo-gateway-with-yoga/supergraph.graphql', supergraphSdl!);
    writeFileSync(__dirname + '/apollo-router/supergraph.graphql', supergraphSdl!);
} else {
    throw new Error('No supergraph SDL found!')
}