## Overview for: `scenarios/fed-v1-constant-vus-over-time`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. It's being executed with a constant amount of VUs over a fixed amount of time. It measure things like memory usage, CPU usage, average RPS. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was running 100 VUs over 60s


### Comparison


| Gateway                             | RPS ⬇️ |       Requests        |         Duration         |
| :---------------------------------- | :----: | :-------------------: | :----------------------: |
| wundergraph                         |  600   | 36100 total, 0 failed |  avg: 166ms, p95: 267ms  |
| apollo-router                       |  120   | 7276 total, 0 failed  | avg: 829ms, p95: 1286ms  |
| stitching-federation-with-yoga-bun  |   88   | 5379 total, 0 failed  | avg: 1123ms, p95: 1715ms |
| stitching-federation-with-yoga-deno |   68   | 4146 total, 0 failed  | avg: 1453ms, p95: 1949ms |
| apollo-server                       |   64   | 3911 total, 0 failed  | avg: 1548ms, p95: 1806ms |
| mercurius                           |   63   | 3853 total, 0 failed  | avg: 1563ms, p95: 2040ms |
| mesh                                |   62   | 3801 total, 0 failed  | avg: 1592ms, p95: 2469ms |
| stitching-federation-with-yoga      |   43   | 2676 total, 0 failed  | avg: 2279ms, p95: 2979ms |
| apollo-gateway-with-yoga            |   38   | 2388 total, 0 failed  | avg: 2556ms, p95: 3565ms |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 108300     ✗ 0    
     data_received..................: 180 MB  3.0 MB/s
     data_sent......................: 43 MB   713 kB/s
   ✓ expected_result................: 0.00%   ✓ 0          ✗ 0    
     http_req_blocked...............: avg=81.78µs  min=1.1µs   med=2.29µs   max=50.99ms  p(90)=3.5µs    p(95)=4.2µs   
     http_req_connecting............: avg=73.94µs  min=0s      med=0s       max=47.01ms  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=165.63ms min=19.71ms med=156.62ms max=655.11ms p(90)=235.97ms p(95)=266.95ms
       { expected_response:true }...: avg=165.63ms min=19.71ms med=156.62ms max=655.11ms p(90)=235.97ms p(95)=266.95ms
   ✓ http_req_failed................: 0.00%   ✓ 0          ✗ 36100
     http_req_receiving.............: avg=610.13µs min=18.2µs  med=52.9µs   max=107.92ms p(90)=234.2µs  p(95)=714.93µs
     http_req_sending...............: avg=121.97µs min=7.4µs   med=13.4µs   max=126.38ms p(90)=25.9µs   p(95)=68.41µs 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=164.89ms min=19.46ms med=156.04ms max=631.29ms p(90)=234.65ms p(95)=265.43ms
     http_reqs......................: 36100   600.521871/s
     iteration_duration.............: avg=166.3ms  min=20.1ms  med=157.21ms max=683.72ms p(90)=236.64ms p(95)=267.89ms
     iterations.....................: 36100   600.521871/s
   ✓ no_errors......................: 0.00%   ✓ 0          ✗ 0    
     vus............................: 100     min=100      max=100
     vus_max........................: 100     min=100      max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4bda0e1e-a0e4-4a8d-c710-6d2f0a995c00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5d5e3c78-6422-4232-9483-19405a303400/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 7275 / ✗ 1
     ✓ expected_result

     checks.........................: 99.99% ✓ 21827      ✗ 1    
     data_received..................: 36 MB  598 kB/s
     data_sent......................: 8.6 MB 143 kB/s
   ✓ expected_result................: 0.00%  ✓ 0          ✗ 0    
     http_req_blocked...............: avg=456.77µs min=1µs      med=2.1µs    max=71.07ms  p(90)=3.1µs  p(95)=3.8µs 
     http_req_connecting............: avg=436.28µs min=0s       med=0s       max=57.45ms  p(90)=0s     p(95)=0s    
     http_req_duration..............: avg=829.16ms min=175.85ms med=783.37ms max=4.67s    p(90)=1.11s  p(95)=1.28s 
       { expected_response:true }...: avg=829.16ms min=175.85ms med=783.37ms max=4.67s    p(90)=1.11s  p(95)=1.28s 
   ✓ http_req_failed................: 0.00%  ✓ 0          ✗ 7276 
     http_req_receiving.............: avg=51.47µs  min=21µs     med=50.5µs   max=814.91µs p(90)=68.7µs p(95)=75.6µs
     http_req_sending...............: avg=51.25µs  min=6.3µs    med=13µs     max=36.09ms  p(90)=25.6µs p(95)=30.1µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s       p(90)=0s     p(95)=0s    
     http_req_waiting...............: avg=829.05ms min=175.76ms med=783.31ms max=4.67s    p(90)=1.11s  p(95)=1.28s 
     http_reqs......................: 7276   120.113449/s
     iteration_duration.............: avg=829.94ms min=176.21ms med=783.66ms max=4.71s    p(90)=1.11s  p(95)=1.28s 
     iterations.....................: 7276   120.113449/s
   ✓ no_errors......................: 0.00%  ✓ 0          ✗ 0    
     vus............................: 100    min=100      max=100
     vus_max........................: 100    min=100      max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c50168f1-0e85-4e23-bb99-545b604c6000/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/fb935218-cc3d-413f-c19e-0560097c7e00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 16137     ✗ 0    
     data_received..................: 27 MB   443 kB/s
     data_sent......................: 6.4 MB  106 kB/s
   ✓ expected_result................: 0.00%   ✓ 0         ✗ 0    
     http_req_blocked...............: avg=89.58µs min=900ns    med=1.5µs  max=11.36ms p(90)=2.6µs   p(95)=3.5µs  
     http_req_connecting............: avg=85.89µs min=0s       med=0s     max=11.2ms  p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=1.12s   min=463.44ms med=1.05s  max=3.03s   p(90)=1.48s   p(95)=1.71s  
       { expected_response:true }...: avg=1.12s   min=463.44ms med=1.05s  max=3.03s   p(90)=1.48s   p(95)=1.71s  
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 5379 
     http_req_receiving.............: avg=64.53µs min=14.6µs   med=24.8µs max=20.62ms p(90)=52.81µs p(95)=76.53µs
     http_req_sending...............: avg=71.05µs min=6.4µs    med=9.1µs  max=23.93ms p(90)=20.9µs  p(95)=96.19µs
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s     max=0s      p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=1.12s   min=462.87ms med=1.05s  max=3.03s   p(90)=1.48s   p(95)=1.71s  
     http_reqs......................: 5379    88.911516/s
     iteration_duration.............: avg=1.12s   min=463.77ms med=1.05s  max=3.03s   p(90)=1.48s   p(95)=1.71s  
     iterations.....................: 5379    88.911516/s
   ✓ no_errors......................: 0.00%   ✓ 0         ✗ 0    
     vus............................: 100     min=100     max=100
     vus_max........................: 100     min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5f7cbd57-42eb-403c-e83b-1eb303116a00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/066b91f8-4839-4f7c-d152-0e4bbb5e0e00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-deno`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 12438     ✗ 0    
     data_received..................: 21 MB   343 kB/s
     data_sent......................: 4.9 MB  81 kB/s
   ✓ expected_result................: 0.00%   ✓ 0         ✗ 0    
     http_req_blocked...............: avg=87.66µs min=800ns    med=1.6µs  max=17.36ms p(90)=3µs     p(95)=3.8µs 
     http_req_connecting............: avg=80.6µs  min=0s       med=0s     max=17.32ms p(90)=0s      p(95)=0s    
     http_req_duration..............: avg=1.45s   min=482.37ms med=1.41s  max=2.72s   p(90)=1.69s   p(95)=1.94s 
       { expected_response:true }...: avg=1.45s   min=482.37ms med=1.41s  max=2.72s   p(90)=1.69s   p(95)=1.94s 
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 4146 
     http_req_receiving.............: avg=58.31µs min=14.3µs   med=25.3µs max=9.13ms  p(90)=73.95µs p(95)=86.9µs
     http_req_sending...............: avg=33.22µs min=5.4µs    med=9.9µs  max=3.43ms  p(90)=22.7µs  p(95)=83.2µs
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s     max=0s      p(90)=0s      p(95)=0s    
     http_req_waiting...............: avg=1.45s   min=482.33ms med=1.41s  max=2.72s   p(90)=1.69s   p(95)=1.94s 
     http_reqs......................: 4146    68.546587/s
     iteration_duration.............: avg=1.45s   min=482.62ms med=1.41s  max=2.72s   p(90)=1.7s    p(95)=1.94s 
     iterations.....................: 4146    68.546587/s
   ✓ no_errors......................: 0.00%   ✓ 0         ✗ 0    
     vus............................: 100     min=100     max=100
     vus_max........................: 100     min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ee3de39e-3369-44b4-7232-efe4de20ff00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c52c6b65-a788-402d-a92d-4f0236cbb200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 3897 / ✗ 14
     ✗ expected_result
      ↳  99% — ✓ 3907 / ✗ 4

     checks.........................: 99.84% ✓ 11715     ✗ 18   
     data_received..................: 20 MB  331 kB/s
     data_sent......................: 4.6 MB 76 kB/s
   ✓ expected_result................: 0.00%  ✓ 0         ✗ 0    
     http_req_blocked...............: avg=108.8µs  min=1.1µs    med=2.2µs  max=8.66ms p(90)=3.2µs   p(95)=6.15µs 
     http_req_connecting............: avg=105.55µs min=0s       med=0s     max=8.51ms p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=1.54s    min=713.92ms med=1.41s  max=18.13s p(90)=1.64s   p(95)=1.8s   
       { expected_response:true }...: avg=1.54s    min=713.92ms med=1.41s  max=18.13s p(90)=1.64s   p(95)=1.8s   
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 3911 
     http_req_receiving.............: avg=57.01µs  min=20.59µs  med=53.9µs max=3.26ms p(90)=78.1µs  p(95)=85.09µs
     http_req_sending...............: avg=24.81µs  min=7.3µs    med=14.1µs max=4.06ms p(90)=28.29µs p(95)=33.04µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s     p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=1.54s    min=713.84ms med=1.41s  max=18.13s p(90)=1.64s   p(95)=1.8s   
     http_reqs......................: 3911   64.283866/s
     iteration_duration.............: avg=1.54s    min=714.22ms med=1.41s  max=18.13s p(90)=1.65s   p(95)=1.8s   
     iterations.....................: 3911   64.283866/s
   ✓ no_errors......................: 0.00%  ✓ 0         ✗ 0    
     vus............................: 100    min=100     max=100
     vus_max........................: 100    min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e230fb6d-e11a-441b-f626-64bc8ff3a500/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f64b5ec3-91cb-4d9d-f138-a84227685a00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 11559     ✗ 0    
     data_received..................: 19 MB   321 kB/s
     data_sent......................: 4.6 MB  76 kB/s
   ✓ expected_result................: 0.00%   ✓ 0         ✗ 0    
     http_req_blocked...............: avg=114.09µs min=1.2µs    med=3.1µs  max=14.06ms p(90)=4.3µs  p(95)=13.6µs 
     http_req_connecting............: avg=109.46µs min=0s       med=0s     max=14.01ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=1.56s    min=454.19ms med=1.49s  max=5.12s   p(90)=1.73s  p(95)=2.04s  
       { expected_response:true }...: avg=1.56s    min=454.19ms med=1.49s  max=5.12s   p(90)=1.73s  p(95)=2.04s  
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 3853 
     http_req_receiving.............: avg=81.38µs  min=26.8µs   med=75µs   max=8.8ms   p(90)=99.9µs p(95)=113.2µs
     http_req_sending...............: avg=63.79µs  min=7.7µs    med=19.9µs max=11.57ms p(90)=36.4µs p(95)=47.64µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=1.56s    min=454.11ms med=1.49s  max=5.12s   p(90)=1.73s  p(95)=2.04s  
     http_reqs......................: 3853    63.733208/s
     iteration_duration.............: avg=1.56s    min=454.53ms med=1.49s  max=5.12s   p(90)=1.74s  p(95)=2.04s  
     iterations.....................: 3853    63.733208/s
   ✓ no_errors......................: 0.00%   ✓ 0         ✗ 0    
     vus............................: 100     min=100     max=100
     vus_max........................: 100     min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0b7647d4-63a3-42fd-d5e7-97ce1b981500/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/56ff5c6c-dece-40dc-4a68-4ecf99ca7b00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 11403     ✗ 0    
     data_received..................: 19 MB   312 kB/s
     data_sent......................: 4.5 MB  74 kB/s
   ✓ expected_result................: 0.00%   ✓ 0         ✗ 0    
     http_req_blocked...............: avg=213.69µs min=1.7µs    med=2.8µs  max=32.08ms p(90)=4.4µs   p(95)=16.8µs 
     http_req_connecting............: avg=200.37µs min=0s       med=0s     max=20.29ms p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=1.59s    min=587.7ms  med=1.51s  max=4.33s   p(90)=2.15s   p(95)=2.46s  
       { expected_response:true }...: avg=1.59s    min=587.7ms  med=1.51s  max=4.33s   p(90)=2.15s   p(95)=2.46s  
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 3801 
     http_req_receiving.............: avg=77.91µs  min=27.79µs  med=59.5µs max=14.54ms p(90)=104.2µs p(95)=125.8µs
     http_req_sending...............: avg=76.6µs   min=10.6µs   med=16.1µs max=9.52ms  p(90)=38.3µs  p(95)=52.1µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=1.59s    min=587.55ms med=1.51s  max=4.33s   p(90)=2.15s   p(95)=2.46s  
     http_reqs......................: 3801    62.414512/s
     iteration_duration.............: avg=1.59s    min=588.12ms med=1.51s  max=4.33s   p(90)=2.15s   p(95)=2.47s  
     iterations.....................: 3801    62.414512/s
   ✓ no_errors......................: 0.00%   ✓ 0         ✗ 0    
     vus............................: 100     min=100     max=100
     vus_max........................: 100     min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9c7147d6-09d9-4bab-9e76-94c785ccfa00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2480db3c-df30-43b4-4058-e70fbd34b200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 2659 / ✗ 17
     ✓ expected_result

     checks.........................: 99.78% ✓ 8011      ✗ 17   
     data_received..................: 13 MB  219 kB/s
     data_sent......................: 3.2 MB 52 kB/s
   ✓ expected_result................: 0.00%  ✓ 0         ✗ 0    
     http_req_blocked...............: avg=154.14µs min=1.4µs  med=2.5µs  max=11.12ms p(90)=4.1µs   p(95)=17.8µs  
     http_req_connecting............: avg=148.02µs min=0s     med=0s     max=11.08ms p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=2.27s    min=1.33s  med=2.19s  max=4.67s   p(90)=2.58s   p(95)=2.97s   
       { expected_response:true }...: avg=2.27s    min=1.33s  med=2.19s  max=4.67s   p(90)=2.58s   p(95)=2.97s   
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 2676 
     http_req_receiving.............: avg=68.53µs  min=22.1µs med=58.9µs max=3.62ms  p(90)=91.35µs p(95)=100.73µs
     http_req_sending...............: avg=42.66µs  min=8.3µs  med=15.6µs max=4.79ms  p(90)=33.05µs p(95)=71.98µs 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=2.27s    min=1.33s  med=2.19s  max=4.67s   p(90)=2.58s   p(95)=2.97s   
     http_reqs......................: 2676   43.616844/s
     iteration_duration.............: avg=2.27s    min=1.33s  med=2.19s  max=4.67s   p(90)=2.58s   p(95)=2.98s   
     iterations.....................: 2676   43.616844/s
   ✓ no_errors......................: 0.00%  ✓ 0         ✗ 0    
     vus............................: 58     min=58      max=100
     vus_max........................: 100    min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/18047582-2090-442f-dc35-849517922800/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/af00d00f-7eeb-496e-ffe3-8aaef4b1b600/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  98% — ✓ 2352 / ✗ 36
     ✗ expected_result
      ↳  99% — ✓ 2382 / ✗ 6

     checks.........................: 99.41% ✓ 7122      ✗ 42   
     data_received..................: 12 MB  193 kB/s
     data_sent......................: 2.8 MB 46 kB/s
   ✓ expected_result................: 0.00%  ✓ 0         ✗ 0    
     http_req_blocked...............: avg=534.81µs min=1.7µs  med=3.1µs   max=42.27ms p(90)=6.26µs  p(95)=34.65µs 
     http_req_connecting............: avg=506.68µs min=0s     med=0s      max=28.31ms p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=2.55s    min=1.55s  med=2.4s    max=5.22s   p(90)=3.09s   p(95)=3.56s   
       { expected_response:true }...: avg=2.55s    min=1.55s  med=2.4s    max=5.22s   p(90)=3.09s   p(95)=3.56s   
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 2388 
     http_req_receiving.............: avg=92.01µs  min=31.4µs med=76.05µs max=5.56ms  p(90)=128.1µs p(95)=156.19µs
     http_req_sending...............: avg=95.92µs  min=12.3µs med=21.6µs  max=16.31ms p(90)=52.3µs  p(95)=155.31µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=2.55s    min=1.55s  med=2.4s    max=5.22s   p(90)=3.09s   p(95)=3.56s   
     http_reqs......................: 2388   38.785302/s
     iteration_duration.............: avg=2.55s    min=1.55s  med=2.4s    max=5.23s   p(90)=3.09s   p(95)=3.56s   
     iterations.....................: 2388   38.785302/s
   ✓ no_errors......................: 0.00%  ✓ 0         ✗ 0    
     vus............................: 78     min=78      max=100
     vus_max........................: 100    min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b5d886ea-5e17-4214-6a34-2d03bebc8800/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/23c25812-6f1c-4aeb-c470-e6bec959c600/public" alt="HTTP Overview" />


  </details>