## Overview for: `fed-v1-ramping-vus`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. We are running a heavy load of concurrent VUs to measure response time and other stats, during stress. It measure things like memory usage, CPU usage, response times. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was trying to reach 1500 concurrent VUs over 300s


### Comparison


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e6cee0bc-c7d1-4b3c-e39d-7bfba5121600/public" alt="Comparison" />


| Gateway         | duration(p95)⬇️ |  RPS  |        Requests        |                       Durations                        | Notes                                                                    |
| :-------------- | :-------------: | :---: | :--------------------: | :----------------------------------------------------: | :----------------------------------------------------------------------- |
| apollo-router   |     5267ms      |  170  | 53005 total, 0 failed  |  avg: 2096ms, p95: 5268ms, max: 21488ms, med: 1792ms   | ✅                                                                        |
| wundergraph     |     7093ms      |  168  | 52217 total, 0 failed  |  avg: 2208ms, p95: 7093ms, max: 21377ms, med: 1572ms   | ✅                                                                        |
| mesh-supergraph |     15634ms     |  91   | 28927 total, 0 failed  |  avg: 8443ms, p95: 15634ms, max: 20850ms, med: 8339ms  | ✅                                                                        |
| mesh            |     17544ms     |  82   | 26069 total, 0 failed  |  avg: 9413ms, p95: 17545ms, max: 25180ms, med: 9264ms  | ✅                                                                        |
| mesh-bun        |     17690ms     |  90   | 28703 total, 0 failed  |  avg: 8598ms, p95: 17691ms, max: 39555ms, med: 7862ms  | ✅                                                                        |
| mercurius       |     35411ms     |  45   | 14306 total, 0 failed  | avg: 17151ms, p95: 35411ms, max: 37669ms, med: 16315ms | ✅                                                                        |
| apollo-server   |     36485ms     |  64   | 20622 total, 72 failed | avg: 12160ms, p95: 36485ms, max: 60016ms, med: 5461ms  | ❌ 72 failed requests, 72 non-200 responses, 72 unexpected GraphQL errors |



