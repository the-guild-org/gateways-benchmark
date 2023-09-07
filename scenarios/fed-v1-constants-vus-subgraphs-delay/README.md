## Overview for: `scenarios/fed-v1-constants-vus-subgraphs-delay`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. All subgraphs have an intentional delay on replying, and this creates additional pressure on the gateway's memory. We are running a heavy load of concurrent VUs to measure response time and other stats, during stress. It measure things like memory usage, CPU usage, response times.


This scenario was running 350 VUs over 400s


### Comparison


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b144b160-6029-424a-0396-7fd834bcff00/public" alt="Comparison" />


| Gateway              | RPS ⬇️ |        Requests         |          Duration          |
| :------------------- | :----: | :---------------------: | :------------------------: |
| wundergraph          |  816   | 327139 total, 0 failed  |   avg: 354ms, p95: 682ms   |
| mesh-bun             |  416   | 166746 total, 0 failed  |  avg: 836ms, p95: 1188ms   |
| mesh                 |  218   |  87437 total, 0 failed  |  avg: 1600ms, p95: 1950ms  |
| apollo-router        |   50   |  20337 total, 0 failed  |  avg: 6906ms, p95: 9812ms  |
| apollo-server        |   39   |  15853 total, 0 failed  | avg: 8857ms, p95: 12965ms  |
| mesh-supergraph      |   34   |  14087 total, 0 failed  | avg: 9993ms, p95: 10967ms  |
| apollo-server-node16 |   30   |  12335 total, 0 failed  | avg: 11417ms, p95: 19198ms |
| mercurius            |   6    | 2659 total, 1687 failed | avg: 52049ms, p95: 60001ms |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 327139

     checks.........................: 66.66% ✓ 654278     ✗ 327139
     data_received..................: 47 MB  119 kB/s
     data_sent......................: 388 MB 970 kB/s
     http_req_blocked...............: avg=169.19µs min=1.3µs   med=3.2µs    max=833.04ms p(90)=4.89µs   p(95)=6.1µs   
     http_req_connecting............: avg=149.84µs min=0s      med=0s       max=832.96ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=353.84ms min=410.1µs med=337.71ms max=3.06s    p(90)=597.28ms p(95)=682.35ms
       { expected_response:true }...: avg=353.84ms min=410.1µs med=337.71ms max=3.06s    p(90)=597.28ms p(95)=682.35ms
     http_req_failed................: 0.00%  ✓ 0          ✗ 327139
     http_req_receiving.............: avg=34ms     min=9.5µs   med=35.9µs   max=2.83s    p(90)=110.66ms p(95)=248.24ms
     http_req_sending...............: avg=3.58ms   min=6.6µs   med=16µs     max=1.59s    p(90)=138.3µs  p(95)=810.11µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=316.25ms min=336.4µs med=320.5ms  max=1.16s    p(90)=511.57ms p(95)=556.88ms
     http_reqs......................: 327139 816.905761/s
     iteration_duration.............: avg=427.53ms min=1.08ms  med=396.59ms max=3.4s     p(90)=714.48ms p(95)=853.56ms
     iterations.....................: 327139 816.905761/s
     vus............................: 350    min=350      max=350 
     vus_max........................: 350    min=350      max=350 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4a4494db-60e7-4f07-a799-48226d97fa00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2e410293-d7ab-4740-9f2c-be8bd0adc400/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4cb3c670-dcb2-4913-7d4f-7f02c6983700/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  0% — ✓ 0 / ✗ 166746
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 166746

     checks.........................: 33.33% ✓ 166746     ✗ 333492
     data_received..................: 159 MB 396 kB/s
     data_sent......................: 198 MB 494 kB/s
     http_req_blocked...............: avg=92.07µs  min=1.2µs    med=2.29µs   max=250.11ms p(90)=3.8µs   p(95)=4.5µs  
     http_req_connecting............: avg=82.04µs  min=0s       med=0s       max=63.22ms  p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=836.31ms min=137.81ms med=882.03ms max=1.88s    p(90)=1.1s    p(95)=1.18s  
       { expected_response:true }...: avg=836.31ms min=137.81ms med=882.03ms max=1.88s    p(90)=1.1s    p(95)=1.18s  
     http_req_failed................: 0.00%  ✓ 0          ✗ 166746
     http_req_receiving.............: avg=3.71ms   min=10.7µs   med=26.2µs   max=494.43ms p(90)=717.3µs p(95)=10ms   
     http_req_sending...............: avg=1.18ms   min=6.4µs    med=12.6µs   max=481.62ms p(90)=106.6µs p(95)=176.3µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s       p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=831.42ms min=137.7ms  med=877.62ms max=1.62s    p(90)=1.1s    p(95)=1.18s  
     http_reqs......................: 166746 416.233284/s
     iteration_duration.............: avg=840.27ms min=139.1ms  med=885.51ms max=1.88s    p(90)=1.11s   p(95)=1.19s  
     iterations.....................: 166746 416.233284/s
     vus............................: 350    min=350      max=350 
     vus_max........................: 350    min=350      max=350 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/267f5ef5-dd1d-41b5-85e1-ccf42183bb00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/fb6c0a37-04a6-4a05-5702-aa1b90757700/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0f6ef93f-6364-475b-4382-242d541fe800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 87437

     checks.........................: 66.66% ✓ 174874     ✗ 87437
     data_received..................: 99 MB  247 kB/s
     data_sent......................: 104 MB 259 kB/s
     http_req_blocked...............: avg=229.8µs  min=1.5µs    med=3µs    max=218ms    p(90)=4.8µs    p(95)=5.8µs   
     http_req_connecting............: avg=217.61µs min=0s       med=0s     max=78.77ms  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=1.59s    min=718.74ms med=1.58s  max=4.02s    p(90)=1.85s    p(95)=1.94s   
       { expected_response:true }...: avg=1.59s    min=718.74ms med=1.58s  max=4.02s    p(90)=1.85s    p(95)=1.94s   
     http_req_failed................: 0.00%  ✓ 0          ✗ 87437
     http_req_receiving.............: avg=3.36ms   min=13.4µs   med=40.8µs max=394.47ms p(90)=309.51µs p(95)=5.12ms  
     http_req_sending...............: avg=961.48µs min=8.3µs    med=16µs   max=327.21ms p(90)=119.2µs  p(95)=331.34µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=1.59s    min=717.48ms med=1.57s  max=4.02s    p(90)=1.85s    p(95)=1.94s   
     http_reqs......................: 87437  218.167202/s
     iteration_duration.............: avg=1.6s     min=719.37ms med=1.58s  max=4.09s    p(90)=1.86s    p(95)=1.95s   
     iterations.....................: 87437  218.167202/s
     vus............................: 120    min=120      max=350
     vus_max........................: 350    min=350      max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/49d84e78-53f8-41e4-db80-63a7d0b04700/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7ef68e82-8242-4ee4-3a4f-956c0416a700/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f51a1cd0-ad65-43a3-01e2-18aa93246c00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 61011     ✗ 0    
     data_received..................: 1.8 GB  4.4 MB/s
     data_sent......................: 24 MB   60 kB/s
     http_req_blocked...............: avg=871.27µs min=1.4µs med=3.5µs   max=130.89ms p(90)=4.8µs    p(95)=5.5µs   
     http_req_connecting............: avg=833.56µs min=0s    med=0s      max=130.86ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=6.9s     min=1.32s med=6.92s   max=14.43s   p(90)=9.08s    p(95)=9.81s   
       { expected_response:true }...: avg=6.9s     min=1.32s med=6.92s   max=14.43s   p(90)=9.08s    p(95)=9.81s   
     http_req_failed................: 0.00%   ✓ 0         ✗ 20337
     http_req_receiving.............: avg=904.45µs min=42µs  med=85.99µs max=300.81ms p(90)=271.53µs p(95)=436.43µs
     http_req_sending...............: avg=1.33ms   min=7.1µs med=19.9µs  max=199.33ms p(90)=35.2µs   p(95)=2.37ms  
     http_req_tls_handshaking.......: avg=0s       min=0s    med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=6.9s     min=1.32s med=6.92s   max=14.43s   p(90)=9.08s    p(95)=9.81s   
     http_reqs......................: 20337   50.276056/s
     iteration_duration.............: avg=6.92s    min=1.33s med=6.94s   max=14.44s   p(90)=9.1s     p(95)=9.82s   
     iterations.....................: 20337   50.276056/s
     vus............................: 96      min=96      max=350
     vus_max........................: 350     min=350     max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d38c5496-b0c4-461b-30ad-0a3f2e0dbf00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/75248206-0028-47e7-72da-2806d1a89700/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/518d616d-eddf-4832-ce64-4a6db8ed3400/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 47559    ✗ 0    
     data_received..................: 1.4 GB  3.4 MB/s
     data_sent......................: 19 MB   46 kB/s
     http_req_blocked...............: avg=966.78µs min=1.4µs  med=3.5µs   max=300.15ms p(90)=4.97µs   p(95)=5.8µs 
     http_req_connecting............: avg=918.7µs  min=0s     med=0s      max=78.01ms  p(90)=0s       p(95)=0s    
     http_req_duration..............: avg=8.85s    min=3.79s  med=8.54s   max=17.72s   p(90)=11.8s    p(95)=12.96s
       { expected_response:true }...: avg=8.85s    min=3.79s  med=8.54s   max=17.72s   p(90)=11.8s    p(95)=12.96s
     http_req_failed................: 0.00%   ✓ 0        ✗ 15853
     http_req_receiving.............: avg=5.79ms   min=43.5µs med=87.49µs max=851.56ms p(90)=473.73µs p(95)=5.26ms
     http_req_sending...............: avg=1.88ms   min=6.6µs  med=19.2µs  max=583.09ms p(90)=80.53µs  p(95)=9.5ms 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s       p(90)=0s       p(95)=0s    
     http_req_waiting...............: avg=8.84s    min=3.79s  med=8.54s   max=17.67s   p(90)=11.78s   p(95)=12.93s
     http_reqs......................: 15853   39.08115/s
     iteration_duration.............: avg=8.89s    min=3.8s   med=8.58s   max=17.9s    p(90)=11.88s   p(95)=13.02s
     iterations.....................: 15853   39.08115/s
     vus............................: 83      min=83     max=350
     vus_max........................: 350     min=350    max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ae1cfe1f-8412-49de-fcbe-434ea68cdc00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/75ef8a5a-804a-4a92-ae3a-b6c89d258d00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/add45970-ab17-4d6d-1834-ad5bd2792500/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 14087

     checks.........................: 66.66% ✓ 28174     ✗ 14087
     data_received..................: 1.2 GB 3.1 MB/s
     data_sent......................: 17 MB  41 kB/s
     http_req_blocked...............: avg=799.94µs min=2.1µs  med=4.59µs  max=57.4ms  p(90)=6.6µs    p(95)=15µs    
     http_req_connecting............: avg=782.07µs min=0s     med=0s      max=52.84ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=9.99s    min=5.25s  med=9.97s   max=13.97s  p(90)=10.7s    p(95)=10.96s  
       { expected_response:true }...: avg=9.99s    min=5.25s  med=9.97s   max=13.97s  p(90)=10.7s    p(95)=10.96s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 14087
     http_req_receiving.............: avg=1.16ms   min=68.1µs med=158.3µs max=1.61s   p(90)=410.38µs p(95)=548.71µs
     http_req_sending...............: avg=175.28µs min=11.4µs med=26µs    max=61.03ms p(90)=41.1µs   p(95)=57.47µs 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=9.99s    min=5.25s  med=9.97s   max=13.97s  p(90)=10.7s    p(95)=10.96s  
     http_reqs......................: 14087  34.769864/s
     iteration_duration.............: avg=9.99s    min=5.26s  med=9.97s   max=14s     p(90)=10.71s   p(95)=10.96s  
     iterations.....................: 14087  34.769864/s
     vus............................: 33     min=33      max=350
     vus_max........................: 350    min=350     max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1bd2a694-b7e5-452a-b779-b719d2445000/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/85db57a3-f7cd-4395-01bc-9a2055bae100/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/cc382aa7-25fb-45ae-e845-6a1b392cb700/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server-node16`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 37005     ✗ 0    
     data_received..................: 1.1 GB  2.7 MB/s
     data_sent......................: 15 MB   36 kB/s
     http_req_blocked...............: avg=1.15ms min=1.9µs med=5.4µs   max=200.32ms p(90)=7.5µs    p(95)=10.33µs
     http_req_connecting............: avg=1.08ms min=0s    med=0s      max=69.38ms  p(90)=0s       p(95)=0s     
     http_req_duration..............: avg=11.41s min=1.08s med=10.55s  max=31.82s   p(90)=16.85s   p(95)=19.19s 
       { expected_response:true }...: avg=11.41s min=1.08s med=10.55s  max=31.82s   p(90)=16.85s   p(95)=19.19s 
     http_req_failed................: 0.00%   ✓ 0         ✗ 12335
     http_req_receiving.............: avg=3.85ms min=66µs  med=126.1µs max=583.33ms p(90)=546.27µs p(95)=4.42ms 
     http_req_sending...............: avg=1.65ms min=8.6µs med=28.5µs  max=360.07ms p(90)=138.3µs  p(95)=5.77ms 
     http_req_tls_handshaking.......: avg=0s     min=0s    med=0s      max=0s       p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=11.41s min=1.08s med=10.55s  max=31.82s   p(90)=16.85s   p(95)=19.19s 
     http_reqs......................: 12335   30.343053/s
     iteration_duration.............: avg=11.46s min=1.09s med=10.6s   max=32.12s   p(90)=17.01s   p(95)=19.27s 
     iterations.....................: 12335   30.343053/s
     vus............................: 66      min=66      max=350
     vus_max........................: 350     min=350     max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b42269dc-0cbf-4217-dcd8-57c7a6650d00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5de0508a-f155-4d8a-fa2e-69a269bad000/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/277074f5-3b39-4496-0a0f-1cfb24103f00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  36% — ✓ 972 / ✗ 1687
     ✗ no graphql errors
      ↳  36% — ✓ 972 / ✗ 1687
     ✓ valid response structure

     checks.........................: 46.35% ✓ 2916     ✗ 3374 
     data_received..................: 85 MB  198 kB/s
     data_sent......................: 3.4 MB 7.9 kB/s
     http_req_blocked...............: avg=5.1ms    min=2.5µs  med=225.9µs max=96.65ms p(90)=23.48ms  p(95)=46.53ms 
     http_req_connecting............: avg=4.96ms   min=0s     med=146.2µs max=63.03ms p(90)=23.25ms  p(95)=46.12ms 
     http_req_duration..............: avg=52.04s   min=17.29s med=1m0s    max=1m0s    p(90)=1m0s     p(95)=1m0s    
       { expected_response:true }...: avg=38.24s   min=17.29s med=38.12s  max=59.99s  p(90)=54.66s   p(95)=55.22s  
     http_req_failed................: 63.44% ✓ 1687     ✗ 972  
     http_req_receiving.............: avg=217.25µs min=0s     med=0s      max=37.24ms p(90)=365.24µs p(95)=576.88µs
     http_req_sending...............: avg=912.14µs min=12.3µs med=47.3µs  max=60.42ms p(90)=1.39ms   p(95)=5.82ms  
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=52.04s   min=17.29s med=1m0s    max=1m0s    p(90)=1m0s     p(95)=1m0s    
     http_reqs......................: 2659   6.183484/s
     iteration_duration.............: avg=52.06s   min=17.3s  med=1m0s    max=1m0s    p(90)=1m0s     p(95)=1m0s    
     iterations.....................: 2659   6.183484/s
     vus............................: 204    min=204    max=350
     vus_max........................: 350    min=350    max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2face390-efdc-4f35-fa40-b97d9e1ee100/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/34b85983-4ee1-486c-22b2-daa86be12700/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e1de251e-ee19-4664-cc7a-b481a27ac800/public" alt="HTTP Overview" />


  </details>