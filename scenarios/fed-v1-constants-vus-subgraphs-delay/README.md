## Overview for: `scenarios/fed-v1-constants-vus-subgraphs-delay`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. All subgraphs have an intentional delay on replying, and this creates additional pressure on the gateway's memory. We are running a heavy load of concurrent VUs to measure response time and other stats, during stress. It measure things like memory usage, CPU usage, response times.


This scenario was running 400 VUs over 200s


### Comparison


| Gateway              | RPS ⬇️ |        Requests         |          Duration          |
| :------------------- | :----: | :---------------------: | :------------------------: |
| mesh-bun             |  745   | 149379 total, 0 failed  |   avg: 536ms, p95: 851ms   |
| wundergraph          |  237   |  48000 total, 0 failed  |  avg: 1669ms, p95: 2012ms  |
| apollo-router        |   93   |  19011 total, 0 failed  |  avg: 4276ms, p95: 6591ms  |
| mesh-supergraph      |   85   |  17478 total, 0 failed  |  avg: 4638ms, p95: 6101ms  |
| mesh                 |   78   |  15976 total, 0 failed  |  avg: 5030ms, p95: 6415ms  |
| apollo-server-node16 |   63   |  12844 total, 0 failed  |  avg: 6287ms, p95: 9728ms  |
| apollo-server        |   46   | 10045 total, 546 failed | avg: 8218ms, p95: 59938ms  |
| mercurius            |   7    |  1617 total, 0 failed   | avg: 52983ms, p95: 56849ms |



