## Overview for scenario: `fed-v1-ramping-vus`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. We are running a heavy load of concurrent VUs to measure response time and other stats, during stress. It measure things like memory usage, CPU usage, response times. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was trying to reach 1000 concurrent VUs over 60s


### Comparison


| Gateway                             | duration(p95)⬇️ |  RPS  |       Requests        |                       Durations                        |
| :---------------------------------- | :-------------: | :---: | :-------------------: | :----------------------------------------------------: |
| wundergraph                         |     1576ms      |  595  | 41710 total, 0 failed |    avg: 829ms, p95: 1576ms, max: 2493ms, med: 825ms    |
| mercurius                           |     11894ms     |  72   | 5071 total, 0 failed  |  avg: 7299ms, p95: 11894ms, max: 12280ms, med: 7432ms  |
| apollo-router                       |     14277ms     |  80   | 5805 total, 0 failed  |  avg: 6868ms, p95: 14277ms, max: 19087ms, med: 6058ms  |
| mesh                                |     15511ms     |  59   | 4223 total, 0 failed  |  avg: 9465ms, p95: 15512ms, max: 20611ms, med: 9447ms  |
| stitching-federation-with-yoga-deno |     16272ms     |  55   | 3951 total, 0 failed  | avg: 10142ms, p95: 16272ms, max: 18410ms, med: 10667ms |
| stitching-federation-with-yoga-bun  |     17420ms     |  68   | 4813 total, 0 failed  |  avg: 7828ms, p95: 17420ms, max: 24764ms, med: 6152ms  |
| apollo-gateway-with-yoga            |     22787ms     |  52   | 3859 total, 0 failed  | avg: 10352ms, p95: 22788ms, max: 31498ms, med: 8884ms  |
| stitching-federation-with-yoga      |     24396ms     |  54   | 3946 total, 0 failed  | avg: 10116ms, p95: 24396ms, max: 28664ms, med: 7867ms  |
| apollo-server                       |     46859ms     |  63   | 5329 total, 0 failed  |  avg: 8319ms, p95: 46859ms, max: 57123ms, med: 2316ms  |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 125130    ✗ 0     
     data_received..................: 208 MB  3.0 MB/s
     data_sent......................: 50 MB   707 kB/s
     http_req_blocked...............: avg=400.84µs min=1.4µs   med=2.5µs    max=489.05ms p(90)=3.9µs    p(95)=8.1µs   
     http_req_connecting............: avg=381.13µs min=0s      med=0s       max=423.15ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=828.73ms min=10.96ms med=824.96ms max=2.49s    p(90)=1.39s    p(95)=1.57s   
       { expected_response:true }...: avg=828.73ms min=10.96ms med=824.96ms max=2.49s    p(90)=1.39s    p(95)=1.57s   
     http_req_failed................: 0.00%   ✓ 0         ✗ 41710 
     http_req_receiving.............: avg=1.3ms    min=18.59µs med=54.6µs   max=388.74ms p(90)=266.81µs p(95)=855.31µs
     http_req_sending...............: avg=466.11µs min=8.8µs   med=14.6µs   max=380.69ms p(90)=40.3µs   p(95)=114.8µs 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=826.95ms min=10.82ms med=822.95ms max=2.49s    p(90)=1.39s    p(95)=1.57s   
     http_reqs......................: 41710   595.79703/s
     iteration_duration.............: avg=830.29ms min=11.27ms med=827.24ms max=2.5s     p(90)=1.39s    p(95)=1.57s   
     iterations.....................: 41710   595.79703/s
     vus............................: 7       min=7       max=990 
     vus_max........................: 1000    min=1000    max=1000
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

     checks.........................: 100.00% ✓ 15213     ✗ 0     
     data_received..................: 26 MB   364 kB/s
     data_sent......................: 6.0 MB  86 kB/s
     http_req_blocked...............: avg=132.28µs min=1.2µs   med=2.7µs  max=21.89ms p(90)=438.43µs p(95)=485.54µs
     http_req_connecting............: avg=113.77µs min=0s      med=0s     max=21.79ms p(90)=362.52µs p(95)=408.63µs
     http_req_duration..............: avg=7.29s    min=10.17ms med=7.43s  max=12.27s  p(90)=11.39s   p(95)=11.89s  
       { expected_response:true }...: avg=7.29s    min=10.17ms med=7.43s  max=12.27s  p(90)=11.39s   p(95)=11.89s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 5071  
     http_req_receiving.............: avg=65.82µs  min=20.7µs  med=59.6µs max=2.68ms  p(90)=90.3µs   p(95)=101.65µs
     http_req_sending...............: avg=35.8µs   min=7.2µs   med=15.8µs max=13.34ms p(90)=68.1µs   p(95)=83.3µs  
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=7.29s    min=10.05ms med=7.43s  max=12.27s  p(90)=11.39s   p(95)=11.89s  
     http_reqs......................: 5071    72.433032/s
     iteration_duration.............: avg=7.29s    min=10.56ms med=7.43s  max=12.28s  p(90)=11.39s   p(95)=11.89s  
     iterations.....................: 5071    72.433032/s
     vus............................: 6       min=6       max=1000
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
      ↳  99% — ✓ 5768 / ✗ 37
     ✗ expected_result
      ↳  99% — ✓ 5804 / ✗ 1

     checks.........................: 99.78% ✓ 17377     ✗ 38    
     data_received..................: 29 MB  401 kB/s
     data_sent......................: 6.9 MB 96 kB/s
     http_req_blocked...............: avg=183.04µs min=1.1µs    med=2.5µs   max=33.6ms  p(90)=442.5µs  p(95)=572.38µs
     http_req_connecting............: avg=163.87µs min=0s       med=0s      max=33.56ms p(90)=360.18µs p(95)=483.38µs
     http_req_duration..............: avg=6.86s    min=408.28ms med=6.05s   max=19.08s  p(90)=13.7s    p(95)=14.27s  
       { expected_response:true }...: avg=6.86s    min=408.28ms med=6.05s   max=19.08s  p(90)=13.7s    p(95)=14.27s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 5805  
     http_req_receiving.............: avg=76.78µs  min=24.7µs   med=60.5µs  max=6.93ms  p(90)=106.4µs  p(95)=132.48µs
     http_req_sending...............: avg=61.74µs  min=9.5µs    med=16.89µs max=29.73ms p(90)=74.7µs   p(95)=106.46µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=6.86s    min=408.19ms med=6.05s   max=19.08s  p(90)=13.7s    p(95)=14.27s  
     http_reqs......................: 5805   80.559779/s
     iteration_duration.............: avg=6.86s    min=408.67ms med=6.05s   max=19.08s  p(90)=13.7s    p(95)=14.27s  
     iterations.....................: 5805   80.559779/s
     vus............................: 116    min=52      max=1000
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
      ↳  99% — ✓ 4200 / ✗ 23
     ✗ expected_result
      ↳  99% — ✓ 4217 / ✗ 6

     checks.........................: 99.77% ✓ 12640    ✗ 29    
     data_received..................: 21 MB  297 kB/s
     data_sent......................: 5.0 MB 70 kB/s
     http_req_blocked...............: avg=171.08µs min=1.5µs   med=2.8µs  max=16.81ms p(90)=556.58µs p(95)=641.65µs
     http_req_connecting............: avg=145.34µs min=0s      med=0s     max=16.74ms p(90)=470.88µs p(95)=544.19µs
     http_req_duration..............: avg=9.46s    min=1.49s   med=9.44s  max=20.61s  p(90)=14.73s   p(95)=15.51s  
       { expected_response:true }...: avg=9.46s    min=1.49s   med=9.44s  max=20.61s  p(90)=14.73s   p(95)=15.51s  
     http_req_failed................: 0.00%  ✓ 0        ✗ 4223  
     http_req_receiving.............: avg=89.7µs   min=28.29µs med=70.1µs max=14ms    p(90)=113.7µs  p(95)=138.79µs
     http_req_sending...............: avg=55.88µs  min=10.5µs  med=19µs   max=18.78ms p(90)=80.66µs  p(95)=104.68µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=9.46s    min=1.49s   med=9.44s  max=20.61s  p(90)=14.73s   p(95)=15.51s  
     http_reqs......................: 4223   59.16503/s
     iteration_duration.............: avg=9.46s    min=1.5s    med=9.44s  max=20.61s  p(90)=14.73s   p(95)=15.51s  
     iterations.....................: 4223   59.16503/s
     vus............................: 46     min=46     max=1000
     vus_max........................: 1000   min=1000   max=1000
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
      ↳  99% — ✓ 3948 / ✗ 3
     ✓ expected_result

     checks.........................: 99.97% ✓ 11850     ✗ 3     
     data_received..................: 20 MB  278 kB/s
     data_sent......................: 4.7 MB 66 kB/s
     http_req_blocked...............: avg=727.98µs min=900ns  med=2.5µs  max=65.1ms  p(90)=453.1µs p(95)=500.6µs
     http_req_connecting............: avg=704.22µs min=0s     med=0s     max=64.88ms p(90)=380.4µs p(95)=423µs  
     http_req_duration..............: avg=10.14s   min=1.48s  med=10.66s max=18.4s   p(90)=15.78s  p(95)=16.27s 
       { expected_response:true }...: avg=10.14s   min=1.48s  med=10.66s max=18.4s   p(90)=15.78s  p(95)=16.27s 
     http_req_failed................: 0.00%  ✓ 0         ✗ 3951  
     http_req_receiving.............: avg=94.32µs  min=15.8µs med=45.5µs max=16.56ms p(90)=96.1µs  p(95)=128.4µs
     http_req_sending...............: avg=82.97µs  min=6.4µs  med=16.4µs max=11.23ms p(90)=82.1µs  p(95)=98.45µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=10.14s   min=1.48s  med=10.66s max=18.4s   p(90)=15.78s  p(95)=16.27s 
     http_reqs......................: 3951   55.542542/s
     iteration_duration.............: avg=10.14s   min=1.49s  med=10.66s max=18.41s  p(90)=15.78s  p(95)=16.27s 
     iterations.....................: 3951   55.542542/s
     vus............................: 317    min=56      max=1000
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

     checks.........................: 100.00% ✓ 14439     ✗ 0     
     data_received..................: 24 MB   343 kB/s
     data_sent......................: 5.7 MB  82 kB/s
     http_req_blocked...............: avg=606.6µs  min=1.2µs   med=2.6µs  max=322.39ms p(90)=239.52µs p(95)=506.99µs
     http_req_connecting............: avg=584.71µs min=0s      med=0s     max=321.76ms p(90)=151.96µs p(95)=427.48µs
     http_req_duration..............: avg=7.82s    min=25.95ms med=6.15s  max=24.76s   p(90)=16.34s   p(95)=17.42s  
       { expected_response:true }...: avg=7.82s    min=25.95ms med=6.15s  max=24.76s   p(90)=16.34s   p(95)=17.42s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 4813  
     http_req_receiving.............: avg=432.82µs min=18.2µs  med=48.6µs max=198.12ms p(90)=195.12µs p(95)=332.77µs
     http_req_sending...............: avg=414.41µs min=7.6µs   med=14.5µs max=166.61ms p(90)=105.2µs  p(95)=172.88µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=7.82s    min=25.86ms med=6.15s  max=24.76s   p(90)=16.33s   p(95)=17.41s  
     http_reqs......................: 4813    68.741677/s
     iteration_duration.............: avg=7.82s    min=26.33ms med=6.15s  max=24.76s   p(90)=16.34s   p(95)=17.42s  
     iterations.....................: 4813    68.741677/s
     vus............................: 11      min=11      max=1000
     vus_max........................: 1000    min=1000    max=1000
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
      ↳  72% — ✓ 2805 / ✗ 1054
     ✗ expected_result
      ↳  93% — ✓ 3596 / ✗ 263

     checks.........................: 88.62% ✓ 10260     ✗ 1317  
     data_received..................: 17 MB  225 kB/s
     data_sent......................: 4.6 MB 62 kB/s
     http_req_blocked...............: avg=151.15µs min=1.5µs med=3µs    max=18.22ms p(90)=505.03µs p(95)=564.53µs
     http_req_connecting............: avg=126µs    min=0s    med=0s     max=17.41ms p(90)=423.71µs p(95)=479.54µs
     http_req_duration..............: avg=10.35s   min=1.03s med=8.88s  max=31.49s  p(90)=20.2s    p(95)=22.78s  
       { expected_response:true }...: avg=10.35s   min=1.03s med=8.88s  max=31.49s  p(90)=20.2s    p(95)=22.78s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 3859  
     http_req_receiving.............: avg=75.16µs  min=23µs  med=61.7µs max=9ms     p(90)=98.3µs   p(95)=116.9µs 
     http_req_sending...............: avg=43.02µs  min=8.3µs med=18.9µs max=2.25ms  p(90)=85.2µs   p(95)=104.11µs
     http_req_tls_handshaking.......: avg=0s       min=0s    med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=10.35s   min=1.03s med=8.88s  max=31.49s  p(90)=20.2s    p(95)=22.78s  
     http_reqs......................: 3859   52.445281/s
     iteration_duration.............: avg=10.35s   min=1.04s med=8.88s  max=31.49s  p(90)=20.2s    p(95)=22.78s  
     iterations.....................: 3859   52.445281/s
     vus............................: 78     min=51      max=1000
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
      ↳  80% — ✓ 3181 / ✗ 765
     ✗ expected_result
      ↳  97% — ✓ 3829 / ✗ 117

     checks.........................: 92.54% ✓ 10956     ✗ 882   
     data_received..................: 22 MB  307 kB/s
     data_sent......................: 4.7 MB 64 kB/s
     http_req_blocked...............: avg=384.02µs min=800ns  med=2.2µs   max=35.32ms p(90)=387.59µs p(95)=423.19µs
     http_req_connecting............: avg=365.66µs min=0s     med=0s      max=35.02ms p(90)=321.44µs p(95)=359.22µs
     http_req_duration..............: avg=10.11s   min=1.7s   med=7.86s   max=28.66s  p(90)=20.72s   p(95)=24.39s  
       { expected_response:true }...: avg=10.11s   min=1.7s   med=7.86s   max=28.66s  p(90)=20.72s   p(95)=24.39s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 3946  
     http_req_receiving.............: avg=51.58µs  min=18.3µs med=44.29µs max=1.35ms  p(90)=77.14µs  p(95)=89.37µs 
     http_req_sending...............: avg=54.67µs  min=6µs    med=14µs    max=16.05ms p(90)=66.9µs   p(95)=79.87µs 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=10.11s   min=1.7s   med=7.86s   max=28.66s  p(90)=20.72s   p(95)=24.39s  
     http_reqs......................: 3946   54.266762/s
     iteration_duration.............: avg=10.11s   min=1.7s   med=7.86s   max=28.66s  p(90)=20.72s   p(95)=24.39s  
     iterations.....................: 3946   54.266762/s
     vus............................: 76     min=57      max=1000
     vus_max........................: 1000   min=1000    max=1000
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
      ↳  99% — ✓ 5322 / ✗ 7
     ✗ expected_result
      ↳  99% — ✓ 5328 / ✗ 1

     checks.........................: 99.94% ✓ 15979     ✗ 8     
     data_received..................: 28 MB  326 kB/s
     data_sent......................: 6.3 MB 75 kB/s
     http_req_blocked...............: avg=107.97µs min=1.1µs   med=2.5µs   max=15.21ms p(90)=355.5µs p(95)=412.76µs
     http_req_connecting............: avg=92.27µs  min=0s      med=0s      max=15.15ms p(90)=291µs   p(95)=341.76µs
     http_req_duration..............: avg=8.31s    min=59.9ms  med=2.31s   max=57.12s  p(90)=36.33s  p(95)=46.85s  
       { expected_response:true }...: avg=8.31s    min=59.9ms  med=2.31s   max=57.12s  p(90)=36.33s  p(95)=46.85s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 5329  
     http_req_receiving.............: avg=69.29µs  min=24.29µs med=64.69µs max=14.98ms p(90)=90.3µs  p(95)=96.4µs  
     http_req_sending...............: avg=38.5µs   min=7.7µs   med=16µs    max=1.88ms  p(90)=62.6µs  p(95)=73.95µs 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=8.31s    min=59.83ms med=2.31s   max=57.12s  p(90)=36.33s  p(95)=46.85s  
     http_reqs......................: 5329   63.333759/s
     iteration_duration.............: avg=8.31s    min=60.2ms  med=2.31s   max=57.12s  p(90)=36.33s  p(95)=46.86s  
     iterations.....................: 5329   63.333759/s
     vus............................: 7      min=7       max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


**no-image-available**


**HTTP Overview**


**no-image-available**


  </details>