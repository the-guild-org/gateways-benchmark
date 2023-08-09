## Overview for: `scenarios/fed-v1-constants-vus-subgraphs-delay`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. All subgraphs have an intentional delay on replying, and this creates additional pressure on the gateway's memory. We are running a heavy load of concurrent VUs to measure response time and other stats, during stress. It measure things like memory usage, CPU usage, response times.


This scenario was running 400 VUs over 200s


### Comparison


| Gateway              | RPS ⬇️ |        Requests        |          Duration          |
| :------------------- | :----: | :--------------------: | :------------------------: |
| wundergraph          |  236   | 47831 total, 0 failed  |  avg: 1677ms, p95: 1996ms  |
| mesh-supergraph      |   86   | 17553 total, 0 failed  |  avg: 4575ms, p95: 5523ms  |
| apollo-router        |   67   | 13750 total, 0 failed  |  avg: 5926ms, p95: 9021ms  |
| mesh                 |   64   | 13086 total, 0 failed  |  avg: 6184ms, p95: 7981ms  |
| apollo-server-node16 |   60   | 12360 total, 0 failed  | avg: 6546ms, p95: 10021ms  |
| apollo-server        |   58   | 11949 total, 74 failed |  avg: 6765ms, p95: 8739ms  |
| mercurius            |   7    |  1608 total, 0 failed  | avg: 53251ms, p95: 56921ms |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 143493     ✗ 0    
     data_received..................: 238 MB  1.2 MB/s
     data_sent......................: 57 MB   281 kB/s
     http_req_blocked...............: avg=935.23µs min=1.2µs  med=2.6µs  max=217.69ms p(90)=3.8µs   p(95)=4.5µs   
     http_req_connecting............: avg=918.55µs min=0s     med=0s     max=212.29ms p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=1.67s    min=1s     med=1.67s  max=2.43s    p(90)=1.91s   p(95)=1.99s   
       { expected_response:true }...: avg=1.67s    min=1s     med=1.67s  max=2.43s    p(90)=1.91s   p(95)=1.99s   
   ✓ http_req_failed................: 0.00%   ✓ 0          ✗ 47831
     http_req_receiving.............: avg=891.72µs min=15.3µs med=38.6µs max=373.61ms p(90)=280.3µs p(95)=484.85µs
     http_req_sending...............: avg=707.62µs min=8.3µs  med=14µs   max=241.9ms  p(90)=33.9µs  p(95)=145.65µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=1.67s    min=1s     med=1.67s  max=2.43s    p(90)=1.91s   p(95)=1.99s   
     http_reqs......................: 47831   236.852613/s
     iteration_duration.............: avg=1.67s    min=1s     med=1.67s  max=2.43s    p(90)=1.92s   p(95)=2s      
     iterations.....................: 47831   236.852613/s
     vus............................: 94      min=94       max=400
     vus_max........................: 400     min=400      max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/943212c1-9751-441a-b550-3f952a040f00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f1ad3b53-1422-4c87-8aea-bf9f6bc4d200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 17545 / ✗ 8
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 17553

     checks.........................: 66.65% ✓ 35098     ✗ 17561
     data_received..................: 88 MB  437 kB/s
     data_sent......................: 21 MB  103 kB/s
     http_req_blocked...............: avg=896.29µs min=1.3µs med=2.4µs  max=107ms   p(90)=3.6µs   p(95)=5.7µs 
     http_req_connecting............: avg=875.65µs min=0s    med=0s     max=77.19ms p(90)=0s      p(95)=0s    
     http_req_duration..............: avg=4.57s    min=1.4s  med=4.46s  max=9.94s   p(90)=5s      p(95)=5.52s 
       { expected_response:true }...: avg=4.57s    min=1.4s  med=4.46s  max=9.94s   p(90)=5s      p(95)=5.52s 
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 17553
     http_req_receiving.............: avg=70.48µs  min=24µs  med=52µs   max=70.46ms p(90)=77.41µs p(95)=86.1µs
     http_req_sending...............: avg=242.86µs min=8.8µs med=14.1µs max=73.53ms p(90)=29.6µs  p(95)=35.6µs
     http_req_tls_handshaking.......: avg=0s       min=0s    med=0s     max=0s      p(90)=0s      p(95)=0s    
     http_req_waiting...............: avg=4.57s    min=1.4s  med=4.46s  max=9.93s   p(90)=5s      p(95)=5.52s 
     http_reqs......................: 17553  86.871594/s
     iteration_duration.............: avg=4.57s    min=1.4s  med=4.46s  max=9.98s   p(90)=5s      p(95)=5.52s 
     iterations.....................: 17553  86.871594/s
     vus............................: 98     min=98      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3e82770a-45bd-4613-b76c-a1311f127b00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/cd65398e-3695-43ed-88f7-91765673ff00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 13643 / ✗ 107
     ✗ valid response structure
      ↳  99% — ✓ 13643 / ✗ 107

     checks.........................: 99.48% ✓ 41036     ✗ 214  
     data_received..................: 68 MB  334 kB/s
     data_sent......................: 16 MB  80 kB/s
     http_req_blocked...............: avg=1.05ms   min=1.5µs  med=2.8µs  max=113.89ms p(90)=5µs     p(95)=21.5µs  
     http_req_connecting............: avg=1.01ms   min=0s     med=0s     max=65.3ms   p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=5.92s    min=2.03s  med=5.58s  max=12.98s   p(90)=8.07s   p(95)=9.02s   
       { expected_response:true }...: avg=5.92s    min=2.03s  med=5.58s  max=12.98s   p(90)=8.07s   p(95)=9.02s   
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 13750
     http_req_receiving.............: avg=640.46µs min=25.8µs med=64.8µs max=135.8ms  p(90)=116.3µs p(95)=152.9µs 
     http_req_sending...............: avg=228.51µs min=9µs    med=17µs   max=254.76ms p(90)=47.9µs  p(95)=114.82µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=5.92s    min=2.03s  med=5.58s  max=12.98s   p(90)=8.07s   p(95)=9.02s   
     http_reqs......................: 13750  67.233686/s
     iteration_duration.............: avg=5.92s    min=2.03s  med=5.59s  max=13.01s   p(90)=8.07s   p(95)=9.02s   
     iterations.....................: 13750  67.233686/s
     vus............................: 284    min=284     max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2eca624e-ddfb-463b-07a6-f26985774b00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c78fa4df-17d2-4511-84f8-0a5b14b4d700/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 13056 / ✗ 30
     ✗ valid response structure
      ↳  99% — ✓ 13056 / ✗ 30

     checks.........................: 99.84% ✓ 39198     ✗ 60   
     data_received..................: 66 MB  323 kB/s
     data_sent......................: 16 MB  76 kB/s
     http_req_blocked...............: avg=2.07ms   min=1.7µs  med=2.9µs   max=116.24ms p(90)=4.7µs  p(95)=20.7µs  
     http_req_connecting............: avg=2.05ms   min=0s     med=0s      max=116ms    p(90)=0s     p(95)=0s      
     http_req_duration..............: avg=6.18s    min=3.23s  med=5.98s   max=12s      p(90)=6.95s  p(95)=7.98s   
       { expected_response:true }...: avg=6.18s    min=3.23s  med=5.98s   max=12s      p(90)=6.95s  p(95)=7.98s   
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 13086
     http_req_receiving.............: avg=167.37µs min=27.7µs med=63.4µs  max=48.83ms  p(90)=105µs  p(95)=138.77µs
     http_req_sending...............: avg=549.95µs min=10.3µs med=16.89µs max=171.78ms p(90)=43.4µs p(95)=126.25µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s       p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=6.18s    min=3.23s  med=5.98s   max=11.95s   p(90)=6.95s  p(95)=7.98s   
     http_reqs......................: 13086  64.302437/s
     iteration_duration.............: avg=6.18s    min=3.23s  med=5.99s   max=12.08s   p(90)=6.95s  p(95)=7.98s   
     iterations.....................: 13086  64.302437/s
     vus............................: 271    min=271     max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0f7bdacf-af6c-4934-ca57-f8d5fe728e00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/365d437d-4b58-45cb-0edb-9cc63314a900/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server-node16`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  81% — ✓ 10062 / ✗ 2298
     ✗ valid response structure
      ↳  81% — ✓ 10062 / ✗ 2298

     checks.........................: 87.60% ✓ 32484     ✗ 4596 
     data_received..................: 61 MB  299 kB/s
     data_sent......................: 15 MB  72 kB/s
     http_req_blocked...............: avg=1.17ms   min=1.1µs  med=2.4µs  max=73.45ms p(90)=3.8µs  p(95)=14.21µs
     http_req_connecting............: avg=1.15ms   min=0s     med=0s     max=73.27ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=6.54s    min=1.46s  med=6.23s  max=11.54s  p(90)=8.74s  p(95)=10.02s 
       { expected_response:true }...: avg=6.54s    min=1.46s  med=6.23s  max=11.54s  p(90)=8.74s  p(95)=10.02s 
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 12360
     http_req_receiving.............: avg=66.65µs  min=20.7µs med=55.3µs max=11.56ms p(90)=80µs   p(95)=87.69µs
     http_req_sending...............: avg=115.04µs min=6.8µs  med=14.8µs max=55.17ms p(90)=29.7µs p(95)=97.19µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=6.54s    min=1.46s  med=6.23s  max=11.54s  p(90)=8.74s  p(95)=10.02s 
     http_reqs......................: 12360  60.654416/s
     iteration_duration.............: avg=6.54s    min=1.46s  med=6.23s  max=11.54s  p(90)=8.74s  p(95)=10.02s 
     iterations.....................: 12360  60.654416/s
     vus............................: 176    min=176     max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f836d7a7-550e-435d-6f66-39ee9a8da900/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/bf4150df-1387-4e26-563d-f7377d0e0300/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  99% — ✓ 11875 / ✗ 74
     ✗ no graphql errors
      ↳  82% — ✓ 9873 / ✗ 2076
     ✗ valid response structure
      ↳  83% — ✓ 9873 / ✗ 2002

     checks.........................: 88.39% ✓ 31621     ✗ 4152 
     data_received..................: 58 MB  287 kB/s
     data_sent......................: 14 MB  70 kB/s
     http_req_blocked...............: avg=1.3ms    min=1µs      med=2.6µs  max=61.39ms p(90)=4.1µs  p(95)=16.6µs  
     http_req_connecting............: avg=1.28ms   min=0s       med=0s     max=57.55ms p(90)=0s     p(95)=0s      
     http_req_duration..............: avg=6.76s    min=884.57ms med=5.96s  max=1m0s    p(90)=8.03s  p(95)=8.73s   
       { expected_response:true }...: avg=6.43s    min=884.57ms med=5.95s  max=59.78s  p(90)=7.97s  p(95)=8.58s   
   ✓ http_req_failed................: 0.61%  ✓ 74        ✗ 11875
     http_req_receiving.............: avg=88.63µs  min=0s       med=58.8µs max=39.8ms  p(90)=86.8µs p(95)=96.3µs  
     http_req_sending...............: avg=188.66µs min=7.3µs    med=16.2µs max=35ms    p(90)=31µs   p(95)=103.44µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=6.76s    min=884.51ms med=5.96s  max=1m0s    p(90)=8.03s  p(95)=8.73s   
     http_reqs......................: 11949  58.618748/s
     iteration_duration.............: avg=6.76s    min=884.78ms med=5.96s  max=1m0s    p(90)=8.03s  p(95)=8.76s   
     iterations.....................: 11949  58.618748/s
     vus............................: 1      min=1       max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c1dd3e06-4f6a-4f84-4602-cde922627f00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f5a1ee07-8166-4fae-82de-b20e22773d00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 4824     ✗ 0    
     data_received..................: 8.1 MB  35 kB/s
     data_sent......................: 1.9 MB  8.3 kB/s
     http_req_blocked...............: avg=26.47ms min=1.9µs  med=3.9µs  max=178.09ms p(90)=116.28ms p(95)=133.38ms
     http_req_connecting............: avg=26.29ms min=0s     med=0s     max=178.06ms p(90)=116.19ms p(95)=133.02ms
     http_req_duration..............: avg=53.25s  min=29.07s med=56.61s max=57.14s   p(90)=56.88s   p(95)=56.92s  
       { expected_response:true }...: avg=53.25s  min=29.07s med=56.61s max=57.14s   p(90)=56.88s   p(95)=56.92s  
   ✓ http_req_failed................: 0.00%   ✓ 0        ✗ 1608 
     http_req_receiving.............: avg=95.8µs  min=33.9µs med=88.8µs max=914.31µs p(90)=116.5µs  p(95)=131.42µs
     http_req_sending...............: avg=5.37ms  min=9.8µs  med=27.3µs max=60.95ms  p(90)=20.93ms  p(95)=27.65ms 
     http_req_tls_handshaking.......: avg=0s      min=0s     med=0s     max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=53.24s  min=29.07s med=56.61s max=57.14s   p(90)=56.88s   p(95)=56.92s  
     http_reqs......................: 1608    7.019447/s
     iteration_duration.............: avg=53.27s  min=29.07s med=56.61s max=57.14s   p(90)=56.88s   p(95)=56.92s  
     iterations.....................: 1608    7.019447/s
     vus............................: 6       min=6      max=400
     vus_max........................: 400     min=400    max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4ab80297-b4bf-450c-b004-bbc858c91100/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0cf5b233-261b-4939-9cd2-b89b973f4200/public" alt="HTTP Overview" />


  </details>