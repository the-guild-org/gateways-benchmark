## Overview for scenario: `constant-vus-over-time`


This scenario runs 4 servics and a GraphQL gatway with Federation spec, and runs a heavy query. It's being executed with a constant amount of VUs over a fixed amount of time. It measure things like memory usage, CPU usage, average RPS. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


### Comparison


| Gateway                  | RPS ⬇️ |       Requests        |         Duration         |
| :----------------------- | :----: | :-------------------: | :----------------------: |
| wundergraph              |  1469  | 88245 total, 0 failed |  avg: 67ms, p95: 115ms   |
| apollo-router            |  190   | 11478 total, 0 failed |  avg: 525ms, p95: 745ms  |
| mercurius                |  112   | 6806 total, 0 failed  | avg: 883ms, p95: 1009ms  |
| apollo-gateway-with-yoga |   85   | 5199 total, 0 failed  | avg: 1162ms, p95: 1473ms |
| apollo-server            |   77   | 4703 total, 0 failed  | avg: 1286ms, p95: 1621ms |
| mesh                     |   58   | 3559 total, 0 failed  | avg: 1697ms, p95: 2356ms |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**


```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 264735      ✗ 0    
     data_received..................: 429 MB  7.1 MB/s
     data_sent......................: 105 MB  1.7 MB/s
   ✓ expected_result................: 0.00%   ✓ 0           ✗ 0    
     http_req_blocked...............: avg=12.44µs  min=900ns  med=2.9µs   max=81.21ms  p(90)=4.3µs    p(95)=5µs     
     http_req_connecting............: avg=3.06µs   min=0s     med=0s      max=9.96ms   p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=66.87ms  min=6.34ms med=61.78ms max=238.51ms p(90)=100.42ms p(95)=115.14ms
       { expected_response:true }...: avg=66.87ms  min=6.34ms med=61.78ms max=238.51ms p(90)=100.42ms p(95)=115.14ms
   ✓ http_req_failed................: 0.00%   ✓ 0           ✗ 88245
     http_req_receiving.............: avg=539.96µs min=16.9µs med=45.1µs  max=152.96ms p(90)=332.5µs  p(95)=1.13ms  
     http_req_sending...............: avg=123µs    min=6.2µs  med=15.9µs  max=123.19ms p(90)=31µs     p(95)=147.4µs 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=66.2ms   min=6.29ms med=61.29ms max=237.05ms p(90)=99.31ms  p(95)=113.59ms
     http_reqs......................: 88245   1469.977143/s
     iteration_duration.............: avg=67.97ms  min=6.64ms med=62.74ms max=340.68ms p(90)=102.07ms p(95)=117.03ms
     iterations.....................: 88245   1469.977143/s
   ✓ no_errors......................: 0.00%   ✓ 0           ✗ 0    
     vus............................: 100     min=100       max=100
     vus_max........................: 100     min=100       max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/04936882-c2db-4fa0-e6d5-d52d9b9c8c00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/edbfd281-436a-408b-7797-3f719b41c900/public" alt="HTTP Overview" />
  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**


```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 11473 / ✗ 5
     ✓ expected_result

     checks.........................: 99.98% ✓ 34429      ✗ 5    
     data_received..................: 56 MB  929 kB/s
     data_sent......................: 14 MB  226 kB/s
   ✓ expected_result................: 0.00%  ✓ 0          ✗ 0    
     http_req_blocked...............: avg=12.37µs  min=1.1µs    med=3.1µs    max=10.41ms p(90)=4.4µs    p(95)=4.89µs  
     http_req_connecting............: avg=8.2µs    min=0s       med=0s       max=10.36ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=524.6ms  min=213.49ms med=503.28ms max=1.88s   p(90)=672.71ms p(95)=745.21ms
       { expected_response:true }...: avg=524.6ms  min=213.49ms med=503.28ms max=1.88s   p(90)=672.71ms p(95)=745.21ms
   ✓ http_req_failed................: 0.00%  ✓ 0          ✗ 11478
     http_req_receiving.............: avg=61.71µs  min=18.8µs   med=47.9µs   max=14.44ms p(90)=73.7µs   p(95)=82.8µs  
     http_req_sending...............: avg=36.3µs   min=7.6µs    med=16.89µs  max=44.58ms p(90)=26.3µs   p(95)=33.5µs  
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=524.5ms  min=213.42ms med=503.15ms max=1.88s   p(90)=672.62ms p(95)=745.12ms
     http_reqs......................: 11478  190.126068/s
     iteration_duration.............: avg=525.03ms min=213.86ms med=503.69ms max=1.88s   p(90)=673.36ms p(95)=745.64ms
     iterations.....................: 11478  190.126068/s
   ✓ no_errors......................: 0.00%  ✓ 0          ✗ 0    
     vus............................: 100    min=100      max=100
     vus_max........................: 100    min=100      max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/52b9d02a-1692-48f4-a1e3-85b9be2d8b00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3c30dcd6-de09-416d-ead0-12581240f700/public" alt="HTTP Overview" />
  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**


