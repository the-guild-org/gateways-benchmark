## Overview for: `scenarios/fed-v1-constant-vus-over-time`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. It's being executed with a constant amount of VUs over a fixed amount of time. It measure things like memory usage, CPU usage, average RPS. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was running 350 VUs over 400s


### Comparison


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/29b1525d-cd3e-4aed-d8c4-b146e6527800/public" alt="Comparison" />


| Gateway                             | RPS ⬇️ |          Requests           |          Duration          | Notes                                                                                |
| :---------------------------------- | :----: | :-------------------------: | :------------------------: | :----------------------------------------------------------------------------------- |
| wundergraph                         |  1215  | 486077 total, 483782 failed |    avg: 45ms, p95: 0ms     | ❌ 483782 failed requests, 483782 non-200 responses, 483782 unexpected GraphQL errors |
| mesh-bun                            |  500   |   200389 total, 0 failed    |  avg: 697ms, p95: 1035ms   | ❌ 200389 unexpected GraphQL errors, non-compatible response structure (200389)       |
| apollo-router                       |   74   |    30093 total, 0 failed    |  avg: 4306ms, p95: 5662ms  | ✅                                                                                    |
| mesh-supergraph                     |   44   |    17947 total, 0 failed    |  avg: 7862ms, p95: 9230ms  | ❌ non-compatible response structure (17947)                                          |
| apollo-gateway-with-yoga-uws        |   40   |    16406 total, 0 failed    | avg: 8540ms, p95: 12960ms  | ✅                                                                                    |
| apollo-gateway-with-yoga            |   39   |    16049 total, 0 failed    | avg: 8731ms, p95: 14058ms  | ✅                                                                                    |
| stitching-federation-with-yoga      |   33   |    13571 total, 0 failed    | avg: 10377ms, p95: 12521ms | ✅                                                                                    |
| stitching-federation-with-yoga-uws  |   33   |    13477 total, 0 failed    | avg: 10455ms, p95: 12566ms | ✅                                                                                    |
| stitching-federation-with-yoga-bun  |   31   |    12626 total, 0 failed    | avg: 11063ms, p95: 17666ms | ✅                                                                                    |
| apollo-server                       |   30   |    12584 total, 0 failed    | avg: 11209ms, p95: 18889ms | ✅                                                                                    |
| mesh                                |   27   |    11406 total, 0 failed    | avg: 12388ms, p95: 15149ms | ✅                                                                                    |
| apollo-gateway-with-yoga-bun        |   25   |    10294 total, 0 failed    | avg: 13174ms, p95: 19378ms | ✅                                                                                    |
| apollo-server-node16                |   24   |    9945 total, 0 failed     | avg: 14179ms, p95: 22170ms | ✅                                                                                    |
| stitching-federation-with-yoga-deno |   24   |    10165 total, 0 failed    | avg: 13929ms, p95: 17600ms | ✅                                                                                    |
| mercurius                           |   7    |   3026 total, 1624 failed   | avg: 46697ms, p95: 60001ms | ❌ 1624 failed requests, 1624 non-200 responses, 1624 unexpected GraphQL errors       |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  0% — ✓ 2295 / ✗ 483782
     ✗ no graphql errors
      ↳  0% — ✓ 2295 / ✗ 483782
     ✓ valid response structure

     checks.........................: 0.70%  ✓ 6885        ✗ 967564
     data_received..................: 201 MB 503 kB/s
     data_sent......................: 3.1 MB 7.9 kB/s
     http_req_blocked...............: avg=182.01µs min=0s      med=0s       max=341.99ms p(90)=0s       p(95)=0s      
     http_req_connecting............: avg=179.2µs  min=0s      med=0s       max=266.36ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=44.58ms  min=0s      med=0s       max=17.66s   p(90)=0s       p(95)=0s      
       { expected_response:true }...: avg=8.37s    min=1.51s   med=7.84s    max=17.66s   p(90)=12.73s   p(95)=13.49s  
     http_req_failed................: 99.52% ✓ 483782      ✗ 2295  
     http_req_receiving.............: avg=1.2ms    min=0s      med=0s       max=4.49s    p(90)=0s       p(95)=0s      
     http_req_sending...............: avg=95.84µs  min=0s      med=0s       max=3.01s    p(90)=0s       p(95)=0s      
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=43.28ms  min=0s      med=0s       max=17.66s   p(90)=0s       p(95)=0s      
     http_reqs......................: 486077 1215.061142/s
     iteration_duration.............: avg=246.53ms min=286.1µs med=181.41ms max=17.67s   p(90)=402.78ms p(95)=505.27ms
     iterations.....................: 486077 1215.061142/s
     vus............................: 350    min=350       max=350 
     vus_max........................: 350    min=350       max=350 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/bf2f6a47-9f9f-42d5-94d6-76ca8e52aa00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2845144e-9e3d-4796-5eb2-9b1623fe2300/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7f82aeb9-6839-4982-72fd-0c03fbd9fc00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  0% — ✓ 0 / ✗ 200389
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 200389

     checks.........................: 33.33% ✓ 200389     ✗ 400778
     data_received..................: 191 MB 476 kB/s
     data_sent......................: 238 MB 594 kB/s
     http_req_blocked...............: avg=72.13µs  min=800ns    med=1.7µs    max=104.66ms p(90)=2.9µs    p(95)=3.6µs  
     http_req_connecting............: avg=65.8µs   min=0s       med=0s       max=80.22ms  p(90)=0s       p(95)=0s     
     http_req_duration..............: avg=696.54ms min=134.61ms med=716.16ms max=1.86s    p(90)=960.23ms p(95)=1.03s  
       { expected_response:true }...: avg=696.54ms min=134.61ms med=716.16ms max=1.86s    p(90)=960.23ms p(95)=1.03s  
     http_req_failed................: 0.00%  ✓ 0          ✗ 200389
     http_req_receiving.............: avg=4.06ms   min=9.5µs    med=19.9µs   max=530.33ms p(90)=542.7µs  p(95)=23.47ms
     http_req_sending...............: avg=1.04ms   min=5.5µs    med=9.9µs    max=463.1ms  p(90)=107.4µs  p(95)=154.3µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s       p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=691.42ms min=134.12ms med=710.68ms max=1.86s    p(90)=953.95ms p(95)=1.02s  
     http_reqs......................: 200389 500.446815/s
     iteration_duration.............: avg=698.99ms min=145.12ms med=718.37ms max=1.94s    p(90)=963.3ms  p(95)=1.03s  
     iterations.....................: 200389 500.446815/s
     vus............................: 350    min=350      max=350 
     vus_max........................: 350    min=350      max=350 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/33dab6ae-8b83-4d4a-dcab-cdab528b8800/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9b652b6c-b425-4be5-62a6-b53edd882400/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a3d5e580-72db-433e-d1c1-297e05d58800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 90279     ✗ 0    
     data_received..................: 2.6 GB  6.5 MB/s
     data_sent......................: 36 MB   89 kB/s
     http_req_blocked...............: avg=668.42µs min=1.9µs    med=5.3µs   max=1.13s   p(90)=7.4µs    p(95)=8.9µs   
     http_req_connecting............: avg=243.85µs min=0s       med=0s      max=93.76ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=4.3s     min=920.25ms med=4.29s   max=11.11s  p(90)=5.31s    p(95)=5.66s   
       { expected_response:true }...: avg=4.3s     min=920.25ms med=4.29s   max=11.11s  p(90)=5.31s    p(95)=5.66s   
     http_req_failed................: 0.00%   ✓ 0         ✗ 30093
     http_req_receiving.............: avg=143.84ms min=44.3µs   med=119.6µs max=7.67s   p(90)=475.57ms p(95)=815.21ms
     http_req_sending...............: avg=20.58ms  min=8.1µs    med=25.6µs  max=2.69s   p(90)=11.09ms  p(95)=75.81ms 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=4.14s    min=905.83ms med=4.15s   max=7.07s   p(90)=5.11s    p(95)=5.39s   
     http_reqs......................: 30093   74.568709/s
     iteration_duration.............: avg=4.67s    min=930.96ms med=4.57s   max=14.53s  p(90)=5.87s    p(95)=6.34s   
     iterations.....................: 30093   74.568709/s
     vus............................: 19      min=19      max=350
     vus_max........................: 350     min=350     max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6c9ad795-4fb0-4b3c-82ee-6d3b3fe8d300/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/bbb53937-4562-46aa-9164-bbd0c696f000/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6a6ecdd0-0cbd-4681-3261-43cf85292700/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 17947

     checks.........................: 66.66% ✓ 35894     ✗ 17947
     data_received..................: 1.6 GB 3.9 MB/s
     data_sent......................: 21 MB  53 kB/s
     http_req_blocked...............: avg=641.37µs min=1.4µs   med=2.8µs    max=100.06ms p(90)=3.9µs  p(95)=4.89µs 
     http_req_connecting............: avg=617.76µs min=0s      med=0s       max=58.11ms  p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=7.86s    min=4.94s   med=7.77s    max=13.23s   p(90)=8.83s  p(95)=9.23s  
       { expected_response:true }...: avg=7.86s    min=4.94s   med=7.77s    max=13.23s   p(90)=8.83s  p(95)=9.23s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 17947
     http_req_receiving.............: avg=1.8ms    min=41.09µs med=277.59µs max=69.89ms  p(90)=5.48ms p(95)=9.23ms 
     http_req_sending...............: avg=373.78µs min=8.2µs   med=16.4µs   max=61.41ms  p(90)=29.5µs p(95)=36.29µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s       p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=7.85s    min=4.94s   med=7.77s    max=13.23s   p(90)=8.83s  p(95)=9.22s  
     http_reqs......................: 17947  44.249866/s
     iteration_duration.............: avg=7.86s    min=4.94s   med=7.77s    max=13.26s   p(90)=8.83s  p(95)=9.23s  
     iterations.....................: 17947  44.249866/s
     vus............................: 93     min=93      max=350
     vus_max........................: 350    min=350     max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/844a8266-4f56-46f8-ba63-a6246d3c1b00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c421515f-eccf-4796-1096-0e15bc5be300/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d38b26f2-f4de-4d53-3235-20e9c281de00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga-uws`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 49218     ✗ 0    
     data_received..................: 1.4 GB  3.6 MB/s
     data_sent......................: 20 MB   48 kB/s
     http_req_blocked...............: avg=464.76µs min=1.5µs  med=3.7µs  max=42.27ms  p(90)=5.3µs    p(95)=6.67µs 
     http_req_connecting............: avg=442.91µs min=0s     med=0s     max=34.79ms  p(90)=0s       p(95)=0s     
     http_req_duration..............: avg=8.54s    min=2.59s  med=8.1s   max=19.44s   p(90)=11.87s   p(95)=12.96s 
       { expected_response:true }...: avg=8.54s    min=2.59s  med=8.1s   max=19.44s   p(90)=11.87s   p(95)=12.96s 
     http_req_failed................: 0.00%   ✓ 0         ✗ 16406
     http_req_receiving.............: avg=11.95ms  min=41.9µs med=87.8µs max=5.3s     p(90)=1.25ms   p(95)=39.38ms
     http_req_sending...............: avg=2.62ms   min=7.5µs  med=20µs   max=681.65ms p(90)=169.05µs p(95)=10.38ms
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=8.52s    min=2.59s  med=8.09s  max=19.44s   p(90)=11.85s   p(95)=12.94s 
     http_reqs......................: 16406   40.480079/s
     iteration_duration.............: avg=8.6s     min=2.62s  med=8.16s  max=19.6s    p(90)=11.94s   p(95)=13.04s 
     iterations.....................: 16406   40.480079/s
     vus............................: 85      min=85      max=350
     vus_max........................: 350     min=350     max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/16c2a37f-b9b8-4d34-7209-eb06dbb2c400/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a1a23c2f-6462-45a6-128a-9c1cac507100/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ce2f45a9-03fe-4a71-be3a-749e39bf0100/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 48147     ✗ 0    
     data_received..................: 1.4 GB  3.5 MB/s
     data_sent......................: 19 MB   47 kB/s
     http_req_blocked...............: avg=921.37µs min=1.4µs    med=3.2µs   max=219.98ms p(90)=4.8µs    p(95)=5.9µs  
     http_req_connecting............: avg=870.33µs min=0s       med=0s      max=105.88ms p(90)=0s       p(95)=0s     
     http_req_duration..............: avg=8.73s    min=873.6ms  med=7.94s   max=30.48s   p(90)=12.22s   p(95)=14.05s 
       { expected_response:true }...: avg=8.73s    min=873.6ms  med=7.94s   max=30.48s   p(90)=12.22s   p(95)=14.05s 
     http_req_failed................: 0.00%   ✓ 0         ✗ 16049
     http_req_receiving.............: avg=9.36ms   min=38µs     med=81.09µs max=665.36ms p(90)=733.03µs p(95)=31.8ms 
     http_req_sending...............: avg=2.64ms   min=7.1µs    med=16.99µs max=657.73ms p(90)=126.73µs p(95)=10.87ms
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s       p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=8.71s    min=873.52ms med=7.93s   max=30.48s   p(90)=12.19s   p(95)=14.05s 
     http_reqs......................: 16049   39.580467/s
     iteration_duration.............: avg=8.79s    min=937.28ms med=7.99s   max=30.89s   p(90)=12.31s   p(95)=14.1s  
     iterations.....................: 16049   39.580467/s
     vus............................: 96      min=96      max=350
     vus_max........................: 350     min=350     max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2b12c618-1f10-4029-cc85-e0d9b7db5400/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d45de958-d074-4d4b-4823-d023104d4100/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7862a042-1a30-4f1c-1248-c5c60962c800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 40713     ✗ 0    
     data_received..................: 1.2 GB  2.9 MB/s
     data_sent......................: 16 MB   40 kB/s
     http_req_blocked...............: avg=1ms      min=1.8µs  med=4.6µs   max=75.39ms  p(90)=6.7µs    p(95)=11.1µs
     http_req_connecting............: avg=980.05µs min=0s     med=0s      max=73.12ms  p(90)=0s       p(95)=0s    
     http_req_duration..............: avg=10.37s   min=6.12s  med=10.35s  max=14.64s   p(90)=11.84s   p(95)=12.52s
       { expected_response:true }...: avg=10.37s   min=6.12s  med=10.35s  max=14.64s   p(90)=11.84s   p(95)=12.52s
     http_req_failed................: 0.00%   ✓ 0         ✗ 13571
     http_req_receiving.............: avg=2.36ms   min=51.6µs med=116.9µs max=324.54ms p(90)=578.91µs p(95)=3.84ms
     http_req_sending...............: avg=1.4ms    min=8.3µs  med=24.3µs  max=214.8ms  p(90)=127µs    p(95)=6.06ms
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s       p(90)=0s       p(95)=0s    
     http_req_waiting...............: avg=10.37s   min=6.12s  med=10.35s  max=14.63s   p(90)=11.83s   p(95)=12.51s
     http_reqs......................: 13571   33.326762/s
     iteration_duration.............: avg=10.41s   min=6.14s  med=10.38s  max=14.65s   p(90)=11.88s   p(95)=12.58s
     iterations.....................: 13571   33.326762/s
     vus............................: 24      min=24      max=350
     vus_max........................: 350     min=350     max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7e39fa02-0eb2-4f2b-f996-0a77c62c8600/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ad0e65b1-dda5-43a4-a05a-94581a47b000/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/99137f9b-176a-43a7-8d9d-c43c15ae8600/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-uws`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 40431     ✗ 0    
     data_received..................: 1.2 GB  2.9 MB/s
     data_sent......................: 16 MB   39 kB/s
     http_req_blocked...............: avg=850.41µs min=1.9µs  med=4.89µs  max=176.03ms p(90)=6.8µs    p(95)=9.9µs 
     http_req_connecting............: avg=804.3µs  min=0s     med=0s      max=51.48ms  p(90)=0s       p(95)=0s    
     http_req_duration..............: avg=10.45s   min=5.19s  med=10.39s  max=14.87s   p(90)=11.86s   p(95)=12.56s
       { expected_response:true }...: avg=10.45s   min=5.19s  med=10.39s  max=14.87s   p(90)=11.86s   p(95)=12.56s
     http_req_failed................: 0.00%   ✓ 0         ✗ 13477
     http_req_receiving.............: avg=2.45ms   min=54.2µs med=120.2µs max=2.82s    p(90)=660.46µs p(95)=4.19ms
     http_req_sending...............: avg=1.02ms   min=8.2µs  med=24.9µs  max=219.76ms p(90)=76µs     p(95)=2.9ms 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s       p(90)=0s       p(95)=0s    
     http_req_waiting...............: avg=10.45s   min=5.19s  med=10.39s  max=14.87s   p(90)=11.85s   p(95)=12.55s
     http_reqs......................: 13477   33.118086/s
     iteration_duration.............: avg=10.48s   min=5.24s  med=10.42s  max=14.9s    p(90)=11.9s    p(95)=12.6s 
     iterations.....................: 13477   33.118086/s
     vus............................: 32      min=32      max=350
     vus_max........................: 350     min=350     max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/75f4290b-f95d-45fa-4930-133efdb5a700/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/65a74f76-8348-4868-acf0-07b92820f500/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/28ea748e-61b7-462a-50e4-9c99870bae00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 37878    ✗ 0    
     data_received..................: 1.1 GB  2.7 MB/s
     data_sent......................: 15 MB   37 kB/s
     http_req_blocked...............: avg=1.1ms   min=2µs      med=4.7µs  max=209.08ms p(90)=8.1µs  p(95)=20.4µs  
     http_req_connecting............: avg=1.03ms  min=0s       med=0s     max=183.59ms p(90)=0s     p(95)=0s      
     http_req_duration..............: avg=11.06s  min=601.76ms med=10.49s max=23.76s   p(90)=12.09s p(95)=17.66s  
       { expected_response:true }...: avg=11.06s  min=601.76ms med=10.49s max=23.76s   p(90)=12.09s p(95)=17.66s  
     http_req_failed................: 0.00%   ✓ 0        ✗ 12626
     http_req_receiving.............: avg=77.75ms min=59.9µs   med=135µs  max=6.29s    p(90)=8.38ms p(95)=116.17ms
     http_req_sending...............: avg=4.67ms  min=10.4µs   med=26.8µs max=526.37ms p(90)=3.03ms p(95)=25.12ms 
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s     max=0s       p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=10.98s  min=601.15ms med=10.45s max=23.76s   p(90)=11.87s p(95)=17.66s  
     http_reqs......................: 12626   31.01525/s
     iteration_duration.............: avg=11.18s  min=732.35ms med=10.6s  max=23.78s   p(90)=12.3s  p(95)=17.83s  
     iterations.....................: 12626   31.01525/s
     vus............................: 31      min=31     max=350
     vus_max........................: 350     min=350    max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5f18f88d-db0f-4000-7c9e-121e09730200/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6785b8a6-99e4-41ba-d651-d0e010f59a00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4adca336-b124-4597-43f7-5ac31dbf7900/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 37752     ✗ 0    
     data_received..................: 1.1 GB  2.7 MB/s
     data_sent......................: 15 MB   37 kB/s
     http_req_blocked...............: avg=2.59ms min=2.1µs    med=5.3µs   max=253.22ms p(90)=7.9µs    p(95)=11.7µs
     http_req_connecting............: avg=2.51ms min=0s       med=0s      max=253.17ms p(90)=0s       p(95)=0s    
     http_req_duration..............: avg=11.2s  min=609.13ms med=10.6s   max=26.26s   p(90)=16s      p(95)=18.88s
       { expected_response:true }...: avg=11.2s  min=609.13ms med=10.6s   max=26.26s   p(90)=16s      p(95)=18.88s
     http_req_failed................: 0.00%   ✓ 0         ✗ 12584
     http_req_receiving.............: avg=5.71ms min=54.2µs   med=126.6µs max=499.43ms p(90)=826.53µs p(95)=8.19ms
     http_req_sending...............: avg=2.65ms min=8.6µs    med=26.3µs  max=332.17ms p(90)=1.55ms   p(95)=13.2ms
     http_req_tls_handshaking.......: avg=0s     min=0s       med=0s      max=0s       p(90)=0s       p(95)=0s    
     http_req_waiting...............: avg=11.2s  min=608.87ms med=10.6s   max=26.21s   p(90)=15.99s   p(95)=18.88s
     http_reqs......................: 12584   30.808236/s
     iteration_duration.............: avg=11.27s min=616.61ms med=10.68s  max=26.27s   p(90)=16.11s   p(95)=19.03s
     iterations.....................: 12584   30.808236/s
     vus............................: 63      min=63      max=350
     vus_max........................: 350     min=350     max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a4975c31-8bba-4943-aaab-4d53522d3c00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ed42b78a-ca97-4bff-3d4f-debf65a57400/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/614d96dc-4530-4b69-d2e6-cfde4fb9b400/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 34218     ✗ 0    
     data_received..................: 1.0 GB  2.4 MB/s
     data_sent......................: 14 MB   33 kB/s
     http_req_blocked...............: avg=1.87ms min=2.2µs  med=5.1µs   max=180.43ms p(90)=7.2µs   p(95)=12.2µs 
     http_req_connecting............: avg=1.8ms  min=0s     med=0s      max=179.64ms p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=12.38s min=7.81s  med=12.29s  max=22s      p(90)=14.38s  p(95)=15.14s 
       { expected_response:true }...: avg=12.38s min=7.81s  med=12.29s  max=22s      p(90)=14.38s  p(95)=15.14s 
     http_req_failed................: 0.00%   ✓ 0         ✗ 11406
     http_req_receiving.............: avg=4.49ms min=50.6µs med=171.5µs max=4.7s     p(90)=6.9ms   p(95)=13.08ms
     http_req_sending...............: avg=1.42ms min=9.5µs  med=29µs    max=292.61ms p(90)=58.55µs p(95)=6.37ms 
     http_req_tls_handshaking.......: avg=0s     min=0s     med=0s      max=0s       p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=12.38s min=7.8s   med=12.28s  max=22s      p(90)=14.37s  p(95)=15.13s 
     http_reqs......................: 11406   27.881959/s
     iteration_duration.............: avg=12.42s min=7.83s  med=12.32s  max=22.04s   p(90)=14.43s  p(95)=15.2s  
     iterations.....................: 11406   27.881959/s
     vus............................: 24      min=24      max=350
     vus_max........................: 350     min=350     max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4cb09b07-71d1-4691-aaff-cc78843a8200/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a5457d17-86b6-40e7-ee0a-caa1cc702400/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f07e1aa2-0eac-41bd-b208-09fdd62a4900/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 30882    ✗ 0    
     data_received..................: 903 MB  2.2 MB/s
     data_sent......................: 12 MB   30 kB/s
     http_req_blocked...............: avg=1.9ms    min=2.6µs   med=5.9µs    max=1.03s   p(90)=10.6µs   p(95)=25.33µs 
     http_req_connecting............: avg=1.16ms   min=0s      med=0s       max=64.75ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=13.17s   min=4.09s   med=12.34s   max=30.6s   p(90)=18.42s   p(95)=19.37s  
       { expected_response:true }...: avg=13.17s   min=4.09s   med=12.34s   max=30.6s   p(90)=18.42s   p(95)=19.37s  
     http_req_failed................: 0.00%   ✓ 0        ✗ 10294
     http_req_receiving.............: avg=119.49ms min=64.19µs med=167.05µs max=6.92s   p(90)=339.06ms p(95)=754.39ms
     http_req_sending...............: avg=19.76ms  min=10.2µs  med=32.7µs   max=1.72s   p(90)=12.02ms  p(95)=73.92ms 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=13.03s   min=4.08s   med=12.2s    max=29.92s  p(90)=18.31s   p(95)=19.29s  
     http_reqs......................: 10294   25.05431/s
     iteration_duration.............: avg=13.78s   min=4.13s   med=12.91s   max=32.51s  p(90)=19.22s   p(95)=20.26s  
     iterations.....................: 10294   25.05431/s
     vus............................: 13      min=13     max=350
     vus_max........................: 350     min=350    max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/90ea0f25-89b4-4dcc-bb1e-7e033f72be00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/bbea0c74-d450-49ef-6d10-8ef29b754d00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/010169dc-02c9-4fb2-785a-31b30ab79400/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server-node16`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 29835     ✗ 0    
     data_received..................: 874 MB  2.1 MB/s
     data_sent......................: 12 MB   29 kB/s
     http_req_blocked...............: avg=1.28ms  min=1.9µs  med=4.2µs   max=280.52ms p(90)=8µs      p(95)=22.4µs 
     http_req_connecting............: avg=1.2ms   min=0s     med=0s      max=116.94ms p(90)=0s       p(95)=0s     
     http_req_duration..............: avg=14.17s  min=5.17s  med=13.33s  max=33.32s   p(90)=20.14s   p(95)=22.17s 
       { expected_response:true }...: avg=14.17s  min=5.17s  med=13.33s  max=33.32s   p(90)=20.14s   p(95)=22.17s 
     http_req_failed................: 0.00%   ✓ 0         ✗ 9945 
     http_req_receiving.............: avg=13.08ms min=58.6µs med=137.3µs max=865.57ms p(90)=2.47ms   p(95)=47.17ms
     http_req_sending...............: avg=2.68ms  min=10.5µs med=22.9µs  max=597.57ms p(90)=546.82µs p(95)=12ms   
     http_req_tls_handshaking.......: avg=0s      min=0s     med=0s      max=0s       p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=14.16s  min=5.17s  med=13.32s  max=33.28s   p(90)=20.14s   p(95)=22.17s 
     http_reqs......................: 9945    24.295152/s
     iteration_duration.............: avg=14.26s  min=5.19s  med=13.43s  max=34s      p(90)=20.24s   p(95)=22.2s  
     iterations.....................: 9945    24.295152/s
     vus............................: 32      min=32      max=350
     vus_max........................: 350     min=350     max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/aae47e21-8b16-47f1-f9e8-e092c9674100/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1d368340-a6e9-4e4a-a3ed-c0b6c8f82b00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/31ca2d05-9b98-4709-7a76-d2c054264b00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-deno`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 30495     ✗ 0    
     data_received..................: 892 MB  2.2 MB/s
     data_sent......................: 12 MB   29 kB/s
     http_req_blocked...............: avg=1.15ms min=1.5µs  med=4.7µs   max=90.9ms   p(90)=6.6µs    p(95)=11.2µs 
     http_req_connecting............: avg=1.09ms min=0s     med=0s      max=65.16ms  p(90)=0s       p(95)=0s     
     http_req_duration..............: avg=13.92s min=4.67s  med=13.23s  max=21.2s    p(90)=17.14s   p(95)=17.6s  
       { expected_response:true }...: avg=13.92s min=4.67s  med=13.23s  max=21.2s    p(90)=17.14s   p(95)=17.6s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 10165
     http_req_receiving.............: avg=1.78ms min=49.7µs med=109.7µs max=273.74ms p(90)=547.17µs p(95)=5.83ms 
     http_req_sending...............: avg=1.67ms min=9.19µs med=26µs    max=181.42ms p(90)=378.08µs p(95)=10.93ms
     http_req_tls_handshaking.......: avg=0s     min=0s     med=0s      max=0s       p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=13.92s min=4.66s  med=13.22s  max=21.19s   p(90)=17.13s   p(95)=17.6s  
     http_reqs......................: 10165   24.751806/s
     iteration_duration.............: avg=13.97s min=4.71s  med=13.28s  max=21.24s   p(90)=17.18s   p(95)=17.64s 
     iterations.....................: 10165   24.751806/s
     vus............................: 32      min=32      max=350
     vus_max........................: 350     min=350     max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6d8f3fb9-47a4-4855-e350-f441e42fa900/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ad69fc0b-3f6f-48f8-3032-62acce387a00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b3b0219e-7cfd-4633-bbf9-15e012b8e400/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  46% — ✓ 1402 / ✗ 1624
     ✗ no graphql errors
      ↳  46% — ✓ 1402 / ✗ 1624
     ✓ valid response structure

     checks.........................: 56.42% ✓ 4206     ✗ 3248 
     data_received..................: 123 MB 286 kB/s
     data_sent......................: 3.8 MB 8.7 kB/s
     http_req_blocked...............: avg=3.61ms   min=1.6µs  med=189.16µs max=97.01ms p(90)=9.07ms   p(95)=35.09ms 
     http_req_connecting............: avg=3.5ms    min=0s     med=132.3µs  max=62.2ms  p(90)=8.53ms   p(95)=34.73ms 
     http_req_duration..............: avg=46.69s   min=8.18s  med=59.99s   max=1m0s    p(90)=1m0s     p(95)=1m0s    
       { expected_response:true }...: avg=31.28s   min=8.18s  med=26.14s   max=59.94s  p(90)=50.4s    p(95)=55.39s  
     http_req_failed................: 53.66% ✓ 1624     ✗ 1402 
     http_req_receiving.............: avg=237.08µs min=0s     med=0s       max=60.69ms p(90)=420.27µs p(95)=534.63µs
     http_req_sending...............: avg=531.42µs min=11.4µs med=45.3µs   max=56.18ms p(90)=842.85µs p(95)=2.52ms  
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s       max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=46.69s   min=8.18s  med=59.99s   max=1m0s    p(90)=1m0s     p(95)=1m0s    
     http_reqs......................: 3026   7.036836/s
     iteration_duration.............: avg=46.7s    min=8.23s  med=1m0s     max=1m0s    p(90)=1m0s     p(95)=1m0s    
     iterations.....................: 3026   7.036836/s
     vus............................: 142    min=142    max=350
     vus_max........................: 350    min=350    max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ec0e7f6e-e6a5-44c5-42ed-961cda073c00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6a1584f6-b2b4-48d0-0c77-242ad2021400/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/756cf521-7fdb-40f1-638f-8a633cd3c800/public" alt="HTTP Overview" />


  </details>