## Overview for: `fed-v1-ramping-vus`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. We are running a heavy load of concurrent VUs to measure response time and other stats, during stress. It measure things like memory usage, CPU usage, response times. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was trying to reach 1500 concurrent VUs over 300s


### Comparison


| Gateway                             | duration(p95)⬇️ |  RPS  |         Requests         |                       Durations                        |
| :---------------------------------- | :-------------: | :---: | :----------------------: | :----------------------------------------------------: |
| wundergraph                         |     2448ms      |  637  |  197702 total, 0 failed  |   avg: 1181ms, p95: 2449ms, max: 4755ms, med: 1082ms   |
| apollo-router                       |     14485ms     |  113  |  35952 total, 0 failed   |  avg: 6965ms, p95: 14486ms, max: 23182ms, med: 5609ms  |
| mercurius                           |     16352ms     |  91   |  28234 total, 0 failed   |  avg: 8552ms, p95: 16352ms, max: 17453ms, med: 8633ms  |
| mesh                                |     17838ms     |  84   |  26242 total, 0 failed   |  avg: 9401ms, p95: 17839ms, max: 23205ms, med: 9028ms  |
| mesh-supergraph                     |     20742ms     |  72   |  22696 total, 0 failed   | avg: 10931ms, p95: 20743ms, max: 27020ms, med: 10630ms |
| stitching-federation-with-yoga-deno |     22045ms     |  75   |  23758 total, 0 failed   | avg: 10371ms, p95: 22045ms, max: 38170ms, med: 9577ms  |
| stitching-federation-with-yoga-bun  |     24718ms     |  73   |  23107 total, 0 failed   | avg: 10722ms, p95: 24718ms, max: 52015ms, med: 10696ms |
| apollo-gateway-with-yoga-uws        |     43277ms     |  54   |  17557 total, 0 failed   | avg: 14685ms, p95: 43277ms, max: 53414ms, med: 8636ms  |
| stitching-federation-with-yoga-uws  |     59931ms     |  46   | 15957 total, 796 failed  | avg: 14369ms, p95: 59932ms, max: 60020ms, med: 6335ms  |
| apollo-gateway-with-yoga            |     60000ms     |  62   | 20736 total, 2770 failed | avg: 12246ms, p95: 60000ms, max: 60015ms, med: 4061ms  |
| apollo-server                       |     60000ms     |  62   | 21018 total, 2758 failed | avg: 12043ms, p95: 60000ms, max: 60036ms, med: 3957ms  |
| apollo-server-node16                |     60000ms     |  34   | 11782 total, 1079 failed | avg: 20740ms, p95: 60001ms, max: 60015ms, med: 12830ms |
| stitching-federation-with-yoga      |     60000ms     |  80   | 26857 total, 2694 failed |  avg: 9430ms, p95: 60000ms, max: 60044ms, med: 3116ms  |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 593106    ✗ 0     
     data_received..................: 985 MB  3.2 MB/s
     data_sent......................: 235 MB  757 kB/s
     http_req_blocked...............: avg=941.2µs  min=1.1µs   med=2.5µs   max=1.15s p(90)=4.5µs   p(95)=5.9µs   
     http_req_connecting............: avg=929.95µs min=0s      med=0s      max=1.15s p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=1.18s    min=8.2ms   med=1.08s   max=4.75s p(90)=2.16s   p(95)=2.44s   
       { expected_response:true }...: avg=1.18s    min=8.2ms   med=1.08s   max=4.75s p(90)=2.16s   p(95)=2.44s   
     http_req_failed................: 0.00%   ✓ 0         ✗ 197702
     http_req_receiving.............: avg=6.76ms   min=16.29µs med=40.09µs max=1.92s p(90)=222.6µs p(95)=805.49µs
     http_req_sending...............: avg=1.91ms   min=6.7µs   med=13.2µs  max=1.92s p(90)=32.3µs  p(95)=131.5µs 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s    p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=1.17s    min=8ms     med=1.07s   max=4.23s p(90)=2.14s   p(95)=2.4s    
     http_reqs......................: 197702  637.72644/s
     iteration_duration.............: avg=1.2s     min=8.84ms  med=1.1s    max=4.75s p(90)=2.2s    p(95)=2.49s   
     iterations.....................: 197702  637.72644/s
     vus............................: 10      min=3       max=1500
     vus_max........................: 1500    min=1500    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/145a584c-c42a-4790-5e67-16e3ed94df00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8403ee43-04b7-4497-c832-c7309b630e00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 35835 / ✗ 117
     ✗ valid response structure
      ↳  99% — ✓ 35835 / ✗ 117

     checks.........................: 99.78% ✓ 107622     ✗ 234   
     data_received..................: 179 MB 566 kB/s
     data_sent......................: 43 MB  135 kB/s
     http_req_blocked...............: avg=103.11µs min=900ns    med=2.1µs  max=464.89ms p(90)=3.4µs  p(95)=16.89µs
     http_req_connecting............: avg=90.07µs  min=0s       med=0s     max=464.81ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=6.96s    min=102.48ms med=5.6s   max=23.18s   p(90)=13.53s p(95)=14.48s 
       { expected_response:true }...: avg=6.96s    min=102.48ms med=5.6s   max=23.18s   p(90)=13.53s p(95)=14.48s 
     http_req_failed................: 0.00%  ✓ 0          ✗ 35952 
     http_req_receiving.............: avg=778.12µs min=16.4µs   med=37.9µs max=242.88ms p(90)=69.4µs p(95)=83.3µs 
     http_req_sending...............: avg=160.47µs min=6.1µs    med=12.5µs max=242.91ms p(90)=29.2µs p(95)=60.34µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=6.96s    min=102.44ms med=5.6s   max=23.18s   p(90)=13.53s p(95)=14.48s 
     http_reqs......................: 35952  113.698394/s
     iteration_duration.............: avg=6.96s    min=103.26ms med=5.6s   max=23.18s   p(90)=13.53s p(95)=14.48s 
     iterations.....................: 35952  113.698394/s
     vus............................: 27     min=27       max=1500
     vus_max........................: 1500   min=1500     max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c5a1cc5f-db31-4f3e-5195-0f3a3afe3b00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a46ce287-d0ff-49c3-6356-8485f2c11c00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 84702     ✗ 0     
     data_received..................: 142 MB  458 kB/s
     data_sent......................: 34 MB   108 kB/s
     http_req_blocked...............: avg=31.63µs min=900ns  med=2.4µs  max=21.62ms p(90)=3.9µs   p(95)=163.77µs
     http_req_connecting............: avg=24.68µs min=0s     med=0s     max=21.55ms p(90)=0s      p(95)=104.9µs 
     http_req_duration..............: avg=8.55s   min=7.75ms med=8.63s  max=17.45s  p(90)=15.33s  p(95)=16.35s  
       { expected_response:true }...: avg=8.55s   min=7.75ms med=8.63s  max=17.45s  p(90)=15.33s  p(95)=16.35s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 28234 
     http_req_receiving.............: avg=56.37µs min=16.4µs med=50.1µs max=18.13ms p(90)=76.59µs p(95)=82.59µs 
     http_req_sending...............: avg=26.91µs min=5.8µs  med=14.3µs max=11.91ms p(90)=30.5µs  p(95)=56.59µs 
     http_req_tls_handshaking.......: avg=0s      min=0s     med=0s     max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=8.55s   min=7.69ms med=8.63s  max=17.45s  p(90)=15.33s  p(95)=16.35s  
     http_reqs......................: 28234   91.073929/s
     iteration_duration.............: avg=8.55s   min=8.34ms med=8.63s  max=17.45s  p(90)=15.34s  p(95)=16.35s  
     iterations.....................: 28234   91.073929/s
     vus............................: 8       min=8       max=1500
     vus_max........................: 1500    min=1500    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/036d7cb3-78dc-4186-d3d9-05264544ea00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1238bb78-8a1b-4650-54b7-b8f405002300/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 26125 / ✗ 117
     ✗ valid response structure
      ↳  99% — ✓ 26125 / ✗ 117

     checks.........................: 99.70% ✓ 78492     ✗ 234   
     data_received..................: 133 MB 425 kB/s
     data_sent......................: 31 MB  100 kB/s
     http_req_blocked...............: avg=86.75µs  min=1.3µs    med=3µs    max=282.77ms p(90)=5.7µs  p(95)=223.2µs 
     http_req_connecting............: avg=77.97µs  min=0s       med=0s     max=282.35ms p(90)=0s     p(95)=153.59µs
     http_req_duration..............: avg=9.4s     min=946.22ms med=9.02s  max=23.2s    p(90)=16.64s p(95)=17.83s  
       { expected_response:true }...: avg=9.4s     min=946.22ms med=9.02s  max=23.2s    p(90)=16.64s p(95)=17.83s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 26242 
     http_req_receiving.............: avg=97.53µs  min=24.1µs   med=63.9µs max=175.92ms p(90)=94.1µs p(95)=107.29µs
     http_req_sending...............: avg=125.76µs min=8.6µs    med=16µs   max=216.01ms p(90)=36.1µs p(95)=73.2µs  
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=9.4s     min=945.91ms med=9.02s  max=23.2s    p(90)=16.64s p(95)=17.83s  
     http_reqs......................: 26242  84.062528/s
     iteration_duration.............: avg=9.4s     min=948.53ms med=9.02s  max=23.2s    p(90)=16.65s p(95)=17.84s  
     iterations.....................: 26242  84.062528/s
     vus............................: 74     min=0       max=1500
     vus_max........................: 1500   min=1413    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2e102cc0-ea10-4c5f-643b-5b4b0919c600/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a412482b-7265-43bb-e79b-d60fd5f04700/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  98% — ✓ 22439 / ✗ 257
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 22696

     checks.........................: 66.28% ✓ 45135     ✗ 22953 
     data_received..................: 117 MB 370 kB/s
     data_sent......................: 27 MB  86 kB/s
     http_req_blocked...............: avg=44.65µs min=1.4µs    med=2.6µs  max=19.11ms p(90)=15.7µs  p(95)=313.5µs 
     http_req_connecting............: avg=34.83µs min=0s       med=0s     max=19.04ms p(90)=0s      p(95)=213.37µs
     http_req_duration..............: avg=10.93s  min=933.59ms med=10.63s max=27.02s  p(90)=19.08s  p(95)=20.74s  
       { expected_response:true }...: avg=10.93s  min=933.59ms med=10.63s max=27.02s  p(90)=19.08s  p(95)=20.74s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 22696 
     http_req_receiving.............: avg=76.86µs min=26.9µs   med=63.8µs max=15.82ms p(90)=107.1µs p(95)=130.22µs
     http_req_sending...............: avg=29.78µs min=10µs     med=15.5µs max=21.7ms  p(90)=49.4µs  p(95)=69.92µs 
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s     max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=10.93s  min=933.5ms  med=10.62s max=27.01s  p(90)=19.08s  p(95)=20.74s  
     http_reqs......................: 22696  72.030006/s
     iteration_duration.............: avg=10.93s  min=934.23ms med=10.63s max=27.02s  p(90)=19.08s  p(95)=20.74s  
     iterations.....................: 22696  72.030006/s
     vus............................: 160    min=0       max=1500
     vus_max........................: 1500   min=1215    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c732f35e-d48f-43fb-c04f-718a1339ba00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1619a812-9847-4eaa-ec84-05aebe440600/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-deno`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  97% — ✓ 23052 / ✗ 706
     ✗ valid response structure
      ↳  97% — ✓ 23052 / ✗ 706

     checks.........................: 98.01% ✓ 69862     ✗ 1412  
     data_received..................: 129 MB 411 kB/s
     data_sent......................: 28 MB  90 kB/s
     http_req_blocked...............: avg=66.58µs  min=1.1µs    med=2.7µs  max=31.39ms p(90)=6.3µs   p(95)=272.95µs
     http_req_connecting............: avg=55.73µs  min=0s       med=0s     max=31.2ms  p(90)=0s      p(95)=179.84µs
     http_req_duration..............: avg=10.37s   min=576.84ms med=9.57s  max=38.16s  p(90)=20.1s   p(95)=22.04s  
       { expected_response:true }...: avg=10.37s   min=576.84ms med=9.57s  max=38.16s  p(90)=20.1s   p(95)=22.04s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 23758 
     http_req_receiving.............: avg=133.67µs min=17.7µs   med=40.2µs max=35.42ms p(90)=103.5µs p(95)=142.41µs
     http_req_sending...............: avg=74.89µs  min=6.8µs    med=14.5µs max=43.44ms p(90)=67.8µs  p(95)=101.8µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=10.37s   min=576.68ms med=9.57s  max=38.16s  p(90)=20.1s   p(95)=22.04s  
     http_reqs......................: 23758  75.918891/s
     iteration_duration.............: avg=10.37s   min=578.33ms med=9.57s  max=38.16s  p(90)=20.1s   p(95)=22.04s  
     iterations.....................: 23758  75.918891/s
     vus............................: 354    min=50      max=1500
     vus_max........................: 1500   min=1500    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/86848ddc-2856-4e0e-ac34-65fa8a094e00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/46eb14ca-50bd-4190-be6b-3f04f59fbf00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 23081 / ✗ 26
     ✗ valid response structure
      ↳  99% — ✓ 23081 / ✗ 26

     checks.........................: 99.92% ✓ 69269     ✗ 52    
     data_received..................: 115 MB 365 kB/s
     data_sent......................: 27 MB  87 kB/s
     http_req_blocked...............: avg=154.83µs min=1.6µs    med=3µs    max=467.48ms p(90)=19.5µs  p(95)=245.77µs
     http_req_connecting............: avg=137.86µs min=0s       med=0s     max=466.95ms p(90)=0s      p(95)=153.97µs
     http_req_duration..............: avg=10.72s   min=828.08ms med=10.69s max=52.01s   p(90)=15.38s  p(95)=24.71s  
       { expected_response:true }...: avg=10.72s   min=828.08ms med=10.69s max=52.01s   p(90)=15.38s  p(95)=24.71s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 23107 
     http_req_receiving.............: avg=257.62µs min=29.2µs   med=71.4µs max=386.61ms p(90)=128.9µs p(95)=220.2µs 
     http_req_sending...............: avg=303.39µs min=10.1µs   med=18.8µs max=441.86ms p(90)=77.3µs  p(95)=132.17µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=10.72s   min=827.62ms med=10.69s max=52.01s   p(90)=15.38s  p(95)=24.71s  
     http_reqs......................: 23107  73.163166/s
     iteration_duration.............: avg=10.72s   min=829.81ms med=10.69s max=52.01s   p(90)=15.38s  p(95)=24.71s  
     iterations.....................: 23107  73.163166/s
     vus............................: 140    min=0       max=1500
     vus_max........................: 1500   min=1078    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b4ba1d1f-32c7-47e3-5480-8bcafa7fb900/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/34ecf59f-2492-42af-a15e-32fcc35cf800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga-uws`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  57% — ✓ 10094 / ✗ 7463
     ✗ valid response structure
      ↳  57% — ✓ 10094 / ✗ 7463

     checks.........................: 71.66% ✓ 37745     ✗ 14926 
     data_received..................: 74 MB  230 kB/s
     data_sent......................: 21 MB  65 kB/s
     http_req_blocked...............: avg=86.63µs min=1.4µs    med=2.9µs  max=284.56ms p(90)=18.7µs  p(95)=476.36µs
     http_req_connecting............: avg=66.64µs min=0s       med=0s     max=192.95ms p(90)=0s      p(95)=397.05µs
     http_req_duration..............: avg=14.68s  min=117.14ms med=8.63s  max=53.41s   p(90)=35.61s  p(95)=43.27s  
       { expected_response:true }...: avg=14.68s  min=117.14ms med=8.63s  max=53.41s   p(90)=35.61s  p(95)=43.27s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 17557 
     http_req_receiving.............: avg=91.85µs min=18.8µs   med=56.6µs max=45.31ms  p(90)=92.3µs  p(95)=113.01µs
     http_req_sending...............: avg=86.93µs min=7.8µs    med=16.1µs max=157.47ms p(90)=60.04µs p(95)=89.72µs 
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s     max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=14.68s  min=117.02ms med=8.63s  max=53.41s   p(90)=35.61s  p(95)=43.27s  
     http_reqs......................: 17557  54.659356/s
     iteration_duration.............: avg=14.68s  min=118.07ms med=8.63s  max=53.41s   p(90)=35.61s  p(95)=43.27s  
     iterations.....................: 17557  54.659356/s
     vus............................: 127    min=0       max=1498
     vus_max........................: 1500   min=1180    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d9df6196-c726-4ea8-8a6e-e72c0a46bc00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/edbf221a-2592-46ea-de12-a7a1392c0d00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-uws`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  95% — ✓ 15161 / ✗ 796
     ✗ no graphql errors
      ↳  67% — ✓ 10765 / ✗ 5192
     ✗ valid response structure
      ↳  71% — ✓ 10765 / ✗ 4396

     checks.........................: 77.94% ✓ 36691     ✗ 10384 
     data_received..................: 117 MB 345 kB/s
     data_sent......................: 20 MB  59 kB/s
     http_req_blocked...............: avg=78.32µs min=1.3µs    med=3µs    max=18.94ms p(90)=163.68µs p(95)=494.95µs
     http_req_connecting............: avg=64.69µs min=0s       med=0s     max=18.85ms p(90)=104.04µs p(95)=413.75µs
     http_req_duration..............: avg=14.36s  min=133ms    med=6.33s  max=1m0s    p(90)=45.99s   p(95)=59.93s  
       { expected_response:true }...: avg=11.97s  min=133ms    med=6.02s  max=59.98s  p(90)=34.22s   p(95)=46.61s  
     http_req_failed................: 4.98%  ✓ 796       ✗ 15161 
     http_req_receiving.............: avg=85.63µs min=0s       med=63.7µs max=20.3ms  p(90)=117.5µs  p(95)=162.72µs
     http_req_sending...............: avg=56.65µs min=8.4µs    med=17.1µs max=19.92ms p(90)=57.8µs   p(95)=84.9µs  
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=14.36s  min=132.95ms med=6.33s  max=1m0s    p(90)=45.99s   p(95)=59.93s  
     http_reqs......................: 15957  46.945867/s
     iteration_duration.............: avg=14.37s  min=133.76ms med=6.33s  max=1m0s    p(90)=45.99s   p(95)=59.93s  
     iterations.....................: 15957  46.945867/s
     vus............................: 1      min=0       max=1500
     vus_max........................: 1500   min=1276    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4c69abca-6882-4bd4-91ae-8624a9720a00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/48dca1ab-4208-460f-4244-e4f6f4a51400/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  86% — ✓ 17966 / ✗ 2770
     ✗ no graphql errors
      ↳  85% — ✓ 17743 / ✗ 2993
     ✗ valid response structure
      ↳  98% — ✓ 17743 / ✗ 223

     checks.........................: 89.92% ✓ 53452     ✗ 5986  
     data_received..................: 90 MB  269 kB/s
     data_sent......................: 25 MB  74 kB/s
     http_req_blocked...............: avg=260.37µs min=1.5µs    med=3.3µs  max=39.5ms  p(90)=393.8µs p(95)=837.04µs
     http_req_connecting............: avg=238.3µs  min=0s       med=0s     max=39.42ms p(90)=312.3µs p(95)=682.91µs
     http_req_duration..............: avg=12.24s   min=109.6ms  med=4.06s  max=1m0s    p(90)=59.99s  p(95)=1m0s    
       { expected_response:true }...: avg=4.88s    min=109.6ms  med=3.98s  max=59.72s  p(90)=4.64s   p(95)=5.62s   
     http_req_failed................: 13.35% ✓ 2770      ✗ 17966 
     http_req_receiving.............: avg=69.31µs  min=0s       med=66µs   max=23.2ms  p(90)=98.15µs p(95)=109.3µs 
     http_req_sending...............: avg=59.35µs  min=7.9µs    med=19.4µs max=70.76ms p(90)=61µs    p(95)=83.9µs  
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=12.24s   min=109.46ms med=4.06s  max=1m0s    p(90)=59.99s  p(95)=1m0s    
     http_reqs......................: 20736  62.014314/s
     iteration_duration.............: avg=12.24s   min=110.44ms med=4.06s  max=1m0s    p(90)=1m0s    p(95)=1m0s    
     iterations.....................: 20736  62.014314/s
     vus............................: 7      min=0       max=1500
     vus_max........................: 1500   min=1456    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/92d8394d-fe6e-40d6-48ba-06c52181a900/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2393c2ea-1479-420e-04cf-b62422044b00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  86% — ✓ 18260 / ✗ 2758
     ✗ no graphql errors
      ↳  84% — ✓ 17728 / ✗ 3290
     ✗ valid response structure
      ↳  97% — ✓ 17728 / ✗ 532

     checks.........................: 89.08% ✓ 53716     ✗ 6580  
     data_received..................: 93 MB  279 kB/s
     data_sent......................: 25 MB  75 kB/s
     http_req_blocked...............: avg=227.85µs min=1.4µs   med=2.8µs  max=62.08ms p(90)=338.73µs p(95)=598.95µs
     http_req_connecting............: avg=206.13µs min=0s      med=0s     max=62.01ms p(90)=276.33µs p(95)=477.35µs
     http_req_duration..............: avg=12.04s   min=92.52ms med=3.95s  max=1m0s    p(90)=59.99s   p(95)=1m0s    
       { expected_response:true }...: avg=4.79s    min=92.52ms med=3.87s  max=59.89s  p(90)=5.05s    p(95)=5.69s   
     http_req_failed................: 13.12% ✓ 2758      ✗ 18260 
     http_req_receiving.............: avg=59.33µs  min=0s      med=56µs   max=8.94ms  p(90)=87.1µs   p(95)=95.9µs  
     http_req_sending...............: avg=53.29µs  min=7.6µs   med=16.1µs max=24.51ms p(90)=54.1µs   p(95)=72µs    
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=12.04s   min=92.43ms med=3.95s  max=1m0s    p(90)=59.99s   p(95)=1m0s    
     http_reqs......................: 21018  62.860185/s
     iteration_duration.............: avg=12.04s   min=93.18ms med=3.95s  max=1m0s    p(90)=1m0s     p(95)=1m0s    
     iterations.....................: 21018  62.860185/s
     vus............................: 6      min=6       max=1500
     vus_max........................: 1500   min=1500    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4716e779-518f-4dd4-6052-13b4b1098700/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d3415819-3471-48dc-7e9f-baf74395e500/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server-node16`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  90% — ✓ 10703 / ✗ 1079
     ✗ no graphql errors
      ↳  38% — ✓ 4578 / ✗ 7204
     ✗ valid response structure
      ↳  42% — ✓ 4578 / ✗ 6125

     checks.........................: 57.95% ✓ 19859     ✗ 14408 
     data_received..................: 40 MB  118 kB/s
     data_sent......................: 15 MB  43 kB/s
     http_req_blocked...............: avg=220.32µs min=1.8µs    med=3.5µs  max=281.8ms  p(90)=472.6µs  p(95)=610.89µs
     http_req_connecting............: avg=198.93µs min=0s       med=0s     max=281.59ms p(90)=386.19µs p(95)=521.28µs
     http_req_duration..............: avg=20.73s   min=437.72ms med=12.83s max=1m0s     p(90)=54.5s    p(95)=1m0s    
       { expected_response:true }...: avg=16.78s   min=437.72ms med=10.61s max=59.97s   p(90)=41.3s    p(95)=46.26s  
     http_req_failed................: 9.15%  ✓ 1079      ✗ 10703 
     http_req_receiving.............: avg=152.72µs min=0s       med=82.4µs max=181.81ms p(90)=131.4µs  p(95)=162.59µs
     http_req_sending...............: avg=207.16µs min=9.6µs    med=22µs   max=230.2ms  p(90)=71.09µs  p(95)=107.7µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=20.73s   min=437.6ms  med=12.83s max=1m0s     p(90)=54.5s    p(95)=1m0s    
     http_reqs......................: 11782  34.652418/s
     iteration_duration.............: avg=20.74s   min=438.5ms  med=12.83s max=1m0s     p(90)=54.5s    p(95)=1m0s    
     iterations.....................: 11782  34.652418/s
     vus............................: 1      min=0       max=1500
     vus_max........................: 1500   min=1107    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a2634cf7-020d-451a-4d18-fc2f01d79b00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7a397888-bb7b-44de-8a0f-5292507f6a00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  89% — ✓ 24163 / ✗ 2694
     ✗ no graphql errors
      ↳  89% — ✓ 24082 / ✗ 2775
     ✗ valid response structure
      ↳  99% — ✓ 24082 / ✗ 81

     checks.........................: 92.87% ✓ 72327    ✗ 5550  
     data_received..................: 123 MB 367 kB/s
     data_sent......................: 32 MB  96 kB/s
     http_req_blocked...............: avg=189.31µs min=1.3µs   med=3.2µs   max=26.23ms p(90)=302.28µs p(95)=555.92µs
     http_req_connecting............: avg=169.17µs min=0s      med=0s      max=26.17ms p(90)=238.84µs p(95)=450µs   
     http_req_duration..............: avg=9.43s    min=49.77ms med=3.11s   max=1m0s    p(90)=59.98s   p(95)=1m0s    
       { expected_response:true }...: avg=3.79s    min=49.77ms med=3.07s   max=59.89s  p(90)=3.47s    p(95)=4.18s   
     http_req_failed................: 10.03% ✓ 2694     ✗ 24163 
     http_req_receiving.............: avg=67.95µs  min=0s      med=65µs    max=9.56ms  p(90)=96.3µs   p(95)=107.7µs 
     http_req_sending...............: avg=49.64µs  min=8.8µs   med=18.39µs max=23.02ms p(90)=52.04µs  p(95)=72.5µs  
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=9.43s    min=49.64ms med=3.11s   max=1m0s    p(90)=59.97s   p(95)=1m0s    
     http_reqs......................: 26857  80.33034/s
     iteration_duration.............: avg=9.43s    min=50.61ms med=3.11s   max=1m0s    p(90)=1m0s     p(95)=1m0s    
     iterations.....................: 26857  80.33034/s
     vus............................: 1      min=0      max=1500
     vus_max........................: 1500   min=1499   max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/af7c836f-fdc8-4bd4-956a-a8d61962cf00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7e430b10-50cf-404e-8ebc-0b8490817100/public" alt="HTTP Overview" />


  </details>