FROM ghcr.io/grafbase/grafbase:0.59.0

COPY package.json package-lock.json grafbase.config.ts supergraph.graphql ./

RUN npm ci

EXPOSE 4000

CMD ["start", "--federated-graph-schema", "supergraph.graphql", "--port", "4000"]
