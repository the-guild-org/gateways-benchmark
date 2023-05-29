## Overview for scenario: `constant-vus-over-time`


This scenario runs 4 servics and a GraphQL gateway with Federation spec, and runs a heavy query. It's being executed with a constant amount of VUs over a fixed amount of time. It measure things like memory usage, CPU usage, average RPS. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was running 100 VUs over 60s


### Comparison


| Gateway                        | RPS ⬇️ |       Requests        |         Duration         |
| :----------------------------- | :----: | :-------------------: | :----------------------: |
| wundergraph                    |  975   | 58656 total, 0 failed |  avg: 102ms, p95: 167ms  |
| apollo-router                  |  108   | 6543 total, 0 failed  | avg: 920ms, p95: 1644ms  |
| mercurius                      |   67   | 4083 total, 0 failed  | avg: 1477ms, p95: 2006ms |
| apollo-server                  |   61   | 3732 total, 0 failed  | avg: 1619ms, p95: 2205ms |
| stitching-federation-with-yoga |   48   | 2937 total, 0 failed  | avg: 2070ms, p95: 2733ms |
| apollo-gateway-with-yoga       |   44   | 2728 total, 0 failed  | avg: 2227ms, p95: 3242ms |
| mesh                           |   32   | 2009 total, 0 failed  | avg: 3037ms, p95: 4587ms |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 175968     ✗ 0    
     data_received..................: 285 MB  4.7 MB/s
     data_sent......................: 70 MB   1.2 MB/s
   ✓ expected_result................: 0.00%   ✓ 0          ✗ 0    
     http_req_blocked...............: avg=23.2µs   min=900ns   med=1.8µs   max=47.6ms   p(90)=2.9µs    p(95)=3.7µs   
     http_req_connecting............: avg=18.75µs  min=0s      med=0s      max=42.51ms  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=101.71ms min=12.22ms med=95.85ms max=305.4ms  p(90)=147.84ms p(95)=166.83ms
       { expected_response:true }...: avg=101.71ms min=12.22ms med=95.85ms max=305.4ms  p(90)=147.84ms p(95)=166.83ms
   ✓ http_req_failed................: 0.00%   ✓ 0          ✗ 58656
     http_req_receiving.............: avg=535.48µs min=15.6µs  med=39.8µs  max=97.71ms  p(90)=219.2µs  p(95)=537.79µs
     http_req_sending...............: avg=109.35µs min=6µs     med=10.8µs  max=98.44ms  p(90)=20.8µs   p(95)=71.12µs 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=101.06ms min=12.07ms med=95.47ms max=304.91ms p(90)=146.46ms p(95)=165.08ms
     http_reqs......................: 58656   975.658744/s
     iteration_duration.............: avg=102.33ms min=12.49ms med=96.42ms max=338.84ms p(90)=148.68ms p(95)=167.64ms
     iterations.....................: 58656   975.658744/s
   ✓ no_errors......................: 0.00%   ✓ 0          ✗ 0    
     vus............................: 100     min=100      max=100
     vus_max........................: 100     min=100      max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b114c5ba-28fd-42c7-b779-c8194d50b700/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ca293b5d-383d-46e7-dc37-1e8c41749600/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 19629      ✗ 0    
     data_received..................: 33 MB   540 kB/s
     data_sent......................: 7.8 MB  129 kB/s
   ✓ expected_result................: 0.00%   ✓ 0          ✗ 0    
     http_req_blocked...............: avg=74.96µs  min=1µs     med=2.29µs   max=11.75ms p(90)=3.4µs   p(95)=4.3µs  
     http_req_connecting............: avg=71.26µs  min=0s      med=0s       max=11.61ms p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=919.66ms min=79.55ms med=858.19ms max=3.59s   p(90)=1.42s   p(95)=1.64s  
       { expected_response:true }...: avg=919.66ms min=79.55ms med=858.19ms max=3.59s   p(90)=1.42s   p(95)=1.64s  
   ✓ http_req_failed................: 0.00%   ✓ 0          ✗ 6543 
     http_req_receiving.............: avg=58.83µs  min=21.3µs  med=53.69µs  max=13.53ms p(90)=72.99µs p(95)=82.18µs
     http_req_sending...............: avg=31.72µs  min=7.7µs   med=14.3µs   max=9.42ms  p(90)=27.49µs p(95)=31.3µs 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s      p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=919.57ms min=79.48ms med=858.12ms max=3.59s   p(90)=1.42s   p(95)=1.64s  
     http_reqs......................: 6543    108.428716/s
     iteration_duration.............: avg=920.07ms min=79.84ms med=858.55ms max=3.59s   p(90)=1.42s   p(95)=1.64s  
     iterations.....................: 6543    108.428716/s
   ✓ no_errors......................: 0.00%   ✓ 0          ✗ 0    
     vus............................: 100     min=100      max=100
     vus_max........................: 100     min=100      max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d8de74ad-d9fc-417c-9407-17bc0edb8100/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/628c81d3-f572-4eb2-15c2-274a0b8c8e00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 12249     ✗ 0    
     data_received..................: 21 MB   339 kB/s
     data_sent......................: 4.8 MB  80 kB/s
   ✓ expected_result................: 0.00%   ✓ 0         ✗ 0    
     http_req_blocked...............: avg=109.78µs min=1.3µs    med=3.2µs  max=12.55ms p(90)=4.89µs   p(95)=13.2µs 
     http_req_connecting............: avg=103.92µs min=0s       med=0s     max=12.4ms  p(90)=0s       p(95)=0s     
     http_req_duration..............: avg=1.47s    min=535.45ms med=1.4s   max=4.01s   p(90)=1.71s    p(95)=2s     
       { expected_response:true }...: avg=1.47s    min=535.45ms med=1.4s   max=4.01s   p(90)=1.71s    p(95)=2s     
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 4083 
     http_req_receiving.............: avg=83.25µs  min=24.7µs   med=80.7µs max=10.24ms p(90)=102.38µs p(95)=110.4µs
     http_req_sending...............: avg=35.22µs  min=9.5µs    med=21.3µs max=3.27ms  p(90)=35.2µs   p(95)=41.1µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=1.47s    min=535.36ms med=1.4s   max=4.01s   p(90)=1.71s    p(95)=2s     
     http_reqs......................: 4083    67.451554/s
     iteration_duration.............: avg=1.47s    min=535.78ms med=1.4s   max=4.01s   p(90)=1.72s    p(95)=2s     
     iterations.....................: 4083    67.451554/s
   ✓ no_errors......................: 0.00%   ✓ 0         ✗ 0    
     vus............................: 100     min=100     max=100
     vus_max........................: 100     min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5ca0e9fd-e9fd-4185-4746-358189253b00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a522d13f-1312-42ac-050d-897f2a4b1500/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 3714 / ✗ 18
     ✗ expected_result
      ↳  99% — ✓ 3731 / ✗ 1

     checks.........................: 99.83% ✓ 11177     ✗ 19   
     data_received..................: 19 MB  317 kB/s
     data_sent......................: 4.4 MB 73 kB/s
   ✓ expected_result................: 0.00%  ✓ 0         ✗ 0    
     http_req_blocked...............: avg=395.69µs min=1.4µs    med=2.2µs  max=50.72ms  p(90)=3.4µs   p(95)=10.4µs 
     http_req_connecting............: avg=360.01µs min=0s       med=0s     max=50.54ms  p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=1.61s    min=757.26ms med=1.53s  max=3.71s    p(90)=1.94s   p(95)=2.2s   
       { expected_response:true }...: avg=1.61s    min=757.26ms med=1.53s  max=3.71s    p(90)=1.94s   p(95)=2.2s   
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 3732 
     http_req_receiving.............: avg=58.13µs  min=22µs     med=55.3µs max=975.61µs p(90)=77.7µs  p(95)=84.54µs
     http_req_sending...............: avg=89.97µs  min=8.2µs    med=13.4µs max=45.11ms  p(90)=27.59µs p(95)=32.8µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=1.61s    min=757.21ms med=1.53s  max=3.71s    p(90)=1.94s   p(95)=2.2s   
     http_reqs......................: 3732   61.420666/s
     iteration_duration.............: avg=1.61s    min=757.56ms med=1.53s  max=3.73s    p(90)=1.94s   p(95)=2.2s   
     iterations.....................: 3732   61.420666/s
   ✓ no_errors......................: 0.00%  ✓ 0         ✗ 0    
     vus............................: 100    min=100     max=100
     vus_max........................: 100    min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8fb21800-5d43-4715-b586-460d5e302900/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b1e52183-6544-4666-31ec-6bfdbbba1300/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 2936 / ✗ 1
     ✗ expected_result
      ↳  99% — ✓ 2936 / ✗ 1

     checks.........................: 99.97% ✓ 8809      ✗ 2    
     data_received..................: 15 MB  242 kB/s
     data_sent......................: 3.5 MB 57 kB/s
   ✓ expected_result................: 0.00%  ✓ 0         ✗ 0    
     http_req_blocked...............: avg=126.61µs min=1.3µs  med=2.29µs max=18.16ms p(90)=3.7µs  p(95)=15.52µs
     http_req_connecting............: avg=122.38µs min=0s     med=0s     max=18.11ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=2.06s    min=1.12s  med=1.97s  max=4.93s   p(90)=2.44s  p(95)=2.73s  
       { expected_response:true }...: avg=2.06s    min=1.12s  med=1.97s  max=4.93s   p(90)=2.44s  p(95)=2.73s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 2937 
     http_req_receiving.............: avg=54.42µs  min=20.9µs med=52.5µs max=347.6µs p(90)=78.1µs p(95)=84.52µs
     http_req_sending...............: avg=32.22µs  min=7.3µs  med=13.7µs max=1.08ms  p(90)=28.6µs p(95)=35.12µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=2.06s    min=1.12s  med=1.97s  max=4.93s   p(90)=2.44s  p(95)=2.73s  
     http_reqs......................: 2937   48.043559/s
     iteration_duration.............: avg=2.07s    min=1.12s  med=1.97s  max=4.94s   p(90)=2.44s  p(95)=2.73s  
     iterations.....................: 2937   48.043559/s
   ✓ no_errors......................: 0.00%  ✓ 0         ✗ 0    
     vus............................: 46     min=46      max=100
     vus_max........................: 100    min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/20a89f18-6053-4b22-a94d-2d924f130400/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f50137e8-7fc8-43a1-9ea8-0a236b492500/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  98% — ✓ 2674 / ✗ 54
     ✗ expected_result
      ↳  99% — ✓ 2721 / ✗ 7

     checks.........................: 99.25% ✓ 8123      ✗ 61   
     data_received..................: 14 MB  223 kB/s
     data_sent......................: 3.2 MB 53 kB/s
   ✓ expected_result................: 0.00%  ✓ 0         ✗ 0    
     http_req_blocked...............: avg=794.79µs min=1.8µs  med=2.9µs   max=60.38ms p(90)=5.1µs    p(95)=24.76µs 
     http_req_connecting............: avg=750.98µs min=0s     med=0s      max=39.01ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=2.22s    min=1.1s   med=2.06s   max=5.14s   p(90)=2.82s    p(95)=3.24s   
       { expected_response:true }...: avg=2.22s    min=1.1s   med=2.06s   max=5.14s   p(90)=2.82s    p(95)=3.24s   
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 2728 
     http_req_receiving.............: avg=82.16µs  min=27µs   med=69.35µs max=4.43ms  p(90)=118.53µs p(95)=143.05µs
     http_req_sending...............: avg=183.15µs min=11.6µs med=19.4µs  max=30.35ms p(90)=47µs     p(95)=118.22µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=2.22s    min=1.1s   med=2.06s   max=5.13s   p(90)=2.82s    p(95)=3.24s   
     http_reqs......................: 2728   44.558385/s
     iteration_duration.............: avg=2.22s    min=1.1s   med=2.06s   max=5.16s   p(90)=2.82s    p(95)=3.24s   
     iterations.....................: 2728   44.558385/s
   ✓ no_errors......................: 0.00%  ✓ 0         ✗ 0    
     vus............................: 54     min=54      max=100
     vus_max........................: 100    min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d35fa625-ddeb-4b71-c6fa-e8aac11b9700/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6fe0bd8c-18b8-4782-9e40-265be3ef7700/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  98% — ✓ 1971 / ✗ 38
     ✓ expected_result

     checks.........................: 99.36% ✓ 5989      ✗ 38   
     data_received..................: 11 MB  179 kB/s
     data_sent......................: 2.4 MB 39 kB/s
   ✓ expected_result................: 0.00%  ✓ 0         ✗ 0    
     http_req_blocked...............: avg=256.95µs min=1.7µs  med=2.9µs  max=52.37ms p(90)=5.6µs    p(95)=225.62µs
     http_req_connecting............: avg=211.79µs min=0s     med=0s     max=15.94ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=3.03s    min=1.61s  med=2.76s  max=6.7s    p(90)=4.03s    p(95)=4.58s   
       { expected_response:true }...: avg=3.03s    min=1.61s  med=2.76s  max=6.7s    p(90)=4.03s    p(95)=4.58s   
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 2009 
     http_req_receiving.............: avg=91.62µs  min=29µs   med=70.7µs max=4.21ms  p(90)=129.14µs p(95)=174.64µs
     http_req_sending...............: avg=157.96µs min=11.8µs med=19.6µs max=31.54ms p(90)=54.86µs  p(95)=241.26µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=3.03s    min=1.61s  med=2.76s  max=6.7s    p(90)=4.03s    p(95)=4.58s   
     http_reqs......................: 2009   32.603968/s
     iteration_duration.............: avg=3.03s    min=1.61s  med=2.76s  max=6.7s    p(90)=4.03s    p(95)=4.58s   
     iterations.....................: 2009   32.603968/s
   ✓ no_errors......................: 0.00%  ✓ 0         ✗ 0    
     vus............................: 62     min=62      max=100
     vus_max........................: 100    min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7ae8d732-25d5-43d5-d507-ff21f3e65f00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/31cd794e-dc0a-46e8-7656-6166f2b38200/public" alt="HTTP Overview" />


  </details>