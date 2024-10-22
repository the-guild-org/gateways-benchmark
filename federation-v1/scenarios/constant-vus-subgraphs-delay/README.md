## Overview for: `federation-v1/constant-vus-subgraphs-delay`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. It's being executed with a constant amount of VUs over a fixed amount of time. It measure things like memory usage, CPU usage, average RPS. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was running 300 VUs over 600s


### Comparison


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1059d379-631a-4cbe-8a4f-1d14592e9800/public" alt="Comparison" />


| Gateway       | RPS ⬇️ |        Requests         |         Duration         | Notes                                                                       |
| :------------ | :----: | :---------------------: | :----------------------: | :-------------------------------------------------------------------------- |
| cosmo         |  189   | 113698 total, 0 failed  | avg: 795ms, p95: 2158ms  | ✅                                                                           |
| apollo-router |  175   | 105406 total, 0 failed  | avg: 881ms, p95: 2531ms  | ✅                                                                           |
| wundergraph   |  159   |  96092 total, 0 failed  | avg: 912ms, p95: 2645ms  | ✅                                                                           |
| hive-gateway  |   99   |  60138 total, 0 failed  | avg: 2948ms, p95: 4018ms | ✅                                                                           |
| apollo-server |   79   | 48022 total, 178 failed | avg: 3741ms, p95: 5143ms | ❌ 178 failed requests, 178 non-200 responses, 178 unexpected GraphQL errors |
| mercurius     |   57   |  34769 total, 0 failed  | avg: 5173ms, p95: 5467ms | ✅                                                                           |



