## Overview for: `federation-v1/ramping-vus`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. We are running a heavy load of concurrent VUs to measure response time and other stats, during stress. It measure things like memory usage, CPU usage, response times. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was trying to reach 2000 concurrent VUs over 600s


### Comparison


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7b63eb22-dc5d-4102-1b45-2a1875927200/public" alt="Comparison" />


| Gateway             | duration(p95)⬇️ |  RPS  |         Requests         |                       Durations                        | Notes                                                                          |
| :------------------ | :-------------: | :---: | :----------------------: | :----------------------------------------------------: | :----------------------------------------------------------------------------- |
| apollo-router       |     5967ms      |  177  |  108336 total, 0 failed  |  avg: 2438ms, p95: 5967ms, max: 20864ms, med: 1927ms   | ✅                                                                              |
| wundergraph         |     6180ms      |  166  |  101979 total, 0 failed  |  avg: 2497ms, p95: 6181ms, max: 16851ms, med: 2040ms   | ✅                                                                              |
| mesh-supergraph-bun |     16197ms     |  117  |  72381 total, 0 failed   |  avg: 8662ms, p95: 16198ms, max: 41177ms, med: 8126ms  | ✅                                                                              |
| mesh-bun            |     17690ms     |  108  |  66868 total, 0 failed   |  avg: 9352ms, p95: 17691ms, max: 45172ms, med: 8635ms  | ✅                                                                              |
| mesh-supergraph     |     18833ms     |  101  |  62487 total, 0 failed   | avg: 10013ms, p95: 18833ms, max: 25885ms, med: 9918ms  | ✅                                                                              |
| mesh                |     19466ms     |  98   |  60892 total, 0 failed   | avg: 10299ms, p95: 19467ms, max: 27423ms, med: 10249ms | ✅                                                                              |
| apollo-server       |     60000ms     |  73   | 46614 total, 7581 failed | avg: 13762ms, p95: 60001ms, max: 60616ms, med: 4423ms  | ❌ 7581 failed requests, 7581 non-200 responses, 7581 unexpected GraphQL errors |



