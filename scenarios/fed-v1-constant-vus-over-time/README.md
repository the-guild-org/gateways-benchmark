## Overview for: `scenarios/fed-v1-constant-vus-over-time`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. It's being executed with a constant amount of VUs over a fixed amount of time. It measure things like memory usage, CPU usage, average RPS. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was running 500 VUs over 300s


### Comparison


| Gateway                             | RPS ⬇️ |         Requests         |          Duration          |
| :---------------------------------- | :----: | :----------------------: | :------------------------: |
| wundergraph                         |  853   |  256501 total, 0 failed  |   avg: 579ms, p95: 833ms   |
| stitching-federation-with-yoga-bun  |  109   |  33412 total, 0 failed   |  avg: 4533ms, p95: 5656ms  |
| mesh-supergraph                     |  104   |  31528 total, 0 failed   |  avg: 4783ms, p95: 5931ms  |
| apollo-router                       |   90   |  27471 total, 0 failed   |  avg: 5503ms, p95: 7795ms  |
| stitching-federation-with-yoga-deno |   90   |  27337 total, 0 failed   |  avg: 5515ms, p95: 6500ms  |
| mercurius                           |   77   |  23380 total, 0 failed   |  avg: 6432ms, p95: 7130ms  |
| stitching-federation-with-yoga      |   77   | 23475 total, 1580 failed | avg: 6395ms, p95: 59975ms  |
| mesh                                |   74   |  22767 total, 0 failed   |  avg: 6635ms, p95: 8278ms  |
| apollo-gateway-with-yoga            |   67   | 20691 total, 1150 failed | avg: 7272ms, p95: 59975ms  |
| stitching-federation-with-yoga-uws  |   58   |  17879 total, 0 failed   | avg: 8441ms, p95: 14575ms  |
| apollo-gateway-with-yoga-uws        |   47   |  14637 total, 0 failed   | avg: 10430ms, p95: 25639ms |
| apollo-server                       |   47   | 14520 total, 1310 failed | avg: 10364ms, p95: 59996ms |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 769503     ✗ 0     
     data_received..................: 1.3 GB  4.3 MB/s
     data_sent......................: 305 MB  1.0 MB/s
     http_req_blocked...............: avg=221.29µs min=800ns    med=1.8µs    max=345.26ms p(90)=2.9µs    p(95)=3.5µs   
     http_req_connecting............: avg=216.25µs min=0s       med=0s       max=345.23ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=579.03ms min=166.71ms med=559.9ms  max=1.56s    p(90)=767.74ms p(95)=833.36ms
       { expected_response:true }...: avg=579.03ms min=166.71ms med=559.9ms  max=1.56s    p(90)=767.74ms p(95)=833.36ms
   ✓ http_req_failed................: 0.00%   ✓ 0          ✗ 256501
     http_req_receiving.............: avg=6.19ms   min=13.19µs  med=27.3µs   max=641.86ms p(90)=206.9µs  p(95)=17.8ms  
     http_req_sending...............: avg=811.29µs min=5.7µs    med=10µs     max=618.23ms p(90)=21.1µs   p(95)=94.1µs  
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=572.03ms min=166.67ms med=556.88ms max=1.56s    p(90)=750.86ms p(95)=808.23ms
     http_reqs......................: 256501  853.941644/s
     iteration_duration.............: avg=584.98ms min=171.63ms med=564.66ms max=1.99s    p(90)=775.93ms p(95)=844.58ms
     iterations.....................: 256501  853.941644/s
     vus............................: 500     min=500      max=500 
     vus_max........................: 500     min=500      max=500 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/09c0709d-89ac-45c3-8991-cfbcfbaa6800/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2b957f85-9807-4a56-91e0-994c04c2e400/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 100236     ✗ 0    
     data_received..................: 167 MB  548 kB/s
     data_sent......................: 40 MB   131 kB/s
     http_req_blocked...............: avg=2.29ms   min=1.2µs    med=2.29µs max=294.05ms p(90)=4.1µs  p(95)=8.8µs   
     http_req_connecting............: avg=2.26ms   min=0s       med=0s     max=274.84ms p(90)=0s     p(95)=0s      
     http_req_duration..............: avg=4.53s    min=462.73ms med=4.42s  max=11.64s   p(90)=4.84s  p(95)=5.65s   
       { expected_response:true }...: avg=4.53s    min=462.73ms med=4.42s  max=11.64s   p(90)=4.84s  p(95)=5.65s   
   ✓ http_req_failed................: 0.00%   ✓ 0          ✗ 33412
     http_req_receiving.............: avg=115.76µs min=20.1µs   med=46.2µs max=66.55ms  p(90)=71.2µs p(95)=113.54µs
     http_req_sending...............: avg=536.99µs min=6.6µs    med=13.1µs max=177.26ms p(90)=29.5µs p(95)=114.1µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=4.53s    min=452.14ms med=4.42s  max=11.64s   p(90)=4.84s  p(95)=5.65s   
     http_reqs......................: 33412   109.925218/s
     iteration_duration.............: avg=4.53s    min=463.98ms med=4.42s  max=11.64s   p(90)=4.84s  p(95)=5.65s   
     iterations.....................: 33412   109.925218/s
     vus............................: 45      min=45       max=500
     vus_max........................: 500     min=500      max=500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/41e8ead9-c12e-4dff-d2b7-ea24ef873e00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e28873e2-f4e4-4d71-35f5-28120faf1d00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 31231 / ✗ 297
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 31528

     checks.........................: 66.35% ✓ 62759     ✗ 31825
     data_received..................: 160 MB 530 kB/s
     data_sent......................: 37 MB  124 kB/s
     http_req_blocked...............: avg=2.91ms  min=1.1µs  med=2.1µs  max=449.59ms p(90)=3.1µs  p(95)=3.9µs 
     http_req_connecting............: avg=2.87ms  min=0s     med=0s     max=412.79ms p(90)=0s     p(95)=0s    
     http_req_duration..............: avg=4.78s   min=2.64s  med=4.7s   max=9.92s    p(90)=5.4s   p(95)=5.93s 
       { expected_response:true }...: avg=4.78s   min=2.64s  med=4.7s   max=9.92s    p(90)=5.4s   p(95)=5.93s 
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 31528
     http_req_receiving.............: avg=56.03µs min=18.1µs med=48.7µs max=13.59ms  p(90)=68.3µs p(95)=75.7µs
     http_req_sending...............: avg=1.21ms  min=7.5µs  med=12.3µs max=242.84ms p(90)=22.8µs p(95)=28.2µs
     http_req_tls_handshaking.......: avg=0s      min=0s     med=0s     max=0s       p(90)=0s     p(95)=0s    
     http_req_waiting...............: avg=4.78s   min=2.64s  med=4.7s   max=9.77s    p(90)=5.4s   p(95)=5.93s 
     http_reqs......................: 31528  104.16316/s
     iteration_duration.............: avg=4.78s   min=2.64s  med=4.71s  max=10.16s   p(90)=5.4s   p(95)=5.93s 
     iterations.....................: 31528  104.16316/s
     vus............................: 308    min=308     max=500
     vus_max........................: 500    min=500     max=500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5e1e69f6-af7e-484d-3d26-bdba77301300/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/369398fd-42d8-4fe9-056c-c4d659fdba00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 27303 / ✗ 168
     ✗ valid response structure
      ↳  99% — ✓ 27303 / ✗ 168

     checks.........................: 99.59% ✓ 82077     ✗ 336  
     data_received..................: 137 MB 450 kB/s
     data_sent......................: 33 MB  107 kB/s
     http_req_blocked...............: avg=1.39ms   min=1.2µs  med=2.9µs  max=229.73ms p(90)=4.4µs  p(95)=6.65µs 
     http_req_connecting............: avg=1.35ms   min=0s     med=0s     max=196.11ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=5.5s     min=2.61s  med=5.25s  max=14.15s   p(90)=6.8s   p(95)=7.79s  
       { expected_response:true }...: avg=5.5s     min=2.61s  med=5.25s  max=14.15s   p(90)=6.8s   p(95)=7.79s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 27471
     http_req_receiving.............: avg=123.1µs  min=21.7µs med=50.9µs max=177.18ms p(90)=86.8µs p(95)=103.9µs
     http_req_sending...............: avg=726.68µs min=7.3µs  med=15.2µs max=143.01ms p(90)=33.5µs p(95)=104.4µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=5.5s     min=2.61s  med=5.25s  max=14.1s    p(90)=6.8s   p(95)=7.79s  
     http_reqs......................: 27471  90.344424/s
     iteration_duration.............: avg=5.5s     min=2.61s  med=5.26s  max=14.22s   p(90)=6.81s  p(95)=7.79s  
     iterations.....................: 27471  90.344424/s
     vus............................: 198    min=198     max=500
     vus_max........................: 500    min=500     max=500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/07efa749-0c63-4785-f8b8-8330b6db4400/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/dae816c6-53b7-4994-2573-17a2618b0400/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-deno`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 27239 / ✗ 98
     ✗ valid response structure
      ↳  99% — ✓ 27239 / ✗ 98

     checks.........................: 99.76% ✓ 81815     ✗ 196  
     data_received..................: 138 MB 456 kB/s
     data_sent......................: 32 MB  107 kB/s
     http_req_blocked...............: avg=1.77ms  min=900ns  med=1.9µs  max=217.65ms p(90)=3.4µs   p(95)=4.3µs 
     http_req_connecting............: avg=1.74ms  min=0s     med=0s     max=217.52ms p(90)=0s      p(95)=0s    
     http_req_duration..............: avg=5.51s   min=1.82s  med=5.42s  max=11.93s   p(90)=5.83s   p(95)=6.49s 
       { expected_response:true }...: avg=5.51s   min=1.82s  med=5.42s  max=11.93s   p(90)=5.83s   p(95)=6.49s 
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 27337
     http_req_receiving.............: avg=95.95µs min=14.7µs med=27.4µs max=80.04ms  p(90)=75.59µs p(95)=92.4µs
     http_req_sending...............: avg=540.9µs min=5.6µs  med=11.1µs max=118.54ms p(90)=25.84µs p(95)=97.6µs
     http_req_tls_handshaking.......: avg=0s      min=0s     med=0s     max=0s       p(90)=0s      p(95)=0s    
     http_req_waiting...............: avg=5.51s   min=1.82s  med=5.42s  max=11.87s   p(90)=5.83s   p(95)=6.49s 
     http_reqs......................: 27337  90.296955/s
     iteration_duration.............: avg=5.51s   min=1.82s  med=5.42s  max=12.06s   p(90)=5.84s   p(95)=6.51s 
     iterations.....................: 27337  90.296955/s
     vus............................: 283    min=283     max=500
     vus_max........................: 500    min=500     max=500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7a9f786d-debb-46bb-4d0b-b157dec7bf00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c1c5a9f3-213e-4f96-5f1d-708043b71900/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 70140     ✗ 0    
     data_received..................: 118 MB  390 kB/s
     data_sent......................: 28 MB   92 kB/s
     http_req_blocked...............: avg=958.79µs min=1.1µs  med=3µs    max=176.37ms p(90)=4.3µs  p(95)=13.89µs
     http_req_connecting............: avg=914.17µs min=0s     med=0s     max=112.27ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=6.43s    min=1.97s  med=6.37s  max=11.58s   p(90)=6.86s  p(95)=7.13s  
       { expected_response:true }...: avg=6.43s    min=1.97s  med=6.37s  max=11.58s   p(90)=6.86s  p(95)=7.13s  
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 23380
     http_req_receiving.............: avg=79.02µs  min=20.7µs med=68.8µs max=37.11ms  p(90)=87.7µs p(95)=92.8µs 
     http_req_sending...............: avg=996.12µs min=6.7µs  med=18µs   max=109.56ms p(90)=32.9µs p(95)=43.2µs 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=6.43s    min=1.97s  med=6.37s  max=11.57s   p(90)=6.86s  p(95)=7.12s  
     http_reqs......................: 23380   77.425918/s
     iteration_duration.............: avg=6.43s    min=1.97s  med=6.37s  max=11.66s   p(90)=6.86s  p(95)=7.13s  
     iterations.....................: 23380   77.425918/s
     vus............................: 58      min=58      max=500
     vus_max........................: 500     min=500     max=500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f550dc08-5078-41f6-d821-d626da5b7600/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a64f6da0-0e3e-4bc8-8f6f-a8f02a564500/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  93% — ✓ 21895 / ✗ 1580
     ✗ no graphql errors
      ↳  93% — ✓ 21834 / ✗ 1641
     ✗ valid response structure
      ↳  99% — ✓ 21834 / ✗ 61

     checks.........................: 95.23% ✓ 65563     ✗ 3282 
     data_received..................: 111 MB 367 kB/s
     data_sent......................: 28 MB  92 kB/s
     http_req_blocked...............: avg=2.78ms  min=1.3µs    med=2.5µs  max=316.77ms p(90)=15.4µs  p(95)=2.01ms  
     http_req_connecting............: avg=2.71ms  min=0s       med=0s     max=314.81ms p(90)=0s      p(95)=1.69ms  
     http_req_duration..............: avg=6.39s   min=534.86ms med=2.45s  max=1m0s     p(90)=2.87s   p(95)=59.97s  
       { expected_response:true }...: avg=2.52s   min=534.86ms med=2.44s  max=58.75s   p(90)=2.69s   p(95)=2.79s   
   ✓ http_req_failed................: 6.73%  ✓ 1580      ✗ 21895
     http_req_receiving.............: avg=58.54µs min=0s       med=54.3µs max=19.73ms  p(90)=79.7µs  p(95)=87.2µs  
     http_req_sending...............: avg=1.45ms  min=7.4µs    med=14.8µs max=205.35ms p(90)=33.09µs p(95)=118.53µs
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s     max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=6.39s   min=534.77ms med=2.45s  max=1m0s     p(90)=2.87s   p(95)=59.96s  
     http_reqs......................: 23475  77.822296/s
     iteration_duration.............: avg=6.4s    min=535.55ms med=2.45s  max=1m0s     p(90)=2.87s   p(95)=1m0s    
     iterations.....................: 23475  77.822296/s
     vus............................: 277    min=277     max=500
     vus_max........................: 500    min=500     max=500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/46850e91-7b2e-4d75-64bd-31744ab9b600/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0c18b2af-331d-4c87-6e78-51c5bc677200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  98% — ✓ 22510 / ✗ 257
     ✗ valid response structure
      ↳  98% — ✓ 22510 / ✗ 257

     checks.........................: 99.24% ✓ 67787   ✗ 514  
     data_received..................: 115 MB 377 kB/s
     data_sent......................: 27 MB  89 kB/s
     http_req_blocked...............: avg=2.09ms   min=1.5µs  med=2.6µs  max=202.49ms p(90)=3.9µs  p(95)=8.07µs 
     http_req_connecting............: avg=2.06ms   min=0s     med=0s     max=202.47ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=6.63s    min=2.52s  med=6.5s   max=12.59s   p(90)=7.58s  p(95)=8.27s  
       { expected_response:true }...: avg=6.63s    min=2.52s  med=6.5s   max=12.59s   p(90)=7.58s  p(95)=8.27s  
   ✓ http_req_failed................: 0.00%  ✓ 0       ✗ 22767
     http_req_receiving.............: avg=155.93µs min=23.2µs med=55.5µs max=86.78ms  p(90)=78.4µs p(95)=89.27µs
     http_req_sending...............: avg=438.46µs min=8.4µs  med=14.5µs max=107.49ms p(90)=30.5µs p(95)=38.5µs 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=6.63s    min=2.52s  med=6.5s   max=12.59s   p(90)=7.58s  p(95)=8.27s  
     http_reqs......................: 22767  74.8443/s
     iteration_duration.............: avg=6.63s    min=2.52s  med=6.5s   max=12.59s   p(90)=7.59s  p(95)=8.28s  
     iterations.....................: 22767  74.8443/s
     vus............................: 125    min=125   max=500
     vus_max........................: 500    min=500   max=500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/481da533-a0f7-4083-443e-dfdff0944000/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9e9b1dca-8f0c-4419-8ea5-de85981fa800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  94% — ✓ 19541 / ✗ 1150
     ✗ no graphql errors
      ↳  92% — ✓ 19228 / ✗ 1463
     ✗ valid response structure
      ↳  98% — ✓ 19228 / ✗ 313

     checks.........................: 95.19% ✓ 57997     ✗ 2926 
     data_received..................: 98 MB  317 kB/s
     data_sent......................: 25 MB  80 kB/s
     http_req_blocked...............: avg=1.17ms   min=1µs      med=2.5µs  max=97.23ms p(90)=5.7µs   p(95)=1.43ms  
     http_req_connecting............: avg=1.12ms   min=0s       med=0s     max=85.47ms p(90)=0s      p(95)=1.29ms  
     http_req_duration..............: avg=7.27s    min=961.4ms  med=3.9s   max=1m0s    p(90)=5.27s   p(95)=59.97s  
       { expected_response:true }...: avg=4.17s    min=961.4ms  med=3.86s  max=59.62s  p(90)=4.91s   p(95)=5.24s   
   ✓ http_req_failed................: 5.55%  ✓ 1150      ✗ 19541
     http_req_receiving.............: avg=59.07µs  min=0s       med=54µs   max=12.73ms p(90)=84.99µs p(95)=93.59µs 
     http_req_sending...............: avg=282.43µs min=6.6µs    med=15.3µs max=24.38ms p(90)=34.7µs  p(95)=154.09µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=7.27s    min=961.35ms med=3.9s   max=1m0s    p(90)=5.27s   p(95)=59.96s  
     http_reqs......................: 20691  67.040035/s
     iteration_duration.............: avg=7.27s    min=961.57ms med=3.9s   max=1m0s    p(90)=5.27s   p(95)=1m0s    
     iterations.....................: 20691  67.040035/s
     vus............................: 7      min=7       max=500
     vus_max........................: 500    min=500     max=500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/41a8d2ed-efee-428b-bd1b-d58b4d222a00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/fd88d2ba-ec7a-4821-d7af-7a2461f68600/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-uws`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  76% — ✓ 13667 / ✗ 4212
     ✗ valid response structure
      ↳  76% — ✓ 13667 / ✗ 4212

     checks.........................: 84.29% ✓ 45213     ✗ 8424 
     data_received..................: 121 MB 398 kB/s
     data_sent......................: 21 MB  70 kB/s
     http_req_blocked...............: avg=1.72ms   min=1.3µs  med=2.7µs  max=124.91ms p(90)=4.8µs  p(95)=15.81µs 
     http_req_connecting............: avg=1.69ms   min=0s     med=0s     max=124.85ms p(90)=0s     p(95)=0s      
     http_req_duration..............: avg=8.44s    min=2.1s   med=7.79s  max=31.34s   p(90)=12.47s p(95)=14.57s  
       { expected_response:true }...: avg=8.44s    min=2.1s   med=7.79s  max=31.34s   p(90)=12.47s p(95)=14.57s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 17879
     http_req_receiving.............: avg=105.36µs min=21.5µs med=57.7µs max=150.4ms  p(90)=98.9µs p(95)=126.12µs
     http_req_sending...............: avg=491.96µs min=7.6µs  med=15.3µs max=176.81ms p(90)=32.7µs p(95)=50.31µs 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=8.44s    min=2.1s   med=7.79s  max=31.34s   p(90)=12.47s p(95)=14.57s  
     http_reqs......................: 17879  58.960128/s
     iteration_duration.............: avg=8.44s    min=2.1s   med=7.79s  max=31.34s   p(90)=12.47s p(95)=14.57s  
     iterations.....................: 17879  58.960128/s
     vus............................: 141    min=141     max=500
     vus_max........................: 500    min=500     max=500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/43d40b8e-7597-45ed-4877-f63723722400/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c59526c4-468f-4a65-82cc-19d4e6e5ec00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga-uws`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  56% — ✓ 8300 / ✗ 6337
     ✗ valid response structure
      ↳  56% — ✓ 8300 / ✗ 6337

     checks.........................: 71.13% ✓ 31237     ✗ 12674
     data_received..................: 62 MB  201 kB/s
     data_sent......................: 17 MB  57 kB/s
     http_req_blocked...............: avg=1.62ms   min=1.6µs    med=2.7µs  max=182.69ms p(90)=4.4µs  p(95)=24.1µs  
     http_req_connecting............: avg=1.58ms   min=0s       med=0s     max=104.49ms p(90)=0s     p(95)=0s      
     http_req_duration..............: avg=10.42s   min=100.71ms med=8.8s   max=39.26s   p(90)=22.64s p(95)=25.63s  
       { expected_response:true }...: avg=10.42s   min=100.71ms med=8.8s   max=39.26s   p(90)=22.64s p(95)=25.63s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 14637
     http_req_receiving.............: avg=89.65µs  min=21µs     med=55.2µs max=22.73ms  p(90)=100µs  p(95)=128.12µs
     http_req_sending...............: avg=728.66µs min=9.8µs    med=16.2µs max=93.76ms  p(90)=45.8µs p(95)=192.82µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=10.42s   min=100.6ms  med=8.8s   max=39.26s   p(90)=22.64s p(95)=25.63s  
     http_reqs......................: 14637  47.623351/s
     iteration_duration.............: avg=10.43s   min=101.46ms med=8.82s  max=39.26s   p(90)=22.64s p(95)=25.63s  
     iterations.....................: 14637  47.623351/s
     vus............................: 147    min=147     max=500
     vus_max........................: 500    min=500     max=500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a0c4606e-9996-40f7-4496-f7e29df83e00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/dd0de993-fc41-40af-9301-6722fb899700/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  90% — ✓ 13210 / ✗ 1310
     ✗ no graphql errors
      ↳  82% — ✓ 11945 / ✗ 2575
     ✗ valid response structure
      ↳  90% — ✓ 11945 / ✗ 1265

     checks.........................: 87.81% ✓ 37100     ✗ 5150 
     data_received..................: 66 MB  219 kB/s
     data_sent......................: 17 MB  57 kB/s
     http_req_blocked...............: avg=4.09ms   min=1.3µs  med=3µs    max=256.63ms p(90)=325.52µs p(95)=10.18ms 
     http_req_connecting............: avg=3.99ms   min=0s     med=0s     max=256.56ms p(90)=259.54µs p(95)=8.96ms  
     http_req_duration..............: avg=10.36s   min=1.65s  med=5.3s   max=1m0s     p(90)=8.15s    p(95)=59.99s  
       { expected_response:true }...: avg=5.44s    min=1.65s  med=5.24s  max=59.56s   p(90)=6.4s     p(95)=6.89s   
   ✓ http_req_failed................: 9.02%  ✓ 1310      ✗ 13210
     http_req_receiving.............: avg=76.55µs  min=0s     med=68.8µs max=8.91ms   p(90)=104.6µs  p(95)=123.4µs 
     http_req_sending...............: avg=842.63µs min=9.19µs med=19.3µs max=103.96ms p(90)=81.5µs   p(95)=624.21µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=10.36s   min=1.65s  med=5.3s   max=1m0s     p(90)=8.15s    p(95)=59.99s  
     http_reqs......................: 14520  47.827829/s
     iteration_duration.............: avg=10.37s   min=1.65s  med=5.3s   max=1m0s     p(90)=8.21s    p(95)=1m0s    
     iterations.....................: 14520  47.827829/s
     vus............................: 125    min=125     max=500
     vus_max........................: 500    min=500     max=500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c8768ec3-0a3b-41fa-4779-5919ce679300/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9199c476-49a3-40cc-bf74-235255e70100/public" alt="HTTP Overview" />


  </details>