## Overview for: `scenarios/fed-v1-constant-vus-over-time`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. It's being executed with a constant amount of VUs over a fixed amount of time. It measure things like memory usage, CPU usage, average RPS. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was running 400 VUs over 200s


### Comparison


| Gateway                             | RPS ⬇️ |        Requests         |         Duration          |
| :---------------------------------- | :----: | :---------------------: | :-----------------------: |
| mesh-bun                            |  820   | 164385 total, 0 failed  |  avg: 486ms, p95: 778ms   |
| wundergraph                         |  742   | 148903 total, 0 failed  |  avg: 533ms, p95: 757ms   |
| stitching-federation-with-yoga-bun  |  132   |  26743 total, 0 failed  | avg: 3011ms, p95: 4918ms  |
| mesh                                |   95   |  19196 total, 0 failed  | avg: 4187ms, p95: 5269ms  |
| mesh-supergraph                     |   89   |  18240 total, 0 failed  | avg: 4427ms, p95: 5671ms  |
| stitching-federation-with-yoga-uws  |   80   |  16405 total, 0 failed  | avg: 4919ms, p95: 7871ms  |
| apollo-router                       |   73   |  14968 total, 0 failed  | avg: 5369ms, p95: 8467ms  |
| apollo-gateway-with-yoga-bun        |   69   |  14199 total, 0 failed  | avg: 5707ms, p95: 9809ms  |
| apollo-server                       |   65   | 13490 total, 160 failed | avg: 6013ms, p95: 8308ms  |
| apollo-server-node16                |   64   |  13186 total, 0 failed  | avg: 6116ms, p95: 17061ms |
| stitching-federation-with-yoga-deno |   58   |  11876 total, 0 failed  | avg: 6797ms, p95: 7997ms  |
| apollo-gateway-with-yoga-uws        |   54   |  11114 total, 0 failed  | avg: 7271ms, p95: 17482ms |
| mercurius                           |   54   |  11088 total, 0 failed  | avg: 7245ms, p95: 8487ms  |
| stitching-federation-with-yoga      |   54   | 11237 total, 267 failed | avg: 7226ms, p95: 10357ms |
| apollo-gateway-with-yoga            |   52   |  10680 total, 0 failed  | avg: 7526ms, p95: 17607ms |



