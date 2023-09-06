## Overview for: `fed-v1-ramping-vus`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. We are running a heavy load of concurrent VUs to measure response time and other stats, during stress. It measure things like memory usage, CPU usage, response times. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was trying to reach 1500 concurrent VUs over 300s


### Comparison


| Gateway                             | duration(p95)⬇️ |  RPS  |         Requests         |                       Durations                        |
| :---------------------------------- | :-------------: | :---: | :----------------------: | :----------------------------------------------------: |
| wundergraph                         |     1625ms      |  978  |  303448 total, 0 failed  |    avg: 683ms, p95: 1625ms, max: 4311ms, med: 612ms    |
| mesh-bun                            |     4958ms      |  324  |  100526 total, 0 failed  |   avg: 2353ms, p95: 4958ms, max: 8140ms, med: 2119ms   |
| mesh                                |     7023ms      |  198  |  61442 total, 0 failed   |  avg: 3889ms, p95: 7024ms, max: 11436ms, med: 3942ms   |
| stitching-federation-with-yoga      |     38056ms     |  36   |  12304 total, 0 failed   | avg: 21134ms, p95: 38056ms, max: 47381ms, med: 21131ms |
| stitching-federation-with-yoga-bun  |     41149ms     |  45   | 15126 total, 264 failed  | avg: 16830ms, p95: 41149ms, max: 61304ms, med: 14720ms |
| stitching-federation-with-yoga-uws  |     45172ms     |  31   |  10427 total, 0 failed   | avg: 24754ms, p95: 45172ms, max: 57692ms, med: 24513ms |
| apollo-router                       |     47496ms     |  36   | 12226 total, 3806 failed | avg: 19861ms, p95: 47496ms, max: 60002ms, med: 13709ms |
| mesh-supergraph                     |     52893ms     |  30   |  10387 total, 65 failed  | avg: 23449ms, p95: 52894ms, max: 60005ms, med: 20706ms |
| apollo-gateway-with-yoga-bun        |     60000ms     |  28   | 9764 total, 1415 failed  | avg: 24809ms, p95: 60001ms, max: 61275ms, med: 19888ms |
| apollo-gateway-with-yoga-uws        |     60000ms     |  36   | 12517 total, 1610 failed | avg: 19641ms, p95: 60001ms, max: 60514ms, med: 7385ms  |
| stitching-federation-with-yoga-deno |     60000ms     |  22   |  7603 total, 684 failed  | avg: 31404ms, p95: 60001ms, max: 60126ms, med: 31630ms |
| apollo-gateway-with-yoga            |     60001ms     |  37   | 12774 total, 1724 failed | avg: 19172ms, p95: 60001ms, max: 61349ms, med: 7095ms  |
| apollo-server                       |     60001ms     |  29   | 9973 total, 1602 failed  | avg: 24231ms, p95: 60001ms, max: 60467ms, med: 11040ms |
| apollo-server-node16                |     60001ms     |  29   | 9988 total, 2193 failed  | avg: 24637ms, p95: 60002ms, max: 60331ms, med: 10481ms |
| mercurius                           |     60001ms     |  13   | 4713 total, 3600 failed  | avg: 50336ms, p95: 60002ms, max: 60029ms, med: 60000ms |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 303448

     checks.........................: 66.66% ✓ 606896    ✗ 303448
     data_received..................: 44 MB  142 kB/s
     data_sent......................: 360 MB 1.2 MB/s
     http_req_blocked...............: avg=3.41ms   min=1.2µs    med=3.1µs    max=2.37s p(90)=4.8µs    p(95)=6.4µs  
     http_req_connecting............: avg=3.39ms   min=0s       med=0s       max=2.37s p(90)=0s       p(95)=0s     
     http_req_duration..............: avg=683.1ms  min=375.11µs med=612.2ms  max=4.31s p(90)=1.38s    p(95)=1.62s  
       { expected_response:true }...: avg=683.1ms  min=375.11µs med=612.2ms  max=4.31s p(90)=1.38s    p(95)=1.62s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 303448
     http_req_receiving.............: avg=14.25ms  min=9.29µs   med=32.2µs   max=2.68s p(90)=442.95µs p(95)=44.83ms
     http_req_sending...............: avg=3.49ms   min=6.3µs    med=14.4µs   max=2.71s p(90)=112.7µs  p(95)=254.5µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s    p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=665.35ms min=301.1µs  med=602.75ms max=2.98s p(90)=1.33s    p(95)=1.55s  
     http_reqs......................: 303448 978.80682/s
     iteration_duration.............: avg=782.1ms  min=992.43µs med=695.17ms max=5.76s p(90)=1.57s    p(95)=1.8s   
     iterations.....................: 303448 978.80682/s
     vus............................: 3      min=0       max=1499
     vus_max........................: 1500   min=1383    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/19eb94dc-ea07-48da-8848-2bf868e39300/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e8fce071-d974-450e-598e-ba03628a5000/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b2b8e556-24d2-470f-4e36-93c5f3211a00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  0% — ✓ 0 / ✗ 100526
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 100526

     checks.........................: 33.33% ✓ 100526     ✗ 201052
     data_received..................: 96 MB  308 kB/s
     data_sent......................: 119 MB 385 kB/s
     http_req_blocked...............: avg=2.44ms min=1.2µs  med=3µs    max=1.8s  p(90)=5.6µs    p(95)=8µs     
     http_req_connecting............: avg=2.38ms min=0s     med=0s     max=1.8s  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=2.35s  min=2.49ms med=2.11s  max=8.14s p(90)=4.54s    p(95)=4.95s   
       { expected_response:true }...: avg=2.35s  min=2.49ms med=2.11s  max=8.14s p(90)=4.54s    p(95)=4.95s   
     http_req_failed................: 0.00%  ✓ 0          ✗ 100526
     http_req_receiving.............: avg=8.71ms min=12µs   med=31.6µs max=1.57s p(90)=342.32µs p(95)=4.37ms  
     http_req_sending...............: avg=4.02ms min=6.9µs  med=15.4µs max=1.6s  p(90)=130.1µs  p(95)=329.24µs
     http_req_tls_handshaking.......: avg=0s     min=0s     med=0s     max=0s    p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=2.34s  min=2.42ms med=2.1s   max=7.59s p(90)=4.53s    p(95)=4.92s   
     http_reqs......................: 100526 324.255157/s
     iteration_duration.............: avg=2.37s  min=3.52ms med=2.13s  max=8.17s p(90)=4.57s    p(95)=5.01s   
     iterations.....................: 100526 324.255157/s
     vus............................: 1      min=0        max=1500
     vus_max........................: 1500   min=752      max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/11c6747f-55b1-4e1d-f220-85905e3b5700/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e8521a8e-9327-407e-e22a-5244e640fd00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/521fde56-56c1-4ecf-3f4a-fa027928c200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 61442

     checks.........................: 66.66% ✓ 122884     ✗ 61442 
     data_received..................: 70 MB  224 kB/s
     data_sent......................: 73 MB  235 kB/s
     http_req_blocked...............: avg=1.1ms  min=1.3µs  med=2.6µs  max=1.12s    p(90)=4.4µs    p(95)=10.69µs 
     http_req_connecting............: avg=1.07ms min=0s     med=0s     max=1.12s    p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=3.88s  min=3.78ms med=3.94s  max=11.43s   p(90)=6.61s    p(95)=7.02s   
       { expected_response:true }...: avg=3.88s  min=3.78ms med=3.94s  max=11.43s   p(90)=6.61s    p(95)=7.02s   
     http_req_failed................: 0.00%  ✓ 0          ✗ 61442 
     http_req_receiving.............: avg=1.79ms min=14.2µs med=37.5µs max=898.3ms  p(90)=238.18µs p(95)=426.49µs
     http_req_sending...............: avg=1.9ms  min=9.29µs med=15.1µs max=834.16ms p(90)=115.49µs p(95)=264.18µs
     http_req_tls_handshaking.......: avg=0s     min=0s     med=0s     max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=3.88s  min=3.73ms med=3.93s  max=11.43s   p(90)=6.61s    p(95)=7.01s   
     http_reqs......................: 61442  198.188497/s
     iteration_duration.............: avg=3.89s  min=4.7ms  med=3.95s  max=12.09s   p(90)=6.63s    p(95)=7.03s   
     iterations.....................: 61442  198.188497/s
     vus............................: 10     min=0        max=1499
     vus_max........................: 1500   min=1178     max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/767c6d88-e2fb-4709-54a7-70991bb64b00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8d5c4af0-6753-4d7d-8476-23855db80a00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e89cae50-32e0-45ab-ffad-21c8c467a300/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 12212 / ✗ 92
     ✗ valid response structure
      ↳  99% — ✓ 12211 / ✗ 92

     checks.........................: 99.50% ✓ 36727     ✗ 184   
     data_received..................: 1.1 GB 3.2 MB/s
     data_sent......................: 15 MB  44 kB/s
     http_req_blocked...............: avg=2.64ms min=1.6µs  med=3.8µs  max=733.83ms p(90)=159.24µs p(95)=436.5µs 
     http_req_connecting............: avg=2.48ms min=0s     med=0s     max=696.56ms p(90)=105.47µs p(95)=366.22µs
     http_req_duration..............: avg=21.13s min=1.41s  med=21.13s max=47.38s   p(90)=35.09s   p(95)=38.05s  
       { expected_response:true }...: avg=21.13s min=1.41s  med=21.13s max=47.38s   p(90)=35.09s   p(95)=38.05s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 12304 
     http_req_receiving.............: avg=2.67ms min=43.4µs med=94.7µs max=437.01ms p(90)=352µs    p(95)=2.02ms  
     http_req_sending...............: avg=2.79ms min=8µs    med=21.4µs max=487.76ms p(90)=106µs    p(95)=6.98ms  
     http_req_tls_handshaking.......: avg=0s     min=0s     med=0s     max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=21.12s min=1.41s  med=21.13s max=47.38s   p(90)=35.01s   p(95)=38.05s  
     http_reqs......................: 12304  36.764374/s
     iteration_duration.............: avg=21.18s min=1.42s  med=21.14s max=47.39s   p(90)=35.22s   p(95)=38.07s  
     iterations.....................: 12303  36.761386/s
     vus............................: 68     min=0       max=1499
     vus_max........................: 1500   min=1096    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a761ba9a-e581-4683-79e9-1af799009000/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c08240dd-6b4e-42e7-b725-bae72e6c6f00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c9e834d4-ec2c-49cf-f22b-bcd04e10a400/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-bun`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  98% — ✓ 14862 / ✗ 264
     ✗ no graphql errors
      ↳  98% — ✓ 14862 / ✗ 264
     ✓ valid response structure

     checks.........................: 98.82% ✓ 44584     ✗ 528   
     data_received..................: 1.3 GB 3.9 MB/s
     data_sent......................: 18 MB  54 kB/s
     http_req_blocked...............: avg=13.69ms  min=1.8µs    med=4.8µs    max=1.29s  p(90)=182.75µs p(95)=9.12ms 
     http_req_connecting............: avg=13.51ms  min=0s       med=0s       max=1.29s  p(90)=120.6µs  p(95)=8.61ms 
     http_req_duration..............: avg=16.82s   min=154.34ms med=14.71s   max=1m1s   p(90)=30.22s   p(95)=41.14s 
       { expected_response:true }...: avg=16.06s   min=154.34ms med=14.66s   max=59.78s p(90)=27.17s   p(95)=35.51s 
     http_req_failed................: 1.74%  ✓ 264       ✗ 14862 
     http_req_receiving.............: avg=103.36ms min=0s       med=103.05µs max=23.56s p(90)=6.77ms   p(95)=297.2ms
     http_req_sending...............: avg=15.05ms  min=8.4µs    med=24.1µs   max=1.97s  p(90)=16.04ms  p(95)=76.73ms
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s     p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=16.71s   min=148.49ms med=14.67s   max=1m1s   p(90)=30.17s   p(95)=40.8s  
     http_reqs......................: 15126  45.685835/s
     iteration_duration.............: avg=17s      min=177.81ms med=14.86s   max=1m2s   p(90)=30.26s   p(95)=41.31s 
     iterations.....................: 15124  45.679794/s
     vus............................: 11     min=0       max=1500
     vus_max........................: 1500   min=1350    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5ecc423d-caa0-46fd-ab66-a817da314500/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2d25e05f-0217-41fe-8554-721ba0288b00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/cfda5c64-99af-4aef-cd1c-523988db0800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-uws`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  98% — ✓ 10315 / ✗ 112
     ✗ valid response structure
      ↳  98% — ✓ 10315 / ✗ 112

     checks.........................: 99.28% ✓ 31057     ✗ 224   
     data_received..................: 908 MB 2.7 MB/s
     data_sent......................: 13 MB  38 kB/s
     http_req_blocked...............: avg=2.18ms  min=1.8µs  med=5.4µs   max=568.49ms p(90)=208.72µs p(95)=556.75µs
     http_req_connecting............: avg=1.99ms  min=0s     med=0s      max=449.05ms p(90)=138.18µs p(95)=462.92µs
     http_req_duration..............: avg=24.75s  min=1.36s  med=24.51s  max=57.69s   p(90)=42.87s   p(95)=45.17s  
       { expected_response:true }...: avg=24.75s  min=1.36s  med=24.51s  max=57.69s   p(90)=42.87s   p(95)=45.17s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 10427 
     http_req_receiving.............: avg=11.59ms min=37.4µs med=129.4µs max=14.53s   p(90)=771.47µs p(95)=4.13ms  
     http_req_sending...............: avg=2.05ms  min=10.4µs med=27.2µs  max=481.94ms p(90)=99.18µs  p(95)=4.11ms  
     http_req_tls_handshaking.......: avg=0s      min=0s     med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=24.74s  min=1.35s  med=24.51s  max=56.16s   p(90)=42.87s   p(95)=45.14s  
     http_reqs......................: 10427  31.247262/s
     iteration_duration.............: avg=24.8s   min=1.38s  med=24.52s  max=57.72s   p(90)=42.89s   p(95)=45.22s  
     iterations.....................: 10427  31.247262/s
     vus............................: 120    min=0       max=1500
     vus_max........................: 1500   min=1104    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/33156f56-6c98-4990-1004-3bc1700ae800/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ae4fd330-1ddc-4b94-6831-95a2df25d000/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/128f614c-52fc-4113-47cc-19098477d300/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  68% — ✓ 8420 / ✗ 3806
     ✗ no graphql errors
      ↳  68% — ✓ 8420 / ✗ 3806
     ✓ valid response structure

     checks.........................: 76.84% ✓ 25260     ✗ 7612  
     data_received..................: 739 MB 2.2 MB/s
     data_sent......................: 16 MB  46 kB/s
     http_req_blocked...............: avg=897.3µs  min=1.49µs   med=3.3µs   max=447.92ms p(90)=171.99µs p(95)=395.37µs
     http_req_connecting............: avg=851.26µs min=0s       med=0s      max=447.86ms p(90)=107.69µs p(95)=331.57µs
     http_req_duration..............: avg=19.86s   min=622.57ms med=13.7s   max=1m0s     p(90)=41.58s   p(95)=47.49s  
       { expected_response:true }...: avg=10.73s   min=622.57ms med=8.62s   max=57.1s    p(90)=22.6s    p(95)=27.75s  
     http_req_failed................: 31.13% ✓ 3806      ✗ 8420  
     http_req_receiving.............: avg=704.09µs min=0s       med=73.89µs max=225.61ms p(90)=183.09µs p(95)=312.79µs
     http_req_sending...............: avg=1.02ms   min=8.8µs    med=19.09µs max=451.7ms  p(90)=58.84µs  p(95)=124.87µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=19.85s   min=622.43ms med=13.7s   max=1m0s     p(90)=41.58s   p(95)=47.49s  
     http_reqs......................: 12226  36.190624/s
     iteration_duration.............: avg=19.87s   min=635.12ms med=13.76s  max=1m0s     p(90)=41.59s   p(95)=47.49s  
     iterations.....................: 12226  36.190624/s
     vus............................: 7      min=0       max=1500
     vus_max........................: 1500   min=1360    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c9422e04-9446-4043-92a9-c8482014be00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/488e60dd-74c5-4b15-a472-e3be19448900/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7e64bd09-f034-4d71-b023-185da5b47800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  99% — ✓ 10322 / ✗ 65
     ✗ no graphql errors
      ↳  99% — ✓ 10322 / ✗ 65
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 10322

     checks.........................: 66.38% ✓ 20644     ✗ 10452 
     data_received..................: 908 MB 2.7 MB/s
     data_sent......................: 13 MB  39 kB/s
     http_req_blocked...............: avg=283.02µs min=2µs    med=4µs     max=249.39ms p(90)=258.46µs p(95)=540.19µs
     http_req_connecting............: avg=256.1µs  min=0s     med=0s      max=225.76ms p(90)=169.84µs p(95)=453.75µs
     http_req_duration..............: avg=23.44s   min=1.81s  med=20.7s   max=1m0s     p(90)=49.4s    p(95)=52.89s  
       { expected_response:true }...: avg=23.21s   min=1.81s  med=20.62s  max=59.98s   p(90)=49.18s   p(95)=52.47s  
     http_req_failed................: 0.62%  ✓ 65        ✗ 10322 
     http_req_receiving.............: avg=3.26ms   min=0s     med=142.7µs max=5.1s     p(90)=391.28µs p(95)=865.41µs
     http_req_sending...............: avg=416.34µs min=10.4µs med=21.5µs  max=333.69ms p(90)=73.64µs  p(95)=95.1µs  
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=23.44s   min=1.81s  med=20.7s   max=1m0s     p(90)=49.4s    p(95)=52.88s  
     http_reqs......................: 10387  30.612778/s
     iteration_duration.............: avg=23.45s   min=1.83s  med=20.7s   max=1m0s     p(90)=49.4s    p(95)=52.89s  
     iterations.....................: 10387  30.612778/s
     vus............................: 2      min=0       max=1500
     vus_max........................: 1500   min=1433    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f2a5961f-d242-4290-f3e0-3f542379a800/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/dcd638a5-d89a-4986-e1c5-2f20e8b98100/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f8de6540-e1bd-45f2-0b90-9a7766cd9100/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga-bun`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  85% — ✓ 8349 / ✗ 1415
     ✗ no graphql errors
      ↳  85% — ✓ 8349 / ✗ 1415
     ✓ valid response structure

     checks.........................: 89.84% ✓ 25047     ✗ 2830  
     data_received..................: 733 MB 2.2 MB/s
     data_sent......................: 12 MB  36 kB/s
     http_req_blocked...............: avg=48.64ms  min=2.2µs med=5.5µs    max=5.49s p(90)=401.38µs p(95)=93.98ms 
     http_req_connecting............: avg=46.94ms  min=0s    med=0s       max=5.49s p(90)=198.07µs p(95)=82.69ms 
     http_req_duration..............: avg=24.8s    min=1.03s med=19.88s   max=1m1s  p(90)=1m0s     p(95)=1m0s    
       { expected_response:true }...: avg=18.86s   min=1.03s med=16.11s   max=1m0s  p(90)=38.12s   p(95)=46.05s  
     http_req_failed................: 14.49% ✓ 1415      ✗ 8349  
     http_req_receiving.............: avg=143.02ms min=0s    med=110.11µs max=9.73s p(90)=13.94ms  p(95)=1.02s   
     http_req_sending...............: avg=40.08ms  min=9.4µs med=27.4µs   max=3.92s p(90)=27.48ms  p(95)=179.11ms
     http_req_tls_handshaking.......: avg=0s       min=0s    med=0s       max=0s    p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=24.62s   min=1.03s med=19.67s   max=1m0s  p(90)=1m0s     p(95)=1m0s    
     http_reqs......................: 9764   28.717384/s
     iteration_duration.............: avg=25.48s   min=1.07s med=20.65s   max=1m3s  p(90)=1m0s     p(95)=1m0s    
     iterations.....................: 9764   28.717384/s
     vus............................: 4      min=0       max=1500
     vus_max........................: 1500   min=1282    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2b651d08-134d-4f16-7063-7a3ad3602600/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6cb04670-060f-448f-e206-c49854684500/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/bf0aee6d-6463-40e6-2f48-6e00644b6300/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga-uws`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  87% — ✓ 10907 / ✗ 1610
     ✗ no graphql errors
      ↳  87% — ✓ 10907 / ✗ 1610
     ✓ valid response structure

     checks.........................: 91.04% ✓ 32721     ✗ 3220  
     data_received..................: 957 MB 2.8 MB/s
     data_sent......................: 15 MB  45 kB/s
     http_req_blocked...............: avg=3.42ms  min=1.7µs med=4.2µs   max=632.45ms p(90)=433.35µs p(95)=3.03ms
     http_req_connecting............: avg=3.22ms  min=0s    med=0s      max=586.54ms p(90)=369.19µs p(95)=2.85ms
     http_req_duration..............: avg=19.64s  min=1.42s med=7.38s   max=1m0s     p(90)=59.99s   p(95)=1m0s  
       { expected_response:true }...: avg=13.68s  min=1.42s med=6.7s    max=59.92s   p(90)=42.34s   p(95)=50.92s
     http_req_failed................: 12.86% ✓ 1610      ✗ 10907 
     http_req_receiving.............: avg=11.01ms min=0s    med=84.19µs max=24.86s   p(90)=347.89µs p(95)=3.72ms
     http_req_sending...............: avg=2.85ms  min=7.8µs med=23.1µs  max=1.26s    p(90)=129.05µs p(95)=11.1ms
     http_req_tls_handshaking.......: avg=0s      min=0s    med=0s      max=0s       p(90)=0s       p(95)=0s    
     http_req_waiting...............: avg=19.62s  min=1.42s med=7.37s   max=1m0s     p(90)=59.99s   p(95)=1m0s  
     http_reqs......................: 12517  36.814331/s
     iteration_duration.............: avg=19.68s  min=1.44s med=7.4s    max=1m0s     p(90)=1m0s     p(95)=1m0s  
     iterations.....................: 12517  36.814331/s
     vus............................: 3      min=3       max=1500
     vus_max........................: 1500   min=1500    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/12663ddc-a605-4df5-6a26-53f9e34ae600/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3f8af954-f890-4778-5c8d-b56d51c08600/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/11766cba-773b-4ee4-ea64-ed4a327f4100/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-deno`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  91% — ✓ 6919 / ✗ 684
     ✗ no graphql errors
      ↳  91% — ✓ 6919 / ✗ 684
     ✓ valid response structure

     checks.........................: 93.81% ✓ 20757     ✗ 1368  
     data_received..................: 607 MB 1.8 MB/s
     data_sent......................: 9.9 MB 29 kB/s
     http_req_blocked...............: avg=1.92ms min=1.6µs  med=4.1µs   max=319.81ms p(90)=650.71µs p(95)=3.67ms
     http_req_connecting............: avg=1.84ms min=0s     med=0s      max=319.73ms p(90)=555.09µs p(95)=3.24ms
     http_req_duration..............: avg=31.4s  min=1s     med=31.63s  max=1m0s     p(90)=58.39s   p(95)=1m0s  
       { expected_response:true }...: avg=28.57s min=1s     med=27.97s  max=59.96s   p(90)=48.38s   p(95)=50.89s
     http_req_failed................: 8.99%  ✓ 684       ✗ 6919  
     http_req_receiving.............: avg=2.38ms min=0s     med=126.8µs max=279.99ms p(90)=1.15ms   p(95)=9.92ms
     http_req_sending...............: avg=1.6ms  min=10.4µs med=25.6µs  max=292.73ms p(90)=155.32µs p(95)=9.9ms 
     http_req_tls_handshaking.......: avg=0s     min=0s     med=0s      max=0s       p(90)=0s       p(95)=0s    
     http_req_waiting...............: avg=31.39s min=1s     med=31.6s   max=1m0s     p(90)=58.36s   p(95)=1m0s  
     http_reqs......................: 7603   22.361353/s
     iteration_duration.............: avg=31.44s min=1.02s  med=31.67s  max=1m0s     p(90)=58.44s   p(95)=1m0s  
     iterations.....................: 7603   22.361353/s
     vus............................: 4      min=0       max=1500
     vus_max........................: 1500   min=614     max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f662f1de-457c-4d49-919d-e8b804d8d400/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7db26167-28fe-409a-a3d5-ea3f2dc49400/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7eb61ece-dd0f-416e-45bf-82d99132e900/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  86% — ✓ 11050 / ✗ 1724
     ✗ no graphql errors
      ↳  86% — ✓ 11050 / ✗ 1724
     ✓ valid response structure

     checks.........................: 90.57% ✓ 33149     ✗ 3448  
     data_received..................: 970 MB 2.9 MB/s
     data_sent......................: 16 MB  46 kB/s
     http_req_blocked...............: avg=7.96ms min=1.6µs    med=3.7µs  max=1.43s    p(90)=433.75µs p(95)=7.89ms 
     http_req_connecting............: avg=7.63ms min=0s       med=0s     max=1.43s    p(90)=370.4µs  p(95)=7.02ms 
     http_req_duration..............: avg=19.17s min=597.17ms med=7.09s  max=1m1s     p(90)=59.99s   p(95)=1m0s   
       { expected_response:true }...: avg=12.8s  min=597.17ms med=6.1s   max=59.91s   p(90)=37.36s   p(95)=47.74s 
     http_req_failed................: 13.49% ✓ 1724      ✗ 11050 
     http_req_receiving.............: avg=2.84ms min=0s       med=75.9µs max=781.48ms p(90)=266.24µs p(95)=1.62ms 
     http_req_sending...............: avg=3.89ms min=7.6µs    med=19.9µs max=927.63ms p(90)=488.32µs p(95)=15.65ms
     http_req_tls_handshaking.......: avg=0s     min=0s       med=0s     max=0s       p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=19.16s min=597.08ms med=7.09s  max=1m1s     p(90)=59.99s   p(95)=1m0s   
     http_reqs......................: 12774  37.58126/s
     iteration_duration.............: avg=19.22s min=604.34ms med=7.11s  max=1m1s     p(90)=1m0s     p(95)=1m0s   
     iterations.....................: 12773  37.578318/s
     vus............................: 3      min=3       max=1499
     vus_max........................: 1500   min=1500    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4ed30835-505e-421f-4572-9ecff9edb400/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0788d019-960b-4de6-24d5-b0549fa25b00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/06e3d745-e12b-4df2-1b6d-2f928229e700/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  83% — ✓ 8371 / ✗ 1602
     ✗ no graphql errors
      ↳  83% — ✓ 8371 / ✗ 1602
     ✓ valid response structure

     checks.........................: 88.68% ✓ 25113     ✗ 3204  
     data_received..................: 736 MB 2.2 MB/s
     data_sent......................: 13 MB  37 kB/s
     http_req_blocked...............: avg=3.64ms min=2.2µs  med=5.4µs  max=657.38ms p(90)=557.68µs p(95)=5.5ms  
     http_req_connecting............: avg=3.46ms min=0s     med=0s     max=505.82ms p(90)=475.04µs p(95)=5.04ms 
     http_req_duration..............: avg=24.23s min=1.41s  med=11.03s max=1m0s     p(90)=1m0s     p(95)=1m0s   
       { expected_response:true }...: avg=17.39s min=1.41s  med=8.55s  max=59.86s   p(90)=47.3s    p(95)=51.54s 
     http_req_failed................: 16.06% ✓ 1602      ✗ 8371  
     http_req_receiving.............: avg=3.31ms min=0s     med=110µs  max=704.81ms p(90)=354.26µs p(95)=2.6ms  
     http_req_sending...............: avg=2.42ms min=9.19µs med=26.3µs max=357.87ms p(90)=150.96µs p(95)=13.13ms
     http_req_tls_handshaking.......: avg=0s     min=0s     med=0s     max=0s       p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=24.22s min=1.4s   med=11.03s max=1m0s     p(90)=1m0s     p(95)=1m0s   
     http_reqs......................: 9973   29.331935/s
     iteration_duration.............: avg=24.27s min=1.43s  med=11.06s max=1m0s     p(90)=1m0s     p(95)=1m0s   
     iterations.....................: 9973   29.331935/s
     vus............................: 2      min=0       max=1500
     vus_max........................: 1500   min=1203    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c8c05219-6009-47bc-5c4f-4404c926bb00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9205ca79-fd0c-4ff2-afb9-18456c911b00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4bb23d7e-454e-4975-12f1-432f5cc16a00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server-node16`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  78% — ✓ 7795 / ✗ 2193
     ✗ no graphql errors
      ↳  78% — ✓ 7795 / ✗ 2193
     ✓ valid response structure

     checks.........................: 84.20% ✓ 23385     ✗ 4386  
     data_received..................: 685 MB 2.0 MB/s
     data_sent......................: 12 MB  36 kB/s
     http_req_blocked...............: avg=3.74ms min=2.1µs  med=5.6µs   max=828.78ms p(90)=613.96µs p(95)=8.35ms 
     http_req_connecting............: avg=3.65ms min=0s     med=0s      max=828.57ms p(90)=515.86µs p(95)=7.54ms 
     http_req_duration..............: avg=24.63s min=1.74s  med=10.48s  max=1m0s     p(90)=1m0s     p(95)=1m0s   
       { expected_response:true }...: avg=14.69s min=1.74s  med=8.25s   max=59.98s   p(90)=39.31s   p(95)=51.68s 
     http_req_failed................: 21.95% ✓ 2193      ✗ 7795  
     http_req_receiving.............: avg=1.45ms min=0s     med=107.4µs max=467.09ms p(90)=359.49µs p(95)=1.7ms  
     http_req_sending...............: avg=2.77ms min=10.1µs med=28.9µs  max=666.1ms  p(90)=207.79µs p(95)=12.31ms
     http_req_tls_handshaking.......: avg=0s     min=0s     med=0s      max=0s       p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=24.63s min=1.73s  med=10.47s  max=1m0s     p(90)=1m0s     p(95)=1m0s   
     http_reqs......................: 9988   29.384899/s
     iteration_duration.............: avg=24.68s min=1.78s  med=10.52s  max=1m0s     p(90)=1m0s     p(95)=1m0s   
     iterations.....................: 9988   29.384899/s
     vus............................: 1      min=0       max=1500
     vus_max........................: 1500   min=1388    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0221e79f-8538-4602-af40-c76c32ce3500/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0e229fcd-d922-4393-3136-9100cc64f100/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6e7669e7-f0ef-4f01-9c25-5732ec634800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  23% — ✓ 1113 / ✗ 3600
     ✗ no graphql errors
      ↳  23% — ✓ 1113 / ✗ 3600
     ✓ valid response structure

     checks.........................: 31.68% ✓ 3339      ✗ 7200  
     data_received..................: 98 MB  287 kB/s
     data_sent......................: 6.4 MB 19 kB/s
     http_req_blocked...............: avg=1.12ms   min=2.8µs  med=468.99µs max=58.63ms p(90)=2.25ms   p(95)=4.03ms  
     http_req_connecting............: avg=1.02ms   min=0s     med=393.29µs max=53.55ms p(90)=2.11ms   p(95)=3.71ms  
     http_req_duration..............: avg=50.33s   min=3.31s  med=59.99s   max=1m0s    p(90)=1m0s     p(95)=1m0s    
       { expected_response:true }...: avg=19.07s   min=3.31s  med=13.45s   max=52.08s  p(90)=38.59s   p(95)=44.55s  
     http_req_failed................: 76.38% ✓ 3600      ✗ 1113  
     http_req_receiving.............: avg=160.19µs min=0s     med=0s       max=36.71ms p(90)=252.97µs p(95)=419.35µs
     http_req_sending...............: avg=223.5µs  min=13.5µs med=57.39µs  max=59.5ms  p(90)=132.09µs p(95)=234.53µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s       max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=50.33s   min=3.31s  med=59.99s   max=1m0s    p(90)=1m0s     p(95)=1m0s    
     http_reqs......................: 4713   13.861648/s
     iteration_duration.............: avg=50.34s   min=3.38s  med=1m0s     max=1m0s    p(90)=1m0s     p(95)=1m0s    
     iterations.....................: 4713   13.861648/s
     vus............................: 1      min=0       max=1500
     vus_max........................: 1500   min=749     max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6469ac70-a23f-4bb1-f17d-91adbcec9200/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f66429ea-e66f-450e-0390-38b676631000/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2699a03a-74e0-449b-e6b1-1ac4d8d2e100/public" alt="HTTP Overview" />


  </details>