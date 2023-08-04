## Overview for: `fed-v1-ramping-vus`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. We are running a heavy load of concurrent VUs to measure response time and other stats, during stress. It measure things like memory usage, CPU usage, response times. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was trying to reach 1500 concurrent VUs over 300s


### Comparison


| Gateway                             | duration(p95)⬇️ |  RPS  |         Requests         |                       Durations                        |
| :---------------------------------- | :-------------: | :---: | :----------------------: | :----------------------------------------------------: |
| wundergraph                         |     2740ms      |  586  |  181739 total, 0 failed  |   avg: 1291ms, p95: 2740ms, max: 5385ms, med: 1180ms   |
| stitching-federation-with-yoga-bun  |     13430ms     |  136  |  42522 total, 0 failed   |  avg: 5734ms, p95: 13431ms, max: 35222ms, med: 5418ms  |
| stitching-federation-with-yoga-deno |     14271ms     |  101  |  31454 total, 0 failed   |  avg: 7786ms, p95: 14272ms, max: 19675ms, med: 7577ms  |
| mesh-supergraph                     |     15050ms     |  99   |  30885 total, 0 failed   |  avg: 7917ms, p95: 15051ms, max: 18997ms, med: 7742ms  |
| apollo-router                       |     16033ms     |  87   |  27978 total, 0 failed   |  avg: 8873ms, p95: 16033ms, max: 17026ms, med: 8688ms  |
| mesh                                |     18876ms     |  79   |  24884 total, 0 failed   |  avg: 9947ms, p95: 18877ms, max: 25133ms, med: 9853ms  |
| mercurius                           |     20832ms     |  67   |  21042 total, 0 failed   | avg: 11591ms, p95: 20832ms, max: 21443ms, med: 11578ms |
| apollo-gateway-with-yoga-uws        |     41975ms     |  44   |  14690 total, 0 failed   | avg: 17693ms, p95: 41976ms, max: 59456ms, med: 13491ms |
| apollo-server-node16                |     57649ms     |  38   | 12985 total, 591 failed  | avg: 18677ms, p95: 57650ms, max: 60050ms, med: 11643ms |
| apollo-gateway-with-yoga            |     60000ms     |  65   | 21896 total, 2729 failed | avg: 11546ms, p95: 60000ms, max: 60069ms, med: 3891ms  |
| apollo-server                       |     60000ms     |  70   | 23605 total, 2667 failed | avg: 10713ms, p95: 60000ms, max: 60048ms, med: 3734ms  |
| stitching-federation-with-yoga      |     60000ms     |  60   | 20147 total, 2946 failed | avg: 12560ms, p95: 60000ms, max: 60039ms, med: 3520ms  |
| stitching-federation-with-yoga-uws  |     60000ms     |  37   | 12634 total, 716 failed  | avg: 18503ms, p95: 60000ms, max: 60029ms, med: 12152ms |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 545217     ✗ 0     
     data_received..................: 905 MB  2.9 MB/s
     data_sent......................: 216 MB  696 kB/s
     http_req_blocked...............: avg=1.35ms min=1µs     med=2.7µs  max=1.43s p(90)=4.6µs    p(95)=6.3µs   
     http_req_connecting............: avg=1.33ms min=0s      med=0s     max=1.43s p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=1.29s  min=10.61ms med=1.17s  max=5.38s p(90)=2.4s     p(95)=2.74s   
       { expected_response:true }...: avg=1.29s  min=10.61ms med=1.17s  max=5.38s p(90)=2.4s     p(95)=2.74s   
     http_req_failed................: 0.00%   ✓ 0          ✗ 181739
     http_req_receiving.............: avg=6.84ms min=15µs    med=41.6µs max=1.19s p(90)=249.45µs p(95)=894.21µs
     http_req_sending...............: avg=2.5ms  min=7.6µs   med=14.4µs max=1.2s  p(90)=42.3µs   p(95)=148.5µs 
     http_req_tls_handshaking.......: avg=0s     min=0s      med=0s     max=0s    p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=1.28s  min=10.48ms med=1.17s  max=4.68s p(90)=2.38s    p(95)=2.7s    
     http_reqs......................: 181739  586.211104/s
     iteration_duration.............: avg=1.3s   min=11.51ms med=1.19s  max=5.53s p(90)=2.45s    p(95)=2.77s   
     iterations.....................: 181739  586.211104/s
     vus............................: 1       min=0        max=1499
     vus_max........................: 1500    min=1398     max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c2dd3905-2f05-4f88-c8f3-e1783a30d600/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0a25c361-7fe4-460e-18af-b0aa43109700/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 42505 / ✗ 17
     ✗ valid response structure
      ↳  99% — ✓ 42505 / ✗ 17

     checks.........................: 99.97% ✓ 127532     ✗ 34    
     data_received..................: 212 MB 683 kB/s
     data_sent......................: 51 MB  162 kB/s
     http_req_blocked...............: avg=187.34µs min=900ns    med=1.8µs  max=671.57ms p(90)=3µs    p(95)=11.9µs 
     http_req_connecting............: avg=167.5µs  min=0s       med=0s     max=464.3ms  p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=5.73s    min=461ms    med=5.41s  max=35.22s   p(90)=8.76s  p(95)=13.43s 
       { expected_response:true }...: avg=5.73s    min=461ms    med=5.41s  max=35.22s   p(90)=8.76s  p(95)=13.43s 
     http_req_failed................: 0.00%  ✓ 0          ✗ 42522 
     http_req_receiving.............: avg=2.21ms   min=15.8µs   med=27.6µs max=365.15ms p(90)=57.4µs p(95)=189µs  
     http_req_sending...............: avg=283.72µs min=5.8µs    med=10.1µs max=317.27ms p(90)=28.8µs p(95)=85.99µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=5.73s    min=460.92ms med=5.41s  max=35.22s   p(90)=8.76s  p(95)=13.43s 
     http_reqs......................: 42522  136.825111/s
     iteration_duration.............: avg=5.73s    min=461.88ms med=5.42s  max=35.22s   p(90)=8.76s  p(95)=13.43s 
     iterations.....................: 42522  136.825111/s
     vus............................: 423    min=50       max=1500
     vus_max........................: 1500   min=1500     max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/873e8cff-e90c-4f02-a666-b4437d2c5f00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/dc936a26-ff25-4bb0-c4de-6336754b1700/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-deno`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 31346 / ✗ 108
     ✗ valid response structure
      ↳  99% — ✓ 31346 / ✗ 108

     checks.........................: 99.77% ✓ 94146      ✗ 216   
     data_received..................: 158 MB 509 kB/s
     data_sent......................: 37 MB  120 kB/s
     http_req_blocked...............: avg=34.54µs min=800ns    med=1.9µs   max=23.6ms  p(90)=3.4µs   p(95)=104.86µs
     http_req_connecting............: avg=26.73µs min=0s       med=0s      max=23.55ms p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=7.78s   min=498.36ms med=7.57s   max=19.67s  p(90)=13.61s  p(95)=14.27s  
       { expected_response:true }...: avg=7.78s   min=498.36ms med=7.57s   max=19.67s  p(90)=13.61s  p(95)=14.27s  
     http_req_failed................: 0.00%  ✓ 0          ✗ 31454 
     http_req_receiving.............: avg=85.3µs  min=12.9µs   med=27.19µs max=29.3ms  p(90)=71.59µs p(95)=88.99µs 
     http_req_sending...............: avg=54.78µs min=5.8µs    med=11µs    max=24.87ms p(90)=31.56µs p(95)=73.53µs 
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s      max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=7.78s   min=498.32ms med=7.57s   max=19.67s  p(90)=13.61s  p(95)=14.27s  
     http_reqs......................: 31454  101.217431/s
     iteration_duration.............: avg=7.78s   min=498.86ms med=7.57s   max=19.67s  p(90)=13.61s  p(95)=14.27s  
     iterations.....................: 31454  101.217431/s
     vus............................: 373    min=50       max=1500
     vus_max........................: 1500   min=1500     max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a54fc438-cde3-41b0-9a1f-85ca58df8c00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/69ad4313-77eb-4588-c427-a107b7944800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 30695 / ✗ 190
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 30885

     checks.........................: 66.46% ✓ 61580     ✗ 31075 
     data_received..................: 157 MB 505 kB/s
     data_sent......................: 37 MB  118 kB/s
     http_req_blocked...............: avg=29.73µs min=1.2µs    med=2.2µs  max=17.06ms p(90)=4.2µs  p(95)=23.78µs
     http_req_connecting............: avg=23.3µs  min=0s       med=0s     max=17ms    p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=7.91s   min=684.51ms med=7.74s  max=18.99s  p(90)=14.04s p(95)=15.05s 
       { expected_response:true }...: avg=7.91s   min=684.51ms med=7.74s  max=18.99s  p(90)=14.04s p(95)=15.05s 
     http_req_failed................: 0.00%  ✓ 0         ✗ 30885 
     http_req_receiving.............: avg=62.89µs min=21.2µs   med=56.3µs max=17.43ms p(90)=79.3µs p(95)=89.8µs 
     http_req_sending...............: avg=23.93µs min=7.8µs    med=13.1µs max=22.07ms p(90)=27.8µs p(95)=54µs   
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s     max=0s      p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=7.91s   min=684.43ms med=7.74s  max=18.99s  p(90)=14.04s p(95)=15.05s 
     http_reqs......................: 30885  99.230154/s
     iteration_duration.............: avg=7.91s   min=684.83ms med=7.74s  max=18.99s  p(90)=14.04s p(95)=15.05s 
     iterations.....................: 30885  99.230154/s
     vus............................: 144    min=0       max=1499
     vus_max........................: 1500   min=1398    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ff3362dd-d079-4d48-83a4-a96ec27e2f00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c6e9fe0d-fe9a-46ba-0b14-f51f664ced00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 27976 / ✗ 2
     ✗ valid response structure
      ↳  99% — ✓ 27976 / ✗ 2

     checks.........................: 99.99% ✓ 83930     ✗ 4     
     data_received..................: 139 MB 437 kB/s
     data_sent......................: 33 MB  104 kB/s
     http_req_blocked...............: avg=46.05µs min=1.1µs    med=2.7µs   max=22.67ms p(90)=5.9µs   p(95)=211.72µs
     http_req_connecting............: avg=37.46µs min=0s       med=0s      max=22.6ms  p(90)=0s      p(95)=140.15µs
     http_req_duration..............: avg=8.87s   min=320.62ms med=8.68s   max=17.02s  p(90)=15.2s   p(95)=16.03s  
       { expected_response:true }...: avg=8.87s   min=320.62ms med=8.68s   max=17.02s  p(90)=15.2s   p(95)=16.03s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 27978 
     http_req_receiving.............: avg=80.52µs min=24.1µs   med=64.19µs max=16.02ms p(90)=107.1µs p(95)=131.2µs 
     http_req_sending...............: avg=41.76µs min=9.19µs   med=16.2µs  max=23.44ms p(90)=46.43µs p(95)=69.61µs 
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s      max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=8.87s   min=320.52ms med=8.68s   max=17.02s  p(90)=15.2s   p(95)=16.03s  
     http_reqs......................: 27978  87.823309/s
     iteration_duration.............: avg=8.87s   min=321.45ms med=8.68s   max=17.02s  p(90)=15.2s   p(95)=16.03s  
     iterations.....................: 27978  87.823309/s
     vus............................: 80     min=0       max=1498
     vus_max........................: 1500   min=1029    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7fce8bfd-ddeb-4202-821d-d9cb08ce7b00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e1c6b324-8306-4a58-d61e-c8b74a3aac00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 24748 / ✗ 136
     ✗ valid response structure
      ↳  99% — ✓ 24748 / ✗ 136

     checks.........................: 99.63% ✓ 74380     ✗ 272   
     data_received..................: 126 MB 402 kB/s
     data_sent......................: 30 MB  94 kB/s
     http_req_blocked...............: avg=50.71µs min=1.2µs    med=2.5µs  max=93.86ms p(90)=4.5µs  p(95)=207.23µs
     http_req_connecting............: avg=41.26µs min=0s       med=0s     max=93.8ms  p(90)=0s     p(95)=138.01µs
     http_req_duration..............: avg=9.94s   min=826.83ms med=9.85s  max=25.13s  p(90)=17.17s p(95)=18.87s  
       { expected_response:true }...: avg=9.94s   min=826.83ms med=9.85s  max=25.13s  p(90)=17.17s p(95)=18.87s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 24884 
     http_req_receiving.............: avg=77.71µs min=21.8µs   med=57µs   max=73.58ms p(90)=83.7µs p(95)=95.79µs 
     http_req_sending...............: avg=61.1µs  min=7.6µs    med=14.7µs max=50.3ms  p(90)=34.5µs p(95)=68.2µs  
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s     max=0s      p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=9.94s   min=826.66ms med=9.85s  max=25.13s  p(90)=17.17s p(95)=18.87s  
     http_reqs......................: 24884  79.276111/s
     iteration_duration.............: avg=9.94s   min=828.01ms med=9.85s  max=25.13s  p(90)=17.17s p(95)=18.87s  
     iterations.....................: 24884  79.276111/s
     vus............................: 87     min=0       max=1500
     vus_max........................: 1500   min=918     max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5dfa55ee-5cab-4424-5da6-19c7fb43b700/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7c0bdf27-1570-4f75-8a09-8d8a21168400/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 63126     ✗ 0     
     data_received..................: 106 MB  340 kB/s
     data_sent......................: 25 MB   80 kB/s
     http_req_blocked...............: avg=45.79µs min=1.3µs  med=3.3µs  max=25.33ms p(90)=14.4µs  p(95)=429.59µs
     http_req_connecting............: avg=35.4µs  min=0s     med=0s     max=25.25ms p(90)=0s      p(95)=351.98µs
     http_req_duration..............: avg=11.59s  min=1.12s  med=11.57s max=21.44s  p(90)=19.46s  p(95)=20.83s  
       { expected_response:true }...: avg=11.59s  min=1.12s  med=11.57s max=21.44s  p(90)=19.46s  p(95)=20.83s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 21042 
     http_req_receiving.............: avg=80.25µs min=22.2µs med=72.8µs max=13.76ms p(90)=99µs    p(95)=110.9µs 
     http_req_sending...............: avg=37.89µs min=7.2µs  med=18.3µs max=20.23ms p(90)=45.99µs p(95)=75.8µs  
     http_req_tls_handshaking.......: avg=0s      min=0s     med=0s     max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=11.59s  min=1.12s  med=11.57s max=21.44s  p(90)=19.46s  p(95)=20.83s  
     http_reqs......................: 21042   67.593742/s
     iteration_duration.............: avg=11.59s  min=1.13s  med=11.57s max=21.44s  p(90)=19.46s  p(95)=20.83s  
     iterations.....................: 21042   67.593742/s
     vus............................: 77      min=0       max=1499
     vus_max........................: 1500    min=1444    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6aba7c7d-3b96-4426-9c81-4ad502d41000/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c106fb2b-2c5c-46e6-1bca-9c08c523f800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga-uws`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  53% — ✓ 7890 / ✗ 6800
     ✗ valid response structure
      ↳  53% — ✓ 7890 / ✗ 6800

     checks.........................: 69.14% ✓ 30470    ✗ 13600 
     data_received..................: 59 MB  181 kB/s
     data_sent......................: 17 MB  53 kB/s
     http_req_blocked...............: avg=114.2µs  min=1.5µs   med=2.9µs  max=64.78ms p(90)=192.4µs  p(95)=567.79µs
     http_req_connecting............: avg=97.36µs  min=0s      med=0s     max=64.68ms p(90)=117.03µs p(95)=474.05µs
     http_req_duration..............: avg=17.69s   min=79.27ms med=13.49s max=59.45s  p(90)=39.09s   p(95)=41.97s  
       { expected_response:true }...: avg=17.69s   min=79.27ms med=13.49s max=59.45s  p(90)=39.09s   p(95)=41.97s  
     http_req_failed................: 0.00%  ✓ 0        ✗ 14690 
     http_req_receiving.............: avg=102.57µs min=17.5µs  med=66.4µs max=31.5ms  p(90)=120.09µs p(95)=164.55µs
     http_req_sending...............: avg=90.53µs  min=10µs    med=17.8µs max=75.36ms p(90)=74.21µs  p(95)=115.9µs 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=17.69s   min=79.14ms med=13.49s max=59.45s  p(90)=39.09s   p(95)=41.97s  
     http_reqs......................: 14690  44.93741/s
     iteration_duration.............: avg=17.69s   min=79.58ms med=13.49s max=59.45s  p(90)=39.09s   p(95)=41.97s  
     iterations.....................: 14690  44.93741/s
     vus............................: 182    min=0      max=1500
     vus_max........................: 1500   min=924    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2a884acb-3216-4649-b282-2e8102fee600/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c8eada43-d609-44e9-640b-e74c41d30b00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server-node16`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  95% — ✓ 12394 / ✗ 591
     ✗ no graphql errors
      ↳  45% — ✓ 5934 / ✗ 7051
     ✗ valid response structure
      ↳  47% — ✓ 5934 / ✗ 6460

     checks.........................: 63.24% ✓ 24262     ✗ 14102 
     data_received..................: 48 MB  141 kB/s
     data_sent......................: 16 MB  46 kB/s
     http_req_blocked...............: avg=100.06µs min=1.4µs    med=2.8µs  max=30.21ms p(90)=225.82µs p(95)=600.18µs
     http_req_connecting............: avg=84.27µs  min=0s       med=0s     max=30.13ms p(90)=145.52µs p(95)=506.76µs
     http_req_duration..............: avg=18.67s   min=106.53ms med=11.64s max=1m0s    p(90)=46.47s   p(95)=57.64s  
       { expected_response:true }...: avg=16.7s    min=106.53ms med=10.78s max=59.97s  p(90)=39.94s   p(95)=48s     
     http_req_failed................: 4.55%  ✓ 591       ✗ 12394 
     http_req_receiving.............: avg=85.5µs   min=0s       med=75.4µs max=7.5ms   p(90)=121.06µs p(95)=151.26µs
     http_req_sending...............: avg=48.56µs  min=8.8µs    med=17.8µs max=18.78ms p(90)=64.76µs  p(95)=90.38µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=18.67s   min=106.34ms med=11.64s max=1m0s    p(90)=46.47s   p(95)=57.64s  
     http_reqs......................: 12985  38.237512/s
     iteration_duration.............: avg=18.67s   min=107.61ms med=11.64s max=1m0s    p(90)=46.47s   p(95)=57.65s  
     iterations.....................: 12985  38.237512/s
     vus............................: 5      min=0       max=1500
     vus_max........................: 1500   min=1195    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7872ffca-d832-4b51-0fb7-5c9a84d7da00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3abdf69e-c198-42cd-4e76-0adc3350fd00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  87% — ✓ 19167 / ✗ 2729
     ✗ no graphql errors
      ↳  86% — ✓ 18898 / ✗ 2998
     ✗ valid response structure
      ↳  98% — ✓ 18898 / ✗ 269

     checks.........................: 90.47% ✓ 56963     ✗ 5996  
     data_received..................: 96 MB  287 kB/s
     data_sent......................: 26 MB  78 kB/s
     http_req_blocked...............: avg=217.64µs min=1.5µs   med=2.8µs  max=61.87ms p(90)=322.85µs p(95)=591.23µs
     http_req_connecting............: avg=193.97µs min=0s      med=0s     max=61.68ms p(90)=260.8µs  p(95)=464.75µs
     http_req_duration..............: avg=11.54s   min=77.53ms med=3.89s  max=1m0s    p(90)=59.99s   p(95)=1m0s    
       { expected_response:true }...: avg=4.64s    min=77.53ms med=3.82s  max=59.98s  p(90)=4.43s    p(95)=5.26s   
     http_req_failed................: 12.46% ✓ 2729      ✗ 19167 
     http_req_receiving.............: avg=56.95µs  min=0s      med=53.4µs max=34.7ms  p(90)=81.7µs   p(95)=90.6µs  
     http_req_sending...............: avg=56.86µs  min=7.7µs   med=14.8µs max=79.54ms p(90)=51.1µs   p(95)=69.72µs 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=11.54s   min=77.42ms med=3.89s  max=1m0s    p(90)=59.99s   p(95)=1m0s    
     http_reqs......................: 21896  65.489076/s
     iteration_duration.............: avg=11.54s   min=78.31ms med=3.89s  max=1m0s    p(90)=1m0s     p(95)=1m0s    
     iterations.....................: 21896  65.489076/s
     vus............................: 4      min=0       max=1500
     vus_max........................: 1500   min=1415    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/fef821e8-423b-477a-e4a8-c6edc3ecba00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a9cd419d-a2b2-4885-04bd-88fb742b5800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  88% — ✓ 20938 / ✗ 2667
     ✗ no graphql errors
      ↳  87% — ✓ 20714 / ✗ 2891
     ✗ valid response structure
      ↳  98% — ✓ 20714 / ✗ 224

     checks.........................: 91.51% ✓ 62366     ✗ 5782  
     data_received..................: 108 MB 322 kB/s
     data_sent......................: 28 MB  84 kB/s
     http_req_blocked...............: avg=169.92µs min=1.2µs   med=2.4µs  max=38.78ms p(90)=254.95µs p(95)=432.07µs
     http_req_connecting............: avg=153.76µs min=0s      med=0s     max=38.72ms p(90)=205.25µs p(95)=356.59µs
     http_req_duration..............: avg=10.71s   min=71.65ms med=3.73s  max=1m0s    p(90)=59.99s   p(95)=1m0s    
       { expected_response:true }...: avg=4.43s    min=71.65ms med=3.67s  max=59.96s  p(90)=4.26s    p(95)=4.95s   
     http_req_failed................: 11.29% ✓ 2667      ✗ 20938 
     http_req_receiving.............: avg=51.35µs  min=0s      med=46.6µs max=13.55ms p(90)=76.69µs  p(95)=84.19µs 
     http_req_sending...............: avg=32.92µs  min=7.3µs   med=13.8µs max=17.41ms p(90)=41.5µs   p(95)=57.87µs 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=10.71s   min=71.54ms med=3.73s  max=1m0s    p(90)=59.99s   p(95)=1m0s    
     http_reqs......................: 23605  70.610579/s
     iteration_duration.............: avg=10.71s   min=72.35ms med=3.73s  max=1m0s    p(90)=1m0s     p(95)=1m0s    
     iterations.....................: 23605  70.610579/s
     vus............................: 1      min=1       max=1500
     vus_max........................: 1500   min=1500    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a046da9a-5faf-4e1d-bdbe-336847280700/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/542f0225-7981-421f-140c-45751992bc00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  85% — ✓ 17201 / ✗ 2946
     ✗ no graphql errors
      ↳  85% — ✓ 17147 / ✗ 3000
     ✗ valid response structure
      ↳  99% — ✓ 17147 / ✗ 54

     checks.........................: 89.56% ✓ 51495    ✗ 6000  
     data_received..................: 87 MB  261 kB/s
     data_sent......................: 24 MB  72 kB/s
     http_req_blocked...............: avg=279.79µs min=1.8µs   med=3.3µs  max=49.56ms p(90)=495.16µs p(95)=1.14ms  
     http_req_connecting............: avg=249.66µs min=0s      med=0s     max=49.5ms  p(90)=391.98µs p(95)=948.91µs
     http_req_duration..............: avg=12.56s   min=83.18ms med=3.51s  max=1m0s    p(90)=59.99s   p(95)=1m0s    
       { expected_response:true }...: avg=4.43s    min=83.18ms med=3.46s  max=59.94s  p(90)=3.86s    p(95)=5.31s   
     http_req_failed................: 14.62% ✓ 2946     ✗ 17201 
     http_req_receiving.............: avg=84.5µs   min=0s      med=77.8µs max=7.82ms  p(90)=130.5µs  p(95)=158.1µs 
     http_req_sending...............: avg=67.48µs  min=11.7µs  med=23.7µs max=26.38ms p(90)=74.4µs   p(95)=110µs   
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=12.56s   min=83.09ms med=3.51s  max=1m0s    p(90)=59.99s   p(95)=1m0s    
     http_reqs......................: 20147  60.24219/s
     iteration_duration.............: avg=12.56s   min=83.89ms med=3.52s  max=1m0s    p(90)=1m0s     p(95)=1m0s    
     iterations.....................: 20147  60.24219/s
     vus............................: 26     min=0      max=1500
     vus_max........................: 1500   min=1102   max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/77f570a6-665e-479c-a184-49b2b384f900/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/85e67f49-b6f7-451e-4b3e-2bb52b404a00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-uws`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  94% — ✓ 11918 / ✗ 716
     ✗ no graphql errors
      ↳  56% — ✓ 7159 / ✗ 5475
     ✗ valid response structure
      ↳  60% — ✓ 7159 / ✗ 4759

     checks.........................: 70.55% ✓ 26236     ✗ 10950 
     data_received..................: 100 MB 295 kB/s
     data_sent......................: 16 MB  46 kB/s
     http_req_blocked...............: avg=150.07µs min=1.6µs    med=3.2µs  max=20.22ms p(90)=297.35µs p(95)=620.45µs
     http_req_connecting............: avg=131.7µs  min=0s       med=0s     max=19.26ms p(90)=196.96µs p(95)=526.74µs
     http_req_duration..............: avg=18.5s    min=620.69ms med=12.15s max=1m0s    p(90)=47.49s   p(95)=1m0s    
       { expected_response:true }...: avg=16.01s   min=620.69ms med=11.17s max=59.94s  p(90)=38.57s   p(95)=47.07s  
     http_req_failed................: 5.66%  ✓ 716       ✗ 11918 
     http_req_receiving.............: avg=107.67µs min=0s       med=74.7µs max=25.9ms  p(90)=151.7µs  p(95)=195.53µs
     http_req_sending...............: avg=59.47µs  min=10.4µs   med=20.2µs max=24.58ms p(90)=68.9µs   p(95)=96.5µs  
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=18.5s    min=617.86ms med=12.15s max=1m0s    p(90)=47.49s   p(95)=1m0s    
     http_reqs......................: 12634  37.158286/s
     iteration_duration.............: avg=18.5s    min=620.94ms med=12.15s max=1m0s    p(90)=47.49s   p(95)=1m0s    
     iterations.....................: 12634  37.158286/s
     vus............................: 4      min=0       max=1500
     vus_max........................: 1500   min=1105    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5366f97b-f965-465c-f0e0-aa7a70049000/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/51360f6b-7916-4d20-6583-21563ddeb300/public" alt="HTTP Overview" />


  </details>