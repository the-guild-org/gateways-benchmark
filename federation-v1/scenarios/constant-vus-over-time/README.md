## Overview for: `federation-v1/constant-vus-over-time`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. It's being executed with a constant amount of VUs over a fixed amount of time. It measure things like memory usage, CPU usage, average RPS. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was running 300 VUs over 600s


### Comparison


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6f6e860b-a6ce-4271-c7a9-36520e8ac300/public" alt="Comparison" />


| Gateway              | RPS ⬇️ |         Requests         |         Duration         | Notes                                                                          |
| :------------------- | :----: | :----------------------: | :----------------------: | :----------------------------------------------------------------------------- |
| mesh-supergraph-bun  |  186   |  112138 total, 0 failed  | avg: 1223ms, p95: 2383ms | ✅                                                                              |
| apollo-router        |  173   |  104091 total, 0 failed  | avg: 936ms, p95: 2573ms  | ✅                                                                              |
| wundergraph          |  162   |  97929 total, 0 failed   | avg: 942ms, p95: 2578ms  | ✅                                                                              |
| mesh-supergraph      |   95   |  57778 total, 0 failed   | avg: 3054ms, p95: 3885ms | ✅                                                                              |
| apollo-server        |   63   | 38135 total, 1090 failed | avg: 4716ms, p95: 3476ms | ❌ 1090 failed requests, 1090 non-200 responses, 1090 unexpected GraphQL errors |
| apollo-server-node16 |   62   |  37626 total, 0 failed   | avg: 4783ms, p95: 6743ms | ✅                                                                              |
| mercurius            |   49   |  29620 total, 0 failed   | avg: 6076ms, p95: 6312ms | ✅                                                                              |



