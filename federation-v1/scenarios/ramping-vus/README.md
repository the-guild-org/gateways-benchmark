## Overview for: `fed-v1-ramping-vus`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. We are running a heavy load of concurrent VUs to measure response time and other stats, during stress. It measure things like memory usage, CPU usage, response times. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was trying to reach 2000 concurrent VUs over 600s


### Comparison


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ab13cd54-9921-46d2-a97f-153f79fb1d00/public" alt="Comparison" />


| Gateway             | duration(p95)⬇️ |  RPS  |          Requests           |                       Durations                        | Notes                                                                                |
| :------------------ | :-------------: | :---: | :-------------------------: | :----------------------------------------------------: | :----------------------------------------------------------------------------------- |
| mercurius           |       0ms       | 1562  | 953422 total, 940859 failed |      avg: 223ms, p95: 0ms, max: 60006ms, med: 0ms      | ❌ 940859 failed requests, 940859 non-200 responses, 940859 unexpected GraphQL errors |
| wundergraph         |     6474ms      |  167  |   102035 total, 0 failed    |  avg: 2699ms, p95: 6474ms, max: 20408ms, med: 2217ms   | ✅                                                                                    |
| apollo-router       |     6882ms      |  168  |   102764 total, 0 failed    |  avg: 2636ms, p95: 6882ms, max: 20943ms, med: 2146ms   | ✅                                                                                    |
| mesh-supergraph-bun |     16497ms     |  117  |    72616 total, 0 failed    |  avg: 8606ms, p95: 16497ms, max: 41688ms, med: 8050ms  | ✅                                                                                    |
| mesh-supergraph     |     18135ms     |  104  |    64678 total, 0 failed    |  avg: 9630ms, p95: 18136ms, max: 28754ms, med: 9566ms  | ✅                                                                                    |
| mesh                |     19373ms     |  98   |    60673 total, 0 failed    | avg: 10315ms, p95: 19373ms, max: 29396ms, med: 10280ms | ✅                                                                                    |
| mesh-bun            |     19560ms     |  106  |    65863 total, 0 failed    |  avg: 9456ms, p95: 19561ms, max: 46437ms, med: 8720ms  | ✅                                                                                    |
| apollo-server       |     60000ms     |  74   |  47264 total, 7528 failed   | avg: 13561ms, p95: 60001ms, max: 60975ms, med: 4369ms  | ❌ 7528 failed requests, 7528 non-200 responses, 7528 unexpected GraphQL errors       |



