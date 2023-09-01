## Overview for: `scenarios/fed-v1-constants-vus-subgraphs-delay`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. All subgraphs have an intentional delay on replying, and this creates additional pressure on the gateway's memory. We are running a heavy load of concurrent VUs to measure response time and other stats, during stress. It measure things like memory usage, CPU usage, response times.


This scenario was running 400 VUs over 200s


### Comparison


| Gateway              | RPS ⬇️ |        Requests        |          Duration          |
| :------------------- | :----: | :--------------------: | :------------------------: |
| mesh-bun             |  481   | 96506 total, 0 failed  |  avg: 828ms, p95: 1352ms   |
| wundergraph          |  239   | 48240 total, 0 failed  |  avg: 1665ms, p95: 1936ms  |
| apollo-router        |  111   | 22724 total, 0 failed  |  avg: 3564ms, p95: 5732ms  |
| mesh-supergraph      |   95   | 19400 total, 0 failed  |  avg: 4148ms, p95: 5046ms  |
| mesh                 |   61   | 12548 total, 0 failed  |  avg: 6429ms, p95: 8579ms  |
| apollo-server        |   47   | 9916 total, 291 failed |  avg: 8184ms, p95: 9697ms  |
| apollo-server-node16 |   38   |  8027 total, 0 failed  | avg: 10187ms, p95: 18265ms |
| mercurius            |   7    |  1617 total, 0 failed  | avg: 52973ms, p95: 56730ms |



