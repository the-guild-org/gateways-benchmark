import { composeServices } from '@apollo/composition'
import { DocumentNode, Kind, SchemaExtensionNode, parse } from 'graphql'
import { writeFileSync } from 'node:fs'

function cleanupFedV1(doc: DocumentNode): DocumentNode {
    const schemaNode = doc.definitions.find(d => d.kind === Kind.SCHEMA_EXTENSION)! as SchemaExtensionNode;
    (schemaNode as any).directives = [];

    return doc;
}

async function main() {
    let accountsSdl = await fetch('http://127.0.0.1:4001/sdl').then(r => r.text()).then(parse).then(cleanupFedV1);
    let inventorySdl = await fetch('http://127.0.0.1:4002/sdl').then(r => r.text()).then(parse).then(cleanupFedV1);
    let productsSdl = await fetch('http://127.0.0.1:4003/sdl').then(r => r.text()).then(parse).then(cleanupFedV1);
    let reviewsSdl = await fetch('http://127.0.0.1:4004/sdl').then(r => r.text()).then(parse).then(cleanupFedV1);

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