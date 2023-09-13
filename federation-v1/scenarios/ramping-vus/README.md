## Overview for: `fed-v1-ramping-vus`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. We are running a heavy load of concurrent VUs to measure response time and other stats, during stress. It measure things like memory usage, CPU usage, response times. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was trying to reach 2000 concurrent VUs over 700s


### Comparison


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2a930ff9-ffb1-4a3a-ff16-43f6ab593f00/public" alt="Comparison" />


| Gateway         | duration(p95)⬇️ |  RPS  |          Requests           |                       Durations                        | Notes                                                                                |
| :-------------- | :-------------: | :---: | :-------------------------: | :----------------------------------------------------: | :----------------------------------------------------------------------------------- |
| wundergraph     |     4981ms      |  413  | 293921 total, 184710 failed |    avg: 979ms, p95: 4982ms, max: 27572ms, med: 0ms     | ❌ 184710 failed requests, 184710 non-200 responses, 184710 unexpected GraphQL errors |
| apollo-router   |     6146ms      |  173  |   123544 total, 0 failed    |  avg: 2555ms, p95: 6146ms, max: 19246ms, med: 2113ms   | ✅                                                                                    |
| mesh-bun        |     19728ms     |  97   |    70281 total, 0 failed    | avg: 10535ms, p95: 19729ms, max: 49734ms, med: 10024ms | ✅                                                                                    |
| mesh-supergraph |     21247ms     |  90   |    65186 total, 0 failed    | avg: 11258ms, p95: 21247ms, max: 28853ms, med: 11038ms | ✅                                                                                    |
| mesh            |     23805ms     |  81   |    58843 total, 0 failed    | avg: 12527ms, p95: 23805ms, max: 32899ms, med: 12386ms | ✅                                                                                    |
| apollo-server   |     53929ms     |  62   |  45501 total, 1376 failed   | avg: 16615ms, p95: 53930ms, max: 60398ms, med: 7133ms  | ❌ 1376 failed requests, 1376 non-200 responses, 1376 unexpected GraphQL errors       |
| mercurius       |     60000ms     |  39   |  29086 total, 3273 failed   | avg: 24828ms, p95: 60001ms, max: 60026ms, med: 20381ms | ❌ 3273 failed requests, 3273 non-200 responses, 3273 unexpected GraphQL errors       |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  37% — ✓ 109211 / ✗ 184710
     ✗ no graphql errors
      ↳  37% — ✓ 109211 / ✗ 184710
     ✓ valid response structure

     checks.........................: 47.00% ✓ 327633     ✗ 369420
     data_received..................: 9.6 GB 14 MB/s
     data_sent......................: 130 MB 183 kB/s
     http_req_blocked...............: avg=13.05ms  min=0s       med=0s       max=19.95s p(90)=4.39µs  p(95)=5.24µs 
     http_req_connecting............: avg=12.39ms  min=0s       med=0s       max=16s    p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=978.65ms min=0s       med=0s       max=27.57s p(90)=3.43s   p(95)=4.98s  
       { expected_response:true }...: avg=2.62s    min=7.99ms   med=2.05s    max=27.57s p(90)=5.68s   p(95)=7.37s  
     http_req_failed................: 62.84% ✓ 184710     ✗ 109211
     http_req_receiving.............: avg=238.38ms min=0s       med=0s       max=22.71s p(90)=305.5ms p(95)=1.34s  
     http_req_sending...............: avg=21.19ms  min=0s       med=0s       max=15.79s p(90)=23.59µs p(95)=38.91µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s     p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=719.07ms min=0s       med=0s       max=16.12s p(90)=2.63s   p(95)=3.66s  
     http_reqs......................: 293921 413.971468/s
     iteration_duration.............: avg=2.3s     min=222.31µs med=571.68ms max=45.56s p(90)=7.57s   p(95)=11.09s 
     iterations.....................: 293921 413.971468/s
     vus............................: 7      min=7        max=1998
     vus_max........................: 2000   min=2000     max=2000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/36623b3b-6bac-48fe-7d8a-45616c635a00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/52b52508-d71b-47ba-c2a6-60078c3e6200/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7a841e5f-01eb-41c0-cf73-49957f5b0400/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 370632     ✗ 0     
     data_received..................: 11 GB   15 MB/s
     data_sent......................: 147 MB  206 kB/s
     http_req_blocked...............: avg=35.79ms  min=1.52µs  med=3.53µs  max=15.67s p(90)=5.77µs   p(95)=8.98µs  
     http_req_connecting............: avg=34.18ms  min=0s      med=0s      max=15.66s p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=2.55s    min=9.59ms  med=2.11s   max=19.24s p(90)=5.18s    p(95)=6.14s   
       { expected_response:true }...: avg=2.55s    min=9.59ms  med=2.11s   max=19.24s p(90)=5.18s    p(95)=6.14s   
     http_req_failed................: 0.00%   ✓ 0          ✗ 123544
     http_req_receiving.............: avg=480.54ms min=22.36µs med=71.73µs max=15.51s p(90)=1.46s    p(95)=3.21s   
     http_req_sending...............: avg=88.38ms  min=7.03µs  med=15.42µs max=13.63s p(90)=133.91µs p(95)=297.55ms
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s     p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=1.98s    min=9.36ms  med=1.63s   max=13.82s p(90)=4.27s    p(95)=5.12s   
     http_reqs......................: 123544  173.738668/s
     iteration_duration.............: avg=5.72s    min=24.84ms med=4.47s   max=37.71s p(90)=12.39s   p(95)=15.26s  
     iterations.....................: 123544  173.738668/s
     vus............................: 343     min=50       max=1978
     vus_max........................: 2000    min=2000     max=2000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8e3137f3-ca7f-43b2-d61d-0f90581a3400/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8dd0b855-2ca7-419d-324d-79cffa25af00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5d7d35cb-b554-4a0b-e54c-9a73914e4100/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 210843    ✗ 0     
     data_received..................: 6.2 GB  8.5 MB/s
     data_sent......................: 83 MB   116 kB/s
     http_req_blocked...............: avg=913.65µs min=1.35µs   med=3.05µs  max=762.43ms p(90)=5.38µs   p(95)=10.27µs 
     http_req_connecting............: avg=883.79µs min=0s       med=0s      max=762.37ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=10.53s   min=168.7ms  med=10.02s  max=49.73s   p(90)=19.15s   p(95)=19.72s  
       { expected_response:true }...: avg=10.53s   min=168.7ms  med=10.02s  max=49.73s   p(90)=19.15s   p(95)=19.72s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 70281 
     http_req_receiving.............: avg=110.23ms min=29.11µs  med=87.12µs max=14.95s   p(90)=531.69µs p(95)=43.23ms 
     http_req_sending...............: avg=1.66ms   min=7.76µs   med=13.82µs max=727.45ms p(90)=33.88µs  p(95)=120.25µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=10.42s   min=167.5ms  med=10.01s  max=49.72s   p(90)=19.03s   p(95)=19.61s  
     http_reqs......................: 70281   97.393554/s
     iteration_duration.............: avg=10.59s   min=177.85ms med=10.05s  max=49.76s   p(90)=19.22s   p(95)=19.85s  
     iterations.....................: 70281   97.393554/s
     vus............................: 48      min=48      max=1999
     vus_max........................: 2000    min=2000    max=2000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9181e16b-9940-458e-305f-2671116d2800/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c9c86a11-9483-4f0a-27a8-c2ef20411400/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1c3c2b4f-c65d-472c-72ff-71f2f11e5c00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 195558    ✗ 0     
     data_received..................: 5.7 GB  8.0 MB/s
     data_sent......................: 77 MB   108 kB/s
     http_req_blocked...............: avg=1.43ms  min=1.52µs   med=4.16µs  max=1.23s  p(90)=6.77µs  p(95)=11.86µs
     http_req_connecting............: avg=1.35ms  min=0s       med=0s      max=1.23s  p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=11.25s  min=173.05ms med=11.03s  max=28.85s p(90)=19.84s  p(95)=21.24s 
       { expected_response:true }...: avg=11.25s  min=173.05ms med=11.03s  max=28.85s p(90)=19.84s  p(95)=21.24s 
     http_req_failed................: 0.00%   ✓ 0         ✗ 65186 
     http_req_receiving.............: avg=11.42ms min=31.29µs  med=80.23µs max=1.73s  p(90)=1.42ms  p(95)=11.15ms
     http_req_sending...............: avg=2.19ms  min=8.8µs    med=19.19µs max=1.5s   p(90)=43.65µs p(95)=149.6µs
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s      max=0s     p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=11.24s  min=172.97ms med=11.02s  max=28.85s p(90)=19.84s  p(95)=21.23s 
     http_reqs......................: 65186   90.671985/s
     iteration_duration.............: avg=11.35s  min=212.28ms med=11.15s  max=29.03s p(90)=19.95s  p(95)=21.33s 
     iterations.....................: 65186   90.671985/s
     vus............................: 93      min=50      max=1998
     vus_max........................: 2000    min=2000    max=2000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d7ad1bc9-9785-4ca8-3b83-a7b7d661ed00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a9def576-3352-4722-9514-842222fd3b00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e08b36dd-6db4-4d67-3654-6c6f35875e00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 176529    ✗ 0     
     data_received..................: 5.2 GB  7.2 MB/s
     data_sent......................: 70 MB   97 kB/s
     http_req_blocked...............: avg=1.07ms min=1.43µs   med=4.18µs  max=977.24ms p(90)=6.74µs   p(95)=12.33µs
     http_req_connecting............: avg=1.03ms min=0s       med=0s      max=977.17ms p(90)=0s       p(95)=0s     
     http_req_duration..............: avg=12.52s min=442.65ms med=12.38s  max=32.89s   p(90)=21.73s   p(95)=23.8s  
       { expected_response:true }...: avg=12.52s min=442.65ms med=12.38s  max=32.89s   p(90)=21.73s   p(95)=23.8s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 58843 
     http_req_receiving.............: avg=5.94ms min=35.06µs  med=84.84µs max=1.34s    p(90)=721.39µs p(95)=7.77ms 
     http_req_sending...............: avg=1.61ms min=8.47µs   med=20.07µs max=1.13s    p(90)=41.94µs  p(95)=128.2µs
     http_req_tls_handshaking.......: avg=0s     min=0s       med=0s      max=0s       p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=12.51s min=442.54ms med=12.37s  max=32.89s   p(90)=21.73s   p(95)=23.79s 
     http_reqs......................: 58843   81.709188/s
     iteration_duration.............: avg=12.6s  min=538.83ms med=12.45s  max=33.31s   p(90)=21.9s    p(95)=23.97s 
     iterations.....................: 58843   81.709188/s
     vus............................: 119     min=51      max=1998
     vus_max........................: 2000    min=2000    max=2000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8da033c6-f9d4-43e8-4a83-4908104cf400/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e35d76f1-6685-4446-4bf4-526e34115900/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8b5af420-861b-43ad-1f20-f5f9d3b6bb00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  96% — ✓ 44125 / ✗ 1376
     ✗ no graphql errors
      ↳  96% — ✓ 44125 / ✗ 1376
     ✓ valid response structure

     checks.........................: 97.96% ✓ 132375   ✗ 2752  
     data_received..................: 3.9 GB 5.3 MB/s
     data_sent......................: 54 MB  74 kB/s
     http_req_blocked...............: avg=282.13µs min=1.39µs   med=3.14µs  max=424.25ms p(90)=6.43µs   p(95)=169.21µs
     http_req_connecting............: avg=264.84µs min=0s       med=0s      max=424.18ms p(90)=0s       p(95)=109.72µs
     http_req_duration..............: avg=16.61s   min=235.23ms med=7.13s   max=1m0s     p(90)=42.58s   p(95)=53.92s  
       { expected_response:true }...: avg=15.26s   min=235.23ms med=6.5s    max=59.97s   p(90)=38.77s   p(95)=45.62s  
     http_req_failed................: 3.02%  ✓ 1376     ✗ 44125 
     http_req_receiving.............: avg=1.79ms   min=0s       med=88.06µs max=657.92ms p(90)=154.22µs p(95)=481.54µs
     http_req_sending...............: avg=367.53µs min=8.16µs   med=14.77µs max=480.65ms p(90)=36.08µs  p(95)=62.64µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=16.61s   min=235.05ms med=7.13s   max=1m0s     p(90)=42.56s   p(95)=53.92s  
     http_reqs......................: 45501  62.33156/s
     iteration_duration.............: avg=16.63s   min=245.63ms med=7.15s   max=1m0s     p(90)=42.59s   p(95)=53.99s  
     iterations.....................: 45501  62.33156/s
     vus............................: 91     min=51     max=2000
     vus_max........................: 2000   min=2000   max=2000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6a38e539-340c-47a5-4e6a-909ab1a16700/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c2a4af52-f8dd-408c-2ce0-b474f61a6200/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d6591597-c662-4e7f-a9f7-92782603c200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  88% — ✓ 25813 / ✗ 3273
     ✗ no graphql errors
      ↳  88% — ✓ 25813 / ✗ 3273
     ✓ valid response structure

     checks.........................: 92.20% ✓ 77439     ✗ 6546  
     data_received..................: 2.3 GB 3.1 MB/s
     data_sent......................: 36 MB  48 kB/s
     http_req_blocked...............: avg=42.47µs min=1.44µs   med=3.78µs  max=24.77ms p(90)=125.9µs p(95)=183.67µs
     http_req_connecting............: avg=31.2µs  min=0s       med=0s      max=24.69ms p(90)=85.31µs p(95)=123.45µs
     http_req_duration..............: avg=24.82s  min=690.58ms med=20.38s  max=1m0s    p(90)=1m0s    p(95)=1m0s    
       { expected_response:true }...: avg=20.36s  min=690.58ms med=17.46s  max=59.64s  p(90)=42.53s  p(95)=47.65s  
     http_req_failed................: 11.25% ✓ 3273      ✗ 25813 
     http_req_receiving.............: avg=107.8µs min=0s       med=94.43µs max=20.03ms p(90)=131.7µs p(95)=150.46µs
     http_req_sending...............: avg=29.64µs min=8.3µs    med=21.3µs  max=16.25ms p(90)=35.37µs p(95)=46.1µs  
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s      max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=24.82s  min=690.33ms med=20.38s  max=1m0s    p(90)=1m0s    p(95)=1m0s    
     http_reqs......................: 29086  39.321107/s
     iteration_duration.............: avg=24.83s  min=698.7ms  med=20.38s  max=1m0s    p(90)=1m0s    p(95)=1m0s    
     iterations.....................: 29086  39.321107/s
     vus............................: 3      min=3       max=2000
     vus_max........................: 2000   min=2000    max=2000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/80cce27c-b7a6-4b1e-106b-7100c67fe800/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a61375fb-22a8-4647-8e9c-f50b02e98c00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6b05d35e-aaf1-4efb-a074-eaaffa530e00/public" alt="HTTP Overview" />


  </details>