## Overview for scenario: `constant-vus-over-time`


This scenario runs 4 servics and a GraphQL gatway with Federation spec, and runs a heavy query. It's being executed with a constant amount of VUs over a fixed amount of time. It measure things like memory usage, CPU usage, average RPS. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was running 100 VUs over 60s


### Comparison


| Gateway                        | RPS ⬇️ |       Requests        |         Duration         |
| :----------------------------- | :----: | :-------------------: | :----------------------: |
| wundergraph                    |  904   | 54354 total, 0 failed |  avg: 110ms, p95: 182ms  |
| mercurius                      |   90   | 5429 total, 0 failed  | avg: 1107ms, p95: 1469ms |
| apollo-gateway-with-yoga       |   72   | 4385 total, 0 failed  | avg: 1379ms, p95: 1877ms |
| apollo-router                  |   71   | 4354 total, 0 failed  | avg: 1388ms, p95: 2608ms |
| mesh                           |   56   | 3424 total, 0 failed  | avg: 1773ms, p95: 2606ms |
| apollo-server                  |   45   | 2816 total, 0 failed  | avg: 2165ms, p95: 3108ms |
| stitching-federation-with-yoga |   27   | 1703 total, 0 failed  | avg: 3582ms, p95: 5635ms |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 163062     ✗ 0    
     data_received..................: 264 MB  4.4 MB/s
     data_sent......................: 65 MB   1.1 MB/s
   ✓ expected_result................: 0.00%   ✓ 0          ✗ 0    
     http_req_blocked...............: avg=31.81µs  min=900ns   med=1.9µs    max=30.55ms  p(90)=3.2µs    p(95)=4.1µs   
     http_req_connecting............: avg=26.88µs  min=0s      med=0s       max=30.49ms  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=109.7ms  min=16.2ms  med=103.46ms max=358.1ms  p(90)=156.88ms p(95)=181.87ms
       { expected_response:true }...: avg=109.7ms  min=16.2ms  med=103.46ms max=358.1ms  p(90)=156.88ms p(95)=181.87ms
   ✓ http_req_failed................: 0.00%   ✓ 0          ✗ 54354
     http_req_receiving.............: avg=451.68µs min=16.2µs  med=41.9µs   max=106.39ms p(90)=199.5µs  p(95)=511.81µs
     http_req_sending...............: avg=116.81µs min=5.9µs   med=11.5µs   max=110ms    p(90)=22.2µs   p(95)=66.83µs 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=109.13ms min=15.97ms med=103.05ms max=332.4ms  p(90)=155.7ms  p(95)=180.45ms
     http_reqs......................: 54354   904.847053/s
     iteration_duration.............: avg=110.37ms min=16.51ms med=104.05ms max=409.23ms p(90)=157.78ms p(95)=183.18ms
     iterations.....................: 54354   904.847053/s
   ✓ no_errors......................: 0.00%   ✓ 0          ✗ 0    
     vus............................: 100     min=100      max=100
     vus_max........................: 100     min=100      max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ab0400f8-9e41-49cc-2ce4-b14f28b35d00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f0f77d3b-50c6-4178-7d3c-9a4417aa8b00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 16287     ✗ 0    
     data_received..................: 27 MB   440 kB/s
     data_sent......................: 6.4 MB  107 kB/s
   ✓ expected_result................: 0.00%   ✓ 0         ✗ 0    
     http_req_blocked...............: avg=285.23µs min=1µs      med=2.1µs  max=36.21ms p(90)=2.9µs   p(95)=3.6µs  
     http_req_connecting............: avg=268.58µs min=0s       med=0s     max=31.99ms p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=1.1s     min=286.96ms med=1.04s  max=3.32s   p(90)=1.26s   p(95)=1.46s  
       { expected_response:true }...: avg=1.1s     min=286.96ms med=1.04s  max=3.32s   p(90)=1.26s   p(95)=1.46s  
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 5429 
     http_req_receiving.............: avg=50.28µs  min=16.8µs   med=45.1µs max=4.57ms  p(90)=66.51µs p(95)=73.06µs
     http_req_sending...............: avg=25.57µs  min=6.6µs    med=13µs   max=9.29ms  p(90)=23.7µs  p(95)=29.5µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=1.1s     min=286.92ms med=1.04s  max=3.32s   p(90)=1.26s   p(95)=1.46s  
     http_reqs......................: 5429    90.055102/s
     iteration_duration.............: avg=1.1s     min=287.27ms med=1.04s  max=3.35s   p(90)=1.27s   p(95)=1.46s  
     iterations.....................: 5429    90.055102/s
   ✓ no_errors......................: 0.00%   ✓ 0         ✗ 0    
     vus............................: 100     min=100     max=100
     vus_max........................: 100     min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/20adff78-db51-4cdd-fd13-2d15f086e200/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/da09620a-f87c-4502-95c9-4d98958d6300/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 4365 / ✗ 20
     ✗ expected_result
      ↳  99% — ✓ 4381 / ✗ 4

     checks.........................: 99.81% ✓ 13131     ✗ 24   
     data_received..................: 22 MB  356 kB/s
     data_sent......................: 5.2 MB 86 kB/s
   ✓ expected_result................: 0.00%  ✓ 0         ✗ 0    
     http_req_blocked...............: avg=70.19µs min=1.2µs    med=2.1µs   max=12.07ms p(90)=3.15µs p(95)=4.1µs  
     http_req_connecting............: avg=66.93µs min=0s       med=0s      max=12.04ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=1.37s   min=699.81ms med=1.31s   max=3.45s   p(90)=1.58s  p(95)=1.87s  
       { expected_response:true }...: avg=1.37s   min=699.81ms med=1.31s   max=3.45s   p(90)=1.58s  p(95)=1.87s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 4385 
     http_req_receiving.............: avg=53.53µs min=20.1µs   med=49.09µs max=8.56ms  p(90)=75.3µs p(95)=81.08µs
     http_req_sending...............: avg=26.49µs min=6.6µs    med=13.3µs  max=7.31ms  p(90)=26.2µs p(95)=31.2µs 
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s      max=0s      p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=1.37s   min=699.74ms med=1.31s   max=3.45s   p(90)=1.58s  p(95)=1.87s  
     http_reqs......................: 4385   72.156344/s
     iteration_duration.............: avg=1.37s   min=700.13ms med=1.31s   max=3.45s   p(90)=1.58s  p(95)=1.87s  
     iterations.....................: 4385   72.156344/s
   ✓ no_errors......................: 0.00%  ✓ 0         ✗ 0    
     vus............................: 100    min=100     max=100
     vus_max........................: 100    min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/24c33ebe-1ba1-4b35-6293-5aa8c21e9700/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7a79304b-542e-440a-616c-9dcdb6522000/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 4353 / ✗ 1
     ✓ expected_result

     checks.........................: 99.99% ✓ 13061     ✗ 1    
     data_received..................: 21 MB  351 kB/s
     data_sent......................: 5.2 MB 85 kB/s
   ✓ expected_result................: 0.00%  ✓ 0         ✗ 0    
     http_req_blocked...............: avg=593.66µs min=1.5µs    med=3.4µs   max=39.36ms p(90)=4.59µs   p(95)=19.3µs  
     http_req_connecting............: avg=578.86µs min=0s       med=0s      max=39.32ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=1.38s    min=107.86ms med=1.26s   max=5.65s   p(90)=2.21s    p(95)=2.6s    
       { expected_response:true }...: avg=1.38s    min=107.86ms med=1.26s   max=5.65s   p(90)=2.21s    p(95)=2.6s    
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 4354 
     http_req_receiving.............: avg=86.87µs  min=24.3µs   med=74.35µs max=12.45ms p(90)=110.24µs p(95)=132.33µs
     http_req_sending...............: avg=122.35µs min=10.4µs   med=20.8µs  max=32.86ms p(90)=43.27µs  p(95)=52.73µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=1.38s    min=107.77ms med=1.25s   max=5.65s   p(90)=2.21s    p(95)=2.6s    
     http_reqs......................: 4354   71.741463/s
     iteration_duration.............: avg=1.38s    min=108.32ms med=1.26s   max=5.68s   p(90)=2.21s    p(95)=2.61s   
     iterations.....................: 4354   71.741463/s
   ✓ no_errors......................: 0.00%  ✓ 0         ✗ 0    
     vus............................: 100    min=100     max=100
     vus_max........................: 100    min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ac2cc661-cdcf-4eb9-a24f-264fd11d8200/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/06d491af-bfc5-41a7-b0e8-dd0eb896ce00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 3413 / ✗ 11
     ✗ expected_result
      ↳  99% — ✓ 3423 / ✗ 1

     checks.........................: 99.88% ✓ 10260     ✗ 12   
     data_received..................: 17 MB  274 kB/s
     data_sent......................: 4.1 MB 67 kB/s
   ✓ expected_result................: 0.00%  ✓ 0         ✗ 0    
     http_req_blocked...............: avg=102.59µs min=1.2µs  med=1.8µs   max=11.45ms p(90)=2.9µs   p(95)=5.88µs 
     http_req_connecting............: avg=95.86µs  min=0s     med=0s      max=8.18ms  p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=1.77s    min=1.07s  med=1.67s   max=3.45s   p(90)=2.17s   p(95)=2.6s   
       { expected_response:true }...: avg=1.77s    min=1.07s  med=1.67s   max=3.45s   p(90)=2.17s   p(95)=2.6s   
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 3424 
     http_req_receiving.............: avg=43.64µs  min=18.3µs med=37.35µs max=5.48ms  p(90)=62µs    p(95)=73.58µs
     http_req_sending...............: avg=60.31µs  min=7.2µs  med=11.3µs  max=12.83ms p(90)=24.97µs p(95)=31.4µs 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s      p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=1.77s    min=1.07s  med=1.67s   max=3.45s   p(90)=2.17s   p(95)=2.6s   
     http_reqs......................: 3424   56.052002/s
     iteration_duration.............: avg=1.77s    min=1.08s  med=1.67s   max=3.46s   p(90)=2.17s   p(95)=2.6s   
     iterations.....................: 3424   56.052002/s
   ✓ no_errors......................: 0.00%  ✓ 0         ✗ 0    
     vus............................: 41     min=41      max=100
     vus_max........................: 100    min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a36a4e32-083d-4cee-2152-46569b3a4e00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/003664a6-0bc2-42ca-c556-52e130128d00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 2797 / ✗ 19
     ✓ expected_result

     checks.........................: 99.77% ✓ 8429      ✗ 19   
     data_received..................: 14 MB  232 kB/s
     data_sent......................: 3.3 MB 55 kB/s
   ✓ expected_result................: 0.00%  ✓ 0         ✗ 0    
     http_req_blocked...............: avg=473.16µs min=1.7µs  med=2.6µs  max=25.35ms p(90)=4.5µs    p(95)=22.07µs 
     http_req_connecting............: avg=461.37µs min=0s     med=0s     max=25.3ms  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=2.16s    min=1.38s  med=2.01s  max=5.06s   p(90)=2.67s    p(95)=3.1s    
       { expected_response:true }...: avg=2.16s    min=1.38s  med=2.01s  max=5.06s   p(90)=2.67s    p(95)=3.1s    
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 2816 
     http_req_receiving.............: avg=74.86µs  min=30.8µs med=66.1µs max=1.97ms  p(90)=109.89µs p(95)=131.14µs
     http_req_sending...............: avg=63.89µs  min=11µs   med=16.2µs max=13.33ms p(90)=44.89µs  p(95)=76.32µs 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=2.16s    min=1.38s  med=2.01s  max=5.06s   p(90)=2.67s    p(95)=3.1s    
     http_reqs......................: 2816   45.888569/s
     iteration_duration.............: avg=2.16s    min=1.38s  med=2.01s  max=5.07s   p(90)=2.67s    p(95)=3.1s    
     iterations.....................: 2816   45.888569/s
   ✓ no_errors......................: 0.00%  ✓ 0         ✗ 0    
     vus............................: 68     min=68      max=100
     vus_max........................: 100    min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1ed1dd7e-2a7a-41b8-d73a-ffecb4c18500/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3790e44b-56c7-4802-1c8a-3056c83f6900/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  96% — ✓ 1636 / ✗ 67
     ✓ expected_result

     checks.........................: 98.68% ✓ 5042      ✗ 67   
     data_received..................: 8.2 MB 134 kB/s
     data_sent......................: 2.0 MB 33 kB/s
   ✓ expected_result................: 0.00%  ✓ 0         ✗ 0    
     http_req_blocked...............: avg=707.43µs min=1.5µs  med=3µs    max=25.96ms p(90)=5.3µs   p(95)=4.14ms  
     http_req_connecting............: avg=694.08µs min=0s     med=0s     max=25.92ms p(90)=0s      p(95)=4.11ms  
     http_req_duration..............: avg=3.58s    min=1.56s  med=3.27s  max=6.41s   p(90)=4.5s    p(95)=5.63s   
       { expected_response:true }...: avg=3.58s    min=1.56s  med=3.27s  max=6.41s   p(90)=4.5s    p(95)=5.63s   
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 1703 
     http_req_receiving.............: avg=74.31µs  min=22.1µs med=69.9µs max=3.18ms  p(90)=99.3µs  p(95)=109.33µs
     http_req_sending...............: avg=110.02µs min=10.3µs med=19.5µs max=12.48ms p(90)=38.38µs p(95)=209.21µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=3.58s    min=1.56s  med=3.27s  max=6.41s   p(90)=4.5s    p(95)=5.63s   
     http_reqs......................: 1703   27.678372/s
     iteration_duration.............: avg=3.58s    min=1.56s  med=3.27s  max=6.41s   p(90)=4.5s    p(95)=5.64s   
     iterations.....................: 1703   27.678372/s
   ✓ no_errors......................: 0.00%  ✓ 0         ✗ 0    
     vus............................: 67     min=67      max=100
     vus_max........................: 100    min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/71500184-828f-4114-5fcd-6a7e35c80b00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/01ca98f3-791e-486d-c139-b869c3334a00/public" alt="HTTP Overview" />


  </details>