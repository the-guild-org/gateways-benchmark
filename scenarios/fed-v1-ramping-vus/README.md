## Overview for: `fed-v1-ramping-vus`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. We are running a heavy load of concurrent VUs to measure response time and other stats, during stress. It measure things like memory usage, CPU usage, response times. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was trying to reach 1500 concurrent VUs over 300s


### Comparison


| Gateway                             | duration(p95)⬇️ |  RPS  |         Requests         |                       Durations                        |
| :---------------------------------- | :-------------: | :---: | :----------------------: | :----------------------------------------------------: |
| wundergraph                         |      418ms      | 3841  | 1190896 total, 0 failed  |    avg: 190ms, p95: 418ms, max: 1276ms, med: 171ms     |
| mesh                                |     8220ms      |  184  |  57172 total, 0 failed   |  avg: 4203ms, p95: 8220ms, max: 15741ms, med: 4043ms   |
| mercurius                           |     11965ms     |  125  |  38790 total, 0 failed   |  avg: 6242ms, p95: 11965ms, max: 12849ms, med: 6323ms  |
| stitching-federation-with-yoga-bun  |     12501ms     |  152  |  47269 total, 0 failed   |  avg: 5122ms, p95: 12501ms, max: 31296ms, med: 4707ms  |
| apollo-router                       |     12798ms     |  152  |  47222 total, 0 failed   |  avg: 5115ms, p95: 12798ms, max: 24671ms, med: 4134ms  |
| apollo-gateway-with-yoga-bun        |     14684ms     |  126  |  39112 total, 0 failed   |  avg: 6181ms, p95: 14685ms, max: 39642ms, med: 5784ms  |
| stitching-federation-with-yoga-deno |     19834ms     |  68   |  21390 total, 0 failed   | avg: 11524ms, p95: 19835ms, max: 21417ms, med: 12203ms |
| mesh-supergraph                     |     22691ms     |  66   |  20851 total, 0 failed   | avg: 11845ms, p95: 22691ms, max: 29564ms, med: 11576ms |
| apollo-server-node16                |     41387ms     |  90   | 28526 total, 467 failed  |  avg: 8724ms, p95: 41388ms, max: 60056ms, med: 4838ms  |
| stitching-federation-with-yoga-uws  |     46416ms     |  76   | 24046 total, 287 failed  | avg: 10206ms, p95: 46417ms, max: 60043ms, med: 5704ms  |
| apollo-gateway-with-yoga            |     59998ms     |  119  | 39829 total, 2329 failed |  avg: 6280ms, p95: 59999ms, max: 60038ms, med: 2716ms  |
| stitching-federation-with-yoga      |     59999ms     |  88   | 29508 total, 2621 failed |  avg: 8549ms, p95: 60000ms, max: 60024ms, med: 2978ms  |
| apollo-server                       |     60000ms     |  80   | 26859 total, 2707 failed |  avg: 9389ms, p95: 60000ms, max: 60035ms, med: 3169ms  |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 3572688     ✗ 0      
     data_received..................: 173 MB  557 kB/s
     data_sent......................: 1.4 GB  4.6 MB/s
     http_req_blocked...............: avg=144.51µs min=700ns   med=1.3µs    max=790.84ms p(90)=2.2µs    p(95)=2.8µs   
     http_req_connecting............: avg=139.32µs min=0s      med=0s       max=669.01ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=190.17ms min=193.8µs med=170.83ms max=1.27s    p(90)=352.15ms p(95)=418.08ms
       { expected_response:true }...: avg=190.17ms min=193.8µs med=170.83ms max=1.27s    p(90)=352.15ms p(95)=418.08ms
     http_req_failed................: 0.00%   ✓ 0           ✗ 1190896
     http_req_receiving.............: avg=423.12µs min=8.3µs   med=16.8µs   max=587.24ms p(90)=51.1µs   p(95)=169.9µs 
     http_req_sending...............: avg=197.8µs  min=4.3µs   med=8µs      max=626.3ms  p(90)=18.9µs   p(95)=73.4µs  
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=189.55ms min=170.3µs med=170.16ms max=1.27s    p(90)=351.3ms  p(95)=416.69ms
     http_reqs......................: 1190896 3841.584941/s
     iteration_duration.............: avg=198.55ms min=258.4µs med=178.6ms  max=1.55s    p(90)=367.18ms p(95)=440.74ms
     iterations.....................: 1190896 3841.584941/s
     vus............................: 1       min=0         max=1499 
     vus_max........................: 1500    min=1499      max=1500 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d98e6da7-c467-429f-736f-e928a4bd6700/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/57614366-5616-45e0-34c3-08653a281800/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/94163921-78ad-44ab-b468-021458748e00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 171516     ✗ 0     
     data_received..................: 73 MB   236 kB/s
     data_sent......................: 68 MB   219 kB/s
     http_req_blocked...............: avg=113.34µs min=1.1µs   med=2.5µs  max=737.86ms p(90)=3.9µs   p(95)=18.7µs  
     http_req_connecting............: avg=102.5µs  min=0s      med=0s     max=737.33ms p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=4.2s     min=3.71ms  med=4.04s  max=15.74s   p(90)=7.53s   p(95)=8.22s   
       { expected_response:true }...: avg=4.2s     min=3.71ms  med=4.04s  max=15.74s   p(90)=7.53s   p(95)=8.22s   
     http_req_failed................: 0.00%   ✓ 0          ✗ 57172 
     http_req_receiving.............: avg=793.12µs min=13.89µs med=46.4µs max=502.33ms p(90)=106.5µs p(95)=198.74µs
     http_req_sending...............: avg=131.85µs min=8.9µs   med=15.5µs max=342.51ms p(90)=48.9µs  p(95)=107.4µs 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=4.2s     min=3.66ms  med=4.04s  max=15.74s   p(90)=7.52s   p(95)=8.22s   
     http_reqs......................: 57172   184.423202/s
     iteration_duration.............: avg=4.2s     min=3.87ms  med=4.04s  max=15.74s   p(90)=7.53s   p(95)=8.22s   
     iterations.....................: 57172   184.423202/s
     vus............................: 8       min=0        max=1500
     vus_max........................: 1500    min=777      max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/538601d7-2228-4537-c50d-98ebcc10d600/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/db3c4a17-4b2c-4547-d946-7648fef5d800/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/08e5e586-e3aa-4295-f1d5-78a2519c4a00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 116370     ✗ 0     
     data_received..................: 175 MB  564 kB/s
     data_sent......................: 46 MB   149 kB/s
     http_req_blocked...............: avg=36.32µs min=1.1µs  med=2.6µs  max=23.25ms p(90)=4.89µs p(95)=19.4µs 
     http_req_connecting............: avg=28.55µs min=0s     med=0s     max=23.17ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=6.24s   min=5.4ms  med=6.32s  max=12.84s  p(90)=11.58s p(95)=11.96s 
       { expected_response:true }...: avg=6.24s   min=5.4ms  med=6.32s  max=12.84s  p(90)=11.58s p(95)=11.96s 
     http_req_failed................: 0.00%   ✓ 0          ✗ 38790 
     http_req_receiving.............: avg=72.81µs min=22.6µs med=62.5µs max=22.93ms p(90)=95.8µs p(95)=108.1µs
     http_req_sending...............: avg=30.62µs min=7.2µs  med=16.2µs max=12.28ms p(90)=35.6µs p(95)=79.5µs 
     http_req_tls_handshaking.......: avg=0s      min=0s     med=0s     max=0s      p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=6.24s   min=5.33ms med=6.32s  max=12.84s  p(90)=11.58s p(95)=11.96s 
     http_reqs......................: 38790   125.127387/s
     iteration_duration.............: avg=6.24s   min=5.68ms med=6.32s  max=12.85s  p(90)=11.58s p(95)=11.96s 
     iterations.....................: 38790   125.127387/s
     vus............................: 6       min=0        max=1500
     vus_max........................: 1500    min=1232     max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d0f6f53b-da0d-429b-7848-1c8d7c4ed600/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/fd1c25c6-23e0-4c0a-9d42-7929831e3000/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ba2cf9e0-a487-48e0-36f0-33a99dc2a300/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 141807    ✗ 0     
     data_received..................: 239 MB  770 kB/s
     data_sent......................: 56 MB   181 kB/s
     http_req_blocked...............: avg=97.68µs  min=900ns  med=1.8µs  max=338.18ms p(90)=2.8µs  p(95)=7.2µs  
     http_req_connecting............: avg=92.01µs  min=0s     med=0s     max=338.09ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=5.12s    min=5.72ms med=4.7s   max=31.29s   p(90)=8.61s  p(95)=12.5s  
       { expected_response:true }...: avg=5.12s    min=5.72ms med=4.7s   max=31.29s   p(90)=8.61s  p(95)=12.5s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 47269 
     http_req_receiving.............: avg=257.38µs min=13.7µs med=36.6µs max=245.46ms p(90)=76.5µs p(95)=248.7µs
     http_req_sending...............: avg=151.25µs min=6.1µs  med=11.1µs max=239.73ms p(90)=28.4µs p(95)=91.6µs 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=5.12s    min=5.66ms med=4.7s   max=31.29s   p(90)=8.61s  p(95)=12.5s  
     http_reqs......................: 47269   152.47898/s
     iteration_duration.............: avg=5.12s    min=6ms    med=4.7s   max=31.29s   p(90)=8.61s  p(95)=12.5s  
     iterations.....................: 47269   152.47898/s
     vus............................: 2       min=0       max=1500
     vus_max........................: 1500    min=1300    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2a73029f-f08a-4de2-ca4f-50994e3f2f00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b4f9f191-4f29-420e-9031-83b11ee24800/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a21c2df5-f6a4-47a5-abb6-4fe1c8b84c00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 141666     ✗ 0     
     data_received..................: 239 MB  769 kB/s
     data_sent......................: 56 MB   181 kB/s
     http_req_blocked...............: avg=26.36µs min=1.3µs  med=2.4µs  max=15.94ms p(90)=3.9µs  p(95)=17.7µs 
     http_req_connecting............: avg=20.1µs  min=0s     med=0s     max=15.88ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=5.11s   min=5.15ms med=4.13s  max=24.67s  p(90)=10.55s p(95)=12.79s 
       { expected_response:true }...: avg=5.11s   min=5.15ms med=4.13s  max=24.67s  p(90)=10.55s p(95)=12.79s 
     http_req_failed................: 0.00%   ✓ 0          ✗ 47222 
     http_req_receiving.............: avg=67.4µs  min=21.7µs med=60µs   max=21.01ms p(90)=82.7µs p(95)=93.01µs
     http_req_sending...............: avg=25.89µs min=7.6µs  med=14.6µs max=22.98ms p(90)=31.5µs p(95)=39.6µs 
     http_req_tls_handshaking.......: avg=0s      min=0s     med=0s     max=0s      p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=5.11s   min=5.09ms med=4.13s  max=24.67s  p(90)=10.55s p(95)=12.79s 
     http_reqs......................: 47222   152.327597/s
     iteration_duration.............: avg=5.11s   min=5.42ms med=4.13s  max=24.67s  p(90)=10.55s p(95)=12.79s 
     iterations.....................: 47222   152.327597/s
     vus............................: 5       min=0        max=1498
     vus_max........................: 1500    min=1029     max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0fad6397-4e64-4adf-3883-618e329e7400/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d44ce360-ae7e-4f22-e7dc-db7271343100/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9dc69ca2-b9a3-4e9a-2a46-3939c6254800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 117336     ✗ 0     
     data_received..................: 198 MB  637 kB/s
     data_sent......................: 46 MB   150 kB/s
     http_req_blocked...............: avg=130.88µs min=1.1µs    med=2.5µs  max=180.01ms p(90)=4.2µs  p(95)=22.4µs 
     http_req_connecting............: avg=121.65µs min=0s       med=0s     max=179.8ms  p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=6.18s    min=308.47ms med=5.78s  max=39.64s   p(90)=10.15s p(95)=14.68s 
       { expected_response:true }...: avg=6.18s    min=308.47ms med=5.78s  max=39.64s   p(90)=10.15s p(95)=14.68s 
     http_req_failed................: 0.00%   ✓ 0          ✗ 39112 
     http_req_receiving.............: avg=136.91µs min=21.7µs   med=54µs   max=171.4ms  p(90)=94.8µs p(95)=127.4µs
     http_req_sending...............: avg=75.47µs  min=9µs      med=15.4µs max=93.26ms  p(90)=42.1µs p(95)=70.7µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=6.18s    min=308.4ms  med=5.78s  max=39.64s   p(90)=10.15s p(95)=14.68s 
     http_reqs......................: 39112   126.102066/s
     iteration_duration.............: avg=6.18s    min=308.79ms med=5.78s  max=39.64s   p(90)=10.15s p(95)=14.68s 
     iterations.....................: 39112   126.102066/s
     vus............................: 207     min=0        max=1500
     vus_max........................: 1500    min=1192     max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b12ce019-d1b7-4dd6-39a0-07b2b8213e00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/983e2bc7-833b-4d82-ec3b-7f2563c95200/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/cd7de6aa-ceb5-4fff-9e06-8e5d2347ca00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-deno`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 64170     ✗ 0     
     data_received..................: 109 MB  347 kB/s
     data_sent......................: 25 MB   81 kB/s
     http_req_blocked...............: avg=75.2µs   min=1µs      med=2.4µs  max=24.59ms p(90)=17.21µs p(95)=535.23µs
     http_req_connecting............: avg=61.55µs  min=0s       med=0s     max=24.49ms p(90)=0s      p(95)=443.45µs
     http_req_duration..............: avg=11.52s   min=815.93ms med=12.2s  max=21.41s  p(90)=18.97s  p(95)=19.83s  
       { expected_response:true }...: avg=11.52s   min=815.93ms med=12.2s  max=21.41s  p(90)=18.97s  p(95)=19.83s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 21390 
     http_req_receiving.............: avg=182.49µs min=21.9µs   med=51.5µs max=41.15ms p(90)=148.1µs p(95)=399.99µs
     http_req_sending...............: avg=68.14µs  min=7.7µs    med=14.9µs max=25.3ms  p(90)=72.9µs  p(95)=117.95µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=11.52s   min=815.85ms med=12.2s  max=21.41s  p(90)=18.97s  p(95)=19.83s  
     http_reqs......................: 21390   68.408732/s
     iteration_duration.............: avg=11.52s   min=816.27ms med=12.2s  max=21.41s  p(90)=18.97s  p(95)=19.83s  
     iterations.....................: 21390   68.408732/s
     vus............................: 348     min=0       max=1500
     vus_max........................: 1500    min=821     max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/fcc56c33-e09c-40a5-32a5-39f7b93c4a00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/77cc88ec-2cc0-4046-894b-2c73c7fd5200/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ccb3a511-d072-4a9b-cf65-8f0e6ec80a00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 62553     ✗ 0     
     data_received..................: 106 MB  337 kB/s
     data_sent......................: 25 MB   79 kB/s
     http_req_blocked...............: avg=53.7µs  min=1.1µs    med=2.1µs  max=17.18ms p(90)=7.9µs  p(95)=464.1µs
     http_req_connecting............: avg=44.17µs min=0s       med=0s     max=17.11ms p(90)=0s     p(95)=385.1µs
     http_req_duration..............: avg=11.84s  min=891.11ms med=11.57s max=29.56s  p(90)=21.68s p(95)=22.69s 
       { expected_response:true }...: avg=11.84s  min=891.11ms med=11.57s max=29.56s  p(90)=21.68s p(95)=22.69s 
     http_req_failed................: 0.00%   ✓ 0         ✗ 20851 
     http_req_receiving.............: avg=68.38µs min=19.8µs   med=51.2µs max=61.46ms p(90)=75.8µs p(95)=93.05µs
     http_req_sending...............: avg=31.4µs  min=6.4µs    med=12.6µs max=36.76ms p(90)=35.5µs p(95)=78.9µs 
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s     max=0s      p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=11.84s  min=891.01ms med=11.57s max=29.56s  p(90)=21.67s p(95)=22.69s 
     http_reqs......................: 20851   66.537487/s
     iteration_duration.............: avg=11.84s  min=891.44ms med=11.57s max=29.56s  p(90)=21.68s p(95)=22.69s 
     iterations.....................: 20851   66.537487/s
     vus............................: 304     min=0       max=1500
     vus_max........................: 1500    min=1178    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8339ef0c-3aa2-4e9d-1d54-37f2941a5b00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5b2ab5b0-9c93-4937-ab06-6189ac123700/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0247efd5-370a-4bb4-5c3a-21a2053b5500/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server-node16`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  98% — ✓ 28059 / ✗ 467
     ✗ no graphql errors
      ↳  98% — ✓ 28059 / ✗ 467
     ✓ valid response structure

     checks.........................: 98.90% ✓ 84177     ✗ 934   
     data_received..................: 147 MB 465 kB/s
     data_sent......................: 34 MB  107 kB/s
     http_req_blocked...............: avg=204.69µs min=1.1µs   med=2.5µs  max=80.35ms p(90)=18.5µs   p(95)=505.32µs
     http_req_connecting............: avg=177.31µs min=0s      med=0s     max=75.68ms p(90)=0s       p(95)=414.59µs
     http_req_duration..............: avg=8.72s    min=51.93ms med=4.83s  max=1m0s    p(90)=22.72s   p(95)=41.38s  
       { expected_response:true }...: avg=7.87s    min=51.93ms med=4.77s  max=57.06s  p(90)=19.88s   p(95)=30.81s  
     http_req_failed................: 1.63%  ✓ 467       ✗ 28059 
     http_req_receiving.............: avg=92.36µs  min=0s      med=72.2µs max=42.29ms p(90)=116.89µs p(95)=148.79µs
     http_req_sending...............: avg=86.45µs  min=8.8µs   med=16.2µs max=58.51ms p(90)=55.19µs  p(95)=83.69µs 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=8.72s    min=51.87ms med=4.83s  max=1m0s    p(90)=22.72s   p(95)=41.38s  
     http_reqs......................: 28526  90.403717/s
     iteration_duration.............: avg=8.72s    min=52.86ms med=4.83s  max=1m0s    p(90)=22.72s   p(95)=41.38s  
     iterations.....................: 28526  90.403717/s
     vus............................: 71     min=0       max=1500
     vus_max........................: 1500   min=851     max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/70106634-c478-4069-7ff4-e41e7b298f00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/84e72a12-fb45-46c1-a5ce-792c36cd0400/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8486e0d3-4d78-49af-3562-e355acc01e00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-uws`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  98% — ✓ 23759 / ✗ 287
     ✗ no graphql errors
      ↳  98% — ✓ 23759 / ✗ 287
     ✓ valid response structure

     checks.........................: 99.20% ✓ 71277     ✗ 574   
     data_received..................: 120 MB 386 kB/s
     data_sent......................: 29 MB  91 kB/s
     http_req_blocked...............: avg=118.08µs min=900ns    med=2.2µs  max=67.17ms p(90)=11.3µs  p(95)=442.83µs
     http_req_connecting............: avg=103.58µs min=0s       med=0s     max=67.13ms p(90)=0s      p(95)=364µs   
     http_req_duration..............: avg=10.2s    min=131.51ms med=5.7s   max=1m0s    p(90)=25.44s  p(95)=46.41s  
       { expected_response:true }...: avg=9.6s     min=131.51ms med=5.67s  max=59.86s  p(90)=23.13s  p(95)=43.48s  
     http_req_failed................: 1.19%  ✓ 287       ✗ 23759 
     http_req_receiving.............: avg=76.14µs  min=0s       med=49.8µs max=32.66ms p(90)=81.8µs  p(95)=96.1µs  
     http_req_sending...............: avg=50.25µs  min=6.2µs    med=13µs   max=33.34ms p(90)=53.25µs p(95)=88.17µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=10.2s    min=131.39ms med=5.7s   max=1m0s    p(90)=25.44s  p(95)=46.41s  
     http_reqs......................: 24046  76.965499/s
     iteration_duration.............: avg=10.2s    min=131.94ms med=5.7s   max=1m0s    p(90)=25.44s  p(95)=46.41s  
     iterations.....................: 24046  76.965499/s
     vus............................: 250    min=0       max=1500
     vus_max........................: 1500   min=1400    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/728cb438-0cbe-4b29-ea57-864bad377b00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8e25a0c4-7a59-4bde-1d69-bad436024f00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/64e25ab0-1ce8-4e8c-b5d6-f3c8daf8ab00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  94% — ✓ 37500 / ✗ 2329
     ✗ no graphql errors
      ↳  94% — ✓ 37500 / ✗ 2329
     ✓ valid response structure

     checks.........................: 96.02% ✓ 112500    ✗ 4658  
     data_received..................: 191 MB 573 kB/s
     data_sent......................: 47 MB  142 kB/s
     http_req_blocked...............: avg=95.39µs min=800ns   med=1.9µs  max=29.26ms p(90)=12.5µs p(95)=324.05µs
     http_req_connecting............: avg=85.09µs min=0s      med=0s     max=29.2ms  p(90)=0s     p(95)=259.61µs
     http_req_duration..............: avg=6.28s   min=27.29ms med=2.71s  max=1m0s    p(90)=3.06s  p(95)=59.99s  
       { expected_response:true }...: avg=2.94s   min=27.29ms med=2.69s  max=59.53s  p(90)=2.95s  p(95)=3.04s   
     http_req_failed................: 5.84%  ✓ 2329      ✗ 37500 
     http_req_receiving.............: avg=47.37µs min=0s      med=43.6µs max=21.26ms p(90)=64.3µs p(95)=73µs    
     http_req_sending...............: avg=24.61µs min=6.2µs   med=12.1µs max=25.67ms p(90)=29.5µs p(95)=49.3µs  
     http_req_tls_handshaking.......: avg=0s      min=0s      med=0s     max=0s      p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=6.27s   min=27.2ms  med=2.71s  max=1m0s    p(90)=3.06s  p(95)=59.99s  
     http_reqs......................: 39829  119.44636/s
     iteration_duration.............: avg=6.28s   min=27.55ms med=2.71s  max=1m0s    p(90)=3.06s  p(95)=1m0s    
     iterations.....................: 39829  119.44636/s
     vus............................: 16     min=0       max=1500
     vus_max........................: 1500   min=1482    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b969366b-4c6a-466a-21c1-3ce896322d00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3658b2b1-1b77-4f9f-be05-a94169262400/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/495a353d-7a06-4974-6164-9d2fc6f0b200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  91% — ✓ 26887 / ✗ 2621
     ✗ no graphql errors
      ↳  91% — ✓ 26887 / ✗ 2621
     ✓ valid response structure

     checks.........................: 93.89% ✓ 80661     ✗ 5242  
     data_received..................: 137 MB 411 kB/s
     data_sent......................: 35 MB  105 kB/s
     http_req_blocked...............: avg=158.14µs min=900ns   med=2.29µs  max=44.52ms p(90)=255.65µs p(95)=460.76µs
     http_req_connecting............: avg=143.8µs  min=0s      med=0s      max=44.35ms p(90)=206.02µs p(95)=383.19µs
     http_req_duration..............: avg=8.54s    min=59.47ms med=2.97s   max=1m0s    p(90)=34.23s   p(95)=59.99s  
       { expected_response:true }...: avg=3.53s    min=59.47ms med=2.93s   max=59.84s  p(90)=3.42s    p(95)=3.71s   
     http_req_failed................: 8.88%  ✓ 2621      ✗ 26887 
     http_req_receiving.............: avg=55.11µs  min=0s      med=53.29µs max=8.17ms  p(90)=81.5µs   p(95)=87.8µs  
     http_req_sending...............: avg=28.53µs  min=6.4µs   med=14.9µs  max=15.94ms p(90)=41.42µs  p(95)=60.9µs  
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=8.54s    min=59.36ms med=2.97s   max=1m0s    p(90)=34.23s   p(95)=59.99s  
     http_reqs......................: 29508  88.493545/s
     iteration_duration.............: avg=8.54s    min=59.78ms med=2.97s   max=1m0s    p(90)=34.24s   p(95)=1m0s    
     iterations.....................: 29508  88.493545/s
     vus............................: 21     min=0       max=1500
     vus_max........................: 1500   min=1455    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/fbfe2c7e-2721-460a-3eef-807b53549100/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c757f55b-16cb-49f4-03b3-2d0df5532200/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/950ebd63-b8bc-4d3e-2589-265aa3e0ad00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  89% — ✓ 24152 / ✗ 2707
     ✗ no graphql errors
      ↳  89% — ✓ 24152 / ✗ 2707
     ✓ valid response structure

     checks.........................: 93.04% ✓ 72456     ✗ 5414  
     data_received..................: 126 MB 377 kB/s
     data_sent......................: 32 MB  96 kB/s
     http_req_blocked...............: avg=203.83µs min=1.4µs   med=3.1µs  max=37.04ms p(90)=358.65µs p(95)=689.83µs
     http_req_connecting............: avg=178.14µs min=0s      med=0s     max=36.95ms p(90)=287.66µs p(95)=559.4µs 
     http_req_duration..............: avg=9.38s    min=58.34ms med=3.16s  max=1m0s    p(90)=59.98s   p(95)=1m0s    
       { expected_response:true }...: avg=3.71s    min=58.34ms med=3.13s  max=59.88s  p(90)=3.48s    p(95)=3.67s   
     http_req_failed................: 10.07% ✓ 2707      ✗ 24152 
     http_req_receiving.............: avg=86.79µs  min=0s      med=75.6µs max=17.02ms p(90)=109.5µs  p(95)=128.8µs 
     http_req_sending...............: avg=46.21µs  min=8.4µs   med=18.7µs max=30.96ms p(90)=58µs     p(95)=82µs    
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=9.38s    min=58.15ms med=3.16s  max=1m0s    p(90)=59.98s   p(95)=59.99s  
     http_reqs......................: 26859  80.339635/s
     iteration_duration.............: avg=9.38s    min=58.74ms med=3.16s  max=1m0s    p(90)=1m0s     p(95)=1m0s    
     iterations.....................: 26859  80.339635/s
     vus............................: 1      min=0       max=1500
     vus_max........................: 1500   min=1020    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7f93a935-546f-4646-f7c1-f889b9586700/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6738c91a-671e-40f3-7fad-b7c5492aa300/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2f92f476-f961-4221-1666-b68657ec0400/public" alt="HTTP Overview" />


  </details>