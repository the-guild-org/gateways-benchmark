## Overview for: `federation-v1/ramping-vus`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. We are running a heavy load of concurrent VUs to measure response time and other stats, during stress. It measure things like memory usage, CPU usage, response times. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was trying to reach 2000 concurrent VUs over 600s


### Comparison


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ff3d05b3-b5aa-44d2-beb6-a1a83b3af800/public" alt="Comparison" />


| Gateway             | duration(p95)⬇️ |  RPS  |         Requests         |                       Durations                       | Notes                                                                          |
| :------------------ | :-------------: | :---: | :----------------------: | :---------------------------------------------------: | :----------------------------------------------------------------------------- |
| wundergraph         |     6838ms      |  161  |  98587 total, 0 failed   |  avg: 2746ms, p95: 6838ms, max: 26376ms, med: 2234ms  | ✅                                                                              |
| apollo-router       |     6943ms      |  172  |  105311 total, 0 failed  |  avg: 2745ms, p95: 6943ms, max: 23085ms, med: 2143ms  | ✅                                                                              |
| mesh-supergraph-bun |     7142ms      |  184  |  112576 total, 0 failed  |  avg: 3296ms, p95: 7142ms, max: 28750ms, med: 2810ms  | ✅                                                                              |
| mesh-supergraph     |     19252ms     |  100  |  62268 total, 0 failed   | avg: 10062ms, p95: 19252ms, max: 29145ms, med: 9961ms | ✅                                                                              |
| apollo-server       |     60000ms     |  72   | 45833 total, 7618 failed | avg: 13963ms, p95: 60001ms, max: 60747ms, med: 4419ms | ❌ 7618 failed requests, 7618 non-200 responses, 7618 unexpected GraphQL errors |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 295761     ✗ 0     
     data_received..................: 8.7 GB  14 MB/s
     data_sent......................: 117 MB  192 kB/s
     http_req_blocked...............: avg=48.17ms  min=1.62µs  med=3.62µs  max=18.88s p(90)=5.76µs   p(95)=10.62µs 
     http_req_connecting............: avg=45.09ms  min=0s      med=0s      max=18.88s p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=2.74s    min=8.08ms  med=2.23s   max=26.37s p(90)=5.77s    p(95)=6.83s   
       { expected_response:true }...: avg=2.74s    min=8.08ms  med=2.23s   max=26.37s p(90)=5.77s    p(95)=6.83s   
     http_req_failed................: 0.00%   ✓ 0          ✗ 98587 
     http_req_receiving.............: avg=645.87ms min=29.28µs med=82.94µs max=22.56s p(90)=2.14s    p(95)=3.97s   
     http_req_sending...............: avg=76.72ms  min=7.59µs  med=15.41µs max=17.72s p(90)=133.74µs p(95)=180.63ms
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s     p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=2.02s    min=7.94ms  med=1.66s   max=12.18s p(90)=4.4s     p(95)=5.51s   
     http_reqs......................: 98587   161.615641/s
     iteration_duration.............: avg=6.16s    min=18.81ms med=4.93s   max=45.39s p(90)=13.22s   p(95)=16.46s  
     iterations.....................: 98587   161.615641/s
     vus............................: 7       min=7        max=2000
     vus_max........................: 2000    min=2000     max=2000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/74be661a-bc4f-47ab-01e1-7306d1c7b600/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1d1c6d8c-2692-484d-3890-d34190588b00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5c37c1fc-499b-4091-db0e-3e5e71d19600/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 315933     ✗ 0     
     data_received..................: 9.2 GB  15 MB/s
     data_sent......................: 125 MB  204 kB/s
     http_req_blocked...............: avg=42.96ms  min=1.53µs  med=3.51µs  max=18.66s p(90)=5.66µs   p(95)=9.88µs  
     http_req_connecting............: avg=41.08ms  min=0s      med=0s      max=18.66s p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=2.74s    min=9.08ms  med=2.14s   max=23.08s p(90)=5.78s    p(95)=6.94s   
       { expected_response:true }...: avg=2.74s    min=9.08ms  med=2.14s   max=23.08s p(90)=5.78s    p(95)=6.94s   
     http_req_failed................: 0.00%   ✓ 0          ✗ 105311
     http_req_receiving.............: avg=564.68ms min=26µs    med=72.63µs max=17.64s p(90)=1.76s    p(95)=3.78s   
     http_req_sending...............: avg=70.84ms  min=6.54µs  med=15.22µs max=16.69s p(90)=122.53µs p(95)=125.97ms
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s     p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=2.1s     min=9.03ms  med=1.68s   max=13s    p(90)=4.75s    p(95)=5.57s   
     http_reqs......................: 105311  172.112416/s
     iteration_duration.............: avg=5.81s    min=18.12ms med=4.71s   max=41.5s  p(90)=12.43s   p(95)=15.16s  
     iterations.....................: 105311  172.112416/s
     vus............................: 179     min=51       max=1994
     vus_max........................: 2000    min=2000     max=2000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/78666d5f-68e8-4e58-9eb0-6b786b656000/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/06913f1f-7f95-4ded-7802-306173e92a00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d86d0e73-8acd-43cb-ab42-fcf62e983d00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 337728     ✗ 0     
     data_received..................: 9.9 GB  16 MB/s
     data_sent......................: 134 MB  219 kB/s
     http_req_blocked...............: avg=25.83ms  min=1.43µs  med=3.29µs  max=9.54s  p(90)=5.39µs   p(95)=7.54µs  
     http_req_connecting............: avg=24.66ms  min=0s      med=0s      max=9.54s  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=3.29s    min=13.75ms med=2.8s    max=28.75s p(90)=6.11s    p(95)=7.14s   
       { expected_response:true }...: avg=3.29s    min=13.75ms med=2.8s    max=28.75s p(90)=6.11s    p(95)=7.14s   
     http_req_failed................: 0.00%   ✓ 0          ✗ 112576
     http_req_receiving.............: avg=477.96ms min=28.06µs med=68.65µs max=23.57s p(90)=1.32s    p(95)=3.36s   
     http_req_sending...............: avg=58.45ms  min=6.98µs  med=14.24µs max=21.97s p(90)=127.78µs p(95)=101.75ms
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s     p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=2.75s    min=9.98ms  med=2.35s   max=12.9s  p(90)=5.33s    p(95)=5.92s   
     http_reqs......................: 112576  184.543202/s
     iteration_duration.............: avg=5.47s    min=21.39ms med=4.52s   max=37.83s p(90)=11.43s   p(95)=13.77s  
     iterations.....................: 112576  184.543202/s
     vus............................: 298     min=51       max=1999
     vus_max........................: 2000    min=2000     max=2000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d4968bec-e948-4122-2ec4-b55e6d592700/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/73a143d4-3704-4f6a-b1b2-3f02c7e1a800/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c0ac86aa-81b4-48d0-3971-b24e2ece6200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 186804     ✗ 0     
     data_received..................: 5.5 GB  8.8 MB/s
     data_sent......................: 74 MB   120 kB/s
     http_req_blocked...............: avg=3.93ms  min=1.68µs   med=3.93µs  max=1.63s  p(90)=6.53µs  p(95)=11.98µs 
     http_req_connecting............: avg=3.79ms  min=0s       med=0s      max=1.63s  p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=10.06s  min=80.06ms  med=9.96s   max=29.14s p(90)=17.91s  p(95)=19.25s  
       { expected_response:true }...: avg=10.06s  min=80.06ms  med=9.96s   max=29.14s p(90)=17.91s  p(95)=19.25s  
     http_req_failed................: 0.00%   ✓ 0          ✗ 62268 
     http_req_receiving.............: avg=39.92ms min=31.19µs  med=74.79µs max=4.52s  p(90)=4.44ms  p(95)=159.62ms
     http_req_sending...............: avg=6.16ms  min=8.72µs   med=16.7µs  max=2.93s  p(90)=49.49µs p(95)=3.65ms  
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s      max=0s     p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=10.01s  min=79.78ms  med=9.94s   max=29.14s p(90)=17.73s  p(95)=19.16s  
     http_reqs......................: 62268   100.706585/s
     iteration_duration.............: avg=10.28s  min=153.49ms med=10.11s  max=30.75s p(90)=18.2s   p(95)=19.58s  
     iterations.....................: 62268   100.706585/s
     vus............................: 43      min=43       max=1999
     vus_max........................: 2000    min=2000     max=2000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1057bf5b-b332-4444-a4ae-e4dac4bab600/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d61a311b-d5dc-470a-079d-874936e46b00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1477492d-3c6b-43e5-4cdb-ef5108ee3000/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  83% — ✓ 38215 / ✗ 7618
     ✗ no graphql errors
      ↳  83% — ✓ 38215 / ✗ 7618
     ✓ valid response structure

     checks.........................: 88.26% ✓ 114645    ✗ 15236 
     data_received..................: 3.4 GB 5.3 MB/s
     data_sent......................: 55 MB  86 kB/s
     http_req_blocked...............: avg=581.41µs min=1.56µs   med=3.37µs   max=295.84ms p(90)=241.14µs p(95)=667.56µs
     http_req_connecting............: avg=556.59µs min=0s       med=0s       max=253.95ms p(90)=195.74µs p(95)=572.22µs
     http_req_duration..............: avg=13.96s   min=106.94ms med=4.41s    max=1m0s     p(90)=1m0s     p(95)=1m0s    
       { expected_response:true }...: avg=4.78s    min=106.94ms med=4.28s    max=59.79s   p(90)=5.52s    p(95)=6.19s   
     http_req_failed................: 16.62% ✓ 7618      ✗ 38215 
     http_req_receiving.............: avg=281.02µs min=0s       med=102.72µs max=177.89ms p(90)=178.06µs p(95)=244.65µs
     http_req_sending...............: avg=206.58µs min=8.35µs   med=16.34µs  max=269.93ms p(90)=43.06µs  p(95)=75.03µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=13.96s   min=106.83ms med=4.41s    max=1m0s     p(90)=1m0s     p(95)=1m0s    
     http_reqs......................: 45833  72.266943/s
     iteration_duration.............: avg=13.97s   min=118.54ms med=4.43s    max=1m0s     p(90)=1m0s     p(95)=1m0s    
     iterations.....................: 45833  72.266943/s
     vus............................: 39     min=39      max=2000
     vus_max........................: 2000   min=2000    max=2000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/86d61d52-e2ad-4d67-4660-30932fa84200/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/89cc327d-5f66-4694-032f-ab250b7f1000/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2db68cd6-aeb6-46fd-0b02-5d7dac59f700/public" alt="HTTP Overview" />


  </details>