## Overview for scenario: `ramping-vus`


This scenario runs 4 servics and a GraphQL gateway with Federation spec, and runs a heavy query. We are running a heavy load of concurrent VUs to measure response time and other stats, during stress. It measure things like memory usage, CPU usage, response times. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was trying to reach 1000 concurrent VUs over 60s


### Comparison


| Gateway                             | duration(p95)⬇️ |  RPS  |       Requests        |                       Durations                        |
| :---------------------------------- | :-------------: | :---: | :-------------------: | :----------------------------------------------------: |
| wundergraph                         |     1223ms      |  800  | 56017 total, 0 failed |    avg: 616ms, p95: 1224ms, max: 2032ms, med: 591ms    |
| apollo-router                       |     11029ms     |  98   | 7023 total, 0 failed  |  avg: 5704ms, p95: 11030ms, max: 16890ms, med: 4903ms  |
| mercurius                           |     11506ms     |  79   | 5531 total, 0 failed  |  avg: 6652ms, p95: 11507ms, max: 11757ms, med: 6963ms  |
| mesh                                |     15852ms     |  57   | 4217 total, 0 failed  |  avg: 9756ms, p95: 15852ms, max: 21576ms, med: 9846ms  |
| stitching-federation-with-yoga-deno |     17414ms     |  50   | 3630 total, 0 failed  | avg: 11271ms, p95: 17414ms, max: 19272ms, med: 12086ms |
| apollo-gateway-with-yoga            |     21981ms     |  68   | 4772 total, 0 failed  |  avg: 7738ms, p95: 21981ms, max: 35327ms, med: 4621ms  |
| stitching-federation-with-yoga-bun  |     23378ms     |  58   | 4446 total, 0 failed  |  avg: 9762ms, p95: 23378ms, max: 28522ms, med: 8768ms  |
| stitching-federation-with-yoga      |     34368ms     |  33   | 3044 total, 22 failed | avg: 15326ms, p95: 34369ms, max: 43951ms, med: 11038ms |
| apollo-server                       |     53546ms     |  42   | 3884 total, 21 failed | avg: 11998ms, p95: 53547ms, max: 60002ms, med: 2849ms  |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 168051     ✗ 0     
     data_received..................: 279 MB  4.0 MB/s
     data_sent......................: 67 MB   950 kB/s
     http_req_blocked...............: avg=281.48µs min=900ns  med=1.9µs    max=453.65ms p(90)=3.2µs   p(95)=4.5µs   
     http_req_connecting............: avg=262.44µs min=0s     med=0s       max=453.56ms p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=615.95ms min=6.61ms med=591.36ms max=2.03s    p(90)=1.06s   p(95)=1.22s   
       { expected_response:true }...: avg=615.95ms min=6.61ms med=591.36ms max=2.03s    p(90)=1.06s   p(95)=1.22s   
     http_req_failed................: 0.00%   ✓ 0          ✗ 56017 
     http_req_receiving.............: avg=1.02ms   min=16.5µs med=39.2µs   max=515.74ms p(90)=172.4µs p(95)=428.82µs
     http_req_sending...............: avg=290.21µs min=6.7µs  med=11.4µs   max=219.88ms p(90)=23.6µs  p(95)=78.12µs 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s       max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=614.64ms min=6.58ms med=589.66ms max=2.03s    p(90)=1.06s   p(95)=1.22s   
     http_reqs......................: 56017   800.195139/s
     iteration_duration.............: avg=616.86ms min=6.85ms med=592.16ms max=2.03s    p(90)=1.07s   p(95)=1.22s   
     iterations.....................: 56017   800.195139/s
     vus............................: 7       min=7        max=991 
     vus_max........................: 1000    min=1000     max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9f5c04ea-cdef-4d53-4505-c75b37d49600/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0da49298-2989-4806-fd41-39bea5c69300/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 7012 / ✗ 11
     ✗ expected_result
      ↳  99% — ✓ 7020 / ✗ 3

     checks.........................: 99.93% ✓ 21055     ✗ 14    
     data_received..................: 35 MB  489 kB/s
     data_sent......................: 8.3 MB 117 kB/s
     http_req_blocked...............: avg=138.57µs min=1.2µs    med=2.4µs  max=42.9ms  p(90)=217.74µs p(95)=462.9µs 
     http_req_connecting............: avg=121.91µs min=0s       med=0s     max=42.5ms  p(90)=138.66µs p(95)=388.78µs
     http_req_duration..............: avg=5.7s     min=449.05ms med=4.9s   max=16.89s  p(90)=10.46s   p(95)=11.02s  
       { expected_response:true }...: avg=5.7s     min=449.05ms med=4.9s   max=16.89s  p(90)=10.46s   p(95)=11.02s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 7023  
     http_req_receiving.............: avg=65.3µs   min=20.3µs   med=49.7µs max=5.53ms  p(90)=82.3µs   p(95)=94.49µs 
     http_req_sending...............: avg=49.54µs  min=7.2µs    med=14.3µs max=28.28ms p(90)=62.2µs   p(95)=81.09µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=5.7s     min=448.96ms med=4.9s   max=16.89s  p(90)=10.46s   p(95)=11.02s  
     http_reqs......................: 7023   98.144358/s
     iteration_duration.............: avg=5.7s     min=449.51ms med=4.9s   max=16.89s  p(90)=10.46s   p(95)=11.03s  
     iterations.....................: 7023   98.144358/s
     vus............................: 177    min=54      max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f4b5ea6d-3e6b-4ba3-9dd1-6fcbd6efb700/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8570ea00-5d88-4676-e1a3-720db6596300/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 16593     ✗ 0     
     data_received..................: 28 MB   397 kB/s
     data_sent......................: 6.6 MB  94 kB/s
     http_req_blocked...............: avg=93.26µs min=1.1µs  med=2.6µs max=17.37ms p(90)=396.4µs p(95)=442.6µs
     http_req_connecting............: avg=78.84µs min=0s     med=0s    max=17.31ms p(90)=330.7µs p(95)=370.9µs
     http_req_duration..............: avg=6.65s   min=7.83ms med=6.96s max=11.75s  p(90)=11.17s  p(95)=11.5s  
       { expected_response:true }...: avg=6.65s   min=7.83ms med=6.96s max=11.75s  p(90)=11.17s  p(95)=11.5s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 5531  
     http_req_receiving.............: avg=66.56µs min=19.5µs med=56µs  max=10.57ms p(90)=85.8µs  p(95)=95.35µs
     http_req_sending...............: avg=32.5µs  min=8.1µs  med=15µs  max=8.29ms  p(90)=62.4µs  p(95)=74.8µs 
     http_req_tls_handshaking.......: avg=0s      min=0s     med=0s    max=0s      p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=6.65s   min=7.78ms med=6.96s max=11.75s  p(90)=11.17s  p(95)=11.5s  
     http_reqs......................: 5531    79.001391/s
     iteration_duration.............: avg=6.65s   min=8.08ms med=6.96s max=11.75s  p(90)=11.17s  p(95)=11.5s  
     iterations.....................: 5531    79.001391/s
     vus............................: 7       min=7       max=1000
     vus_max........................: 1000    min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/69f7827a-bd5e-42c9-6829-aefcfb9d5900/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/949017b7-6fa1-45bb-680d-84356dab4300/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 4200 / ✗ 17
     ✓ expected_result

     checks.........................: 99.86% ✓ 12634     ✗ 17    
     data_received..................: 21 MB  291 kB/s
     data_sent......................: 5.0 MB 69 kB/s
     http_req_blocked...............: avg=228.84µs min=1.4µs  med=2.9µs   max=121.23ms p(90)=560.06µs p(95)=671.3µs 
     http_req_connecting............: avg=202.81µs min=0s     med=0s      max=120.31ms p(90)=472.54µs p(95)=571.04µs
     http_req_duration..............: avg=9.75s    min=2.16s  med=9.84s   max=21.57s   p(90)=15.16s   p(95)=15.85s  
       { expected_response:true }...: avg=9.75s    min=2.16s  med=9.84s   max=21.57s   p(90)=15.16s   p(95)=15.85s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 4217  
     http_req_receiving.............: avg=156.52µs min=26.6µs med=70.8µs  max=124.73ms p(90)=121.94µs p(95)=154µs   
     http_req_sending...............: avg=179.31µs min=11.4µs med=18.39µs max=100.19ms p(90)=84.2µs   p(95)=109.61µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=9.75s    min=2.16s  med=9.84s   max=21.57s   p(90)=15.16s   p(95)=15.85s  
     http_reqs......................: 4217   57.793991/s
     iteration_duration.............: avg=9.75s    min=2.16s  med=9.84s   max=21.57s   p(90)=15.16s   p(95)=15.85s  
     iterations.....................: 4217   57.793991/s
     vus............................: 177    min=53      max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a88ac171-149e-4ca5-6637-bae3e4354500/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/28fe1ad5-331d-455e-7ec2-30876c1d8100/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-deno`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 3627 / ✗ 3
     ✗ expected_result
      ↳  99% — ✓ 3629 / ✗ 1

     checks.........................: 99.96% ✓ 10886     ✗ 4     
     data_received..................: 18 MB  252 kB/s
     data_sent......................: 4.3 MB 60 kB/s
     http_req_blocked...............: avg=176.02µs min=1µs     med=2.8µs  max=15.29ms p(90)=499.4µs  p(95)=544.87µs
     http_req_connecting............: avg=153.94µs min=0s      med=0s     max=15.23ms p(90)=425.3µs  p(95)=470.4µs 
     http_req_duration..............: avg=11.27s   min=1.54s   med=12.08s max=19.27s  p(90)=17.1s    p(95)=17.41s  
       { expected_response:true }...: avg=11.27s   min=1.54s   med=12.08s max=19.27s  p(90)=17.1s    p(95)=17.41s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 3630  
     http_req_receiving.............: avg=99.19µs  min=16.29µs med=48.8µs max=6.58ms  p(90)=113.42µs p(95)=158.12µs
     http_req_sending...............: avg=48.42µs  min=7.1µs   med=18.3µs max=1.96ms  p(90)=84µs     p(95)=104.97µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=11.27s   min=1.53s   med=12.08s max=19.27s  p(90)=17.1s    p(95)=17.41s  
     http_reqs......................: 3630   50.351859/s
     iteration_duration.............: avg=11.27s   min=1.55s   med=12.08s max=19.27s  p(90)=17.11s   p(95)=17.41s  
     iterations.....................: 3630   50.351859/s
     vus............................: 351    min=54      max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b73b0b67-7c4b-46d4-1688-110a9389c200/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c129cf42-ab53-40ed-c75c-b2cc1eb9eb00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  79% — ✓ 3772 / ✗ 1000
     ✗ expected_result
      ↳  97% — ✓ 4657 / ✗ 115

     checks.........................: 92.21% ✓ 13201    ✗ 1115  
     data_received..................: 22 MB  319 kB/s
     data_sent......................: 5.7 MB 81 kB/s
     http_req_blocked...............: avg=91.16µs min=1.1µs   med=2.2µs  max=12.45ms p(90)=385.59µs p(95)=424.98µs
     http_req_connecting............: avg=75.94µs min=0s      med=0s     max=12.39ms p(90)=321.79µs p(95)=357.52µs
     http_req_duration..............: avg=7.73s   min=11.87ms med=4.62s  max=35.32s  p(90)=17.87s   p(95)=21.98s  
       { expected_response:true }...: avg=7.73s   min=11.87ms med=4.62s  max=35.32s  p(90)=17.87s   p(95)=21.98s  
     http_req_failed................: 0.00%  ✓ 0        ✗ 4772  
     http_req_receiving.............: avg=53.43µs min=13.89µs med=39.9µs max=6.4ms   p(90)=74.89µs  p(95)=86.28µs 
     http_req_sending...............: avg=29.82µs min=7.5µs   med=13.5µs max=2.04ms  p(90)=63.3µs   p(95)=77.19µs 
     http_req_tls_handshaking.......: avg=0s      min=0s      med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=7.73s   min=11.78ms med=4.62s  max=35.32s  p(90)=17.87s   p(95)=21.98s  
     http_reqs......................: 4772   68.16536/s
     iteration_duration.............: avg=7.73s   min=12.28ms med=4.62s  max=35.32s  p(90)=17.87s   p(95)=21.98s  
     iterations.....................: 4772   68.16536/s
     vus............................: 5      min=5      max=1000
     vus_max........................: 1000   min=1000   max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7947cd8c-dbb9-4493-84de-29481ffd6b00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/67e03022-c46f-4590-f1fa-f97fd476f300/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 4444 / ✗ 2
     ✗ expected_result
      ↳  99% — ✓ 4444 / ✗ 2

     checks.........................: 99.97% ✓ 13334     ✗ 4     
     data_received..................: 22 MB  291 kB/s
     data_sent......................: 5.3 MB 69 kB/s
     http_req_blocked...............: avg=1.21ms   min=1.1µs  med=2.5µs  max=626.62ms p(90)=473.22µs p(95)=606.91µs
     http_req_connecting............: avg=1.18ms   min=0s     med=0s     max=626.41ms p(90)=384.12µs p(95)=513.03µs
     http_req_duration..............: avg=9.76s    min=1s     med=8.76s  max=28.52s   p(90)=19.55s   p(95)=23.37s  
       { expected_response:true }...: avg=9.76s    min=1s     med=8.76s  max=28.52s   p(90)=19.55s   p(95)=23.37s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 4446  
     http_req_receiving.............: avg=764.73µs min=19.9µs med=56.9µs max=359.2ms  p(90)=172.96µs p(95)=379.99µs
     http_req_sending...............: avg=1.23ms   min=9.3µs  med=16µs   max=496.27ms p(90)=119.75µs p(95)=295.59µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=9.76s    min=1s     med=8.76s  max=28.52s   p(90)=19.55s   p(95)=23.37s  
     http_reqs......................: 4446   58.498137/s
     iteration_duration.............: avg=9.76s    min=1s     med=8.76s  max=28.52s   p(90)=19.55s   p(95)=23.37s  
     iterations.....................: 4446   58.498137/s
     vus............................: 496    min=52      max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a28c05f4-047d-43a2-a98e-de755b098c00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/92eb5f5f-2e07-4a24-6a01-052da7712600/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  99% — ✓ 3022 / ✗ 21
     ✗ no_errors
      ↳  65% — ✓ 1989 / ✗ 1054
     ✗ expected_result
      ↳  96% — ✓ 2906 / ✗ 116

     checks.........................: 86.92% ✓ 7917      ✗ 1191  
     data_received..................: 25 MB  270 kB/s
     data_sent......................: 3.7 MB 41 kB/s
     http_req_blocked...............: avg=184.92µs min=1.4µs med=2.9µs  max=25.55ms p(90)=507.01µs p(95)=547.02µs
     http_req_connecting............: avg=153.87µs min=0s    med=0s     max=25.49ms p(90)=425.8µs  p(95)=464.6µs 
     http_req_duration..............: avg=15.32s   min=2.43s med=11.03s max=43.95s  p(90)=29.18s   p(95)=34.36s  
       { expected_response:true }...: avg=15.22s   min=2.43s med=10.94s max=43.95s  p(90)=28.99s   p(95)=34.4s   
     http_req_failed................: 0.72%  ✓ 22        ✗ 3022  
     http_req_receiving.............: avg=94.61µs  min=0s    med=70.8µs max=7.73ms  p(90)=145.41µs p(95)=184.01µs
     http_req_sending...............: avg=43.54µs  min=8µs   med=19.1µs max=2.37ms  p(90)=86.3µs   p(95)=103.17µs
     http_req_tls_handshaking.......: avg=0s       min=0s    med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=15.32s   min=2.43s med=11.03s max=43.95s  p(90)=29.18s   p(95)=34.36s  
     http_reqs......................: 3044   33.274418/s
     iteration_duration.............: avg=15.32s   min=2.43s med=11.03s max=43.95s  p(90)=29.16s   p(95)=34.37s  
     iterations.....................: 3043   33.263487/s
     vus............................: 22     min=22      max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/614741aa-56ac-4b95-b79a-e85fce3fb400/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/260dc160-5ba1-4d6e-1d2e-3daf11bce100/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  99% — ✓ 3863 / ✗ 21
     ✗ no_errors
      ↳  99% — ✓ 3846 / ✗ 38
     ✗ expected_result
      ↳  99% — ✓ 3860 / ✗ 3

     checks.........................: 99.46% ✓ 11569     ✗ 62    
     data_received..................: 20 MB  216 kB/s
     data_sent......................: 4.6 MB 50 kB/s
     http_req_blocked...............: avg=228.82µs min=1.7µs    med=3µs    max=15.71ms p(90)=550.6µs  p(95)=643.17µs
     http_req_connecting............: avg=201.32µs min=0s       med=0s     max=15.65ms p(90)=460.37µs p(95)=546.01µs
     http_req_duration..............: avg=11.99s   min=129.09ms med=2.84s  max=1m0s    p(90)=45.83s   p(95)=53.54s  
       { expected_response:true }...: avg=11.73s   min=129.09ms med=2.84s  max=59.96s  p(90)=45s      p(95)=52.67s  
     http_req_failed................: 0.54%  ✓ 21        ✗ 3863  
     http_req_receiving.............: avg=86.93µs  min=0s       med=78.6µs max=2.13ms  p(90)=126.9µs  p(95)=153.27µs
     http_req_sending...............: avg=50.78µs  min=10.6µs   med=20.6µs max=8.96ms  p(90)=87.67µs  p(95)=112.25µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=11.99s   min=128.98ms med=2.84s  max=1m0s    p(90)=45.83s   p(95)=53.54s  
     http_reqs......................: 3884   42.254968/s
     iteration_duration.............: avg=11.99s   min=129.54ms med=2.84s  max=1m0s    p(90)=45.83s   p(95)=53.54s  
     iterations.....................: 3884   42.254968/s
     vus............................: 10     min=10      max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/598dae61-364a-4202-4413-a4cedbab2100/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/be6d64a3-c8f0-43b6-5f96-75335c205200/public" alt="HTTP Overview" />


  </details>