## Overview for: `scenarios/fed-v1-constants-vus-subgraphs-delay`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. All subgraphs have an intentional delay on replying, and this creates additional pressure on the gateway's memory. We are running a heavy load of concurrent VUs to measure response time and other stats, during stress. It measure things like memory usage, CPU usage, response times.


This scenario was running 400 VUs over 200s


### Comparison


| Gateway              | RPS ⬇️ |        Requests        |          Duration          |
| :------------------- | :----: | :--------------------: | :------------------------: |
| mesh-bun             |  607   | 121751 total, 0 failed |  avg: 657ms, p95: 1065ms   |
| wundergraph          |  241   | 48704 total, 0 failed  |  avg: 1647ms, p95: 1919ms  |
| apollo-router        |  106   | 21661 total, 0 failed  |  avg: 3729ms, p95: 5601ms  |
| mesh-supergraph      |   85   | 17200 total, 0 failed  |  avg: 4674ms, p95: 5756ms  |
| mesh                 |   76   | 15628 total, 0 failed  |  avg: 5204ms, p95: 6609ms  |
| apollo-server-node16 |   48   | 10107 total, 0 failed  | avg: 8090ms, p95: 13738ms  |
| apollo-server        |   44   | 9580 total, 561 failed | avg: 8636ms, p95: 59775ms  |
| mercurius            |   7    |  1611 total, 0 failed  | avg: 53159ms, p95: 56924ms |



