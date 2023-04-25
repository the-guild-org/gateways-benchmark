import { configureWunderGraphOperations } from '@wundergraph/sdk';
import type { OperationsConfiguration } from './generated/wundergraph.operations';

export default configureWunderGraphOperations<OperationsConfiguration>({
	operations: {
		defaultConfig: {
			authentication: {
				required: false,
			},
		},
		queries: (config) => ({
			...config,
			caching: {
				enable: false,
				staleWhileRevalidate: 60,
				maxAge: 60,
				public: true,
			},
			liveQuery: {
				enable: false,
			},
		}),
		mutations: (config) => ({
			...config,
		}),
		subscriptions: (config) => ({
			...config,
		}),
		custom: {},
	},
});
