## Overview for: `scenarios/fed-v1-constants-vus-subgraphs-delay`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. All subgraphs have an intentional delay on replying, and this creates additional pressure on the gateway's memory. We are running a heavy load of concurrent VUs to measure response time and other stats, during stress. It measure things like memory usage, CPU usage, response times.


This scenario was running 400 VUs over 200s


### Comparison


| Gateway              | RPS ⬇️ |        Requests        |          Duration          |
| :------------------- | :----: | :--------------------: | :------------------------: |
| wundergraph          |  235   | 47416 total, 0 failed  |  avg: 1690ms, p95: 2013ms  |
| apollo-router        |  112   | 22668 total, 0 failed  |  avg: 3551ms, p95: 5625ms  |
| mesh-supergraph      |   79   | 16152 total, 0 failed  |  avg: 5003ms, p95: 6132ms  |
| mesh                 |   63   | 12855 total, 0 failed  |  avg: 6243ms, p95: 7874ms  |
| apollo-server        |   40   | 8760 total, 645 failed | avg: 9541ms, p95: 59976ms  |
| apollo-server-node16 |   37   |  7803 total, 0 failed  | avg: 10509ms, p95: 17652ms |
| mercurius            |   6    |  1602 total, 0 failed  | avg: 53421ms, p95: 57026ms |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 142248     ✗ 0    
     data_received..................: 236 MB  1.2 MB/s
     data_sent......................: 56 MB   279 kB/s
     http_req_blocked...............: avg=318.39µs min=1.2µs  med=2.6µs  max=119.82ms p(90)=3.7µs   p(95)=4.5µs   
     http_req_connecting............: avg=307.86µs min=0s     med=0s     max=119.78ms p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=1.68s    min=1.03s  med=1.68s  max=2.82s    p(90)=1.92s   p(95)=2.01s   
       { expected_response:true }...: avg=1.68s    min=1.03s  med=1.68s  max=2.82s    p(90)=1.92s   p(95)=2.01s   
   ✓ http_req_failed................: 0.00%   ✓ 0          ✗ 47416
     http_req_receiving.............: avg=981.64µs min=16.5µs med=38.4µs max=408.48ms p(90)=290.3µs p(95)=508.15µs
     http_req_sending...............: avg=740.15µs min=7.9µs  med=14.4µs max=388.38ms p(90)=35.65µs p(95)=159.65µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=1.68s    min=1.03s  med=1.67s  max=2.82s    p(90)=1.92s   p(95)=2.01s   
     http_reqs......................: 47416   235.178131/s
     iteration_duration.............: avg=1.69s    min=1.03s  med=1.68s  max=2.88s    p(90)=1.92s   p(95)=2.01s   
     iterations.....................: 47416   235.178131/s
     vus............................: 119     min=119      max=400
     vus_max........................: 400     min=400      max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c0588909-59d3-4251-5a0b-9e45788ec400/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0ef69829-2df0-46dc-4342-4c690e724f00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 22651 / ✗ 17
     ✗ valid response structure
      ↳  99% — ✓ 22651 / ✗ 17

     checks.........................: 99.95% ✓ 67970      ✗ 34   
     data_received..................: 113 MB 558 kB/s
     data_sent......................: 27 MB  133 kB/s
     http_req_blocked...............: avg=612.91µs min=1µs     med=2.1µs  max=78.07ms p(90)=3.2µs  p(95)=5.69µs 
     http_req_connecting............: avg=601.8µs  min=0s      med=0s     max=78.04ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=3.55s    min=1.43s   med=3.43s  max=8.61s   p(90)=4.64s  p(95)=5.62s  
       { expected_response:true }...: avg=3.55s    min=1.43s   med=3.43s  max=8.61s   p(90)=4.64s  p(95)=5.62s  
   ✓ http_req_failed................: 0.00%  ✓ 0          ✗ 22668
     http_req_receiving.............: avg=94.37µs  min=17.19µs med=44.8µs max=36.15ms p(90)=68.2µs p(95)=77.49µs
     http_req_sending...............: avg=133.26µs min=6.5µs   med=13.1µs max=88.72ms p(90)=28.1µs p(95)=39.72µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s      p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=3.55s    min=1.43s   med=3.43s  max=8.61s   p(90)=4.64s  p(95)=5.62s  
     http_reqs......................: 22668  112.009082/s
     iteration_duration.............: avg=3.55s    min=1.43s   med=3.43s  max=8.62s   p(90)=4.64s  p(95)=5.63s  
     iterations.....................: 22668  112.009082/s
     vus............................: 131    min=131      max=400
     vus_max........................: 400    min=400      max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d45e4c95-54ab-445d-cad3-56ef337f2000/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c90defa2-8ab3-4b9a-0472-11b44111f200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 16107 / ✗ 45
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 16152

     checks.........................: 66.57% ✓ 32259     ✗ 16197
     data_received..................: 81 MB  401 kB/s
     data_sent......................: 19 MB  95 kB/s
     http_req_blocked...............: avg=623.8µs  min=1.7µs  med=2.5µs  max=86.67ms p(90)=3.89µs p(95)=7.7µs 
     http_req_connecting............: avg=601.73µs min=0s     med=0s     max=67.11ms p(90)=0s     p(95)=0s    
     http_req_duration..............: avg=5s       min=3.37s  med=4.86s  max=9.94s   p(90)=5.56s  p(95)=6.13s 
       { expected_response:true }...: avg=5s       min=3.37s  med=4.86s  max=9.94s   p(90)=5.56s  p(95)=6.13s 
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 16152
     http_req_receiving.............: avg=65.21µs  min=26.5µs med=48.8µs max=24.2ms  p(90)=84.4µs p(95)=98.1µs
     http_req_sending...............: avg=79.58µs  min=8.9µs  med=14.4µs max=37.44ms p(90)=36.1µs p(95)=45.5µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s     p(95)=0s    
     http_req_waiting...............: avg=5s       min=3.37s  med=4.86s  max=9.94s   p(90)=5.56s  p(95)=6.13s 
     http_reqs......................: 16152  79.683235/s
     iteration_duration.............: avg=5s       min=3.37s  med=4.86s  max=9.95s   p(90)=5.56s  p(95)=6.13s 
     iterations.....................: 16152  79.683235/s
     vus............................: 4      min=4       max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/673241cb-76bf-4dee-87fa-973602a98600/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f9527cb3-cbfd-4eeb-ba1e-8af1b74ba600/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 12817 / ✗ 38
     ✗ valid response structure
      ↳  99% — ✓ 12817 / ✗ 38

     checks.........................: 99.80% ✓ 38489    ✗ 76   
     data_received..................: 65 MB  319 kB/s
     data_sent......................: 15 MB  76 kB/s
     http_req_blocked...............: avg=2.6ms  min=1.6µs  med=2.9µs   max=144.29ms p(90)=4.7µs   p(95)=21.4µs 
     http_req_connecting............: avg=2.19ms min=0s     med=0s      max=139.92ms p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=6.24s  min=1.78s  med=6.05s   max=12.37s   p(90)=6.97s   p(95)=7.87s  
       { expected_response:true }...: avg=6.24s  min=1.78s  med=6.05s   max=12.37s   p(90)=6.97s   p(95)=7.87s  
   ✓ http_req_failed................: 0.00%  ✓ 0        ✗ 12855
     http_req_receiving.............: avg=91.9µs min=24.8µs med=61.9µs  max=45.64ms  p(90)=99.76µs p(95)=118.6µs
     http_req_sending...............: avg=1.52ms min=10.7µs med=17.39µs max=99.07ms  p(90)=42µs    p(95)=64.89µs
     http_req_tls_handshaking.......: avg=0s     min=0s     med=0s      max=0s       p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=6.24s  min=1.78s  med=6.05s   max=12.37s   p(90)=6.97s   p(95)=7.87s  
     http_reqs......................: 12855  63.66777/s
     iteration_duration.............: avg=6.24s  min=1.78s  med=6.05s   max=12.49s   p(90)=6.97s   p(95)=7.87s  
     iterations.....................: 12855  63.66777/s
     vus............................: 37     min=37     max=400
     vus_max........................: 400    min=400    max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f8abb4a1-0e78-41cf-812c-d882e0c36f00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c427f8cf-4487-4eea-57ea-fc4253f9f800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  92% — ✓ 8115 / ✗ 645
     ✗ no graphql errors
      ↳  86% — ✓ 7553 / ✗ 1207
     ✗ valid response structure
      ↳  93% — ✓ 7553 / ✗ 562

     checks.........................: 90.58% ✓ 23221     ✗ 2414 
     data_received..................: 42 MB  190 kB/s
     data_sent......................: 10 MB  48 kB/s
     http_req_blocked...............: avg=4.28ms  min=1.2µs med=3µs     max=263.5ms  p(90)=683.25µs p(95)=22.06ms
     http_req_connecting............: avg=4.08ms  min=0s    med=0s      max=186.76ms p(90)=507.06µs p(95)=17.73ms
     http_req_duration..............: avg=9.54s   min=1.57s med=4.54s   max=1m0s     p(90)=33.54s   p(95)=59.97s 
       { expected_response:true }...: avg=5.53s   min=1.57s med=4.48s   max=59.69s   p(90)=5.49s    p(95)=6.21s  
   ✓ http_req_failed................: 7.36%  ✓ 645       ✗ 8115 
     http_req_receiving.............: avg=84.85µs min=0s    med=71.4µs  max=24.09ms  p(90)=115µs    p(95)=138.3µs
     http_req_sending...............: avg=1.46ms  min=9.5µs med=19.59µs max=159.32ms p(90)=111.81µs p(95)=1.55ms 
     http_req_tls_handshaking.......: avg=0s      min=0s    med=0s      max=0s       p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=9.53s   min=1.57s med=4.54s   max=1m0s     p(90)=33.54s   p(95)=59.95s 
     http_reqs......................: 8760   40.151451/s
     iteration_duration.............: avg=9.55s   min=1.58s med=4.54s   max=1m0s     p(90)=33.54s   p(95)=1m0s   
     iterations.....................: 8760   40.151451/s
     vus............................: 15     min=15      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/416b4e12-4771-4b59-c443-360ec58bb400/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6fd6836d-4ee7-43dd-d2b5-622b1e504300/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server-node16`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  53% — ✓ 4211 / ✗ 3592
     ✗ valid response structure
      ↳  53% — ✓ 4211 / ✗ 3592

     checks.........................: 69.31% ✓ 16225     ✗ 7184 
     data_received..................: 34 MB  165 kB/s
     data_sent......................: 9.3 MB 45 kB/s
     http_req_blocked...............: avg=4.26ms   min=1.8µs  med=2.9µs  max=282.41ms p(90)=7.4µs   p(95)=840.01µs
     http_req_connecting............: avg=4.14ms   min=0s     med=0s     max=282.36ms p(90)=0s      p(95)=377.44µs
     http_req_duration..............: avg=10.5s    min=1.49s  med=10.36s max=30.07s   p(90)=16.61s  p(95)=17.65s  
       { expected_response:true }...: avg=10.5s    min=1.49s  med=10.36s max=30.07s   p(90)=16.61s  p(95)=17.65s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 7803 
     http_req_receiving.............: avg=110.36µs min=29.1µs med=74.8µs max=32.38ms  p(90)=127.2µs p(95)=162.39µs
     http_req_sending...............: avg=872.27µs min=11.3µs med=19.5µs max=171.63ms p(90)=58.5µs  p(95)=1.19ms  
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=10.5s    min=1.49s  med=10.36s max=30.07s   p(90)=16.61s  p(95)=17.63s  
     http_reqs......................: 7803   37.670269/s
     iteration_duration.............: avg=10.51s   min=1.49s  med=10.36s max=30.07s   p(90)=16.63s  p(95)=17.71s  
     iterations.....................: 7803   37.670269/s
     vus............................: 69     min=69      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0a6a2cf4-c8aa-481c-46ba-f9b8ea48f500/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/71539861-3e48-4301-ece7-6a448a3d9a00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 4806     ✗ 0    
     data_received..................: 8.1 MB  35 kB/s
     data_sent......................: 1.9 MB  8.3 kB/s
     http_req_blocked...............: avg=43.82ms  min=2.1µs  med=4.1µs    max=317.21ms p(90)=191.18ms p(95)=199.89ms
     http_req_connecting............: avg=43.42ms  min=0s     med=0s       max=317.16ms p(90)=188.55ms p(95)=198.83ms
     http_req_duration..............: avg=53.42s   min=29.04s med=56.75s   max=57.15s   p(90)=56.99s   p(95)=57.02s  
       { expected_response:true }...: avg=53.42s   min=29.04s med=56.75s   max=57.15s   p(90)=56.99s   p(95)=57.02s  
   ✓ http_req_failed................: 0.00%   ✓ 0        ✗ 1602 
     http_req_receiving.............: avg=124.87µs min=39.1µs med=109.45µs max=6.42ms   p(90)=168.68µs p(95)=196.36µs
     http_req_sending...............: avg=11.29ms  min=12µs   med=33.55µs  max=184.95ms p(90)=54.95ms  p(95)=71.14ms 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=53.4s    min=29.04s med=56.75s   max=57.15s   p(90)=56.99s   p(95)=57.02s  
     http_reqs......................: 1602    6.995868/s
     iteration_duration.............: avg=53.46s   min=29.04s med=56.76s   max=57.19s   p(90)=56.99s   p(95)=57.02s  
     iterations.....................: 1602    6.995868/s
     vus............................: 2       min=2      max=400
     vus_max........................: 400     min=400    max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4fbc0dc5-0fb0-49c7-86a1-66c814a2fb00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c11c62b0-660d-4143-3527-c641e4eb3a00/public" alt="HTTP Overview" />


  </details>