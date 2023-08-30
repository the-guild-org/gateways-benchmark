## Overview for: `scenarios/fed-v1-constant-vus-over-time`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. It's being executed with a constant amount of VUs over a fixed amount of time. It measure things like memory usage, CPU usage, average RPS. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was running 400 VUs over 200s


### Comparison


| Gateway                             | RPS ⬇️ |        Requests         |         Duration          |
| :---------------------------------- | :----: | :---------------------: | :-----------------------: |
| mesh-bun                            |  806   | 161589 total, 0 failed  |  avg: 495ms, p95: 796ms   |
| wundergraph                         |  723   | 145067 total, 0 failed  |  avg: 548ms, p95: 786ms   |
| apollo-router                       |  123   |  25135 total, 0 failed  | avg: 3208ms, p95: 4623ms  |
| stitching-federation-with-yoga-bun  |  111   |  22580 total, 0 failed  | avg: 3574ms, p95: 4853ms  |
| mesh                                |   98   |  19931 total, 0 failed  | avg: 4033ms, p95: 5031ms  |
| stitching-federation-with-yoga-deno |   92   |  18799 total, 0 failed  | avg: 4284ms, p95: 4894ms  |
| stitching-federation-with-yoga      |   76   | 15605 total, 78 failed  | avg: 5166ms, p95: 8102ms  |
| mesh-supergraph                     |   75   |  15273 total, 0 failed  | avg: 5268ms, p95: 7649ms  |
| stitching-federation-with-yoga-uws  |   68   |  13960 total, 0 failed  | avg: 5781ms, p95: 9679ms  |
| apollo-gateway-with-yoga-bun        |   64   |  13224 total, 0 failed  | avg: 6138ms, p95: 9697ms  |
| apollo-gateway-with-yoga-uws        |   61   |  12456 total, 0 failed  | avg: 6510ms, p95: 13147ms |
| apollo-server                       |   57   | 11783 total, 279 failed | avg: 6874ms, p95: 8722ms  |
| apollo-gateway-with-yoga            |   51   |  10495 total, 9 failed  | avg: 7770ms, p95: 14448ms |
| mercurius                           |   49   |  10075 total, 0 failed  | avg: 7983ms, p95: 9590ms  |
| apollo-server-node16                |   43   |  8757 total, 0 failed   | avg: 9206ms, p95: 22991ms |



