## Overview for scenario: `ramping-vus`


This scenario runs 4 servics and a GraphQL gateway with Federation spec, and runs a heavy query. We are running a heavy load of concurrent VUs to measure response time and other stats, during stress. It measure things like memory usage, CPU usage, response times. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was trying to reach 1000 concurrent VUs over 60s


### Comparison


| Gateway                             | duration(p95)⬇️ |  RPS  |       Requests        |                       Durations                       |
| :---------------------------------- | :-------------: | :---: | :-------------------: | :---------------------------------------------------: |
| wundergraph                         |      908ms      | 1082  | 75782 total, 0 failed |    avg: 451ms, p95: 909ms, max: 1494ms, med: 428ms    |
| mesh                                |     10167ms     |  89   | 6299 total, 0 failed  | avg: 6073ms, p95: 10167ms, max: 12967ms, med: 5981ms  |
| apollo-router                       |     10291ms     |  97   | 7007 total, 0 failed  | avg: 5605ms, p95: 10291ms, max: 13503ms, med: 5262ms  |
| mercurius                           |     13396ms     |  63   | 4419 total, 0 failed  | avg: 8414ms, p95: 13396ms, max: 13751ms, med: 8720ms  |
| stitching-federation-with-yoga-deno |     15150ms     |  58   | 4113 total, 0 failed  | avg: 9723ms, p95: 15151ms, max: 17011ms, med: 10968ms |
| stitching-federation-with-yoga-bun  |     24198ms     |  53   | 3926 total, 0 failed  | avg: 10144ms, p95: 24199ms, max: 31224ms, med: 9693ms |
| apollo-gateway-with-yoga            |     28065ms     |  58   | 4357 total, 0 failed  | avg: 9573ms, p95: 28066ms, max: 37102ms, med: 5512ms  |
| stitching-federation-with-yoga      |     29570ms     |  45   | 3660 total, 0 failed  | avg: 12025ms, p95: 29571ms, max: 38719ms, med: 8963ms |
| apollo-server                       |     52501ms     |  45   | 4144 total, 0 failed  | avg: 11255ms, p95: 52501ms, max: 59957ms, med: 2842ms |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 227346      ✗ 0     
     data_received..................: 368 MB  5.3 MB/s
     data_sent......................: 90 MB   1.3 MB/s
     http_req_blocked...............: avg=518µs    min=1µs    med=1.9µs    max=472.61ms p(90)=3.2µs    p(95)=4.5µs   
     http_req_connecting............: avg=508.17µs min=0s     med=0s       max=472.54ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=451.4ms  min=4.47ms med=428.36ms max=1.49s    p(90)=807.7ms  p(95)=908.53ms
       { expected_response:true }...: avg=451.4ms  min=4.47ms med=428.36ms max=1.49s    p(90)=807.7ms  p(95)=908.53ms
     http_req_failed................: 0.00%   ✓ 0           ✗ 75782 
     http_req_receiving.............: avg=1.46ms   min=15.3µs med=34.2µs   max=481.88ms p(90)=170.9µs  p(95)=360.58µs
     http_req_sending...............: avg=638.8µs  min=6.5µs  med=10.8µs   max=261.93ms p(90)=25.5µs   p(95)=103µs   
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=449.29ms min=4.41ms med=427.35ms max=1.49s    p(90)=804.92ms p(95)=904.59ms
     http_reqs......................: 75782   1082.509035/s
     iteration_duration.............: avg=454.78ms min=4.75ms med=430.27ms max=1.54s    p(90)=816.55ms p(95)=924.26ms
     iterations.....................: 75782   1082.509035/s
     vus............................: 7       min=7         max=991 
     vus_max........................: 1000    min=1000      max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/208e9f97-6cbd-4f91-5469-2a2044117200/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/75779ce5-29d5-4059-50d7-9dbd89430600/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 6282 / ✗ 17
     ✓ expected_result

     checks.........................: 99.91% ✓ 18880     ✗ 17    
     data_received..................: 32 MB  453 kB/s
     data_sent......................: 7.5 MB 107 kB/s
     http_req_blocked...............: avg=127.93µs min=1.1µs   med=2.2µs  max=25.35ms p(90)=391.81µs p(95)=440.39µs
     http_req_connecting............: avg=111.29µs min=0s      med=0s     max=25.27ms p(90)=327.61µs p(95)=371µs   
     http_req_duration..............: avg=6.07s    min=15.05ms med=5.98s  max=12.96s  p(90)=9.52s    p(95)=10.16s  
       { expected_response:true }...: avg=6.07s    min=15.05ms med=5.98s  max=12.96s  p(90)=9.52s    p(95)=10.16s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 6299  
     http_req_receiving.............: avg=56.29µs  min=19.59µs med=47.7µs max=4.21ms  p(90)=78.2µs   p(95)=87.7µs  
     http_req_sending...............: avg=31.01µs  min=7.09µs  med=14µs   max=7.93ms  p(90)=61.51µs  p(95)=76.1µs  
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=6.07s    min=14.96ms med=5.98s  max=12.96s  p(90)=9.52s    p(95)=10.16s  
     http_reqs......................: 6299   89.981462/s
     iteration_duration.............: avg=6.07s    min=15.44ms med=5.98s  max=12.96s  p(90)=9.52s    p(95)=10.16s  
     iterations.....................: 6299   89.981462/s
     vus............................: 6      min=6       max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/29cdd49c-5ce2-49d9-4d52-ca1bbb996100/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/668b9cbb-e248-4cd2-c55d-36300e598a00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 7004 / ✗ 3
     ✓ expected_result

     checks.........................: 99.98% ✓ 21018     ✗ 3     
     data_received..................: 35 MB  483 kB/s
     data_sent......................: 8.3 MB 115 kB/s
     http_req_blocked...............: avg=95.47µs min=1.2µs    med=2.6µs  max=18.96ms p(90)=364.34µs p(95)=430.58µs
     http_req_connecting............: avg=83.67µs min=0s       med=0s     max=18.91ms p(90)=304.46µs p(95)=361.34µs
     http_req_duration..............: avg=5.6s    min=238.9ms  med=5.26s  max=13.5s   p(90)=9.41s    p(95)=10.29s  
       { expected_response:true }...: avg=5.6s    min=238.9ms  med=5.26s  max=13.5s   p(90)=9.41s    p(95)=10.29s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 7007  
     http_req_receiving.............: avg=62.96µs min=21.6µs   med=57µs   max=1.57ms  p(90)=83.7µs   p(95)=93.4µs  
     http_req_sending...............: avg=33.89µs min=8.2µs    med=15.2µs max=3.18ms  p(90)=56.94µs  p(95)=70.5µs  
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=5.6s    min=238.79ms med=5.26s  max=13.5s   p(90)=9.41s    p(95)=10.29s  
     http_reqs......................: 7007   97.025686/s
     iteration_duration.............: avg=5.6s    min=239.31ms med=5.26s  max=13.5s   p(90)=9.41s    p(95)=10.29s  
     iterations.....................: 7007   97.025686/s
     vus............................: 102    min=56      max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1b49f467-946e-44d9-cb12-130172196300/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0601faa3-ca58-42a8-8363-4bdc990a7c00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 13257     ✗ 0     
     data_received..................: 22 MB   318 kB/s
     data_sent......................: 5.2 MB  75 kB/s
     http_req_blocked...............: avg=148.96µs min=1.5µs   med=3.4µs  max=33.37ms p(90)=499.16µs p(95)=561.24µs
     http_req_connecting............: avg=125.09µs min=0s      med=0s     max=33.07ms p(90)=409.68µs p(95)=465.98µs
     http_req_duration..............: avg=8.41s    min=9.79ms  med=8.71s  max=13.75s  p(90)=13.08s   p(95)=13.39s  
       { expected_response:true }...: avg=8.41s    min=9.79ms  med=8.71s  max=13.75s  p(90)=13.08s   p(95)=13.39s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 4419  
     http_req_receiving.............: avg=91.48µs  min=28µs    med=79.4µs max=5.29ms  p(90)=117.1µs  p(95)=138.51µs
     http_req_sending...............: avg=48.58µs  min=9.4µs   med=21.4µs max=13.61ms p(90)=85.5µs   p(95)=108.31µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=8.41s    min=9.67ms  med=8.71s  max=13.75s  p(90)=13.08s   p(95)=13.39s  
     http_reqs......................: 4419    63.120466/s
     iteration_duration.............: avg=8.41s    min=10.39ms med=8.72s  max=13.75s  p(90)=13.08s   p(95)=13.39s  
     iterations.....................: 4419    63.120466/s
     vus............................: 7       min=7       max=1000
     vus_max........................: 1000    min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ef68364e-fd09-4e2e-55ad-2cf9221a5700/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9e2cab4f-a65b-4e90-d737-e4b4da8ad800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-deno`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 4107 / ✗ 6
     ✗ expected_result
      ↳  99% — ✓ 4109 / ✗ 4

     checks.........................: 99.91% ✓ 12329     ✗ 10    
     data_received..................: 21 MB  291 kB/s
     data_sent......................: 4.9 MB 69 kB/s
     http_req_blocked...............: avg=183.75µs min=1µs    med=2.29µs max=16.57ms p(90)=411.98µs p(95)=465.31µs
     http_req_connecting............: avg=161.58µs min=0s     med=0s     max=16.53ms p(90)=341.8µs  p(95)=389.68µs
     http_req_duration..............: avg=9.72s    min=1.95s  med=10.96s max=17.01s  p(90)=14.87s   p(95)=15.15s  
       { expected_response:true }...: avg=9.72s    min=1.95s  med=10.96s max=17.01s  p(90)=14.87s   p(95)=15.15s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 4113  
     http_req_receiving.............: avg=90.28µs  min=15.4µs med=39.7µs max=15.03ms p(90)=87.8µs   p(95)=117.78µs
     http_req_sending...............: avg=48.67µs  min=6.7µs  med=14.2µs max=11.34ms p(90)=72.68µs  p(95)=90.84µs 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=9.72s    min=1.95s  med=10.96s max=17.01s  p(90)=14.87s   p(95)=15.15s  
     http_reqs......................: 4113   58.039122/s
     iteration_duration.............: avg=9.72s    min=1.95s  med=10.96s max=17.01s  p(90)=14.87s   p(95)=15.15s  
     iterations.....................: 4113   58.039122/s
     vus............................: 186    min=57      max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d944a130-503d-427f-7a73-f2d5dd717c00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0c953c1d-984a-4ecf-2eda-49205eb5ac00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 11778     ✗ 0     
     data_received..................: 20 MB   268 kB/s
     data_sent......................: 4.7 MB  64 kB/s
     http_req_blocked...............: avg=616.01µs min=1.2µs  med=2.7µs   max=152.14ms p(90)=569.89µs p(95)=699.19µs
     http_req_connecting............: avg=372.84µs min=0s     med=0s      max=152.08ms p(90)=484.89µs p(95)=592.51µs
     http_req_duration..............: avg=10.14s   min=1.12s  med=9.69s   max=31.22s   p(90)=19.02s   p(95)=24.19s  
       { expected_response:true }...: avg=10.14s   min=1.12s  med=9.69s   max=31.22s   p(90)=19.02s   p(95)=24.19s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 3926  
     http_req_receiving.............: avg=254.39µs min=21.4µs med=59.19µs max=95.41ms  p(90)=153.94µs p(95)=357.77µs
     http_req_sending...............: avg=265.39µs min=9.1µs  med=17.6µs  max=109.26ms p(90)=110.14µs p(95)=238.72µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=10.14s   min=1.12s  med=9.69s   max=31.22s   p(90)=19.02s   p(95)=24.19s  
     http_reqs......................: 3926    53.863858/s
     iteration_duration.............: avg=10.14s   min=1.13s  med=9.69s   max=31.22s   p(90)=19.02s   p(95)=24.2s   
     iterations.....................: 3926    53.863858/s
     vus............................: 137     min=0       max=1000
     vus_max........................: 1000    min=868     max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/daa3e032-5316-42ab-6875-a4877e74b900/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/78737f05-ca09-4bfa-3e8f-c07d7c0d0b00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  79% — ✓ 3480 / ✗ 877
     ✗ expected_result
      ↳  94% — ✓ 4109 / ✗ 248

     checks.........................: 91.39% ✓ 11946     ✗ 1125  
     data_received..................: 20 MB  273 kB/s
     data_sent......................: 5.2 MB 70 kB/s
     http_req_blocked...............: avg=147.11µs min=1.3µs    med=2.7µs  max=18.66ms p(90)=461.78µs p(95)=512.8µs 
     http_req_connecting............: avg=127.74µs min=0s       med=0s     max=18.57ms p(90)=388.98µs p(95)=436.86µs
     http_req_duration..............: avg=9.57s    min=102.18ms med=5.51s  max=37.1s   p(90)=21.92s   p(95)=28.06s  
       { expected_response:true }...: avg=9.57s    min=102.18ms med=5.51s  max=37.1s   p(90)=21.92s   p(95)=28.06s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 4357  
     http_req_receiving.............: avg=65.38µs  min=16.7µs   med=58.5µs max=2.54ms  p(90)=89µs     p(95)=101.42µs
     http_req_sending...............: avg=42.17µs  min=9.5µs    med=17.6µs max=1.83ms  p(90)=77.7µs   p(95)=91.74µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=9.57s    min=102.08ms med=5.51s  max=37.1s   p(90)=21.92s   p(95)=28.06s  
     http_reqs......................: 4357   58.923773/s
     iteration_duration.............: avg=9.57s    min=102.58ms med=5.51s  max=37.1s   p(90)=21.92s   p(95)=28.06s  
     iterations.....................: 4357   58.923773/s
     vus............................: 197    min=54      max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c6e58d29-927a-4cd1-917c-3278ef228300/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a5827ec2-7c24-431c-3bc3-6e1448ac5c00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  66% — ✓ 2437 / ✗ 1223
     ✗ expected_result
      ↳  97% — ✓ 3569 / ✗ 91

     checks.........................: 88.03% ✓ 9666      ✗ 1314  
     data_received..................: 27 MB  332 kB/s
     data_sent......................: 4.3 MB 54 kB/s
     http_req_blocked...............: avg=187.99µs min=1.4µs  med=2.29µs max=13.64ms p(90)=419.83µs p(95)=462.5µs 
     http_req_connecting............: avg=167.76µs min=0s     med=0s     max=13.61ms p(90)=350.22µs p(95)=391.2µs 
     http_req_duration..............: avg=12.02s   min=1.27s  med=8.96s  max=38.71s  p(90)=24.04s   p(95)=29.57s  
       { expected_response:true }...: avg=12.02s   min=1.27s  med=8.96s  max=38.71s  p(90)=24.04s   p(95)=29.57s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 3660  
     http_req_receiving.............: avg=66.89µs  min=21.1µs med=54.7µs max=6.11ms  p(90)=94.51µs  p(95)=126.44µs
     http_req_sending...............: avg=69.99µs  min=9µs    med=14.7µs max=11.46ms p(90)=69.7µs   p(95)=81.7µs  
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=12.02s   min=1.25s  med=8.96s  max=38.71s  p(90)=24.04s   p(95)=29.57s  
     http_reqs......................: 3660   45.084616/s
     iteration_duration.............: avg=12.02s   min=1.27s  med=8.96s  max=38.71s  p(90)=24.04s   p(95)=29.57s  
     iterations.....................: 3660   45.084616/s
     vus............................: 69     min=56      max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f1081ab5-9a8f-427b-4ea7-cdcdbef7c000/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/02b83a88-0f24-460f-1948-ae92cc780c00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 4140 / ✗ 4
     ✓ expected_result

     checks.........................: 99.96% ✓ 12428     ✗ 4     
     data_received..................: 21 MB  232 kB/s
     data_sent......................: 4.9 MB 54 kB/s
     http_req_blocked...............: avg=140.87µs min=1.6µs   med=3.2µs  max=17.77ms p(90)=466.07µs p(95)=528.51µs
     http_req_connecting............: avg=115.59µs min=0s      med=0s     max=17.69ms p(90)=385.58µs p(95)=445.13µs
     http_req_duration..............: avg=11.25s   min=83.35ms med=2.84s  max=59.95s  p(90)=44.18s   p(95)=52.5s   
       { expected_response:true }...: avg=11.25s   min=83.35ms med=2.84s  max=59.95s  p(90)=44.18s   p(95)=52.5s   
     http_req_failed................: 0.00%  ✓ 0         ✗ 4144  
     http_req_receiving.............: avg=93.93µs  min=28.3µs  med=79.9µs max=3.91ms  p(90)=127.5µs  p(95)=151.5µs 
     http_req_sending...............: avg=52.3µs   min=9.4µs   med=19.5µs max=6.24ms  p(90)=81.5µs   p(95)=97.17µs 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=11.25s   min=83.27ms med=2.84s  max=59.95s  p(90)=44.18s   p(95)=52.5s   
     http_reqs......................: 4144   45.102073/s
     iteration_duration.............: avg=11.25s   min=83.68ms med=2.84s  max=59.95s  p(90)=44.18s   p(95)=52.5s   
     iterations.....................: 4144   45.102073/s
     vus............................: 4      min=4       max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3ac57982-b478-41f4-1f7b-48503d56ba00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1d0e13a7-0778-486e-fe68-b815f50eaf00/public" alt="HTTP Overview" />


  </details>