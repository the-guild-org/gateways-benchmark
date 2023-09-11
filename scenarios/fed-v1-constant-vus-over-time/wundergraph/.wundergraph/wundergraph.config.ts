import { configureWunderGraphApplication, cors, introspect } from '@wundergraph/sdk';
import server from './wundergraph.server';
import operations from './wundergraph.operations';
import { readFileSync } from 'fs';

const federatedApi = introspect.federation({
	upstreams: [
		{
			url: 'http://accounts:4001/graphql',
			name: 'accounts',
			loadSchemaFromString: readFileSync(__dirname + '/../../accounts.graphql', 'utf-8')
		},
		{
			url: 'http://inventory:4002/graphql',
			name: 'inventory',
			loadSchemaFromString: readFileSync(__dirname + '/../../inventory.graphql', 'utf-8')
		},
		{
			url: 'http://products:4003/graphql',
			name: 'products',
			loadSchemaFromString: readFileSync(__dirname + '/../../products.graphql', 'utf-8')
		},
		{
			url: 'http://reviews:4004/graphql',
			name: 'reviews',
			loadSchemaFromString: readFileSync(__dirname + '/../../reviews.graphql', 'utf-8')
		},
	],
});

configureWunderGraphApplication({
	apis: [federatedApi],
	server,
	operations,
	codeGenerators: [],
	cors: cors.allowAll,
	security: {
		enableGraphQLEndpoint: true,
	},
});
