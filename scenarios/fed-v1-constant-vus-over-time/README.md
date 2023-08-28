## Overview for: `scenarios/fed-v1-constant-vus-over-time`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. It's being executed with a constant amount of VUs over a fixed amount of time. It measure things like memory usage, CPU usage, average RPS. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was running 400 VUs over 200s


### Comparison


| Gateway                             | RPS ⬇️ |        Requests         |          Duration          |
| :---------------------------------- | :----: | :---------------------: | :------------------------: |
| wundergraph                         |  740   | 148550 total, 0 failed  |   avg: 534ms, p95: 773ms   |
| mesh-bun                            |  538   | 108000 total, 0 failed  |  avg: 741ms, p95: 1190ms   |
| stitching-federation-with-yoga-bun  |  148   |  29937 total, 0 failed  |  avg: 2690ms, p95: 3463ms  |
| apollo-router                       |  113   |  23124 total, 0 failed  |  avg: 3485ms, p95: 4311ms  |
| apollo-gateway-with-yoga-bun        |   88   |  17936 total, 0 failed  |  avg: 4480ms, p95: 7473ms  |
| mesh-supergraph                     |   83   |  16847 total, 0 failed  |  avg: 4772ms, p95: 6302ms  |
| mesh                                |   76   |  15475 total, 0 failed  |  avg: 5206ms, p95: 6775ms  |
| apollo-gateway-with-yoga-uws        |   74   |  15266 total, 0 failed  |  avg: 5309ms, p95: 9916ms  |
| stitching-federation-with-yoga      |   73   |  14854 total, 8 failed  |  avg: 5443ms, p95: 8913ms  |
| mercurius                           |   72   |  14664 total, 0 failed  |  avg: 5483ms, p95: 6592ms  |
| stitching-federation-with-yoga-deno |   70   |  14203 total, 0 failed  |  avg: 5679ms, p95: 7163ms  |
| stitching-federation-with-yoga-uws  |   60   |  12372 total, 0 failed  | avg: 6541ms, p95: 10956ms  |
| apollo-gateway-with-yoga            |   59   | 12405 total, 489 failed | avg: 6592ms, p95: 28640ms  |
| apollo-server                       |   48   | 10036 total, 192 failed | avg: 8061ms, p95: 16508ms  |
| apollo-server-node16                |   35   |  7329 total, 0 failed   | avg: 11164ms, p95: 24891ms |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 445650    ✗ 0     
     data_received..................: 740 MB  3.7 MB/s
     data_sent......................: 176 MB  879 kB/s
     http_req_blocked...............: avg=266.86µs min=1.1µs    med=2.2µs    max=263.23ms p(90)=3.5µs    p(95)=4.3µs   
     http_req_connecting............: avg=250.89µs min=0s       med=0s       max=169.45ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=534.21ms min=99.89ms  med=516.75ms max=1.31s    p(90)=709.99ms p(95)=773.37ms
       { expected_response:true }...: avg=534.21ms min=99.89ms  med=516.75ms max=1.31s    p(90)=709.99ms p(95)=773.37ms
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 148550
     http_req_receiving.............: avg=5.98ms   min=14.3µs   med=35.4µs   max=501.33ms p(90)=255.8µs  p(95)=18.36ms 
     http_req_sending...............: avg=823.42µs min=7.1µs    med=12µs     max=411.88ms p(90)=23.6µs   p(95)=107.4µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=527.41ms min=99.84ms  med=513.28ms max=1.23s    p(90)=693.3ms  p(95)=749.36ms
     http_reqs......................: 148550  740.87201/s
     iteration_duration.............: avg=539.05ms min=100.43ms med=521.32ms max=1.41s    p(90)=716.39ms p(95)=781.21ms
     iterations.....................: 148550  740.87201/s
     vus............................: 400     min=400     max=400 
     vus_max........................: 400     min=400     max=400 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/724cbb8b-b473-427a-cf67-88a829ac0300/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/29478715-680f-4683-f3f6-95746a2f6e00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  0% — ✓ 0 / ✗ 108000
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 108000

     checks.........................: 33.33% ✓ 108000     ✗ 216000
     data_received..................: 103 MB 512 kB/s
     data_sent......................: 128 MB 639 kB/s
     http_req_blocked...............: avg=227.91µs min=1.1µs    med=2.2µs    max=128.23ms p(90)=3.3µs   p(95)=4.2µs   
     http_req_connecting............: avg=217.51µs min=0s       med=0s       max=124.94ms p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=741.03ms min=144.26ms med=723.21ms max=1.84s    p(90)=1.11s   p(95)=1.19s   
       { expected_response:true }...: avg=741.03ms min=144.26ms med=723.21ms max=1.84s    p(90)=1.11s   p(95)=1.19s   
   ✓ http_req_failed................: 0.00%  ✓ 0          ✗ 108000
     http_req_receiving.............: avg=527.52µs min=13.2µs   med=30.5µs   max=276.95ms p(90)=219.3µs p(95)=384.51µs
     http_req_sending...............: avg=239.14µs min=7.4µs    med=12.8µs   max=256.3ms  p(90)=52.2µs  p(95)=167.7µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=740.26ms min=142.19ms med=722.77ms max=1.81s    p(90)=1.1s    p(95)=1.18s   
     http_reqs......................: 108000 538.338296/s
     iteration_duration.............: avg=742.1ms  min=181ms    med=723.77ms max=1.89s    p(90)=1.11s   p(95)=1.19s   
     iterations.....................: 108000 538.338296/s
     vus............................: 64     min=64       max=400 
     vus_max........................: 400    min=400      max=400 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8a34fb21-1526-4d61-95a8-f4da0a64e300/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/82003cb9-7337-4508-2cca-43ac4e4b1200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 29936 / ✗ 1
     ✗ valid response structure
      ↳  99% — ✓ 29936 / ✗ 1

     checks.........................: 99.99% ✓ 89809      ✗ 2    
     data_received..................: 149 MB 739 kB/s
     data_sent......................: 36 MB  176 kB/s
     http_req_blocked...............: avg=790.34µs min=900ns med=1.7µs  max=110.43ms p(90)=2.6µs  p(95)=3.4µs  
     http_req_connecting............: avg=774.73µs min=0s    med=0s     max=110.03ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=2.69s    min=1.88s med=2.56s  max=7.12s    p(90)=2.96s  p(95)=3.46s  
       { expected_response:true }...: avg=2.69s    min=1.88s med=2.56s  max=7.12s    p(90)=2.96s  p(95)=3.46s  
   ✓ http_req_failed................: 0.00%  ✓ 0          ✗ 29937
     http_req_receiving.............: avg=100.9µs  min=14µs  med=25.7µs max=88.54ms  p(90)=47.7µs p(95)=63.32µs
     http_req_sending...............: avg=182.53µs min=6µs   med=9.7µs  max=140.15ms p(90)=23.1µs p(95)=94.72µs
     http_req_tls_handshaking.......: avg=0s       min=0s    med=0s     max=0s       p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=2.68s    min=1.88s med=2.56s  max=7.11s    p(90)=2.96s  p(95)=3.46s  
     http_reqs......................: 29937  148.394068/s
     iteration_duration.............: avg=2.69s    min=1.88s med=2.57s  max=7.14s    p(90)=2.96s  p(95)=3.52s  
     iterations.....................: 29937  148.394068/s
     vus............................: 400    min=400      max=400
     vus_max........................: 400    min=400      max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ad8af485-d37c-4d36-8e10-0f9ebfcc0c00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e1a1eda5-1629-4bf1-d436-6ea2c97ac300/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 23120 / ✗ 4
     ✗ valid response structure
      ↳  99% — ✓ 23120 / ✗ 4

     checks.........................: 99.98% ✓ 69364   ✗ 8    
     data_received..................: 115 MB 567 kB/s
     data_sent......................: 27 MB  135 kB/s
     http_req_blocked...............: avg=1.07ms   min=1.4µs  med=2.7µs  max=119.8ms  p(90)=4µs    p(95)=8.4µs
     http_req_connecting............: avg=1.06ms   min=0s     med=0s     max=119.75ms p(90)=0s     p(95)=0s   
     http_req_duration..............: avg=3.48s    min=1.65s  med=3.36s  max=9.26s    p(90)=3.79s  p(95)=4.31s
       { expected_response:true }...: avg=3.48s    min=1.65s  med=3.36s  max=9.26s    p(90)=3.79s  p(95)=4.31s
   ✓ http_req_failed................: 0.00%  ✓ 0       ✗ 23124
     http_req_receiving.............: avg=61.79µs  min=20.8µs med=53.9µs max=14.59ms  p(90)=77.5µs p(95)=85µs 
     http_req_sending...............: avg=107.22µs min=6.7µs  med=14.2µs max=65.92ms  p(90)=28.3µs p(95)=34µs 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s     p(95)=0s   
     http_req_waiting...............: avg=3.48s    min=1.65s  med=3.36s  max=9.26s    p(90)=3.79s  p(95)=4.31s
     http_reqs......................: 23124  113.898/s
     iteration_duration.............: avg=3.48s    min=1.65s  med=3.36s  max=9.36s    p(90)=3.79s  p(95)=4.31s
     iterations.....................: 23124  113.898/s
     vus............................: 69     min=69    max=400
     vus_max........................: 400    min=400   max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/190a6746-104b-4d60-0bd3-229d621b0500/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/70389007-0abd-471e-5b4d-f21bb17b8200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 17933 / ✗ 3
     ✗ valid response structure
      ↳  99% — ✓ 17933 / ✗ 3

     checks.........................: 99.98% ✓ 53802     ✗ 6    
     data_received..................: 89 MB  442 kB/s
     data_sent......................: 21 MB  105 kB/s
     http_req_blocked...............: avg=1ms      min=1µs      med=2µs     max=79.73ms  p(90)=3.3µs   p(95)=6.4µs   
     http_req_connecting............: avg=992.69µs min=0s       med=0s      max=76.99ms  p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=4.47s    min=467.8ms  med=3.86s   max=12.31s   p(90)=6.68s   p(95)=7.47s   
       { expected_response:true }...: avg=4.47s    min=467.8ms  med=3.86s   max=12.31s   p(90)=6.68s   p(95)=7.47s   
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 17936
     http_req_receiving.............: avg=4.09ms   min=15.3µs   med=34.29µs max=293.92ms p(90)=80.64µs p(95)=354.57µs
     http_req_sending...............: avg=413.79µs min=5.7µs    med=11.7µs  max=297.78ms p(90)=31.7µs  p(95)=143.69µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=4.47s    min=466.14ms med=3.86s   max=12.31s   p(90)=6.67s   p(95)=7.47s   
     http_reqs......................: 17936  88.739386/s
     iteration_duration.............: avg=4.48s    min=519.14ms med=3.86s   max=12.37s   p(90)=6.68s   p(95)=7.47s   
     iterations.....................: 17936  88.739386/s
     vus............................: 41     min=41      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3fdf0a35-9f70-4e2f-2fff-7e36fef33c00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5a1ef4ec-0f7e-45de-1d34-bfab1858f400/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 16686 / ✗ 161
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 16847

     checks.........................: 66.34% ✓ 33533     ✗ 17008
     data_received..................: 86 MB  425 kB/s
     data_sent......................: 20 MB  99 kB/s
     http_req_blocked...............: avg=2.91ms   min=1.4µs  med=2.5µs  max=234.76ms p(90)=3.8µs   p(95)=5.5µs  
     http_req_connecting............: avg=2.88ms   min=0s     med=0s     max=234.72ms p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=4.77s    min=2.19s  med=4.52s  max=12.14s   p(90)=5.63s   p(95)=6.3s   
       { expected_response:true }...: avg=4.77s    min=2.19s  med=4.52s  max=12.14s   p(90)=5.63s   p(95)=6.3s   
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 16847
     http_req_receiving.............: avg=67.44µs  min=23.3µs med=59.7µs max=7.48ms   p(90)=86.25µs p(95)=95.91µs
     http_req_sending...............: avg=357.88µs min=8.5µs  med=15µs   max=110.93ms p(90)=30.6µs  p(95)=36.7µs 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=4.77s    min=2.19s  med=4.52s  max=12.13s   p(90)=5.63s   p(95)=6.3s   
     http_reqs......................: 16847  83.327781/s
     iteration_duration.............: avg=4.77s    min=2.19s  med=4.52s  max=12.2s    p(90)=5.63s   p(95)=6.3s   
     iterations.....................: 16847  83.327781/s
     vus............................: 136    min=136     max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/89aa6066-7cff-45cf-9526-db948cf75e00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/44283fcf-80a9-41b5-5767-b97e8d659800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  98% — ✓ 15285 / ✗ 190
     ✗ valid response structure
      ↳  98% — ✓ 15285 / ✗ 190

     checks.........................: 99.18% ✓ 46045     ✗ 380  
     data_received..................: 80 MB  396 kB/s
     data_sent......................: 18 MB  91 kB/s
     http_req_blocked...............: avg=845.31µs min=1.5µs med=2.5µs  max=147.42ms p(90)=4µs    p(95)=12.5µs 
     http_req_connecting............: avg=814.94µs min=0s    med=0s     max=71.08ms  p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=5.2s     min=1.99s med=5.09s  max=12.09s   p(90)=6.03s  p(95)=6.77s  
       { expected_response:true }...: avg=5.2s     min=1.99s med=5.09s  max=12.09s   p(90)=6.03s  p(95)=6.77s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 15475
     http_req_receiving.............: avg=77.76µs  min=25µs  med=52.1µs max=64.13ms  p(90)=85.6µs p(95)=102.8µs
     http_req_sending...............: avg=607.96µs min=9.7µs med=14.6µs max=152.32ms p(90)=35.6µs p(95)=46.6µs 
     http_req_tls_handshaking.......: avg=0s       min=0s    med=0s     max=0s       p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=5.2s     min=1.99s med=5.09s  max=12.09s   p(90)=6.03s  p(95)=6.77s  
     http_reqs......................: 15475  76.303091/s
     iteration_duration.............: avg=5.2s     min=1.99s med=5.09s  max=12.09s   p(90)=6.03s  p(95)=6.77s  
     iterations.....................: 15475  76.303091/s
     vus............................: 25     min=25      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/840079fa-99a9-4d20-1d1a-1a9f24c81500/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f133603a-c5f3-4e04-e88c-66b895404800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga-uws`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  89% — ✓ 13713 / ✗ 1553
     ✗ valid response structure
      ↳  89% — ✓ 13713 / ✗ 1553

     checks.........................: 93.21% ✓ 42692     ✗ 3106 
     data_received..................: 72 MB  354 kB/s
     data_sent......................: 18 MB  89 kB/s
     http_req_blocked...............: avg=1.36ms   min=900ns    med=2µs     max=99.44ms  p(90)=3.1µs   p(95)=7.17µs 
     http_req_connecting............: avg=1.34ms   min=0s       med=0s      max=99.25ms  p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=5.3s     min=662.78ms med=4.95s   max=16.81s   p(90)=8.76s   p(95)=9.91s  
       { expected_response:true }...: avg=5.3s     min=662.78ms med=4.95s   max=16.81s   p(90)=8.76s   p(95)=9.91s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 15266
     http_req_receiving.............: avg=58.68µs  min=14.89µs  med=34.09µs max=35.16ms  p(90)=64.09µs p(95)=76.39µs
     http_req_sending...............: avg=273.03µs min=6.5µs    med=11.9µs  max=106.62ms p(90)=26.4µs  p(95)=91.02µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s       p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=5.3s     min=662.72ms med=4.95s   max=16.81s   p(90)=8.76s   p(95)=9.91s  
     http_reqs......................: 15266  74.881377/s
     iteration_duration.............: avg=5.31s    min=663.38ms med=4.95s   max=16.81s   p(90)=8.76s   p(95)=9.92s  
     iterations.....................: 15266  74.881377/s
     vus............................: 99     min=99      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/45a6f057-0ca4-4252-0584-e241816e0e00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5b26fff3-4491-4243-fe8f-cf60a7e19c00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  99% — ✓ 14846 / ✗ 8
     ✗ no graphql errors
      ↳  90% — ✓ 13479 / ✗ 1375
     ✗ valid response structure
      ↳  90% — ✓ 13479 / ✗ 1367

     checks.........................: 93.82% ✓ 41804    ✗ 2750 
     data_received..................: 94 MB  464 kB/s
     data_sent......................: 18 MB  87 kB/s
     http_req_blocked...............: avg=2.27ms   min=1.3µs    med=2.4µs  max=174.54ms p(90)=4µs    p(95)=15.3µs  
     http_req_connecting............: avg=2.24ms   min=0s       med=0s     max=174.2ms  p(90)=0s     p(95)=0s      
     http_req_duration..............: avg=5.44s    min=883.69ms med=4.68s  max=1m0s     p(90)=7.82s  p(95)=8.91s   
       { expected_response:true }...: avg=5.41s    min=883.69ms med=4.68s  max=59.47s   p(90)=7.8s   p(95)=8.9s    
   ✓ http_req_failed................: 0.05%  ✓ 8        ✗ 14846
     http_req_receiving.............: avg=64.17µs  min=0s       med=52.9µs max=9.11ms   p(90)=81.7µs p(95)=101.13µs
     http_req_sending...............: avg=654.28µs min=8.4µs    med=13.4µs max=70.52ms  p(90)=28.6µs p(95)=39.6µs  
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=5.44s    min=883.64ms med=4.68s  max=59.99s   p(90)=7.82s  p(95)=8.91s   
     http_reqs......................: 14854  73.04744/s
     iteration_duration.............: avg=5.44s    min=883.9ms  med=4.68s  max=1m0s     p(90)=7.83s  p(95)=8.91s   
     iterations.....................: 14854  73.04744/s
     vus............................: 168    min=168    max=400
     vus_max........................: 400    min=400    max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1c108140-c554-4eb7-a7c5-ee8011fdd000/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7dd13ed9-e83b-40ad-85c8-442f054cf800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 43992     ✗ 0    
     data_received..................: 74 MB   365 kB/s
     data_sent......................: 17 MB   86 kB/s
     http_req_blocked...............: avg=1.69ms   min=1.3µs  med=3µs    max=100.45ms p(90)=5.8µs  p(95)=15.7µs  
     http_req_connecting............: avg=1.66ms   min=0s     med=0s     max=100.39ms p(90)=0s     p(95)=0s      
     http_req_duration..............: avg=5.48s    min=2.04s  med=5.35s  max=10.33s   p(90)=6.34s  p(95)=6.59s   
       { expected_response:true }...: avg=5.48s    min=2.04s  med=5.35s  max=10.33s   p(90)=6.34s  p(95)=6.59s   
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 14664
     http_req_receiving.............: avg=73.16µs  min=22.4µs med=63µs   max=11.92ms  p(90)=99.9µs p(95)=112.38µs
     http_req_sending...............: avg=198.78µs min=7µs    med=16.4µs max=21.87ms  p(90)=33.7µs p(95)=57.4µs  
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=5.48s    min=2.04s  med=5.35s  max=10.33s   p(90)=6.34s  p(95)=6.59s   
     http_reqs......................: 14664   72.577827/s
     iteration_duration.............: avg=5.48s    min=2.04s  med=5.36s  max=10.38s   p(90)=6.35s  p(95)=6.59s   
     iterations.....................: 14664   72.577827/s
     vus............................: 61      min=61      max=400
     vus_max........................: 400     min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1c2a065c-709c-495b-1c83-cb0779f05a00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a74c35f4-8cc0-4370-8d9a-dc31f4002f00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-deno`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 14126 / ✗ 77
     ✗ valid response structure
      ↳  99% — ✓ 14126 / ✗ 77

     checks.........................: 99.63% ✓ 42455     ✗ 154  
     data_received..................: 72 MB  354 kB/s
     data_sent......................: 17 MB  83 kB/s
     http_req_blocked...............: avg=1.21ms   min=1.2µs med=2.9µs  max=92.33ms p(90)=4.8µs    p(95)=14.8µs  
     http_req_connecting............: avg=1.18ms   min=0s    med=0s     max=79.66ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=5.67s    min=2.79s med=5.53s  max=10.78s  p(90)=6.31s    p(95)=7.16s   
       { expected_response:true }...: avg=5.67s    min=2.79s med=5.53s  max=10.78s  p(90)=6.31s    p(95)=7.16s   
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 14203
     http_req_receiving.............: avg=135.19µs min=18µs  med=41.3µs max=30.84ms p(90)=101.08µs p(95)=143.39µs
     http_req_sending...............: avg=239.25µs min=7.5µs med=15.7µs max=48.79ms p(90)=43.48µs  p(95)=183.5µs 
     http_req_tls_handshaking.......: avg=0s       min=0s    med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=5.67s    min=2.79s med=5.53s  max=10.76s  p(90)=6.31s    p(95)=7.16s   
     http_reqs......................: 14203  70.012298/s
     iteration_duration.............: avg=5.68s    min=2.79s med=5.53s  max=10.78s  p(90)=6.31s    p(95)=7.16s   
     iterations.....................: 14203  70.012298/s
     vus............................: 41     min=41      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/358f50bb-ba7a-4f46-2f1d-dd00c4045100/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2a30a11c-2c15-49b8-59fc-610d0a67a400/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-uws`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  89% — ✓ 11060 / ✗ 1312
     ✗ valid response structure
      ↳  89% — ✓ 11060 / ✗ 1312

     checks.........................: 92.93% ✓ 34492     ✗ 2624 
     data_received..................: 83 MB  407 kB/s
     data_sent......................: 15 MB  72 kB/s
     http_req_blocked...............: avg=1.36ms   min=1.4µs med=2.6µs   max=120.87ms p(90)=4.4µs   p(95)=24.8µs  
     http_req_connecting............: avg=1.33ms   min=0s    med=0s      max=120.81ms p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=6.54s    min=1.49s med=5.57s   max=18.04s   p(90)=9.38s   p(95)=10.95s  
       { expected_response:true }...: avg=6.54s    min=1.49s med=5.57s   max=18.04s   p(90)=9.38s   p(95)=10.95s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 12372
     http_req_receiving.............: avg=155.58µs min=24µs  med=64.85µs max=62.86ms  p(90)=111.8µs p(95)=147.59µs
     http_req_sending...............: avg=252.77µs min=9µs   med=16.2µs  max=59.74ms  p(90)=44.6µs  p(95)=114.22µs
     http_req_tls_handshaking.......: avg=0s       min=0s    med=0s      max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=6.54s    min=1.49s med=5.57s   max=18.04s   p(90)=9.37s   p(95)=10.95s  
     http_reqs......................: 12372  60.681057/s
     iteration_duration.............: avg=6.54s    min=1.49s med=5.57s   max=18.04s   p(90)=9.39s   p(95)=10.95s  
     iterations.....................: 12372  60.681057/s
     vus............................: 51     min=51      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e00016e7-42b8-4016-b010-fa6b474aa200/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/078b3629-346b-42c7-5d34-3f538fbd6a00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  96% — ✓ 11916 / ✗ 489
     ✗ no graphql errors
      ↳  94% — ✓ 11769 / ✗ 636
     ✗ valid response structure
      ↳  98% — ✓ 11769 / ✗ 147

     checks.........................: 96.53% ✓ 35454     ✗ 1272 
     data_received..................: 60 MB  283 kB/s
     data_sent......................: 15 MB  70 kB/s
     http_req_blocked...............: avg=1.56ms   min=1.3µs med=2.7µs  max=135.74ms p(90)=13.26µs p(95)=6.96ms  
     http_req_connecting............: avg=1.49ms   min=0s    med=0s     max=85.28ms  p(90)=0s      p(95)=6.31ms  
     http_req_duration..............: avg=6.59s    min=1s    med=3.89s  max=1m0s     p(90)=4.61s   p(95)=28.63s  
       { expected_response:true }...: avg=4.39s    min=1s    med=3.88s  max=59.92s   p(90)=4.43s   p(95)=4.72s   
   ✓ http_req_failed................: 3.94%  ✓ 489       ✗ 11916
     http_req_receiving.............: avg=66.2µs   min=0s    med=60.1µs max=30.03ms  p(90)=84.5µs  p(95)=90.5µs  
     http_req_sending...............: avg=218.49µs min=6.9µs med=16.7µs max=39.15ms  p(90)=35.4µs  p(95)=289.84µs
     http_req_tls_handshaking.......: avg=0s       min=0s    med=0s     max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=6.59s    min=1s    med=3.89s  max=1m0s     p(90)=4.61s   p(95)=28.63s  
     http_reqs......................: 12405  59.021019/s
     iteration_duration.............: avg=6.59s    min=1s    med=3.89s  max=1m0s     p(90)=4.61s   p(95)=28.64s  
     iterations.....................: 12405  59.021019/s
     vus............................: 31     min=31      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a1f18947-e463-49d6-ab7c-cfe33f057600/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a3240093-c6f4-411e-2de7-ecf4fb101d00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  98% — ✓ 9844 / ✗ 192
     ✗ no graphql errors
      ↳  75% — ✓ 7594 / ✗ 2442
     ✗ valid response structure
      ↳  77% — ✓ 7594 / ✗ 2250

     checks.........................: 83.67% ✓ 25032     ✗ 4884 
     data_received..................: 47 MB  228 kB/s
     data_sent......................: 12 MB  58 kB/s
     http_req_blocked...............: avg=5.18ms   min=1.5µs    med=2.9µs  max=224.25ms p(90)=6.1µs  p(95)=1.28ms  
     http_req_connecting............: avg=5.1ms    min=0s       med=0s     max=224.08ms p(90)=0s     p(95)=1.05ms  
     http_req_duration..............: avg=8.06s    min=756.5ms  med=6.56s  max=1m0s     p(90)=10.62s p(95)=16.5s   
       { expected_response:true }...: avg=7.04s    min=756.5ms  med=6.47s  max=58.85s   p(90)=10.07s p(95)=12.32s  
   ✓ http_req_failed................: 1.91%  ✓ 192       ✗ 9844 
     http_req_receiving.............: avg=105.95µs min=0s       med=66.5µs max=42.37ms  p(90)=97.6µs p(95)=116.13µs
     http_req_sending...............: avg=931.53µs min=9.4µs    med=17.3µs max=118.89ms p(90)=40.7µs p(95)=752.9µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=8.06s    min=756.39ms med=6.56s  max=1m0s     p(90)=10.62s p(95)=16.5s   
     http_reqs......................: 10036  48.814793/s
     iteration_duration.............: avg=8.06s    min=757.54ms med=6.56s  max=1m0s     p(90)=10.62s p(95)=16.52s  
     iterations.....................: 10036  48.814793/s
     vus............................: 54     min=54      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/676a2458-212c-40ca-0f51-c174fe5e5f00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/94f980a0-1b5c-4b83-ba87-bb24bafb6600/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server-node16`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  53% — ✓ 3945 / ✗ 3384
     ✗ valid response structure
      ↳  53% — ✓ 3945 / ✗ 3384

     checks.........................: 69.21% ✓ 15219     ✗ 6768 
     data_received..................: 32 MB  154 kB/s
     data_sent......................: 8.7 MB 42 kB/s
     http_req_blocked...............: avg=8.38ms   min=1.5µs    med=3.3µs  max=370.3ms  p(90)=9.33µs  p(95)=125.87ms
     http_req_connecting............: avg=8.26ms   min=0s       med=0s     max=370.23ms p(90)=0s      p(95)=125.81ms
     http_req_duration..............: avg=11.16s   min=189.66ms med=11.21s max=34.04s   p(90)=21.51s  p(95)=24.89s  
       { expected_response:true }...: avg=11.16s   min=189.66ms med=11.21s max=34.04s   p(90)=21.51s  p(95)=24.89s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 7329 
     http_req_receiving.............: avg=111.37µs min=32.5µs   med=83.5µs max=19.31ms  p(90)=138.1µs p(95)=164.66µs
     http_req_sending...............: avg=6.4ms    min=12µs     med=23.3µs max=255.42ms p(90)=59.01µs p(95)=26.91ms 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=11.15s   min=189.51ms med=11.21s max=34.04s   p(90)=21.51s  p(95)=24.89s  
     http_reqs......................: 7329   35.497293/s
     iteration_duration.............: avg=11.17s   min=190.72ms med=11.21s max=34.04s   p(90)=21.51s  p(95)=24.89s  
     iterations.....................: 7329   35.497293/s
     vus............................: 128    min=128     max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/29b26f8d-22bc-43b2-42ee-7b7893277000/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1454a96e-ade4-47a5-8e86-c750af91d400/public" alt="HTTP Overview" />


  </details>