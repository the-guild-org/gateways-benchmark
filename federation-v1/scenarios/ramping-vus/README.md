## Overview for: `federation-v1/ramping-vus`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. We are running a heavy load of concurrent VUs to measure response time and other stats, during stress. It measure things like memory usage, CPU usage, response times. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was trying to reach 2000 concurrent VUs over 600s


### Comparison


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/01cbef60-d8a2-42cf-eff7-4e88ed91ce00/public" alt="Comparison" />


| Gateway             | duration(p95)⬇️ |  RPS  |           Requests           |                       Durations                       | Notes                                                                                |
| :------------------ | :-------------: | :---: | :--------------------------: | :---------------------------------------------------: | :----------------------------------------------------------------------------------- |
| mercurius           |       0ms       | 1643  | 1002740 total, 989305 failed |     avg: 210ms, p95: 0ms, max: 60006ms, med: 0ms      | ❌ 989305 failed requests, 989305 non-200 responses, 989305 unexpected GraphQL errors |
| apollo-router       |     6242ms      |  173  |    106281 total, 0 failed    |  avg: 2583ms, p95: 6242ms, max: 23131ms, med: 2148ms  | ✅                                                                                    |
| wundergraph         |     6814ms      |  165  |    100885 total, 0 failed    |  avg: 2651ms, p95: 6815ms, max: 27757ms, med: 2140ms  | ✅                                                                                    |
| mesh-supergraph-bun |     16884ms     |  114  |    70264 total, 0 failed     | avg: 8854ms, p95: 16885ms, max: 42783ms, med: 8286ms  | ✅                                                                                    |
| mesh-supergraph     |     17757ms     |  105  |    65177 total, 0 failed     | avg: 9541ms, p95: 17758ms, max: 25547ms, med: 9563ms  | ✅                                                                                    |
| mesh-bun            |     18478ms     |  108  |    67032 total, 0 failed     | avg: 9342ms, p95: 18479ms, max: 45471ms, med: 8590ms  | ✅                                                                                    |
| mesh                |     18740ms     |  101  |    62707 total, 0 failed     | avg: 9956ms, p95: 18740ms, max: 24969ms, med: 9904ms  | ✅                                                                                    |
| apollo-server       |     60000ms     |  76   |   48202 total, 7443 failed   | avg: 13301ms, p95: 60001ms, max: 61167ms, med: 4285ms | ❌ 7443 failed requests, 7443 non-200 responses, 7443 unexpected GraphQL errors       |



