## Overview for: `federation-v1/constant-vus-subgraphs-delay-resources`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. It's being executed with a constant amount of VUs over a fixed amount of time. It measure things like memory usage, CPU usage, average RPS. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was running 500 VUs over 600s


### Comparison


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2bd4b8dd-e2b1-4f9e-2451-74714ffbd300/public" alt="Comparison" />


| Gateway             | RPS ⬇️ |         Requests         |          Duration          | Notes                                                                          |
| :------------------ | :----: | :----------------------: | :------------------------: | :----------------------------------------------------------------------------- |
| wundergraph         |  190   |  114394 total, 0 failed  |  avg: 1857ms, p95: 3358ms  | ✅                                                                              |
| apollo-router       |  184   |  111040 total, 0 failed  |  avg: 1635ms, p95: 3420ms  | ✅                                                                              |
| mesh-supergraph-bun |  182   |  109609 total, 0 failed  |  avg: 1977ms, p95: 3672ms  | ✅                                                                              |
| mesh-supergraph     |   97   |  59100 total, 0 failed   |  avg: 4977ms, p95: 6130ms  | ✅                                                                              |
| apollo-server       |   61   | 37425 total, 2710 failed | avg: 8020ms, p95: 59999ms  | ❌ 2710 failed requests, 2710 non-200 responses, 2710 unexpected GraphQL errors |
| mercurius           |   12   |   7921 total, 0 failed   | avg: 38523ms, p95: 41402ms | ✅                                                                              |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 343182     ✗ 0     
     data_received..................: 10 GB   17 MB/s
     data_sent......................: 136 MB  226 kB/s
     http_req_blocked...............: avg=525µs    min=1.16µs   med=2.91µs  max=3.95s  p(90)=4.59µs  p(95)=5.58µs
     http_req_connecting............: avg=258.26µs min=0s       med=0s      max=3.34s  p(90)=0s      p(95)=0s    
     http_req_duration..............: avg=1.85s    min=514.09ms med=1.71s   max=8.53s  p(90)=2.83s   p(95)=3.35s 
       { expected_response:true }...: avg=1.85s    min=514.09ms med=1.71s   max=8.53s  p(90)=2.83s   p(95)=3.35s 
     http_req_failed................: 0.00%   ✓ 0          ✗ 114394
     http_req_receiving.............: avg=283.24ms min=27.56µs  med=74.32µs max=7.44s  p(90)=1.23s   p(95)=1.8s  
     http_req_sending...............: avg=23.61ms  min=7.46µs   med=13.06µs max=5.69s  p(90)=32.26µs p(95)=9.62ms
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s     p(90)=0s      p(95)=0s    
     http_req_waiting...............: avg=1.54s    min=514.03ms med=1.5s    max=4.31s  p(90)=2.13s   p(95)=2.3s  
     http_reqs......................: 114394  190.065118/s
     iteration_duration.............: avg=2.61s    min=525.79ms med=2.3s    max=12.66s p(90)=4.42s   p(95)=5.16s 
     iterations.....................: 114394  190.065118/s
     vus............................: 340     min=340      max=500 
     vus_max........................: 500     min=500      max=500 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ee8b9a3f-02e5-4e9a-d666-d80a16178800/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7802da7e-dd77-4172-4505-2ef128ed4700/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c8d6a3e7-3713-4583-b935-9505d858b700/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 333120     ✗ 0     
     data_received..................: 9.7 GB  16 MB/s
     data_sent......................: 132 MB  219 kB/s
     http_req_blocked...............: avg=1.51ms   min=1.16µs   med=3.14µs  max=4.7s   p(90)=4.92µs  p(95)=6.03µs 
     http_req_connecting............: avg=1.15ms   min=0s       med=0s      max=4.7s   p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=1.63s    min=248.06ms med=1.45s   max=10.55s p(90)=2.76s   p(95)=3.41s  
       { expected_response:true }...: avg=1.63s    min=248.06ms med=1.45s   max=10.55s p(90)=2.76s   p(95)=3.41s  
     http_req_failed................: 0.00%   ✓ 0          ✗ 111040
     http_req_receiving.............: avg=350.95ms min=25.67µs  med=71.78µs max=9.74s  p(90)=1.47s   p(95)=2.25s  
     http_req_sending...............: avg=30.97ms  min=7.74µs   med=13.75µs max=6.36s  p(90)=34.49µs p(95)=11.23ms
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s     p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=1.25s    min=247.99ms med=1.19s   max=4.77s  p(90)=1.93s   p(95)=2.14s  
     http_reqs......................: 111040  184.676647/s
     iteration_duration.............: avg=2.68s    min=267.52ms med=2.33s   max=17.02s p(90)=4.89s   p(95)=5.85s  
     iterations.....................: 111040  184.676647/s
     vus............................: 215     min=215      max=500 
     vus_max........................: 500     min=500      max=500 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1a5cb2a7-484a-4c08-d92f-12016b8de900/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/eb559533-0429-4b0f-134c-4555caa9a200/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/380e024f-11e9-45cb-718c-dbb200d4a600/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 328827     ✗ 0     
     data_received..................: 9.6 GB  16 MB/s
     data_sent......................: 130 MB  216 kB/s
     http_req_blocked...............: avg=405.7µs  min=1.23µs  med=3.03µs  max=1.88s  p(90)=4.74µs  p(95)=5.73µs 
     http_req_connecting............: avg=154.13µs min=0s      med=0s      max=1.88s  p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=1.97s    min=80.83ms med=1.87s   max=9.62s  p(90)=3.18s   p(95)=3.67s  
       { expected_response:true }...: avg=1.97s    min=80.83ms med=1.87s   max=9.62s  p(90)=3.18s   p(95)=3.67s  
     http_req_failed................: 0.00%   ✓ 0          ✗ 109609
     http_req_receiving.............: avg=307.27ms min=26.89µs med=68.68µs max=7.41s  p(90)=1.29s   p(95)=1.9s   
     http_req_sending...............: avg=22.54ms  min=6.33µs  med=13.58µs max=4.5s   p(90)=38.78µs p(95)=10.88ms
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s     p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=1.64s    min=80.76ms med=1.62s   max=5.2s   p(90)=2.48s   p(95)=2.8s   
     http_reqs......................: 109609  182.112953/s
     iteration_duration.............: avg=2.73s    min=93.03ms med=2.47s   max=16.11s p(90)=4.57s   p(95)=5.37s  
     iterations.....................: 109609  182.112953/s
     vus............................: 267     min=267      max=500 
     vus_max........................: 500     min=500      max=500 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a9c6740b-fa1a-4db2-82fa-b953a10fa200/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9b5add70-946d-4bbd-b4e1-dc8a8d9c0000/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f3d9f5d7-273b-49e9-4d36-0117d5176000/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 177300    ✗ 0    
     data_received..................: 5.2 GB  8.6 MB/s
     data_sent......................: 70 MB   116 kB/s
     http_req_blocked...............: avg=199.01µs min=1.95µs  med=3.99µs  max=217.78ms p(90)=6.11µs  p(95)=7.22µs  
     http_req_connecting............: avg=157.84µs min=0s      med=0s      max=39.67ms  p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=4.97s    min=2.66s   med=4.94s   max=9.31s    p(90)=5.89s   p(95)=6.13s   
       { expected_response:true }...: avg=4.97s    min=2.66s   med=4.94s   max=9.31s    p(90)=5.89s   p(95)=6.13s   
     http_req_failed................: 0.00%   ✓ 0         ✗ 59100
     http_req_receiving.............: avg=17.58ms  min=35.82µs med=76.35µs max=1.72s    p(90)=3.41ms  p(95)=39.81ms 
     http_req_sending...............: avg=1.65ms   min=8.92µs  med=17.89µs max=923.33ms p(90)=38.63µs p(95)=147.83µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=4.95s    min=2.66s   med=4.92s   max=9.31s    p(90)=5.86s   p(95)=6.09s   
     http_reqs......................: 59100   97.866563/s
     iteration_duration.............: avg=5.09s    min=2.81s   med=5.06s   max=9.32s    p(90)=6.03s   p(95)=6.31s   
     iterations.....................: 59100   97.866563/s
     vus............................: 10      min=10      max=500
     vus_max........................: 500     min=500     max=500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/bdb9801a-ec89-4901-62ac-b62d729feb00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b61f084d-3836-4c69-ad3f-8394b63f1700/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6be62876-da3f-4286-9cec-64e1e29cf900/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  92% — ✓ 34715 / ✗ 2710
     ✗ no graphql errors
      ↳  92% — ✓ 34715 / ✗ 2710
     ✓ valid response structure

     checks.........................: 95.05% ✓ 104145    ✗ 5420 
     data_received..................: 3.1 GB 5.1 MB/s
     data_sent......................: 44 MB  74 kB/s
     http_req_blocked...............: avg=975.32µs min=1.37µs   med=3.11µs   max=170.19ms p(90)=6.26µs   p(95)=664.28µs
     http_req_connecting............: avg=934.03µs min=0s       med=0s       max=170.07ms p(90)=0s       p(95)=562.84µs
     http_req_duration..............: avg=8.02s    min=802.26ms med=4.04s    max=1m0s     p(90)=5.13s    p(95)=59.99s  
       { expected_response:true }...: avg=3.96s    min=802.26ms med=3.97s    max=59.97s   p(90)=4.73s    p(95)=4.97s   
     http_req_failed................: 7.24%  ✓ 2710      ✗ 34715
     http_req_receiving.............: avg=528.25µs min=0s       med=113.44µs max=207.39ms p(90)=202.25µs p(95)=461.1µs 
     http_req_sending...............: avg=249.03µs min=8.58µs   med=16.01µs  max=150.14ms p(90)=36.86µs  p(95)=124.86µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=8.01s    min=802.15ms med=4.04s    max=1m0s     p(90)=5.13s    p(95)=59.99s  
     http_reqs......................: 37425  61.979972/s
     iteration_duration.............: avg=8.03s    min=808.16ms med=4.06s    max=1m0s     p(90)=5.14s    p(95)=1m0s    
     iterations.....................: 37425  61.979972/s
     vus............................: 143    min=143     max=500
     vus_max........................: 500    min=500     max=500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9eb691d6-f8fd-4be1-e37c-c05255297000/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/81a66ecb-957c-44b2-234d-a38e9414ee00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/724da0eb-8bf7-421c-5cee-9240f75ef900/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 23763     ✗ 0    
     data_received..................: 695 MB  1.1 MB/s
     data_sent......................: 9.5 MB  15 kB/s
     http_req_blocked...............: avg=1.79ms   min=1.5µs   med=4.09µs   max=65.85ms p(90)=5.91µs   p(95)=3.76ms  
     http_req_connecting............: avg=1.76ms   min=0s      med=0s       max=62.21ms p(90)=0s       p(95)=2.92ms  
     http_req_duration..............: avg=38.52s   min=11.28s  med=39.69s   max=43.98s  p(90)=40.35s   p(95)=41.4s   
       { expected_response:true }...: avg=38.52s   min=11.28s  med=39.69s   max=43.98s  p(90)=40.35s   p(95)=41.4s   
     http_req_failed................: 0.00%   ✓ 0         ✗ 7921 
     http_req_receiving.............: avg=145.45µs min=57.03µs med=125.18µs max=12.04ms p(90)=173.44µs p(95)=198.81µs
     http_req_sending...............: avg=214.2µs  min=8.8µs   med=22.59µs  max=18.04ms p(90)=33.62µs  p(95)=130.41µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=38.52s   min=11.28s  med=39.69s   max=43.98s  p(90)=40.35s   p(95)=41.4s   
     http_reqs......................: 7921    12.572974/s
     iteration_duration.............: avg=38.53s   min=11.29s  med=39.69s   max=43.99s  p(90)=40.35s   p(95)=41.4s   
     iterations.....................: 7921    12.572974/s
     vus............................: 119     min=119     max=500
     vus_max........................: 500     min=500     max=500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/25306886-b581-4e81-a584-cc9efc945700/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5830f897-2b53-4095-8ee1-b749dc03e800/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4940735f-570a-4c77-c77e-487ba1276e00/public" alt="HTTP Overview" />


  </details>