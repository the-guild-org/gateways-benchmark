## Overview for: `fed-v1-ramping-vus`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. We are running a heavy load of concurrent VUs to measure response time and other stats, during stress. It measure things like memory usage, CPU usage, response times. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was trying to reach 1500 concurrent VUs over 300s


### Comparison


| Gateway                             | duration(p95)⬇️ |  RPS  |         Requests         |                       Durations                        |
| :---------------------------------- | :-------------: | :---: | :----------------------: | :----------------------------------------------------: |
| wundergraph                         |     1243ms      | 1222  |  379045 total, 0 failed  |    avg: 540ms, p95: 1244ms, max: 3093ms, med: 472ms    |
| mesh-bun                            |     3996ms      |  404  |  125434 total, 0 failed  |   avg: 1886ms, p95: 3997ms, max: 6361ms, med: 1727ms   |
| mesh                                |     7612ms      |  204  |  63267 total, 0 failed   |  avg: 3780ms, p95: 7613ms, max: 13521ms, med: 3529ms   |
| stitching-federation-with-yoga-uws  |     35249ms     |  39   |  12829 total, 0 failed   | avg: 20075ms, p95: 35249ms, max: 45969ms, med: 19677ms |
| stitching-federation-with-yoga-deno |     41908ms     |  36   |  12182 total, 0 failed   | avg: 21260ms, p95: 41908ms, max: 55277ms, med: 21061ms |
| apollo-router                       |     45815ms     |  38   | 12628 total, 3595 failed | avg: 20186ms, p95: 45815ms, max: 60031ms, med: 14983ms |
| stitching-federation-with-yoga-bun  |     59998ms     |  30   | 10299 total, 792 failed  | avg: 23948ms, p95: 59998ms, max: 60886ms, med: 25299ms |
| apollo-gateway-with-yoga-bun        |     60000ms     |  31   | 10829 total, 933 failed  | avg: 22091ms, p95: 60001ms, max: 61515ms, med: 17655ms |
| mesh-supergraph                     |     60000ms     |  23   |  7812 total, 989 failed  | avg: 30768ms, p95: 60001ms, max: 60045ms, med: 29203ms |
| apollo-server                       |     60001ms     |  31   | 10619 total, 1936 failed | avg: 22189ms, p95: 60001ms, max: 60185ms, med: 9344ms  |
| mercurius                           |     60001ms     |  14   | 4910 total, 3487 failed  | avg: 47929ms, p95: 60001ms, max: 60020ms, med: 60000ms |
| stitching-federation-with-yoga      |     60001ms     |  19   | 6730 total, 1046 failed  | avg: 34656ms, p95: 60001ms, max: 60148ms, med: 34981ms |
| apollo-gateway-with-yoga            |     60002ms     |  26   | 8885 total, 2070 failed  | avg: 26866ms, p95: 60003ms, max: 60371ms, med: 14077ms |
| apollo-server-node16                |     60002ms     |  26   | 8890 total, 2572 failed  | avg: 26449ms, p95: 60002ms, max: 60404ms, med: 10887ms |
| apollo-gateway-with-yoga-uws        |     60011ms     |  27   | 9232 total, 1746 failed  | avg: 25803ms, p95: 60011ms, max: 60364ms, med: 13671ms |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 379045

     checks.........................: 66.66% ✓ 758090      ✗ 379045
     data_received..................: 55 MB  177 kB/s
     data_sent......................: 450 MB 1.5 MB/s
     http_req_blocked...............: avg=2.12ms   min=900ns   med=2.1µs    max=2.34s p(90)=3.3µs    p(95)=4.1µs   
     http_req_connecting............: avg=2.1ms    min=0s      med=0s       max=2.34s p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=540.09ms min=239.8µs med=471.68ms max=3.09s p(90)=1.09s    p(95)=1.24s   
       { expected_response:true }...: avg=540.09ms min=239.8µs med=471.68ms max=3.09s p(90)=1.09s    p(95)=1.24s   
     http_req_failed................: 0.00%  ✓ 0           ✗ 379045
     http_req_receiving.............: avg=13.07ms  min=8.9µs   med=21.8µs   max=2.3s  p(90)=396.49µs p(95)=63.29ms 
     http_req_sending...............: avg=2.47ms   min=5.6µs   med=11.4µs   max=1.45s p(90)=93.1µs   p(95)=149.09µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s    p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=524.54ms min=216.6µs med=463.61ms max=2.31s p(90)=1.05s    p(95)=1.18s   
     http_reqs......................: 379045 1222.569784/s
     iteration_duration.............: avg=624.78ms min=664.5µs med=562.34ms max=4.65s p(90)=1.23s    p(95)=1.42s   
     iterations.....................: 379045 1222.569784/s
     vus............................: 1      min=0         max=1499
     vus_max........................: 1500   min=1389      max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4585a7cf-80d1-4b02-5423-b4450a20df00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f50c0ddd-3a27-445c-aff7-1a10c9108700/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3fbb8e74-dc78-4970-7359-3db5265d0b00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  0% — ✓ 0 / ✗ 125434
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 125434

     checks.........................: 33.33% ✓ 125434     ✗ 250868
     data_received..................: 119 MB 385 kB/s
     data_sent......................: 149 MB 480 kB/s
     http_req_blocked...............: avg=1.48ms min=1.1µs  med=2.5µs  max=1.37s p(90)=4.5µs    p(95)=6µs    
     http_req_connecting............: avg=1.45ms min=0s     med=0s     max=1.37s p(90)=0s       p(95)=0s     
     http_req_duration..............: avg=1.88s  min=1.84ms med=1.72s  max=6.36s p(90)=3.73s    p(95)=3.99s  
       { expected_response:true }...: avg=1.88s  min=1.84ms med=1.72s  max=6.36s p(90)=3.73s    p(95)=3.99s  
     http_req_failed................: 0.00%  ✓ 0          ✗ 125434
     http_req_receiving.............: avg=7.87ms min=10.6µs med=27.6µs max=1.44s p(90)=333.96µs p(95)=12.44ms
     http_req_sending...............: avg=2.88ms min=7.2µs  med=13.1µs max=1.26s p(90)=105.41µs p(95)=174.9µs
     http_req_tls_handshaking.......: avg=0s     min=0s     med=0s     max=0s    p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=1.87s  min=1.79ms med=1.71s  max=6.26s p(90)=3.68s    p(95)=3.97s  
     http_reqs......................: 125434 404.620196/s
     iteration_duration.............: avg=1.9s   min=2.43ms med=1.73s  max=6.55s p(90)=3.78s    p(95)=4.03s  
     iterations.....................: 125434 404.620196/s
     vus............................: 1      min=0        max=1500
     vus_max........................: 1500   min=1452     max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f9eed01f-4150-4b27-f48b-665750794d00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/14dedf70-cff7-44e1-6a49-05420ad4b400/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7c163c0e-04ae-4f90-624c-03e16bdbc300/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 63267

     checks.........................: 66.66% ✓ 126534    ✗ 63267 
     data_received..................: 72 MB  231 kB/s
     data_sent......................: 75 MB  242 kB/s
     http_req_blocked...............: avg=1.18ms min=1.4µs  med=2.6µs  max=1.35s    p(90)=4.4µs    p(95)=18.09µs 
     http_req_connecting............: avg=1.15ms min=0s     med=0s     max=1s       p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=3.77s  min=4.42ms med=3.52s  max=13.52s   p(90)=7.06s    p(95)=7.61s   
       { expected_response:true }...: avg=3.77s  min=4.42ms med=3.52s  max=13.52s   p(90)=7.06s    p(95)=7.61s   
     http_req_failed................: 0.00%  ✓ 0         ✗ 63267 
     http_req_receiving.............: avg=3.86ms min=14.4µs med=38.4µs max=823.42ms p(90)=266.07µs p(95)=862.42µs
     http_req_sending...............: avg=2.12ms min=8.9µs  med=15µs   max=954.37ms p(90)=114.39µs p(95)=288.77µs
     http_req_tls_handshaking.......: avg=0s     min=0s     med=0s     max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=3.77s  min=4.37ms med=3.5s   max=13.52s   p(90)=7.06s    p(95)=7.6s    
     http_reqs......................: 63267  204.08016/s
     iteration_duration.............: avg=3.78s  min=5.5ms  med=3.53s  max=13.52s   p(90)=7.07s    p(95)=7.62s   
     iterations.....................: 63267  204.08016/s
     vus............................: 6      min=0       max=1500
     vus_max........................: 1500   min=1117    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a78ab5fc-94d7-4764-f291-7948904a9900/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/02b8711c-808a-4472-7f67-6e884a9f9400/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7f063aa0-a7d9-48e6-c42b-b1169767ae00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-uws`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 12808 / ✗ 21
     ✗ valid response structure
      ↳  99% — ✓ 12808 / ✗ 21

     checks.........................: 99.89% ✓ 38445     ✗ 42    
     data_received..................: 1.1 GB 3.4 MB/s
     data_sent......................: 15 MB  46 kB/s
     http_req_blocked...............: avg=3.32ms min=1.5µs  med=3.4µs  max=743.98ms p(90)=155.22µs p(95)=425.76µs
     http_req_connecting............: avg=3.28ms min=0s     med=0s     max=743.92ms p(90)=102µs    p(95)=357.24µs
     http_req_duration..............: avg=20.07s min=1.43s  med=19.67s max=45.96s   p(90)=34.41s   p(95)=35.24s  
       { expected_response:true }...: avg=20.07s min=1.43s  med=19.67s max=45.96s   p(90)=34.41s   p(95)=35.24s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 12829 
     http_req_receiving.............: avg=3.46ms min=26.1µs med=83.5µs max=2.56s    p(90)=307.08µs p(95)=1.82ms  
     http_req_sending...............: avg=2.94ms min=7.4µs  med=18.3µs max=617.58ms p(90)=104.42µs p(95)=10.54ms 
     http_req_tls_handshaking.......: avg=0s     min=0s     med=0s     max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=20.06s min=1.43s  med=19.64s max=45.96s   p(90)=34.41s   p(95)=35.24s  
     http_reqs......................: 12829  39.035822/s
     iteration_duration.............: avg=20.12s min=1.44s  med=19.78s max=45.96s   p(90)=34.5s    p(95)=35.33s  
     iterations.....................: 12829  39.035822/s
     vus............................: 41     min=41      max=1500
     vus_max........................: 1500   min=1500    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a260478c-a168-47ff-0f68-d60a78f2f200/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7b76b0bf-44a3-406e-8b1e-cd2d78672500/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/edffbf1e-5c17-4d58-df32-9c4b4b6f8100/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-deno`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 36546     ✗ 0     
     data_received..................: 1.1 GB  3.2 MB/s
     data_sent......................: 15 MB   44 kB/s
     http_req_blocked...............: avg=1.29ms min=1.4µs    med=3.5µs   max=301.08ms p(90)=274.5µs  p(95)=481.07µs
     http_req_connecting............: avg=1.26ms min=0s       med=0s      max=290.14ms p(90)=168.71µs p(95)=416.77µs
     http_req_duration..............: avg=21.26s min=733.6ms  med=21.06s  max=55.27s   p(90)=37.03s   p(95)=41.9s   
       { expected_response:true }...: avg=21.26s min=733.6ms  med=21.06s  max=55.27s   p(90)=37.03s   p(95)=41.9s   
     http_req_failed................: 0.00%   ✓ 0         ✗ 12182 
     http_req_receiving.............: avg=1.72ms min=41.19µs  med=78.99µs max=338.96ms p(90)=512.64µs p(95)=6.02ms  
     http_req_sending...............: avg=1.4ms  min=6.9µs    med=18.89µs max=213.57ms p(90)=80.19µs  p(95)=5.88ms  
     http_req_tls_handshaking.......: avg=0s     min=0s       med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=21.25s min=733ms    med=21.05s  max=55.27s   p(90)=37.03s   p(95)=41.9s   
     http_reqs......................: 12182   36.470459/s
     iteration_duration.............: avg=21.29s min=776.93ms med=21.08s  max=55.29s   p(90)=37.08s   p(95)=41.92s  
     iterations.....................: 12182   36.470459/s
     vus............................: 49      min=49      max=1499
     vus_max........................: 1500    min=1500    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/34a731b3-aeb0-48a1-5cb4-65c233f05300/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f8e446f2-4cda-4d29-dd20-09ee391bb900/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2407c612-6afd-4d63-187b-6ce5a9457000/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  71% — ✓ 9033 / ✗ 3595
     ✗ no graphql errors
      ↳  71% — ✓ 9033 / ✗ 3595
     ✓ valid response structure

     checks.........................: 79.03% ✓ 27099     ✗ 7190  
     data_received..................: 793 MB 2.4 MB/s
     data_sent......................: 15 MB  46 kB/s
     http_req_blocked...............: avg=917.78µs min=1.6µs    med=4µs     max=421.18ms p(90)=174.32µs p(95)=419.56µs
     http_req_connecting............: avg=860.62µs min=0s       med=0s      max=265.15ms p(90)=115.55µs p(95)=355.36µs
     http_req_duration..............: avg=20.18s   min=535.39ms med=14.98s  max=1m0s     p(90)=42.87s   p(95)=45.81s  
       { expected_response:true }...: avg=12.04s   min=535.39ms med=10.17s  max=59.85s   p(90)=25.28s   p(95)=29.13s  
     http_req_failed................: 28.46% ✓ 3595      ✗ 9033  
     http_req_receiving.............: avg=525.99µs min=0s       med=86.69µs max=295.79ms p(90)=198.62µs p(95)=320.06µs
     http_req_sending...............: avg=605.11µs min=8.5µs    med=22.9µs  max=328.37ms p(90)=63.4µs   p(95)=156.85µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=20.18s   min=535.09ms med=14.98s  max=1m0s     p(90)=42.87s   p(95)=45.81s  
     http_reqs......................: 12628  38.936644/s
     iteration_duration.............: avg=20.2s    min=542.39ms med=14.99s  max=1m0s     p(90)=42.88s   p(95)=45.81s  
     iterations.....................: 12628  38.936644/s
     vus............................: 49     min=0       max=1500
     vus_max........................: 1500   min=1338    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e177dea9-1266-4155-4aa6-759c97c22800/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1dd6d9e0-7565-417e-21a7-f3651858e300/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1656ad09-1e5b-45b8-e326-c44f5abfb400/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-bun`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  92% — ✓ 9507 / ✗ 790
     ✗ no graphql errors
      ↳  92% — ✓ 9507 / ✗ 790
     ✓ valid response structure

     checks.........................: 94.74% ✓ 28499     ✗ 1580  
     data_received..................: 835 MB 2.5 MB/s
     data_sent......................: 13 MB  38 kB/s
     http_req_blocked...............: avg=14.79ms  min=2.2µs    med=4.89µs  max=1.17s    p(90)=650.68µs p(95)=34.58ms 
     http_req_connecting............: avg=14.53ms  min=0s       med=0s      max=1.17s    p(90)=556.54µs p(95)=31.87ms 
     http_req_duration..............: avg=23.94s   min=408ms    med=25.29s  max=1m0s     p(90)=48.28s   p(95)=59.99s  
       { expected_response:true }...: avg=20.94s   min=408ms    med=21.03s  max=59.92s   p(90)=31.51s   p(95)=41.26s  
     http_req_failed................: 7.69%  ✓ 792       ✗ 9507  
     http_req_receiving.............: avg=154.44ms min=0s       med=137.9µs max=15.18s   p(90)=6.06ms   p(95)=198.57ms
     http_req_sending...............: avg=11.34ms  min=11.7µs   med=28.5µs  max=838.64ms p(90)=13.86ms  p(95)=60.03ms 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=23.78s   min=401.83ms med=25s     max=1m0s     p(90)=48.28s   p(95)=59.99s  
     http_reqs......................: 10299  30.76114/s
     iteration_duration.............: avg=24.1s    min=433.22ms med=25.64s  max=1m1s     p(90)=48.88s   p(95)=1m0s    
     iterations.....................: 10275  30.689457/s
     vus............................: 3      min=0       max=1499
     vus_max........................: 1500   min=917     max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d1802e28-ee54-4afc-eb6e-7ddb66a63800/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/075592f6-ba34-4560-88f2-092859dfc800/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2f4c1f34-c1c2-4b07-2201-dc51e4464200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga-bun`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  91% — ✓ 9896 / ✗ 933
     ✗ no graphql errors
      ↳  91% — ✓ 9896 / ✗ 933
     ✓ valid response structure

     checks.........................: 94.08% ✓ 29688     ✗ 1866  
     data_received..................: 868 MB 2.6 MB/s
     data_sent......................: 14 MB  40 kB/s
     http_req_blocked...............: avg=33.75ms  min=2.1µs    med=6.9µs   max=4.76s  p(90)=285.48µs p(95)=61.71ms 
     http_req_connecting............: avg=33.03ms  min=0s       med=0s      max=4.76s  p(90)=174.5µs  p(95)=56.38ms 
     http_req_duration..............: avg=22.09s   min=968.71ms med=17.65s  max=1m1s   p(90)=53.99s   p(95)=1m0s    
       { expected_response:true }...: avg=18.51s   min=968.71ms med=16.36s  max=59.63s p(90)=35.33s   p(95)=38.1s   
     http_req_failed................: 8.61%  ✓ 933       ✗ 9896  
     http_req_receiving.............: avg=129.64ms min=0s       med=136.4µs max=14.83s p(90)=61.79ms  p(95)=915ms   
     http_req_sending...............: avg=34.86ms  min=7.3µs    med=34µs    max=2.75s  p(90)=19.63ms  p(95)=134.25ms
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s     p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=21.92s   min=968.55ms med=17.33s  max=1m1s   p(90)=53.87s   p(95)=1m0s    
     http_reqs......................: 10829  31.859184/s
     iteration_duration.............: avg=22.61s   min=1s       med=18.48s  max=1m3s   p(90)=54.47s   p(95)=1m0s    
     iterations.....................: 10829  31.859184/s
     vus............................: 1      min=0       max=1500
     vus_max........................: 1500   min=1313    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ea43dfe6-f9e8-44b7-df06-961de4866c00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1154427d-d725-4dde-32b6-c216f3f3ff00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/22b4e4cc-c38e-4a62-0d3f-9a1f67566500/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  87% — ✓ 6823 / ✗ 989
     ✗ no graphql errors
      ↳  87% — ✓ 6823 / ✗ 989
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 6823

     checks.........................: 60.79% ✓ 13646     ✗ 8801  
     data_received..................: 601 MB 1.8 MB/s
     data_sent......................: 10 MB  30 kB/s
     http_req_blocked...............: avg=610.01µs min=2.1µs  med=4.5µs  max=507.42ms p(90)=615.19µs p(95)=734.5µs 
     http_req_connecting............: avg=570.47µs min=0s     med=0s     max=507.3ms  p(90)=517.09µs p(95)=636.85µs
     http_req_duration..............: avg=30.76s   min=2.26s  med=29.2s  max=1m0s     p(90)=1m0s     p(95)=1m0s    
       { expected_response:true }...: avg=26.53s   min=2.26s  med=24.48s max=59.84s   p(90)=51.21s   p(95)=53.76s  
     http_req_failed................: 12.66% ✓ 989       ✗ 6823  
     http_req_receiving.............: avg=2.76ms   min=0s     med=194µs  max=7.15s    p(90)=599.88µs p(95)=945.23µs
     http_req_sending...............: avg=261.47µs min=13.5µs med=30.5µs max=149.7ms  p(90)=84.8µs   p(95)=117.98µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=30.76s   min=2.26s  med=29.2s  max=1m0s     p(90)=1m0s     p(95)=1m0s    
     http_reqs......................: 7812   23.012858/s
     iteration_duration.............: avg=30.77s   min=2.28s  med=29.2s  max=1m0s     p(90)=1m0s     p(95)=1m0s    
     iterations.....................: 7812   23.012858/s
     vus............................: 2      min=0       max=1500
     vus_max........................: 1500   min=1070    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/08961d41-87a7-4b59-9187-88d97656de00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b0afe151-860d-407c-d850-ea6eb150d300/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a2c02ccc-704a-4f8c-4d9b-0b59eba36f00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  81% — ✓ 8683 / ✗ 1936
     ✗ no graphql errors
      ↳  81% — ✓ 8683 / ✗ 1936
     ✓ valid response structure

     checks.........................: 87.05% ✓ 26049     ✗ 3872  
     data_received..................: 763 MB 2.2 MB/s
     data_sent......................: 14 MB  40 kB/s
     http_req_blocked...............: avg=3.69ms min=2.1µs  med=5µs     max=805.04ms p(90)=487.74µs p(95)=3.65ms 
     http_req_connecting............: avg=3.43ms min=0s     med=0s      max=803.53ms p(90)=413.68µs p(95)=3.24ms 
     http_req_duration..............: avg=22.18s min=1.79s  med=9.34s   max=1m0s     p(90)=1m0s     p(95)=1m0s   
       { expected_response:true }...: avg=13.75s min=1.79s  med=8.1s    max=59.26s   p(90)=40.35s   p(95)=46.69s 
     http_req_failed................: 18.23% ✓ 1936      ✗ 8683  
     http_req_receiving.............: avg=4.55ms min=0s     med=101.6µs max=1.04s    p(90)=369.5µs  p(95)=2.42ms 
     http_req_sending...............: avg=2.84ms min=9.19µs med=25.7µs  max=685.99ms p(90)=206.44µs p(95)=11.69ms
     http_req_tls_handshaking.......: avg=0s     min=0s     med=0s      max=0s       p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=22.18s min=1.79s  med=9.34s   max=1m0s     p(90)=1m0s     p(95)=1m0s   
     http_reqs......................: 10619  31.231915/s
     iteration_duration.............: avg=22.23s min=1.8s   med=9.38s   max=1m0s     p(90)=1m0s     p(95)=1m0s   
     iterations.....................: 10619  31.231915/s
     vus............................: 1      min=0       max=1500
     vus_max........................: 1500   min=1433    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d0b2a970-4c1f-431b-0658-60737bc8ac00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0f5ed658-f03e-45f4-1754-c39891994900/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c20f85ea-2642-4b0e-c0dc-9b612aaf5900/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  28% — ✓ 1423 / ✗ 3487
     ✗ no graphql errors
      ↳  28% — ✓ 1423 / ✗ 3487
     ✓ valid response structure

     checks.........................: 37.97% ✓ 4269      ✗ 6974  
     data_received..................: 125 MB 368 kB/s
     data_sent......................: 6.8 MB 20 kB/s
     http_req_blocked...............: avg=663.89µs min=3.3µs  med=338µs   max=31.93ms p(90)=1.53ms   p(95)=2.43ms  
     http_req_connecting............: avg=584.96µs min=0s     med=261.6µs max=31.83ms p(90)=1.39ms   p(95)=2.28ms  
     http_req_duration..............: avg=47.92s   min=2.43s  med=59.99s  max=1m0s    p(90)=1m0s     p(95)=1m0s    
       { expected_response:true }...: avg=18.34s   min=2.43s  med=13.34s  max=57.83s  p(90)=43.44s   p(95)=46.44s  
     http_req_failed................: 71.01% ✓ 3487      ✗ 1423  
     http_req_receiving.............: avg=136.2µs  min=0s     med=0s      max=16.79ms p(90)=236.11µs p(95)=393.9µs 
     http_req_sending...............: avg=173.69µs min=12.6µs med=52.65µs max=34.45ms p(90)=105.2µs  p(95)=182.42µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=47.92s   min=2.43s  med=59.99s  max=1m0s    p(90)=1m0s     p(95)=1m0s    
     http_reqs......................: 4910   14.453829/s
     iteration_duration.............: avg=47.93s   min=2.45s  med=1m0s    max=1m0s    p(90)=1m0s     p(95)=1m0s    
     iterations.....................: 4910   14.453829/s
     vus............................: 1      min=0       max=1500
     vus_max........................: 1500   min=1060    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a33d4d23-f909-48a8-3063-0df724bab000/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/daea964f-e8c3-46a1-4c75-c113c2891700/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/19e62c4f-7973-481f-9465-309cb813d700/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  84% — ✓ 5684 / ✗ 1046
     ✗ no graphql errors
      ↳  84% — ✓ 5684 / ✗ 1046
     ✓ valid response structure

     checks.........................: 89.07% ✓ 17052     ✗ 2092  
     data_received..................: 499 MB 1.5 MB/s
     data_sent......................: 9.0 MB 26 kB/s
     http_req_blocked...............: avg=3.59ms min=2.9µs  med=6.6µs    max=648.66ms p(90)=618.78µs p(95)=2.07ms
     http_req_connecting............: avg=3.31ms min=0s     med=0s       max=648.46ms p(90)=512.34µs p(95)=1.68ms
     http_req_duration..............: avg=34.65s min=1.83s  med=34.98s   max=1m0s     p(90)=1m0s     p(95)=1m0s  
       { expected_response:true }...: avg=29.99s min=1.83s  med=30.93s   max=59.99s   p(90)=53.62s   p(95)=58.23s
     http_req_failed................: 15.54% ✓ 1046      ✗ 5684  
     http_req_receiving.............: avg=2.75ms min=0s     med=163.05µs max=542.35ms p(90)=721.34µs p(95)=3.39ms
     http_req_sending...............: avg=3ms    min=12.6µs med=40.7µs   max=565.25ms p(90)=146.42µs p(95)=5.85ms
     http_req_tls_handshaking.......: avg=0s     min=0s     med=0s       max=0s       p(90)=0s       p(95)=0s    
     http_req_waiting...............: avg=34.64s min=1.83s  med=34.98s   max=1m0s     p(90)=1m0s     p(95)=1m0s  
     http_reqs......................: 6730   19.793042/s
     iteration_duration.............: avg=34.72s min=1.86s  med=34.99s   max=1m0s     p(90)=1m0s     p(95)=1m0s  
     iterations.....................: 6730   19.793042/s
     vus............................: 1      min=0       max=1500
     vus_max........................: 1500   min=879     max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8cd2c613-c538-418b-c395-953f9b2e5700/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/53c4ee0d-ff69-48d2-0a2b-08c9d1885300/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/44db0ffa-96e8-4cd2-6c31-13481281d500/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  76% — ✓ 6815 / ✗ 2070
     ✗ no graphql errors
      ↳  76% — ✓ 6815 / ✗ 2070
     ✓ valid response structure

     checks.........................: 83.15% ✓ 20444     ✗ 4140  
     data_received..................: 598 MB 1.8 MB/s
     data_sent......................: 11 MB  34 kB/s
     http_req_blocked...............: avg=4.79ms min=2.29µs   med=6.2µs   max=951.42ms p(90)=1.15ms   p(95)=10.44ms
     http_req_connecting............: avg=4.57ms min=0s       med=0s      max=759.84ms p(90)=873.22µs p(95)=10.24ms
     http_req_duration..............: avg=26.86s min=410.5ms  med=14.07s  max=1m0s     p(90)=1m0s     p(95)=1m0s   
       { expected_response:true }...: avg=16.81s min=410.5ms  med=9.96s   max=59.91s   p(90)=42.13s   p(95)=49.83s 
     http_req_failed................: 23.29% ✓ 2070      ✗ 6815  
     http_req_receiving.............: avg=7.64ms min=0s       med=109.2µs max=9.28s    p(90)=401.39µs p(95)=2.3ms  
     http_req_sending...............: avg=2.98ms min=10µs     med=33.1µs  max=521.56ms p(90)=262.76µs p(95)=13.64ms
     http_req_tls_handshaking.......: avg=0s     min=0s       med=0s      max=0s       p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=26.85s min=410.26ms med=14.07s  max=1m0s     p(90)=1m0s     p(95)=1m0s   
     http_reqs......................: 8885   26.13979/s
     iteration_duration.............: avg=26.91s min=437.68ms med=14.11s  max=1m0s     p(90)=1m0s     p(95)=1m0s   
     iterations.....................: 8884   26.136848/s
     vus............................: 1      min=0       max=1500
     vus_max........................: 1500   min=1268    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c137c783-70f6-4651-0124-324f15630d00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e48c8ccb-b968-40cc-9599-5a6fb1424800/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/06222056-663b-4b87-294c-de72661b5400/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server-node16`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  71% — ✓ 6318 / ✗ 2572
     ✗ no graphql errors
      ↳  71% — ✓ 6318 / ✗ 2572
     ✓ valid response structure

     checks.........................: 78.65% ✓ 18954    ✗ 5144  
     data_received..................: 555 MB 1.6 MB/s
     data_sent......................: 12 MB  34 kB/s
     http_req_blocked...............: avg=3.78ms min=2.2µs  med=5.6µs   max=595.92ms p(90)=1.37ms   p(95)=9.39ms 
     http_req_connecting............: avg=3.49ms min=0s     med=0s      max=595.79ms p(90)=1.22ms   p(95)=8.81ms 
     http_req_duration..............: avg=26.44s min=1.58s  med=10.88s  max=1m0s     p(90)=1m0s     p(95)=1m0s   
       { expected_response:true }...: avg=12.8s  min=1.58s  med=7.65s   max=59.87s   p(90)=39.91s   p(95)=45.81s 
     http_req_failed................: 28.93% ✓ 2572     ✗ 6318  
     http_req_receiving.............: avg=1.02ms min=0s     med=101.9µs max=443.67ms p(90)=343.78µs p(95)=1.02ms 
     http_req_sending...............: avg=2.52ms min=10.3µs med=32.5µs  max=518.95ms p(90)=250.82µs p(95)=11.12ms
     http_req_tls_handshaking.......: avg=0s     min=0s     med=0s      max=0s       p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=26.44s min=1.58s  med=10.88s  max=1m0s     p(90)=1m0s     p(95)=1m0s   
     http_reqs......................: 8890   26.16207/s
     iteration_duration.............: avg=26.48s min=1.6s   med=10.92s  max=1m0s     p(90)=1m0s     p(95)=1m0s   
     iterations.....................: 8890   26.16207/s
     vus............................: 2      min=0      max=1500
     vus_max........................: 1500   min=1187   max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6226826a-b8ed-4075-f318-15b1993d4600/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c25bf529-975d-418d-ee6c-293e4d2c0700/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e75a30c4-5882-4865-a2e8-5a0699312200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga-uws`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  81% — ✓ 7486 / ✗ 1746
     ✗ no graphql errors
      ↳  81% — ✓ 7486 / ✗ 1746
     ✓ valid response structure

     checks.........................: 86.54% ✓ 22458     ✗ 3492  
     data_received..................: 657 MB 1.9 MB/s
     data_sent......................: 12 MB  35 kB/s
     http_req_blocked...............: avg=5.91ms  min=2.1µs    med=5.6µs   max=768.75ms p(90)=659.15µs p(95)=15.43ms
     http_req_connecting............: avg=5.76ms  min=0s       med=0s      max=768.64ms p(90)=553.73µs p(95)=14.4ms 
     http_req_duration..............: avg=25.8s   min=324.37ms med=13.67s  max=1m0s     p(90)=1m0s     p(95)=1m0s   
       { expected_response:true }...: avg=17.82s  min=324.37ms med=10.45s  max=59.93s   p(90)=44.74s   p(95)=51.44s 
     http_req_failed................: 18.91% ✓ 1746      ✗ 7486  
     http_req_receiving.............: avg=12.25ms min=0s       med=105.4µs max=17.41s   p(90)=401.71µs p(95)=1.62ms 
     http_req_sending...............: avg=4.17ms  min=10µs     med=29.05µs max=881ms    p(90)=1.04ms   p(95)=19.22ms
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s      max=0s       p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=25.78s  min=324.11ms med=13.61s  max=1m0s     p(90)=1m0s     p(95)=1m0s   
     http_reqs......................: 9232   27.160742/s
     iteration_duration.............: avg=25.86s  min=349.34ms med=13.82s  max=1m1s     p(90)=1m0s     p(95)=1m0s   
     iterations.....................: 9232   27.160742/s
     vus............................: 2      min=0       max=1499
     vus_max........................: 1500   min=1156    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b7ddb8b3-11e7-43ef-9521-e23ac9565300/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e81e0d20-72f7-44d8-4e5b-3e4a7b830700/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/634f51b2-fd3c-4922-dcb3-ef692b591400/public" alt="HTTP Overview" />


  </details>