<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  1% — ✓ 13435 / ✗ 989305
     ✗ no graphql errors
      ↳  1% — ✓ 13435 / ✗ 989305
     ✓ valid response structure

     checks.........................: 1.99%   ✓ 40305       ✗ 1978610
     data_received..................: 1.2 GB  1.9 MB/s
     data_sent......................: 18 MB   29 kB/s
     http_req_blocked...............: avg=9.31µs   min=0s       med=0s       max=44.53ms  p(90)=0s       p(95)=0s      
     http_req_connecting............: avg=8.88µs   min=0s       med=0s       max=31.89ms  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=210.42ms min=0s       med=0s       max=1m0s     p(90)=0s       p(95)=0s      
       { expected_response:true }...: avg=12.07s   min=305.64ms med=9.46s    max=58.39s   p(90)=27.19s   p(95)=35.74s  
     http_req_failed................: 98.66%  ✓ 989305      ✗ 13435  
     http_req_receiving.............: avg=5.89µs   min=0s       med=0s       max=254.27ms p(90)=0s       p(95)=0s      
     http_req_sending...............: avg=2.13µs   min=0s       med=0s       max=158.11ms p(90)=0s       p(95)=0s      
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=210.41ms min=0s       med=0s       max=1m0s     p(90)=0s       p(95)=0s      
     http_reqs......................: 1002740 1643.832108/s
     iteration_duration.............: avg=504.74ms min=202.52µs med=308.25ms max=1m0s     p(90)=659.12ms p(95)=800.82ms
     iterations.....................: 1002740 1643.832108/s
     vus............................: 6       min=6         max=1998 
     vus_max........................: 2000    min=2000      max=2000 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/69ad7e42-14de-4a68-9aba-1b29294a5800/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e2d787fd-36b5-4de1-f194-a9acb1ec5300/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a74bedc7-da26-481f-6a26-4bb0cedebf00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 318843     ✗ 0     
     data_received..................: 9.3 GB  15 MB/s
     data_sent......................: 126 MB  206 kB/s
     http_req_blocked...............: avg=37.79ms  min=1.51µs  med=3.64µs  max=22.93s p(90)=6.01µs   p(95)=9.93µs  
     http_req_connecting............: avg=36.43ms  min=0s      med=0s      max=22.93s p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=2.58s    min=9.35ms  med=2.14s   max=23.13s p(90)=5.17s    p(95)=6.24s   
       { expected_response:true }...: avg=2.58s    min=9.35ms  med=2.14s   max=23.13s p(90)=5.17s    p(95)=6.24s   
     http_req_failed................: 0.00%   ✓ 0          ✗ 106281
     http_req_receiving.............: avg=579.13ms min=23.41µs med=80.32µs max=19.15s p(90)=1.7s     p(95)=3.6s    
     http_req_sending...............: avg=70.95ms  min=7.61µs  med=16.3µs  max=21.6s  p(90)=129.72µs p(95)=168.18ms
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s     p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=1.93s    min=8.97ms  med=1.54s   max=11.39s p(90)=4.26s    p(95)=4.89s   
     http_reqs......................: 106281  173.840252/s
     iteration_duration.............: avg=5.78s    min=25.88ms med=4.59s   max=53.15s p(90)=12.46s   p(95)=15.27s  
     iterations.....................: 106281  173.840252/s
     vus............................: 496     min=51       max=1997
     vus_max........................: 2000    min=2000     max=2000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/916dcd4b-cc32-46d5-95d6-9af0feb3b400/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b5b0f33c-f2f9-4c12-b92c-4e71412bdf00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/47a2261a-5c2e-4916-b137-2e41c847b000/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 302655     ✗ 0     
     data_received..................: 8.9 GB  15 MB/s
     data_sent......................: 120 MB  196 kB/s
     http_req_blocked...............: avg=37.58ms  min=1.68µs  med=3.78µs  max=19.55s p(90)=5.97µs   p(95)=10.9µs  
     http_req_connecting............: avg=35.06ms  min=0s      med=0s      max=14.65s p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=2.65s    min=7.7ms   med=2.13s   max=27.75s p(90)=5.39s    p(95)=6.81s   
       { expected_response:true }...: avg=2.65s    min=7.7ms   med=2.13s   max=27.75s p(90)=5.39s    p(95)=6.81s   
     http_req_failed................: 0.00%   ✓ 0          ✗ 100885
     http_req_receiving.............: avg=595.27ms min=23.38µs med=80.94µs max=23.15s p(90)=1.79s    p(95)=3.67s   
     http_req_sending...............: avg=90.21ms  min=7.35µs  med=16.53µs max=15.09s p(90)=139.68µs p(95)=128.15ms
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s     p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=1.96s    min=7.61ms  med=1.58s   max=11.17s p(90)=4.21s    p(95)=5.09s   
     http_reqs......................: 100885  165.381437/s
     iteration_duration.............: avg=5.99s    min=20.21ms med=4.72s   max=46.63s p(90)=12.89s   p(95)=16.34s  
     iterations.....................: 100885  165.381437/s
     vus............................: 7       min=7        max=1965
     vus_max........................: 2000    min=2000     max=2000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8cb30ca0-661a-4dd9-afb3-27d0bff24400/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7c6feac1-d7b5-4de3-2f8d-1450064fc000/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3cb035f1-bd8b-4850-2a33-0317f68b7000/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 210792     ✗ 0     
     data_received..................: 6.2 GB  10 MB/s
     data_sent......................: 83 MB   135 kB/s
     http_req_blocked...............: avg=2.76ms   min=1.39µs  med=3.55µs  max=1.61s  p(90)=6.66µs  p(95)=11.56µs 
     http_req_connecting............: avg=2.65ms   min=0s      med=0s      max=1.61s  p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=8.85s    min=81.56ms med=8.28s   max=42.78s p(90)=15.98s  p(95)=16.88s  
       { expected_response:true }...: avg=8.85s    min=81.56ms med=8.28s   max=42.78s p(90)=15.98s  p(95)=16.88s  
     http_req_failed................: 0.00%   ✓ 0          ✗ 70264 
     http_req_receiving.............: avg=121.87ms min=29.65µs med=83.78µs max=13.2s  p(90)=39.14ms p(95)=663.53ms
     http_req_sending...............: avg=7.1ms    min=7.65µs  med=14.97µs max=2.48s  p(90)=60.97µs p(95)=1.23ms  
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s     p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=8.72s    min=72.41ms med=8.19s   max=42.44s p(90)=15.88s  p(95)=16.72s  
     http_reqs......................: 70264   114.041185/s
     iteration_duration.............: avg=9.02s    min=97.45ms med=8.4s    max=43.58s p(90)=16.26s  p(95)=17.22s  
     iterations.....................: 70264   114.041185/s
     vus............................: 129     min=51       max=2000
     vus_max........................: 2000    min=2000     max=2000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2a2193cc-b530-4ea5-5ab4-d2a2499cc400/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/53e053c8-f2f0-4d4d-0711-d6d6d57f0d00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6853203d-69e4-41ab-3d2b-1190bd116f00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 195531     ✗ 0     
     data_received..................: 5.7 GB  9.3 MB/s
     data_sent......................: 77 MB   125 kB/s
     http_req_blocked...............: avg=4.01ms  min=1.57µs  med=3.86µs  max=1.96s  p(90)=6.39µs  p(95)=11.6µs  
     http_req_connecting............: avg=3.88ms  min=0s      med=0s      max=1.96s  p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=9.54s   min=27.47ms med=9.56s   max=25.54s p(90)=16.7s   p(95)=17.75s  
       { expected_response:true }...: avg=9.54s   min=27.47ms med=9.56s   max=25.54s p(90)=16.7s   p(95)=17.75s  
     http_req_failed................: 0.00%   ✓ 0          ✗ 65177 
     http_req_receiving.............: avg=34.65ms min=31.54µs med=70.36µs max=3.29s  p(90)=2.75ms  p(95)=108.03ms
     http_req_sending...............: avg=6.21ms  min=7.8µs   med=16.61µs max=2.1s   p(90)=50.01µs p(95)=4.2ms   
     http_req_tls_handshaking.......: avg=0s      min=0s      med=0s      max=0s     p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=9.5s    min=27.37ms med=9.55s   max=24.41s p(90)=16.63s  p(95)=17.66s  
     http_reqs......................: 65177   105.675268/s
     iteration_duration.............: avg=9.75s   min=44.25ms med=9.69s   max=25.56s p(90)=16.98s  p(95)=18.1s   
     iterations.....................: 65177   105.675268/s
     vus............................: 192     min=51       max=1998
     vus_max........................: 2000    min=2000     max=2000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2d284441-2229-4671-8cef-e4fcdd337300/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/257ea966-7a8b-425f-ee66-f3c36a033b00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f647a007-12ad-4bdf-216d-3217cc258700/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 201096     ✗ 0     
     data_received..................: 5.9 GB  9.5 MB/s
     data_sent......................: 80 MB   128 kB/s
     http_req_blocked...............: avg=3.38ms   min=1.34µs   med=3.4µs   max=1.72s  p(90)=6.19µs   p(95)=11.27µs 
     http_req_connecting............: avg=3.17ms   min=0s       med=0s      max=1.58s  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=9.34s    min=179.97ms med=8.58s   max=45.47s p(90)=17.19s   p(95)=18.47s  
       { expected_response:true }...: avg=9.34s    min=179.97ms med=8.58s   max=45.47s p(90)=17.19s   p(95)=18.47s  
     http_req_failed................: 0.00%   ✓ 0          ✗ 67032 
     http_req_receiving.............: avg=160.91ms min=28.17µs  med=78.76µs max=13.62s p(90)=170.81ms p(95)=732.22ms
     http_req_sending...............: avg=6.49ms   min=8.02µs   med=14.65µs max=3.94s  p(90)=57.95µs  p(95)=203.13µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s     p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=9.17s    min=179.56ms med=8.5s    max=45.47s p(90)=17.01s   p(95)=18.09s  
     http_reqs......................: 67032   108.150277/s
     iteration_duration.............: avg=9.53s    min=202.62ms med=8.77s   max=46.42s p(90)=17.5s    p(95)=19.16s  
     iterations.....................: 67032   108.150277/s
     vus............................: 216     min=50       max=2000
     vus_max........................: 2000    min=2000     max=2000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/219a9134-af68-4d84-efcd-877d297caf00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ba6f39c8-d145-47e2-e7a8-89c79b26bb00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/086d0604-ce96-4544-fddb-783320fb5c00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 188121     ✗ 0     
     data_received..................: 5.5 GB  8.9 MB/s
     data_sent......................: 74 MB   121 kB/s
     http_req_blocked...............: avg=3.53ms  min=1.41µs  med=3.77µs  max=1.53s  p(90)=6.21µs  p(95)=11.5µs
     http_req_connecting............: avg=3.41ms  min=0s      med=0s      max=1.5s   p(90)=0s      p(95)=0s    
     http_req_duration..............: avg=9.95s   min=56.53ms med=9.9s    max=24.96s p(90)=17.64s  p(95)=18.74s
       { expected_response:true }...: avg=9.95s   min=56.53ms med=9.9s    max=24.96s p(90)=17.64s  p(95)=18.74s
     http_req_failed................: 0.00%   ✓ 0          ✗ 62707 
     http_req_receiving.............: avg=28.26ms min=30.63µs med=69.24µs max=2.71s  p(90)=2.46ms  p(95)=72.8ms
     http_req_sending...............: avg=5.85ms  min=8.87µs  med=16.2µs  max=2.01s  p(90)=48.54µs p(95)=4.42ms
     http_req_tls_handshaking.......: avg=0s      min=0s      med=0s      max=0s     p(90)=0s      p(95)=0s    
     http_req_waiting...............: avg=9.92s   min=47.03ms med=9.88s   max=24.96s p(90)=17.61s  p(95)=18.69s
     http_reqs......................: 62707   101.620436/s
     iteration_duration.............: avg=10.15s  min=81.3ms  med=10.04s  max=25.43s p(90)=17.89s  p(95)=19.03s
     iterations.....................: 62707   101.620436/s
     vus............................: 251     min=51       max=1999
     vus_max........................: 2000    min=2000     max=2000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4a001680-21b0-4355-fa47-95738d73d900/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/05ed5dfe-9b03-4f51-0c98-f177099bcd00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e377630c-9875-4c53-cd44-42cb1da08600/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  84% — ✓ 40759 / ✗ 7443
     ✗ no graphql errors
      ↳  84% — ✓ 40759 / ✗ 7443
     ✓ valid response structure

     checks.........................: 89.14% ✓ 122277    ✗ 14886 
     data_received..................: 3.6 GB 5.6 MB/s
     data_sent......................: 57 MB  91 kB/s
     http_req_blocked...............: avg=914.94µs min=1.39µs  med=3.41µs  max=411.16ms p(90)=211.8µs  p(95)=870.92µs
     http_req_connecting............: avg=878.5µs  min=0s      med=0s      max=410.95ms p(90)=162.5µs  p(95)=761.82µs
     http_req_duration..............: avg=13.3s    min=82.98ms med=4.28s   max=1m1s     p(90)=59.99s   p(95)=1m0s    
       { expected_response:true }...: avg=4.77s    min=82.98ms med=4.09s   max=59.42s   p(90)=6.04s    p(95)=6.65s   
     http_req_failed................: 15.44% ✓ 7443      ✗ 40759 
     http_req_receiving.............: avg=375.22µs min=0s      med=81.61µs max=233.29ms p(90)=138.23µs p(95)=291.79µs
     http_req_sending...............: avg=344.17µs min=8.1µs   med=16.41µs max=217.61ms p(90)=47.32µs  p(95)=94.37µs 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=13.3s    min=82.84ms med=4.28s   max=1m1s     p(90)=59.99s   p(95)=1m0s    
     http_reqs......................: 48202  76.002327/s
     iteration_duration.............: avg=13.31s   min=89.56ms med=4.3s    max=1m1s     p(90)=1m0s     p(95)=1m0s    
     iterations.....................: 48202  76.002327/s
     vus............................: 31     min=31      max=2000
     vus_max........................: 2000   min=2000    max=2000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5f0a1d2d-2119-4e50-2189-fa9690ec1500/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0dd59253-dec5-4c04-5b13-8725f76e0800/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2370db67-3a9b-43f9-e562-107456846000/public" alt="HTTP Overview" />


  </details>