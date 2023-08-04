## Overview for: `scenarios/fed-v1-constant-vus-over-time`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. It's being executed with a constant amount of VUs over a fixed amount of time. It measure things like memory usage, CPU usage, average RPS. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was running 400 VUs over 200s


### Comparison


| Gateway                             | RPS ⬇️ |        Requests         |         Duration          |
| :---------------------------------- | :----: | :---------------------: | :-----------------------: |
| wundergraph                         |  572   | 114639 total, 0 failed  |  avg: 694ms, p95: 967ms   |
| mesh-supergraph                     |  117   |  23787 total, 0 failed  | avg: 3376ms, p95: 4196ms  |
| apollo-router                       |  110   |  22461 total, 0 failed  | avg: 3600ms, p95: 5089ms  |
| stitching-federation-with-yoga-bun  |  108   |  21843 total, 0 failed  | avg: 3675ms, p95: 4761ms  |
| mesh                                |   84   |  17162 total, 0 failed  | avg: 4698ms, p95: 5829ms  |
| mercurius                           |   76   |  15506 total, 0 failed  | avg: 5176ms, p95: 6137ms  |
| apollo-gateway-with-yoga            |   69   | 14442 total, 354 failed | avg: 5625ms, p95: 6264ms  |
| apollo-server-node16                |   68   |  13924 total, 0 failed  | avg: 5826ms, p95: 13463ms |
| stitching-federation-with-yoga-deno |   58   |  11937 total, 0 failed  | avg: 6767ms, p95: 8362ms  |
| apollo-gateway-with-yoga-uws        |   57   |  11654 total, 0 failed  | avg: 6944ms, p95: 16421ms |
| stitching-federation-with-yoga-uws  |   57   |  11773 total, 0 failed  | avg: 6872ms, p95: 11421ms |
| apollo-server                       |   56   |  11468 total, 0 failed  | avg: 7069ms, p95: 14294ms |
| stitching-federation-with-yoga      |   48   | 10294 total, 396 failed | avg: 7938ms, p95: 28722ms |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 343917     ✗ 0     
     data_received..................: 571 MB  2.8 MB/s
     data_sent......................: 136 MB  679 kB/s
     http_req_blocked...............: avg=213.66µs min=1.5µs    med=2.6µs    max=219.24ms p(90)=3.8µs    p(95)=5.7µs   
     http_req_connecting............: avg=200.61µs min=0s       med=0s       max=145.69ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=694.01ms min=92.4ms   med=675.15ms max=3.17s    p(90)=894.44ms p(95)=966.53ms
       { expected_response:true }...: avg=694.01ms min=92.4ms   med=675.15ms max=3.17s    p(90)=894.44ms p(95)=966.53ms
   ✓ http_req_failed................: 0.00%   ✓ 0          ✗ 114639
     http_req_receiving.............: avg=5.89ms   min=17.1µs   med=45µs     max=625.57ms p(90)=298.4µs  p(95)=15.69ms 
     http_req_sending...............: avg=1.27ms   min=10µs     med=14.8µs   max=833.26ms p(90)=40.6µs   p(95)=135.4µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=686.84ms min=14.11ms  med=670.52ms max=2.99s    p(90)=878.65ms p(95)=945.15ms
     http_reqs......................: 114639  572.236988/s
     iteration_duration.............: avg=698.12ms min=255.95ms med=678.73ms max=3.43s    p(90)=899.25ms p(95)=972.59ms
     iterations.....................: 114639  572.236988/s
     vus............................: 400     min=400      max=400 
     vus_max........................: 400     min=400      max=400 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8f907aef-d7d5-4d76-1378-4d76fbedb800/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8ff10b5d-b18d-4a78-fb8a-ea0d56c63f00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 23776 / ✗ 11
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 23787

     checks.........................: 66.65% ✓ 47563      ✗ 23798
     data_received..................: 120 MB 594 kB/s
     data_sent......................: 28 MB  140 kB/s
     http_req_blocked...............: avg=382.08µs min=900ns   med=2µs    max=90.13ms p(90)=2.9µs  p(95)=3.5µs  
     http_req_connecting............: avg=372.25µs min=0s      med=0s     max=69.56ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=3.37s    min=1.29s   med=3.29s  max=8.29s   p(90)=3.92s  p(95)=4.19s  
       { expected_response:true }...: avg=3.37s    min=1.29s   med=3.29s  max=8.29s   p(90)=3.92s  p(95)=4.19s  
   ✓ http_req_failed................: 0.00%  ✓ 0          ✗ 23787
     http_req_receiving.............: avg=51.78µs  min=16.99µs med=42.9µs max=10.34ms p(90)=66.5µs p(95)=75.2µs 
     http_req_sending...............: avg=61.98µs  min=6.3µs   med=12.1µs max=22.07ms p(90)=22.1µs p(95)=27.89µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s      p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=3.37s    min=1.29s   med=3.29s  max=8.29s   p(90)=3.92s  p(95)=4.19s  
     http_reqs......................: 23787  117.978671/s
     iteration_duration.............: avg=3.37s    min=1.29s   med=3.29s  max=8.29s   p(90)=3.92s  p(95)=4.19s  
     iterations.....................: 23787  117.978671/s
     vus............................: 236    min=236      max=400
     vus_max........................: 400    min=400      max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5e7bb479-cd95-4c46-67e4-1dfa0b213600/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/711aa3f8-0b7e-420a-728f-56a00a2d6b00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 22443 / ✗ 18
     ✗ valid response structure
      ↳  99% — ✓ 22443 / ✗ 18

     checks.........................: 99.94% ✓ 67347      ✗ 36   
     data_received..................: 112 MB 551 kB/s
     data_sent......................: 27 MB  131 kB/s
     http_req_blocked...............: avg=735.72µs min=1.1µs  med=2.5µs  max=126.96ms p(90)=4µs    p(95)=7.4µs 
     http_req_connecting............: avg=715.63µs min=0s     med=0s     max=118.43ms p(90)=0s     p(95)=0s    
     http_req_duration..............: avg=3.6s     min=1.36s  med=3.43s  max=9.03s    p(90)=4.47s  p(95)=5.08s 
       { expected_response:true }...: avg=3.6s     min=1.36s  med=3.43s  max=9.03s    p(90)=4.47s  p(95)=5.08s 
   ✓ http_req_failed................: 0.00%  ✓ 0          ✗ 22461
     http_req_receiving.............: avg=160.38µs min=19.4µs med=49.5µs max=62.11ms  p(90)=79.9µs p(95)=90.2µs
     http_req_sending...............: avg=267.34µs min=7.1µs  med=14.2µs max=83.44ms  p(90)=29.8µs p(95)=77.5µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s     p(95)=0s    
     http_req_waiting...............: avg=3.59s    min=1.36s  med=3.43s  max=9.02s    p(90)=4.47s  p(95)=5.08s 
     http_reqs......................: 22461  110.591964/s
     iteration_duration.............: avg=3.6s     min=1.36s  med=3.43s  max=9.09s    p(90)=4.48s  p(95)=5.09s 
     iterations.....................: 22461  110.591964/s
     vus............................: 99     min=99       max=400
     vus_max........................: 400    min=400      max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a2295c76-cdff-40e7-72bd-0507634c0400/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3c665e41-d6b6-4b64-1cea-942967bb0c00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 65529      ✗ 0    
     data_received..................: 109 MB  541 kB/s
     data_sent......................: 26 MB   129 kB/s
     http_req_blocked...............: avg=1.41ms   min=1.2µs    med=2.4µs  max=135.05ms p(90)=3.8µs   p(95)=13.8µs 
     http_req_connecting............: avg=1.4ms    min=0s       med=0s     max=135.02ms p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=3.67s    min=515.15ms med=3.56s  max=9.55s    p(90)=4.06s   p(95)=4.76s  
       { expected_response:true }...: avg=3.67s    min=515.15ms med=3.56s  max=9.55s    p(90)=4.06s   p(95)=4.76s  
   ✓ http_req_failed................: 0.00%   ✓ 0          ✗ 21843
     http_req_receiving.............: avg=660.11µs min=17µs     med=42.3µs max=209.02ms p(90)=72.3µs  p(95)=163.8µs
     http_req_sending...............: avg=452.26µs min=6.3µs    med=13.4µs max=178.6ms  p(90)=33.48µs p(95)=129µs  
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=3.67s    min=514.89ms med=3.56s  max=9.55s    p(90)=4.06s   p(95)=4.73s  
     http_reqs......................: 21843   108.489963/s
     iteration_duration.............: avg=3.67s    min=518.74ms med=3.56s  max=9.66s    p(90)=4.06s   p(95)=4.81s  
     iterations.....................: 21843   108.489963/s
     vus............................: 283     min=283      max=400
     vus_max........................: 400     min=400      max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/08e7a655-690e-4db0-e55a-592d779f8a00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/bc191b0c-9795-4dce-e200-f14b9b53c100/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 17094 / ✗ 68
     ✗ valid response structure
      ↳  99% — ✓ 17094 / ✗ 68

     checks.........................: 99.73% ✓ 51350  ✗ 136  
     data_received..................: 86 MB  424 kB/s
     data_sent......................: 20 MB  101 kB/s
     http_req_blocked...............: avg=796µs    min=1.4µs  med=2.5µs  max=70.81ms p(90)=3.8µs  p(95)=6.49µs
     http_req_connecting............: avg=773.98µs min=0s     med=0s     max=70.78ms p(90)=0s     p(95)=0s    
     http_req_duration..............: avg=4.69s    min=2.6s   med=4.57s  max=9.11s   p(90)=5.47s  p(95)=5.82s 
       { expected_response:true }...: avg=4.69s    min=2.6s   med=4.57s  max=9.11s   p(90)=5.47s  p(95)=5.82s 
   ✓ http_req_failed................: 0.00%  ✓ 0      ✗ 17162
     http_req_receiving.............: avg=74.18µs  min=22.7µs med=53.2µs max=21.31ms p(90)=78.3µs p(95)=88.4µs
     http_req_sending...............: avg=119.83µs min=8µs    med=14.1µs max=49.44ms p(90)=29.4µs p(95)=38.6µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s     p(95)=0s    
     http_req_waiting...............: avg=4.69s    min=2.6s   med=4.57s  max=9.11s   p(90)=5.47s  p(95)=5.82s 
     http_reqs......................: 17162  84.723/s
     iteration_duration.............: avg=4.7s     min=2.6s   med=4.57s  max=9.15s   p(90)=5.47s  p(95)=5.83s 
     iterations.....................: 17162  84.723/s
     vus............................: 238    min=238  max=400
     vus_max........................: 400    min=400  max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/79185380-dfb6-40fd-2add-e9c80d48a200/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b0bcd239-eef9-4411-f750-943ceeec9700/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 46518     ✗ 0    
     data_received..................: 78 MB   387 kB/s
     data_sent......................: 18 MB   91 kB/s
     http_req_blocked...............: avg=2.15ms   min=1.2µs   med=2.8µs  max=150.97ms p(90)=4.5µs  p(95)=16.6µs 
     http_req_connecting............: avg=2.11ms   min=0s      med=0s     max=150.93ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=5.17s    min=1.65s   med=5.1s   max=9.6s     p(90)=5.41s  p(95)=6.13s  
       { expected_response:true }...: avg=5.17s    min=1.65s   med=5.1s   max=9.6s     p(90)=5.41s  p(95)=6.13s  
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 15506
     http_req_receiving.............: avg=68.29µs  min=20.29µs med=61µs   max=24.76ms  p(90)=83.3µs p(95)=90.6µs 
     http_req_sending...............: avg=392.94µs min=6.8µs   med=15.6µs max=51.06ms  p(90)=30.8µs p(95)=43.87µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s       p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=5.17s    min=1.65s   med=5.1s   max=9.6s     p(90)=5.41s  p(95)=6.13s  
     http_reqs......................: 15506   76.905941/s
     iteration_duration.............: avg=5.17s    min=1.65s   med=5.1s   max=9.66s    p(90)=5.41s  p(95)=6.13s  
     iterations.....................: 15506   76.905941/s
     vus............................: 227     min=227     max=400
     vus_max........................: 400     min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/04e25b2a-a970-4cf9-e2c4-323f94c73d00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5205ac31-5ec6-4383-9511-c6634ef50800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  97% — ✓ 14088 / ✗ 354
     ✗ no graphql errors
      ↳  91% — ✓ 13183 / ✗ 1259
     ✗ valid response structure
      ↳  93% — ✓ 13183 / ✗ 905

     checks.........................: 94.14% ✓ 40454     ✗ 2518 
     data_received..................: 69 MB  334 kB/s
     data_sent......................: 17 MB  83 kB/s
     http_req_blocked...............: avg=1.31ms  min=1µs      med=2.1µs   max=84.48ms p(90)=3.6µs  p(95)=304.28µs
     http_req_connecting............: avg=1.29ms  min=0s       med=0s      max=84.23ms p(90)=0s     p(95)=201.28µs
     http_req_duration..............: avg=5.62s   min=981.66ms med=3.69s   max=1m0s    p(90)=5.41s  p(95)=6.26s   
       { expected_response:true }...: avg=4.25s   min=981.66ms med=3.68s   max=59.49s  p(90)=5.21s  p(95)=5.79s   
   ✓ http_req_failed................: 2.45%  ✓ 354       ✗ 14088
     http_req_receiving.............: avg=76.03µs min=0s       med=37.79µs max=26.75ms p(90)=70.7µs p(95)=79.9µs  
     http_req_sending...............: avg=156.5µs min=6.8µs    med=12.4µs  max=22.23ms p(90)=28.5µs p(95)=128.57µs
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s      max=0s      p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=5.62s   min=981.57ms med=3.69s   max=1m0s    p(90)=5.41s  p(95)=6.26s   
     http_reqs......................: 14442  69.926206/s
     iteration_duration.............: avg=5.62s   min=981.91ms med=3.69s   max=1m0s    p(90)=5.41s  p(95)=6.27s   
     iterations.....................: 14442  69.926206/s
     vus............................: 60     min=60      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0e000c95-9628-494f-e4b9-0e357acf5c00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e5119a5b-8b37-4270-aa4e-e2cd2c718a00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server-node16`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  80% — ✓ 11243 / ✗ 2681
     ✗ valid response structure
      ↳  80% — ✓ 11243 / ✗ 2681

     checks.........................: 87.16% ✓ 36410     ✗ 5362 
     data_received..................: 67 MB  328 kB/s
     data_sent......................: 17 MB  81 kB/s
     http_req_blocked...............: avg=2.28ms   min=1.1µs    med=2µs    max=215.08ms p(90)=3.1µs  p(95)=11.5µs 
     http_req_connecting............: avg=2.23ms   min=0s       med=0s     max=215.05ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=5.82s    min=137.11ms med=4.89s  max=18.79s   p(90)=11.36s p(95)=13.46s 
       { expected_response:true }...: avg=5.82s    min=137.11ms med=4.89s  max=18.79s   p(90)=11.36s p(95)=13.46s 
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 13924
     http_req_receiving.............: avg=54.18µs  min=19.5µs   med=45.1µs max=14.58ms  p(90)=64.8µs p(95)=74.39µs
     http_req_sending...............: avg=486.26µs min=6.2µs    med=11.9µs max=79.71ms  p(90)=26.1µs p(95)=39.6µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=5.82s    min=137.02ms med=4.89s  max=18.79s   p(90)=11.36s p(95)=13.46s 
     http_reqs......................: 13924  68.289638/s
     iteration_duration.............: avg=5.82s    min=137.79ms med=4.89s  max=18.79s   p(90)=11.4s  p(95)=13.46s 
     iterations.....................: 13924  68.289638/s
     vus............................: 68     min=68      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6e8b8b9c-b936-4875-e7ce-dd5dd42cf300/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0101a136-a98a-49b0-d6c3-202442e5fa00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-deno`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 11872 / ✗ 65
     ✗ valid response structure
      ↳  99% — ✓ 11871 / ✗ 66

     checks.........................: 99.63% ✓ 35680     ✗ 131  
     data_received..................: 60 MB  297 kB/s
     data_sent......................: 14 MB  70 kB/s
     http_req_blocked...............: avg=2.4ms    min=1.3µs  med=2.7µs  max=172.21ms p(90)=4.89µs  p(95)=24.8µs  
     http_req_connecting............: avg=2.35ms   min=0s     med=0s     max=114.41ms p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=6.76s    min=3.33s  med=6.59s  max=12.84s   p(90)=7.83s   p(95)=8.36s   
       { expected_response:true }...: avg=6.76s    min=3.33s  med=6.59s  max=12.84s   p(90)=7.83s   p(95)=8.36s   
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 11937
     http_req_receiving.............: avg=225.24µs min=21.3µs med=48.2µs max=57.51ms  p(90)=139.4µs p(95)=219.67µs
     http_req_sending...............: avg=378.34µs min=9.4µs  med=16.5µs max=130.72ms p(90)=109.4µs p(95)=394.51µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=6.76s    min=3.33s  med=6.59s  max=12.84s   p(90)=7.83s   p(95)=8.36s   
     http_reqs......................: 11937  58.711179/s
     iteration_duration.............: avg=6.77s    min=3.33s  med=6.59s  max=12.84s   p(90)=7.84s   p(95)=8.36s   
     iterations.....................: 11937  58.711179/s
     vus............................: 168    min=168     max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c019d263-5205-4240-5423-8a6defcacd00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2ee38507-e966-4351-2a0b-d2b8a82e6200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga-uws`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  75% — ✓ 8785 / ✗ 2869
     ✗ valid response structure
      ↳  75% — ✓ 8785 / ✗ 2869

     checks.........................: 83.58% ✓ 29224     ✗ 5738 
     data_received..................: 52 MB  257 kB/s
     data_sent......................: 14 MB  68 kB/s
     http_req_blocked...............: avg=1.28ms   min=1.3µs    med=2.6µs  max=79.61ms  p(90)=4.3µs   p(95)=18.03µs 
     http_req_connecting............: avg=1.26ms   min=0s       med=0s     max=65.78ms  p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=6.94s    min=852.1ms  med=5.67s  max=27.95s   p(90)=12.6s   p(95)=16.42s  
       { expected_response:true }...: avg=6.94s    min=852.1ms  med=5.67s  max=27.95s   p(90)=12.6s   p(95)=16.42s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 11654
     http_req_receiving.............: avg=260.12µs min=18.5µs   med=51.3µs max=69.92ms  p(90)=80.27µs p(95)=94.3µs  
     http_req_sending...............: avg=275.12µs min=7.5µs    med=14.6µs max=162.15ms p(90)=32.8µs  p(95)=158.41µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=6.94s    min=852.05ms med=5.67s  max=27.95s   p(90)=12.6s   p(95)=16.42s  
     http_reqs......................: 11654  57.155126/s
     iteration_duration.............: avg=6.94s    min=852.28ms med=5.67s  max=27.95s   p(90)=12.6s   p(95)=16.42s  
     iterations.....................: 11654  57.155126/s
     vus............................: 112    min=112     max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a8870d8f-1ee4-4420-df9a-9c3644e81000/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/aa4d411b-2863-4dd1-7ab4-a904c19daa00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-uws`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  84% — ✓ 9895 / ✗ 1878
     ✗ valid response structure
      ↳  84% — ✓ 9895 / ✗ 1878

     checks.........................: 89.36% ✓ 31563     ✗ 3756 
     data_received..................: 76 MB  371 kB/s
     data_sent......................: 14 MB  69 kB/s
     http_req_blocked...............: avg=4.42ms  min=1.6µs  med=2.9µs  max=318.51ms p(90)=5µs    p(95)=18.74µs 
     http_req_connecting............: avg=4.35ms  min=0s     med=0s     max=318.31ms p(90)=0s     p(95)=0s      
     http_req_duration..............: avg=6.87s   min=1.87s  med=6.08s  max=19.92s   p(90)=10.14s p(95)=11.42s  
       { expected_response:true }...: avg=6.87s   min=1.87s  med=6.08s  max=19.92s   p(90)=10.14s p(95)=11.42s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 11773
     http_req_receiving.............: avg=83.45µs min=20.6µs med=61.7µs max=12.23ms  p(90)=98.6µs p(95)=134.84µs
     http_req_sending...............: avg=1.96ms  min=8µs    med=17µs   max=193.06ms p(90)=38µs   p(95)=123.4µs 
     http_req_tls_handshaking.......: avg=0s      min=0s     med=0s     max=0s       p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=6.86s   min=1.87s  med=6.08s  max=19.92s   p(90)=10.14s p(95)=11.4s   
     http_reqs......................: 11773  57.768628/s
     iteration_duration.............: avg=6.87s   min=1.87s  med=6.08s  max=19.92s   p(90)=10.14s p(95)=11.44s  
     iterations.....................: 11773  57.768628/s
     vus............................: 28     min=28      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a4168fc7-7412-4b2a-5458-d764e99d0100/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b609fce3-e435-4ef6-78aa-3f6c6cf28200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  74% — ✓ 8589 / ✗ 2879
     ✗ valid response structure
      ↳  74% — ✓ 8589 / ✗ 2879

     checks.........................: 83.26% ✓ 28646     ✗ 5758 
     data_received..................: 53 MB  259 kB/s
     data_sent......................: 14 MB  67 kB/s
     http_req_blocked...............: avg=5.5ms   min=1.1µs    med=2.5µs  max=251.02ms p(90)=4.1µs   p(95)=17.9µs  
     http_req_connecting............: avg=5.4ms   min=0s       med=0s     max=250.82ms p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=7.06s   min=388.53ms med=6.52s  max=26.75s   p(90)=12.48s  p(95)=14.29s  
       { expected_response:true }...: avg=7.06s   min=388.53ms med=6.52s  max=26.75s   p(90)=12.48s  p(95)=14.29s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 11468
     http_req_receiving.............: avg=82.77µs min=20.9µs   med=55.4µs max=31.6ms   p(90)=82.13µs p(95)=97.86µs 
     http_req_sending...............: avg=1ms     min=6.8µs    med=13.8µs max=71.43ms  p(90)=31.4µs  p(95)=186.39µs
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s     max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=7.06s   min=388.45ms med=6.52s  max=26.73s   p(90)=12.48s  p(95)=14.29s  
     http_reqs......................: 11468  56.123688/s
     iteration_duration.............: avg=7.07s   min=389.18ms med=6.52s  max=26.97s   p(90)=12.51s  p(95)=14.29s  
     iterations.....................: 11468  56.123688/s
     vus............................: 150    min=150     max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f8b47b2d-bea7-4f88-2808-5fcc9e454700/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b4450781-3fc3-4340-0804-6c72a55f3900/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  96% — ✓ 9898 / ✗ 396
     ✗ no graphql errors
      ↳  88% — ✓ 9152 / ✗ 1142
     ✗ valid response structure
      ↳  92% — ✓ 9152 / ✗ 746

     checks.........................: 92.50% ✓ 28202     ✗ 2284 
     data_received..................: 59 MB  281 kB/s
     data_sent......................: 12 MB  58 kB/s
     http_req_blocked...............: avg=2.93ms   min=1.5µs  med=3µs     max=176.4ms  p(90)=22.1µs  p(95)=10.85ms 
     http_req_connecting............: avg=2.87ms   min=0s     med=0s      max=176.36ms p(90)=0s      p(95)=10.6ms  
     http_req_duration..............: avg=7.93s    min=2.49s  med=5.02s   max=1m0s     p(90)=8.6s    p(95)=28.72s  
       { expected_response:true }...: avg=5.85s    min=2.49s  med=4.97s   max=57.12s   p(90)=7.8s    p(95)=9.08s   
   ✓ http_req_failed................: 3.84%  ✓ 396       ✗ 9898 
     http_req_receiving.............: avg=114.61µs min=0s     med=72.09µs max=48.88ms  p(90)=128.2µs p(95)=164.93µs
     http_req_sending...............: avg=1.13ms   min=9.19µs med=20.29µs max=113.04ms p(90)=62.8µs  p(95)=763.96µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=7.93s    min=2.49s  med=5.02s   max=1m0s     p(90)=8.6s    p(95)=28.72s  
     http_reqs......................: 10294  48.887236/s
     iteration_duration.............: avg=7.94s    min=2.49s  med=5.02s   max=1m0s     p(90)=8.6s    p(95)=28.72s  
     iterations.....................: 10294  48.887236/s
     vus............................: 54     min=54      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f7bb5500-1e99-46dd-91c8-91ba51e7b700/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f614b4f2-8108-4726-a90e-4f620f4c7500/public" alt="HTTP Overview" />


  </details>