## Overview for scenario: `fed-v1-constant-vus-over-time`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. It's being executed with a constant amount of VUs over a fixed amount of time. It measure things like memory usage, CPU usage, average RPS. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was running 100 VUs over 60s


### Comparison


| Gateway                             | RPS ⬇️ |       Requests        |         Duration         |
| :---------------------------------- | :----: | :-------------------: | :----------------------: |
| wundergraph                         |  623   | 37426 total, 0 failed |  avg: 160ms, p95: 261ms  |
| apollo-router                       |  121   | 7377 total, 0 failed  | avg: 819ms, p95: 1288ms  |
| stitching-federation-with-yoga-bun  |   76   | 4595 total, 0 failed  | avg: 1309ms, p95: 2139ms |
| mesh                                |   75   | 4598 total, 0 failed  | avg: 1314ms, p95: 2082ms |
| mercurius                           |   65   | 3986 total, 0 failed  | avg: 1510ms, p95: 1932ms |
| stitching-federation-with-yoga-deno |   59   | 3624 total, 0 failed  | avg: 1665ms, p95: 2181ms |
| apollo-server                       |   48   | 2973 total, 0 failed  | avg: 2051ms, p95: 2343ms |
| apollo-gateway-with-yoga            |   39   | 2426 total, 0 failed  | avg: 2512ms, p95: 3452ms |
| stitching-federation-with-yoga      |   32   | 2030 total, 0 failed  | avg: 3006ms, p95: 3923ms |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 112278     ✗ 0    
     data_received..................: 186 MB  3.1 MB/s
     data_sent......................: 44 MB   740 kB/s
   ✓ expected_result................: 0.00%   ✓ 0          ✗ 0    
     http_req_blocked...............: avg=29.66µs  min=1µs     med=2.29µs   max=33.42ms  p(90)=3.4µs    p(95)=4.2µs   
     http_req_connecting............: avg=24.63µs  min=0s      med=0s       max=33.38ms  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=159.66ms min=24.83ms med=150.46ms max=468.57ms p(90)=230.37ms p(95)=261.06ms
       { expected_response:true }...: avg=159.66ms min=24.83ms med=150.46ms max=468.57ms p(90)=230.37ms p(95)=261.06ms
   ✓ http_req_failed................: 0.00%   ✓ 0          ✗ 37426
     http_req_receiving.............: avg=488.79µs min=18.2µs  med=50µs     max=117.96ms p(90)=227.42µs p(95)=659.29µs
     http_req_sending...............: avg=107.09µs min=7.1µs   med=13.5µs   max=73.3ms   p(90)=26.9µs   p(95)=76.88µs 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=159.06ms min=24.64ms med=150ms    max=468.52ms p(90)=229.28ms p(95)=259.87ms
     http_reqs......................: 37426   623.153003/s
     iteration_duration.............: avg=160.32ms min=25.13ms med=151.06ms max=469.11ms p(90)=231.08ms p(95)=261.76ms
     iterations.....................: 37426   623.153003/s
   ✓ no_errors......................: 0.00%   ✓ 0          ✗ 0    
     vus............................: 100     min=100      max=100
     vus_max........................: 100     min=100      max=100
```


**Performance Overview**


<img src="**INVALID CLOUDFLARE IMAGES LINK**" alt="Performance Overview" />


**HTTP Overview**


<img src="**INVALID CLOUDFLARE IMAGES LINK**" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 22131      ✗ 0    
     data_received..................: 37 MB   606 kB/s
     data_sent......................: 8.8 MB  144 kB/s
   ✓ expected_result................: 0.00%   ✓ 0          ✗ 0    
     http_req_blocked...............: avg=111.25µs min=1µs     med=2.1µs    max=30.31ms p(90)=3.1µs  p(95)=3.9µs  
     http_req_connecting............: avg=106.59µs min=0s      med=0s       max=30.27ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=818.78ms min=89.5ms  med=774.17ms max=3.86s   p(90)=1.05s  p(95)=1.28s  
       { expected_response:true }...: avg=818.78ms min=89.5ms  med=774.17ms max=3.86s   p(90)=1.05s  p(95)=1.28s  
   ✓ http_req_failed................: 0.00%   ✓ 0          ✗ 7377 
     http_req_receiving.............: avg=47.5µs   min=21.2µs  med=41.3µs   max=3.5ms   p(90)=61.8µs p(95)=69.42µs
     http_req_sending...............: avg=36.97µs  min=7.2µs   med=12.5µs   max=9.97ms  p(90)=23.3µs p(95)=28.9µs 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s      p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=818.7ms  min=89.43ms med=774.12ms max=3.86s   p(90)=1.05s  p(95)=1.28s  
     http_reqs......................: 7377    121.681141/s
     iteration_duration.............: avg=819.21ms min=89.9ms  med=774.46ms max=3.86s   p(90)=1.05s  p(95)=1.28s  
     iterations.....................: 7377    121.681141/s
   ✓ no_errors......................: 0.00%   ✓ 0          ✗ 0    
     vus............................: 100     min=100      max=100
     vus_max........................: 100     min=100      max=100
```


