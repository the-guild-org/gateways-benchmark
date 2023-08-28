## Overview for: `fed-v1-ramping-vus`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. We are running a heavy load of concurrent VUs to measure response time and other stats, during stress. It measure things like memory usage, CPU usage, response times. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was trying to reach 1500 concurrent VUs over 300s


### Comparison


| Gateway                             | duration(p95)⬇️ |  RPS  |         Requests         |                       Durations                        |
| :---------------------------------- | :-------------: | :---: | :----------------------: | :----------------------------------------------------: |
| mesh-bun                            |     2658ms      |  667  |  207000 total, 0 failed  |   avg: 1145ms, p95: 2659ms, max: 5049ms, med: 1033ms   |
| wundergraph                         |     2707ms      |  578  |  179316 total, 0 failed  |   avg: 1305ms, p95: 2708ms, max: 4705ms, med: 1200ms   |
| stitching-federation-with-yoga-bun  |     14451ms     |  127  |  39505 total, 0 failed   |  avg: 6138ms, p95: 14451ms, max: 39769ms, med: 5563ms  |
| mesh-supergraph                     |     17303ms     |  84   |  26459 total, 0 failed   |  avg: 9325ms, p95: 17304ms, max: 23923ms, med: 9012ms  |
| mercurius                           |     19751ms     |  69   |  21524 total, 0 failed   | avg: 11268ms, p95: 19751ms, max: 21004ms, med: 10887ms |
| mesh                                |     20041ms     |  80   |  25352 total, 0 failed   |  avg: 9758ms, p95: 20041ms, max: 30076ms, med: 9119ms  |
| apollo-router                       |     21289ms     |  72   |  23269 total, 1 failed   | avg: 10959ms, p95: 21290ms, max: 31065ms, med: 10118ms |
| stitching-federation-with-yoga-deno |     22153ms     |  73   |  22991 total, 0 failed   | avg: 10714ms, p95: 22153ms, max: 37459ms, med: 10229ms |
| stitching-federation-with-yoga-uws  |     24886ms     |  91   |  28468 total, 0 failed   |  avg: 8612ms, p95: 24887ms, max: 42746ms, med: 4899ms  |
| apollo-gateway-with-yoga-bun        |     28335ms     |  64   |  20306 total, 0 failed   | avg: 12114ms, p95: 28335ms, max: 56049ms, med: 12408ms |
| apollo-gateway-with-yoga-uws        |     34626ms     |  69   |  22113 total, 0 failed   | avg: 11344ms, p95: 34627ms, max: 56799ms, med: 5036ms  |
| apollo-server-node16                |     57708ms     |  38   | 12953 total, 512 failed  | avg: 19012ms, p95: 57709ms, max: 60019ms, med: 12344ms |
| apollo-gateway-with-yoga            |     60000ms     |  54   | 18364 total, 2859 failed | avg: 13712ms, p95: 60000ms, max: 60044ms, med: 4248ms  |
| apollo-server                       |     60000ms     |  69   | 23335 total, 2687 failed | avg: 10870ms, p95: 60000ms, max: 60025ms, med: 3754ms  |
| stitching-federation-with-yoga      |     60000ms     |  80   | 26842 total, 2726 failed |  avg: 9419ms, p95: 60000ms, max: 60029ms, med: 3043ms  |



