## Overview for scenario: `ramping-vus`


This scenario runs 4 servics and a GraphQL gateway with Federation spec, and runs a heavy query. We are running a heavy load of concurrent VUs to measure response time and other stats, during stress. It measure things like memory usage, CPU usage, response times. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was trying to reach 1000 concurrent VUs over 60s


### Comparison


| Gateway                             | duration(p95)⬇️ |  RPS  |       Requests        |                       Durations                        |
| :---------------------------------- | :-------------: | :---: | :-------------------: | :----------------------------------------------------: |
| wundergraph                         |     1134ms      |  869  | 60899 total, 0 failed |    avg: 565ms, p95: 1134ms, max: 2027ms, med: 526ms    |
| mercurius                           |     9685ms      |  90   | 6335 total, 0 failed  |  avg: 5764ms, p95: 9685ms, max: 10016ms, med: 6123ms   |
| apollo-router                       |     11332ms     |  99   | 7064 total, 0 failed  |  avg: 5459ms, p95: 11333ms, max: 17518ms, med: 5181ms  |
| mesh                                |     11757ms     |  82   | 5781 total, 0 failed  |  avg: 6683ms, p95: 11758ms, max: 14645ms, med: 6826ms  |
| stitching-federation-with-yoga-bun  |     16788ms     |  79   | 5720 total, 0 failed  |  avg: 7190ms, p95: 16789ms, max: 24017ms, med: 6565ms  |
| apollo-gateway-with-yoga            |     21628ms     |  70   | 4996 total, 0 failed  |  avg: 7757ms, p95: 21629ms, max: 31911ms, med: 4184ms  |
| stitching-federation-with-yoga-deno |     27010ms     |  34   | 2612 total, 0 failed  | avg: 16901ms, p95: 27010ms, max: 30250ms, med: 17953ms |
| stitching-federation-with-yoga      |     44607ms     |  23   | 2171 total, 57 failed | avg: 19197ms, p95: 44608ms, max: 60001ms, med: 13916ms |
| apollo-server                       |     52502ms     |  44   | 4118 total, 0 failed  | avg: 11253ms, p95: 52502ms, max: 59782ms, med: 2844ms  |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 182697     ✗ 0     
     data_received..................: 296 MB  4.2 MB/s
     data_sent......................: 72 MB   1.0 MB/s
     http_req_blocked...............: avg=706.78µs min=1µs    med=2.2µs    max=613.7ms  p(90)=3.8µs    p(95)=6.4µs   
     http_req_connecting............: avg=693.88µs min=0s     med=0s       max=613.55ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=564.65ms min=5.92ms med=525.97ms max=2.02s    p(90)=999.25ms p(95)=1.13s   
       { expected_response:true }...: avg=564.65ms min=5.92ms med=525.97ms max=2.02s    p(90)=999.25ms p(95)=1.13s   
     http_req_failed................: 0.00%   ✓ 0          ✗ 60899 
     http_req_receiving.............: avg=904.6µs  min=18.3µs med=39.2µs   max=433.97ms p(90)=179.61µs p(95)=428.14µs
     http_req_sending...............: avg=663.5µs  min=7.1µs  med=12.6µs   max=477.36ms p(90)=27.9µs   p(95)=109.91µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=563.09ms min=5.72ms med=524.78ms max=2.02s    p(90)=993.53ms p(95)=1.13s   
     http_reqs......................: 60899   869.910224/s
     iteration_duration.............: avg=567.52ms min=6.25ms med=529.17ms max=2.26s    p(90)=1s       p(95)=1.14s   
     iterations.....................: 60899   869.910224/s
     vus............................: 8       min=8        max=1000
     vus_max........................: 1000    min=1000     max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ab6695a8-7922-46a4-b308-7b3790a02a00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/09b521b3-c423-4325-d00a-8bb2eeb3a200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 19005     ✗ 0     
     data_received..................: 32 MB   455 kB/s
     data_sent......................: 7.5 MB  107 kB/s
     http_req_blocked...............: avg=104.05µs min=1µs    med=2.29µs  max=23.85ms p(90)=356.45µs p(95)=402.79µs
     http_req_connecting............: avg=77.43µs  min=0s     med=0s      max=23.68ms p(90)=298.67µs p(95)=337.48µs
     http_req_duration..............: avg=5.76s    min=9.49ms med=6.12s   max=10.01s  p(90)=9.53s    p(95)=9.68s   
       { expected_response:true }...: avg=5.76s    min=9.49ms med=6.12s   max=10.01s  p(90)=9.53s    p(95)=9.68s   
     http_req_failed................: 0.00%   ✓ 0         ✗ 6335  
     http_req_receiving.............: avg=53.97µs  min=20.1µs med=48.59µs max=1.31ms  p(90)=76.2µs   p(95)=84.5µs  
     http_req_sending...............: avg=32.25µs  min=5.5µs  med=14.2µs  max=13.1ms  p(90)=59.8µs   p(95)=71.83µs 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=5.76s    min=9.44ms med=6.12s   max=10.01s  p(90)=9.53s    p(95)=9.68s   
     http_reqs......................: 6335    90.470625/s
     iteration_duration.............: avg=5.76s    min=9.78ms med=6.12s   max=10.01s  p(90)=9.53s    p(95)=9.68s   
     iterations.....................: 6335    90.470625/s
     vus............................: 7       min=7       max=1000
     vus_max........................: 1000    min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/dd182b87-de3c-47bc-35f0-34146ef43f00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c9d7df62-0855-47ca-151a-57b3697efd00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 7042 / ✗ 22
     ✗ expected_result
      ↳  99% — ✓ 7063 / ✗ 1

     checks.........................: 99.89% ✓ 21169     ✗ 23    
     data_received..................: 35 MB  497 kB/s
     data_sent......................: 8.4 MB 118 kB/s
     http_req_blocked...............: avg=448.71µs min=1µs     med=2.4µs  max=73.2ms  p(90)=372.87µs p(95)=433.68µs
     http_req_connecting............: avg=433.96µs min=0s      med=0s     max=72.82ms p(90)=311.04µs p(95)=367.48µs
     http_req_duration..............: avg=5.45s    min=85ms    med=5.18s  max=17.51s  p(90)=9.91s    p(95)=11.33s  
       { expected_response:true }...: avg=5.45s    min=85ms    med=5.18s  max=17.51s  p(90)=9.91s    p(95)=11.33s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 7064  
     http_req_receiving.............: avg=60.13µs  min=20.8µs  med=51µs   max=3.94ms  p(90)=78.2µs   p(95)=87.5µs  
     http_req_sending...............: avg=47.2µs   min=7.3µs   med=14.3µs max=7.76ms  p(90)=54.9µs   p(95)=66.7µs  
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=5.45s    min=84.92ms med=5.18s  max=17.51s  p(90)=9.91s    p(95)=11.33s  
     http_reqs......................: 7064   99.697034/s
     iteration_duration.............: avg=5.45s    min=85.4ms  med=5.18s  max=17.51s  p(90)=9.91s    p(95)=11.33s  
     iterations.....................: 7064   99.697034/s
     vus............................: 101    min=56      max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/104d7f5b-780a-47af-5782-e7e1707fe800/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0c44f1ec-b4ab-4e1c-c5d3-aab268152c00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 5773 / ✗ 8
     ✓ expected_result

     checks.........................: 99.95% ✓ 17335     ✗ 8     
     data_received..................: 29 MB  414 kB/s
     data_sent......................: 6.9 MB 98 kB/s
     http_req_blocked...............: avg=139µs    min=1.1µs   med=2.29µs max=27.65ms p(90)=438.71µs p(95)=488.71µs
     http_req_connecting............: avg=124.08µs min=0s      med=0s     max=27.55ms p(90)=364.01µs p(95)=416.81µs
     http_req_duration..............: avg=6.68s    min=14.46ms med=6.82s  max=14.64s  p(90)=10.34s   p(95)=11.75s  
       { expected_response:true }...: avg=6.68s    min=14.46ms med=6.82s  max=14.64s  p(90)=10.34s   p(95)=11.75s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 5781  
     http_req_receiving.............: avg=62.73µs  min=20.6µs  med=55.1µs max=6.05ms  p(90)=82.9µs   p(95)=93.5µs  
     http_req_sending...............: avg=37.79µs  min=6.3µs   med=14.3µs max=14.56ms p(90)=66.4µs   p(95)=83µs    
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=6.68s    min=14.33ms med=6.82s  max=14.64s  p(90)=10.34s   p(95)=11.75s  
     http_reqs......................: 5781   82.580706/s
     iteration_duration.............: avg=6.68s    min=14.85ms med=6.82s  max=14.64s  p(90)=10.34s   p(95)=11.75s  
     iterations.....................: 5781   82.580706/s
     vus............................: 68     min=54      max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/56499868-b667-448c-79e0-b55fe6617d00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b764185a-e613-4170-6982-1c74b9f84b00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 17160    ✗ 0     
     data_received..................: 29 MB   397 kB/s
     data_sent......................: 6.8 MB  95 kB/s
     http_req_blocked...............: avg=480.38µs min=1.1µs    med=2µs    max=401.82ms p(90)=179.71µs p(95)=451.22µs
     http_req_connecting............: avg=430.22µs min=0s       med=0s     max=339.08ms p(90)=120.4µs  p(95)=384.02µs
     http_req_duration..............: avg=7.19s    min=614.78ms med=6.56s  max=24.01s   p(90)=14.98s   p(95)=16.78s  
       { expected_response:true }...: avg=7.19s    min=614.78ms med=6.56s  max=24.01s   p(90)=14.98s   p(95)=16.78s  
     http_req_failed................: 0.00%   ✓ 0        ✗ 5720  
     http_req_receiving.............: avg=726.35µs min=16.6µs   med=35.8µs max=279.97ms p(90)=118.63µs p(95)=369.97µs
     http_req_sending...............: avg=383.93µs min=7.1µs    med=12µs   max=339.28ms p(90)=76.91µs  p(95)=128.35µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=7.18s    min=614.52ms med=6.56s  max=24.01s   p(90)=14.98s   p(95)=16.78s  
     http_reqs......................: 5720    79.71579/s
     iteration_duration.............: avg=7.19s    min=629.77ms med=6.56s  max=24.01s   p(90)=14.98s   p(95)=16.78s  
     iterations.....................: 5720    79.71579/s
     vus............................: 195     min=55     max=1000
     vus_max........................: 1000    min=1000   max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6178169c-d396-49fb-e50c-d4f7f5e3a500/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/db99192f-83f0-46f7-285c-1fcaa3310e00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  82% — ✓ 4100 / ✗ 896
     ✗ expected_result
      ↳  97% — ✓ 4861 / ✗ 135

     checks.........................: 93.12% ✓ 13957     ✗ 1031  
     data_received..................: 23 MB  329 kB/s
     data_sent......................: 5.9 MB 84 kB/s
     http_req_blocked...............: avg=104.16µs min=900ns    med=2.2µs   max=15.11ms p(90)=382.29µs p(95)=429.12µs
     http_req_connecting............: avg=88.25µs  min=0s       med=0s      max=15.02ms p(90)=317.29µs p(95)=361.92µs
     http_req_duration..............: avg=7.75s    min=123.57ms med=4.18s   max=31.91s  p(90)=16.42s   p(95)=21.62s  
       { expected_response:true }...: avg=7.75s    min=123.57ms med=4.18s   max=31.91s  p(90)=16.42s   p(95)=21.62s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 4996  
     http_req_receiving.............: avg=50.3µs   min=14.5µs   med=42.14µs max=4.61ms  p(90)=74.2µs   p(95)=84.72µs 
     http_req_sending...............: avg=33.68µs  min=7µs      med=13.5µs  max=5.24ms  p(90)=61.29µs  p(95)=73.8µs  
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=7.75s    min=123.5ms  med=4.18s   max=31.91s  p(90)=16.42s   p(95)=21.62s  
     http_reqs......................: 4996   70.340234/s
     iteration_duration.............: avg=7.75s    min=123.89ms med=4.18s   max=31.91s  p(90)=16.43s   p(95)=21.62s  
     iterations.....................: 4996   70.340234/s
     vus............................: 259    min=55      max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3c21e740-e31e-4134-a57e-b024b1c1c000/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0acdbbbc-1ab1-430e-3ed8-558da8e8ee00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-deno`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  91% — ✓ 2380 / ✗ 232
     ✗ expected_result
      ↳  99% — ✓ 2599 / ✗ 13

     checks.........................: 96.87% ✓ 7591      ✗ 245   
     data_received..................: 16 MB  202 kB/s
     data_sent......................: 3.1 MB 41 kB/s
     http_req_blocked...............: avg=317.02µs min=1.1µs  med=3.7µs  max=16.54ms p(90)=644.16µs p(95)=785.85µs
     http_req_connecting............: avg=278.74µs min=0s     med=0s     max=16.45ms p(90)=542.56µs p(95)=664.29µs
     http_req_duration..............: avg=16.9s    min=1.6s   med=17.95s max=30.25s  p(90)=25.76s   p(95)=27.01s  
       { expected_response:true }...: avg=16.9s    min=1.6s   med=17.95s max=30.25s  p(90)=25.76s   p(95)=27.01s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 2612  
     http_req_receiving.............: avg=152.68µs min=20.8µs med=66.1µs max=12.88ms p(90)=173.8µs  p(95)=322.87µs
     http_req_sending...............: avg=95.08µs  min=9.5µs  med=29.8µs max=5.12ms  p(90)=114.88µs p(95)=180.78µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=16.9s    min=1.59s  med=17.95s max=30.25s  p(90)=25.76s   p(95)=27.01s  
     http_reqs......................: 2612   34.130231/s
     iteration_duration.............: avg=16.9s    min=1.61s  med=17.95s max=30.25s  p(90)=25.76s   p(95)=27.01s  
     iterations.....................: 2612   34.130231/s
     vus............................: 175    min=52      max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9c486096-036b-40c7-7efa-dfbeb7ad1d00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3f8e3d62-beaa-4eed-23dc-baf2ac610900/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  97% — ✓ 2114 / ✗ 50
     ✗ no_errors
      ↳  57% — ✓ 1234 / ✗ 930
     ✗ expected_result
      ↳  97% — ✓ 2052 / ✗ 62

     checks.........................: 83.82% ✓ 5400      ✗ 1042  
     data_received..................: 19 MB  201 kB/s
     data_sent......................: 2.9 MB 31 kB/s
     http_req_blocked...............: avg=386.73µs min=1.6µs  med=4.1µs   max=17.39ms p(90)=674.2µs p(95)=798.6µs 
     http_req_connecting............: avg=350.09µs min=0s     med=0s      max=17.28ms p(90)=585.6µs p(95)=702.35µs
     http_req_duration..............: avg=19.19s   min=2.58s  med=13.91s  max=1m0s    p(90)=39.35s  p(95)=44.6s   
       { expected_response:true }...: avg=18.64s   min=2.58s  med=13.61s  max=57.82s  p(90)=38.86s  p(95)=44.21s  
     http_req_failed................: 2.62%  ✓ 57        ✗ 2114  
     http_req_receiving.............: avg=131.15µs min=0s     med=101.9µs max=3.31ms  p(90)=204.3µs p(95)=263.15µs
     http_req_sending...............: avg=97.42µs  min=10.3µs med=29.1µs  max=10.02ms p(90)=120µs   p(95)=157µs   
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=19.19s   min=2.58s  med=13.91s  max=1m0s    p(90)=39.35s  p(95)=44.6s   
     http_reqs......................: 2171   23.028757/s
     iteration_duration.............: avg=19.14s   min=2.6s   med=13.88s  max=1m0s    p(90)=39.35s  p(95)=44.6s   
     iterations.....................: 2164   22.954505/s
     vus............................: 51     min=51      max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ec0dd27d-2971-4c24-eaa4-c91c90a43300/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/86abc706-b542-4cb5-41a2-6a16d1469500/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 4101 / ✗ 17
     ✗ expected_result
      ↳  99% — ✓ 4116 / ✗ 2

     checks.........................: 99.84% ✓ 12335     ✗ 19    
     data_received..................: 21 MB  231 kB/s
     data_sent......................: 4.9 MB 53 kB/s
     http_req_blocked...............: avg=162.5µs  min=1.7µs    med=3.3µs  max=18.05ms p(90)=484.76µs p(95)=547.01µs
     http_req_connecting............: avg=139.92µs min=0s       med=0s     max=17.98ms p(90)=403.78µs p(95)=462.25µs
     http_req_duration..............: avg=11.25s   min=131.74ms med=2.84s  max=59.78s  p(90)=44.06s   p(95)=52.5s   
       { expected_response:true }...: avg=11.25s   min=131.74ms med=2.84s  max=59.78s  p(90)=44.06s   p(95)=52.5s   
     http_req_failed................: 0.00%  ✓ 0         ✗ 4118  
     http_req_receiving.............: avg=91.38µs  min=26.3µs   med=86.2µs max=1.47ms  p(90)=121.6µs  p(95)=134.53µs
     http_req_sending...............: avg=41.17µs  min=11µs     med=20.4µs max=2.47ms  p(90)=83.83µs  p(95)=102.02µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=11.25s   min=131.63ms med=2.84s  max=59.78s  p(90)=44.06s   p(95)=52.5s   
     http_reqs......................: 4118   44.825988/s
     iteration_duration.............: avg=11.25s   min=132.15ms med=2.84s  max=59.78s  p(90)=44.06s   p(95)=52.5s   
     iterations.....................: 4118   44.825988/s
     vus............................: 7      min=7       max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1cab8a82-bf3d-4c07-a8e7-4c9efa6bb300/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/dcc26816-67fd-4942-4e02-b1128aed3800/public" alt="HTTP Overview" />


  </details>