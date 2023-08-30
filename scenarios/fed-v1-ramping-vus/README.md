## Overview for: `fed-v1-ramping-vus`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. We are running a heavy load of concurrent VUs to measure response time and other stats, during stress. It measure things like memory usage, CPU usage, response times. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was trying to reach 1500 concurrent VUs over 300s


### Comparison


| Gateway                             | duration(p95)⬇️ |  RPS  |         Requests         |                       Durations                        |
| :---------------------------------- | :-------------: | :---: | :----------------------: | :----------------------------------------------------: |
| wundergraph                         |     1933ms      |  813  |  252194 total, 0 failed  |    avg: 918ms, p95: 1934ms, max: 3953ms, med: 833ms    |
| mesh-bun                            |     2600ms      |  673  |  208796 total, 0 failed  |   avg: 1136ms, p95: 2601ms, max: 4935ms, med: 1002ms   |
| mesh-supergraph                     |     12629ms     |  120  |  37272 total, 0 failed   |  avg: 6526ms, p95: 12630ms, max: 16125ms, med: 6446ms  |
| apollo-router                       |     12914ms     |  118  |  36966 total, 0 failed   |  avg: 6603ms, p95: 12914ms, max: 20563ms, med: 5888ms  |
| stitching-federation-with-yoga-bun  |     13311ms     |  138  |  43063 total, 0 failed   |  avg: 5636ms, p95: 13311ms, max: 34402ms, med: 5541ms  |
| mesh                                |     17197ms     |  90   |  28288 total, 0 failed   |  avg: 8659ms, p95: 17198ms, max: 22805ms, med: 8288ms  |
| apollo-gateway-with-yoga-bun        |     19196ms     |  89   |  28605 total, 0 failed   |  avg: 8768ms, p95: 19196ms, max: 40195ms, med: 9416ms  |
| mercurius                           |     20595ms     |  68   |  21289 total, 0 failed   | avg: 11406ms, p95: 20596ms, max: 21414ms, med: 11158ms |
| stitching-federation-with-yoga-deno |     25447ms     |  64   |  20375 total, 0 failed   | avg: 12223ms, p95: 25447ms, max: 48331ms, med: 11439ms |
| apollo-gateway-with-yoga-uws        |     34931ms     |  67   |  21434 total, 0 failed   | avg: 11500ms, p95: 34931ms, max: 51893ms, med: 6182ms  |
| stitching-federation-with-yoga-uws  |     37978ms     |  79   |  25083 total, 21 failed  |  avg: 9916ms, p95: 37979ms, max: 60001ms, med: 5120ms  |
| apollo-server-node16                |     42227ms     |  50   |  16886 total, 16 failed  | avg: 15223ms, p95: 42227ms, max: 60006ms, med: 10312ms |
| apollo-gateway-with-yoga            |     60000ms     |  62   | 20879 total, 2754 failed | avg: 12125ms, p95: 60000ms, max: 60045ms, med: 4049ms  |
| apollo-server                       |     60000ms     |  56   | 18830 total, 2840 failed | avg: 13323ms, p95: 60000ms, max: 60057ms, med: 4195ms  |
| stitching-federation-with-yoga      |     60000ms     |  67   | 22458 total, 2849 failed | avg: 11165ms, p95: 60000ms, max: 60041ms, med: 3305ms  |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 756582     ✗ 0     
     data_received..................: 1.3 GB  4.1 MB/s
     data_sent......................: 299 MB  966 kB/s
     http_req_blocked...............: avg=886.45µs min=800ns  med=1.8µs    max=1.07s p(90)=3.1µs   p(95)=4µs    
     http_req_connecting............: avg=879.18µs min=0s     med=0s       max=1.07s p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=917.83ms min=7.36ms med=832.61ms max=3.95s p(90)=1.69s   p(95)=1.93s  
       { expected_response:true }...: avg=917.83ms min=7.36ms med=832.61ms max=3.95s p(90)=1.69s   p(95)=1.93s  
     http_req_failed................: 0.00%   ✓ 0          ✗ 252194
     http_req_receiving.............: avg=8.99ms   min=13.4µs med=27.6µs   max=1.48s p(90)=183.5µs p(95)=935.1µs
     http_req_sending...............: avg=1.8ms    min=5.9µs  med=10.2µs   max=1.22s p(90)=23.1µs  p(95)=98.7µs 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s       max=0s    p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=907.03ms min=7.28ms med=829.21ms max=3.06s p(90)=1.66s   p(95)=1.87s  
     http_reqs......................: 252194  813.508142/s
     iteration_duration.............: avg=940.58ms min=7.93ms med=850.66ms max=3.95s p(90)=1.74s   p(95)=1.99s  
     iterations.....................: 252194  813.508142/s
     vus............................: 9       min=9        max=1496
     vus_max........................: 1500    min=1500     max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2a3b56bf-d0ea-43d4-82a6-b4ce78641e00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/60d675cd-af69-4ac5-3261-00737fbb4600/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  0% — ✓ 0 / ✗ 208796
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 208796

     checks.........................: 33.33% ✓ 208796     ✗ 417592
     data_received..................: 199 MB 641 kB/s
     data_sent......................: 248 MB 800 kB/s
     http_req_blocked...............: avg=145.86µs min=800ns  med=2µs    max=551ms    p(90)=3.2µs   p(95)=4.1µs   
     http_req_connecting............: avg=137.47µs min=0s     med=0s     max=550.92ms p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=1.13s    min=1.62ms med=1s     max=4.93s    p(90)=2.28s   p(95)=2.6s    
       { expected_response:true }...: avg=1.13s    min=1.62ms med=1s     max=4.93s    p(90)=2.28s   p(95)=2.6s    
     http_req_failed................: 0.00%  ✓ 0          ✗ 208796
     http_req_receiving.............: avg=515.4µs  min=11.2µs med=27.2µs max=673.03ms p(90)=171.3µs p(95)=327.8µs 
     http_req_sending...............: avg=228.72µs min=6.6µs  med=11.8µs max=384.57ms p(90)=40.4µs  p(95)=137.52µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=1.13s    min=1.57ms med=1s     max=4.93s    p(90)=2.28s   p(95)=2.59s   
     http_reqs......................: 208796 673.528782/s
     iteration_duration.............: avg=1.13s    min=1.84ms med=1s     max=4.93s    p(90)=2.28s   p(95)=2.6s    
     iterations.....................: 208796 673.528782/s
     vus............................: 2      min=0        max=1499
     vus_max........................: 1500   min=1331     max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9759b3a7-6c27-4ad3-e2ad-69a2422ddb00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/eafeff62-2ad3-4ec0-9dd5-be6c7d520700/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 37105 / ✗ 167
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 37272

     checks.........................: 66.51% ✓ 74377      ✗ 37439 
     data_received..................: 189 MB 610 kB/s
     data_sent......................: 44 MB  143 kB/s
     http_req_blocked...............: avg=39.13µs min=900ns   med=1.9µs   max=42.48ms p(90)=2.9µs   p(95)=14.7µs 
     http_req_connecting............: avg=34.33µs min=0s      med=0s      max=42.42ms p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=6.52s   min=12.27ms med=6.44s   max=16.12s  p(90)=11.57s  p(95)=12.62s 
       { expected_response:true }...: avg=6.52s   min=12.27ms med=6.44s   max=16.12s  p(90)=11.57s  p(95)=12.62s 
     http_req_failed................: 0.00%  ✓ 0          ✗ 37272 
     http_req_receiving.............: avg=48.97µs min=15.8µs  med=37.29µs max=16.32ms p(90)=62.59µs p(95)=71.84µs
     http_req_sending...............: avg=21.35µs min=5.9µs   med=11.6µs  max=22.82ms p(90)=24.29µs p(95)=35µs   
     http_req_tls_handshaking.......: avg=0s      min=0s      med=0s      max=0s      p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=6.52s   min=12.17ms med=6.44s   max=16.12s  p(90)=11.57s  p(95)=12.62s 
     http_reqs......................: 37272  120.230261/s
     iteration_duration.............: avg=6.52s   min=12.85ms med=6.44s   max=16.12s  p(90)=11.57s  p(95)=12.63s 
     iterations.....................: 37272  120.230261/s
     vus............................: 319    min=50       max=1500
     vus_max........................: 1500   min=1500     max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/45d83dfa-03bd-4282-94e2-52f1f3209f00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0978cdc9-b988-4843-e98a-e76589d15200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 36866 / ✗ 100
     ✗ valid response structure
      ↳  99% — ✓ 36866 / ✗ 100

     checks.........................: 99.81% ✓ 110698     ✗ 200   
     data_received..................: 184 MB 589 kB/s
     data_sent......................: 44 MB  141 kB/s
     http_req_blocked...............: avg=104.89µs min=1µs      med=2.1µs   max=656.75ms p(90)=3.2µs   p(95)=16.8µs 
     http_req_connecting............: avg=89.1µs   min=0s       med=0s      max=656.7ms  p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=6.6s     min=238.47ms med=5.88s   max=20.56s   p(90)=12.23s  p(95)=12.91s 
       { expected_response:true }...: avg=6.6s     min=238.47ms med=5.88s   max=20.56s   p(90)=12.23s  p(95)=12.91s 
     http_req_failed................: 0.00%  ✓ 0          ✗ 36966 
     http_req_receiving.............: avg=1.61ms   min=16.2µs   med=37.69µs max=323.84ms p(90)=66.39µs p(95)=80.19µs
     http_req_sending...............: avg=187.38µs min=5.7µs    med=12.5µs  max=404.01ms p(90)=28.6µs  p(95)=54.89µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s       p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=6.6s     min=238.42ms med=5.88s   max=20.52s   p(90)=12.23s  p(95)=12.91s 
     http_reqs......................: 36966  118.364541/s
     iteration_duration.............: avg=6.6s     min=239.26ms med=5.88s   max=20.56s   p(90)=12.23s  p(95)=12.91s 
     iterations.....................: 36966  118.364541/s
     vus............................: 42     min=42       max=1500
     vus_max........................: 1500   min=1500     max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/379b8a0e-f14d-45e6-6931-b2289d595200/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f06bc16c-bea0-4169-b036-d12ef607d100/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 43060 / ✗ 3
     ✗ valid response structure
      ↳  99% — ✓ 43060 / ✗ 3

     checks.........................: 99.99% ✓ 129183    ✗ 6     
     data_received..................: 215 MB 691 kB/s
     data_sent......................: 51 MB  165 kB/s
     http_req_blocked...............: avg=323.64µs min=1.2µs    med=2.2µs  max=618.39ms p(90)=3.7µs  p(95)=13.79µs 
     http_req_connecting............: avg=310.88µs min=0s       med=0s     max=618.31ms p(90)=0s     p(95)=0s      
     http_req_duration..............: avg=5.63s    min=411.72ms med=5.54s  max=34.4s    p(90)=8.46s  p(95)=13.31s  
       { expected_response:true }...: avg=5.63s    min=411.72ms med=5.54s  max=34.4s    p(90)=8.46s  p(95)=13.31s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 43063 
     http_req_receiving.............: avg=406µs    min=16.7µs   med=37.1µs max=399.3ms  p(90)=66µs   p(95)=216.89µs
     http_req_sending...............: avg=567.69µs min=6.9µs    med=12.1µs max=621.72ms p(90)=62.2µs p(95)=109.1µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=5.63s    min=411.17ms med=5.53s  max=34.4s    p(90)=8.46s  p(95)=13.31s  
     http_reqs......................: 43063  138.73434/s
     iteration_duration.............: avg=5.63s    min=416.29ms med=5.54s  max=34.4s    p(90)=8.46s  p(95)=13.31s  
     iterations.....................: 43063  138.73434/s
     vus............................: 177    min=50      max=1500
     vus_max........................: 1500   min=1500    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/558e7f5a-9f00-4014-cdb5-430614a71500/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/42a39906-2213-41b1-c97b-215cb9614e00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 28093 / ✗ 195
     ✗ valid response structure
      ↳  99% — ✓ 28093 / ✗ 195

     checks.........................: 99.54% ✓ 84474     ✗ 390   
     data_received..................: 142 MB 457 kB/s
     data_sent......................: 34 MB  108 kB/s
     http_req_blocked...............: avg=113.77µs min=1.3µs    med=2.5µs  max=597.31ms p(90)=4.8µs  p(95)=189.69µs
     http_req_connecting............: avg=93.8µs   min=0s       med=0s     max=596.98ms p(90)=0s     p(95)=126.63µs
     http_req_duration..............: avg=8.65s    min=801.24ms med=8.28s  max=22.8s    p(90)=15.62s p(95)=17.19s  
       { expected_response:true }...: avg=8.65s    min=801.24ms med=8.28s  max=22.8s    p(90)=15.62s p(95)=17.19s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 28288 
     http_req_receiving.............: avg=427.38µs min=22.2µs   med=56.4µs max=350.24ms p(90)=83.5µs p(95)=95.9µs  
     http_req_sending...............: avg=163.13µs min=7.4µs    med=14.2µs max=464.94ms p(90)=31.8µs p(95)=70.5µs  
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=8.65s    min=801.13ms med=8.28s  max=22.8s    p(90)=15.62s p(95)=17.19s  
     http_reqs......................: 28288  90.706268/s
     iteration_duration.............: avg=8.65s    min=802.05ms med=8.28s  max=22.8s    p(90)=15.63s p(95)=17.19s  
     iterations.....................: 28288  90.706268/s
     vus............................: 410    min=50      max=1500
     vus_max........................: 1500   min=1500    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2b3d3a8c-562d-42c4-06a6-cc031ed30800/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/eaa00f66-042f-4224-5182-eb15b33b4500/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 28593 / ✗ 12
     ✗ valid response structure
      ↳  99% — ✓ 28593 / ✗ 12

     checks.........................: 99.97% ✓ 85791     ✗ 24    
     data_received..................: 143 MB 447 kB/s
     data_sent......................: 34 MB  107 kB/s
     http_req_blocked...............: avg=233.36µs min=900ns    med=2µs    max=652.66ms p(90)=3.7µs   p(95)=134.1µs 
     http_req_connecting............: avg=226.82µs min=0s       med=0s     max=652.57ms p(90)=0s      p(95)=80.57µs 
     http_req_duration..............: avg=8.76s    min=496.95ms med=9.41s  max=40.19s   p(90)=13.37s  p(95)=19.19s  
       { expected_response:true }...: avg=8.76s    min=496.95ms med=9.41s  max=40.19s   p(90)=13.37s  p(95)=19.19s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 28605 
     http_req_receiving.............: avg=259.23µs min=16.2µs   med=34.1µs max=328.06ms p(90)=66.19µs p(95)=111.97µs
     http_req_sending...............: avg=402.51µs min=5.9µs    med=11.8µs max=334.53ms p(90)=45.1µs  p(95)=93.8µs  
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=8.76s    min=496.87ms med=9.41s  max=40.19s   p(90)=13.37s  p(95)=19.19s  
     http_reqs......................: 28605  89.751234/s
     iteration_duration.............: avg=8.76s    min=497.66ms med=9.41s  max=40.19s   p(90)=13.37s  p(95)=19.19s  
     iterations.....................: 28605  89.751234/s
     vus............................: 257    min=50      max=1500
     vus_max........................: 1500   min=1500    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/dc0262d4-d6e9-4de2-a2d9-23570eb47b00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6872edaf-f17c-4388-eace-43437095f200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 63867     ✗ 0     
     data_received..................: 107 MB  345 kB/s
     data_sent......................: 25 MB   81 kB/s
     http_req_blocked...............: avg=56.21µs min=1.5µs    med=3.1µs  max=85.76ms p(90)=14.4µs p(95)=441.46µs
     http_req_connecting............: avg=46.2µs  min=0s       med=0s     max=84.54ms p(90)=0s     p(95)=367.58µs
     http_req_duration..............: avg=11.4s   min=779.33ms med=11.15s max=21.41s  p(90)=19.73s p(95)=20.59s  
       { expected_response:true }...: avg=11.4s   min=779.33ms med=11.15s max=21.41s  p(90)=19.73s p(95)=20.59s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 21289 
     http_req_receiving.............: avg=86.68µs min=23.7µs   med=69.3µs max=29.69ms p(90)=92.2µs p(95)=101.46µs
     http_req_sending...............: avg=38.29µs min=8.2µs    med=17.3µs max=22.86ms p(90)=42.4µs p(95)=74µs    
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s     max=0s      p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=11.4s   min=779.16ms med=11.15s max=21.41s  p(90)=19.73s p(95)=20.59s  
     http_reqs......................: 21289   68.508324/s
     iteration_duration.............: avg=11.4s   min=780.96ms med=11.15s max=21.41s  p(90)=19.73s p(95)=20.59s  
     iterations.....................: 21289   68.508324/s
     vus............................: 238     min=0       max=1499
     vus_max........................: 1500    min=1198    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8f725d7f-1c6c-4739-dccc-8db5c80b0f00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/378f4617-3d0a-4261-aef4-1a7416f45900/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-deno`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  96% — ✓ 19663 / ✗ 712
     ✗ valid response structure
      ↳  96% — ✓ 19663 / ✗ 712

     checks.........................: 97.67% ✓ 59701    ✗ 1424  
     data_received..................: 109 MB 348 kB/s
     data_sent......................: 24 MB  77 kB/s
     http_req_blocked...............: avg=79.37µs  min=1.1µs    med=2.5µs  max=64.72ms p(90)=18.89µs p(95)=427.3µs 
     http_req_connecting............: avg=65.88µs  min=0s       med=0s     max=64.32ms p(90)=0s      p(95)=319.91µs
     http_req_duration..............: avg=12.22s   min=859.78ms med=11.43s max=48.33s  p(90)=22.56s  p(95)=25.44s  
       { expected_response:true }...: avg=12.22s   min=859.78ms med=11.43s max=48.33s  p(90)=22.56s  p(95)=25.44s  
     http_req_failed................: 0.00%  ✓ 0        ✗ 20375 
     http_req_receiving.............: avg=166.36µs min=20.2µs   med=45.9µs max=40.12ms p(90)=123µs   p(95)=183.8µs 
     http_req_sending...............: avg=96.05µs  min=8.2µs    med=15.1µs max=42.74ms p(90)=71.26µs p(95)=113.69µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=12.22s   min=859.64ms med=11.43s max=48.33s  p(90)=22.56s  p(95)=25.44s  
     http_reqs......................: 20375  64.70905/s
     iteration_duration.............: avg=12.22s   min=861.5ms  med=11.44s max=48.33s  p(90)=22.56s  p(95)=25.44s  
     iterations.....................: 20375  64.70905/s
     vus............................: 54     min=0      max=1500
     vus_max........................: 1500   min=1362   max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d0df2397-9654-4856-84a0-5426357bc800/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/565bb25c-a75e-4018-0e6f-6163f508ca00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga-uws`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  66% — ✓ 14281 / ✗ 7153
     ✗ valid response structure
      ↳  66% — ✓ 14281 / ✗ 7153

     checks.........................: 77.75% ✓ 49996     ✗ 14306 
     data_received..................: 94 MB  297 kB/s
     data_sent......................: 25 MB  81 kB/s
     http_req_blocked...............: avg=49.99µs min=1.2µs   med=2.5µs  max=28.66ms p(90)=8.37µs p(95)=384.61µs
     http_req_connecting............: avg=40.39µs min=0s      med=0s     max=28.61ms p(90)=0s     p(95)=278.34µs
     http_req_duration..............: avg=11.49s  min=72.73ms med=6.18s  max=51.89s  p(90)=27.59s p(95)=34.93s  
       { expected_response:true }...: avg=11.49s  min=72.73ms med=6.18s  max=51.89s  p(90)=27.59s p(95)=34.93s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 21434 
     http_req_receiving.............: avg=66.71µs min=14.7µs  med=50.1µs max=32.99ms p(90)=79.1µs p(95)=90.3µs  
     http_req_sending...............: avg=47.01µs min=7.5µs   med=13.8µs max=37.97ms p(90)=39.6µs p(95)=74.7µs  
     http_req_tls_handshaking.......: avg=0s      min=0s      med=0s     max=0s      p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=11.49s  min=72.65ms med=6.18s  max=51.89s  p(90)=27.59s p(95)=34.93s  
     http_reqs......................: 21434  67.873165/s
     iteration_duration.............: avg=11.5s   min=73.34ms med=6.18s  max=51.89s  p(90)=27.59s p(95)=34.93s  
     iterations.....................: 21434  67.873165/s
     vus............................: 268    min=0       max=1500
     vus_max........................: 1500   min=1491    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e8462aa6-3bb3-4e5b-afd2-9db64c239800/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/59c2825e-099c-44a6-4f55-4b3686abc900/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-uws`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  99% — ✓ 25062 / ✗ 21
     ✗ no graphql errors
      ↳  75% — ✓ 19032 / ✗ 6051
     ✗ valid response structure
      ↳  75% — ✓ 19032 / ✗ 6030

     checks.........................: 83.91% ✓ 63126     ✗ 12102 
     data_received..................: 206 MB 652 kB/s
     data_sent......................: 30 MB  94 kB/s
     http_req_blocked...............: avg=62.21µs min=1.2µs    med=2.8µs  max=69.33ms p(90)=7.5µs    p(95)=220.55µs
     http_req_connecting............: avg=51.78µs min=0s       med=0s     max=69.26ms p(90)=0s       p(95)=141.9µs 
     http_req_duration..............: avg=9.91s   min=144.74ms med=5.12s  max=1m0s    p(90)=25.84s   p(95)=37.97s  
       { expected_response:true }...: avg=9.87s   min=144.74ms med=5.11s  max=59.98s  p(90)=25.72s   p(95)=37.74s  
     http_req_failed................: 0.08%  ✓ 21        ✗ 25062 
     http_req_receiving.............: avg=79.69µs min=0s       med=55.4µs max=56.29ms p(90)=105.18µs p(95)=141.7µs 
     http_req_sending...............: avg=64.46µs min=7.6µs    med=14.7µs max=53.48ms p(90)=39.88µs  p(95)=78.5µs  
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=9.91s   min=144.65ms med=5.12s  max=1m0s    p(90)=25.84s   p(95)=37.97s  
     http_reqs......................: 25083  79.352214/s
     iteration_duration.............: avg=9.91s   min=145.49ms med=5.12s  max=1m0s    p(90)=25.84s   p(95)=37.98s  
     iterations.....................: 25083  79.352214/s
     vus............................: 117    min=0       max=1500
     vus_max........................: 1500   min=1378    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/05dbbe0b-3a06-42a3-aa34-fc736f89ad00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/830b3171-16fd-48df-4c4c-60ad46e85800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server-node16`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  99% — ✓ 16870 / ✗ 16
     ✗ no graphql errors
      ↳  51% — ✓ 8758 / ✗ 8128
     ✗ valid response structure
      ↳  51% — ✓ 8758 / ✗ 8112

     checks.........................: 67.90% ✓ 34386     ✗ 16256 
     data_received..................: 70 MB  210 kB/s
     data_sent......................: 20 MB  61 kB/s
     http_req_blocked...............: avg=255.74µs min=1.1µs   med=2.9µs  max=85.52ms p(90)=17.7µs  p(95)=473.95µs
     http_req_connecting............: avg=243.95µs min=0s      med=0s     max=84.85ms p(90)=0s      p(95)=393.4µs 
     http_req_duration..............: avg=15.22s   min=52.82ms med=10.31s max=1m0s    p(90)=35.43s  p(95)=42.22s  
       { expected_response:true }...: avg=15.18s   min=52.82ms med=10.28s max=58.06s  p(90)=35.37s  p(95)=42.05s  
     http_req_failed................: 0.09%  ✓ 16        ✗ 16870 
     http_req_receiving.............: avg=78.26µs  min=0s      med=65.9µs max=28.94ms p(90)=92.95µs p(95)=105.2µs 
     http_req_sending...............: avg=55.04µs  min=8.4µs   med=16.1µs max=30.95ms p(90)=51.1µs  p(95)=75.07µs 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=15.22s   min=52.69ms med=10.31s max=1m0s    p(90)=35.43s  p(95)=42.22s  
     http_reqs......................: 16886  50.979886/s
     iteration_duration.............: avg=15.22s   min=53.66ms med=10.31s max=1m0s    p(90)=35.43s  p(95)=42.22s  
     iterations.....................: 16886  50.979886/s
     vus............................: 110    min=0       max=1500
     vus_max........................: 1500   min=1436    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/97365159-4309-4374-2f56-b55750679b00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/cad8c0d1-39a5-43b9-3567-91bf9d820100/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  86% — ✓ 18125 / ✗ 2754
     ✗ no graphql errors
      ↳  84% — ✓ 17695 / ✗ 3184
     ✗ valid response structure
      ↳  97% — ✓ 17695 / ✗ 430

     checks.........................: 89.36% ✓ 53515     ✗ 6368  
     data_received..................: 91 MB  271 kB/s
     data_sent......................: 25 MB  75 kB/s
     http_req_blocked...............: avg=193.87µs min=1.3µs   med=3.1µs  max=52.97ms p(90)=358.64µs p(95)=612.56µs
     http_req_connecting............: avg=172.27µs min=0s      med=0s     max=36.52ms p(90)=285.5µs  p(95)=502.24µs
     http_req_duration..............: avg=12.12s   min=89.69ms med=4.04s  max=1m0s    p(90)=59.99s   p(95)=1m0s    
       { expected_response:true }...: avg=4.85s    min=89.69ms med=3.94s  max=59.74s  p(90)=4.82s    p(95)=5.84s   
     http_req_failed................: 13.19% ✓ 2754      ✗ 18125 
     http_req_receiving.............: avg=63.97µs  min=0s      med=58.6µs max=20.2ms  p(90)=92.6µs   p(95)=104.31µs
     http_req_sending...............: avg=45.76µs  min=7.4µs   med=16.8µs max=22.04ms p(90)=60.5µs   p(95)=83.91µs 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=12.12s   min=89.56ms med=4.04s  max=1m0s    p(90)=59.99s   p(95)=1m0s    
     http_reqs......................: 20879  62.446224/s
     iteration_duration.............: avg=12.12s   min=90.44ms med=4.04s  max=1m0s    p(90)=1m0s     p(95)=1m0s    
     iterations.....................: 20879  62.446224/s
     vus............................: 6      min=0       max=1500
     vus_max........................: 1500   min=1394    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/fe5f300f-1a14-41b6-76ac-b6cb37842f00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3a1c6e41-ed1a-4512-a5f8-da30b9773d00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  84% — ✓ 15990 / ✗ 2840
     ✗ no graphql errors
      ↳  83% — ✓ 15636 / ✗ 3194
     ✗ valid response structure
      ↳  97% — ✓ 15636 / ✗ 354

     checks.........................: 88.09% ✓ 47262     ✗ 6388  
     data_received..................: 82 MB  245 kB/s
     data_sent......................: 23 MB  68 kB/s
     http_req_blocked...............: avg=285.64µs min=1.4µs   med=3.1µs  max=44.2ms  p(90)=412.14µs p(95)=962.89µs
     http_req_connecting............: avg=263.66µs min=0s      med=0s     max=43.06ms p(90)=330.01µs p(95)=833.51µs
     http_req_duration..............: avg=13.32s   min=77.73ms med=4.19s  max=1m0s    p(90)=59.99s   p(95)=1m0s    
       { expected_response:true }...: avg=5.03s    min=77.73ms med=4.09s  max=59.78s  p(90)=4.93s    p(95)=6.18s   
     http_req_failed................: 15.08% ✓ 2840      ✗ 15990 
     http_req_receiving.............: avg=68.34µs  min=0s      med=66.2µs max=23.09ms p(90)=96.2µs   p(95)=106.7µs 
     http_req_sending...............: avg=57.36µs  min=7.7µs   med=18µs   max=27.67ms p(90)=62µs     p(95)=83µs    
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=13.32s   min=77.59ms med=4.19s  max=1m0s    p(90)=59.99s   p(95)=1m0s    
     http_reqs......................: 18830  56.304434/s
     iteration_duration.............: avg=13.32s   min=78.64ms med=4.19s  max=1m0s    p(90)=1m0s     p(95)=1m0s    
     iterations.....................: 18830  56.304434/s
     vus............................: 33     min=0       max=1500
     vus_max........................: 1500   min=1396    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2e03a6c2-5bc0-4fca-eae4-397fefe3d100/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/09a29a8a-93cc-402e-a782-d748f8dbbb00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  87% — ✓ 19609 / ✗ 2849
     ✗ no graphql errors
      ↳  87% — ✓ 19543 / ✗ 2915
     ✗ valid response structure
      ↳  99% — ✓ 19543 / ✗ 66

     checks.........................: 90.96% ✓ 58695     ✗ 5830  
     data_received..................: 100 MB 298 kB/s
     data_sent......................: 27 MB  80 kB/s
     http_req_blocked...............: avg=303.37µs min=1.6µs   med=3.5µs  max=46.18ms p(90)=420.28µs p(95)=919.37µs
     http_req_connecting............: avg=274.25µs min=0s      med=0s     max=46.12ms p(90)=333.91µs p(95)=724.11µs
     http_req_duration..............: avg=11.16s   min=75.63ms med=3.3s   max=1m0s    p(90)=59.99s   p(95)=1m0s    
       { expected_response:true }...: avg=4.07s    min=75.63ms med=3.24s  max=58.86s  p(90)=3.73s    p(95)=4.67s   
     http_req_failed................: 12.68% ✓ 2849      ✗ 19609 
     http_req_receiving.............: avg=79µs     min=0s      med=72.5µs max=23.03ms p(90)=105.81µs p(95)=120.7µs 
     http_req_sending...............: avg=62.61µs  min=9.8µs   med=21.7µs max=33.71ms p(90)=67.8µs   p(95)=92.52µs 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=11.16s   min=75.54ms med=3.3s   max=1m0s    p(90)=59.99s   p(95)=1m0s    
     http_reqs......................: 22458  67.152952/s
     iteration_duration.............: avg=11.16s   min=76.4ms  med=3.3s   max=1m0s    p(90)=1m0s     p(95)=1m0s    
     iterations.....................: 22458  67.152952/s
     vus............................: 28     min=0       max=1500
     vus_max........................: 1500   min=1218    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a9ad3345-6d35-4d83-d328-889d24cf1a00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/28b0d85d-7597-4011-fb4c-c83bd8372c00/public" alt="HTTP Overview" />


  </details>