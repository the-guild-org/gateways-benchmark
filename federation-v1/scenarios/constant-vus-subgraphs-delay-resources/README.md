## Overview for: `federation-v1/constant-vus-subgraphs-delay-resources`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. It's being executed with a constant amount of VUs over a fixed amount of time. It measure things like memory usage, CPU usage, average RPS. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was running 500 VUs over 600s


### Comparison


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/78c4db5d-be80-40ae-d430-61b1326ef100/public" alt="Comparison" />


| Gateway             | RPS ⬇️ |         Requests         |          Duration          | Notes                                                                          |
| :------------------ | :----: | :----------------------: | :------------------------: | :----------------------------------------------------------------------------- |
| cosmo               |  191   |  115590 total, 0 failed  |  avg: 1943ms, p95: 3164ms  | ✅                                                                              |
| wundergraph         |  185   |  111469 total, 0 failed  |  avg: 1884ms, p95: 3513ms  | ✅                                                                              |
| apollo-router       |  183   |  110183 total, 0 failed  |  avg: 1651ms, p95: 3471ms  | ✅                                                                              |
| mesh-supergraph-bun |  180   |  108750 total, 0 failed  |  avg: 2037ms, p95: 3877ms  | ✅                                                                              |
| mesh-supergraph     |   97   |  59069 total, 0 failed   |  avg: 4982ms, p95: 5986ms  | ✅                                                                              |
| apollo-server       |   53   | 32442 total, 3020 failed | avg: 9240ms, p95: 60000ms  | ❌ 3020 failed requests, 3020 non-200 responses, 3020 unexpected GraphQL errors |
| mercurius           |   12   |   7919 total, 0 failed   | avg: 38542ms, p95: 41674ms | ✅                                                                              |



