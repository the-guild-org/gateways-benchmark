## Overview for: `scenarios/fed-v1-constant-vus-over-time`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. It's being executed with a constant amount of VUs over a fixed amount of time. It measure things like memory usage, CPU usage, average RPS. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was running 350 VUs over 400s


### Comparison


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/79dc5a84-d682-4131-0c56-202566dff400/public" alt="Comparison" />


| Gateway                             | RPS ⬇️ |        Requests         |          Duration          |
| :---------------------------------- | :----: | :---------------------: | :------------------------: |
| wundergraph                         |  998   | 399641 total, 0 failed  |   avg: 288ms, p95: 561ms   |
| mesh-bun                            |  505   | 202591 total, 0 failed  |   avg: 689ms, p95: 973ms   |
| mesh                                |  205   |  82240 total, 0 failed  |  avg: 1701ms, p95: 2170ms  |
| apollo-gateway-with-yoga-bun        |   42   |  17182 total, 0 failed  | avg: 7919ms, p95: 11646ms  |
| stitching-federation-with-yoga-bun  |   39   |  16105 total, 0 failed  | avg: 8589ms, p95: 15264ms  |
| mesh-supergraph                     |   38   |  15660 total, 0 failed  | avg: 9010ms, p95: 10015ms  |
| apollo-server                       |   34   |  14141 total, 0 failed  | avg: 9939ms, p95: 16105ms  |
| stitching-federation-with-yoga-uws  |   34   |  14248 total, 0 failed  | avg: 9913ms, p95: 11907ms  |
| apollo-gateway-with-yoga-uws        |   33   |  13553 total, 0 failed  | avg: 10374ms, p95: 15441ms |
| apollo-server-node16                |   32   |  13227 total, 0 failed  | avg: 10623ms, p95: 16880ms |
| apollo-gateway-with-yoga            |   31   |  12782 total, 0 failed  | avg: 11057ms, p95: 17851ms |
| apollo-router                       |   29   |  12072 total, 0 failed  | avg: 11713ms, p95: 16413ms |
| stitching-federation-with-yoga      |   22   |  9281 total, 42 failed  | avg: 15217ms, p95: 18985ms |
| stitching-federation-with-yoga-deno |   22   |  9133 total, 0 failed   | avg: 15524ms, p95: 19650ms |
| mercurius                           |   7    | 3344 total, 1380 failed | avg: 41982ms, p95: 60001ms |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 399641

     checks.........................: 66.66% ✓ 799282     ✗ 399641
     data_received..................: 58 MB  145 kB/s
     data_sent......................: 474 MB 1.2 MB/s
     http_req_blocked...............: avg=89.4µs   min=1.1µs    med=2.8µs    max=937.43ms p(90)=4.2µs    p(95)=5.3µs   
     http_req_connecting............: avg=75.02µs  min=0s       med=0s       max=937.09ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=288.11ms min=352.5µs  med=273.95ms max=1.61s    p(90)=494.38ms p(95)=560.53ms
       { expected_response:true }...: avg=288.11ms min=352.5µs  med=273.95ms max=1.61s    p(90)=494.38ms p(95)=560.53ms
     http_req_failed................: 0.00%  ✓ 0          ✗ 399641
     http_req_receiving.............: avg=24.61ms  min=8.9µs    med=31.2µs   max=1.23s    p(90)=62.16ms  p(95)=180.51ms
     http_req_sending...............: avg=2.46ms   min=6.2µs    med=14.5µs   max=961.4ms  p(90)=123.8µs  p(95)=481.9µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=261.03ms min=310.4µs  med=262.85ms max=955.97ms p(90)=431.55ms p(95)=476.1ms 
     http_reqs......................: 399641 998.666355/s
     iteration_duration.............: avg=349.97ms min=941.31µs med=319.83ms max=1.88s    p(90)=585.96ms p(95)=696.05ms
     iterations.....................: 399641 998.666355/s
     vus............................: 305    min=305      max=350 
     vus_max........................: 350    min=350      max=350 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/aed4137e-cb55-4e97-cb2f-5909c2296800/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e9027e19-e9f7-4edd-40f0-a5e3816e8d00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4fd8f46c-6334-4918-d413-836c69744800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  0% — ✓ 0 / ✗ 202591
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 202591

     checks.........................: 33.33% ✓ 202591     ✗ 405182
     data_received..................: 193 MB 481 kB/s
     data_sent......................: 241 MB 600 kB/s
     http_req_blocked...............: avg=32.07µs  min=900ns    med=1.7µs    max=152.26ms p(90)=2.7µs    p(95)=3.2µs   
     http_req_connecting............: avg=26.31µs  min=0s       med=0s       max=31.98ms  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=688.83ms min=112.29ms med=717.15ms max=1.56s    p(90)=902.89ms p(95)=972.84ms
       { expected_response:true }...: avg=688.83ms min=112.29ms med=717.15ms max=1.56s    p(90)=902.89ms p(95)=972.84ms
     http_req_failed................: 0.00%  ✓ 0          ✗ 202591
     http_req_receiving.............: avg=3.04ms   min=10.1µs   med=19.3µs   max=415.14ms p(90)=527.69µs p(95)=6.29ms  
     http_req_sending...............: avg=913.77µs min=5.9µs    med=9.7µs    max=383.03ms p(90)=88µs     p(95)=121.9µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=684.86ms min=112.17ms med=713.93ms max=1.56s    p(90)=896.33ms p(95)=964.63ms
     http_reqs......................: 202591 505.847877/s
     iteration_duration.............: avg=691.47ms min=112.83ms med=719.59ms max=1.58s    p(90)=906.2ms  p(95)=976.81ms
     iterations.....................: 202591 505.847877/s
     vus............................: 350    min=350      max=350 
     vus_max........................: 350    min=350      max=350 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6cbebaf0-6ae8-4a1d-f3f4-5394c7a9fd00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f7ef96fb-cf06-4706-3246-010c0372df00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1f15f8aa-6142-4e20-80fe-2431e2ce5800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 82240

     checks.........................: 66.66% ✓ 164480     ✗ 82240
     data_received..................: 93 MB  232 kB/s
     data_sent......................: 98 MB  244 kB/s
     http_req_blocked...............: avg=239.5µs  min=1.5µs    med=2.6µs   max=195.32ms p(90)=4µs     p(95)=6.7µs  
     http_req_connecting............: avg=226.23µs min=0s       med=0s      max=94.32ms  p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=1.7s     min=99.1ms   med=1.69s   max=3.78s    p(90)=2.03s   p(95)=2.16s  
       { expected_response:true }...: avg=1.7s     min=99.1ms   med=1.69s   max=3.78s    p(90)=2.03s   p(95)=2.16s  
     http_req_failed................: 0.00%  ✓ 0          ✗ 82240
     http_req_receiving.............: avg=3.99ms   min=14.6µs   med=39.19µs max=477.19ms p(90)=350.2µs p(95)=6.87ms 
     http_req_sending...............: avg=1.19ms   min=9µs      med=15.5µs  max=482.38ms p(90)=120.8µs p(95)=445.4µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s       p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=1.69s    min=98.84ms  med=1.68s   max=3.78s    p(90)=2.02s   p(95)=2.16s  
     http_reqs......................: 82240  205.099443/s
     iteration_duration.............: avg=1.7s     min=105.46ms med=1.69s   max=3.88s    p(90)=2.03s   p(95)=2.17s  
     iterations.....................: 82240  205.099443/s
     vus............................: 230    min=230      max=350
     vus_max........................: 350    min=350      max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d6196673-a388-4aeb-4261-84f1968aa800/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c4eab69b-b864-43f2-497d-8f731e50bc00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/94466778-5c80-4a14-ce23-058f78aee700/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 51546     ✗ 0    
     data_received..................: 1.5 GB  3.7 MB/s
     data_sent......................: 20 MB   50 kB/s
     http_req_blocked...............: avg=992.1µs  min=1.7µs  med=4.4µs  max=1.26s   p(90)=6.6µs    p(95)=8.8µs   
     http_req_connecting............: avg=552.16µs min=0s     med=0s     max=57.49ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=7.91s    min=2.49s  med=7.53s  max=14.78s  p(90)=11.05s   p(95)=11.64s  
       { expected_response:true }...: avg=7.91s    min=2.49s  med=7.53s  max=14.78s  p(90)=11.05s   p(95)=11.64s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 17182
     http_req_receiving.............: avg=96.23ms  min=52.3µs med=101µs  max=4.68s   p(90)=302.26ms p(95)=680.08ms
     http_req_sending...............: avg=17.49ms  min=7.4µs  med=22.3µs max=2.2s    p(90)=8.81ms   p(95)=68.41ms 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=7.8s     min=2.49s  med=7.41s  max=14.57s  p(90)=10.92s   p(95)=11.5s   
     http_reqs......................: 17182   42.288728/s
     iteration_duration.............: avg=8.22s    min=2.54s  med=7.93s  max=15.22s  p(90)=11.42s   p(95)=12.11s  
     iterations.....................: 17182   42.288728/s
     vus............................: 73      min=73      max=350
     vus_max........................: 350     min=350     max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/34d83c0e-b090-45b3-b26d-d73de6d01000/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5c4d4fb2-2dfa-4645-38bc-2857c07ae100/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2ee24853-9443-490c-ce71-3e0f7a87eb00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 48315     ✗ 0    
     data_received..................: 1.4 GB  3.5 MB/s
     data_sent......................: 19 MB   47 kB/s
     http_req_blocked...............: avg=1.74ms  min=1.6µs    med=4.5µs   max=356.08ms p(90)=6.9µs  p(95)=10.6µs  
     http_req_connecting............: avg=1.62ms  min=0s       med=0s      max=142.53ms p(90)=0s     p(95)=0s      
     http_req_duration..............: avg=8.58s   min=246.87ms med=7.95s   max=18.59s   p(90)=13.11s p(95)=15.26s  
       { expected_response:true }...: avg=8.58s   min=246.87ms med=7.95s   max=18.59s   p(90)=13.11s p(95)=15.26s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 16105
     http_req_receiving.............: avg=46.71ms min=58.7µs   med=106.8µs max=5.05s    p(90)=4.92ms p(95)=139.52ms
     http_req_sending...............: avg=6.48ms  min=8.6µs    med=23.7µs  max=854.4ms  p(90)=6.86ms p(95)=29.11ms 
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s      max=0s       p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=8.53s   min=239.54ms med=7.92s   max=18.51s   p(90)=13.1s  p(95)=15.23s  
     http_reqs......................: 16105   39.725592/s
     iteration_duration.............: avg=8.74s   min=387.02ms med=8.07s   max=18.75s   p(90)=13.17s p(95)=15.34s  
     iterations.....................: 16105   39.725592/s
     vus............................: 36      min=36      max=350
     vus_max........................: 350     min=350     max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7fd28539-fafa-4d8b-ea00-d4ed68930d00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/063f17b6-4ca4-4db3-d2fa-5e4c753b6300/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d5b4907f-792f-4f28-3be7-bdc73f35a200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 15660

     checks.........................: 66.66% ✓ 31320     ✗ 15660
     data_received..................: 1.4 GB 3.4 MB/s
     data_sent......................: 19 MB  46 kB/s
     http_req_blocked...............: avg=392.73µs min=1.9µs  med=3.3µs   max=80.62ms p(90)=5.1µs   p(95)=16.5µs 
     http_req_connecting............: avg=384.19µs min=0s     med=0s      max=80.58ms p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=9s       min=6.1s   med=8.96s   max=14.15s  p(90)=9.71s   p(95)=10.01s 
       { expected_response:true }...: avg=9s       min=6.1s   med=8.96s   max=14.15s  p(90)=9.71s   p(95)=10.01s 
     http_req_failed................: 0.00%  ✓ 0         ✗ 15660
     http_req_receiving.............: avg=382.56µs min=60.8µs med=116.7µs max=55.19ms p(90)=349.4µs p(95)=412.4µs
     http_req_sending...............: avg=151.08µs min=8.1µs  med=18.3µs  max=61.44ms p(90)=33.09µs p(95)=42.9µs 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s      p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=9s       min=6.1s   med=8.96s   max=14.14s  p(90)=9.71s   p(95)=10.01s 
     http_reqs......................: 15660  38.594035/s
     iteration_duration.............: avg=9.01s    min=6.1s   med=8.96s   max=14.16s  p(90)=9.71s   p(95)=10.01s 
     iterations.....................: 15660  38.594035/s
     vus............................: 4      min=4       max=350
     vus_max........................: 350    min=350     max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0132a55b-3754-4243-492e-26f8b76b4b00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8c8965b4-8564-4fb7-b787-6487a547cf00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f16c8b44-977b-4d04-b6a5-f97186339600/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 42423     ✗ 0    
     data_received..................: 1.2 GB  3.1 MB/s
     data_sent......................: 17 MB   41 kB/s
     http_req_blocked...............: avg=547.37µs min=1.6µs    med=3.8µs  max=272.44ms p(90)=5.6µs    p(95)=6.9µs  
     http_req_connecting............: avg=486.95µs min=0s       med=0s     max=38.06ms  p(90)=0s       p(95)=0s     
     http_req_duration..............: avg=9.93s    min=869.66ms med=9.22s  max=22.62s   p(90)=14.4s    p(95)=16.1s  
       { expected_response:true }...: avg=9.93s    min=869.66ms med=9.22s  max=22.62s   p(90)=14.4s    p(95)=16.1s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 14141
     http_req_receiving.............: avg=8.73ms   min=52.2µs   med=95.6µs max=782.92ms p(90)=755.41µs p(95)=12.01ms
     http_req_sending...............: avg=2.24ms   min=7.8µs    med=18.4µs max=792.24ms p(90)=109.2µs  p(95)=7.53ms 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=9.92s    min=869.58ms med=9.22s  max=22.62s   p(90)=14.39s   p(95)=16.1s  
     http_reqs......................: 14141   34.795645/s
     iteration_duration.............: avg=10s      min=876.82ms med=9.27s  max=22.87s   p(90)=14.48s   p(95)=16.12s 
     iterations.....................: 14141   34.795645/s
     vus............................: 92      min=92      max=350
     vus_max........................: 350     min=350     max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/600e4b47-12e8-4f75-c39d-596168ad1e00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ba1d0832-1589-4c5d-075d-8a7bf0954900/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/90caba40-0651-4e39-b14c-641f801dcb00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-uws`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 42744    ✗ 0    
     data_received..................: 1.3 GB  3.1 MB/s
     data_sent......................: 17 MB   42 kB/s
     http_req_blocked...............: avg=747.06µs min=1.8µs  med=4.1µs   max=81.56ms  p(90)=5.9µs    p(95)=7.5µs 
     http_req_connecting............: avg=711.55µs min=0s     med=0s      max=55.36ms  p(90)=0s       p(95)=0s    
     http_req_duration..............: avg=9.91s    min=5.64s  med=9.9s    max=14.01s   p(90)=11.41s   p(95)=11.9s 
       { expected_response:true }...: avg=9.91s    min=5.64s  med=9.9s    max=14.01s   p(90)=11.41s   p(95)=11.9s 
     http_req_failed................: 0.00%   ✓ 0        ✗ 14248
     http_req_receiving.............: avg=2.63ms   min=52.9µs med=100.2µs max=2.72s    p(90)=399.36µs p(95)=3.67ms
     http_req_sending...............: avg=1.18ms   min=8.6µs  med=19.8µs  max=277.22ms p(90)=43.9µs   p(95)=2.4ms 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s       p(90)=0s       p(95)=0s    
     http_req_waiting...............: avg=9.9s     min=5.64s  med=9.89s   max=14.01s   p(90)=11.41s   p(95)=11.9s 
     http_reqs......................: 14248   34.94725/s
     iteration_duration.............: avg=9.94s    min=5.69s  med=9.93s   max=14.1s    p(90)=11.47s   p(95)=11.94s
     iterations.....................: 14248   34.94725/s
     vus............................: 63      min=63     max=350
     vus_max........................: 350     min=350    max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/050dd94a-1bee-4328-b95a-8d80f0392d00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9f870f37-e47a-44c4-8736-1fbca4dc2600/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f765a4c7-722a-4958-3b0f-fcf6ffda2200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga-uws`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 40659     ✗ 0    
     data_received..................: 1.2 GB  2.9 MB/s
     data_sent......................: 16 MB   40 kB/s
     http_req_blocked...............: avg=586.8µs  min=1.9µs  med=4.9µs   max=202.86ms p(90)=7.3µs    p(95)=10.2µs 
     http_req_connecting............: avg=534.84µs min=0s     med=0s      max=72.13ms  p(90)=0s       p(95)=0s     
     http_req_duration..............: avg=10.37s   min=2.69s  med=9.68s   max=22.36s   p(90)=14.26s   p(95)=15.44s 
       { expected_response:true }...: avg=10.37s   min=2.69s  med=9.68s   max=22.36s   p(90)=14.26s   p(95)=15.44s 
     http_req_failed................: 0.00%   ✓ 0         ✗ 13553
     http_req_receiving.............: avg=10.43ms  min=58.9µs med=110.9µs max=3.56s    p(90)=842.6µs  p(95)=22.17ms
     http_req_sending...............: avg=2.74ms   min=9.7µs  med=25.1µs  max=688.38ms p(90)=167.94µs p(95)=10.47ms
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s       p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=10.36s   min=2.69s  med=9.66s   max=22.36s   p(90)=14.2s    p(95)=15.42s 
     http_reqs......................: 13553   33.293301/s
     iteration_duration.............: avg=10.45s   min=2.7s   med=9.75s   max=22.4s    p(90)=14.39s   p(95)=15.51s 
     iterations.....................: 13553   33.293301/s
     vus............................: 49      min=49      max=350
     vus_max........................: 350     min=350     max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d8a321e7-7b3f-4c4f-6054-94e15b3df300/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b920e51e-2b7e-4a24-bed5-9102edb1df00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3d7019b2-21d2-43eb-b9d3-e6f4de0e1000/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server-node16`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 39681     ✗ 0    
     data_received..................: 1.2 GB  2.9 MB/s
     data_sent......................: 16 MB   39 kB/s
     http_req_blocked...............: avg=1.49ms min=1.7µs  med=4.59µs  max=593.06ms p(90)=6.6µs    p(95)=8.69µs 
     http_req_connecting............: avg=1.38ms min=0s     med=0s      max=89.9ms   p(90)=0s       p(95)=0s     
     http_req_duration..............: avg=10.62s min=3.77s  med=9.64s   max=25.33s   p(90)=15.39s   p(95)=16.87s 
       { expected_response:true }...: avg=10.62s min=3.77s  med=9.64s   max=25.33s   p(90)=15.39s   p(95)=16.87s 
     http_req_failed................: 0.00%   ✓ 0         ✗ 13227
     http_req_receiving.............: avg=4.38ms min=55.4µs med=106.3µs max=636.23ms p(90)=482.18µs p(95)=6.2ms  
     http_req_sending...............: avg=2.77ms min=8.1µs  med=24.2µs  max=409.23ms p(90)=562.36µs p(95)=14.03ms
     http_req_tls_handshaking.......: avg=0s     min=0s     med=0s      max=0s       p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=10.61s min=3.77s  med=9.62s   max=25.33s   p(90)=15.38s   p(95)=16.86s 
     http_reqs......................: 13227   32.526095/s
     iteration_duration.............: avg=10.68s min=3.83s  med=9.69s   max=25.66s   p(90)=15.45s   p(95)=16.98s 
     iterations.....................: 13227   32.526095/s
     vus............................: 88      min=88      max=350
     vus_max........................: 350     min=350     max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/774ed92c-44df-4c6d-b220-5c4b3554ab00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/84b81b35-5b9d-45b5-508b-f2386fb92200/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e4807b31-9784-4fae-29e5-7b8054f6ee00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 38346     ✗ 0    
     data_received..................: 1.1 GB  2.7 MB/s
     data_sent......................: 15 MB   37 kB/s
     http_req_blocked...............: avg=1.38ms min=1.9µs  med=5.6µs  max=207.41ms p(90)=8.1µs    p(95)=11.19µs
     http_req_connecting............: avg=1.31ms min=0s     med=0s     max=75.66ms  p(90)=0s       p(95)=0s     
     http_req_duration..............: avg=11.05s min=2.31s  med=10.29s max=23.84s   p(90)=16.02s   p(95)=17.85s 
       { expected_response:true }...: avg=11.05s min=2.31s  med=10.29s max=23.84s   p(90)=16.02s   p(95)=17.85s 
     http_req_failed................: 0.00%   ✓ 0         ✗ 12782
     http_req_receiving.............: avg=6.44ms min=65.3µs med=120µs  max=964.62ms p(90)=709.88µs p(95)=8.22ms 
     http_req_sending...............: avg=2.27ms min=9µs    med=30.3µs max=294.6ms  p(90)=305.02µs p(95)=13.16ms
     http_req_tls_handshaking.......: avg=0s     min=0s     med=0s     max=0s       p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=11.04s min=2.31s  med=10.27s max=23.84s   p(90)=16.02s   p(95)=17.84s 
     http_reqs......................: 12782   31.271156/s
     iteration_duration.............: avg=11.11s min=2.4s   med=10.37s max=23.85s   p(90)=16.07s   p(95)=17.9s  
     iterations.....................: 12782   31.271156/s
     vus............................: 109     min=109     max=350
     vus_max........................: 350     min=350     max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e6b3e860-ea7e-4ecd-3c5a-eca433807800/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2dab4ca4-a730-4681-f6c2-f02e476f5200/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a22eeffc-254c-4d49-2f99-bc794ce17c00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 36216     ✗ 0    
     data_received..................: 1.1 GB  2.6 MB/s
     data_sent......................: 14 MB   35 kB/s
     http_req_blocked...............: avg=829.43µs min=2.29µs   med=5.2µs   max=87.33ms  p(90)=7.6µs    p(95)=18.98µs 
     http_req_connecting............: avg=793.08µs min=0s       med=0s      max=70.78ms  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=11.71s   min=565.74ms med=11.68s  max=23.28s   p(90)=15.33s   p(95)=16.41s  
       { expected_response:true }...: avg=11.71s   min=565.74ms med=11.68s  max=23.28s   p(90)=15.33s   p(95)=16.41s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 12072
     http_req_receiving.............: avg=1.13ms   min=66.7µs   med=143.6µs max=393.67ms p(90)=525.28µs p(95)=705.66µs
     http_req_sending...............: avg=758.8µs  min=11.7µs   med=36.2µs  max=228.46ms p(90)=105.02µs p(95)=2.26ms  
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=11.71s   min=565.58ms med=11.68s  max=23.28s   p(90)=15.33s   p(95)=16.41s  
     http_reqs......................: 12072   29.530564/s
     iteration_duration.............: avg=11.74s   min=576.77ms med=11.72s  max=23.31s   p(90)=15.36s   p(95)=16.43s  
     iterations.....................: 12072   29.530564/s
     vus............................: 25      min=25      max=350
     vus_max........................: 350     min=350     max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f8ebd401-2ab2-472c-816e-ac685518f200/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0b112f51-3652-49d8-1f1d-b7e98f8cb500/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/50ee24ed-7b62-4bd3-53d2-106d0afef900/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  99% — ✓ 9239 / ✗ 42
     ✗ no graphql errors
      ↳  99% — ✓ 9239 / ✗ 42
     ✓ valid response structure

     checks.........................: 99.69% ✓ 27717     ✗ 84   
     data_received..................: 811 MB 2.0 MB/s
     data_sent......................: 11 MB  27 kB/s
     http_req_blocked...............: avg=763.94µs min=2.29µs med=5.6µs   max=93.43ms  p(90)=9.79µs  p(95)=26.2µs
     http_req_connecting............: avg=715.3µs  min=0s     med=0s      max=87.26ms  p(90)=0s      p(95)=0s    
     http_req_duration..............: avg=15.21s   min=5s     med=15.05s  max=22.28s   p(90)=17.72s  p(95)=18.98s
       { expected_response:true }...: avg=15.26s   min=9.12s  med=15.06s  max=22.28s   p(90)=17.74s  p(95)=18.98s
     http_req_failed................: 0.45%  ✓ 42        ✗ 9239 
     http_req_receiving.............: avg=1.44ms   min=0s     med=159.7µs max=271.44ms p(90)=735.8µs p(95)=3.52ms
     http_req_sending...............: avg=911.9µs  min=12.2µs med=33.6µs  max=265.9ms  p(90)=114µs   p(95)=1.57ms
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s       p(90)=0s      p(95)=0s    
     http_req_waiting...............: avg=15.21s   min=5s     med=15.05s  max=22.28s   p(90)=17.72s  p(95)=18.98s
     http_reqs......................: 9281   22.675765/s
     iteration_duration.............: avg=15.25s   min=5s     med=15.08s  max=22.62s   p(90)=17.76s  p(95)=19s   
     iterations.....................: 9281   22.675765/s
     vus............................: 33     min=33      max=350
     vus_max........................: 350    min=350     max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/45f10c3a-2e35-4898-8678-6e9a10e37d00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4eaff48b-33e7-474b-e6a3-e0ca1d950500/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2648abb1-bc5d-43fa-ca29-7f7abd9e3300/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-deno`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 27399     ✗ 0    
     data_received..................: 801 MB  1.9 MB/s
     data_sent......................: 11 MB   26 kB/s
     http_req_blocked...............: avg=1.11ms min=1.9µs   med=4.2µs   max=119.71ms p(90)=6.7µs   p(95)=21.2µs
     http_req_connecting............: avg=1.07ms min=0s      med=0s      max=119.68ms p(90)=0s      p(95)=0s    
     http_req_duration..............: avg=15.52s min=5.43s   med=14.81s  max=24.77s   p(90)=19.2s   p(95)=19.64s
       { expected_response:true }...: avg=15.52s min=5.43s   med=14.81s  max=24.77s   p(90)=19.2s   p(95)=19.64s
     http_req_failed................: 0.00%   ✓ 0         ✗ 9133 
     http_req_receiving.............: avg=3.13ms min=63.19µs med=117.7µs max=301.89ms p(90)=2.13ms  p(95)=15.9ms
     http_req_sending...............: avg=1.36ms min=11.5µs  med=23.8µs  max=256.94ms p(90)=195.9µs p(95)=6.42ms
     http_req_tls_handshaking.......: avg=0s     min=0s      med=0s      max=0s       p(90)=0s      p(95)=0s    
     http_req_waiting...............: avg=15.51s min=5.43s   med=14.81s  max=24.77s   p(90)=19.2s   p(95)=19.64s
     http_reqs......................: 9133    22.205029/s
     iteration_duration.............: avg=15.57s min=5.5s    med=14.86s  max=24.78s   p(90)=19.24s  p(95)=19.69s
     iterations.....................: 9133    22.205029/s
     vus............................: 36      min=36      max=350
     vus_max........................: 350     min=350     max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7625098e-86f5-4d49-4d43-c0867e59f100/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/187696cf-0201-466f-a5c9-e59f5b5ab500/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f792d5e4-16f6-449b-6b3e-5523a326e300/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  58% — ✓ 1964 / ✗ 1380
     ✗ no graphql errors
      ↳  58% — ✓ 1964 / ✗ 1380
     ✓ valid response structure

     checks.........................: 68.09% ✓ 5892     ✗ 2760 
     data_received..................: 172 MB 401 kB/s
     data_sent......................: 4.2 MB 9.7 kB/s
     http_req_blocked...............: avg=1.88ms   min=1.3µs med=4.3µs   max=36.36ms  p(90)=2ms      p(95)=16.87ms 
     http_req_connecting............: avg=1.84ms   min=0s    med=0s      max=36.34ms  p(90)=1.91ms   p(95)=16.69ms 
     http_req_duration..............: avg=41.98s   min=8.34s med=52.2s   max=1m0s     p(90)=1m0s     p(95)=1m0s    
       { expected_response:true }...: avg=29.32s   min=8.34s med=22.58s  max=59.88s   p(90)=53.68s   p(95)=57.93s  
     http_req_failed................: 41.26% ✓ 1380     ✗ 1964 
     http_req_receiving.............: avg=683.48µs min=0s    med=80.6µs  max=307.78ms p(90)=234.45µs p(95)=378.08µs
     http_req_sending...............: avg=408.6µs  min=7.5µs med=28.25µs max=167.08ms p(90)=206.34µs p(95)=726.17µs
     http_req_tls_handshaking.......: avg=0s       min=0s    med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=41.98s   min=8.34s med=52.2s   max=1m0s     p(90)=1m0s     p(95)=1m0s    
     http_reqs......................: 3344   7.776462/s
     iteration_duration.............: avg=41.99s   min=8.34s med=52.21s  max=1m0s     p(90)=1m0s     p(95)=1m0s    
     iterations.....................: 3344   7.776462/s
     vus............................: 186    min=186    max=350
     vus_max........................: 350    min=350    max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/80899e2e-282e-4672-e6bd-fd34ff4dda00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f569d3a7-7def-4d8b-eb86-d8254709a600/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9036e2a0-3b80-4cd2-5da1-4a859f4bfb00/public" alt="HTTP Overview" />


  </details>