## Overview for: `scenarios/fed-v1-constant-vus-over-time`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. It's being executed with a constant amount of VUs over a fixed amount of time. It measure things like memory usage, CPU usage, average RPS. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was running 400 VUs over 200s


### Comparison


| Gateway                             | RPS ⬇️ |        Requests         |         Duration          |
| :---------------------------------- | :----: | :---------------------: | :-----------------------: |
| wundergraph                         |  567   | 113714 total, 0 failed  |  avg: 700ms, p95: 996ms   |
| stitching-federation-with-yoga-bun  |   97   |  19885 total, 0 failed  | avg: 4069ms, p95: 5442ms  |
| mesh-supergraph                     |   96   |  19526 total, 0 failed  | avg: 4115ms, p95: 5090ms  |
| stitching-federation-with-yoga-deno |   92   |  18623 total, 0 failed  | avg: 4328ms, p95: 5080ms  |
| mesh                                |   87   |  17644 total, 0 failed  | avg: 4561ms, p95: 5691ms  |
| stitching-federation-with-yoga-uws  |   73   |  15017 total, 0 failed  | avg: 5372ms, p95: 8800ms  |
| apollo-gateway-with-yoga-uws        |   70   |  14283 total, 0 failed  | avg: 5663ms, p95: 10404ms |
| mercurius                           |   70   |  14136 total, 0 failed  | avg: 5680ms, p95: 6431ms  |
| apollo-router                       |   69   |  14110 total, 0 failed  | avg: 5737ms, p95: 8367ms  |
| apollo-gateway-with-yoga            |   59   | 12884 total, 591 failed | avg: 6395ms, p95: 34784ms |
| stitching-federation-with-yoga      |   52   | 11363 total, 747 failed | avg: 7312ms, p95: 59935ms |
| apollo-server                       |   49   | 10441 total, 462 failed | avg: 7843ms, p95: 30708ms |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 341142     ✗ 0     
     data_received..................: 566 MB  2.8 MB/s
     data_sent......................: 135 MB  674 kB/s
     http_req_blocked...............: avg=313µs    min=1.3µs    med=2.5µs    max=426.07ms p(90)=3.7µs    p(95)=6.9µs   
     http_req_connecting............: avg=288.71µs min=0s       med=0s       max=287.87ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=699.5ms  min=75.73ms  med=679.09ms max=2.19s    p(90)=916.79ms p(95)=996.08ms
       { expected_response:true }...: avg=699.5ms  min=75.73ms  med=679.09ms max=2.19s    p(90)=916.79ms p(95)=996.08ms
   ✓ http_req_failed................: 0.00%   ✓ 0          ✗ 113714
     http_req_receiving.............: avg=5.69ms   min=17.2µs   med=46µs     max=481.46ms p(90)=287.2µs  p(95)=9.73ms  
     http_req_sending...............: avg=1.19ms   min=8.5µs    med=14.6µs   max=523.27ms p(90)=48µs     p(95)=143.1µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=692.61ms min=75.41ms  med=675.15ms max=2.16s    p(90)=901.77ms p(95)=975.19ms
     http_reqs......................: 113714  567.431508/s
     iteration_duration.............: avg=704.14ms min=228.19ms med=683.17ms max=2.26s    p(90)=922.23ms p(95)=1s      
     iterations.....................: 113714  567.431508/s
     vus............................: 400     min=400      max=400 
     vus_max........................: 400     min=400      max=400 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8de53e2e-0030-4c74-ffa3-87c090a79f00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6477f0bc-f71e-48c4-d856-f23c9c798a00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 59655   ✗ 0    
     data_received..................: 99 MB   488 kB/s
     data_sent......................: 24 MB   116 kB/s
     http_req_blocked...............: avg=2.27ms   min=1.2µs  med=2.4µs  max=194.5ms  p(90)=3.9µs  p(95)=13.5µs  
     http_req_connecting............: avg=2.24ms   min=0s     med=0s     max=194.43ms p(90)=0s     p(95)=0s      
     http_req_duration..............: avg=4.06s    min=3s     med=3.91s  max=11.35s   p(90)=4.5s   p(95)=5.44s   
       { expected_response:true }...: avg=4.06s    min=3s     med=3.91s  max=11.35s   p(90)=4.5s   p(95)=5.44s   
   ✓ http_req_failed................: 0.00%   ✓ 0       ✗ 19885
     http_req_receiving.............: avg=134.46µs min=19.9µs med=46.5µs max=125.1ms  p(90)=74.7µs p(95)=126.26µs
     http_req_sending...............: avg=929.23µs min=7.2µs  med=13.8µs max=106.43ms p(90)=35.3µs p(95)=144.64µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=4.06s    min=3s     med=3.91s  max=11.35s   p(90)=4.5s   p(95)=5.42s   
     http_reqs......................: 19885   97.9652/s
     iteration_duration.............: avg=4.07s    min=3s     med=3.92s  max=11.5s    p(90)=4.5s   p(95)=5.51s   
     iterations.....................: 19885   97.9652/s
     vus............................: 116     min=116   max=400
     vus_max........................: 400     min=400   max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/223b757f-5004-45ed-034f-4df3bf8c1f00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/02ac92c7-6c57-44a4-3625-c0914fc9e300/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 19506 / ✗ 20
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 19526

     checks.........................: 66.63% ✓ 39032     ✗ 19546
     data_received..................: 98 MB  488 kB/s
     data_sent......................: 23 MB  115 kB/s
     http_req_blocked...............: avg=1.77ms  min=1.1µs  med=2.4µs  max=140.14ms p(90)=3.9µs   p(95)=5.17µs
     http_req_connecting............: avg=1.75ms  min=0s     med=0s     max=132.08ms p(90)=0s      p(95)=0s    
     http_req_duration..............: avg=4.11s   min=1.85s  med=4s     max=9.31s    p(90)=4.65s   p(95)=5.09s 
       { expected_response:true }...: avg=4.11s   min=1.85s  med=4s     max=9.31s    p(90)=4.65s   p(95)=5.09s 
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 19526
     http_req_receiving.............: avg=64.72µs min=21.9µs med=58.7µs max=15.44ms  p(90)=83.09µs p(95)=92.1µs
     http_req_sending...............: avg=148.4µs min=7.6µs  med=13.8µs max=36.09ms  p(90)=26.4µs  p(95)=32.7µs
     http_req_tls_handshaking.......: avg=0s      min=0s     med=0s     max=0s       p(90)=0s      p(95)=0s    
     http_req_waiting...............: avg=4.11s   min=1.85s  med=4s     max=9.31s    p(90)=4.65s   p(95)=5.09s 
     http_reqs......................: 19526  96.791523/s
     iteration_duration.............: avg=4.11s   min=1.85s  med=4s     max=9.38s    p(90)=4.65s   p(95)=5.09s 
     iterations.....................: 19526  96.791523/s
     vus............................: 48     min=48      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7c34f476-fd5a-459c-4d17-0ec543c93300/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d10e6cb4-e3b6-47f2-e111-3e0a4318f000/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-deno`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 18596 / ✗ 27
     ✗ valid response structure
      ↳  99% — ✓ 18596 / ✗ 27

     checks.........................: 99.90% ✓ 55815     ✗ 54   
     data_received..................: 94 MB  462 kB/s
     data_sent......................: 22 MB  109 kB/s
     http_req_blocked...............: avg=501.7µs  min=800ns med=1.9µs  max=64.19ms p(90)=3.2µs   p(95)=3.9µs  
     http_req_connecting............: avg=480.53µs min=0s    med=0s     max=46.57ms p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=4.32s    min=2.39s med=4.26s  max=8.17s   p(90)=4.55s   p(95)=5.08s  
       { expected_response:true }...: avg=4.32s    min=2.39s med=4.26s  max=8.17s   p(90)=4.55s   p(95)=5.08s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 18623
     http_req_receiving.............: avg=93.59µs  min=14µs  med=27µs   max=27.56ms p(90)=72.8µs  p(95)=89.79µs
     http_req_sending...............: avg=100.38µs min=5.9µs med=10.9µs max=63.94ms p(90)=24.38µs p(95)=97.1µs 
     http_req_tls_handshaking.......: avg=0s       min=0s    med=0s     max=0s      p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=4.32s    min=2.39s med=4.26s  max=8.16s   p(90)=4.55s   p(95)=5.08s  
     http_reqs......................: 18623  92.000159/s
     iteration_duration.............: avg=4.32s    min=2.39s med=4.26s  max=8.2s    p(90)=4.55s   p(95)=5.08s  
     iterations.....................: 18623  92.000159/s
     vus............................: 214    min=214     max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/295c6346-823e-4efc-1c4c-b98f450d9400/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/51927f90-211d-4c8f-c4d6-7d9d68e74f00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 17546 / ✗ 98
     ✗ valid response structure
      ↳  99% — ✓ 17546 / ✗ 98

     checks.........................: 99.62% ✓ 52736     ✗ 196  
     data_received..................: 89 MB  440 kB/s
     data_sent......................: 21 MB  104 kB/s
     http_req_blocked...............: avg=1.24ms  min=1.2µs  med=2.29µs max=97.82ms p(90)=3.8µs  p(95)=7.58µs
     http_req_connecting............: avg=1.22ms  min=0s     med=0s     max=86.34ms p(90)=0s     p(95)=0s    
     http_req_duration..............: avg=4.56s   min=2.01s  med=4.49s  max=9.62s   p(90)=5.22s  p(95)=5.69s 
       { expected_response:true }...: avg=4.56s   min=2.01s  med=4.49s  max=9.62s   p(90)=5.22s  p(95)=5.69s 
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 17644
     http_req_receiving.............: avg=64.08µs min=22.3µs med=52.5µs max=47.04ms p(90)=73.4µs p(95)=83.3µs
     http_req_sending...............: avg=219.7µs min=7.4µs  med=13µs   max=37.32ms p(90)=27µs   p(95)=33µs  
     http_req_tls_handshaking.......: avg=0s      min=0s     med=0s     max=0s      p(90)=0s     p(95)=0s    
     http_req_waiting...............: avg=4.56s   min=2.01s  med=4.49s  max=9.62s   p(90)=5.22s  p(95)=5.69s 
     http_reqs......................: 17644  87.275315/s
     iteration_duration.............: avg=4.56s   min=2.01s  med=4.49s  max=9.7s    p(90)=5.22s  p(95)=5.69s 
     iterations.....................: 17644  87.275315/s
     vus............................: 83     min=83      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/32b114ad-6b96-4a78-63cb-ed0cba795f00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/410d0045-c743-4dda-44eb-b61b0ad9be00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-uws`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  91% — ✓ 13778 / ✗ 1239
     ✗ valid response structure
      ↳  91% — ✓ 13778 / ✗ 1239

     checks.........................: 94.49% ✓ 42573     ✗ 2478 
     data_received..................: 84 MB  414 kB/s
     data_sent......................: 18 MB  88 kB/s
     http_req_blocked...............: avg=941.94µs min=1.1µs  med=2µs   max=71.08ms p(90)=3.3µs   p(95)=7.5µs  
     http_req_connecting............: avg=928.19µs min=0s     med=0s    max=70.9ms  p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=5.37s    min=1.17s  med=4.71s max=14.52s  p(90)=7.6s    p(95)=8.8s   
       { expected_response:true }...: avg=5.37s    min=1.17s  med=4.71s max=14.52s  p(90)=7.6s    p(95)=8.8s   
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 15017
     http_req_receiving.............: avg=94.2µs   min=15.6µs med=42µs  max=60.66ms p(90)=70.8µs  p(95)=84.31µs
     http_req_sending...............: avg=142.12µs min=6.5µs  med=12µs  max=60.66ms p(90)=26.59µs p(95)=41.11µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s    max=0s      p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=5.37s    min=1.17s  med=4.71s max=14.52s  p(90)=7.6s    p(95)=8.8s   
     http_reqs......................: 15017  73.907731/s
     iteration_duration.............: avg=5.37s    min=1.17s  med=4.71s max=14.55s  p(90)=7.61s   p(95)=8.8s   
     iterations.....................: 15017  73.907731/s
     vus............................: 116    min=116     max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2e96a2b4-629a-4e22-7fd4-f935a526b600/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9f751ef5-c8c6-4d8b-ebaa-2551455f9e00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga-uws`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  90% — ✓ 12974 / ✗ 1309
     ✗ valid response structure
      ↳  90% — ✓ 12974 / ✗ 1309

     checks.........................: 93.89% ✓ 40231     ✗ 2618 
     data_received..................: 69 MB  337 kB/s
     data_sent......................: 17 MB  83 kB/s
     http_req_blocked...............: avg=1.42ms  min=900ns  med=2µs     max=89.66ms p(90)=3.2µs  p(95)=5.88µs
     http_req_connecting............: avg=1.4ms   min=0s     med=0s      max=89.46ms p(90)=0s     p(95)=0s    
     http_req_duration..............: avg=5.66s   min=1.07s  med=5.49s   max=16.21s  p(90)=9.14s  p(95)=10.4s 
       { expected_response:true }...: avg=5.66s   min=1.07s  med=5.49s   max=16.21s  p(90)=9.14s  p(95)=10.4s 
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 14283
     http_req_receiving.............: avg=52.7µs  min=15.7µs med=34.29µs max=53.51ms p(90)=66.4µs p(95)=79.3µs
     http_req_sending...............: avg=197.2µs min=6.1µs  med=11.8µs  max=57.51ms p(90)=26.6µs p(95)=97.9µs
     http_req_tls_handshaking.......: avg=0s      min=0s     med=0s      max=0s      p(90)=0s     p(95)=0s    
     http_req_waiting...............: avg=5.66s   min=1.07s  med=5.49s   max=16.21s  p(90)=9.14s  p(95)=10.4s 
     http_reqs......................: 14283  70.181369/s
     iteration_duration.............: avg=5.66s   min=1.07s  med=5.49s   max=16.21s  p(90)=9.14s  p(95)=10.4s 
     iterations.....................: 14283  70.181369/s
     vus............................: 187    min=187     max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ded9ae2f-db6a-45fe-27d1-1ffce5531000/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/04895752-7c21-412c-0282-2eea48922000/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 42408     ✗ 0    
     data_received..................: 71 MB   353 kB/s
     data_sent......................: 17 MB   83 kB/s
     http_req_blocked...............: avg=2.29ms   min=1.2µs  med=3µs    max=166.69ms p(90)=4.59µs p(95)=18µs   
     http_req_connecting............: avg=2.24ms   min=0s     med=0s     max=165.68ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=5.67s    min=1.75s  med=5.57s  max=9.72s    p(90)=6.16s  p(95)=6.43s  
       { expected_response:true }...: avg=5.67s    min=1.75s  med=5.57s  max=9.72s    p(90)=6.16s  p(95)=6.43s  
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 14136
     http_req_receiving.............: avg=66.22µs  min=22.4µs med=62.6µs max=4.5ms    p(90)=87.8µs p(95)=95.5µs 
     http_req_sending...............: avg=319.48µs min=7.4µs  med=17.2µs max=93.13ms  p(90)=34µs   p(95)=56.92µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=5.67s    min=1.75s  med=5.57s  max=9.72s    p(90)=6.16s  p(95)=6.43s  
     http_reqs......................: 14136   70.071171/s
     iteration_duration.............: avg=5.68s    min=1.75s  med=5.58s  max=9.78s    p(90)=6.16s  p(95)=6.43s  
     iterations.....................: 14136   70.071171/s
     vus............................: 245     min=245     max=400
     vus_max........................: 400     min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/45ba9e9b-45c6-4cc0-ed36-94e80d54b500/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ef4e5a20-7c3c-4569-f092-3604c5448a00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 14024 / ✗ 86
     ✗ valid response structure
      ↳  99% — ✓ 14024 / ✗ 86

     checks.........................: 99.59% ✓ 42158     ✗ 172  
     data_received..................: 70 MB  344 kB/s
     data_sent......................: 17 MB  82 kB/s
     http_req_blocked...............: avg=1.94ms   min=1.4µs   med=3.3µs   max=119.41ms p(90)=5.5µs    p(95)=20.45µs 
     http_req_connecting............: avg=1.91ms   min=0s      med=0s      max=119.35ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=5.73s    min=2.55s   med=5.47s   max=12.55s   p(90)=7.15s    p(95)=8.36s   
       { expected_response:true }...: avg=5.73s    min=2.55s   med=5.47s   max=12.55s   p(90)=7.15s    p(95)=8.36s   
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 14110
     http_req_receiving.............: avg=121.64µs min=23.49µs med=71.69µs max=101.46ms p(90)=124.19µs p(95)=159.65µs
     http_req_sending...............: avg=686.44µs min=9µs     med=21.3µs  max=231.71ms p(90)=51.51µs  p(95)=165.07µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=5.73s    min=2.55s   med=5.47s   max=12.53s   p(90)=7.15s    p(95)=8.36s   
     http_reqs......................: 14110  69.127151/s
     iteration_duration.............: avg=5.74s    min=2.55s   med=5.47s   max=12.66s   p(90)=7.15s    p(95)=8.37s   
     iterations.....................: 14110  69.127151/s
     vus............................: 50     min=50      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/219f5fe4-15df-46b1-8dfd-5bd1d3716e00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/bda7aeec-d097-4e9e-beac-a01ae4554d00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  95% — ✓ 12293 / ✗ 591
     ✗ no graphql errors
      ↳  95% — ✓ 12256 / ✗ 628
     ✗ valid response structure
      ↳  99% — ✓ 12256 / ✗ 37

     checks.........................: 96.70% ✓ 36805     ✗ 1256 
     data_received..................: 62 MB  287 kB/s
     data_sent......................: 15 MB  71 kB/s
     http_req_blocked...............: avg=1.52ms   min=1.4µs med=2.8µs  max=81.31ms p(90)=16µs   p(95)=3.76ms  
     http_req_connecting............: avg=1.49ms   min=0s    med=0s     max=62.73ms p(90)=0s     p(95)=3.07ms  
     http_req_duration..............: avg=6.39s    min=1.37s med=3.24s  max=1m0s    p(90)=3.82s  p(95)=34.78s  
       { expected_response:true }...: avg=3.81s    min=1.37s med=3.23s  max=59.49s  p(90)=3.67s  p(95)=3.86s   
   ✓ http_req_failed................: 4.58%  ✓ 591       ✗ 12293
     http_req_receiving.............: avg=63.9µs   min=0s    med=62.9µs max=5.78ms  p(90)=85.2µs p(95)=91.6µs  
     http_req_sending...............: avg=276.76µs min=8.1µs med=16.8µs max=35.42ms p(90)=35.7µs p(95)=215.22µs
     http_req_tls_handshaking.......: avg=0s       min=0s    med=0s     max=0s      p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=6.39s    min=1.37s med=3.24s  max=1m0s    p(90)=3.82s  p(95)=34.78s  
     http_reqs......................: 12884  59.855649/s
     iteration_duration.............: avg=6.39s    min=1.37s med=3.24s  max=1m0s    p(90)=3.82s  p(95)=34.79s  
     iterations.....................: 12884  59.855649/s
     vus............................: 61     min=61      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/50db044f-e66d-470d-566e-7c3df78b4600/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9260822f-3e44-4fba-0f30-759507589400/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  93% — ✓ 10616 / ✗ 747
     ✗ no graphql errors
      ↳  93% — ✓ 10594 / ✗ 769
     ✗ valid response structure
      ↳  99% — ✓ 10594 / ✗ 22

     checks.........................: 95.38% ✓ 31804     ✗ 1538 
     data_received..................: 54 MB  249 kB/s
     data_sent......................: 14 MB  63 kB/s
     http_req_blocked...............: avg=4.72ms   min=1.8µs    med=3µs    max=357.43ms p(90)=137.52µs p(95)=6.41ms  
     http_req_connecting............: avg=4.61ms   min=0s       med=0s     max=357.39ms p(90)=90.74µs  p(95)=5.57ms  
     http_req_duration..............: avg=7.31s    min=305.86ms med=2.77s  max=1m0s     p(90)=5.22s    p(95)=59.93s  
       { expected_response:true }...: avg=3.6s     min=305.86ms med=2.75s  max=59.56s   p(90)=3.11s    p(95)=3.79s   
   ✓ http_req_failed................: 6.57%  ✓ 747       ✗ 10616
     http_req_receiving.............: avg=76.79µs  min=0s       med=68.5µs max=10.17ms  p(90)=104.5µs  p(95)=121.97µs
     http_req_sending...............: avg=478.95µs min=12.5µs   med=19µs   max=145.39ms p(90)=56.14µs  p(95)=458.27µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=7.31s    min=305.72ms med=2.77s  max=1m0s     p(90)=5.22s    p(95)=59.93s  
     http_reqs......................: 11363  52.822146/s
     iteration_duration.............: avg=7.32s    min=306.97ms med=2.77s  max=1m0s     p(90)=5.23s    p(95)=1m0s    
     iterations.....................: 11363  52.822146/s
     vus............................: 24     min=24      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9a6c27ba-0d4f-486f-ffe4-8f3835b1ca00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9a5d372f-a0a0-414d-d101-f093d8214700/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  95% — ✓ 9979 / ✗ 462
     ✗ no graphql errors
      ↳  89% — ✓ 9378 / ✗ 1063
     ✗ valid response structure
      ↳  93% — ✓ 9378 / ✗ 601

     checks.........................: 93.11% ✓ 28735     ✗ 2126 
     data_received..................: 51 MB  240 kB/s
     data_sent......................: 12 MB  59 kB/s
     http_req_blocked...............: avg=7.32ms  min=1.3µs med=3.1µs  max=356.94ms p(90)=18.8µs p(95)=14.93ms
     http_req_connecting............: avg=7.21ms  min=0s    med=0s     max=356.9ms  p(90)=0s     p(95)=14.35ms
     http_req_duration..............: avg=7.84s   min=1.3s  med=4.8s   max=1m0s     p(90)=6.65s  p(95)=30.7s  
       { expected_response:true }...: avg=5.43s   min=1.3s  med=4.77s  max=59.82s   p(90)=5.94s  p(95)=6.92s  
   ✓ http_req_failed................: 4.42%  ✓ 462       ✗ 9979 
     http_req_receiving.............: avg=81.79µs min=0s    med=68.8µs max=20.23ms  p(90)=99µs   p(95)=112.8µs
     http_req_sending...............: avg=2.62ms  min=9µs   med=19µs   max=150.74ms p(90)=53.1µs p(95)=1.08ms 
     http_req_tls_handshaking.......: avg=0s      min=0s    med=0s     max=0s       p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=7.84s   min=1.3s  med=4.8s   max=1m0s     p(90)=6.64s  p(95)=30.7s  
     http_reqs......................: 10441  49.320379/s
     iteration_duration.............: avg=7.85s   min=1.3s  med=4.8s   max=1m0s     p(90)=6.65s  p(95)=30.71s 
     iterations.....................: 10441  49.320379/s
     vus............................: 59     min=59      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d181a49b-c2fc-468b-c412-5c3e21826600/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a0cc6326-e5ce-454f-24cc-761054d9a800/public" alt="HTTP Overview" />


  </details>