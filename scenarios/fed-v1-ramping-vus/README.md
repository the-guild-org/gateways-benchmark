## Overview for: `fed-v1-ramping-vus`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. We are running a heavy load of concurrent VUs to measure response time and other stats, during stress. It measure things like memory usage, CPU usage, response times. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was trying to reach 1500 concurrent VUs over 300s


### Comparison


| Gateway                             | duration(p95)⬇️ |  RPS  |         Requests         |                       Durations                       |
| :---------------------------------- | :-------------: | :---: | :----------------------: | :---------------------------------------------------: |
| wundergraph                         |     2345ms      |  671  |  208260 total, 0 failed  |  avg: 1123ms, p95: 2346ms, max: 4149ms, med: 1029ms   |
| stitching-federation-with-yoga-bun  |     12644ms     |  139  |  43304 total, 0 failed   | avg: 5592ms, p95: 12644ms, max: 33755ms, med: 5412ms  |
| mesh                                |     16274ms     |  93   |  28954 total, 0 failed   | avg: 8399ms, p95: 16275ms, max: 22779ms, med: 8028ms  |
| mercurius                           |     16776ms     |  88   |  27586 total, 0 failed   | avg: 8759ms, p95: 16777ms, max: 17956ms, med: 8614ms  |
| stitching-federation-with-yoga-deno |     16964ms     |  95   |  29785 total, 0 failed   | avg: 8243ms, p95: 16965ms, max: 34320ms, med: 7758ms  |
| mesh-supergraph                     |     18330ms     |  81   |  25430 total, 0 failed   | avg: 9670ms, p95: 18331ms, max: 27307ms, med: 9243ms  |
| apollo-router                       |     18965ms     |  98   |  30637 total, 6 failed   | avg: 7953ms, p95: 18965ms, max: 32183ms, med: 6978ms  |
| apollo-gateway-with-yoga-uws        |     41158ms     |  52   |  17045 total, 0 failed   | avg: 14994ms, p95: 41159ms, max: 55116ms, med: 8274ms |
| apollo-server-node16                |     45929ms     |  47   |  15816 total, 7 failed   | avg: 16510ms, p95: 45929ms, max: 59535ms, med: 8728ms |
| apollo-gateway-with-yoga            |     60000ms     |  61   | 20530 total, 2779 failed | avg: 12321ms, p95: 60000ms, max: 60041ms, med: 3997ms |
| apollo-server                       |     60000ms     |  63   | 21360 total, 2732 failed | avg: 11877ms, p95: 60000ms, max: 60060ms, med: 3996ms |
| stitching-federation-with-yoga      |     60000ms     |  83   | 27899 total, 2666 failed | avg: 9069ms, p95: 60000ms, max: 60033ms, med: 3149ms  |
| stitching-federation-with-yoga-uws  |     60000ms     |  46   | 15814 total, 988 failed  | avg: 15788ms, p95: 60000ms, max: 60016ms, med: 7192ms |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 624780     ✗ 0     
     data_received..................: 1.0 GB  3.3 MB/s
     data_sent......................: 247 MB  797 kB/s
     http_req_blocked...............: avg=898.27µs min=1µs    med=2.2µs  max=1.08s p(90)=3.9µs   p(95)=5.1µs   
     http_req_connecting............: avg=879.08µs min=0s     med=0s     max=1.08s p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=1.12s    min=6.86ms med=1.02s  max=4.14s p(90)=2.08s   p(95)=2.34s   
       { expected_response:true }...: avg=1.12s    min=6.86ms med=1.02s  max=4.14s p(90)=2.08s   p(95)=2.34s   
     http_req_failed................: 0.00%   ✓ 0          ✗ 208260
     http_req_receiving.............: avg=5.58ms   min=17.8µs med=34.3µs max=1.14s p(90)=200.9µs p(95)=656.01µs
     http_req_sending...............: avg=1.77ms   min=6.9µs  med=11.9µs max=1.14s p(90)=30.1µs  p(95)=128.8µs 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s    p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=1.11s    min=6.78ms med=1.02s  max=3.89s p(90)=2.06s   p(95)=2.32s   
     http_reqs......................: 208260  671.786462/s
     iteration_duration.............: avg=1.13s    min=7.46ms med=1.04s  max=4.5s  p(90)=2.12s   p(95)=2.39s   
     iterations.....................: 208260  671.786462/s
     vus............................: 10      min=10       max=1499
     vus_max........................: 1500    min=1500     max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1687dbce-5823-4857-c736-3e36044f0500/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/798dd940-95f8-48bd-9b5f-e6432d2ae200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 129912   ✗ 0     
     data_received..................: 216 MB  696 kB/s
     data_sent......................: 51 MB   166 kB/s
     http_req_blocked...............: avg=186.64µs min=800ns   med=1.8µs  max=441.44ms p(90)=3µs     p(95)=11.4µs  
     http_req_connecting............: avg=175.92µs min=0s      med=0s     max=429.82ms p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=5.59s    min=44.48ms med=5.41s  max=33.75s   p(90)=8.11s   p(95)=12.64s  
       { expected_response:true }...: avg=5.59s    min=44.48ms med=5.41s  max=33.75s   p(90)=8.11s   p(95)=12.64s  
     http_req_failed................: 0.00%   ✓ 0        ✗ 43304 
     http_req_receiving.............: avg=756.51µs min=12.9µs  med=27.5µs max=283.9ms  p(90)=55.8µs  p(95)=191.39µs
     http_req_sending...............: avg=401.65µs min=5.7µs   med=10.2µs max=278.54ms p(90)=34.59µs p(95)=90.28µs 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=5.59s    min=44.4ms  med=5.4s   max=33.75s   p(90)=8.11s   p(95)=12.64s  
     http_reqs......................: 43304   139.6814/s
     iteration_duration.............: avg=5.59s    min=45.07ms med=5.41s  max=33.75s   p(90)=8.11s   p(95)=12.64s  
     iterations.....................: 43304   139.6814/s
     vus............................: 105     min=0      max=1500
     vus_max........................: 1500    min=1254   max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/bac8c5e8-374d-47ef-d78b-2c692c2e7f00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7fde06f6-c453-40bf-0fba-609fba55e800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 28732 / ✗ 222
     ✗ valid response structure
      ↳  99% — ✓ 28732 / ✗ 222

     checks.........................: 99.48% ✓ 86418     ✗ 444   
     data_received..................: 147 MB 474 kB/s
     data_sent......................: 34 MB  111 kB/s
     http_req_blocked...............: avg=50.02µs min=1.3µs    med=2.5µs  max=141.72ms p(90)=4.4µs  p(95)=169.07µs
     http_req_connecting............: avg=41.73µs min=0s       med=0s     max=141.64ms p(90)=0s     p(95)=110.43µs
     http_req_duration..............: avg=8.39s   min=823.69ms med=8.02s  max=22.77s   p(90)=15.1s  p(95)=16.27s  
       { expected_response:true }...: avg=8.39s   min=823.69ms med=8.02s  max=22.77s   p(90)=15.1s  p(95)=16.27s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 28954 
     http_req_receiving.............: avg=70.91µs min=20.29µs  med=51.6µs max=75.98ms  p(90)=77.9µs p(95)=88.2µs  
     http_req_sending...............: avg=55.52µs min=7.4µs    med=13.5µs max=82.48ms  p(90)=29.5µs p(95)=58.73µs 
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s     max=0s       p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=8.39s   min=823.6ms  med=8.02s  max=22.77s   p(90)=15.1s  p(95)=16.27s  
     http_reqs......................: 28954  93.268111/s
     iteration_duration.............: avg=8.39s   min=824.77ms med=8.02s  max=22.77s   p(90)=15.1s  p(95)=16.27s  
     iterations.....................: 28954  93.268111/s
     vus............................: 163    min=50      max=1500
     vus_max........................: 1500   min=1500    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/60ab33cc-98c2-4793-b136-e482d07a1900/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/15a8ce69-11e9-4219-8b83-0ef8134bb200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 82758     ✗ 0     
     data_received..................: 139 MB  448 kB/s
     data_sent......................: 33 MB   106 kB/s
     http_req_blocked...............: avg=92.28µs min=1µs    med=2.6µs  max=46.61ms p(90)=4.1µs  p(95)=171.97µs
     http_req_connecting............: avg=84.88µs min=0s     med=0s     max=46.29ms p(90)=0s     p(95)=114.82µs
     http_req_duration..............: avg=8.75s   min=9.13ms med=8.61s  max=17.95s  p(90)=15.6s  p(95)=16.77s  
       { expected_response:true }...: avg=8.75s   min=9.13ms med=8.61s  max=17.95s  p(90)=15.6s  p(95)=16.77s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 27586 
     http_req_receiving.............: avg=60.6µs  min=18.1µs med=56.9µs max=8.42ms  p(90)=82.4µs p(95)=88.5µs  
     http_req_sending...............: avg=34.94µs min=6.7µs  med=15.6µs max=22.13ms p(90)=32.5µs p(95)=57.9µs  
     http_req_tls_handshaking.......: avg=0s      min=0s     med=0s     max=0s      p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=8.75s   min=9.02ms med=8.61s  max=17.95s  p(90)=15.6s  p(95)=16.77s  
     http_reqs......................: 27586   88.985537/s
     iteration_duration.............: avg=8.75s   min=9.88ms med=8.61s  max=17.95s  p(90)=15.6s  p(95)=16.77s  
     iterations.....................: 27586   88.985537/s
     vus............................: 47      min=47      max=1500
     vus_max........................: 1500    min=1500    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d016e3ba-1e38-431a-d9f6-921b2785af00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/29893649-87c3-49be-9499-afd769735b00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-deno`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  97% — ✓ 29155 / ✗ 630
     ✗ valid response structure
      ↳  97% — ✓ 29155 / ✗ 630

     checks.........................: 98.58% ✓ 88095    ✗ 1260  
     data_received..................: 157 MB 503 kB/s
     data_sent......................: 35 MB  113 kB/s
     http_req_blocked...............: avg=37.37µs min=800ns    med=2µs     max=20.08ms p(90)=3.6µs   p(95)=152.5µs
     http_req_connecting............: avg=30.58µs min=0s       med=0s      max=19.74ms p(90)=0s      p(95)=94.4µs 
     http_req_duration..............: avg=8.24s   min=573.83ms med=7.75s   max=34.32s  p(90)=14.35s  p(95)=16.96s 
       { expected_response:true }...: avg=8.24s   min=573.83ms med=7.75s   max=34.32s  p(90)=14.35s  p(95)=16.96s 
     http_req_failed................: 0.00%  ✓ 0        ✗ 29785 
     http_req_receiving.............: avg=96.91µs min=13.7µs   med=28.29µs max=27.37ms p(90)=77.39µs p(95)=100.8µs
     http_req_sending...............: avg=53.76µs min=5.9µs    med=11.4µs  max=28.63ms p(90)=34.1µs  p(95)=79.37µs
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s      max=0s      p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=8.24s   min=573.63ms med=7.75s   max=34.32s  p(90)=14.35s  p(95)=16.96s 
     http_reqs......................: 29785  95.51279/s
     iteration_duration.............: avg=8.24s   min=575.14ms med=7.75s   max=34.32s  p(90)=14.35s  p(95)=16.96s 
     iterations.....................: 29785  95.51279/s
     vus............................: 330    min=50     max=1500
     vus_max........................: 1500   min=1500   max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a3757a56-f409-4346-8bc0-f0c9c3e8ee00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e87c14d7-219a-491c-f74e-b7bac0a18e00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  98% — ✓ 25147 / ✗ 283
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 25430

     checks.........................: 66.29% ✓ 50577     ✗ 25713 
     data_received..................: 130 MB 415 kB/s
     data_sent......................: 30 MB  97 kB/s
     http_req_blocked...............: avg=70.94µs min=1.3µs    med=2.8µs   max=86.48ms p(90)=5µs    p(95)=217.95µs
     http_req_connecting............: avg=60.86µs min=0s       med=0s      max=86.36ms p(90)=0s     p(95)=148.66µs
     http_req_duration..............: avg=9.67s   min=799.05ms med=9.24s   max=27.3s   p(90)=17.28s p(95)=18.33s  
       { expected_response:true }...: avg=9.67s   min=799.05ms med=9.24s   max=27.3s   p(90)=17.28s p(95)=18.33s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 25430 
     http_req_receiving.............: avg=73.19µs min=22.6µs   med=65.69µs max=11.35ms p(90)=91.2µs p(95)=101.5µs 
     http_req_sending...............: avg=32.94µs min=9.1µs    med=16µs    max=54.14ms p(90)=35.1µs p(95)=63.8µs  
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s      max=0s      p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=9.67s   min=798.96ms med=9.24s   max=27.3s   p(90)=17.28s p(95)=18.33s  
     http_reqs......................: 25430  81.294258/s
     iteration_duration.............: avg=9.67s   min=799.46ms med=9.24s   max=27.3s   p(90)=17.28s p(95)=18.33s  
     iterations.....................: 25430  81.294258/s
     vus............................: 156    min=0       max=1500
     vus_max........................: 1500   min=957     max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/74823f0f-cec2-4be3-6b2e-caab0f301600/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/135852a9-3457-41a2-3a50-e4a828e07900/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  99% — ✓ 30631 / ✗ 6
     ✗ no graphql errors
      ↳  99% — ✓ 30473 / ✗ 164
     ✗ valid response structure
      ↳  99% — ✓ 30473 / ✗ 158

     checks.........................: 99.64% ✓ 91577    ✗ 328   
     data_received..................: 152 MB 490 kB/s
     data_sent......................: 36 MB  117 kB/s
     http_req_blocked...............: avg=70.48µs  min=1.2µs    med=2.5µs  max=304.17ms p(90)=4.8µs  p(95)=93.9µs 
     http_req_connecting............: avg=62.98µs  min=0s       med=0s     max=303.97ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=7.95s    min=115.7ms  med=6.97s  max=32.18s   p(90)=16.84s p(95)=18.96s 
       { expected_response:true }...: avg=7.94s    min=115.7ms  med=6.97s  max=32.18s   p(90)=16.83s p(95)=18.94s 
     http_req_failed................: 0.01%  ✓ 6        ✗ 30631 
     http_req_receiving.............: avg=105.33µs min=21µs     med=49.2µs max=277.88ms p(90)=79.4µs p(95)=94.2µs 
     http_req_sending...............: avg=124.77µs min=7.2µs    med=13.5µs max=317.55ms p(90)=34.9µs p(95)=73.34µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=7.95s    min=115.64ms med=6.97s  max=32.18s   p(90)=16.84s p(95)=18.96s 
     http_reqs......................: 30637  98.37352/s
     iteration_duration.............: avg=7.95s    min=116.38ms med=6.97s  max=32.18s   p(90)=16.84s p(95)=18.96s 
     iterations.....................: 30637  98.37352/s
     vus............................: 123    min=50     max=1500
     vus_max........................: 1500   min=1500   max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/af44cea9-baa1-490c-e243-740dd8fd7800/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ec75c256-4969-4a63-70d3-634ba3454f00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga-uws`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  57% — ✓ 9793 / ✗ 7252
     ✗ valid response structure
      ↳  57% — ✓ 9793 / ✗ 7252

     checks.........................: 71.63% ✓ 36631     ✗ 14504 
     data_received..................: 67 MB  208 kB/s
     data_sent......................: 20 MB  63 kB/s
     http_req_blocked...............: avg=104.92µs min=1.3µs    med=2.6µs  max=130.79ms p(90)=22.4µs   p(95)=505.76µs
     http_req_connecting............: avg=69.86µs  min=0s       med=0s     max=128.95ms p(90)=0s       p(95)=420.14µs
     http_req_duration..............: avg=14.99s   min=111.67ms med=8.27s  max=55.11s   p(90)=37.05s   p(95)=41.15s  
       { expected_response:true }...: avg=14.99s   min=111.67ms med=8.27s  max=55.11s   p(90)=37.05s   p(95)=41.15s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 17045 
     http_req_receiving.............: avg=103.1µs  min=18.89µs  med=57.5µs max=64.39ms  p(90)=105.76µs p(95)=146.18µs
     http_req_sending...............: avg=77.41µs  min=8.3µs    med=15.4µs max=43.54ms  p(90)=66.3µs   p(95)=107.38µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=14.99s   min=111.58ms med=8.27s  max=55.11s   p(90)=37.04s   p(95)=41.15s  
     http_reqs......................: 17045  52.628717/s
     iteration_duration.............: avg=14.99s   min=111.94ms med=8.28s  max=55.11s   p(90)=37.05s   p(95)=41.15s  
     iterations.....................: 17045  52.628717/s
     vus............................: 140    min=0       max=1500
     vus_max........................: 1500   min=1074    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2d23f9f9-b072-4496-68a4-05c07535cd00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/47cdd37d-a123-4df1-5801-ac407a978700/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server-node16`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  99% — ✓ 15809 / ✗ 7
     ✗ no graphql errors
      ↳  45% — ✓ 7226 / ✗ 8590
     ✗ valid response structure
      ↳  45% — ✓ 7226 / ✗ 8583

     checks.........................: 63.78% ✓ 30261     ✗ 17180 
     data_received..................: 66 MB  197 kB/s
     data_sent......................: 19 MB  57 kB/s
     http_req_blocked...............: avg=63.93µs min=1.4µs    med=3.4µs  max=20.29ms p(90)=19.65µs p(95)=527.03µs
     http_req_connecting............: avg=50.2µs  min=0s       med=0s     max=20.22ms p(90)=0s      p(95)=434.33µs
     http_req_duration..............: avg=16.5s   min=146.36ms med=8.72s  max=59.53s  p(90)=41.54s  p(95)=45.92s  
       { expected_response:true }...: avg=16.51s  min=146.36ms med=8.73s  max=59.53s  p(90)=41.54s  p(95)=45.93s  
     http_req_failed................: 0.04%  ✓ 7         ✗ 15809 
     http_req_receiving.............: avg=96.18µs min=0s       med=76.3µs max=90.39ms p(90)=115.6µs p(95)=132.8µs 
     http_req_sending...............: avg=40.39µs min=8.2µs    med=19.6µs max=30.38ms p(90)=61.2µs  p(95)=85.82µs 
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s     max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=16.5s   min=146.25ms med=8.72s  max=59.53s  p(90)=41.54s  p(95)=45.92s  
     http_reqs......................: 15816  47.491224/s
     iteration_duration.............: avg=16.51s  min=147.11ms med=8.73s  max=59.53s  p(90)=41.54s  p(95)=45.93s  
     iterations.....................: 15816  47.491224/s
     vus............................: 6      min=0       max=1500
     vus_max........................: 1500   min=1464    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/397cfce2-ae2e-4582-eccc-ca62ffcd7400/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f175c9d3-7163-40c7-a35d-ecb8cb16a700/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  86% — ✓ 17751 / ✗ 2779
     ✗ no graphql errors
      ↳  85% — ✓ 17507 / ✗ 3023
     ✗ valid response structure
      ↳  98% — ✓ 17507 / ✗ 244

     checks.........................: 89.71% ✓ 52765     ✗ 6046  
     data_received..................: 89 MB  266 kB/s
     data_sent......................: 25 MB  73 kB/s
     http_req_blocked...............: avg=241.16µs min=1.2µs   med=3.2µs  max=24.19ms p(90)=379.44µs p(95)=721.12µs
     http_req_connecting............: avg=219.05µs min=0s      med=0s     max=24.08ms p(90)=303.32µs p(95)=571.88µs
     http_req_duration..............: avg=12.32s   min=75.64ms med=3.99s  max=1m0s    p(90)=59.99s   p(95)=1m0s    
       { expected_response:true }...: avg=4.85s    min=75.64ms med=3.91s  max=59.96s  p(90)=4.52s    p(95)=5.59s   
     http_req_failed................: 13.53% ✓ 2779      ✗ 17751 
     http_req_receiving.............: avg=68.12µs  min=0s      med=62.4µs max=14.93ms p(90)=97.5µs   p(95)=108.3µs 
     http_req_sending...............: avg=50.45µs  min=8.2µs   med=18µs   max=18.42ms p(90)=60.4µs   p(95)=82.9µs  
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=12.32s   min=75.53ms med=3.99s  max=1m0s    p(90)=59.99s   p(95)=1m0s    
     http_reqs......................: 20530  61.395537/s
     iteration_duration.............: avg=12.32s   min=76.38ms med=3.99s  max=1m0s    p(90)=1m0s     p(95)=1m0s    
     iterations.....................: 20530  61.395537/s
     vus............................: 12     min=12      max=1500
     vus_max........................: 1500   min=1500    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d73485dc-a10b-43f5-e200-7834dc204a00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/933cfb26-0753-41d8-0d1c-a2deea2b5c00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  87% — ✓ 18628 / ✗ 2732
     ✗ no graphql errors
      ↳  85% — ✓ 18361 / ✗ 2999
     ✗ valid response structure
      ↳  98% — ✓ 18361 / ✗ 267

     checks.........................: 90.22% ✓ 55350     ✗ 5998  
     data_received..................: 96 MB  286 kB/s
     data_sent......................: 26 MB  76 kB/s
     http_req_blocked...............: avg=196.09µs min=1.3µs   med=2.7µs  max=41.5ms  p(90)=345.73µs p(95)=619.03µs
     http_req_connecting............: avg=172.58µs min=0s      med=0s     max=41.41ms p(90)=275.6µs  p(95)=482.91µs
     http_req_duration..............: avg=11.87s   min=97.78ms med=3.99s  max=1m0s    p(90)=59.99s   p(95)=1m0s    
       { expected_response:true }...: avg=4.81s    min=97.78ms med=3.92s  max=59.8s   p(90)=4.62s    p(95)=5.48s   
     http_req_failed................: 12.79% ✓ 2732      ✗ 18628 
     http_req_receiving.............: avg=59.93µs  min=0s      med=58.3µs max=10.44ms p(90)=85.2µs   p(95)=94.4µs  
     http_req_sending...............: avg=41.88µs  min=8.6µs   med=15.1µs max=31.97ms p(90)=53.5µs   p(95)=70.9µs  
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=11.87s   min=97.7ms  med=3.99s  max=1m0s    p(90)=59.99s   p(95)=1m0s    
     http_reqs......................: 21360  63.886804/s
     iteration_duration.............: avg=11.87s   min=98.45ms med=3.99s  max=1m0s    p(90)=1m0s     p(95)=1m0s    
     iterations.....................: 21360  63.886804/s
     vus............................: 3      min=3       max=1500
     vus_max........................: 1500   min=1500    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2b79a157-1bb4-4298-c425-175153ff6000/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ff72f4bb-9214-4d8b-5d59-9d91b27ea300/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  90% — ✓ 25233 / ✗ 2666
     ✗ no graphql errors
      ↳  90% — ✓ 25130 / ✗ 2769
     ✗ valid response structure
      ↳  99% — ✓ 25130 / ✗ 103

     checks.........................: 93.16% ✓ 75493    ✗ 5538  
     data_received..................: 128 MB 384 kB/s
     data_sent......................: 33 MB  100 kB/s
     http_req_blocked...............: avg=244.52µs min=1.3µs   med=2.5µs  max=56.15ms p(90)=247.42µs p(95)=466.51µs
     http_req_connecting............: avg=227.18µs min=0s      med=0s     max=55.91ms p(90)=195.62µs p(95)=379.92µs
     http_req_duration..............: avg=9.06s    min=44.03ms med=3.14s  max=1m0s    p(90)=38.78s   p(95)=1m0s    
       { expected_response:true }...: avg=3.72s    min=44.03ms med=3.12s  max=59.54s  p(90)=3.41s    p(95)=3.82s   
     http_req_failed................: 9.55%  ✓ 2666     ✗ 25233 
     http_req_receiving.............: avg=59.17µs  min=0s      med=47.6µs max=35.91ms p(90)=73.4µs   p(95)=88.4µs  
     http_req_sending...............: avg=52.81µs  min=7.6µs   med=13.4µs max=52.39ms p(90)=47.9µs   p(95)=68.5µs  
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=9.06s    min=43.93ms med=3.14s  max=1m0s    p(90)=38.78s   p(95)=1m0s    
     http_reqs......................: 27899  83.66847/s
     iteration_duration.............: avg=9.06s    min=44.74ms med=3.15s  max=1m0s    p(90)=38.78s   p(95)=1m0s    
     iterations.....................: 27899  83.66847/s
     vus............................: 18     min=18     max=1500
     vus_max........................: 1500   min=1500   max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ee004506-bd58-4740-7a39-5d74166ee600/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0325eef6-a358-42e9-4274-4ba88d8f8d00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-uws`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  93% — ✓ 14826 / ✗ 988
     ✗ no graphql errors
      ↳  61% — ✓ 9776 / ✗ 6038
     ✗ valid response structure
      ↳  65% — ✓ 9776 / ✗ 5050

     checks.........................: 74.00% ✓ 34378    ✗ 12076 
     data_received..................: 117 MB 346 kB/s
     data_sent......................: 19 MB  57 kB/s
     http_req_blocked...............: avg=101.06µs min=1.5µs    med=3.2µs  max=46.19ms p(90)=196.25µs p(95)=541.17µs
     http_req_connecting............: avg=84.98µs  min=0s       med=0s     max=46.1ms  p(90)=129.57µs p(95)=455.83µs
     http_req_duration..............: avg=15.78s   min=426.11ms med=7.19s  max=1m0s    p(90)=49.16s   p(95)=1m0s    
       { expected_response:true }...: avg=12.84s   min=426.11ms med=6.55s  max=59.97s  p(90)=39.09s   p(95)=46.39s  
     http_req_failed................: 6.24%  ✓ 988      ✗ 14826 
     http_req_receiving.............: avg=89.39µs  min=0s       med=65.3µs max=32.64ms p(90)=129.5µs  p(95)=173.54µs
     http_req_sending...............: avg=49.92µs  min=8.1µs    med=18.6µs max=13.12ms p(90)=60.3µs   p(95)=86.04µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=15.78s   min=425.18ms med=7.19s  max=1m0s    p(90)=49.16s   p(95)=1m0s    
     http_reqs......................: 15814  46.95628/s
     iteration_duration.............: avg=15.78s   min=426.44ms med=7.19s  max=1m0s    p(90)=49.16s   p(95)=1m0s    
     iterations.....................: 15814  46.95628/s
     vus............................: 2      min=0      max=1500
     vus_max........................: 1500   min=1299   max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/cd85ebae-e346-4150-2c1d-2b5a707e2400/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c9a81984-e652-4cc7-bf17-d68009972600/public" alt="HTTP Overview" />


  </details>