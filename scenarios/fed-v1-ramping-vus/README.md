## Overview for scenario: `fed-v1-ramping-vus`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. We are running a heavy load of concurrent VUs to measure response time and other stats, during stress. It measure things like memory usage, CPU usage, response times. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was trying to reach 1000 concurrent VUs over 60s


### Comparison


| Gateway                             | duration(p95)⬇️ |  RPS  |       Requests        |                       Durations                        |
| :---------------------------------- | :-------------: | :---: | :-------------------: | :----------------------------------------------------: |
| wundergraph                         |     1079ms      |  907  | 63526 total, 0 failed |    avg: 543ms, p95: 1079ms, max: 2137ms, med: 525ms    |
| mercurius                           |     13053ms     |  65   | 4620 total, 0 failed  |  avg: 8058ms, p95: 13054ms, max: 13229ms, med: 8203ms  |
| apollo-router                       |     16762ms     |  68   | 5349 total, 0 failed  |  avg: 8475ms, p95: 16762ms, max: 25108ms, med: 7532ms  |
| mesh                                |     16837ms     |  52   | 3854 total, 0 failed  | avg: 10681ms, p95: 16837ms, max: 20530ms, med: 11196ms |
| stitching-federation-with-yoga-bun  |     17124ms     |  77   | 5612 total, 0 failed  |  avg: 7423ms, p95: 17125ms, max: 24206ms, med: 7164ms  |
| stitching-federation-with-yoga-deno |     25269ms     |  36   | 2803 total, 0 failed  | avg: 16097ms, p95: 25269ms, max: 29399ms, med: 18373ms |
| apollo-gateway-with-yoga            |     27184ms     |  44   | 3431 total, 0 failed  | avg: 12247ms, p95: 27185ms, max: 41938ms, med: 8759ms  |
| stitching-federation-with-yoga      |     27194ms     |  53   | 3980 total, 0 failed  | avg: 10712ms, p95: 27194ms, max: 39351ms, med: 8183ms  |
| apollo-server                       |     49067ms     |  55   | 4755 total, 0 failed  |  avg: 9379ms, p95: 49067ms, max: 58261ms, med: 2516ms  |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 190578     ✗ 0     
     data_received..................: 316 MB  4.5 MB/s
     data_sent......................: 75 MB   1.1 MB/s
     http_req_blocked...............: avg=127.99µs min=700ns  med=1.5µs    max=205.34ms p(90)=2.5µs    p(95)=3.3µs   
     http_req_connecting............: avg=121.85µs min=0s     med=0s       max=205.02ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=542.57ms min=6.32ms med=525.05ms max=2.13s    p(90)=933.62ms p(95)=1.07s   
       { expected_response:true }...: avg=542.57ms min=6.32ms med=525.05ms max=2.13s    p(90)=933.62ms p(95)=1.07s   
     http_req_failed................: 0.00%   ✓ 0          ✗ 63526 
     http_req_receiving.............: avg=458.23µs min=13.4µs med=28.6µs   max=274.88ms p(90)=130.7µs  p(95)=211.97µs
     http_req_sending...............: avg=188.24µs min=5.6µs  med=9.1µs    max=213.52ms p(90)=19µs     p(95)=51.1µs  
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=541.92ms min=6.17ms med=524.65ms max=2.13s    p(90)=932.19ms p(95)=1.07s   
     http_reqs......................: 63526   907.394341/s
     iteration_duration.............: avg=543.43ms min=6.59ms med=525.83ms max=2.13s    p(90)=935.86ms p(95)=1.08s   
     iterations.....................: 63526   907.394341/s
     vus............................: 7       min=7        max=990 
     vus_max........................: 1000    min=1000     max=1000
