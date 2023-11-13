## Overview for: `federation-v1/constant-vus-subgraphs-delay`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. It's being executed with a constant amount of VUs over a fixed amount of time. It measure things like memory usage, CPU usage, average RPS. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was running 300 VUs over 600s


### Comparison


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/633a1c95-b75c-4e86-dbad-3a2c312afb00/public" alt="Comparison" />


| Gateway             | RPS ⬇️ |        Requests         |          Duration          | Notes                                                                       |
| :------------------ | :----: | :---------------------: | :------------------------: | :-------------------------------------------------------------------------- |
| wundergraph         |  188   | 113316 total, 0 failed  |  avg: 1331ms, p95: 2096ms  | ✅                                                                           |
| apollo-router       |  183   | 110298 total, 0 failed  |  avg: 1127ms, p95: 2341ms  | ✅                                                                           |
| mesh-supergraph-bun |  178   | 107352 total, 0 failed  |  avg: 1416ms, p95: 2419ms  | ✅                                                                           |
| mesh-supergraph     |   92   |  55559 total, 0 failed  |  avg: 3184ms, p95: 3824ms  | ✅                                                                           |
| apollo-server       |   60   | 36310 total, 138 failed |  avg: 4962ms, p95: 6494ms  | ❌ 138 failed requests, 138 non-200 responses, 138 unexpected GraphQL errors |
| mercurius           |   12   |  7822 total, 0 failed   | avg: 23456ms, p95: 24511ms | ✅                                                                           |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 339948     ✗ 0     
     data_received..................: 9.9 GB  17 MB/s
     data_sent......................: 135 MB  224 kB/s
     http_req_blocked...............: avg=89.75µs min=1.32µs   med=2.94µs  max=834.46ms p(90)=4.48µs   p(95)=5.39µs  
     http_req_connecting............: avg=15.53µs min=0s       med=0s      max=43.72ms  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=1.33s   min=569.14ms med=1.25s   max=4.74s    p(90)=1.81s    p(95)=2.09s   
       { expected_response:true }...: avg=1.33s   min=569.14ms med=1.25s   max=4.74s    p(90)=1.81s    p(95)=2.09s   
     http_req_failed................: 0.00%   ✓ 0          ✗ 113316
     http_req_receiving.............: avg=140ms   min=29.73µs  med=78.83µs max=3.5s     p(90)=569.05ms p(95)=911.16ms
     http_req_sending...............: avg=8.16ms  min=8.05µs   med=13.44µs max=2.19s    p(90)=29.29µs  p(95)=149.57µs
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=1.18s   min=569.01ms med=1.17s   max=2.43s    p(90)=1.44s    p(95)=1.53s   
     http_reqs......................: 113316  188.493429/s
     iteration_duration.............: avg=1.58s   min=582.68ms med=1.46s   max=5.58s    p(90)=2.34s    p(95)=2.62s   
     iterations.....................: 113316  188.493429/s
     vus............................: 5       min=5        max=300 
     vus_max........................: 300     min=300      max=300 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/dd4098ce-fa5b-476e-486a-b7f99419d400/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/39a878af-51b8-4dc9-0e0f-3863cfd26b00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/316442ae-9947-42f7-3091-fbae19207a00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 330894     ✗ 0     
     data_received..................: 9.7 GB  16 MB/s
     data_sent......................: 131 MB  218 kB/s
     http_req_blocked...............: avg=246.94µs min=1.21µs   med=3.22µs   max=2.2s   p(90)=5.14µs  p(95)=6.06µs
     http_req_connecting............: avg=94.32µs  min=0s       med=0s       max=2.2s   p(90)=0s      p(95)=0s    
     http_req_duration..............: avg=1.12s    min=248.29ms med=951.74ms max=6.53s  p(90)=1.95s   p(95)=2.34s 
       { expected_response:true }...: avg=1.12s    min=248.29ms med=951.74ms max=6.53s  p(90)=1.95s   p(95)=2.34s 
     http_req_failed................: 0.00%   ✓ 0          ✗ 110298
     http_req_receiving.............: avg=278.81ms min=25.32µs  med=78.5µs   max=5.58s  p(90)=1.1s    p(95)=1.52s 
     http_req_sending...............: avg=16.83ms  min=7.78µs   med=14.22µs  max=4.59s  p(90)=37.88µs p(95)=8.79ms
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s     p(90)=0s      p(95)=0s    
     http_req_waiting...............: avg=831.52ms min=248.23ms med=768.55ms max=3.52s  p(90)=1.21s   p(95)=1.32s 
     http_reqs......................: 110298  183.543894/s
     iteration_duration.............: avg=1.63s    min=257.63ms med=1.37s    max=11.49s p(90)=2.98s   p(95)=3.52s 
     iterations.....................: 110298  183.543894/s
     vus............................: 2       min=2        max=300 
     vus_max........................: 300     min=300      max=300 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6e2cb495-ca0e-456c-d64d-431ad9e91300/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/68fd820b-efce-43b0-1feb-dde9d5a23f00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d2a3b87d-8c76-4493-896d-ed1d53ca0c00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 322056     ✗ 0     
     data_received..................: 9.4 GB  16 MB/s
     data_sent......................: 127 MB  212 kB/s
     http_req_blocked...............: avg=162.15µs min=1.43µs   med=3.52µs  max=1.61s p(90)=5.9µs   p(95)=6.88µs  
     http_req_connecting............: avg=55µs     min=0s       med=0s      max=1.61s p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=1.41s    min=102.32ms med=1.33s   max=5.69s p(90)=2.18s   p(95)=2.41s   
       { expected_response:true }...: avg=1.41s    min=102.32ms med=1.33s   max=5.69s p(90)=2.18s   p(95)=2.41s   
     http_req_failed................: 0.00%   ✓ 0          ✗ 107352
     http_req_receiving.............: avg=115.35ms min=28.57µs  med=77.02µs max=4.61s p(90)=371.2ms p(95)=849.09ms
     http_req_sending...............: avg=6.58ms   min=7.82µs   med=15.88µs max=3.59s p(90)=39.78µs p(95)=231.3µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s    p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=1.29s    min=102.22ms med=1.23s   max=3.38s p(90)=2s      p(95)=2.18s   
     http_reqs......................: 107352  178.506429/s
     iteration_duration.............: avg=1.67s    min=112.06ms med=1.58s   max=9.75s p(90)=2.56s   p(95)=2.95s   
     iterations.....................: 107352  178.506429/s
     vus............................: 81      min=81       max=300 
     vus_max........................: 300     min=300      max=300 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/337f9b7c-c7f3-461c-664a-c93376934900/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/89f820a6-2232-4298-2ca8-f8f363d92200/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7d3fdd18-bbff-4333-071b-6ea2ba3d1f00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 166677    ✗ 0    
     data_received..................: 4.9 GB  8.1 MB/s
     data_sent......................: 66 MB   110 kB/s
     http_req_blocked...............: avg=42.1µs   min=1.48µs  med=3.96µs  max=103.02ms p(90)=6.03µs  p(95)=6.98µs  
     http_req_connecting............: avg=20.95µs  min=0s      med=0s      max=21.04ms  p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=3.18s    min=1.42s   med=3.17s   max=7.92s    p(90)=3.66s   p(95)=3.82s   
       { expected_response:true }...: avg=3.18s    min=1.42s   med=3.17s   max=7.92s    p(90)=3.66s   p(95)=3.82s   
     http_req_failed................: 0.00%   ✓ 0         ✗ 55559
     http_req_receiving.............: avg=6.83ms   min=34.09µs med=84.1µs  max=903.83ms p(90)=3.1ms   p(95)=17.69ms 
     http_req_sending...............: avg=787.97µs min=8.2µs   med=18.74µs max=617.83ms p(90)=37.21µs p(95)=114.29µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=3.17s    min=1.42s   med=3.16s   max=7.92s    p(90)=3.65s   p(95)=3.81s   
     http_reqs......................: 55559   92.230987/s
     iteration_duration.............: avg=3.24s    min=1.44s   med=3.23s   max=7.93s    p(90)=3.75s   p(95)=3.91s   
     iterations.....................: 55559   92.230987/s
     vus............................: 85      min=85      max=300
     vus_max........................: 300     min=300     max=300
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b0c18683-4801-4fab-4493-1c38d48a4e00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/17dab363-e68a-4d2d-b5e7-3ef4889bf100/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2383e24b-8d17-4337-04e9-78a496109700/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  99% — ✓ 36172 / ✗ 138
     ✗ no graphql errors
      ↳  99% — ✓ 36172 / ✗ 138
     ✓ valid response structure

     checks.........................: 99.74% ✓ 108516    ✗ 276  
     data_received..................: 3.2 GB 5.3 MB/s
     data_sent......................: 43 MB  71 kB/s
     http_req_blocked...............: avg=40.66µs  min=1.54µs   med=3.34µs   max=19.67ms  p(90)=4.94µs   p(95)=5.68µs  
     http_req_connecting............: avg=34.9µs   min=0s       med=0s       max=17.84ms  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=4.96s    min=811.6ms  med=4.57s    max=1m0s     p(90)=5.99s    p(95)=6.49s   
       { expected_response:true }...: avg=4.75s    min=811.6ms  med=4.56s    max=59.94s   p(90)=5.97s    p(95)=6.44s   
     http_req_failed................: 0.38%  ✓ 138       ✗ 36172
     http_req_receiving.............: avg=392.14µs min=0s       med=115.42µs max=101.93ms p(90)=189.17µs p(95)=403.14µs
     http_req_sending...............: avg=80.99µs  min=8.45µs   med=17.13µs  max=71.86ms  p(90)=31.38µs  p(95)=40.67µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=4.96s    min=811.48ms med=4.57s    max=1m0s     p(90)=5.99s    p(95)=6.49s   
     http_reqs......................: 36310  60.152912/s
     iteration_duration.............: avg=4.97s    min=821.36ms med=4.58s    max=1m0s     p(90)=6.01s    p(95)=6.51s   
     iterations.....................: 36310  60.152912/s
     vus............................: 109    min=109     max=300
     vus_max........................: 300    min=300     max=300
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/23517852-30a0-4714-bdd9-c0d4ce8ded00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8a3b2a72-962b-4cee-8830-228c54c7cf00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/17f258cd-18f4-4e93-4037-067fa492ad00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 23466    ✗ 0    
     data_received..................: 687 MB  1.1 MB/s
     data_sent......................: 9.3 MB  15 kB/s
     http_req_blocked...............: avg=219.1µs  min=1.52µs  med=3.85µs   max=45.6ms  p(90)=5.27µs  p(95)=6.36µs  
     http_req_connecting............: avg=191.95µs min=0s      med=0s       max=21.46ms p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=23.45s   min=7.21s   med=23.81s   max=26.26s  p(90)=24.32s  p(95)=24.51s  
       { expected_response:true }...: avg=23.45s   min=7.21s   med=23.81s   max=26.26s  p(90)=24.32s  p(95)=24.51s  
     http_req_failed................: 0.00%   ✓ 0        ✗ 7822 
     http_req_receiving.............: avg=159.25µs min=50.34µs med=122.46µs max=48.96ms p(90)=167.8µs p(95)=186.33µs
     http_req_sending...............: avg=44.26µs  min=8.54µs  med=21.51µs  max=4.18ms  p(90)=30.51µs p(95)=39.25µs 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=23.45s   min=7.21s   med=23.81s   max=26.26s  p(90)=24.32s  p(95)=24.51s  
     http_reqs......................: 7822    12.55149/s
     iteration_duration.............: avg=23.46s   min=7.22s   med=23.82s   max=26.26s  p(90)=24.32s  p(95)=24.51s  
     iterations.....................: 7822    12.55149/s
     vus............................: 7       min=7      max=300
     vus_max........................: 300     min=300    max=300
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c192692c-213f-465c-b1dd-0072b2606d00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/26f4b0eb-3997-4207-8549-0535844b7b00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a3f11799-2815-4aba-0258-ac99ebd67c00/public" alt="HTTP Overview" />


  </details>