<details>
  <summary>Summary for: `mesh-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  0% — ✓ 0 / ✗ 149379
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 149379

     checks.........................: 33.33% ✓ 149379     ✗ 298758
     data_received..................: 142 MB 709 kB/s
     data_sent......................: 177 MB 885 kB/s
     http_req_blocked...............: avg=193.93µs min=700ns    med=1.8µs    max=164.34ms p(90)=2.6µs    p(95)=3.3µs   
     http_req_connecting............: avg=187.17µs min=0s       med=0s       max=164.25ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=535.63ms min=136.55ms med=498.47ms max=1.3s     p(90)=789.44ms p(95)=850.55ms
       { expected_response:true }...: avg=535.63ms min=136.55ms med=498.47ms max=1.3s     p(90)=789.44ms p(95)=850.55ms
   ✓ http_req_failed................: 0.00%  ✓ 0          ✗ 149379
     http_req_receiving.............: avg=519.04µs min=9.7µs    med=22.6µs   max=219.62ms p(90)=133.2µs  p(95)=297.4µs 
     http_req_sending...............: avg=231.75µs min=5.4µs    med=10.3µs   max=236.85ms p(90)=34.79µs  p(95)=132.5µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=534.88ms min=135.73ms med=498.14ms max=1.22s    p(90)=788.48ms p(95)=848.93ms
     http_reqs......................: 149379 745.172976/s
     iteration_duration.............: avg=536.29ms min=142.9ms  med=498.9ms  max=1.39s    p(90)=789.84ms p(95)=853.01ms
     iterations.....................: 149379 745.172976/s
     vus............................: 400    min=400      max=400 
     vus_max........................: 400    min=400      max=400 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/91f78661-d7d1-4fe8-507e-d8c164059e00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/bf921e77-638a-4339-90a3-f7e5dd942d00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 144000     ✗ 0    
     data_received..................: 239 MB  1.2 MB/s
     data_sent......................: 57 MB   282 kB/s
     http_req_blocked...............: avg=713.88µs min=1.5µs    med=2.7µs  max=301.71ms p(90)=3.8µs    p(95)=4.89µs  
     http_req_connecting............: avg=672.14µs min=0s       med=0s     max=203.83ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=1.66s    min=939.63ms med=1.66s  max=2.85s    p(90)=1.91s    p(95)=2.01s   
       { expected_response:true }...: avg=1.66s    min=939.63ms med=1.66s  max=2.85s    p(90)=1.91s    p(95)=2.01s   
   ✓ http_req_failed................: 0.00%   ✓ 0          ✗ 48000
     http_req_receiving.............: avg=1.16ms   min=18.5µs   med=41.9µs max=366.89ms p(90)=302.32µs p(95)=553.32µs
     http_req_sending...............: avg=757.73µs min=10µs     med=15.3µs max=275.47ms p(90)=43.2µs   p(95)=153.31µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=1.66s    min=939.57ms med=1.66s  max=2.84s    p(90)=1.91s    p(95)=2s      
     http_reqs......................: 48000   237.724569/s
     iteration_duration.............: avg=1.67s    min=940.94ms med=1.66s  max=2.93s    p(90)=1.92s    p(95)=2.01s   
     iterations.....................: 48000   237.724569/s
     vus............................: 77      min=77       max=400
     vus_max........................: 400     min=400      max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2199f915-4ba8-44c7-68bf-cf10eee1c000/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0d3667e0-e84d-4659-5a85-aae3dec88200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 18973 / ✗ 38
     ✗ valid response structure
      ↳  99% — ✓ 18973 / ✗ 38

     checks.........................: 99.86% ✓ 56957     ✗ 76   
     data_received..................: 95 MB  465 kB/s
     data_sent......................: 23 MB  111 kB/s
     http_req_blocked...............: avg=1.24ms   min=1.3µs  med=2.8µs  max=102.5ms  p(90)=4.5µs  p(95)=7.7µs  
     http_req_connecting............: avg=1.22ms   min=0s     med=0s     max=102.46ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=4.27s    min=1.67s  med=4.11s  max=10.21s   p(90)=5.9s   p(95)=6.59s  
       { expected_response:true }...: avg=4.27s    min=1.67s  med=4.11s  max=10.21s   p(90)=5.9s   p(95)=6.59s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 19011
     http_req_receiving.............: avg=95.47µs  min=22.9µs med=56µs   max=43.01ms  p(90)=85.1µs p(95)=95.95µs
     http_req_sending...............: avg=203.53µs min=7µs    med=14.5µs max=42.88ms  p(90)=28.9µs p(95)=50.9µs 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=4.27s    min=1.67s  med=4.11s  max=10.21s   p(90)=5.9s   p(95)=6.58s  
     http_reqs......................: 19011  93.261662/s
     iteration_duration.............: avg=4.27s    min=1.67s  med=4.11s  max=10.22s   p(90)=5.9s   p(95)=6.6s   
     iterations.....................: 19011  93.261662/s
     vus............................: 7      min=7       max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/44144f72-2c5c-4f57-ea35-272777934500/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d3430fb0-f88b-4284-5636-880551d0b600/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 17426 / ✗ 52
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 17478

     checks.........................: 66.56% ✓ 34904     ✗ 17530
     data_received..................: 89 MB  435 kB/s
     data_sent......................: 21 MB  102 kB/s
     http_req_blocked...............: avg=1.09ms   min=1.2µs  med=2.4µs  max=140.88ms p(90)=3.6µs  p(95)=5µs   
     http_req_connecting............: avg=1.07ms   min=0s     med=0s     max=140.63ms p(90)=0s     p(95)=0s    
     http_req_duration..............: avg=4.63s    min=2.86s  med=4.5s   max=10.39s   p(90)=5.15s  p(95)=6.1s  
       { expected_response:true }...: avg=4.63s    min=2.86s  med=4.5s   max=10.39s   p(90)=5.15s  p(95)=6.1s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 17478
     http_req_receiving.............: avg=64.1µs   min=23.5µs med=51.5µs max=15.75ms  p(90)=77.8µs p(95)=87.4µs
     http_req_sending...............: avg=145.48µs min=8.8µs  med=14.2µs max=63.93ms  p(90)=28.9µs p(95)=34.7µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s     p(95)=0s    
     http_req_waiting...............: avg=4.63s    min=2.86s  med=4.5s   max=10.39s   p(90)=5.15s  p(95)=6.1s  
     http_reqs......................: 17478  85.908081/s
     iteration_duration.............: avg=4.63s    min=2.86s  med=4.5s   max=10.41s   p(90)=5.15s  p(95)=6.1s  
     iterations.....................: 17478  85.908081/s
     vus............................: 320    min=320     max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8d3d1d6f-c5e6-4853-53e5-9714de801e00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/bb06befc-c03e-4cc0-3d23-be47039d6d00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 15944 / ✗ 32
     ✗ valid response structure
      ↳  99% — ✓ 15944 / ✗ 32

     checks.........................: 99.86% ✓ 47864     ✗ 64   
     data_received..................: 80 MB  396 kB/s
     data_sent......................: 19 MB  94 kB/s
     http_req_blocked...............: avg=1.4ms    min=1.4µs  med=2.6µs  max=129.8ms  p(90)=4µs    p(95)=8.4µs  
     http_req_connecting............: avg=1.38ms   min=0s     med=0s     max=129.77ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=5.02s    min=1.64s  med=4.88s  max=9.73s    p(90)=5.51s  p(95)=6.41s  
       { expected_response:true }...: avg=5.02s    min=1.64s  med=4.88s  max=9.73s    p(90)=5.51s  p(95)=6.41s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 15976
     http_req_receiving.............: avg=85.46µs  min=22.8µs med=53.2µs max=54.94ms  p(90)=79.3µs p(95)=89.2µs 
     http_req_sending...............: avg=437.21µs min=8.2µs  med=15µs   max=99.44ms  p(90)=31.2µs p(95)=46.37µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=5.02s    min=1.64s  med=4.88s  max=9.73s    p(90)=5.51s  p(95)=6.41s  
     http_reqs......................: 15976  78.948254/s
     iteration_duration.............: avg=5.03s    min=1.64s  med=4.88s  max=9.75s    p(90)=5.51s  p(95)=6.41s  
     iterations.....................: 15976  78.948254/s
     vus............................: 115    min=115     max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b4da8d73-ae18-4584-f8a3-901d6adb1b00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c088f310-7644-4f2c-486d-827963f78b00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server-node16`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  79% — ✓ 10250 / ✗ 2594
     ✗ valid response structure
      ↳  79% — ✓ 10250 / ✗ 2594

     checks.........................: 86.53% ✓ 33344     ✗ 5188 
     data_received..................: 63 MB  309 kB/s
     data_sent......................: 15 MB  75 kB/s
     http_req_blocked...............: avg=2.95ms  min=1.1µs  med=2.1µs  max=206.83ms p(90)=3.3µs   p(95)=12.6µs 
     http_req_connecting............: avg=2.91ms  min=0s     med=0s     max=199.16ms p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=6.28s   min=1.56s  med=5.97s  max=11.59s   p(90)=8.55s   p(95)=9.72s  
       { expected_response:true }...: avg=6.28s   min=1.56s  med=5.97s  max=11.59s   p(90)=8.55s   p(95)=9.72s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 12844
     http_req_receiving.............: avg=60.02µs min=18.7µs med=49.6µs max=25.95ms  p(90)=72.09µs p(95)=79.4µs 
     http_req_sending...............: avg=1.02ms  min=6.4µs  med=12.7µs max=142.25ms p(90)=27.3µs  p(95)=36.78µs
     http_req_tls_handshaking.......: avg=0s      min=0s     med=0s     max=0s       p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=6.28s   min=1.56s  med=5.97s  max=11.46s   p(90)=8.55s   p(95)=9.7s   
     http_reqs......................: 12844  63.151466/s
     iteration_duration.............: avg=6.29s   min=1.56s  med=5.97s  max=11.66s   p(90)=8.55s   p(95)=9.79s  
     iterations.....................: 12844  63.151466/s
     vus............................: 182    min=182     max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3511d594-349b-4b7f-589a-9fe64f1cd800/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7abe8fe9-2a2f-42af-930f-0a50ab563000/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  94% — ✓ 9499 / ✗ 546
     ✗ no graphql errors
      ↳  83% — ✓ 8350 / ✗ 1695
     ✗ valid response structure
      ↳  87% — ✓ 8350 / ✗ 1149

     checks.........................: 88.54% ✓ 26199     ✗ 3390 
     data_received..................: 48 MB  225 kB/s
     data_sent......................: 12 MB  55 kB/s
     http_req_blocked...............: avg=2.98ms min=1.5µs med=2.5µs  max=132.95ms p(90)=25.28µs p(95)=9.55ms  
     http_req_connecting............: avg=2.92ms min=0s    med=0s     max=126.45ms p(90)=0s      p(95)=8.57ms  
     http_req_duration..............: avg=8.21s  min=1.41s med=4.53s  max=1m0s     p(90)=5.83s   p(95)=59.93s  
       { expected_response:true }...: avg=5.24s  min=1.41s med=4.47s  max=59.5s    p(90)=5.47s   p(95)=5.81s   
   ✓ http_req_failed................: 5.43%  ✓ 546       ✗ 9499 
     http_req_receiving.............: avg=75.9µs min=0s    med=59.1µs max=23.78ms  p(90)=97.2µs  p(95)=116.08µs
     http_req_sending...............: avg=1.13ms min=9.1µs med=15µs   max=76.1ms   p(90)=59.64µs p(95)=1.03ms  
     http_req_tls_handshaking.......: avg=0s     min=0s    med=0s     max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=8.21s  min=1.41s med=4.53s  max=1m0s     p(90)=5.83s   p(95)=59.91s  
     http_reqs......................: 10045  46.656113/s
     iteration_duration.............: avg=8.22s  min=1.42s med=4.53s  max=1m0s     p(90)=5.84s   p(95)=1m0s    
     iterations.....................: 10045  46.656113/s
     vus............................: 12     min=12      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/99f5c2a3-7f65-474d-2717-b0e84023e700/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7d60a0f0-3f1d-41a0-7626-480883a3f500/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 4851     ✗ 0    
     data_received..................: 8.1 MB  35 kB/s
     data_sent......................: 1.9 MB  8.4 kB/s
     http_req_blocked...............: avg=9.56ms  min=1.6µs  med=3µs    max=73.13ms p(90)=45.02ms p(95)=49.52ms 
     http_req_connecting............: avg=9.43ms  min=0s     med=0s     max=64.28ms p(90)=44.84ms p(95)=49.34ms 
     http_req_duration..............: avg=52.98s  min=29.63s med=56.46s max=57.04s  p(90)=56.8s   p(95)=56.84s  
       { expected_response:true }...: avg=52.98s  min=29.63s med=56.46s max=57.04s  p(90)=56.8s   p(95)=56.84s  
   ✓ http_req_failed................: 0.00%   ✓ 0        ✗ 1617 
     http_req_receiving.............: avg=71.73µs min=26.9µs med=68.7µs max=446.4µs p(90)=91µs    p(95)=101.41µs
     http_req_sending...............: avg=1.58ms  min=9.79µs med=20.6µs max=13.1ms  p(90)=9.92ms  p(95)=11.53ms 
     http_req_tls_handshaking.......: avg=0s      min=0s     med=0s     max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=52.98s  min=29.63s med=56.46s max=57.04s  p(90)=56.8s   p(95)=56.84s  
     http_reqs......................: 1617    7.041857/s
     iteration_duration.............: avg=52.99s  min=29.63s med=56.46s max=57.04s  p(90)=56.8s   p(95)=56.84s  
     iterations.....................: 1617    7.041857/s
     vus............................: 14      min=14     max=400
     vus_max........................: 400     min=400    max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9f2dc44e-f44a-4b65-07ea-f13a38322200/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0a3cd8f4-9881-42bc-dac0-3bce47806b00/public" alt="HTTP Overview" />


  </details>