```


**Performance Overview**


**no-image-available**


**HTTP Overview**


**no-image-available**


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 13860     ✗ 0     
     data_received..................: 23 MB   332 kB/s
     data_sent......................: 5.5 MB  78 kB/s
     http_req_blocked...............: avg=150.61µs min=1.4µs   med=3µs     max=27.86ms p(90)=473.4µs  p(95)=522.61µs
     http_req_connecting............: avg=130.41µs min=0s      med=0s      max=27.76ms p(90)=390.82µs p(95)=438.41µs
     http_req_duration..............: avg=8.05s    min=10.05ms med=8.2s    max=13.22s  p(90)=12.58s   p(95)=13.05s  
       { expected_response:true }...: avg=8.05s    min=10.05ms med=8.2s    max=13.22s  p(90)=12.58s   p(95)=13.05s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 4620  
     http_req_receiving.............: avg=84.56µs  min=22.6µs  med=69.8µs  max=17.33ms p(90)=101.81µs p(95)=116.8µs 
     http_req_sending...............: avg=49.5µs   min=8.3µs   med=18.39µs max=9.27ms  p(90)=75.81µs  p(95)=91.72µs 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=8.05s    min=9.95ms  med=8.2s    max=13.22s  p(90)=12.58s   p(95)=13.05s  
     http_reqs......................: 4620    65.986427/s
     iteration_duration.............: avg=8.05s    min=10.44ms med=8.2s    max=13.22s  p(90)=12.58s   p(95)=13.05s  
     iterations.....................: 4620    65.986427/s
     vus............................: 9       min=9       max=1000
     vus_max........................: 1000    min=1000    max=1000
```


**Performance Overview**


**no-image-available**


**HTTP Overview**


**no-image-available**


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 5296 / ✗ 53
     ✗ expected_result
      ↳  99% — ✓ 5347 / ✗ 2

     checks.........................: 99.65% ✓ 15992     ✗ 55    
     data_received..................: 27 MB  343 kB/s
     data_sent......................: 6.3 MB 82 kB/s
     http_req_blocked...............: avg=197.37µs min=1.5µs    med=3µs     max=27.71ms p(90)=341.75µs p(95)=607.13µs
     http_req_connecting............: avg=170.63µs min=0s       med=0s      max=21.48ms p(90)=230.59µs p(95)=510.61µs
     http_req_duration..............: avg=8.47s    min=400.48ms med=7.53s   max=25.1s   p(90)=15.99s   p(95)=16.76s  
       { expected_response:true }...: avg=8.47s    min=400.48ms med=7.53s   max=25.1s   p(90)=15.99s   p(95)=16.76s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 5349  
     http_req_receiving.............: avg=87.38µs  min=25.69µs  med=70.09µs max=8.9ms   p(90)=122.93µs p(95)=158.01µs
     http_req_sending...............: avg=60.34µs  min=9.6µs    med=19.8µs  max=27.21ms p(90)=79.59µs  p(95)=112.55µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=8.47s    min=400.37ms med=7.53s   max=25.1s   p(90)=15.99s   p(95)=16.76s  
     http_reqs......................: 5349   68.904919/s
     iteration_duration.............: avg=8.47s    min=401.04ms med=7.53s   max=25.1s   p(90)=15.99s   p(95)=16.76s  
     iterations.....................: 5349   68.904919/s
     vus............................: 174    min=52      max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


**no-image-available**


**HTTP Overview**


**no-image-available**


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 3833 / ✗ 21
     ✓ expected_result

     checks.........................: 99.81% ✓ 11541     ✗ 21    
     data_received..................: 20 MB  267 kB/s
     data_sent......................: 4.6 MB 62 kB/s
     http_req_blocked...............: avg=313.72µs min=1.5µs  med=3.2µs   max=20.76ms p(90)=644.84µs p(95)=751µs   
     http_req_connecting............: avg=280.92µs min=0s     med=0s      max=19.74ms p(90)=553.3µs  p(95)=646.06µs
     http_req_duration..............: avg=10.68s   min=1.88s  med=11.19s  max=20.52s  p(90)=16.1s    p(95)=16.83s  
       { expected_response:true }...: avg=10.68s   min=1.88s  med=11.19s  max=20.52s  p(90)=16.1s    p(95)=16.83s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 3854  
     http_req_receiving.............: avg=99.6µs   min=31.3µs med=76.49µs max=13.32ms p(90)=124.99µs p(95)=159.03µs
     http_req_sending...............: avg=60.33µs  min=12.1µs med=23.9µs  max=9.06ms  p(90)=96.86µs  p(95)=125.7µs 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=10.68s   min=1.88s  med=11.19s  max=20.52s  p(90)=16.1s    p(95)=16.83s  
     http_reqs......................: 3854   52.373999/s
     iteration_duration.............: avg=10.68s   min=1.88s  med=11.19s  max=20.53s  p(90)=16.1s    p(95)=16.83s  
     iterations.....................: 3854   52.373999/s
     vus............................: 115    min=51      max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


**no-image-available**


**HTTP Overview**


