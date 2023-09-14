## Overview for: `constant-vus-subgraphs-delay`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. It's being executed with a constant amount of VUs over a fixed amount of time. It measure things like memory usage, CPU usage, average RPS. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was running 300 VUs over 600s


### Comparison


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3fdfd5db-310b-464f-2839-ea3ca6fc9f00/public" alt="Comparison" />


| Gateway             | RPS ⬇️ |        Requests        |          Duration          | Notes                                                                    |
| :------------------ | :----: | :--------------------: | :------------------------: | :----------------------------------------------------------------------- |
| wundergraph         |  192   | 115793 total, 0 failed |  avg: 1312ms, p95: 2043ms  | ✅                                                                        |
| apollo-router       |  186   | 111898 total, 0 failed |  avg: 1112ms, p95: 2325ms  | ✅                                                                        |
| mesh-supergraph-bun |  108   | 65238 total, 0 failed  |  avg: 2696ms, p95: 4616ms  | ✅                                                                        |
| mesh-bun            |  102   | 61784 total, 0 failed  |  avg: 2855ms, p95: 4874ms  | ✅                                                                        |
| mesh-supergraph     |   99   | 59799 total, 0 failed  |  avg: 2953ms, p95: 3634ms  | ✅                                                                        |
| mesh                |   94   | 56767 total, 0 failed  |  avg: 3114ms, p95: 3842ms  | ✅                                                                        |
| apollo-server       |   63   | 38266 total, 96 failed |  avg: 4702ms, p95: 6113ms  | ❌ 96 failed requests, 96 non-200 responses, 96 unexpected GraphQL errors |
| mercurius           |   12   |  7873 total, 0 failed  | avg: 23296ms, p95: 24165ms | ✅                                                                        |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 347379     ✗ 0     
     data_received..................: 10 GB   17 MB/s
     data_sent......................: 137 MB  229 kB/s
     http_req_blocked...............: avg=83.61µs  min=1.19µs   med=2.97µs  max=1.03s   p(90)=4.7µs    p(95)=5.73µs  
     http_req_connecting............: avg=14.16µs  min=0s       med=0s      max=19.52ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=1.31s    min=561.42ms med=1.24s   max=4.53s   p(90)=1.76s    p(95)=2.04s   
       { expected_response:true }...: avg=1.31s    min=561.42ms med=1.24s   max=4.53s   p(90)=1.76s    p(95)=2.04s   
     http_req_failed................: 0.00%   ✓ 0          ✗ 115793
     http_req_receiving.............: avg=130.79ms min=28.54µs  med=78.57µs max=2.85s   p(90)=506.86ms p(95)=861.15ms
     http_req_sending...............: avg=7.49ms   min=7.57µs   med=13.57µs max=1.93s   p(90)=31.5µs   p(95)=216.04µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=1.17s    min=552.71ms med=1.16s   max=2.34s   p(90)=1.42s    p(95)=1.51s   
     http_reqs......................: 115793  192.632911/s
     iteration_duration.............: avg=1.55s    min=572.35ms med=1.43s   max=5.32s   p(90)=2.26s    p(95)=2.55s   
     iterations.....................: 115793  192.632911/s
     vus............................: 76      min=76       max=300 
     vus_max........................: 300     min=300      max=300 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4cf00b77-002e-4726-a0e4-3e2ed5509000/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/abfc51a0-8962-4aeb-cd1c-43eba7ecda00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6445d044-bfdd-4313-55cc-6351c8d95a00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 335694     ✗ 0     
     data_received..................: 9.8 GB  16 MB/s
     data_sent......................: 133 MB  221 kB/s
     http_req_blocked...............: avg=218.68µs min=1.33µs   med=3.01µs   max=1.89s  p(90)=4.89µs  p(95)=5.89µs 
     http_req_connecting............: avg=95.18µs  min=0s       med=0s       max=1.86s  p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=1.11s    min=272.59ms med=919.86ms max=6.51s  p(90)=1.93s   p(95)=2.32s  
       { expected_response:true }...: avg=1.11s    min=272.59ms med=919.86ms max=6.51s  p(90)=1.93s   p(95)=2.32s  
     http_req_failed................: 0.00%   ✓ 0          ✗ 111898
     http_req_receiving.............: avg=287.97ms min=25.47µs  med=74.82µs  max=5.83s  p(90)=1.12s   p(95)=1.54s  
     http_req_sending...............: avg=12.98ms  min=7.34µs   med=13.68µs  max=5.02s  p(90)=33.75µs p(95)=675.4µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s     p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=811.04ms min=272.51ms med=749.05ms max=2.5s   p(90)=1.17s   p(95)=1.28s  
     http_reqs......................: 111898  186.069754/s
     iteration_duration.............: avg=1.6s     min=299.72ms med=1.33s    max=10.77s p(90)=2.97s   p(95)=3.53s  
     iterations.....................: 111898  186.069754/s
     vus............................: 21      min=21       max=300 
     vus_max........................: 300     min=300      max=300 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6e19b749-7a3b-4544-aac1-c128e426bd00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/36c3c3f2-35a2-44d0-49ec-996090b46400/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ad59bb63-e6a8-42c4-cc67-5e9287892700/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 195714     ✗ 0    
     data_received..................: 5.7 GB  9.5 MB/s
     data_sent......................: 77 MB   129 kB/s
     http_req_blocked...............: avg=20.17µs min=1.22µs  med=3.01µs  max=86.03ms  p(90)=4.78µs   p(95)=5.84µs  
     http_req_connecting............: avg=8.39µs  min=0s      med=0s      max=28.31ms  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=2.69s   min=1.21s   med=2.41s   max=5.38s    p(90)=4.38s    p(95)=4.61s   
       { expected_response:true }...: avg=2.69s   min=1.21s   med=2.41s   max=5.38s    p(90)=4.38s    p(95)=4.61s   
     http_req_failed................: 0.00%   ✓ 0          ✗ 65238
     http_req_receiving.............: avg=14.47ms min=26.91µs med=66.18µs max=1.33s    p(90)=850.03µs p(95)=67.51ms 
     http_req_sending...............: avg=1.53ms  min=6.92µs  med=13.78µs max=858.19ms p(90)=31.37µs  p(95)=150.65µs
     http_req_tls_handshaking.......: avg=0s      min=0s      med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=2.67s   min=1.21s   med=2.4s    max=5.38s    p(90)=4.36s    p(95)=4.59s   
     http_reqs......................: 65238   108.448931/s
     iteration_duration.............: avg=2.76s   min=1.22s   med=2.46s   max=5.59s    p(90)=4.47s    p(95)=4.73s   
     iterations.....................: 65238   108.448931/s
     vus............................: 92      min=92       max=300
     vus_max........................: 300     min=300      max=300
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c025ae26-3c1a-4474-fa26-707fb0fef600/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/bbeb7079-58b6-4a02-7026-75bed9b99d00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/34123fc0-beae-48aa-bda8-9317148e5000/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 185352     ✗ 0    
     data_received..................: 5.4 GB  9.0 MB/s
     data_sent......................: 73 MB   122 kB/s
     http_req_blocked...............: avg=124.01µs min=1.12µs  med=2.89µs  max=227.83ms p(90)=4.51µs   p(95)=5.44µs  
     http_req_connecting............: avg=99.56µs  min=0s      med=0s      max=35.58ms  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=2.85s    min=1.43s   med=2.52s   max=5.75s    p(90)=4.68s    p(95)=4.87s   
       { expected_response:true }...: avg=2.85s    min=1.43s   med=2.52s   max=5.75s    p(90)=4.68s    p(95)=4.87s   
     http_req_failed................: 0.00%   ✓ 0          ✗ 61784
     http_req_receiving.............: avg=14.26ms  min=27.13µs med=61.77µs max=1.46s    p(90)=647.53µs p(95)=62.1ms  
     http_req_sending...............: avg=1.37ms   min=7.31µs  med=13.38µs max=727.04ms p(90)=28.23µs  p(95)=137.38µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=2.83s    min=1.43s   med=2.51s   max=5.52s    p(90)=4.67s    p(95)=4.86s   
     http_reqs......................: 61784   102.505897/s
     iteration_duration.............: avg=2.92s    min=1.44s   med=2.57s   max=5.81s    p(90)=4.77s    p(95)=5s      
     iterations.....................: 61784   102.505897/s
     vus............................: 168     min=168      max=300
     vus_max........................: 300     min=300      max=300
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b1433da0-9d6d-4004-dd8a-2f52ae3cfd00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/dcd1aa3a-201f-40d1-3a35-cd4f8b7ac400/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8a832104-204e-4d2f-0d60-23e4e2397200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 179397    ✗ 0    
     data_received..................: 5.2 GB  8.7 MB/s
     data_sent......................: 71 MB   118 kB/s
     http_req_blocked...............: avg=115.39µs min=1.51µs  med=3.6µs   max=81.47ms  p(90)=5.35µs p(95)=6.24µs  
     http_req_connecting............: avg=99.37µs  min=0s      med=0s      max=60.84ms  p(90)=0s     p(95)=0s      
     http_req_duration..............: avg=2.95s    min=1.55s   med=2.94s   max=6.6s     p(90)=3.49s  p(95)=3.63s   
       { expected_response:true }...: avg=2.95s    min=1.55s   med=2.94s   max=6.6s     p(90)=3.49s  p(95)=3.63s   
     http_req_failed................: 0.00%   ✓ 0         ✗ 59799
     http_req_receiving.............: avg=6.87ms   min=33.37µs med=71.45µs max=862.3ms  p(90)=2.22ms p(95)=16.69ms 
     http_req_sending...............: avg=1.02ms   min=8.09µs  med=16.44µs max=577.32ms p(90)=33.1µs p(95)=121.47µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s       p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=2.94s    min=1.55s   med=2.93s   max=6.58s    p(90)=3.48s  p(95)=3.62s   
     http_reqs......................: 59799   99.316188/s
     iteration_duration.............: avg=3.01s    min=1.56s   med=3s      max=6.65s    p(90)=3.57s  p(95)=3.72s   
     iterations.....................: 59799   99.316188/s
     vus............................: 57      min=57      max=300
     vus_max........................: 300     min=300     max=300
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e8a8490b-a138-4108-ca6b-9820d32ded00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b1a5b629-c6f8-4ee6-7fdc-e1d8960b6000/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/dbf0fda7-1ff5-459c-90a0-87e785eb1500/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 170301   ✗ 0    
     data_received..................: 5.0 GB  8.3 MB/s
     data_sent......................: 67 MB   112 kB/s
     http_req_blocked...............: avg=60.14µs  min=1.41µs  med=3.57µs  max=110.53ms p(90)=5.33µs  p(95)=6.2µs   
     http_req_connecting............: avg=36.96µs  min=0s      med=0s      max=22.01ms  p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=3.11s    min=1.55s   med=3.12s   max=7.31s    p(90)=3.69s   p(95)=3.84s   
       { expected_response:true }...: avg=3.11s    min=1.55s   med=3.12s   max=7.31s    p(90)=3.69s   p(95)=3.84s   
     http_req_failed................: 0.00%   ✓ 0        ✗ 56767
     http_req_receiving.............: avg=6.64ms   min=33.61µs med=73.17µs max=814.46ms p(90)=2.69ms  p(95)=18.62ms 
     http_req_sending...............: avg=936.38µs min=8µs     med=16.24µs max=718.51ms p(90)=31.55µs p(95)=118.28µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=3.1s     min=1.53s   med=3.12s   max=7.31s    p(90)=3.69s   p(95)=3.82s   
     http_reqs......................: 56767   94.30465/s
     iteration_duration.............: avg=3.17s    min=1.6s    med=3.18s   max=7.33s    p(90)=3.77s   p(95)=3.94s   
     iterations.....................: 56767   94.30465/s
     vus............................: 17      min=17     max=300
     vus_max........................: 300     min=300    max=300
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/cdcd23f0-2c95-4e7d-aa90-e1598173ba00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4792493b-ffa3-4af8-c25e-1fd6cd66f800/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/86268e69-b024-4679-5041-26ad0a90a400/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  99% — ✓ 38170 / ✗ 96
     ✗ no graphql errors
      ↳  99% — ✓ 38170 / ✗ 96
     ✓ valid response structure

     checks.........................: 99.83% ✓ 114510    ✗ 192  
     data_received..................: 3.4 GB 5.6 MB/s
     data_sent......................: 45 MB  75 kB/s
     http_req_blocked...............: avg=51.42µs  min=1.34µs   med=3.36µs  max=58.34ms  p(90)=5.23µs   p(95)=6.12µs  
     http_req_connecting............: avg=40.78µs  min=0s       med=0s      max=18.32ms  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=4.7s     min=781.08ms med=4.43s   max=1m0s     p(90)=5.69s    p(95)=6.11s   
       { expected_response:true }...: avg=4.56s    min=781.08ms med=4.43s   max=59.07s   p(90)=5.67s    p(95)=6.08s   
     http_req_failed................: 0.25%  ✓ 96        ✗ 38170
     http_req_receiving.............: avg=517.72µs min=0s       med=92.1µs  max=544.66ms p(90)=149.38µs p(95)=419.68µs
     http_req_sending...............: avg=108.61µs min=7.59µs   med=17.37µs max=264.93ms p(90)=31.66µs  p(95)=41.37µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=4.7s     min=780.39ms med=4.43s   max=1m0s     p(90)=5.69s    p(95)=6.11s   
     http_reqs......................: 38266  63.465899/s
     iteration_duration.............: avg=4.71s    min=795ms    med=4.45s   max=1m0s     p(90)=5.71s    p(95)=6.13s   
     iterations.....................: 38266  63.465899/s
     vus............................: 4      min=4       max=300
     vus_max........................: 300    min=300     max=300
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/988f6a31-35d4-4d30-f6c6-c1689c9b8700/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4e1ad7b9-dd5e-4afc-3058-18541f197e00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1bd78c71-472d-4f05-ee0c-4fe1d44b8b00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 23619     ✗ 0    
     data_received..................: 691 MB  1.1 MB/s
     data_sent......................: 9.3 MB  15 kB/s
     http_req_blocked...............: avg=189.08µs min=1.52µs  med=3.99µs   max=33.91ms p(90)=5.48µs   p(95)=6.71µs  
     http_req_connecting............: avg=178.45µs min=0s      med=0s       max=27.14ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=23.29s   min=7.04s   med=23.71s   max=26.33s  p(90)=24.01s   p(95)=24.16s  
       { expected_response:true }...: avg=23.29s   min=7.04s   med=23.71s   max=26.33s  p(90)=24.01s   p(95)=24.16s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 7873 
     http_req_receiving.............: avg=128.51µs min=50.85µs med=115.05µs max=13.38ms p(90)=154.03µs p(95)=171.21µs
     http_req_sending...............: avg=80.16µs  min=9.08µs  med=23.58µs  max=3.53ms  p(90)=33.54µs  p(95)=43.66µs 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=23.29s   min=7.04s   med=23.71s   max=26.33s  p(90)=24.01s   p(95)=24.16s  
     http_reqs......................: 7873    12.638815/s
     iteration_duration.............: avg=23.3s    min=7.05s   med=23.72s   max=26.34s  p(90)=24.02s   p(95)=24.17s  
     iterations.....................: 7873    12.638815/s
     vus............................: 2       min=2       max=300
     vus_max........................: 300     min=300     max=300
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/34b5c0f9-229f-4708-6e22-f9f7a2f84700/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e6858cd2-7fef-49b9-322b-8cf85cadee00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/52c7a33f-e6b6-40d9-0304-73840ddcbc00/public" alt="HTTP Overview" />


  </details>