## Overview for: `fed-v1-ramping-vus`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. We are running a heavy load of concurrent VUs to measure response time and other stats, during stress. It measure things like memory usage, CPU usage, response times. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was trying to reach 1500 concurrent VUs over 300s


### Comparison


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6bc4d138-cfd0-4a6a-2986-7add15268b00/public" alt="Comparison" />


| Gateway                             | duration(p95)⬇️ |  RPS  |         Requests         |                       Durations                        |
| :---------------------------------- | :-------------: | :---: | :----------------------: | :----------------------------------------------------: |
| wundergraph                         |     1699ms      |  924  |  286546 total, 0 failed  |    avg: 739ms, p95: 1700ms, max: 3110ms, med: 674ms    |
| mesh-bun                            |     3116ms      |  495  |  153587 total, 0 failed  |   avg: 1534ms, p95: 3116ms, max: 5212ms, med: 1407ms   |
| mesh                                |     5643ms      |  264  |  81918 total, 0 failed   |   avg: 2914ms, p95: 5644ms, max: 9909ms, med: 2810ms   |
| stitching-federation-with-yoga      |     45789ms     |  31   |  10637 total, 0 failed   | avg: 23021ms, p95: 45790ms, max: 56322ms, med: 22459ms |
| apollo-router                       |     46496ms     |  36   | 12110 total, 3509 failed | avg: 21222ms, p95: 46497ms, max: 60018ms, med: 16782ms |
| stitching-federation-with-yoga-uws  |     49316ms     |  28   |   9839 total, 0 failed   | avg: 25052ms, p95: 49316ms, max: 57616ms, med: 23972ms |
| stitching-federation-with-yoga-deno |     49675ms     |  30   |  10200 total, 57 failed  | avg: 24510ms, p95: 49675ms, max: 60204ms, med: 24140ms |
| mesh-supergraph                     |     51428ms     |  31   |  10535 total, 12 failed  | avg: 23588ms, p95: 51428ms, max: 60001ms, med: 20557ms |
| stitching-federation-with-yoga-bun  |     59102ms     |  34   | 11573 total, 577 failed  | avg: 21393ms, p95: 59103ms, max: 60772ms, med: 20214ms |
| apollo-gateway-with-yoga-bun        |     59879ms     |  30   | 10380 total, 577 failed  | avg: 21994ms, p95: 59880ms, max: 60246ms, med: 17703ms |
| apollo-gateway-with-yoga-uws        |     60000ms     |  33   | 11224 total, 1655 failed | avg: 21537ms, p95: 60001ms, max: 61194ms, med: 9610ms  |
| apollo-server-node16                |     60001ms     |  29   | 10193 total, 2103 failed | avg: 23630ms, p95: 60001ms, max: 60239ms, med: 10019ms |
| mercurius                           |     60001ms     |  15   | 5256 total, 3526 failed  | avg: 45224ms, p95: 60001ms, max: 60020ms, med: 60000ms |
| apollo-gateway-with-yoga            |     60002ms     |  26   | 9015 total, 2188 failed  | avg: 26160ms, p95: 60002ms, max: 60370ms, med: 11667ms |
| apollo-server                       |     60002ms     |  29   | 9890 total, 1952 failed  | avg: 23897ms, p95: 60003ms, max: 60799ms, med: 10181ms |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 286546

     checks.........................: 66.66% ✓ 573092     ✗ 286546
     data_received..................: 42 MB  134 kB/s
     data_sent......................: 340 MB 1.1 MB/s
     http_req_blocked...............: avg=3.75ms   min=1.2µs    med=3.2µs    max=2.84s p(90)=5µs      p(95)=6.5µs  
     http_req_connecting............: avg=3.72ms   min=0s       med=0s       max=2.84s p(90)=0s       p(95)=0s     
     http_req_duration..............: avg=739.07ms min=285.9µs  med=673.65ms max=3.11s p(90)=1.49s    p(95)=1.69s  
       { expected_response:true }...: avg=739.07ms min=285.9µs  med=673.65ms max=3.11s p(90)=1.49s    p(95)=1.69s  
     http_req_failed................: 0.00%  ✓ 0          ✗ 286546
     http_req_receiving.............: avg=15.31ms  min=9.29µs   med=34.79µs  max=2.23s p(90)=569.05µs p(95)=77.67ms
     http_req_sending...............: avg=3.74ms   min=6.7µs    med=15.3µs   max=1.84s p(90)=123.3µs  p(95)=280.9µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s    p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=720.01ms min=251.1µs  med=665.09ms max=2.99s p(90)=1.44s    p(95)=1.62s  
     http_reqs......................: 286546 924.334389/s
     iteration_duration.............: avg=827.47ms min=888.41µs med=749.42ms max=4.61s p(90)=1.63s    p(95)=1.85s  
     iterations.....................: 286546 924.334389/s
     vus............................: 1      min=0        max=1499
     vus_max........................: 1500   min=1376     max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f2ec0fc0-af28-4fe8-7e45-7f5456720400/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e81ecdf2-a367-499f-31b9-0d515e0b7200/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/576f2faf-c49c-445b-3ce0-4a7039c46000/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  0% — ✓ 0 / ✗ 153587
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 153587

     checks.........................: 33.33% ✓ 153587     ✗ 307174
     data_received..................: 146 MB 471 kB/s
     data_sent......................: 182 MB 588 kB/s
     http_req_blocked...............: avg=990.85µs min=900ns  med=1.8µs  max=1.2s  p(90)=2.9µs   p(95)=3.7µs   
     http_req_connecting............: avg=979.64µs min=0s     med=0s     max=1.2s  p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=1.53s    min=1.51ms med=1.4s   max=5.21s p(90)=2.94s   p(95)=3.11s   
       { expected_response:true }...: avg=1.53s    min=1.51ms med=1.4s   max=5.21s p(90)=2.94s   p(95)=3.11s   
     http_req_failed................: 0.00%  ✓ 0          ✗ 153587
     http_req_receiving.............: avg=5.95ms   min=9.6µs  med=19.3µs max=1.09s p(90)=220.8µs p(95)=8.54ms  
     http_req_sending...............: avg=1.59ms   min=5.7µs  med=10.1µs max=1.05s p(90)=84µs    p(95)=111.69µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s    p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=1.52s    min=1.48ms med=1.4s   max=5.11s p(90)=2.93s   p(95)=3.1s    
     http_reqs......................: 153587 495.439814/s
     iteration_duration.............: avg=1.54s    min=1.99ms med=1.41s  max=5.38s p(90)=2.96s   p(95)=3.14s   
     iterations.....................: 153587 495.439814/s
     vus............................: 9      min=9        max=1499
     vus_max........................: 1500   min=1500     max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/74023ed7-1401-4673-b6ce-5f1100188f00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/64aeb1d1-43f9-4cb6-1e0f-2990a1a64800/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/52fe05f9-9373-428f-bd9f-6540358e3200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 81918

     checks.........................: 66.66% ✓ 163836     ✗ 81918 
     data_received..................: 93 MB  299 kB/s
     data_sent......................: 97 MB  314 kB/s
     http_req_blocked...............: avg=780.43µs min=1.2µs  med=2.8µs  max=932.16ms p(90)=4.5µs   p(95)=6.4µs   
     http_req_connecting............: avg=762.8µs  min=0s     med=0s     max=928.83ms p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=2.91s    min=3.3ms  med=2.81s  max=9.9s     p(90)=5.2s    p(95)=5.64s   
       { expected_response:true }...: avg=2.91s    min=3.3ms  med=2.81s  max=9.9s     p(90)=5.2s    p(95)=5.64s   
     http_req_failed................: 0.00%  ✓ 0          ✗ 81918 
     http_req_receiving.............: avg=2.63ms   min=12.7µs med=36.7µs max=626.87ms p(90)=263µs   p(95)=795.62µs
     http_req_sending...............: avg=1.32ms   min=7.5µs  med=14.1µs max=793.88ms p(90)=102.8µs p(95)=177.66µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=2.9s     min=3.23ms med=2.8s   max=9.73s    p(90)=5.19s   p(95)=5.64s   
     http_reqs......................: 81918  264.248536/s
     iteration_duration.............: avg=2.91s    min=3.89ms med=2.81s  max=10.43s   p(90)=5.2s    p(95)=5.65s   
     iterations.....................: 81918  264.248536/s
     vus............................: 1      min=0        max=1499
     vus_max........................: 1500   min=1466     max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b332825c-b70d-497b-3b7f-094e4fafe200/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2d458453-7499-4b61-d832-96f11202d300/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4f0f6d92-bb89-49e8-d9b0-2323b487ea00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 31911     ✗ 0     
     data_received..................: 934 MB  2.7 MB/s
     data_sent......................: 13 MB   39 kB/s
     http_req_blocked...............: avg=2.44ms min=2µs    med=4.3µs   max=748.21ms p(90)=179.74µs p(95)=516.87µs
     http_req_connecting............: avg=2.4ms  min=0s     med=0s      max=748.15ms p(90)=117.2µs  p(95)=430.21µs
     http_req_duration..............: avg=23.02s min=1.34s  med=22.45s  max=56.32s   p(90)=42.48s   p(95)=45.78s  
       { expected_response:true }...: avg=23.02s min=1.34s  med=22.45s  max=56.32s   p(90)=42.48s   p(95)=45.78s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 10637 
     http_req_receiving.............: avg=3.49ms min=55.2µs med=106.5µs max=574.36ms p(90)=486.63µs p(95)=3.17ms  
     http_req_sending...............: avg=2.4ms  min=9.4µs  med=21.4µs  max=594.85ms p(90)=102.08µs p(95)=7.49ms  
     http_req_tls_handshaking.......: avg=0s     min=0s     med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=23.01s min=1.34s  med=22.45s  max=56.32s   p(90)=42.48s   p(95)=45.75s  
     http_reqs......................: 10637   31.294079/s
     iteration_duration.............: avg=23.06s min=1.36s  med=22.48s  max=56.73s   p(90)=42.5s    p(95)=45.8s   
     iterations.....................: 10637   31.294079/s
     vus............................: 4       min=0       max=1500
     vus_max........................: 1500    min=1410    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6d22350c-13ad-4645-96e3-fdc68d055000/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/72ff16d8-8654-4c2b-35cf-1180e3c94700/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/75758cea-4b3b-44e0-5623-d5a451f25b00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  71% — ✓ 8601 / ✗ 3509
     ✗ no graphql errors
      ↳  71% — ✓ 8601 / ✗ 3509
     ✓ valid response structure

     checks.........................: 78.61% ✓ 25795     ✗ 7018  
     data_received..................: 755 MB 2.3 MB/s
     data_sent......................: 14 MB  43 kB/s
     http_req_blocked...............: avg=753.92µs min=1.9µs    med=4.89µs   max=422.95ms p(90)=218.35µs p(95)=485.44µs
     http_req_connecting............: avg=730.38µs min=0s       med=0s       max=422.64ms p(90)=139.9µs  p(95)=402.56µs
     http_req_duration..............: avg=21.22s   min=591.05ms med=16.78s   max=1m0s     p(90)=43.5s    p(95)=46.49s  
       { expected_response:true }...: avg=13.27s   min=591.05ms med=11.18s   max=54.66s   p(90)=27.66s   p(95)=31.44s  
     http_req_failed................: 28.97% ✓ 3509      ✗ 8601  
     http_req_receiving.............: avg=893.41µs min=0s       med=103.65µs max=459.8ms  p(90)=252.21µs p(95)=406.77µs
     http_req_sending...............: avg=750.59µs min=9.7µs    med=26.1µs   max=460.82ms p(90)=72.2µs   p(95)=136.55µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=21.22s   min=590.06ms med=16.78s   max=1m0s     p(90)=43.5s    p(95)=46.49s  
     http_reqs......................: 12110  36.463059/s
     iteration_duration.............: avg=21.23s   min=616.67ms med=16.78s   max=1m0s     p(90)=43.52s   p(95)=46.49s  
     iterations.....................: 12102  36.438971/s
     vus............................: 64     min=0       max=1500
     vus_max........................: 1500   min=1299    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/05057b36-6f40-40b1-8168-e9c08b4a3d00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b7df8b8e-e81c-4341-28b0-a595d3a6cd00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/32445901-2c21-4c05-72f9-e52405ce5800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-uws`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 9812 / ✗ 27
     ✗ valid response structure
      ↳  99% — ✓ 9811 / ✗ 27

     checks.........................: 99.81% ✓ 29462     ✗ 54    
     data_received..................: 862 MB 2.5 MB/s
     data_sent......................: 12 MB  36 kB/s
     http_req_blocked...............: avg=2.46ms min=1.9µs  med=6.2µs   max=680.3ms  p(90)=228.86µs p(95)=596.98µs
     http_req_connecting............: avg=2.39ms min=0s     med=0s      max=680.03ms p(90)=152.02µs p(95)=495.8µs 
     http_req_duration..............: avg=25.05s min=1.14s  med=23.97s  max=57.61s   p(90)=46.18s   p(95)=49.31s  
       { expected_response:true }...: avg=25.05s min=1.14s  med=23.97s  max=57.61s   p(90)=46.18s   p(95)=49.31s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 9839  
     http_req_receiving.............: avg=8.73ms min=48.7µs med=138.4µs max=12.18s   p(90)=634.35µs p(95)=3.21ms  
     http_req_sending...............: avg=2.58ms min=8.9µs  med=31.4µs  max=455.24ms p(90)=129.32µs p(95)=9.39ms  
     http_req_tls_handshaking.......: avg=0s     min=0s     med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=25.04s min=1.14s  med=23.96s  max=57.61s   p(90)=46.16s   p(95)=49.3s   
     http_reqs......................: 9839   28.963824/s
     iteration_duration.............: avg=25.1s  min=1.15s  med=23.98s  max=57.63s   p(90)=46.19s   p(95)=49.48s  
     iterations.....................: 9838   28.96088/s
     vus............................: 3      min=0       max=1499
     vus_max........................: 1500   min=1419    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/09a4a45f-0713-4a05-4d1a-f3f085008b00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/421dc9bb-c9ae-46c4-868e-5b0250befd00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8abec08f-856a-47da-85ca-57770d7b3200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-deno`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  99% — ✓ 10143 / ✗ 57
     ✗ no graphql errors
      ↳  99% — ✓ 10143 / ✗ 57
     ✓ valid response structure

     checks.........................: 99.62% ✓ 30429     ✗ 114   
     data_received..................: 890 MB 2.6 MB/s
     data_sent......................: 13 MB  37 kB/s
     http_req_blocked...............: avg=1.45ms min=1.3µs    med=4.1µs   max=481.95ms p(90)=465.71µs p(95)=620.73µs
     http_req_connecting............: avg=1.39ms min=0s       med=0s      max=481.88ms p(90)=385.41µs p(95)=535.02µs
     http_req_duration..............: avg=24.51s min=923.85ms med=24.14s  max=1m0s     p(90)=45.11s   p(95)=49.67s  
       { expected_response:true }...: avg=24.31s min=923.85ms med=23.97s  max=59.92s   p(90)=44.48s   p(95)=49.43s  
     http_req_failed................: 0.55%  ✓ 57        ✗ 10143 
     http_req_receiving.............: avg=2.36ms min=0s       med=104.5µs max=316.18ms p(90)=1.94ms   p(95)=11.51ms 
     http_req_sending...............: avg=1.47ms min=8.69µs   med=21.7µs  max=408.17ms p(90)=99.92µs  p(95)=7.28ms  
     http_req_tls_handshaking.......: avg=0s     min=0s       med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=24.5s  min=923.37ms med=24.13s  max=1m0s     p(90)=45.11s   p(95)=49.65s  
     http_reqs......................: 10200  30.141444/s
     iteration_duration.............: avg=24.54s min=980.92ms med=24.18s  max=1m0s     p(90)=45.15s   p(95)=49.7s   
     iterations.....................: 10200  30.141444/s
     vus............................: 2      min=2       max=1500
     vus_max........................: 1500   min=1500    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/cc790a95-5fbd-4226-a43f-1c36f052ef00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8c92c731-0a9a-4162-22ca-ca9e930e7c00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/af7915af-a439-4822-a4f2-2521c9bfb200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  99% — ✓ 10523 / ✗ 12
     ✗ no graphql errors
      ↳  99% — ✓ 10523 / ✗ 12
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 10523

     checks.........................: 66.61% ✓ 21046     ✗ 10547 
     data_received..................: 926 MB 2.7 MB/s
     data_sent......................: 13 MB  39 kB/s
     http_req_blocked...............: avg=135.63µs min=2.1µs  med=4.4µs   max=98.19ms p(90)=252.84µs p(95)=542.49µs
     http_req_connecting............: avg=118.72µs min=0s     med=0s      max=97.78ms p(90)=166.52µs p(95)=460.19µs
     http_req_duration..............: avg=23.58s   min=1.76s  med=20.55s  max=1m0s    p(90)=48.25s   p(95)=51.42s  
       { expected_response:true }...: avg=23.54s   min=1.76s  med=20.53s  max=59.97s  p(90)=48.2s    p(95)=51.4s   
     http_req_failed................: 0.11%  ✓ 12        ✗ 10523 
     http_req_receiving.............: avg=3.67ms   min=0s     med=152.9µs max=9.34s   p(90)=387.16µs p(95)=565.77µs
     http_req_sending...............: avg=134.7µs  min=11.2µs med=25.3µs  max=95.27ms p(90)=70.6µs   p(95)=92.5µs  
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=23.58s   min=1.76s  med=20.54s  max=1m0s    p(90)=48.24s   p(95)=51.42s  
     http_reqs......................: 10535  31.067275/s
     iteration_duration.............: avg=23.59s   min=1.76s  med=20.55s  max=1m0s    p(90)=48.25s   p(95)=51.42s  
     iterations.....................: 10535  31.067275/s
     vus............................: 1      min=1       max=1500
     vus_max........................: 1500   min=1500    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6c57d78f-11dd-4da3-ade6-f8c4cd6da100/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c07d868b-a3ca-4e4b-f0df-580a082bc200/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b63ad342-f504-4fb4-46f9-965594e14200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-bun`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  95% — ✓ 10996 / ✗ 577
     ✗ no graphql errors
      ↳  95% — ✓ 10996 / ✗ 577
     ✓ valid response structure

     checks.........................: 96.61% ✓ 32988     ✗ 1154  
     data_received..................: 965 MB 2.9 MB/s
     data_sent......................: 14 MB  42 kB/s
     http_req_blocked...............: avg=11.89ms  min=1.9µs    med=4.59µs   max=1.61s    p(90)=536.33µs p(95)=14.42ms 
     http_req_connecting............: avg=11.68ms  min=0s       med=0s       max=1.61s    p(90)=444.79µs p(95)=13.64ms 
     http_req_duration..............: avg=21.39s   min=175.42ms med=20.21s   max=1m0s     p(90)=40.84s   p(95)=59.1s   
       { expected_response:true }...: avg=19.36s   min=175.42ms med=20.02s   max=59.94s   p(90)=28.53s   p(95)=41.2s   
     http_req_failed................: 4.98%  ✓ 577       ✗ 10996 
     http_req_receiving.............: avg=179.89ms min=0s       med=129.69µs max=27.47s   p(90)=5.78ms   p(95)=195.09ms
     http_req_sending...............: avg=11.74ms  min=11µs     med=25.89µs  max=793.08ms p(90)=13.26ms  p(95)=55.48ms 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=21.2s    min=172.27ms med=20.13s   max=1m0s     p(90)=40.78s   p(95)=58.73s  
     http_reqs......................: 11573  34.694335/s
     iteration_duration.............: avg=21.56s   min=225.89ms med=20.39s   max=1m1s     p(90)=41.22s   p(95)=59.87s  
     iterations.....................: 11573  34.694335/s
     vus............................: 14     min=0       max=1499
     vus_max........................: 1500   min=1310    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/817f9537-2dbd-445d-7a5c-e0a5fe4e9000/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ac594366-7df9-4d46-7fcb-9177e80ed800/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2d8c8576-82fd-4827-b2ae-06878697ee00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga-bun`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  94% — ✓ 9803 / ✗ 577
     ✗ no graphql errors
      ↳  94% — ✓ 9803 / ✗ 577
     ✓ valid response structure

     checks.........................: 96.22% ✓ 29406     ✗ 1154  
     data_received..................: 860 MB 2.5 MB/s
     data_sent......................: 13 MB  40 kB/s
     http_req_blocked...............: avg=55.04ms  min=1.9µs    med=4.59µs  max=6.51s  p(90)=205.02µs p(95)=47.51ms 
     http_req_connecting............: avg=54.18ms  min=0s       med=0s      max=6.51s  p(90)=131.8µs  p(95)=40.09ms 
     http_req_duration..............: avg=21.99s   min=805.34ms med=17.7s   max=1m0s   p(90)=47.45s   p(95)=59.87s  
       { expected_response:true }...: avg=19.76s   min=805.34ms med=16.03s  max=59.95s p(90)=40.61s   p(95)=47.31s  
     http_req_failed................: 5.55%  ✓ 577       ✗ 9803  
     http_req_receiving.............: avg=101.61ms min=0s       med=104.8µs max=13.14s p(90)=3.35ms   p(95)=449.19ms
     http_req_sending...............: avg=42.87ms  min=9.1µs    med=22.6µs  max=2.69s  p(90)=21.31ms  p(95)=205.17ms
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s     p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=21.84s   min=804.59ms med=16.88s  max=1m0s   p(90)=47.42s   p(95)=59.49s  
     http_reqs......................: 10380  30.5832/s
     iteration_duration.............: avg=22.85s   min=845.53ms med=18.49s  max=1m1s   p(90)=48.57s   p(95)=1m0s    
     iterations.....................: 10377  30.574361/s
     vus............................: 1      min=0       max=1499
     vus_max........................: 1500   min=1350    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ae9e8547-64a4-41c7-880c-488c2e25ba00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b5ae38d3-e2e4-476d-b850-f5f386c1e200/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0a60f484-d09f-46cd-c033-0a8fa9b8cd00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga-uws`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  85% — ✓ 9569 / ✗ 1655
     ✗ no graphql errors
      ↳  85% — ✓ 9569 / ✗ 1655
     ✓ valid response structure

     checks.........................: 89.66% ✓ 28706     ✗ 3310  
     data_received..................: 840 MB 2.5 MB/s
     data_sent......................: 14 MB  41 kB/s
     http_req_blocked...............: avg=5.11ms  min=1.9µs med=4.4µs  max=1.1s     p(90)=511.1µs  p(95)=7.17ms 
     http_req_connecting............: avg=4.94ms  min=0s    med=0s     max=781.52ms p(90)=431.02µs p(95)=6.85ms 
     http_req_duration..............: avg=21.53s  min=1.65s med=9.6s   max=1m1s     p(90)=1m0s     p(95)=1m0s   
       { expected_response:true }...: avg=14.88s  min=1.65s med=8.09s  max=59.19s   p(90)=41.19s   p(95)=47.12s 
     http_req_failed................: 14.74% ✓ 1655      ✗ 9569  
     http_req_receiving.............: avg=17.73ms min=0s    med=88.6µs max=24.13s   p(90)=336.35µs p(95)=2.11ms 
     http_req_sending...............: avg=3.76ms  min=9.6µs med=22.2µs max=681.46ms p(90)=302.39µs p(95)=14.17ms
     http_req_tls_handshaking.......: avg=0s      min=0s    med=0s     max=0s       p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=21.51s  min=1.65s med=9.58s  max=1m1s     p(90)=59.99s   p(95)=1m0s   
     http_reqs......................: 11224  33.020596/s
     iteration_duration.............: avg=21.59s  min=1.66s med=9.62s  max=1m1s     p(90)=1m0s     p(95)=1m0s   
     iterations.....................: 11223  33.017654/s
     vus............................: 4      min=0       max=1500
     vus_max........................: 1500   min=1429    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1112584d-f3e6-47aa-3ac9-aa02a6df8100/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c965803e-5f11-4282-961a-66302f268b00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d2c2d2af-5465-4c6f-b14b-7b66e7fa5600/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server-node16`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  79% — ✓ 8090 / ✗ 2103
     ✗ no graphql errors
      ↳  79% — ✓ 8090 / ✗ 2103
     ✓ valid response structure

     checks.........................: 85.22% ✓ 24270     ✗ 4206  
     data_received..................: 711 MB 2.1 MB/s
     data_sent......................: 13 MB  38 kB/s
     http_req_blocked...............: avg=3.66ms min=1.5µs    med=4.8µs  max=673.79ms p(90)=988.07µs p(95)=8.86ms 
     http_req_connecting............: avg=3.52ms min=0s       med=0s     max=673.54ms p(90)=812.61µs p(95)=8.29ms 
     http_req_duration..............: avg=23.63s min=652.04ms med=10.01s max=1m0s     p(90)=1m0s     p(95)=1m0s   
       { expected_response:true }...: avg=14.37s min=652.04ms med=7.57s  max=1m0s     p(90)=39.96s   p(95)=52.42s 
     http_req_failed................: 20.63% ✓ 2103      ✗ 8090  
     http_req_receiving.............: avg=2.67ms min=0s       med=91.8µs max=702.26ms p(90)=304.48µs p(95)=1.47ms 
     http_req_sending...............: avg=2.83ms min=9.4µs    med=24.5µs max=724.08ms p(90)=353.36µs p(95)=13.49ms
     http_req_tls_handshaking.......: avg=0s     min=0s       med=0s     max=0s       p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=23.62s min=651.91ms med=10.01s max=1m0s     p(90)=1m0s     p(95)=1m0s   
     http_reqs......................: 10193  29.987777/s
     iteration_duration.............: avg=23.67s min=668.76ms med=10.05s max=1m1s     p(90)=1m0s     p(95)=1m0s   
     iterations.....................: 10193  29.987777/s
     vus............................: 1      min=0       max=1500
     vus_max........................: 1500   min=1316    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/89c65885-d3ef-4a82-cea5-f769f35f1c00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/fabf63ea-b919-4ac0-6e9e-09e6ae99ec00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/05e8cd75-ed15-4d73-4982-db1f93758f00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  32% — ✓ 1730 / ✗ 3526
     ✗ no graphql errors
      ↳  32% — ✓ 1730 / ✗ 3526
     ✓ valid response structure

     checks.........................: 42.39% ✓ 5190      ✗ 7052  
     data_received..................: 152 MB 447 kB/s
     data_sent......................: 7.1 MB 21 kB/s
     http_req_blocked...............: avg=1.75ms   min=1.8µs med=173.39µs max=151.07ms p(90)=894.59µs p(95)=1.58ms  
     http_req_connecting............: avg=1.69ms   min=0s    med=120.09µs max=151.03ms p(90)=802.24µs p(95)=1.48ms  
     http_req_duration..............: avg=45.22s   min=1.47s med=59.99s   max=1m0s     p(90)=1m0s     p(95)=1m0s    
       { expected_response:true }...: avg=15.1s    min=1.47s med=7.83s    max=59.8s    p(90)=35.88s   p(95)=55.13s  
     http_req_failed................: 67.08% ✓ 3526      ✗ 1730  
     http_req_receiving.............: avg=103.21µs min=0s    med=0s       max=26.57ms  p(90)=157.54µs p(95)=256.32µs
     http_req_sending...............: avg=161.51µs min=8µs   med=35.7µs   max=65.46ms  p(90)=70.2µs   p(95)=101.72µs
     http_req_tls_handshaking.......: avg=0s       min=0s    med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=45.22s   min=1.47s med=59.99s   max=1m0s     p(90)=1m0s     p(95)=1m0s    
     http_reqs......................: 5256   15.458218/s
     iteration_duration.............: avg=45.22s   min=1.49s med=1m0s     max=1m0s     p(90)=1m0s     p(95)=1m0s    
     iterations.....................: 5256   15.458218/s
     vus............................: 9      min=9       max=1500
     vus_max........................: 1500   min=1500    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7c9545ef-5dcb-4408-33ab-e4e7dd0da100/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/924dcb87-0ddf-4bd0-7328-eafe3113f700/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3bf0f291-5c30-4a33-cbb4-eb9d297f3b00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  75% — ✓ 6827 / ✗ 2188
     ✗ no graphql errors
      ↳  75% — ✓ 6827 / ✗ 2188
     ✓ valid response structure

     checks.........................: 82.39% ✓ 20481     ✗ 4376  
     data_received..................: 599 MB 1.8 MB/s
     data_sent......................: 12 MB  34 kB/s
     http_req_blocked...............: avg=5.16ms min=2µs   med=5.9µs   max=814.87ms p(90)=1.18ms   p(95)=8.65ms 
     http_req_connecting............: avg=4.85ms min=0s    med=0s      max=495.58ms p(90)=1.02ms   p(95)=7.95ms 
     http_req_duration..............: avg=26.16s min=1.46s med=11.66s  max=1m0s     p(90)=1m0s     p(95)=1m0s   
       { expected_response:true }...: avg=15.31s min=1.46s med=8.68s   max=59.98s   p(90)=43.65s   p(95)=50.16s 
     http_req_failed................: 24.27% ✓ 2188      ✗ 6827  
     http_req_receiving.............: avg=1.93ms min=0s    med=101.9µs max=534.69ms p(90)=360.09µs p(95)=1.21ms 
     http_req_sending...............: avg=3.43ms min=11µs  med=30.8µs  max=454.94ms p(90)=254.36µs p(95)=14.81ms
     http_req_tls_handshaking.......: avg=0s     min=0s    med=0s      max=0s       p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=26.15s min=1.46s med=11.65s  max=1m0s     p(90)=1m0s     p(95)=1m0s   
     http_reqs......................: 9015   26.522322/s
     iteration_duration.............: avg=26.21s min=1.47s med=11.79s  max=1m1s     p(90)=1m0s     p(95)=1m0s   
     iterations.....................: 9015   26.522322/s
     vus............................: 4      min=0       max=1500
     vus_max........................: 1500   min=1126    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/bc3ab2c0-99ee-4f82-5d50-48c41c10d400/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/87667e26-a0c8-4355-7b3b-82e813a39400/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c38094c5-8b26-474e-192c-1032f63b7100/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  80% — ✓ 7938 / ✗ 1952
     ✗ no graphql errors
      ↳  80% — ✓ 7938 / ✗ 1952
     ✓ valid response structure

     checks.........................: 85.91% ✓ 23814     ✗ 3904  
     data_received..................: 698 MB 2.1 MB/s
     data_sent......................: 13 MB  37 kB/s
     http_req_blocked...............: avg=5.18ms min=2µs    med=5.9µs   max=991.54ms p(90)=587.82µs p(95)=7.81ms  
     http_req_connecting............: avg=5.07ms min=0s     med=0s      max=991.44ms p(90)=494.41µs p(95)=6.96ms  
     http_req_duration..............: avg=23.89s min=1.06s  med=10.18s  max=1m0s     p(90)=1m0s     p(95)=1m0s    
       { expected_response:true }...: avg=15.02s min=1.06s  med=7.81s   max=59.96s   p(90)=40.53s   p(95)=50.03s  
     http_req_failed................: 19.73% ✓ 1952      ✗ 7938  
     http_req_receiving.............: avg=1.44ms min=0s     med=113.1µs max=832.27ms p(90)=337.12µs p(95)=959.33µs
     http_req_sending...............: avg=3.55ms min=10.4µs med=30.6µs  max=780.89ms p(90)=351.16µs p(95)=15.83ms 
     http_req_tls_handshaking.......: avg=0s     min=0s     med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=23.89s min=1.06s  med=10.17s  max=1m0s     p(90)=1m0s     p(95)=1m0s    
     http_reqs......................: 9890   29.087766/s
     iteration_duration.............: avg=23.94s min=1.08s  med=10.22s  max=1m0s     p(90)=1m0s     p(95)=1m0s    
     iterations.....................: 9890   29.087766/s
     vus............................: 9      min=0       max=1500
     vus_max........................: 1500   min=1500    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/99e2de7c-417a-4a2e-02ce-9962d59e5c00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b9bf186b-ef17-4f30-4f35-251035a47e00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/474d55b2-8b09-43cc-d81c-6e2da5742b00/public" alt="HTTP Overview" />


  </details>