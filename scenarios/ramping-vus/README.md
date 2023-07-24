## Overview for scenario: `ramping-vus`


This scenario runs 4 servics and a GraphQL gateway with Federation spec, and runs a heavy query. We are running a heavy load of concurrent VUs to measure response time and other stats, during stress. It measure things like memory usage, CPU usage, response times. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was trying to reach 1000 concurrent VUs over 60s


### Comparison


| Gateway                             | duration(p95)⬇️ |  RPS  |       Requests        |                       Durations                        |
| :---------------------------------- | :-------------: | :---: | :-------------------: | :----------------------------------------------------: |
| wundergraph                         |     1115ms      |  873  | 61178 total, 0 failed |    avg: 560ms, p95: 1115ms, max: 2087ms, med: 518ms    |
| mesh                                |     10011ms     |  93   | 6559 total, 0 failed  |  avg: 5791ms, p95: 10011ms, max: 13776ms, med: 5768ms  |
| apollo-router                       |     13443ms     |  94   | 6976 total, 0 failed  |  avg: 5839ms, p95: 13444ms, max: 21469ms, med: 5114ms  |
| stitching-federation-with-yoga-deno |     15612ms     |  58   | 4093 total, 0 failed  | avg: 9588ms, p95: 15612ms, max: 16737ms, med: 10250ms  |
| mercurius                           |     15892ms     |  53   | 3774 total, 0 failed  | avg: 10028ms, p95: 15893ms, max: 16543ms, med: 10279ms |
| stitching-federation-with-yoga-bun  |     17100ms     |  79   | 5707 total, 0 failed  |  avg: 7277ms, p95: 17101ms, max: 24346ms, med: 6959ms  |
| apollo-gateway-with-yoga            |     27564ms     |  61   | 4369 total, 0 failed  |  avg: 8998ms, p95: 27565ms, max: 36457ms, med: 4740ms  |
| stitching-federation-with-yoga      |     43797ms     |  27   | 2300 total, 0 failed  | avg: 21064ms, p95: 43798ms, max: 51863ms, med: 17886ms |
| apollo-server                       |     46724ms     |  62   | 5346 total, 0 failed  |  avg: 8284ms, p95: 46725ms, max: 57264ms, med: 2314ms  |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 183534     ✗ 0     
     data_received..................: 297 MB  4.2 MB/s
     data_sent......................: 73 MB   1.0 MB/s
     http_req_blocked...............: avg=900.51µs min=900ns  med=2.2µs    max=661.53ms p(90)=3.8µs    p(95)=6.4µs  
     http_req_connecting............: avg=889.44µs min=0s     med=0s       max=661.45ms p(90)=0s       p(95)=0s     
     http_req_duration..............: avg=560.02ms min=6.38ms med=517.51ms max=2.08s    p(90)=994.33ms p(95)=1.11s  
       { expected_response:true }...: avg=560.02ms min=6.38ms med=517.51ms max=2.08s    p(90)=994.33ms p(95)=1.11s  
     http_req_failed................: 0.00%   ✓ 0          ✗ 61178 
     http_req_receiving.............: avg=905.35µs min=16.9µs med=39.4µs   max=615.4ms  p(90)=216.05µs p(95)=441.9µs
     http_req_sending...............: avg=832.1µs  min=6.8µs  med=12.6µs   max=570.5ms  p(90)=36µs     p(95)=129.3µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s       max=0s       p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=558.28ms min=5.96ms med=516.02ms max=2.08s    p(90)=990.92ms p(95)=1.11s  
     http_reqs......................: 61178   873.904097/s
     iteration_duration.............: avg=564.12ms min=6.68ms med=520.54ms max=2.09s    p(90)=1s       p(95)=1.13s  
     iterations.....................: 61178   873.904097/s
     vus............................: 9       min=9        max=997 
     vus_max........................: 1000    min=1000     max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a345ffae-1d49-49c3-8ce3-7914519a0a00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9f1c89bd-a919-43ec-5b64-5ca963d92a00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 6518 / ✗ 41
     ✓ expected_result

     checks.........................: 99.79% ✓ 19636     ✗ 41    
     data_received..................: 33 MB  473 kB/s
     data_sent......................: 7.8 MB 111 kB/s
     http_req_blocked...............: avg=86.74µs min=1µs     med=2.1µs  max=15.35ms p(90)=382.57µs p(95)=429.9µs 
     http_req_connecting............: avg=75.11µs min=0s      med=0s     max=15.29ms p(90)=319.13µs p(95)=365.29µs
     http_req_duration..............: avg=5.79s   min=13.37ms med=5.76s  max=13.77s  p(90)=9.17s    p(95)=10.01s  
       { expected_response:true }...: avg=5.79s   min=13.37ms med=5.76s  max=13.77s  p(90)=9.17s    p(95)=10.01s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 6559  
     http_req_receiving.............: avg=52.21µs min=18.39µs med=45.2µs max=1.33ms  p(90)=73.51µs  p(95)=82.7µs  
     http_req_sending...............: avg=32µs    min=6.4µs   med=13.1µs max=24.14ms p(90)=56.4µs   p(95)=71.79µs 
     http_req_tls_handshaking.......: avg=0s      min=0s      med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=5.79s   min=13.3ms  med=5.76s  max=13.77s  p(90)=9.17s    p(95)=10.01s  
     http_reqs......................: 6559   93.694932/s
     iteration_duration.............: avg=5.79s   min=13.68ms med=5.76s  max=13.77s  p(90)=9.17s    p(95)=10.01s  
     iterations.....................: 6559   93.694932/s
     vus............................: 7      min=7       max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/dde12691-82c1-4544-21ab-21500fe26b00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8acd0905-eb8e-4ad0-6930-0ba611778b00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 6963 / ✗ 13
     ✗ expected_result
      ↳  99% — ✓ 6974 / ✗ 2

     checks.........................: 99.92% ✓ 20913     ✗ 15    
     data_received..................: 35 MB  469 kB/s
     data_sent......................: 8.3 MB 112 kB/s
     http_req_blocked...............: avg=95.61µs min=1µs     med=2.5µs  max=24.34ms p(90)=381.02µs p(95)=457.45µs
     http_req_connecting............: avg=82.22µs min=0s      med=0s     max=24.27ms p(90)=313µs    p(95)=386.02µs
     http_req_duration..............: avg=5.83s   min=96.01ms med=5.11s  max=21.46s  p(90)=10.18s   p(95)=13.44s  
       { expected_response:true }...: avg=5.83s   min=96.01ms med=5.11s  max=21.46s  p(90)=10.18s   p(95)=13.44s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 6976  
     http_req_receiving.............: avg=68.43µs min=22.5µs  med=58.3µs max=5.87ms  p(90)=95.7µs   p(95)=107.9µs 
     http_req_sending...............: avg=33.93µs min=7µs     med=14.6µs max=5.65ms  p(90)=58.6µs   p(95)=71.97µs 
     http_req_tls_handshaking.......: avg=0s      min=0s      med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=5.83s   min=95.93ms med=5.11s  max=21.46s  p(90)=10.18s   p(95)=13.44s  
     http_reqs......................: 6976   94.124196/s
     iteration_duration.............: avg=5.83s   min=96.33ms med=5.11s  max=21.46s  p(90)=10.18s   p(95)=13.44s  
     iterations.....................: 6976   94.124196/s
     vus............................: 81     min=56      max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/29c874b0-1d3e-4cba-13ff-813da4fc7f00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/328099bb-5337-41e9-cd97-f70bed478600/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-deno`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 4092 / ✗ 1
     ✓ expected_result

     checks.........................: 99.99% ✓ 12278     ✗ 1     
     data_received..................: 21 MB  292 kB/s
     data_sent......................: 4.9 MB 69 kB/s
     http_req_blocked...............: avg=187.97µs min=1µs      med=2.29µs max=17.6ms  p(90)=411.16µs p(95)=460.7µs 
     http_req_connecting............: avg=168.51µs min=0s       med=0s     max=17.44ms p(90)=343.18µs p(95)=384.56µs
     http_req_duration..............: avg=9.58s    min=185.09ms med=10.25s max=16.73s  p(90)=15.22s   p(95)=15.61s  
       { expected_response:true }...: avg=9.58s    min=185.09ms med=10.25s max=16.73s  p(90)=15.22s   p(95)=15.61s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 4093  
     http_req_receiving.............: avg=78.87µs  min=15.7µs   med=38.9µs max=7.59ms  p(90)=86.4µs   p(95)=121.48µs
     http_req_sending...............: avg=48.41µs  min=6.2µs    med=14.7µs max=11.14ms p(90)=73.6µs   p(95)=90.3µs  
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=9.58s    min=185.02ms med=10.25s max=16.73s  p(90)=15.22s   p(95)=15.61s  
     http_reqs......................: 4093   58.356651/s
     iteration_duration.............: avg=9.58s    min=185.39ms med=10.25s max=16.73s  p(90)=15.22s   p(95)=15.61s  
     iterations.....................: 4093   58.356651/s
     vus............................: 356    min=56      max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e6654908-038d-448a-fea3-bbe4e4515c00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/14c16c07-d289-488f-f346-73931809c300/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 11322     ✗ 0     
     data_received..................: 19 MB   271 kB/s
     data_sent......................: 4.5 MB  64 kB/s
     http_req_blocked...............: avg=260.09µs min=1.4µs   med=3.5µs  max=18.38ms p(90)=603.33µs p(95)=734.81µs
     http_req_connecting............: avg=230.55µs min=0s      med=0s     max=18.11ms p(90)=498.43µs p(95)=622.97µs
     http_req_duration..............: avg=10.02s   min=10.49ms med=10.27s max=16.54s  p(90)=15.33s   p(95)=15.89s  
       { expected_response:true }...: avg=10.02s   min=10.49ms med=10.27s max=16.54s  p(90)=15.33s   p(95)=15.89s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 3774  
     http_req_receiving.............: avg=96.62µs  min=29.6µs  med=81µs   max=3.35ms  p(90)=142.09µs p(95)=169.43µs
     http_req_sending...............: avg=71.97µs  min=10.1µs  med=24.2µs max=9.87ms  p(90)=100.29µs p(95)=140.54µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=10.02s   min=10.43ms med=10.27s max=16.54s  p(90)=15.33s   p(95)=15.89s  
     http_reqs......................: 3774    53.913466/s
     iteration_duration.............: avg=10.02s   min=10.95ms med=10.27s max=16.54s  p(90)=15.33s   p(95)=15.89s  
     iterations.....................: 3774    53.913466/s
     vus............................: 9       min=9       max=1000
     vus_max........................: 1000    min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/fff9562f-7839-4ee5-8549-b77d772c4f00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/55fc2bef-7d51-47e2-646c-7a85f6181900/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 17121     ✗ 0     
     data_received..................: 28 MB   396 kB/s
     data_sent......................: 6.8 MB  94 kB/s
     http_req_blocked...............: avg=548.87µs min=1.1µs    med=2µs    max=254.4ms  p(90)=192.74µs p(95)=453.74µs
     http_req_connecting............: avg=533.86µs min=0s       med=0s     max=254.27ms p(90)=129.3µs  p(95)=383.37µs
     http_req_duration..............: avg=7.27s    min=897.91ms med=6.95s  max=24.34s   p(90)=15.39s   p(95)=17.1s   
       { expected_response:true }...: avg=7.27s    min=897.91ms med=6.95s  max=24.34s   p(90)=15.39s   p(95)=17.1s   
     http_req_failed................: 0.00%   ✓ 0         ✗ 5707  
     http_req_receiving.............: avg=246.5µs  min=16.89µs  med=39.7µs max=213.12ms p(90)=111.48µs p(95)=240.34µs
     http_req_sending...............: avg=256.03µs min=7.1µs    med=11.7µs max=190.12ms p(90)=82.54µs  p(95)=130.04µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=7.27s    min=897.8ms  med=6.95s  max=24.34s   p(90)=15.39s   p(95)=17.1s   
     http_reqs......................: 5707    79.386914/s
     iteration_duration.............: avg=7.27s    min=898.36ms med=6.95s  max=24.35s   p(90)=15.39s   p(95)=17.1s   
     iterations.....................: 5707    79.386914/s
     vus............................: 165     min=56      max=1000
     vus_max........................: 1000    min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3f48fc7d-43e4-4ea6-1f10-cb07f9c41500/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6d9730cc-e143-42f7-5583-1e9ff04ea000/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  76% — ✓ 3364 / ✗ 1005
     ✗ expected_result
      ↳  94% — ✓ 4141 / ✗ 228

     checks.........................: 90.59% ✓ 11874     ✗ 1233  
     data_received..................: 20 MB  281 kB/s
     data_sent......................: 5.2 MB 73 kB/s
     http_req_blocked...............: avg=124.29µs min=1.2µs    med=2.7µs  max=16.2ms  p(90)=448.03µs p(95)=497.15µs
     http_req_connecting............: avg=105.05µs min=0s       med=0s     max=16.11ms p(90)=376.14µs p(95)=417.61µs
     http_req_duration..............: avg=8.99s    min=214.3ms  med=4.73s  max=36.45s  p(90)=24.97s   p(95)=27.56s  
       { expected_response:true }...: avg=8.99s    min=214.3ms  med=4.73s  max=36.45s  p(90)=24.97s   p(95)=27.56s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 4369  
     http_req_receiving.............: avg=69.83µs  min=17.4µs   med=56.9µs max=8.4ms   p(90)=87.9µs   p(95)=98.86µs 
     http_req_sending...............: avg=37.15µs  min=7.8µs    med=16.7µs max=7.7ms   p(90)=73.82µs  p(95)=87.26µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=8.99s    min=214.2ms  med=4.73s  max=36.45s  p(90)=24.97s   p(95)=27.56s  
     http_reqs......................: 4369   61.112279/s
     iteration_duration.............: avg=8.99s    min=214.64ms med=4.74s  max=36.45s  p(90)=24.97s   p(95)=27.56s  
     iterations.....................: 4369   61.112279/s
     vus............................: 57     min=54      max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a2a2f0f2-c48c-4783-6eaf-d231bdf58800/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/86b5ad5f-d769-452b-bcbe-374cd7842100/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  56% — ✓ 1300 / ✗ 1000
     ✗ expected_result
      ↳  86% — ✓ 1978 / ✗ 322

     checks.........................: 80.84% ✓ 5578      ✗ 1322  
     data_received..................: 16 MB  191 kB/s
     data_sent......................: 2.7 MB 32 kB/s
     http_req_blocked...............: avg=320.19µs min=1.9µs  med=5.2µs   max=16.97ms p(90)=691.26µs p(95)=822.06µs
     http_req_connecting............: avg=269.91µs min=0s     med=0s      max=16.89ms p(90)=590.21µs p(95)=707.81µs
     http_req_duration..............: avg=21.06s   min=2.9s   med=17.88s  max=51.86s  p(90)=40.85s   p(95)=43.79s  
       { expected_response:true }...: avg=21.06s   min=2.9s   med=17.88s  max=51.86s  p(90)=40.85s   p(95)=43.79s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 2300  
     http_req_receiving.............: avg=132.29µs min=21.3µs med=88.3µs  max=17.16ms p(90)=176.9µs  p(95)=232.66µs
     http_req_sending...............: avg=86.07µs  min=13.3µs med=42.55µs max=9.88ms  p(90)=121.32µs p(95)=167.7µs 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=21.06s   min=2.9s   med=17.88s  max=51.86s  p(90)=40.85s   p(95)=43.79s  
     http_reqs......................: 2300   27.315462/s
     iteration_duration.............: avg=21.06s   min=2.91s  med=17.88s  max=51.86s  p(90)=40.85s   p(95)=43.79s  
     iterations.....................: 2300   27.315462/s
     vus............................: 22     min=22      max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4bb071a0-0ac1-4614-bea2-79dfd78f3e00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f98c6ee4-fdac-462d-09d9-99cc59511f00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 5324 / ✗ 22
     ✗ expected_result
      ↳  99% — ✓ 5335 / ✗ 11

     checks.........................: 99.79% ✓ 16005     ✗ 33    
     data_received..................: 28 MB  323 kB/s
     data_sent......................: 6.3 MB 75 kB/s
     http_req_blocked...............: avg=110.22µs min=1.1µs   med=2.29µs max=20.48ms p(90)=350.6µs  p(95)=416.02µs
     http_req_connecting............: avg=96.67µs  min=0s      med=0s     max=20.42ms p(90)=288.65µs p(95)=347.75µs
     http_req_duration..............: avg=8.28s    min=63.38ms med=2.31s  max=57.26s  p(90)=36.14s   p(95)=46.72s  
       { expected_response:true }...: avg=8.28s    min=63.38ms med=2.31s  max=57.26s  p(90)=36.14s   p(95)=46.72s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 5346  
     http_req_receiving.............: avg=60.28µs  min=19.4µs  med=56.2µs max=1.05ms  p(90)=86.5µs   p(95)=93.67µs 
     http_req_sending...............: avg=39.05µs  min=7.2µs   med=14.3µs max=4.78ms  p(90)=59µs     p(95)=71.67µs 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=8.28s    min=63.32ms med=2.31s  max=57.26s  p(90)=36.14s   p(95)=46.72s  
     http_reqs......................: 5346   62.737761/s
     iteration_duration.............: avg=8.28s    min=63.65ms med=2.31s  max=57.26s  p(90)=36.14s   p(95)=46.72s  
     iterations.....................: 5346   62.737761/s
     vus............................: 3      min=3       max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/14cf8ef0-6cd1-4fa9-1e3c-b560e0c11f00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/12642e49-74b8-4e7b-108a-784bf49a5800/public" alt="HTTP Overview" />


  </details>