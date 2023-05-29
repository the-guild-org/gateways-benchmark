## Overview for scenario: `ramping-vus`


This scenario runs 4 servics and a GraphQL gateway with Federation spec, and runs a heavy query. We are running a heavy load of concurrent VUs to measure response time and other stats, during stress. It measure things like memory usage, CPU usage, response times. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was trying to reach 1000 concurrent VUs over 60s


### Comparison


| Gateway                        | duration(p95)⬇️ |  RPS  |        Requests        |                       Durations                        |
| :----------------------------- | :-------------: | :---: | :--------------------: | :----------------------------------------------------: |
| wundergraph                    |      769ms      | 1274  | 89255 total, 0 failed  |    avg: 383ms, p95: 770ms, max: 1255ms, med: 362ms     |
| apollo-router                  |     10134ms     |  101  |  7191 total, 0 failed  |  avg: 5360ms, p95: 10134ms, max: 15026ms, med: 5390ms  |
| mercurius                      |     11847ms     |  76   |  5384 total, 0 failed  |  avg: 6801ms, p95: 11848ms, max: 12081ms, med: 7115ms  |
| apollo-gateway-with-yoga       |     21738ms     |  75   | 5436 total, 78 failed  |  avg: 7251ms, p95: 21739ms, max: 27510ms, med: 4415ms  |
| apollo-server                  |     23472ms     |  72   | 5094 total, 30 failed  |  avg: 7456ms, p95: 23473ms, max: 35247ms, med: 4794ms  |
| mesh                           |     36874ms     |  36   | 3265 total, 157 failed | avg: 15185ms, p95: 36875ms, max: 45816ms, med: 10573ms |
| stitching-federation-with-yoga |     45936ms     |  16   | 1689 total, 646 failed | avg: 19903ms, p95: 45936ms, max: 58548ms, med: 15696ms |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 267765     ✗ 0     
     data_received..................: 434 MB  6.2 MB/s
     data_sent......................: 106 MB  1.5 MB/s
     http_req_blocked...............: avg=428.79µs min=700ns  med=1.5µs    max=438.52ms p(90)=2.4µs    p(95)=3.2µs   
     http_req_connecting............: avg=423.45µs min=0s     med=0s       max=438.4ms  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=383.21ms min=4.4ms  med=361.81ms max=1.25s    p(90)=680.05ms p(95)=769.78ms
       { expected_response:true }...: avg=383.21ms min=4.4ms  med=361.81ms max=1.25s    p(90)=680.05ms p(95)=769.78ms
     http_req_failed................: 0.00%   ✓ 0          ✗ 89255 
     http_req_receiving.............: avg=590.13µs min=12.9µs med=25.3µs   max=242.22ms p(90)=133.59µs p(95)=229.22µs
     http_req_sending...............: avg=467.31µs min=5.5µs  med=8.5µs    max=283.76ms p(90)=20.5µs   p(95)=87.49µs 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=382.15ms min=4.36ms med=360.84ms max=1.25s    p(90)=678.32ms p(95)=766.89ms
     http_reqs......................: 89255   1274.96084/s
     iteration_duration.............: avg=385.59ms min=4.67ms med=363.4ms  max=1.38s    p(90)=685.78ms p(95)=775.76ms
     iterations.....................: 89255   1274.96084/s
     vus............................: 6       min=6        max=991 
     vus_max........................: 1000    min=1000     max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/54af7ac5-7ec6-47e0-a3d7-d879d10b6500/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6ccc6a65-5922-428c-6f38-82372491bb00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 7177 / ✗ 14
     ✗ expected_result
      ↳  99% — ✓ 7190 / ✗ 1

     checks.........................: 99.93% ✓ 21558      ✗ 15    
     data_received..................: 36 MB  505 kB/s
     data_sent......................: 8.5 MB 120 kB/s
     http_req_blocked...............: avg=110.52µs min=1.3µs   med=2.29µs max=14.93ms p(90)=351.8µs p(95)=422.55µs
     http_req_connecting............: avg=97.82µs  min=0s      med=0s     max=14.89ms p(90)=291.9µs p(95)=353.5µs 
     http_req_duration..............: avg=5.35s    min=73.74ms med=5.38s  max=15.02s  p(90)=9.29s   p(95)=10.13s  
       { expected_response:true }...: avg=5.35s    min=73.74ms med=5.38s  max=15.02s  p(90)=9.29s   p(95)=10.13s  
     http_req_failed................: 0.00%  ✓ 0          ✗ 7191  
     http_req_receiving.............: avg=62.56µs  min=19.7µs  med=50.3µs max=9.99ms  p(90)=77.5µs  p(95)=87.75µs 
     http_req_sending...............: avg=31.9µs   min=7µs     med=12.9µs max=4.62ms  p(90)=50.7µs  p(95)=65µs    
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=5.35s    min=73.68ms med=5.38s  max=15.02s  p(90)=9.29s   p(95)=10.13s  
     http_reqs......................: 7191   101.379968/s
     iteration_duration.............: avg=5.36s    min=74.03ms med=5.39s  max=15.02s  p(90)=9.29s   p(95)=10.13s  
     iterations.....................: 7191   101.379968/s
     vus............................: 122    min=57       max=999 
     vus_max........................: 1000   min=1000     max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9f201c54-ebc1-41cf-1ce9-c334d58cd800/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/105c084f-5807-4a73-a9ff-ede771baee00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 5383 / ✗ 1
     ✓ expected_result

     checks.........................: 99.99% ✓ 16151     ✗ 1     
     data_received..................: 27 MB  387 kB/s
     data_sent......................: 6.4 MB 91 kB/s
     http_req_blocked...............: avg=106.6µs min=1.2µs   med=2.9µs  max=19.96ms p(90)=428.9µs  p(95)=477.99µs
     http_req_connecting............: avg=87.53µs min=0s      med=0s     max=19.77ms p(90)=354.87µs p(95)=402.09µs
     http_req_duration..............: avg=6.8s    min=10.11ms med=7.11s  max=12.08s  p(90)=11.48s   p(95)=11.84s  
       { expected_response:true }...: avg=6.8s    min=10.11ms med=7.11s  max=12.08s  p(90)=11.48s   p(95)=11.84s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 5384  
     http_req_receiving.............: avg=75.64µs min=22.2µs  med=66.4µs max=17.28ms p(90)=96.2µs   p(95)=106µs   
     http_req_sending...............: avg=32.7µs  min=7.8µs   med=18µs   max=1.87ms  p(90)=68.67µs  p(95)=82.78µs 
     http_req_tls_handshaking.......: avg=0s      min=0s      med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=6.8s    min=10.05ms med=7.11s  max=12.08s  p(90)=11.48s   p(95)=11.84s  
     http_reqs......................: 5384   76.905705/s
     iteration_duration.............: avg=6.8s    min=10.46ms med=7.11s  max=12.08s  p(90)=11.48s   p(95)=11.84s  
     iterations.....................: 5384   76.905705/s
     vus............................: 6      min=6       max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6cbca4d9-1bb3-4089-8786-0417fd3d7500/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b2b4724e-1e7f-4497-708b-4be413bd4600/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  98% — ✓ 5358 / ✗ 78
     ✗ no_errors
      ↳  79% — ✓ 4317 / ✗ 1119
     ✗ expected_result
      ↳  97% — ✓ 5216 / ✗ 142

     checks.........................: 91.74% ✓ 14891     ✗ 1339  
     data_received..................: 25 MB  350 kB/s
     data_sent......................: 6.5 MB 90 kB/s
     http_req_blocked...............: avg=295.34µs min=1.1µs    med=2µs    max=56.66ms p(90)=361.39µs p(95)=409.37µs
     http_req_connecting............: avg=280.95µs min=0s       med=0s     max=56.57ms p(90)=300.39µs p(95)=338.62µs
     http_req_duration..............: avg=7.25s    min=84.74ms  med=4.41s  max=27.51s  p(90)=18.63s   p(95)=21.73s  
       { expected_response:true }...: avg=7.32s    min=355.29ms med=4.53s  max=27.51s  p(90)=18.72s   p(95)=21.97s  
     http_req_failed................: 1.43%  ✓ 78        ✗ 5358  
     http_req_receiving.............: avg=176.45µs min=16µs     med=37.1µs max=46.57ms p(90)=69.4µs   p(95)=83.09µs 
     http_req_sending...............: avg=61.72µs  min=6.6µs    med=12.4µs max=21.98ms p(90)=59.65µs  p(95)=74.2µs  
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=7.25s    min=84.39ms  med=4.41s  max=27.51s  p(90)=18.63s   p(95)=21.73s  
     http_reqs......................: 5436   75.846043/s
     iteration_duration.............: avg=7.25s    min=98.77ms  med=4.41s  max=27.51s  p(90)=18.63s   p(95)=21.73s  
     iterations.....................: 5436   75.846043/s
     vus............................: 55     min=55      max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7255c6ef-4647-420c-4574-ad1f294f0700/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/beef21e0-8bda-45c6-a993-e9cb3e0b9100/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  99% — ✓ 5064 / ✗ 30
     ✗ no_errors
      ↳  67% — ✓ 3459 / ✗ 1635
     ✗ expected_result
      ↳  94% — ✓ 4784 / ✗ 280

     checks.........................: 87.24% ✓ 13307     ✗ 1945  
     data_received..................: 28 MB  400 kB/s
     data_sent......................: 6.0 MB 86 kB/s
     http_req_blocked...............: avg=201.74µs min=1.1µs   med=2µs    max=32.83ms p(90)=376.86µs p(95)=418.8µs 
     http_req_connecting............: avg=184.89µs min=0s      med=0s     max=32.68ms p(90)=314.16µs p(95)=358.14µs
     http_req_duration..............: avg=7.45s    min=10.25ms med=4.79s  max=35.24s  p(90)=16.26s   p(95)=23.47s  
       { expected_response:true }...: avg=7.49s    min=10.25ms med=4.83s  max=35.24s  p(90)=16.29s   p(95)=23.5s   
     http_req_failed................: 0.58%  ✓ 30        ✗ 5064  
     http_req_receiving.............: avg=63.02µs  min=18.1µs  med=45.5µs max=22.53ms p(90)=74.39µs  p(95)=84.03µs 
     http_req_sending...............: avg=42.97µs  min=7µs     med=12.8µs max=6.64ms  p(90)=56.9µs   p(95)=69.66µs 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=7.45s    min=10.14ms med=4.79s  max=35.24s  p(90)=16.26s   p(95)=23.47s  
     http_reqs......................: 5094   72.764768/s
     iteration_duration.............: avg=7.45s    min=10.57ms med=4.79s  max=35.24s  p(90)=16.26s   p(95)=23.47s  
     iterations.....................: 5094   72.764768/s
     vus............................: 5      min=5       max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/fe3558b3-8e50-4845-4352-c620ea45b800/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ee543da6-b615-4275-09ce-dc3c52c5cc00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  95% — ✓ 3108 / ✗ 157
     ✗ no_errors
      ↳  65% — ✓ 2143 / ✗ 1122
     ✗ expected_result
      ↳  98% — ✓ 3069 / ✗ 39

     checks.........................: 86.32% ✓ 8320      ✗ 1318  
     data_received..................: 31 MB  345 kB/s
     data_sent......................: 3.9 MB 43 kB/s
     http_req_blocked...............: avg=741.5µs  min=1.5µs  med=3.4µs  max=128.24ms p(90)=584.57µs p(95)=2.91ms  
     http_req_connecting............: avg=710.41µs min=0s     med=0s     max=128.17ms p(90)=500.63µs p(95)=2.86ms  
     http_req_duration..............: avg=15.18s   min=1.17s  med=10.57s max=45.81s   p(90)=32.11s   p(95)=36.87s  
       { expected_response:true }...: avg=15.64s   min=1.28s  med=10.85s max=45.81s   p(90)=32.6s    p(95)=36.88s  
     http_req_failed................: 4.80%  ✓ 157       ✗ 3108  
     http_req_receiving.............: avg=1.22ms   min=22.4µs med=74.6µs max=115.88ms p(90)=229.24µs p(95)=715.2µs 
     http_req_sending...............: avg=114.25µs min=10.6µs med=24.4µs max=16.91ms  p(90)=100.5µs  p(95)=304.26µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=15.18s   min=1.17s  med=10.56s max=45.81s   p(90)=32.11s   p(95)=36.87s  
     http_reqs......................: 3265   36.465247/s
     iteration_duration.............: avg=15.18s   min=1.18s  med=10.58s max=45.81s   p(90)=32.11s   p(95)=36.88s  
     iterations.....................: 3265   36.465247/s
     vus............................: 6      min=6       max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0b376017-5f15-401b-e6cd-175332bd6700/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/144f2201-10d2-4785-eccb-24cf6e0cb900/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  61% — ✓ 1043 / ✗ 646
     ✗ no_errors
      ↳  56% — ✓ 960 / ✗ 729
     ✗ expected_result
      ↳  57% — ✓ 977 / ✗ 712

     checks.........................: 58.81% ✓ 2980      ✗ 2087  
     data_received..................: 5.1 MB 51 kB/s
     data_sent......................: 2.7 MB 27 kB/s
     http_req_blocked...............: avg=304.52µs min=1.8µs  med=4.1µs   max=18.77ms p(90)=663.59µs p(95)=841.89µs
     http_req_connecting............: avg=258.91µs min=0s     med=0s      max=18.68ms p(90)=567.31µs p(95)=699.57µs
     http_req_duration..............: avg=19.9s    min=3.23s  med=15.69s  max=58.54s  p(90)=39.62s   p(95)=45.93s  
       { expected_response:true }...: avg=13.69s   min=3.23s  med=11.52s  max=42.43s  p(90)=23.83s   p(95)=32.56s  
     http_req_failed................: 38.24% ✓ 646       ✗ 1043  
     http_req_receiving.............: avg=104.79µs min=31.2µs med=85.69µs max=4.65ms  p(90)=143.78µs p(95)=181.99µs
     http_req_sending...............: avg=83.21µs  min=10.6µs med=39.1µs  max=8.69ms  p(90)=118.28µs p(95)=193.55µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=19.9s    min=3.23s  med=15.69s  max=58.54s  p(90)=39.62s   p(95)=45.93s  
     http_reqs......................: 1689   16.905943/s
     iteration_duration.............: avg=19.9s    min=3.23s  med=15.69s  max=58.54s  p(90)=39.62s   p(95)=45.93s  
     iterations.....................: 1689   16.905943/s
     vus............................: 2      min=2       max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9743ad75-e562-4b2c-69c4-8d5c3ed09700/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b62e9876-579b-4b3b-f587-7dc6759f0a00/public" alt="HTTP Overview" />


  </details>