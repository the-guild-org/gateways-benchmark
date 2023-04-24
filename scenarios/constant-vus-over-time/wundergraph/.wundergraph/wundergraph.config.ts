import { configureWunderGraphApplication, cors, introspect } from '@wundergraph/sdk';
import server from './wundergraph.server';
import operations from './wundergraph.operations';

const federatedApi = introspect.federation({
	upstreams: [
		{
			url: 'http://accounts:4001/graphql',
		},
		{
			url: 'http://reviews:4004/graphql',
		},
		{
			url: 'http://products:4003/graphql',
		},
		{
			url: 'http://inventory:4002/graphql',
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
