## Overview for: `scenarios/fed-v1-constants-vus-subgraphs-delay`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. All subgraphs have an intentional delay on replying, and this creates additional pressure on the gateway's memory. We are running a heavy load of concurrent VUs to measure response time and other stats, during stress. It measure things like memory usage, CPU usage, response times.


This scenario was running 400 VUs over 200s


### Comparison


| Gateway              | RPS ⬇️ |        Requests        |          Duration          |
| :------------------- | :----: | :--------------------: | :------------------------: |
| mesh-bun             |  789   | 158148 total, 0 failed |   avg: 506ms, p95: 805ms   |
| wundergraph          |  242   | 48720 total, 0 failed  |  avg: 1642ms, p95: 1918ms  |
| apollo-router        |  100   | 20391 total, 0 failed  |  avg: 3964ms, p95: 6164ms  |
| mesh                 |   75   | 15263 total, 0 failed  |  avg: 5281ms, p95: 6744ms  |
| mesh-supergraph      |   63   | 12805 total, 0 failed  |  avg: 6304ms, p95: 8396ms  |
| apollo-server-node16 |   62   | 12704 total, 0 failed  |  avg: 6344ms, p95: 9631ms  |
| apollo-server        |   49   | 10139 total, 27 failed | avg: 8020ms, p95: 11832ms  |
| mercurius            |   6    |  1602 total, 0 failed  | avg: 53447ms, p95: 56959ms |



