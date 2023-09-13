## Overview for: `fed-v1-ramping-vus`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. We are running a heavy load of concurrent VUs to measure response time and other stats, during stress. It measure things like memory usage, CPU usage, response times. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was trying to reach 2000 concurrent VUs over 600s


### Comparison


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/bcd67209-cf67-4d85-1dde-e44cfac06500/public" alt="Comparison" />


| Gateway         | duration(p95)⬇️ |  RPS  |         Requests         |                       Durations                        | Notes                                                                          |
| :-------------- | :-------------: | :---: | :----------------------: | :----------------------------------------------------: | :----------------------------------------------------------------------------- |
| apollo-router   |     5967ms      |  174  |  107001 total, 0 failed  |  avg: 2557ms, p95: 5967ms, max: 22625ms, med: 2206ms   | ✅                                                                              |
| wundergraph     |     7104ms      |  164  |  100382 total, 0 failed  |  avg: 2764ms, p95: 7104ms, max: 19186ms, med: 2256ms   | ✅                                                                              |
| mesh-bun        |     19777ms     |  95   |  59202 total, 0 failed   | avg: 10706ms, p95: 19778ms, max: 52471ms, med: 10187ms | ✅                                                                              |
| mesh-supergraph |     21236ms     |  90   |  55880 total, 0 failed   | avg: 11318ms, p95: 21236ms, max: 31095ms, med: 11181ms | ✅                                                                              |
| mesh            |     23366ms     |  82   |  51309 total, 0 failed   | avg: 12411ms, p95: 23366ms, max: 31315ms, med: 12174ms | ✅                                                                              |
| apollo-server   |     51090ms     |  63   | 39987 total, 424 failed  | avg: 16131ms, p95: 51090ms, max: 60529ms, med: 7839ms  | ❌ 424 failed requests, 424 non-200 responses, 424 unexpected GraphQL errors    |
| mercurius       |     60000ms     |  38   | 24554 total, 2775 failed | avg: 25266ms, p95: 60001ms, max: 60016ms, med: 20468ms | ❌ 2775 failed requests, 2775 non-200 responses, 2775 unexpected GraphQL errors |



