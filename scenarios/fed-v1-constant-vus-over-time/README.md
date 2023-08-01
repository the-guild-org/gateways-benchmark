## Overview for: `scenarios/fed-v1-constant-vus-over-time`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. It's being executed with a constant amount of VUs over a fixed amount of time. It measure things like memory usage, CPU usage, average RPS. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was running 100 VUs over 60s


### Comparison


| Gateway                             | RPS ⬇️ |       Requests        |         Duration         |
| :---------------------------------- | :----: | :-------------------: | :----------------------: |
| wundergraph                         |  492   | 29623 total, 0 failed |  avg: 200ms, p95: 326ms  |
| apollo-router                       |  120   | 7337 total, 0 failed  | avg: 824ms, p95: 1293ms  |
| mesh-supergraph                     |  102   | 6184 total, 0 failed  | avg: 975ms, p95: 1502ms  |
| mesh                                |   93   | 5683 total, 0 failed  | avg: 1063ms, p95: 1670ms |
| stitching-federation-with-yoga-bun  |   89   | 5437 total, 0 failed  | avg: 1115ms, p95: 1642ms |
| mercurius                           |   77   | 4651 total, 0 failed  | avg: 1293ms, p95: 1574ms |
| apollo-gateway-with-yoga            |   67   | 4089 total, 0 failed  | avg: 1481ms, p95: 1931ms |
| apollo-server                       |   59   | 3654 total, 0 failed  | avg: 1661ms, p95: 1918ms |
| stitching-federation-with-yoga-deno |   52   | 3181 total, 0 failed  | avg: 1903ms, p95: 2548ms |
| stitching-federation-with-yoga      |   47   | 2900 total, 0 failed  | avg: 2088ms, p95: 2958ms |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 88869      ✗ 0    
     data_received..................: 148 MB  2.5 MB/s
     data_sent......................: 35 MB   585 kB/s
     http_req_blocked...............: avg=22.03µs  min=1.3µs   med=2.6µs    max=12.03ms  p(90)=4.1µs    p(95)=4.9µs   
     http_req_connecting............: avg=15.17µs  min=0s      med=0s       max=10.86ms  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=200.48ms min=38.83ms med=189.28ms max=614.77ms p(90)=289.33ms p(95)=326.13ms
       { expected_response:true }...: avg=200.48ms min=38.83ms med=189.28ms max=614.77ms p(90)=289.33ms p(95)=326.13ms
   ✓ http_req_failed................: 0.00%   ✓ 0          ✗ 29623
     http_req_receiving.............: avg=1.64ms   min=21.7µs  med=46.4µs   max=207.19ms p(90)=339.24µs p(95)=3.94ms  
     http_req_sending...............: avg=508.19µs min=7.1µs   med=14.3µs   max=362.49ms p(90)=30.7µs   p(95)=143.78µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=198.32ms min=38.62ms med=187.55ms max=592.54ms p(90)=285.18ms p(95)=320.38ms
     http_reqs......................: 29623   492.995359/s
     iteration_duration.............: avg=202.62ms min=39.49ms med=191.16ms max=671.55ms p(90)=292.51ms p(95)=329.57ms
     iterations.....................: 29623   492.995359/s
     vus............................: 100     min=100      max=100
     vus_max........................: 100     min=100      max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9b5b3b9f-0b90-4cd4-0402-d376b92e8500/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9034858b-82b6-433a-1cd1-3ffd0524ca00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 22011      ✗ 0    
     data_received..................: 37 MB   602 kB/s
     data_sent......................: 8.7 MB  143 kB/s
     http_req_blocked...............: avg=451.62µs min=1.1µs    med=2.29µs   max=81.05ms p(90)=3.3µs   p(95)=3.9µs  
     http_req_connecting............: avg=424.83µs min=0s       med=0s       max=81.02ms p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=823.73ms min=125.21ms med=770ms    max=3.75s   p(90)=1.08s   p(95)=1.29s  
       { expected_response:true }...: avg=823.73ms min=125.21ms med=770ms    max=3.75s   p(90)=1.08s   p(95)=1.29s  
   ✓ http_req_failed................: 0.00%   ✓ 0          ✗ 7337 
     http_req_receiving.............: avg=50.12µs  min=17.1µs   med=42.5µs   max=4.28ms  p(90)=65.53µs p(95)=73.09µs
     http_req_sending...............: avg=503.38µs min=6.6µs    med=13.4µs   max=70.5ms  p(90)=26.6µs  p(95)=30.6µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s      p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=823.17ms min=125.13ms med=769.94ms max=3.72s   p(90)=1.08s   p(95)=1.29s  
     http_reqs......................: 7337    120.800088/s
     iteration_duration.............: avg=824.84ms min=125.81ms med=770.71ms max=3.79s   p(90)=1.08s   p(95)=1.29s  
     iterations.....................: 7337    120.800088/s
     vus............................: 100     min=100      max=100
     vus_max........................: 100     min=100      max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/293b765b-604c-4c66-b017-494081f8f100/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/04feac0e-a8ff-44c1-814c-cdc00e0d0900/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 6184

     checks.........................: 66.66% ✓ 12368      ✗ 6184 
     data_received..................: 31 MB  515 kB/s
     data_sent......................: 7.3 MB 121 kB/s
     http_req_blocked...............: avg=32.13µs  min=1µs      med=2.1µs    max=7.51ms  p(90)=3.1µs   p(95)=3.7µs  
     http_req_connecting............: avg=27.96µs  min=0s       med=0s       max=7.47ms  p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=975.14ms min=434.09ms med=919.89ms max=2.55s   p(90)=1.26s   p(95)=1.5s   
       { expected_response:true }...: avg=975.14ms min=434.09ms med=919.89ms max=2.55s   p(90)=1.26s   p(95)=1.5s   
   ✓ http_req_failed................: 0.00%  ✓ 0          ✗ 6184 
     http_req_receiving.............: avg=55.65µs  min=21.5µs   med=48µs     max=22.69ms p(90)=70.5µs  p(95)=79.3µs 
     http_req_sending...............: avg=50.83µs  min=8.4µs    med=12.4µs   max=49.16ms p(90)=23.57µs p(95)=29.38µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s      p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=975.03ms min=434.05ms med=919.82ms max=2.55s   p(90)=1.26s   p(95)=1.5s   
     http_reqs......................: 6184   102.279607/s
     iteration_duration.............: avg=975.52ms min=434.36ms med=920.3ms  max=2.55s   p(90)=1.26s   p(95)=1.5s   
     iterations.....................: 6184   102.279607/s
     vus............................: 100    min=100      max=100
     vus_max........................: 100    min=100      max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8ef76318-7b55-44d2-05bd-429f7c750a00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/954e9103-2eac-4964-e34f-30dac2833800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 5682 / ✗ 1
     ✗ valid response structure
      ↳  99% — ✓ 5682 / ✗ 1

     checks.........................: 99.98% ✓ 17047     ✗ 2    
     data_received..................: 28 MB  469 kB/s
     data_sent......................: 6.7 MB 111 kB/s
     http_req_blocked...............: avg=26.54µs min=1µs      med=2.1µs  max=7.43ms  p(90)=3.2µs   p(95)=6µs   
     http_req_connecting............: avg=21.55µs min=0s       med=0s     max=5.34ms  p(90)=0s      p(95)=0s    
     http_req_duration..............: avg=1.06s   min=513.88ms med=1.01s  max=2.66s   p(90)=1.35s   p(95)=1.67s 
       { expected_response:true }...: avg=1.06s   min=513.88ms med=1.01s  max=2.66s   p(90)=1.35s   p(95)=1.67s 
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 5683 
     http_req_receiving.............: avg=57.54µs min=18.1µs   med=48.8µs max=8.12ms  p(90)=69.59µs p(95)=78µs  
     http_req_sending...............: avg=47.93µs min=6.7µs    med=12.8µs max=13.08ms p(90)=26.5µs  p(95)=31.8µs
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s     max=0s      p(90)=0s      p(95)=0s    
     http_req_waiting...............: avg=1.06s   min=513.83ms med=1.01s  max=2.66s   p(90)=1.35s   p(95)=1.67s 
     http_reqs......................: 5683   93.776994/s
     iteration_duration.............: avg=1.06s   min=514.45ms med=1.01s  max=2.66s   p(90)=1.35s   p(95)=1.67s 
     iterations.....................: 5683   93.776994/s
     vus............................: 100    min=100     max=100
     vus_max........................: 100    min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/87419561-1d29-45e9-705d-ed6adaa91400/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/55a5ce3e-7b53-403b-df63-f6d20157fb00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 16311     ✗ 0    
     data_received..................: 27 MB   446 kB/s
     data_sent......................: 6.5 MB  106 kB/s
     http_req_blocked...............: avg=51.01µs  min=1.6µs    med=2.6µs  max=7.14ms  p(90)=4.2µs  p(95)=10.84µs 
     http_req_connecting............: avg=45.49µs  min=0s       med=0s     max=7.1ms   p(90)=0s     p(95)=0s      
     http_req_duration..............: avg=1.11s    min=386.23ms med=1.05s  max=2.77s   p(90)=1.44s  p(95)=1.64s   
       { expected_response:true }...: avg=1.11s    min=386.23ms med=1.05s  max=2.77s   p(90)=1.44s  p(95)=1.64s   
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 5437 
     http_req_receiving.............: avg=91.75µs  min=21.1µs   med=49.8µs max=18.28ms p(90)=79µs   p(95)=100.5µs 
     http_req_sending...............: avg=162.82µs min=7.3µs    med=14.6µs max=21.82ms p(90)=34.3µs p(95)=149.06µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=1.11s    min=385.99ms med=1.05s  max=2.77s   p(90)=1.44s  p(95)=1.64s   
     http_reqs......................: 5437    89.451098/s
     iteration_duration.............: avg=1.11s    min=391.15ms med=1.05s  max=2.78s   p(90)=1.44s  p(95)=1.64s   
     iterations.....................: 5437    89.451098/s
     vus............................: 100     min=100     max=100
     vus_max........................: 100     min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9ad19191-4b59-490a-6908-e4cb29064300/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/11a09f71-bf02-4cbf-dead-39f1b3f7f100/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 13953     ✗ 0    
     data_received..................: 23 MB   388 kB/s
     data_sent......................: 5.5 MB  91 kB/s
     http_req_blocked...............: avg=300.65µs min=1.1µs    med=2.7µs  max=32.56ms p(90)=4.3µs  p(95)=14.25µs
     http_req_connecting............: avg=292.7µs  min=0s       med=0s     max=32.53ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=1.29s    min=370.72ms med=1.23s  max=4.3s    p(90)=1.46s  p(95)=1.57s  
       { expected_response:true }...: avg=1.29s    min=370.72ms med=1.23s  max=4.3s    p(90)=1.46s  p(95)=1.57s  
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 4651 
     http_req_receiving.............: avg=72.11µs  min=24.7µs   med=58.8µs max=19.27ms p(90)=82.2µs p(95)=89.55µs
     http_req_sending...............: avg=49.79µs  min=7.8µs    med=15.7µs max=13.77ms p(90)=30.6µs p(95)=44.05µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=1.29s    min=370.65ms med=1.23s  max=4.3s    p(90)=1.46s  p(95)=1.57s  
     http_reqs......................: 4651    77.039254/s
     iteration_duration.............: avg=1.29s    min=371.27ms med=1.24s  max=4.31s   p(90)=1.46s  p(95)=1.57s  
     iterations.....................: 4651    77.039254/s
     vus............................: 100     min=100     max=100
     vus_max........................: 100     min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/530b07a8-d170-4947-7456-c59b8dcc1e00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/31f9fe9e-9864-4ce7-c747-be3e052dc000/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 12267     ✗ 0    
     data_received..................: 20 MB   336 kB/s
     data_sent......................: 4.9 MB  80 kB/s
     http_req_blocked...............: avg=107.93µs min=1µs      med=2.29µs max=18.73ms p(90)=3.4µs   p(95)=7.81µs 
     http_req_connecting............: avg=97.73µs  min=0s       med=0s     max=11.63ms p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=1.48s    min=951.92ms med=1.4s   max=3.48s   p(90)=1.72s   p(95)=1.93s  
       { expected_response:true }...: avg=1.48s    min=951.92ms med=1.4s   max=3.48s   p(90)=1.72s   p(95)=1.93s  
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 4089 
     http_req_receiving.............: avg=55.76µs  min=18µs     med=43.7µs max=11.23ms p(90)=74.89µs p(95)=82.19µs
     http_req_sending...............: avg=56.62µs  min=7.9µs    med=13.6µs max=11.59ms p(90)=28.32µs p(95)=79.71µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=1.48s    min=951.87ms med=1.4s   max=3.48s   p(90)=1.72s   p(95)=1.93s  
     http_reqs......................: 4089    67.184248/s
     iteration_duration.............: avg=1.48s    min=952.46ms med=1.4s   max=3.49s   p(90)=1.72s   p(95)=1.93s  
     iterations.....................: 4089    67.184248/s
     vus............................: 100     min=100     max=100
     vus_max........................: 100     min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4f7fda07-e853-477b-16bf-83e173a33c00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/45fd1c04-642f-44f5-ac53-da4e652a5000/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 3653 / ✗ 1
     ✗ valid response structure
      ↳  99% — ✓ 3653 / ✗ 1

     checks.........................: 99.98% ✓ 10960     ✗ 2    
     data_received..................: 19 MB  308 kB/s
     data_sent......................: 4.3 MB 71 kB/s
     http_req_blocked...............: avg=100.77µs min=1.6µs    med=2.5µs  max=11.8ms  p(90)=4.1µs  p(95)=15.33µs
     http_req_connecting............: avg=96.17µs  min=0s       med=0s     max=11.77ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=1.66s    min=499.09ms med=1.53s  max=19.93s  p(90)=1.74s  p(95)=1.91s  
       { expected_response:true }...: avg=1.66s    min=499.09ms med=1.53s  max=19.93s  p(90)=1.74s  p(95)=1.91s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 3654 
     http_req_receiving.............: avg=59.12µs  min=22.7µs   med=56.4µs max=3.13ms  p(90)=77.6µs p(95)=85.83µs
     http_req_sending...............: avg=43.04µs  min=10µs     med=13.8µs max=11.7ms  p(90)=28µs   p(95)=33.63µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=1.66s    min=498.98ms med=1.53s  max=19.93s  p(90)=1.74s  p(95)=1.91s  
     http_reqs......................: 3654   59.792819/s
     iteration_duration.............: avg=1.66s    min=499.85ms med=1.53s  max=19.93s  p(90)=1.74s  p(95)=1.91s  
     iterations.....................: 3654   59.792819/s
     vus............................: 41     min=41      max=100
     vus_max........................: 100    min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/47ae0283-6e4b-4fee-65cf-1ffdf1b04500/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9939c188-608f-48fc-f931-7085affaf600/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-deno`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 3177 / ✗ 4
     ✗ valid response structure
      ↳  99% — ✓ 3177 / ✗ 4

     checks.........................: 99.91% ✓ 9535      ✗ 8    
     data_received..................: 16 MB  262 kB/s
     data_sent......................: 3.8 MB 62 kB/s
     http_req_blocked...............: avg=251.41µs min=1.3µs    med=2.9µs  max=29.07ms p(90)=4.89µs  p(95)=23.2µs 
     http_req_connecting............: avg=241.26µs min=0s       med=0s     max=28.79ms p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=1.9s     min=921.47ms med=1.82s  max=3.15s   p(90)=2.25s   p(95)=2.54s  
       { expected_response:true }...: avg=1.9s     min=921.47ms med=1.82s  max=3.15s   p(90)=2.25s   p(95)=2.54s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 3181 
     http_req_receiving.............: avg=155.38µs min=24.2µs   med=51.1µs max=38.83ms p(90)=141.1µs p(95)=190.4µs
     http_req_sending...............: avg=133.49µs min=9µs      med=17.3µs max=31.33ms p(90)=104.8µs p(95)=217.1µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=1.9s     min=921.43ms med=1.82s  max=3.14s   p(90)=2.25s   p(95)=2.54s  
     http_reqs......................: 3181   52.214517/s
     iteration_duration.............: avg=1.9s     min=922.14ms med=1.83s  max=3.16s   p(90)=2.25s   p(95)=2.55s  
     iterations.....................: 3181   52.214517/s
     vus............................: 12     min=12      max=100
     vus_max........................: 100    min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ae9dc7bc-178d-40c1-5cbf-4746446c2100/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d98c82cd-6823-4225-949f-eba45769be00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 2894 / ✗ 6
     ✗ valid response structure
      ↳  99% — ✓ 2894 / ✗ 6

     checks.........................: 99.86% ✓ 8688    ✗ 12   
     data_received..................: 15 MB  238 kB/s
     data_sent......................: 3.4 MB 56 kB/s
     http_req_blocked...............: avg=244.36µs min=1.3µs  med=2.8µs  max=17.86ms p(90)=4.7µs   p(95)=25.5µs  
     http_req_connecting............: avg=234.75µs min=0s     med=0s     max=17.66ms p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=2.08s    min=1.17s  med=1.97s  max=4.26s   p(90)=2.49s   p(95)=2.95s   
       { expected_response:true }...: avg=2.08s    min=1.17s  med=1.97s  max=4.26s   p(90)=2.49s   p(95)=2.95s   
   ✓ http_req_failed................: 0.00%  ✓ 0       ✗ 2900 
     http_req_receiving.............: avg=75.66µs  min=26.8µs med=59µs   max=7.27ms  p(90)=104.4µs p(95)=132.02µs
     http_req_sending...............: avg=84.62µs  min=11.6µs med=16.7µs max=18.97ms p(90)=44.3µs  p(95)=124.28µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=2.08s    min=1.17s  med=1.97s  max=4.26s   p(90)=2.49s   p(95)=2.95s   
     http_reqs......................: 2900   47.4967/s
     iteration_duration.............: avg=2.08s    min=1.18s  med=1.97s  max=4.26s   p(90)=2.49s   p(95)=2.96s   
     iterations.....................: 2900   47.4967/s
     vus............................: 28     min=28    max=100
     vus_max........................: 100    min=100   max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3b3e7f2c-6a30-4e30-c51a-3a2144742000/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0c2ce624-b30c-4236-1b83-bc2656ed2400/public" alt="HTTP Overview" />


  </details>