## Overview for: `federation-v1/constant-vus-over-time`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. It's being executed with a constant amount of VUs over a fixed amount of time. It measure things like memory usage, CPU usage, average RPS. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was running 300 VUs over 600s


### Comparison


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/98b54979-6784-428b-a13f-db9c3072ce00/public" alt="Comparison" />


| Gateway       | RPS ⬇️ |        Requests         |         Duration         | Notes                                                                       |
| :------------ | :----: | :---------------------: | :----------------------: | :-------------------------------------------------------------------------- |
| cosmo         |  189   | 114162 total, 0 failed  | avg: 802ms, p95: 2283ms  | ✅                                                                           |
| apollo-router |  174   | 105270 total, 0 failed  | avg: 890ms, p95: 2483ms  | ✅                                                                           |
| wundergraph   |  163   |  98315 total, 0 failed  | avg: 903ms, p95: 2561ms  | ✅                                                                           |
| hive-gateway  |   96   |  58029 total, 0 failed  | avg: 3068ms, p95: 4070ms | ✅                                                                           |
| apollo-server |   80   | 48624 total, 173 failed | avg: 3698ms, p95: 5069ms | ❌ 173 failed requests, 173 non-200 responses, 173 unexpected GraphQL errors |
| mercurius     |   57   |  34571 total, 0 failed  | avg: 5204ms, p95: 5487ms | ✅                                                                           |



