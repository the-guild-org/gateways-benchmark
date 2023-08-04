## Overview for: `scenarios/fed-v1-constants-vus-subgraphs-delay`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. All subgraphs have an intentional delay on replying, and this creates additional pressure on the gateway's memory. We are running a heavy load of concurrent VUs to measure response time and other stats, during stress. It measure things like memory usage, CPU usage, response times.


This scenario was running 400 VUs over 200s


### Comparison


| Gateway              | RPS ⬇️ |        Requests         |          Duration          |
| :------------------- | :----: | :---------------------: | :------------------------: |
| wundergraph          |  238   |  48085 total, 0 failed  |  avg: 1663ms, p95: 2006ms  |
| apollo-router        |  113   |  22949 total, 0 failed  |  avg: 3497ms, p95: 5498ms  |
| mesh-supergraph      |  102   |  20855 total, 0 failed  |  avg: 3875ms, p95: 4631ms  |
| mesh                 |   74   |  15241 total, 0 failed  |  avg: 5310ms, p95: 7282ms  |
| apollo-server        |   56   | 11579 total, 258 failed |  avg: 7006ms, p95: 7713ms  |
| apollo-server-node16 |   53   |  10878 total, 0 failed  | avg: 7421ms, p95: 11814ms  |
| mercurius            |   7    |  1611 total, 0 failed   | avg: 53158ms, p95: 56863ms |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 144255     ✗ 0    
     data_received..................: 240 MB  1.2 MB/s
     data_sent......................: 57 MB   283 kB/s
     http_req_blocked...............: avg=922.81µs min=1.6µs    med=2.5µs  max=237.08ms p(90)=3.5µs    p(95)=4.3µs   
     http_req_connecting............: avg=896.64µs min=0s       med=0s     max=230.03ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=1.66s    min=970.67ms med=1.66s  max=3s       p(90)=1.91s    p(95)=2s      
       { expected_response:true }...: avg=1.66s    min=970.67ms med=1.66s  max=3s       p(90)=1.91s    p(95)=2s      
   ✓ http_req_failed................: 0.00%   ✓ 0          ✗ 48085
     http_req_receiving.............: avg=1.39ms   min=17.8µs   med=40.2µs max=308.44ms p(90)=317.16µs p(95)=594.59µs
     http_req_sending...............: avg=877.64µs min=10.2µs   med=14.9µs max=356.07ms p(90)=42.36µs  p(95)=165.86µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=1.66s    min=970.55ms med=1.65s  max=2.96s    p(90)=1.91s    p(95)=2s      
     http_reqs......................: 48085   238.288155/s
     iteration_duration.............: avg=1.66s    min=971.43ms med=1.66s  max=3.17s    p(90)=1.91s    p(95)=2.01s   
     iterations.....................: 48085   238.288155/s
     vus............................: 50      min=50       max=400
     vus_max........................: 400     min=400      max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/199d8f43-c232-4389-8efe-f0462f79af00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/fb2dfad5-a631-412f-7640-efbc7312b600/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 22904 / ✗ 45
     ✗ valid response structure
      ↳  99% — ✓ 22904 / ✗ 45

     checks.........................: 99.86% ✓ 68757      ✗ 90   
     data_received..................: 114 MB 567 kB/s
     data_sent......................: 27 MB  135 kB/s
     http_req_blocked...............: avg=953.63µs min=800ns  med=2µs    max=165.98ms p(90)=2.9µs  p(95)=3.9µs  
     http_req_connecting............: avg=929.76µs min=0s     med=0s     max=143.25ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=3.49s    min=1.3s   med=3.34s  max=7.33s    p(90)=4.79s  p(95)=5.49s  
       { expected_response:true }...: avg=3.49s    min=1.3s   med=3.34s  max=7.33s    p(90)=4.79s  p(95)=5.49s  
   ✓ http_req_failed................: 0.00%  ✓ 0          ✗ 22949
     http_req_receiving.............: avg=65.72µs  min=15.7µs med=36.6µs max=57.54ms  p(90)=59.5µs p(95)=69.09µs
     http_req_sending...............: avg=681.11µs min=5.9µs  med=12.5µs max=85.18ms  p(90)=26.8µs p(95)=37.9µs 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=3.49s    min=1.3s   med=3.34s  max=7.33s    p(90)=4.79s  p(95)=5.49s  
     http_reqs......................: 22949  113.885155/s
     iteration_duration.............: avg=3.49s    min=1.3s   med=3.34s  max=7.33s    p(90)=4.79s  p(95)=5.51s  
     iterations.....................: 22949  113.885155/s
     vus............................: 209    min=209      max=400
     vus_max........................: 400    min=400      max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/68868c90-505b-48c2-b2ce-4f08b0a18c00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3bfcc729-5bfe-4d4f-e0c8-49ead17b4200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 20851 / ✗ 4
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 20855

     checks.........................: 66.66% ✓ 41706      ✗ 20859
     data_received..................: 105 MB 517 kB/s
     data_sent......................: 25 MB  122 kB/s
     http_req_blocked...............: avg=846.11µs min=1.2µs  med=2.1µs  max=80.44ms p(90)=3µs    p(95)=3.9µs 
     http_req_connecting............: avg=827.62µs min=0s     med=0s     max=78.53ms p(90)=0s     p(95)=0s    
     http_req_duration..............: avg=3.87s    min=2.24s  med=3.81s  max=7.83s   p(90)=4.3s   p(95)=4.63s 
       { expected_response:true }...: avg=3.87s    min=2.24s  med=3.81s  max=7.83s   p(90)=4.3s   p(95)=4.63s 
   ✓ http_req_failed................: 0.00%  ✓ 0          ✗ 20855
     http_req_receiving.............: avg=55.03µs  min=21.9µs med=50.7µs max=15.11ms p(90)=66.8µs p(95)=73.8µs
     http_req_sending...............: avg=97.4µs   min=7.4µs  med=12.2µs max=84.26ms p(90)=24.1µs p(95)=28.4µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s     p(95)=0s    
     http_req_waiting...............: avg=3.87s    min=2.24s  med=3.81s  max=7.82s   p(90)=4.3s   p(95)=4.63s 
     http_reqs......................: 20855  102.788804/s
     iteration_duration.............: avg=3.87s    min=2.25s  med=3.81s  max=7.9s    p(90)=4.3s   p(95)=4.63s 
     iterations.....................: 20855  102.788804/s
     vus............................: 72     min=72       max=400
     vus_max........................: 400    min=400      max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f2472389-f182-4984-24b5-68c9d9202e00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/84940c78-0794-4016-9274-460dba604600/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 15187 / ✗ 54
     ✗ valid response structure
      ↳  99% — ✓ 15187 / ✗ 54

     checks.........................: 99.76% ✓ 45615     ✗ 108  
     data_received..................: 77 MB  380 kB/s
     data_sent......................: 18 MB  89 kB/s
     http_req_blocked...............: avg=2.14ms   min=1.7µs  med=2.5µs  max=200.23ms p(90)=3.9µs  p(95)=14.4µs
     http_req_connecting............: avg=2.04ms   min=0s     med=0s     max=200.19ms p(90)=0s     p(95)=0s    
     http_req_duration..............: avg=5.3s     min=2.64s  med=5.2s   max=10.47s   p(90)=6.13s  p(95)=7.28s 
       { expected_response:true }...: avg=5.3s     min=2.64s  med=5.2s   max=10.47s   p(90)=6.13s  p(95)=7.28s 
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 15241
     http_req_receiving.............: avg=69.93µs  min=26.2µs med=47.6µs max=30.73ms  p(90)=82.8µs p(95)=94.6µs
     http_req_sending...............: avg=380.09µs min=9.79µs med=14.2µs max=93.8ms   p(90)=35.4µs p(95)=44.2µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s     p(95)=0s    
     http_req_waiting...............: avg=5.3s     min=2.64s  med=5.2s   max=10.43s   p(90)=6.13s  p(95)=7.28s 
     http_reqs......................: 15241  74.901786/s
     iteration_duration.............: avg=5.31s    min=2.65s  med=5.2s   max=10.61s   p(90)=6.13s  p(95)=7.28s 
     iterations.....................: 15241  74.901786/s
     vus............................: 224    min=224     max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0dabb321-31bb-495c-3b65-a9ee504fcc00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/79505e23-17a1-4bd7-ea15-ea15fa551600/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  97% — ✓ 11321 / ✗ 258
     ✗ no graphql errors
      ↳  83% — ✓ 9726 / ✗ 1853
     ✗ valid response structure
      ↳  85% — ✓ 9726 / ✗ 1595

     checks.........................: 89.25% ✓ 30773     ✗ 3706 
     data_received..................: 57 MB  274 kB/s
     data_sent......................: 14 MB  67 kB/s
     http_req_blocked...............: avg=1.54ms   min=1.3µs med=2.6µs  max=76.28ms p(90)=5.5µs  p(95)=1.12ms  
     http_req_connecting............: avg=1.49ms   min=0s    med=0s     max=73.69ms p(90)=0s     p(95)=962.66µs
     http_req_duration..............: avg=7s       min=1.46s med=5.43s  max=1m0s    p(90)=7.17s  p(95)=7.71s   
       { expected_response:true }...: avg=5.79s    min=1.46s med=5.4s   max=59.54s  p(90)=6.96s  p(95)=7.42s   
   ✓ http_req_failed................: 2.22%  ✓ 258       ✗ 11321
     http_req_receiving.............: avg=68.01µs  min=0s    med=58.4µs max=20.59ms p(90)=84.1µs p(95)=93.2µs  
     http_req_sending...............: avg=126.84µs min=7.6µs med=14.2µs max=46.75ms p(90)=31.9µs p(95)=164.8µs 
     http_req_tls_handshaking.......: avg=0s       min=0s    med=0s     max=0s      p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=7s       min=1.46s med=5.43s  max=1m0s    p(90)=7.17s  p(95)=7.71s   
     http_reqs......................: 11579  56.056423/s
     iteration_duration.............: avg=7s       min=1.46s med=5.43s  max=1m0s    p(90)=7.18s  p(95)=7.72s   
     iterations.....................: 11579  56.056423/s
     vus............................: 42     min=42      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/58135c2a-0b14-4dec-e1e6-4fba065d9d00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2decf674-f8ac-40fa-d272-cc12cb8c8f00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server-node16`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  68% — ✓ 7409 / ✗ 3469
     ✗ valid response structure
      ↳  68% — ✓ 7409 / ✗ 3469

     checks.........................: 78.73% ✓ 25696     ✗ 6938 
     data_received..................: 50 MB  245 kB/s
     data_sent......................: 13 MB  63 kB/s
     http_req_blocked...............: avg=1.37ms   min=1.5µs  med=2.7µs  max=92.26ms p(90)=4.2µs  p(95)=16.2µs 
     http_req_connecting............: avg=1.34ms   min=0s     med=0s     max=92.23ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=7.42s    min=1.13s  med=7.28s  max=16.75s  p(90)=10.56s p(95)=11.81s 
       { expected_response:true }...: avg=7.42s    min=1.13s  med=7.28s  max=16.75s  p(90)=10.56s p(95)=11.81s 
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 10878
     http_req_receiving.............: avg=67.18µs  min=23.1µs med=61.3µs max=7.68ms  p(90)=84.7µs p(95)=93.1µs 
     http_req_sending...............: avg=173.81µs min=6.9µs  med=15.4µs max=41.93ms p(90)=30.5µs p(95)=97.94µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=7.42s    min=1.13s  med=7.28s  max=16.75s  p(90)=10.56s p(95)=11.8s  
     http_reqs......................: 10878  53.348122/s
     iteration_duration.............: avg=7.42s    min=1.13s  med=7.28s  max=16.75s  p(90)=10.56s p(95)=11.84s 
     iterations.....................: 10878  53.348122/s
     vus............................: 54     min=54      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/73b717fb-388e-4869-0ccc-a7f5af0f0800/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c9a28a87-b361-4f9c-3a21-23f51c0ae100/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 4833     ✗ 0    
     data_received..................: 8.1 MB  35 kB/s
     data_sent......................: 1.9 MB  8.3 kB/s
     http_req_blocked...............: avg=14.08ms  min=1.8µs  med=3.9µs  max=110.65ms p(90)=67.53ms p(95)=76.68ms 
     http_req_connecting............: avg=13.9ms   min=0s     med=0s     max=110.62ms p(90)=66.54ms p(95)=76.31ms 
     http_req_duration..............: avg=53.15s   min=29.32s med=56.45s max=57.22s   p(90)=56.81s  p(95)=56.86s  
       { expected_response:true }...: avg=53.15s   min=29.32s med=56.45s max=57.22s   p(90)=56.81s  p(95)=56.86s  
   ✓ http_req_failed................: 0.00%   ✓ 0        ✗ 1611 
     http_req_receiving.............: avg=109.52µs min=34.9µs med=92.1µs max=4.56ms   p(90)=131.8µs p(95)=155.75µs
     http_req_sending...............: avg=3.41ms   min=11.9µs med=26.9µs max=81.38ms  p(90)=8.84ms  p(95)=30.5ms  
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=53.15s   min=29.32s med=56.45s max=57.2s    p(90)=56.81s  p(95)=56.86s  
     http_reqs......................: 1611    7.026055/s
     iteration_duration.............: avg=53.17s   min=29.32s med=56.45s max=57.31s   p(90)=56.82s  p(95)=56.86s  
     iterations.....................: 1611    7.026055/s
     vus............................: 10      min=10     max=400
     vus_max........................: 400     min=400    max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a86aac23-663e-428a-b05f-571ac383b900/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5700bae1-435e-4bae-667b-b435adf79200/public" alt="HTTP Overview" />


  </details>