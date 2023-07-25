## Overview for scenario: `constant-vus-over-time`


This scenario runs 4 servics and a GraphQL gateway with Federation spec, and runs a heavy query. It's being executed with a constant amount of VUs over a fixed amount of time. It measure things like memory usage, CPU usage, average RPS. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was running 100 VUs over 60s


### Comparison


| Gateway                             | RPS ⬇️ |       Requests        |         Duration         |
| :---------------------------------- | :----: | :-------------------: | :----------------------: |
| wundergraph                         |  885   | 53145 total, 0 failed |  avg: 112ms, p95: 183ms  |
| apollo-router                       |  125   | 7629 total, 0 failed  | avg: 792ms, p95: 1134ms  |
| stitching-federation-with-yoga-bun  |   89   | 5427 total, 0 failed  | avg: 1111ms, p95: 1869ms |
| mesh                                |   74   | 4511 total, 0 failed  | avg: 1338ms, p95: 2066ms |
| stitching-federation-with-yoga      |   58   | 3543 total, 0 failed  | avg: 1708ms, p95: 2244ms |
| stitching-federation-with-yoga-deno |   53   | 3281 total, 0 failed  | avg: 1851ms, p95: 2583ms |
| mercurius                           |   49   | 2979 total, 0 failed  | avg: 2022ms, p95: 2612ms |
| apollo-server                       |   47   | 2925 total, 0 failed  | avg: 2077ms, p95: 2508ms |
| apollo-gateway-with-yoga            |   45   | 2754 total, 0 failed  | avg: 2198ms, p95: 2966ms |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 159435     ✗ 0    
     data_received..................: 258 MB  4.3 MB/s
     data_sent......................: 63 MB   1.1 MB/s
   ✓ expected_result................: 0.00%   ✓ 0          ✗ 0    
     http_req_blocked...............: avg=13.88µs  min=900ns   med=1.9µs    max=17.99ms  p(90)=3.2µs    p(95)=4µs     
     http_req_connecting............: avg=9.45µs   min=0s      med=0s       max=17.76ms  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=112.34ms min=18.04ms med=106ms    max=395.5ms  p(90)=160.94ms p(95)=182.63ms
       { expected_response:true }...: avg=112.34ms min=18.04ms med=106ms    max=395.5ms  p(90)=160.94ms p(95)=182.63ms
   ✓ http_req_failed................: 0.00%   ✓ 0          ✗ 53145
     http_req_receiving.............: avg=565.47µs min=18.5µs  med=39.2µs   max=92.3ms   p(90)=187.2µs  p(95)=465.27µs
     http_req_sending...............: avg=112.51µs min=6.4µs   med=11.3µs   max=107.61ms p(90)=21.3µs   p(95)=63.4µs  
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=111.67ms min=17.88ms med=105.54ms max=394.7ms  p(90)=159.7ms  p(95)=180.79ms
     http_reqs......................: 53145   885.019874/s
     iteration_duration.............: avg=112.92ms min=18.35ms med=106.59ms max=404.02ms p(90)=161.73ms p(95)=183.54ms
     iterations.....................: 53145   885.019874/s
   ✓ no_errors......................: 0.00%   ✓ 0          ✗ 0    
     vus............................: 100     min=100      max=100
     vus_max........................: 100     min=100      max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5562cc94-9999-45e6-2bb3-6323b4aab900/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a5283e47-005b-4e8d-53c1-4017ff8ed300/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 22887      ✗ 0    
     data_received..................: 38 MB   625 kB/s
     data_sent......................: 9.1 MB  149 kB/s
   ✓ expected_result................: 0.00%   ✓ 0          ✗ 0    
     http_req_blocked...............: avg=215.32µs min=1.3µs    med=2.1µs    max=46.4ms  p(90)=2.9µs    p(95)=3.7µs 
     http_req_connecting............: avg=208.43µs min=0s       med=0s       max=46.36ms p(90)=0s       p(95)=0s    
     http_req_duration..............: avg=792.49ms min=254.74ms med=752.01ms max=4.06s   p(90)=997.04ms p(95)=1.13s 
       { expected_response:true }...: avg=792.49ms min=254.74ms med=752.01ms max=4.06s   p(90)=997.04ms p(95)=1.13s 
   ✓ http_req_failed................: 0.00%   ✓ 0          ✗ 7629 
     http_req_receiving.............: avg=55.71µs  min=19.8µs   med=52µs     max=19.63ms p(90)=64.8µs   p(95)=72.3µs
     http_req_sending...............: avg=38.05µs  min=6.7µs    med=12.5µs   max=18.74ms p(90)=25.7µs   p(95)=29.2µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s      p(90)=0s       p(95)=0s    
     http_req_waiting...............: avg=792.4ms  min=254.67ms med=751.97ms max=4.06s   p(90)=996.99ms p(95)=1.13s 
     http_reqs......................: 7629    125.475283/s
     iteration_duration.............: avg=793.01ms min=255.1ms  med=752.35ms max=4.1s    p(90)=997.31ms p(95)=1.13s 
     iterations.....................: 7629    125.475283/s
   ✓ no_errors......................: 0.00%   ✓ 0          ✗ 0    
     vus............................: 100     min=100      max=100
     vus_max........................: 100     min=100      max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a40f86c2-0d19-4106-0616-09c7005c0000/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/03152f5e-137d-4727-8aac-86c78002c100/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 16281     ✗ 0    
     data_received..................: 27 MB   446 kB/s
     data_sent......................: 6.4 MB  106 kB/s
   ✓ expected_result................: 0.00%   ✓ 0         ✗ 0    
     http_req_blocked...............: avg=216.13µs min=900ns    med=1.5µs  max=33.05ms p(90)=2.6µs   p(95)=3.4µs  
     http_req_connecting............: avg=205.56µs min=0s       med=0s     max=26.67ms p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=1.11s    min=436.83ms med=1.04s  max=2.76s   p(90)=1.49s   p(95)=1.86s  
       { expected_response:true }...: avg=1.11s    min=436.83ms med=1.04s  max=2.76s   p(90)=1.49s   p(95)=1.86s  
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 5427 
     http_req_receiving.............: avg=264.78µs min=15.4µs   med=24.8µs max=42.76ms p(90)=56.84µs p(95)=100.3µs
     http_req_sending...............: avg=132.98µs min=6.2µs    med=9.1µs  max=70.02ms p(90)=22.3µs  p(95)=99.14µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=1.11s    min=431.58ms med=1.04s  max=2.76s   p(90)=1.49s   p(95)=1.86s  
     http_reqs......................: 5427    89.563151/s
     iteration_duration.............: avg=1.11s    min=437.22ms med=1.04s  max=2.76s   p(90)=1.49s   p(95)=1.86s  
     iterations.....................: 5427    89.563151/s
   ✓ no_errors......................: 0.00%   ✓ 0         ✗ 0    
     vus............................: 100     min=100     max=100
     vus_max........................: 100     min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/39e99f2e-6ec3-4954-5218-6a9f26290700/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9c9898ec-b726-41e7-21ef-b3f857957000/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 13533     ✗ 0    
     data_received..................: 23 MB   372 kB/s
     data_sent......................: 5.4 MB  88 kB/s
   ✓ expected_result................: 0.00%   ✓ 0         ✗ 0    
     http_req_blocked...............: avg=218.39µs min=1.4µs    med=2.5µs  max=34.3ms  p(90)=3.8µs  p(95)=5.7µs  
     http_req_connecting............: avg=204.42µs min=0s       med=0s     max=20.5ms  p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=1.33s    min=625.53ms med=1.27s  max=3.31s   p(90)=1.79s  p(95)=2.06s  
       { expected_response:true }...: avg=1.33s    min=625.53ms med=1.27s  max=3.31s   p(90)=1.79s  p(95)=2.06s  
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 4511 
     http_req_receiving.............: avg=60.44µs  min=22.2µs   med=54.4µs max=3.44ms  p(90)=80.1µs p(95)=90.25µs
     http_req_sending...............: avg=74.46µs  min=7.8µs    med=14.5µs max=15.45ms p(90)=27.7µs p(95)=35.2µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=1.33s    min=625.45ms med=1.27s  max=3.3s    p(90)=1.79s  p(95)=2.06s  
     http_reqs......................: 4511    74.481092/s
     iteration_duration.............: avg=1.33s    min=625.82ms med=1.27s  max=3.31s   p(90)=1.79s  p(95)=2.06s  
     iterations.....................: 4511    74.481092/s
   ✓ no_errors......................: 0.00%   ✓ 0         ✗ 0    
     vus............................: 100     min=100     max=100
     vus_max........................: 100     min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b024f440-9575-4286-121f-28313b3b5000/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9998e3a7-fda1-41e8-5405-cfd0887a5e00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 3521 / ✗ 22
     ✗ expected_result
      ↳  99% — ✓ 3542 / ✗ 1

     checks.........................: 99.78% ✓ 10606     ✗ 23   
     data_received..................: 18 MB  293 kB/s
     data_sent......................: 4.2 MB 69 kB/s
   ✓ expected_result................: 0.00%  ✓ 0         ✗ 0    
     http_req_blocked...............: avg=194.1µs  min=800ns    med=2µs    max=19.73ms p(90)=3.1µs   p(95)=11.5µs 
     http_req_connecting............: avg=172.01µs min=0s       med=0s     max=15.32ms p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=1.7s     min=948.3ms  med=1.63s  max=3.32s   p(90)=2.01s   p(95)=2.24s  
       { expected_response:true }...: avg=1.7s     min=948.3ms  med=1.63s  max=3.32s   p(90)=2.01s   p(95)=2.24s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 3543 
     http_req_receiving.............: avg=46.04µs  min=17.8µs   med=40.8µs max=1.1ms   p(90)=71.59µs p(95)=79.38µs
     http_req_sending...............: avg=40.61µs  min=5.7µs    med=12.7µs max=19.31ms p(90)=26.8µs  p(95)=38.17µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=1.7s     min=948.24ms med=1.63s  max=3.32s   p(90)=2.01s   p(95)=2.24s  
     http_reqs......................: 3543   58.252735/s
     iteration_duration.............: avg=1.7s     min=948.6ms  med=1.63s  max=3.33s   p(90)=2.01s   p(95)=2.24s  
     iterations.....................: 3543   58.252735/s
   ✓ no_errors......................: 0.00%  ✓ 0         ✗ 0    
     vus............................: 100    min=100     max=100
     vus_max........................: 100    min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/17a14f2f-a9e2-4ced-7070-9951e9951d00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9f75d848-bfcb-4135-c7ad-1cfc93190600/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-deno`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 9843      ✗ 0    
     data_received..................: 16 MB   269 kB/s
     data_sent......................: 3.9 MB  64 kB/s
   ✓ expected_result................: 0.00%   ✓ 0         ✗ 0    
     http_req_blocked...............: avg=334.12µs min=1µs    med=2.2µs  max=28.27ms p(90)=3.8µs  p(95)=12.3µs 
     http_req_connecting............: avg=325.73µs min=0s     med=0s     max=28.23ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=1.85s    min=1.05s  med=1.76s  max=3.31s   p(90)=2.25s  p(95)=2.58s  
       { expected_response:true }...: avg=1.85s    min=1.05s  med=1.76s  max=3.31s   p(90)=2.25s  p(95)=2.58s  
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 3281 
     http_req_receiving.............: avg=108.11µs min=16.9µs med=34.5µs max=15.04ms p(90)=85.8µs p(95)=121.5µs
     http_req_sending...............: avg=124.32µs min=6.1µs  med=13.2µs max=34.02ms p(90)=33µs   p(95)=127.5µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=1.85s    min=1.05s  med=1.76s  max=3.31s   p(90)=2.25s  p(95)=2.58s  
     http_reqs......................: 3281    53.734957/s
     iteration_duration.............: avg=1.85s    min=1.05s  med=1.77s  max=3.32s   p(90)=2.25s  p(95)=2.58s  
     iterations.....................: 3281    53.734957/s
   ✓ no_errors......................: 0.00%   ✓ 0         ✗ 0    
     vus............................: 52      min=52      max=100
     vus_max........................: 100     min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7b5ccca2-42b0-4f02-d18e-3f22d2c2df00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/142c3976-9d6e-4d5e-f9b7-92ead16a9800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 8937      ✗ 0    
     data_received..................: 15 MB   248 kB/s
     data_sent......................: 3.5 MB  58 kB/s
   ✓ expected_result................: 0.00%   ✓ 0         ✗ 0    
     http_req_blocked...............: avg=317.32µs min=1.4µs    med=3.5µs  max=22.15ms p(90)=5.8µs    p(95)=23.3µs  
     http_req_connecting............: avg=307.45µs min=0s       med=0s     max=21.89ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=2.02s    min=593.1ms  med=1.92s  max=5.5s    p(90)=2.34s    p(95)=2.61s   
       { expected_response:true }...: avg=2.02s    min=593.1ms  med=1.92s  max=5.5s    p(90)=2.34s    p(95)=2.61s   
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 2979 
     http_req_receiving.............: avg=99.4µs   min=31µs     med=87µs   max=3.62ms  p(90)=145.52µs p(95)=178.39µs
     http_req_sending...............: avg=62.99µs  min=11.4µs   med=22.6µs max=5.12ms  p(90)=50.6µs   p(95)=97.78µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=2.02s    min=593.02ms med=1.92s  max=5.5s    p(90)=2.34s    p(95)=2.61s   
     http_reqs......................: 2979    49.204854/s
     iteration_duration.............: avg=2.02s    min=593.69ms med=1.92s  max=5.52s   p(90)=2.34s    p(95)=2.61s   
     iterations.....................: 2979    49.204854/s
   ✓ no_errors......................: 0.00%   ✓ 0         ✗ 0    
     vus............................: 100     min=100     max=100
     vus_max........................: 100     min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2b4f10fd-713d-4de6-d1c7-17d5e77b9f00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c18ad9ab-8d8a-4387-dcb8-90f336b66200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 8775      ✗ 0    
     data_received..................: 15 MB   247 kB/s
     data_sent......................: 3.5 MB  57 kB/s
   ✓ expected_result................: 0.00%   ✓ 0         ✗ 0    
     http_req_blocked...............: avg=552.82µs min=1.7µs  med=2.9µs  max=31.15ms  p(90)=4.5µs  p(95)=15.58µs 
     http_req_connecting............: avg=529.27µs min=0s     med=0s     max=31.1ms   p(90)=0s     p(95)=0s      
     http_req_duration..............: avg=2.07s    min=1.22s  med=1.96s  max=16s      p(90)=2.25s  p(95)=2.5s    
       { expected_response:true }...: avg=2.07s    min=1.22s  med=1.96s  max=16s      p(90)=2.25s  p(95)=2.5s    
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 2925 
     http_req_receiving.............: avg=73.29µs  min=30.8µs med=70.6µs max=702.04µs p(90)=96.5µs p(95)=106.82µs
     http_req_sending...............: avg=70.61µs  min=8.6µs  med=18.8µs max=28.22ms  p(90)=36.2µs p(95)=53.96µs 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=2.07s    min=1.22s  med=1.96s  max=15.99s   p(90)=2.25s  p(95)=2.5s    
     http_reqs......................: 2925    47.828351/s
     iteration_duration.............: avg=2.07s    min=1.22s  med=1.96s  max=16.01s   p(90)=2.25s  p(95)=2.5s    
     iterations.....................: 2925    47.828351/s
   ✓ no_errors......................: 0.00%   ✓ 0         ✗ 0    
     vus............................: 47      min=47      max=100
     vus_max........................: 100     min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a8c932aa-6791-498f-3991-61119ac0b000/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8c1a78fd-b0b9-48c8-9363-f4f1c3e91f00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 2740 / ✗ 14
     ✓ expected_result

     checks.........................: 99.83% ✓ 8248      ✗ 14   
     data_received..................: 14 MB  226 kB/s
     data_sent......................: 3.3 MB 54 kB/s
   ✓ expected_result................: 0.00%  ✓ 0         ✗ 0    
     http_req_blocked...............: avg=299.39µs min=1.5µs  med=3µs     max=19.78ms p(90)=4.5µs   p(95)=15.9µs  
     http_req_connecting............: avg=277.83µs min=0s     med=0s      max=17.08ms p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=2.19s    min=1.25s  med=2.09s   max=4.59s   p(90)=2.6s    p(95)=2.96s   
       { expected_response:true }...: avg=2.19s    min=1.25s  med=2.09s   max=4.59s   p(90)=2.6s    p(95)=2.96s   
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 2754 
     http_req_receiving.............: avg=81.97µs  min=25.1µs med=67.05µs max=10.54ms p(90)=98.5µs  p(95)=116.43µs
     http_req_sending...............: avg=47.29µs  min=9.7µs  med=18.9µs  max=14.41ms p(90)=36.57µs p(95)=65.35µs 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=2.19s    min=1.25s  med=2.09s   max=4.59s   p(90)=2.6s    p(95)=2.96s   
     http_reqs......................: 2754   45.154376/s
     iteration_duration.............: avg=2.19s    min=1.25s  med=2.09s   max=4.6s    p(90)=2.6s    p(95)=2.96s   
     iterations.....................: 2754   45.154376/s
   ✓ no_errors......................: 0.00%  ✓ 0         ✗ 0    
     vus............................: 14     min=14      max=100
     vus_max........................: 100    min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8dfd2073-16bf-4ee3-ed31-9753af519200/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6abe9726-863c-430c-fef6-30661f6d3700/public" alt="HTTP Overview" />


  </details>