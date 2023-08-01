## Overview for: `scenarios/fed-v1-constant-vus-over-time`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. It's being executed with a constant amount of VUs over a fixed amount of time. It measure things like memory usage, CPU usage, average RPS. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was running 500 VUs over 300s


### Comparison


| Gateway                             | RPS ⬇️ |         Requests         |          Duration          |
| :---------------------------------- | :----: | :----------------------: | :------------------------: |
| wundergraph                         |  846   |  254236 total, 0 failed  |   avg: 585ms, p95: 856ms   |
| apollo-router                       |  109   |  33021 total, 0 failed   |  avg: 4557ms, p95: 6440ms  |
| stitching-federation-with-yoga-bun  |  107   |  32590 total, 0 failed   |  avg: 4636ms, p95: 5312ms  |
| stitching-federation-with-yoga      |   76   | 23102 total, 1310 failed | avg: 6507ms, p95: 59935ms  |
| mesh                                |   73   |  22337 total, 0 failed   |  avg: 6750ms, p95: 8569ms  |
| mesh-supergraph                     |   69   |  20975 total, 0 failed   |  avg: 7195ms, p95: 8995ms  |
| mercurius                           |   66   |  20218 total, 0 failed   |  avg: 7443ms, p95: 8201ms  |
| stitching-federation-with-yoga-deno |   66   |  20085 total, 0 failed   |  avg: 7513ms, p95: 9168ms  |
| apollo-server                       |   60   | 18350 total, 1475 failed | avg: 8189ms, p95: 59990ms  |
| apollo-gateway-with-yoga-uws        |   53   |  16431 total, 0 failed   | avg: 9204ms, p95: 23707ms  |
| apollo-gateway-with-yoga            |   52   |  16007 total, 49 failed  | avg: 9463ms, p95: 22934ms  |
| stitching-federation-with-yoga-uws  |   42   |  13010 total, 0 failed   | avg: 11651ms, p95: 23496ms |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 762708    ✗ 0     
     data_received..................: 1.3 GB  4.2 MB/s
     data_sent......................: 302 MB  1.0 MB/s
     http_req_blocked...............: avg=91.31µs  min=800ns   med=1.8µs    max=134.97ms p(90)=2.9µs    p(95)=3.5µs   
     http_req_connecting............: avg=85.8µs   min=0s      med=0s       max=124.85ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=585.16ms min=86.98ms med=565.23ms max=1.69s    p(90)=782.9ms  p(95)=856.19ms
       { expected_response:true }...: avg=585.16ms min=86.98ms med=565.23ms max=1.69s    p(90)=782.9ms  p(95)=856.19ms
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 254236
     http_req_receiving.............: avg=5.91ms   min=13.5µs  med=27.7µs   max=645.73ms p(90)=206.8µs  p(95)=14.1ms  
     http_req_sending...............: avg=771.3µs  min=5.6µs   med=10µs     max=696.16ms p(90)=21.2µs   p(95)=93.2µs  
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=578.48ms min=86.94ms med=561.93ms max=1.69s    p(90)=765.38ms p(95)=832.56ms
     http_reqs......................: 254236  846.31305/s
     iteration_duration.............: avg=590.41ms min=89.29ms med=570.26ms max=1.71s    p(90)=790.61ms p(95)=865.18ms
     iterations.....................: 254236  846.31305/s
     vus............................: 500     min=500     max=500 
     vus_max........................: 500     min=500     max=500 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4dc9f119-59f1-4193-368a-d57e91161100/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/65f7e577-ae95-43eb-ade9-d7bcaf64f100/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 32988 / ✗ 33
     ✗ valid response structure
      ↳  99% — ✓ 32988 / ✗ 33

     checks.........................: 99.93% ✓ 98997      ✗ 66   
     data_received..................: 164 MB 544 kB/s
     data_sent......................: 39 MB  130 kB/s
     http_req_blocked...............: avg=1.57ms   min=1.1µs   med=2.6µs  max=204.9ms  p(90)=4µs    p(95)=7.8µs 
     http_req_connecting............: avg=1.54ms   min=0s      med=0s     max=204.85ms p(90)=0s     p(95)=0s    
     http_req_duration..............: avg=4.55s    min=1.49s   med=4.36s  max=11.65s   p(90)=5.74s  p(95)=6.43s 
       { expected_response:true }...: avg=4.55s    min=1.49s   med=4.36s  max=11.65s   p(90)=5.74s  p(95)=6.43s 
   ✓ http_req_failed................: 0.00%  ✓ 0          ✗ 33021
     http_req_receiving.............: avg=273.91µs min=19.09µs med=49.7µs max=123.28ms p(90)=80.6µs p(95)=92.4µs
     http_req_sending...............: avg=613.15µs min=6.9µs   med=14.4µs max=160.04ms p(90)=29.7µs p(95)=68.3µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s       p(90)=0s     p(95)=0s    
     http_req_waiting...............: avg=4.55s    min=1.49s   med=4.36s  max=11.65s   p(90)=5.74s  p(95)=6.43s 
     http_reqs......................: 33021  109.279538/s
     iteration_duration.............: avg=4.55s    min=1.49s   med=4.36s  max=11.78s   p(90)=5.74s  p(95)=6.44s 
     iterations.....................: 33021  109.279538/s
     vus............................: 110    min=110      max=500
     vus_max........................: 500    min=500      max=500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1d7c56f2-44a4-4ccf-60bf-b0d1078a4700/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a56c0add-c591-4faa-210d-0d9691459b00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 97770      ✗ 0    
     data_received..................: 162 MB  536 kB/s
     data_sent......................: 39 MB   128 kB/s
     http_req_blocked...............: avg=2.1ms    min=1.3µs    med=2.6µs  max=278.58ms p(90)=4.1µs  p(95)=8.9µs   
     http_req_connecting............: avg=2.07ms   min=0s       med=0s     max=278.55ms p(90)=0s     p(95)=0s      
     http_req_duration..............: avg=4.63s    min=403.1ms  med=4.5s   max=10.3s    p(90)=4.91s  p(95)=5.31s   
       { expected_response:true }...: avg=4.63s    min=403.1ms  med=4.5s   max=10.3s    p(90)=4.91s  p(95)=5.31s   
   ✓ http_req_failed................: 0.00%   ✓ 0          ✗ 32590
     http_req_receiving.............: avg=200.66µs min=21.2µs   med=45.4µs max=98.63ms  p(90)=65.6µs p(95)=128.07µs
     http_req_sending...............: avg=612.81µs min=7.2µs    med=13µs   max=122.11ms p(90)=28.7µs p(95)=121.5µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=4.63s    min=402.83ms med=4.5s   max=10.3s    p(90)=4.91s  p(95)=5.31s   
     http_reqs......................: 32590   107.510659/s
     iteration_duration.............: avg=4.63s    min=405.48ms med=4.51s  max=10.3s    p(90)=4.91s  p(95)=5.31s   
     iterations.....................: 32590   107.510659/s
     vus............................: 119     min=119      max=500
     vus_max........................: 500     min=500      max=500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e1d5f3cd-4287-40f6-53f5-6e6eb2f3da00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5aafa8ee-5189-4bc6-5dc4-cb1ebf245c00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  94% — ✓ 21792 / ✗ 1310
     ✗ no graphql errors
      ↳  93% — ✓ 21505 / ✗ 1597
     ✗ valid response structure
      ↳  98% — ✓ 21505 / ✗ 287

     checks.........................: 95.30% ✓ 64802     ✗ 3194 
     data_received..................: 112 MB 369 kB/s
     data_sent......................: 27 MB  91 kB/s
     http_req_blocked...............: avg=3.01ms   min=1.3µs med=2.5µs  max=174.88ms p(90)=12µs    p(95)=1.63ms  
     http_req_connecting............: avg=2.94ms   min=0s    med=0s     max=174.83ms p(90)=0s      p(95)=1.51ms  
     http_req_duration..............: avg=6.5s     min=1.42s med=3.17s  max=1m0s     p(90)=4.11s   p(95)=59.93s  
       { expected_response:true }...: avg=3.29s    min=1.42s med=3.16s  max=59.49s   p(90)=3.43s   p(95)=4.02s   
   ✓ http_req_failed................: 5.67%  ✓ 1310      ✗ 21792
     http_req_receiving.............: avg=64.14µs  min=0s    med=53.7µs max=44.56ms  p(90)=77.2µs  p(95)=85.69µs 
     http_req_sending...............: avg=477.48µs min=7.6µs med=14.3µs max=127.26ms p(90)=32.49µs p(95)=169.74µs
     http_req_tls_handshaking.......: avg=0s       min=0s    med=0s     max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=6.5s     min=1.4s  med=3.17s  max=1m0s     p(90)=4.11s   p(95)=59.91s  
     http_reqs......................: 23102  76.345657/s
     iteration_duration.............: avg=6.51s    min=1.44s med=3.17s  max=1m0s     p(90)=4.14s   p(95)=1m0s    
     iterations.....................: 23102  76.345657/s
     vus............................: 119    min=119     max=500
     vus_max........................: 500    min=500     max=500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/90b37a5c-40d0-472e-0c3d-3cb740736d00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c66859c3-5a3f-485d-510e-7dc613b82900/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  98% — ✓ 21955 / ✗ 382
     ✗ valid response structure
      ↳  98% — ✓ 21955 / ✗ 382

     checks.........................: 98.85% ✓ 66247   ✗ 764  
     data_received..................: 114 MB 377 kB/s
     data_sent......................: 27 MB  88 kB/s
     http_req_blocked...............: avg=1.75ms   min=1.5µs  med=2.6µs  max=179.08ms p(90)=4µs    p(95)=5.92µs 
     http_req_connecting............: avg=1.72ms   min=0s     med=0s     max=145.43ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=6.75s    min=2.72s  med=6.6s   max=13.81s   p(90)=7.77s  p(95)=8.56s  
       { expected_response:true }...: avg=6.75s    min=2.72s  med=6.6s   max=13.81s   p(90)=7.77s  p(95)=8.56s  
   ✓ http_req_failed................: 0.00%  ✓ 0       ✗ 22337
     http_req_receiving.............: avg=69.05µs  min=23.4µs med=54.7µs max=43.5ms   p(90)=78.7µs p(95)=89µs   
     http_req_sending...............: avg=345.61µs min=7.3µs  med=14.7µs max=106.2ms  p(90)=30.4µs p(95)=36.72µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=6.74s    min=2.72s  med=6.6s   max=13.81s   p(90)=7.77s  p(95)=8.56s  
     http_reqs......................: 22337  73.7839/s
     iteration_duration.............: avg=6.75s    min=2.72s  med=6.6s   max=13.81s   p(90)=7.77s  p(95)=8.56s  
     iterations.....................: 22337  73.7839/s
     vus............................: 91     min=91    max=500
     vus_max........................: 500    min=500   max=500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c397ba6b-6aae-4a7e-82ab-d56f5dfd1100/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1eb13bee-a926-4736-7fa4-edfddb175300/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 20806 / ✗ 169
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 20975

     checks.........................: 66.39% ✓ 41781     ✗ 21144
     data_received..................: 107 MB 352 kB/s
     data_sent......................: 25 MB  82 kB/s
     http_req_blocked...............: avg=1.8ms   min=1.7µs  med=2.7µs  max=359.93ms p(90)=4.3µs   p(95)=18.5µs  
     http_req_connecting............: avg=1.73ms  min=0s     med=0s     max=246.2ms  p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=7.19s   min=2.9s   med=7.04s  max=13.96s   p(90)=8.25s   p(95)=8.99s   
       { expected_response:true }...: avg=7.19s   min=2.9s   med=7.04s  max=13.96s   p(90)=8.25s   p(95)=8.99s   
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 20975
     http_req_receiving.............: avg=76.41µs min=28.1µs med=64.3µs max=14.03ms  p(90)=104.4µs p(95)=125.43µs
     http_req_sending...............: avg=2.33ms  min=8.8µs  med=16.2µs max=359.26ms p(90)=39.4µs  p(95)=52.2µs  
     http_req_tls_handshaking.......: avg=0s      min=0s     med=0s     max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=7.19s   min=2.9s   med=7.04s  max=13.96s   p(90)=8.25s   p(95)=8.99s   
     http_reqs......................: 20975  69.062844/s
     iteration_duration.............: avg=7.19s   min=2.9s   med=7.04s  max=14.23s   p(90)=8.25s   p(95)=8.99s   
     iterations.....................: 20975  69.062844/s
     vus............................: 56     min=56      max=500
     vus_max........................: 500    min=500     max=500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/717dfc77-2a7c-4f5c-5cfa-ddce84448b00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9bc810b5-e572-4de9-9abd-2a741819ca00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 60654     ✗ 0    
     data_received..................: 102 MB  337 kB/s
     data_sent......................: 24 MB   79 kB/s
     http_req_blocked...............: avg=1.45ms  min=1.3µs  med=3.3µs  max=120.93ms p(90)=4.7µs   p(95)=16.11µs
     http_req_connecting............: avg=1.43ms  min=0s     med=0s     max=107.4ms  p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=7.44s   min=2.22s  med=7.37s  max=15.07s   p(90)=7.86s   p(95)=8.2s   
       { expected_response:true }...: avg=7.44s   min=2.22s  med=7.37s  max=15.07s   p(90)=7.86s   p(95)=8.2s   
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 20218
     http_req_receiving.............: avg=78.93µs min=23.5µs med=72.7µs max=19.09ms  p(90)=95.46µs p(95)=104.5µs
     http_req_sending...............: avg=340.8µs min=7.9µs  med=19.7µs max=45.59ms  p(90)=36.81µs p(95)=80.43µs
     http_req_tls_handshaking.......: avg=0s      min=0s     med=0s     max=0s       p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=7.44s   min=2.22s  med=7.37s  max=15.06s   p(90)=7.86s   p(95)=8.2s   
     http_reqs......................: 20218   66.901996/s
     iteration_duration.............: avg=7.44s   min=2.22s  med=7.37s  max=15.11s   p(90)=7.86s   p(95)=8.2s   
     iterations.....................: 20218   66.901996/s
     vus............................: 153     min=153     max=500
     vus_max........................: 500     min=500     max=500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/51c45a73-46d9-4c05-8cb1-90403176cb00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/99f42674-f6c0-46e5-f4a3-d6201418d700/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-deno`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  98% — ✓ 19871 / ✗ 214
     ✗ valid response structure
      ↳  98% — ✓ 19871 / ✗ 214

     checks.........................: 99.28% ✓ 59827     ✗ 428  
     data_received..................: 103 MB 338 kB/s
     data_sent......................: 24 MB  79 kB/s
     http_req_blocked...............: avg=6.47ms   min=1.1µs  med=2.6µs  max=477.68ms p(90)=4.3µs  p(95)=12.9µs  
     http_req_connecting............: avg=6.37ms   min=0s     med=0s     max=476.68ms p(90)=0s     p(95)=0s      
     http_req_duration..............: avg=7.51s    min=3.48s  med=7.32s  max=14.27s   p(90)=8.68s  p(95)=9.16s   
       { expected_response:true }...: avg=7.51s    min=3.48s  med=7.32s  max=14.27s   p(90)=8.68s  p(95)=9.16s   
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 20085
     http_req_receiving.............: avg=146.91µs min=17.1µs med=38.9µs max=41.86ms  p(90)=94.6µs p(95)=146.71µs
     http_req_sending...............: avg=806.04µs min=7.2µs  med=15.1µs max=192.36ms p(90)=39.4µs p(95)=167.59µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=7.51s    min=3.48s  med=7.32s  max=14.27s   p(90)=8.68s  p(95)=9.16s   
     http_reqs......................: 20085  66.180267/s
     iteration_duration.............: avg=7.52s    min=3.48s  med=7.32s  max=14.27s   p(90)=8.69s  p(95)=9.17s   
     iterations.....................: 20085  66.180267/s
     vus............................: 241    min=241     max=500
     vus_max........................: 500    min=500     max=500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/83a12002-a850-4b69-e809-75c1c4af6b00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/da3317b0-2aae-433d-4e23-e76f1b0c2000/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  91% — ✓ 16875 / ✗ 1475
     ✗ no graphql errors
      ↳  90% — ✓ 16649 / ✗ 1701
     ✗ valid response structure
      ↳  98% — ✓ 16649 / ✗ 226

     checks.........................: 93.65% ✓ 50173     ✗ 3402 
     data_received..................: 87 MB  286 kB/s
     data_sent......................: 22 MB  72 kB/s
     http_req_blocked...............: avg=4.16ms   min=1.3µs    med=3.1µs   max=266.19ms p(90)=17.7µs p(95)=7.53ms  
     http_req_connecting............: avg=4.04ms   min=0s       med=0s      max=259.51ms p(90)=0s     p(95)=6.85ms  
     http_req_duration..............: avg=8.18s    min=931.51ms med=3.57s   max=1m0s     p(90)=4.8s   p(95)=59.98s  
       { expected_response:true }...: avg=3.66s    min=931.51ms med=3.53s   max=59.38s   p(90)=4.04s  p(95)=4.28s   
   ✓ http_req_failed................: 8.03%  ✓ 1475      ✗ 16875
     http_req_receiving.............: avg=78.22µs  min=0s       med=65.9µs  max=64.22ms  p(90)=95.2µs p(95)=102.6µs 
     http_req_sending...............: avg=805.33µs min=7.2µs    med=18.89µs max=98.37ms  p(90)=42.2µs p(95)=352.64µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s       p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=8.18s    min=931.4ms  med=3.57s   max=1m0s     p(90)=4.8s   p(95)=59.98s  
     http_reqs......................: 18350  60.660714/s
     iteration_duration.............: avg=8.2s     min=931.86ms med=3.57s   max=1m0s     p(90)=4.8s   p(95)=1m0s    
     iterations.....................: 18350  60.660714/s
     vus............................: 119    min=119     max=500
     vus_max........................: 500    min=500     max=500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8641075a-2f11-4f4e-2890-7d27b4d8ba00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/76adb279-b245-4633-96b0-97344b841200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga-uws`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  64% — ✓ 10642 / ✗ 5789
     ✗ valid response structure
      ↳  64% — ✓ 10642 / ✗ 5789

     checks.........................: 76.51% ✓ 37715    ✗ 11578
     data_received..................: 72 MB  238 kB/s
     data_sent......................: 20 MB  64 kB/s
     http_req_blocked...............: avg=1.65ms   min=1.4µs    med=2.9µs  max=162.98ms p(90)=4.59µs p(95)=17.8µs 
     http_req_connecting............: avg=1.61ms   min=0s       med=0s     max=162.72ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=9.2s     min=200.18ms med=6.27s  max=38.7s    p(90)=20.38s p(95)=23.7s  
       { expected_response:true }...: avg=9.2s     min=200.18ms med=6.27s  max=38.7s    p(90)=20.38s p(95)=23.7s  
   ✓ http_req_failed................: 0.00%  ✓ 0        ✗ 16431
     http_req_receiving.............: avg=78.86µs  min=15.7µs   med=57.3µs max=14.41ms  p(90)=90µs   p(95)=106.7µs
     http_req_sending...............: avg=425.26µs min=7.9µs    med=16.1µs max=43.4ms   p(90)=38.1µs p(95)=160.1µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=9.2s     min=200.06ms med=6.27s  max=38.7s    p(90)=20.38s p(95)=23.7s  
     http_reqs......................: 16431  53.93344/s
     iteration_duration.............: avg=9.2s     min=201.06ms med=6.28s  max=38.71s   p(90)=20.38s p(95)=23.7s  
     iterations.....................: 16431  53.93344/s
     vus............................: 13     min=13     max=500
     vus_max........................: 500    min=500    max=500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f96953ed-6b88-46d0-500a-30498bff6600/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/683f5720-30c8-4a4e-335b-94d194c57300/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  99% — ✓ 15958 / ✗ 49
     ✗ no graphql errors
      ↳  66% — ✓ 10669 / ✗ 5338
     ✗ valid response structure
      ↳  66% — ✓ 10669 / ✗ 5289

     checks.........................: 77.74% ✓ 37296     ✗ 10676
     data_received..................: 71 MB  234 kB/s
     data_sent......................: 19 MB  62 kB/s
     http_req_blocked...............: avg=3.5ms   min=1.4µs   med=2.9µs  max=282.24ms p(90)=4.7µs   p(95)=19.17µs 
     http_req_connecting............: avg=3.44ms  min=0s      med=0s     max=281.18ms p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=9.46s   min=41.74ms med=7.55s  max=1m0s     p(90)=19.68s  p(95)=22.93s  
       { expected_response:true }...: avg=9.3s    min=41.74ms med=7.47s  max=59.18s   p(90)=19.4s   p(95)=22.85s  
   ✓ http_req_failed................: 0.30%  ✓ 49        ✗ 15958
     http_req_receiving.............: avg=93.74µs min=0s      med=58.9µs max=90.83ms  p(90)=91.9µs  p(95)=115.27µs
     http_req_sending...............: avg=1.01ms  min=7.1µs   med=15.9µs max=153.29ms p(90)=38.54µs p(95)=188.82µs
     http_req_tls_handshaking.......: avg=0s      min=0s      med=0s     max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=9.46s   min=41.68ms med=7.55s  max=1m0s     p(90)=19.68s  p(95)=22.93s  
     http_reqs......................: 16007  52.430525/s
     iteration_duration.............: avg=9.46s   min=42.42ms med=7.56s  max=1m0s     p(90)=19.68s  p(95)=22.93s  
     iterations.....................: 16007  52.430525/s
     vus............................: 185    min=185     max=500
     vus_max........................: 500    min=500     max=500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/608baf36-f194-4949-9947-3f6a88e1e500/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b2519c08-e76d-4a8b-7afd-98bae8049700/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-uws`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  70% — ✓ 9125 / ✗ 3885
     ✗ valid response structure
      ↳  70% — ✓ 9125 / ✗ 3885

     checks.........................: 80.09% ✓ 31260     ✗ 7770 
     data_received..................: 87 MB  286 kB/s
     data_sent......................: 15 MB  51 kB/s
     http_req_blocked...............: avg=4.22ms  min=1.6µs    med=2.8µs  max=249.39ms p(90)=5.2µs   p(95)=26.65µs 
     http_req_connecting............: avg=4.14ms  min=0s       med=0s     max=235.2ms  p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=11.65s  min=365.61ms med=10.47s max=36.65s   p(90)=18.02s  p(95)=23.49s  
       { expected_response:true }...: avg=11.65s  min=365.61ms med=10.47s max=36.65s   p(90)=18.02s  p(95)=23.49s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 13010
     http_req_receiving.............: avg=92.14µs min=21.4µs   med=70.5µs max=10.08ms  p(90)=130.7µs p(95)=164.4µs 
     http_req_sending...............: avg=1.01ms  min=9.79µs   med=18.3µs max=58.05ms  p(90)=50.61µs p(95)=135.15µs
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s     max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=11.65s  min=365.47ms med=10.47s max=36.65s   p(90)=18.02s  p(95)=23.48s  
     http_reqs......................: 13010  42.558242/s
     iteration_duration.............: avg=11.65s  min=366.86ms med=10.47s max=36.65s   p(90)=18.03s  p(95)=23.55s  
     iterations.....................: 13010  42.558242/s
     vus............................: 15     min=15      max=500
     vus_max........................: 500    min=500     max=500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1d6a1799-3af8-4add-ed5d-380f406ac500/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0af81672-6005-440f-1bea-4ec16d215e00/public" alt="HTTP Overview" />


  </details>