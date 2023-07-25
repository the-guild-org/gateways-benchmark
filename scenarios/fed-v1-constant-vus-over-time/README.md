## Overview for: `scenarios/fed-v1-constant-vus-over-time`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. It's being executed with a constant amount of VUs over a fixed amount of time. It measure things like memory usage, CPU usage, average RPS. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was running 100 VUs over 60s


### Comparison


| Gateway                             | RPS ⬇️ |       Requests        |         Duration         |
| :---------------------------------- | :----: | :-------------------: | :----------------------: |
| wundergraph                         |  764   | 45896 total, 0 failed |  avg: 130ms, p95: 207ms  |
| apollo-router                       |   89   | 5504 total, 0 failed  | avg: 1109ms, p95: 1608ms |
| stitching-federation-with-yoga-bun  |   69   | 4203 total, 0 failed  | avg: 1430ms, p95: 2470ms |
| stitching-federation-with-yoga-deno |   68   | 4180 total, 0 failed  | avg: 1448ms, p95: 1960ms |
| mesh                                |   65   | 3982 total, 0 failed  | avg: 1516ms, p95: 2317ms |
| mercurius                           |   55   | 3335 total, 0 failed  | avg: 1805ms, p95: 2434ms |
| apollo-server                       |   54   | 3316 total, 0 failed  | avg: 1833ms, p95: 2097ms |
| stitching-federation-with-yoga      |   46   | 2852 total, 0 failed  | avg: 2128ms, p95: 2687ms |
| apollo-gateway-with-yoga            |   40   | 2511 total, 0 failed  | avg: 2420ms, p95: 3366ms |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 137688     ✗ 0    
     data_received..................: 229 MB  3.8 MB/s
     data_sent......................: 55 MB   907 kB/s
   ✓ expected_result................: 0.00%   ✓ 0          ✗ 0    
     http_req_blocked...............: avg=48.08µs  min=900ns   med=1.9µs    max=62.12ms  p(90)=2.8µs    p(95)=3.3µs   
     http_req_connecting............: avg=41.28µs  min=0s      med=0s       max=62.07ms  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=130.24ms min=16.72ms med=124.21ms max=361.73ms p(90)=184.41ms p(95)=206.89ms
       { expected_response:true }...: avg=130.24ms min=16.72ms med=124.21ms max=361.73ms p(90)=184.41ms p(95)=206.89ms
   ✓ http_req_failed................: 0.00%   ✓ 0          ✗ 45896
     http_req_receiving.............: avg=296.68µs min=15.8µs  med=42.4µs   max=78.99ms  p(90)=174.8µs  p(95)=417.51µs
     http_req_sending...............: avg=84.31µs  min=5.9µs   med=11.2µs   max=61.53ms  p(90)=20.1µs   p(95)=36.6µs  
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=129.85ms min=16.66ms med=123.89ms max=354.76ms p(90)=183.73ms p(95)=206.2ms 
     http_reqs......................: 45896   764.066061/s
     iteration_duration.............: avg=130.76ms min=16.97ms med=124.67ms max=368.03ms p(90)=184.89ms p(95)=207.4ms 
     iterations.....................: 45896   764.066061/s
   ✓ no_errors......................: 0.00%   ✓ 0          ✗ 0    
     vus............................: 100     min=100      max=100
     vus_max........................: 100     min=100      max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f9c62135-f358-4c32-019c-474597de1400/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/254539db-366d-497c-7405-c877e8405000/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 5492 / ✗ 12
     ✓ expected_result

     checks.........................: 99.92% ✓ 16500     ✗ 12   
     data_received..................: 27 MB  444 kB/s
     data_sent......................: 6.5 MB 106 kB/s
   ✓ expected_result................: 0.00%  ✓ 0         ✗ 0    
     http_req_blocked...............: avg=168.76µs min=1.7µs    med=2.6µs  max=23.74ms p(90)=3.7µs  p(95)=4.5µs  
     http_req_connecting............: avg=161.3µs  min=0s       med=0s     max=23.7ms  p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=1.1s     min=309.73ms med=1.05s  max=5.63s   p(90)=1.39s  p(95)=1.6s   
       { expected_response:true }...: avg=1.1s     min=309.73ms med=1.05s  max=5.63s   p(90)=1.39s  p(95)=1.6s   
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 5504 
     http_req_receiving.............: avg=100.76µs min=26.4µs   med=55.2µs max=21.47ms p(90)=88.1µs p(95)=106.1µs
     http_req_sending...............: avg=47.54µs  min=10.5µs   med=15.2µs max=9.7ms   p(90)=29.8µs p(95)=41.08µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=1.1s     min=309.5ms  med=1.05s  max=5.63s   p(90)=1.39s  p(95)=1.6s   
     http_reqs......................: 5504   89.149891/s
     iteration_duration.............: avg=1.1s     min=311.06ms med=1.05s  max=5.64s   p(90)=1.39s  p(95)=1.6s   
     iterations.....................: 5504   89.149891/s
   ✓ no_errors......................: 0.00%  ✓ 0         ✗ 0    
     vus............................: 69     min=69      max=100
     vus_max........................: 100    min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d076a2f5-23fe-4acf-0fe1-23c5378f7400/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b9f109b9-a6f6-43f4-e7eb-8718a9926f00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 12609     ✗ 0    
     data_received..................: 21 MB   348 kB/s
     data_sent......................: 5.0 MB  83 kB/s
   ✓ expected_result................: 0.00%   ✓ 0         ✗ 0    
     http_req_blocked...............: avg=811.33µs min=1.2µs    med=2.2µs  max=62.71ms p(90)=3.3µs  p(95)=4.59µs  
     http_req_connecting............: avg=784.02µs min=0s       med=0s     max=61.05ms p(90)=0s     p(95)=0s      
     http_req_duration..............: avg=1.43s    min=744.01ms med=1.31s  max=3.68s   p(90)=1.83s  p(95)=2.46s   
       { expected_response:true }...: avg=1.43s    min=744.01ms med=1.31s  max=3.68s   p(90)=1.83s  p(95)=2.46s   
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 4203 
     http_req_receiving.............: avg=124.68µs min=18.7µs   med=35.6µs max=42.15ms p(90)=74.9µs p(95)=115.08µs
     http_req_sending...............: avg=148.26µs min=7.3µs    med=12.5µs max=12.3ms  p(90)=30.5µs p(95)=126.53µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=1.42s    min=742.01ms med=1.31s  max=3.68s   p(90)=1.83s  p(95)=2.46s   
     http_reqs......................: 4203    69.752794/s
     iteration_duration.............: avg=1.43s    min=745.34ms med=1.31s  max=3.68s   p(90)=1.83s  p(95)=2.51s   
     iterations.....................: 4203    69.752794/s
   ✓ no_errors......................: 0.00%   ✓ 0         ✗ 0    
     vus............................: 100     min=100     max=100
     vus_max........................: 100     min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/fffd5ef6-4f8f-4d99-fa84-e3f094b13a00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/eb5c4eda-5a0c-41e2-1c20-61cf6db5ab00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-deno`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 4177 / ✗ 3
     ✓ expected_result

     checks.........................: 99.97% ✓ 12537     ✗ 3    
     data_received..................: 21 MB  344 kB/s
     data_sent......................: 5.0 MB 82 kB/s
   ✓ expected_result................: 0.00%  ✓ 0         ✗ 0    
     http_req_blocked...............: avg=642.24µs min=700ns    med=1.7µs  max=60.89ms p(90)=3.1µs  p(95)=3.89µs
     http_req_connecting............: avg=624.01µs min=0s       med=0s     max=50.65ms p(90)=0s     p(95)=0s    
     http_req_duration..............: avg=1.44s    min=828.96ms med=1.4s   max=2.66s   p(90)=1.69s  p(95)=1.95s 
       { expected_response:true }...: avg=1.44s    min=828.96ms med=1.4s   max=2.66s   p(90)=1.69s  p(95)=1.95s 
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 4180 
     http_req_receiving.............: avg=57.13µs  min=14.6µs   med=25.8µs max=6.24ms  p(90)=72.7µs p(95)=86.1µs
     http_req_sending...............: avg=224.06µs min=5.4µs    med=10µs   max=37.73ms p(90)=22.4µs p(95)=94.2µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s     p(95)=0s    
     http_req_waiting...............: avg=1.44s    min=828.87ms med=1.4s   max=2.66s   p(90)=1.69s  p(95)=1.95s 
     http_reqs......................: 4180   68.785816/s
     iteration_duration.............: avg=1.44s    min=829.24ms med=1.4s   max=2.71s   p(90)=1.69s  p(95)=1.96s 
     iterations.....................: 4180   68.785816/s
   ✓ no_errors......................: 0.00%  ✓ 0         ✗ 0    
     vus............................: 100    min=100     max=100
     vus_max........................: 100    min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/de382364-4655-4a93-6430-119e8c2c9b00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e6d9ef9f-7f19-4885-344e-ea21114cd800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 11946     ✗ 0    
     data_received..................: 20 MB   328 kB/s
     data_sent......................: 4.7 MB  78 kB/s
   ✓ expected_result................: 0.00%   ✓ 0         ✗ 0    
     http_req_blocked...............: avg=262.66µs min=1.4µs    med=3µs    max=25.91ms p(90)=5µs    p(95)=7.49µs 
     http_req_connecting............: avg=256.72µs min=0s       med=0s     max=25.86ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=1.51s    min=474.4ms  med=1.44s  max=4.02s   p(90)=2.07s  p(95)=2.31s  
       { expected_response:true }...: avg=1.51s    min=474.4ms  med=1.44s  max=4.02s   p(90)=2.07s  p(95)=2.31s  
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 3982 
     http_req_receiving.............: avg=73µs     min=21.5µs   med=64.3µs max=16.72ms p(90)=91.9µs p(95)=103.1µs
     http_req_sending...............: avg=101.06µs min=9.4µs    med=17.7µs max=15.79ms p(90)=31.3µs p(95)=39µs   
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=1.51s    min=474.33ms med=1.44s  max=4.02s   p(90)=2.06s  p(95)=2.31s  
     http_reqs......................: 3982    65.558213/s
     iteration_duration.............: avg=1.51s    min=474.75ms med=1.45s  max=4.03s   p(90)=2.07s  p(95)=2.31s  
     iterations.....................: 3982    65.558213/s
   ✓ no_errors......................: 0.00%   ✓ 0         ✗ 0    
     vus............................: 100     min=100     max=100
     vus_max........................: 100     min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e68466a4-21eb-49d2-1551-98552bbb9600/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3bc08ff9-0995-4402-e10b-a7e7736c0e00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 10005     ✗ 0    
     data_received..................: 17 MB   277 kB/s
     data_sent......................: 4.0 MB  65 kB/s
   ✓ expected_result................: 0.00%   ✓ 0         ✗ 0    
     http_req_blocked...............: avg=314.48µs min=1.9µs    med=3.2µs  max=28.29ms p(90)=4.7µs    p(95)=20µs    
     http_req_connecting............: avg=303.65µs min=0s       med=0s     max=28.26ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=1.8s     min=501.5ms  med=1.72s  max=5.5s    p(90)=2.03s    p(95)=2.43s   
       { expected_response:true }...: avg=1.8s     min=501.5ms  med=1.72s  max=5.5s    p(90)=2.03s    p(95)=2.43s   
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 3335 
     http_req_receiving.............: avg=83.3µs   min=29.7µs   med=77.1µs max=1.5ms   p(90)=118.36µs p(95)=138.69µs
     http_req_sending...............: avg=49.23µs  min=12µs     med=21.9µs max=8.71ms  p(90)=46.86µs  p(95)=74.26µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=1.8s     min=501.42ms med=1.72s  max=5.5s    p(90)=2.03s    p(95)=2.43s   
     http_reqs......................: 3335    55.123583/s
     iteration_duration.............: avg=1.8s     min=501.95ms med=1.72s  max=5.52s   p(90)=2.03s    p(95)=2.43s   
     iterations.....................: 3335    55.123583/s
   ✓ no_errors......................: 0.00%   ✓ 0         ✗ 0    
     vus............................: 100     min=100     max=100
     vus_max........................: 100     min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0efb62d5-8315-4a1a-a9b6-07a5481db000/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d23d9e3a-7d65-4616-c40b-52c313a33600/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 3308 / ✗ 8
     ✓ expected_result

     checks.........................: 99.91% ✓ 9940      ✗ 8    
     data_received..................: 17 MB  279 kB/s
     data_sent......................: 3.9 MB 64 kB/s
   ✓ expected_result................: 0.00%  ✓ 0         ✗ 0    
     http_req_blocked...............: avg=276.87µs min=1.3µs    med=2.9µs   max=18.5ms  p(90)=4.3µs  p(95)=15.6µs 
     http_req_connecting............: avg=259.43µs min=0s       med=0s      max=18.44ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=1.83s    min=847.5ms  med=1.65s   max=20.97s  p(90)=1.95s  p(95)=2.09s  
       { expected_response:true }...: avg=1.83s    min=847.5ms  med=1.65s   max=20.97s  p(90)=1.95s  p(95)=2.09s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 3316 
     http_req_receiving.............: avg=75.7µs   min=20.9µs   med=69.1µs  max=11ms    p(90)=88.9µs p(95)=94.4µs 
     http_req_sending...............: avg=82.48µs  min=8.3µs    med=17.45µs max=10.11ms p(90)=32µs   p(95)=36.22µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s      p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=1.83s    min=844.5ms  med=1.65s   max=20.96s  p(90)=1.95s  p(95)=2.09s  
     http_reqs......................: 3316   54.223891/s
     iteration_duration.............: avg=1.83s    min=855.32ms med=1.66s   max=20.97s  p(90)=1.95s  p(95)=2.09s  
     iterations.....................: 3316   54.223891/s
   ✓ no_errors......................: 0.00%  ✓ 0         ✗ 0    
     vus............................: 37     min=37      max=100
     vus_max........................: 100    min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c128a868-1d87-42b0-f3f2-784cc4303a00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ade77d4f-e8e2-406a-447d-4fa03f9c1300/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 2839 / ✗ 13
     ✗ expected_result
      ↳  99% — ✓ 2844 / ✗ 8

     checks.........................: 99.75% ✓ 8535      ✗ 21   
     data_received..................: 14 MB  233 kB/s
     data_sent......................: 3.4 MB 55 kB/s
   ✓ expected_result................: 0.00%  ✓ 0         ✗ 0    
     http_req_blocked...............: avg=196.05µs min=1µs   med=2.7µs  max=12.31ms p(90)=4.2µs  p(95)=14.56µs
     http_req_connecting............: avg=191.09µs min=0s    med=0s     max=12.22ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=2.12s    min=1.16s med=2.05s  max=4.24s   p(90)=2.38s  p(95)=2.68s  
       { expected_response:true }...: avg=2.12s    min=1.16s med=2.05s  max=4.24s   p(90)=2.38s  p(95)=2.68s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 2852 
     http_req_receiving.............: avg=64.82µs  min=21µs  med=61.9µs max=6.73ms  p(90)=88.2µs p(95)=95.28µs
     http_req_sending...............: avg=45.15µs  min=7.4µs med=17.2µs max=3.86ms  p(90)=33.8µs p(95)=103µs  
     http_req_tls_handshaking.......: avg=0s       min=0s    med=0s     max=0s      p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=2.12s    min=1.16s med=2.05s  max=4.24s   p(90)=2.38s  p(95)=2.68s  
     http_reqs......................: 2852   46.684083/s
     iteration_duration.............: avg=2.12s    min=1.17s med=2.05s  max=4.24s   p(90)=2.38s  p(95)=2.68s  
     iterations.....................: 2852   46.684083/s
   ✓ no_errors......................: 0.00%  ✓ 0         ✗ 0    
     vus............................: 34     min=34      max=100
     vus_max........................: 100    min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4f32389e-25cc-4378-9ec4-e96cec2e0500/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4e8cfd6a-7a1a-405a-80e4-762a88cd1f00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 2499 / ✗ 12
     ✗ expected_result
      ↳  99% — ✓ 2510 / ✗ 1

     checks.........................: 99.82% ✓ 7520      ✗ 13   
     data_received..................: 13 MB  205 kB/s
     data_sent......................: 3.0 MB 49 kB/s
   ✓ expected_result................: 0.00%  ✓ 0         ✗ 0    
     http_req_blocked...............: avg=732.05µs min=1.4µs  med=2.9µs   max=32.21ms p(90)=10.8µs  p(95)=30.45µs
     http_req_connecting............: avg=698.33µs min=0s     med=0s      max=30.19ms p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=2.41s    min=1.27s  med=2.26s   max=4.96s   p(90)=2.95s   p(95)=3.36s  
       { expected_response:true }...: avg=2.41s    min=1.27s  med=2.26s   max=4.96s   p(90)=2.95s   p(95)=3.36s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 2511 
     http_req_receiving.............: avg=78.45µs  min=26.2µs med=67µs    max=3.52ms  p(90)=112.9µs p(95)=134.7µs
     http_req_sending...............: avg=144.04µs min=11.5µs med=19.59µs max=38.56ms p(90)=47µs    p(95)=127.4µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s      p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=2.41s    min=1.27s  med=2.26s   max=4.96s   p(90)=2.95s   p(95)=3.36s  
     http_reqs......................: 2511   40.964181/s
     iteration_duration.............: avg=2.42s    min=1.27s  med=2.26s   max=4.97s   p(90)=2.95s   p(95)=3.36s  
     iterations.....................: 2511   40.964181/s
   ✓ no_errors......................: 0.00%  ✓ 0         ✗ 0    
     vus............................: 45     min=45      max=100
     vus_max........................: 100    min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/47f2e965-f784-4a2f-d4d8-139f56f3d100/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/bc98c0fe-e825-4999-32f7-315b3db5da00/public" alt="HTTP Overview" />


  </details>