## Overview for scenario: `constant-vus-over-time`


This scenario runs 4 servics and a GraphQL gateway with Federation spec, and runs a heavy query. It's being executed with a constant amount of VUs over a fixed amount of time. It measure things like memory usage, CPU usage, average RPS. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was running 100 VUs over 60s


### Comparison


| Gateway                             | RPS ⬇️ |       Requests        |         Duration         |
| :---------------------------------- | :----: | :-------------------: | :----------------------: |
| wundergraph                         |  726   | 43624 total, 0 failed |  avg: 137ms, p95: 230ms  |
| apollo-router                       |  100   | 6117 total, 0 failed  | avg: 991ms, p95: 1846ms  |
| mercurius                           |   78   | 4742 total, 0 failed  | avg: 1271ms, p95: 1612ms |
| stitching-federation-with-yoga-bun  |   73   | 4492 total, 0 failed  | avg: 1350ms, p95: 2245ms |
| apollo-server                       |   65   | 3962 total, 1 failed  | avg: 1526ms, p95: 1727ms |
| mesh                                |   62   | 3843 total, 0 failed  | avg: 1578ms, p95: 2168ms |
| apollo-gateway-with-yoga            |   58   | 3565 total, 1 failed  | avg: 1699ms, p95: 1914ms |
| stitching-federation-with-yoga-deno |   56   | 3434 total, 0 failed  | avg: 1754ms, p95: 2398ms |
| stitching-federation-with-yoga      |   42   | 2608 total, 1 failed  | avg: 2327ms, p95: 3006ms |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 130872    ✗ 0    
     data_received..................: 212 MB  3.5 MB/s
     data_sent......................: 52 MB   862 kB/s
   ✓ expected_result................: 0.00%   ✓ 0         ✗ 0    
     http_req_blocked...............: avg=71.81µs  min=1.1µs   med=2.29µs   max=60.7ms   p(90)=3.4µs    p(95)=4.4µs   
     http_req_connecting............: avg=65.72µs  min=0s      med=0s       max=60.67ms  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=136.72ms min=22.49ms med=127.64ms max=429.09ms p(90)=197.26ms p(95)=229.95ms
       { expected_response:true }...: avg=136.72ms min=22.49ms med=127.64ms max=429.09ms p(90)=197.26ms p(95)=229.95ms
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 43624
     http_req_receiving.............: avg=624.68µs min=19.59µs med=54.3µs   max=169.2ms  p(90)=279.67µs p(95)=852.33µs
     http_req_sending...............: avg=151.11µs min=8.2µs   med=13.6µs   max=100.12ms p(90)=33.5µs   p(95)=100.27µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=135.95ms min=22.32ms med=127.06ms max=428.91ms p(90)=196.11ms p(95)=228.08ms
     http_reqs......................: 43624   726.49736/s
     iteration_duration.............: avg=137.52ms min=22.89ms med=128.38ms max=442.6ms  p(90)=198.53ms p(95)=231.5ms 
     iterations.....................: 43624   726.49736/s
   ✓ no_errors......................: 0.00%   ✓ 0         ✗ 0    
     vus............................: 100     min=100     max=100
     vus_max........................: 100     min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/cffef7ce-3bdb-478c-7fda-a26e645f5700/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a920e3d1-25ce-45b0-d5ba-b78de8820c00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 6115 / ✗ 2
     ✓ expected_result

     checks.........................: 99.98% ✓ 18349      ✗ 2    
     data_received..................: 31 MB  501 kB/s
     data_sent......................: 7.3 MB 119 kB/s
   ✓ expected_result................: 0.00%  ✓ 0          ✗ 0    
     http_req_blocked...............: avg=159.87µs min=1.1µs    med=2.29µs   max=21.27ms p(90)=3.1µs   p(95)=4.1µs 
     http_req_connecting............: avg=155.99µs min=0s       med=0s       max=21.07ms p(90)=0s      p(95)=0s    
     http_req_duration..............: avg=990.7ms  min=102.03ms med=892.72ms max=3.58s   p(90)=1.55s   p(95)=1.84s 
       { expected_response:true }...: avg=990.7ms  min=102.03ms med=892.72ms max=3.58s   p(90)=1.55s   p(95)=1.84s 
   ✓ http_req_failed................: 0.00%  ✓ 0          ✗ 6117 
     http_req_receiving.............: avg=55.42µs  min=17.9µs   med=47.5µs   max=12.98ms p(90)=71.4µs  p(95)=78.1µs
     http_req_sending...............: avg=61.62µs  min=6.7µs    med=13.6µs   max=11.75ms p(90)=27.14µs p(95)=32.3µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s      p(90)=0s      p(95)=0s    
     http_req_waiting...............: avg=990.59ms min=101.95ms med=892.58ms max=3.58s   p(90)=1.55s   p(95)=1.84s 
     http_reqs......................: 6117   100.487313/s
     iteration_duration.............: avg=991.2ms  min=102.3ms  med=893.31ms max=3.58s   p(90)=1.55s   p(95)=1.84s 
     iterations.....................: 6117   100.487313/s
   ✓ no_errors......................: 0.00%  ✓ 0          ✗ 0    
     vus............................: 100    min=100      max=100
     vus_max........................: 100    min=100      max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7077a794-bc6e-4d2b-e7d1-373344dde000/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c37647e9-b55f-47fd-106c-b415bdf89200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 14226     ✗ 0    
     data_received..................: 24 MB   394 kB/s
     data_sent......................: 5.6 MB  93 kB/s
   ✓ expected_result................: 0.00%   ✓ 0         ✗ 0    
     http_req_blocked...............: avg=180.23µs min=1.4µs    med=2.7µs  max=25.34ms p(90)=3.9µs   p(95)=11.58µs
     http_req_connecting............: avg=173.87µs min=0s       med=0s     max=25.29ms p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=1.27s    min=414.41ms med=1.22s  max=4.63s   p(90)=1.39s   p(95)=1.61s  
       { expected_response:true }...: avg=1.27s    min=414.41ms med=1.22s  max=4.63s   p(90)=1.39s   p(95)=1.61s  
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 4742 
     http_req_receiving.............: avg=71.11µs  min=19.59µs  med=68.4µs max=10.56ms p(90)=87.6µs  p(95)=92.8µs 
     http_req_sending...............: avg=127.78µs min=7.1µs    med=17.2µs max=20.45ms p(90)=31.89µs p(95)=36.1µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=1.27s    min=412.16ms med=1.22s  max=4.63s   p(90)=1.39s   p(95)=1.6s   
     http_reqs......................: 4742    78.265899/s
     iteration_duration.............: avg=1.27s    min=432.49ms med=1.22s  max=4.63s   p(90)=1.39s   p(95)=1.61s  
     iterations.....................: 4742    78.265899/s
   ✓ no_errors......................: 0.00%   ✓ 0         ✗ 0    
     vus............................: 100     min=100     max=100
     vus_max........................: 100     min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/80ad89a0-8470-450c-233b-1dc76edd5b00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f9e8bbc3-f9fa-4b5f-934d-f6ee3b1cc600/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 13476     ✗ 0    
     data_received..................: 22 MB   367 kB/s
     data_sent......................: 5.3 MB  87 kB/s
   ✓ expected_result................: 0.00%   ✓ 0         ✗ 0    
     http_req_blocked...............: avg=474.94µs min=1µs      med=1.9µs  max=47.42ms p(90)=3.3µs   p(95)=5.5µs   
     http_req_connecting............: avg=456.17µs min=0s       med=0s     max=47.39ms p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=1.35s    min=467.21ms med=1.25s  max=4.01s   p(90)=1.96s   p(95)=2.24s   
       { expected_response:true }...: avg=1.35s    min=467.21ms med=1.25s  max=4.01s   p(90)=1.96s   p(95)=2.24s   
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 4492 
     http_req_receiving.............: avg=328.14µs min=18.3µs   med=32.8µs max=47.33ms p(90)=79.77µs p(95)=248.89µs
     http_req_sending...............: avg=197.48µs min=7.1µs    med=11.2µs max=52.88ms p(90)=30.79µs p(95)=157.63µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=1.34s    min=467.16ms med=1.25s  max=4s      p(90)=1.96s   p(95)=2.24s   
     http_reqs......................: 4492    73.644632/s
     iteration_duration.............: avg=1.35s    min=467.47ms med=1.25s  max=4.03s   p(90)=1.96s   p(95)=2.24s   
     iterations.....................: 4492    73.644632/s
   ✓ no_errors......................: 0.00%   ✓ 0         ✗ 0    
     vus............................: 65      min=65      max=100
     vus_max........................: 100     min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/03db2f74-c00d-40cf-9876-48267e90ce00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/fd79ce9a-972a-4487-8015-d57222347000/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  99% — ✓ 3961 / ✗ 1
     ✗ no_errors
      ↳  99% — ✓ 3949 / ✗ 13
     ✓ expected_result

     checks.........................: 99.88% ✓ 11871     ✗ 14   
     data_received..................: 20 MB  335 kB/s
     data_sent......................: 4.7 MB 77 kB/s
   ✓ expected_result................: 0.00%  ✓ 0         ✗ 0    
     http_req_blocked...............: avg=117.51µs min=1µs      med=2.1µs  max=20.73ms p(90)=3.1µs   p(95)=6.18µs 
     http_req_connecting............: avg=113.08µs min=0s       med=0s     max=20.57ms p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=1.52s    min=674.45ms med=1.4s   max=17.96s  p(90)=1.61s   p(95)=1.72s  
       { expected_response:true }...: avg=1.52s    min=674.45ms med=1.4s   max=17.96s  p(90)=1.61s   p(95)=1.72s  
   ✓ http_req_failed................: 0.02%  ✓ 1         ✗ 3961 
     http_req_receiving.............: avg=56.58µs  min=21.3µs   med=52.3µs max=3.26ms  p(90)=75.39µs p(95)=81µs   
     http_req_sending...............: avg=52.05µs  min=6.8µs    med=13.1µs max=7.56ms  p(90)=27.5µs  p(95)=32.89µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=1.52s    min=674.36ms med=1.4s   max=17.96s  p(90)=1.61s   p(95)=1.72s  
     http_reqs......................: 3962   65.178648/s
     iteration_duration.............: avg=1.52s    min=674.83ms med=1.4s   max=17.96s  p(90)=1.61s   p(95)=1.72s  
     iterations.....................: 3962   65.178648/s
   ✓ no_errors......................: 0.00%  ✓ 0         ✗ 0    
     vus............................: 100    min=100     max=100
     vus_max........................: 100    min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9bc5c89a-2426-4c1c-5367-785210292900/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/50bb1f64-afc6-4532-1d64-e513d74d9000/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 3834 / ✗ 9
     ✗ expected_result
      ↳  99% — ✓ 3842 / ✗ 1

     checks.........................: 99.91% ✓ 11519     ✗ 10   
     data_received..................: 19 MB  315 kB/s
     data_sent......................: 4.6 MB 75 kB/s
   ✓ expected_result................: 0.00%  ✓ 0         ✗ 0    
     http_req_blocked...............: avg=345.44µs min=1.2µs   med=2µs    max=25.93ms p(90)=3.2µs    p(95)=11.28µs 
     http_req_connecting............: avg=337µs    min=0s      med=0s     max=25.82ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=1.57s    min=1.03s   med=1.5s   max=3.11s   p(90)=1.86s    p(95)=2.16s   
       { expected_response:true }...: avg=1.57s    min=1.03s   med=1.5s   max=3.11s   p(90)=1.86s    p(95)=2.16s   
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 3843 
     http_req_receiving.............: avg=121.15µs min=20.29µs med=51.9µs max=16.27ms p(90)=245.96µs p(95)=293.84µs
     http_req_sending...............: avg=164.47µs min=8.5µs   med=11.9µs max=15.1ms  p(90)=25.2µs   p(95)=30.18µs 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=1.57s    min=1.03s   med=1.5s   max=3.11s   p(90)=1.86s    p(95)=2.16s   
     http_reqs......................: 3843   62.926928/s
     iteration_duration.............: avg=1.57s    min=1.03s   med=1.5s   max=3.11s   p(90)=1.86s    p(95)=2.16s   
     iterations.....................: 3843   62.926928/s
   ✓ no_errors......................: 0.00%  ✓ 0         ✗ 0    
     vus............................: 14     min=14      max=100
     vus_max........................: 100    min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1a846fad-4013-48d0-46c6-e5efe8ab2400/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4a069df2-f83d-48d2-6029-8dd51e43ec00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  99% — ✓ 3564 / ✗ 1
     ✗ no_errors
      ↳  99% — ✓ 3543 / ✗ 22
     ✗ expected_result
      ↳  99% — ✓ 3560 / ✗ 4

     checks.........................: 99.74% ✓ 10667     ✗ 27   
     data_received..................: 18 MB  294 kB/s
     data_sent......................: 4.2 MB 70 kB/s
   ✓ expected_result................: 0.00%  ✓ 0         ✗ 0    
     http_req_blocked...............: avg=81.14µs min=1.3µs    med=2.4µs  max=9.63ms  p(90)=4.1µs   p(95)=9µs    
     http_req_connecting............: avg=75.41µs min=0s       med=0s     max=9.51ms  p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=1.69s   min=701.31ms med=1.56s  max=18.97s  p(90)=1.76s   p(95)=1.91s  
       { expected_response:true }...: avg=1.69s   min=701.31ms med=1.56s  max=18.97s  p(90)=1.76s   p(95)=1.91s  
   ✓ http_req_failed................: 0.02%  ✓ 1         ✗ 3564 
     http_req_receiving.............: avg=68.11µs min=23.6µs   med=56.3µs max=6.49ms  p(90)=82.7µs  p(95)=91.82µs
     http_req_sending...............: avg=42.37µs min=8.9µs    med=13.8µs max=17.59ms p(90)=28.06µs p(95)=35.65µs
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s     max=0s      p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=1.69s   min=701.22ms med=1.56s  max=18.97s  p(90)=1.76s   p(95)=1.91s  
     http_reqs......................: 3565   58.534991/s
     iteration_duration.............: avg=1.69s   min=701.58ms med=1.56s  max=18.97s  p(90)=1.76s   p(95)=1.91s  
     iterations.....................: 3565   58.534991/s
   ✓ no_errors......................: 0.00%  ✓ 0         ✗ 0    
     vus............................: 100    min=100     max=100
     vus_max........................: 100    min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0bef2ea6-fcb2-4600-81d1-fecbcfe95a00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8f9a24df-bd8b-48dc-8dd8-63a995c6f200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-deno`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 3426 / ✗ 8
     ✓ expected_result

     checks.........................: 99.92% ✓ 10294     ✗ 8    
     data_received..................: 17 MB  286 kB/s
     data_sent......................: 4.1 MB 68 kB/s
   ✓ expected_result................: 0.00%  ✓ 0         ✗ 0    
     http_req_blocked...............: avg=194.06µs min=900ns    med=2.29µs max=19.6ms  p(90)=4.3µs   p(95)=12.63µs 
     http_req_connecting............: avg=180.84µs min=0s       med=0s     max=19.56ms p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=1.75s    min=620.56ms med=1.69s  max=3.15s   p(90)=1.99s   p(95)=2.39s   
       { expected_response:true }...: avg=1.75s    min=620.56ms med=1.69s  max=3.15s   p(90)=1.99s   p(95)=2.39s   
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 3434 
     http_req_receiving.............: avg=92.83µs  min=17.7µs   med=40.1µs max=7.63ms  p(90)=94.9µs  p(95)=125.41µs
     http_req_sending...............: avg=55.04µs  min=6.2µs    med=12.5µs max=11.37ms p(90)=30.07µs p(95)=111.61µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=1.75s    min=620.51ms med=1.69s  max=3.15s   p(90)=1.99s   p(95)=2.39s   
     http_reqs......................: 3434   56.826264/s
     iteration_duration.............: avg=1.75s    min=620.86ms med=1.69s  max=3.16s   p(90)=1.99s   p(95)=2.39s   
     iterations.....................: 3434   56.826264/s
   ✓ no_errors......................: 0.00%  ✓ 0         ✗ 0    
     vus............................: 100    min=100     max=100
     vus_max........................: 100    min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/39b4881a-fcc6-40ff-8344-1b7e4d325000/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8899e627-4c17-41ff-5786-685374eeca00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  99% — ✓ 2607 / ✗ 1
     ✗ no_errors
      ↳  99% — ✓ 2585 / ✗ 23
     ✓ expected_result

     checks.........................: 99.69% ✓ 7799      ✗ 24   
     data_received..................: 13 MB  216 kB/s
     data_sent......................: 3.1 MB 51 kB/s
   ✓ expected_result................: 0.00%  ✓ 0         ✗ 0    
     http_req_blocked...............: avg=256.81µs min=1.2µs  med=2.8µs  max=14.78ms p(90)=4.8µs    p(95)=17.81µs 
     http_req_connecting............: avg=248.05µs min=0s     med=0s     max=14.75ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=2.32s    min=1.11s  med=2.07s  max=21.53s  p(90)=2.65s    p(95)=3s      
       { expected_response:true }...: avg=2.32s    min=1.11s  med=2.07s  max=21.53s  p(90)=2.65s    p(95)=3s      
   ✓ http_req_failed................: 0.03%  ✓ 1         ✗ 2607 
     http_req_receiving.............: avg=77.81µs  min=22.3µs med=70.4µs max=5.23ms  p(90)=101.63µs p(95)=114.72µs
     http_req_sending...............: avg=46.94µs  min=8.2µs  med=18.2µs max=9.83ms  p(90)=34.1µs   p(95)=96.8µs  
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=2.32s    min=1.11s  med=2.07s  max=21.53s  p(90)=2.65s    p(95)=3s      
     http_reqs......................: 2608   42.719741/s
     iteration_duration.............: avg=2.32s    min=1.12s  med=2.07s  max=21.54s  p(90)=2.65s    p(95)=3s      
     iterations.....................: 2608   42.719741/s
   ✓ no_errors......................: 0.00%  ✓ 0         ✗ 0    
     vus............................: 31     min=31      max=100
     vus_max........................: 100    min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/257270d7-ab63-4f22-7a60-722c2fa0f100/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/77eca5a8-ffa2-43c4-bb4e-3eda68dad400/public" alt="HTTP Overview" />


  </details>