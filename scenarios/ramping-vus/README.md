## Overview for scenario: `ramping-vus`


This scenario runs 4 servics and a GraphQL gatway with Federation spec, and runs a heavy query. We are running a heavy load of concurrent VUs to measure response time and other stats, during stress. It measure things like memory usage, CPU usage, response times. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was trying to reach 1000 concurrent VUs over 60s


### Comparison


| Gateway                        | duration(p95)⬇️ |  RPS  |        Requests        |                       Durations                       |
| :----------------------------- | :-------------: | :---: | :--------------------: | :---------------------------------------------------: |
| wundergraph                    |     1514ms      |  691  | 48417 total, 0 failed  |   avg: 710ms, p95: 1515ms, max: 2579ms, med: 662ms    |
| apollo-router                  |     9331ms      |  116  |  8134 total, 0 failed  |  avg: 4684ms, p95: 9332ms, max: 13449ms, med: 4251ms  |
| mercurius                      |     13385ms     |  63   |  4420 total, 0 failed  | avg: 8440ms, p95: 13385ms, max: 14040ms, med: 8586ms  |
| apollo-server                  |     20616ms     |  80   | 5641 total, 135 failed | avg: 6766ms, p95: 20616ms, max: 27412ms, med: 4438ms  |
| apollo-gateway-with-yoga       |     24445ms     |  57   | 4034 total, 89 failed  | avg: 9721ms, p95: 24445ms, max: 29928ms, med: 6562ms  |
| stitching-federation-with-yoga |     28028ms     |  43   | 3622 total, 945 failed | avg: 12108ms, p95: 28028ms, max: 38138ms, med: 9341ms |
| mesh                           |     28767ms     |  49   | 3856 total, 103 failed | avg: 11279ms, p95: 28767ms, max: 36746ms, med: 8400ms |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 145251    ✗ 0     
     data_received..................: 235 MB  3.4 MB/s
     data_sent......................: 58 MB   821 kB/s
     http_req_blocked...............: avg=1.25ms   min=1.3µs   med=2.6µs    max=1.34s    p(90)=4.2µs    p(95)=9.5µs   
     http_req_connecting............: avg=1.24ms   min=0s      med=0s       max=1.34s    p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=710.33ms min=8.21ms  med=661.67ms max=2.57s    p(90)=1.24s    p(95)=1.51s   
       { expected_response:true }...: avg=710.33ms min=8.21ms  med=661.67ms max=2.57s    p(90)=1.24s    p(95)=1.51s   
     http_req_failed................: 0.00%   ✓ 0         ✗ 48417 
     http_req_receiving.............: avg=1.37ms   min=20.29µs med=52.4µs   max=656.59ms p(90)=286.44µs p(95)=695.03µs
     http_req_sending...............: avg=1.07ms   min=8.5µs   med=15µs     max=580.06ms p(90)=55.59µs  p(95)=151.19µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=707.88ms min=8.1ms   med=659.8ms  max=2.57s    p(90)=1.23s    p(95)=1.51s   
     http_reqs......................: 48417   691.44995/s
     iteration_duration.............: avg=715.36ms min=8.51ms  med=666.25ms max=2.57s    p(90)=1.25s    p(95)=1.53s   
     iterations.....................: 48417   691.44995/s
     vus............................: 9       min=9       max=994 
     vus_max........................: 1000    min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8c7f36d9-739e-46b4-cabf-549c55850900/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9ddc3e21-9211-4af8-e234-a8fac8ac7600/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 8128 / ✗ 6
     ✗ expected_result
      ↳  99% — ✓ 8132 / ✗ 2

     checks.........................: 99.96% ✓ 24394      ✗ 8     
     data_received..................: 41 MB  579 kB/s
     data_sent......................: 9.7 MB 138 kB/s
     http_req_blocked...............: avg=99.58µs min=900ns  med=2.1µs  max=16.23ms p(90)=162.61µs p(95)=350.07µs
     http_req_connecting............: avg=90.11µs min=0s     med=0s     max=16.16ms p(90)=105.17µs p(95)=291.43µs
     http_req_duration..............: avg=4.68s   min=7.48ms med=4.25s  max=13.44s  p(90)=8.67s    p(95)=9.33s   
       { expected_response:true }...: avg=4.68s   min=7.48ms med=4.25s  max=13.44s  p(90)=8.67s    p(95)=9.33s   
     http_req_failed................: 0.00%  ✓ 0          ✗ 8134  
     http_req_receiving.............: avg=49.38µs min=17.7µs med=40.3µs max=5.27ms  p(90)=64µs     p(95)=72.7µs  
     http_req_sending...............: avg=33.06µs min=6.2µs  med=12.6µs max=12.18ms p(90)=42.7µs   p(95)=60.7µs  
     http_req_tls_handshaking.......: avg=0s      min=0s     med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=4.68s   min=7.41ms med=4.25s  max=13.44s  p(90)=8.67s    p(95)=9.33s   
     http_reqs......................: 8134   116.196379/s
     iteration_duration.............: avg=4.68s   min=7.77ms med=4.25s  max=13.44s  p(90)=8.67s    p(95)=9.33s   
     iterations.....................: 8134   116.196379/s
     vus............................: 137    min=56       max=1000
     vus_max........................: 1000   min=1000     max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/47541088-13a7-4cf0-99cd-b6c1a6e8d300/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8e48bf3a-b1b9-4b2f-8a25-0ca6fa6d9000/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 13260     ✗ 0     
     data_received..................: 22 MB   318 kB/s
     data_sent......................: 5.2 MB  75 kB/s
     http_req_blocked...............: avg=190.37µs min=1.6µs   med=3.1µs  max=28.81ms p(90)=476.83µs p(95)=530.43µs
     http_req_connecting............: avg=169.1µs  min=0s      med=0s     max=28.4ms  p(90)=396.02µs p(95)=445.83µs
     http_req_duration..............: avg=8.44s    min=11.56ms med=8.58s  max=14.04s  p(90)=12.87s   p(95)=13.38s  
       { expected_response:true }...: avg=8.44s    min=11.56ms med=8.58s  max=14.04s  p(90)=12.87s   p(95)=13.38s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 4420  
     http_req_receiving.............: avg=83.58µs  min=28.1µs  med=72.2µs max=6.54ms  p(90)=103.82µs p(95)=119.62µs
     http_req_sending...............: avg=42.22µs  min=9.79µs  med=19.1µs max=4.83ms  p(90)=80.8µs   p(95)=96.22µs 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=8.44s    min=11.48ms med=8.58s  max=14.03s  p(90)=12.87s   p(95)=13.38s  
     http_reqs......................: 4420    63.133879/s
     iteration_duration.............: avg=8.44s    min=11.92ms med=8.58s  max=14.04s  p(90)=12.87s   p(95)=13.38s  
     iterations.....................: 4420    63.133879/s
     vus............................: 8       min=8       max=1000
     vus_max........................: 1000    min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/222a2e9d-bb6d-4967-bd5d-a55c7d6a0d00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/413a1536-5375-4920-e27b-97a4b7b43600/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  97% — ✓ 5506 / ✗ 135
     ✗ no_errors
      ↳  65% — ✓ 3710 / ✗ 1931
     ✗ expected_result
      ↳  92% — ✓ 5088 / ✗ 418

     checks.........................: 85.20% ✓ 14304     ✗ 2484  
     data_received..................: 27 MB  388 kB/s
     data_sent......................: 6.7 MB 96 kB/s
     http_req_blocked...............: avg=389.74µs min=1.1µs   med=2.1µs  max=61.7ms  p(90)=382.5µs  p(95)=432.1µs
     http_req_connecting............: avg=364.31µs min=0s      med=0s     max=61.66ms p(90)=317.89µs p(95)=369µs  
     http_req_duration..............: avg=6.76s    min=10.02ms med=4.43s  max=27.41s  p(90)=17.74s   p(95)=20.61s 
       { expected_response:true }...: avg=6.83s    min=10.02ms med=4.46s  max=27.41s  p(90)=17.98s   p(95)=20.62s 
     http_req_failed................: 2.39%  ✓ 135       ✗ 5506  
     http_req_receiving.............: avg=338.17µs min=16.2µs  med=43.1µs max=45.95ms p(90)=77.7µs   p(95)=91.7µs 
     http_req_sending...............: avg=99.01µs  min=6.3µs   med=12.8µs max=39.41ms p(90)=67.2µs   p(95)=85µs   
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s      p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=6.76s    min=9.93ms  med=4.43s  max=27.41s  p(90)=17.73s   p(95)=20.61s 
     http_reqs......................: 5641   80.566647/s
     iteration_duration.............: avg=6.76s    min=10.33ms med=4.44s  max=27.41s  p(90)=17.77s   p(95)=20.61s 
     iterations.....................: 5641   80.566647/s
     vus............................: 7      min=7       max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/fe054fcc-cabb-406e-a635-eb2a55753900/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ef0d67ee-ccde-4c6b-304f-034e0c95b800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  97% — ✓ 3945 / ✗ 89
     ✗ no_errors
      ↳  63% — ✓ 2562 / ✗ 1472
     ✗ expected_result
      ↳  90% — ✓ 3584 / ✗ 361

     checks.........................: 84.00% ✓ 10091     ✗ 1922  
     data_received..................: 17 MB  246 kB/s
     data_sent......................: 4.8 MB 68 kB/s
     http_req_blocked...............: avg=418.43µs min=1.4µs    med=2.9µs  max=61.16ms p(90)=529.11µs p(95)=609.57µs
     http_req_connecting............: avg=380.6µs  min=0s       med=0s     max=61.13ms p(90)=442.88µs p(95)=516.65µs
     http_req_duration..............: avg=9.72s    min=181.94ms med=6.56s  max=29.92s  p(90)=22.38s   p(95)=24.44s  
       { expected_response:true }...: avg=9.87s    min=181.94ms med=6.75s  max=29.92s  p(90)=22.72s   p(95)=24.57s  
     http_req_failed................: 2.20%  ✓ 89        ✗ 3945  
     http_req_receiving.............: avg=299.02µs min=20µs     med=63.6µs max=46.98ms p(90)=105.91µs p(95)=133.08µs
     http_req_sending...............: avg=98.28µs  min=8.5µs    med=19.9µs max=23.6ms  p(90)=87.57µs  p(95)=115.28µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=9.72s    min=181.88ms med=6.56s  max=29.92s  p(90)=22.38s   p(95)=24.44s  
     http_reqs......................: 4034   57.493721/s
     iteration_duration.............: avg=9.72s    min=182.25ms med=6.56s  max=29.92s  p(90)=22.38s   p(95)=24.44s  
     iterations.....................: 4034   57.493721/s
     vus............................: 279    min=54      max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3c272e28-4125-45a3-52a0-89a4e82bfb00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5b15f686-67e4-4afa-e589-6f1013ab8900/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  73% — ✓ 2677 / ✗ 945
     ✗ no_errors
      ↳  67% — ✓ 2461 / ✗ 1161
     ✗ expected_result
      ↳  73% — ✓ 2577 / ✗ 932

     checks.........................: 71.74% ✓ 7715      ✗ 3038  
     data_received..................: 14 MB  163 kB/s
     data_sent......................: 4.3 MB 52 kB/s
     http_req_blocked...............: avg=606.5µs  min=1.2µs    med=2.5µs  max=48.28ms p(90)=425.88µs p(95)=598.33µs
     http_req_connecting............: avg=573.32µs min=0s       med=0s     max=48.24ms p(90)=356.59µs p(95)=460.51µs
     http_req_duration..............: avg=12.1s    min=734.44ms med=9.34s  max=38.13s  p(90)=24.47s   p(95)=28.02s  
       { expected_response:true }...: avg=9.41s    min=2.13s    med=8.49s  max=34.72s  p(90)=15.09s   p(95)=20.07s  
     http_req_failed................: 26.09% ✓ 945       ✗ 2677  
     http_req_receiving.............: avg=392.3µs  min=18µs     med=48.8µs max=53.84ms p(90)=86.9µs   p(95)=106.97µs
     http_req_sending...............: avg=155.04µs min=7.2µs    med=16.5µs max=62.89ms p(90)=79.79µs  p(95)=121.22µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=12.1s    min=725.7ms  med=9.34s  max=38.13s  p(90)=24.47s   p(95)=28.02s  
     http_reqs......................: 3622   43.442544/s
     iteration_duration.............: avg=12.1s    min=735.14ms med=9.34s  max=38.13s  p(90)=24.47s   p(95)=28.02s  
     iterations.....................: 3622   43.442544/s
     vus............................: 76     min=57      max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e85877bb-7345-40c9-1a0a-237978deaa00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a9791401-abd7-4fd6-e397-1f9f0a4fb100/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  97% — ✓ 3753 / ✗ 103
     ✗ no_errors
      ↳  69% — ✓ 2661 / ✗ 1195
     ✗ expected_result
      ↳  97% — ✓ 3665 / ✗ 88

     checks.........................: 87.91% ✓ 10079     ✗ 1386  
     data_received..................: 29 MB  370 kB/s
     data_sent......................: 4.6 MB 59 kB/s
     http_req_blocked...............: avg=824.92µs min=1.3µs med=2.4µs   max=79.82ms p(90)=476.4µs  p(95)=581.67µs
     http_req_connecting............: avg=787.82µs min=0s    med=0s      max=78.45ms p(90)=404.45µs p(95)=496.37µs
     http_req_duration..............: avg=11.27s   min=1.03s med=8.4s    max=36.74s  p(90)=23.66s   p(95)=28.76s  
       { expected_response:true }...: avg=11.48s   min=1.31s med=8.49s   max=36.74s  p(90)=23.73s   p(95)=28.86s  
     http_req_failed................: 2.67%  ✓ 103       ✗ 3753  
     http_req_receiving.............: avg=792.42µs min=22µs  med=57.35µs max=87.09ms p(90)=123µs    p(95)=175.75µs
     http_req_sending...............: avg=64.76µs  min=8.2µs med=16.7µs  max=6.2ms   p(90)=77.75µs  p(95)=97.8µs  
     http_req_tls_handshaking.......: avg=0s       min=0s    med=0s      max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=11.27s   min=1.03s med=8.39s   max=36.74s  p(90)=23.66s   p(95)=28.76s  
     http_reqs......................: 3856   49.257013/s
     iteration_duration.............: avg=11.28s   min=1.04s med=8.4s    max=36.74s  p(90)=23.66s   p(95)=28.76s  
     iterations.....................: 3856   49.257013/s
     vus............................: 58     min=57      max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e0dfa0a7-823b-4ccd-1c84-c6b3b7d6f700/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/66819578-d74a-41f8-47ca-8467a7965400/public" alt="HTTP Overview" />


  </details>