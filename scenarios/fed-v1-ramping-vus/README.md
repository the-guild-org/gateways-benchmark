## Overview for: `fed-v1-ramping-vus`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. We are running a heavy load of concurrent VUs to measure response time and other stats, during stress. It measure things like memory usage, CPU usage, response times. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was trying to reach 1500 concurrent VUs over 300s


### Comparison


| Gateway                             | duration(p95)⬇️ |  RPS  |         Requests         |                       Durations                        |
| :---------------------------------- | :-------------: | :---: | :----------------------: | :----------------------------------------------------: |
| wundergraph                         |     2344ms      |  670  |  207726 total, 0 failed  |   avg: 1134ms, p95: 2344ms, max: 4055ms, med: 1083ms   |
| stitching-federation-with-yoga-bun  |     13542ms     |  140  |  43774 total, 0 failed   |  avg: 5557ms, p95: 13542ms, max: 35117ms, med: 5019ms  |
| mesh-supergraph                     |     17311ms     |  88   |  27581 total, 0 failed   |  avg: 8866ms, p95: 17312ms, max: 23285ms, med: 8581ms  |
| mercurius                           |     19748ms     |  73   |  22695 total, 0 failed   | avg: 10690ms, p95: 19749ms, max: 20935ms, med: 10262ms |
| mesh                                |     20083ms     |  75   |  23763 total, 0 failed   | avg: 10548ms, p95: 20083ms, max: 26545ms, med: 10115ms |
| stitching-federation-with-yoga-deno |     20623ms     |  79   |  25073 total, 0 failed   |  avg: 9956ms, p95: 20624ms, max: 34096ms, med: 9674ms  |
| apollo-router                       |     24572ms     |  69   |  22038 total, 47 failed  | avg: 11149ms, p95: 24573ms, max: 36485ms, med: 10426ms |
| apollo-gateway-with-yoga-uws        |     40742ms     |  52   |  16778 total, 0 failed   | avg: 15196ms, p95: 40743ms, max: 54460ms, med: 8720ms  |
| apollo-server-node16                |     45565ms     |  41   |  13878 total, 37 failed  | avg: 17480ms, p95: 45565ms, max: 60007ms, med: 11771ms |
| apollo-gateway-with-yoga            |     60000ms     |  47   | 15757 total, 2990 failed | avg: 15823ms, p95: 60001ms, max: 60040ms, med: 4492ms  |
| apollo-server                       |     60000ms     |  61   | 20431 total, 2770 failed | avg: 12414ms, p95: 60000ms, max: 60029ms, med: 4128ms  |
| stitching-federation-with-yoga      |     60000ms     |  74   | 24848 total, 2787 failed | avg: 10146ms, p95: 60000ms, max: 60046ms, med: 3152ms  |
| stitching-federation-with-yoga-uws  |     60000ms     |  46   | 15791 total, 974 failed  | avg: 15311ms, p95: 60000ms, max: 60062ms, med: 6788ms  |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 623178    ✗ 0     
     data_received..................: 1.0 GB  3.3 MB/s
     data_sent......................: 247 MB  795 kB/s
     http_req_blocked...............: avg=871.05µs min=1.1µs  med=2.5µs  max=1.2s     p(90)=4.2µs   p(95)=5.5µs   
     http_req_connecting............: avg=858.66µs min=0s     med=0s     max=1.2s     p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=1.13s    min=7.34ms med=1.08s  max=4.05s    p(90)=2.07s   p(95)=2.34s   
       { expected_response:true }...: avg=1.13s    min=7.34ms med=1.08s  max=4.05s    p(90)=2.07s   p(95)=2.34s   
     http_req_failed................: 0.00%   ✓ 0         ✗ 207726
     http_req_receiving.............: avg=4.39ms   min=15.2µs med=39µs   max=1.22s    p(90)=208.6µs p(95)=767.78µs
     http_req_sending...............: avg=1.42ms   min=7.2µs  med=12.6µs max=732.29ms p(90)=29.3µs  p(95)=118.9µs 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=1.12s    min=7.17ms med=1.07s  max=4.05s    p(90)=2.05s   p(95)=2.32s   
     http_reqs......................: 207726  670.07713/s
     iteration_duration.............: avg=1.14s    min=7.98ms med=1.09s  max=4.39s    p(90)=2.08s   p(95)=2.36s   
     iterations.....................: 207726  670.07713/s
     vus............................: 11      min=11      max=1500
     vus_max........................: 1500    min=1500    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/03e53731-c1c5-4836-71eb-1a47f2c09200/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/35053d38-0807-4993-d584-8694ee8f5700/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 43764 / ✗ 10
     ✗ valid response structure
      ↳  99% — ✓ 43764 / ✗ 10

     checks.........................: 99.98% ✓ 131302     ✗ 20    
     data_received..................: 218 MB 702 kB/s
     data_sent......................: 52 MB  167 kB/s
     http_req_blocked...............: avg=314.15µs min=900ns    med=1.9µs  max=567.08ms p(90)=4.1µs  p(95)=12.4µs  
     http_req_connecting............: avg=296.89µs min=0s       med=0s     max=566.99ms p(90)=0s     p(95)=0s      
     http_req_duration..............: avg=5.55s    min=269.87ms med=5.01s  max=35.11s   p(90)=8.47s  p(95)=13.54s  
       { expected_response:true }...: avg=5.55s    min=269.87ms med=5.01s  max=35.11s   p(90)=8.47s  p(95)=13.54s  
     http_req_failed................: 0.00%  ✓ 0          ✗ 43774 
     http_req_receiving.............: avg=413.51µs min=16.2µs   med=32.4µs max=381.71ms p(90)=69.3µs p(95)=198.1µs 
     http_req_sending...............: avg=536.1µs  min=6µs      med=11µs   max=352.67ms p(90)=50.3µs p(95)=105.09µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=5.55s    min=269.75ms med=5.01s  max=35.11s   p(90)=8.46s  p(95)=13.53s  
     http_reqs......................: 43774  140.938082/s
     iteration_duration.............: avg=5.55s    min=270.81ms med=5.02s  max=35.11s   p(90)=8.47s  p(95)=13.54s  
     iterations.....................: 43774  140.938082/s
     vus............................: 382    min=0        max=1500
     vus_max........................: 1500   min=1412     max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d9170c6e-7faf-414b-2ae3-79e1ce24b500/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/156a318c-79ea-403a-682b-90702ff3bd00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  98% — ✓ 27263 / ✗ 318
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 27581

     checks.........................: 66.28% ✓ 54844     ✗ 27899 
     data_received..................: 141 MB 453 kB/s
     data_sent......................: 33 MB  105 kB/s
     http_req_blocked...............: avg=128.67µs min=1.2µs    med=2.5µs  max=83.1ms  p(90)=4.1µs  p(95)=190.7µs
     http_req_connecting............: avg=121.01µs min=0s       med=0s     max=80.44ms p(90)=0s     p(95)=126.5µs
     http_req_duration..............: avg=8.86s    min=619.94ms med=8.58s  max=23.28s  p(90)=15.77s p(95)=17.31s 
       { expected_response:true }...: avg=8.86s    min=619.94ms med=8.58s  max=23.28s  p(90)=15.77s p(95)=17.31s 
     http_req_failed................: 0.00%  ✓ 0         ✗ 27581 
     http_req_receiving.............: avg=70.27µs  min=22.7µs   med=59.2µs max=19.03ms p(90)=81.6µs p(95)=92.2µs 
     http_req_sending...............: avg=39.9µs   min=7.8µs    med=14.4µs max=28.3ms  p(90)=31.8µs p(95)=59.6µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=8.86s    min=619.86ms med=8.58s  max=23.28s  p(90)=15.77s p(95)=17.31s 
     http_reqs......................: 27581  88.770499/s
     iteration_duration.............: avg=8.86s    min=620.4ms  med=8.58s  max=23.28s  p(90)=15.77s p(95)=17.31s 
     iterations.....................: 27581  88.770499/s
     vus............................: 301    min=0       max=1499
     vus_max........................: 1500   min=1397    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e970df9e-4208-4b6e-00a0-5e2fce16bc00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2291bc73-4f65-4c40-a8b9-4d1af6e23800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 68085    ✗ 0     
     data_received..................: 114 MB  368 kB/s
     data_sent......................: 27 MB   87 kB/s
     http_req_blocked...............: avg=51.9µs  min=1.3µs    med=3.1µs  max=20.37ms p(90)=6.7µs  p(95)=397.9µs 
     http_req_connecting............: avg=43.1µs  min=0s       med=0s     max=20.28ms p(90)=0s     p(95)=323.33µs
     http_req_duration..............: avg=10.69s  min=659.5ms  med=10.26s max=20.93s  p(90)=19.32s p(95)=19.74s  
       { expected_response:true }...: avg=10.69s  min=659.5ms  med=10.26s max=20.93s  p(90)=19.32s p(95)=19.74s  
     http_req_failed................: 0.00%   ✓ 0        ✗ 22695 
     http_req_receiving.............: avg=77.05µs min=25µs     med=71.8µs max=10.83ms p(90)=97.1µs p(95)=105.4µs 
     http_req_sending...............: avg=35.24µs min=6.9µs    med=18µs   max=11.46ms p(90)=38.3µs p(95)=71.03µs 
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s     max=0s      p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=10.69s  min=659.22ms med=10.26s max=20.93s  p(90)=19.32s p(95)=19.74s  
     http_reqs......................: 22695   73.11745/s
     iteration_duration.............: avg=10.69s  min=660.89ms med=10.26s max=20.93s  p(90)=19.32s p(95)=19.74s  
     iterations.....................: 22695   73.11745/s
     vus............................: 133     min=0      max=1499
     vus_max........................: 1500    min=1319   max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d2b788cb-48d4-457b-40be-90e0615b0100/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/bb80541c-e555-4bf8-8a6e-e4576f265100/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  98% — ✓ 23517 / ✗ 246
     ✗ valid response structure
      ↳  98% — ✓ 23517 / ✗ 246

     checks.........................: 99.30% ✓ 70797     ✗ 492   
     data_received..................: 121 MB 383 kB/s
     data_sent......................: 28 MB  89 kB/s
     http_req_blocked...............: avg=61.28µs min=1.5µs  med=2.9µs  max=47.14ms p(90)=5.4µs  p(95)=261.88µs
     http_req_connecting............: avg=51.98µs min=0s     med=0s     max=46.62ms p(90)=0s     p(95)=180.48µs
     http_req_duration..............: avg=10.54s  min=1.04s  med=10.11s max=26.54s  p(90)=18.7s  p(95)=20.08s  
       { expected_response:true }...: avg=10.54s  min=1.04s  med=10.11s max=26.54s  p(90)=18.7s  p(95)=20.08s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 23763 
     http_req_receiving.............: avg=84.1µs  min=22.4µs med=62.8µs max=32.88ms p(90)=92.5µs p(95)=106.3µs 
     http_req_sending...............: avg=72.11µs min=8.9µs  med=16.4µs max=67.1ms  p(90)=39.3µs p(95)=74.1µs  
     http_req_tls_handshaking.......: avg=0s      min=0s     med=0s     max=0s      p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=10.54s  min=1.04s  med=10.11s max=26.54s  p(90)=18.7s  p(95)=20.08s  
     http_reqs......................: 23763  75.229348/s
     iteration_duration.............: avg=10.54s  min=1.04s  med=10.11s max=26.54s  p(90)=18.7s  p(95)=20.08s  
     iterations.....................: 23763  75.229348/s
     vus............................: 30     min=0       max=1500
     vus_max........................: 1500   min=1143    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/51c07db1-b8cb-4c5c-3636-df7d02c9e600/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8849b680-df99-44ff-454d-e967b76f8f00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-deno`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  97% — ✓ 24550 / ✗ 523
     ✗ valid response structure
      ↳  97% — ✓ 24550 / ✗ 523

     checks.........................: 98.60% ✓ 74173     ✗ 1046  
     data_received..................: 132 MB 418 kB/s
     data_sent......................: 30 MB  95 kB/s
     http_req_blocked...............: avg=60.41µs  min=1.1µs    med=2.7µs  max=19.28ms p(90)=5.5µs   p(95)=234.45µs
     http_req_connecting............: avg=49.91µs  min=0s       med=0s     max=18.85ms p(90)=0s      p(95)=154.02µs
     http_req_duration..............: avg=9.95s    min=173.39ms med=9.67s  max=34.09s  p(90)=18.16s  p(95)=20.62s  
       { expected_response:true }...: avg=9.95s    min=173.39ms med=9.67s  max=34.09s  p(90)=18.16s  p(95)=20.62s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 25073 
     http_req_receiving.............: avg=136.89µs min=17.8µs   med=40.5µs max=34.88ms p(90)=95.68µs p(95)=132.7µs 
     http_req_sending...............: avg=72.61µs  min=6.9µs    med=14.1µs max=49.01ms p(90)=62.4µs  p(95)=100.2µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=9.95s    min=173.28ms med=9.67s  max=34.09s  p(90)=18.16s  p(95)=20.62s  
     http_reqs......................: 25073  79.589181/s
     iteration_duration.............: avg=9.95s    min=174.26ms med=9.67s  max=34.09s  p(90)=18.16s  p(95)=20.62s  
     iterations.....................: 25073  79.589181/s
     vus............................: 522    min=50      max=1500
     vus_max........................: 1500   min=1500    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/41b769f5-2153-41f0-8e7f-c57185bb8f00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5a62ebe6-0c41-4f36-fc8f-1ff14b0f0200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  99% — ✓ 21991 / ✗ 47
     ✗ no graphql errors
      ↳  98% — ✓ 21814 / ✗ 224
     ✗ valid response structure
      ↳  99% — ✓ 21814 / ✗ 177

     checks.........................: 99.32% ✓ 65619    ✗ 448   
     data_received..................: 109 MB 347 kB/s
     data_sent......................: 26 MB  83 kB/s
     http_req_blocked...............: avg=200.92µs min=1.3µs    med=2.7µs  max=190.58ms p(90)=18.1µs  p(95)=207.66µs
     http_req_connecting............: avg=185.52µs min=0s       med=0s     max=154.48ms p(90)=0s      p(95)=128.5µs 
     http_req_duration..............: avg=11.14s   min=254.53ms med=10.42s max=36.48s   p(90)=22.91s  p(95)=24.57s  
       { expected_response:true }...: avg=11.1s    min=254.53ms med=10.39s max=34.54s   p(90)=22.78s  p(95)=24.5s   
     http_req_failed................: 0.21%  ✓ 47       ✗ 21991 
     http_req_receiving.............: avg=340.18µs min=25.5µs   med=59.8µs max=193.79ms p(90)=111.3µs p(95)=153.9µs 
     http_req_sending...............: avg=186.27µs min=8.9µs    med=16.1µs max=201.93ms p(90)=58.8µs  p(95)=96.5µs  
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=11.14s   min=254.44ms med=10.42s max=36.48s   p(90)=22.91s  p(95)=24.57s  
     http_reqs......................: 22038  69.78407/s
     iteration_duration.............: avg=11.15s   min=255.3ms  med=10.42s max=36.48s   p(90)=22.91s  p(95)=24.57s  
     iterations.....................: 22038  69.78407/s
     vus............................: 18     min=0      max=1498
     vus_max........................: 1500   min=1313   max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/97414c45-9674-4a3e-5a2f-d288587a8c00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/858cf102-c2b1-4bc3-66e3-8f9a34e89100/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga-uws`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  43% — ✓ 7380 / ✗ 9398
     ✗ valid response structure
      ↳  43% — ✓ 7380 / ✗ 9398

     checks.........................: 62.65% ✓ 31538     ✗ 18796 
     data_received..................: 61 MB  189 kB/s
     data_sent......................: 20 MB  62 kB/s
     http_req_blocked...............: avg=116.45µs min=1.3µs    med=2.7µs  max=68.07ms p(90)=27.23µs p(95)=553.27µs
     http_req_connecting............: avg=102.09µs min=0s       med=0s     max=67.87ms p(90)=0s      p(95)=460.66µs
     http_req_duration..............: avg=15.19s   min=153.08ms med=8.71s  max=54.45s  p(90)=34.68s  p(95)=40.74s  
       { expected_response:true }...: avg=15.19s   min=153.08ms med=8.71s  max=54.45s  p(90)=34.68s  p(95)=40.74s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 16778 
     http_req_receiving.............: avg=94µs     min=21µs     med=61.4µs max=63.26ms p(90)=112.5µs p(95)=152.1µs 
     http_req_sending...............: avg=83.34µs  min=8.8µs    med=16.5µs max=31.82ms p(90)=69.73µs p(95)=112.9µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=15.19s   min=152.96ms med=8.71s  max=54.45s  p(90)=34.68s  p(95)=40.74s  
     http_reqs......................: 16778  52.126172/s
     iteration_duration.............: avg=15.19s   min=154.08ms med=8.72s  max=54.46s  p(90)=34.68s  p(95)=40.74s  
     iterations.....................: 16778  52.126172/s
     vus............................: 77     min=0       max=1500
     vus_max........................: 1500   min=1292    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/98ef6286-a333-486b-afd4-f42b9acd1500/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/edd5e61f-12e4-4e70-cb41-69009f87ae00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server-node16`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  99% — ✓ 13841 / ✗ 37
     ✗ no graphql errors
      ↳  47% — ✓ 6597 / ✗ 7281
     ✗ valid response structure
      ↳  47% — ✓ 6597 / ✗ 7244

     checks.........................: 64.99% ✓ 27035     ✗ 14562 
     data_received..................: 57 MB  170 kB/s
     data_sent......................: 17 MB  51 kB/s
     http_req_blocked...............: avg=77.44µs min=1.3µs    med=3.2µs  max=22.8ms  p(90)=184.43µs p(95)=531.46µs
     http_req_connecting............: avg=63.99µs min=0s       med=0s     max=22.73ms p(90)=117.69µs p(95)=450.92µs
     http_req_duration..............: avg=17.47s  min=126.09ms med=11.77s max=1m0s    p(90)=42.06s   p(95)=45.56s  
       { expected_response:true }...: avg=17.36s  min=126.09ms med=11.73s max=59.81s  p(90)=42s      p(95)=44.81s  
     http_req_failed................: 0.26%  ✓ 37        ✗ 13841 
     http_req_receiving.............: avg=91.78µs min=0s       med=73.9µs max=13.9ms  p(90)=110.6µs  p(95)=131.1µs 
     http_req_sending...............: avg=46.28µs min=7.8µs    med=18.8µs max=29.83ms p(90)=61.06µs  p(95)=82.7µs  
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=17.47s  min=125.99ms med=11.77s max=1m0s    p(90)=42.06s   p(95)=45.56s  
     http_reqs......................: 13878  41.204865/s
     iteration_duration.............: avg=17.48s  min=126.87ms med=11.77s max=1m0s    p(90)=42.06s   p(95)=45.56s  
     iterations.....................: 13878  41.204865/s
     vus............................: 1      min=0       max=1500
     vus_max........................: 1500   min=1247    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/73693fbd-8450-4cab-a70e-87c35d49b800/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0013a179-51f4-4d0f-d720-7d48a91cda00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  81% — ✓ 12767 / ✗ 2990
     ✗ no graphql errors
      ↳  79% — ✓ 12523 / ✗ 3234
     ✗ valid response structure
      ↳  98% — ✓ 12523 / ✗ 244

     checks.........................: 85.39% ✓ 37813     ✗ 6468  
     data_received..................: 64 MB  191 kB/s
     data_sent......................: 19 MB  57 kB/s
     http_req_blocked...............: avg=459.04µs min=1.5µs    med=3.6µs   max=96.09ms p(90)=597.43µs p(95)=1.56ms  
     http_req_connecting............: avg=423.08µs min=0s       med=0s      max=95.83ms p(90)=484.53µs p(95)=1.37ms  
     http_req_duration..............: avg=15.82s   min=174.07ms med=4.49s   max=1m0s    p(90)=1m0s     p(95)=1m0s    
       { expected_response:true }...: avg=5.47s    min=174.07ms med=4.38s   max=59.77s  p(90)=5.1s     p(95)=6.35s   
     http_req_failed................: 18.97% ✓ 2990      ✗ 12767 
     http_req_receiving.............: avg=80.08µs  min=0s       med=76.59µs max=12.68ms p(90)=125.7µs  p(95)=149.99µs
     http_req_sending...............: avg=81.21µs  min=11.1µs   med=24.29µs max=21.56ms p(90)=79µs     p(95)=115.21µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=15.82s   min=173.95ms med=4.49s   max=1m0s    p(90)=59.99s   p(95)=1m0s    
     http_reqs......................: 15757  47.115577/s
     iteration_duration.............: avg=15.82s   min=174.98ms med=4.49s   max=1m0s    p(90)=1m0s     p(95)=1m0s    
     iterations.....................: 15757  47.115577/s
     vus............................: 55     min=0       max=1500
     vus_max........................: 1500   min=1165    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6de24de2-3abc-408e-a312-44a1e528c400/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b28819be-cf1d-4759-85c5-618c357e6d00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  86% — ✓ 17661 / ✗ 2770
     ✗ no graphql errors
      ↳  85% — ✓ 17422 / ✗ 3009
     ✗ valid response structure
      ↳  98% — ✓ 17422 / ✗ 239

     checks.........................: 89.71% ✓ 52505     ✗ 6018  
     data_received..................: 91 MB  271 kB/s
     data_sent......................: 24 MB  73 kB/s
     http_req_blocked...............: avg=249.07µs min=1.3µs   med=3.1µs  max=56.63ms p(90)=373.3µs p(95)=748.31µs
     http_req_connecting............: avg=228.51µs min=0s      med=0s     max=56.22ms p(90)=298.9µs p(95)=573.46µs
     http_req_duration..............: avg=12.41s   min=95.03ms med=4.12s  max=1m0s    p(90)=59.99s  p(95)=1m0s    
       { expected_response:true }...: avg=4.95s    min=95.03ms med=4.05s  max=59.86s  p(90)=4.8s    p(95)=5.67s   
     http_req_failed................: 13.55% ✓ 2770      ✗ 17661 
     http_req_receiving.............: avg=67.41µs  min=0s      med=65.5µs max=9.33ms  p(90)=97.9µs  p(95)=108.7µs 
     http_req_sending...............: avg=53.15µs  min=9µs     med=18.1µs max=22.87ms p(90)=56.7µs  p(95)=76.2µs  
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=12.41s   min=94.9ms  med=4.12s  max=1m0s    p(90)=59.99s  p(95)=1m0s    
     http_reqs......................: 20431  61.104855/s
     iteration_duration.............: avg=12.41s   min=95.79ms med=4.12s  max=1m0s    p(90)=1m0s    p(95)=1m0s    
     iterations.....................: 20431  61.104855/s
     vus............................: 7      min=7       max=1500
     vus_max........................: 1500   min=1500    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/27688476-d1d8-4757-66b6-be42b8ab2600/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7f160541-2d1a-4efc-4e41-29ad7a483200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  88% — ✓ 22061 / ✗ 2787
     ✗ no graphql errors
      ↳  88% — ✓ 21980 / ✗ 2868
     ✗ valid response structure
      ↳  99% — ✓ 21980 / ✗ 81

     checks.........................: 92.00% ✓ 66021     ✗ 5736  
     data_received..................: 112 MB 335 kB/s
     data_sent......................: 30 MB  89 kB/s
     http_req_blocked...............: avg=308.2µs  min=1.4µs   med=3µs    max=101.55ms p(90)=351.35µs p(95)=689.18µs
     http_req_connecting............: avg=286.89µs min=0s      med=0s     max=101.34ms p(90)=279.5µs  p(95)=553.09µs
     http_req_duration..............: avg=10.14s   min=79.1ms  med=3.15s  max=1m0s     p(90)=59.99s   p(95)=1m0s    
       { expected_response:true }...: avg=3.84s    min=79.1ms  med=3.12s  max=59.96s   p(90)=3.44s    p(95)=4.67s   
     http_req_failed................: 11.21% ✓ 2787      ✗ 22061 
     http_req_receiving.............: avg=67.71µs  min=0s      med=62µs   max=13.97ms  p(90)=90µs     p(95)=101.6µs 
     http_req_sending...............: avg=60.7µs   min=8.8µs   med=17.2µs max=55.39ms  p(90)=56.9µs   p(95)=78.8µs  
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=10.14s   min=79ms    med=3.15s  max=1m0s     p(90)=59.99s   p(95)=1m0s    
     http_reqs......................: 24848  74.307636/s
     iteration_duration.............: avg=10.14s   min=79.97ms med=3.15s  max=1m0s     p(90)=1m0s     p(95)=1m0s    
     iterations.....................: 24848  74.307636/s
     vus............................: 10     min=0       max=1500
     vus_max........................: 1500   min=1378    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b9443ea4-592e-47c2-52a9-49707f82bc00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/efae67f4-d896-4f9c-4986-005c5d9ac900/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-uws`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  93% — ✓ 14817 / ✗ 974
     ✗ no graphql errors
      ↳  64% — ✓ 10174 / ✗ 5617
     ✗ valid response structure
      ↳  68% — ✓ 10174 / ✗ 4643

     checks.........................: 75.78% ✓ 35165     ✗ 11234 
     data_received..................: 114 MB 335 kB/s
     data_sent......................: 19 MB  57 kB/s
     http_req_blocked...............: avg=122.32µs min=1.5µs    med=3µs    max=39.38ms p(90)=191.31µs p(95)=543.79µs
     http_req_connecting............: avg=106µs    min=0s       med=0s     max=39.3ms  p(90)=124.81µs p(95)=452.48µs
     http_req_duration..............: avg=15.31s   min=220.96ms med=6.78s  max=1m0s    p(90)=47.83s   p(95)=1m0s    
       { expected_response:true }...: avg=12.37s   min=220.96ms med=6.39s  max=59.96s  p(90)=35.33s   p(95)=46.16s  
     http_req_failed................: 6.16%  ✓ 974       ✗ 14817 
     http_req_receiving.............: avg=83.57µs  min=0s       med=63.2µs max=22.78ms p(90)=116.6µs  p(95)=165.36µs
     http_req_sending...............: avg=60.59µs  min=9.1µs    med=16.6µs max=19.46ms p(90)=63.1µs   p(95)=89.25µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=15.31s   min=220.87ms med=6.78s  max=1m0s    p(90)=47.83s   p(95)=1m0s    
     http_reqs......................: 15791  46.470924/s
     iteration_duration.............: avg=15.31s   min=221.65ms med=6.78s  max=1m0s    p(90)=47.83s   p(95)=1m0s    
     iterations.....................: 15791  46.470924/s
     vus............................: 1      min=0       max=1500
     vus_max........................: 1500   min=1253    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3bbe08c1-2d09-443c-e114-404e87655d00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/33f2b14c-6a15-4fd5-8c0c-bb13081b0e00/public" alt="HTTP Overview" />


  </details>