<details>
  <summary>Summary for: `mesh-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  0% — ✓ 0 / ✗ 207000
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 207000

     checks.........................: 33.33% ✓ 207000     ✗ 414000
     data_received..................: 197 MB 635 kB/s
     data_sent......................: 246 MB 793 kB/s
     http_req_blocked...............: avg=166.32µs min=900ns  med=2.1µs  max=773.68ms p(90)=3.4µs    p(95)=4.3µs
     http_req_connecting............: avg=156.99µs min=0s     med=0s     max=628.33ms p(90)=0s       p(95)=0s   
     http_req_duration..............: avg=1.14s    min=1.59ms med=1.03s  max=5.04s    p(90)=2.33s    p(95)=2.65s
       { expected_response:true }...: avg=1.14s    min=1.59ms med=1.03s  max=5.04s    p(90)=2.33s    p(95)=2.65s
     http_req_failed................: 0.00%  ✓ 0          ✗ 207000
     http_req_receiving.............: avg=685.14µs min=10.9µs med=27.5µs max=427.89ms p(90)=181.91µs p(95)=335µs
     http_req_sending...............: avg=284.26µs min=6.3µs  med=11.8µs max=545.69ms p(90)=43.1µs   p(95)=137µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s       p(95)=0s   
     http_req_waiting...............: avg=1.14s    min=1.54ms med=1.03s  max=5.04s    p(90)=2.32s    p(95)=2.65s
     http_reqs......................: 207000 667.737827/s
     iteration_duration.............: avg=1.14s    min=1.77ms med=1.03s  max=5.04s    p(90)=2.33s    p(95)=2.66s
     iterations.....................: 207000 667.737827/s
     vus............................: 1      min=0        max=1499
     vus_max........................: 1500   min=1464     max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/093f20f8-cdef-4994-d4c2-6357d10a2600/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c1df5445-fcb2-49ea-703f-cb7e82664700/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 537948     ✗ 0     
     data_received..................: 893 MB  2.9 MB/s
     data_sent......................: 213 MB  687 kB/s
     http_req_blocked...............: avg=1.42ms min=1.2µs   med=2.8µs  max=1.41s    p(90)=4.6µs    p(95)=6.1µs   
     http_req_connecting............: avg=1.4ms  min=0s      med=0s     max=1.41s    p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=1.3s   min=9.42ms  med=1.19s  max=4.7s     p(90)=2.37s    p(95)=2.7s    
       { expected_response:true }...: avg=1.3s   min=9.42ms  med=1.19s  max=4.7s     p(90)=2.37s    p(95)=2.7s    
     http_req_failed................: 0.00%   ✓ 0          ✗ 179316
     http_req_receiving.............: avg=4.49ms min=14.3µs  med=42.4µs max=1.19s    p(90)=233.91µs p(95)=878.25µs
     http_req_sending...............: avg=2.45ms min=7.8µs   med=14.6µs max=881.43ms p(90)=39.1µs   p(95)=145.4µs 
     http_req_tls_handshaking.......: avg=0s     min=0s      med=0s     max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=1.29s  min=9.3ms   med=1.19s  max=4.7s     p(90)=2.36s    p(95)=2.68s   
     http_reqs......................: 179316  578.411601/s
     iteration_duration.............: avg=1.32s  min=10.36ms med=1.21s  max=4.82s    p(90)=2.41s    p(95)=2.74s   
     iterations.....................: 179316  578.411601/s
     vus............................: 8       min=0        max=1499
     vus_max........................: 1500    min=910      max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/44b68666-da18-46a5-21ed-b587e4695a00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7680837c-73d6-4955-68a2-715b5f2f9a00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 39503 / ✗ 2
     ✗ valid response structure
      ↳  99% — ✓ 39503 / ✗ 2

     checks.........................: 99.99% ✓ 118511     ✗ 4     
     data_received..................: 197 MB 634 kB/s
     data_sent......................: 47 MB  151 kB/s
     http_req_blocked...............: avg=272.18µs min=1.1µs    med=2.4µs max=412.31ms p(90)=4.8µs  p(95)=16.8µs 
     http_req_connecting............: avg=251.25µs min=0s       med=0s    max=412.24ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=6.13s    min=453.92ms med=5.56s max=39.76s   p(90)=10.14s p(95)=14.45s 
       { expected_response:true }...: avg=6.13s    min=453.92ms med=5.56s max=39.76s   p(90)=10.14s p(95)=14.45s 
     http_req_failed................: 0.00%  ✓ 0          ✗ 39505 
     http_req_receiving.............: avg=840.78µs min=19.7µs   med=42µs  max=325.83ms p(90)=72.8µs p(95)=242.6µs
     http_req_sending...............: avg=464.9µs  min=7.3µs    med=13µs  max=237.65ms p(90)=60.9µs p(95)=114.8µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s    max=0s       p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=6.13s    min=453.51ms med=5.56s max=39.76s   p(90)=10.14s p(95)=14.44s 
     http_reqs......................: 39505  127.270918/s
     iteration_duration.............: avg=6.13s    min=463.81ms med=5.56s max=39.76s   p(90)=10.14s p(95)=14.45s 
     iterations.....................: 39505  127.270918/s
     vus............................: 135    min=50       max=1500
     vus_max........................: 1500   min=1500     max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/59b986db-560c-48eb-eaaa-9df996061600/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/06064590-d3ee-40b0-0e6d-2a0e113cd300/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  98% — ✓ 26130 / ✗ 329
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 26459

     checks.........................: 66.25% ✓ 52589     ✗ 26788 
     data_received..................: 135 MB 432 kB/s
     data_sent......................: 31 MB  101 kB/s
     http_req_blocked...............: avg=57.45µs min=1.3µs    med=2.6µs  max=27.84ms p(90)=4.59µs p(95)=216.02µs
     http_req_connecting............: avg=48.6µs  min=0s       med=0s     max=26.54ms p(90)=0s     p(95)=145.21µs
     http_req_duration..............: avg=9.32s   min=939.34ms med=9.01s  max=23.92s  p(90)=16.44s p(95)=17.3s   
       { expected_response:true }...: avg=9.32s   min=939.34ms med=9.01s  max=23.92s  p(90)=16.44s p(95)=17.3s   
     http_req_failed................: 0.00%  ✓ 0         ✗ 26459 
     http_req_receiving.............: avg=70.16µs min=22.4µs   med=61.5µs max=15.13ms p(90)=86.6µs p(95)=97.9µs  
     http_req_sending...............: avg=32.78µs min=8µs      med=14.8µs max=29.8ms  p(90)=33.2µs p(95)=63.91µs 
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s     max=0s      p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=9.32s   min=939.21ms med=9.01s  max=23.92s  p(90)=16.44s p(95)=17.3s   
     http_reqs......................: 26459  84.640708/s
     iteration_duration.............: avg=9.32s   min=939.9ms  med=9.01s  max=23.92s  p(90)=16.44s p(95)=17.3s   
     iterations.....................: 26459  84.640708/s
     vus............................: 458    min=0       max=1500
     vus_max........................: 1500   min=1048    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/23671cdd-ce93-4a84-62b1-b5084c8cb700/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/83ab22a7-6cea-42d2-25ce-d7b3cacc2900/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 64572     ✗ 0     
     data_received..................: 108 MB  349 kB/s
     data_sent......................: 26 MB   82 kB/s
     http_req_blocked...............: avg=53.9µs  min=1.4µs  med=4µs    max=33.34ms p(90)=12.9µs  p(95)=446.73µs
     http_req_connecting............: avg=42.68µs min=0s     med=0s     max=33.25ms p(90)=0s      p(95)=359.56µs
     http_req_duration..............: avg=11.26s  min=1.13s  med=10.88s max=21s     p(90)=19.25s  p(95)=19.75s  
       { expected_response:true }...: avg=11.26s  min=1.13s  med=10.88s max=21s     p(90)=19.25s  p(95)=19.75s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 21524 
     http_req_receiving.............: avg=95.28µs min=22.5µs med=86.7µs max=19.27ms p(90)=115.8µs p(95)=127.2µs 
     http_req_sending...............: avg=39.86µs min=7.8µs  med=21.9µs max=15.65ms p(90)=45.47µs p(95)=82.3µs  
     http_req_tls_handshaking.......: avg=0s      min=0s     med=0s     max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=11.26s  min=1.13s  med=10.88s max=21s     p(90)=19.25s  p(95)=19.75s  
     http_reqs......................: 21524   69.373848/s
     iteration_duration.............: avg=11.26s  min=1.13s  med=10.88s max=21s     p(90)=19.25s  p(95)=19.75s  
     iterations.....................: 21524   69.373848/s
     vus............................: 74      min=0       max=1499
     vus_max........................: 1500    min=1434    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8c96e0a6-0759-42fd-1b5a-2ad597c00200/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f533853b-9c72-4703-2824-6be9dc51c200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  98% — ✓ 25007 / ✗ 345
     ✗ valid response structure
      ↳  98% — ✓ 25007 / ✗ 345

     checks.........................: 99.09% ✓ 75366     ✗ 690   
     data_received..................: 131 MB 417 kB/s
     data_sent......................: 30 MB  96 kB/s
     http_req_blocked...............: avg=92µs     min=1.4µs    med=2.7µs  max=358.45ms p(90)=5µs     p(95)=217.84µs
     http_req_connecting............: avg=76.93µs  min=0s       med=0s     max=358.17ms p(90)=0s      p(95)=146.09µs
     http_req_duration..............: avg=9.75s    min=583.99ms med=9.11s  max=30.07s   p(90)=18.38s  p(95)=20.04s  
       { expected_response:true }...: avg=9.75s    min=583.99ms med=9.11s  max=30.07s   p(90)=18.38s  p(95)=20.04s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 25352 
     http_req_receiving.............: avg=315.22µs min=22.8µs   med=60µs   max=249.49ms p(90)=87.6µs  p(95)=100.5µs 
     http_req_sending...............: avg=126.97µs min=8.5µs    med=14.8µs max=274.4ms  p(90)=34.49µs p(95)=67.6µs  
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=9.75s    min=583.89ms med=9.11s  max=30.07s   p(90)=18.38s  p(95)=20.04s  
     http_reqs......................: 25352  80.732243/s
     iteration_duration.............: avg=9.76s    min=584.84ms med=9.11s  max=30.07s   p(90)=18.41s  p(95)=20.04s  
     iterations.....................: 25352  80.732243/s
     vus............................: 100    min=0       max=1499
     vus_max........................: 1500   min=1290    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ff89798d-6d82-4ec6-496a-8643ed073600/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/223a40e4-82a8-46ea-6603-7ec76f0c8a00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  99% — ✓ 23268 / ✗ 1
     ✗ no graphql errors
      ↳  99% — ✓ 23070 / ✗ 199
     ✗ valid response structure
      ↳  99% — ✓ 23070 / ✗ 198

     checks.........................: 99.42% ✓ 69408     ✗ 398   
     data_received..................: 116 MB 358 kB/s
     data_sent......................: 28 MB  86 kB/s
     http_req_blocked...............: avg=120.7µs  min=1.1µs    med=2.7µs  max=289.78ms p(90)=10.74µs  p(95)=210.7µs 
     http_req_connecting............: avg=105.55µs min=0s       med=0s     max=289.69ms p(90)=0s       p(95)=130.15µs
     http_req_duration..............: avg=10.95s   min=248.91ms med=10.11s max=31.06s   p(90)=19.88s   p(95)=21.28s  
       { expected_response:true }...: avg=10.95s   min=248.91ms med=10.11s max=31.06s   p(90)=19.88s   p(95)=21.28s  
     http_req_failed................: 0.00%  ✓ 1         ✗ 23268 
     http_req_receiving.............: avg=147.59µs min=20.1µs   med=58.8µs max=186.68ms p(90)=107.42µs p(95)=148.6µs 
     http_req_sending...............: avg=318.99µs min=8.1µs    med=15.9µs max=265.91ms p(90)=58.3µs   p(95)=102.87µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=10.95s   min=248.8ms  med=10.11s max=31.06s   p(90)=19.88s   p(95)=21.28s  
     http_reqs......................: 23269  72.066208/s
     iteration_duration.............: avg=10.95s   min=249.67ms med=10.11s max=31.06s   p(90)=19.88s   p(95)=21.29s  
     iterations.....................: 23269  72.066208/s
     vus............................: 101    min=0       max=1498
     vus_max........................: 1500   min=1070    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/92711185-0e93-4647-4c63-6c4c5a51a100/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/acd3129d-62c4-40a7-c7e3-1750d8eb3300/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-deno`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  98% — ✓ 22542 / ✗ 449
     ✗ valid response structure
      ↳  98% — ✓ 22542 / ✗ 449

     checks.........................: 98.69% ✓ 68075   ✗ 898   
     data_received..................: 119 MB 381 kB/s
     data_sent......................: 27 MB  87 kB/s
     http_req_blocked...............: avg=75.44µs  min=1.2µs    med=2.7µs  max=41.62ms p(90)=5.8µs  p(95)=249.1µs 
     http_req_connecting............: avg=64.12µs  min=0s       med=0s     max=41.49ms p(90)=0s     p(95)=157.75µs
     http_req_duration..............: avg=10.71s   min=620.57ms med=10.22s max=37.45s  p(90)=19.88s p(95)=22.15s  
       { expected_response:true }...: avg=10.71s   min=620.57ms med=10.22s max=37.45s  p(90)=19.88s p(95)=22.15s  
     http_req_failed................: 0.00%  ✓ 0       ✗ 22991 
     http_req_receiving.............: avg=137.32µs min=18.3µs   med=40.3µs max=37.19ms p(90)=94µs   p(95)=135.65µs
     http_req_sending...............: avg=102.28µs min=7µs      med=14.8µs max=58.68ms p(90)=63.5µs p(95)=102.6µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=10.71s   min=620.35ms med=10.22s max=37.45s  p(90)=19.88s p(95)=22.15s  
     http_reqs......................: 22991  73.5377/s
     iteration_duration.............: avg=10.71s   min=622.3ms  med=10.23s max=37.46s  p(90)=19.88s p(95)=22.15s  
     iterations.....................: 22991  73.5377/s
     vus............................: 280    min=0     max=1499
     vus_max........................: 1500   min=1334  max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5e1fa7a9-8883-41da-01bf-66de432a0400/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3e4c7423-19ed-49f0-660c-08946a535500/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-uws`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  69% — ✓ 19683 / ✗ 8785
     ✗ valid response structure
      ↳  69% — ✓ 19683 / ✗ 8785

     checks.........................: 79.42% ✓ 67834     ✗ 17570 
     data_received..................: 249 MB 798 kB/s
     data_sent......................: 34 MB  108 kB/s
     http_req_blocked...............: avg=33.39µs min=900ns   med=2µs    max=30.67ms p(90)=3.4µs  p(95)=153.36µs
     http_req_connecting............: avg=26.57µs min=0s      med=0s     max=30.62ms p(90)=0s     p(95)=97µs    
     http_req_duration..............: avg=8.61s   min=30.92ms med=4.89s  max=42.74s  p(90)=20.44s p(95)=24.88s  
       { expected_response:true }...: avg=8.61s   min=30.92ms med=4.89s  max=42.74s  p(90)=20.44s p(95)=24.88s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 28468 
     http_req_receiving.............: avg=51.73µs min=13µs    med=34.7µs max=12.75ms p(90)=76.2µs p(95)=89.5µs  
     http_req_sending...............: avg=41.82µs min=6.2µs   med=11.6µs max=36.59ms p(90)=28.5µs p(95)=59.4µs  
     http_req_tls_handshaking.......: avg=0s      min=0s      med=0s     max=0s      p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=8.61s   min=30.86ms med=4.89s  max=42.74s  p(90)=20.44s p(95)=24.88s  
     http_reqs......................: 28468  91.218149/s
     iteration_duration.............: avg=8.61s   min=31.45ms med=4.89s  max=42.74s  p(90)=20.45s p(95)=24.88s  
     iterations.....................: 28468  91.218149/s
     vus............................: 11     min=11      max=1500
     vus_max........................: 1500   min=1500    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/eed2ba75-b9ef-4ebb-50f8-f257814ea200/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/77e2a95c-ff72-41be-d1ee-13bcf865a200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 60918     ✗ 0     
     data_received..................: 101 MB  320 kB/s
     data_sent......................: 24 MB   76 kB/s
     http_req_blocked...............: avg=304.71µs min=1.4µs    med=2.6µs  max=710.67ms p(90)=15.3µs   p(95)=191.98µs
     http_req_connecting............: avg=282.76µs min=0s       med=0s     max=651.11ms p(90)=0s       p(95)=120µs   
     http_req_duration..............: avg=12.11s   min=866ms    med=12.4s  max=56.04s   p(90)=15.97s   p(95)=28.33s  
       { expected_response:true }...: avg=12.11s   min=866ms    med=12.4s  max=56.04s   p(90)=15.97s   p(95)=28.33s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 20306 
     http_req_receiving.............: avg=829.8µs  min=17.8µs   med=47.4µs max=653.07ms p(90)=114.65µs p(95)=273.68µs
     http_req_sending...............: avg=666.11µs min=8.9µs    med=14.9µs max=593.58ms p(90)=74.65µs  p(95)=131.48µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=12.11s   min=865.27ms med=12.4s  max=56.04s   p(90)=15.97s   p(95)=28.33s  
     http_reqs......................: 20306   64.192021/s
     iteration_duration.............: avg=12.11s   min=867.14ms med=12.41s max=56.05s   p(90)=15.97s   p(95)=28.33s  
     iterations.....................: 20306   64.192021/s
     vus............................: 105     min=0       max=1500
     vus_max........................: 1500    min=1226    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7a6a5bf7-3a5b-41e1-615a-4300f66a4c00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4a4214bf-9882-434c-d502-e5b450a88900/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga-uws`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  69% — ✓ 15319 / ✗ 6794
     ✗ valid response structure
      ↳  69% — ✓ 15319 / ✗ 6794

     checks.........................: 79.51% ✓ 52751    ✗ 13588 
     data_received..................: 98 MB  307 kB/s
     data_sent......................: 26 MB  82 kB/s
     http_req_blocked...............: avg=110.35µs min=1.2µs   med=2.4µs  max=102.46ms p(90)=6µs     p(95)=366.42µs
     http_req_connecting............: avg=100.66µs min=0s      med=0s     max=102.35ms p(90)=0s      p(95)=269.08µs
     http_req_duration..............: avg=11.34s   min=73.69ms med=5.03s  max=56.79s   p(90)=29.07s  p(95)=34.62s  
       { expected_response:true }...: avg=11.34s   min=73.69ms med=5.03s  max=56.79s   p(90)=29.07s  p(95)=34.62s  
     http_req_failed................: 0.00%  ✓ 0        ✗ 22113 
     http_req_receiving.............: avg=71.43µs  min=19.2µs  med=46.4µs max=49.2ms   p(90)=74.3µs  p(95)=85.1µs  
     http_req_sending...............: avg=51.03µs  min=7.2µs   med=13.3µs max=98.49ms  p(90)=36.16µs p(95)=69.6µs  
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=11.34s   min=73.59ms med=5.03s  max=56.79s   p(90)=29.07s  p(95)=34.62s  
     http_reqs......................: 22113  69.44718/s
     iteration_duration.............: avg=11.34s   min=74.33ms med=5.03s  max=56.79s   p(90)=29.07s  p(95)=34.62s  
     iterations.....................: 22113  69.44718/s
     vus............................: 152    min=0      max=1500
     vus_max........................: 1500   min=1473   max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/55bdd9fb-4983-4215-8449-1a42308e1900/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3cdbde0e-14ae-45f2-ba04-c340a0ffc000/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server-node16`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  96% — ✓ 12441 / ✗ 512
     ✗ no graphql errors
      ↳  35% — ✓ 4633 / ✗ 8320
     ✗ valid response structure
      ↳  37% — ✓ 4633 / ✗ 7808

     checks.........................: 56.60% ✓ 21707     ✗ 16640 
     data_received..................: 44 MB  131 kB/s
     data_sent......................: 16 MB  47 kB/s
     http_req_blocked...............: avg=98.56µs min=1.6µs    med=3µs    max=20.33ms p(90)=269.44µs p(95)=634.26µs
     http_req_connecting............: avg=82.34µs min=0s       med=0s     max=20.25ms p(90)=172.96µs p(95)=538.78µs
     http_req_duration..............: avg=19.01s  min=806.88ms med=12.34s max=1m0s    p(90)=49.67s   p(95)=57.7s   
       { expected_response:true }...: avg=17.52s  min=806.88ms med=11.85s max=59.99s  p(90)=44.78s   p(95)=52.28s  
     http_req_failed................: 3.95%  ✓ 512       ✗ 12441 
     http_req_receiving.............: avg=92.04µs min=0s       med=79µs   max=12.24ms p(90)=129.28µs p(95)=155.6µs 
     http_req_sending...............: avg=53.4µs  min=9.29µs   med=21µs   max=19.72ms p(90)=68µs     p(95)=91µs    
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=19.01s  min=806.7ms  med=12.34s max=1m0s    p(90)=49.67s   p(95)=57.7s   
     http_reqs......................: 12953  38.526668/s
     iteration_duration.............: avg=19.01s  min=807.65ms med=12.34s max=1m0s    p(90)=49.67s   p(95)=57.7s   
     iterations.....................: 12953  38.526668/s
     vus............................: 2      min=0       max=1500
     vus_max........................: 1500   min=1225    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8e7f995b-2e28-478b-5edd-fa0fb06c0900/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a7817774-b573-4868-e45d-3ca7c3a0aa00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  84% — ✓ 15505 / ✗ 2859
     ✗ no graphql errors
      ↳  83% — ✓ 15386 / ✗ 2978
     ✗ valid response structure
      ↳  99% — ✓ 15386 / ✗ 119

     checks.........................: 88.59% ✓ 46277    ✗ 5956  
     data_received..................: 78 MB  233 kB/s
     data_sent......................: 22 MB  66 kB/s
     http_req_blocked...............: avg=301.48µs min=1.7µs   med=3.7µs  max=26.87ms p(90)=447.43µs p(95)=966.55µs
     http_req_connecting............: avg=271.69µs min=0s      med=0s     max=26.8ms  p(90)=353.49µs p(95)=810.52µs
     http_req_duration..............: avg=13.71s   min=97.3ms  med=4.24s  max=1m0s    p(90)=59.99s   p(95)=1m0s    
       { expected_response:true }...: avg=5.17s    min=97.3ms  med=4.15s  max=59.79s  p(90)=4.82s    p(95)=5.87s   
     http_req_failed................: 15.56% ✓ 2859     ✗ 15505 
     http_req_receiving.............: avg=73.41µs  min=0s      med=75.2µs max=12.71ms p(90)=103.8µs  p(95)=115.8µs 
     http_req_sending...............: avg=55.61µs  min=8.7µs   med=21.4µs max=22.24ms p(90)=66.3µs   p(95)=85.99µs 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=13.71s   min=97.2ms  med=4.24s  max=1m0s    p(90)=59.99s   p(95)=1m0s    
     http_reqs......................: 18364  54.91092/s
     iteration_duration.............: avg=13.71s   min=98.26ms med=4.24s  max=1m0s    p(90)=1m0s     p(95)=1m0s    
     iterations.....................: 18364  54.91092/s
     vus............................: 31     min=0      max=1500
     vus_max........................: 1500   min=1160   max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9b3d1033-5922-47a4-812c-fc4b2cf1a200/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/52620b67-72af-488d-c9ef-85c7741cc700/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  88% — ✓ 20648 / ✗ 2687
     ✗ no graphql errors
      ↳  87% — ✓ 20398 / ✗ 2937
     ✗ valid response structure
      ↳  98% — ✓ 20398 / ✗ 250

     checks.........................: 91.27% ✓ 61444     ✗ 5874  
     data_received..................: 106 MB 318 kB/s
     data_sent......................: 28 MB  83 kB/s
     http_req_blocked...............: avg=203.62µs min=1.2µs   med=2.6µs  max=32.61ms p(90)=286.25µs p(95)=509.79µs
     http_req_connecting............: avg=185.34µs min=0s      med=0s     max=22.14ms p(90)=227.19µs p(95)=408.15µs
     http_req_duration..............: avg=10.86s   min=76.85ms med=3.75s  max=1m0s    p(90)=59.99s   p(95)=1m0s    
       { expected_response:true }...: avg=4.47s    min=76.85ms med=3.69s  max=59.71s  p(90)=4.29s    p(95)=5.08s   
     http_req_failed................: 11.51% ✓ 2687      ✗ 20648 
     http_req_receiving.............: avg=59.08µs  min=0s      med=53.2µs max=52.36ms p(90)=82.89µs  p(95)=89.4µs  
     http_req_sending...............: avg=38.88µs  min=7.2µs   med=15.7µs max=19.52ms p(90)=45.5µs   p(95)=63µs    
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=10.86s   min=76.74ms med=3.75s  max=1m0s    p(90)=59.99s   p(95)=1m0s    
     http_reqs......................: 23335  69.980927/s
     iteration_duration.............: avg=10.87s   min=77.45ms med=3.75s  max=1m0s    p(90)=1m0s     p(95)=1m0s    
     iterations.....................: 23335  69.980927/s
     vus............................: 22     min=0       max=1500
     vus_max........................: 1500   min=1191    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2038eccc-3e5b-44e4-25e1-1ab5e79d6200/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1ef83538-13a5-477d-3961-3ed48a43ff00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  89% — ✓ 24116 / ✗ 2726
     ✗ no graphql errors
      ↳  89% — ✓ 24063 / ✗ 2779
     ✗ valid response structure
      ↳  99% — ✓ 24063 / ✗ 53

     checks.........................: 92.85% ✓ 72242     ✗ 5558  
     data_received..................: 122 MB 364 kB/s
     data_sent......................: 32 MB  96 kB/s
     http_req_blocked...............: avg=197.1µs  min=1.4µs   med=2.9µs  max=27.81ms p(90)=293.47µs p(95)=541.29µs
     http_req_connecting............: avg=178.93µs min=0s      med=0s     max=27.74ms p(90)=232.1µs  p(95)=447.2µs 
     http_req_duration..............: avg=9.41s    min=52.35ms med=3.04s  max=1m0s    p(90)=59.98s   p(95)=1m0s    
       { expected_response:true }...: avg=3.7s     min=52.35ms med=3.01s  max=59.59s  p(90)=3.37s    p(95)=3.66s   
     http_req_failed................: 10.15% ✓ 2726      ✗ 24116 
     http_req_receiving.............: avg=67.72µs  min=0s      med=61.8µs max=20.46ms p(90)=90.7µs   p(95)=98.7µs  
     http_req_sending...............: avg=50.18µs  min=8.5µs   med=17.5µs max=26.54ms p(90)=49.2µs   p(95)=69.6µs  
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=9.41s    min=52.26ms med=3.04s  max=1m0s    p(90)=59.98s   p(95)=1m0s    
     http_reqs......................: 26842  80.284645/s
     iteration_duration.............: avg=9.42s    min=53ms    med=3.04s  max=1m0s    p(90)=1m0s     p(95)=1m0s    
     iterations.....................: 26842  80.284645/s
     vus............................: 2      min=0       max=1499
     vus_max........................: 1500   min=1423    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a9806f50-f490-49b6-87d9-5e052db64c00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4955cbe2-9ff8-4004-df3a-e32971ad2100/public" alt="HTTP Overview" />


  </details>