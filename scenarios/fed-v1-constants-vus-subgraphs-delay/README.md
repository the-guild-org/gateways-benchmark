## Overview for: `scenarios/fed-v1-constants-vus-subgraphs-delay`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. All subgraphs have an intentional delay on replying, and this creates additional pressure on the gateway's memory. We are running a heavy load of concurrent VUs to measure response time and other stats, during stress. It measure things like memory usage, CPU usage, response times.


This scenario was running 400 VUs over 200s


### Comparison


| Gateway              | RPS ⬇️ |        Requests        |          Duration          |
| :------------------- | :----: | :--------------------: | :------------------------: |
| mesh-bun             |  733   | 146994 total, 0 failed |   avg: 544ms, p95: 862ms   |
| wundergraph          |  234   | 47236 total, 0 failed  |  avg: 1697ms, p95: 2054ms  |
| apollo-router        |  109   | 22128 total, 0 failed  |  avg: 3650ms, p95: 5852ms  |
| mesh-supergraph      |   84   | 16988 total, 0 failed  |  avg: 4741ms, p95: 6354ms  |
| mesh                 |   63   | 12855 total, 0 failed  |  avg: 6252ms, p95: 7646ms  |
| apollo-server-node16 |   46   |  9450 total, 0 failed  | avg: 8538ms, p95: 13645ms  |
| apollo-server        |   45   | 9132 total, 53 failed  | avg: 8820ms, p95: 13402ms  |
| mercurius            |   6    |  1602 total, 0 failed  | avg: 53446ms, p95: 57023ms |



