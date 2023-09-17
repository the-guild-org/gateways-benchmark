## Overview for: `federation-v1/ramping-vus`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. We are running a heavy load of concurrent VUs to measure response time and other stats, during stress. It measure things like memory usage, CPU usage, response times. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was trying to reach 2000 concurrent VUs over 600s


### Comparison


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ce92a61b-ad61-447a-7389-e8d3bb003200/public" alt="Comparison" />


| Gateway             | duration(p95)⬇️ |  RPS  |          Requests           |                       Durations                        | Notes                                                                                |
| :------------------ | :-------------: | :---: | :-------------------------: | :----------------------------------------------------: | :----------------------------------------------------------------------------------- |
| mercurius           |       0ms       | 1635  | 997575 total, 984244 failed |      avg: 210ms, p95: 0ms, max: 60020ms, med: 0ms      | ❌ 984244 failed requests, 984244 non-200 responses, 984244 unexpected GraphQL errors |
| apollo-router       |     6633ms      |  173  |   106044 total, 0 failed    |  avg: 2603ms, p95: 6633ms, max: 22607ms, med: 2175ms   | ✅                                                                                    |
| wundergraph         |     6778ms      |  165  |   101345 total, 0 failed    |  avg: 2714ms, p95: 6779ms, max: 18831ms, med: 2216ms   | ✅                                                                                    |
| mesh-supergraph-bun |     16007ms     |  119  |    73894 total, 0 failed    |  avg: 8413ms, p95: 16007ms, max: 40457ms, med: 7917ms  | ✅                                                                                    |
| mesh-supergraph     |     18366ms     |  102  |    63380 total, 2 failed    |  avg: 9790ms, p95: 18366ms, max: 26120ms, med: 9730ms  | ❌ 2 failed requests, 2 non-200 responses, 2 unexpected GraphQL errors                |
| mesh-bun            |     18989ms     |  112  |    69322 total, 0 failed    |  avg: 8981ms, p95: 18989ms, max: 43577ms, med: 8292ms  | ✅                                                                                    |
| mesh                |     19601ms     |  99   |    61248 total, 0 failed    | avg: 10219ms, p95: 19601ms, max: 26713ms, med: 10150ms | ✅                                                                                    |
| apollo-server       |     60000ms     |  75   |  47889 total, 7464 failed   | avg: 13385ms, p95: 60001ms, max: 60725ms, med: 4305ms  | ❌ 7464 failed requests, 7464 non-200 responses, 7464 unexpected GraphQL errors       |



