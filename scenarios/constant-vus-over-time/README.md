## Overview for scenario: `constant-vus-over-time`


This scenario runs 4 servics and a GraphQL gatway with Federation spec, and runs a heavy query. It's being executed with a constant amount of VUs over a fixed amount of time. It measure things like memory usage, CPU usage, average RPS. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was running 100 VUs over 60s


### Comparison


| Gateway                  | RPS ⬇️ |       Requests        |         Duration         |
| :----------------------- | :----: | :-------------------: | :----------------------: |
| wundergraph              |  843   | 50645 total, 0 failed |  avg: 118ms, p95: 187ms  |
| apollo-router            |  109   | 6593 total, 0 failed  | avg: 913ms, p95: 1598ms  |
| mercurius                |   77   | 4694 total, 0 failed  | avg: 1281ms, p95: 1906ms |
| apollo-gateway-with-yoga |   62   | 3798 total, 0 failed  | avg: 1597ms, p95: 2205ms |
| apollo-server            |   60   | 3676 total, 0 failed  | avg: 1652ms, p95: 2277ms |
| mesh                     |   51   | 3160 total, 0 failed  | avg: 1913ms, p95: 2823ms |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 151935     ✗ 0    
     data_received..................: 246 MB  4.1 MB/s
     data_sent......................: 60 MB   1.0 MB/s
   ✓ expected_result................: 0.00%   ✓ 0          ✗ 0    
     http_req_blocked...............: avg=20.68µs  min=900ns   med=2.1µs    max=17.54ms  p(90)=3.3µs    p(95)=4µs     
     http_req_connecting............: avg=16.09µs  min=0s      med=0s       max=17.42ms  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=117.87ms min=19.83ms med=112.09ms max=388.75ms p(90)=167.22ms p(95)=187.44ms
       { expected_response:true }...: avg=117.87ms min=19.83ms med=112.09ms max=388.75ms p(90)=167.22ms p(95)=187.44ms
   ✓ http_req_failed................: 0.00%   ✓ 0          ✗ 50645
     http_req_receiving.............: avg=437.18µs min=17.6µs  med=42.7µs   max=95.72ms  p(90)=225.38µs p(95)=524.77µs
     http_req_sending...............: avg=128.38µs min=6.5µs   med=12.2µs   max=161.25ms p(90)=24.3µs   p(95)=91.71µs 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=117.31ms min=19.72ms med=111.66ms max=388.71ms p(90)=166ms    p(95)=186.57ms
     http_reqs......................: 50645   843.054299/s
     iteration_duration.............: avg=118.53ms min=20.13ms med=112.71ms max=389ms    p(90)=168.07ms p(95)=188.58ms
     iterations.....................: 50645   843.054299/s
   ✓ no_errors......................: 0.00%   ✓ 0          ✗ 0    
     vus............................: 100     min=100      max=100
     vus_max........................: 100     min=100      max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e77cc6e2-4801-430a-1c65-2cf8091a7e00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/26d30a13-e024-4694-8c7e-9aaf0adeb100/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 6590 / ✗ 3
     ✓ expected_result

     checks.........................: 99.98% ✓ 19776     ✗ 3    
     data_received..................: 32 MB  533 kB/s
     data_sent......................: 7.8 MB 130 kB/s
   ✓ expected_result................: 0.00%  ✓ 0         ✗ 0    
     http_req_blocked...............: avg=164.92µs min=1.3µs   med=2.1µs    max=27.18ms p(90)=3.1µs p(95)=3.7µs  
     http_req_connecting............: avg=157.59µs min=0s      med=0s       max=27.12ms p(90)=0s    p(95)=0s     
     http_req_duration..............: avg=913.27ms min=54.92ms med=848ms    max=3.2s    p(90)=1.36s p(95)=1.59s  
       { expected_response:true }...: avg=913.27ms min=54.92ms med=848ms    max=3.2s    p(90)=1.36s p(95)=1.59s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 6593 
     http_req_receiving.............: avg=51.08µs  min=21.8µs  med=44.4µs   max=2.36ms  p(90)=71µs  p(95)=78.64µs
     http_req_sending...............: avg=33.63µs  min=7.9µs   med=13µs     max=9.12ms  p(90)=26µs  p(95)=31.2µs 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s      p(90)=0s    p(95)=0s     
     http_req_waiting...............: avg=913.18ms min=54.87ms med=847.95ms max=3.2s    p(90)=1.36s p(95)=1.59s  
     http_reqs......................: 6593   109.11775/s
     iteration_duration.............: avg=913.74ms min=55.17ms med=848.34ms max=3.21s   p(90)=1.36s p(95)=1.59s  
     iterations.....................: 6593   109.11775/s
   ✓ no_errors......................: 0.00%  ✓ 0         ✗ 0    
     vus............................: 100    min=100     max=100
     vus_max........................: 100    min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/455412df-09db-47bf-1d7c-d06656915700/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/04d621f5-5cbc-434e-c014-16441bbe0d00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 14082     ✗ 0    
     data_received..................: 23 MB   381 kB/s
     data_sent......................: 5.6 MB  92 kB/s
   ✓ expected_result................: 0.00%   ✓ 0         ✗ 0    
     http_req_blocked...............: avg=465.2µs  min=1µs      med=2.4µs  max=32.7ms  p(90)=3.4µs  p(95)=7.43µs
     http_req_connecting............: avg=449.28µs min=0s       med=0s     max=32.64ms p(90)=0s     p(95)=0s    
     http_req_duration..............: avg=1.28s    min=330.5ms  med=1.2s   max=3.67s   p(90)=1.51s  p(95)=1.9s  
       { expected_response:true }...: avg=1.28s    min=330.5ms  med=1.2s   max=3.67s   p(90)=1.51s  p(95)=1.9s  
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 4694 
     http_req_receiving.............: avg=60.9µs   min=23.5µs   med=59.2µs max=3.94ms  p(90)=79.2µs p(95)=84.9µs
     http_req_sending...............: avg=139.71µs min=6.7µs    med=14.8µs max=15.73ms p(90)=28.5µs p(95)=34µs  
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s     p(95)=0s    
     http_req_waiting...............: avg=1.28s    min=330.44ms med=1.2s   max=3.66s   p(90)=1.51s  p(95)=1.9s  
     http_reqs......................: 4694    77.804444/s
     iteration_duration.............: avg=1.28s    min=330.77ms med=1.2s   max=3.7s    p(90)=1.51s  p(95)=1.9s  
     iterations.....................: 4694    77.804444/s
   ✓ no_errors......................: 0.00%   ✓ 0         ✗ 0    
     vus............................: 100     min=100     max=100
     vus_max........................: 100     min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c7760ae7-e79c-45ba-65bc-32aa06fedd00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a634b249-47ad-4254-cd47-161ec0f52f00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 3777 / ✗ 21
     ✓ expected_result

     checks.........................: 99.81% ✓ 11373     ✗ 21   
     data_received..................: 19 MB  307 kB/s
     data_sent......................: 4.5 MB 74 kB/s
   ✓ expected_result................: 0.00%  ✓ 0         ✗ 0    
     http_req_blocked...............: avg=123.23µs min=1.4µs    med=2.29µs max=11.32ms p(90)=3.6µs   p(95)=11.41µs
     http_req_connecting............: avg=112.15µs min=0s       med=0s     max=11.28ms p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=1.59s    min=919.27ms med=1.5s   max=3.73s   p(90)=1.92s   p(95)=2.2s   
       { expected_response:true }...: avg=1.59s    min=919.27ms med=1.5s   max=3.73s   p(90)=1.92s   p(95)=2.2s   
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 3798 
     http_req_receiving.............: avg=57.96µs  min=18.8µs   med=54.2µs max=1.02ms  p(90)=78µs    p(95)=85.81µs
     http_req_sending...............: avg=33.17µs  min=8µs      med=13.4µs max=10.06ms p(90)=27.13µs p(95)=32.5µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=1.59s    min=919.19ms med=1.5s   max=3.73s   p(90)=1.92s   p(95)=2.2s   
     http_reqs......................: 3798   62.279625/s
     iteration_duration.............: avg=1.59s    min=919.49ms med=1.5s   max=3.73s   p(90)=1.92s   p(95)=2.2s   
     iterations.....................: 3798   62.279625/s
   ✓ no_errors......................: 0.00%  ✓ 0         ✗ 0    
     vus............................: 20     min=20      max=100
     vus_max........................: 100    min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/42465e8a-89e7-4d5e-1bcc-8a0fcdba9800/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c1748b17-deb0-42f0-bef5-d9a3f1d96700/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 3654 / ✗ 22
     ✗ expected_result
      ↳  99% — ✓ 3674 / ✗ 2

     checks.........................: 99.78% ✓ 11004     ✗ 24   
     data_received..................: 19 MB  305 kB/s
     data_sent......................: 4.4 MB 72 kB/s
   ✓ expected_result................: 0.00%  ✓ 0         ✗ 0    
     http_req_blocked...............: avg=331.03µs min=1.3µs  med=2.29µs max=42.83ms p(90)=4µs    p(95)=11.8µs 
     http_req_connecting............: avg=320.3µs  min=0s     med=0s     max=42.78ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=1.65s    min=1.12s  med=1.56s  max=3.98s   p(90)=1.98s  p(95)=2.27s  
       { expected_response:true }...: avg=1.65s    min=1.12s  med=1.56s  max=3.98s   p(90)=1.98s  p(95)=2.27s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 3676 
     http_req_receiving.............: avg=62.79µs  min=26.7µs med=57.3µs max=1.54ms  p(90)=86.4µs p(95)=95.8µs 
     http_req_sending...............: avg=47.31µs  min=8.6µs  med=14.4µs max=5.41ms  p(90)=29.4µs p(95)=36.32µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=1.65s    min=1.12s  med=1.56s  max=3.97s   p(90)=1.98s  p(95)=2.27s  
     http_reqs......................: 3676   60.205502/s
     iteration_duration.............: avg=1.65s    min=1.12s  med=1.56s  max=3.98s   p(90)=1.98s  p(95)=2.27s  
     iterations.....................: 3676   60.205502/s
   ✓ no_errors......................: 0.00%  ✓ 0         ✗ 0    
     vus............................: 43     min=43      max=100
     vus_max........................: 100    min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5d79619c-89af-4857-4ac6-795c3709ce00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/faec936b-6386-403c-a640-23f7be028400/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 3155 / ✗ 5
     ✗ expected_result
      ↳  99% — ✓ 3157 / ✗ 3

     checks.........................: 99.91% ✓ 9472      ✗ 8    
     data_received..................: 15 MB  253 kB/s
     data_sent......................: 3.8 MB 62 kB/s
   ✓ expected_result................: 0.00%  ✓ 0         ✗ 0    
     http_req_blocked...............: avg=610.4µs  min=1.2µs  med=2µs    max=33.23ms p(90)=3.3µs   p(95)=14.41µs
     http_req_connecting............: avg=599.27µs min=0s     med=0s     max=33.04ms p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=1.91s    min=1s     med=1.78s  max=3.63s   p(90)=2.38s   p(95)=2.82s  
       { expected_response:true }...: avg=1.91s    min=1s     med=1.78s  max=3.63s   p(90)=2.38s   p(95)=2.82s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 3160 
     http_req_receiving.............: avg=53.39µs  min=20.9µs med=46.9µs max=7.7ms   p(90)=68.81µs p(95)=80.8µs 
     http_req_sending...............: avg=114.23µs min=7.3µs  med=12.3µs max=10.58ms p(90)=26.81µs p(95)=32.5µs 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=1.91s    min=1s     med=1.78s  max=3.63s   p(90)=2.38s   p(95)=2.82s  
     http_reqs......................: 3160   51.888509/s
     iteration_duration.............: avg=1.91s    min=1s     med=1.78s  max=3.63s   p(90)=2.38s   p(95)=2.82s  
     iterations.....................: 3160   51.888509/s
   ✓ no_errors......................: 0.00%  ✓ 0         ✗ 0    
     vus............................: 100    min=100     max=100
     vus_max........................: 100    min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/40a708c0-ce6a-4209-9002-a6f9f0491a00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/37cb6d8e-b859-456c-c2ff-f43783063300/public" alt="HTTP Overview" />


  </details>