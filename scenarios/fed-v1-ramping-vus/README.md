## Overview for: `fed-v1-ramping-vus`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. We are running a heavy load of concurrent VUs to measure response time and other stats, during stress. It measure things like memory usage, CPU usage, response times. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was trying to reach 1500 concurrent VUs over 300s


### Comparison


| Gateway                             | duration(p95)⬇️ |  RPS  |         Requests         |                       Durations                        |
| :---------------------------------- | :-------------: | :---: | :----------------------: | :----------------------------------------------------: |
| wundergraph                         |     2266ms      |  703  |  218197 total, 0 failed  |   avg: 1066ms, p95: 2267ms, max: 4392ms, med: 972ms    |
| mesh                                |     14237ms     |  107  |  33485 total, 0 failed   |  avg: 7241ms, p95: 14237ms, max: 20291ms, med: 7036ms  |
| apollo-router                       |     14342ms     |  108  |  34156 total, 0 failed   |  avg: 7244ms, p95: 14342ms, max: 20741ms, med: 6747ms  |
| stitching-federation-with-yoga-bun  |     17038ms     |  107  |  33455 total, 0 failed   |  avg: 7296ms, p95: 17039ms, max: 35698ms, med: 6897ms  |
| mesh-supergraph                     |     17156ms     |  85   |  26739 total, 0 failed   |  avg: 9214ms, p95: 17157ms, max: 22085ms, med: 9093ms  |
| stitching-federation-with-yoga-deno |     19790ms     |  84   |  26406 total, 0 failed   |  avg: 9313ms, p95: 19790ms, max: 32712ms, med: 9104ms  |
| mercurius                           |     22764ms     |  64   |  20066 total, 0 failed   | avg: 12147ms, p95: 22764ms, max: 23913ms, med: 11941ms |
| apollo-gateway-with-yoga-uws        |     38845ms     |  55   |  17772 total, 0 failed   | avg: 14121ms, p95: 38845ms, max: 56691ms, med: 7797ms  |
| stitching-federation-with-yoga-uws  |     42704ms     |  64   |  21190 total, 1 failed   | avg: 12246ms, p95: 42704ms, max: 60000ms, med: 5738ms  |
| apollo-server-node16                |     43121ms     |  55   |  18068 total, 33 failed  | avg: 14171ms, p95: 43121ms, max: 60011ms, med: 7906ms  |
| apollo-gateway-with-yoga            |     60000ms     |  73   | 24418 total, 2615 failed | avg: 10363ms, p95: 60000ms, max: 60048ms, med: 3700ms  |
| apollo-server                       |     60000ms     |  62   | 20790 total, 2753 failed | avg: 12187ms, p95: 60000ms, max: 60038ms, med: 4043ms  |
| stitching-federation-with-yoga      |     60000ms     |  70   | 23442 total, 2816 failed | avg: 10818ms, p95: 60000ms, max: 60028ms, med: 3258ms  |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 654591     ✗ 0     
     data_received..................: 1.1 GB  3.5 MB/s
     data_sent......................: 259 MB  836 kB/s
     http_req_blocked...............: avg=945.18µs min=1.1µs  med=2.29µs   max=1.12s p(90)=3.9µs  p(95)=5µs   
     http_req_connecting............: avg=935.97µs min=0s     med=0s       max=1.12s p(90)=0s     p(95)=0s    
     http_req_duration..............: avg=1.06s    min=5.51ms med=972.08ms max=4.39s p(90)=1.98s  p(95)=2.26s 
       { expected_response:true }...: avg=1.06s    min=5.51ms med=972.08ms max=4.39s p(90)=1.98s  p(95)=2.26s 
     http_req_failed................: 0.00%   ✓ 0          ✗ 218197
     http_req_receiving.............: avg=7.18ms   min=14.5µs med=35.9µs   max=1.07s p(90)=213µs  p(95)=1.04ms
     http_req_sending...............: avg=1.89ms   min=6.3µs  med=12.3µs   max=1.07s p(90)=27.9µs p(95)=117µs 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s       max=0s    p(90)=0s     p(95)=0s    
     http_req_waiting...............: avg=1.05s    min=5.48ms med=966.84ms max=4.39s p(90)=1.95s  p(95)=2.22s 
     http_reqs......................: 218197  703.853266/s
     iteration_duration.............: avg=1.08s    min=6.11ms med=991.81ms max=4.39s p(90)=2.02s  p(95)=2.31s 
     iterations.....................: 218197  703.853266/s
     vus............................: 10      min=10       max=1500
     vus_max........................: 1500    min=1500     max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a4844b6a-8aaf-4b4e-e8da-f787ab457e00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/90d7c133-2e71-4733-c532-9997e6d9e200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 33266 / ✗ 219
     ✗ valid response structure
      ↳  99% — ✓ 33266 / ✗ 219

     checks.........................: 99.56% ✓ 100017     ✗ 438   
     data_received..................: 169 MB 546 kB/s
     data_sent......................: 40 MB  128 kB/s
     http_req_blocked...............: avg=60.02µs  min=800ns   med=2µs     max=580.48ms p(90)=3µs    p(95)=16.4µs
     http_req_connecting............: avg=51.26µs  min=0s      med=0s      max=580.41ms p(90)=0s     p(95)=0s    
     http_req_duration..............: avg=7.24s    min=17.56ms med=7.03s   max=20.29s   p(90)=13.12s p(95)=14.23s
       { expected_response:true }...: avg=7.24s    min=17.56ms med=7.03s   max=20.29s   p(90)=13.12s p(95)=14.23s
     http_req_failed................: 0.00%  ✓ 0          ✗ 33485 
     http_req_receiving.............: avg=407.29µs min=15.7µs  med=37.19µs max=149.18ms p(90)=61.5µs p(95)=71µs  
     http_req_sending...............: avg=96.41µs  min=6.1µs   med=12.1µs  max=340.22ms p(90)=25.7µs p(95)=45.8µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s       p(90)=0s     p(95)=0s    
     http_req_waiting...............: avg=7.24s    min=17.5ms  med=7.03s   max=20.29s   p(90)=13.12s p(95)=14.23s
     http_reqs......................: 33485  107.936044/s
     iteration_duration.............: avg=7.24s    min=18.07ms med=7.03s   max=20.29s   p(90)=13.12s p(95)=14.23s
     iterations.....................: 33485  107.936044/s
     vus............................: 60     min=50       max=1500
     vus_max........................: 1500   min=1500     max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1ccd04e2-6527-4082-0296-71a7b696e600/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b8226791-29fe-41c7-e4b6-190f9bfb2d00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 33998 / ✗ 158
     ✗ valid response structure
      ↳  99% — ✓ 33998 / ✗ 158

     checks.........................: 99.69% ✓ 102152     ✗ 316   
     data_received..................: 170 MB 540 kB/s
     data_sent......................: 41 MB  129 kB/s
     http_req_blocked...............: avg=127.26µs min=1.1µs    med=2.29µs max=215.52ms p(90)=3.7µs  p(95)=18.59µs
     http_req_connecting............: avg=114.77µs min=0s       med=0s     max=173.09ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=7.24s    min=353.74ms med=6.74s  max=20.74s   p(90)=13.52s p(95)=14.34s 
       { expected_response:true }...: avg=7.24s    min=353.74ms med=6.74s  max=20.74s   p(90)=13.52s p(95)=14.34s 
     http_req_failed................: 0.00%  ✓ 0          ✗ 34156 
     http_req_receiving.............: avg=504.45µs min=19.59µs  med=42.5µs max=245.57ms p(90)=71.8µs p(95)=83.22µs
     http_req_sending...............: avg=131.56µs min=6.6µs    med=12.4µs max=316.02ms p(90)=28.7µs p(95)=59.4µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=7.24s    min=353.64ms med=6.74s  max=20.72s   p(90)=13.52s p(95)=14.34s 
     http_reqs......................: 34156  108.505606/s
     iteration_duration.............: avg=7.24s    min=354.64ms med=6.74s  max=20.74s   p(90)=13.52s p(95)=14.34s 
     iterations.....................: 34156  108.505606/s
     vus............................: 127    min=50       max=1500
     vus_max........................: 1500   min=1500     max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0507667c-75f2-42a7-6619-44e430d69000/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8b4625b0-2165-4145-eff5-d87901d80000/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 33452 / ✗ 3
     ✗ valid response structure
      ↳  99% — ✓ 33452 / ✗ 3

     checks.........................: 99.99% ✓ 100359     ✗ 6     
     data_received..................: 167 MB 535 kB/s
     data_sent......................: 40 MB  127 kB/s
     http_req_blocked...............: avg=228.01µs min=1.4µs    med=2.5µs  max=591.05ms p(90)=5µs    p(95)=32.71µs 
     http_req_connecting............: avg=181.6µs  min=0s       med=0s     max=532.23ms p(90)=0s     p(95)=0s      
     http_req_duration..............: avg=7.29s    min=321.31ms med=6.89s  max=35.69s   p(90)=10.37s p(95)=17.03s  
       { expected_response:true }...: avg=7.29s    min=321.31ms med=6.89s  max=35.69s   p(90)=10.37s p(95)=17.03s  
     http_req_failed................: 0.00%  ✓ 0          ✗ 33455 
     http_req_receiving.............: avg=3.26ms   min=20.8µs   med=51.7µs max=536.49ms p(90)=78.9µs p(95)=234.05µs
     http_req_sending...............: avg=590.7µs  min=7.4µs    med=14.5µs max=961.07ms p(90)=54µs   p(95)=103.4µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=7.29s    min=321.04ms med=6.89s  max=35.69s   p(90)=10.35s p(95)=17.03s  
     http_reqs......................: 33455  107.291637/s
     iteration_duration.............: avg=7.29s    min=324.34ms med=6.89s  max=35.7s    p(90)=10.37s p(95)=17.03s  
     iterations.....................: 33455  107.291637/s
     vus............................: 41     min=0        max=1500
     vus_max........................: 1500   min=1084     max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9f5ca400-0ecc-4dff-ac04-85be27c37400/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b42876a9-7aa6-428b-1167-2fb7a5844f00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 26634 / ✗ 105
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 26739

     checks.........................: 66.53% ✓ 53373     ✗ 26844 
     data_received..................: 135 MB 431 kB/s
     data_sent......................: 32 MB  102 kB/s
     http_req_blocked...............: avg=68.03µs min=1.4µs    med=2.5µs  max=24.74ms p(90)=4.4µs  p(95)=197.51µs
     http_req_connecting............: avg=43.64µs min=0s       med=0s     max=21.1ms  p(90)=0s     p(95)=133.42µs
     http_req_duration..............: avg=9.21s   min=795.54ms med=9.09s  max=22.08s  p(90)=15.93s p(95)=17.15s  
       { expected_response:true }...: avg=9.21s   min=795.54ms med=9.09s  max=22.08s  p(90)=15.93s p(95)=17.15s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 26739 
     http_req_receiving.............: avg=69.67µs min=20.7µs   med=59.6µs max=22.54ms p(90)=84.3µs p(95)=95.3µs  
     http_req_sending...............: avg=35.23µs min=7.8µs    med=14.5µs max=21.7ms  p(90)=32.4µs p(95)=61.11µs 
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s     max=0s      p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=9.21s   min=795.45ms med=9.09s  max=22.08s  p(90)=15.93s p(95)=17.15s  
     http_reqs......................: 26739  85.551482/s
     iteration_duration.............: avg=9.21s   min=795.92ms med=9.09s  max=22.08s  p(90)=15.93s p(95)=17.15s  
     iterations.....................: 26739  85.551482/s
     vus............................: 408    min=0       max=1500
     vus_max........................: 1500   min=1229    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b4c6deb6-e447-4325-6451-9b54415f1100/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c3f3e3dd-a356-47fe-df51-46d71af78d00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-deno`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  95% — ✓ 25298 / ✗ 1108
     ✗ valid response structure
      ↳  95% — ✓ 25298 / ✗ 1108

     checks.........................: 97.20% ✓ 77002     ✗ 2216  
     data_received..................: 144 MB 460 kB/s
     data_sent......................: 31 MB  100 kB/s
     http_req_blocked...............: avg=46.07µs  min=1µs      med=2.4µs  max=24.45ms  p(90)=4.5µs  p(95)=188.1µs 
     http_req_connecting............: avg=36.15µs  min=0s       med=0s     max=24.39ms  p(90)=0s     p(95)=122.67µs
     http_req_duration..............: avg=9.31s    min=529.61ms med=9.1s   max=32.71s   p(90)=16.69s p(95)=19.79s  
       { expected_response:true }...: avg=9.31s    min=529.61ms med=9.1s   max=32.71s   p(90)=16.69s p(95)=19.79s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 26406 
     http_req_receiving.............: avg=190.71µs min=17.1µs   med=35.1µs max=113.67ms p(90)=86.2µs p(95)=125µs   
     http_req_sending...............: avg=78.15µs  min=6.6µs    med=12.8µs max=38.74ms  p(90)=52.4µs p(95)=97µs    
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=9.31s    min=529.55ms med=9.1s   max=32.71s   p(90)=16.69s p(95)=19.79s  
     http_reqs......................: 26406  84.424945/s
     iteration_duration.............: avg=9.31s    min=530.26ms med=9.1s   max=32.71s   p(90)=16.69s p(95)=19.79s  
     iterations.....................: 26406  84.424945/s
     vus............................: 280    min=0       max=1500
     vus_max........................: 1500   min=1500    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/509a2e03-c7fc-4f92-b14a-570d45faa800/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3191172f-fab9-4734-4ea6-3ff74c0eb500/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 60198     ✗ 0     
     data_received..................: 101 MB  324 kB/s
     data_sent......................: 24 MB   76 kB/s
     http_req_blocked...............: avg=53.42µs min=1.5µs  med=3.5µs  max=20.1ms  p(90)=14.9µs  p(95)=455.36µs
     http_req_connecting............: avg=42.65µs min=0s     med=0s     max=19.99ms p(90)=0s      p(95)=375.53µs
     http_req_duration..............: avg=12.14s  min=1s     med=11.94s max=23.91s  p(90)=21.27s  p(95)=22.76s  
       { expected_response:true }...: avg=12.14s  min=1s     med=11.94s max=23.91s  p(90)=21.27s  p(95)=22.76s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 20066 
     http_req_receiving.............: avg=82.6µs  min=25.4µs med=78.2µs max=11.11ms p(90)=103.4µs p(95)=115.7µs 
     http_req_sending...............: avg=36.4µs  min=7.9µs  med=20.1µs max=16.69ms p(90)=47.75µs p(95)=79.4µs  
     http_req_tls_handshaking.......: avg=0s      min=0s     med=0s     max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=12.14s  min=1s     med=11.94s max=23.91s  p(90)=21.27s  p(95)=22.76s  
     http_reqs......................: 20066   64.378144/s
     iteration_duration.............: avg=12.14s  min=1.01s  med=11.94s max=23.91s  p(90)=21.28s  p(95)=22.76s  
     iterations.....................: 20066   64.378144/s
     vus............................: 164     min=0       max=1499
     vus_max........................: 1500    min=1303    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e22b978d-d386-4574-5d34-f488d335a400/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/28a224be-a90f-4297-0392-b58ba8468d00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga-uws`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  63% — ✓ 11222 / ✗ 6550
     ✗ valid response structure
      ↳  63% — ✓ 11222 / ✗ 6550

     checks.........................: 75.42% ✓ 40216     ✗ 13100 
     data_received..................: 76 MB  240 kB/s
     data_sent......................: 21 MB  66 kB/s
     http_req_blocked...............: avg=75.78µs min=1.3µs    med=2.8µs  max=58.9ms  p(90)=18.1µs  p(95)=450.02µs
     http_req_connecting............: avg=62.9µs  min=0s       med=0s     max=58.83ms p(90)=0s      p(95)=367.74µs
     http_req_duration..............: avg=14.12s  min=182.16ms med=7.79s  max=56.69s  p(90)=34.81s  p(95)=38.84s  
       { expected_response:true }...: avg=14.12s  min=182.16ms med=7.79s  max=56.69s  p(90)=34.81s  p(95)=38.84s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 17772 
     http_req_receiving.............: avg=83.17µs min=16.6µs   med=54.9µs max=51.55ms p(90)=87.6µs  p(95)=103.25µs
     http_req_sending...............: avg=78.87µs min=7.9µs    med=15.2µs max=43.9ms  p(90)=58.09µs p(95)=89.1µs  
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s     max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=14.12s  min=182.04ms med=7.79s  max=56.69s  p(90)=34.81s  p(95)=38.84s  
     http_reqs......................: 17772  55.959388/s
     iteration_duration.............: avg=14.12s  min=182.93ms med=7.79s  max=56.69s  p(90)=34.81s  p(95)=38.84s  
     iterations.....................: 17772  55.959388/s
     vus............................: 256    min=0       max=1500
     vus_max........................: 1500   min=1238    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1f75d491-e986-44f4-251a-bab1b5ad1500/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/dd3ede37-3cf3-46ff-0b01-ad93797a3900/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-uws`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  99% — ✓ 21189 / ✗ 1
     ✗ no graphql errors
      ↳  72% — ✓ 15434 / ✗ 5756
     ✗ valid response structure
      ↳  72% — ✓ 15434 / ✗ 5755

     checks.........................: 81.89% ✓ 52057     ✗ 11512 
     data_received..................: 148 MB 453 kB/s
     data_sent......................: 25 MB  77 kB/s
     http_req_blocked...............: avg=115.69µs min=1.2µs    med=2.8µs  max=57.91ms p(90)=12.3µs  p(95)=408.67µs
     http_req_connecting............: avg=105.38µs min=0s       med=0s     max=57.68ms p(90)=0s      p(95)=325.16µs
     http_req_duration..............: avg=12.24s   min=515.72ms med=5.73s  max=1m0s    p(90)=34.47s  p(95)=42.7s   
       { expected_response:true }...: avg=12.24s   min=515.72ms med=5.73s  max=59.75s  p(90)=34.46s  p(95)=42.69s  
     http_req_failed................: 0.00%  ✓ 1         ✗ 21189 
     http_req_receiving.............: avg=74.67µs  min=0s       med=60.5µs max=20.27ms p(90)=100.6µs p(95)=137.8µs 
     http_req_sending...............: avg=42.72µs  min=8.5µs    med=15µs   max=24.47ms p(90)=38.5µs  p(95)=71.1µs  
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=12.24s   min=515.6ms  med=5.73s  max=1m0s    p(90)=34.47s  p(95)=42.7s   
     http_reqs......................: 21190  64.628559/s
     iteration_duration.............: avg=12.24s   min=516.47ms med=5.73s  max=1m0s    p(90)=34.47s  p(95)=42.7s   
     iterations.....................: 21190  64.628559/s
     vus............................: 235    min=0       max=1499
     vus_max........................: 1500   min=1419    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b464dda7-d711-4ec2-98e9-ece014604a00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d40b2f92-b7ee-44c6-7739-8fe8adcc6400/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server-node16`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  99% — ✓ 18035 / ✗ 33
     ✗ no graphql errors
      ↳  52% — ✓ 9540 / ✗ 8528
     ✗ valid response structure
      ↳  52% — ✓ 9540 / ✗ 8495

     checks.........................: 68.51% ✓ 37115     ✗ 17056 
     data_received..................: 77 MB  235 kB/s
     data_sent......................: 21 MB  66 kB/s
     http_req_blocked...............: avg=185.94µs min=1.3µs    med=2.5µs  max=68.95ms p(90)=16.2µs  p(95)=417.4µs 
     http_req_connecting............: avg=175.94µs min=0s       med=0s     max=68.77ms p(90)=0s      p(95)=346.09µs
     http_req_duration..............: avg=14.17s   min=118.75ms med=7.9s   max=1m0s    p(90)=33.2s   p(95)=43.12s  
       { expected_response:true }...: avg=14.08s   min=118.75ms med=7.88s  max=59.99s  p(90)=33.1s   p(95)=41.7s   
     http_req_failed................: 0.18%  ✓ 33        ✗ 18035 
     http_req_receiving.............: avg=67.76µs  min=0s       med=59.2µs max=8.64ms  p(90)=83.03µs p(95)=92.8µs  
     http_req_sending...............: avg=42.39µs  min=7.6µs    med=13.8µs max=32.61ms p(90)=40.4µs  p(95)=65.2µs  
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=14.17s   min=118.67ms med=7.9s   max=1m0s    p(90)=33.2s   p(95)=43.12s  
     http_reqs......................: 18068  55.383385/s
     iteration_duration.............: avg=14.17s   min=119.41ms med=7.9s   max=1m0s    p(90)=33.2s   p(95)=43.12s  
     iterations.....................: 18068  55.383385/s
     vus............................: 72     min=50      max=1500
     vus_max........................: 1500   min=1500    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2c6be021-2b44-4570-8a63-d8f21c9ac900/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/929827e1-a5cf-42fc-0f6b-1d1e2a0cf600/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  89% — ✓ 21803 / ✗ 2615
     ✗ no graphql errors
      ↳  86% — ✓ 21212 / ✗ 3206
     ✗ valid response structure
      ↳  97% — ✓ 21212 / ✗ 591

     checks.........................: 90.92% ✓ 64227     ✗ 6412  
     data_received..................: 109 MB 326 kB/s
     data_sent......................: 29 MB  87 kB/s
     http_req_blocked...............: avg=162.04µs min=1µs     med=2.29µs max=22.86ms p(90)=255.89µs p(95)=426.05µs
     http_req_connecting............: avg=145.08µs min=0s      med=0s     max=22.75ms p(90)=203.79µs p(95)=347.41µs
     http_req_duration..............: avg=10.36s   min=80.77ms med=3.7s   max=1m0s    p(90)=59.99s   p(95)=1m0s    
       { expected_response:true }...: avg=4.4s     min=80.77ms med=3.63s  max=59.88s  p(90)=4.71s    p(95)=5.48s   
     http_req_failed................: 10.70% ✓ 2615      ✗ 21803 
     http_req_receiving.............: avg=47.42µs  min=0s      med=39.1µs max=12.78ms p(90)=74.3µs   p(95)=82.29µs 
     http_req_sending...............: avg=38.61µs  min=6.2µs   med=13.6µs max=20.36ms p(90)=45.5µs   p(95)=63.69µs 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=10.36s   min=80.7ms  med=3.69s  max=1m0s    p(90)=59.99s   p(95)=1m0s    
     http_reqs......................: 24418  73.228994/s
     iteration_duration.............: avg=10.36s   min=81.37ms med=3.7s   max=1m0s    p(90)=1m0s     p(95)=1m0s    
     iterations.....................: 24418  73.228994/s
     vus............................: 23     min=23      max=1500
     vus_max........................: 1500   min=1500    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c5fcf8f6-cd63-4826-2f5e-2bbfc31aac00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/996c5d40-d93a-4f3b-4d27-a470a96b7a00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  86% — ✓ 18037 / ✗ 2753
     ✗ no graphql errors
      ↳  86% — ✓ 17971 / ✗ 2819
     ✗ valid response structure
      ↳  99% — ✓ 17971 / ✗ 66

     checks.........................: 90.54% ✓ 53979     ✗ 5638  
     data_received..................: 93 MB  278 kB/s
     data_sent......................: 25 MB  74 kB/s
     http_req_blocked...............: avg=209.23µs min=1.3µs   med=2.9µs  max=25.45ms p(90)=356.03µs p(95)=631.48µs
     http_req_connecting............: avg=189.36µs min=0s      med=0s     max=20.86ms p(90)=288.5µs  p(95)=503.19µs
     http_req_duration..............: avg=12.18s   min=96.78ms med=4.04s  max=1m0s    p(90)=59.99s   p(95)=1m0s    
       { expected_response:true }...: avg=4.88s    min=96.78ms med=3.97s  max=59.99s  p(90)=4.55s    p(95)=5.34s   
     http_req_failed................: 13.24% ✓ 2753      ✗ 18037 
     http_req_receiving.............: avg=63.78µs  min=0s      med=64.2µs max=7.05ms  p(90)=89.8µs   p(95)=97.2µs  
     http_req_sending...............: avg=40.2µs   min=8.2µs   med=16.8µs max=15.52ms p(90)=51.3µs   p(95)=67.1µs  
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=12.18s   min=96.67ms med=4.04s  max=1m0s    p(90)=59.99s   p(95)=1m0s    
     http_reqs......................: 20790  62.176877/s
     iteration_duration.............: avg=12.18s   min=97.49ms med=4.04s  max=1m0s    p(90)=1m0s     p(95)=1m0s    
     iterations.....................: 20790  62.176877/s
     vus............................: 8      min=0       max=1500
     vus_max........................: 1500   min=1427    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/71297def-68b9-436c-abca-b8d2066a3d00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a1050af6-96e0-4134-18c2-517c53cdeb00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  87% — ✓ 20626 / ✗ 2816
     ✗ no graphql errors
      ↳  87% — ✓ 20542 / ✗ 2900
     ✗ valid response structure
      ↳  99% — ✓ 20542 / ✗ 84

     checks.........................: 91.40% ✓ 61710     ✗ 5800  
     data_received..................: 105 MB 315 kB/s
     data_sent......................: 28 MB  84 kB/s
     http_req_blocked...............: avg=293.87µs min=1.5µs   med=3.4µs  max=58.44ms p(90)=378.79µs p(95)=775.5µs 
     http_req_connecting............: avg=268.79µs min=0s      med=0s     max=58.28ms p(90)=305.09µs p(95)=619.46µs
     http_req_duration..............: avg=10.81s   min=73.62ms med=3.25s  max=1m0s    p(90)=59.99s   p(95)=1m0s    
       { expected_response:true }...: avg=4.1s     min=73.62ms med=3.2s   max=59.97s  p(90)=3.61s    p(95)=4.85s   
     http_req_failed................: 12.01% ✓ 2816      ✗ 20626 
     http_req_receiving.............: avg=75.98µs  min=0s      med=68.7µs max=38.84ms p(90)=98.9µs   p(95)=112.59µs
     http_req_sending...............: avg=75.99µs  min=9.5µs   med=20µs   max=39.93ms p(90)=60.6µs   p(95)=81.8µs  
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=10.81s   min=73.53ms med=3.25s  max=1m0s    p(90)=59.99s   p(95)=1m0s    
     http_reqs......................: 23442  70.096617/s
     iteration_duration.............: avg=10.81s   min=74.35ms med=3.25s  max=1m0s    p(90)=1m0s     p(95)=1m0s    
     iterations.....................: 23442  70.096617/s
     vus............................: 17     min=0       max=1500
     vus_max........................: 1500   min=1266    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/741f96ad-7bf1-4698-2f7a-355ebaa22f00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b28c3709-0493-4aa8-bae6-cc31d0cbf000/public" alt="HTTP Overview" />


  </details>