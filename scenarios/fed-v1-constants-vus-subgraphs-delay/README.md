## Overview for: `scenarios/fed-v1-constants-vus-subgraphs-delay`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. All subgraphs have an intentional delay on replying, and this creates additional pressure on the gateway's memory. We are running a heavy load of concurrent VUs to measure response time and other stats, during stress. It measure things like memory usage, CPU usage, response times.


This scenario was running 400 VUs over 200s


### Comparison


| Gateway         | RPS ⬇️ |        Requests         |          Duration          |
| :-------------- | :----: | :---------------------: | :------------------------: |
| apollo-router   |  108   |  21904 total, 0 failed  |  avg: 3679ms, p95: 5817ms  |
| mesh            |   98   |  19886 total, 0 failed  |  avg: 4054ms, p95: 4755ms  |
| wundergraph     |   92   |  18800 total, 0 failed  |  avg: 4330ms, p95: 4636ms  |
| mesh-supergraph |   89   |  18080 total, 0 failed  |  avg: 4458ms, p95: 5525ms  |
| apollo-server   |   40   | 8493 total, 234 failed  | avg: 9606ms, p95: 11237ms  |
| mercurius       |   5    | 1200 total, 1200 failed | avg: 59987ms, p95: 60009ms |



<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 21897 / ✗ 7
     ✗ valid response structure
      ↳  99% — ✓ 21897 / ✗ 7

     checks.........................: 99.97% ✓ 65698      ✗ 14   
     data_received..................: 109 MB 538 kB/s
     data_sent......................: 26 MB  128 kB/s
     http_req_blocked...............: avg=1.05ms   min=1µs    med=2.2µs  max=190.89ms p(90)=3.3µs  p(95)=4µs    
     http_req_connecting............: avg=1.04ms   min=0s     med=0s     max=190.85ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=3.67s    min=1.92s  med=3.42s  max=8.75s    p(90)=4.81s  p(95)=5.81s  
       { expected_response:true }...: avg=3.67s    min=1.92s  med=3.42s  max=8.75s    p(90)=4.81s  p(95)=5.81s  
   ✓ http_req_failed................: 0.00%  ✓ 0          ✗ 21904
     http_req_receiving.............: avg=58.18µs  min=17.2µs med=44.1µs max=43.7ms   p(90)=68.9µs p(95)=76.59µs
     http_req_sending...............: avg=138.32µs min=6.1µs  med=13.1µs max=41.82ms  p(90)=26µs   p(95)=32.5µs 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=3.67s    min=1.92s  med=3.42s  max=8.75s    p(90)=4.81s  p(95)=5.81s  
     http_reqs......................: 21904  108.040206/s
     iteration_duration.............: avg=3.68s    min=1.92s  med=3.42s  max=8.75s    p(90)=4.81s  p(95)=5.82s  
     iterations.....................: 21904  108.040206/s
     vus............................: 138    min=138      max=400
     vus_max........................: 400    min=400      max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/29f47121-95b0-40e3-0941-3c5fb6743600/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8131dbe5-15df-4faa-40da-2335c1592b00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 19856 / ✗ 30
     ✗ valid response structure
      ↳  99% — ✓ 19856 / ✗ 30

     checks.........................: 99.89% ✓ 59598     ✗ 60   
     data_received..................: 100 MB 492 kB/s
     data_sent......................: 24 MB  117 kB/s
     http_req_blocked...............: avg=314.06µs min=1µs    med=2.1µs  max=75.41ms p(90)=3.1µs  p(95)=4µs    
     http_req_connecting............: avg=299.81µs min=0s     med=0s     max=52.15ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=4.05s    min=2.46s  med=3.94s  max=8.6s    p(90)=4.36s  p(95)=4.75s  
       { expected_response:true }...: avg=4.05s    min=2.46s  med=3.94s  max=8.6s    p(90)=4.36s  p(95)=4.75s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 19886
     http_req_receiving.............: avg=68.93µs  min=16.4µs med=40.3µs max=86.1ms  p(90)=63.4µs p(95)=71.59µs
     http_req_sending...............: avg=63.33µs  min=7µs    med=12.6µs max=33.67ms p(90)=25.6µs p(95)=29.4µs 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=4.05s    min=2.46s  med=3.94s  max=8.6s    p(90)=4.36s  p(95)=4.75s  
     http_reqs......................: 19886  98.246016/s
     iteration_duration.............: avg=4.05s    min=2.46s  med=3.94s  max=8.6s    p(90)=4.36s  p(95)=4.75s  
     iterations.....................: 19886  98.246016/s
     vus............................: 211    min=211     max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/dc45c09d-6238-4af6-8643-8d3ecb74b900/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b4ad65ee-0e23-477b-003a-e0a142eaf500/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 56400     ✗ 0    
     data_received..................: 94 MB   459 kB/s
     data_sent......................: 22 MB   109 kB/s
     http_req_blocked...............: avg=2.35ms min=1.5µs  med=2.9µs   max=216.33ms p(90)=4.7µs    p(95)=9µs     
     http_req_connecting............: avg=2.31ms min=0s     med=0s      max=216.27ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=4.32s  min=3.76s  med=4.32s   max=5.25s    p(90)=4.56s    p(95)=4.63s   
       { expected_response:true }...: avg=4.32s  min=3.76s  med=4.32s   max=5.25s    p(90)=4.56s    p(95)=4.63s   
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 18800
     http_req_receiving.............: avg=1.53ms min=19.9µs med=46.55µs max=320.17ms p(90)=347.91µs p(95)=584.85µs
     http_req_sending...............: avg=1.61ms min=10.8µs med=16.6µs  max=296.96ms p(90)=114.5µs  p(95)=1.23ms  
     http_req_tls_handshaking.......: avg=0s     min=0s     med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=4.32s  min=3.76s  med=4.31s   max=5.24s    p(90)=4.55s    p(95)=4.63s   
     http_reqs......................: 18800   92.174763/s
     iteration_duration.............: avg=4.33s  min=3.77s  med=4.32s   max=5.44s    p(90)=4.56s    p(95)=4.64s   
     iterations.....................: 18800   92.174763/s
     vus............................: 397     min=397     max=400
     vus_max........................: 400     min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c94ec04f-94e6-499f-2fa3-10dc2005e500/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ceba72fc-66b7-4ef5-31b8-8efb7155fb00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 18080

     checks.........................: 66.66% ✓ 36160     ✗ 18080
     data_received..................: 91 MB  449 kB/s
     data_sent......................: 22 MB  106 kB/s
     http_req_blocked...............: avg=2.19ms  min=1.4µs  med=2.3µs  max=217.65ms p(90)=3.4µs   p(95)=4.8µs 
     http_req_connecting............: avg=2.15ms  min=0s     med=0s     max=217.61ms p(90)=0s      p(95)=0s    
     http_req_duration..............: avg=4.45s   min=2.3s   med=4.33s  max=10.12s   p(90)=4.91s   p(95)=5.52s 
       { expected_response:true }...: avg=4.45s   min=2.3s   med=4.33s  max=10.12s   p(90)=4.91s   p(95)=5.52s 
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 18080
     http_req_receiving.............: avg=61.85µs min=22.9µs med=50.4µs max=14.04ms  p(90)=75.9µs  p(95)=83.8µs
     http_req_sending...............: avg=325.5µs min=7.7µs  med=13.9µs max=87.67ms  p(90)=29.01µs p(95)=34.3µs
     http_req_tls_handshaking.......: avg=0s      min=0s     med=0s     max=0s       p(90)=0s      p(95)=0s    
     http_req_waiting...............: avg=4.45s   min=2.3s   med=4.33s  max=10.12s   p(90)=4.91s   p(95)=5.52s 
     http_reqs......................: 18080  89.158087/s
     iteration_duration.............: avg=4.46s   min=2.3s   med=4.33s  max=10.19s   p(90)=4.91s   p(95)=5.52s 
     iterations.....................: 18080  89.158087/s
     vus............................: 9      min=9       max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/95291f51-a732-4f80-8391-5c0fe04ab300/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4bcb7ee5-e401-4c6f-a856-b56b59583400/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  97% — ✓ 8259 / ✗ 234
     ✗ no graphql errors
      ↳  76% — ✓ 6480 / ✗ 2013
     ✗ valid response structure
      ↳  78% — ✓ 6480 / ✗ 1779

     checks.........................: 84.05% ✓ 21219     ✗ 4026 
     data_received..................: 40 MB  193 kB/s
     data_sent......................: 10 MB  48 kB/s
     http_req_blocked...............: avg=2.97ms   min=1.3µs  med=2.8µs   max=109.53ms p(90)=18.89µs  p(95)=20.88ms
     http_req_connecting............: avg=2.92ms   min=0s     med=0s      max=109.49ms p(90)=0s       p(95)=16.5ms 
     http_req_duration..............: avg=9.6s     min=1.59s  med=7.79s   max=1m0s     p(90)=9.94s    p(95)=11.23s 
       { expected_response:true }...: avg=8.17s    min=1.59s  med=7.74s   max=59.16s   p(90)=9.74s    p(95)=10.14s 
   ✓ http_req_failed................: 2.75%  ✓ 234       ✗ 8259 
     http_req_receiving.............: avg=77.38µs  min=0s     med=66.69µs max=8.99ms   p(90)=108.07µs p(95)=128.5µs
     http_req_sending...............: avg=992.34µs min=11.1µs med=16.89µs max=52.5ms   p(90)=57µs     p(95)=1.3ms  
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s       p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=9.6s     min=1.59s  med=7.79s   max=1m0s     p(90)=9.94s    p(95)=11.23s 
     http_reqs......................: 8493   40.714866/s
     iteration_duration.............: avg=9.61s    min=1.59s  med=7.8s    max=1m0s     p(90)=9.97s    p(95)=11.23s 
     iterations.....................: 8493   40.714866/s
     vus............................: 3      min=3       max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1c9a6c4f-c036-4f77-2560-8bad04cadb00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3c5ff5e6-14be-4578-95eb-433b53f19700/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  0% — ✓ 0 / ✗ 1200
     ✗ no graphql errors
      ↳  0% — ✓ 0 / ✗ 1200

     checks.....................: 0.00%   ✓ 0        ✗ 2400 
     data_received..............: 0 B     0 B/s
     data_sent..................: 1.9 MB  8.3 kB/s
     http_req_blocked...........: avg=17.43ms min=89.7µs med=6.82ms   max=153.73ms p(90)=53.16ms p(95)=65.58ms
     http_req_connecting........: avg=16.93ms min=47.4µs med=6.38ms   max=153.7ms  p(90)=52.31ms p(95)=64.91ms
     http_req_duration..........: avg=59.98s  min=59.84s med=59.99s   max=1m0s     p(90)=1m0s    p(95)=1m0s   
   ✗ http_req_failed............: 100.00% ✓ 1200     ✗ 0    
     http_req_receiving.........: avg=0s      min=0s     med=0s       max=0s       p(90)=0s      p(95)=0s     
     http_req_sending...........: avg=2.89ms  min=15.5µs med=462.65µs max=87.14ms  p(90)=8.78ms  p(95)=17.68ms
     http_req_tls_handshaking...: avg=0s      min=0s     med=0s       max=0s       p(90)=0s      p(95)=0s     
     http_req_waiting...........: avg=59.98s  min=59.8s  med=59.99s   max=1m0s     p(90)=1m0s    p(95)=1m0s   
     http_reqs..................: 1200    5.216779/s
     iteration_duration.........: avg=1m0s    min=1m0s   med=1m0s     max=1m0s     p(90)=1m0s    p(95)=1m0s   
     iterations.................: 1200    5.216779/s
     vus........................: 400     min=400    max=400
     vus_max....................: 400     min=400    max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ed855a49-a250-498c-6227-17a9556c2f00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/db53c76b-3322-4e96-cd17-4932bee85300/public" alt="HTTP Overview" />


  </details>