<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  1% — ✓ 12563 / ✗ 940859
     ✗ no graphql errors
      ↳  1% — ✓ 12563 / ✗ 940859
     ✓ valid response structure

     checks.........................: 1.96%  ✓ 37689       ✗ 1881718
     data_received..................: 1.1 GB 1.8 MB/s
     data_sent......................: 17 MB  28 kB/s
     http_req_blocked...............: avg=13.83µs  min=0s       med=0s       max=131.65ms p(90)=0s       p(95)=0s      
     http_req_connecting............: avg=13.36µs  min=0s       med=0s       max=131.37ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=222.65ms min=0s       med=0s       max=1m0s     p(90)=0s       p(95)=0s      
       { expected_response:true }...: avg=12.73s   min=320.11ms med=9.81s    max=59.94s   p(90)=28.65s   p(95)=37.14s  
     http_req_failed................: 98.68% ✓ 940859      ✗ 12563  
     http_req_receiving.............: avg=2.2µs    min=0s       med=0s       max=168.6ms  p(90)=0s       p(95)=0s      
     http_req_sending...............: avg=2.88µs   min=0s       med=0s       max=62.09ms  p(90)=0s       p(95)=0s      
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=222.64ms min=0s       med=0s       max=1m0s     p(90)=0s       p(95)=0s      
     http_reqs......................: 953422 1562.975765/s
     iteration_duration.............: avg=532.57ms min=213.29µs med=320.21ms max=1m0s     p(90)=714.04ms p(95)=856.09ms
     iterations.....................: 953422 1562.975765/s
     vus............................: 8      min=8         max=1997 
     vus_max........................: 2000   min=2000      max=2000 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6a16893a-59b4-443e-0927-784286561500/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8bbf122f-c9b7-4f2c-d5e3-315114ba6d00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/41e0d5cb-b32d-44e9-c1c8-c5ed8b858300/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 306105     ✗ 0     
     data_received..................: 9.0 GB  15 MB/s
     data_sent......................: 121 MB  199 kB/s
     http_req_blocked...............: avg=46.56ms  min=1.55µs  med=3.63µs  max=12.97s p(90)=5.99µs   p(95)=10.48µs 
     http_req_connecting............: avg=43.3ms   min=0s      med=0s      max=12.97s p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=2.69s    min=7.13ms  med=2.21s   max=20.4s  p(90)=5.43s    p(95)=6.47s   
       { expected_response:true }...: avg=2.69s    min=7.13ms  med=2.21s   max=20.4s  p(90)=5.43s    p(95)=6.47s   
     http_req_failed................: 0.00%   ✓ 0          ✗ 102035
     http_req_receiving.............: avg=540.23ms min=22.46µs med=77.16µs max=17.24s p(90)=1.62s    p(95)=3.44s   
     http_req_sending...............: avg=76.57ms  min=7.63µs  med=15.87µs max=15.68s p(90)=143.82µs p(95)=249.68ms
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s     p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=2.08s    min=7.05ms  med=1.6s    max=15.01s p(90)=4.65s    p(95)=5.29s   
     http_reqs......................: 102035  167.265915/s
     iteration_duration.............: avg=6.02s    min=13.7ms  med=4.82s   max=38.46s p(90)=12.93s   p(95)=15.81s  
     iterations.....................: 102035  167.265915/s
     vus............................: 7       min=7        max=1997
     vus_max........................: 2000    min=2000     max=2000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/788468b1-a809-40c6-4ae6-7618e9c86300/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ce6e46a4-19e4-46c6-3b59-2eda235a4c00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/00d1b020-6ba7-4df5-adb6-3dbed42f5800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 308292    ✗ 0     
     data_received..................: 9.0 GB  15 MB/s
     data_sent......................: 122 MB  200 kB/s
     http_req_blocked...............: avg=41.3ms   min=1.78µs  med=4.36µs  max=12.56s p(90)=7.5µs    p(95)=11.57µs 
     http_req_connecting............: avg=39.12ms  min=0s      med=0s      max=12.56s p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=2.63s    min=7.4ms   med=2.14s   max=20.94s p(90)=5.61s    p(95)=6.88s   
       { expected_response:true }...: avg=2.63s    min=7.4ms   med=2.14s   max=20.94s p(90)=5.61s    p(95)=6.88s   
     http_req_failed................: 0.00%   ✓ 0         ✗ 102764
     http_req_receiving.............: avg=600.38ms min=25.77µs med=91.43µs max=17.91s p(90)=2.13s    p(95)=3.8s    
     http_req_sending...............: avg=72.63ms  min=7.38µs  med=20.81µs max=13.29s p(90)=139.95µs p(95)=139.65ms
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s     p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=1.96s    min=7.29ms  med=1.62s   max=13.01s p(90)=4.15s    p(95)=5.13s   
     http_reqs......................: 102764  168.46233/s
     iteration_duration.............: avg=5.91s    min=12.87ms med=4.65s   max=36.4s  p(90)=13.1s    p(95)=15.9s   
     iterations.....................: 102764  168.46233/s
     vus............................: 192     min=50      max=1997
     vus_max........................: 2000    min=2000    max=2000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/75ec0d0a-2653-4f5c-82e1-845d1cd53200/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/251c1a14-66db-4e9d-8b96-ba5deb423600/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/421770e9-b0b8-4347-957e-7f147ca8d800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 217848    ✗ 0     
     data_received..................: 6.4 GB  10 MB/s
     data_sent......................: 86 MB   140 kB/s
     http_req_blocked...............: avg=3.21ms  min=1.38µs   med=3.49µs  max=1.33s  p(90)=6.1µs   p(95)=11.09µs 
     http_req_connecting............: avg=3.03ms  min=0s       med=0s      max=1.33s  p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=8.6s    min=130.61ms med=8.05s   max=41.68s p(90)=15.62s  p(95)=16.49s  
       { expected_response:true }...: avg=8.6s    min=130.61ms med=8.05s   max=41.68s p(90)=15.62s  p(95)=16.49s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 72616 
     http_req_receiving.............: avg=139.2ms min=27.99µs  med=75.29µs max=12.64s p(90)=3.87ms  p(95)=556.25ms
     http_req_sending...............: avg=6.29ms  min=7.97µs   med=15.31µs max=3.46s  p(90)=47.97µs p(95)=235.46µs
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s      max=0s     p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=8.46s   min=130.15ms med=7.96s   max=40.52s p(90)=15.47s  p(95)=16.24s  
     http_reqs......................: 72616   117.48197/s
     iteration_duration.............: avg=8.78s   min=142.85ms med=8.24s   max=41.71s p(90)=15.86s  p(95)=17.12s  
     iterations.....................: 72616   117.48197/s
     vus............................: 280     min=51      max=1999
     vus_max........................: 2000    min=2000    max=2000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6a77cccd-3770-4639-8165-e584c0416b00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2b35f89b-e39f-4cae-1018-c75ca9473200/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/884f9152-e2eb-4b83-494b-2e62e8dae100/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 194034     ✗ 0     
     data_received..................: 5.7 GB  9.2 MB/s
     data_sent......................: 77 MB   125 kB/s
     http_req_blocked...............: avg=3.74ms  min=1.66µs  med=3.8µs   max=1.62s  p(90)=6.38µs  p(95)=11.68µs 
     http_req_connecting............: avg=3.52ms  min=0s      med=0s      max=1.36s  p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=9.63s   min=45.98ms med=9.56s   max=28.75s p(90)=16.93s  p(95)=18.13s  
       { expected_response:true }...: avg=9.63s   min=45.98ms med=9.56s   max=28.75s p(90)=16.93s  p(95)=18.13s  
     http_req_failed................: 0.00%   ✓ 0          ✗ 64678 
     http_req_receiving.............: avg=49.48ms min=30.2µs  med=71.78µs max=4.66s  p(90)=4.82ms  p(95)=207.24ms
     http_req_sending...............: avg=6.72ms  min=8.36µs  med=16.8µs  max=2.48s  p(90)=53.49µs p(95)=7.68ms  
     http_req_tls_handshaking.......: avg=0s      min=0s      med=0s      max=0s     p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=9.57s   min=27.85ms med=9.52s   max=27.4s  p(90)=16.87s  p(95)=18.03s  
     http_reqs......................: 64678   104.894686/s
     iteration_duration.............: avg=9.85s   min=57.69ms med=9.73s   max=29.87s p(90)=17.22s  p(95)=18.56s  
     iterations.....................: 64678   104.894686/s
     vus............................: 198     min=51       max=1999
     vus_max........................: 2000    min=2000     max=2000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1e44cae9-2d12-4987-95f6-464e2dbef800/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/338d15c9-74be-47b9-090f-4a9285170b00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e5e3cf8e-51b1-43a8-b2c8-ac4428292800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 182019    ✗ 0     
     data_received..................: 5.3 GB  8.6 MB/s
     data_sent......................: 72 MB   117 kB/s
     http_req_blocked...............: avg=3.28ms  min=1.75µs  med=4.36µs  max=2.17s  p(90)=7.23µs p(95)=12.97µs 
     http_req_connecting............: avg=3.19ms  min=0s      med=0s      max=2.17s  p(90)=0s     p(95)=0s      
     http_req_duration..............: avg=10.31s  min=27.94ms med=10.28s  max=29.39s p(90)=18.15s p(95)=19.37s  
       { expected_response:true }...: avg=10.31s  min=27.94ms med=10.28s  max=29.39s p(90)=18.15s p(95)=19.37s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 60673 
     http_req_receiving.............: avg=29.27ms min=29.71µs med=79.91µs max=3.46s  p(90)=3.51ms p(95)=63.47ms 
     http_req_sending...............: avg=5.29ms  min=7.92µs  med=19.35µs max=2.85s  p(90)=53.7µs p(95)=826.29µs
     http_req_tls_handshaking.......: avg=0s      min=0s      med=0s      max=0s     p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=10.28s  min=27.87ms med=10.23s  max=28.62s p(90)=18.13s p(95)=19.29s  
     http_reqs......................: 60673   98.284271/s
     iteration_duration.............: avg=10.5s   min=48.22ms med=10.45s  max=29.64s p(90)=18.39s p(95)=19.82s  
     iterations.....................: 60673   98.284271/s
     vus............................: 486     min=51      max=2000
     vus_max........................: 2000    min=2000    max=2000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0482feb5-02bd-4c72-414b-74506e492400/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7d54663f-0c93-4fba-8363-6d94d87ceb00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/00f9d0bc-dc53-4efe-aacd-b22b7c00f800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 197589    ✗ 0     
     data_received..................: 5.8 GB  9.4 MB/s
     data_sent......................: 78 MB   127 kB/s
     http_req_blocked...............: avg=3.42ms   min=1.59µs   med=3.94µs  max=1.38s  p(90)=7.03µs   p(95)=12.39µs 
     http_req_connecting............: avg=3.23ms   min=0s       med=0s      max=1.38s  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=9.45s    min=211.24ms med=8.71s   max=46.43s p(90)=17.74s   p(95)=19.56s  
       { expected_response:true }...: avg=9.45s    min=211.24ms med=8.71s   max=46.43s p(90)=17.74s   p(95)=19.56s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 65863 
     http_req_receiving.............: avg=185.26ms min=28.96µs  med=80.92µs max=13.87s p(90)=194.56ms p(95)=795.46ms
     http_req_sending...............: avg=7.23ms   min=7.78µs   med=17.1µs  max=2.34s  p(90)=63.11µs  p(95)=845.2µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s     p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=9.26s    min=211.18ms med=8.57s   max=46.43s p(90)=17.46s   p(95)=18.74s  
     http_reqs......................: 65863   106.66947/s
     iteration_duration.............: avg=9.65s    min=218.71ms med=8.97s   max=46.98s p(90)=18.05s   p(95)=20.02s  
     iterations.....................: 65863   106.66947/s
     vus............................: 4       min=4       max=2000
     vus_max........................: 2000    min=2000    max=2000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c185b5a8-a14d-4467-455b-fdadba4dbf00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/72f7eef8-6195-4004-13bc-cccd26470f00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/077ef422-0c88-4d13-5a04-8337277c7a00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  84% — ✓ 39736 / ✗ 7528
     ✗ no graphql errors
      ↳  84% — ✓ 39736 / ✗ 7528
     ✓ valid response structure

     checks.........................: 88.78% ✓ 119207    ✗ 15056 
     data_received..................: 3.5 GB 5.5 MB/s
     data_sent......................: 56 MB  89 kB/s
     http_req_blocked...............: avg=893.69µs min=1.36µs   med=3.88µs  max=429.98ms p(90)=214.12µs p(95)=757.66µs
     http_req_connecting............: avg=868.31µs min=0s       med=0s      max=429.9ms  p(90)=163.2µs  p(95)=653.55µs
     http_req_duration..............: avg=13.56s   min=103.37ms med=4.36s   max=1m0s     p(90)=1m0s     p(95)=1m0s    
       { expected_response:true }...: avg=4.76s    min=103.37ms med=4.19s   max=59.81s   p(90)=5.76s    p(95)=6.27s   
     http_req_failed................: 15.92% ✓ 7528      ✗ 39736 
     http_req_receiving.............: avg=486.48µs min=0s       med=86.32µs max=888.59ms p(90)=140.48µs p(95)=274.72µs
     http_req_sending...............: avg=375.49µs min=7.77µs   med=19.42µs max=239.9ms  p(90)=45.93µs  p(95)=87.07µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=13.56s   min=103.24ms med=4.36s   max=1m0s     p(90)=59.99s   p(95)=1m0s    
     http_reqs......................: 47264  74.52323/s
     iteration_duration.............: avg=13.57s   min=109.96ms med=4.38s   max=1m0s     p(90)=1m0s     p(95)=1m0s    
     iterations.....................: 47263  74.521654/s
     vus............................: 40     min=40      max=2000
     vus_max........................: 2000   min=2000    max=2000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/62a87ca1-9909-43ee-5e5d-00ec389ed700/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/812d6de8-111e-4f3a-c156-1a33a5ba7200/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8164afd3-c981-4bdc-2d9b-8e81ae168f00/public" alt="HTTP Overview" />


  </details>