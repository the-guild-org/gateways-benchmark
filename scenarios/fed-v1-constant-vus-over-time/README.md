## Overview for: `scenarios/fed-v1-constant-vus-over-time`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. It's being executed with a constant amount of VUs over a fixed amount of time. It measure things like memory usage, CPU usage, average RPS. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was running 400 VUs over 200s


### Comparison


| Gateway                             | RPS ⬇️ |        Requests         |          Duration          |
| :---------------------------------- | :----: | :---------------------: | :------------------------: |
| wundergraph                         |  734   | 147194 total, 0 failed  |   avg: 538ms, p95: 770ms   |
| stitching-federation-with-yoga-bun  |  132   |  26764 total, 0 failed  |  avg: 3000ms, p95: 3975ms  |
| mesh-supergraph                     |  109   |  22156 total, 0 failed  |  avg: 3637ms, p95: 4374ms  |
| apollo-router                       |   89   |  18150 total, 0 failed  |  avg: 4454ms, p95: 6510ms  |
| mesh                                |   74   |  15132 total, 0 failed  |  avg: 5326ms, p95: 7408ms  |
| stitching-federation-with-yoga-deno |   72   |  14605 total, 0 failed  |  avg: 5522ms, p95: 6752ms  |
| stitching-federation-with-yoga-uws  |   72   |  14765 total, 0 failed  |  avg: 5478ms, p95: 9383ms  |
| apollo-gateway-with-yoga-uws        |   69   |  13978 total, 0 failed  | avg: 5773ms, p95: 10622ms  |
| mercurius                           |   67   |  13724 total, 0 failed  |  avg: 5855ms, p95: 6306ms  |
| stitching-federation-with-yoga      |   56   | 11849 total, 538 failed | avg: 6885ms, p95: 15255ms  |
| apollo-gateway-with-yoga            |   53   | 10981 total, 43 failed  | avg: 7406ms, p95: 17921ms  |
| apollo-server                       |   49   | 10320 total, 354 failed | avg: 7937ms, p95: 18207ms  |
| apollo-server-node16                |   37   |  7838 total, 0 failed   | avg: 10410ms, p95: 23872ms |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 441582     ✗ 0     
     data_received..................: 733 MB  3.7 MB/s
     data_sent......................: 175 MB  872 kB/s
     http_req_blocked...............: avg=308.07µs min=1µs      med=2.2µs    max=216.97ms p(90)=3.5µs    p(95)=4.3µs   
     http_req_connecting............: avg=297.46µs min=0s       med=0s       max=206.99ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=537.98ms min=193.75ms med=521.1ms  max=1.6s     p(90)=709.88ms p(95)=770.11ms
       { expected_response:true }...: avg=537.98ms min=193.75ms med=521.1ms  max=1.6s     p(90)=709.88ms p(95)=770.11ms
   ✓ http_req_failed................: 0.00%   ✓ 0          ✗ 147194
     http_req_receiving.............: avg=7.09ms   min=14.5µs   med=35.7µs   max=679.92ms p(90)=440.62µs p(95)=35.32ms 
     http_req_sending...............: avg=799.15µs min=6.3µs    med=11.9µs   max=512.54ms p(90)=24.5µs   p(95)=111.16µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=530.09ms min=193.7ms  med=517.19ms max=1.31s    p(90)=690.16ms p(95)=743.27ms
     http_reqs......................: 147194  734.740537/s
     iteration_duration.............: avg=543.79ms min=194.32ms med=525.84ms max=1.6s     p(90)=719.57ms p(95)=783.04ms
     iterations.....................: 147194  734.740537/s
     vus............................: 400     min=400      max=400 
     vus_max........................: 400     min=400      max=400 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7a4ca631-7ebd-4d14-731e-6c495614ae00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2cc42dfe-3db8-45b8-5e83-0c1b7c448200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 80292      ✗ 0    
     data_received..................: 133 MB  663 kB/s
     data_sent......................: 32 MB   158 kB/s
     http_req_blocked...............: avg=1.54ms   min=1µs    med=2.1µs  max=268.85ms p(90)=3.1µs  p(95)=5.4µs   
     http_req_connecting............: avg=1.51ms   min=0s     med=0s     max=268.68ms p(90)=0s     p(95)=0s      
     http_req_duration..............: avg=3s       min=2.21s  med=2.84s  max=7.65s    p(90)=3.46s  p(95)=3.97s   
       { expected_response:true }...: avg=3s       min=2.21s  med=2.84s  max=7.65s    p(90)=3.46s  p(95)=3.97s   
   ✓ http_req_failed................: 0.00%   ✓ 0          ✗ 26764
     http_req_receiving.............: avg=342.75µs min=13.8µs med=33.1µs max=83.68ms  p(90)=59µs   p(95)=157.48µs
     http_req_sending...............: avg=508.74µs min=5.9µs  med=11.6µs max=148.39ms p(90)=27.3µs p(95)=108.58µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=2.99s    min=2.21s  med=2.84s  max=7.64s    p(90)=3.46s  p(95)=3.97s   
     http_reqs......................: 26764   132.971902/s
     iteration_duration.............: avg=3s       min=2.21s  med=2.84s  max=7.7s     p(90)=3.46s  p(95)=4.02s   
     iterations.....................: 26764   132.971902/s
     vus............................: 348     min=348      max=400
     vus_max........................: 400     min=400      max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b4d7bdf9-3a38-45ca-900d-5721ccef6f00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7a460f94-9b51-44c9-48f0-82093fea7300/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 22094 / ✗ 62
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 22156

     checks.........................: 66.57% ✓ 44250      ✗ 22218
     data_received..................: 112 MB 551 kB/s
     data_sent......................: 26 MB  130 kB/s
     http_req_blocked...............: avg=1.37ms   min=1.1µs med=2µs    max=138.11ms p(90)=3µs    p(95)=3.8µs  
     http_req_connecting............: avg=1.35ms   min=0s    med=0s     max=138.07ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=3.63s    min=1.83s med=3.59s  max=7.86s    p(90)=4.12s  p(95)=4.37s  
       { expected_response:true }...: avg=3.63s    min=1.83s med=3.59s  max=7.86s    p(90)=4.12s  p(95)=4.37s  
   ✓ http_req_failed................: 0.00%  ✓ 0          ✗ 22156
     http_req_receiving.............: avg=53.4µs   min=20µs  med=42.1µs max=31.97ms  p(90)=65.4µs p(95)=74.12µs
     http_req_sending...............: avg=213.63µs min=7µs   med=12µs   max=93.44ms  p(90)=22.4µs p(95)=28.1µs 
     http_req_tls_handshaking.......: avg=0s       min=0s    med=0s     max=0s       p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=3.63s    min=1.83s med=3.59s  max=7.85s    p(90)=4.12s  p(95)=4.37s  
     http_reqs......................: 22156  109.500527/s
     iteration_duration.............: avg=3.63s    min=1.83s med=3.59s  max=7.92s    p(90)=4.12s  p(95)=4.37s  
     iterations.....................: 22156  109.500527/s
     vus............................: 172    min=172      max=400
     vus_max........................: 400    min=400      max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/af2d4223-9810-4b49-6762-320d1391a300/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/dc75b010-c1d7-4237-b786-2731c791f400/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 18128 / ✗ 22
     ✗ valid response structure
      ↳  99% — ✓ 18128 / ✗ 22

     checks.........................: 99.91% ✓ 54406     ✗ 44   
     data_received..................: 90 MB  444 kB/s
     data_sent......................: 22 MB  106 kB/s
     http_req_blocked...............: avg=1.21ms   min=1.4µs  med=3µs    max=116.56ms p(90)=4.59µs p(95)=13.5µs 
     http_req_connecting............: avg=1.19ms   min=0s     med=0s     max=116.53ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=4.45s    min=2.1s   med=4.21s  max=10.68s   p(90)=5.57s  p(95)=6.51s  
       { expected_response:true }...: avg=4.45s    min=2.1s   med=4.21s  max=10.68s   p(90)=5.57s  p(95)=6.51s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 18150
     http_req_receiving.............: avg=95.25µs  min=22.1µs med=62.8µs max=75.33ms  p(90)=91.8µs p(95)=105.4µs
     http_req_sending...............: avg=302.31µs min=8µs    med=17.9µs max=81.54ms  p(90)=36.3µs p(95)=104.8µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=4.45s    min=2.1s   med=4.21s  max=10.67s   p(90)=5.57s  p(95)=6.51s  
     http_reqs......................: 18150  89.147438/s
     iteration_duration.............: avg=4.45s    min=2.1s   med=4.21s  max=10.73s   p(90)=5.57s  p(95)=6.51s  
     iterations.....................: 18150  89.147438/s
     vus............................: 198    min=198     max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f3b9dfdf-5b7e-4c13-b41e-97b785487000/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5a7affed-77b6-4f86-beed-80b02d910800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  98% — ✓ 14973 / ✗ 159
     ✗ valid response structure
      ↳  98% — ✓ 14973 / ✗ 159

     checks.........................: 99.29% ✓ 45078     ✗ 318  
     data_received..................: 76 MB  376 kB/s
     data_sent......................: 18 MB  89 kB/s
     http_req_blocked...............: avg=1.76ms   min=1.4µs  med=2.5µs   max=137.07ms p(90)=3.9µs   p(95)=16.99µs 
     http_req_connecting............: avg=1.74ms   min=0s     med=0s      max=137.03ms p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=5.32s    min=2.58s  med=5.16s   max=11.67s   p(90)=6.42s   p(95)=7.4s    
       { expected_response:true }...: avg=5.32s    min=2.58s  med=5.16s   max=11.67s   p(90)=6.42s   p(95)=7.4s    
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 15132
     http_req_receiving.............: avg=75.03µs  min=23.3µs med=54.74µs max=20.97ms  p(90)=92.59µs p(95)=111.59µs
     http_req_sending...............: avg=515.57µs min=9.4µs  med=14.5µs  max=41.94ms  p(90)=35.7µs  p(95)=59.6µs  
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=5.32s    min=2.58s  med=5.16s   max=11.67s   p(90)=6.42s   p(95)=7.4s    
     http_reqs......................: 15132  74.695898/s
     iteration_duration.............: avg=5.32s    min=2.58s  med=5.16s   max=11.72s   p(90)=6.42s   p(95)=7.4s    
     iterations.....................: 15132  74.695898/s
     vus............................: 208    min=208     max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e81f2531-177f-427a-70bd-b75db9ffc400/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3f0dbb3e-eaf4-4d01-0848-04b00cf66300/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-deno`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 14567 / ✗ 38
     ✗ valid response structure
      ↳  99% — ✓ 14567 / ✗ 38

     checks.........................: 99.82% ✓ 43739     ✗ 76   
     data_received..................: 74 MB  364 kB/s
     data_sent......................: 17 MB  86 kB/s
     http_req_blocked...............: avg=763.96µs min=1.2µs  med=2.7µs  max=62.77ms p(90)=4.4µs   p(95)=13.6µs  
     http_req_connecting............: avg=749.25µs min=0s     med=0s     max=62.74ms p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=5.52s    min=2.69s  med=5.4s   max=9.82s   p(90)=6.03s   p(95)=6.75s   
       { expected_response:true }...: avg=5.52s    min=2.69s  med=5.4s   max=9.82s   p(90)=6.03s   p(95)=6.75s   
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 14605
     http_req_receiving.............: avg=154.82µs min=18.3µs med=39.5µs max=40.81ms p(90)=100.9µs p(95)=147.08µs
     http_req_sending...............: avg=201.49µs min=6.7µs  med=15.3µs max=49.38ms p(90)=48.8µs  p(95)=188.37µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=5.52s    min=2.69s  med=5.4s   max=9.82s   p(90)=6.03s   p(95)=6.75s   
     http_reqs......................: 14605  72.052172/s
     iteration_duration.............: avg=5.52s    min=2.69s  med=5.4s   max=9.86s   p(90)=6.03s   p(95)=6.75s   
     iterations.....................: 14605  72.052172/s
     vus............................: 6      min=6       max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b3117540-bef1-4857-01fc-308841eec500/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/bbcd89a8-f287-407a-8dce-ac1cae052300/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-uws`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  91% — ✓ 13519 / ✗ 1246
     ✗ valid response structure
      ↳  91% — ✓ 13519 / ✗ 1246

     checks.........................: 94.37% ✓ 41803     ✗ 2492 
     data_received..................: 90 MB  444 kB/s
     data_sent......................: 18 MB  86 kB/s
     http_req_blocked...............: avg=2.11ms   min=1.2µs  med=2.29µs max=139.88ms p(90)=3.8µs   p(95)=12.67µs
     http_req_connecting............: avg=2.08ms   min=0s     med=0s     max=132.99ms p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=5.47s    min=1.8s   med=4.73s  max=17.9s    p(90)=7.85s   p(95)=9.38s  
       { expected_response:true }...: avg=5.47s    min=1.8s   med=4.73s  max=17.9s    p(90)=7.85s   p(95)=9.38s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 14765
     http_req_receiving.............: avg=68.61µs  min=21.5µs med=51.2µs max=17.66ms  p(90)=79.86µs p(95)=98.7µs 
     http_req_sending...............: avg=291.41µs min=6.7µs  med=13.3µs max=96.53ms  p(90)=28.4µs  p(95)=42µs   
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=5.47s    min=1.8s   med=4.73s  max=17.9s    p(90)=7.85s   p(95)=9.38s  
     http_reqs......................: 14765  72.584822/s
     iteration_duration.............: avg=5.48s    min=1.8s   med=4.73s  max=17.9s    p(90)=7.86s   p(95)=9.38s  
     iterations.....................: 14765  72.584822/s
     vus............................: 237    min=237     max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/629f17c2-9b28-45a5-7761-920ef9c09e00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a5d78faa-7868-4270-7a5b-73ac85ff9300/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga-uws`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  88% — ✓ 12370 / ✗ 1608
     ✗ valid response structure
      ↳  88% — ✓ 12370 / ✗ 1608

     checks.........................: 92.33% ✓ 38718     ✗ 3216 
     data_received..................: 66 MB  327 kB/s
     data_sent......................: 17 MB  82 kB/s
     http_req_blocked...............: avg=1.05ms  min=900ns    med=2µs    max=61.43ms p(90)=3.3µs  p(95)=7.31µs 
     http_req_connecting............: avg=1.04ms  min=0s       med=0s     max=61.08ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=5.77s   min=618.94ms med=5.49s  max=16.91s  p(90)=9.8s   p(95)=10.62s 
       { expected_response:true }...: avg=5.77s   min=618.94ms med=5.49s  max=16.91s  p(90)=9.8s   p(95)=10.62s 
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 13978
     http_req_receiving.............: avg=55.23µs min=14.2µs   med=36µs   max=14.61ms p(90)=70µs   p(95)=81.11µs
     http_req_sending...............: avg=165.7µs min=6.8µs    med=12.2µs max=23.97ms p(90)=27.4µs p(95)=103µs  
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s     max=0s      p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=5.77s   min=618.87ms med=5.49s  max=16.91s  p(90)=9.8s   p(95)=10.61s 
     http_reqs......................: 13978  69.075891/s
     iteration_duration.............: avg=5.77s   min=619.14ms med=5.49s  max=16.91s  p(90)=9.85s  p(95)=10.63s 
     iterations.....................: 13978  69.075891/s
     vus............................: 234    min=234     max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0d0c0ad1-459b-4c05-f755-5403ff24d600/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/27e875af-18df-4292-639c-945566f8cd00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 41172     ✗ 0    
     data_received..................: 69 MB   342 kB/s
     data_sent......................: 16 MB   81 kB/s
     http_req_blocked...............: avg=724.68µs min=1.4µs    med=3.2µs  max=106.75ms p(90)=4.59µs p(95)=17.88µs
     http_req_connecting............: avg=708.42µs min=0s       med=0s     max=60.66ms  p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=5.85s    min=651.24ms med=5.75s  max=15.03s   p(90)=6.13s  p(95)=6.3s   
       { expected_response:true }...: avg=5.85s    min=651.24ms med=5.75s  max=15.03s   p(90)=6.13s  p(95)=6.3s   
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 13724
     http_req_receiving.............: avg=75.83µs  min=22.2µs   med=71.7µs max=21.86ms  p(90)=94.5µs p(95)=101.9µs
     http_req_sending...............: avg=87.25µs  min=7.4µs    med=18.7µs max=24.13ms  p(90)=35.7µs p(95)=66.45µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=5.85s    min=651.02ms med=5.75s  max=15.02s   p(90)=6.13s  p(95)=6.3s   
     http_reqs......................: 13724   67.987573/s
     iteration_duration.............: avg=5.85s    min=652.9ms  med=5.75s  max=15.04s   p(90)=6.14s  p(95)=6.3s   
     iterations.....................: 13724   67.987573/s
     vus............................: 29      min=29      max=400
     vus_max........................: 400     min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/87db31cc-571d-4802-2b1d-b46594fb1600/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8e90c412-aaad-436c-9eb9-abb972411000/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  95% — ✓ 11311 / ✗ 538
     ✗ no graphql errors
      ↳  91% — ✓ 10854 / ✗ 995
     ✗ valid response structure
      ↳  95% — ✓ 10854 / ✗ 457

     checks.........................: 94.31% ✓ 33019    ✗ 1990 
     data_received..................: 61 MB  291 kB/s
     data_sent......................: 14 MB  67 kB/s
     http_req_blocked...............: avg=5.18ms  min=1.5µs med=2.8µs  max=463ms    p(90)=23.7µs   p(95)=5.87ms  
     http_req_connecting............: avg=5.04ms  min=0s    med=0s     max=462.8ms  p(90)=0s       p(95)=5.17ms  
     http_req_duration..............: avg=6.88s   min=1.86s med=4.11s  max=1m0s     p(90)=7.65s    p(95)=15.25s  
       { expected_response:true }...: avg=4.81s   min=1.86s med=4.1s   max=57.78s   p(90)=6.24s    p(95)=8.36s   
   ✓ http_req_failed................: 4.54%  ✓ 538      ✗ 11311
     http_req_receiving.............: avg=83.42µs min=0s    med=64.9µs max=35.61ms  p(90)=101.32µs p(95)=128.4µs 
     http_req_sending...............: avg=1.79ms  min=9.1µs med=17.1µs max=258.08ms p(90)=57.82µs  p(95)=493.04µs
     http_req_tls_handshaking.......: avg=0s      min=0s    med=0s     max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=6.88s   min=1.86s med=4.11s  max=1m0s     p(90)=7.65s    p(95)=15.18s  
     http_reqs......................: 11849  56.41758/s
     iteration_duration.............: avg=6.89s   min=1.86s med=4.11s  max=1m0s     p(90)=7.67s    p(95)=15.31s  
     iterations.....................: 11849  56.41758/s
     vus............................: 19     min=19     max=400
     vus_max........................: 400    min=400    max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/489fa3b2-1072-45f6-35ab-26f924618900/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/20f0f190-dd5c-419c-be8a-e58f3307ba00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  99% — ✓ 10938 / ✗ 43
     ✗ no graphql errors
      ↳  74% — ✓ 8128 / ✗ 2853
     ✗ valid response structure
      ↳  74% — ✓ 8128 / ✗ 2810

     checks.........................: 82.65% ✓ 27194     ✗ 5706 
     data_received..................: 50 MB  242 kB/s
     data_sent......................: 13 MB  64 kB/s
     http_req_blocked...............: avg=2.59ms   min=1.4µs    med=2.7µs  max=157.07ms p(90)=4.5µs  p(95)=19.4µs  
     http_req_connecting............: avg=2.53ms   min=0s       med=0s     max=157.04ms p(90)=0s     p(95)=0s      
     http_req_duration..............: avg=7.4s     min=363.78ms med=6.29s  max=1m0s     p(90)=11.85s p(95)=17.92s  
       { expected_response:true }...: avg=7.19s    min=363.78ms med=6.27s  max=59.41s   p(90)=11.69s p(95)=15.79s  
   ✓ http_req_failed................: 0.39%  ✓ 43        ✗ 10938
     http_req_receiving.............: avg=575.79µs min=0s       med=55.9µs max=160.41ms p(90)=85.8µs p(95)=101.4µs 
     http_req_sending...............: avg=512.25µs min=7.5µs    med=15.2µs max=101.25ms p(90)=34.2µs p(95)=217.31µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=7.4s     min=363.62ms med=6.29s  max=1m0s     p(90)=11.85s p(95)=17.92s  
     http_reqs......................: 10981  53.558091/s
     iteration_duration.............: avg=7.4s     min=364.77ms med=6.29s  max=1m0s     p(90)=11.88s p(95)=17.92s  
     iterations.....................: 10981  53.558091/s
     vus............................: 60     min=60      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7bd17de1-4845-42a9-98dc-b6f43873ca00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c7e3d291-5b83-4271-c550-46a52ff6a100/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  96% — ✓ 9966 / ✗ 354
     ✗ no graphql errors
      ↳  80% — ✓ 8299 / ✗ 2021
     ✗ valid response structure
      ↳  83% — ✓ 8299 / ✗ 1667

     checks.........................: 86.79% ✓ 26564     ✗ 4042 
     data_received..................: 49 MB  233 kB/s
     data_sent......................: 12 MB  58 kB/s
     http_req_blocked...............: avg=1.7ms   min=1.3µs med=2.9µs  max=103.32ms p(90)=14.7µs p(95)=7.04ms  
     http_req_connecting............: avg=1.66ms  min=0s    med=0s     max=103.28ms p(90)=0s     p(95)=6.61ms  
     http_req_duration..............: avg=7.93s   min=1.21s med=5.54s  max=1m0s     p(90)=7.92s  p(95)=18.2s   
       { expected_response:true }...: avg=6.08s   min=1.21s med=5.47s  max=58.03s   p(90)=7.63s  p(95)=8.17s   
   ✓ http_req_failed................: 3.43%  ✓ 354       ✗ 9966 
     http_req_receiving.............: avg=75.6µs  min=0s    med=63.6µs max=14.97ms  p(90)=94.1µs p(95)=107.9µs 
     http_req_sending...............: avg=240.3µs min=7.8µs med=17µs   max=41.53ms  p(90)=43.4µs p(95)=439.21µs
     http_req_tls_handshaking.......: avg=0s      min=0s    med=0s     max=0s       p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=7.93s   min=1.21s med=5.54s  max=1m0s     p(90)=7.92s  p(95)=18.2s   
     http_reqs......................: 10320  49.044148/s
     iteration_duration.............: avg=7.94s   min=1.21s med=5.54s  max=1m0s     p(90)=7.92s  p(95)=18.22s  
     iterations.....................: 10320  49.044148/s
     vus............................: 45     min=45      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6798b27b-6925-4243-e4fa-0ac38dd20900/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7604d49e-cf7f-44e9-8e8e-ba8678a98100/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server-node16`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  55% — ✓ 4337 / ✗ 3501
     ✗ valid response structure
      ↳  55% — ✓ 4337 / ✗ 3501

     checks.........................: 70.22% ✓ 16512    ✗ 7002 
     data_received..................: 34 MB  165 kB/s
     data_sent......................: 9.3 MB 45 kB/s
     http_req_blocked...............: avg=5.95ms   min=1.5µs    med=2.9µs   max=213.78ms p(90)=6.93µs  p(95)=28.31ms 
     http_req_connecting............: avg=5.83ms   min=0s       med=0s      max=210.54ms p(90)=0s      p(95)=27.38ms 
     http_req_duration..............: avg=10.4s    min=278.62ms med=9.29s   max=33.8s    p(90)=20.25s  p(95)=23.87s  
       { expected_response:true }...: avg=10.4s    min=278.62ms med=9.29s   max=33.8s    p(90)=20.25s  p(95)=23.87s  
   ✓ http_req_failed................: 0.00%  ✓ 0        ✗ 7838 
     http_req_receiving.............: avg=99.67µs  min=26.5µs   med=76.09µs max=20.68ms  p(90)=127.1µs p(95)=155.41µs
     http_req_sending...............: avg=884.41µs min=9.6µs    med=20.29µs max=90.97ms  p(90)=56.13µs p(95)=1.54ms  
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=10.4s    min=278.49ms med=9.29s   max=33.8s    p(90)=20.25s  p(95)=23.87s  
     http_reqs......................: 7838   37.80471/s
     iteration_duration.............: avg=10.41s   min=279.37ms med=9.31s   max=33.8s    p(90)=20.25s  p(95)=23.87s  
     iterations.....................: 7838   37.80471/s
     vus............................: 75     min=75     max=400
     vus_max........................: 400    min=400    max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/66513729-1b12-4911-171a-f8afdcfff700/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a34b1947-95c9-4385-deea-2b3f610bb500/public" alt="HTTP Overview" />


  </details>