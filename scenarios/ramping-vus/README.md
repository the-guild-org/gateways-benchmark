## Overview for scenario: `ramping-vus`


This scenario runs 4 servics and a GraphQL gatway with Federation spec, and runs a heavy query. We are running a heavy load of concurrent VUs to measure response time and other stats, during stress. It measure things like memory usage, CPU usage, response times. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was running 1000 VUs over 60s


### Comparison


| Gateway                  | duration(p95)⬇️ |  RPS  |        Requests        |                       Durations                        |
| :----------------------- | :-------------: | :---: | :--------------------: | :----------------------------------------------------: |
| wundergraph              |      938ms      | 1051  | 73615 total, 0 failed  |    avg: 462ms, p95: 939ms, max: 1794ms, med: 418ms     |
| apollo-router            |     10969ms     |  102  |  7243 total, 0 failed  |  avg: 5298ms, p95: 10969ms, max: 16204ms, med: 4901ms  |
| mercurius                |     11479ms     |  76   |  5339 total, 0 failed  |  avg: 6927ms, p95: 11480ms, max: 11850ms, med: 7071ms  |
| apollo-gateway-with-yoga |     20690ms     |  72   |  5184 total, 0 failed  |  avg: 7735ms, p95: 20690ms, max: 30785ms, med: 4765ms  |
| apollo-server            |     25300ms     |  59   | 4387 total, 227 failed |  avg: 8943ms, p95: 25300ms, max: 39866ms, med: 5338ms  |
| mesh                     |     34614ms     |  30   | 2906 total, 132 failed | avg: 15708ms, p95: 34614ms, max: 51249ms, med: 12739ms |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 220845      ✗ 0     
     data_received..................: 358 MB  5.1 MB/s
     data_sent......................: 87 MB   1.2 MB/s
     http_req_blocked...............: avg=629.37µs min=900ns  med=1.9µs    max=637.88ms p(90)=3.3µs    p(95)=4.8µs   
     http_req_connecting............: avg=617.77µs min=0s     med=0s       max=637.82ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=462.31ms min=4.91ms med=418.01ms max=1.79s    p(90)=833.05ms p(95)=938.65ms
       { expected_response:true }...: avg=462.31ms min=4.91ms med=418.01ms max=1.79s    p(90)=833.05ms p(95)=938.65ms
     http_req_failed................: 0.00%   ✓ 0           ✗ 73615 
     http_req_receiving.............: avg=1.31ms   min=15.2µs med=35µs     max=516.19ms p(90)=185.66µs p(95)=383.36µs
     http_req_sending...............: avg=823.74µs min=6.6µs  med=10.8µs   max=618.44ms p(90)=26µs     p(95)=106.5µs 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=460.17ms min=4.85ms med=417ms    max=1.79s    p(90)=828.44ms p(95)=930.67ms
     http_reqs......................: 73615   1051.558745/s
     iteration_duration.............: avg=467.94ms min=5.17ms med=420.72ms max=1.8s     p(90)=851.44ms p(95)=957.91ms
     iterations.....................: 73615   1051.558745/s
     vus............................: 8       min=8         max=988 
     vus_max........................: 1000    min=1000      max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/828ac074-e008-43ff-eb5f-26bcb5d50500/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ee1a42d6-fe5d-48f0-fd62-608d4ffe0500/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 7224 / ✗ 19
     ✗ expected_result
      ↳  99% — ✓ 7240 / ✗ 3

     checks.........................: 99.89% ✓ 21707      ✗ 22    
     data_received..................: 35 MB  502 kB/s
     data_sent......................: 8.6 MB 122 kB/s
     http_req_blocked...............: avg=75.81µs min=1.2µs    med=2.29µs max=16.15ms p(90)=200.66µs p(95)=403.39µs
     http_req_connecting............: avg=64.87µs min=0s       med=0s     max=16.1ms  p(90)=137.2µs  p(95)=334.58µs
     http_req_duration..............: avg=5.29s   min=192.59ms med=4.9s   max=16.2s   p(90)=8.89s    p(95)=10.96s  
       { expected_response:true }...: avg=5.29s   min=192.59ms med=4.9s   max=16.2s   p(90)=8.89s    p(95)=10.96s  
     http_req_failed................: 0.00%  ✓ 0          ✗ 7243  
     http_req_receiving.............: avg=58.24µs min=19.8µs   med=46.8µs max=7.87ms  p(90)=78µs     p(95)=87.3µs  
     http_req_sending...............: avg=27.57µs min=7.8µs    med=13.8µs max=7.15ms  p(90)=55.18µs  p(95)=69.3µs  
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=5.29s   min=192.53ms med=4.9s   max=16.2s   p(90)=8.89s    p(95)=10.96s  
     http_reqs......................: 7243   102.667503/s
     iteration_duration.............: avg=5.29s   min=193.47ms med=4.9s   max=16.2s   p(90)=8.89s    p(95)=10.96s  
     iterations.....................: 7243   102.667503/s
     vus............................: 23     min=23       max=1000
     vus_max........................: 1000   min=1000     max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5349ab66-021e-48ef-13df-ab191009a600/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/58f5c608-1e1e-47e1-6bf7-cd76e6345200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 16017     ✗ 0     
     data_received..................: 26 MB   373 kB/s
     data_sent......................: 6.3 MB  91 kB/s
     http_req_blocked...............: avg=185.51µs min=1.2µs   med=2.7µs  max=23.7ms  p(90)=408.26µs p(95)=461.11µs
     http_req_connecting............: avg=158.08µs min=0s      med=0s     max=23.66ms p(90)=337.24µs p(95)=388.21µs
     http_req_duration..............: avg=6.92s    min=10.5ms  med=7.07s  max=11.84s  p(90)=10.92s   p(95)=11.47s  
       { expected_response:true }...: avg=6.92s    min=10.5ms  med=7.07s  max=11.84s  p(90)=10.92s   p(95)=11.47s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 5339  
     http_req_receiving.............: avg=70.06µs  min=21.2µs  med=61.8µs max=13.33ms p(90)=88.42µs  p(95)=96.9µs  
     http_req_sending...............: avg=88.86µs  min=8.9µs   med=16µs   max=23.29ms p(90)=62.7µs   p(95)=74.91µs 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=6.92s    min=10.42ms med=7.07s  max=11.84s  p(90)=10.92s   p(95)=11.47s  
     http_reqs......................: 5339    76.263009/s
     iteration_duration.............: avg=6.92s    min=10.84ms med=7.07s  max=11.85s  p(90)=10.92s   p(95)=11.47s  
     iterations.....................: 5339    76.263009/s
     vus............................: 7       min=7       max=1000
     vus_max........................: 1000    min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/39643500-893b-4eee-1531-8bbee74e4d00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/63d43f3f-f0a9-49bd-4318-6736372f9700/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  81% — ✓ 4224 / ✗ 960
     ✗ expected_result
      ↳  97% — ✓ 5080 / ✗ 104

     checks.........................: 93.15% ✓ 14488     ✗ 1064  
     data_received..................: 25 MB  343 kB/s
     data_sent......................: 6.2 MB 86 kB/s
     http_req_blocked...............: avg=255.84µs min=1µs      med=2.1µs  max=40.2ms  p(90)=383.5µs  p(95)=426.38µs
     http_req_connecting............: avg=235.67µs min=0s       med=0s     max=40.02ms p(90)=319.64µs p(95)=360.7µs 
     http_req_duration..............: avg=7.73s    min=534.31ms med=4.76s  max=30.78s  p(90)=17.38s   p(95)=20.69s  
       { expected_response:true }...: avg=7.73s    min=534.31ms med=4.76s  max=30.78s  p(90)=17.38s   p(95)=20.69s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 5184  
     http_req_receiving.............: avg=56.55µs  min=15.8µs   med=38.9µs max=9.49ms  p(90)=76.36µs  p(95)=88.48µs 
     http_req_sending...............: avg=56.5µs   min=6.4µs    med=13µs   max=22.17ms p(90)=69.4µs   p(95)=82.78µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=7.73s    min=534.23ms med=4.76s  max=30.78s  p(90)=17.38s   p(95)=20.69s  
     http_reqs......................: 5184   72.325204/s
     iteration_duration.............: avg=7.73s    min=534.51ms med=4.76s  max=30.78s  p(90)=17.38s   p(95)=20.69s  
     iterations.....................: 5184   72.325204/s
     vus............................: 134    min=57      max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6e94505f-49ac-4fa5-e5cd-6a74b49fb800/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/62cc97bd-0fbc-44e1-1f1c-be43ce65f700/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  94% — ✓ 4160 / ✗ 227
     ✗ no_errors
      ↳  72% — ✓ 3184 / ✗ 1203
     ✗ expected_result
      ↳  94% — ✓ 3936 / ✗ 224

     checks.........................: 87.21% ✓ 11280    ✗ 1654  
     data_received..................: 21 MB  283 kB/s
     data_sent......................: 5.2 MB 71 kB/s
     http_req_blocked...............: avg=2.4ms    min=1.3µs    med=2.9µs   max=203.6ms  p(90)=571.7µs  p(95)=2.61ms  
     http_req_connecting............: avg=2.25ms   min=0s       med=0s      max=140.9ms  p(90)=488.12µs p(95)=2.57ms  
     http_req_duration..............: avg=8.94s    min=298.3ms  med=5.33s   max=39.86s   p(90)=20.87s   p(95)=25.3s   
       { expected_response:true }...: avg=9.04s    min=298.3ms  med=5.31s   max=39.86s   p(90)=21.08s   p(95)=25.42s  
     http_req_failed................: 5.17%  ✓ 227      ✗ 4160  
     http_req_receiving.............: avg=3.03ms   min=24.8µs   med=69.8µs  max=171.22ms p(90)=125.4µs  p(95)=3.34ms  
     http_req_sending...............: avg=373.24µs min=8.8µs    med=19.09µs max=88.87ms  p(90)=99µs     p(95)=256.85µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=8.93s    min=298.21ms med=5.33s   max=39.86s   p(90)=20.87s   p(95)=25.3s   
     http_reqs......................: 4387   59.83842/s
     iteration_duration.............: avg=8.95s    min=298.63ms med=5.33s   max=39.86s   p(90)=20.87s   p(95)=25.3s   
     iterations.....................: 4387   59.83842/s
     vus............................: 176    min=55     max=1000
     vus_max........................: 1000   min=1000   max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7df8225f-37e7-40b5-94fa-8324afb68500/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b4eed97d-af9c-4681-6987-95876b544100/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  95% — ✓ 2774 / ✗ 132
     ✗ no_errors
      ↳  61% — ✓ 1793 / ✗ 1113
     ✗ expected_result
      ↳  95% — ✓ 2642 / ✗ 132

     checks.........................: 83.96% ✓ 7209      ✗ 1377  
     data_received..................: 14 MB  146 kB/s
     data_sent......................: 3.5 MB 37 kB/s
     http_req_blocked...............: avg=484.87µs min=1.7µs  med=3.5µs  max=85.37ms p(90)=579.24µs p(95)=873.24µs
     http_req_connecting............: avg=448.48µs min=0s     med=0s     max=85.27ms p(90)=495.43µs p(95)=738µs   
     http_req_duration..............: avg=15.7s    min=1.48s  med=12.73s max=51.24s  p(90)=28.55s   p(95)=34.61s  
       { expected_response:true }...: avg=16.2s    min=2s     med=13.32s max=51.24s  p(90)=28.8s    p(95)=34.92s  
     http_req_failed................: 4.54%  ✓ 132       ✗ 2774  
     http_req_receiving.............: avg=779.63µs min=24.4µs med=84.5µs max=45.09ms p(90)=145.16µs p(95)=424.4µs 
     http_req_sending...............: avg=142.97µs min=10.1µs med=25.7µs max=34.16ms p(90)=102.55µs p(95)=138.26µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=15.7s    min=1.48s  med=12.73s max=51.24s  p(90)=28.55s   p(95)=34.61s  
     http_reqs......................: 2906   30.795862/s
     iteration_duration.............: avg=15.71s   min=1.48s  med=12.73s max=51.24s  p(90)=28.56s   p(95)=34.61s  
     iterations.....................: 2906   30.795862/s
     vus............................: 1      min=1       max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/caf7c995-265c-4bb8-319c-51a9da079f00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1a43ccc0-bc58-47a7-a563-41e01646c600/public" alt="HTTP Overview" />


  </details>