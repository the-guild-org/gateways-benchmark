## Overview for: `fed-v1-ramping-vus`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. We are running a heavy load of concurrent VUs to measure response time and other stats, during stress. It measure things like memory usage, CPU usage, response times. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was trying to reach 1000 concurrent VUs over 60s


### Comparison


| Gateway                             | duration(p95)⬇️ |  RPS  |       Requests        |                       Durations                        |
| :---------------------------------- | :-------------: | :---: | :-------------------: | :----------------------------------------------------: |
| wundergraph                         |     1315ms      |  759  | 53197 total, 0 failed |    avg: 637ms, p95: 1315ms, max: 2202ms, med: 594ms    |
| apollo-router                       |     9596ms      |  116  | 8176 total, 0 failed  |  avg: 4576ms, p95: 9597ms, max: 14368ms, med: 4086ms   |
| mercurius                           |     10527ms     |  84   | 5892 total, 0 failed  |  avg: 6262ms, p95: 10527ms, max: 10830ms, med: 6484ms  |
| mesh                                |     12417ms     |  73   | 5222 total, 0 failed  |  avg: 7593ms, p95: 12418ms, max: 15757ms, med: 7538ms  |
| stitching-federation-with-yoga-bun  |     17645ms     |  69   | 4891 total, 0 failed  |  avg: 7735ms, p95: 17646ms, max: 25284ms, med: 6379ms  |
| apollo-gateway-with-yoga            |     20554ms     |  67   | 4793 total, 0 failed  |  avg: 8109ms, p95: 20554ms, max: 26155ms, med: 5053ms  |
| stitching-federation-with-yoga-deno |     21019ms     |  39   | 2934 total, 0 failed  | avg: 14372ms, p95: 21019ms, max: 23051ms, med: 15356ms |
| stitching-federation-with-yoga      |     27676ms     |  50   | 3837 total, 0 failed  | avg: 10844ms, p95: 27677ms, max: 32711ms, med: 8056ms  |
| apollo-server                       |     53032ms     |  43   | 3998 total, 6 failed  | avg: 11525ms, p95: 53033ms, max: 60002ms, med: 2834ms  |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 159591     ✗ 0     
     data_received..................: 265 MB  3.8 MB/s
     data_sent......................: 63 MB   902 kB/s
     http_req_blocked...............: avg=1.8ms    min=800ns  med=1.9µs    max=1.03s    p(90)=3.2µs    p(95)=6µs    
     http_req_connecting............: avg=1.79ms   min=0s     med=0s       max=1.03s    p(90)=0s       p(95)=0s     
     http_req_duration..............: avg=636.95ms min=6.51ms med=593.88ms max=2.2s     p(90)=1.14s    p(95)=1.31s  
       { expected_response:true }...: avg=636.95ms min=6.51ms med=593.88ms max=2.2s     p(90)=1.14s    p(95)=1.31s  
     http_req_failed................: 0.00%   ✓ 0          ✗ 53197 
     http_req_receiving.............: avg=6.15ms   min=13.6µs med=28.5µs   max=650.18ms p(90)=159.29µs p(95)=1.36ms 
     http_req_sending...............: avg=2.3ms    min=5.8µs  med=10.5µs   max=658.44ms p(90)=26.2µs   p(95)=118.5µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s       max=0s       p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=628.49ms min=6.36ms med=591.1ms  max=2.2s     p(90)=1.11s    p(95)=1.25s  
     http_reqs......................: 53197   759.839513/s
     iteration_duration.............: avg=649.79ms min=7.17ms med=602.15ms max=2.68s    p(90)=1.17s    p(95)=1.34s  
     iterations.....................: 53197   759.839513/s
     vus............................: 6       min=6        max=993 
     vus_max........................: 1000    min=1000     max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4673a1af-5cac-4eb3-0c3b-cdd053995b00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/237f122a-6af1-4fc0-49ae-563a50b1a600/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 8168 / ✗ 8
     ✗ valid response structure
      ↳  99% — ✓ 8168 / ✗ 8

     checks.........................: 99.93% ✓ 24512      ✗ 16    
     data_received..................: 41 MB  582 kB/s
     data_sent......................: 9.7 MB 139 kB/s
     http_req_blocked...............: avg=163.99µs min=900ns   med=2.2µs  max=223.95ms p(90)=147.79µs p(95)=367.87µs
     http_req_connecting............: avg=141.83µs min=0s      med=0s     max=202.04ms p(90)=94.74µs  p(95)=309.29µs
     http_req_duration..............: avg=4.57s    min=8.42ms  med=4.08s  max=14.36s   p(90)=8.83s    p(95)=9.59s   
       { expected_response:true }...: avg=4.57s    min=8.42ms  med=4.08s  max=14.36s   p(90)=8.83s    p(95)=9.59s   
     http_req_failed................: 0.00%  ✓ 0          ✗ 8176  
     http_req_receiving.............: avg=569.12µs min=14.99µs med=39µs   max=118.93ms p(90)=66.89µs  p(95)=79.62µs 
     http_req_sending...............: avg=156.12µs min=5.6µs   med=12.6µs max=188.6ms  p(90)=50.39µs  p(95)=70.02µs 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=4.57s    min=8.34ms  med=4.08s  max=14.36s   p(90)=8.83s    p(95)=9.59s   
     http_reqs......................: 8176   116.779731/s
     iteration_duration.............: avg=4.57s    min=8.97ms  med=4.08s  max=14.36s   p(90)=8.83s    p(95)=9.59s   
     iterations.....................: 8176   116.779731/s
     vus............................: 7      min=7        max=1000
     vus_max........................: 1000   min=1000     max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a222bf2e-2253-427c-6484-d75ffd16aa00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/aec02538-8746-45c4-0163-b4b189f0d700/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 17676     ✗ 0     
     data_received..................: 30 MB   423 kB/s
     data_sent......................: 7.0 MB  100 kB/s
     http_req_blocked...............: avg=202.15µs min=1.1µs  med=2.8µs   max=30.63ms p(90)=374.6µs  p(95)=423.91µs
     http_req_connecting............: avg=186.89µs min=0s     med=0s      max=30.32ms p(90)=312.51µs p(95)=359.26µs
     http_req_duration..............: avg=6.26s    min=7.34ms med=6.48s   max=10.82s  p(90)=10.07s   p(95)=10.52s  
       { expected_response:true }...: avg=6.26s    min=7.34ms med=6.48s   max=10.82s  p(90)=10.07s   p(95)=10.52s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 5892  
     http_req_receiving.............: avg=68.31µs  min=20.8µs med=57.85µs max=19.78ms p(90)=86.6µs   p(95)=95.4µs  
     http_req_sending...............: avg=46.59µs  min=6.8µs  med=17.1µs  max=11.77ms p(90)=65.09µs  p(95)=82.04µs 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=6.26s    min=7.27ms med=6.48s   max=10.82s  p(90)=10.07s   p(95)=10.52s  
     http_reqs......................: 5892    84.156135/s
     iteration_duration.............: avg=6.26s    min=7.92ms med=6.48s   max=10.83s  p(90)=10.07s   p(95)=10.52s  
     iterations.....................: 5892    84.156135/s
     vus............................: 7       min=7       max=1000
     vus_max........................: 1000    min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/95767e2d-aaba-49ba-ba5d-4d1f10ca8300/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/54a99de9-9e3c-4653-7125-c3eafb797f00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 5211 / ✗ 11
     ✗ valid response structure
      ↳  99% — ✓ 5211 / ✗ 11

     checks.........................: 99.85% ✓ 15644     ✗ 22    
     data_received..................: 26 MB  369 kB/s
     data_sent......................: 6.2 MB 88 kB/s
     http_req_blocked...............: avg=182.84µs min=1.4µs    med=3µs    max=66.26ms  p(90)=494.38µs p(95)=560.3µs 
     http_req_connecting............: avg=160.7µs  min=0s       med=0s     max=65.26ms  p(90)=416.59µs p(95)=479.54µs
     http_req_duration..............: avg=7.59s    min=639.11ms med=7.53s  max=15.75s   p(90)=11.84s   p(95)=12.41s  
       { expected_response:true }...: avg=7.59s    min=639.11ms med=7.53s  max=15.75s   p(90)=11.84s   p(95)=12.41s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 5222  
     http_req_receiving.............: avg=80.38µs  min=23.3µs   med=62.3µs max=15.7ms   p(90)=95.2µs   p(95)=107.29µs
     http_req_sending...............: avg=133.57µs min=8.8µs    med=17µs   max=107.33ms p(90)=74.29µs  p(95)=90.69µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=7.59s    min=639.05ms med=7.53s  max=15.75s   p(90)=11.84s   p(95)=12.41s  
     http_reqs......................: 5222   73.873429/s
     iteration_duration.............: avg=7.59s    min=639.7ms  med=7.53s  max=15.75s   p(90)=11.84s   p(95)=12.42s  
     iterations.....................: 5222   73.873429/s
     vus............................: 119    min=54      max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/bb57095c-2a21-4e72-5cb0-1d2db1f3cf00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ce18425e-bfe2-409a-d21e-12e509b10100/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 14673     ✗ 0     
     data_received..................: 24 MB   348 kB/s
     data_sent......................: 5.8 MB  83 kB/s
     http_req_blocked...............: avg=1.98ms   min=1.3µs   med=2.6µs  max=814.58ms p(90)=232.1µs p(95)=494.96µs
     http_req_connecting............: avg=1.96ms   min=0s      med=0s     max=814.52ms p(90)=149.9µs p(95)=420.71µs
     http_req_duration..............: avg=7.73s    min=25.06ms med=6.37s  max=25.28s   p(90)=13.85s  p(95)=17.64s  
       { expected_response:true }...: avg=7.73s    min=25.06ms med=6.37s  max=25.28s   p(90)=13.85s  p(95)=17.64s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 4891  
     http_req_receiving.............: avg=712.45µs min=19.7µs  med=37.6µs max=401.01ms p(90)=85.9µs  p(95)=256.1µs 
     http_req_sending...............: avg=1.38ms   min=7.7µs   med=13.8µs max=544.58ms p(90)=86.6µs  p(95)=183.2µs 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=7.73s    min=24.94ms med=6.37s  max=25.28s   p(90)=13.85s  p(95)=17.64s  
     http_reqs......................: 4891    69.854288/s
     iteration_duration.............: avg=7.73s    min=26.01ms med=6.4s   max=25.28s   p(90)=13.85s  p(95)=17.64s  
     iterations.....................: 4891    69.854288/s
     vus............................: 9       min=9       max=1000
     vus_max........................: 1000    min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7abc31ed-236e-4e1a-9f62-5e1eac8e9e00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7e7ecb37-28e3-4d39-27c7-6177cd864700/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  82% — ✓ 3944 / ✗ 849
     ✗ valid response structure
      ↳  82% — ✓ 3944 / ✗ 849

     checks.........................: 88.19% ✓ 12681     ✗ 1698  
     data_received..................: 23 MB  318 kB/s
     data_sent......................: 5.7 MB 80 kB/s
     http_req_blocked...............: avg=117.43µs min=1µs     med=2.29µs max=48.62ms p(90)=381µs    p(95)=423.68µs
     http_req_connecting............: avg=101.7µs  min=0s      med=0s     max=48.55ms p(90)=317.74µs p(95)=356.82µs
     http_req_duration..............: avg=8.1s     min=84.95ms med=5.05s  max=26.15s  p(90)=18.24s   p(95)=20.55s  
       { expected_response:true }...: avg=8.1s     min=84.95ms med=5.05s  max=26.15s  p(90)=18.24s   p(95)=20.55s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 4793  
     http_req_receiving.............: avg=85.4µs   min=14.6µs  med=40.2µs max=55.47ms p(90)=75µs     p(95)=88.4µs  
     http_req_sending...............: avg=69.89µs  min=6.2µs   med=13.8µs max=21.06ms p(90)=69.8µs   p(95)=86.42µs 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=8.1s     min=84.89ms med=5.05s  max=26.15s  p(90)=18.24s   p(95)=20.55s  
     http_reqs......................: 4793   67.463597/s
     iteration_duration.............: avg=8.1s     min=85.5ms  med=5.05s  max=26.15s  p(90)=18.24s   p(95)=20.55s  
     iterations.....................: 4793   67.463597/s
     vus............................: 174    min=55      max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/78590ddf-3685-4ec0-a86b-2c905cd36300/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/bedb71f4-1f6d-4434-7a65-4577f9e3d700/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-deno`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 2930 / ✗ 4
     ✗ valid response structure
      ↳  99% — ✓ 2930 / ✗ 4

     checks.........................: 99.90% ✓ 8794      ✗ 8     
     data_received..................: 15 MB  199 kB/s
     data_sent......................: 3.5 MB 47 kB/s
     http_req_blocked...............: avg=431.05µs min=1.4µs  med=3.7µs   max=35.37ms p(90)=641.43µs p(95)=774.11µs
     http_req_connecting............: avg=394.47µs min=0s     med=0s      max=34.92ms p(90)=545.4µs  p(95)=666.56µs
     http_req_duration..............: avg=14.37s   min=2.93s  med=15.35s  max=23.05s  p(90)=20.78s   p(95)=21.01s  
       { expected_response:true }...: avg=14.37s   min=2.93s  med=15.35s  max=23.05s  p(90)=20.78s   p(95)=21.01s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 2934  
     http_req_receiving.............: avg=216.27µs min=22.5µs med=63.59µs max=25.32ms p(90)=156.17µs p(95)=284.12µs
     http_req_sending...............: avg=87.65µs  min=9.79µs med=24.5µs  max=13.95ms p(90)=112.26µs p(95)=152.58µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=14.37s   min=2.93s  med=15.35s  max=23.05s  p(90)=20.78s   p(95)=21.01s  
     http_reqs......................: 2934   39.715682/s
     iteration_duration.............: avg=14.37s   min=2.95s  med=15.35s  max=23.05s  p(90)=20.78s   p(95)=21.02s  
     iterations.....................: 2934   39.715682/s
     vus............................: 263    min=55      max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5c571354-aabd-4b9a-fd77-1227a751fc00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4cb4b43d-5204-4028-be04-d6a633996500/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  73% — ✓ 2834 / ✗ 1003
     ✗ valid response structure
      ↳  73% — ✓ 2834 / ✗ 1003

     checks.........................: 82.57% ✓ 9505      ✗ 2006  
     data_received..................: 23 MB  310 kB/s
     data_sent......................: 4.6 MB 60 kB/s
     http_req_blocked...............: avg=162.33µs min=900ns  med=2.5µs  max=24.35ms p(90)=387.77µs p(95)=426.54µs
     http_req_connecting............: avg=140.32µs min=0s     med=0s     max=20.03ms p(90)=322.73µs p(95)=363.65µs
     http_req_duration..............: avg=10.84s   min=1.48s  med=8.05s  max=32.71s  p(90)=20.14s   p(95)=27.67s  
       { expected_response:true }...: avg=10.84s   min=1.48s  med=8.05s  max=32.71s  p(90)=20.14s   p(95)=27.67s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 3837  
     http_req_receiving.............: avg=63.65µs  min=14.5µs med=43.6µs max=18.57ms p(90)=84.94µs  p(95)=101µs   
     http_req_sending...............: avg=65.51µs  min=6µs    med=15.4µs max=9.71ms  p(90)=72.2µs   p(95)=89.81µs 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=10.84s   min=1.48s  med=8.05s  max=32.71s  p(90)=20.14s   p(95)=27.67s  
     http_reqs......................: 3837   50.697053/s
     iteration_duration.............: avg=10.84s   min=1.49s  med=8.05s  max=32.71s  p(90)=20.14s   p(95)=27.67s  
     iterations.....................: 3837   50.697053/s
     vus............................: 45     min=45      max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/02f9ae10-9473-4e68-e9a9-7f6552178500/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6cfa6f1f-7af5-405d-8400-a15c816f6100/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  99% — ✓ 3992 / ✗ 6
     ✗ no graphql errors
      ↳  99% — ✓ 3959 / ✗ 39
     ✗ valid response structure
      ↳  99% — ✓ 3959 / ✗ 33

     checks.........................: 99.34% ✓ 11910     ✗ 78    
     data_received..................: 21 MB  223 kB/s
     data_sent......................: 4.8 MB 52 kB/s
     http_req_blocked...............: avg=270.26µs min=1.9µs    med=3.7µs  max=18.41ms p(90)=495.02µs p(95)=549.56µs
     http_req_connecting............: avg=242µs    min=0s       med=0s     max=18.34ms p(90)=412.48µs p(95)=462.65µs
     http_req_duration..............: avg=11.52s   min=118.07ms med=2.83s  max=1m0s    p(90)=44.57s   p(95)=53.03s  
       { expected_response:true }...: avg=11.45s   min=118.07ms med=2.82s  max=59.99s  p(90)=44.37s   p(95)=52.78s  
     http_req_failed................: 0.15%  ✓ 6         ✗ 3992  
     http_req_receiving.............: avg=93.43µs  min=0s       med=86.4µs max=6.28ms  p(90)=121.7µs  p(95)=137.82µs
     http_req_sending...............: avg=68.2µs   min=12µs     med=22µs   max=18.36ms p(90)=88.33µs  p(95)=110.66µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=11.52s   min=117.96ms med=2.83s  max=1m0s    p(90)=44.56s   p(95)=53.03s  
     http_reqs......................: 3998   43.505365/s
     iteration_duration.............: avg=11.52s   min=118.9ms  med=2.83s  max=1m0s    p(90)=44.57s   p(95)=53.03s  
     iterations.....................: 3998   43.505365/s
     vus............................: 12     min=12      max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/560f8982-8bbc-4d51-7f96-626c9ab66300/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6a43db69-33e1-467c-2d5c-5c0129b72000/public" alt="HTTP Overview" />


  </details>