**Performance Overview**


<img src="**INVALID CLOUDFLARE IMAGES LINK**" alt="Performance Overview" />


**HTTP Overview**


<img src="**INVALID CLOUDFLARE IMAGES LINK**" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 13785     ✗ 0    
     data_received..................: 23 MB   380 kB/s
     data_sent......................: 5.5 MB  91 kB/s
   ✓ expected_result................: 0.00%   ✓ 0         ✗ 0    
     http_req_blocked...............: avg=88.85µs  min=1.2µs    med=2.1µs  max=10.98ms p(90)=3.3µs   p(95)=6.6µs   
     http_req_connecting............: avg=83.26µs  min=0s       med=0s     max=10.95ms p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=1.3s     min=597.78ms med=1.23s  max=3.14s   p(90)=1.77s   p(95)=2.13s   
       { expected_response:true }...: avg=1.3s     min=597.78ms med=1.23s  max=3.14s   p(90)=1.77s   p(95)=2.13s   
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 4595 
     http_req_receiving.............: avg=139.94µs min=17.89µs  med=33.7µs max=69.03ms p(90)=73.22µs p(95)=140.99µs
     http_req_sending...............: avg=106.05µs min=7.4µs    med=12µs   max=37.49ms p(90)=35.06µs p(95)=191.4µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=1.3s     min=597.73ms med=1.23s  max=3.14s   p(90)=1.77s   p(95)=2.13s   
     http_reqs......................: 4595    76.325308/s
     iteration_duration.............: avg=1.3s     min=598.16ms med=1.23s  max=3.14s   p(90)=1.77s   p(95)=2.13s   
     iterations.....................: 4595    76.325308/s
   ✓ no_errors......................: 0.00%   ✓ 0         ✗ 0    
     vus............................: 100     min=100     max=100
     vus_max........................: 100     min=100     max=100
```


**Performance Overview**


<img src="**INVALID CLOUDFLARE IMAGES LINK**" alt="Performance Overview" />


**HTTP Overview**


<img src="**INVALID CLOUDFLARE IMAGES LINK**" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 13794    ✗ 0    
     data_received..................: 23 MB   379 kB/s
     data_sent......................: 5.5 MB  90 kB/s
   ✓ expected_result................: 0.00%   ✓ 0        ✗ 0    
     http_req_blocked...............: avg=444.55µs min=1.4µs    med=2.4µs  max=45.41ms p(90)=3.6µs  p(95)=4.89µs 
     http_req_connecting............: avg=427.3µs  min=0s       med=0s     max=42.06ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=1.31s    min=593.29ms med=1.25s  max=3.28s   p(90)=1.82s  p(95)=2.08s  
       { expected_response:true }...: avg=1.31s    min=593.29ms med=1.25s  max=3.28s   p(90)=1.82s  p(95)=2.08s  
   ✓ http_req_failed................: 0.00%   ✓ 0        ✗ 4598 
     http_req_receiving.............: avg=59.28µs  min=22.6µs   med=49.7µs max=10.44ms p(90)=73.8µs p(95)=82.21µs
     http_req_sending...............: avg=72.16µs  min=8.69µs   med=14.1µs max=35.77ms p(90)=28.3µs p(95)=32.7µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=1.31s    min=593.21ms med=1.25s  max=3.28s   p(90)=1.82s  p(95)=2.08s  
     http_reqs......................: 4598    75.81452/s
     iteration_duration.............: avg=1.31s    min=593.64ms med=1.25s  max=3.29s   p(90)=1.82s  p(95)=2.08s  
     iterations.....................: 4598    75.81452/s
   ✓ no_errors......................: 0.00%   ✓ 0        ✗ 0    
     vus............................: 100     min=100    max=100
     vus_max........................: 100     min=100    max=100
```


**Performance Overview**


<img src="**INVALID CLOUDFLARE IMAGES LINK**" alt="Performance Overview" />


**HTTP Overview**


