## Overview for: `scenarios/fed-v1-constants-vus-subgraphs-delay`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. All subgraphs have an intentional delay on replying, and this creates additional pressure on the gateway's memory. We are running a heavy load of concurrent VUs to measure response time and other stats, during stress. It measure things like memory usage, CPU usage, response times.


This scenario was running 400 VUs over 200s


### Comparison


| Gateway              | RPS ⬇️ |        Requests        |         Duration         |
| :------------------- | :----: | :--------------------: | :----------------------: |
| wundergraph          |  3949  | 790133 total, 0 failed |  avg: 95ms, p95: 176ms   |
| mesh-bun             |  502   | 100884 total, 0 failed | avg: 795ms, p95: 1310ms  |
| mesh                 |  363   | 72850 total, 0 failed  | avg: 1098ms, p95: 1333ms |
| apollo-router        |  165   | 33332 total, 0 failed  | avg: 2409ms, p95: 4056ms |
| apollo-server-node16 |  149   | 30236 total, 0 failed  | avg: 2658ms, p95: 3443ms |
| apollo-server        |  106   | 21507 total, 0 failed  | avg: 3743ms, p95: 5013ms |
| mesh-supergraph      |   75   | 15282 total, 0 failed  | avg: 5252ms, p95: 5617ms |
| mercurius            |   55   | 11445 total, 0 failed  | avg: 7110ms, p95: 7387ms |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 2370399     ✗ 0     
     data_received..................: 115 MB  573 kB/s
     data_sent......................: 938 MB  4.7 MB/s
     http_req_blocked...............: avg=21.23µs  min=699ns    med=1.3µs   max=176.69ms p(90)=2µs      p(95)=2.6µs   
     http_req_connecting............: avg=16.24µs  min=0s       med=0s      max=176.63ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=95.06ms  min=191.19µs med=87.55ms max=501.87ms p(90)=144.81ms p(95)=176.19ms
       { expected_response:true }...: avg=95.06ms  min=191.19µs med=87.55ms max=501.87ms p(90)=144.81ms p(95)=176.19ms
   ✓ http_req_failed................: 0.00%   ✓ 0           ✗ 790133
     http_req_receiving.............: avg=391.58µs min=8.6µs    med=16µs    max=278.34ms p(90)=57.89µs  p(95)=173.19µs
     http_req_sending...............: avg=142.11µs min=5µs      med=7.7µs   max=216.39ms p(90)=18.5µs   p(95)=80.99µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=94.53ms  min=170.69µs med=87.16ms max=501.85ms p(90)=143.6ms  p(95)=174.73ms
     http_reqs......................: 790133  3949.375665/s
     iteration_duration.............: avg=101.19ms min=255.59µs med=90.89ms max=664.85ms p(90)=156.72ms p(95)=192.2ms 
     iterations.....................: 790133  3949.375665/s
     vus............................: 400     min=400       max=400 
     vus_max........................: 400     min=400       max=400 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ecd76f3f-8cf7-4fcf-02cb-0f872a46b300/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/61bf4ba6-06b4-483d-95bc-7e291bb1d300/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/720d4e13-d40d-42d0-d628-549da7f4b500/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  0% — ✓ 0 / ✗ 100884
     ✓ valid response structure

     checks.........................: 66.66% ✓ 201768     ✗ 100884
     data_received..................: 96 MB  478 kB/s
     data_sent......................: 120 MB 596 kB/s
     http_req_blocked...............: avg=158.58µs min=800ns    med=1.6µs    max=111.52ms p(90)=2.4µs  p(95)=2.9µs   
     http_req_connecting............: avg=151.13µs min=0s       med=0s       max=75.84ms  p(90)=0s     p(95)=0s      
     http_req_duration..............: avg=794.63ms min=236.14ms med=751.18ms max=2.49s    p(90)=1.18s  p(95)=1.3s    
       { expected_response:true }...: avg=794.63ms min=236.14ms med=751.18ms max=2.49s    p(90)=1.18s  p(95)=1.3s    
   ✓ http_req_failed................: 0.00%  ✓ 0          ✗ 100884
     http_req_receiving.............: avg=177.69µs min=10.7µs   med=25.1µs   max=139.86ms p(90)=60.1µs p(95)=188.48µs
     http_req_sending...............: avg=73.36µs  min=5.8µs    med=10.3µs   max=241.75ms p(90)=19.9µs p(95)=82.07µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s       p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=794.38ms min=236.1ms  med=751.03ms max=2.49s    p(90)=1.18s  p(95)=1.3s    
     http_reqs......................: 100884 502.475742/s
     iteration_duration.............: avg=795.13ms min=236.3ms  med=751.41ms max=2.49s    p(90)=1.18s  p(95)=1.31s   
     iterations.....................: 100884 502.475742/s
     vus............................: 333    min=333      max=400 
     vus_max........................: 400    min=400      max=400 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/277da191-178b-4cc9-7d08-c1d356d1ed00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c23bb318-759a-4920-8ae9-20504145e400/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c290d8df-cdb2-48e1-ac42-327724455800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 218550     ✗ 0    
     data_received..................: 93 MB   464 kB/s
     data_sent......................: 87 MB   431 kB/s
     http_req_blocked...............: avg=519.46µs min=700ns    med=1.5µs  max=271.94ms p(90)=2.1µs  p(95)=2.7µs 
     http_req_connecting............: avg=507.01µs min=0s       med=0s     max=231.29ms p(90)=0s     p(95)=0s    
     http_req_duration..............: avg=1.09s    min=591.96ms med=1.07s  max=3.18s    p(90)=1.24s  p(95)=1.33s 
       { expected_response:true }...: avg=1.09s    min=591.96ms med=1.07s  max=3.18s    p(90)=1.24s  p(95)=1.33s 
   ✓ http_req_failed................: 0.00%   ✓ 0          ✗ 72850
     http_req_receiving.............: avg=71.61µs  min=11.8µs   med=20.5µs max=100.84ms p(90)=44.1µs p(95)=67.6µs
     http_req_sending...............: avg=157.13µs min=5.6µs    med=9µs    max=96.33ms  p(90)=19.3µs p(95)=56.6µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s     p(95)=0s    
     http_req_waiting...............: avg=1.09s    min=591.93ms med=1.07s  max=3.18s    p(90)=1.24s  p(95)=1.33s 
     http_reqs......................: 72850   363.427041/s
     iteration_duration.............: avg=1.09s    min=592.07ms med=1.07s  max=3.45s    p(90)=1.24s  p(95)=1.33s 
     iterations.....................: 72850   363.427041/s
     vus............................: 400     min=400      max=400
     vus_max........................: 400     min=400      max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5cd89033-76fc-4537-fab1-8732d30c4400/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e882e27e-8de9-430e-2abf-fedc7d62ae00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3e09dd97-c780-4886-c989-cbbb04dc1900/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 99996      ✗ 0    
     data_received..................: 168 MB  835 kB/s
     data_sent......................: 40 MB   196 kB/s
     http_req_blocked...............: avg=556.35µs min=1.2µs    med=2.4µs  max=125.33ms p(90)=3.5µs  p(95)=4.5µs 
     http_req_connecting............: avg=541.88µs min=0s       med=0s     max=125.3ms  p(90)=0s     p(95)=0s    
     http_req_duration..............: avg=2.4s     min=341.1ms  med=2.29s  max=8.79s    p(90)=3.68s  p(95)=4.05s 
       { expected_response:true }...: avg=2.4s     min=341.1ms  med=2.29s  max=8.79s    p(90)=3.68s  p(95)=4.05s 
   ✓ http_req_failed................: 0.00%   ✓ 0          ✗ 33332
     http_req_receiving.............: avg=63.01µs  min=24µs     med=55µs   max=19.1ms   p(90)=78.2µs p(95)=85.8µs
     http_req_sending...............: avg=163.5µs  min=9.2µs    med=15.1µs max=64.34ms  p(90)=30.1µs p(95)=34.5µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s     p(95)=0s    
     http_req_waiting...............: avg=2.4s     min=341.03ms med=2.29s  max=8.79s    p(90)=3.68s  p(95)=4.05s 
     http_reqs......................: 33332   165.348279/s
     iteration_duration.............: avg=2.41s    min=341.38ms med=2.29s  max=8.79s    p(90)=3.68s  p(95)=4.05s 
     iterations.....................: 33332   165.348279/s
     vus............................: 279     min=279      max=400
     vus_max........................: 400     min=400      max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4ffe81e6-21cd-4fc3-d0b8-d63338b49700/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0b96ab20-dd58-4106-b4ff-b30710b76b00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4f7ba3ba-5040-4bf7-c6ce-7e3015451a00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server-node16`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 90708      ✗ 0    
     data_received..................: 158 MB  784 kB/s
     data_sent......................: 36 MB   178 kB/s
     http_req_blocked...............: avg=876.52µs min=900ns  med=1.9µs  max=171.51ms p(90)=2.7µs  p(95)=3.3µs 
     http_req_connecting............: avg=866.01µs min=0s     med=0s     max=171.48ms p(90)=0s     p(95)=0s    
     http_req_duration..............: avg=2.65s    min=1.54s  med=2.51s  max=6.73s    p(90)=3.31s  p(95)=3.44s 
       { expected_response:true }...: avg=2.65s    min=1.54s  med=2.51s  max=6.73s    p(90)=3.31s  p(95)=3.44s 
   ✓ http_req_failed................: 0.00%   ✓ 0          ✗ 30236
     http_req_receiving.............: avg=54.97µs  min=17.1µs med=51.6µs max=9.02ms   p(90)=64.9µs p(95)=73.8µs
     http_req_sending...............: avg=478.16µs min=6µs    med=11.9µs max=114.39ms p(90)=25.1µs p(95)=28.1µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s     p(95)=0s    
     http_req_waiting...............: avg=2.65s    min=1.54s  med=2.51s  max=6.73s    p(90)=3.31s  p(95)=3.44s 
     http_reqs......................: 30236   149.998768/s
     iteration_duration.............: avg=2.65s    min=1.54s  med=2.51s  max=6.78s    p(90)=3.31s  p(95)=3.44s 
     iterations.....................: 30236   149.998768/s
     vus............................: 274     min=274      max=400
     vus_max........................: 400     min=400      max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f504beb6-deca-4d96-c08a-11da1f0cbe00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1a2ff013-d08c-4ce3-85ff-58ee5c750100/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f5afbb6c-812c-4e3b-b692-1a2f9801ed00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 64521      ✗ 0    
     data_received..................: 112 MB  555 kB/s
     data_sent......................: 26 MB   126 kB/s
     http_req_blocked...............: avg=749.23µs min=1.4µs  med=2.5µs  max=74.21ms p(90)=3.7µs  p(95)=5.1µs   
     http_req_connecting............: avg=740.34µs min=0s     med=0s     max=65.88ms p(90)=0s     p(95)=0s      
     http_req_duration..............: avg=3.74s    min=2.25s  med=3.53s  max=8.55s   p(90)=4.74s  p(95)=5.01s   
       { expected_response:true }...: avg=3.74s    min=2.25s  med=3.53s  max=8.55s   p(90)=4.74s  p(95)=5.01s   
   ✓ http_req_failed................: 0.00%   ✓ 0          ✗ 21507
     http_req_receiving.............: avg=74.24µs  min=22.8µs med=65.9µs max=22.43ms p(90)=93.4µs p(95)=105.57µs
     http_req_sending...............: avg=87.6µs   min=7.9µs  med=14.9µs max=14.37ms p(90)=31.1µs p(95)=36.97µs 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=3.74s    min=2.25s  med=3.53s  max=8.54s   p(90)=4.74s  p(95)=5.01s   
     http_reqs......................: 21507   106.326359/s
     iteration_duration.............: avg=3.74s    min=2.25s  med=3.53s  max=8.59s   p(90)=4.74s  p(95)=5.01s   
     iterations.....................: 21507   106.326359/s
     vus............................: 143     min=143      max=400
     vus_max........................: 400     min=400      max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/43ec9b11-8780-4ab6-1a6e-2479e926ac00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2f2fac27-44cc-4f45-9824-f1281df73800/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2bc0de5c-3235-40a9-c1dd-22a83e87e900/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 45846     ✗ 0    
     data_received..................: 77 MB   384 kB/s
     data_sent......................: 18 MB   90 kB/s
     http_req_blocked...............: avg=1.15ms   min=1.1µs  med=2.2µs  max=101.36ms p(90)=3.8µs  p(95)=8.2µs  
     http_req_connecting............: avg=1.13ms   min=0s     med=0s     max=101.3ms  p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=5.25s    min=1.62s  med=5.17s  max=9.64s    p(90)=5.49s  p(95)=5.61s  
       { expected_response:true }...: avg=5.25s    min=1.62s  med=5.17s  max=9.64s    p(90)=5.49s  p(95)=5.61s  
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 15282
     http_req_receiving.............: avg=81.99µs  min=20.4µs med=50.1µs max=54.78ms  p(90)=84.3µs p(95)=102.3µs
     http_req_sending...............: avg=316.15µs min=7.4µs  med=13.4µs max=39.06ms  p(90)=28.4µs p(95)=61.68µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=5.25s    min=1.62s  med=5.17s  max=9.63s    p(90)=5.49s  p(95)=5.61s  
     http_reqs......................: 15282   75.827704/s
     iteration_duration.............: avg=5.25s    min=1.62s  med=5.17s  max=9.69s    p(90)=5.49s  p(95)=5.61s  
     iterations.....................: 15282   75.827704/s
     vus............................: 192     min=192     max=400
     vus_max........................: 400     min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7b593a2f-65ed-4e3f-c93b-fd8cf0d34100/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3751f0a9-e3dd-43ea-591c-7797bcb20c00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/cfc77646-9a4c-4540-67e9-848e44d3ea00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 34335     ✗ 0    
     data_received..................: 52 MB   249 kB/s
     data_sent......................: 14 MB   66 kB/s
     http_req_blocked...............: avg=4.03ms   min=1.3µs  med=3.3µs  max=229.58ms p(90)=4.8µs   p(95)=17.5µs 
     http_req_connecting............: avg=3.96ms   min=0s     med=0s     max=229.03ms p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=7.1s     min=4.67s  med=7.15s  max=9.61s    p(90)=7.31s   p(95)=7.38s  
       { expected_response:true }...: avg=7.1s     min=4.67s  med=7.15s  max=9.61s    p(90)=7.31s   p(95)=7.38s  
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 11445
     http_req_receiving.............: avg=90.54µs  min=27.3µs med=82.4µs max=12.17ms  p(90)=105.9µs p(95)=117.9µs
     http_req_sending...............: avg=595.88µs min=10.7µs med=22.2µs max=90.04ms  p(90)=38.4µs  p(95)=52.18µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=7.1s     min=4.67s  med=7.15s  max=9.61s    p(90)=7.31s   p(95)=7.38s  
     http_reqs......................: 11445   55.259232/s
     iteration_duration.............: avg=7.11s    min=4.67s  med=7.15s  max=9.7s     p(90)=7.31s   p(95)=7.38s  
     iterations.....................: 11445   55.259232/s
     vus............................: 27      min=27      max=400
     vus_max........................: 400     min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a367b53d-047e-46e2-bf9c-2ec00567b100/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/27a01356-092d-4295-23df-ab017a0e1300/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ab41f6c4-003d-4dd4-1d40-0ec905275d00/public" alt="HTTP Overview" />


  </details>