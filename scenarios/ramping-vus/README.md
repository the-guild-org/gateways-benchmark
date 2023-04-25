## Overview for scenario: `ramping-vus`


This scenario runs 4 servics and a GraphQL gatway with Federation spec, and runs a heavy query. We are running a heavy load of concurrent VUs to measure response time and other stats, during stress. It measure things like memory usage, CPU usage, response times. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was trying to reach 1000 concurrent VUs over 60s


### Comparison


| Gateway                        | duration(p95)⬇️ |  RPS  |        Requests        |                       Durations                        |
| :----------------------------- | :-------------: | :---: | :--------------------: | :----------------------------------------------------: |
| wundergraph                    |     1360ms      |  709  | 49656 total, 0 failed  |    avg: 693ms, p95: 1360ms, max: 2558ms, med: 644ms    |
| apollo-router                  |     10498ms     |  101  |  7212 total, 0 failed  |  avg: 5390ms, p95: 10498ms, max: 17953ms, med: 4994ms  |
| mercurius                      |     12522ms     |  75   |  5305 total, 0 failed  |  avg: 6936ms, p95: 12523ms, max: 12924ms, med: 7212ms  |
| apollo-gateway-with-yoga       |     20210ms     |  62   | 4447 total, 171 failed |  avg: 8925ms, p95: 20210ms, max: 31032ms, med: 5755ms  |
| apollo-server                  |     25543ms     |  60   |  4281 total, 0 failed  |  avg: 9230ms, p95: 25544ms, max: 30573ms, med: 5876ms  |
| mesh                           |     37338ms     |  41   | 3543 total, 75 failed  | avg: 13689ms, p95: 37338ms, max: 52440ms, med: 9012ms  |
| stitching-federation-with-yoga |     43796ms     |  25   | 2355 total, 41 failed  | avg: 20657ms, p95: 43796ms, max: 56341ms, med: 15620ms |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 148968     ✗ 0     
     data_received..................: 241 MB  3.4 MB/s
     data_sent......................: 59 MB   842 kB/s
     http_req_blocked...............: avg=1.03ms   min=1.3µs  med=2.5µs    max=982.36ms p(90)=4.1µs   p(95)=8.69µs 
     http_req_connecting............: avg=1ms      min=0s     med=0s       max=982.28ms p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=693.06ms min=8.29ms med=643.58ms max=2.55s    p(90)=1.21s   p(95)=1.36s  
       { expected_response:true }...: avg=693.06ms min=8.29ms med=643.58ms max=2.55s    p(90)=1.21s   p(95)=1.36s  
     http_req_failed................: 0.00%   ✓ 0          ✗ 49656 
     http_req_receiving.............: avg=4.49ms   min=20.7µs med=49.4µs   max=507.56ms p(90)=280.9µs p(95)=1.11ms 
     http_req_sending...............: avg=1.01ms   min=9.4µs  med=14.7µs   max=512.3ms  p(90)=48.09µs p(95)=142.8µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s       max=0s       p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=687.55ms min=8.2ms  med=638.69ms max=2.55s    p(90)=1.21s   p(95)=1.35s  
     http_reqs......................: 49656   709.275075/s
     iteration_duration.............: avg=697ms    min=8.69ms med=646.99ms max=2.55s    p(90)=1.22s   p(95)=1.36s  
     iterations.....................: 49656   709.275075/s
     vus............................: 9       min=9        max=994 
     vus_max........................: 1000    min=1000     max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/346afe6a-d777-4716-c1b6-58d1610b2200/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/32cc13e7-929a-4675-0082-52adde2bc700/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 7188 / ✗ 24
     ✓ expected_result

     checks.........................: 99.88% ✓ 21612      ✗ 24    
     data_received..................: 35 MB  494 kB/s
     data_sent......................: 8.6 MB 120 kB/s
     http_req_blocked...............: avg=335.74µs min=1.3µs    med=2.29µs max=47.36ms p(90)=349.19µs p(95)=425.41µs
     http_req_connecting............: avg=323.97µs min=0s       med=0s     max=47.31ms p(90)=287.6µs  p(95)=357.81µs
     http_req_duration..............: avg=5.38s    min=179.17ms med=4.99s  max=17.95s  p(90)=9.47s    p(95)=10.49s  
       { expected_response:true }...: avg=5.38s    min=179.17ms med=4.99s  max=17.95s  p(90)=9.47s    p(95)=10.49s  
     http_req_failed................: 0.00%  ✓ 0          ✗ 7212  
     http_req_receiving.............: avg=60.43µs  min=17.39µs  med=51µs   max=7.84ms  p(90)=78.4µs   p(95)=87.19µs 
     http_req_sending...............: avg=55.04µs  min=7.4µs    med=13.6µs max=10.93ms p(90)=53.8µs   p(95)=69.14µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=5.38s    min=179.03ms med=4.99s  max=17.95s  p(90)=9.47s    p(95)=10.49s  
     http_reqs......................: 7212   101.171086/s
     iteration_duration.............: avg=5.39s    min=180.06ms med=4.99s  max=17.95s  p(90)=9.47s    p(95)=10.49s  
     iterations.....................: 7212   101.171086/s
     vus............................: 133    min=57       max=1000
     vus_max........................: 1000   min=1000     max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/27d5494d-04e2-4b61-3e88-77238922fe00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d2088454-f4a1-4d37-56e3-c730d8b72200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 15915     ✗ 0     
     data_received..................: 26 MB   371 kB/s
     data_sent......................: 6.3 MB  90 kB/s
     http_req_blocked...............: avg=105.79µs min=1.4µs  med=2.6µs  max=15.47ms p(90)=406.82µs p(95)=449.68µs
     http_req_connecting............: avg=86.92µs  min=0s     med=0s     max=15.4ms  p(90)=336.66µs p(95)=378.98µs
     http_req_duration..............: avg=6.93s    min=9.73ms med=7.21s  max=12.92s  p(90)=11.92s   p(95)=12.52s  
       { expected_response:true }...: avg=6.93s    min=9.73ms med=7.21s  max=12.92s  p(90)=11.92s   p(95)=12.52s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 5305  
     http_req_receiving.............: avg=66.31µs  min=20.2µs med=61.2µs max=2.11ms  p(90)=87.3µs   p(95)=95.88µs 
     http_req_sending...............: avg=33.79µs  min=7.7µs  med=15.9µs max=6.66ms  p(90)=63.2µs   p(95)=74.6µs  
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=6.93s    min=9.65ms med=7.21s  max=12.92s  p(90)=11.92s   p(95)=12.52s  
     http_reqs......................: 5305    75.773815/s
     iteration_duration.............: avg=6.93s    min=10.1ms med=7.21s  max=12.92s  p(90)=11.92s   p(95)=12.52s  
     iterations.....................: 5305    75.773815/s
     vus............................: 6       min=6       max=1000
     vus_max........................: 1000    min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d6dcb272-7135-40d5-5067-3b874c182f00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/987d0113-8db5-4e49-94a3-209f68681e00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  96% — ✓ 4276 / ✗ 171
     ✗ no_errors
      ↳  66% — ✓ 2968 / ✗ 1479
     ✗ expected_result
      ↳  95% — ✓ 4067 / ✗ 209

     checks.........................: 85.88% ✓ 11311     ✗ 1859  
     data_received..................: 19 MB  272 kB/s
     data_sent......................: 5.3 MB 74 kB/s
     http_req_blocked...............: avg=539.51µs min=1.1µs    med=2.6µs  max=39.96ms  p(90)=492.94µs p(95)=724.18µs
     http_req_connecting............: avg=494.29µs min=0s       med=0s     max=39.9ms   p(90)=414.66µs p(95)=599.01µs
     http_req_duration..............: avg=8.92s    min=105.11ms med=5.75s  max=31.03s   p(90)=18.36s   p(95)=20.21s  
       { expected_response:true }...: avg=9.08s    min=105.11ms med=5.79s  max=31.03s   p(90)=18.7s    p(95)=20.25s  
     http_req_failed................: 3.84%  ✓ 171       ✗ 4276  
     http_req_receiving.............: avg=762.22µs min=16.1µs   med=57.2µs max=110.57ms p(90)=98.8µs   p(95)=603.57µs
     http_req_sending...............: avg=114.43µs min=7µs      med=16.8µs max=28.55ms  p(90)=85.18µs  p(95)=117.68µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=8.92s    min=104.96ms med=5.75s  max=31.03s   p(90)=18.36s   p(95)=20.19s  
     http_reqs......................: 4447   62.432069/s
     iteration_duration.............: avg=8.92s    min=105.51ms med=5.75s  max=31.03s   p(90)=18.36s   p(95)=20.23s  
     iterations.....................: 4447   62.432069/s
     vus............................: 217    min=55      max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8dba0e25-f83b-4b17-6026-03963658e200/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4e86977e-41a8-4de9-c5b4-a4aaf6683c00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  83% — ✓ 3567 / ✗ 714
     ✗ expected_result
      ↳  95% — ✓ 4095 / ✗ 186

     checks.........................: 92.99% ✓ 11943     ✗ 900   
     data_received..................: 21 MB  297 kB/s
     data_sent......................: 5.1 MB 72 kB/s
     http_req_blocked...............: avg=133.26µs min=1.4µs   med=2.5µs  max=14.92ms p(90)=472.4µs p(95)=519.5µs
     http_req_connecting............: avg=113.74µs min=0s      med=0s     max=14.84ms p(90)=394.9µs p(95)=434.3µs
     http_req_duration..............: avg=9.22s    min=34.45ms med=5.87s  max=30.57s  p(90)=24.12s  p(95)=25.54s 
       { expected_response:true }...: avg=9.22s    min=34.45ms med=5.87s  max=30.57s  p(90)=24.12s  p(95)=25.54s 
     http_req_failed................: 0.00%  ✓ 0         ✗ 4281  
     http_req_receiving.............: avg=65.4µs   min=21.1µs  med=58.7µs max=1.27ms  p(90)=89.7µs  p(95)=101.8µs
     http_req_sending...............: avg=41.81µs  min=8.8µs   med=15.3µs max=10.44ms p(90)=77.3µs  p(95)=92.4µs 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s      p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=9.22s    min=34.37ms med=5.87s  max=30.57s  p(90)=24.12s  p(95)=25.54s 
     http_reqs......................: 4281   60.441939/s
     iteration_duration.............: avg=9.23s    min=34.73ms med=5.87s  max=30.57s  p(90)=24.12s  p(95)=25.54s 
     iterations.....................: 4281   60.441939/s
     vus............................: 86     min=57      max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c448c308-4854-4802-eebe-bb2bf11eaf00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a2310247-a8f2-4324-4ff9-2b2e2fcb6d00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  97% — ✓ 3468 / ✗ 75
     ✗ no_errors
      ↳  69% — ✓ 2469 / ✗ 1074
     ✗ expected_result
      ↳  95% — ✓ 3328 / ✗ 140

     checks.........................: 87.78% ✓ 9265      ✗ 1289  
     data_received..................: 18 MB  210 kB/s
     data_sent......................: 4.2 MB 49 kB/s
     http_req_blocked...............: avg=803.73µs min=1.4µs    med=2.5µs  max=75.25ms p(90)=483.26µs p(95)=554µs   
     http_req_connecting............: avg=780.61µs min=0s       med=0s     max=74.98ms p(90)=415.58µs p(95)=476.82µs
     http_req_duration..............: avg=13.68s   min=913.82ms med=9.01s  max=52.44s  p(90)=32.98s   p(95)=37.33s  
       { expected_response:true }...: avg=13.91s   min=935.87ms med=9.18s  max=52.44s  p(90)=33.04s   p(95)=37.49s  
     http_req_failed................: 2.11%  ✓ 75        ✗ 3468  
     http_req_receiving.............: avg=154.51µs min=20µs     med=59.2µs max=36.78ms p(90)=98.96µs  p(95)=130.68µs
     http_req_sending...............: avg=72.13µs  min=7.4µs    med=17µs   max=9.94ms  p(90)=81.08µs  p(95)=102.49µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=13.68s   min=913.52ms med=9.01s  max=52.44s  p(90)=32.98s   p(95)=37.33s  
     http_reqs......................: 3543   41.622912/s
     iteration_duration.............: avg=13.69s   min=926.14ms med=9.01s  max=52.44s  p(90)=32.98s   p(95)=37.33s  
     iterations.....................: 3543   41.622912/s
     vus............................: 92     min=56      max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8757d57b-af40-454f-4e51-45dcde8d4000/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/73290d78-a66a-426a-d1e8-baf398101000/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  98% — ✓ 2314 / ✗ 41
     ✗ no_errors
      ↳  41% — ✓ 971 / ✗ 1384
     ✗ expected_result
      ↳  86% — ✓ 2004 / ✗ 310

     checks.........................: 75.29% ✓ 5289      ✗ 1735  
     data_received..................: 15 MB  158 kB/s
     data_sent......................: 2.9 MB 31 kB/s
     http_req_blocked...............: avg=729.67µs min=1.3µs    med=3.4µs   max=42.35ms p(90)=471.46µs p(95)=558.19µs
     http_req_connecting............: avg=698.36µs min=0s       med=0s      max=42.18ms p(90)=397.24µs p(95)=475.57µs
     http_req_duration..............: avg=20.65s   min=905.73ms med=15.62s  max=56.34s  p(90)=42.18s   p(95)=43.79s  
       { expected_response:true }...: avg=20.99s   min=2.42s    med=15.9s   max=56.34s  p(90)=42.28s   p(95)=44.15s  
     http_req_failed................: 1.74%  ✓ 41        ✗ 2314  
     http_req_receiving.............: avg=226.3µs  min=24.29µs  med=64.8µs  max=29.73ms p(90)=120.1µs  p(95)=164.03µs
     http_req_sending...............: avg=67.35µs  min=8.4µs    med=24.29µs max=16.68ms p(90)=90.7µs   p(95)=115.52µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=20.65s   min=887.75ms med=15.62s  max=56.34s  p(90)=42.18s   p(95)=43.79s  
     http_reqs......................: 2355   25.547122/s
     iteration_duration.............: avg=20.65s   min=928.37ms med=15.62s  max=56.34s  p(90)=42.18s   p(95)=43.79s  
     iterations.....................: 2355   25.547122/s
     vus............................: 10     min=10      max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5cb442d3-843d-4ae6-c39b-3b31ac294f00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4e080fbe-f1e4-4015-3d3e-09349e22ce00/public" alt="HTTP Overview" />


  </details>