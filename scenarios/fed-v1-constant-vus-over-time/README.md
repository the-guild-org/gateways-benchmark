## Overview for scenario: `constant-vus-over-time`


This scenario runs 4 servics and a GraphQL gateway with Federation spec, and runs a heavy query. It's being executed with a constant amount of VUs over a fixed amount of time. It measure things like memory usage, CPU usage, average RPS. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was running 100 VUs over 60s


### Comparison


| Gateway                             | RPS ⬇️ |       Requests        |         Duration         |
| :---------------------------------- | :----: | :-------------------: | :----------------------: |
| wundergraph                         |  845   | 50776 total, 0 failed |  avg: 118ms, p95: 189ms  |
| apollo-router                       |  118   | 7186 total, 0 failed  | avg: 839ms, p95: 1274ms  |
| mercurius                           |   79   | 4812 total, 0 failed  | avg: 1251ms, p95: 1549ms |
| stitching-federation-with-yoga-bun  |   77   | 4670 total, 0 failed  | avg: 1289ms, p95: 2025ms |
| mesh                                |   73   | 4475 total, 0 failed  | avg: 1351ms, p95: 2165ms |
| stitching-federation-with-yoga-deno |   69   | 4226 total, 0 failed  | avg: 1424ms, p95: 1936ms |
| apollo-gateway-with-yoga            |   60   | 3687 total, 0 failed  | avg: 1643ms, p95: 2207ms |
| apollo-server                       |   58   | 3569 total, 0 failed  | avg: 1696ms, p95: 2014ms |
| stitching-federation-with-yoga      |   51   | 3150 total, 0 failed  | avg: 1929ms, p95: 2427ms |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 152328     ✗ 0    
     data_received..................: 253 MB  4.2 MB/s
     data_sent......................: 60 MB   1.0 MB/s
   ✓ expected_result................: 0.00%   ✓ 0          ✗ 0    
     http_req_blocked...............: avg=6.78µs   min=800ns   med=1.6µs    max=6.53ms   p(90)=2.4µs    p(95)=2.8µs   
     http_req_connecting............: avg=4.09µs   min=0s      med=0s       max=5.78ms   p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=117.77ms min=12.56ms med=111.69ms max=317.75ms p(90)=167.08ms p(95)=189.46ms
       { expected_response:true }...: avg=117.77ms min=12.56ms med=111.69ms max=317.75ms p(90)=167.08ms p(95)=189.46ms
   ✓ http_req_failed................: 0.00%   ✓ 0          ✗ 50776
     http_req_receiving.............: avg=271.6µs  min=13.8µs  med=35.1µs   max=60.8ms   p(90)=152µs    p(95)=336µs   
     http_req_sending...............: avg=66.2µs   min=5.4µs   med=9.6µs    max=90.95ms  p(90)=18.59µs  p(95)=28.2µs  
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=117.43ms min=12.52ms med=111.39ms max=317.72ms p(90)=166.46ms p(95)=188.71ms
     http_reqs......................: 50776   845.430023/s
     iteration_duration.............: avg=118.2ms  min=12.95ms med=112.09ms max=319.94ms p(90)=167.64ms p(95)=189.93ms
     iterations.....................: 50776   845.430023/s
   ✓ no_errors......................: 0.00%   ✓ 0          ✗ 0    
     vus............................: 100     min=100      max=100
     vus_max........................: 100     min=100      max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6db6b8fa-0a02-4129-f58f-bbaf27087e00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/26651a5b-9549-49f8-b774-4c1e01f00d00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 21558      ✗ 0    
     data_received..................: 36 MB   592 kB/s
     data_sent......................: 8.5 MB  141 kB/s
   ✓ expected_result................: 0.00%   ✓ 0          ✗ 0    
     http_req_blocked...............: avg=104.6µs  min=1.3µs    med=2.29µs   max=35.82ms p(90)=3.3µs  p(95)=4.1µs 
     http_req_connecting............: avg=92.71µs  min=0s       med=0s       max=20.55ms p(90)=0s     p(95)=0s    
     http_req_duration..............: avg=839.01ms min=284.97ms med=787.72ms max=3.41s   p(90)=1.1s   p(95)=1.27s 
       { expected_response:true }...: avg=839.01ms min=284.97ms med=787.72ms max=3.41s   p(90)=1.1s   p(95)=1.27s 
   ✓ http_req_failed................: 0.00%   ✓ 0          ✗ 7186 
     http_req_receiving.............: avg=59.46µs  min=19.9µs   med=55.1µs   max=7.17ms  p(90)=75.5µs p(95)=82.2µs
     http_req_sending...............: avg=29.29µs  min=6.9µs    med=14µs     max=13.76ms p(90)=26.7µs p(95)=31.9µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s      p(90)=0s     p(95)=0s    
     http_req_waiting...............: avg=838.92ms min=284.89ms med=787.66ms max=3.41s   p(90)=1.1s   p(95)=1.27s 
     http_reqs......................: 7186    118.787743/s
     iteration_duration.............: avg=839.45ms min=285.31ms med=787.99ms max=3.42s   p(90)=1.1s   p(95)=1.27s 
     iterations.....................: 7186    118.787743/s
   ✓ no_errors......................: 0.00%   ✓ 0          ✗ 0    
     vus............................: 100     min=100      max=100
     vus_max........................: 100     min=100      max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/52034bfb-63b3-4297-8ff9-360e61c3b100/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9beb64d1-4c82-48d5-02f7-db2ec41c1200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 14436     ✗ 0    
     data_received..................: 24 MB   401 kB/s
     data_sent......................: 5.7 MB  95 kB/s
   ✓ expected_result................: 0.00%   ✓ 0         ✗ 0    
     http_req_blocked...............: avg=77.84µs min=1.5µs    med=2.5µs  max=12.43ms p(90)=3.5µs   p(95)=4.7µs 
     http_req_connecting............: avg=74.07µs min=0s       med=0s     max=12.4ms  p(90)=0s      p(95)=0s    
     http_req_duration..............: avg=1.25s   min=368.01ms med=1.21s  max=4.43s   p(90)=1.4s    p(95)=1.54s 
       { expected_response:true }...: avg=1.25s   min=368.01ms med=1.21s  max=4.43s   p(90)=1.4s    p(95)=1.54s 
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 4812 
     http_req_receiving.............: avg=62.72µs min=20.4µs   med=59.2µs max=8ms     p(90)=79.39µs p(95)=85.8µs
     http_req_sending...............: avg=28.57µs min=8.5µs    med=14.8µs max=3.48ms  p(90)=28.2µs  p(95)=33µs  
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s     max=0s      p(90)=0s      p(95)=0s    
     http_req_waiting...............: avg=1.25s   min=367.97ms med=1.21s  max=4.43s   p(90)=1.4s    p(95)=1.54s 
     http_reqs......................: 4812    79.717179/s
     iteration_duration.............: avg=1.25s   min=368.3ms  med=1.21s  max=4.43s   p(90)=1.4s    p(95)=1.54s 
     iterations.....................: 4812    79.717179/s
   ✓ no_errors......................: 0.00%   ✓ 0         ✗ 0    
     vus............................: 100     min=100     max=100
     vus_max........................: 100     min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/52691e34-f5b8-4d3e-96c8-d5294819de00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f521d088-4222-49be-89bc-86c6759a2300/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 14010     ✗ 0    
     data_received..................: 23 MB   385 kB/s
     data_sent......................: 5.5 MB  92 kB/s
   ✓ expected_result................: 0.00%   ✓ 0         ✗ 0    
     http_req_blocked...............: avg=409.93µs min=700ns    med=1.9µs  max=50.58ms p(90)=3.2µs  p(95)=4.3µs   
     http_req_connecting............: avg=398.37µs min=0s       med=0s     max=43.43ms p(90)=0s     p(95)=0s      
     http_req_duration..............: avg=1.28s    min=783.36ms med=1.21s  max=3.8s    p(90)=1.72s  p(95)=2.02s   
       { expected_response:true }...: avg=1.28s    min=783.36ms med=1.21s  max=3.8s    p(90)=1.72s  p(95)=2.02s   
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 4670 
     http_req_receiving.............: avg=75.86µs  min=18.39µs  med=34.7µs max=17.18ms p(90)=66.3µs p(95)=95.72µs 
     http_req_sending...............: avg=298.02µs min=7µs      med=11.6µs max=50.9ms  p(90)=25.9µs p(95)=153.56µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=1.28s    min=783.3ms  med=1.21s  max=3.75s   p(90)=1.72s  p(95)=2.01s   
     http_reqs......................: 4670    77.172555/s
     iteration_duration.............: avg=1.29s    min=783.69ms med=1.21s  max=3.81s   p(90)=1.72s  p(95)=2.05s   
     iterations.....................: 4670    77.172555/s
   ✓ no_errors......................: 0.00%   ✓ 0         ✗ 0    
     vus............................: 100     min=100     max=100
     vus_max........................: 100     min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/fcb38e0f-dbda-4c90-8fb6-08a778437600/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/80805bae-1a80-40d5-a5b3-a72a31c3d200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 13425     ✗ 0    
     data_received..................: 22 MB   368 kB/s
     data_sent......................: 5.3 MB  88 kB/s
   ✓ expected_result................: 0.00%   ✓ 0         ✗ 0    
     http_req_blocked...............: avg=663.86µs min=1.4µs    med=2.9µs  max=57.48ms p(90)=4.4µs   p(95)=5.9µs   
     http_req_connecting............: avg=647.41µs min=0s       med=0s     max=53.77ms p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=1.35s    min=697.64ms med=1.26s  max=3.41s   p(90)=1.79s   p(95)=2.16s   
       { expected_response:true }...: avg=1.35s    min=697.64ms med=1.26s  max=3.41s   p(90)=1.79s   p(95)=2.16s   
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 4475 
     http_req_receiving.............: avg=74.01µs  min=23µs     med=69.1µs max=5.16ms  p(90)=96.76µs p(95)=106.46µs
     http_req_sending...............: avg=142.99µs min=8.69µs   med=18.3µs max=42.55ms p(90)=31.7µs  p(95)=38.9µs  
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=1.35s    min=697.56ms med=1.26s  max=3.39s   p(90)=1.79s   p(95)=2.16s   
     http_reqs......................: 4475    73.702164/s
     iteration_duration.............: avg=1.35s    min=697.98ms med=1.26s  max=3.45s   p(90)=1.79s   p(95)=2.16s   
     iterations.....................: 4475    73.702164/s
   ✓ no_errors......................: 0.00%   ✓ 0         ✗ 0    
     vus............................: 100     min=100     max=100
     vus_max........................: 100     min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8b7b7856-599a-4602-1345-34ab8d84db00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d3c7535c-b6de-4d64-825c-49e9fb83c600/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-deno`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 4225 / ✗ 1
     ✓ expected_result

     checks.........................: 99.99% ✓ 12677     ✗ 1    
     data_received..................: 21 MB  351 kB/s
     data_sent......................: 5.0 MB 83 kB/s
   ✓ expected_result................: 0.00%  ✓ 0         ✗ 0    
     http_req_blocked...............: avg=250.33µs min=700ns    med=1.6µs  max=22.9ms  p(90)=3µs     p(95)=3.8µs  
     http_req_connecting............: avg=239.35µs min=0s       med=0s     max=22.87ms p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=1.42s    min=421.72ms med=1.36s  max=2.57s   p(90)=1.68s   p(95)=1.93s  
       { expected_response:true }...: avg=1.42s    min=421.72ms med=1.36s  max=2.57s   p(90)=1.68s   p(95)=1.93s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 4226 
     http_req_receiving.............: avg=62.04µs  min=14.3µs   med=25.3µs max=11.55ms p(90)=69.09µs p(95)=83.3µs 
     http_req_sending...............: avg=40.28µs  min=5.4µs    med=9.9µs  max=5.33ms  p(90)=20.65µs p(95)=56.59µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=1.42s    min=421.69ms med=1.36s  max=2.57s   p(90)=1.68s   p(95)=1.93s  
     http_reqs......................: 4226   69.994782/s
     iteration_duration.............: avg=1.42s    min=421.93ms med=1.36s  max=2.58s   p(90)=1.68s   p(95)=1.93s  
     iterations.....................: 4226   69.994782/s
   ✓ no_errors......................: 0.00%  ✓ 0         ✗ 0    
     vus............................: 100    min=100     max=100
     vus_max........................: 100    min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4983b554-aedf-4aa9-80c4-070b5cb16c00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e0e71f1c-05db-49c9-28df-a503d983e200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  98% — ✓ 3639 / ✗ 48
     ✓ expected_result

     checks.........................: 99.56% ✓ 11013     ✗ 48   
     data_received..................: 18 MB  302 kB/s
     data_sent......................: 4.4 MB 72 kB/s
   ✓ expected_result................: 0.00%  ✓ 0         ✗ 0    
     http_req_blocked...............: avg=432.96µs min=1.4µs    med=2.29µs max=38.68ms p(90)=3.8µs  p(95)=11.76µs
     http_req_connecting............: avg=421.11µs min=0s       med=0s     max=35.75ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=1.64s    min=947.49ms med=1.57s  max=3.47s   p(90)=1.9s   p(95)=2.2s   
       { expected_response:true }...: avg=1.64s    min=947.49ms med=1.57s  max=3.47s   p(90)=1.9s   p(95)=2.2s   
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 3687 
     http_req_receiving.............: avg=56.29µs  min=22.9µs   med=52.2µs max=4.63ms  p(90)=76.3µs p(95)=85.47µs
     http_req_sending...............: avg=126.08µs min=8µs      med=13.6µs max=13.01ms p(90)=27.4µs p(95)=33.36µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=1.64s    min=947.43ms med=1.57s  max=3.47s   p(90)=1.9s   p(95)=2.2s   
     http_reqs......................: 3687   60.546645/s
     iteration_duration.............: avg=1.64s    min=947.82ms med=1.57s  max=3.48s   p(90)=1.9s   p(95)=2.2s   
     iterations.....................: 3687   60.546645/s
   ✓ no_errors......................: 0.00%  ✓ 0         ✗ 0    
     vus............................: 100    min=100     max=100
     vus_max........................: 100    min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6167e413-3c42-4a49-18a3-f7e9739a9000/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f72fbf5c-a63b-4a42-5596-d9543c350d00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 3538 / ✗ 31
     ✗ expected_result
      ↳  99% — ✓ 3566 / ✗ 3

     checks.........................: 99.68% ✓ 10673   ✗ 34   
     data_received..................: 18 MB  301 kB/s
     data_sent......................: 4.2 MB 70 kB/s
   ✓ expected_result................: 0.00%  ✓ 0       ✗ 0    
     http_req_blocked...............: avg=420.97µs min=1.4µs    med=2.29µs max=36.84ms p(90)=4µs     p(95)=12.2µs 
     http_req_connecting............: avg=388.15µs min=0s       med=0s     max=23.75ms p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=1.69s    min=637.65ms med=1.55s  max=19.35s  p(90)=1.82s   p(95)=2.01s  
       { expected_response:true }...: avg=1.69s    min=637.65ms med=1.55s  max=19.35s  p(90)=1.82s   p(95)=2.01s  
   ✓ http_req_failed................: 0.00%  ✓ 0       ✗ 3569 
     http_req_receiving.............: avg=62.23µs  min=26.3µs   med=59µs   max=627.4µs p(90)=86.12µs p(95)=94.6µs 
     http_req_sending...............: avg=306.64µs min=8.8µs    med=14.3µs max=24.43ms p(90)=28.8µs  p(95)=35.35µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=1.69s    min=637.51ms med=1.55s  max=19.35s  p(90)=1.82s   p(95)=2.01s  
     http_reqs......................: 3569   58.5856/s
     iteration_duration.............: avg=1.69s    min=638.38ms med=1.55s  max=19.36s  p(90)=1.82s   p(95)=2.01s  
     iterations.....................: 3569   58.5856/s
   ✓ no_errors......................: 0.00%  ✓ 0       ✗ 0    
     vus............................: 100    min=100   max=100
     vus_max........................: 100    min=100   max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/14b8cfae-3ba6-4c1d-3cd3-7fae7e955000/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1d5f6fbc-bbea-4494-4030-64a6d23cde00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 3139 / ✗ 11
     ✗ expected_result
      ↳  99% — ✓ 3149 / ✗ 1

     checks.........................: 99.87% ✓ 9438      ✗ 12   
     data_received..................: 16 MB  259 kB/s
     data_sent......................: 3.7 MB 61 kB/s
   ✓ expected_result................: 0.00%  ✓ 0         ✗ 0    
     http_req_blocked...............: avg=230.44µs min=1.4µs  med=2.2µs  max=16.99ms p(90)=3.6µs   p(95)=11.95µs
     http_req_connecting............: avg=213.54µs min=0s     med=0s     max=16.95ms p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=1.92s    min=1.11s  med=1.86s  max=4.29s   p(90)=2.24s   p(95)=2.42s  
       { expected_response:true }...: avg=1.92s    min=1.11s  med=1.86s  max=4.29s   p(90)=2.24s   p(95)=2.42s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 3150 
     http_req_receiving.............: avg=54.38µs  min=21.9µs med=49.7µs max=1.32ms  p(90)=77.31µs p(95)=85.9µs 
     http_req_sending...............: avg=42.03µs  min=9.1µs  med=13.5µs max=16.31ms p(90)=27.7µs  p(95)=40.3µs 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=1.92s    min=1.11s  med=1.86s  max=4.29s   p(90)=2.24s   p(95)=2.42s  
     http_reqs......................: 3150   51.577092/s
     iteration_duration.............: avg=1.92s    min=1.11s  med=1.86s  max=4.3s    p(90)=2.24s   p(95)=2.42s  
     iterations.....................: 3150   51.577092/s
   ✓ no_errors......................: 0.00%  ✓ 0         ✗ 0    
     vus............................: 42     min=42      max=100
     vus_max........................: 100    min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/921afa85-ed2c-47f0-4ccd-bee7f3af5c00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/56c58371-0162-404c-e5c4-b8e920209400/public" alt="HTTP Overview" />


  </details>