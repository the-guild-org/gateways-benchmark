## Overview for: `scenarios/fed-v1-constants-vus-subgraphs-delay`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. All subgraphs have an intentional delay on replying, and this creates additional pressure on the gateway's memory. We are running a heavy load of concurrent VUs to measure response time and other stats, during stress. It measure things like memory usage, CPU usage, response times.


This scenario was running 400 VUs over 200s


### Comparison


| Gateway              | RPS ⬇️ |        Requests        |          Duration          |
| :------------------- | :----: | :--------------------: | :------------------------: |
| wundergraph          |  243   | 49130 total, 0 failed  |  avg: 1633ms, p95: 1909ms  |
| mesh-supergraph      |   91   | 18400 total, 0 failed  |  avg: 4375ms, p95: 4797ms  |
| apollo-router        |   87   | 17811 total, 0 failed  |  avg: 4561ms, p95: 7185ms  |
| mesh                 |   66   | 13608 total, 0 failed  |  avg: 6003ms, p95: 6745ms  |
| apollo-server-node16 |   63   | 12998 total, 0 failed  |  avg: 6243ms, p95: 9126ms  |
| apollo-server        |   46   | 9934 total, 567 failed | avg: 8344ms, p95: 59875ms  |
| mercurius            |   7    |  1612 total, 0 failed  | avg: 53138ms, p95: 56842ms |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 147390     ✗ 0    
     data_received..................: 245 MB  1.2 MB/s
     data_sent......................: 58 MB   289 kB/s
     http_req_blocked...............: avg=488.23µs min=800ns  med=1.8µs   max=114.56ms p(90)=2.8µs   p(95)=3.3µs   
     http_req_connecting............: avg=480.46µs min=0s     med=0s      max=114.53ms p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=1.63s    min=1.1s   med=1.62s   max=2.29s    p(90)=1.82s   p(95)=1.9s    
       { expected_response:true }...: avg=1.63s    min=1.1s   med=1.62s   max=2.29s    p(90)=1.82s   p(95)=1.9s    
   ✓ http_req_failed................: 0.00%   ✓ 0          ✗ 49130
     http_req_receiving.............: avg=680.25µs min=13.6µs med=26.49µs max=200.37ms p(90)=209.7µs p(95)=350.55µs
     http_req_sending...............: avg=470.4µs  min=6.1µs  med=10.1µs  max=196.27ms p(90)=23.6µs  p(95)=109.95µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=1.63s    min=1.1s   med=1.62s   max=2.27s    p(90)=1.82s   p(95)=1.9s    
     http_reqs......................: 49130   243.493116/s
     iteration_duration.............: avg=1.63s    min=1.1s   med=1.62s   max=2.37s    p(90)=1.82s   p(95)=1.91s   
     iterations.....................: 49130   243.493116/s
     vus............................: 39      min=39       max=400
     vus_max........................: 400     min=400      max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/71e5182c-fb2d-47a5-e9e3-ec4d47f1f900/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6fb45fe4-aa08-4436-50e7-c63de88aca00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 18400

     checks.........................: 66.66% ✓ 36800    ✗ 18400
     data_received..................: 93 MB  459 kB/s
     data_sent......................: 22 MB  108 kB/s
     http_req_blocked...............: avg=1.44ms  min=1µs    med=1.7µs  max=122.98ms p(90)=2.6µs  p(95)=3.8µs 
     http_req_connecting............: avg=1.41ms  min=0s     med=0s     max=122.95ms p(90)=0s     p(95)=0s    
     http_req_duration..............: avg=4.37s   min=3.55s  med=4.31s  max=7.85s    p(90)=4.58s  p(95)=4.79s 
       { expected_response:true }...: avg=4.37s   min=3.55s  med=4.31s  max=7.85s    p(90)=4.58s  p(95)=4.79s 
   ✓ http_req_failed................: 0.00%  ✓ 0        ✗ 18400
     http_req_receiving.............: avg=43.62µs min=15.2µs med=31.4µs max=11.16ms  p(90)=55.4µs p(95)=62.9µs
     http_req_sending...............: avg=283.6µs min=5.9µs  med=10.6µs max=84.6ms   p(90)=22.7µs p(95)=27.1µs
     http_req_tls_handshaking.......: avg=0s      min=0s     med=0s     max=0s       p(90)=0s     p(95)=0s    
     http_req_waiting...............: avg=4.37s   min=3.55s  med=4.31s  max=7.85s    p(90)=4.58s  p(95)=4.79s 
     http_reqs......................: 18400  91.22603/s
     iteration_duration.............: avg=4.37s   min=3.55s  med=4.31s  max=7.88s    p(90)=4.58s  p(95)=4.79s 
     iterations.....................: 18400  91.22603/s
     vus............................: 400    min=400    max=400
     vus_max........................: 400    min=400    max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c9c3905c-4c06-447d-e14f-152a68cffd00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ece1bb0d-49b5-4292-a279-d5a139e25800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 17778 / ✗ 33
     ✗ valid response structure
      ↳  99% — ✓ 17778 / ✗ 33

     checks.........................: 99.87% ✓ 53367     ✗ 66   
     data_received..................: 89 MB  435 kB/s
     data_sent......................: 21 MB  104 kB/s
     http_req_blocked...............: avg=1.25ms   min=1.3µs  med=2.7µs  max=100.5ms  p(90)=4.2µs  p(95)=13.9µs 
     http_req_connecting............: avg=1.23ms   min=0s     med=0s     max=100.47ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=4.56s    min=1.56s  med=4.35s  max=9.79s    p(90)=6.43s  p(95)=7.18s  
       { expected_response:true }...: avg=4.56s    min=1.56s  med=4.35s  max=9.79s    p(90)=6.43s  p(95)=7.18s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 17811
     http_req_receiving.............: avg=109.82µs min=22.6µs med=53.6µs max=47.65ms  p(90)=81.7µs p(95)=93.75µs
     http_req_sending...............: avg=346.79µs min=7.2µs  med=14.8µs max=140.98ms p(90)=32.4µs p(95)=102.7µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=4.56s    min=1.56s  med=4.35s  max=9.79s    p(90)=6.43s  p(95)=7.18s  
     http_reqs......................: 17811  87.253865/s
     iteration_duration.............: avg=4.56s    min=1.56s  med=4.35s  max=9.8s     p(90)=6.43s  p(95)=7.18s  
     iterations.....................: 17811  87.253865/s
     vus............................: 11     min=11      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/66e02c84-2f78-4cd6-c17e-2027fe2c9700/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/35c76ebd-e589-46b3-fc1e-2fdfa610f700/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 13563 / ✗ 45
     ✗ valid response structure
      ↳  99% — ✓ 13563 / ✗ 45

     checks.........................: 99.77% ✓ 40734     ✗ 90   
     data_received..................: 68 MB  334 kB/s
     data_sent......................: 16 MB  79 kB/s
     http_req_blocked...............: avg=1.32ms   min=1.2µs  med=2.4µs  max=78.4ms   p(90)=4.3µs  p(95)=14.52µs 
     http_req_connecting............: avg=1.3ms    min=0s     med=0s     max=77.97ms  p(90)=0s     p(95)=0s      
     http_req_duration..............: avg=6s       min=3.56s  med=5.94s  max=9.17s    p(90)=6.37s  p(95)=6.74s   
       { expected_response:true }...: avg=6s       min=3.56s  med=5.94s  max=9.17s    p(90)=6.37s  p(95)=6.74s   
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 13608
     http_req_receiving.............: avg=86.64µs  min=22.6µs med=51µs   max=61.66ms  p(90)=73.1µs p(95)=91.66µs 
     http_req_sending...............: avg=215.26µs min=7.5µs  med=13.3µs max=105.69ms p(90)=29.5µs p(95)=142.49µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=6s       min=3.56s  med=5.94s  max=9.17s    p(90)=6.37s  p(95)=6.74s   
     http_reqs......................: 13608  66.428245/s
     iteration_duration.............: avg=6s       min=3.56s  med=5.94s  max=9.22s    p(90)=6.37s  p(95)=6.74s   
     iterations.....................: 13608  66.428245/s
     vus............................: 39     min=39      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/697c9ce9-b684-455b-4127-abf26e912300/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b5c18ef7-5b5b-4f99-594e-b36ac9b0e000/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server-node16`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  83% — ✓ 10839 / ✗ 2159
     ✗ valid response structure
      ↳  83% — ✓ 10839 / ✗ 2159

     checks.........................: 88.92% ✓ 34676     ✗ 4318 
     data_received..................: 64 MB  314 kB/s
     data_sent......................: 15 MB  76 kB/s
     http_req_blocked...............: avg=905.21µs min=900ns  med=2.25µs max=70.08ms p(90)=3.5µs  p(95)=13.31µs
     http_req_connecting............: avg=891.69µs min=0s     med=0s     max=64.58ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=6.24s    min=1.03s  med=6.03s  max=11.35s  p(90)=8.18s  p(95)=9.12s  
       { expected_response:true }...: avg=6.24s    min=1.03s  med=6.03s  max=11.35s  p(90)=8.18s  p(95)=9.12s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 12998
     http_req_receiving.............: avg=62.45µs  min=20.2µs med=53.7µs max=39.12ms p(90)=76.5µs p(95)=82.9µs 
     http_req_sending...............: avg=293.31µs min=6.6µs  med=13.5µs max=86.48ms p(90)=28.4µs p(95)=60.44µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=6.24s    min=1.03s  med=6.03s  max=11.33s  p(90)=8.18s  p(95)=9.12s  
     http_reqs......................: 12998  63.616735/s
     iteration_duration.............: avg=6.24s    min=1.03s  med=6.03s  max=11.39s  p(90)=8.18s  p(95)=9.12s  
     iterations.....................: 12998  63.616735/s
     vus............................: 182    min=182     max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/249267a0-221b-44cc-515e-5e66ecfd0c00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c2c65d3e-6201-4d45-9c44-c0fbe7203d00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  94% — ✓ 9367 / ✗ 567
     ✗ no graphql errors
      ↳  88% — ✓ 8757 / ✗ 1177
     ✗ valid response structure
      ↳  93% — ✓ 8757 / ✗ 610

     checks.........................: 91.94% ✓ 26881     ✗ 2354 
     data_received..................: 48 MB  222 kB/s
     data_sent......................: 12 MB  55 kB/s
     http_req_blocked...............: avg=5.21ms  min=1.2µs med=2.5µs  max=278.2ms  p(90)=38.24µs p(95)=13.9ms  
     http_req_connecting............: avg=5.17ms  min=0s    med=0s     max=278.13ms p(90)=0s      p(95)=13.34ms 
     http_req_duration..............: avg=8.34s   min=1.54s med=4.49s  max=1m0s     p(90)=6.06s   p(95)=59.87s  
       { expected_response:true }...: avg=5.21s   min=1.54s med=4.44s  max=59.43s   p(90)=5.48s   p(95)=5.99s   
   ✓ http_req_failed................: 5.70%  ✓ 567       ✗ 9367 
     http_req_receiving.............: avg=69.88µs min=0s    med=60.2µs max=9.35ms   p(90)=96.9µs  p(95)=114.43µs
     http_req_sending...............: avg=2.66ms  min=8.9µs med=15.6µs max=166.04ms p(90)=64.68µs p(95)=1.03ms  
     http_req_tls_handshaking.......: avg=0s      min=0s    med=0s     max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=8.34s   min=1.54s med=4.49s  max=1m0s     p(90)=6.06s   p(95)=59.81s  
     http_reqs......................: 9934   46.064458/s
     iteration_duration.............: avg=8.35s   min=1.54s med=4.49s  max=1m0s     p(90)=6.07s   p(95)=1m0s    
     iterations.....................: 9934   46.064458/s
     vus............................: 52     min=52      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f0046fe6-9494-4bdf-b9c7-8322d63e5300/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1bfbc1cf-7852-4567-74f7-43f0ccb1eb00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 4836     ✗ 0    
     data_received..................: 8.1 MB  35 kB/s
     data_sent......................: 1.9 MB  8.3 kB/s
     http_req_blocked...............: avg=11ms    min=1.7µs   med=3.7µs   max=83.7ms  p(90)=54.09ms p(95)=58.28ms 
     http_req_connecting............: avg=10.92ms min=0s      med=0s      max=83.67ms p(90)=53.93ms p(95)=58.16ms 
     http_req_duration..............: avg=53.13s  min=29.43s  med=56.56s  max=57.11s  p(90)=56.8s   p(95)=56.84s  
       { expected_response:true }...: avg=53.13s  min=29.43s  med=56.56s  max=57.11s  p(90)=56.8s   p(95)=56.84s  
   ✓ http_req_failed................: 0.00%   ✓ 0        ✗ 1612 
     http_req_receiving.............: avg=100.4µs min=32.09µs med=91.65µs max=4.71ms  p(90)=124.1µs p(95)=142.49µs
     http_req_sending...............: avg=1.75ms  min=10.5µs  med=25.8µs  max=38.73ms p(90)=4.38ms  p(95)=9.56ms  
     http_req_tls_handshaking.......: avg=0s      min=0s      med=0s      max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=53.13s  min=29.43s  med=56.56s  max=57.11s  p(90)=56.8s   p(95)=56.84s  
     http_reqs......................: 1612    7.026522/s
     iteration_duration.............: avg=53.14s  min=29.43s  med=56.56s  max=57.18s  p(90)=56.8s   p(95)=56.84s  
     iterations.....................: 1612    7.026522/s
     vus............................: 10      min=10     max=400
     vus_max........................: 400     min=400    max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6a17c083-47ab-4e3a-8999-586ed1adcf00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1d1422e3-2845-4760-c391-f13093cde900/public" alt="HTTP Overview" />


  </details>