<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  1% — ✓ 13331 / ✗ 984244
     ✗ no graphql errors
      ↳  1% — ✓ 13331 / ✗ 984244
     ✓ valid response structure

     checks.........................: 1.99%  ✓ 39993       ✗ 1968488
     data_received..................: 1.2 GB 1.9 MB/s
     data_sent......................: 18 MB  30 kB/s
     http_req_blocked...............: avg=18.99µs  min=0s       med=0s       max=222.66ms p(90)=0s       p(95)=0s      
     http_req_connecting............: avg=18.51µs  min=0s       med=0s       max=221.59ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=209.86ms min=0s       med=0s       max=1m0s     p(90)=0s       p(95)=0s      
       { expected_response:true }...: avg=12.3s    min=324.94ms med=9.25s    max=59.97s   p(90)=27.09s   p(95)=36.28s  
     http_req_failed................: 98.66% ✓ 984244      ✗ 13331  
     http_req_receiving.............: avg=8.5µs    min=0s       med=0s       max=479.43ms p(90)=0s       p(95)=0s      
     http_req_sending...............: avg=3.83µs   min=0s       med=0s       max=159.01ms p(90)=0s       p(95)=0s      
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=209.85ms min=0s       med=0s       max=1m0s     p(90)=0s       p(95)=0s      
     http_reqs......................: 997575 1635.364674/s
     iteration_duration.............: avg=507.01ms min=212.26µs med=310.75ms max=1m0s     p(90)=665.69ms p(95)=793.83ms
     iterations.....................: 997575 1635.364674/s
     vus............................: 8      min=8         max=1997 
     vus_max........................: 2000   min=2000      max=2000 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/bc636f6f-8831-45a1-b443-0d17932fea00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5330707f-963c-44c0-7bab-2e06f5849500/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/aa775bd3-0e2f-4294-c909-d85502944200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 318132     ✗ 0     
     data_received..................: 9.3 GB  15 MB/s
     data_sent......................: 126 MB  206 kB/s
     http_req_blocked...............: avg=41.32ms  min=1.68µs  med=3.71µs  max=12.74s p(90)=6.12µs   p(95)=10.45µs 
     http_req_connecting............: avg=39.21ms  min=0s      med=0s      max=12.74s p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=2.6s     min=6.79ms  med=2.17s   max=22.6s  p(90)=5.34s    p(95)=6.63s   
       { expected_response:true }...: avg=2.6s     min=6.79ms  med=2.17s   max=22.6s  p(90)=5.34s    p(95)=6.63s   
     http_req_failed................: 0.00%   ✓ 0          ✗ 106044
     http_req_receiving.............: avg=598.26ms min=24.03µs med=79.72µs max=20.55s p(90)=1.9s     p(95)=3.89s   
     http_req_sending...............: avg=80.04ms  min=6.25µs  med=16.02µs max=15.39s p(90)=137.91µs p(95)=231.41ms
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s     p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=1.92s    min=6.73ms  med=1.61s   max=11.65s p(90)=4.09s    p(95)=5s      
     http_reqs......................: 106044  173.839037/s
     iteration_duration.............: avg=5.73s    min=12.05ms med=4.54s   max=46.43s p(90)=12.5s    p(95)=15.19s  
     iterations.....................: 106044  173.839037/s
     vus............................: 7       min=7        max=1985
     vus_max........................: 2000    min=2000     max=2000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/110e67c7-aad7-4d94-99ce-71225db66c00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a2e27ac5-c103-47e1-1c75-09aeff048800/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b9507bb3-6f93-45b2-78ce-a2c148c52600/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 304035     ✗ 0     
     data_received..................: 8.9 GB  15 MB/s
     data_sent......................: 120 MB  197 kB/s
     http_req_blocked...............: avg=45.45ms  min=1.62µs  med=3.7µs   max=16.08s p(90)=6.03µs p(95)=10.66µs 
     http_req_connecting............: avg=43.43ms  min=0s      med=0s      max=16.08s p(90)=0s     p(95)=0s      
     http_req_duration..............: avg=2.71s    min=8.6ms   med=2.21s   max=18.83s p(90)=5.86s  p(95)=6.77s   
       { expected_response:true }...: avg=2.71s    min=8.6ms   med=2.21s   max=18.83s p(90)=5.86s  p(95)=6.77s   
     http_req_failed................: 0.00%   ✓ 0          ✗ 101345
     http_req_receiving.............: avg=535.79ms min=23.73µs med=79.82µs max=13.99s p(90)=1.78s  p(95)=3.74s   
     http_req_sending...............: avg=71.74ms  min=7.12µs  med=16.13µs max=12.22s p(90)=148µs  p(95)=244.44ms
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s     p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=2.1s     min=8.5ms   med=1.61s   max=18.83s p(90)=4.76s  p(95)=5.79s   
     http_reqs......................: 101345  165.855995/s
     iteration_duration.............: avg=6.06s    min=18.72ms med=5.01s   max=39.23s p(90)=12.99s p(95)=15.24s  
     iterations.....................: 101345  165.855995/s
     vus............................: 407     min=51       max=1989
     vus_max........................: 2000    min=2000     max=2000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/cb91bec4-59f3-4be0-d77d-dca0b17ee700/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/63f08c76-ea64-411f-5e2d-0f1694f40100/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8b59386d-2dbb-4503-9abd-bb941d26f000/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 221682     ✗ 0     
     data_received..................: 6.5 GB  11 MB/s
     data_sent......................: 88 MB   142 kB/s
     http_req_blocked...............: avg=2.98ms   min=1.36µs   med=3.16µs  max=1.9s   p(90)=5.52µs  p(95)=10.16µs 
     http_req_connecting............: avg=2.8ms    min=0s       med=0s      max=1.9s   p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=8.41s    min=168.59ms med=7.91s   max=40.45s p(90)=15.26s  p(95)=16s     
       { expected_response:true }...: avg=8.41s    min=168.59ms med=7.91s   max=40.45s p(90)=15.26s  p(95)=16s     
     http_req_failed................: 0.00%   ✓ 0          ✗ 73894 
     http_req_receiving.............: avg=130.54ms min=27.91µs  med=69.72µs max=13.15s p(90)=22.1ms  p(95)=614.88ms
     http_req_sending...............: avg=6.02ms   min=7.67µs   med=14µs    max=2.48s  p(90)=43.81µs p(95)=224.12µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s     p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=8.27s    min=168.45ms med=7.82s   max=40.45s p(90)=15.11s  p(95)=15.86s  
     http_reqs......................: 73894   119.869588/s
     iteration_duration.............: avg=8.58s    min=179.37ms med=8.04s   max=41.26s p(90)=15.46s  p(95)=16.46s  
     iterations.....................: 73894   119.869588/s
     vus............................: 38      min=38       max=2000
     vus_max........................: 2000    min=2000     max=2000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a1ed8f24-eafc-4acf-5dfc-f68e6c2f5e00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d5582a70-e866-445a-9d70-a19cbc4cca00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/eaad3cc6-9ed8-4386-db8a-9508a29ea900/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  99% — ✓ 63378 / ✗ 2
     ✗ no graphql errors
      ↳  99% — ✓ 63378 / ✗ 2
     ✓ valid response structure

     checks.........................: 99.99% ✓ 190134    ✗ 4     
     data_received..................: 5.6 GB 9.0 MB/s
     data_sent......................: 75 MB  122 kB/s
     http_req_blocked...............: avg=4.46ms  min=1.8µs   med=4.24µs  max=1.99s  p(90)=7.08µs  p(95)=12.67µs
     http_req_connecting............: avg=4.2ms   min=0s      med=0s      max=1.99s  p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=9.79s   min=50.58ms med=9.72s   max=26.12s p(90)=17.1s   p(95)=18.36s 
       { expected_response:true }...: avg=9.79s   min=50.58ms med=9.73s   max=26.12s p(90)=17.1s   p(95)=18.36s 
     http_req_failed................: 0.00%  ✓ 2         ✗ 63378 
     http_req_receiving.............: avg=46.14ms min=0s      med=78.73µs max=4.83s  p(90)=5.96ms  p(95)=242.7ms
     http_req_sending...............: avg=6.76ms  min=8.87µs  med=19.42µs max=3.79s  p(90)=48.99µs p(95)=1.68ms 
     http_req_tls_handshaking.......: avg=0s      min=0s      med=0s      max=0s     p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=9.73s   min=38.34ms med=9.69s   max=25.11s p(90)=17.04s  p(95)=18.27s 
     http_reqs......................: 63380  102.77284/s
     iteration_duration.............: avg=10.04s  min=81.4ms  med=9.96s   max=28.82s p(90)=17.4s   p(95)=18.9s  
     iterations.....................: 63380  102.77284/s
     vus............................: 159    min=51      max=1999
     vus_max........................: 2000   min=2000    max=2000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/20622606-1230-48a9-4162-8f4ce6c90400/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/82d876d7-9308-4147-c812-96a9820e7800/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3208effc-c0c5-41e7-6b48-6896ba8e9d00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 207966     ✗ 0     
     data_received..................: 6.1 GB  9.8 MB/s
     data_sent......................: 82 MB   133 kB/s
     http_req_blocked...............: avg=3.38ms   min=1.34µs   med=3.23µs  max=1.55s  p(90)=5.53µs   p(95)=10.62µs 
     http_req_connecting............: avg=3.23ms   min=0s       med=0s      max=1.55s  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=8.98s    min=231.09ms med=8.29s   max=43.57s p(90)=16.61s   p(95)=18.98s  
       { expected_response:true }...: avg=8.98s    min=231.09ms med=8.29s   max=43.57s p(90)=16.61s   p(95)=18.98s  
     http_req_failed................: 0.00%   ✓ 0          ✗ 69322 
     http_req_receiving.............: avg=175.14ms min=25.06µs  med=69.77µs max=13.32s p(90)=217.67ms p(95)=860.93ms
     http_req_sending...............: avg=6.55ms   min=7.39µs   med=13.97µs max=4.31s  p(90)=45.32µs  p(95)=177.98µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s     p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=8.79s    min=231.02ms med=8.21s   max=43.27s p(90)=16.31s   p(95)=17.57s  
     http_reqs......................: 69322   112.260401/s
     iteration_duration.............: avg=9.18s    min=241.52ms med=8.45s   max=43.88s p(90)=16.87s   p(95)=19.58s  
     iterations.....................: 69322   112.260401/s
     vus............................: 26      min=26       max=2000
     vus_max........................: 2000    min=2000     max=2000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a233a7ed-6d1e-4372-5d89-58efc756a200/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8bec2a5e-9ab2-45bd-ccc9-71dfac6efd00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e06d0bbb-f2ce-4bb7-3b83-1b89aff3c100/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 183744    ✗ 0     
     data_received..................: 5.4 GB  8.7 MB/s
     data_sent......................: 73 MB   118 kB/s
     http_req_blocked...............: avg=3.26ms  min=1.64µs   med=4.02µs  max=1.17s  p(90)=6.74µs  p(95)=12.52µs 
     http_req_connecting............: avg=3.14ms  min=0s       med=0s      max=1.17s  p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=10.21s  min=117.09ms med=10.14s  max=26.71s p(90)=18.13s  p(95)=19.6s   
       { expected_response:true }...: avg=10.21s  min=117.09ms med=10.14s  max=26.71s p(90)=18.13s  p(95)=19.6s   
     http_req_failed................: 0.00%   ✓ 0         ✗ 61248 
     http_req_receiving.............: avg=27.29ms min=32.12µs  med=73.22µs max=3.26s  p(90)=2.05ms  p(95)=48.32ms 
     http_req_sending...............: avg=5.44ms  min=7.74µs   med=17.62µs max=2.1s   p(90)=50.16µs p(95)=842.65µs
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s      max=0s     p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=10.18s  min=117.03ms med=10.13s  max=26.71s p(90)=18.11s  p(95)=19.57s  
     http_reqs......................: 61248   99.223251/s
     iteration_duration.............: avg=10.4s   min=141.1ms  med=10.3s   max=27.61s p(90)=18.37s  p(95)=19.84s  
     iterations.....................: 61248   99.223251/s
     vus............................: 141     min=51      max=1998
     vus_max........................: 2000    min=2000    max=2000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ec48fb94-ec9b-4736-0f39-4763f1a28b00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e0c30a62-5958-4a11-45a9-d0cab8a09a00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/862eaa0f-1b23-4586-dafc-9e077f9eb000/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  84% — ✓ 40425 / ✗ 7464
     ✗ no graphql errors
      ↳  84% — ✓ 40425 / ✗ 7464
     ✓ valid response structure

     checks.........................: 89.03% ✓ 121275    ✗ 14928 
     data_received..................: 3.6 GB 5.6 MB/s
     data_sent......................: 57 MB  90 kB/s
     http_req_blocked...............: avg=881.64µs min=1.33µs  med=3.32µs  max=536.21ms p(90)=211.22µs p(95)=896.61µs
     http_req_connecting............: avg=833.15µs min=0s      med=0s      max=366.83ms p(90)=165.09µs p(95)=789.5µs 
     http_req_duration..............: avg=13.38s   min=71.72ms med=4.3s    max=1m0s     p(90)=59.99s   p(95)=1m0s    
       { expected_response:true }...: avg=4.77s    min=71.72ms med=4.1s    max=59.97s   p(90)=5.9s     p(95)=6.53s   
     http_req_failed................: 15.58% ✓ 7464      ✗ 40425 
     http_req_receiving.............: avg=462.7µs  min=0s      med=82.06µs max=352.64ms p(90)=136.68µs p(95)=295.49µs
     http_req_sending...............: avg=422.94µs min=7.84µs  med=15.72µs max=331.97ms p(90)=43.62µs  p(95)=82.65µs 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=13.38s   min=71.21ms med=4.3s    max=1m0s     p(90)=59.99s   p(95)=1m0s    
     http_reqs......................: 47889  75.508371/s
     iteration_duration.............: avg=13.4s    min=82.39ms med=4.32s   max=1m0s     p(90)=1m0s     p(95)=1m0s    
     iterations.....................: 47889  75.508371/s
     vus............................: 37     min=37      max=1999
     vus_max........................: 2000   min=2000    max=2000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/dde5a53d-b820-4aee-ad60-99524e4d7f00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/70e03c6c-4019-431c-bf36-a398356adf00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/677faab4-7547-482e-c924-2a6d53c2c500/public" alt="HTTP Overview" />


  </details>