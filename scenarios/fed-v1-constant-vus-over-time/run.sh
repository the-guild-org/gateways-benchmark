#/bin/sh
set -e

export BASE_DIR=$( realpath ./ )

# This scenario does the following:
# - Runs the services and the gateway specified 
# - Runs constant rate of VUs (defined in BENCH_VUS) over specific time (defined in BENCH_OVER_TIME)
# - Measure estimated request duration, handling, HTTP information, failed responses count, and average RPS  

# Outputs:
# - k6_summary.json - Summary of the K6 test in JSON format
# - k6_summary.txt - Summary of the K6 test in TXT format
# - overview.png - Grafana dashboard screenshot (memory, cpu, overview of k6) 
# - http.png - HTTP results breakdown 

on_error(){
    docker compose  -f ../../docker-compose.metrics.yaml  -f ../fed-v1-constant-vus-over-time/docker-compose.services.yaml -f ../fed-v1-constant-vus-over-time/$1/docker-compose.yaml ps
    docker compose  -f ../../docker-compose.metrics.yaml  -f ../fed-v1-constant-vus-over-time/docker-compose.services.yaml -f ../fed-v1-constant-vus-over-time/$1/docker-compose.yaml logs
}
 
trap 'on_error' ERR

docker compose  -f ../../docker-compose.metrics.yaml  -f ./docker-compose.services.yaml -f ./$1/docker-compose.yaml up -d --wait --force-recreate

if [[ -z "${CI}" ]]; then
    trap "docker compose  -f ../../docker-compose.metrics.yaml  -f ./docker-compose.services.yaml -f ./$1/docker-compose.yaml down && exit 0" INT
fi

export K6_PROMETHEUS_RW_SERVER_URL=http://localhost:9090/api/v1/write

export K6_PROMETHEUS_RW_TREND_AS_NATIVE_HISTOGRAM=true

export START_TIME="$(date +%s)"

k6 --out=experimental-prometheus-rw --out json=./$1/k6_metrics.json run -e SUMMARY_PATH="./$1" benchmark.k6.js

sleep 2

export END_TIME="$(date +%s)"

docker logs gateway-benchmark-gateway-1 > ./$1/gateway_log.txt

rm -rf ./$1/overview.png || echo ""

npx --quiet capture-website-cli "http://localhost:3000/d/01npcT44k/k6?orgId=1&from=${START_TIME}000&to=${END_TIME}000&kiosk" --output ./$1/overview.png --width 1200 --height 740

rm -rf ./$1/http.png || echo ""

npx --quiet capture-website-cli "http://localhost:3000/d-solo/01npcT44k/k6?orgId=1&from=${START_TIME}000&to=${END_TIME}000&panelId=41" --output ./$1/http.png --width 1200

if [[ -z "${CI}" ]]; then
    echo "Done, you can find some stats in Grafana: http://localhost:3000/d/01npcT44k/k6?orgId=1&from=${START_TIME}000&to=${END_TIME}000"
    echo "You can close this and terminate all running services by using Ctrl+C"
    while true; do sleep 10; done
fi