<details>
  <summary>Summary for: `cosmo`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     █ setup

     checks.........................: 100.00% ✓ 342426     ✗ 0     
     data_received..................: 10 GB   17 MB/s
     data_sent......................: 136 MB  225 kB/s
     http_req_blocked...............: avg=1.3ms    min=1.3µs   med=3.06µs   max=3.83s  p(90)=4.49µs   p(95)=5.26µs  
     http_req_connecting............: avg=901.65µs min=0s      med=0s       max=3.42s  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=801.84ms min=3.79ms  med=617.94ms max=8.86s  p(90)=1.78s    p(95)=2.28s   
       { expected_response:true }...: avg=801.84ms min=3.79ms  med=617.94ms max=8.86s  p(90)=1.78s    p(95)=2.28s   
     http_req_failed................: 0.00%   ✓ 0          ✗ 114162
     http_req_receiving.............: avg=309.43ms min=28.13µs med=81.93µs  max=8.22s  p(90)=1.21s    p(95)=1.78s   
     http_req_sending...............: avg=18.43ms  min=7.4µs   med=14.01µs  max=4.58s  p(90)=31.31µs  p(95)=244.99µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s     p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=473.97ms min=3.68ms  med=437.51ms max=3.35s  p(90)=885.44ms p(95)=1.03s   
     http_reqs......................: 114162  189.912874/s
     iteration_duration.............: avg=1.56s    min=16.91ms med=1.19s    max=11.36s p(90)=3.41s    p(95)=4.2s    
     iterations.....................: 114142  189.879603/s
     vus............................: 63      min=63       max=300 
     vus_max........................: 300     min=300      max=300 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f7035277-7c43-40ac-0539-80c91111f600/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f741a576-25f3-4cb8-4e69-ee7d4863bc00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f60df34f-103a-4b34-5eca-0085f7eb5e00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     █ setup

     checks.........................: 100.00% ✓ 315750     ✗ 0     
     data_received..................: 9.2 GB  15 MB/s
     data_sent......................: 125 MB  208 kB/s
     http_req_blocked...............: avg=1.02ms   min=1.44µs  med=3.24µs   max=3.87s  p(90)=4.9µs    p(95)=5.59µs 
     http_req_connecting............: avg=669.8µs  min=0s      med=0s       max=3.17s  p(90)=0s       p(95)=0s     
     http_req_duration..............: avg=890.12ms min=6.46ms  med=684.26ms max=8.19s  p(90)=1.97s    p(95)=2.48s  
       { expected_response:true }...: avg=890.12ms min=6.46ms  med=684.26ms max=8.19s  p(90)=1.97s    p(95)=2.48s  
     http_req_failed................: 0.00%   ✓ 0          ✗ 105270
     http_req_receiving.............: avg=351.19ms min=24.49µs med=83.33µs  max=5.74s  p(90)=1.4s     p(95)=1.93s  
     http_req_sending...............: avg=24.88ms  min=7.59µs  med=15.88µs  max=5.06s  p(90)=72.23µs  p(95)=20.83ms
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s     p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=514.04ms min=6.4ms   med=473.43ms max=2.88s  p(90)=955.73ms p(95)=1.1s   
     http_reqs......................: 105270  174.973707/s
     iteration_duration.............: avg=1.7s     min=19.74ms med=1.36s    max=12.31s p(90)=3.61s    p(95)=4.43s  
     iterations.....................: 105250  174.940464/s
     vus............................: 288     min=288      max=300 
     vus_max........................: 300     min=300      max=300 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c1d3a7b5-cba4-4a25-c73e-70623741e700/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/45822313-cd3f-4e65-9321-eee937c92900/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b4afad05-4f98-419a-b330-6631ff664200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     █ setup

     checks.........................: 100.00% ✓ 294885     ✗ 0    
     data_received..................: 8.6 GB  14 MB/s
     data_sent......................: 117 MB  194 kB/s
     http_req_blocked...............: avg=2.34ms   min=1.36µs  med=3.12µs   max=4.19s  p(90)=4.48µs   p(95)=5.27µs
     http_req_connecting............: avg=2.03ms   min=0s      med=0s       max=4.19s  p(90)=0s       p(95)=0s    
     http_req_duration..............: avg=902.61ms min=6.71ms  med=695.34ms max=7.8s   p(90)=2s       p(95)=2.56s 
       { expected_response:true }...: avg=902.61ms min=6.71ms  med=695.34ms max=7.8s   p(90)=2s       p(95)=2.56s 
     http_req_failed................: 0.00%   ✓ 0          ✗ 98315
     http_req_receiving.............: avg=363.16ms min=28.44µs med=82.24µs  max=6.82s  p(90)=1.4s     p(95)=2.07s 
     http_req_sending...............: avg=23.29ms  min=7.49µs  med=14.2µs   max=5.04s  p(90)=36.5µs   p(95)=3.98ms
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s     p(90)=0s       p(95)=0s    
     http_req_waiting...............: avg=516.15ms min=6.61ms  med=454.82ms max=3.24s  p(90)=996.03ms p(95)=1.15s 
     http_reqs......................: 98315   163.599397/s
     iteration_duration.............: avg=1.81s    min=21.35ms med=1.46s    max=14.06s p(90)=3.9s     p(95)=4.77s 
     iterations.....................: 98295   163.566116/s
     vus............................: 1       min=1        max=300
     vus_max........................: 300     min=300      max=300
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6627e2b4-fc1b-417a-794d-9dd6a95b8300/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b48cb3bd-625e-414c-d19e-8d722fe4e800/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/edac0d01-e5d4-4eb3-3a83-7728c635db00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `hive-gateway`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     █ setup

     checks.........................: 100.00% ✓ 174027    ✗ 0    
     data_received..................: 5.1 GB  8.5 MB/s
     data_sent......................: 69 MB   114 kB/s
     http_req_blocked...............: avg=60.77µs  min=1.33µs  med=3.86µs  max=149.98ms p(90)=5.47µs   p(95)=6.16µs  
     http_req_connecting............: avg=44.21µs  min=0s      med=0s      max=25.3ms   p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=3.06s    min=12.43ms med=2.95s   max=42.35s   p(90)=3.49s    p(95)=4.06s   
       { expected_response:true }...: avg=3.06s    min=12.43ms med=2.95s   max=42.35s   p(90)=3.49s    p(95)=4.06s   
     http_req_failed................: 0.00%   ✓ 0         ✗ 58029
     http_req_receiving.............: avg=2.12ms   min=37.83µs med=87.71µs max=488.57ms p(90)=542.64µs p(95)=4.66ms  
     http_req_sending...............: avg=498.08µs min=7.71µs  med=20.05µs max=336.58ms p(90)=38.05µs  p(95)=136.32µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=3.06s    min=12.34ms med=2.94s   max=42.34s   p(90)=3.49s    p(95)=4.06s   
     http_reqs......................: 58029   96.256081/s
     iteration_duration.............: avg=3.11s    min=254.9ms med=2.99s   max=42.36s   p(90)=3.54s    p(95)=4.1s    
     iterations.....................: 58009   96.222906/s
     vus............................: 153     min=153     max=300
     vus_max........................: 300     min=300     max=300
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/cb722641-487a-42cd-5f51-daaa37f55600/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d2cab880-d50f-4006-7ae4-9f647e19fe00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/30df352b-27b8-4400-d3df-9a0b5d1e9b00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  99% — ✓ 48431 / ✗ 173
     ✗ no graphql errors
      ↳  99% — ✓ 48431 / ✗ 173
     ✓ valid response structure

     █ setup

     checks.........................: 99.76% ✓ 145293    ✗ 346  
     data_received..................: 4.3 GB 7.1 MB/s
     data_sent......................: 58 MB  96 kB/s
     http_req_blocked...............: avg=120.21µs min=1.28µs   med=3.05µs   max=66.39ms  p(90)=4.66µs   p(95)=5.38µs  
     http_req_connecting............: avg=67.35µs  min=0s       med=0s       max=26.57ms  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=3.69s    min=12.78ms  med=3.27s    max=1m0s     p(90)=4.67s    p(95)=5.06s   
       { expected_response:true }...: avg=3.49s    min=12.78ms  med=3.26s    max=59.42s   p(90)=4.65s    p(95)=5.03s   
     http_req_failed................: 0.35%  ✓ 173       ✗ 48451
     http_req_receiving.............: avg=391.63µs min=0s       med=106.32µs max=186.25ms p(90)=174.77µs p(95)=237.92µs
     http_req_sending...............: avg=154.36µs min=8.11µs   med=14.95µs  max=125.94ms p(90)=29.86µs  p(95)=39.66µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=3.69s    min=12.65ms  med=3.27s    max=1m0s     p(90)=4.67s    p(95)=5.06s   
     http_reqs......................: 48624  80.550459/s
     iteration_duration.............: avg=3.71s    min=173.95ms med=3.28s    max=1m0s     p(90)=4.69s    p(95)=5.09s   
     iterations.....................: 48604  80.517327/s
     vus............................: 121    min=121     max=300
     vus_max........................: 300    min=300     max=300
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/520e83eb-a8f9-4f2e-a17b-ae0c09057700/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/759f0a6e-32fa-4f54-fb8c-757c6a572000/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4a3efa28-e2e1-4d8c-b920-9a3e4cdc5000/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     █ setup

     checks.........................: 100.00% ✓ 103653    ✗ 0    
     data_received..................: 3.0 GB  5.0 MB/s
     data_sent......................: 41 MB   68 kB/s
     http_req_blocked...............: avg=248.15µs min=1.55µs   med=3.39µs  max=41.19ms  p(90)=4.56µs   p(95)=5.07µs 
     http_req_connecting............: avg=243.25µs min=0s       med=0s      max=39.67ms  p(90)=0s       p(95)=0s     
     http_req_duration..............: avg=5.2s     min=13.9ms   med=5.28s   max=11s      p(90)=5.42s    p(95)=5.48s  
       { expected_response:true }...: avg=5.2s     min=13.9ms   med=5.28s   max=11s      p(90)=5.42s    p(95)=5.48s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 34571
     http_req_receiving.............: avg=196.97µs min=41.62µs  med=112µs   max=272.84ms p(90)=162.55µs p(95)=181.5µs
     http_req_sending...............: avg=34.22µs  min=8.73µs   med=18.13µs max=20.08ms  p(90)=30.38µs  p(95)=35.54µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s       p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=5.2s     min=13.82ms  med=5.28s   max=10.99s   p(90)=5.42s    p(95)=5.48s  
     http_reqs......................: 34571   57.390937/s
     iteration_duration.............: avg=5.21s    min=528.61ms med=5.29s   max=11.04s   p(90)=5.43s    p(95)=5.49s  
     iterations.....................: 34551   57.357735/s
     vus............................: 69      min=69      max=300
     vus_max........................: 300     min=300     max=300
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7b6e7200-676d-4caa-9c42-a08e758af500/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2eb7e637-f652-4195-b4b1-9b1bab127100/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3fac3714-8fc2-44f9-3e9d-34ad80fdba00/public" alt="HTTP Overview" />


  </details>