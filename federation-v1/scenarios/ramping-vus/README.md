## Overview for: `federation-v1/ramping-vus`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. We are running a heavy load of concurrent VUs to measure response time and other stats, during stress. It measure things like memory usage, CPU usage, response times. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was trying to reach 2000 concurrent VUs over 600s


### Comparison


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2d2739d7-17dd-4043-5882-17f89bf18100/public" alt="Comparison" />


| Gateway             | duration(p95)⬇️ |  RPS  |         Requests         |                       Durations                        | Notes                                                                                                          |
| :------------------ | :-------------: | :---: | :----------------------: | :----------------------------------------------------: | :------------------------------------------------------------------------------------------------------------- |
| cosmo               |     6260ms      |  169  |  103221 total, 8 failed  |  avg: 2697ms, p95: 6261ms, max: 19094ms, med: 2199ms   | ❌ 8 failed requests, 8 non-200 responses, 48 unexpected GraphQL errors, non-compatible response structure (48) |
| wundergraph         |     6542ms      |  161  |  98418 total, 0 failed   |  avg: 2711ms, p95: 6543ms, max: 23019ms, med: 2193ms   | ✅                                                                                                              |
| apollo-router       |     6823ms      |  165  |  101191 total, 0 failed  |  avg: 2701ms, p95: 6823ms, max: 20419ms, med: 2216ms   | ✅                                                                                                              |
| mesh-supergraph-bun |     7316ms      |  183  |  112103 total, 0 failed  |  avg: 3490ms, p95: 7316ms, max: 16566ms, med: 3155ms   | ✅                                                                                                              |
| mesh-supergraph     |     19303ms     |  98   |  60713 total, 0 failed   | avg: 10299ms, p95: 19304ms, max: 27697ms, med: 10248ms | ✅                                                                                                              |
| apollo-server       |     60000ms     |  71   | 45297 total, 7636 failed | avg: 14171ms, p95: 60001ms, max: 60857ms, med: 4486ms  | ❌ 7636 failed requests, 7636 non-200 responses, 7636 unexpected GraphQL errors                                 |



