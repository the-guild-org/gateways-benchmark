## Overview for: `scenarios/fed-v1-constants-vus-subgraphs-delay`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. All subgraphs have an intentional delay on replying, and this creates additional pressure on the gateway's memory. We are running a heavy load of concurrent VUs to measure response time and other stats, during stress. It measure things like memory usage, CPU usage, response times.


This scenario was running 400 VUs over 200s


### Comparison


| Gateway              | RPS ⬇️ |        Requests        |          Duration          |
| :------------------- | :----: | :--------------------: | :------------------------: |
| wundergraph          |  242   | 48903 total, 0 failed  |  avg: 1640ms, p95: 1915ms  |
| mesh-supergraph      |  113   | 22972 total, 0 failed  |  avg: 3518ms, p95: 4186ms  |
| mesh                 |   96   | 19549 total, 0 failed  |  avg: 4120ms, p95: 4915ms  |
| apollo-router        |   71   | 14359 total, 0 failed  |  avg: 5586ms, p95: 8761ms  |
| apollo-server-node16 |   49   | 10058 total, 0 failed  | avg: 8030ms, p95: 12426ms  |
| apollo-server        |   39   | 8522 total, 399 failed | avg: 9630ms, p95: 34510ms  |
| mercurius            |   7    |  1607 total, 0 failed  | avg: 53292ms, p95: 57000ms |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 146709     ✗ 0    
     data_received..................: 244 MB  1.2 MB/s
     data_sent......................: 58 MB   288 kB/s
     http_req_blocked...............: avg=396.92µs min=1.1µs    med=2.29µs  max=120.84ms p(90)=3.4µs    p(95)=4µs     
     http_req_connecting............: avg=387.81µs min=0s       med=0s      max=120.81ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=1.64s    min=904.07ms med=1.64s   max=2.53s    p(90)=1.83s    p(95)=1.91s   
       { expected_response:true }...: avg=1.64s    min=904.07ms med=1.64s   max=2.53s    p(90)=1.83s    p(95)=1.91s   
   ✓ http_req_failed................: 0.00%   ✓ 0          ✗ 48903
     http_req_receiving.............: avg=1.21ms   min=14.9µs   med=34.79µs max=216.52ms p(90)=269.18µs p(95)=495.8µs 
     http_req_sending...............: avg=519.32µs min=7.2µs    med=12.5µs  max=214.38ms p(90)=29.3µs   p(95)=125.09µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=1.63s    min=904.03ms med=1.63s   max=2.53s    p(90)=1.83s    p(95)=1.91s   
     http_reqs......................: 48903   242.794604/s
     iteration_duration.............: avg=1.64s    min=904.64ms med=1.64s   max=2.61s    p(90)=1.83s    p(95)=1.91s   
     iterations.....................: 48903   242.794604/s
     vus............................: 215     min=215      max=400
     vus_max........................: 400     min=400      max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/51636ee0-ab30-44a9-ec3f-fc36d1a52800/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/370e67de-981d-4550-f32e-820d73621d00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 22972

     checks.........................: 66.66% ✓ 45944      ✗ 22972
     data_received..................: 116 MB 571 kB/s
     data_sent......................: 27 MB  135 kB/s
     http_req_blocked...............: avg=1.67ms   min=900ns  med=2µs    max=206.06ms p(90)=2.8µs  p(95)=3.4µs  
     http_req_connecting............: avg=1.65ms   min=0s     med=0s     max=205.88ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=3.51s    min=2.41s  med=3.43s  max=7.63s    p(90)=3.84s  p(95)=4.18s  
       { expected_response:true }...: avg=3.51s    min=2.41s  med=3.43s  max=7.63s    p(90)=3.84s  p(95)=4.18s  
   ✓ http_req_failed................: 0.00%  ✓ 0          ✗ 22972
     http_req_receiving.............: avg=51.01µs  min=16.7µs med=42.6µs max=6.75ms   p(90)=64.1µs p(95)=72µs   
     http_req_sending...............: avg=158.69µs min=5.9µs  med=12.2µs max=74.85ms  p(90)=22.9µs p(95)=28.29µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=3.51s    min=2.41s  med=3.43s  max=7.62s    p(90)=3.84s  p(95)=4.18s  
     http_reqs......................: 22972  113.380504/s
     iteration_duration.............: avg=3.51s    min=2.41s  med=3.43s  max=7.79s    p(90)=3.84s  p(95)=4.18s  
     iterations.....................: 22972  113.380504/s
     vus............................: 368    min=368      max=400
     vus_max........................: 400    min=400      max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ec7272e8-a8dd-4324-c9d6-3539e037d400/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6303461e-19b0-4c36-6a3c-4792e22d9000/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 19537 / ✗ 12
     ✗ valid response structure
      ↳  99% — ✓ 19537 / ✗ 12

     checks.........................: 99.95% ✓ 58623    ✗ 24   
     data_received..................: 98 MB  483 kB/s
     data_sent......................: 23 MB  115 kB/s
     http_req_blocked...............: avg=1.31ms   min=1.2µs   med=2.2µs  max=106.11ms p(90)=3.3µs   p(95)=4.4µs 
     http_req_connecting............: avg=1.29ms   min=0s      med=0s     max=102.19ms p(90)=0s      p(95)=0s    
     http_req_duration..............: avg=4.12s    min=2.26s   med=4.05s  max=8.77s    p(90)=4.59s   p(95)=4.91s 
       { expected_response:true }...: avg=4.12s    min=2.26s   med=4.05s  max=8.77s    p(90)=4.59s   p(95)=4.91s 
   ✓ http_req_failed................: 0.00%  ✓ 0        ✗ 19549
     http_req_receiving.............: avg=71.15µs  min=19.59µs med=43µs   max=27.19ms  p(90)=65.02µs p(95)=72.8µs
     http_req_sending...............: avg=184.55µs min=7µs     med=12.3µs max=92.23ms  p(90)=26.1µs  p(95)=30.1µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s       p(90)=0s      p(95)=0s    
     http_req_waiting...............: avg=4.11s    min=2.26s   med=4.05s  max=8.76s    p(90)=4.59s   p(95)=4.91s 
     http_reqs......................: 19549  96.63885/s
     iteration_duration.............: avg=4.12s    min=2.26s   med=4.05s  max=8.85s    p(90)=4.59s   p(95)=4.91s 
     iterations.....................: 19549  96.63885/s
     vus............................: 157    min=157    max=400
     vus_max........................: 400    min=400    max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/27362b5c-3a55-497e-dba8-244d6d7d8300/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ddb4ee6e-d8d1-4d27-24f3-945ef1332d00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 14275 / ✗ 84
     ✗ valid response structure
      ↳  99% — ✓ 14275 / ✗ 84

     checks.........................: 99.61% ✓ 42909     ✗ 168  
     data_received..................: 71 MB  354 kB/s
     data_sent......................: 17 MB  84 kB/s
     http_req_blocked...............: avg=2.93ms   min=1.3µs  med=2.7µs  max=315.27ms p(90)=4.5µs  p(95)=20.81µs 
     http_req_connecting............: avg=2.86ms   min=0s     med=0s     max=315.05ms p(90)=0s     p(95)=0s      
     http_req_duration..............: avg=5.58s    min=1.93s  med=5.25s  max=12.25s   p(90)=7.78s  p(95)=8.76s   
       { expected_response:true }...: avg=5.58s    min=1.93s  med=5.25s  max=12.25s   p(90)=7.78s  p(95)=8.76s   
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 14359
     http_req_receiving.............: avg=169.76µs min=24.2µs med=58.9µs max=56.76ms  p(90)=99µs   p(95)=123.8µs 
     http_req_sending...............: avg=698.4µs  min=9.4µs  med=16.2µs max=186.16ms p(90)=42.5µs p(95)=113.31µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=5.58s    min=1.93s  med=5.25s  max=12.25s   p(90)=7.78s  p(95)=8.75s   
     http_reqs......................: 14359  71.085475/s
     iteration_duration.............: avg=5.58s    min=1.93s  med=5.25s  max=12.25s   p(90)=7.78s  p(95)=8.78s   
     iterations.....................: 14359  71.085475/s
     vus............................: 51     min=51      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/da8c77ae-532b-4dc4-2fac-bf8f957e5a00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/54ad0b30-050a-4728-540a-e6269ed99a00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server-node16`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  74% — ✓ 7454 / ✗ 2604
     ✗ valid response structure
      ↳  74% — ✓ 7454 / ✗ 2604

     checks.........................: 82.74% ✓ 24966     ✗ 5208 
     data_received..................: 48 MB  238 kB/s
     data_sent......................: 12 MB  59 kB/s
     http_req_blocked...............: avg=1.13ms   min=1.3µs med=2.6µs  max=92.12ms p(90)=4.3µs  p(95)=17.7µs  
     http_req_connecting............: avg=1.1ms    min=0s    med=0s     max=81.99ms p(90)=0s     p(95)=0s      
     http_req_duration..............: avg=8.03s    min=1.12s med=7.67s  max=22.46s  p(90)=11.39s p(95)=12.42s  
       { expected_response:true }...: avg=8.03s    min=1.12s med=7.67s  max=22.46s  p(90)=11.39s p(95)=12.42s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 10058
     http_req_receiving.............: avg=66.91µs  min=21µs  med=56.6µs max=9.73ms  p(90)=83.6µs p(95)=95.12µs 
     http_req_sending...............: avg=127.72µs min=6.7µs med=14.7µs max=20.33ms p(90)=32.5µs p(95)=137.74µs
     http_req_tls_handshaking.......: avg=0s       min=0s    med=0s     max=0s      p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=8.03s    min=1.12s med=7.67s  max=22.46s  p(90)=11.39s p(95)=12.42s  
     http_reqs......................: 10058  49.463884/s
     iteration_duration.............: avg=8.03s    min=1.12s med=7.67s  max=22.46s  p(90)=11.4s  p(95)=12.45s  
     iterations.....................: 10058  49.463884/s
     vus............................: 78     min=78      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/292a0cd0-32b1-4971-61de-0cd211fed700/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d569ccfb-83f8-4edf-e33d-aeb0006f0f00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  95% — ✓ 8123 / ✗ 399
     ✗ no graphql errors
      ↳  75% — ✓ 6458 / ✗ 2064
     ✗ valid response structure
      ↳  79% — ✓ 6458 / ✗ 1665

     checks.........................: 83.59% ✓ 21039     ✗ 4128 
     data_received..................: 40 MB  188 kB/s
     data_sent......................: 10 MB  47 kB/s
     http_req_blocked...............: avg=2.87ms  min=1.7µs    med=2.9µs   max=148.48ms p(90)=36.06µs p(95)=22.33ms 
     http_req_connecting............: avg=2.69ms  min=0s       med=0s      max=99.66ms  p(90)=0s      p(95)=19.35ms 
     http_req_duration..............: avg=9.62s   min=930.73ms med=6.57s   max=1m0s     p(90)=9.07s   p(95)=34.51s  
       { expected_response:true }...: avg=7.15s   min=930.73ms med=6.49s   max=59.57s   p(90)=8.68s   p(95)=9.15s   
   ✓ http_req_failed................: 4.68%  ✓ 399       ✗ 8123 
     http_req_receiving.............: avg=86.74µs min=0s       med=70.5µs  max=33.91ms  p(90)=116.1µs p(95)=142.99µs
     http_req_sending...............: avg=1.66ms  min=9.5µs    med=17.55µs max=98.64ms  p(90)=82.59µs p(95)=995.62µs
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s      max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=9.62s   min=930.66ms med=6.57s   max=1m0s     p(90)=9.05s   p(95)=34.5s   
     http_reqs......................: 8522   39.924962/s
     iteration_duration.............: avg=9.63s   min=931.05ms med=6.57s   max=1m0s     p(90)=9.09s   p(95)=34.57s  
     iterations.....................: 8522   39.924962/s
     vus............................: 42     min=42      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/34e505d2-6630-4337-544f-761d89807200/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b1c7bcd1-3025-4fd4-7e15-2ea6c81c8700/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 4821    ✗ 0    
     data_received..................: 8.1 MB  35 kB/s
     data_sent......................: 1.9 MB  8.3 kB/s
     http_req_blocked...............: avg=16.19ms  min=1.9µs  med=3.5µs  max=168.6ms  p(90)=89.45ms  p(95)=98.97ms 
     http_req_connecting............: avg=15.79ms  min=0s     med=0s     max=130.79ms p(90)=88.95ms  p(95)=98.63ms 
     http_req_duration..............: avg=53.29s   min=28.98s med=56.53s max=57.19s   p(90)=56.94s   p(95)=56.99s  
       { expected_response:true }...: avg=53.29s   min=28.98s med=56.53s max=57.19s   p(90)=56.94s   p(95)=56.99s  
   ✓ http_req_failed................: 0.00%   ✓ 0       ✗ 1607 
     http_req_receiving.............: avg=91.67µs  min=34.5µs med=81.5µs max=4.48ms   p(90)=106.12µs p(95)=122.17µs
     http_req_sending...............: avg=787.91µs min=9.7µs  med=24.6µs max=75.94ms  p(90)=3.26ms   p(95)=3.86ms  
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=53.29s   min=28.98s med=56.53s max=57.19s   p(90)=56.94s   p(95)=56.99s  
     http_reqs......................: 1607    7.01984/s
     iteration_duration.............: avg=53.3s    min=28.98s med=56.53s max=57.2s    p(90)=56.94s   p(95)=57s     
     iterations.....................: 1607    7.01984/s
     vus............................: 5       min=5     max=400
     vus_max........................: 400     min=400   max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d55485d5-3771-496f-e515-6508d950f600/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/807de779-357c-4866-8008-779fe6fa0100/public" alt="HTTP Overview" />


  </details>