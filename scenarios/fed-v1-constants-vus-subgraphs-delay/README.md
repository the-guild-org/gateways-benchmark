## Overview for: `scenarios/fed-v1-constants-vus-subgraphs-delay`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. All subgraphs have an intentional delay on replying, and this creates additional pressure on the gateway's memory. We are running a heavy load of concurrent VUs to measure response time and other stats, during stress. It measure things like memory usage, CPU usage, response times.


This scenario was running 400 VUs over 200s


### Comparison


| Gateway              | RPS ⬇️ |        Requests        |         Duration         |
| :------------------- | :----: | :--------------------: | :----------------------: |
| wundergraph          |  2184  | 437161 total, 0 failed |  avg: 174ms, p95: 313ms  |
| mesh                 |  323   | 64888 total, 0 failed  | avg: 1234ms, p95: 1501ms |
| apollo-router        |  134   | 27166 total, 0 failed  | avg: 2955ms, p95: 4410ms |
| apollo-server-node16 |  119   | 24197 total, 0 failed  | avg: 3323ms, p95: 4380ms |
| apollo-server        |   96   | 19455 total, 67 failed | avg: 4141ms, p95: 5333ms |
| mesh-supergraph      |   67   | 13600 total, 0 failed  | avg: 5933ms, p95: 6343ms |
| mercurius            |   55   | 11415 total, 0 failed  | avg: 7125ms, p95: 7392ms |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 1311483     ✗ 0     
     data_received..................: 63 MB   317 kB/s
     data_sent......................: 519 MB  2.6 MB/s
     http_req_blocked...............: avg=208.91µs min=1µs     med=2µs      max=442.7ms  p(90)=3.2µs    p(95)=4.4µs   
     http_req_connecting............: avg=189.24µs min=0s      med=0s       max=442.61ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=174.35ms min=306.1µs med=160.52ms max=784.02ms p(90)=260.14ms p(95)=312.72ms
       { expected_response:true }...: avg=174.35ms min=306.1µs med=160.52ms max=784.02ms p(90)=260.14ms p(95)=312.72ms
   ✓ http_req_failed................: 0.00%   ✓ 0           ✗ 437161
     http_req_receiving.............: avg=768.23µs min=8.69µs  med=27.1µs   max=430.22ms p(90)=105µs    p(95)=299.7µs 
     http_req_sending...............: avg=386.85µs min=7.3µs   med=12.6µs   max=383.41ms p(90)=37.19µs  p(95)=111.6µs 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=173.19ms min=267.7µs med=159.73ms max=637.21ms p(90)=257.69ms p(95)=309.54ms
     http_reqs......................: 437161  2184.464551/s
     iteration_duration.............: avg=182.77ms min=436.8µs med=164.74ms max=932.85ms p(90)=277.31ms p(95)=334.77ms
     iterations.....................: 437161  2184.464551/s
     vus............................: 400     min=400       max=400 
     vus_max........................: 400     min=400       max=400 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6db1debd-c515-422b-62ef-195a43308500/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c8f456e8-0654-49b9-0f0d-4629f3147b00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f778915c-40ca-42d3-0f06-28cf5c3c1e00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 194664     ✗ 0    
     data_received..................: 83 MB   413 kB/s
     data_sent......................: 77 MB   384 kB/s
     http_req_blocked...............: avg=366.03µs min=700ns    med=1.49µs max=122.01ms p(90)=2.1µs  p(95)=2.7µs  
     http_req_connecting............: avg=355.53µs min=0s       med=0s     max=121.97ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=1.23s    min=555.71ms med=1.21s  max=4.26s    p(90)=1.4s   p(95)=1.5s   
       { expected_response:true }...: avg=1.23s    min=555.71ms med=1.21s  max=4.26s    p(90)=1.4s   p(95)=1.5s   
   ✓ http_req_failed................: 0.00%   ✓ 0          ✗ 64888
     http_req_receiving.............: avg=57.17µs  min=11.7µs   med=21µs   max=52.3ms   p(90)=44.6µs p(95)=66.79µs
     http_req_sending...............: avg=101.94µs min=5.39µs   med=8.9µs  max=75.88ms  p(90)=19.3µs p(95)=55.89µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=1.23s    min=555.68ms med=1.21s  max=4.24s    p(90)=1.4s   p(95)=1.5s   
     http_reqs......................: 64888   323.562693/s
     iteration_duration.............: avg=1.23s    min=555.83ms med=1.21s  max=4.36s    p(90)=1.4s   p(95)=1.5s   
     iterations.....................: 64888   323.562693/s
     vus............................: 400     min=400      max=400
     vus_max........................: 400     min=400      max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/64abdfeb-fbdc-45d4-61a3-1d5df383ea00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3061df7f-7840-45ec-a21b-182e382a6a00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/72bc05e4-3b17-4442-a2ee-189adfff1900/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 81498      ✗ 0    
     data_received..................: 137 MB  681 kB/s
     data_sent......................: 32 MB   160 kB/s
     http_req_blocked...............: avg=1.36ms   min=1.2µs    med=3.5µs  max=200.1ms  p(90)=5µs     p(95)=14.3µs 
     http_req_connecting............: avg=1.33ms   min=0s       med=0s     max=199.45ms p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=2.95s    min=622.72ms med=2.9s   max=7.62s    p(90)=4s      p(95)=4.41s  
       { expected_response:true }...: avg=2.95s    min=622.72ms med=2.9s   max=7.62s    p(90)=4s      p(95)=4.41s  
   ✓ http_req_failed................: 0.00%   ✓ 0          ✗ 27166
     http_req_receiving.............: avg=97.79µs  min=22.1µs   med=81.4µs max=25.73ms  p(90)=112.9µs p(95)=152.1µs
     http_req_sending...............: avg=456.62µs min=9.29µs   med=21.9µs max=142.18ms p(90)=39.8µs  p(95)=50.4µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=2.95s    min=622.6ms  med=2.9s   max=7.62s    p(90)=4s      p(95)=4.4s   
     http_reqs......................: 27166   134.760706/s
     iteration_duration.............: avg=2.95s    min=623.19ms med=2.9s   max=7.62s    p(90)=4s      p(95)=4.41s  
     iterations.....................: 27166   134.760706/s
     vus............................: 8       min=8        max=400
     vus_max........................: 400     min=400      max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/fee886dd-a3f8-4547-6d53-f02d8b303400/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e4c71c8d-24e0-421b-ab76-bb76285cb000/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/00f83ebc-8443-42cd-bc53-1b55ab7cc500/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server-node16`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 72591      ✗ 0    
     data_received..................: 126 MB  626 kB/s
     data_sent......................: 29 MB   142 kB/s
     http_req_blocked...............: avg=1.77ms   min=1µs    med=2.29µs  max=195.44ms p(90)=3.5µs  p(95)=4.59µs
     http_req_connecting............: avg=1.74ms   min=0s     med=0s      max=190.49ms p(90)=0s     p(95)=0s    
     http_req_duration..............: avg=3.32s    min=1.73s  med=3.1s    max=7.37s    p(90)=4.19s  p(95)=4.38s 
       { expected_response:true }...: avg=3.32s    min=1.73s  med=3.1s    max=7.37s    p(90)=4.19s  p(95)=4.38s 
   ✓ http_req_failed................: 0.00%   ✓ 0          ✗ 24197
     http_req_receiving.............: avg=69.04µs  min=22.1µs med=60.9µs  max=19.27ms  p(90)=85.8µs p(95)=93.3µs
     http_req_sending...............: avg=591.34µs min=7.7µs  med=13.89µs max=92.34ms  p(90)=26.6µs p(95)=31.8µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s       p(90)=0s     p(95)=0s    
     http_req_waiting...............: avg=3.32s    min=1.73s  med=3.1s    max=7.33s    p(90)=4.19s  p(95)=4.38s 
     http_reqs......................: 24197   119.779144/s
     iteration_duration.............: avg=3.32s    min=1.73s  med=3.1s    max=7.52s    p(90)=4.19s  p(95)=4.38s 
     iterations.....................: 24197   119.779144/s
     vus............................: 113     min=113      max=400
     vus_max........................: 400     min=400      max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/07d8573a-be58-4ac6-e23f-7740d842f300/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/de156323-0854-49ac-527e-889cf1f2cd00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7b75d8e8-0f55-4461-3136-15519dd9af00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  99% — ✓ 19388 / ✗ 67
     ✗ no graphql errors
      ↳  99% — ✓ 19388 / ✗ 67
     ✓ valid response structure

     checks.........................: 99.77% ✓ 58164   ✗ 134  
     data_received..................: 101 MB 500 kB/s
     data_sent......................: 23 MB  114 kB/s
     http_req_blocked...............: avg=1.27ms   min=1µs   med=2.1µs  max=116.75ms p(90)=3.6µs   p(95)=12.1µs
     http_req_connecting............: avg=1.25ms   min=0s    med=0s     max=116.72ms p(90)=0s      p(95)=0s    
     http_req_duration..............: avg=4.14s    min=2.19s med=3.63s  max=1m0s     p(90)=4.82s   p(95)=5.33s 
       { expected_response:true }...: avg=3.94s    min=2.19s med=3.63s  max=59.75s   p(90)=4.8s    p(95)=5.28s 
   ✓ http_req_failed................: 0.34%  ✓ 67      ✗ 19388
     http_req_receiving.............: avg=64.95µs  min=0s    med=57.2µs max=36.9ms   p(90)=80.06µs p(95)=90.2µs
     http_req_sending...............: avg=160.71µs min=6.9µs med=12.7µs max=93.55ms  p(90)=27.3µs  p(95)=32.5µs
     http_req_tls_handshaking.......: avg=0s       min=0s    med=0s     max=0s       p(90)=0s      p(95)=0s    
     http_req_waiting...............: avg=4.14s    min=2.19s med=3.63s  max=1m0s     p(90)=4.81s   p(95)=5.33s 
     http_reqs......................: 19455  96.1103/s
     iteration_duration.............: avg=4.14s    min=2.19s med=3.63s  max=1m0s     p(90)=4.83s   p(95)=5.33s 
     iterations.....................: 19455  96.1103/s
     vus............................: 217    min=217   max=400
     vus_max........................: 400    min=400   max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f1358191-69a8-4b0d-ac53-273919aec300/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6563a272-ff8c-4a7c-38c0-cdc4a3b3ec00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9d95c33c-a747-45ed-6004-80e10a99b200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 40800     ✗ 0    
     data_received..................: 69 MB   341 kB/s
     data_sent......................: 16 MB   80 kB/s
     http_req_blocked...............: avg=1.63ms   min=1µs    med=2.29µs max=97.84ms p(90)=4µs    p(95)=12.2µs  
     http_req_connecting............: avg=1.61ms   min=0s     med=0s     max=97.59ms p(90)=0s     p(95)=0s      
     http_req_duration..............: avg=5.93s    min=4.62s  med=5.87s  max=9.05s   p(90)=6.2s   p(95)=6.34s   
       { expected_response:true }...: avg=5.93s    min=4.62s  med=5.87s  max=9.05s   p(90)=6.2s   p(95)=6.34s   
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 13600
     http_req_receiving.............: avg=82.88µs  min=20.7µs med=47.9µs max=47.63ms p(90)=77.5µs p(95)=95.3µs  
     http_req_sending...............: avg=153.51µs min=6.8µs  med=13.3µs max=34.22ms p(90)=28.9µs p(95)=105.61µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=5.93s    min=4.62s  med=5.87s  max=9.04s   p(90)=6.2s   p(95)=6.34s   
     http_reqs......................: 13600   67.241025/s
     iteration_duration.............: avg=5.93s    min=4.62s  med=5.87s  max=9.1s    p(90)=6.2s   p(95)=6.34s   
     iterations.....................: 13600   67.241025/s
     vus............................: 258     min=258     max=400
     vus_max........................: 400     min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/83f55023-db70-4334-f473-2ee1b3139300/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/cfad70d5-1ba2-4d67-9d9e-db2115459200/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a4731fcb-0be8-4c71-8d4a-6742a3630900/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 34245     ✗ 0    
     data_received..................: 52 MB   249 kB/s
     data_sent......................: 14 MB   66 kB/s
     http_req_blocked...............: avg=2.39ms   min=1.2µs  med=2.7µs max=137.14ms p(90)=3.8µs  p(95)=12.8µs
     http_req_connecting............: avg=2.33ms   min=0s     med=0s    max=136.99ms p(90)=0s     p(95)=0s    
     http_req_duration..............: avg=7.12s    min=2.95s  med=7.2s  max=8.78s    p(90)=7.34s  p(95)=7.39s 
       { expected_response:true }...: avg=7.12s    min=2.95s  med=7.2s  max=8.78s    p(90)=7.34s  p(95)=7.39s 
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 11415
     http_req_receiving.............: avg=69.51µs  min=23.9µs med=67µs  max=4.05ms   p(90)=87.7µs p(95)=94.8µs
     http_req_sending...............: avg=235.28µs min=7.6µs  med=18µs  max=16.38ms  p(90)=29.8µs p(95)=38.4µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s    max=0s       p(90)=0s     p(95)=0s    
     http_req_waiting...............: avg=7.12s    min=2.95s  med=7.2s  max=8.78s    p(90)=7.34s  p(95)=7.39s 
     http_reqs......................: 11415   55.178524/s
     iteration_duration.............: avg=7.12s    min=2.98s  med=7.2s  max=8.8s     p(90)=7.34s  p(95)=7.39s 
     iterations.....................: 11415   55.178524/s
     vus............................: 17      min=17      max=400
     vus_max........................: 400     min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/dc603bcb-da56-48b8-9bf9-3c68d7aae900/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/473d8724-8aec-4908-4ce7-9dfebc86ee00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f3aa023c-4782-48b4-c0f7-e6e8dc368c00/public" alt="HTTP Overview" />


  </details>