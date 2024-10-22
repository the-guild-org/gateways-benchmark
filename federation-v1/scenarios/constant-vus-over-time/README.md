## Overview for: `federation-v1/constant-vus-over-time`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. It's being executed with a constant amount of VUs over a fixed amount of time. It measure things like memory usage, CPU usage, average RPS. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was running 300 VUs over 90s


### Comparison


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/603a5393-7b5d-43e3-56fc-af9d30f67600/public" alt="Comparison" />


| Gateway       | RPS ⬇️ |        Requests         |         Duration         | Notes                                                                       |
| :------------ | :----: | :---------------------: | :----------------------: | :-------------------------------------------------------------------------- |
| cosmo         |  188   | 113452 total, 0 failed  | avg: 811ms, p95: 2272ms  | ✅                                                                           |
| apollo-router |  176   | 105861 total, 0 failed  | avg: 864ms, p95: 2377ms  | ✅                                                                           |
| wundergraph   |  160   |  96418 total, 0 failed  | avg: 901ms, p95: 2571ms  | ✅                                                                           |
| hive-gateway  |   97   |  58938 total, 0 failed  | avg: 3011ms, p95: 4092ms | ✅                                                                           |
| apollo-server |   79   | 48029 total, 201 failed | avg: 3744ms, p95: 5087ms | ❌ 201 failed requests, 201 non-200 responses, 201 unexpected GraphQL errors |
| mercurius     |   55   |  33637 total, 0 failed  | avg: 5349ms, p95: 5706ms | ✅                                                                           |



