## Overview for: `scenarios/fed-v1-constant-vus-over-time`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. It's being executed with a constant amount of VUs over a fixed amount of time. It measure things like memory usage, CPU usage, average RPS. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was running 400 VUs over 200s


### Comparison


| Gateway                             | RPS ⬇️ |        Requests         |         Duration          |
| :---------------------------------- | :----: | :---------------------: | :-----------------------: |
| wundergraph                         |  703   | 140975 total, 0 failed  |  avg: 565ms, p95: 797ms   |
| mesh-bun                            |  693   | 138985 total, 0 failed  |  avg: 576ms, p95: 923ms   |
| stitching-federation-with-yoga-bun  |  117   |  23636 total, 0 failed  | avg: 3400ms, p95: 4441ms  |
| mesh                                |  107   |  21668 total, 0 failed  | avg: 3716ms, p95: 4657ms  |
| mesh-supergraph                     |  106   |  21505 total, 0 failed  | avg: 3736ms, p95: 4490ms  |
| stitching-federation-with-yoga-deno |  102   |  20678 total, 0 failed  | avg: 3891ms, p95: 4489ms  |
| apollo-router                       |   74   |  15196 total, 0 failed  | avg: 5335ms, p95: 8242ms  |
| stitching-federation-with-yoga      |   74   | 15791 total, 642 failed | avg: 5196ms, p95: 31173ms |
| stitching-federation-with-yoga-uws  |   69   |  14170 total, 0 failed  | avg: 5702ms, p95: 9326ms  |
| apollo-gateway-with-yoga-bun        |   67   |  13743 total, 0 failed  | avg: 5921ms, p95: 9931ms  |
| apollo-server                       |   66   |  13610 total, 2 failed  | avg: 5934ms, p95: 12848ms |
| mercurius                           |   66   |  13505 total, 0 failed  | avg: 5952ms, p95: 6569ms  |
| apollo-gateway-with-yoga-uws        |   60   |  12312 total, 0 failed  | avg: 6529ms, p95: 15174ms |
| apollo-server-node16                |   50   |  10379 total, 0 failed  | avg: 7781ms, p95: 19032ms |
| apollo-gateway-with-yoga            |   41   | 8882 total, 405 failed  | avg: 9239ms, p95: 32514ms |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 422925     ✗ 0     
     data_received..................: 702 MB  3.5 MB/s
     data_sent......................: 167 MB  835 kB/s
     http_req_blocked...............: avg=126.46µs min=1.1µs    med=2.2µs    max=186.38ms p(90)=3.7µs    p(95)=4.59µs  
     http_req_connecting............: avg=117.3µs  min=0s       med=0s       max=111.82ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=564.92ms min=132.15ms med=550.57ms max=1.57s    p(90)=732.45ms p(95)=796.77ms
       { expected_response:true }...: avg=564.92ms min=132.15ms med=550.57ms max=1.57s    p(90)=732.45ms p(95)=796.77ms
   ✓ http_req_failed................: 0.00%   ✓ 0          ✗ 140975
     http_req_receiving.............: avg=4.93ms   min=15µs     med=36.79µs  max=585.8ms  p(90)=266.06µs p(95)=16.5ms  
     http_req_sending...............: avg=727.22µs min=6.7µs    med=12µs     max=579.47ms p(90)=25.6µs   p(95)=112.83µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=559.26ms min=126.81ms med=547.24ms max=1.57s    p(90)=719.65ms p(95)=780.64ms
     http_reqs......................: 140975  703.566431/s
     iteration_duration.............: avg=567.94ms min=132.76ms med=553.59ms max=1.63s    p(90)=736.21ms p(95)=801.33ms
     iterations.....................: 140975  703.566431/s
     vus............................: 400     min=400      max=400 
     vus_max........................: 400     min=400      max=400 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2e9bc4e3-3bf7-43be-288a-a9ac7674bb00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5bd221a3-497c-4ce0-e47c-108cab606700/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  0% — ✓ 0 / ✗ 138985
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 138985

     checks.........................: 33.33% ✓ 138985     ✗ 277970
     data_received..................: 132 MB 660 kB/s
     data_sent......................: 165 MB 823 kB/s
     http_req_blocked...............: avg=222.56µs min=900ns    med=1.9µs    max=154.49ms p(90)=3µs      p(95)=3.7µs   
     http_req_connecting............: avg=214.49µs min=0s       med=0s       max=154.46ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=575.54ms min=130.45ms med=540.4ms  max=1.24s    p(90)=852.73ms p(95)=922.52ms
       { expected_response:true }...: avg=575.54ms min=130.45ms med=540.4ms  max=1.24s    p(90)=852.73ms p(95)=922.52ms
   ✓ http_req_failed................: 0.00%  ✓ 0          ✗ 138985
     http_req_receiving.............: avg=522µs    min=11.9µs   med=25.5µs   max=194.87ms p(90)=222.76µs p(95)=343.9µs 
     http_req_sending...............: avg=163.05µs min=6.2µs    med=11.4µs   max=237.25ms p(90)=36.8µs   p(95)=135.58µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=574.85ms min=129.83ms med=539.84ms max=1.24s    p(90)=851.89ms p(95)=921.97ms
     http_reqs......................: 138985 693.521837/s
     iteration_duration.............: avg=576.21ms min=131.39ms med=541.29ms max=1.25s    p(90)=853.12ms p(95)=922.95ms
     iterations.....................: 138985 693.521837/s
     vus............................: 400    min=400      max=400 
     vus_max........................: 400    min=400      max=400 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3a907571-0dcd-4ccc-96f9-0106fc813b00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1553d647-75d8-4cc2-b3cc-c07044c80300/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 70908      ✗ 0    
     data_received..................: 118 MB  584 kB/s
     data_sent......................: 28 MB   139 kB/s
     http_req_blocked...............: avg=1.81ms   min=1µs      med=2.4µs  max=219.73ms p(90)=3.9µs  p(95)=9.42µs  
     http_req_connecting............: avg=1.79ms   min=0s       med=0s     max=184.59ms p(90)=0s     p(95)=0s      
     http_req_duration..............: avg=3.39s    min=567.65ms med=3.22s  max=8.17s    p(90)=3.87s  p(95)=4.44s   
       { expected_response:true }...: avg=3.39s    min=567.65ms med=3.22s  max=8.17s    p(90)=3.87s  p(95)=4.44s   
   ✓ http_req_failed................: 0.00%   ✓ 0          ✗ 23636
     http_req_receiving.............: avg=184.58µs min=19.3µs   med=40.9µs max=126.45ms p(90)=70.9µs p(95)=141.03µs
     http_req_sending...............: avg=601.86µs min=6.9µs    med=13.6µs max=134.38ms p(90)=37.5µs p(95)=157.75µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=3.39s    min=564.68ms med=3.21s  max=8.17s    p(90)=3.87s  p(95)=4.44s   
     http_reqs......................: 23636   117.299445/s
     iteration_duration.............: avg=3.4s     min=623.72ms med=3.22s  max=8.17s    p(90)=3.88s  p(95)=4.44s   
     iterations.....................: 23636   117.299445/s
     vus............................: 400     min=400      max=400
     vus_max........................: 400     min=400      max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3c74fd5f-3264-45c6-cc9e-a8010b3ee200/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/886399f5-8870-4819-9223-e42d80890d00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 21612 / ✗ 56
     ✗ valid response structure
      ↳  99% — ✓ 21612 / ✗ 56

     checks.........................: 99.82% ✓ 64892     ✗ 112  
     data_received..................: 110 MB 542 kB/s
     data_sent......................: 26 MB  127 kB/s
     http_req_blocked...............: avg=544.16µs min=900ns   med=2.1µs  max=82.87ms p(90)=3.2µs   p(95)=4µs   
     http_req_connecting............: avg=532.45µs min=0s      med=0s     max=82.84ms p(90)=0s      p(95)=0s    
     http_req_duration..............: avg=3.71s    min=1.72s   med=3.63s  max=7.92s   p(90)=4.27s   p(95)=4.65s 
       { expected_response:true }...: avg=3.71s    min=1.72s   med=3.63s  max=7.92s   p(90)=4.27s   p(95)=4.65s 
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 21668
     http_req_receiving.............: avg=71.88µs  min=16.29µs med=42.7µs max=45.29ms p(90)=68.39µs p(95)=78.1µs
     http_req_sending...............: avg=94.88µs  min=6.3µs   med=12.4µs max=61.89ms p(90)=25.1µs  p(95)=31µs  
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s      p(90)=0s      p(95)=0s    
     http_req_waiting...............: avg=3.71s    min=1.72s   med=3.63s  max=7.92s   p(90)=4.27s   p(95)=4.65s 
     http_reqs......................: 21668  107.23712/s
     iteration_duration.............: avg=3.71s    min=1.72s   med=3.63s  max=7.93s   p(90)=4.28s   p(95)=4.65s 
     iterations.....................: 21668  107.23712/s
     vus............................: 185    min=185     max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/bd80d8bb-ed65-444c-61df-349383129800/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b9f84e9c-e5b9-429b-a51c-af8b75406300/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 21496 / ✗ 9
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 21505

     checks.........................: 66.65% ✓ 43001      ✗ 21514
     data_received..................: 108 MB 538 kB/s
     data_sent......................: 26 MB  127 kB/s
     http_req_blocked...............: avg=1.47ms   min=1.1µs  med=2.1µs  max=271.27ms p(90)=3.1µs   p(95)=3.8µs 
     http_req_connecting............: avg=1.44ms   min=0s     med=0s     max=271.23ms p(90)=0s      p(95)=0s    
     http_req_duration..............: avg=3.73s    min=1.84s  med=3.65s  max=7.8s     p(90)=4.23s   p(95)=4.49s 
       { expected_response:true }...: avg=3.73s    min=1.84s  med=3.65s  max=7.8s     p(90)=4.23s   p(95)=4.49s 
   ✓ http_req_failed................: 0.00%  ✓ 0          ✗ 21505
     http_req_receiving.............: avg=54.99µs  min=21.4µs med=45.4µs max=19.7ms   p(90)=66.4µs  p(95)=74µs  
     http_req_sending...............: avg=545.48µs min=7.9µs  med=12.2µs max=127.69ms p(90)=21.36µs p(95)=27.9µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s      p(95)=0s    
     http_req_waiting...............: avg=3.73s    min=1.84s  med=3.65s  max=7.8s     p(90)=4.23s   p(95)=4.49s 
     http_reqs......................: 21505  106.619511/s
     iteration_duration.............: avg=3.73s    min=1.84s  med=3.65s  max=7.84s    p(90)=4.23s   p(95)=4.49s 
     iterations.....................: 21505  106.619511/s
     vus............................: 239    min=239      max=400
     vus_max........................: 400    min=400      max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/686bb348-ea84-4d34-3ac7-3dbeebb65700/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d5148b48-6e04-4378-5af5-69e4fb1a9500/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-deno`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 20588 / ✗ 90
     ✗ valid response structure
      ↳  99% — ✓ 20588 / ✗ 90

     checks.........................: 99.70% ✓ 61854      ✗ 180  
     data_received..................: 105 MB 518 kB/s
     data_sent......................: 25 MB  122 kB/s
     http_req_blocked...............: avg=449.28µs min=800ns  med=1.8µs  max=50.98ms p(90)=3.2µs   p(95)=3.8µs  
     http_req_connecting............: avg=439.23µs min=0s     med=0s     max=50.94ms p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=3.89s    min=1.99s  med=3.84s  max=7.28s   p(90)=4.13s   p(95)=4.48s  
       { expected_response:true }...: avg=3.89s    min=1.99s  med=3.84s  max=7.28s   p(90)=4.13s   p(95)=4.48s  
   ✓ http_req_failed................: 0.00%  ✓ 0          ✗ 20678
     http_req_receiving.............: avg=92.34µs  min=14.5µs med=26.3µs max=24.7ms  p(90)=71.7µs  p(95)=87.22µs
     http_req_sending...............: avg=80.39µs  min=5.6µs  med=10.8µs max=51.44ms p(90)=24.39µs p(95)=97.09µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=3.89s    min=1.99s  med=3.84s  max=7.28s   p(90)=4.13s   p(95)=4.48s  
     http_reqs......................: 20678  102.412724/s
     iteration_duration.............: avg=3.89s    min=1.99s  med=3.84s  max=7.28s   p(90)=4.13s   p(95)=4.49s  
     iterations.....................: 20678  102.412724/s
     vus............................: 109    min=109      max=400
     vus_max........................: 400    min=400      max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a348964d-c136-48ef-16a8-4acf7d723800/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e23a50f7-4469-4613-2391-85c2ee6dca00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 15143 / ✗ 53
     ✗ valid response structure
      ↳  99% — ✓ 15143 / ✗ 53

     checks.........................: 99.76% ✓ 45482     ✗ 106  
     data_received..................: 76 MB  370 kB/s
     data_sent......................: 18 MB  88 kB/s
     http_req_blocked...............: avg=1.45ms   min=1.3µs  med=3µs    max=121.16ms p(90)=5µs      p(95)=22.4µs  
     http_req_connecting............: avg=1.42ms   min=0s     med=0s     max=121.12ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=5.33s    min=2.11s  med=5.04s  max=11.87s   p(90)=6.82s    p(95)=8.24s   
       { expected_response:true }...: avg=5.33s    min=2.11s  med=5.04s  max=11.87s   p(90)=6.82s    p(95)=8.24s   
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 15196
     http_req_receiving.............: avg=635.01µs min=26.6µs med=64.6µs max=260.51ms p(90)=121.65µs p(95)=166.8µs 
     http_req_sending...............: avg=281.71µs min=9µs    med=17.3µs max=169.46ms p(90)=51.1µs   p(95)=131.62µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=5.33s    min=2.11s  med=5.04s  max=11.87s   p(90)=6.81s    p(95)=8.24s   
     http_reqs......................: 15196  74.356965/s
     iteration_duration.............: avg=5.33s    min=2.11s  med=5.04s  max=11.92s   p(90)=6.82s    p(95)=8.24s   
     iterations.....................: 15196  74.356965/s
     vus............................: 211    min=211     max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3cd0d206-ad27-496e-780c-92998258c600/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4860d60e-8b3c-4d3b-29cf-207a5d038d00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  95% — ✓ 15149 / ✗ 642
     ✗ no graphql errors
      ↳  95% — ✓ 15109 / ✗ 682
     ✗ valid response structure
      ↳  99% — ✓ 15109 / ✗ 40

     checks.........................: 97.08% ✓ 45367     ✗ 1364 
     data_received..................: 77 MB  360 kB/s
     data_sent......................: 19 MB  88 kB/s
     http_req_blocked...............: avg=2.53ms   min=1.3µs    med=2.6µs  max=185.2ms  p(90)=9.9µs  p(95)=2.67ms  
     http_req_connecting............: avg=2.45ms   min=0s       med=0s     max=171.7ms  p(90)=0s     p(95)=2.11ms  
     http_req_duration..............: avg=5.19s    min=281.52ms med=2.37s  max=1m0s     p(90)=2.92s  p(95)=31.17s  
       { expected_response:true }...: avg=2.87s    min=281.52ms med=2.36s  max=59s      p(90)=2.77s  p(95)=3.08s   
   ✓ http_req_failed................: 4.06%  ✓ 642       ✗ 15149
     http_req_receiving.............: avg=82.13µs  min=0s       med=57.6µs max=31.56ms  p(90)=84.1µs p(95)=93.8µs  
     http_req_sending...............: avg=437.24µs min=8.3µs    med=15.4µs max=293.96ms p(90)=36.1µs p(95)=246.76µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=5.19s    min=281.44ms med=2.37s  max=1m0s     p(90)=2.92s  p(95)=31.17s  
     http_reqs......................: 15791  74.078326/s
     iteration_duration.............: avg=5.2s     min=282.55ms med=2.38s  max=1m0s     p(90)=2.92s  p(95)=31.26s  
     iterations.....................: 15791  74.078326/s
     vus............................: 34     min=34      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6458cf5d-8dc1-4b92-65f7-100a7be38100/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b7d64a06-a2a6-4c26-492e-3c64f44f2800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-uws`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  94% — ✓ 13437 / ✗ 733
     ✗ valid response structure
      ↳  94% — ✓ 13437 / ✗ 733

     checks.........................: 96.55% ✓ 41044     ✗ 1466 
     data_received..................: 83 MB  406 kB/s
     data_sent......................: 17 MB  83 kB/s
     http_req_blocked...............: avg=2.18ms   min=1.4µs  med=2.9µs  max=239.68ms p(90)=4.8µs   p(95)=18.3µs  
     http_req_connecting............: avg=2.11ms   min=0s     med=0s     max=239.46ms p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=5.7s     min=2.65s  med=5.13s  max=13.73s   p(90)=7.95s   p(95)=9.32s   
       { expected_response:true }...: avg=5.7s     min=2.65s  med=5.13s  max=13.73s   p(90)=7.95s   p(95)=9.32s   
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 14170
     http_req_receiving.............: avg=91.94µs  min=23.3µs med=60.2µs max=61.76ms  p(90)=91.4µs  p(95)=114.9µs 
     http_req_sending...............: avg=672.71µs min=8µs    med=16µs   max=133.7ms  p(90)=35.81µs p(95)=121.31µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=5.7s     min=2.65s  med=5.13s  max=13.73s   p(90)=7.94s   p(95)=9.29s   
     http_reqs......................: 14170  69.672251/s
     iteration_duration.............: avg=5.7s     min=2.65s  med=5.13s  max=13.86s   p(90)=7.98s   p(95)=9.34s   
     iterations.....................: 14170  69.672251/s
     vus............................: 173    min=173     max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b38d6ff3-ee3a-447b-841d-332c6f86d100/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/30808221-ae38-46fb-3f91-497167e20600/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 13728 / ✗ 15
     ✗ valid response structure
      ↳  99% — ✓ 13728 / ✗ 15

     checks.........................: 99.92% ✓ 41199     ✗ 30   
     data_received..................: 68 MB  334 kB/s
     data_sent......................: 16 MB  80 kB/s
     http_req_blocked...............: avg=2.1ms  min=1.4µs  med=2.8µs  max=165.12ms p(90)=4.59µs  p(95)=14.5µs  
     http_req_connecting............: avg=2.08ms min=0s     med=0s     max=155.81ms p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=5.92s  min=1.34s  med=5.27s  max=15.48s   p(90)=9.28s   p(95)=9.93s   
       { expected_response:true }...: avg=5.92s  min=1.34s  med=5.27s  max=15.48s   p(90)=9.28s   p(95)=9.93s   
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 13743
     http_req_receiving.............: avg=5.32ms min=20.1µs med=46.4µs max=281.51ms p(90)=119.4µs p(95)=1.08ms  
     http_req_sending...............: avg=1.78ms min=7.9µs  med=14.5µs max=386.76ms p(90)=82.28µs p(95)=908.34µs
     http_req_tls_handshaking.......: avg=0s     min=0s     med=0s     max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=5.91s  min=1.33s  med=5.25s  max=15.46s   p(90)=9.25s   p(95)=9.93s   
     http_reqs......................: 13743  67.124362/s
     iteration_duration.............: avg=5.92s  min=1.41s  med=5.27s  max=15.62s   p(90)=9.31s   p(95)=9.93s   
     iterations.....................: 13743  67.124362/s
     vus............................: 20     min=20      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1ac8cea9-bfbc-488d-1fa2-a88f72e17600/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/93e1fc2a-f81c-44af-8b66-bb849e6dc100/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  99% — ✓ 13608 / ✗ 2
     ✗ no graphql errors
      ↳  82% — ✓ 11273 / ✗ 2337
     ✗ valid response structure
      ↳  82% — ✓ 11273 / ✗ 2335

     checks.........................: 88.55% ✓ 36154     ✗ 4674 
     data_received..................: 66 MB  325 kB/s
     data_sent......................: 16 MB  80 kB/s
     http_req_blocked...............: avg=2.83ms  min=900ns    med=2µs    max=194.63ms p(90)=3.2µs   p(95)=12.25µs
     http_req_connecting............: avg=2.77ms  min=0s       med=0s     max=194.47ms p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=5.93s   min=933.54ms med=5.02s  max=59.99s   p(90)=9.95s   p(95)=12.84s 
       { expected_response:true }...: avg=5.92s   min=933.54ms med=5.01s  max=59.55s   p(90)=9.95s   p(95)=12.84s 
   ✓ http_req_failed................: 0.01%  ✓ 2         ✗ 13608
     http_req_receiving.............: avg=55.43µs min=0s       med=42.2µs max=13.93ms  p(90)=70µs    p(95)=79.8µs 
     http_req_sending...............: avg=1.05ms  min=5.9µs    med=12.2µs max=144.77ms p(90)=26.61µs p(95)=39.15µs
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s     max=0s       p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=5.93s   min=933.45ms med=5.02s  max=59.99s   p(90)=9.95s   p(95)=12.84s 
     http_reqs......................: 13610  66.971924/s
     iteration_duration.............: avg=5.93s   min=934.22ms med=5.02s  max=1m0s     p(90)=9.95s   p(95)=12.84s 
     iterations.....................: 13610  66.971924/s
     vus............................: 104    min=104     max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f9b0dd3c-7261-4e8c-0c3d-54e0fb4f0200/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f8b4abae-bb00-409d-cb8c-79a2d3325700/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 40515     ✗ 0    
     data_received..................: 68 MB   336 kB/s
     data_sent......................: 16 MB   79 kB/s
     http_req_blocked...............: avg=1.7ms    min=1.3µs    med=3.3µs  max=139.75ms p(90)=4.8µs  p(95)=18µs    
     http_req_connecting............: avg=1.67ms   min=0s       med=0s     max=101.91ms p(90)=0s     p(95)=0s      
     http_req_duration..............: avg=5.95s    min=707.63ms med=5.85s  max=14.31s   p(90)=6.19s  p(95)=6.56s   
       { expected_response:true }...: avg=5.95s    min=707.63ms med=5.85s  max=14.31s   p(90)=6.19s  p(95)=6.56s   
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 13505
     http_req_receiving.............: avg=76.29µs  min=23.1µs   med=72.3µs max=17.08ms  p(90)=94.8µs p(95)=102.18µs
     http_req_sending...............: avg=449.33µs min=7.9µs    med=19.2µs max=40.87ms  p(90)=36µs   p(95)=73.14µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=5.95s    min=707.32ms med=5.85s  max=14.31s   p(90)=6.19s  p(95)=6.56s   
     http_reqs......................: 13505   66.819411/s
     iteration_duration.............: avg=5.95s    min=710.71ms med=5.86s  max=14.35s   p(90)=6.19s  p(95)=6.57s   
     iterations.....................: 13505   66.819411/s
     vus............................: 93      min=93      max=400
     vus_max........................: 400     min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b9abf7d5-514f-46cd-0b56-b2b5402c4700/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/99b48e80-4255-48b9-d562-bb7a09d7cf00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga-uws`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  81% — ✓ 10012 / ✗ 2300
     ✗ valid response structure
      ↳  81% — ✓ 10012 / ✗ 2300

     checks.........................: 87.54% ✓ 32336     ✗ 4600 
     data_received..................: 58 MB  285 kB/s
     data_sent......................: 15 MB  72 kB/s
     http_req_blocked...............: avg=4.67ms   min=1.2µs    med=2.6µs  max=368.74ms p(90)=4.8µs   p(95)=16.14µs 
     http_req_connecting............: avg=4.53ms   min=0s       med=0s     max=368.7ms  p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=6.52s    min=494.14ms med=5.46s  max=21.44s   p(90)=12.39s  p(95)=15.17s  
       { expected_response:true }...: avg=6.52s    min=494.14ms med=5.46s  max=21.44s   p(90)=12.39s  p(95)=15.17s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 12312
     http_req_receiving.............: avg=188.81µs min=20.5µs   med=55.2µs max=97.15ms  p(90)=88.6µs  p(95)=104µs   
     http_req_sending...............: avg=995.25µs min=8.4µs    med=14.6µs max=127.39ms p(90)=34.49µs p(95)=165.28µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=6.52s    min=494.04ms med=5.46s  max=21.44s   p(90)=12.36s  p(95)=15.17s  
     http_reqs......................: 12312  60.935814/s
     iteration_duration.............: avg=6.53s    min=494.39ms med=5.46s  max=21.44s   p(90)=12.52s  p(95)=15.17s  
     iterations.....................: 12312  60.935814/s
     vus............................: 85     min=85      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1d67696a-0b01-49a6-1eaa-c9877fdff900/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1e365dcc-3dd5-4b9f-3b2d-d27982df6f00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server-node16`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  69% — ✓ 7244 / ✗ 3135
     ✗ valid response structure
      ↳  69% — ✓ 7244 / ✗ 3135

     checks.........................: 79.86% ✓ 24867     ✗ 6270 
     data_received..................: 49 MB  238 kB/s
     data_sent......................: 12 MB  60 kB/s
     http_req_blocked...............: avg=5.16ms   min=1.2µs    med=2.7µs   max=274.88ms p(90)=4.89µs p(95)=17µs    
     http_req_connecting............: avg=5.11ms   min=0s       med=0s      max=274.74ms p(90)=0s     p(95)=0s      
     http_req_duration..............: avg=7.78s    min=508.6ms  med=6.54s   max=23.33s   p(90)=16.88s p(95)=19.03s  
       { expected_response:true }...: avg=7.78s    min=508.6ms  med=6.54s   max=23.33s   p(90)=16.88s p(95)=19.03s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 10379
     http_req_receiving.............: avg=383.57µs min=24.1µs   med=65.1µs  max=77.14ms  p(90)=96.8µs p(95)=110.6µs 
     http_req_sending...............: avg=2.73ms   min=7.4µs    med=16.89µs max=214.97ms p(90)=34µs   p(95)=145.79µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s       p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=7.77s    min=508.46ms med=6.54s   max=23.33s   p(90)=16.88s p(95)=19.03s  
     http_reqs......................: 10379  50.806097/s
     iteration_duration.............: avg=7.78s    min=509.44ms med=6.54s   max=23.33s   p(90)=16.88s p(95)=19.03s  
     iterations.....................: 10379  50.806097/s
     vus............................: 57     min=57      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/76809f22-7021-4294-2a91-71b20e429800/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f0fbaeb5-b728-4a8e-4155-f6cacda40f00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  95% — ✓ 8477 / ✗ 405
     ✗ no graphql errors
      ↳  74% — ✓ 6586 / ✗ 2296
     ✗ valid response structure
      ↳  77% — ✓ 6586 / ✗ 1891

     checks.........................: 82.50% ✓ 21649     ✗ 4592 
     data_received..................: 39 MB  182 kB/s
     data_sent......................: 11 MB  49 kB/s
     http_req_blocked...............: avg=2.58ms   min=1.6µs  med=3.6µs  max=148.82ms p(90)=27.9µs   p(95)=13.09ms
     http_req_connecting............: avg=2.41ms   min=0s     med=0s     max=132.29ms p(90)=0s       p(95)=12.63ms
     http_req_duration..............: avg=9.23s    min=1.33s  med=5.99s  max=1m0s     p(90)=9.47s    p(95)=32.51s 
       { expected_response:true }...: avg=6.81s    min=1.33s  med=5.92s  max=59.94s   p(90)=8.54s    p(95)=9.76s  
   ✓ http_req_failed................: 4.55%  ✓ 405       ✗ 8477 
     http_req_receiving.............: avg=108.31µs min=0s     med=75.5µs max=54.18ms  p(90)=126.69µs p(95)=153.2µs
     http_req_sending...............: avg=1.44ms   min=11.2µs med=22.6µs max=139.78ms p(90)=121.08µs p(95)=1.17ms 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=9.23s    min=1.33s  med=5.99s  max=1m0s     p(90)=9.47s    p(95)=32.51s 
     http_reqs......................: 8882   41.586932/s
     iteration_duration.............: avg=9.24s    min=1.33s  med=5.99s  max=1m0s     p(90)=9.47s    p(95)=32.51s 
     iterations.....................: 8882   41.586932/s
     vus............................: 40     min=40      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/83a1b37a-0727-4ecf-166c-72cb43cd1900/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/462c2e8e-2bc3-4b2e-5adf-35e82e394500/public" alt="HTTP Overview" />


  </details>