<img src="**INVALID CLOUDFLARE IMAGES LINK**" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 11958     ✗ 0    
     data_received..................: 20 MB   332 kB/s
     data_sent......................: 4.7 MB  78 kB/s
   ✓ expected_result................: 0.00%   ✓ 0         ✗ 0    
     http_req_blocked...............: avg=238.32µs min=1.4µs    med=3µs    max=24.37ms p(90)=4.2µs  p(95)=13.2µs  
     http_req_connecting............: avg=224.87µs min=0s       med=0s     max=24.34ms p(90)=0s     p(95)=0s      
     http_req_duration..............: avg=1.5s     min=405.84ms med=1.44s  max=3.45s   p(90)=1.69s  p(95)=1.93s   
       { expected_response:true }...: avg=1.5s     min=405.84ms med=1.44s  max=3.45s   p(90)=1.69s  p(95)=1.93s   
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 3986 
     http_req_receiving.............: avg=77.6µs   min=25.2µs   med=72.9µs max=6.57ms  p(90)=95.9µs p(95)=104.33µs
     http_req_sending...............: avg=81.35µs  min=8.5µs    med=19.1µs max=23.46ms p(90)=35.4µs p(95)=43.45µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=1.5s     min=405.74ms med=1.44s  max=3.45s   p(90)=1.69s  p(95)=1.93s   
     http_reqs......................: 3986    65.988808/s
     iteration_duration.............: avg=1.51s    min=406.2ms  med=1.44s  max=3.45s   p(90)=1.69s  p(95)=1.93s   
     iterations.....................: 3986    65.988808/s
   ✓ no_errors......................: 0.00%   ✓ 0         ✗ 0    
     vus............................: 100     min=100     max=100
     vus_max........................: 100     min=100     max=100
```


**Performance Overview**


<img src="**INVALID CLOUDFLARE IMAGES LINK**" alt="Performance Overview" />


**HTTP Overview**


<img src="**INVALID CLOUDFLARE IMAGES LINK**" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-deno`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 3619 / ✗ 5
     ✓ expected_result

     checks.........................: 99.95% ✓ 10867     ✗ 5    
     data_received..................: 18 MB  300 kB/s
     data_sent......................: 4.3 MB 71 kB/s
   ✓ expected_result................: 0.00%  ✓ 0         ✗ 0    
     http_req_blocked...............: avg=400.97µs min=1µs      med=2.2µs   max=27.11ms p(90)=3.8µs   p(95)=6.05µs  
     http_req_connecting............: avg=384.91µs min=0s       med=0s      max=27.07ms p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=1.66s    min=580.68ms med=1.61s   max=2.89s   p(90)=1.98s   p(95)=2.18s   
       { expected_response:true }...: avg=1.66s    min=580.68ms med=1.61s   max=2.89s   p(90)=1.98s   p(95)=2.18s   
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 3624 
     http_req_receiving.............: avg=84.55µs  min=18µs     med=36.65µs max=9.31ms  p(90)=84.3µs  p(95)=103.68µs
     http_req_sending...............: avg=188.39µs min=6.3µs    med=12.4µs  max=31.75ms p(90)=28.37µs p(95)=112.81µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=1.66s    min=580.62ms med=1.61s   max=2.89s   p(90)=1.98s   p(95)=2.18s   
     http_reqs......................: 3624   59.899214/s
     iteration_duration.............: avg=1.66s    min=581.09ms med=1.61s   max=2.9s    p(90)=1.98s   p(95)=2.19s   
     iterations.....................: 3624   59.899214/s
   ✓ no_errors......................: 0.00%  ✓ 0         ✗ 0    
     vus............................: 100    min=100     max=100
     vus_max........................: 100    min=100     max=100
```


**Performance Overview**


<img src="**INVALID CLOUDFLARE IMAGES LINK**" alt="Performance Overview" />


**HTTP Overview**


<img src="**INVALID CLOUDFLARE IMAGES LINK**" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 2961 / ✗ 12
     ✓ expected_result

     checks.........................: 99.86% ✓ 8907      ✗ 12   
     data_received..................: 15 MB  250 kB/s
     data_sent......................: 3.5 MB 58 kB/s
   ✓ expected_result................: 0.00%  ✓ 0         ✗ 0    
     http_req_blocked...............: avg=209.45µs min=1.6µs    med=2.7µs  max=14.86ms p(90)=4.1µs   p(95)=15.34µs
     http_req_connecting............: avg=200.98µs min=0s       med=0s     max=14.66ms p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=2.05s    min=906.83ms med=1.85s  max=23.08s  p(90)=2.16s   p(95)=2.34s  
       { expected_response:true }...: avg=2.05s    min=906.83ms med=1.85s  max=23.08s  p(90)=2.16s   p(95)=2.34s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 2973 
     http_req_receiving.............: avg=67.81µs  min=30.6µs   med=64.9µs max=1.44ms  p(90)=87.28µs p(95)=96.04µs
     http_req_sending...............: avg=37.26µs  min=11.2µs   med=17.1µs max=4.31ms  p(90)=34.2µs  p(95)=40.5µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=2.05s    min=906.74ms med=1.85s  max=23.08s  p(90)=2.16s   p(95)=2.34s  
     http_reqs......................: 2973   48.434997/s
     iteration_duration.............: avg=2.05s    min=907.27ms med=1.85s  max=23.08s  p(90)=2.16s   p(95)=2.34s  
     iterations.....................: 2973   48.434997/s
   ✓ no_errors......................: 0.00%  ✓ 0         ✗ 0    
     vus............................: 66     min=66      max=100
     vus_max........................: 100    min=100     max=100
```


