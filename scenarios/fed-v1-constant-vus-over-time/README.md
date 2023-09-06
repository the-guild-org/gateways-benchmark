## Overview for: `scenarios/fed-v1-constant-vus-over-time`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. It's being executed with a constant amount of VUs over a fixed amount of time. It measure things like memory usage, CPU usage, average RPS. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was running 400 VUs over 200s


### Comparison


| Gateway                             | RPS ⬇️ |        Requests         |         Duration          |
| :---------------------------------- | :----: | :---------------------: | :-----------------------: |
| wundergraph                         |  3326  | 665448 total, 0 failed  |  avg: 113ms, p95: 215ms   |
| mesh                                |  268   |  53857 total, 0 failed  | avg: 1486ms, p95: 1753ms  |
| apollo-router                       |  198   |  39961 total, 0 failed  | avg: 2008ms, p95: 3060ms  |
| apollo-gateway-with-yoga-bun        |  152   |  30822 total, 0 failed  | avg: 2612ms, p95: 2969ms  |
| mercurius                           |  141   |  28512 total, 0 failed  | avg: 2821ms, p95: 3035ms  |
| stitching-federation-with-yoga-bun  |  136   |  27456 total, 0 failed  | avg: 2920ms, p95: 4825ms  |
| apollo-server                       |  117   | 23975 total, 510 failed | avg: 3368ms, p95: 2291ms  |
| apollo-server-node16                |  103   |  20894 total, 0 failed  | avg: 3853ms, p95: 4997ms  |
| apollo-gateway-with-yoga            |   98   | 20294 total, 525 failed | avg: 3989ms, p95: 2657ms  |
| stitching-federation-with-yoga-deno |   92   |  18589 total, 0 failed  | avg: 4329ms, p95: 4768ms  |
| mesh-supergraph                     |   81   |  16561 total, 0 failed  | avg: 4870ms, p95: 5512ms  |
| stitching-federation-with-yoga-uws  |   76   |  15565 total, 0 failed  | avg: 5179ms, p95: 8644ms  |
| stitching-federation-with-yoga      |   60   |  12324 total, 0 failed  | avg: 6542ms, p95: 10258ms |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 1996344    ✗ 0     
     data_received..................: 97 MB   482 kB/s
     data_sent......................: 790 MB  3.9 MB/s
     http_req_blocked...............: avg=33.63µs  min=700ns   med=1.5µs    max=314.65ms p(90)=2.7µs    p(95)=3.4µs   
     http_req_connecting............: avg=27.1µs   min=0s      med=0s       max=314.47ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=113.34ms min=240.4µs med=103.45ms max=661.2ms  p(90)=173.13ms p(95)=214.8ms 
       { expected_response:true }...: avg=113.34ms min=240.4µs med=103.45ms max=661.2ms  p(90)=173.13ms p(95)=214.8ms 
   ✓ http_req_failed................: 0.00%   ✓ 0          ✗ 665448
     http_req_receiving.............: avg=503.29µs min=8.5µs   med=19.9µs   max=374.45ms p(90)=64.6µs   p(95)=204.8µs 
     http_req_sending...............: avg=190.92µs min=5.6µs   med=9.19µs   max=317.21ms p(90)=23.2µs   p(95)=91.4µs  
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=112.65ms min=212.2µs med=102.97ms max=591.15ms p(90)=171.66ms p(95)=212.79ms
     http_reqs......................: 665448  3326.33993/s
     iteration_duration.............: avg=120.16ms min=339.9µs med=107.61ms max=838.12ms p(90)=186.56ms p(95)=229.94ms
     iterations.....................: 665448  3326.33993/s
     vus............................: 400     min=400      max=400 
     vus_max........................: 400     min=400      max=400 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/bbb810eb-8006-4529-7159-9c70567e1700/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3fad04e0-0221-4432-5536-b5d6b999a200/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/29820e7c-096e-4872-4b20-69f478150e00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 161571     ✗ 0    
     data_received..................: 69 MB   343 kB/s
     data_sent......................: 64 MB   319 kB/s
     http_req_blocked...............: avg=500.53µs min=900ns    med=1.9µs  max=132.31ms p(90)=2.8µs  p(95)=3.6µs  
     http_req_connecting............: avg=491.19µs min=0s       med=0s     max=132.26ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=1.48s    min=411.04ms med=1.46s  max=4.29s    p(90)=1.65s  p(95)=1.75s  
       { expected_response:true }...: avg=1.48s    min=411.04ms med=1.46s  max=4.29s    p(90)=1.65s  p(95)=1.75s  
   ✓ http_req_failed................: 0.00%   ✓ 0          ✗ 53857
     http_req_receiving.............: avg=75.4µs   min=11.9µs   med=35.7µs max=61.76ms  p(90)=60.3µs p(95)=86.22µs
     http_req_sending...............: avg=170.48µs min=6.2µs    med=11.7µs max=81.4ms   p(90)=22.6µs p(95)=34.2µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=1.48s    min=410.98ms med=1.46s  max=4.26s    p(90)=1.65s  p(95)=1.75s  
     http_reqs......................: 53857   268.732809/s
     iteration_duration.............: avg=1.48s    min=411.18ms med=1.46s  max=4.38s    p(90)=1.65s  p(95)=1.75s  
     iterations.....................: 53857   268.732809/s
     vus............................: 400     min=400      max=400
     vus_max........................: 400     min=400      max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9b8182de-0bf6-4afd-b983-6cccb2b56400/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/541ab520-9017-4b77-6ab6-b6855abc6600/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/60ce8380-abfa-4f33-8be2-2ed1240a7f00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 119883     ✗ 0    
     data_received..................: 202 MB  1.0 MB/s
     data_sent......................: 47 MB   236 kB/s
     http_req_blocked...............: avg=770µs   min=1µs      med=2.2µs  max=157.56ms p(90)=3.3µs  p(95)=4.3µs 
     http_req_connecting............: avg=754.3µs min=0s       med=0s     max=142.84ms p(90)=0s     p(95)=0s    
     http_req_duration..............: avg=2s      min=256.85ms med=1.98s  max=5.94s    p(90)=2.76s  p(95)=3.06s 
       { expected_response:true }...: avg=2s      min=256.85ms med=1.98s  max=5.94s    p(90)=2.76s  p(95)=3.06s 
   ✓ http_req_failed................: 0.00%   ✓ 0          ✗ 39961
     http_req_receiving.............: avg=65.42µs min=21.1µs   med=57.7µs max=15.11ms  p(90)=77.7µs p(95)=84.8µs
     http_req_sending...............: avg=158.7µs min=7.7µs    med=13.5µs max=33.58ms  p(90)=27.1µs p(95)=30.8µs
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s     max=0s       p(90)=0s     p(95)=0s    
     http_req_waiting...............: avg=2s      min=256.76ms med=1.98s  max=5.94s    p(90)=2.76s  p(95)=3.05s 
     http_reqs......................: 39961   198.449131/s
     iteration_duration.............: avg=2s      min=257.16ms med=1.98s  max=5.94s    p(90)=2.76s  p(95)=3.06s 
     iterations.....................: 39961   198.449131/s
     vus............................: 259     min=259      max=400
     vus_max........................: 400     min=400      max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a0627f06-ee67-4fb5-0706-1f7e79d88200/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b949d651-6864-43da-5e24-c706dd53df00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/85d28e72-9a70-4543-d4f5-3493bfdf6200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 92466      ✗ 0    
     data_received..................: 156 MB  772 kB/s
     data_sent......................: 37 MB   181 kB/s
     http_req_blocked...............: avg=764.39µs min=1.1µs  med=2.2µs  max=110.22ms p(90)=3µs    p(95)=3.7µs 
     http_req_connecting............: avg=752.77µs min=0s     med=0s     max=110.19ms p(90)=0s     p(95)=0s    
     http_req_duration..............: avg=2.61s    min=2.1s   med=2.51s  max=7.63s    p(90)=2.73s  p(95)=2.96s 
       { expected_response:true }...: avg=2.61s    min=2.1s   med=2.51s  max=7.63s    p(90)=2.73s  p(95)=2.96s 
   ✓ http_req_failed................: 0.00%   ✓ 0          ✗ 30822
     http_req_receiving.............: avg=101.67µs min=17.7µs med=44.1µs max=126.24ms p(90)=70.2µs p(95)=81.6µs
     http_req_sending...............: avg=239.11µs min=7.1µs  med=13.3µs max=77.08ms  p(90)=25.5µs p(95)=34.2µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s     p(95)=0s    
     http_req_waiting...............: avg=2.61s    min=2.1s   med=2.51s  max=7.63s    p(90)=2.73s  p(95)=2.96s 
     http_reqs......................: 30822   152.848461/s
     iteration_duration.............: avg=2.61s    min=2.1s   med=2.51s  max=7.72s    p(90)=2.73s  p(95)=2.96s 
     iterations.....................: 30822   152.848461/s
     vus............................: 400     min=400      max=400
     vus_max........................: 400     min=400      max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d7eaa11c-55f7-4a2d-37fd-9fd8ced29100/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4f0aaf42-36e8-49f1-c8b1-93c59d058b00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/bfcc8830-9054-4064-200b-52cb32745800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 85536      ✗ 0    
     data_received..................: 129 MB  638 kB/s
     data_sent......................: 34 MB   168 kB/s
     http_req_blocked...............: avg=758.87µs min=1µs     med=2.2µs  max=102.88ms p(90)=3.4µs  p(95)=4.3µs 
     http_req_connecting............: avg=746.11µs min=0s      med=0s     max=102.85ms p(90)=0s     p(95)=0s    
     http_req_duration..............: avg=2.82s    min=1.67s   med=2.81s  max=8.06s    p(90)=2.98s  p(95)=3.03s 
       { expected_response:true }...: avg=2.82s    min=1.67s   med=2.81s  max=8.06s    p(90)=2.98s  p(95)=3.03s 
   ✓ http_req_failed................: 0.00%   ✓ 0          ✗ 28512
     http_req_receiving.............: avg=58.86µs  min=18.39µs med=50.1µs max=13.09ms  p(90)=81.6µs p(95)=89.9µs
     http_req_sending...............: avg=126.96µs min=6.5µs   med=13µs   max=31.26ms  p(90)=25.8µs p(95)=34.1µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s       p(90)=0s     p(95)=0s    
     http_req_waiting...............: avg=2.82s    min=1.67s   med=2.81s  max=8.06s    p(90)=2.98s  p(95)=3.03s 
     http_reqs......................: 28512   141.379479/s
     iteration_duration.............: avg=2.82s    min=1.67s   med=2.81s  max=8.15s    p(90)=2.98s  p(95)=3.03s 
     iterations.....................: 28512   141.379479/s
     vus............................: 315     min=315      max=400
     vus_max........................: 400     min=400      max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/542ca273-f38f-4517-57fb-cddc88d0d200/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d56f57d4-f706-47fb-0899-f552d3b74100/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/46552d82-e839-4409-abd2-b2befca10600/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 82368      ✗ 0    
     data_received..................: 139 MB  689 kB/s
     data_sent......................: 33 MB   162 kB/s
     http_req_blocked...............: avg=1.88ms   min=900ns    med=1.9µs   max=327.74ms p(90)=3.2µs   p(95)=4.59µs  
     http_req_connecting............: avg=1.86ms   min=0s       med=0s      max=327.71ms p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=2.92s    min=313.53ms med=2.75s   max=6.95s    p(90)=3.84s   p(95)=4.82s   
       { expected_response:true }...: avg=2.92s    min=313.53ms med=2.75s   max=6.95s    p(90)=3.84s   p(95)=4.82s   
   ✓ http_req_failed................: 0.00%   ✓ 0          ✗ 27456
     http_req_receiving.............: avg=320.44µs min=16.2µs   med=40.09µs max=191.61ms p(90)=79.95µs p(95)=259.02µs
     http_req_sending...............: avg=616.78µs min=6.7µs    med=12µs    max=170.02ms p(90)=28.8µs  p(95)=127.72µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=2.91s    min=313.26ms med=2.75s   max=6.95s    p(90)=3.83s   p(95)=4.82s   
     http_reqs......................: 27456   136.468982/s
     iteration_duration.............: avg=2.92s    min=515.32ms med=2.75s   max=7.15s    p(90)=3.98s   p(95)=4.82s   
     iterations.....................: 27456   136.468982/s
     vus............................: 348     min=348      max=400
     vus_max........................: 400     min=400      max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/565b54d1-3085-4719-aeb0-b37ff9e04b00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/609097c3-792f-4ad2-1b76-c3bc977a4d00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c9a53b45-5f40-40ce-fc3a-968914cc4400/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  97% — ✓ 23465 / ✗ 510
     ✗ no graphql errors
      ↳  97% — ✓ 23465 / ✗ 510
     ✓ valid response structure

     checks.........................: 98.57% ✓ 70395      ✗ 1020 
     data_received..................: 123 MB 600 kB/s
     data_sent......................: 29 MB  139 kB/s
     http_req_blocked...............: avg=897.01µs min=900ns    med=1.9µs  max=67.74ms p(90)=2.9µs   p(95)=16.2µs 
     http_req_connecting............: avg=871.92µs min=0s       med=0s     max=61.65ms p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=3.36s    min=403.72ms med=1.91s  max=1m0s    p(90)=2.15s   p(95)=2.29s  
       { expected_response:true }...: avg=2.13s    min=403.72ms med=1.9s   max=59.72s  p(90)=2.13s   p(95)=2.21s  
   ✓ http_req_failed................: 2.12%  ✓ 510        ✗ 23465
     http_req_receiving.............: avg=52.84µs  min=0s       med=51.7µs max=10.36ms p(90)=65.69µs p(95)=73.8µs 
     http_req_sending...............: avg=85.57µs  min=6µs      med=12.2µs max=61.54ms p(90)=27µs    p(95)=32.09µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=3.36s    min=403.65ms med=1.91s  max=1m0s    p(90)=2.15s   p(95)=2.29s  
     http_reqs......................: 23975  117.385887/s
     iteration_duration.............: avg=3.36s    min=403.99ms med=1.91s  max=1m0s    p(90)=2.15s   p(95)=2.29s  
     iterations.....................: 23975  117.385887/s
     vus............................: 66     min=66       max=400
     vus_max........................: 400    min=400      max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d607ba05-59e4-456b-e841-2111b8324200/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1d287b32-0953-4560-19b8-fd4996e69800/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2079d5b5-2e4d-46ab-ee72-9d93af057200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server-node16`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 62682    ✗ 0    
     data_received..................: 109 MB  540 kB/s
     data_sent......................: 25 MB   123 kB/s
     http_req_blocked...............: avg=681.58µs min=1.1µs med=2.29µs max=79.4ms  p(90)=3.7µs  p(95)=17.73µs
     http_req_connecting............: avg=667.67µs min=0s    med=0s     max=61.49ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=3.85s    min=2.18s med=3.71s  max=7.22s   p(90)=4.72s  p(95)=4.99s  
       { expected_response:true }...: avg=3.85s    min=2.18s med=3.71s  max=7.22s   p(90)=4.72s  p(95)=4.99s  
   ✓ http_req_failed................: 0.00%   ✓ 0        ✗ 20894
     http_req_receiving.............: avg=78.11µs  min=24µs  med=59.5µs max=28.45ms p(90)=92.2µs p(95)=113.9µs
     http_req_sending...............: avg=142.45µs min=7.9µs med=14µs   max=39.85ms p(90)=35.4µs p(95)=53.93µs
     http_req_tls_handshaking.......: avg=0s       min=0s    med=0s     max=0s      p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=3.85s    min=2.18s med=3.71s  max=7.21s   p(90)=4.72s  p(95)=4.99s  
     http_reqs......................: 20894   103.2722/s
     iteration_duration.............: avg=3.85s    min=2.18s med=3.71s  max=7.25s   p(90)=4.72s  p(95)=5s     
     iterations.....................: 20894   103.2722/s
     vus............................: 195     min=195    max=400
     vus_max........................: 400     min=400    max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/399fc0ec-6978-401a-479a-280611ebc500/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/81dfa86c-7598-4159-32e4-8fa62f8b0f00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7b2955aa-6c1c-4ec7-4ddd-db00977d0100/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  97% — ✓ 19769 / ✗ 525
     ✗ no graphql errors
      ↳  97% — ✓ 19769 / ✗ 525
     ✓ valid response structure

     checks.........................: 98.26% ✓ 59307     ✗ 1050 
     data_received..................: 101 MB 490 kB/s
     data_sent......................: 24 MB  117 kB/s
     http_req_blocked...............: avg=1.45ms   min=1µs      med=2.29µs max=137.97ms p(90)=4.5µs   p(95)=20.03µs 
     http_req_connecting............: avg=1.41ms   min=0s       med=0s     max=137.92ms p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=3.98s    min=875.02ms med=2.24s  max=1m0s     p(90)=2.49s   p(95)=2.65s   
       { expected_response:true }...: avg=2.5s     min=875.02ms med=2.23s  max=59.69s   p(90)=2.45s   p(95)=2.55s   
   ✓ http_req_failed................: 2.58%  ✓ 525       ✗ 19769
     http_req_receiving.............: avg=75.93µs  min=0s       med=59µs   max=39.74ms  p(90)=89.6µs  p(95)=104.43µs
     http_req_sending...............: avg=334.18µs min=7.1µs    med=14µs   max=76.77ms  p(90)=31.17µs p(95)=78.88µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=3.98s    min=874.91ms med=2.23s  max=1m0s     p(90)=2.49s   p(95)=2.65s   
     http_reqs......................: 20294  98.706907/s
     iteration_duration.............: avg=3.99s    min=875.37ms med=2.24s  max=1m0s     p(90)=2.49s   p(95)=2.65s   
     iterations.....................: 20294  98.706907/s
     vus............................: 113    min=113     max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/41982bdc-3483-4b26-72f3-de7b982fbe00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/fd266108-7858-4098-0397-c4ab5f051a00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3279a3a6-9860-4d12-f60b-e85dfe925100/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-deno`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 55767    ✗ 0    
     data_received..................: 94 MB   468 kB/s
     data_sent......................: 22 MB   109 kB/s
     http_req_blocked...............: avg=637.12µs min=900ns  med=2µs    max=66.84ms p(90)=3.9µs  p(95)=5.7µs   
     http_req_connecting............: avg=621.97µs min=0s     med=0s     max=50.67ms p(90)=0s     p(95)=0s      
     http_req_duration..............: avg=4.32s    min=1.88s  med=4.31s  max=7.7s    p(90)=4.61s  p(95)=4.76s   
       { expected_response:true }...: avg=4.32s    min=1.88s  med=4.31s  max=7.7s    p(90)=4.61s  p(95)=4.76s   
   ✓ http_req_failed................: 0.00%   ✓ 0        ✗ 18589
     http_req_receiving.............: avg=105.17µs min=17.4µs med=38.1µs max=22.19ms p(90)=96.2µs p(95)=129.16µs
     http_req_sending...............: avg=123.13µs min=6.4µs  med=12.7µs max=39.59ms p(90)=30.7µs p(95)=119.36µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=4.32s    min=1.88s  med=4.31s  max=7.69s   p(90)=4.61s  p(95)=4.76s   
     http_reqs......................: 18589   92.12327/s
     iteration_duration.............: avg=4.32s    min=1.88s  med=4.31s  max=7.75s   p(90)=4.61s  p(95)=4.76s   
     iterations.....................: 18589   92.12327/s
     vus............................: 126     min=126    max=400
     vus_max........................: 400     min=400    max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/032ed5cc-3992-4f28-dc87-9135ac8ba000/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c1936746-74e7-4735-dd80-f69f34d8fe00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8d961955-870d-428e-db53-5de27f870f00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 49683     ✗ 0    
     data_received..................: 84 MB   415 kB/s
     data_sent......................: 20 MB   97 kB/s
     http_req_blocked...............: avg=762.31µs min=899ns   med=1.6µs  max=61.78ms p(90)=2.7µs   p(95)=5.99µs 
     http_req_connecting............: avg=751.56µs min=0s      med=0s     max=55.31ms p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=4.87s    min=2.5s    med=4.82s  max=8.24s   p(90)=5.33s   p(95)=5.51s  
       { expected_response:true }...: avg=4.87s    min=2.5s    med=4.82s  max=8.24s   p(90)=5.33s   p(95)=5.51s  
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 16561
     http_req_receiving.............: avg=45.46µs  min=16.29µs med=31.9µs max=24.33ms p(90)=56.19µs p(95)=69.19µs
     http_req_sending...............: avg=69.05µs  min=5.8µs   med=10.3µs max=49.88ms p(90)=23.8µs  p(95)=29.5µs 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s      p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=4.87s    min=2.5s    med=4.82s  max=8.24s   p(90)=5.33s   p(95)=5.51s  
     http_reqs......................: 16561   81.805209/s
     iteration_duration.............: avg=4.87s    min=2.5s    med=4.82s  max=8.27s   p(90)=5.33s   p(95)=5.51s  
     iterations.....................: 16561   81.805209/s
     vus............................: 212     min=212     max=400
     vus_max........................: 400     min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/fcdee778-9c3e-4be8-b8c3-3d99c3a9c500/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1ecd4f66-b060-441d-5503-fc3651b32e00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5f1846d0-27cd-4170-f722-035d29355300/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-uws`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 46695     ✗ 0    
     data_received..................: 79 MB   389 kB/s
     data_sent......................: 19 MB   91 kB/s
     http_req_blocked...............: avg=1.56ms   min=1µs    med=2µs    max=109.29ms p(90)=3.4µs  p(95)=11.7µs  
     http_req_connecting............: avg=1.53ms   min=0s     med=0s     max=109.25ms p(90)=0s     p(95)=0s      
     http_req_duration..............: avg=5.17s    min=2.56s  med=4.56s  max=12.48s   p(90)=7.35s  p(95)=8.64s   
       { expected_response:true }...: avg=5.17s    min=2.56s  med=4.56s  max=12.48s   p(90)=7.35s  p(95)=8.64s   
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 15565
     http_req_receiving.............: avg=63.96µs  min=18.7µs med=48.5µs max=10.31ms  p(90)=76.4µs p(95)=88.5µs  
     http_req_sending...............: avg=310.82µs min=6.8µs  med=12.2µs max=60.01ms  p(90)=28.3µs p(95)=107.18µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=5.17s    min=2.56s  med=4.56s  max=12.48s   p(90)=7.35s  p(95)=8.62s   
     http_reqs......................: 15565   76.773558/s
     iteration_duration.............: avg=5.18s    min=2.56s  med=4.56s  max=12.48s   p(90)=7.35s  p(95)=8.65s   
     iterations.....................: 15565   76.773558/s
     vus............................: 37      min=37      max=400
     vus_max........................: 400     min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/38dad84f-6a8c-4cf5-7b64-b3a8666f5300/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c1af31d9-e757-4531-79b6-2c5435d9f800/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f93a7d41-2533-40ae-e7d7-604d59641f00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 36972     ✗ 0    
     data_received..................: 63 MB   310 kB/s
     data_sent......................: 15 MB   72 kB/s
     http_req_blocked...............: avg=2.84ms   min=1.3µs  med=2.5µs  max=162.87ms p(90)=4.3µs  p(95)=18.08µs 
     http_req_connecting............: avg=2.79ms   min=0s     med=0s     max=156.54ms p(90)=0s     p(95)=0s      
     http_req_duration..............: avg=6.54s    min=3.18s  med=5.75s  max=51.08s   p(90)=8.95s  p(95)=10.25s  
       { expected_response:true }...: avg=6.54s    min=3.18s  med=5.75s  max=51.08s   p(90)=8.95s  p(95)=10.25s  
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 12324
     http_req_receiving.............: avg=73.44µs  min=22.4µs med=59.6µs max=15.92ms  p(90)=89.8µs p(95)=106.49µs
     http_req_sending...............: avg=460.41µs min=7.8µs  med=15.1µs max=39.07ms  p(90)=32.7µs p(95)=104.08µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=6.54s    min=3.18s  med=5.75s  max=51.08s   p(90)=8.95s  p(95)=10.25s  
     http_reqs......................: 12324   60.766579/s
     iteration_duration.............: avg=6.54s    min=3.18s  med=5.75s  max=51.2s    p(90)=8.95s  p(95)=10.25s  
     iterations.....................: 12324   60.766579/s
     vus............................: 83      min=83      max=400
     vus_max........................: 400     min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2fff4528-245e-4d14-a8da-394f07786000/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e0cc29bb-833d-4337-0a14-854eeaea5100/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0acac013-5ce7-480f-9b97-034b6a14e000/public" alt="HTTP Overview" />


  </details>