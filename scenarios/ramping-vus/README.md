## Overview for scenario: `ramping-vus`


This scenario runs 4 servics and a GraphQL gateway with Federation spec, and runs a heavy query. We are running a heavy load of concurrent VUs to measure response time and other stats, during stress. It measure things like memory usage, CPU usage, response times. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was trying to reach 1000 concurrent VUs over 60s


### Comparison


| Gateway                             | duration(p95)⬇️ |  RPS  |        Requests        |                       Durations                        |
| :---------------------------------- | :-------------: | :---: | :--------------------: | :----------------------------------------------------: |
| wundergraph                         |      834ms      | 1221  | 85491 total, 0 failed  |    avg: 401ms, p95: 834ms, max: 1476ms, med: 373ms     |
| mercurius                           |     14409ms     |  64   |  4543 total, 0 failed  |  avg: 8166ms, p95: 14409ms, max: 14825ms, med: 8156ms  |
| stitching-federation-with-yoga-deno |     15737ms     |  56   |  3967 total, 0 failed  | avg: 10063ms, p95: 15738ms, max: 17738ms, med: 10996ms |
| apollo-router                       |     22128ms     |  76   |  5527 total, 0 failed  |  avg: 7104ms, p95: 22129ms, max: 35309ms, med: 5066ms  |
| stitching-federation-with-yoga-bun  |     24957ms     |  53   |  4202 total, 0 failed  | avg: 11054ms, p95: 24958ms, max: 32453ms, med: 9572ms  |
| apollo-server                       |     26034ms     |  61   | 4616 total, 12 failed  |  avg: 9356ms, p95: 26035ms, max: 36861ms, med: 5145ms  |
| apollo-gateway-with-yoga            |     26274ms     |  56   | 3987 total, 140 failed | avg: 10066ms, p95: 26275ms, max: 44575ms, med: 7234ms  |
| mesh                                |     28125ms     |  52   |  4185 total, 0 failed  | avg: 10751ms, p95: 28125ms, max: 40643ms, med: 6878ms  |
| stitching-federation-with-yoga      |     30203ms     |  44   | 3649 total, 172 failed | avg: 12838ms, p95: 30203ms, max: 39746ms, med: 9344ms  |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 256473      ✗ 0     
     data_received..................: 415 MB  5.9 MB/s
     data_sent......................: 102 MB  1.4 MB/s
     http_req_blocked...............: avg=377.99µs min=800ns  med=1.5µs    max=539.74ms p(90)=2.6µs    p(95)=3.5µs   
     http_req_connecting............: avg=372.33µs min=0s     med=0s       max=539.59ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=401.14ms min=4.22ms med=373.12ms max=1.47s    p(90)=733.53ms p(95)=834.06ms
       { expected_response:true }...: avg=401.14ms min=4.22ms med=373.12ms max=1.47s    p(90)=733.53ms p(95)=834.06ms
     http_req_failed................: 0.00%   ✓ 0           ✗ 85491 
     http_req_receiving.............: avg=581.89µs min=14.2µs med=26.2µs   max=293.43ms p(90)=130.6µs  p(95)=246.9µs 
     http_req_sending...............: avg=381.65µs min=5.6µs  med=8.8µs    max=272.09ms p(90)=20.5µs   p(95)=86.9µs  
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=400.18ms min=4.18ms med=372.24ms max=1.42s    p(90)=731.52ms p(95)=830.16ms
     http_reqs......................: 85491   1221.213884/s
     iteration_duration.............: avg=402.79ms min=4.42ms med=374.32ms max=1.67s    p(90)=738.17ms p(95)=839.16ms
     iterations.....................: 85491   1221.213884/s
     vus............................: 6       min=6         max=991 
     vus_max........................: 1000    min=1000      max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6f5ae7b8-b160-418c-06ab-45660ad00c00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9922577c-7c3d-4baa-8cbd-50be1716f700/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 13629    ✗ 0     
     data_received..................: 23 MB   326 kB/s
     data_sent......................: 5.4 MB  77 kB/s
     http_req_blocked...............: avg=159.08µs min=1.4µs   med=3.9µs  max=20.83ms p(90)=520.8µs  p(95)=571.48µs
     http_req_connecting............: avg=134.79µs min=0s      med=0s     max=20.75ms p(90)=433.56µs p(95)=481.06µs
     http_req_duration..............: avg=8.16s    min=14.44ms med=8.15s  max=14.82s  p(90)=13.89s   p(95)=14.4s   
       { expected_response:true }...: avg=8.16s    min=14.44ms med=8.15s  max=14.82s  p(90)=13.89s   p(95)=14.4s   
     http_req_failed................: 0.00%   ✓ 0        ✗ 4543  
     http_req_receiving.............: avg=94.61µs  min=25.9µs  med=89.6µs max=1.07ms  p(90)=126.2µs  p(95)=141.8µs 
     http_req_sending...............: avg=47.57µs  min=8.5µs   med=23.7µs max=15.01ms p(90)=84.4µs   p(95)=104.39µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=8.16s    min=14.3ms  med=8.15s  max=14.82s  p(90)=13.89s   p(95)=14.4s   
     http_reqs......................: 4543    64.89501/s
     iteration_duration.............: avg=8.16s    min=14.9ms  med=8.15s  max=14.82s  p(90)=13.89s   p(95)=14.4s   
     iterations.....................: 4543    64.89501/s
     vus............................: 7       min=7      max=1000
     vus_max........................: 1000    min=1000   max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d884246a-fa95-4c9e-4470-024e47119600/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0f496c88-7c4f-4e30-7bd9-5009b248a400/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-deno`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 3963 / ✗ 4
     ✓ expected_result

     checks.........................: 99.96% ✓ 11897     ✗ 4     
     data_received..................: 20 MB  281 kB/s
     data_sent......................: 4.7 MB 67 kB/s
     http_req_blocked...............: avg=142.91µs min=1.1µs med=2.5µs  max=15.51ms p(90)=419.59µs p(95)=458.38µs
     http_req_connecting............: avg=123.56µs min=0s    med=0s     max=15.45ms p(90)=346.4µs  p(95)=386.25µs
     http_req_duration..............: avg=10.06s   min=1.24s med=10.99s max=17.73s  p(90)=15.34s   p(95)=15.73s  
       { expected_response:true }...: avg=10.06s   min=1.24s med=10.99s max=17.73s  p(90)=15.34s   p(95)=15.73s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 3967  
     http_req_receiving.............: avg=81.39µs  min=15µs  med=40.8µs max=20.47ms p(90)=84.9µs   p(95)=114.77µs
     http_req_sending...............: avg=43.92µs  min=6.4µs med=14.6µs max=17.51ms p(90)=76.54µs  p(95)=98.4µs  
     http_req_tls_handshaking.......: avg=0s       min=0s    med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=10.06s   min=1.24s med=10.99s max=17.73s  p(90)=15.34s   p(95)=15.73s  
     http_reqs......................: 3967   56.003546/s
     iteration_duration.............: avg=10.06s   min=1.24s med=10.99s max=17.73s  p(90)=15.34s   p(95)=15.73s  
     iterations.....................: 3967   56.003546/s
     vus............................: 168    min=57      max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6549162c-80ea-4b6c-3d26-9e0a2d085b00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/03d75fd2-05a6-4b64-2f4a-d341aae4da00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 5525 / ✗ 2
     ✗ expected_result
      ↳  99% — ✓ 5526 / ✗ 1

     checks.........................: 99.98% ✓ 16578     ✗ 3     
     data_received..................: 28 MB  383 kB/s
     data_sent......................: 6.6 MB 91 kB/s
     http_req_blocked...............: avg=122.04µs min=1.6µs    med=2.6µs  max=16.83ms p(90)=426.24µs p(95)=510.78µs
     http_req_connecting............: avg=103.75µs min=0s       med=0s     max=16.77ms p(90)=359.5µs  p(95)=432.97µs
     http_req_duration..............: avg=7.1s     min=129.29ms med=5.06s  max=35.3s   p(90)=17.63s   p(95)=22.12s  
       { expected_response:true }...: avg=7.1s     min=129.29ms med=5.06s  max=35.3s   p(90)=17.63s   p(95)=22.12s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 5527  
     http_req_receiving.............: avg=67.01µs  min=24µs     med=53.4µs max=3.22ms  p(90)=93.94µs  p(95)=114.5µs 
     http_req_sending...............: avg=46.38µs  min=11.29µs  med=15.6µs max=6.4ms   p(90)=59.5µs   p(95)=76.2µs  
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=7.1s     min=129.23ms med=5.06s  max=35.3s   p(90)=17.63s   p(95)=22.12s  
     http_reqs......................: 5527   76.922549/s
     iteration_duration.............: avg=7.1s     min=129.57ms med=5.06s  max=35.31s  p(90)=17.63s   p(95)=22.12s  
     iterations.....................: 5527   76.922549/s
     vus............................: 81     min=56      max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e6ba5eb0-9770-4fb2-9c14-89b15ea16800/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/42235f5d-8c9a-4de4-b603-4c48a3d54900/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 4201 / ✗ 1
     ✓ expected_result

     checks.........................: 99.99% ✓ 12605     ✗ 1     
     data_received..................: 21 MB  267 kB/s
     data_sent......................: 5.0 MB 64 kB/s
     http_req_blocked...............: avg=641.32µs min=1.7µs  med=2.8µs  max=62.12ms p(90)=538.77µs p(95)=657.05µs
     http_req_connecting............: avg=606.11µs min=0s     med=0s     max=62.05ms p(90)=452.41µs p(95)=553.21µs
     http_req_duration..............: avg=11.05s   min=1.34s  med=9.57s  max=32.45s  p(90)=22.82s   p(95)=24.95s  
       { expected_response:true }...: avg=11.05s   min=1.34s  med=9.57s  max=32.45s  p(90)=22.82s   p(95)=24.95s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 4202  
     http_req_receiving.............: avg=306.16µs min=23.6µs med=56µs   max=66.81ms p(90)=244.58µs p(95)=447.57µs
     http_req_sending...............: avg=374.78µs min=10.4µs med=15.3µs max=47.48ms p(90)=104.88µs p(95)=334.66µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=11.05s   min=1.34s  med=9.57s  max=32.45s  p(90)=22.82s   p(95)=24.95s  
     http_reqs......................: 4202   53.623129/s
     iteration_duration.............: avg=11.05s   min=1.34s  med=9.57s  max=32.45s  p(90)=22.82s   p(95)=24.95s  
     iterations.....................: 4202   53.623129/s
     vus............................: 167    min=51      max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5f6a6336-886e-477b-b791-3eefecc93000/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8840a370-6d96-4580-1db8-841ef7fc3800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  99% — ✓ 4604 / ✗ 12
     ✗ no_errors
      ↳  81% — ✓ 3760 / ✗ 856
     ✗ expected_result
      ↳  95% — ✓ 4413 / ✗ 191

     checks.........................: 92.34% ✓ 12777     ✗ 1059  
     data_received..................: 22 MB  297 kB/s
     data_sent......................: 5.5 MB 73 kB/s
     http_req_blocked...............: avg=178.5µs  min=1.2µs    med=2.5µs  max=22.3ms  p(90)=470.35µs p(95)=516.35µs
     http_req_connecting............: avg=159.92µs min=0s       med=0s     max=22.12ms p(90)=392.35µs p(95)=435.13µs
     http_req_duration..............: avg=9.35s    min=674.05ms med=5.14s  max=36.86s  p(90)=20.86s   p(95)=26.03s  
       { expected_response:true }...: avg=9.37s    min=757.92ms med=5.15s  max=36.86s  p(90)=20.92s   p(95)=26.03s  
     http_req_failed................: 0.25%  ✓ 12        ✗ 4604  
     http_req_receiving.............: avg=77.87µs  min=21.5µs   med=60.2µs max=9.77ms  p(90)=89.85µs  p(95)=102.82µs
     http_req_sending...............: avg=39.11µs  min=8.3µs    med=15.2µs max=7.82ms  p(90)=73.45µs  p(95)=88.4µs  
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=9.35s    min=673.79ms med=5.14s  max=36.86s  p(90)=20.86s   p(95)=26.03s  
     http_reqs......................: 4616   61.258982/s
     iteration_duration.............: avg=9.35s    min=674.86ms med=5.14s  max=36.86s  p(90)=20.86s   p(95)=26.03s  
     iterations.....................: 4616   61.258982/s
     vus............................: 0      min=0       max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b7a22ee3-ef62-46ed-e007-9c4003920d00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a884fd3c-cc23-4997-8b46-7b04e4422700/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  96% — ✓ 3847 / ✗ 140
     ✗ no_errors
      ↳  55% — ✓ 2194 / ✗ 1793
     ✗ expected_result
      ↳  91% — ✓ 3511 / ✗ 336

     checks.........................: 80.80% ✓ 9552      ✗ 2269  
     data_received..................: 16 MB  223 kB/s
     data_sent......................: 4.7 MB 67 kB/s
     http_req_blocked...............: avg=768.33µs min=1.3µs    med=3µs    max=53.22ms p(90)=557.06µs p(95)=1.11ms  
     http_req_connecting............: avg=738.74µs min=0s       med=0s     max=53.14ms p(90)=467.76µs p(95)=932.81µs
     http_req_duration..............: avg=10.06s   min=82.57ms  med=7.23s  max=44.57s  p(90)=21.89s   p(95)=26.27s  
       { expected_response:true }...: avg=10.29s   min=552.92ms med=7.59s  max=44.57s  p(90)=22.38s   p(95)=26.29s  
     http_req_failed................: 3.51%  ✓ 140       ✗ 3847  
     http_req_receiving.............: avg=713.34µs min=16.5µs   med=62.4µs max=79.07ms p(90)=117.42µs p(95)=294.58µs
     http_req_sending...............: avg=156.04µs min=8.5µs    med=20.2µs max=29.77ms p(90)=101.9µs  p(95)=273.43µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=10.06s   min=49.68ms  med=7.23s  max=44.57s  p(90)=21.89s   p(95)=26.27s  
     http_reqs......................: 3987   56.239428/s
     iteration_duration.............: avg=10.07s   min=209.59ms med=7.23s  max=44.57s  p(90)=21.89s   p(95)=26.27s  
     iterations.....................: 3987   56.239428/s
     vus............................: 231    min=52      max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f3c96aa2-443f-4766-9a2c-1b99319a9e00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/51c1ffa7-31b6-4333-284d-8cf7a22ce300/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  81% — ✓ 3422 / ✗ 763
     ✗ expected_result
      ↳  95% — ✓ 3992 / ✗ 193

     checks.........................: 92.38% ✓ 11599     ✗ 956   
     data_received..................: 29 MB  357 kB/s
     data_sent......................: 5.0 MB 62 kB/s
     http_req_blocked...............: avg=158.5µs min=1.1µs  med=2.29µs max=15.15ms p(90)=455.1µs  p(95)=497.45µs
     http_req_connecting............: avg=138.5µs min=0s     med=0s     max=15.09ms p(90)=382.76µs p(95)=420.38µs
     http_req_duration..............: avg=10.75s  min=1.22s  med=6.87s  max=40.64s  p(90)=23.3s    p(95)=28.12s  
       { expected_response:true }...: avg=10.75s  min=1.22s  med=6.87s  max=40.64s  p(90)=23.3s    p(95)=28.12s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 4185  
     http_req_receiving.............: avg=66.19µs min=21.3µs med=50.6µs max=5.08ms  p(90)=100µs    p(95)=142.98µs
     http_req_sending...............: avg=37.5µs  min=8.69µs med=14.1µs max=9.69ms  p(90)=70.9µs   p(95)=84.3µs  
     http_req_tls_handshaking.......: avg=0s      min=0s     med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=10.75s  min=1.22s  med=6.87s  max=40.64s  p(90)=23.3s    p(95)=28.12s  
     http_reqs......................: 4185   52.005629/s
     iteration_duration.............: avg=10.75s  min=1.23s  med=6.87s  max=40.64s  p(90)=23.3s    p(95)=28.12s  
     iterations.....................: 4185   52.005629/s
     vus............................: 68     min=53      max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a0d36fa4-3119-4d79-908e-5b0d29cb0900/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/be5f214b-10d2-4f6e-3280-180c54463c00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  95% — ✓ 3477 / ✗ 172
     ✗ no_errors
      ↳  62% — ✓ 2272 / ✗ 1377
     ✗ expected_result
      ↳  99% — ✓ 3454 / ✗ 23

     checks.........................: 85.41% ✓ 9203      ✗ 1572  
     data_received..................: 22 MB  264 kB/s
     data_sent......................: 4.3 MB 52 kB/s
     http_req_blocked...............: avg=1.63ms   min=1.2µs    med=2.8µs  max=106.7ms  p(90)=517.77µs p(95)=1.52ms  
     http_req_connecting............: avg=1.6ms    min=0s       med=0s     max=106.64ms p(90)=437.54µs p(95)=1.42ms  
     http_req_duration..............: avg=12.83s   min=638.69ms med=9.34s  max=39.74s   p(90)=28.43s   p(95)=30.2s   
       { expected_response:true }...: avg=13.17s   min=2.17s    med=9.49s  max=39.74s   p(90)=28.56s   p(95)=30.27s  
     http_req_failed................: 4.71%  ✓ 172       ✗ 3477  
     http_req_receiving.............: avg=919.06µs min=19.3µs   med=60.6µs max=50.41ms  p(90)=115.62µs p(95)=625.92µs
     http_req_sending...............: avg=203.37µs min=7.8µs    med=18µs   max=43.42ms  p(90)=96.4µs   p(95)=250.84µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=12.83s   min=636.63ms med=9.34s  max=39.74s   p(90)=28.43s   p(95)=30.2s   
     http_reqs......................: 3649   44.131216/s
     iteration_duration.............: avg=12.84s   min=639.99ms med=9.34s  max=39.74s   p(90)=28.43s   p(95)=30.2s   
     iterations.....................: 3649   44.131216/s
     vus............................: 43     min=43      max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/32085e62-2a5f-456a-1480-0f8dabe4cb00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/452500d5-76b0-4ec0-5b53-c24062c5f500/public" alt="HTTP Overview" />


  </details>