**Performance Overview**


<img src="**INVALID CLOUDFLARE IMAGES LINK**" alt="Performance Overview" />


**HTTP Overview**


<img src="**INVALID CLOUDFLARE IMAGES LINK**" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  98% — ✓ 2392 / ✗ 34
     ✗ expected_result
      ↳  99% — ✓ 2424 / ✗ 2

     checks.........................: 99.50% ✓ 7242      ✗ 36   
     data_received..................: 12 MB  197 kB/s
     data_sent......................: 2.9 MB 47 kB/s
   ✓ expected_result................: 0.00%  ✓ 0         ✗ 0    
     http_req_blocked...............: avg=375.66µs min=1.6µs  med=3µs     max=19.26ms p(90)=5.1µs   p(95)=30.8µs  
     http_req_connecting............: avg=365.64µs min=0s     med=0s      max=19.07ms p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=2.51s    min=1.41s  med=2.36s   max=4.84s   p(90)=3.08s   p(95)=3.45s   
       { expected_response:true }...: avg=2.51s    min=1.41s  med=2.36s   max=4.84s   p(90)=3.08s   p(95)=3.45s   
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 2426 
     http_req_receiving.............: avg=82.73µs  min=25.6µs med=71.2µs  max=3.45ms  p(90)=117.5µs p(95)=144.5µs 
     http_req_sending...............: avg=68.42µs  min=11.8µs med=20.85µs max=4.6ms   p(90)=53.4µs  p(95)=150.95µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=2.51s    min=1.41s  med=2.36s   max=4.83s   p(90)=3.08s   p(95)=3.45s   
     http_reqs......................: 2426   39.465621/s
     iteration_duration.............: avg=2.51s    min=1.41s  med=2.36s   max=4.84s   p(90)=3.08s   p(95)=3.45s   
     iterations.....................: 2426   39.465621/s
   ✓ no_errors......................: 0.00%  ✓ 0         ✗ 0    
     vus............................: 59     min=59      max=100
     vus_max........................: 100    min=100     max=100
```


**Performance Overview**


<img src="**INVALID CLOUDFLARE IMAGES LINK**" alt="Performance Overview" />


**HTTP Overview**


<img src="**INVALID CLOUDFLARE IMAGES LINK**" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 2025 / ✗ 5
     ✓ expected_result

     checks.........................: 99.91% ✓ 6085      ✗ 5    
     data_received..................: 10 MB  165 kB/s
     data_sent......................: 2.4 MB 39 kB/s
   ✓ expected_result................: 0.00%  ✓ 0         ✗ 0    
     http_req_blocked...............: avg=570.89µs min=1.7µs  med=3.3µs  max=23.87ms p(90)=9.1µs    p(95)=48.21µs 
     http_req_connecting............: avg=548.36µs min=0s     med=0s     max=23.83ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=3s       min=1.58s  med=2.92s  max=5.83s   p(90)=3.47s    p(95)=3.92s   
       { expected_response:true }...: avg=3s       min=1.58s  med=2.92s  max=5.83s   p(90)=3.47s    p(95)=3.92s   
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 2030 
     http_req_receiving.............: avg=90.91µs  min=30.2µs med=81.3µs max=3.77ms  p(90)=131.11µs p(95)=157.57µs
     http_req_sending...............: avg=86.39µs  min=11.4µs med=22.9µs max=6.63ms  p(90)=54.31µs  p(95)=202.15µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=3s       min=1.58s  med=2.92s  max=5.83s   p(90)=3.47s    p(95)=3.91s   
     http_reqs......................: 2030   32.950935/s
     iteration_duration.............: avg=3s       min=1.58s  med=2.92s  max=5.84s   p(90)=3.47s    p(95)=3.93s   
     iterations.....................: 2030   32.950935/s
   ✓ no_errors......................: 0.00%  ✓ 0         ✗ 0    
     vus............................: 73     min=73      max=100
     vus_max........................: 100    min=100     max=100
```


**Performance Overview**


<img src="**INVALID CLOUDFLARE IMAGES LINK**" alt="Performance Overview" />


**HTTP Overview**


<img src="**INVALID CLOUDFLARE IMAGES LINK**" alt="HTTP Overview" />


  </details>