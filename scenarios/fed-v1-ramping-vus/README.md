## Overview for: `fed-v1-ramping-vus`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. We are running a heavy load of concurrent VUs to measure response time and other stats, during stress. It measure things like memory usage, CPU usage, response times. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was trying to reach 1500 concurrent VUs over 300s


### Comparison


| Gateway                             | duration(p95)⬇️ |  RPS  |         Requests         |                       Durations                        |
| :---------------------------------- | :-------------: | :---: | :----------------------: | :----------------------------------------------------: |
| mesh-bun                            |     2171ms      |  794  |  246262 total, 0 failed  |    avg: 962ms, p95: 2172ms, max: 4516ms, med: 853ms    |
| wundergraph                         |     2846ms      |  532  |  165093 total, 0 failed  |   avg: 1416ms, p95: 2847ms, max: 4669ms, med: 1334ms   |
| mesh-supergraph                     |     12474ms     |  120  |  37455 total, 0 failed   |  avg: 6480ms, p95: 12475ms, max: 18019ms, med: 6362ms  |
| apollo-router                       |     14446ms     |  113  |  35356 total, 0 failed   |  avg: 6870ms, p95: 14446ms, max: 23455ms, med: 6202ms  |
| mesh                                |     18674ms     |  80   |  25286 total, 0 failed   |  avg: 9691ms, p95: 18675ms, max: 28606ms, med: 9534ms  |
| stitching-federation-with-yoga-bun  |     21377ms     |  88   |  27948 total, 0 failed   |  avg: 8873ms, p95: 21378ms, max: 44586ms, med: 8565ms  |
| stitching-federation-with-yoga-deno |     24588ms     |  67   |  21215 total, 0 failed   | avg: 11642ms, p95: 24588ms, max: 44955ms, med: 10771ms |
| mercurius                           |     25444ms     |  55   |  17488 total, 0 failed   | avg: 13955ms, p95: 25444ms, max: 27483ms, med: 13418ms |
| apollo-gateway-with-yoga-bun        |     27791ms     |  65   |  20723 total, 0 failed   | avg: 11963ms, p95: 27791ms, max: 58919ms, med: 12507ms |
| stitching-federation-with-yoga-uws  |     31817ms     |  93   |  29725 total, 4 failed   |  avg: 8357ms, p95: 31818ms, max: 60001ms, med: 4139ms  |
| apollo-gateway-with-yoga-uws        |     34351ms     |  75   |  23922 total, 0 failed   | avg: 10422ms, p95: 34351ms, max: 58577ms, med: 4371ms  |
| apollo-server-node16                |     58136ms     |  42   | 14288 total, 633 failed  | avg: 17477ms, p95: 58136ms, max: 60011ms, med: 10510ms |
| apollo-gateway-with-yoga            |     60000ms     |  71   | 23906 total, 2646 failed | avg: 10630ms, p95: 60000ms, max: 60030ms, med: 3710ms  |
| apollo-server                       |     60000ms     |  70   | 23463 total, 2680 failed | avg: 10768ms, p95: 60000ms, max: 60043ms, med: 3730ms  |
| stitching-federation-with-yoga      |     60000ms     |  70   | 23677 total, 2825 failed | avg: 10659ms, p95: 60000ms, max: 60048ms, med: 3197ms  |



