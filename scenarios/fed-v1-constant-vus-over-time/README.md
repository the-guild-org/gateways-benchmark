## Overview for: `scenarios/fed-v1-constant-vus-over-time`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. It's being executed with a constant amount of VUs over a fixed amount of time. It measure things like memory usage, CPU usage, average RPS. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was running 400 VUs over 200s


### Comparison


| Gateway                             | RPS ⬇️ |        Requests         |         Duration          |
| :---------------------------------- | :----: | :---------------------: | :-----------------------: |
| wundergraph                         |  617   | 123674 total, 0 failed  |  avg: 641ms, p95: 929ms   |
| stitching-federation-with-yoga-deno |  103   |  20829 total, 0 failed  | avg: 3861ms, p95: 4466ms  |
| mesh-supergraph                     |   99   |  20158 total, 0 failed  | avg: 3986ms, p95: 5026ms  |
| stitching-federation-with-yoga-bun  |   86   |  17631 total, 0 failed  | avg: 4614ms, p95: 5723ms  |
| stitching-federation-with-yoga-uws  |   85   |  17416 total, 0 failed  | avg: 4626ms, p95: 7778ms  |
| apollo-router                       |   79   |  16333 total, 0 failed  | avg: 4968ms, p95: 7679ms  |
| mesh                                |   79   |  16174 total, 0 failed  | avg: 4985ms, p95: 7056ms  |
| apollo-gateway-with-yoga-uws        |   72   |  14523 total, 0 failed  | avg: 5530ms, p95: 13624ms |
| apollo-gateway-with-yoga            |   68   | 14620 total, 603 failed | avg: 5598ms, p95: 28176ms |
| apollo-server-node16                |   64   |  13103 total, 0 failed  | avg: 6161ms, p95: 16734ms |
| apollo-server                       |   58   | 12544 total, 645 failed | avg: 6587ms, p95: 59870ms |
| mercurius                           |   53   |  10919 total, 0 failed  | avg: 7358ms, p95: 7913ms  |
| stitching-federation-with-yoga      |   50   | 10682 total, 413 failed | avg: 7642ms, p95: 16162ms |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 371022    ✗ 0     
     data_received..................: 616 MB  3.1 MB/s
     data_sent......................: 147 MB  733 kB/s
     http_req_blocked...............: avg=612.03µs min=1.2µs    med=2.5µs    max=378.59ms p(90)=3.9µs    p(95)=4.7µs   
     http_req_connecting............: avg=595.53µs min=0s       med=0s       max=378.56ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=640.79ms min=208.16ms med=621.14ms max=1.69s    p(90)=851.21ms p(95)=929.15ms
       { expected_response:true }...: avg=640.79ms min=208.16ms med=621.14ms max=1.69s    p(90)=851.21ms p(95)=929.15ms
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 123674
     http_req_receiving.............: avg=6.91ms   min=16.7µs   med=40.8µs   max=637.13ms p(90)=330.46µs p(95)=17.38ms 
     http_req_sending...............: avg=1.04ms   min=7.7µs    med=13.8µs   max=515.03ms p(90)=30.7µs   p(95)=131.3µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=632.84ms min=207.97ms med=617.15ms max=1.64s    p(90)=831.45ms p(95)=899.88ms
     http_reqs......................: 123674  617.06673/s
     iteration_duration.............: avg=647.13ms min=218.44ms med=626.25ms max=1.72s    p(90)=858.71ms p(95)=940.13ms
     iterations.....................: 123674  617.06673/s
     vus............................: 400     min=400     max=400 
     vus_max........................: 400     min=400     max=400 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/bc2d7b77-ea8c-426a-6e26-31f2d648b400/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ba361e53-403d-47dc-81fa-30a0837a5100/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-deno`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 20764 / ✗ 65
     ✗ valid response structure
      ↳  99% — ✓ 20764 / ✗ 65

     checks.........................: 99.79% ✓ 62357      ✗ 130  
     data_received..................: 105 MB 521 kB/s
     data_sent......................: 25 MB  123 kB/s
     http_req_blocked...............: avg=750.37µs min=800ns  med=1.8µs  max=112.2ms  p(90)=3µs     p(95)=3.6µs  
     http_req_connecting............: avg=734.55µs min=0s     med=0s     max=112.03ms p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=3.86s    min=1.85s  med=3.81s  max=6.58s    p(90)=4.11s   p(95)=4.46s  
       { expected_response:true }...: avg=3.86s    min=1.85s  med=3.81s  max=6.58s    p(90)=4.11s   p(95)=4.46s  
   ✓ http_req_failed................: 0.00%  ✓ 0          ✗ 20829
     http_req_receiving.............: avg=90.39µs  min=14.3µs med=25.1µs max=34.12ms  p(90)=68.12µs p(95)=83.96µs
     http_req_sending...............: avg=222.15µs min=5.7µs  med=10.5µs max=70.5ms   p(90)=23.7µs  p(95)=97.75µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=3.86s    min=1.85s  med=3.81s  max=6.58s    p(90)=4.11s   p(95)=4.46s  
     http_reqs......................: 20829  103.204766/s
     iteration_duration.............: avg=3.86s    min=1.85s  med=3.81s  max=6.61s    p(90)=4.11s   p(95)=4.46s  
     iterations.....................: 20829  103.204766/s
     vus............................: 82     min=82       max=400
     vus_max........................: 400    min=400      max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/00493c2f-c130-4935-85e5-300fac329d00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/640992f5-c198-43af-b852-e0f4c69d9000/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 20112 / ✗ 46
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 20158

     checks.........................: 66.59% ✓ 40270     ✗ 20204
     data_received..................: 102 MB 503 kB/s
     data_sent......................: 24 MB  119 kB/s
     http_req_blocked...............: avg=354.7µs  min=1.2µs  med=2.2µs  max=67.77ms p(90)=3.5µs  p(95)=4.7µs 
     http_req_connecting............: avg=342.01µs min=0s     med=0s     max=35.81ms p(90)=0s     p(95)=0s    
     http_req_duration..............: avg=3.98s    min=1.4s   med=3.9s   max=9.23s   p(90)=4.65s  p(95)=5.02s 
       { expected_response:true }...: avg=3.98s    min=1.4s   med=3.9s   max=9.23s   p(90)=4.65s  p(95)=5.02s 
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 20158
     http_req_receiving.............: avg=60.29µs  min=21.3µs med=52.5µs max=34.6ms  p(90)=74.6µs p(95)=83.5µs
     http_req_sending...............: avg=48.44µs  min=7.4µs  med=13µs   max=31.97ms p(90)=23.9µs p(95)=29.8µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s     p(95)=0s    
     http_req_waiting...............: avg=3.98s    min=1.4s   med=3.9s   max=9.22s   p(90)=4.65s  p(95)=5.02s 
     http_reqs......................: 20158  99.816808/s
     iteration_duration.............: avg=3.98s    min=1.4s   med=3.9s   max=9.23s   p(90)=4.65s  p(95)=5.02s 
     iterations.....................: 20158  99.816808/s
     vus............................: 102    min=102     max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/81ac67d7-c3b2-415c-5c21-8db858206300/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8b1dc41c-885b-43f5-ddb9-af13bb980100/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 52893     ✗ 0    
     data_received..................: 88 MB   430 kB/s
     data_sent......................: 21 MB   103 kB/s
     http_req_blocked...............: avg=1.63ms   min=1.5µs  med=2.8µs  max=154.72ms p(90)=4.7µs  p(95)=21.6µs  
     http_req_connecting............: avg=1.61ms   min=0s     med=0s     max=154.64ms p(90)=0s     p(95)=0s      
     http_req_duration..............: avg=4.61s    min=3.17s  med=4.45s  max=11.8s    p(90)=4.95s  p(95)=5.72s   
       { expected_response:true }...: avg=4.61s    min=3.17s  med=4.45s  max=11.8s    p(90)=4.95s  p(95)=5.72s   
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 17631
     http_req_receiving.............: avg=145.04µs min=25µs   med=61.5µs max=74.99ms  p(90)=104µs  p(95)=186.25µs
     http_req_sending...............: avg=451.89µs min=9.29µs med=16.8µs max=99.91ms  p(90)=58.6µs p(95)=204.05µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=4.61s    min=3.17s  med=4.45s  max=11.8s    p(90)=4.95s  p(95)=5.71s   
     http_reqs......................: 17631   86.391059/s
     iteration_duration.............: avg=4.61s    min=3.17s  med=4.45s  max=11.92s   p(90)=4.95s  p(95)=5.76s   
     iterations.....................: 17631   86.391059/s
     vus............................: 161     min=161     max=400
     vus_max........................: 400     min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/cf7dcc28-e1e8-478e-724b-7c057d6c1000/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9b2146fc-745f-4c38-6ad3-d44e22a81a00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-uws`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  97% — ✓ 16917 / ✗ 499
     ✗ valid response structure
      ↳  97% — ✓ 16917 / ✗ 499

     checks.........................: 98.08% ✓ 51250     ✗ 998  
     data_received..................: 95 MB  468 kB/s
     data_sent......................: 21 MB  102 kB/s
     http_req_blocked...............: avg=859.15µs min=1µs    med=2µs    max=89.24ms p(90)=3.2µs  p(95)=6.2µs  
     http_req_connecting............: avg=848.19µs min=0s     med=0s     max=89.09ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=4.62s    min=1.4s   med=3.99s  max=12.33s  p(90)=6.68s  p(95)=7.77s  
       { expected_response:true }...: avg=4.62s    min=1.4s   med=3.99s  max=12.33s  p(90)=6.68s  p(95)=7.77s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 17416
     http_req_receiving.............: avg=51.16µs  min=15.6µs med=39.4µs max=18.86ms p(90)=68.2µs p(95)=78.39µs
     http_req_sending...............: avg=167.76µs min=6.1µs  med=12µs   max=56.57ms p(90)=26.3µs p(95)=32.9µs 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=4.62s    min=1.4s   med=3.99s  max=12.33s  p(90)=6.68s  p(95)=7.77s  
     http_reqs......................: 17416  85.999341/s
     iteration_duration.............: avg=4.62s    min=1.4s   med=3.99s  max=12.33s  p(90)=6.69s  p(95)=7.77s  
     iterations.....................: 17416  85.999341/s
     vus............................: 216    min=216     max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e0e42bf6-558a-4c9e-bb1b-4c9c10054b00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3fed0b70-d1af-4e00-18ec-5d59af94b800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 16290 / ✗ 43
     ✗ valid response structure
      ↳  99% — ✓ 16290 / ✗ 43

     checks.........................: 99.82% ✓ 48913     ✗ 86   
     data_received..................: 81 MB  397 kB/s
     data_sent......................: 19 MB  95 kB/s
     http_req_blocked...............: avg=3.16ms   min=1.5µs  med=3µs    max=230.09ms p(90)=4.59µs  p(95)=18.5µs  
     http_req_connecting............: avg=3.12ms   min=0s     med=0s     max=230.05ms p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=4.96s    min=1.84s  med=4.75s  max=11.4s    p(90)=6.5s    p(95)=7.67s   
       { expected_response:true }...: avg=4.96s    min=1.84s  med=4.75s  max=11.4s    p(90)=6.5s    p(95)=7.67s   
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 16333
     http_req_receiving.............: avg=143.45µs min=25.6µs med=64µs   max=87.13ms  p(90)=105.4µs p(95)=127.2µs 
     http_req_sending...............: avg=765.71µs min=9µs    med=18.1µs max=152.91ms p(90)=43.7µs  p(95)=116.64µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=4.96s    min=1.84s  med=4.75s  max=11.4s    p(90)=6.5s    p(95)=7.67s   
     http_reqs......................: 16333  79.784604/s
     iteration_duration.............: avg=4.97s    min=1.84s  med=4.75s  max=11.4s    p(90)=6.51s   p(95)=7.71s   
     iterations.....................: 16333  79.784604/s
     vus............................: 210    min=210     max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5747ded2-656e-45ad-3132-f0c784573b00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8a2f56f5-e382-4555-7707-c377efac9f00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  98% — ✓ 15954 / ✗ 220
     ✗ valid response structure
      ↳  98% — ✓ 15954 / ✗ 220

     checks.........................: 99.09% ✓ 48082     ✗ 440  
     data_received..................: 84 MB  413 kB/s
     data_sent......................: 19 MB  95 kB/s
     http_req_blocked...............: avg=2.62ms   min=1.6µs  med=2.7µs  max=179.67ms p(90)=4.3µs  p(95)=7.43µs
     http_req_connecting............: avg=2.56ms   min=0s     med=0s     max=172.8ms  p(90)=0s     p(95)=0s    
     http_req_duration..............: avg=4.98s    min=2.65s  med=4.81s  max=11.07s   p(90)=5.92s  p(95)=7.05s 
       { expected_response:true }...: avg=4.98s    min=2.65s  med=4.81s  max=11.07s   p(90)=5.92s  p(95)=7.05s 
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 16174
     http_req_receiving.............: avg=168.66µs min=23.9µs med=59.5µs max=46.31ms  p(90)=83.5µs p(95)=96.3µs
     http_req_sending...............: avg=639.53µs min=8.2µs  med=15µs   max=104.22ms p(90)=30.6µs p(95)=40.7µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s     p(95)=0s    
     http_req_waiting...............: avg=4.98s    min=2.65s  med=4.81s  max=11.05s   p(90)=5.92s  p(95)=7.05s 
     http_reqs......................: 16174  79.812073/s
     iteration_duration.............: avg=4.98s    min=2.66s  med=4.81s  max=11.24s   p(90)=5.92s  p(95)=7.06s 
     iterations.....................: 16174  79.812073/s
     vus............................: 243    min=243     max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d39b17ff-4414-46d1-5478-a6b4363ce900/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ae65c3c2-31a8-43ce-c890-ee4626224300/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga-uws`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  82% — ✓ 11933 / ✗ 2590
     ✗ valid response structure
      ↳  82% — ✓ 11933 / ✗ 2590

     checks.........................: 88.11% ✓ 38389     ✗ 5180 
     data_received..................: 68 MB  339 kB/s
     data_sent......................: 17 MB  86 kB/s
     http_req_blocked...............: avg=1.78ms   min=900ns    med=2µs    max=162.55ms p(90)=3.2µs  p(95)=6.8µs  
     http_req_connecting............: avg=1.75ms   min=0s       med=0s     max=162.51ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=5.53s    min=576.9ms  med=4.87s  max=20.94s   p(90)=11.87s p(95)=13.62s 
       { expected_response:true }...: avg=5.53s    min=576.9ms  med=4.87s  max=20.94s   p(90)=11.87s p(95)=13.62s 
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 14523
     http_req_receiving.............: avg=143.44µs min=14.49µs  med=34.5µs max=47.6ms   p(90)=64.3µs p(95)=77.5µs 
     http_req_sending...............: avg=511.3µs  min=6.1µs    med=11.9µs max=102.25ms p(90)=26.2µs p(95)=108.3µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=5.52s    min=576.81ms med=4.87s  max=20.94s   p(90)=11.87s p(95)=13.62s 
     http_reqs......................: 14523  72.096481/s
     iteration_duration.............: avg=5.53s    min=577.5ms  med=4.87s  max=20.94s   p(90)=11.87s p(95)=13.62s 
     iterations.....................: 14523  72.096481/s
     vus............................: 280    min=280     max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a5591fd0-cf71-4943-8999-e32f630ea400/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/076e5f50-3a25-45e0-33b1-6d69be977b00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  95% — ✓ 14017 / ✗ 603
     ✗ no graphql errors
      ↳  95% — ✓ 13959 / ✗ 661
     ✗ valid response structure
      ↳  99% — ✓ 13959 / ✗ 58

     checks.........................: 96.94% ✓ 41935     ✗ 1322 
     data_received..................: 70 MB  332 kB/s
     data_sent......................: 17 MB  82 kB/s
     http_req_blocked...............: avg=1.3ms    min=800ns    med=2.5µs  max=105.75ms p(90)=5.5µs   p(95)=2.72ms  
     http_req_connecting............: avg=1.24ms   min=0s       med=0s     max=80.01ms  p(90)=0s      p(95)=2.4ms   
     http_req_duration..............: avg=5.59s    min=619.1ms  med=2.77s  max=1m0s     p(90)=3.25s   p(95)=28.17s  
       { expected_response:true }...: avg=3.25s    min=619.1ms  med=2.76s  max=59.63s   p(90)=3.13s   p(95)=3.32s   
   ✓ http_req_failed................: 4.12%  ✓ 603       ✗ 14017
     http_req_receiving.............: avg=57µs     min=0s       med=54.8µs max=10.6ms   p(90)=78.1µs  p(95)=83.4µs  
     http_req_sending...............: avg=126.91µs min=6.5µs    med=15.5µs max=74.19ms  p(90)=32.51µs p(95)=261.11µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=5.59s    min=618.99ms med=2.77s  max=1m0s     p(90)=3.25s   p(95)=28.17s  
     http_reqs......................: 14620  68.859577/s
     iteration_duration.............: avg=5.6s     min=619.71ms med=2.77s  max=1m0s     p(90)=3.26s   p(95)=28.17s  
     iterations.....................: 14620  68.859577/s
     vus............................: 29     min=29      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b54fc69b-a0a4-458b-17f8-f40ab453a000/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9e4c82b1-6962-4d2e-ca65-64715cb3f500/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server-node16`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  80% — ✓ 10490 / ✗ 2613
     ✗ valid response structure
      ↳  80% — ✓ 10490 / ✗ 2613

     checks.........................: 86.70% ✓ 34083    ✗ 5226 
     data_received..................: 64 MB  316 kB/s
     data_sent......................: 16 MB  77 kB/s
     http_req_blocked...............: avg=1.85ms   min=900ns    med=2.1µs  max=103.8ms  p(90)=3.4µs   p(95)=12.58µs
     http_req_connecting............: avg=1.82ms   min=0s       med=0s     max=102.86ms p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=6.16s    min=424.2ms  med=4.59s  max=27.77s   p(90)=13.88s  p(95)=16.73s 
       { expected_response:true }...: avg=6.16s    min=424.2ms  med=4.59s  max=27.77s   p(90)=13.88s  p(95)=16.73s 
   ✓ http_req_failed................: 0.00%  ✓ 0        ✗ 13103
     http_req_receiving.............: avg=61.49µs  min=18.5µs   med=48.9µs max=24.33ms  p(90)=73.97µs p(95)=81.49µs
     http_req_sending...............: avg=269.11µs min=6.6µs    med=12.6µs max=29.87ms  p(90)=27.79µs p(95)=70.14µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=6.16s    min=424.16ms med=4.59s  max=27.77s   p(90)=13.88s  p(95)=16.73s 
     http_reqs......................: 13103  64.44667/s
     iteration_duration.............: avg=6.16s    min=424.7ms  med=4.59s  max=27.77s   p(90)=13.92s  p(95)=16.73s 
     iterations.....................: 13103  64.44667/s
     vus............................: 107    min=107    max=400
     vus_max........................: 400    min=400    max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7acdfb23-2a7c-4bfc-de1d-9b2455883300/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a0552d53-5daa-4ae9-03de-ede0624fcb00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  94% — ✓ 11899 / ✗ 645
     ✗ no graphql errors
      ↳  94% — ✓ 11847 / ✗ 697
     ✗ valid response structure
      ↳  99% — ✓ 11847 / ✗ 52

     checks.........................: 96.23% ✓ 35593     ✗ 1394 
     data_received..................: 61 MB  286 kB/s
     data_sent......................: 15 MB  70 kB/s
     http_req_blocked...............: avg=4ms     min=1.3µs    med=2.7µs  max=222.05ms p(90)=16.29µs p(95)=14.42ms
     http_req_connecting............: avg=3.89ms  min=0s       med=0s     max=222.02ms p(90)=0s      p(95)=12.59ms
     http_req_duration..............: avg=6.58s   min=404.07ms med=3.05s  max=1m0s     p(90)=3.8s    p(95)=59.86s 
       { expected_response:true }...: avg=3.69s   min=404.07ms med=3.03s  max=59.72s   p(90)=3.44s   p(95)=3.82s  
   ✓ http_req_failed................: 5.14%  ✓ 645       ✗ 11899
     http_req_receiving.............: avg=66.65µs min=0s       med=61.2µs max=25.69ms  p(90)=86.8µs  p(95)=93.3µs 
     http_req_sending...............: avg=1.61ms  min=9.4µs    med=16.1µs max=128.84ms p(90)=34.8µs  p(95)=1.39ms 
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s     max=0s       p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=6.58s   min=331.03ms med=3.05s  max=1m0s     p(90)=3.8s    p(95)=59.82s 
     http_reqs......................: 12544  58.565101/s
     iteration_duration.............: avg=6.59s   min=419.43ms med=3.05s  max=1m0s     p(90)=3.81s   p(95)=1m0s   
     iterations.....................: 12544  58.565101/s
     vus............................: 24     min=24      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/49f37d9e-d9c8-4756-4178-1611faf06b00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/142f2d5c-d023-4e08-f615-407ae8202500/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 32757     ✗ 0    
     data_received..................: 55 MB   272 kB/s
     data_sent......................: 13 MB   64 kB/s
     http_req_blocked...............: avg=3.06ms   min=1.6µs  med=3.8µs  max=191.46ms p(90)=5.9µs    p(95)=26.4µs  
     http_req_connecting............: avg=3ms      min=0s     med=0s     max=191.41ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=7.35s    min=1.07s  med=7.23s  max=19.36s   p(90)=7.65s    p(95)=7.91s   
       { expected_response:true }...: avg=7.35s    min=1.07s  med=7.23s  max=19.36s   p(90)=7.65s    p(95)=7.91s   
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 10919
     http_req_receiving.............: avg=98.39µs  min=31.1µs med=89.2µs max=6.27ms   p(90)=133.89µs p(95)=153.61µs
     http_req_sending...............: avg=861.68µs min=10.6µs med=24.1µs max=134.61ms p(90)=49.8µs   p(95)=120.71µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=7.35s    min=1.07s  med=7.23s  max=19.36s   p(90)=7.65s    p(95)=7.9s    
     http_reqs......................: 10919   53.990191/s
     iteration_duration.............: avg=7.36s    min=1.07s  med=7.24s  max=19.37s   p(90)=7.65s    p(95)=7.91s   
     iterations.....................: 10919   53.990191/s
     vus............................: 96      min=96      max=400
     vus_max........................: 400     min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/69a3ef6d-ab0e-4117-c248-439b71f87800/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ed0a3671-8ee8-495e-5ba8-0d62894a5300/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  96% — ✓ 10269 / ✗ 413
     ✗ no graphql errors
      ↳  87% — ✓ 9361 / ✗ 1321
     ✗ valid response structure
      ↳  91% — ✓ 9361 / ✗ 908

     checks.........................: 91.64% ✓ 28991     ✗ 2642 
     data_received..................: 62 MB  296 kB/s
     data_sent......................: 13 MB  61 kB/s
     http_req_blocked...............: avg=4.28ms  min=1.6µs med=2.8µs  max=281.52ms p(90)=22.9µs   p(95)=5.25ms  
     http_req_connecting............: avg=4.19ms  min=0s    med=0s     max=281.46ms p(90)=0s       p(95)=4.6ms   
     http_req_duration..............: avg=7.64s   min=1.73s med=5.08s  max=1m0s     p(90)=8.58s    p(95)=16.16s  
       { expected_response:true }...: avg=5.93s   min=1.73s med=5.05s  max=59.24s   p(90)=7.98s    p(95)=10.16s  
   ✓ http_req_failed................: 3.86%  ✓ 413       ✗ 10269
     http_req_receiving.............: avg=88.06µs min=0s    med=66.1µs max=22.87ms  p(90)=108.39µs p(95)=147.09µs
     http_req_sending...............: avg=3.56ms  min=9.6µs med=17.2µs max=190.77ms p(90)=59.3µs   p(95)=761.63µs
     http_req_tls_handshaking.......: avg=0s      min=0s    med=0s     max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=7.63s   min=1.73s med=5.08s  max=1m0s     p(90)=8.58s    p(95)=16.01s  
     http_reqs......................: 10682  50.957753/s
     iteration_duration.............: avg=7.64s   min=1.73s med=5.08s  max=1m0s     p(90)=8.58s    p(95)=16.27s  
     iterations.....................: 10682  50.957753/s
     vus............................: 55     min=55      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5318dd31-437a-4c03-1e85-75920e4c4a00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9fbed13d-f10d-4a8f-945b-1ae4741ccf00/public" alt="HTTP Overview" />


  </details>