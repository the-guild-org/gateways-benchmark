## Overview for scenario: `constant-vus-over-time`


This scenario runs 4 servics and a GraphQL gateway with Federation spec, and runs a heavy query. It's being executed with a constant amount of VUs over a fixed amount of time. It measure things like memory usage, CPU usage, average RPS. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was running 100 VUs over 60s


### Comparison


| Gateway                             | RPS ⬇️ |       Requests        |         Duration         |
| :---------------------------------- | :----: | :-------------------: | :----------------------: |
| wundergraph                         |  642   | 38621 total, 0 failed |  avg: 155ms, p95: 253ms  |
| apollo-router                       |  115   | 6968 total, 0 failed  | avg: 864ms, p95: 1611ms  |
| stitching-federation-with-yoga-bun  |   83   | 5071 total, 0 failed  | avg: 1195ms, p95: 1996ms |
| mercurius                           |   76   | 4632 total, 0 failed  | avg: 1298ms, p95: 1759ms |
| apollo-gateway-with-yoga            |   72   | 4389 total, 0 failed  | avg: 1378ms, p95: 1949ms |
| apollo-server                       |   62   | 3772 total, 0 failed  | avg: 1603ms, p95: 2221ms |
| mesh                                |   51   | 3145 total, 0 failed  | avg: 1929ms, p95: 3104ms |
| stitching-federation-with-yoga-deno |   49   | 3011 total, 0 failed  | avg: 2019ms, p95: 3011ms |
| stitching-federation-with-yoga      |   40   | 2476 total, 0 failed  | avg: 2454ms, p95: 3335ms |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 115863     ✗ 0    
     data_received..................: 188 MB  3.1 MB/s
     data_sent......................: 46 MB   763 kB/s
   ✓ expected_result................: 0.00%   ✓ 0          ✗ 0    
     http_req_blocked...............: avg=24.29µs  min=1.2µs   med=2.5µs    max=17.72ms  p(90)=3.8µs    p(95)=6.2µs   
     http_req_connecting............: avg=17.27µs  min=0s      med=0s       max=17.68ms  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=154.61ms min=19.15ms med=146.87ms max=412.78ms p(90)=223.92ms p(95)=252.69ms
       { expected_response:true }...: avg=154.61ms min=19.15ms med=146.87ms max=412.78ms p(90)=223.92ms p(95)=252.69ms
   ✓ http_req_failed................: 0.00%   ✓ 0          ✗ 38621
     http_req_receiving.............: avg=595.4µs  min=21.3µs  med=62.1µs   max=119.81ms p(90)=321.3µs  p(95)=993.4µs 
     http_req_sending...............: avg=169.98µs min=8.69µs  med=15.1µs   max=91.4ms   p(90)=39.9µs   p(95)=120.3µs 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=153.85ms min=18.94ms med=146.12ms max=410.4ms  p(90)=222.73ms p(95)=251.33ms
     http_reqs......................: 38621   642.443014/s
     iteration_duration.............: avg=155.45ms min=19.45ms med=147.73ms max=413.12ms p(90)=225.11ms p(95)=253.62ms
     iterations.....................: 38621   642.443014/s
   ✓ no_errors......................: 0.00%   ✓ 0          ✗ 0    
     vus............................: 100     min=100      max=100
     vus_max........................: 100     min=100      max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9fc08a9e-a67f-41e2-8835-a5562b671500/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/43b7745b-bf96-4bb8-34f2-d67eca8c8900/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 6966 / ✗ 2
     ✓ expected_result

     checks.........................: 99.99% ✓ 20902      ✗ 2    
     data_received..................: 35 MB  574 kB/s
     data_sent......................: 8.3 MB 137 kB/s
   ✓ expected_result................: 0.00%  ✓ 0          ✗ 0    
     http_req_blocked...............: avg=38.92µs  min=900ns    med=2.2µs    max=8.57ms p(90)=3µs     p(95)=3.6µs  
     http_req_connecting............: avg=34.26µs  min=0s       med=0s       max=8.55ms p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=864.29ms min=129.2ms  med=795.8ms  max=2.64s  p(90)=1.34s   p(95)=1.61s  
       { expected_response:true }...: avg=864.29ms min=129.2ms  med=795.8ms  max=2.64s  p(90)=1.34s   p(95)=1.61s  
   ✓ http_req_failed................: 0.00%  ✓ 0          ✗ 6968 
     http_req_receiving.............: avg=52.74µs  min=18.7µs   med=49.49µs  max=4.39ms p(90)=71.29µs p(95)=77.99µs
     http_req_sending...............: avg=32.34µs  min=6.4µs    med=13.89µs  max=8ms    p(90)=26.9µs  p(95)=31.19µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s     p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=864.2ms  min=129.14ms med=795.75ms max=2.64s  p(90)=1.34s   p(95)=1.61s  
     http_reqs......................: 6968   115.241462/s
     iteration_duration.............: avg=864.64ms min=129.49ms med=796.1ms  max=2.64s  p(90)=1.34s   p(95)=1.61s  
     iterations.....................: 6968   115.241462/s
   ✓ no_errors......................: 0.00%  ✓ 0          ✗ 0    
     vus............................: 100    min=100      max=100
     vus_max........................: 100    min=100      max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d00d365e-5bbe-4ae9-e12e-1ec315149a00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/136d8cba-28dd-4e2f-56c2-0a9fc7cc3900/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 15213     ✗ 0    
     data_received..................: 25 MB   417 kB/s
     data_sent......................: 6.0 MB  99 kB/s
   ✓ expected_result................: 0.00%   ✓ 0         ✗ 0    
     http_req_blocked...............: avg=61.04µs min=1µs      med=1.9µs  max=8.18ms  p(90)=2.9µs  p(95)=4µs     
     http_req_connecting............: avg=55.48µs min=0s       med=0s     max=7.84ms  p(90)=0s     p(95)=0s      
     http_req_duration..............: avg=1.19s   min=460.12ms med=1.11s  max=2.91s   p(90)=1.85s  p(95)=1.99s   
       { expected_response:true }...: avg=1.19s   min=460.12ms med=1.11s  max=2.91s   p(90)=1.85s  p(95)=1.99s   
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 5071 
     http_req_receiving.............: avg=221.2µs min=14.9µs   med=28.6µs max=31.54ms p(90)=69.6µs p(95)=152µs   
     http_req_sending...............: avg=80.04µs min=6.2µs    med=10.7µs max=38.08ms p(90)=25.8µs p(95)=108.55µs
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s     max=0s      p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=1.19s   min=460.04ms med=1.11s  max=2.91s   p(90)=1.85s  p(95)=1.99s   
     http_reqs......................: 5071    83.600902/s
     iteration_duration.............: avg=1.19s   min=460.44ms med=1.11s  max=2.91s   p(90)=1.85s  p(95)=1.99s   
     iterations.....................: 5071    83.600902/s
   ✓ no_errors......................: 0.00%   ✓ 0         ✗ 0    
     vus............................: 100     min=100     max=100
     vus_max........................: 100     min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c47f50a3-8a04-4762-7e45-3a6b7df0c900/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2a69cc77-af61-427e-00aa-021c0d19b000/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 13896    ✗ 0    
     data_received..................: 23 MB   386 kB/s
     data_sent......................: 5.5 MB  91 kB/s
   ✓ expected_result................: 0.00%   ✓ 0        ✗ 0    
     http_req_blocked...............: avg=334.55µs min=1.2µs    med=2.6µs  max=31.07ms p(90)=3.6µs  p(95)=5.2µs  
     http_req_connecting............: avg=318.43µs min=0s       med=0s     max=26.74ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=1.29s    min=388.71ms med=1.23s  max=3.44s   p(90)=1.41s  p(95)=1.75s  
       { expected_response:true }...: avg=1.29s    min=388.71ms med=1.23s  max=3.44s   p(90)=1.41s  p(95)=1.75s  
   ✓ http_req_failed................: 0.00%   ✓ 0        ✗ 4632 
     http_req_receiving.............: avg=64.08µs  min=23.7µs   med=63.1µs max=823.7µs p(90)=82.9µs p(95)=88.54µs
     http_req_sending...............: avg=208.14µs min=9.4µs    med=16.1µs max=42.14ms p(90)=29.8µs p(95)=34.9µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=1.29s    min=388.64ms med=1.23s  max=3.43s   p(90)=1.41s  p(95)=1.75s  
     http_reqs......................: 4632    76.74826/s
     iteration_duration.............: avg=1.29s    min=388.98ms med=1.23s  max=3.44s   p(90)=1.41s  p(95)=1.75s  
     iterations.....................: 4632    76.74826/s
   ✓ no_errors......................: 0.00%   ✓ 0        ✗ 0    
     vus............................: 100     min=100    max=100
     vus_max........................: 100     min=100    max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6a3abe0d-1c09-48f7-8c4a-b5489da99600/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0dc888ab-76c7-4a68-2cf4-082575fec100/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 4365 / ✗ 24
     ✗ expected_result
      ↳  99% — ✓ 4387 / ✗ 2

     checks.........................: 99.80% ✓ 13141     ✗ 26   
     data_received..................: 22 MB  363 kB/s
     data_sent......................: 5.2 MB 86 kB/s
   ✓ expected_result................: 0.00%  ✓ 0         ✗ 0    
     http_req_blocked...............: avg=251.93µs min=1.1µs    med=2µs     max=26.48ms p(90)=3.02µs  p(95)=3.8µs  
     http_req_connecting............: avg=241.75µs min=0s       med=0s      max=26.45ms p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=1.37s    min=791.94ms med=1.29s   max=3.41s   p(90)=1.63s   p(95)=1.94s  
       { expected_response:true }...: avg=1.37s    min=791.94ms med=1.29s   max=3.41s   p(90)=1.63s   p(95)=1.94s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 4389 
     http_req_receiving.............: avg=51.25µs  min=18.5µs   med=50.09µs max=2.5ms   p(90)=70.99µs p(95)=77.89µs
     http_req_sending...............: avg=42.69µs  min=7.4µs    med=12.4µs  max=9.96ms  p(90)=26.2µs  p(95)=31.15µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s      p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=1.37s    min=791.89ms med=1.29s   max=3.41s   p(90)=1.63s   p(95)=1.94s  
     http_reqs......................: 4389   72.194862/s
     iteration_duration.............: avg=1.37s    min=792.2ms  med=1.29s   max=3.41s   p(90)=1.63s   p(95)=1.94s  
     iterations.....................: 4389   72.194862/s
   ✓ no_errors......................: 0.00%  ✓ 0         ✗ 0    
     vus............................: 100    min=100     max=100
     vus_max........................: 100    min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8abf9b56-4a37-40fc-0057-eb41bc11b400/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b7476e68-4e1a-42f9-daa1-16023c48bf00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  98% — ✓ 3733 / ✗ 39
     ✗ expected_result
      ↳  99% — ✓ 3769 / ✗ 3

     checks.........................: 99.62% ✓ 11274     ✗ 42   
     data_received..................: 19 MB  320 kB/s
     data_sent......................: 4.5 MB 74 kB/s
   ✓ expected_result................: 0.00%  ✓ 0         ✗ 0    
     http_req_blocked...............: avg=191.39µs min=1.4µs    med=2.29µs  max=23.12ms p(90)=3.5µs  p(95)=6.83µs
     http_req_connecting............: avg=183.86µs min=0s       med=0s      max=22.93ms p(90)=0s     p(95)=0s    
     http_req_duration..............: avg=1.6s     min=926.99ms med=1.51s   max=3.82s   p(90)=1.93s  p(95)=2.22s 
       { expected_response:true }...: avg=1.6s     min=926.99ms med=1.51s   max=3.82s   p(90)=1.93s  p(95)=2.22s 
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 3772 
     http_req_receiving.............: avg=59.99µs  min=28.8µs   med=56.05µs max=4.57ms  p(90)=81.6µs p(95)=88µs  
     http_req_sending...............: avg=32.81µs  min=9.19µs   med=13.8µs  max=3.81ms  p(90)=27.4µs p(95)=33.5µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s      p(90)=0s     p(95)=0s    
     http_req_waiting...............: avg=1.6s     min=926.92ms med=1.51s   max=3.82s   p(90)=1.93s  p(95)=2.22s 
     http_reqs......................: 3772   62.047295/s
     iteration_duration.............: avg=1.6s     min=927.27ms med=1.51s   max=3.82s   p(90)=1.93s  p(95)=2.22s 
     iterations.....................: 3772   62.047295/s
   ✓ no_errors......................: 0.00%  ✓ 0         ✗ 0    
     vus............................: 100    min=100     max=100
     vus_max........................: 100    min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/72fcab61-49be-44d9-b80c-ce24e4ff8800/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/92b4e8c4-8096-48a2-6266-167ab928d300/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 3121 / ✗ 24
     ✗ expected_result
      ↳  99% — ✓ 3144 / ✗ 1

     checks.........................: 99.73% ✓ 9410      ✗ 25   
     data_received..................: 16 MB  261 kB/s
     data_sent......................: 3.7 MB 61 kB/s
   ✓ expected_result................: 0.00%  ✓ 0         ✗ 0    
     http_req_blocked...............: avg=211.38µs min=1.6µs  med=2.5µs  max=17.21ms p(90)=3.9µs   p(95)=13.3µs 
     http_req_connecting............: avg=203.68µs min=0s     med=0s     max=17.18ms p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=1.92s    min=1.31s  med=1.77s  max=4.61s   p(90)=2.44s   p(95)=3.1s   
       { expected_response:true }...: avg=1.92s    min=1.31s  med=1.77s  max=4.61s   p(90)=2.44s   p(95)=3.1s   
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 3145 
     http_req_receiving.............: avg=65.56µs  min=25.3µs med=58.3µs max=5.23ms  p(90)=85.18µs p(95)=95.18µs
     http_req_sending...............: avg=44.37µs  min=10.3µs med=15.5µs max=4.67ms  p(90)=33.3µs  p(95)=41.58µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=1.92s    min=1.31s  med=1.77s  max=4.61s   p(90)=2.44s   p(95)=3.1s   
     http_reqs......................: 3145   51.512667/s
     iteration_duration.............: avg=1.92s    min=1.31s  med=1.77s  max=4.61s   p(90)=2.44s   p(95)=3.11s  
     iterations.....................: 3145   51.512667/s
   ✓ no_errors......................: 0.00%  ✓ 0         ✗ 0    
     vus............................: 24     min=24      max=100
     vus_max........................: 100    min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/97257521-0f60-4bfa-bd4d-2a829743ae00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f124515e-9cc6-4b15-46c9-54c64bdb8400/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-deno`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 3010 / ✗ 1
     ✓ expected_result

     checks.........................: 99.98% ✓ 9032     ✗ 1    
     data_received..................: 15 MB  247 kB/s
     data_sent......................: 3.6 MB 59 kB/s
   ✓ expected_result................: 0.00%  ✓ 0        ✗ 0    
     http_req_blocked...............: avg=1.2ms   min=1.1µs  med=2.4µs  max=114.93ms p(90)=4.2µs  p(95)=14.05µs 
     http_req_connecting............: avg=1.16ms  min=0s     med=0s     max=108.43ms p(90)=0s     p(95)=0s      
     http_req_duration..............: avg=2.01s   min=1.32s  med=1.89s  max=4.44s    p(90)=2.35s  p(95)=3.01s   
       { expected_response:true }...: avg=2.01s   min=1.32s  med=1.89s  max=4.44s    p(90)=2.35s  p(95)=3.01s   
   ✓ http_req_failed................: 0.00%  ✓ 0        ✗ 3011 
     http_req_receiving.............: avg=88.92µs min=16.5µs med=35.7µs max=7.54ms   p(90)=93.3µs p(95)=123.6µs 
     http_req_sending...............: avg=245.2µs min=7.1µs  med=13.7µs max=66.98ms  p(90)=35µs   p(95)=155.15µs
     http_req_tls_handshaking.......: avg=0s      min=0s     med=0s     max=0s       p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=2.01s   min=1.32s  med=1.89s  max=4.44s    p(90)=2.35s  p(95)=3.01s   
     http_reqs......................: 3011   49.35624/s
     iteration_duration.............: avg=2.02s   min=1.32s  med=1.89s  max=4.46s    p(90)=2.35s  p(95)=3.01s   
     iterations.....................: 3011   49.35624/s
   ✓ no_errors......................: 0.00%  ✓ 0        ✗ 0    
     vus............................: 56     min=56     max=100
     vus_max........................: 100    min=100    max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e6610d96-cfa1-4a9b-52d4-a0b1e5b00300/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c0d1661c-66a9-4a9b-a095-fa7168135600/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 2469 / ✗ 7
     ✓ expected_result

     checks.........................: 99.90% ✓ 7421      ✗ 7    
     data_received..................: 13 MB  204 kB/s
     data_sent......................: 2.9 MB 48 kB/s
   ✓ expected_result................: 0.00%  ✓ 0         ✗ 0    
     http_req_blocked...............: avg=371.16µs min=1.3µs  med=2.6µs  max=24.53ms p(90)=3.9µs   p(95)=18.72µs
     http_req_connecting............: avg=351.21µs min=0s     med=0s     max=23.68ms p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=2.45s    min=1.11s  med=2.34s  max=5.45s   p(90)=2.96s   p(95)=3.33s  
       { expected_response:true }...: avg=2.45s    min=1.11s  med=2.34s  max=5.45s   p(90)=2.96s   p(95)=3.33s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 2476 
     http_req_receiving.............: avg=66.58µs  min=22.4µs med=60.7µs max=2.1ms   p(90)=90.95µs p(95)=99.9µs 
     http_req_sending...............: avg=83.22µs  min=7.3µs  med=16.6µs max=11.72ms p(90)=33.9µs  p(95)=54.6µs 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=2.45s    min=1.11s  med=2.34s  max=5.44s   p(90)=2.96s   p(95)=3.33s  
     http_reqs......................: 2476   40.532153/s
     iteration_duration.............: avg=2.45s    min=1.11s  med=2.34s  max=5.45s   p(90)=2.97s   p(95)=3.33s  
     iterations.....................: 2476   40.532153/s
   ✓ no_errors......................: 0.00%  ✓ 0         ✗ 0    
     vus............................: 40     min=40      max=100
     vus_max........................: 100    min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ac678959-905f-48a9-5e9e-8b5564993600/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4aee2a62-9653-43fc-2366-145720178800/public" alt="HTTP Overview" />


  </details>