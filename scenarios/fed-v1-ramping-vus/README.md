## Overview for: `fed-v1-ramping-vus`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. We are running a heavy load of concurrent VUs to measure response time and other stats, during stress. It measure things like memory usage, CPU usage, response times. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was trying to reach 1500 concurrent VUs over 300s


### Comparison


| Gateway                             | duration(p95)⬇️ |  RPS  |         Requests         |                       Durations                        |
| :---------------------------------- | :-------------: | :---: | :----------------------: | :----------------------------------------------------: |
| wundergraph                         |     3168ms      |  493  |  153024 total, 0 failed  |   avg: 1540ms, p95: 3169ms, max: 6369ms, med: 1433ms   |
| stitching-federation-with-yoga-bun  |     16831ms     |  106  |  33248 total, 0 failed   |  avg: 7378ms, p95: 16832ms, max: 40183ms, med: 7031ms  |
| apollo-router                       |     17316ms     |  80   |  25803 total, 0 failed   |  avg: 9664ms, p95: 17317ms, max: 18928ms, med: 9377ms  |
| stitching-federation-with-yoga-deno |     20186ms     |  81   |  25471 total, 0 failed   |  avg: 9738ms, p95: 20186ms, max: 32263ms, med: 9032ms  |
| mercurius                           |     21548ms     |  66   |  20809 total, 0 failed   | avg: 11681ms, p95: 21548ms, max: 22640ms, med: 11449ms |
| mesh                                |     25621ms     |  57   |  18054 total, 0 failed   | avg: 13848ms, p95: 25622ms, max: 42434ms, med: 13832ms |
| mesh-supergraph                     |     26050ms     |  59   |  18938 total, 0 failed   | avg: 13248ms, p95: 26050ms, max: 32099ms, med: 11884ms |
| apollo-gateway-with-yoga-uws        |     36728ms     |  61   |  19430 total, 0 failed   | avg: 12833ms, p95: 36729ms, max: 56393ms, med: 7778ms  |
| apollo-server-node16                |     37846ms     |  62   |  20129 total, 0 failed   | avg: 12448ms, p95: 37847ms, max: 52691ms, med: 7618ms  |
| stitching-federation-with-yoga-uws  |     39032ms     |  68   | 22470 total, 317 failed  | avg: 11334ms, p95: 39032ms, max: 60050ms, med: 5341ms  |
| apollo-gateway-with-yoga            |     60000ms     |  57   | 19093 total, 2829 failed | avg: 13162ms, p95: 60000ms, max: 60062ms, med: 4144ms  |
| apollo-server                       |     60000ms     |  61   | 20464 total, 2799 failed | avg: 12367ms, p95: 60000ms, max: 60051ms, med: 3941ms  |
| stitching-federation-with-yoga      |     60000ms     |  87   | 29322 total, 2628 failed |  avg: 8585ms, p95: 60000ms, max: 60033ms, med: 2984ms  |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 459072     ✗ 0     
     data_received..................: 762 MB  2.5 MB/s
     data_sent......................: 182 MB  586 kB/s
     http_req_blocked...............: avg=1.63ms min=1.3µs   med=2.7µs  max=1.84s p(90)=4.5µs   p(95)=8.69µs  
     http_req_connecting............: avg=1.59ms min=0s      med=0s     max=1.84s p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=1.54s  min=9.43ms  med=1.43s  max=6.36s p(90)=2.81s   p(95)=3.16s   
       { expected_response:true }...: avg=1.54s  min=9.43ms  med=1.43s  max=6.36s p(90)=2.81s   p(95)=3.16s   
     http_req_failed................: 0.00%   ✓ 0          ✗ 153024
     http_req_receiving.............: avg=5.63ms min=18.3µs  med=50.6µs max=1.53s p(90)=254.3µs p(95)=899.18µs
     http_req_sending...............: avg=2.72ms min=8.2µs   med=15.6µs max=1.35s p(90)=71.2µs  p(95)=180.38µs
     http_req_tls_handshaking.......: avg=0s     min=0s      med=0s     max=0s    p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=1.53s  min=9.37ms  med=1.42s  max=6.36s p(90)=2.79s   p(95)=3.13s   
     http_reqs......................: 153024  493.609589/s
     iteration_duration.............: avg=1.55s  min=10.12ms med=1.44s  max=6.37s p(90)=2.84s   p(95)=3.2s    
     iterations.....................: 153024  493.609589/s
     vus............................: 4       min=0        max=1498
     vus_max........................: 1500    min=1056     max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3bee408a-2d01-4e6a-5f31-af88805f9000/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6ceb9077-e155-4fe8-c5e9-c70264b7d000/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 99744      ✗ 0     
     data_received..................: 166 MB  531 kB/s
     data_sent......................: 40 MB   126 kB/s
     http_req_blocked...............: avg=177.57µs min=1.2µs    med=2.6µs   max=391.76ms p(90)=5.7µs  p(95)=37.79µs 
     http_req_connecting............: avg=166.68µs min=0s       med=0s      max=391.68ms p(90)=0s     p(95)=0s      
     http_req_duration..............: avg=7.37s    min=249.66ms med=7.03s   max=40.18s   p(90)=10.4s  p(95)=16.83s  
       { expected_response:true }...: avg=7.37s    min=249.66ms med=7.03s   max=40.18s   p(90)=10.4s  p(95)=16.83s  
     http_req_failed................: 0.00%   ✓ 0          ✗ 33248 
     http_req_receiving.............: avg=456.87µs min=20.1µs   med=52.55µs max=215.02ms p(90)=82.5µs p(95)=217.37µs
     http_req_sending...............: avg=423.11µs min=7.7µs    med=14.7µs  max=476.14ms p(90)=56.3µs p(95)=112.6µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s       p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=7.37s    min=249.43ms med=7.03s   max=40.18s   p(90)=10.39s p(95)=16.83s  
     http_reqs......................: 33248   106.504322/s
     iteration_duration.............: avg=7.37s    min=251.86ms med=7.03s   max=40.18s   p(90)=10.4s  p(95)=16.83s  
     iterations.....................: 33248   106.504322/s
     vus............................: 247     min=0        max=1500
     vus_max........................: 1500    min=1150     max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1b618ace-b25a-4d84-c804-50fcb786f500/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d779a2b7-e732-41ff-3f25-96aeeb1f8e00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 25766 / ✗ 37
     ✗ valid response structure
      ↳  99% — ✓ 25766 / ✗ 37

     checks.........................: 99.90% ✓ 77335     ✗ 74    
     data_received..................: 129 MB 402 kB/s
     data_sent......................: 31 MB  96 kB/s
     http_req_blocked...............: avg=70.22µs min=1.3µs    med=3.2µs   max=111.22ms p(90)=7µs     p(95)=254.78µs
     http_req_connecting............: avg=59.1µs  min=0s       med=0s      max=111.08ms p(90)=0s      p(95)=165.79µs
     http_req_duration..............: avg=9.66s   min=219.25ms med=9.37s   max=18.92s   p(90)=16.69s  p(95)=17.31s  
       { expected_response:true }...: avg=9.66s   min=219.25ms med=9.37s   max=18.92s   p(90)=16.69s  p(95)=17.31s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 25803 
     http_req_receiving.............: avg=94.55µs min=23.7µs   med=75.09µs max=24.05ms  p(90)=120.1µs p(95)=145.6µs 
     http_req_sending...............: avg=58.49µs min=9.4µs    med=19.3µs  max=35.85ms  p(90)=53.1µs  p(95)=77.58µs 
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s      max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=9.66s   min=219.14ms med=9.37s   max=18.92s   p(90)=16.69s  p(95)=17.31s  
     http_reqs......................: 25803  80.727033/s
     iteration_duration.............: avg=9.66s   min=220.1ms  med=9.37s   max=18.93s   p(90)=16.69s  p(95)=17.31s  
     iterations.....................: 25803  80.727033/s
     vus............................: 88     min=0       max=1499
     vus_max........................: 1500   min=1097    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/16d67272-12ba-4863-80e1-8c7fcc60b600/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/fcd1b925-6b39-48ae-e416-ba859dbcda00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-deno`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  98% — ✓ 25035 / ✗ 436
     ✗ valid response structure
      ↳  98% — ✓ 25035 / ✗ 436

     checks.........................: 98.85% ✓ 75541     ✗ 872   
     data_received..................: 135 MB 431 kB/s
     data_sent......................: 30 MB  96 kB/s
     http_req_blocked...............: avg=111.36µs min=1µs      med=2.5µs  max=57.76ms p(90)=4.8µs  p(95)=210.55µs
     http_req_connecting............: avg=99.26µs  min=0s       med=0s     max=57.4ms  p(90)=0s     p(95)=140.6µs 
     http_req_duration..............: avg=9.73s    min=742.79ms med=9.03s  max=32.26s  p(90)=18.01s p(95)=20.18s  
       { expected_response:true }...: avg=9.73s    min=742.79ms med=9.03s  max=32.26s  p(90)=18.01s p(95)=20.18s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 25471 
     http_req_receiving.............: avg=126.29µs min=18.2µs   med=35.5µs max=25.55ms p(90)=87.1µs p(95)=121µs   
     http_req_sending...............: avg=64.31µs  min=6.8µs    med=13.1µs max=34.56ms p(90)=51.7µs p(95)=96.5µs  
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=9.73s    min=742.73ms med=9.03s  max=32.26s  p(90)=18.01s p(95)=20.18s  
     http_reqs......................: 25471  81.141669/s
     iteration_duration.............: avg=9.73s    min=743.46ms med=9.03s  max=32.26s  p(90)=18.01s p(95)=20.18s  
     iterations.....................: 25471  81.141669/s
     vus............................: 397    min=50      max=1500
     vus_max........................: 1500   min=1500    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/10bbab04-9448-4245-4953-6070e59d8600/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5259e5a6-ac94-4cb9-5e8b-b37d0629be00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 62427     ✗ 0     
     data_received..................: 105 MB  337 kB/s
     data_sent......................: 25 MB   79 kB/s
     http_req_blocked...............: avg=60.02µs min=1.5µs  med=3.3µs  max=23.83ms p(90)=14.7µs  p(95)=435.59µs
     http_req_connecting............: avg=49.27µs min=0s     med=0s     max=23.38ms p(90)=0s      p(95)=355.21µs
     http_req_duration..............: avg=11.68s  min=1.27s  med=11.44s max=22.63s  p(90)=20.65s  p(95)=21.54s  
       { expected_response:true }...: avg=11.68s  min=1.27s  med=11.44s max=22.63s  p(90)=20.65s  p(95)=21.54s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 20809 
     http_req_receiving.............: avg=78.85µs min=22.9µs med=72.5µs max=14.63ms p(90)=100.7µs p(95)=113.5µs 
     http_req_sending...............: avg=40.66µs min=8.2µs  med=18.7µs max=27.29ms p(90)=45.62µs p(95)=76.76µs 
     http_req_tls_handshaking.......: avg=0s      min=0s     med=0s     max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=11.68s  min=1.27s  med=11.44s max=22.63s  p(90)=20.65s  p(95)=21.54s  
     http_reqs......................: 20809   66.912811/s
     iteration_duration.............: avg=11.68s  min=1.27s  med=11.44s max=22.64s  p(90)=20.65s  p(95)=21.54s  
     iterations.....................: 20809   66.912811/s
     vus............................: 27      min=0       max=1499
     vus_max........................: 1500    min=1414    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/051e38e3-a573-4fec-72c8-bf337bd07400/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2ceeeb07-ff82-4961-df37-c26a04670400/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 17899 / ✗ 155
     ✗ valid response structure
      ↳  99% — ✓ 17899 / ✗ 155

     checks.........................: 99.42% ✓ 53852     ✗ 310   
     data_received..................: 92 MB  290 kB/s
     data_sent......................: 21 MB  68 kB/s
     http_req_blocked...............: avg=77.7µs   min=1.5µs    med=2.8µs  max=120.55ms p(90)=18.7µs p(95)=469.92µs
     http_req_connecting............: avg=63.88µs  min=0s       med=0s     max=118.69ms p(90)=0s     p(95)=381.41µs
     http_req_duration..............: avg=13.84s   min=996.07ms med=13.83s max=42.43s   p(90)=24.52s p(95)=25.62s  
       { expected_response:true }...: avg=13.84s   min=996.07ms med=13.83s max=42.43s   p(90)=24.52s p(95)=25.62s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 18054 
     http_req_receiving.............: avg=100.55µs min=23.3µs   med=59.1µs max=98.94ms  p(90)=88.5µs p(95)=112.2µs 
     http_req_sending...............: avg=99.29µs  min=8.2µs    med=15.7µs max=123.42ms p(90)=61.6µs p(95)=94.63µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=13.84s   min=995.84ms med=13.83s max=42.43s   p(90)=24.52s p(95)=25.62s  
     http_reqs......................: 18054  57.107341/s
     iteration_duration.............: avg=13.84s   min=997.26ms med=13.83s max=42.43s   p(90)=24.52s p(95)=25.62s  
     iterations.....................: 18054  57.107341/s
     vus............................: 97     min=0       max=1500
     vus_max........................: 1500   min=1358    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e5274e26-7361-4c67-8d98-1de4cc9cb800/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/be3b8559-d35d-457e-0095-bd6757923300/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  97% — ✓ 18545 / ✗ 393
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 18938

     checks.........................: 65.97% ✓ 37483     ✗ 19331 
     data_received..................: 98 MB  310 kB/s
     data_sent......................: 23 MB  71 kB/s
     http_req_blocked...............: avg=54.14µs min=1.4µs  med=2.6µs  max=18.6ms  p(90)=16.89µs p(95)=473.79µs
     http_req_connecting............: avg=43.76µs min=0s     med=0s     max=18.53ms p(90)=0s      p(95)=383.19µs
     http_req_duration..............: avg=13.24s  min=1.15s  med=11.88s max=32.09s  p(90)=25.09s  p(95)=26.05s  
       { expected_response:true }...: avg=13.24s  min=1.15s  med=11.88s max=32.09s  p(90)=25.09s  p(95)=26.05s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 18938 
     http_req_receiving.............: avg=80.74µs min=21.7µs med=62.3µs max=20.32ms p(90)=92.7µs  p(95)=114.5µs 
     http_req_sending...............: avg=36.63µs min=8.2µs  med=15.5µs max=13.48ms p(90)=50.1µs  p(95)=79.6µs  
     http_req_tls_handshaking.......: avg=0s      min=0s     med=0s     max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=13.24s  min=1.15s  med=11.88s max=32.09s  p(90)=25.09s  p(95)=26.05s  
     http_reqs......................: 18938  59.809657/s
     iteration_duration.............: avg=13.24s  min=1.16s  med=11.88s max=32.1s   p(90)=25.09s  p(95)=26.05s  
     iterations.....................: 18938  59.809657/s
     vus............................: 222    min=0       max=1500
     vus_max........................: 1500   min=1258    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7fb20dbd-2dec-4558-d878-724e64c95700/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a89d88fd-760e-4d17-9d58-5546c8e8b400/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga-uws`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  65% — ✓ 12785 / ✗ 6645
     ✗ valid response structure
      ↳  65% — ✓ 12785 / ✗ 6645

     checks.........................: 77.20% ✓ 45000     ✗ 13290 
     data_received..................: 85 MB  269 kB/s
     data_sent......................: 23 MB  73 kB/s
     http_req_blocked...............: avg=111.69µs min=1.2µs   med=2.7µs  max=43.32ms p(90)=12.51µs p(95)=437.7µs 
     http_req_connecting............: avg=98.21µs  min=0s      med=0s     max=43.12ms p(90)=0s      p(95)=362.71µs
     http_req_duration..............: avg=12.83s   min=97.02ms med=7.77s  max=56.39s  p(90)=31.94s  p(95)=36.72s  
       { expected_response:true }...: avg=12.83s   min=97.02ms med=7.77s  max=56.39s  p(90)=31.94s  p(95)=36.72s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 19430 
     http_req_receiving.............: avg=86.76µs  min=15.9µs  med=51.8µs max=81.6ms  p(90)=87.91µs p(95)=103.8µs 
     http_req_sending...............: avg=88.22µs  min=7.3µs   med=14.4µs max=33.98ms p(90)=58.01µs p(95)=85.75µs 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=12.83s   min=96.89ms med=7.77s  max=56.39s  p(90)=31.94s  p(95)=36.72s  
     http_reqs......................: 19430  61.190086/s
     iteration_duration.............: avg=12.83s   min=97.79ms med=7.77s  max=56.39s  p(90)=31.95s  p(95)=36.72s  
     iterations.....................: 19430  61.190086/s
     vus............................: 162    min=28      max=1500
     vus_max........................: 1500   min=1500    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a2cdc1d2-7161-4819-80e9-d26934e01c00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c7b4d3d6-e56e-404e-476b-3520db591e00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server-node16`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  58% — ✓ 11702 / ✗ 8427
     ✗ valid response structure
      ↳  58% — ✓ 11702 / ✗ 8427

     checks.........................: 72.09% ✓ 43533     ✗ 16854 
     data_received..................: 87 MB  268 kB/s
     data_sent......................: 24 MB  74 kB/s
     http_req_blocked...............: avg=53.68µs min=1µs      med=2.4µs  max=54.68ms p(90)=8.42µs  p(95)=370.07µs
     http_req_connecting............: avg=44.74µs min=0s       med=0s     max=47.27ms p(90)=0s      p(95)=306.15µs
     http_req_duration..............: avg=12.44s  min=126.21ms med=7.61s  max=52.69s  p(90)=29.77s  p(95)=37.84s  
       { expected_response:true }...: avg=12.44s  min=126.21ms med=7.61s  max=52.69s  p(90)=29.77s  p(95)=37.84s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 20129 
     http_req_receiving.............: avg=78.05µs min=18.89µs  med=54.6µs max=56.01ms p(90)=81.9µs  p(95)=90.1µs  
     http_req_sending...............: avg=65.28µs min=6.8µs    med=14.1µs max=39.52ms p(90)=36.79µs p(95)=65.8µs  
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s     max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=12.44s  min=126.15ms med=7.61s  max=52.69s  p(90)=29.77s  p(95)=37.84s  
     http_reqs......................: 20129  62.422055/s
     iteration_duration.............: avg=12.44s  min=126.9ms  med=7.61s  max=52.69s  p(90)=29.77s  p(95)=37.84s  
     iterations.....................: 20129  62.422055/s
     vus............................: 141    min=0       max=1499
     vus_max........................: 1500   min=1414    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/86a22acd-3832-49d2-553f-2ffa75ddf100/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3c90a4cf-4963-4b21-9e42-e90def48d800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-uws`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  98% — ✓ 22153 / ✗ 317
     ✗ no graphql errors
      ↳  70% — ✓ 15897 / ✗ 6573
     ✗ valid response structure
      ↳  71% — ✓ 15897 / ✗ 6256

     checks.........................: 80.40% ✓ 53947     ✗ 13146 
     data_received..................: 171 MB 518 kB/s
     data_sent......................: 27 MB  81 kB/s
     http_req_blocked...............: avg=167.79µs min=1µs      med=2.2µs   max=255.05ms p(90)=11.5µs  p(95)=360.05µs
     http_req_connecting............: avg=149.33µs min=0s       med=0s      max=240.64ms p(90)=0s      p(95)=298µs   
     http_req_duration..............: avg=11.33s   min=166.15ms med=5.34s   max=1m0s     p(90)=29.98s  p(95)=39.03s  
       { expected_response:true }...: avg=10.63s   min=166.15ms med=5.28s   max=59.94s   p(90)=28.29s  p(95)=36.18s  
     http_req_failed................: 1.41%  ✓ 317       ✗ 22153 
     http_req_receiving.............: avg=145.24µs min=0s       med=38.19µs max=255.38ms p(90)=81.71µs p(95)=104.1µs 
     http_req_sending...............: avg=68.67µs  min=6.2µs    med=12.6µs  max=136.32ms p(90)=34.29µs p(95)=63.5µs  
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=11.33s   min=166.09ms med=5.33s   max=1m0s     p(90)=29.98s  p(95)=39.03s  
     http_reqs......................: 22470  68.065467/s
     iteration_duration.............: avg=11.33s   min=166.68ms med=5.34s   max=1m0s     p(90)=30s     p(95)=39.03s  
     iterations.....................: 22470  68.065467/s
     vus............................: 15     min=15      max=1500
     vus_max........................: 1500   min=1500    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0f684049-b075-4c24-55eb-c7a7a17d0300/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/38e895a0-9ac5-4216-0781-a19020907a00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  85% — ✓ 16264 / ✗ 2829
     ✗ no graphql errors
      ↳  82% — ✓ 15692 / ✗ 3401
     ✗ valid response structure
      ↳  96% — ✓ 15692 / ✗ 572

     checks.........................: 87.50% ✓ 47648     ✗ 6802  
     data_received..................: 81 MB  242 kB/s
     data_sent......................: 23 MB  69 kB/s
     http_req_blocked...............: avg=234.2µs  min=1.4µs    med=3.2µs   max=33.08ms p(90)=423.79µs p(95)=865.03µs
     http_req_connecting............: avg=209.72µs min=0s       med=0s      max=32.91ms p(90)=339.99µs p(95)=724.88µs
     http_req_duration..............: avg=13.16s   min=139.37ms med=4.14s   max=1m0s    p(90)=59.99s   p(95)=1m0s    
       { expected_response:true }...: avg=5.01s    min=139.37ms med=4.02s   max=59.84s  p(90)=5.23s    p(95)=6.07s   
     http_req_failed................: 14.81% ✓ 2829      ✗ 16264 
     http_req_receiving.............: avg=65.81µs  min=0s       med=61.7µs  max=18.78ms p(90)=96.8µs   p(95)=109.14µs
     http_req_sending...............: avg=59.69µs  min=8.2µs    med=18.89µs max=38.48ms p(90)=66.4µs   p(95)=90.74µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=13.16s   min=139.25ms med=4.14s   max=1m0s    p(90)=59.99s   p(95)=1m0s    
     http_reqs......................: 19093  57.091961/s
     iteration_duration.............: avg=13.16s   min=140.3ms  med=4.14s   max=1m0s    p(90)=1m0s     p(95)=1m0s    
     iterations.....................: 19093  57.091961/s
     vus............................: 25     min=0       max=1500
     vus_max........................: 1500   min=1291    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a5aa6eac-8611-467a-67d2-8d3886159400/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2b87b64b-fb61-4a82-7fed-1dd134346e00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  86% — ✓ 17665 / ✗ 2799
     ✗ no graphql errors
      ↳  84% — ✓ 17299 / ✗ 3165
     ✗ valid response structure
      ↳  97% — ✓ 17299 / ✗ 366

     checks.........................: 89.19% ✓ 52263     ✗ 6330  
     data_received..................: 91 MB  271 kB/s
     data_sent......................: 25 MB  73 kB/s
     http_req_blocked...............: avg=288.52µs min=1.4µs   med=3.1µs  max=35.12ms p(90)=381.5µs  p(95)=856.44µs
     http_req_connecting............: avg=264.73µs min=0s      med=0s     max=35.03ms p(90)=306.07µs p(95)=665.65µs
     http_req_duration..............: avg=12.36s   min=89.56ms med=3.94s  max=1m0s    p(90)=59.99s   p(95)=1m0s    
       { expected_response:true }...: avg=4.82s    min=89.56ms med=3.84s  max=59.9s   p(90)=4.61s    p(95)=5.55s   
     http_req_failed................: 13.67% ✓ 2799      ✗ 17665 
     http_req_receiving.............: avg=64.78µs  min=0s      med=63.8µs max=18.55ms p(90)=94.6µs   p(95)=103.2µs 
     http_req_sending...............: avg=50.92µs  min=8.1µs   med=18.7µs max=25.68ms p(90)=59.8µs   p(95)=79.58µs 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=12.36s   min=89.46ms med=3.94s  max=1m0s    p(90)=59.99s   p(95)=1m0s    
     http_reqs......................: 20464  61.195624/s
     iteration_duration.............: avg=12.36s   min=91.09ms med=3.94s  max=1m0s    p(90)=1m0s     p(95)=1m0s    
     iterations.....................: 20464  61.195624/s
     vus............................: 13     min=0       max=1500
     vus_max........................: 1500   min=1500    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/33e4f12a-ceb4-47c4-ea2e-21c760713900/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1ccc2c7a-e5d2-4235-56d0-38ab1a071400/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  91% — ✓ 26694 / ✗ 2628
     ✗ no graphql errors
      ↳  90% — ✓ 26635 / ✗ 2687
     ✗ valid response structure
      ↳  99% — ✓ 26635 / ✗ 59

     checks.........................: 93.70% ✓ 79964  ✗ 5374  
     data_received..................: 135 MB 405 kB/s
     data_sent......................: 35 MB  105 kB/s
     http_req_blocked...............: avg=175.57µs min=900ns   med=2.6µs   max=51.44ms p(90)=226.17µs p(95)=409.49µs
     http_req_connecting............: avg=161.42µs min=0s      med=0s      max=51.32ms p(90)=177.16µs p(95)=334.39µs
     http_req_duration..............: avg=8.58s    min=61.8ms  med=2.98s   max=1m0s    p(90)=33.4s    p(95)=1m0s    
       { expected_response:true }...: avg=3.52s    min=61.8ms  med=2.96s   max=59.81s  p(90)=3.21s    p(95)=3.39s   
     http_req_failed................: 8.96%  ✓ 2628   ✗ 26694 
     http_req_receiving.............: avg=58.28µs  min=0s      med=53µs    max=12.08ms p(90)=83.1µs   p(95)=88.9µs  
     http_req_sending...............: avg=45µs     min=6.9µs   med=16.29µs max=27.19ms p(90)=40.09µs  p(95)=60.4µs  
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=8.58s    min=61.72ms med=2.98s   max=1m0s    p(90)=33.4s    p(95)=59.99s  
     http_reqs......................: 29322  87.936/s
     iteration_duration.............: avg=8.58s    min=62.5ms  med=2.98s   max=1m0s    p(90)=33.4s    p(95)=1m0s    
     iterations.....................: 29322  87.936/s
     vus............................: 21     min=21   max=1500
     vus_max........................: 1500   min=1500 max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/851e8a72-4d8f-4c77-e99f-dd883ef2a600/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1fbee046-5a60-41fa-e3e7-aa0718945700/public" alt="HTTP Overview" />


  </details>