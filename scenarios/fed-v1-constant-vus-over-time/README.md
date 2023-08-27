## Overview for: `scenarios/fed-v1-constant-vus-over-time`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. It's being executed with a constant amount of VUs over a fixed amount of time. It measure things like memory usage, CPU usage, average RPS. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was running 400 VUs over 200s


### Comparison


| Gateway                             | RPS ⬇️ |        Requests         |         Duration          |
| :---------------------------------- | :----: | :---------------------: | :-----------------------: |
| wundergraph                         |  843   | 169008 total, 0 failed  |  avg: 469ms, p95: 689ms   |
| apollo-router                       |  125   |  25420 total, 0 failed  | avg: 3168ms, p95: 4517ms  |
| stitching-federation-with-yoga-bun  |  116   |  23600 total, 0 failed  | avg: 3430ms, p95: 5569ms  |
| stitching-federation-with-yoga-uws  |   84   |  17069 total, 0 failed  | avg: 4722ms, p95: 8090ms  |
| stitching-federation-with-yoga-deno |   80   |  16389 total, 0 failed  | avg: 4916ms, p95: 5900ms  |
| mesh                                |   79   |  16004 total, 0 failed  | avg: 5036ms, p95: 6550ms  |
| apollo-gateway-with-yoga-uws        |   67   |  13722 total, 0 failed  | avg: 5892ms, p95: 11969ms |
| mercurius                           |   64   |  13124 total, 0 failed  | avg: 6122ms, p95: 7196ms  |
| mesh-supergraph                     |   64   |  13171 total, 0 failed  | avg: 6122ms, p95: 8067ms  |
| stitching-federation-with-yoga      |   62   | 12719 total, 69 failed  | avg: 6350ms, p95: 10705ms |
| apollo-server-node16                |   54   |  11071 total, 0 failed  | avg: 7315ms, p95: 18756ms |
| apollo-gateway-with-yoga            |   52   | 11301 total, 684 failed | avg: 7339ms, p95: 59941ms |
| apollo-server                       |   51   | 11145 total, 696 failed | avg: 7442ms, p95: 59943ms |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 507024     ✗ 0     
     data_received..................: 842 MB  4.2 MB/s
     data_sent......................: 201 MB  1.0 MB/s
     http_req_blocked...............: avg=223.24µs min=900ns    med=1.8µs    max=203.36ms p(90)=2.9µs    p(95)=3.5µs   
     http_req_connecting............: avg=216.84µs min=0s       med=0s       max=174.17ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=469.05ms min=144.78ms med=451.17ms max=1.39s    p(90)=632.55ms p(95)=688.6ms 
       { expected_response:true }...: avg=469.05ms min=144.78ms med=451.17ms max=1.39s    p(90)=632.55ms p(95)=688.6ms 
   ✓ http_req_failed................: 0.00%   ✓ 0          ✗ 169008
     http_req_receiving.............: avg=6.25ms   min=13.2µs   med=27.79µs  max=528.18ms p(90)=253.33µs p(95)=34.5ms  
     http_req_sending...............: avg=704.53µs min=5.7µs    med=9.9µs    max=402.14ms p(90)=20.6µs   p(95)=93.4µs  
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=462.09ms min=144.75ms med=448.06ms max=1.2s     p(90)=613.46ms p(95)=667.92ms
     http_reqs......................: 169008  843.332598/s
     iteration_duration.............: avg=473.71ms min=145.26ms med=454.89ms max=1.45s    p(90)=638.91ms p(95)=696.88ms
     iterations.....................: 169008  843.332598/s
     vus............................: 400     min=400      max=400 
     vus_max........................: 400     min=400      max=400 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7bc18e7e-5bff-4100-d006-c9f87f1cf600/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0dc32649-658a-4891-788d-1b011c209600/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 25385 / ✗ 35
     ✗ valid response structure
      ↳  99% — ✓ 25385 / ✗ 35

     checks.........................: 99.90% ✓ 76190      ✗ 70   
     data_received..................: 127 MB 625 kB/s
     data_sent......................: 30 MB  149 kB/s
     http_req_blocked...............: avg=926.72µs min=900ns  med=2.1µs  max=145.96ms p(90)=3.1µs  p(95)=3.8µs 
     http_req_connecting............: avg=913.75µs min=0s     med=0s     max=145.93ms p(90)=0s     p(95)=0s    
     http_req_duration..............: avg=3.16s    min=1.32s  med=3.02s  max=8.45s    p(90)=3.79s  p(95)=4.51s 
       { expected_response:true }...: avg=3.16s    min=1.32s  med=3.02s  max=8.45s    p(90)=3.79s  p(95)=4.51s 
   ✓ http_req_failed................: 0.00%  ✓ 0          ✗ 25420
     http_req_receiving.............: avg=88.49µs  min=16.7µs med=41.3µs max=168.15ms p(90)=63.4µs p(95)=72.1µs
     http_req_sending...............: avg=435.72µs min=5.6µs  med=12.7µs max=95.54ms  p(90)=26.5µs p(95)=33.4µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s     p(95)=0s    
     http_req_waiting...............: avg=3.16s    min=1.32s  med=3.02s  max=8.42s    p(90)=3.79s  p(95)=4.51s 
     http_reqs......................: 25420  125.480155/s
     iteration_duration.............: avg=3.16s    min=1.32s  med=3.02s  max=8.5s     p(90)=3.79s  p(95)=4.51s 
     iterations.....................: 25420  125.480155/s
     vus............................: 156    min=156      max=400
     vus_max........................: 400    min=400      max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6e500385-d3fe-4ae9-6a4b-a5983d113c00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0b30e2bf-7e00-4be7-a735-05167b485600/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 70800      ✗ 0    
     data_received..................: 118 MB  579 kB/s
     data_sent......................: 28 MB   138 kB/s
     http_req_blocked...............: avg=801.74µs min=1.4µs  med=2.5µs   max=103.03ms p(90)=4.2µs    p(95)=9.2µs   
     http_req_connecting............: avg=784.07µs min=0s     med=0s      max=92.75ms  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=3.43s    min=2.1s   med=3.23s   max=9.37s    p(90)=4.36s    p(95)=5.56s   
       { expected_response:true }...: avg=3.43s    min=2.1s   med=3.23s   max=9.37s    p(90)=4.36s    p(95)=5.56s   
   ✓ http_req_failed................: 0.00%   ✓ 0          ✗ 23600
     http_req_receiving.............: avg=1.71ms   min=20.4µs med=45.28µs max=250.46ms p(90)=89.62µs  p(95)=273.53µs
     http_req_sending...............: avg=485.47µs min=7µs    med=13.9µs  max=227.17ms p(90)=100.51µs p(95)=220.93µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=3.42s    min=2.1s   med=3.23s   max=9.36s    p(90)=4.36s    p(95)=5.56s   
     http_reqs......................: 23600   116.273779/s
     iteration_duration.............: avg=3.43s    min=2.1s   med=3.23s   max=9.4s     p(90)=4.37s    p(95)=5.57s   
     iterations.....................: 23600   116.273779/s
     vus............................: 135     min=135      max=400
     vus_max........................: 400     min=400      max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d42eb720-46ac-456f-f4e3-0ea701e14a00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6281db09-184c-4027-5c81-857830f6e800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-uws`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  95% — ✓ 16267 / ✗ 802
     ✗ valid response structure
      ↳  95% — ✓ 16267 / ✗ 802

     checks.........................: 96.86% ✓ 49603    ✗ 1604 
     data_received..................: 97 MB  477 kB/s
     data_sent......................: 20 MB  100 kB/s
     http_req_blocked...............: avg=812.08µs min=800ns  med=2µs    max=71.04ms p(90)=3.2µs  p(95)=5.15µs 
     http_req_connecting............: avg=799.91µs min=0s     med=0s     max=70.85ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=4.72s    min=1.16s  med=4.02s  max=14.67s  p(90)=7.03s  p(95)=8.08s  
       { expected_response:true }...: avg=4.72s    min=1.16s  med=4.02s  max=14.67s  p(90)=7.03s  p(95)=8.08s  
   ✓ http_req_failed................: 0.00%  ✓ 0        ✗ 17069
     http_req_receiving.............: avg=51.43µs  min=13.7µs med=37µs   max=24.87ms p(90)=69.9µs p(95)=81.25µs
     http_req_sending...............: avg=269.65µs min=6.3µs  med=11.9µs max=59.27ms p(90)=26.1µs p(95)=33.5µs 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=4.72s    min=1.16s  med=4.02s  max=14.67s  p(90)=7.03s  p(95)=8.08s  
     http_reqs......................: 17069  84.17028/s
     iteration_duration.............: avg=4.72s    min=1.16s  med=4.02s  max=14.67s  p(90)=7.04s  p(95)=8.09s  
     iterations.....................: 17069  84.17028/s
     vus............................: 197    min=197    max=400
     vus_max........................: 400    min=400    max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/cf063846-3730-4a8d-c765-d5a4eaedc300/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9ab84152-e27c-4240-5afd-a185c6e3f400/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-deno`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 16348 / ✗ 41
     ✗ valid response structure
      ↳  99% — ✓ 16348 / ✗ 41

     checks.........................: 99.83% ✓ 49085     ✗ 82   
     data_received..................: 83 MB  409 kB/s
     data_sent......................: 20 MB  96 kB/s
     http_req_blocked...............: avg=1.33ms   min=1.1µs med=2.5µs  max=105.69ms p(90)=4.1µs  p(95)=12.15µs 
     http_req_connecting............: avg=1.31ms   min=0s    med=0s     max=101.3ms  p(90)=0s     p(95)=0s      
     http_req_duration..............: avg=4.91s    min=2.41s med=4.85s  max=8.53s    p(90)=5.29s  p(95)=5.9s    
       { expected_response:true }...: avg=4.91s    min=2.41s med=4.85s  max=8.53s    p(90)=5.29s  p(95)=5.9s    
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 16389
     http_req_receiving.............: avg=136.11µs min=18µs  med=37.7µs max=62.65ms  p(90)=87.6µs p(95)=128.82µs
     http_req_sending...............: avg=314.09µs min=6.7µs med=14.2µs max=62.56ms  p(90)=34.1µs p(95)=139.7µs 
     http_req_tls_handshaking.......: avg=0s       min=0s    med=0s     max=0s       p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=4.91s    min=2.41s med=4.85s  max=8.52s    p(90)=5.28s  p(95)=5.89s   
     http_reqs......................: 16389  80.973323/s
     iteration_duration.............: avg=4.91s    min=2.41s med=4.86s  max=8.59s    p(90)=5.29s  p(95)=5.9s    
     iterations.....................: 16389  80.973323/s
     vus............................: 216    min=216     max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/afef4df8-8306-4e0f-26e4-21e15e3a0d00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d4d61911-043a-42ca-4a6a-f071eb627100/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 15879 / ✗ 125
     ✗ valid response structure
      ↳  99% — ✓ 15879 / ✗ 125

     checks.........................: 99.47% ✓ 47762     ✗ 250  
     data_received..................: 82 MB  403 kB/s
     data_sent......................: 19 MB  94 kB/s
     http_req_blocked...............: avg=1.84ms   min=1.5µs  med=2.7µs  max=132.73ms p(90)=4.1µs  p(95)=5.7µs 
     http_req_connecting............: avg=1.82ms   min=0s     med=0s     max=132.56ms p(90)=0s     p(95)=0s    
     http_req_duration..............: avg=5.03s    min=2.56s  med=4.89s  max=11.92s   p(90)=5.74s  p(95)=6.54s 
       { expected_response:true }...: avg=5.03s    min=2.56s  med=4.89s  max=11.92s   p(90)=5.74s  p(95)=6.54s 
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 16004
     http_req_receiving.............: avg=69.25µs  min=24.2µs med=58.7µs max=13.6ms   p(90)=82.9µs p(95)=94.3µs
     http_req_sending...............: avg=333.79µs min=8.5µs  med=14.9µs max=69.72ms  p(90)=29.4µs p(95)=38µs  
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s     p(95)=0s    
     http_req_waiting...............: avg=5.03s    min=2.56s  med=4.88s  max=11.92s   p(90)=5.74s  p(95)=6.54s 
     http_reqs......................: 16004  79.027693/s
     iteration_duration.............: avg=5.03s    min=2.56s  med=4.89s  max=12.01s   p(90)=5.74s  p(95)=6.55s 
     iterations.....................: 16004  79.027693/s
     vus............................: 202    min=202     max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6dba1967-c91b-489f-53b6-608f2cbd7c00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2f83271f-ecbc-47f2-03aa-cf210f6ab300/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga-uws`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  84% — ✓ 11534 / ✗ 2188
     ✗ valid response structure
      ↳  84% — ✓ 11534 / ✗ 2188

     checks.........................: 89.36% ✓ 36790     ✗ 4376 
     data_received..................: 64 MB  316 kB/s
     data_sent......................: 16 MB  80 kB/s
     http_req_blocked...............: avg=462.29µs min=900ns  med=2.1µs  max=80.09ms p(90)=3.4µs  p(95)=8.1µs   
     http_req_connecting............: avg=441.28µs min=0s     med=0s     max=44.5ms  p(90)=0s     p(95)=0s      
     http_req_duration..............: avg=5.89s    min=1.1s   med=5.26s  max=17.68s  p(90)=10.24s p(95)=11.96s  
       { expected_response:true }...: avg=5.89s    min=1.1s   med=5.26s  max=17.68s  p(90)=10.24s p(95)=11.96s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 13722
     http_req_receiving.............: avg=215.78µs min=13.2µs med=37.4µs max=62.69ms p(90)=71.2µs p(95)=83.39µs 
     http_req_sending...............: avg=641.93µs min=6µs    med=12.3µs max=92.3ms  p(90)=27.4µs p(95)=100.49µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=5.89s    min=1.1s   med=5.26s  max=17.68s  p(90)=10.23s p(95)=11.96s  
     http_reqs......................: 13722  67.590482/s
     iteration_duration.............: avg=5.89s    min=1.1s   med=5.26s  max=17.68s  p(90)=10.24s p(95)=11.96s  
     iterations.....................: 13722  67.590482/s
     vus............................: 135    min=135     max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/aaffece5-1342-4e02-669d-bf11e2dc8200/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/fbd8f4d3-d1f9-4ba0-b292-786880250200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 39372     ✗ 0    
     data_received..................: 66 MB   327 kB/s
     data_sent......................: 16 MB   77 kB/s
     http_req_blocked...............: avg=208.52µs min=1.5µs    med=3.3µs  max=31.01ms p(90)=4.7µs  p(95)=18.8µs 
     http_req_connecting............: avg=194.66µs min=0s       med=0s     max=30.98ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=6.12s    min=615.8ms  med=5.99s  max=14.83s  p(90)=6.46s  p(95)=7.19s  
       { expected_response:true }...: avg=6.12s    min=615.8ms  med=5.99s  max=14.83s  p(90)=6.46s  p(95)=7.19s  
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 13124
     http_req_receiving.............: avg=77.14µs  min=21.7µs   med=70.8µs max=11.98ms p(90)=94.3µs p(95)=103µs  
     http_req_sending...............: avg=53.24µs  min=7.9µs    med=19µs   max=19.24ms p(90)=36.4µs p(95)=99.71µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=6.12s    min=611.48ms med=5.99s  max=14.83s  p(90)=6.46s  p(95)=7.19s  
     http_reqs......................: 13124   64.973057/s
     iteration_duration.............: avg=6.12s    min=627.5ms  med=6s     max=14.83s  p(90)=6.46s  p(95)=7.19s  
     iterations.....................: 13124   64.973057/s
     vus............................: 66      min=66      max=400
     vus_max........................: 400     min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/880f7549-e7ab-4d29-4277-658f8abcc200/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/59798b1b-408b-4c7d-6a47-95e3bd030900/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  98% — ✓ 13001 / ✗ 170
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 13171

     checks.........................: 66.23% ✓ 26172     ✗ 13341
     data_received..................: 67 MB  330 kB/s
     data_sent......................: 16 MB  77 kB/s
     http_req_blocked...............: avg=6.85ms  min=1.5µs  med=2.8µs  max=542.04ms p(90)=4.8µs   p(95)=19.59µs
     http_req_connecting............: avg=6.75ms  min=0s     med=0s     max=528.79ms p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=6.12s   min=2.46s  med=5.94s  max=12.35s   p(90)=7.2s    p(95)=8.06s  
       { expected_response:true }...: avg=6.12s   min=2.46s  med=5.94s  max=12.35s   p(90)=7.2s    p(95)=8.06s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 13171
     http_req_receiving.............: avg=86.76µs min=27.1µs med=66.4µs max=39.4ms   p(90)=114.5µs p(95)=145.5µs
     http_req_sending...............: avg=3.56ms  min=10.5µs med=17.1µs max=348.15ms p(90)=42.3µs  p(95)=84.99µs
     http_req_tls_handshaking.......: avg=0s      min=0s     med=0s     max=0s       p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=6.11s   min=2.46s  med=5.94s  max=12.22s   p(90)=7.2s    p(95)=8.06s  
     http_reqs......................: 13171  64.722087/s
     iteration_duration.............: avg=6.12s   min=2.46s  med=5.94s  max=12.64s   p(90)=7.2s    p(95)=8.06s  
     iterations.....................: 13171  64.722087/s
     vus............................: 115    min=115     max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1c6de02c-d37c-4997-a87a-32dacfcd9600/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b2f916f5-ef7d-486e-63a1-892bdcfaf400/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  99% — ✓ 12650 / ✗ 69
     ✗ no graphql errors
      ↳  86% — ✓ 10973 / ✗ 1746
     ✗ valid response structure
      ↳  86% — ✓ 10973 / ✗ 1677

     checks.........................: 90.83% ✓ 34596     ✗ 3492 
     data_received..................: 88 MB  431 kB/s
     data_sent......................: 15 MB  74 kB/s
     http_req_blocked...............: avg=2.67ms   min=1.3µs med=2.5µs  max=132.19ms p(90)=4.7µs  p(95)=18.8µs 
     http_req_connecting............: avg=2.64ms   min=0s    med=0s     max=129.69ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=6.34s    min=2.38s med=5.47s  max=59.97s   p(90)=9.31s  p(95)=10.7s  
       { expected_response:true }...: avg=6.34s    min=2.38s med=5.47s  max=58.66s   p(90)=9.31s  p(95)=10.7s  
   ✓ http_req_failed................: 0.54%  ✓ 69        ✗ 12650
     http_req_receiving.............: avg=83.6µs   min=0s    med=57.1µs max=86.52ms  p(90)=88.4µs p(95)=117.5µs
     http_req_sending...............: avg=262.38µs min=8.2µs med=14.5µs max=118.54ms p(90)=33.7µs p(95)=133.5µs
     http_req_tls_handshaking.......: avg=0s       min=0s    med=0s     max=0s       p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=6.34s    min=2.38s med=5.47s  max=59.97s   p(90)=9.31s  p(95)=10.7s  
     http_reqs......................: 12719  62.555227/s
     iteration_duration.............: avg=6.35s    min=2.38s med=5.47s  max=1m0s     p(90)=9.31s  p(95)=10.7s  
     iterations.....................: 12719  62.555227/s
     vus............................: 77     min=77      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/557f566b-0543-4ccf-032c-df29e1ef9a00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/cb6aeb3c-f6db-4c9d-a4cd-7441c72a8400/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server-node16`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  68% — ✓ 7544 / ✗ 3527
     ✗ valid response structure
      ↳  68% — ✓ 7544 / ✗ 3527

     checks.........................: 78.76% ✓ 26159     ✗ 7054 
     data_received..................: 52 MB  256 kB/s
     data_sent......................: 13 MB  64 kB/s
     http_req_blocked...............: avg=3.87ms  min=1.4µs    med=2.4µs  max=210.75ms p(90)=3.9µs  p(95)=16µs  
     http_req_connecting............: avg=3.81ms  min=0s       med=0s     max=210.64ms p(90)=0s     p(95)=0s    
     http_req_duration..............: avg=7.31s   min=691.6ms  med=5.53s  max=21.58s   p(90)=16.98s p(95)=18.75s
       { expected_response:true }...: avg=7.31s   min=691.6ms  med=5.53s  max=21.58s   p(90)=16.98s p(95)=18.75s
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 11071
     http_req_receiving.............: avg=60.59µs min=23.7µs   med=55.2µs max=9.51ms   p(90)=77.1µs p(95)=85.8µs
     http_req_sending...............: avg=1.12ms  min=7.6µs    med=13.4µs max=93.09ms  p(90)=29µs   p(95)=97.5µs
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s     max=0s       p(90)=0s     p(95)=0s    
     http_req_waiting...............: avg=7.31s   min=691.53ms med=5.53s  max=21.58s   p(90)=16.97s p(95)=18.75s
     http_reqs......................: 11071  54.247446/s
     iteration_duration.............: avg=7.31s   min=692.18ms med=5.53s  max=21.58s   p(90)=16.98s p(95)=18.75s
     iterations.....................: 11071  54.247446/s
     vus............................: 51     min=51      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/51998fa2-29b4-4fb2-8633-05140ec8e600/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2e6f43fa-eacb-4fe4-f1ad-46f20a14a400/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  93% — ✓ 10617 / ✗ 684
     ✗ no graphql errors
      ↳  93% — ✓ 10558 / ✗ 743
     ✗ valid response structure
      ↳  99% — ✓ 10558 / ✗ 59

     checks.........................: 95.52% ✓ 31733     ✗ 1486 
     data_received..................: 53 MB  247 kB/s
     data_sent......................: 13 MB  62 kB/s
     http_req_blocked...............: avg=3.81ms   min=1.4µs    med=2.8µs  max=235.77ms p(90)=25.5µs p(95)=20.53ms
     http_req_connecting............: avg=3.62ms   min=0s       med=0s     max=211.7ms  p(90)=0s     p(95)=19.28ms
     http_req_duration..............: avg=7.33s    min=629.22ms med=3.22s  max=1m0s     p(90)=4.41s  p(95)=59.94s 
       { expected_response:true }...: avg=3.94s    min=629.22ms med=3.2s   max=58.94s   p(90)=3.63s  p(95)=4.18s  
   ✓ http_req_failed................: 6.05%  ✓ 684       ✗ 10617
     http_req_receiving.............: avg=63.9µs   min=0s       med=59.3µs max=9.32ms   p(90)=84.6µs p(95)=93.2µs 
     http_req_sending...............: avg=743.85µs min=8.3µs    med=15.9µs max=134.55ms p(90)=63.2µs p(95)=1.2ms  
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=7.33s    min=628.67ms med=3.22s  max=1m0s     p(90)=4.41s  p(95)=59.92s 
     http_reqs......................: 11301  52.357809/s
     iteration_duration.............: avg=7.34s    min=633.42ms med=3.22s  max=1m0s     p(90)=4.41s  p(95)=1m0s   
     iterations.....................: 11301  52.357809/s
     vus............................: 9      min=9       max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/80d55ebc-53c8-4536-b186-d50bbacb8300/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ad4ca570-c477-4208-c410-1ea8f3c0e300/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  93% — ✓ 10449 / ✗ 696
     ✗ no graphql errors
      ↳  92% — ✓ 10353 / ✗ 792
     ✗ valid response structure
      ↳  99% — ✓ 10353 / ✗ 96

     checks.........................: 95.16% ✓ 31155     ✗ 1584 
     data_received..................: 54 MB  250 kB/s
     data_sent......................: 13 MB  62 kB/s
     http_req_blocked...............: avg=3.01ms   min=1.4µs    med=2.8µs  max=141.74ms p(90)=23.42µs p(95)=13.74ms 
     http_req_connecting............: avg=2.93ms   min=0s       med=0s     max=133.47ms p(90)=0s      p(95)=12.36ms 
     http_req_duration..............: avg=7.44s    min=449.48ms med=3.16s  max=1m0s     p(90)=4.76s   p(95)=59.94s  
       { expected_response:true }...: avg=3.94s    min=449.48ms med=3.14s  max=59.24s   p(90)=3.64s   p(95)=4.43s   
   ✓ http_req_failed................: 6.24%  ✓ 696       ✗ 10449
     http_req_receiving.............: avg=70.63µs  min=0s       med=64.2µs max=14.59ms  p(90)=87.9µs  p(95)=96.1µs  
     http_req_sending...............: avg=490.55µs min=8.4µs    med=15.8µs max=49.51ms  p(90)=44.92µs p(95)=837.14µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=7.44s    min=449.38ms med=3.16s  max=1m0s     p(90)=4.76s   p(95)=59.93s  
     http_reqs......................: 11145  51.916953/s
     iteration_duration.............: avg=7.45s    min=450.32ms med=3.16s  max=1m0s     p(90)=4.77s   p(95)=1m0s    
     iterations.....................: 11145  51.916953/s
     vus............................: 39     min=39      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7a0d483c-188b-4c68-afa7-70dd909ad300/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/958086c5-ae00-4ef7-a099-d80776644600/public" alt="HTTP Overview" />


  </details>