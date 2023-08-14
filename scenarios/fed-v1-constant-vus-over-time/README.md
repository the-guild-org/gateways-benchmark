## Overview for: `scenarios/fed-v1-constant-vus-over-time`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. It's being executed with a constant amount of VUs over a fixed amount of time. It measure things like memory usage, CPU usage, average RPS. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was running 400 VUs over 200s


### Comparison


| Gateway                             | RPS ⬇️ |        Requests         |         Duration          |
| :---------------------------------- | :----: | :---------------------: | :-----------------------: |
| wundergraph                         |  458   |  91876 total, 0 failed  |  avg: 867ms, p95: 1228ms  |
| stitching-federation-with-yoga-bun  |  130   |  26199 total, 0 failed  | avg: 3059ms, p95: 4926ms  |
| mesh-supergraph                     |  120   |  24233 total, 0 failed  | avg: 3317ms, p95: 4190ms  |
| mesh                                |   99   |  20137 total, 0 failed  | avg: 3990ms, p95: 4991ms  |
| mercurius                           |   88   |  17874 total, 0 failed  | avg: 4491ms, p95: 5046ms  |
| stitching-federation-with-yoga-deno |   86   |  17559 total, 0 failed  | avg: 4586ms, p95: 5331ms  |
| stitching-federation-with-yoga-uws  |   86   |  17608 total, 0 failed  | avg: 4596ms, p95: 7495ms  |
| apollo-router                       |   81   |  16653 total, 0 failed  | avg: 4849ms, p95: 7316ms  |
| apollo-gateway-with-yoga-uws        |   52   |  10870 total, 0 failed  | avg: 7520ms, p95: 14943ms |
| stitching-federation-with-yoga      |   52   | 11291 total, 495 failed | avg: 7273ms, p95: 30984ms |
| apollo-gateway-with-yoga            |   49   | 10737 total, 693 failed | avg: 7748ms, p95: 59974ms |
| apollo-server                       |   43   | 9445 total, 633 failed  | avg: 8839ms, p95: 59965ms |
| apollo-server-node16                |   42   |  8687 total, 0 failed   | avg: 9274ms, p95: 22436ms |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 275628     ✗ 0    
     data_received..................: 458 MB  2.3 MB/s
     data_sent......................: 109 MB  544 kB/s
     http_req_blocked...............: avg=396.67µs min=1.5µs    med=2.9µs    max=308.86ms p(90)=5.2µs   p(95)=7.4µs   
     http_req_connecting............: avg=372.63µs min=0s       med=0s       max=175.06ms p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=867.22ms min=152.57ms med=844.96ms max=2.17s    p(90)=1.12s   p(95)=1.22s   
       { expected_response:true }...: avg=867.22ms min=152.57ms med=844.96ms max=2.17s    p(90)=1.12s   p(95)=1.22s   
   ✓ http_req_failed................: 0.00%   ✓ 0          ✗ 91876
     http_req_receiving.............: avg=5.62ms   min=21.9µs   med=53.2µs   max=682.71ms p(90)=315.2µs p(95)=8.65ms  
     http_req_sending...............: avg=1.24ms   min=9.29µs   med=16.7µs   max=581.59ms p(90)=52.5µs  p(95)=168.89µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=860.35ms min=152.5ms  med=840.44ms max=1.97s    p(90)=1.11s   p(95)=1.21s   
     http_reqs......................: 91876   458.034728/s
     iteration_duration.............: avg=871.9ms  min=158.04ms med=848.6ms  max=2.32s    p(90)=1.13s   p(95)=1.23s   
     iterations.....................: 91876   458.034728/s
     vus............................: 400     min=400      max=400
     vus_max........................: 400     min=400      max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c3e6c0c2-b014-4c07-c4ff-022b314d8800/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c0f02be8-4ec1-43e0-69bd-9037c41f5800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 78597      ✗ 0    
     data_received..................: 131 MB  650 kB/s
     data_sent......................: 31 MB   155 kB/s
     http_req_blocked...............: avg=499.17µs min=1µs      med=2.1µs  max=53.94ms p(90)=3.2µs  p(95)=5.5µs   
     http_req_connecting............: avg=490.43µs min=0s       med=0s     max=53.73ms p(90)=0s     p(95)=0s      
     http_req_duration..............: avg=3.05s    min=940.68ms med=2.93s  max=7.52s   p(90)=3.34s  p(95)=4.92s   
       { expected_response:true }...: avg=3.05s    min=940.68ms med=2.93s  max=7.52s   p(90)=3.34s  p(95)=4.92s   
   ✓ http_req_failed................: 0.00%   ✓ 0          ✗ 26199
     http_req_receiving.............: avg=724.82µs min=18.1µs   med=33.9µs max=157.7ms p(90)=61.8µs p(95)=173.45µs
     http_req_sending...............: avg=233.82µs min=6.2µs    med=11.6µs max=93.9ms  p(90)=27.2µs p(95)=107.61µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=3.05s    min=938.75ms med=2.93s  max=7.52s   p(90)=3.34s  p(95)=4.92s   
     http_reqs......................: 26199   130.477053/s
     iteration_duration.............: avg=3.06s    min=986.37ms med=2.93s  max=7.53s   p(90)=3.34s  p(95)=4.94s   
     iterations.....................: 26199   130.477053/s
     vus............................: 400     min=400      max=400
     vus_max........................: 400     min=400      max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1947365f-73f0-4a4d-0fbb-98412cd90200/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e44b49b2-7e85-4c5e-0fda-774c88a01e00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 24214 / ✗ 19
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 24233

     checks.........................: 66.64% ✓ 48447      ✗ 24252
     data_received..................: 122 MB 605 kB/s
     data_sent......................: 29 MB  143 kB/s
     http_req_blocked...............: avg=797.63µs min=900ns  med=2µs     max=116.43ms p(90)=2.9µs   p(95)=3.4µs  
     http_req_connecting............: avg=783.07µs min=0s     med=0s      max=116.04ms p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=3.31s    min=1.66s  med=3.21s   max=8.35s    p(90)=3.8s    p(95)=4.18s  
       { expected_response:true }...: avg=3.31s    min=1.66s  med=3.21s   max=8.35s    p(90)=3.8s    p(95)=4.18s  
   ✓ http_req_failed................: 0.00%  ✓ 0          ✗ 24233
     http_req_receiving.............: avg=51.51µs  min=14.9µs med=38.29µs max=30.71ms  p(90)=62.18µs p(95)=71.54µs
     http_req_sending...............: avg=168.96µs min=6.3µs  med=12µs    max=116.08ms p(90)=21.7µs  p(95)=27.3µs 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s       p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=3.31s    min=1.66s  med=3.21s   max=8.35s    p(90)=3.8s    p(95)=4.18s  
     http_reqs......................: 24233  120.117577/s
     iteration_duration.............: avg=3.31s    min=1.66s  med=3.21s   max=8.36s    p(90)=3.8s    p(95)=4.19s  
     iterations.....................: 24233  120.117577/s
     vus............................: 303    min=303      max=400
     vus_max........................: 400    min=400      max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7e5e3162-4fbf-4f2a-bc4c-e779c635c500/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0cc4ee98-b654-498e-eb7e-c7f73562e400/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 20055 / ✗ 82
     ✗ valid response structure
      ↳  99% — ✓ 20055 / ✗ 82

     checks.........................: 99.72% ✓ 60247     ✗ 164  
     data_received..................: 103 MB 510 kB/s
     data_sent......................: 24 MB  119 kB/s
     http_req_blocked...............: avg=611.15µs min=1.2µs  med=2.2µs  max=98.02ms p(90)=3.4µs   p(95)=4.3µs 
     http_req_connecting............: avg=598.14µs min=0s     med=0s     max=97.98ms p(90)=0s      p(95)=0s    
     http_req_duration..............: avg=3.99s    min=1.77s  med=3.88s  max=9.54s   p(90)=4.49s   p(95)=4.99s 
       { expected_response:true }...: avg=3.99s    min=1.77s  med=3.88s  max=9.54s   p(90)=4.49s   p(95)=4.99s 
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 20137
     http_req_receiving.............: avg=69.22µs  min=19.9µs med=45.3µs max=55.3ms  p(90)=68.09µs p(95)=77.3µs
     http_req_sending...............: avg=109µs    min=6.9µs  med=12µs   max=53.78ms p(90)=25.6µs  p(95)=30µs  
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s      p(95)=0s    
     http_req_waiting...............: avg=3.98s    min=1.77s  med=3.88s  max=9.54s   p(90)=4.49s   p(95)=4.99s 
     http_reqs......................: 20137  99.858376/s
     iteration_duration.............: avg=3.99s    min=1.77s  med=3.88s  max=9.57s   p(90)=4.49s   p(95)=4.99s 
     iterations.....................: 20137  99.858376/s
     vus............................: 286    min=286     max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/dc1bf27d-83be-47f7-1e05-81b70b86f900/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a9e5fb4b-d8e7-425f-4e90-e709b0850d00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 53622     ✗ 0    
     data_received..................: 90 MB   446 kB/s
     data_sent......................: 21 MB   105 kB/s
     http_req_blocked...............: avg=965.77µs min=1.1µs  med=2.4µs  max=84.22ms p(90)=3.4µs  p(95)=12.3µs 
     http_req_connecting............: avg=952.03µs min=0s     med=0s     max=84.18ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=4.49s    min=1.39s  med=4.43s  max=9.03s   p(90)=4.7s   p(95)=5.04s  
       { expected_response:true }...: avg=4.49s    min=1.39s  med=4.43s  max=9.03s   p(90)=4.7s   p(95)=5.04s  
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 17874
     http_req_receiving.............: avg=60.38µs  min=17.8µs med=52.6µs max=30.9ms  p(90)=75.6µs p(95)=81.1µs 
     http_req_sending...............: avg=248.94µs min=5.5µs  med=14.8µs max=35.62ms p(90)=29.2µs p(95)=39.93µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=4.49s    min=1.39s  med=4.43s  max=9.03s   p(90)=4.7s   p(95)=5.04s  
     http_reqs......................: 17874   88.749007/s
     iteration_duration.............: avg=4.49s    min=1.4s   med=4.43s  max=9.1s    p(90)=4.7s   p(95)=5.04s  
     iterations.....................: 17874   88.749007/s
     vus............................: 226     min=226     max=400
     vus_max........................: 400     min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/54a095aa-ff4a-4926-1fcb-f2e305721f00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/18b66b10-c799-41f7-c9bf-b5806222e900/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-deno`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 17529 / ✗ 30
     ✗ valid response structure
      ↳  99% — ✓ 17529 / ✗ 30

     checks.........................: 99.88% ✓ 52617     ✗ 60   
     data_received..................: 88 MB  437 kB/s
     data_sent......................: 21 MB  103 kB/s
     http_req_blocked...............: avg=924.17µs min=1µs    med=2.29µs max=69.79ms p(90)=3.72µs p(95)=5.6µs   
     http_req_connecting............: avg=904.53µs min=0s     med=0s     max=61.51ms p(90)=0s     p(95)=0s      
     http_req_duration..............: avg=4.58s    min=2.27s  med=4.53s  max=8s      p(90)=4.85s  p(95)=5.33s   
       { expected_response:true }...: avg=4.58s    min=2.27s  med=4.53s  max=8s      p(90)=4.85s  p(95)=5.33s   
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 17559
     http_req_receiving.............: avg=114.21µs min=17.2µs med=33.8µs max=43.49ms p(90)=83.1µs p(95)=111.7µs 
     http_req_sending...............: avg=205.17µs min=6.3µs  med=12.9µs max=76.67ms p(90)=29.5µs p(95)=107.11µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=4.58s    min=2.27s  med=4.53s  max=8s      p(90)=4.85s  p(95)=5.32s   
     http_reqs......................: 17559  86.835738/s
     iteration_duration.............: avg=4.58s    min=2.27s  med=4.53s  max=8.06s   p(90)=4.86s  p(95)=5.33s   
     iterations.....................: 17559  86.835738/s
     vus............................: 181    min=181     max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f69a2341-5a1d-47db-6d62-7c87561c9c00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/04068cf1-b4ec-4889-436b-e963e30a5400/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-uws`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  98% — ✓ 17357 / ✗ 251
     ✗ valid response structure
      ↳  98% — ✓ 17357 / ✗ 251

     checks.........................: 99.04% ✓ 52322     ✗ 502  
     data_received..................: 93 MB  455 kB/s
     data_sent......................: 21 MB  103 kB/s
     http_req_blocked...............: avg=813.58µs min=900ns   med=2µs     max=66.66ms p(90)=3.3µs   p(95)=5.2µs  
     http_req_connecting............: avg=804.81µs min=0s      med=0s      max=66.53ms p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=4.59s    min=2.19s   med=3.99s   max=10.41s  p(90)=6.58s   p(95)=7.49s  
       { expected_response:true }...: avg=4.59s    min=2.19s   med=3.99s   max=10.41s  p(90)=6.58s   p(95)=7.49s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 17608
     http_req_receiving.............: avg=58.02µs  min=17.39µs med=41µs    max=29.82ms p(90)=70.22µs p(95)=81.69µs
     http_req_sending...............: avg=149.46µs min=6.3µs   med=11.99µs max=87.2ms  p(90)=26.6µs  p(95)=35.56µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s      p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=4.59s    min=2.19s   med=3.99s   max=10.41s  p(90)=6.58s   p(95)=7.49s  
     http_reqs......................: 17608  86.370209/s
     iteration_duration.............: avg=4.59s    min=2.19s   med=3.99s   max=10.41s  p(90)=6.59s   p(95)=7.49s  
     iterations.....................: 17608  86.370209/s
     vus............................: 5      min=5       max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6832de78-30ac-4152-8db6-f43a4f76f700/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/18c3bbb8-69e8-4fe8-e091-905282cfee00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 16573 / ✗ 80
     ✗ valid response structure
      ↳  99% — ✓ 16573 / ✗ 80

     checks.........................: 99.67% ✓ 49799     ✗ 160  
     data_received..................: 83 MB  407 kB/s
     data_sent......................: 20 MB  97 kB/s
     http_req_blocked...............: avg=1.51ms   min=1.3µs  med=2.6µs  max=137.75ms p(90)=4.5µs   p(95)=19.4µs  
     http_req_connecting............: avg=1.49ms   min=0s     med=0s     max=137.68ms p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=4.84s    min=2.1s   med=4.58s  max=11.82s   p(90)=6.43s   p(95)=7.31s   
       { expected_response:true }...: avg=4.84s    min=2.1s   med=4.58s  max=11.82s   p(90)=6.43s   p(95)=7.31s   
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 16653
     http_req_receiving.............: avg=247.23µs min=23.3µs med=55.7µs max=99.25ms  p(90)=108.3µs p(95)=144.53µs
     http_req_sending...............: avg=550.28µs min=8.2µs  med=15.6µs max=136.21ms p(90)=44.7µs  p(95)=116.19µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=4.84s    min=2.1s   med=4.58s  max=11.79s   p(90)=6.43s   p(95)=7.31s   
     http_reqs......................: 16653  81.770459/s
     iteration_duration.............: avg=4.85s    min=2.1s   med=4.58s  max=11.91s   p(90)=6.43s   p(95)=7.33s   
     iterations.....................: 16653  81.770459/s
     vus............................: 12     min=12      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/05184556-0134-4f7c-eacc-e95d67e30400/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/43e94601-8425-4739-769d-597ca007af00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga-uws`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  75% — ✓ 8241 / ✗ 2629
     ✗ valid response structure
      ↳  75% — ✓ 8241 / ✗ 2629

     checks.........................: 83.87% ✓ 27352     ✗ 5258 
     data_received..................: 50 MB  241 kB/s
     data_sent......................: 13 MB  63 kB/s
     http_req_blocked...............: avg=2.27ms   min=1.3µs    med=2.7µs  max=110.13ms p(90)=4.4µs   p(95)=18.4µs  
     http_req_connecting............: avg=2.23ms   min=0s       med=0s     max=97.43ms  p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=7.52s    min=944.23ms med=7s     max=23.46s   p(90)=13.33s  p(95)=14.94s  
       { expected_response:true }...: avg=7.52s    min=944.23ms med=7s     max=23.46s   p(90)=13.33s  p(95)=14.94s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 10870
     http_req_receiving.............: avg=77.69µs  min=19.2µs   med=55.4µs max=28.12ms  p(90)=82.71µs p(95)=96.56µs 
     http_req_sending...............: avg=287.36µs min=7.7µs    med=15.3µs max=88.38ms  p(90)=35.3µs  p(95)=197.51µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=7.51s    min=944.13ms med=7s     max=23.46s   p(90)=13.32s  p(95)=14.94s  
     http_reqs......................: 10870  52.739147/s
     iteration_duration.............: avg=7.52s    min=945.1ms  med=7s     max=23.46s   p(90)=13.37s  p(95)=14.94s  
     iterations.....................: 10870  52.739147/s
     vus............................: 147    min=147     max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0dac2118-fd40-44b7-00ef-9cf512a37100/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d49b9489-7569-435a-1eed-a1b450da7e00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  95% — ✓ 10796 / ✗ 495
     ✗ no graphql errors
      ↳  91% — ✓ 10361 / ✗ 930
     ✗ valid response structure
      ↳  95% — ✓ 10361 / ✗ 435

     checks.........................: 94.42% ✓ 31518     ✗ 1860 
     data_received..................: 58 MB  271 kB/s
     data_sent......................: 13 MB  62 kB/s
     http_req_blocked...............: avg=2.92ms   min=1.4µs med=2.9µs  max=137.4ms p(90)=23.2µs  p(95)=7.28ms 
     http_req_connecting............: avg=2.84ms   min=0s    med=0s     max=129.5ms p(90)=0s      p(95)=6.21ms 
     http_req_duration..............: avg=7.27s    min=2.76s med=4.12s  max=1m0s    p(90)=6.39s   p(95)=30.98s 
       { expected_response:true }...: avg=4.85s    min=2.76s med=4.11s  max=59.28s  p(90)=5.51s   p(95)=6.69s  
   ✓ http_req_failed................: 4.38%  ✓ 495       ✗ 10796
     http_req_receiving.............: avg=95.02µs  min=0s    med=69.5µs max=45.61ms p(90)=117.8µs p(95)=158.8µs
     http_req_sending...............: avg=483.39µs min=9.1µs med=18.5µs max=51.21ms p(90)=74.7µs  p(95)=947.7µs
     http_req_tls_handshaking.......: avg=0s       min=0s    med=0s     max=0s      p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=7.27s    min=2.76s med=4.12s  max=1m0s    p(90)=6.39s   p(95)=30.98s 
     http_reqs......................: 11291  52.538948/s
     iteration_duration.............: avg=7.28s    min=2.76s med=4.12s  max=1m0s    p(90)=6.39s   p(95)=30.99s 
     iterations.....................: 11291  52.538948/s
     vus............................: 23     min=23      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/844c8875-afaf-4f55-b79e-b69ff8fd9900/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ccf55b12-77bb-47ac-5656-6403b4daf500/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  93% — ✓ 10044 / ✗ 693
     ✗ no graphql errors
      ↳  92% — ✓ 9969 / ✗ 768
     ✗ valid response structure
      ↳  99% — ✓ 9969 / ✗ 75

     checks.........................: 95.12% ✓ 29982     ✗ 1536 
     data_received..................: 50 MB  234 kB/s
     data_sent......................: 13 MB  59 kB/s
     http_req_blocked...............: avg=3.11ms   min=1.6µs    med=3.2µs  max=212.25ms p(90)=155.47µs p(95)=9.15ms  
     http_req_connecting............: avg=3.04ms   min=0s       med=0s     max=202.57ms p(90)=88.88µs  p(95)=8.1ms   
     http_req_duration..............: avg=7.74s    min=997.19ms med=3.31s  max=1m0s     p(90)=5.36s    p(95)=59.97s  
       { expected_response:true }...: avg=4.14s    min=997.19ms med=3.28s  max=59.6s    p(90)=3.88s    p(95)=4.48s   
   ✓ http_req_failed................: 6.45%  ✓ 693       ✗ 10044
     http_req_receiving.............: avg=70.67µs  min=0s       med=67.6µs max=5.65ms   p(90)=96.7µs   p(95)=109.92µs
     http_req_sending...............: avg=547.39µs min=8.5µs    med=19µs   max=187.2ms  p(90)=77.96µs  p(95)=467.77µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=7.74s    min=997.1ms  med=3.31s  max=1m0s     p(90)=5.35s    p(95)=59.97s  
     http_reqs......................: 10737  49.824782/s
     iteration_duration.............: avg=7.75s    min=998.02ms med=3.31s  max=1m0s     p(90)=5.37s    p(95)=1m0s    
     iterations.....................: 10737  49.824782/s
     vus............................: 43     min=43      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/59127133-9c11-411f-da73-8cd5badc1400/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c737ec13-347b-487b-86bf-2a1d27a71000/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  93% — ✓ 8812 / ✗ 633
     ✗ no graphql errors
      ↳  90% — ✓ 8574 / ✗ 871
     ✗ valid response structure
      ↳  97% — ✓ 8574 / ✗ 238

     checks.........................: 93.71% ✓ 25960     ✗ 1742 
     data_received..................: 45 MB  207 kB/s
     data_sent......................: 11 MB  52 kB/s
     http_req_blocked...............: avg=3.58ms   min=1.5µs med=2.8µs  max=114.45ms p(90)=554.02µs p(95)=26.77ms 
     http_req_connecting............: avg=3.45ms   min=0s    med=0s     max=106.48ms p(90)=424.88µs p(95)=20.94ms 
     http_req_duration..............: avg=8.83s    min=1.77s med=4.23s  max=1m0s     p(90)=6.76s    p(95)=59.96s  
       { expected_response:true }...: avg=5.16s    min=1.77s med=4.2s   max=57.67s   p(90)=4.96s    p(95)=5.7s    
   ✓ http_req_failed................: 6.70%  ✓ 633       ✗ 8812 
     http_req_receiving.............: avg=81.19µs  min=0s    med=69.7µs max=11.09ms  p(90)=112.8µs  p(95)=138.38µs
     http_req_sending...............: avg=851.88µs min=8.2µs med=17.7µs max=88.79ms  p(90)=105.42µs p(95)=1.18ms  
     http_req_tls_handshaking.......: avg=0s       min=0s    med=0s     max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=8.83s    min=1.77s med=4.23s  max=1m0s     p(90)=6.76s    p(95)=59.96s  
     http_reqs......................: 9445   43.384577/s
     iteration_duration.............: avg=8.84s    min=1.77s med=4.23s  max=1m0s     p(90)=6.76s    p(95)=1m0s    
     iterations.....................: 9445   43.384577/s
     vus............................: 43     min=43      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6201b4bd-586c-4021-4ebb-b5e1e5d80a00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/badccab9-3806-45d2-f436-d238ebdc6700/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server-node16`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  63% — ✓ 5523 / ✗ 3164
     ✗ valid response structure
      ↳  63% — ✓ 5523 / ✗ 3164

     checks.........................: 75.71% ✓ 19733    ✗ 6328 
     data_received..................: 40 MB  195 kB/s
     data_sent......................: 10 MB  51 kB/s
     http_req_blocked...............: avg=2.4ms    min=1.3µs    med=2.6µs  max=116.15ms p(90)=4.3µs  p(95)=44.67µs 
     http_req_connecting............: avg=2.37ms   min=0s       med=0s     max=116.1ms  p(90)=0s     p(95)=0s      
     http_req_duration..............: avg=9.27s    min=764.54ms med=7.41s  max=29.39s   p(90)=19.49s p(95)=22.43s  
       { expected_response:true }...: avg=9.27s    min=764.54ms med=7.41s  max=29.39s   p(90)=19.49s p(95)=22.43s  
   ✓ http_req_failed................: 0.00%  ✓ 0        ✗ 8687 
     http_req_receiving.............: avg=71.33µs  min=27.6µs   med=58.8µs max=13.78ms  p(90)=93µs   p(95)=108.5µs 
     http_req_sending...............: avg=423.16µs min=10.3µs   med=15.4µs max=72.53ms  p(90)=44µs   p(95)=500.89µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=9.27s    min=764.45ms med=7.41s  max=29.39s   p(90)=19.49s p(95)=22.43s  
     http_reqs......................: 8687   42.82452/s
     iteration_duration.............: avg=9.27s    min=765.25ms med=7.41s  max=29.39s   p(90)=19.49s p(95)=22.43s  
     iterations.....................: 8687   42.82452/s
     vus............................: 14     min=14     max=400
     vus_max........................: 400    min=400    max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/872831fa-c7ef-4cb5-0475-c44a8b36b200/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9e0b7c33-18bb-4a1e-96ff-a9681f1e9700/public" alt="HTTP Overview" />


  </details>