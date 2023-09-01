## Overview for: `scenarios/fed-v1-constant-vus-over-time`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. It's being executed with a constant amount of VUs over a fixed amount of time. It measure things like memory usage, CPU usage, average RPS. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was running 400 VUs over 200s


### Comparison


| Gateway                             | RPS ⬇️ |        Requests         |          Duration          |
| :---------------------------------- | :----: | :---------------------: | :------------------------: |
| wundergraph                         |  766   | 153669 total, 0 failed  |   avg: 517ms, p95: 759ms   |
| mesh-bun                            |  660   | 132388 total, 0 failed  |   avg: 604ms, p95: 966ms   |
| stitching-federation-with-yoga-bun  |  120   |  24285 total, 0 failed  |  avg: 3299ms, p95: 5732ms  |
| apollo-router                       |  114   |  23268 total, 0 failed  |  avg: 3465ms, p95: 4647ms  |
| mesh-supergraph                     |  109   |  22098 total, 0 failed  |  avg: 3638ms, p95: 4349ms  |
| mercurius                           |   87   |  17566 total, 0 failed  |  avg: 4570ms, p95: 5828ms  |
| stitching-federation-with-yoga-uws  |   85   |  17282 total, 0 failed  |  avg: 4670ms, p95: 7461ms  |
| apollo-gateway-with-yoga-bun        |   78   |  15803 total, 0 failed  |  avg: 5094ms, p95: 8011ms  |
| stitching-federation-with-yoga-deno |   68   |  13849 total, 0 failed  |  avg: 5828ms, p95: 7266ms  |
| mesh                                |   65   |  13177 total, 0 failed  |  avg: 6106ms, p95: 7967ms  |
| apollo-gateway-with-yoga-uws        |   61   |  12676 total, 0 failed  | avg: 6412ms, p95: 16722ms  |
| apollo-server                       |   58   | 11784 total, 22 failed  | avg: 6830ms, p95: 12144ms  |
| stitching-federation-with-yoga      |   57   | 12329 total, 579 failed | avg: 6677ms, p95: 34036ms  |
| apollo-gateway-with-yoga            |   51   | 10578 total, 95 failed  | avg: 7650ms, p95: 12992ms  |
| apollo-server-node16                |   32   |  6819 total, 0 failed   | avg: 12223ms, p95: 24681ms |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 461007    ✗ 0     
     data_received..................: 765 MB  3.8 MB/s
     data_sent......................: 182 MB  910 kB/s
     http_req_blocked...............: avg=83.15µs  min=1.1µs    med=2.2µs    max=142ms    p(90)=3.4µs    p(95)=4.1µs   
     http_req_connecting............: avg=76.2µs   min=0s       med=0s       max=141.91ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=516.5ms  min=112.16ms med=495.87ms max=1.43s    p(90)=694.9ms  p(95)=758.56ms
       { expected_response:true }...: avg=516.5ms  min=112.16ms med=495.87ms max=1.43s    p(90)=694.9ms  p(95)=758.56ms
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 153669
     http_req_receiving.............: avg=6.26ms   min=14.4µs   med=34.29µs  max=517.39ms p(90)=316.44µs p(95)=24.07ms 
     http_req_sending...............: avg=777.57µs min=6.8µs    med=12µs     max=446.78ms p(90)=23.6µs   p(95)=107.2µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=509.46ms min=112.12ms med=492.61ms max=1.31s    p(90)=675.48ms p(95)=734.25ms
     http_reqs......................: 153669  766.90578/s
     iteration_duration.............: avg=521.09ms min=112.68ms med=500.71ms max=1.46s    p(90)=700.07ms p(95)=765.79ms
     iterations.....................: 153669  766.90578/s
     vus............................: 400     min=400     max=400 
     vus_max........................: 400     min=400     max=400 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/624c372e-76d8-4ea9-31e3-a111498d9f00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/bd0bd557-c6bd-42e2-167f-b760247c5900/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  0% — ✓ 0 / ✗ 132388
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 132388

     checks.........................: 33.33% ✓ 132388     ✗ 264776
     data_received..................: 126 MB 628 kB/s
     data_sent......................: 157 MB 784 kB/s
     http_req_blocked...............: avg=207.07µs min=900ns    med=1.9µs    max=133.9ms  p(90)=3.1µs    p(95)=3.9µs   
     http_req_connecting............: avg=197.7µs  min=0s       med=0s       max=133.84ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=604.09ms min=203.54ms med=553.7ms  max=1.38s    p(90)=895.13ms p(95)=966.26ms
       { expected_response:true }...: avg=604.09ms min=203.54ms med=553.7ms  max=1.38s    p(90)=895.13ms p(95)=966.26ms
   ✓ http_req_failed................: 0.00%  ✓ 0          ✗ 132388
     http_req_receiving.............: avg=503.95µs min=11.4µs   med=26.1µs   max=244.38ms p(90)=203.5µs  p(95)=342.9µs 
     http_req_sending...............: avg=155.53µs min=6.4µs    med=11.3µs   max=240.24ms p(90)=30.4µs   p(95)=137.76µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=603.43ms min=203.5ms  med=552.73ms max=1.38s    p(90)=894.48ms p(95)=965.73ms
     http_reqs......................: 132388 660.795627/s
     iteration_duration.............: avg=604.75ms min=204ms    med=554.33ms max=1.43s    p(90)=897.06ms p(95)=966.76ms
     iterations.....................: 132388 660.795627/s
     vus............................: 400    min=400      max=400 
     vus_max........................: 400    min=400      max=400 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/da96cc65-6dd5-430d-ab10-dfbd167bf400/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/310033df-e2ac-4126-9771-a7e036390e00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 24282 / ✗ 3
     ✗ valid response structure
      ↳  99% — ✓ 24282 / ✗ 3

     checks.........................: 99.99% ✓ 72849      ✗ 6    
     data_received..................: 121 MB 603 kB/s
     data_sent......................: 29 MB  144 kB/s
     http_req_blocked...............: avg=785.11µs min=1.3µs  med=2.4µs  max=88.1ms   p(90)=3.7µs   p(95)=8.3µs   
     http_req_connecting............: avg=769.17µs min=0s     med=0s     max=88.07ms  p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=3.29s    min=1.95s  med=3.1s   max=7.64s    p(90)=3.75s   p(95)=5.73s   
       { expected_response:true }...: avg=3.29s    min=1.95s  med=3.1s   max=7.64s    p(90)=3.75s   p(95)=5.73s   
   ✓ http_req_failed................: 0.00%  ✓ 0          ✗ 24285
     http_req_receiving.............: avg=1.92ms   min=14.7µs med=39.1µs max=345.93ms p(90)=80.1µs  p(95)=279.17µs
     http_req_sending...............: avg=507.6µs  min=7.4µs  med=13.4µs max=289.21ms p(90)=84.62µs p(95)=196.39µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=3.29s    min=1.95s  med=3.1s   max=7.64s    p(90)=3.75s   p(95)=5.73s   
     http_reqs......................: 24285  120.918673/s
     iteration_duration.............: avg=3.3s     min=1.96s  med=3.1s   max=7.64s    p(90)=3.75s   p(95)=5.73s   
     iterations.....................: 24285  120.918673/s
     vus............................: 13     min=13       max=400
     vus_max........................: 400    min=400      max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/44445b8d-a5f2-48d0-9337-f35610c43700/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3375010b-58ef-42e4-4290-813013247d00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 23263 / ✗ 5
     ✗ valid response structure
      ↳  99% — ✓ 23263 / ✗ 5

     checks.........................: 99.98% ✓ 69794      ✗ 10   
     data_received..................: 116 MB 571 kB/s
     data_sent......................: 28 MB  136 kB/s
     http_req_blocked...............: avg=463.6µs  min=1.1µs  med=2.6µs  max=83.64ms p(90)=4µs    p(95)=12.2µs
     http_req_connecting............: avg=451.57µs min=0s     med=0s     max=83.61ms p(90)=0s     p(95)=0s    
     http_req_duration..............: avg=3.46s    min=1.16s  med=3.35s  max=9.25s   p(90)=3.84s  p(95)=4.64s 
       { expected_response:true }...: avg=3.46s    min=1.16s  med=3.35s  max=9.25s   p(90)=3.84s  p(95)=4.64s 
   ✓ http_req_failed................: 0.00%  ✓ 0          ✗ 23268
     http_req_receiving.............: avg=58.4µs   min=22.3µs med=52.2µs max=16.96ms p(90)=75.3µs p(95)=83.1µs
     http_req_sending...............: avg=189.14µs min=7.5µs  med=14.2µs max=46.18ms p(90)=28.6µs p(95)=34.7µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s     p(95)=0s    
     http_req_waiting...............: avg=3.46s    min=1.16s  med=3.35s  max=9.21s   p(90)=3.84s  p(95)=4.64s 
     http_reqs......................: 23268  114.588021/s
     iteration_duration.............: avg=3.46s    min=1.16s  med=3.35s  max=9.28s   p(90)=3.85s  p(95)=4.64s 
     iterations.....................: 23268  114.588021/s
     vus............................: 68     min=68       max=400
     vus_max........................: 400    min=400      max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/834fd432-5179-4e4f-9072-d65aac82fa00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/253a1631-cca3-4e16-aade-637d68a33f00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 22095 / ✗ 3
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 22098

     checks.........................: 66.66% ✓ 44193      ✗ 22101
     data_received..................: 111 MB 551 kB/s
     data_sent......................: 26 MB  130 kB/s
     http_req_blocked...............: avg=1.07ms   min=1.2µs med=2.1µs  max=186.42ms p(90)=3.1µs  p(95)=3.9µs  
     http_req_connecting............: avg=1.06ms   min=0s    med=0s     max=186.38ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=3.63s    min=1.21s med=3.57s  max=7.88s    p(90)=4.06s  p(95)=4.34s  
       { expected_response:true }...: avg=3.63s    min=1.21s med=3.57s  max=7.88s    p(90)=4.06s  p(95)=4.34s  
   ✓ http_req_failed................: 0.00%  ✓ 0          ✗ 22098
     http_req_receiving.............: avg=53.81µs  min=21µs  med=44.2µs max=14.29ms  p(90)=66.8µs p(95)=74.4µs 
     http_req_sending...............: avg=807.02µs min=7.7µs med=12.1µs max=87.33ms  p(90)=22.1µs p(95)=27.79µs
     http_req_tls_handshaking.......: avg=0s       min=0s    med=0s     max=0s       p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=3.63s    min=1.21s med=3.57s  max=7.82s    p(90)=4.06s  p(95)=4.34s  
     http_reqs......................: 22098  109.567324/s
     iteration_duration.............: avg=3.63s    min=1.21s med=3.57s  max=7.92s    p(90)=4.06s  p(95)=4.34s  
     iterations.....................: 22098  109.567324/s
     vus............................: 299    min=299      max=400
     vus_max........................: 400    min=400      max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2f7f650c-f111-49be-9ce9-b0a54e0cea00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8fe1dcdd-9a4a-45d9-529b-c9545bbf1600/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 52698     ✗ 0    
     data_received..................: 88 MB   439 kB/s
     data_sent......................: 21 MB   104 kB/s
     http_req_blocked...............: avg=1.68ms   min=1µs     med=2.7µs  max=175.16ms p(90)=3.7µs  p(95)=12.77µs
     http_req_connecting............: avg=1.64ms   min=0s      med=0s     max=175.14ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=4.56s    min=1.42s   med=4.47s  max=8.86s    p(90)=4.87s  p(95)=5.82s  
       { expected_response:true }...: avg=4.56s    min=1.42s   med=4.47s  max=8.86s    p(90)=4.87s  p(95)=5.82s  
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 17566
     http_req_receiving.............: avg=59.59µs  min=17.39µs med=57.8µs max=7.4ms    p(90)=79.5µs p(95)=85.4µs 
     http_req_sending...............: avg=778.23µs min=6.4µs   med=16µs   max=103.9ms  p(90)=29.7µs p(95)=38.47µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s       p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=4.56s    min=1.42s   med=4.47s  max=8.85s    p(90)=4.87s  p(95)=5.82s  
     http_reqs......................: 17566   87.210761/s
     iteration_duration.............: avg=4.57s    min=1.42s   med=4.47s  max=8.98s    p(90)=4.87s  p(95)=5.83s  
     iterations.....................: 17566   87.210761/s
     vus............................: 214     min=214     max=400
     vus_max........................: 400     min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8dc24e78-9d1f-4c53-9738-b2233ad75400/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/fded76c6-cd66-4e31-d263-59f841ca7d00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-uws`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  96% — ✓ 16597 / ✗ 685
     ✗ valid response structure
      ↳  96% — ✓ 16597 / ✗ 685

     checks.........................: 97.35% ✓ 50476     ✗ 1370 
     data_received..................: 97 MB  480 kB/s
     data_sent......................: 21 MB  101 kB/s
     http_req_blocked...............: avg=1.34ms   min=1.3µs  med=2.29µs max=119.82ms p(90)=3.7µs   p(95)=11.7µs
     http_req_connecting............: avg=1.32ms   min=0s     med=0s     max=119.78ms p(90)=0s      p(95)=0s    
     http_req_duration..............: avg=4.66s    min=2.15s  med=4.09s  max=10.53s   p(90)=6.55s   p(95)=7.46s 
       { expected_response:true }...: avg=4.66s    min=2.15s  med=4.09s  max=10.53s   p(90)=6.55s   p(95)=7.46s 
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 17282
     http_req_receiving.............: avg=62.89µs  min=20.4µs med=49.9µs max=26.92ms  p(90)=78.6µs  p(95)=91.5µs
     http_req_sending...............: avg=245.73µs min=6.3µs  med=12.9µs max=82.4ms   p(90)=27.79µs p(95)=48.1µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s      p(95)=0s    
     http_req_waiting...............: avg=4.66s    min=2.15s  med=4.09s  max=10.53s   p(90)=6.55s   p(95)=7.45s 
     http_reqs......................: 17282  85.233243/s
     iteration_duration.............: avg=4.67s    min=2.15s  med=4.09s  max=10.53s   p(90)=6.56s   p(95)=7.47s 
     iterations.....................: 17282  85.233243/s
     vus............................: 2      min=2       max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c7fa15cc-082c-485f-d1a7-743097752d00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4196311e-adab-40a6-a559-84476b47d400/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 47409    ✗ 0    
     data_received..................: 79 MB   390 kB/s
     data_sent......................: 19 MB   93 kB/s
     http_req_blocked...............: avg=999.15µs min=1.2µs med=2.29µs max=70.6ms   p(90)=3.7µs  p(95)=8.2µs   
     http_req_connecting............: avg=980.56µs min=0s    med=0s     max=70.56ms  p(90)=0s     p(95)=0s      
     http_req_duration..............: avg=5.09s    min=2.62s med=4.62s  max=16.59s   p(90)=7.24s  p(95)=8.01s   
       { expected_response:true }...: avg=5.09s    min=2.62s med=4.62s  max=16.59s   p(90)=7.24s  p(95)=8.01s   
   ✓ http_req_failed................: 0.00%   ✓ 0        ✗ 15803
     http_req_receiving.............: avg=177.11µs min=18µs  med=40µs   max=106.38ms p(90)=74.8µs p(95)=118.59µs
     http_req_sending...............: avg=244.05µs min=6.8µs med=12.3µs max=116.29ms p(90)=27.8µs p(95)=112.66µs
     http_req_tls_handshaking.......: avg=0s       min=0s    med=0s     max=0s       p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=5.09s    min=2.62s med=4.62s  max=16.59s   p(90)=7.24s  p(95)=8s      
     http_reqs......................: 15803   78.34813/s
     iteration_duration.............: avg=5.09s    min=2.62s med=4.62s  max=16.68s   p(90)=7.24s  p(95)=8.01s   
     iterations.....................: 15803   78.34813/s
     vus............................: 6       min=6      max=400
     vus_max........................: 400     min=400    max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/395d556b-f62b-42d0-92a5-4a15336cc400/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/93b79bb1-be68-4205-c436-837b04a58f00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-deno`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 13799 / ✗ 50
     ✗ valid response structure
      ↳  99% — ✓ 13799 / ✗ 50

     checks.........................: 99.75% ✓ 41447     ✗ 100  
     data_received..................: 70 MB  347 kB/s
     data_sent......................: 16 MB  81 kB/s
     http_req_blocked...............: avg=613.89µs min=1.1µs   med=2.5µs  max=105.31ms p(90)=4.3µs    p(95)=19.79µs 
     http_req_connecting............: avg=594.79µs min=0s      med=0s     max=63.83ms  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=5.82s    min=2.88s   med=5.7s   max=11.41s   p(90)=6.42s    p(95)=7.26s   
       { expected_response:true }...: avg=5.82s    min=2.88s   med=5.7s   max=11.41s   p(90)=6.42s    p(95)=7.26s   
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 13849
     http_req_receiving.............: avg=154.29µs min=17.89µs med=43.3µs max=31.74ms  p(90)=123.49µs p(95)=178.59µs
     http_req_sending...............: avg=187.64µs min=8.3µs   med=14.9µs max=40.24ms  p(90)=63.01µs  p(95)=186.17µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=5.82s    min=2.88s   med=5.7s   max=11.4s    p(90)=6.42s    p(95)=7.26s   
     http_reqs......................: 13849  68.275167/s
     iteration_duration.............: avg=5.82s    min=2.88s   med=5.7s   max=11.43s   p(90)=6.42s    p(95)=7.27s   
     iterations.....................: 13849  68.275167/s
     vus............................: 79     min=79      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/94ee4c8f-d544-49c3-cba0-52f296e31300/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6084cdf8-971e-40df-1645-f8126fe8a200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  98% — ✓ 12984 / ✗ 193
     ✗ valid response structure
      ↳  98% — ✓ 12984 / ✗ 193

     checks.........................: 99.02% ✓ 39145     ✗ 386  
     data_received..................: 68 MB  337 kB/s
     data_sent......................: 16 MB  77 kB/s
     http_req_blocked...............: avg=1.58ms   min=1.7µs  med=2.8µs  max=111.89ms p(90)=4.5µs   p(95)=19.4µs  
     http_req_connecting............: avg=1.55ms   min=0s     med=0s     max=86.96ms  p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=6.1s     min=2.18s  med=5.97s  max=11.73s   p(90)=7.28s   p(95)=7.96s   
       { expected_response:true }...: avg=6.1s     min=2.18s  med=5.97s  max=11.73s   p(90)=7.28s   p(95)=7.96s   
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 13177
     http_req_receiving.............: avg=82.41µs  min=28.1µs med=61.8µs max=17.16ms  p(90)=104.7µs p(95)=129.43µs
     http_req_sending...............: avg=286.88µs min=8.9µs  med=16.1µs max=85.69ms  p(90)=39.6µs  p(95)=80.73µs 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=6.1s     min=2.18s  med=5.97s  max=11.73s   p(90)=7.28s   p(95)=7.96s   
     http_reqs......................: 13177  65.176376/s
     iteration_duration.............: avg=6.1s     min=2.18s  med=5.97s  max=11.81s   p(90)=7.28s   p(95)=7.97s   
     iterations.....................: 13177  65.176376/s
     vus............................: 120    min=120     max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/76b92f38-a95f-446c-b99d-789bd89f8a00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0c705d27-69f4-4723-86a2-d42c76217100/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga-uws`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  82% — ✓ 10452 / ✗ 2224
     ✗ valid response structure
      ↳  82% — ✓ 10452 / ✗ 2224

     checks.........................: 88.30% ✓ 33580     ✗ 4448 
     data_received..................: 60 MB  291 kB/s
     data_sent......................: 15 MB  74 kB/s
     http_req_blocked...............: avg=1.27ms   min=1.2µs    med=2.6µs  max=96.88ms p(90)=4.4µs   p(95)=15.9µs  
     http_req_connecting............: avg=1.25ms   min=0s       med=0s     max=78.12ms p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=6.41s    min=492.32ms med=5.36s  max=22.89s  p(90)=12.21s  p(95)=16.72s  
       { expected_response:true }...: avg=6.41s    min=492.32ms med=5.36s  max=22.89s  p(90)=12.21s  p(95)=16.72s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 12676
     http_req_receiving.............: avg=89.01µs  min=20.7µs   med=52.1µs max=54.12ms p(90)=82.19µs p(95)=93.66µs 
     http_req_sending...............: avg=200.64µs min=7.4µs    med=14.2µs max=54.84ms p(90)=31.85µs p(95)=145.54µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=6.41s    min=492.26ms med=5.36s  max=22.89s  p(90)=12.21s  p(95)=16.72s  
     http_reqs......................: 12676  61.944744/s
     iteration_duration.............: avg=6.41s    min=492.5ms  med=5.36s  max=22.89s  p(90)=12.22s  p(95)=16.72s  
     iterations.....................: 12676  61.944744/s
     vus............................: 248    min=248     max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ecfa74f2-e8f4-4349-331c-20c493654900/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/54b6cc85-8161-458b-0d53-cd199e2a3000/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  99% — ✓ 11762 / ✗ 22
     ✗ no graphql errors
      ↳  84% — ✓ 9947 / ✗ 1837
     ✗ valid response structure
      ↳  84% — ✓ 9947 / ✗ 1815

     checks.........................: 89.60% ✓ 31656     ✗ 3674 
     data_received..................: 58 MB  285 kB/s
     data_sent......................: 14 MB  69 kB/s
     http_req_blocked...............: avg=3.62ms   min=1.3µs    med=2.29µs max=185.94ms p(90)=3.9µs  p(95)=16.1µs  
     http_req_connecting............: avg=3.58ms   min=0s       med=0s     max=184.61ms p(90)=0s     p(95)=0s      
     http_req_duration..............: avg=6.83s    min=884.92ms med=6.05s  max=59.94s   p(90)=10.77s p(95)=12.14s  
       { expected_response:true }...: avg=6.73s    min=884.92ms med=6.04s  max=58.16s   p(90)=10.75s p(95)=12.1s   
   ✓ http_req_failed................: 0.18%  ✓ 22        ✗ 11762
     http_req_receiving.............: avg=72.63µs  min=0s       med=53.4µs max=30.71ms  p(90)=78.2µs p(95)=89.4µs  
     http_req_sending...............: avg=839.65µs min=8.2µs    med=12.9µs max=81.77ms  p(90)=28.4µs p(95)=112.05µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=6.82s    min=884.86ms med=6.05s  max=59.92s   p(90)=10.77s p(95)=12.14s  
     http_reqs......................: 11784  58.277164/s
     iteration_duration.............: avg=6.83s    min=885.1ms  med=6.06s  max=1m0s     p(90)=10.79s p(95)=12.14s  
     iterations.....................: 11784  58.277164/s
     vus............................: 153    min=153     max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7293f1f2-6bf4-4452-e293-a2420b25b000/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d805dd27-3603-4bce-8d58-15d2d2041900/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  95% — ✓ 11750 / ✗ 579
     ✗ no graphql errors
      ↳  95% — ✓ 11715 / ✗ 614
     ✗ valid response structure
      ↳  99% — ✓ 11715 / ✗ 35

     checks.........................: 96.62% ✓ 35180     ✗ 1228 
     data_received..................: 60 MB  277 kB/s
     data_sent......................: 15 MB  68 kB/s
     http_req_blocked...............: avg=8.59ms  min=1.9µs    med=3µs     max=436.75ms p(90)=24.72µs  p(95)=14.16ms 
     http_req_connecting............: avg=8.43ms  min=0s       med=0s      max=436.68ms p(90)=0s       p(95)=13.07ms 
     http_req_duration..............: avg=6.67s   min=523.8ms  med=3.46s   max=1m0s     p(90)=4.32s    p(95)=34.03s  
       { expected_response:true }...: avg=4.05s   min=523.8ms  med=3.44s   max=58.78s   p(90)=3.81s    p(95)=4.59s   
   ✓ http_req_failed................: 4.69%  ✓ 579       ✗ 11750
     http_req_receiving.............: avg=81.85µs min=0s       med=71.09µs max=7.72ms   p(90)=112.42µs p(95)=140.1µs 
     http_req_sending...............: avg=1.6ms   min=11.5µs   med=19µs    max=152.38ms p(90)=68.09µs  p(95)=659.88µs
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=6.67s   min=521.47ms med=3.46s   max=1m0s     p(90)=4.31s    p(95)=34.03s  
     http_reqs......................: 12329  57.427004/s
     iteration_duration.............: avg=6.68s   min=527.49ms med=3.46s   max=1m0s     p(90)=4.42s    p(95)=34.03s  
     iterations.....................: 12329  57.427004/s
     vus............................: 7      min=7       max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/92d82b2d-3009-4605-fee8-54e119046000/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/575d9e39-c776-4f41-afd0-050cf4638c00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  99% — ✓ 10483 / ✗ 95
     ✗ no graphql errors
      ↳  75% — ✓ 8014 / ✗ 2564
     ✗ valid response structure
      ↳  76% — ✓ 8014 / ✗ 2469

     checks.........................: 83.79% ✓ 26511     ✗ 5128 
     data_received..................: 48 MB  238 kB/s
     data_sent......................: 13 MB  62 kB/s
     http_req_blocked...............: avg=3.63ms   min=1.4µs    med=2.7µs  max=186.06ms p(90)=4.7µs   p(95)=89.81µs 
     http_req_connecting............: avg=3.56ms   min=0s       med=0s     max=185.99ms p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=7.64s    min=683.71ms med=6.53s  max=1m0s     p(90)=11.59s  p(95)=12.99s  
       { expected_response:true }...: avg=7.17s    min=683.71ms med=6.49s  max=58.6s    p(90)=11.42s  p(95)=12.69s  
   ✓ http_req_failed................: 0.89%  ✓ 95        ✗ 10483
     http_req_receiving.............: avg=90.77µs  min=0s       med=57.2µs max=76.68ms  p(90)=85.9µs  p(95)=99.6µs  
     http_req_sending...............: avg=832.25µs min=8.4µs    med=15.3µs max=74.16ms  p(90)=35.56µs p(95)=307.37µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=7.64s    min=683.6ms  med=6.53s  max=1m0s     p(90)=11.57s  p(95)=12.99s  
     http_reqs......................: 10578  51.973886/s
     iteration_duration.............: avg=7.65s    min=684.66ms med=6.54s  max=1m0s     p(90)=11.63s  p(95)=12.99s  
     iterations.....................: 10578  51.973886/s
     vus............................: 213    min=213     max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f19738fb-12d9-4b7e-e3c9-d07aff40b000/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/bc804477-bc6b-43ee-1c31-251e93698100/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server-node16`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  41% — ✓ 2850 / ✗ 3969
     ✗ valid response structure
      ↳  41% — ✓ 2850 / ✗ 3969

     checks.........................: 61.19% ✓ 12519     ✗ 7938 
     data_received..................: 28 MB  133 kB/s
     data_sent......................: 8.1 MB 38 kB/s
     http_req_blocked...............: avg=13.25ms  min=1.5µs   med=3.4µs  max=496.53ms p(90)=18.01µs  p(95)=141.76ms
     http_req_connecting............: avg=13.02ms  min=0s      med=0s     max=379.95ms p(90)=0s       p(95)=136.64ms
     http_req_duration..............: avg=12.22s   min=97.69ms med=12.4s  max=32.33s   p(90)=22.46s   p(95)=24.68s  
       { expected_response:true }...: avg=12.22s   min=97.69ms med=12.4s  max=32.33s   p(90)=22.46s   p(95)=24.68s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 6819 
     http_req_receiving.............: avg=107.93µs min=34µs    med=89.7µs max=9.85ms   p(90)=153.02µs p(95)=193.24µs
     http_req_sending...............: avg=2.22ms   min=12.2µs  med=23.4µs max=131.89ms p(90)=67.72µs  p(95)=4.94ms  
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=12.22s   min=97.52ms med=12.4s  max=32.33s   p(90)=22.46s   p(95)=24.67s  
     http_reqs......................: 6819   32.374086/s
     iteration_duration.............: avg=12.23s   min=98.83ms med=12.4s  max=32.33s   p(90)=22.46s   p(95)=24.79s  
     iterations.....................: 6819   32.374086/s
     vus............................: 8      min=8       max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5e9577bc-f58c-4f7f-48b9-e5a8676fbd00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e40e33a6-c44a-4e92-638d-24fb8a684700/public" alt="HTTP Overview" />


  </details>