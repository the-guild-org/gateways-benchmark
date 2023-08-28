## Overview for: `fed-v1-ramping-vus`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. We are running a heavy load of concurrent VUs to measure response time and other stats, during stress. It measure things like memory usage, CPU usage, response times. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was trying to reach 1500 concurrent VUs over 300s


### Comparison


| Gateway                             | duration(p95)⬇️ |  RPS  |         Requests         |                       Durations                        |
| :---------------------------------- | :-------------: | :---: | :----------------------: | :----------------------------------------------------: |
| mesh-bun                            |     2061ms      |  830  |  257505 total, 0 failed  |    avg: 920ms, p95: 2062ms, max: 4338ms, med: 819ms    |
| wundergraph                         |     2524ms      |  625  |  193772 total, 0 failed  |   avg: 1204ms, p95: 2525ms, max: 4483ms, med: 1102ms   |
| stitching-federation-with-yoga-bun  |     12408ms     |  149  |  46305 total, 0 failed   |  avg: 5237ms, p95: 12409ms, max: 31898ms, med: 4927ms  |
| mercurius                           |     16831ms     |  88   |  27578 total, 0 failed   |  avg: 8766ms, p95: 16831ms, max: 18046ms, med: 8652ms  |
| apollo-router                       |     17212ms     |  81   |  26172 total, 0 failed   |  avg: 9537ms, p95: 17212ms, max: 18562ms, med: 9435ms  |
| stitching-federation-with-yoga-deno |     19629ms     |  85   |  26656 total, 0 failed   |  avg: 9171ms, p95: 19630ms, max: 37282ms, med: 8932ms  |
| apollo-gateway-with-yoga-bun        |     22400ms     |  82   |  25844 total, 0 failed   |  avg: 9417ms, p95: 22400ms, max: 46291ms, med: 8721ms  |
| mesh                                |     24030ms     |  62   |  19876 total, 0 failed   | avg: 12589ms, p95: 24031ms, max: 31590ms, med: 11957ms |
| mesh-supergraph                     |     26731ms     |  57   |  18416 total, 0 failed   | avg: 13804ms, p95: 26732ms, max: 33590ms, med: 12869ms |
| stitching-federation-with-yoga-uws  |     32510ms     |  81   |  25679 total, 0 failed   |  avg: 9614ms, p95: 32511ms, max: 51217ms, med: 5102ms  |
| apollo-gateway-with-yoga-uws        |     36983ms     |  59   |  18666 total, 0 failed   | avg: 13136ms, p95: 36984ms, max: 58767ms, med: 7064ms  |
| apollo-gateway-with-yoga            |     60000ms     |  46   | 15395 total, 3044 failed | avg: 16105ms, p95: 60001ms, max: 60047ms, med: 4386ms  |
| apollo-server                       |     60000ms     |  61   | 20450 total, 2789 failed | avg: 12367ms, p95: 60000ms, max: 60038ms, med: 3985ms  |
| apollo-server-node16                |     60000ms     |  38   | 13058 total, 712 failed  | avg: 19141ms, p95: 60000ms, max: 60031ms, med: 10955ms |
| stitching-federation-with-yoga      |     60000ms     |  64   | 21425 total, 2890 failed | avg: 11817ms, p95: 60000ms, max: 60044ms, med: 3434ms  |



