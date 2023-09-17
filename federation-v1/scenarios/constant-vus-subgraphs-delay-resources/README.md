## Overview for: `federation-v1/constant-vus-subgraphs-delay-resources`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. It's being executed with a constant amount of VUs over a fixed amount of time. It measure things like memory usage, CPU usage, average RPS. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was running 500 VUs over 600s


### Comparison


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2af36de6-62d8-4e5f-a2e1-959cc2b5e300/public" alt="Comparison" />


| Gateway             | RPS ⬇️ |         Requests         |          Duration          | Notes                                                                          |
| :------------------ | :----: | :----------------------: | :------------------------: | :----------------------------------------------------------------------------- |
| wundergraph         |  193   |  116207 total, 0 failed  |  avg: 1843ms, p95: 3334ms  | ✅                                                                              |
| apollo-router       |  182   |  109551 total, 0 failed  |  avg: 1656ms, p95: 3585ms  | ✅                                                                              |
| mesh-supergraph-bun |  109   |  65836 total, 0 failed   |  avg: 4455ms, p95: 7551ms  | ✅                                                                              |
| mesh-supergraph     |  102   |  61881 total, 0 failed   |  avg: 4743ms, p95: 5622ms  | ✅                                                                              |
| mesh-bun            |  101   |  61488 total, 0 failed   |  avg: 4783ms, p95: 8025ms  | ✅                                                                              |
| mesh                |   98   |  59289 total, 0 failed   |  avg: 4974ms, p95: 6117ms  | ✅                                                                              |
| apollo-server       |   66   | 40714 total, 2620 failed | avg: 7363ms, p95: 59994ms  | ❌ 2620 failed requests, 2620 non-200 responses, 2620 unexpected GraphQL errors |
| mercurius           |   12   |   7929 total, 0 failed   | avg: 38511ms, p95: 41511ms | ✅                                                                              |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 348621     ✗ 0     
     data_received..................: 10 GB   17 MB/s
     data_sent......................: 138 MB  229 kB/s
     http_req_blocked...............: avg=400.27µs min=1.07µs   med=2.9µs   max=4.86s  p(90)=4.43µs  p(95)=5.36µs 
     http_req_connecting............: avg=138.6µs  min=0s       med=0s      max=1.67s  p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=1.84s    min=580.54ms med=1.7s    max=8.77s  p(90)=2.79s   p(95)=3.33s  
       { expected_response:true }...: avg=1.84s    min=580.54ms med=1.7s    max=8.77s  p(90)=2.79s   p(95)=3.33s  
     http_req_failed................: 0.00%   ✓ 0          ✗ 116207
     http_req_receiving.............: avg=308.29ms min=20.52µs  med=73.58µs max=6.92s  p(90)=1.31s   p(95)=1.85s  
     http_req_sending...............: avg=19.57ms  min=7.78µs   med=13.23µs max=4.01s  p(90)=28.12µs p(95)=147.7µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s     p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=1.51s    min=580.46ms med=1.47s   max=4.06s  p(90)=2.08s   p(95)=2.24s  
     http_reqs......................: 116207  193.097489/s
     iteration_duration.............: avg=2.57s    min=600.28ms med=2.26s   max=12.75s p(90)=4.36s   p(95)=5.09s  
     iterations.....................: 116207  193.097489/s
     vus............................: 241     min=241      max=500 
     vus_max........................: 500     min=500      max=500 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c8431544-82ca-40c4-1b11-f43afc7e2b00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/597f0f29-1f22-4e9e-fb3f-577f66f34d00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/cbf26964-cdf9-46b4-6f78-5d6444683700/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 328653     ✗ 0     
     data_received..................: 9.6 GB  16 MB/s
     data_sent......................: 130 MB  216 kB/s
     http_req_blocked...............: avg=1.43ms   min=1.38µs   med=3.54µs  max=4.32s  p(90)=5.86µs  p(95)=6.92µs  
     http_req_connecting............: avg=989.21µs min=0s       med=0s      max=4.32s  p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=1.65s    min=233.28ms med=1.44s   max=13.62s p(90)=2.88s   p(95)=3.58s   
       { expected_response:true }...: avg=1.65s    min=233.28ms med=1.44s   max=13.62s p(90)=2.88s   p(95)=3.58s   
     http_req_failed................: 0.00%   ✓ 0          ✗ 109551
     http_req_receiving.............: avg=423.63ms min=26.05µs  med=87.13µs max=7.76s  p(90)=1.68s   p(95)=2.47s   
     http_req_sending...............: avg=28.33ms  min=7µs      med=15.62µs max=7.25s  p(90)=37.99µs p(95)=261.54µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s     p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=1.2s     min=233.22ms med=1.13s   max=6.8s   p(90)=1.88s   p(95)=2.1s    
     http_reqs......................: 109551  182.148394/s
     iteration_duration.............: avg=2.71s    min=248.71ms med=2.32s   max=17.68s p(90)=5.06s   p(95)=6.13s   
     iterations.....................: 109551  182.148394/s
     vus............................: 240     min=240      max=500 
     vus_max........................: 500     min=500      max=500 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/dc9396ed-8144-4aff-176d-9d371d209100/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b4d014fd-9eb5-49de-ded7-ef0e49240300/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5c8a6f82-4d54-4100-9b48-1fc2180e7000/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 197508     ✗ 0    
     data_received..................: 5.8 GB  9.6 MB/s
     data_sent......................: 78 MB   130 kB/s
     http_req_blocked...............: avg=173.19µs min=1.34µs med=3.32µs  max=278.96ms p(90)=5.54µs  p(95)=6.74µs  
     http_req_connecting............: avg=133.16µs min=0s     med=0s      max=39.75ms  p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=4.45s    min=1.91s  med=3.88s   max=8.8s     p(90)=7.18s   p(95)=7.55s   
       { expected_response:true }...: avg=4.45s    min=1.91s  med=3.88s   max=8.8s     p(90)=7.18s   p(95)=7.55s   
     http_req_failed................: 0.00%   ✓ 0          ✗ 65836
     http_req_receiving.............: avg=37.32ms  min=29.2µs med=69.5µs  max=2.18s    p(90)=24.84ms p(95)=244.82ms
     http_req_sending...............: avg=2.63ms   min=7.11µs med=14.55µs max=1.56s    p(90)=37µs    p(95)=174.38µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=4.41s    min=1.91s  med=3.86s   max=8.8s     p(90)=7.14s   p(95)=7.49s   
     http_reqs......................: 65836   109.204819/s
     iteration_duration.............: avg=4.56s    min=1.99s  med=3.97s   max=8.91s    p(90)=7.33s   p(95)=7.71s   
     iterations.....................: 65836   109.204819/s
     vus............................: 193     min=193      max=500
     vus_max........................: 500     min=500      max=500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/db428ac8-ea25-425d-4e54-9fb3bdc19400/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b46ac0d1-98b7-4167-8671-34b98ed83f00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/62458322-3894-48ab-21a8-f265807fe600/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 185643    ✗ 0    
     data_received..................: 5.4 GB  9.0 MB/s
     data_sent......................: 74 MB   122 kB/s
     http_req_blocked...............: avg=190.01µs min=1.37µs  med=3.89µs  max=270.43ms p(90)=6.08µs  p(95)=7.23µs  
     http_req_connecting............: avg=150.39µs min=0s      med=0s      max=46.05ms  p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=4.74s    min=2.75s   med=4.72s   max=8.9s     p(90)=5.42s   p(95)=5.62s   
       { expected_response:true }...: avg=4.74s    min=2.75s   med=4.72s   max=8.9s     p(90)=5.42s   p(95)=5.62s   
     http_req_failed................: 0.00%   ✓ 0         ✗ 61881
     http_req_receiving.............: avg=19.51ms  min=33.06µs med=74.11µs max=2.52s    p(90)=4.01ms  p(95)=73.16ms 
     http_req_sending...............: avg=2.09ms   min=7.9µs   med=17.66µs max=1.49s    p(90)=38.56µs p(95)=159.04µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=4.72s    min=2.75s   med=4.7s    max=8.9s     p(90)=5.38s   p(95)=5.57s   
     http_reqs......................: 61881   102.50168/s
     iteration_duration.............: avg=4.86s    min=2.9s    med=4.83s   max=8.98s    p(90)=5.6s    p(95)=5.83s   
     iterations.....................: 61881   102.50168/s
     vus............................: 179     min=179     max=500
     vus_max........................: 500     min=500     max=500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/67e78ce7-5c33-4c45-6ec1-3124ebc6b300/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0b911de4-e5ac-4823-6842-9134ac5d7300/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a6291016-8666-4aa9-3ae0-99c95605a700/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 184464     ✗ 0    
     data_received..................: 5.4 GB  8.9 MB/s
     data_sent......................: 73 MB   121 kB/s
     http_req_blocked...............: avg=204.02µs min=1.27µs  med=2.98µs  max=393ms   p(90)=4.73µs  p(95)=5.73µs  
     http_req_connecting............: avg=146.84µs min=0s      med=0s      max=39.56ms p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=4.78s    min=2.17s   med=4.1s    max=9.34s   p(90)=7.72s   p(95)=8.02s   
       { expected_response:true }...: avg=4.78s    min=2.17s   med=4.1s    max=9.34s   p(90)=7.72s   p(95)=8.02s   
     http_req_failed................: 0.00%   ✓ 0          ✗ 61488
     http_req_receiving.............: avg=35.48ms  min=26.48µs med=62.77µs max=2.77s   p(90)=7.19ms  p(95)=214.29ms
     http_req_sending...............: avg=2.73ms   min=7.13µs  med=13.77µs max=1.83s   p(90)=30.39µs p(95)=152.34µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=4.74s    min=2.17s   med=4.07s   max=8.98s   p(90)=7.7s    p(95)=7.98s   
     http_reqs......................: 61488   101.677822/s
     iteration_duration.............: avg=4.9s     min=2.18s   med=4.18s   max=9.56s   p(90)=7.9s    p(95)=8.2s    
     iterations.....................: 61488   101.677822/s
     vus............................: 96      min=96       max=500
     vus_max........................: 500     min=500      max=500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a1a24ad0-1fc7-4b49-f8e0-c7541344b800/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/21f4f34a-5502-435c-4414-7113a720fb00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/afdbef92-11a0-41b1-f2c4-d3b3e261f500/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 177867    ✗ 0    
     data_received..................: 5.2 GB  8.6 MB/s
     data_sent......................: 70 MB   117 kB/s
     http_req_blocked...............: avg=184.7µs  min=1.75µs  med=4.14µs  max=282.02ms p(90)=6.29µs  p(95)=7.33µs  
     http_req_connecting............: avg=145.03µs min=0s      med=0s      max=50.42ms  p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=4.97s    min=2.85s   med=4.91s   max=9.02s    p(90)=5.88s   p(95)=6.11s   
       { expected_response:true }...: avg=4.97s    min=2.85s   med=4.91s   max=9.02s    p(90)=5.88s   p(95)=6.11s   
     http_req_failed................: 0.00%   ✓ 0         ✗ 59289
     http_req_receiving.............: avg=15.58ms  min=33.73µs med=78.36µs max=1.52s    p(90)=2.96ms  p(95)=43.03ms 
     http_req_sending...............: avg=1.72ms   min=8.55µs  med=20.14µs max=958.43ms p(90)=38.97µs p(95)=155.45µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=4.95s    min=2.85s   med=4.9s    max=9.02s    p(90)=5.86s   p(95)=6.08s   
     http_reqs......................: 59289   98.198199/s
     iteration_duration.............: avg=5.07s    min=2.92s   med=5.02s   max=9.09s    p(90)=6.01s   p(95)=6.27s   
     iterations.....................: 59289   98.198199/s
     vus............................: 244     min=244     max=500
     vus_max........................: 500     min=500     max=500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d7989cb8-c553-4e94-8878-44fa2681ab00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4f3a3624-cc70-4425-c86f-2d5d76613e00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/aefa6750-a158-4fb9-bafb-4d265de02500/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  93% — ✓ 38094 / ✗ 2620
     ✗ no graphql errors
      ↳  93% — ✓ 38094 / ✗ 2620
     ✓ valid response structure

     checks.........................: 95.61% ✓ 114282    ✗ 5240 
     data_received..................: 3.3 GB 5.5 MB/s
     data_sent......................: 48 MB  79 kB/s
     http_req_blocked...............: avg=745.78µs min=1.42µs   med=3.39µs  max=121.65ms p(90)=6.43µs   p(95)=406.86µs
     http_req_connecting............: avg=699.65µs min=0s       med=0s      max=121.16ms p(90)=0s       p(95)=280.79µs
     http_req_duration..............: avg=7.36s    min=795.17ms med=3.79s   max=1m0s     p(90)=4.8s     p(95)=59.99s  
       { expected_response:true }...: avg=3.74s    min=795.17ms med=3.73s   max=59.29s   p(90)=4.49s    p(95)=4.72s   
     http_req_failed................: 6.43%  ✓ 2620      ✗ 38094
     http_req_receiving.............: avg=545.67µs min=0s       med=90.32µs max=229.33ms p(90)=150.08µs p(95)=466.68µs
     http_req_sending...............: avg=284.04µs min=8.14µs   med=17.35µs max=289.09ms p(90)=36.01µs  p(95)=125.02µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=7.36s    min=794.99ms med=3.79s   max=1m0s     p(90)=4.8s     p(95)=59.99s  
     http_reqs......................: 40714  66.871552/s
     iteration_duration.............: avg=7.38s    min=831.44ms med=3.8s    max=1m0s     p(90)=4.82s    p(95)=1m0s    
     iterations.....................: 40714  66.871552/s
     vus............................: 4      min=4       max=500
     vus_max........................: 500    min=500     max=500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5381d58a-1294-4597-720f-7f43d4322a00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/44da0cdb-bd88-4ded-60bf-758e39ab3200/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a6354557-0ab5-4c15-d4dc-7a88f4d20100/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 23787    ✗ 0    
     data_received..................: 696 MB  1.1 MB/s
     data_sent......................: 9.5 MB  15 kB/s
     http_req_blocked...............: avg=24.82µs  min=1.64µs  med=3.81µs   max=14.65ms p(90)=5.6µs    p(95)=76.84µs
     http_req_connecting............: avg=14.43µs  min=0s      med=0s       max=14.62ms p(90)=0s       p(95)=48.73µs
     http_req_duration..............: avg=38.51s   min=11.35s  med=39.62s   max=43.98s  p(90)=40.32s   p(95)=41.51s 
       { expected_response:true }...: avg=38.51s   min=11.35s  med=39.62s   max=43.98s  p(90)=40.32s   p(95)=41.51s 
     http_req_failed................: 0.00%   ✓ 0        ✗ 7929 
     http_req_receiving.............: avg=122.01µs min=42.86µs med=103.89µs max=24.78ms p(90)=141.36µs p(95)=159.1µs
     http_req_sending...............: avg=36.34µs  min=8.47µs  med=21.29µs  max=10.79ms p(90)=28.63µs  p(95)=31.43µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s      p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=38.51s   min=11.35s  med=39.62s   max=43.97s  p(90)=40.32s   p(95)=41.51s 
     http_reqs......................: 7929    12.58567/s
     iteration_duration.............: avg=38.51s   min=11.36s  med=39.63s   max=44.06s  p(90)=40.33s   p(95)=41.51s 
     iterations.....................: 7929    12.58567/s
     vus............................: 109     min=109    max=500
     vus_max........................: 500     min=500    max=500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ab3e4b20-d53d-4f4d-662a-ae2426affd00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1fab296d-870d-45cb-b593-6a58cdfa6100/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c7cb6a44-71ac-4b68-b69f-8c038380d600/public" alt="HTTP Overview" />


  </details>