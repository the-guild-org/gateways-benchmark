## Overview for scenario: `constant-vus-over-time`


This scenario runs 4 servics and a GraphQL gateway with Federation spec, and runs a heavy query. It's being executed with a constant amount of VUs over a fixed amount of time. It measure things like memory usage, CPU usage, average RPS. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was running 100 VUs over 60s


### Comparison


| Gateway                             | RPS ⬇️ |       Requests        |         Duration         |
| :---------------------------------- | :----: | :-------------------: | :----------------------: |
| wundergraph                         |  749   | 45046 total, 0 failed |  avg: 132ms, p95: 218ms  |
| mesh                                |   98   | 5977 total, 0 failed  | avg: 1008ms, p95: 1543ms |
| apollo-router                       |   85   | 5188 total, 0 failed  | avg: 1163ms, p95: 2169ms |
| stitching-federation-with-yoga-bun  |   61   | 3718 total, 0 failed  | avg: 1612ms, p95: 2649ms |
| stitching-federation-with-yoga-deno |   61   | 3719 total, 0 failed  | avg: 1620ms, p95: 2063ms |
| mercurius                           |   58   | 3550 total, 0 failed  | avg: 1696ms, p95: 2136ms |
| apollo-server                       |   57   | 3528 total, 0 failed  | avg: 1715ms, p95: 1977ms |
| apollo-gateway-with-yoga            |   51   | 3147 total, 0 failed  | avg: 1930ms, p95: 2588ms |
| stitching-federation-with-yoga      |   48   | 2973 total, 0 failed  | avg: 2045ms, p95: 2644ms |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 135138     ✗ 0    
     data_received..................: 219 MB  3.6 MB/s
     data_sent......................: 54 MB   890 kB/s
   ✓ expected_result................: 0.00%   ✓ 0          ✗ 0    
     http_req_blocked...............: avg=28.82µs  min=1.1µs   med=2.29µs   max=93.44ms  p(90)=3.7µs    p(95)=4.5µs   
     http_req_connecting............: avg=21.39µs  min=0s      med=0s       max=25.06ms  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=132.46ms min=18.47ms med=124.11ms max=381.85ms p(90)=192.51ms p(95)=218.19ms
       { expected_response:true }...: avg=132.46ms min=18.47ms med=124.11ms max=381.85ms p(90)=192.51ms p(95)=218.19ms
   ✓ http_req_failed................: 0.00%   ✓ 0          ✗ 45046
     http_req_receiving.............: avg=667.58µs min=19µs    med=50.6µs   max=139.37ms p(90)=284.6µs  p(95)=728.08µs
     http_req_sending...............: avg=147.28µs min=7.4µs   med=13.1µs   max=123.5ms  p(90)=26.2µs   p(95)=83.67µs 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=131.64ms min=18.24ms med=123.59ms max=378.73ms p(90)=190.9ms  p(95)=215.02ms
     http_reqs......................: 45046   749.856665/s
     iteration_duration.............: avg=133.22ms min=18.79ms med=124.83ms max=382.22ms p(90)=193.72ms p(95)=219.76ms
     iterations.....................: 45046   749.856665/s
   ✓ no_errors......................: 0.00%   ✓ 0          ✗ 0    
     vus............................: 100     min=100      max=100
     vus_max........................: 100     min=100      max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8485b397-0a92-4f98-6a3a-8c19e88c6400/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/38f91c2f-9731-4fc3-a3c2-bce271719a00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 17931     ✗ 0    
     data_received..................: 30 MB   494 kB/s
     data_sent......................: 7.1 MB  117 kB/s
   ✓ expected_result................: 0.00%   ✓ 0         ✗ 0    
     http_req_blocked...............: avg=64.95µs min=1µs      med=2µs      max=14.26ms p(90)=2.9µs  p(95)=3.41µs 
     http_req_connecting............: avg=59.68µs min=0s       med=0s       max=11.98ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=1s      min=459.82ms med=965.82ms max=3s      p(90)=1.35s  p(95)=1.54s  
       { expected_response:true }...: avg=1s      min=459.82ms med=965.82ms max=3s      p(90)=1.35s  p(95)=1.54s  
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 5977 
     http_req_receiving.............: avg=46.51µs min=16.2µs   med=41.09µs  max=2.49ms  p(90)=61.4µs p(95)=71.09µs
     http_req_sending...............: avg=38.67µs min=6.3µs    med=12.5µs   max=14.19ms p(90)=24.8µs p(95)=29µs   
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s       max=0s      p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=1s      min=459.74ms med=965.77ms max=2.99s   p(90)=1.35s  p(95)=1.54s  
     http_reqs......................: 5977    98.814574/s
     iteration_duration.............: avg=1s      min=460.12ms med=966.11ms max=3s      p(90)=1.35s  p(95)=1.54s  
     iterations.....................: 5977    98.814574/s
   ✓ no_errors......................: 0.00%   ✓ 0         ✗ 0    
     vus............................: 100     min=100     max=100
     vus_max........................: 100     min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4f2e4914-164c-4be3-3f3b-f2c6c79a0700/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9a54127f-c01b-4cf2-b87a-0172f73c8a00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 5187 / ✗ 1
     ✓ expected_result

     checks.........................: 99.99% ✓ 15563     ✗ 1    
     data_received..................: 26 MB  427 kB/s
     data_sent......................: 6.2 MB 102 kB/s
   ✓ expected_result................: 0.00%  ✓ 0         ✗ 0    
     http_req_blocked...............: avg=72µs    min=1.6µs    med=2.9µs  max=12.9ms  p(90)=3.9µs  p(95)=5.4µs  
     http_req_connecting............: avg=66.89µs min=0s       med=0s     max=12.85ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=1.16s   min=144.64ms med=1.05s  max=4.31s   p(90)=1.89s  p(95)=2.16s  
       { expected_response:true }...: avg=1.16s   min=144.64ms med=1.05s  max=4.31s   p(90)=1.89s  p(95)=2.16s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 5188 
     http_req_receiving.............: avg=69.53µs min=24.29µs  med=67.3µs max=1.67ms  p(90)=89.3µs p(95)=96.46µs
     http_req_sending...............: avg=39.9µs  min=8.3µs    med=18.2µs max=20.91ms p(90)=33.7µs p(95)=38.7µs 
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s     max=0s      p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=1.16s   min=144.52ms med=1.05s  max=4.31s   p(90)=1.89s  p(95)=2.16s  
     http_reqs......................: 5188   85.630721/s
     iteration_duration.............: avg=1.16s   min=145.12ms med=1.05s  max=4.31s   p(90)=1.89s  p(95)=2.16s  
     iterations.....................: 5188   85.630721/s
   ✓ no_errors......................: 0.00%  ✓ 0         ✗ 0    
     vus............................: 100    min=100     max=100
     vus_max........................: 100    min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/206c9c4b-3039-4dc0-98d0-63d8b5425b00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/79d08cf8-8df3-420d-0e16-edcf05c4fa00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 3713 / ✗ 5
     ✓ expected_result

     checks.........................: 99.95% ✓ 11149     ✗ 5    
     data_received..................: 19 MB  308 kB/s
     data_sent......................: 4.4 MB 73 kB/s
   ✓ expected_result................: 0.00%  ✓ 0         ✗ 0    
     http_req_blocked...............: avg=878.76µs min=1.1µs    med=2.4µs  max=76.31ms p(90)=3.6µs    p(95)=14.01µs 
     http_req_connecting............: avg=848.17µs min=0s       med=0s     max=76.2ms  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=1.61s    min=204.13ms med=1.49s  max=4.14s   p(90)=2.31s    p(95)=2.64s   
       { expected_response:true }...: avg=1.61s    min=204.13ms med=1.49s  max=4.14s   p(90)=2.31s    p(95)=2.64s   
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 3718 
     http_req_receiving.............: avg=188.48µs min=21µs     med=37.2µs max=44.7ms  p(90)=95.9µs   p(95)=222.1µs 
     http_req_sending...............: avg=362.53µs min=8.1µs    med=13.6µs max=46.46ms p(90)=104.59µs p(95)=305.74µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=1.61s    min=203.74ms med=1.49s  max=4.14s   p(90)=2.31s    p(95)=2.64s   
     http_reqs......................: 3718   61.802337/s
     iteration_duration.............: avg=1.61s    min=252.03ms med=1.49s  max=4.19s   p(90)=2.34s    p(95)=2.65s   
     iterations.....................: 3718   61.802337/s
   ✓ no_errors......................: 0.00%  ✓ 0         ✗ 0    
     vus............................: 100    min=100     max=100
     vus_max........................: 100    min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b4add182-59ee-4584-dfab-beec57e2c100/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/37a7595b-b5d8-4e99-a2ce-c556b7b4b200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-deno`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 11157     ✗ 0    
     data_received..................: 19 MB   308 kB/s
     data_sent......................: 4.4 MB  73 kB/s
   ✓ expected_result................: 0.00%   ✓ 0         ✗ 0    
     http_req_blocked...............: avg=175.91µs min=1µs      med=1.9µs  max=20.02ms p(90)=3.3µs   p(95)=7.66µs 
     http_req_connecting............: avg=160.71µs min=0s       med=0s     max=19.9ms  p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=1.61s    min=451.46ms med=1.56s  max=2.86s   p(90)=1.89s   p(95)=2.06s  
       { expected_response:true }...: avg=1.61s    min=451.46ms med=1.56s  max=2.86s   p(90)=1.89s   p(95)=2.06s  
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 3719 
     http_req_receiving.............: avg=80.12µs  min=15.8µs   med=33.3µs max=15.82ms p(90)=78.32µs p(95)=90.94µs
     http_req_sending...............: avg=43.95µs  min=6µs      med=11.4µs max=18.32ms p(90)=24.5µs  p(95)=85.44µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=1.61s    min=451.4ms  med=1.56s  max=2.86s   p(90)=1.89s   p(95)=2.06s  
     http_reqs......................: 3719    61.585563/s
     iteration_duration.............: avg=1.62s    min=451.71ms med=1.56s  max=2.87s   p(90)=1.89s   p(95)=2.06s  
     iterations.....................: 3719    61.585563/s
   ✓ no_errors......................: 0.00%   ✓ 0         ✗ 0    
     vus............................: 100     min=100     max=100
     vus_max........................: 100     min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b7582056-426f-4e52-44ce-6edd48a34d00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/71704a59-29af-4d70-36c0-56cb7a946000/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 10650     ✗ 0    
     data_received..................: 18 MB   296 kB/s
     data_sent......................: 4.2 MB  70 kB/s
   ✓ expected_result................: 0.00%   ✓ 0         ✗ 0    
     http_req_blocked...............: avg=192.42µs min=1.4µs    med=3µs    max=17.14ms p(90)=4.59µs   p(95)=20.56µs 
     http_req_connecting............: avg=182.87µs min=0s       med=0s     max=17.04ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=1.69s    min=475.05ms med=1.63s  max=5.06s   p(90)=1.9s     p(95)=2.13s   
       { expected_response:true }...: avg=1.69s    min=475.05ms med=1.63s  max=5.06s   p(90)=1.9s     p(95)=2.13s   
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 3550 
     http_req_receiving.............: avg=79.86µs  min=26.5µs   med=73.2µs max=4.96ms  p(90)=111.81µs p(95)=131.93µs
     http_req_sending...............: avg=47.11µs  min=10µs     med=19.7µs max=3.45ms  p(90)=43.09µs  p(95)=68.42µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=1.69s    min=474.98ms med=1.63s  max=5.06s   p(90)=1.9s     p(95)=2.13s   
     http_reqs......................: 3550    58.742338/s
     iteration_duration.............: avg=1.69s    min=475.42ms med=1.63s  max=5.07s   p(90)=1.9s     p(95)=2.13s   
     iterations.....................: 3550    58.742338/s
   ✓ no_errors......................: 0.00%   ✓ 0         ✗ 0    
     vus............................: 100     min=100     max=100
     vus_max........................: 100     min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5ff2f42a-0fb7-40b4-704f-1de60acdfd00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/12413599-8585-4c81-ee60-18e4b2fed900/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 3503 / ✗ 25
     ✓ expected_result

     checks.........................: 99.76% ✓ 10559     ✗ 25   
     data_received..................: 18 MB  298 kB/s
     data_sent......................: 4.2 MB 69 kB/s
   ✓ expected_result................: 0.00%  ✓ 0         ✗ 0    
     http_req_blocked...............: avg=701.78µs min=1.4µs    med=2.5µs   max=54.91ms p(90)=3.7µs  p(95)=12.1µs 
     http_req_connecting............: avg=678.65µs min=0s       med=0s      max=43.86ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=1.71s    min=846.13ms med=1.61s   max=14.35s  p(90)=1.84s  p(95)=1.97s  
       { expected_response:true }...: avg=1.71s    min=846.13ms med=1.61s   max=14.35s  p(90)=1.84s  p(95)=1.97s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 3528 
     http_req_receiving.............: avg=67.95µs  min=25.3µs   med=64.6µs  max=4.46ms  p(90)=86.9µs p(95)=92.9µs 
     http_req_sending...............: avg=89.73µs  min=8.9µs    med=15.75µs max=12.44ms p(90)=30.1µs p(95)=35.26µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s      p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=1.71s    min=846.05ms med=1.61s   max=14.35s  p(90)=1.84s  p(95)=1.97s  
     http_reqs......................: 3528   57.959404/s
     iteration_duration.............: avg=1.71s    min=846.38ms med=1.61s   max=14.35s  p(90)=1.85s  p(95)=1.97s  
     iterations.....................: 3528   57.959404/s
   ✓ no_errors......................: 0.00%  ✓ 0         ✗ 0    
     vus............................: 100    min=100     max=100
     vus_max........................: 100    min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b9ce0da4-5511-4b7d-62f3-127dfdc47200/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/be94a534-ef7f-4ddb-df1a-cf86729d3100/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 3145 / ✗ 2
     ✓ expected_result

     checks.........................: 99.97% ✓ 9439      ✗ 2    
     data_received..................: 16 MB  257 kB/s
     data_sent......................: 3.7 MB 61 kB/s
   ✓ expected_result................: 0.00%  ✓ 0         ✗ 0    
     http_req_blocked...............: avg=153.54µs min=1.5µs  med=2.6µs  max=20.51ms p(90)=4.1µs   p(95)=16.1µs 
     http_req_connecting............: avg=142µs    min=0s     med=0s     max=19.91ms p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=1.92s    min=1.14s  med=1.83s  max=4.03s   p(90)=2.29s   p(95)=2.58s  
       { expected_response:true }...: avg=1.92s    min=1.14s  med=1.83s  max=4.03s   p(90)=2.29s   p(95)=2.58s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 3147 
     http_req_receiving.............: avg=66.24µs  min=18.8µs med=58µs   max=9.27ms  p(90)=83.64µs p(95)=92.04µs
     http_req_sending...............: avg=65.28µs  min=8.9µs  med=16.4µs max=15.04ms p(90)=33.3µs  p(95)=40.97µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=1.92s    min=1.14s  med=1.83s  max=4.03s   p(90)=2.29s   p(95)=2.58s  
     http_reqs......................: 3147   51.447898/s
     iteration_duration.............: avg=1.93s    min=1.14s  med=1.83s  max=4.03s   p(90)=2.29s   p(95)=2.58s  
     iterations.....................: 3147   51.447898/s
   ✓ no_errors......................: 0.00%  ✓ 0         ✗ 0    
     vus............................: 49     min=49      max=100
     vus_max........................: 100    min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/970d51bd-fe72-4f6e-4296-de9743d5a200/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/273cc08b-6980-4f4a-490c-31ad598f8700/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 2971 / ✗ 2
     ✓ expected_result

     checks.........................: 99.97% ✓ 8917     ✗ 2    
     data_received..................: 15 MB  244 kB/s
     data_sent......................: 3.5 MB 58 kB/s
   ✓ expected_result................: 0.00%  ✓ 0        ✗ 0    
     http_req_blocked...............: avg=181.61µs min=1.2µs med=2.5µs   max=13.03ms p(90)=3.8µs  p(95)=11.64µs
     http_req_connecting............: avg=175.41µs min=0s    med=0s      max=13ms    p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=2.04s    min=1.13s med=1.96s   max=4.74s   p(90)=2.3s   p(95)=2.64s  
       { expected_response:true }...: avg=2.04s    min=1.13s med=1.96s   max=4.74s   p(90)=2.3s   p(95)=2.64s  
   ✓ http_req_failed................: 0.00%  ✓ 0        ✗ 2973 
     http_req_receiving.............: avg=63.18µs  min=19µs  med=56.59µs max=6.32ms  p(90)=85.7µs p(95)=91.74µs
     http_req_sending...............: avg=40.56µs  min=8.3µs med=16.1µs  max=4.11ms  p(90)=31.2µs p(95)=57.3µs 
     http_req_tls_handshaking.......: avg=0s       min=0s    med=0s      max=0s      p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=2.04s    min=1.13s med=1.96s   max=4.74s   p(90)=2.3s   p(95)=2.64s  
     http_reqs......................: 2973   48.63083/s
     iteration_duration.............: avg=2.04s    min=1.13s med=1.96s   max=4.75s   p(90)=2.3s   p(95)=2.64s  
     iterations.....................: 2973   48.63083/s
   ✓ no_errors......................: 0.00%  ✓ 0        ✗ 0    
     vus............................: 46     min=46     max=100
     vus_max........................: 100    min=100    max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e538b892-c7c6-4d0a-212a-bc3ef10a1600/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c2f1c35e-f963-4c25-0120-016e59ab7600/public" alt="HTTP Overview" />


  </details>