<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 159015     ✗ 0     
     data_received..................: 4.6 GB  15 MB/s
     data_sent......................: 63 MB   203 kB/s
     http_req_blocked...............: avg=43.16ms  min=1.58µs  med=3.74µs  max=11.73s p(90)=6.4µs    p(95)=11.66µs 
     http_req_connecting............: avg=40.95ms  min=0s      med=0s      max=11.73s p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=2.09s    min=6.73ms  med=1.79s   max=21.48s p(90)=4.2s     p(95)=5.26s   
       { expected_response:true }...: avg=2.09s    min=6.73ms  med=1.79s   max=21.48s p(90)=4.2s     p(95)=5.26s   
     http_req_failed................: 0.00%   ✓ 0          ✗ 53005 
     http_req_receiving.............: avg=536.95ms min=26.04µs med=81.14µs max=17.76s p(90)=1.92s    p(95)=3.29s   
     http_req_sending...............: avg=68.51ms  min=6.74µs  med=16.22µs max=11.59s p(90)=170.31µs p(95)=218.37ms
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s     p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=1.49s    min=6.63ms  med=1.23s   max=7.23s  p(90)=3.22s    p(95)=3.64s   
     http_reqs......................: 53005   170.981887/s
     iteration_duration.............: avg=4.44s    min=12.09ms med=3.53s   max=39.53s p(90)=9.62s    p(95)=11.82s  
     iterations.....................: 53005   170.981887/s
     vus............................: 5       min=5        max=1497
     vus_max........................: 1500    min=1500     max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/bf049ac6-19b1-481d-0967-e11ff6c60900/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6802f375-f940-4cb4-d5fd-b8c55b610b00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d8684fad-a716-462c-170a-314609352200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 156651     ✗ 0     
     data_received..................: 4.6 GB  15 MB/s
     data_sent......................: 62 MB   200 kB/s
     http_req_blocked...............: avg=47.33ms  min=1.29µs  med=3.37µs  max=14.43s p(90)=5.42µs   p(95)=10.79µs 
     http_req_connecting............: avg=45.36ms  min=0s      med=0s      max=14.43s p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=2.2s     min=5.35ms  med=1.57s   max=21.37s p(90)=4.65s    p(95)=7.09s   
       { expected_response:true }...: avg=2.2s     min=5.35ms  med=1.57s   max=21.37s p(90)=4.65s    p(95)=7.09s   
     http_req_failed................: 0.00%   ✓ 0          ✗ 52217 
     http_req_receiving.............: avg=648.94ms min=22.23µs med=75.92µs max=15.78s p(90)=2.03s    p(95)=4.45s   
     http_req_sending...............: avg=68.44ms  min=7.73µs  med=14.85µs max=15.59s p(90)=142.83µs p(95)=201.68ms
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s     p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=1.49s    min=5.25ms  med=1.19s   max=10.56s p(90)=3.29s    p(95)=3.93s   
     http_reqs......................: 52217   168.438472/s
     iteration_duration.............: avg=4.5s     min=10.89ms med=3.31s   max=42s    p(90)=10.13s   p(95)=13.06s  
     iterations.....................: 52217   168.438472/s
     vus............................: 5       min=5        max=1499
     vus_max........................: 1500    min=1500     max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f94fbb65-b20a-4d0d-cdae-ad6c5aa0fb00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/fc86af28-ade5-419b-5247-e212e6b76f00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c3207fbc-a067-4fad-d54e-a56972460500/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 86781     ✗ 0     
     data_received..................: 2.5 GB  8.1 MB/s
     data_sent......................: 34 MB   109 kB/s
     http_req_blocked...............: avg=1.94ms  min=1.66µs   med=4.21µs  max=690.06ms p(90)=7.2µs  p(95)=162.74µs
     http_req_connecting............: avg=1.86ms  min=0s       med=0s      max=689.94ms p(90)=0s     p(95)=104.92µs
     http_req_duration..............: avg=8.44s   min=322.71ms med=8.33s   max=20.85s   p(90)=14.69s p(95)=15.63s  
       { expected_response:true }...: avg=8.44s   min=322.71ms med=8.33s   max=20.85s   p(90)=14.69s p(95)=15.63s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 28927 
     http_req_receiving.............: avg=15.38ms min=30.34µs  med=81.86µs max=1.61s    p(90)=2.19ms p(95)=17.08ms 
     http_req_sending...............: avg=2.69ms  min=9.32µs   med=19.91µs max=1.32s    p(90)=46.9µs p(95)=171.62µs
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s      max=0s       p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=8.42s   min=272.06ms med=8.32s   max=20.8s    p(90)=14.69s p(95)=15.6s   
     http_reqs......................: 28927   91.814287/s
     iteration_duration.............: avg=8.53s   min=386.16ms med=8.46s   max=21.82s   p(90)=14.77s p(95)=15.76s  
     iterations.....................: 28927   91.814287/s
     vus............................: 170     min=52      max=1500
     vus_max........................: 1500    min=1500    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/58d6d154-ce57-41b4-91ce-809362fc2d00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/023e84a0-4fde-463f-aac4-d04b301e7b00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/eed27049-4343-4518-c9fc-503cf2a02a00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 78207     ✗ 0     
     data_received..................: 2.3 GB  7.2 MB/s
     data_sent......................: 31 MB   98 kB/s
     http_req_blocked...............: avg=1.55ms min=1.73µs   med=4.4µs   max=534.6ms  p(90)=7.32µs  p(95)=179.31µs
     http_req_connecting............: avg=1.52ms min=0s       med=0s      max=534.52ms p(90)=0s      p(95)=120.66µs
     http_req_duration..............: avg=9.41s  min=456.94ms med=9.26s   max=25.17s   p(90)=16.26s  p(95)=17.54s  
       { expected_response:true }...: avg=9.41s  min=456.94ms med=9.26s   max=25.17s   p(90)=16.26s  p(95)=17.54s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 26069 
     http_req_receiving.............: avg=9.22ms min=34.52µs  med=87.18µs max=1.92s    p(90)=1.03ms  p(95)=9.21ms  
     http_req_sending...............: avg=2.1ms  min=8.67µs   med=21.86µs max=1.25s    p(90)=50.13µs p(95)=170.4µs 
     http_req_tls_handshaking.......: avg=0s     min=0s       med=0s      max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=9.4s   min=456.85ms med=9.24s   max=25.17s   p(90)=16.23s  p(95)=17.54s  
     http_reqs......................: 26069   82.416765/s
     iteration_duration.............: avg=9.48s  min=475.91ms med=9.32s   max=25.19s   p(90)=16.38s  p(95)=17.62s  
     iterations.....................: 26069   82.416765/s
     vus............................: 191     min=52      max=1499
     vus_max........................: 1500    min=1500    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/61081e1a-6a5d-4e30-b150-71dd0af42a00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e02d3600-a6db-4fe2-0085-bd868ae4ed00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a81b45fd-348b-406c-25f9-b3ddf0bb6500/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 86109     ✗ 0     
     data_received..................: 2.5 GB  8.0 MB/s
     data_sent......................: 34 MB   108 kB/s
     http_req_blocked...............: avg=954.16µs min=1.48µs   med=3.84µs   max=364.58ms p(90)=7.24µs   p(95)=168.98µs
     http_req_connecting............: avg=905.24µs min=0s       med=0s       max=341.82ms p(90)=0s       p(95)=109.26µs
     http_req_duration..............: avg=8.59s    min=157.67ms med=7.86s    max=39.55s   p(90)=15.57s   p(95)=17.69s  
       { expected_response:true }...: avg=8.59s    min=157.67ms med=7.86s    max=39.55s   p(90)=15.57s   p(95)=17.69s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 28703 
     http_req_receiving.............: avg=131.32ms min=28.86µs  med=106.82µs max=12.24s   p(90)=611.63µs p(95)=110.68ms
     http_req_sending...............: avg=1.24ms   min=8.18µs   med=17.92µs  max=609.2ms  p(90)=49.97µs  p(95)=139.19µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=8.46s    min=156.89ms med=7.77s    max=39.55s   p(90)=15.17s   p(95)=17.07s  
     http_reqs......................: 28703   90.640413/s
     iteration_duration.............: avg=8.64s    min=169.73ms med=7.88s    max=39.57s   p(90)=15.71s   p(95)=17.79s  
     iterations.....................: 28703   90.640413/s
     vus............................: 6       min=6       max=1500
     vus_max........................: 1500    min=1500    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8f4facc8-db97-4ef3-b5f7-e8b6a5365500/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/78c5f543-6ce9-45b4-98ce-4d7d89246000/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/383c3e4f-af80-4c65-8b77-eeff48f7db00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 42918     ✗ 0     
     data_received..................: 1.3 GB  4.0 MB/s
     data_sent......................: 17 MB   54 kB/s
     http_req_blocked...............: avg=70.28µs  min=1.48µs   med=3.8µs   max=142.56ms p(90)=152.17µs p(95)=198.12µs
     http_req_connecting............: avg=58.18µs  min=0s       med=0s      max=142.49ms p(90)=100.74µs p(95)=133.52µs
     http_req_duration..............: avg=17.15s   min=750.22ms med=16.31s  max=37.66s   p(90)=32.23s   p(95)=35.41s  
       { expected_response:true }...: avg=17.15s   min=750.22ms med=16.31s  max=37.66s   p(90)=32.23s   p(95)=35.41s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 14306 
     http_req_receiving.............: avg=318.85µs min=31.85µs  med=97.86µs max=190.74ms p(90)=143.88µs p(95)=206.26µs
     http_req_sending...............: avg=47.9µs   min=8.52µs   med=21.33µs max=106.37ms p(90)=39.58µs  p(95)=52.73µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=17.15s   min=749.6ms  med=16.31s  max=37.66s   p(90)=32.23s   p(95)=35.41s  
     http_reqs......................: 14306   45.521311/s
     iteration_duration.............: avg=17.16s   min=760.51ms med=16.32s  max=37.68s   p(90)=32.24s   p(95)=35.42s  
     iterations.....................: 14306   45.521311/s
     vus............................: 23      min=23      max=1500
     vus_max........................: 1500    min=1500    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8f0338eb-21ae-40ba-0823-44c764834900/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5ec1fd6e-5d72-4a1e-49a5-33dca444be00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/26182fd7-4a76-42b7-0d53-c0fdc54b3d00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  99% — ✓ 20550 / ✗ 72
     ✗ no graphql errors
      ↳  99% — ✓ 20550 / ✗ 72
     ✓ valid response structure

     checks.........................: 99.76% ✓ 61650     ✗ 144   
     data_received..................: 1.8 GB 5.7 MB/s
     data_sent......................: 25 MB  77 kB/s
     http_req_blocked...............: avg=252.41µs min=1.32µs  med=2.89µs  max=253.29ms p(90)=6.25µs   p(95)=186.53µs
     http_req_connecting............: avg=241.39µs min=0s      med=0s      max=253.12ms p(90)=0s       p(95)=123.05µs
     http_req_duration..............: avg=12.15s   min=61.83ms med=5.46s   max=1m0s     p(90)=31.67s   p(95)=36.48s  
       { expected_response:true }...: avg=11.99s   min=61.83ms med=5.44s   max=58.58s   p(90)=31.35s   p(95)=36.15s  
     http_req_failed................: 0.34%  ✓ 72        ✗ 20550 
     http_req_receiving.............: avg=2.86ms   min=0s      med=86.91µs max=4.36s    p(90)=153.64µs p(95)=465.44µs
     http_req_sending...............: avg=285.68µs min=8.07µs  med=14µs    max=493.27ms p(90)=40.88µs  p(95)=66.81µs 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=12.15s   min=61.72ms med=5.45s   max=1m0s     p(90)=31.67s   p(95)=36.48s  
     http_reqs......................: 20622  64.753198/s
     iteration_duration.............: avg=12.18s   min=72.61ms med=5.48s   max=1m0s     p(90)=31.69s   p(95)=36.5s   
     iterations.....................: 20622  64.753198/s
     vus............................: 175    min=52      max=1500
     vus_max........................: 1500   min=1500    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/66705dd4-59a0-4f5d-a0ce-0da7225d0700/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/75b2702f-271e-4198-3198-14aece915100/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1cdeb054-1c0e-4711-2594-4a1a360e2b00/public" alt="HTTP Overview" />


  </details>