<details>
  <summary>Summary for: `cosmo`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 346770     ✗ 0     
     data_received..................: 10 GB   17 MB/s
     data_sent......................: 137 MB  228 kB/s
     http_req_blocked...............: avg=447.16µs min=1.24µs   med=2.86µs  max=2.47s  p(90)=4.36µs   p(95)=5.33µs 
     http_req_connecting............: avg=202.68µs min=0s       med=0s      max=2.47s  p(90)=0s       p(95)=0s     
     http_req_duration..............: avg=1.94s    min=598.36ms med=1.84s   max=7.86s  p(90)=2.69s    p(95)=3.16s  
       { expected_response:true }...: avg=1.94s    min=598.36ms med=1.84s   max=7.86s  p(90)=2.69s    p(95)=3.16s  
     http_req_failed................: 0.00%   ✓ 0          ✗ 115590
     http_req_receiving.............: avg=197.84ms min=27.55µs  med=69.26µs max=6.04s  p(90)=795.43ms p(95)=1.43s  
     http_req_sending...............: avg=22.29ms  min=7.36µs   med=13.05µs max=3.87s  p(90)=32.28µs  p(95)=15.36ms
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s     p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=1.72s    min=598.29ms med=1.71s   max=4.85s  p(90)=2.22s    p(95)=2.39s  
     http_reqs......................: 115590  191.943784/s
     iteration_duration.............: avg=2.59s    min=651.72ms med=2.32s   max=12.09s p(90)=4.04s    p(95)=4.68s  
     iterations.....................: 115590  191.943784/s
     vus............................: 2       min=2        max=500 
     vus_max........................: 500     min=500      max=500 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/483839b4-5619-4c2b-8912-76a8551db000/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f9fe2ddc-0a6e-44a7-ee32-036ee52c8b00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/373e42c3-0a2a-4497-fdcc-dd60e0e78200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 334407     ✗ 0     
     data_received..................: 9.8 GB  16 MB/s
     data_sent......................: 132 MB  220 kB/s
     http_req_blocked...............: avg=653.96µs min=1.36µs   med=3.17µs  max=2.45s  p(90)=5.25µs p(95)=6.46µs 
     http_req_connecting............: avg=346.94µs min=0s       med=0s      max=1.68s  p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=1.88s    min=540.4ms  med=1.7s    max=8.17s  p(90)=2.95s  p(95)=3.51s  
       { expected_response:true }...: avg=1.88s    min=540.4ms  med=1.7s    max=8.17s  p(90)=2.95s  p(95)=3.51s  
     http_req_failed................: 0.00%   ✓ 0          ✗ 111469
     http_req_receiving.............: avg=327.81ms min=23.96µs  med=82.46µs max=7.15s  p(90)=1.4s   p(95)=2.02s  
     http_req_sending...............: avg=24.98ms  min=7.69µs   med=13.97µs max=4.62s  p(90)=37µs   p(95)=11.82ms
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s     p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=1.53s    min=540.33ms med=1.47s   max=4.06s  p(90)=2.13s  p(95)=2.31s  
     http_reqs......................: 111469  185.291706/s
     iteration_duration.............: avg=2.67s    min=550.29ms med=2.33s   max=13.52s p(90)=4.64s  p(95)=5.43s  
     iterations.....................: 111469  185.291706/s
     vus............................: 278     min=278      max=500 
     vus_max........................: 500     min=500      max=500 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/43fcae25-88f1-4b7b-3737-b4f0f859c300/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/52ec5a66-accc-4f92-2d6d-b2f3b8c9fa00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a4db3390-3eb1-4a35-4be3-a7aee35ec800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 330549     ✗ 0     
     data_received..................: 9.7 GB  16 MB/s
     data_sent......................: 131 MB  217 kB/s
     http_req_blocked...............: avg=1.87ms   min=1.29µs   med=3.25µs  max=6.7s   p(90)=5.23µs  p(95)=6.34µs  
     http_req_connecting............: avg=1.35ms   min=0s       med=0s      max=6.7s   p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=1.65s    min=242.47ms med=1.46s   max=9.17s  p(90)=2.89s   p(95)=3.47s   
       { expected_response:true }...: avg=1.65s    min=242.47ms med=1.46s   max=9.17s  p(90)=2.89s   p(95)=3.47s   
     http_req_failed................: 0.00%   ✓ 0          ✗ 110183
     http_req_receiving.............: avg=380.35ms min=26.46µs  med=77.52µs max=8.46s  p(90)=1.65s   p(95)=2.31s   
     http_req_sending...............: avg=25.94ms  min=7.83µs   med=14.23µs max=6.75s  p(90)=33.77µs p(95)=214.97µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s     p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=1.24s    min=242.42ms med=1.18s   max=6.62s  p(90)=1.91s   p(95)=2.13s   
     http_reqs......................: 110183  183.022249/s
     iteration_duration.............: avg=2.7s     min=274.2ms  med=2.34s   max=14.77s p(90)=4.98s   p(95)=6s      
     iterations.....................: 110183  183.022249/s
     vus............................: 1       min=1        max=500 
     vus_max........................: 500     min=500      max=500 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/080be63c-213e-491f-c0ff-0823c6604e00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/85b9674d-91f0-485d-e1ec-f25712c94900/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f710def4-23ce-4fd7-1ab6-64053ce5f000/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 326250     ✗ 0     
     data_received..................: 9.5 GB  16 MB/s
     data_sent......................: 129 MB  214 kB/s
     http_req_blocked...............: avg=681.55µs min=1.2µs    med=3.2µs   max=3.33s  p(90)=5.15µs  p(95)=6.21µs  
     http_req_connecting............: avg=327.85µs min=0s       med=0s      max=3.14s  p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=2.03s    min=118.52ms med=1.87s   max=10.24s p(90)=3.36s   p(95)=3.87s   
       { expected_response:true }...: avg=2.03s    min=118.52ms med=1.87s   max=10.24s p(90)=3.36s   p(95)=3.87s   
     http_req_failed................: 0.00%   ✓ 0          ✗ 108750
     http_req_receiving.............: avg=304.38ms min=27µs     med=70.97µs max=8.24s  p(90)=1.28s   p(95)=2s      
     http_req_sending...............: avg=19.42ms  min=7.58µs   med=14.14µs max=6.2s   p(90)=35.01µs p(95)=517.77µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s     p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=1.71s    min=88ms     med=1.64s   max=5.23s  p(90)=2.7s    p(95)=3.12s   
     http_reqs......................: 108750  180.605267/s
     iteration_duration.............: avg=2.75s    min=135.61ms med=2.47s   max=16.64s p(90)=4.67s   p(95)=5.5s    
     iterations.....................: 108750  180.605267/s
     vus............................: 146     min=146      max=500 
     vus_max........................: 500     min=500      max=500 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6c7d96fe-b085-427c-c2d3-d9f329ae3800/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/57ceff99-66bc-45dc-bf17-d7e492c54d00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1a42d283-9684-416b-d028-bc66b7c97b00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 177207    ✗ 0    
     data_received..................: 5.2 GB  8.6 MB/s
     data_sent......................: 70 MB   116 kB/s
     http_req_blocked...............: avg=311.17µs min=1.68µs  med=3.86µs  max=714.19ms p(90)=5.99µs  p(95)=7.13µs  
     http_req_connecting............: avg=249.8µs  min=0s      med=0s      max=94.37ms  p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=4.98s    min=1.89s   med=4.98s   max=8.49s    p(90)=5.77s   p(95)=5.98s   
       { expected_response:true }...: avg=4.98s    min=1.89s   med=4.98s   max=8.49s    p(90)=5.77s   p(95)=5.98s   
     http_req_failed................: 0.00%   ✓ 0         ✗ 59069
     http_req_receiving.............: avg=17.55ms  min=34.79µs med=76.6µs  max=1.89s    p(90)=3.89ms  p(95)=52.77ms 
     http_req_sending...............: avg=1.77ms   min=8.86µs  med=17.35µs max=1.55s    p(90)=36.97µs p(95)=149.89µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=4.96s    min=1.89s   med=4.97s   max=8.39s    p(90)=5.74s   p(95)=5.94s   
     http_reqs......................: 59069   97.855945/s
     iteration_duration.............: avg=5.09s    min=1.91s   med=5.09s   max=9.46s    p(90)=5.92s   p(95)=6.17s   
     iterations.....................: 59069   97.855945/s
     vus............................: 152     min=152     max=500
     vus_max........................: 500     min=500     max=500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4f078311-946c-4b5d-74c2-625f3f5bef00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c766dccc-9a78-44d3-b589-f182fcc74200/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8d508e2b-a6b6-4bcb-3d5a-e660d6508200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  90% — ✓ 29422 / ✗ 3020
     ✗ no graphql errors
      ↳  90% — ✓ 29422 / ✗ 3020
     ✓ valid response structure

     checks.........................: 93.59% ✓ 88266     ✗ 6040 
     data_received..................: 2.6 GB 4.3 MB/s
     data_sent......................: 39 MB  64 kB/s
     http_req_blocked...............: avg=1.51ms   min=1.44µs   med=4.26µs   max=282.27ms p(90)=106.18µs p(95)=1.7ms   
     http_req_connecting............: avg=1.46ms   min=0s       med=0s       max=281.33ms p(90)=0s       p(95)=1.47ms  
     http_req_duration..............: avg=9.24s    min=849.73ms med=4.1s     max=1m0s     p(90)=5.77s    p(95)=1m0s    
       { expected_response:true }...: avg=4.02s    min=849.73ms med=4s       max=58.68s   p(90)=4.84s    p(95)=5.06s   
     http_req_failed................: 9.30%  ✓ 3020      ✗ 29422
     http_req_receiving.............: avg=482.58µs min=0s       med=140.33µs max=227.01ms p(90)=255.09µs p(95)=579.08µs
     http_req_sending...............: avg=416.24µs min=8.91µs   med=23.18µs  max=218.2ms  p(90)=60.79µs  p(95)=208.03µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=9.23s    min=849.62ms med=4.1s     max=1m0s     p(90)=5.77s    p(95)=59.99s  
     http_reqs......................: 32442  53.827319/s
     iteration_duration.............: avg=9.26s    min=860.44ms med=4.12s    max=1m0s     p(90)=5.79s    p(95)=1m0s    
     iterations.....................: 32442  53.827319/s
     vus............................: 78     min=78      max=500
     vus_max........................: 500    min=500     max=500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3bf02927-b27a-4d13-3bd8-f05634e8b800/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/dbf8c553-5afb-472a-b26e-147c80eacb00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/22a82247-8e4e-4db5-613e-74254490a600/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 23757     ✗ 0    
     data_received..................: 695 MB  1.1 MB/s
     data_sent......................: 9.5 MB  15 kB/s
     http_req_blocked...............: avg=2.79ms   min=1.57µs  med=3.82µs   max=88.59ms p(90)=5.53µs   p(95)=19.71ms 
     http_req_connecting............: avg=2.75ms   min=0s      med=0s       max=79.07ms p(90)=0s       p(95)=19.45ms 
     http_req_duration..............: avg=38.54s   min=11.47s  med=39.66s   max=43.98s  p(90)=40.24s   p(95)=41.67s  
       { expected_response:true }...: avg=38.54s   min=11.47s  med=39.66s   max=43.98s  p(90)=40.24s   p(95)=41.67s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 7919 
     http_req_receiving.............: avg=145.64µs min=44.72µs med=119.11µs max=17.64ms p(90)=165.23µs p(95)=189.31µs
     http_req_sending...............: avg=219.14µs min=9.17µs  med=20.56µs  max=29.33ms p(90)=32.09µs  p(95)=1.11ms  
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=38.54s   min=11.47s  med=39.66s   max=43.98s  p(90)=40.24s   p(95)=41.67s  
     http_reqs......................: 7919    12.569744/s
     iteration_duration.............: avg=38.55s   min=11.48s  med=39.67s   max=43.99s  p(90)=40.24s   p(95)=41.68s  
     iterations.....................: 7919    12.569744/s
     vus............................: 117     min=117     max=500
     vus_max........................: 500     min=500     max=500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3a6762ed-97e8-4e73-9e1d-d7c93a6ace00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1c45f3fb-666d-408f-d88b-d6de113dd700/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/fd1f881e-a3c5-4a02-5e1a-b75848dcfb00/public" alt="HTTP Overview" />


  </details>