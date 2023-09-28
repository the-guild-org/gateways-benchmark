## Overview for: `federation-v1/constant-vus-subgraphs-delay`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. It's being executed with a constant amount of VUs over a fixed amount of time. It measure things like memory usage, CPU usage, average RPS. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was running 300 VUs over 600s


### Comparison


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a62cb141-507f-4ebd-6ed3-955155aa0b00/public" alt="Comparison" />


| Gateway             | RPS ⬇️ |        Requests        |          Duration          | Notes                                                                    |
| :------------------ | :----: | :--------------------: | :------------------------: | :----------------------------------------------------------------------- |
| apollo-router       |  183   | 110025 total, 0 failed |  avg: 1138ms, p95: 2370ms  | ✅                                                                        |
| wundergraph         |  183   | 110070 total, 0 failed |  avg: 1354ms, p95: 2168ms  | ✅                                                                        |
| mesh-supergraph-bun |  102   | 61696 total, 0 failed  |  avg: 2853ms, p95: 4927ms  | ✅                                                                        |
| mesh-bun            |   97   | 59019 total, 0 failed  |  avg: 2991ms, p95: 5146ms  | ✅                                                                        |
| mesh-supergraph     |   95   | 57680 total, 0 failed  |  avg: 3065ms, p95: 3703ms  | ✅                                                                        |
| mesh                |   89   | 53728 total, 0 failed  |  avg: 3301ms, p95: 3872ms  | ✅                                                                        |
| apollo-server       |   64   | 38719 total, 91 failed |  avg: 4645ms, p95: 6029ms  | ❌ 91 failed requests, 91 non-200 responses, 91 unexpected GraphQL errors |
| mercurius           |   12   |  7819 total, 0 failed  | avg: 23462ms, p95: 24528ms | ✅                                                                        |