<details>
  <summary>Summary for: `mesh-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  0% — ✓ 0 / ✗ 96506
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 96506

     checks.........................: 33.33% ✓ 96506      ✗ 193012
     data_received..................: 92 MB  458 kB/s
     data_sent......................: 115 MB 572 kB/s
     http_req_blocked...............: avg=269.12µs min=1.3µs    med=2.29µs   max=195.56ms p(90)=3.2µs  p(95)=4.4µs   
     http_req_connecting............: avg=256.11µs min=0s       med=0s       max=195.48ms p(90)=0s     p(95)=0s      
     http_req_duration..............: avg=828.14ms min=303.8ms  med=760.4ms  max=2.08s    p(90)=1.23s  p(95)=1.35s   
       { expected_response:true }...: avg=828.14ms min=303.8ms  med=760.4ms  max=2.08s    p(90)=1.23s  p(95)=1.35s   
   ✓ http_req_failed................: 0.00%  ✓ 0          ✗ 96506 
     http_req_receiving.............: avg=632.62µs min=15.6µs   med=32.59µs  max=255.68ms p(90)=203µs  p(95)=409.87µs
     http_req_sending...............: avg=236.72µs min=8.8µs    med=14µs     max=368.96ms p(90)=80.8µs p(95)=220.3µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s       p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=827.27ms min=303.76ms med=759.35ms max=2.08s    p(90)=1.23s  p(95)=1.35s   
     http_reqs......................: 96506  481.648218/s
     iteration_duration.............: avg=829.07ms min=303.97ms med=761.11ms max=2.08s    p(90)=1.23s  p(95)=1.35s   
     iterations.....................: 96506  481.648218/s
     vus............................: 400    min=400      max=400 
     vus_max........................: 400    min=400      max=400 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/fa9ec691-47b7-47c3-2f1d-e5775e421200/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b13fb5f8-a4f5-4bdb-a7b6-d94b183d7e00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 144720     ✗ 0    
     data_received..................: 240 MB  1.2 MB/s
     data_sent......................: 57 MB   284 kB/s
     http_req_blocked...............: avg=300.99µs min=1.2µs    med=2.4µs  max=69.8ms   p(90)=3.6µs   p(95)=4.3µs   
     http_req_connecting............: avg=293.35µs min=0s       med=0s     max=69.74ms  p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=1.66s    min=903.05ms med=1.65s  max=2.64s    p(90)=1.86s   p(95)=1.93s   
       { expected_response:true }...: avg=1.66s    min=903.05ms med=1.65s  max=2.64s    p(90)=1.86s   p(95)=1.93s   
   ✓ http_req_failed................: 0.00%   ✓ 0          ✗ 48240
     http_req_receiving.............: avg=824.82µs min=15.9µs   med=35.7µs max=298.76ms p(90)=265.9µs p(95)=466.31µs
     http_req_sending...............: avg=513.45µs min=7.1µs    med=13µs   max=218.58ms p(90)=34.31µs p(95)=148µs   
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=1.66s    min=902.89ms med=1.65s  max=2.63s    p(90)=1.86s   p(95)=1.93s   
     http_reqs......................: 48240   239.364063/s
     iteration_duration.............: avg=1.66s    min=903.81ms med=1.65s  max=2.71s    p(90)=1.86s   p(95)=1.93s   
     iterations.....................: 48240   239.364063/s
     vus............................: 237     min=237      max=400
     vus_max........................: 400     min=400      max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f7acab0c-cfd8-4dbe-70b4-41896847ce00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ffb3987d-a037-4fce-f4b3-9556c3aa7300/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 22705 / ✗ 19
     ✗ valid response structure
      ↳  99% — ✓ 22705 / ✗ 19

     checks.........................: 99.94% ✓ 68134    ✗ 38   
     data_received..................: 113 MB 556 kB/s
     data_sent......................: 27 MB  133 kB/s
     http_req_blocked...............: avg=739.46µs min=900ns   med=2.1µs   max=63.88ms p(90)=3.1µs   p(95)=3.8µs  
     http_req_connecting............: avg=731.49µs min=0s      med=0s      max=63.86ms p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=3.56s    min=1.42s   med=3.39s   max=8.35s   p(90)=4.98s   p(95)=5.73s  
       { expected_response:true }...: avg=3.56s    min=1.42s   med=3.39s   max=8.35s   p(90)=4.98s   p(95)=5.73s  
   ✓ http_req_failed................: 0.00%  ✓ 0        ✗ 22724
     http_req_receiving.............: avg=98.48µs  min=17.39µs med=37.29µs max=47.92ms p(90)=60.89µs p(95)=69.99µs
     http_req_sending...............: avg=130.76µs min=5.7µs   med=12.5µs  max=64.47ms p(90)=26.3µs  p(95)=32.38µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s      p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=3.56s    min=1.42s   med=3.39s   max=8.35s   p(90)=4.98s   p(95)=5.73s  
     http_reqs......................: 22724  111.6692/s
     iteration_duration.............: avg=3.56s    min=1.42s   med=3.39s   max=8.35s   p(90)=4.98s   p(95)=5.73s  
     iterations.....................: 22724  111.6692/s
     vus............................: 207    min=207    max=400
     vus_max........................: 400    min=400    max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/577baf49-8a4b-4eae-8ab2-73a04d082b00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/bc800774-6033-44b7-4802-ea0b316f9f00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 19358 / ✗ 42
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 19400

     checks.........................: 66.59% ✓ 38758     ✗ 19442
     data_received..................: 98 MB  483 kB/s
     data_sent......................: 23 MB  114 kB/s
     http_req_blocked...............: avg=1.72ms   min=1µs    med=2.2µs  max=233.01ms p(90)=3.7µs  p(95)=5µs   
     http_req_connecting............: avg=1.68ms   min=0s     med=0s     max=232.78ms p(90)=0s     p(95)=0s    
     http_req_duration..............: avg=4.14s    min=1.88s  med=4.06s  max=8.7s     p(90)=4.59s  p(95)=5.04s 
       { expected_response:true }...: avg=4.14s    min=1.88s  med=4.06s  max=8.7s     p(90)=4.59s  p(95)=5.04s 
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 19400
     http_req_receiving.............: avg=64.38µs  min=20.8µs med=54.8µs max=28.78ms  p(90)=77.7µs p(95)=85.9µs
     http_req_sending...............: avg=243.72µs min=8.1µs  med=13.5µs max=88.52ms  p(90)=25.7µs p(95)=31.2µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s     p(95)=0s    
     http_req_waiting...............: avg=4.14s    min=1.88s  med=4.06s  max=8.7s     p(90)=4.59s  p(95)=5.04s 
     http_reqs......................: 19400  95.932212/s
     iteration_duration.............: avg=4.15s    min=1.88s  med=4.06s  max=8.78s    p(90)=4.59s  p(95)=5.04s 
     iterations.....................: 19400  95.932212/s
     vus............................: 209    min=209     max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/12aa14ef-b47a-4517-cdd7-ed2f53d59c00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d8b5d6a9-bcb3-4307-6215-28a4a129b000/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 12482 / ✗ 66
     ✗ valid response structure
      ↳  99% — ✓ 12482 / ✗ 66

     checks.........................: 99.64% ✓ 37512     ✗ 132  
     data_received..................: 64 MB  313 kB/s
     data_sent......................: 15 MB  73 kB/s
     http_req_blocked...............: avg=2.36ms   min=1.8µs  med=3.1µs   max=219.14ms p(90)=5.1µs    p(95)=21.16µs 
     http_req_connecting............: avg=2.3ms    min=0s     med=0s      max=219.09ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=6.42s    min=2.91s  med=6.19s   max=13.32s   p(90)=7.32s    p(95)=8.57s   
       { expected_response:true }...: avg=6.42s    min=2.91s  med=6.19s   max=13.32s   p(90)=7.32s    p(95)=8.57s   
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 12548
     http_req_receiving.............: avg=103.99µs min=29.8µs med=63.5µs  max=27.49ms  p(90)=104.49µs p(95)=131.69µs
     http_req_sending...............: avg=371.91µs min=11.3µs med=17.59µs max=68.19ms  p(90)=42.7µs   p(95)=115.42µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=6.42s    min=2.91s  med=6.19s   max=13.32s   p(90)=7.32s    p(95)=8.57s   
     http_reqs......................: 12548  61.725557/s
     iteration_duration.............: avg=6.43s    min=2.91s  med=6.19s   max=13.33s   p(90)=7.32s    p(95)=8.57s   
     iterations.....................: 12548  61.725557/s
     vus............................: 125    min=125     max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/90d2b105-0aa5-489e-12c7-312d4f0d3600/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5dd2b7d8-a07b-4054-60aa-592311796b00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  97% — ✓ 9625 / ✗ 291
     ✗ no graphql errors
      ↳  79% — ✓ 7930 / ✗ 1986
     ✗ valid response structure
      ↳  82% — ✓ 7930 / ✗ 1695

     checks.........................: 86.51% ✓ 25485     ✗ 3972 
     data_received..................: 47 MB  227 kB/s
     data_sent......................: 12 MB  57 kB/s
     http_req_blocked...............: avg=1.47ms   min=1.6µs    med=2.9µs   max=77.5ms  p(90)=6.85µs  p(95)=3.39ms 
     http_req_connecting............: avg=1.44ms   min=0s       med=0s      max=77.47ms p(90)=0s      p(95)=2.93ms 
     http_req_duration..............: avg=8.18s    min=895.67ms med=6.19s   max=1m0s    p(90)=8.46s   p(95)=9.69s  
       { expected_response:true }...: avg=6.61s    min=895.67ms med=6.15s   max=59.32s  p(90)=8.14s   p(95)=8.75s  
   ✓ http_req_failed................: 2.93%  ✓ 291       ✗ 9625 
     http_req_receiving.............: avg=74.42µs  min=0s       med=67.1µs  max=13.33ms p(90)=96.15µs p(95)=108.5µs
     http_req_sending...............: avg=239.81µs min=9.19µs   med=16.89µs max=30.07ms p(90)=38.69µs p(95)=410.4µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s      p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=8.18s    min=895.6ms  med=6.19s   max=1m0s    p(90)=8.46s   p(95)=9.69s  
     http_reqs......................: 9916   47.692648/s
     iteration_duration.............: avg=8.18s    min=895.89ms med=6.19s   max=1m0s    p(90)=8.46s   p(95)=9.69s  
     iterations.....................: 9916   47.692648/s
     vus............................: 24     min=24      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/28f0a125-5fc3-4277-87a0-12e6b1dfb700/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f467a9d7-53a1-4dd4-9747-3062a668d300/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server-node16`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  58% — ✓ 4723 / ✗ 3304
     ✗ valid response structure
      ↳  58% — ✓ 4723 / ✗ 3304

     checks.........................: 72.55% ✓ 17473     ✗ 6608 
     data_received..................: 37 MB  178 kB/s
     data_sent......................: 9.5 MB 46 kB/s
     http_req_blocked...............: avg=3.18ms  min=1.4µs  med=2.6µs  max=134.02ms p(90)=4.7µs    p(95)=396.93µs
     http_req_connecting............: avg=3.15ms  min=0s     med=0s     max=127.21ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=10.18s  min=1.36s  med=9.91s  max=24.58s   p(90)=14.83s   p(95)=18.26s  
       { expected_response:true }...: avg=10.18s  min=1.36s  med=9.91s  max=24.58s   p(90)=14.83s   p(95)=18.26s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 8027 
     http_req_receiving.............: avg=80.66µs min=28.9µs med=65.4µs max=13.67ms  p(90)=111.19µs p(95)=139.69µs
     http_req_sending...............: avg=1.13ms  min=10µs   med=16.6µs max=109.77ms p(90)=53.14µs  p(95)=468.37µs
     http_req_tls_handshaking.......: avg=0s      min=0s     med=0s     max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=10.18s  min=1.36s  med=9.91s  max=24.58s   p(90)=14.82s   p(95)=18.26s  
     http_reqs......................: 8027   38.924048/s
     iteration_duration.............: avg=10.19s  min=1.37s  med=9.91s  max=24.59s   p(90)=14.88s   p(95)=18.26s  
     iterations.....................: 8027   38.924048/s
     vus............................: 46     min=46      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/be5ac848-0a33-445c-a388-2fe1997b9700/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4fbe3e0c-990d-411a-a1a9-c103dfc57400/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 4851     ✗ 0    
     data_received..................: 8.1 MB  35 kB/s
     data_sent......................: 1.9 MB  8.4 kB/s
     http_req_blocked...............: avg=1.76ms  min=1.8µs  med=3.5µs  max=48.29ms p(90)=6ms      p(95)=10.41ms 
     http_req_connecting............: avg=1.67ms  min=0s     med=0s     max=25.83ms p(90)=5.77ms   p(95)=10.16ms 
     http_req_duration..............: avg=52.97s  min=29.51s med=56.37s max=56.96s  p(90)=56.68s   p(95)=56.73s  
       { expected_response:true }...: avg=52.97s  min=29.51s med=56.37s max=56.96s  p(90)=56.68s   p(95)=56.73s  
   ✓ http_req_failed................: 0.00%   ✓ 0        ✗ 1617 
     http_req_receiving.............: avg=86.08µs min=33.2µs med=78.4µs max=7.27ms  p(90)=101.94µs p(95)=112.8µs 
     http_req_sending...............: avg=1.47ms  min=10.6µs med=23.8µs max=115.8ms p(90)=450.72µs p(95)=993.85µs
     http_req_tls_handshaking.......: avg=0s      min=0s     med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=52.97s  min=29.51s med=56.37s max=56.96s  p(90)=56.68s   p(95)=56.72s  
     http_reqs......................: 1617    7.043366/s
     iteration_duration.............: avg=52.97s  min=29.51s med=56.37s max=56.96s  p(90)=56.68s   p(95)=56.73s  
     iterations.....................: 1617    7.043366/s
     vus............................: 14      min=14     max=400
     vus_max........................: 400     min=400    max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/94d9fb8a-9d74-467c-22a0-57589fdcb400/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ab9ceaa5-d2b1-46bb-3e5d-ba093fe19a00/public" alt="HTTP Overview" />


  </details>