## Overview for: `scenarios/fed-v1-constant-vus-over-time`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. It's being executed with a constant amount of VUs over a fixed amount of time. It measure things like memory usage, CPU usage, average RPS. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was running 400 VUs over 200s


### Comparison


| Gateway                             | RPS ⬇️ |        Requests         |         Duration          |
| :---------------------------------- | :----: | :---------------------: | :-----------------------: |
| wundergraph                         |  857   | 171703 total, 0 failed  |  avg: 460ms, p95: 674ms   |
| stitching-federation-with-yoga-bun  |  150   |  30218 total, 0 failed  | avg: 2653ms, p95: 4167ms  |
| mesh-supergraph                     |  100   |  20352 total, 0 failed  | avg: 3946ms, p95: 5063ms  |
| stitching-federation-with-yoga-uws  |   88   |  17839 total, 0 failed  | avg: 4512ms, p95: 7276ms  |
| mesh                                |   82   |  16748 total, 0 failed  | avg: 4807ms, p95: 6230ms  |
| apollo-router                       |   81   |  16682 total, 0 failed  | avg: 4862ms, p95: 7528ms  |
| mercurius                           |   77   |  15526 total, 0 failed  | avg: 5172ms, p95: 5658ms  |
| apollo-gateway-with-yoga-uws        |   61   |  12342 total, 0 failed  | avg: 6509ms, p95: 13512ms |
| stitching-federation-with-yoga      |   58   | 12341 total, 529 failed | avg: 6593ms, p95: 16902ms |
| stitching-federation-with-yoga-deno |   53   |  10971 total, 0 failed  | avg: 7370ms, p95: 10062ms |
| apollo-server-node16                |   52   |  10763 total, 0 failed  | avg: 7549ms, p95: 16943ms |
| apollo-gateway-with-yoga            |   45   |  9292 total, 0 failed   | avg: 8787ms, p95: 20486ms |
| apollo-server                       |   45   |  9367 total, 0 failed   | avg: 8718ms, p95: 18078ms |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 515109     ✗ 0     
     data_received..................: 855 MB  4.3 MB/s
     data_sent......................: 204 MB  1.0 MB/s
     http_req_blocked...............: avg=204.72µs min=900ns   med=1.8µs    max=212.11ms p(90)=2.9µs    p(95)=3.5µs   
     http_req_connecting............: avg=195.15µs min=0s      med=0s       max=173.83ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=460.28ms min=59.56ms med=442.65ms max=1.34s    p(90)=619.84ms p(95)=674.32ms
       { expected_response:true }...: avg=460.28ms min=59.56ms med=442.65ms max=1.34s    p(90)=619.84ms p(95)=674.32ms
   ✓ http_req_failed................: 0.00%   ✓ 0          ✗ 171703
     http_req_receiving.............: avg=6.21ms   min=13.39µs med=27.5µs   max=663.96ms p(90)=241.39µs p(95)=28.07ms 
     http_req_sending...............: avg=849.82µs min=5.9µs   med=10µs     max=504.64ms p(90)=20.9µs   p(95)=95.29µs 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=453.21ms min=59.53ms med=439.72ms max=1.29s    p(90)=602.75ms p(95)=651.35ms
     http_reqs......................: 171703  857.420126/s
     iteration_duration.............: avg=466.14ms min=62.99ms med=447.67ms max=1.34s    p(90)=627.37ms p(95)=685.65ms
     iterations.....................: 171703  857.420126/s
     vus............................: 400     min=400      max=400 
     vus_max........................: 400     min=400      max=400 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3ca53eae-f956-46e4-b272-de2b49e72e00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/452678ea-510e-434c-a054-d98c5a38db00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 30216 / ✗ 2
     ✗ valid response structure
      ↳  99% — ✓ 30216 / ✗ 2

     checks.........................: 99.99% ✓ 90650      ✗ 4    
     data_received..................: 151 MB 747 kB/s
     data_sent......................: 36 MB  178 kB/s
     http_req_blocked...............: avg=923.78µs min=1µs      med=2µs    max=129.01ms p(90)=3µs    p(95)=4.2µs   
     http_req_connecting............: avg=911.22µs min=0s       med=0s     max=126.26ms p(90)=0s     p(95)=0s      
     http_req_duration..............: avg=2.65s    min=382.97ms med=2.52s  max=6.95s    p(90)=2.9s   p(95)=4.16s   
       { expected_response:true }...: avg=2.65s    min=382.97ms med=2.52s  max=6.95s    p(90)=2.9s   p(95)=4.16s   
   ✓ http_req_failed................: 0.00%  ✓ 0          ✗ 30218
     http_req_receiving.............: avg=1.03ms   min=12.9µs   med=30.7µs max=142.38ms p(90)=56.5µs p(95)=189.14µs
     http_req_sending...............: avg=407.73µs min=5.6µs    med=11.2µs max=154.42ms p(90)=26.2µs p(95)=106.4µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=2.65s    min=370.46ms med=2.52s  max=6.94s    p(90)=2.89s  p(95)=4.16s   
     http_reqs......................: 30218  150.009119/s
     iteration_duration.............: avg=2.65s    min=469.46ms med=2.52s  max=6.98s    p(90)=2.9s   p(95)=4.16s   
     iterations.....................: 30218  150.009119/s
     vus............................: 180    min=180      max=400
     vus_max........................: 400    min=400      max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/43313e49-7eef-45af-33eb-c6420bd8eb00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/dc7b22e1-171f-4277-8b77-6e444e1fc100/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 20313 / ✗ 39
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 20352

     checks.........................: 66.60% ✓ 40665      ✗ 20391
     data_received..................: 103 MB 512 kB/s
     data_sent......................: 24 MB  120 kB/s
     http_req_blocked...............: avg=739.99µs min=1.2µs  med=2.2µs  max=98.79ms p(90)=3.7µs  p(95)=5µs    
     http_req_connecting............: avg=720.77µs min=0s     med=0s     max=98.75ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=3.94s    min=1.51s  med=3.84s  max=8.64s   p(90)=4.52s  p(95)=5.06s  
       { expected_response:true }...: avg=3.94s    min=1.51s  med=3.84s  max=8.64s   p(90)=4.52s  p(95)=5.06s  
   ✓ http_req_failed................: 0.00%  ✓ 0          ✗ 20352
     http_req_receiving.............: avg=59.93µs  min=19.9µs med=50.1µs max=15.17ms p(90)=75.5µs p(95)=85.44µs
     http_req_sending...............: avg=103.49µs min=7.6µs  med=13µs   max=27.88ms p(90)=25.8µs p(95)=30.9µs 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=3.94s    min=1.51s  med=3.84s  max=8.64s   p(90)=4.52s  p(95)=5.06s  
     http_reqs......................: 20352  100.970826/s
     iteration_duration.............: avg=3.94s    min=1.51s  med=3.84s  max=8.65s   p(90)=4.52s  p(95)=5.06s  
     iterations.....................: 20352  100.970826/s
     vus............................: 246    min=246      max=400
     vus_max........................: 400    min=400      max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9d19e85b-85ab-431b-92ba-c163ea663e00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/86b12987-9997-450a-d42e-539416b57300/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-uws`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 17692 / ✗ 147
     ✗ valid response structure
      ↳  99% — ✓ 17692 / ✗ 147

     checks.........................: 99.45% ✓ 53223     ✗ 294  
     data_received..................: 91 MB  451 kB/s
     data_sent......................: 21 MB  105 kB/s
     http_req_blocked...............: avg=1.5ms    min=1µs    med=2µs     max=181.96ms p(90)=3.2µs  p(95)=6.1µs 
     http_req_connecting............: avg=1.47ms   min=0s     med=0s      max=152.12ms p(90)=0s     p(95)=0s    
     http_req_duration..............: avg=4.51s    min=2.59s  med=4.01s   max=12.05s   p(90)=6.34s  p(95)=7.27s 
       { expected_response:true }...: avg=4.51s    min=2.59s  med=4.01s   max=12.05s   p(90)=6.34s  p(95)=7.27s 
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 17839
     http_req_receiving.............: avg=53.27µs  min=16.7µs med=37.69µs max=21.61ms  p(90)=68.2µs p(95)=78.2µs
     http_req_sending...............: avg=593.99µs min=7.1µs  med=11.9µs  max=112.89ms p(90)=26µs   p(95)=35µs  
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s       p(90)=0s     p(95)=0s    
     http_req_waiting...............: avg=4.51s    min=2.59s  med=4.01s   max=12.05s   p(90)=6.34s  p(95)=7.27s 
     http_reqs......................: 17839  88.181306/s
     iteration_duration.............: avg=4.51s    min=2.59s  med=4.01s   max=12.05s   p(90)=6.34s  p(95)=7.27s 
     iterations.....................: 17839  88.181306/s
     vus............................: 200    min=200     max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4c947568-87dc-465a-1d61-abfbcfe55800/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c387e4c4-3648-41ae-001d-298b9045ca00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 16647 / ✗ 101
     ✗ valid response structure
      ↳  99% — ✓ 16647 / ✗ 101

     checks.........................: 99.59% ✓ 50042    ✗ 202  
     data_received..................: 85 MB  418 kB/s
     data_sent......................: 20 MB  98 kB/s
     http_req_blocked...............: avg=1.51ms   min=1.4µs  med=2.6µs  max=141.16ms p(90)=3.9µs  p(95)=5.4µs 
     http_req_connecting............: avg=1.49ms   min=0s     med=0s     max=141.11ms p(90)=0s     p(95)=0s    
     http_req_duration..............: avg=4.8s     min=1.79s  med=4.68s  max=9.88s    p(90)=5.71s  p(95)=6.23s 
       { expected_response:true }...: avg=4.8s     min=1.79s  med=4.68s  max=9.88s    p(90)=5.71s  p(95)=6.23s 
   ✓ http_req_failed................: 0.00%  ✓ 0        ✗ 16748
     http_req_receiving.............: avg=71.76µs  min=22.9µs med=51.6µs max=27.72ms  p(90)=78.3µs p(95)=88.6µs
     http_req_sending...............: avg=435.65µs min=7.1µs  med=14.3µs max=92.64ms  p(90)=29.5µs p(95)=39.5µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s     p(95)=0s    
     http_req_waiting...............: avg=4.8s     min=1.79s  med=4.68s  max=9.88s    p(90)=5.71s  p(95)=6.23s 
     http_reqs......................: 16748  82.62685/s
     iteration_duration.............: avg=4.8s     min=1.79s  med=4.68s  max=9.97s    p(90)=5.71s  p(95)=6.23s 
     iterations.....................: 16748  82.62685/s
     vus............................: 158    min=158    max=400
     vus_max........................: 400    min=400    max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7f4f87d6-42be-494a-3356-7c1cbaa00a00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4b77084a-ed63-4a4b-259d-f7c4d3469f00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 16649 / ✗ 33
     ✗ valid response structure
      ↳  99% — ✓ 16649 / ✗ 33

     checks.........................: 99.86% ✓ 49980     ✗ 66   
     data_received..................: 83 MB  406 kB/s
     data_sent......................: 20 MB  97 kB/s
     http_req_blocked...............: avg=1.71ms   min=1.3µs   med=2.8µs   max=168.55ms p(90)=4.7µs   p(95)=20µs    
     http_req_connecting............: avg=1.68ms   min=0s      med=0s      max=168.51ms p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=4.86s    min=1.99s   med=4.64s   max=11.09s   p(90)=6.18s   p(95)=7.52s   
       { expected_response:true }...: avg=4.86s    min=1.99s   med=4.64s   max=11.09s   p(90)=6.18s   p(95)=7.52s   
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 16682
     http_req_receiving.............: avg=100.14µs min=24.29µs med=62.05µs max=147.06ms p(90)=108.5µs p(95)=138µs   
     http_req_sending...............: avg=580.24µs min=9µs     med=16.5µs  max=111.86ms p(90)=46.2µs  p(95)=112.59µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=4.86s    min=1.99s   med=4.64s   max=11.08s   p(90)=6.18s   p(95)=7.52s   
     http_reqs......................: 16682  81.620761/s
     iteration_duration.............: avg=4.86s    min=1.99s   med=4.64s   max=11.18s   p(90)=6.18s   p(95)=7.53s   
     iterations.....................: 16682  81.620761/s
     vus............................: 143    min=143     max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9284acc1-fbe3-472a-333f-65da43932800/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5d5ba2d9-0e82-41d4-985e-fceffa19d600/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 46578     ✗ 0    
     data_received..................: 78 MB   387 kB/s
     data_sent......................: 18 MB   91 kB/s
     http_req_blocked...............: avg=1.25ms   min=1.2µs    med=2.8µs  max=88.79ms p(90)=4.1µs  p(95)=14.07µs
     http_req_connecting............: avg=1.23ms   min=0s       med=0s     max=83.75ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=5.17s    min=790.94ms med=5.09s  max=13.56s  p(90)=5.4s   p(95)=5.65s  
       { expected_response:true }...: avg=5.17s    min=790.94ms med=5.09s  max=13.56s  p(90)=5.4s   p(95)=5.65s  
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 15526
     http_req_receiving.............: avg=65.05µs  min=20.8µs   med=63.2µs max=9.67ms  p(90)=84.7µs p(95)=91µs   
     http_req_sending...............: avg=235.57µs min=6.3µs    med=16.4µs max=59.09ms p(90)=30.1µs p(95)=41.47µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=5.17s    min=790.66ms med=5.09s  max=13.56s  p(90)=5.4s   p(95)=5.65s  
     http_reqs......................: 15526   77.010799/s
     iteration_duration.............: avg=5.17s    min=804.86ms med=5.09s  max=13.64s  p(90)=5.4s   p(95)=5.65s  
     iterations.....................: 15526   77.010799/s
     vus............................: 211     min=211     max=400
     vus_max........................: 400     min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ec9c5c31-1106-4619-150c-812434136000/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/fd2ed6c7-c356-48c5-f19e-ed87f940a300/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga-uws`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  85% — ✓ 10551 / ✗ 1791
     ✗ valid response structure
      ↳  85% — ✓ 10551 / ✗ 1791

     checks.........................: 90.32% ✓ 33444     ✗ 3582 
     data_received..................: 59 MB  294 kB/s
     data_sent......................: 15 MB  73 kB/s
     http_req_blocked...............: avg=1.24ms   min=1.3µs    med=2.2µs max=70.4ms  p(90)=3.6µs  p(95)=12.39µs 
     http_req_connecting............: avg=1.22ms   min=0s       med=0s    max=66.52ms p(90)=0s     p(95)=0s      
     http_req_duration..............: avg=6.5s     min=330.35ms med=5.77s max=23.46s  p(90)=12.17s p(95)=13.51s  
       { expected_response:true }...: avg=6.5s     min=330.35ms med=5.77s max=23.46s  p(90)=12.17s p(95)=13.51s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 12342
     http_req_receiving.............: avg=84.94µs  min=18.59µs  med=48µs  max=57.27ms p(90)=73.2µs p(95)=85.2µs  
     http_req_sending...............: avg=124.35µs min=6.5µs    med=13µs  max=58.49ms p(90)=28.7µs p(95)=135.47µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s    max=0s      p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=6.5s     min=330.25ms med=5.77s max=23.46s  p(90)=12.17s p(95)=13.51s  
     http_reqs......................: 12342  61.285252/s
     iteration_duration.............: avg=6.51s    min=331.06ms med=5.78s max=23.46s  p(90)=12.17s p(95)=13.51s  
     iterations.....................: 12342  61.285252/s
     vus............................: 304    min=304     max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6e09a623-d0ce-4b61-4c4d-29763d890000/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ece8a284-8bb4-4aa6-c118-53b6f4d69c00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  95% — ✓ 11812 / ✗ 529
     ✗ no graphql errors
      ↳  92% — ✓ 11374 / ✗ 967
     ✗ valid response structure
      ↳  96% — ✓ 11374 / ✗ 438

     checks.........................: 94.70% ✓ 34560     ✗ 1934 
     data_received..................: 67 MB  320 kB/s
     data_sent......................: 15 MB  70 kB/s
     http_req_blocked...............: avg=4.82ms   min=1.7µs    med=3.4µs  max=259.93ms p(90)=18.4µs  p(95)=2.98ms  
     http_req_connecting............: avg=4.74ms   min=0s       med=0s     max=240.17ms p(90)=0s      p(95)=2.45ms  
     http_req_duration..............: avg=6.59s    min=856.72ms med=4.04s  max=1m0s     p(90)=6.72s   p(95)=16.9s   
       { expected_response:true }...: avg=4.69s    min=856.72ms med=4.02s  max=59.52s   p(90)=5.69s   p(95)=7.17s   
   ✓ http_req_failed................: 4.28%  ✓ 529       ✗ 11812
     http_req_receiving.............: avg=85.14µs  min=0s       med=69.2µs max=27.26ms  p(90)=103.3µs p(95)=132.11µs
     http_req_sending...............: avg=950.35µs min=9.7µs    med=20µs   max=79.03ms  p(90)=47.2µs  p(95)=372.03µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=6.59s    min=856.58ms med=4.04s  max=1m0s     p(90)=6.72s   p(95)=16.9s   
     http_reqs......................: 12341  58.947836/s
     iteration_duration.............: avg=6.6s     min=857.5ms  med=4.04s  max=1m0s     p(90)=6.73s   p(95)=16.91s  
     iterations.....................: 12341  58.947836/s
     vus............................: 41     min=41      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b8b016ce-4133-4060-602b-bb96bdf10700/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/09e771f3-ff27-4181-52d4-cd4d682e0f00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-deno`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  98% — ✓ 10858 / ✗ 113
     ✗ valid response structure
      ↳  98% — ✓ 10858 / ✗ 113

     checks.........................: 99.31% ✓ 32687    ✗ 226  
     data_received..................: 57 MB  278 kB/s
     data_sent......................: 13 MB  64 kB/s
     http_req_blocked...............: avg=2.58ms   min=1.3µs   med=2.8µs  max=156.81ms p(90)=5.6µs   p(95)=29.05µs
     http_req_connecting............: avg=2.53ms   min=0s      med=0s     max=156.76ms p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=7.36s    min=3.65s   med=7.02s  max=14.78s   p(90)=9.09s   p(95)=10.06s 
       { expected_response:true }...: avg=7.36s    min=3.65s   med=7.02s  max=14.78s   p(90)=9.09s   p(95)=10.06s 
   ✓ http_req_failed................: 0.00%  ✓ 0        ✗ 10971
     http_req_receiving.............: avg=209.17µs min=19.59µs med=51.5µs max=42.12ms  p(90)=143.4µs p(95)=230.9µs
     http_req_sending...............: avg=834.55µs min=9.5µs   med=17.6µs max=80.56ms  p(90)=109.8µs p(95)=595.1µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s       p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=7.36s    min=3.65s   med=7.02s  max=14.78s   p(90)=9.09s   p(95)=10.05s 
     http_reqs......................: 10971  53.88746/s
     iteration_duration.............: avg=7.37s    min=3.65s   med=7.02s  max=14.78s   p(90)=9.09s   p(95)=10.06s 
     iterations.....................: 10971  53.88746/s
     vus............................: 170    min=170    max=400
     vus_max........................: 400    min=400    max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/12f73362-0018-4da7-346a-87da749afa00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7ab4d576-dbd1-4e0b-4df5-2d93423c6000/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server-node16`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  75% — ✓ 8095 / ✗ 2668
     ✗ valid response structure
      ↳  75% — ✓ 8095 / ✗ 2668

     checks.........................: 83.47% ✓ 26953     ✗ 5336 
     data_received..................: 52 MB  253 kB/s
     data_sent......................: 13 MB  62 kB/s
     http_req_blocked...............: avg=3.16ms   min=1.3µs    med=2.7µs  max=179.7ms  p(90)=4.89µs p(95)=16.7µs  
     http_req_connecting............: avg=3.11ms   min=0s       med=0s     max=179.63ms p(90)=0s     p(95)=0s      
     http_req_duration..............: avg=7.54s    min=137.97ms med=6.97s  max=24.72s   p(90)=14.48s p(95)=16.94s  
       { expected_response:true }...: avg=7.54s    min=137.97ms med=6.97s  max=24.72s   p(90)=14.48s p(95)=16.94s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 10763
     http_req_receiving.............: avg=80.64µs  min=27µs     med=62.1µs max=70.55ms  p(90)=91.4µs p(95)=102.99µs
     http_req_sending...............: avg=221.59µs min=8.1µs    med=15.6µs max=72.35ms  p(90)=32.3µs p(95)=129.2µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=7.54s    min=137.85ms med=6.97s  max=24.72s   p(90)=14.48s p(95)=16.94s  
     http_reqs......................: 10763  52.580461/s
     iteration_duration.............: avg=7.55s    min=138.78ms med=6.97s  max=24.72s   p(90)=14.48s p(95)=16.94s  
     iterations.....................: 10763  52.580461/s
     vus............................: 226    min=226     max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/89ac9a29-856c-46f8-d9a3-ca0d699bbb00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4a08aca0-8e7d-4d8d-e144-d27b83e74800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  60% — ✓ 5630 / ✗ 3662
     ✗ valid response structure
      ↳  60% — ✓ 5630 / ✗ 3662

     checks.........................: 73.72% ✓ 20552     ✗ 7324 
     data_received..................: 40 MB  192 kB/s
     data_sent......................: 11 MB  54 kB/s
     http_req_blocked...............: avg=4.85ms   min=1.5µs    med=2.9µs   max=182.51ms p(90)=4.8µs  p(95)=39.16µs 
     http_req_connecting............: avg=4.79ms   min=0s       med=0s      max=182.43ms p(90)=0s     p(95)=0s      
     http_req_duration..............: avg=8.78s    min=702ms    med=7.57s   max=36.31s   p(90)=18.14s p(95)=20.48s  
       { expected_response:true }...: avg=8.78s    min=702ms    med=7.57s   max=36.31s   p(90)=18.14s p(95)=20.48s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 9292 
     http_req_receiving.............: avg=87.21µs  min=25.5µs   med=65.7µs  max=18.14ms  p(90)=110µs  p(95)=137.34µs
     http_req_sending...............: avg=892.82µs min=9.4µs    med=17.39µs max=110.43ms p(90)=51.6µs p(95)=475.41µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s       p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=8.78s    min=701.94ms med=7.57s   max=36.31s   p(90)=18.14s p(95)=20.48s  
     http_reqs......................: 9292   45.032476/s
     iteration_duration.............: avg=8.79s    min=702.36ms med=7.57s   max=36.39s   p(90)=18.14s p(95)=20.48s  
     iterations.....................: 9292   45.032476/s
     vus............................: 164    min=164     max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/45166b6d-67d8-47ad-a224-8aa348b05300/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8d3a9213-a2b1-4581-7b0d-4bc133328800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  69% — ✓ 6488 / ✗ 2879
     ✗ valid response structure
      ↳  69% — ✓ 6488 / ✗ 2879

     checks.........................: 79.50% ✓ 22343    ✗ 5758 
     data_received..................: 42 MB  204 kB/s
     data_sent......................: 11 MB  54 kB/s
     http_req_blocked...............: avg=5.46ms   min=1.4µs    med=2.7µs  max=221.65ms p(90)=5.6µs    p(95)=34.3µs  
     http_req_connecting............: avg=5.38ms   min=0s       med=0s     max=210.09ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=8.71s    min=479.27ms med=8.05s  max=36.23s   p(90)=15.51s   p(95)=18.07s  
       { expected_response:true }...: avg=8.71s    min=479.27ms med=8.05s  max=36.23s   p(90)=15.51s   p(95)=18.07s  
   ✓ http_req_failed................: 0.00%  ✓ 0        ✗ 9367 
     http_req_receiving.............: avg=887.22µs min=25.5µs   med=65.5µs max=144.34ms p(90)=114.34µs p(95)=149.17µs
     http_req_sending...............: avg=1.1ms    min=9.29µs   med=16.4µs max=203.98ms p(90)=50.73µs  p(95)=1.42ms  
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=8.71s    min=479.18ms med=8.05s  max=36.21s   p(90)=15.51s   p(95)=18.07s  
     http_reqs......................: 9367   45.44137/s
     iteration_duration.............: avg=8.72s    min=479.95ms med=8.05s  max=36.28s   p(90)=15.53s   p(95)=18.07s  
     iterations.....................: 9367   45.44137/s
     vus............................: 101    min=101    max=400
     vus_max........................: 400    min=400    max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/96ea2881-8fbe-4329-843e-e2ee36617200/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6f3850b5-26bd-43e3-eb14-fb4362e19e00/public" alt="HTTP Overview" />


  </details>