<details>
  <summary>Summary for: `mesh-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  0% — ✓ 0 / ✗ 121751
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 121751

     checks.........................: 33.33% ✓ 121751     ✗ 243502
     data_received..................: 116 MB 578 kB/s
     data_sent......................: 145 MB 721 kB/s
     http_req_blocked...............: avg=124.75µs min=1µs      med=2.1µs    max=85.2ms   p(90)=3µs      p(95)=3.8µs   
     http_req_connecting............: avg=115.87µs min=0s       med=0s       max=59.05ms  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=657.25ms min=247.9ms  med=596.94ms max=1.84s    p(90)=979.26ms p(95)=1.06s   
       { expected_response:true }...: avg=657.25ms min=247.9ms  med=596.94ms max=1.84s    p(90)=979.26ms p(95)=1.06s   
   ✓ http_req_failed................: 0.00%  ✓ 0          ✗ 121751
     http_req_receiving.............: avg=540.56µs min=12.6µs   med=26.5µs   max=277.5ms  p(90)=205.6µs  p(95)=353.9µs 
     http_req_sending...............: avg=141.08µs min=7.1µs    med=12µs     max=259.99ms p(90)=43.7µs   p(95)=169.55µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=656.56ms min=247.81ms med=596.28ms max=1.83s    p(90)=978.44ms p(95)=1.06s   
     http_reqs......................: 121751 607.447108/s
     iteration_duration.............: avg=657.88ms min=248.14ms med=597.43ms max=1.9s     p(90)=979.96ms p(95)=1.06s   
     iterations.....................: 121751 607.447108/s
     vus............................: 400    min=400      max=400 
     vus_max........................: 400    min=400      max=400 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2eaf0ad6-e8a5-4c90-2dcf-98bd1f9c2200/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/fa3458ef-2a5c-4517-9f01-bdf96728a500/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 146112     ✗ 0    
     data_received..................: 243 MB  1.2 MB/s
     data_sent......................: 58 MB   287 kB/s
     http_req_blocked...............: avg=328.98µs min=900ns  med=1.9µs  max=69.36ms  p(90)=2.8µs    p(95)=3.3µs   
     http_req_connecting............: avg=322.06µs min=0s     med=0s     max=69.34ms  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=1.64s    min=1.07s  med=1.64s  max=2.25s    p(90)=1.84s    p(95)=1.91s   
       { expected_response:true }...: avg=1.64s    min=1.07s  med=1.64s  max=2.25s    p(90)=1.84s    p(95)=1.91s   
   ✓ http_req_failed................: 0.00%   ✓ 0          ✗ 48704
     http_req_receiving.............: avg=748.2µs  min=13.6µs med=27.1µs max=260.33ms p(90)=217.79µs p(95)=363.19µs
     http_req_sending...............: avg=458.69µs min=5.6µs  med=10.4µs max=276.38ms p(90)=24.39µs  p(95)=110.78µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=1.64s    min=1.07s  med=1.64s  max=2.25s    p(90)=1.84s    p(95)=1.91s   
     http_reqs......................: 48704   241.920564/s
     iteration_duration.............: avg=1.64s    min=1.07s  med=1.64s  max=2.26s    p(90)=1.84s    p(95)=1.92s   
     iterations.....................: 48704   241.920564/s
     vus............................: 220     min=220      max=400
     vus_max........................: 400     min=400      max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6b04bca9-5a49-4aec-fa15-f5631e032400/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0784bcd4-bea5-4f18-3e62-8c92243f0900/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 21633 / ✗ 28
     ✗ valid response structure
      ↳  99% — ✓ 21633 / ✗ 28

     checks.........................: 99.91% ✓ 64927      ✗ 56   
     data_received..................: 108 MB 531 kB/s
     data_sent......................: 26 MB  127 kB/s
     http_req_blocked...............: avg=587.77µs min=1µs     med=2.4µs  max=73.44ms p(90)=3.6µs  p(95)=5.4µs 
     http_req_connecting............: avg=573.14µs min=0s      med=0s     max=61.32ms p(90)=0s     p(95)=0s    
     http_req_duration..............: avg=3.72s    min=1.27s   med=3.56s  max=10.19s  p(90)=4.77s  p(95)=5.6s  
       { expected_response:true }...: avg=3.72s    min=1.27s   med=3.56s  max=10.19s  p(90)=4.77s  p(95)=5.6s  
   ✓ http_req_failed................: 0.00%  ✓ 0          ✗ 21661
     http_req_receiving.............: avg=54.55µs  min=19.59µs med=49.4µs max=8.37ms  p(90)=73.7µs p(95)=80µs  
     http_req_sending...............: avg=165.57µs min=6.2µs   med=14.1µs max=24.42ms p(90)=27.7µs p(95)=33.4µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s      p(90)=0s     p(95)=0s    
     http_req_waiting...............: avg=3.72s    min=1.27s   med=3.56s  max=10.19s  p(90)=4.77s  p(95)=5.6s  
     http_reqs......................: 21661  106.640314/s
     iteration_duration.............: avg=3.73s    min=1.27s   med=3.56s  max=10.19s  p(90)=4.77s  p(95)=5.6s  
     iterations.....................: 21661  106.640314/s
     vus............................: 34     min=34       max=400
     vus_max........................: 400    min=400      max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8f17a347-d2d1-4508-c020-e35dbd2d4700/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8d7c4660-1dea-47b3-3430-759d6f0ddf00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 17141 / ✗ 59
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 17200

     checks.........................: 66.55% ✓ 34341     ✗ 17259
     data_received..................: 87 MB  429 kB/s
     data_sent......................: 20 MB  101 kB/s
     http_req_blocked...............: avg=1.92ms   min=1.2µs  med=2.4µs  max=213.55ms p(90)=3.7µs  p(95)=4.8µs 
     http_req_connecting............: avg=1.89ms   min=0s     med=0s     max=203.04ms p(90)=0s     p(95)=0s    
     http_req_duration..............: avg=4.67s    min=3.34s  med=4.52s  max=9.43s    p(90)=5.05s  p(95)=5.75s 
       { expected_response:true }...: avg=4.67s    min=3.34s  med=4.52s  max=9.43s    p(90)=5.05s  p(95)=5.75s 
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 17200
     http_req_receiving.............: avg=64.66µs  min=23.7µs med=52.8µs max=12.54ms  p(90)=78.1µs p(95)=87.2µs
     http_req_sending...............: avg=463.88µs min=8.3µs  med=14µs   max=135.24ms p(90)=28.6µs p(95)=35.1µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s     p(95)=0s    
     http_req_waiting...............: avg=4.67s    min=3.34s  med=4.52s  max=9.43s    p(90)=5.05s  p(95)=5.75s 
     http_reqs......................: 17200  85.305196/s
     iteration_duration.............: avg=4.67s    min=3.34s  med=4.52s  max=9.51s    p(90)=5.05s  p(95)=5.75s 
     iterations.....................: 17200  85.305196/s
     vus............................: 326    min=326     max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f9c3bcba-11de-4c5a-9026-1459c1543e00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/608a84a9-7962-4e37-0947-53abb7acc700/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 15606 / ✗ 22
     ✗ valid response structure
      ↳  99% — ✓ 15606 / ✗ 22

     checks.........................: 99.90% ✓ 46840    ✗ 44   
     data_received..................: 78 MB  383 kB/s
     data_sent......................: 19 MB  91 kB/s
     http_req_blocked...............: avg=2.69ms  min=1.5µs  med=2.8µs  max=291.46ms p(90)=4.2µs  p(95)=9.2µs  
     http_req_connecting............: avg=2.65ms  min=0s     med=0s     max=259.27ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=5.2s    min=3.76s  med=5.03s  max=9.98s    p(90)=5.78s  p(95)=6.6s   
       { expected_response:true }...: avg=5.2s    min=3.76s  med=5.03s  max=9.98s    p(90)=5.78s  p(95)=6.6s   
   ✓ http_req_failed................: 0.00%  ✓ 0        ✗ 15628
     http_req_receiving.............: avg=95.37µs min=24.5µs med=60µs   max=48.14ms  p(90)=83.8µs p(95)=94.57µs
     http_req_sending...............: avg=1.98ms  min=9.9µs  med=15.8µs max=185.16ms p(90)=31.5µs p(95)=41.73µs
     http_req_tls_handshaking.......: avg=0s      min=0s     med=0s     max=0s       p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=5.2s    min=3.76s  med=5.03s  max=9.92s    p(90)=5.78s  p(95)=6.6s   
     http_reqs......................: 15628  76.59442/s
     iteration_duration.............: avg=5.2s    min=3.76s  med=5.03s  max=10.13s   p(90)=5.78s  p(95)=6.61s  
     iterations.....................: 15628  76.59442/s
     vus............................: 146    min=146    max=400
     vus_max........................: 400    min=400    max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9d711497-fc8c-4da2-5d4c-2ce2c316b000/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/52c2009a-1395-486b-8993-f3dcbbf27200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server-node16`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  70% — ✓ 7124 / ✗ 2983
     ✗ valid response structure
      ↳  70% — ✓ 7124 / ✗ 2983

     checks.........................: 80.32% ✓ 24355     ✗ 5966 
     data_received..................: 48 MB  233 kB/s
     data_sent......................: 12 MB  58 kB/s
     http_req_blocked...............: avg=2.69ms   min=1.4µs  med=2.6µs  max=130.41ms p(90)=4.2µs  p(95)=18.7µs  
     http_req_connecting............: avg=2.65ms   min=0s     med=0s     max=116.87ms p(90)=0s     p(95)=0s      
     http_req_duration..............: avg=8.08s    min=1.24s  med=7.65s  max=22.11s   p(90)=12.36s p(95)=13.73s  
       { expected_response:true }...: avg=8.08s    min=1.24s  med=7.65s  max=22.11s   p(90)=12.36s p(95)=13.73s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 10107
     http_req_receiving.............: avg=74.9µs   min=26.2µs med=61.3µs max=15.85ms  p(90)=86.1µs p(95)=96.4µs  
     http_req_sending...............: avg=496.25µs min=8.9µs  med=15.4µs max=64.97ms  p(90)=33.1µs p(95)=107.77µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=8.08s    min=1.24s  med=7.65s  max=22.11s   p(90)=12.36s p(95)=13.72s  
     http_reqs......................: 10107  48.972554/s
     iteration_duration.............: avg=8.09s    min=1.24s  med=7.66s  max=22.11s   p(90)=12.36s p(95)=13.78s  
     iterations.....................: 10107  48.972554/s
     vus............................: 68     min=68      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ffdcf0ce-1ab5-47d4-a9ef-801361637f00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9a6803f4-f544-45cf-cde1-1c2e711b5100/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  94% — ✓ 9019 / ✗ 561
     ✗ no graphql errors
      ↳  85% — ✓ 8200 / ✗ 1380
     ✗ valid response structure
      ↳  90% — ✓ 8200 / ✗ 819

     checks.........................: 90.20% ✓ 25419     ✗ 2760 
     data_received..................: 46 MB  214 kB/s
     data_sent......................: 11 MB  53 kB/s
     http_req_blocked...............: avg=6.94ms  min=1.5µs  med=3.3µs  max=317.16ms p(90)=176.95µs p(95)=65.08ms
     http_req_connecting............: avg=6.8ms   min=0s     med=0s     max=303.7ms  p(90)=86.91µs  p(95)=63.86ms
     http_req_duration..............: avg=8.63s   min=1.61s  med=4.61s  max=1m0s     p(90)=6.49s    p(95)=59.77s 
       { expected_response:true }...: avg=5.44s   min=1.61s  med=4.56s  max=59.49s   p(90)=5.76s    p(95)=6.32s  
   ✓ http_req_failed................: 5.85%  ✓ 561       ✗ 9019 
     http_req_receiving.............: avg=74.28µs min=0s     med=70µs   max=9.48ms   p(90)=100.7µs  p(95)=115.9µs
     http_req_sending...............: avg=1.38ms  min=10.8µs med=18.7µs max=137.3ms  p(90)=78.22µs  p(95)=2.01ms 
     http_req_tls_handshaking.......: avg=0s      min=0s     med=0s     max=0s       p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=8.63s   min=1.61s  med=4.61s  max=1m0s     p(90)=6.49s    p(95)=59.73s 
     http_reqs......................: 9580   44.465651/s
     iteration_duration.............: avg=8.64s   min=1.61s  med=4.62s  max=1m0s     p(90)=6.49s    p(95)=1m0s   
     iterations.....................: 9580   44.465651/s
     vus............................: 22     min=22      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7c7aa12c-ac59-4470-1de7-1797db031900/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/596f37bf-ea11-4732-039d-1819c8322d00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 4833     ✗ 0    
     data_received..................: 8.1 MB  35 kB/s
     data_sent......................: 1.9 MB  8.3 kB/s
     http_req_blocked...............: avg=9.34ms  min=1.9µs  med=3.3µs  max=70.44ms p(90)=47.11ms p(95)=52.64ms
     http_req_connecting............: avg=9.21ms  min=0s     med=0s     max=65.95ms p(90)=46.62ms p(95)=52.32ms
     http_req_duration..............: avg=53.15s  min=29.19s med=56.47s max=57.12s  p(90)=56.86s  p(95)=56.92s 
       { expected_response:true }...: avg=53.15s  min=29.19s med=56.47s max=57.12s  p(90)=56.86s  p(95)=56.92s 
   ✓ http_req_failed................: 0.00%   ✓ 0        ✗ 1611 
     http_req_receiving.............: avg=80.51µs min=24.9µs med=73.9µs max=2.58ms  p(90)=100.8µs p(95)=111.1µs
     http_req_sending...............: avg=1.88ms  min=8.9µs  med=22.7µs max=41.01ms p(90)=12.55ms p(95)=14.38ms
     http_req_tls_handshaking.......: avg=0s      min=0s     med=0s     max=0s      p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=53.15s  min=29.19s med=56.47s max=57.12s  p(90)=56.86s  p(95)=56.92s 
     http_reqs......................: 1611    7.032207/s
     iteration_duration.............: avg=53.16s  min=29.19s med=56.47s max=57.16s  p(90)=56.86s  p(95)=56.92s 
     iterations.....................: 1611    7.032207/s
     vus............................: 6       min=6      max=400
     vus_max........................: 400     min=400    max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7cd74df0-9cbc-4fac-06c3-fb4cd1a78f00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d536f919-a5ea-48dd-3fc1-8c7fa85d2500/public" alt="HTTP Overview" />


  </details>