## Overview for: `scenarios/fed-v1-constant-vus-over-time`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. It's being executed with a constant amount of VUs over a fixed amount of time. It measure things like memory usage, CPU usage, average RPS. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was running 100 VUs over 60s


### Comparison


| Gateway                             | RPS ⬇️ |       Requests        |         Duration         |
| :---------------------------------- | :----: | :-------------------: | :----------------------: |
| wundergraph                         |  413   | 24899 total, 0 failed |  avg: 239ms, p95: 389ms  |
| stitching-federation-with-yoga-bun  |   93   | 5658 total, 0 failed  | avg: 1063ms, p95: 1578ms |
| stitching-federation-with-yoga-deno |   80   | 4897 total, 0 failed  | avg: 1231ms, p95: 1549ms |
| apollo-router                       |   78   | 4801 total, 0 failed  | avg: 1264ms, p95: 1970ms |
| stitching-federation-with-yoga      |   69   | 4252 total, 0 failed  | avg: 1423ms, p95: 1857ms |
| mercurius                           |   66   | 4001 total, 0 failed  | avg: 1505ms, p95: 1973ms |
| mesh-supergraph                     |   66   | 4006 total, 0 failed  | avg: 1504ms, p95: 2402ms |
| mesh                                |   56   | 3475 total, 0 failed  | avg: 1747ms, p95: 2502ms |
| apollo-server                       |   55   | 3365 total, 0 failed  | avg: 1804ms, p95: 2009ms |
| apollo-gateway-with-yoga            |   37   | 2309 total, 0 failed  | avg: 2638ms, p95: 3617ms |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 74697      ✗ 0    
     data_received..................: 124 MB  2.1 MB/s
     data_sent......................: 30 MB   491 kB/s
     http_req_blocked...............: avg=126.76µs min=1.4µs   med=2.7µs    max=55.95ms  p(90)=4.2µs    p(95)=6.7µs   
     http_req_connecting............: avg=114.86µs min=0s      med=0s       max=55.8ms   p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=238.5ms  min=41.03ms med=224.71ms max=861.76ms p(90)=339.83ms p(95)=389.22ms
       { expected_response:true }...: avg=238.5ms  min=41.03ms med=224.71ms max=861.76ms p(90)=339.83ms p(95)=389.22ms
   ✓ http_req_failed................: 0.00%   ✓ 0          ✗ 24899
     http_req_receiving.............: avg=1.44ms   min=20.5µs  med=54.1µs   max=195.37ms p(90)=285.8µs  p(95)=2.34ms  
     http_req_sending...............: avg=532.22µs min=8.6µs   med=15.3µs   max=319.83ms p(90)=46µs     p(95)=165.7µs 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=236.52ms min=40.1ms  med=223.43ms max=861.71ms p(90)=335.3ms  p(95)=382.28ms
     http_reqs......................: 24899   413.801797/s
     iteration_duration.............: avg=241.32ms min=41.84ms med=227.06ms max=862.47ms p(90)=344.1ms  p(95)=395.18ms
     iterations.....................: 24899   413.801797/s
     vus............................: 100     min=100      max=100
     vus_max........................: 100     min=100      max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/005c504a-7441-4ebb-e921-932ae9b99b00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/aec3ce66-a44f-4a52-5408-c8a5f2fe3000/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 16974    ✗ 0    
     data_received..................: 28 MB   466 kB/s
     data_sent......................: 6.7 MB  111 kB/s
     http_req_blocked...............: avg=89.92µs  min=1.3µs    med=2.4µs    max=17.1ms  p(90)=3.7µs  p(95)=11.3µs  
     http_req_connecting............: avg=82.93µs  min=0s       med=0s       max=17.06ms p(90)=0s     p(95)=0s      
     http_req_duration..............: avg=1.06s    min=524.35ms med=992.47ms max=3.2s    p(90)=1.36s  p(95)=1.57s   
       { expected_response:true }...: avg=1.06s    min=524.35ms med=992.47ms max=3.2s    p(90)=1.36s  p(95)=1.57s   
   ✓ http_req_failed................: 0.00%   ✓ 0        ✗ 5658 
     http_req_receiving.............: avg=122.84µs min=20.6µs   med=42.3µs   max=50.97ms p(90)=71.6µs p(95)=90.3µs  
     http_req_sending...............: avg=161.74µs min=7.9µs    med=14µs     max=22.06ms p(90)=32.7µs p(95)=166.72µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s      p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=1.06s    min=524.3ms  med=992ms    max=3.2s    p(90)=1.36s  p(95)=1.57s   
     http_reqs......................: 5658    93.47162/s
     iteration_duration.............: avg=1.06s    min=525.12ms med=993.38ms max=3.2s    p(90)=1.36s  p(95)=1.58s   
     iterations.....................: 5658    93.47162/s
     vus............................: 100     min=100    max=100
     vus_max........................: 100     min=100    max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0afb01a0-b5e3-4ee5-19f2-cda6e2051f00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/90aae961-7eed-46d8-4a6f-02e812809e00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-deno`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 4896 / ✗ 1
     ✗ valid response structure
      ↳  99% — ✓ 4896 / ✗ 1

     checks.........................: 99.98% ✓ 14689     ✗ 2    
     data_received..................: 25 MB  405 kB/s
     data_sent......................: 5.8 MB 96 kB/s
     http_req_blocked...............: avg=82.68µs  min=1.1µs    med=2.4µs  max=13.85ms p(90)=3.8µs   p(95)=5.8µs   
     http_req_connecting............: avg=73.69µs  min=0s       med=0s     max=13.82ms p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=1.23s    min=559.63ms med=1.2s   max=2.23s   p(90)=1.43s   p(95)=1.54s   
       { expected_response:true }...: avg=1.23s    min=559.63ms med=1.2s   max=2.23s   p(90)=1.43s   p(95)=1.54s   
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 4897 
     http_req_receiving.............: avg=119.21µs min=17.5µs   med=36.6µs max=17.41ms p(90)=81.7µs  p(95)=115.5µs 
     http_req_sending...............: avg=80.82µs  min=7.2µs    med=13.1µs max=22.13ms p(90)=28.44µs p(95)=102.22µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=1.23s    min=558.68ms med=1.19s  max=2.23s   p(90)=1.43s   p(95)=1.54s   
     http_reqs......................: 4897   80.907034/s
     iteration_duration.............: avg=1.23s    min=560.14ms med=1.2s   max=2.23s   p(90)=1.43s   p(95)=1.55s   
     iterations.....................: 4897   80.907034/s
     vus............................: 100    min=100     max=100
     vus_max........................: 100    min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9295a905-30d8-425a-f6a0-9d407ea18f00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d5ccb1af-41ba-4d24-e737-505a3deb4d00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 4797 / ✗ 4
     ✗ valid response structure
      ↳  99% — ✓ 4797 / ✗ 4

     checks.........................: 99.94% ✓ 14395     ✗ 8    
     data_received..................: 24 MB  391 kB/s
     data_sent......................: 5.7 MB 93 kB/s
     http_req_blocked...............: avg=280.69µs min=1.7µs    med=2.9µs  max=37.04ms p(90)=4.3µs   p(95)=19.7µs 
     http_req_connecting............: avg=269.08µs min=0s       med=0s     max=27.05ms p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=1.26s    min=303.63ms med=1.19s  max=5.2s    p(90)=1.59s   p(95)=1.97s  
       { expected_response:true }...: avg=1.26s    min=303.63ms med=1.19s  max=5.2s    p(90)=1.59s   p(95)=1.97s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 4801 
     http_req_receiving.............: avg=79.13µs  min=23.9µs   med=55µs   max=13.46ms p(90)=101.4µs p(95)=119.6µs
     http_req_sending...............: avg=61.71µs  min=11.4µs   med=17.2µs max=20.82ms p(90)=44.2µs  p(95)=76.8µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=1.26s    min=303.54ms med=1.19s  max=5.2s    p(90)=1.59s   p(95)=1.96s  
     http_reqs......................: 4801   78.478585/s
     iteration_duration.............: avg=1.26s    min=304.64ms med=1.19s  max=5.23s   p(90)=1.6s    p(95)=1.97s  
     iterations.....................: 4801   78.478585/s
     vus............................: 38     min=38      max=100
     vus_max........................: 100    min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/dcc167b3-9711-4369-e4c8-c9593e206f00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8b4afb6c-b2e6-4cd8-68d4-8c6929b52e00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 4247 / ✗ 5
     ✗ valid response structure
      ↳  99% — ✓ 4247 / ✗ 5

     checks.........................: 99.92% ✓ 12746     ✗ 10   
     data_received..................: 21 MB  350 kB/s
     data_sent......................: 5.0 MB 83 kB/s
     http_req_blocked...............: avg=508.1µs  min=1.3µs    med=2.29µs  max=49.05ms p(90)=4µs     p(95)=8.88µs  
     http_req_connecting............: avg=494.26µs min=0s       med=0s      max=36.05ms p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=1.42s    min=933.39ms med=1.37s   max=2.73s   p(90)=1.64s   p(95)=1.85s   
       { expected_response:true }...: avg=1.42s    min=933.39ms med=1.37s   max=2.73s   p(90)=1.64s   p(95)=1.85s   
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 4252 
     http_req_receiving.............: avg=69.37µs  min=20µs     med=48.45µs max=42.46ms p(90)=76.98µs p(95)=90.24µs 
     http_req_sending...............: avg=296.85µs min=7.7µs    med=13.2µs  max=36.86ms p(90)=28.6µs  p(95)=100.63µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=1.42s    min=933.35ms med=1.37s   max=2.73s   p(90)=1.64s   p(95)=1.85s   
     http_reqs......................: 4252   69.964335/s
     iteration_duration.............: avg=1.42s    min=934.05ms med=1.37s   max=2.73s   p(90)=1.64s   p(95)=1.85s   
     iterations.....................: 4252   69.964335/s
     vus............................: 100    min=100     max=100
     vus_max........................: 100    min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9d286420-3636-4ef3-b612-c150f2855b00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/24cb5188-0650-4919-8c32-2507d442e400/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 12003     ✗ 0    
     data_received..................: 20 MB   333 kB/s
     data_sent......................: 4.7 MB  79 kB/s
     http_req_blocked...............: avg=169.36µs min=1.5µs    med=3.4µs  max=16.79ms p(90)=4.7µs  p(95)=15.3µs 
     http_req_connecting............: avg=158.64µs min=0s       med=0s     max=16.74ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=1.5s     min=516.04ms med=1.45s  max=4.62s   p(90)=1.65s  p(95)=1.97s  
       { expected_response:true }...: avg=1.5s     min=516.04ms med=1.45s  max=4.62s   p(90)=1.65s  p(95)=1.97s  
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 4001 
     http_req_receiving.............: avg=72.77µs  min=25.8µs   med=71.7µs max=1.34ms  p(90)=93µs   p(95)=101.2µs
     http_req_sending...............: avg=93.46µs  min=8.2µs    med=19.5µs max=20.6ms  p(90)=37.2µs p(95)=65.2µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=1.5s     min=515.88ms med=1.45s  max=4.62s   p(90)=1.64s  p(95)=1.97s  
     http_reqs......................: 4001    66.117815/s
     iteration_duration.............: avg=1.5s     min=516.79ms med=1.45s  max=4.62s   p(90)=1.65s  p(95)=1.97s  
     iterations.....................: 4001    66.117815/s
     vus............................: 100     min=100     max=100
     vus_max........................: 100     min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7928ba48-6338-46a0-94b4-5b35b42ae400/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/bff2ee38-e04d-49db-7a90-4972ea55cb00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 4006

     checks.........................: 66.66% ✓ 8012      ✗ 4006 
     data_received..................: 20 MB  333 kB/s
     data_sent......................: 4.8 MB 79 kB/s
     http_req_blocked...............: avg=437.6µs  min=1.7µs    med=3µs     max=51.97ms p(90)=4.89µs   p(95)=20.29µs 
     http_req_connecting............: avg=425.36µs min=0s       med=0s      max=49.38ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=1.5s     min=423ms    med=1.37s   max=3.72s   p(90)=1.96s    p(95)=2.4s    
       { expected_response:true }...: avg=1.5s     min=423ms    med=1.37s   max=3.72s   p(90)=1.96s    p(95)=2.4s    
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 4006 
     http_req_receiving.............: avg=81.02µs  min=26.6µs   med=64.65µs max=10.13ms p(90)=110.44µs p(95)=127.29µs
     http_req_sending...............: avg=238.01µs min=11.1µs   med=17.3µs  max=46.12ms p(90)=41.49µs  p(95)=57.07µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=1.5s     min=422.89ms med=1.37s   max=3.72s   p(90)=1.96s    p(95)=2.4s    
     http_reqs......................: 4006   66.124071/s
     iteration_duration.............: avg=1.5s     min=423.49ms med=1.37s   max=3.74s   p(90)=1.97s    p(95)=2.4s    
     iterations.....................: 4006   66.124071/s
     vus............................: 100    min=100     max=100
     vus_max........................: 100    min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e2b03072-b3d4-4159-4160-d7868b68ca00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e54a810c-7035-4fc8-c55a-a09124a9eb00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 10425     ✗ 0    
     data_received..................: 17 MB   285 kB/s
     data_sent......................: 4.1 MB  68 kB/s
     http_req_blocked...............: avg=88.36µs  min=1.3µs    med=2.9µs   max=9.79ms  p(90)=4.8µs   p(95)=20.61µs 
     http_req_connecting............: avg=82.8µs   min=0s       med=0s      max=9.76ms  p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=1.74s    min=905.25ms med=1.68s   max=4.48s   p(90)=2.3s    p(95)=2.5s    
       { expected_response:true }...: avg=1.74s    min=905.25ms med=1.68s   max=4.48s   p(90)=2.3s    p(95)=2.5s    
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 3475 
     http_req_receiving.............: avg=100.22µs min=22.8µs   med=59.8µs  max=47.77ms p(90)=103.7µs p(95)=125.48µs
     http_req_sending...............: avg=91.82µs  min=10µs     med=16.29µs max=25.45ms p(90)=41.55µs p(95)=79.31µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=1.74s    min=905.1ms  med=1.68s   max=4.48s   p(90)=2.3s    p(95)=2.5s    
     http_reqs......................: 3475    56.984521/s
     iteration_duration.............: avg=1.74s    min=906.38ms med=1.68s   max=4.49s   p(90)=2.3s    p(95)=2.5s    
     iterations.....................: 3475    56.984521/s
     vus............................: 10      min=10      max=100
     vus_max........................: 100     min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9cd9f723-7178-416a-d62b-6c7ad1345100/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c333941c-8e2c-4b98-8de5-d953ea38c500/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 3350 / ✗ 15
     ✗ valid response structure
      ↳  99% — ✓ 3350 / ✗ 15

     checks.........................: 99.70% ✓ 10065     ✗ 30   
     data_received..................: 17 MB  284 kB/s
     data_sent......................: 4.0 MB 65 kB/s
     http_req_blocked...............: avg=231.74µs min=1.5µs    med=3µs     max=16.21ms p(90)=4.7µs  p(95)=16.6µs 
     http_req_connecting............: avg=227.14µs min=0s       med=0s      max=15.99ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=1.8s     min=413.83ms med=1.69s   max=16.76s  p(90)=1.91s  p(95)=2s     
       { expected_response:true }...: avg=1.8s     min=413.83ms med=1.69s   max=16.76s  p(90)=1.91s  p(95)=2s     
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 3365 
     http_req_receiving.............: avg=69.93µs  min=25.4µs   med=68.3µs  max=2.99ms  p(90)=89.4µs p(95)=94.6µs 
     http_req_sending...............: avg=106.3µs  min=10.1µs   med=17.89µs max=21.49ms p(90)=32.5µs p(95)=43.87µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s      p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=1.8s     min=413.74ms med=1.69s   max=16.76s  p(90)=1.91s  p(95)=2s     
     http_reqs......................: 3365   55.115655/s
     iteration_duration.............: avg=1.8s     min=414.11ms med=1.69s   max=16.77s  p(90)=1.91s  p(95)=2.01s  
     iterations.....................: 3365   55.115655/s
     vus............................: 40     min=40      max=100
     vus_max........................: 100    min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/40b89c54-e02d-490b-d423-84cedb273600/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/bdabfddc-a2e4-4a4a-8de8-c9d922b25f00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  98% — ✓ 2268 / ✗ 41
     ✗ valid response structure
      ↳  98% — ✓ 2268 / ✗ 41

     checks.........................: 98.81% ✓ 6845      ✗ 82   
     data_received..................: 12 MB  187 kB/s
     data_sent......................: 2.7 MB 45 kB/s
     http_req_blocked...............: avg=565.07µs min=1.8µs  med=3µs    max=25.46ms p(90)=5.1µs   p(95)=50.98µs 
     http_req_connecting............: avg=556.58µs min=0s     med=0s     max=25.33ms p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=2.63s    min=1.43s  med=2.5s   max=5.27s   p(90)=3.12s   p(95)=3.61s   
       { expected_response:true }...: avg=2.63s    min=1.43s  med=2.5s   max=5.27s   p(90)=3.12s   p(95)=3.61s   
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 2309 
     http_req_receiving.............: avg=83.96µs  min=31.6µs med=69.3µs max=9.6ms   p(90)=124.8µs p(95)=148.26µs
     http_req_sending...............: avg=114.09µs min=12.9µs med=18.9µs max=12.47ms p(90)=54.02µs p(95)=284.16µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=2.63s    min=1.43s  med=2.5s   max=5.27s   p(90)=3.12s   p(95)=3.61s   
     http_reqs......................: 2309   37.563033/s
     iteration_duration.............: avg=2.63s    min=1.43s  med=2.5s   max=5.29s   p(90)=3.12s   p(95)=3.61s   
     iterations.....................: 2309   37.563033/s
     vus............................: 63     min=63      max=100
     vus_max........................: 100    min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/171c579b-a1b9-46c3-4717-c195ff3f7500/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0f77a654-99f7-4bae-8d32-ec0bb6dd7d00/public" alt="HTTP Overview" />


  </details>