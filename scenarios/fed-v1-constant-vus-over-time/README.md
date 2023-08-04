## Overview for: `scenarios/fed-v1-constant-vus-over-time`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. It's being executed with a constant amount of VUs over a fixed amount of time. It measure things like memory usage, CPU usage, average RPS. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was running 400 VUs over 200s


### Comparison


| Gateway                             | RPS ⬇️ |        Requests         |         Duration          |
| :---------------------------------- | :----: | :---------------------: | :-----------------------: |
| wundergraph                         |  616   | 123484 total, 0 failed  |  avg: 643ms, p95: 958ms   |
| stitching-federation-with-yoga-bun  |  137   |  27853 total, 0 failed  | avg: 2899ms, p95: 3850ms  |
| mesh-supergraph                     |  106   |  21569 total, 0 failed  | avg: 3731ms, p95: 4502ms  |
| mercurius                           |   91   |  18521 total, 0 failed  | avg: 4331ms, p95: 4961ms  |
| stitching-federation-with-yoga-deno |   83   |  16826 total, 0 failed  | avg: 4789ms, p95: 5600ms  |
| stitching-federation-with-yoga      |   82   | 16990 total, 423 failed | avg: 4784ms, p95: 4925ms  |
| stitching-federation-with-yoga-uws  |   72   |  14727 total, 0 failed  | avg: 5498ms, p95: 9381ms  |
| apollo-router                       |   71   |  14648 total, 0 failed  | avg: 5511ms, p95: 8036ms  |
| apollo-server                       |   67   | 14334 total, 612 failed | avg: 5719ms, p95: 29720ms |
| mesh                                |   66   |  13578 total, 0 failed  | avg: 5946ms, p95: 7618ms  |
| apollo-server-node16                |   55   |  11394 total, 0 failed  | avg: 7110ms, p95: 16771ms |
| apollo-gateway-with-yoga-uws        |   51   |  10486 total, 0 failed  | avg: 7683ms, p95: 17693ms |
| apollo-gateway-with-yoga            |   43   | 9437 total, 735 failed  | avg: 8863ms, p95: 59994ms |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 370452     ✗ 0     
     data_received..................: 615 MB  3.1 MB/s
     data_sent......................: 147 MB  732 kB/s
     http_req_blocked...............: avg=335.47µs min=1.2µs    med=2.6µs    max=223.53ms p(90)=4.1µs    p(95)=5.1µs   
     http_req_connecting............: avg=324.75µs min=0s       med=0s       max=223.37ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=642.98ms min=220.84ms med=615.34ms max=1.81s    p(90)=876.24ms p(95)=957.75ms
       { expected_response:true }...: avg=642.98ms min=220.84ms med=615.34ms max=1.81s    p(90)=876.24ms p(95)=957.75ms
   ✓ http_req_failed................: 0.00%   ✓ 0          ✗ 123484
     http_req_receiving.............: avg=6.13ms   min=16.5µs   med=40.5µs   max=794.02ms p(90)=310.58µs p(95)=17.23ms 
     http_req_sending...............: avg=1.11ms   min=7.9µs    med=13.8µs   max=597.8ms  p(90)=29.6µs   p(95)=129.9µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=635.72ms min=220.78ms med=611.32ms max=1.79s    p(90)=858.15ms p(95)=935.02ms
     http_reqs......................: 123484  616.543104/s
     iteration_duration.............: avg=648.12ms min=248.01ms med=620.47ms max=2.06s    p(90)=884.36ms p(95)=967.41ms
     iterations.....................: 123484  616.543104/s
     vus............................: 400     min=400      max=400 
     vus_max........................: 400     min=400      max=400 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a919b896-d75c-4c94-179f-2ad697a60300/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7aff2b60-1522-40ac-b3de-132d5d644200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 83559      ✗ 0    
     data_received..................: 139 MB  685 kB/s
     data_sent......................: 33 MB   163 kB/s
     http_req_blocked...............: avg=645.84µs min=800ns    med=1.7µs  max=99.44ms  p(90)=2.7µs  p(95)=3.5µs   
     http_req_connecting............: avg=635.7µs  min=0s       med=0s     max=99.42ms  p(90)=0s     p(95)=0s      
     http_req_duration..............: avg=2.89s    min=177.11ms med=2.75s  max=7.96s    p(90)=3.35s  p(95)=3.84s   
       { expected_response:true }...: avg=2.89s    min=177.11ms med=2.75s  max=7.96s    p(90)=3.35s  p(95)=3.84s   
   ✓ http_req_failed................: 0.00%   ✓ 0          ✗ 27853
     http_req_receiving.............: avg=117.26µs min=16.29µs  med=26.7µs max=77.69ms  p(90)=52.2µs p(95)=109.5µs 
     http_req_sending...............: avg=245.33µs min=5.6µs    med=9.79µs max=100.44ms p(90)=25.2µs p(95)=102.03µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=2.89s    min=176.93ms med=2.75s  max=7.96s    p(90)=3.35s  p(95)=3.84s   
     http_reqs......................: 27853   137.474606/s
     iteration_duration.............: avg=2.9s     min=179.04ms med=2.75s  max=7.96s    p(90)=3.35s  p(95)=3.86s   
     iterations.....................: 27853   137.474606/s
     vus............................: 340     min=340      max=400
     vus_max........................: 400     min=400      max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/25140f24-bb5c-4ece-06b9-49240bfb9100/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/23814109-6a30-49e7-07ac-e00db358b600/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 21569

     checks.........................: 66.66% ✓ 43138      ✗ 21569
     data_received..................: 109 MB 537 kB/s
     data_sent......................: 26 MB  127 kB/s
     http_req_blocked...............: avg=2.2ms   min=1.2µs   med=2.1µs  max=304.8ms  p(90)=3.2µs  p(95)=4µs   
     http_req_connecting............: avg=2.16ms  min=0s      med=0s     max=289.06ms p(90)=0s     p(95)=0s    
     http_req_duration..............: avg=3.73s   min=2.07s   med=3.63s  max=8.82s    p(90)=4.24s  p(95)=4.5s  
       { expected_response:true }...: avg=3.73s   min=2.07s   med=3.63s  max=8.82s    p(90)=4.24s  p(95)=4.5s  
   ✓ http_req_failed................: 0.00%  ✓ 0          ✗ 21569
     http_req_receiving.............: avg=54.33µs min=19.09µs med=46.6µs max=9.2ms    p(90)=69.8µs p(95)=78.3µs
     http_req_sending...............: avg=1.1ms   min=7µs     med=12.2µs max=273.1ms  p(90)=23.3µs p(95)=28.7µs
     http_req_tls_handshaking.......: avg=0s      min=0s      med=0s     max=0s       p(90)=0s     p(95)=0s    
     http_req_waiting...............: avg=3.72s   min=2.07s   med=3.63s  max=8.82s    p(90)=4.24s  p(95)=4.5s  
     http_reqs......................: 21569  106.742424/s
     iteration_duration.............: avg=3.73s   min=2.07s   med=3.63s  max=9.09s    p(90)=4.24s  p(95)=4.5s  
     iterations.....................: 21569  106.742424/s
     vus............................: 166    min=166      max=400
     vus_max........................: 400    min=400      max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/56d6ebce-e6cc-46db-17ae-2f7c3d0aea00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/beb7f0cf-db7e-460d-f14a-054061685800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 55563     ✗ 0    
     data_received..................: 93 MB   463 kB/s
     data_sent......................: 22 MB   109 kB/s
     http_req_blocked...............: avg=1.49ms   min=900ns  med=2.29µs max=138.25ms p(90)=3.2µs  p(95)=6.9µs 
     http_req_connecting............: avg=1.47ms   min=0s     med=0s     max=138.13ms p(90)=0s     p(95)=0s    
     http_req_duration..............: avg=4.33s    min=1.34s  med=4.26s  max=8.49s    p(90)=4.62s  p(95)=4.96s 
       { expected_response:true }...: avg=4.33s    min=1.34s  med=4.26s  max=8.49s    p(90)=4.62s  p(95)=4.96s 
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 18521
     http_req_receiving.............: avg=51.03µs  min=17.2µs med=45µs   max=7.82ms   p(90)=68.5µs p(95)=75.2µs
     http_req_sending...............: avg=164.34µs min=5.8µs  med=13.4µs max=28.33ms  p(90)=27.7µs p(95)=34.2µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s     p(95)=0s    
     http_req_waiting...............: avg=4.33s    min=1.34s  med=4.26s  max=8.49s    p(90)=4.62s  p(95)=4.96s 
     http_reqs......................: 18521   91.993558/s
     iteration_duration.............: avg=4.33s    min=1.34s  med=4.26s  max=8.61s    p(90)=4.62s  p(95)=4.96s 
     iterations.....................: 18521   91.993558/s
     vus............................: 183     min=183     max=400
     vus_max........................: 400     min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5109742c-be4e-4712-aab4-a2350a11ed00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ce85af0d-edb0-4b8c-a017-3c773b4a2e00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-deno`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 16771 / ✗ 55
     ✗ valid response structure
      ↳  99% — ✓ 16771 / ✗ 55

     checks.........................: 99.78% ✓ 50368     ✗ 110  
     data_received..................: 85 MB  421 kB/s
     data_sent......................: 20 MB  99 kB/s
     http_req_blocked...............: avg=1.01ms   min=1µs    med=2.5µs  max=81.73ms p(90)=4.5µs   p(95)=11.4µs  
     http_req_connecting............: avg=999.09µs min=0s     med=0s     max=76.09ms p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=4.78s    min=2.48s  med=4.72s  max=8.76s   p(90)=5.21s   p(95)=5.6s    
       { expected_response:true }...: avg=4.78s    min=2.48s  med=4.72s  max=8.76s   p(90)=5.21s   p(95)=5.6s    
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 16826
     http_req_receiving.............: avg=132.79µs min=17.8µs med=37.4µs max=64.3ms  p(90)=94.1µs  p(95)=134.2µs 
     http_req_sending...............: avg=258.99µs min=6.8µs  med=13.8µs max=23.63ms p(90)=38.45µs p(95)=155.97µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=4.78s    min=2.48s  med=4.72s  max=8.76s   p(90)=5.21s   p(95)=5.59s   
     http_reqs......................: 16826  83.103371/s
     iteration_duration.............: avg=4.79s    min=2.48s  med=4.72s  max=8.76s   p(90)=5.21s   p(95)=5.6s    
     iterations.....................: 16826  83.103371/s
     vus............................: 213    min=213     max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4f9fbf85-7592-4279-6516-b303178c1b00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/cbc52538-c561-4320-9c0d-986deabbdc00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  97% — ✓ 16567 / ✗ 423
     ✗ no graphql errors
      ↳  96% — ✓ 16452 / ✗ 538
     ✗ valid response structure
      ↳  99% — ✓ 16452 / ✗ 115

     checks.........................: 97.87% ✓ 49471     ✗ 1076 
     data_received..................: 85 MB  413 kB/s
     data_sent......................: 20 MB  98 kB/s
     http_req_blocked...............: avg=2.36ms   min=1.1µs med=2.29µs max=165.92ms p(90)=4.4µs  p(95)=60.8µs  
     http_req_connecting............: avg=2.32ms   min=0s    med=0s     max=165.88ms p(90)=0s     p(95)=0s      
     http_req_duration..............: avg=4.78s    min=1.73s med=3.02s  max=1m0s     p(90)=3.56s  p(95)=4.92s   
       { expected_response:true }...: avg=3.37s    min=1.73s med=3.02s  max=58.2s    p(90)=3.4s   p(95)=4.07s   
   ✓ http_req_failed................: 2.48%  ✓ 423       ✗ 16567
     http_req_receiving.............: avg=58.93µs  min=0s    med=51µs   max=18.34ms  p(90)=67.9µs p(95)=80.5µs  
     http_req_sending...............: avg=842.42µs min=8.1µs med=12.9µs max=105.79ms p(90)=28.4µs p(95)=103.67µs
     http_req_tls_handshaking.......: avg=0s       min=0s    med=0s     max=0s       p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=4.78s    min=1.73s med=3.02s  max=1m0s     p(90)=3.56s  p(95)=4.92s   
     http_reqs......................: 16990  82.122709/s
     iteration_duration.............: avg=4.78s    min=1.73s med=3.03s  max=1m0s     p(90)=3.58s  p(95)=4.92s   
     iterations.....................: 16990  82.122709/s
     vus............................: 9      min=9       max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/02b4a968-39e5-4267-57db-1ffa80d57a00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f15ea7e8-b636-4306-ab0e-5b3d3cc4f500/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-uws`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  93% — ✓ 13747 / ✗ 980
     ✗ valid response structure
      ↳  93% — ✓ 13747 / ✗ 980

     checks.........................: 95.56% ✓ 42221    ✗ 1960 
     data_received..................: 88 MB  432 kB/s
     data_sent......................: 18 MB  86 kB/s
     http_req_blocked...............: avg=1.08ms  min=1.2µs  med=2.29µs max=74.18ms p(90)=3.9µs   p(95)=14.7µs 
     http_req_connecting............: avg=1.06ms  min=0s     med=0s     max=74.13ms p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=5.49s   min=1.61s  med=4.71s  max=16.07s  p(90)=8.28s   p(95)=9.38s  
       { expected_response:true }...: avg=5.49s   min=1.61s  med=4.71s  max=16.07s  p(90)=8.28s   p(95)=9.38s  
   ✓ http_req_failed................: 0.00%  ✓ 0        ✗ 14727
     http_req_receiving.............: avg=64.94µs min=17.6µs med=51.8µs max=14.92ms p(90)=78.04µs p(95)=93.87µs
     http_req_sending...............: avg=198.6µs min=7.1µs  med=13.3µs max=44.46ms p(90)=28.2µs  p(95)=37.7µs 
     http_req_tls_handshaking.......: avg=0s      min=0s     med=0s     max=0s      p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=5.49s   min=1.61s  med=4.71s  max=16.07s  p(90)=8.28s   p(95)=9.38s  
     http_reqs......................: 14727  72.31172/s
     iteration_duration.............: avg=5.49s   min=1.61s  med=4.71s  max=16.07s  p(90)=8.28s   p(95)=9.38s  
     iterations.....................: 14727  72.31172/s
     vus............................: 151    min=151    max=400
     vus_max........................: 400    min=400    max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/100c2e97-c313-4e55-295a-6df7a1008c00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/aa20dd20-b468-4ce0-2c32-1fb27cb2d300/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 14541 / ✗ 107
     ✗ valid response structure
      ↳  99% — ✓ 14541 / ✗ 107

     checks.........................: 99.51% ✓ 43730     ✗ 214  
     data_received..................: 73 MB  358 kB/s
     data_sent......................: 17 MB  86 kB/s
     http_req_blocked...............: avg=2.01ms   min=1.5µs  med=3.1µs   max=128.35ms p(90)=5.3µs   p(95)=19.6µs  
     http_req_connecting............: avg=1.98ms   min=0s     med=0s      max=110.87ms p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=5.51s    min=1.95s  med=5.22s   max=12.59s   p(90)=7.01s   p(95)=8.03s   
       { expected_response:true }...: avg=5.51s    min=1.95s  med=5.22s   max=12.59s   p(90)=7.01s   p(95)=8.03s   
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 14648
     http_req_receiving.............: avg=470.7µs  min=26.6µs med=70.3µs  max=102.99ms p(90)=128.2µs p(95)=185.83µs
     http_req_sending...............: avg=410.24µs min=9.6µs  med=19.59µs max=164.37ms p(90)=51.43µs p(95)=192.02µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=5.5s     min=1.95s  med=5.22s   max=12.59s   p(90)=7.01s   p(95)=8.03s   
     http_reqs......................: 14648  71.999948/s
     iteration_duration.............: avg=5.51s    min=1.95s  med=5.23s   max=12.64s   p(90)=7.01s   p(95)=8.03s   
     iterations.....................: 14648  71.999948/s
     vus............................: 200    min=200     max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f826d7bc-1a2b-4cc7-c9bf-1362fa3b5800/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8a8c4a01-34d2-461c-7f9d-000b7d1b9900/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  95% — ✓ 13722 / ✗ 612
     ✗ no graphql errors
      ↳  94% — ✓ 13599 / ✗ 735
     ✗ valid response structure
      ↳  99% — ✓ 13599 / ✗ 123

     checks.........................: 96.53% ✓ 40920     ✗ 1470 
     data_received..................: 71 MB  332 kB/s
     data_sent......................: 17 MB  80 kB/s
     http_req_blocked...............: avg=1.68ms   min=1.1µs    med=2.29µs  max=104.49ms p(90)=5µs     p(95)=2.42ms  
     http_req_connecting............: avg=1.6ms    min=0s       med=0s      max=83.16ms  p(90)=0s      p(95)=1.98ms  
     http_req_duration..............: avg=5.71s    min=690ms    med=2.79s   max=1m0s     p(90)=3.28s   p(95)=29.72s  
       { expected_response:true }...: avg=3.29s    min=690ms    med=2.78s   max=59.27s   p(90)=3.13s   p(95)=3.39s   
   ✓ http_req_failed................: 4.26%  ✓ 612       ✗ 13722
     http_req_receiving.............: avg=57.13µs  min=0s       med=49.59µs max=18.89ms  p(90)=75.39µs p(95)=81.99µs 
     http_req_sending...............: avg=224.19µs min=7.3µs    med=13.59µs max=102.42ms p(90)=30.2µs  p(95)=235.41µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=5.71s    min=689.52ms med=2.79s   max=1m0s     p(90)=3.28s   p(95)=29.71s  
     http_reqs......................: 14334  67.389564/s
     iteration_duration.............: avg=5.72s    min=703.79ms med=2.8s    max=1m0s     p(90)=3.28s   p(95)=29.73s  
     iterations.....................: 14334  67.389564/s
     vus............................: 36     min=36      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/72fe91c6-457f-4012-bb36-138eee50e100/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b9787c7f-59ac-4e3d-b9f8-b34cea559400/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 13460 / ✗ 118
     ✗ valid response structure
      ↳  99% — ✓ 13460 / ✗ 118

     checks.........................: 99.42% ✓ 40498     ✗ 236  
     data_received..................: 69 MB  342 kB/s
     data_sent......................: 16 MB  79 kB/s
     http_req_blocked...............: avg=2.28ms   min=1.4µs  med=2.7µs  max=131.8ms p(90)=4.4µs   p(95)=20.29µs
     http_req_connecting............: avg=2.25ms   min=0s     med=0s     max=118.8ms p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=5.94s    min=2.74s  med=5.81s  max=11.95s  p(90)=6.88s   p(95)=7.61s  
       { expected_response:true }...: avg=5.94s    min=2.74s  med=5.81s  max=11.95s  p(90)=6.88s   p(95)=7.61s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 13578
     http_req_receiving.............: avg=85.16µs  min=23.4µs med=58.9µs max=53.44ms p(90)=101.2µs p(95)=126.2µs
     http_req_sending...............: avg=552.27µs min=9.3µs  med=15.4µs max=97.8ms  p(90)=40.8µs  p(95)=91.43µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=5.94s    min=2.74s  med=5.81s  max=11.94s  p(90)=6.88s   p(95)=7.61s  
     http_reqs......................: 13578  66.859009/s
     iteration_duration.............: avg=5.94s    min=2.74s  med=5.81s  max=12.07s  p(90)=6.88s   p(95)=7.61s  
     iterations.....................: 13578  66.859009/s
     vus............................: 103    min=103     max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3136f023-5166-4111-4780-9eacd55b3800/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e4c3c6c8-4a5d-43a7-096e-484de641a900/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server-node16`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  71% — ✓ 8182 / ✗ 3212
     ✗ valid response structure
      ↳  71% — ✓ 8182 / ✗ 3212

     checks.........................: 81.20% ✓ 27758     ✗ 6424 
     data_received..................: 54 MB  262 kB/s
     data_sent......................: 14 MB  66 kB/s
     http_req_blocked...............: avg=3.46ms   min=1.3µs    med=2.6µs  max=266.17ms p(90)=4.3µs  p(95)=15.9µs  
     http_req_connecting............: avg=3.41ms   min=0s       med=0s     max=200.55ms p(90)=0s     p(95)=0s      
     http_req_duration..............: avg=7.11s    min=138.61ms med=6.34s  max=21.88s   p(90)=13.87s p(95)=16.77s  
       { expected_response:true }...: avg=7.11s    min=138.61ms med=6.34s  max=21.88s   p(90)=13.87s p(95)=16.77s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 11394
     http_req_receiving.............: avg=74.61µs  min=23.8µs   med=57.4µs max=29.26ms  p(90)=82.3µs p(95)=92.63µs 
     http_req_sending...............: avg=815.01µs min=8.4µs    med=14.2µs max=131.43ms p(90)=29.7µs p(95)=114.17µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=7.1s     min=138.55ms med=6.34s  max=21.88s   p(90)=13.85s p(95)=16.77s  
     http_reqs......................: 11394  55.568757/s
     iteration_duration.............: avg=7.11s    min=139.21ms med=6.34s  max=21.88s   p(90)=13.91s p(95)=16.77s  
     iterations.....................: 11394  55.568757/s
     vus............................: 46     min=46      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d6680eba-c289-4c69-8eae-be79f5270b00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b5453ec9-4680-4f29-a209-577aec32a900/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga-uws`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  73% — ✓ 7712 / ✗ 2774
     ✗ valid response structure
      ↳  73% — ✓ 7712 / ✗ 2774

     checks.........................: 82.36% ✓ 25910     ✗ 5548 
     data_received..................: 48 MB  237 kB/s
     data_sent......................: 12 MB  62 kB/s
     http_req_blocked...............: avg=4.21ms   min=1.4µs    med=2.8µs  max=295.45ms p(90)=4.7µs  p(95)=19.2µs  
     http_req_connecting............: avg=4.14ms   min=0s       med=0s     max=293.63ms p(90)=0s     p(95)=0s      
     http_req_duration..............: avg=7.68s    min=698.65ms med=6.91s  max=23.42s   p(90)=14.35s p(95)=17.69s  
       { expected_response:true }...: avg=7.68s    min=698.65ms med=6.91s  max=23.42s   p(90)=14.35s p(95)=17.69s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 10486
     http_req_receiving.............: avg=114.75µs min=18.2µs   med=57µs   max=41.06ms  p(90)=90.6µs p(95)=111.1µs 
     http_req_sending...............: avg=1.03ms   min=7.3µs    med=15.9µs max=120.91ms p(90)=38.5µs p(95)=468.84µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=7.68s    min=698.5ms  med=6.91s  max=23.42s   p(90)=14.35s p(95)=17.69s  
     http_reqs......................: 10486  51.783473/s
     iteration_duration.............: avg=7.68s    min=699.79ms med=6.91s  max=23.42s   p(90)=14.35s p(95)=17.69s  
     iterations.....................: 10486  51.783473/s
     vus............................: 225    min=225     max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5a73fae4-7074-41a1-933e-2adaab162200/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4058af55-4f23-4167-4940-53546bafe800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  92% — ✓ 8702 / ✗ 735
     ✗ no graphql errors
      ↳  91% — ✓ 8619 / ✗ 818
     ✗ valid response structure
      ↳  99% — ✓ 8619 / ✗ 83

     checks.........................: 94.06% ✓ 25940    ✗ 1636 
     data_received..................: 44 MB  201 kB/s
     data_sent......................: 11 MB  52 kB/s
     http_req_blocked...............: avg=4.46ms   min=1.9µs    med=3.6µs  max=265.36ms p(90)=967.62µs p(95)=29.1ms  
     http_req_connecting............: avg=4.23ms   min=0s       med=0s     max=230.29ms p(90)=731.86µs p(95)=24.78ms 
     http_req_duration..............: avg=8.86s    min=863.9ms  med=3.55s  max=1m0s     p(90)=33.8s    p(95)=59.99s  
       { expected_response:true }...: avg=4.54s    min=863.9ms  med=3.52s  max=59.3s    p(90)=4.13s    p(95)=4.89s   
   ✓ http_req_failed................: 7.78%  ✓ 735      ✗ 8702 
     http_req_receiving.............: avg=86.63µs  min=0s       med=79µs   max=7.27ms   p(90)=124.6µs  p(95)=148.02µs
     http_req_sending...............: avg=730.24µs min=11.4µs   med=22.9µs max=104.25ms p(90)=136.5µs  p(95)=1.46ms  
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=8.86s    min=863.77ms med=3.55s  max=1m0s     p(90)=33.8s    p(95)=59.99s  
     http_reqs......................: 9437   43.46889/s
     iteration_duration.............: avg=8.87s    min=864.36ms med=3.55s  max=1m0s     p(90)=33.81s   p(95)=1m0s    
     iterations.....................: 9437   43.46889/s
     vus............................: 25     min=25     max=400
     vus_max........................: 400    min=400    max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3235baed-2456-489d-ad90-29050b254400/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5c189fc5-8657-4645-ce00-d35f10700f00/public" alt="HTTP Overview" />


  </details>