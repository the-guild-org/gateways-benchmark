## Overview for: `scenarios/fed-v1-constant-vus-over-time`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. It's being executed with a constant amount of VUs over a fixed amount of time. It measure things like memory usage, CPU usage, average RPS. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was running 400 VUs over 200s


### Comparison


| Gateway                             | RPS ⬇️ |        Requests         |         Duration          |
| :---------------------------------- | :----: | :---------------------: | :-----------------------: |
| wundergraph                         |  514   | 103253 total, 0 failed  |  avg: 771ms, p95: 1101ms  |
| mesh-supergraph                     |  121   |  24608 total, 0 failed  | avg: 3272ms, p95: 3950ms  |
| stitching-federation-with-yoga-bun  |  109   |  22300 total, 0 failed  | avg: 3629ms, p95: 4509ms  |
| mesh                                |  106   |  21585 total, 0 failed  | avg: 3725ms, p95: 4568ms  |
| apollo-router                       |   96   |  19619 total, 0 failed  | avg: 4095ms, p95: 6117ms  |
| stitching-federation-with-yoga-deno |   85   |  17336 total, 0 failed  | avg: 4643ms, p95: 5514ms  |
| stitching-federation-with-yoga      |   79   | 17148 total, 555 failed | avg: 4749ms, p95: 4678ms  |
| apollo-gateway-with-yoga-uws        |   70   |  14437 total, 0 failed  | avg: 5604ms, p95: 13593ms |
| mercurius                           |   65   |  13169 total, 0 failed  | avg: 6099ms, p95: 7312ms  |
| stitching-federation-with-yoga-uws  |   56   |  11557 total, 0 failed  | avg: 6987ms, p95: 11952ms |
| apollo-server-node16                |   46   |  9558 total, 0 failed   | avg: 8434ms, p95: 20675ms |
| apollo-gateway-with-yoga            |   43   |  9039 total, 24 failed  | avg: 9041ms, p95: 19491ms |
| apollo-server                       |   43   | 9502 total, 681 failed  | avg: 8792ms, p95: 59983ms |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 309759     ✗ 0     
     data_received..................: 514 MB  2.6 MB/s
     data_sent......................: 123 MB  611 kB/s
     http_req_blocked...............: avg=273µs    min=1.3µs    med=2.7µs    max=172.1ms  p(90)=4.1µs    p(95)=6.7µs  
     http_req_connecting............: avg=256.94µs min=0s       med=0s       max=127.39ms p(90)=0s       p(95)=0s     
     http_req_duration..............: avg=771.15ms min=194.91ms med=747.01ms max=2.21s    p(90)=1s       p(95)=1.1s   
       { expected_response:true }...: avg=771.15ms min=194.91ms med=747.01ms max=2.21s    p(90)=1s       p(95)=1.1s   
   ✓ http_req_failed................: 0.00%   ✓ 0          ✗ 103253
     http_req_receiving.............: avg=5.96ms   min=18.8µs   med=49.7µs   max=589.46ms p(90)=307.2µs  p(95)=9.61ms 
     http_req_sending...............: avg=1.2ms    min=9.29µs   med=16.1µs   max=735.62ms p(90)=49µs     p(95)=152.3µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s       p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=763.99ms min=194.84ms med=743.22ms max=2.21s    p(90)=991.91ms p(95)=1.07s  
     http_reqs......................: 103253  514.753058/s
     iteration_duration.............: avg=775.98ms min=195.56ms med=751.51ms max=2.22s    p(90)=1.01s    p(95)=1.1s   
     iterations.....................: 103253  514.753058/s
     vus............................: 400     min=400      max=400 
     vus_max........................: 400     min=400      max=400 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6d4f988c-5798-4884-4df8-09385aaed900/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a189d4e5-c30c-4b93-f507-bbdbbe742c00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 24590 / ✗ 18
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 24608

     checks.........................: 66.64% ✓ 49198      ✗ 24626
     data_received..................: 124 MB 613 kB/s
     data_sent......................: 29 MB  145 kB/s
     http_req_blocked...............: avg=1.53ms   min=1µs    med=1.9µs  max=203.84ms p(90)=2.7µs  p(95)=3.2µs 
     http_req_connecting............: avg=1.51ms   min=0s     med=0s     max=150.31ms p(90)=0s     p(95)=0s    
     http_req_duration..............: avg=3.27s    min=2s     med=3.18s  max=7.79s    p(90)=3.66s  p(95)=3.94s 
       { expected_response:true }...: avg=3.27s    min=2s     med=3.18s  max=7.79s    p(90)=3.66s  p(95)=3.94s 
   ✓ http_req_failed................: 0.00%  ✓ 0          ✗ 24608
     http_req_receiving.............: avg=52.07µs  min=16.2µs med=39.3µs max=23.09ms  p(90)=60.6µs p(95)=67.5µs
     http_req_sending...............: avg=441.56µs min=6.4µs  med=11.8µs max=109.57ms p(90)=18.8µs p(95)=26.6µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s     p(95)=0s    
     http_req_waiting...............: avg=3.27s    min=2s     med=3.18s  max=7.78s    p(90)=3.66s  p(95)=3.94s 
     http_reqs......................: 24608  121.853655/s
     iteration_duration.............: avg=3.27s    min=2.01s  med=3.18s  max=7.9s     p(90)=3.66s  p(95)=3.94s 
     iterations.....................: 24608  121.853655/s
     vus............................: 77     min=77       max=400
     vus_max........................: 400    min=400      max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/df92778c-ed1b-450d-c84f-8efee3974700/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5e7bad48-916b-4af9-9f12-c42783516800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 66900      ✗ 0    
     data_received..................: 111 MB  547 kB/s
     data_sent......................: 27 MB   130 kB/s
     http_req_blocked...............: avg=2.75ms   min=1.2µs    med=2.29µs max=391.52ms p(90)=3.6µs  p(95)=9.5µs   
     http_req_connecting............: avg=2.38ms   min=0s       med=0s     max=238.05ms p(90)=0s     p(95)=0s      
     http_req_duration..............: avg=3.62s    min=494.81ms med=3.5s   max=9.46s    p(90)=3.95s  p(95)=4.5s    
       { expected_response:true }...: avg=3.62s    min=494.81ms med=3.5s   max=9.46s    p(90)=3.95s  p(95)=4.5s    
   ✓ http_req_failed................: 0.00%   ✓ 0          ✗ 22300
     http_req_receiving.............: avg=654.26µs min=18.8µs   med=42.4µs max=122.78ms p(90)=71.7µs p(95)=173.85µs
     http_req_sending...............: avg=1.05ms   min=7.5µs    med=13.4µs max=210.01ms p(90)=31.4µs p(95)=122.6µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=3.62s    min=494.7ms  med=3.5s   max=9.46s    p(90)=3.95s  p(95)=4.5s    
     http_reqs......................: 22300   109.830873/s
     iteration_duration.............: avg=3.63s    min=495.69ms med=3.5s   max=9.46s    p(90)=3.95s  p(95)=4.5s    
     iterations.....................: 22300   109.830873/s
     vus............................: 167     min=167      max=400
     vus_max........................: 400     min=400      max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2726523a-4891-4700-ef22-ca0a7235ee00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d92699ee-6199-4254-18c4-a4e040d7d800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 21556 / ✗ 29
     ✗ valid response structure
      ↳  99% — ✓ 21556 / ✗ 29

     checks.........................: 99.91% ✓ 64697      ✗ 58   
     data_received..................: 108 MB 535 kB/s
     data_sent......................: 26 MB  127 kB/s
     http_req_blocked...............: avg=578.28µs min=1µs    med=2.2µs  max=68.02ms p(90)=3.3µs  p(95)=4.1µs 
     http_req_connecting............: avg=565.98µs min=0s     med=0s     max=67.98ms p(90)=0s     p(95)=0s    
     http_req_duration..............: avg=3.72s    min=1.44s  med=3.64s  max=8.5s    p(90)=4.16s  p(95)=4.56s 
       { expected_response:true }...: avg=3.72s    min=1.44s  med=3.64s  max=8.5s    p(90)=4.16s  p(95)=4.56s 
   ✓ http_req_failed................: 0.00%  ✓ 0          ✗ 21585
     http_req_receiving.............: avg=70.42µs  min=17.1µs med=46.9µs max=29.01ms p(90)=69.9µs p(95)=79.1µs
     http_req_sending...............: avg=86.53µs  min=6µs    med=12.8µs max=39.2ms  p(90)=25.2µs p(95)=30.8µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s     p(95)=0s    
     http_req_waiting...............: avg=3.72s    min=1.44s  med=3.64s  max=8.5s    p(90)=4.16s  p(95)=4.56s 
     http_reqs......................: 21585  106.838801/s
     iteration_duration.............: avg=3.72s    min=1.44s  med=3.64s  max=8.54s   p(90)=4.16s  p(95)=4.56s 
     iterations.....................: 21585  106.838801/s
     vus............................: 86     min=86       max=400
     vus_max........................: 400    min=400      max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/cf4c2e68-df78-4a9b-b8a7-4c5538963600/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f032e6d3-84c3-411c-ffe4-952b77ad7d00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 19592 / ✗ 27
     ✗ valid response structure
      ↳  99% — ✓ 19592 / ✗ 27

     checks.........................: 99.90% ✓ 58803     ✗ 54   
     data_received..................: 98 MB  483 kB/s
     data_sent......................: 23 MB  115 kB/s
     http_req_blocked...............: avg=2.82ms   min=1.3µs  med=2.6µs  max=305.16ms p(90)=4.1µs  p(95)=8.4µs  
     http_req_connecting............: avg=2.79ms   min=0s     med=0s     max=305.13ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=4.09s    min=1.55s  med=3.9s   max=9.96s    p(90)=5.21s  p(95)=6.11s  
       { expected_response:true }...: avg=4.09s    min=1.55s  med=3.9s   max=9.96s    p(90)=5.21s  p(95)=6.11s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 19619
     http_req_receiving.............: avg=120.93µs min=20.9µs med=50.8µs max=49.97ms  p(90)=80.7µs p(95)=93µs   
     http_req_sending...............: avg=1.5ms    min=7.7µs  med=14.9µs max=259.85ms p(90)=31.8µs p(95)=100.8µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=4.09s    min=1.55s  med=3.9s   max=9.78s    p(90)=5.21s  p(95)=6.11s  
     http_reqs......................: 19619  96.963793/s
     iteration_duration.............: avg=4.09s    min=1.55s  med=3.91s  max=10.04s   p(90)=5.22s  p(95)=6.12s  
     iterations.....................: 19619  96.963793/s
     vus............................: 76     min=76      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d6d2461f-40cb-43d8-caed-5b303c927100/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8d876f17-5423-457e-15f3-1e86b7c66300/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-deno`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 17294 / ✗ 42
     ✗ valid response structure
      ↳  99% — ✓ 17294 / ✗ 42

     checks.........................: 99.83% ✓ 51924     ✗ 84   
     data_received..................: 88 MB  433 kB/s
     data_sent......................: 21 MB  102 kB/s
     http_req_blocked...............: avg=1.59ms  min=1µs    med=2.4µs   max=136.29ms p(90)=4.4µs  p(95)=7.2µs   
     http_req_connecting............: avg=1.56ms  min=0s     med=0s      max=133.66ms p(90)=0s     p(95)=0s      
     http_req_duration..............: avg=4.64s   min=2.28s  med=4.59s   max=8.78s    p(90)=5.03s  p(95)=5.51s   
       { expected_response:true }...: avg=4.64s   min=2.28s  med=4.59s   max=8.78s    p(90)=5.03s  p(95)=5.51s   
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 17336
     http_req_receiving.............: avg=145.9µs min=16.8µs med=35.29µs max=91.34ms  p(90)=91.2µs p(95)=126.22µs
     http_req_sending...............: avg=458.1µs min=6.5µs  med=13.1µs  max=69.27ms  p(90)=34.8µs p(95)=155.22µs
     http_req_tls_handshaking.......: avg=0s      min=0s     med=0s      max=0s       p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=4.64s   min=2.28s  med=4.59s   max=8.78s    p(90)=5.03s  p(95)=5.51s   
     http_reqs......................: 17336  85.706198/s
     iteration_duration.............: avg=4.64s   min=2.28s  med=4.59s   max=8.78s    p(90)=5.03s  p(95)=5.52s   
     iterations.....................: 17336  85.706198/s
     vus............................: 168    min=168     max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7f9c9184-58b3-40b3-1606-92322385f500/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ed47be4d-2ec7-4d4a-ea30-a64424729400/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  96% — ✓ 16593 / ✗ 555
     ✗ no graphql errors
      ↳  96% — ✓ 16571 / ✗ 577
     ✗ valid response structure
      ↳  99% — ✓ 16571 / ✗ 22

     checks.........................: 97.73% ✓ 49735     ✗ 1154 
     data_received..................: 84 MB  390 kB/s
     data_sent......................: 20 MB  95 kB/s
     http_req_blocked...............: avg=1.85ms   min=1.3µs    med=2.4µs  max=116.57ms p(90)=4.8µs  p(95)=519.05µs
     http_req_connecting............: avg=1.81ms   min=0s       med=0s     max=116.53ms p(90)=0s     p(95)=316.61µs
     http_req_duration..............: avg=4.74s    min=688.37ms med=2.53s  max=1m0s     p(90)=2.76s  p(95)=4.67s   
       { expected_response:true }...: avg=2.9s     min=688.37ms med=2.53s  max=59.45s   p(90)=2.7s   p(95)=2.81s   
   ✓ http_req_failed................: 3.23%  ✓ 555       ✗ 16593
     http_req_receiving.............: avg=67.57µs  min=0s       med=54.5µs max=51.49ms  p(90)=78.5µs p(95)=86.6µs  
     http_req_sending...............: avg=179.92µs min=8.8µs    med=14.3µs max=81.8ms   p(90)=31.1µs p(95)=107.13µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=4.74s    min=674.25ms med=2.53s  max=1m0s     p(90)=2.76s  p(95)=4.67s   
     http_reqs......................: 17148  79.901664/s
     iteration_duration.............: avg=4.75s    min=690.66ms med=2.53s  max=1m0s     p(90)=2.76s  p(95)=4.67s   
     iterations.....................: 17148  79.901664/s
     vus............................: 19     min=19      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d4bbf1d3-0ebd-4594-c34b-cdb972443c00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4c7579c9-3258-4d26-ffee-3abe89e06500/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga-uws`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  82% — ✓ 11920 / ✗ 2517
     ✗ valid response structure
      ↳  82% — ✓ 11920 / ✗ 2517

     checks.........................: 88.37% ✓ 38277     ✗ 5034 
     data_received..................: 68 MB  332 kB/s
     data_sent......................: 17 MB  84 kB/s
     http_req_blocked...............: avg=1.36ms   min=899ns    med=2µs    max=138.92ms p(90)=3.1µs   p(95)=6.8µs  
     http_req_connecting............: avg=1.34ms   min=0s       med=0s     max=138.77ms p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=5.6s     min=590.22ms med=4.91s  max=20.65s   p(90)=9.63s   p(95)=13.59s 
       { expected_response:true }...: avg=5.6s     min=590.22ms med=4.91s  max=20.65s   p(90)=9.63s   p(95)=13.59s 
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 14437
     http_req_receiving.............: avg=56.16µs  min=14.7µs   med=36µs   max=47.14ms  p(90)=64.89µs p(95)=77.2µs 
     http_req_sending...............: avg=284.24µs min=6.5µs    med=12.1µs max=33.99ms  p(90)=26.8µs  p(95)=98.29µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=5.6s     min=590.16ms med=4.91s  max=20.65s   p(90)=9.63s   p(95)=13.56s 
     http_reqs......................: 14437  70.976196/s
     iteration_duration.............: avg=5.6s     min=591ms    med=4.91s  max=20.65s   p(90)=9.63s   p(95)=13.65s 
     iterations.....................: 14437  70.976196/s
     vus............................: 217    min=217     max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/bc5a6c56-2440-4eec-9c38-79f1bfda9e00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e2bd6fc4-38f2-4fff-7b62-bf9ae47b1a00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 39507     ✗ 0    
     data_received..................: 66 MB   328 kB/s
     data_sent......................: 16 MB   78 kB/s
     http_req_blocked...............: avg=1.47ms   min=1.3µs  med=3.3µs  max=97.09ms p(90)=4.8µs  p(95)=18.8µs  
     http_req_connecting............: avg=1.45ms   min=0s     med=0s     max=97.05ms p(90)=0s     p(95)=0s      
     http_req_duration..............: avg=6.09s    min=1.82s  med=6s     max=12.04s  p(90)=6.53s  p(95)=7.31s   
       { expected_response:true }...: avg=6.09s    min=1.82s  med=6s     max=12.04s  p(90)=6.53s  p(95)=7.31s   
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 13169
     http_req_receiving.............: avg=80.84µs  min=21.8µs med=73.7µs max=18.27ms p(90)=97.2µs p(95)=107.76µs
     http_req_sending...............: avg=436.09µs min=7.6µs  med=19.8µs max=42.38ms p(90)=37.8µs p(95)=105.26µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=6.09s    min=1.82s  med=6s     max=12.03s  p(90)=6.53s  p(95)=7.31s   
     http_reqs......................: 13169   65.263966/s
     iteration_duration.............: avg=6.1s     min=1.82s  med=6s     max=12.08s  p(90)=6.54s  p(95)=7.31s   
     iterations.....................: 13169   65.263966/s
     vus............................: 9       min=9       max=400
     vus_max........................: 400     min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1bd6dac9-dd8e-4c99-e226-8876ef283c00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/fdf7dcf5-06ec-4ba6-c3d0-5560bf84bb00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-uws`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  82% — ✓ 9559 / ✗ 1998
     ✗ valid response structure
      ↳  82% — ✓ 9559 / ✗ 1998

     checks.........................: 88.47% ✓ 30675     ✗ 3996 
     data_received..................: 76 MB  373 kB/s
     data_sent......................: 14 MB  67 kB/s
     http_req_blocked...............: avg=2.11ms   min=1.5µs  med=2.9µs  max=136.06ms p(90)=5.1µs   p(95)=19.3µs  
     http_req_connecting............: avg=2.08ms   min=0s     med=0s     max=131.16ms p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=6.98s    min=2.03s  med=6.2s   max=18.98s   p(90)=10.61s  p(95)=11.95s  
       { expected_response:true }...: avg=6.98s    min=2.03s  med=6.2s   max=18.98s   p(90)=10.61s  p(95)=11.95s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 11557
     http_req_receiving.............: avg=86.67µs  min=20.6µs med=61µs   max=14.92ms  p(90)=99.64µs p(95)=146.83µs
     http_req_sending...............: avg=537.07µs min=8.6µs  med=16.2µs max=76.34ms  p(90)=36.9µs  p(95)=121.04µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=6.98s    min=2.03s  med=6.2s   max=18.98s   p(90)=10.61s  p(95)=11.95s  
     http_reqs......................: 11557  56.789179/s
     iteration_duration.............: avg=6.99s    min=2.03s  med=6.2s   max=19.02s   p(90)=10.62s  p(95)=11.95s  
     iterations.....................: 11557  56.789179/s
     vus............................: 166    min=166     max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4ae7bc9c-d762-4518-9dec-98fe6ad7f000/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9647a3a0-4355-4fff-9971-5067e0f26100/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server-node16`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  65% — ✓ 6280 / ✗ 3278
     ✗ valid response structure
      ↳  65% — ✓ 6280 / ✗ 3278

     checks.........................: 77.13% ✓ 22118     ✗ 6556 
     data_received..................: 44 MB  217 kB/s
     data_sent......................: 11 MB  56 kB/s
     http_req_blocked...............: avg=2.69ms  min=1.3µs    med=2.8µs  max=192.48ms p(90)=4.7µs   p(95)=20.71µs 
     http_req_connecting............: avg=2.64ms  min=0s       med=0s     max=192.45ms p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=8.43s   min=147.77ms med=7.66s  max=30.09s   p(90)=17.21s  p(95)=20.67s  
       { expected_response:true }...: avg=8.43s   min=147.77ms med=7.66s  max=30.09s   p(90)=17.21s  p(95)=20.67s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 9558 
     http_req_receiving.............: avg=80.14µs min=23.4µs   med=62.4µs max=15.49ms  p(90)=94.83µs p(95)=112.1µs 
     http_req_sending...............: avg=1.15ms  min=7.9µs    med=16.1µs max=111.23ms p(90)=36.1µs  p(95)=215.72µs
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s     max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=8.43s   min=147.67ms med=7.66s  max=30.09s   p(90)=17.21s  p(95)=20.67s  
     http_reqs......................: 9558   46.923842/s
     iteration_duration.............: avg=8.43s   min=148.65ms med=7.66s  max=30.09s   p(90)=17.21s  p(95)=20.67s  
     iterations.....................: 9558   46.923842/s
     vus............................: 1      min=1       max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/198d2d49-59b5-47a5-6537-57ef6962c900/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9df42d26-4d09-4dd0-96ea-374af2ebf000/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  99% — ✓ 9015 / ✗ 24
     ✗ no graphql errors
      ↳  70% — ✓ 6360 / ✗ 2679
     ✗ valid response structure
      ↳  70% — ✓ 6360 / ✗ 2655

     checks.........................: 80.22% ✓ 21735     ✗ 5358 
     data_received..................: 40 MB  196 kB/s
     data_sent......................: 11 MB  52 kB/s
     http_req_blocked...............: avg=2.86ms   min=1.5µs    med=2.8µs  max=183.63ms p(90)=5.9µs   p(95)=126.3µs 
     http_req_connecting............: avg=2.82ms   min=0s       med=0s     max=183.6ms  p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=9.04s    min=447.19ms med=8.16s  max=1m0s     p(90)=17.62s  p(95)=19.49s  
       { expected_response:true }...: avg=8.9s     min=447.19ms med=8.12s  max=54.76s   p(90)=17.55s  p(95)=19.43s  
   ✓ http_req_failed................: 0.26%  ✓ 24        ✗ 9015 
     http_req_receiving.............: avg=106.83µs min=0s       med=66.1µs max=47.99ms  p(90)=118.1µs p(95)=157.14µs
     http_req_sending...............: avg=320.01µs min=8.9µs    med=17.2µs max=35.35ms  p(90)=58.51µs p(95)=510.65µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=9.04s    min=447.1ms  med=8.16s  max=1m0s     p(90)=17.62s  p(95)=19.49s  
     http_reqs......................: 9039   43.786337/s
     iteration_duration.............: avg=9.04s    min=447.56ms med=8.16s  max=1m0s     p(90)=17.62s  p(95)=19.49s  
     iterations.....................: 9039   43.786337/s
     vus............................: 89     min=89      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b8899995-c6d7-4267-a0fb-ed925833f500/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4343f42e-9e8e-418f-acf9-8c550dbb5a00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  92% — ✓ 8821 / ✗ 681
     ✗ no graphql errors
      ↳  90% — ✓ 8638 / ✗ 864
     ✗ valid response structure
      ↳  97% — ✓ 8638 / ✗ 183

     checks.........................: 93.78% ✓ 26097     ✗ 1728 
     data_received..................: 45 MB  208 kB/s
     data_sent......................: 11 MB  52 kB/s
     http_req_blocked...............: avg=2.41ms   min=1.2µs    med=2.9µs  max=107.12ms p(90)=989.84µs p(95)=21.33ms 
     http_req_connecting............: avg=2.3ms    min=0s       med=0s     max=107.07ms p(90)=733.6µs  p(95)=20.28ms 
     http_req_duration..............: avg=8.79s    min=763.32ms med=3.89s  max=1m0s     p(90)=30.81s   p(95)=59.98s  
       { expected_response:true }...: avg=4.83s    min=763.32ms med=3.86s  max=59.61s   p(90)=4.55s    p(95)=5.29s   
   ✓ http_req_failed................: 7.16%  ✓ 681       ✗ 8821 
     http_req_receiving.............: avg=87.39µs  min=0s       med=72.9µs max=37.94ms  p(90)=120.3µs  p(95)=144.09µs
     http_req_sending...............: avg=285.99µs min=9.9µs    med=20µs   max=85.96ms  p(90)=134.66µs p(95)=1.07ms  
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=8.79s    min=763.28ms med=3.89s  max=1m0s     p(90)=30.81s   p(95)=59.98s  
     http_reqs......................: 9502   43.703139/s
     iteration_duration.............: avg=8.8s     min=763.52ms med=3.9s   max=1m0s     p(90)=30.86s   p(95)=1m0s    
     iterations.....................: 9502   43.703139/s
     vus............................: 24     min=24      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c920db5a-feeb-492e-01ee-5000e3b53300/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/77c021ad-83a8-4e4a-60ff-eedecb207f00/public" alt="HTTP Overview" />


  </details>