<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 325008     ✗ 0     
     data_received..................: 9.5 GB  16 MB/s
     data_sent......................: 129 MB  211 kB/s
     http_req_blocked...............: avg=37.6ms   min=1.47µs  med=3.55µs  max=17.31s p(90)=5.74µs  p(95)=9.58µs  
     http_req_connecting............: avg=35.42ms  min=0s      med=0s      max=11.55s p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=2.43s    min=8.76ms  med=1.92s   max=20.86s p(90)=4.95s   p(95)=5.96s   
       { expected_response:true }...: avg=2.43s    min=8.76ms  med=1.92s   max=20.86s p(90)=4.95s   p(95)=5.96s   
     http_req_failed................: 0.00%   ✓ 0          ✗ 108336
     http_req_receiving.............: avg=552.46ms min=23.39µs med=74.53µs max=17.55s p(90)=1.83s   p(95)=3.39s   
     http_req_sending...............: avg=124.27ms min=7.48µs  med=15.16µs max=17.65s p(90)=138.4µs p(95)=337.15ms
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s     p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=1.76s    min=8.72ms  med=1.42s   max=11.24s p(90)=3.78s   p(95)=4.64s   
     http_reqs......................: 108336  177.594028/s
     iteration_duration.............: avg=5.64s    min=23.84ms med=4.31s   max=40.09s p(90)=12.55s  p(95)=15.89s  
     iterations.....................: 108336  177.594028/s
     vus............................: 7       min=7        max=1996
     vus_max........................: 2000    min=2000     max=2000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b8daae98-7fb7-4111-94eb-093ccb61f200/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5bbd3905-b347-493d-2045-50ae2f9a7b00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2876ab25-9f75-4666-7262-95e21027cd00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 305937     ✗ 0     
     data_received..................: 8.9 GB  15 MB/s
     data_sent......................: 121 MB  198 kB/s
     http_req_blocked...............: avg=43.43ms  min=1.62µs  med=3.71µs  max=13.02s p(90)=6.07µs   p(95)=10.64µs
     http_req_connecting............: avg=41.04ms  min=0s      med=0s      max=13.02s p(90)=0s       p(95)=0s     
     http_req_duration..............: avg=2.49s    min=8.85ms  med=2.03s   max=16.85s p(90)=5.25s    p(95)=6.18s  
       { expected_response:true }...: avg=2.49s    min=8.85ms  med=2.03s   max=16.85s p(90)=5.25s    p(95)=6.18s  
     http_req_failed................: 0.00%   ✓ 0          ✗ 101979
     http_req_receiving.............: avg=505.57ms min=24.14µs med=81.77µs max=14.42s p(90)=1.5s     p(95)=3.41s  
     http_req_sending...............: avg=76ms     min=6µs     med=15.82µs max=12.12s p(90)=127.75µs p(95)=144.9ms
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s     p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=1.91s    min=7.74ms  med=1.53s   max=11.28s p(90)=4.23s    p(95)=5.05s  
     http_reqs......................: 101979  166.939654/s
     iteration_duration.............: avg=5.96s    min=24.48ms med=4.7s    max=48s    p(90)=13s      p(95)=15.46s 
     iterations.....................: 101979  166.939654/s
     vus............................: 78      min=52       max=1993
     vus_max........................: 2000    min=2000     max=2000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3ef3b9bb-185d-49d1-b4d4-bcf56233ee00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/de54451e-2dbb-4dee-9427-bdfb49921600/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e7326e5a-890f-4171-ee66-39d441eb7d00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 217143     ✗ 0     
     data_received..................: 6.3 GB  10 MB/s
     data_sent......................: 86 MB   139 kB/s
     http_req_blocked...............: avg=2.3ms    min=1.23µs   med=3.06µs  max=1.17s  p(90)=5.33µs  p(95)=10.07µs 
     http_req_connecting............: avg=2.17ms   min=0s       med=0s      max=1.17s  p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=8.66s    min=204.82ms med=8.12s   max=41.17s p(90)=15.55s  p(95)=16.19s  
       { expected_response:true }...: avg=8.66s    min=204.82ms med=8.12s   max=41.17s p(90)=15.55s  p(95)=16.19s  
     http_req_failed................: 0.00%   ✓ 0          ✗ 72381 
     http_req_receiving.............: avg=129.41ms min=28.2µs   med=71.94µs max=12.63s p(90)=9.99ms  p(95)=530.02ms
     http_req_sending...............: avg=5.52ms   min=7.5µs    med=13.85µs max=2.52s  p(90)=47.31µs p(95)=200.31µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s     p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=8.52s    min=204.46ms med=8.03s   max=41.17s p(90)=15.38s  p(95)=16.03s  
     http_reqs......................: 72381   117.076479/s
     iteration_duration.............: avg=8.79s    min=219.11ms med=8.21s   max=41.18s p(90)=15.73s  p(95)=16.45s  
     iterations.....................: 72381   117.076479/s
     vus............................: 239     min=51       max=2000
     vus_max........................: 2000    min=2000     max=2000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0b98dd4b-7a77-430f-49e5-8651346b7100/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/592a4689-a870-42de-884f-a91fb83d2d00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5a7458b1-19f9-4fb0-6425-30bf3f57a600/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 200604     ✗ 0     
     data_received..................: 5.9 GB  9.5 MB/s
     data_sent......................: 79 MB   129 kB/s
     http_req_blocked...............: avg=2.5ms    min=1.3µs    med=3.11µs  max=1.34s  p(90)=5.52µs  p(95)=10.47µs 
     http_req_connecting............: avg=2.41ms   min=0s       med=0s      max=1.28s  p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=9.35s    min=148.27ms med=8.63s   max=45.17s p(90)=16.98s  p(95)=17.69s  
       { expected_response:true }...: avg=9.35s    min=148.27ms med=8.63s   max=45.17s p(90)=16.98s  p(95)=17.69s  
     http_req_failed................: 0.00%   ✓ 0          ✗ 66868 
     http_req_receiving.............: avg=146.17ms min=27.19µs  med=72.37µs max=13.25s p(90)=8.19ms  p(95)=472.93ms
     http_req_sending...............: avg=4.86ms   min=7.46µs   med=13.85µs max=2.05s  p(90)=45.43µs p(95)=153.57µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s     p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=9.2s     min=148.16ms med=8.51s   max=45.17s p(90)=16.8s   p(95)=17.48s  
     http_reqs......................: 66868   108.422718/s
     iteration_duration.............: avg=9.49s    min=155.55ms med=8.86s   max=45.96s p(90)=17.2s   p(95)=18.07s  
     iterations.....................: 66868   108.422718/s
     vus............................: 69      min=51       max=2000
     vus_max........................: 2000    min=2000     max=2000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6111ee0c-9d59-40ef-3c57-b5f2faa16d00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f46fcd96-932c-484d-46e2-dff9dc33af00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/fcf9ab3c-4278-4ae2-b766-204547072c00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 187461     ✗ 0     
     data_received..................: 5.5 GB  8.9 MB/s
     data_sent......................: 74 MB   120 kB/s
     http_req_blocked...............: avg=3.27ms  min=1.9µs   med=4.51µs  max=1.48s  p(90)=7.12µs  p(95)=12.84µs
     http_req_connecting............: avg=3.09ms  min=0s      med=0s      max=1.48s  p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=10.01s  min=28.59ms med=9.91s   max=25.88s p(90)=17.65s  p(95)=18.83s 
       { expected_response:true }...: avg=10.01s  min=28.59ms med=9.91s   max=25.88s p(90)=17.65s  p(95)=18.83s 
     http_req_failed................: 0.00%   ✓ 0          ✗ 62487 
     http_req_receiving.............: avg=32.47ms min=30.29µs med=80.79µs max=4.07s  p(90)=2.8ms   p(95)=55.23ms
     http_req_sending...............: avg=5.51ms  min=8.39µs  med=21.33µs max=2.1s   p(90)=62.46µs p(95)=8.04ms 
     http_req_tls_handshaking.......: avg=0s      min=0s      med=0s      max=0s     p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=9.97s   min=25.03ms med=9.88s   max=25.8s  p(90)=17.57s  p(95)=18.78s 
     http_reqs......................: 62487   101.180882/s
     iteration_duration.............: avg=10.2s   min=62.85ms med=10.07s  max=27.18s p(90)=17.92s  p(95)=19.07s 
     iterations.....................: 62487   101.180882/s
     vus............................: 116     min=51       max=1997
     vus_max........................: 2000    min=2000     max=2000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/02ceee1b-99b9-4b76-e8bd-32315801a500/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/73f32bce-91bd-4b09-0fd1-b00ad8a05200/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f9331e42-521e-42fb-a55e-3b8a417bdd00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 182676    ✗ 0     
     data_received..................: 5.3 GB  8.7 MB/s
     data_sent......................: 72 MB   117 kB/s
     http_req_blocked...............: avg=2.9ms   min=1.84µs  med=4.26µs  max=1.63s  p(90)=6.82µs  p(95)=12.54µs 
     http_req_connecting............: avg=2.82ms  min=0s      med=0s      max=1.63s  p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=10.29s  min=88.89ms med=10.24s  max=27.42s p(90)=18.03s  p(95)=19.46s  
       { expected_response:true }...: avg=10.29s  min=88.89ms med=10.24s  max=27.42s p(90)=18.03s  p(95)=19.46s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 60892 
     http_req_receiving.............: avg=25.79ms min=31.21µs med=77.01µs max=2.69s  p(90)=2.07ms  p(95)=37.41ms 
     http_req_sending...............: avg=4.05ms  min=8.85µs  med=19.16µs max=1.62s  p(90)=47.16µs p(95)=292.98µs
     http_req_tls_handshaking.......: avg=0s      min=0s      med=0s      max=0s     p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=10.26s  min=64.71ms med=10.23s  max=27.38s p(90)=17.99s  p(95)=19.43s  
     http_reqs......................: 60892   98.620795/s
     iteration_duration.............: avg=10.47s  min=98.53ms med=10.36s  max=27.84s p(90)=18.26s  p(95)=19.68s  
     iterations.....................: 60892   98.620795/s
     vus............................: 67      min=50      max=1997
     vus_max........................: 2000    min=2000    max=2000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/50e7ef32-9039-4c61-e5ee-6e5937daa300/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3a999b32-d154-4e4d-4338-02df717d0600/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3b6936fa-66e6-4f7a-3b43-f84f17a16400/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  83% — ✓ 39033 / ✗ 7581
     ✗ no graphql errors
      ↳  83% — ✓ 39033 / ✗ 7581
     ✓ valid response structure

     checks.........................: 88.53% ✓ 117099    ✗ 15162 
     data_received..................: 3.4 GB 5.4 MB/s
     data_sent......................: 56 MB  88 kB/s
     http_req_blocked...............: avg=502.18µs min=1.53µs  med=4.16µs  max=172.11ms p(90)=229.76µs p(95)=791.21µs
     http_req_connecting............: avg=473.69µs min=0s      med=0s      max=172.03ms p(90)=177.31µs p(95)=670.15µs
     http_req_duration..............: avg=13.76s   min=86.82ms med=4.42s   max=1m0s     p(90)=1m0s     p(95)=1m0s    
       { expected_response:true }...: avg=4.78s    min=86.82ms med=4.33s   max=59.31s   p(90)=5.29s    p(95)=5.93s   
     http_req_failed................: 16.26% ✓ 7581      ✗ 39033 
     http_req_receiving.............: avg=213.12µs min=0s      med=93.04µs max=191.1ms  p(90)=144.21µs p(95)=193.92µs
     http_req_sending...............: avg=157.3µs  min=8.52µs  med=22.12µs max=111.74ms p(90)=45.37µs  p(95)=74.13µs 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=13.76s   min=86.66ms med=4.42s   max=1m0s     p(90)=59.99s   p(95)=1m0s    
     http_reqs......................: 46614  73.498745/s
     iteration_duration.............: avg=13.77s   min=94.69ms med=4.43s   max=1m0s     p(90)=1m0s     p(95)=1m0s    
     iterations.....................: 46614  73.498745/s
     vus............................: 41     min=41      max=2000
     vus_max........................: 2000   min=2000    max=2000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5839f739-3df8-4329-1902-298ccb11dd00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2ea8ac3c-b24d-42e0-ddbc-daaa63f79500/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2c7642b8-df5e-46de-ef8d-76344fe29100/public" alt="HTTP Overview" />


  </details>