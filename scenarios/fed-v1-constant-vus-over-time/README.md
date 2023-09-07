## Overview for: `scenarios/fed-v1-constant-vus-over-time`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. It's being executed with a constant amount of VUs over a fixed amount of time. It measure things like memory usage, CPU usage, average RPS. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was running 350 VUs over 400s


### Comparison


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7fce6ac6-7a89-42b1-6049-653c3d984d00/public" alt="Comparison" />


| Gateway                             | RPS ⬇️ |        Requests         |          Duration          |
| :---------------------------------- | :----: | :---------------------: | :------------------------: |
| wundergraph                         |  1229  | 491753 total, 0 failed  |   avg: 235ms, p95: 462ms   |
| mesh-bun                            |  319   | 127990 total, 0 failed  |  avg: 1091ms, p95: 1657ms  |
| mesh                                |  259   | 103950 total, 0 failed  |  avg: 1346ms, p95: 1688ms  |
| apollo-gateway-with-yoga-bun        |   49   |  19977 total, 0 failed  |  avg: 6849ms, p95: 9953ms  |
| apollo-gateway-with-yoga-uws        |   40   |  16544 total, 0 failed  | avg: 8481ms, p95: 13692ms  |
| stitching-federation-with-yoga-deno |   36   |  14913 total, 0 failed  | avg: 9453ms, p95: 11911ms  |
| apollo-router                       |   35   |  14308 total, 0 failed  | avg: 9864ms, p95: 13765ms  |
| apollo-gateway-with-yoga            |   31   |  12821 total, 0 failed  | avg: 10968ms, p95: 20157ms |
| stitching-federation-with-yoga-bun  |   31   |  13080 total, 0 failed  | avg: 10805ms, p95: 14409ms |
| apollo-server                       |   28   |  11552 total, 0 failed  | avg: 12269ms, p95: 19321ms |
| stitching-federation-with-yoga      |   28   |  11686 total, 0 failed  | avg: 12105ms, p95: 14634ms |
| mesh-supergraph                     |   26   |  10636 total, 0 failed  | avg: 13338ms, p95: 15603ms |
| stitching-federation-with-yoga-uws  |   23   |  9877 total, 0 failed   | avg: 14389ms, p95: 17046ms |
| apollo-server-node16                |   21   |  8835 total, 2 failed   | avg: 16054ms, p95: 29829ms |
| mercurius                           |   6    | 2912 total, 1645 failed | avg: 47861ms, p95: 60001ms |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 491753

     checks.........................: 66.66% ✓ 983506      ✗ 491753
     data_received..................: 71 MB  178 kB/s
     data_sent......................: 584 MB 1.5 MB/s
     http_req_blocked...............: avg=69.38µs  min=900ns    med=2.1µs    max=695.49ms p(90)=3.3µs    p(95)=4.09µs  
     http_req_connecting............: avg=60.51µs  min=0s       med=0s       max=518.8ms  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=234.9ms  min=298.09µs med=220.03ms max=1.76s    p(90)=404.33ms p(95)=461.81ms
       { expected_response:true }...: avg=234.9ms  min=298.09µs med=220.03ms max=1.76s    p(90)=404.33ms p(95)=461.81ms
     http_req_failed................: 0.00%  ✓ 0           ✗ 491753
     http_req_receiving.............: avg=17.83ms  min=8.69µs   med=21.9µs   max=1.42s    p(90)=23.38ms  p(95)=123.12ms
     http_req_sending...............: avg=2.04ms   min=5.5µs    med=11.49µs  max=1.03s    p(90)=104.29µs p(95)=360.03µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=215.03ms min=262.69µs med=211.71ms max=761.75ms p(90)=356.6ms  p(95)=397.3ms 
     http_reqs......................: 491753 1229.060238/s
     iteration_duration.............: avg=284.27ms min=739.78µs med=257.24ms max=1.87s    p(90)=482.28ms p(95)=584.87ms
     iterations.....................: 491753 1229.060238/s
     vus............................: 348    min=348       max=350 
     vus_max........................: 350    min=350       max=350 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2f6cdb4e-bcdf-49ee-625c-859d49b8a200/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4fb20785-4d50-47a2-997e-ee12badf7b00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c17d9bc1-e4f5-4c97-475e-7eeeb845d300/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  0% — ✓ 0 / ✗ 127990
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 127990

     checks.........................: 33.33% ✓ 127990     ✗ 255980
     data_received..................: 122 MB 304 kB/s
     data_sent......................: 152 MB 379 kB/s
     http_req_blocked...............: avg=125.24µs min=1.2µs    med=2.29µs max=130.89ms p(90)=3.5µs   p(95)=5µs     
     http_req_connecting............: avg=116.76µs min=0s       med=0s     max=130.83ms p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=1.09s    min=317.94ms med=1.11s  max=2.72s    p(90)=1.53s   p(95)=1.65s   
       { expected_response:true }...: avg=1.09s    min=317.94ms med=1.11s  max=2.72s    p(90)=1.53s   p(95)=1.65s   
     http_req_failed................: 0.00%  ✓ 0          ✗ 127990
     http_req_receiving.............: avg=4.28ms   min=12.7µs   med=31.5µs max=667.78ms p(90)=427.7µs p(95)=11.85ms 
     http_req_sending...............: avg=1.83ms   min=9µs      med=14.1µs max=665.12ms p(90)=129.3µs p(95)=821.37µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=1.08s    min=317.86ms med=1.11s  max=2.72s    p(90)=1.52s   p(95)=1.63s   
     http_reqs......................: 127990 319.377156/s
     iteration_duration.............: avg=1.09s    min=318.72ms med=1.11s  max=2.76s    p(90)=1.54s   p(95)=1.66s   
     iterations.....................: 127990 319.377156/s
     vus............................: 99     min=99       max=350 
     vus_max........................: 350    min=350      max=350 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/30cab12d-f465-48d0-2474-2c7ada359500/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1356fdd5-5998-4a69-6dbc-1bcd76b5cb00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2d8448b3-32e5-4973-65b3-c5fb15037200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 103950

     checks.........................: 66.66% ✓ 207900     ✗ 103950
     data_received..................: 118 MB 293 kB/s
     data_sent......................: 123 MB 308 kB/s
     http_req_blocked...............: avg=327.87µs min=1.2µs    med=3µs    max=208.76ms p(90)=5.1µs    p(95)=6.3µs   
     http_req_connecting............: avg=294.66µs min=0s       med=0s     max=133.82ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=1.34s    min=469.29ms med=1.34s  max=3.43s    p(90)=1.6s     p(95)=1.68s   
       { expected_response:true }...: avg=1.34s    min=469.29ms med=1.34s  max=3.43s    p(90)=1.6s     p(95)=1.68s   
     http_req_failed................: 0.00%  ✓ 0          ✗ 103950
     http_req_receiving.............: avg=3.76ms   min=14µs     med=40.6µs max=469.29ms p(90)=454.37µs p(95)=9.04ms  
     http_req_sending...............: avg=958.54µs min=7.3µs    med=14.8µs max=469.38ms p(90)=114.4µs  p(95)=271.47µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=1.34s    min=469.23ms med=1.33s  max=3.42s    p(90)=1.59s    p(95)=1.68s   
     http_reqs......................: 103950 259.288233/s
     iteration_duration.............: avg=1.34s    min=469.99ms med=1.34s  max=3.63s    p(90)=1.6s     p(95)=1.69s   
     iterations.....................: 103950 259.288233/s
     vus............................: 79     min=79       max=350 
     vus_max........................: 350    min=350      max=350 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6ad605d5-72ea-4515-aad6-6a0026060c00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/44895527-fa70-444d-bd07-a2df4f5b6600/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/cc2186e4-23a9-4ddc-4e12-597f42ae4700/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 59931     ✗ 0    
     data_received..................: 1.8 GB  4.3 MB/s
     data_sent......................: 24 MB   59 kB/s
     http_req_blocked...............: avg=269.16µs min=1.3µs    med=3.3µs   max=430.15ms p(90)=4.8µs    p(95)=5.7µs   
     http_req_connecting............: avg=190.12µs min=0s       med=0s      max=21.8ms   p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=6.84s    min=979.06ms med=6.63s   max=12.64s   p(90)=9.54s    p(95)=9.95s   
       { expected_response:true }...: avg=6.84s    min=979.06ms med=6.63s   max=12.64s   p(90)=9.54s    p(95)=9.95s   
     http_req_failed................: 0.00%   ✓ 0         ✗ 19977
     http_req_receiving.............: avg=150.48ms min=38.6µs   med=84.59µs max=3.73s    p(90)=572.35ms p(95)=978.18ms
     http_req_sending...............: avg=12.09ms  min=6.5µs    med=16.89µs max=1.9s     p(90)=1.58ms   p(95)=22.89ms 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=6.68s    min=966.41ms med=6.36s   max=12.28s   p(90)=9.34s    p(95)=9.73s   
     http_reqs......................: 19977   49.291444/s
     iteration_duration.............: avg=7.06s    min=1s       med=6.89s   max=12.73s   p(90)=9.81s    p(95)=10.42s  
     iterations.....................: 19977   49.291444/s
     vus............................: 65      min=65      max=350
     vus_max........................: 350     min=350     max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6ecf60cc-6eaa-4fdc-0f69-ecd46789d600/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/872fcc57-8b1c-4bad-119f-c19d25884c00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1815fc13-aa8b-4398-3796-28f2e08a6400/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga-uws`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 49632     ✗ 0    
     data_received..................: 1.5 GB  3.6 MB/s
     data_sent......................: 20 MB   48 kB/s
     http_req_blocked...............: avg=554.12µs min=1.4µs med=3.4µs   max=54.15ms  p(90)=4.89µs   p(95)=5.7µs  
     http_req_connecting............: avg=533.36µs min=0s    med=0s      max=53.82ms  p(90)=0s       p(95)=0s     
     http_req_duration..............: avg=8.48s    min=1.49s med=7.79s   max=23.24s   p(90)=12.1s    p(95)=13.69s 
       { expected_response:true }...: avg=8.48s    min=1.49s med=7.79s   max=23.24s   p(90)=12.1s    p(95)=13.69s 
     http_req_failed................: 0.00%   ✓ 0         ✗ 16544
     http_req_receiving.............: avg=6.9ms    min=40µs  med=79.6µs  max=2.54s    p(90)=656.45µs p(95)=12.51ms
     http_req_sending...............: avg=2.56ms   min=7.1µs med=18.59µs max=574.01ms p(90)=115.74µs p(95)=10.74ms
     http_req_tls_handshaking.......: avg=0s       min=0s    med=0s      max=0s       p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=8.47s    min=1.49s med=7.79s   max=22.74s   p(90)=12.1s    p(95)=13.68s 
     http_reqs......................: 16544   40.805577/s
     iteration_duration.............: avg=8.53s    min=1.5s  med=7.84s   max=23.45s   p(90)=12.18s   p(95)=13.76s 
     iterations.....................: 16544   40.805577/s
     vus............................: 103     min=103     max=350
     vus_max........................: 350     min=350     max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/af39ff06-0b04-4cf5-d9e2-083bd437ea00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c3a3973d-664a-498c-95a7-7e5c0445d500/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f9dcb78c-9f81-4369-4a25-da37ae759f00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-deno`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 44739     ✗ 0    
     data_received..................: 1.3 GB  3.2 MB/s
     data_sent......................: 18 MB   44 kB/s
     http_req_blocked...............: avg=607.06µs min=1.2µs   med=3.1µs   max=63.91ms  p(90)=4.4µs    p(95)=5.5µs 
     http_req_connecting............: avg=588.67µs min=0s      med=0s      max=59.35ms  p(90)=0s       p(95)=0s    
     http_req_duration..............: avg=9.45s    min=3.27s   med=8.97s   max=14.78s   p(90)=11.63s   p(95)=11.91s
       { expected_response:true }...: avg=9.45s    min=3.27s   med=8.97s   max=14.78s   p(90)=11.63s   p(95)=11.91s
     http_req_failed................: 0.00%   ✓ 0         ✗ 14913
     http_req_receiving.............: avg=1.7ms    min=38.69µs med=72.09µs max=315.06ms p(90)=436.03µs p(95)=6.54ms
     http_req_sending...............: avg=1.39ms   min=7.2µs   med=17.3µs  max=199.07ms p(90)=107.9µs  p(95)=8.32ms
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s       p(90)=0s       p(95)=0s    
     http_req_waiting...............: avg=9.45s    min=3.27s   med=8.97s   max=14.76s   p(90)=11.63s   p(95)=11.9s 
     http_reqs......................: 14913   36.645283/s
     iteration_duration.............: avg=9.47s    min=3.3s    med=9s      max=14.79s   p(90)=11.66s   p(95)=11.93s
     iterations.....................: 14913   36.645283/s
     vus............................: 16      min=16      max=350
     vus_max........................: 350     min=350     max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/86185680-7f13-46ab-542a-52ae4a572900/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/38d5400e-2a4c-4b11-ebc4-636f8dd6bf00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/39f130ea-418a-4008-5ecc-65ca6a0e0f00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 42924     ✗ 0    
     data_received..................: 1.3 GB  3.1 MB/s
     data_sent......................: 17 MB   42 kB/s
     http_req_blocked...............: avg=882.62µs min=2µs    med=4µs     max=73.64ms  p(90)=6.8µs    p(95)=16.2µs  
     http_req_connecting............: avg=858.33µs min=0s     med=0s      max=55.8ms   p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=9.86s    min=1.94s  med=9.69s   max=19.33s   p(90)=12.83s   p(95)=13.76s  
       { expected_response:true }...: avg=9.86s    min=1.94s  med=9.69s   max=19.33s   p(90)=12.83s   p(95)=13.76s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 14308
     http_req_receiving.............: avg=729.26µs min=65.1µs med=126.1µs max=292ms    p(90)=364.96µs p(95)=560.53µs
     http_req_sending...............: avg=701.11µs min=11.3µs med=28.1µs  max=132.78ms p(90)=73.03µs  p(95)=2.72ms  
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=9.86s    min=1.94s  med=9.69s   max=19.33s   p(90)=12.83s   p(95)=13.76s  
     http_reqs......................: 14308   35.118836/s
     iteration_duration.............: avg=9.89s    min=1.95s  med=9.72s   max=19.35s   p(90)=12.85s   p(95)=13.78s  
     iterations.....................: 14308   35.118836/s
     vus............................: 59      min=59      max=350
     vus_max........................: 350     min=350     max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c17ba58a-1605-4d41-bc62-e5c83a9bbe00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e603a160-2d59-430f-4201-ccb37641fa00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a057522d-d297-4548-dafe-bc3385ec0d00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 38463     ✗ 0    
     data_received..................: 1.1 GB  2.8 MB/s
     data_sent......................: 15 MB   37 kB/s
     http_req_blocked...............: avg=1.34ms min=2.2µs  med=5.6µs   max=195.4ms  p(90)=8.3µs    p(95)=12.1µs 
     http_req_connecting............: avg=1.24ms min=0s     med=0s      max=115.87ms p(90)=0s       p(95)=0s     
     http_req_duration..............: avg=10.96s min=1.78s  med=9.99s   max=34.53s   p(90)=16.21s   p(95)=20.15s 
       { expected_response:true }...: avg=10.96s min=1.78s  med=9.99s   max=34.53s   p(90)=16.21s   p(95)=20.15s 
     http_req_failed................: 0.00%   ✓ 0         ✗ 12821
     http_req_receiving.............: avg=6.06ms min=61.7µs med=121.7µs max=604.69ms p(90)=819.52µs p(95)=9.46ms 
     http_req_sending...............: avg=2.62ms min=9.19µs med=29.2µs  max=691.77ms p(90)=156.7µs  p(95)=11.62ms
     http_req_tls_handshaking.......: avg=0s     min=0s     med=0s      max=0s       p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=10.95s min=1.78s  med=9.99s   max=34.52s   p(90)=16.2s    p(95)=20.15s 
     http_reqs......................: 12821   31.498002/s
     iteration_duration.............: avg=11.02s min=1.79s  med=10.04s  max=34.55s   p(90)=16.31s   p(95)=20.26s 
     iterations.....................: 12821   31.498002/s
     vus............................: 44      min=44      max=350
     vus_max........................: 350     min=350     max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6ea003bc-cb64-4ee0-0534-97292a2d2400/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3a9cf7a7-64cc-43c2-3331-e10e4fd97200/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/efccb772-8477-436a-ddbc-33c5b036e100/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 39240     ✗ 0    
     data_received..................: 1.1 GB  2.8 MB/s
     data_sent......................: 16 MB   38 kB/s
     http_req_blocked...............: avg=975.41µs min=2µs      med=4.5µs   max=109.07ms p(90)=7.9µs  p(95)=20.8µs 
     http_req_connecting............: avg=944.34µs min=0s       med=0s      max=79ms     p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=10.8s    min=323.67ms med=10.34s  max=24.36s   p(90)=11.46s p(95)=14.4s  
       { expected_response:true }...: avg=10.8s    min=323.67ms med=10.34s  max=24.36s   p(90)=11.46s p(95)=14.4s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 13080
     http_req_receiving.............: avg=68.51ms  min=63.9µs   med=142.6µs max=6.59s    p(90)=6.2ms  p(95)=45.72ms
     http_req_sending...............: avg=3.55ms   min=10.3µs   med=26.6µs  max=322.55ms p(90)=670µs  p(95)=17.87ms
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s       p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=10.73s   min=319.8ms  med=10.32s  max=24.35s   p(90)=11.33s p(95)=13.53s 
     http_reqs......................: 13080   31.887168/s
     iteration_duration.............: avg=10.88s   min=347.06ms med=10.42s  max=24.37s   p(90)=11.55s p(95)=14.44s 
     iterations.....................: 13080   31.887168/s
     vus............................: 35      min=35      max=350
     vus_max........................: 350     min=350     max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/76881b4f-c571-421e-29d8-058655c9b600/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/043de207-aa72-4300-5a67-2a50ffdc0200/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f61a24a5-6e45-46e4-abae-2d38f9e91800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 34656     ✗ 0    
     data_received..................: 1.0 GB  2.5 MB/s
     data_sent......................: 14 MB   33 kB/s
     http_req_blocked...............: avg=916.25µs min=1.8µs med=4.59µs max=47.54ms  p(90)=6.8µs    p(95)=11.2µs
     http_req_connecting............: avg=890.35µs min=0s    med=0s     max=47.34ms  p(90)=0s       p(95)=0s    
     http_req_duration..............: avg=12.26s   min=3.91s med=11.34s max=27.6s    p(90)=17.26s   p(95)=19.32s
       { expected_response:true }...: avg=12.26s   min=3.91s med=11.34s max=27.6s    p(90)=17.26s   p(95)=19.32s
     http_req_failed................: 0.00%   ✓ 0         ✗ 11552
     http_req_receiving.............: avg=4.89ms   min=60µs  med=109µs  max=568.64ms p(90)=642.49µs p(95)=6.94ms
     http_req_sending...............: avg=2.16ms   min=7.9µs med=23.5µs max=665.91ms p(90)=255.16µs p(95)=7.7ms 
     http_req_tls_handshaking.......: avg=0s       min=0s    med=0s     max=0s       p(90)=0s       p(95)=0s    
     http_req_waiting...............: avg=12.26s   min=3.91s med=11.34s max=27.59s   p(90)=17.26s   p(95)=19.31s
     http_reqs......................: 11552   28.135333/s
     iteration_duration.............: avg=12.33s   min=3.92s med=11.42s max=27.9s    p(90)=17.34s   p(95)=19.44s
     iterations.....................: 11552   28.135333/s
     vus............................: 61      min=61      max=350
     vus_max........................: 350     min=350     max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/bb10ecb3-2fa2-4f04-e244-436b7e8cbd00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ec7ffaa6-9b59-4c14-ec9c-a6070adb9200/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e85050e3-5b42-49c4-8c3b-d97a02347100/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 35058     ✗ 0    
     data_received..................: 1.0 GB  2.5 MB/s
     data_sent......................: 14 MB   34 kB/s
     http_req_blocked...............: avg=1.06ms min=1.8µs  med=4.4µs   max=103.49ms p(90)=6.5µs    p(95)=10µs  
     http_req_connecting............: avg=1.02ms min=0s     med=0s      max=63.57ms  p(90)=0s       p(95)=0s    
     http_req_duration..............: avg=12.1s  min=6.46s  med=12.02s  max=17.17s   p(90)=13.97s   p(95)=14.63s
       { expected_response:true }...: avg=12.1s  min=6.46s  med=12.02s  max=17.17s   p(90)=13.97s   p(95)=14.63s
     http_req_failed................: 0.00%   ✓ 0         ✗ 11686
     http_req_receiving.............: avg=2.33ms min=59.2µs med=115.9µs max=343.93ms p(90)=548.87µs p(95)=4.22ms
     http_req_sending...............: avg=1.33ms min=9µs    med=24.3µs  max=303.95ms p(90)=61.35µs  p(95)=5.47ms
     http_req_tls_handshaking.......: avg=0s     min=0s     med=0s      max=0s       p(90)=0s       p(95)=0s    
     http_req_waiting...............: avg=12.1s  min=6.46s  med=12.02s  max=17.17s   p(90)=13.97s   p(95)=14.62s
     http_reqs......................: 11686   28.578154/s
     iteration_duration.............: avg=12.14s min=6.54s  med=12.07s  max=17.18s   p(90)=14.01s   p(95)=14.68s
     iterations.....................: 11686   28.578154/s
     vus............................: 21      min=21      max=350
     vus_max........................: 350     min=350     max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/487579bb-3c2a-4900-69d9-b9da6d8f5300/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/626fed86-0f8e-466b-244d-10b8a42e0200/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b01869ba-3dc3-47c6-8ca4-5d2c191ac500/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 10636

     checks.........................: 66.66% ✓ 21272     ✗ 10636
     data_received..................: 936 MB 2.3 MB/s
     data_sent......................: 13 MB  31 kB/s
     http_req_blocked...............: avg=2.34ms   min=2.1µs  med=4.1µs   max=196.81ms p(90)=6.7µs    p(95)=22.4µs  
     http_req_connecting............: avg=2.27ms   min=0s     med=0s      max=136.88ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=13.33s   min=8.7s   med=13.27s  max=20.84s   p(90)=14.86s   p(95)=15.6s   
       { expected_response:true }...: avg=13.33s   min=8.7s   med=13.27s  max=20.84s   p(90)=14.86s   p(95)=15.6s   
     http_req_failed................: 0.00%  ✓ 0         ✗ 10636
     http_req_receiving.............: avg=737.44µs min=74.9µs med=258.6µs max=1.13s    p(90)=694.25µs p(95)=1.04ms  
     http_req_sending...............: avg=668.14µs min=13.4µs med=26.5µs  max=172.52ms p(90)=57.25µs  p(95)=149.05µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=13.33s   min=8.7s   med=13.27s  max=20.84s   p(90)=14.86s   p(95)=15.6s   
     http_reqs......................: 10636  26.005202/s
     iteration_duration.............: avg=13.34s   min=8.71s  med=13.28s  max=20.86s   p(90)=14.86s   p(95)=15.6s   
     iterations.....................: 10636  26.005202/s
     vus............................: 20     min=20      max=350
     vus_max........................: 350    min=350     max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8d2bd7d4-e6c8-4651-eaed-3edcba923d00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/927b1df6-ae2e-4780-8a3f-95bd04fd1200/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/bf54c989-49b6-4a67-4df0-b3e7ff020d00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-uws`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 29631     ✗ 0    
     data_received..................: 867 MB  2.1 MB/s
     data_sent......................: 12 MB   29 kB/s
     http_req_blocked...............: avg=2.09ms min=1.9µs  med=4.8µs   max=125.94ms p(90)=7.8µs   p(95)=22.4µs 
     http_req_connecting............: avg=2.02ms min=0s     med=0s      max=114.01ms p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=14.38s min=10.17s med=14.29s  max=20.85s   p(90)=16.17s  p(95)=17.04s 
       { expected_response:true }...: avg=14.38s min=10.17s med=14.29s  max=20.85s   p(90)=16.17s  p(95)=17.04s 
     http_req_failed................: 0.00%   ✓ 0         ✗ 9877 
     http_req_receiving.............: avg=3.51ms min=65µs   med=145.1µs max=4.06s    p(90)=879.3µs p(95)=4.8ms  
     http_req_sending...............: avg=1.48ms min=10.8µs med=28.29µs max=183.36ms p(90)=125.8µs p(95)=10.04ms
     http_req_tls_handshaking.......: avg=0s     min=0s     med=0s      max=0s       p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=14.38s min=10.16s med=14.28s  max=19.95s   p(90)=16.15s  p(95)=17.03s 
     http_reqs......................: 9877    23.994518/s
     iteration_duration.............: avg=14.43s min=10.18s med=14.32s  max=20.85s   p(90)=16.21s  p(95)=17.1s  
     iterations.....................: 9877    23.994518/s
     vus............................: 39      min=39      max=350
     vus_max........................: 350     min=350     max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/580d0929-93f1-4653-bed8-bc016f7bd900/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/268a3c0f-c47c-4b13-db47-5981e6e5a100/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8e0b6eaf-2b70-4421-4ba7-d745a3c4cb00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server-node16`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  99% — ✓ 8833 / ✗ 2
     ✗ no graphql errors
      ↳  99% — ✓ 8833 / ✗ 2
     ✓ valid response structure

     checks.........................: 99.98% ✓ 26499   ✗ 4    
     data_received..................: 776 MB 1.9 MB/s
     data_sent......................: 11 MB  25 kB/s
     http_req_blocked...............: avg=1.67ms min=1.8µs  med=5.3µs    max=156.75ms p(90)=8.8µs    p(95)=25.12µs
     http_req_connecting............: avg=1.61ms min=0s     med=0s       max=156.71ms p(90)=0s       p(95)=0s     
     http_req_duration..............: avg=16.05s min=2.1s   med=14.19s   max=38.49s   p(90)=24.32s   p(95)=29.82s 
       { expected_response:true }...: avg=16.05s min=2.1s   med=14.2s    max=38.49s   p(90)=24.32s   p(95)=29.82s 
     http_req_failed................: 0.02%  ✓ 2       ✗ 8833 
     http_req_receiving.............: avg=5.94ms min=0s     med=146.79µs max=529.26ms p(90)=1.14ms   p(95)=9.85ms 
     http_req_sending...............: avg=2.84ms min=10.8µs med=30.6µs   max=574.99ms p(90)=512.39µs p(95)=12.08ms
     http_req_tls_handshaking.......: avg=0s     min=0s     med=0s       max=0s       p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=16.04s min=2.1s   med=14.18s   max=38.48s   p(90)=24.3s    p(95)=29.82s 
     http_reqs......................: 8835   21.4365/s
     iteration_duration.............: avg=16.13s min=2.11s  med=14.31s   max=38.51s   p(90)=24.42s   p(95)=29.97s 
     iterations.....................: 8835   21.4365/s
     vus............................: 60     min=60    max=350
     vus_max........................: 350    min=350   max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f438e83f-7eed-480e-9c38-fa1c1c074c00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/66dcbe14-7fba-4f35-65f3-dfdfc05e4100/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e75e929c-f2df-43ce-7112-c6abd11fed00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  43% — ✓ 1267 / ✗ 1645
     ✗ no graphql errors
      ↳  43% — ✓ 1267 / ✗ 1645
     ✓ valid response structure

     checks.........................: 53.60% ✓ 3801     ✗ 3290 
     data_received..................: 111 MB 259 kB/s
     data_sent......................: 3.7 MB 8.5 kB/s
     http_req_blocked...............: avg=6.11ms   min=1.6µs  med=189.01µs max=178.93ms p(90)=11.06ms  p(95)=61.66ms 
     http_req_connecting............: avg=5.87ms   min=0s     med=128.71µs max=91.88ms  p(90)=10.59ms  p(95)=61.34ms 
     http_req_duration..............: avg=47.86s   min=9.81s  med=59.99s   max=1m0s     p(90)=1m0s     p(95)=1m0s    
       { expected_response:true }...: avg=32.1s    min=9.81s  med=28.83s   max=59.99s   p(90)=52.62s   p(95)=55.32s  
     http_req_failed................: 56.49% ✓ 1645     ✗ 1267 
     http_req_receiving.............: avg=327.34µs min=0s     med=0s       max=60.27ms  p(90)=325.51µs p(95)=498.03µs
     http_req_sending...............: avg=3.21ms   min=10.1µs med=44.8µs   max=126.46ms p(90)=1.46ms   p(95)=13.95ms 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=47.85s   min=9.81s  med=59.99s   max=1m0s     p(90)=1m0s     p(95)=1m0s    
     http_reqs......................: 2912   6.771858/s
     iteration_duration.............: avg=47.87s   min=9.82s  med=1m0s     max=1m0s     p(90)=1m0s     p(95)=1m0s    
     iterations.....................: 2912   6.771858/s
     vus............................: 184    min=184    max=350
     vus_max........................: 350    min=350    max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/557b5d9e-4299-4810-c784-71ab56a98d00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8db8030d-70a1-4982-4495-155149505700/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7a3033e2-cacf-41ce-afc2-c789187ba100/public" alt="HTTP Overview" />


  </details>