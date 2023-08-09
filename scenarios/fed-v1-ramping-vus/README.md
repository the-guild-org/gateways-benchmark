## Overview for: `fed-v1-ramping-vus`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. We are running a heavy load of concurrent VUs to measure response time and other stats, during stress. It measure things like memory usage, CPU usage, response times. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was trying to reach 1500 concurrent VUs over 300s


### Comparison


| Gateway                             | duration(p95)⬇️ |  RPS  |         Requests         |                       Durations                        |
| :---------------------------------- | :-------------: | :---: | :----------------------: | :----------------------------------------------------: |
| wundergraph                         |     2327ms      |  674  |  208970 total, 0 failed  |   avg: 1123ms, p95: 2327ms, max: 4381ms, med: 1039ms   |
| apollo-router                       |     12050ms     |  119  |  37437 total, 0 failed   |  avg: 6553ms, p95: 12050ms, max: 13200ms, med: 6510ms  |
| mesh-supergraph                     |     12179ms     |  122  |  37988 total, 0 failed   |  avg: 6385ms, p95: 12180ms, max: 15800ms, med: 6204ms  |
| stitching-federation-with-yoga-bun  |     13016ms     |  142  |  44022 total, 0 failed   |  avg: 5472ms, p95: 13016ms, max: 35151ms, med: 5038ms  |
| mesh                                |     17125ms     |  94   |  29439 total, 0 failed   |  avg: 8302ms, p95: 17125ms, max: 30123ms, med: 7796ms  |
| stitching-federation-with-yoga-deno |     18618ms     |  86   |  26883 total, 0 failed   |  avg: 9075ms, p95: 18619ms, max: 35676ms, med: 8709ms  |
| mercurius                           |     19404ms     |  66   |  20787 total, 0 failed   | avg: 11686ms, p95: 19405ms, max: 20894ms, med: 12402ms |
| apollo-gateway-with-yoga-uws        |     33325ms     |  62   |  19940 total, 0 failed   | avg: 12660ms, p95: 33326ms, max: 56313ms, med: 7797ms  |
| apollo-server-node16                |     41944ms     |  55   |  18007 total, 8 failed   | avg: 14199ms, p95: 41944ms, max: 60001ms, med: 8815ms  |
| stitching-federation-with-yoga-uws  |     43797ms     |  50   |  17262 total, 58 failed  | avg: 13780ms, p95: 43797ms, max: 60013ms, med: 6813ms  |
| apollo-gateway-with-yoga            |     60000ms     |  70   | 23583 total, 2665 failed | avg: 10723ms, p95: 60000ms, max: 60070ms, med: 3726ms  |
| apollo-server                       |     60000ms     |  49   | 16647 total, 2954 failed | avg: 14984ms, p95: 60000ms, max: 60042ms, med: 4438ms  |
| stitching-federation-with-yoga      |     60000ms     |  64   | 21511 total, 2902 failed | avg: 11786ms, p95: 60000ms, max: 60026ms, med: 3355ms  |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 626910     ✗ 0     
     data_received..................: 1.0 GB  3.4 MB/s
     data_sent......................: 248 MB  800 kB/s
     http_req_blocked...............: avg=970.45µs min=1.1µs  med=2.4µs  max=1.59s    p(90)=4.2µs   p(95)=5.4µs  
     http_req_connecting............: avg=949.27µs min=0s     med=0s     max=1.59s    p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=1.12s    min=7.18ms med=1.03s  max=4.38s    p(90)=2.05s   p(95)=2.32s  
       { expected_response:true }...: avg=1.12s    min=7.18ms med=1.03s  max=4.38s    p(90)=2.05s   p(95)=2.32s  
     http_req_failed................: 0.00%   ✓ 0          ✗ 208970
     http_req_receiving.............: avg=5.08ms   min=15.6µs med=37.8µs max=902.75ms p(90)=206.8µs p(95)=804.8µs
     http_req_sending...............: avg=1.55ms   min=6.6µs  med=12.7µs max=903.18ms p(90)=28.9µs  p(95)=116.6µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=1.11s    min=7.03ms med=1.03s  max=4.38s    p(90)=2.04s   p(95)=2.3s   
     http_reqs......................: 208970  674.086249/s
     iteration_duration.............: avg=1.13s    min=7.95ms med=1.04s  max=4.38s    p(90)=2.08s   p(95)=2.35s  
     iterations.....................: 208970  674.086249/s
     vus............................: 10      min=10       max=1500
     vus_max........................: 1500    min=1500     max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/cc1fdb21-f160-45ce-0c23-ba7d4c0a5400/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/de26a6e8-6226-45c8-743e-a480d1a76600/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 37429 / ✗ 8
     ✗ valid response structure
      ↳  99% — ✓ 37429 / ✗ 8

     checks.........................: 99.98% ✓ 112295     ✗ 16    
     data_received..................: 187 MB 593 kB/s
     data_sent......................: 44 MB  141 kB/s
     http_req_blocked...............: avg=42.74µs min=1.3µs    med=2.6µs  max=50.93ms p(90)=4.1µs  p(95)=17.1µs 
     http_req_connecting............: avg=35.75µs min=0s       med=0s     max=41.5ms  p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=6.55s   min=278.99ms med=6.5s   max=13.2s   p(90)=11.68s p(95)=12.05s 
       { expected_response:true }...: avg=6.55s   min=278.99ms med=6.5s   max=13.2s   p(90)=11.68s p(95)=12.05s 
     http_req_failed................: 0.00%  ✓ 0          ✗ 37437 
     http_req_receiving.............: avg=62.96µs min=19.9µs   med=53.3µs max=19.87ms p(90)=77.6µs p(95)=85.32µs
     http_req_sending...............: avg=35.4µs  min=7.1µs    med=14.2µs max=37.96ms p(90)=29.1µs p(95)=48.5µs 
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s     max=0s      p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=6.55s   min=278.88ms med=6.5s   max=13.2s   p(90)=11.68s p(95)=12.04s 
     http_reqs......................: 37437  119.115716/s
     iteration_duration.............: avg=6.55s   min=280.27ms med=6.51s  max=13.2s   p(90)=11.68s p(95)=12.05s 
     iterations.....................: 37437  119.115716/s
     vus............................: 71     min=0        max=1499
     vus_max........................: 1500   min=1383     max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/dc2ed92b-b07f-4e6d-6ccf-b4bee4885200/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/52fec022-84f3-4f9a-3206-506bcf627e00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 37913 / ✗ 75
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 37988

     checks.........................: 66.60% ✓ 75901      ✗ 38063 
     data_received..................: 192 MB 619 kB/s
     data_sent......................: 45 MB  146 kB/s
     http_req_blocked...............: avg=25.97µs min=800ns   med=1.9µs  max=49.36ms p(90)=2.8µs   p(95)=12.5µs
     http_req_connecting............: avg=21.26µs min=0s      med=0s     max=49.22ms p(90)=0s      p(95)=0s    
     http_req_duration..............: avg=6.38s   min=12.72ms med=6.2s   max=15.79s  p(90)=11.27s  p(95)=12.17s
       { expected_response:true }...: avg=6.38s   min=12.72ms med=6.2s   max=15.79s  p(90)=11.27s  p(95)=12.17s
     http_req_failed................: 0.00%  ✓ 0          ✗ 37988 
     http_req_receiving.............: avg=48.49µs min=16.89µs med=37.1µs max=35.33ms p(90)=60.8µs  p(95)=69.3µs
     http_req_sending...............: avg=22.62µs min=6.1µs   med=11.7µs max=16.57ms p(90)=24.39µs p(95)=34.5µs
     http_req_tls_handshaking.......: avg=0s      min=0s      med=0s     max=0s      p(90)=0s      p(95)=0s    
     http_req_waiting...............: avg=6.38s   min=12.67ms med=6.2s   max=15.79s  p(90)=11.27s  p(95)=12.17s
     http_reqs......................: 37988  122.536387/s
     iteration_duration.............: avg=6.38s   min=13.08ms med=6.2s   max=15.8s   p(90)=11.27s  p(95)=12.17s
     iterations.....................: 37988  122.536387/s
     vus............................: 52     min=50       max=1500
     vus_max........................: 1500   min=1500     max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/40491f06-3890-492f-59e2-1d89abab0d00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/982e9e9e-6f99-49c6-6b6c-2cadfdbedc00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 43997 / ✗ 25
     ✗ valid response structure
      ↳  99% — ✓ 43997 / ✗ 25

     checks.........................: 99.96% ✓ 132016     ✗ 50    
     data_received..................: 219 MB 708 kB/s
     data_sent......................: 52 MB  169 kB/s
     http_req_blocked...............: avg=99.93µs  min=900ns  med=1.8µs  max=262.9ms  p(90)=3µs    p(95)=10.2µs 
     http_req_connecting............: avg=94.65µs  min=0s     med=0s     max=262.84ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=5.47s    min=6.91ms med=5.03s  max=35.15s   p(90)=8.29s  p(95)=13.01s 
       { expected_response:true }...: avg=5.47s    min=6.91ms med=5.03s  max=35.15s   p(90)=8.29s  p(95)=13.01s 
     http_req_failed................: 0.00%  ✓ 0          ✗ 44022 
     http_req_receiving.............: avg=201.27µs min=16.1µs med=26.8µs max=241.36ms p(90)=53.1µs p(95)=81.19µs
     http_req_sending...............: avg=272.12µs min=6.1µs  med=10.1µs max=236.51ms p(90)=26.1µs p(95)=77.89µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=5.47s    min=6.82ms med=5.03s  max=35.15s   p(90)=8.29s  p(95)=13.01s 
     http_reqs......................: 44022  142.001339/s
     iteration_duration.............: avg=5.47s    min=7.59ms med=5.03s  max=35.15s   p(90)=8.3s   p(95)=13.01s 
     iterations.....................: 44022  142.001339/s
     vus............................: 9      min=9        max=1500
     vus_max........................: 1500   min=1500     max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5ce73e7c-aa28-42a4-74ee-f3228cfaf500/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/08678c9c-5f7e-4d04-c9a6-0767709f4000/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 29297 / ✗ 142
     ✗ valid response structure
      ↳  99% — ✓ 29297 / ✗ 142

     checks.........................: 99.67% ✓ 88033     ✗ 284   
     data_received..................: 149 MB 479 kB/s
     data_sent......................: 35 MB  113 kB/s
     http_req_blocked...............: avg=48.18µs min=1.2µs    med=2.29µs max=65.87ms p(90)=3.9µs   p(95)=163.63µs
     http_req_connecting............: avg=40.77µs min=0s       med=0s     max=65.59ms p(90)=0s      p(95)=103.58µs
     http_req_duration..............: avg=8.3s    min=740.52ms med=7.79s  max=30.12s  p(90)=15.21s  p(95)=17.12s  
       { expected_response:true }...: avg=8.3s    min=740.52ms med=7.79s  max=30.12s  p(90)=15.21s  p(95)=17.12s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 29439 
     http_req_receiving.............: avg=70.87µs min=19.8µs   med=47.3µs max=35.78ms p(90)=74.72µs p(95)=85.41µs 
     http_req_sending...............: avg=56.21µs min=7.6µs    med=13.1µs max=58.43ms p(90)=28.5µs  p(95)=57.5µs  
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s     max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=8.3s    min=739.3ms  med=7.79s  max=30.12s  p(90)=15.21s  p(95)=17.12s  
     http_reqs......................: 29439  94.751736/s
     iteration_duration.............: avg=8.3s    min=741.71ms med=7.79s  max=30.12s  p(90)=15.21s  p(95)=17.12s  
     iterations.....................: 29439  94.751736/s
     vus............................: 332    min=50      max=1500
     vus_max........................: 1500   min=1500    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d4cea98c-7a79-4669-d9e0-dfda856d2600/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/fe064cd1-0acf-4d22-9007-4b0178e8aa00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-deno`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  98% — ✓ 26543 / ✗ 340
     ✗ valid response structure
      ↳  98% — ✓ 26543 / ✗ 340

     checks.........................: 99.15% ✓ 79969     ✗ 680   
     data_received..................: 139 MB 447 kB/s
     data_sent......................: 32 MB  103 kB/s
     http_req_blocked...............: avg=123.89µs min=1.1µs    med=2.4µs  max=54.33ms p(90)=4.5µs  p(95)=197.8µs 
     http_req_connecting............: avg=114.2µs  min=0s       med=0s     max=54.27ms p(90)=0s     p(95)=130.68µs
     http_req_duration..............: avg=9.07s    min=502.41ms med=8.7s   max=35.67s  p(90)=15.86s p(95)=18.61s  
       { expected_response:true }...: avg=9.07s    min=502.41ms med=8.7s   max=35.67s  p(90)=15.86s p(95)=18.61s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 26883 
     http_req_receiving.............: avg=118.48µs min=17.89µs  med=35.9µs max=32.48ms p(90)=86µs   p(95)=119.29µs
     http_req_sending...............: avg=58.72µs  min=6.3µs    med=13.4µs max=24.54ms p(90)=50.8µs p(95)=96.49µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=9.07s    min=502.35ms med=8.7s   max=35.67s  p(90)=15.86s p(95)=18.61s  
     http_reqs......................: 26883  86.549976/s
     iteration_duration.............: avg=9.07s    min=505.56ms med=8.71s  max=35.67s  p(90)=15.86s p(95)=18.61s  
     iterations.....................: 26883  86.549976/s
     vus............................: 215    min=50      max=1500
     vus_max........................: 1500   min=1500    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/93dcce3e-0623-409a-7b80-27254ed53200/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/67309a53-40bd-4f22-900a-e6a1861e5100/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 62361     ✗ 0     
     data_received..................: 105 MB  337 kB/s
     data_sent......................: 25 MB   79 kB/s
     http_req_blocked...............: avg=52.8µs  min=1.4µs    med=3.6µs  max=14.79ms p(90)=14.8µs  p(95)=443.98µs
     http_req_connecting............: avg=42.43µs min=0s       med=0s     max=14.71ms p(90)=0s      p(95)=365.65µs
     http_req_duration..............: avg=11.68s  min=497.79ms med=12.4s  max=20.89s  p(90)=19.18s  p(95)=19.4s   
       { expected_response:true }...: avg=11.68s  min=497.79ms med=12.4s  max=20.89s  p(90)=19.18s  p(95)=19.4s   
     http_req_failed................: 0.00%   ✓ 0         ✗ 20787 
     http_req_receiving.............: avg=82.04µs min=23µs     med=76.8µs max=14.19ms p(90)=103.4µs p(95)=115.87µs
     http_req_sending...............: avg=37µs    min=7.9µs    med=20.1µs max=15.56ms p(90)=46.64µs p(95)=78.57µs 
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s     max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=11.68s  min=496.78ms med=12.4s  max=20.89s  p(90)=19.18s  p(95)=19.4s   
     http_reqs......................: 20787   66.903515/s
     iteration_duration.............: avg=11.68s  min=504.04ms med=12.4s  max=20.89s  p(90)=19.18s  p(95)=19.4s   
     iterations.....................: 20787   66.903515/s
     vus............................: 206     min=0       max=1499
     vus_max........................: 1500    min=1168    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/32e7efdd-59b7-4e03-5c85-6cc6073e4500/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/94327b6a-9cdc-432d-b4c0-84a4e16f4b00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga-uws`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  65% — ✓ 13133 / ✗ 6807
     ✗ valid response structure
      ↳  65% — ✓ 13133 / ✗ 6807

     checks.........................: 77.24% ✓ 46206     ✗ 13614 
     data_received..................: 88 MB  276 kB/s
     data_sent......................: 24 MB  74 kB/s
     http_req_blocked...............: avg=56.12µs min=1.1µs    med=2.6µs  max=29.9ms  p(90)=11.91µs p(95)=388.51µs
     http_req_connecting............: avg=46.32µs min=0s       med=0s     max=29.83ms p(90)=0s      p(95)=319.91µs
     http_req_duration..............: avg=12.66s  min=157.46ms med=7.79s  max=56.31s  p(90)=28.72s  p(95)=33.32s  
       { expected_response:true }...: avg=12.66s  min=157.46ms med=7.79s  max=56.31s  p(90)=28.72s  p(95)=33.32s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 19940 
     http_req_receiving.............: avg=65.31µs min=15.6µs   med=50.6µs max=14.55ms p(90)=80.2µs  p(95)=92.1µs  
     http_req_sending...............: avg=44.19µs min=6.3µs    med=13.7µs max=21.86ms p(90)=47.4µs  p(95)=73.9µs  
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s     max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=12.66s  min=157.4ms  med=7.79s  max=56.31s  p(90)=28.72s  p(95)=33.32s  
     http_reqs......................: 19940  62.587616/s
     iteration_duration.............: avg=12.66s  min=158.13ms med=7.79s  max=56.31s  p(90)=28.72s  p(95)=33.32s  
     iterations.....................: 19940  62.587616/s
     vus............................: 253    min=3       max=1500
     vus_max........................: 1500   min=1500    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9aec0a58-0904-46e0-3a0e-84565d881200/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2a1c1c34-c0bc-47af-071b-1c028c411d00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server-node16`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  99% — ✓ 17999 / ✗ 8
     ✗ no graphql errors
      ↳  54% — ✓ 9874 / ✗ 8133
     ✗ valid response structure
      ↳  54% — ✓ 9874 / ✗ 8125

     checks.........................: 69.88% ✓ 37747     ✗ 16266 
     data_received..................: 75 MB  230 kB/s
     data_sent......................: 21 MB  66 kB/s
     http_req_blocked...............: avg=56.06µs min=1.2µs    med=2.9µs   max=50.27ms p(90)=13.6µs p(95)=434.87µs
     http_req_connecting............: avg=46.43µs min=0s       med=0s      max=50.18ms p(90)=0s     p(95)=363.27µs
     http_req_duration..............: avg=14.19s  min=138.68ms med=8.81s   max=1m0s    p(90)=34.81s p(95)=41.94s  
       { expected_response:true }...: avg=14.17s  min=138.68ms med=8.81s   max=59.99s  p(90)=34.8s  p(95)=41.9s   
     http_req_failed................: 0.04%  ✓ 8         ✗ 17999 
     http_req_receiving.............: avg=78.89µs min=0s       med=71.09µs max=16.68ms p(90)=97.9µs p(95)=108.17µs
     http_req_sending...............: avg=40.37µs min=7.3µs    med=18.1µs  max=46.8ms  p(90)=48µs   p(95)=70.97µs 
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s      max=0s      p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=14.19s  min=138.57ms med=8.81s   max=1m0s    p(90)=34.81s p(95)=41.94s  
     http_reqs......................: 18007  55.345414/s
     iteration_duration.............: avg=14.19s  min=139.26ms med=8.81s   max=1m0s    p(90)=34.81s p(95)=41.94s  
     iterations.....................: 18007  55.345414/s
     vus............................: 90     min=0       max=1498
     vus_max........................: 1500   min=1298    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/293b2508-a538-44e5-40fb-18820549d700/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4387140f-3712-45f7-2c07-f21b1b15cf00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-uws`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  99% — ✓ 17204 / ✗ 58
     ✗ no graphql errors
      ↳  68% — ✓ 11802 / ✗ 5460
     ✗ valid response structure
      ↳  68% — ✓ 11802 / ✗ 5402

     checks.........................: 78.88% ✓ 40808     ✗ 10920 
     data_received..................: 130 MB 381 kB/s
     data_sent......................: 21 MB  63 kB/s
     http_req_blocked...............: avg=99.37µs min=1.5µs    med=3µs    max=512.57ms p(90)=19.39µs  p(95)=462.23µs
     http_req_connecting............: avg=77.95µs min=0s       med=0s     max=465.21ms p(90)=0s       p(95)=372.63µs
     http_req_duration..............: avg=13.77s  min=269.07ms med=6.81s  max=1m0s     p(90)=37.97s   p(95)=43.79s  
       { expected_response:true }...: avg=13.62s  min=269.07ms med=6.78s  max=58.67s   p(90)=37.82s   p(95)=42.97s  
     http_req_failed................: 0.33%  ✓ 58        ✗ 17204 
     http_req_receiving.............: avg=187.3µs min=0s       med=62.7µs max=95.57ms  p(90)=115.31µs p(95)=163.41µs
     http_req_sending...............: avg=90.19µs min=8µs      med=16.5µs max=96.86ms  p(90)=56.29µs  p(95)=81.7µs  
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s     max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=13.77s  min=268.92ms med=6.81s  max=1m0s     p(90)=37.97s   p(95)=43.79s  
     http_reqs......................: 17262  50.769918/s
     iteration_duration.............: avg=13.78s  min=270.67ms med=6.81s  max=1m0s     p(90)=37.97s   p(95)=43.79s  
     iterations.....................: 17262  50.769918/s
     vus............................: 1      min=0       max=1500
     vus_max........................: 1500   min=1184    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/686d50e1-c445-4f44-be13-dee129959600/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1ebf2266-de40-49b3-59db-18ef0482cf00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  88% — ✓ 20918 / ✗ 2665
     ✗ no graphql errors
      ↳  87% — ✓ 20585 / ✗ 2998
     ✗ valid response structure
      ↳  98% — ✓ 20585 / ✗ 333

     checks.........................: 91.19% ✓ 62088     ✗ 5996  
     data_received..................: 105 MB 313 kB/s
     data_sent......................: 28 MB  84 kB/s
     http_req_blocked...............: avg=175.72µs min=1µs     med=2.7µs  max=95.93ms p(90)=273.68µs p(95)=451.59µs
     http_req_connecting............: avg=161.09µs min=0s      med=0s     max=95.66ms p(90)=217.88µs p(95)=369µs   
     http_req_duration..............: avg=10.72s   min=85.75ms med=3.72s  max=1m0s    p(90)=59.99s   p(95)=1m0s    
       { expected_response:true }...: avg=4.44s    min=85.75ms med=3.66s  max=59.97s  p(90)=4.31s    p(95)=5.06s   
     http_req_failed................: 11.30% ✓ 2665      ✗ 20918 
     http_req_receiving.............: avg=61.84µs  min=0s      med=49.7µs max=34.23ms p(90)=83.5µs   p(95)=91µs    
     http_req_sending...............: avg=51.67µs  min=6.5µs   med=16.8µs max=65.08ms p(90)=49.38µs  p(95)=67.5µs  
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=10.72s   min=85.66ms med=3.72s  max=1m0s    p(90)=59.99s   p(95)=1m0s    
     http_reqs......................: 23583  70.547651/s
     iteration_duration.............: avg=10.72s   min=86.41ms med=3.72s  max=1m0s    p(90)=1m0s     p(95)=1m0s    
     iterations.....................: 23583  70.547651/s
     vus............................: 2      min=0       max=1500
     vus_max........................: 1500   min=1402    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6fe9e31d-6240-425e-3a6b-3ccc8a17c800/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/339d4f90-a862-47cb-b9d9-627d77ce5000/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  82% — ✓ 13693 / ✗ 2954
     ✗ no graphql errors
      ↳  80% — ✓ 13428 / ✗ 3219
     ✗ valid response structure
      ↳  98% — ✓ 13428 / ✗ 265

     checks.........................: 86.29% ✓ 40549     ✗ 6438  
     data_received..................: 70 MB  210 kB/s
     data_sent......................: 20 MB  60 kB/s
     http_req_blocked...............: avg=354.86µs min=1.7µs    med=3.2µs  max=42.85ms p(90)=545.58µs p(95)=1.34ms  
     http_req_connecting............: avg=320.47µs min=0s       med=0s     max=35.13ms p(90)=446.54µs p(95)=1.18ms  
     http_req_duration..............: avg=14.98s   min=146.36ms med=4.43s  max=1m0s    p(90)=59.99s   p(95)=1m0s    
       { expected_response:true }...: avg=5.27s    min=146.36ms med=4.32s  max=59.86s  p(90)=5.03s    p(95)=5.91s   
     http_req_failed................: 17.74% ✓ 2954      ✗ 13693 
     http_req_receiving.............: avg=77.44µs  min=0s       med=72.8µs max=23.11ms p(90)=121.5µs  p(95)=145.96µs
     http_req_sending...............: avg=53.89µs  min=10.1µs   med=21.7µs max=16.27ms p(90)=73.54µs  p(95)=104.26µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=14.98s   min=146.25ms med=4.43s  max=1m0s    p(90)=59.99s   p(95)=1m0s    
     http_reqs......................: 16647  49.776923/s
     iteration_duration.............: avg=14.98s   min=147.09ms med=4.43s  max=1m0s    p(90)=1m0s     p(95)=1m0s    
     iterations.....................: 16647  49.776923/s
     vus............................: 49     min=0       max=1500
     vus_max........................: 1500   min=1094    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/dab31017-aa75-4f2e-87d6-32f5a0b7a400/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6823910a-7173-4089-cc11-cd20dd57f900/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  86% — ✓ 18609 / ✗ 2902
     ✗ no graphql errors
      ↳  86% — ✓ 18575 / ✗ 2936
     ✗ valid response structure
      ↳  99% — ✓ 18575 / ✗ 34

     checks.........................: 90.47% ✓ 55759     ✗ 5872  
     data_received..................: 94 MB  281 kB/s
     data_sent......................: 26 MB  77 kB/s
     http_req_blocked...............: avg=291.78µs min=1.6µs   med=3.4µs  max=35.28ms p(90)=459.6µs p(95)=1.08ms  
     http_req_connecting............: avg=262.03µs min=0s      med=0s     max=35.22ms p(90)=366.9µs p(95)=949.75µs
     http_req_duration..............: avg=11.78s   min=73.54ms med=3.35s  max=1m0s    p(90)=59.99s  p(95)=1m0s    
       { expected_response:true }...: avg=4.26s    min=73.54ms med=3.31s  max=59.2s   p(90)=3.65s   p(95)=5.06s   
     http_req_failed................: 13.49% ✓ 2902      ✗ 18609 
     http_req_receiving.............: avg=82.55µs  min=0s      med=75.4µs max=20.24ms p(90)=117.6µs p(95)=140.05µs
     http_req_sending...............: avg=57.08µs  min=9.9µs   med=22.1µs max=23.1ms  p(90)=67.1µs  p(95)=92µs    
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=11.78s   min=73.42ms med=3.35s  max=1m0s    p(90)=59.99s  p(95)=1m0s    
     http_reqs......................: 21511  64.321165/s
     iteration_duration.............: avg=11.78s   min=74.3ms  med=3.35s  max=1m0s    p(90)=1m0s    p(95)=1m0s    
     iterations.....................: 21511  64.321165/s
     vus............................: 23     min=0       max=1500
     vus_max........................: 1500   min=1186    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3eca2168-8e1e-4d06-bd79-c9eb67d9f800/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0f3287b0-1264-4cca-59c8-c76d2b28ab00/public" alt="HTTP Overview" />


  </details>