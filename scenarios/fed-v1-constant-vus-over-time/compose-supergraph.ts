import { composeServices } from '@apollo/composition'
import { DocumentNode, Kind, SchemaExtensionNode, parse } from 'graphql'
import { writeFileSync } from 'node:fs'
import { print } from 'graphql';

function cleanupFedV1(doc: DocumentNode): DocumentNode {
    (doc as any).definitions = doc.definitions.filter(d => d.kind != Kind.SCHEMA_EXTENSION);

    return doc;
}

const FED_V1_DIRECTIVES = `
scalar _Any
scalar _FieldSet

directive @external on FIELD_DEFINITION
directive @requires(fields: _FieldSet!) on FIELD_DEFINITION
directive @provides(fields: _FieldSet!) on FIELD_DEFINITION
directive @key(fields: _FieldSet!) on OBJECT | INTERFACE
directive @extends on OBJECT
`;

async function main() {
    let accountsSdl = await fetch('http://127.0.0.1:4001/sdl').then(r => r.text()).then(parse).then(cleanupFedV1);
    let inventorySdl = await fetch('http://127.0.0.1:4002/sdl').then(r => r.text()).then(parse).then(cleanupFedV1);
    let productsSdl = await fetch('http://127.0.0.1:4003/sdl').then(r => r.text()).then(parse).then(cleanupFedV1);
    let reviewsSdl = await fetch('http://127.0.0.1:4004/sdl').then(r => r.text()).then(parse).then(cleanupFedV1);
    
    writeFileSync(__dirname + '/wundergraph/.wundergraph/accounts.graphql', print(accountsSdl));
    writeFileSync(__dirname + '/wundergraph/.wundergraph/inventory.graphql', print(inventorySdl));
    writeFileSync(__dirname + '/wundergraph/.wundergraph/products.graphql', print(productsSdl));
    writeFileSync(__dirname + '/wundergraph/.wundergraph/reviews.graphql', print(reviewsSdl));
    
    writeFileSync(__dirname + '/mesh/config/accounts.graphql', FED_V1_DIRECTIVES + print(accountsSdl));
    writeFileSync(__dirname + '/mesh/config/inventory.graphql', FED_V1_DIRECTIVES + print(inventorySdl));
    writeFileSync(__dirname + '/mesh/config/products.graphql', FED_V1_DIRECTIVES + print(productsSdl));
    writeFileSync(__dirname + '/mesh/config/reviews.graphql', FED_V1_DIRECTIVES + print(reviewsSdl));

    const { supergraphSdl, errors } = composeServices([
        {
            name: 'reviews',
            typeDefs: reviewsSdl,
            url: 'http://reviews:4004/graphql'
        },
        {
            name: 'accounts',
            typeDefs: accountsSdl,
            url: 'http://accounts:4001/graphql'
        },
        {
            name: 'inventory',
            typeDefs: inventorySdl,
            url: 'http://inventory:4002/graphql'
        },
        {
            name: 'products',
            typeDefs: productsSdl,
            url: 'http://products:4003/graphql'
        }
    ]);
    
    if (supergraphSdl) {
        writeFileSync(__dirname + '/apollo-gateway-with-yoga/supergraph.graphql', supergraphSdl!);
        writeFileSync(__dirname + '/apollo-gateway-with-yoga-uws/supergraph.graphql', supergraphSdl!);
        writeFileSync(__dirname + '/apollo-router/supergraph.graphql', supergraphSdl!);
        writeFileSync(__dirname + '/apollo-server/supergraph.graphql', supergraphSdl!);
        writeFileSync(__dirname + '/apollo-server-node16/supergraph.graphql', supergraphSdl!);
        writeFileSync(__dirname + '/mesh-supergraph/supergraph.graphql', supergraphSdl!);
    } else {
        console.log(`Failed to compose supergraph:`, errors);
        throw new Error('No supergraph SDL found!')
    }
}

main().catch(console.error)