## Overview for: `scenarios/fed-v1-constants-vus-subgraphs-delay`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. All subgraphs have an intentional delay on replying, and this creates additional pressure on the gateway's memory. We are running a heavy load of concurrent VUs to measure response time and other stats, during stress. It measure things like memory usage, CPU usage, response times.


This scenario was running 100 VUs over 60s


### Comparison


| Gateway       | RPS ⬇️ |       Requests       |          Duration          |
| :------------ | :----: | :------------------: | :------------------------: |
| mesh          |   59   | 3656 total, 0 failed |  avg: 1660ms, p95: 2344ms  |
| apollo-router |   52   | 3200 total, 0 failed |  avg: 1900ms, p95: 2353ms  |
| apollo-server |   50   | 3103 total, 0 failed |  avg: 1950ms, p95: 2467ms  |
| wundergraph   |   23   | 1500 total, 0 failed |  avg: 4263ms, p95: 4368ms  |
| mercurius     |   4    | 300 total, 0 failed  | avg: 22947ms, p95: 26526ms |



<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 10968     ✗ 0    
     data_received..................: 18 MB   298 kB/s
     data_sent......................: 4.3 MB  71 kB/s
   ✓ expected_result................: 0.00%   ✓ 0         ✗ 0    
     http_req_blocked...............: avg=175.39µs min=1.4µs  med=3µs    max=17.4ms  p(90)=4.4µs   p(95)=13.6µs  
     http_req_connecting............: avg=164.47µs min=0s     med=0s     max=17.35ms p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=1.66s    min=1.32s  med=1.56s  max=3.16s   p(90)=1.97s   p(95)=2.34s   
       { expected_response:true }...: avg=1.66s    min=1.32s  med=1.56s  max=3.16s   p(90)=1.97s   p(95)=2.34s   
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 3656 
     http_req_receiving.............: avg=74.09µs  min=19.4µs med=71.4µs max=4.4ms   p(90)=94.85µs p(95)=103.73µs
     http_req_sending...............: avg=97.3µs   min=11µs   med=19.2µs max=15.93ms p(90)=34.95µs p(95)=40.52µs 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=1.65s    min=1.32s  med=1.56s  max=3.16s   p(90)=1.97s   p(95)=2.34s   
     http_reqs......................: 3656    59.522976/s
     iteration_duration.............: avg=1.66s    min=1.32s  med=1.57s  max=3.17s   p(90)=1.97s   p(95)=2.34s   
     iterations.....................: 3656    59.522976/s
   ✓ no_errors......................: 0.00%   ✓ 0         ✗ 0    
     vus............................: 31      min=31      max=100
     vus_max........................: 100     min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c74a47f8-187d-462f-d55a-2bb378710a00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/20c689a9-2692-4fd9-4f30-f9fd0d187500/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 9600      ✗ 0    
     data_received..................: 16 MB   260 kB/s
     data_sent......................: 3.8 MB  62 kB/s
   ✓ expected_result................: 0.00%   ✓ 0         ✗ 0    
     http_req_blocked...............: avg=478.71µs min=1.6µs  med=2.9µs  max=30.16ms p(90)=4.59µs  p(95)=20.21µs 
     http_req_connecting............: avg=459.95µs min=0s     med=0s     max=29.36ms p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=1.9s     min=1.75s  med=1.81s  max=3.39s   p(90)=2.05s   p(95)=2.35s   
       { expected_response:true }...: avg=1.9s     min=1.75s  med=1.81s  max=3.39s   p(90)=2.05s   p(95)=2.35s   
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 3200 
     http_req_receiving.............: avg=88.15µs  min=27.2µs med=67.1µs max=7.42ms  p(90)=115.1µs p(95)=139.84µs
     http_req_sending...............: avg=155.64µs min=9.8µs  med=18.8µs max=19.7ms  p(90)=45.3µs  p(95)=122.71µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=1.9s     min=1.75s  med=1.81s  max=3.39s   p(90)=2.05s   p(95)=2.35s   
     http_reqs......................: 3200    52.153559/s
     iteration_duration.............: avg=1.9s     min=1.75s  med=1.81s  max=3.41s   p(90)=2.05s   p(95)=2.35s   
     iterations.....................: 3200    52.153559/s
   ✓ no_errors......................: 0.00%   ✓ 0         ✗ 0    
     vus............................: 41      min=41      max=100
     vus_max........................: 100     min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2b631c7f-33a1-4dca-fa5c-83931b2d7e00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b330f940-c284-4fad-8a78-74eeae77db00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 3101 / ✗ 2
     ✓ expected_result

     checks.........................: 99.97% ✓ 9307      ✗ 2    
     data_received..................: 16 MB  259 kB/s
     data_sent......................: 3.7 MB 60 kB/s
   ✓ expected_result................: 0.00%  ✓ 0         ✗ 0    
     http_req_blocked...............: avg=823.79µs min=1.3µs  med=2.6µs  max=52.3ms  p(90)=3.5µs  p(95)=12.17µs
     http_req_connecting............: avg=789.47µs min=0s     med=0s     max=52.26ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=1.94s    min=1.76s  med=1.86s  max=3.68s   p(90)=2.09s  p(95)=2.46s  
       { expected_response:true }...: avg=1.94s    min=1.76s  med=1.86s  max=3.68s   p(90)=2.09s  p(95)=2.46s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 3103 
     http_req_receiving.............: avg=70.47µs  min=23.4µs med=64.6µs max=5.78ms  p(90)=83.7µs p(95)=89.09µs
     http_req_sending...............: avg=49.42µs  min=7.9µs  med=17.3µs max=7ms     p(90)=31.2µs p(95)=35.38µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=1.94s    min=1.76s  med=1.86s  max=3.68s   p(90)=2.09s  p(95)=2.46s  
     http_reqs......................: 3103   50.248247/s
     iteration_duration.............: avg=1.95s    min=1.76s  med=1.86s  max=3.71s   p(90)=2.09s  p(95)=2.46s  
     iterations.....................: 3103   50.248247/s
   ✓ no_errors......................: 0.00%  ✓ 0         ✗ 0    
     vus............................: 10     min=10      max=100
     vus_max........................: 100    min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/189b933e-4587-420b-03a1-d179813dc400/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c5f39a99-65c0-4a8c-fe1b-f4a37947e900/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 4500      ✗ 0    
     data_received..................: 7.5 MB  117 kB/s
     data_sent......................: 1.8 MB  28 kB/s
   ✓ expected_result................: 0.00%   ✓ 0         ✗ 0    
     http_req_blocked...............: avg=730.41µs min=1.1µs  med=2.2µs  max=55.2ms  p(90)=8.5µs    p(95)=2.13ms  
     http_req_connecting............: avg=674.54µs min=0s     med=0s     max=28.98ms p(90)=0s       p(95)=1.98ms  
     http_req_duration..............: avg=4.26s    min=4.17s  med=4.25s  max=4.43s   p(90)=4.29s    p(95)=4.36s   
       { expected_response:true }...: avg=4.26s    min=4.17s  med=4.25s  max=4.43s   p(90)=4.29s    p(95)=4.36s   
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 1500 
     http_req_receiving.............: avg=349.17µs min=19.4µs med=39.1µs max=29.97ms p(90)=273.14µs p(95)=520.83µs
     http_req_sending...............: avg=485.98µs min=7.3µs  med=12.9µs max=53.62ms p(90)=133.28µs p(95)=641.97µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=4.26s    min=4.17s  med=4.25s  max=4.43s   p(90)=4.29s    p(95)=4.36s   
     http_reqs......................: 1500    23.437247/s
     iteration_duration.............: avg=4.26s    min=4.17s  med=4.25s  max=4.44s   p(90)=4.29s    p(95)=4.38s   
     iterations.....................: 1500    23.437247/s
   ✓ no_errors......................: 0.00%   ✓ 0         ✗ 0    
     vus............................: 100     min=100     max=100
     vus_max........................: 100     min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/511b0c5e-9fb3-4505-e6bb-e775b44f2a00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f6dd9b3e-e8fd-40b6-1cea-6feb06659800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 900      ✗ 0    
     data_received..................: 1.5 MB  20 kB/s
     data_sent......................: 356 kB  4.8 kB/s
   ✓ expected_result................: 0.00%   ✓ 0        ✗ 0    
     http_req_blocked...............: avg=3.68ms  min=1.5µs   med=3.2µs   max=25.17ms  p(90)=21.62ms p(95)=23.74ms 
     http_req_connecting............: avg=3.53ms  min=0s      med=0s      max=25.15ms  p(90)=12.26ms p(95)=23.71ms 
     http_req_duration..............: avg=22.94s  min=19.07s  med=22.67s  max=28.9s    p(90)=26.11s  p(95)=26.52s  
       { expected_response:true }...: avg=22.94s  min=19.07s  med=22.67s  max=28.9s    p(90)=26.11s  p(95)=26.52s  
   ✓ http_req_failed................: 0.00%   ✓ 0        ✗ 300  
     http_req_receiving.............: avg=85.63µs min=28.29µs med=80.14µs max=196.79µs p(90)=123.4µs p(95)=133.01µs
     http_req_sending...............: avg=1.39ms  min=10.5µs  med=23.95µs max=21.24ms  p(90)=2.94ms  p(95)=7.57ms  
     http_req_tls_handshaking.......: avg=0s      min=0s      med=0s      max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=22.94s  min=19.07s  med=22.67s  max=28.87s   p(90)=26.09s  p(95)=26.5s   
     http_reqs......................: 300     4.052926/s
     iteration_duration.............: avg=22.95s  min=19.07s  med=22.67s  max=28.9s    p(90)=26.11s  p(95)=26.52s  
     iterations.....................: 300     4.052926/s
   ✓ no_errors......................: 0.00%   ✓ 0        ✗ 0    
     vus............................: 1       min=1      max=100
     vus_max........................: 100     min=100    max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/649bfd22-8aba-4237-9667-91e712ccae00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ed9c9cd1-e298-404c-74c3-43e8bfe18800/public" alt="HTTP Overview" />


  </details>