## Overview for: `scenarios/fed-v1-constants-vus-subgraphs-delay`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. All subgraphs have an intentional delay on replying, and this creates additional pressure on the gateway's memory. We are running a heavy load of concurrent VUs to measure response time and other stats, during stress. It measure things like memory usage, CPU usage, response times.


This scenario was running 400 VUs over 200s


### Comparison


| Gateway              | RPS ⬇️ |        Requests         |          Duration          |
| :------------------- | :----: | :---------------------: | :------------------------: |
| wundergraph          |  241   |  48708 total, 0 failed  |  avg: 1649ms, p95: 1940ms  |
| apollo-router        |   98   |  20087 total, 0 failed  |  avg: 4020ms, p95: 6007ms  |
| mesh                 |   96   |  19487 total, 0 failed  |  avg: 4132ms, p95: 5052ms  |
| mesh-supergraph      |   88   |  17829 total, 0 failed  |  avg: 4499ms, p95: 5260ms  |
| apollo-server        |   65   | 13691 total, 444 failed | avg: 5959ms, p95: 23348ms  |
| apollo-server-node16 |   46   |  9463 total, 0 failed   | avg: 8607ms, p95: 13316ms  |
| mercurius            |   7    |  1617 total, 0 failed   | avg: 52981ms, p95: 56734ms |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 146124     ✗ 0    
     data_received..................: 243 MB  1.2 MB/s
     data_sent......................: 58 MB   287 kB/s
     http_req_blocked...............: avg=699.38µs min=1.1µs    med=2.4µs  max=180.34ms p(90)=3.4µs   p(95)=4µs    
     http_req_connecting............: avg=683.11µs min=0s       med=0s     max=180.29ms p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=1.64s    min=897.78ms med=1.64s  max=2.62s    p(90)=1.85s   p(95)=1.94s  
       { expected_response:true }...: avg=1.64s    min=897.78ms med=1.64s  max=2.62s    p(90)=1.85s   p(95)=1.94s  
   ✓ http_req_failed................: 0.00%   ✓ 0          ✗ 48708
     http_req_receiving.............: avg=802.49µs min=14.2µs   med=33.8µs max=259.81ms p(90)=254.6µs p(95)=432.1µs
     http_req_sending...............: avg=653.42µs min=7.7µs    med=12.6µs max=233.36ms p(90)=28.3µs  p(95)=127.7µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=1.64s    min=897.58ms med=1.64s  max=2.56s    p(90)=1.85s   p(95)=1.93s  
     http_reqs......................: 48708   241.622088/s
     iteration_duration.............: avg=1.65s    min=898.57ms med=1.64s  max=2.74s    p(90)=1.85s   p(95)=1.94s  
     iterations.....................: 48708   241.622088/s
     vus............................: 272     min=272      max=400
     vus_max........................: 400     min=400      max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/40b5d79e-6ed3-425c-7621-10bf3504c500/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/91690c71-0121-4865-5201-db5c08bc5000/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 20077 / ✗ 10
     ✗ valid response structure
      ↳  99% — ✓ 20077 / ✗ 10

     checks.........................: 99.96% ✓ 60241     ✗ 20   
     data_received..................: 100 MB 492 kB/s
     data_sent......................: 24 MB  117 kB/s
     http_req_blocked...............: avg=773.17µs min=1.2µs  med=2.5µs  max=122.99ms p(90)=4.2µs  p(95)=12.57µs
     http_req_connecting............: avg=762.35µs min=0s     med=0s     max=107.07ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=4.02s    min=1.72s  med=3.86s  max=9.28s    p(90)=5.18s  p(95)=6s     
       { expected_response:true }...: avg=4.02s    min=1.72s  med=3.86s  max=9.28s    p(90)=5.18s  p(95)=6s     
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 20087
     http_req_receiving.............: avg=212.08µs min=22.2µs med=50.9µs max=91.74ms  p(90)=80.3µs p(95)=91.87µs
     http_req_sending...............: avg=600.67µs min=7.1µs  med=13.9µs max=237.16ms p(90)=29.2µs p(95)=46.17µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=4.01s    min=1.72s  med=3.86s  max=9.28s    p(90)=5.18s  p(95)=6s     
     http_reqs......................: 20087  98.848326/s
     iteration_duration.............: avg=4.02s    min=1.72s  med=3.86s  max=9.31s    p(90)=5.18s  p(95)=6s     
     iterations.....................: 20087  98.848326/s
     vus............................: 79     min=79      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9c426dda-91cb-4c35-1e80-e18332417600/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/61cb5f31-135e-4d04-bf03-9e9f4af7f800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 58461     ✗ 0    
     data_received..................: 97 MB   481 kB/s
     data_sent......................: 23 MB   114 kB/s
     http_req_blocked...............: avg=1.73ms   min=1.3µs  med=2.2µs  max=236.23ms p(90)=3.4µs  p(95)=5µs   
     http_req_connecting............: avg=1.7ms    min=0s     med=0s     max=183.26ms p(90)=0s     p(95)=0s    
     http_req_duration..............: avg=4.13s    min=1.98s  med=4.06s  max=8.11s    p(90)=4.45s  p(95)=5.05s 
       { expected_response:true }...: avg=4.13s    min=1.98s  med=4.06s  max=8.11s    p(90)=4.45s  p(95)=5.05s 
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 19487
     http_req_receiving.............: avg=112.98µs min=22.2µs med=45.3µs max=67.55ms  p(90)=68.5µs p(95)=76.9µs
     http_req_sending...............: avg=772µs    min=7.9µs  med=12.6µs max=127.32ms p(90)=26.5µs p(95)=30.1µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s     p(95)=0s    
     http_req_waiting...............: avg=4.13s    min=1.98s  med=4.06s  max=8.1s     p(90)=4.45s  p(95)=5.05s 
     http_reqs......................: 19487   96.231888/s
     iteration_duration.............: avg=4.13s    min=1.98s  med=4.06s  max=8.12s    p(90)=4.45s  p(95)=5.05s 
     iterations.....................: 19487   96.231888/s
     vus............................: 226     min=226     max=400
     vus_max........................: 400     min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/93d88c9e-b69a-44e6-ace6-4b3c83db2a00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/01cc1e21-012d-4818-7089-42a008aae800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 17799 / ✗ 30
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 17829

     checks.........................: 66.61% ✓ 35628     ✗ 17859
     data_received..................: 90 MB  447 kB/s
     data_sent......................: 21 MB  105 kB/s
     http_req_blocked...............: avg=1.15ms   min=1.3µs  med=2.29µs max=116.96ms p(90)=3.5µs   p(95)=5.6µs 
     http_req_connecting............: avg=1.14ms   min=0s     med=0s     max=116.81ms p(90)=0s      p(95)=0s    
     http_req_duration..............: avg=4.49s    min=1.28s  med=4.37s  max=10.06s   p(90)=4.9s    p(95)=5.26s 
       { expected_response:true }...: avg=4.49s    min=1.28s  med=4.37s  max=10.06s   p(90)=4.9s    p(95)=5.26s 
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 17829
     http_req_receiving.............: avg=65.07µs  min=22.2µs med=49.1µs max=30.03ms  p(90)=75.52µs p(95)=87.2µs
     http_req_sending...............: avg=217.65µs min=7.5µs  med=13.5µs max=52.27ms  p(90)=26.9µs  p(95)=34.2µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s      p(95)=0s    
     http_req_waiting...............: avg=4.49s    min=1.28s  med=4.37s  max=10.06s   p(90)=4.9s    p(95)=5.26s 
     http_reqs......................: 17829  88.562821/s
     iteration_duration.............: avg=4.5s     min=1.28s  med=4.37s  max=10.11s   p(90)=4.9s    p(95)=5.26s 
     iterations.....................: 17829  88.562821/s
     vus............................: 161    min=161     max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3e2e16e6-a255-4c03-04b5-9acc8bd82d00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4cc921c8-8fca-4099-bdab-9d04218e5200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  96% — ✓ 13247 / ✗ 444
     ✗ no graphql errors
      ↳  95% — ✓ 13022 / ✗ 669
     ✗ valid response structure
      ↳  98% — ✓ 13022 / ✗ 225

     checks.........................: 96.70% ✓ 39291     ✗ 1338 
     data_received..................: 68 MB  328 kB/s
     data_sent......................: 16 MB  78 kB/s
     http_req_blocked...............: avg=836.67µs min=1µs   med=2.2µs  max=67.43ms p(90)=3.7µs  p(95)=595.55µs
     http_req_connecting............: avg=804.42µs min=0s    med=0s     max=56.48ms p(90)=0s     p(95)=446.65µs
     http_req_duration..............: avg=5.95s    min=1.58s med=3.7s   max=1m0s    p(90)=4.48s  p(95)=23.34s  
       { expected_response:true }...: avg=4.14s    min=1.58s med=3.69s  max=59.61s  p(90)=4.33s  p(95)=4.66s   
   ✓ http_req_failed................: 3.24%  ✓ 444       ✗ 13247
     http_req_receiving.............: avg=52.71µs  min=0s    med=43.7µs max=9.38ms  p(90)=71.9µs p(95)=79.9µs  
     http_req_sending...............: avg=127.86µs min=5.4µs med=13.1µs max=46.41ms p(90)=29.2µs p(95)=113.44µs
     http_req_tls_handshaking.......: avg=0s       min=0s    med=0s     max=0s      p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=5.95s    min=1.58s med=3.7s   max=1m0s    p(90)=4.48s  p(95)=23.34s  
     http_reqs......................: 13691  65.785312/s
     iteration_duration.............: avg=5.96s    min=1.58s med=3.71s  max=1m0s    p(90)=4.48s  p(95)=23.35s  
     iterations.....................: 13691  65.785312/s
     vus............................: 34     min=34      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ce1175e4-9bb8-4c7b-affa-538227146900/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d1113efb-f4f6-4513-4f5e-beb744feb300/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server-node16`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  72% — ✓ 6846 / ✗ 2617
     ✗ valid response structure
      ↳  72% — ✓ 6846 / ✗ 2617

     checks.........................: 81.56% ✓ 23155     ✗ 5234 
     data_received..................: 46 MB  223 kB/s
     data_sent......................: 11 MB  55 kB/s
     http_req_blocked...............: avg=1.37ms   min=1.3µs  med=3µs    max=82.95ms p(90)=4.89µs p(95)=19.68µs 
     http_req_connecting............: avg=1.35ms   min=0s     med=0s     max=81.45ms p(90)=0s     p(95)=0s      
     http_req_duration..............: avg=8.6s     min=2.42s  med=8.29s  max=18.62s  p(90)=11.92s p(95)=13.31s  
       { expected_response:true }...: avg=8.6s     min=2.42s  med=8.29s  max=18.62s  p(90)=11.92s p(95)=13.31s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 9463 
     http_req_receiving.............: avg=163.82µs min=26.4µs med=68.3µs max=80.38ms p(90)=95.9µs p(95)=109.4µs 
     http_req_sending...............: avg=693.85µs min=8.3µs  med=17.3µs max=93.4ms  p(90)=35.4µs p(95)=183.05µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=8.6s     min=2.42s  med=8.29s  max=18.62s  p(90)=11.92s p(95)=13.29s  
     http_reqs......................: 9463   46.174053/s
     iteration_duration.............: avg=8.6s     min=2.42s  med=8.29s  max=18.62s  p(90)=11.92s p(95)=13.34s  
     iterations.....................: 9463   46.174053/s
     vus............................: 66     min=66      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f7f02c9a-80ca-4794-255e-8a1160a2ab00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4ea7af11-cff7-4923-2966-3d597bfc6f00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 4851     ✗ 0    
     data_received..................: 8.1 MB  35 kB/s
     data_sent......................: 1.9 MB  8.4 kB/s
     http_req_blocked...............: avg=10.1ms  min=1.8µs  med=3.3µs  max=66.18ms  p(90)=46.2ms  p(95)=53.32ms 
     http_req_connecting............: avg=9.95ms  min=0s     med=0s     max=66.16ms  p(90)=45.98ms p(95)=52.92ms 
     http_req_duration..............: avg=52.98s  min=29.55s med=56.44s max=56.97s   p(90)=56.69s  p(95)=56.73s  
       { expected_response:true }...: avg=52.98s  min=29.55s med=56.44s max=56.97s   p(90)=56.69s  p(95)=56.73s  
   ✓ http_req_failed................: 0.00%   ✓ 0        ✗ 1617 
     http_req_receiving.............: avg=81.44µs min=31.4µs med=76.6µs max=688.71µs p(90)=99.8µs  p(95)=111.22µs
     http_req_sending...............: avg=1.47ms  min=9.29µs med=23.5µs max=18.68ms  p(90)=4.05ms  p(95)=9.66ms  
     http_req_tls_handshaking.......: avg=0s      min=0s     med=0s     max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=52.97s  min=29.55s med=56.44s max=56.97s   p(90)=56.69s  p(95)=56.73s  
     http_reqs......................: 1617    7.039956/s
     iteration_duration.............: avg=52.99s  min=29.55s med=56.44s max=56.97s   p(90)=56.69s  p(95)=56.73s  
     iterations.....................: 1617    7.039956/s
     vus............................: 12      min=12     max=400
     vus_max........................: 400     min=400    max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/79a3c4ce-f5f8-424f-9906-c7395227b300/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/125ae2d3-38b1-454f-6b58-582d395fb800/public" alt="HTTP Overview" />


  </details>