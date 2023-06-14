## Overview for scenario: `ramping-vus`


This scenario runs 4 servics and a GraphQL gateway with Federation spec, and runs a heavy query. We are running a heavy load of concurrent VUs to measure response time and other stats, during stress. It measure things like memory usage, CPU usage, response times. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was trying to reach 1000 concurrent VUs over 60s


### Comparison


| Gateway                             | duration(p95)⬇️ |  RPS  |       Requests        |                       Durations                        |
| :---------------------------------- | :-------------: | :---: | :-------------------: | :----------------------------------------------------: |
| wundergraph                         |      832ms      | 1225  | 85778 total, 0 failed |    avg: 398ms, p95: 832ms, max: 1322ms, med: 375ms     |
| mercurius                           |     9529ms      |  90   | 6305 total, 0 failed  |   avg: 5826ms, p95: 9530ms, max: 9820ms, med: 5962ms   |
| apollo-router                       |     14112ms     |  73   | 5488 total, 0 failed  |  avg: 7428ms, p95: 14112ms, max: 21111ms, med: 6993ms  |
| stitching-federation-with-yoga-deno |     19669ms     |  43   | 3125 total, 0 failed  | avg: 12863ms, p95: 19670ms, max: 26603ms, med: 14593ms |
| stitching-federation-with-yoga-bun  |     21833ms     |  55   | 4101 total, 0 failed  | avg: 10103ms, p95: 21834ms, max: 29789ms, med: 8457ms  |
| mesh                                |     38461ms     |  31   | 2950 total, 43 failed | avg: 16531ms, p95: 38462ms, max: 48008ms, med: 12203ms |
| apollo-server                       |     49676ms     |  54   | 4679 total, 0 failed  |  avg: 9645ms, p95: 49677ms, max: 58346ms, med: 2590ms  |
| stitching-federation-with-yoga      |     50098ms     |  51   | 4366 total, 3 failed  | avg: 10468ms, p95: 50099ms, max: 57834ms, med: 3032ms  |
| apollo-gateway-with-yoga            |     50262ms     |  53   | 4531 total, 2 failed  | avg: 10021ms, p95: 50262ms, max: 58999ms, med: 2549ms  |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 257334      ✗ 0     
     data_received..................: 417 MB  6.0 MB/s
     data_sent......................: 102 MB  1.5 MB/s
     http_req_blocked...............: avg=433.8µs  min=700ns  med=1.5µs    max=727.58ms p(90)=2.5µs    p(95)=3.3µs   
     http_req_connecting............: avg=425.55µs min=0s     med=0s       max=725.41ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=397.87ms min=4.49ms med=375.2ms  max=1.32s    p(90)=709.46ms p(95)=832.08ms
       { expected_response:true }...: avg=397.87ms min=4.49ms med=375.2ms  max=1.32s    p(90)=709.46ms p(95)=832.08ms
     http_req_failed................: 0.00%   ✓ 0           ✗ 85778 
     http_req_receiving.............: avg=1.44ms   min=13.7µs med=26.2µs   max=392.87ms p(90)=135.1µs  p(95)=276.1µs 
     http_req_sending...............: avg=506.63µs min=5.4µs  med=8.69µs   max=354.01ms p(90)=19.7µs   p(95)=84.9µs  
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=395.92ms min=4.43ms med=374.25ms max=1.32s    p(90)=701.2ms  p(95)=822.39ms
     http_reqs......................: 85778   1225.303971/s
     iteration_duration.............: avg=401.23ms min=4.72ms med=376.77ms max=1.46s    p(90)=719.23ms p(95)=849.11ms
     iterations.....................: 85778   1225.303971/s
     vus............................: 6       min=6         max=991 
     vus_max........................: 1000    min=1000      max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a3d540e7-10ae-4bf9-000f-b3f95aa4aa00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f3155fe2-e131-4d5a-ff35-dddddb6dd100/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 18915     ✗ 0     
     data_received..................: 32 MB   453 kB/s
     data_sent......................: 7.5 MB  107 kB/s
     http_req_blocked...............: avg=77.44µs min=900ns   med=2.29µs max=25.15ms p(90)=341.41µs p(95)=393.49µs
     http_req_connecting............: avg=65.11µs min=0s      med=0s     max=25.07ms p(90)=283.39µs p(95)=327.79µs
     http_req_duration..............: avg=5.82s   min=11.6ms  med=5.96s  max=9.81s   p(90)=9.2s     p(95)=9.52s   
       { expected_response:true }...: avg=5.82s   min=11.6ms  med=5.96s  max=9.81s   p(90)=9.2s     p(95)=9.52s   
     http_req_failed................: 0.00%   ✓ 0         ✗ 6305  
     http_req_receiving.............: avg=55.03µs min=19.09µs med=46.7µs max=8.47ms  p(90)=73.85µs  p(95)=81.07µs 
     http_req_sending...............: avg=28.87µs min=5.6µs   med=13.8µs max=8.76ms  p(90)=51.49µs  p(95)=65.3µs  
     http_req_tls_handshaking.......: avg=0s      min=0s      med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=5.82s   min=11.52ms med=5.96s  max=9.81s   p(90)=9.2s     p(95)=9.52s   
     http_reqs......................: 6305    90.066894/s
     iteration_duration.............: avg=5.82s   min=11.9ms  med=5.96s  max=9.82s   p(90)=9.2s     p(95)=9.52s   
     iterations.....................: 6305    90.066894/s
     vus............................: 6       min=6       max=1000
     vus_max........................: 1000    min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2a6e0d76-25cc-4ff2-5da9-8c7075e94700/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/034436f1-ed85-47b2-ee80-fd179c249e00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  98% — ✓ 5420 / ✗ 68
     ✗ expected_result
      ↳  99% — ✓ 5478 / ✗ 10

     checks.........................: 99.52% ✓ 16386     ✗ 78    
     data_received..................: 27 MB  367 kB/s
     data_sent......................: 6.5 MB 88 kB/s
     http_req_blocked...............: avg=178.92µs min=1.4µs    med=3.2µs  max=34.22ms p(90)=480.34µs p(95)=539.31µs
     http_req_connecting............: avg=154.45µs min=0s       med=0s     max=27.66ms p(90)=399.06µs p(95)=453.83µs
     http_req_duration..............: avg=7.42s    min=202.83ms med=6.99s  max=21.11s  p(90)=12.92s   p(95)=14.11s  
       { expected_response:true }...: avg=7.42s    min=202.83ms med=6.99s  max=21.11s  p(90)=12.92s   p(95)=14.11s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 5488  
     http_req_receiving.............: avg=82.99µs  min=21.9µs   med=76.3µs max=6.62ms  p(90)=102.6µs  p(95)=116.2µs 
     http_req_sending...............: avg=44.97µs  min=8.4µs    med=20.5µs max=21.16ms p(90)=74.63µs  p(95)=92.1µs  
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=7.42s    min=202.72ms med=6.99s  max=21.11s  p(90)=12.92s   p(95)=14.11s  
     http_reqs......................: 5488   73.897912/s
     iteration_duration.............: avg=7.42s    min=203.27ms med=6.99s  max=21.11s  p(90)=12.93s   p(95)=14.11s  
     iterations.....................: 5488   73.897912/s
     vus............................: 11     min=11      max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c817280d-2281-436c-4e63-3d577ae4e500/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f8f10d51-a109-468d-4be6-89a8f61aac00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-deno`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 3115 / ✗ 10
     ✓ expected_result

     checks.........................: 99.89% ✓ 9365      ✗ 10    
     data_received..................: 16 MB  220 kB/s
     data_sent......................: 3.7 MB 52 kB/s
     http_req_blocked...............: avg=462.34µs min=1.1µs  med=3.4µs  max=54.1ms  p(90)=532.41µs p(95)=597.62µs
     http_req_connecting............: avg=421.06µs min=0s     med=0s     max=53.62ms p(90)=448.89µs p(95)=508.63µs
     http_req_duration..............: avg=12.86s   min=2.78s  med=14.59s max=26.6s   p(90)=18.88s   p(95)=19.66s  
       { expected_response:true }...: avg=12.86s   min=2.78s  med=14.59s max=26.6s   p(90)=18.88s   p(95)=19.66s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 3125  
     http_req_receiving.............: avg=111.26µs min=17.4µs med=52.2µs max=8.9ms   p(90)=125.32µs p(95)=172.15µs
     http_req_sending...............: avg=135.04µs min=8µs    med=21µs   max=22.82ms p(90)=88.56µs  p(95)=113.62µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=12.86s   min=2.78s  med=14.59s max=26.6s   p(90)=18.88s   p(95)=19.66s  
     http_reqs......................: 3125   43.593335/s
     iteration_duration.............: avg=12.86s   min=2.78s  med=14.59s max=26.6s   p(90)=18.88s   p(95)=19.67s  
     iterations.....................: 3125   43.593335/s
     vus............................: 215    min=54      max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e065a65b-8443-4a9f-3a44-5ac9a0672300/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/acf29cca-0efb-43c6-dfa5-e0cea40be000/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  98% — ✓ 4057 / ✗ 44
     ✓ expected_result

     checks.........................: 99.64% ✓ 12259     ✗ 44    
     data_received..................: 20 MB  278 kB/s
     data_sent......................: 4.9 MB 66 kB/s
     http_req_blocked...............: avg=591.85µs min=1.3µs    med=2.6µs   max=659.55ms p(90)=477.9µs p(95)=612.3µs
     http_req_connecting............: avg=510.93µs min=0s       med=0s      max=462.97ms p(90)=396.3µs p(95)=512.4µs
     http_req_duration..............: avg=10.1s    min=819.07ms med=8.45s   max=29.78s   p(90)=20.89s  p(95)=21.83s 
       { expected_response:true }...: avg=10.1s    min=819.07ms med=8.45s   max=29.78s   p(90)=20.89s  p(95)=21.83s 
     http_req_failed................: 0.00%  ✓ 0         ✗ 4101  
     http_req_receiving.............: avg=4.94ms   min=21.9µs   med=55.3µs  max=239.89ms p(90)=285.8µs p(95)=739µs  
     http_req_sending...............: avg=459.02µs min=9.79µs   med=16.29µs max=202.7ms  p(90)=112µs   p(95)=229.3µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s       p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=10.09s   min=818.02ms med=8.45s   max=29.78s   p(90)=20.89s  p(95)=21.83s 
     http_reqs......................: 4101   55.902341/s
     iteration_duration.............: avg=10.1s    min=827.9ms  med=8.45s   max=29.78s   p(90)=20.89s  p(95)=21.83s 
     iterations.....................: 4101   55.902341/s
     vus............................: 57     min=54      max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f30c917a-8053-477a-74dc-9b266df41c00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3561b862-76a7-4371-f527-ffc2e0792300/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  98% — ✓ 2907 / ✗ 43
     ✗ no_errors
      ↳  72% — ✓ 2138 / ✗ 812
     ✗ expected_result
      ↳  96% — ✓ 2818 / ✗ 89

     checks.........................: 89.28% ✓ 7863      ✗ 944   
     data_received..................: 23 MB  245 kB/s
     data_sent......................: 3.6 MB 38 kB/s
     http_req_blocked...............: avg=306.08µs min=1.7µs  med=3.4µs    max=22.14ms p(90)=644.92µs p(95)=748.04µs
     http_req_connecting............: avg=248.86µs min=0s     med=0s       max=16.08ms p(90)=543.34µs p(95)=639.11µs
     http_req_duration..............: avg=16.53s   min=2.32s  med=12.2s    max=48s     p(90)=34.67s   p(95)=38.46s  
       { expected_response:true }...: avg=16.16s   min=2.32s  med=11.97s   max=48s     p(90)=33.36s   p(95)=37.74s  
     http_req_failed................: 1.45%  ✓ 43        ✗ 2907  
     http_req_receiving.............: avg=226.05µs min=0s     med=101.64µs max=9.69ms  p(90)=428.42µs p(95)=520.45µs
     http_req_sending...............: avg=78.77µs  min=10.9µs med=25.75µs  max=18.37ms p(90)=108.33µs p(95)=145.76µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s       max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=16.53s   min=2.32s  med=12.2s    max=48s     p(90)=34.67s   p(95)=38.46s  
     http_reqs......................: 2950   31.859007/s
     iteration_duration.............: avg=16.53s   min=2.33s  med=12.2s    max=48.01s  p(90)=34.67s   p(95)=38.46s  
     iterations.....................: 2950   31.859007/s
     vus............................: 81     min=51      max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2a7e9120-afac-4b5f-edc8-78c57bc9fd00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/35d3d71d-010f-4664-157c-ff2038905700/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 4654 / ✗ 25
     ✗ expected_result
      ↳  99% — ✓ 4671 / ✗ 8

     checks.........................: 99.76% ✓ 14004    ✗ 33    
     data_received..................: 24 MB  280 kB/s
     data_sent......................: 5.6 MB 65 kB/s
     http_req_blocked...............: avg=359.3µs  min=1.5µs   med=2.7µs  max=77.12ms p(90)=439.64µs p(95)=498.3µs 
     http_req_connecting............: avg=334.35µs min=0s      med=0s     max=76.74ms p(90)=363.68µs p(95)=418.11µs
     http_req_duration..............: avg=9.64s    min=91.42ms med=2.58s  max=58.34s  p(90)=39.49s   p(95)=49.67s  
       { expected_response:true }...: avg=9.64s    min=91.42ms med=2.58s  max=58.34s  p(90)=39.49s   p(95)=49.67s  
     http_req_failed................: 0.00%  ✓ 0        ✗ 4679  
     http_req_receiving.............: avg=74.78µs  min=26.2µs  med=68.1µs max=7.37ms  p(90)=97.6µs   p(95)=106.73µs
     http_req_sending...............: avg=76.59µs  min=9.29µs  med=16.7µs max=23.91ms p(90)=77.7µs   p(95)=91.51µs 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=9.64s    min=91.33ms med=2.58s  max=58.34s  p(90)=39.49s   p(95)=49.67s  
     http_reqs......................: 4679   54.46257/s
     iteration_duration.............: avg=9.64s    min=91.78ms med=2.58s  max=58.34s  p(90)=39.49s   p(95)=49.67s  
     iterations.....................: 4679   54.46257/s
     vus............................: 5      min=5      max=1000
     vus_max........................: 1000   min=1000   max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0ec66a5d-d76b-49a9-e631-9fd8d4477f00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/842f6c00-727f-4f72-44b6-ea9824e28d00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  99% — ✓ 4363 / ✗ 3
     ✗ no_errors
      ↳  99% — ✓ 4341 / ✗ 25
     ✓ expected_result

     checks.........................: 99.78% ✓ 13067     ✗ 28    
     data_received..................: 22 MB  257 kB/s
     data_sent......................: 5.2 MB 61 kB/s
     http_req_blocked...............: avg=140.38µs min=800ns    med=2.4µs  max=17.02ms p(90)=392.55µs p(95)=444.35µs
     http_req_connecting............: avg=123.43µs min=0s       med=0s     max=16.9ms  p(90)=327.2µs  p(95)=376.97µs
     http_req_duration..............: avg=10.46s   min=114.94ms med=3.03s  max=57.83s  p(90)=40.92s   p(95)=50.09s  
       { expected_response:true }...: avg=10.45s   min=114.94ms med=3.03s  max=57.83s  p(90)=40.88s   p(95)=50.07s  
     http_req_failed................: 0.06%  ✓ 3         ✗ 4363  
     http_req_receiving.............: avg=61.27µs  min=18µs     med=55.5µs max=1.44ms  p(90)=91.9µs   p(95)=101.77µs
     http_req_sending...............: avg=36.81µs  min=6.1µs    med=15.7µs max=6.21ms  p(90)=67.3µs   p(95)=79.44µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=10.46s   min=114.88ms med=3.03s  max=57.83s  p(90)=40.92s   p(95)=50.09s  
     http_reqs......................: 4366   51.071108/s
     iteration_duration.............: avg=10.46s   min=115.22ms med=3.03s  max=57.83s  p(90)=40.92s   p(95)=50.09s  
     iterations.....................: 4366   51.071108/s
     vus............................: 2      min=2       max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7ace21d0-7eb4-4140-0f83-d0939c340a00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c4c0cddd-4655-4d6c-ab81-e0883507dc00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  99% — ✓ 4529 / ✗ 2
     ✗ no_errors
      ↳  98% — ✓ 4485 / ✗ 46
     ✗ expected_result
      ↳  99% — ✓ 4520 / ✗ 9

     checks.........................: 99.58% ✓ 13534     ✗ 57    
     data_received..................: 23 MB  269 kB/s
     data_sent......................: 5.4 MB 64 kB/s
     http_req_blocked...............: avg=159.53µs min=1.6µs   med=2.8µs   max=16.94ms p(90)=438.5µs p(95)=500.15µs
     http_req_connecting............: avg=138.78µs min=0s      med=0s      max=16.9ms  p(90)=361.9µs p(95)=421.7µs 
     http_req_duration..............: avg=10.02s   min=95.52ms med=2.54s   max=58.99s  p(90)=40.55s  p(95)=50.26s  
       { expected_response:true }...: avg=10.01s   min=95.52ms med=2.54s   max=58.99s  p(90)=40.56s  p(95)=50.26s  
     http_req_failed................: 0.04%  ✓ 2         ✗ 4529  
     http_req_receiving.............: avg=75.23µs  min=27.3µs  med=67.7µs  max=4.9ms   p(90)=99.1µs  p(95)=111.5µs 
     http_req_sending...............: avg=50.91µs  min=9.5µs   med=16.89µs max=12.83ms p(90)=76.9µs  p(95)=93µs    
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=10.02s   min=95.42ms med=2.54s   max=58.99s  p(90)=40.55s  p(95)=50.26s  
     http_reqs......................: 4531   53.732055/s
     iteration_duration.............: avg=10.02s   min=96.01ms med=2.54s   max=59s     p(90)=40.55s  p(95)=50.26s  
     iterations.....................: 4531   53.732055/s
     vus............................: 3      min=3       max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3fb47c29-6076-48da-a756-578585d6ac00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a5443e6b-1f47-47f8-ddde-22da00dd6100/public" alt="HTTP Overview" />


  </details>