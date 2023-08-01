## Overview for: `fed-v1-ramping-vus`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. We are running a heavy load of concurrent VUs to measure response time and other stats, during stress. It measure things like memory usage, CPU usage, response times. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was trying to reach 1500 concurrent VUs over 300s


### Comparison


| Gateway                             | duration(p95)⬇️ |  RPS  |         Requests         |                       Durations                        |
| :---------------------------------- | :-------------: | :---: | :----------------------: | :----------------------------------------------------: |
| wundergraph                         |     2938ms      |  540  |  167453 total, 0 failed  |   avg: 1405ms, p95: 2939ms, max: 5669ms, med: 1275ms   |
| apollo-router                       |     13314ms     |  118  |  37221 total, 0 failed   |  avg: 6581ms, p95: 13315ms, max: 20616ms, med: 5930ms  |
| stitching-federation-with-yoga-bun  |     22095ms     |  83   |  26238 total, 0 failed   |  avg: 9400ms, p95: 22096ms, max: 46844ms, med: 9025ms  |
| mesh-supergraph                     |     22166ms     |  68   |  21687 total, 0 failed   | avg: 11434ms, p95: 22166ms, max: 28808ms, med: 10921ms |
| mercurius                           |     24207ms     |  59   |  18475 total, 0 failed   | avg: 13192ms, p95: 24207ms, max: 26229ms, med: 12843ms |
| mesh                                |     26622ms     |  55   |  17746 total, 0 failed   | avg: 14181ms, p95: 26622ms, max: 35873ms, med: 14419ms |
| stitching-federation-with-yoga-deno |     30927ms     |  51   |  16442 total, 0 failed   | avg: 15277ms, p95: 30927ms, max: 47530ms, med: 13883ms |
| apollo-gateway-with-yoga-uws        |     42479ms     |  48   |  15623 total, 0 failed   | avg: 16111ms, p95: 42479ms, max: 59756ms, med: 9958ms  |
| stitching-federation-with-yoga-uws  |     50720ms     |  50   | 15756 total, 1443 failed | avg: 15561ms, p95: 50720ms, max: 60009ms, med: 8013ms  |
| apollo-server-node16                |     51017ms     |  44   | 14932 total, 163 failed  | avg: 16809ms, p95: 51017ms, max: 60009ms, med: 10212ms |
| apollo-gateway-with-yoga            |     60000ms     |  63   | 21116 total, 2754 failed | avg: 11999ms, p95: 60000ms, max: 60043ms, med: 4003ms  |
| apollo-server                       |     60000ms     |  62   | 20941 total, 2762 failed | avg: 12099ms, p95: 60000ms, max: 60042ms, med: 4003ms  |
| stitching-federation-with-yoga      |     60000ms     |  73   | 24511 total, 2770 failed | avg: 10331ms, p95: 60000ms, max: 60029ms, med: 3272ms  |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 502359     ✗ 0     
     data_received..................: 834 MB  2.7 MB/s
     data_sent......................: 199 MB  641 kB/s
     http_req_blocked...............: avg=1.28ms min=1.3µs   med=2.9µs  max=1.81s    p(90)=5.2µs   p(95)=7.1µs  
     http_req_connecting............: avg=1.27ms min=0s      med=0s     max=1.81s    p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=1.4s   min=10.05ms med=1.27s  max=5.66s    p(90)=2.59s   p(95)=2.93s  
       { expected_response:true }...: avg=1.4s   min=10.05ms med=1.27s  max=5.66s    p(90)=2.59s   p(95)=2.93s  
     http_req_failed................: 0.00%   ✓ 0          ✗ 167453
     http_req_receiving.............: avg=5.16ms min=16.8µs  med=45.3µs max=955.93ms p(90)=270.5µs p(95)=1.62ms 
     http_req_sending...............: avg=2.19ms min=8µs     med=15.3µs max=1.15s    p(90)=45.6µs  p(95)=155.6µs
     http_req_tls_handshaking.......: avg=0s     min=0s      med=0s     max=0s       p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=1.39s  min=9.99ms  med=1.26s  max=5.66s    p(90)=2.57s   p(95)=2.91s  
     http_reqs......................: 167453  540.149909/s
     iteration_duration.............: avg=1.41s  min=11.26ms med=1.29s  max=5.66s    p(90)=2.61s   p(95)=2.96s  
     iterations.....................: 167453  540.149909/s
     vus............................: 3       min=0        max=1498
     vus_max........................: 1500    min=1111     max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0f99cd54-0c8e-4a2d-4bf4-eb9c1fa4c700/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/da385cd0-6430-4f47-343a-2ed749e3b800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 37137 / ✗ 84
     ✗ valid response structure
      ↳  99% — ✓ 37137 / ✗ 84

     checks.........................: 99.84% ✓ 111495     ✗ 168   
     data_received..................: 185 MB 592 kB/s
     data_sent......................: 44 MB  141 kB/s
     http_req_blocked...............: avg=60.92µs  min=900ns    med=2.1µs   max=487.49ms p(90)=3.3µs  p(95)=16.5µs
     http_req_connecting............: avg=49.38µs  min=0s       med=0s      max=487.34ms p(90)=0s     p(95)=0s    
     http_req_duration..............: avg=6.58s    min=208.01ms med=5.93s   max=20.61s   p(90)=12.21s p(95)=13.31s
       { expected_response:true }...: avg=6.58s    min=208.01ms med=5.93s   max=20.61s   p(90)=12.21s p(95)=13.31s
     http_req_failed................: 0.00%  ✓ 0          ✗ 37221 
     http_req_receiving.............: avg=385.73µs min=17µs     med=37.69µs max=277.24ms p(90)=67.4µs p(95)=78.3µs
     http_req_sending...............: avg=116.06µs min=5.7µs    med=12.5µs  max=362.98ms p(90)=28µs   p(95)=52µs  
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s       p(90)=0s     p(95)=0s    
     http_req_waiting...............: avg=6.58s    min=207.93ms med=5.92s   max=20.61s   p(90)=12.21s p(95)=13.31s
     http_reqs......................: 37221  118.961619/s
     iteration_duration.............: avg=6.58s    min=208.66ms med=5.93s   max=20.63s   p(90)=12.21s p(95)=13.31s
     iterations.....................: 37221  118.961619/s
     vus............................: 333    min=50       max=1500
     vus_max........................: 1500   min=1500     max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ec45dfa6-663a-4c2a-1863-94434ac54600/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d453e8cf-d8be-4745-99cc-8c2a93b33e00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 26237 / ✗ 1
     ✗ valid response structure
      ↳  99% — ✓ 26237 / ✗ 1

     checks.........................: 99.99% ✓ 78712     ✗ 2     
     data_received..................: 131 MB 416 kB/s
     data_sent......................: 31 MB  99 kB/s
     http_req_blocked...............: avg=203.84µs min=1.5µs    med=2.7µs  max=216.32ms p(90)=18.2µs p(95)=185.94µs
     http_req_connecting............: avg=191.9µs  min=0s       med=0s     max=216.15ms p(90)=0s     p(95)=115.01µs
     http_req_duration..............: avg=9.4s     min=672.16ms med=9.02s  max=46.84s   p(90)=13.4s  p(95)=22.09s  
       { expected_response:true }...: avg=9.4s     min=672.16ms med=9.02s  max=46.84s   p(90)=13.4s  p(95)=22.09s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 26238 
     http_req_receiving.............: avg=148.21µs min=25.4µs   med=61.6µs max=116.69ms p(90)=99.3µs p(95)=149.71µs
     http_req_sending...............: avg=235.58µs min=9.7µs    med=16.7µs max=124.06ms p(90)=62.7µs p(95)=114.7µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=9.4s     min=672.01ms med=9.02s  max=46.84s   p(90)=13.4s  p(95)=22.09s  
     http_reqs......................: 26238  83.437644/s
     iteration_duration.............: avg=9.4s     min=673.13ms med=9.02s  max=46.84s   p(90)=13.4s  p(95)=22.09s  
     iterations.....................: 26238  83.437644/s
     vus............................: 73     min=0       max=1500
     vus_max........................: 1500   min=1306    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/759d1e9a-2ac4-4cba-56c2-89a314ff9100/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/31940e82-b773-4098-d82d-e3437d937d00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  98% — ✓ 21412 / ✗ 275
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 21687

     checks.........................: 66.24% ✓ 43099     ✗ 21962 
     data_received..................: 111 MB 354 kB/s
     data_sent......................: 26 MB  82 kB/s
     http_req_blocked...............: avg=55.85µs min=1.4µs    med=2.8µs   max=98.56ms p(90)=17.04µs p(95)=468.06µs
     http_req_connecting............: avg=45.35µs min=0s       med=0s      max=96.28ms p(90)=0s      p(95)=379.65µs
     http_req_duration..............: avg=11.43s  min=951.3ms  med=10.92s  max=28.8s   p(90)=20.59s  p(95)=22.16s  
       { expected_response:true }...: avg=11.43s  min=951.3ms  med=10.92s  max=28.8s   p(90)=20.59s  p(95)=22.16s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 21687 
     http_req_receiving.............: avg=83.83µs min=26.9µs   med=69.5µs  max=14.34ms p(90)=112.6µs p(95)=135.67µs
     http_req_sending...............: avg=41.53µs min=10.2µs   med=16.89µs max=23.83ms p(90)=50.5µs  p(95)=72.47µs 
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s      max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=11.43s  min=951.13ms med=10.92s  max=28.8s   p(90)=20.59s  p(95)=22.16s  
     http_reqs......................: 21687  68.831857/s
     iteration_duration.............: avg=11.43s  min=953.78ms med=10.92s  max=28.8s   p(90)=20.59s  p(95)=22.16s  
     iterations.....................: 21687  68.831857/s
     vus............................: 137    min=0       max=1500
     vus_max........................: 1500   min=1028    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8e6a75c9-1541-4eb2-23f1-6551bc843d00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/cc8c499a-ec5a-4753-232c-c8c03738fb00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 55425     ✗ 0     
     data_received..................: 93 MB   298 kB/s
     data_sent......................: 22 MB   70 kB/s
     http_req_blocked...............: avg=61.57µs min=1.5µs    med=3.1µs   max=14.92ms p(90)=22.86µs p(95)=497.63µs
     http_req_connecting............: avg=49.11µs min=0s       med=0s      max=14.73ms p(90)=0s      p(95)=417.86µs
     http_req_duration..............: avg=13.19s  min=638.85ms med=12.84s  max=26.22s  p(90)=23.11s  p(95)=24.2s   
       { expected_response:true }...: avg=13.19s  min=638.85ms med=12.84s  max=26.22s  p(90)=23.11s  p(95)=24.2s   
     http_req_failed................: 0.00%   ✓ 0         ✗ 18475 
     http_req_receiving.............: avg=86.09µs min=27µs     med=73.59µs max=10.89ms p(90)=117.9µs p(95)=146.8µs 
     http_req_sending...............: avg=39.9µs  min=9µs      med=18.39µs max=19.48ms p(90)=56.36µs p(95)=80.52µs 
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s      max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=13.19s  min=638.48ms med=12.84s  max=26.22s  p(90)=23.11s  p(95)=24.2s   
     http_reqs......................: 18475   59.284189/s
     iteration_duration.............: avg=13.19s  min=642ms    med=12.84s  max=26.23s  p(90)=23.11s  p(95)=24.2s   
     iterations.....................: 18475   59.284189/s
     vus............................: 172     min=0       max=1499
     vus_max........................: 1500    min=1269    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9b19e018-f34a-4f3f-fc33-76b10e08ba00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/90e660d0-9390-43c1-69e3-fa5fde66df00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 17577 / ✗ 169
     ✗ valid response structure
      ↳  99% — ✓ 17577 / ✗ 169

     checks.........................: 99.36% ✓ 52900     ✗ 338   
     data_received..................: 91 MB  285 kB/s
     data_sent......................: 21 MB  66 kB/s
     http_req_blocked...............: avg=81.72µs min=1.8µs  med=3.3µs  max=71.22ms p(90)=25.1µs  p(95)=523.44µs
     http_req_connecting............: avg=68.94µs min=0s     med=0s     max=71.02ms p(90)=0s      p(95)=444.56µs
     http_req_duration..............: avg=14.18s  min=1.47s  med=14.41s max=35.87s  p(90)=24.81s  p(95)=26.62s  
       { expected_response:true }...: avg=14.18s  min=1.47s  med=14.41s max=35.87s  p(90)=24.81s  p(95)=26.62s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 17746 
     http_req_receiving.............: avg=97.5µs  min=29.1µs med=75.4µs max=45.16ms p(90)=112.9µs p(95)=141.6µs 
     http_req_sending...............: avg=89.86µs min=12.5µs med=20.3µs max=49.69ms p(90)=58µs    p(95)=81.37µs 
     http_req_tls_handshaking.......: avg=0s      min=0s     med=0s     max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=14.18s  min=1.47s  med=14.41s max=35.87s  p(90)=24.81s  p(95)=26.62s  
     http_reqs......................: 17746  55.643374/s
     iteration_duration.............: avg=14.18s  min=1.47s  med=14.41s max=35.87s  p(90)=24.81s  p(95)=26.62s  
     iterations.....................: 17746  55.643374/s
     vus............................: 95     min=0       max=1500
     vus_max........................: 1500   min=1038    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e8669616-11e3-49fc-07e6-9552403f3800/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/84b52e92-9f9c-4fb8-7f18-952724727d00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-deno`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  95% — ✓ 15760 / ✗ 682
     ✗ valid response structure
      ↳  95% — ✓ 15760 / ✗ 682

     checks.........................: 97.23% ✓ 47962     ✗ 1364  
     data_received..................: 90 MB  283 kB/s
     data_sent......................: 20 MB  61 kB/s
     http_req_blocked...............: avg=74.7µs   min=1.2µs    med=2.6µs   max=24.97ms p(90)=38µs    p(95)=494.27µs
     http_req_connecting............: avg=59.44µs  min=0s       med=0s      max=24.85ms p(90)=0s      p(95)=408.69µs
     http_req_duration..............: avg=15.27s   min=861.15ms med=13.88s  max=47.53s  p(90)=28.51s  p(95)=30.92s  
       { expected_response:true }...: avg=15.27s   min=861.15ms med=13.88s  max=47.53s  p(90)=28.51s  p(95)=30.92s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 16442 
     http_req_receiving.............: avg=170.48µs min=22µs     med=50.7µs  max=39.65ms p(90)=136.8µs p(95)=210.28µs
     http_req_sending...............: avg=90.57µs  min=8.5µs    med=16.29µs max=24.33ms p(90)=79.1µs  p(95)=120.39µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=15.27s   min=861.04ms med=13.88s  max=47.53s  p(90)=28.51s  p(95)=30.92s  
     http_reqs......................: 16442  51.664297/s
     iteration_duration.............: avg=15.27s   min=862.06ms med=13.88s  max=47.53s  p(90)=28.51s  p(95)=30.92s  
     iterations.....................: 16442  51.664297/s
     vus............................: 122    min=0       max=1499
     vus_max........................: 1500   min=1100    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b018d916-5cf8-4b1a-93ca-87d52e139400/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/746cbe89-f6e8-44b1-946e-6c4cf0ce1500/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga-uws`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  50% — ✓ 7865 / ✗ 7758
     ✗ valid response structure
      ↳  50% — ✓ 7865 / ✗ 7758

     checks.........................: 66.89% ✓ 31353     ✗ 15516 
     data_received..................: 62 MB  193 kB/s
     data_sent......................: 19 MB  58 kB/s
     http_req_blocked...............: avg=91.34µs min=1.5µs    med=2.8µs  max=71.47ms p(90)=106.76µs p(95)=546.38µs
     http_req_connecting............: avg=75.59µs min=0s       med=0s     max=71.03ms p(90)=0s       p(95)=454.1µs 
     http_req_duration..............: avg=16.11s  min=138.24ms med=9.95s  max=59.75s  p(90)=38.86s   p(95)=42.47s  
       { expected_response:true }...: avg=16.11s  min=138.24ms med=9.95s  max=59.75s  p(90)=38.86s   p(95)=42.47s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 15623 
     http_req_receiving.............: avg=90.27µs min=19.09µs  med=63.6µs max=16.9ms  p(90)=115.8µs  p(95)=153.4µs 
     http_req_sending...............: avg=65.13µs min=10.1µs   med=17µs   max=44.27ms p(90)=70.3µs   p(95)=110.38µs
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=16.11s  min=138.18ms med=9.95s  max=59.75s  p(90)=38.86s   p(95)=42.47s  
     http_reqs......................: 15623  48.563731/s
     iteration_duration.............: avg=16.11s  min=139.97ms med=9.95s  max=59.75s  p(90)=38.86s   p(95)=42.48s  
     iterations.....................: 15623  48.563731/s
     vus............................: 30     min=0       max=1500
     vus_max........................: 1500   min=1046    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/022afbb2-92c2-4b4f-b1ac-4047833f2100/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b28d73d0-7155-4ff8-5021-1ab084e96400/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-uws`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  90% — ✓ 14313 / ✗ 1443
     ✗ no graphql errors
      ↳  54% — ✓ 8542 / ✗ 7214
     ✗ valid response structure
      ↳  59% — ✓ 8542 / ✗ 5771

     checks.........................: 68.51% ✓ 31397     ✗ 14428 
     data_received..................: 107 MB 344 kB/s
     data_sent......................: 19 MB  60 kB/s
     http_req_blocked...............: avg=74.24µs min=0s       med=3µs    max=66.25ms p(90)=177.65µs p(95)=484.12µs
     http_req_connecting............: avg=61.96µs min=0s       med=0s     max=65.56ms p(90)=115.5µs  p(95)=401.74µs
     http_req_duration..............: avg=15.56s  min=0s       med=8.01s  max=1m0s    p(90)=41.37s   p(95)=50.72s  
       { expected_response:true }...: avg=13.62s  min=468.49ms med=7.12s  max=59.97s  p(90)=37.49s   p(95)=46.72s  
     http_req_failed................: 9.15%  ✓ 1443      ✗ 14313 
     http_req_receiving.............: avg=77.04µs min=0s       med=61.4µs max=14.79ms p(90)=106.4µs  p(95)=140.23µs
     http_req_sending...............: avg=45.2µs  min=0s       med=16.3µs max=26.26ms p(90)=55.3µs   p(95)=76.22µs 
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=15.56s  min=0s       med=8.01s  max=1m0s    p(90)=41.37s   p(95)=50.72s  
     http_reqs......................: 15756  50.713308/s
     iteration_duration.............: avg=15.62s  min=381.91µs med=8.01s  max=1m0s    p(90)=41.4s    p(95)=50.76s  
     iterations.....................: 15756  50.713308/s
     vus............................: 1      min=0       max=1500
     vus_max........................: 1500   min=1188    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/cec22373-7860-4414-1a41-e6f1b290a100/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a2655272-c65b-4b5a-94ff-475fcf7ebb00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server-node16`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  98% — ✓ 14769 / ✗ 163
     ✗ no graphql errors
      ↳  48% — ✓ 7217 / ✗ 7715
     ✗ valid response structure
      ↳  48% — ✓ 7217 / ✗ 7552

     checks.........................: 65.42% ✓ 29203     ✗ 15430 
     data_received..................: 59 MB  175 kB/s
     data_sent......................: 18 MB  54 kB/s
     http_req_blocked...............: avg=85.3µs  min=1.4µs    med=3µs     max=68.42ms p(90)=173.69µs p(95)=495.54µs
     http_req_connecting............: avg=72.5µs  min=0s       med=0s      max=65.57ms p(90)=109.6µs  p(95)=415.64µs
     http_req_duration..............: avg=16.8s   min=122.4ms  med=10.21s  max=1m0s    p(90)=41.76s   p(95)=51.01s  
       { expected_response:true }...: avg=16.33s  min=122.4ms  med=9.95s   max=59.97s  p(90)=40.55s   p(95)=48.8s   
     http_req_failed................: 1.09%  ✓ 163       ✗ 14769 
     http_req_receiving.............: avg=84.12µs min=0s       med=73.2µs  max=8.1ms   p(90)=104.3µs  p(95)=120.9µs 
     http_req_sending...............: avg=45.76µs min=8µs      med=17.89µs max=26.16ms p(90)=58.7µs   p(95)=80.4µs  
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s      max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=16.8s   min=122.32ms med=10.21s  max=1m0s    p(90)=41.76s   p(95)=51.01s  
     http_reqs......................: 14932  44.105797/s
     iteration_duration.............: avg=16.81s  min=123.09ms med=10.21s  max=1m0s    p(90)=41.76s   p(95)=51.01s  
     iterations.....................: 14932  44.105797/s
     vus............................: 4      min=0       max=1500
     vus_max........................: 1500   min=1218    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/dffca37e-64b8-49ad-edfb-be17badba400/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c98a690a-acca-4396-a17a-2dd180523400/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  86% — ✓ 18362 / ✗ 2754
     ✗ no graphql errors
      ↳  86% — ✓ 18225 / ✗ 2891
     ✗ valid response structure
      ↳  99% — ✓ 18225 / ✗ 137

     checks.........................: 90.45% ✓ 54812     ✗ 5782  
     data_received..................: 92 MB  276 kB/s
     data_sent......................: 25 MB  75 kB/s
     http_req_blocked...............: avg=258.67µs min=1.2µs   med=3.2µs  max=29.81ms p(90)=364.85µs p(95)=702.6µs
     http_req_connecting............: avg=232.55µs min=0s      med=0s     max=29.6ms  p(90)=288.9µs  p(95)=554.9µs
     http_req_duration..............: avg=11.99s   min=93.95ms med=4s     max=1m0s    p(90)=59.99s   p(95)=1m0s   
       { expected_response:true }...: avg=4.79s    min=93.95ms med=3.94s  max=59.14s  p(90)=4.49s    p(95)=5.17s  
     http_req_failed................: 13.04% ✓ 2754      ✗ 18362 
     http_req_receiving.............: avg=63.98µs  min=0s      med=63.2µs max=9.24ms  p(90)=94µs     p(95)=103.8µs
     http_req_sending...............: avg=47.39µs  min=7µs     med=18.5µs max=24.66ms p(90)=58.3µs   p(95)=80.52µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s      p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=11.99s   min=93.85ms med=4s     max=1m0s    p(90)=59.99s   p(95)=1m0s   
     http_reqs......................: 21116  63.152262/s
     iteration_duration.............: avg=12s      min=94.65ms med=4s     max=1m0s    p(90)=1m0s     p(95)=1m0s   
     iterations.....................: 21116  63.152262/s
     vus............................: 10     min=0       max=1500
     vus_max........................: 1500   min=1349    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6acd92ce-d366-470a-2715-f6272f1f1900/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/94d5f533-e25f-4622-60d6-d0eaec090800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  86% — ✓ 18179 / ✗ 2762
     ✗ no graphql errors
      ↳  86% — ✓ 18043 / ✗ 2898
     ✗ valid response structure
      ↳  99% — ✓ 18043 / ✗ 136

     checks.........................: 90.34% ✓ 54265     ✗ 5796  
     data_received..................: 93 MB  279 kB/s
     data_sent......................: 25 MB  75 kB/s
     http_req_blocked...............: avg=201.15µs min=1.5µs    med=3µs    max=25.45ms p(90)=339.1µs p(95)=615.5µs
     http_req_connecting............: avg=180.28µs min=0s       med=0s     max=25.33ms p(90)=269.7µs p(95)=495.8µs
     http_req_duration..............: avg=12.09s   min=136.92ms med=4s     max=1m0s    p(90)=59.99s  p(95)=1m0s   
       { expected_response:true }...: avg=4.82s    min=136.92ms med=3.94s  max=59.55s  p(90)=4.54s   p(95)=5.44s  
     http_req_failed................: 13.18% ✓ 2762      ✗ 18179 
     http_req_receiving.............: avg=63.46µs  min=0s       med=61.8µs max=9.18ms  p(90)=89.1µs  p(95)=97.2µs 
     http_req_sending...............: avg=40.7µs   min=7.6µs    med=17.5µs max=17.18ms p(90)=52.6µs  p(95)=69.7µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=12.09s   min=136.83ms med=4s     max=1m0s    p(90)=59.99s  p(95)=1m0s   
     http_reqs......................: 20941  62.628016/s
     iteration_duration.............: avg=12.1s    min=137.59ms med=4s     max=1m0s    p(90)=1m0s    p(95)=1m0s   
     iterations.....................: 20941  62.628016/s
     vus............................: 9      min=0       max=1500
     vus_max........................: 1500   min=1400    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/12782ec0-69f9-4c6c-29ee-e4e3b1482700/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d07d9601-66d0-4cab-6f60-688dae753c00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  88% — ✓ 21741 / ✗ 2770
     ✗ no graphql errors
      ↳  88% — ✓ 21687 / ✗ 2824
     ✗ valid response structure
      ↳  99% — ✓ 21687 / ✗ 54

     checks.........................: 92.01% ✓ 65115    ✗ 5648  
     data_received..................: 110 MB 328 kB/s
     data_sent......................: 29 MB  87 kB/s
     http_req_blocked...............: avg=286.04µs min=1µs     med=2.9µs  max=32.51ms p(90)=326.6µs p(95)=700.11µs
     http_req_connecting............: avg=265.28µs min=0s      med=0s     max=30.11ms p(90)=262.8µs p(95)=563.35µs
     http_req_duration..............: avg=10.33s   min=72.59ms med=3.27s  max=1m0s    p(90)=59.99s  p(95)=1m0s    
       { expected_response:true }...: avg=4s       min=72.59ms med=3.23s  max=59.95s  p(90)=3.6s    p(95)=4.68s   
     http_req_failed................: 11.30% ✓ 2770     ✗ 21741 
     http_req_receiving.............: avg=64.34µs  min=0s      med=58.9µs max=13.53ms p(90)=92.7µs  p(95)=104.2µs 
     http_req_sending...............: avg=50.52µs  min=9.19µs  med=16.6µs max=24.18ms p(90)=53.9µs  p(95)=74.95µs 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=10.33s   min=72.47ms med=3.27s  max=1m0s    p(90)=59.99s  p(95)=1m0s    
     http_reqs......................: 24511  73.30678/s
     iteration_duration.............: avg=10.33s   min=73.36ms med=3.27s  max=1m0s    p(90)=1m0s    p(95)=1m0s    
     iterations.....................: 24511  73.30678/s
     vus............................: 4      min=0      max=1500
     vus_max........................: 1500   min=1272   max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3a099bb0-d1f8-4d06-e218-7077cacc3f00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b3769f19-4a4b-455c-3647-59b216ea7a00/public" alt="HTTP Overview" />


  </details>