<details>
  <summary>Summary for: `cosmo`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     █ setup

     checks.........................: 100.00% ✓ 341034     ✗ 0     
     data_received..................: 10 GB   17 MB/s
     data_sent......................: 135 MB  225 kB/s
     http_req_blocked...............: avg=1.39ms   min=1.27µs  med=3.06µs   max=2.88s  p(90)=4.4µs   p(95)=5.12µs 
     http_req_connecting............: avg=1.08ms   min=0s      med=0s       max=2.58s  p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=795.36ms min=3.88ms  med=642.33ms max=7.71s  p(90)=1.67s   p(95)=2.15s  
       { expected_response:true }...: avg=795.36ms min=3.88ms  med=642.33ms max=7.71s  p(90)=1.67s   p(95)=2.15s  
     http_req_failed................: 0.00%   ✓ 0          ✗ 113698
     http_req_receiving.............: avg=258.26ms min=29.55µs med=79.67µs  max=7.31s  p(90)=1.03s   p(95)=1.64s  
     http_req_sending...............: avg=26ms     min=7.48µs  med=14.19µs  max=5.26s  p(90)=41.97µs p(95)=31.64ms
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s     p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=511.09ms min=3.79ms  med=480.96ms max=3.46s  p(90)=923.4ms p(95)=1.08s  
     http_reqs......................: 113698  189.196536/s
     iteration_duration.............: avg=1.57s    min=16.07ms med=1.24s    max=11.59s p(90)=3.32s   p(95)=4.1s   
     iterations.....................: 113678  189.163255/s
     vus............................: 300     min=300      max=300 
     vus_max........................: 300     min=300      max=300 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4ef93301-364a-4db4-2e30-78fa3c130100/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ecab71dc-c9ab-4205-8f93-6cd8db31a500/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e17ecde5-8e32-4a6e-0037-b6e069cfc500/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     █ setup

     checks.........................: 100.00% ✓ 316158     ✗ 0     
     data_received..................: 9.2 GB  15 MB/s
     data_sent......................: 125 MB  208 kB/s
     http_req_blocked...............: avg=1.09ms   min=1.43µs  med=3.24µs   max=3.71s  p(90)=4.9µs    p(95)=5.72µs  
     http_req_connecting............: avg=747.35µs min=0s      med=0s       max=3.71s  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=880.83ms min=5.97ms  med=655.74ms max=7.91s  p(90)=1.95s    p(95)=2.53s   
       { expected_response:true }...: avg=880.83ms min=5.97ms  med=655.74ms max=7.91s  p(90)=1.95s    p(95)=2.53s   
     http_req_failed................: 0.00%   ✓ 0          ✗ 105406
     http_req_receiving.............: avg=348.16ms min=30.11µs med=80.19µs  max=7.44s  p(90)=1.36s    p(95)=1.98s   
     http_req_sending...............: avg=18.59ms  min=7.08µs  med=14.88µs  max=5.08s  p(90)=34.41µs  p(95)=378.12µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s     p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=514.07ms min=5.89ms  med=471.82ms max=3.38s  p(90)=948.92ms p(95)=1.11s   
     http_reqs......................: 105406  175.348325/s
     iteration_duration.............: avg=1.69s    min=20.68ms med=1.31s    max=15.62s p(90)=3.66s    p(95)=4.52s   
     iterations.....................: 105386  175.315054/s
     vus............................: 52      min=52       max=300 
     vus_max........................: 300     min=300      max=300 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/fe3cf3c3-39c7-4f8a-61db-7e86fd605900/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/116dca10-21a5-491b-2d05-28cf706ce800/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/dcc74faf-d841-4d54-00a1-5e950dea3300/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     █ setup

     checks.........................: 100.00% ✓ 288216     ✗ 0    
     data_received..................: 8.4 GB  14 MB/s
     data_sent......................: 114 MB  190 kB/s
     http_req_blocked...............: avg=2.35ms   min=1.42µs  med=3.55µs   max=4.56s  p(90)=5.4µs    p(95)=6.29µs
     http_req_connecting............: avg=1.9ms    min=0s      med=0s       max=4.13s  p(90)=0s       p(95)=0s    
     http_req_duration..............: avg=911.71ms min=5.66ms  med=673.58ms max=11.14s p(90)=2.06s    p(95)=2.64s 
       { expected_response:true }...: avg=911.71ms min=5.66ms  med=673.58ms max=11.14s p(90)=2.06s    p(95)=2.64s 
     http_req_failed................: 0.00%   ✓ 0          ✗ 96092
     http_req_receiving.............: avg=387.64ms min=30.05µs med=93.66µs  max=10.26s p(90)=1.49s    p(95)=2.11s 
     http_req_sending...............: avg=24.63ms  min=7.56µs  med=17.05µs  max=4.83s  p(90)=46.15µs  p(95)=5.37ms
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s     p(90)=0s       p(95)=0s    
     http_req_waiting...............: avg=499.42ms min=5.57ms  med=441.44ms max=3.27s  p(90)=948.97ms p(95)=1.12s 
     http_reqs......................: 96092   159.921045/s
     iteration_duration.............: avg=1.85s    min=21.51ms med=1.49s    max=12.37s p(90)=3.99s    p(95)=4.88s 
     iterations.....................: 96072   159.88776/s
     vus............................: 300     min=300      max=300
     vus_max........................: 300     min=300      max=300
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c41ba366-41e8-46fe-07d3-f5fd5d331800/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/94831d2e-103f-483b-bc8f-df43725b5b00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2427d672-5713-42cf-00b7-ea33e2560800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `hive-gateway`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     █ setup

     checks.........................: 100.00% ✓ 180354    ✗ 0    
     data_received..................: 5.3 GB  8.8 MB/s
     data_sent......................: 71 MB   118 kB/s
     http_req_blocked...............: avg=63.94µs  min=1.21µs   med=3.58µs  max=183.54ms p(90)=5.2µs    p(95)=5.91µs  
     http_req_connecting............: avg=35.31µs  min=0s       med=0s      max=22.89ms  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=2.94s    min=12.19ms  med=2.82s   max=41.83s   p(90)=3.37s    p(95)=4.01s   
       { expected_response:true }...: avg=2.94s    min=12.19ms  med=2.82s   max=41.83s   p(90)=3.37s    p(95)=4.01s   
     http_req_failed................: 0.00%   ✓ 0         ✗ 60138
     http_req_receiving.............: avg=3.28ms   min=36.71µs  med=81.31µs max=501.67ms p(90)=587.03µs p(95)=6.78ms  
     http_req_sending...............: avg=710.92µs min=7.87µs   med=17.42µs max=554.09ms p(90)=37.31µs  p(95)=134.16µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=2.94s    min=12.12ms  med=2.82s   max=41.83s   p(90)=3.37s    p(95)=4.01s   
     http_reqs......................: 60138   99.779935/s
     iteration_duration.............: avg=3s       min=134.36ms med=2.87s   max=41.85s   p(90)=3.45s    p(95)=4.06s   
     iterations.....................: 60118   99.746751/s
     vus............................: 117     min=117     max=300
     vus_max........................: 300     min=300     max=300
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/97090cfe-ea77-4dd8-29fe-f6c6d1634e00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/33d61c1d-2047-44af-5e28-5d16ce0c1600/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/79bd87f2-3129-4eda-ba40-5b9b524e9a00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  99% — ✓ 47824 / ✗ 178
     ✗ no graphql errors
      ↳  99% — ✓ 47824 / ✗ 178
     ✓ valid response structure

     █ setup

     checks.........................: 99.75% ✓ 143472    ✗ 356  
     data_received..................: 4.2 GB 7.0 MB/s
     data_sent......................: 57 MB  95 kB/s
     http_req_blocked...............: avg=178.12µs min=1.3µs    med=2.85µs  max=111.24ms p(90)=4.26µs  p(95)=5µs    
     http_req_connecting............: avg=167.42µs min=0s       med=0s      max=111.19ms p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=3.74s    min=12.99ms  med=3.26s   max=1m0s     p(90)=4.72s   p(95)=5.14s  
       { expected_response:true }...: avg=3.53s    min=12.99ms  med=3.26s   max=59.76s   p(90)=4.69s   p(95)=5.1s   
     http_req_failed................: 0.37%  ✓ 178       ✗ 47844
     http_req_receiving.............: avg=453.91µs min=0s       med=105.4µs max=287.56ms p(90)=175.6µs p(95)=241.4µs
     http_req_sending...............: avg=212.23µs min=7.94µs   med=14.42µs max=124.54ms p(90)=27.72µs p(95)=37.38µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s       p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=3.73s    min=12.89ms  med=3.26s   max=1m0s     p(90)=4.72s   p(95)=5.13s  
     http_reqs......................: 48022  79.653267/s
     iteration_duration.............: avg=3.75s    min=148.06ms med=3.27s   max=1m0s     p(90)=4.74s   p(95)=5.16s  
     iterations.....................: 48002  79.620094/s
     vus............................: 173    min=173     max=300
     vus_max........................: 300    min=300     max=300
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5790cbbc-2eae-49d7-61c7-91cc7a6b1200/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/17af74c7-1113-4983-738c-3984f5fd5700/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e93a05c2-96d2-4025-0e76-22e117eb1000/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     █ setup

     checks.........................: 100.00% ✓ 104247    ✗ 0    
     data_received..................: 3.1 GB  5.1 MB/s
     data_sent......................: 41 MB   69 kB/s
     http_req_blocked...............: avg=63.89µs  min=1.47µs   med=3.35µs   max=29.87ms  p(90)=4.5µs    p(95)=4.97µs 
     http_req_connecting............: avg=57.06µs  min=0s       med=0s       max=29.83ms  p(90)=0s       p(95)=0s     
     http_req_duration..............: avg=5.17s    min=13.6ms   med=5.24s    max=11.25s   p(90)=5.38s    p(95)=5.46s  
       { expected_response:true }...: avg=5.17s    min=13.6ms   med=5.24s    max=11.25s   p(90)=5.38s    p(95)=5.46s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 34769
     http_req_receiving.............: avg=212.44µs min=40.37µs  med=112.87µs max=202.63ms p(90)=163.95µs p(95)=184.1µs
     http_req_sending...............: avg=33.69µs  min=8.14µs   med=18.36µs  max=32.93ms  p(90)=30.78µs  p(95)=35.9µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s       p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=5.17s    min=13.49ms  med=5.24s    max=11.25s   p(90)=5.38s    p(95)=5.46s  
     http_reqs......................: 34769   57.740584/s
     iteration_duration.............: avg=5.18s    min=409.52ms med=5.25s    max=11.27s   p(90)=5.4s     p(95)=5.47s  
     iterations.....................: 34749   57.70737/s
     vus............................: 56      min=56      max=300
     vus_max........................: 300     min=300     max=300
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f9c233e2-89bc-4cd2-fe7e-301cec110600/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/395f2f23-fd4f-4c83-1e2e-a7887a08fb00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0e1ddfa4-0fc2-457e-f529-6a5c57cb7900/public" alt="HTTP Overview" />


  </details>