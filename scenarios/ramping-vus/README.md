## Overview for scenario: `ramping-vus`


This scenario runs 4 servics and a GraphQL gatway with Federation spec, and runs a heavy query. We are running a heavy load of concurrent VUs to measure response time and other stats, during stress. It measure things like memory usage, CPU usage, response times. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was trying to reach 1000 concurrent VUs over 60s


### Comparison


| Gateway                  | duration(p95)⬇️ |  RPS  |       Requests        |                       Durations                        |
| :----------------------- | :-------------: | :---: | :-------------------: | :----------------------------------------------------: |
| wundergraph              |     1127ms      |  924  | 64721 total, 0 failed |    avg: 529ms, p95: 1128ms, max: 1960ms, med: 489ms    |
| apollo-router            |     10264ms     |  98   | 7031 total, 0 failed  |  avg: 5511ms, p95: 10264ms, max: 16081ms, med: 5244ms  |
| mercurius                |     14946ms     |  57   | 4012 total, 0 failed  |  avg: 9391ms, p95: 14947ms, max: 15187ms, med: 9530ms  |
| apollo-server            |     23004ms     |  74   | 5249 total, 0 failed  |  avg: 7517ms, p95: 23005ms, max: 35993ms, med: 3778ms  |
| apollo-gateway-with-yoga |     24390ms     |  54   | 4090 total, 70 failed | avg: 10474ms, p95: 24391ms, max: 32711ms, med: 8439ms  |
| mesh                     |     50964ms     |  20   | 1959 total, 3 failed  | avg: 20168ms, p95: 50965ms, max: 56445ms, med: 13351ms |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 194163     ✗ 0     
     data_received..................: 315 MB  4.5 MB/s
     data_sent......................: 77 MB   1.1 MB/s
     http_req_blocked...............: avg=633.89µs min=1µs    med=2.1µs    max=695.02ms p(90)=3.6µs    p(95)=5.1µs   
     http_req_connecting............: avg=618.13µs min=0s     med=0s       max=694.88ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=528.6ms  min=5.98ms med=489.02ms max=1.95s    p(90)=957.63ms p(95)=1.12s   
       { expected_response:true }...: avg=528.6ms  min=5.98ms med=489.02ms max=1.95s    p(90)=957.63ms p(95)=1.12s   
     http_req_failed................: 0.00%   ✓ 0          ✗ 64721 
     http_req_receiving.............: avg=748.81µs min=16µs   med=38.5µs   max=490.89ms p(90)=210.01µs p(95)=428.63µs
     http_req_sending...............: avg=658.11µs min=5.9µs  med=12.1µs   max=427.69ms p(90)=31.5µs   p(95)=121.01µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=527.2ms  min=5.85ms med=487.9ms  max=1.95s    p(90)=955.32ms p(95)=1.12s   
     http_reqs......................: 64721   924.562318/s
     iteration_duration.............: avg=533.03ms min=6.29ms med=490.98ms max=1.96s    p(90)=969.46ms p(95)=1.14s   
     iterations.....................: 64721   924.562318/s
     vus............................: 8       min=8        max=993 
     vus_max........................: 1000    min=1000     max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b5e8f73c-754a-4e9d-5f6b-95b65e087400/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/21a2fa56-6b69-4d37-7a0d-92df67e0ac00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 7024 / ✗ 7
     ✓ expected_result

     checks.........................: 99.96% ✓ 21086     ✗ 7     
     data_received..................: 34 MB  479 kB/s
     data_sent......................: 8.3 MB 116 kB/s
     http_req_blocked...............: avg=90.18µs min=1.3µs    med=2.5µs  max=13.6ms  p(90)=376.3µs p(95)=449.85µs
     http_req_connecting............: avg=77.09µs min=0s       med=0s     max=13.54ms p(90)=311.6µs p(95)=380.45µs
     http_req_duration..............: avg=5.51s   min=150.7ms  med=5.24s  max=16.08s  p(90)=9.22s   p(95)=10.26s  
       { expected_response:true }...: avg=5.51s   min=150.7ms  med=5.24s  max=16.08s  p(90)=9.22s   p(95)=10.26s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 7031  
     http_req_receiving.............: avg=66.14µs min=21.4µs   med=57.6µs max=11.64ms p(90)=86.8µs  p(95)=95.1µs  
     http_req_sending...............: avg=31.63µs min=8.7µs    med=15.6µs max=8.37ms  p(90)=57µs    p(95)=70.9µs  
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s     max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=5.51s   min=150.61ms med=5.24s  max=16.08s  p(90)=9.22s   p(95)=10.26s  
     http_reqs......................: 7031   98.018094/s
     iteration_duration.............: avg=5.51s   min=151.01ms med=5.24s  max=16.08s  p(90)=9.22s   p(95)=10.26s  
     iterations.....................: 7031   98.018094/s
     vus............................: 77     min=56      max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/144ca3b9-8def-4a49-fb6a-c10faca32800/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1089f1b1-b2a2-4c03-58b6-2ff8ac505000/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 12036     ✗ 0     
     data_received..................: 20 MB   280 kB/s
     data_sent......................: 4.8 MB  68 kB/s
     http_req_blocked...............: avg=246.58µs min=1.8µs   med=3.2µs  max=21.39ms p(90)=514.09µs p(95)=581.13µs
     http_req_connecting............: avg=218.3µs  min=0s      med=0s     max=21.35ms p(90)=425.5µs  p(95)=487.73µs
     http_req_duration..............: avg=9.39s    min=14.81ms med=9.52s  max=15.18s  p(90)=14.24s   p(95)=14.94s  
       { expected_response:true }...: avg=9.39s    min=14.81ms med=9.52s  max=15.18s  p(90)=14.24s   p(95)=14.94s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 4012  
     http_req_receiving.............: avg=81.69µs  min=29.3µs  med=73.4µs max=1.86ms  p(90)=115.59µs p(95)=136.39µs
     http_req_sending...............: avg=59.77µs  min=9.5µs   med=21.3µs max=19.49ms p(90)=86.38µs  p(95)=107.5µs 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=9.39s    min=14.74ms med=9.52s  max=15.18s  p(90)=14.24s   p(95)=14.94s  
     http_reqs......................: 4012    57.310874/s
     iteration_duration.............: avg=9.39s    min=15.08ms med=9.53s  max=15.18s  p(90)=14.24s   p(95)=14.94s  
     iterations.....................: 4012    57.310874/s
     vus............................: 7       min=7       max=1000
     vus_max........................: 1000    min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/47ff4868-d880-4cd9-245c-d17302f4c300/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ed32fce9-ff19-4bba-1c80-6028f17ca900/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  78% — ✓ 4118 / ✗ 1131
     ✗ expected_result
      ↳  94% — ✓ 4953 / ✗ 296

     checks.........................: 90.93% ✓ 14320    ✗ 1427  
     data_received..................: 26 MB  365 kB/s
     data_sent......................: 6.2 MB 88 kB/s
     http_req_blocked...............: avg=255.44µs min=1.1µs   med=2µs    max=34.28ms p(90)=369.2µs  p(95)=408.26µs
     http_req_connecting............: avg=239.31µs min=0s      med=0s     max=33.98ms p(90)=308.09µs p(95)=344.42µs
     http_req_duration..............: avg=7.51s    min=38.23ms med=3.77s  max=35.99s  p(90)=19.97s   p(95)=23s     
       { expected_response:true }...: avg=7.51s    min=38.23ms med=3.77s  max=35.99s  p(90)=19.97s   p(95)=23s     
     http_req_failed................: 0.00%  ✓ 0        ✗ 5249  
     http_req_receiving.............: avg=53.41µs  min=18.89µs med=46.5µs max=2.84ms  p(90)=76µs     p(95)=84.35µs 
     http_req_sending...............: avg=46.88µs  min=7µs     med=12.7µs max=12.33ms p(90)=60.7µs   p(95)=72.5µs  
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=7.51s    min=38.15ms med=3.77s  max=35.99s  p(90)=19.97s   p(95)=23s     
     http_reqs......................: 5249   74.04031/s
     iteration_duration.............: avg=7.51s    min=38.53ms med=3.77s  max=35.99s  p(90)=19.97s   p(95)=23s     
     iterations.....................: 5249   74.04031/s
     vus............................: 123    min=58     max=1000
     vus_max........................: 1000   min=1000   max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b7521c69-2f01-44a7-e089-ebdfa3b8e800/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d3c2ebc5-acdd-4789-b5a5-759b63656000/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  98% — ✓ 4020 / ✗ 70
     ✗ no_errors
      ↳  69% — ✓ 2830 / ✗ 1260
     ✗ expected_result
      ↳  97% — ✓ 3919 / ✗ 101

     checks.........................: 88.27% ✓ 10769     ✗ 1431  
     data_received..................: 18 MB  241 kB/s
     data_sent......................: 4.9 MB 64 kB/s
     http_req_blocked...............: avg=233.04µs min=1.4µs    med=2.7µs  max=30.64ms p(90)=519.39µs p(95)=616.93µs
     http_req_connecting............: avg=206.47µs min=0s       med=0s     max=25.84ms p(90)=436.1µs  p(95)=518.05µs
     http_req_duration..............: avg=10.47s   min=461.63ms med=8.43s  max=32.71s  p(90)=22.47s   p(95)=24.39s  
       { expected_response:true }...: avg=10.62s   min=501.21ms med=8.57s  max=32.71s  p(90)=22.48s   p(95)=24.47s  
     http_req_failed................: 1.71%  ✓ 70        ✗ 4020  
     http_req_receiving.............: avg=179.17µs min=20.9µs   med=62.5µs max=22.09ms p(90)=101.9µs  p(95)=132.71µs
     http_req_sending...............: avg=65.07µs  min=9.29µs   med=17.7µs max=14.39ms p(90)=85.71µs  p(95)=110.73µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=10.47s   min=452.44ms med=8.43s  max=32.71s  p(90)=22.47s   p(95)=24.39s  
     http_reqs......................: 4090   54.081834/s
     iteration_duration.............: avg=10.47s   min=501.54ms med=8.44s  max=32.71s  p(90)=22.47s   p(95)=24.39s  
     iterations.....................: 4090   54.081834/s
     vus............................: 102    min=55      max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/87853bcf-fe29-4bc6-5ba1-bf2ce7eff300/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2ff15963-e3c3-413c-6573-47c88eddd200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  99% — ✓ 1956 / ✗ 3
     ✗ no_errors
      ↳  59% — ✓ 1167 / ✗ 792
     ✗ expected_result
      ↳  90% — ✓ 1770 / ✗ 186

     checks.........................: 83.29% ✓ 4893      ✗ 981   
     data_received..................: 9.9 MB 101 kB/s
     data_sent......................: 2.9 MB 30 kB/s
     http_req_blocked...............: avg=483.87µs min=1.9µs  med=3.8µs  max=19.52ms p(90)=588.94µs p(95)=678.11µs
     http_req_connecting............: avg=435.91µs min=0s     med=0s     max=19.45ms p(90)=502.16µs p(95)=581.1µs 
     http_req_duration..............: avg=20.16s   min=2.78s  med=13.35s max=56.44s  p(90)=43.09s   p(95)=50.96s  
       { expected_response:true }...: avg=20.19s   min=2.78s  med=13.41s max=56.44s  p(90)=43.14s   p(95)=50.97s  
     http_req_failed................: 0.15%  ✓ 3         ✗ 1956  
     http_req_receiving.............: avg=103.08µs min=0s     med=87.2µs max=2.79ms  p(90)=142.6µs  p(95)=172.76µs
     http_req_sending...............: avg=64.51µs  min=12.4µs med=38µs   max=16.56ms p(90)=93.72µs  p(95)=125.44µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=20.16s   min=2.78s  med=13.35s max=56.44s  p(90)=43.09s   p(95)=50.96s  
     http_reqs......................: 1959   20.070381/s
     iteration_duration.............: avg=20.16s   min=2.78s  med=13.35s max=56.44s  p(90)=43.09s   p(95)=50.96s  
     iterations.....................: 1959   20.070381/s
     vus............................: 1      min=1       max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e7d9b0da-8e43-43c4-16f5-cf711d03dd00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3d1d8e7e-208e-471e-d5b1-8ed61eb0f100/public" alt="HTTP Overview" />


  </details>