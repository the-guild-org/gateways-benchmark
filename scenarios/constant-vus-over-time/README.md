## Overview for scenario: `constant-vus-over-time`


This scenario runs 4 servics and a GraphQL gateway with Federation spec, and runs a heavy query. It's being executed with a constant amount of VUs over a fixed amount of time. It measure things like memory usage, CPU usage, average RPS. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was running 100 VUs over 60s


### Comparison


| Gateway                             | RPS ⬇️ |       Requests        |         Duration         |
| :---------------------------------- | :----: | :-------------------: | :----------------------: |
| wundergraph                         |  1007  | 60482 total, 0 failed |  avg: 99ms, p95: 160ms   |
| mesh                                |   99   | 6007 total, 0 failed  | avg: 1004ms, p95: 1515ms |
| mercurius                           |   79   | 4773 total, 0 failed  | avg: 1260ms, p95: 1551ms |
| stitching-federation-with-yoga-bun  |   74   | 4539 total, 0 failed  | avg: 1337ms, p95: 2204ms |
| apollo-router                       |   70   | 4297 total, 0 failed  | avg: 1402ms, p95: 2656ms |
| apollo-gateway-with-yoga            |   69   | 4216 total, 0 failed  | avg: 1433ms, p95: 1885ms |
| stitching-federation-with-yoga-deno |   57   | 3513 total, 0 failed  | avg: 1720ms, p95: 2265ms |
| apollo-server                       |   54   | 3310 total, 0 failed  | avg: 1828ms, p95: 2124ms |
| stitching-federation-with-yoga      |   49   | 3006 total, 0 failed  | avg: 2018ms, p95: 2557ms |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 181446      ✗ 0    
     data_received..................: 294 MB  4.9 MB/s
     data_sent......................: 72 MB   1.2 MB/s
   ✓ expected_result................: 0.00%   ✓ 0           ✗ 0    
     http_req_blocked...............: avg=22.12µs min=900ns   med=1.9µs   max=31.96ms  p(90)=2.8µs    p(95)=3.3µs   
     http_req_connecting............: avg=17.68µs min=0s      med=0s      max=27.53ms  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=98.56ms min=14.11ms med=92.58ms max=299.61ms p(90)=141.33ms p(95)=159.7ms 
       { expected_response:true }...: avg=98.56ms min=14.11ms med=92.58ms max=299.61ms p(90)=141.33ms p(95)=159.7ms 
   ✓ http_req_failed................: 0.00%   ✓ 0           ✗ 60482
     http_req_receiving.............: avg=586.6µs min=14.4µs  med=36.8µs  max=145.15ms p(90)=203.8µs  p(95)=554.87µs
     http_req_sending...............: avg=101.9µs min=6µs     med=10.8µs  max=89.49ms  p(90)=20.1µs   p(95)=59.99µs 
     http_req_tls_handshaking.......: avg=0s      min=0s      med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=97.87ms min=13.95ms med=92.2ms  max=295.26ms p(90)=139.84ms p(95)=158.05ms
     http_reqs......................: 60482   1007.226473/s
     iteration_duration.............: avg=99.2ms  min=14.36ms med=93.14ms max=317.68ms p(90)=142.16ms p(95)=160.55ms
     iterations.....................: 60482   1007.226473/s
   ✓ no_errors......................: 0.00%   ✓ 0           ✗ 0    
     vus............................: 100     min=100       max=100
     vus_max........................: 100     min=100       max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3e007d25-35b2-4d34-71dc-9bce39675c00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/de6b3530-ffbd-4820-5f70-abe0cdc32000/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 18021     ✗ 0    
     data_received..................: 30 MB   496 kB/s
     data_sent......................: 7.1 MB  118 kB/s
   ✓ expected_result................: 0.00%   ✓ 0         ✗ 0    
     http_req_blocked...............: avg=103.7µs min=900ns    med=2µs      max=18.62ms p(90)=2.9µs  p(95)=3.3µs 
     http_req_connecting............: avg=98.49µs min=0s       med=0s       max=16.81ms p(90)=0s     p(95)=0s    
     http_req_duration..............: avg=1s      min=477.97ms med=958.68ms max=2.89s   p(90)=1.31s  p(95)=1.51s 
       { expected_response:true }...: avg=1s      min=477.97ms med=958.68ms max=2.89s   p(90)=1.31s  p(95)=1.51s 
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 6007 
     http_req_receiving.............: avg=48.83µs min=17.6µs   med=39.1µs   max=9.82ms  p(90)=61.9µs p(95)=71.1µs
     http_req_sending...............: avg=36.48µs min=6.3µs    med=12.3µs   max=7.35ms  p(90)=19.8µs p(95)=28.2µs
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s       max=0s      p(90)=0s     p(95)=0s    
     http_req_waiting...............: avg=1s      min=477.92ms med=958.61ms max=2.89s   p(90)=1.31s  p(95)=1.51s 
     http_reqs......................: 6007    99.283068/s
     iteration_duration.............: avg=1s      min=478.29ms med=958.94ms max=2.89s   p(90)=1.31s  p(95)=1.51s 
     iterations.....................: 6007    99.283068/s
   ✓ no_errors......................: 0.00%   ✓ 0         ✗ 0    
     vus............................: 100     min=100     max=100
     vus_max........................: 100     min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/753b32ef-837f-4bdc-6a49-78fe71259b00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7b77df6d-4210-4c26-016b-3c3e6df14600/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 14319     ✗ 0    
     data_received..................: 24 MB   398 kB/s
     data_sent......................: 5.7 MB  94 kB/s
   ✓ expected_result................: 0.00%   ✓ 0         ✗ 0    
     http_req_blocked...............: avg=141.18µs min=1.1µs    med=2.5µs  max=13.28ms p(90)=3.4µs   p(95)=4.59µs 
     http_req_connecting............: avg=130.69µs min=0s       med=0s     max=12.85ms p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=1.26s    min=334.79ms med=1.2s   max=4.51s   p(90)=1.43s   p(95)=1.55s  
       { expected_response:true }...: avg=1.26s    min=334.79ms med=1.2s   max=4.51s   p(90)=1.43s   p(95)=1.55s  
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 4773 
     http_req_receiving.............: avg=62.87µs  min=22.4µs   med=60.5µs max=4.27ms  p(90)=81.1µs  p(95)=87.53µs
     http_req_sending...............: avg=38.29µs  min=6.5µs    med=15.6µs max=6.44ms  p(90)=29.78µs p(95)=34.5µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=1.26s    min=334.71ms med=1.2s   max=4.5s    p(90)=1.43s   p(95)=1.55s  
     http_reqs......................: 4773    79.117998/s
     iteration_duration.............: avg=1.26s    min=335.14ms med=1.2s   max=4.51s   p(90)=1.43s   p(95)=1.55s  
     iterations.....................: 4773    79.117998/s
   ✓ no_errors......................: 0.00%   ✓ 0         ✗ 0    
     vus............................: 100     min=100     max=100
     vus_max........................: 100     min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4a05e506-fd37-4e8c-30e5-eaad24b55c00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4a820c41-15af-4180-1691-9264aac32000/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 13617     ✗ 0    
     data_received..................: 23 MB   372 kB/s
     data_sent......................: 5.4 MB  89 kB/s
   ✓ expected_result................: 0.00%   ✓ 0         ✗ 0    
     http_req_blocked...............: avg=961.35µs min=1.2µs    med=2µs    max=77.52ms p(90)=3.1µs   p(95)=4.59µs  
     http_req_connecting............: avg=914.89µs min=0s       med=0s     max=68.9ms  p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=1.33s    min=620.24ms med=1.27s  max=3.48s   p(90)=1.84s   p(95)=2.2s    
       { expected_response:true }...: avg=1.33s    min=620.24ms med=1.27s  max=3.48s   p(90)=1.84s   p(95)=2.2s    
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 4539 
     http_req_receiving.............: avg=96µs     min=18.1µs   med=33.7µs max=21.68ms p(90)=67.82µs p(95)=91.74µs 
     http_req_sending...............: avg=188.07µs min=6.4µs    med=12µs   max=60.87ms p(90)=28.94µs p(95)=170.64µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=1.33s    min=620.18ms med=1.27s  max=3.48s   p(90)=1.84s   p(95)=2.2s    
     http_reqs......................: 4539    74.623996/s
     iteration_duration.............: avg=1.33s    min=620.54ms med=1.27s  max=3.48s   p(90)=1.84s   p(95)=2.2s    
     iterations.....................: 4539    74.623996/s
   ✓ no_errors......................: 0.00%   ✓ 0         ✗ 0    
     vus............................: 100     min=100     max=100
     vus_max........................: 100     min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/dcac417b-fe9b-4081-60cc-cf2b8faa0800/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e974209f-4f1e-4709-b1ca-633ecf2df300/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 12891     ✗ 0    
     data_received..................: 21 MB   353 kB/s
     data_sent......................: 5.1 MB  84 kB/s
   ✓ expected_result................: 0.00%   ✓ 0         ✗ 0    
     http_req_blocked...............: avg=391.93µs min=1.3µs    med=2.8µs   max=54.28ms p(90)=4.5µs    p(95)=18.5µs  
     http_req_connecting............: avg=380.5µs  min=0s       med=0s      max=52.74ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=1.4s     min=214.39ms med=1.27s   max=5.28s   p(90)=2.21s    p(95)=2.65s   
       { expected_response:true }...: avg=1.4s     min=214.39ms med=1.27s   max=5.28s   p(90)=2.21s    p(95)=2.65s   
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 4297 
     http_req_receiving.............: avg=80.11µs  min=23.2µs   med=66.1µs  max=10.56ms p(90)=112.54µs p(95)=145.13µs
     http_req_sending...............: avg=126.73µs min=10.8µs   med=18.89µs max=19.79ms p(90)=44.64µs  p(95)=71.43µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=1.4s     min=214.32ms med=1.27s   max=5.28s   p(90)=2.21s    p(95)=2.65s   
     http_reqs......................: 4297    70.956188/s
     iteration_duration.............: avg=1.4s     min=214.7ms  med=1.27s   max=5.3s    p(90)=2.21s    p(95)=2.65s   
     iterations.....................: 4297    70.956188/s
   ✓ no_errors......................: 0.00%   ✓ 0         ✗ 0    
     vus............................: 100     min=100     max=100
     vus_max........................: 100     min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/628b5e6c-945d-4643-7f9c-1ec358f34700/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/82b021f4-e1ee-4759-6a00-c03ba3dc2f00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 4186 / ✗ 30
     ✗ expected_result
      ↳  99% — ✓ 4215 / ✗ 1

     checks.........................: 99.75% ✓ 12617    ✗ 31   
     data_received..................: 21 MB  347 kB/s
     data_sent......................: 5.0 MB 82 kB/s
   ✓ expected_result................: 0.00%  ✓ 0        ✗ 0    
     http_req_blocked...............: avg=67.79µs min=1µs      med=2µs    max=14.69ms p(90)=3µs     p(95)=5.1µs  
     http_req_connecting............: avg=60.99µs min=0s       med=0s     max=7.73ms  p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=1.43s   min=709.81ms med=1.35s  max=3.22s   p(90)=1.7s    p(95)=1.88s  
       { expected_response:true }...: avg=1.43s   min=709.81ms med=1.35s  max=3.22s   p(90)=1.7s    p(95)=1.88s  
   ✓ http_req_failed................: 0.00%  ✓ 0        ✗ 4216 
     http_req_receiving.............: avg=47.73µs min=17.6µs   med=42.8µs max=3.56ms  p(90)=65.39µs p(95)=72.99µs
     http_req_sending...............: avg=32.1µs  min=7.3µs    med=12.3µs max=7.65ms  p(90)=25.8µs  p(95)=30.72µs
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s     max=0s      p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=1.43s   min=709.77ms med=1.35s  max=3.22s   p(90)=1.7s    p(95)=1.88s  
     http_reqs......................: 4216   69.44722/s
     iteration_duration.............: avg=1.43s   min=710.11ms med=1.35s  max=3.22s   p(90)=1.7s    p(95)=1.88s  
     iterations.....................: 4216   69.44722/s
   ✓ no_errors......................: 0.00%  ✓ 0        ✗ 0    
     vus............................: 100    min=100    max=100
     vus_max........................: 100    min=100    max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/646b8a35-546a-4b5c-128f-6abfbb4a1100/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/269c473d-b35b-4982-fe2e-93268db18400/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-deno`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 3512 / ✗ 1
     ✓ expected_result

     checks.........................: 99.99% ✓ 10538     ✗ 1    
     data_received..................: 18 MB  290 kB/s
     data_sent......................: 4.2 MB 69 kB/s
   ✓ expected_result................: 0.00%  ✓ 0         ✗ 0    
     http_req_blocked...............: avg=288.21µs min=1µs      med=2.2µs  max=35.86ms p(90)=4µs     p(95)=11.2µs  
     http_req_connecting............: avg=272.4µs  min=0s       med=0s     max=21.04ms p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=1.71s    min=590.78ms med=1.67s  max=2.9s    p(90)=1.99s   p(95)=2.26s   
       { expected_response:true }...: avg=1.71s    min=590.78ms med=1.67s  max=2.9s    p(90)=1.99s   p(95)=2.26s   
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 3513 
     http_req_receiving.............: avg=100.31µs min=17.3µs   med=39µs   max=16.54ms p(90)=93.68µs p(95)=129.1µs 
     http_req_sending...............: avg=228.63µs min=6.6µs    med=12.6µs max=34.04ms p(90)=30.1µs  p(95)=105.34µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=1.71s    min=590.7ms  med=1.67s  max=2.89s   p(90)=1.99s   p(95)=2.26s   
     http_reqs......................: 3513   57.978091/s
     iteration_duration.............: avg=1.72s    min=591.04ms med=1.67s  max=2.92s   p(90)=1.99s   p(95)=2.26s   
     iterations.....................: 3513   57.978091/s
   ✓ no_errors......................: 0.00%  ✓ 0         ✗ 0    
     vus............................: 100    min=100     max=100
     vus_max........................: 100    min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a877e851-60db-43ba-b963-33da2fad0400/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d3f47b56-565b-4a13-7543-7bb75ffdb900/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 3304 / ✗ 6
     ✓ expected_result

     checks.........................: 99.93% ✓ 9924      ✗ 6    
     data_received..................: 17 MB  281 kB/s
     data_sent......................: 3.9 MB 65 kB/s
   ✓ expected_result................: 0.00%  ✓ 0         ✗ 0    
     http_req_blocked...............: avg=225.16µs min=1.4µs    med=2.9µs  max=16.7ms  p(90)=4.5µs  p(95)=13.2µs  
     http_req_connecting............: avg=216.12µs min=0s       med=0s     max=16.67ms p(90)=0s     p(95)=0s      
     http_req_duration..............: avg=1.82s    min=523.01ms med=1.67s  max=21.46s  p(90)=1.96s  p(95)=2.12s   
       { expected_response:true }...: avg=1.82s    min=523.01ms med=1.67s  max=21.46s  p(90)=1.96s  p(95)=2.12s   
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 3310 
     http_req_receiving.............: avg=76.12µs  min=27µs     med=72.6µs max=8.06ms  p(90)=96µs   p(95)=103.45µs
     http_req_sending...............: avg=43.99µs  min=8.69µs   med=17.9µs max=7.87ms  p(90)=31.4µs p(95)=39.31µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=1.82s    min=522.9ms  med=1.67s  max=21.46s  p(90)=1.96s  p(95)=2.12s   
     http_reqs......................: 3310   54.424332/s
     iteration_duration.............: avg=1.82s    min=523.43ms med=1.67s  max=21.46s  p(90)=1.96s  p(95)=2.12s   
     iterations.....................: 3310   54.424332/s
   ✓ no_errors......................: 0.00%  ✓ 0         ✗ 0    
     vus............................: 100    min=100     max=100
     vus_max........................: 100    min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a5e64d65-759b-491e-c9c7-50b2a94a9400/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1af842e0-f26a-455f-fdb6-bfd3bd5c8200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 3003 / ✗ 3
     ✗ expected_result
      ↳  99% — ✓ 3005 / ✗ 1

     checks.........................: 99.95% ✓ 9014      ✗ 4    
     data_received..................: 15 MB  246 kB/s
     data_sent......................: 3.6 MB 59 kB/s
   ✓ expected_result................: 0.00%  ✓ 0         ✗ 0    
     http_req_blocked...............: avg=507.65µs min=1.3µs med=2.6µs  max=40.98ms p(90)=3.8µs  p(95)=13.05µs
     http_req_connecting............: avg=489.42µs min=0s    med=0s     max=40.93ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=2.01s    min=1.04s med=1.94s  max=4.1s    p(90)=2.3s   p(95)=2.55s  
       { expected_response:true }...: avg=2.01s    min=1.04s med=1.94s  max=4.1s    p(90)=2.3s   p(95)=2.55s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 3006 
     http_req_receiving.............: avg=64.89µs  min=23µs  med=63.2µs max=3.58ms  p(90)=84.5µs p(95)=89.7µs 
     http_req_sending...............: avg=59.38µs  min=8.4µs med=17µs   max=24.94ms p(90)=32.7µs p(95)=50.82µs
     http_req_tls_handshaking.......: avg=0s       min=0s    med=0s     max=0s      p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=2.01s    min=1.04s med=1.94s  max=4.1s    p(90)=2.3s   p(95)=2.55s  
     http_reqs......................: 3006   49.302965/s
     iteration_duration.............: avg=2.01s    min=1.04s med=1.94s  max=4.11s   p(90)=2.31s  p(95)=2.55s  
     iterations.....................: 3006   49.302965/s
   ✓ no_errors......................: 0.00%  ✓ 0         ✗ 0    
     vus............................: 33     min=33      max=100
     vus_max........................: 100    min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/87333e39-aed5-4169-9ec6-45a0e91a1300/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ff1b6c86-7a19-4b78-6fe0-718a5da1e800/public" alt="HTTP Overview" />


  </details>