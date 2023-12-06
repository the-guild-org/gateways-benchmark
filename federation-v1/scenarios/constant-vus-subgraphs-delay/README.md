## Overview for: `federation-v1/constant-vus-subgraphs-delay`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. It's being executed with a constant amount of VUs over a fixed amount of time. It measure things like memory usage, CPU usage, average RPS. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was running 300 VUs over 600s


### Comparison


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5f5d11b1-b655-4197-e660-888f784d9d00/public" alt="Comparison" />


| Gateway             | RPS ⬇️ |        Requests         |          Duration          | Notes                                                                       |
| :------------------ | :----: | :---------------------: | :------------------------: | :-------------------------------------------------------------------------- |
| cosmo               |  189   | 114188 total, 0 failed  |  avg: 1439ms, p95: 1824ms  | ✅                                                                           |
| wundergraph         |  188   | 113463 total, 0 failed  |  avg: 1327ms, p95: 2065ms  | ✅                                                                           |
| apollo-router       |  179   | 107833 total, 0 failed  |  avg: 1149ms, p95: 2451ms  | ✅                                                                           |
| mesh-supergraph-bun |  178   | 107199 total, 0 failed  |  avg: 1466ms, p95: 2453ms  | ✅                                                                           |
| mesh-supergraph     |   94   |  56939 total, 0 failed  |  avg: 3101ms, p95: 3716ms  | ✅                                                                           |
| apollo-server       |   60   | 36563 total, 136 failed |  avg: 4923ms, p95: 6384ms  | ❌ 136 failed requests, 136 non-200 responses, 136 unexpected GraphQL errors |
| mercurius           |   12   |  7841 total, 0 failed   | avg: 23390ms, p95: 24420ms | ✅                                                                           |



