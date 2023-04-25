# GraphQL Gateways Benchmark

This repository is a collection is different scenarios and tests performed on different implementations of GraphQL gateways. 

This goals of this repo:

1. Provide a transparent, accurate and descriptive benchmark testing for different tools:

    ➡️ All tests are running in Docker containers, with the same configuration.

    ➡️ During the test, tools like [cadvisor](https://github.com/google/cadvisor) are monitoring stats.

    ➡️ Promethues and Grafana are stores results and stats for every run, and we export and embed it as PNG.

    ➡️ Every scenario have a different report, based on what it measures.

    ➡️ We are using a dedicated GitHub Actions runners, with `concurrency=1` to make sure tests are running as standalone. 

2. Always be up to date:

    ➡️ This allows tools to improve over time.

    ➡️ All code in the repository is open and can be changed by the community. 

    ➡️ Scenarios are executed for every PR, and reports are generated automatically per scenario.

    ➡️ [Renovate](https://github.com/renovatebot/renovate) keeps all dependencies up-to-date.

3. Execute different scenarios that tries to measure real-life cases 

    ➡️ We are trying to create real-life scenarios based on [our experience and our customers](the-guild.dev). 


# Scenarios 

## `constant-vus-over-time`

[Latest Results](./scenarios/constant-vus-over-time/README.md)

Runs on `4-cores · 16 GB RAM` dedicated runner.

This scenario runs the following:

1. 4 GraphQL subgraphs in dedicated services 
2. A GraphQL gateway compatible with the Apollo Federation spec
3. Constant rate of [VUs over fixed time span](./.github/workflows/constant-vus-over-time.workflow.yaml#L17)

This measures the following:
1. RPS (requests per second) rate 
2. Request duration (average, RPS)
3. Request failures (count)
4. CPU usage during the entire execution
5. RAM usage during the entire execution
6. HTTP layer timings