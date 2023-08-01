## Overview for: `fed-v1-ramping-vus`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. We are running a heavy load of concurrent VUs to measure response time and other stats, during stress. It measure things like memory usage, CPU usage, response times. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was trying to reach 1000 concurrent VUs over 60s


### Comparison


| Gateway                             | duration(p95)⬇️ |  RPS  |       Requests        |                       Durations                        |
| :---------------------------------- | :-------------: | :---: | :-------------------: | :----------------------------------------------------: |
| wundergraph                         |     1892ms      |  495  | 34696 total, 0 failed |    avg: 990ms, p95: 1893ms, max: 3293ms, med: 949ms    |
| stitching-federation-with-yoga-bun  |     10775ms     |  120  | 8447 total, 0 failed  |  avg: 4399ms, p95: 10776ms, max: 17381ms, med: 4479ms  |
| mesh-supergraph                     |     11323ms     |  78   | 5507 total, 0 failed  |  avg: 6979ms, p95: 11323ms, max: 14478ms, med: 6934ms  |
| stitching-federation-with-yoga-deno |     11569ms     |  76   | 5334 total, 0 failed  |  avg: 7247ms, p95: 11569ms, max: 13294ms, med: 7663ms  |
| mesh                                |     11715ms     |  78   | 5541 total, 0 failed  |  avg: 6976ms, p95: 11716ms, max: 14255ms, med: 6679ms  |
| apollo-router                       |     13522ms     |  88   | 6224 total, 0 failed  |  avg: 6173ms, p95: 13522ms, max: 19967ms, med: 5203ms  |
| mercurius                           |     17365ms     |  48   | 3407 total, 0 failed  | avg: 11322ms, p95: 17365ms, max: 17952ms, med: 11516ms |
| stitching-federation-with-yoga      |     22461ms     |  62   | 4738 total, 0 failed  |  avg: 8573ms, p95: 22461ms, max: 32867ms, med: 5453ms  |
| apollo-gateway-with-yoga            |     28572ms     |  56   | 3956 total, 0 failed  |  avg: 9752ms, p95: 28572ms, max: 34018ms, med: 6491ms  |
| apollo-server                       |     54507ms     |  40   | 3745 total, 38 failed | avg: 12502ms, p95: 54507ms, max: 60002ms, med: 2989ms  |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 104088     ✗ 0     
     data_received..................: 173 MB  2.5 MB/s
     data_sent......................: 41 MB   588 kB/s
     http_req_blocked...............: avg=3.36ms   min=1.7µs   med=2.7µs    max=1.3s     p(90)=4.3µs   p(95)=9.4µs 
     http_req_connecting............: avg=3.31ms   min=0s      med=0s       max=1.3s     p(90)=0s      p(95)=0s    
     http_req_duration..............: avg=990.02ms min=10.25ms med=948.67ms max=3.29s    p(90)=1.72s   p(95)=1.89s 
       { expected_response:true }...: avg=990.02ms min=10.25ms med=948.67ms max=3.29s    p(90)=1.72s   p(95)=1.89s 
     http_req_failed................: 0.00%   ✓ 0          ✗ 34696 
     http_req_receiving.............: avg=3.42ms   min=18.7µs  med=48µs     max=959.34ms p(90)=256.9µs p(95)=1.1ms 
     http_req_sending...............: avg=3.46ms   min=9.5µs   med=15.8µs   max=1.01s    p(90)=99.65µs p(95)=2.77ms
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s       p(90)=0s      p(95)=0s    
     http_req_waiting...............: avg=983.13ms min=10.04ms med=940.87ms max=3.29s    p(90)=1.7s    p(95)=1.87s 
     http_reqs......................: 34696   495.641747/s
     iteration_duration.............: avg=1s       min=11.02ms med=960.83ms max=3.29s    p(90)=1.74s   p(95)=1.91s 
     iterations.....................: 34696   495.641747/s
     vus............................: 9       min=9        max=997 
     vus_max........................: 1000    min=1000     max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/637a01ba-8c12-4b52-3997-5c932f371b00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ea2db5ba-df64-4cbf-79ef-dfc2c6e25c00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 25341      ✗ 0     
     data_received..................: 42 MB   601 kB/s
     data_sent......................: 10 MB   143 kB/s
     http_req_blocked...............: avg=349.94µs min=900ns  med=1.9µs  max=209.53ms p(90)=142.23µs p(95)=359.76µs
     http_req_connecting............: avg=337.35µs min=0s     med=0s     max=209.47ms p(90)=89.29µs  p(95)=297.71µs
     http_req_duration..............: avg=4.39s    min=7.28ms med=4.47s  max=17.38s   p(90)=6.69s    p(95)=10.77s  
       { expected_response:true }...: avg=4.39s    min=7.28ms med=4.47s  max=17.38s   p(90)=6.69s    p(95)=10.77s  
     http_req_failed................: 0.00%   ✓ 0          ✗ 8447  
     http_req_receiving.............: avg=114.58µs min=15.6µs med=30µs   max=128.27ms p(90)=59.03µs  p(95)=81.49µs 
     http_req_sending...............: avg=264.02µs min=6.6µs  med=11.4µs max=70.17ms  p(90)=57.64µs  p(95)=96.16µs 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=4.39s    min=7.2ms  med=4.47s  max=17.38s   p(90)=6.69s    p(95)=10.77s  
     http_reqs......................: 8447    120.655527/s
     iteration_duration.............: avg=4.4s     min=7.87ms med=4.48s  max=17.47s   p(90)=6.69s    p(95)=10.77s  
     iterations.....................: 8447    120.655527/s
     vus............................: 6       min=6        max=1000
     vus_max........................: 1000    min=1000     max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3c917e9b-54ad-4e93-65c7-5b6ffdae1600/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/77978ae2-2aa2-4cf6-7da6-7ee74c8b7700/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 5496 / ✗ 11
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 5507

     checks.........................: 66.60% ✓ 11003     ✗ 5518  
     data_received..................: 28 MB  399 kB/s
     data_sent......................: 6.5 MB 93 kB/s
     http_req_blocked...............: avg=145.16µs min=1.6µs   med=2.8µs  max=17.88ms p(90)=487.61µs p(95)=546.29µs
     http_req_connecting............: avg=127.57µs min=0s      med=0s     max=17.45ms p(90)=409.52µs p(95)=467.29µs
     http_req_duration..............: avg=6.97s    min=15.62ms med=6.93s  max=14.47s  p(90)=10.86s   p(95)=11.32s  
       { expected_response:true }...: avg=6.97s    min=15.62ms med=6.93s  max=14.47s  p(90)=10.86s   p(95)=11.32s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 5507  
     http_req_receiving.............: avg=69.53µs  min=21.9µs  med=62.8µs max=3.93ms  p(90)=91.54µs  p(95)=103.17µs
     http_req_sending...............: avg=34.94µs  min=8.8µs   med=16.2µs max=4.97ms  p(90)=74.1µs   p(95)=90.44µs 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=6.97s    min=15.51ms med=6.93s  max=14.47s  p(90)=10.86s   p(95)=11.32s  
     http_reqs......................: 5507   78.662094/s
     iteration_duration.............: avg=6.97s    min=16.17ms med=6.93s  max=14.47s  p(90)=10.86s   p(95)=11.32s  
     iterations.....................: 5507   78.662094/s
     vus............................: 56     min=51      max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/feb18043-4107-4345-49bf-935184124200/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/74d60812-62c4-4369-d8f4-40e55b705900/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-deno`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 5330 / ✗ 4
     ✗ valid response structure
      ↳  99% — ✓ 5330 / ✗ 4

     checks.........................: 99.95% ✓ 15994     ✗ 8     
     data_received..................: 27 MB  382 kB/s
     data_sent......................: 6.3 MB 90 kB/s
     http_req_blocked...............: avg=202.56µs min=900ns   med=2.5µs  max=30.33ms p(90)=412.87µs p(95)=463.03µs
     http_req_connecting............: avg=182.32µs min=0s      med=0s     max=29.98ms p(90)=343.24µs p(95)=391.57µs
     http_req_duration..............: avg=7.24s    min=10.39ms med=7.66s  max=13.29s  p(90)=11.39s   p(95)=11.56s  
       { expected_response:true }...: avg=7.24s    min=10.39ms med=7.66s  max=13.29s  p(90)=11.39s   p(95)=11.56s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 5334  
     http_req_receiving.............: avg=124.37µs min=16.2µs  med=38.1µs max=13.71ms p(90)=86.66µs  p(95)=138µs   
     http_req_sending...............: avg=80.47µs  min=6.7µs   med=14.3µs max=15.87ms p(90)=71.3µs   p(95)=98.23µs 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=7.24s    min=10.32ms med=7.66s  max=13.29s  p(90)=11.39s   p(95)=11.56s  
     http_reqs......................: 5334   76.193348/s
     iteration_duration.............: avg=7.24s    min=10.94ms med=7.66s  max=13.29s  p(90)=11.39s   p(95)=11.57s  
     iterations.....................: 5334   76.193348/s
     vus............................: 127    min=57      max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/314e5e76-bc57-43e0-55fc-de050b2ad500/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/09825266-ce8b-4e42-6689-5adce1052c00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 5512 / ✗ 29
     ✗ valid response structure
      ↳  99% — ✓ 5512 / ✗ 29

     checks.........................: 99.65% ✓ 16565     ✗ 58    
     data_received..................: 28 MB  401 kB/s
     data_sent......................: 6.6 MB 94 kB/s
     http_req_blocked...............: avg=115.45µs min=1.3µs   med=2.7µs  max=18.84ms p(90)=435.71µs p(95)=497.71µs
     http_req_connecting............: avg=96.95µs  min=0s      med=0s     max=18.77ms p(90)=363.41µs p(95)=422.21µs
     http_req_duration..............: avg=6.97s    min=16.05ms med=6.67s  max=14.25s  p(90)=11.12s   p(95)=11.71s  
       { expected_response:true }...: avg=6.97s    min=16.05ms med=6.67s  max=14.25s  p(90)=11.12s   p(95)=11.71s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 5541  
     http_req_receiving.............: avg=71.4µs   min=21.4µs  med=57.6µs max=7.86ms  p(90)=86.6µs   p(95)=98µs    
     http_req_sending...............: avg=56.15µs  min=9.29µs  med=15.3µs max=24.37ms p(90)=67.2µs   p(95)=82.4µs  
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=6.97s    min=15.95ms med=6.67s  max=14.25s  p(90)=11.12s   p(95)=11.71s  
     http_reqs......................: 5541   78.794757/s
     iteration_duration.............: avg=6.97s    min=16.69ms med=6.68s  max=14.25s  p(90)=11.12s   p(95)=11.71s  
     iterations.....................: 5541   78.794757/s
     vus............................: 202    min=55      max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9e43935e-af77-43aa-78f8-8615f2af1700/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/106a06d8-2531-429a-9e76-671db4750e00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 6189 / ✗ 35
     ✗ valid response structure
      ↳  99% — ✓ 6189 / ✗ 35

     checks.........................: 99.62% ✓ 18602     ✗ 70    
     data_received..................: 31 MB  442 kB/s
     data_sent......................: 7.4 MB 106 kB/s
     http_req_blocked...............: avg=397.62µs min=1.1µs   med=2.9µs   max=188.87ms p(90)=362.85µs p(95)=455.09µs
     http_req_connecting............: avg=380.98µs min=0s      med=0s      max=188.8ms  p(90)=300µs    p(95)=385.08µs
     http_req_duration..............: avg=6.17s    min=9.16ms  med=5.2s    max=19.96s   p(90)=12.96s   p(95)=13.52s  
       { expected_response:true }...: avg=6.17s    min=9.16ms  med=5.2s    max=19.96s   p(90)=12.96s   p(95)=13.52s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 6224  
     http_req_receiving.............: avg=169.8µs  min=20.29µs med=59.15µs max=179.64ms p(90)=93.37µs  p(95)=116.12µs
     http_req_sending...............: avg=126.84µs min=7.7µs   med=17.2µs  max=114.72ms p(90)=63.8µs   p(95)=88.28µs 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=6.17s    min=9.05ms  med=5.2s    max=19.96s   p(90)=12.96s   p(95)=13.52s  
     http_reqs......................: 6224   88.896058/s
     iteration_duration.............: avg=6.17s    min=9.97ms  med=5.2s    max=19.96s   p(90)=12.96s   p(95)=13.52s  
     iterations.....................: 6224   88.896058/s
     vus............................: 117    min=55      max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3233249d-f20f-4c05-1917-225f0997fe00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ef4ed3f3-ee54-4ced-92bb-20aedfe99900/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 10221     ✗ 0     
     data_received..................: 17 MB   243 kB/s
     data_sent......................: 4.0 MB  57 kB/s
     http_req_blocked...............: avg=244.7µs  min=1.7µs    med=4.4µs   max=19.94ms p(90)=626.2µs  p(95)=716.14µs
     http_req_connecting............: avg=211.27µs min=0s       med=0s      max=19.79ms p(90)=530.56µs p(95)=603.91µs
     http_req_duration..............: avg=11.32s   min=574.88ms med=11.51s  max=17.95s  p(90)=16.89s   p(95)=17.36s  
       { expected_response:true }...: avg=11.32s   min=574.88ms med=11.51s  max=17.95s  p(90)=16.89s   p(95)=17.36s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 3407  
     http_req_receiving.............: avg=118.72µs min=29.6µs   med=98.2µs  max=13.34ms p(90)=156.54µs p(95)=180.37µs
     http_req_sending...............: avg=74.8µs   min=11µs     med=32.09µs max=16.26ms p(90)=102.38µs p(95)=142.22µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=11.32s   min=574.66ms med=11.51s  max=17.95s  p(90)=16.89s   p(95)=17.36s  
     http_reqs......................: 3407    48.311246/s
     iteration_duration.............: avg=11.32s   min=576.51ms med=11.51s  max=17.95s  p(90)=16.89s   p(95)=17.36s  
     iterations.....................: 3407    48.311246/s
     vus............................: 66      min=52      max=1000
     vus_max........................: 1000    min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ae356b9c-5704-49c1-2c4e-370626d10f00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/37d43bb5-014e-4434-1f50-d66ce8775500/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  80% — ✓ 3798 / ✗ 940
     ✗ valid response structure
      ↳  80% — ✓ 3798 / ✗ 940

     checks.........................: 86.77% ✓ 12334     ✗ 1880  
     data_received..................: 33 MB  432 kB/s
     data_sent......................: 5.6 MB 74 kB/s
     http_req_blocked...............: avg=127.74µs min=1.1µs  med=2.4µs  max=55.57ms p(90)=401.29µs p(95)=445.33µs
     http_req_connecting............: avg=107.87µs min=0s     med=0s     max=55.51ms p(90)=333.75µs p(95)=379.8µs 
     http_req_duration..............: avg=8.57s    min=1s     med=5.45s  max=32.86s  p(90)=18.9s    p(95)=22.46s  
       { expected_response:true }...: avg=8.57s    min=1s     med=5.45s  max=32.86s  p(90)=18.9s    p(95)=22.46s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 4738  
     http_req_receiving.............: avg=68.11µs  min=17.6µs med=49.2µs max=14.58ms p(90)=89.63µs  p(95)=104.09µs
     http_req_sending...............: avg=52.76µs  min=7.1µs  med=14.8µs max=31.98ms p(90)=65.5µs   p(95)=75.53µs 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=8.57s    min=1s     med=5.45s  max=32.86s  p(90)=18.9s    p(95)=22.46s  
     http_reqs......................: 4738   62.149364/s
     iteration_duration.............: avg=8.57s    min=1s     med=5.45s  max=32.86s  p(90)=18.9s    p(95)=22.46s  
     iterations.....................: 4738   62.149364/s
     vus............................: 29     min=29      max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/eff91423-594b-438b-82ad-1c0a51b8c700/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ae8f5632-350a-4279-a5e0-d144e68b5e00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  78% — ✓ 3086 / ✗ 870
     ✗ valid response structure
      ↳  78% — ✓ 3086 / ✗ 870

     checks.........................: 85.33% ✓ 10128     ✗ 1740  
     data_received..................: 18 MB  263 kB/s
     data_sent......................: 4.7 MB 67 kB/s
     http_req_blocked...............: avg=303.63µs min=1.5µs   med=3µs     max=432.35ms p(90)=482.65µs p(95)=528.6µs 
     http_req_connecting............: avg=241.44µs min=0s      med=0s      max=281.36ms p(90)=404.85µs p(95)=448.95µs
     http_req_duration..............: avg=9.75s    min=13.26ms med=6.49s   max=34.01s   p(90)=24.23s   p(95)=28.57s  
       { expected_response:true }...: avg=9.75s    min=13.26ms med=6.49s   max=34.01s   p(90)=24.23s   p(95)=28.57s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 3956  
     http_req_receiving.............: avg=2.78ms   min=20.2µs  med=58.65µs max=186.29ms p(90)=108.55µs p(95)=360.3µs 
     http_req_sending...............: avg=260.77µs min=6.1µs   med=16.4µs  max=334.29ms p(90)=84.3µs   p(95)=105.72µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=9.74s    min=13.14ms med=6.49s   max=33.92s   p(90)=24.23s   p(95)=28.57s  
     http_reqs......................: 3956   56.490222/s
     iteration_duration.............: avg=9.75s    min=14ms    med=6.49s   max=34.01s   p(90)=24.23s   p(95)=28.57s  
     iterations.....................: 3956   56.490222/s
     vus............................: 106    min=55      max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1b660ab9-75da-4cfa-3b19-5e5345525c00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/cd5ce476-c3ca-4f4d-d0bd-aa4126bac500/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  98% — ✓ 3707 / ✗ 38
     ✗ no graphql errors
      ↳  98% — ✓ 3688 / ✗ 57
     ✗ valid response structure
      ↳  99% — ✓ 3688 / ✗ 19

     checks.........................: 98.98% ✓ 11083     ✗ 114   
     data_received..................: 19 MB  208 kB/s
     data_sent......................: 4.5 MB 49 kB/s
     http_req_blocked...............: avg=181.6µs  min=1.8µs    med=3.2µs  max=19.96ms p(90)=544.48µs p(95)=651.12µs
     http_req_connecting............: avg=153.72µs min=0s       med=0s     max=19.89ms p(90)=447.61µs p(95)=543.64µs
     http_req_duration..............: avg=12.5s    min=109.79ms med=2.98s  max=1m0s    p(90)=47.11s   p(95)=54.5s   
       { expected_response:true }...: avg=12.01s   min=109.79ms med=2.98s  max=59.99s  p(90)=45.8s    p(95)=52.98s  
     http_req_failed................: 1.01%  ✓ 38        ✗ 3707  
     http_req_receiving.............: avg=98.37µs  min=0s       med=80.6µs max=7.69ms  p(90)=131.3µs  p(95)=156.07µs
     http_req_sending...............: avg=56.08µs  min=11.4µs   med=22.4µs max=8.33ms  p(90)=92.1µs   p(95)=123.24µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=12.5s    min=109.68ms med=2.98s  max=1m0s    p(90)=47.11s   p(95)=54.5s   
     http_reqs......................: 3745   40.730801/s
     iteration_duration.............: avg=12.5s    min=110.6ms  med=2.98s  max=1m0s    p(90)=47.12s   p(95)=54.5s   
     iterations.....................: 3745   40.730801/s
     vus............................: 15     min=15      max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/642350fd-7f2f-45d8-de09-19d8d41ef100/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6da80b58-47b6-4c08-f306-94715b690200/public" alt="HTTP Overview" />


  </details>