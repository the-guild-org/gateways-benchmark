## Overview for: `scenarios/fed-v1-constant-vus-over-time`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. It's being executed with a constant amount of VUs over a fixed amount of time. It measure things like memory usage, CPU usage, average RPS. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was running 350 VUs over 400s


### Comparison


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e7f55098-7543-430a-a5fa-3741280f2e00/public" alt="Comparison" />


| Gateway                             | RPS ⬇️ |        Requests         |          Duration          |
| :---------------------------------- | :----: | :---------------------: | :------------------------: |
| wundergraph                         |  1244  | 498344 total, 0 failed  |   avg: 231ms, p95: 458ms   |
| mesh-bun                            |  430   | 172276 total, 0 failed  |  avg: 810ms, p95: 1175ms   |
| mesh                                |  212   |  85078 total, 0 failed  |  avg: 1645ms, p95: 2407ms  |
| apollo-gateway-with-yoga-bun        |   48   |  19639 total, 0 failed  | avg: 6943ms, p95: 10331ms  |
| apollo-router                       |   48   |  19606 total, 0 failed  |  avg: 7172ms, p95: 9991ms  |
| stitching-federation-with-yoga-bun  |   41   |  17068 total, 0 failed  | avg: 8211ms, p95: 12432ms  |
| apollo-gateway-with-yoga            |   39   |  16049 total, 0 failed  | avg: 8722ms, p95: 13326ms  |
| mesh-supergraph                     |   37   |  15132 total, 0 failed  | avg: 9330ms, p95: 10298ms  |
| stitching-federation-with-yoga-deno |   37   |  15383 total, 0 failed  | avg: 9160ms, p95: 11541ms  |
| apollo-gateway-with-yoga-uws        |   33   |  13682 total, 0 failed  | avg: 10269ms, p95: 17340ms |
| stitching-federation-with-yoga      |   33   |  13654 total, 0 failed  | avg: 10338ms, p95: 12348ms |
| apollo-server                       |   32   |  13343 total, 0 failed  | avg: 10557ms, p95: 17528ms |
| apollo-server-node16                |   26   |  10956 total, 0 failed  | avg: 12855ms, p95: 19594ms |
| stitching-federation-with-yoga-uws  |   24   |  9951 total, 0 failed   | avg: 14282ms, p95: 16498ms |
| mercurius                           |   7    | 3050 total, 1454 failed | avg: 46454ms, p95: 60001ms |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 498344

     checks.........................: 66.66% ✓ 996688      ✗ 498344
     data_received..................: 72 MB  181 kB/s
     data_sent......................: 592 MB 1.5 MB/s
     http_req_blocked...............: avg=124.66µs min=900ns    med=2.1µs    max=610.59ms p(90)=3.1µs    p(95)=3.8µs   
     http_req_connecting............: avg=116.45µs min=0s       med=0s       max=583.17ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=230.72ms min=274.39µs med=216.22ms max=2.12s    p(90)=395.86ms p(95)=458.43ms
       { expected_response:true }...: avg=230.72ms min=274.39µs med=216.22ms max=2.12s    p(90)=395.86ms p(95)=458.43ms
     http_req_failed................: 0.00%  ✓ 0           ✗ 498344
     http_req_receiving.............: avg=17.44ms  min=8.4µs    med=20.6µs   max=1.95s    p(90)=12ms     p(95)=120.61ms
     http_req_sending...............: avg=1.74ms   min=5.5µs    med=11.2µs   max=1.03s    p(90)=100.4µs  p(95)=254.98µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=211.52ms min=236.4µs  med=209.59ms max=918.24ms p(90)=352.27ms p(95)=391.63ms
     http_reqs......................: 498344 1244.944619/s
     iteration_duration.............: avg=280.67ms min=748.59µs med=250.21ms max=2.3s     p(90)=477.95ms p(95)=588.77ms
     iterations.....................: 498344 1244.944619/s
     vus............................: 350    min=350       max=350 
     vus_max........................: 350    min=350       max=350 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/730853a5-dc59-45bd-4177-ee9ed10f3300/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/662320ee-fbb7-45a1-d249-98feb62a7900/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2cb5664f-43a8-418c-eb39-fe36d5583100/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  0% — ✓ 0 / ✗ 172276
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 172276

     checks.........................: 33.33% ✓ 172276     ✗ 344552
     data_received..................: 164 MB 409 kB/s
     data_sent......................: 205 MB 511 kB/s
     http_req_blocked...............: avg=59.54µs  min=1.1µs    med=2.2µs    max=254.01ms p(90)=3.5µs   p(95)=4.1µs   
     http_req_connecting............: avg=51.24µs  min=0s       med=0s       max=54.08ms  p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=810.04ms min=191.83ms med=850.99ms max=1.75s    p(90)=1.09s   p(95)=1.17s   
       { expected_response:true }...: avg=810.04ms min=191.83ms med=850.99ms max=1.75s    p(90)=1.09s   p(95)=1.17s   
     http_req_failed................: 0.00%  ✓ 0          ✗ 172276
     http_req_receiving.............: avg=3.43ms   min=9.9µs    med=25.2µs   max=434.71ms p(90)=661.9µs p(95)=6.86ms  
     http_req_sending...............: avg=1.11ms   min=6.7µs    med=12µs     max=493.53ms p(90)=105.7µs p(95)=162.92µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=805.49ms min=191.75ms med=847.19ms max=1.73s    p(90)=1.08s   p(95)=1.16s   
     http_reqs......................: 172276 430.089908/s
     iteration_duration.............: avg=813.23ms min=192.4ms  med=853.78ms max=1.87s    p(90)=1.09s   p(95)=1.17s   
     iterations.....................: 172276 430.089908/s
     vus............................: 350    min=350      max=350 
     vus_max........................: 350    min=350      max=350 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3a23be53-df7c-477e-fe84-81653090aa00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/801ac0a9-36f6-4dd6-d962-3597ea34ec00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/764bd2db-f793-4b9e-c779-f4178eb4bf00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 85078

     checks.........................: 66.66% ✓ 170156     ✗ 85078
     data_received..................: 96 MB  240 kB/s
     data_sent......................: 101 MB 252 kB/s
     http_req_blocked...............: avg=227.19µs min=1.5µs    med=3µs    max=209.91ms p(90)=4.7µs    p(95)=5.7µs   
     http_req_connecting............: avg=209.35µs min=0s       med=0s     max=80.46ms  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=1.64s    min=364.79ms med=1.57s  max=4.77s    p(90)=2.06s    p(95)=2.4s    
       { expected_response:true }...: avg=1.64s    min=364.79ms med=1.57s  max=4.77s    p(90)=2.06s    p(95)=2.4s    
     http_req_failed................: 0.00%  ✓ 0          ✗ 85078
     http_req_receiving.............: avg=4.25ms   min=13.6µs   med=37.9µs max=545.02ms p(90)=395.38µs p(95)=8.73ms  
     http_req_sending...............: avg=1.12ms   min=8.3µs    med=15.3µs max=437.91ms p(90)=118.5µs  p(95)=307.62µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=1.63s    min=364.74ms med=1.57s  max=4.77s    p(90)=2.06s    p(95)=2.4s    
     http_reqs......................: 85078  212.162587/s
     iteration_duration.............: avg=1.64s    min=365.76ms med=1.58s  max=4.77s    p(90)=2.07s    p(95)=2.41s   
     iterations.....................: 85078  212.162587/s
     vus............................: 247    min=247      max=350
     vus_max........................: 350    min=350      max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c2046688-4d1c-4d26-8aee-686320cd4900/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a70029c2-d779-4ed8-43ba-8a8234e8aa00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5c5e907b-8162-4502-7287-aac8aa0ab900/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 58917     ✗ 0    
     data_received..................: 1.7 GB  4.3 MB/s
     data_sent......................: 23 MB   58 kB/s
     http_req_blocked...............: avg=730.22µs min=1.4µs  med=3.4µs  max=1.29s   p(90)=5µs      p(95)=6.2µs   
     http_req_connecting............: avg=376.4µs  min=0s     med=0s     max=40.04ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=6.94s    min=1.3s   med=6.63s  max=12.65s  p(90)=9.74s    p(95)=10.33s  
       { expected_response:true }...: avg=6.94s    min=1.3s   med=6.63s  max=12.65s  p(90)=9.74s    p(95)=10.33s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 19639
     http_req_receiving.............: avg=125.79ms min=39.1µs med=81.8µs max=4.05s   p(90)=478.83ms p(95)=831.32ms
     http_req_sending...............: avg=15.45ms  min=6.5µs  med=17.7µs max=2.33s   p(90)=3.52ms   p(95)=39.68ms 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=6.8s     min=1.3s   med=6.46s  max=12.09s  p(90)=9.51s    p(95)=10.11s  
     http_reqs......................: 19639   48.556113/s
     iteration_duration.............: avg=7.16s    min=1.34s  med=6.96s  max=13.46s  p(90)=9.98s    p(95)=10.6s   
     iterations.....................: 19639   48.556113/s
     vus............................: 64      min=64      max=350
     vus_max........................: 350     min=350     max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/375377e0-b294-46e4-73bd-85d68efa2600/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/352c9934-a37d-424b-b200-555ff5b4be00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ff1226ad-4f29-4edf-f2ca-a8856f3cc900/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 58818     ✗ 0    
     data_received..................: 1.7 GB  4.2 MB/s
     data_sent......................: 23 MB   58 kB/s
     http_req_blocked...............: avg=339.15µs min=1.4µs    med=3.7µs  max=94.11ms  p(90)=5µs      p(95)=5.8µs  
     http_req_connecting............: avg=322.25µs min=0s       med=0s     max=94.06ms  p(90)=0s       p(95)=0s     
     http_req_duration..............: avg=7.17s    min=635.42ms med=7.05s  max=15.07s   p(90)=9.24s    p(95)=9.99s  
       { expected_response:true }...: avg=7.17s    min=635.42ms med=7.05s  max=15.07s   p(90)=9.24s    p(95)=9.99s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 19606
     http_req_receiving.............: avg=734.11µs min=45.3µs   med=88.8µs max=218.11ms p(90)=201.15µs p(95)=330.6µs
     http_req_sending...............: avg=594.4µs  min=7.5µs    med=21.6µs max=208.75ms p(90)=37.6µs   p(95)=455.3µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=7.17s    min=635.31ms med=7.05s  max=15.07s   p(90)=9.24s    p(95)=9.98s  
     http_reqs......................: 19606   48.417198/s
     iteration_duration.............: avg=7.19s    min=650.61ms med=7.07s  max=15.08s   p(90)=9.27s    p(95)=10s    
     iterations.....................: 19606   48.417198/s
     vus............................: 38      min=38      max=350
     vus_max........................: 350     min=350     max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c8b3e5f8-f53d-45c5-d089-9a5ada72b100/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/27494aa2-4a8a-4b58-d9a2-baf3060fd100/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ef7cd2e6-5b99-4d90-5e8a-303c5a5b1d00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 51204     ✗ 0    
     data_received..................: 1.5 GB  3.7 MB/s
     data_sent......................: 20 MB   50 kB/s
     http_req_blocked...............: avg=539.86µs min=1.7µs    med=5.7µs  max=177.54ms p(90)=8.6µs  p(95)=12.7µs  
     http_req_connecting............: avg=489.01µs min=0s       med=0s     max=65.43ms  p(90)=0s     p(95)=0s      
     http_req_duration..............: avg=8.21s    min=241.75ms med=7.82s  max=17.16s   p(90)=8.67s  p(95)=12.43s  
       { expected_response:true }...: avg=8.21s    min=241.75ms med=7.82s  max=17.16s   p(90)=8.67s  p(95)=12.43s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 17068
     http_req_receiving.............: avg=58.16ms  min=61.3µs   med=127µs  max=5.63s    p(90)=9.52ms p(95)=150.09ms
     http_req_sending...............: avg=4.35ms   min=8.3µs    med=30.2µs max=1.69s    p(90)=1.79ms p(95)=20.25ms 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=8.14s    min=239.57ms med=7.8s   max=16.85s   p(90)=8.41s  p(95)=12.39s  
     http_reqs......................: 17068   41.872514/s
     iteration_duration.............: avg=8.3s     min=293.6ms  med=7.89s  max=17.2s    p(90)=8.8s   p(95)=12.56s  
     iterations.....................: 17068   41.872514/s
     vus............................: 39      min=39      max=350
     vus_max........................: 350     min=350     max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/475ad096-6164-4c97-223f-e6a98b974900/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b74972d1-d60d-41d7-c372-a38beb047c00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2e850a39-fb19-4824-8106-eb08a2050e00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 48147     ✗ 0    
     data_received..................: 1.4 GB  3.5 MB/s
     data_sent......................: 19 MB   47 kB/s
     http_req_blocked...............: avg=1ms      min=1.5µs   med=3.5µs   max=285.02ms p(90)=5µs      p(95)=6µs    
     http_req_connecting............: avg=933.94µs min=0s      med=0s      max=93.4ms   p(90)=0s       p(95)=0s     
     http_req_duration..............: avg=8.72s    min=2.81s   med=8.17s   max=19.99s   p(90)=12.42s   p(95)=13.32s 
       { expected_response:true }...: avg=8.72s    min=2.81s   med=8.17s   max=19.99s   p(90)=12.42s   p(95)=13.32s 
     http_req_failed................: 0.00%   ✓ 0         ✗ 16049
     http_req_receiving.............: avg=5.62ms   min=40.79µs med=81.09µs max=570.42ms p(90)=404.45µs p(95)=6.24ms 
     http_req_sending...............: avg=2.87ms   min=6.9µs   med=19.2µs  max=492.27ms p(90)=128.91µs p(95)=14.35ms
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s       p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=8.71s    min=2.81s   med=8.16s   max=19.99s   p(90)=12.4s    p(95)=13.31s 
     http_reqs......................: 16049   39.653418/s
     iteration_duration.............: avg=8.77s    min=2.88s   med=8.24s   max=20.01s   p(90)=12.52s   p(95)=13.42s 
     iterations.....................: 16049   39.653418/s
     vus............................: 87      min=87      max=350
     vus_max........................: 350     min=350     max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4d1dea56-d3a9-41e4-7bc5-8a78bc358100/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4e95e963-c264-48d9-d0e2-0cebcb2da600/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b5db90dd-dc32-4103-88f6-ccf0651e8300/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 15132

     checks.........................: 66.66% ✓ 30264     ✗ 15132
     data_received..................: 1.3 GB 3.3 MB/s
     data_sent......................: 18 MB  44 kB/s
     http_req_blocked...............: avg=943.33µs min=1.8µs  med=3.6µs   max=69.95ms  p(90)=5.3µs   p(95)=13.54µs 
     http_req_connecting............: avg=930.13µs min=0s     med=0s      max=69.93ms  p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=9.33s    min=6.43s  med=9.3s    max=13.93s   p(90)=10.07s  p(95)=10.29s  
       { expected_response:true }...: avg=9.33s    min=6.43s  med=9.3s    max=13.93s   p(90)=10.07s  p(95)=10.29s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 15132
     http_req_receiving.............: avg=506.7µs  min=65.8µs med=136.9µs max=970.57ms p(90)=385.4µs p(95)=434.98µs
     http_req_sending...............: avg=182.56µs min=8.9µs  med=21.3µs  max=62ms     p(90)=36.2µs  p(95)=46.74µs 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=9.32s    min=6.43s  med=9.3s    max=13.93s   p(90)=10.07s  p(95)=10.29s  
     http_reqs......................: 15132  37.248434/s
     iteration_duration.............: avg=9.33s    min=6.43s  med=9.31s   max=13.98s   p(90)=10.07s  p(95)=10.3s   
     iterations.....................: 15132  37.248434/s
     vus............................: 55     min=55      max=350
     vus_max........................: 350    min=350     max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d2f3a66e-45c6-4801-0132-a8273d4f6600/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/27d763ea-9800-4ee8-191a-0a7ad86a7100/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b35b411a-15f2-42cc-dfab-2cef73858c00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-deno`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 46149     ✗ 0    
     data_received..................: 1.3 GB  3.3 MB/s
     data_sent......................: 18 MB   45 kB/s
     http_req_blocked...............: avg=558.83µs min=1.3µs  med=3.4µs  max=48.75ms  p(90)=4.8µs    p(95)=5.7µs 
     http_req_connecting............: avg=538.77µs min=0s     med=0s     max=48.44ms  p(90)=0s       p(95)=0s    
     http_req_duration..............: avg=9.16s    min=2.05s  med=8.75s  max=14.35s   p(90)=11.22s   p(95)=11.54s
       { expected_response:true }...: avg=9.16s    min=2.05s  med=8.75s  max=14.35s   p(90)=11.22s   p(95)=11.54s
     http_req_failed................: 0.00%   ✓ 0         ✗ 15383
     http_req_receiving.............: avg=1.84ms   min=39.5µs med=77µs   max=212.88ms p(90)=599.76µs p(95)=7.27ms
     http_req_sending...............: avg=1.32ms   min=7.2µs  med=19.2µs max=182.22ms p(90)=99.3µs   p(95)=6.92ms
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s       p(95)=0s    
     http_req_waiting...............: avg=9.15s    min=2.05s  med=8.75s  max=14.35s   p(90)=11.22s   p(95)=11.53s
     http_reqs......................: 15383   37.836269/s
     iteration_duration.............: avg=9.18s    min=2.06s  med=8.78s  max=14.41s   p(90)=11.25s   p(95)=11.56s
     iterations.....................: 15383   37.836269/s
     vus............................: 70      min=70      max=350
     vus_max........................: 350     min=350     max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/89f388ae-5b3b-4344-691f-be6a7df65e00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d9108f9b-3db3-432f-47d4-e36843c13000/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/713a7d2f-a72c-4fdf-7ae4-fb72932ddf00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga-uws`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 41046    ✗ 0    
     data_received..................: 1.2 GB  2.9 MB/s
     data_sent......................: 16 MB   40 kB/s
     http_req_blocked...............: avg=368.17µs min=2µs    med=4.7µs   max=97.14ms  p(90)=7.1µs    p(95)=9.5µs  
     http_req_connecting............: avg=341.55µs min=0s     med=0s      max=44.3ms   p(90)=0s       p(95)=0s     
     http_req_duration..............: avg=10.26s   min=1.15s  med=9.42s   max=37.98s   p(90)=15.22s   p(95)=17.33s 
       { expected_response:true }...: avg=10.26s   min=1.15s  med=9.42s   max=37.98s   p(90)=15.22s   p(95)=17.33s 
     http_req_failed................: 0.00%   ✓ 0        ✗ 13682
     http_req_receiving.............: avg=11.7ms   min=58.9µs med=106.9µs max=24.49s   p(90)=1.42ms   p(95)=18.16ms
     http_req_sending...............: avg=3.07ms   min=8.8µs  med=21.7µs  max=461.49ms p(90)=154.67µs p(95)=11.1ms 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s       p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=10.25s   min=1.14s  med=9.41s   max=36.2s    p(90)=15.21s   p(95)=17.31s 
     http_reqs......................: 13682   33.59915/s
     iteration_duration.............: avg=10.33s   min=1.15s  med=9.48s   max=38.01s   p(90)=15.28s   p(95)=17.41s 
     iterations.....................: 13682   33.59915/s
     vus............................: 84      min=84     max=350
     vus_max........................: 350     min=350    max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a56572d3-a84d-4b36-17c7-e2da99980900/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f42babc7-a667-4155-f1a4-24b6feb9a100/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/af2dc3fd-2a76-4e8c-01b5-533f92eff500/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 40962     ✗ 0    
     data_received..................: 1.2 GB  2.9 MB/s
     data_sent......................: 16 MB   40 kB/s
     http_req_blocked...............: avg=1.3ms  min=1.8µs med=4µs     max=160.81ms p(90)=5.9µs    p(95)=7.6µs 
     http_req_connecting............: avg=1.23ms min=0s    med=0s      max=160.69ms p(90)=0s       p(95)=0s    
     http_req_duration..............: avg=10.33s min=6.68s med=10.29s  max=14.04s   p(90)=11.87s   p(95)=12.34s
       { expected_response:true }...: avg=10.33s min=6.68s med=10.29s  max=14.04s   p(90)=11.87s   p(95)=12.34s
     http_req_failed................: 0.00%   ✓ 0         ✗ 13654
     http_req_receiving.............: avg=2.49ms min=55µs  med=106.9µs max=424.33ms p(90)=410.36µs p(95)=3.64ms
     http_req_sending...............: avg=1.1ms  min=7.8µs med=22.4µs  max=246.76ms p(90)=49.2µs   p(95)=2.06ms
     http_req_tls_handshaking.......: avg=0s     min=0s    med=0s      max=0s       p(90)=0s       p(95)=0s    
     http_req_waiting...............: avg=10.33s min=6.68s med=10.28s  max=14.03s   p(90)=11.87s   p(95)=12.34s
     http_reqs......................: 13654   33.466575/s
     iteration_duration.............: avg=10.36s min=6.73s med=10.32s  max=14.08s   p(90)=11.9s    p(95)=12.38s
     iterations.....................: 13654   33.466575/s
     vus............................: 28      min=28      max=350
     vus_max........................: 350     min=350     max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/33f86396-9bb5-4ed8-75df-08370027a200/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e45b6003-870b-43d2-cccc-b84326ebaf00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1673d197-59c0-4865-aecd-30d129496600/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 40029     ✗ 0    
     data_received..................: 1.2 GB  2.9 MB/s
     data_sent......................: 16 MB   39 kB/s
     http_req_blocked...............: avg=1.02ms  min=2.1µs    med=4.59µs  max=244.41ms p(90)=6.5µs    p(95)=8.4µs  
     http_req_connecting............: avg=945.4µs min=0s       med=0s      max=78.83ms  p(90)=0s       p(95)=0s     
     http_req_duration..............: avg=10.55s  min=974.51ms med=9.6s    max=32.23s   p(90)=15.31s   p(95)=17.52s 
       { expected_response:true }...: avg=10.55s  min=974.51ms med=9.6s    max=32.23s   p(90)=15.31s   p(95)=17.52s 
     http_req_failed................: 0.00%   ✓ 0         ✗ 13343
     http_req_receiving.............: avg=7.86ms  min=58.1µs   med=107.5µs max=851.79ms p(90)=926.57µs p(95)=14.51ms
     http_req_sending...............: avg=2.64ms  min=7.8µs    med=23.3µs  max=349.93ms p(90)=146.4µs  p(95)=12.07ms
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s      max=0s       p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=10.54s  min=974.32ms med=9.59s   max=32.04s   p(90)=15.3s    p(95)=17.52s 
     http_reqs......................: 13343   32.739832/s
     iteration_duration.............: avg=10.61s  min=1.02s    med=9.66s   max=32.37s   p(90)=15.43s   p(95)=17.63s 
     iterations.....................: 13343   32.739832/s
     vus............................: 78      min=78      max=350
     vus_max........................: 350     min=350     max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f16b3913-481e-4e1b-f4e7-a5450ee34200/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/57c2ef8e-753b-409a-8ba4-c72a29b54d00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/64a92572-a6c4-427d-e258-60ddbd7fc500/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server-node16`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 32868     ✗ 0    
     data_received..................: 963 MB  2.4 MB/s
     data_sent......................: 13 MB   32 kB/s
     http_req_blocked...............: avg=614.87µs min=2.1µs  med=5.2µs   max=124.11ms p(90)=7.4µs    p(95)=13µs   
     http_req_connecting............: avg=576.5µs  min=0s     med=0s      max=33.46ms  p(90)=0s       p(95)=0s     
     http_req_duration..............: avg=12.85s   min=5.28s  med=12.19s  max=28.1s    p(90)=18.08s   p(95)=19.59s 
       { expected_response:true }...: avg=12.85s   min=5.28s  med=12.19s  max=28.1s    p(90)=18.08s   p(95)=19.59s 
     http_req_failed................: 0.00%   ✓ 0         ✗ 10956
     http_req_receiving.............: avg=10.13ms  min=61.2µs med=117.7µs max=1.26s    p(90)=826.45µs p(95)=10.76ms
     http_req_sending...............: avg=3.32ms   min=8.3µs  med=26.7µs  max=816.95ms p(90)=491.82µs p(95)=12.93ms
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s       p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=12.84s   min=5.28s  med=12.18s  max=28.1s    p(90)=18.05s   p(95)=19.55s 
     http_reqs......................: 10956   26.776375/s
     iteration_duration.............: avg=12.94s   min=5.31s  med=12.27s  max=28.19s   p(90)=18.29s   p(95)=19.76s 
     iterations.....................: 10956   26.776375/s
     vus............................: 27      min=27      max=350
     vus_max........................: 350     min=350     max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ca347ecf-a1ae-489a-6975-5bfd537ba900/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6bccf629-28e9-494a-e23b-c8ec9aca5a00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2b08c6aa-4ac0-4f17-eb1c-86cd0a008500/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-uws`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 29853     ✗ 0    
     data_received..................: 873 MB  2.1 MB/s
     data_sent......................: 12 MB   29 kB/s
     http_req_blocked...............: avg=2.04ms min=2.1µs  med=4.5µs   max=98.33ms  p(90)=7.7µs   p(95)=22.1µs
     http_req_connecting............: avg=1.99ms min=0s     med=0s      max=96.58ms  p(90)=0s      p(95)=0s    
     http_req_duration..............: avg=14.28s min=9.96s  med=14.23s  max=22.28s   p(90)=15.8s   p(95)=16.49s
       { expected_response:true }...: avg=14.28s min=9.96s  med=14.23s  max=22.28s   p(90)=15.8s   p(95)=16.49s
     http_req_failed................: 0.00%   ✓ 0         ✗ 9951 
     http_req_receiving.............: avg=4.03ms min=65.2µs med=142.1µs max=3.98s    p(90)=660.4µs p(95)=3.34ms
     http_req_sending...............: avg=1.15ms min=12.2µs med=28.2µs  max=182.84ms p(90)=139.3µs p(95)=5.98ms
     http_req_tls_handshaking.......: avg=0s     min=0s     med=0s      max=0s       p(90)=0s      p(95)=0s    
     http_req_waiting...............: avg=14.27s min=9.95s  med=14.23s  max=22.28s   p(90)=15.79s  p(95)=16.47s
     http_reqs......................: 9951    24.137537/s
     iteration_duration.............: avg=14.32s min=9.97s  med=14.26s  max=22.29s   p(90)=15.85s  p(95)=16.58s
     iterations.....................: 9951    24.137537/s
     vus............................: 33      min=33      max=350
     vus_max........................: 350     min=350     max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/70f68d47-1368-43a5-7859-a67d2491fc00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/bad883e7-d319-4aa0-4e52-686b164ebe00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5417ff40-1a55-4f84-00a7-8e5f9fc37a00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  52% — ✓ 1596 / ✗ 1454
     ✗ no graphql errors
      ↳  52% — ✓ 1596 / ✗ 1454
     ✓ valid response structure

     checks.........................: 62.21% ✓ 4788     ✗ 2908 
     data_received..................: 140 MB 326 kB/s
     data_sent......................: 3.8 MB 8.8 kB/s
     http_req_blocked...............: avg=3.73ms   min=1.8µs  med=7.15µs  max=121.08ms p(90)=2.11ms   p(95)=38.19ms 
     http_req_connecting............: avg=3.63ms   min=0s     med=0s      max=121.05ms p(90)=2.03ms   p(95)=37.61ms 
     http_req_duration..............: avg=46.45s   min=6.55s  med=59.14s  max=1m0s     p(90)=1m0s     p(95)=1m0s    
       { expected_response:true }...: avg=34.11s   min=6.55s  med=30.9s   max=59.99s   p(90)=54.36s   p(95)=55.2s   
     http_req_failed................: 47.67% ✓ 1454     ✗ 1596 
     http_req_receiving.............: avg=714.92µs min=0s     med=101.2µs max=185.92ms p(90)=284.61µs p(95)=475.45µs
     http_req_sending...............: avg=850.33µs min=11.6µs med=38µs    max=142.87ms p(90)=550.4µs  p(95)=3.66ms  
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=46.45s   min=6.55s  med=59.14s  max=1m0s     p(90)=1m0s     p(95)=1m0s    
     http_reqs......................: 3050   7.092871/s
     iteration_duration.............: avg=46.46s   min=6.58s  med=59.14s  max=1m0s     p(90)=1m0s     p(95)=1m0s    
     iterations.....................: 3050   7.092871/s
     vus............................: 146    min=146    max=350
     vus_max........................: 350    min=350    max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/75b5ef3d-ebce-4b50-2b6a-55fb1a7c6900/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0a47bc94-25eb-4f81-5b59-b1f2f6fa6100/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/37c6aee1-135c-4c13-9f41-243862c01d00/public" alt="HTTP Overview" />


  </details>