<details>
  <summary>Summary for: `mesh-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  0% — ✓ 0 / ✗ 158148
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 158148

     checks.........................: 33.33% ✓ 158148     ✗ 316296
     data_received..................: 150 MB 751 kB/s
     data_sent......................: 188 MB 937 kB/s
     http_req_blocked...............: avg=85.18µs  min=700ns    med=1.4µs    max=60.35ms  p(90)=2.1µs    p(95)=2.6µs   
     http_req_connecting............: avg=80.32µs  min=0s       med=0s       max=60.32ms  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=505.8ms  min=138.83ms med=446.92ms max=1.31s    p(90)=759.55ms p(95)=804.59ms
       { expected_response:true }...: avg=505.8ms  min=138.83ms med=446.92ms max=1.31s    p(90)=759.55ms p(95)=804.59ms
   ✓ http_req_failed................: 0.00%  ✓ 0          ✗ 158148
     http_req_receiving.............: avg=220.72µs min=10.5µs   med=17.8µs   max=215.98ms p(90)=52.2µs   p(95)=188.1µs 
     http_req_sending...............: avg=93.94µs  min=5.2µs    med=8.6µs    max=178.18ms p(90)=38.19µs  p(95)=125.7µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=505.48ms min=138.62ms med=446.6ms  max=1.31s    p(90)=759.23ms p(95)=803.78ms
     http_reqs......................: 158148 789.363416/s
     iteration_duration.............: avg=506.29ms min=139ms    med=447.36ms max=1.35s    p(90)=759.8ms  p(95)=804.99ms
     iterations.....................: 158148 789.363416/s
     vus............................: 400    min=400      max=400 
     vus_max........................: 400    min=400      max=400 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/694ae0b6-9eac-4e98-9a0f-863d525cbb00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/010ecf0e-ec1b-45dc-86c5-469e7e1a6100/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 146160     ✗ 0    
     data_received..................: 243 MB  1.2 MB/s
     data_sent......................: 58 MB   288 kB/s
     http_req_blocked...............: avg=328.74µs min=1.1µs    med=2.4µs  max=67.41ms  p(90)=3.5µs   p(95)=4.2µs   
     http_req_connecting............: avg=320.48µs min=0s       med=0s     max=65.03ms  p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=1.64s    min=959.35ms med=1.63s  max=2.55s    p(90)=1.84s   p(95)=1.91s   
       { expected_response:true }...: avg=1.64s    min=959.35ms med=1.63s  max=2.55s    p(90)=1.84s   p(95)=1.91s   
   ✓ http_req_failed................: 0.00%   ✓ 0          ✗ 48720
     http_req_receiving.............: avg=828.92µs min=15.3µs   med=34.8µs max=255.62ms p(90)=257.6µs p(95)=431.61µs
     http_req_sending...............: avg=538.19µs min=7.1µs    med=12.6µs max=254.1ms  p(90)=31.2µs  p(95)=140.33µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=1.64s    min=959.21ms med=1.63s  max=2.55s    p(90)=1.84s   p(95)=1.91s   
     http_reqs......................: 48720   242.637739/s
     iteration_duration.............: avg=1.64s    min=960.11ms med=1.64s  max=2.64s    p(90)=1.85s   p(95)=1.92s   
     iterations.....................: 48720   242.637739/s
     vus............................: 400     min=400      max=400
     vus_max........................: 400     min=400      max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3e054d5a-9f33-4a09-0822-6090882b3700/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b88fd190-0d7a-467a-e4d1-462c72dd0700/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 20362 / ✗ 29
     ✗ valid response structure
      ↳  99% — ✓ 20362 / ✗ 29

     checks.........................: 99.90% ✓ 61115      ✗ 58   
     data_received..................: 102 MB 501 kB/s
     data_sent......................: 24 MB  119 kB/s
     http_req_blocked...............: avg=117.76µs min=1.3µs  med=2.4µs max=29.42ms p(90)=3.8µs   p(95)=6.25µs
     http_req_connecting............: avg=110.64µs min=0s     med=0s    max=29.39ms p(90)=0s      p(95)=0s    
     http_req_duration..............: avg=3.96s    min=1.25s  med=3.79s max=11.01s  p(90)=5.32s   p(95)=6.16s 
       { expected_response:true }...: avg=3.96s    min=1.25s  med=3.79s max=11.01s  p(90)=5.32s   p(95)=6.16s 
   ✓ http_req_failed................: 0.00%  ✓ 0          ✗ 20391
     http_req_receiving.............: avg=87.92µs  min=20.4µs med=46µs  max=50.21ms p(90)=73.89µs p(95)=84.7µs
     http_req_sending...............: avg=89.38µs  min=7.2µs  med=13µs  max=73.26ms p(90)=27µs    p(95)=40.3µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s    max=0s      p(90)=0s      p(95)=0s    
     http_req_waiting...............: avg=3.96s    min=1.25s  med=3.79s max=11.01s  p(90)=5.31s   p(95)=6.16s 
     http_reqs......................: 20391  100.491378/s
     iteration_duration.............: avg=3.96s    min=1.25s  med=3.79s max=11.01s  p(90)=5.32s   p(95)=6.16s 
     iterations.....................: 20391  100.491378/s
     vus............................: 5      min=5        max=400
     vus_max........................: 400    min=400      max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/84dd4427-2539-486d-26cf-6ba85d3aa100/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9a1124d2-94e0-4245-9873-1df402191500/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 15170 / ✗ 93
     ✗ valid response structure
      ↳  99% — ✓ 15170 / ✗ 93

     checks.........................: 99.59% ✓ 45603    ✗ 186  
     data_received..................: 77 MB  380 kB/s
     data_sent......................: 18 MB  89 kB/s
     http_req_blocked...............: avg=1.1ms    min=1.3µs  med=2.5µs  max=92.04ms p(90)=3.9µs  p(95)=13.1µs 
     http_req_connecting............: avg=1.08ms   min=0s     med=0s     max=91.98ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=5.28s    min=2.62s  med=5.11s  max=11.1s   p(90)=5.78s  p(95)=6.74s  
       { expected_response:true }...: avg=5.28s    min=2.62s  med=5.11s  max=11.1s   p(90)=5.78s  p(95)=6.74s  
   ✓ http_req_failed................: 0.00%  ✓ 0        ✗ 15263
     http_req_receiving.............: avg=76.79µs  min=23.6µs med=51.7µs max=49.99ms p(90)=83.6µs p(95)=97.79µs
     http_req_sending...............: avg=249.57µs min=9.5µs  med=14.8µs max=38.2ms  p(90)=35.9µs p(95)=58.2µs 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=5.28s    min=2.62s  med=5.11s  max=11.1s   p(90)=5.78s  p(95)=6.74s  
     http_reqs......................: 15263  75.19738/s
     iteration_duration.............: avg=5.28s    min=2.62s  med=5.11s  max=11.17s  p(90)=5.79s  p(95)=6.74s  
     iterations.....................: 15263  75.19738/s
     vus............................: 80     min=80     max=400
     vus_max........................: 400    min=400    max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/69aa4704-c7aa-4bdc-876c-c69d50ec4600/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3380b535-82da-4279-fc8a-17c06a6dd000/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 12761 / ✗ 44
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 12805

     checks.........................: 66.55% ✓ 25566     ✗ 12849
     data_received..................: 65 MB  318 kB/s
     data_sent......................: 15 MB  75 kB/s
     http_req_blocked...............: avg=2.76ms   min=1.6µs  med=2.9µs   max=199.25ms p(90)=4.8µs   p(95)=20.38µs 
     http_req_connecting............: avg=2.69ms   min=0s     med=0s      max=183.49ms p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=6.3s     min=2.1s   med=6.05s   max=13.14s   p(90)=6.91s   p(95)=8.39s   
       { expected_response:true }...: avg=6.3s     min=2.1s   med=6.05s   max=13.14s   p(90)=6.91s   p(95)=8.39s   
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 12805
     http_req_receiving.............: avg=100.68µs min=29.3µs med=64.69µs max=36.21ms  p(90)=108.3µs p(95)=138.2µs 
     http_req_sending...............: avg=1.29ms   min=11µs   med=17µs    max=100.46ms p(90)=43.1µs  p(95)=106.96µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=6.3s     min=2.1s   med=6.05s   max=13.07s   p(90)=6.91s   p(95)=8.39s   
     http_reqs......................: 12805  63.065753/s
     iteration_duration.............: avg=6.3s     min=2.11s  med=6.05s   max=13.28s   p(90)=6.91s   p(95)=8.39s   
     iterations.....................: 12805  63.065753/s
     vus............................: 149    min=149     max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/81c2ff3f-c2a0-4172-2973-ed11a1ba7500/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5a0b47ec-a066-4572-893b-14836afc4300/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server-node16`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  81% — ✓ 10363 / ✗ 2341
     ✗ valid response structure
      ↳  81% — ✓ 10363 / ✗ 2341

     checks.........................: 87.71% ✓ 33430     ✗ 4682 
     data_received..................: 62 MB  307 kB/s
     data_sent......................: 15 MB  74 kB/s
     http_req_blocked...............: avg=2.68ms  min=1.1µs  med=2.1µs   max=164.5ms  p(90)=3.2µs  p(95)=12.8µs
     http_req_connecting............: avg=2.63ms  min=0s     med=0s      max=164.46ms p(90)=0s     p(95)=0s    
     http_req_duration..............: avg=6.34s   min=1.02s  med=5.96s   max=19.06s   p(90)=8.62s  p(95)=9.63s 
       { expected_response:true }...: avg=6.34s   min=1.02s  med=5.96s   max=19.06s   p(90)=8.62s  p(95)=9.63s 
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 12704
     http_req_receiving.............: avg=61.08µs min=20.8µs med=49.55µs max=9.21ms   p(90)=72.2µs p(95)=80µs  
     http_req_sending...............: avg=844.8µs min=6.1µs  med=13µs    max=76.86ms  p(90)=27.5µs p(95)=38µs  
     http_req_tls_handshaking.......: avg=0s      min=0s     med=0s      max=0s       p(90)=0s     p(95)=0s    
     http_req_waiting...............: avg=6.34s   min=1.02s  med=5.96s   max=19.06s   p(90)=8.62s  p(95)=9.63s 
     http_reqs......................: 12704  62.667948/s
     iteration_duration.............: avg=6.34s   min=1.02s  med=5.97s   max=19.06s   p(90)=8.62s  p(95)=9.63s 
     iterations.....................: 12704  62.667948/s
     vus............................: 182    min=182     max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6661e6a9-47be-4d9b-6316-86460f66fa00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6a6ae55c-b5ee-495b-6f0d-1a955195fa00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  99% — ✓ 10112 / ✗ 27
     ✗ no graphql errors
      ↳  75% — ✓ 7679 / ✗ 2460
     ✗ valid response structure
      ↳  75% — ✓ 7679 / ✗ 2433

     checks.........................: 83.81% ✓ 25470     ✗ 4920 
     data_received..................: 49 MB  237 kB/s
     data_sent......................: 12 MB  59 kB/s
     http_req_blocked...............: avg=4.95ms   min=1.4µs med=2.7µs  max=248.7ms  p(90)=4.4µs   p(95)=19.6µs 
     http_req_connecting............: avg=4.86ms   min=0s    med=0s     max=233.17ms p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=8.02s    min=1.43s med=7.26s  max=1m0s     p(90)=10.85s  p(95)=11.83s 
       { expected_response:true }...: avg=7.88s    min=1.43s med=7.25s  max=59.98s   p(90)=10.82s  p(95)=11.75s 
   ✓ http_req_failed................: 0.26%  ✓ 27        ✗ 10112
     http_req_receiving.............: avg=81.43µs  min=0s    med=63.2µs max=23.8ms   p(90)=88.8µs  p(95)=99.11µs
     http_req_sending...............: avg=850.27µs min=8.1µs med=15.3µs max=105.17ms p(90)=33.72µs p(95)=140.1µs
     http_req_tls_handshaking.......: avg=0s       min=0s    med=0s     max=0s       p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=8.01s    min=1.43s med=7.26s  max=1m0s     p(90)=10.84s  p(95)=11.83s 
     http_reqs......................: 10139  49.378691/s
     iteration_duration.............: avg=8.02s    min=1.43s med=7.26s  max=1m0s     p(90)=10.91s  p(95)=11.83s 
     iterations.....................: 10139  49.378691/s
     vus............................: 143    min=143     max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/286a368c-66ee-4e96-29a7-56eaf2991600/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b836de4a-1c8a-4ce2-4749-7bcd90af3900/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 4806     ✗ 0    
     data_received..................: 8.1 MB  35 kB/s
     data_sent......................: 1.9 MB  8.3 kB/s
     http_req_blocked...............: avg=17.7ms   min=2µs    med=3.9µs   max=135.84ms p(90)=76.81ms  p(95)=83.37ms 
     http_req_connecting............: avg=17.41ms  min=0s     med=0s      max=135.79ms p(90)=76.59ms  p(95)=82.5ms  
     http_req_duration..............: avg=53.44s   min=29.05s med=56.57s  max=57.29s   p(90)=56.88s   p(95)=56.95s  
       { expected_response:true }...: avg=53.44s   min=29.05s med=56.57s  max=57.29s   p(90)=56.88s   p(95)=56.95s  
   ✓ http_req_failed................: 0.00%   ✓ 0        ✗ 1602 
     http_req_receiving.............: avg=112.09µs min=32.3µs med=97.85µs max=5.68ms   p(90)=159.17µs p(95)=183.55µs
     http_req_sending...............: avg=5.64ms   min=11.9µs med=30.7µs  max=96.13ms  p(90)=19.71ms  p(95)=44.67ms 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=53.44s   min=29.05s med=56.57s  max=57.29s   p(90)=56.88s   p(95)=56.95s  
     http_reqs......................: 1602    6.997929/s
     iteration_duration.............: avg=53.46s   min=29.05s med=56.57s  max=57.34s   p(90)=56.89s   p(95)=56.96s  
     iterations.....................: 1602    6.997929/s
     vus............................: 2       min=2      max=400
     vus_max........................: 400     min=400    max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/80a0e8ae-2b5a-4514-4ab8-e1fc551cdd00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/767710fc-dcf4-495c-f9a0-66fb335f7b00/public" alt="HTTP Overview" />


  </details>