<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 330075     ✗ 0     
     data_received..................: 9.7 GB  16 MB/s
     data_sent......................: 131 MB  217 kB/s
     http_req_blocked...............: avg=266.3µs  min=1.54µs   med=3.5µs    max=1.82s p(90)=5.98µs  p(95)=7.14µs
     http_req_connecting............: avg=143.41µs min=0s       med=0s       max=1.56s p(90)=0s      p(95)=0s    
     http_req_duration..............: avg=1.13s    min=235.71ms med=965.25ms max=6.63s p(90)=1.96s   p(95)=2.37s 
       { expected_response:true }...: avg=1.13s    min=235.71ms med=965.25ms max=6.63s p(90)=1.96s   p(95)=2.37s 
     http_req_failed................: 0.00%   ✓ 0          ✗ 110025
     http_req_receiving.............: avg=283.09ms min=24.09µs  med=85.4µs   max=5.54s p(90)=1.13s   p(95)=1.56s 
     http_req_sending...............: avg=14.51ms  min=7.4µs    med=15.17µs  max=3.29s p(90)=40.56µs p(95)=1.34ms
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s    p(90)=0s      p(95)=0s    
     http_req_waiting...............: avg=840.55ms min=228.39ms med=773.52ms max=2.69s p(90)=1.23s   p(95)=1.35s 
     http_reqs......................: 110025  183.031586/s
     iteration_duration.............: avg=1.63s    min=245.04ms med=1.4s     max=9.39s p(90)=2.95s   p(95)=3.48s 
     iterations.....................: 110025  183.031586/s
     vus............................: 61      min=61       max=300 
     vus_max........................: 300     min=300      max=300 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9e64b653-726e-4a12-8c87-93f47de0f100/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/db6aa34e-0a13-48d7-39d6-f7b974044700/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/82d48099-9382-4e64-711d-2fcd40cc2400/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 330210     ✗ 0     
     data_received..................: 9.7 GB  16 MB/s
     data_sent......................: 131 MB  217 kB/s
     http_req_blocked...............: avg=153.35µs min=1.54µs   med=3.61µs  max=1.03s   p(90)=5.83µs   p(95)=6.79µs  
     http_req_connecting............: avg=13.27µs  min=0s       med=0s      max=30.57ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=1.35s    min=567.85ms med=1.27s   max=4.44s   p(90)=1.86s    p(95)=2.16s   
       { expected_response:true }...: avg=1.35s    min=567.85ms med=1.27s   max=4.44s   p(90)=1.86s    p(95)=2.16s   
     http_req_failed................: 0.00%   ✓ 0          ✗ 110070
     http_req_receiving.............: avg=150.31ms min=27.64µs  med=98.52µs max=3.15s   p(90)=602.35ms p(95)=940.96ms
     http_req_sending...............: avg=9.28ms   min=7.38µs   med=17.65µs max=2.35s   p(90)=41.3µs   p(95)=2.44ms  
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=1.19s    min=559.75ms med=1.18s   max=2.62s   p(90)=1.46s    p(95)=1.55s   
     http_reqs......................: 110070  183.083158/s
     iteration_duration.............: avg=1.63s    min=582.54ms med=1.5s    max=6.52s   p(90)=2.42s    p(95)=2.74s   
     iterations.....................: 110070  183.083158/s
     vus............................: 47      min=47       max=300 
     vus_max........................: 300     min=300      max=300 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/396f15fd-b006-40da-4575-e43079bb7100/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1a324591-e85c-4c5f-2a9c-1e25db2e3a00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b897bb47-1d44-4c76-4f1d-a6d86012ac00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 185088     ✗ 0    
     data_received..................: 5.4 GB  9.0 MB/s
     data_sent......................: 73 MB   122 kB/s
     http_req_blocked...............: avg=35.26µs min=1.31µs  med=3.35µs  max=164.78ms p(90)=5.6µs   p(95)=6.95µs  
     http_req_connecting............: avg=8.84µs  min=0s      med=0s      max=40.49ms  p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=2.85s   min=1.26s   med=2.59s   max=6.25s    p(90)=4.62s   p(95)=4.92s   
       { expected_response:true }...: avg=2.85s   min=1.26s   med=2.59s   max=6.25s    p(90)=4.62s   p(95)=4.92s   
     http_req_failed................: 0.00%   ✓ 0          ✗ 61696
     http_req_receiving.............: avg=15.41ms min=31.44µs med=78.82µs max=1.83s    p(90)=1.16ms  p(95)=70.55ms 
     http_req_sending...............: avg=1.36ms  min=8.05µs  med=14.84µs max=823.33ms p(90)=36.68µs p(95)=158.16µs
     http_req_tls_handshaking.......: avg=0s      min=0s      med=0s      max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=2.83s   min=1.26s   med=2.58s   max=6.24s    p(90)=4.6s    p(95)=4.91s   
     http_reqs......................: 61696   102.482507/s
     iteration_duration.............: avg=2.92s   min=1.27s   med=2.64s   max=6.65s    p(90)=4.74s   p(95)=5.05s   
     iterations.....................: 61696   102.482507/s
     vus............................: 23      min=23       max=300
     vus_max........................: 300     min=300      max=300
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a38502b2-9afa-4e58-62dc-875d42c6d000/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7387ab4a-1619-4b33-4b01-c745d1669f00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/dff2f958-4916-4e1d-2f71-8ffc1b6ba800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 177057    ✗ 0    
     data_received..................: 5.2 GB  8.6 MB/s
     data_sent......................: 70 MB   116 kB/s
     http_req_blocked...............: avg=47.95µs min=1.52µs  med=3.53µs  max=242.51ms p(90)=5.9µs   p(95)=6.99µs 
     http_req_connecting............: avg=20.29µs min=0s      med=0s      max=25.67ms  p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=2.99s   min=1.38s   med=2.67s   max=6.13s    p(90)=4.91s   p(95)=5.14s  
       { expected_response:true }...: avg=2.99s   min=1.38s   med=2.67s   max=6.13s    p(90)=4.91s   p(95)=5.14s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 59019
     http_req_receiving.............: avg=17.74ms min=30.08µs med=74.74µs max=1.44s    p(90)=1.56ms  p(95)=91.06ms
     http_req_sending...............: avg=1.53ms  min=7.35µs  med=16.52µs max=954.62ms p(90)=39.15µs p(95)=149.6µs
     http_req_tls_handshaking.......: avg=0s      min=0s      med=0s      max=0s       p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=2.97s   min=1.38s   med=2.65s   max=5.84s    p(90)=4.9s    p(95)=5.12s  
     http_reqs......................: 59019   97.870276/s
     iteration_duration.............: avg=3.06s   min=1.41s   med=2.72s   max=6.14s    p(90)=4.99s   p(95)=5.25s  
     iterations.....................: 59019   97.870276/s
     vus............................: 40      min=40      max=300
     vus_max........................: 300     min=300     max=300
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1cb860c9-27cf-4155-0d01-735e1ae83d00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/faf3874d-6def-49a2-71a2-810dc8558e00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/231f453a-d2fc-4272-1367-fb0fdb11ba00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 173040    ✗ 0    
     data_received..................: 5.1 GB  8.4 MB/s
     data_sent......................: 69 MB   114 kB/s
     http_req_blocked...............: avg=77.68µs min=1.45µs  med=4.2µs   max=455.09ms p(90)=6.34µs  p(95)=7.24µs  
     http_req_connecting............: avg=48.95µs min=0s      med=0s      max=49.81ms  p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=3.06s   min=1.38s   med=3.05s   max=6.83s    p(90)=3.54s   p(95)=3.7s    
       { expected_response:true }...: avg=3.06s   min=1.38s   med=3.05s   max=6.83s    p(90)=3.54s   p(95)=3.7s    
     http_req_failed................: 0.00%   ✓ 0         ✗ 57680
     http_req_receiving.............: avg=6.52ms  min=34.02µs med=83.11µs max=722.78ms p(90)=2.62ms  p(95)=17.32ms 
     http_req_sending...............: avg=1.06ms  min=7.97µs  med=20.94µs max=837.13ms p(90)=40.36µs p(95)=144.68µs
     http_req_tls_handshaking.......: avg=0s      min=0s      med=0s      max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=3.05s   min=1.24s   med=3.04s   max=6.83s    p(90)=3.53s   p(95)=3.68s   
     http_reqs......................: 57680   95.803561/s
     iteration_duration.............: avg=3.12s   min=1.4s    med=3.11s   max=6.88s    p(90)=3.62s   p(95)=3.78s   
     iterations.....................: 57680   95.803561/s
     vus............................: 58      min=58      max=300
     vus_max........................: 300     min=300     max=300
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/23800b47-7cfa-4c35-3a5b-e8c4db7ef100/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/899498e3-3019-46c1-393c-3072a8584e00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0a000de0-8d87-442c-eebf-fecb3d683900/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 161184   ✗ 0    
     data_received..................: 4.7 GB  7.8 MB/s
     data_sent......................: 64 MB   106 kB/s
     http_req_blocked...............: avg=40.57µs  min=1.65µs  med=4.18µs  max=144.65ms p(90)=6.24µs  p(95)=7.12µs  
     http_req_connecting............: avg=16.77µs  min=0s      med=0s      max=28.88ms  p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=3.3s     min=1.98s   med=3.27s   max=7.06s    p(90)=3.72s   p(95)=3.87s   
       { expected_response:true }...: avg=3.3s     min=1.98s   med=3.27s   max=7.06s    p(90)=3.72s   p(95)=3.87s   
     http_req_failed................: 0.00%   ✓ 0        ✗ 53728
     http_req_receiving.............: avg=7.15ms   min=30.55µs med=86.46µs max=1.09s    p(90)=3.05ms  p(95)=18.67ms 
     http_req_sending...............: avg=927.15µs min=8.53µs  med=21.52µs max=963.37ms p(90)=39.54µs p(95)=140.18µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=3.29s    min=1.98s   med=3.26s   max=6.72s    p(90)=3.71s   p(95)=3.86s   
     http_reqs......................: 53728   89.15893/s
     iteration_duration.............: avg=3.35s    min=1.99s   med=3.32s   max=7.09s    p(90)=3.79s   p(95)=3.95s   
     iterations.....................: 53728   89.15893/s
     vus............................: 147     min=147    max=300
     vus_max........................: 300     min=300    max=300
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b28fb1af-12e9-4024-d604-b6758db01600/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d0f993a2-6bb9-4f37-9ca9-dfb71d658a00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/089025a8-c4b4-4be6-64d7-ce343fe3a600/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  99% — ✓ 38628 / ✗ 91
     ✗ no graphql errors
      ↳  99% — ✓ 38628 / ✗ 91
     ✓ valid response structure

     checks.........................: 99.84% ✓ 115884    ✗ 182  
     data_received..................: 3.4 GB 5.6 MB/s
     data_sent......................: 46 MB  76 kB/s
     http_req_blocked...............: avg=70.08µs  min=1.42µs   med=3.06µs max=79.47ms  p(90)=4.83µs   p(95)=5.67µs  
     http_req_connecting............: avg=62.49µs  min=0s       med=0s     max=79.17ms  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=4.64s    min=803.52ms med=4.38s  max=1m0s     p(90)=5.62s    p(95)=6.02s   
       { expected_response:true }...: avg=4.51s    min=803.52ms med=4.38s  max=59.73s   p(90)=5.61s    p(95)=6s      
     http_req_failed................: 0.23%  ✓ 91        ✗ 38628
     http_req_receiving.............: avg=607.64µs min=0s       med=89.8µs max=373.58ms p(90)=150.12µs p(95)=483.03µs
     http_req_sending...............: avg=106.11µs min=7.61µs   med=15.6µs max=191.8ms  p(90)=29.91µs  p(95)=39.73µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=4.64s    min=803.43ms med=4.38s  max=1m0s     p(90)=5.62s    p(95)=6.02s   
     http_reqs......................: 38719  64.198013/s
     iteration_duration.............: avg=4.66s    min=813.32ms med=4.4s   max=1m0s     p(90)=5.64s    p(95)=6.04s   
     iterations.....................: 38719  64.198013/s
     vus............................: 18     min=18      max=300
     vus_max........................: 300    min=300     max=300
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/720fbab5-c09c-4272-f01f-53b778840700/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/71d3ba3e-c993-4b50-5809-fb132983ae00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e923c187-c2df-485c-cff4-9f1ea5450300/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 23457     ✗ 0    
     data_received..................: 686 MB  1.1 MB/s
     data_sent......................: 9.3 MB  15 kB/s
     http_req_blocked...............: avg=178.61µs min=1.53µs  med=3.73µs   max=33.28ms p(90)=5.12µs   p(95)=6.24µs  
     http_req_connecting............: avg=168.75µs min=0s      med=0s       max=31.86ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=23.46s   min=7.45s   med=23.83s   max=26.3s   p(90)=24.34s   p(95)=24.52s  
       { expected_response:true }...: avg=23.46s   min=7.45s   med=23.83s   max=26.3s   p(90)=24.34s   p(95)=24.52s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 7819 
     http_req_receiving.............: avg=135.67µs min=45.15µs med=108.32µs max=50.9ms  p(90)=144.66µs p(95)=160.02µs
     http_req_sending...............: avg=59.46µs  min=8.59µs  med=22.09µs  max=26.93ms p(90)=31.2µs   p(95)=38.06µs 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=23.46s   min=7.45s   med=23.83s   max=26.3s   p(90)=24.34s   p(95)=24.52s  
     http_reqs......................: 7819    12.551387/s
     iteration_duration.............: avg=23.46s   min=7.46s   med=23.83s   max=26.32s  p(90)=24.34s   p(95)=24.53s  
     iterations.....................: 7819    12.551387/s
     vus............................: 1       min=1       max=300
     vus_max........................: 300     min=300     max=300
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a9dca6b7-f1b7-458b-49f9-06ddb4b67400/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/db38d04f-4b14-4024-007b-c0f3949c6e00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/80ce8f22-d92e-4d0d-bf53-ce646b9d7100/public" alt="HTTP Overview" />


  </details>