<details>
  <summary>Summary for: `cosmo`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 342564    ✗ 0     
     data_received..................: 10 GB   17 MB/s
     data_sent......................: 136 MB  225 kB/s
     http_req_blocked...............: avg=96.69µs min=1.15µs   med=2.8µs   max=458.26ms p(90)=4.04µs   p(95)=4.71µs  
     http_req_connecting............: avg=51.09µs min=0s       med=0s      max=59.99ms  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=1.43s   min=748.69ms med=1.41s   max=4.01s    p(90)=1.7s     p(95)=1.82s   
       { expected_response:true }...: avg=1.43s   min=748.69ms med=1.41s   max=4.01s    p(90)=1.7s     p(95)=1.82s   
     http_req_failed................: 0.00%   ✓ 0         ✗ 114188
     http_req_receiving.............: avg=50.1ms  min=28.43µs  med=65.7µs  max=1.92s    p(90)=185.64ms p(95)=318.78ms
     http_req_sending...............: avg=4.6ms   min=7.75µs   med=12.79µs max=1.47s    p(90)=30.49µs  p(95)=463.82µs
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=1.38s   min=657.67ms med=1.37s   max=2.56s    p(90)=1.61s    p(95)=1.69s   
     http_reqs......................: 114188  189.89519/s
     iteration_duration.............: avg=1.57s   min=759.5ms  med=1.51s   max=4.04s    p(90)=1.97s    p(95)=2.18s   
     iterations.....................: 114188  189.89519/s
     vus............................: 138     min=138     max=300 
     vus_max........................: 300     min=300     max=300 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/329c7dda-33bb-482b-41b7-8cda84789d00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7c5d1fed-f346-4982-bcdd-ad8d77d7f400/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/22c6b01a-d424-4193-ce84-bdb0e2d53500/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 340389     ✗ 0     
     data_received..................: 10 GB   17 MB/s
     data_sent......................: 135 MB  224 kB/s
     http_req_blocked...............: avg=126.31µs min=1.09µs   med=2.87µs  max=1.37s   p(90)=4.32µs   p(95)=5.17µs  
     http_req_connecting............: avg=12.21µs  min=0s       med=0s      max=18.53ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=1.32s    min=591.54ms med=1.26s   max=4.11s   p(90)=1.78s    p(95)=2.06s   
       { expected_response:true }...: avg=1.32s    min=591.54ms med=1.26s   max=4.11s   p(90)=1.78s    p(95)=2.06s   
     http_req_failed................: 0.00%   ✓ 0          ✗ 113463
     http_req_receiving.............: avg=134.56ms min=30.91µs  med=77.32µs max=2.65s   p(90)=533.78ms p(95)=875.86ms
     http_req_sending...............: avg=8.39ms   min=7.84µs   med=13.23µs max=2.41s   p(90)=29.84µs  p(95)=1.03ms  
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=1.18s    min=583.05ms med=1.17s   max=2.48s   p(90)=1.44s    p(95)=1.53s   
     http_reqs......................: 113463  188.727981/s
     iteration_duration.............: avg=1.58s    min=620.55ms med=1.46s   max=5.95s   p(90)=2.32s    p(95)=2.61s   
     iterations.....................: 113463  188.727981/s
     vus............................: 101     min=101      max=300 
     vus_max........................: 300     min=300      max=300 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/06e97a06-8556-4dba-3e77-80de2a9d2200/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0d9efe58-3c2e-4d2c-0776-62ebed4e3c00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1031d712-8104-4ac0-630e-9db8b8f15a00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 323499     ✗ 0     
     data_received..................: 9.5 GB  16 MB/s
     data_sent......................: 128 MB  213 kB/s
     http_req_blocked...............: avg=202.1µs  min=1.12µs   med=3.21µs   max=1.2s     p(90)=5.19µs  p(95)=6.33µs  
     http_req_connecting............: avg=40.47µs  min=0s       med=0s       max=714.04ms p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=1.14s    min=245.55ms med=955.44ms max=6.4s     p(90)=2.02s   p(95)=2.45s   
       { expected_response:true }...: avg=1.14s    min=245.55ms med=955.44ms max=6.4s     p(90)=2.02s   p(95)=2.45s   
     http_req_failed................: 0.00%   ✓ 0          ✗ 107833
     http_req_receiving.............: avg=300.41ms min=24.53µs  med=82.17µs  max=5.36s    p(90)=1.17s   p(95)=1.63s   
     http_req_sending...............: avg=13.02ms  min=7.47µs   med=14.38µs  max=4.52s    p(90)=35.56µs p(95)=181.51µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=835.53ms min=236.45ms med=767.74ms max=2.64s    p(90)=1.23s   p(95)=1.35s   
     http_reqs......................: 107833  179.240585/s
     iteration_duration.............: avg=1.66s    min=279.16ms med=1.4s     max=10.74s   p(90)=3.08s   p(95)=3.65s   
     iterations.....................: 107833  179.240585/s
     vus............................: 162     min=162      max=300 
     vus_max........................: 300     min=300      max=300 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5fbfc495-ca31-4872-711a-525a2ec03600/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/910d904c-712f-498a-32dd-6ec75cfd8700/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c99405ac-897e-4415-ce74-4b841bcd4e00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 321597     ✗ 0     
     data_received..................: 9.4 GB  16 MB/s
     data_sent......................: 127 MB  212 kB/s
     http_req_blocked...............: avg=83.87µs min=1.47µs  med=3.13µs  max=509.7ms  p(90)=5.05µs   p(95)=6.15µs  
     http_req_connecting............: avg=17.99µs min=0s      med=0s      max=509.63ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=1.46s   min=93.32ms med=1.39s   max=5.31s    p(90)=2.22s    p(95)=2.45s   
       { expected_response:true }...: avg=1.46s   min=93.32ms med=1.39s   max=5.31s    p(90)=2.22s    p(95)=2.45s   
     http_req_failed................: 0.00%   ✓ 0          ✗ 107199
     http_req_receiving.............: avg=95.79ms min=26.9µs  med=70.25µs max=4.82s    p(90)=321.78ms p(95)=740.79ms
     http_req_sending...............: avg=5.84ms  min=7.63µs  med=14.44µs max=2.9s     p(90)=36.9µs   p(95)=429.32µs
     http_req_tls_handshaking.......: avg=0s      min=0s      med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=1.36s   min=93.24ms med=1.3s    max=3.35s    p(90)=2.07s    p(95)=2.28s   
     http_reqs......................: 107199  178.282989/s
     iteration_duration.............: avg=1.68s   min=107.1ms med=1.58s   max=7.65s    p(90)=2.54s    p(95)=2.85s   
     iterations.....................: 107199  178.282989/s
     vus............................: 103     min=103      max=300 
     vus_max........................: 300     min=300      max=300 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/42e0638a-5bf4-4031-2ca1-119e57dbc600/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f6c3ef7b-81ba-4ae5-5e1c-86023f96cc00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e8bffb8e-8bd1-4d76-03a8-b71992389600/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 170817    ✗ 0    
     data_received..................: 5.0 GB  8.3 MB/s
     data_sent......................: 68 MB   112 kB/s
     http_req_blocked...............: avg=85.25µs  min=1.48µs  med=4.04µs  max=128.91ms p(90)=6.34µs  p(95)=7.32µs  
     http_req_connecting............: avg=57.74µs  min=0s      med=0s      max=33.36ms  p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=3.1s     min=1.5s    med=3.09s   max=7.29s    p(90)=3.57s   p(95)=3.71s   
       { expected_response:true }...: avg=3.1s     min=1.5s    med=3.09s   max=7.29s    p(90)=3.57s   p(95)=3.71s   
     http_req_failed................: 0.00%   ✓ 0         ✗ 56939
     http_req_receiving.............: avg=7.3ms    min=33.62µs med=84.31µs max=626.47ms p(90)=3.4ms   p(95)=19.95ms 
     http_req_sending...............: avg=955.39µs min=8.4µs   med=19.41µs max=694.04ms p(90)=38.68µs p(95)=130.58µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=3.09s    min=1.5s    med=3.09s   max=7.29s    p(90)=3.56s   p(95)=3.7s    
     http_reqs......................: 56939   94.537932/s
     iteration_duration.............: avg=3.16s    min=1.52s   med=3.16s   max=7.31s    p(90)=3.66s   p(95)=3.82s   
     iterations.....................: 56939   94.537932/s
     vus............................: 73      min=73      max=300
     vus_max........................: 300     min=300     max=300
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/fd8d743c-dce1-4da7-5936-58ddd875e800/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0e859eef-3b19-416f-4332-58fa4be02200/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7796cbe4-2198-4ee5-2b55-3424aaf95400/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  99% — ✓ 36427 / ✗ 136
     ✗ no graphql errors
      ↳  99% — ✓ 36427 / ✗ 136
     ✓ valid response structure

     checks.........................: 99.75% ✓ 109281    ✗ 272  
     data_received..................: 3.2 GB 5.3 MB/s
     data_sent......................: 43 MB  72 kB/s
     http_req_blocked...............: avg=80.86µs  min=1.39µs   med=3.15µs   max=78.26ms  p(90)=4.85µs   p(95)=5.72µs  
     http_req_connecting............: avg=72.69µs  min=0s       med=0s       max=78.15ms  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=4.92s    min=801.85ms med=4.57s    max=1m0s     p(90)=5.86s    p(95)=6.38s   
       { expected_response:true }...: avg=4.71s    min=801.85ms med=4.56s    max=59.91s   p(90)=5.84s    p(95)=6.32s   
     http_req_failed................: 0.37%  ✓ 136       ✗ 36427
     http_req_receiving.............: avg=539.3µs  min=0s       med=112.88µs max=217.65ms p(90)=197.81µs p(95)=514.09µs
     http_req_sending...............: avg=105.46µs min=8.62µs   med=16.11µs  max=117.15ms p(90)=31.27µs  p(95)=42.28µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=4.92s    min=801.73ms med=4.57s    max=1m0s     p(90)=5.86s    p(95)=6.38s   
     http_reqs......................: 36563  60.611412/s
     iteration_duration.............: avg=4.93s    min=811.2ms  med=4.58s    max=1m0s     p(90)=5.89s    p(95)=6.4s    
     iterations.....................: 36563  60.611412/s
     vus............................: 73     min=73      max=300
     vus_max........................: 300    min=300     max=300
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9cfe6084-7f5f-42ba-d353-5557eba9e200/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/07b385ce-3681-4a28-cb89-5d0df0d17d00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6ea34e8e-6de6-4526-ac94-a3b634eac200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 23523    ✗ 0    
     data_received..................: 688 MB  1.1 MB/s
     data_sent......................: 9.3 MB  15 kB/s
     http_req_blocked...............: avg=374.09µs min=1.5µs   med=3.19µs   max=48.22ms p(90)=4.76µs   p(95)=5.85µs  
     http_req_connecting............: avg=362.71µs min=0s      med=0s       max=41.33ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=23.38s   min=7.37s   med=23.73s   max=26.39s  p(90)=24.22s   p(95)=24.41s  
       { expected_response:true }...: avg=23.38s   min=7.37s   med=23.73s   max=26.39s  p(90)=24.22s   p(95)=24.41s  
     http_req_failed................: 0.00%   ✓ 0        ✗ 7841 
     http_req_receiving.............: avg=145.34µs min=45.76µs med=117.22µs max=42.51ms p(90)=162.83µs p(95)=181.38µs
     http_req_sending...............: avg=87.89µs  min=8.46µs  med=18.68µs  max=18.59ms p(90)=28.64µs  p(95)=36.73µs 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=23.38s   min=7.37s   med=23.73s   max=26.39s  p(90)=24.22s   p(95)=24.41s  
     http_reqs......................: 7841    12.59067/s
     iteration_duration.............: avg=23.39s   min=7.38s   med=23.73s   max=26.4s   p(90)=24.23s   p(95)=24.42s  
     iterations.....................: 7841    12.59067/s
     vus............................: 16      min=16     max=300
     vus_max........................: 300     min=300    max=300
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0acbd04d-0cfb-482d-7310-264b3d010000/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5f4dff04-8759-4ddb-02f2-8263ef073900/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/69711453-c06f-49f1-9e80-5592f8698e00/public" alt="HTTP Overview" />


  </details>