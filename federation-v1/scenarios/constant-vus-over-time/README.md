## Overview for: `federation-v1/constant-vus-over-time`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. It's being executed with a constant amount of VUs over a fixed amount of time. It measure things like memory usage, CPU usage, average RPS. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was running 300 VUs over 600s


### Comparison


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/840391ce-d830-450d-c2d5-1fa835634c00/public" alt="Comparison" />


| Gateway              | RPS ⬇️ |         Requests         |         Duration         | Notes                                                                                                        |
| :------------------- | :----: | :----------------------: | :----------------------: | :----------------------------------------------------------------------------------------------------------- |
| mesh-supergraph-bun  |  186   |  112264 total, 0 failed  | avg: 1299ms, p95: 2378ms | ✅                                                                                                            |
| apollo-router        |  174   |  104664 total, 0 failed  | avg: 939ms, p95: 2599ms  | ✅                                                                                                            |
| cosmo                |  174   |  104854 total, 2 failed  | avg: 913ms, p95: 2458ms  | ❌ 2 failed requests, 2 non-200 responses, 8 unexpected GraphQL errors, non-compatible response structure (8) |
| wundergraph          |  160   |  96520 total, 0 failed   | avg: 944ms, p95: 2650ms  | ✅                                                                                                            |
| mesh-supergraph      |   96   |  58004 total, 0 failed   | avg: 3036ms, p95: 4090ms | ✅                                                                                                            |
| apollo-server-node16 |   63   |  38124 total, 0 failed   | avg: 4719ms, p95: 6618ms | ✅                                                                                                            |
| apollo-server        |   62   | 37349 total, 1100 failed | avg: 4814ms, p95: 3648ms | ❌ 1100 failed requests, 1100 non-200 responses, 1100 unexpected GraphQL errors                               |
| mercurius            |   48   |  29194 total, 0 failed   | avg: 6165ms, p95: 6764ms | ✅                                                                                                            |