<details>
  <summary>Summary for: `mesh-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  0% — ✓ 0 / ✗ 257505
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 257505

     checks.........................: 33.33% ✓ 257505     ✗ 515010
     data_received..................: 245 MB 790 kB/s
     data_sent......................: 306 MB 986 kB/s
     http_req_blocked...............: avg=88.46µs  min=700ns  med=1.5µs    max=635.09ms p(90)=2.1µs  p(95)=2.7µs   
     http_req_connecting............: avg=82.8µs   min=0s     med=0s       max=634.55ms p(90)=0s     p(95)=0s      
     http_req_duration..............: avg=919.64ms min=1.28ms med=818.63ms max=4.33s    p(90)=1.8s   p(95)=2.06s   
       { expected_response:true }...: avg=919.64ms min=1.28ms med=818.63ms max=4.33s    p(90)=1.8s   p(95)=2.06s   
     http_req_failed................: 0.00%  ✓ 0          ✗ 257505
     http_req_receiving.............: avg=607.71µs min=9.79µs med=17.7µs   max=269.81ms p(90)=49.7µs p(95)=163.58µs
     http_req_sending...............: avg=149.47µs min=4.4µs  med=8.69µs   max=253.82ms p(90)=30.8µs p(95)=115.1µs 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s       max=0s       p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=918.88ms min=1.25ms med=818.03ms max=4.33s    p(90)=1.8s   p(95)=2.05s   
     http_reqs......................: 257505 830.656024/s
     iteration_duration.............: avg=920.84ms min=1.45ms med=819.19ms max=4.33s    p(90)=1.8s   p(95)=2.06s   
     iterations.....................: 257505 830.656024/s
     vus............................: 10     min=10       max=1500
     vus_max........................: 1500   min=1500     max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c8a0ecc9-de9a-4a24-e5b6-3033d865cc00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/df834d68-6f94-4731-f949-2ff82e07cc00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 581316     ✗ 0     
     data_received..................: 965 MB  3.1 MB/s
     data_sent......................: 230 MB  742 kB/s
     http_req_blocked...............: avg=1.28ms min=1µs     med=2.7µs  max=1.47s p(90)=4.3µs   p(95)=5.7µs  
     http_req_connecting............: avg=1.27ms min=0s      med=0s     max=1.47s p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=1.2s   min=9.47ms  med=1.1s   max=4.48s p(90)=2.21s   p(95)=2.52s  
       { expected_response:true }...: avg=1.2s   min=9.47ms  med=1.1s   max=4.48s p(90)=2.21s   p(95)=2.52s  
     http_req_failed................: 0.00%   ✓ 0          ✗ 193772
     http_req_receiving.............: avg=7.66ms min=14.5µs  med=40.1µs max=1.09s p(90)=239.9µs p(95)=1.42ms 
     http_req_sending...............: avg=2.39ms min=6.7µs   med=14.1µs max=1.57s p(90)=34µs    p(95)=135.8µs
     http_req_tls_handshaking.......: avg=0s     min=0s      med=0s     max=0s    p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=1.19s  min=9.39ms  med=1.09s  max=4.34s p(90)=2.18s   p(95)=2.47s  
     http_reqs......................: 193772  625.037595/s
     iteration_duration.............: avg=1.22s  min=10.28ms med=1.11s  max=4.48s p(90)=2.26s   p(95)=2.59s  
     iterations.....................: 193772  625.037595/s
     vus............................: 2       min=0        max=1498
     vus_max........................: 1500    min=1379     max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2c7062e2-6d94-4662-98f0-880b51460b00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5a588d64-0dfa-4220-f809-fa65e9addd00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 138915     ✗ 0     
     data_received..................: 231 MB  744 kB/s
     data_sent......................: 55 MB   177 kB/s
     http_req_blocked...............: avg=188.69µs min=800ns    med=1.8µs  max=395.35ms p(90)=3µs    p(95)=9µs     
     http_req_connecting............: avg=181.6µs  min=0s       med=0s     max=395.27ms p(90)=0s     p(95)=0s      
     http_req_duration..............: avg=5.23s    min=142.66ms med=4.92s  max=31.89s   p(90)=7.42s  p(95)=12.4s   
       { expected_response:true }...: avg=5.23s    min=142.66ms med=4.92s  max=31.89s   p(90)=7.42s  p(95)=12.4s   
     http_req_failed................: 0.00%   ✓ 0          ✗ 46305 
     http_req_receiving.............: avg=552.96µs min=12.7µs   med=26.8µs max=328.72ms p(90)=55µs   p(95)=182.06µs
     http_req_sending...............: avg=356.1µs  min=6µs      med=10µs   max=537.44ms p(90)=32.7µs p(95)=93.6µs  
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=5.23s    min=142.61ms med=4.92s  max=31.89s   p(90)=7.42s  p(95)=12.4s   
     http_reqs......................: 46305   149.370005/s
     iteration_duration.............: avg=5.23s    min=143.19ms med=4.92s  max=31.89s   p(90)=7.42s  p(95)=12.4s   
     iterations.....................: 46305   149.370005/s
     vus............................: 193     min=50       max=1500
     vus_max........................: 1500    min=1500     max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/df50c50a-92c7-43c4-d2df-704f9ace8a00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/68cef69a-2a5d-4e29-5cee-554ba8038b00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 82734     ✗ 0     
     data_received..................: 139 MB  448 kB/s
     data_sent......................: 33 MB   106 kB/s
     http_req_blocked...............: avg=74.76µs min=1µs    med=2.5µs  max=48.1ms  p(90)=4µs    p(95)=169.31µs
     http_req_connecting............: avg=67.17µs min=0s     med=0s     max=47.76ms p(90)=0s     p(95)=109.14µs
     http_req_duration..............: avg=8.76s   min=9.17ms med=8.65s  max=18.04s  p(90)=15.39s p(95)=16.83s  
       { expected_response:true }...: avg=8.76s   min=9.17ms med=8.65s  max=18.04s  p(90)=15.39s p(95)=16.83s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 27578 
     http_req_receiving.............: avg=57.32µs min=18.3µs med=48.7µs max=41.45ms p(90)=76µs   p(95)=83µs    
     http_req_sending...............: avg=29.32µs min=5.9µs  med=14.2µs max=18.28ms p(90)=30.7µs p(95)=56.09µs 
     http_req_tls_handshaking.......: avg=0s      min=0s     med=0s     max=0s      p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=8.76s   min=9.07ms med=8.65s  max=18.04s  p(90)=15.39s p(95)=16.83s  
     http_reqs......................: 27578   88.957435/s
     iteration_duration.............: avg=8.76s   min=9.77ms med=8.65s  max=18.04s  p(90)=15.39s p(95)=16.83s  
     iterations.....................: 27578   88.957435/s
     vus............................: 80      min=50      max=1500
     vus_max........................: 1500    min=1500    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4a74e0be-655a-4293-c947-9b379b22aa00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e5eab5ed-1bae-4f39-64a8-822702d13900/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 26159 / ✗ 13
     ✗ valid response structure
      ↳  99% — ✓ 26159 / ✗ 13

     checks.........................: 99.96% ✓ 78490     ✗ 26    
     data_received..................: 130 MB 408 kB/s
     data_sent......................: 31 MB  97 kB/s
     http_req_blocked...............: avg=58.47µs min=1.2µs    med=3µs    max=79.82ms p(90)=8.8µs   p(95)=274.36µs
     http_req_connecting............: avg=48.18µs min=0s       med=0s     max=79.52ms p(90)=0s      p(95)=180.39µs
     http_req_duration..............: avg=9.53s   min=436.07ms med=9.43s  max=18.56s  p(90)=16.2s   p(95)=17.21s  
       { expected_response:true }...: avg=9.53s   min=436.07ms med=9.43s  max=18.56s  p(90)=16.2s   p(95)=17.21s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 26172 
     http_req_receiving.............: avg=86.12µs min=27.1µs   med=71µs   max=25.09ms p(90)=114.6µs p(95)=138.94µs
     http_req_sending...............: avg=44.69µs min=9.6µs    med=17.8µs max=25.03ms p(90)=50.6µs  p(95)=73.8µs  
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s     max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=9.53s   min=435.99ms med=9.43s  max=18.56s  p(90)=16.2s   p(95)=17.21s  
     http_reqs......................: 26172  81.847507/s
     iteration_duration.............: avg=9.53s   min=436.93ms med=9.43s  max=18.56s  p(90)=16.2s   p(95)=17.21s  
     iterations.....................: 26172  81.847507/s
     vus............................: 16     min=0       max=1499
     vus_max........................: 1500   min=1230    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/aad825e6-3a1b-479b-0ee5-30bfdcf7da00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/08b630aa-d0ae-4333-966c-0bd5f7260200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-deno`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  97% — ✓ 25877 / ✗ 779
     ✗ valid response structure
      ↳  97% — ✓ 25877 / ✗ 779

     checks.........................: 98.05% ✓ 78410     ✗ 1558  
     data_received..................: 143 MB 459 kB/s
     data_sent......................: 32 MB  102 kB/s
     http_req_blocked...............: avg=211.8µs  min=1.1µs    med=2.4µs  max=104.7ms  p(90)=4.59µs  p(95)=203.6µs 
     http_req_connecting............: avg=202.67µs min=0s       med=0s     max=104.67ms p(90)=0s      p(95)=135.3µs 
     http_req_duration..............: avg=9.17s    min=664.8ms  med=8.93s  max=37.28s   p(90)=16.84s  p(95)=19.62s  
       { expected_response:true }...: avg=9.17s    min=664.8ms  med=8.93s  max=37.28s   p(90)=16.84s  p(95)=19.62s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 26656 
     http_req_receiving.............: avg=96.53µs  min=16.4µs   med=35.6µs max=32.02ms  p(90)=84.5µs  p(95)=111.62µs
     http_req_sending...............: avg=66.27µs  min=6.7µs    med=13.1µs max=26.93ms  p(90)=51.65µs p(95)=97.2µs  
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=9.17s    min=663.63ms med=8.93s  max=37.28s   p(90)=16.84s  p(95)=19.62s  
     http_reqs......................: 26656  85.652734/s
     iteration_duration.............: avg=9.17s    min=686ms    med=8.93s  max=37.28s   p(90)=16.84s  p(95)=19.63s  
     iterations.....................: 26656  85.652734/s
     vus............................: 106    min=50      max=1500
     vus_max........................: 1500   min=1500    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/91335855-4c25-4b49-3bf4-d5ad5d372a00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b3c849c4-5630-4a1d-ae94-083bfb32e900/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 77532     ✗ 0     
     data_received..................: 129 MB  412 kB/s
     data_sent......................: 31 MB   98 kB/s
     http_req_blocked...............: avg=244.91µs min=1.1µs    med=2.4µs  max=523.11ms p(90)=4.4µs   p(95)=147.6µs
     http_req_connecting............: avg=225.58µs min=0s       med=0s     max=460.38ms p(90)=0s      p(95)=92.5µs 
     http_req_duration..............: avg=9.41s    min=506.04ms med=8.72s  max=46.29s   p(90)=16.1s   p(95)=22.4s  
       { expected_response:true }...: avg=9.41s    min=506.04ms med=8.72s  max=46.29s   p(90)=16.1s   p(95)=22.4s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 25844 
     http_req_receiving.............: avg=577.45µs min=17.6µs   med=40.2µs max=271.5ms  p(90)=76.27µs p(95)=223.5µs
     http_req_sending...............: avg=527.51µs min=7.3µs    med=12.6µs max=474.1ms  p(90)=51.97µs p(95)=103.7µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=9.41s    min=505.84ms med=8.71s  max=46.29s   p(90)=16.1s   p(95)=22.39s 
     http_reqs......................: 25844   82.641149/s
     iteration_duration.............: avg=9.41s    min=508.02ms med=8.72s  max=46.52s   p(90)=16.1s   p(95)=22.4s  
     iterations.....................: 25844   82.641149/s
     vus............................: 198     min=50      max=1500
     vus_max........................: 1500    min=1500    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/15863e6f-5d66-4fc8-0987-0ec5d1416b00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c438dd85-6928-4d06-5767-92bc6750be00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  98% — ✓ 19622 / ✗ 254
     ✗ valid response structure
      ↳  98% — ✓ 19622 / ✗ 254

     checks.........................: 99.14% ✓ 59120     ✗ 508   
     data_received..................: 102 MB 321 kB/s
     data_sent......................: 24 MB  75 kB/s
     http_req_blocked...............: avg=105.84µs min=1.6µs  med=3.3µs   max=233.19ms p(90)=14.9µs  p(95)=563.3µs 
     http_req_connecting............: avg=92.78µs  min=0s     med=0s      max=233.1ms  p(90)=0s      p(95)=479.32µs
     http_req_duration..............: avg=12.58s   min=1.1s   med=11.95s  max=31.59s   p(90)=22.29s  p(95)=24.03s  
       { expected_response:true }...: avg=12.58s   min=1.1s   med=11.95s  max=31.59s   p(90)=22.29s  p(95)=24.03s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 19876 
     http_req_receiving.............: avg=98.5µs   min=28.2µs med=73.09µs max=44.95ms  p(90)=113.5µs p(95)=138.6µs 
     http_req_sending...............: avg=75.8µs   min=10.5µs med=19µs    max=113.79ms p(90)=55.3µs  p(95)=79.69µs 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=12.58s   min=1.1s   med=11.95s  max=31.58s   p(90)=22.29s  p(95)=24.03s  
     http_reqs......................: 19876  62.817951/s
     iteration_duration.............: avg=12.58s   min=1.1s   med=11.95s  max=31.59s   p(90)=22.29s  p(95)=24.03s  
     iterations.....................: 19876  62.817951/s
     vus............................: 268    min=0       max=1500
     vus_max........................: 1500   min=958     max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4bd69adf-e3e3-4369-3d46-b504723d4000/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4b4efaac-f535-438f-0dd9-41cd7c3a9300/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  98% — ✓ 18200 / ✗ 216
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 18416

     checks.........................: 66.27% ✓ 36616     ✗ 18632 
     data_received..................: 96 MB  301 kB/s
     data_sent......................: 22 MB  69 kB/s
     http_req_blocked...............: avg=78.4µs   min=1.7µs  med=3.6µs  max=32.45ms p(90)=19.2µs  p(95)=587.87µs
     http_req_connecting............: avg=62.73µs  min=0s     med=0s     max=26.84ms p(90)=0s      p(95)=489.07µs
     http_req_duration..............: avg=13.8s    min=1.6s   med=12.86s max=33.59s  p(90)=24.86s  p(95)=26.73s  
       { expected_response:true }...: avg=13.8s    min=1.6s   med=12.86s max=33.59s  p(90)=24.86s  p(95)=26.73s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 18416 
     http_req_receiving.............: avg=105.77µs min=25.2µs med=81.3µs max=28.92ms p(90)=132.5µs p(95)=166.8µs 
     http_req_sending...............: avg=48.23µs  min=10.1µs med=22.5µs max=23.88ms p(90)=60.8µs  p(95)=84.8µs  
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=13.8s    min=1.6s   med=12.86s max=33.59s  p(90)=24.86s  p(95)=26.73s  
     http_reqs......................: 18416  57.826521/s
     iteration_duration.............: avg=13.8s    min=1.6s   med=12.87s max=33.59s  p(90)=24.86s  p(95)=26.73s  
     iterations.....................: 18416  57.826521/s
     vus............................: 267    min=0       max=1500
     vus_max........................: 1500   min=1077    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/81d4b66c-07e3-47c7-641f-e61f0843ac00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0d5f29c5-3681-46a6-70f4-00e46b07bd00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-uws`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  78% — ✓ 20163 / ✗ 5516
     ✗ valid response structure
      ↳  78% — ✓ 20163 / ✗ 5516

     checks.........................: 85.67% ✓ 66005     ✗ 11032 
     data_received..................: 176 MB 560 kB/s
     data_sent......................: 31 MB  97 kB/s
     http_req_blocked...............: avg=171.83µs min=1.1µs   med=2.8µs  max=324.24ms p(90)=7.2µs  p(95)=198.1µs
     http_req_connecting............: avg=160.58µs min=0s      med=0s     max=294.45ms p(90)=0s     p(95)=127.6µs
     http_req_duration..............: avg=9.61s    min=48.73ms med=5.1s   max=51.21s   p(90)=27.19s p(95)=32.51s 
       { expected_response:true }...: avg=9.61s    min=48.73ms med=5.1s   max=51.21s   p(90)=27.19s p(95)=32.51s 
     http_req_failed................: 0.00%  ✓ 0         ✗ 25679 
     http_req_receiving.............: avg=121.02µs min=18.2µs  med=55.4µs max=170.56ms p(90)=96µs   p(95)=130.2µs
     http_req_sending...............: avg=98.59µs  min=7.2µs   med=15.5µs max=208.78ms p(90)=38µs   p(95)=77.4µs 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s       p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=9.61s    min=48.66ms med=5.1s   max=51.21s   p(90)=27.19s p(95)=32.5s  
     http_reqs......................: 25679  81.725788/s
     iteration_duration.............: avg=9.61s    min=49.3ms  med=5.1s   max=51.21s   p(90)=27.19s p(95)=32.51s 
     iterations.....................: 25679  81.725788/s
     vus............................: 150    min=0       max=1499
     vus_max........................: 1500   min=1495    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/bd0893c3-0435-403b-5c60-e60619b9c500/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/60d5ffa1-687f-4dca-6c98-9dcebc30d800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga-uws`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  61% — ✓ 11496 / ✗ 7170
     ✗ valid response structure
      ↳  61% — ✓ 11496 / ✗ 7170

     checks.........................: 74.39% ✓ 41658     ✗ 14340 
     data_received..................: 79 MB  249 kB/s
     data_sent......................: 22 MB  70 kB/s
     http_req_blocked...............: avg=60.77µs min=1.3µs    med=2.8µs  max=47.06ms p(90)=15.15µs p(95)=473.49µs
     http_req_connecting............: avg=48.58µs min=0s       med=0s     max=46.88ms p(90)=0s      p(95)=394.36µs
     http_req_duration..............: avg=13.13s  min=363.57ms med=7.06s  max=58.76s  p(90)=33.2s   p(95)=36.98s  
       { expected_response:true }...: avg=13.13s  min=363.57ms med=7.06s  max=58.76s  p(90)=33.2s   p(95)=36.98s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 18666 
     http_req_receiving.............: avg=78.18µs min=16.89µs  med=58.5µs max=18.99ms p(90)=89.9µs  p(95)=103.07µs
     http_req_sending...............: avg=58.3µs  min=8.4µs    med=15.7µs max=57.33ms p(90)=54.6µs  p(95)=82.67µs 
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s     max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=13.13s  min=363.5ms  med=7.06s  max=58.76s  p(90)=33.2s   p(95)=36.98s  
     http_reqs......................: 18666  59.058164/s
     iteration_duration.............: avg=13.13s  min=364.32ms med=7.06s  max=58.76s  p(90)=33.2s   p(95)=36.98s  
     iterations.....................: 18666  59.058164/s
     vus............................: 91     min=0       max=1500
     vus_max........................: 1500   min=1193    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0ab226bc-b724-4584-632f-edbd5303f700/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b43ca024-720e-4b75-4653-50cd09c8ca00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  80% — ✓ 12351 / ✗ 3044
     ✗ no graphql errors
      ↳  77% — ✓ 11992 / ✗ 3403
     ✗ valid response structure
      ↳  97% — ✓ 11992 / ✗ 359

     checks.........................: 84.22% ✓ 36335     ✗ 6806  
     data_received..................: 62 MB  184 kB/s
     data_sent......................: 19 MB  56 kB/s
     http_req_blocked...............: avg=336.31µs min=1.5µs    med=3.5µs  max=24.33ms p(90)=620.78µs p(95)=1.4ms   
     http_req_connecting............: avg=297.67µs min=0s       med=0s     max=24.24ms p(90)=504.34µs p(95)=1.2ms   
     http_req_duration..............: avg=16.1s    min=152.66ms med=4.38s  max=1m0s    p(90)=1m0s     p(95)=1m0s    
       { expected_response:true }...: avg=5.28s    min=152.66ms med=4.25s  max=59.39s  p(90)=5.28s    p(95)=6.3s    
     http_req_failed................: 19.77% ✓ 3044      ✗ 12351 
     http_req_receiving.............: avg=81.51µs  min=0s       med=73.2µs max=7.57ms  p(90)=128.7µs  p(95)=163.39µs
     http_req_sending...............: avg=80.55µs  min=9.4µs    med=23.8µs max=32.95ms p(90)=84.1µs   p(95)=130.72µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=16.1s    min=152.51ms med=4.38s  max=1m0s    p(90)=59.99s   p(95)=1m0s    
     http_reqs......................: 15395  46.033149/s
     iteration_duration.............: avg=16.1s    min=153.76ms med=4.38s  max=1m0s    p(90)=1m0s     p(95)=1m0s    
     iterations.....................: 15395  46.033149/s
     vus............................: 4      min=0       max=1500
     vus_max........................: 1500   min=877     max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/63a67d03-39b6-49c9-e78f-cc29845aec00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5560153e-6573-462c-92c4-58a29529d000/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  86% — ✓ 17661 / ✗ 2789
     ✗ no graphql errors
      ↳  85% — ✓ 17583 / ✗ 2867
     ✗ valid response structure
      ↳  99% — ✓ 17583 / ✗ 78

     checks.........................: 90.20% ✓ 52827     ✗ 5734  
     data_received..................: 91 MB  272 kB/s
     data_sent......................: 24 MB  73 kB/s
     http_req_blocked...............: avg=287.25µs min=1.4µs    med=3.1µs  max=24.1ms  p(90)=375.82µs p(95)=869.25µs
     http_req_connecting............: avg=263.7µs  min=0s       med=0s     max=24.03ms p(90)=300.91µs p(95)=695.82µs
     http_req_duration..............: avg=12.36s   min=106.4ms  med=3.98s  max=1m0s    p(90)=59.99s   p(95)=1m0s    
       { expected_response:true }...: avg=4.84s    min=106.4ms  med=3.91s  max=59.93s  p(90)=4.52s    p(95)=5.51s   
     http_req_failed................: 13.63% ✓ 2789      ✗ 17661 
     http_req_receiving.............: avg=65.89µs  min=0s       med=65.4µs max=13.35ms p(90)=93.6µs   p(95)=102.95µs
     http_req_sending...............: avg=43.09µs  min=7.9µs    med=17.5µs max=20.13ms p(90)=55.4µs   p(95)=73.65µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=12.36s   min=106.31ms med=3.98s  max=1m0s    p(90)=59.99s   p(95)=1m0s    
     http_reqs......................: 20450  61.155642/s
     iteration_duration.............: avg=12.36s   min=107.05ms med=3.98s  max=1m0s    p(90)=1m0s     p(95)=1m0s    
     iterations.....................: 20450  61.155642/s
     vus............................: 14     min=4       max=1500
     vus_max........................: 1500   min=1500    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4c10f0d4-5c17-4faf-b7d5-2704acf8cb00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4c24610c-ee84-40d4-f52e-19a232635400/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server-node16`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  94% — ✓ 12346 / ✗ 712
     ✗ no graphql errors
      ↳  39% — ✓ 5150 / ✗ 7908
     ✗ valid response structure
      ↳  41% — ✓ 5150 / ✗ 7196

     checks.........................: 58.87% ✓ 22646     ✗ 15816 
     data_received..................: 48 MB  142 kB/s
     data_sent......................: 16 MB  47 kB/s
     http_req_blocked...............: avg=303.28µs min=1.5µs    med=3.4µs  max=82.39ms p(90)=403.81µs p(95)=637.01µs
     http_req_connecting............: avg=280.71µs min=0s       med=0s     max=67.44ms p(90)=330.43µs p(95)=537.03µs
     http_req_duration..............: avg=19.14s   min=146.61ms med=10.95s max=1m0s    p(90)=47.61s   p(95)=1m0s    
       { expected_response:true }...: avg=16.78s   min=146.61ms med=10.19s max=59.98s  p(90)=40.18s   p(95)=47.49s  
     http_req_failed................: 5.45%  ✓ 712       ✗ 12346 
     http_req_receiving.............: avg=89.93µs  min=0s       med=76.6µs max=8.94ms  p(90)=120.33µs p(95)=143.6µs 
     http_req_sending...............: avg=54.99µs  min=9µs      med=20.5µs max=15.05ms p(90)=77.1µs   p(95)=102.7µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=19.14s   min=146.47ms med=10.95s max=1m0s    p(90)=47.61s   p(95)=1m0s    
     http_reqs......................: 13058  38.787558/s
     iteration_duration.............: avg=19.14s   min=147.49ms med=10.95s max=1m0s    p(90)=47.61s   p(95)=1m0s    
     iterations.....................: 13058  38.787558/s
     vus............................: 8      min=0       max=1498
     vus_max........................: 1500   min=1168    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/59bcef02-0894-4db7-4391-29a4c2589700/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/81e0f8a2-b9a3-446a-f68e-f5db5aead200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  86% — ✓ 18535 / ✗ 2890
     ✗ no graphql errors
      ↳  86% — ✓ 18481 / ✗ 2944
     ✗ valid response structure
      ↳  99% — ✓ 18481 / ✗ 54

     checks.........................: 90.40% ✓ 55497     ✗ 5888  
     data_received..................: 94 MB  281 kB/s
     data_sent......................: 26 MB  77 kB/s
     http_req_blocked...............: avg=273.41µs min=1.6µs   med=4µs    max=40.07ms p(90)=463.7µs  p(95)=996.59µs
     http_req_connecting............: avg=239.51µs min=0s      med=0s     max=36.64ms p(90)=370.29µs p(95)=768.81µs
     http_req_duration..............: avg=11.81s   min=73.97ms med=3.43s  max=1m0s    p(90)=59.99s   p(95)=1m0s    
       { expected_response:true }...: avg=4.3s     min=73.97ms med=3.36s  max=59.58s  p(90)=3.8s     p(95)=5.34s   
     http_req_failed................: 13.48% ✓ 2890      ✗ 18535 
     http_req_receiving.............: avg=84µs     min=0s      med=76.8µs max=24.92ms p(90)=115.91µs p(95)=134.79µs
     http_req_sending...............: avg=80.64µs  min=9.6µs   med=23.2µs max=33.38ms p(90)=72.2µs   p(95)=102.4µs 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=11.81s   min=73.85ms med=3.43s  max=1m0s    p(90)=59.99s   p(95)=1m0s    
     http_reqs......................: 21425  64.063714/s
     iteration_duration.............: avg=11.81s   min=75.08ms med=3.43s  max=1m0s    p(90)=1m0s     p(95)=1m0s    
     iterations.....................: 21425  64.063714/s
     vus............................: 26     min=0       max=1500
     vus_max........................: 1500   min=1175    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7d7032fc-2c8d-4069-0113-6368a6ed8700/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/eef34c6d-b5b1-4a88-ae0a-c0fb351d8f00/public" alt="HTTP Overview" />


  </details>