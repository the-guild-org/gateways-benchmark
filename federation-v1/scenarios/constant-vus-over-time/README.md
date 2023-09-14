## Overview for: `constant-vus-over-time`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. It's being executed with a constant amount of VUs over a fixed amount of time. It measure things like memory usage, CPU usage, average RPS. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was running 300 VUs over 600s


### Comparison


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9b204259-7591-4009-6bdb-d90143a94800/public" alt="Comparison" />


| Gateway              | RPS ⬇️ |        Requests        |         Duration         | Notes |
| :------------------- | :----: | :--------------------: | :----------------------: | :---- |
| apollo-router        |  172   | 103759 total, 0 failed | avg: 929ms, p95: 2496ms  | ✅     |
| wundergraph          |  169   | 101815 total, 0 failed | avg: 894ms, p95: 2486ms  | ✅     |
| mesh-bun             |   97   | 58841 total, 0 failed  | avg: 3036ms, p95: 3201ms | ✅     |
| mesh-supergraph      |   83   | 50399 total, 0 failed  | avg: 3541ms, p95: 4417ms | ✅     |
| mesh                 |   72   | 43957 total, 0 failed  | avg: 4076ms, p95: 5613ms | ✅     |
| apollo-server        |   67   | 40913 total, 0 failed  | avg: 4396ms, p95: 6238ms | ✅     |
| apollo-server-node16 |   67   | 40426 total, 0 failed  | avg: 4450ms, p95: 6277ms | ✅     |
| mercurius            |   46   | 28051 total, 0 failed  | avg: 6419ms, p95: 7076ms | ✅     |



