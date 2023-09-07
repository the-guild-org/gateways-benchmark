## Overview for: `fed-v1-ramping-vus`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. We are running a heavy load of concurrent VUs to measure response time and other stats, during stress. It measure things like memory usage, CPU usage, response times. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was trying to reach 1500 concurrent VUs over 300s


### Comparison


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/401b3668-97d4-42c9-f773-eb574f501500/public" alt="Comparison" />


| Gateway                             | duration(p95)⬇️ |  RPS  |         Requests         |                       Durations                        |
| :---------------------------------- | :-------------: | :---: | :----------------------: | :----------------------------------------------------: |
| wundergraph                         |     1580ms      |  976  |  302905 total, 0 failed  |    avg: 700ms, p95: 1581ms, max: 3331ms, med: 636ms    |
| mesh-bun                            |     4056ms      |  397  |  123366 total, 0 failed  |   avg: 1914ms, p95: 4056ms, max: 6615ms, med: 1755ms   |
| mesh                                |     6603ms      |  232  |  72046 total, 0 failed   |  avg: 3318ms, p95: 6604ms, max: 12196ms, med: 3155ms   |
| stitching-federation-with-yoga-bun  |     31344ms     |  53   | 17525 total, 105 failed  | avg: 14718ms, p95: 31345ms, max: 60481ms, med: 13211ms |
| stitching-federation-with-yoga      |     39569ms     |  36   |  12275 total, 0 failed   | avg: 21038ms, p95: 39570ms, max: 47822ms, med: 20680ms |
| apollo-router                       |     43349ms     |  32   | 10704 total, 3786 failed | avg: 23916ms, p95: 43350ms, max: 56571ms, med: 25240ms |
| stitching-federation-with-yoga-uws  |     44978ms     |  31   |  10675 total, 0 failed   | avg: 23692ms, p95: 44978ms, max: 57540ms, med: 23264ms |
| mesh-supergraph                     |     51571ms     |  31   |  10651 total, 85 failed  | avg: 22222ms, p95: 51572ms, max: 60005ms, med: 20075ms |
| apollo-gateway-with-yoga            |     60000ms     |  37   | 12720 total, 1323 failed | avg: 19148ms, p95: 60001ms, max: 60415ms, med: 7980ms  |
| apollo-gateway-with-yoga-bun        |     60000ms     |  29   | 10156 total, 713 failed  | avg: 22315ms, p95: 60000ms, max: 63748ms, med: 18632ms |
| apollo-gateway-with-yoga-uws        |     60001ms     |  36   | 12322 total, 1848 failed | avg: 20739ms, p95: 60001ms, max: 60388ms, med: 7798ms  |
| stitching-federation-with-yoga-deno |     60001ms     |  19   |  6785 total, 890 failed  | avg: 35156ms, p95: 60001ms, max: 60176ms, med: 34945ms |
| mercurius                           |     60002ms     |  13   | 4702 total, 3491 failed  | avg: 50320ms, p95: 60002ms, max: 60049ms, med: 60000ms |
| apollo-server-node16                |     60004ms     |  26   | 9070 total, 1994 failed  | avg: 25086ms, p95: 60005ms, max: 60994ms, med: 10614ms |
| apollo-server                       |     60005ms     |  25   | 8504 total, 2250 failed  | avg: 27753ms, p95: 60006ms, max: 60717ms, med: 16876ms |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 302905

     checks.........................: 66.66% ✓ 605810     ✗ 302905
     data_received..................: 44 MB  142 kB/s
     data_sent......................: 360 MB 1.2 MB/s
     http_req_blocked...............: avg=3.41ms   min=1.1µs    med=3µs      max=2.9s  p(90)=4.7µs    p(95)=6.2µs  
     http_req_connecting............: avg=3.38ms   min=0s       med=0s       max=2.9s  p(90)=0s       p(95)=0s     
     http_req_duration..............: avg=699.55ms min=385.01µs med=635.93ms max=3.33s p(90)=1.39s    p(95)=1.58s  
       { expected_response:true }...: avg=699.55ms min=385.01µs med=635.93ms max=3.33s p(90)=1.39s    p(95)=1.58s  
     http_req_failed................: 0.00%  ✓ 0          ✗ 302905
     http_req_receiving.............: avg=13.74ms  min=10.2µs   med=32.6µs   max=1.66s p(90)=470.87µs p(95)=51.16ms
     http_req_sending...............: avg=3.66ms   min=6.1µs    med=14.5µs   max=1.71s p(90)=114.6µs  p(95)=287.9µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s    p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=682.13ms min=339.81µs med=623.43ms max=2.9s  p(90)=1.36s    p(95)=1.53s  
     http_reqs......................: 302905 976.943985/s
     iteration_duration.............: avg=782.29ms min=944.23µs med=718.96ms max=4.58s p(90)=1.52s    p(95)=1.74s  
     iterations.....................: 302905 976.943985/s
     vus............................: 1      min=0        max=1499
     vus_max........................: 1500   min=1469     max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/820139d5-c569-40fd-da58-60d29f622300/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7abdb47b-b821-4be4-198d-17e05d300d00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/af4240fb-088f-4d60-bf17-d6bbf74eff00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  0% — ✓ 0 / ✗ 123366
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 123366

     checks.........................: 33.33% ✓ 123366     ✗ 246732
     data_received..................: 117 MB 379 kB/s
     data_sent......................: 146 MB 472 kB/s
     http_req_blocked...............: avg=1.4ms  min=1.2µs  med=2.5µs  max=1.29s p(90)=4.3µs   p(95)=5.6µs 
     http_req_connecting............: avg=1.37ms min=0s     med=0s     max=1.29s p(90)=0s      p(95)=0s    
     http_req_duration..............: avg=1.91s  min=2.08ms med=1.75s  max=6.61s p(90)=3.84s   p(95)=4.05s 
       { expected_response:true }...: avg=1.91s  min=2.08ms med=1.75s  max=6.61s p(90)=3.84s   p(95)=4.05s 
     http_req_failed................: 0.00%  ✓ 0          ✗ 123366
     http_req_receiving.............: avg=4.41ms min=10.1µs med=27.3µs max=1.04s p(90)=348.2µs p(95)=2.38ms
     http_req_sending...............: avg=2.2ms  min=7.3µs  med=13.2µs max=1.03s p(90)=106.6µs p(95)=155µs 
     http_req_tls_handshaking.......: avg=0s     min=0s     med=0s     max=0s    p(90)=0s      p(95)=0s    
     http_req_waiting...............: avg=1.9s   min=2ms    med=1.75s  max=6.6s  p(90)=3.83s   p(95)=4.04s 
     http_reqs......................: 123366 397.950419/s
     iteration_duration.............: avg=1.93s  min=3.04ms med=1.76s  max=6.73s p(90)=3.87s   p(95)=4.08s 
     iterations.....................: 123366 397.950419/s
     vus............................: 10     min=10       max=1499
     vus_max........................: 1500   min=1500     max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d8405e68-ab48-4626-9e23-c88f0e4e8800/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a20a93ab-17aa-4f1f-df03-1277c2298300/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/296b8ea8-a04f-4a38-13aa-0ceaf3e49e00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 72046

     checks.........................: 66.66% ✓ 144092     ✗ 72046 
     data_received..................: 82 MB  263 kB/s
     data_sent......................: 86 MB  276 kB/s
     http_req_blocked...............: avg=994.66µs min=1.4µs  med=2.9µs  max=1.21s    p(90)=4.5µs    p(95)=8.9µs   
     http_req_connecting............: avg=966.33µs min=0s     med=0s     max=1.21s    p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=3.31s    min=3.33ms med=3.15s  max=12.19s   p(90)=6.3s     p(95)=6.6s    
       { expected_response:true }...: avg=3.31s    min=3.33ms med=3.15s  max=12.19s   p(90)=6.3s     p(95)=6.6s    
     http_req_failed................: 0.00%  ✓ 0          ✗ 72046 
     http_req_receiving.............: avg=7.21ms   min=13.4µs med=37.7µs max=990.73ms p(90)=286.21µs p(95)=2.08ms  
     http_req_sending...............: avg=1.78ms   min=8µs    med=14.9µs max=884.39ms p(90)=110µs    p(95)=195.06µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=3.3s     min=3.25ms med=3.13s  max=12.19s   p(90)=6.28s    p(95)=6.57s   
     http_reqs......................: 72046  232.403233/s
     iteration_duration.............: avg=3.32s    min=3.96ms med=3.16s  max=12.2s    p(90)=6.31s    p(95)=6.62s   
     iterations.....................: 72046  232.403233/s
     vus............................: 10     min=10       max=1500
     vus_max........................: 1500   min=1500     max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2fdbeaf5-87ca-40ee-6925-7887f93e8700/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ef87aa2e-cc52-4cb4-86ff-23a1f16ef500/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/78512dc1-3254-44a0-e804-ae7ad3747d00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-bun`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  99% — ✓ 17420 / ✗ 105
     ✗ no graphql errors
      ↳  99% — ✓ 17420 / ✗ 105
     ✓ valid response structure

     checks.........................: 99.59% ✓ 52259     ✗ 210   
     data_received..................: 1.5 GB 4.6 MB/s
     data_sent......................: 21 MB  63 kB/s
     http_req_blocked...............: avg=12.9ms   min=1.1µs    med=3.2µs  max=2.15s  p(90)=10.2µs  p(95)=459.61µs
     http_req_connecting............: avg=12.61ms  min=0s       med=0s     max=2.14s  p(90)=0s      p(95)=390.95µs
     http_req_duration..............: avg=14.71s   min=473.57ms med=13.21s max=1m0s   p(90)=24.86s  p(95)=31.34s  
       { expected_response:true }...: avg=14.44s   min=473.57ms med=13.16s max=59.97s p(90)=24.58s  p(95)=29.92s  
     http_req_failed................: 0.59%  ✓ 105       ✗ 17420 
     http_req_receiving.............: avg=100.66ms min=0s       med=73.4µs max=20.46s p(90)=5.07ms  p(95)=338.73ms
     http_req_sending...............: avg=15.4ms   min=6.1µs    med=15.9µs max=1.93s  p(90)=14.53ms p(95)=64.92ms 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s     p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=14.6s    min=473.01ms med=13.18s max=1m0s   p(90)=24.75s  p(95)=30.4s   
     http_reqs......................: 17525  53.061032/s
     iteration_duration.............: avg=14.89s   min=485.36ms med=13.36s max=1m0s   p(90)=25.06s  p(95)=31.62s  
     iterations.....................: 17524  53.058004/s
     vus............................: 10     min=10      max=1499
     vus_max........................: 1500   min=1500    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/cb1e4ccb-9aa9-44f6-3c12-b98418b0e900/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b2196a79-51eb-49e9-1fe1-d7de89003300/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d0e525ee-4949-42ac-8e7e-b52686267000/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 36825    ✗ 0     
     data_received..................: 1.1 GB  3.2 MB/s
     data_sent......................: 15 MB   44 kB/s
     http_req_blocked...............: avg=2.53ms min=1.5µs  med=3.5µs   max=841.56ms p(90)=156.99µs p(95)=425.58µs
     http_req_connecting............: avg=2.48ms min=0s     med=0s      max=841.47ms p(90)=103.19µs p(95)=354.32µs
     http_req_duration..............: avg=21.03s min=1.07s  med=20.68s  max=47.82s   p(90)=37.21s   p(95)=39.56s  
       { expected_response:true }...: avg=21.03s min=1.07s  med=20.68s  max=47.82s   p(90)=37.21s   p(95)=39.56s  
     http_req_failed................: 0.00%   ✓ 0        ✗ 12275 
     http_req_receiving.............: avg=1.75ms min=41.2µs med=88.29µs max=416.45ms p(90)=328.31µs p(95)=1.68ms  
     http_req_sending...............: avg=2.8ms  min=7.1µs  med=19.5µs  max=470.92ms p(90)=96.95µs  p(95)=10.2ms  
     http_req_tls_handshaking.......: avg=0s     min=0s     med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=21.03s min=1.07s  med=20.65s  max=47.82s   p(90)=37.21s   p(95)=39.56s  
     http_reqs......................: 12275   36.97968/s
     iteration_duration.............: avg=21.08s min=1.08s  med=20.74s  max=47.82s   p(90)=37.26s   p(95)=39.6s   
     iterations.....................: 12275   36.97968/s
     vus............................: 78      min=50     max=1500
     vus_max........................: 1500    min=1500   max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/08936a58-7662-4acd-d8ea-bd835b5bc700/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b36db987-b3f4-49f8-bd2d-1a7a20eefd00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9230fe73-bf90-410a-9727-13da129a0600/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  64% — ✓ 6918 / ✗ 3786
     ✗ no graphql errors
      ↳  64% — ✓ 6918 / ✗ 3786
     ✓ valid response structure

     checks.........................: 73.26% ✓ 20750     ✗ 7572  
     data_received..................: 608 MB 1.8 MB/s
     data_sent......................: 13 MB  38 kB/s
     http_req_blocked...............: avg=833.5µs  min=2µs      med=4.1µs  max=727.67ms p(90)=472.24µs p(95)=649.13µs
     http_req_connecting............: avg=747.21µs min=0s       med=0s     max=431.84ms p(90)=391.64µs p(95)=546.04µs
     http_req_duration..............: avg=23.91s   min=864.86ms med=25.24s max=56.57s   p(90)=40.09s   p(95)=43.34s  
       { expected_response:true }...: avg=16.58s   min=864.86ms med=15.61s max=51.89s   p(90)=30.33s   p(95)=34.08s  
     http_req_failed................: 35.36% ✓ 3786      ✗ 6918  
     http_req_receiving.............: avg=1ms      min=26.2µs   med=112µs  max=837.18ms p(90)=380.73µs p(95)=594.75µs
     http_req_sending...............: avg=683.17µs min=11µs     med=28.5µs max=377.43ms p(90)=85.07µs  p(95)=190.03µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=23.91s   min=864.43ms med=25.23s max=56.57s   p(90)=40.09s   p(95)=43.34s  
     http_reqs......................: 10704  32.328452/s
     iteration_duration.............: avg=23.94s   min=877.67ms med=25.26s max=56.57s   p(90)=40.08s   p(95)=43.36s  
     iterations.....................: 10700  32.316371/s
     vus............................: 46     min=0       max=1500
     vus_max........................: 1500   min=868     max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0daef66c-d32f-4e89-ba37-fb0eea527f00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e39f676e-7dd7-42ad-3578-43c88c64a200/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e6d57f0c-ecd1-43db-c4a9-17fc54df6000/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-uws`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 32024     ✗ 0     
     data_received..................: 937 MB  2.8 MB/s
     data_sent......................: 13 MB   39 kB/s
     http_req_blocked...............: avg=2.95ms  min=1.8µs  med=4.89µs  max=900.53ms p(90)=199.76µs p(95)=559.44µs
     http_req_connecting............: avg=2.86ms  min=0s     med=0s      max=900.41ms p(90)=131.6µs  p(95)=472.63µs
     http_req_duration..............: avg=23.69s  min=1.56s  med=23.26s  max=57.53s   p(90)=41.89s   p(95)=44.97s  
       { expected_response:true }...: avg=23.69s  min=1.56s  med=23.26s  max=57.53s   p(90)=41.89s   p(95)=44.97s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 10675 
     http_req_receiving.............: avg=10.72ms min=56.8µs med=119.1µs max=7.76s    p(90)=583.35µs p(95)=3.51ms  
     http_req_sending...............: avg=2.92ms  min=9µs    med=24.8µs  max=904.99ms p(90)=115.86µs p(95)=9.54ms  
     http_req_tls_handshaking.......: avg=0s      min=0s     med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=23.67s  min=1.56s  med=23.2s   max=57.53s   p(90)=41.86s   p(95)=44.95s  
     http_reqs......................: 10675   31.732312/s
     iteration_duration.............: avg=23.75s  min=1.58s  med=23.39s  max=57.55s   p(90)=41.91s   p(95)=45.06s  
     iterations.....................: 10674   31.729339/s
     vus............................: 11      min=0       max=1500
     vus_max........................: 1500    min=1373    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/502cb1b4-0f81-49d4-095b-3eb9d10c1700/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6ba17ce3-3023-4680-59da-cdde6b2b9a00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/02be8abd-4acc-445e-6395-0a7360be7800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  99% — ✓ 10566 / ✗ 85
     ✗ no graphql errors
      ↳  99% — ✓ 10566 / ✗ 85
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 10566

     checks.........................: 66.31% ✓ 21132     ✗ 10736 
     data_received..................: 930 MB 2.7 MB/s
     data_sent......................: 14 MB  40 kB/s
     http_req_blocked...............: avg=128.31µs min=1.9µs  med=3.5µs   max=158.38ms p(90)=238.1µs p(95)=539.1µs 
     http_req_connecting............: avg=111.6µs  min=0s     med=0s      max=158.06ms p(90)=154.8µs p(95)=457.45µs
     http_req_duration..............: avg=22.22s   min=1.53s  med=20.07s  max=1m0s     p(90)=45.82s  p(95)=51.57s  
       { expected_response:true }...: avg=21.91s   min=1.53s  med=19.79s  max=59.88s   p(90)=44.18s  p(95)=51.35s  
     http_req_failed................: 0.79%  ✓ 85        ✗ 10566 
     http_req_receiving.............: avg=1.38ms   min=0s     med=131.6µs max=2.94s    p(90)=339.8µs p(95)=421.9µs 
     http_req_sending...............: avg=158.93µs min=10.7µs med=19.3µs  max=128.16ms p(90)=68.8µs  p(95)=87.2µs  
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=22.22s   min=1.53s  med=20.07s  max=1m0s     p(90)=45.77s  p(95)=51.56s  
     http_reqs......................: 10651  31.344681/s
     iteration_duration.............: avg=22.22s   min=1.54s  med=20.08s  max=1m0s     p(90)=45.82s  p(95)=51.57s  
     iterations.....................: 10651  31.344681/s
     vus............................: 6      min=0       max=1499
     vus_max........................: 1500   min=1284    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/718579a0-83eb-4f55-22e2-e3970fbfca00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/eb3f6d88-5449-49f3-2f7f-3cea92ddb000/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0fa6f634-ead1-4ad6-9039-6346fb7a9b00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  89% — ✓ 11397 / ✗ 1323
     ✗ no graphql errors
      ↳  89% — ✓ 11397 / ✗ 1323
     ✓ valid response structure

     checks.........................: 92.81% ✓ 34190     ✗ 2646  
     data_received..................: 1.0 GB 2.9 MB/s
     data_sent......................: 16 MB  46 kB/s
     http_req_blocked...............: avg=3.31ms min=1.6µs med=3.3µs   max=787.71ms p(90)=396.43µs p(95)=2.49ms 
     http_req_connecting............: avg=3.24ms min=0s    med=0s      max=787.66ms p(90)=334.99µs p(95)=2.13ms 
     http_req_duration..............: avg=19.14s min=1.2s  med=7.98s   max=1m0s     p(90)=59.94s   p(95)=1m0s   
       { expected_response:true }...: avg=14.4s  min=1.2s  med=7.23s   max=1m0s     p(90)=41.07s   p(95)=48.6s  
     http_req_failed................: 10.40% ✓ 1323      ✗ 11397 
     http_req_receiving.............: avg=2.19ms min=0s    med=73.09µs max=615.52ms p(90)=284.49µs p(95)=1.63ms 
     http_req_sending...............: avg=2.66ms min=7.4µs med=17.3µs  max=460.45ms p(90)=157.09µs p(95)=13.45ms
     http_req_tls_handshaking.......: avg=0s     min=0s    med=0s      max=0s       p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=19.14s min=1.2s  med=7.97s   max=1m0s     p(90)=59.92s   p(95)=1m0s   
     http_reqs......................: 12720  37.42235/s
     iteration_duration.............: avg=19.19s min=1.23s med=8s      max=1m0s     p(90)=1m0s     p(95)=1m0s   
     iterations.....................: 12719  37.419408/s
     vus............................: 2      min=0       max=1500
     vus_max........................: 1500   min=1421    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a65b4c54-ecb9-4103-0afc-aee2d4721a00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f10d289f-1a16-4b41-31b0-8564cd133b00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c9a35e4f-e8f5-4a4e-6deb-617218955200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga-bun`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  92% — ✓ 9443 / ✗ 713
     ✗ no graphql errors
      ↳  92% — ✓ 9443 / ✗ 713
     ✓ valid response structure

     checks.........................: 95.20% ✓ 28329    ✗ 1426  
     data_received..................: 830 MB 2.4 MB/s
     data_sent......................: 13 MB  38 kB/s
     http_req_blocked...............: avg=40.92ms  min=2.1µs    med=5.2µs   max=5.55s  p(90)=216µs    p(95)=50.02ms 
     http_req_connecting............: avg=39.87ms  min=0s       med=0s      max=5.55s  p(90)=140.1µs  p(95)=41.1ms  
     http_req_duration..............: avg=22.31s   min=667.1ms  med=18.63s  max=1m3s   p(90)=51.86s   p(95)=1m0s    
       { expected_response:true }...: avg=19.47s   min=667.1ms  med=16.55s  max=59.84s p(90)=40.58s   p(95)=46.89s  
     http_req_failed................: 7.02%  ✓ 713      ✗ 9443  
     http_req_receiving.............: avg=274.52ms min=0s       med=120.4µs max=13.45s p(90)=896.42ms p(95)=1.92s   
     http_req_sending...............: avg=38.57ms  min=9µs      med=25.2µs  max=6.45s  p(90)=23.42ms  p(95)=168.93ms
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s     p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=22s      min=665.38ms med=18.46s  max=1m3s   p(90)=51.85s   p(95)=1m0s    
     http_reqs......................: 10156  29.87916/s
     iteration_duration.............: avg=23.05s   min=676.87ms med=18.86s  max=1m6s   p(90)=53.25s   p(95)=1m0s    
     iterations.....................: 10156  29.87916/s
     vus............................: 1      min=0      max=1500
     vus_max........................: 1500   min=1121   max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3312b9f6-ccd9-4176-f664-84076659c300/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a8051557-bc6d-4429-508e-b8cf99555400/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6bb39e4c-3f73-4cf1-1898-dda53c232000/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga-uws`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  85% — ✓ 10474 / ✗ 1848
     ✗ no graphql errors
      ↳  85% — ✓ 10474 / ✗ 1848
     ✓ valid response structure

     checks.........................: 89.47% ✓ 31421     ✗ 3696  
     data_received..................: 919 MB 2.7 MB/s
     data_sent......................: 15 MB  44 kB/s
     http_req_blocked...............: avg=3.97ms  min=1.6µs  med=4.2µs   max=575.92ms p(90)=446.08µs p(95)=4.74ms 
     http_req_connecting............: avg=3.83ms  min=0s     med=0s      max=540.94ms p(90)=382.19µs p(95)=4.02ms 
     http_req_duration..............: avg=20.73s  min=1.23s  med=7.79s   max=1m0s     p(90)=1m0s     p(95)=1m0s   
       { expected_response:true }...: avg=13.81s  min=1.23s  med=6.8s    max=59.92s   p(90)=41.12s   p(95)=49.27s 
     http_req_failed................: 14.99% ✓ 1848      ✗ 10474 
     http_req_receiving.............: avg=14.33ms min=0s     med=82.89µs max=36.26s   p(90)=258.76µs p(95)=939.1µs
     http_req_sending...............: avg=2.36ms  min=7.89µs med=23.2µs  max=433.39ms p(90)=189.05µs p(95)=12.29ms
     http_req_tls_handshaking.......: avg=0s      min=0s     med=0s      max=0s       p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=20.72s  min=1.23s  med=7.79s   max=1m0s     p(90)=1m0s     p(95)=1m0s   
     http_reqs......................: 12322  36.743129/s
     iteration_duration.............: avg=20.77s  min=1.24s  med=7.82s   max=1m0s     p(90)=1m0s     p(95)=1m0s   
     iterations.....................: 12321  36.740147/s
     vus............................: 1      min=1       max=1500
     vus_max........................: 1500   min=1500    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/31e73e89-ea90-41d7-cbd0-2a46154d9e00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f7e38999-d695-408c-a806-bdab4af9e200/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/40f1ab84-72ae-45b0-77c7-c12867c4db00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-deno`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  86% — ✓ 5895 / ✗ 890
     ✗ no graphql errors
      ↳  86% — ✓ 5895 / ✗ 890
     ✓ valid response structure

     checks.........................: 90.85% ✓ 17685     ✗ 1780  
     data_received..................: 517 MB 1.5 MB/s
     data_sent......................: 8.9 MB 26 kB/s
     http_req_blocked...............: avg=1.7ms  min=2.29µs med=5.9µs   max=292.62ms p(90)=739.9µs  p(95)=4.23ms
     http_req_connecting............: avg=1.61ms min=0s     med=0s      max=257.59ms p(90)=636.62µs p(95)=3.76ms
     http_req_duration..............: avg=35.15s min=1.9s   med=34.94s  max=1m0s     p(90)=1m0s     p(95)=1m0s  
       { expected_response:true }...: avg=31.4s  min=1.9s   med=31.26s  max=59.96s   p(90)=54.29s   p(95)=56.56s
     http_req_failed................: 13.11% ✓ 890       ✗ 5895  
     http_req_receiving.............: avg=1.81ms min=0s     med=136.4µs max=298.87ms p(90)=818.23µs p(95)=8.49ms
     http_req_sending...............: avg=1.26ms min=12µs   med=34.29µs max=188.52ms p(90)=155.5µs  p(95)=4.48ms
     http_req_tls_handshaking.......: avg=0s     min=0s     med=0s      max=0s       p(90)=0s       p(95)=0s    
     http_req_waiting...............: avg=35.15s min=1.9s   med=34.94s  max=1m0s     p(90)=1m0s     p(95)=1m0s  
     http_reqs......................: 6785   19.961592/s
     iteration_duration.............: avg=35.19s min=1.94s  med=35s     max=1m0s     p(90)=1m0s     p(95)=1m0s  
     iterations.....................: 6785   19.961592/s
     vus............................: 3      min=0       max=1500
     vus_max........................: 1500   min=1207    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d0044fdc-8b45-41b5-c452-e15ea0949d00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9d3bafb2-3f57-4447-fa4e-64079315b000/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9b4740d5-11e2-4bda-289e-4b9f9699c500/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  25% — ✓ 1211 / ✗ 3491
     ✗ no graphql errors
      ↳  25% — ✓ 1211 / ✗ 3491
     ✓ valid response structure

     checks.........................: 34.22% ✓ 3633      ✗ 6982  
     data_received..................: 106 MB 313 kB/s
     data_sent......................: 6.5 MB 19 kB/s
     http_req_blocked...............: avg=857.55µs min=2.4µs  med=460.19µs max=37.68ms p(90)=1.98ms   p(95)=3.25ms  
     http_req_connecting............: avg=765.38µs min=0s     med=383.14µs max=36.53ms p(90)=1.84ms   p(95)=3.05ms  
     http_req_duration..............: avg=50.31s   min=2.96s  med=59.99s   max=1m0s    p(90)=1m0s     p(95)=1m0s    
       { expected_response:true }...: avg=22.41s   min=2.96s  med=15.95s   max=59.94s  p(90)=48.98s   p(95)=53.01s  
     http_req_failed................: 74.24% ✓ 3491      ✗ 1211  
     http_req_receiving.............: avg=123.66µs min=0s     med=0s       max=40.18ms p(90)=264.44µs p(95)=409.49µs
     http_req_sending...............: avg=157.1µs  min=14.3µs med=58.29µs  max=39.39ms p(90)=126.23µs p(95)=214.49µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s       max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=50.31s   min=2.96s  med=59.99s   max=1m0s    p(90)=1m0s     p(95)=1m0s    
     http_reqs......................: 4702   13.833261/s
     iteration_duration.............: avg=50.32s   min=2.99s  med=1m0s     max=1m0s    p(90)=1m0s     p(95)=1m0s    
     iterations.....................: 4702   13.833261/s
     vus............................: 5      min=0       max=1500
     vus_max........................: 1500   min=1127    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/93f08ed6-deb7-49b6-e7e4-e0cc19f89a00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/40961aa2-4a6e-499e-f336-b94051edb200/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/351e4b38-6572-4435-54f1-2f2a3a753000/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server-node16`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  78% — ✓ 7076 / ✗ 1994
     ✗ no graphql errors
      ↳  78% — ✓ 7076 / ✗ 1994
     ✓ valid response structure

     checks.........................: 84.18% ✓ 21228     ✗ 3988  
     data_received..................: 622 MB 1.8 MB/s
     data_sent......................: 12 MB  35 kB/s
     http_req_blocked...............: avg=3.74ms min=2µs      med=4.5µs   max=555.08ms p(90)=856.7µs  p(95)=6.75ms 
     http_req_connecting............: avg=3.66ms min=0s       med=0s      max=554.97ms p(90)=715.95µs p(95)=6.14ms 
     http_req_duration..............: avg=25.08s min=677.21ms med=10.61s  max=1m0s     p(90)=1m0s     p(95)=1m0s   
       { expected_response:true }...: avg=15.24s min=677.21ms med=8.52s   max=59.93s   p(90)=45.22s   p(95)=51.18s 
     http_req_failed................: 21.98% ✓ 1994      ✗ 7076  
     http_req_receiving.............: avg=2.08ms min=0s       med=107.2µs max=700.7ms  p(90)=453.94µs p(95)=1.3ms  
     http_req_sending...............: avg=2.65ms min=11.1µs   med=26.8µs  max=517.02ms p(90)=208.35µs p(95)=11.06ms
     http_req_tls_handshaking.......: avg=0s     min=0s       med=0s      max=0s       p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=25.08s min=676.58ms med=10.61s  max=1m0s     p(90)=1m0s     p(95)=1m0s   
     http_reqs......................: 9070   26.683945/s
     iteration_duration.............: avg=25.14s min=694.28ms med=10.63s  max=1m1s     p(90)=1m0s     p(95)=1m0s   
     iterations.....................: 9070   26.683945/s
     vus............................: 2      min=0       max=1500
     vus_max........................: 1500   min=1158    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/57a5230b-f9ac-4273-0cb4-e61fbfaeb200/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e7ba49b1-c95e-4117-7cf4-1199236d4e00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2f1abdef-c6be-4fc4-16e0-23d898e89900/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  73% — ✓ 6254 / ✗ 2250
     ✗ no graphql errors
      ↳  73% — ✓ 6254 / ✗ 2250
     ✓ valid response structure

     checks.........................: 80.65% ✓ 18762     ✗ 4500  
     data_received..................: 550 MB 1.6 MB/s
     data_sent......................: 11 MB  32 kB/s
     http_req_blocked...............: avg=4.81ms min=1.7µs med=5.9µs   max=759.67ms p(90)=959.46µs p(95)=10.75ms
     http_req_connecting............: avg=4.21ms min=0s    med=0s      max=759.58ms p(90)=756.85µs p(95)=10.05ms
     http_req_duration..............: avg=27.75s min=1.76s med=16.87s  max=1m0s     p(90)=1m0s     p(95)=1m0s   
       { expected_response:true }...: avg=16.14s min=1.76s med=9.96s   max=59.99s   p(90)=38.91s   p(95)=50.85s 
     http_req_failed................: 26.45% ✓ 2250      ✗ 6254  
     http_req_receiving.............: avg=2.26ms min=0s    med=109.8µs max=710.57ms p(90)=395.52µs p(95)=1.44ms 
     http_req_sending...............: avg=3.12ms min=9.5µs med=33.3µs  max=567.14ms p(90)=222.56µs p(95)=13.35ms
     http_req_tls_handshaking.......: avg=0s     min=0s    med=0s      max=0s       p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=27.74s min=1.76s med=16.87s  max=1m0s     p(90)=1m0s     p(95)=1m0s   
     http_reqs......................: 8504   25.018826/s
     iteration_duration.............: avg=27.81s min=1.8s  med=16.96s  max=1m1s     p(90)=1m0s     p(95)=1m0s   
     iterations.....................: 8504   25.018826/s
     vus............................: 1      min=0       max=1500
     vus_max........................: 1500   min=1260    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/48b4f479-0da1-471f-a3a5-46f700e6af00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1dcf04fe-3d3a-4904-e097-0cae8cea2b00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a7712863-4384-4e70-76f2-712cc79c0400/public" alt="HTTP Overview" />


  </details>