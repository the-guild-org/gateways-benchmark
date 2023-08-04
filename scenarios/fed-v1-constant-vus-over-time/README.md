## Overview for: `scenarios/fed-v1-constant-vus-over-time`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. It's being executed with a constant amount of VUs over a fixed amount of time. It measure things like memory usage, CPU usage, average RPS. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was running 400 VUs over 200s


### Comparison


| Gateway                             | RPS ⬇️ |        Requests         |          Duration          |
| :---------------------------------- | :----: | :---------------------: | :------------------------: |
| wundergraph                         |  490   |  98473 total, 0 failed  |  avg: 807ms, p95: 1161ms   |
| stitching-federation-with-yoga-bun  |  112   |  22759 total, 0 failed  |  avg: 3556ms, p95: 4822ms  |
| apollo-router                       |   81   |  16657 total, 0 failed  |  avg: 4851ms, p95: 7208ms  |
| mesh                                |   80   |  16359 total, 0 failed  |  avg: 4921ms, p95: 5700ms  |
| stitching-federation-with-yoga      |   80   | 17217 total, 609 failed | avg: 4751ms, p95: 25875ms  |
| mesh-supergraph                     |   77   |  15656 total, 0 failed  |  avg: 5157ms, p95: 5981ms  |
| mercurius                           |   76   |  15369 total, 0 failed  |  avg: 5222ms, p95: 5942ms  |
| stitching-federation-with-yoga-deno |   69   |  14114 total, 0 failed  |  avg: 5711ms, p95: 7172ms  |
| apollo-gateway-with-yoga-uws        |   62   |  12702 total, 0 failed  | avg: 6397ms, p95: 16570ms  |
| apollo-server                       |   60   | 12939 total, 636 failed | avg: 6368ms, p95: 53611ms  |
| apollo-server-node16                |   55   |  11339 total, 0 failed  | avg: 7125ms, p95: 14494ms  |
| apollo-gateway-with-yoga            |   43   |  8876 total, 92 failed  | avg: 9105ms, p95: 20911ms  |
| stitching-federation-with-yoga-uws  |   38   |  8294 total, 0 failed   | avg: 10097ms, p95: 19788ms |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 295419   ✗ 0    
     data_received..................: 490 MB  2.4 MB/s
     data_sent......................: 117 MB  583 kB/s
     http_req_blocked...............: avg=302.13µs min=1.5µs    med=2.9µs    max=295.69ms p(90)=4.4µs    p(95)=7.1µs   
     http_req_connecting............: avg=284.74µs min=0s       med=0s       max=132.88ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=807.19ms min=273.7ms  med=781.08ms max=2.09s    p(90)=1.06s    p(95)=1.16s   
       { expected_response:true }...: avg=807.19ms min=273.7ms  med=781.08ms max=2.09s    p(90)=1.06s    p(95)=1.16s   
   ✓ http_req_failed................: 0.00%   ✓ 0        ✗ 98473
     http_req_receiving.............: avg=6.11ms   min=19µs     med=50µs     max=959.14ms p(90)=296.28µs p(95)=7.7ms   
     http_req_sending...............: avg=1.39ms   min=10.1µs   med=16.4µs   max=664.42ms p(90)=52.4µs   p(95)=155.94µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=799.68ms min=272.74ms med=776.9ms  max=2.04s    p(90)=1.04s    p(95)=1.13s   
     http_reqs......................: 98473   490.9874/s
     iteration_duration.............: avg=813.28ms min=274.41ms med=786.17ms max=2.18s    p(90)=1.07s    p(95)=1.17s   
     iterations.....................: 98473   490.9874/s
     vus............................: 400     min=400    max=400
     vus_max........................: 400     min=400    max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a5146275-eb05-4100-5992-cea303ecf700/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ce692d05-0f19-4d39-f733-6f147c59ff00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 68277      ✗ 0    
     data_received..................: 113 MB  558 kB/s
     data_sent......................: 27 MB   133 kB/s
     http_req_blocked...............: avg=963.62µs min=1µs    med=2.4µs  max=144.91ms p(90)=4.5µs  p(95)=9.19µs  
     http_req_connecting............: avg=937.35µs min=0s     med=0s     max=144.86ms p(90)=0s     p(95)=0s      
     http_req_duration..............: avg=3.55s    min=2.51s  med=3.39s  max=9.81s    p(90)=3.94s  p(95)=4.82s   
       { expected_response:true }...: avg=3.55s    min=2.51s  med=3.39s  max=9.81s    p(90)=3.94s  p(95)=4.82s   
   ✓ http_req_failed................: 0.00%   ✓ 0          ✗ 22759
     http_req_receiving.............: avg=131.97µs min=21.1µs med=50.1µs max=141.68ms p(90)=81.5µs p(95)=138.64µs
     http_req_sending...............: avg=254.98µs min=6.5µs  med=13.5µs max=133.17ms p(90)=32.5µs p(95)=122.3µs 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=3.55s    min=2.51s  med=3.39s  max=9.81s    p(90)=3.94s  p(95)=4.81s   
     http_reqs......................: 22759   112.044235/s
     iteration_duration.............: avg=3.55s    min=2.51s  med=3.39s  max=9.84s    p(90)=3.94s  p(95)=4.86s   
     iterations.....................: 22759   112.044235/s
     vus............................: 193     min=193      max=400
     vus_max........................: 400     min=400      max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/29d45097-d2bc-4ad2-c179-d06b05674300/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/edd8d459-9795-40ef-ec2e-63d714ab4400/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 16644 / ✗ 13
     ✗ valid response structure
      ↳  99% — ✓ 16644 / ✗ 13

     checks.........................: 99.94% ✓ 49945     ✗ 26   
     data_received..................: 83 MB  407 kB/s
     data_sent......................: 20 MB  97 kB/s
     http_req_blocked...............: avg=1.45ms   min=1.6µs  med=3.5µs  max=159.57ms p(90)=4.7µs    p(95)=16.1µs
     http_req_connecting............: avg=1.4ms    min=0s     med=0s     max=132.19ms p(90)=0s       p(95)=0s    
     http_req_duration..............: avg=4.85s    min=2.48s  med=4.63s  max=11.44s   p(90)=5.24s    p(95)=7.2s  
       { expected_response:true }...: avg=4.85s    min=2.48s  med=4.63s  max=11.44s   p(90)=5.24s    p(95)=7.2s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 16657
     http_req_receiving.............: avg=92.22µs  min=29µs   med=81.1µs max=21.66ms  p(90)=114.64µs p(95)=133µs 
     http_req_sending...............: avg=193.74µs min=9.79µs med=21.7µs max=40.94ms  p(90)=43.8µs   p(95)=68.8µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s       p(95)=0s    
     http_req_waiting...............: avg=4.85s    min=2.48s  med=4.63s  max=11.43s   p(90)=5.24s    p(95)=7.2s  
     http_reqs......................: 16657  81.647244/s
     iteration_duration.............: avg=4.85s    min=2.48s  med=4.63s  max=11.55s   p(90)=5.24s    p(95)=7.21s 
     iterations.....................: 16657  81.647244/s
     vus............................: 70     min=70      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3a29627f-566d-4694-99cb-a6de85f18700/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c942e2d3-9c48-4622-9836-2dcfa00b9c00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 16249 / ✗ 110
     ✗ valid response structure
      ↳  99% — ✓ 16249 / ✗ 110

     checks.........................: 99.55% ✓ 48857     ✗ 220  
     data_received..................: 82 MB  407 kB/s
     data_sent......................: 19 MB  96 kB/s
     http_req_blocked...............: avg=1.14ms   min=800ns  med=1.9µs  max=106.8ms  p(90)=3.2µs  p(95)=7.71µs 
     http_req_connecting............: avg=1.11ms   min=0s     med=0s     max=100.88ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=4.92s    min=1s     med=4.9s   max=8.13s    p(90)=5.46s  p(95)=5.7s   
       { expected_response:true }...: avg=4.92s    min=1s     med=4.9s   max=8.13s    p(90)=5.46s  p(95)=5.7s   
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 16359
     http_req_receiving.............: avg=56.45µs  min=16.6µs med=35.5µs max=29.91ms  p(90)=63.2µs p(95)=76µs   
     http_req_sending...............: avg=190.54µs min=6.3µs  med=11µs   max=74.58ms  p(90)=25.3µs p(95)=55.84µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=4.92s    min=1s     med=4.9s   max=8.13s    p(90)=5.46s  p(95)=5.7s   
     http_reqs......................: 16359  80.939284/s
     iteration_duration.............: avg=4.92s    min=1s     med=4.9s   max=8.15s    p(90)=5.47s  p(95)=5.7s   
     iterations.....................: 16359  80.939284/s
     vus............................: 103    min=103     max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/77593c9e-a263-4450-7f88-f658ef2ca500/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d83ed766-1952-49a5-5096-e87ea7523900/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  96% — ✓ 16608 / ✗ 609
     ✗ no graphql errors
      ↳  96% — ✓ 16566 / ✗ 651
     ✗ valid response structure
      ↳  99% — ✓ 16566 / ✗ 42

     checks.........................: 97.44% ✓ 49740     ✗ 1302 
     data_received..................: 84 MB  390 kB/s
     data_sent......................: 20 MB  95 kB/s
     http_req_blocked...............: avg=1.42ms   min=1.2µs    med=2.4µs  max=146.54ms p(90)=4.5µs  p(95)=2.07ms  
     http_req_connecting............: avg=1.37ms   min=0s       med=0s     max=116.44ms p(90)=0s     p(95)=1.68ms  
     http_req_duration..............: avg=4.75s    min=742.64ms med=2.32s  max=1m0s     p(90)=2.59s  p(95)=25.87s  
       { expected_response:true }...: avg=2.72s    min=742.64ms med=2.31s  max=58.9s    p(90)=2.54s  p(95)=2.66s   
   ✓ http_req_failed................: 3.53%  ✓ 609       ✗ 16608
     http_req_receiving.............: avg=63.51µs  min=0s       med=48.6µs max=51.03ms  p(90)=67.2µs p(95)=82.2µs  
     http_req_sending...............: avg=288.44µs min=7.3µs    med=12.7µs max=38.24ms  p(90)=30µs   p(95)=239.94µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=4.75s    min=742.55ms med=2.32s  max=1m0s     p(90)=2.59s  p(95)=25.87s  
     http_reqs......................: 17217  80.142344/s
     iteration_duration.............: avg=4.75s    min=743.3ms  med=2.32s  max=1m0s     p(90)=2.59s  p(95)=25.89s  
     iterations.....................: 17217  80.142344/s
     vus............................: 32     min=32      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/cd78fc62-6fb6-4d54-2f3d-1c2d31546800/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/370a6de7-7264-4817-6e96-27813b3efc00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 15523 / ✗ 133
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 15656

     checks.........................: 66.38% ✓ 31179    ✗ 15789
     data_received..................: 80 MB  394 kB/s
     data_sent......................: 19 MB  92 kB/s
     http_req_blocked...............: avg=1.29ms   min=1.3µs  med=2.2µs  max=104.81ms p(90)=3.6µs  p(95)=12µs   
     http_req_connecting............: avg=1.27ms   min=0s     med=0s     max=104.75ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=5.15s    min=3.03s  med=5.1s   max=9.19s    p(90)=5.68s  p(95)=5.98s  
       { expected_response:true }...: avg=5.15s    min=3.03s  med=5.1s   max=9.19s    p(90)=5.68s  p(95)=5.98s  
   ✓ http_req_failed................: 0.00%  ✓ 0        ✗ 15656
     http_req_receiving.............: avg=61.09µs  min=21.2µs med=53.5µs max=14.82ms  p(90)=73.5µs p(95)=83.92µs
     http_req_sending...............: avg=231.33µs min=7.2µs  med=13µs   max=36.49ms  p(90)=27.3µs p(95)=34.2µs 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=5.15s    min=3.03s  med=5.1s   max=9.18s    p(90)=5.68s  p(95)=5.98s  
     http_reqs......................: 15656  77.11071/s
     iteration_duration.............: avg=5.15s    min=3.03s  med=5.1s   max=9.25s    p(90)=5.68s  p(95)=5.98s  
     iterations.....................: 15656  77.11071/s
     vus............................: 126    min=126    max=400
     vus_max........................: 400    min=400    max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d973a7d4-b1e5-4387-3917-bb6277eec300/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7382be59-01ea-4583-4f11-fa95c8691800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 46107     ✗ 0    
     data_received..................: 77 MB   384 kB/s
     data_sent......................: 18 MB   91 kB/s
     http_req_blocked...............: avg=2.04ms  min=1.2µs   med=3.2µs  max=194.9ms  p(90)=4.5µs  p(95)=16.5µs
     http_req_connecting............: avg=2.01ms  min=0s      med=0s     max=194.87ms p(90)=0s     p(95)=0s    
     http_req_duration..............: avg=5.22s   min=1.55s   med=5.13s  max=10.08s   p(90)=5.47s  p(95)=5.94s 
       { expected_response:true }...: avg=5.22s   min=1.55s   med=5.13s  max=10.08s   p(90)=5.47s  p(95)=5.94s 
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 15369
     http_req_receiving.............: avg=70.55µs min=20.29µs med=69.6µs max=6.71ms   p(90)=88.6µs p(95)=93.9µs
     http_req_sending...............: avg=1.01ms  min=6.7µs   med=17.9µs max=111.27ms p(90)=33µs   p(95)=97.2µs
     http_req_tls_handshaking.......: avg=0s      min=0s      med=0s     max=0s       p(90)=0s     p(95)=0s    
     http_req_waiting...............: avg=5.22s   min=1.55s   med=5.13s  max=10.07s   p(90)=5.47s  p(95)=5.94s 
     http_reqs......................: 15369   76.250685/s
     iteration_duration.............: avg=5.22s   min=1.55s   med=5.14s  max=10.2s    p(90)=5.47s  p(95)=5.94s 
     iterations.....................: 15369   76.250685/s
     vus............................: 204     min=204     max=400
     vus_max........................: 400     min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a045e5b9-3c78-4de5-426f-4896d0419b00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a2cdd9e1-003e-47eb-423e-f39b944c9600/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-deno`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 14074 / ✗ 40
     ✗ valid response structure
      ↳  99% — ✓ 14074 / ✗ 40

     checks.........................: 99.81% ✓ 42262     ✗ 80   
     data_received..................: 71 MB  353 kB/s
     data_sent......................: 17 MB  83 kB/s
     http_req_blocked...............: avg=2.31ms   min=1.3µs  med=2.9µs  max=146.15ms p(90)=4.6µs    p(95)=14.5µs 
     http_req_connecting............: avg=2.27ms   min=0s     med=0s     max=146.09ms p(90)=0s       p(95)=0s     
     http_req_duration..............: avg=5.71s    min=2.71s  med=5.57s  max=10.48s   p(90)=6.3s     p(95)=7.17s  
       { expected_response:true }...: avg=5.71s    min=2.71s  med=5.57s  max=10.48s   p(90)=6.3s     p(95)=7.17s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 14114
     http_req_receiving.............: avg=167.25µs min=17.2µs med=43.2µs max=100.8ms  p(90)=106.54µs p(95)=170.6µs
     http_req_sending...............: avg=423.35µs min=7µs    med=16.1µs max=64.46ms  p(90)=47.57µs  p(95)=195.9µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=5.71s    min=2.71s  med=5.57s  max=10.48s   p(90)=6.3s     p(95)=7.17s  
     http_reqs......................: 14114  69.625756/s
     iteration_duration.............: avg=5.71s    min=2.71s  med=5.57s  max=10.48s   p(90)=6.31s    p(95)=7.18s  
     iterations.....................: 14114  69.625756/s
     vus............................: 19     min=19      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/190480d3-52cb-4658-e3d5-e24b00b3e600/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/65e476c4-ad49-486c-abe3-c10e0e367200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga-uws`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  78% — ✓ 9932 / ✗ 2770
     ✗ valid response structure
      ↳  78% — ✓ 9932 / ✗ 2770

     checks.........................: 85.46% ✓ 32566     ✗ 5540 
     data_received..................: 59 MB  288 kB/s
     data_sent......................: 15 MB  74 kB/s
     http_req_blocked...............: avg=2.4ms    min=1.2µs    med=2.29µs max=223.46ms p(90)=3.9µs  p(95)=14.4µs  
     http_req_connecting............: avg=2.35ms   min=0s       med=0s     max=223.43ms p(90)=0s     p(95)=0s      
     http_req_duration..............: avg=6.39s    min=276.69ms med=4.88s  max=22.26s   p(90)=13.49s p(95)=16.57s  
       { expected_response:true }...: avg=6.39s    min=276.69ms med=4.88s  max=22.26s   p(90)=13.49s p(95)=16.57s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 12702
     http_req_receiving.............: avg=252.56µs min=14.3µs   med=44.8µs max=116.92ms p(90)=73µs   p(95)=85.79µs 
     http_req_sending...............: avg=471.28µs min=7.5µs    med=12.8µs max=115.7ms  p(90)=28.6µs p(95)=127.19µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=6.39s    min=276.61ms med=4.88s  max=22.26s   p(90)=13.48s p(95)=16.57s  
     http_reqs......................: 12702  62.053953/s
     iteration_duration.............: avg=6.4s     min=277.34ms med=4.88s  max=22.26s   p(90)=13.54s p(95)=16.57s  
     iterations.....................: 12702  62.053953/s
     vus............................: 241    min=241     max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e1a1858a-d6a6-4e3a-5532-ffd33ccecb00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7e927bcb-6ffb-4117-802a-72d55ae61300/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  95% — ✓ 12303 / ✗ 636
     ✗ no graphql errors
      ↳  94% — ✓ 12273 / ✗ 666
     ✗ valid response structure
      ↳  99% — ✓ 12273 / ✗ 30

     checks.........................: 96.51% ✓ 36849     ✗ 1332 
     data_received..................: 63 MB  297 kB/s
     data_sent......................: 15 MB  72 kB/s
     http_req_blocked...............: avg=1.26ms   min=1.4µs    med=2.4µs  max=185.98ms p(90)=15.7µs p(95)=3.41ms  
     http_req_connecting............: avg=1.2ms    min=0s       med=0s     max=185.74ms p(90)=0s     p(95)=3.11ms  
     http_req_duration..............: avg=6.36s    min=610.24ms med=3.01s  max=1m0s     p(90)=3.6s   p(95)=53.61s  
       { expected_response:true }...: avg=3.59s    min=610.24ms med=3s     max=59.5s    p(90)=3.41s  p(95)=3.63s   
   ✓ http_req_failed................: 4.91%  ✓ 636       ✗ 12303
     http_req_receiving.............: avg=59.31µs  min=0s       med=57.1µs max=5.88ms   p(90)=79.8µs p(95)=87.3µs  
     http_req_sending...............: avg=151.25µs min=7.9µs    med=14µs   max=100.39ms p(90)=32.1µs p(95)=246.18µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=6.36s    min=610.16ms med=3.01s  max=1m0s     p(90)=3.6s   p(95)=53.6s   
     http_reqs......................: 12939  60.635371/s
     iteration_duration.............: avg=6.37s    min=610.52ms med=3.02s  max=1m0s     p(90)=3.6s   p(95)=53.64s  
     iterations.....................: 12939  60.635371/s
     vus............................: 39     min=39      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7d2c32a4-fae6-4603-7515-b9ebf6b56300/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/de4e1118-e8c1-4896-cb80-12d39bc2bd00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server-node16`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  74% — ✓ 8429 / ✗ 2910
     ✗ valid response structure
      ↳  74% — ✓ 8429 / ✗ 2910

     checks.........................: 82.89% ✓ 28197     ✗ 5820 
     data_received..................: 54 MB  264 kB/s
     data_sent......................: 14 MB  66 kB/s
     http_req_blocked...............: avg=4.43ms   min=1.3µs    med=2.4µs  max=262.98ms p(90)=3.8µs  p(95)=15.5µs 
     http_req_connecting............: avg=4.37ms   min=0s       med=0s     max=262.94ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=7.12s    min=419.61ms med=6.44s  max=22.24s   p(90)=12.97s p(95)=14.49s 
       { expected_response:true }...: avg=7.12s    min=419.61ms med=6.44s  max=22.24s   p(90)=12.97s p(95)=14.49s 
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 11339
     http_req_receiving.............: avg=123.53µs min=22.1µs   med=53.8µs max=46.5ms   p(90)=78.8µs p(95)=88.9µs 
     http_req_sending...............: avg=1.41ms   min=7.1µs    med=13.1µs max=144.38ms p(90)=28.5µs p(95)=99.51µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=7.12s    min=419.53ms med=6.44s  max=22.24s   p(90)=12.97s p(95)=14.48s 
     http_reqs......................: 11339  55.712445/s
     iteration_duration.............: avg=7.13s    min=420.27ms med=6.44s  max=22.24s   p(90)=12.98s p(95)=14.55s 
     iterations.....................: 11339  55.712445/s
     vus............................: 130    min=130     max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0555692e-1a6b-49ea-8500-60c3e60ad000/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e8861f30-0729-4d4a-1832-b9837cef5c00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  98% — ✓ 8784 / ✗ 92
     ✗ no graphql errors
      ↳  65% — ✓ 5821 / ✗ 3055
     ✗ valid response structure
      ↳  66% — ✓ 5821 / ✗ 2963

     checks.........................: 76.97% ✓ 20426     ✗ 6110 
     data_received..................: 38 MB  187 kB/s
     data_sent......................: 11 MB  52 kB/s
     http_req_blocked...............: avg=3.24ms   min=1.5µs    med=2.9µs   max=179.52ms p(90)=5.9µs   p(95)=12.51ms 
     http_req_connecting............: avg=3.14ms   min=0s       med=0s      max=179.35ms p(90)=0s      p(95)=10.1ms  
     http_req_duration..............: avg=9.1s     min=190.69ms med=8.03s   max=1m0s     p(90)=18.16s  p(95)=20.91s  
       { expected_response:true }...: avg=8.57s    min=190.69ms med=7.96s   max=55.68s   p(90)=16.69s  p(95)=20.77s  
   ✓ http_req_failed................: 1.03%  ✓ 92        ✗ 8784 
     http_req_receiving.............: avg=110.63µs min=0s       med=61.3µs  max=71.51ms  p(90)=113.3µs p(95)=150.62µs
     http_req_sending...............: avg=819.79µs min=10.3µs   med=17.39µs max=81.21ms  p(90)=83.9µs  p(95)=1.06ms  
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=9.1s     min=190.59ms med=8.03s   max=1m0s     p(90)=18.16s  p(95)=20.91s  
     http_reqs......................: 8876   43.674108/s
     iteration_duration.............: avg=9.1s     min=191.38ms med=8.03s   max=1m0s     p(90)=18.16s  p(95)=20.91s  
     iterations.....................: 8876   43.674108/s
     vus............................: 180    min=180     max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2c61f232-0e53-4862-1f9b-214ffebe5000/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/bb3a5cd3-eff0-47a7-f633-ffcd6b535a00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-uws`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  72% — ✓ 5976 / ✗ 2318
     ✗ valid response structure
      ↳  72% — ✓ 5976 / ✗ 2318

     checks.........................: 81.36% ✓ 20246     ✗ 4636 
     data_received..................: 69 MB  317 kB/s
     data_sent......................: 9.8 MB 45 kB/s
     http_req_blocked...............: avg=7.4ms   min=1.7µs  med=3.1µs  max=267.74ms p(90)=6.1µs   p(95)=124.33µs
     http_req_connecting............: avg=7.33ms  min=0s     med=0s     max=267.64ms p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=10.09s  min=2.05s  med=8.93s  max=28.29s   p(90)=16.38s  p(95)=19.78s  
       { expected_response:true }...: avg=10.09s  min=2.05s  med=8.93s  max=28.29s   p(90)=16.38s  p(95)=19.78s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 8294 
     http_req_receiving.............: avg=109.6µs min=22µs   med=72.3µs max=73.14ms  p(90)=146.4µs p(95)=185.93µs
     http_req_sending...............: avg=1.89ms  min=11.3µs med=20.1µs max=109.12ms p(90)=51.7µs  p(95)=4.05ms  
     http_req_tls_handshaking.......: avg=0s      min=0s     med=0s     max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=10.09s  min=2.05s  med=8.93s  max=28.29s   p(90)=16.38s  p(95)=19.78s  
     http_reqs......................: 8294   38.276132/s
     iteration_duration.............: avg=10.1s   min=2.05s  med=8.94s  max=28.29s   p(90)=16.4s   p(95)=19.78s  
     iterations.....................: 8294   38.276132/s
     vus............................: 83     min=83      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ddc142e6-7c3b-4f0f-a655-d515116c4500/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3b2d58c4-9311-4d08-ab45-ab2020341900/public" alt="HTTP Overview" />


  </details>