```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 20418      ✗ 0    
     data_received..................: 33 MB   552 kB/s
     data_sent......................: 8.1 MB  134 kB/s
   ✓ expected_result................: 0.00%   ✓ 0          ✗ 0    
     http_req_blocked...............: avg=93.89µs  min=1.6µs    med=3.5µs    max=20.51ms p(90)=5.2µs    p(95)=6µs     
     http_req_connecting............: avg=87.13µs  min=0s       med=0s       max=20.39ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=882.92ms min=278.68ms med=848.56ms max=2.52s   p(90)=938.84ms p(95)=1s      
       { expected_response:true }...: avg=882.92ms min=278.68ms med=848.56ms max=2.52s   p(90)=938.84ms p(95)=1s      
   ✓ http_req_failed................: 0.00%   ✓ 0          ✗ 6806 
     http_req_receiving.............: avg=72.59µs  min=29.5µs   med=68.1µs   max=2.7ms   p(90)=94.55µs  p(95)=104.97µs
     http_req_sending...............: avg=38.8µs   min=9.79µs   med=22µs     max=14.7ms  p(90)=35.5µs   p(95)=42.2µs  
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=882.81ms min=278.61ms med=848.46ms max=2.52s   p(90)=938.75ms p(95)=1s      
     http_reqs......................: 6806    112.946214/s
     iteration_duration.............: avg=883.43ms min=278.94ms med=848.96ms max=2.53s   p(90)=939.32ms p(95)=1s      
     iterations.....................: 6806    112.946214/s
   ✓ no_errors......................: 0.00%   ✓ 0          ✗ 0    
     vus............................: 100     min=100      max=100
     vus_max........................: 100     min=100      max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4fa8185b-c846-47c7-3b52-aa459c97db00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b8e94933-cc55-4a48-85b8-cede22b05a00/public" alt="HTTP Overview" />
  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga`</summary>

  **K6 Output**