**no-image-available**


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 16836    ✗ 0     
     data_received..................: 28 MB   385 kB/s
     data_sent......................: 6.7 MB  92 kB/s
     http_req_blocked...............: avg=637.21µs min=1.1µs    med=2.29µs max=259.95ms p(90)=241.93µs p(95)=493.17µs
     http_req_connecting............: avg=616.36µs min=0s       med=0s     max=259.87ms p(90)=156.27µs p(95)=418.01µs
     http_req_duration..............: avg=7.42s    min=371.09ms med=7.16s  max=24.2s    p(90)=15.87s   p(95)=17.12s  
       { expected_response:true }...: avg=7.42s    min=371.09ms med=7.16s  max=24.2s    p(90)=15.87s   p(95)=17.12s  
     http_req_failed................: 0.00%   ✓ 0        ✗ 5612  
     http_req_receiving.............: avg=418.61µs min=16.9µs   med=40.8µs max=146.35ms p(90)=147.77µs p(95)=322.93µs
     http_req_sending...............: avg=385.33µs min=7.3µs    med=12.9µs max=195.47ms p(90)=94.3µs   p(95)=130.23µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=7.42s    min=370.88ms med=7.16s  max=24.2s    p(90)=15.87s   p(95)=17.12s  
     http_reqs......................: 5612    77.17063/s
     iteration_duration.............: avg=7.42s    min=371.97ms med=7.16s  max=24.2s    p(90)=15.87s   p(95)=17.17s  
     iterations.....................: 5612    77.17063/s
     vus............................: 77      min=55     max=1000
     vus_max........................: 1000    min=1000   max=1000
```


**Performance Overview**


**no-image-available**


**HTTP Overview**


**no-image-available**


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-deno`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  89% — ✓ 2519 / ✗ 284
     ✗ expected_result
      ↳  98% — ✓ 2773 / ✗ 30

     checks.........................: 96.26% ✓ 8095      ✗ 314   
     data_received..................: 16 MB  209 kB/s
     data_sent......................: 3.3 MB 43 kB/s
     http_req_blocked...............: avg=314.54µs min=1.3µs  med=3.6µs  max=24.93ms p(90)=601.12µs p(95)=691.31µs
     http_req_connecting............: avg=278.4µs  min=0s     med=0s     max=24.83ms p(90)=511.53µs p(95)=591.72µs
     http_req_duration..............: avg=16.09s   min=1.88s  med=18.37s max=29.39s  p(90)=23.36s   p(95)=25.26s  
       { expected_response:true }...: avg=16.09s   min=1.88s  med=18.37s max=29.39s  p(90)=23.36s   p(95)=25.26s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 2803  
     http_req_receiving.............: avg=120.23µs min=22.1µs med=64.9µs max=7.56ms  p(90)=157.2µs  p(95)=238.26µs
     http_req_sending...............: avg=159.03µs min=10µs   med=23.4µs max=16.34ms p(90)=102.06µs p(95)=140.81µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=16.09s   min=1.86s  med=18.37s max=29.39s  p(90)=23.36s   p(95)=25.26s  
     http_reqs......................: 2803   36.169255/s
     iteration_duration.............: avg=16.09s   min=1.88s  med=18.37s max=29.39s  p(90)=23.36s   p(95)=25.27s  
     iterations.....................: 2803   36.169255/s
     vus............................: 190    min=52      max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


**no-image-available**


**HTTP Overview**


**no-image-available**


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  63% — ✓ 2169 / ✗ 1262
     ✗ expected_result
      ↳  93% — ✓ 3195 / ✗ 236

     checks.........................: 85.44% ✓ 8795      ✗ 1498  
     data_received..................: 15 MB  195 kB/s
     data_sent......................: 4.1 MB 53 kB/s
     http_req_blocked...............: avg=253.67µs min=1.3µs    med=3.1µs  max=17.45ms p(90)=600.6µs p(95)=711.2µs 
     http_req_connecting............: avg=222.98µs min=0s       med=0s     max=17.38ms p(90)=508.4µs p(95)=611.65µs
     http_req_duration..............: avg=12.24s   min=722.3ms  med=8.75s  max=41.93s  p(90)=23.15s  p(95)=27.18s  
       { expected_response:true }...: avg=12.24s   min=722.3ms  med=8.75s  max=41.93s  p(90)=23.15s  p(95)=27.18s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 3431  
     http_req_receiving.............: avg=87.9µs   min=25.7µs   med=71.8µs max=4.79ms  p(90)=124.1µs p(95)=160.45µs
     http_req_sending...............: avg=57.14µs  min=11.3µs   med=23µs   max=5.84ms  p(90)=97.19µs p(95)=126.14µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=12.24s   min=722.22ms med=8.75s  max=41.93s  p(90)=23.15s  p(95)=27.18s  
     http_reqs......................: 3431   44.703207/s
     iteration_duration.............: avg=12.24s   min=722.64ms med=8.75s  max=41.95s  p(90)=23.15s  p(95)=27.18s  
     iterations.....................: 3431   44.703207/s
     vus............................: 173    min=52      max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


