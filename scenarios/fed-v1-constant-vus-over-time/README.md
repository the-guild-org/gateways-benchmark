## Overview for: `scenarios/fed-v1-constant-vus-over-time`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. It's being executed with a constant amount of VUs over a fixed amount of time. It measure things like memory usage, CPU usage, average RPS. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was running 400 VUs over 200s


### Comparison


| Gateway                             | RPS ⬇️ |        Requests         |         Duration          |
| :---------------------------------- | :----: | :---------------------: | :-----------------------: |
| wundergraph                         |  859   | 172141 total, 0 failed  |  avg: 459ms, p95: 683ms   |
| apollo-router                       |  126   |  25687 total, 0 failed  | avg: 3145ms, p95: 4468ms  |
| mesh-supergraph                     |  118   |  23948 total, 0 failed  | avg: 3354ms, p95: 4095ms  |
| mesh                                |  110   |  22187 total, 0 failed  | avg: 3624ms, p95: 4580ms  |
| stitching-federation-with-yoga-deno |   88   |  17839 total, 0 failed  | avg: 4514ms, p95: 5271ms  |
| stitching-federation-with-yoga-bun  |   85   |  17304 total, 0 failed  | avg: 4632ms, p95: 5852ms  |
| stitching-federation-with-yoga-uws  |   85   |  17393 total, 0 failed  | avg: 4634ms, p95: 7835ms  |
| apollo-gateway-with-yoga            |   69   | 14122 total, 52 failed  | avg: 5716ms, p95: 8772ms  |
| stitching-federation-with-yoga      |   63   | 13086 total, 186 failed | avg: 6185ms, p95: 8561ms  |
| apollo-server-node16                |   62   |  12527 total, 0 failed  | avg: 6419ms, p95: 18025ms |
| apollo-gateway-with-yoga-uws        |   58   |  11956 total, 0 failed  | avg: 6756ms, p95: 13760ms |
| mercurius                           |   51   |  10509 total, 0 failed  | avg: 7645ms, p95: 8574ms  |
| apollo-server                       |   50   |  10448 total, 0 failed  | avg: 7822ms, p95: 15689ms |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 516423     ✗ 0     
     data_received..................: 857 MB  4.3 MB/s
     data_sent......................: 204 MB  1.0 MB/s
     http_req_blocked...............: avg=104.64µs min=900ns   med=1.8µs    max=92.32ms  p(90)=2.8µs    p(95)=3.4µs   
     http_req_connecting............: avg=98.29µs  min=0s      med=0s       max=91.15ms  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=459.21ms min=89.1ms  med=439.74ms max=1.27s    p(90)=624.86ms p(95)=683.12ms
       { expected_response:true }...: avg=459.21ms min=89.1ms  med=439.74ms max=1.27s    p(90)=624.86ms p(95)=683.12ms
   ✓ http_req_failed................: 0.00%   ✓ 0          ✗ 172141
     http_req_receiving.............: avg=5.97ms   min=13µs    med=26.9µs   max=529.64ms p(90)=231.9µs  p(95)=24.88ms 
     http_req_sending...............: avg=637.08µs min=5.8µs   med=9.9µs    max=421.88ms p(90)=20.2µs   p(95)=92.1µs  
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=452.6ms  min=88.95ms med=437.13ms max=1.11s    p(90)=607.15ms p(95)=660.48ms
     http_reqs......................: 172141  859.464224/s
     iteration_duration.............: avg=465.04ms min=89.66ms med=444.87ms max=1.44s    p(90)=634.03ms p(95)=694.6ms 
     iterations.....................: 172141  859.464224/s
     vus............................: 400     min=400      max=400 
     vus_max........................: 400     min=400      max=400 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9569888f-fa92-4bd6-44c8-d87198282800/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ee51e01b-53a5-442e-20ee-235d6d799800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 25679 / ✗ 8
     ✗ valid response structure
      ↳  99% — ✓ 25679 / ✗ 8

     checks.........................: 99.97% ✓ 77045      ✗ 16   
     data_received..................: 128 MB 631 kB/s
     data_sent......................: 31 MB  150 kB/s
     http_req_blocked...............: avg=385.25µs min=800ns  med=2.1µs   max=50.63ms  p(90)=3µs    p(95)=3.8µs  
     http_req_connecting............: avg=376.03µs min=0s     med=0s      max=48.24ms  p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=3.14s    min=1.17s  med=2.99s   max=7.97s    p(90)=3.92s  p(95)=4.46s  
       { expected_response:true }...: avg=3.14s    min=1.17s  med=2.99s   max=7.97s    p(90)=3.92s  p(95)=4.46s  
   ✓ http_req_failed................: 0.00%  ✓ 0          ✗ 25687
     http_req_receiving.............: avg=171.97µs min=15.9µs med=36.79µs max=107.2ms  p(90)=61.2µs p(95)=72.09µs
     http_req_sending...............: avg=145.84µs min=5.9µs  med=12.2µs  max=124.33ms p(90)=26.5µs p(95)=70.24µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s       p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=3.14s    min=1.17s  med=2.99s   max=7.97s    p(90)=3.92s  p(95)=4.46s  
     http_reqs......................: 25687  126.625835/s
     iteration_duration.............: avg=3.14s    min=1.17s  med=2.99s   max=7.97s    p(90)=3.92s  p(95)=4.46s  
     iterations.....................: 25687  126.625835/s
     vus............................: 59     min=59       max=400
     vus_max........................: 400    min=400      max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/364e27bc-8d3a-42fe-693d-a3e9ad1dc900/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9415a42e-94f7-4c08-0ba7-157e28c45700/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 23944 / ✗ 4
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 23948

     checks.........................: 66.66% ✓ 47892      ✗ 23952
     data_received..................: 121 MB 598 kB/s
     data_sent......................: 28 MB  141 kB/s
     http_req_blocked...............: avg=492.63µs min=700ns  med=1.9µs  max=90.34ms p(90)=2.9µs  p(95)=3.5µs  
     http_req_connecting............: avg=479.05µs min=0s     med=0s     max=90.31ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=3.35s    min=1.2s   med=3.28s  max=7.49s   p(90)=3.79s  p(95)=4.09s  
       { expected_response:true }...: avg=3.35s    min=1.2s   med=3.28s  max=7.49s   p(90)=3.79s  p(95)=4.09s  
   ✓ http_req_failed................: 0.00%  ✓ 0          ✗ 23948
     http_req_receiving.............: avg=50.96µs  min=16.4µs med=40.9µs max=14.96ms p(90)=64.8µs p(95)=73.96µs
     http_req_sending...............: avg=68.05µs  min=6.1µs  med=11.8µs max=18.7ms  p(90)=21µs   p(95)=27.16µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=3.35s    min=1.2s   med=3.28s  max=7.49s   p(90)=3.79s  p(95)=4.09s  
     http_reqs......................: 23948  118.845993/s
     iteration_duration.............: avg=3.35s    min=1.2s   med=3.28s  max=7.54s   p(90)=3.79s  p(95)=4.09s  
     iterations.....................: 23948  118.845993/s
     vus............................: 241    min=241      max=400
     vus_max........................: 400    min=400      max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0ecae53a-06af-416b-cfb3-488047fab300/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8e2cc3c7-4b41-46d2-1b11-803eee104f00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 22153 / ✗ 34
     ✗ valid response structure
      ↳  99% — ✓ 22153 / ✗ 34

     checks.........................: 99.89% ✓ 66493      ✗ 68   
     data_received..................: 111 MB 553 kB/s
     data_sent......................: 26 MB  131 kB/s
     http_req_blocked...............: avg=1.26ms   min=800ns  med=2µs    max=154.15ms p(90)=2.9µs  p(95)=3.5µs  
     http_req_connecting............: avg=1.23ms   min=0s     med=0s     max=116.1ms  p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=3.62s    min=1.63s  med=3.53s  max=7.39s    p(90)=4.15s  p(95)=4.57s  
       { expected_response:true }...: avg=3.62s    min=1.63s  med=3.53s  max=7.39s    p(90)=4.15s  p(95)=4.57s  
   ✓ http_req_failed................: 0.00%  ✓ 0          ✗ 22187
     http_req_receiving.............: avg=119.69µs min=16.5µs med=40.4µs max=163.99ms p(90)=62.6µs p(95)=71.59µs
     http_req_sending...............: avg=222.94µs min=6.1µs  med=12.2µs max=87.01ms  p(90)=24.5µs p(95)=29.2µs 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=3.62s    min=1.63s  med=3.53s  max=7.38s    p(90)=4.15s  p(95)=4.57s  
     http_reqs......................: 22187  110.045476/s
     iteration_duration.............: avg=3.62s    min=1.63s  med=3.53s  max=7.4s     p(90)=4.16s  p(95)=4.58s  
     iterations.....................: 22187  110.045476/s
     vus............................: 327    min=327      max=400
     vus_max........................: 400    min=400      max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2eb36967-7239-44ca-3d93-cd25ec92a700/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/04559897-079a-4610-be14-c08334984f00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-deno`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 17799 / ✗ 40
     ✗ valid response structure
      ↳  99% — ✓ 17799 / ✗ 40

     checks.........................: 99.85% ✓ 53437     ✗ 80   
     data_received..................: 90 MB  443 kB/s
     data_sent......................: 21 MB  105 kB/s
     http_req_blocked...............: avg=2.66ms   min=1.1µs med=2.29µs max=224.72ms p(90)=3.8µs  p(95)=5.8µs   
     http_req_connecting............: avg=2.62ms   min=0s    med=0s     max=187.59ms p(90)=0s     p(95)=0s      
     http_req_duration..............: avg=4.51s    min=2.33s med=4.46s  max=7.74s    p(90)=4.77s  p(95)=5.27s   
       { expected_response:true }...: avg=4.51s    min=2.33s med=4.46s  max=7.74s    p(90)=4.77s  p(95)=5.27s   
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 17839
     http_req_receiving.............: avg=125.52µs min=15µs  med=33.7µs max=27.6ms   p(90)=83.8µs p(95)=111.7µs 
     http_req_sending...............: avg=622.88µs min=6.5µs med=12.5µs max=50.03ms  p(90)=30.2µs p(95)=108.53µs
     http_req_tls_handshaking.......: avg=0s       min=0s    med=0s     max=0s       p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=4.51s    min=2.33s med=4.46s  max=7.74s    p(90)=4.77s  p(95)=5.26s   
     http_reqs......................: 17839  88.150664/s
     iteration_duration.............: avg=4.51s    min=2.33s med=4.46s  max=7.74s    p(90)=4.77s  p(95)=5.29s   
     iterations.....................: 17839  88.150664/s
     vus............................: 205    min=205     max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/46a8a7fa-8e45-445f-7641-ce1cb61bf500/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a32d0e8a-5eed-4044-a436-3975ccaa4900/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 51912     ✗ 0    
     data_received..................: 86 MB   428 kB/s
     data_sent......................: 21 MB   102 kB/s
     http_req_blocked...............: avg=2.85ms   min=1.4µs    med=2.6µs  max=232.82ms p(90)=4.4µs   p(95)=20.9µs  
     http_req_connecting............: avg=2.81ms   min=0s       med=0s     max=232.75ms p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=4.63s    min=309.17ms med=4.49s  max=11.61s   p(90)=5.08s   p(95)=5.85s   
       { expected_response:true }...: avg=4.63s    min=309.17ms med=4.49s  max=11.61s   p(90)=5.08s   p(95)=5.85s   
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 17304
     http_req_receiving.............: avg=142.14µs min=21.7µs   med=56.7µs max=151.8ms  p(90)=101.2µs p(95)=167.6µs 
     http_req_sending...............: avg=930.55µs min=8.6µs    med=16µs   max=106.4ms  p(90)=56.2µs  p(95)=192.65µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=4.63s    min=307.18ms med=4.49s  max=11.57s   p(90)=5.08s   p(95)=5.83s   
     http_reqs......................: 17304   85.806332/s
     iteration_duration.............: avg=4.63s    min=422.64ms med=4.49s  max=11.67s   p(90)=5.08s   p(95)=5.93s   
     iterations.....................: 17304   85.806332/s
     vus............................: 92      min=92      max=400
     vus_max........................: 400     min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/299c0259-6e09-45fb-abd2-9c7141234800/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9a333acd-79e0-4403-0e09-30a308fe1c00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-uws`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  96% — ✓ 16803 / ✗ 590
     ✗ valid response structure
      ↳  96% — ✓ 16803 / ✗ 590

     checks.........................: 97.73% ✓ 50999     ✗ 1180 
     data_received..................: 97 MB  479 kB/s
     data_sent......................: 21 MB  102 kB/s
     http_req_blocked...............: avg=587.84µs min=1.1µs  med=2µs     max=43.99ms p(90)=2.9µs   p(95)=5.7µs  
     http_req_connecting............: avg=579.27µs min=0s     med=0s      max=43.81ms p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=4.63s    min=2.06s  med=3.88s   max=13.22s  p(90)=6.91s   p(95)=7.83s  
       { expected_response:true }...: avg=4.63s    min=2.06s  med=3.88s   max=13.22s  p(90)=6.91s   p(95)=7.83s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 17393
     http_req_receiving.............: avg=62.7µs   min=17.7µs med=35.79µs max=23.33ms p(90)=61.29µs p(95)=72.59µs
     http_req_sending...............: avg=88.47µs  min=6.6µs  med=11.8µs  max=16.79ms p(90)=25.9µs  p(95)=32.39µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s      p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=4.63s    min=2.06s  med=3.88s   max=13.22s  p(90)=6.91s   p(95)=7.83s  
     http_reqs......................: 17393  85.777872/s
     iteration_duration.............: avg=4.63s    min=2.06s  med=3.88s   max=13.22s  p(90)=6.92s   p(95)=7.83s  
     iterations.....................: 17393  85.777872/s
     vus............................: 184    min=184     max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/204fc4ec-382b-4e86-cecc-4c9b2edd3a00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3870b52a-3327-40b2-af56-9ab8ec196600/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  99% — ✓ 14070 / ✗ 52
     ✗ no graphql errors
      ↳  90% — ✓ 12762 / ✗ 1360
     ✗ valid response structure
      ↳  90% — ✓ 12762 / ✗ 1308

     checks.........................: 93.57% ✓ 39594     ✗ 2720 
     data_received..................: 68 MB  334 kB/s
     data_sent......................: 17 MB  82 kB/s
     http_req_blocked...............: avg=2.33ms   min=900ns med=2µs    max=222.86ms p(90)=3.1µs  p(95)=10.99µs
     http_req_connecting............: avg=2.25ms   min=0s    med=0s     max=222.68ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=5.71s    min=1.52s med=4.86s  max=1m0s     p(90)=7.84s  p(95)=8.77s  
       { expected_response:true }...: avg=5.51s    min=1.52s med=4.86s  max=59.89s   p(90)=7.81s  p(95)=8.68s  
   ✓ http_req_failed................: 0.36%  ✓ 52        ✗ 14070
     http_req_receiving.............: avg=49.74µs  min=0s    med=35.2µs max=19.78ms  p(90)=64.5µs p(95)=76.59µs
     http_req_sending...............: avg=268.71µs min=6.2µs med=11.8µs max=74.11ms  p(90)=26.2µs p(95)=97.3µs 
     http_req_tls_handshaking.......: avg=0s       min=0s    med=0s     max=0s       p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=5.71s    min=1.52s med=4.86s  max=1m0s     p(90)=7.84s  p(95)=8.77s  
     http_reqs......................: 14122  69.446076/s
     iteration_duration.............: avg=5.71s    min=1.52s med=4.86s  max=1m0s     p(90)=7.86s  p(95)=8.77s  
     iterations.....................: 14122  69.446076/s
     vus............................: 165    min=165     max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/25027856-3e0f-4115-8acf-51a3b0481f00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a8d8a999-8125-410c-e47b-97217c6b9b00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  98% — ✓ 12900 / ✗ 186
     ✗ no graphql errors
      ↳  92% — ✓ 12048 / ✗ 1038
     ✗ valid response structure
      ↳  93% — ✓ 12048 / ✗ 852

     checks.........................: 94.68% ✓ 36996     ✗ 2076 
     data_received..................: 72 MB  352 kB/s
     data_sent......................: 16 MB  76 kB/s
     http_req_blocked...............: avg=1.83ms   min=1.3µs med=2.9µs  max=135.52ms p(90)=5.1µs  p(95)=22.47µs 
     http_req_connecting............: avg=1.79ms   min=0s    med=0s     max=135.43ms p(90)=0s     p(95)=0s      
     http_req_duration..............: avg=6.18s    min=1.35s med=4.92s  max=1m0s     p(90)=7.2s   p(95)=8.56s   
       { expected_response:true }...: avg=5.4s     min=1.35s med=4.91s  max=57.64s   p(90)=6.97s  p(95)=8.27s   
   ✓ http_req_failed................: 1.42%  ✓ 186       ✗ 12900
     http_req_receiving.............: avg=81.96µs  min=0s    med=61.1µs max=82.94ms  p(90)=90.5µs p(95)=107.17µs
     http_req_sending...............: avg=565.46µs min=7.5µs med=16.4µs max=76.7ms   p(90)=36.4µs p(95)=113.05µs
     http_req_tls_handshaking.......: avg=0s       min=0s    med=0s     max=0s       p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=6.18s    min=1.35s med=4.92s  max=1m0s     p(90)=7.2s   p(95)=8.55s   
     http_reqs......................: 13086  63.754374/s
     iteration_duration.............: avg=6.18s    min=1.35s med=4.92s  max=1m0s     p(90)=7.21s  p(95)=8.57s   
     iterations.....................: 13086  63.754374/s
     vus............................: 35     min=35      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8dbfb77f-d105-418b-89e7-549d6bd6ae00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/88b7b4b0-cd1d-4ae7-9d5c-0891bf188200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server-node16`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  74% — ✓ 9333 / ✗ 3194
     ✗ valid response structure
      ↳  74% — ✓ 9333 / ✗ 3194

     checks.........................: 83.00% ✓ 31193     ✗ 6388 
     data_received..................: 61 MB  301 kB/s
     data_sent......................: 15 MB  74 kB/s
     http_req_blocked...............: avg=1.12ms   min=1.1µs    med=2.1µs  max=64.96ms p(90)=3.4µs   p(95)=13.1µs 
     http_req_connecting............: avg=1.1ms    min=0s       med=0s     max=64.94ms p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=6.41s    min=630.73ms med=4.57s  max=23.03s  p(90)=15.32s  p(95)=18.02s 
       { expected_response:true }...: avg=6.41s    min=630.73ms med=4.57s  max=23.03s  p(90)=15.32s  p(95)=18.02s 
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 12527
     http_req_receiving.............: avg=86.9µs   min=20.2µs   med=48µs   max=28.88ms p(90)=73.7µs  p(95)=82.6µs 
     http_req_sending...............: avg=282.63µs min=7.2µs    med=12.7µs max=58.74ms p(90)=27.79µs p(95)=97.77µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=6.41s    min=630.64ms med=4.57s  max=23.03s  p(90)=15.32s  p(95)=18.02s 
     http_reqs......................: 12527  62.046479/s
     iteration_duration.............: avg=6.42s    min=631.52ms med=4.57s  max=23.03s  p(90)=15.32s  p(95)=18.02s 
     iterations.....................: 12527  62.046479/s
     vus............................: 40     min=40      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b17edb1c-04fd-4c02-e2f7-c6c241623c00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d202797f-92f3-47b5-39cd-d822f39ce300/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga-uws`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  77% — ✓ 9284 / ✗ 2672
     ✗ valid response structure
      ↳  77% — ✓ 9284 / ✗ 2672

     checks.........................: 85.10% ✓ 30524     ✗ 5344 
     data_received..................: 55 MB  270 kB/s
     data_sent......................: 14 MB  70 kB/s
     http_req_blocked...............: avg=3.24ms   min=1.2µs    med=2.8µs  max=193.8ms  p(90)=5.1µs   p(95)=15.1µs  
     http_req_connecting............: avg=3.2ms    min=0s       med=0s     max=193.77ms p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=6.75s    min=416.31ms med=6.15s  max=17.28s   p(90)=12.28s  p(95)=13.76s  
       { expected_response:true }...: avg=6.75s    min=416.31ms med=6.15s  max=17.28s   p(90)=12.28s  p(95)=13.76s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 11956
     http_req_receiving.............: avg=85.27µs  min=18.3µs   med=53µs   max=35.51ms  p(90)=88.3µs  p(95)=106µs   
     http_req_sending...............: avg=893.13µs min=6.7µs    med=15.1µs max=114.3ms  p(90)=35.55µs p(95)=229.77µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=6.75s    min=416.21ms med=6.15s  max=17.28s   p(90)=12.27s  p(95)=13.76s  
     http_reqs......................: 11956  58.939035/s
     iteration_duration.............: avg=6.76s    min=417.1ms  med=6.15s  max=17.28s   p(90)=12.29s  p(95)=13.76s  
     iterations.....................: 11956  58.939035/s
     vus............................: 55     min=55      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/aa4e9860-7cc1-4d2f-c950-8f7aa7490400/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/adc78aa4-b19e-4540-72a4-202c55150a00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 31527   ✗ 0    
     data_received..................: 53 MB   261 kB/s
     data_sent......................: 13 MB   62 kB/s
     http_req_blocked...............: avg=6.35ms  min=1.6µs  med=3.6µs  max=358.86ms p(90)=5.6µs   p(95)=25.4µs  
     http_req_connecting............: avg=6.29ms  min=0s     med=0s     max=358.83ms p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=7.64s   min=1.02s  med=7.54s  max=19.25s   p(90)=8.06s   p(95)=8.57s   
       { expected_response:true }...: avg=7.64s   min=1.02s  med=7.54s  max=19.25s   p(90)=8.06s   p(95)=8.57s   
   ✓ http_req_failed................: 0.00%   ✓ 0       ✗ 10509
     http_req_receiving.............: avg=99.54µs min=26.9µs med=88.6µs max=12.64ms  p(90)=140.3µs p(95)=163.4µs 
     http_req_sending...............: avg=1.79ms  min=9µs    med=23.3µs max=175.54ms p(90)=51.82µs p(95)=130.72µs
     http_req_tls_handshaking.......: avg=0s      min=0s     med=0s     max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=7.64s   min=1.02s  med=7.54s  max=19.25s   p(90)=8.06s   p(95)=8.57s   
     http_reqs......................: 10509   51.9749/s
     iteration_duration.............: avg=7.65s   min=1.02s  med=7.54s  max=19.38s   p(90)=8.07s   p(95)=8.57s   
     iterations.....................: 10509   51.9749/s
     vus............................: 114     min=114   max=400
     vus_max........................: 400     min=400   max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1ef31022-aac7-420c-bf8a-55dec55bba00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/65653d33-0e82-442d-ed79-c8d026c14500/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  72% — ✓ 7532 / ✗ 2916
     ✗ valid response structure
      ↳  72% — ✓ 7532 / ✗ 2916

     checks.........................: 81.39% ✓ 25512     ✗ 5832 
     data_received..................: 48 MB  234 kB/s
     data_sent......................: 12 MB  60 kB/s
     http_req_blocked...............: avg=3.53ms   min=1.5µs    med=2.8µs  max=163.4ms  p(90)=4.59µs p(95)=18.7µs  
     http_req_connecting............: avg=3.49ms   min=0s       med=0s     max=160.02ms p(90)=0s     p(95)=0s      
     http_req_duration..............: avg=7.82s    min=712.56ms med=7.02s  max=22.49s   p(90)=13.94s p(95)=15.68s  
       { expected_response:true }...: avg=7.82s    min=712.56ms med=7.02s  max=22.49s   p(90)=13.94s p(95)=15.68s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 10448
     http_req_receiving.............: avg=85.3µs   min=22.8µs   med=61.9µs max=14.76ms  p(90)=94.7µs p(95)=115.26µs
     http_req_sending...............: avg=728.92µs min=7.7µs    med=16µs   max=49.48ms  p(90)=35.8µs p(95)=488.06µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=7.82s    min=712.5ms  med=7.02s  max=22.48s   p(90)=13.94s p(95)=15.68s  
     http_reqs......................: 10448  50.738209/s
     iteration_duration.............: avg=7.82s    min=713.41ms med=7.02s  max=22.55s   p(90)=13.97s p(95)=15.69s  
     iterations.....................: 10448  50.738209/s
     vus............................: 41     min=41      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e4ff09ab-d67d-4d40-1c31-9ae312c1f400/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3c905672-ede8-445b-206f-5d646ae90e00/public" alt="HTTP Overview" />


  </details>