<details>
  <summary>Summary for: `mesh-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  0% — ✓ 0 / ✗ 164385
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 164385

     checks.........................: 33.33% ✓ 164385     ✗ 328770
     data_received..................: 156 MB 781 kB/s
     data_sent......................: 195 MB 974 kB/s
     http_req_blocked...............: avg=82.26µs  min=700ns    med=1.4µs    max=61.74ms  p(90)=2.1µs    p(95)=2.6µs   
     http_req_connecting............: avg=77.41µs  min=0s       med=0s       max=61.7ms   p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=486.42ms min=170.74ms med=451.93ms max=1.41s    p(90)=723.28ms p(95)=778.08ms
       { expected_response:true }...: avg=486.42ms min=170.74ms med=451.93ms max=1.41s    p(90)=723.28ms p(95)=778.08ms
   ✓ http_req_failed................: 0.00%  ✓ 0          ✗ 164385
     http_req_receiving.............: avg=313.96µs min=10.5µs   med=17.5µs   max=176.49ms p(90)=57.3µs   p(95)=193.19µs
     http_req_sending...............: avg=115.12µs min=5.6µs    med=8.69µs   max=199.17ms p(90)=43.5µs   p(95)=137.97µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=485.99ms min=170.64ms med=451.53ms max=1.41s    p(90)=722.87ms p(95)=777.43ms
     http_reqs......................: 164385 820.826783/s
     iteration_duration.............: avg=486.93ms min=171.49ms med=452.34ms max=1.44s    p(90)=724.02ms p(95)=778.81ms
     iterations.....................: 164385 820.826783/s
     vus............................: 400    min=400      max=400 
     vus_max........................: 400    min=400      max=400 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/976efd0d-7ec2-4302-0f10-3386c88e0100/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f491fa2b-0a91-48b1-313e-0b18166ed600/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 446709     ✗ 0     
     data_received..................: 742 MB  3.7 MB/s
     data_sent......................: 177 MB  882 kB/s
     http_req_blocked...............: avg=167.65µs min=1.1µs    med=2.2µs    max=478.24ms p(90)=3.5µs    p(95)=4.2µs   
     http_req_connecting............: avg=156.19µs min=0s       med=0s       max=478.16ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=533.43ms min=114.8ms  med=517.06ms max=1.45s    p(90)=699.84ms p(95)=757.15ms
       { expected_response:true }...: avg=533.43ms min=114.8ms  med=517.06ms max=1.45s    p(90)=699.84ms p(95)=757.15ms
   ✓ http_req_failed................: 0.00%   ✓ 0          ✗ 148903
     http_req_receiving.............: avg=5.72ms   min=14.8µs   med=35.8µs   max=476.43ms p(90)=390.46µs p(95)=22.59ms 
     http_req_sending...............: avg=800.91µs min=6.8µs    med=11.9µs   max=382.29ms p(90)=24.29µs  p(95)=110.6µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=526.91ms min=114.74ms med=514.02ms max=1.45s    p(90)=684.61ms p(95)=734.81ms
     http_reqs......................: 148903  742.666825/s
     iteration_duration.............: avg=537.68ms min=132.93ms med=520.8ms  max=1.45s    p(90)=705.3ms  p(95)=764.28ms
     iterations.....................: 148903  742.666825/s
     vus............................: 400     min=400      max=400 
     vus_max........................: 400     min=400      max=400 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8444e58a-533e-45b7-8ddc-ac3a6f289e00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1abbcb58-fe3d-4030-2310-3b9868f61500/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 80229      ✗ 0    
     data_received..................: 133 MB  660 kB/s
     data_sent......................: 32 MB   157 kB/s
     http_req_blocked...............: avg=389.87µs min=1µs    med=2.2µs  max=56.95ms  p(90)=3.7µs    p(95)=7.2µs   
     http_req_connecting............: avg=380.88µs min=0s     med=0s     max=56.51ms  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=3.01s    min=1.64s  med=2.86s  max=12.37s   p(90)=3.52s    p(95)=4.91s   
       { expected_response:true }...: avg=3.01s    min=1.64s  med=2.86s  max=12.37s   p(90)=3.52s    p(95)=4.91s   
   ✓ http_req_failed................: 0.00%   ✓ 0          ✗ 26743
     http_req_receiving.............: avg=2.63ms   min=15.7µs med=38.6µs max=206ms    p(90)=113.98µs p(95)=642.04µs
     http_req_sending...............: avg=521.78µs min=6.4µs  med=12.3µs max=309.11ms p(90)=45.4µs   p(95)=179.14µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=3s       min=1.64s  med=2.86s  max=12.36s   p(90)=3.52s    p(95)=4.91s   
     http_reqs......................: 26743   132.487229/s
     iteration_duration.............: avg=3.01s    min=1.64s  med=2.87s  max=12.38s   p(90)=3.52s    p(95)=4.91s   
     iterations.....................: 26743   132.487229/s
     vus............................: 30      min=30       max=400
     vus_max........................: 400     min=400      max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b8b4e26a-a2a0-4764-0c50-f37b5ce04a00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c2822aa7-e0bf-4e10-4a45-3ab65b01bd00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 19114 / ✗ 82
     ✗ valid response structure
      ↳  99% — ✓ 19114 / ✗ 82

     checks.........................: 99.71% ✓ 57424     ✗ 164  
     data_received..................: 97 MB  478 kB/s
     data_sent......................: 23 MB  113 kB/s
     http_req_blocked...............: avg=1.2ms    min=1.3µs  med=2.4µs  max=117.52ms p(90)=4µs     p(95)=6µs    
     http_req_connecting............: avg=1.18ms   min=0s     med=0s     max=117.44ms p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=4.18s    min=1.48s  med=4.09s  max=8.42s    p(90)=4.92s   p(95)=5.26s  
       { expected_response:true }...: avg=4.18s    min=1.48s  med=4.09s  max=8.42s    p(90)=4.92s   p(95)=5.26s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 19196
     http_req_receiving.............: avg=79.73µs  min=22.3µs med=51.8µs max=54.07ms  p(90)=75.9µs  p(95)=87.32µs
     http_req_sending...............: avg=420.11µs min=8.4µs  med=13.5µs max=97.38ms  p(90)=27.79µs p(95)=36.3µs 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=4.18s    min=1.48s  med=4.09s  max=8.42s    p(90)=4.92s   p(95)=5.26s  
     http_reqs......................: 19196  95.126259/s
     iteration_duration.............: avg=4.18s    min=1.49s  med=4.09s  max=8.46s    p(90)=4.92s   p(95)=5.27s  
     iterations.....................: 19196  95.126259/s
     vus............................: 20     min=20      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3a851c24-e236-4f1c-fb4d-80e850a7f700/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/bc1ff1ca-0aef-4e99-6e58-a5a5673de200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 18137 / ✗ 103
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 18240

     checks.........................: 66.47% ✓ 36377    ✗ 18343
     data_received..................: 92 MB  454 kB/s
     data_sent......................: 22 MB  107 kB/s
     http_req_blocked...............: avg=1.58ms   min=1.4µs  med=2.4µs  max=137.47ms p(90)=3.5µs  p(95)=4.7µs 
     http_req_connecting............: avg=1.56ms   min=0s     med=0s     max=131.8ms  p(90)=0s     p(95)=0s    
     http_req_duration..............: avg=4.42s    min=2.52s  med=4.31s  max=9.8s     p(90)=5.01s  p(95)=5.67s 
       { expected_response:true }...: avg=4.42s    min=2.52s  med=4.31s  max=9.8s     p(90)=5.01s  p(95)=5.67s 
   ✓ http_req_failed................: 0.00%  ✓ 0        ✗ 18240
     http_req_receiving.............: avg=65.51µs  min=22.7µs med=54.6µs max=43.26ms  p(90)=77.7µs p(95)=86.7µs
     http_req_sending...............: avg=373.08µs min=8µs    med=14µs   max=50.99ms  p(90)=28.5µs p(95)=34µs  
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s     p(95)=0s    
     http_req_waiting...............: avg=4.42s    min=2.52s  med=4.31s  max=9.79s    p(90)=5.01s  p(95)=5.67s 
     http_reqs......................: 18240  89.98103/s
     iteration_duration.............: avg=4.42s    min=2.52s  med=4.31s  max=9.86s    p(90)=5.01s  p(95)=5.67s 
     iterations.....................: 18240  89.98103/s
     vus............................: 279    min=279    max=400
     vus_max........................: 400    min=400    max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/dbe8ebd0-9e32-4217-bf42-07d514b55600/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/84c4f8d3-a04a-440b-764d-0bc8fdbf6600/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-uws`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  95% — ✓ 15592 / ✗ 813
     ✗ valid response structure
      ↳  95% — ✓ 15592 / ✗ 813

     checks.........................: 96.69% ✓ 47589    ✗ 1626 
     data_received..................: 95 MB  467 kB/s
     data_sent......................: 20 MB  96 kB/s
     http_req_blocked...............: avg=1.49ms   min=1.3µs  med=2.5µs  max=138.03ms p(90)=4.5µs  p(95)=15.5µs 
     http_req_connecting............: avg=1.47ms   min=0s     med=0s     max=138.01ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=4.91s    min=2.04s  med=4.28s  max=12.86s   p(90)=7.13s  p(95)=7.87s  
       { expected_response:true }...: avg=4.91s    min=2.04s  med=4.28s  max=12.86s   p(90)=7.13s  p(95)=7.87s  
   ✓ http_req_failed................: 0.00%  ✓ 0        ✗ 16405
     http_req_receiving.............: avg=79.35µs  min=23.2µs med=51.8µs max=44.96ms  p(90)=83.6µs p(95)=100µs  
     http_req_sending...............: avg=612.03µs min=6.7µs  med=13.8µs max=61.19ms  p(90)=29.8µs p(95)=82.56µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=4.91s    min=2.04s  med=4.28s  max=12.86s   p(90)=7.13s  p(95)=7.87s  
     http_reqs......................: 16405  80.91189/s
     iteration_duration.............: avg=4.92s    min=2.04s  med=4.28s  max=12.87s   p(90)=7.13s  p(95)=7.88s  
     iterations.....................: 16405  80.91189/s
     vus............................: 224    min=224    max=400
     vus_max........................: 400    min=400    max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/dc5eb1a9-2410-4018-71f8-cf2106b68200/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/24de0eec-f56f-4f57-b11f-4229d6827c00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 14916 / ✗ 52
     ✗ valid response structure
      ↳  99% — ✓ 14916 / ✗ 52

     checks.........................: 99.76% ✓ 44800     ✗ 104  
     data_received..................: 75 MB  368 kB/s
     data_sent......................: 18 MB  88 kB/s
     http_req_blocked...............: avg=152.23µs min=1.4µs  med=3.2µs  max=23.59ms  p(90)=5.2µs   p(95)=21.5µs  
     http_req_connecting............: avg=139.63µs min=0s     med=0s     max=21.12ms  p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=5.36s    min=2.29s  med=5.04s  max=12.5s    p(90)=7.04s   p(95)=8.46s   
       { expected_response:true }...: avg=5.36s    min=2.29s  med=5.04s  max=12.5s    p(90)=7.04s   p(95)=8.46s   
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 14968
     http_req_receiving.............: avg=133.01µs min=26.4µs med=72µs   max=83.48ms  p(90)=120.1µs p(95)=149.62µs
     http_req_sending...............: avg=136.17µs min=8.8µs  med=20.4µs max=100.14ms p(90)=47.69µs p(95)=109.49µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=5.36s    min=2.29s  med=5.04s  max=12.5s    p(90)=7.04s   p(95)=8.46s   
     http_reqs......................: 14968  73.949905/s
     iteration_duration.............: avg=5.37s    min=2.29s  med=5.04s  max=12.51s   p(90)=7.04s   p(95)=8.46s   
     iterations.....................: 14968  73.949905/s
     vus............................: 122    min=122     max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d57e1fdf-43a1-4a48-f605-3994a789f200/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7d0a2f0c-3f87-48dc-4843-58dd102e9a00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 14176 / ✗ 23
     ✗ valid response structure
      ↳  99% — ✓ 14176 / ✗ 23

     checks.........................: 99.89% ✓ 42551    ✗ 46   
     data_received..................: 71 MB  346 kB/s
     data_sent......................: 17 MB  83 kB/s
     http_req_blocked...............: avg=2.24ms   min=1.2µs  med=2.6µs  max=203.21ms p(90)=4.2µs   p(95)=11.21µs 
     http_req_connecting............: avg=2.2ms    min=0s     med=0s     max=159.67ms p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=5.7s     min=2.41s  med=5.18s  max=14.96s   p(90)=9s      p(95)=9.8s    
       { expected_response:true }...: avg=5.7s     min=2.41s  med=5.18s  max=14.96s   p(90)=9s      p(95)=9.8s    
   ✓ http_req_failed................: 0.00%  ✓ 0        ✗ 14199
     http_req_receiving.............: avg=1.5ms    min=15.7µs med=46.1µs max=428.74ms p(90)=101.1µs p(95)=289.02µs
     http_req_sending...............: avg=890.56µs min=7.3µs  med=14.2µs max=433.26ms p(90)=100.8µs p(95)=927.28µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=5.7s     min=2.41s  med=5.18s  max=14.96s   p(90)=8.99s   p(95)=9.8s    
     http_reqs......................: 14199  69.56122/s
     iteration_duration.............: avg=5.71s    min=2.41s  med=5.19s  max=14.96s   p(90)=9.02s   p(95)=9.82s   
     iterations.....................: 14199  69.56122/s
     vus............................: 108    min=108    max=400
     vus_max........................: 400    min=400    max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f8abb0d8-7b6d-4bf0-62fa-f63eb9ecf200/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b6923e06-e7ac-4b9a-171d-fcb8469e5c00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  98% — ✓ 13330 / ✗ 160
     ✗ no graphql errors
      ↳  91% — ✓ 12281 / ✗ 1209
     ✗ valid response structure
      ↳  92% — ✓ 12281 / ✗ 1049

     checks.........................: 94.00% ✓ 37892     ✗ 2418 
     data_received..................: 67 MB  326 kB/s
     data_sent......................: 16 MB  78 kB/s
     http_req_blocked...............: avg=2.45ms  min=800ns med=2µs    max=140.69ms p(90)=3.3µs   p(95)=16.2µs 
     http_req_connecting............: avg=2.42ms  min=0s    med=0s     max=140.65ms p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=6.01s   min=1.44s med=4.69s  max=1m0s     p(90)=7.4s    p(95)=8.3s   
       { expected_response:true }...: avg=5.36s   min=1.44s med=4.65s  max=59.65s   p(90)=7.29s   p(95)=7.99s  
   ✓ http_req_failed................: 1.18%  ✓ 160       ✗ 13330
     http_req_receiving.............: avg=62.54µs min=0s    med=42.7µs max=24.82ms  p(90)=70.91µs p(95)=80.15µs
     http_req_sending...............: avg=1.03ms  min=7.1µs med=12.1µs max=92.86ms  p(90)=27µs    p(95)=93.35µs
     http_req_tls_handshaking.......: avg=0s      min=0s    med=0s     max=0s       p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=6.01s   min=1.44s med=4.69s  max=1m0s     p(90)=7.4s    p(95)=8.3s   
     http_reqs......................: 13490  65.968355/s
     iteration_duration.............: avg=6.01s   min=1.44s med=4.69s  max=1m0s     p(90)=7.42s   p(95)=8.3s   
     iterations.....................: 13490  65.968355/s
     vus............................: 112    min=112     max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b46e01eb-5f71-4c43-ae7d-99dcffc05300/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/fe5485da-9310-47cf-c954-e7d8a53f5000/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server-node16`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  78% — ✓ 10294 / ✗ 2892
     ✗ valid response structure
      ↳  78% — ✓ 10294 / ✗ 2892

     checks.........................: 85.37% ✓ 33774     ✗ 5784 
     data_received..................: 64 MB  316 kB/s
     data_sent......................: 16 MB  77 kB/s
     http_req_blocked...............: avg=1ms      min=1µs      med=2µs    max=87.02ms p(90)=3.2µs  p(95)=12µs  
     http_req_connecting............: avg=995.67µs min=0s       med=0s     max=86.99ms p(90)=0s     p(95)=0s    
     http_req_duration..............: avg=6.11s    min=769.89ms med=4.84s  max=21.62s  p(90)=13.9s  p(95)=17.06s
       { expected_response:true }...: avg=6.11s    min=769.89ms med=4.84s  max=21.62s  p(90)=13.9s  p(95)=17.06s
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 13186
     http_req_receiving.............: avg=62.35µs  min=18.3µs   med=46.7µs max=28.67ms p(90)=72.8µs p(95)=81.5µs
     http_req_sending...............: avg=186.41µs min=6µs      med=12.1µs max=34.27ms p(90)=26.8µs p(95)=47.8µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s     p(95)=0s    
     http_req_waiting...............: avg=6.11s    min=769.8ms  med=4.84s  max=21.62s  p(90)=13.9s  p(95)=17.06s
     http_reqs......................: 13186  64.908931/s
     iteration_duration.............: avg=6.11s    min=770.65ms med=4.84s  max=21.62s  p(90)=13.9s  p(95)=17.06s
     iterations.....................: 13186  64.908931/s
     vus............................: 72     min=72      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/559af2e7-6d08-4643-40ad-344636b47100/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0b2e6981-490e-4648-c0e4-81321ec73b00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-deno`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 11843 / ✗ 33
     ✗ valid response structure
      ↳  99% — ✓ 11843 / ✗ 33

     checks.........................: 99.81% ✓ 35562     ✗ 66   
     data_received..................: 60 MB  295 kB/s
     data_sent......................: 14 MB  69 kB/s
     http_req_blocked...............: avg=3.4ms    min=1.3µs  med=2.8µs  max=214.7ms  p(90)=4.7µs   p(95)=24.1µs  
     http_req_connecting............: avg=3.33ms   min=0s     med=0s     max=181.18ms p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=6.79s    min=3.34s  med=6.68s  max=11.42s   p(90)=7.4s    p(95)=7.99s   
       { expected_response:true }...: avg=6.79s    min=3.34s  med=6.68s  max=11.42s   p(90)=7.4s    p(95)=7.99s   
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 11876
     http_req_receiving.............: avg=181.3µs  min=19.9µs med=46µs   max=39.4ms   p(90)=134.5µs p(95)=211.05µs
     http_req_sending...............: avg=641.73µs min=9.19µs med=16.8µs max=77.01ms  p(90)=109.3µs p(95)=478.05µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=6.79s    min=3.34s  med=6.68s  max=11.42s   p(90)=7.4s    p(95)=7.99s   
     http_reqs......................: 11876  58.435271/s
     iteration_duration.............: avg=6.8s     min=3.34s  med=6.69s  max=11.45s   p(90)=7.4s    p(95)=8.03s   
     iterations.....................: 11876  58.435271/s
     vus............................: 167    min=167     max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/433c1b41-224f-461b-045f-931ccf2ae800/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/36a52c93-0587-49ed-3172-5351f1ed7100/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga-uws`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  71% — ✓ 7939 / ✗ 3175
     ✗ valid response structure
      ↳  71% — ✓ 7939 / ✗ 3175

     checks.........................: 80.95% ✓ 26992     ✗ 6350 
     data_received..................: 49 MB  243 kB/s
     data_sent......................: 13 MB  65 kB/s
     http_req_blocked...............: avg=1.55ms   min=1.3µs    med=2.9µs  max=71.16ms p(90)=4.8µs   p(95)=20.5µs  
     http_req_connecting............: avg=1.52ms   min=0s       med=0s     max=66.79ms p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=7.27s    min=823.55ms med=6s     max=22.83s  p(90)=14.9s   p(95)=17.48s  
       { expected_response:true }...: avg=7.27s    min=823.55ms med=6s     max=22.83s  p(90)=14.9s   p(95)=17.48s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 11114
     http_req_receiving.............: avg=86.51µs  min=20.8µs   med=58.1µs max=14.64ms p(90)=91.2µs  p(95)=118.07µs
     http_req_sending...............: avg=210.88µs min=8.6µs    med=16.1µs max=43.46ms p(90)=38.17µs p(95)=190.93µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=7.27s    min=823.45ms med=6s     max=22.83s  p(90)=14.9s   p(95)=17.48s  
     http_reqs......................: 11114  54.641244/s
     iteration_duration.............: avg=7.27s    min=824.27ms med=6s     max=22.83s  p(90)=14.92s  p(95)=17.48s  
     iterations.....................: 11114  54.641244/s
     vus............................: 160    min=160     max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/234f2353-139d-44f3-5a84-97bce242ef00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/bdddfb5b-5eed-4497-e04c-e838756f5b00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 33264     ✗ 0    
     data_received..................: 56 MB   276 kB/s
     data_sent......................: 13 MB   65 kB/s
     http_req_blocked...............: avg=7.04ms  min=1.6µs  med=3.3µs  max=378.22ms p(90)=5.73µs  p(95)=25.3µs  
     http_req_connecting............: avg=6.9ms   min=0s     med=0s     max=378.15ms p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=7.24s   min=2.24s  med=7.12s  max=15.26s   p(90)=7.62s   p(95)=8.48s   
       { expected_response:true }...: avg=7.24s   min=2.24s  med=7.12s  max=15.26s   p(90)=7.62s   p(95)=8.48s   
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 11088
     http_req_receiving.............: avg=89.53µs min=29.4µs med=78.2µs max=10.29ms  p(90)=124.5µs p(95)=149.06µs
     http_req_sending...............: avg=1.53ms  min=9.1µs  med=20.9µs max=173.2ms  p(90)=52.6µs  p(95)=128.96µs
     http_req_tls_handshaking.......: avg=0s      min=0s     med=0s     max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=7.24s   min=2.24s  med=7.12s  max=15.26s   p(90)=7.62s   p(95)=8.47s   
     http_reqs......................: 11088   54.832016/s
     iteration_duration.............: avg=7.25s   min=2.24s  med=7.12s  max=15.45s   p(90)=7.62s   p(95)=8.5s    
     iterations.....................: 11088   54.832016/s
     vus............................: 105     min=105     max=400
     vus_max........................: 400     min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2f0b3189-daf6-4ae2-8204-3eeb12520300/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/77981a92-e3dc-4b5e-af18-31908d0bc300/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  97% — ✓ 10970 / ✗ 267
     ✗ no graphql errors
      ↳  87% — ✓ 9885 / ✗ 1352
     ✗ valid response structure
      ↳  90% — ✓ 9885 / ✗ 1085

     checks.........................: 91.91% ✓ 30740     ✗ 2704 
     data_received..................: 66 MB  315 kB/s
     data_sent......................: 13 MB  64 kB/s
     http_req_blocked...............: avg=2.69ms   min=1.5µs  med=2.7µs   max=226.29ms p(90)=18.89µs p(95)=6.04ms  
     http_req_connecting............: avg=2.6ms    min=0s     med=0s      max=181.83ms p(90)=0s      p(95)=5.72ms  
     http_req_duration..............: avg=7.22s    min=1.41s  med=5.18s   max=1m0s     p(90)=8.68s   p(95)=10.35s  
       { expected_response:true }...: avg=5.94s    min=1.41s  med=5.15s   max=59.11s   p(90)=8.26s   p(95)=9.13s   
   ✓ http_req_failed................: 2.37%  ✓ 267       ✗ 10970
     http_req_receiving.............: avg=88.98µs  min=0s     med=66.19µs max=32.64ms  p(90)=115.5µs p(95)=148.42µs
     http_req_sending...............: avg=899.99µs min=10.9µs med=17.3µs  max=59.83ms  p(90)=56.14µs p(95)=801.46µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=7.22s    min=1.41s  med=5.18s   max=1m0s     p(90)=8.68s   p(95)=10.35s  
     http_reqs......................: 11237  54.136011/s
     iteration_duration.............: avg=7.23s    min=1.41s  med=5.18s   max=1m0s     p(90)=8.68s   p(95)=10.35s  
     iterations.....................: 11237  54.136011/s
     vus............................: 57     min=57      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1d4d92a6-b84a-4314-c510-8ac037f29e00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/24341f69-5600-46e1-cab7-4ca836a33400/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  68% — ✓ 7293 / ✗ 3387
     ✗ valid response structure
      ↳  68% — ✓ 7293 / ✗ 3387

     checks.........................: 78.85% ✓ 25266     ✗ 6774 
     data_received..................: 48 MB  238 kB/s
     data_sent......................: 13 MB  63 kB/s
     http_req_blocked...............: avg=4.01ms  min=1.2µs    med=2.7µs  max=212.63ms p(90)=4.4µs   p(95)=18.8µs  
     http_req_connecting............: avg=3.92ms  min=0s       med=0s     max=212.58ms p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=7.52s   min=462.74ms med=6.74s  max=29.28s   p(90)=14.16s  p(95)=17.6s   
       { expected_response:true }...: avg=7.52s   min=462.74ms med=6.74s  max=29.28s   p(90)=14.16s  p(95)=17.6s   
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 10680
     http_req_receiving.............: avg=80.45µs min=21.8µs   med=58µs   max=28.14ms  p(90)=89.5µs  p(95)=103.8µs 
     http_req_sending...............: avg=1.16ms  min=8.5µs    med=16.1µs max=81.75ms  p(90)=37.19µs p(95)=272.22µs
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s     max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=7.52s   min=462.6ms  med=6.74s  max=29.26s   p(90)=14.16s  p(95)=17.6s   
     http_reqs......................: 10680  52.773829/s
     iteration_duration.............: avg=7.53s   min=463.55ms med=6.74s  max=29.31s   p(90)=14.16s  p(95)=17.6s   
     iterations.....................: 10680  52.773829/s
     vus............................: 85     min=85      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0533b8fe-6f10-4f42-fca7-1097fdaddb00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4d465540-24cf-4b2e-d61b-5080c1f8f000/public" alt="HTTP Overview" />


  </details>