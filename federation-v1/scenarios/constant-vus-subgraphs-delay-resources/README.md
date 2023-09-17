## Overview for: `federation-v1/constant-vus-subgraphs-delay-resources`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. It's being executed with a constant amount of VUs over a fixed amount of time. It measure things like memory usage, CPU usage, average RPS. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was running 500 VUs over 600s


### Comparison


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/45d82242-497d-4d00-e52b-bf7f0bc51800/public" alt="Comparison" />


| Gateway             | RPS ⬇️ |         Requests         |          Duration          | Notes                                                                          |
| :------------------ | :----: | :----------------------: | :------------------------: | :----------------------------------------------------------------------------- |
| wundergraph         |  193   |  116511 total, 0 failed  |  avg: 1817ms, p95: 3309ms  | ✅                                                                              |
| apollo-router       |  186   |  112066 total, 0 failed  |  avg: 1584ms, p95: 3293ms  | ✅                                                                              |
| mesh-supergraph-bun |  108   |  65573 total, 0 failed   |  avg: 4472ms, p95: 7576ms  | ✅                                                                              |
| mesh-supergraph     |  104   |  62978 total, 0 failed   |  avg: 4654ms, p95: 5609ms  | ✅                                                                              |
| mesh-bun            |  100   |  60926 total, 0 failed   |  avg: 4820ms, p95: 8142ms  | ✅                                                                              |
| mesh                |   98   |  59163 total, 0 failed   |  avg: 4977ms, p95: 5804ms  | ✅                                                                              |
| apollo-server       |   67   | 40783 total, 2630 failed | avg: 7350ms, p95: 59994ms  | ❌ 2630 failed requests, 2630 non-200 responses, 2630 unexpected GraphQL errors |
| mercurius           |   12   |   7946 total, 0 failed   | avg: 38409ms, p95: 41538ms | ✅                                                                              |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 349533     ✗ 0     
     data_received..................: 10 GB   17 MB/s
     data_sent......................: 138 MB  230 kB/s
     http_req_blocked...............: avg=384.14µs min=1.16µs   med=2.93µs  max=2.31s  p(90)=4.73µs  p(95)=5.87µs
     http_req_connecting............: avg=207.62µs min=0s       med=0s      max=2.31s  p(90)=0s      p(95)=0s    
     http_req_duration..............: avg=1.81s    min=515.34ms med=1.66s   max=8.27s  p(90)=2.74s   p(95)=3.3s  
       { expected_response:true }...: avg=1.81s    min=515.34ms med=1.66s   max=8.27s  p(90)=2.74s   p(95)=3.3s  
     http_req_failed................: 0.00%   ✓ 0          ✗ 116511
     http_req_receiving.............: avg=290.7ms  min=23.62µs  med=75.82µs max=6.59s  p(90)=1.21s   p(95)=1.76s 
     http_req_sending...............: avg=20.26ms  min=5.66µs   med=13.18µs max=4.66s  p(90)=31.13µs p(95)=1.39ms
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s     p(90)=0s      p(95)=0s    
     http_req_waiting...............: avg=1.5s     min=515.28ms med=1.45s   max=4.2s   p(90)=2.08s   p(95)=2.22s 
     http_reqs......................: 116511  193.723693/s
     iteration_duration.............: avg=2.56s    min=585.86ms med=2.24s   max=12.13s p(90)=4.37s   p(95)=5.1s  
     iterations.....................: 116511  193.723693/s
     vus............................: 232     min=232      max=500 
     vus_max........................: 500     min=500      max=500 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6cc2cb1b-a69c-46e8-bf33-e5aa7df89800/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9f0cf401-5dca-4698-a22f-794622e8f500/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4dda8306-caa6-4ea0-0604-18a3adca1e00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 336198     ✗ 0     
     data_received..................: 9.8 GB  16 MB/s
     data_sent......................: 133 MB  221 kB/s
     http_req_blocked...............: avg=1.63ms   min=1.25µs   med=3.11µs  max=3.64s  p(90)=5.11µs  p(95)=6.23µs  
     http_req_connecting............: avg=1.13ms   min=0s       med=0s      max=3.64s  p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=1.58s    min=209.83ms med=1.41s   max=10.04s p(90)=2.69s   p(95)=3.29s   
       { expected_response:true }...: avg=1.58s    min=209.83ms med=1.41s   max=10.04s p(90)=2.69s   p(95)=3.29s   
     http_req_failed................: 0.00%   ✓ 0          ✗ 112066
     http_req_receiving.............: avg=341.85ms min=23.01µs  med=72.56µs max=8.41s  p(90)=1.45s   p(95)=2.11s   
     http_req_sending...............: avg=24.81ms  min=6.53µs   med=13.8µs  max=5.26s  p(90)=32.45µs p(95)=160.36µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s     p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=1.21s    min=209.77ms med=1.16s   max=5.56s  p(90)=1.88s   p(95)=2.1s    
     http_reqs......................: 112066  186.276019/s
     iteration_duration.............: avg=2.64s    min=223.88ms med=2.29s   max=15.51s p(90)=4.85s   p(95)=5.79s   
     iterations.....................: 112066  186.276019/s
     vus............................: 236     min=236      max=500 
     vus_max........................: 500     min=500      max=500 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5c136e9e-40ce-428d-1c89-ff63a1fda900/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0706efc8-5108-4566-fcf5-5bef36aade00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/85126500-a2ed-4e5a-05ab-a404d00dac00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 196719     ✗ 0    
     data_received..................: 5.8 GB  9.5 MB/s
     data_sent......................: 78 MB   129 kB/s
     http_req_blocked...............: avg=291.56µs min=1.45µs  med=3.37µs  max=487.58ms p(90)=5.62µs  p(95)=6.88µs  
     http_req_connecting............: avg=232.66µs min=0s      med=0s      max=61.31ms  p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=4.47s    min=1.55s   med=3.89s   max=11.27s   p(90)=7.2s    p(95)=7.57s   
       { expected_response:true }...: avg=4.47s    min=1.55s   med=3.89s   max=11.27s   p(90)=7.2s    p(95)=7.57s   
     http_req_failed................: 0.00%   ✓ 0          ✗ 65573
     http_req_receiving.............: avg=30.72ms  min=27.42µs med=69.67µs max=2.33s    p(90)=5.53ms  p(95)=180.1ms 
     http_req_sending...............: avg=2.43ms   min=7.75µs  med=14.86µs max=1.37s    p(90)=37.37µs p(95)=168.48µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=4.43s    min=1.54s   med=3.87s   max=11.27s   p(90)=7.17s   p(95)=7.54s   
     http_reqs......................: 65573   108.791747/s
     iteration_duration.............: avg=4.58s    min=1.62s   med=3.97s   max=11.34s   p(90)=7.39s   p(95)=7.77s   
     iterations.....................: 65573   108.791747/s
     vus............................: 151     min=151      max=500
     vus_max........................: 500     min=500      max=500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/be378f9f-e99f-4363-05a5-bc257b7c3a00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/906b06d7-04ae-4eba-7d01-4d7baa9b2500/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/64ab5242-e4e7-42cb-5118-a2e2d04ab500/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 188934     ✗ 0    
     data_received..................: 5.5 GB  9.2 MB/s
     data_sent......................: 75 MB   124 kB/s
     http_req_blocked...............: avg=196.84µs min=1.74µs  med=3.94µs  max=430.57ms p(90)=6.08µs  p(95)=7.16µs  
     http_req_connecting............: avg=148.84µs min=0s      med=0s      max=40.06ms  p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=4.65s    min=2.54s   med=4.63s   max=8.66s    p(90)=5.38s   p(95)=5.6s    
       { expected_response:true }...: avg=4.65s    min=2.54s   med=4.63s   max=8.66s    p(90)=5.38s   p(95)=5.6s    
     http_req_failed................: 0.00%   ✓ 0          ✗ 62978
     http_req_receiving.............: avg=22.61ms  min=32.61µs med=73.2µs  max=2.43s    p(90)=5.12ms  p(95)=114.92ms
     http_req_sending...............: avg=2.06ms   min=8.51µs  med=17.58µs max=1.75s    p(90)=37.79µs p(95)=148.11µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=4.62s    min=2.54s   med=4.61s   max=8.26s    p(90)=5.34s   p(95)=5.56s   
     http_reqs......................: 62978   104.338083/s
     iteration_duration.............: avg=4.78s    min=2.61s   med=4.74s   max=8.81s    p(90)=5.56s   p(95)=5.82s   
     iterations.....................: 62978   104.338083/s
     vus............................: 184     min=184      max=500
     vus_max........................: 500     min=500      max=500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/82b24402-a55c-45e3-a696-a14824b61300/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/36a725a0-dcc8-4eff-8a2e-f29a77395700/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e0634c04-f0ad-4a82-9efb-4d9e3d8de000/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 182778     ✗ 0    
     data_received..................: 5.3 GB  8.9 MB/s
     data_sent......................: 72 MB   120 kB/s
     http_req_blocked...............: avg=230.44µs min=1.23µs   med=3.12µs  max=602.56ms p(90)=5.13µs  p(95)=6.43µs  
     http_req_connecting............: avg=175.92µs min=0s       med=0s      max=51.96ms  p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=4.82s    min=757.06ms med=4.15s   max=9.79s    p(90)=7.81s   p(95)=8.14s   
       { expected_response:true }...: avg=4.82s    min=757.06ms med=4.15s   max=9.79s    p(90)=7.81s   p(95)=8.14s   
     http_req_failed................: 0.00%   ✓ 0          ✗ 60926
     http_req_receiving.............: avg=37.49ms  min=27.86µs  med=65.59µs max=2.87s    p(90)=13.69ms p(95)=237ms   
     http_req_sending...............: avg=2.55ms   min=7.64µs   med=13.79µs max=1.43s    p(90)=34.86µs p(95)=154.54µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=4.78s    min=755.91ms med=4.12s   max=9.3s     p(90)=7.78s   p(95)=8.11s   
     http_reqs......................: 60926   100.992339/s
     iteration_duration.............: avg=4.93s    min=805.83ms med=4.23s   max=9.97s    p(90)=7.99s   p(95)=8.32s   
     iterations.....................: 60926   100.992339/s
     vus............................: 69      min=69       max=500
     vus_max........................: 500     min=500      max=500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/60cfbad5-ad6e-40e7-d345-e3580305bd00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/aaa66ad0-d36c-44ec-c352-77e493967e00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f61bda46-cdd6-48d7-b71a-efe7a7961600/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 177489    ✗ 0    
     data_received..................: 5.2 GB  8.6 MB/s
     data_sent......................: 70 MB   116 kB/s
     http_req_blocked...............: avg=157.25µs min=1.47µs  med=4.02µs  max=204.46ms p(90)=6.13µs  p(95)=7µs     
     http_req_connecting............: avg=111.29µs min=0s      med=0s      max=58.99ms  p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=4.97s    min=2.61s   med=4.96s   max=9.22s    p(90)=5.61s   p(95)=5.8s    
       { expected_response:true }...: avg=4.97s    min=2.61s   med=4.96s   max=9.22s    p(90)=5.61s   p(95)=5.8s    
     http_req_failed................: 0.00%   ✓ 0         ✗ 59163
     http_req_receiving.............: avg=16.03ms  min=34.58µs med=76.3µs  max=1.86s    p(90)=2.89ms  p(95)=35.25ms 
     http_req_sending...............: avg=1.57ms   min=7.17µs  med=19.13µs max=1.55s    p(90)=38.72µs p(95)=149.05µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=4.95s    min=2.61s   med=4.95s   max=9.22s    p(90)=5.59s   p(95)=5.77s   
     http_reqs......................: 59163   98.024072/s
     iteration_duration.............: avg=5.08s    min=2.81s   med=5.06s   max=9.28s    p(90)=5.76s   p(95)=5.97s   
     iterations.....................: 59163   98.024072/s
     vus............................: 169     min=169     max=500
     vus_max........................: 500     min=500     max=500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b1f0aa69-57ca-4254-7a97-ece6d5fa1800/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/eba7b22e-1d28-498c-876b-d3b54baaa200/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3363abf4-1d72-4f65-c39e-cdeba8c36c00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  93% — ✓ 38153 / ✗ 2630
     ✗ no graphql errors
      ↳  93% — ✓ 38153 / ✗ 2630
     ✓ valid response structure

     checks.........................: 95.60% ✓ 114459   ✗ 5260 
     data_received..................: 3.4 GB 5.6 MB/s
     data_sent......................: 48 MB  80 kB/s
     http_req_blocked...............: avg=865.63µs min=1.37µs   med=3.38µs  max=204.04ms p(90)=6.34µs   p(95)=285.9µs 
     http_req_connecting............: avg=814.59µs min=0s       med=0s      max=183.09ms p(90)=0s       p(95)=209.28µs
     http_req_duration..............: avg=7.35s    min=732.95ms med=3.76s   max=1m0s     p(90)=4.8s     p(95)=59.99s  
       { expected_response:true }...: avg=3.72s    min=732.95ms med=3.7s    max=59.31s   p(90)=4.47s    p(95)=4.71s   
     http_req_failed................: 6.44%  ✓ 2630     ✗ 38153
     http_req_receiving.............: avg=777.17µs min=0s       med=89.64µs max=251.12ms p(90)=150.24µs p(95)=456.59µs
     http_req_sending...............: avg=402.43µs min=7.74µs   med=18µs    max=225.22ms p(90)=35.05µs  p(95)=110.63µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=7.34s    min=732.84ms med=3.76s   max=1m0s     p(90)=4.8s     p(95)=59.99s  
     http_reqs......................: 40783  67.64956/s
     iteration_duration.............: avg=7.36s    min=742.79ms med=3.77s   max=1m0s     p(90)=4.82s    p(95)=1m0s    
     iterations.....................: 40783  67.64956/s
     vus............................: 117    min=117    max=500
     vus_max........................: 500    min=500    max=500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/bfac59b7-ea1f-444f-a1cb-1c6a093cae00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9f13effb-6e30-4055-4e52-dcffae4b7e00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7e694815-effc-4baf-ea5f-1dcc24805200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 23838     ✗ 0    
     data_received..................: 697 MB  1.1 MB/s
     data_sent......................: 9.6 MB  15 kB/s
     http_req_blocked...............: avg=60.7µs   min=1.35µs  med=3.76µs   max=50.95ms p(90)=5.69µs   p(95)=80.09µs 
     http_req_connecting............: avg=30.72µs  min=0s      med=0s       max=18.07ms p(90)=0s       p(95)=51.05µs 
     http_req_duration..............: avg=38.4s    min=11.03s  med=39.59s   max=44.13s  p(90)=40.25s   p(95)=41.53s  
       { expected_response:true }...: avg=38.4s    min=11.03s  med=39.59s   max=44.13s  p(90)=40.25s   p(95)=41.53s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 7946 
     http_req_receiving.............: avg=130.61µs min=46.89µs med=105.83µs max=17.09ms p(90)=144.91µs p(95)=163.46µs
     http_req_sending...............: avg=34.64µs  min=8.25µs  med=20.91µs  max=16.48ms p(90)=29.44µs  p(95)=33.74µs 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=38.4s    min=11.03s  med=39.59s   max=44.13s  p(90)=40.25s   p(95)=41.53s  
     http_reqs......................: 7946    12.612637/s
     iteration_duration.............: avg=38.41s   min=11.04s  med=39.59s   max=44.14s  p(90)=40.25s   p(95)=41.54s  
     iterations.....................: 7946    12.612637/s
     vus............................: 121     min=121     max=500
     vus_max........................: 500     min=500     max=500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/18878598-474b-455d-61a8-7658a2eb9d00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/da1ce1ed-ae34-46f2-3cff-143590bb0600/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/dd3da25d-b9de-461e-248c-14eacddba900/public" alt="HTTP Overview" />


  </details>