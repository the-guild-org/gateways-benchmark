## Overview for scenario: `ramping-vus`


This scenario runs 4 servics and a GraphQL gateway with Federation spec, and runs a heavy query. We are running a heavy load of concurrent VUs to measure response time and other stats, during stress. It measure things like memory usage, CPU usage, response times. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was trying to reach 1000 concurrent VUs over 60s


### Comparison


| Gateway                             | duration(p95)⬇️ |  RPS  |       Requests        |                       Durations                        |
| :---------------------------------- | :-------------: | :---: | :-------------------: | :----------------------------------------------------: |
| wundergraph                         |      834ms      | 1199  | 83999 total, 0 failed |    avg: 408ms, p95: 834ms, max: 1575ms, med: 376ms     |
| apollo-router                       |     9810ms      |  117  | 8256 total, 0 failed  |  avg: 4699ms, p95: 9810ms, max: 12848ms, med: 4200ms   |
| mesh                                |     11976ms     |  74   | 5236 total, 0 failed  |  avg: 7339ms, p95: 11976ms, max: 15183ms, med: 7461ms  |
| mercurius                           |     15749ms     |  52   | 3706 total, 0 failed  | avg: 10314ms, p95: 15750ms, max: 15967ms, med: 10654ms |
| stitching-federation-with-yoga-deno |     17689ms     |  50   | 3601 total, 0 failed  | avg: 11239ms, p95: 17690ms, max: 19792ms, med: 11541ms |
| stitching-federation-with-yoga-bun  |     19086ms     |  64   | 4662 total, 0 failed  |  avg: 8335ms, p95: 19086ms, max: 24743ms, med: 7246ms  |
| stitching-federation-with-yoga      |     31080ms     |  44   | 3330 total, 0 failed  | avg: 11970ms, p95: 31081ms, max: 46366ms, med: 9059ms  |
| apollo-gateway-with-yoga            |     31095ms     |  50   | 3635 total, 0 failed  | avg: 10714ms, p95: 31095ms, max: 35729ms, med: 6444ms  |
| apollo-server                       |     51577ms     |  47   | 4319 total, 0 failed  | avg: 10636ms, p95: 51578ms, max: 59340ms, med: 2759ms  |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 251997      ✗ 0     
     data_received..................: 408 MB  5.8 MB/s
     data_sent......................: 100 MB  1.4 MB/s
     http_req_blocked...............: avg=397.39µs min=700ns  med=1.5µs    max=794.04ms p(90)=2.6µs    p(95)=3.6µs   
     http_req_connecting............: avg=387.22µs min=0s     med=0s       max=793.97ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=408.02ms min=4.26ms med=375.98ms max=1.57s    p(90)=722.6ms  p(95)=834.38ms
       { expected_response:true }...: avg=408.02ms min=4.26ms med=375.98ms max=1.57s    p(90)=722.6ms  p(95)=834.38ms
     http_req_failed................: 0.00%   ✓ 0           ✗ 83999 
     http_req_receiving.............: avg=1.82ms   min=13.6µs med=26.6µs   max=404.67ms p(90)=127.1µs  p(95)=248.11µs
     http_req_sending...............: avg=418.3µs  min=5.4µs  med=8.8µs    max=304.43ms p(90)=19.32µs  p(95)=73.41µs 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=405.77ms min=4.11ms med=374.48ms max=1.54s    p(90)=715.85ms p(95)=824.58ms
     http_reqs......................: 83999   1199.926192/s
     iteration_duration.............: avg=409.97ms min=4.55ms med=377.29ms max=1.57s    p(90)=726.58ms p(95)=838.26ms
     iterations.....................: 83999   1199.926192/s
     vus............................: 6       min=6         max=990 
     vus_max........................: 1000    min=1000      max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b53f5626-7813-42d4-d661-b2074a106200/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/79a1b650-4dbc-48c0-7e56-f4541c33cd00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 8242 / ✗ 14
     ✓ expected_result

     checks.........................: 99.94% ✓ 24754     ✗ 14    
     data_received..................: 41 MB  587 kB/s
     data_sent......................: 9.8 MB 140 kB/s
     http_req_blocked...............: avg=85.79µs min=800ns  med=2µs    max=24.92ms p(90)=149.75µs p(95)=364.07µs
     http_req_connecting............: avg=73.19µs min=0s     med=0s     max=24.87ms p(90)=96.85µs  p(95)=302.52µs
     http_req_duration..............: avg=4.69s   min=6.88ms med=4.2s   max=12.84s  p(90)=8.73s    p(95)=9.81s   
       { expected_response:true }...: avg=4.69s   min=6.88ms med=4.2s   max=12.84s  p(90)=8.73s    p(95)=9.81s   
     http_req_failed................: 0.00%  ✓ 0         ✗ 8256  
     http_req_receiving.............: avg=50.44µs min=16.5µs med=42.2µs max=2.5ms   p(90)=68µs     p(95)=76.82µs 
     http_req_sending...............: avg=38.79µs min=6.4µs  med=12.8µs max=15.78ms p(90)=44.65µs  p(95)=60.8µs  
     http_req_tls_handshaking.......: avg=0s      min=0s     med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=4.69s   min=6.81ms med=4.2s   max=12.84s  p(90)=8.73s    p(95)=9.81s   
     http_reqs......................: 8256   117.93549/s
     iteration_duration.............: avg=4.69s   min=7.18ms med=4.2s   max=12.84s  p(90)=8.73s    p(95)=9.81s   
     iterations.....................: 8256   117.93549/s
     vus............................: 150    min=57      max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/dc2efa1b-e659-415d-904c-c6543bf78400/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/083118fb-1274-4213-3d81-e9580609da00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 5211 / ✗ 25
     ✓ expected_result

     checks.........................: 99.84% ✓ 15683     ✗ 25    
     data_received..................: 26 MB  375 kB/s
     data_sent......................: 6.2 MB 89 kB/s
     http_req_blocked...............: avg=410.07µs min=1.5µs   med=2.9µs  max=47.94ms p(90)=507.5µs p(95)=564.13µs
     http_req_connecting............: avg=382.57µs min=0s      med=0s     max=47.89ms p(90)=428.9µs p(95)=480.58µs
     http_req_duration..............: avg=7.33s    min=18.05ms med=7.46s  max=15.18s  p(90)=11.39s  p(95)=11.97s  
       { expected_response:true }...: avg=7.33s    min=18.05ms med=7.46s  max=15.18s  p(90)=11.39s  p(95)=11.97s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 5236  
     http_req_receiving.............: avg=75.34µs  min=19.8µs  med=63.8µs max=9.62ms  p(90)=99.4µs  p(95)=112.72µs
     http_req_sending...............: avg=65µs     min=8.8µs   med=18.4µs max=22.64ms p(90)=80.3µs  p(95)=97.82µs 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=7.33s    min=17.91ms med=7.46s  max=15.18s  p(90)=11.39s  p(95)=11.97s  
     http_reqs......................: 5236   74.793471/s
     iteration_duration.............: avg=7.33s    min=18.53ms med=7.46s  max=15.18s  p(90)=11.4s   p(95)=11.97s  
     iterations.....................: 5236   74.793471/s
     vus............................: 102    min=53      max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8b2fb7bb-4cec-4f6f-b7e3-0268d411a100/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d52067fa-13b1-4452-99f0-0976c975bf00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 11118     ✗ 0     
     data_received..................: 19 MB   266 kB/s
     data_sent......................: 4.4 MB  63 kB/s
     http_req_blocked...............: avg=230.96µs min=1.3µs   med=3.3µs  max=14.97ms p(90)=634.9µs p(95)=752.45µs
     http_req_connecting............: avg=197.89µs min=0s      med=0s     max=14.93ms p(90)=538.1µs p(95)=644µs   
     http_req_duration..............: avg=10.31s   min=11.79ms med=10.65s max=15.96s  p(90)=15.43s  p(95)=15.74s  
       { expected_response:true }...: avg=10.31s   min=11.79ms med=10.65s max=15.96s  p(90)=15.43s  p(95)=15.74s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 3706  
     http_req_receiving.............: avg=95.6µs   min=27.2µs  med=81.4µs max=3.59ms  p(90)=137.8µs p(95)=168.62µs
     http_req_sending...............: avg=59.24µs  min=9.9µs   med=24.3µs max=9.21ms  p(90)=94.95µs p(95)=129.77µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=10.31s   min=11.73ms med=10.65s max=15.96s  p(90)=15.43s  p(95)=15.74s  
     http_reqs......................: 3706    52.930515/s
     iteration_duration.............: avg=10.31s   min=12.09ms med=10.65s max=15.96s  p(90)=15.43s  p(95)=15.75s  
     iterations.....................: 3706    52.930515/s
     vus............................: 81      min=53      max=1000
     vus_max........................: 1000    min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/de48be79-8be2-47fd-950b-30ebad528500/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/30cd0954-405d-44a2-b5b8-9fc10bfe2000/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-deno`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 3596 / ✗ 5
     ✓ expected_result

     checks.........................: 99.95% ✓ 10798     ✗ 5     
     data_received..................: 18 MB  254 kB/s
     data_sent......................: 4.3 MB 60 kB/s
     http_req_blocked...............: avg=455.32µs min=1.1µs  med=2.7µs  max=47.45ms p(90)=465.62µs p(95)=532.73µs
     http_req_connecting............: avg=423.2µs  min=0s     med=0s     max=47.01ms p(90)=384.92µs p(95)=441.62µs
     http_req_duration..............: avg=11.23s   min=1.68s  med=11.54s max=19.79s  p(90)=17.4s    p(95)=17.68s  
       { expected_response:true }...: avg=11.23s   min=1.68s  med=11.54s max=19.79s  p(90)=17.4s    p(95)=17.68s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 3601  
     http_req_receiving.............: avg=87µs     min=14.3µs med=44.3µs max=10.74ms p(90)=101.3µs  p(95)=135.1µs 
     http_req_sending...............: avg=58.05µs  min=6.9µs  med=17.8µs max=20.72ms p(90)=83.3µs   p(95)=103.5µs 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=11.23s   min=1.68s  med=11.54s max=19.79s  p(90)=17.4s    p(95)=17.68s  
     http_reqs......................: 3601   50.408577/s
     iteration_duration.............: avg=11.24s   min=1.68s  med=11.54s max=19.79s  p(90)=17.4s    p(95)=17.69s  
     iterations.....................: 3601   50.408577/s
     vus............................: 79     min=55      max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d5e228bd-b4b6-4124-0ea5-c22f79024600/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2f682c04-a787-4a3c-cc73-6f4a56935a00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 4659 / ✗ 3
     ✓ expected_result

     checks.........................: 99.97% ✓ 13983     ✗ 3     
     data_received..................: 23 MB  324 kB/s
     data_sent......................: 5.5 MB 77 kB/s
     http_req_blocked...............: avg=261.76µs min=1.3µs    med=2.4µs  max=236.15ms p(90)=407.34µs p(95)=523.8µs 
     http_req_connecting............: avg=241.2µs  min=0s       med=0s     max=235.94ms p(90)=260.47µs p(95)=447.29µs
     http_req_duration..............: avg=8.33s    min=889.45ms med=7.24s  max=24.74s   p(90)=17.48s   p(95)=19.08s  
       { expected_response:true }...: avg=8.33s    min=889.45ms med=7.24s  max=24.74s   p(90)=17.48s   p(95)=19.08s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 4662  
     http_req_receiving.............: avg=207.11µs min=19.5µs   med=46.7µs max=96.45ms  p(90)=113.79µs p(95)=274.19µs
     http_req_sending...............: avg=188.15µs min=7.8µs    med=13.8µs max=138.72ms p(90)=88.19µs  p(95)=127.9µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=8.33s    min=888.09ms med=7.24s  max=24.74s   p(90)=17.48s   p(95)=19.08s  
     http_reqs......................: 4662   64.961539/s
     iteration_duration.............: avg=8.33s    min=893.57ms med=7.24s  max=24.74s   p(90)=17.48s   p(95)=19.08s  
     iterations.....................: 4662   64.961539/s
     vus............................: 130    min=54      max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/af85e6c6-7e66-4d38-d922-b4a6bdaad500/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/01db36fe-cbdf-4f9d-c1f7-6fdbbd2e3500/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  73% — ✓ 2435 / ✗ 895
     ✗ expected_result
      ↳  95% — ✓ 3171 / ✗ 159

     checks.........................: 89.44% ✓ 8936      ✗ 1054  
     data_received..................: 21 MB  281 kB/s
     data_sent......................: 4.0 MB 53 kB/s
     http_req_blocked...............: avg=198.37µs min=1.1µs  med=2.9µs  max=18.37ms p(90)=466.92µs p(95)=504.33µs
     http_req_connecting............: avg=169.99µs min=0s     med=0s     max=18.29ms p(90)=393.72µs p(95)=424.49µs
     http_req_duration..............: avg=11.97s   min=1.85s  med=9.05s  max=46.36s  p(90)=26.06s   p(95)=31.08s  
       { expected_response:true }...: avg=11.97s   min=1.85s  med=9.05s  max=46.36s  p(90)=26.06s   p(95)=31.08s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 3330  
     http_req_receiving.............: avg=82.16µs  min=19.8µs med=62.9µs max=12.74ms p(90)=105.01µs p(95)=140.25µs
     http_req_sending...............: avg=46.54µs  min=8.8µs  med=18.1µs max=8.55ms  p(90)=81.4µs   p(95)=96.36µs 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=11.97s   min=1.85s  med=9.05s  max=46.36s  p(90)=26.06s   p(95)=31.08s  
     http_reqs......................: 3330   44.595746/s
     iteration_duration.............: avg=11.97s   min=1.85s  med=9.05s  max=46.36s  p(90)=26.06s   p(95)=31.08s  
     iterations.....................: 3330   44.595746/s
     vus............................: 74     min=54      max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/acd35fdf-cd04-417a-05a0-ba702e825300/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9b59734f-b311-426f-a8dd-c495fc4d5b00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  72% — ✓ 2632 / ✗ 1003
     ✗ expected_result
      ↳  96% — ✓ 3496 / ✗ 139

     checks.........................: 89.52% ✓ 9763      ✗ 1142  
     data_received..................: 17 MB  239 kB/s
     data_sent......................: 4.3 MB 60 kB/s
     http_req_blocked...............: avg=243.18µs min=1.4µs    med=2.8µs   max=22.19ms p(90)=495.48µs p(95)=539.88µs
     http_req_connecting............: avg=217.27µs min=0s       med=0s      max=22.01ms p(90)=411.34µs p(95)=456.43µs
     http_req_duration..............: avg=10.71s   min=217.14ms med=6.44s   max=35.72s  p(90)=23.14s   p(95)=31.09s  
       { expected_response:true }...: avg=10.71s   min=217.14ms med=6.44s   max=35.72s  p(90)=23.14s   p(95)=31.09s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 3635  
     http_req_receiving.............: avg=70.84µs  min=18.89µs  med=63.1µs  max=5.03ms  p(90)=97.66µs  p(95)=110.86µs
     http_req_sending...............: avg=59.79µs  min=10.4µs   med=19.09µs max=6.72ms  p(90)=79.76µs  p(95)=100.05µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=10.71s   min=217.06ms med=6.44s   max=35.72s  p(90)=23.14s   p(95)=31.09s  
     http_reqs......................: 3635   50.758927/s
     iteration_duration.............: avg=10.71s   min=217.51ms med=6.44s   max=35.72s  p(90)=23.14s   p(95)=31.09s  
     iterations.....................: 3635   50.758927/s
     vus............................: 58     min=55      max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d8442001-82f9-48be-dbbd-732bc0bc2900/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5e6d2677-28f8-437c-689c-3baeace56a00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 4279 / ✗ 40
     ✗ expected_result
      ↳  99% — ✓ 4310 / ✗ 9

     checks.........................: 99.62% ✓ 12908     ✗ 49    
     data_received..................: 22 MB  242 kB/s
     data_sent......................: 5.1 MB 56 kB/s
     http_req_blocked...............: avg=171.31µs min=1.5µs    med=2.5µs  max=23.99ms p(90)=440.62µs p(95)=524.61µs
     http_req_connecting............: avg=145.98µs min=0s       med=0s     max=23.92ms p(90)=365.14µs p(95)=436.41µs
     http_req_duration..............: avg=10.63s   min=134.81ms med=2.75s  max=59.33s  p(90)=42.39s   p(95)=51.57s  
       { expected_response:true }...: avg=10.63s   min=134.81ms med=2.75s  max=59.33s  p(90)=42.39s   p(95)=51.57s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 4319  
     http_req_receiving.............: avg=77.42µs  min=28µs     med=65.1µs max=14.97ms p(90)=101µs    p(95)=121.7µs 
     http_req_sending...............: avg=39.95µs  min=9.79µs   med=16µs   max=8.64ms  p(90)=70.1µs   p(95)=88.61µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=10.63s   min=134.73ms med=2.75s  max=59.33s  p(90)=42.39s   p(95)=51.57s  
     http_reqs......................: 4319   47.022776/s
     iteration_duration.............: avg=10.63s   min=135.13ms med=2.75s  max=59.34s  p(90)=42.39s   p(95)=51.57s  
     iterations.....................: 4319   47.022776/s
     vus............................: 6      min=6       max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4204f6ab-b798-4933-ac9f-780eaf359a00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c0bb4057-a386-4c1f-b81a-9c6c21c5d100/public" alt="HTTP Overview" />


  </details>