```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 5196 / ✗ 3
     ✓ expected_result

     checks.........................: 99.98% ✓ 15594     ✗ 3    
     data_received..................: 26 MB  422 kB/s
     data_sent......................: 6.2 MB 102 kB/s
   ✓ expected_result................: 0.00%  ✓ 0         ✗ 0    
     http_req_blocked...............: avg=106.93µs min=1.4µs    med=2.8µs  max=14.71ms p(90)=4.2µs   p(95)=4.8µs 
     http_req_connecting............: avg=98.14µs  min=0s       med=0s     max=12.26ms p(90)=0s      p(95)=0s    
     http_req_duration..............: avg=1.16s    min=726.89ms med=1.1s   max=2.73s   p(90)=1.31s   p(95)=1.47s 
       { expected_response:true }...: avg=1.16s    min=726.89ms med=1.1s   max=2.73s   p(90)=1.31s   p(95)=1.47s 
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 5199 
     http_req_receiving.............: avg=61.09µs  min=24.5µs   med=57.1µs max=795.1µs p(90)=84.92µs p(95)=93.3µs
     http_req_sending...............: avg=32.46µs  min=9µs      med=18.8µs max=11.27ms p(90)=29.6µs  p(95)=34.6µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s      p(95)=0s    
     http_req_waiting...............: avg=1.16s    min=726.82ms med=1.1s   max=2.73s   p(90)=1.31s   p(95)=1.47s 
     http_reqs......................: 5199   85.596726/s
     iteration_duration.............: avg=1.16s    min=727.23ms med=1.1s   max=2.73s   p(90)=1.32s   p(95)=1.47s 
     iterations.....................: 5199   85.596726/s
   ✓ no_errors......................: 0.00%  ✓ 0         ✗ 0    
     vus............................: 100    min=100     max=100
     vus_max........................: 100    min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a04fee45-0a97-4ef7-97e7-2385c3ff1a00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e7b1056d-351e-4265-b471-02788d285600/public" alt="HTTP Overview" />
  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**


```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 4690 / ✗ 13
     ✓ expected_result

     checks.........................: 99.90% ✓ 14096     ✗ 13   
     data_received..................: 24 MB  391 kB/s
     data_sent......................: 5.6 MB 92 kB/s
   ✓ expected_result................: 0.00%  ✓ 0         ✗ 0    
     http_req_blocked...............: avg=22.97µs min=1.4µs    med=2.9µs  max=13.3ms p(90)=4.7µs   p(95)=5.4µs   
     http_req_connecting............: avg=15.54µs min=0s       med=0s     max=2.87ms p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=1.28s   min=838.89ms med=1.23s  max=2.77s  p(90)=1.44s   p(95)=1.62s   
       { expected_response:true }...: avg=1.28s   min=838.89ms med=1.23s  max=2.77s  p(90)=1.44s   p(95)=1.62s   
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 4703 
     http_req_receiving.............: avg=68.24µs min=30.8µs   med=62.9µs max=1.21ms p(90)=95.38µs p(95)=106.09µs
     http_req_sending...............: avg=30.31µs min=8.4µs    med=20.5µs max=2.87ms p(90)=31.4µs  p(95)=37.4µs  
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s     max=0s     p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=1.28s   min=838.81ms med=1.23s  max=2.77s  p(90)=1.44s   p(95)=1.62s   
     http_reqs......................: 4703   77.365572/s
     iteration_duration.............: avg=1.28s   min=839.29ms med=1.24s  max=2.77s  p(90)=1.44s   p(95)=1.62s   
     iterations.....................: 4703   77.365572/s
   ✓ no_errors......................: 0.00%  ✓ 0         ✗ 0    
     vus............................: 100    min=100     max=100
     vus_max........................: 100    min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/cdb5d62c-7d81-4bd6-8904-b98e95dddb00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1fc94d72-76da-4d9d-6598-d7b4eac12100/public" alt="HTTP Overview" />
  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**


```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 3553 / ✗ 6
     ✓ expected_result

     checks.........................: 99.94% ✓ 10671     ✗ 6    
     data_received..................: 17 MB  286 kB/s
     data_sent......................: 4.2 MB 70 kB/s
   ✓ expected_result................: 0.00%  ✓ 0         ✗ 0    
     http_req_blocked...............: avg=80.85µs  min=1.4µs    med=2.7µs  max=10.14ms p(90)=4.3µs   p(95)=5.4µs  
     http_req_connecting............: avg=72.7µs   min=0s       med=0s     max=10.09ms p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=1.69s    min=921.05ms med=1.63s  max=3.38s   p(90)=1.93s   p(95)=2.35s  
       { expected_response:true }...: avg=1.69s    min=921.05ms med=1.63s  max=3.38s   p(90)=1.93s   p(95)=2.35s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 3559 
     http_req_receiving.............: avg=65.17µs  min=28.4µs   med=55.3µs max=14.55ms p(90)=83.4µs  p(95)=96.12µs
     http_req_sending...............: avg=105.72µs min=9.6µs    med=18.5µs max=10.68ms p(90)=28.82µs p(95)=34.6µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=1.69s    min=920.94ms med=1.63s  max=3.38s   p(90)=1.93s   p(95)=2.35s  
     http_reqs......................: 3559   58.546014/s
     iteration_duration.............: avg=1.69s    min=921.39ms med=1.63s  max=3.38s   p(90)=1.93s   p(95)=2.35s  
     iterations.....................: 3559   58.546014/s
   ✓ no_errors......................: 0.00%  ✓ 0         ✗ 0    
     vus............................: 100    min=100     max=100
     vus_max........................: 100    min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/10d20e07-ac45-4f6d-c128-8418a8406300/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8c28b536-6f6b-4f20-a8d6-4ea1848b8700/public" alt="HTTP Overview" />
  </details>