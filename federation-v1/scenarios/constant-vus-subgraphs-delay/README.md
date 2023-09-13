## Overview for: `constant-vus-subgraphs-delay`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. It's being executed with a constant amount of VUs over a fixed amount of time. It measure things like memory usage, CPU usage, average RPS. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was running 300 VUs over 700s


### Comparison


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/95a55adf-51f8-47b9-abd6-8ea43359c700/public" alt="Comparison" />


| Gateway         | RPS ⬇️ |        Requests        |          Duration          | Notes |
| :-------------- | :----: | :--------------------: | :------------------------: | :---- |
| wundergraph     |  188   | 132500 total, 0 failed |  avg: 1331ms, p95: 2074ms  | ✅     |
| apollo-router   |  185   | 130329 total, 0 failed |  avg: 1124ms, p95: 2333ms  | ✅     |
| mesh-bun        |   88   | 62417 total, 0 failed  |  avg: 3341ms, p95: 3823ms  | ✅     |
| mesh-supergraph |   78   | 55433 total, 0 failed  |  avg: 3759ms, p95: 4601ms  | ✅     |
| mesh            |   71   | 50405 total, 0 failed  |  avg: 4139ms, p95: 4852ms  | ✅     |
| apollo-server   |   65   | 45866 total, 0 failed  |  avg: 4582ms, p95: 6022ms  | ✅     |
| mercurius       |   12   |  9072 total, 0 failed  | avg: 23520ms, p95: 24477ms | ✅     |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 397500     ✗ 0     
     data_received..................: 12 GB   17 MB/s
     data_sent......................: 157 MB  224 kB/s
     http_req_blocked...............: avg=112.64µs min=1.36µs   med=3.41µs  max=677ms   p(90)=5.63µs   p(95)=6.58µs  
     http_req_connecting............: avg=8.47µs   min=0s       med=0s      max=32.36ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=1.33s    min=552.11ms med=1.26s   max=4.22s   p(90)=1.79s    p(95)=2.07s   
       { expected_response:true }...: avg=1.33s    min=552.11ms med=1.26s   max=4.22s   p(90)=1.79s    p(95)=2.07s   
     http_req_failed................: 0.00%   ✓ 0          ✗ 132500
     http_req_receiving.............: avg=139.28ms min=27.13µs  med=90.43µs max=3.14s   p(90)=551.09ms p(95)=892.41ms
     http_req_sending...............: avg=7.72ms   min=7.72µs   med=15.22µs max=1.85s   p(90)=35.73µs  p(95)=150.28µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=1.18s    min=552.06ms med=1.17s   max=2.43s   p(90)=1.44s    p(95)=1.52s   
     http_reqs......................: 132500  188.946151/s
     iteration_duration.............: avg=1.58s    min=573.7ms  med=1.46s   max=6.31s   p(90)=2.31s    p(95)=2.59s   
     iterations.....................: 132500  188.946151/s
     vus............................: 152     min=152      max=300 
     vus_max........................: 300     min=300      max=300 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/85425190-7fe0-4a61-48ca-53d0b6117400/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b862ad15-d8dd-439d-486f-dcbcc3882e00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/932e1827-bd66-4daf-9775-e2d988fea300/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 390987     ✗ 0     
     data_received..................: 11 GB   16 MB/s
     data_sent......................: 155 MB  221 kB/s
     http_req_blocked...............: avg=213.63µs min=1.2µs    med=3µs      max=1.26s    p(90)=4.97µs  p(95)=6µs   
     http_req_connecting............: avg=65.91µs  min=0s       med=0s       max=867.74ms p(90)=0s      p(95)=0s    
     http_req_duration..............: avg=1.12s    min=272ms    med=958.34ms max=8.39s    p(90)=1.91s   p(95)=2.33s 
       { expected_response:true }...: avg=1.12s    min=272ms    med=958.34ms max=8.39s    p(90)=1.91s   p(95)=2.33s 
     http_req_failed................: 0.00%   ✓ 0          ✗ 130329
     http_req_receiving.............: avg=263.79ms min=24.94µs  med=73.18µs  max=6.43s    p(90)=1.07s   p(95)=1.51s 
     http_req_sending...............: avg=14.45ms  min=7.44µs   med=13.85µs  max=4.25s    p(90)=35.64µs p(95)=3.89ms
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s       p(90)=0s      p(95)=0s    
     http_req_waiting...............: avg=845.36ms min=271.93ms med=782.02ms max=2.69s    p(90)=1.23s   p(95)=1.34s 
     http_reqs......................: 130329  185.915776/s
     iteration_duration.............: avg=1.61s    min=283.05ms med=1.36s    max=11.03s   p(90)=2.91s   p(95)=3.46s 
     iterations.....................: 130329  185.915776/s
     vus............................: 42      min=42       max=300 
     vus_max........................: 300     min=300      max=300 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2828dcc0-8b34-48e6-0a17-17976b780e00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ad83cf20-82ef-4cb7-edb3-9978d4905b00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/fd56f30e-111f-4f07-3b10-20e756b7be00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 187251    ✗ 0    
     data_received..................: 5.5 GB  7.8 MB/s
     data_sent......................: 74 MB   106 kB/s
     http_req_blocked...............: avg=36.99µs  min=1.37µs  med=3.02µs  max=52.37ms  p(90)=4.96µs   p(95)=5.98µs 
     http_req_connecting............: avg=28.16µs  min=0s      med=0s      max=28.94ms  p(90)=0s       p(95)=0s     
     http_req_duration..............: avg=3.34s    min=1.39s   med=3.26s   max=6.97s    p(90)=3.64s    p(95)=3.82s  
       { expected_response:true }...: avg=3.34s    min=1.39s   med=3.26s   max=6.97s    p(90)=3.64s    p(95)=3.82s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 62417
     http_req_receiving.............: avg=6.48ms   min=28.83µs med=83.69µs max=1.64s    p(90)=284.47µs p(95)=1.3ms  
     http_req_sending...............: avg=444.42µs min=7.99µs  med=14.1µs  max=411.82ms p(90)=30.09µs  p(95)=67.98µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s       p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=3.33s    min=1.39s   med=3.25s   max=6.97s    p(90)=3.63s    p(95)=3.8s   
     http_reqs......................: 62417   88.882178/s
     iteration_duration.............: avg=3.36s    min=1.41s   med=3.28s   max=6.98s    p(90)=3.68s    p(95)=3.86s  
     iterations.....................: 62417   88.882178/s
     vus............................: 10      min=10      max=300
     vus_max........................: 300     min=300     max=300
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a520fc32-9513-4232-8239-79eb0da05b00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/07edd787-0d54-4ae0-2c2b-a4cde28d4b00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/50f10498-be90-4304-d735-40f48a8bb600/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 166299    ✗ 0    
     data_received..................: 4.9 GB  6.9 MB/s
     data_sent......................: 66 MB   94 kB/s
     http_req_blocked...............: avg=49.9µs   min=1.39µs  med=4.2µs   max=75.01ms  p(90)=6.21µs p(95)=7.08µs 
     http_req_connecting............: avg=33.28µs  min=0s      med=0s      max=27.98ms  p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=3.75s    min=2.32s   med=3.71s   max=8.06s    p(90)=4.41s  p(95)=4.6s   
       { expected_response:true }...: avg=3.75s    min=2.32s   med=3.71s   max=8.06s    p(90)=4.41s  p(95)=4.6s   
     http_req_failed................: 0.00%   ✓ 0         ✗ 55433
     http_req_receiving.............: avg=4.72ms   min=31.14µs med=96.63µs max=870.25ms p(90)=2.43ms p(95)=12.61ms
     http_req_sending...............: avg=519.37µs min=7.91µs  med=22.29µs max=425.79ms p(90)=38.8µs p(95)=78.59µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s       p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=3.75s    min=2.32s   med=3.7s    max=8.06s    p(90)=4.4s   p(95)=4.59s  
     http_reqs......................: 55433   78.843312/s
     iteration_duration.............: avg=3.79s    min=2.33s   med=3.75s   max=8.07s    p(90)=4.46s  p(95)=4.65s  
     iterations.....................: 55433   78.843312/s
     vus............................: 56      min=56      max=300
     vus_max........................: 300     min=300     max=300
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4461ac90-cdcc-4b03-a94f-59eaf0202d00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d79aa3e4-cd89-47d9-5cae-52ae5632ba00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6f428e4a-bddb-48a9-065f-a280ee0b3c00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 151215    ✗ 0    
     data_received..................: 4.4 GB  6.3 MB/s
     data_sent......................: 60 MB   85 kB/s
     http_req_blocked...............: avg=36.04µs  min=1.33µs  med=3.54µs  max=70.49ms  p(90)=5.38µs  p(95)=6.31µs 
     http_req_connecting............: avg=23.65µs  min=0s      med=0s      max=31.07ms  p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=4.13s    min=2.01s   med=4.1s    max=7.71s    p(90)=4.66s   p(95)=4.85s  
       { expected_response:true }...: avg=4.13s    min=2.01s   med=4.1s    max=7.71s    p(90)=4.66s   p(95)=4.85s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 50405
     http_req_receiving.............: avg=4.31ms   min=31.91µs med=93.9µs  max=632.44ms p(90)=2.52ms  p(95)=12.46ms
     http_req_sending...............: avg=443.56µs min=7.79µs  med=17.28µs max=547.12ms p(90)=32.62µs p(95)=64.32µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s       p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=4.13s    min=1.99s   med=4.1s    max=7.71s    p(90)=4.66s   p(95)=4.84s  
     http_reqs......................: 50405   71.695698/s
     iteration_duration.............: avg=4.17s    min=2.02s   med=4.14s   max=7.73s    p(90)=4.71s   p(95)=4.9s   
     iterations.....................: 50405   71.695698/s
     vus............................: 30      min=30      max=300
     vus_max........................: 300     min=300     max=300
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/80ccddb7-216f-43ee-72bd-d53024d8ba00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2f6f4c43-61f9-4049-c7bc-908bf675e900/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/75219e7f-f6ad-431e-74ab-1133b336cc00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 137598   ✗ 0    
     data_received..................: 4.0 GB  5.7 MB/s
     data_sent......................: 54 MB   77 kB/s
     http_req_blocked...............: avg=11.65µs  min=1.35µs  med=3µs     max=37.64ms  p(90)=4.5µs    p(95)=5.17µs 
     http_req_connecting............: avg=6.06µs   min=0s      med=0s      max=21.95ms  p(90)=0s       p(95)=0s     
     http_req_duration..............: avg=4.58s    min=2.52s   med=4.55s   max=9.17s    p(90)=5.65s    p(95)=6.02s  
       { expected_response:true }...: avg=4.58s    min=2.52s   med=4.55s   max=9.17s    p(90)=5.65s    p(95)=6.02s  
     http_req_failed................: 0.00%   ✓ 0        ✗ 45866
     http_req_receiving.............: avg=634.54µs min=36.14µs med=89.58µs max=304.48ms p(90)=149.25µs p(95)=506.8µs
     http_req_sending...............: avg=91.43µs  min=7.55µs  med=15µs    max=104.51ms p(90)=27.4µs   p(95)=35.81µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s       p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=4.58s    min=2.52s   med=4.55s   max=9.17s    p(90)=5.65s    p(95)=6.02s  
     http_reqs......................: 45866   65.13151/s
     iteration_duration.............: avg=4.59s    min=2.52s   med=4.57s   max=9.35s    p(90)=5.68s    p(95)=6.04s  
     iterations.....................: 45866   65.13151/s
     vus............................: 44      min=44     max=300
     vus_max........................: 300     min=300    max=300
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/885e0132-5ed2-44ce-4f33-66ea2db79b00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/90c7a6d3-0521-4c75-4a46-9898433fe700/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/585d8783-ae0a-4e97-7aff-0b645a4dd800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 27216     ✗ 0    
     data_received..................: 796 MB  1.1 MB/s
     data_sent......................: 11 MB   15 kB/s
     http_req_blocked...............: avg=65.93µs  min=1.45µs  med=3.57µs   max=35.79ms p(90)=4.97µs  p(95)=5.89µs  
     http_req_connecting............: avg=48.87µs  min=0s      med=0s       max=22.44ms p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=23.51s   min=7.21s   med=23.81s   max=26.18s  p(90)=24.33s  p(95)=24.47s  
       { expected_response:true }...: avg=23.51s   min=7.21s   med=23.81s   max=26.18s  p(90)=24.33s  p(95)=24.47s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 9072 
     http_req_receiving.............: avg=128.64µs min=41.67µs med=103.37µs max=20.73ms p(90)=139.4µs p(95)=154.63µs
     http_req_sending...............: avg=219.25µs min=8.42µs  med=20.12µs  max=36.96ms p(90)=27.81µs p(95)=30.98µs 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=23.51s   min=7.21s   med=23.81s   max=26.18s  p(90)=24.33s  p(95)=24.47s  
     http_reqs......................: 9072    12.551603/s
     iteration_duration.............: avg=23.52s   min=7.22s   med=23.82s   max=26.18s  p(90)=24.34s  p(95)=24.48s  
     iterations.....................: 9072    12.551603/s
     vus............................: 16      min=16      max=300
     vus_max........................: 300     min=300     max=300
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/95cee8c9-cc94-46d9-6086-21b20e63c400/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/54fb1733-e468-429f-d2a8-d9d9bcb3da00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9b440db9-a86e-43ba-62c7-615b6af65400/public" alt="HTTP Overview" />


  </details>