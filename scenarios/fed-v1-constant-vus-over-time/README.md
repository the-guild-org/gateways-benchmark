## Overview for: `scenarios/fed-v1-constant-vus-over-time`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. It's being executed with a constant amount of VUs over a fixed amount of time. It measure things like memory usage, CPU usage, average RPS. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was running 100 VUs over 60s


### Comparison


| Gateway                             | RPS ⬇️ |       Requests        |         Duration         |
| :---------------------------------- | :----: | :-------------------: | :----------------------: |
| wundergraph                         |  829   | 49894 total, 0 failed |  avg: 120ms, p95: 191ms  |
| apollo-router                       |  124   | 7518 total, 0 failed  | avg: 802ms, p95: 1351ms  |
| mesh                                |   88   | 5330 total, 0 failed  | avg: 1130ms, p95: 1711ms |
| stitching-federation-with-yoga-bun  |   87   | 5325 total, 0 failed  | avg: 1137ms, p95: 1911ms |
| mercurius                           |   68   | 4151 total, 0 failed  | avg: 1451ms, p95: 1784ms |
| stitching-federation-with-yoga-deno |   61   | 3710 total, 0 failed  | avg: 1626ms, p95: 2085ms |
| apollo-gateway-with-yoga            |   55   | 3406 total, 0 failed  | avg: 1779ms, p95: 2275ms |
| apollo-server                       |   40   | 2471 total, 0 failed  | avg: 2462ms, p95: 2917ms |
| stitching-federation-with-yoga      |   39   | 2389 total, 0 failed  | avg: 2544ms, p95: 3515ms |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 149682     ✗ 0    
     data_received..................: 249 MB  4.1 MB/s
     data_sent......................: 59 MB   985 kB/s
   ✓ expected_result................: 0.00%   ✓ 0          ✗ 0    
     http_req_blocked...............: avg=47.01µs  min=800ns   med=1.6µs    max=41.45ms  p(90)=2.4µs    p(95)=2.9µs   
     http_req_connecting............: avg=42.2µs   min=0s      med=0s       max=39.34ms  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=119.91ms min=18.27ms med=113.47ms max=414.21ms p(90)=170.15ms p(95)=191.39ms
       { expected_response:true }...: avg=119.91ms min=18.27ms med=113.47ms max=414.21ms p(90)=170.15ms p(95)=191.39ms
   ✓ http_req_failed................: 0.00%   ✓ 0          ✗ 49894
     http_req_receiving.............: avg=412.63µs min=14.5µs  med=33.29µs  max=119.11ms p(90)=149.79µs p(95)=369.07µs
     http_req_sending...............: avg=60.9µs   min=5.6µs   med=9.29µs   max=86.52ms  p(90)=18µs     p(95)=27.1µs  
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=119.44ms min=18.17ms med=113.06ms max=414.17ms p(90)=169.24ms p(95)=190.27ms
     http_reqs......................: 49894   829.615842/s
     iteration_duration.............: avg=120.4ms  min=18.61ms med=113.87ms max=414.43ms p(90)=170.76ms p(95)=192.17ms
     iterations.....................: 49894   829.615842/s
   ✓ no_errors......................: 0.00%   ✓ 0          ✗ 0    
     vus............................: 100     min=100      max=100
     vus_max........................: 100     min=100      max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/344a2852-17c4-4124-40b5-c5980c239500/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/82bf247e-dba3-47dd-ddba-431a23b32a00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 7517 / ✗ 1
     ✓ expected_result

     checks.........................: 99.99% ✓ 22553      ✗ 1    
     data_received..................: 37 MB  619 kB/s
     data_sent......................: 8.9 MB 148 kB/s
   ✓ expected_result................: 0.00%  ✓ 0          ✗ 0    
     http_req_blocked...............: avg=164.84µs min=900ns    med=2.2µs    max=29.8ms  p(90)=3.1µs   p(95)=3.6µs 
     http_req_connecting............: avg=158.55µs min=0s       med=0s       max=29.73ms p(90)=0s      p(95)=0s    
     http_req_duration..............: avg=801.55ms min=280.06ms med=743.54ms max=3.21s   p(90)=1.05s   p(95)=1.35s 
       { expected_response:true }...: avg=801.55ms min=280.06ms med=743.54ms max=3.21s   p(90)=1.05s   p(95)=1.35s 
   ✓ http_req_failed................: 0.00%  ✓ 0          ✗ 7518 
     http_req_receiving.............: avg=53.54µs  min=17.3µs   med=51.29µs  max=6.14ms  p(90)=73.52µs p(95)=79.2µs
     http_req_sending...............: avg=71.19µs  min=6.2µs    med=14.5µs   max=20.55ms p(90)=27.4µs  p(95)=32.4µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s      p(90)=0s      p(95)=0s    
     http_req_waiting...............: avg=801.42ms min=279.98ms med=743.48ms max=3.21s   p(90)=1.05s   p(95)=1.35s 
     http_reqs......................: 7518   124.370221/s
     iteration_duration.............: avg=802.04ms min=280.37ms med=743.83ms max=3.22s   p(90)=1.05s   p(95)=1.35s 
     iterations.....................: 7518   124.370221/s
   ✓ no_errors......................: 0.00%  ✓ 0          ✗ 0    
     vus............................: 100    min=100      max=100
     vus_max........................: 100    min=100      max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0f9beff8-f7ca-4d92-f3cd-301098e42500/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ec551412-6f88-43f7-9d14-5184f4791200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 15990     ✗ 0    
     data_received..................: 27 MB   441 kB/s
     data_sent......................: 6.3 MB  105 kB/s
   ✓ expected_result................: 0.00%   ✓ 0         ✗ 0    
     http_req_blocked...............: avg=54.99µs min=1.2µs    med=2.15µs  max=12.3ms  p(90)=3.2µs   p(95)=4.1µs 
     http_req_connecting............: avg=51.6µs  min=0s       med=0s      max=12.13ms p(90)=0s      p(95)=0s    
     http_req_duration..............: avg=1.12s   min=241.25ms med=1.07s   max=2.65s   p(90)=1.41s   p(95)=1.71s 
       { expected_response:true }...: avg=1.12s   min=241.25ms med=1.07s   max=2.65s   p(90)=1.41s   p(95)=1.71s 
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 5330 
     http_req_receiving.............: avg=53.61µs min=19.9µs   med=52.5µs  max=1.2ms   p(90)=70.72µs p(95)=78.2µs
     http_req_sending...............: avg=24.92µs min=7.6µs    med=12.55µs max=8.32ms  p(90)=22.3µs  p(95)=28.7µs
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s      max=0s      p(90)=0s      p(95)=0s    
     http_req_waiting...............: avg=1.12s   min=241.16ms med=1.07s   max=2.65s   p(90)=1.41s   p(95)=1.71s 
     http_reqs......................: 5330    88.139179/s
     iteration_duration.............: avg=1.13s   min=241.57ms med=1.07s   max=2.65s   p(90)=1.41s   p(95)=1.71s 
     iterations.....................: 5330    88.139179/s
   ✓ no_errors......................: 0.00%   ✓ 0         ✗ 0    
     vus............................: 100     min=100     max=100
     vus_max........................: 100     min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0c083c91-ccfb-4038-427e-98137fd17800/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d1887f96-7c65-4210-d41f-791f8d709400/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 15975    ✗ 0    
     data_received..................: 27 MB   438 kB/s
     data_sent......................: 6.3 MB  104 kB/s
   ✓ expected_result................: 0.00%   ✓ 0        ✗ 0    
     http_req_blocked...............: avg=356.32µs min=900ns    med=1.5µs  max=38.42ms p(90)=2.7µs  p(95)=3.8µs   
     http_req_connecting............: avg=142.27µs min=0s       med=0s     max=15.73ms p(90)=0s     p(95)=0s      
     http_req_duration..............: avg=1.13s    min=540.53ms med=1.06s  max=3.17s   p(90)=1.47s  p(95)=1.91s   
       { expected_response:true }...: avg=1.13s    min=540.53ms med=1.06s  max=3.17s   p(90)=1.47s  p(95)=1.91s   
   ✓ http_req_failed................: 0.00%   ✓ 0        ✗ 5325 
     http_req_receiving.............: avg=62.67µs  min=15.2µs   med=24.5µs max=29.12ms p(90)=52µs   p(95)=76.58µs 
     http_req_sending...............: avg=131.34µs min=5.6µs    med=9.1µs  max=47.84ms p(90)=25.1µs p(95)=114.42µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=1.13s    min=540.5ms  med=1.06s  max=3.17s   p(90)=1.47s  p(95)=1.91s   
     http_reqs......................: 5325    87.81557/s
     iteration_duration.............: avg=1.13s    min=540.82ms med=1.06s  max=3.17s   p(90)=1.47s  p(95)=1.91s   
     iterations.....................: 5325    87.81557/s
   ✓ no_errors......................: 0.00%   ✓ 0        ✗ 0    
     vus............................: 100     min=100    max=100
     vus_max........................: 100     min=100    max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d03c69ee-d24e-426b-ad34-454cf5274800/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/14daefef-4191-40f5-13be-bd11dbee9800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 12453     ✗ 0    
     data_received..................: 21 MB   346 kB/s
     data_sent......................: 4.9 MB  82 kB/s
   ✓ expected_result................: 0.00%   ✓ 0         ✗ 0    
     http_req_blocked...............: avg=148.71µs min=1.5µs    med=3µs    max=16.67ms p(90)=4.1µs  p(95)=13.8µs 
     http_req_connecting............: avg=143.94µs min=0s       med=0s     max=16.57ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=1.45s    min=436.05ms med=1.36s  max=4.98s   p(90)=1.65s  p(95)=1.78s  
       { expected_response:true }...: avg=1.45s    min=436.05ms med=1.36s  max=4.98s   p(90)=1.65s  p(95)=1.78s  
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 4151 
     http_req_receiving.............: avg=73.64µs  min=26.9µs   med=69µs   max=8.38ms  p(90)=91.2µs p(95)=99.4µs 
     http_req_sending...............: avg=41.22µs  min=7.2µs    med=18.2µs max=8.93ms  p(90)=34.7µs p(95)=42.25µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=1.45s    min=435.99ms med=1.36s  max=4.98s   p(90)=1.65s  p(95)=1.78s  
     http_reqs......................: 4151    68.695143/s
     iteration_duration.............: avg=1.45s    min=436.34ms med=1.36s  max=4.99s   p(90)=1.65s  p(95)=1.78s  
     iterations.....................: 4151    68.695143/s
   ✓ no_errors......................: 0.00%   ✓ 0         ✗ 0    
     vus............................: 100     min=100     max=100
     vus_max........................: 100     min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c8d71093-eaee-4231-c580-e37da0000a00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/25e05e23-3d4a-42ca-614c-c495ef526500/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-deno`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 3709 / ✗ 1
     ✓ expected_result

     checks.........................: 99.99% ✓ 11129    ✗ 1    
     data_received..................: 19 MB  307 kB/s
     data_sent......................: 4.4 MB 73 kB/s
   ✓ expected_result................: 0.00%  ✓ 0        ✗ 0    
     http_req_blocked...............: avg=125.29µs min=900ns    med=1.9µs  max=12.35ms p(90)=3.2µs  p(95)=4.25µs 
     http_req_connecting............: avg=119.62µs min=0s       med=0s     max=12.28ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=1.62s    min=519.2ms  med=1.57s  max=2.82s   p(90)=1.91s  p(95)=2.08s  
       { expected_response:true }...: avg=1.62s    min=519.2ms  med=1.57s  max=2.82s   p(90)=1.91s  p(95)=2.08s  
   ✓ http_req_failed................: 0.00%  ✓ 0        ✗ 3710 
     http_req_receiving.............: avg=72.36µs  min=16.5µs   med=31.2µs max=5.59ms  p(90)=79.1µs p(95)=91.75µs
     http_req_sending...............: avg=40.8µs   min=6.3µs    med=11.7µs max=9.11ms  p(90)=27.5µs p(95)=102.9µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=1.62s    min=519.15ms med=1.57s  max=2.82s   p(90)=1.91s  p(95)=2.08s  
     http_reqs......................: 3710   61.33441/s
     iteration_duration.............: avg=1.62s    min=519.49ms med=1.57s  max=2.83s   p(90)=1.91s  p(95)=2.08s  
     iterations.....................: 3710   61.33441/s
   ✓ no_errors......................: 0.00%  ✓ 0        ✗ 0    
     vus............................: 100    min=100    max=100
     vus_max........................: 100    min=100    max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ddc066d8-1305-4a3d-48d0-f3a47fad7600/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ffba8e3d-8305-4288-638e-49e6a9c67a00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 3382 / ✗ 24
     ✗ expected_result
      ↳  99% — ✓ 3403 / ✗ 3

     checks.........................: 99.73% ✓ 10191     ✗ 27   
     data_received..................: 17 MB  279 kB/s
     data_sent......................: 4.0 MB 66 kB/s
   ✓ expected_result................: 0.00%  ✓ 0         ✗ 0    
     http_req_blocked...............: avg=102.74µs min=1.3µs    med=2.5µs  max=20.21ms p(90)=4.1µs  p(95)=12.4µs 
     http_req_connecting............: avg=98.28µs  min=0s       med=0s     max=20.16ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=1.77s    min=478.87ms med=1.71s  max=3.66s   p(90)=2.08s  p(95)=2.27s  
       { expected_response:true }...: avg=1.77s    min=478.87ms med=1.71s  max=3.66s   p(90)=2.08s  p(95)=2.27s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 3406 
     http_req_receiving.............: avg=66.7µs   min=22.8µs   med=61.6µs max=4.76ms  p(90)=89.2µs p(95)=96.67µs
     http_req_sending...............: avg=49.03µs  min=9.19µs   med=15.3µs max=3.43ms  p(90)=30.7µs p(95)=37.37µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=1.77s    min=478.74ms med=1.71s  max=3.66s   p(90)=2.08s  p(95)=2.27s  
     http_reqs......................: 3406   55.859135/s
     iteration_duration.............: avg=1.77s    min=479.15ms med=1.71s  max=3.66s   p(90)=2.08s  p(95)=2.27s  
     iterations.....................: 3406   55.859135/s
   ✓ no_errors......................: 0.00%  ✓ 0         ✗ 0    
     vus............................: 20     min=20      max=100
     vus_max........................: 100    min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/db3c3b84-47b6-4968-420b-dac37b126000/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/cd13d02e-a037-4300-18c9-cfc3bedaf000/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 2454 / ✗ 17
     ✗ expected_result
      ↳  99% — ✓ 2469 / ✗ 2

     checks.........................: 99.74% ✓ 7394      ✗ 19   
     data_received..................: 13 MB  208 kB/s
     data_sent......................: 2.9 MB 48 kB/s
   ✓ expected_result................: 0.00%  ✓ 0         ✗ 0    
     http_req_blocked...............: avg=472.83µs min=1.8µs    med=2.9µs  max=33.42ms p(90)=5.4µs   p(95)=24.9µs  
     http_req_connecting............: avg=458.77µs min=0s       med=0s     max=33.38ms p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=2.46s    min=983.42ms med=2.2s   max=26.58s  p(90)=2.61s   p(95)=2.91s   
       { expected_response:true }...: avg=2.46s    min=983.42ms med=2.2s   max=26.58s  p(90)=2.61s   p(95)=2.91s   
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 2471 
     http_req_receiving.............: avg=82.54µs  min=31.3µs   med=75µs   max=1.67ms  p(90)=120.5µs p(95)=146.35µs
     http_req_sending...............: avg=76.22µs  min=10.4µs   med=20.2µs max=9.73ms  p(90)=47.8µs  p(95)=83.95µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=2.46s    min=978.22ms med=2.2s   max=26.58s  p(90)=2.61s   p(95)=2.91s   
     http_reqs......................: 2471   40.294937/s
     iteration_duration.............: avg=2.46s    min=1s       med=2.2s   max=26.59s  p(90)=2.61s   p(95)=2.91s   
     iterations.....................: 2471   40.294937/s
   ✓ no_errors......................: 0.00%  ✓ 0         ✗ 0    
     vus............................: 58     min=58      max=100
     vus_max........................: 100    min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c7c66c96-b758-4482-3e6b-0835a7a05200/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/89c90f2b-c396-43b1-d30e-609d5045e100/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 2366 / ✗ 23
     ✗ expected_result
      ↳  99% — ✓ 2388 / ✗ 1

     checks.........................: 99.66% ✓ 7143      ✗ 24   
     data_received..................: 12 MB  197 kB/s
     data_sent......................: 2.8 MB 46 kB/s
   ✓ expected_result................: 0.00%  ✓ 0         ✗ 0    
     http_req_blocked...............: avg=394.47µs min=1.1µs  med=3µs    max=21.25ms p(90)=4.8µs    p(95)=22.26µs 
     http_req_connecting............: avg=379.79µs min=0s     med=0s     max=21.2ms  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=2.54s    min=1.18s  med=2.4s   max=5.62s   p(90)=3.01s    p(95)=3.51s   
       { expected_response:true }...: avg=2.54s    min=1.18s  med=2.4s   max=5.62s   p(90)=3.01s    p(95)=3.51s   
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 2389 
     http_req_receiving.............: avg=80.15µs  min=19.9µs med=71.6µs max=4.5ms   p(90)=104.54µs p(95)=121.32µs
     http_req_sending...............: avg=88.7µs   min=7.5µs  med=20.1µs max=19.04ms p(90)=39.22µs  p(95)=112.36µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=2.54s    min=1.18s  med=2.4s   max=5.62s   p(90)=3.01s    p(95)=3.51s   
     http_reqs......................: 2389   39.064392/s
     iteration_duration.............: avg=2.54s    min=1.18s  med=2.4s   max=5.63s   p(90)=3.01s    p(95)=3.52s   
     iterations.....................: 2389   39.064392/s
   ✓ no_errors......................: 0.00%  ✓ 0         ✗ 0    
     vus............................: 50     min=50      max=100
     vus_max........................: 100    min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2360046b-5c50-4fb1-1282-253ccc00ca00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2972ceef-3b95-44ed-855f-638defba5500/public" alt="HTTP Overview" />


  </details>