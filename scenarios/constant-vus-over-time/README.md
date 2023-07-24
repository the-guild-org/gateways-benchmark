## Overview for scenario: `constant-vus-over-time`


This scenario runs 4 servics and a GraphQL gateway with Federation spec, and runs a heavy query. It's being executed with a constant amount of VUs over a fixed amount of time. It measure things like memory usage, CPU usage, average RPS. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was running 100 VUs over 60s


### Comparison


| Gateway                             | RPS ⬇️ |       Requests        |         Duration         |
| :---------------------------------- | :----: | :-------------------: | :----------------------: |
| wundergraph                         |  1013  | 60878 total, 0 failed |  avg: 98ms, p95: 158ms   |
| apollo-router                       |  101   | 6154 total, 0 failed  | avg: 978ms, p95: 1751ms  |
| mesh                                |   98   | 5978 total, 0 failed  | avg: 1010ms, p95: 1448ms |
| apollo-server                       |   60   | 3647 total, 0 failed  | avg: 1657ms, p95: 1966ms |
| stitching-federation-with-yoga-deno |   58   | 3512 total, 0 failed  | avg: 1717ms, p95: 2253ms |
| stitching-federation-with-yoga-bun  |   53   | 3221 total, 0 failed  | avg: 1866ms, p95: 3156ms |
| mercurius                           |   52   | 3178 total, 0 failed  | avg: 1896ms, p95: 2401ms |
| stitching-federation-with-yoga      |   51   | 3122 total, 0 failed  | avg: 1946ms, p95: 2534ms |
| apollo-gateway-with-yoga            |   50   | 3098 total, 0 failed  | avg: 1954ms, p95: 2710ms |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 182634      ✗ 0    
     data_received..................: 296 MB  4.9 MB/s
     data_sent......................: 72 MB   1.2 MB/s
   ✓ expected_result................: 0.00%   ✓ 0           ✗ 0    
     http_req_blocked...............: avg=19.3µs   min=800ns   med=1.9µs   max=25.54ms  p(90)=2.8µs    p(95)=3.5µs   
     http_req_connecting............: avg=15.52µs  min=0s      med=0s      max=25.5ms   p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=97.98ms  min=10.35ms med=92.84ms max=275.29ms p(90)=140.49ms p(95)=157.55ms
       { expected_response:true }...: avg=97.98ms  min=10.35ms med=92.84ms max=275.29ms p(90)=140.49ms p(95)=157.55ms
   ✓ http_req_failed................: 0.00%   ✓ 0           ✗ 60878
     http_req_receiving.............: avg=434.15µs min=14.8µs  med=36.5µs  max=95.22ms  p(90)=176.8µs  p(95)=431.92µs
     http_req_sending...............: avg=96.77µs  min=6µs     med=10.6µs  max=97.94ms  p(90)=19.7µs   p(95)=40.9µs  
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=97.45ms  min=8.74ms  med=92.41ms max=275.09ms p(90)=139.71ms p(95)=156.68ms
     http_reqs......................: 60878   1013.356159/s
     iteration_duration.............: avg=98.57ms  min=10.61ms med=93.42ms max=275.53ms p(90)=141.19ms p(95)=158.26ms
     iterations.....................: 60878   1013.356159/s
   ✓ no_errors......................: 0.00%   ✓ 0           ✗ 0    
     vus............................: 100     min=100       max=100
     vus_max........................: 100     min=100       max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b3acdac2-5cd8-41b1-cef6-80c3b22b1a00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ed7dff8e-c83d-4699-b32e-03ceaf3d2800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 18462      ✗ 0    
     data_received..................: 31 MB   507 kB/s
     data_sent......................: 7.3 MB  121 kB/s
   ✓ expected_result................: 0.00%   ✓ 0          ✗ 0    
     http_req_blocked...............: avg=241.89µs min=1.1µs   med=2.7µs    max=36.03ms p(90)=3.7µs  p(95)=5.1µs 
     http_req_connecting............: avg=229µs    min=0s      med=0s       max=34ms    p(90)=0s     p(95)=0s    
     http_req_duration..............: avg=977.99ms min=84.72ms med=901.04ms max=3.83s   p(90)=1.44s  p(95)=1.75s 
       { expected_response:true }...: avg=977.99ms min=84.72ms med=901.04ms max=3.83s   p(90)=1.44s  p(95)=1.75s 
   ✓ http_req_failed................: 0.00%   ✓ 0          ✗ 6154 
     http_req_receiving.............: avg=66.77µs  min=19.9µs  med=61.1µs   max=13.71ms p(90)=81.4µs p(95)=86.9µs
     http_req_sending...............: avg=90.48µs  min=7.9µs   med=16.6µs   max=33.01ms p(90)=31.2µs p(95)=34.9µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s      p(90)=0s     p(95)=0s    
     http_req_waiting...............: avg=977.83ms min=84.66ms med=900.96ms max=3.82s   p(90)=1.44s  p(95)=1.75s 
     http_reqs......................: 6154    101.850089/s
     iteration_duration.............: avg=978.59ms min=85.09ms med=901.4ms  max=3.83s   p(90)=1.44s  p(95)=1.75s 
     iterations.....................: 6154    101.850089/s
   ✓ no_errors......................: 0.00%   ✓ 0          ✗ 0    
     vus............................: 100     min=100      max=100
     vus_max........................: 100     min=100      max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6d60cf82-a31b-4ac9-330e-dfe6ed83f300/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3a011230-f986-495d-f0d9-78f992f5f800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 17934     ✗ 0    
     data_received..................: 30 MB   493 kB/s
     data_sent......................: 7.1 MB  117 kB/s
   ✓ expected_result................: 0.00%   ✓ 0         ✗ 0    
     http_req_blocked...............: avg=72.57µs min=1µs      med=2µs      max=19.23ms p(90)=2.9µs   p(95)=3.5µs  
     http_req_connecting............: avg=66.51µs min=0s       med=0s       max=19.19ms p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=1.01s   min=468.1ms  med=951.04ms max=2.69s   p(90)=1.27s   p(95)=1.44s  
       { expected_response:true }...: avg=1.01s   min=468.1ms  med=951.04ms max=2.69s   p(90)=1.27s   p(95)=1.44s  
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 5978 
     http_req_receiving.............: avg=51.31µs min=17.1µs   med=41.09µs  max=11.62ms p(90)=65.5µs  p(95)=75.39µs
     http_req_sending...............: avg=23.29µs min=6.99µs   med=12.39µs  max=8.73ms  p(90)=22.99µs p(95)=28.5µs 
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s       max=0s      p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=1.01s   min=468.05ms med=950.89ms max=2.68s   p(90)=1.27s   p(95)=1.44s  
     http_reqs......................: 5978    98.648316/s
     iteration_duration.............: avg=1.01s   min=468.36ms med=951.33ms max=2.69s   p(90)=1.27s   p(95)=1.44s  
     iterations.....................: 5978    98.648316/s
   ✓ no_errors......................: 0.00%   ✓ 0         ✗ 0    
     vus............................: 100     min=100     max=100
     vus_max........................: 100     min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/14261871-e7d7-45d8-0d70-b1ffdcbcc600/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/51250542-debd-4ea2-e01e-688a01dfd100/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 3641 / ✗ 6
     ✓ expected_result

     checks.........................: 99.94% ✓ 10935    ✗ 6    
     data_received..................: 19 MB  309 kB/s
     data_sent......................: 4.3 MB 71 kB/s
   ✓ expected_result................: 0.00%  ✓ 0        ✗ 0    
     http_req_blocked...............: avg=327.48µs min=1.4µs    med=2.4µs  max=31.9ms  p(90)=3.6µs  p(95)=8.73µs
     http_req_connecting............: avg=316.32µs min=0s       med=0s     max=31.84ms p(90)=0s     p(95)=0s    
     http_req_duration..............: avg=1.65s    min=439.7ms  med=1.51s  max=19.55s  p(90)=1.78s  p(95)=1.96s 
       { expected_response:true }...: avg=1.65s    min=439.7ms  med=1.51s  max=19.55s  p(90)=1.78s  p(95)=1.96s 
   ✓ http_req_failed................: 0.00%  ✓ 0        ✗ 3647 
     http_req_receiving.............: avg=60.71µs  min=23.4µs   med=56.9µs max=2.27ms  p(90)=79.4µs p(95)=85.7µs
     http_req_sending...............: avg=50.01µs  min=7.7µs    med=14.1µs max=20.2ms  p(90)=28.5µs p(95)=33.6µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s     p(95)=0s    
     http_req_waiting...............: avg=1.65s    min=439.58ms med=1.51s  max=19.55s  p(90)=1.78s  p(95)=1.96s 
     http_reqs......................: 3647   60.00067/s
     iteration_duration.............: avg=1.65s    min=440.15ms med=1.52s  max=19.56s  p(90)=1.78s  p(95)=1.96s 
     iterations.....................: 3647   60.00067/s
   ✓ no_errors......................: 0.00%  ✓ 0        ✗ 0    
     vus............................: 100    min=100    max=100
     vus_max........................: 100    min=100    max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2baead99-5474-49b6-9e14-06811afbb800/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/81bdf858-d994-4cef-e395-0599c5c06700/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-deno`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 3511 / ✗ 1
     ✓ expected_result

     checks.........................: 99.99% ✓ 10535     ✗ 1    
     data_received..................: 18 MB  291 kB/s
     data_sent......................: 4.2 MB 69 kB/s
   ✓ expected_result................: 0.00%  ✓ 0         ✗ 0    
     http_req_blocked...............: avg=77.1µs  min=1µs      med=2.2µs  max=9.65ms p(90)=4µs    p(95)=8.3µs   
     http_req_connecting............: avg=70.83µs min=0s       med=0s     max=9.61ms p(90)=0s     p(95)=0s      
     http_req_duration..............: avg=1.71s   min=432.26ms med=1.65s  max=2.9s   p(90)=2.03s  p(95)=2.25s   
       { expected_response:true }...: avg=1.71s   min=432.26ms med=1.65s  max=2.9s   p(90)=2.03s  p(95)=2.25s   
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 3512 
     http_req_receiving.............: avg=74.39µs min=16.89µs  med=35.1µs max=5.07ms p(90)=89.9µs p(95)=109.2µs 
     http_req_sending...............: avg=62.28µs min=6.8µs    med=12.5µs max=5.78ms p(90)=29.6µs p(95)=110.57µs
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s     max=0s     p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=1.71s   min=432.2ms  med=1.65s  max=2.9s   p(90)=2.03s  p(95)=2.25s   
     http_reqs......................: 3512   58.138157/s
     iteration_duration.............: avg=1.71s   min=432.55ms med=1.65s  max=2.9s   p(90)=2.03s  p(95)=2.25s   
     iterations.....................: 3512   58.138157/s
   ✓ no_errors......................: 0.00%  ✓ 0         ✗ 0    
     vus............................: 100    min=100     max=100
     vus_max........................: 100    min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/028c4b32-8b02-4592-5ca2-f6b874b3cb00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/bb4ff89b-eea5-4c51-7c69-1a8256e66d00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 9663      ✗ 0    
     data_received..................: 16 MB   265 kB/s
     data_sent......................: 3.8 MB  63 kB/s
   ✓ expected_result................: 0.00%   ✓ 0         ✗ 0    
     http_req_blocked...............: avg=338.63µs min=1.2µs    med=2.5µs  max=23.52ms p(90)=4.2µs   p(95)=19.9µs 
     http_req_connecting............: avg=330.85µs min=0s       med=0s     max=23.48ms p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=1.86s    min=485.25ms med=1.74s  max=4.82s   p(90)=2.83s   p(95)=3.15s  
       { expected_response:true }...: avg=1.86s    min=485.25ms med=1.74s  max=4.82s   p(90)=2.83s   p(95)=3.15s  
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 3221 
     http_req_receiving.............: avg=167.7µs  min=22.5µs   med=48.6µs max=27.46ms p(90)=137.8µs p(95)=295.9µs
     http_req_sending...............: avg=318.95µs min=8.8µs    med=15.3µs max=64.72ms p(90)=117µs   p(95)=568.9µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=1.86s    min=485.17ms med=1.74s  max=4.82s   p(90)=2.83s   p(95)=3.15s  
     http_reqs......................: 3221    53.249627/s
     iteration_duration.............: avg=1.86s    min=488.77ms med=1.74s  max=4.83s   p(90)=2.83s   p(95)=3.15s  
     iterations.....................: 3221    53.249627/s
   ✓ no_errors......................: 0.00%   ✓ 0         ✗ 0    
     vus............................: 100     min=100     max=100
     vus_max........................: 100     min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9c4b2226-328f-497d-2790-396e80b01a00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/bafdd2c9-223d-4ee0-0853-e3068e27e400/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 9534      ✗ 0    
     data_received..................: 16 MB   264 kB/s
     data_sent......................: 3.8 MB  62 kB/s
   ✓ expected_result................: 0.00%   ✓ 0         ✗ 0    
     http_req_blocked...............: avg=204.31µs min=1.2µs    med=3.5µs   max=19.11ms p(90)=5.7µs   p(95)=22.1µs  
     http_req_connecting............: avg=197.23µs min=0s       med=0s      max=18.99ms p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=1.89s    min=527.43ms med=1.81s   max=5.13s   p(90)=2.22s   p(95)=2.4s    
       { expected_response:true }...: avg=1.89s    min=527.43ms med=1.81s   max=5.13s   p(90)=2.22s   p(95)=2.4s    
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 3178 
     http_req_receiving.............: avg=99.54µs  min=29.5µs   med=84.05µs max=6.85ms  p(90)=133.9µs p(95)=157.86µs
     http_req_sending...............: avg=73.9µs   min=9.9µs    med=22.7µs  max=6.08ms  p(90)=50.73µs p(95)=86.38µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=1.89s    min=527.27ms med=1.81s   max=5.13s   p(90)=2.22s   p(95)=2.4s    
     http_reqs......................: 3178    52.518532/s
     iteration_duration.............: avg=1.89s    min=528.08ms med=1.81s   max=5.13s   p(90)=2.22s   p(95)=2.4s    
     iterations.....................: 3178    52.518532/s
   ✓ no_errors......................: 0.00%   ✓ 0         ✗ 0    
     vus............................: 100     min=100     max=100
     vus_max........................: 100     min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e6e23d62-daa5-4885-eca4-ec5490c0d700/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e3a69d9b-e48c-4895-c6f2-7699f70c9800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 3120 / ✗ 2
     ✓ expected_result

     checks.........................: 99.97% ✓ 9364     ✗ 2    
     data_received..................: 16 MB  256 kB/s
     data_sent......................: 3.7 MB 61 kB/s
   ✓ expected_result................: 0.00%  ✓ 0        ✗ 0    
     http_req_blocked...............: avg=115.45µs min=1.3µs   med=2.29µs max=14.93ms p(90)=3.6µs   p(95)=12.29µs
     http_req_connecting............: avg=105µs    min=0s      med=0s     max=10.84ms p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=1.94s    min=1.03s   med=1.86s  max=4.04s   p(90)=2.3s    p(95)=2.53s  
       { expected_response:true }...: avg=1.94s    min=1.03s   med=1.86s  max=4.04s   p(90)=2.3s    p(95)=2.53s  
   ✓ http_req_failed................: 0.00%  ✓ 0        ✗ 3122 
     http_req_receiving.............: avg=58.39µs  min=20.29µs med=52.6µs max=2.22ms  p(90)=79.9µs  p(95)=87.1µs 
     http_req_sending...............: avg=46.43µs  min=7.5µs   med=13.7µs max=7.49ms  p(90)=28.89µs p(95)=43.78µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s      p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=1.94s    min=1.03s   med=1.86s  max=4.04s   p(90)=2.3s    p(95)=2.53s  
     http_reqs......................: 3122   51.15588/s
     iteration_duration.............: avg=1.94s    min=1.03s   med=1.86s  max=4.04s   p(90)=2.3s    p(95)=2.53s  
     iterations.....................: 3122   51.15588/s
   ✓ no_errors......................: 0.00%  ✓ 0        ✗ 0    
     vus............................: 35     min=35     max=100
     vus_max........................: 100    min=100    max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0b24abe6-c123-4080-0627-2ee37192e200/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/54a1886b-5cf7-4693-e6fd-0fb38a7d5900/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  98% — ✓ 3060 / ✗ 38
     ✗ expected_result
      ↳  99% — ✓ 3091 / ✗ 7

     checks.........................: 99.51% ✓ 9249      ✗ 45   
     data_received..................: 15 MB  253 kB/s
     data_sent......................: 3.7 MB 60 kB/s
   ✓ expected_result................: 0.00%  ✓ 0         ✗ 0    
     http_req_blocked...............: avg=1.35ms   min=1.5µs    med=2.6µs  max=61.32ms p(90)=4.3µs  p(95)=14.9µs 
     http_req_connecting............: avg=1.31ms   min=0s       med=0s     max=61.29ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=1.95s    min=867.89ms med=1.86s  max=4.13s   p(90)=2.35s  p(95)=2.7s   
       { expected_response:true }...: avg=1.95s    min=867.89ms med=1.86s  max=4.13s   p(90)=2.35s  p(95)=2.7s   
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 3098 
     http_req_receiving.............: avg=63.01µs  min=22.1µs   med=59.7µs max=972.4µs p(90)=88.1µs p(95)=96.21µs
     http_req_sending...............: avg=237.83µs min=9.2µs    med=16.1µs max=15.85ms p(90)=33.1µs p(95)=40.91µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=1.95s    min=867.78ms med=1.86s  max=4.13s   p(90)=2.35s  p(95)=2.7s   
     http_reqs......................: 3098   50.809236/s
     iteration_duration.............: avg=1.95s    min=868.16ms med=1.86s  max=4.16s   p(90)=2.35s  p(95)=2.71s  
     iterations.....................: 3098   50.809236/s
   ✓ no_errors......................: 0.00%  ✓ 0         ✗ 0    
     vus............................: 9      min=9       max=100
     vus_max........................: 100    min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7e80632b-de8d-4f87-ef72-16750485c600/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a5e28adb-686f-45d6-baf5-f71345866b00/public" alt="HTTP Overview" />


  </details>