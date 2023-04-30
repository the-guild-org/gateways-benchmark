## Overview for scenario: `ramping-vus`


This scenario runs 4 servics and a GraphQL gatway with Federation spec, and runs a heavy query. We are running a heavy load of concurrent VUs to measure response time and other stats, during stress. It measure things like memory usage, CPU usage, response times. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was trying to reach 1000 concurrent VUs over 60s


### Comparison


| Gateway                        | duration(p95)⬇️ |  RPS  |        Requests        |                       Durations                        |
| :----------------------------- | :-------------: | :---: | :--------------------: | :----------------------------------------------------: |
| wundergraph                    |      805ms      | 1277  | 89407 total, 0 failed  |    avg: 383ms, p95: 806ms, max: 1544ms, med: 353ms     |
| apollo-router                  |     9961ms      |  101  |  7246 total, 0 failed  |  avg: 5386ms, p95: 9961ms, max: 17003ms, med: 5080ms   |
| mercurius                      |     12788ms     |  73   |  5130 total, 0 failed  |  avg: 7189ms, p95: 12789ms, max: 13401ms, med: 7146ms  |
| apollo-server                  |     22687ms     |  55   |  4052 total, 0 failed  |  avg: 9836ms, p95: 22688ms, max: 27935ms, med: 7172ms  |
| mesh                           |     25369ms     |  54   | 4132 total, 136 failed | avg: 10120ms, p95: 25369ms, max: 33875ms, med: 7736ms  |
| apollo-gateway-with-yoga       |     28732ms     |  48   | 3434 total, 102 failed | avg: 11570ms, p95: 28732ms, max: 31732ms, med: 8374ms  |
| stitching-federation-with-yoga |     38125ms     |  37   | 3337 total, 860 failed | avg: 15262ms, p95: 38126ms, max: 44978ms, med: 10766ms |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 268221      ✗ 0     
     data_received..................: 434 MB  6.2 MB/s
     data_sent......................: 106 MB  1.5 MB/s
     http_req_blocked...............: avg=380.35µs min=800ns  med=1.4µs    max=393.97ms p(90)=2.4µs    p(95)=3.2µs   
     http_req_connecting............: avg=373.74µs min=0s     med=0s       max=393.85ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=382.73ms min=4.36ms med=352.56ms max=1.54s    p(90)=688.18ms p(95)=805.59ms
       { expected_response:true }...: avg=382.73ms min=4.36ms med=352.56ms max=1.54s    p(90)=688.18ms p(95)=805.59ms
     http_req_failed................: 0.00%   ✓ 0           ✗ 89407 
     http_req_receiving.............: avg=1.13ms   min=13.3µs med=25.4µs   max=362.54ms p(90)=122.9µs  p(95)=236.9µs 
     http_req_sending...............: avg=405.03µs min=5.4µs  med=8.4µs    max=285.08ms p(90)=18.89µs  p(95)=81.4µs  
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=381.19ms min=4.33ms med=351.51ms max=1.54s    p(90)=684.27ms p(95)=803.89ms
     http_reqs......................: 89407   1277.150291/s
     iteration_duration.............: avg=384.96ms min=4.76ms med=354.35ms max=1.54s    p(90)=692.7ms  p(95)=809.86ms
     iterations.....................: 89407   1277.150291/s
     vus............................: 7       min=7         max=997 
     vus_max........................: 1000    min=1000      max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/cedcf4dc-fe69-4c37-0469-4c01bfae5600/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/68d76f50-c9dc-4252-77d2-ae5b9f230200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 7242 / ✗ 4
     ✗ expected_result
      ↳  99% — ✓ 7245 / ✗ 1

     checks.........................: 99.97% ✓ 21733     ✗ 5     
     data_received..................: 36 MB  505 kB/s
     data_sent......................: 8.6 MB 120 kB/s
     http_req_blocked...............: avg=94.11µs min=1.2µs    med=2.3µs  max=18.58ms p(90)=356.9µs  p(95)=443.55µs
     http_req_connecting............: avg=82.15µs min=0s       med=0s     max=18.09ms p(90)=298.25µs p(95)=370.87µs
     http_req_duration..............: avg=5.38s   min=103.67ms med=5.08s  max=17s     p(90)=9.26s    p(95)=9.96s   
       { expected_response:true }...: avg=5.38s   min=103.67ms med=5.08s  max=17s     p(90)=9.26s    p(95)=9.96s   
     http_req_failed................: 0.00%  ✓ 0         ✗ 7246  
     http_req_receiving.............: avg=58.06µs min=22.5µs   med=51.3µs max=1.18ms  p(90)=78.1µs   p(95)=86.7µs  
     http_req_sending...............: avg=33.11µs min=7.1µs    med=13.8µs max=24.92ms p(90)=55µs     p(95)=68.7µs  
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=5.38s   min=103.62ms med=5.08s  max=17s     p(90)=9.26s    p(95)=9.96s   
     http_reqs......................: 7246   101.34198/s
     iteration_duration.............: avg=5.38s   min=104.01ms med=5.08s  max=17s     p(90)=9.26s    p(95)=9.96s   
     iterations.....................: 7246   101.34198/s
     vus............................: 19     min=19      max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6e20cb31-2cb3-4606-51c9-a67f43a9f800/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/48962703-9c98-4033-8863-0c38e11fbc00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 15390     ✗ 0     
     data_received..................: 26 MB   369 kB/s
     data_sent......................: 6.1 MB  87 kB/s
     http_req_blocked...............: avg=113.34µs min=1.4µs   med=2.5µs  max=16.01ms p(90)=411.7µs  p(95)=450.97µs
     http_req_connecting............: avg=96.25µs  min=0s      med=0s     max=15.99ms p(90)=342.41µs p(95)=376.41µs
     http_req_duration..............: avg=7.18s    min=11.93ms med=7.14s  max=13.4s   p(90)=12.3s    p(95)=12.78s  
       { expected_response:true }...: avg=7.18s    min=11.93ms med=7.14s  max=13.4s   p(90)=12.3s    p(95)=12.78s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 5130  
     http_req_receiving.............: avg=63.31µs  min=21.7µs  med=57.4µs max=1.38ms  p(90)=83.51µs  p(95)=92.95µs 
     http_req_sending...............: avg=41.66µs  min=9.29µs  med=14.8µs max=9.03ms  p(90)=67.1µs   p(95)=79.9µs  
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=7.18s    min=11.85ms med=7.14s  max=13.4s   p(90)=12.3s    p(95)=12.78s  
     http_reqs......................: 5130    73.279573/s
     iteration_duration.............: avg=7.18s    min=12.25ms med=7.14s  max=13.4s   p(90)=12.3s    p(95)=12.78s  
     iterations.....................: 5130    73.279573/s
     vus............................: 7       min=7       max=1000
     vus_max........................: 1000    min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b3aca085-925a-41d3-6007-636655582800/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/426abbd5-c10c-4449-fa4a-6096c90aa500/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  74% — ✓ 3003 / ✗ 1049
     ✗ expected_result
      ↳  98% — ✓ 3977 / ✗ 75

     checks.........................: 90.75% ✓ 11032     ✗ 1124  
     data_received..................: 20 MB  279 kB/s
     data_sent......................: 4.8 MB 66 kB/s
     http_req_blocked...............: avg=218.26µs min=1.4µs    med=2.7µs   max=21.06ms p(90)=493.8µs  p(95)=544.02µs
     http_req_connecting............: avg=187.55µs min=0s       med=0s      max=20.58ms p(90)=414.78µs p(95)=460.64µs
     http_req_duration..............: avg=9.83s    min=301.11ms med=7.17s   max=27.93s  p(90)=20.3s    p(95)=22.68s  
       { expected_response:true }...: avg=9.83s    min=301.11ms med=7.17s   max=27.93s  p(90)=20.3s    p(95)=22.68s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 4052  
     http_req_receiving.............: avg=74.93µs  min=22.7µs   med=67.6µs  max=1.82ms  p(90)=100.68µs p(95)=114.24µs
     http_req_sending...............: avg=109.02µs min=8.5µs    med=16.89µs max=8.35ms  p(90)=77.99µs  p(95)=93.74µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=9.83s    min=301.03ms med=7.17s   max=27.93s  p(90)=20.3s    p(95)=22.68s  
     http_reqs......................: 4052   55.324926/s
     iteration_duration.............: avg=9.83s    min=301.45ms med=7.17s   max=27.93s  p(90)=20.3s    p(95)=22.68s  
     iterations.....................: 4052   55.324926/s
     vus............................: 254    min=54      max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d89a2b3d-92cf-4478-2937-d4682ad2af00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b444c687-fb2d-4092-95ab-127a94b5d400/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  96% — ✓ 3996 / ✗ 136
     ✗ no_errors
      ↳  77% — ✓ 3182 / ✗ 950
     ✗ expected_result
      ↳  97% — ✓ 3881 / ✗ 115

     checks.........................: 90.20% ✓ 11059     ✗ 1201  
     data_received..................: 29 MB  379 kB/s
     data_sent......................: 4.9 MB 65 kB/s
     http_req_blocked...............: avg=604.41µs min=1.1µs    med=2.1µs  max=76.19ms p(90)=388.28µs p(95)=454µs   
     http_req_connecting............: avg=560.91µs min=0s       med=0s     max=76.16ms p(90)=323.58µs p(95)=400.89µs
     http_req_duration..............: avg=10.11s   min=756.03ms med=7.73s  max=33.87s  p(90)=19.37s   p(95)=25.36s  
       { expected_response:true }...: avg=10.28s   min=1.55s    med=7.87s  max=33.87s  p(90)=19.39s   p(95)=25.37s  
     http_req_failed................: 3.29%  ✓ 136       ✗ 3996  
     http_req_receiving.............: avg=1.68ms   min=16µs     med=44.6µs max=4.55s   p(90)=89.8µs   p(95)=162.96µs
     http_req_sending...............: avg=58.81µs  min=7µs      med=12.9µs max=26.05ms p(90)=65.4µs   p(95)=79µs    
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=10.11s   min=755.26ms med=7.73s  max=33.87s  p(90)=19.36s   p(95)=25.36s  
     http_reqs......................: 4132   54.476117/s
     iteration_duration.............: avg=10.12s   min=760.01ms med=7.74s  max=33.87s  p(90)=19.38s   p(95)=25.41s  
     iterations.....................: 4132   54.476117/s
     vus............................: 73     min=57      max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5d9c4978-3d6c-4e27-0f34-1673e3a16e00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e860810c-07d7-4c49-fef0-0dee2fe08400/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  97% — ✓ 3332 / ✗ 102
     ✗ no_errors
      ↳  59% — ✓ 2036 / ✗ 1398
     ✗ expected_result
      ↳  92% — ✓ 3075 / ✗ 257

     checks.........................: 82.77% ✓ 8443      ✗ 1757  
     data_received..................: 15 MB  205 kB/s
     data_sent......................: 4.1 MB 57 kB/s
     http_req_blocked...............: avg=608.7µs  min=1.2µs   med=3.1µs   max=103.26ms p(90)=674.68µs p(95)=1.34ms  
     http_req_connecting............: avg=573.31µs min=0s      med=0s      max=102.07ms p(90)=578.61µs p(95)=1.19ms  
     http_req_duration..............: avg=11.56s   min=37.1ms  med=8.37s   max=31.73s   p(90)=26.13s   p(95)=28.73s  
       { expected_response:true }...: avg=11.84s   min=37.1ms  med=8.48s   max=31.73s   p(90)=26.14s   p(95)=28.73s  
     http_req_failed................: 2.97%  ✓ 102       ✗ 3332  
     http_req_receiving.............: avg=553.6µs  min=25µs    med=68.9µs  max=42.17ms  p(90)=130.1µs  p(95)=197.38µs
     http_req_sending...............: avg=146.95µs min=11.1µs  med=23.95µs max=28.27ms  p(90)=110.44µs p(95)=183.3µs 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=11.56s   min=36.94ms med=8.37s   max=31.73s   p(90)=26.13s   p(95)=28.73s  
     http_reqs......................: 3434   48.102301/s
     iteration_duration.............: avg=11.57s   min=37.54ms med=8.37s   max=31.73s   p(90)=26.13s   p(95)=28.73s  
     iterations.....................: 3434   48.102301/s
     vus............................: 72     min=53      max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8991220b-6d03-47ec-9781-e2fe5f397700/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ddf7ca06-c2d4-41e8-7f3d-4f2f81c3b900/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  74% — ✓ 2477 / ✗ 860
     ✗ no_errors
      ↳  55% — ✓ 1851 / ✗ 1486
     ✗ expected_result
      ↳  70% — ✓ 2259 / ✗ 964

     checks.........................: 66.55% ✓ 6587      ✗ 3310  
     data_received..................: 13 MB  143 kB/s
     data_sent......................: 4.0 MB 44 kB/s
     http_req_blocked...............: avg=649.27µs min=1.2µs    med=2.5µs  max=52.27ms p(90)=451.3µs  p(95)=650.38µs
     http_req_connecting............: avg=622.01µs min=0s       med=0s     max=51.94ms p(90)=378.78µs p(95)=591.32µs
     http_req_duration..............: avg=15.26s   min=749.43ms med=10.76s max=44.97s  p(90)=33.94s   p(95)=38.12s  
       { expected_response:true }...: avg=13.51s   min=1.63s    med=9.21s  max=44.97s  p(90)=30.58s   p(95)=38.16s  
     http_req_failed................: 25.77% ✓ 860       ✗ 2477  
     http_req_receiving.............: avg=414.69µs min=18.59µs  med=51.4µs max=45.34ms p(90)=92.4µs   p(95)=161.88µs
     http_req_sending...............: avg=122.26µs min=7.6µs    med=16.7µs max=11.98ms p(90)=76.9µs   p(95)=106.6µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=15.26s   min=749.01ms med=10.76s max=44.97s  p(90)=33.94s   p(95)=38.12s  
     http_reqs......................: 3337   37.022769/s
     iteration_duration.............: avg=15.26s   min=753.53ms med=10.76s max=44.97s  p(90)=33.94s   p(95)=38.16s  
     iterations.....................: 3337   37.022769/s
     vus............................: 69     min=56      max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/06739773-57f5-4440-6e64-f0a548c18700/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/44433627-519d-4ae4-7cc0-9b89ba35d600/public" alt="HTTP Overview" />


  </details>