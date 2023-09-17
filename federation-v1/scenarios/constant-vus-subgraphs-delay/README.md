## Overview for: `federation-v1/constant-vus-subgraphs-delay`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. It's being executed with a constant amount of VUs over a fixed amount of time. It measure things like memory usage, CPU usage, average RPS. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was running 300 VUs over 600s


### Comparison


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7d19d607-3c51-4535-76b5-da7f1c124100/public" alt="Comparison" />


| Gateway             | RPS ⬇️ |        Requests        |          Duration          | Notes                                                                    |
| :------------------ | :----: | :--------------------: | :------------------------: | :----------------------------------------------------------------------- |
| wundergraph         |  192   | 115747 total, 0 failed |  avg: 1310ms, p95: 2009ms  | ✅                                                                        |
| apollo-router       |  185   | 111723 total, 0 failed |  avg: 1135ms, p95: 2333ms  | ✅                                                                        |
| mesh-supergraph-bun |  110   | 66375 total, 0 failed  |  avg: 2647ms, p95: 4503ms  | ✅                                                                        |
| mesh-bun            |  102   | 61855 total, 0 failed  |  avg: 2852ms, p95: 4849ms  | ✅                                                                        |
| mesh-supergraph     |  100   | 60320 total, 0 failed  |  avg: 2923ms, p95: 3485ms  | ✅                                                                        |
| mesh                |   92   | 55629 total, 0 failed  |  avg: 3182ms, p95: 3720ms  | ✅                                                                        |
| apollo-server       |   64   | 38749 total, 86 failed |  avg: 4647ms, p95: 6003ms  | ❌ 86 failed requests, 86 non-200 responses, 86 unexpected GraphQL errors |
| mercurius           |   12   |  7838 total, 0 failed  | avg: 23409ms, p95: 24461ms | ✅                                                                        |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 347241     ✗ 0     
     data_received..................: 10 GB   17 MB/s
     data_sent......................: 137 MB  229 kB/s
     http_req_blocked...............: avg=115.11µs min=1.31µs   med=3.19µs  max=868.39ms p(90)=5.24µs   p(95)=6.17µs  
     http_req_connecting............: avg=3.76µs   min=0s       med=0s      max=30.82ms  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=1.3s     min=559.86ms med=1.24s   max=4.66s    p(90)=1.73s    p(95)=2s      
       { expected_response:true }...: avg=1.3s     min=559.86ms med=1.24s   max=4.66s    p(90)=1.73s    p(95)=2s      
     http_req_failed................: 0.00%   ✓ 0          ✗ 115747
     http_req_receiving.............: avg=121.29ms min=23.4µs   med=82.36µs max=2.67s    p(90)=444.53ms p(95)=827.93ms
     http_req_sending...............: avg=8.72ms   min=7.26µs   med=14.76µs max=2.02s    p(90)=35.99µs  p(95)=450.88µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=1.17s    min=559.61ms med=1.17s   max=2.56s    p(90)=1.43s    p(95)=1.52s   
     http_reqs......................: 115747  192.571224/s
     iteration_duration.............: avg=1.55s    min=569.22ms med=1.43s   max=5.96s    p(90)=2.25s    p(95)=2.52s   
     iterations.....................: 115747  192.571224/s
     vus............................: 65      min=65       max=300 
     vus_max........................: 300     min=300      max=300 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/50640486-6de6-4079-61e6-fbb4bbfbcb00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9223cc82-828d-4055-e2f9-aad0f9ee4d00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f56d79aa-066c-4bd8-a82d-c26cdc697500/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 335169     ✗ 0     
     data_received..................: 9.8 GB  16 MB/s
     data_sent......................: 133 MB  221 kB/s
     http_req_blocked...............: avg=248.07µs min=1.31µs   med=3.03µs   max=1.77s    p(90)=4.98µs  p(95)=6.08µs
     http_req_connecting............: avg=43.97µs  min=0s       med=0s       max=681.69ms p(90)=0s      p(95)=0s    
     http_req_duration..............: avg=1.13s    min=253.87ms med=964.36ms max=6.07s    p(90)=1.94s   p(95)=2.33s 
       { expected_response:true }...: avg=1.13s    min=253.87ms med=964.36ms max=6.07s    p(90)=1.94s   p(95)=2.33s 
     http_req_failed................: 0.00%   ✓ 0          ✗ 111723
     http_req_receiving.............: avg=284.96ms min=22.18µs  med=75.85µs  max=5.47s    p(90)=1.12s   p(95)=1.54s 
     http_req_sending...............: avg=14.12ms  min=7.43µs   med=13.79µs  max=4.11s    p(90)=35.87µs p(95)=3.3ms 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s       p(90)=0s      p(95)=0s    
     http_req_waiting...............: avg=836.38ms min=253.8ms  med=773.28ms max=2.55s    p(90)=1.22s   p(95)=1.33s 
     http_reqs......................: 111723  185.823945/s
     iteration_duration.............: avg=1.61s    min=263.45ms med=1.37s    max=9.12s    p(90)=2.9s    p(95)=3.4s  
     iterations.....................: 111723  185.823945/s
     vus............................: 2       min=2        max=300 
     vus_max........................: 300     min=300      max=300 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5018555d-8b3a-46e3-489b-70d0bae81900/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b2438595-5c78-4842-ef47-87138026d700/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/69c9961b-205e-4c34-b7fa-28b628a16400/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 199125     ✗ 0    
     data_received..................: 5.8 GB  9.7 MB/s
     data_sent......................: 79 MB   131 kB/s
     http_req_blocked...............: avg=47.46µs min=1.46µs  med=3.22µs  max=175.85ms p(90)=5.27µs  p(95)=6.44µs  
     http_req_connecting............: avg=25.07µs min=0s      med=0s      max=17.9ms   p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=2.64s   min=1.19s   med=2.36s   max=5.57s    p(90)=4.27s   p(95)=4.5s    
       { expected_response:true }...: avg=2.64s   min=1.19s   med=2.36s   max=5.57s    p(90)=4.27s   p(95)=4.5s    
     http_req_failed................: 0.00%   ✓ 0          ✗ 66375
     http_req_receiving.............: avg=19.59ms min=28.93µs med=69.13µs max=1.24s    p(90)=3.31ms  p(95)=115.04ms
     http_req_sending...............: avg=1.58ms  min=7.29µs  med=14.32µs max=872.67ms p(90)=34.92µs p(95)=148.63µs
     http_req_tls_handshaking.......: avg=0s      min=0s      med=0s      max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=2.62s   min=1.19s   med=2.34s   max=5.12s    p(90)=4.26s   p(95)=4.48s   
     http_reqs......................: 66375   110.155818/s
     iteration_duration.............: avg=2.71s   min=1.2s    med=2.42s   max=5.74s    p(90)=4.37s   p(95)=4.62s   
     iterations.....................: 66375   110.155818/s
     vus............................: 86      min=86       max=300
     vus_max........................: 300     min=300      max=300
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f1c4fc36-458c-4541-3587-c5a46b861300/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/cdef8908-8aa5-47a3-d5a4-e2738b12fc00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4cf5ce84-e5a6-45cb-cecd-3d1e3c446800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 185565     ✗ 0    
     data_received..................: 5.4 GB  9.0 MB/s
     data_sent......................: 73 MB   122 kB/s
     http_req_blocked...............: avg=53.54µs min=1.36µs  med=3.06µs  max=250.74ms p(90)=5.02µs   p(95)=6.12µs  
     http_req_connecting............: avg=29.91µs min=0s      med=0s      max=22.74ms  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=2.85s   min=1.33s   med=2.51s   max=5.66s    p(90)=4.67s    p(95)=4.84s   
       { expected_response:true }...: avg=2.85s   min=1.33s   med=2.51s   max=5.66s    p(90)=4.67s    p(95)=4.84s   
     http_req_failed................: 0.00%   ✓ 0          ✗ 61855
     http_req_receiving.............: avg=14.96ms min=29.59µs med=64.86µs max=1.35s    p(90)=814.73µs p(95)=69.61ms 
     http_req_sending...............: avg=1.56ms  min=7.59µs  med=13.89µs max=654.82ms p(90)=35.64µs  p(95)=193.46µs
     http_req_tls_handshaking.......: avg=0s      min=0s      med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=2.83s   min=1.33s   med=2.5s    max=5.48s    p(90)=4.66s    p(95)=4.83s   
     http_reqs......................: 61855   102.639656/s
     iteration_duration.............: avg=2.91s   min=1.34s   med=2.56s   max=6.23s    p(90)=4.76s    p(95)=4.97s   
     iterations.....................: 61855   102.639656/s
     vus............................: 124     min=124      max=300
     vus_max........................: 300     min=300      max=300
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/bac5eb57-7c6c-4ad1-f00f-d77f9e066500/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a039fd16-81ce-44c1-ebdb-886b3a186200/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/105f4752-4fe9-4272-2b82-f206987bbf00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 180960     ✗ 0    
     data_received..................: 5.3 GB  8.8 MB/s
     data_sent......................: 72 MB   119 kB/s
     http_req_blocked...............: avg=42.37µs  min=1.31µs  med=3.53µs  max=139.58ms p(90)=5.5µs   p(95)=6.37µs  
     http_req_connecting............: avg=24.15µs  min=0s      med=0s      max=30.29ms  p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=2.92s    min=1.36s   med=2.89s   max=6.52s    p(90)=3.35s   p(95)=3.48s   
       { expected_response:true }...: avg=2.92s    min=1.36s   med=2.89s   max=6.52s    p(90)=3.35s   p(95)=3.48s   
     http_req_failed................: 0.00%   ✓ 0          ✗ 60320
     http_req_receiving.............: avg=7.69ms   min=30.77µs med=72.78µs max=1.13s    p(90)=3.1ms   p(95)=21.93ms 
     http_req_sending...............: avg=938.18µs min=7.06µs  med=16.9µs  max=546ms    p(90)=34.07µs p(95)=126.27µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=2.91s    min=1.36s   med=2.89s   max=6s       p(90)=3.33s   p(95)=3.46s   
     http_reqs......................: 60320   100.172793/s
     iteration_duration.............: avg=2.99s    min=1.38s   med=2.96s   max=6.55s    p(90)=3.44s   p(95)=3.59s   
     iterations.....................: 60320   100.172793/s
     vus............................: 43      min=43       max=300
     vus_max........................: 300     min=300      max=300
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/595d6094-9025-4cc9-4e45-cdabee30a400/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1dbb4deb-cdc1-4186-eefc-dd9f5f151700/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b7a05131-cac4-42a9-1d9f-19ee5d4d5500/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 166887    ✗ 0    
     data_received..................: 4.9 GB  8.1 MB/s
     data_sent......................: 66 MB   110 kB/s
     http_req_blocked...............: avg=40.56µs  min=1.39µs  med=4.12µs  max=87.34ms p(90)=6.2µs   p(95)=7.13µs  
     http_req_connecting............: avg=20.55µs  min=0s      med=0s      max=24.3ms  p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=3.18s    min=1.8s    med=3.16s   max=7.53s   p(90)=3.58s   p(95)=3.71s   
       { expected_response:true }...: avg=3.18s    min=1.8s    med=3.16s   max=7.53s   p(90)=3.58s   p(95)=3.71s   
     http_req_failed................: 0.00%   ✓ 0         ✗ 55629
     http_req_receiving.............: avg=7.67ms   min=34.08µs med=82.93µs max=1.21s   p(90)=2.71ms  p(95)=19.43ms 
     http_req_sending...............: avg=842.05µs min=7.9µs   med=20.64µs max=1.15s   p(90)=37.89µs p(95)=113.53µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=3.17s    min=1.8s    med=3.15s   max=7.19s   p(90)=3.57s   p(95)=3.7s    
     http_reqs......................: 55629   92.363571/s
     iteration_duration.............: avg=3.24s    min=1.87s   med=3.21s   max=7.57s   p(90)=3.67s   p(95)=3.82s   
     iterations.....................: 55629   92.363571/s
     vus............................: 95      min=95      max=300
     vus_max........................: 300     min=300     max=300
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a0a5cff7-0a19-445f-0951-ab03ce6b8d00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0eb0f28f-65da-4e30-5632-88611c998f00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3ced638c-1897-4ebf-44f6-d6b2681b0e00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  99% — ✓ 38663 / ✗ 86
     ✗ no graphql errors
      ↳  99% — ✓ 38663 / ✗ 86
     ✓ valid response structure

     checks.........................: 99.85% ✓ 115989    ✗ 172  
     data_received..................: 3.4 GB 5.6 MB/s
     data_sent......................: 46 MB  76 kB/s
     http_req_blocked...............: avg=89.85µs  min=1.37µs   med=3.45µs  max=57.08ms  p(90)=5.39µs   p(95)=6.34µs  
     http_req_connecting............: avg=81.07µs  min=0s       med=0s      max=38.61ms  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=4.64s    min=731.03ms med=4.41s   max=1m0s     p(90)=5.61s    p(95)=6s      
       { expected_response:true }...: avg=4.52s    min=731.03ms med=4.41s   max=59.82s   p(90)=5.6s     p(95)=5.97s   
     http_req_failed................: 0.22%  ✓ 86        ✗ 38663
     http_req_receiving.............: avg=622.94µs min=0s       med=93.27µs max=166.38ms p(90)=160.02µs p(95)=546.11µs
     http_req_sending...............: avg=97.18µs  min=8.22µs   med=17.69µs max=126.78ms p(90)=32.31µs  p(95)=41.68µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=4.64s    min=730.78ms med=4.41s   max=1m0s     p(90)=5.61s    p(95)=6s      
     http_reqs......................: 38749  64.205989/s
     iteration_duration.............: avg=4.66s    min=755.61ms med=4.43s   max=1m0s     p(90)=5.64s    p(95)=6.02s   
     iterations.....................: 38749  64.205989/s
     vus............................: 92     min=92      max=300
     vus_max........................: 300    min=300     max=300
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a82c3072-583b-427d-bc86-4bf788732400/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a386cb74-ec97-4129-fef2-4c5d7601c500/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e3828c84-7a2b-4883-0e0d-518969a4f000/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 23514     ✗ 0    
     data_received..................: 688 MB  1.1 MB/s
     data_sent......................: 9.3 MB  15 kB/s
     http_req_blocked...............: avg=597.81µs min=1.56µs  med=3.73µs   max=32.64ms p(90)=5.21µs   p(95)=6.32µs 
     http_req_connecting............: avg=584.8µs  min=0s      med=0s       max=32.62ms p(90)=0s       p(95)=0s     
     http_req_duration..............: avg=23.4s    min=7.38s   med=23.76s   max=26.12s  p(90)=24.27s   p(95)=24.46s 
       { expected_response:true }...: avg=23.4s    min=7.38s   med=23.76s   max=26.12s  p(90)=24.27s   p(95)=24.46s 
     http_req_failed................: 0.00%   ✓ 0         ✗ 7838 
     http_req_receiving.............: avg=133.37µs min=44.87µs med=110.77µs max=37.42ms p(90)=147.82µs p(95)=162.9µs
     http_req_sending...............: avg=70.44µs  min=8.42µs  med=22.18µs  max=28.11ms p(90)=31.4µs   p(95)=38.53µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s      p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=23.4s    min=7.38s   med=23.76s   max=26.12s  p(90)=24.27s   p(95)=24.46s 
     http_reqs......................: 7838    12.576958/s
     iteration_duration.............: avg=23.41s   min=7.38s   med=23.76s   max=26.13s  p(90)=24.27s   p(95)=24.46s 
     iterations.....................: 7838    12.576958/s
     vus............................: 7       min=7       max=300
     vus_max........................: 300     min=300     max=300
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5ab7fea5-60e0-46da-8cc1-4850a751b800/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2ac1c129-3f31-4215-9fa5-38be52f9fb00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9d1c8fb0-b9c0-40e5-d0b4-3b3cbe6c7d00/public" alt="HTTP Overview" />


  </details>