<details>
  <summary>Summary for: `mesh-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  0% — ✓ 0 / ✗ 246262
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 246262

     checks.........................: 33.33% ✓ 246262     ✗ 492524
     data_received..................: 234 MB 756 kB/s
     data_sent......................: 292 MB 943 kB/s
     http_req_blocked...............: avg=79.94µs  min=700ns  med=1.5µs    max=485.3ms  p(90)=2.2µs   p(95)=2.8µs  
     http_req_connecting............: avg=75.1µs   min=0s     med=0s       max=484.95ms p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=961.84ms min=1.38ms med=852.83ms max=4.51s    p(90)=1.93s   p(95)=2.17s  
       { expected_response:true }...: avg=961.84ms min=1.38ms med=852.83ms max=4.51s    p(90)=1.93s   p(95)=2.17s  
     http_req_failed................: 0.00%  ✓ 0          ✗ 246262
     http_req_receiving.............: avg=383.39µs min=10.1µs med=18.3µs   max=311.39ms p(90)=57.6µs  p(95)=171.9µs
     http_req_sending...............: avg=157.47µs min=5.3µs  med=9µs      max=258.28ms p(90)=35.49µs p(95)=122.1µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s       max=0s       p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=961.3ms  min=1.35ms med=852.43ms max=4.51s    p(90)=1.93s   p(95)=2.17s  
     http_reqs......................: 246262 794.387897/s
     iteration_duration.............: avg=963.22ms min=1.55ms med=853.3ms  max=4.51s    p(90)=1.93s   p(95)=2.17s  
     iterations.....................: 246262 794.387897/s
     vus............................: 10     min=10       max=1500
     vus_max........................: 1500   min=1500     max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7842e332-985e-4003-d9df-cdafffccd500/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/13db078d-582b-42ea-195c-44a687b97a00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 495279     ✗ 0     
     data_received..................: 822 MB  2.7 MB/s
     data_sent......................: 196 MB  632 kB/s
     http_req_blocked...............: avg=1.41ms min=1.5µs   med=2.7µs  max=1.45s p(90)=4.2µs   p(95)=8.1µs   
     http_req_connecting............: avg=1.38ms min=0s      med=0s     max=1.45s p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=1.41s  min=9.64ms  med=1.33s  max=4.66s p(90)=2.52s   p(95)=2.84s   
       { expected_response:true }...: avg=1.41s  min=9.64ms  med=1.33s  max=4.66s p(90)=2.52s   p(95)=2.84s   
     http_req_failed................: 0.00%   ✓ 0          ✗ 165093
     http_req_receiving.............: avg=7.78ms min=17.39µs med=47.3µs max=1.74s p(90)=259.2µs p(95)=2.4ms   
     http_req_sending...............: avg=2.79ms min=9.29µs  med=15.6µs max=1.19s p(90)=63.9µs  p(95)=174.88µs
     http_req_tls_handshaking.......: avg=0s     min=0s      med=0s     max=0s    p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=1.4s   min=9.4ms   med=1.32s  max=4.66s p(90)=2.49s   p(95)=2.81s   
     http_reqs......................: 165093  532.552286/s
     iteration_duration.............: avg=1.43s  min=10.41ms med=1.34s  max=5.22s p(90)=2.57s   p(95)=2.89s   
     iterations.....................: 165093  532.552286/s
     vus............................: 2       min=0        max=1499
     vus_max........................: 1500    min=1407     max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/85a16062-c301-4b86-e829-e4faebae1f00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/34bff4b0-4ea1-44a7-406d-d37e9d763e00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 37269 / ✗ 186
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 37455

     checks.........................: 66.50% ✓ 74724      ✗ 37641 
     data_received..................: 189 MB 609 kB/s
     data_sent......................: 45 MB  143 kB/s
     http_req_blocked...............: avg=21.7µs  min=900ns   med=1.9µs  max=44.8ms   p(90)=2.9µs  p(95)=12.6µs 
     http_req_connecting............: avg=16.96µs min=0s      med=0s     max=44.74ms  p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=6.47s   min=21.91ms med=6.36s  max=18.01s   p(90)=11.65s p(95)=12.47s 
       { expected_response:true }...: avg=6.47s   min=21.91ms med=6.36s  max=18.01s   p(90)=11.65s p(95)=12.47s 
     http_req_failed................: 0.00%  ✓ 0          ✗ 37455 
     http_req_receiving.............: avg=49.56µs min=17.2µs  med=36.9µs max=104.97ms p(90)=60.6µs p(95)=69.7µs 
     http_req_sending...............: avg=25.83µs min=5.6µs   med=11.7µs max=125.3ms  p(90)=23.8µs p(95)=33.79µs
     http_req_tls_handshaking.......: avg=0s      min=0s      med=0s     max=0s       p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=6.47s   min=21.83ms med=6.36s  max=18.01s   p(90)=11.65s p(95)=12.47s 
     http_reqs......................: 37455  120.807171/s
     iteration_duration.............: avg=6.48s   min=22.49ms med=6.36s  max=18.01s   p(90)=11.65s p(95)=12.47s 
     iterations.....................: 37455  120.807171/s
     vus............................: 216    min=50       max=1500
     vus_max........................: 1500   min=1500     max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/310b10b4-0dd0-4be5-18ad-a01b0b776700/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5c86868d-df71-4fcc-3eb3-089599c89f00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 35196 / ✗ 160
     ✗ valid response structure
      ↳  99% — ✓ 35196 / ✗ 160

     checks.........................: 99.69% ✓ 105748     ✗ 320   
     data_received..................: 176 MB 565 kB/s
     data_sent......................: 42 MB  135 kB/s
     http_req_blocked...............: avg=36.7µs  min=900ns    med=2.29µs max=98.7ms   p(90)=3.6µs  p(95)=17.2µs 
     http_req_connecting............: avg=29.45µs min=0s       med=0s     max=98.6ms   p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=6.87s   min=227.85ms med=6.2s   max=23.45s   p(90)=12.86s p(95)=14.44s 
       { expected_response:true }...: avg=6.87s   min=227.85ms med=6.2s   max=23.45s   p(90)=12.86s p(95)=14.44s 
     http_req_failed................: 0.00%  ✓ 0          ✗ 35356 
     http_req_receiving.............: avg=68.89µs min=15.6µs   med=41µs   max=57.07ms  p(90)=73.8µs p(95)=83.09µs
     http_req_sending...............: avg=72.06µs min=6µs      med=13.1µs max=106.48ms p(90)=29.6µs p(95)=52.8µs 
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s     max=0s       p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=6.87s   min=227.8ms  med=6.2s   max=23.45s   p(90)=12.86s p(95)=14.44s 
     http_reqs......................: 35356  113.495144/s
     iteration_duration.............: avg=6.87s   min=229.08ms med=6.2s   max=23.45s   p(90)=12.86s p(95)=14.44s 
     iterations.....................: 35356  113.495144/s
     vus............................: 100    min=50       max=1500
     vus_max........................: 1500   min=1500     max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/db3274f8-e0d1-4e6e-5247-99f34b717c00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e320ffaf-cb70-4e85-c067-1e0daff5e500/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  98% — ✓ 25028 / ✗ 258
     ✗ valid response structure
      ↳  98% — ✓ 25028 / ✗ 258

     checks.........................: 99.31% ✓ 75342     ✗ 516   
     data_received..................: 127 MB 407 kB/s
     data_sent......................: 30 MB  96 kB/s
     http_req_blocked...............: avg=49.19µs min=1.2µs    med=2.6µs  max=56.43ms  p(90)=4.59µs  p(95)=210.42µs
     http_req_connecting............: avg=41.36µs min=0s       med=0s     max=56.27ms  p(90)=0s      p(95)=139.32µs
     http_req_duration..............: avg=9.69s   min=876.55ms med=9.53s  max=28.6s    p(90)=17.09s  p(95)=18.67s  
       { expected_response:true }...: avg=9.69s   min=876.55ms med=9.53s  max=28.6s    p(90)=17.09s  p(95)=18.67s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 25286 
     http_req_receiving.............: avg=93.09µs min=22.2µs   med=56µs   max=113.36ms p(90)=81.4µs  p(95)=92.6µs  
     http_req_sending...............: avg=52.98µs min=8.3µs    med=14.3µs max=48.87ms  p(90)=33.35µs p(95)=66.8µs  
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s     max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=9.69s   min=876.46ms med=9.53s  max=28.6s    p(90)=17.09s  p(95)=18.67s  
     http_reqs......................: 25286  80.970569/s
     iteration_duration.............: avg=9.69s   min=877.24ms med=9.53s  max=28.6s    p(90)=17.09s  p(95)=18.67s  
     iterations.....................: 25286  80.970569/s
     vus............................: 108    min=0       max=1498
     vus_max........................: 1500   min=1255    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/834609c0-4acc-40bb-3396-74e8982a5600/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8f161db8-374a-46e0-04f8-aa6672fbcf00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 27947 / ✗ 1
     ✗ valid response structure
      ↳  99% — ✓ 27947 / ✗ 1

     checks.........................: 99.99% ✓ 83842     ✗ 2     
     data_received..................: 139 MB 441 kB/s
     data_sent......................: 33 MB  105 kB/s
     http_req_blocked...............: avg=349.74µs min=1.4µs    med=2.9µs  max=893.66ms p(90)=10µs    p(95)=213.59µs
     http_req_connecting............: avg=315.8µs  min=0s       med=0s     max=790.1ms  p(90)=0s      p(95)=130.99µs
     http_req_duration..............: avg=8.87s    min=362.01ms med=8.56s  max=44.58s   p(90)=12.82s  p(95)=21.37s  
       { expected_response:true }...: avg=8.87s    min=362.01ms med=8.56s  max=44.58s   p(90)=12.82s  p(95)=21.37s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 27948 
     http_req_receiving.............: avg=715.96µs min=24.4µs   med=63.1µs max=674.02ms p(90)=116.6µs p(95)=271.3µs 
     http_req_sending...............: avg=722.95µs min=9.6µs    med=17.5µs max=399.49ms p(90)=88.33µs p(95)=161.7µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=8.87s    min=361.57ms med=8.56s  max=44.58s   p(90)=12.81s  p(95)=21.37s  
     http_reqs......................: 27948  88.573855/s
     iteration_duration.............: avg=8.87s    min=364.76ms med=8.56s  max=44.59s   p(90)=12.82s  p(95)=21.37s  
     iterations.....................: 27948  88.573855/s
     vus............................: 147    min=0       max=1500
     vus_max........................: 1500   min=960     max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/29966f8e-cc61-44c8-a72e-3a9d7a67d300/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/082e9b38-fc1b-4069-ec29-6a4a2588e200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-deno`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  97% — ✓ 20609 / ✗ 606
     ✗ valid response structure
      ↳  97% — ✓ 20609 / ✗ 606

     checks.........................: 98.09% ✓ 62433     ✗ 1212  
     data_received..................: 114 MB 363 kB/s
     data_sent......................: 25 MB  80 kB/s
     http_req_blocked...............: avg=189.79µs min=1.2µs    med=3µs    max=70.16ms p(90)=7.86µs   p(95)=429.28µs
     http_req_connecting............: avg=48.45µs  min=0s       med=0s     max=41.83ms p(90)=0s       p(95)=304.32µs
     http_req_duration..............: avg=11.64s   min=422.48ms med=10.77s max=44.95s  p(90)=22.09s   p(95)=24.58s  
       { expected_response:true }...: avg=11.64s   min=422.48ms med=10.77s max=44.95s  p(90)=22.09s   p(95)=24.58s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 21215 
     http_req_receiving.............: avg=151.81µs min=18.89µs  med=44.8µs max=40.76ms p(90)=108.72µs p(95)=156.8µs 
     http_req_sending...............: avg=91.55µs  min=7µs      med=16.2µs max=32.34ms p(90)=73.2µs   p(95)=107.3µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=11.64s   min=422.32ms med=10.77s max=44.95s  p(90)=22.09s   p(95)=24.58s  
     http_reqs......................: 21215  67.702696/s
     iteration_duration.............: avg=11.64s   min=423.47ms med=10.77s max=44.95s  p(90)=22.09s   p(95)=24.58s  
     iterations.....................: 21215  67.702696/s
     vus............................: 287    min=0       max=1498
     vus_max........................: 1500   min=1216    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/27077ebe-3af5-424c-c01d-75469d8e9600/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6cf7e882-7553-4a44-85af-a3b1dbe43500/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 52464     ✗ 0     
     data_received..................: 88 MB   282 kB/s
     data_sent......................: 21 MB   67 kB/s
     http_req_blocked...............: avg=79.36µs min=1.6µs med=3.2µs  max=35.84ms p(90)=23.63µs p(95)=558.26µs
     http_req_connecting............: avg=66.47µs min=0s    med=0s     max=35.72ms p(90)=0s      p(95)=467.23µs
     http_req_duration..............: avg=13.95s  min=1.39s med=13.41s max=27.48s  p(90)=24.54s  p(95)=25.44s  
       { expected_response:true }...: avg=13.95s  min=1.39s med=13.41s max=27.48s  p(90)=24.54s  p(95)=25.44s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 17488 
     http_req_receiving.............: avg=85.31µs min=28µs  med=76.7µs max=7.14ms  p(90)=119µs   p(95)=144.1µs 
     http_req_sending...............: avg=40.32µs min=10µs  med=19.2µs max=23.76ms p(90)=58.53µs p(95)=82.19µs 
     http_req_tls_handshaking.......: avg=0s      min=0s    med=0s     max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=13.95s  min=1.39s med=13.41s max=27.48s  p(90)=24.54s  p(95)=25.44s  
     http_reqs......................: 17488   55.995697/s
     iteration_duration.............: avg=13.95s  min=1.39s med=13.41s max=27.48s  p(90)=24.54s  p(95)=25.44s  
     iterations.....................: 17488   55.995697/s
     vus............................: 105     min=0       max=1499
     vus_max........................: 1500    min=1075    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b3e8b1d1-5729-430d-7d3f-e1f54b357800/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/36297a3a-7068-4b82-993d-00bd5728ab00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 20706 / ✗ 17
     ✗ valid response structure
      ↳  99% — ✓ 20706 / ✗ 17

     checks.........................: 99.94% ✓ 62135     ✗ 34    
     data_received..................: 103 MB 325 kB/s
     data_sent......................: 25 MB  78 kB/s
     http_req_blocked...............: avg=297.63µs min=1.3µs    med=2.5µs  max=464.2ms  p(90)=15.07µs  p(95)=199.38µs
     http_req_connecting............: avg=284.8µs  min=0s       med=0s     max=464.12ms p(90)=0s       p(95)=122.9µs 
     http_req_duration..............: avg=11.96s   min=539.53ms med=12.5s  max=58.91s   p(90)=16.89s   p(95)=27.79s  
       { expected_response:true }...: avg=11.96s   min=539.53ms med=12.5s  max=58.91s   p(90)=16.89s   p(95)=27.79s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 20723 
     http_req_receiving.............: avg=2.72ms   min=23.8µs   med=51.7µs max=450.51ms p(90)=133.38µs p(95)=301.64µs
     http_req_sending...............: avg=547.71µs min=8.5µs    med=15.1µs max=361.15ms p(90)=82.5µs   p(95)=144.39µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=11.95s   min=539.15ms med=12.5s  max=58.91s   p(90)=16.89s   p(95)=27.79s  
     http_reqs......................: 20723  65.329856/s
     iteration_duration.............: avg=11.96s   min=543.1ms  med=12.5s  max=58.92s   p(90)=16.89s   p(95)=27.79s  
     iterations.....................: 20723  65.329856/s
     vus............................: 30     min=0       max=1500
     vus_max........................: 1500   min=1363    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/609dde6a-3127-4e4c-5f4b-cd28ff62a900/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1eced7c6-f058-49e2-9fe8-398318c4b600/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-uws`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  99% — ✓ 29721 / ✗ 4
     ✗ no graphql errors
      ↳  82% — ✓ 24422 / ✗ 5303
     ✗ valid response structure
      ↳  82% — ✓ 24422 / ✗ 5299

     checks.........................: 88.10% ✓ 78565     ✗ 10606 
     data_received..................: 214 MB 677 kB/s
     data_sent......................: 35 MB  111 kB/s
     http_req_blocked...............: avg=96.36µs min=1µs      med=2µs    max=91.79ms p(90)=3.6µs   p(95)=151.8µs
     http_req_connecting............: avg=88.84µs min=0s       med=0s     max=91.7ms  p(90)=0s      p(95)=92.25µs
     http_req_duration..............: avg=8.35s   min=146.75ms med=4.13s  max=1m0s    p(90)=25.31s  p(95)=31.81s 
       { expected_response:true }...: avg=8.35s   min=146.75ms med=4.13s  max=59.88s  p(90)=25.3s   p(95)=31.79s 
     http_req_failed................: 0.01%  ✓ 4         ✗ 29721 
     http_req_receiving.............: avg=63.84µs min=0s       med=35.9µs max=81.76ms p(90)=77.89µs p(95)=92.7µs 
     http_req_sending...............: avg=45.84µs min=5.7µs    med=12µs   max=75.29ms p(90)=29.7µs  p(95)=60µs   
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s     max=0s      p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=8.35s   min=146.68ms med=4.13s  max=1m0s    p(90)=25.3s   p(95)=31.81s 
     http_reqs......................: 29725  93.863496/s
     iteration_duration.............: avg=8.35s   min=147.42ms med=4.14s  max=1m0s    p(90)=25.31s  p(95)=31.81s 
     iterations.....................: 29725  93.863496/s
     vus............................: 157    min=50      max=1500
     vus_max........................: 1500   min=1500    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ce0ed3eb-1f73-458a-c4b8-1965b442cb00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/bfa62b2c-3662-47c1-74e6-ababececcb00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga-uws`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  76% — ✓ 18194 / ✗ 5728
     ✗ valid response structure
      ↳  76% — ✓ 18194 / ✗ 5728

     checks.........................: 84.03% ✓ 60310     ✗ 11456 
     data_received..................: 110 MB 347 kB/s
     data_sent......................: 28 MB  90 kB/s
     http_req_blocked...............: avg=36.86µs min=900ns    med=2.1µs  max=17.02ms p(90)=3.7µs   p(95)=188.29µs
     http_req_connecting............: avg=29.57µs min=0s       med=0s     max=16.96ms p(90)=0s      p(95)=121.29µs
     http_req_duration..............: avg=10.42s  min=130.94ms med=4.37s  max=58.57s  p(90)=27.7s   p(95)=34.35s  
       { expected_response:true }...: avg=10.42s  min=130.94ms med=4.37s  max=58.57s  p(90)=27.7s   p(95)=34.35s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 23922 
     http_req_receiving.............: avg=52.65µs min=15.4µs   med=36.7µs max=39.35ms p(90)=69.09µs p(95)=80.19µs 
     http_req_sending...............: avg=38.23µs min=6.2µs    med=12.2µs max=51.16ms p(90)=30.99µs p(95)=63.79µs 
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s     max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=10.42s  min=130.86ms med=4.37s  max=58.57s  p(90)=27.7s   p(95)=34.35s  
     http_reqs......................: 23922  75.563516/s
     iteration_duration.............: avg=10.42s  min=131.66ms med=4.37s  max=58.57s  p(90)=27.7s   p(95)=34.35s  
     iterations.....................: 23922  75.563516/s
     vus............................: 301    min=50      max=1500
     vus_max........................: 1500   min=1500    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/cca0a41a-e338-4b93-e70a-4b3887b04600/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/850644d1-97e0-4541-6775-c4c301c65800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server-node16`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  95% — ✓ 13655 / ✗ 633
     ✗ no graphql errors
      ↳  47% — ✓ 6816 / ✗ 7472
     ✗ valid response structure
      ↳  49% — ✓ 6816 / ✗ 6839

     checks.........................: 64.61% ✓ 27287     ✗ 14944 
     data_received..................: 56 MB  167 kB/s
     data_sent......................: 17 MB  52 kB/s
     http_req_blocked...............: avg=94.76µs min=1.3µs   med=3µs    max=48.38ms  p(90)=191.71µs p(95)=527.72µs
     http_req_connecting............: avg=78.1µs  min=0s      med=0s     max=48.11ms  p(90)=126.63µs p(95)=440.85µs
     http_req_duration..............: avg=17.47s  min=78.79ms med=10.51s max=1m0s     p(90)=48.24s   p(95)=58.13s  
       { expected_response:true }...: avg=15.7s   min=78.79ms med=9.85s  max=59.99s   p(90)=39.1s    p(95)=48.98s  
     http_req_failed................: 4.43%  ✓ 633       ✗ 13655 
     http_req_receiving.............: avg=89.73µs min=0s      med=70.6µs max=133.32ms p(90)=102.1µs  p(95)=123.57µs
     http_req_sending...............: avg=39.28µs min=8.3µs   med=17.9µs max=17.41ms  p(90)=61.8µs   p(95)=83.77µs 
     http_req_tls_handshaking.......: avg=0s      min=0s      med=0s     max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=17.47s  min=78.68ms med=10.51s max=1m0s     p(90)=48.23s   p(95)=58.13s  
     http_reqs......................: 14288  42.508304/s
     iteration_duration.............: avg=17.47s  min=79.46ms med=10.51s max=1m0s     p(90)=48.24s   p(95)=58.13s  
     iterations.....................: 14288  42.508304/s
     vus............................: 11     min=0       max=1500
     vus_max........................: 1500   min=923     max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/86baa583-bed8-4f50-cb23-616e20c1b100/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1bfd245f-d0a3-492d-9c8f-6f022bdcae00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  88% — ✓ 21260 / ✗ 2646
     ✗ no graphql errors
      ↳  85% — ✓ 20530 / ✗ 3376
     ✗ valid response structure
      ↳  96% — ✓ 20530 / ✗ 730

     checks.........................: 90.22% ✓ 62320    ✗ 6752  
     data_received..................: 106 MB 317 kB/s
     data_sent......................: 29 MB  85 kB/s
     http_req_blocked...............: avg=204.08µs min=900ns   med=2.29µs max=38.94ms p(90)=259.5µs p(95)=465.17µs
     http_req_connecting............: avg=189.53µs min=0s      med=0s     max=38.82ms p(90)=208µs   p(95)=383.97µs
     http_req_duration..............: avg=10.62s   min=80.09ms med=3.71s  max=1m0s    p(90)=59.99s  p(95)=1m0s    
       { expected_response:true }...: avg=4.48s    min=80.09ms med=3.62s  max=59.87s  p(90)=4.76s   p(95)=5.43s   
     http_req_failed................: 11.06% ✓ 2646     ✗ 21260 
     http_req_receiving.............: avg=47.94µs  min=0s      med=39.5µs max=11.29ms p(90)=74.7µs  p(95)=83.8µs  
     http_req_sending...............: avg=43.16µs  min=6.7µs   med=13.3µs max=19.65ms p(90)=45.45µs p(95)=62.8µs  
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=10.62s   min=80ms    med=3.71s  max=1m0s    p(90)=59.99s  p(95)=1m0s    
     http_reqs......................: 23906  71.69358/s
     iteration_duration.............: avg=10.63s   min=80.81ms med=3.71s  max=1m0s    p(90)=1m0s    p(95)=1m0s    
     iterations.....................: 23906  71.69358/s
     vus............................: 18     min=0      max=1500
     vus_max........................: 1500   min=1494   max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ce534b22-c572-42ea-a127-cf1d63581000/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b06397d4-9927-4bdf-6eb8-5012eeab0100/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  88% — ✓ 20783 / ✗ 2680
     ✗ no graphql errors
      ↳  88% — ✓ 20710 / ✗ 2753
     ✗ valid response structure
      ↳  99% — ✓ 20710 / ✗ 73

     checks.........................: 91.86% ✓ 62203    ✗ 5506  
     data_received..................: 107 MB 321 kB/s
     data_sent......................: 28 MB  84 kB/s
     http_req_blocked...............: avg=186.65µs min=1.1µs   med=2.5µs  max=39.01ms p(90)=267.2µs  p(95)=438.59µs
     http_req_connecting............: avg=169.3µs  min=0s      med=0s     max=38.83ms p(90)=213.44µs p(95)=360.59µs
     http_req_duration..............: avg=10.76s   min=88.9ms  med=3.73s  max=1m0s    p(90)=59.99s   p(95)=1m0s    
       { expected_response:true }...: avg=4.41s    min=88.9ms  med=3.67s  max=59.68s  p(90)=4.2s     p(95)=4.55s   
     http_req_failed................: 11.42% ✓ 2680     ✗ 20783 
     http_req_receiving.............: avg=55.21µs  min=0s      med=52µs   max=6.74ms  p(90)=80.5µs   p(95)=87.4µs  
     http_req_sending...............: avg=32.45µs  min=7.1µs   med=14.9µs max=9.98ms  p(90)=42.2µs   p(95)=58.8µs  
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=10.76s   min=88.81ms med=3.73s  max=1m0s    p(90)=59.99s   p(95)=1m0s    
     http_reqs......................: 23463  70.36465/s
     iteration_duration.............: avg=10.76s   min=89.59ms med=3.73s  max=1m0s    p(90)=1m0s     p(95)=1m0s    
     iterations.....................: 23463  70.36465/s
     vus............................: 25     min=25     max=1500
     vus_max........................: 1500   min=1500   max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c3c2fe7c-6614-451e-ed7a-eb32a7970c00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/67788455-e906-4931-e6e7-4eb97bd6e300/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  88% — ✓ 20852 / ✗ 2825
     ✗ no graphql errors
      ↳  87% — ✓ 20804 / ✗ 2873
     ✗ valid response structure
      ↳  99% — ✓ 20804 / ✗ 48

     checks.........................: 91.57% ✓ 62460     ✗ 5746  
     data_received..................: 106 MB 316 kB/s
     data_sent......................: 28 MB  85 kB/s
     http_req_blocked...............: avg=269.13µs min=1.5µs   med=3.4µs  max=31.71ms p(90)=379.76µs p(95)=753.26µs
     http_req_connecting............: avg=245.1µs  min=0s      med=0s     max=27.16ms p(90)=307.03µs p(95)=602.93µs
     http_req_duration..............: avg=10.65s   min=56.47ms med=3.19s  max=1m0s    p(90)=59.99s   p(95)=1m0s    
       { expected_response:true }...: avg=3.97s    min=56.47ms med=3.15s  max=59.29s  p(90)=3.49s    p(95)=3.95s   
     http_req_failed................: 11.93% ✓ 2825      ✗ 20852 
     http_req_receiving.............: avg=74.85µs  min=0s      med=68.8µs max=20.67ms p(90)=99.6µs   p(95)=115.32µs
     http_req_sending...............: avg=57.61µs  min=8.5µs   med=20.4µs max=21.32ms p(90)=61.4µs   p(95)=85.42µs 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=10.65s   min=56.33ms med=3.19s  max=1m0s    p(90)=59.99s   p(95)=1m0s    
     http_reqs......................: 23677  70.797859/s
     iteration_duration.............: avg=10.66s   min=57.24ms med=3.19s  max=1m0s    p(90)=1m0s     p(95)=1m0s    
     iterations.....................: 23677  70.797859/s
     vus............................: 21     min=0       max=1500
     vus_max........................: 1500   min=1306    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/73fc7c8d-9b4d-4d1b-beb9-7638a5afcc00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ce24086a-1055-4b3e-7a57-a6d67b001c00/public" alt="HTTP Overview" />


  </details>