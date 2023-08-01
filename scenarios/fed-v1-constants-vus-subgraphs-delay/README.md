## Overview for: `scenarios/fed-v1-constants-vus-subgraphs-delay`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. All subgraphs have an intentional delay on replying, and this creates additional pressure on the gateway's memory. We are running a heavy load of concurrent VUs to measure response time and other stats, during stress. It measure things like memory usage, CPU usage, response times.


This scenario was running 100 VUs over 60s


### Comparison


| Gateway         | RPS ⬇️ |       Requests       |          Duration          |
| :-------------- | :----: | :------------------: | :------------------------: |
| mesh-supergraph |   65   | 4023 total, 0 failed |  avg: 1507ms, p95: 1789ms  |
| mesh            |   62   | 3804 total, 0 failed |  avg: 1590ms, p95: 2142ms  |
| apollo-router   |   55   | 3400 total, 0 failed |  avg: 1794ms, p95: 1838ms  |
| apollo-server   |   45   | 2800 total, 0 failed |  avg: 2171ms, p95: 2897ms  |
| wundergraph     |   23   | 1500 total, 0 failed |  avg: 4271ms, p95: 4414ms  |
| mercurius       |   4    | 300 total, 0 failed  | avg: 22948ms, p95: 26599ms |



<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 4023

     checks.........................: 66.66% ✓ 8046      ✗ 4023 
     data_received..................: 20 MB  330 kB/s
     data_sent......................: 4.8 MB 78 kB/s
     http_req_blocked...............: avg=201.56µs min=1.2µs   med=2.5µs  max=31.16ms p(90)=3.4µs   p(95)=5.27µs
     http_req_connecting............: avg=197.67µs min=0s      med=0s     max=31.13ms p(90)=0s      p(95)=0s    
     http_req_duration..............: avg=1.5s     min=1.4s    med=1.45s  max=2.83s   p(90)=1.59s   p(95)=1.78s 
       { expected_response:true }...: avg=1.5s     min=1.4s    med=1.45s  max=2.83s   p(90)=1.59s   p(95)=1.78s 
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 4023 
     http_req_receiving.............: avg=59.8µs   min=18.59µs med=57.7µs max=2.03ms  p(90)=79.09µs p(95)=84.5µs
     http_req_sending...............: avg=86.47µs  min=7.9µs   med=15.3µs max=21.41ms p(90)=27.6µs  p(95)=32.8µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s      p(90)=0s      p(95)=0s    
     http_req_waiting...............: avg=1.5s     min=1.4s    med=1.45s  max=2.83s   p(90)=1.59s   p(95)=1.78s 
     http_reqs......................: 4023   65.497986/s
     iteration_duration.............: avg=1.5s     min=1.4s    med=1.45s  max=2.83s   p(90)=1.59s   p(95)=1.78s 
     iterations.....................: 4023   65.497986/s
     vus............................: 31     min=31      max=100
     vus_max........................: 100    min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/fe4dfea8-f777-4774-9856-0945bd8a5000/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a639307a-c4bb-4aff-b75b-080af8e8b700/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 11412     ✗ 0    
     data_received..................: 19 MB   310 kB/s
     data_sent......................: 4.5 MB  74 kB/s
     http_req_blocked...............: avg=197.35µs min=1.4µs  med=2.9µs  max=14.38ms p(90)=4.4µs  p(95)=17.1µs 
     http_req_connecting............: avg=189.97µs min=0s     med=0s     max=14.21ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=1.59s    min=1.32s  med=1.5s   max=3.72s   p(90)=1.83s  p(95)=2.14s  
       { expected_response:true }...: avg=1.59s    min=1.32s  med=1.5s   max=3.72s   p(90)=1.83s  p(95)=2.14s  
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 3804 
     http_req_receiving.............: avg=66.99µs  min=23.9µs med=58.6µs max=8.25ms  p(90)=82.6µs p(95)=92.59µs
     http_req_sending...............: avg=57.55µs  min=8.1µs  med=15.7µs max=10.74ms p(90)=31.6µs p(95)=39.18µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=1.58s    min=1.32s  med=1.5s   max=3.72s   p(90)=1.83s  p(95)=2.14s  
     http_reqs......................: 3804    62.040387/s
     iteration_duration.............: avg=1.59s    min=1.32s  med=1.5s   max=3.72s   p(90)=1.83s  p(95)=2.14s  
     iterations.....................: 3804    62.040387/s
     vus............................: 19      min=19      max=100
     vus_max........................: 100     min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8791272e-13f5-4d87-39da-b9a1c73e9e00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/bfe09e8b-153a-421e-696a-1ccb89196800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 10200     ✗ 0    
     data_received..................: 17 MB   276 kB/s
     data_sent......................: 4.0 MB  66 kB/s
     http_req_blocked...............: avg=138.16µs min=1.3µs  med=2.2µs  max=11.17ms p(90)=3.31µs p(95)=8.6µs  
     http_req_connecting............: avg=132.26µs min=0s     med=0s     max=11.1ms  p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=1.79s    min=1.75s  med=1.76s  max=2.71s   p(90)=1.8s   p(95)=1.83s  
       { expected_response:true }...: avg=1.79s    min=1.75s  med=1.76s  max=2.71s   p(90)=1.8s   p(95)=1.83s  
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 3400 
     http_req_receiving.............: avg=57.3µs   min=19.3µs med=44.9µs max=5.86ms  p(90)=67.7µs p(95)=76.1µs 
     http_req_sending...............: avg=53.83µs  min=8.4µs  med=12.9µs max=10.85ms p(90)=25.3µs p(95)=39.83µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=1.79s    min=1.75s  med=1.76s  max=2.71s   p(90)=1.8s   p(95)=1.83s  
     http_reqs......................: 3400    55.377947/s
     iteration_duration.............: avg=1.79s    min=1.75s  med=1.76s  max=2.72s   p(90)=1.8s   p(95)=1.83s  
     iterations.....................: 3400    55.377947/s
     vus............................: 75      min=75      max=100
     vus_max........................: 100     min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4fc1ba1e-a184-4d21-4a2d-bccf6e613c00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/280bb27f-3a67-48df-961e-ac7f776cfa00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 2794 / ✗ 6
     ✗ valid response structure
      ↳  99% — ✓ 2794 / ✗ 6

     checks.........................: 99.85% ✓ 8388      ✗ 12   
     data_received..................: 14 MB  235 kB/s
     data_sent......................: 3.3 MB 54 kB/s
     http_req_blocked...............: avg=153.72µs min=1.5µs  med=2.7µs  max=14.82ms p(90)=4.2µs   p(95)=18µs   
     http_req_connecting............: avg=139.83µs min=0s     med=0s     max=11.96ms p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=2.17s    min=1.82s  med=2.04s  max=4.32s   p(90)=2.53s   p(95)=2.89s  
       { expected_response:true }...: avg=2.17s    min=1.82s  med=2.04s  max=4.32s   p(90)=2.53s   p(95)=2.89s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 2800 
     http_req_receiving.............: avg=79.6µs   min=27.9µs med=64.1µs max=10.84ms p(90)=88.41µs p(95)=98.51µs
     http_req_sending...............: avg=74.36µs  min=8.8µs  med=16.1µs max=11.45ms p(90)=33.31µs p(95)=59.86µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=2.17s    min=1.82s  med=2.04s  max=4.32s   p(90)=2.53s   p(95)=2.89s  
     http_reqs......................: 2800   45.661562/s
     iteration_duration.............: avg=2.17s    min=1.82s  med=2.04s  max=4.33s   p(90)=2.53s   p(95)=2.89s  
     iterations.....................: 2800   45.661562/s
     vus............................: 28     min=28      max=100
     vus_max........................: 100    min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/eadedaaf-b6ca-4616-775e-0dcfdffd5800/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e9469b7e-1576-487c-9bf2-7dbac5bff200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 4500      ✗ 0    
     data_received..................: 7.5 MB  117 kB/s
     data_sent......................: 1.8 MB  28 kB/s
     http_req_blocked...............: avg=285.94µs min=1.7µs  med=2.7µs  max=24.29ms p(90)=10.73µs  p(95)=1.75ms  
     http_req_connecting............: avg=258.19µs min=0s     med=0s     max=11.6ms  p(90)=0s       p(95)=1.57ms  
     http_req_duration..............: avg=4.27s    min=4.11s  med=4.26s  max=4.55s   p(90)=4.33s    p(95)=4.41s   
       { expected_response:true }...: avg=4.27s    min=4.11s  med=4.26s  max=4.55s   p(90)=4.33s    p(95)=4.41s   
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 1500 
     http_req_receiving.............: avg=510.72µs min=24.2µs med=53.3µs max=88.66ms p(90)=335.24µs p(95)=578.94µs
     http_req_sending...............: avg=513.9µs  min=10.3µs med=15.7µs max=65.24ms p(90)=143.86µs p(95)=601.15µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=4.26s    min=4.11s  med=4.26s  max=4.53s   p(90)=4.33s    p(95)=4.41s   
     http_reqs......................: 1500    23.391842/s
     iteration_duration.............: avg=4.27s    min=4.11s  med=4.26s  max=4.55s   p(90)=4.33s    p(95)=4.41s   
     iterations.....................: 1500    23.391842/s
     vus............................: 100     min=100     max=100
     vus_max........................: 100     min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b4b736d8-0ac2-49e6-bb1b-cfb347b2e600/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e5e538ac-4bfb-44ba-c0b3-1486b3946f00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 900      ✗ 0    
     data_received..................: 1.5 MB  20 kB/s
     data_sent......................: 356 kB  4.8 kB/s
     http_req_blocked...............: avg=947.57µs min=1.9µs  med=3.4µs   max=12.38ms p(90)=3.74ms  p(95)=6.21ms  
     http_req_connecting............: avg=930.69µs min=0s     med=0s      max=12.34ms p(90)=3.7ms   p(95)=6.18ms  
     http_req_duration..............: avg=22.94s   min=19.15s med=22.52s  max=28.91s  p(90)=26.17s  p(95)=26.59s  
       { expected_response:true }...: avg=22.94s   min=19.15s med=22.52s  max=28.91s  p(90)=26.17s  p(95)=26.59s  
   ✓ http_req_failed................: 0.00%   ✓ 0        ✗ 300  
     http_req_receiving.............: avg=77.52µs  min=36.2µs med=75.5µs  max=604.1µs p(90)=96.57µs p(95)=108.32µs
     http_req_sending...............: avg=250.95µs min=11.9µs med=22.35µs max=1.37ms  p(90)=1.12ms  p(95)=1.2ms   
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=22.94s   min=19.14s med=22.52s  max=28.91s  p(90)=26.17s  p(95)=26.59s  
     http_reqs......................: 300     4.045783/s
     iteration_duration.............: avg=22.94s   min=19.15s med=22.52s  max=28.91s  p(90)=26.17s  p(95)=26.59s  
     iterations.....................: 300     4.045783/s
     vus............................: 1       min=1      max=100
     vus_max........................: 100     min=100    max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c9544893-14fd-4738-07d6-17cf0a78ef00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f9b09f2e-31dc-493f-e59c-6b31c79d4100/public" alt="HTTP Overview" />


  </details>