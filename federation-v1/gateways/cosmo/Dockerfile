FROM alpine:20240329

RUN apk --no-cache add curl

WORKDIR /home/gw
COPY config.json ./

ENV ROUTER_VERSION=0.43.3

RUN curl -L https://github.com/wundergraph/cosmo/releases/download/router%40${ROUTER_VERSION}/router-router@${ROUTER_VERSION}-linux-$(uname -m | sed s:aarch:arm:| sed s:x86_:amd:).tar.gz | gunzip -dc | tar x && mv router /usr/local/bin

ENV LOG_LEVEL=fatal
ENV FEDERATED_GRAPH_NAME=federation
ENV GRAPH_API_TOKEN=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiZmVkZXJhdGVkX2dyYXBoX2lkIjoiSm9obiBEb2UiLCJvcmdhbml6YXRpb25faWQiOiJKb2huIERvZSJ9.l1h9MQUKZuVZ6KklemIfIh7AqCk8Pjed94c6VHk5VOU
ENV LISTEN_ADDR=0.0.0.0:4000
ENV TRACING_ENABLED=false
ENV METRICS_ENABLED=false
ENV METRICS_OTLP_ENABLED=false
ENV GRAPHQL_METRICS_ENABLED=false
ENV PROMETHEUS_ENABLED=false
ENV ROUTER_CONFIG_PATH=config.json

EXPOSE 4000

WORKDIR /home/gw

ENTRYPOINT ["/usr/local/bin/router"]
