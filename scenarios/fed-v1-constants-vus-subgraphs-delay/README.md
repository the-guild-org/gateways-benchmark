## Overview for: `scenarios/fed-v1-constants-vus-subgraphs-delay`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. All subgraphs have an intentional delay on replying, and this creates additional pressure on the gateway's memory. We are running a heavy load of concurrent VUs to measure response time and other stats, during stress. It measure things like memory usage, CPU usage, response times.


This scenario was running 400 VUs over 200s


### Comparison


| Gateway              | RPS ⬇️ |        Requests         |          Duration          |
| :------------------- | :----: | :---------------------: | :------------------------: |
| wundergraph          |  237   |  47872 total, 0 failed  |  avg: 1676ms, p95: 2009ms  |
| mesh-supergraph      |  114   |  22998 total, 0 failed  |  avg: 3495ms, p95: 3963ms  |
| apollo-router        |   86   |  17664 total, 0 failed  |  avg: 4573ms, p95: 6894ms  |
| mesh                 |   79   |  16044 total, 0 failed  |  avg: 5006ms, p95: 6323ms  |
| apollo-server        |   64   | 13312 total, 441 failed | avg: 6105ms, p95: 25488ms  |
| apollo-server-node16 |   42   |  8803 total, 0 failed   | avg: 9262ms, p95: 18436ms  |
| mercurius            |   7    |  1609 total, 0 failed   | avg: 53208ms, p95: 56776ms |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 143616     ✗ 0    
     data_received..................: 238 MB  1.2 MB/s
     data_sent......................: 57 MB   282 kB/s
     http_req_blocked...............: avg=522.71µs min=1.2µs  med=2.6µs  max=203.53ms p(90)=3.9µs    p(95)=4.7µs   
     http_req_connecting............: avg=505.86µs min=0s     med=0s     max=139.86ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=1.67s    min=1.07s  med=1.66s  max=2.62s    p(90)=1.9s     p(95)=2s      
       { expected_response:true }...: avg=1.67s    min=1.07s  med=1.66s  max=2.62s    p(90)=1.9s     p(95)=2s      
   ✓ http_req_failed................: 0.00%   ✓ 0          ✗ 47872
     http_req_receiving.............: avg=1.03ms   min=17.2µs med=39.8µs max=383.52ms p(90)=291.42µs p(95)=548.98µs
     http_req_sending...............: avg=875.29µs min=8µs    med=14.6µs max=312.9ms  p(90)=39µs     p(95)=176.12µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=1.67s    min=1.07s  med=1.66s  max=2.58s    p(90)=1.9s     p(95)=2s      
     http_reqs......................: 47872   237.637754/s
     iteration_duration.............: avg=1.67s    min=1.07s  med=1.66s  max=2.71s    p(90)=1.91s    p(95)=2.01s   
     iterations.....................: 47872   237.637754/s
     vus............................: 400     min=400      max=400
     vus_max........................: 400     min=400      max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f329020b-26ee-4123-206b-652d063ab700/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8a766667-9184-465a-aaca-38543aeb3500/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 22987 / ✗ 11
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 22998

     checks.........................: 66.65% ✓ 45985      ✗ 23009
     data_received..................: 116 MB 574 kB/s
     data_sent......................: 27 MB  135 kB/s
     http_req_blocked...............: avg=694.66µs min=1µs     med=2µs     max=66.21ms p(90)=2.8µs   p(95)=3.4µs  
     http_req_connecting............: avg=684.39µs min=0s      med=0s      max=65.89ms p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=3.49s    min=2.56s   med=3.42s   max=7.66s   p(90)=3.76s   p(95)=3.96s  
       { expected_response:true }...: avg=3.49s    min=2.56s   med=3.42s   max=7.66s   p(90)=3.76s   p(95)=3.96s  
   ✓ http_req_failed................: 0.00%  ✓ 0          ✗ 22998
     http_req_receiving.............: avg=49.04µs  min=17.79µs med=39.69µs max=12.38ms p(90)=61.99µs p(95)=68.59µs
     http_req_sending...............: avg=73.58µs  min=5.9µs   med=12.3µs  max=61.45ms p(90)=22.3µs  p(95)=27.81µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s      p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=3.49s    min=2.56s   med=3.42s   max=7.66s   p(90)=3.76s   p(95)=3.96s  
     http_reqs......................: 22998  114.023539/s
     iteration_duration.............: avg=3.49s    min=2.56s   med=3.42s   max=7.69s   p(90)=3.76s   p(95)=3.96s  
     iterations.....................: 22998  114.023539/s
     vus............................: 225    min=225      max=400
     vus_max........................: 400    min=400      max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/97b3c71d-4508-42e9-38f4-6317c1eda400/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/661dca67-372f-4dec-6e69-cc1de9abbe00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 17628 / ✗ 36
     ✗ valid response structure
      ↳  99% — ✓ 17628 / ✗ 36

     checks.........................: 99.86% ✓ 52920     ✗ 72   
     data_received..................: 88 MB  432 kB/s
     data_sent......................: 21 MB  103 kB/s
     http_req_blocked...............: avg=935.94µs min=1.2µs  med=2.6µs  max=129.91ms p(90)=4µs    p(95)=10.2µs 
     http_req_connecting............: avg=917.26µs min=0s     med=0s     max=129.89ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=4.57s    min=1.66s  med=4.38s  max=9.72s    p(90)=6.14s  p(95)=6.89s  
       { expected_response:true }...: avg=4.57s    min=1.66s  med=4.38s  max=9.72s    p(90)=6.14s  p(95)=6.89s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 17664
     http_req_receiving.............: avg=791.43µs min=21.1µs med=50.5µs max=198.93ms p(90)=83.7µs p(95)=103.8µs
     http_req_sending...............: avg=197.15µs min=7µs    med=14.6µs max=281.55ms p(90)=31.8µs p(95)=102.5µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=4.57s    min=1.66s  med=4.38s  max=9.71s    p(90)=6.14s  p(95)=6.89s  
     http_reqs......................: 17664  86.881829/s
     iteration_duration.............: avg=4.57s    min=1.66s  med=4.38s  max=9.78s    p(90)=6.14s  p(95)=6.89s  
     iterations.....................: 17664  86.881829/s
     vus............................: 64     min=64      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/137ae03a-1b90-42a5-ad7b-c3a8bac94400/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2672c7ce-3b05-4bc7-4d29-00e797f28600/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 16011 / ✗ 33
     ✗ valid response structure
      ↳  99% — ✓ 16011 / ✗ 33

     checks.........................: 99.86% ✓ 48066     ✗ 66   
     data_received..................: 81 MB  399 kB/s
     data_sent......................: 19 MB  94 kB/s
     http_req_blocked...............: avg=1.37ms   min=1.4µs  med=2.6µs  max=164.24ms p(90)=4µs    p(95)=12.98µs
     http_req_connecting............: avg=1.35ms   min=0s     med=0s     max=163.17ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=5s       min=1.9s   med=4.82s  max=11s      p(90)=5.84s  p(95)=6.32s  
       { expected_response:true }...: avg=5s       min=1.9s   med=4.82s  max=11s      p(90)=5.84s  p(95)=6.32s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 16044
     http_req_receiving.............: avg=119.44µs min=22.5µs med=51.7µs max=69.24ms  p(90)=78.6µs p(95)=88.88µs
     http_req_sending...............: avg=323.39µs min=8.8µs  med=14.7µs max=125.91ms p(90)=31.5µs p(95)=44.4µs 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=5s       min=1.9s   med=4.82s  max=11s      p(90)=5.84s  p(95)=6.32s  
     http_reqs......................: 16044  79.458265/s
     iteration_duration.............: avg=5s       min=1.9s   med=4.83s  max=11.04s   p(90)=5.84s  p(95)=6.32s  
     iterations.....................: 16044  79.458265/s
     vus............................: 57     min=57      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a227617f-9818-4f25-0655-d23c1a69c300/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/49673e6c-f357-4f1a-8082-2b61a4477300/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  96% — ✓ 12871 / ✗ 441
     ✗ no graphql errors
      ↳  95% — ✓ 12713 / ✗ 599
     ✗ valid response structure
      ↳  98% — ✓ 12713 / ✗ 158

     checks.........................: 96.96% ✓ 38297     ✗ 1198 
     data_received..................: 66 MB  320 kB/s
     data_sent......................: 16 MB  76 kB/s
     http_req_blocked...............: avg=1.11ms   min=900ns med=2.2µs  max=79.75ms p(90)=3.7µs   p(95)=1.37ms  
     http_req_connecting............: avg=1.08ms   min=0s    med=0s     max=75.55ms p(90)=0s      p(95)=1.19ms  
     http_req_duration..............: avg=6.1s     min=1.54s med=3.8s   max=1m0s    p(90)=4.64s   p(95)=25.48s  
       { expected_response:true }...: avg=4.25s    min=1.54s med=3.78s  max=59.93s  p(90)=4.53s   p(95)=4.79s   
   ✓ http_req_failed................: 3.31%  ✓ 441       ✗ 12871
     http_req_receiving.............: avg=57.53µs  min=0s    med=47.9µs max=18.57ms p(90)=75.5µs  p(95)=82.99µs 
     http_req_sending...............: avg=102.07µs min=5.1µs med=13µs   max=23.75ms p(90)=29.29µs p(95)=124.54µs
     http_req_tls_handshaking.......: avg=0s       min=0s    med=0s     max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=6.1s     min=1.54s med=3.8s   max=1m0s    p(90)=4.64s   p(95)=25.48s  
     http_reqs......................: 13312  64.269099/s
     iteration_duration.............: avg=6.1s     min=1.54s med=3.8s   max=1m0s    p(90)=4.64s   p(95)=25.49s  
     iterations.....................: 13312  64.269099/s
     vus............................: 28     min=28      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f551b1ee-8da5-449e-ed33-8063619cef00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8cf43ce2-df3b-48d0-b1ee-cb95be4ed200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server-node16`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  65% — ✓ 5778 / ✗ 3025
     ✗ valid response structure
      ↳  65% — ✓ 5778 / ✗ 3025

     checks.........................: 77.09% ✓ 20359     ✗ 6050 
     data_received..................: 42 MB  202 kB/s
     data_sent......................: 10 MB  51 kB/s
     http_req_blocked...............: avg=1.88ms   min=1.4µs  med=2.5µs  max=133.45ms p(90)=4.7µs   p(95)=47.44µs 
     http_req_connecting............: avg=1.83ms   min=0s     med=0s     max=77.61ms  p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=9.26s    min=1.09s  med=8.61s  max=28.18s   p(90)=14.44s  p(95)=18.43s  
       { expected_response:true }...: avg=9.26s    min=1.09s  med=8.61s  max=28.18s   p(90)=14.44s  p(95)=18.43s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 8803 
     http_req_receiving.............: avg=72.15µs  min=26.5µs med=60.3µs max=4.44ms   p(90)=99.6µs  p(95)=121.38µs
     http_req_sending...............: avg=581.63µs min=9.5µs  med=15.5µs max=132.98ms p(90)=46.58µs p(95)=318.4µs 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=9.26s    min=1.09s  med=8.61s  max=28.18s   p(90)=14.44s  p(95)=18.43s  
     http_reqs......................: 8803   42.745463/s
     iteration_duration.............: avg=9.26s    min=1.09s  med=8.61s  max=28.18s   p(90)=14.44s  p(95)=18.43s  
     iterations.....................: 8803   42.745463/s
     vus............................: 27     min=27      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/22874c75-caf6-44d3-a590-48f196d29b00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1583a87a-506c-428a-6c0a-c705ddaee700/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 4827     ✗ 0    
     data_received..................: 8.1 MB  35 kB/s
     data_sent......................: 1.9 MB  8.3 kB/s
     http_req_blocked...............: avg=27.59ms min=1.8µs  med=3.2µs  max=180.5ms  p(90)=133.93ms p(95)=149.31ms
     http_req_connecting............: avg=27.29ms min=0s     med=0s     max=180.39ms p(90)=133.42ms p(95)=148.23ms
     http_req_duration..............: avg=53.2s   min=29.11s med=56.46s max=57.15s   p(90)=56.72s   p(95)=56.77s  
       { expected_response:true }...: avg=53.2s   min=29.11s med=56.46s max=57.15s   p(90)=56.72s   p(95)=56.77s  
   ✓ http_req_failed................: 0.00%   ✓ 0        ✗ 1609 
     http_req_receiving.............: avg=78.02µs min=24.7µs med=71.7µs max=2.23ms   p(90)=97.22µs  p(95)=108.35µs
     http_req_sending...............: avg=7.66ms  min=9.9µs  med=22.4µs max=139.24ms p(90)=32.03ms  p(95)=36.34ms 
     http_req_tls_handshaking.......: avg=0s      min=0s     med=0s     max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=53.2s   min=29.11s med=56.46s max=57.15s   p(90)=56.72s   p(95)=56.77s  
     http_reqs......................: 1609    7.025345/s
     iteration_duration.............: avg=53.23s  min=29.11s med=56.46s max=57.22s   p(90)=56.72s   p(95)=56.77s  
     iterations.....................: 1609    7.025345/s
     vus............................: 7       min=7      max=400
     vus_max........................: 400     min=400    max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e3af89dd-21b0-4d4c-3d15-9558d333c500/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6814570e-bc68-41c6-dd72-8f22d18a3c00/public" alt="HTTP Overview" />


  </details>