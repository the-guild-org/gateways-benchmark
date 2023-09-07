## Overview for: `scenarios/fed-v1-constant-vus-over-time`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. It's being executed with a constant amount of VUs over a fixed amount of time. It measure things like memory usage, CPU usage, average RPS. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was running 350 VUs over 400s


### Comparison


| Gateway                             | RPS ⬇️ |        Requests         |          Duration          |
| :---------------------------------- | :----: | :---------------------: | :------------------------: |
| wundergraph                         |  965   | 386449 total, 0 failed  |   avg: 295ms, p95: 583ms   |
| mesh-bun                            |  318   | 127762 total, 0 failed  |  avg: 1093ms, p95: 1624ms  |
| mesh                                |  152   |  61040 total, 0 failed  |  avg: 2295ms, p95: 3132ms  |
| apollo-router                       |   50   |  20508 total, 0 failed  |  avg: 6856ms, p95: 9516ms  |
| stitching-federation-with-yoga-bun  |   48   |  19689 total, 0 failed  | avg: 7043ms, p95: 12313ms  |
| apollo-server                       |   40   |  16459 total, 0 failed  | avg: 8534ms, p95: 13142ms  |
| stitching-federation-with-yoga-uws  |   35   |  14538 total, 0 failed  | avg: 9699ms, p95: 11560ms  |
| apollo-gateway-with-yoga            |   33   |  13701 total, 0 failed  | avg: 10300ms, p95: 15531ms |
| apollo-gateway-with-yoga-bun        |   30   |  12338 total, 0 failed  | avg: 11047ms, p95: 16652ms |
| apollo-gateway-with-yoga-uws        |   27   |  11322 total, 0 failed  | avg: 12470ms, p95: 19452ms |
| apollo-server-node16                |   27   |  11105 total, 0 failed  | avg: 12661ms, p95: 18931ms |
| mesh-supergraph                     |   24   |  9984 total, 0 failed   | avg: 14179ms, p95: 16246ms |
| stitching-federation-with-yoga-deno |   21   |  8666 total, 0 failed   | avg: 16381ms, p95: 20724ms |
| stitching-federation-with-yoga      |   20   |  8601 total, 42 failed  | avg: 16483ms, p95: 19892ms |
| mercurius                           |   7    | 3246 total, 1450 failed | avg: 43558ms, p95: 60001ms |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 386449

     checks.........................: 66.66% ✓ 772898     ✗ 386449
     data_received..................: 56 MB  140 kB/s
     data_sent......................: 459 MB 1.1 MB/s
     http_req_blocked...............: avg=205.06µs min=1.1µs    med=2.9µs    max=973.01ms p(90)=4.5µs    p(95)=5.9µs   
     http_req_connecting............: avg=190.44µs min=0s       med=0s       max=972.93ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=294.95ms min=362.71µs med=275.98ms max=1.8s     p(90)=507.52ms p(95)=583.05ms
       { expected_response:true }...: avg=294.95ms min=362.71µs med=275.98ms max=1.8s     p(90)=507.52ms p(95)=583.05ms
     http_req_failed................: 0.00%  ✓ 0          ✗ 386449
     http_req_receiving.............: avg=27.32ms  min=9.29µs   med=31.8µs   max=1.51s    p(90)=68.97ms  p(95)=193.19ms
     http_req_sending...............: avg=2.88ms   min=6µs      med=14.2µs   max=1.53s    p(90)=131.6µs  p(95)=652.87µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=264.74ms min=295.7µs  med=263.8ms  max=890.64ms p(90)=442.25ms p(95)=484.54ms
     http_reqs......................: 386449 965.481521/s
     iteration_duration.............: avg=361.72ms min=965.12µs med=326.86ms max=2.85s    p(90)=616.89ms p(95)=749.9ms 
     iterations.....................: 386449 965.481521/s
     vus............................: 350    min=350      max=350 
     vus_max........................: 350    min=350      max=350 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8c4d37fb-7a9d-4312-b40b-e141d4a85e00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/af6c4950-f99c-41b5-16d4-6bec63f91400/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8b17ac64-a754-449b-5d51-f16e6334ad00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  0% — ✓ 0 / ✗ 127762
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 127762

     checks.........................: 33.33% ✓ 127762     ✗ 255524
     data_received..................: 122 MB 303 kB/s
     data_sent......................: 152 MB 378 kB/s
     http_req_blocked...............: avg=46.88µs min=1.1µs    med=2.4µs  max=463.96ms p(90)=3.6µs    p(95)=5.2µs 
     http_req_connecting............: avg=29.36µs min=0s       med=0s     max=33.84ms  p(90)=0s       p(95)=0s    
     http_req_duration..............: avg=1.09s   min=289.45ms med=1.14s  max=2.32s    p(90)=1.52s    p(95)=1.62s 
       { expected_response:true }...: avg=1.09s   min=289.45ms med=1.14s  max=2.32s    p(90)=1.52s    p(95)=1.62s 
     http_req_failed................: 0.00%  ✓ 0          ✗ 127762
     http_req_receiving.............: avg=3.16ms  min=12.6µs   med=31.7µs max=542.2ms  p(90)=429.18µs p(95)=4.47ms
     http_req_sending...............: avg=1.61ms  min=8.69µs   med=14.1µs max=555.24ms p(90)=126.4µs  p(95)=457µs 
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s     max=0s       p(90)=0s       p(95)=0s    
     http_req_waiting...............: avg=1.08s   min=287.66ms med=1.14s  max=2.13s    p(90)=1.51s    p(95)=1.61s 
     http_reqs......................: 127762 318.745975/s
     iteration_duration.............: avg=1.09s   min=316.38ms med=1.14s  max=2.35s    p(90)=1.53s    p(95)=1.62s 
     iterations.....................: 127762 318.745975/s
     vus............................: 57     min=57       max=350 
     vus_max........................: 350    min=350      max=350 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f49de915-6059-42f5-a1aa-ff667b1cfb00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c7a1d4cc-5ae6-46bf-75f3-9ac6a0e5e100/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/15f538c5-17bf-469f-a48d-c31a5748b400/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 61040

     checks.........................: 66.66% ✓ 122080     ✗ 61040
     data_received..................: 69 MB  172 kB/s
     data_sent......................: 73 MB  181 kB/s
     http_req_blocked...............: avg=452.54µs min=1.3µs    med=3.1µs   max=141.21ms p(90)=6µs     p(95)=8.3µs   
     http_req_connecting............: avg=427.79µs min=0s       med=0s      max=141.17ms p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=2.29s    min=561.98ms med=2.25s   max=5.35s    p(90)=2.91s   p(95)=3.13s   
       { expected_response:true }...: avg=2.29s    min=561.98ms med=2.25s   max=5.35s    p(90)=2.91s   p(95)=3.13s   
     http_req_failed................: 0.00%  ✓ 0          ✗ 61040
     http_req_receiving.............: avg=5.22ms   min=17.6µs   med=42.7µs  max=532.08ms p(90)=338.7µs p(95)=6.39ms  
     http_req_sending...............: avg=1.37ms   min=10.8µs   med=17.89µs max=585.91ms p(90)=138.5µs p(95)=921.76µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=2.28s    min=561.9ms  med=2.24s   max=5.32s    p(90)=2.91s   p(95)=3.11s   
     http_reqs......................: 61040  152.045951/s
     iteration_duration.............: avg=2.29s    min=562.96ms med=2.25s   max=5.41s    p(90)=2.92s   p(95)=3.14s   
     iterations.....................: 61040  152.045951/s
     vus............................: 348    min=348      max=350
     vus_max........................: 350    min=350      max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/27477ba2-8d7e-48e7-9920-f093db9e6900/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/72d28a15-63fa-4790-abcb-905c614bb500/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e7922100-286a-4d88-2b73-cccf25338800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 61524     ✗ 0    
     data_received..................: 1.8 GB  4.4 MB/s
     data_sent......................: 24 MB   60 kB/s
     http_req_blocked...............: avg=430.2µs  min=1.4µs  med=3.1µs   max=76.88ms  p(90)=4.4µs   p(95)=5.2µs   
     http_req_connecting............: avg=407.51µs min=0s     med=0s      max=37.34ms  p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=6.85s    min=1.82s  med=6.74s   max=14.15s   p(90)=8.77s   p(95)=9.51s   
       { expected_response:true }...: avg=6.85s    min=1.82s  med=6.74s   max=14.15s   p(90)=8.77s   p(95)=9.51s   
     http_req_failed................: 0.00%   ✓ 0         ✗ 20508
     http_req_receiving.............: avg=548.41µs min=42.4µs med=80.6µs  max=202.36ms p(90)=210.2µs p(95)=308.86µs
     http_req_sending...............: avg=588.73µs min=7.9µs  med=18.39µs max=140.39ms p(90)=31.9µs  p(95)=539.92µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=6.85s    min=1.82s  med=6.74s   max=14.15s   p(90)=8.77s   p(95)=9.51s   
     http_reqs......................: 20508   50.639257/s
     iteration_duration.............: avg=6.87s    min=1.82s  med=6.76s   max=14.18s   p(90)=8.79s   p(95)=9.53s   
     iterations.....................: 20508   50.639257/s
     vus............................: 25      min=25      max=350
     vus_max........................: 350     min=350     max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/fab28a48-6dc4-4153-9ac9-ea480aafcb00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5a502737-3a3d-4038-7b4a-1e57785fde00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6d0a5ff6-f86a-4f2a-c1b3-c8fe5ed1ea00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 59067     ✗ 0    
     data_received..................: 1.7 GB  4.3 MB/s
     data_sent......................: 23 MB   58 kB/s
     http_req_blocked...............: avg=2.1ms   min=1.7µs    med=3.8µs   max=269.28ms p(90)=5.9µs   p(95)=7.6µs   
     http_req_connecting............: avg=2.01ms  min=0s       med=0s      max=204.01ms p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=7.04s   min=264.17ms med=6.53s   max=14.8s    p(90)=8.77s   p(95)=12.31s  
       { expected_response:true }...: avg=7.04s   min=264.17ms med=6.53s   max=14.8s    p(90)=8.77s   p(95)=12.31s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 19689
     http_req_receiving.............: avg=44.54ms min=50.7µs   med=91.3µs  max=4.26s    p(90)=14.62ms p(95)=192.66ms
     http_req_sending...............: avg=7.42ms  min=7.5µs    med=18.39µs max=906.92ms p(90)=12.61ms p(95)=39.58ms 
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s      max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=6.99s   min=258.15ms med=6.5s    max=14.56s   p(90)=7.9s    p(95)=12.27s  
     http_reqs......................: 19689   48.593479/s
     iteration_duration.............: avg=7.15s   min=357.72ms med=6.65s   max=14.82s   p(90)=8.96s   p(95)=12.45s  
     iterations.....................: 19689   48.593479/s
     vus............................: 39      min=39      max=350
     vus_max........................: 350     min=350     max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4ec2b633-6505-4d0c-676b-df2807dffd00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f36c0d6b-1042-4654-aa0d-9ebcbd4b4e00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/36f2ef2f-3377-4ed1-4312-80e545b8cf00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 49377     ✗ 0    
     data_received..................: 1.4 GB  3.6 MB/s
     data_sent......................: 20 MB   48 kB/s
     http_req_blocked...............: avg=465.88µs min=1.4µs  med=3.1µs  max=154.82ms p(90)=4.5µs    p(95)=5.5µs  
     http_req_connecting............: avg=435.11µs min=0s     med=0s     max=41.05ms  p(90)=0s       p(95)=0s     
     http_req_duration..............: avg=8.53s    min=1.56s  med=7.94s  max=28.44s   p(90)=11.87s   p(95)=13.14s 
       { expected_response:true }...: avg=8.53s    min=1.56s  med=7.94s  max=28.44s   p(90)=11.87s   p(95)=13.14s 
     http_req_failed................: 0.00%   ✓ 0         ✗ 16459
     http_req_receiving.............: avg=5.43ms   min=41.6µs med=78.4µs max=572.65ms p(90)=403.04µs p(95)=6.07ms 
     http_req_sending...............: avg=2.65ms   min=7.3µs  med=16.6µs max=648.6ms  p(90)=306.6µs  p(95)=13.91ms
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=8.52s    min=1.56s  med=7.93s  max=28.43s   p(90)=11.86s   p(95)=13.14s 
     http_reqs......................: 16459   40.540067/s
     iteration_duration.............: avg=8.58s    min=1.57s  med=8.01s  max=28.63s   p(90)=11.98s   p(95)=13.16s 
     iterations.....................: 16459   40.540067/s
     vus............................: 14      min=14      max=350
     vus_max........................: 350     min=350     max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c3855da0-c09e-43d4-f56e-4233488e7900/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0bce712a-968a-407e-6b5b-7af9f7024300/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7ea0e532-03d4-4126-d90a-1eaffe101800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-uws`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 43614     ✗ 0    
     data_received..................: 1.3 GB  3.1 MB/s
     data_sent......................: 17 MB   42 kB/s
     http_req_blocked...............: avg=268.72µs min=1.6µs  med=3.7µs  max=84.72ms  p(90)=5.3µs    p(95)=6.6µs 
     http_req_connecting............: avg=231.86µs min=0s     med=0s     max=37.85ms  p(90)=0s       p(95)=0s    
     http_req_duration..............: avg=9.69s    min=5.14s  med=9.66s  max=13.96s   p(90)=11.04s   p(95)=11.56s
       { expected_response:true }...: avg=9.69s    min=5.14s  med=9.66s  max=13.96s   p(90)=11.04s   p(95)=11.56s
     http_req_failed................: 0.00%   ✓ 0         ✗ 14538
     http_req_receiving.............: avg=2.15ms   min=52.8µs med=93.7µs max=1.15s    p(90)=368.06µs p(95)=3.5ms 
     http_req_sending...............: avg=1.09ms   min=7.8µs  med=17.7µs max=232.32ms p(90)=44.4µs   p(95)=1.83ms
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s       p(95)=0s    
     http_req_waiting...............: avg=9.69s    min=5.14s  med=9.66s  max=13.89s   p(90)=11.04s   p(95)=11.54s
     http_reqs......................: 14538   35.698924/s
     iteration_duration.............: avg=9.73s    min=5.16s  med=9.69s  max=14.43s   p(90)=11.07s   p(95)=11.58s
     iterations.....................: 14538   35.698924/s
     vus............................: 33      min=33      max=350
     vus_max........................: 350     min=350     max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/50023ddf-e69d-431c-7c5c-7662e8ccc600/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/333588d3-c74b-431c-f9e3-877618564500/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c58763d9-b2e4-455f-5528-b4198e706400/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 41103     ✗ 0    
     data_received..................: 1.2 GB  2.9 MB/s
     data_sent......................: 16 MB   40 kB/s
     http_req_blocked...............: avg=1.21ms min=1.7µs  med=4.5µs   max=98.28ms  p(90)=6.5µs    p(95)=8.8µs  
     http_req_connecting............: avg=1.18ms min=0s     med=0s      max=92.69ms  p(90)=0s       p(95)=0s     
     http_req_duration..............: avg=10.29s min=2.21s  med=9.99s   max=32.02s   p(90)=14.24s   p(95)=15.53s 
       { expected_response:true }...: avg=10.29s min=2.21s  med=9.99s   max=32.02s   p(90)=14.24s   p(95)=15.53s 
     http_req_failed................: 0.00%   ✓ 0         ✗ 13701
     http_req_receiving.............: avg=7.71ms min=54.3µs med=103.2µs max=650.66ms p(90)=865.61µs p(95)=16.5ms 
     http_req_sending...............: avg=3.68ms min=8µs    med=23.8µs  max=679.42ms p(90)=838.8µs  p(95)=15.49ms
     http_req_tls_handshaking.......: avg=0s     min=0s     med=0s      max=0s       p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=10.28s min=2.21s  med=9.98s   max=32.02s   p(90)=14.22s   p(95)=15.52s 
     http_reqs......................: 13701   33.512847/s
     iteration_duration.............: avg=10.37s min=2.22s  med=10.09s  max=32.04s   p(90)=14.39s   p(95)=15.62s 
     iterations.....................: 13701   33.512847/s
     vus............................: 6       min=6       max=350
     vus_max........................: 350     min=350     max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f39a4487-00c2-413f-2de1-5c136b788e00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/17de6e87-fb96-4657-4a42-4b1b12a58200/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/508610d7-5aa2-4213-95a1-e80b22942d00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 37014     ✗ 0    
     data_received..................: 1.1 GB  2.6 MB/s
     data_sent......................: 15 MB   36 kB/s
     http_req_blocked...............: avg=3.43ms   min=2µs    med=4.3µs   max=511.2ms  p(90)=7.7µs    p(95)=19.31µs 
     http_req_connecting............: avg=3.26ms   min=0s     med=0s      max=203.06ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=11.04s   min=1.4s   med=10.11s  max=20.99s   p(90)=15.64s   p(95)=16.65s  
       { expected_response:true }...: avg=11.04s   min=1.4s   med=10.11s  max=20.99s   p(90)=15.64s   p(95)=16.65s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 12338
     http_req_receiving.............: avg=121.85ms min=65.6µs med=127.4µs max=5.56s    p(90)=416.19ms p(95)=835.31ms
     http_req_sending...............: avg=14.69ms  min=10.8µs med=21.1µs  max=2.71s    p(90)=13.53ms  p(95)=41.72ms 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=10.91s   min=1.39s  med=9.97s   max=20.99s   p(90)=15.58s   p(95)=16.42s  
     http_reqs......................: 12338   30.157576/s
     iteration_duration.............: avg=11.49s   min=1.41s  med=10.6s   max=22.01s   p(90)=16.11s   p(95)=17.37s  
     iterations.....................: 12338   30.157576/s
     vus............................: 61      min=61      max=350
     vus_max........................: 350     min=350     max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e11b35b7-8e6c-4e8a-4a82-202768487f00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/07e7991e-7ba1-4396-ec5c-f8774dc87a00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c22837ad-7785-4aec-8fa6-eddbb036b600/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga-uws`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 33966     ✗ 0    
     data_received..................: 993 MB  2.4 MB/s
     data_sent......................: 13 MB   33 kB/s
     http_req_blocked...............: avg=630.93µs min=2.2µs    med=5.6µs   max=140.09ms p(90)=7.7µs    p(95)=10.1µs
     http_req_connecting............: avg=582.04µs min=0s       med=0s      max=42.78ms  p(90)=0s       p(95)=0s    
     http_req_duration..............: avg=12.47s   min=573.06ms med=11.45s  max=29.78s   p(90)=17.57s   p(95)=19.45s
       { expected_response:true }...: avg=12.47s   min=573.06ms med=11.45s  max=29.78s   p(90)=17.57s   p(95)=19.45s
     http_req_failed................: 0.00%   ✓ 0         ✗ 11322
     http_req_receiving.............: avg=12.04ms  min=65.6µs   med=117.9µs max=5.04s    p(90)=1.51ms   p(95)=20.6ms
     http_req_sending...............: avg=2.32ms   min=10.2µs   med=29.1µs  max=844.25ms p(90)=161.86µs p(95)=9.33ms
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s       p(90)=0s       p(95)=0s    
     http_req_waiting...............: avg=12.45s   min=572.75ms med=11.45s  max=29.78s   p(90)=17.53s   p(95)=19.44s
     http_reqs......................: 11322   27.610758/s
     iteration_duration.............: avg=12.54s   min=606.15ms med=11.51s  max=29.84s   p(90)=17.65s   p(95)=19.56s
     iterations.....................: 11322   27.610758/s
     vus............................: 31      min=31      max=350
     vus_max........................: 350     min=350     max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f4a3e338-d296-4807-d711-10876116cd00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ea3253c0-3f3e-4532-a0e8-e325aab58b00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c04832b7-521b-4f89-5c47-15d3235c5700/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server-node16`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 33315     ✗ 0    
     data_received..................: 976 MB  2.4 MB/s
     data_sent......................: 13 MB   32 kB/s
     http_req_blocked...............: avg=1.03ms   min=1.9µs med=4.59µs  max=90.35ms  p(90)=6.8µs    p(95)=11.6µs
     http_req_connecting............: avg=988.58µs min=0s    med=0s      max=51.3ms   p(90)=0s       p(95)=0s    
     http_req_duration..............: avg=12.66s   min=1.29s med=11.91s  max=26.94s   p(90)=17.41s   p(95)=18.93s
       { expected_response:true }...: avg=12.66s   min=1.29s med=11.91s  max=26.94s   p(90)=17.41s   p(95)=18.93s
     http_req_failed................: 0.00%   ✓ 0         ✗ 11105
     http_req_receiving.............: avg=6.88ms   min=59µs  med=111.8µs max=1.18s    p(90)=686.24µs p(95)=8.14ms
     http_req_sending...............: avg=2.77ms   min=9µs   med=24.6µs  max=472.37ms p(90)=264.04µs p(95)=8.99ms
     http_req_tls_handshaking.......: avg=0s       min=0s    med=0s      max=0s       p(90)=0s       p(95)=0s    
     http_req_waiting...............: avg=12.65s   min=1.29s med=11.9s   max=26.94s   p(90)=17.4s    p(95)=18.92s
     http_reqs......................: 11105   27.243372/s
     iteration_duration.............: avg=12.74s   min=1.3s  med=11.98s  max=26.97s   p(90)=17.6s    p(95)=19.22s
     iterations.....................: 11105   27.243372/s
     vus............................: 87      min=87      max=350
     vus_max........................: 350     min=350     max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ee92e852-5e24-4dc9-18c7-b60f6ea26300/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a9402d1a-000b-4042-d84f-a54b495e6000/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4294c58e-8325-4865-fa54-c8c3fa387900/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 9984

     checks.........................: 66.66% ✓ 19968     ✗ 9984 
     data_received..................: 879 MB 2.1 MB/s
     data_sent......................: 12 MB  29 kB/s
     http_req_blocked...............: avg=4.87ms min=2.4µs   med=4.2µs   max=233.12ms p(90)=7µs      p(95)=24.3µs  
     http_req_connecting............: avg=4.8ms  min=0s      med=0s      max=232.95ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=14.17s min=8.78s   med=14.17s  max=20.76s   p(90)=15.58s   p(95)=16.24s  
       { expected_response:true }...: avg=14.17s min=8.78s   med=14.17s  max=20.76s   p(90)=15.58s   p(95)=16.24s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 9984 
     http_req_receiving.............: avg=1.08ms min=76.39µs med=421.2µs max=1.6s     p(90)=779.67µs p(95)=1.81ms  
     http_req_sending...............: avg=1.28ms min=12.7µs  med=26.4µs  max=114.06ms p(90)=54.67µs  p(95)=131.05µs
     http_req_tls_handshaking.......: avg=0s     min=0s      med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=14.17s min=8.77s   med=14.17s  max=20.74s   p(90)=15.58s   p(95)=16.23s  
     http_reqs......................: 9984   24.425446/s
     iteration_duration.............: avg=14.18s min=8.79s   med=14.17s  max=20.92s   p(90)=15.59s   p(95)=16.25s  
     iterations.....................: 9984   24.425446/s
     vus............................: 5      min=5       max=350
     vus_max........................: 350    min=350     max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ad325d49-03e8-431c-1154-e3295a222c00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/19878c91-8aff-40b4-802b-52896d9c1000/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/30547903-e676-4169-ba1a-bdb625049a00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-deno`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 25998    ✗ 0    
     data_received..................: 760 MB  1.8 MB/s
     data_sent......................: 10 MB   25 kB/s
     http_req_blocked...............: avg=2.39ms min=2µs    med=5µs     max=104.11ms p(90)=7.6µs   p(95)=23.27µs
     http_req_connecting............: avg=2.34ms min=0s     med=0s      max=90.2ms   p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=16.38s min=6.02s  med=15.62s  max=25.17s   p(90)=20.29s  p(95)=20.72s 
       { expected_response:true }...: avg=16.38s min=6.02s  med=15.62s  max=25.17s   p(90)=20.29s  p(95)=20.72s 
     http_req_failed................: 0.00%   ✓ 0        ✗ 8666 
     http_req_receiving.............: avg=3.04ms min=65.2µs med=123.2µs max=291.67ms p(90)=1.3ms   p(95)=13.69ms
     http_req_sending...............: avg=1.51ms min=11.1µs med=27.8µs  max=200.23ms p(90)=224.8µs p(95)=11.79ms
     http_req_tls_handshaking.......: avg=0s     min=0s     med=0s      max=0s       p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=16.37s min=6.01s  med=15.62s  max=25.1s    p(90)=20.29s  p(95)=20.71s 
     http_reqs......................: 8666    21.02386/s
     iteration_duration.............: avg=16.43s min=6.04s  med=15.66s  max=25.22s   p(90)=20.34s  p(95)=20.78s 
     iterations.....................: 8666    21.02386/s
     vus............................: 29      min=29     max=350
     vus_max........................: 350     min=350    max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2408cf07-481d-4981-7c47-4818e02ee000/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0370ffd4-503f-488e-1ff1-8136ad4bef00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e6300ec2-2773-42c8-6bfa-8deede5e9600/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  99% — ✓ 8559 / ✗ 42
     ✗ no graphql errors
      ↳  99% — ✓ 8559 / ✗ 42
     ✓ valid response structure

     checks.........................: 99.67% ✓ 25677     ✗ 84   
     data_received..................: 751 MB 1.8 MB/s
     data_sent......................: 10 MB  25 kB/s
     http_req_blocked...............: avg=1.79ms min=2.4µs  med=6.5µs   max=208.08ms p(90)=10.2µs  p(95)=53.9µs
     http_req_connecting............: avg=1.21ms min=0s     med=0s      max=68.57ms  p(90)=0s      p(95)=0s    
     http_req_duration..............: avg=16.48s min=4.89s  med=16.42s  max=23.52s   p(90)=19s     p(95)=19.89s
       { expected_response:true }...: avg=16.53s min=10.96s med=16.43s  max=23.52s   p(90)=19s     p(95)=19.89s
     http_req_failed................: 0.48%  ✓ 42        ✗ 8559 
     http_req_receiving.............: avg=1.53ms min=0s     med=172.2µs max=255.02ms p(90)=872µs   p(95)=4.28ms
     http_req_sending...............: avg=1.36ms min=12.3µs med=38.69µs max=151.53ms p(90)=163.4µs p(95)=2.36ms
     http_req_tls_handshaking.......: avg=0s     min=0s     med=0s      max=0s       p(90)=0s      p(95)=0s    
     http_req_waiting...............: avg=16.48s min=4.86s  med=16.42s  max=23.52s   p(90)=18.99s  p(95)=19.89s
     http_reqs......................: 8601   20.946552/s
     iteration_duration.............: avg=16.52s min=4.89s  med=16.46s  max=23.54s   p(90)=19.04s  p(95)=19.93s
     iterations.....................: 8601   20.946552/s
     vus............................: 42     min=42      max=350
     vus_max........................: 350    min=350     max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/956c31c4-8536-4e39-f1f1-ee81abe87400/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/74464fd6-2581-41bd-67f9-ce92a9c53c00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/187949d1-29ea-47fe-8092-5d869d5f4200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  55% — ✓ 1796 / ✗ 1450
     ✗ no graphql errors
      ↳  55% — ✓ 1796 / ✗ 1450
     ✓ valid response structure

     checks.........................: 65.00% ✓ 5388     ✗ 2900 
     data_received..................: 158 MB 367 kB/s
     data_sent......................: 4.0 MB 9.3 kB/s
     http_req_blocked...............: avg=2.7ms    min=1.6µs  med=4.59µs  max=100.76ms p(90)=4.94ms   p(95)=24.59ms 
     http_req_connecting............: avg=2.61ms   min=0s     med=0s      max=51.79ms  p(90)=4.61ms   p(95)=24.11ms 
     http_req_duration..............: avg=43.55s   min=6.99s  med=51.94s  max=1m0s     p(90)=1m0s     p(95)=1m0s    
       { expected_response:true }...: avg=30.28s   min=6.99s  med=26.17s  max=59.99s   p(90)=51.89s   p(95)=53s     
     http_req_failed................: 44.67% ✓ 1450     ✗ 1796 
     http_req_receiving.............: avg=843.65µs min=0s     med=79.79µs max=199.66ms p(90)=215.29µs p(95)=367.99µs
     http_req_sending...............: avg=359.26µs min=9.29µs med=30.24µs max=73.7ms   p(90)=294.39µs p(95)=1.56ms  
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=43.55s   min=6.99s  med=51.94s  max=1m0s     p(90)=1m0s     p(95)=1m0s    
     http_reqs......................: 3246   7.548757/s
     iteration_duration.............: avg=43.56s   min=6.99s  med=51.95s  max=1m0s     p(90)=1m0s     p(95)=1m0s    
     iterations.....................: 3246   7.548757/s
     vus............................: 122    min=122    max=350
     vus_max........................: 350    min=350    max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8f2a0ea6-eeb7-410b-5b61-07eca17cb100/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/38dd2eb2-2118-46f2-14c1-85a010fbff00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ecba1177-0485-4683-8a2f-7c5cf5196200/public" alt="HTTP Overview" />


  </details>