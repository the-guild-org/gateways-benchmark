## Overview for: `scenarios/fed-v1-constants-vus-subgraphs-delay`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. All subgraphs have an intentional delay on replying, and this creates additional pressure on the gateway's memory. We are running a heavy load of concurrent VUs to measure response time and other stats, during stress. It measure things like memory usage, CPU usage, response times.


This scenario was running 350 VUs over 400s


### Comparison


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3d2d389a-9ca0-40eb-950e-e1ac64e6eb00/public" alt="Comparison" />


| Gateway              | RPS ⬇️ |        Requests        |          Duration          |
| :------------------- | :----: | :--------------------: | :------------------------: |
| wundergraph          |  1041  | 416672 total, 0 failed |   avg: 272ms, p95: 527ms   |
| mesh-bun             |  437   | 175202 total, 0 failed |  avg: 796ms, p95: 1111ms   |
| mesh                 |  278   | 111488 total, 0 failed |  avg: 1254ms, p95: 1532ms  |
| apollo-router        |   43   | 17656 total, 0 failed  | avg: 7971ms, p95: 10743ms  |
| apollo-server        |   40   | 16362 total, 0 failed  | avg: 8587ms, p95: 12595ms  |
| mesh-supergraph      |   36   | 15015 total, 0 failed  | avg: 9447ms, p95: 10415ms  |
| apollo-server-node16 |   27   | 11027 total, 0 failed  | avg: 12754ms, p95: 20010ms |
| mercurius            |   7    | 3140 total, 687 failed | avg: 44878ms, p95: 60001ms |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 416672

     checks.........................: 66.66% ✓ 833344      ✗ 416672
     data_received..................: 60 MB  151 kB/s
     data_sent......................: 495 MB 1.2 MB/s
     http_req_blocked...............: avg=88.92µs  min=1.1µs    med=2.8µs    max=795.72ms p(90)=3.9µs    p(95)=4.89µs  
     http_req_connecting............: avg=79.03µs  min=0s       med=0s       max=795.65ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=271.66ms min=321.9µs  med=259ms    max=1.9s     p(90)=462.67ms p(95)=527.36ms
       { expected_response:true }...: avg=271.66ms min=321.9µs  med=259ms    max=1.9s     p(90)=462.67ms p(95)=527.36ms
     http_req_failed................: 0.00%  ✓ 0           ✗ 416672
     http_req_receiving.............: avg=23.02ms  min=8.5µs    med=28.1µs   max=1.47s    p(90)=39.81ms  p(95)=169.11ms
     http_req_sending...............: avg=2.43ms   min=5.9µs    med=13.89µs  max=1.22s    p(90)=116.5µs  p(95)=496.24µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=246.21ms min=289.7µs  med=248.45ms max=863.54ms p(90)=408.89ms p(95)=449.21ms
     http_reqs......................: 416672 1041.125391/s
     iteration_duration.............: avg=335.58ms min=938.91µs med=304.53ms max=2.66s    p(90)=563.91ms p(95)=688.1ms 
     iterations.....................: 416672 1041.125391/s
     vus............................: 350    min=350       max=350 
     vus_max........................: 350    min=350       max=350 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/70b0a1d9-3109-4c1c-f9d2-e3bff4991400/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2c79bc2b-d8c9-45ba-5aff-5a37e8e19200/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2f379edb-c0f1-476b-c604-410dca630500/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  0% — ✓ 0 / ✗ 175202
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 175202

     checks.........................: 33.33% ✓ 175202     ✗ 350404
     data_received..................: 167 MB 416 kB/s
     data_sent......................: 208 MB 519 kB/s
     http_req_blocked...............: avg=117.26µs min=1.1µs    med=2.2µs    max=242.81ms p(90)=3.4µs   p(95)=4µs    
     http_req_connecting............: avg=109.51µs min=0s       med=0s       max=115.98ms p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=795.91ms min=186.33ms med=836.64ms max=1.99s    p(90)=1.05s   p(95)=1.11s  
       { expected_response:true }...: avg=795.91ms min=186.33ms med=836.64ms max=1.99s    p(90)=1.05s   p(95)=1.11s  
     http_req_failed................: 0.00%  ✓ 0          ✗ 175202
     http_req_receiving.............: avg=3.4ms    min=9.79µs   med=25.3µs   max=440.18ms p(90)=671.6µs p(95)=6.17ms 
     http_req_sending...............: avg=1.09ms   min=6.5µs    med=12.1µs   max=416.17ms p(90)=102.5µs p(95)=172.5µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s       p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=791.4ms  min=186.28ms med=832.9ms  max=1.99s    p(90)=1.04s   p(95)=1.1s   
     http_reqs......................: 175202 437.416526/s
     iteration_duration.............: avg=799.58ms min=214.89ms med=839.77ms max=2.05s    p(90)=1.05s   p(95)=1.11s  
     iterations.....................: 175202 437.416526/s
     vus............................: 350    min=350      max=350 
     vus_max........................: 350    min=350      max=350 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/659bd726-4b47-4df7-e274-6b5118c29600/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c53fd96e-dc45-42b7-8a13-572a814d8700/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/37f83038-f400-40a2-832b-c6ac05f70e00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 111488

     checks.........................: 66.66% ✓ 222976     ✗ 111488
     data_received..................: 126 MB 315 kB/s
     data_sent......................: 132 MB 331 kB/s
     http_req_blocked...............: avg=361.32µs min=1.3µs    med=2.7µs  max=232.54ms p(90)=4µs      p(95)=4.8µs  
     http_req_connecting............: avg=351.39µs min=0s       med=0s     max=216.15ms p(90)=0s       p(95)=0s     
     http_req_duration..............: avg=1.25s    min=587.47ms med=1.23s  max=3.32s    p(90)=1.45s    p(95)=1.53s  
       { expected_response:true }...: avg=1.25s    min=587.47ms med=1.23s  max=3.32s    p(90)=1.45s    p(95)=1.53s  
     http_req_failed................: 0.00%  ✓ 0          ✗ 111488
     http_req_receiving.............: avg=2.78ms   min=12.1µs   med=35.7µs max=347.89ms p(90)=419.36µs p(95)=4.27ms 
     http_req_sending...............: avg=929.94µs min=7.2µs    med=13.8µs max=368.46ms p(90)=107.7µs  p(95)=335.1µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=1.25s    min=587.41ms med=1.23s  max=3.28s    p(90)=1.44s    p(95)=1.52s  
     http_reqs......................: 111488 278.398327/s
     iteration_duration.............: avg=1.25s    min=588.07ms med=1.24s  max=3.48s    p(90)=1.45s    p(95)=1.53s  
     iterations.....................: 111488 278.398327/s
     vus............................: 350    min=350      max=350 
     vus_max........................: 350    min=350      max=350 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/eb7f0e52-bd98-41a2-d9cf-a2f43b4c8800/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/99977270-6cf6-4c55-e192-d03ded81b600/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/933d6949-561c-4743-ae57-db5e1f6a3800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 52968     ✗ 0    
     data_received..................: 1.5 GB  3.8 MB/s
     data_sent......................: 21 MB   52 kB/s
     http_req_blocked...............: avg=529.36µs min=2µs    med=4.89µs  max=96.08ms  p(90)=6.4µs   p(95)=7.6µs   
     http_req_connecting............: avg=506.19µs min=0s     med=0s      max=70.44ms  p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=7.97s    min=2.46s  med=7.87s   max=16.94s   p(90)=10.02s  p(95)=10.74s  
       { expected_response:true }...: avg=7.97s    min=2.46s  med=7.87s   max=16.94s   p(90)=10.02s  p(95)=10.74s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 17656
     http_req_receiving.............: avg=749.94µs min=58.6µs med=119.2µs max=271.07ms p(90)=339.3µs p(95)=510.77µs
     http_req_sending...............: avg=693.16µs min=9.5µs  med=27.7µs  max=230.68ms p(90)=45.2µs  p(95)=889.3µs 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=7.96s    min=2.46s  med=7.87s   max=16.94s   p(90)=10.02s  p(95)=10.74s  
     http_reqs......................: 17656   43.501767/s
     iteration_duration.............: avg=7.99s    min=2.48s  med=7.89s   max=16.94s   p(90)=10.05s  p(95)=10.76s  
     iterations.....................: 17656   43.501767/s
     vus............................: 4       min=4       max=350
     vus_max........................: 350     min=350     max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a631d2dd-6c9c-4489-36e1-d57c348c4200/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/efd7a626-826f-4d87-7b63-ae28de616c00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a287716b-599a-4294-0c90-012a50a97b00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 49086     ✗ 0    
     data_received..................: 1.4 GB  3.5 MB/s
     data_sent......................: 19 MB   48 kB/s
     http_req_blocked...............: avg=428.91µs min=1.5µs  med=3.4µs  max=143.47ms p(90)=4.8µs    p(95)=5.8µs 
     http_req_connecting............: avg=390.56µs min=0s     med=0s     max=39.07ms  p(90)=0s       p(95)=0s    
     http_req_duration..............: avg=8.58s    min=3.7s   med=8.21s  max=16.61s   p(90)=11.59s   p(95)=12.59s
       { expected_response:true }...: avg=8.58s    min=3.7s   med=8.21s  max=16.61s   p(90)=11.59s   p(95)=12.59s
     http_req_failed................: 0.00%   ✓ 0         ✗ 16362
     http_req_receiving.............: avg=5.85ms   min=42.1µs med=84.3µs max=707.92ms p(90)=463.09µs p(95)=6.99ms
     http_req_sending...............: avg=2.04ms   min=7.1µs  med=17.3µs max=800.38ms p(90)=83.09µs  p(95)=9.99ms
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s       p(95)=0s    
     http_req_waiting...............: avg=8.57s    min=3.7s   med=8.2s   max=16.6s    p(90)=11.58s   p(95)=12.53s
     http_reqs......................: 16362   40.355166/s
     iteration_duration.............: avg=8.62s    min=3.73s  med=8.24s  max=16.71s   p(90)=11.64s   p(95)=12.65s
     iterations.....................: 16362   40.355166/s
     vus............................: 53      min=53      max=350
     vus_max........................: 350     min=350     max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8335b11f-ac36-425e-ed64-60122e0fd100/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3e568bdd-cfaa-4b57-d0f6-874cca342c00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/491d880c-0f43-4040-eaff-824f06262700/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 15015

     checks.........................: 66.66% ✓ 30030     ✗ 15015
     data_received..................: 1.3 GB 3.2 MB/s
     data_sent......................: 18 MB  44 kB/s
     http_req_blocked...............: avg=536.97µs min=1.9µs  med=3.6µs   max=38.58ms  p(90)=5.3µs    p(95)=13.63µs
     http_req_connecting............: avg=526.3µs  min=0s     med=0s      max=37.68ms  p(90)=0s       p(95)=0s     
     http_req_duration..............: avg=9.44s    min=7.25s  med=9.41s   max=13.06s   p(90)=10.13s   p(95)=10.41s 
       { expected_response:true }...: avg=9.44s    min=7.25s  med=9.41s   max=13.06s   p(90)=10.13s   p(95)=10.41s 
     http_req_failed................: 0.00%  ✓ 0         ✗ 15015
     http_req_receiving.............: avg=563.15µs min=65.4µs med=133.8µs max=976.24ms p(90)=364.06µs p(95)=442.4µs
     http_req_sending...............: avg=168.12µs min=9.5µs  med=21.2µs  max=60.06ms  p(90)=35.79µs  p(95)=46.53µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s       p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=9.44s    min=7.25s  med=9.41s   max=13.06s   p(90)=10.13s   p(95)=10.41s 
     http_reqs......................: 15015  36.827876/s
     iteration_duration.............: avg=9.45s    min=7.25s  med=9.41s   max=13.07s   p(90)=10.13s   p(95)=10.41s 
     iterations.....................: 15015  36.827876/s
     vus............................: 92     min=92      max=350
     vus_max........................: 350    min=350     max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8916c41c-4dc4-46e3-d34a-e92594d8e000/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/aeef08d5-9fb3-467a-5dea-52aec0e95400/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/98742874-3f15-41ec-44cb-c79a70c02100/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server-node16`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 33081     ✗ 0    
     data_received..................: 969 MB  2.4 MB/s
     data_sent......................: 13 MB   32 kB/s
     http_req_blocked...............: avg=3.19ms min=2.29µs med=5.2µs   max=319.04ms p(90)=7.2µs    p(95)=12.1µs 
     http_req_connecting............: avg=2.98ms min=0s     med=0s      max=215.01ms p(90)=0s       p(95)=0s     
     http_req_duration..............: avg=12.75s min=3.9s   med=11.9s   max=26.17s   p(90)=17.83s   p(95)=20.01s 
       { expected_response:true }...: avg=12.75s min=3.9s   med=11.9s   max=26.17s   p(90)=17.83s   p(95)=20.01s 
     http_req_failed................: 0.00%   ✓ 0         ✗ 11027
     http_req_receiving.............: avg=5.96ms min=62.2µs med=124.3µs max=508.63ms p(90)=980.93µs p(95)=8.19ms 
     http_req_sending...............: avg=4.55ms min=9.1µs  med=27µs    max=560.51ms p(90)=118.84µs p(95)=13.83ms
     http_req_tls_handshaking.......: avg=0s     min=0s     med=0s      max=0s       p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=12.74s min=3.9s   med=11.9s   max=26.17s   p(90)=17.76s   p(95)=19.99s 
     http_reqs......................: 11027   27.089715/s
     iteration_duration.............: avg=12.81s min=3.91s  med=11.95s  max=26.35s   p(90)=17.91s   p(95)=20.07s 
     iterations.....................: 11027   27.089715/s
     vus............................: 28      min=28      max=350
     vus_max........................: 350     min=350     max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8f4c76b6-d6ce-480e-bcb0-3a09e98f3f00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/28e4c387-e80b-48ed-594d-41b2e051f400/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5d9870fa-3c1f-4610-9aed-66d46f8c2500/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  78% — ✓ 2453 / ✗ 687
     ✗ no graphql errors
      ↳  78% — ✓ 2453 / ✗ 687
     ✓ valid response structure

     checks.........................: 84.26% ✓ 7359     ✗ 1374 
     data_received..................: 215 MB 501 kB/s
     data_sent......................: 3.9 MB 9.1 kB/s
     http_req_blocked...............: avg=4.24ms   min=2µs    med=4µs    max=62.44ms p(90)=23.72ms  p(95)=42.23ms 
     http_req_connecting............: avg=4.18ms   min=0s     med=0s     max=53.18ms p(90)=23.35ms  p(95)=41.99ms 
     http_req_duration..............: avg=44.87s   min=10.87s med=48.18s max=1m0s    p(90)=1m0s     p(95)=1m0s    
       { expected_response:true }...: avg=40.64s   min=10.87s med=41.02s max=59.99s  p(90)=56.1s    p(95)=58.51s  
     http_req_failed................: 21.87% ✓ 687      ✗ 2453 
     http_req_receiving.............: avg=182.77µs min=0s     med=99µs   max=22.54ms p(90)=301.01µs p(95)=439.91µs
     http_req_sending...............: avg=521.75µs min=11.6µs med=26µs   max=54.34ms p(90)=818.31µs p(95)=2.84ms  
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=44.87s   min=10.87s med=48.18s max=1m0s    p(90)=1m0s     p(95)=1m0s    
     http_reqs......................: 3140   7.302238/s
     iteration_duration.............: avg=44.88s   min=10.88s med=48.19s max=1m0s    p(90)=1m0s     p(95)=1m0s    
     iterations.....................: 3140   7.302238/s
     vus............................: 157    min=157    max=350
     vus_max........................: 350    min=350    max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0831bb90-0792-4b28-cc0d-468928cb0c00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9f7bd0ea-038c-4ae9-124a-b0655b3f0700/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/619fb492-c202-43a7-a099-8ad260c25b00/public" alt="HTTP Overview" />


  </details>