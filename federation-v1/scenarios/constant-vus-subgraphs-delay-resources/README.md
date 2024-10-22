## Overview for: `federation-v1/constant-vus-subgraphs-delay-resources`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. It's being executed with a constant amount of VUs over a fixed amount of time. It measure things like memory usage, CPU usage, average RPS. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was running 500 VUs over 600s


### Comparison


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5195a1ff-205b-4208-6117-ddfcc9759800/public" alt="Comparison" />


| Gateway       | RPS ⬇️ |         Requests         |         Duration          | Notes                                                                          |
| :------------ | :----: | :----------------------: | :-----------------------: | :----------------------------------------------------------------------------- |
| cosmo         |  177   |  106662 total, 0 failed  | avg: 1329ms, p95: 3544ms  | ✅                                                                              |
| apollo-router |  172   |  103974 total, 0 failed  | avg: 1358ms, p95: 3543ms  | ✅                                                                              |
| wundergraph   |  161   |  97126 total, 0 failed   | avg: 1408ms, p95: 3491ms  | ✅                                                                              |
| hive-gateway  |  100   | 60732 total, 150 failed  | avg: 4888ms, p95: 6890ms  | ❌ 150 failed requests, 150 non-200 responses, 150 unexpected GraphQL errors    |
| apollo-server |   82   | 49759 total, 2770 failed | avg: 6020ms, p95: 59957ms | ❌ 2770 failed requests, 2770 non-200 responses, 2770 unexpected GraphQL errors |
| mercurius     |   56   |  33912 total, 0 failed   | avg: 8855ms, p95: 9432ms  | ✅                                                                              |



