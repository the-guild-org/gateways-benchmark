## Overview for: `fed-v1-ramping-vus`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. We are running a heavy load of concurrent VUs to measure response time and other stats, during stress. It measure things like memory usage, CPU usage, response times. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was trying to reach 1500 concurrent VUs over 300s


### Comparison


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0515d79a-bb86-4708-5ac7-cfdfb8954a00/public" alt="Comparison" />


| Gateway                             | duration(p95)⬇️ |  RPS  |         Requests         |                       Durations                        |
| :---------------------------------- | :-------------: | :---: | :----------------------: | :----------------------------------------------------: |
| wundergraph                         |     1268ms      | 1238  |  383836 total, 0 failed  |    avg: 545ms, p95: 1269ms, max: 2780ms, med: 481ms    |
| mesh-bun                            |     5980ms      |  270  |  83749 total, 0 failed   |   avg: 2849ms, p95: 5981ms, max: 9263ms, med: 2591ms   |
| mesh                                |     8526ms      |  185  |  57662 total, 0 failed   |  avg: 4172ms, p95: 8526ms, max: 13429ms, med: 3871ms   |
| apollo-router                       |     44260ms     |  38   | 12565 total, 3847 failed | avg: 20961ms, p95: 44261ms, max: 60001ms, med: 17180ms |
| stitching-federation-with-yoga-uws  |     44684ms     |  31   |  10398 total, 0 failed   | avg: 24381ms, p95: 44684ms, max: 53058ms, med: 24022ms |
| stitching-federation-with-yoga      |     45372ms     |  30   |  10437 total, 0 failed   | avg: 24035ms, p95: 45373ms, max: 55327ms, med: 23208ms |
| apollo-gateway-with-yoga-bun        |     52652ms     |  36   | 12279 total, 495 failed  | avg: 18861ms, p95: 52653ms, max: 60214ms, med: 14206ms |
| mesh-supergraph                     |     58285ms     |  28   |  9527 total, 365 failed  | avg: 25132ms, p95: 58286ms, max: 60009ms, med: 22338ms |
| stitching-federation-with-yoga-bun  |     59905ms     |  32   | 10829 total, 688 failed  | avg: 22547ms, p95: 59906ms, max: 60689ms, med: 21612ms |
| apollo-server                       |     60000ms     |  34   | 11805 total, 1901 failed | avg: 19693ms, p95: 60001ms, max: 60595ms, med: 7276ms  |
| apollo-server-node16                |     60000ms     |  34   | 11615 total, 1339 failed | avg: 21628ms, p95: 60001ms, max: 60772ms, med: 12610ms |
| mercurius                           |     60000ms     |  16   | 5522 total, 3471 failed  | avg: 42769ms, p95: 60001ms, max: 60022ms, med: 60000ms |
| stitching-federation-with-yoga-deno |     60001ms     |  19   | 6479 total, 1442 failed  | avg: 36545ms, p95: 60001ms, max: 60179ms, med: 35750ms |
| apollo-gateway-with-yoga            |     60002ms     |  26   | 8862 total, 2350 failed  | avg: 26943ms, p95: 60002ms, max: 60632ms, med: 13540ms |
| apollo-gateway-with-yoga-uws        |     60002ms     |  28   | 9674 total, 2145 failed  | avg: 24885ms, p95: 60002ms, max: 60570ms, med: 10427ms |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 383836

     checks.........................: 66.66% ✓ 767672      ✗ 383836
     data_received..................: 56 MB  180 kB/s
     data_sent......................: 456 MB 1.5 MB/s
     http_req_blocked...............: avg=2.11ms   min=900ns   med=2.1µs    max=1.85s p(90)=3.3µs   p(95)=4.1µs  
     http_req_connecting............: avg=2.09ms   min=0s      med=0s       max=1.85s p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=544.64ms min=247.1µs med=481.38ms max=2.78s p(90)=1.1s    p(95)=1.26s  
       { expected_response:true }...: avg=544.64ms min=247.1µs med=481.38ms max=2.78s p(90)=1.1s    p(95)=1.26s  
     http_req_failed................: 0.00%  ✓ 0           ✗ 383836
     http_req_receiving.............: avg=12.42ms  min=8.8µs   med=20.9µs   max=1.74s p(90)=296.3µs p(95)=15.25ms
     http_req_sending...............: avg=2.56ms   min=5.7µs   med=11.2µs   max=1.47s p(90)=94.2µs  p(95)=155.8µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s    p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=529.65ms min=220µs   med=473.56ms max=2.33s p(90)=1.07s   p(95)=1.22s  
     http_reqs......................: 383836 1238.109608/s
     iteration_duration.............: avg=617.25ms min=728.9µs med=547.13ms max=3.93s p(90)=1.21s   p(95)=1.38s  
     iterations.....................: 383836 1238.109608/s
     vus............................: 3      min=0         max=1498
     vus_max........................: 1500   min=1246      max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/eee60bca-4723-4f1d-6162-5612baf1b900/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/12085f5b-20e9-4cf7-3001-d25cae1ead00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c3dd232d-3ea2-4817-41ae-04366845ed00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  0% — ✓ 0 / ✗ 83749
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 83749

     checks.........................: 33.33% ✓ 83749      ✗ 167498
     data_received..................: 80 MB  257 kB/s
     data_sent......................: 99 MB  321 kB/s
     http_req_blocked...............: avg=2.41ms min=1.5µs   med=2.8µs  max=1.52s p(90)=4.89µs   p(95)=9.5µs   
     http_req_connecting............: avg=2.37ms min=0s      med=0s     max=1.52s p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=2.84s  min=2.33ms  med=2.59s  max=9.26s p(90)=5.64s    p(95)=5.98s   
       { expected_response:true }...: avg=2.84s  min=2.33ms  med=2.59s  max=9.26s p(90)=5.64s    p(95)=5.98s   
     http_req_failed................: 0.00%  ✓ 0          ✗ 83749 
     http_req_receiving.............: avg=9.96ms min=14.49µs med=36µs   max=1.45s p(90)=327.89µs p(95)=5.51ms  
     http_req_sending...............: avg=4.55ms min=10.1µs  med=16.8µs max=1.45s p(90)=141.59µs p(95)=776.73µs
     http_req_tls_handshaking.......: avg=0s     min=0s      med=0s     max=0s    p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=2.83s  min=2.23ms  med=2.58s  max=9.26s p(90)=5.6s     p(95)=5.92s   
     http_reqs......................: 83749  270.153737/s
     iteration_duration.............: avg=2.86s  min=3.09ms  med=2.59s  max=9.55s p(90)=5.71s    p(95)=6.01s   
     iterations.....................: 83749  270.153737/s
     vus............................: 1      min=0        max=1499
     vus_max........................: 1500   min=809      max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/cb1c5a6b-80b9-4037-358b-e590e7292700/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e51e0133-04e3-40e9-d73a-498f9a786e00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d6fbe8cc-890c-4b00-2d75-16384a1cf700/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 57662

     checks.........................: 66.66% ✓ 115324     ✗ 57662 
     data_received..................: 65 MB  210 kB/s
     data_sent......................: 68 MB  221 kB/s
     http_req_blocked...............: avg=1.29ms min=1.4µs  med=2.8µs  max=1.13s  p(90)=4.89µs   p(95)=18.5µs  
     http_req_connecting............: avg=1.12ms min=0s     med=0s     max=1.04s  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=4.17s  min=4.41ms med=3.87s  max=13.42s p(90)=7.66s    p(95)=8.52s   
       { expected_response:true }...: avg=4.17s  min=4.41ms med=3.87s  max=13.42s p(90)=7.66s    p(95)=8.52s   
     http_req_failed................: 0.00%  ✓ 0          ✗ 57662 
     http_req_receiving.............: avg=14ms   min=14.1µs med=43.4µs max=1.16s  p(90)=370.19µs p(95)=10.06ms 
     http_req_sending...............: avg=2.56ms min=9µs    med=16.2µs max=1.08s  p(90)=123.19µs p(95)=384.65µs
     http_req_tls_handshaking.......: avg=0s     min=0s     med=0s     max=0s     p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=4.15s  min=4.36ms med=3.86s  max=13.42s p(90)=7.65s    p(95)=8.44s   
     http_reqs......................: 57662  185.991569/s
     iteration_duration.............: avg=4.18s  min=5.36ms med=3.88s  max=13.54s p(90)=7.66s    p(95)=8.53s   
     iterations.....................: 57662  185.991569/s
     vus............................: 5      min=0        max=1500
     vus_max........................: 1500   min=1007     max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7d6b8c7a-8532-4f03-b7f3-e8c93820c200/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9985b1b1-5d22-4255-e0a0-6bb6c9c56100/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ee4540d0-95f0-4fb1-d48b-5b61fceeb400/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  69% — ✓ 8718 / ✗ 3847
     ✗ no graphql errors
      ↳  69% — ✓ 8718 / ✗ 3847
     ✓ valid response structure

     checks.........................: 77.26% ✓ 26154     ✗ 7694  
     data_received..................: 765 MB 2.3 MB/s
     data_sent......................: 15 MB  45 kB/s
     http_req_blocked...............: avg=782.96µs min=1.4µs    med=4.5µs   max=274.88ms p(90)=199.46µs p(95)=496.18µs
     http_req_connecting............: avg=716.4µs  min=0s       med=0s      max=241.03ms p(90)=127.24µs p(95)=412.7µs 
     http_req_duration..............: avg=20.96s   min=655.1ms  med=17.17s  max=1m0s     p(90)=42.25s   p(95)=44.26s  
       { expected_response:true }...: avg=12.87s   min=655.1ms  med=10.9s   max=59.29s   p(90)=25.85s   p(95)=30.18s  
     http_req_failed................: 30.61% ✓ 3847      ✗ 8718  
     http_req_receiving.............: avg=365.01µs min=0s       med=100.4µs max=162.67ms p(90)=241.2µs  p(95)=384.72µs
     http_req_sending...............: avg=727.97µs min=8.9µs    med=25.7µs  max=175.98ms p(90)=74.39µs  p(95)=179.94µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=20.96s   min=654.88ms med=17.17s  max=1m0s     p(90)=42.25s   p(95)=44.26s  
     http_reqs......................: 12565  38.169836/s
     iteration_duration.............: avg=20.97s   min=665.32ms med=17.2s   max=1m0s     p(90)=42.25s   p(95)=44.26s  
     iterations.....................: 12565  38.169836/s
     vus............................: 47     min=0       max=1500
     vus_max........................: 1500   min=1169    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ab33c924-ce34-4f0e-45a8-46e9bb56e400/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/40dccb87-07e1-45c2-0c9c-479398434800/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f8304523-88ce-42cd-d7e6-c7855e688700/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-uws`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 31193     ✗ 0     
     data_received..................: 912 MB  2.7 MB/s
     data_sent......................: 13 MB   38 kB/s
     http_req_blocked...............: avg=3.73ms min=1.7µs  med=4µs     max=718.95ms p(90)=192.54µs p(95)=581.13µs
     http_req_connecting............: avg=3.66ms min=0s     med=0s      max=718.8ms  p(90)=125.9µs  p(95)=478.47µs
     http_req_duration..............: avg=24.38s min=1.69s  med=24.02s  max=53.05s   p(90)=42.62s   p(95)=44.68s  
       { expected_response:true }...: avg=24.38s min=1.69s  med=24.02s  max=53.05s   p(90)=42.62s   p(95)=44.68s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 10398 
     http_req_receiving.............: avg=8.29ms min=54.3µs med=107µs   max=9.58s    p(90)=834.44µs p(95)=5.38ms  
     http_req_sending...............: avg=3.09ms min=9.1µs  med=19.85µs max=683.76ms p(90)=112.16µs p(95)=10.49ms 
     http_req_tls_handshaking.......: avg=0s     min=0s     med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=24.36s min=1.68s  med=24s     max=53.05s   p(90)=42.61s   p(95)=44.68s  
     http_reqs......................: 10398   31.038482/s
     iteration_duration.............: avg=24.44s min=1.7s   med=24.03s  max=53.08s   p(90)=42.64s   p(95)=44.72s  
     iterations.....................: 10397   31.035497/s
     vus............................: 4       min=0       max=1500
     vus_max........................: 1500    min=1210    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a2916806-55f9-46ff-343f-54747cd22200/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/880a3df9-c7ac-49ce-88a9-84ad89192700/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/cfcbc46e-48a7-4af9-822e-50f679b13100/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 31308     ✗ 0     
     data_received..................: 916 MB  2.7 MB/s
     data_sent......................: 13 MB   38 kB/s
     http_req_blocked...............: avg=2.32ms min=1.8µs  med=4.59µs max=984.64ms p(90)=192.58µs p(95)=530.02µs
     http_req_connecting............: avg=2.05ms min=0s     med=0s     max=474.63ms p(90)=127.5µs  p(95)=442.72µs
     http_req_duration..............: avg=24.03s min=1.41s  med=23.2s  max=55.32s   p(90)=41.83s   p(95)=45.37s  
       { expected_response:true }...: avg=24.03s min=1.41s  med=23.2s  max=55.32s   p(90)=41.83s   p(95)=45.37s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 10437 
     http_req_receiving.............: avg=5.77ms min=59.7µs med=118µs  max=868.97ms p(90)=617.78µs p(95)=4.19ms  
     http_req_sending...............: avg=2.15ms min=9.9µs  med=24.1µs max=622.75ms p(90)=88.72µs  p(95)=2.87ms  
     http_req_tls_handshaking.......: avg=0s     min=0s     med=0s     max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=24.02s min=1.41s  med=23.19s max=55.32s   p(90)=41.82s   p(95)=45.29s  
     http_reqs......................: 10437   30.997677/s
     iteration_duration.............: avg=24.07s min=1.45s  med=23.23s max=55.35s   p(90)=41.85s   p(95)=45.77s  
     iterations.....................: 10434   30.988767/s
     vus............................: 6       min=0       max=1500
     vus_max........................: 1500    min=1415    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/34ba1b83-152b-4070-0687-62d693a43800/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a0142460-d0ce-4d3e-7b46-7a8f3ca0b600/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e90f1c85-f823-42fd-9993-7e0859bac800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga-bun`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  95% — ✓ 11784 / ✗ 495
     ✗ no graphql errors
      ↳  95% — ✓ 11784 / ✗ 495
     ✓ valid response structure

     checks.........................: 97.27% ✓ 35352     ✗ 990   
     data_received..................: 1.0 GB 3.0 MB/s
     data_sent......................: 16 MB  46 kB/s
     http_req_blocked...............: avg=29.26ms  min=1.8µs    med=4.3µs   max=3.85s  p(90)=161.1µs  p(95)=7.5ms   
     http_req_connecting............: avg=28.56ms  min=0s       med=0s      max=3.85s  p(90)=99.64µs  p(95)=6.97ms  
     http_req_duration..............: avg=18.86s   min=874.27ms med=14.2s   max=1m0s   p(90)=39.62s   p(95)=52.65s  
       { expected_response:true }...: avg=17.13s   min=874.27ms med=13.7s   max=59.91s p(90)=36.57s   p(95)=44.2s   
     http_req_failed................: 4.03%  ✓ 495       ✗ 11784 
     http_req_receiving.............: avg=223.53ms min=0s       med=102.1µs max=15.22s p(90)=652.83ms p(95)=1.66s   
     http_req_sending...............: avg=30.28ms  min=7.5µs    med=20µs    max=3.97s  p(90)=17.38ms  p(95)=117.09ms
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s     p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=18.6s    min=866.68ms med=13.82s  max=1m0s   p(90)=38.51s   p(95)=52.4s   
     http_reqs......................: 12279  36.113945/s
     iteration_duration.............: avg=19.39s   min=882.86ms med=14.53s  max=1m0s   p(90)=42.18s   p(95)=53.24s  
     iterations.....................: 12279  36.113945/s
     vus............................: 1      min=0       max=1499
     vus_max........................: 1500   min=1312    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9c05814e-9b4e-4ac8-c623-83e669b78300/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0db4838e-e5a2-4f2a-671b-a61844420b00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2286a626-caaf-4bbf-06c7-879240c2d300/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  96% — ✓ 9162 / ✗ 365
     ✗ no graphql errors
      ↳  96% — ✓ 9162 / ✗ 365
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 9162

     checks.........................: 64.94% ✓ 18324     ✗ 9892  
     data_received..................: 806 MB 2.4 MB/s
     data_sent......................: 12 MB  36 kB/s
     http_req_blocked...............: avg=110.21µs min=2µs    med=3.6µs  max=19.82ms p(90)=405.88µs p(95)=552.59µs
     http_req_connecting............: avg=94.79µs  min=0s     med=0s     max=19.75ms p(90)=329.95µs p(95)=469.79µs
     http_req_duration..............: avg=25.13s   min=1.89s  med=22.33s max=1m0s    p(90)=53.41s   p(95)=58.28s  
       { expected_response:true }...: avg=23.74s   min=1.89s  med=21.48s max=59.93s  p(90)=46.81s   p(95)=54.03s  
     http_req_failed................: 3.83%  ✓ 365       ✗ 9162  
     http_req_receiving.............: avg=1.78ms   min=0s     med=147µs  max=2.69s   p(90)=394.66µs p(95)=535.43µs
     http_req_sending...............: avg=88.69µs  min=11.6µs med=19.8µs max=29.14ms p(90)=70.1µs   p(95)=89.7µs  
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=25.12s   min=1.89s  med=22.33s max=1m0s    p(90)=53.41s   p(95)=58.27s  
     http_reqs......................: 9527   28.020067/s
     iteration_duration.............: avg=25.13s   min=1.89s  med=22.33s max=1m0s    p(90)=53.42s   p(95)=58.28s  
     iterations.....................: 9527   28.020067/s
     vus............................: 7      min=0       max=1500
     vus_max........................: 1500   min=1002    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e0d86c8c-ed95-4870-f693-c4fc488a8e00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/eedd5afa-c337-47a4-9252-07879f912700/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ca9703bb-cfc9-45e2-2b50-0740f403c700/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-bun`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  93% — ✓ 10141 / ✗ 688
     ✗ no graphql errors
      ↳  93% — ✓ 10141 / ✗ 688
     ✓ valid response structure

     checks.........................: 95.67% ✓ 30423     ✗ 1376  
     data_received..................: 890 MB 2.7 MB/s
     data_sent......................: 13 MB  40 kB/s
     http_req_blocked...............: avg=11.23ms  min=1.8µs    med=4.4µs    max=1.05s    p(90)=557.74µs p(95)=15.5ms  
     http_req_connecting............: avg=11ms     min=0s       med=0s       max=1.05s    p(90)=466.34µs p(95)=14.15ms 
     http_req_duration..............: avg=22.54s   min=381.28ms med=21.61s   max=1m0s     p(90)=41.93s   p(95)=59.9s   
       { expected_response:true }...: avg=20s      min=381.28ms med=20.62s   max=59.88s   p(90)=30.09s   p(95)=39.06s  
     http_req_failed................: 6.35%  ✓ 688       ✗ 10141 
     http_req_receiving.............: avg=167.64ms min=0s       med=140.19µs max=14.72s   p(90)=5.9ms    p(95)=143.49ms
     http_req_sending...............: avg=9.48ms   min=11µs     med=27µs     max=982.27ms p(90)=11.88ms  p(95)=45.17ms 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=22.36s   min=381.14ms med=21.4s    max=1m0s     p(90)=41.77s   p(95)=59.85s  
     http_reqs......................: 10829  32.365453/s
     iteration_duration.............: avg=22.69s   min=419.81ms med=21.77s   max=1m1s     p(90)=41.99s   p(95)=1m0s    
     iterations.....................: 10829  32.365453/s
     vus............................: 4      min=0       max=1499
     vus_max........................: 1500   min=831     max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/33f5b01c-9a06-4024-b82d-4f5813e35700/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/eed02c3b-aada-4ef3-148f-ab9339864e00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/09cc8219-9643-4ebc-8d29-fa40f52d7500/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  83% — ✓ 9904 / ✗ 1901
     ✗ no graphql errors
      ↳  83% — ✓ 9904 / ✗ 1901
     ✓ valid response structure

     checks.........................: 88.65% ✓ 29712     ✗ 3802  
     data_received..................: 871 MB 2.6 MB/s
     data_sent......................: 15 MB  44 kB/s
     http_req_blocked...............: avg=2.35ms min=1.4µs    med=3.7µs   max=631.05ms p(90)=434.09µs p(95)=1.97ms
     http_req_connecting............: avg=2.24ms min=0s       med=0s      max=515.11ms p(90)=372.91µs p(95)=1.82ms
     http_req_duration..............: avg=19.69s min=969.45ms med=7.27s   max=1m0s     p(90)=1m0s     p(95)=1m0s  
       { expected_response:true }...: avg=11.95s min=969.45ms med=6.19s   max=59.98s   p(90)=35.5s    p(95)=49.31s
     http_req_failed................: 16.10% ✓ 1901      ✗ 9904  
     http_req_receiving.............: avg=3.22ms min=0s       med=79.29µs max=691.5ms  p(90)=262.41µs p(95)=1.34ms
     http_req_sending...............: avg=1.96ms min=6.9µs    med=21.2µs  max=391.77ms p(90)=104.59µs p(95)=7.96ms
     http_req_tls_handshaking.......: avg=0s     min=0s       med=0s      max=0s       p(90)=0s       p(95)=0s    
     http_req_waiting...............: avg=19.68s min=969.29ms med=7.27s   max=1m0s     p(90)=1m0s     p(95)=1m0s  
     http_reqs......................: 11805  34.740831/s
     iteration_duration.............: avg=19.73s min=988.25ms med=7.31s   max=1m0s     p(90)=1m0s     p(95)=1m0s  
     iterations.....................: 11805  34.740831/s
     vus............................: 5      min=5       max=1500
     vus_max........................: 1500   min=1500    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/afb4d631-5bea-494b-3909-c1b25dfb7700/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/169aeec2-1c9f-4a7e-1390-216ba5783800/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7ee48682-8b5f-4a0a-98a4-152519c7f400/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server-node16`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  88% — ✓ 10276 / ✗ 1339
     ✗ no graphql errors
      ↳  88% — ✓ 10275 / ✗ 1339
     ✓ valid response structure

     checks.........................: 92.00% ✓ 30826     ✗ 2678  
     data_received..................: 903 MB 2.7 MB/s
     data_sent......................: 14 MB  42 kB/s
     http_req_blocked...............: avg=4.64ms min=1.6µs med=3.9µs  max=1.35s  p(90)=410.29µs p(95)=2.25ms 
     http_req_connecting............: avg=4.54ms min=0s    med=0s     max=1.35s  p(90)=348.35µs p(95)=1.92ms 
     http_req_duration..............: avg=21.62s min=1.12s med=12.61s max=1m0s   p(90)=59.99s   p(95)=1m0s   
       { expected_response:true }...: avg=16.63s min=1.12s med=9.37s  max=59.98s p(90)=42.33s   p(95)=50.83s 
     http_req_failed................: 11.52% ✓ 1339      ✗ 10276 
     http_req_receiving.............: avg=3.2ms  min=0s    med=86.3µs max=1.38s  p(90)=304.89µs p(95)=1.52ms 
     http_req_sending...............: avg=4.2ms  min=7.6µs med=21.6µs max=1.39s  p(90)=129.31µs p(95)=13.09ms
     http_req_tls_handshaking.......: avg=0s     min=0s    med=0s     max=0s     p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=21.62s min=1.12s med=12.56s max=1m0s   p(90)=59.98s   p(95)=1m0s   
     http_reqs......................: 11615  34.459683/s
     iteration_duration.............: avg=21.68s min=1.12s med=12.66s max=1m1s   p(90)=1m0s     p(95)=1m0s   
     iterations.....................: 11614  34.456716/s
     vus............................: 1      min=0       max=1500
     vus_max........................: 1500   min=1061    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7bb0c24c-2b0e-474b-7b3c-3df8a42d1d00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/66aa63f3-3f17-4b66-4ff2-2072b954e900/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/de81e957-173c-47f8-a492-7caf3429a400/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  37% — ✓ 2051 / ✗ 3471
     ✗ no graphql errors
      ↳  37% — ✓ 2051 / ✗ 3471
     ✓ valid response structure

     checks.........................: 46.98% ✓ 6153      ✗ 6942  
     data_received..................: 180 MB 530 kB/s
     data_sent......................: 7.5 MB 22 kB/s
     http_req_blocked...............: avg=707.31µs min=1.6µs med=156µs   max=175.29ms p(90)=655.53µs p(95)=1.36ms  
     http_req_connecting............: avg=665.86µs min=0s    med=105.6µs max=175.23ms p(90)=571.83µs p(95)=1.27ms  
     http_req_duration..............: avg=42.76s   min=1.75s med=59.99s  max=1m0s     p(90)=1m0s     p(95)=1m0s    
       { expected_response:true }...: avg=13.6s    min=1.75s med=8.25s   max=59.86s   p(90)=37.41s   p(95)=42.94s  
     http_req_failed................: 62.85% ✓ 3471      ✗ 2051  
     http_req_receiving.............: avg=117.46µs min=0s    med=0s      max=59.88ms  p(90)=153.79µs p(95)=261.95µs
     http_req_sending...............: avg=169.51µs min=9.5µs med=33.8µs  max=106.98ms p(90)=70.99µs  p(95)=103.97µs
     http_req_tls_handshaking.......: avg=0s       min=0s    med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=42.76s   min=1.75s med=59.99s  max=1m0s     p(90)=1m0s     p(95)=1m0s    
     http_reqs......................: 5522   16.241003/s
     iteration_duration.............: avg=42.77s   min=1.76s med=1m0s    max=1m0s     p(90)=1m0s     p(95)=1m0s    
     iterations.....................: 5522   16.241003/s
     vus............................: 4      min=4       max=1500
     vus_max........................: 1500   min=1500    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/153179be-629c-449b-0cfe-8f0616932d00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1304d9b1-684e-4c46-a370-e701bc275e00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/04209706-f903-4f11-67aa-9862acc5f500/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-deno`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  77% — ✓ 5037 / ✗ 1442
     ✗ no graphql errors
      ↳  77% — ✓ 5037 / ✗ 1442
     ✓ valid response structure

     checks.........................: 83.97% ✓ 15111     ✗ 2884  
     data_received..................: 442 MB 1.3 MB/s
     data_sent......................: 8.5 MB 25 kB/s
     http_req_blocked...............: avg=2.24ms min=2.29µs med=6.3µs   max=221.51ms p(90)=904.83µs p(95)=8.04ms
     http_req_connecting............: avg=2.11ms min=0s     med=0s      max=214.65ms p(90)=776.3µs  p(95)=7.29ms
     http_req_duration..............: avg=36.54s min=1.28s  med=35.75s  max=1m0s     p(90)=1m0s     p(95)=1m0s  
       { expected_response:true }...: avg=29.82s min=1.28s  med=29.17s  max=59.96s   p(90)=53.71s   p(95)=57.5s 
     http_req_failed................: 22.25% ✓ 1442      ✗ 5037  
     http_req_receiving.............: avg=1.94ms min=0s     med=129.5µs max=270.28ms p(90)=699.7µs  p(95)=7.19ms
     http_req_sending...............: avg=1.53ms min=12.3µs med=36.1µs  max=267.79ms p(90)=174.82µs p(95)=7.12ms
     http_req_tls_handshaking.......: avg=0s     min=0s     med=0s      max=0s       p(90)=0s       p(95)=0s    
     http_req_waiting...............: avg=36.54s min=1.28s  med=35.74s  max=1m0s     p(90)=1m0s     p(95)=1m0s  
     http_reqs......................: 6479   19.072561/s
     iteration_duration.............: avg=36.58s min=1.36s  med=35.78s  max=1m0s     p(90)=1m0s     p(95)=1m0s  
     iterations.....................: 6479   19.072561/s
     vus............................: 2      min=0       max=1500
     vus_max........................: 1500   min=1114    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/de2f6f23-17a0-44bf-b6d2-805149338a00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4de93abd-aa28-4200-696a-026fc6f46800/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e0d8530d-0dfe-4993-72b5-56360c571000/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  73% — ✓ 6512 / ✗ 2350
     ✗ no graphql errors
      ↳  73% — ✓ 6512 / ✗ 2350
     ✓ valid response structure

     checks.........................: 80.60% ✓ 19535     ✗ 4700  
     data_received..................: 572 MB 1.7 MB/s
     data_sent......................: 11 MB  34 kB/s
     http_req_blocked...............: avg=6.15ms min=2.4µs    med=6µs     max=1.22s    p(90)=1.34ms   p(95)=14.23ms
     http_req_connecting............: avg=5.96ms min=0s       med=0s      max=1.22s    p(90)=1.09ms   p(95)=13.87ms
     http_req_duration..............: avg=26.94s min=683.75ms med=13.54s  max=1m0s     p(90)=1m0s     p(95)=1m0s   
       { expected_response:true }...: avg=15.01s min=683.75ms med=9.33s   max=59.99s   p(90)=39.8s    p(95)=48.86s 
     http_req_failed................: 26.51% ✓ 2350      ✗ 6512  
     http_req_receiving.............: avg=2.16ms min=0s       med=104.8µs max=790.87ms p(90)=371.05µs p(95)=1.36ms 
     http_req_sending...............: avg=3.61ms min=10.1µs   med=31.65µs max=838.34ms p(90)=276.99µs p(95)=14.35ms
     http_req_tls_handshaking.......: avg=0s     min=0s       med=0s      max=0s       p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=26.93s min=683.42ms med=13.53s  max=1m0s     p(90)=1m0s     p(95)=1m0s   
     http_reqs......................: 8862   26.064317/s
     iteration_duration.............: avg=26.99s min=692.38ms med=13.57s  max=1m0s     p(90)=1m0s     p(95)=1m0s   
     iterations.....................: 8861   26.061376/s
     vus............................: 3      min=0       max=1500
     vus_max........................: 1500   min=1240    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/092246dd-52ea-4b47-24c9-ed117143dc00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/eb2c1c1d-3eec-4cf9-a98d-194a4c1a3b00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2165deb6-e7e9-499d-086d-d364bb73b000/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga-uws`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  77% — ✓ 7529 / ✗ 2145
     ✗ no graphql errors
      ↳  77% — ✓ 7529 / ✗ 2145
     ✓ valid response structure

     checks.........................: 84.03% ✓ 22587     ✗ 4290  
     data_received..................: 661 MB 1.9 MB/s
     data_sent......................: 12 MB  36 kB/s
     http_req_blocked...............: avg=3.79ms min=1.9µs    med=5.3µs  max=1.17s    p(90)=641.71µs p(95)=5.36ms 
     http_req_connecting............: avg=3.6ms  min=0s       med=0s     max=1.17s    p(90)=528.27µs p(95)=4.92ms 
     http_req_duration..............: avg=24.88s min=604.78ms med=10.42s max=1m0s     p(90)=1m0s     p(95)=1m0s   
       { expected_response:true }...: avg=14.88s min=604.78ms med=8.37s  max=59.97s   p(90)=42.27s   p(95)=50.19s 
     http_req_failed................: 22.17% ✓ 2145      ✗ 7529  
     http_req_receiving.............: avg=16.2ms min=0s       med=97.5µs max=25.41s   p(90)=360.76µs p(95)=1.86ms 
     http_req_sending...............: avg=2.83ms min=10.5µs   med=27.9µs max=504.07ms p(90)=198.79µs p(95)=11.01ms
     http_req_tls_handshaking.......: avg=0s     min=0s       med=0s     max=0s       p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=24.86s min=604.64ms med=10.4s  max=1m0s     p(90)=1m0s     p(95)=1m0s   
     http_reqs......................: 9674   28.452514/s
     iteration_duration.............: avg=24.93s min=622.21ms med=10.46s max=1m0s     p(90)=1m0s     p(95)=1m0s   
     iterations.....................: 9674   28.452514/s
     vus............................: 1      min=0       max=1500
     vus_max........................: 1500   min=1397    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/558efefe-baa6-41bc-97d2-29b1d6650600/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e2611837-34fe-43d9-7b19-0226fc095400/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e99019e1-d78f-4bc3-ed19-f55eae7d1f00/public" alt="HTTP Overview" />


  </details>