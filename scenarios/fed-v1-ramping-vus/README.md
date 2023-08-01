## Overview for: `fed-v1-ramping-vus`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. We are running a heavy load of concurrent VUs to measure response time and other stats, during stress. It measure things like memory usage, CPU usage, response times. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was trying to reach 1000 concurrent VUs over 60s


### Comparison


| Gateway                             | duration(p95)⬇️ |  RPS  |       Requests        |                       Durations                        |
| :---------------------------------- | :-------------: | :---: | :-------------------: | :----------------------------------------------------: |
| wundergraph                         |     2018ms      |  479  | 33588 total, 0 failed |   avg: 1022ms, p95: 2019ms, max: 3591ms, med: 961ms    |
| mesh-supergraph                     |     10238ms     |  90   | 6362 total, 0 failed  |  avg: 5906ms, p95: 10238ms, max: 12158ms, med: 5884ms  |
| apollo-router                       |     10341ms     |  112  | 7989 total, 0 failed  |  avg: 5003ms, p95: 10342ms, max: 16587ms, med: 4241ms  |
| mesh                                |     12545ms     |  77   | 5480 total, 0 failed  |  avg: 7077ms, p95: 12546ms, max: 15761ms, med: 6784ms  |
| stitching-federation-with-yoga-bun  |     12604ms     |  102  | 7205 total, 0 failed  |  avg: 5318ms, p95: 12604ms, max: 20125ms, med: 5018ms  |
| mercurius                           |     13927ms     |  61   | 4307 total, 0 failed  |  avg: 8695ms, p95: 13928ms, max: 14245ms, med: 8783ms  |
| apollo-gateway-with-yoga            |     21678ms     |  65   | 4732 total, 0 failed  |  avg: 8377ms, p95: 21678ms, max: 33960ms, med: 5238ms  |
| stitching-federation-with-yoga-deno |     22381ms     |  42   | 3174 total, 0 failed  | avg: 13031ms, p95: 22382ms, max: 30168ms, med: 13599ms |
| stitching-federation-with-yoga      |     43536ms     |  33   | 2972 total, 0 failed  | avg: 17125ms, p95: 43536ms, max: 51818ms, med: 11746ms |
| apollo-server                       |     48787ms     |  56   | 4822 total, 0 failed  |  avg: 9363ms, p95: 48788ms, max: 57842ms, med: 2561ms  |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 100764     ✗ 0     
     data_received..................: 167 MB  2.4 MB/s
     data_sent......................: 40 MB   569 kB/s
     http_req_blocked...............: avg=2.54ms min=1.7µs   med=2.7µs    max=1.26s    p(90)=4.5µs    p(95)=9.5µs 
     http_req_connecting............: avg=2.48ms min=0s      med=0s       max=1.26s    p(90)=0s       p(95)=0s    
     http_req_duration..............: avg=1.02s  min=12.15ms med=960.95ms max=3.59s    p(90)=1.75s    p(95)=2.01s 
       { expected_response:true }...: avg=1.02s  min=12.15ms med=960.95ms max=3.59s    p(90)=1.75s    p(95)=2.01s 
     http_req_failed................: 0.00%   ✓ 0          ✗ 33588 
     http_req_receiving.............: avg=7.9ms  min=18.59µs med=45.7µs   max=926.97ms p(90)=268.41µs p(95)=4.04ms
     http_req_sending...............: avg=3.1ms  min=9.5µs   med=15.4µs   max=807.66ms p(90)=90.46µs  p(95)=1.53ms
     http_req_tls_handshaking.......: avg=0s     min=0s      med=0s       max=0s       p(90)=0s       p(95)=0s    
     http_req_waiting...............: avg=1.01s  min=11.9ms  med=953.82ms max=3.58s    p(90)=1.72s    p(95)=1.98s 
     http_reqs......................: 33588   479.668839/s
     iteration_duration.............: avg=1.03s  min=12.85ms med=971.49ms max=3.59s    p(90)=1.79s    p(95)=2.05s 
     iterations.....................: 33588   479.668839/s
     vus............................: 8       min=8        max=1000
     vus_max........................: 1000    min=1000     max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/87e87df1-f93c-43ad-1c53-784705c3db00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/83d838db-e3cc-4da5-e39e-e4d3921a6800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 6341 / ✗ 21
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 6362

     checks.........................: 66.55% ✓ 12703     ✗ 6383  
     data_received..................: 32 MB  459 kB/s
     data_sent......................: 7.6 MB 108 kB/s
     http_req_blocked...............: avg=184.3µs min=1.2µs   med=2.6µs  max=23.8ms  p(90)=457.24µs p(95)=523.68µs
     http_req_connecting............: avg=135.9µs min=0s      med=0s     max=23.7ms  p(90)=381.97µs p(95)=444.76µs
     http_req_duration..............: avg=5.9s    min=14.71ms med=5.88s  max=12.15s  p(90)=9.47s    p(95)=10.23s  
       { expected_response:true }...: avg=5.9s    min=14.71ms med=5.88s  max=12.15s  p(90)=9.47s    p(95)=10.23s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 6362  
     http_req_receiving.............: avg=73.46µs min=23.1µs  med=60.2µs max=15.65ms p(90)=88.1µs   p(95)=100.5µs 
     http_req_sending...............: avg=58.34µs min=7.8µs   med=14.5µs max=10.01ms p(90)=68.5µs   p(95)=85.88µs 
     http_req_tls_handshaking.......: avg=0s      min=0s      med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=5.9s    min=14.59ms med=5.88s  max=12.15s  p(90)=9.47s    p(95)=10.23s  
     http_reqs......................: 6362   90.870916/s
     iteration_duration.............: avg=5.9s    min=15.18ms med=5.88s  max=12.15s  p(90)=9.47s    p(95)=10.23s  
     iterations.....................: 6362   90.870916/s
     vus............................: 8      min=8       max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/778f20d8-5e03-422e-ed2f-c636859d2800/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e9ea2601-369f-4134-802d-8ab15cfefe00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 7961 / ✗ 28
     ✗ valid response structure
      ↳  99% — ✓ 7961 / ✗ 28

     checks.........................: 99.76% ✓ 23911      ✗ 56    
     data_received..................: 40 MB  558 kB/s
     data_sent......................: 9.5 MB 133 kB/s
     http_req_blocked...............: avg=189.37µs min=1µs      med=2.2µs  max=287.41ms p(90)=158.31µs p(95)=365.25µs
     http_req_connecting............: avg=168.8µs  min=0s       med=0s     max=270.46ms p(90)=101.4µs  p(95)=304.05µs
     http_req_duration..............: avg=5s       min=299.61ms med=4.24s  max=16.58s   p(90)=9.77s    p(95)=10.34s  
       { expected_response:true }...: avg=5s       min=299.61ms med=4.24s  max=16.58s   p(90)=9.77s    p(95)=10.34s  
     http_req_failed................: 0.00%  ✓ 0          ✗ 7989  
     http_req_receiving.............: avg=479.02µs min=17.1µs   med=39.1µs max=151.95ms p(90)=72.09µs  p(95)=85.3µs  
     http_req_sending...............: avg=150.1µs  min=6.3µs    med=12.8µs max=154.2ms  p(90)=49µs     p(95)=65.59µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=5s       min=299.52ms med=4.23s  max=16.58s   p(90)=9.77s    p(95)=10.34s  
     http_reqs......................: 7989   112.224166/s
     iteration_duration.............: avg=5s       min=300.2ms  med=4.24s  max=16.59s   p(90)=9.77s    p(95)=10.34s  
     iterations.....................: 7989   112.224166/s
     vus............................: 114    min=56       max=1000
     vus_max........................: 1000   min=1000     max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ec38610c-1573-4530-fd52-d49e5f44f800/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6388ac88-c374-4666-a60f-80e54db4c100/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 5447 / ✗ 33
     ✗ valid response structure
      ↳  99% — ✓ 5447 / ✗ 33

     checks.........................: 99.59% ✓ 16374   ✗ 66    
     data_received..................: 28 MB  394 kB/s
     data_sent......................: 6.5 MB 92 kB/s
     http_req_blocked...............: avg=128.72µs min=1.5µs   med=2.9µs  max=23.54ms p(90)=478.64µs p(95)=538.51µs
     http_req_connecting............: avg=103.24µs min=0s      med=0s     max=22.64ms p(90)=400.51µs p(95)=458.94µs
     http_req_duration..............: avg=7.07s    min=17.29ms med=6.78s  max=15.76s  p(90)=11.62s   p(95)=12.54s  
       { expected_response:true }...: avg=7.07s    min=17.29ms med=6.78s  max=15.76s  p(90)=11.62s   p(95)=12.54s  
     http_req_failed................: 0.00%  ✓ 0       ✗ 5480  
     http_req_receiving.............: avg=89.31µs  min=23.2µs  med=61.4µs max=51.78ms p(90)=93.21µs  p(95)=106.61µs
     http_req_sending...............: avg=70.87µs  min=10.3µs  med=15.2µs max=56.11ms p(90)=73.3µs   p(95)=89.71µs 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=7.07s    min=17.22ms med=6.78s  max=15.76s  p(90)=11.62s   p(95)=12.54s  
     http_reqs......................: 5480   77.4348/s
     iteration_duration.............: avg=7.07s    min=17.98ms med=6.78s  max=15.76s  p(90)=11.62s   p(95)=12.54s  
     iterations.....................: 5480   77.4348/s
     vus............................: 131    min=53    max=1000
     vus_max........................: 1000   min=1000  max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8ca8d8cb-1cbb-478d-1349-22dce656d200/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2f1d3d86-f2bc-4ada-1109-d8ff74b34e00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 21615      ✗ 0     
     data_received..................: 36 MB   513 kB/s
     data_sent......................: 8.6 MB  122 kB/s
     http_req_blocked...............: avg=418.25µs min=1.2µs   med=2.5µs  max=314.13ms p(90)=184.96µs p(95)=466.88µs
     http_req_connecting............: avg=402.85µs min=0s      med=0s     max=307.89ms p(90)=121.26µs p(95)=388.3µs 
     http_req_duration..............: avg=5.31s    min=14.28ms med=5.01s  max=20.12s   p(90)=8.51s    p(95)=12.6s   
       { expected_response:true }...: avg=5.31s    min=14.28ms med=5.01s  max=20.12s   p(90)=8.51s    p(95)=12.6s   
     http_req_failed................: 0.00%   ✓ 0          ✗ 7205  
     http_req_receiving.............: avg=1.01ms   min=20.6µs  med=48.4µs max=355.8ms  p(90)=80.8µs   p(95)=149.36µs
     http_req_sending...............: avg=392.11µs min=7.5µs   med=14µs   max=322.84ms p(90)=67.2µs   p(95)=104.58µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=5.31s    min=14.16ms med=5.01s  max=20.12s   p(90)=8.51s    p(95)=12.6s   
     http_reqs......................: 7205    102.915994/s
     iteration_duration.............: avg=5.31s    min=15.1ms  med=5.01s  max=20.26s   p(90)=8.51s    p(95)=12.6s   
     iterations.....................: 7205    102.915994/s
     vus............................: 7       min=7        max=1000
     vus_max........................: 1000    min=1000     max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/512aec31-9c26-43e4-4a81-a9ac7b13f900/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9ce8486d-9179-4ef4-82a6-ce69441fef00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 12921     ✗ 0     
     data_received..................: 22 MB   310 kB/s
     data_sent......................: 5.1 MB  73 kB/s
     http_req_blocked...............: avg=1.44ms   min=1.7µs   med=3.4µs  max=130.16ms p(90)=503.71µs p(95)=556.73µs
     http_req_connecting............: avg=1.41ms   min=0s      med=0s     max=129.94ms p(90)=421.22µs p(95)=470.43µs
     http_req_duration..............: avg=8.69s    min=12.24ms med=8.78s  max=14.24s   p(90)=13.24s   p(95)=13.92s  
       { expected_response:true }...: avg=8.69s    min=12.24ms med=8.78s  max=14.24s   p(90)=13.24s   p(95)=13.92s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 4307  
     http_req_receiving.............: avg=80.87µs  min=27.4µs  med=72.1µs max=8.51ms   p(90)=105.04µs p(95)=121µs   
     http_req_sending...............: avg=185.46µs min=8.6µs   med=20.4µs max=37.76ms  p(90)=85.54µs  p(95)=110.57µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=8.69s    min=12.15ms med=8.78s  max=14.24s   p(90)=13.24s   p(95)=13.92s  
     http_reqs......................: 4307    61.525382/s
     iteration_duration.............: avg=8.69s    min=13.17ms med=8.78s  max=14.24s   p(90)=13.24s   p(95)=13.92s  
     iterations.....................: 4307    61.525382/s
     vus............................: 9       min=9       max=1000
     vus_max........................: 1000    min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2ce8fd14-8f59-4865-ff20-70ba18e93d00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0eb1a1ee-6acd-4f9f-8884-097ce2b82e00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  80% — ✓ 3812 / ✗ 920
     ✗ valid response structure
      ↳  80% — ✓ 3812 / ✗ 920

     checks.........................: 87.03% ✓ 12356     ✗ 1840  
     data_received..................: 22 MB  312 kB/s
     data_sent......................: 5.6 MB 78 kB/s
     http_req_blocked...............: avg=246.74µs min=1.1µs   med=2.4µs   max=212.41ms p(90)=388.49µs p(95)=428.03µs
     http_req_connecting............: avg=190.36µs min=0s      med=0s      max=119.72ms p(90)=323.6µs  p(95)=360.34µs
     http_req_duration..............: avg=8.37s    min=94.35ms med=5.23s   max=33.95s   p(90)=18.42s   p(95)=21.67s  
       { expected_response:true }...: avg=8.37s    min=94.35ms med=5.23s   max=33.95s   p(90)=18.42s   p(95)=21.67s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 4732  
     http_req_receiving.............: avg=255.48µs min=15.2µs  med=41.05µs max=79.99ms  p(90)=79.8µs   p(95)=93.23µs 
     http_req_sending...............: avg=120.68µs min=6.4µs   med=14.7µs  max=124.21ms p(90)=69.7µs   p(95)=84.37µs 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=8.37s    min=94.27ms med=5.23s   max=33.95s   p(90)=18.42s   p(95)=21.67s  
     http_reqs......................: 4732   65.876693/s
     iteration_duration.............: avg=8.37s    min=94.99ms med=5.23s   max=33.96s   p(90)=18.42s   p(95)=21.67s  
     iterations.....................: 4732   65.876693/s
     vus............................: 83     min=55      max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b714be5b-1990-4fb6-a074-60431514c400/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/af3b1b7a-5298-4a61-62e7-ac10052ebb00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-deno`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  95% — ✓ 3046 / ✗ 128
     ✗ valid response structure
      ↳  95% — ✓ 3046 / ✗ 128

     checks.........................: 97.31% ✓ 9266      ✗ 256   
     data_received..................: 17 MB  229 kB/s
     data_sent......................: 3.8 MB 51 kB/s
     http_req_blocked...............: avg=351.4µs  min=1.2µs   med=3.6µs  max=26.15ms p(90)=661.24µs p(95)=833.56µs
     http_req_connecting............: avg=303.07µs min=0s      med=0s     max=25.91ms p(90)=555.78µs p(95)=698.16µs
     http_req_duration..............: avg=13.03s   min=1.8s    med=13.59s max=30.16s  p(90)=20.66s   p(95)=22.38s  
       { expected_response:true }...: avg=13.03s   min=1.8s    med=13.59s max=30.16s  p(90)=20.66s   p(95)=22.38s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 3174  
     http_req_receiving.............: avg=185.31µs min=24.29µs med=62.6µs max=23.33ms p(90)=159.85µs p(95)=292.78µs
     http_req_sending...............: avg=169.42µs min=9.5µs   med=24.6µs max=33.81ms p(90)=108.2µs  p(95)=169.78µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=13.03s   min=1.8s    med=13.59s max=30.15s  p(90)=20.66s   p(95)=22.38s  
     http_reqs......................: 3174   42.599009/s
     iteration_duration.............: avg=13.03s   min=1.82s   med=13.6s  max=30.16s  p(90)=20.66s   p(95)=22.38s  
     iterations.....................: 3174   42.599009/s
     vus............................: 54     min=52      max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9eb3f212-2e69-4a36-dbe3-52b0953fdc00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5b0ab4ed-c2f4-4fe9-4fcb-c3283984ef00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  70% — ✓ 2086 / ✗ 886
     ✗ valid response structure
      ↳  70% — ✓ 2086 / ✗ 886

     checks.........................: 80.12% ✓ 7144      ✗ 1772  
     data_received..................: 20 MB  225 kB/s
     data_sent......................: 3.5 MB 39 kB/s
     http_req_blocked...............: avg=267.58µs min=1.5µs  med=4.1µs  max=16.15ms p(90)=691.21µs p(95)=848.53µs
     http_req_connecting............: avg=228.85µs min=0s     med=0s     max=16.07ms p(90)=588.09µs p(95)=722.74µs
     http_req_duration..............: avg=17.12s   min=1.54s  med=11.74s max=51.81s  p(90)=38.01s   p(95)=43.53s  
       { expected_response:true }...: avg=17.12s   min=1.54s  med=11.74s max=51.81s  p(90)=38.01s   p(95)=43.53s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 2972  
     http_req_receiving.............: avg=136.86µs min=27.5µs med=91.4µs max=19.27ms p(90)=175.3µs  p(95)=230.59µs
     http_req_sending...............: avg=82.69µs  min=12.4µs med=31.5µs max=23.4ms  p(90)=103.26µs p(95)=141.72µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=17.12s   min=1.54s  med=11.74s max=51.81s  p(90)=38.01s   p(95)=43.53s  
     http_reqs......................: 2972   33.215952/s
     iteration_duration.............: avg=17.12s   min=1.54s  med=11.74s max=51.81s  p(90)=38.02s   p(95)=43.53s  
     iterations.....................: 2972   33.215952/s
     vus............................: 80     min=52      max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b47b6ec4-972d-4770-5b5d-d20302230700/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/182f9191-1a72-4f7f-80ba-2d14d4e5e700/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 4779 / ✗ 43
     ✗ valid response structure
      ↳  99% — ✓ 4779 / ✗ 43

     checks.........................: 99.40% ✓ 14380     ✗ 86    
     data_received..................: 25 MB  291 kB/s
     data_sent......................: 5.7 MB 67 kB/s
     http_req_blocked...............: avg=567.51µs min=1.3µs   med=3.1µs   max=59.43ms p(90)=406.8µs  p(95)=469.59µs
     http_req_connecting............: avg=544.99µs min=0s      med=0s      max=59.25ms p(90)=338.29µs p(95)=396.58µs
     http_req_duration..............: avg=9.36s    min=62.13ms med=2.56s   max=57.84s  p(90)=38.79s   p(95)=48.78s  
       { expected_response:true }...: avg=9.36s    min=62.13ms med=2.56s   max=57.84s  p(90)=38.79s   p(95)=48.78s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 4822  
     http_req_receiving.............: avg=74.25µs  min=20.7µs  med=70.5µs  max=2.26ms  p(90)=99.09µs  p(95)=109.09µs
     http_req_sending...............: avg=95.84µs  min=6.3µs   med=18.39µs max=18.26ms p(90)=70.79µs  p(95)=85.7µs  
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=9.36s    min=62.06ms med=2.56s   max=57.84s  p(90)=38.79s   p(95)=48.78s  
     http_reqs......................: 4822   56.692383/s
     iteration_duration.............: avg=9.36s    min=62.74ms med=2.56s   max=57.84s  p(90)=38.79s   p(95)=48.78s  
     iterations.....................: 4822   56.692383/s
     vus............................: 10     min=10      max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2b3da160-aa6e-4af2-b349-179eedd57400/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/264bf78c-f7d7-42ce-6c62-65e1ba6d9e00/public" alt="HTTP Overview" />


  </details>