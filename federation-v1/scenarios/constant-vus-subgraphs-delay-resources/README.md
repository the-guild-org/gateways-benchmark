## Overview for: `constant-vus-subgraphs-delay-resources`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. It's being executed with a constant amount of VUs over a fixed amount of time. It measure things like memory usage, CPU usage, average RPS. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was running 350 VUs over 400s


### Comparison


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3036a8a5-bb74-44c6-8ed5-5c8afa9f9e00/public" alt="Comparison" />


| Gateway         | RPS ⬇️ |       Requests        |          Duration          | Notes |
| :-------------- | :----: | :-------------------: | :------------------------: | :---- |
| wundergraph     |  193   | 77738 total, 0 failed |  avg: 1446ms, p95: 2392ms  | ✅     |
| apollo-router   |  183   | 73590 total, 0 failed |  avg: 1285ms, p95: 2719ms  | ✅     |
| mesh-bun        |   88   | 35562 total, 0 failed |  avg: 3920ms, p95: 4439ms  | ✅     |
| mesh-supergraph |   85   | 34348 total, 0 failed |  avg: 4022ms, p95: 5012ms  | ✅     |
| mesh            |   83   | 33469 total, 0 failed |  avg: 4140ms, p95: 5060ms  | ✅     |
| apollo-server   |   66   | 26710 total, 0 failed |  avg: 5248ms, p95: 7469ms  | ✅     |
| mercurius       |   12   | 5397 total, 0 failed  | avg: 26810ms, p95: 29044ms | ✅     |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 233214     ✗ 0    
     data_received..................: 6.8 GB  17 MB/s
     data_sent......................: 92 MB   230 kB/s
     http_req_blocked...............: avg=132.71µs min=1.31µs   med=2.88µs  max=987.93ms p(90)=4.69µs   p(95)=5.72µs 
     http_req_connecting............: avg=22.57µs  min=0s       med=0s      max=22.56ms  p(90)=0s       p(95)=0s     
     http_req_duration..............: avg=1.44s    min=564.15ms med=1.35s   max=4.88s    p(90)=2.09s    p(95)=2.39s  
       { expected_response:true }...: avg=1.44s    min=564.15ms med=1.35s   max=4.88s    p(90)=2.09s    p(95)=2.39s  
     http_req_failed................: 0.00%   ✓ 0          ✗ 77738
     http_req_receiving.............: avg=186.51ms min=20.68µs  med=78.64µs max=3.23s    p(90)=845.63ms p(95)=1.09s  
     http_req_sending...............: avg=10.45ms  min=7.3µs    med=13.37µs max=2.49s    p(90)=30.79µs  p(95)=231.5µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s       p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=1.24s    min=564.1ms  med=1.24s   max=2.96s    p(90)=1.55s    p(95)=1.65s  
     http_reqs......................: 77738   193.772165/s
     iteration_duration.............: avg=1.8s     min=625.68ms med=1.62s   max=6.84s    p(90)=2.76s    p(95)=3.2s   
     iterations.....................: 77738   193.772165/s
     vus............................: 76      min=76       max=350
     vus_max........................: 350     min=350      max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4a3c8fcf-ff85-40a1-bf6f-986faed4c500/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6f2b2ab3-b412-4311-f28d-a8eff7659800/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/887ead87-9083-4350-3ce5-9db13739fa00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 220770     ✗ 0    
     data_received..................: 6.5 GB  16 MB/s
     data_sent......................: 87 MB   218 kB/s
     http_req_blocked...............: avg=730.31µs min=1.42µs   med=3.11µs   max=2.94s  p(90)=5.33µs  p(95)=6.44µs
     http_req_connecting............: avg=443.15µs min=0s       med=0s       max=2.94s  p(90)=0s      p(95)=0s    
     http_req_duration..............: avg=1.28s    min=270.09ms med=1.09s    max=7.99s  p(90)=2.29s   p(95)=2.71s 
       { expected_response:true }...: avg=1.28s    min=270.09ms med=1.09s    max=7.99s  p(90)=2.29s   p(95)=2.71s 
     http_req_failed................: 0.00%   ✓ 0          ✗ 73590
     http_req_receiving.............: avg=361.87ms min=22.82µs  med=81.54µs  max=7.21s  p(90)=1.38s   p(95)=1.93s 
     http_req_sending...............: avg=19.2ms   min=6.71µs   med=14.14µs  max=4.36s  p(90)=37.13µs p(95)=3.83ms
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s     p(90)=0s      p(95)=0s    
     http_req_waiting...............: avg=904.2ms  min=270.04ms med=830.34ms max=3.86s  p(90)=1.38s   p(95)=1.52s 
     http_reqs......................: 73590   183.452863/s
     iteration_duration.............: avg=1.89s    min=286.88ms med=1.62s    max=10.33s p(90)=3.53s   p(95)=4.23s 
     iterations.....................: 73590   183.452863/s
     vus............................: 80      min=80       max=350
     vus_max........................: 350     min=350      max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8b32d4cc-08d7-47e8-4ef9-5f4141176d00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/91b77c98-c72d-42c6-d6ad-31a570d5eb00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5a3f1854-2fb9-4d74-2c33-589991ebcd00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 106686    ✗ 0    
     data_received..................: 3.1 GB  7.7 MB/s
     data_sent......................: 42 MB   105 kB/s
     http_req_blocked...............: avg=36.18µs  min=1.34µs  med=3.06µs  max=55.49ms p(90)=5.22µs   p(95)=6.5µs  
     http_req_connecting............: avg=27.13µs  min=0s      med=0s      max=20.51ms p(90)=0s       p(95)=0s     
     http_req_duration..............: avg=3.91s    min=2.21s   med=3.82s   max=8.16s   p(90)=4.23s    p(95)=4.43s  
       { expected_response:true }...: avg=3.91s    min=2.21s   med=3.82s   max=8.16s   p(90)=4.23s    p(95)=4.43s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 35562
     http_req_receiving.............: avg=12.1ms   min=29.16µs med=86.01µs max=1.97s   p(90)=389.81µs p(95)=2.23ms 
     http_req_sending...............: avg=480.43µs min=7.75µs  med=14.61µs max=533.5ms p(90)=31.54µs  p(95)=73.32µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s      p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=3.9s     min=2.21s   med=3.82s   max=8.13s   p(90)=4.22s    p(95)=4.39s  
     http_reqs......................: 35562   88.270727/s
     iteration_duration.............: avg=3.95s    min=2.22s   med=3.85s   max=8.16s   p(90)=4.27s    p(95)=4.48s  
     iterations.....................: 35562   88.270727/s
     vus............................: 94      min=94      max=350
     vus_max........................: 350     min=350     max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d192f9e5-b25b-4079-1c41-02c4a5aea900/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/66fb1685-2d01-444a-11ee-9455ac5aba00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e26e1011-2e00-4e69-b9b6-0f17d367de00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 103044    ✗ 0    
     data_received..................: 3.0 GB  7.5 MB/s
     data_sent......................: 41 MB   101 kB/s
     http_req_blocked...............: avg=67.64µs min=1.99µs  med=5µs     max=137.06ms p(90)=6.92µs p(95)=7.89µs  
     http_req_connecting............: avg=41.43µs min=0s      med=0s      max=31.51ms  p(90)=0s     p(95)=0s      
     http_req_duration..............: avg=4.02s   min=2.24s   med=3.99s   max=7.21s    p(90)=4.78s  p(95)=5.01s   
       { expected_response:true }...: avg=4.02s   min=2.24s   med=3.99s   max=7.21s    p(90)=4.78s  p(95)=5.01s   
     http_req_failed................: 0.00%   ✓ 0         ✗ 34348
     http_req_receiving.............: avg=10.3ms  min=35.11µs med=99.66µs max=1.11s    p(90)=3.58ms p(95)=20.8ms  
     http_req_sending...............: avg=852.3µs min=9.3µs   med=27.24µs max=581.21ms p(90)=44.4µs p(95)=154.34µs
     http_req_tls_handshaking.......: avg=0s      min=0s      med=0s      max=0s       p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=4.01s   min=2.24s   med=3.98s   max=7.21s    p(90)=4.76s  p(95)=4.99s   
     http_reqs......................: 34348   85.213835/s
     iteration_duration.............: avg=4.09s   min=2.27s   med=4.07s   max=7.31s    p(90)=4.87s  p(95)=5.11s   
     iterations.....................: 34348   85.213835/s
     vus............................: 24      min=24      max=350
     vus_max........................: 350     min=350     max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1068e7ea-3add-4b5a-8bc1-d2187dd01f00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6c64d7c4-2451-4c3e-41d5-f04823a50600/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/77fa2d58-89ab-4869-cfb3-0e9bbce21200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 100407    ✗ 0    
     data_received..................: 2.9 GB  7.3 MB/s
     data_sent......................: 40 MB   99 kB/s
     http_req_blocked...............: avg=81.06µs  min=1.74µs  med=3.87µs  max=187.11ms p(90)=5.87µs  p(95)=6.87µs  
     http_req_connecting............: avg=51.63µs  min=0s      med=0s      max=25.3ms   p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=4.13s    min=2.31s   med=4.1s    max=7.02s    p(90)=4.87s   p(95)=5.05s   
       { expected_response:true }...: avg=4.13s    min=2.31s   med=4.1s    max=7.02s    p(90)=4.87s   p(95)=5.05s   
     http_req_failed................: 0.00%   ✓ 0         ✗ 33469
     http_req_receiving.............: avg=8.09ms   min=32.98µs med=82.61µs max=1.31s    p(90)=1.94ms  p(95)=12.78ms 
     http_req_sending...............: avg=665.55µs min=8.58µs  med=19.21µs max=633.93ms p(90)=37.18µs p(95)=123.03µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=4.13s    min=2.23s   med=4.09s   max=6.91s    p(90)=4.86s   p(95)=5.04s   
     http_reqs......................: 33469   83.094411/s
     iteration_duration.............: avg=4.19s    min=2.35s   med=4.16s   max=7.1s     p(90)=4.94s   p(95)=5.14s   
     iterations.....................: 33469   83.094411/s
     vus............................: 119     min=119     max=350
     vus_max........................: 350     min=350     max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6ca39a52-6c1c-4133-2f85-cb4ec4aa1100/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a9668a83-0f38-4ad1-bec3-b149f3269b00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/31f115bf-069e-4bb5-7cd2-4b92cfa4fa00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 80130     ✗ 0    
     data_received..................: 2.3 GB  5.8 MB/s
     data_sent......................: 32 MB   79 kB/s
     http_req_blocked...............: avg=20.35µs  min=1.31µs med=2.94µs  max=22.06ms  p(90)=4.65µs   p(95)=5.52µs  
     http_req_connecting............: avg=15.19µs  min=0s     med=0s      max=22.03ms  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=5.24s    min=2.47s  med=5.08s   max=11.71s   p(90)=6.83s    p(95)=7.46s   
       { expected_response:true }...: avg=5.24s    min=2.47s  med=5.08s   max=11.71s   p(90)=6.83s    p(95)=7.46s   
     http_req_failed................: 0.00%   ✓ 0         ✗ 26710
     http_req_receiving.............: avg=895.58µs min=35.9µs med=87.66µs max=423.7ms  p(90)=155.65µs p(95)=552.77µs
     http_req_sending...............: avg=133.08µs min=8.08µs med=14.71µs max=119.23ms p(90)=28.73µs  p(95)=43.11µs 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=5.24s    min=2.47s  med=5.08s   max=11.71s   p(90)=6.83s    p(95)=7.46s   
     http_reqs......................: 26710   66.250125/s
     iteration_duration.............: avg=5.26s    min=2.49s  med=5.1s    max=11.72s   p(90)=6.85s    p(95)=7.5s    
     iterations.....................: 26710   66.250125/s
     vus............................: 57      min=57      max=350
     vus_max........................: 350     min=350     max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ebc07148-ba39-47d1-7185-bab9d6245b00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ecfed4ab-47ab-422c-43a1-7cb55e456500/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6580cb29-88f5-4899-7581-becb5382df00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 16191     ✗ 0    
     data_received..................: 474 MB  1.1 MB/s
     data_sent......................: 6.4 MB  15 kB/s
     http_req_blocked...............: avg=429.53µs min=1.4µs   med=3.26µs  max=49.94ms p(90)=5.17µs   p(95)=86.31µs 
     http_req_connecting............: avg=396.54µs min=0s      med=0s      max=31.14ms p(90)=0s       p(95)=56.87µs 
     http_req_duration..............: avg=26.8s    min=8.1s    med=27.58s  max=30.91s  p(90)=28.04s   p(95)=29.04s  
       { expected_response:true }...: avg=26.8s    min=8.1s    med=27.58s  max=30.91s  p(90)=28.04s   p(95)=29.04s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 5397 
     http_req_receiving.............: avg=116.35µs min=41.92µs med=96.28µs max=11.36ms p(90)=133.58µs p(95)=152.04µs
     http_req_sending...............: avg=166.23µs min=8.05µs  med=18.77µs max=49.89ms p(90)=28.62µs  p(95)=36.31µs 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=26.8s    min=8.1s    med=27.58s  max=30.91s  p(90)=28.04s   p(95)=29.04s  
     http_reqs......................: 5397    12.645844/s
     iteration_duration.............: avg=26.81s   min=8.11s   med=27.58s  max=30.94s  p(90)=28.05s   p(95)=29.05s  
     iterations.....................: 5397    12.645844/s
     vus............................: 17      min=17      max=350
     vus_max........................: 350     min=350     max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7bdbd1c4-4c92-49b8-8856-298c86483d00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5aae5078-6841-49d4-72d9-8a003422e500/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/78ad8932-90e7-4140-c265-2ea52a9e1600/public" alt="HTTP Overview" />


  </details>