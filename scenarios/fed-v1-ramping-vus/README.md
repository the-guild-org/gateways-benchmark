## Overview for: `fed-v1-ramping-vus`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. We are running a heavy load of concurrent VUs to measure response time and other stats, during stress. It measure things like memory usage, CPU usage, response times. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was trying to reach 1500 concurrent VUs over 300s


### Comparison


| Gateway                             | duration(p95)⬇️ |  RPS  |         Requests         |                       Durations                        |
| :---------------------------------- | :-------------: | :---: | :----------------------: | :----------------------------------------------------: |
| wundergraph                         |     1872ms      |  826  |  256109 total, 0 failed  |    avg: 906ms, p95: 1873ms, max: 3131ms, med: 854ms    |
| mesh-supergraph                     |     13075ms     |  117  |  36554 total, 0 failed   |  avg: 6648ms, p95: 13076ms, max: 17893ms, med: 6318ms  |
| apollo-router                       |     14679ms     |  107  |  33826 total, 0 failed   |  avg: 7301ms, p95: 14680ms, max: 21827ms, med: 7223ms  |
| stitching-federation-with-yoga-bun  |     17475ms     |  106  |  33062 total, 0 failed   |  avg: 7372ms, p95: 17475ms, max: 37754ms, med: 7170ms  |
| mesh                                |     19169ms     |  78   |  24492 total, 0 failed   | avg: 10100ms, p95: 19170ms, max: 26298ms, med: 9899ms  |
| stitching-federation-with-yoga-deno |     24388ms     |  71   |  22606 total, 0 failed   | avg: 11070ms, p95: 24388ms, max: 51991ms, med: 10083ms |
| mercurius                           |     25244ms     |  57   |  17973 total, 0 failed   | avg: 13593ms, p95: 25245ms, max: 26213ms, med: 13536ms |
| apollo-gateway-with-yoga-uws        |     33546ms     |  60   |  19309 total, 0 failed   | avg: 13079ms, p95: 33546ms, max: 52066ms, med: 9629ms  |
| stitching-federation-with-yoga-uws  |     49140ms     |  58   | 19594 total, 220 failed  | avg: 12362ms, p95: 49140ms, max: 60005ms, med: 5831ms  |
| apollo-server-node16                |     53131ms     |  41   | 13792 total, 234 failed  | avg: 18945ms, p95: 53131ms, max: 60004ms, med: 12413ms |
| apollo-gateway-with-yoga            |     60000ms     |  48   | 16100 total, 2995 failed | avg: 15419ms, p95: 60001ms, max: 60046ms, med: 4367ms  |
| apollo-server                       |     60000ms     |  47   | 15891 total, 2992 failed | avg: 15678ms, p95: 60001ms, max: 60038ms, med: 4491ms  |
| stitching-federation-with-yoga      |     60000ms     |  81   | 27202 total, 2699 failed |  avg: 9286ms, p95: 60000ms, max: 60033ms, med: 3095ms  |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 768327     ✗ 0     
     data_received..................: 1.3 GB  4.1 MB/s
     data_sent......................: 304 MB  981 kB/s
     http_req_blocked...............: avg=788.07µs min=900ns  med=1.9µs    max=1.5s  p(90)=3.1µs    p(95)=3.9µs  
     http_req_connecting............: avg=779.89µs min=0s     med=0s       max=1.5s  p(90)=0s       p(95)=0s     
     http_req_duration..............: avg=905.51ms min=6.04ms med=854.29ms max=3.13s p(90)=1.63s    p(95)=1.87s  
       { expected_response:true }...: avg=905.51ms min=6.04ms med=854.29ms max=3.13s p(90)=1.63s    p(95)=1.87s  
     http_req_failed................: 0.00%   ✓ 0          ✗ 256109
     http_req_receiving.............: avg=5.29ms   min=13.6µs med=27.2µs   max=1.19s p(90)=150.62µs p(95)=662.1µs
     http_req_sending...............: avg=1.58ms   min=5.7µs  med=10.3µs   max=2.11s p(90)=22µs     p(95)=95.3µs 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s       max=0s    p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=898.63ms min=5.95ms med=850.81ms max=3.02s p(90)=1.62s    p(95)=1.83s  
     http_reqs......................: 256109  826.145047/s
     iteration_duration.............: avg=925.86ms min=6.67ms med=869.23ms max=4.6s  p(90)=1.67s    p(95)=1.92s  
     iterations.....................: 256109  826.145047/s
     vus............................: 10      min=10       max=1499
     vus_max........................: 1500    min=1500     max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b91f9dac-aea5-4987-4f46-6f25d4a60200/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e011e96d-96f9-403a-fb26-52c1b899fd00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 36439 / ✗ 115
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 36554

     checks.........................: 66.56% ✓ 72993      ✗ 36669 
     data_received..................: 185 MB 596 kB/s
     data_sent......................: 43 MB  140 kB/s
     http_req_blocked...............: avg=25.09µs min=800ns   med=1.9µs   max=22.04ms p(90)=3µs     p(95)=15.4µs
     http_req_connecting............: avg=19.49µs min=0s      med=0s      max=22.01ms p(90)=0s      p(95)=0s    
     http_req_duration..............: avg=6.64s   min=12.11ms med=6.31s   max=17.89s  p(90)=11.8s   p(95)=13.07s
       { expected_response:true }...: avg=6.64s   min=12.11ms med=6.31s   max=17.89s  p(90)=11.8s   p(95)=13.07s
     http_req_failed................: 0.00%  ✓ 0          ✗ 36554 
     http_req_receiving.............: avg=47.24µs min=16.6µs  med=37.79µs max=31.31ms p(90)=63.6µs  p(95)=73.2µs
     http_req_sending...............: avg=20.12µs min=5.6µs   med=11.8µs  max=19.31ms p(90)=23.57µs p(95)=33.5µs
     http_req_tls_handshaking.......: avg=0s      min=0s      med=0s      max=0s      p(90)=0s      p(95)=0s    
     http_req_waiting...............: avg=6.64s   min=12.03ms med=6.31s   max=17.89s  p(90)=11.8s   p(95)=13.07s
     http_reqs......................: 36554  117.912375/s
     iteration_duration.............: avg=6.64s   min=12.42ms med=6.31s   max=17.89s  p(90)=11.8s   p(95)=13.07s
     iterations.....................: 36554  117.912375/s
     vus............................: 2      min=0        max=1499
     vus_max........................: 1500   min=1255     max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9d95156d-9d02-4c95-8ed2-6f676fe2a700/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/76909ab9-d962-45d4-435c-5e14fed9fd00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 33760 / ✗ 66
     ✗ valid response structure
      ↳  99% — ✓ 33760 / ✗ 66

     checks.........................: 99.86% ✓ 101346     ✗ 132   
     data_received..................: 168 MB 536 kB/s
     data_sent......................: 40 MB  128 kB/s
     http_req_blocked...............: avg=56.39µs  min=1.3µs    med=2.4µs  max=177.73ms p(90)=3.9µs  p(95)=18.1µs
     http_req_connecting............: avg=49.31µs  min=0s       med=0s     max=177.68ms p(90)=0s     p(95)=0s    
     http_req_duration..............: avg=7.3s     min=150.73ms med=7.22s  max=21.82s   p(90)=13.36s p(95)=14.67s
       { expected_response:true }...: avg=7.3s     min=150.73ms med=7.22s  max=21.82s   p(90)=13.36s p(95)=14.67s
     http_req_failed................: 0.00%  ✓ 0          ✗ 33826 
     http_req_receiving.............: avg=76.46µs  min=18.3µs   med=45.6µs max=101.42ms p(90)=75.3µs p(95)=85.9µs
     http_req_sending...............: avg=131.97µs min=6.7µs    med=12.8µs max=353.36ms p(90)=29.1µs p(95)=59.5µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s     p(95)=0s    
     http_req_waiting...............: avg=7.3s     min=150.65ms med=7.22s  max=21.82s   p(90)=13.36s p(95)=14.67s
     http_reqs......................: 33826  107.602578/s
     iteration_duration.............: avg=7.3s     min=151.48ms med=7.22s  max=21.82s   p(90)=13.36s p(95)=14.68s
     iterations.....................: 33826  107.602578/s
     vus............................: 76     min=50       max=1500
     vus_max........................: 1500   min=1500     max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c9b0a70b-7a8b-4f80-5c8b-410ee0ac7700/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/62cfa2a1-44ae-4889-5f88-fd06413e4a00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 33061 / ✗ 1
     ✗ valid response structure
      ↳  99% — ✓ 33061 / ✗ 1

     checks.........................: 99.99% ✓ 99184      ✗ 2     
     data_received..................: 165 MB 529 kB/s
     data_sent......................: 39 MB  126 kB/s
     http_req_blocked...............: avg=346.06µs min=1.3µs    med=2.6µs  max=508.66ms p(90)=5.4µs   p(95)=82.09µs 
     http_req_connecting............: avg=335.65µs min=0s       med=0s     max=508.6ms  p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=7.37s    min=570.05ms med=7.17s  max=37.75s   p(90)=10.58s  p(95)=17.47s  
       { expected_response:true }...: avg=7.37s    min=570.05ms med=7.17s  max=37.75s   p(90)=10.58s  p(95)=17.47s  
     http_req_failed................: 0.00%  ✓ 0          ✗ 33062 
     http_req_receiving.............: avg=1.03ms   min=21µs     med=51µs   max=482.98ms p(90)=89.29µs p(95)=258.51µs
     http_req_sending...............: avg=671.6µs  min=7.7µs    med=14.6µs max=421.29ms p(90)=62.8µs  p(95)=126.1µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=7.37s    min=569.93ms med=7.17s  max=37.75s   p(90)=10.58s  p(95)=17.47s  
     http_reqs......................: 33062  106.160685/s
     iteration_duration.............: avg=7.37s    min=571.02ms med=7.17s  max=37.75s   p(90)=10.58s  p(95)=17.47s  
     iterations.....................: 33062  106.160685/s
     vus............................: 307    min=0        max=1500
     vus_max........................: 1500   min=1337     max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3600950f-552e-432c-9362-2c2c43dbee00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/50eecb23-391a-417a-4543-d1cb66fad500/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  98% — ✓ 24242 / ✗ 250
     ✗ valid response structure
      ↳  98% — ✓ 24242 / ✗ 250

     checks.........................: 99.31% ✓ 72976     ✗ 500   
     data_received..................: 124 MB 395 kB/s
     data_sent......................: 29 MB  93 kB/s
     http_req_blocked...............: avg=106.09µs min=1.4µs    med=2.7µs  max=416.4ms  p(90)=4.8µs  p(95)=219.96µs
     http_req_connecting............: avg=93.29µs  min=0s       med=0s     max=415.4ms  p(90)=0s     p(95)=148.8µs 
     http_req_duration..............: avg=10.1s    min=928.62ms med=9.89s  max=26.29s   p(90)=17.94s p(95)=19.16s  
       { expected_response:true }...: avg=10.1s    min=928.62ms med=9.89s  max=26.29s   p(90)=17.94s p(95)=19.16s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 24492 
     http_req_receiving.............: avg=243.75µs min=23.8µs   med=58.3µs max=289.92ms p(90)=84.7µs p(95)=97.3µs  
     http_req_sending...............: avg=79.93µs  min=8.1µs    med=15µs   max=113.74ms p(90)=34.3µs p(95)=69.2µs  
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=10.09s   min=928.53ms med=9.89s  max=26.29s   p(90)=17.94s p(95)=19.16s  
     http_reqs......................: 24492  78.008937/s
     iteration_duration.............: avg=10.1s    min=929.28ms med=9.89s  max=26.29s   p(90)=17.94s p(95)=19.17s  
     iterations.....................: 24492  78.008937/s
     vus............................: 30     min=0       max=1500
     vus_max........................: 1500   min=1317    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/dedc81aa-b6da-4475-47da-0a744adb3d00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e470ca75-6ebc-445e-aa3b-467f3372ae00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-deno`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  96% — ✓ 21721 / ✗ 885
     ✗ valid response structure
      ↳  96% — ✓ 21721 / ✗ 885

     checks.........................: 97.39% ✓ 66048     ✗ 1770  
     data_received..................: 128 MB 405 kB/s
     data_sent......................: 27 MB  85 kB/s
     http_req_blocked...............: avg=65.91µs  min=1.2µs    med=2.8µs  max=42.57ms p(90)=6.5µs   p(95)=338.1µs 
     http_req_connecting............: avg=52.15µs  min=0s       med=0s     max=29.54ms p(90)=0s      p(95)=188.02µs
     http_req_duration..............: avg=11.06s   min=688.78ms med=10.08s max=51.99s  p(90)=21.83s  p(95)=24.38s  
       { expected_response:true }...: avg=11.06s   min=688.78ms med=10.08s max=51.99s  p(90)=21.83s  p(95)=24.38s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 22606 
     http_req_receiving.............: avg=154.85µs min=19.09µs  med=40.9µs max=53.54ms p(90)=100.2µs p(95)=154.57µs
     http_req_sending...............: avg=81.96µs  min=6.9µs    med=14.9µs max=36.34ms p(90)=65.25µs p(95)=102.87µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=11.06s   min=688.64ms med=10.08s max=51.99s  p(90)=21.83s  p(95)=24.38s  
     http_reqs......................: 22606  71.592593/s
     iteration_duration.............: avg=11.07s   min=689.84ms med=10.08s max=51.99s  p(90)=21.83s  p(95)=24.38s  
     iterations.....................: 22606  71.592593/s
     vus............................: 343    min=0       max=1499
     vus_max........................: 1500   min=1366    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b979e9fa-dc01-459d-2d84-82ae566e9a00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ad55977b-b5f1-4ded-a9f2-76d91fc09e00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 53919     ✗ 0     
     data_received..................: 90 MB   289 kB/s
     data_sent......................: 21 MB   68 kB/s
     http_req_blocked...............: avg=63.46µs min=1.4µs    med=3µs     max=19.99ms p(90)=23.2µs  p(95)=518.98µs
     http_req_connecting............: avg=50.99µs min=0s       med=0s      max=19.92ms p(90)=0s      p(95)=432.92µs
     http_req_duration..............: avg=13.59s  min=909.93ms med=13.53s  max=26.21s  p(90)=24.02s  p(95)=25.24s  
       { expected_response:true }...: avg=13.59s  min=909.93ms med=13.53s  max=26.21s  p(90)=24.02s  p(95)=25.24s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 17973 
     http_req_receiving.............: avg=84.97µs min=28.5µs   med=75.09µs max=18.54ms p(90)=114.5µs p(95)=139µs   
     http_req_sending...............: avg=42.47µs min=9.4µs    med=18.59µs max=15.98ms p(90)=57.8µs  p(95)=83.3µs  
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s      max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=13.59s  min=908.63ms med=13.53s  max=26.21s  p(90)=24.02s  p(95)=25.24s  
     http_reqs......................: 17973   57.543488/s
     iteration_duration.............: avg=13.59s  min=912.98ms med=13.53s  max=26.21s  p(90)=24.02s  p(95)=25.24s  
     iterations.....................: 17973   57.543488/s
     vus............................: 100     min=0       max=1499
     vus_max........................: 1500    min=1231    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b0e80d8a-cc10-48a5-20b3-cb6f4c2ce200/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/37ffe0f4-5cba-4adb-f403-941ff1ded700/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga-uws`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  64% — ✓ 12483 / ✗ 6826
     ✗ valid response structure
      ↳  64% — ✓ 12483 / ✗ 6826

     checks.........................: 76.43% ✓ 44275     ✗ 13652 
     data_received..................: 83 MB  259 kB/s
     data_sent......................: 23 MB  72 kB/s
     http_req_blocked...............: avg=230.11µs min=1.3µs   med=2.8µs  max=85.33ms p(90)=14.4µs p(95)=427.1µs 
     http_req_connecting............: avg=179.93µs min=0s      med=0s     max=65.58ms p(90)=0s     p(95)=347.52µs
     http_req_duration..............: avg=13.07s   min=69.85ms med=9.62s  max=52.06s  p(90)=29.55s p(95)=33.54s  
       { expected_response:true }...: avg=13.07s   min=69.85ms med=9.62s  max=52.06s  p(90)=29.55s p(95)=33.54s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 19309 
     http_req_receiving.............: avg=69.54µs  min=16.8µs  med=53.5µs max=20.65ms p(90)=85.3µs p(95)=99.5µs  
     http_req_sending...............: avg=70.7µs   min=7µs     med=14.4µs max=42.93ms p(90)=55.7µs p(95)=83.5µs  
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s      p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=13.07s   min=69.78ms med=9.62s  max=52.06s  p(90)=29.55s p(95)=33.54s  
     http_reqs......................: 19309  60.342509/s
     iteration_duration.............: avg=13.07s   min=70.49ms med=9.62s  max=52.06s  p(90)=29.55s p(95)=33.54s  
     iterations.....................: 19309  60.342509/s
     vus............................: 4      min=0       max=1499
     vus_max........................: 1500   min=1482    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/aa18e0b2-6d9d-4b68-e990-4348762e2300/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5b64787d-2867-4f34-e1d1-fadf6c1a9200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-uws`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  98% — ✓ 19374 / ✗ 220
     ✗ no graphql errors
      ↳  70% — ✓ 13829 / ✗ 5765
     ✗ valid response structure
      ↳  71% — ✓ 13829 / ✗ 5545

     checks.........................: 80.31% ✓ 47032     ✗ 11530 
     data_received..................: 163 MB 484 kB/s
     data_sent......................: 24 MB  71 kB/s
     http_req_blocked...............: avg=122.63µs min=1.2µs    med=2.7µs  max=64.91ms p(90)=14.1µs  p(95)=381.8µs 
     http_req_connecting............: avg=112.63µs min=0s       med=0s     max=64.72ms p(90)=0s      p(95)=311.8µs 
     http_req_duration..............: avg=12.36s   min=843.36ms med=5.83s  max=1m0s    p(90)=39.31s  p(95)=49.14s  
       { expected_response:true }...: avg=11.82s   min=843.36ms med=5.77s  max=59.35s  p(90)=36.65s  p(95)=46.56s  
     http_req_failed................: 1.12%  ✓ 220       ✗ 19374 
     http_req_receiving.............: avg=75µs     min=0s       med=56.7µs max=8.05ms  p(90)=104µs   p(95)=147.83µs
     http_req_sending...............: avg=34.54µs  min=7µs      med=14.3µs max=9.44ms  p(90)=37.97µs p(95)=68.8µs  
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=12.36s   min=843.27ms med=5.83s  max=1m0s    p(90)=39.31s  p(95)=49.14s  
     http_reqs......................: 19594  58.056825/s
     iteration_duration.............: avg=12.36s   min=844.1ms  med=5.83s  max=1m0s    p(90)=39.31s  p(95)=49.14s  
     iterations.....................: 19594  58.056825/s
     vus............................: 12     min=0       max=1500
     vus_max........................: 1500   min=1126    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/178a4713-30a7-41f6-03c4-4a7c5ee19100/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c0838363-0706-4ab4-e9ad-519e111d6f00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server-node16`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  98% — ✓ 13558 / ✗ 234
     ✗ no graphql errors
      ↳  42% — ✓ 5839 / ✗ 7953
     ✗ valid response structure
      ↳  43% — ✓ 5839 / ✗ 7719

     checks.........................: 61.33% ✓ 25236     ✗ 15906 
     data_received..................: 55 MB  165 kB/s
     data_sent......................: 17 MB  50 kB/s
     http_req_blocked...............: avg=76.56µs min=1.4µs    med=3.4µs  max=24.99ms p(90)=203.2µs  p(95)=518.78µs
     http_req_connecting............: avg=62.58µs min=0s       med=0s     max=24.89ms p(90)=133.3µs  p(95)=435.73µs
     http_req_duration..............: avg=18.94s  min=132.93ms med=12.41s max=1m0s    p(90)=47.1s    p(95)=53.13s  
       { expected_response:true }...: avg=18.23s  min=132.93ms med=12.08s max=59.99s  p(90)=43.85s   p(95)=50.28s  
     http_req_failed................: 1.69%  ✓ 234       ✗ 13558 
     http_req_receiving.............: avg=91.26µs min=0s       med=79.3µs max=7.7ms   p(90)=114.51µs p(95)=133.8µs 
     http_req_sending...............: avg=38.73µs min=9.9µs    med=19.7µs max=18.2ms  p(90)=59.8µs   p(95)=80.55µs 
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=18.94s  min=132.8ms  med=12.41s max=1m0s    p(90)=47.1s    p(95)=53.13s  
     http_reqs......................: 13792  41.264636/s
     iteration_duration.............: avg=18.94s  min=134.17ms med=12.41s max=1m0s    p(90)=47.1s    p(95)=53.13s  
     iterations.....................: 13792  41.264636/s
     vus............................: 53     min=0       max=1500
     vus_max........................: 1500   min=1097    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b294ba18-6b9f-4598-f64a-0bf10215f500/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d4fc1ce7-9e0f-4ccf-c420-ff325da3c500/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  81% — ✓ 13105 / ✗ 2995
     ✗ no graphql errors
      ↳  79% — ✓ 12802 / ✗ 3298
     ✗ valid response structure
      ↳  97% — ✓ 12802 / ✗ 303

     checks.........................: 85.44% ✓ 38709     ✗ 6596  
     data_received..................: 65 MB  195 kB/s
     data_sent......................: 20 MB  58 kB/s
     http_req_blocked...............: avg=401.77µs min=1.7µs    med=3.5µs  max=83.39ms p(90)=529.05µs p(95)=1.43ms  
     http_req_connecting............: avg=371.02µs min=0s       med=0s     max=83.16ms p(90)=431.64µs p(95)=1.28ms  
     http_req_duration..............: avg=15.41s   min=173.41ms med=4.36s  max=1m0s    p(90)=1m0s     p(95)=1m0s    
       { expected_response:true }...: avg=5.24s    min=173.41ms med=4.23s  max=59.67s  p(90)=5.23s    p(95)=6.03s   
     http_req_failed................: 18.60% ✓ 2995      ✗ 13105 
     http_req_receiving.............: avg=78.67µs  min=0s       med=68.5µs max=39.9ms  p(90)=109.8µs  p(95)=133.41µs
     http_req_sending...............: avg=89.09µs  min=10.5µs   med=21.6µs max=42.16ms p(90)=74.8µs   p(95)=114.01µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=15.41s   min=173.33ms med=4.36s  max=1m0s    p(90)=59.99s   p(95)=1m0s    
     http_reqs......................: 16100  48.141329/s
     iteration_duration.............: avg=15.42s   min=174.16ms med=4.36s  max=1m0s    p(90)=1m0s     p(95)=1m0s    
     iterations.....................: 16100  48.141329/s
     vus............................: 57     min=0       max=1500
     vus_max........................: 1500   min=1109    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1e18eeb3-ff43-4661-af63-7e8a86029200/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8aa8c859-433f-4af7-08cc-63e8bd1e2a00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  81% — ✓ 12899 / ✗ 2992
     ✗ no graphql errors
      ↳  79% — ✓ 12599 / ✗ 3292
     ✗ valid response structure
      ↳  97% — ✓ 12599 / ✗ 300

     checks.........................: 85.26% ✓ 38097     ✗ 6584  
     data_received..................: 66 MB  198 kB/s
     data_sent......................: 19 MB  58 kB/s
     http_req_blocked...............: avg=323.6µs  min=1.7µs    med=3.7µs   max=34.26ms p(90)=575.3µs p(95)=1.4ms  
     http_req_connecting............: avg=289.42µs min=0s       med=0s      max=34.13ms p(90)=469.4µs p(95)=1.21ms 
     http_req_duration..............: avg=15.67s   min=121.56ms med=4.49s   max=1m0s    p(90)=1m0s    p(95)=1m0s   
       { expected_response:true }...: avg=5.39s    min=121.56ms med=4.34s   max=59.95s  p(90)=5.14s   p(95)=6.31s  
     http_req_failed................: 18.82% ✓ 2992      ✗ 12899 
     http_req_receiving.............: avg=80.87µs  min=0s       med=78.89µs max=7.84ms  p(90)=130.7µs p(95)=154.9µs
     http_req_sending...............: avg=65.88µs  min=10.9µs   med=23.5µs  max=20.5ms  p(90)=76.59µs p(95)=109µs  
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s      p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=15.67s   min=121.46ms med=4.49s   max=1m0s    p(90)=59.99s  p(95)=1m0s   
     http_reqs......................: 15891  47.516364/s
     iteration_duration.............: avg=15.67s   min=122.32ms med=4.49s   max=1m0s    p(90)=1m0s    p(95)=1m0s   
     iterations.....................: 15891  47.516364/s
     vus............................: 51     min=0       max=1500
     vus_max........................: 1500   min=1137    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4a94c7b8-cf5a-4503-2608-9ce83e3c4300/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/29b0016d-d59b-404f-f058-8b9e945b3f00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  90% — ✓ 24503 / ✗ 2699
     ✗ no graphql errors
      ↳  89% — ✓ 24451 / ✗ 2751
     ✗ valid response structure
      ↳  99% — ✓ 24451 / ✗ 52

     checks.........................: 93.02% ✓ 73405     ✗ 5502  
     data_received..................: 124 MB 371 kB/s
     data_sent......................: 32 MB  97 kB/s
     http_req_blocked...............: avg=149.81µs min=1.3µs   med=3µs    max=22.75ms p(90)=288.4µs p(95)=498.79µs
     http_req_connecting............: avg=130.65µs min=0s      med=0s     max=17.75ms p(90)=227.7µs p(95)=409.9µs 
     http_req_duration..............: avg=9.28s    min=57.19ms med=3.09s  max=1m0s    p(90)=54.2s   p(95)=1m0s    
       { expected_response:true }...: avg=3.7s     min=57.19ms med=3.06s  max=59.74s  p(90)=3.35s   p(95)=3.53s   
     http_req_failed................: 9.92%  ✓ 2699      ✗ 24503 
     http_req_receiving.............: avg=69.06µs  min=0s      med=63.6µs max=12.58ms p(90)=90.5µs  p(95)=99µs    
     http_req_sending...............: avg=44.33µs  min=8.8µs   med=18.3µs max=18.29ms p(90)=49.6µs  p(95)=68.9µs  
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=9.28s    min=57.09ms med=3.09s  max=1m0s    p(90)=54.2s   p(95)=1m0s    
     http_reqs......................: 27202  81.368347/s
     iteration_duration.............: avg=9.28s    min=57.95ms med=3.09s  max=1m0s    p(90)=54.2s   p(95)=1m0s    
     iterations.....................: 27202  81.368347/s
     vus............................: 1      min=0       max=1500
     vus_max........................: 1500   min=1215    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/00365cfc-c047-4478-4eeb-145fe6ca3e00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/10dcf564-7299-4c79-58a9-59dec4f68100/public" alt="HTTP Overview" />


  </details>