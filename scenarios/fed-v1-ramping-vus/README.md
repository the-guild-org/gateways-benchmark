## Overview for: `fed-v1-ramping-vus`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. We are running a heavy load of concurrent VUs to measure response time and other stats, during stress. It measure things like memory usage, CPU usage, response times. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was trying to reach 1000 concurrent VUs over 60s


### Comparison


| Gateway                             | duration(p95)⬇️ |  RPS  |       Requests        |                       Durations                        |
| :---------------------------------- | :-------------: | :---: | :-------------------: | :----------------------------------------------------: |
| wundergraph                         |     1239ms      |  756  | 52939 total, 0 failed |    avg: 652ms, p95: 1240ms, max: 2243ms, med: 642ms    |
| apollo-router                       |     11578ms     |  89   | 6492 total, 0 failed  |  avg: 6204ms, p95: 11578ms, max: 15383ms, med: 5527ms  |
| stitching-federation-with-yoga-deno |     13811ms     |  64   | 4487 total, 0 failed  |  avg: 8643ms, p95: 13811ms, max: 15120ms, med: 9736ms  |
| mercurius                           |     16790ms     |  52   | 3646 total, 0 failed  | avg: 10388ms, p95: 16790ms, max: 17148ms, med: 10562ms |
| mesh                                |     17247ms     |  55   | 4028 total, 0 failed  | avg: 10208ms, p95: 17247ms, max: 24540ms, med: 9703ms  |
| stitching-federation-with-yoga-bun  |     20364ms     |  66   | 4721 total, 0 failed  |  avg: 8160ms, p95: 20364ms, max: 26823ms, med: 7412ms  |
| apollo-gateway-with-yoga            |     34137ms     |  45   | 3577 total, 0 failed  | avg: 12313ms, p95: 34138ms, max: 43782ms, med: 7154ms  |
| stitching-federation-with-yoga      |     42961ms     |  28   | 2562 total, 0 failed  | avg: 19474ms, p95: 42961ms, max: 52258ms, med: 15550ms |
| apollo-server                       |     46138ms     |  63   | 5438 total, 0 failed  |  avg: 8127ms, p95: 46138ms, max: 56757ms, med: 2318ms  |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 158817     ✗ 0     
     data_received..................: 264 MB  3.8 MB/s
     data_sent......................: 63 MB   898 kB/s
     http_req_blocked...............: avg=160.55µs min=1µs    med=2µs      max=171.51ms p(90)=3.4µs   p(95)=4.8µs   
     http_req_connecting............: avg=154.38µs min=0s     med=0s       max=171.36ms p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=652.01ms min=7.49ms med=641.89ms max=2.24s    p(90)=1.1s    p(95)=1.23s   
       { expected_response:true }...: avg=652.01ms min=7.49ms med=641.89ms max=2.24s    p(90)=1.1s    p(95)=1.23s   
     http_req_failed................: 0.00%   ✓ 0          ✗ 52939 
     http_req_receiving.............: avg=439.75µs min=18µs   med=39.4µs   max=209.67ms p(90)=166.6µs p(95)=318.63µs
     http_req_sending...............: avg=224.43µs min=6.4µs  med=11.5µs   max=233.44ms p(90)=24.2µs  p(95)=73µs    
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s       max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=651.34ms min=7.4ms  med=641.31ms max=2.24s    p(90)=1.1s    p(95)=1.23s   
     http_reqs......................: 52939   756.255434/s
     iteration_duration.............: avg=652.71ms min=7.83ms med=642.64ms max=2.24s    p(90)=1.1s    p(95)=1.24s   
     iterations.....................: 52939   756.255434/s
     vus............................: 7       min=7        max=991 
     vus_max........................: 1000    min=1000     max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4bf43a2d-c563-49bf-edcf-3812f596e900/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c5d2e6c3-9278-4033-24b7-53327c053d00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 6478 / ✗ 14
     ✗ expected_result
      ↳  99% — ✓ 6490 / ✗ 2

     checks.........................: 99.91% ✓ 19460    ✗ 16    
     data_received..................: 32 MB  444 kB/s
     data_sent......................: 7.7 MB 106 kB/s
     http_req_blocked...............: avg=93.95µs min=1.3µs    med=2.9µs  max=21.23ms p(90)=424.91µs p(95)=505.57µs
     http_req_connecting............: avg=78.89µs min=0s       med=0s     max=21.16ms p(90)=353.51µs p(95)=424.37µs
     http_req_duration..............: avg=6.2s    min=472.47ms med=5.52s  max=15.38s  p(90)=11.04s   p(95)=11.57s  
       { expected_response:true }...: avg=6.2s    min=472.47ms med=5.52s  max=15.38s  p(90)=11.04s   p(95)=11.57s  
     http_req_failed................: 0.00%  ✓ 0        ✗ 6492  
     http_req_receiving.............: avg=74.7µs  min=21.9µs   med=67.1µs max=4.64ms  p(90)=96µs     p(95)=107.4µs 
     http_req_sending...............: avg=35.1µs  min=8.3µs    med=18µs   max=7.49ms  p(90)=66.7µs   p(95)=84.65µs 
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=6.2s    min=472.19ms med=5.52s  max=15.38s  p(90)=11.04s   p(95)=11.57s  
     http_reqs......................: 6492   89.23319/s
     iteration_duration.............: avg=6.2s    min=474.03ms med=5.52s  max=15.38s  p(90)=11.04s   p(95)=11.57s  
     iterations.....................: 6492   89.23319/s
     vus............................: 116    min=54     max=1000
     vus_max........................: 1000   min=1000   max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a71005fd-60ae-4fe0-697c-f2db9c49f800/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/eed39784-1818-470c-7231-699d311caa00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-deno`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 4479 / ✗ 8
     ✗ expected_result
      ↳  99% — ✓ 4486 / ✗ 1

     checks.........................: 99.93% ✓ 13452    ✗ 9     
     data_received..................: 23 MB  322 kB/s
     data_sent......................: 5.3 MB 76 kB/s
     http_req_blocked...............: avg=124.34µs min=700ns   med=2.2µs  max=17.25ms p(90)=392.58µs p(95)=435.64µs
     http_req_connecting............: avg=106.68µs min=0s      med=0s     max=16.61ms p(90)=322.72µs p(95)=372.38µs
     http_req_duration..............: avg=8.64s    min=14.18ms med=9.73s  max=15.11s  p(90)=13.55s   p(95)=13.81s  
       { expected_response:true }...: avg=8.64s    min=14.18ms med=9.73s  max=15.11s  p(90)=13.55s   p(95)=13.81s  
     http_req_failed................: 0.00%  ✓ 0        ✗ 4487  
     http_req_receiving.............: avg=67.08µs  min=14µs    med=32.9µs max=15.31ms p(90)=78.8µs   p(95)=103.56µs
     http_req_sending...............: avg=36.08µs  min=5.4µs   med=13.5µs max=2.7ms   p(90)=69.2µs   p(95)=83.7µs  
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=8.64s    min=14.11ms med=9.73s  max=15.11s  p(90)=13.55s   p(95)=13.81s  
     http_reqs......................: 4487   64.08548/s
     iteration_duration.............: avg=8.64s    min=14.53ms med=9.73s  max=15.11s  p(90)=13.55s   p(95)=13.81s  
     iterations.....................: 4487   64.08548/s
     vus............................: 8      min=8      max=1000
     vus_max........................: 1000   min=1000   max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/53bf92f0-d065-4c68-5766-8d4a6a7d7500/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b4af31c4-2e8a-4683-f1a3-6f7e0e22ca00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 10938     ✗ 0     
     data_received..................: 18 MB   262 kB/s
     data_sent......................: 4.3 MB  62 kB/s
     http_req_blocked...............: avg=193.21µs min=1.6µs   med=3.8µs  max=14.52ms p(90)=596.45µs p(95)=665.4µs 
     http_req_connecting............: avg=162.81µs min=0s      med=0s     max=14.45ms p(90)=501.75µs p(95)=566.78µs
     http_req_duration..............: avg=10.38s   min=14.32ms med=10.56s max=17.14s  p(90)=16.15s   p(95)=16.79s  
       { expected_response:true }...: avg=10.38s   min=14.32ms med=10.56s max=17.14s  p(90)=16.15s   p(95)=16.79s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 3646  
     http_req_receiving.............: avg=100.26µs min=31.3µs  med=89.2µs max=1.84ms  p(90)=147µs    p(95)=169.2µs 
     http_req_sending...............: avg=58.85µs  min=9.5µs   med=25.8µs max=4.24ms  p(90)=93.4µs   p(95)=124.25µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=10.38s   min=14.22ms med=10.56s max=17.14s  p(90)=16.15s   p(95)=16.79s  
     http_reqs......................: 3646    52.077316/s
     iteration_duration.............: avg=10.38s   min=14.81ms med=10.56s max=17.14s  p(90)=16.15s   p(95)=16.79s  
     iterations.....................: 3646    52.077316/s
     vus............................: 14      min=14      max=1000
     vus_max........................: 1000    min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/611130c5-8d5b-4e0d-c9e9-b3760ba9c300/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6e4d9f75-ea46-48f8-36d2-a6dab0e90800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  97% — ✓ 3936 / ✗ 92
     ✓ expected_result

     checks.........................: 99.23% ✓ 11992     ✗ 92    
     data_received..................: 21 MB  290 kB/s
     data_sent......................: 4.8 MB 65 kB/s
     http_req_blocked...............: avg=198.04µs min=1.8µs  med=3µs    max=21.15ms p(90)=594.9µs  p(95)=694.29µs
     http_req_connecting............: avg=171.8µs  min=0s     med=0s     max=21.06ms p(90)=508.33µs p(95)=603.64µs
     http_req_duration..............: avg=10.2s    min=1.45s  med=9.7s   max=24.54s  p(90)=15.99s   p(95)=17.24s  
       { expected_response:true }...: avg=10.2s    min=1.45s  med=9.7s   max=24.54s  p(90)=15.99s   p(95)=17.24s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 4028  
     http_req_receiving.............: avg=89.63µs  min=28.7µs med=74µs   max=11.43ms p(90)=127.5µs  p(95)=155.6µs 
     http_req_sending...............: avg=50.64µs  min=11.8µs med=20.8µs max=7.34ms  p(90)=82.1µs   p(95)=104.46µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=10.2s    min=1.45s  med=9.7s   max=24.54s  p(90)=15.98s   p(95)=17.24s  
     http_reqs......................: 4028   55.029212/s
     iteration_duration.............: avg=10.2s    min=1.45s  med=9.7s   max=24.54s  p(90)=15.99s   p(95)=17.24s  
     iterations.....................: 4028   55.029212/s
     vus............................: 18     min=18      max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/875275d4-d64c-4657-adfa-a0a8223bcc00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8756c5b4-ae12-42fe-e331-a6680c288400/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 4718 / ✗ 3
     ✗ expected_result
      ↳  99% — ✓ 4718 / ✗ 3

     checks.........................: 99.95% ✓ 14157     ✗ 6     
     data_received..................: 24 MB  333 kB/s
     data_sent......................: 5.6 MB 79 kB/s
     http_req_blocked...............: avg=266.95µs min=1.1µs    med=2.29µs max=117.92ms p(90)=384.9µs p(95)=550.3µs
     http_req_connecting............: avg=246.31µs min=0s       med=0s     max=117.83ms p(90)=299.6µs p(95)=468.8µs
     http_req_duration..............: avg=8.15s    min=729.09ms med=7.41s  max=26.82s   p(90)=15.59s  p(95)=20.36s 
       { expected_response:true }...: avg=8.15s    min=729.09ms med=7.41s  max=26.82s   p(90)=15.59s  p(95)=20.36s 
     http_req_failed................: 0.00%  ✓ 0         ✗ 4721  
     http_req_receiving.............: avg=242.87µs min=21.7µs   med=42.6µs max=89.09ms  p(90)=116.5µs p(95)=240.5µs
     http_req_sending...............: avg=228.34µs min=9.1µs    med=13.8µs max=98.62ms  p(90)=91µs    p(95)=155.3µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=8.15s    min=729.01ms med=7.41s  max=26.82s   p(90)=15.58s  p(95)=20.36s 
     http_reqs......................: 4721   66.906773/s
     iteration_duration.............: avg=8.16s    min=729.38ms med=7.41s  max=26.82s   p(90)=15.59s  p(95)=20.36s 
     iterations.....................: 4721   66.906773/s
     vus............................: 248    min=56      max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b0fe8997-1b97-4f92-fbc2-d668e5b98600/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0344fa53-f03d-49e7-86c4-836f2491f600/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  74% — ✓ 2654 / ✗ 923
     ✗ expected_result
      ↳  94% — ✓ 3372 / ✗ 205

     checks.........................: 89.48% ✓ 9603      ✗ 1128  
     data_received..................: 16 MB  207 kB/s
     data_sent......................: 4.2 MB 55 kB/s
     http_req_blocked...............: avg=279.01µs min=1.6µs    med=2.7µs  max=22.26ms p(90)=550.12µs p(95)=645.5µs 
     http_req_connecting............: avg=249.39µs min=0s       med=0s     max=22.02ms p(90)=460.46µs p(95)=544.43µs
     http_req_duration..............: avg=12.31s   min=831.42ms med=7.15s  max=43.78s  p(90)=29.04s   p(95)=34.13s  
       { expected_response:true }...: avg=12.31s   min=831.42ms med=7.15s  max=43.78s  p(90)=29.04s   p(95)=34.13s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 3577  
     http_req_receiving.............: avg=126.64µs min=27.1µs   med=69.9µs max=36.75ms p(90)=121.04µs p(95)=159.77µs
     http_req_sending...............: avg=60.29µs  min=10.1µs   med=21.8µs max=8.54ms  p(90)=93.04µs  p(95)=126.47µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=12.31s   min=831.33ms med=7.15s  max=43.78s  p(90)=29.04s   p(95)=34.13s  
     http_reqs......................: 3577   45.976734/s
     iteration_duration.............: avg=12.31s   min=831.86ms med=7.15s  max=43.78s  p(90)=29.04s   p(95)=34.13s  
     iterations.....................: 3577   45.976734/s
     vus............................: 21     min=0       max=1000
     vus_max........................: 1000   min=783     max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6c249b07-6e98-4b88-2359-1e527888d300/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b976c87d-6ba8-4da4-d2f6-25a6fc1d0a00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  48% — ✓ 1244 / ✗ 1318
     ✗ expected_result
      ↳  86% — ✓ 2225 / ✗ 337

     checks.........................: 78.46% ✓ 6031      ✗ 1655  
     data_received..................: 19 MB  209 kB/s
     data_sent......................: 3.0 MB 34 kB/s
     http_req_blocked...............: avg=507.5µs  min=1.4µs  med=3.7µs   max=65.33ms p(90)=655.39µs p(95)=771.44µs
     http_req_connecting............: avg=463.62µs min=0s     med=0s      max=64.87ms p(90)=556.26µs p(95)=659.34µs
     http_req_duration..............: avg=19.47s   min=2.5s   med=15.55s  max=52.25s  p(90)=38.01s   p(95)=42.96s  
       { expected_response:true }...: avg=19.47s   min=2.5s   med=15.55s  max=52.25s  p(90)=38.01s   p(95)=42.96s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 2562  
     http_req_receiving.............: avg=122.84µs min=24.5µs med=86.15µs max=15.51ms p(90)=177.39µs p(95)=226.59µs
     http_req_sending...............: avg=148.15µs min=10.6µs med=32.25µs max=20.98ms p(90)=112.69µs p(95)=146.5µs 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=19.47s   min=2.5s   med=15.55s  max=52.25s  p(90)=38.01s   p(95)=42.96s  
     http_reqs......................: 2562   28.841643/s
     iteration_duration.............: avg=19.47s   min=2.51s  med=15.55s  max=52.25s  p(90)=38.01s   p(95)=42.96s  
     iterations.....................: 2562   28.841643/s
     vus............................: 135    min=0       max=1000
     vus_max........................: 1000   min=994     max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1aa3dfe4-9049-42f8-4d53-78884fe4ac00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/52efc6ea-154a-4c8a-1968-8a8cf5c07300/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 5405 / ✗ 33
     ✗ expected_result
      ↳  99% — ✓ 5435 / ✗ 3

     checks.........................: 99.77% ✓ 16278     ✗ 36    
     data_received..................: 28 MB  328 kB/s
     data_sent......................: 6.5 MB 76 kB/s
     http_req_blocked...............: avg=394.84µs min=1µs     med=2.2µs  max=49.83ms p(90)=326.91µs p(95)=376.88µs
     http_req_connecting............: avg=381.59µs min=0s      med=0s     max=49.8ms  p(90)=266.27µs p(95)=312.19µs
     http_req_duration..............: avg=8.12s    min=66.67ms med=2.31s  max=56.75s  p(90)=35.26s   p(95)=46.13s  
       { expected_response:true }...: avg=8.12s    min=66.67ms med=2.31s  max=56.75s  p(90)=35.26s   p(95)=46.13s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 5438  
     http_req_receiving.............: avg=54.77µs  min=20.29µs med=50.7µs max=1ms     p(90)=76.5µs   p(95)=82.99µs 
     http_req_sending...............: avg=49.84µs  min=6.6µs   med=13.6µs max=11.08ms p(90)=61.13µs  p(95)=73.3µs  
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=8.12s    min=66.58ms med=2.31s  max=56.75s  p(90)=35.26s   p(95)=46.13s  
     http_reqs......................: 5438   63.700053/s
     iteration_duration.............: avg=8.12s    min=66.99ms med=2.31s  max=56.75s  p(90)=35.26s   p(95)=46.13s  
     iterations.....................: 5438   63.700053/s
     vus............................: 4      min=4       max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/93bab9e2-9192-450f-d667-579e4c101400/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5c2085f2-e528-462b-cf41-e5618146f500/public" alt="HTTP Overview" />


  </details>