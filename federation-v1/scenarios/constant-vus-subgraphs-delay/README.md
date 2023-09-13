## Overview for: `constant-vus-subgraphs-delay`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. It's being executed with a constant amount of VUs over a fixed amount of time. It measure things like memory usage, CPU usage, average RPS. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was running 300 VUs over 600s


### Comparison


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2a20c698-8c84-40d9-85b0-ac33e9ede300/public" alt="Comparison" />


| Gateway         | RPS ⬇️ |        Requests        |          Duration          | Notes |
| :-------------- | :----: | :--------------------: | :------------------------: | :---- |
| wundergraph     |  191   | 115151 total, 0 failed |  avg: 1315ms, p95: 2040ms  | ✅     |
| apollo-router   |  182   | 109698 total, 0 failed |  avg: 1136ms, p95: 2381ms  | ✅     |
| mesh-bun        |   89   | 53908 total, 0 failed  |  avg: 3317ms, p95: 3864ms  | ✅     |
| mesh-supergraph |   80   | 48432 total, 0 failed  |  avg: 3682ms, p95: 4401ms  | ✅     |
| mesh            |   71   | 43260 total, 0 failed  |  avg: 4134ms, p95: 4927ms  | ✅     |
| apollo-server   |   64   | 38657 total, 0 failed  |  avg: 4656ms, p95: 6168ms  | ✅     |
| mercurius       |   12   |  7822 total, 0 failed  | avg: 23458ms, p95: 24566ms | ✅     |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 345453    ✗ 0     
     data_received..................: 10 GB   17 MB/s
     data_sent......................: 137 MB  227 kB/s
     http_req_blocked...............: avg=156.5µs  min=1.02µs   med=3.06µs  max=561.54ms p(90)=4.79µs   p(95)=5.85µs  
     http_req_connecting............: avg=56.17µs  min=0s       med=0s      max=31.47ms  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=1.31s    min=541.35ms med=1.24s   max=4.19s    p(90)=1.75s    p(95)=2.04s   
       { expected_response:true }...: avg=1.31s    min=541.35ms med=1.24s   max=4.19s    p(90)=1.75s    p(95)=2.04s   
     http_req_failed................: 0.00%   ✓ 0         ✗ 115151
     http_req_receiving.............: avg=131.44ms min=24.2µs   med=78.51µs max=2.65s    p(90)=506.64ms p(95)=857.51ms
     http_req_sending...............: avg=9.16ms   min=5.84µs   med=13.56µs max=2.3s     p(90)=33.31µs  p(95)=2.68ms  
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=1.17s    min=541.3ms  med=1.16s   max=2.6s     p(90)=1.42s    p(95)=1.51s   
     http_reqs......................: 115151  191.28341/s
     iteration_duration.............: avg=1.56s    min=577.77ms med=1.44s   max=6.99s    p(90)=2.27s    p(95)=2.56s   
     iterations.....................: 115151  191.28341/s
     vus............................: 2       min=2       max=300 
     vus_max........................: 300     min=300     max=300 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ba5d84d9-c256-43e9-ac3f-f84185d8e000/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f5f3fa9d-927b-4d3e-c6c5-0a2bdf7abb00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f8867304-03b2-4a07-3fcb-170d2b67bf00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 329094     ✗ 0     
     data_received..................: 9.6 GB  16 MB/s
     data_sent......................: 130 MB  217 kB/s
     http_req_blocked...............: avg=247.66µs min=1.32µs   med=3.21µs   max=1.65s  p(90)=5.38µs  p(95)=6.37µs
     http_req_connecting............: avg=107.5µs  min=0s       med=0s       max=1.27s  p(90)=0s      p(95)=0s    
     http_req_duration..............: avg=1.13s    min=256.79ms med=950.6ms  max=7.14s  p(90)=1.98s   p(95)=2.38s 
       { expected_response:true }...: avg=1.13s    min=256.79ms med=950.6ms  max=7.14s  p(90)=1.98s   p(95)=2.38s 
     http_req_failed................: 0.00%   ✓ 0          ✗ 109698
     http_req_receiving.............: avg=289.25ms min=24.88µs  med=78.45µs  max=5.9s   p(90)=1.15s   p(95)=1.57s 
     http_req_sending...............: avg=15.02ms  min=7.41µs   med=14.77µs  max=4.08s  p(90)=40.47µs p(95)=9.93ms
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s     p(90)=0s      p(95)=0s    
     http_req_waiting...............: avg=831.32ms min=256.71ms med=768.39ms max=2.55s  p(90)=1.21s   p(95)=1.32s 
     http_reqs......................: 109698  182.472219/s
     iteration_duration.............: avg=1.64s    min=272.34ms med=1.37s    max=11.44s p(90)=3.02s   p(95)=3.55s 
     iterations.....................: 109698  182.472219/s
     vus............................: 51      min=51       max=300 
     vus_max........................: 300     min=300      max=300 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9a6b236e-8d2a-4313-9ea1-eca5601b0f00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ed446a50-9b59-450a-b1e1-0d92f0a51800/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6205cdae-6dce-4762-6d21-47285ca35000/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 161724    ✗ 0    
     data_received..................: 4.7 GB  7.8 MB/s
     data_sent......................: 64 MB   106 kB/s
     http_req_blocked...............: avg=46.7µs   min=1.27µs  med=3.08µs  max=69.49ms  p(90)=5.17µs   p(95)=6.31µs
     http_req_connecting............: avg=36.69µs  min=0s      med=0s      max=13.3ms   p(90)=0s       p(95)=0s    
     http_req_duration..............: avg=3.31s    min=1.93s   med=3.22s   max=7.51s    p(90)=3.62s    p(95)=3.86s 
       { expected_response:true }...: avg=3.31s    min=1.93s   med=3.22s   max=7.51s    p(90)=3.62s    p(95)=3.86s 
     http_req_failed................: 0.00%   ✓ 0         ✗ 53908
     http_req_receiving.............: avg=7.87ms   min=30.21µs med=83µs    max=1.97s    p(90)=380.91µs p(95)=2.32ms
     http_req_sending...............: avg=460.32µs min=7.21µs  med=13.96µs max=430.57ms p(90)=29.6µs   p(95)=63.3µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s       p(90)=0s       p(95)=0s    
     http_req_waiting...............: avg=3.3s     min=1.93s   med=3.21s   max=7.51s    p(90)=3.61s    p(95)=3.83s 
     http_reqs......................: 53908   89.428164/s
     iteration_duration.............: avg=3.34s    min=1.94s   med=3.25s   max=7.65s    p(90)=3.67s    p(95)=3.94s 
     iterations.....................: 53908   89.428164/s
     vus............................: 159     min=159     max=300
     vus_max........................: 300     min=300     max=300
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/eace9887-e9c1-4452-9984-26fe1865b700/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/88c2d4c0-87cb-42e8-771c-82be6803d900/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/02268695-b9dd-4480-6311-863c8e35cf00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 145296    ✗ 0    
     data_received..................: 4.2 GB  7.1 MB/s
     data_sent......................: 58 MB   95 kB/s
     http_req_blocked...............: avg=84.66µs  min=1.26µs  med=4.09µs  max=225.29ms p(90)=6.09µs  p(95)=7µs    
     http_req_connecting............: avg=61.03µs  min=0s      med=0s      max=43.72ms  p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=3.68s    min=1.49s   med=3.71s   max=7.33s    p(90)=4.23s   p(95)=4.4s   
       { expected_response:true }...: avg=3.68s    min=1.49s   med=3.71s   max=7.33s    p(90)=4.23s   p(95)=4.4s   
     http_req_failed................: 0.00%   ✓ 0         ✗ 48432
     http_req_receiving.............: avg=4.45ms   min=33.97µs med=92.36µs max=498.54ms p(90)=2.32ms  p(95)=12.56ms
     http_req_sending...............: avg=534.87µs min=7.82µs  med=20.65µs max=344.63ms p(90)=37.01µs p(95)=84.61µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s       p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=3.67s    min=1.49s   med=3.7s    max=7.33s    p(90)=4.23s   p(95)=4.39s  
     http_reqs......................: 48432   80.361758/s
     iteration_duration.............: avg=3.72s    min=1.5s    med=3.75s   max=7.35s    p(90)=4.29s   p(95)=4.46s  
     iterations.....................: 48432   80.361758/s
     vus............................: 147     min=147     max=300
     vus_max........................: 300     min=300     max=300
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5103a81c-04b0-4d80-1016-43187ca61000/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6af29f4f-1e7a-4b1d-11b9-1c625d082100/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0884a717-6585-4e66-b64c-7fef93791b00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 129780    ✗ 0    
     data_received..................: 3.8 GB  6.3 MB/s
     data_sent......................: 51 MB   85 kB/s
     http_req_blocked...............: avg=38.3µs   min=1.2µs   med=3.73µs  max=94.33ms  p(90)=5.63µs  p(95)=6.55µs 
     http_req_connecting............: avg=26.42µs  min=0s      med=0s      max=33.69ms  p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=4.13s    min=2.34s   med=4.08s   max=8.67s    p(90)=4.71s   p(95)=4.92s  
       { expected_response:true }...: avg=4.13s    min=2.34s   med=4.08s   max=8.67s    p(90)=4.71s   p(95)=4.92s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 43260
     http_req_receiving.............: avg=4.35ms   min=33.57µs med=92.64µs max=688.73ms p(90)=2.29ms  p(95)=12.5ms 
     http_req_sending...............: avg=441.57µs min=7.67µs  med=18.72µs max=420.01ms p(90)=34.65µs p(95)=56.45µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s       p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=4.12s    min=2.34s   med=4.08s   max=8.66s    p(90)=4.7s    p(95)=4.92s  
     http_reqs......................: 43260   71.741179/s
     iteration_duration.............: avg=4.17s    min=2.36s   med=4.12s   max=8.68s    p(90)=4.75s   p(95)=4.98s  
     iterations.....................: 43260   71.741179/s
     vus............................: 33      min=33      max=300
     vus_max........................: 300     min=300     max=300
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/025aa1fd-7c73-4489-ddcd-dc101039ef00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/47985a95-2c9a-4b59-80ff-73007c8a3100/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a1c7f0a0-b282-41e7-521d-b8f32d841d00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 115971    ✗ 0    
     data_received..................: 3.4 GB  5.6 MB/s
     data_sent......................: 46 MB   76 kB/s
     http_req_blocked...............: avg=16.24µs  min=1.48µs  med=3.79µs  max=35.66ms  p(90)=5.68µs   p(95)=6.51µs  
     http_req_connecting............: avg=8.51µs   min=0s      med=0s      max=23.72ms  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=4.65s    min=2.61s   med=4.58s   max=8.52s    p(90)=5.78s    p(95)=6.16s   
       { expected_response:true }...: avg=4.65s    min=2.61s   med=4.58s   max=8.52s    p(90)=5.78s    p(95)=6.16s   
     http_req_failed................: 0.00%   ✓ 0         ✗ 38657
     http_req_receiving.............: avg=696.86µs min=36.49µs med=96.84µs max=275.81ms p(90)=160.09µs p(95)=509.38µs
     http_req_sending...............: avg=95.91µs  min=7.97µs  med=19.79µs max=94.69ms  p(90)=33.87µs  p(95)=42.13µs 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=4.65s    min=2.61s   med=4.58s   max=8.52s    p(90)=5.78s    p(95)=6.16s   
     http_reqs......................: 38657   64.059357/s
     iteration_duration.............: avg=4.67s    min=2.62s   med=4.6s    max=8.54s    p(90)=5.8s     p(95)=6.19s   
     iterations.....................: 38657   64.059357/s
     vus............................: 67      min=67      max=300
     vus_max........................: 300     min=300     max=300
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4024c45e-8b83-47b5-1736-9fba93f3f800/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/03d0f0e5-7a05-4fae-a8ce-f7fcd7332d00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/bd1b6aab-c66d-4054-40ff-e6cc1836fe00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 23466     ✗ 0    
     data_received..................: 687 MB  1.1 MB/s
     data_sent......................: 9.3 MB  15 kB/s
     http_req_blocked...............: avg=120.62µs min=1.46µs  med=3.19µs  max=50.01ms p(90)=4.82µs   p(95)=5.93µs  
     http_req_connecting............: avg=110.51µs min=0s      med=0s      max=21.55ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=23.45s   min=7.02s   med=23.8s   max=26.52s  p(90)=24.37s   p(95)=24.56s  
       { expected_response:true }...: avg=23.45s   min=7.02s   med=23.8s   max=26.52s  p(90)=24.37s   p(95)=24.56s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 7822 
     http_req_receiving.............: avg=112.74µs min=44.85µs med=98.23µs max=11.83ms p(90)=135.03µs p(95)=151.35µs
     http_req_sending...............: avg=142.28µs min=8.25µs  med=19.07µs max=15.84ms p(90)=28.57µs  p(95)=34.82µs 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=23.45s   min=7.02s   med=23.8s   max=26.52s  p(90)=24.37s   p(95)=24.56s  
     http_reqs......................: 7822    12.551229/s
     iteration_duration.............: avg=23.46s   min=7.03s   med=23.81s  max=26.53s  p(90)=24.38s   p(95)=24.57s  
     iterations.....................: 7822    12.551229/s
     vus............................: 7       min=7       max=300
     vus_max........................: 300     min=300     max=300
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d0b2b764-27b2-4093-907d-4de6506c6b00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/eccca13d-7084-4f47-0e47-e74f3a95e000/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c8bd7d0d-2683-4018-6c55-80de4a29bc00/public" alt="HTTP Overview" />


  </details>