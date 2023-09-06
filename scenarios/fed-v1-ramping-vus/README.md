## Overview for: `fed-v1-ramping-vus`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. We are running a heavy load of concurrent VUs to measure response time and other stats, during stress. It measure things like memory usage, CPU usage, response times. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was trying to reach 1500 concurrent VUs over 300s


### Comparison


| Gateway                             | duration(p95)⬇️ |  RPS  |         Requests         |                       Durations                        |
| :---------------------------------- | :-------------: | :---: | :----------------------: | :----------------------------------------------------: |
| wundergraph                         |      497ms      | 3199  |  991846 total, 0 failed  |    avg: 226ms, p95: 497ms, max: 1393ms, med: 206ms     |
| mesh                                |     5443ms      |  276  |  85773 total, 0 failed   |  avg: 2796ms, p95: 5444ms, max: 10631ms, med: 2695ms   |
| apollo-gateway-with-yoga-bun        |     10267ms     |  180  |  55885 total, 0 failed   |  avg: 4327ms, p95: 10268ms, max: 26913ms, med: 4093ms  |
| apollo-router                       |     11878ms     |  165  |  51440 total, 0 failed   |  avg: 4707ms, p95: 11879ms, max: 24507ms, med: 3918ms  |
| stitching-federation-with-yoga-deno |     12514ms     |  112  |  34838 total, 0 failed   |  avg: 6955ms, p95: 12515ms, max: 13524ms, med: 6999ms  |
| stitching-federation-with-yoga-bun  |     13620ms     |  141  |  43860 total, 0 failed   |  avg: 5495ms, p95: 13620ms, max: 33997ms, med: 5167ms  |
| mercurius                           |     16927ms     |  85   |  26657 total, 0 failed   |  avg: 9187ms, p95: 16928ms, max: 18380ms, med: 9154ms  |
| mesh-supergraph                     |     26735ms     |  58   |  18616 total, 0 failed   | avg: 13486ms, p95: 26735ms, max: 34393ms, med: 13220ms |
| apollo-server-node16                |     28686ms     |  117  | 36548 total, 118 failed  |  avg: 6709ms, p95: 28686ms, max: 60016ms, med: 3764ms  |
| apollo-gateway-with-yoga            |     59999ms     |  102  | 34201 total, 2494 failed |  avg: 7349ms, p95: 60000ms, max: 60038ms, med: 2848ms  |
| apollo-server                       |     59999ms     |  100  | 33375 total, 2499 failed |  avg: 7510ms, p95: 60000ms, max: 60031ms, med: 2909ms  |
| stitching-federation-with-yoga      |     60000ms     |  72   | 24152 total, 2791 failed | avg: 10461ms, p95: 60000ms, max: 60051ms, med: 3331ms  |
| stitching-federation-with-yoga-uws  |     60000ms     |  47   | 15673 total, 943 failed  | avg: 16788ms, p95: 60000ms, max: 60593ms, med: 9420ms  |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 2975538     ✗ 0     
     data_received..................: 144 MB  464 kB/s
     data_sent......................: 1.2 GB  3.8 MB/s
     http_req_blocked...............: avg=230.3µs  min=700ns   med=1.7µs    max=902.86ms p(90)=3.2µs    p(95)=4.1µs   
     http_req_connecting............: avg=222.51µs min=0s      med=0s       max=902.73ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=225.67ms min=239.4µs med=206.12ms max=1.39s    p(90)=422.07ms p(95)=497.14ms
       { expected_response:true }...: avg=225.67ms min=239.4µs med=206.12ms max=1.39s    p(90)=422.07ms p(95)=497.14ms
     http_req_failed................: 0.00%   ✓ 0           ✗ 991846
     http_req_receiving.............: avg=558.13µs min=8.6µs   med=21.1µs   max=722.41ms p(90)=56.09µs  p(95)=198.5µs 
     http_req_sending...............: avg=284.11µs min=5.2µs   med=9.6µs    max=822.61ms p(90)=22.6µs   p(95)=65.9µs  
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=224.83ms min=209µs   med=205.32ms max=1.32s    p(90)=420.81ms p(95)=495.38ms
     http_reqs......................: 991846  3199.327956/s
     iteration_duration.............: avg=238.46ms min=338.9µs med=216.58ms max=1.93s    p(90)=444.09ms p(95)=534.42ms
     iterations.....................: 991846  3199.327956/s
     vus............................: 1       min=0         max=1499
     vus_max........................: 1500    min=1440      max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/76e16e1a-261a-434d-e624-859ec9206900/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8f249e8e-680e-4f9c-cac5-c3d8e808ea00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/af6e8f36-f3bf-4e18-1532-321fcd586000/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 257319     ✗ 0     
     data_received..................: 110 MB  353 kB/s
     data_sent......................: 102 MB  328 kB/s
     http_req_blocked...............: avg=71.17µs min=900ns  med=1.8µs  max=203.54ms p(90)=3µs    p(95)=4.4µs  
     http_req_connecting............: avg=65.48µs min=0s     med=0s     max=203.3ms  p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=2.79s   min=2.98ms med=2.69s  max=10.63s   p(90)=5.03s  p(95)=5.44s  
       { expected_response:true }...: avg=2.79s   min=2.98ms med=2.69s  max=10.63s   p(90)=5.03s  p(95)=5.44s  
     http_req_failed................: 0.00%   ✓ 0          ✗ 85773 
     http_req_receiving.............: avg=87.95µs min=13.1µs med=37.7µs max=181.23ms p(90)=63.5µs p(95)=95.54µs
     http_req_sending...............: avg=65.07µs min=6.4µs  med=11.9µs max=249.54ms p(90)=25.6µs p(95)=70.2µs 
     http_req_tls_handshaking.......: avg=0s      min=0s     med=0s     max=0s       p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=2.79s   min=2.91ms med=2.69s  max=10.63s   p(90)=5.03s  p(95)=5.44s  
     http_reqs......................: 85773   276.684331/s
     iteration_duration.............: avg=2.79s   min=3.13ms med=2.69s  max=10.63s   p(90)=5.03s  p(95)=5.44s  
     iterations.....................: 85773   276.684331/s
     vus............................: 4       min=0        max=1498
     vus_max........................: 1500    min=1144     max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/71ad4de3-f6d9-48e6-3f2f-7f32777b0200/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/eacca88f-5c51-46b0-76a1-07fc4469d800/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ce3320da-afdd-42a8-d0de-f8db4bc8ca00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 167655     ✗ 0     
     data_received..................: 282 MB  911 kB/s
     data_sent......................: 66 MB   214 kB/s
     http_req_blocked...............: avg=50.26µs  min=1µs    med=1.9µs  max=276.93ms p(90)=3.3µs  p(95)=6.8µs 
     http_req_connecting............: avg=44.88µs  min=0s     med=0s     max=276.7ms  p(90)=0s     p(95)=0s    
     http_req_duration..............: avg=4.32s    min=5.59ms med=4.09s  max=26.91s   p(90)=6.67s  p(95)=10.26s
       { expected_response:true }...: avg=4.32s    min=5.59ms med=4.09s  max=26.91s   p(90)=6.67s  p(95)=10.26s
     http_req_failed................: 0.00%   ✓ 0          ✗ 55885 
     http_req_receiving.............: avg=106.61µs min=16.8µs med=44.4µs max=227.89ms p(90)=70.6µs p(95)=89.9µs
     http_req_sending...............: avg=86.01µs  min=5.7µs  med=12.1µs max=134.55ms p(90)=27µs   p(95)=69.8µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s     p(95)=0s    
     http_req_waiting...............: avg=4.32s    min=5.49ms med=4.09s  max=26.91s   p(90)=6.67s  p(95)=10.26s
     http_reqs......................: 55885   180.272224/s
     iteration_duration.............: avg=4.32s    min=5.92ms med=4.09s  max=26.91s   p(90)=6.67s  p(95)=10.26s
     iterations.....................: 55885   180.272224/s
     vus............................: 4       min=0        max=1500
     vus_max........................: 1500    min=971      max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/75132341-df8d-4433-b59a-abf3e9593b00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/67d8fbbc-14fe-436f-792b-9f067a595c00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5400dd46-6eff-4038-89e6-d570229af100/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 154320    ✗ 0     
     data_received..................: 260 MB  838 kB/s
     data_sent......................: 61 MB   197 kB/s
     http_req_blocked...............: avg=23.76µs min=1.1µs  med=2.8µs  max=42.34ms p(90)=4.5µs  p(95)=14µs   
     http_req_connecting............: avg=16.74µs min=0s     med=0s     max=16.21ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=4.7s    min=7.22ms med=3.91s  max=24.5s   p(90)=9.84s  p(95)=11.87s 
       { expected_response:true }...: avg=4.7s    min=7.22ms med=3.91s  max=24.5s   p(90)=9.84s  p(95)=11.87s 
     http_req_failed................: 0.00%   ✓ 0         ✗ 51440 
     http_req_receiving.............: avg=77.62µs min=19.7µs med=69.4µs max=23.16ms p(90)=95.6µs p(95)=104.6µs
     http_req_sending...............: avg=28.91µs min=7.4µs  med=17.1µs max=30.36ms p(90)=33.3µs p(95)=41.4µs 
     http_req_tls_handshaking.......: avg=0s      min=0s     med=0s     max=0s      p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=4.7s    min=7.09ms med=3.91s  max=24.5s   p(90)=9.84s  p(95)=11.87s 
     http_reqs......................: 51440   165.93011/s
     iteration_duration.............: avg=4.7s    min=7.74ms med=3.91s  max=24.5s   p(90)=9.84s  p(95)=11.87s 
     iterations.....................: 51440   165.93011/s
     vus............................: 4       min=0       max=1498
     vus_max........................: 1500    min=1113    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/699cad2b-d98f-4cc2-a2a0-672134601f00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f9d72336-964a-4007-68f7-9e45a9b40100/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b28a470b-20aa-4813-30b0-a5a6b1aabb00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-deno`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 104514     ✗ 0     
     data_received..................: 177 MB  570 kB/s
     data_sent......................: 41 MB   133 kB/s
     http_req_blocked...............: avg=27.43µs min=700ns  med=1.6µs  max=55.49ms p(90)=3µs    p(95)=14.9µs
     http_req_connecting............: avg=21.8µs  min=0s     med=0s     max=54.72ms p(90)=0s     p(95)=0s    
     http_req_duration..............: avg=6.95s   min=7.96ms med=6.99s  max=13.52s  p(90)=11.94s p(95)=12.51s
       { expected_response:true }...: avg=6.95s   min=7.96ms med=6.99s  max=13.52s  p(90)=11.94s p(95)=12.51s
     http_req_failed................: 0.00%   ✓ 0          ✗ 34838 
     http_req_receiving.............: avg=75.45µs min=13.6µs med=24.7µs max=31.8ms  p(90)=72µs   p(95)=88.8µs
     http_req_sending...............: avg=29.53µs min=5.4µs  med=9.4µs  max=20.31ms p(90)=22.8µs p(95)=61.3µs
     http_req_tls_handshaking.......: avg=0s      min=0s     med=0s     max=0s      p(90)=0s     p(95)=0s    
     http_req_waiting...............: avg=6.95s   min=7.9ms  med=6.99s  max=13.52s  p(90)=11.94s p(95)=12.51s
     http_reqs......................: 34838   112.377702/s
     iteration_duration.............: avg=6.95s   min=8.21ms med=6.99s  max=13.52s  p(90)=11.94s p(95)=12.51s
     iterations.....................: 34838   112.377702/s
     vus............................: 3       min=0        max=1498
     vus_max........................: 1500    min=1288     max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/abe6b2fd-6119-4411-8d04-afcd67030d00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1cb7668a-7654-4e11-dfee-a7907d1ea900/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/164ebb1c-2b49-4951-1ad9-91e6d5cd7000/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 131580     ✗ 0     
     data_received..................: 222 MB  715 kB/s
     data_sent......................: 52 MB   168 kB/s
     http_req_blocked...............: avg=129.45µs min=900ns  med=1.9µs  max=691.56ms p(90)=3.4µs  p(95)=10.5µs 
     http_req_connecting............: avg=111.17µs min=0s     med=0s     max=614.17ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=5.49s    min=6.66ms med=5.16s  max=33.99s   p(90)=7.77s  p(95)=13.62s 
       { expected_response:true }...: avg=5.49s    min=6.66ms med=5.16s  max=33.99s   p(90)=7.77s  p(95)=13.62s 
     http_req_failed................: 0.00%   ✓ 0          ✗ 43860 
     http_req_receiving.............: avg=675.02µs min=17.1µs med=38.4µs max=620.13ms p(90)=75.2µs p(95)=249.5µs
     http_req_sending...............: avg=275.37µs min=6.5µs  med=11.5µs max=519.22ms p(90)=30µs   p(95)=96.5µs 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=5.49s    min=6.57ms med=5.16s  max=33.99s   p(90)=7.76s  p(95)=13.62s 
     http_reqs......................: 43860   141.477481/s
     iteration_duration.............: avg=5.49s    min=7.01ms med=5.16s  max=33.99s   p(90)=7.77s  p(95)=13.62s 
     iterations.....................: 43860   141.477481/s
     vus............................: 2       min=0        max=1500
     vus_max........................: 1500    min=1281     max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6443e967-ea1e-4c31-5147-637e7a429800/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/825a64d5-f17b-4de3-ab8b-6d3348fab800/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/132ac931-2e33-42b2-e5f4-9f208b273800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 79971     ✗ 0     
     data_received..................: 120 MB  386 kB/s
     data_sent......................: 32 MB   102 kB/s
     http_req_blocked...............: avg=65.37µs  min=1.3µs    med=3.2µs  max=23.1ms  p(90)=12.64µs p(95)=336µs   
     http_req_connecting............: avg=52.46µs  min=0s       med=0s     max=22.75ms p(90)=0s      p(95)=196.82µs
     http_req_duration..............: avg=9.18s    min=713.88ms med=9.15s  max=18.37s  p(90)=15.98s  p(95)=16.92s  
       { expected_response:true }...: avg=9.18s    min=713.88ms med=9.15s  max=18.37s  p(90)=15.98s  p(95)=16.92s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 26657 
     http_req_receiving.............: avg=103.71µs min=26.6µs   med=84µs   max=15.75ms p(90)=143.5µs p(95)=167.62µs
     http_req_sending...............: avg=53.36µs  min=9.4µs    med=22.9µs max=24.17ms p(90)=65.4µs  p(95)=113.4µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=9.18s    min=713.68ms med=9.15s  max=18.37s  p(90)=15.98s  p(95)=16.92s  
     http_reqs......................: 26657   85.585916/s
     iteration_duration.............: avg=9.18s    min=714.58ms med=9.15s  max=18.37s  p(90)=15.99s  p(95)=16.92s  
     iterations.....................: 26657   85.585916/s
     vus............................: 18      min=0       max=1500
     vus_max........................: 1500    min=972     max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2d2209d5-56a6-4bb5-649b-6ba2fa489500/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6577a913-d50d-4dc2-e691-21dcc5aca500/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/83c530a4-4c0b-4c7e-3829-1d87ac8d5400/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 55848     ✗ 0     
     data_received..................: 94 MB   298 kB/s
     data_sent......................: 22 MB   70 kB/s
     http_req_blocked...............: avg=54.69µs min=1.2µs med=2.4µs  max=19.43ms p(90)=13.8µs p(95)=508.65µs
     http_req_connecting............: avg=43.63µs min=0s    med=0s     max=19.35ms p(90)=0s     p(95)=420.72µs
     http_req_duration..............: avg=13.48s  min=1.15s med=13.22s max=34.39s  p(90)=24.35s p(95)=26.73s  
       { expected_response:true }...: avg=13.48s  min=1.15s med=13.22s max=34.39s  p(90)=24.35s p(95)=26.73s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 18616 
     http_req_receiving.............: avg=83.5µs  min=18µs  med=58.4µs max=18.3ms  p(90)=87.6µs p(95)=108.6µs 
     http_req_sending...............: avg=42.72µs min=7.3µs med=14.4µs max=27.89ms p(90)=57.3µs p(95)=89.9µs  
     http_req_tls_handshaking.......: avg=0s      min=0s    med=0s     max=0s      p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=13.48s  min=1.15s med=13.22s max=34.39s  p(90)=24.35s p(95)=26.73s  
     http_reqs......................: 18616   58.723149/s
     iteration_duration.............: avg=13.48s  min=1.15s med=13.22s max=34.39s  p(90)=24.35s p(95)=26.73s  
     iterations.....................: 18616   58.723149/s
     vus............................: 261     min=0       max=1500
     vus_max........................: 1500    min=941     max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6dc2cb60-fb9a-4059-5514-9f45b942c200/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/bc441cee-4222-4fc1-e2d6-96ea28679b00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c873ae8d-dd47-4ec3-7b2c-c2dfa17cef00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server-node16`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  99% — ✓ 36430 / ✗ 118
     ✗ no graphql errors
      ↳  99% — ✓ 36430 / ✗ 118
     ✓ valid response structure

     checks.........................: 99.78% ✓ 109290     ✗ 236   
     data_received..................: 190 MB 611 kB/s
     data_sent......................: 43 MB  139 kB/s
     http_req_blocked...............: avg=48.65µs min=1.1µs   med=2.29µs max=40.63ms  p(90)=4.2µs  p(95)=19µs   
     http_req_connecting............: avg=41.72µs min=0s      med=0s     max=40.56ms  p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=6.7s    min=31.79ms med=3.76s  max=1m0s     p(90)=18.49s p(95)=28.68s 
       { expected_response:true }...: avg=6.53s   min=31.79ms med=3.75s  max=59.94s   p(90)=17.07s p(95)=26.94s 
     http_req_failed................: 0.32%  ✓ 118        ✗ 36430 
     http_req_receiving.............: avg=89.59µs min=0s      med=61.1µs max=154.05ms p(90)=89.7µs p(95)=101.2µs
     http_req_sending...............: avg=90.51µs min=7.3µs   med=13.9µs max=201.29ms p(90)=30.8µs p(95)=54µs   
     http_req_tls_handshaking.......: avg=0s      min=0s      med=0s     max=0s       p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=6.7s    min=31.67ms med=3.76s  max=1m0s     p(90)=18.49s p(95)=28.68s 
     http_reqs......................: 36548  117.350307/s
     iteration_duration.............: avg=6.7s    min=32.16ms med=3.76s  max=1m0s     p(90)=18.49s p(95)=28.68s 
     iterations.....................: 36548  117.350307/s
     vus............................: 301    min=0        max=1499
     vus_max........................: 1500   min=1236     max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c1534c85-1fb1-4731-2a28-b64c9e2e5c00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/18b17c0e-1b95-4213-e7cc-77afc3ce4e00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/cef494ac-9a0a-4497-2511-ecf621558c00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  92% — ✓ 31707 / ✗ 2494
     ✗ no graphql errors
      ↳  92% — ✓ 31707 / ✗ 2494
     ✓ valid response structure

     checks.........................: 95.01% ✓ 95121      ✗ 4988  
     data_received..................: 162 MB 485 kB/s
     data_sent......................: 41 MB  122 kB/s
     http_req_blocked...............: avg=114.27µs min=1.2µs   med=2.4µs  max=30.9ms  p(90)=75.5µs p(95)=451.11µs
     http_req_connecting............: avg=100.45µs min=0s      med=0s     max=30.82ms p(90)=0s     p(95)=366.5µs 
     http_req_duration..............: avg=7.34s    min=41.39ms med=2.84s  max=1m0s    p(90)=3.57s  p(95)=59.99s  
       { expected_response:true }...: avg=3.2s     min=41.39ms med=2.81s  max=59.94s  p(90)=3.15s  p(95)=3.29s   
     http_req_failed................: 7.29%  ✓ 2494       ✗ 31707 
     http_req_receiving.............: avg=64.17µs  min=0s      med=61.3µs max=9.62ms  p(90)=84.1µs p(95)=92.9µs  
     http_req_sending...............: avg=30.22µs  min=8µs     med=14µs   max=12.73ms p(90)=36.7µs p(95)=60.3µs  
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s      p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=7.34s    min=41.28ms med=2.84s  max=1m0s    p(90)=3.57s  p(95)=59.99s  
     http_reqs......................: 34201  102.568556/s
     iteration_duration.............: avg=7.34s    min=41.72ms med=2.84s  max=1m0s    p(90)=3.57s  p(95)=1m0s    
     iterations.....................: 34201  102.568556/s
     vus............................: 17     min=0        max=1500
     vus_max........................: 1500   min=1193     max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/acecf8a0-e35a-4624-1661-d6d8e8ae8300/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/18ed222b-fbb9-47c8-53fe-a6b0f22df600/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/cd0d721d-dccf-422b-eaf7-b9f457219200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  92% — ✓ 30876 / ✗ 2499
     ✗ no graphql errors
      ↳  92% — ✓ 30876 / ✗ 2499
     ✓ valid response structure

     checks.........................: 94.88% ✓ 92628      ✗ 4998  
     data_received..................: 161 MB 484 kB/s
     data_sent......................: 40 MB  119 kB/s
     http_req_blocked...............: avg=121.52µs min=1.2µs   med=2.2µs  max=28.59ms p(90)=138.22µs p(95)=459.61µs
     http_req_connecting............: avg=107.55µs min=0s      med=0s     max=28.53ms p(90)=87.26µs  p(95)=377.4µs 
     http_req_duration..............: avg=7.5s     min=38.37ms med=2.9s   max=1m0s    p(90)=3.96s    p(95)=59.99s  
       { expected_response:true }...: avg=3.26s    min=38.37ms med=2.88s  max=59.89s  p(90)=3.2s     p(95)=3.35s   
     http_req_failed................: 7.48%  ✓ 2499       ✗ 30876 
     http_req_receiving.............: avg=63.79µs  min=0s      med=60.9µs max=23.05ms p(90)=82.4µs   p(95)=91.73µs 
     http_req_sending...............: avg=29.72µs  min=7.5µs   med=13.5µs max=18.81ms p(90)=36.8µs   p(95)=60.4µs  
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=7.5s     min=38.28ms med=2.9s   max=1m0s    p(90)=3.96s    p(95)=59.99s  
     http_reqs......................: 33375  100.089885/s
     iteration_duration.............: avg=7.51s    min=38.68ms med=2.9s   max=1m0s    p(90)=3.96s    p(95)=1m0s    
     iterations.....................: 33375  100.089885/s
     vus............................: 21     min=0        max=1500
     vus_max........................: 1500   min=1389     max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d54fa786-f860-410a-86de-ce1284dd7500/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/da058db1-b1ea-4128-2be4-a18f9c531100/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ab97f417-2fc9-4a8e-d5ac-29681e622b00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  88% — ✓ 21361 / ✗ 2791
     ✗ no graphql errors
      ↳  88% — ✓ 21361 / ✗ 2791
     ✓ valid response structure

     checks.........................: 91.98% ✓ 64083     ✗ 5582  
     data_received..................: 109 MB 326 kB/s
     data_sent......................: 29 MB  86 kB/s
     http_req_blocked...............: avg=319.65µs min=1µs     med=3µs     max=123.9ms  p(90)=440.8µs  p(95)=965.56µs
     http_req_connecting............: avg=293.65µs min=0s      med=0s      max=123.64ms p(90)=345.39µs p(95)=786.6µs 
     http_req_duration..............: avg=10.46s   min=68.78ms med=3.33s   max=1m0s     p(90)=59.99s   p(95)=1m0s    
       { expected_response:true }...: avg=3.98s    min=68.78ms med=3.28s   max=59.9s    p(90)=3.74s    p(95)=4.05s   
     http_req_failed................: 11.55% ✓ 2791      ✗ 21361 
     http_req_receiving.............: avg=75.2µs   min=0s      med=68.7µs  max=15.38ms  p(90)=110.2µs  p(95)=129.4µs 
     http_req_sending...............: avg=53.84µs  min=8.6µs   med=17.89µs max=21.59ms  p(90)=65.8µs   p(95)=94.6µs  
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=10.46s   min=68.65ms med=3.33s   max=1m0s     p(90)=59.99s   p(95)=1m0s    
     http_reqs......................: 24152  72.226345/s
     iteration_duration.............: avg=10.46s   min=69.31ms med=3.33s   max=1m0s     p(90)=1m0s     p(95)=1m0s    
     iterations.....................: 24152  72.226345/s
     vus............................: 11     min=0       max=1500
     vus_max........................: 1500   min=892     max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f08ebd4b-bae6-4b7e-ec97-706484401100/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/05e856bb-a896-4121-ce5a-afaa8e915900/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/019939eb-5510-4e78-d5bb-74e37a11a800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-uws`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  93% — ✓ 14730 / ✗ 943
     ✗ no graphql errors
      ↳  93% — ✓ 14730 / ✗ 943
     ✓ valid response structure

     checks.........................: 95.90% ✓ 44190     ✗ 1886  
     data_received..................: 75 MB  225 kB/s
     data_sent......................: 19 MB  56 kB/s
     http_req_blocked...............: avg=2.18ms   min=1.4µs med=2.9µs  max=582.51ms p(90)=600.34µs p(95)=954.29µs
     http_req_connecting............: avg=1.93ms   min=0s    med=0s     max=582.27ms p(90)=494.9µs  p(95)=828.77µs
     http_req_duration..............: avg=16.78s   min=1.27s med=9.42s  max=1m0s     p(90)=45.25s   p(95)=1m0s    
       { expected_response:true }...: avg=14.01s   min=1.27s med=9.11s  max=59.89s   p(90)=34.64s   p(95)=42.2s   
     http_req_failed................: 6.01%  ✓ 943       ✗ 14730 
     http_req_receiving.............: avg=100.92µs min=0s    med=71.4µs max=27.71ms  p(90)=134µs    p(95)=171.6µs 
     http_req_sending...............: avg=157.39µs min=9.8µs med=19µs   max=71.97ms  p(90)=94.4µs   p(95)=175.78µs
     http_req_tls_handshaking.......: avg=0s       min=0s    med=0s     max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=16.78s   min=1.27s med=9.42s  max=1m0s     p(90)=45.25s   p(95)=1m0s    
     http_reqs......................: 15673  47.201493/s
     iteration_duration.............: avg=16.79s   min=1.27s med=9.42s  max=1m1s     p(90)=45.25s   p(95)=1m0s    
     iterations.....................: 15673  47.201493/s
     vus............................: 82     min=0       max=1500
     vus_max........................: 1500   min=772     max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f144c771-63dd-4185-9ec5-a6f2722b2300/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5ef54fba-790a-4cee-a629-fcfbb6054a00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/447e1897-a0f1-4ebd-09a9-36637c19a500/public" alt="HTTP Overview" />


  </details>