<details>
  <summary>Summary for: `mesh-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  0% — ✓ 0 / ✗ 146994
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 146994

     checks.........................: 33.33% ✓ 146994     ✗ 293988
     data_received..................: 140 MB 698 kB/s
     data_sent......................: 175 MB 871 kB/s
     http_req_blocked...............: avg=117.74µs min=900ns    med=1.8µs    max=79.83ms  p(90)=2.6µs    p(95)=3.2µs   
     http_req_connecting............: avg=111.73µs min=0s       med=0s       max=69.59ms  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=544.28ms min=172.61ms med=526.51ms max=1.81s    p(90)=800.76ms p(95)=862.06ms
       { expected_response:true }...: avg=544.28ms min=172.61ms med=526.51ms max=1.81s    p(90)=800.76ms p(95)=862.06ms
   ✓ http_req_failed................: 0.00%  ✓ 0          ✗ 146994
     http_req_receiving.............: avg=334.78µs min=10.9µs   med=22.9µs   max=205.1ms  p(90)=154.4µs  p(95)=308.2µs 
     http_req_sending...............: avg=122.16µs min=6.5µs    med=10.6µs   max=204.44ms p(90)=44.6µs   p(95)=132.4µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=543.82ms min=172.56ms med=526.09ms max=1.81s    p(90)=800.08ms p(95)=861.26ms
     http_reqs......................: 146994 733.651157/s
     iteration_duration.............: avg=544.82ms min=172.84ms med=526.86ms max=1.88s    p(90)=801.51ms p(95)=862.47ms
     iterations.....................: 146994 733.651157/s
     vus............................: 400    min=400      max=400 
     vus_max........................: 400    min=400      max=400 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3691663a-7c80-49e9-cb25-9aeb687b2a00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/59d3b749-9eb4-48e9-cf05-c1bf20499000/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 141708     ✗ 0    
     data_received..................: 235 MB  1.2 MB/s
     data_sent......................: 56 MB   279 kB/s
     http_req_blocked...............: avg=1ms      min=1.3µs    med=2.7µs  max=223.12ms p(90)=3.9µs   p(95)=4.59µs  
     http_req_connecting............: avg=975.79µs min=0s       med=0s     max=219.7ms  p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=1.69s    min=962.51ms med=1.68s  max=2.52s    p(90)=1.96s   p(95)=2.05s   
       { expected_response:true }...: avg=1.69s    min=962.51ms med=1.68s  max=2.52s    p(90)=1.96s   p(95)=2.05s   
   ✓ http_req_failed................: 0.00%   ✓ 0          ✗ 47236
     http_req_receiving.............: avg=919.36µs min=16.6µs   med=39.1µs max=381.66ms p(90)=290.7µs p(95)=516.43µs
     http_req_sending...............: avg=833.71µs min=8.3µs    med=14.6µs max=256.41ms p(90)=34.35µs p(95)=154.15µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=1.69s    min=943.19ms med=1.68s  max=2.47s    p(90)=1.96s   p(95)=2.05s   
     http_reqs......................: 47236   234.692715/s
     iteration_duration.............: avg=1.69s    min=963.32ms med=1.68s  max=2.57s    p(90)=1.96s   p(95)=2.06s   
     iterations.....................: 47236   234.692715/s
     vus............................: 187     min=187      max=400
     vus_max........................: 400     min=400      max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ce0f8b1a-6f1a-4038-4157-74e0ecce4600/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9c936667-39d2-4680-8b25-82e54b896600/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 22110 / ✗ 18
     ✗ valid response structure
      ↳  99% — ✓ 22110 / ✗ 18

     checks.........................: 99.94% ✓ 66348     ✗ 36   
     data_received..................: 110 MB 543 kB/s
     data_sent......................: 26 MB  130 kB/s
     http_req_blocked...............: avg=843.8µs  min=1µs   med=2.1µs  max=95.96ms p(90)=3.1µs   p(95)=3.96µs 
     http_req_connecting............: avg=832.98µs min=0s    med=0s     max=95.93ms p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=3.64s    min=1.34s med=3.44s  max=9.49s   p(90)=4.92s   p(95)=5.85s  
       { expected_response:true }...: avg=3.64s    min=1.34s med=3.44s  max=9.49s   p(90)=4.92s   p(95)=5.85s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 22128
     http_req_receiving.............: avg=103.27µs min=17µs  med=38.9µs max=63.1ms  p(90)=62.63µs p(95)=72.06µs
     http_req_sending...............: avg=241.44µs min=6µs   med=12.5µs max=53.79ms p(90)=26.6µs  p(95)=33.6µs 
     http_req_tls_handshaking.......: avg=0s       min=0s    med=0s     max=0s      p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=3.64s    min=1.34s med=3.44s  max=9.49s   p(90)=4.92s   p(95)=5.85s  
     http_reqs......................: 22128  109.11148/s
     iteration_duration.............: avg=3.65s    min=1.34s med=3.44s  max=9.49s   p(90)=4.92s   p(95)=5.85s  
     iterations.....................: 22128  109.11148/s
     vus............................: 301    min=301     max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/33e46f22-a4c9-43d6-6591-f30d89c39c00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e5c1cf13-60e7-4855-9964-a88badb22400/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 16960 / ✗ 28
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 16988

     checks.........................: 66.61% ✓ 33948     ✗ 17016
     data_received..................: 86 MB  426 kB/s
     data_sent......................: 20 MB  100 kB/s
     http_req_blocked...............: avg=2.81ms   min=1.4µs  med=2.5µs  max=213.15ms p(90)=3.7µs  p(95)=6.26µs 
     http_req_connecting............: avg=2.78ms   min=0s     med=0s     max=213.08ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=4.74s    min=3.53s  med=4.56s  max=10.56s   p(90)=5.16s  p(95)=6.35s  
       { expected_response:true }...: avg=4.74s    min=3.53s  med=4.56s  max=10.56s   p(90)=5.16s  p(95)=6.35s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 16988
     http_req_receiving.............: avg=75.49µs  min=23.9µs med=60.2µs max=20.97ms  p(90)=82.4µs p(95)=92.3µs 
     http_req_sending...............: avg=810.15µs min=9.3µs  med=14.9µs max=63.19ms  p(90)=30.8µs p(95)=36.56µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=4.74s    min=3.53s  med=4.56s  max=10.51s   p(90)=5.16s  p(95)=6.35s  
     http_reqs......................: 16988  84.141376/s
     iteration_duration.............: avg=4.74s    min=3.53s  med=4.56s  max=10.65s   p(90)=5.16s  p(95)=6.35s  
     iterations.....................: 16988  84.141376/s
     vus............................: 93     min=93      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/acf633bb-b53d-488e-6ee6-9a33fc6dc400/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/40fa47b6-9020-49e7-0791-5f2f62f2d100/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 12756 / ✗ 99
     ✗ valid response structure
      ↳  99% — ✓ 12756 / ✗ 99

     checks.........................: 99.48% ✓ 38367     ✗ 198  
     data_received..................: 65 MB  321 kB/s
     data_sent......................: 15 MB  75 kB/s
     http_req_blocked...............: avg=3.52ms   min=1.7µs  med=2.9µs   max=248.99ms p(90)=4.7µs   p(95)=20.29µs 
     http_req_connecting............: avg=3.45ms   min=0s     med=0s      max=226.31ms p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=6.25s    min=2.06s  med=6.09s   max=12.23s   p(90)=7.11s   p(95)=7.64s   
       { expected_response:true }...: avg=6.25s    min=2.06s  med=6.09s   max=12.23s   p(90)=7.11s   p(95)=7.64s   
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 12855
     http_req_receiving.............: avg=263.59µs min=28.5µs med=63.49µs max=92.23ms  p(90)=105.7µs p(95)=134.4µs 
     http_req_sending...............: avg=1.04ms   min=11.3µs med=16.89µs max=159.74ms p(90)=42.6µs  p(95)=111.03µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=6.25s    min=2.06s  med=6.09s   max=12.22s   p(90)=7.11s   p(95)=7.64s   
     http_reqs......................: 12855  63.559585/s
     iteration_duration.............: avg=6.25s    min=2.06s  med=6.09s   max=12.42s   p(90)=7.11s   p(95)=7.64s   
     iterations.....................: 12855  63.559585/s
     vus............................: 165    min=165     max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/668dba41-c2b2-41f9-5e92-5a8d22386900/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/41198508-2554-4096-eb11-5f8c5f441500/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server-node16`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  69% — ✓ 6601 / ✗ 2849
     ✗ valid response structure
      ↳  69% — ✓ 6601 / ✗ 2849

     checks.........................: 79.90% ✓ 22652     ✗ 5698 
     data_received..................: 44 MB  214 kB/s
     data_sent......................: 11 MB  55 kB/s
     http_req_blocked...............: avg=2.54ms   min=1.5µs  med=3.3µs   max=134.54ms p(90)=6.2µs   p(95)=20µs    
     http_req_connecting............: avg=2.5ms    min=0s     med=0s      max=134.46ms p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=8.53s    min=1.12s  med=8.8s    max=22.52s   p(90)=12.21s  p(95)=13.64s  
       { expected_response:true }...: avg=8.53s    min=1.12s  med=8.8s    max=22.52s   p(90)=12.21s  p(95)=13.64s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 9450 
     http_req_receiving.............: avg=103.44µs min=25.5µs med=78.95µs max=15.98ms  p(90)=108.3µs p(95)=121.7µs 
     http_req_sending...............: avg=398.43µs min=8.9µs  med=21.6µs  max=175.32ms p(90)=38.8µs  p(95)=372.98µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=8.53s    min=1.12s  med=8.8s    max=22.52s   p(90)=12.2s   p(95)=13.64s  
     http_reqs......................: 9450   46.464603/s
     iteration_duration.............: avg=8.54s    min=1.12s  med=8.8s    max=22.52s   p(90)=12.21s  p(95)=13.65s  
     iterations.....................: 9450   46.464603/s
     vus............................: 86     min=86      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/15faa95f-e7d1-44b3-50e6-c97a63b8af00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/880f982a-bebe-4a95-a943-8b680f274800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  99% — ✓ 9079 / ✗ 53
     ✗ no graphql errors
      ↳  72% — ✓ 6623 / ✗ 2509
     ✗ valid response structure
      ↳  72% — ✓ 6623 / ✗ 2456

     checks.........................: 81.64% ✓ 22325     ✗ 5018 
     data_received..................: 44 MB  216 kB/s
     data_sent......................: 11 MB  53 kB/s
     http_req_blocked...............: avg=2.31ms   min=1.2µs med=3µs     max=115.81ms p(90)=5.3µs    p(95)=163.45µs
     http_req_connecting............: avg=2.25ms   min=0s    med=0s      max=107.14ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=8.81s    min=1.16s med=7.83s   max=1m0s     p(90)=12.2s    p(95)=13.4s   
       { expected_response:true }...: avg=8.52s    min=1.16s med=7.8s    max=59.21s   p(90)=12.09s   p(95)=13.15s  
   ✓ http_req_failed................: 0.58%  ✓ 53        ✗ 9079 
     http_req_receiving.............: avg=81.14µs  min=0s    med=69.35µs max=9.1ms    p(90)=101.29µs p(95)=118.29µs
     http_req_sending...............: avg=675.99µs min=7.9µs med=17.9µs  max=61.6ms   p(90)=38.49µs  p(95)=263.49µs
     http_req_tls_handshaking.......: avg=0s       min=0s    med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=8.81s    min=1.16s med=7.83s   max=1m0s     p(90)=12.19s   p(95)=13.4s   
     http_reqs......................: 9132   45.025456/s
     iteration_duration.............: avg=8.82s    min=1.16s med=7.83s   max=1m0s     p(90)=12.22s   p(95)=13.4s   
     iterations.....................: 9132   45.025456/s
     vus............................: 18     min=18      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/642aeeab-b42d-4096-4b39-fe0ca192b200/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f50542d5-ea92-4b0b-9f93-bbfb3f1a5500/public" alt="HTTP Overview" />


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
     http_req_blocked...............: avg=13.13ms  min=2µs    med=3.9µs  max=98.7ms  p(90)=62.07ms p(95)=71.22ms 
     http_req_connecting............: avg=12.97ms  min=0s     med=0s     max=95.08ms p(90)=61.82ms p(95)=70.76ms 
     http_req_duration..............: avg=53.44s   min=28.88s med=56.65s max=57.24s  p(90)=56.97s  p(95)=57.02s  
       { expected_response:true }...: avg=53.44s   min=28.88s med=56.65s max=57.24s  p(90)=56.97s  p(95)=57.02s  
   ✓ http_req_failed................: 0.00%   ✓ 0        ✗ 1602 
     http_req_receiving.............: avg=103.95µs min=29.1µs med=90.2µs max=4.72ms  p(90)=129.9µs p(95)=152.37µs
     http_req_sending...............: avg=2.34ms   min=12.3µs med=27µs   max=34.53ms p(90)=3.91ms  p(95)=12.81ms 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=53.44s   min=28.88s med=56.65s max=57.23s  p(90)=56.97s  p(95)=57.02s  
     http_reqs......................: 1602    6.999701/s
     iteration_duration.............: avg=53.45s   min=28.88s med=56.66s max=57.31s  p(90)=56.97s  p(95)=57.02s  
     iterations.....................: 1602    6.999701/s
     vus............................: 2       min=2      max=400
     vus_max........................: 400     min=400    max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ce8db0a7-14e9-46e2-0da5-8147e9b59e00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a2f4a9c5-78b6-4216-bbc7-5492ec4fb900/public" alt="HTTP Overview" />


  </details>