<details>
  <summary>Summary for: `cosmo`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     █ setup

     checks.........................: 100.00% ✓ 319926     ✗ 0     
     data_received..................: 9.4 GB  16 MB/s
     data_sent......................: 127 MB  211 kB/s
     http_req_blocked...............: avg=2.69ms   min=1.55µs  med=3.86µs   max=5.72s  p(90)=5.7µs   p(95)=6.67µs
     http_req_connecting............: avg=2.02ms   min=0s      med=0s       max=5.16s  p(90)=0s      p(95)=0s    
     http_req_duration..............: avg=1.32s    min=4.21ms  med=1.09s    max=11.76s p(90)=2.72s   p(95)=3.54s 
       { expected_response:true }...: avg=1.32s    min=4.21ms  med=1.09s    max=11.76s p(90)=2.72s   p(95)=3.54s 
     http_req_failed................: 0.00%   ✓ 0          ✗ 106662
     http_req_receiving.............: avg=455.36ms min=34.56µs med=97.09µs  max=10.69s p(90)=1.83s   p(95)=2.67s 
     http_req_sending...............: avg=39.59ms  min=7.52µs  med=19.42µs  max=6.99s  p(90)=49.92µs p(95)=15.5ms
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s     p(90)=0s      p(95)=0s    
     http_req_waiting...............: avg=833.69ms min=4.12ms  med=795.18ms max=5.21s  p(90)=1.5s    p(95)=1.75s 
     http_reqs......................: 106662  177.348352/s
     iteration_duration.............: avg=2.77s    min=18.58ms med=2.31s    max=16.83s p(90)=5.67s   p(95)=6.84s 
     iterations.....................: 106642  177.315098/s
     vus............................: 221     min=221      max=500 
     vus_max........................: 500     min=500      max=500 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/44b138e3-088d-49cd-568e-a81119a16900/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/834e6711-76a5-43e0-8e6d-1a218bac0700/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/790eaa43-ee7f-42ec-aa5e-72ebeac0ca00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     █ setup

     checks.........................: 100.00% ✓ 311862     ✗ 0     
     data_received..................: 9.1 GB  15 MB/s
     data_sent......................: 123 MB  205 kB/s
     http_req_blocked...............: avg=2.84ms   min=1.57µs  med=3.44µs   max=5.09s  p(90)=5.26µs  p(95)=6.04µs 
     http_req_connecting............: avg=2.23ms   min=0s      med=0s       max=5.09s  p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=1.35s    min=7.49ms  med=1.11s    max=11.89s p(90)=2.78s   p(95)=3.54s  
       { expected_response:true }...: avg=1.35s    min=7.49ms  med=1.11s    max=11.89s p(90)=2.78s   p(95)=3.54s  
     http_req_failed................: 0.00%   ✓ 0          ✗ 103974
     http_req_receiving.............: avg=485.29ms min=29.39µs med=89.57µs  max=9.42s  p(90)=1.81s   p(95)=2.66s  
     http_req_sending...............: avg=38.53ms  min=7.55µs  med=16.86µs  max=7.15s  p(90)=49.51µs p(95)=19.31ms
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s     p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=834.67ms min=7.37ms  med=788.65ms max=6.06s  p(90)=1.53s   p(95)=1.8s   
     http_reqs......................: 103974  172.781231/s
     iteration_duration.............: avg=2.84s    min=26.57ms med=2.37s    max=18.89s p(90)=5.78s   p(95)=7.06s  
     iterations.....................: 103954  172.747995/s
     vus............................: 342     min=342      max=500 
     vus_max........................: 500     min=500      max=500 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/00821960-6f9b-4a70-25c8-64a88c34c700/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e3dbe525-8776-417e-0d42-8202980d7100/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/206147fc-645d-468f-163e-1e3c89e20900/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     █ setup

     checks.........................: 100.00% ✓ 291318     ✗ 0    
     data_received..................: 8.5 GB  14 MB/s
     data_sent......................: 115 MB  192 kB/s
     http_req_blocked...............: avg=3.91ms   min=1.21µs  med=3.27µs   max=7.92s  p(90)=4.96µs  p(95)=5.95µs 
     http_req_connecting............: avg=3.11ms   min=0s      med=0s       max=7.92s  p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=1.4s     min=5.93ms  med=1.2s     max=10.26s p(90)=2.79s   p(95)=3.49s  
       { expected_response:true }...: avg=1.4s     min=5.93ms  med=1.2s     max=10.26s p(90)=2.79s   p(95)=3.49s  
     http_req_failed................: 0.00%   ✓ 0          ✗ 97126
     http_req_receiving.............: avg=437.47ms min=29.23µs med=85.2µs   max=9.28s  p(90)=1.72s   p(95)=2.49s  
     http_req_sending...............: avg=47.69ms  min=7.25µs  med=15.51µs  max=8.39s  p(90)=61.05µs p(95)=32.93ms
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s     p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=923.14ms min=5.85ms  med=888.09ms max=5.98s  p(90)=1.64s   p(95)=1.92s  
     http_reqs......................: 97126   161.466335/s
     iteration_duration.............: avg=3.05s    min=23.76ms med=2.65s    max=20.09s p(90)=5.99s   p(95)=7.15s  
     iterations.....................: 97106   161.433087/s
     vus............................: 149     min=149      max=500
     vus_max........................: 500     min=500      max=500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1f30605e-25e2-439e-0fc9-786940a86100/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b7080b34-e60e-4e09-7c96-e094a7854600/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b11f58c1-2dee-40fa-a14b-b05d97bf0f00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `hive-gateway`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  99% — ✓ 60562 / ✗ 150
     ✗ no graphql errors
      ↳  99% — ✓ 60562 / ✗ 150
     ✓ valid response structure

     █ setup

     checks.........................: 99.83% ✓ 181686     ✗ 300  
     data_received..................: 5.3 GB 8.8 MB/s
     data_sent......................: 72 MB  119 kB/s
     http_req_blocked...............: avg=490.21µs min=1.76µs   med=4.06µs  max=388.7ms  p(90)=5.93µs   p(95)=6.87µs  
     http_req_connecting............: avg=470.77µs min=0s       med=0s      max=388.64ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=4.88s    min=13.17ms  med=4.59s   max=1m0s     p(90)=5.64s    p(95)=6.89s   
       { expected_response:true }...: avg=4.75s    min=13.17ms  med=4.59s   max=59.6s    p(90)=5.61s    p(95)=6.81s   
     http_req_failed................: 0.24%  ✓ 150        ✗ 60582
     http_req_receiving.............: avg=6.37ms   min=0s       med=84.92µs max=831.32ms p(90)=623.98µs p(95)=9.21ms  
     http_req_sending...............: avg=1.09ms   min=8.26µs   med=20.11µs max=575.67ms p(90)=40.73µs  p(95)=154.24µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=4.88s    min=13.07ms  med=4.58s   max=1m0s     p(90)=5.62s    p(95)=6.88s   
     http_reqs......................: 60732  100.468703/s
     iteration_duration.............: avg=4.96s    min=520.74ms med=4.66s   max=1m0s     p(90)=5.74s    p(95)=6.94s   
     iterations.....................: 60712  100.435617/s
     vus............................: 141    min=141      max=500
     vus_max........................: 500    min=500      max=500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/57edd857-ad1d-4e80-4b99-dc488e61bf00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5ae45be0-6435-4e15-9d03-0e569322ca00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9b97c804-e98a-4aee-5174-a37196142b00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  94% — ✓ 46969 / ✗ 2770
     ✗ no graphql errors
      ↳  94% — ✓ 46969 / ✗ 2770
     ✓ valid response structure

     █ setup

     checks.........................: 96.21% ✓ 140907    ✗ 5540 
     data_received..................: 4.1 GB 6.9 MB/s
     data_sent......................: 59 MB  98 kB/s
     http_req_blocked...............: avg=992.4µs  min=1.39µs   med=3.43µs   max=200.51ms p(90)=5.75µs   p(95)=334.83µs
     http_req_connecting............: avg=950.16µs min=0s       med=0s       max=200.34ms p(90)=0s       p(95)=260.91µs
     http_req_duration..............: avg=6.01s    min=13.72ms  med=2.8s     max=1m0s     p(90)=3.26s    p(95)=59.95s  
       { expected_response:true }...: avg=2.83s    min=13.72ms  med=2.79s    max=59.4s    p(90)=3.1s     p(95)=3.25s   
     http_req_failed................: 5.56%  ✓ 2770      ✗ 46989
     http_req_receiving.............: avg=257.94µs min=0s       med=107.19µs max=173.26ms p(90)=171.44µs p(95)=216.83µs
     http_req_sending...............: avg=299.22µs min=8.31µs   med=17.82µs  max=178.6ms  p(90)=37.28µs  p(95)=122.92µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=6.01s    min=13.57ms  med=2.8s     max=1m0s     p(90)=3.26s    p(95)=59.94s  
     http_reqs......................: 49759  82.532117/s
     iteration_duration.............: avg=6.03s    min=493.99ms med=2.82s    max=1m0s     p(90)=3.28s    p(95)=1m0s    
     iterations.....................: 49739  82.498945/s
     vus............................: 107    min=107     max=500
     vus_max........................: 500    min=500     max=500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/14bdf89a-79fb-46e9-3cb6-7fe7ed1f2800/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/94b24020-dbd3-41b4-7406-2ff1a66eb500/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/03564ae1-ec3a-448a-4799-9f48895f6400/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     █ setup

     checks.........................: 100.00% ✓ 101676    ✗ 0    
     data_received..................: 3.0 GB  4.9 MB/s
     data_sent......................: 40 MB   67 kB/s
     http_req_blocked...............: avg=319.87µs min=1.51µs   med=3.42µs   max=49.71ms  p(90)=4.6µs    p(95)=5.15µs  
     http_req_connecting............: avg=307.93µs min=0s       med=0s       max=49.66ms  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=8.85s    min=14.55ms  med=8.92s    max=17.13s   p(90)=9.21s    p(95)=9.43s   
       { expected_response:true }...: avg=8.85s    min=14.55ms  med=8.92s    max=17.13s   p(90)=9.21s    p(95)=9.43s   
     http_req_failed................: 0.00%   ✓ 0         ✗ 33912
     http_req_receiving.............: avg=344.54µs min=40.26µs  med=112.38µs max=440.83ms p(90)=162.93µs p(95)=184.21µs
     http_req_sending...............: avg=42.52µs  min=8.18µs   med=17.93µs  max=44.25ms  p(90)=30.73µs  p(95)=36.55µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=8.85s    min=14.44ms  med=8.92s    max=17.13s   p(90)=9.21s    p(95)=9.43s   
     http_reqs......................: 33912   56.221433/s
     iteration_duration.............: avg=8.87s    min=529.82ms med=8.94s    max=17.14s   p(90)=9.22s    p(95)=9.44s   
     iterations.....................: 33892   56.188276/s
     vus............................: 84      min=84      max=500
     vus_max........................: 500     min=500     max=500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a40c40b4-e19e-42dc-1b1c-33f581f99000/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3111484a-7457-42c0-e219-99fb37d8ae00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f7a34bcd-fc2c-4957-5194-19e952585600/public" alt="HTTP Overview" />


  </details>