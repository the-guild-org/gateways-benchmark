## Overview for: `scenarios/fed-v1-constant-vus-over-time`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. It's being executed with a constant amount of VUs over a fixed amount of time. It measure things like memory usage, CPU usage, average RPS. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was running 400 VUs over 200s


### Comparison


| Gateway                             | RPS ⬇️ |        Requests         |         Duration          |
| :---------------------------------- | :----: | :---------------------: | :-----------------------: |
| wundergraph                         |  509   | 102240 total, 0 failed  |  avg: 777ms, p95: 1104ms  |
| stitching-federation-with-yoga-deno |   81   |  16436 total, 0 failed  | avg: 4900ms, p95: 5784ms  |
| stitching-federation-with-yoga      |   79   | 16382 total, 498 failed | avg: 4957ms, p95: 4829ms  |
| stitching-federation-with-yoga-bun  |   79   |  16215 total, 0 failed  | avg: 4994ms, p95: 6615ms  |
| mesh-supergraph                     |   75   |  15264 total, 0 failed  | avg: 5270ms, p95: 7239ms  |
| apollo-router                       |   73   |  15071 total, 0 failed  | avg: 5361ms, p95: 7816ms  |
| mesh                                |   57   |  11789 total, 0 failed  | avg: 6863ms, p95: 8976ms  |
| mercurius                           |   54   |  10949 total, 0 failed  | avg: 7338ms, p95: 9689ms  |
| stitching-federation-with-yoga-uws  |   51   |  10453 total, 0 failed  | avg: 7748ms, p95: 14039ms |
| apollo-server-node16                |   49   |  10153 total, 0 failed  | avg: 7962ms, p95: 19793ms |
| apollo-gateway-with-yoga            |   48   | 10534 total, 705 failed | avg: 7882ms, p95: 59951ms |
| apollo-gateway-with-yoga-uws        |   46   |  9640 total, 0 failed   | avg: 8462ms, p95: 20117ms |
| apollo-server                       |   46   | 10126 total, 711 failed | avg: 8236ms, p95: 59960ms |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 306720     ✗ 0     
     data_received..................: 509 MB  2.5 MB/s
     data_sent......................: 121 MB  605 kB/s
     http_req_blocked...............: avg=677.63µs min=1.5µs    med=2.7µs    max=352.58ms p(90)=4µs      p(95)=6.9µs  
     http_req_connecting............: avg=650.72µs min=0s       med=0s       max=352.37ms p(90)=0s       p(95)=0s     
     http_req_duration..............: avg=777.18ms min=214.99ms med=756.91ms max=2.08s    p(90)=1.01s    p(95)=1.1s   
       { expected_response:true }...: avg=777.18ms min=214.99ms med=756.91ms max=2.08s    p(90)=1.01s    p(95)=1.1s   
   ✓ http_req_failed................: 0.00%   ✓ 0          ✗ 102240
     http_req_receiving.............: avg=7.93ms   min=17.5µs   med=46.8µs   max=792.11ms p(90)=344.9µs  p(95)=26.8ms 
     http_req_sending...............: avg=1.27ms   min=9.7µs    med=15.3µs   max=882.98ms p(90)=50.71µs  p(95)=153.7µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s       p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=767.97ms min=214.91ms med=751.28ms max=1.88s    p(90)=998.61ms p(95)=1.07s  
     http_reqs......................: 102240  509.308633/s
     iteration_duration.............: avg=783.41ms min=215.73ms med=761.82ms max=2.19s    p(90)=1.02s    p(95)=1.11s  
     iterations.....................: 102240  509.308633/s
     vus............................: 11      min=11       max=400 
     vus_max........................: 400     min=400      max=400 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d68d486c-44de-441f-5e83-1669c3c35600/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4ce05e56-bdd2-4c67-af1d-e32510dc1e00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-deno`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 16354 / ✗ 82
     ✗ valid response structure
      ↳  99% — ✓ 16354 / ✗ 82

     checks.........................: 99.66% ✓ 49144    ✗ 164  
     data_received..................: 83 MB  411 kB/s
     data_sent......................: 20 MB  96 kB/s
     http_req_blocked...............: avg=878.95µs min=1µs   med=2.29µs max=68.48ms p(90)=4.1µs   p(95)=10.75µs
     http_req_connecting............: avg=867.74µs min=0s    med=0s     max=62.02ms p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=4.89s    min=2.49s med=4.83s  max=10.69s  p(90)=5.24s   p(95)=5.78s  
       { expected_response:true }...: avg=4.89s    min=2.49s med=4.83s  max=10.69s  p(90)=5.24s   p(95)=5.78s  
   ✓ http_req_failed................: 0.00%  ✓ 0        ✗ 16436
     http_req_receiving.............: avg=143.71µs min=16µs  med=34.8µs max=88.63ms p(90)=81.25µs p(95)=118.7µs
     http_req_sending...............: avg=206.16µs min=6.4µs med=13.2µs max=24.51ms p(90)=29.55µs p(95)=112.2µs
     http_req_tls_handshaking.......: avg=0s       min=0s    med=0s     max=0s      p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=4.89s    min=2.47s med=4.83s  max=10.69s  p(90)=5.24s   p(95)=5.78s  
     http_reqs......................: 16436  81.19415/s
     iteration_duration.............: avg=4.9s     min=2.49s med=4.83s  max=10.74s  p(90)=5.24s   p(95)=5.79s  
     iterations.....................: 16436  81.19415/s
     vus............................: 170    min=170    max=400
     vus_max........................: 400    min=400    max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b2898113-bbcb-4115-3937-84ff3af44d00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ae5679c7-7536-4e0b-d448-c6e08cab4100/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  96% — ✓ 15884 / ✗ 498
     ✗ no graphql errors
      ↳  96% — ✓ 15765 / ✗ 617
     ✗ valid response structure
      ↳  99% — ✓ 15765 / ✗ 119

     checks.........................: 97.46% ✓ 47414    ✗ 1234 
     data_received..................: 80 MB  387 kB/s
     data_sent......................: 19 MB  94 kB/s
     http_req_blocked...............: avg=1.1ms    min=1.1µs    med=1.9µs  max=84.18ms p(90)=3.4µs  p(95)=373.05µs
     http_req_connecting............: avg=1.07ms   min=0s       med=0s     max=84.15ms p(90)=0s     p(95)=200.7µs 
     http_req_duration..............: avg=4.95s    min=997.4ms  med=2.79s  max=1m0s    p(90)=3.47s  p(95)=4.82s   
       { expected_response:true }...: avg=3.23s    min=997.4ms  med=2.79s  max=58.65s  p(90)=3.09s  p(95)=3.86s   
   ✓ http_req_failed................: 3.03%  ✓ 498      ✗ 15884
     http_req_receiving.............: avg=55.26µs  min=0s       med=33.3µs max=84.48ms p(90)=62.2µs p(95)=75.2µs  
     http_req_sending...............: avg=221.43µs min=6.3µs    med=11.5µs max=49.99ms p(90)=27.9µs p(95)=183.38µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=4.95s    min=997.3ms  med=2.79s  max=1m0s    p(90)=3.47s  p(95)=4.82s   
     http_reqs......................: 16382  79.08219/s
     iteration_duration.............: avg=4.95s    min=997.63ms med=2.79s  max=1m0s    p(90)=3.47s  p(95)=4.82s   
     iterations.....................: 16382  79.08219/s
     vus............................: 34     min=34     max=400
     vus_max........................: 400    min=400    max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/fc73c5f3-6cb5-4863-d4d1-d6421c126c00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/809f25c3-39a9-4a83-a7ea-3dce10d23a00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 48645    ✗ 0    
     data_received..................: 81 MB   398 kB/s
     data_sent......................: 19 MB   95 kB/s
     http_req_blocked...............: avg=2.81ms   min=1.4µs med=2.7µs  max=233.63ms p(90)=4.5µs   p(95)=21.4µs  
     http_req_connecting............: avg=2.75ms   min=0s    med=0s     max=191.25ms p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=4.99s    min=1.49s med=4.81s  max=13.46s   p(90)=5.44s   p(95)=6.61s   
       { expected_response:true }...: avg=4.99s    min=1.49s med=4.81s  max=13.46s   p(90)=5.44s   p(95)=6.61s   
   ✓ http_req_failed................: 0.00%   ✓ 0        ✗ 16215
     http_req_receiving.............: avg=132.64µs min=23µs  med=55.8µs max=62.58ms  p(90)=94.06µs p(95)=150µs   
     http_req_sending...............: avg=991.85µs min=9.3µs med=16.3µs max=157.04ms p(90)=49.46µs p(95)=184.13µs
     http_req_tls_handshaking.......: avg=0s       min=0s    med=0s     max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=4.99s    min=1.49s med=4.81s  max=13.45s   p(90)=5.44s   p(95)=6.61s   
     http_reqs......................: 16215   79.79944/s
     iteration_duration.............: avg=4.99s    min=1.57s med=4.81s  max=13.69s   p(90)=5.45s   p(95)=6.61s   
     iterations.....................: 16215   79.79944/s
     vus............................: 195     min=195    max=400
     vus_max........................: 400     min=400    max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/bdc4eea9-f6af-4d5a-f9a0-2ca6d3257b00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9cc2da6a-9c1f-41e7-05e2-64a88a1a0100/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  98% — ✓ 15066 / ✗ 198
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 15264

     checks.........................: 66.23% ✓ 30330    ✗ 15462
     data_received..................: 78 MB  388 kB/s
     data_sent......................: 18 MB  90 kB/s
     http_req_blocked...............: avg=3.55ms   min=1.6µs  med=2.6µs  max=353.31ms p(90)=3.9µs   p(95)=8.8µs   
     http_req_connecting............: avg=3.02ms   min=0s     med=0s     max=353.14ms p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=5.27s    min=1.97s  med=5.09s  max=11.98s   p(90)=6.12s   p(95)=7.23s   
       { expected_response:true }...: avg=5.27s    min=1.97s  med=5.09s  max=11.98s   p(90)=6.12s   p(95)=7.23s   
   ✓ http_req_failed................: 0.00%  ✓ 0        ✗ 15264
     http_req_receiving.............: avg=68.18µs  min=26.9µs med=58.6µs max=6.01ms   p(90)=90.77µs p(95)=105.08µs
     http_req_sending...............: avg=859.39µs min=10.5µs med=15µs   max=137.48ms p(90)=36.2µs  p(95)=47.1µs  
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=5.26s    min=1.97s  med=5.09s  max=11.97s   p(90)=6.12s   p(95)=7.23s   
     http_reqs......................: 15264  75.44478/s
     iteration_duration.............: avg=5.27s    min=1.97s  med=5.09s  max=12.02s   p(90)=6.12s   p(95)=7.23s   
     iterations.....................: 15264  75.44478/s
     vus............................: 202    min=202    max=400
     vus_max........................: 400    min=400    max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8066fc6c-bc72-483c-8a7f-46a7b7132c00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0bfb55dc-bd65-4c2e-3a4a-75f4f3b79c00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 14999 / ✗ 72
     ✗ valid response structure
      ↳  99% — ✓ 14999 / ✗ 72

     checks.........................: 99.68% ✓ 45069     ✗ 144  
     data_received..................: 75 MB  368 kB/s
     data_sent......................: 18 MB  88 kB/s
     http_req_blocked...............: avg=2.9ms    min=1.3µs  med=2.9µs  max=243.45ms p(90)=4.89µs   p(95)=20.7µs  
     http_req_connecting............: avg=2.86ms   min=0s     med=0s     max=243.39ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=5.36s    min=2.3s   med=5.13s  max=12.08s   p(90)=6.7s     p(95)=7.81s   
       { expected_response:true }...: avg=5.36s    min=2.3s   med=5.13s  max=12.08s   p(90)=6.7s     p(95)=7.81s   
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 15071
     http_req_receiving.............: avg=189.48µs min=26.1µs med=61.4µs max=133.02ms p(90)=118.59µs p(95)=168.44µs
     http_req_sending...............: avg=1.02ms   min=8.8µs  med=17.1µs max=136.45ms p(90)=53.39µs  p(95)=172.54µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=5.35s    min=2.3s   med=5.13s  max=11.94s   p(90)=6.7s     p(95)=7.81s   
     http_reqs......................: 15071  73.915784/s
     iteration_duration.............: avg=5.36s    min=2.3s   med=5.13s  max=12.08s   p(90)=6.7s     p(95)=7.81s   
     iterations.....................: 15071  73.915784/s
     vus............................: 108    min=108     max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3f8533cb-1a3a-4c4e-4626-9bec1c8a5200/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b86ea93a-36fa-47e5-e5bf-381e449f3600/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  98% — ✓ 11584 / ✗ 205
     ✗ valid response structure
      ↳  98% — ✓ 11584 / ✗ 205

     checks.........................: 98.84% ✓ 34957     ✗ 410  
     data_received..................: 61 MB  298 kB/s
     data_sent......................: 14 MB  69 kB/s
     http_req_blocked...............: avg=3.35ms   min=1.7µs  med=3µs    max=201.14ms p(90)=5µs     p(95)=21.16µs 
     http_req_connecting............: avg=3.31ms   min=0s     med=0s     max=201.05ms p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=6.86s    min=3s     med=6.69s  max=14.87s   p(90)=7.99s   p(95)=8.97s   
       { expected_response:true }...: avg=6.86s    min=3s     med=6.69s  max=14.87s   p(90)=7.99s   p(95)=8.97s   
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 11789
     http_req_receiving.............: avg=82.04µs  min=29.3µs med=65.6µs max=15.79ms  p(90)=108.4µs p(95)=127.86µs
     http_req_sending...............: avg=913.18µs min=11.9µs med=17.7µs max=97.8ms   p(90)=43.8µs  p(95)=84.92µs 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=6.86s    min=3s     med=6.69s  max=14.87s   p(90)=7.99s   p(95)=8.97s   
     http_reqs......................: 11789  57.844169/s
     iteration_duration.............: avg=6.86s    min=3s     med=6.69s  max=14.87s   p(90)=8s      p(95)=8.97s   
     iterations.....................: 11789  57.844169/s
     vus............................: 38     min=38      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a5df07a9-8149-4fef-83eb-dd3cc837aa00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a2c712c8-b58e-40e1-a69b-743aada05700/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 32847     ✗ 0    
     data_received..................: 55 MB   272 kB/s
     data_sent......................: 13 MB   64 kB/s
     http_req_blocked...............: avg=5.67ms   min=1.3µs   med=3.7µs  max=366.65ms p(90)=5.62µs  p(95)=25.2µs  
     http_req_connecting............: avg=5.61ms   min=0s      med=0s     max=366.58ms p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=7.33s    min=2.34s   med=7.16s  max=13.99s   p(90)=7.77s   p(95)=9.68s   
       { expected_response:true }...: avg=7.33s    min=2.34s   med=7.16s  max=13.99s   p(90)=7.77s   p(95)=9.68s   
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 10949
     http_req_receiving.............: avg=100.39µs min=28.29µs med=85.1µs max=16.43ms  p(90)=132.5µs p(95)=153.2µs 
     http_req_sending...............: avg=3.69ms   min=9.5µs   med=23µs   max=281.96ms p(90)=49.5µs  p(95)=126.46µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=7.33s    min=2.34s   med=7.16s  max=13.97s   p(90)=7.77s   p(95)=9.67s   
     http_reqs......................: 10949   54.118946/s
     iteration_duration.............: avg=7.34s    min=2.34s   med=7.16s  max=14.28s   p(90)=7.77s   p(95)=9.7s    
     iterations.....................: 10949   54.118946/s
     vus............................: 108     min=108     max=400
     vus_max........................: 400     min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/230a144e-ec87-4aea-4b50-039f77e5f600/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c05ca6e0-8eff-4530-a485-3ba0932a6400/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-uws`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  79% — ✓ 8309 / ✗ 2144
     ✗ valid response structure
      ↳  79% — ✓ 8309 / ✗ 2144

     checks.........................: 86.32% ✓ 27071     ✗ 4288 
     data_received..................: 70 MB  343 kB/s
     data_sent......................: 12 MB  61 kB/s
     http_req_blocked...............: avg=2.63ms   min=1.5µs  med=3µs    max=169.65ms p(90)=5.2µs   p(95)=19.7µs  
     http_req_connecting............: avg=2.59ms   min=0s     med=0s     max=149.02ms p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=7.74s    min=1.76s  med=6.69s  max=25.45s   p(90)=11.15s  p(95)=14.03s  
       { expected_response:true }...: avg=7.74s    min=1.76s  med=6.69s  max=25.45s   p(90)=11.15s  p(95)=14.03s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 10453
     http_req_receiving.............: avg=598.72µs min=20.2µs med=61.1µs max=142.71ms p(90)=99.38µs p(95)=135.68µs
     http_req_sending...............: avg=920.98µs min=7.9µs  med=16.2µs max=221.98ms p(90)=36.5µs  p(95)=131.34µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=7.74s    min=1.76s  med=6.69s  max=25.45s   p(90)=11.15s  p(95)=14.03s  
     http_reqs......................: 10453  51.205587/s
     iteration_duration.............: avg=7.75s    min=1.76s  med=6.69s  max=25.46s   p(90)=11.16s  p(95)=14.04s  
     iterations.....................: 10453  51.205587/s
     vus............................: 43     min=43      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0b5980da-5a68-46c2-c3c2-d63c19a84700/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1510e24f-ad78-4704-92e7-01134f42df00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server-node16`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  70% — ✓ 7130 / ✗ 3023
     ✗ valid response structure
      ↳  70% — ✓ 7130 / ✗ 3023

     checks.........................: 80.15% ✓ 24413   ✗ 6046 
     data_received..................: 48 MB  234 kB/s
     data_sent......................: 12 MB  59 kB/s
     http_req_blocked...............: avg=2.86ms   min=1.5µs   med=2.6µs  max=129.04ms p(90)=4.5µs  p(95)=18.9µs  
     http_req_connecting............: avg=2.83ms   min=0s      med=0s     max=113.78ms p(90)=0s     p(95)=0s      
     http_req_duration..............: avg=7.96s    min=56.57ms med=6.76s  max=24.52s   p(90)=17.86s p(95)=19.79s  
       { expected_response:true }...: avg=7.96s    min=56.57ms med=6.76s  max=24.52s   p(90)=17.86s p(95)=19.79s  
   ✓ http_req_failed................: 0.00%  ✓ 0       ✗ 10153
     http_req_receiving.............: avg=79.63µs  min=22µs    med=59.8µs max=18.05ms  p(90)=85µs   p(95)=96.34µs 
     http_req_sending...............: avg=375.45µs min=7.2µs   med=15µs   max=84.72ms  p(90)=33.7µs p(95)=198.46µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s       p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=7.96s    min=56.48ms med=6.76s  max=24.52s   p(90)=17.86s p(95)=19.79s  
     http_reqs......................: 10153  49.8465/s
     iteration_duration.............: avg=7.96s    min=57.41ms med=6.76s  max=24.52s   p(90)=17.86s p(95)=19.79s  
     iterations.....................: 10153  49.8465/s
     vus............................: 4      min=4     max=400
     vus_max........................: 400    min=400   max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7a0af990-1f70-44a7-2914-c1a1fd7f6700/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/65b07fdb-7651-4126-75ed-4cbf0de45c00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  93% — ✓ 9829 / ✗ 705
     ✗ no graphql errors
      ↳  92% — ✓ 9713 / ✗ 821
     ✗ valid response structure
      ↳  98% — ✓ 9713 / ✗ 116

     checks.........................: 94.68% ✓ 29255     ✗ 1642 
     data_received..................: 49 MB  229 kB/s
     data_sent......................: 13 MB  58 kB/s
     http_req_blocked...............: avg=3.62ms   min=1.6µs    med=2.6µs   max=134.23ms p(90)=249.82µs p(95)=12.23ms 
     http_req_connecting............: avg=3.52ms   min=0s       med=0s      max=130.53ms p(90)=178.07µs p(95)=11.96ms 
     http_req_duration..............: avg=7.88s    min=664.86ms med=3.3s    max=1m0s     p(90)=7.91s    p(95)=59.95s  
       { expected_response:true }...: avg=4.14s    min=664.86ms med=3.27s   max=59.63s   p(90)=3.78s    p(95)=4.51s   
   ✓ http_req_failed................: 6.69%  ✓ 705       ✗ 9829 
     http_req_receiving.............: avg=68.69µs  min=0s       med=61.5µs  max=4.12ms   p(90)=100.8µs  p(95)=120.43µs
     http_req_sending...............: avg=679.48µs min=8.9µs    med=16.89µs max=106.62ms p(90)=87.21µs  p(95)=1.31ms  
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=7.88s    min=664.75ms med=3.3s    max=1m0s     p(90)=7.88s    p(95)=59.93s  
     http_reqs......................: 10534  48.885018/s
     iteration_duration.............: avg=7.89s    min=665.26ms med=3.31s   max=1m0s     p(90)=8.01s    p(95)=1m0s    
     iterations.....................: 10534  48.885018/s
     vus............................: 33     min=33      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/95ab181e-a5bc-415a-7b38-13f308650200/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/fb1b147c-bc5c-4ee3-9641-85b551c68200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga-uws`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  72% — ✓ 7032 / ✗ 2608
     ✗ valid response structure
      ↳  72% — ✓ 7032 / ✗ 2608

     checks.........................: 81.96% ✓ 23704     ✗ 5216 
     data_received..................: 44 MB  216 kB/s
     data_sent......................: 11 MB  56 kB/s
     http_req_blocked...............: avg=5.44ms   min=1.4µs   med=2.6µs   max=282.53ms p(90)=4.7µs  p(95)=27.8µs  
     http_req_connecting............: avg=5.31ms   min=0s      med=0s      max=235.31ms p(90)=0s     p(95)=0s      
     http_req_duration..............: avg=8.46s    min=475ms   med=7.78s   max=24.61s   p(90)=18.15s p(95)=20.11s  
       { expected_response:true }...: avg=8.46s    min=475ms   med=7.78s   max=24.61s   p(90)=18.15s p(95)=20.11s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 9640 
     http_req_receiving.............: avg=100.85µs min=22.1µs  med=56.59µs max=56.37ms  p(90)=109µs  p(95)=144.3µs 
     http_req_sending...............: avg=1.92ms   min=9µs     med=15.8µs  max=118.21ms p(90)=54.7µs p(95)=957.88µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s       p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=8.46s    min=474.9ms med=7.78s   max=24.61s   p(90)=18.15s p(95)=20.11s  
     http_reqs......................: 9640   46.889539/s
     iteration_duration.............: avg=8.46s    min=475.3ms med=7.78s   max=24.61s   p(90)=18.15s p(95)=20.11s  
     iterations.....................: 9640   46.889539/s
     vus............................: 246    min=246     max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f7d0f855-76a6-42c2-389b-040f94ffa700/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e0710e7f-ff45-48c1-9891-ea6f31519a00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  92% — ✓ 9415 / ✗ 711
     ✗ no graphql errors
      ↳  91% — ✓ 9249 / ✗ 877
     ✗ valid response structure
      ↳  98% — ✓ 9249 / ✗ 166

     checks.........................: 94.08% ✓ 27913     ✗ 1754 
     data_received..................: 48 MB  223 kB/s
     data_sent......................: 12 MB  56 kB/s
     http_req_blocked...............: avg=3.53ms   min=1.4µs    med=2.8µs  max=181.59ms p(90)=369.95µs p(95)=13.33ms 
     http_req_connecting............: avg=3.44ms   min=0s       med=0s     max=169.58ms p(90)=279.1µs  p(95)=12.69ms 
     http_req_duration..............: avg=8.23s    min=679.8ms  med=3.43s  max=1m0s     p(90)=23.94s   p(95)=59.96s  
       { expected_response:true }...: avg=4.32s    min=679.8ms  med=3.4s   max=59.17s   p(90)=4s       p(95)=4.81s   
   ✓ http_req_failed................: 7.02%  ✓ 711       ✗ 9415 
     http_req_receiving.............: avg=74.26µs  min=0s       med=69.2µs max=9.31ms   p(90)=101.9µs  p(95)=115.5µs 
     http_req_sending...............: avg=553.96µs min=9.29µs   med=18.3µs max=93.52ms  p(90)=80.65µs  p(95)=630.75µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=8.23s    min=679.68ms med=3.43s  max=1m0s     p(90)=23.93s   p(95)=59.95s  
     http_reqs......................: 10126  46.822127/s
     iteration_duration.............: avg=8.24s    min=681.11ms med=3.43s  max=1m0s     p(90)=24.03s   p(95)=1m0s    
     iterations.....................: 10126  46.822127/s
     vus............................: 30     min=30      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/aa487b9b-c4d1-4014-4d3b-92d13aec5d00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/70b3ac87-db8c-4f68-8f84-187af33b0300/public" alt="HTTP Overview" />


  </details>