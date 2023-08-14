## Overview for: `scenarios/fed-v1-constants-vus-subgraphs-delay`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. All subgraphs have an intentional delay on replying, and this creates additional pressure on the gateway's memory. We are running a heavy load of concurrent VUs to measure response time and other stats, during stress. It measure things like memory usage, CPU usage, response times.


This scenario was running 400 VUs over 200s


### Comparison


| Gateway              | RPS ⬇️ |       Requests        |          Duration          |
| :------------------- | :----: | :-------------------: | :------------------------: |
| wundergraph          |  238   | 48224 total, 0 failed |  avg: 1662ms, p95: 1989ms  |
| mesh                 |  106   | 21544 total, 0 failed |  avg: 3757ms, p95: 4540ms  |
| mesh-supergraph      |   94   | 19200 total, 0 failed |  avg: 4207ms, p95: 5271ms  |
| apollo-router        |   69   | 14143 total, 0 failed |  avg: 5742ms, p95: 9043ms  |
| apollo-server        |   56   | 11471 total, 0 failed | avg: 7058ms, p95: 11366ms  |
| apollo-server-node16 |   38   | 7861 total, 0 failed  | avg: 10292ms, p95: 17619ms |
| mercurius            |   6    | 1596 total, 0 failed  | avg: 53969ms, p95: 57396ms |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 144672     ✗ 0    
     data_received..................: 240 MB  1.2 MB/s
     data_sent......................: 57 MB   283 kB/s
     http_req_blocked...............: avg=409.73µs min=1.2µs    med=2.6µs  max=107.78ms p(90)=3.8µs    p(95)=4.5µs   
     http_req_connecting............: avg=396.65µs min=0s       med=0s     max=105.91ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=1.66s    min=985.42ms med=1.65s  max=2.65s    p(90)=1.88s    p(95)=1.98s   
       { expected_response:true }...: avg=1.66s    min=985.42ms med=1.65s  max=2.65s    p(90)=1.88s    p(95)=1.98s   
   ✓ http_req_failed................: 0.00%   ✓ 0          ✗ 48224
     http_req_receiving.............: avg=904.14µs min=17µs     med=38.7µs max=474.55ms p(90)=288.72µs p(95)=516.81µs
     http_req_sending...............: avg=636.61µs min=7µs      med=14µs   max=344.89ms p(90)=32.7µs   p(95)=143.68µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=1.66s    min=985.2ms  med=1.65s  max=2.65s    p(90)=1.88s    p(95)=1.98s   
     http_reqs......................: 48224   238.786071/s
     iteration_duration.............: avg=1.66s    min=986.7ms  med=1.66s  max=2.7s     p(90)=1.89s    p(95)=1.99s   
     iterations.....................: 48224   238.786071/s
     vus............................: 32      min=32       max=400
     vus_max........................: 400     min=400      max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/68f367fd-4959-4d27-11a8-daccc5ec9f00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/359851dc-c5de-44b3-4ff7-bc2955af6100/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 21543 / ✗ 1
     ✗ valid response structure
      ↳  99% — ✓ 21543 / ✗ 1

     checks.........................: 99.99% ✓ 64630      ✗ 2    
     data_received..................: 108 MB 531 kB/s
     data_sent......................: 26 MB  126 kB/s
     http_req_blocked...............: avg=1.81ms   min=900ns  med=2.1µs  max=179.8ms  p(90)=3.1µs  p(95)=3.8µs 
     http_req_connecting............: avg=1.79ms   min=0s     med=0s     max=167.83ms p(90)=0s     p(95)=0s    
     http_req_duration..............: avg=3.75s    min=2.64s  med=3.67s  max=7.99s    p(90)=4.11s  p(95)=4.53s 
       { expected_response:true }...: avg=3.75s    min=2.64s  med=3.67s  max=7.99s    p(90)=4.11s  p(95)=4.53s 
   ✓ http_req_failed................: 0.00%  ✓ 0          ✗ 21544
     http_req_receiving.............: avg=56.83µs  min=15.5µs med=42.1µs max=39.96ms  p(90)=64.3µs p(95)=72.7µs
     http_req_sending...............: avg=344.65µs min=6.7µs  med=12.4µs max=136.08ms p(90)=26.1µs p(95)=30.4µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s     p(95)=0s    
     http_req_waiting...............: avg=3.75s    min=2.64s  med=3.67s  max=7.98s    p(90)=4.11s  p(95)=4.53s 
     http_reqs......................: 21544  106.134686/s
     iteration_duration.............: avg=3.75s    min=2.64s  med=3.68s  max=8.14s    p(90)=4.11s  p(95)=4.54s 
     iterations.....................: 21544  106.134686/s
     vus............................: 106    min=106      max=400
     vus_max........................: 400    min=400      max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/82cd5b93-bc85-4c29-3ebe-43500d272a00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/905a4bde-88aa-4119-3c5f-f23e280b1000/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 19197 / ✗ 3
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 19200

     checks.........................: 66.66% ✓ 38397     ✗ 19203
     data_received..................: 97 MB  478 kB/s
     data_sent......................: 23 MB  113 kB/s
     http_req_blocked...............: avg=951.91µs min=1.3µs  med=2.4µs  max=116.18ms p(90)=4µs    p(95)=5.4µs 
     http_req_connecting............: avg=923.77µs min=0s     med=0s     max=74.68ms  p(90)=0s     p(95)=0s    
     http_req_duration..............: avg=4.2s     min=3.07s  med=4.1s   max=8.5s     p(90)=4.58s  p(95)=5.27s 
       { expected_response:true }...: avg=4.2s     min=3.07s  med=4.1s   max=8.5s     p(90)=4.58s  p(95)=5.27s 
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 19200
     http_req_receiving.............: avg=75.41µs  min=22.8µs med=56.6µs max=23.73ms  p(90)=80.4µs p(95)=90.4µs
     http_req_sending...............: avg=120.64µs min=7.6µs  med=13.7µs max=115.04ms p(90)=26.4µs p(95)=34µs  
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s     p(95)=0s    
     http_req_waiting...............: avg=4.2s     min=3.07s  med=4.1s   max=8.5s     p(90)=4.58s  p(95)=5.27s 
     http_reqs......................: 19200  94.846842/s
     iteration_duration.............: avg=4.2s     min=3.07s  med=4.1s   max=8.56s    p(90)=4.58s  p(95)=5.27s 
     iterations.....................: 19200  94.846842/s
     vus............................: 328    min=328     max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a8988f36-f07b-456d-b476-05de424e9800/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/df01d393-b42d-4dd8-551e-f041478cf600/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 14083 / ✗ 60
     ✗ valid response structure
      ↳  99% — ✓ 14083 / ✗ 60

     checks.........................: 99.71% ✓ 42309     ✗ 120  
     data_received..................: 70 MB  345 kB/s
     data_sent......................: 17 MB  82 kB/s
     http_req_blocked...............: avg=2.98ms   min=1.4µs  med=3µs    max=217.41ms p(90)=5µs     p(95)=22.3µs  
     http_req_connecting............: avg=2.93ms   min=0s     med=0s     max=215.5ms  p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=5.74s    min=2.53s  med=5.36s  max=13.87s   p(90)=7.71s   p(95)=9.04s   
       { expected_response:true }...: avg=5.74s    min=2.53s  med=5.36s  max=13.87s   p(90)=7.71s   p(95)=9.04s   
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 14143
     http_req_receiving.............: avg=182.5µs  min=26.4µs med=65µs   max=70ms     p(90)=114.5µs p(95)=151.9µs 
     http_req_sending...............: avg=715.25µs min=9.4µs  med=17.8µs max=135.26ms p(90)=49.4µs  p(95)=127.77µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=5.74s    min=2.53s  med=5.36s  max=13.87s   p(90)=7.71s   p(95)=9.04s   
     http_reqs......................: 14143  69.255794/s
     iteration_duration.............: avg=5.74s    min=2.53s  med=5.36s  max=13.87s   p(90)=7.71s   p(95)=9.05s   
     iterations.....................: 14143  69.255794/s
     vus............................: 94     min=94      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4a0e6f87-d8cb-44e9-3a1f-8ee65fde7200/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d3e25be7-6f1f-44b1-11e2-8a89d78c3a00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  81% — ✓ 9331 / ✗ 2140
     ✗ valid response structure
      ↳  81% — ✓ 9331 / ✗ 2140

     checks.........................: 87.56% ✓ 30133     ✗ 4280 
     data_received..................: 56 MB  272 kB/s
     data_sent......................: 14 MB  67 kB/s
     http_req_blocked...............: avg=3.62ms  min=1.2µs  med=2.6µs   max=179.09ms p(90)=4.5µs   p(95)=16µs    
     http_req_connecting............: avg=3.51ms  min=0s     med=0s      max=158.42ms p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=7.05s   min=1.1s   med=6.69s   max=14.67s   p(90)=10.3s   p(95)=11.36s  
       { expected_response:true }...: avg=7.05s   min=1.1s   med=6.69s   max=14.67s   p(90)=10.3s   p(95)=11.36s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 11471
     http_req_receiving.............: avg=74.79µs min=24.2µs med=60.19µs max=34.75ms  p(90)=94.79µs p(95)=107.1µs 
     http_req_sending...............: avg=691.7µs min=7.4µs  med=15µs    max=55.36ms  p(90)=31.6µs  p(95)=100.74µs
     http_req_tls_handshaking.......: avg=0s      min=0s     med=0s      max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=7.05s   min=1.1s   med=6.69s   max=14.67s   p(90)=10.3s   p(95)=11.34s  
     http_reqs......................: 11471  56.163694/s
     iteration_duration.............: avg=7.06s   min=1.1s   med=6.69s   max=14.67s   p(90)=10.31s  p(95)=11.44s  
     iterations.....................: 11471  56.163694/s
     vus............................: 128    min=128     max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/76fd13c5-0eab-4fa8-38bc-20194281c600/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ca6d2771-df5c-4cb0-98ec-a762821d7a00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server-node16`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  51% — ✓ 4049 / ✗ 3812
     ✗ valid response structure
      ↳  51% — ✓ 4049 / ✗ 3812

     checks.........................: 67.67% ✓ 15959     ✗ 7624 
     data_received..................: 34 MB  165 kB/s
     data_sent......................: 9.3 MB 46 kB/s
     http_req_blocked...............: avg=2.3ms    min=1.7µs    med=2.8µs  max=174.03ms p(90)=5.7µs   p(95)=2.26ms  
     http_req_connecting............: avg=2.26ms   min=0s       med=0s     max=122.25ms p(90)=0s      p(95)=1.94ms  
     http_req_duration..............: avg=10.29s   min=322.93ms med=11.01s max=23.59s   p(90)=16.51s  p(95)=17.61s  
       { expected_response:true }...: avg=10.29s   min=322.93ms med=11.01s max=23.59s   p(90)=16.51s  p(95)=17.61s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 7861 
     http_req_receiving.............: avg=84.67µs  min=28.2µs   med=68µs   max=23.72ms  p(90)=107.3µs p(95)=130.1µs 
     http_req_sending...............: avg=358.01µs min=10.7µs   med=17.9µs max=68.27ms  p(90)=48µs    p(95)=501.22µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=10.29s   min=322.83ms med=11.01s max=23.59s   p(90)=16.51s  p(95)=17.61s  
     http_reqs......................: 7861   38.547112/s
     iteration_duration.............: avg=10.29s   min=323.29ms med=11.01s max=23.59s   p(90)=16.54s  p(95)=17.61s  
     iterations.....................: 7861   38.547112/s
     vus............................: 48     min=48      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c9266a9e-696b-4807-7679-7769beade400/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/aef8d222-302d-46bd-f2e6-974d4d35ce00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 4788     ✗ 0    
     data_received..................: 8.0 MB  35 kB/s
     data_sent......................: 1.9 MB  8.3 kB/s
     http_req_blocked...............: avg=27.48ms  min=2.4µs  med=4.4µs    max=198.21ms p(90)=129.31ms p(95)=140.72ms
     http_req_connecting............: avg=27.21ms  min=0s     med=0s       max=198.11ms p(90)=128.92ms p(95)=140.41ms
     http_req_duration..............: avg=53.96s   min=43.27s med=57.01s   max=58.28s   p(90)=57.34s   p(95)=57.39s  
       { expected_response:true }...: avg=53.96s   min=43.27s med=57.01s   max=58.28s   p(90)=57.34s   p(95)=57.39s  
   ✓ http_req_failed................: 0.00%   ✓ 0        ✗ 1596 
     http_req_receiving.............: avg=165.09µs min=34µs   med=113.55µs max=14.04ms  p(90)=226.45µs p(95)=398.85µs
     http_req_sending...............: avg=4.47ms   min=14.1µs med=33.6µs   max=59.77ms  p(90)=15.29ms  p(95)=26.12ms 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=53.96s   min=43.27s med=57s      max=58.28s   p(90)=57.34s   p(95)=57.39s  
     http_reqs......................: 1596    6.938869/s
     iteration_duration.............: avg=53.99s   min=43.27s med=57.01s   max=58.43s   p(90)=57.35s   p(95)=57.39s  
     iterations.....................: 1596    6.938869/s
     vus............................: 12      min=12     max=400
     vus_max........................: 400     min=400    max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/86027037-03c8-4acc-3f22-007ed2550000/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/bb7319b4-877b-4f92-ce3d-283bf8440e00/public" alt="HTTP Overview" />


  </details>