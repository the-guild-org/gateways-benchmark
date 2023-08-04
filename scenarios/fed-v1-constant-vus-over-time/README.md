## Overview for: `scenarios/fed-v1-constant-vus-over-time`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. It's being executed with a constant amount of VUs over a fixed amount of time. It measure things like memory usage, CPU usage, average RPS. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was running 400 VUs over 200s


### Comparison


| Gateway                             | RPS ⬇️ |        Requests         |         Duration          |
| :---------------------------------- | :----: | :---------------------: | :-----------------------: |
| wundergraph                         |  645   | 129286 total, 0 failed  |  avg: 611ms, p95: 890ms   |
| mesh-supergraph                     |  102   |  20633 total, 0 failed  | avg: 3891ms, p95: 4725ms  |
| apollo-router                       |  101   |  20692 total, 0 failed  | avg: 3897ms, p95: 5453ms  |
| stitching-federation-with-yoga-bun  |   94   |  18978 total, 0 failed  | avg: 4227ms, p95: 5588ms  |
| stitching-federation-with-yoga      |   90   | 18338 total, 96 failed  | avg: 4405ms, p95: 6120ms  |
| stitching-federation-with-yoga-deno |   89   |  18168 total, 0 failed  | avg: 4436ms, p95: 5159ms  |
| stitching-federation-with-yoga-uws  |   87   |  17627 total, 0 failed  | avg: 4564ms, p95: 7379ms  |
| mesh                                |   85   |  17233 total, 0 failed  | avg: 4667ms, p95: 6581ms  |
| apollo-server                       |   67   | 14513 total, 609 failed | avg: 5653ms, p95: 28398ms |
| apollo-gateway-with-yoga-uws        |   63   |  12900 total, 0 failed  | avg: 6292ms, p95: 17053ms |
| apollo-server-node16                |   53   |  10931 total, 0 failed  | avg: 7437ms, p95: 18002ms |
| mercurius                           |   53   |  10819 total, 0 failed  | avg: 7431ms, p95: 8662ms  |
| apollo-gateway-with-yoga            |   41   | 9150 total, 738 failed  | avg: 9186ms, p95: 59985ms |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 387858     ✗ 0     
     data_received..................: 644 MB  3.2 MB/s
     data_sent......................: 154 MB  766 kB/s
     http_req_blocked...............: avg=397.26µs min=1.2µs    med=2.5µs    max=234.45ms p(90)=3.9µs    p(95)=4.8µs   
     http_req_connecting............: avg=353.15µs min=0s       med=0s       max=204.61ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=611.19ms min=115.28ms med=590.83ms max=1.71s    p(90)=817.95ms p(95)=889.66ms
       { expected_response:true }...: avg=611.19ms min=115.28ms med=590.83ms max=1.71s    p(90)=817.95ms p(95)=889.66ms
   ✓ http_req_failed................: 0.00%   ✓ 0          ✗ 129286
     http_req_receiving.............: avg=6.4ms    min=16µs     med=39.9µs   max=671.97ms p(90)=375.58µs p(95)=19.11ms 
     http_req_sending...............: avg=1.21ms   min=7.2µs    med=13.6µs   max=537.95ms p(90)=31.5µs   p(95)=134.01µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=603.58ms min=115.23ms med=587.61ms max=1.64s    p(90)=798.45ms p(95)=860.64ms
     http_reqs......................: 129286  645.010957/s
     iteration_duration.............: avg=619.48ms min=156.48ms med=597.5ms  max=2.02s    p(90)=828.9ms  p(95)=907.87ms
     iterations.....................: 129286  645.010957/s
     vus............................: 400     min=400      max=400 
     vus_max........................: 400     min=400      max=400 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/993834c7-9cb4-4b90-1e34-8552fc3c7500/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f421358a-1b1a-4256-1ed5-3756eab96f00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 20571 / ✗ 62
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 20633

     checks.........................: 66.56% ✓ 41204      ✗ 20695
     data_received..................: 104 MB 516 kB/s
     data_sent......................: 25 MB  122 kB/s
     http_req_blocked...............: avg=1.85ms   min=1.2µs  med=2.2µs  max=177.09ms p(90)=3.5µs  p(95)=4.59µs
     http_req_connecting............: avg=1.83ms   min=0s     med=0s     max=177.06ms p(90)=0s     p(95)=0s    
     http_req_duration..............: avg=3.89s    min=1.48s  med=3.82s  max=7.93s    p(90)=4.42s  p(95)=4.72s 
       { expected_response:true }...: avg=3.89s    min=1.48s  med=3.82s  max=7.93s    p(90)=4.42s  p(95)=4.72s 
   ✓ http_req_failed................: 0.00%  ✓ 0          ✗ 20633
     http_req_receiving.............: avg=58.35µs  min=20.4µs med=50.8µs max=21.18ms  p(90)=71.9µs p(95)=80.7µs
     http_req_sending...............: avg=458.84µs min=8µs    med=12.8µs max=76.5ms   p(90)=24.5µs p(95)=29.3µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s     p(95)=0s    
     http_req_waiting...............: avg=3.89s    min=1.48s  med=3.82s  max=7.91s    p(90)=4.42s  p(95)=4.72s 
     http_reqs......................: 20633  102.387711/s
     iteration_duration.............: avg=3.89s    min=1.48s  med=3.82s  max=8.02s    p(90)=4.42s  p(95)=4.72s 
     iterations.....................: 20633  102.387711/s
     vus............................: 255    min=255      max=400
     vus_max........................: 400    min=400      max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/bc31c989-b4c8-476f-f0db-e852ce0e3600/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1e7f1b35-690f-48d5-c1e1-8e468b187f00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 20679 / ✗ 13
     ✗ valid response structure
      ↳  99% — ✓ 20679 / ✗ 13

     checks.........................: 99.95% ✓ 62050      ✗ 26   
     data_received..................: 103 MB 507 kB/s
     data_sent......................: 25 MB  121 kB/s
     http_req_blocked...............: avg=2.32ms   min=1.2µs med=2.5µs  max=223.42ms p(90)=4µs    p(95)=10.04µs
     http_req_connecting............: avg=2.29ms   min=0s    med=0s     max=200.89ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=3.89s    min=1.24s med=3.74s  max=9.57s    p(90)=4.76s  p(95)=5.45s  
       { expected_response:true }...: avg=3.89s    min=1.24s med=3.74s  max=9.57s    p(90)=4.76s  p(95)=5.45s  
   ✓ http_req_failed................: 0.00%  ✓ 0          ✗ 20692
     http_req_receiving.............: avg=109.42µs min=19µs  med=47.7µs max=85.02ms  p(90)=76.8µs p(95)=89.9µs 
     http_req_sending...............: avg=741.23µs min=6.9µs med=14.3µs max=119.67ms p(90)=31.2µs p(95)=100µs  
     http_req_tls_handshaking.......: avg=0s       min=0s    med=0s     max=0s       p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=3.89s    min=1.24s med=3.74s  max=9.56s    p(90)=4.76s  p(95)=5.45s  
     http_reqs......................: 20692  101.878607/s
     iteration_duration.............: avg=3.9s     min=1.25s med=3.74s  max=9.64s    p(90)=4.76s  p(95)=5.45s  
     iterations.....................: 20692  101.878607/s
     vus............................: 123    min=123      max=400
     vus_max........................: 400    min=400      max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/65f625a5-b5bf-4e24-9fa0-2a979817e500/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/065c3506-e509-49fa-6606-2278460eff00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 56934    ✗ 0    
     data_received..................: 95 MB   469 kB/s
     data_sent......................: 23 MB   112 kB/s
     http_req_blocked...............: avg=805.97µs min=1.3µs    med=2.5µs  max=95.65ms  p(90)=4.1µs  p(95)=19.7µs  
     http_req_connecting............: avg=788.05µs min=0s       med=0s     max=61.99ms  p(90)=0s     p(95)=0s      
     http_req_duration..............: avg=4.22s    min=1s       med=4.06s  max=10.01s   p(90)=4.88s  p(95)=5.58s   
       { expected_response:true }...: avg=4.22s    min=1s       med=4.06s  max=10.01s   p(90)=4.88s  p(95)=5.58s   
   ✓ http_req_failed................: 0.00%   ✓ 0        ✗ 18978
     http_req_receiving.............: avg=142.97µs min=21.8µs   med=54µs   max=131.27ms p(90)=89.2µs p(95)=158.13µs
     http_req_sending...............: avg=334.77µs min=9.29µs   med=15.2µs max=139.58ms p(90)=47.9µs p(95)=155.01µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=4.22s    min=997.99ms med=4.06s  max=10s      p(90)=4.88s  p(95)=5.58s   
     http_reqs......................: 18978   94.09356/s
     iteration_duration.............: avg=4.22s    min=1.04s    med=4.06s  max=10.01s   p(90)=4.88s  p(95)=5.58s   
     iterations.....................: 18978   94.09356/s
     vus............................: 101     min=101    max=400
     vus_max........................: 400     min=400    max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ffd22157-4c35-44f3-9f08-8b3d9b7f1f00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0822d895-53de-48d5-f898-6448e78d4400/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  99% — ✓ 18242 / ✗ 96
     ✗ no graphql errors
      ↳  98% — ✓ 17974 / ✗ 364
     ✗ valid response structure
      ↳  98% — ✓ 17974 / ✗ 268

     checks.........................: 98.67% ✓ 54190     ✗ 728  
     data_received..................: 96 MB  474 kB/s
     data_sent......................: 22 MB  107 kB/s
     http_req_blocked...............: avg=1.63ms   min=1.1µs    med=2µs    max=114.28ms p(90)=3.1µs  p(95)=7.92µs 
     http_req_connecting............: avg=1.6ms    min=0s       med=0s     max=110.19ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=4.4s     min=854.4ms  med=3.56s  max=1m0s     p(90)=5.59s  p(95)=6.11s  
       { expected_response:true }...: avg=4.11s    min=854.4ms  med=3.56s  max=59.51s   p(90)=5.53s  p(95)=6.05s  
   ✓ http_req_failed................: 0.52%  ✓ 96        ✗ 18242
     http_req_receiving.............: avg=51.88µs  min=0s       med=36.4µs max=13.21ms  p(90)=65µs   p(95)=77.39µs
     http_req_sending...............: avg=239.02µs min=6.7µs    med=11.6µs max=70.12ms  p(90)=26.4µs p(95)=37.31µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=4.4s     min=854.34ms med=3.56s  max=1m0s     p(90)=5.59s  p(95)=6.11s  
     http_reqs......................: 18338  90.313795/s
     iteration_duration.............: avg=4.4s     min=854.71ms med=3.56s  max=1m0s     p(90)=5.59s  p(95)=6.12s  
     iterations.....................: 18338  90.313795/s
     vus............................: 69     min=69      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/237873cf-a8f4-482f-2b10-0fe5b1260a00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/53839f1a-6a9e-405a-f02e-dc8670c19a00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-deno`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 18092 / ✗ 76
     ✗ valid response structure
      ↳  99% — ✓ 18092 / ✗ 76

     checks.........................: 99.72% ✓ 54352     ✗ 152  
     data_received..................: 92 MB  454 kB/s
     data_sent......................: 22 MB  107 kB/s
     http_req_blocked...............: avg=680.32µs min=1µs    med=2.2µs  max=59.8ms  p(90)=3.7µs   p(95)=4.8µs  
     http_req_connecting............: avg=664.27µs min=0s     med=0s     max=49.28ms p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=4.43s    min=2.34s  med=4.39s  max=7.16s   p(90)=4.73s   p(95)=5.15s  
       { expected_response:true }...: avg=4.43s    min=2.34s  med=4.39s  max=7.16s   p(90)=4.73s   p(95)=5.15s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 18168
     http_req_receiving.............: avg=132.25µs min=14.6µs med=32µs   max=33.71ms p(90)=80.83µs p(95)=115µs  
     http_req_sending...............: avg=108.85µs min=6µs    med=12.3µs max=27.78ms p(90)=28.6µs  p(95)=103.7µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=4.43s    min=2.34s  med=4.39s  max=7.16s   p(90)=4.73s   p(95)=5.15s  
     http_reqs......................: 18168  89.789017/s
     iteration_duration.............: avg=4.43s    min=2.34s  med=4.39s  max=7.16s   p(90)=4.73s   p(95)=5.16s  
     iterations.....................: 18168  89.789017/s
     vus............................: 189    min=189     max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a4b76d00-25e3-4ff6-7ed8-bd5c3fcfdc00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9dd9b4dd-5353-41d0-b43e-59e12c412500/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-uws`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  97% — ✓ 17105 / ✗ 522
     ✗ valid response structure
      ↳  97% — ✓ 17105 / ✗ 522

     checks.........................: 98.02% ✓ 51837    ✗ 1044 
     data_received..................: 96 MB  477 kB/s
     data_sent......................: 21 MB  104 kB/s
     http_req_blocked...............: avg=1.51ms   min=1µs    med=2µs    max=118.84ms p(90)=3.1µs  p(95)=6.1µs  
     http_req_connecting............: avg=1.49ms   min=0s     med=0s     max=118.81ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=4.56s    min=1.02s  med=4s     max=15.49s   p(90)=6.54s  p(95)=7.37s  
       { expected_response:true }...: avg=4.56s    min=1.02s  med=4s     max=15.49s   p(90)=6.54s  p(95)=7.37s  
   ✓ http_req_failed................: 0.00%  ✓ 0        ✗ 17627
     http_req_receiving.............: avg=73.42µs  min=17.1µs med=36.2µs max=30.47ms  p(90)=67µs   p(95)=79.3µs 
     http_req_sending...............: avg=110.52µs min=6.7µs  med=11.7µs max=51.06ms  p(90)=25.8µs p(95)=32.87µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=4.56s    min=1.02s  med=4s     max=15.49s   p(90)=6.54s  p(95)=7.37s  
     http_reqs......................: 17627  87.15279/s
     iteration_duration.............: avg=4.56s    min=1.02s  med=4s     max=15.49s   p(90)=6.54s  p(95)=7.38s  
     iterations.....................: 17627  87.15279/s
     vus............................: 146    min=146    max=400
     vus_max........................: 400    min=400    max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2f21151d-ef0c-4c89-607f-349159a43300/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/65cb1891-7041-4673-0d68-36dd85ceb900/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 17078 / ✗ 155
     ✗ valid response structure
      ↳  99% — ✓ 17078 / ✗ 155

     checks.........................: 99.40% ✓ 51389     ✗ 310  
     data_received..................: 89 MB  438 kB/s
     data_sent......................: 21 MB  101 kB/s
     http_req_blocked...............: avg=1.45ms   min=1.2µs  med=3µs    max=139.49ms p(90)=4.89µs  p(95)=11.23µs 
     http_req_connecting............: avg=1.43ms   min=0s     med=0s     max=139.46ms p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=4.66s    min=1.99s  med=4.5s   max=9.9s     p(90)=5.5s    p(95)=6.58s   
       { expected_response:true }...: avg=4.66s    min=1.99s  med=4.5s   max=9.9s     p(90)=5.5s    p(95)=6.58s   
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 17233
     http_req_receiving.............: avg=82.33µs  min=22.2µs med=64µs   max=23.09ms  p(90)=92.6µs  p(95)=105.54µs
     http_req_sending...............: avg=410.04µs min=8µs    med=16.6µs max=88.39ms  p(90)=31.98µs p(95)=45.04µs 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=4.66s    min=1.99s  med=4.5s   max=9.9s     p(90)=5.5s    p(95)=6.57s   
     http_reqs......................: 17233  85.300227/s
     iteration_duration.............: avg=4.66s    min=1.99s  med=4.5s   max=9.94s    p(90)=5.5s    p(95)=6.58s   
     iterations.....................: 17233  85.300227/s
     vus............................: 104    min=104     max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4d81b911-71eb-4042-c483-c6149bd97700/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/26372c43-cd65-4a68-712d-73e1d9c7ab00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  95% — ✓ 13904 / ✗ 609
     ✗ no graphql errors
      ↳  95% — ✓ 13878 / ✗ 635
     ✗ valid response structure
      ↳  99% — ✓ 13878 / ✗ 26

     checks.........................: 97.04% ✓ 41660     ✗ 1270 
     data_received..................: 72 MB  333 kB/s
     data_sent......................: 17 MB  80 kB/s
     http_req_blocked...............: avg=1.54ms   min=1.1µs    med=2.29µs max=130.35ms p(90)=4.2µs   p(95)=4.36ms  
     http_req_connecting............: avg=1.39ms   min=0s       med=0s     max=130.33ms p(90)=0s      p(95)=2.93ms  
     http_req_duration..............: avg=5.65s    min=435.45ms med=2.79s  max=1m0s     p(90)=3.21s   p(95)=28.39s  
       { expected_response:true }...: avg=3.27s    min=435.45ms med=2.78s  max=58.89s   p(90)=3.1s    p(95)=3.27s   
   ✓ http_req_failed................: 4.19%  ✓ 609       ✗ 13904
     http_req_receiving.............: avg=55.69µs  min=0s       med=50µs   max=9.02ms   p(90)=76.29µs p(95)=82.9µs  
     http_req_sending...............: avg=237.71µs min=6.4µs    med=13.5µs max=74.29ms  p(90)=30.7µs  p(95)=278.85µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=5.65s    min=435.37ms med=2.79s  max=1m0s     p(90)=3.21s   p(95)=28.39s  
     http_reqs......................: 14513  67.540322/s
     iteration_duration.............: avg=5.65s    min=436.07ms med=2.79s  max=1m0s     p(90)=3.21s   p(95)=28.4s   
     iterations.....................: 14513  67.540322/s
     vus............................: 32     min=32      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a5c0d5e5-5f74-4061-2edf-6e6c7ef8d500/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e8e69892-55fd-4f39-1035-340ff849d700/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga-uws`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  74% — ✓ 9658 / ✗ 3242
     ✗ valid response structure
      ↳  74% — ✓ 9658 / ✗ 3242

     checks.........................: 83.24% ✓ 32216     ✗ 6484 
     data_received..................: 59 MB  288 kB/s
     data_sent......................: 15 MB  75 kB/s
     http_req_blocked...............: avg=1.15ms   min=1.3µs    med=2.4µs  max=71.65ms p(90)=4µs    p(95)=13.5µs  
     http_req_connecting............: avg=1.13ms   min=0s       med=0s     max=71.62ms p(90)=0s     p(95)=0s      
     http_req_duration..............: avg=6.29s    min=841.24ms med=4.93s  max=21.52s  p(90)=14.26s p(95)=17.05s  
       { expected_response:true }...: avg=6.29s    min=841.24ms med=4.93s  max=21.52s  p(90)=14.26s p(95)=17.05s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 12900
     http_req_receiving.............: avg=68.37µs  min=13.7µs   med=48.9µs max=35.04ms p(90)=74.9µs p(95)=86.5µs  
     http_req_sending...............: avg=275.87µs min=7.2µs    med=13.1µs max=37.41ms p(90)=28.5µs p(95)=113.61µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=6.29s    min=841.18ms med=4.93s  max=21.52s  p(90)=14.26s p(95)=17.04s  
     http_reqs......................: 12900  63.138521/s
     iteration_duration.............: avg=6.29s    min=841.46ms med=4.93s  max=21.52s  p(90)=14.26s p(95)=17.06s  
     iterations.....................: 12900  63.138521/s
     vus............................: 140    min=140     max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d7ee0df7-ef80-40da-de80-127d4a15c100/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/bb7c2dff-37e0-4521-2948-9bdb211c3c00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server-node16`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  69% — ✓ 7611 / ✗ 3320
     ✗ valid response structure
      ↳  69% — ✓ 7611 / ✗ 3320

     checks.........................: 79.75% ✓ 26153     ✗ 6640 
     data_received..................: 51 MB  252 kB/s
     data_sent......................: 13 MB  64 kB/s
     http_req_blocked...............: avg=1.8ms    min=1.4µs    med=2.6µs  max=96.65ms p(90)=4.59µs p(95)=16.95µs 
     http_req_connecting............: avg=1.78ms   min=0s       med=0s     max=96.6ms  p(90)=0s     p(95)=0s      
     http_req_duration..............: avg=7.43s    min=594.14ms med=6.94s  max=22.78s  p(90)=16.16s p(95)=18s     
       { expected_response:true }...: avg=7.43s    min=594.14ms med=6.94s  max=22.78s  p(90)=16.16s p(95)=18s     
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 10931
     http_req_receiving.............: avg=72.59µs  min=25.2µs   med=57.1µs max=12.81ms p(90)=81.4µs p(95)=92.2µs  
     http_req_sending...............: avg=284.26µs min=8.6µs    med=14µs   max=27.24ms p(90)=30µs   p(95)=103.05µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=7.43s    min=594.07ms med=6.94s  max=22.78s  p(90)=16.15s p(95)=18s     
     http_reqs......................: 10931  53.517462/s
     iteration_duration.............: avg=7.43s    min=594.81ms med=6.94s  max=22.78s  p(90)=16.17s p(95)=18s     
     iterations.....................: 10931  53.517462/s
     vus............................: 233    min=233     max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/961cab14-b584-4051-ae2a-7c7760381f00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/553eef9d-9452-4aa5-d288-ab91b2ee0400/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 32457     ✗ 0    
     data_received..................: 54 MB   269 kB/s
     data_sent......................: 13 MB   64 kB/s
     http_req_blocked...............: avg=2.71ms  min=1.5µs  med=3.5µs  max=135.9ms  p(90)=5.8µs   p(95)=24.6µs  
     http_req_connecting............: avg=2.67ms  min=0s     med=0s     max=135.86ms p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=7.43s   min=2.27s  med=7.38s  max=17.44s   p(90)=7.9s    p(95)=8.66s   
       { expected_response:true }...: avg=7.43s   min=2.27s  med=7.38s  max=17.44s   p(90)=7.9s    p(95)=8.66s   
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 10819
     http_req_receiving.............: avg=94.24µs min=28.4µs med=83.1µs max=17.03ms  p(90)=128.3µs p(95)=152.61µs
     http_req_sending...............: avg=502.2µs min=9µs    med=22.3µs max=70.16ms  p(90)=49.5µs  p(95)=130.87µs
     http_req_tls_handshaking.......: avg=0s      min=0s     med=0s     max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=7.43s   min=2.27s  med=7.38s  max=17.44s   p(90)=7.9s    p(95)=8.66s   
     http_reqs......................: 10819   53.497143/s
     iteration_duration.............: avg=7.43s   min=2.27s  med=7.38s  max=17.56s   p(90)=7.9s    p(95)=8.66s   
     iterations.....................: 10819   53.497143/s
     vus............................: 114     min=114     max=400
     vus_max........................: 400     min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/52179994-d2e6-439b-9ebb-556a193e3900/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7ad56ff2-6d29-492c-f906-af4ccf471200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  91% — ✓ 8412 / ✗ 738
     ✗ no graphql errors
      ↳  91% — ✓ 8338 / ✗ 812
     ✗ valid response structure
      ↳  99% — ✓ 8338 / ✗ 74

     checks.........................: 93.92% ✓ 25088     ✗ 1624 
     data_received..................: 42 MB  193 kB/s
     data_sent......................: 11 MB  50 kB/s
     http_req_blocked...............: avg=3.56ms  min=1.7µs med=3.3µs   max=232.64ms p(90)=1.43ms  p(95)=28.41ms
     http_req_connecting............: avg=3.4ms   min=0s    med=0s      max=217.3ms  p(90)=1.16ms  p(95)=25.95ms
     http_req_duration..............: avg=9.18s   min=1.31s med=3.64s   max=1m0s     p(90)=35.55s  p(95)=59.98s 
       { expected_response:true }...: avg=4.73s   min=1.31s med=3.59s   max=59.26s   p(90)=4.28s   p(95)=4.97s  
   ✓ http_req_failed................: 8.06%  ✓ 738       ✗ 8412 
     http_req_receiving.............: avg=87.48µs min=0s    med=77.19µs max=7.27ms   p(90)=130.4µs p(95)=158.5µs
     http_req_sending...............: avg=1.44ms  min=9.6µs med=22.7µs  max=218.22ms p(90)=132µs   p(95)=2.09ms 
     http_req_tls_handshaking.......: avg=0s      min=0s    med=0s      max=0s       p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=9.18s   min=1.31s med=3.64s   max=1m0s     p(90)=35.55s  p(95)=59.98s 
     http_reqs......................: 9150   41.809387/s
     iteration_duration.............: avg=9.2s    min=1.31s med=3.64s   max=1m0s     p(90)=35.57s  p(95)=1m0s   
     iterations.....................: 9150   41.809387/s
     vus............................: 10     min=10      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/da4eca34-f978-41b1-ed31-53fc2034df00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f124877e-0aec-4acf-c30d-24f3fd1c6300/public" alt="HTTP Overview" />


  </details>