<details>
  <summary>Summary for: `mesh-supergraph-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 336792     ✗ 0     
     data_received..................: 9.8 GB  16 MB/s
     data_sent......................: 133 MB  222 kB/s
     http_req_blocked...............: avg=211.1µs  min=1.23µs  med=3.05µs  max=2.93s p(90)=4.77µs   p(95)=5.69µs
     http_req_connecting............: avg=91.32µs  min=0s      med=0s      max=2.77s p(90)=0s       p(95)=0s    
     http_req_duration..............: avg=1.29s    min=31.3ms  med=1.2s    max=6.06s p(90)=2.1s     p(95)=2.37s 
       { expected_response:true }...: avg=1.29s    min=31.3ms  med=1.2s    max=6.06s p(90)=2.1s     p(95)=2.37s 
     http_req_failed................: 0.00%   ✓ 0          ✗ 112264
     http_req_receiving.............: avg=154.71ms min=28.4µs  med=68.04µs max=5.56s p(90)=619.22ms p(95)=1.06s 
     http_req_sending...............: avg=8.58ms   min=7.76µs  med=13.6µs  max=3.65s p(90)=33.64µs  p(95)=2.05ms
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s    p(90)=0s       p(95)=0s    
     http_req_waiting...............: avg=1.13s    min=31.06ms med=1.07s   max=3.27s p(90)=1.83s    p(95)=2.03s 
     http_reqs......................: 112264  186.660087/s
     iteration_duration.............: avg=1.6s     min=56.01ms med=1.46s   max=9.53s p(90)=2.59s    p(95)=3.06s 
     iterations.....................: 112264  186.660087/s
     vus............................: 125     min=125      max=300 
     vus_max........................: 300     min=300      max=300 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3a97b0a3-3e65-4f5c-0c58-82576f867f00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/24bc6484-077a-42e9-7616-135e3e5c7500/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/170dc02a-a2d1-4c08-16fc-852fb7914600/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 313992     ✗ 0     
     data_received..................: 9.2 GB  15 MB/s
     data_sent......................: 124 MB  207 kB/s
     http_req_blocked...............: avg=1.49ms   min=1.37µs  med=3.16µs   max=4.53s  p(90)=4.82µs   p(95)=5.77µs 
     http_req_connecting............: avg=1.23ms   min=0s      med=0s       max=4.53s  p(90)=0s       p(95)=0s     
     http_req_duration..............: avg=939.11ms min=9.45ms  med=732.63ms max=8.51s  p(90)=2.03s    p(95)=2.59s  
       { expected_response:true }...: avg=939.11ms min=9.45ms  med=732.63ms max=8.51s  p(90)=2.03s    p(95)=2.59s  
     http_req_failed................: 0.00%   ✓ 0          ✗ 104664
     http_req_receiving.............: avg=363.39ms min=27.67µs med=74.04µs  max=7.84s  p(90)=1.4s     p(95)=2.02s  
     http_req_sending...............: avg=21.9ms   min=7.83µs  med=14.3µs   max=6.87s  p(90)=39.17µs  p(95)=11.37ms
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s     p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=553.81ms min=9.04ms  med=523.12ms max=2.73s  p(90)=993.79ms p(95)=1.14s  
     http_reqs......................: 104664  174.187816/s
     iteration_duration.............: avg=1.71s    min=18.7ms  med=1.36s    max=13.12s p(90)=3.61s    p(95)=4.44s  
     iterations.....................: 104664  174.187816/s
     vus............................: 300     min=300      max=300 
     vus_max........................: 300     min=300      max=300 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b5cd0a5b-fc4e-46bd-5a1c-7166968e7000/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d0780f24-55eb-42ad-9b22-92e4e7b4c400/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f3b65359-9cb0-4c81-15b0-80d13583dc00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `cosmo`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  99% — ✓ 104852 / ✗ 2
     ✗ no graphql errors
      ↳  99% — ✓ 104846 / ✗ 8
     ✗ valid response structure
      ↳  99% — ✓ 104846 / ✗ 8

     checks.........................: 99.99% ✓ 314544     ✗ 18    
     data_received..................: 9.2 GB 15 MB/s
     data_sent......................: 125 MB 207 kB/s
     http_req_blocked...............: avg=1.35ms   min=1.09µs  med=3.17µs   max=3.25s  p(90)=5.01µs   p(95)=6.18µs  
     http_req_connecting............: avg=1.15ms   min=0s      med=0s       max=3.25s  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=913.48ms min=11.02ms med=712.77ms max=7.86s  p(90)=1.98s    p(95)=2.45s   
       { expected_response:true }...: avg=913.49ms min=11.02ms med=712.77ms max=7.86s  p(90)=1.98s    p(95)=2.45s   
     http_req_failed................: 0.00%  ✓ 2          ✗ 104852
     http_req_receiving.............: avg=366.74ms min=23.41µs med=81.29µs  max=7.44s  p(90)=1.4s     p(95)=1.97s   
     http_req_sending...............: avg=18.04ms  min=7.74µs  med=14.32µs  max=4.92s  p(90)=35.68µs  p(95)=438.89µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s     p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=528.7ms  min=9.7ms   med=490.75ms max=2.88s  p(90)=962.08ms p(95)=1.12s   
     http_reqs......................: 104854 174.526332/s
     iteration_duration.............: avg=1.7s     min=22.86ms med=1.37s    max=11.48s p(90)=3.61s    p(95)=4.39s   
     iterations.....................: 104854 174.526332/s
     vus............................: 300    min=300      max=300 
     vus_max........................: 300    min=300      max=300 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9d6cc740-e104-4b97-28a9-01a162826900/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b1337c1f-9c84-49f6-eb17-2f0c1e7ac600/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/dda6af26-ea58-4eda-8173-657101cedb00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 289560    ✗ 0    
     data_received..................: 8.5 GB  14 MB/s
     data_sent......................: 115 MB  191 kB/s
     http_req_blocked...............: avg=2ms      min=1.51µs  med=3.64µs   max=4.05s  p(90)=5.75µs   p(95)=6.98µs 
     http_req_connecting............: avg=1.55ms   min=0s      med=0s       max=2.93s  p(90)=0s       p(95)=0s     
     http_req_duration..............: avg=944.08ms min=9.01ms  med=724.74ms max=8.22s  p(90)=2.1s     p(95)=2.64s  
       { expected_response:true }...: avg=944.08ms min=9.01ms  med=724.74ms max=8.22s  p(90)=2.1s     p(95)=2.64s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 96520
     http_req_receiving.............: avg=391.67ms min=24.73µs med=91.22µs  max=7.55s  p(90)=1.48s    p(95)=2.14s  
     http_req_sending...............: avg=23.68ms  min=7.82µs  med=16.87µs  max=6.02s  p(90)=101.22µs p(95)=16.85ms
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s     p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=528.72ms min=8.91ms  med=483.19ms max=2.93s  p(90)=984.45ms p(95)=1.13s  
     http_reqs......................: 96520   160.66363/s
     iteration_duration.............: avg=1.85s    min=22.86ms med=1.49s    max=12.64s p(90)=3.93s    p(95)=4.81s  
     iterations.....................: 96520   160.66363/s
     vus............................: 300     min=300     max=300
     vus_max........................: 300     min=300     max=300
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a59a2797-6c90-4bc7-2717-baa0b23d3d00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f0e3f322-1db7-46b0-6e51-c869e1d12100/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a4e7a3b4-6a54-4331-ea4a-c081b8ba1600/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 174012   ✗ 0    
     data_received..................: 5.1 GB  8.4 MB/s
     data_sent......................: 69 MB   114 kB/s
     http_req_blocked...............: avg=49.14µs min=1.35µs  med=3.56µs  max=166.58ms p(90)=5.45µs  p(95)=6.41µs  
     http_req_connecting............: avg=14.75µs min=0s      med=0s      max=29.47ms  p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=3.03s   min=1.33s   med=3.02s   max=8.01s    p(90)=3.88s   p(95)=4.08s   
       { expected_response:true }...: avg=3.03s   min=1.33s   med=3.02s   max=8.01s    p(90)=3.88s   p(95)=4.08s   
     http_req_failed................: 0.00%   ✓ 0        ✗ 58004
     http_req_receiving.............: avg=10.24ms min=30.78µs med=76.91µs max=1.02s    p(90)=6.34ms  p(95)=35.46ms 
     http_req_sending...............: avg=1.3ms   min=7.88µs  med=16.38µs max=776.24ms p(90)=34.39µs p(95)=120.02µs
     http_req_tls_handshaking.......: avg=0s      min=0s      med=0s      max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=3.02s   min=1.32s   med=3.01s   max=8.01s    p(90)=3.86s   p(95)=4.07s   
     http_reqs......................: 58004   96.30476/s
     iteration_duration.............: avg=3.11s   min=1.36s   med=3.09s   max=8.02s    p(90)=3.96s   p(95)=4.19s   
     iterations.....................: 58004   96.30476/s
     vus............................: 78      min=78     max=300
     vus_max........................: 300     min=300    max=300
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9f52c882-229c-46b8-9158-09a2cbf1d000/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b57515b1-5f40-4a6b-2a50-08d96b4a5f00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/464dd5bf-1a4b-4737-b746-afa780d96d00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server-node16`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 114372    ✗ 0    
     data_received..................: 3.4 GB  5.6 MB/s
     data_sent......................: 45 MB   75 kB/s
     http_req_blocked...............: avg=42.64µs  min=1.38µs   med=2.86µs   max=19.95ms  p(90)=4.34µs   p(95)=5.07µs  
     http_req_connecting............: avg=35.93µs  min=0s       med=0s       max=18.7ms   p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=4.71s    min=785.25ms med=4.4s     max=15.37s   p(90)=6.15s    p(95)=6.61s   
       { expected_response:true }...: avg=4.71s    min=785.25ms med=4.4s     max=15.37s   p(90)=6.15s    p(95)=6.61s   
     http_req_failed................: 0.00%   ✓ 0         ✗ 38124
     http_req_receiving.............: avg=759.45µs min=36.4µs   med=108.62µs max=261.27ms p(90)=197.14µs p(95)=538.27µs
     http_req_sending...............: avg=117.74µs min=8.04µs   med=14.21µs  max=130.93ms p(90)=27.97µs  p(95)=39.74µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=4.71s    min=785.13ms med=4.4s     max=15.37s   p(90)=6.15s    p(95)=6.61s   
     http_reqs......................: 38124   63.229242/s
     iteration_duration.............: avg=4.73s    min=795.22ms med=4.42s    max=15.39s   p(90)=6.17s    p(95)=6.63s   
     iterations.....................: 38124   63.229242/s
     vus............................: 6       min=6       max=300
     vus_max........................: 300     min=300     max=300
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f11cc5a0-e203-4733-6ab3-d2608fd54c00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/53268d37-f04c-4a88-7341-2918431acd00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/486806f3-28d8-4e49-c612-601691422b00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  97% — ✓ 36249 / ✗ 1100
     ✗ no graphql errors
      ↳  97% — ✓ 36249 / ✗ 1100
     ✓ valid response structure

     checks.........................: 98.01% ✓ 108747    ✗ 2200 
     data_received..................: 3.2 GB 5.3 MB/s
     data_sent......................: 44 MB  74 kB/s
     http_req_blocked...............: avg=192.59µs min=1.42µs   med=3.51µs   max=67.07ms p(90)=5.53µs   p(95)=9.38µs  
     http_req_connecting............: avg=180.64µs min=0s       med=0s       max=59.49ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=4.81s    min=555.05ms med=3.1s     max=1m0s    p(90)=3.44s    p(95)=3.64s   
       { expected_response:true }...: avg=3.13s    min=555.05ms med=3.1s     max=59.39s  p(90)=3.38s    p(95)=3.5s    
     http_req_failed................: 2.94%  ✓ 1100      ✗ 36249
     http_req_receiving.............: avg=214.04µs min=0s       med=118.77µs max=101.6ms p(90)=180.22µs p(95)=215.18µs
     http_req_sending...............: avg=88.6µs   min=8.6µs    med=18.95µs  max=57.98ms p(90)=34.45µs  p(95)=45.28µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=4.81s    min=554.9ms  med=3.1s     max=1m0s    p(90)=3.44s    p(95)=3.64s   
     http_reqs......................: 37349  62.015549/s
     iteration_duration.............: avg=4.82s    min=566.44ms med=3.11s    max=1m0s    p(90)=3.46s    p(95)=3.65s   
     iterations.....................: 37349  62.015549/s
     vus............................: 54     min=54      max=300
     vus_max........................: 300    min=300     max=300
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/11729cc4-82ad-4577-417f-e548c3f1f900/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7c455009-6cc8-4ead-bd2c-e227b316a300/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9f404d42-7a7a-47fe-5b52-9ea718009000/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 87582     ✗ 0    
     data_received..................: 2.6 GB  4.3 MB/s
     data_sent......................: 35 MB   58 kB/s
     http_req_blocked...............: avg=14.79µs  min=1.58µs   med=3.78µs   max=20.01ms  p(90)=5.02µs   p(95)=5.58µs  
     http_req_connecting............: avg=9.55µs   min=0s       med=0s       max=19.98ms  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=6.16s    min=529.74ms med=6.08s    max=13.41s   p(90)=6.68s    p(95)=6.76s   
       { expected_response:true }...: avg=6.16s    min=529.74ms med=6.08s    max=13.41s   p(90)=6.68s    p(95)=6.76s   
     http_req_failed................: 0.00%   ✓ 0         ✗ 29194
     http_req_receiving.............: avg=322.27µs min=40.65µs  med=118.95µs max=365.95ms p(90)=169.23µs p(95)=191.45µs
     http_req_sending...............: avg=31.06µs  min=8.71µs   med=20.58µs  max=19.03ms  p(90)=32.55µs  p(95)=37.56µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=6.16s    min=529.51ms med=6.08s    max=13.41s   p(90)=6.68s    p(95)=6.76s   
     http_reqs......................: 29194   48.500515/s
     iteration_duration.............: avg=6.17s    min=542.54ms med=6.1s     max=13.42s   p(90)=6.69s    p(95)=6.77s   
     iterations.....................: 29194   48.500515/s
     vus............................: 167     min=167     max=300
     vus_max........................: 300     min=300     max=300
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/34528be9-6e4f-460f-c75c-26525bd9bd00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8ca59514-34bd-4e2f-c76d-9b7441b1c900/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1ec1cdd9-096e-437d-fb93-cfe97a877200/public" alt="HTTP Overview" />


  </details>