<details>
  <summary>Summary for: `mesh-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  0% — ✓ 0 / ✗ 161589
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 161589

     checks.........................: 33.33% ✓ 161589    ✗ 323178
     data_received..................: 154 MB 767 kB/s
     data_sent......................: 192 MB 957 kB/s
     http_req_blocked...............: avg=88.01µs  min=799ns   med=1.4µs    max=62.75ms  p(90)=2.1µs    p(95)=2.6µs   
     http_req_connecting............: avg=82.98µs  min=0s      med=0s       max=62.6ms   p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=495.19ms min=95.09ms med=454.96ms max=1.25s    p(90)=736.73ms p(95)=795.58ms
       { expected_response:true }...: avg=495.19ms min=95.09ms med=454.96ms max=1.25s    p(90)=736.73ms p(95)=795.58ms
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 161589
     http_req_receiving.............: avg=230.85µs min=10.2µs  med=17.5µs   max=257.76ms p(90)=50.39µs  p(95)=183.39µs
     http_req_sending...............: avg=111.45µs min=5.3µs   med=8.69µs   max=195.15ms p(90)=39µs     p(95)=128.8µs 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=494.85ms min=93.51ms med=454.63ms max=1.23s    p(90)=736.11ms p(95)=795.11ms
     http_reqs......................: 161589 806.55741/s
     iteration_duration.............: avg=495.67ms min=134.9ms med=455.37ms max=1.25s    p(90)=737.05ms p(95)=796.46ms
     iterations.....................: 161589 806.55741/s
     vus............................: 400    min=400     max=400 
     vus_max........................: 400    min=400     max=400 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2d917c78-2c1e-4a86-dc4e-230621ed9500/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/12baf8da-a0f1-4646-90c0-e782753e2400/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 435201     ✗ 0     
     data_received..................: 722 MB  3.6 MB/s
     data_sent......................: 172 MB  859 kB/s
     http_req_blocked...............: avg=155.67µs min=1.1µs    med=2.29µs   max=378.83ms p(90)=3.7µs    p(95)=4.5µs   
     http_req_connecting............: avg=145.66µs min=0s       med=0s       max=123.09ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=547.96ms min=150.45ms med=530.84ms max=1.52s    p(90)=721.33ms p(95)=786.05ms
       { expected_response:true }...: avg=547.96ms min=150.45ms med=530.84ms max=1.52s    p(90)=721.33ms p(95)=786.05ms
   ✓ http_req_failed................: 0.00%   ✓ 0          ✗ 145067
     http_req_receiving.............: avg=5.6ms    min=14.6µs   med=36.29µs  max=447.53ms p(90)=271.8µs  p(95)=19.49ms 
     http_req_sending...............: avg=774.93µs min=6.3µs    med=12.1µs   max=403.77ms p(90)=25µs     p(95)=111.4µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=541.58ms min=150.42ms med=527.57ms max=1.43s    p(90)=704.96ms p(95)=763.98ms
     http_reqs......................: 145067  723.610234/s
     iteration_duration.............: avg=552.17ms min=151.03ms med=534.43ms max=1.67s    p(90)=726.66ms p(95)=791.77ms
     iterations.....................: 145067  723.610234/s
     vus............................: 400     min=400      max=400 
     vus_max........................: 400     min=400      max=400 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/cca8b2d7-da89-45df-99a7-a889267b1500/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d13a83cb-22d6-4c2a-ad72-db6bbf3cfd00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 25111 / ✗ 24
     ✗ valid response structure
      ↳  99% — ✓ 25111 / ✗ 24

     checks.........................: 99.93% ✓ 75357      ✗ 48   
     data_received..................: 125 MB 618 kB/s
     data_sent......................: 30 MB  147 kB/s
     http_req_blocked...............: avg=488.13µs min=1µs   med=2.1µs  max=50.4ms  p(90)=3µs    p(95)=3.8µs  
     http_req_connecting............: avg=478.2µs  min=0s    med=0s     max=50.26ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=3.2s     min=1.41s med=3.08s  max=7.64s   p(90)=4.05s  p(95)=4.62s  
       { expected_response:true }...: avg=3.2s     min=1.41s med=3.08s  max=7.64s   p(90)=4.05s  p(95)=4.62s  
   ✓ http_req_failed................: 0.00%  ✓ 0          ✗ 25135
     http_req_receiving.............: avg=82.9µs   min=16µs  med=38.9µs max=86.81ms p(90)=62.4µs p(95)=72.59µs
     http_req_sending...............: avg=91.07µs  min=5.7µs med=12.6µs max=49.79ms p(90)=26.5µs p(95)=32.5µs 
     http_req_tls_handshaking.......: avg=0s       min=0s    med=0s     max=0s      p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=3.2s     min=1.41s med=3.08s  max=7.64s   p(90)=4.05s  p(95)=4.62s  
     http_reqs......................: 25135  123.995104/s
     iteration_duration.............: avg=3.2s     min=1.41s med=3.08s  max=7.66s   p(90)=4.05s  p(95)=4.62s  
     iterations.....................: 25135  123.995104/s
     vus............................: 194    min=194      max=400
     vus_max........................: 400    min=400      max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/62b5ee69-a1dd-40b0-fce0-a12b172a0500/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/22aa3b61-dfa9-4c80-2e95-6749f79fbd00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 67740     ✗ 0    
     data_received..................: 113 MB  556 kB/s
     data_sent......................: 27 MB   132 kB/s
     http_req_blocked...............: avg=711.72µs min=1.4µs  med=2.5µs  max=70.15ms  p(90)=4.4µs   p(95)=10.1µs  
     http_req_connecting............: avg=696.27µs min=0s     med=0s     max=70ms     p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=3.57s    min=2.63s  med=3.37s  max=13.64s   p(90)=4.03s   p(95)=4.85s   
       { expected_response:true }...: avg=3.57s    min=2.63s  med=3.37s  max=13.64s   p(90)=4.03s   p(95)=4.85s   
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 22580
     http_req_receiving.............: avg=194.15µs min=20.4µs med=46.9µs max=149.93ms p(90)=79.39µs p(95)=215.06µs
     http_req_sending...............: avg=349.88µs min=7.4µs  med=14.2µs max=167.81ms p(90)=54.9µs  p(95)=205.1µs 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=3.57s    min=2.63s  med=3.37s  max=13.64s   p(90)=4.03s   p(95)=4.85s   
     http_reqs......................: 22580   111.51772/s
     iteration_duration.............: avg=3.57s    min=2.63s  med=3.37s  max=13.68s   p(90)=4.03s   p(95)=4.91s   
     iterations.....................: 22580   111.51772/s
     vus............................: 286     min=286     max=400
     vus_max........................: 400     min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f1cadf05-1d83-4023-7d01-214e5bdf0200/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/286a56a5-66fd-4a2b-96f6-c18bd543f500/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 19905 / ✗ 26
     ✗ valid response structure
      ↳  99% — ✓ 19905 / ✗ 26

     checks.........................: 99.91% ✓ 59741     ✗ 52   
     data_received..................: 100 MB 495 kB/s
     data_sent......................: 24 MB  117 kB/s
     http_req_blocked...............: avg=3.79ms   min=1.2µs  med=2.4µs  max=325.26ms p(90)=3.7µs  p(95)=4.8µs 
     http_req_connecting............: avg=3.74ms   min=0s     med=0s     max=323.75ms p(90)=0s     p(95)=0s    
     http_req_duration..............: avg=4.03s    min=2.16s  med=3.96s  max=8.13s    p(90)=4.58s  p(95)=5.03s 
       { expected_response:true }...: avg=4.03s    min=2.16s  med=3.96s  max=8.13s    p(90)=4.58s  p(95)=5.03s 
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 19931
     http_req_receiving.............: avg=151.45µs min=18.2µs med=50.6µs max=64.33ms  p(90)=75µs   p(95)=85.7µs
     http_req_sending...............: avg=772.92µs min=8.3µs  med=12.9µs max=217.6ms  p(90)=26.6µs p(95)=33.6µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s     p(95)=0s    
     http_req_waiting...............: avg=4.03s    min=2.16s  med=3.96s  max=8.12s    p(90)=4.58s  p(95)=5.03s 
     http_reqs......................: 19931  98.598848/s
     iteration_duration.............: avg=4.03s    min=2.16s  med=3.96s  max=8.38s    p(90)=4.58s  p(95)=5.03s 
     iterations.....................: 19931  98.598848/s
     vus............................: 180    min=180     max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f79c9f9f-7570-448b-0fb7-af4a34fe4e00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2c63ba26-544a-4134-9c22-8abbf18b2e00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-deno`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 18762 / ✗ 37
     ✗ valid response structure
      ↳  99% — ✓ 18762 / ✗ 37

     checks.........................: 99.86% ✓ 56323     ✗ 74   
     data_received..................: 94 MB  467 kB/s
     data_sent......................: 22 MB  110 kB/s
     http_req_blocked...............: avg=660.2µs  min=1.1µs med=2.2µs  max=57.37ms p(90)=3.5µs  p(95)=5.4µs  
     http_req_connecting............: avg=649.1µs  min=0s    med=0s     max=57.34ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=4.28s    min=2.2s  med=4.24s  max=7.48s   p(90)=4.53s  p(95)=4.89s  
       { expected_response:true }...: avg=4.28s    min=2.2s  med=4.24s  max=7.48s   p(90)=4.53s  p(95)=4.89s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 18799
     http_req_receiving.............: avg=109.37µs min=17µs  med=32.4µs max=40.71ms p(90)=77µs   p(95)=94.61µs
     http_req_sending...............: avg=97.66µs  min=6.4µs med=12.1µs max=56.83ms p(90)=28.2µs p(95)=102.1µs
     http_req_tls_handshaking.......: avg=0s       min=0s    med=0s     max=0s      p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=4.28s    min=2.2s  med=4.24s  max=7.47s   p(90)=4.53s  p(95)=4.89s  
     http_reqs......................: 18799  92.966981/s
     iteration_duration.............: avg=4.28s    min=2.2s  med=4.24s  max=7.51s   p(90)=4.53s  p(95)=4.89s  
     iterations.....................: 18799  92.966981/s
     vus............................: 154    min=154     max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/65b0ea28-de69-4cba-4417-114d1537c400/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/06dd769e-7b7f-471f-1b0d-19b092d76600/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  99% — ✓ 15527 / ✗ 78
     ✗ no graphql errors
      ↳  95% — ✓ 14932 / ✗ 673
     ✗ valid response structure
      ↳  96% — ✓ 14932 / ✗ 595

     checks.........................: 97.12% ✓ 45391     ✗ 1346 
     data_received..................: 88 MB  432 kB/s
     data_sent......................: 19 MB  91 kB/s
     http_req_blocked...............: avg=2.52ms   min=1.2µs med=2.29µs max=237.8ms  p(90)=3.9µs  p(95)=16µs  
     http_req_connecting............: avg=2.48ms   min=0s    med=0s     max=237.76ms p(90)=0s     p(95)=0s    
     http_req_duration..............: avg=5.16s    min=2.43s med=4.08s  max=1m0s     p(90)=6.94s  p(95)=8.1s  
       { expected_response:true }...: avg=4.89s    min=2.43s med=4.08s  max=59.7s    p(90)=6.86s  p(95)=7.98s 
   ✓ http_req_failed................: 0.49%  ✓ 78        ✗ 15527
     http_req_receiving.............: avg=69.52µs  min=0s    med=52.8µs max=63.05ms  p(90)=75.4µs p(95)=89.6µs
     http_req_sending...............: avg=918.09µs min=8.2µs med=13.3µs max=121.38ms p(90)=28.6µs p(95)=70.8µs
     http_req_tls_handshaking.......: avg=0s       min=0s    med=0s     max=0s       p(90)=0s     p(95)=0s    
     http_req_waiting...............: avg=5.16s    min=2.43s med=4.08s  max=1m0s     p(90)=6.94s  p(95)=8.1s  
     http_reqs......................: 15605  76.871836/s
     iteration_duration.............: avg=5.16s    min=2.43s med=4.08s  max=1m0s     p(90)=6.94s  p(95)=8.1s  
     iterations.....................: 15605  76.871836/s
     vus............................: 61     min=61      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/975b8ff9-3dd6-44e6-2b9f-d90f3cbc9200/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6ff8831e-55d4-4456-2e4c-3c4135523a00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 15134 / ✗ 139
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 15273

     checks.........................: 66.36% ✓ 30407     ✗ 15412
     data_received..................: 78 MB  385 kB/s
     data_sent......................: 18 MB  90 kB/s
     http_req_blocked...............: avg=2.32ms   min=1.2µs  med=2.5µs  max=285.34ms p(90)=3.9µs   p(95)=18.3µs 
     http_req_connecting............: avg=2.29ms   min=0s     med=0s     max=285.26ms p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=5.26s    min=2.19s  med=5s     max=12.54s   p(90)=6.49s   p(95)=7.64s  
       { expected_response:true }...: avg=5.26s    min=2.19s  med=5s     max=12.54s   p(90)=6.49s   p(95)=7.64s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 15273
     http_req_receiving.............: avg=69.87µs  min=25.4µs med=57µs   max=13.29ms  p(90)=97.18µs p(95)=117.9µs
     http_req_sending...............: avg=844.39µs min=10.2µs med=14.7µs max=91.41ms  p(90)=36.2µs  p(95)=56.5µs 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=5.26s    min=2.19s  med=5s     max=12.53s   p(90)=6.49s   p(95)=7.64s  
     http_reqs......................: 15273  75.453887/s
     iteration_duration.............: avg=5.27s    min=2.19s  med=5s     max=12.58s   p(90)=6.49s   p(95)=7.64s  
     iterations.....................: 15273  75.453887/s
     vus............................: 181    min=181     max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2512f784-875f-47eb-8f14-c59d4fd98e00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/609b7738-a516-4958-c52d-1f51eb0db500/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-uws`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  90% — ✓ 12592 / ✗ 1368
     ✗ valid response structure
      ↳  90% — ✓ 12592 / ✗ 1368

     checks.........................: 93.46% ✓ 39144     ✗ 2736 
     data_received..................: 91 MB  446 kB/s
     data_sent......................: 17 MB  82 kB/s
     http_req_blocked...............: avg=1.83ms   min=1.3µs  med=2.7µs  max=206.73ms p(90)=4.4µs   p(95)=17.9µs  
     http_req_connecting............: avg=1.79ms   min=0s     med=0s     max=206.37ms p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=5.78s    min=1.75s  med=5.03s  max=14.22s   p(90)=8.49s   p(95)=9.67s   
       { expected_response:true }...: avg=5.78s    min=1.75s  med=5.03s  max=14.22s   p(90)=8.49s   p(95)=9.67s   
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 13960
     http_req_receiving.............: avg=81.32µs  min=19.9µs med=57.4µs max=15.12ms  p(90)=94.21µs p(95)=123.61µs
     http_req_sending...............: avg=439.69µs min=8.5µs  med=15.5µs max=70.13ms  p(90)=34.7µs  p(95)=104.8µs 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=5.78s    min=1.75s  med=5.03s  max=14.22s   p(90)=8.49s   p(95)=9.66s   
     http_reqs......................: 13960  68.740745/s
     iteration_duration.............: avg=5.78s    min=1.75s  med=5.03s  max=14.23s   p(90)=8.5s    p(95)=9.71s   
     iterations.....................: 13960  68.740745/s
     vus............................: 104    min=104     max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/129b6969-5bf3-4ea9-a63f-ce4ece465500/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/874fa921-da5e-4357-a082-2fca5a605b00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 13174 / ✗ 50
     ✗ valid response structure
      ↳  99% — ✓ 13174 / ✗ 50

     checks.........................: 99.74% ✓ 39572     ✗ 100  
     data_received..................: 66 MB  322 kB/s
     data_sent......................: 16 MB  77 kB/s
     http_req_blocked...............: avg=4.25ms min=1.4µs    med=2.8µs   max=272.39ms p(90)=4.6µs    p(95)=17.05µs 
     http_req_connecting............: avg=3.74ms min=0s       med=0s      max=251.81ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=6.13s  min=789.46ms med=5.82s   max=15.09s   p(90)=8.8s     p(95)=9.69s   
       { expected_response:true }...: avg=6.13s  min=789.46ms med=5.82s   max=15.09s   p(90)=8.8s     p(95)=9.69s   
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 13224
     http_req_receiving.............: avg=2.18ms min=20.9µs   med=48.8µs  max=345.32ms p(90)=102.47µs p(95)=296.32µs
     http_req_sending...............: avg=1.14ms min=7.3µs    med=15.05µs max=370.21ms p(90)=97.57µs  p(95)=1.07ms  
     http_req_tls_handshaking.......: avg=0s     min=0s       med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=6.13s  min=778.23ms med=5.82s   max=15.09s   p(90)=8.8s     p(95)=9.68s   
     http_reqs......................: 13224  64.693592/s
     iteration_duration.............: avg=6.14s  min=985.17ms med=5.82s   max=15.09s   p(90)=8.9s     p(95)=9.7s    
     iterations.....................: 13224  64.693592/s
     vus............................: 94     min=94      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/91fe694e-1dac-4a3e-627d-834663719600/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5e78497a-885b-4da2-d393-fea82bff1300/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga-uws`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  83% — ✓ 10458 / ✗ 1998
     ✗ valid response structure
      ↳  83% — ✓ 10458 / ✗ 1998

     checks.........................: 89.30% ✓ 33372     ✗ 3996 
     data_received..................: 58 MB  282 kB/s
     data_sent......................: 15 MB  73 kB/s
     http_req_blocked...............: avg=3.69ms   min=1.2µs    med=2.4µs  max=237.04ms p(90)=3.8µs   p(95)=15.12µs 
     http_req_connecting............: avg=3.64ms   min=0s       med=0s     max=236.99ms p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=6.5s     min=648.77ms med=5.83s  max=19.08s   p(90)=11.52s  p(95)=13.14s  
       { expected_response:true }...: avg=6.5s     min=648.77ms med=5.83s  max=19.08s   p(90)=11.52s  p(95)=13.14s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 12456
     http_req_receiving.............: avg=72.7µs   min=18.5µs   med=48.4µs max=46.31ms  p(90)=76.4µs  p(95)=89.7µs  
     http_req_sending...............: avg=987.49µs min=6.9µs    med=13.8µs max=106.15ms p(90)=30.85µs p(95)=121.75µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=6.5s     min=648.69ms med=5.83s  max=19.08s   p(90)=11.51s  p(95)=13.14s  
     http_reqs......................: 12456  61.062996/s
     iteration_duration.............: avg=6.51s    min=649.47ms med=5.83s  max=19.08s   p(90)=11.57s  p(95)=13.14s  
     iterations.....................: 12456  61.062996/s
     vus............................: 62     min=62      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d7575f43-b7ed-4c3c-e899-c05dcdb08900/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/bde9a5d3-b4a0-4410-513b-9dbed6bcbb00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  97% — ✓ 11504 / ✗ 279
     ✗ no graphql errors
      ↳  88% — ✓ 10377 / ✗ 1406
     ✗ valid response structure
      ↳  90% — ✓ 10377 / ✗ 1127

     checks.........................: 91.98% ✓ 32258     ✗ 2812 
     data_received..................: 58 MB  279 kB/s
     data_sent......................: 14 MB  68 kB/s
     http_req_blocked...............: avg=1.67ms   min=1.3µs med=2.5µs  max=80.13ms p(90)=5.2µs  p(95)=998.15µs
     http_req_connecting............: avg=1.64ms   min=0s    med=0s     max=80.08ms p(90)=0s     p(95)=856.7µs 
     http_req_duration..............: avg=6.87s    min=1.31s med=4.91s  max=1m0s    p(90)=7.5s   p(95)=8.72s   
       { expected_response:true }...: avg=5.58s    min=1.31s med=4.88s  max=59.02s  p(90)=7.3s   p(95)=7.79s   
   ✓ http_req_failed................: 2.36%  ✓ 279       ✗ 11504
     http_req_receiving.............: avg=63.92µs  min=0s    med=56.5µs max=7.4ms   p(90)=83.3µs p(95)=93.8µs  
     http_req_sending...............: avg=231.27µs min=8.7µs med=13.8µs max=22.89ms p(90)=31.9µs p(95)=215.13µs
     http_req_tls_handshaking.......: avg=0s       min=0s    med=0s     max=0s      p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=6.87s    min=1.31s med=4.91s  max=1m0s    p(90)=7.5s   p(95)=8.7s    
     http_reqs......................: 11783  57.081011/s
     iteration_duration.............: avg=6.87s    min=1.31s med=4.91s  max=1m0s    p(90)=7.53s  p(95)=8.77s   
     iterations.....................: 11783  57.081011/s
     vus............................: 36     min=36      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/01b0d7db-b3c1-4dc2-9325-f040bb938d00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1aecfea8-3b62-4ecb-f783-f1b927403500/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  99% — ✓ 10486 / ✗ 9
     ✗ no graphql errors
      ↳  75% — ✓ 7932 / ✗ 2563
     ✗ valid response structure
      ↳  75% — ✓ 7932 / ✗ 2554

     checks.........................: 83.71% ✓ 26350     ✗ 5126 
     data_received..................: 48 MB  233 kB/s
     data_sent......................: 13 MB  61 kB/s
     http_req_blocked...............: avg=3.68ms   min=1.3µs    med=2.7µs  max=166.74ms p(90)=4.59µs  p(95)=19.43µs 
     http_req_connecting............: avg=3.63ms   min=0s       med=0s     max=166.69ms p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=7.76s    min=969.03ms med=6.94s  max=59.97s   p(90)=12.88s  p(95)=14.44s  
       { expected_response:true }...: avg=7.72s    min=969.03ms med=6.94s  max=57.23s   p(90)=12.87s  p(95)=14.41s  
   ✓ http_req_failed................: 0.08%  ✓ 9         ✗ 10486
     http_req_receiving.............: avg=80.78µs  min=0s       med=56.8µs max=56.03ms  p(90)=85.8µs  p(95)=101.2µs 
     http_req_sending...............: avg=874.21µs min=8.8µs    med=15.5µs max=93.03ms  p(90)=35.06µs p(95)=499.42µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=7.76s    min=968.98ms med=6.94s  max=59.95s   p(90)=12.88s  p(95)=14.44s  
     http_reqs......................: 10495  51.203085/s
     iteration_duration.............: avg=7.77s    min=969.25ms med=6.94s  max=1m0s     p(90)=12.88s  p(95)=14.44s  
     iterations.....................: 10495  51.203085/s
     vus............................: 132    min=132     max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/af50204f-36a7-4fbf-a132-511b0dcebf00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/05428eb3-f75c-4172-f2e7-1d8ee1002800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 30225     ✗ 0    
     data_received..................: 51 MB   250 kB/s
     data_sent......................: 12 MB   59 kB/s
     http_req_blocked...............: avg=3.67ms   min=1.5µs  med=3.9µs  max=246.65ms p(90)=6.6µs   p(95)=33.26µs 
     http_req_connecting............: avg=3.62ms   min=0s     med=0s     max=246.42ms p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=7.98s    min=2.56s  med=7.84s  max=16.49s   p(90)=8.51s   p(95)=9.58s   
       { expected_response:true }...: avg=7.98s    min=2.56s  med=7.84s  max=16.49s   p(90)=8.51s   p(95)=9.58s   
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 10075
     http_req_receiving.............: avg=103.08µs min=29.2µs med=91.6µs max=10.44ms  p(90)=140.1µs p(95)=162.9µs 
     http_req_sending...............: avg=786.15µs min=10.8µs med=23.9µs max=116.9ms  p(90)=55.46µs p(95)=165.38µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=7.98s    min=2.56s  med=7.84s  max=16.49s   p(90)=8.51s   p(95)=9.58s   
     http_reqs......................: 10075   49.742812/s
     iteration_duration.............: avg=7.98s    min=2.56s  med=7.84s  max=16.54s   p(90)=8.51s   p(95)=9.59s   
     iterations.....................: 10075   49.742812/s
     vus............................: 123     min=123     max=400
     vus_max........................: 400     min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e0fdbf9b-0bf8-4acc-4137-5de0ed465500/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/950274d0-7496-4a59-26a0-f74a6cc5e900/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server-node16`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  66% — ✓ 5867 / ✗ 2890
     ✗ valid response structure
      ↳  66% — ✓ 5867 / ✗ 2890

     checks.........................: 77.99% ✓ 20491     ✗ 5780 
     data_received..................: 40 MB  197 kB/s
     data_sent......................: 10 MB  51 kB/s
     http_req_blocked...............: avg=4.04ms  min=1.7µs    med=2.6µs  max=177.19ms p(90)=5.2µs   p(95)=50.74µs 
     http_req_connecting............: avg=3.96ms  min=0s       med=0s     max=177.14ms p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=9.2s    min=711.17ms med=7.93s  max=32.41s   p(90)=17.65s  p(95)=22.99s  
       { expected_response:true }...: avg=9.2s    min=711.17ms med=7.93s  max=32.41s   p(90)=17.65s  p(95)=22.99s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 8757 
     http_req_receiving.............: avg=77.06µs min=28.1µs   med=61.2µs max=9.52ms   p(90)=102.9µs p(95)=126.1µs 
     http_req_sending...............: avg=1.1ms   min=10.4µs   med=16µs   max=75.54ms  p(90)=48.14µs p(95)=662.78µs
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s     max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=9.2s    min=711.11ms med=7.93s  max=32.41s   p(90)=17.64s  p(95)=22.99s  
     http_reqs......................: 8757   43.048461/s
     iteration_duration.............: avg=9.21s   min=712.85ms med=7.93s  max=32.41s   p(90)=17.68s  p(95)=22.99s  
     iterations.....................: 8757   43.048461/s
     vus............................: 104    min=104     max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d2ec5435-0897-4ad9-1df1-afc8f8afc100/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/75e044d6-ee37-41c3-47d4-2a806347c800/public" alt="HTTP Overview" />


  </details>