**no-image-available**


**HTTP Overview**


**no-image-available**


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  83% — ✓ 3324 / ✗ 656
     ✗ expected_result
      ↳  96% — ✓ 3835 / ✗ 145

     checks.........................: 93.29% ✓ 11139    ✗ 801   
     data_received..................: 22 MB  301 kB/s
     data_sent......................: 4.7 MB 64 kB/s
     http_req_blocked...............: avg=119.3µs min=1.1µs  med=2.29µs max=14.24ms p(90)=400.04µs p(95)=433µs   
     http_req_connecting............: avg=97.96µs min=0s     med=0s     max=14.17ms p(90)=331.91µs p(95)=363.21µs
     http_req_duration..............: avg=10.71s  min=1.51s  med=8.18s  max=39.35s  p(90)=23.15s   p(95)=27.19s  
       { expected_response:true }...: avg=10.71s  min=1.51s  med=8.18s  max=39.35s  p(90)=23.15s   p(95)=27.19s  
     http_req_failed................: 0.00%  ✓ 0        ✗ 3980  
     http_req_receiving.............: avg=76.99µs min=19.9µs med=44µs   max=25.39ms p(90)=87µs     p(95)=106.8µs 
     http_req_sending...............: avg=32.35µs min=6µs    med=14.9µs max=2.81ms  p(90)=69µs     p(95)=78.7µs  
     http_req_tls_handshaking.......: avg=0s      min=0s     med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=10.71s  min=1.51s  med=8.18s  max=39.35s  p(90)=23.15s   p(95)=27.19s  
     http_reqs......................: 3980   53.66568/s
     iteration_duration.............: avg=10.71s  min=1.52s  med=8.18s  max=39.35s  p(90)=23.15s   p(95)=27.19s  
     iterations.....................: 3980   53.66568/s
     vus............................: 328    min=56     max=1000
     vus_max........................: 1000   min=1000   max=1000
```


**Performance Overview**


**no-image-available**


**HTTP Overview**


**no-image-available**


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 4744 / ✗ 11
     ✗ expected_result
      ↳  99% — ✓ 4753 / ✗ 2

     checks.........................: 99.90% ✓ 14252     ✗ 13    
     data_received..................: 25 MB  287 kB/s
     data_sent......................: 5.6 MB 66 kB/s
     http_req_blocked...............: avg=123.11µs min=1.2µs   med=3.1µs  max=15.38ms p(90)=423.99µs p(95)=485.38µs
     http_req_connecting............: avg=104.73µs min=0s      med=0s     max=15.29ms p(90)=349.85µs p(95)=405.89µs
     http_req_duration..............: avg=9.37s    min=72.62ms med=2.51s  max=58.26s  p(90)=38.68s   p(95)=49.06s  
       { expected_response:true }...: avg=9.37s    min=72.62ms med=2.51s  max=58.26s  p(90)=38.68s   p(95)=49.06s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 4755  
     http_req_receiving.............: avg=79.96µs  min=24.4µs  med=75.5µs max=1.99ms  p(90)=105.45µs p(95)=118.85µs
     http_req_sending...............: avg=43.42µs  min=8.1µs   med=19.3µs max=3.56ms  p(90)=72.59µs  p(95)=87.39µs 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=9.37s    min=72.52ms med=2.51s  max=58.26s  p(90)=38.68s   p(95)=49.06s  
     http_reqs......................: 4755   55.744626/s
     iteration_duration.............: avg=9.37s    min=72.93ms med=2.51s  max=58.26s  p(90)=38.68s   p(95)=49.06s  
     iterations.....................: 4755   55.744626/s
     vus............................: 8      min=8       max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


**no-image-available**


**HTTP Overview**


**no-image-available**


  </details>