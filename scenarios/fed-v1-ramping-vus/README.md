## Overview for: `fed-v1-ramping-vus`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. We are running a heavy load of concurrent VUs to measure response time and other stats, during stress. It measure things like memory usage, CPU usage, response times. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was trying to reach 1500 concurrent VUs over 300s


### Comparison


| Gateway                             | duration(p95)⬇️ |  RPS  |         Requests         |                       Durations                        |
| :---------------------------------- | :-------------: | :---: | :----------------------: | :----------------------------------------------------: |
| wundergraph                         |     2083ms      |  739  |  229337 total, 0 failed  |   avg: 1023ms, p95: 2084ms, max: 3883ms, med: 960ms    |
| mesh-bun                            |     3010ms      |  584  |  181198 total, 0 failed  |   avg: 1310ms, p95: 3011ms, max: 5988ms, med: 1158ms   |
| mesh-supergraph                     |     15391ms     |  97   |  30405 total, 0 failed   |  avg: 8046ms, p95: 15391ms, max: 21230ms, med: 7794ms  |
| mesh                                |     15650ms     |  97   |  30346 total, 0 failed   |  avg: 8065ms, p95: 15651ms, max: 25155ms, med: 7742ms  |
| stitching-federation-with-yoga-bun  |     15959ms     |  115  |  36079 total, 0 failed   |  avg: 6848ms, p95: 15959ms, max: 37307ms, med: 6668ms  |
| apollo-router                       |     16144ms     |  104  |  33073 total, 0 failed   |  avg: 7587ms, p95: 16144ms, max: 26049ms, med: 7756ms  |
| stitching-federation-with-yoga-deno |     20649ms     |  80   |  25268 total, 0 failed   |  avg: 9736ms, p95: 20650ms, max: 40931ms, med: 9204ms  |
| mercurius                           |     21017ms     |  68   |  21271 total, 0 failed   | avg: 11410ms, p95: 21017ms, max: 22665ms, med: 10565ms |
| apollo-gateway-with-yoga-bun        |     22930ms     |  70   |  22633 total, 7 failed   | avg: 11188ms, p95: 22931ms, max: 60008ms, med: 10161ms |
| stitching-federation-with-yoga-uws  |     33097ms     |  65   |  21004 total, 0 failed   | avg: 11922ms, p95: 33097ms, max: 57059ms, med: 7043ms  |
| apollo-gateway-with-yoga-uws        |     35216ms     |  75   |  23842 total, 0 failed   | avg: 10476ms, p95: 35216ms, max: 52248ms, med: 4164ms  |
| apollo-gateway-with-yoga            |     60000ms     |  60   | 20390 total, 2792 failed | avg: 12489ms, p95: 60000ms, max: 60022ms, med: 4025ms  |
| apollo-server                       |     60000ms     |  58   | 19644 total, 2817 failed | avg: 12853ms, p95: 60000ms, max: 60036ms, med: 4124ms  |
| apollo-server-node16                |     60000ms     |  37   | 12647 total, 957 failed  | avg: 19614ms, p95: 60001ms, max: 60027ms, med: 11824ms |
| stitching-federation-with-yoga      |     60000ms     |  62   | 21043 total, 2918 failed | avg: 12024ms, p95: 60000ms, max: 60058ms, med: 3354ms  |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 688011     ✗ 0     
     data_received..................: 1.1 GB  3.7 MB/s
     data_sent......................: 272 MB  878 kB/s
     http_req_blocked...............: avg=712.59µs min=900ns  med=2µs      max=1.01s    p(90)=3.6µs   p(95)=4.8µs  
     http_req_connecting............: avg=702.59µs min=0s     med=0s       max=1.01s    p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=1.02s    min=7.71ms med=960.28ms max=3.88s    p(90)=1.83s   p(95)=2.08s  
       { expected_response:true }...: avg=1.02s    min=7.71ms med=960.28ms max=3.88s    p(90)=1.83s   p(95)=2.08s  
     http_req_failed................: 0.00%   ✓ 0          ✗ 229337
     http_req_receiving.............: avg=5.45ms   min=14.7µs med=30.3µs   max=837.81ms p(90)=172.8µs p(95)=663.9µs
     http_req_sending...............: avg=1.41ms   min=6.2µs  med=10.8µs   max=756.65ms p(90)=26.1µs  p(95)=102.3µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s       max=0s       p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=1.01s    min=7.64ms med=956.99ms max=3.88s    p(90)=1.81s   p(95)=2.05s  
     http_reqs......................: 229337  739.781369/s
     iteration_duration.............: avg=1.03s    min=8.32ms med=972.47ms max=4.24s    p(90)=1.86s   p(95)=2.1s   
     iterations.....................: 229337  739.781369/s
     vus............................: 10      min=10       max=1497
     vus_max........................: 1500    min=1500     max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2f181552-4c19-404f-c0f0-40b2c26b4b00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/aade19ef-5235-49d0-7182-abcead329600/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  0% — ✓ 0 / ✗ 181198
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 181198

     checks.........................: 33.33% ✓ 181198     ✗ 362396
     data_received..................: 172 MB 556 kB/s
     data_sent......................: 215 MB 694 kB/s
     http_req_blocked...............: avg=209.86µs min=1µs    med=2.29µs max=1.23s    p(90)=3.4µs    p(95)=4.4µs   
     http_req_connecting............: avg=199.03µs min=0s     med=0s     max=1.18s    p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=1.3s     min=1.96ms med=1.15s  max=5.98s    p(90)=2.62s    p(95)=3.01s   
       { expected_response:true }...: avg=1.3s     min=1.96ms med=1.15s  max=5.98s    p(90)=2.62s    p(95)=3.01s   
     http_req_failed................: 0.00%  ✓ 0          ✗ 181198
     http_req_receiving.............: avg=1.04ms   min=12.1µs med=29.4µs max=657.9ms  p(90)=195.41µs p(95)=362.12µs
     http_req_sending...............: avg=277.99µs min=7.3µs  med=12.9µs max=571.66ms p(90)=41.5µs   p(95)=152.11µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=1.3s     min=1.89ms med=1.15s  max=5.98s    p(90)=2.62s    p(95)=3s      
     http_reqs......................: 181198 584.504287/s
     iteration_duration.............: avg=1.31s    min=2.2ms  med=1.16s  max=5.98s    p(90)=2.63s    p(95)=3.01s   
     iterations.....................: 181198 584.504287/s
     vus............................: 3      min=0        max=1500
     vus_max........................: 1500   min=1260     max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3f9e1a84-4d3c-4bbe-15b1-ad5d8f084f00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6e26160c-b6a5-4a57-6e40-5b7c6e86c200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 30231 / ✗ 174
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 30405

     checks.........................: 66.47% ✓ 60636     ✗ 30579 
     data_received..................: 154 MB 494 kB/s
     data_sent......................: 36 MB  116 kB/s
     http_req_blocked...............: avg=36.55µs min=1.1µs    med=2.29µs max=50.16ms p(90)=3.8µs  p(95)=87.38µs
     http_req_connecting............: avg=29.58µs min=0s       med=0s     max=50.11ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=8.04s   min=652.8ms  med=7.79s  max=21.22s  p(90)=14.35s p(95)=15.39s 
       { expected_response:true }...: avg=8.04s   min=652.8ms  med=7.79s  max=21.22s  p(90)=14.35s p(95)=15.39s 
     http_req_failed................: 0.00%  ✓ 0         ✗ 30405 
     http_req_receiving.............: avg=64.28µs min=18.7µs   med=53.2µs max=23.49ms p(90)=79.2µs p(95)=89.61µs
     http_req_sending...............: avg=32.16µs min=7.4µs    med=13.7µs max=62.43ms p(90)=30µs   p(95)=53.58µs
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s     max=0s      p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=8.04s   min=652.74ms med=7.79s  max=21.22s  p(90)=14.35s p(95)=15.39s 
     http_reqs......................: 30405  97.810611/s
     iteration_duration.............: avg=8.04s   min=653.18ms med=7.79s  max=21.23s  p(90)=14.35s p(95)=15.39s 
     iterations.....................: 30405  97.810611/s
     vus............................: 487    min=0       max=1500
     vus_max........................: 1500   min=1500    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1ef23e92-0f8f-4600-e5b1-ac0b6d38df00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5eed1a7d-2bbc-47aa-c09e-e198df167400/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 30131 / ✗ 215
     ✗ valid response structure
      ↳  99% — ✓ 30131 / ✗ 215

     checks.........................: 99.52% ✓ 90608     ✗ 430   
     data_received..................: 153 MB 491 kB/s
     data_sent......................: 36 MB  116 kB/s
     http_req_blocked...............: avg=67.61µs min=1.2µs    med=2.29µs max=308.95ms p(90)=3.9µs  p(95)=95.5µs 
     http_req_connecting............: avg=61.1µs  min=0s       med=0s     max=308.76ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=8.06s   min=683.42ms med=7.74s  max=25.15s   p(90)=14.44s p(95)=15.65s 
       { expected_response:true }...: avg=8.06s   min=683.42ms med=7.74s  max=25.15s   p(90)=14.44s p(95)=15.65s 
     http_req_failed................: 0.00%  ✓ 0         ✗ 30346 
     http_req_receiving.............: avg=72.66µs min=20.8µs   med=46.2µs max=149.7ms  p(90)=72µs   p(95)=82.6µs 
     http_req_sending...............: avg=85.02µs min=7.4µs    med=12.8µs max=132.95ms p(90)=28.1µs p(95)=58.95µs
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s     max=0s       p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=8.06s   min=683.3ms  med=7.74s  max=25.15s   p(90)=14.44s p(95)=15.65s 
     http_reqs......................: 30346  97.319142/s
     iteration_duration.............: avg=8.06s   min=684.28ms med=7.74s  max=25.15s   p(90)=14.44s p(95)=15.65s 
     iterations.....................: 30346  97.319142/s
     vus............................: 282    min=0       max=1499
     vus_max........................: 1500   min=1358    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f12c5254-835e-409a-ace7-59f9890fad00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/284bf2f6-6f97-4067-f79d-bea40e0c9900/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 36077 / ✗ 2
     ✗ valid response structure
      ↳  99% — ✓ 36077 / ✗ 2

     checks.........................: 99.99% ✓ 108233     ✗ 4     
     data_received..................: 180 MB 574 kB/s
     data_sent......................: 43 MB  137 kB/s
     http_req_blocked...............: avg=301.82µs min=1.3µs    med=2.6µs  max=771.04ms p(90)=5µs    p(95)=25.32µs 
     http_req_connecting............: avg=266.35µs min=0s       med=0s     max=585.88ms p(90)=0s     p(95)=0s      
     http_req_duration..............: avg=6.84s    min=434.58ms med=6.66s  max=37.3s    p(90)=9.41s  p(95)=15.95s  
       { expected_response:true }...: avg=6.84s    min=434.58ms med=6.66s  max=37.3s    p(90)=9.41s  p(95)=15.95s  
     http_req_failed................: 0.00%  ✓ 0          ✗ 36079 
     http_req_receiving.............: avg=3.32ms   min=20µs     med=47.2µs max=473.2ms  p(90)=82.8µs p(95)=269.32µs
     http_req_sending...............: avg=546.37µs min=7.7µs    med=14.2µs max=608.99ms p(90)=59.3µs p(95)=116.1µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=6.84s    min=434.12ms med=6.66s  max=37.3s    p(90)=9.38s  p(95)=15.95s  
     http_reqs......................: 36079  115.087729/s
     iteration_duration.............: avg=6.85s    min=437.01ms med=6.66s  max=37.3s    p(90)=9.42s  p(95)=15.96s  
     iterations.....................: 36079  115.087729/s
     vus............................: 400    min=0        max=1500
     vus_max........................: 1500   min=1291     max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/383eb2c7-2752-4782-3c31-314322243b00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/36befed1-da35-4fd4-54f2-8b0b6ec0dd00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 32971 / ✗ 102
     ✗ valid response structure
      ↳  99% — ✓ 32971 / ✗ 102

     checks.........................: 99.79% ✓ 99015      ✗ 204   
     data_received..................: 165 MB 518 kB/s
     data_sent......................: 39 MB  124 kB/s
     http_req_blocked...............: avg=184.98µs min=1.1µs    med=2.5µs  max=453.3ms  p(90)=4.2µs  p(95)=24.18µs
     http_req_connecting............: avg=156.86µs min=0s       med=0s     max=423.29ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=7.58s    min=129.96ms med=7.75s  max=26.04s   p(90)=14.55s p(95)=16.14s 
       { expected_response:true }...: avg=7.58s    min=129.96ms med=7.75s  max=26.04s   p(90)=14.55s p(95)=16.14s 
     http_req_failed................: 0.00%  ✓ 0          ✗ 33073 
     http_req_receiving.............: avg=239.12µs min=19.8µs   med=48.5µs max=355.99ms p(90)=80.2µs p(95)=92µs   
     http_req_sending...............: avg=204.88µs min=6.5µs    med=13.8µs max=561.06ms p(90)=32.4µs p(95)=64.2µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=7.58s    min=129.87ms med=7.75s  max=26.04s   p(90)=14.54s p(95)=16.14s 
     http_reqs......................: 33073  104.006022/s
     iteration_duration.............: avg=7.58s    min=130.77ms med=7.75s  max=26.04s   p(90)=14.55s p(95)=16.15s 
     iterations.....................: 33073  104.006022/s
     vus............................: 220    min=50       max=1500
     vus_max........................: 1500   min=1500     max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5a25c0a1-2437-4921-9559-c3ba74119900/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a828e33f-6ec3-42ad-81a1-1286f08f9400/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-deno`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  96% — ✓ 24508 / ✗ 760
     ✗ valid response structure
      ↳  96% — ✓ 24508 / ✗ 760

     checks.........................: 97.99% ✓ 74284     ✗ 1520  
     data_received..................: 136 MB 435 kB/s
     data_sent......................: 30 MB  96 kB/s
     http_req_blocked...............: avg=53.77µs  min=900ns    med=2.7µs  max=25.38ms p(90)=5.5µs    p(95)=239.42µs
     http_req_connecting............: avg=43.62µs  min=0s       med=0s     max=25.28ms p(90)=0s       p(95)=159.09µs
     http_req_duration..............: avg=9.73s    min=753.22ms med=9.2s   max=40.93s  p(90)=18.18s   p(95)=20.64s  
       { expected_response:true }...: avg=9.73s    min=753.22ms med=9.2s   max=40.93s  p(90)=18.18s   p(95)=20.64s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 25268 
     http_req_receiving.............: avg=144.53µs min=18.39µs  med=39.6µs max=50.83ms p(90)=100.03µs p(95)=144µs   
     http_req_sending...............: avg=83.06µs  min=6.5µs    med=14µs   max=52.57ms p(90)=63.23µs  p(95)=100.1µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=9.73s    min=753.12ms med=9.2s   max=40.93s  p(90)=18.18s   p(95)=20.64s  
     http_reqs......................: 25268  80.890931/s
     iteration_duration.............: avg=9.73s    min=753.84ms med=9.2s   max=40.93s  p(90)=18.18s   p(95)=20.65s  
     iterations.....................: 25268  80.890931/s
     vus............................: 213    min=0       max=1499
     vus_max........................: 1500   min=1315    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/63070b95-42f2-4afe-d427-55ac0237b200/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c9f59a5b-f9ff-4856-0116-dc099360c800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 63813     ✗ 0     
     data_received..................: 107 MB  345 kB/s
     data_sent......................: 25 MB   81 kB/s
     http_req_blocked...............: avg=53.52µs min=1.3µs  med=3.4µs   max=23.71ms p(90)=10.9µs  p(95)=438.05µs
     http_req_connecting............: avg=43.49µs min=0s     med=0s      max=23.61ms p(90)=0s      p(95)=367.8µs 
     http_req_duration..............: avg=11.4s   min=1.26s  med=10.56s  max=22.66s  p(90)=20.44s  p(95)=21.01s  
       { expected_response:true }...: avg=11.4s   min=1.26s  med=10.56s  max=22.66s  p(90)=20.44s  p(95)=21.01s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 21271 
     http_req_receiving.............: avg=83.03µs min=23.7µs med=80.3µs  max=7.52ms  p(90)=100.8µs p(95)=110.75µs
     http_req_sending...............: avg=43.9µs  min=7µs    med=19.59µs max=16.99ms p(90)=42.4µs  p(95)=73.3µs  
     http_req_tls_handshaking.......: avg=0s      min=0s     med=0s      max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=11.4s   min=1.26s  med=10.56s  max=22.66s  p(90)=20.44s  p(95)=21.01s  
     http_reqs......................: 21271   68.549906/s
     iteration_duration.............: avg=11.41s  min=1.27s  med=10.56s  max=22.66s  p(90)=20.44s  p(95)=21.01s  
     iterations.....................: 21271   68.549906/s
     vus............................: 146     min=0       max=1498
     vus_max........................: 1500    min=1155    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1186afab-aaa8-4250-bd3e-f31edd3c8700/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/85b10333-ef98-4ab8-4969-14d4086d6700/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga-bun`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  99% — ✓ 22626 / ✗ 7
     ✗ no graphql errors
      ↳  99% — ✓ 22626 / ✗ 7
     ✓ valid response structure

     checks.........................: 99.97% ✓ 67878    ✗ 14    
     data_received..................: 113 MB 353 kB/s
     data_sent......................: 27 MB  84 kB/s
     http_req_blocked...............: avg=326.72µs min=1.4µs    med=2.8µs  max=510.23ms p(90)=9.2µs   p(95)=179.5µs 
     http_req_connecting............: avg=296.15µs min=0s       med=0s     max=510.16ms p(90)=0s      p(95)=113.5µs 
     http_req_duration..............: avg=11.18s   min=409.15ms med=10.16s max=1m0s     p(90)=20.48s  p(95)=22.93s  
       { expected_response:true }...: avg=11.17s   min=409.15ms med=10.16s max=59.96s   p(90)=20.33s  p(95)=22.91s  
     http_req_failed................: 0.03%  ✓ 7        ✗ 22626 
     http_req_receiving.............: avg=281.73µs min=0s       med=47.9µs max=314.44ms p(90)=100.2µs p(95)=270.75µs
     http_req_sending...............: avg=530.85µs min=8µs      med=15µs   max=290.74ms p(90)=76.7µs  p(95)=141.64µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=11.18s   min=409.02ms med=10.16s max=1m0s     p(90)=20.48s  p(95)=22.93s  
     http_reqs......................: 22633  70.84269/s
     iteration_duration.............: avg=11.18s   min=410.16ms med=10.16s max=1m0s     p(90)=20.49s  p(95)=22.93s  
     iterations.....................: 22633  70.84269/s
     vus............................: 276    min=0      max=1498
     vus_max........................: 1500   min=1295   max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1b4ba517-baee-49db-e24c-1a306db50000/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/71ba71ed-d6d0-4202-f565-0a4f484f1700/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-uws`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  66% — ✓ 13867 / ✗ 7137
     ✗ valid response structure
      ↳  66% — ✓ 13867 / ✗ 7137

     checks.........................: 77.34% ✓ 48738     ✗ 14274 
     data_received..................: 190 MB 595 kB/s
     data_sent......................: 25 MB  78 kB/s
     http_req_blocked...............: avg=66.15µs min=1.3µs    med=2.9µs  max=79.91ms  p(90)=13.89µs  p(95)=384.73µs
     http_req_connecting............: avg=54.42µs min=0s       med=0s     max=79.73ms  p(90)=0s       p(95)=198.92µs
     http_req_duration..............: avg=11.92s  min=171.47ms med=7.04s  max=57.05s   p(90)=27.61s   p(95)=33.09s  
       { expected_response:true }...: avg=11.92s  min=171.47ms med=7.04s  max=57.05s   p(90)=27.61s   p(95)=33.09s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 21004 
     http_req_receiving.............: avg=99.06µs min=16.4µs   med=61.8µs max=57.99ms  p(90)=123.87µs p(95)=163.38µs
     http_req_sending...............: avg=68.78µs min=8.7µs    med=16.6µs max=110.78ms p(90)=56.2µs   p(95)=89.58µs 
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s     max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=11.92s  min=171.37ms med=7.04s  max=57.05s   p(90)=27.61s   p(95)=33.09s  
     http_reqs......................: 21004  65.942273/s
     iteration_duration.............: avg=11.92s  min=172.39ms med=7.04s  max=57.06s   p(90)=27.61s   p(95)=33.09s  
     iterations.....................: 21004  65.942273/s
     vus............................: 231    min=0       max=1499
     vus_max........................: 1500   min=1247    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2ae2db57-3649-4afe-ea4e-c8ea82195800/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/95e77555-314f-4efa-5e71-0722c3009300/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga-uws`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  72% — ✓ 17324 / ✗ 6518
     ✗ valid response structure
      ↳  72% — ✓ 17324 / ✗ 6518

     checks.........................: 81.77% ✓ 58490     ✗ 13036 
     data_received..................: 108 MB 343 kB/s
     data_sent......................: 28 MB  90 kB/s
     http_req_blocked...............: avg=39.62µs min=800ns   med=2.2µs  max=20.18ms p(90)=4.3µs  p(95)=206.58µs
     http_req_connecting............: avg=32.27µs min=0s      med=0s     max=20.13ms p(90)=0s     p(95)=132.5µs 
     http_req_duration..............: avg=10.47s  min=59.08ms med=4.16s  max=52.24s  p(90)=28.02s p(95)=35.21s  
       { expected_response:true }...: avg=10.47s  min=59.08ms med=4.16s  max=52.24s  p(90)=28.02s p(95)=35.21s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 23842 
     http_req_receiving.............: avg=53.37µs min=13.2µs  med=40µs   max=29.65ms p(90)=76µs   p(95)=84.7µs  
     http_req_sending...............: avg=39.04µs min=6.3µs   med=12.6µs max=28.24ms p(90)=32.9µs p(95)=65.6µs  
     http_req_tls_handshaking.......: avg=0s      min=0s      med=0s     max=0s      p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=10.47s  min=58.98ms med=4.16s  max=52.24s  p(90)=28.02s p(95)=35.21s  
     http_reqs......................: 23842  75.570538/s
     iteration_duration.............: avg=10.47s  min=59.7ms  med=4.16s  max=52.24s  p(90)=28.02s p(95)=35.21s  
     iterations.....................: 23842  75.570538/s
     vus............................: 128    min=50      max=1500
     vus_max........................: 1500   min=1500    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/02e78c80-c9a1-4df2-6bda-892f60e16d00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/dcc552e2-f6a0-4200-e6ab-0a81fcd88900/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  86% — ✓ 17598 / ✗ 2792
     ✗ no graphql errors
      ↳  85% — ✓ 17383 / ✗ 3007
     ✗ valid response structure
      ↳  98% — ✓ 17383 / ✗ 215

     checks.........................: 89.69% ✓ 52364     ✗ 6014  
     data_received..................: 88 MB  264 kB/s
     data_sent......................: 24 MB  73 kB/s
     http_req_blocked...............: avg=267.74µs min=1.6µs    med=3.4µs  max=35.65ms p(90)=384.04µs p(95)=809.87µs
     http_req_connecting............: avg=244.82µs min=0s       med=0s     max=35.59ms p(90)=306.3µs  p(95)=660.18µs
     http_req_duration..............: avg=12.48s   min=105.94ms med=4.02s  max=1m0s    p(90)=59.99s   p(95)=1m0s    
       { expected_response:true }...: avg=4.95s    min=105.94ms med=3.94s  max=59.89s  p(90)=4.59s    p(95)=5.79s   
     http_req_failed................: 13.69% ✓ 2792      ✗ 17598 
     http_req_receiving.............: avg=66.97µs  min=0s       med=66.5µs max=9.41ms  p(90)=99.11µs  p(95)=110.1µs 
     http_req_sending...............: avg=49.26µs  min=8.1µs    med=19.7µs max=17.17ms p(90)=60.5µs   p(95)=82.4µs  
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=12.48s   min=105.82ms med=4.02s  max=1m0s    p(90)=59.99s   p(95)=1m0s    
     http_reqs......................: 20390  60.977537/s
     iteration_duration.............: avg=12.48s   min=106.78ms med=4.02s  max=1m0s    p(90)=1m0s     p(95)=1m0s    
     iterations.....................: 20390  60.977537/s
     vus............................: 5      min=0       max=1500
     vus_max........................: 1500   min=1338    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3a5422f2-22af-4c4c-da98-fa8e4808b900/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b969b21d-b0b7-4d9d-8bdd-992ec3956000/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  85% — ✓ 16827 / ✗ 2817
     ✗ no graphql errors
      ↳  84% — ✓ 16690 / ✗ 2954
     ✗ valid response structure
      ↳  99% — ✓ 16690 / ✗ 137

     checks.........................: 89.47% ✓ 50207     ✗ 5908  
     data_received..................: 87 MB  259 kB/s
     data_sent......................: 24 MB  70 kB/s
     http_req_blocked...............: avg=256.91µs min=1.5µs    med=3.7µs  max=29.04ms p(90)=414.8µs  p(95)=856.1µs 
     http_req_connecting............: avg=231.35µs min=0s       med=0s     max=28.97ms p(90)=330.81µs p(95)=692.49µs
     http_req_duration..............: avg=12.85s   min=123.37ms med=4.12s  max=1m0s    p(90)=59.99s   p(95)=1m0s    
       { expected_response:true }...: avg=4.96s    min=123.37ms med=4.03s  max=59.84s  p(90)=4.7s     p(95)=5.5s    
     http_req_failed................: 14.34% ✓ 2817      ✗ 16827 
     http_req_receiving.............: avg=78.21µs  min=0s       med=79.1µs max=12.26ms p(90)=108.9µs  p(95)=119.9µs 
     http_req_sending...............: avg=48.16µs  min=8.4µs    med=22.3µs max=22.7ms  p(90)=62.6µs   p(95)=82.9µs  
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=12.85s   min=123.24ms med=4.12s  max=1m0s    p(90)=59.99s   p(95)=1m0s    
     http_reqs......................: 19644  58.742285/s
     iteration_duration.............: avg=12.85s   min=124.09ms med=4.12s  max=1m0s    p(90)=1m0s     p(95)=1m0s    
     iterations.....................: 19644  58.742285/s
     vus............................: 17     min=0       max=1500
     vus_max........................: 1500   min=1395    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8b112577-844d-4bf2-1c91-c60e82372800/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/bfeec72c-aad2-4039-32c1-b022b5ff4e00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server-node16`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  92% — ✓ 11690 / ✗ 957
     ✗ no graphql errors
      ↳  39% — ✓ 5043 / ✗ 7604
     ✗ valid response structure
      ↳  43% — ✓ 5043 / ✗ 6647

     checks.........................: 58.87% ✓ 21776    ✗ 15208 
     data_received..................: 43 MB  126 kB/s
     data_sent......................: 15 MB  46 kB/s
     http_req_blocked...............: avg=222.3µs  min=1.7µs    med=3.1µs  max=171.8ms  p(90)=396.54µs p(95)=660.68µs
     http_req_connecting............: avg=167.54µs min=0s       med=0s     max=171.6ms  p(90)=297µs    p(95)=562.58µs
     http_req_duration..............: avg=19.61s   min=304.57ms med=11.82s max=1m0s     p(90)=51.5s    p(95)=1m0s    
       { expected_response:true }...: avg=16.63s   min=304.57ms med=10.31s max=59.25s   p(90)=43.11s   p(95)=49.62s  
     http_req_failed................: 7.56%  ✓ 957      ✗ 11690 
     http_req_receiving.............: avg=108.26µs min=0s       med=79.9µs max=108.83ms p(90)=133.8µs  p(95)=163.57µs
     http_req_sending...............: avg=102.6µs  min=10.9µs   med=21.9µs max=107.71ms p(90)=71.2µs   p(95)=104.27µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=19.61s   min=304.48ms med=11.82s max=1m0s     p(90)=51.5s    p(95)=1m0s    
     http_reqs......................: 12647  37.26257/s
     iteration_duration.............: avg=19.61s   min=305.39ms med=11.83s max=1m0s     p(90)=51.5s    p(95)=1m0s    
     iterations.....................: 12647  37.26257/s
     vus............................: 4      min=0      max=1500
     vus_max........................: 1500   min=1214   max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/89b1adc6-12ba-4847-f30d-71dee1b3d700/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/bde8db52-3886-40a0-8fa7-8b2837a96900/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  86% — ✓ 18125 / ✗ 2918
     ✗ no graphql errors
      ↳  85% — ✓ 18073 / ✗ 2970
     ✗ valid response structure
      ↳  99% — ✓ 18073 / ✗ 52

     checks.........................: 90.13% ✓ 54271     ✗ 5940  
     data_received..................: 92 MB  275 kB/s
     data_sent......................: 25 MB  75 kB/s
     http_req_blocked...............: avg=333.12µs min=1.4µs    med=3µs    max=44.55ms p(90)=467.78µs p(95)=1.07ms  
     http_req_connecting............: avg=305.35µs min=0s       med=0s     max=44.46ms p(90)=376.48µs p(95)=890.53µs
     http_req_duration..............: avg=12.02s   min=122.06ms med=3.35s  max=1m0s    p(90)=59.99s   p(95)=1m0s    
       { expected_response:true }...: avg=4.3s     min=122.06ms med=3.3s   max=59.22s  p(90)=3.75s    p(95)=5.11s   
     http_req_failed................: 13.86% ✓ 2918      ✗ 18125 
     http_req_receiving.............: avg=78.36µs  min=0s       med=68.9µs max=16.55ms p(90)=116.6µs  p(95)=144µs   
     http_req_sending...............: avg=64.87µs  min=9.1µs    med=19.9µs max=27.49ms p(90)=68.7µs   p(95)=98.7µs  
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=12.02s   min=121.86ms med=3.35s  max=1m0s    p(90)=59.99s   p(95)=1m0s    
     http_reqs......................: 21043  62.921579/s
     iteration_duration.............: avg=12.02s   min=122.94ms med=3.35s  max=1m0s    p(90)=1m0s     p(95)=1m0s    
     iterations.....................: 21043  62.921579/s
     vus............................: 24     min=0       max=1500
     vus_max........................: 1500   min=1143    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/207355fe-bb9e-4da3-c0e5-317d07b97b00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6c0d689a-0d74-49fb-54d9-916ebab49b00/public" alt="HTTP Overview" />


  </details>