<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 311277     ✗ 0     
     data_received..................: 9.1 GB  15 MB/s
     data_sent......................: 123 MB  205 kB/s
     http_req_blocked...............: avg=1.26ms   min=1.65µs  med=4µs      max=3.35s  p(90)=6.36µs  p(95)=7.25µs 
     http_req_connecting............: avg=874.93µs min=0s      med=0s       max=2.51s  p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=928.84ms min=9.4ms   med=719.73ms max=9.19s  p(90)=2s      p(95)=2.49s  
       { expected_response:true }...: avg=928.84ms min=9.4ms   med=719.73ms max=9.19s  p(90)=2s      p(95)=2.49s  
     http_req_failed................: 0.00%   ✓ 0          ✗ 103759
     http_req_receiving.............: avg=357ms    min=24.39µs med=85.1µs   max=7.16s  p(90)=1.38s   p(95)=1.97s  
     http_req_sending...............: avg=21.83ms  min=7.14µs  med=19.79µs  max=4.81s  p(90)=50.95µs p(95)=11.07ms
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s     p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=549.99ms min=8.54ms  med=515.34ms max=2.93s  p(90)=975.8ms p(95)=1.14s  
     http_reqs......................: 103759  172.702941/s
     iteration_duration.............: avg=1.72s    min=19.32ms med=1.4s     max=13.89s p(90)=3.6s    p(95)=4.42s  
     iterations.....................: 103759  172.702941/s
     vus............................: 300     min=300      max=300 
     vus_max........................: 300     min=300      max=300 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/327d7534-3117-450e-3715-e7abe56b7c00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/948b71dc-42cf-4cd5-5426-34a8c92b4e00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0f1f3508-99be-4fa0-afdc-24d5bc158900/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 305445     ✗ 0     
     data_received..................: 8.9 GB  15 MB/s
     data_sent......................: 121 MB  201 kB/s
     http_req_blocked...............: avg=1.7ms    min=1.2µs   med=3.14µs   max=4.27s  p(90)=4.6µs    p(95)=5.55µs
     http_req_connecting............: avg=1.43ms   min=0s      med=0s       max=4.27s  p(90)=0s       p(95)=0s    
     http_req_duration..............: avg=893.91ms min=8.74ms  med=705.33ms max=8.05s  p(90)=1.94s    p(95)=2.48s 
       { expected_response:true }...: avg=893.91ms min=8.74ms  med=705.33ms max=8.05s  p(90)=1.94s    p(95)=2.48s 
     http_req_failed................: 0.00%   ✓ 0          ✗ 101815
     http_req_receiving.............: avg=336.13ms min=21.6µs  med=73.82µs  max=7.33s  p(90)=1.3s     p(95)=1.95s 
     http_req_sending...............: avg=24.28ms  min=6.36µs  med=14.38µs  max=4.32s  p(90)=44.95µs  p(95)=17ms  
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s     p(90)=0s       p(95)=0s    
     http_req_waiting...............: avg=533.49ms min=8.59ms  med=501.57ms max=3.6s   p(90)=982.41ms p(95)=1.14s 
     http_reqs......................: 101815  169.514304/s
     iteration_duration.............: avg=1.75s    min=21.77ms med=1.41s    max=13.37s p(90)=3.71s    p(95)=4.55s 
     iterations.....................: 101815  169.514304/s
     vus............................: 292     min=292      max=300 
     vus_max........................: 300     min=300      max=300 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f07407f3-f415-4364-2d5f-45d34d285e00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/fa731b2b-2b95-424f-e60f-ae3710176000/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2188e416-b59f-4a19-2d54-3030fa54b300/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 176523    ✗ 0    
     data_received..................: 5.2 GB  8.6 MB/s
     data_sent......................: 70 MB   116 kB/s
     http_req_blocked...............: avg=28.47µs  min=1.26µs   med=2.83µs  max=92.37ms p(90)=4.69µs   p(95)=5.73µs 
     http_req_connecting............: avg=20.35µs  min=0s       med=0s      max=18.6ms  p(90)=0s       p(95)=0s     
     http_req_duration..............: avg=3.03s    min=243.22ms med=2.97s   max=6.76s   p(90)=3.13s    p(95)=3.2s   
       { expected_response:true }...: avg=3.03s    min=243.22ms med=2.97s   max=6.76s   p(90)=3.13s    p(95)=3.2s   
     http_req_failed................: 0.00%   ✓ 0         ✗ 58841
     http_req_receiving.............: avg=6.67ms   min=28.08µs  med=80.66µs max=1.74s   p(90)=241.13µs p(95)=1.19ms 
     http_req_sending...............: avg=514.48µs min=6.88µs   med=13.47µs max=459.7ms p(90)=28.13µs  p(95)=65.69µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s      p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=3.02s    min=238.7ms  med=2.97s   max=6.55s   p(90)=3.12s    p(95)=3.17s  
     http_reqs......................: 58841   97.710735/s
     iteration_duration.............: avg=3.06s    min=263.69ms med=3s      max=6.77s   p(90)=3.17s    p(95)=3.28s  
     iterations.....................: 58841   97.710735/s
     vus............................: 54      min=54      max=300
     vus_max........................: 300     min=300     max=300
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/13610b60-cec1-4aae-2739-d1993b09da00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/49ec4722-702f-470a-8822-bf3f2e08b800/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0a690154-b1a7-4bee-4e1d-dcde72861d00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 151197    ✗ 0    
     data_received..................: 4.4 GB  7.3 MB/s
     data_sent......................: 60 MB   99 kB/s
     http_req_blocked...............: avg=49.95µs  min=1.25µs  med=3.37µs  max=324.36ms p(90)=5.07µs  p(95)=5.91µs 
     http_req_connecting............: avg=24.56µs  min=0s      med=0s      max=22.57ms  p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=3.54s    min=1.7s    med=3.54s   max=7.39s    p(90)=4.22s   p(95)=4.41s  
       { expected_response:true }...: avg=3.54s    min=1.7s    med=3.54s   max=7.39s    p(90)=4.22s   p(95)=4.41s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 50399
     http_req_receiving.............: avg=3.95ms   min=33.43µs med=81.69µs max=484.06ms p(90)=2.66ms  p(95)=12.75ms
     http_req_sending...............: avg=450.36µs min=7.44µs  med=15.8µs  max=485.69ms p(90)=30.08µs p(95)=48.56µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s       p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=3.53s    min=1.7s    med=3.54s   max=7.39s    p(90)=4.22s   p(95)=4.41s  
     http_reqs......................: 50399   83.652578/s
     iteration_duration.............: avg=3.57s    min=1.74s   med=3.58s   max=7.4s     p(90)=4.27s   p(95)=4.46s  
     iterations.....................: 50399   83.652578/s
     vus............................: 105     min=105     max=300
     vus_max........................: 300     min=300     max=300
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d247d942-f570-4e4d-52a3-80e83d65ac00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2477e89e-b9fe-49ab-957f-63ebfb65ed00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d0194fb2-b5c5-4b66-a6f6-09b2a22f1500/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 131871    ✗ 0    
     data_received..................: 3.9 GB  6.4 MB/s
     data_sent......................: 52 MB   87 kB/s
     http_req_blocked...............: avg=30.62µs  min=1.23µs  med=3.88µs  max=69.7ms   p(90)=5.82µs  p(95)=6.68µs 
     http_req_connecting............: avg=17.45µs  min=0s      med=0s      max=37.75ms  p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=4.07s    min=1.83s   med=3.85s   max=9.12s    p(90)=5.31s   p(95)=5.61s  
       { expected_response:true }...: avg=4.07s    min=1.83s   med=3.85s   max=9.12s    p(90)=5.31s   p(95)=5.61s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 43957
     http_req_receiving.............: avg=3.38ms   min=34.24µs med=96.31µs max=478.57ms p(90)=2.55ms  p(95)=11.68ms
     http_req_sending...............: avg=264.62µs min=7.74µs  med=19.1µs  max=227.83ms p(90)=33.91µs p(95)=40.97µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s       p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=4.07s    min=1.83s   med=3.85s   max=9.12s    p(90)=5.31s   p(95)=5.6s   
     http_reqs......................: 43957   72.918505/s
     iteration_duration.............: avg=4.1s     min=1.87s   med=3.88s   max=9.13s    p(90)=5.34s   p(95)=5.64s  
     iterations.....................: 43957   72.918505/s
     vus............................: 133     min=133     max=300
     vus_max........................: 300     min=300     max=300
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c415d7e9-3b3a-49ae-6f64-ad5a455f5800/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/831c27d0-ecf8-4011-6d3c-2422c4409600/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a642a8bb-fc8d-4113-1437-0ab3a9fdc900/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 122739    ✗ 0    
     data_received..................: 3.6 GB  6.0 MB/s
     data_sent......................: 49 MB   81 kB/s
     http_req_blocked...............: avg=34.58µs  min=1.23µs   med=2.88µs  max=125.97ms p(90)=4.49µs   p(95)=5.32µs  
     http_req_connecting............: avg=25.2µs   min=0s       med=0s      max=31.87ms  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=4.39s    min=154.75ms med=4.13s   max=9.97s    p(90)=5.75s    p(95)=6.23s   
       { expected_response:true }...: avg=4.39s    min=154.75ms med=4.13s   max=9.97s    p(90)=5.75s    p(95)=6.23s   
     http_req_failed................: 0.00%   ✓ 0         ✗ 40913
     http_req_receiving.............: avg=666.66µs min=33.36µs  med=86.69µs max=330.78ms p(90)=139.19µs p(95)=408.23µs
     http_req_sending...............: avg=95.59µs  min=7.68µs   med=14.02µs max=83.13ms  p(90)=26.54µs  p(95)=35.03µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=4.39s    min=154.64ms med=4.13s   max=9.97s    p(90)=5.75s    p(95)=6.23s   
     http_reqs......................: 40913   67.821024/s
     iteration_duration.............: avg=4.41s    min=161.63ms med=4.14s   max=9.98s    p(90)=5.77s    p(95)=6.25s   
     iterations.....................: 40913   67.821024/s
     vus............................: 46      min=46      max=300
     vus_max........................: 300     min=300     max=300
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/072a8036-7554-458f-25c4-c3c079d25f00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6ee2c171-b23e-4f74-3b97-82aacf19bc00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5e8c472a-a982-4180-ca0d-b40ba51e3700/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server-node16`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 121278    ✗ 0    
     data_received..................: 3.6 GB  5.9 MB/s
     data_sent......................: 48 MB   80 kB/s
     http_req_blocked...............: avg=195.81µs min=1.33µs   med=2.86µs  max=57.06ms  p(90)=4.27µs   p(95)=4.93µs  
     http_req_connecting............: avg=187.74µs min=0s       med=0s      max=57.02ms  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=4.44s    min=359.59ms med=4.17s   max=9.52s    p(90)=5.82s    p(95)=6.27s   
       { expected_response:true }...: avg=4.44s    min=359.59ms med=4.17s   max=9.52s    p(90)=5.82s    p(95)=6.27s   
     http_req_failed................: 0.00%   ✓ 0         ✗ 40426
     http_req_receiving.............: avg=1.09ms   min=33.36µs  med=83.63µs max=469.36ms p(90)=145.85µs p(95)=529.71µs
     http_req_sending...............: avg=172.75µs min=7.64µs   med=13.85µs max=232.77ms p(90)=25.75µs  p(95)=36.03µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=4.44s    min=359.44ms med=4.17s   max=9.48s    p(90)=5.82s    p(95)=6.27s   
     http_reqs......................: 40426   67.010059/s
     iteration_duration.............: avg=4.46s    min=366.32ms med=4.18s   max=9.56s    p(90)=5.85s    p(95)=6.29s   
     iterations.....................: 40426   67.010059/s
     vus............................: 65      min=65      max=300
     vus_max........................: 300     min=300     max=300
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ed4f57d8-e601-4d6e-4872-c701fe969100/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/90667074-591b-4dd3-81a0-37cc87121300/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3de4c14d-ea56-4c47-7ad3-4d4c0881c800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 84153     ✗ 0    
     data_received..................: 2.5 GB  4.1 MB/s
     data_sent......................: 33 MB   55 kB/s
     http_req_blocked...............: avg=79.85µs  min=1.51µs  med=3.82µs   max=41.53ms  p(90)=5.35µs   p(95)=6.03µs  
     http_req_connecting............: avg=70.08µs  min=0s      med=0s       max=34.81ms  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=6.41s    min=2.27s   med=6.31s    max=8.26s    p(90)=6.98s    p(95)=7.07s   
       { expected_response:true }...: avg=6.41s    min=2.27s   med=6.31s    max=8.26s    p(90)=6.98s    p(95)=7.07s   
     http_req_failed................: 0.00%   ✓ 0         ✗ 28051
     http_req_receiving.............: avg=165.08µs min=35.18µs med=100.66µs max=172.92ms p(90)=136.76µs p(95)=154.27µs
     http_req_sending...............: avg=47.95µs  min=7.8µs   med=21.77µs  max=172.02ms p(90)=32.33µs  p(95)=36.26µs 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=6.41s    min=2.27s   med=6.31s    max=8.26s    p(90)=6.98s    p(95)=7.07s   
     http_reqs......................: 28051   46.575503/s
     iteration_duration.............: avg=6.43s    min=2.28s   med=6.33s    max=8.28s    p(90)=6.99s    p(95)=7.08s   
     iterations.....................: 28051   46.575503/s
     vus............................: 56      min=56      max=300
     vus_max........................: 300     min=300     max=300
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f27602ca-625a-42c8-8e75-7eaaa9413d00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b70140d0-4777-4925-1488-4982e0234f00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/825b039d-cc2d-4c28-1dd4-a6e0f3b5cc00/public" alt="HTTP Overview" />


  </details>