<details>
  <summary>Summary for: `cosmo`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     █ setup

     checks.........................: 100.00% ✓ 340296     ✗ 0     
     data_received..................: 10 GB   17 MB/s
     data_sent......................: 135 MB  224 kB/s
     http_req_blocked...............: avg=1.42ms   min=990ns   med=3.03µs   max=3.37s  p(90)=4.76µs   p(95)=5.7µs  
     http_req_connecting............: avg=1.12ms   min=0s      med=0s       max=3.37s  p(90)=0s       p(95)=0s     
     http_req_duration..............: avg=811.17ms min=3.69ms  med=639.32ms max=8.09s  p(90)=1.76s    p(95)=2.27s  
       { expected_response:true }...: avg=811.17ms min=3.69ms  med=639.32ms max=8.09s  p(90)=1.76s    p(95)=2.27s  
     http_req_failed................: 0.00%   ✓ 0          ✗ 113452
     http_req_receiving.............: avg=293.31ms min=30.33µs med=82.74µs  max=7.76s  p(90)=1.15s    p(95)=1.76s  
     http_req_sending...............: avg=24.97ms  min=7.59µs  med=14.08µs  max=6.84s  p(90)=39.72µs  p(95)=15.59ms
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s     p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=492.87ms min=3.62ms  med=465.68ms max=3.19s  p(90)=898.63ms p(95)=1.04s  
     http_reqs......................: 113452  188.799695/s
     iteration_duration.............: avg=1.57s    min=16.38ms med=1.24s    max=14.13s p(90)=3.34s    p(95)=4.13s  
     iterations.....................: 113432  188.766412/s
     vus............................: 300     min=300      max=300 
     vus_max........................: 300     min=300      max=300 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b4b72a0e-655f-4118-d52e-071d40873a00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8e46d573-6dd1-4546-c049-344180ed4c00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/94b80a63-e60e-44a9-d062-d41cdbde3000/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     █ setup

     checks.........................: 100.00% ✓ 317523     ✗ 0     
     data_received..................: 9.3 GB  16 MB/s
     data_sent......................: 126 MB  209 kB/s
     http_req_blocked...............: avg=983.82µs min=1.46µs  med=3.14µs   max=3.51s p(90)=4.72µs   p(95)=5.54µs 
     http_req_connecting............: avg=651.73µs min=0s      med=0s       max=2.88s p(90)=0s       p(95)=0s     
     http_req_duration..............: avg=863.54ms min=6.21ms  med=663.12ms max=7.13s p(90)=1.89s    p(95)=2.37s  
       { expected_response:true }...: avg=863.54ms min=6.21ms  med=663.12ms max=7.13s p(90)=1.89s    p(95)=2.37s  
     http_req_failed................: 0.00%   ✓ 0          ✗ 105861
     http_req_receiving.............: avg=340.01ms min=29.47µs med=79.63µs  max=6.23s p(90)=1.31s    p(95)=1.85s  
     http_req_sending...............: avg=25.67ms  min=7.51µs  med=14.43µs  max=4.54s p(90)=39.08µs  p(95)=12.66ms
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s    p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=497.85ms min=6.13ms  med=458.23ms max=3.53s p(90)=929.09ms p(95)=1.07s  
     http_reqs......................: 105861  176.132863/s
     iteration_duration.............: avg=1.68s    min=20.09ms med=1.36s    max=11.4s p(90)=3.6s     p(95)=4.4s   
     iterations.....................: 105841  176.099587/s
     vus............................: 30      min=30       max=300 
     vus_max........................: 300     min=300      max=300 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a640e300-5f8e-4e63-75db-5509e56a8400/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b4dae65c-207a-4ff2-9988-2f0e9c0d4000/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/72fb3fff-6294-4efe-69a6-25ebe1e8e500/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     █ setup

     checks.........................: 100.00% ✓ 289194     ✗ 0    
     data_received..................: 8.5 GB  14 MB/s
     data_sent......................: 114 MB  190 kB/s
     http_req_blocked...............: avg=2.12ms   min=1.5µs   med=3.36µs   max=5.94s  p(90)=5.09µs   p(95)=6µs   
     http_req_connecting............: avg=1.69ms   min=0s      med=0s       max=5.94s  p(90)=0s       p(95)=0s    
     http_req_duration..............: avg=900.7ms  min=6.04ms  med=685.64ms max=7.59s  p(90)=2.02s    p(95)=2.57s 
       { expected_response:true }...: avg=900.7ms  min=6.04ms  med=685.64ms max=7.59s  p(90)=2.02s    p(95)=2.57s 
     http_req_failed................: 0.00%   ✓ 0          ✗ 96418
     http_req_receiving.............: avg=378.22ms min=32.88µs med=92.88µs  max=7.21s  p(90)=1.45s    p(95)=2.04s 
     http_req_sending...............: avg=24.18ms  min=7.46µs  med=15.4µs   max=5.91s  p(90)=46.01µs  p(95)=7.36ms
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s     p(90)=0s       p(95)=0s    
     http_req_waiting...............: avg=498.29ms min=5.89ms  med=433.58ms max=3.09s  p(90)=964.61ms p(95)=1.13s 
     http_reqs......................: 96418   160.445677/s
     iteration_duration.............: avg=1.85s    min=23.1ms  med=1.51s    max=13.39s p(90)=3.92s    p(95)=4.81s 
     iterations.....................: 96398   160.412396/s
     vus............................: 300     min=300      max=300
     vus_max........................: 300     min=300      max=300
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ab984eb6-75f1-4165-e2df-bf85b856fa00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8776045b-a606-4484-4a69-c3af13507400/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a6673091-2ee4-4028-dc5d-3616f35dac00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `hive-gateway`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     █ setup

     checks.........................: 100.00% ✓ 176754    ✗ 0    
     data_received..................: 5.2 GB  8.6 MB/s
     data_sent......................: 70 MB   116 kB/s
     http_req_blocked...............: avg=45.63µs  min=1.38µs   med=3.76µs  max=131.97ms p(90)=5.47µs   p(95)=6.19µs  
     http_req_connecting............: avg=26.93µs  min=0s       med=0s      max=28.32ms  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=3.01s    min=12.28ms  med=2.88s   max=43.48s   p(90)=3.43s    p(95)=4.09s   
       { expected_response:true }...: avg=3.01s    min=12.28ms  med=2.88s   max=43.48s   p(90)=3.43s    p(95)=4.09s   
     http_req_failed................: 0.00%   ✓ 0         ✗ 58938
     http_req_receiving.............: avg=3.15ms   min=34.1µs   med=83.44µs max=834.54ms p(90)=592.15µs p(95)=6.31ms  
     http_req_sending...............: avg=643.23µs min=7.86µs   med=18.46µs max=431.44ms p(90)=37.69µs  p(95)=132.45µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=3s       min=12.17ms  med=2.88s   max=43.48s   p(90)=3.42s    p(95)=4.08s   
     http_reqs......................: 58938   97.808494/s
     iteration_duration.............: avg=3.06s    min=142.74ms med=2.93s   max=43.51s   p(90)=3.49s    p(95)=4.14s   
     iterations.....................: 58918   97.775303/s
     vus............................: 133     min=133     max=300
     vus_max........................: 300     min=300     max=300
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b418379e-e0c3-41d3-ddeb-63e23727a000/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6409df4c-73c9-43f9-f220-c7ff8b519b00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/db997e1f-c9cf-4d85-e9e8-28584495e900/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  99% — ✓ 47808 / ✗ 201
     ✗ no graphql errors
      ↳  99% — ✓ 47808 / ✗ 201
     ✓ valid response structure

     █ setup

     checks.........................: 99.72% ✓ 143424    ✗ 402  
     data_received..................: 4.2 GB 7.0 MB/s
     data_sent......................: 57 MB  94 kB/s
     http_req_blocked...............: avg=46.57µs  min=1.32µs   med=3.03µs   max=36.85ms  p(90)=4.53µs   p(95)=5.34µs 
     http_req_connecting............: avg=41.29µs  min=0s       med=0s       max=36.82ms  p(90)=0s       p(95)=0s     
     http_req_duration..............: avg=3.74s    min=12.74ms  med=3.26s    max=1m0s     p(90)=4.64s    p(95)=5.08s  
       { expected_response:true }...: avg=3.5s     min=12.74ms  med=3.26s    max=59.9s    p(90)=4.61s    p(95)=5.03s  
     http_req_failed................: 0.41%  ✓ 201       ✗ 47828
     http_req_receiving.............: avg=516.28µs min=0s       med=107.84µs max=448.64ms p(90)=179.21µs p(95)=262.3µs
     http_req_sending...............: avg=120.26µs min=8.19µs   med=15.06µs  max=179.03ms p(90)=29.07µs  p(95)=38.19µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s       p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=3.74s    min=12.63ms  med=3.26s    max=1m0s     p(90)=4.64s    p(95)=5.08s  
     http_reqs......................: 48029  79.558018/s
     iteration_duration.............: avg=3.76s    min=198.76ms med=3.27s    max=1m0s     p(90)=4.66s    p(95)=5.1s   
     iterations.....................: 48009  79.524889/s
     vus............................: 142    min=142     max=300
     vus_max........................: 300    min=300     max=300
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/74ec6557-96de-445e-b324-5b668b900800/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ef537ae7-100c-46b9-07b6-6a97f473fb00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e9127ffd-d5f8-4eef-d8a5-0872421df800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     █ setup

     checks.........................: 100.00% ✓ 100851    ✗ 0    
     data_received..................: 3.0 GB  4.9 MB/s
     data_sent......................: 40 MB   66 kB/s
     http_req_blocked...............: avg=45.2µs   min=1.47µs   med=4.11µs   max=32.81ms  p(90)=5.53µs  p(95)=6.08µs  
     http_req_connecting............: avg=36.96µs  min=0s       med=0s       max=18.53ms  p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=5.34s    min=14.85ms  med=5.39s    max=11.8s    p(90)=5.62s   p(95)=5.7s    
       { expected_response:true }...: avg=5.34s    min=14.85ms  med=5.39s    max=11.8s    p(90)=5.62s   p(95)=5.7s    
     http_req_failed................: 0.00%   ✓ 0         ✗ 33637
     http_req_receiving.............: avg=313.85µs min=39.6µs   med=120.83µs max=414.87ms p(90)=167.4µs p(95)=188.25µs
     http_req_sending...............: avg=41.49µs  min=8.16µs   med=23.54µs  max=41.42ms  p(90)=35.67µs p(95)=40.66µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=5.34s    min=14.66ms  med=5.39s    max=11.79s   p(90)=5.62s   p(95)=5.7s    
     http_reqs......................: 33637   55.827657/s
     iteration_duration.............: avg=5.36s    min=103.68ms med=5.41s    max=11.82s   p(90)=5.63s   p(95)=5.71s   
     iterations.....................: 33617   55.794463/s
     vus............................: 131     min=131     max=300
     vus_max........................: 300     min=300     max=300
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e3c59f49-293c-4238-556a-6e48fd9a7e00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a7f83663-b92b-4bb8-a125-c21755c2e000/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/66375ef4-c872-4864-7e65-3ba9320bf400/public" alt="HTTP Overview" />


  </details>