## Overview for: `federation-v1/constant-vus-subgraphs-delay`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. It's being executed with a constant amount of VUs over a fixed amount of time. It measure things like memory usage, CPU usage, average RPS. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was running 300 VUs over 600s


### Comparison


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/56ff4108-853c-4267-a27d-ce34cd0e0800/public" alt="Comparison" />


| Gateway             | RPS ⬇️ |        Requests        |          Duration          | Notes                                                                    |
| :------------------ | :----: | :--------------------: | :------------------------: | :----------------------------------------------------------------------- |
| wundergraph         |  192   | 115613 total, 0 failed |  avg: 1314ms, p95: 2022ms  | ✅                                                                        |
| apollo-router       |  184   | 110981 total, 0 failed |  avg: 1117ms, p95: 2314ms  | ✅                                                                        |
| mesh-supergraph-bun |  110   | 66654 total, 0 failed  |  avg: 2634ms, p95: 4461ms  | ✅                                                                        |
| mesh-bun            |  101   | 61093 total, 0 failed  |  avg: 2877ms, p95: 4882ms  | ✅                                                                        |
| mesh-supergraph     |   97   | 58920 total, 0 failed  |  avg: 2995ms, p95: 3708ms  | ✅                                                                        |
| mesh                |   90   | 54411 total, 0 failed  |  avg: 3256ms, p95: 3856ms  | ✅                                                                        |
| apollo-server       |   63   | 38446 total, 89 failed |  avg: 4682ms, p95: 6024ms  | ❌ 89 failed requests, 89 non-200 responses, 89 unexpected GraphQL errors |
| mercurius           |   12   |  7849 total, 0 failed  | avg: 23362ms, p95: 24478ms | ✅                                                                        |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 346839    ✗ 0     
     data_received..................: 10 GB   17 MB/s
     data_sent......................: 137 MB  228 kB/s
     http_req_blocked...............: avg=84.59µs  min=1.23µs   med=2.95µs  max=591.82ms p(90)=4.43µs   p(95)=5.29µs  
     http_req_connecting............: avg=13.22µs  min=0s       med=0s      max=22.09ms  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=1.31s    min=572.78ms med=1.25s   max=3.95s    p(90)=1.74s    p(95)=2.02s   
       { expected_response:true }...: avg=1.31s    min=572.78ms med=1.25s   max=3.95s    p(90)=1.74s    p(95)=2.02s   
     http_req_failed................: 0.00%   ✓ 0         ✗ 115613
     http_req_receiving.............: avg=129.55ms min=24.47µs  med=77.7µs  max=2.76s    p(90)=495.99ms p(95)=845.96ms
     http_req_sending...............: avg=7.16ms   min=6.94µs   med=13.43µs max=2.17s    p(90)=28.41µs  p(95)=148.46µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=1.17s    min=516.67ms med=1.16s   max=2.44s    p(90)=1.43s    p(95)=1.51s   
     http_reqs......................: 115613  192.24172/s
     iteration_duration.............: avg=1.55s    min=583.7ms  med=1.44s   max=5.57s    p(90)=2.25s    p(95)=2.52s   
     iterations.....................: 115613  192.24172/s
     vus............................: 39      min=39      max=300 
     vus_max........................: 300     min=300     max=300 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d18e1814-32b2-45fd-619d-6883252b2c00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b8d9e723-b634-4f57-34f1-958802d96000/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0f6c5cdf-ecf3-478d-85e4-234c8c7a0500/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 332943     ✗ 0     
     data_received..................: 9.7 GB  16 MB/s
     data_sent......................: 132 MB  219 kB/s
     http_req_blocked...............: avg=334.53µs min=1.36µs   med=3.18µs   max=2.27s p(90)=5.15µs  p(95)=6.11µs  
     http_req_connecting............: avg=141.55µs min=0s       med=0s       max=1.65s p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=1.11s    min=249.54ms med=958ms    max=6.32s p(90)=1.89s   p(95)=2.31s   
       { expected_response:true }...: avg=1.11s    min=249.54ms med=958ms    max=6.32s p(90)=1.89s   p(95)=2.31s   
     http_req_failed................: 0.00%   ✓ 0          ✗ 110981
     http_req_receiving.............: avg=254.27ms min=25.06µs  med=74.58µs  max=5.49s p(90)=1.04s   p(95)=1.48s   
     http_req_sending...............: avg=11.44ms  min=7.24µs   med=14.14µs  max=3.31s p(90)=33.26µs p(95)=150.79µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s    p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=851.29ms min=249.46ms med=785.52ms max=2.92s p(90)=1.24s   p(95)=1.35s   
     http_reqs......................: 110981  184.655136/s
     iteration_duration.............: avg=1.62s    min=260.33ms med=1.38s    max=8.83s p(90)=2.95s   p(95)=3.47s   
     iterations.....................: 110981  184.655136/s
     vus............................: 33      min=33       max=300 
     vus_max........................: 300     min=300      max=300 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4ba07a2a-f1b6-43e6-be89-7303fac7c900/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b2ef760b-4518-4eda-4097-10811205c800/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/cb15e78d-c787-462d-8b16-e635236e0300/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 199962     ✗ 0    
     data_received..................: 5.8 GB  9.7 MB/s
     data_sent......................: 79 MB   131 kB/s
     http_req_blocked...............: avg=75µs    min=1.32µs  med=3.06µs  max=208.44ms p(90)=4.89µs  p(95)=5.89µs  
     http_req_connecting............: avg=49.36µs min=0s      med=0s      max=28.03ms  p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=2.63s   min=1.14s   med=2.33s   max=5.51s    p(90)=4.25s   p(95)=4.46s   
       { expected_response:true }...: avg=2.63s   min=1.14s   med=2.33s   max=5.51s    p(90)=4.25s   p(95)=4.46s   
     http_req_failed................: 0.00%   ✓ 0          ✗ 66654
     http_req_receiving.............: avg=18.22ms min=29.57µs med=65.58µs max=1.46s    p(90)=2.53ms  p(95)=104.37ms
     http_req_sending...............: avg=1.51ms  min=7.53µs  med=13.76µs max=802.77ms p(90)=31.14µs p(95)=138.01µs
     http_req_tls_handshaking.......: avg=0s      min=0s      med=0s      max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=2.61s   min=1.14s   med=2.32s   max=5.26s    p(90)=4.23s   p(95)=4.44s   
     http_reqs......................: 66654   110.691438/s
     iteration_duration.............: avg=2.7s    min=1.15s   med=2.39s   max=5.91s    p(90)=4.34s   p(95)=4.59s   
     iterations.....................: 66654   110.691438/s
     vus............................: 91      min=91       max=300
     vus_max........................: 300     min=300      max=300
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f3e5d5d7-83fd-4c37-29cc-5eb76abf3700/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8f998302-912b-4cd3-6f7b-772e06aac300/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9fd2022b-dad7-4f52-c8b3-f73f3731c400/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 183279    ✗ 0    
     data_received..................: 5.4 GB  8.9 MB/s
     data_sent......................: 73 MB   121 kB/s
     http_req_blocked...............: avg=54.82µs min=1.35µs med=2.98µs  max=332.91ms p(90)=4.73µs  p(95)=5.72µs  
     http_req_connecting............: avg=25.32µs min=0s     med=0s      max=39.01ms  p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=2.87s   min=1.28s  med=2.53s   max=5.9s     p(90)=4.68s   p(95)=4.88s   
       { expected_response:true }...: avg=2.87s   min=1.28s  med=2.53s   max=5.9s     p(90)=4.68s   p(95)=4.88s   
     http_req_failed................: 0.00%   ✓ 0         ✗ 61093
     http_req_receiving.............: avg=16.3ms  min=28.4µs med=64.19µs max=1.6s     p(90)=1.06ms  p(95)=81.72ms 
     http_req_sending...............: avg=1.76ms  min=7.73µs med=13.61µs max=984.42ms p(90)=32.07µs p(95)=167.72µs
     http_req_tls_handshaking.......: avg=0s      min=0s     med=0s      max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=2.85s   min=1.28s  med=2.51s   max=5.65s    p(90)=4.67s   p(95)=4.86s   
     http_reqs......................: 61093   101.53664/s
     iteration_duration.............: avg=2.95s   min=1.3s   med=2.58s   max=6.23s    p(90)=4.79s   p(95)=5.03s   
     iterations.....................: 61093   101.53664/s
     vus............................: 95      min=95      max=300
     vus_max........................: 300     min=300     max=300
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/94106302-6be2-4596-863d-95064fecfb00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b1046d7d-270c-4b9d-73ef-dd7ddd7cb900/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/61ce8255-2f6a-4e70-34fb-e184d8a30b00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 176760   ✗ 0    
     data_received..................: 5.2 GB  8.6 MB/s
     data_sent......................: 70 MB   116 kB/s
     http_req_blocked...............: avg=42.81µs  min=1.35µs  med=4.04µs  max=165.2ms  p(90)=6.19µs  p(95)=7.03µs  
     http_req_connecting............: avg=17.63µs  min=0s      med=0s      max=32.91ms  p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=2.99s    min=1.07s   med=2.97s   max=6.65s    p(90)=3.55s   p(95)=3.7s    
       { expected_response:true }...: avg=2.99s    min=1.07s   med=2.97s   max=6.65s    p(90)=3.55s   p(95)=3.7s    
     http_req_failed................: 0.00%   ✓ 0        ✗ 58920
     http_req_receiving.............: avg=7.59ms   min=33.66µs med=79.82µs max=699.86ms p(90)=2.79ms  p(95)=20.85ms 
     http_req_sending...............: avg=915.76µs min=7.5µs   med=20.45µs max=525.71ms p(90)=37.83µs p(95)=108.98µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=2.98s    min=1.07s   med=2.96s   max=6.65s    p(90)=3.54s   p(95)=3.69s   
     http_reqs......................: 58920   97.85545/s
     iteration_duration.............: avg=3.06s    min=1.13s   med=3.04s   max=6.69s    p(90)=3.63s   p(95)=3.8s    
     iterations.....................: 58920   97.85545/s
     vus............................: 83      min=83     max=300
     vus_max........................: 300     min=300    max=300
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/267ff00a-b099-443e-5d16-464292683600/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a8a35012-3130-4501-4885-ab815b6e0a00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/06b40516-8dbd-4e0c-2aa9-a7f5ded2ee00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 163233    ✗ 0    
     data_received..................: 4.8 GB  7.9 MB/s
     data_sent......................: 65 MB   107 kB/s
     http_req_blocked...............: avg=90.3µs  min=1.61µs  med=4.31µs  max=107.08ms p(90)=6.31µs  p(95)=7.18µs  
     http_req_connecting............: avg=67.54µs min=0s      med=0s      max=33.42ms  p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=3.25s   min=1.77s   med=3.22s   max=7.63s    p(90)=3.69s   p(95)=3.85s   
       { expected_response:true }...: avg=3.25s   min=1.77s   med=3.22s   max=7.63s    p(90)=3.69s   p(95)=3.85s   
     http_req_failed................: 0.00%   ✓ 0         ✗ 54411
     http_req_receiving.............: avg=6.51ms  min=33.04µs med=82.87µs max=946.11ms p(90)=2.8ms   p(95)=17.23ms 
     http_req_sending...............: avg=773.7µs min=8.14µs  med=20.27µs max=482.76ms p(90)=36.78µs p(95)=122.25µs
     http_req_tls_handshaking.......: avg=0s      min=0s      med=0s      max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=3.24s   min=1.74s   med=3.22s   max=7.63s    p(90)=3.68s   p(95)=3.84s   
     http_reqs......................: 54411   90.359523/s
     iteration_duration.............: avg=3.31s   min=1.96s   med=3.28s   max=7.66s    p(90)=3.77s   p(95)=3.94s   
     iterations.....................: 54411   90.359523/s
     vus............................: 93      min=93      max=300
     vus_max........................: 300     min=300     max=300
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1626a572-866a-46f2-8c0b-d91748196700/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/05abbded-1e51-43e7-4c92-edd7a903b000/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/21a4a1bd-535b-4f91-e79e-3e6dcb00d900/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  99% — ✓ 38357 / ✗ 89
     ✗ no graphql errors
      ↳  99% — ✓ 38357 / ✗ 89
     ✓ valid response structure

     checks.........................: 99.84% ✓ 115071    ✗ 178  
     data_received..................: 3.4 GB 5.6 MB/s
     data_sent......................: 46 MB  76 kB/s
     http_req_blocked...............: avg=32.72µs  min=1.34µs   med=3.23µs  max=30.26ms  p(90)=4.95µs   p(95)=5.83µs  
     http_req_connecting............: avg=24.12µs  min=0s       med=0s      max=23.53ms  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=4.68s    min=660.77ms med=4.44s   max=1m0s     p(90)=5.64s    p(95)=6.02s   
       { expected_response:true }...: avg=4.55s    min=660.77ms med=4.44s   max=59.99s   p(90)=5.63s    p(95)=6s      
     http_req_failed................: 0.23%  ✓ 89        ✗ 38357
     http_req_receiving.............: avg=623.52µs min=0s       med=91.05µs max=296.1ms  p(90)=150.51µs p(95)=483.16µs
     http_req_sending...............: avg=74.21µs  min=7.75µs   med=15.97µs max=105.54ms p(90)=29.7µs   p(95)=38.22µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=4.68s    min=660.63ms med=4.44s   max=1m0s     p(90)=5.64s    p(95)=6.02s   
     http_reqs......................: 38446  63.733889/s
     iteration_duration.............: avg=4.69s    min=671.52ms med=4.46s   max=1m0s     p(90)=5.66s    p(95)=6.04s   
     iterations.....................: 38446  63.733889/s
     vus............................: 37     min=37      max=300
     vus_max........................: 300    min=300     max=300
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/bafdb84d-e3c3-4bd6-fe68-38916aeb9700/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0f37b2ff-5b40-405f-124d-0491ee192700/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5a3d8538-43ab-4d1a-bed5-6aa3bf8b7f00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 23547     ✗ 0    
     data_received..................: 689 MB  1.1 MB/s
     data_sent......................: 9.3 MB  15 kB/s
     http_req_blocked...............: avg=465.11µs min=1.44µs  med=3.47µs   max=53.55ms p(90)=5.09µs   p(95)=6.25µs  
     http_req_connecting............: avg=442.54µs min=0s      med=0s       max=24.87ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=23.36s   min=7.09s   med=23.69s   max=26.32s  p(90)=24.2s    p(95)=24.47s  
       { expected_response:true }...: avg=23.36s   min=7.09s   med=23.69s   max=26.32s  p(90)=24.2s    p(95)=24.47s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 7849 
     http_req_receiving.............: avg=131.76µs min=43.94µs med=104.39µs max=56.22ms p(90)=141.39µs p(95)=158.52µs
     http_req_sending...............: avg=62.41µs  min=8.05µs  med=19.91µs  max=17.49ms p(90)=29.18µs  p(95)=36µs    
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=23.36s   min=7.09s   med=23.69s   max=26.32s  p(90)=24.2s    p(95)=24.47s  
     http_reqs......................: 7849    12.603663/s
     iteration_duration.............: avg=23.36s   min=7.1s    med=23.7s    max=26.33s  p(90)=24.21s   p(95)=24.48s  
     iterations.....................: 7849    12.603663/s
     vus............................: 16      min=16      max=300
     vus_max........................: 300     min=300     max=300
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/52ecf524-5dc6-45dc-4f53-ee9f936bb000/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0d482319-cbae-4217-b45e-a793dbf8eb00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/35a59607-b7e9-4f17-2760-6dd184e89f00/public" alt="HTTP Overview" />


  </details>