## Overview for: `fed-v1-ramping-vus`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. We are running a heavy load of concurrent VUs to measure response time and other stats, during stress. It measure things like memory usage, CPU usage, response times. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was trying to reach 1000 concurrent VUs over 60s


### Comparison


| Gateway                             | duration(p95)⬇️ |  RPS  |       Requests        |                       Durations                        |
| :---------------------------------- | :-------------: | :---: | :-------------------: | :----------------------------------------------------: |
| wundergraph                         |     1377ms      |  696  | 48729 total, 0 failed |    avg: 710ms, p95: 1378ms, max: 2782ms, med: 689ms    |
| mercurius                           |     10212ms     |  89   | 6267 total, 0 failed  |  avg: 5852ms, p95: 10213ms, max: 10830ms, med: 5718ms  |
| apollo-router                       |     10917ms     |  99   | 7081 total, 0 failed  |  avg: 5479ms, p95: 10918ms, max: 12349ms, med: 5253ms  |
| mesh                                |     11310ms     |  82   | 5746 total, 0 failed  |  avg: 6711ms, p95: 11310ms, max: 14282ms, med: 6671ms  |
| stitching-federation-with-yoga-deno |     14393ms     |  60   | 4206 total, 0 failed  | avg: 9335ms, p95: 14393ms, max: 16870ms, med: 10848ms  |
| stitching-federation-with-yoga-bun  |     19317ms     |  65   | 4693 total, 0 failed  |  avg: 8215ms, p95: 19317ms, max: 25470ms, med: 7217ms  |
| stitching-federation-with-yoga      |     30947ms     |  36   | 2985 total, 0 failed  | avg: 14997ms, p95: 30947ms, max: 43609ms, med: 11794ms |
| apollo-gateway-with-yoga            |     31692ms     |  52   | 3814 total, 0 failed  | avg: 10646ms, p95: 31693ms, max: 37138ms, med: 6086ms  |
| apollo-server                       |     55454ms     |  38   | 3515 total, 58 failed | avg: 13567ms, p95: 55454ms, max: 60003ms, med: 3140ms  |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 146187     ✗ 0     
     data_received..................: 243 MB  3.5 MB/s
     data_sent......................: 58 MB   826 kB/s
     http_req_blocked...............: avg=292.36µs min=1µs    med=2.1µs    max=387.45ms p(90)=3.7µs    p(95)=5.56µs 
     http_req_connecting............: avg=279.66µs min=0s     med=0s       max=387.17ms p(90)=0s       p(95)=0s     
     http_req_duration..............: avg=709.69ms min=6.56ms med=689.46ms max=2.78s    p(90)=1.19s    p(95)=1.37s  
       { expected_response:true }...: avg=709.69ms min=6.56ms med=689.46ms max=2.78s    p(90)=1.19s    p(95)=1.37s  
     http_req_failed................: 0.00%   ✓ 0          ✗ 48729 
     http_req_receiving.............: avg=443.64µs min=18.7µs med=41.8µs   max=303.29ms p(90)=174.72µs p(95)=359.1µs
     http_req_sending...............: avg=307.19µs min=6.8µs  med=11.9µs   max=272.89ms p(90)=25.3µs   p(95)=79.06µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s       max=0s       p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=708.94ms min=6.46ms med=688.91ms max=2.78s    p(90)=1.19s    p(95)=1.37s  
     http_reqs......................: 48729   696.111828/s
     iteration_duration.............: avg=710.62ms min=6.94ms med=690.2ms  max=2.78s    p(90)=1.19s    p(95)=1.37s  
     iterations.....................: 48729   696.111828/s
     vus............................: 9       min=9        max=997 
     vus_max........................: 1000    min=1000     max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/46ba7d55-b39e-4de4-0f50-2f239d2d1a00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d266b98b-ac46-48d1-d0f8-7689d83bc600/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 18801     ✗ 0     
     data_received..................: 32 MB   450 kB/s
     data_sent......................: 7.4 MB  106 kB/s
     http_req_blocked...............: avg=135.65µs min=1.1µs   med=2.5µs   max=25.42ms p(90)=352.17µs p(95)=400.46µs
     http_req_connecting............: avg=121.2µs  min=0s      med=0s      max=19.21ms p(90)=292.03µs p(95)=330.86µs
     http_req_duration..............: avg=5.85s    min=9.36ms  med=5.71s   max=10.82s  p(90)=9.75s    p(95)=10.21s  
       { expected_response:true }...: avg=5.85s    min=9.36ms  med=5.71s   max=10.82s  p(90)=9.75s    p(95)=10.21s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 6267  
     http_req_receiving.............: avg=59.18µs  min=21.09µs med=54.89µs max=3.71ms  p(90)=80.43µs  p(95)=89.29µs 
     http_req_sending...............: avg=32.74µs  min=6.4µs   med=15.2µs  max=16.02ms p(90)=61.59µs  p(95)=74.89µs 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=5.85s    min=9.3ms   med=5.71s   max=10.82s  p(90)=9.75s    p(95)=10.21s  
     http_reqs......................: 6267    89.525183/s
     iteration_duration.............: avg=5.85s    min=9.68ms  med=5.71s   max=10.82s  p(90)=9.76s    p(95)=10.21s  
     iterations.....................: 6267    89.525183/s
     vus............................: 7       min=7       max=1000
     vus_max........................: 1000    min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6b3bbe7a-e7fb-470a-b64f-e60f5e6e0c00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/bdcb2a81-e984-4990-43f1-897fd898bf00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 7063 / ✗ 18
     ✗ expected_result
      ↳  99% — ✓ 7077 / ✗ 4

     checks.........................: 99.89% ✓ 21221     ✗ 22    
     data_received..................: 35 MB  497 kB/s
     data_sent......................: 8.4 MB 119 kB/s
     http_req_blocked...............: avg=182.65µs min=1.3µs    med=2.5µs  max=33.24ms p(90)=383.94µs p(95)=453.43µs
     http_req_connecting............: avg=156.64µs min=0s       med=0s     max=33.17ms p(90)=315.34µs p(95)=381.12µs
     http_req_duration..............: avg=5.47s    min=262.46ms med=5.25s  max=12.34s  p(90)=10.51s   p(95)=10.91s  
       { expected_response:true }...: avg=5.47s    min=262.46ms med=5.25s  max=12.34s  p(90)=10.51s   p(95)=10.91s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 7081  
     http_req_receiving.............: avg=61.92µs  min=21.9µs   med=52.2µs max=2.08ms  p(90)=80.6µs   p(95)=90.61µs 
     http_req_sending...............: avg=38.48µs  min=8.1µs    med=14.4µs max=17.95ms p(90)=58µs     p(95)=74.8µs  
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=5.47s    min=262.32ms med=5.25s  max=12.34s  p(90)=10.51s   p(95)=10.91s  
     http_reqs......................: 7081   99.861201/s
     iteration_duration.............: avg=5.47s    min=263.36ms med=5.25s  max=12.35s  p(90)=10.51s   p(95)=10.91s  
     iterations.....................: 7081   99.861201/s
     vus............................: 92     min=55      max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/dc1fedce-8938-4230-2f54-be7141e1bc00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f62e6509-9b81-400b-0790-2e5bd3886f00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 5732 / ✗ 14
     ✓ expected_result

     checks.........................: 99.91% ✓ 17224     ✗ 14    
     data_received..................: 29 MB  414 kB/s
     data_sent......................: 6.8 MB 97 kB/s
     http_req_blocked...............: avg=119.37µs min=1.3µs   med=2.4µs   max=30.52ms p(90)=437.5µs p(95)=491.55µs
     http_req_connecting............: avg=104.56µs min=0s      med=0s      max=30.35ms p(90)=369.9µs p(95)=416.68µs
     http_req_duration..............: avg=6.71s    min=14.2ms  med=6.67s   max=14.28s  p(90)=10.81s  p(95)=11.31s  
       { expected_response:true }...: avg=6.71s    min=14.2ms  med=6.67s   max=14.28s  p(90)=10.81s  p(95)=11.31s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 5746  
     http_req_receiving.............: avg=62.28µs  min=20.6µs  med=55.95µs max=3.8ms   p(90)=83.9µs  p(95)=94.37µs 
     http_req_sending...............: avg=34.91µs  min=8.3µs   med=14.1µs  max=7.42ms  p(90)=64.55µs p(95)=79.6µs  
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=6.71s    min=14.11ms med=6.67s   max=14.28s  p(90)=10.81s  p(95)=11.31s  
     http_reqs......................: 5746   82.067835/s
     iteration_duration.............: avg=6.71s    min=14.51ms med=6.67s   max=14.28s  p(90)=10.81s  p(95)=11.31s  
     iterations.....................: 5746   82.067835/s
     vus............................: 132    min=55      max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b7a07b06-f042-4021-ded4-673374c22100/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1387bb39-c6e9-4c35-fad5-912b66a94800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-deno`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 4199 / ✗ 7
     ✓ expected_result

     checks.........................: 99.94% ✓ 12611     ✗ 7     
     data_received..................: 21 MB  301 kB/s
     data_sent......................: 5.0 MB 71 kB/s
     http_req_blocked...............: avg=106.36µs min=900ns   med=2.4µs  max=14.72ms p(90)=404.54µs p(95)=442.19µs
     http_req_connecting............: avg=88.41µs  min=0s      med=0s     max=14.65ms p(90)=335.94µs p(95)=370.35µs
     http_req_duration..............: avg=9.33s    min=42.23ms med=10.84s max=16.87s  p(90)=13.98s   p(95)=14.39s  
       { expected_response:true }...: avg=9.33s    min=42.23ms med=10.84s max=16.87s  p(90)=13.98s   p(95)=14.39s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 4206  
     http_req_receiving.............: avg=76.71µs  min=14.2µs  med=35µs   max=9.48ms  p(90)=89.55µs  p(95)=118.5µs 
     http_req_sending...............: avg=45.36µs  min=5.9µs   med=15.9µs max=7.37ms  p(90)=73.14µs  p(95)=87.57µs 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=9.33s    min=42.17ms med=10.84s max=16.87s  p(90)=13.98s   p(95)=14.39s  
     http_reqs......................: 4206   60.073446/s
     iteration_duration.............: avg=9.33s    min=42.66ms med=10.84s max=16.87s  p(90)=13.98s   p(95)=14.39s  
     iterations.....................: 4206   60.073446/s
     vus............................: 294    min=56      max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b04e0e2e-df79-4cf1-6144-0a0dd146c100/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/214cce71-4da4-4cd6-ae7f-7be49c248000/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 14079     ✗ 0     
     data_received..................: 23 MB   329 kB/s
     data_sent......................: 5.6 MB  78 kB/s
     http_req_blocked...............: avg=251.13µs min=1.3µs  med=2.5µs  max=117.46ms p(90)=448.01µs p(95)=533.04µs
     http_req_connecting............: avg=226.24µs min=0s     med=0s     max=117.39ms p(90)=365.92µs p(95)=451.37µs
     http_req_duration..............: avg=8.21s    min=1.05s  med=7.21s  max=25.47s   p(90)=16.02s   p(95)=19.31s  
       { expected_response:true }...: avg=8.21s    min=1.05s  med=7.21s  max=25.47s   p(90)=16.02s   p(95)=19.31s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 4693  
     http_req_receiving.............: avg=296.14µs min=21.1µs med=47.4µs max=126.97ms p(90)=158.09µs p(95)=381.49µs
     http_req_sending...............: avg=180.81µs min=7.6µs  med=13.9µs max=116.76ms p(90)=88.08µs  p(95)=136.35µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=8.21s    min=1.05s  med=7.21s  max=25.47s   p(90)=16.01s   p(95)=19.31s  
     http_reqs......................: 4693    65.964996/s
     iteration_duration.............: avg=8.21s    min=1.05s  med=7.21s  max=25.58s   p(90)=16.02s   p(95)=19.31s  
     iterations.....................: 4693    65.964996/s
     vus............................: 110     min=54      max=1000
     vus_max........................: 1000    min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/56f8d2e1-cf24-4432-a1ef-862bb7117100/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d0dd016a-bd69-4d5c-2993-c05eba8a2300/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  61% — ✓ 1842 / ✗ 1143
     ✗ expected_result
      ↳  97% — ✓ 2916 / ✗ 69

     checks.........................: 86.46% ✓ 7743      ✗ 1212  
     data_received..................: 22 MB  264 kB/s
     data_sent......................: 3.5 MB 43 kB/s
     http_req_blocked...............: avg=213.29µs min=1.6µs  med=3.1µs  max=18.51ms p(90)=499.4µs  p(95)=544.92µs
     http_req_connecting............: avg=183.51µs min=0s     med=0s     max=18.44ms p(90)=418.23µs p(95)=458.69µs
     http_req_duration..............: avg=14.99s   min=2.46s  med=11.79s max=43.6s   p(90)=29.53s   p(95)=30.94s  
       { expected_response:true }...: avg=14.99s   min=2.46s  med=11.79s max=43.6s   p(90)=29.53s   p(95)=30.94s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 2985  
     http_req_receiving.............: avg=89.65µs  min=23.6µs med=72.5µs max=4.72ms  p(90)=127.93µs p(95)=175.39µs
     http_req_sending...............: avg=48.87µs  min=9.29µs med=20.4µs max=2.55ms  p(90)=93.72µs  p(95)=111.94µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=14.99s   min=2.46s  med=11.79s max=43.6s   p(90)=29.53s   p(95)=30.94s  
     http_reqs......................: 2985   36.374416/s
     iteration_duration.............: avg=14.99s   min=2.46s  med=11.79s max=43.61s  p(90)=29.53s   p(95)=30.94s  
     iterations.....................: 2985   36.374416/s
     vus............................: 66     min=54      max=999 
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7bfc8464-b268-4ca4-24e6-8245d0e5a500/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7dab1b4c-220b-491d-1151-6b478086cc00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  73% — ✓ 2787 / ✗ 1027
     ✗ expected_result
      ↳  94% — ✓ 3590 / ✗ 224

     checks.........................: 89.06% ✓ 10191     ✗ 1251  
     data_received..................: 17 MB  237 kB/s
     data_sent......................: 4.5 MB 62 kB/s
     http_req_blocked...............: avg=188.94µs min=1.3µs   med=2.9µs   max=15.81ms p(90)=506.83µs p(95)=563µs   
     http_req_connecting............: avg=163.22µs min=0s      med=0s      max=15.72ms p(90)=421.86µs p(95)=478.34µs
     http_req_duration..............: avg=10.64s   min=56.44ms med=6.08s   max=37.13s  p(90)=29.47s   p(95)=31.69s  
       { expected_response:true }...: avg=10.64s   min=56.44ms med=6.08s   max=37.13s  p(90)=29.47s   p(95)=31.69s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 3814  
     http_req_receiving.............: avg=82.02µs  min=21.3µs  med=64.15µs max=9.32ms  p(90)=101.07µs p(95)=117.17µs
     http_req_sending...............: avg=109.1µs  min=8.6µs   med=19.1µs  max=8.44ms  p(90)=88.97µs  p(95)=110.82µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=10.64s   min=56.35ms med=6.08s   max=37.13s  p(90)=29.47s   p(95)=31.69s  
     http_reqs......................: 3814   52.098221/s
     iteration_duration.............: avg=10.64s   min=56.79ms med=6.08s   max=37.13s  p(90)=29.47s   p(95)=31.69s  
     iterations.....................: 3814   52.098221/s
     vus............................: 12     min=12      max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/329dfdd5-a6a4-4f8c-5167-63d0ad5bd200/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/20db8f1e-1415-4c2b-6268-a9545942e400/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  98% — ✓ 3457 / ✗ 58
     ✗ no_errors
      ↳  97% — ✓ 3416 / ✗ 99
     ✗ expected_result
      ↳  99% — ✓ 3440 / ✗ 17

     checks.........................: 98.34% ✓ 10313     ✗ 174   
     data_received..................: 18 MB  193 kB/s
     data_sent......................: 4.2 MB 46 kB/s
     http_req_blocked...............: avg=217.49µs min=1.8µs    med=3.5µs   max=15.88ms p(90)=598.11µs p(95)=694.93µs
     http_req_connecting............: avg=186.53µs min=0s       med=0s      max=15.79ms p(90)=499.65µs p(95)=593.97µs
     http_req_duration..............: avg=13.56s   min=169.9ms  med=3.14s   max=1m0s    p(90)=48.87s   p(95)=55.45s  
       { expected_response:true }...: avg=12.78s   min=169.9ms  med=3.11s   max=59.96s  p(90)=46.79s   p(95)=53.32s  
     http_req_failed................: 1.65%  ✓ 58        ✗ 3457  
     http_req_receiving.............: avg=104.57µs min=0s       med=88.19µs max=1.81ms  p(90)=154.29µs p(95)=182.91µs
     http_req_sending...............: avg=56.38µs  min=11.59µs  med=23.4µs  max=2.3ms   p(90)=98.83µs  p(95)=127.05µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=13.56s   min=169.79ms med=3.14s   max=1m0s    p(90)=48.87s   p(95)=55.45s  
     http_reqs......................: 3515   38.227319/s
     iteration_duration.............: avg=13.56s   min=170.31ms med=3.14s   max=1m0s    p(90)=48.87s   p(95)=55.45s  
     iterations.....................: 3515   38.227319/s
     vus............................: 15     min=15      max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1ac50af0-3d0d-42e2-7d8a-c4b2e378e100/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e4e95459-2e28-46ae-4df7-d943a684c100/public" alt="HTTP Overview" />


  </details>