<details>
  <summary>Summary for: `cosmo`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  99% — ✓ 103213 / ✗ 8
     ✗ no graphql errors
      ↳  99% — ✓ 103173 / ✗ 48
     ✗ valid response structure
      ↳  99% — ✓ 103173 / ✗ 48

     checks.........................: 99.96% ✓ 309559     ✗ 104   
     data_received..................: 9.1 GB 15 MB/s
     data_sent......................: 123 MB 201 kB/s
     http_req_blocked...............: avg=50.17ms  min=1.36µs  med=3.3µs   max=15.34s p(90)=4.96µs p(95)=9.64µs  
     http_req_connecting............: avg=48.31ms  min=0s      med=0s      max=15.34s p(90)=0s     p(95)=0s      
     http_req_duration..............: avg=2.69s    min=7.48ms  med=2.19s   max=19.09s p(90)=5.52s  p(95)=6.26s   
       { expected_response:true }...: avg=2.69s    min=7.48ms  med=2.19s   max=19.09s p(90)=5.52s  p(95)=6.26s   
     http_req_failed................: 0.00%  ✓ 8          ✗ 103213
     http_req_receiving.............: avg=443.78ms min=18.04µs med=68.6µs  max=16.88s p(90)=1.3s   p(95)=3.21s   
     http_req_sending...............: avg=64.31ms  min=8.12µs  med=14.18µs max=11.92s p(90)=121µs  p(95)=192.02ms
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s     p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=2.18s    min=7.38ms  med=1.77s   max=15.58s p(90)=4.93s  p(95)=5.49s   
     http_reqs......................: 103221 169.211419/s
     iteration_duration.............: avg=5.9s     min=13.92ms med=4.8s    max=46.45s p(90)=12.4s  p(95)=15.43s  
     iterations.....................: 103221 169.211419/s
     vus............................: 7      min=7        max=1997
     vus_max........................: 2000   min=2000     max=2000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/306a2b00-e768-4cb9-5eb8-6eaaeafc5800/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5d89a3ba-0760-477e-2bf6-1a60802e3d00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/dd7fd340-d2ad-4ab7-4ff0-d4618bc27a00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 295254     ✗ 0     
     data_received..................: 8.6 GB  14 MB/s
     data_sent......................: 117 MB  192 kB/s
     http_req_blocked...............: avg=50.43ms  min=1.31µs  med=3.65µs  max=19.3s  p(90)=5.81µs   p(95)=10.74µs
     http_req_connecting............: avg=47.52ms  min=0s      med=0s      max=15.73s p(90)=0s       p(95)=0s     
     http_req_duration..............: avg=2.71s    min=6.52ms  med=2.19s   max=23.01s p(90)=5.6s     p(95)=6.54s  
       { expected_response:true }...: avg=2.71s    min=6.52ms  med=2.19s   max=23.01s p(90)=5.6s     p(95)=6.54s  
     http_req_failed................: 0.00%   ✓ 0          ✗ 98418 
     http_req_receiving.............: avg=504.64ms min=25.95µs med=78.17µs max=18.27s p(90)=1.56s    p(95)=3.23s  
     http_req_sending...............: avg=83.12ms  min=7.52µs  med=15.68µs max=14.35s p(90)=143.89µs p(95)=264.5ms
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s     p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=2.12s    min=6.44ms  med=1.64s   max=13.01s p(90)=4.68s    p(95)=5.63s  
     http_reqs......................: 98418   161.339646/s
     iteration_duration.............: avg=6.22s    min=12.41ms med=4.95s   max=42.02s p(90)=13.22s   p(95)=16.03s 
     iterations.....................: 98418   161.339646/s
     vus............................: 7       min=7        max=2000
     vus_max........................: 2000    min=2000     max=2000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c011c4c0-e19f-4c26-7c54-f41912207d00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f6e8036c-46d5-440b-4408-c7ddf0bca700/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/02e7f0bf-3231-4820-06f4-ba7061bd5a00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 303573     ✗ 0     
     data_received..................: 8.9 GB  15 MB/s
     data_sent......................: 120 MB  197 kB/s
     http_req_blocked...............: avg=41.72ms  min=1.44µs  med=4.09µs  max=16.17s p(90)=6.84µs   p(95)=11µs    
     http_req_connecting............: avg=39.66ms  min=0s      med=0s      max=16.17s p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=2.7s     min=9.6ms   med=2.21s   max=20.41s p(90)=5.65s    p(95)=6.82s   
       { expected_response:true }...: avg=2.7s     min=9.6ms   med=2.21s   max=20.41s p(90)=5.65s    p(95)=6.82s   
     http_req_failed................: 0.00%   ✓ 0          ✗ 101191
     http_req_receiving.............: avg=635.34ms min=24.62µs med=90.04µs max=15.98s p(90)=2.37s    p(95)=4.01s   
     http_req_sending...............: avg=72.33ms  min=8.05µs  med=19.01µs max=15.17s p(90)=149.46µs p(95)=204.05ms
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s     p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=1.99s    min=9.47ms  med=1.65s   max=12.44s p(90)=4.18s    p(95)=5.21s   
     http_reqs......................: 101191  165.726952/s
     iteration_duration.............: avg=6.03s    min=27.58ms med=4.91s   max=39.63s p(90)=12.98s   p(95)=15.73s  
     iterations.....................: 101191  165.726952/s
     vus............................: 104     min=52       max=1998
     vus_max........................: 2000    min=2000     max=2000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/501dc4a6-4930-4b5c-3393-509f9862f500/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a2c7f462-6f20-4cf6-74c1-433829f5e300/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6f63d91f-ae84-47d5-e1d1-0bc04bd84300/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 336309     ✗ 0     
     data_received..................: 9.8 GB  16 MB/s
     data_sent......................: 133 MB  218 kB/s
     http_req_blocked...............: avg=25.3ms   min=1.43µs  med=3.28µs  max=10.88s p(90)=5.4µs   p(95)=7.82µs
     http_req_connecting............: avg=23.89ms  min=0s      med=0s      max=10.88s p(90)=0s      p(95)=0s    
     http_req_duration..............: avg=3.49s    min=16.54ms med=3.15s   max=16.56s p(90)=6.59s   p(95)=7.31s 
       { expected_response:true }...: avg=3.49s    min=16.54ms med=3.15s   max=16.56s p(90)=6.59s   p(95)=7.31s 
     http_req_failed................: 0.00%   ✓ 0          ✗ 112103
     http_req_receiving.............: avg=365.72ms min=27.57µs med=68.81µs max=12.53s p(90)=1.08s   p(95)=2.52s 
     http_req_sending...............: avg=48.89ms  min=7.8µs   med=14.39µs max=8.6s   p(90)=73.61µs p(95)=45.1ms
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s     p(90)=0s      p(95)=0s    
     http_req_waiting...............: avg=3.07s    min=12.17ms med=2.77s   max=12.52s p(90)=5.95s   p(95)=6.66s 
     http_reqs......................: 112103  183.753573/s
     iteration_duration.............: avg=5.52s    min=28.01ms med=4.59s   max=32.63s p(90)=11.17s  p(95)=13.38s
     iterations.....................: 112103  183.753573/s
     vus............................: 273     min=51       max=1995
     vus_max........................: 2000    min=2000     max=2000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a6e1181b-1a2a-450a-fc42-f54dfd0a4000/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a91082d7-a8d8-4165-8ae1-016db0c6dd00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0b41886b-c1ac-431a-9f2a-207b8aac1100/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 182139    ✗ 0     
     data_received..................: 5.3 GB  8.6 MB/s
     data_sent......................: 72 MB   117 kB/s
     http_req_blocked...............: avg=3.24ms  min=1.89µs  med=4.12µs  max=1.57s  p(90)=6.78µs p(95)=12.38µs 
     http_req_connecting............: avg=3.13ms  min=0s      med=0s      max=1.07s  p(90)=0s     p(95)=0s      
     http_req_duration..............: avg=10.29s  min=54.17ms med=10.24s  max=27.69s p(90)=18.14s p(95)=19.3s   
       { expected_response:true }...: avg=10.29s  min=54.17ms med=10.24s  max=27.69s p(90)=18.14s p(95)=19.3s   
     http_req_failed................: 0.00%   ✓ 0         ✗ 60713 
     http_req_receiving.............: avg=41.94ms min=33.41µs med=77.63µs max=6.74s  p(90)=4.81ms p(95)=129.59ms
     http_req_sending...............: avg=5.62ms  min=9.13µs  med=17.85µs max=2.49s  p(90)=50.4µs p(95)=2.32ms  
     http_req_tls_handshaking.......: avg=0s      min=0s      med=0s      max=0s     p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=10.25s  min=52.08ms med=10.21s  max=27.65s p(90)=18.09s p(95)=19.23s  
     http_reqs......................: 60713   98.361738/s
     iteration_duration.............: avg=10.49s  min=83.6ms  med=10.45s  max=32.84s p(90)=18.36s p(95)=19.7s   
     iterations.....................: 60713   98.361738/s
     vus............................: 352     min=50      max=1998
     vus_max........................: 2000    min=2000    max=2000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b96b91dc-4d04-4e78-df52-f91ce1f76600/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4cee2ebf-ec1f-412f-3fbf-e365ac164000/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7aceb1c1-f634-4ece-b6a0-dfa56bdb3200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  83% — ✓ 37661 / ✗ 7636
     ✗ no graphql errors
      ↳  83% — ✓ 37661 / ✗ 7636
     ✓ valid response structure

     checks.........................: 88.09% ✓ 112983    ✗ 15272 
     data_received..................: 3.3 GB 5.2 MB/s
     data_sent......................: 54 MB  85 kB/s
     http_req_blocked...............: avg=710.76µs min=1.4µs   med=3.62µs   max=296.99ms p(90)=249.83µs p(95)=806.5µs 
     http_req_connecting............: avg=682.56µs min=0s      med=0s       max=296.82ms p(90)=200.91µs p(95)=711.23µs
     http_req_duration..............: avg=14.17s   min=80.39ms med=4.48s    max=1m0s     p(90)=1m0s     p(95)=1m0s    
       { expected_response:true }...: avg=4.87s    min=80.39ms med=4.34s    max=59.84s   p(90)=5.61s    p(95)=6.29s   
     http_req_failed................: 16.85% ✓ 7636      ✗ 37661 
     http_req_receiving.............: avg=300.67µs min=0s      med=105.34µs max=201.52ms p(90)=178.75µs p(95)=248.22µs
     http_req_sending...............: avg=232.96µs min=7.93µs  med=17.66µs  max=282.15ms p(90)=45.59µs  p(95)=79.86µs 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=14.17s   min=80.25ms med=4.48s    max=1m0s     p(90)=59.99s   p(95)=1m0s    
     http_reqs......................: 45297  71.422162/s
     iteration_duration.............: avg=14.18s   min=86.71ms med=4.5s     max=1m0s     p(90)=1m0s     p(95)=1m0s    
     iterations.....................: 45297  71.422162/s
     vus............................: 34     min=34      max=2000
     vus_max........................: 2000   min=2000    max=2000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2e438daf-d59c-45d0-8599-5a8122afc900/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/64a3ba02-f061-466e-6466-1485e20c6000/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/25402333-1386-4ebe-520a-dcc94106e600/public" alt="HTTP Overview" />


  </details>