<details>
  <summary>Summary for: `mesh-supergraph-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 336414    ✗ 0     
     data_received..................: 9.8 GB  16 MB/s
     data_sent......................: 133 MB  221 kB/s
     http_req_blocked...............: avg=145.87µs min=1.29µs  med=3.06µs   max=1.98s p(90)=4.83µs   p(95)=5.77µs
     http_req_connecting............: avg=62.33µs  min=0s      med=0s       max=1.23s p(90)=0s       p(95)=0s    
     http_req_duration..............: avg=1.22s    min=16.49ms med=1.12s    max=6.19s p(90)=2.04s    p(95)=2.38s 
       { expected_response:true }...: avg=1.22s    min=16.49ms med=1.12s    max=6.19s p(90)=2.04s    p(95)=2.38s 
     http_req_failed................: 0.00%   ✓ 0         ✗ 112138
     http_req_receiving.............: avg=210.11ms min=26.77µs med=70µs     max=5.65s p(90)=908.89ms p(95)=1.32s 
     http_req_sending...............: avg=11.49ms  min=7.72µs  med=13.8µs   max=4.41s p(90)=34.57µs  p(95)=4.53ms
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s    p(90)=0s       p(95)=0s    
     http_req_waiting...............: avg=1s       min=16.41ms med=950.95ms max=2.78s p(90)=1.6s     p(95)=1.84s 
     http_reqs......................: 112138  186.53083/s
     iteration_duration.............: avg=1.6s     min=26.17ms med=1.44s    max=10.5s p(90)=2.74s    p(95)=3.26s 
     iterations.....................: 112138  186.53083/s
     vus............................: 94      min=94      max=300 
     vus_max........................: 300     min=300     max=300 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/33260de8-f36e-4d4d-63f3-9fbf7cac4e00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/bb3f06ef-37f3-4b6a-3dd2-393af964f700/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7220a2cc-aee2-4e67-2c2b-b4e2e6e34d00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 312273     ✗ 0     
     data_received..................: 9.1 GB  15 MB/s
     data_sent......................: 124 MB  206 kB/s
     http_req_blocked...............: avg=1.05ms   min=1.36µs  med=3.26µs   max=3.57s  p(90)=5.2µs    p(95)=6.27µs
     http_req_connecting............: avg=805.69µs min=0s      med=0s       max=3.57s  p(90)=0s       p(95)=0s    
     http_req_duration..............: avg=935.78ms min=8.93ms  med=720.09ms max=13.2s  p(90)=2.01s    p(95)=2.57s 
       { expected_response:true }...: avg=935.78ms min=8.93ms  med=720.09ms max=13.2s  p(90)=2.01s    p(95)=2.57s 
     http_req_failed................: 0.00%   ✓ 0          ✗ 104091
     http_req_receiving.............: avg=360.79ms min=27.73µs med=77.89µs  max=8.91s  p(90)=1.38s    p(95)=1.99s 
     http_req_sending...............: avg=22.15ms  min=8.14µs  med=14.78µs  max=7.74s  p(90)=40.6µs   p(95)=8.66ms
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s     p(90)=0s       p(95)=0s    
     http_req_waiting...............: avg=552.83ms min=8.75ms  med=516.35ms max=3.88s  p(90)=998.45ms p(95)=1.16s 
     http_reqs......................: 104091  173.285291/s
     iteration_duration.............: avg=1.71s    min=20.37ms med=1.34s    max=14.84s p(90)=3.7s     p(95)=4.52s 
     iterations.....................: 104091  173.285291/s
     vus............................: 202     min=202      max=300 
     vus_max........................: 300     min=300      max=300 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/893d9533-5a41-42d4-e218-25d6b0b95c00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d86d2f5e-6f65-49ab-05a8-7c090d418d00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6c8510e7-4a28-4898-459d-56af85c65d00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 293787     ✗ 0    
     data_received..................: 8.6 GB  14 MB/s
     data_sent......................: 116 MB  193 kB/s
     http_req_blocked...............: avg=2.36ms   min=1.43µs  med=3.28µs   max=4.86s  p(90)=4.82µs  p(95)=5.91µs 
     http_req_connecting............: avg=1.96ms   min=0s      med=0s       max=4.86s  p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=941.63ms min=9.27ms  med=735.18ms max=8.32s  p(90)=2.06s   p(95)=2.57s  
       { expected_response:true }...: avg=941.63ms min=9.27ms  med=735.18ms max=8.32s  p(90)=2.06s   p(95)=2.57s  
     http_req_failed................: 0.00%   ✓ 0          ✗ 97929
     http_req_receiving.............: avg=370.31ms min=26.85µs med=81.34µs  max=8.17s  p(90)=1.43s   p(95)=2.06s  
     http_req_sending...............: avg=22.21ms  min=7.89µs  med=14.74µs  max=5.24s  p(90)=52.26µs p(95)=13.01ms
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s     p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=549.11ms min=9.19ms  med=508.33ms max=3.29s  p(90)=1.01s   p(95)=1.19s  
     http_reqs......................: 97929   162.957934/s
     iteration_duration.............: avg=1.82s    min=22.13ms med=1.51s    max=12.89s p(90)=3.79s   p(95)=4.66s  
     iterations.....................: 97929   162.957934/s
     vus............................: 1       min=1        max=300
     vus_max........................: 300     min=300      max=300
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d3d2f2f7-ac09-4659-9902-4449f0667a00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d448eee8-70fb-4b2f-b82f-c486c8a0f500/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/493c8d00-1562-44c9-7227-f2f07f87c600/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 173334    ✗ 0    
     data_received..................: 5.1 GB  8.4 MB/s
     data_sent......................: 69 MB   114 kB/s
     http_req_blocked...............: avg=45.09µs min=1.21µs  med=3.82µs  max=138.23ms p(90)=5.95µs p(95)=6.92µs 
     http_req_connecting............: avg=16.99µs min=0s      med=0s      max=32.82ms  p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=3.05s   min=1.27s   med=3.03s   max=7.52s    p(90)=3.69s  p(95)=3.88s  
       { expected_response:true }...: avg=3.05s   min=1.27s   med=3.03s   max=7.52s    p(90)=3.69s  p(95)=3.88s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 57778
     http_req_receiving.............: avg=8.44ms  min=33.12µs med=81.23µs max=790.87ms p(90)=4.92ms p(95)=26.73ms
     http_req_sending...............: avg=1.08ms  min=7.56µs  med=17.72µs max=870.04ms p(90)=36.2µs p(95)=119.1µs
     http_req_tls_handshaking.......: avg=0s      min=0s      med=0s      max=0s       p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=3.04s   min=1.27s   med=3.03s   max=7.52s    p(90)=3.68s  p(95)=3.87s  
     http_reqs......................: 57778   95.940034/s
     iteration_duration.............: avg=3.12s   min=1.28s   med=3.1s    max=7.54s    p(90)=3.78s  p(95)=3.98s  
     iterations.....................: 57778   95.940034/s
     vus............................: 110     min=110     max=300
     vus_max........................: 300     min=300     max=300
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0fc37aeb-4c2b-43d3-6346-401c77673800/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5d655018-d62d-4a67-71f0-70d498fc7500/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/077f8749-ddbf-4f3b-e418-1e07ec94f300/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  97% — ✓ 37045 / ✗ 1090
     ✗ no graphql errors
      ↳  97% — ✓ 37045 / ✗ 1090
     ✓ valid response structure

     checks.........................: 98.07% ✓ 111135   ✗ 2180 
     data_received..................: 3.3 GB 5.4 MB/s
     data_sent......................: 45 MB  75 kB/s
     http_req_blocked...............: avg=135.26µs min=1.33µs   med=2.82µs   max=115.33ms p(90)=4.76µs   p(95)=7.32µs  
     http_req_connecting............: avg=124.27µs min=0s       med=0s       max=115.18ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=4.71s    min=251.85ms med=3.08s    max=1m0s     p(90)=3.27s    p(95)=3.47s   
       { expected_response:true }...: avg=3.08s    min=251.85ms med=3.07s    max=59.31s   p(90)=3.23s    p(95)=3.32s   
     http_req_failed................: 2.85%  ✓ 1090     ✗ 37045
     http_req_receiving.............: avg=213.6µs  min=0s       med=120.56µs max=110.71ms p(90)=183.96µs p(95)=214.61µs
     http_req_sending...............: avg=78.44µs  min=8.07µs   med=14.09µs  max=125.44ms p(90)=28.32µs  p(95)=39.16µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=4.71s    min=251.72ms med=3.08s    max=1m0s     p(90)=3.27s    p(95)=3.47s   
     http_reqs......................: 38135  63.30551/s
     iteration_duration.............: avg=4.72s    min=262.43ms med=3.09s    max=1m0s     p(90)=3.28s    p(95)=3.48s   
     iterations.....................: 38135  63.30551/s
     vus............................: 65     min=65     max=300
     vus_max........................: 300    min=300    max=300
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f8a23e0c-1748-4f8e-c19d-cd9d95f8f800/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2054cf58-f2d8-41dd-f3e4-d7003b800000/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/76b21578-da5b-44bf-17dc-191fbcaaf100/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server-node16`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 112878   ✗ 0    
     data_received..................: 3.3 GB  5.5 MB/s
     data_sent......................: 45 MB   74 kB/s
     http_req_blocked...............: avg=37.44µs  min=1.35µs   med=3.03µs   max=37.86ms  p(90)=4.88µs   p(95)=5.74µs  
     http_req_connecting............: avg=28.65µs  min=0s       med=0s       max=28.81ms  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=4.78s    min=498.29ms med=4.53s    max=11.62s   p(90)=6.27s    p(95)=6.74s   
       { expected_response:true }...: avg=4.78s    min=498.29ms med=4.53s    max=11.62s   p(90)=6.27s    p(95)=6.74s   
     http_req_failed................: 0.00%   ✓ 0        ✗ 37626
     http_req_receiving.............: avg=1.27ms   min=37.86µs  med=111.64µs max=440.51ms p(90)=206.28µs p(95)=585.65µs
     http_req_sending...............: avg=124.17µs min=8.4µs    med=14.85µs  max=141.5ms  p(90)=30.58µs  p(95)=44.63µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=4.78s    min=498.18ms med=4.53s    max=11.62s   p(90)=6.27s    p(95)=6.74s   
     http_reqs......................: 37626   62.36946/s
     iteration_duration.............: avg=4.8s     min=505.86ms med=4.55s    max=11.63s   p(90)=6.3s     p(95)=6.76s   
     iterations.....................: 37626   62.36946/s
     vus............................: 75      min=75     max=300
     vus_max........................: 300     min=300    max=300
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/162e7a4f-7152-46d1-639e-953ef9146800/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/27c482e1-a7dc-4b8c-e55c-612922f75400/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/197b908b-97fc-4d9c-8378-c0af86760400/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 88860     ✗ 0    
     data_received..................: 2.6 GB  4.3 MB/s
     data_sent......................: 35 MB   58 kB/s
     http_req_blocked...............: avg=78.37µs  min=1.53µs   med=3.77µs   max=28.37ms p(90)=5.15µs   p(95)=5.77µs  
     http_req_connecting............: avg=67.72µs  min=0s       med=0s       max=26.56ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=6.07s    min=342.33ms med=6.13s    max=13.39s  p(90)=6.25s    p(95)=6.31s   
       { expected_response:true }...: avg=6.07s    min=342.33ms med=6.13s    max=13.39s  p(90)=6.25s    p(95)=6.31s   
     http_req_failed................: 0.00%   ✓ 0         ✗ 29620
     http_req_receiving.............: avg=196.64µs min=40.07µs  med=120.58µs max=84.85ms p(90)=169.03µs p(95)=191.59µs
     http_req_sending...............: avg=39.76µs  min=8.46µs   med=20.75µs  max=50.57ms p(90)=32.97µs  p(95)=37.86µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=6.07s    min=341.33ms med=6.13s    max=13.39s  p(90)=6.25s    p(95)=6.31s   
     http_reqs......................: 29620   49.211146/s
     iteration_duration.............: avg=6.08s    min=368.14ms med=6.14s    max=13.41s  p(90)=6.26s    p(95)=6.32s   
     iterations.....................: 29620   49.211146/s
     vus............................: 166     min=166     max=300
     vus_max........................: 300     min=300     max=300
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c47ec760-cef4-4f12-e428-8719d9a84400/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/cd17d56d-b751-465c-6bfb-b6b0fb45c700/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/295dfc30-0437-4686-4cdb-8424f5b7c100/public" alt="HTTP Overview" />


  </details>