<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 321003     ✗ 0     
     data_received..................: 9.4 GB  15 MB/s
     data_sent......................: 127 MB  208 kB/s
     http_req_blocked...............: avg=40ms     min=1.43µs  med=3.44µs  max=17.67s p(90)=5.52µs   p(95)=9.28µs 
     http_req_connecting............: avg=37.89ms  min=0s      med=0s      max=17.67s p(90)=0s       p(95)=0s     
     http_req_duration..............: avg=2.55s    min=9.46ms  med=2.2s    max=22.62s p(90)=5.1s     p(95)=5.96s  
       { expected_response:true }...: avg=2.55s    min=9.46ms  med=2.2s    max=22.62s p(90)=5.1s     p(95)=5.96s  
     http_req_failed................: 0.00%   ✓ 0          ✗ 107001
     http_req_receiving.............: avg=485.63ms min=21.07µs med=72.94µs max=18.18s p(90)=1.5s     p(95)=2.97s  
     http_req_sending...............: avg=61.7ms   min=6.94µs  med=14.95µs max=15.47s p(90)=119.83µs p(95)=105.6ms
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s     p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=2s       min=9.38ms  med=1.62s   max=13.05s p(90)=4.4s     p(95)=5.12s  
     http_reqs......................: 107001  174.995823/s
     iteration_duration.............: avg=5.75s    min=25.44ms med=4.69s   max=43.5s  p(90)=12.12s   p(95)=14.81s 
     iterations.....................: 107001  174.995823/s
     vus............................: 12      min=12       max=1998
     vus_max........................: 2000    min=2000     max=2000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2f574d0d-f730-49fa-c06d-fca0ae21ba00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e8942e61-8b10-43b2-05b5-de6a8b32f500/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/42f60805-2ddd-4256-b087-2a3ad648fe00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 301146     ✗ 0     
     data_received..................: 8.8 GB  14 MB/s
     data_sent......................: 119 MB  195 kB/s
     http_req_blocked...............: avg=44.33ms min=1.51µs  med=3.77µs  max=15.13s p(90)=6.14µs   p(95)=10.85µs 
     http_req_connecting............: avg=42.48ms min=0s      med=0s      max=15.13s p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=2.76s   min=8.54ms  med=2.25s   max=19.18s p(90)=5.84s    p(95)=7.1s    
       { expected_response:true }...: avg=2.76s   min=8.54ms  med=2.25s   max=19.18s p(90)=5.84s    p(95)=7.1s    
     http_req_failed................: 0.00%   ✓ 0          ✗ 100382
     http_req_receiving.............: avg=575.5ms min=20.46µs med=81.61µs max=17.41s p(90)=1.9s     p(95)=4.26s   
     http_req_sending...............: avg=65.54ms min=7.36µs  med=16.81µs max=13.7s  p(90)=138.45µs p(95)=196.35ms
     http_req_tls_handshaking.......: avg=0s      min=0s      med=0s      max=0s     p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=2.12s   min=7.25ms  med=1.66s   max=12.24s p(90)=4.66s    p(95)=5.63s   
     http_reqs......................: 100382  164.314678/s
     iteration_duration.............: avg=6.15s   min=29.22ms med=4.97s   max=40.56s p(90)=13.39s   p(95)=16.32s  
     iterations.....................: 100382  164.314678/s
     vus............................: 296     min=51       max=1994
     vus_max........................: 2000    min=2000     max=2000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/afc37d82-7bbd-44b9-78a1-da53a7e06200/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e9a9637b-5654-46a7-6f80-151c137f5400/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ed2b9401-31df-46e8-edc1-304436973700/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 177606    ✗ 0     
     data_received..................: 5.2 GB  8.4 MB/s
     data_sent......................: 70 MB   113 kB/s
     http_req_blocked...............: avg=964.86µs min=1.43µs   med=3.29µs  max=536.09ms p(90)=5.83µs   p(95)=10.95µs 
     http_req_connecting............: avg=931.61µs min=0s       med=0s      max=535.98ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=10.7s    min=183.9ms  med=10.18s  max=52.47s   p(90)=19.14s   p(95)=19.77s  
       { expected_response:true }...: avg=10.7s    min=183.9ms  med=10.18s  max=52.47s   p(90)=19.14s   p(95)=19.77s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 59202 
     http_req_receiving.............: avg=133.61ms min=26.84µs  med=94.27µs max=15.02s   p(90)=572.02µs p(95)=75.69ms 
     http_req_sending...............: avg=1.73ms   min=8.03µs   med=14.43µs max=1.12s    p(90)=41.18µs  p(95)=130.26µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=10.57s   min=183.48ms med=10.17s  max=50.63s   p(90)=19.03s   p(95)=19.65s  
     http_reqs......................: 59202   95.517384/s
     iteration_duration.............: avg=10.76s   min=195.34ms med=10.2s   max=52.47s   p(90)=19.21s   p(95)=19.87s  
     iterations.....................: 59202   95.517384/s
     vus............................: 62      min=51      max=2000
     vus_max........................: 2000    min=2000    max=2000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/99b88dec-86c8-4c70-df69-5d4e9562f300/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d646bc40-289c-4522-f937-0c27075bdf00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a6908bcd-9406-48b9-514e-641151a2e000/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 167640    ✗ 0     
     data_received..................: 4.9 GB  7.9 MB/s
     data_sent......................: 66 MB   107 kB/s
     http_req_blocked...............: avg=2.01ms  min=1.68µs  med=3.88µs  max=1.43s  p(90)=6.34µs   p(95)=12.35µs 
     http_req_connecting............: avg=1.92ms  min=0s      med=0s      max=1.43s  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=11.31s  min=39.65ms med=11.18s  max=31.09s p(90)=19.76s   p(95)=21.23s  
       { expected_response:true }...: avg=11.31s  min=39.65ms med=11.18s  max=31.09s p(90)=19.76s   p(95)=21.23s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 55880 
     http_req_receiving.............: avg=12.08ms min=32.76µs med=75.83µs max=2.21s  p(90)=903.36µs p(95)=10.2ms  
     http_req_sending...............: avg=2.42ms  min=9.05µs  med=17.51µs max=1.43s  p(90)=39.64µs  p(95)=139.16µs
     http_req_tls_handshaking.......: avg=0s      min=0s      med=0s      max=0s     p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=11.3s   min=39.58ms med=11.17s  max=31.08s p(90)=19.74s   p(95)=21.19s  
     http_reqs......................: 55880   90.245493/s
     iteration_duration.............: avg=11.42s  min=53.32ms med=11.29s  max=31.13s p(90)=19.92s   p(95)=21.44s  
     iterations.....................: 55880   90.245493/s
     vus............................: 168     min=51      max=1997
     vus_max........................: 2000    min=2000    max=2000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5f5a6f80-ab9f-4a30-973c-a271f5519900/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/daec0c89-c956-4754-d166-8aaeb4ede000/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6680b9aa-63dc-4e6f-fc57-e02eee85ee00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 153927    ✗ 0     
     data_received..................: 4.5 GB  7.3 MB/s
     data_sent......................: 61 MB   98 kB/s
     http_req_blocked...............: avg=1.18ms min=1.62µs   med=3.94µs  max=781.26ms p(90)=6.46µs   p(95)=12.78µs 
     http_req_connecting............: avg=1.15ms min=0s       med=0s      max=781.18ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=12.41s min=203.41ms med=12.17s  max=31.31s   p(90)=21.71s   p(95)=23.36s  
       { expected_response:true }...: avg=12.41s min=203.41ms med=12.17s  max=31.31s   p(90)=21.71s   p(95)=23.36s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 51309 
     http_req_receiving.............: avg=7.44ms min=32.74µs  med=80.64µs max=3.58s    p(90)=832.56µs p(95)=8.02ms  
     http_req_sending...............: avg=1.55ms min=8.24µs   med=18.47µs max=1.2s     p(90)=40.15µs  p(95)=132.05µs
     http_req_tls_handshaking.......: avg=0s     min=0s       med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=12.4s  min=99.23ms  med=12.16s  max=31.31s   p(90)=21.7s    p(95)=23.34s  
     http_reqs......................: 51309   82.642685/s
     iteration_duration.............: avg=12.49s min=213.73ms med=12.27s  max=31.33s   p(90)=21.79s   p(95)=23.42s  
     iterations.....................: 51309   82.642685/s
     vus............................: 29      min=29      max=1999
     vus_max........................: 2000    min=2000    max=2000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/53650e6c-f895-4139-1f81-137481035500/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e06f3399-7714-4c94-be63-e0c83f842500/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0cbcde0b-c048-4bf3-56a3-5934a4873500/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  98% — ✓ 39563 / ✗ 424
     ✗ no graphql errors
      ↳  98% — ✓ 39563 / ✗ 424
     ✓ valid response structure

     checks.........................: 99.29% ✓ 118689    ✗ 848   
     data_received..................: 3.5 GB 5.5 MB/s
     data_sent......................: 48 MB  76 kB/s
     http_req_blocked...............: avg=390.97µs min=1.24µs   med=2.85µs  max=512.93ms p(90)=5.25µs   p(95)=155.97µs
     http_req_connecting............: avg=353.08µs min=0s       med=0s      max=431.97ms p(90)=0s       p(95)=100.36µs
     http_req_duration..............: avg=16.13s   min=395.44ms med=7.83s   max=1m0s     p(90)=44.88s   p(95)=51.09s  
       { expected_response:true }...: avg=15.66s   min=395.44ms med=7.57s   max=59.96s   p(90)=43.32s   p(95)=49.84s  
     http_req_failed................: 1.06%  ✓ 424       ✗ 39563 
     http_req_receiving.............: avg=4.12ms   min=0s       med=84.56µs max=14.95s   p(90)=146.34µs p(95)=531.32µs
     http_req_sending...............: avg=442.29µs min=7.74µs   med=13.84µs max=698.33ms p(90)=33.61µs  p(95)=58.54µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=16.12s   min=395.33ms med=7.83s   max=1m0s     p(90)=44.88s   p(95)=51.08s  
     http_reqs......................: 39987  63.807706/s
     iteration_duration.............: avg=16.15s   min=401.39ms med=7.87s   max=1m0s     p(90)=44.89s   p(95)=51.15s  
     iterations.....................: 39987  63.807706/s
     vus............................: 127    min=51      max=2000
     vus_max........................: 2000   min=2000    max=2000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4443e85a-1b0a-4e8c-8552-2197ac9ad900/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/05f3abba-0dff-44a0-d9b6-83ca1fcaad00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/679fc767-5ece-499d-f08a-1d0d27d17400/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  88% — ✓ 21779 / ✗ 2775
     ✗ no graphql errors
      ↳  88% — ✓ 21779 / ✗ 2775
     ✓ valid response structure

     checks.........................: 92.17% ✓ 65337     ✗ 5550  
     data_received..................: 1.9 GB 3.0 MB/s
     data_sent......................: 30 MB  47 kB/s
     http_req_blocked...............: avg=78.9µs   min=1.63µs   med=3.94µs  max=177.88ms p(90)=144.65µs p(95)=191.27µs
     http_req_connecting............: avg=67.11µs  min=0s       med=0s      max=177.71ms p(90)=97.47µs  p(95)=129.37µs
     http_req_duration..............: avg=25.26s   min=801.75ms med=20.46s  max=1m0s     p(90)=1m0s     p(95)=1m0s    
       { expected_response:true }...: avg=20.84s   min=801.75ms med=17.7s   max=59.99s   p(90)=43.85s   p(95)=49.68s  
     http_req_failed................: 11.30% ✓ 2775      ✗ 21779 
     http_req_receiving.............: avg=164.96µs min=0s       med=96.17µs max=142.43ms p(90)=134.74µs p(95)=157.11µs
     http_req_sending...............: avg=50.85µs  min=8.88µs   med=22.51µs max=69.32ms  p(90)=38.55µs  p(95)=50.04µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=25.26s   min=801.01ms med=20.46s  max=1m0s     p(90)=1m0s     p(95)=1m0s    
     http_reqs......................: 24554  38.365454/s
     iteration_duration.............: avg=25.27s   min=841.44ms med=20.47s  max=1m0s     p(90)=1m0s     p(95)=1m0s    
     iterations.....................: 24554  38.365454/s
     vus............................: 7      min=7       max=2000
     vus_max........................: 2000   min=2000    max=2000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/365bf64b-df51-4244-263d-ab246dc2ce00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a1a6c87e-9a3c-481a-5d45-5563f0f41500/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/75c5b464-ca5b-43d0-11a5-5ca07b834900/public" alt="HTTP Overview" />


  </details>