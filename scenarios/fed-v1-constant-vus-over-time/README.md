## Overview for: `scenarios/fed-v1-constant-vus-over-time`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. It's being executed with a constant amount of VUs over a fixed amount of time. It measure things like memory usage, CPU usage, average RPS. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was running 350 VUs over 400s


### Comparison


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6e3b031f-8c3f-4dfe-bbd8-cfb092372e00/public" alt="Comparison" />


| Gateway                             | RPS ⬇️ |        Requests         |          Duration          |
| :---------------------------------- | :----: | :---------------------: | :------------------------: |
| wundergraph                         |  939   | 376014 total, 0 failed  |   avg: 305ms, p95: 587ms   |
| mesh-bun                            |  313   | 125496 total, 0 failed  |  avg: 1112ms, p95: 1680ms  |
| mesh                                |  192   |  77369 total, 0 failed  |  avg: 1808ms, p95: 2259ms  |
| apollo-gateway-with-yoga-bun        |   48   |  19669 total, 0 failed  | avg: 6963ms, p95: 10302ms  |
| apollo-router                       |   44   |  17961 total, 0 failed  | avg: 7825ms, p95: 10855ms  |
| stitching-federation-with-yoga-bun  |   43   |  17526 total, 0 failed  | avg: 7913ms, p95: 13658ms  |
| mesh-supergraph                     |   41   |  17003 total, 0 failed  |  avg: 8295ms, p95: 9302ms  |
| apollo-gateway-with-yoga-uws        |   40   |  16547 total, 0 failed  | avg: 8481ms, p95: 13295ms  |
| apollo-server-node16                |   38   |  15716 total, 0 failed  | avg: 8943ms, p95: 14448ms  |
| apollo-gateway-with-yoga            |   33   |  13445 total, 0 failed  | avg: 10439ms, p95: 15500ms |
| stitching-federation-with-yoga-deno |   31   |  12874 total, 0 failed  | avg: 10975ms, p95: 13839ms |
| stitching-federation-with-yoga-uws  |   26   |  11010 total, 0 failed  | avg: 12836ms, p95: 15148ms |
| stitching-federation-with-yoga      |   22   |  9354 total, 0 failed   | avg: 15173ms, p95: 17540ms |
| apollo-server                       |   20   | 8611 total, 111 failed  | avg: 16557ms, p95: 30177ms |
| mercurius                           |   7    | 3236 total, 1231 failed | avg: 42842ms, p95: 60001ms |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 376014

     checks.........................: 66.66% ✓ 752028     ✗ 376014
     data_received..................: 55 MB  136 kB/s
     data_sent......................: 446 MB 1.1 MB/s
     http_req_blocked...............: avg=104.82µs min=1.2µs    med=3.2µs    max=1.17s    p(90)=4.89µs   p(95)=6.2µs   
     http_req_connecting............: avg=93.23µs  min=0s       med=0s       max=1.17s    p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=304.68ms min=346.1µs  med=288.8ms  max=2.02s    p(90)=518.1ms  p(95)=587.17ms
       { expected_response:true }...: avg=304.68ms min=346.1µs  med=288.8ms  max=2.02s    p(90)=518.1ms  p(95)=587.17ms
     http_req_failed................: 0.00%  ✓ 0          ✗ 376014
     http_req_receiving.............: avg=24.6ms   min=9µs      med=33.79µs  max=1.85s    p(90)=52.99ms  p(95)=183.24ms
     http_req_sending...............: avg=2.96ms   min=6.2µs    med=15.2µs   max=1.55s    p(90)=135.4µs  p(95)=624.04µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=277.12ms min=278.3µs  med=276.97ms max=904.94ms p(90)=458.23ms p(95)=502.71ms
     http_reqs......................: 376014 939.570842/s
     iteration_duration.............: avg=371.65ms min=928.61µs med=339.36ms max=2.59s    p(90)=622.82ms p(95)=744.83ms
     iterations.....................: 376014 939.570842/s
     vus............................: 350    min=350      max=350 
     vus_max........................: 350    min=350      max=350 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/57540e5b-a1bd-4694-8a28-73d6bf103300/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/092716e1-7bab-49e1-89ef-a3f6297ad100/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/cff5db29-400e-4b0b-9d02-ab62f07ab100/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  0% — ✓ 0 / ✗ 125496
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 125496

     checks.........................: 33.33% ✓ 125496     ✗ 250992
     data_received..................: 119 MB 298 kB/s
     data_sent......................: 149 MB 372 kB/s
     http_req_blocked...............: avg=82.55µs min=1.3µs    med=2.4µs  max=308.05ms p(90)=3.8µs   p(95)=6.3µs  
     http_req_connecting............: avg=68.95µs min=0s       med=0s     max=55.64ms  p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=1.11s   min=350.93ms med=1.15s  max=2.44s    p(90)=1.55s   p(95)=1.68s  
       { expected_response:true }...: avg=1.11s   min=350.93ms med=1.15s  max=2.44s    p(90)=1.55s   p(95)=1.68s  
     http_req_failed................: 0.00%  ✓ 0          ✗ 125496
     http_req_receiving.............: avg=3.69ms  min=13.6µs   med=32.7µs max=580.54ms p(90)=348.1µs p(95)=6.55ms 
     http_req_sending...............: avg=1.54ms  min=8.69µs   med=14.5µs max=602.72ms p(90)=131.2µs p(95)=389.5µs
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s     max=0s       p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=1.1s    min=350.49ms med=1.14s  max=2.41s    p(90)=1.55s   p(95)=1.66s  
     http_reqs......................: 125496 313.192771/s
     iteration_duration.............: avg=1.11s   min=351.82ms med=1.15s  max=2.44s    p(90)=1.56s   p(95)=1.68s  
     iterations.....................: 125496 313.192771/s
     vus............................: 350    min=350      max=350 
     vus_max........................: 350    min=350      max=350 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6407b75c-b371-4d0a-492d-1c051dd26700/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/78b84bdd-b1d0-4cd8-a954-97ff7b4dd500/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4ae482ec-d6b5-4b28-d322-869a4711cc00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 77369

     checks.........................: 66.66% ✓ 154738     ✗ 77369
     data_received..................: 88 MB  218 kB/s
     data_sent......................: 92 MB  229 kB/s
     http_req_blocked...............: avg=77.15µs min=1.6µs    med=2.7µs   max=96.47ms  p(90)=4.5µs   p(95)=6.2µs   
     http_req_connecting............: avg=66.1µs  min=0s       med=0s      max=51.03ms  p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=1.8s    min=629.8ms  med=1.8s    max=4.41s    p(90)=2.12s   p(95)=2.25s   
       { expected_response:true }...: avg=1.8s    min=629.8ms  med=1.8s    max=4.41s    p(90)=2.12s   p(95)=2.25s   
     http_req_failed................: 0.00%  ✓ 0          ✗ 77369
     http_req_receiving.............: avg=4.03ms  min=16.2µs   med=38.69µs max=505.9ms  p(90)=335.1µs p(95)=4.41ms  
     http_req_sending...............: avg=1.08ms  min=9.6µs    med=15.7µs  max=433.82ms p(90)=119.4µs p(95)=374.28µs
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s      max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=1.8s    min=629.7ms  med=1.79s   max=4.23s    p(90)=2.12s   p(95)=2.25s   
     http_reqs......................: 77369  192.921375/s
     iteration_duration.............: avg=1.81s   min=632.36ms med=1.8s    max=4.42s    p(90)=2.13s   p(95)=2.26s   
     iterations.....................: 77369  192.921375/s
     vus............................: 283    min=283      max=350
     vus_max........................: 350    min=350      max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c89a9dcd-e9a4-4278-6d95-3518c5f6b000/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/300393b2-c901-4bc9-0988-a7b1d8cabe00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/74461969-88b4-4afd-00bc-ac4c9041f400/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 59007     ✗ 0    
     data_received..................: 1.7 GB  4.2 MB/s
     data_sent......................: 23 MB   58 kB/s
     http_req_blocked...............: avg=945.88µs min=1.3µs  med=3.5µs  max=1.16s    p(90)=5.1µs   p(95)=6.4µs   
     http_req_connecting............: avg=646.02µs min=0s     med=0s     max=130.09ms p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=6.96s    min=2.84s  med=6.53s  max=13.12s   p(90)=9.52s   p(95)=10.3s   
       { expected_response:true }...: avg=6.96s    min=2.84s  med=6.53s  max=13.12s   p(90)=9.52s   p(95)=10.3s   
     http_req_failed................: 0.00%   ✓ 0         ✗ 19669
     http_req_receiving.............: avg=137.87ms min=40.5µs med=86.5µs max=3.88s    p(90)=547.5ms p(95)=873.65ms
     http_req_sending...............: avg=13.07ms  min=6.7µs  med=18.7µs max=1.56s    p(90)=5.47ms  p(95)=41.92ms 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=6.81s    min=2.84s  med=6.29s  max=12.67s   p(90)=9.35s   p(95)=10.19s  
     http_reqs......................: 19669   48.425683/s
     iteration_duration.............: avg=7.19s    min=2.9s   med=6.83s  max=13.53s   p(90)=9.84s   p(95)=10.63s  
     iterations.....................: 19669   48.425683/s
     vus............................: 39      min=39      max=350
     vus_max........................: 350     min=350     max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/fc756cfe-8b14-4cd5-06fb-85be2e3aa700/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e71b9d0b-0c5f-42d5-c161-39f71a1db200/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7deab71f-90ef-4ab9-526f-88c52f64c800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 53883     ✗ 0    
     data_received..................: 1.6 GB  3.9 MB/s
     data_sent......................: 21 MB   53 kB/s
     http_req_blocked...............: avg=663.46µs min=1.7µs    med=4.4µs   max=90.61ms  p(90)=6.6µs   p(95)=8µs    
     http_req_connecting............: avg=644.14µs min=0s       med=0s      max=90.55ms  p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=7.82s    min=401.72ms med=7.72s   max=15.78s   p(90)=10.06s  p(95)=10.85s 
       { expected_response:true }...: avg=7.82s    min=401.72ms med=7.72s   max=15.78s   p(90)=10.06s  p(95)=10.85s 
     http_req_failed................: 0.00%   ✓ 0         ✗ 17961
     http_req_receiving.............: avg=862.51µs min=58.2µs   med=109.8µs max=421.03ms p(90)=235.1µs p(95)=407.4µs
     http_req_sending...............: avg=716.81µs min=10.1µs   med=25.4µs  max=445.43ms p(90)=45µs    p(95)=1.15ms 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s       p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=7.82s    min=401.56ms med=7.72s   max=15.78s   p(90)=10.06s  p(95)=10.85s 
     http_reqs......................: 17961   44.334863/s
     iteration_duration.............: avg=7.84s    min=410.52ms med=7.75s   max=15.81s   p(90)=10.08s  p(95)=10.88s 
     iterations.....................: 17961   44.334863/s
     vus............................: 66      min=66      max=350
     vus_max........................: 350     min=350     max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9105f9d6-8b30-4e8e-04a0-fa7721047400/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ac2308b0-dda8-4796-b6a4-6a4827581100/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e160b4c7-8aea-4550-264f-459f57e7b100/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 52578    ✗ 0    
     data_received..................: 1.5 GB  3.8 MB/s
     data_sent......................: 21 MB   51 kB/s
     http_req_blocked...............: avg=810.72µs min=1.5µs    med=3.7µs  max=132.59ms p(90)=5.7µs  p(95)=8.4µs   
     http_req_connecting............: avg=775.81µs min=0s       med=0s     max=132.52ms p(90)=0s     p(95)=0s      
     http_req_duration..............: avg=7.91s    min=365.13ms med=7.45s  max=17.22s   p(90)=9.98s  p(95)=13.65s  
       { expected_response:true }...: avg=7.91s    min=365.13ms med=7.45s  max=17.22s   p(90)=9.98s  p(95)=13.65s  
     http_req_failed................: 0.00%   ✓ 0        ✗ 17526
     http_req_receiving.............: avg=47.2ms   min=48µs     med=91.1µs max=5.67s    p(90)=8.79ms p(95)=161.66ms
     http_req_sending...............: avg=6.03ms   min=8.1µs    med=17.3µs max=1.28s    p(90)=1.98ms p(95)=27.27ms 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=7.85s    min=362.71ms med=7.43s  max=16.24s   p(90)=8.95s  p(95)=13.64s  
     http_reqs......................: 17526   43.24782/s
     iteration_duration.............: avg=8.03s    min=426.03ms med=7.56s  max=17.23s   p(90)=10.26s p(95)=13.75s  
     iterations.....................: 17526   43.24782/s
     vus............................: 50      min=50     max=350
     vus_max........................: 350     min=350    max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c7cdcd66-387f-43fd-825e-24b3e66c0400/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8c8f90d7-760f-43fa-c0ff-ac45e4fa3600/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/69caf042-043c-48b2-dd0b-9244c56c3000/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 17003

     checks.........................: 66.66% ✓ 34006    ✗ 17003
     data_received..................: 1.5 GB 3.7 MB/s
     data_sent......................: 20 MB  50 kB/s
     http_req_blocked...............: avg=1.58ms   min=1.3µs  med=3µs     max=301.57ms p(90)=4.3µs   p(95)=13.1µs  
     http_req_connecting............: avg=1.54ms   min=0s     med=0s      max=221.09ms p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=8.29s    min=5.42s  med=8.24s   max=13.91s   p(90)=8.99s   p(95)=9.3s    
       { expected_response:true }...: avg=8.29s    min=5.42s  med=8.24s   max=13.91s   p(90)=8.99s   p(95)=9.3s    
     http_req_failed................: 0.00%  ✓ 0        ✗ 17003
     http_req_receiving.............: avg=470.65µs min=47.3µs med=103.8µs max=793.4ms  p(90)=294.2µs p(95)=348.39µs
     http_req_sending...............: avg=495.91µs min=7.9µs  med=18µs    max=75.97ms  p(90)=31.4µs  p(95)=38.5µs  
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=8.29s    min=5.42s  med=8.23s   max=13.91s   p(90)=8.99s   p(95)=9.3s    
     http_reqs......................: 17003  41.93786/s
     iteration_duration.............: avg=8.29s    min=5.42s  med=8.24s   max=14.01s   p(90)=8.99s   p(95)=9.3s    
     iterations.....................: 17003  41.93786/s
     vus............................: 77     min=77     max=350
     vus_max........................: 350    min=350    max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/628fa159-733a-46c2-c8ce-4f549092d000/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/471a8dcf-1e56-45aa-61ef-c4d60435f600/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/10f6e028-0f4a-48b3-bb7f-2558c6589100/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga-uws`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 49641     ✗ 0    
     data_received..................: 1.5 GB  3.6 MB/s
     data_sent......................: 20 MB   48 kB/s
     http_req_blocked...............: avg=464.42µs min=1.7µs    med=3.7µs   max=489.85ms p(90)=5.2µs    p(95)=6.4µs  
     http_req_connecting............: avg=398.92µs min=0s       med=0s      max=58.19ms  p(90)=0s       p(95)=0s     
     http_req_duration..............: avg=8.48s    min=304.14ms med=7.89s   max=21.99s   p(90)=12.03s   p(95)=13.29s 
       { expected_response:true }...: avg=8.48s    min=304.14ms med=7.89s   max=21.99s   p(90)=12.03s   p(95)=13.29s 
     http_req_failed................: 0.00%   ✓ 0         ✗ 16547
     http_req_receiving.............: avg=10.6ms   min=39.6µs   med=81.69µs max=2.87s    p(90)=612.95µs p(95)=15.13ms
     http_req_sending...............: avg=2.42ms   min=7.5µs    med=20.2µs  max=1.44s    p(90)=114.99µs p(95)=10.31ms
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s       p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=8.46s    min=303.97ms med=7.88s   max=21.99s   p(90)=12.02s   p(95)=13.26s 
     http_reqs......................: 16547   40.763772/s
     iteration_duration.............: avg=8.53s    min=317.57ms med=7.95s   max=22s      p(90)=12.11s   p(95)=13.41s 
     iterations.....................: 16547   40.763772/s
     vus............................: 33      min=33      max=350
     vus_max........................: 350     min=350     max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7834a58a-9af1-469e-872a-ef841746e600/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5a6dd59f-816a-4fce-6bbf-1767b763ab00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/40abcdb4-eb07-4d86-7571-9a3e9f9c7400/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server-node16`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 47148     ✗ 0    
     data_received..................: 1.4 GB  3.4 MB/s
     data_sent......................: 19 MB   46 kB/s
     http_req_blocked...............: avg=576.21µs min=1.5µs    med=3.5µs  max=55.31ms  p(90)=5µs      p(95)=6.1µs  
     http_req_connecting............: avg=552.88µs min=0s       med=0s     max=45.89ms  p(90)=0s       p(95)=0s     
     http_req_duration..............: avg=8.94s    min=992.44ms med=8.27s  max=28.42s   p(90)=12.86s   p(95)=14.44s 
       { expected_response:true }...: avg=8.94s    min=992.44ms med=8.27s  max=28.42s   p(90)=12.86s   p(95)=14.44s 
     http_req_failed................: 0.00%   ✓ 0         ✗ 15716
     http_req_receiving.............: avg=8.07ms   min=42.1µs   med=83.6µs max=1.01s    p(90)=646.3µs  p(95)=12.48ms
     http_req_sending...............: avg=2.64ms   min=7.5µs    med=18.7µs max=634.24ms p(90)=103.25µs p(95)=10.15ms
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=8.93s    min=992.29ms med=8.26s  max=28.42s   p(90)=12.86s   p(95)=14.44s 
     http_reqs......................: 15716   38.635977/s
     iteration_duration.............: avg=8.99s    min=1s       med=8.33s  max=28.46s   p(90)=12.93s   p(95)=14.51s 
     iterations.....................: 15716   38.635977/s
     vus............................: 113     min=113     max=350
     vus_max........................: 350     min=350     max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/35511647-0d40-4c83-3ecc-53659323ea00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/629abb34-863e-4c1b-c346-acae7934d800/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/cd0c94f7-6dab-494f-7720-320c9ebf1300/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 40335     ✗ 0    
     data_received..................: 1.2 GB  2.9 MB/s
     data_sent......................: 16 MB   39 kB/s
     http_req_blocked...............: avg=1.79ms  min=2.2µs  med=5.4µs   max=297.56ms p(90)=7.3µs    p(95)=9.6µs  
     http_req_connecting............: avg=1.71ms  min=0s     med=0s      max=136.69ms p(90)=0s       p(95)=0s     
     http_req_duration..............: avg=10.43s  min=3.38s  med=10.17s  max=20.41s   p(90)=14.32s   p(95)=15.49s 
       { expected_response:true }...: avg=10.43s  min=3.38s  med=10.17s  max=20.41s   p(90)=14.32s   p(95)=15.49s 
     http_req_failed................: 0.00%   ✓ 0         ✗ 13445
     http_req_receiving.............: avg=10.02ms min=56.2µs med=110.6µs max=952.25ms p(90)=878.76µs p(95)=16.85ms
     http_req_sending...............: avg=2.83ms  min=9µs    med=27.7µs  max=691.51ms p(90)=170.16µs p(95)=14.41ms
     http_req_tls_handshaking.......: avg=0s      min=0s     med=0s      max=0s       p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=10.42s  min=3.36s  med=10.17s  max=20.41s   p(90)=14.28s   p(95)=15.46s 
     http_reqs......................: 13445   33.085904/s
     iteration_duration.............: avg=10.51s  min=3.4s   med=10.25s  max=20.42s   p(90)=14.43s   p(95)=15.56s 
     iterations.....................: 13445   33.085904/s
     vus............................: 72      min=72      max=350
     vus_max........................: 350     min=350     max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a607ab48-a561-4900-b4ca-7ed591c30800/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/785bfe6e-6a86-41b5-0a7e-af97c583f900/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2589f128-30c7-49e8-a509-bbd76213cf00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-deno`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 38622     ✗ 0    
     data_received..................: 1.1 GB  2.8 MB/s
     data_sent......................: 15 MB   37 kB/s
     http_req_blocked...............: avg=834.61µs min=1.6µs  med=4.1µs  max=70.82ms  p(90)=5.9µs    p(95)=7.2µs  
     http_req_connecting............: avg=798.69µs min=0s     med=0s     max=51.53ms  p(90)=0s       p(95)=0s     
     http_req_duration..............: avg=10.97s   min=3.56s  med=10.46s max=17.23s   p(90)=13.48s   p(95)=13.83s 
       { expected_response:true }...: avg=10.97s   min=3.56s  med=10.46s max=17.23s   p(90)=13.48s   p(95)=13.83s 
     http_req_failed................: 0.00%   ✓ 0         ✗ 12874
     http_req_receiving.............: avg=2.05ms   min=50.5µs med=93.2µs max=191.97ms p(90)=930.99µs p(95)=10.11ms
     http_req_sending...............: avg=1.27ms   min=7.6µs  med=21.1µs max=229.05ms p(90)=109.37µs p(95)=4.27ms 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=10.97s   min=3.56s  med=10.46s max=17.23s   p(90)=13.48s   p(95)=13.83s 
     http_reqs......................: 12874   31.518939/s
     iteration_duration.............: avg=11s      min=3.57s  med=10.49s max=17.24s   p(90)=13.51s   p(95)=13.86s 
     iterations.....................: 12874   31.518939/s
     vus............................: 50      min=50      max=350
     vus_max........................: 350     min=350     max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/be24fcb7-fc6d-4bff-b74c-1d538f43f500/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2e8432a5-8f1c-424a-3583-60c17edd9800/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/125aecb9-7eff-42a4-1b9d-81c0c9f65a00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-uws`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 33030     ✗ 0    
     data_received..................: 966 MB  2.4 MB/s
     data_sent......................: 13 MB   32 kB/s
     http_req_blocked...............: avg=1.35ms   min=1.7µs  med=3.7µs   max=131.3ms  p(90)=6.1µs    p(95)=19.75µs
     http_req_connecting............: avg=1.17ms   min=0s     med=0s      max=86.41ms  p(90)=0s       p(95)=0s     
     http_req_duration..............: avg=12.83s   min=6.2s   med=12.73s  max=17.63s   p(90)=14.51s   p(95)=15.14s 
       { expected_response:true }...: avg=12.83s   min=6.2s   med=12.73s  max=17.63s   p(90)=14.51s   p(95)=15.14s 
     http_req_failed................: 0.00%   ✓ 0         ✗ 11010
     http_req_receiving.............: avg=2.2ms    min=59.8µs med=126.4µs max=3.53s    p(90)=618.01µs p(95)=3.33ms 
     http_req_sending...............: avg=953.88µs min=10.2µs med=22.5µs  max=189.02ms p(90)=70.31µs  p(95)=2.78ms 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s       p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=12.83s   min=6.2s   med=12.73s  max=17.62s   p(90)=14.51s   p(95)=15.13s 
     http_reqs......................: 11010   26.910597/s
     iteration_duration.............: avg=12.87s   min=6.22s  med=12.77s  max=17.72s   p(90)=14.54s   p(95)=15.19s 
     iterations.....................: 11010   26.910597/s
     vus............................: 17      min=17      max=350
     vus_max........................: 350     min=350     max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3299a4fc-34ff-4967-e810-b38f1d2dc100/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4f05be36-caf9-4e0d-7f14-50d2bee21d00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4447f5e4-55bb-45f0-cce0-b36ab3036a00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 28062     ✗ 0    
     data_received..................: 821 MB  2.0 MB/s
     data_sent......................: 11 MB   27 kB/s
     http_req_blocked...............: avg=1.41ms   min=2µs    med=5.4µs    max=113.51ms p(90)=8.5µs    p(95)=23.1µs
     http_req_connecting............: avg=1.34ms   min=0s     med=0s       max=58.19ms  p(90)=0s       p(95)=0s    
     http_req_duration..............: avg=15.17s   min=9.25s  med=15.14s   max=20.15s   p(90)=16.88s   p(95)=17.53s
       { expected_response:true }...: avg=15.17s   min=9.25s  med=15.14s   max=20.15s   p(90)=16.88s   p(95)=17.53s
     http_req_failed................: 0.00%   ✓ 0         ✗ 9354 
     http_req_receiving.............: avg=1.25ms   min=72.2µs med=157.09µs max=185.27ms p(90)=731.48µs p(95)=4.07ms
     http_req_sending...............: avg=983.99µs min=12µs   med=33.3µs   max=156.29ms p(90)=109.03µs p(95)=3.3ms 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s       max=0s       p(90)=0s       p(95)=0s    
     http_req_waiting...............: avg=15.17s   min=9.24s  med=15.14s   max=20.15s   p(90)=16.88s   p(95)=17.53s
     http_reqs......................: 9354    22.724227/s
     iteration_duration.............: avg=15.2s    min=9.3s   med=15.18s   max=20.16s   p(90)=16.93s   p(95)=17.57s
     iterations.....................: 9354    22.724227/s
     vus............................: 41      min=41      max=350
     vus_max........................: 350     min=350     max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e8cb3df1-0515-4a43-d3f0-1106a4914000/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/57c6d5fc-24af-4b21-4bf3-2ce44cc44300/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4486c6d4-8829-42ee-5460-cd6c3d851600/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  98% — ✓ 8500 / ✗ 111
     ✗ no graphql errors
      ↳  98% — ✓ 8500 / ✗ 111
     ✓ valid response structure

     checks.........................: 99.13% ✓ 25500     ✗ 222  
     data_received..................: 747 MB 1.8 MB/s
     data_sent......................: 10 MB  25 kB/s
     http_req_blocked...............: avg=3.53ms min=2.4µs  med=5.7µs   max=151.04ms p(90)=11.3µs p(95)=581.95µs
     http_req_connecting............: avg=3.47ms min=0s     med=0s      max=138.81ms p(90)=0s     p(95)=455.75µs
     http_req_duration..............: avg=16.55s min=1.38s  med=14.24s  max=1m0s     p(90)=25.8s  p(95)=30.17s  
       { expected_response:true }...: avg=15.98s min=1.38s  med=14.14s  max=58.71s   p(90)=24.67s p(95)=29.36s  
     http_req_failed................: 1.28%  ✓ 111       ✗ 8500 
     http_req_receiving.............: avg=5.21ms min=0s     med=148.5µs max=780.04ms p(90)=1.03ms p(95)=7.51ms  
     http_req_sending...............: avg=2.69ms min=11.7µs med=31.8µs  max=524.5ms  p(90)=2.78ms p(95)=14.15ms 
     http_req_tls_handshaking.......: avg=0s     min=0s     med=0s      max=0s       p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=16.54s min=1.38s  med=14.23s  max=1m0s     p(90)=25.8s  p(95)=30.17s  
     http_reqs......................: 8611   20.823425/s
     iteration_duration.............: avg=16.63s min=1.4s   med=14.32s  max=1m0s     p(90)=25.98s p(95)=30.28s  
     iterations.....................: 8611   20.823425/s
     vus............................: 47     min=47      max=350
     vus_max........................: 350    min=350     max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/91bf9a86-f863-465d-3469-0d2a2190f700/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3022f59f-b3b4-45c9-6d71-0d3ecca88f00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/83784660-3608-4646-93fb-37f0c4e9ad00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  61% — ✓ 2005 / ✗ 1231
     ✗ no graphql errors
      ↳  61% — ✓ 2005 / ✗ 1231
     ✓ valid response structure

     checks.........................: 70.95% ✓ 6015     ✗ 2462 
     data_received..................: 176 MB 409 kB/s
     data_sent......................: 4.1 MB 9.5 kB/s
     http_req_blocked...............: avg=1.12ms   min=1.5µs med=4.59µs  max=117.26ms p(90)=1.83ms  p(95)=7.7ms   
     http_req_connecting............: avg=1ms      min=0s    med=0s      max=25.36ms  p(90)=1.75ms  p(95)=7.54ms  
     http_req_duration..............: avg=42.84s   min=8.59s med=49.23s  max=1m0s     p(90)=1m0s    p(95)=1m0s    
       { expected_response:true }...: avg=32.3s    min=8.59s med=29.89s  max=59.99s   p(90)=56.54s  p(95)=58.36s  
     http_req_failed................: 38.04% ✓ 1231     ✗ 2005 
     http_req_receiving.............: avg=275.96µs min=0s    med=89.05µs max=215.52ms p(90)=240.6µs p(95)=395.02µs
     http_req_sending...............: avg=1.95ms   min=7.9µs med=29.2µs  max=166.02ms p(90)=203.3µs p(95)=1.01ms  
     http_req_tls_handshaking.......: avg=0s       min=0s    med=0s      max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=42.83s   min=8.53s med=49.23s  max=1m0s     p(90)=1m0s    p(95)=1m0s    
     http_reqs......................: 3236   7.525377/s
     iteration_duration.............: avg=42.85s   min=8.61s med=49.24s  max=1m0s     p(90)=1m0s    p(95)=1m0s    
     iterations.....................: 3236   7.525377/s
     vus............................: 207    min=207    max=350
     vus_max........................: 350    min=350    max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9ad1cd2f-08cf-4488-d7ef-d19abacb8500/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/580382ff-552e-479e-bf23-a79386329f00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e04688e2-7dc3-42f9-05f6-d369e3c9f200/public" alt="HTTP Overview" />


  </details>