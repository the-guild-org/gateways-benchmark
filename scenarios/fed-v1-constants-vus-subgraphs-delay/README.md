## Overview for: `scenarios/fed-v1-constants-vus-subgraphs-delay`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. All subgraphs have an intentional delay on replying, and this creates additional pressure on the gateway's memory. We are running a heavy load of concurrent VUs to measure response time and other stats, during stress. It measure things like memory usage, CPU usage, response times.


This scenario was running 400 VUs over 200s


### Comparison


| Gateway              | RPS ⬇️ |       Requests        |          Duration          |
| :------------------- | :----: | :-------------------: | :------------------------: |
| wundergraph          |  238   | 48151 total, 0 failed |  avg: 1668ms, p95: 2001ms  |
| mesh                 |   95   | 19414 total, 0 failed |  avg: 4144ms, p95: 4852ms  |
| apollo-router        |   71   | 14627 total, 0 failed |  avg: 5536ms, p95: 8733ms  |
| mesh-supergraph      |   71   | 14595 total, 0 failed |  avg: 5581ms, p95: 7057ms  |
| apollo-server-node16 |   46   | 9601 total, 0 failed  | avg: 8443ms, p95: 13730ms  |
| apollo-server        |   42   | 8673 total, 25 failed | avg: 9404ms, p95: 13984ms  |
| mercurius            |   7    | 1622 total, 0 failed  | avg: 52836ms, p95: 56688ms |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 144453     ✗ 0    
     data_received..................: 240 MB  1.2 MB/s
     data_sent......................: 57 MB   283 kB/s
     http_req_blocked...............: avg=627.73µs min=1.1µs    med=2.4µs  max=155.3ms  p(90)=3.9µs   p(95)=4.8µs   
     http_req_connecting............: avg=617.96µs min=0s       med=0s     max=135.61ms p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=1.66s    min=860.17ms med=1.66s  max=2.78s    p(90)=1.89s   p(95)=2s      
       { expected_response:true }...: avg=1.66s    min=860.17ms med=1.66s  max=2.78s    p(90)=1.89s   p(95)=2s      
   ✓ http_req_failed................: 0.00%   ✓ 0          ✗ 48151
     http_req_receiving.............: avg=862.6µs  min=16.29µs  med=38.3µs max=523.91ms p(90)=272.9µs p(95)=458.86µs
     http_req_sending...............: avg=650.54µs min=7.4µs    med=13.1µs max=489.59ms p(90)=32.9µs  p(95)=142.15µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=1.66s    min=860ms    med=1.66s  max=2.77s    p(90)=1.89s   p(95)=1.99s   
     http_reqs......................: 48151   238.751707/s
     iteration_duration.............: avg=1.67s    min=861.05ms med=1.66s  max=2.83s    p(90)=1.89s   p(95)=2s      
     iterations.....................: 48151   238.751707/s
     vus............................: 296     min=296      max=400
     vus_max........................: 400     min=400      max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a9731319-2299-459a-8ef9-e5915a5aef00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a77ce32d-48b4-4517-1938-29853d2fc400/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 19412 / ✗ 2
     ✗ valid response structure
      ↳  99% — ✓ 19412 / ✗ 2

     checks.........................: 99.99% ✓ 58238     ✗ 4    
     data_received..................: 97 MB  480 kB/s
     data_sent......................: 23 MB  114 kB/s
     http_req_blocked...............: avg=757.03µs min=1.1µs  med=2.1µs   max=81.48ms p(90)=3.1µs  p(95)=4µs   
     http_req_connecting............: avg=742.85µs min=0s     med=0s      max=59.18ms p(90)=0s     p(95)=0s    
     http_req_duration..............: avg=4.14s    min=1.19s  med=4.05s   max=8.42s   p(90)=4.46s  p(95)=4.85s 
       { expected_response:true }...: avg=4.14s    min=1.19s  med=4.05s   max=8.42s   p(90)=4.46s  p(95)=4.85s 
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 19414
     http_req_receiving.............: avg=128.19µs min=17.7µs med=41.09µs max=53.83ms p(90)=63.8µs p(95)=72.9µs
     http_req_sending...............: avg=133.18µs min=6.4µs  med=12.7µs  max=85.96ms p(90)=25.9µs p(95)=29.7µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s      p(90)=0s     p(95)=0s    
     http_req_waiting...............: avg=4.14s    min=1.19s  med=4.05s   max=8.42s   p(90)=4.46s  p(95)=4.85s 
     http_reqs......................: 19414  95.939569/s
     iteration_duration.............: avg=4.14s    min=1.19s  med=4.05s   max=8.45s   p(90)=4.46s  p(95)=4.85s 
     iterations.....................: 19414  95.939569/s
     vus............................: 187    min=187     max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2c4ebc3a-bb66-4517-3ee5-6c3c4cb78300/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9f2430c0-2967-483a-29d7-97aea2308300/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 14574 / ✗ 53
     ✗ valid response structure
      ↳  99% — ✓ 14574 / ✗ 53

     checks.........................: 99.75% ✓ 43775     ✗ 106  
     data_received..................: 73 MB  356 kB/s
     data_sent......................: 17 MB  85 kB/s
     http_req_blocked...............: avg=749.71µs min=1.5µs med=2.9µs  max=135.82ms p(90)=4.59µs  p(95)=22.2µs 
     http_req_connecting............: avg=721.91µs min=0s    med=0s     max=104.85ms p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=5.53s    min=1.68s med=5.29s  max=12.47s   p(90)=6.97s   p(95)=8.73s  
       { expected_response:true }...: avg=5.53s    min=1.68s med=5.29s  max=12.47s   p(90)=6.97s   p(95)=8.73s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 14627
     http_req_receiving.............: avg=96.41µs  min=21µs  med=59µs   max=18.18ms  p(90)=105.2µs p(95)=139.7µs
     http_req_sending...............: avg=246.86µs min=8.8µs med=16.7µs max=278ms    p(90)=42.4µs  p(95)=109.2µs
     http_req_tls_handshaking.......: avg=0s       min=0s    med=0s     max=0s       p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=5.53s    min=1.68s med=5.29s  max=12.46s   p(90)=6.97s   p(95)=8.73s  
     http_reqs......................: 14627  71.491001/s
     iteration_duration.............: avg=5.53s    min=1.68s med=5.29s  max=12.49s   p(90)=6.97s   p(95)=8.74s  
     iterations.....................: 14627  71.491001/s
     vus............................: 25     min=25      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7070db7d-7187-4289-3233-3e8ad1b41c00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a5e9d3f9-517d-460c-e2ea-f90138bb0d00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 14511 / ✗ 84
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 14595

     checks.........................: 66.47% ✓ 29106     ✗ 14679
     data_received..................: 74 MB  360 kB/s
     data_sent......................: 17 MB  85 kB/s
     http_req_blocked...............: avg=3.6ms  min=1.5µs   med=2.6µs   max=313.24ms p(90)=3.9µs   p(95)=19.39µs 
     http_req_connecting............: avg=3.56ms min=0s      med=0s      max=307.08ms p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=5.58s  min=4s      med=5.37s   max=12.54s   p(90)=6.11s   p(95)=7.05s   
       { expected_response:true }...: avg=5.58s  min=4s      med=5.37s   max=12.54s   p(90)=6.11s   p(95)=7.05s   
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 14595
     http_req_receiving.............: avg=65µs   min=24.99µs med=51.09µs max=14.52ms  p(90)=90.19µs p(95)=107.52µs
     http_req_sending...............: avg=2.13ms min=9.4µs   med=15.1µs  max=254.71ms p(90)=38.69µs p(95)=58.8µs  
     http_req_tls_handshaking.......: avg=0s     min=0s      med=0s      max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=5.57s  min=4s      med=5.37s   max=12.49s   p(90)=6.11s   p(95)=7.05s   
     http_reqs......................: 14595  71.345166/s
     iteration_duration.............: avg=5.58s  min=4s      med=5.37s   max=12.75s   p(90)=6.11s   p(95)=7.05s   
     iterations.....................: 14595  71.345166/s
     vus............................: 257    min=257     max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/fa9ce721-a739-4ff5-e964-183057c1da00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/31a73eae-529a-4c18-c827-df1d95646c00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server-node16`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  73% — ✓ 7078 / ✗ 2523
     ✗ valid response structure
      ↳  73% — ✓ 7078 / ✗ 2523

     checks.........................: 82.48% ✓ 23757     ✗ 5046 
     data_received..................: 45 MB  222 kB/s
     data_sent......................: 11 MB  56 kB/s
     http_req_blocked...............: avg=4.35ms  min=1.4µs  med=2.8µs  max=236.63ms p(90)=4.59µs p(95)=19.2µs  
     http_req_connecting............: avg=4.28ms  min=0s     med=0s     max=217.31ms p(90)=0s     p(95)=0s      
     http_req_duration..............: avg=8.44s   min=1.47s  med=8.26s  max=16.86s   p(90)=12.36s p(95)=13.72s  
       { expected_response:true }...: avg=8.44s   min=1.47s  med=8.26s  max=16.86s   p(90)=12.36s p(95)=13.72s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 9601 
     http_req_receiving.............: avg=80.98µs min=26.2µs med=62.1µs max=32.5ms   p(90)=87.3µs p(95)=100.4µs 
     http_req_sending...............: avg=1.35ms  min=8.1µs  med=15.6µs max=198.18ms p(90)=33.4µs p(95)=297.72µs
     http_req_tls_handshaking.......: avg=0s      min=0s     med=0s     max=0s       p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=8.44s   min=1.47s  med=8.26s  max=16.86s   p(90)=12.36s p(95)=13.71s  
     http_reqs......................: 9601   46.887282/s
     iteration_duration.............: avg=8.44s   min=1.47s  med=8.26s  max=16.86s   p(90)=12.4s  p(95)=13.76s  
     iterations.....................: 9601   46.887282/s
     vus............................: 21     min=21      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9bb048ad-13a7-45d1-a854-2a5053eb2800/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7e2e61df-cb01-416e-656d-0b7594f96e00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  99% — ✓ 8648 / ✗ 25
     ✗ no graphql errors
      ↳  68% — ✓ 5950 / ✗ 2723
     ✗ valid response structure
      ↳  68% — ✓ 5950 / ✗ 2698

     checks.........................: 79.04% ✓ 20548     ✗ 5446 
     data_received..................: 41 MB  198 kB/s
     data_sent......................: 10 MB  50 kB/s
     http_req_blocked...............: avg=2.31ms   min=1.5µs med=2.8µs  max=126.21ms p(90)=5µs      p(95)=213.28µs
     http_req_connecting............: avg=2.26ms   min=0s    med=0s     max=126.15ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=9.4s     min=1.23s med=8.95s  max=1m0s     p(90)=13.06s   p(95)=13.98s  
       { expected_response:true }...: avg=9.25s    min=1.23s med=8.93s  max=59.2s    p(90)=13.01s   p(95)=13.94s  
   ✓ http_req_failed................: 0.28%  ✓ 25        ✗ 8648 
     http_req_receiving.............: avg=86.71µs  min=0s    med=65.1µs max=14.8ms   p(90)=101.98µs p(95)=122.94µs
     http_req_sending...............: avg=322.09µs min=9.8µs med=17.4µs max=55.3ms   p(90)=48.5µs   p(95)=681.86µs
     http_req_tls_handshaking.......: avg=0s       min=0s    med=0s     max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=9.4s     min=1.23s med=8.95s  max=1m0s     p(90)=13.05s   p(95)=13.98s  
     http_reqs......................: 8673   42.122108/s
     iteration_duration.............: avg=9.4s     min=1.23s med=8.95s  max=1m0s     p(90)=13.1s    p(95)=13.99s  
     iterations.....................: 8673   42.122108/s
     vus............................: 87     min=87      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7977dfb6-4b6f-4b21-5251-9258d1e8b300/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/af19821e-3f09-4649-f180-c7eca9320800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 4866     ✗ 0    
     data_received..................: 8.2 MB  36 kB/s
     data_sent......................: 1.9 MB  8.4 kB/s
     http_req_blocked...............: avg=6.42ms   min=1.7µs  med=3.1µs  max=63.81ms p(90)=31.35ms p(95)=39.71ms
     http_req_connecting............: avg=6.34ms   min=0s     med=0s     max=63.76ms p(90)=31.04ms p(95)=38.93ms
     http_req_duration..............: avg=52.83s   min=29.96s med=56.29s max=56.85s  p(90)=56.64s  p(95)=56.68s 
       { expected_response:true }...: avg=52.83s   min=29.96s med=56.29s max=56.85s  p(90)=56.64s  p(95)=56.68s 
   ✓ http_req_failed................: 0.00%   ✓ 0        ✗ 1622 
     http_req_receiving.............: avg=74.09µs  min=25.1µs med=68.8µs max=712.7µs p(90)=95.49µs p(95)=106.3µs
     http_req_sending...............: avg=702.74µs min=9.4µs  med=21.9µs max=10.6ms  p(90)=2.56ms  p(95)=3.21ms 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=52.83s   min=29.96s med=56.29s max=56.85s  p(90)=56.64s  p(95)=56.68s 
     http_reqs......................: 1622    7.053465/s
     iteration_duration.............: avg=52.84s   min=29.96s med=56.29s max=56.85s  p(90)=56.64s  p(95)=56.68s 
     iterations.....................: 1622    7.053465/s
     vus............................: 5       min=5      max=400
     vus_max........................: 400     min=400    max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/aadc207c-92b8-4920-3276-5cc7aee04700/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a44644bc-6869-4fbb-e43a-2299aa85e100/public" alt="HTTP Overview" />


  </details>