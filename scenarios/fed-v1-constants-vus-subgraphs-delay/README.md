## Overview for: `scenarios/fed-v1-constants-vus-subgraphs-delay`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. All subgraphs have an intentional delay on replying, and this creates additional pressure on the gateway's memory. We are running a heavy load of concurrent VUs to measure response time and other stats, during stress. It measure things like memory usage, CPU usage, response times.


This scenario was running 400 VUs over 200s


### Comparison


| Gateway              | RPS ⬇️ |        Requests        |          Duration          |
| :------------------- | :----: | :--------------------: | :------------------------: |
| wundergraph          |  796   | 159670 total, 0 failed |   avg: 414ms, p95: 801ms   |
| mesh-bun             |  438   | 87873 total, 0 failed  |  avg: 908ms, p95: 1299ms   |
| mesh                 |  325   | 65411 total, 0 failed  |  avg: 1224ms, p95: 1513ms  |
| mesh-supergraph      |   36   |  7607 total, 0 failed  | avg: 10717ms, p95: 11700ms |
| apollo-router        |   34   |  7162 total, 0 failed  | avg: 11395ms, p95: 15628ms |
| apollo-server        |   25   |  5302 total, 0 failed  | avg: 15393ms, p95: 24884ms |
| apollo-server-node16 |   25   |  5494 total, 0 failed  | avg: 15007ms, p95: 23350ms |
| mercurius            |   6    | 1602 total, 905 failed | avg: 50654ms, p95: 60001ms |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 159670

     checks.........................: 66.66% ✓ 319340     ✗ 159670
     data_received..................: 23 MB  116 kB/s
     data_sent......................: 190 MB 946 kB/s
     http_req_blocked...............: avg=323.2µs  min=1.3µs    med=3.2µs    max=962.46ms p(90)=4.89µs   p(95)=6.3µs   
     http_req_connecting............: avg=306.75µs min=0s       med=0s       max=962.29ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=414.25ms min=452.61µs med=401.54ms max=2.53s    p(90)=689.12ms p(95)=800.88ms
       { expected_response:true }...: avg=414.25ms min=452.61µs med=401.54ms max=2.53s    p(90)=689.12ms p(95)=800.88ms
   ✓ http_req_failed................: 0.00%  ✓ 0          ✗ 159670
     http_req_receiving.............: avg=50.51ms  min=10.2µs   med=38.9µs   max=2.02s    p(90)=179.01ms p(95)=327.6ms 
     http_req_sending...............: avg=3.73ms   min=6.6µs    med=16.6µs   max=1.96s    p(90)=142.1µs  p(95)=803.68µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=360ms    min=344.21µs med=373.51ms max=1.24s    p(90)=581.88ms p(95)=627.35ms
     http_reqs......................: 159670 796.870127/s
     iteration_duration.............: avg=500.33ms min=1.08ms   med=470.52ms max=3.23s    p(90)=826.65ms p(95)=1s      
     iterations.....................: 159670 796.870127/s
     vus............................: 400    min=400      max=400 
     vus_max........................: 400    min=400      max=400 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/619f2a97-baa3-4c12-714c-4070103b1800/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4b93d5e0-f018-4f3f-54e2-7fe41a11cf00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c4a74e83-baf5-4604-568f-33db061e9f00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  0% — ✓ 0 / ✗ 87873
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 87873

     checks.........................: 33.33% ✓ 87873      ✗ 175746
     data_received..................: 84 MB  417 kB/s
     data_sent......................: 104 MB 520 kB/s
     http_req_blocked...............: avg=163.53µs min=1.2µs    med=2.1µs    max=99.22ms  p(90)=3.3µs    p(95)=4µs     
     http_req_connecting............: avg=154.13µs min=0s       med=0s       max=70.17ms  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=908.16ms min=162.78ms med=947.88ms max=2.13s    p(90)=1.18s    p(95)=1.29s   
       { expected_response:true }...: avg=908.16ms min=162.78ms med=947.88ms max=2.13s    p(90)=1.18s    p(95)=1.29s   
   ✓ http_req_failed................: 0.00%  ✓ 0          ✗ 87873 
     http_req_receiving.............: avg=4.86ms   min=9.7µs    med=24.9µs   max=462.03ms p(90)=628.98µs p(95)=16.92ms 
     http_req_sending...............: avg=1.2ms    min=7µs      med=11.8µs   max=656.31ms p(90)=107.6µs  p(95)=183.08µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=902.09ms min=162.58ms med=943.83ms max=1.95s    p(90)=1.17s    p(95)=1.28s   
     http_reqs......................: 87873  438.024873/s
     iteration_duration.............: avg=911.75ms min=163.79ms med=950.28ms max=2.42s    p(90)=1.19s    p(95)=1.3s    
     iterations.....................: 87873  438.024873/s
     vus............................: 400    min=400      max=400 
     vus_max........................: 400    min=400      max=400 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b17fdfd0-e043-4519-ffb7-cb6650a61300/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d828b648-1d80-4b9b-deac-96ee0eb10e00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3de8406b-17c8-41c8-df1f-fb353271dd00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 65411

     checks.........................: 66.66% ✓ 130822     ✗ 65411
     data_received..................: 74 MB  369 kB/s
     data_sent......................: 78 MB  387 kB/s
     http_req_blocked...............: avg=236.94µs min=1µs      med=1.9µs  max=182.05ms p(90)=2.9µs   p(95)=3.6µs  
     http_req_connecting............: avg=225.41µs min=0s       med=0s     max=61.15ms  p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=1.22s    min=603.12ms med=1.2s   max=3.45s    p(90)=1.43s   p(95)=1.51s  
       { expected_response:true }...: avg=1.22s    min=603.12ms med=1.2s   max=3.45s    p(90)=1.43s   p(95)=1.51s  
   ✓ http_req_failed................: 0.00%  ✓ 0          ✗ 65411
     http_req_receiving.............: avg=3.41ms   min=11.1µs   med=22.3µs max=296.03ms p(90)=290.6µs p(95)=13.86ms
     http_req_sending...............: avg=706.25µs min=6.5µs    med=10.7µs max=339.4ms  p(90)=88.6µs  p(95)=230.8µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=1.21s    min=598.97ms med=1.19s  max=3.45s    p(90)=1.42s   p(95)=1.5s   
     http_reqs......................: 65411  325.844637/s
     iteration_duration.............: avg=1.22s    min=603.88ms med=1.2s   max=3.47s    p(90)=1.43s   p(95)=1.51s  
     iterations.....................: 65411  325.844637/s
     vus............................: 400    min=400      max=400
     vus_max........................: 400    min=400      max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/07d35617-344c-4c10-df38-6cc40d784d00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/74b4b1bf-a6c0-4799-f233-36a23183d500/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5853736a-695c-4e4f-3d21-dde5b3a75c00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 7607

     checks.........................: 66.66% ✓ 15214     ✗ 7607 
     data_received..................: 670 MB 3.2 MB/s
     data_sent......................: 9.0 MB 44 kB/s
     http_req_blocked...............: avg=1.51ms   min=1.6µs  med=3.1µs   max=53.73ms p(90)=5.5µs   p(95)=8.09ms  
     http_req_connecting............: avg=1.49ms   min=0s     med=0s      max=53.58ms p(90)=0s      p(95)=7.95ms  
     http_req_duration..............: avg=10.71s   min=6.49s  med=10.66s  max=14.98s  p(90)=11.37s  p(95)=11.69s  
       { expected_response:true }...: avg=10.71s   min=6.49s  med=10.66s  max=14.98s  p(90)=11.37s  p(95)=11.69s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 7607 
     http_req_receiving.............: avg=1.14ms   min=55.6µs med=137.6µs max=1.72s   p(90)=380.4µs p(95)=768.79µs
     http_req_sending...............: avg=240.17µs min=11µs   med=16.89µs max=23.16ms p(90)=38µs    p(95)=1.05ms  
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=10.71s   min=6.49s  med=10.66s  max=14.98s  p(90)=11.37s  p(95)=11.69s  
     http_reqs......................: 7607   36.889372/s
     iteration_duration.............: avg=10.72s   min=6.5s   med=10.67s  max=15s     p(90)=11.37s  p(95)=11.7s   
     iterations.....................: 7607   36.889372/s
     vus............................: 34     min=34      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b04910ef-c609-44ab-ccaa-dcabed0e1000/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b5076e00-0746-4e0f-d563-b837d1613b00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2c589bb2-c1df-40af-5dda-3bddc233ee00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 21486     ✗ 0    
     data_received..................: 628 MB  3.0 MB/s
     data_sent......................: 8.5 MB  41 kB/s
     http_req_blocked...............: avg=2.11ms min=2.1µs  med=5.6µs   max=70.37ms  p(90)=7.8µs    p(95)=22.41ms 
     http_req_connecting............: avg=2.09ms min=0s     med=0s      max=70.34ms  p(90)=0s       p(95)=22.09ms 
     http_req_duration..............: avg=11.39s min=3.93s  med=11.36s  max=22.03s   p(90)=14.65s   p(95)=15.62s  
       { expected_response:true }...: avg=11.39s min=3.93s  med=11.36s  max=22.03s   p(90)=14.65s   p(95)=15.62s  
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 7162 
     http_req_receiving.............: avg=1.72ms min=64.7µs med=124.7µs max=433.58ms p(90)=440µs    p(95)=674.47µs
     http_req_sending...............: avg=1.08ms min=9.29µs med=31.7µs  max=127.02ms p(90)=378.03µs p(95)=8.55ms  
     http_req_tls_handshaking.......: avg=0s     min=0s     med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=11.39s min=3.93s  med=11.36s  max=22.03s   p(90)=14.65s   p(95)=15.62s  
     http_reqs......................: 7162    34.393772/s
     iteration_duration.............: avg=11.42s min=3.94s  med=11.39s  max=22.04s   p(90)=14.67s   p(95)=15.66s  
     iterations.....................: 7162    34.393772/s
     vus............................: 44      min=44      max=400
     vus_max........................: 400     min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/65f69f2f-4700-490e-b5b0-673e1517fe00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b15d85b7-7a46-4a0b-695a-2b94995cd700/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a74fbf6d-2f8d-40f5-4ca1-a811ca93f300/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 15906     ✗ 0    
     data_received..................: 466 MB  2.2 MB/s
     data_sent......................: 6.3 MB  30 kB/s
     http_req_blocked...............: avg=13.7ms  min=2µs    med=5.9µs   max=403.11ms p(90)=12.68µs  p(95)=142.17ms
     http_req_connecting............: avg=13.37ms min=0s     med=0s      max=398.52ms p(90)=0s       p(95)=137.61ms
     http_req_duration..............: avg=15.39s  min=5.62s  med=14.56s  max=33.6s    p(90)=23.01s   p(95)=24.88s  
       { expected_response:true }...: avg=15.39s  min=5.62s  med=14.56s  max=33.6s    p(90)=23.01s   p(95)=24.88s  
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 5302 
     http_req_receiving.............: avg=4.5ms   min=69.8µs med=134.1µs max=455.18ms p(90)=874.56µs p(95)=6.23ms  
     http_req_sending...............: avg=5.37ms  min=8.5µs  med=30µs    max=297.65ms p(90)=12.1ms   p(95)=39.51ms 
     http_req_tls_handshaking.......: avg=0s      min=0s     med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=15.38s  min=5.62s  med=14.54s  max=33.6s    p(90)=23.01s   p(95)=24.88s  
     http_reqs......................: 5302    25.361794/s
     iteration_duration.............: avg=15.47s  min=5.64s  med=14.63s  max=33.62s   p(90)=23.21s   p(95)=25.08s  
     iterations.....................: 5302    25.361794/s
     vus............................: 41      min=41      max=400
     vus_max........................: 400     min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6ef03ad2-f4d8-45c8-6537-e1d6038b5300/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6db05e47-d96b-4fcb-38c6-6c18dbbcdf00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/069fb67e-4ede-4640-6262-134d9a3e7d00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server-node16`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 16482     ✗ 0    
     data_received..................: 483 MB  2.3 MB/s
     data_sent......................: 6.5 MB  31 kB/s
     http_req_blocked...............: avg=2.27ms min=2.1µs  med=4.3µs    max=69.15ms  p(90)=7.97µs   p(95)=21.28ms
     http_req_connecting............: avg=2.23ms min=0s     med=0s       max=54.14ms  p(90)=0s       p(95)=20.67ms
     http_req_duration..............: avg=15s    min=4.48s  med=14.35s   max=34.82s   p(90)=21.54s   p(95)=23.34s 
       { expected_response:true }...: avg=15s    min=4.48s  med=14.35s   max=34.82s   p(90)=21.54s   p(95)=23.34s 
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 5494 
     http_req_receiving.............: avg=4.91ms min=67.1µs med=119.55µs max=918.46ms p(90)=789.88µs p(95)=5.74ms 
     http_req_sending...............: avg=2.18ms min=10.2µs med=21.8µs   max=463.71ms p(90)=1.35ms   p(95)=9.35ms 
     http_req_tls_handshaking.......: avg=0s     min=0s     med=0s       max=0s       p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=14.99s min=4.48s  med=14.34s   max=34.82s   p(90)=21.49s   p(95)=23.32s 
     http_reqs......................: 5494    25.952815/s
     iteration_duration.............: avg=15.09s min=4.49s  med=14.41s   max=34.84s   p(90)=21.71s   p(95)=23.48s 
     iterations.....................: 5494    25.952815/s
     vus............................: 75      min=75      max=400
     vus_max........................: 400     min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5581653f-6e20-4928-6835-30758d30a700/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/758b7707-8051-448f-f2c6-0bb16f480d00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9db86bcc-62ac-4004-e950-dd0ade711600/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  43% — ✓ 697 / ✗ 905
     ✗ no graphql errors
      ↳  43% — ✓ 697 / ✗ 905
     ✓ valid response structure

     checks.........................: 53.60% ✓ 2091     ✗ 1810 
     data_received..................: 61 MB  266 kB/s
     data_sent......................: 2.1 MB 9.0 kB/s
     http_req_blocked...............: avg=13.58ms  min=3.3µs  med=215.59µs max=124.97ms p(90)=63.76ms  p(95)=73.98ms 
     http_req_connecting............: avg=13.38ms  min=0s     med=147.14µs max=117.85ms p(90)=63.3ms   p(95)=73.75ms 
     http_req_duration..............: avg=50.65s   min=23.11s med=1m0s     max=1m0s     p(90)=1m0s     p(95)=1m0s    
       { expected_response:true }...: avg=38.51s   min=23.11s med=35.96s   max=59.82s   p(90)=54.21s   p(95)=56.75s  
   ✗ http_req_failed................: 56.49% ✓ 905      ✗ 697  
     http_req_receiving.............: avg=259.11µs min=0s     med=0s       max=39.78ms  p(90)=462.77µs p(95)=621.44µs
     http_req_sending...............: avg=2.33ms   min=15µs   med=50.99µs  max=42.31ms  p(90)=4.48ms   p(95)=13.4ms  
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=50.65s   min=23.11s med=59.99s   max=1m0s     p(90)=1m0s     p(95)=1m0s    
     http_reqs......................: 1602   6.964808/s
     iteration_duration.............: avg=50.67s   min=23.12s med=1m0s     max=1m0s     p(90)=1m0s     p(95)=1m0s    
     iterations.....................: 1602   6.964808/s
     vus............................: 147    min=147    max=400
     vus_max........................: 400    min=400    max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ce84df03-1d35-4c58-3125-d0dbb58d2800/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3540bbf7-d455-4f8b-fcc1-f2bd5392c300/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b99560b0-9f3f-4519-456c-420432902a00/public" alt="HTTP Overview" />


  </details>