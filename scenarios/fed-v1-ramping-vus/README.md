## Overview for: `fed-v1-ramping-vus`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. We are running a heavy load of concurrent VUs to measure response time and other stats, during stress. It measure things like memory usage, CPU usage, response times. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was trying to reach 1500 concurrent VUs over 300s


### Comparison


| Gateway                             | duration(p95)⬇️ |  RPS  |         Requests         |                       Durations                        |
| :---------------------------------- | :-------------: | :---: | :----------------------: | :----------------------------------------------------: |
| wundergraph                         |     1906ms      |  822  |  254925 total, 0 failed  |    avg: 911ms, p95: 1906ms, max: 3807ms, med: 839ms    |
| stitching-federation-with-yoga-bun  |     13756ms     |  135  |  42399 total, 0 failed   |  avg: 5806ms, p95: 13756ms, max: 35167ms, med: 5786ms  |
| mesh                                |     14313ms     |  106  |  33014 total, 0 failed   |  avg: 7388ms, p95: 14313ms, max: 22395ms, med: 7123ms  |
| mesh-supergraph                     |     14738ms     |  101  |  31585 total, 0 failed   |  avg: 7722ms, p95: 14739ms, max: 20299ms, med: 7533ms  |
| stitching-federation-with-yoga-deno |     15283ms     |  98   |  30701 total, 0 failed   |  avg: 7969ms, p95: 15284ms, max: 25110ms, med: 7669ms  |
| mercurius                           |     17867ms     |  77   |  24047 total, 0 failed   | avg: 10064ms, p95: 17867ms, max: 19279ms, med: 10174ms |
| apollo-router                       |     18795ms     |  77   |  24799 total, 0 failed   | avg: 10107ms, p95: 18795ms, max: 19854ms, med: 9732ms  |
| apollo-gateway-with-yoga-uws        |     32277ms     |  73   |  23300 total, 0 failed   | avg: 10783ms, p95: 32278ms, max: 52813ms, med: 5296ms  |
| apollo-server-node16                |     43746ms     |  53   |  17325 total, 0 failed   | avg: 14827ms, p95: 43747ms, max: 56943ms, med: 8377ms  |
| stitching-federation-with-yoga-uws  |     44208ms     |  49   | 16889 total, 156 failed  | avg: 13763ms, p95: 44208ms, max: 60006ms, med: 7255ms  |
| stitching-federation-with-yoga      |     59999ms     |  92   | 31004 total, 2576 failed |  avg: 8108ms, p95: 60000ms, max: 60050ms, med: 2951ms  |
| apollo-gateway-with-yoga            |     60000ms     |  73   | 24404 total, 2613 failed | avg: 10353ms, p95: 60000ms, max: 60034ms, med: 3746ms  |
| apollo-server                       |     60000ms     |  62   | 20828 total, 2739 failed | avg: 12183ms, p95: 60000ms, max: 60039ms, med: 4140ms  |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 764775     ✗ 0     
     data_received..................: 1.3 GB  4.1 MB/s
     data_sent......................: 303 MB  976 kB/s
     http_req_blocked...............: avg=833.46µs min=800ns  med=1.8µs    max=1.25s    p(90)=3.1µs    p(95)=3.9µs 
     http_req_connecting............: avg=826.28µs min=0s     med=0s       max=1.25s    p(90)=0s       p(95)=0s    
     http_req_duration..............: avg=911.05ms min=7.03ms med=838.78ms max=3.8s     p(90)=1.68s    p(95)=1.9s  
       { expected_response:true }...: avg=911.05ms min=7.03ms med=838.78ms max=3.8s     p(90)=1.68s    p(95)=1.9s  
     http_req_failed................: 0.00%   ✓ 0          ✗ 254925
     http_req_receiving.............: avg=7.04ms   min=13.4µs med=27.39µs  max=1s       p(90)=176.35µs p(95)=1.11ms
     http_req_sending...............: avg=1.53ms   min=5.8µs  med=10.2µs   max=987.36ms p(90)=22.2µs   p(95)=97.3µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s       max=0s       p(90)=0s       p(95)=0s    
     http_req_waiting...............: avg=902.47ms min=6.88ms med=834.98ms max=3.36s    p(90)=1.65s    p(95)=1.85s 
     http_reqs......................: 254925  822.313977/s
     iteration_duration.............: avg=930.43ms min=7.65ms med=854.03ms max=3.8s     p(90)=1.72s    p(95)=1.95s 
     iterations.....................: 254925  822.313977/s
     vus............................: 10      min=10       max=1499
     vus_max........................: 1500    min=1500     max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e17924f6-c713-4a4c-c720-5a00946c1700/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/541aa14b-5a68-4f26-a098-2d283f22ed00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 127197     ✗ 0     
     data_received..................: 211 MB  676 kB/s
     data_sent......................: 50 MB   161 kB/s
     http_req_blocked...............: avg=247.87µs min=1.2µs    med=2.2µs  max=477.42ms p(90)=3.9µs  p(95)=15.5µs 
     http_req_connecting............: avg=231.85µs min=0s       med=0s     max=477.24ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=5.8s     min=245.74ms med=5.78s  max=35.16s   p(90)=8.31s  p(95)=13.75s 
       { expected_response:true }...: avg=5.8s     min=245.74ms med=5.78s  max=35.16s   p(90)=8.31s  p(95)=13.75s 
     http_req_failed................: 0.00%   ✓ 0          ✗ 42399 
     http_req_receiving.............: avg=1.24ms   min=14.8µs   med=39.4µs max=456.59ms p(90)=67.5µs p(95)=218.7µs
     http_req_sending...............: avg=498.74µs min=7µs      med=12.4µs max=431.11ms p(90)=48.9µs p(95)=101.9µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=5.8s     min=245.32ms med=5.78s  max=35.16s   p(90)=8.31s  p(95)=13.75s 
     http_reqs......................: 42399   135.689308/s
     iteration_duration.............: avg=5.8s     min=246.77ms med=5.78s  max=35.16s   p(90)=8.31s  p(95)=13.75s 
     iterations.....................: 42399   135.689308/s
     vus............................: 250     min=50       max=1500
     vus_max........................: 1500    min=1500     max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/54b983aa-3321-4f5f-14b1-cb253805e800/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/524a383e-e65d-4e39-e5e8-69a2b0febb00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 32783 / ✗ 231
     ✗ valid response structure
      ↳  99% — ✓ 32783 / ✗ 231

     checks.........................: 99.53% ✓ 98580      ✗ 462   
     data_received..................: 168 MB 540 kB/s
     data_sent......................: 39 MB  126 kB/s
     http_req_blocked...............: avg=47.36µs min=900ns   med=2.1µs   max=260.31ms p(90)=3.3µs   p(95)=17.1µs
     http_req_connecting............: avg=41.24µs min=0s      med=0s      max=259.91ms p(90)=0s      p(95)=0s    
     http_req_duration..............: avg=7.38s   min=14.42ms med=7.12s   max=22.39s   p(90)=13.44s  p(95)=14.31s
       { expected_response:true }...: avg=7.38s   min=14.42ms med=7.12s   max=22.39s   p(90)=13.44s  p(95)=14.31s
     http_req_failed................: 0.00%  ✓ 0          ✗ 33014 
     http_req_receiving.............: avg=63.91µs min=16µs    med=38.85µs max=119.56ms p(90)=66.17µs p(95)=77.1µs
     http_req_sending...............: avg=57.69µs min=6.3µs   med=12.1µs  max=128.09ms p(90)=26.6µs  p(95)=50µs  
     http_req_tls_handshaking.......: avg=0s      min=0s      med=0s      max=0s       p(90)=0s      p(95)=0s    
     http_req_waiting...............: avg=7.38s   min=14.36ms med=7.12s   max=22.39s   p(90)=13.44s  p(95)=14.31s
     http_reqs......................: 33014  106.224702/s
     iteration_duration.............: avg=7.38s   min=15ms    med=7.12s   max=22.39s   p(90)=13.44s  p(95)=14.31s
     iterations.....................: 33014  106.224702/s
     vus............................: 352    min=50       max=1500
     vus_max........................: 1500   min=1500     max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5312815e-3752-4d0e-3917-076ac4957700/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a0a21a0f-e929-4fd0-7647-8afeda4cac00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 31272 / ✗ 313
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 31585

     checks.........................: 66.33% ✓ 62857      ✗ 31898 
     data_received..................: 162 MB 519 kB/s
     data_sent......................: 38 MB  121 kB/s
     http_req_blocked...............: avg=33.89µs min=1.1µs   med=2.2µs  max=24.25ms p(90)=3.7µs   p(95)=18.89µs
     http_req_connecting............: avg=27.35µs min=0s      med=0s     max=24.17ms p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=7.72s   min=16.86ms med=7.53s  max=20.29s  p(90)=13.47s  p(95)=14.73s 
       { expected_response:true }...: avg=7.72s   min=16.86ms med=7.53s  max=20.29s  p(90)=13.47s  p(95)=14.73s 
     http_req_failed................: 0.00%  ✓ 0          ✗ 31585 
     http_req_receiving.............: avg=61.44µs min=18.5µs  med=50.9µs max=61.01ms p(90)=76.39µs p(95)=86.7µs 
     http_req_sending...............: avg=31.04µs min=7.4µs   med=12.7µs max=52.69ms p(90)=27.4µs  p(95)=51.28µs
     http_req_tls_handshaking.......: avg=0s      min=0s      med=0s     max=0s      p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=7.72s   min=16.78ms med=7.53s  max=20.29s  p(90)=13.47s  p(95)=14.73s 
     http_reqs......................: 31585  101.591634/s
     iteration_duration.............: avg=7.72s   min=17.21ms med=7.53s  max=20.29s  p(90)=13.48s  p(95)=14.73s 
     iterations.....................: 31585  101.591634/s
     vus............................: 352    min=0        max=1499
     vus_max........................: 1500   min=1443     max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3068f65d-be41-4866-b440-8a1f39f67a00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7d7afdee-288b-418c-dd6e-a01615770900/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-deno`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  98% — ✓ 30346 / ✗ 355
     ✗ valid response structure
      ↳  98% — ✓ 30346 / ✗ 355

     checks.........................: 99.22% ✓ 91393     ✗ 710   
     data_received..................: 159 MB 511 kB/s
     data_sent......................: 36 MB  117 kB/s
     http_req_blocked...............: avg=78.16µs min=800ns    med=2µs    max=36.59ms p(90)=3.5µs   p(95)=140.79µs
     http_req_connecting............: avg=70.85µs min=0s       med=0s     max=36.41ms p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=7.96s   min=464.5ms  med=7.66s  max=25.1s   p(90)=13.99s  p(95)=15.28s  
       { expected_response:true }...: avg=7.96s   min=464.5ms  med=7.66s  max=25.1s   p(90)=13.99s  p(95)=15.28s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 30701 
     http_req_receiving.............: avg=87.62µs min=13.89µs  med=28µs   max=53.84ms p(90)=74.59µs p(95)=92.2µs  
     http_req_sending...............: avg=55.64µs min=5.6µs    med=11.2µs max=22.27ms p(90)=33.09µs p(95)=74.59µs 
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s     max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=7.96s   min=464.45ms med=7.66s  max=25.1s   p(90)=13.99s  p(95)=15.28s  
     http_reqs......................: 30701  98.621488/s
     iteration_duration.............: avg=7.97s   min=465.31ms med=7.66s  max=25.11s  p(90)=13.99s  p(95)=15.28s  
     iterations.....................: 30701  98.621488/s
     vus............................: 167    min=50      max=1500
     vus_max........................: 1500   min=1500    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7ba2dd24-978d-4d14-d234-d1c38d55ab00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2f6b6bfd-e692-4c90-ee9e-415ac93e0500/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 72141     ✗ 0     
     data_received..................: 121 MB  390 kB/s
     data_sent......................: 29 MB   92 kB/s
     http_req_blocked...............: avg=41.28µs min=1.1µs  med=3µs    max=22.57ms p(90)=6.3µs  p(95)=354.95µs
     http_req_connecting............: avg=32.96µs min=0s     med=0s     max=22.51ms p(90)=0s     p(95)=284.08µs
     http_req_duration..............: avg=10.06s  min=8.56ms med=10.17s max=19.27s  p(90)=17.35s p(95)=17.86s  
       { expected_response:true }...: avg=10.06s  min=8.56ms med=10.17s max=19.27s  p(90)=17.35s p(95)=17.86s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 24047 
     http_req_receiving.............: avg=71.66µs min=23.5µs med=67.6µs max=14.19ms p(90)=88.9µs p(95)=95.5µs  
     http_req_sending...............: avg=34.48µs min=6.9µs  med=17.3µs max=20.39ms p(90)=35.3µs p(95)=69.2µs  
     http_req_tls_handshaking.......: avg=0s      min=0s     med=0s     max=0s      p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=10.06s  min=8.47ms med=10.17s max=19.27s  p(90)=17.35s p(95)=17.86s  
     http_reqs......................: 24047   77.569775/s
     iteration_duration.............: avg=10.06s  min=9.13ms med=10.17s max=19.27s  p(90)=17.35s p(95)=17.86s  
     iterations.....................: 24047   77.569775/s
     vus............................: 140     min=50      max=1500
     vus_max........................: 1500    min=1500    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e89871da-25b4-4046-a029-98ed1cc69700/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e560c686-d9fa-4d14-e435-bdb1c19c0a00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 24767 / ✗ 32
     ✗ valid response structure
      ↳  99% — ✓ 24767 / ✗ 32

     checks.........................: 99.91% ✓ 74333    ✗ 64    
     data_received..................: 124 MB 384 kB/s
     data_sent......................: 29 MB  92 kB/s
     http_req_blocked...............: avg=252.35µs min=1.4µs    med=3.5µs  max=121.36ms p(90)=17.8µs  p(95)=322.11µs
     http_req_connecting............: avg=238.97µs min=0s       med=0s     max=120.98ms p(90)=0s      p(95)=203.22µs
     http_req_duration..............: avg=10.1s    min=458.9ms  med=9.73s  max=19.85s   p(90)=18.14s  p(95)=18.79s  
       { expected_response:true }...: avg=10.1s    min=458.9ms  med=9.73s  max=19.85s   p(90)=18.14s  p(95)=18.79s  
     http_req_failed................: 0.00%  ✓ 0        ✗ 24799 
     http_req_receiving.............: avg=100.94µs min=26.1µs   med=82.3µs max=20.94ms  p(90)=131.7µs p(95)=159.41µs
     http_req_sending...............: avg=52.55µs  min=9.4µs    med=22.3µs max=34.17ms  p(90)=56.7µs  p(95)=82.4µs  
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=10.1s    min=458.45ms med=9.73s  max=19.85s   p(90)=18.14s  p(95)=18.79s  
     http_reqs......................: 24799  77.18038/s
     iteration_duration.............: avg=10.1s    min=459.9ms  med=9.73s  max=19.85s   p(90)=18.14s  p(95)=18.79s  
     iterations.....................: 24799  77.18038/s
     vus............................: 70     min=0      max=1498
     vus_max........................: 1500   min=1123   max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7ae18c51-ac79-4700-ac39-6906cb8e4500/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b78fe654-811c-4729-64b4-54499e84d400/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga-uws`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  68% — ✓ 16059 / ✗ 7241
     ✗ valid response structure
      ↳  68% — ✓ 16059 / ✗ 7241

     checks.........................: 79.28% ✓ 55418     ✗ 14482 
     data_received..................: 103 MB 326 kB/s
     data_sent......................: 28 MB  87 kB/s
     http_req_blocked...............: avg=48.17µs min=1µs      med=2.1µs   max=113.57ms p(90)=3.7µs   p(95)=180.5µs 
     http_req_connecting............: avg=39.28µs min=0s       med=0s      max=113.28ms p(90)=0s      p(95)=114.91µs
     http_req_duration..............: avg=10.78s  min=163.12ms med=5.29s   max=52.81s   p(90)=26.09s  p(95)=32.27s  
       { expected_response:true }...: avg=10.78s  min=163.12ms med=5.29s   max=52.81s   p(90)=26.09s  p(95)=32.27s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 23300 
     http_req_receiving.............: avg=56.52µs min=12.2µs   med=36.19µs max=26.82ms  p(90)=63.89µs p(95)=74.99µs 
     http_req_sending...............: avg=56.85µs min=6.09µs   med=12.3µs  max=41.03ms  p(90)=33.89µs p(95)=64.39µs 
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s      max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=10.78s  min=163.07ms med=5.29s   max=52.81s   p(90)=26.09s  p(95)=32.27s  
     http_reqs......................: 23300  73.478101/s
     iteration_duration.............: avg=10.78s  min=163.63ms med=5.29s   max=52.81s   p(90)=26.09s  p(95)=32.27s  
     iterations.....................: 23300  73.478101/s
     vus............................: 331    min=50      max=1500
     vus_max........................: 1500   min=1500    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/cd845b3b-a62e-4f06-1066-a392153c8b00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5b41e5e9-14ae-467e-e9bd-549fd9480000/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server-node16`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  51% — ✓ 8969 / ✗ 8356
     ✗ valid response structure
      ↳  51% — ✓ 8969 / ✗ 8356

     checks.........................: 67.84% ✓ 35263     ✗ 16712 
     data_received..................: 74 MB  227 kB/s
     data_sent......................: 21 MB  63 kB/s
     http_req_blocked...............: avg=54.54µs min=1.3µs    med=2.6µs  max=17.43ms p(90)=16.29µs p(95)=430.04µs
     http_req_connecting............: avg=44.59µs min=0s       med=0s     max=17.37ms p(90)=0s      p(95)=358.9µs 
     http_req_duration..............: avg=14.82s  min=182.64ms med=8.37s  max=56.94s  p(90)=34.97s  p(95)=43.74s  
       { expected_response:true }...: avg=14.82s  min=182.64ms med=8.37s  max=56.94s  p(90)=34.97s  p(95)=43.74s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 17325 
     http_req_receiving.............: avg=75.49µs min=24.4µs   med=63.7µs max=16.61ms p(90)=89.4µs  p(95)=98.9µs  
     http_req_sending...............: avg=39.88µs min=7.8µs    med=15.1µs max=28.71ms p(90)=46.7µs  p(95)=68.4µs  
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s     max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=14.82s  min=182.54ms med=8.37s  max=56.94s  p(90)=34.97s  p(95)=43.74s  
     http_reqs......................: 17325  53.388414/s
     iteration_duration.............: avg=14.82s  min=183.3ms  med=8.37s  max=56.94s  p(90)=34.97s  p(95)=43.74s  
     iterations.....................: 17325  53.388414/s
     vus............................: 52     min=0       max=1500
     vus_max........................: 1500   min=1344    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d649fe08-2db9-4fba-0a44-0f91a8e84400/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/149c531e-6dad-44f5-f86e-1eaf8a307e00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-uws`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  99% — ✓ 16733 / ✗ 156
     ✗ no graphql errors
      ↳  68% — ✓ 11529 / ✗ 5360
     ✗ valid response structure
      ↳  68% — ✓ 11529 / ✗ 5204

     checks.........................: 78.77% ✓ 39791     ✗ 10720 
     data_received..................: 139 MB 408 kB/s
     data_sent......................: 21 MB  62 kB/s
     http_req_blocked...............: avg=75.84µs  min=1.5µs   med=2.9µs  max=146.17ms p(90)=19.6µs  p(95)=481.86µs
     http_req_connecting............: avg=63.47µs  min=0s      med=0s     max=145.82ms p(90)=0s      p(95)=394.96µs
     http_req_duration..............: avg=13.76s   min=49.2ms  med=7.25s  max=1m0s     p(90)=38.66s  p(95)=44.2s   
       { expected_response:true }...: avg=13.33s   min=49.2ms  med=7.16s  max=59.96s   p(90)=37.73s  p(95)=43.31s  
     http_req_failed................: 0.92%  ✓ 156       ✗ 16733 
     http_req_receiving.............: avg=104.12µs min=0s      med=60.3µs max=110.01ms p(90)=113.5µs p(95)=167.66µs
     http_req_sending...............: avg=94.19µs  min=8.4µs   med=15.7µs max=130.99ms p(90)=56.1µs  p(95)=83.92µs 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=13.76s   min=49.1ms  med=7.25s  max=1m0s     p(90)=38.66s  p(95)=44.2s   
     http_reqs......................: 16889  49.687784/s
     iteration_duration.............: avg=13.76s   min=49.99ms med=7.25s  max=1m0s     p(90)=38.66s  p(95)=44.2s   
     iterations.....................: 16889  49.687784/s
     vus............................: 1      min=0       max=1500
     vus_max........................: 1500   min=1253    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/736ac490-1f6c-40aa-325e-f2fba4c46f00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0439f3d3-6871-44f7-80f7-077b9f216300/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  91% — ✓ 28428 / ✗ 2576
     ✗ no graphql errors
      ↳  91% — ✓ 28386 / ✗ 2618
     ✗ valid response structure
      ↳  99% — ✓ 28386 / ✗ 42

     checks.........................: 94.21% ✓ 85200     ✗ 5236  
     data_received..................: 144 MB 430 kB/s
     data_sent......................: 37 MB  111 kB/s
     http_req_blocked...............: avg=141.08µs min=1µs     med=2.2µs  max=76.77ms p(90)=165µs   p(95)=382.5µs 
     http_req_connecting............: avg=128.24µs min=0s      med=0s     max=76.58ms p(90)=109.6µs p(95)=312.31µs
     http_req_duration..............: avg=8.1s     min=48.75ms med=2.95s  max=1m0s    p(90)=20.99s  p(95)=59.99s  
       { expected_response:true }...: avg=3.4s     min=48.75ms med=2.92s  max=59.76s  p(90)=3.15s   p(95)=3.28s   
     http_req_failed................: 8.30%  ✓ 2576      ✗ 28428 
     http_req_receiving.............: avg=46.71µs  min=0s      med=40.2µs max=7.86ms  p(90)=71.5µs  p(95)=80.3µs  
     http_req_sending...............: avg=44.72µs  min=6.4µs   med=13.1µs max=39.85ms p(90)=34.9µs  p(95)=55.4µs  
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=8.1s     min=48.66ms med=2.95s  max=1m0s    p(90)=20.99s  p(95)=59.99s  
     http_reqs......................: 31004  92.980212/s
     iteration_duration.............: avg=8.1s     min=49.36ms med=2.95s  max=1m0s    p(90)=20.99s  p(95)=1m0s    
     iterations.....................: 31004  92.980212/s
     vus............................: 22     min=22      max=1500
     vus_max........................: 1500   min=1500    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/334b4e5d-cdbb-43fc-847b-c66ed247dc00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b324b88a-8dc4-42e9-e428-c16f20243d00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  89% — ✓ 21791 / ✗ 2613
     ✗ no graphql errors
      ↳  86% — ✓ 21050 / ✗ 3354
     ✗ valid response structure
      ↳  96% — ✓ 21050 / ✗ 741

     checks.........................: 90.49% ✓ 63891     ✗ 6708  
     data_received..................: 109 MB 326 kB/s
     data_sent......................: 29 MB  87 kB/s
     http_req_blocked...............: avg=191.28µs min=900ns   med=2.2µs   max=60.62ms p(90)=250.39µs p(95)=441.86µs
     http_req_connecting............: avg=177.17µs min=0s      med=0s      max=60.57ms p(90)=202.39µs p(95)=363.39µs
     http_req_duration..............: avg=10.35s   min=89.09ms med=3.74s   max=1m0s    p(90)=59.99s   p(95)=1m0s    
       { expected_response:true }...: avg=4.4s     min=89.09ms med=3.66s   max=59.56s  p(90)=4.73s    p(95)=5.51s   
     http_req_failed................: 10.70% ✓ 2613      ✗ 21791 
     http_req_receiving.............: avg=47.69µs  min=0s      med=37.99µs max=20.57ms p(90)=68.8µs   p(95)=77.58µs 
     http_req_sending...............: avg=37.86µs  min=5.9µs   med=13µs    max=34.8ms  p(90)=44.89µs  p(95)=62.9µs  
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=10.35s   min=89ms    med=3.74s   max=1m0s    p(90)=59.99s   p(95)=1m0s    
     http_reqs......................: 24404  73.186745/s
     iteration_duration.............: avg=10.35s   min=89.97ms med=3.74s   max=1m0s    p(90)=1m0s     p(95)=1m0s    
     iterations.....................: 24404  73.186745/s
     vus............................: 20     min=20      max=1500
     vus_max........................: 1500   min=1500    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4718b7ee-cb4b-4243-6bc2-4714b24ec800/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/bdeb3682-ae3b-41fe-604c-96abd7235b00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  86% — ✓ 18089 / ✗ 2739
     ✗ no graphql errors
      ↳  86% — ✓ 17928 / ✗ 2900
     ✗ valid response structure
      ↳  99% — ✓ 17928 / ✗ 161

     checks.........................: 90.29% ✓ 53945     ✗ 5800  
     data_received..................: 93 MB  278 kB/s
     data_sent......................: 25 MB  74 kB/s
     http_req_blocked...............: avg=372µs    min=1.5µs   med=3µs    max=113.76ms p(90)=350.03µs p(95)=810.21µs
     http_req_connecting............: avg=351.38µs min=0s      med=0s     max=113.55ms p(90)=282.49µs p(95)=633.51µs
     http_req_duration..............: avg=12.18s   min=92.04ms med=4.13s  max=1m0s     p(90)=59.99s   p(95)=1m0s    
       { expected_response:true }...: avg=4.94s    min=92.04ms med=4.08s  max=59.77s   p(90)=4.65s    p(95)=5.35s   
     http_req_failed................: 13.15% ✓ 2739      ✗ 18089 
     http_req_receiving.............: avg=67.69µs  min=0s      med=63.6µs max=55.11ms  p(90)=89.3µs   p(95)=97µs    
     http_req_sending...............: avg=59.78µs  min=7.4µs   med=16.8µs max=84.68ms  p(90)=53.1µs   p(95)=68.6µs  
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=12.18s   min=91.86ms med=4.13s  max=1m0s     p(90)=59.99s   p(95)=1m0s    
     http_reqs......................: 20828  62.291446/s
     iteration_duration.............: avg=12.18s   min=92.77ms med=4.14s  max=1m0s     p(90)=1m0s     p(95)=1m0s    
     iterations.....................: 20828  62.291446/s
     vus............................: 4      min=0       max=1500
     vus_max........................: 1500   min=1306    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/44b84d98-7368-43d7-7f00-7dc1fa107300/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/74e4d9f5-0e32-4ff6-a40b-dea069c51700/public" alt="HTTP Overview" />


  </details>