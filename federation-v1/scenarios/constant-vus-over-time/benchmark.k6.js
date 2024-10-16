import { makeGraphQLRequest, handleBenchmarkSummary } from '../k6.shared.js'

const vus = __ENV.BENCH_VUS ? parseInt(__ENV.BENCH_VUS) : 100;
const time = __ENV.BENCH_OVER_TIME || "30s";

export const options = {
  vus: vus,
  duration: time,
};

export function setup() {
  makeGraphQLRequest();
}

export default function() {
  makeGraphQLRequest()
}

export function handleSummary(data) {
  return handleBenchmarkSummary(data, { vus, time });
}