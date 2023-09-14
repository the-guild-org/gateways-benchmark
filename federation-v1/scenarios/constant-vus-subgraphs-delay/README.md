## Overview for: `constant-vus-subgraphs-delay`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. It's being executed with a constant amount of VUs over a fixed amount of time. It measure things like memory usage, CPU usage, average RPS. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was running 300 VUs over 600s


### Comparison


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4c319e37-93d6-451b-84ba-879970fbde00/public" alt="Comparison" />


| Gateway         | RPS ⬇️ |        Requests        |          Duration          | Notes |
| :-------------- | :----: | :--------------------: | :------------------------: | :---- |
| wundergraph     |  194   | 117131 total, 0 failed |  avg: 1301ms, p95: 1998ms  | ✅     |
| apollo-router   |  185   | 111345 total, 0 failed |  avg: 1124ms, p95: 2329ms  | ✅     |
| mesh-bun        |   90   | 54599 total, 0 failed  |  avg: 3280ms, p95: 3785ms  | ✅     |
| mesh-supergraph |   82   | 49553 total, 0 failed  |  avg: 3598ms, p95: 4470ms  | ✅     |
| mesh            |   70   | 42526 total, 0 failed  |  avg: 4205ms, p95: 5366ms  | ✅     |
| apollo-server   |   64   | 38969 total, 0 failed  |  avg: 4619ms, p95: 6051ms  | ✅     |
| mercurius       |   12   |  7811 total, 0 failed  | avg: 23482ms, p95: 24625ms | ✅     |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 351393     ✗ 0     
     data_received..................: 10 GB   17 MB/s
     data_sent......................: 139 MB  231 kB/s
     http_req_blocked...............: avg=139.83µs min=962ns    med=2.73µs  max=1.09s   p(90)=4.14µs   p(95)=4.96µs  
     http_req_connecting............: avg=37.54µs  min=0s       med=0s      max=35.73ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=1.3s     min=566.47ms med=1.24s   max=5.16s   p(90)=1.71s    p(95)=1.99s   
       { expected_response:true }...: avg=1.3s     min=566.47ms med=1.24s   max=5.16s   p(90)=1.71s    p(95)=1.99s   
     http_req_failed................: 0.00%   ✓ 0          ✗ 117131
     http_req_receiving.............: avg=121.27ms min=26.2µs   med=72.33µs max=3.4s    p(90)=442.94ms p(95)=816.33ms
     http_req_sending...............: avg=7.54ms   min=6.93µs   med=12.81µs max=2.77s   p(90)=27.91µs  p(95)=164.1µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=1.17s    min=516.78ms med=1.16s   max=2.4s    p(90)=1.42s    p(95)=1.5s    
     http_reqs......................: 117131  194.755992/s
     iteration_duration.............: avg=1.53s    min=589.85ms med=1.42s   max=5.49s   p(90)=2.22s    p(95)=2.49s   
     iterations.....................: 117131  194.755992/s
     vus............................: 4       min=4        max=300 
     vus_max........................: 300     min=300      max=300 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b9f1da92-d682-4d2a-2254-15e43be18b00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c58e417d-2cf4-4ab4-d558-0b5b9b5b1b00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c5e978d1-baab-4089-04a4-d5320efd7b00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 334035     ✗ 0     
     data_received..................: 9.8 GB  16 MB/s
     data_sent......................: 132 MB  220 kB/s
     http_req_blocked...............: avg=241.2µs  min=1.14µs   med=2.98µs   max=3.83s  p(90)=5.05µs  p(95)=6.06µs 
     http_req_connecting............: avg=116.93µs min=0s       med=0s       max=3.83s  p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=1.12s    min=248.62ms med=945.96ms max=7.19s  p(90)=1.95s   p(95)=2.32s  
       { expected_response:true }...: avg=1.12s    min=248.62ms med=945.96ms max=7.19s  p(90)=1.95s   p(95)=2.32s  
     http_req_failed................: 0.00%   ✓ 0          ✗ 111345
     http_req_receiving.............: avg=278.14ms min=24.13µs  med=74.1µs   max=4.96s  p(90)=1.11s   p(95)=1.53s  
     http_req_sending...............: avg=15.63ms  min=6.41µs   med=13.64µs  max=4.57s  p(90)=38.34µs p(95)=11.24ms
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s     p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=830.07ms min=248.24ms med=768.11ms max=2.45s  p(90)=1.2s    p(95)=1.32s  
     http_reqs......................: 111345  185.287114/s
     iteration_duration.............: avg=1.61s    min=262.96ms med=1.35s    max=10.17s p(90)=2.94s   p(95)=3.51s  
     iterations.....................: 111345  185.287114/s
     vus............................: 300     min=300      max=300 
     vus_max........................: 300     min=300      max=300 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d6af3a4e-31e4-4077-3618-71c381207700/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/993a1277-a2ec-4bcd-87f5-c30003bdce00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f007c99f-ee98-4a73-2cfb-425ffe6bbf00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 163797    ✗ 0    
     data_received..................: 4.8 GB  7.9 MB/s
     data_sent......................: 65 MB   107 kB/s
     http_req_blocked...............: avg=34.88µs  min=1.3µs   med=2.72µs  max=151.42ms p(90)=4.39µs   p(95)=5.24µs 
     http_req_connecting............: avg=19.73µs  min=0s      med=0s      max=25.32ms  p(90)=0s       p(95)=0s     
     http_req_duration..............: avg=3.28s    min=1.39s   med=3.19s   max=6.86s    p(90)=3.58s    p(95)=3.78s  
       { expected_response:true }...: avg=3.28s    min=1.39s   med=3.19s   max=6.86s    p(90)=3.58s    p(95)=3.78s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 54599
     http_req_receiving.............: avg=6.95ms   min=30.27µs med=80.69µs max=1.69s    p(90)=324.98µs p(95)=1.92ms 
     http_req_sending...............: avg=492.09µs min=7.01µs  med=13.26µs max=393.09ms p(90)=25.87µs  p(95)=58.94µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s       p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=3.27s    min=1.39s   med=3.19s   max=6.79s    p(90)=3.57s    p(95)=3.76s  
     http_reqs......................: 54599   90.472557/s
     iteration_duration.............: avg=3.3s     min=1.4s    med=3.22s   max=6.88s    p(90)=3.62s    p(95)=3.84s  
     iterations.....................: 54599   90.472557/s
     vus............................: 42      min=42      max=300
     vus_max........................: 300     min=300     max=300
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/985ba627-a02d-4c96-ad42-644e6e898900/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3d54e84b-e6e1-414d-6ce2-2f4d879bf700/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/90aa160f-0dce-443c-88a0-ad2755466100/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 148659    ✗ 0    
     data_received..................: 4.3 GB  7.2 MB/s
     data_sent......................: 59 MB   98 kB/s
     http_req_blocked...............: avg=31.92µs  min=1.32µs  med=3.44µs  max=73.2ms   p(90)=5.06µs  p(95)=5.86µs 
     http_req_connecting............: avg=15µs     min=0s      med=0s      max=32.5ms   p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=3.59s    min=1.91s   med=3.5s    max=7.86s    p(90)=4.25s   p(95)=4.46s  
       { expected_response:true }...: avg=3.59s    min=1.91s   med=3.5s    max=7.86s    p(90)=4.25s   p(95)=4.46s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 49553
     http_req_receiving.............: avg=5.24ms   min=29.47µs med=81.08µs max=612.76ms p(90)=2.54ms  p(95)=14.04ms
     http_req_sending...............: avg=528.29µs min=7.41µs  med=16.38µs max=489.26ms p(90)=31.19µs p(95)=56.05µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s       p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=3.59s    min=1.81s   med=3.5s    max=7.86s    p(90)=4.24s   p(95)=4.46s  
     http_reqs......................: 49553   82.256382/s
     iteration_duration.............: avg=3.64s    min=2.12s   med=3.55s   max=7.88s    p(90)=4.29s   p(95)=4.52s  
     iterations.....................: 49553   82.256382/s
     vus............................: 96      min=96      max=300
     vus_max........................: 300     min=300     max=300
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7a6682e1-d1fc-407e-c83c-6e18b87f8f00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/71660673-6dd9-476c-afd1-bda634fe0e00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ab58ed0d-4ab4-41f4-bfa6-16b9b45d0b00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 127578    ✗ 0    
     data_received..................: 3.7 GB  6.2 MB/s
     data_sent......................: 51 MB   84 kB/s
     http_req_blocked...............: avg=139.03µs min=1.27µs  med=4.1µs    max=124.36ms p(90)=5.95µs p(95)=6.77µs 
     http_req_connecting............: avg=120.54µs min=0s      med=0s       max=36.02ms  p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=4.2s     min=1.77s   med=4.2s     max=8.47s    p(90)=5.12s  p(95)=5.36s  
       { expected_response:true }...: avg=4.2s     min=1.77s   med=4.2s     max=8.47s    p(90)=5.12s  p(95)=5.36s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 42526
     http_req_receiving.............: avg=3.92ms   min=33.24µs med=100.66µs max=524.52ms p(90)=2.21ms p(95)=11.95ms
     http_req_sending...............: avg=395.77µs min=7.66µs  med=20.58µs  max=394.18ms p(90)=35.4µs p(95)=69.42µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s       p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=4.2s     min=1.77s   med=4.2s     max=8.47s    p(90)=5.12s  p(95)=5.36s  
     http_reqs......................: 42526   70.604033/s
     iteration_duration.............: avg=4.24s    min=1.79s   med=4.24s    max=8.5s     p(90)=5.16s  p(95)=5.41s  
     iterations.....................: 42526   70.604033/s
     vus............................: 39      min=39      max=300
     vus_max........................: 300     min=300     max=300
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e707b190-bc13-4e8c-3598-49ef4d87c100/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f42e79a6-d81d-4c3a-ab21-446fd0e54300/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/40d49dee-e254-49f4-5ca8-cfc1b9016500/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 116907    ✗ 0    
     data_received..................: 3.4 GB  5.7 MB/s
     data_sent......................: 46 MB   77 kB/s
     http_req_blocked...............: avg=41.2µs   min=1.41µs  med=3.64µs  max=22.98ms  p(90)=5.56µs   p(95)=6.41µs  
     http_req_connecting............: avg=34.84µs  min=0s      med=0s      max=22.95ms  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=4.61s    min=2.54s   med=4.59s   max=8.04s    p(90)=5.7s     p(95)=6.05s   
       { expected_response:true }...: avg=4.61s    min=2.54s   med=4.59s   max=8.04s    p(90)=5.7s     p(95)=6.05s   
     http_req_failed................: 0.00%   ✓ 0         ✗ 38969
     http_req_receiving.............: avg=973.08µs min=33.05µs med=94.19µs max=337.1ms  p(90)=162.03µs p(95)=540.73µs
     http_req_sending...............: avg=108.4µs  min=7.99µs  med=18.06µs max=178.73ms p(90)=32.53µs  p(95)=43.76µs 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=4.61s    min=2.54s   med=4.59s   max=8.04s    p(90)=5.7s     p(95)=6.04s   
     http_reqs......................: 38969   64.580554/s
     iteration_duration.............: avg=4.63s    min=2.56s   med=4.61s   max=8.05s    p(90)=5.72s    p(95)=6.07s   
     iterations.....................: 38969   64.580554/s
     vus............................: 84      min=84      max=300
     vus_max........................: 300     min=300     max=300
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/83614517-6cb4-4b27-8c2b-b7adf0c8f300/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/adf108e7-89f3-42d0-e2a9-fccd59438d00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1ceccfcd-e5ef-4d52-ea9c-5710ce5d5a00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 23433     ✗ 0    
     data_received..................: 686 MB  1.1 MB/s
     data_sent......................: 9.3 MB  15 kB/s
     http_req_blocked...............: avg=331.99µs min=1.54µs  med=3.93µs   max=23.68ms p(90)=5.45µs   p(95)=6.66µs  
     http_req_connecting............: avg=317.87µs min=0s      med=0s       max=23.49ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=23.48s   min=6.94s   med=23.82s   max=26.54s  p(90)=24.41s   p(95)=24.62s  
       { expected_response:true }...: avg=23.48s   min=6.94s   med=23.82s   max=26.54s  p(90)=24.41s   p(95)=24.62s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 7811 
     http_req_receiving.............: avg=131.27µs min=42.62µs med=113.05µs max=14.03ms p(90)=150.46µs p(95)=166.71µs
     http_req_sending...............: avg=52.83µs  min=8.9µs   med=22.63µs  max=3.55ms  p(90)=31.25µs  p(95)=38µs    
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=23.48s   min=6.94s   med=23.82s   max=26.54s  p(90)=24.41s   p(95)=24.62s  
     http_reqs......................: 7811    12.540275/s
     iteration_duration.............: avg=23.48s   min=6.94s   med=23.83s   max=26.55s  p(90)=24.41s   p(95)=24.63s  
     iterations.....................: 7811    12.540275/s
     vus............................: 18      min=18      max=300
     vus_max........................: 300     min=300     max=300
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ed09c3fc-9d3c-4e26-e232-96d9f86afd00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6490cbb3-710e-4938-19e9-2123448ba000/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d4b9bb5f-d6e2-42d1-af60-f28c96ec6500/public" alt="HTTP Overview" />


  </details>