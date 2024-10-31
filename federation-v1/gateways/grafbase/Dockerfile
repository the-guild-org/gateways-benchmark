FROM ghcr.io/grafbase/gateway:0.17.0

COPY supergraph.graphql ./

EXPOSE 4000

CMD ["--schema", "supergraph.graphql", "--listen-address", "127.0.0.1:4000"]
