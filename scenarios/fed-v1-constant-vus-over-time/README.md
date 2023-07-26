## Overview for: `scenarios/fed-v1-constant-vus-over-time`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. It's being executed with a constant amount of VUs over a fixed amount of time. It measure things like memory usage, CPU usage, average RPS. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was running 100 VUs over 60s


### Comparison


| Gateway                             | RPS ⬇️ |       Requests        |         Duration         |
| :---------------------------------- | :----: | :-------------------: | :----------------------: |
| wundergraph                         |  633   | 38068 total, 0 failed |  avg: 156ms, p95: 243ms  |
| apollo-router                       |  115   | 7024 total, 0 failed  | avg: 861ms, p95: 1316ms  |
| stitching-federation-with-yoga-bun  |   77   | 4719 total, 0 failed  | avg: 1277ms, p95: 2272ms |
| mesh                                |   75   | 4573 total, 0 failed  | avg: 1320ms, p95: 1973ms |
| stitching-federation-with-yoga-deno |   68   | 4112 total, 0 failed  | avg: 1467ms, p95: 1973ms |
| mercurius                           |   67   | 4107 total, 0 failed  | avg: 1467ms, p95: 1981ms |
| apollo-gateway-with-yoga            |   66   | 4014 total, 0 failed  | avg: 1504ms, p95: 2023ms |
| apollo-server                       |   61   | 3760 total, 0 failed  | avg: 1614ms, p95: 1825ms |
| stitching-federation-with-yoga      |   57   | 3465 total, 0 failed  | avg: 1747ms, p95: 2230ms |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 114204     ✗ 0    
     data_received..................: 190 MB  3.2 MB/s
     data_sent......................: 45 MB   752 kB/s
     http_req_blocked...............: avg=24.67µs  min=900ns   med=1.9µs    max=26.01ms  p(90)=3.1µs    p(95)=3.9µs   
     http_req_connecting............: avg=19.4µs   min=0s      med=0s       max=17.64ms  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=155.92ms min=25.83ms med=149.3ms  max=456.92ms p(90)=217.62ms p(95)=243.29ms
       { expected_response:true }...: avg=155.92ms min=25.83ms med=149.3ms  max=456.92ms p(90)=217.62ms p(95)=243.29ms
   ✓ http_req_failed................: 0.00%   ✓ 0          ✗ 38068
     http_req_receiving.............: avg=1.28ms   min=14.3µs  med=33.09µs  max=210.37ms p(90)=210.1µs  p(95)=1.85ms  
     http_req_sending...............: avg=357.46µs min=6.3µs   med=10.7µs   max=170.95ms p(90)=23µs     p(95)=100µs   
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=154.28ms min=25.78ms med=148.16ms max=397.55ms p(90)=214.69ms p(95)=239.11ms
     http_reqs......................: 38068   633.869043/s
     iteration_duration.............: avg=157.65ms min=26.34ms med=150.86ms max=457.74ms p(90)=220.29ms p(95)=246.31ms
     iterations.....................: 38068   633.869043/s
     vus............................: 100     min=100      max=100
     vus_max........................: 100     min=100      max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0693097d-4f12-44f6-4a6a-738a5ef4a900/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a1673cb2-8c73-4a5b-14a7-aa36627d8600/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 7023 / ✗ 1
     ✗ valid response structure
      ↳  99% — ✓ 7023 / ✗ 1

     checks.........................: 99.99% ✓ 21070      ✗ 2    
     data_received..................: 35 MB  575 kB/s
     data_sent......................: 8.3 MB 137 kB/s
     http_req_blocked...............: avg=57.97µs  min=1.2µs    med=2.4µs    max=11.03ms p(90)=3.6µs  p(95)=4.3µs  
     http_req_connecting............: avg=53.24µs  min=0s       med=0s       max=10.86ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=861.34ms min=207.41ms med=808.63ms max=5.17s   p(90)=1.1s   p(95)=1.31s  
       { expected_response:true }...: avg=861.34ms min=207.41ms med=808.63ms max=5.17s   p(90)=1.1s   p(95)=1.31s  
   ✓ http_req_failed................: 0.00%  ✓ 0          ✗ 7024 
     http_req_receiving.............: avg=90.34µs  min=22.2µs   med=49.5µs   max=31.88ms p(90)=71.5µs p(95)=81.18µs
     http_req_sending...............: avg=57.86µs  min=8.2µs    med=13.3µs   max=32.18ms p(90)=26.6µs p(95)=32µs   
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s      p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=861.19ms min=207.35ms med=808.54ms max=5.17s   p(90)=1.1s   p(95)=1.31s  
     http_reqs......................: 7024   115.522898/s
     iteration_duration.............: avg=862.14ms min=208.08ms med=809.31ms max=5.17s   p(90)=1.1s   p(95)=1.31s  
     iterations.....................: 7024   115.522898/s
     vus............................: 100    min=100      max=100
     vus_max........................: 100    min=100      max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/36b045db-ef15-48c5-9a0d-fc114fce3000/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3dc11e44-4242-4696-ccd9-54d3e0212e00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 14157     ✗ 0    
     data_received..................: 24 MB   388 kB/s
     data_sent......................: 5.6 MB  92 kB/s
     http_req_blocked...............: avg=128.53µs min=1.1µs    med=2.4µs  max=16.55ms p(90)=4µs      p(95)=6.9µs   
     http_req_connecting............: avg=116.96µs min=0s       med=0s     max=14.44ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=1.27s    min=440.46ms med=1.2s   max=3s      p(90)=1.93s    p(95)=2.27s   
       { expected_response:true }...: avg=1.27s    min=440.46ms med=1.2s   max=3s      p(90)=1.93s    p(95)=2.27s   
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 4719 
     http_req_receiving.............: avg=468.71µs min=16.2µs   med=39.9µs max=84.67ms p(90)=105.32µs p(95)=454.6µs 
     http_req_sending...............: avg=301.65µs min=7.8µs    med=12.6µs max=95.02ms p(90)=54µs     p(95)=408.24µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=1.27s    min=440.41ms med=1.2s   max=3s      p(90)=1.93s    p(95)=2.27s   
     http_reqs......................: 4719    77.799553/s
     iteration_duration.............: avg=1.27s    min=443.26ms med=1.2s   max=3.01s   p(90)=1.93s    p(95)=2.27s   
     iterations.....................: 4719    77.799553/s
     vus............................: 100     min=100     max=100
     vus_max........................: 100     min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/daf1a82c-ada4-46b9-70e2-8d25edb98d00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2a888ec2-cd5b-4db9-da74-0bffe8e70800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 13719     ✗ 0    
     data_received..................: 23 MB   377 kB/s
     data_sent......................: 5.4 MB  90 kB/s
     http_req_blocked...............: avg=96.63µs min=1.5µs    med=2.5µs  max=9.75ms  p(90)=3.88µs  p(95)=5µs    
     http_req_connecting............: avg=90.56µs min=0s       med=0s     max=9.58ms  p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=1.32s   min=582.79ms med=1.23s  max=3.21s   p(90)=1.68s   p(95)=1.97s  
       { expected_response:true }...: avg=1.32s   min=582.79ms med=1.23s  max=3.21s   p(90)=1.68s   p(95)=1.97s  
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 4573 
     http_req_receiving.............: avg=58.71µs min=22.2µs   med=53.5µs max=3.78ms  p(90)=78.6µs  p(95)=87.4µs 
     http_req_sending...............: avg=61.36µs min=8.1µs    med=14.4µs max=19.95ms p(90)=29.58µs p(95)=37.94µs
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s     max=0s      p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=1.32s   min=582.73ms med=1.23s  max=3.21s   p(90)=1.68s   p(95)=1.97s  
     http_reqs......................: 4573    75.425027/s
     iteration_duration.............: avg=1.32s   min=583.56ms med=1.23s  max=3.21s   p(90)=1.68s   p(95)=1.97s  
     iterations.....................: 4573    75.425027/s
     vus............................: 100     min=100     max=100
     vus_max........................: 100     min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7d1d818c-b99a-496b-169c-361ab40d3400/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0e1f86f0-b528-4391-60d4-f2b22de11f00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-deno`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 12336     ✗ 0    
     data_received..................: 21 MB   340 kB/s
     data_sent......................: 4.9 MB  81 kB/s
     http_req_blocked...............: avg=73.31µs min=800ns    med=1.9µs  max=8.68ms  p(90)=3.3µs  p(95)=4.54µs 
     http_req_connecting............: avg=67.78µs min=0s       med=0s     max=8.64ms  p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=1.46s   min=564.01ms med=1.41s  max=2.76s   p(90)=1.74s  p(95)=1.97s  
       { expected_response:true }...: avg=1.46s   min=564.01ms med=1.41s  max=2.76s   p(90)=1.74s  p(95)=1.97s  
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 4112 
     http_req_receiving.............: avg=79.64µs min=15.3µs   med=26.9µs max=16.65ms p(90)=71.7µs p(95)=86.98µs
     http_req_sending...............: avg=71.64µs min=6µs      med=11µs   max=18.09ms p(90)=25.6µs p(95)=99.6µs 
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s     max=0s      p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=1.46s   min=563.96ms med=1.41s  max=2.76s   p(90)=1.74s  p(95)=1.97s  
     http_reqs......................: 4112    68.015651/s
     iteration_duration.............: avg=1.46s   min=564.5ms  med=1.41s  max=2.78s   p(90)=1.74s  p(95)=1.97s  
     iterations.....................: 4112    68.015651/s
     vus............................: 100     min=100     max=100
     vus_max........................: 100     min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a3e81dfe-d71d-43d0-88f7-7c56f9444000/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/09b8e4ae-1c3d-40d7-e73c-a082f7540b00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 12321    ✗ 0    
     data_received..................: 21 MB   341 kB/s
     data_sent......................: 4.9 MB  81 kB/s
     http_req_blocked...............: avg=322.79µs min=1.3µs    med=2.9µs  max=26.49ms p(90)=4.2µs   p(95)=17.5µs 
     http_req_connecting............: avg=317.78µs min=0s       med=0s     max=26.37ms p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=1.46s    min=600.37ms med=1.4s   max=3.81s   p(90)=1.67s   p(95)=1.98s  
       { expected_response:true }...: avg=1.46s    min=600.37ms med=1.4s   max=3.81s   p(90)=1.67s   p(95)=1.98s  
   ✓ http_req_failed................: 0.00%   ✓ 0        ✗ 4107 
     http_req_receiving.............: avg=68µs     min=24.4µs   med=66.3µs max=4.7ms   p(90)=88.64µs p(95)=97.6µs 
     http_req_sending...............: avg=107.16µs min=7.2µs    med=17.1µs max=10.28ms p(90)=33.6µs  p(95)=50.75µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=1.46s    min=600.32ms med=1.4s   max=3.81s   p(90)=1.67s   p(95)=1.98s  
     http_reqs......................: 4107    67.81638/s
     iteration_duration.............: avg=1.46s    min=600.96ms med=1.4s   max=3.81s   p(90)=1.67s   p(95)=1.98s  
     iterations.....................: 4107    67.81638/s
     vus............................: 100     min=100    max=100
     vus_max........................: 100     min=100    max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f7d04a5e-22d9-4a4b-9b6e-f61c4245a900/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/eddec39d-e49b-4b38-d9d5-195fe7423f00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 3999 / ✗ 15
     ✗ valid response structure
      ↳  99% — ✓ 3999 / ✗ 15

     checks.........................: 99.75% ✓ 12012     ✗ 30   
     data_received..................: 20 MB  330 kB/s
     data_sent......................: 4.8 MB 79 kB/s
     http_req_blocked...............: avg=202.06µs min=1.1µs    med=2.4µs  max=52.05ms p(90)=3.6µs  p(95)=13µs   
     http_req_connecting............: avg=178.98µs min=0s       med=0s     max=24.08ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=1.5s     min=713.17ms med=1.43s  max=3.45s   p(90)=1.82s  p(95)=2.02s  
       { expected_response:true }...: avg=1.5s     min=713.17ms med=1.43s  max=3.45s   p(90)=1.82s  p(95)=2.02s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 4014 
     http_req_receiving.............: avg=54.68µs  min=20.1µs   med=50.4µs max=5.33ms  p(90)=77µs   p(95)=83.83µs
     http_req_sending...............: avg=101.75µs min=6.8µs    med=14.5µs max=27.46ms p(90)=29.2µs p(95)=38.67µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=1.5s     min=713.13ms med=1.43s  max=3.44s   p(90)=1.82s  p(95)=2.02s  
     http_reqs......................: 4014   66.106304/s
     iteration_duration.............: avg=1.5s     min=713.68ms med=1.43s  max=3.45s   p(90)=1.82s  p(95)=2.02s  
     iterations.....................: 4014   66.106304/s
     vus............................: 100    min=100     max=100
     vus_max........................: 100    min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a40e0299-7eb7-4f0a-9356-c6293caa6f00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0a3d3852-ac4b-4b84-4762-11d9703c9700/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 3751 / ✗ 9
     ✗ valid response structure
      ↳  99% — ✓ 3751 / ✗ 9

     checks.........................: 99.84% ✓ 11262     ✗ 18   
     data_received..................: 19 MB  318 kB/s
     data_sent......................: 4.5 MB 73 kB/s
     http_req_blocked...............: avg=71.64µs min=1.2µs    med=2.6µs  max=15.79ms p(90)=3.9µs   p(95)=15.9µs
     http_req_connecting............: avg=67.42µs min=0s       med=0s     max=15.76ms p(90)=0s      p(95)=0s    
     http_req_duration..............: avg=1.61s   min=638.76ms med=1.48s  max=18.87s  p(90)=1.72s   p(95)=1.82s 
       { expected_response:true }...: avg=1.61s   min=638.76ms med=1.48s  max=18.87s  p(90)=1.72s   p(95)=1.82s 
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 3760 
     http_req_receiving.............: avg=69.8µs  min=21.7µs   med=60.6µs max=9.25ms  p(90)=82.81µs p(95)=89.7µs
     http_req_sending...............: avg=56.73µs min=8.2µs    med=16µs   max=8.68ms  p(90)=30.6µs  p(95)=39.8µs
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s     max=0s      p(90)=0s      p(95)=0s    
     http_req_waiting...............: avg=1.61s   min=638.64ms med=1.48s  max=18.87s  p(90)=1.72s   p(95)=1.82s 
     http_reqs......................: 3760   61.604001/s
     iteration_duration.............: avg=1.61s   min=639.45ms med=1.48s  max=18.87s  p(90)=1.72s   p(95)=1.82s 
     iterations.....................: 3760   61.604001/s
     vus............................: 35     min=35      max=100
     vus_max........................: 100    min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0d31d49c-96f1-4f90-fd27-36570be0c600/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4ebd6a6c-70a9-45cd-fede-a050c0036f00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 3443 / ✗ 22
     ✗ valid response structure
      ↳  99% — ✓ 3443 / ✗ 22

     checks.........................: 99.57% ✓ 10351     ✗ 44   
     data_received..................: 18 MB  289 kB/s
     data_sent......................: 4.1 MB 68 kB/s
     http_req_blocked...............: avg=122.09µs min=1µs      med=2.29µs max=10.79ms p(90)=3.5µs  p(95)=13µs    
     http_req_connecting............: avg=115.94µs min=0s       med=0s     max=10.76ms p(90)=0s     p(95)=0s      
     http_req_duration..............: avg=1.74s    min=771.02ms med=1.67s  max=3.68s   p(90)=2.11s  p(95)=2.22s   
       { expected_response:true }...: avg=1.74s    min=771.02ms med=1.67s  max=3.68s   p(90)=2.11s  p(95)=2.22s   
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 3465 
     http_req_receiving.............: avg=50.54µs  min=17µs     med=43.8µs max=2.68ms  p(90)=74.2µs p(95)=80.88µs 
     http_req_sending...............: avg=66.73µs  min=5.8µs    med=13.5µs max=11.03ms p(90)=30.9µs p(95)=116.44µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=1.74s    min=770.97ms med=1.67s  max=3.68s   p(90)=2.11s  p(95)=2.22s   
     http_reqs......................: 3465   57.015085/s
     iteration_duration.............: avg=1.74s    min=771.53ms med=1.67s  max=3.68s   p(90)=2.11s  p(95)=2.23s   
     iterations.....................: 3465   57.015085/s
     vus............................: 100    min=100     max=100
     vus_max........................: 100    min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2a5210b6-2c97-4a39-6d41-03ed6d36ed00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/af966312-b0c3-400a-6228-ac21e1203300/public" alt="HTTP Overview" />


  </details>