## Overview for: `fed-v1-ramping-vus`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. We are running a heavy load of concurrent VUs to measure response time and other stats, during stress. It measure things like memory usage, CPU usage, response times. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was trying to reach 1000 concurrent VUs over 60s


### Comparison


| Gateway                             | duration(p95)⬇️ |  RPS  |       Requests        |                       Durations                        |
| :---------------------------------- | :-------------: | :---: | :-------------------: | :----------------------------------------------------: |
| wundergraph                         |     2037ms      |  469  | 32878 total, 0 failed |   avg: 1048ms, p95: 2038ms, max: 3435ms, med: 984ms    |
| mesh-supergraph                     |     9809ms      |  94   | 6591 total, 0 failed  |  avg: 5708ms, p95: 9810ms, max: 11981ms, med: 5739ms   |
| apollo-router                       |     9945ms      |  111  | 7880 total, 0 failed  |  avg: 4996ms, p95: 9946ms, max: 15880ms, med: 4109ms   |
| mesh                                |     11076ms     |  81   | 5739 total, 0 failed  |  avg: 6581ms, p95: 11076ms, max: 13513ms, med: 6656ms  |
| stitching-federation-with-yoga-bun  |     13909ms     |  96   | 6794 total, 0 failed  |  avg: 5841ms, p95: 13909ms, max: 22134ms, med: 5232ms  |
| mercurius                           |     16142ms     |  53   | 3771 total, 0 failed  | avg: 10177ms, p95: 16142ms, max: 16310ms, med: 10467ms |
| stitching-federation-with-yoga-deno |     21849ms     |  47   | 3521 total, 0 failed  | avg: 12005ms, p95: 21849ms, max: 30904ms, med: 12356ms |
| stitching-federation-with-yoga      |     33563ms     |  43   | 3800 total, 0 failed  | avg: 11730ms, p95: 33564ms, max: 46936ms, med: 7618ms  |
| apollo-gateway-with-yoga            |     36069ms     |  43   | 3297 total, 0 failed  | avg: 13124ms, p95: 36070ms, max: 45899ms, med: 8500ms  |
| apollo-server                       |     48307ms     |  59   | 5078 total, 0 failed  |  avg: 8837ms, p95: 48308ms, max: 57670ms, med: 2391ms  |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 98634      ✗ 0     
     data_received..................: 164 MB  2.3 MB/s
     data_sent......................: 39 MB   558 kB/s
     http_req_blocked...............: avg=4.08ms min=1.3µs   med=2.6µs    max=1.44s    p(90)=4.89µs   p(95)=19.5µs  
     http_req_connecting............: avg=4.03ms min=0s      med=0s       max=1.44s    p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=1.04s  min=11.46ms med=984.1ms  max=3.43s    p(90)=1.82s    p(95)=2.03s   
       { expected_response:true }...: avg=1.04s  min=11.46ms med=984.1ms  max=3.43s    p(90)=1.82s    p(95)=2.03s   
     http_req_failed................: 0.00%   ✓ 0          ✗ 32878 
     http_req_receiving.............: avg=2.02ms min=18.5µs  med=52.4µs   max=1.15s    p(90)=254.52µs p(95)=940.18µs
     http_req_sending...............: avg=3.59ms min=9.19µs  med=15.7µs   max=750.06ms p(90)=107.82µs p(95)=3.33ms  
     http_req_tls_handshaking.......: avg=0s     min=0s      med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=1.04s  min=11.15ms med=976.74ms max=3.43s    p(90)=1.82s    p(95)=2.02s   
     http_reqs......................: 32878   469.638093/s
     iteration_duration.............: avg=1.05s  min=12.22ms med=997.24ms max=3.43s    p(90)=1.84s    p(95)=2.06s   
     iterations.....................: 32878   469.638093/s
     vus............................: 9       min=9        max=1000
     vus_max........................: 1000    min=1000     max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/054a22a3-b75c-431e-000f-ee8ec95d4100/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/25ad5a4f-a575-4b85-4a2e-c7b1416a7e00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 6591

     checks.........................: 66.66% ✓ 13182     ✗ 6591  
     data_received..................: 33 MB  474 kB/s
     data_sent......................: 7.8 MB 112 kB/s
     http_req_blocked...............: avg=114.06µs min=1.2µs   med=2.4µs  max=19.96ms  p(90)=421.1µs p(95)=484.65µs
     http_req_connecting............: avg=100.93µs min=0s      med=0s     max=19.89ms  p(90)=351.7µs p(95)=411.45µs
     http_req_duration..............: avg=5.7s     min=12.06ms med=5.73s  max=11.98s   p(90)=9s      p(95)=9.8s    
       { expected_response:true }...: avg=5.7s     min=12.06ms med=5.73s  max=11.98s   p(90)=9s      p(95)=9.8s    
     http_req_failed................: 0.00%  ✓ 0         ✗ 6591  
     http_req_receiving.............: avg=134.49µs min=21.7µs  med=54.5µs max=127.33ms p(90)=86µs    p(95)=96.65µs 
     http_req_sending...............: avg=34.58µs  min=6.9µs   med=14µs   max=13.55ms  p(90)=61.1µs  p(95)=75.35µs 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=5.7s     min=11.97ms med=5.73s  max=11.98s   p(90)=9s      p(95)=9.8s    
     http_reqs......................: 6591   94.142424/s
     iteration_duration.............: avg=5.7s     min=12.46ms med=5.73s  max=11.98s   p(90)=9s      p(95)=9.81s   
     iterations.....................: 6591   94.142424/s
     vus............................: 7      min=7       max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/46a520f0-6d24-42bd-6f61-d2073e591500/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e8327c94-c2ba-4bb0-8f03-f328c590a700/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 7862 / ✗ 18
     ✗ valid response structure
      ↳  99% — ✓ 7862 / ✗ 18

     checks.........................: 99.84% ✓ 23604      ✗ 36    
     data_received..................: 39 MB  557 kB/s
     data_sent......................: 9.4 MB 133 kB/s
     http_req_blocked...............: avg=186.85µs min=1.1µs    med=2.29µs max=245.1ms  p(90)=163.22µs p(95)=379.81µs
     http_req_connecting............: avg=164.58µs min=0s       med=0s     max=224.92ms p(90)=104.29µs p(95)=319.01µs
     http_req_duration..............: avg=4.99s    min=272.19ms med=4.1s   max=15.87s   p(90)=9.26s    p(95)=9.94s   
       { expected_response:true }...: avg=4.99s    min=272.19ms med=4.1s   max=15.87s   p(90)=9.26s    p(95)=9.94s   
     http_req_failed................: 0.00%  ✓ 0          ✗ 7880  
     http_req_receiving.............: avg=142.49µs min=17.6µs   med=42µs   max=124.08ms p(90)=75.3µs   p(95)=87.39µs 
     http_req_sending...............: avg=114.94µs min=7.1µs    med=13.4µs max=75.39ms  p(90)=50.8µs   p(95)=69.9µs  
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=4.99s    min=272.12ms med=4.1s   max=15.87s   p(90)=9.26s    p(95)=9.94s   
     http_reqs......................: 7880   111.954391/s
     iteration_duration.............: avg=4.99s    min=272.86ms med=4.11s  max=15.88s   p(90)=9.26s    p(95)=9.94s   
     iterations.....................: 7880   111.954391/s
     vus............................: 293    min=57       max=1000
     vus_max........................: 1000   min=1000     max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4868d3cc-ff51-497a-79d2-3286bcb81a00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a0346003-2d4f-47bf-a681-35aec81ea600/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 5737 / ✗ 2
     ✗ valid response structure
      ↳  99% — ✓ 5737 / ✗ 2

     checks.........................: 99.97% ✓ 17213     ✗ 4     
     data_received..................: 29 MB  410 kB/s
     data_sent......................: 6.8 MB 97 kB/s
     http_req_blocked...............: avg=517.12µs min=1.4µs   med=2.5µs  max=72.26ms p(90)=422.12µs p(95)=474.9µs
     http_req_connecting............: avg=499.26µs min=0s      med=0s     max=72.12ms p(90)=354.02µs p(95)=402.9µs
     http_req_duration..............: avg=6.58s    min=14.3ms  med=6.65s  max=13.51s  p(90)=10.47s   p(95)=11.07s 
       { expected_response:true }...: avg=6.58s    min=14.3ms  med=6.65s  max=13.51s  p(90)=10.47s   p(95)=11.07s 
     http_req_failed................: 0.00%  ✓ 0         ✗ 5739  
     http_req_receiving.............: avg=70.3µs   min=19.9µs  med=54.3µs max=10.66ms p(90)=82.2µs   p(95)=93.01µs
     http_req_sending...............: avg=94.2µs   min=9.1µs   med=14µs   max=14.9ms  p(90)=65.3µs   p(95)=84.31µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s      p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=6.58s    min=14.21ms med=6.65s  max=13.51s  p(90)=10.47s   p(95)=11.07s 
     http_reqs......................: 5739   81.977895/s
     iteration_duration.............: avg=6.58s    min=15.12ms med=6.65s  max=13.51s  p(90)=10.47s   p(95)=11.07s 
     iterations.....................: 5739   81.977895/s
     vus............................: 10     min=10      max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/24725704-ca64-43b0-e83b-8c00125db100/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d53ac131-a80b-4785-9760-36de6e128e00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 20382    ✗ 0     
     data_received..................: 34 MB   482 kB/s
     data_sent......................: 8.1 MB  115 kB/s
     http_req_blocked...............: avg=584.85µs min=1.3µs    med=2.5µs  max=130.41ms p(90)=192.47µs p(95)=488.64µs
     http_req_connecting............: avg=567.22µs min=0s       med=0s     max=130.23ms p(90)=129.44µs p(95)=409.2µs 
     http_req_duration..............: avg=5.84s    min=335.57ms med=5.23s  max=22.13s   p(90)=8.87s    p(95)=13.9s   
       { expected_response:true }...: avg=5.84s    min=335.57ms med=5.23s  max=22.13s   p(90)=8.87s    p(95)=13.9s   
     http_req_failed................: 0.00%   ✓ 0        ✗ 6794  
     http_req_receiving.............: avg=123.03µs min=19.1µs   med=46.1µs max=156.76ms p(90)=76.57µs  p(95)=91.2µs  
     http_req_sending...............: avg=164.8µs  min=7.9µs    med=14µs   max=82.15ms  p(90)=65.6µs   p(95)=96.6µs  
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=5.84s    min=335.49ms med=5.23s  max=22.13s   p(90)=8.87s    p(95)=13.9s   
     http_reqs......................: 6794    96.83619/s
     iteration_duration.............: avg=5.84s    min=336.27ms med=5.23s  max=22.13s   p(90)=8.87s    p(95)=13.91s  
     iterations.....................: 6794    96.83619/s
     vus............................: 142     min=53     max=1000
     vus_max........................: 1000    min=1000   max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b3f892f6-79b1-48af-385d-9cc3e55b8500/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/123291d8-baf3-43b3-1824-52cc59818d00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 11313   ✗ 0     
     data_received..................: 19 MB   271 kB/s
     data_sent......................: 4.5 MB  64 kB/s
     http_req_blocked...............: avg=642.07µs min=1.6µs    med=3.7µs  max=60.92ms p(90)=536.2µs p(95)=632.85µs
     http_req_connecting............: avg=609.73µs min=0s       med=0s     max=60.7ms  p(90)=450.4µs p(95)=530.2µs 
     http_req_duration..............: avg=10.17s   min=933.32ms med=10.46s max=16.3s   p(90)=15.56s  p(95)=16.14s  
       { expected_response:true }...: avg=10.17s   min=933.32ms med=10.46s max=16.3s   p(90)=15.56s  p(95)=16.14s  
     http_req_failed................: 0.00%   ✓ 0       ✗ 3771  
     http_req_receiving.............: avg=97.8µs   min=29.2µs   med=82.3µs max=13.91ms p(90)=130µs   p(95)=153.25µs
     http_req_sending...............: avg=76.1µs   min=9.19µs   med=23µs   max=13.78ms p(90)=90.4µs  p(95)=116.4µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=10.17s   min=933.25ms med=10.46s max=16.3s   p(90)=15.56s  p(95)=16.14s  
     http_reqs......................: 3771    53.8458/s
     iteration_duration.............: avg=10.17s   min=934.22ms med=10.46s max=16.31s  p(90)=15.56s  p(95)=16.14s  
     iterations.....................: 3771    53.8458/s
     vus............................: 155     min=52    max=1000
     vus_max........................: 1000    min=1000  max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a1a36f3b-db2a-4726-6d8e-5c1b218abe00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/67a2ca7f-e560-41a8-4e32-563dcf567000/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-deno`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  96% — ✓ 3381 / ✗ 140
     ✗ valid response structure
      ↳  96% — ✓ 3381 / ✗ 140

     checks.........................: 97.34% ✓ 10283     ✗ 280   
     data_received..................: 20 MB  263 kB/s
     data_sent......................: 4.2 MB 56 kB/s
     http_req_blocked...............: avg=357.86µs min=1.3µs med=3.4µs  max=37.66ms p(90)=604.2µs p(95)=703.2µs
     http_req_connecting............: avg=321.45µs min=0s    med=0s     max=37.19ms p(90)=509.2µs p(95)=603.7µs
     http_req_duration..............: avg=12s      min=1.56s med=12.35s max=30.9s   p(90)=19.45s  p(95)=21.84s 
       { expected_response:true }...: avg=12s      min=1.56s med=12.35s max=30.9s   p(90)=19.45s  p(95)=21.84s 
     http_req_failed................: 0.00%  ✓ 0         ✗ 3521  
     http_req_receiving.............: avg=178.44µs min=25µs  med=59.5µs max=15.06ms p(90)=159.7µs p(95)=269.8µs
     http_req_sending...............: avg=147.54µs min=9.7µs med=23.6µs max=26.36ms p(90)=112.3µs p(95)=164.2µs
     http_req_tls_handshaking.......: avg=0s       min=0s    med=0s     max=0s      p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=12s      min=1.56s med=12.35s max=30.9s   p(90)=19.45s  p(95)=21.84s 
     http_reqs......................: 3521   47.322938/s
     iteration_duration.............: avg=12s      min=1.58s med=12.35s max=30.9s   p(90)=19.45s  p(95)=21.84s 
     iterations.....................: 3521   47.322938/s
     vus............................: 138    min=0       max=1000
     vus_max........................: 1000   min=998     max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1ce6e272-1206-41e2-33c7-37857ceea400/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6033444c-d202-4102-1e9a-fbea4e229200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  73% — ✓ 2785 / ✗ 1015
     ✗ valid response structure
      ↳  73% — ✓ 2785 / ✗ 1015

     checks.........................: 82.19% ✓ 9370      ✗ 2030  
     data_received..................: 29 MB  332 kB/s
     data_sent......................: 4.5 MB 52 kB/s
     http_req_blocked...............: avg=335.02µs min=1.5µs  med=3.1µs  max=56.34ms p(90)=483.33µs p(95)=540.73µs
     http_req_connecting............: avg=304.92µs min=0s     med=0s     max=56.17ms p(90)=407.31µs p(95)=454.41µs
     http_req_duration..............: avg=11.72s   min=1s     med=7.61s  max=46.93s  p(90)=28.65s   p(95)=33.56s  
       { expected_response:true }...: avg=11.72s   min=1s     med=7.61s  max=46.93s  p(90)=28.65s   p(95)=33.56s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 3800  
     http_req_receiving.............: avg=115.82µs min=24.7µs med=65.5µs max=64.52ms p(90)=110.91µs p(95)=158.74µs
     http_req_sending...............: avg=86.45µs  min=10.7µs med=17.7µs max=77.99ms p(90)=83.91µs  p(95)=104.21µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=11.72s   min=1s     med=7.61s  max=46.93s  p(90)=28.65s   p(95)=33.56s  
     http_reqs......................: 3800   43.553794/s
     iteration_duration.............: avg=11.73s   min=1.01s  med=7.61s  max=46.93s  p(90)=28.66s   p(95)=33.56s  
     iterations.....................: 3800   43.553794/s
     vus............................: 5      min=5       max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a1757db2-c3bb-4054-67db-bcc1244e1a00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d6d9d0a7-1f46-4945-f496-8e9cb015ce00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  71% — ✓ 2365 / ✗ 932
     ✗ valid response structure
      ↳  71% — ✓ 2365 / ✗ 932

     checks.........................: 81.15% ✓ 8027      ✗ 1864  
     data_received..................: 14 MB  188 kB/s
     data_sent......................: 3.9 MB 51 kB/s
     http_req_blocked...............: avg=269.79µs min=1.6µs  med=3.5µs   max=70.61ms p(90)=613.5µs  p(95)=701.38µs
     http_req_connecting............: avg=231.45µs min=0s     med=0s      max=70.5ms  p(90)=519.66µs p(95)=598.64µs
     http_req_duration..............: avg=13.12s   min=1.39s  med=8.5s    max=45.89s  p(90)=31.88s   p(95)=36.06s  
       { expected_response:true }...: avg=13.12s   min=1.39s  med=8.5s    max=45.89s  p(90)=31.88s   p(95)=36.06s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 3297  
     http_req_receiving.............: avg=142.83µs min=27.2µs med=71.09µs max=60.24ms p(90)=130.5µs  p(95)=172.9µs 
     http_req_sending...............: avg=132.79µs min=11.4µs med=25.5µs  max=24.47ms p(90)=113.24µs p(95)=171.92µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=13.12s   min=1.39s  med=8.5s    max=45.89s  p(90)=31.88s   p(95)=36.06s  
     http_reqs......................: 3297   43.130206/s
     iteration_duration.............: avg=13.12s   min=1.39s  med=8.5s    max=45.9s   p(90)=31.88s   p(95)=36.07s  
     iterations.....................: 3297   43.130206/s
     vus............................: 110    min=0       max=1000
     vus_max........................: 1000   min=965     max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b5af7f59-8d0e-4115-d4ea-30cf639fcd00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/01a2a07f-72fc-4652-b770-c5f35389e500/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 5069 / ✗ 9
     ✗ valid response structure
      ↳  99% — ✓ 5069 / ✗ 9

     checks.........................: 99.88% ✓ 15216     ✗ 18    
     data_received..................: 26 MB  308 kB/s
     data_sent......................: 6.0 MB 71 kB/s
     http_req_blocked...............: avg=107.32µs min=1.3µs    med=2.9µs   max=14.83ms p(90)=377.16µs p(95)=431.03µs
     http_req_connecting............: avg=91.74µs  min=0s       med=0s      max=14.71ms p(90)=313.7µs  p(95)=362.31µs
     http_req_duration..............: avg=8.83s    min=99.97ms  med=2.39s   max=57.66s  p(90)=37.93s   p(95)=48.3s   
       { expected_response:true }...: avg=8.83s    min=99.97ms  med=2.39s   max=57.66s  p(90)=37.93s   p(95)=48.3s   
     http_req_failed................: 0.00%  ✓ 0         ✗ 5078  
     http_req_receiving.............: avg=69.43µs  min=21.4µs   med=67.59µs max=1.62ms  p(90)=94.1µs   p(95)=100.61µs
     http_req_sending...............: avg=43.55µs  min=7.9µs    med=17.6µs  max=11.69ms p(90)=66.6µs   p(95)=80.1µs  
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=8.83s    min=99.9ms   med=2.39s   max=57.66s  p(90)=37.93s   p(95)=48.3s   
     http_reqs......................: 5078   59.737427/s
     iteration_duration.............: avg=8.83s    min=100.63ms med=2.39s   max=57.67s  p(90)=37.93s   p(95)=48.3s   
     iterations.....................: 5078   59.737427/s
     vus............................: 4      min=4       max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b6051c0b-83df-474d-e063-4cad9c321000/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3c909301-8488-47c6-1808-37cb8d33c000/public" alt="HTTP Overview" />


  </details>