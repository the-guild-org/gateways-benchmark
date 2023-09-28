## Overview for: `federation-v1/constant-vus-subgraphs-delay-resources`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. It's being executed with a constant amount of VUs over a fixed amount of time. It measure things like memory usage, CPU usage, average RPS. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was running 500 VUs over 600s


### Comparison


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/140e3c69-ebf7-4447-4b4d-10b03cfaf800/public" alt="Comparison" />


| Gateway             | RPS ⬇️ |         Requests         |          Duration          | Notes                                                                          |
| :------------------ | :----: | :----------------------: | :------------------------: | :----------------------------------------------------------------------------- |
| wundergraph         |  190   |  114800 total, 0 failed  |  avg: 1826ms, p95: 3381ms  | ✅                                                                              |
| apollo-router       |  185   |  111713 total, 0 failed  |  avg: 1628ms, p95: 3597ms  | ✅                                                                              |
| mesh-supergraph-bun |  107   |  64950 total, 0 failed   |  avg: 4553ms, p95: 7922ms  | ✅                                                                              |
| mesh-bun            |  100   |  60663 total, 0 failed   |  avg: 4869ms, p95: 8413ms  | ✅                                                                              |
| mesh-supergraph     |  100   |  60507 total, 0 failed   |  avg: 4866ms, p95: 5850ms  | ✅                                                                              |
| mesh                |   97   |  58666 total, 0 failed   |  avg: 5019ms, p95: 6091ms  | ✅                                                                              |
| apollo-server       |   66   | 40093 total, 2630 failed | avg: 7480ms, p95: 59995ms  | ❌ 2630 failed requests, 2630 non-200 responses, 2630 unexpected GraphQL errors |
| mercurius           |   12   |   7614 total, 0 failed   | avg: 40062ms, p95: 43348ms | ✅                                                                              |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 344400     ✗ 0     
     data_received..................: 10 GB   17 MB/s
     data_sent......................: 136 MB  226 kB/s
     http_req_blocked...............: avg=413.38µs min=1.25µs   med=3.07µs  max=1.51s  p(90)=5.13µs  p(95)=6.34µs 
     http_req_connecting............: avg=155.36µs min=0s       med=0s      max=1.49s  p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=1.82s    min=583.87ms med=1.65s   max=9.25s  p(90)=2.84s   p(95)=3.38s  
       { expected_response:true }...: avg=1.82s    min=583.87ms med=1.65s   max=9.25s  p(90)=2.84s   p(95)=3.38s  
     http_req_failed................: 0.00%   ✓ 0          ✗ 114800
     http_req_receiving.............: avg=314.38ms min=22.71µs  med=79.17µs max=7.4s   p(90)=1.32s   p(95)=1.9s   
     http_req_sending...............: avg=28.22ms  min=7.18µs   med=13.7µs  max=5.9s   p(90)=37.84µs p(95)=20.45ms
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s     p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=1.48s    min=583.79ms med=1.42s   max=4.42s  p(90)=2.06s   p(95)=2.22s  
     http_reqs......................: 114800  190.752741/s
     iteration_duration.............: avg=2.6s     min=593.08ms med=2.26s   max=12.36s p(90)=4.5s    p(95)=5.26s  
     iterations.....................: 114800  190.752741/s
     vus............................: 301     min=301      max=500 
     vus_max........................: 500     min=500      max=500 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1ca895f6-6d20-4edb-2e69-751ccfd50e00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a96e79f7-8966-4bd0-c32f-8afac4783600/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/98a0758c-e8fb-4072-f24e-b49499fb9200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 335139     ✗ 0     
     data_received..................: 9.8 GB  16 MB/s
     data_sent......................: 133 MB  220 kB/s
     http_req_blocked...............: avg=1.36ms   min=1.36µs   med=3.14µs  max=5.93s  p(90)=4.83µs  p(95)=5.88µs 
     http_req_connecting............: avg=957.26µs min=0s       med=0s      max=5.93s  p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=1.62s    min=246.96ms med=1.41s   max=9.89s  p(90)=2.86s   p(95)=3.59s  
       { expected_response:true }...: avg=1.62s    min=246.96ms med=1.41s   max=9.89s  p(90)=2.86s   p(95)=3.59s  
     http_req_failed................: 0.00%   ✓ 0          ✗ 111713
     http_req_receiving.............: avg=415.03ms min=25.53µs  med=75.16µs max=9.19s  p(90)=1.66s   p(95)=2.42s  
     http_req_sending...............: avg=26.58ms  min=6.57µs   med=13.9µs  max=5.33s  p(90)=30.52µs p(95)=168.2µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s     p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=1.18s    min=246.7ms  med=1.13s   max=5s     p(90)=1.85s   p(95)=2.06s  
     http_reqs......................: 111713  185.682911/s
     iteration_duration.............: avg=2.66s    min=261.09ms med=2.28s   max=15.53s p(90)=4.94s   p(95)=5.94s  
     iterations.....................: 111713  185.682911/s
     vus............................: 309     min=309      max=500 
     vus_max........................: 500     min=500      max=500 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7fd28f38-4d62-49b1-4643-8dab95a6b800/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/75c91e41-2490-4837-cb17-e05a22ce1b00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2f3c7f03-4efb-46bb-288a-61129535a200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 194850     ✗ 0    
     data_received..................: 5.7 GB  9.4 MB/s
     data_sent......................: 77 MB   128 kB/s
     http_req_blocked...............: avg=257.58µs min=1.33µs  med=3.02µs  max=333.08ms p(90)=5.02µs  p(95)=6.17µs  
     http_req_connecting............: avg=215.27µs min=0s      med=0s      max=58.87ms  p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=4.55s    min=1.17s   med=4.17s   max=9.47s    p(90)=7.18s   p(95)=7.92s   
       { expected_response:true }...: avg=4.55s    min=1.17s   med=4.17s   max=9.47s    p(90)=7.18s   p(95)=7.92s   
     http_req_failed................: 0.00%   ✓ 0          ✗ 64950
     http_req_receiving.............: avg=27.7ms   min=26.72µs med=66.72µs max=2.89s    p(90)=4.68ms  p(95)=160.18ms
     http_req_sending...............: avg=2.11ms   min=7.01µs  med=13.64µs max=967.41ms p(90)=33.97µs p(95)=170.45µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=4.52s    min=1.17s   med=4.15s   max=9.47s    p(90)=7.16s   p(95)=7.88s   
     http_reqs......................: 64950   107.575126/s
     iteration_duration.............: avg=4.63s    min=1.23s   med=4.25s   max=9.69s    p(90)=7.27s   p(95)=7.99s   
     iterations.....................: 64950   107.575126/s
     vus............................: 171     min=171      max=500
     vus_max........................: 500     min=500      max=500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f004253d-de5a-4c19-fc74-cd50c33a8300/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/aa920977-5f10-473f-71b0-e5a7ccdc2d00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b80dd0b2-d95a-43b6-d760-cd9ab6ba6900/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 181989     ✗ 0    
     data_received..................: 5.3 GB  8.8 MB/s
     data_sent......................: 72 MB   119 kB/s
     http_req_blocked...............: avg=164.29µs min=1.3µs   med=2.91µs  max=318.17ms p(90)=4.58µs p(95)=5.56µs  
     http_req_connecting............: avg=128.07µs min=0s      med=0s      max=31.27ms  p(90)=0s     p(95)=0s      
     http_req_duration..............: avg=4.86s    min=2.09s   med=4.47s   max=10s      p(90)=7.57s  p(95)=8.41s   
       { expected_response:true }...: avg=4.86s    min=2.09s   med=4.47s   max=10s      p(90)=7.57s  p(95)=8.41s   
     http_req_failed................: 0.00%   ✓ 0          ✗ 60663
     http_req_receiving.............: avg=28.75ms  min=29.45µs med=62.61µs max=2.33s    p(90)=2.73ms p(95)=159.99ms
     http_req_sending...............: avg=2.23ms   min=7.31µs  med=13.34µs max=1.13s    p(90)=31.2µs p(95)=201.57µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s       p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=4.83s    min=2.09s   med=4.45s   max=9.84s    p(90)=7.55s  p(95)=8.37s   
     http_reqs......................: 60663   100.592222/s
     iteration_duration.............: avg=4.95s    min=2.1s    med=4.55s   max=10.15s   p(90)=7.67s  p(95)=8.48s   
     iterations.....................: 60663   100.592222/s
     vus............................: 45      min=45       max=500
     vus_max........................: 500     min=500      max=500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/bb9ab4e4-16bc-4a59-5204-d3c1b4024000/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e84e1f30-2fbf-4ea9-4354-0fe75cad3b00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6e0431ac-b944-48d5-8a9f-6782c56bdb00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 181521     ✗ 0    
     data_received..................: 5.3 GB  8.8 MB/s
     data_sent......................: 72 MB   119 kB/s
     http_req_blocked...............: avg=232.45µs min=1.91µs  med=4.04µs  max=360.43ms p(90)=6.18µs  p(95)=7.31µs  
     http_req_connecting............: avg=172.87µs min=0s      med=0s      max=49.92ms  p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=4.86s    min=2.65s   med=4.83s   max=8.4s     p(90)=5.63s   p(95)=5.85s   
       { expected_response:true }...: avg=4.86s    min=2.65s   med=4.83s   max=8.4s     p(90)=5.63s   p(95)=5.85s   
     http_req_failed................: 0.00%   ✓ 0          ✗ 60507
     http_req_receiving.............: avg=14.83ms  min=35.12µs med=75.53µs max=2.93s    p(90)=2.42ms  p(95)=35.73ms 
     http_req_sending...............: avg=1.6ms    min=9.06µs  med=18.61µs max=1.06s    p(90)=37.94µs p(95)=154.99µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=4.84s    min=2.65s   med=4.81s   max=7.73s    p(90)=5.6s    p(95)=5.82s   
     http_reqs......................: 60507   100.216987/s
     iteration_duration.............: avg=4.97s    min=2.67s   med=4.93s   max=8.47s    p(90)=5.77s   p(95)=6.01s   
     iterations.....................: 60507   100.216987/s
     vus............................: 184     min=184      max=500
     vus_max........................: 500     min=500      max=500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3db33f9f-2d21-44d7-ae60-848d874ec900/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/540afde0-f1c2-4e6d-adaf-75f592fa2c00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e2bd2ab9-457b-48fb-204f-4c0f72d61000/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 175998    ✗ 0    
     data_received..................: 5.1 GB  8.5 MB/s
     data_sent......................: 70 MB   115 kB/s
     http_req_blocked...............: avg=109.85µs min=1.84µs  med=4.31µs  max=269.3ms  p(90)=6.53µs  p(95)=7.6µs   
     http_req_connecting............: avg=77.19µs  min=0s      med=0s      max=28.53ms  p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=5.01s    min=2.31s   med=4.99s   max=8.95s    p(90)=5.85s   p(95)=6.09s   
       { expected_response:true }...: avg=5.01s    min=2.31s   med=4.99s   max=8.95s    p(90)=5.85s   p(95)=6.09s   
     http_req_failed................: 0.00%   ✓ 0         ✗ 58666
     http_req_receiving.............: avg=14.11ms  min=35.35µs med=80.54µs max=1.26s    p(90)=2.62ms  p(95)=32.91ms 
     http_req_sending...............: avg=2.16ms   min=8.29µs  med=21.46µs max=845.51ms p(90)=41.36µs p(95)=168.93µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=5s       min=2.31s   med=4.98s   max=8.95s    p(90)=5.83s   p(95)=6.05s   
     http_reqs......................: 58666   97.170523/s
     iteration_duration.............: avg=5.13s    min=2.57s   med=5.1s    max=9.01s    p(90)=5.99s   p(95)=6.24s   
     iterations.....................: 58666   97.170523/s
     vus............................: 200     min=200     max=500
     vus_max........................: 500     min=500     max=500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e104e092-81aa-4238-bf26-c8fda0a8e400/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/bd7bbe0d-89ea-42d5-8458-1efef5aedd00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f114cd0e-001d-42ad-3ae7-9a82d85d3c00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  93% — ✓ 37463 / ✗ 2630
     ✗ no graphql errors
      ↳  93% — ✓ 37463 / ✗ 2630
     ✓ valid response structure

     checks.........................: 95.52% ✓ 112389    ✗ 5260 
     data_received..................: 3.3 GB 5.5 MB/s
     data_sent......................: 48 MB  79 kB/s
     http_req_blocked...............: avg=809.71µs min=1.36µs   med=3.29µs  max=205.85ms p(90)=6.12µs   p(95)=351.04µs
     http_req_connecting............: avg=764.27µs min=0s       med=0s      max=130.28ms p(90)=0s       p(95)=264.88µs
     http_req_duration..............: avg=7.48s    min=791.64ms med=3.82s   max=1m0s     p(90)=4.91s    p(95)=59.99s  
       { expected_response:true }...: avg=3.79s    min=791.64ms med=3.76s   max=59.16s   p(90)=4.58s    p(95)=4.82s   
     http_req_failed................: 6.55%  ✓ 2630      ✗ 37463
     http_req_receiving.............: avg=523.77µs min=0s       med=89.17µs max=245.99ms p(90)=151.03µs p(95)=435.45µs
     http_req_sending...............: avg=275.16µs min=8.08µs   med=16.78µs max=145.17ms p(90)=34.22µs  p(95)=114.85µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=7.47s    min=791.51ms med=3.82s   max=1m0s     p(90)=4.91s    p(95)=59.99s  
     http_reqs......................: 40093  66.463047/s
     iteration_duration.............: avg=7.49s    min=799.14ms med=3.84s   max=1m0s     p(90)=4.93s    p(95)=1m0s    
     iterations.....................: 40093  66.463047/s
     vus............................: 69     min=69      max=500
     vus_max........................: 500    min=500     max=500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/48b2a139-9607-49b2-762c-1c388eeaf700/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/918486c6-2921-49dc-efa1-29ce36c26100/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7ca65509-f3ef-4f1d-467c-8dbaf3fb0600/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 22842     ✗ 0    
     data_received..................: 668 MB  1.1 MB/s
     data_sent......................: 9.2 MB  15 kB/s
     http_req_blocked...............: avg=2.39ms   min=2.28µs  med=6.37µs   max=85.84ms p(90)=10.94µs  p(95)=134.65µs
     http_req_connecting............: avg=2.34ms   min=0s      med=0s       max=80ms    p(90)=0s       p(95)=85.12µs 
     http_req_duration..............: avg=40.06s   min=12.28s  med=41.15s   max=46.13s  p(90)=42.28s   p(95)=43.34s  
       { expected_response:true }...: avg=40.06s   min=12.28s  med=41.15s   max=46.13s  p(90)=42.28s   p(95)=43.34s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 7614 
     http_req_receiving.............: avg=221.45µs min=73.45µs med=181.52µs max=16.47ms p(90)=254.44µs p(95)=292.55µs
     http_req_sending...............: avg=881.51µs min=12.91µs med=37µs     max=62.87ms p(90)=55.25µs  p(95)=166.19µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=40.06s   min=12.28s  med=41.15s   max=46.13s  p(90)=42.28s   p(95)=43.34s  
     http_reqs......................: 7614    12.085642/s
     iteration_duration.............: avg=40.07s   min=12.29s  med=41.16s   max=46.14s  p(90)=42.29s   p(95)=43.35s  
     iterations.....................: 7614    12.085642/s
     vus............................: 119     min=119     max=500
     vus_max........................: 500     min=500     max=500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/715db6f4-23b3-4334-7479-ef7fc009fe00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/bf8378df-7a79-415a-655f-88ef0bb5b500/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6c56c323-fbcc-44ba-b2dd-2d874690ab00/public" alt="HTTP Overview" />


  </details>