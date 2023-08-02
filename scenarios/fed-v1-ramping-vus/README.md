## Overview for: `fed-v1-ramping-vus`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. We are running a heavy load of concurrent VUs to measure response time and other stats, during stress. It measure things like memory usage, CPU usage, response times. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was trying to reach 1500 concurrent VUs over 300s


### Comparison


| Gateway                             | duration(p95)⬇️ |  RPS  |         Requests          |                       Durations                        |
| :---------------------------------- | :-------------: | :---: | :-----------------------: | :----------------------------------------------------: |
| wundergraph                         |     1915ms      |  826  |  256223 total, 0 failed   |    avg: 907ms, p95: 1916ms, max: 3181ms, med: 841ms    |
| mesh-supergraph                     |     18050ms     |  81   |   25583 total, 0 failed   |  avg: 9626ms, p95: 18051ms, max: 23235ms, med: 9544ms  |
| stitching-federation-with-yoga-deno |     18332ms     |  85   |   26761 total, 0 failed   |  avg: 9110ms, p95: 18332ms, max: 33573ms, med: 8639ms  |
| mesh                                |     19236ms     |  77   |   24350 total, 0 failed   | avg: 10109ms, p95: 19236ms, max: 25301ms, med: 9727ms  |
| mercurius                           |     20792ms     |  67   |   20909 total, 0 failed   | avg: 11615ms, p95: 20793ms, max: 21973ms, med: 11706ms |
| stitching-federation-with-yoga-bun  |     21964ms     |  82   |   25999 total, 0 failed   |  avg: 9428ms, p95: 21965ms, max: 47042ms, med: 9041ms  |
| apollo-router                       |     23740ms     |  70   |  22835 total, 185 failed  | avg: 11271ms, p95: 23741ms, max: 33263ms, med: 9785ms  |
| apollo-gateway-with-yoga-uws        |     30886ms     |  66   |   21197 total, 0 failed   | avg: 12106ms, p95: 30887ms, max: 49101ms, med: 8325ms  |
| stitching-federation-with-yoga-uws  |     34413ms     |  115  | 35707 total, 22343 failed |   avg: 6207ms, p95: 34414ms, max: 60061ms, med: 0ms    |
| apollo-server-node16                |     42404ms     |  57   |  18649 total, 18 failed   | avg: 13637ms, p95: 42405ms, max: 60004ms, med: 7716ms  |
| apollo-gateway-with-yoga            |     60000ms     |  65   | 21983 total, 2717 failed  | avg: 11531ms, p95: 60000ms, max: 60044ms, med: 3897ms  |
| apollo-server                       |     60000ms     |  49   | 16435 total, 2980 failed  | avg: 15105ms, p95: 60001ms, max: 60051ms, med: 4309ms  |
| stitching-federation-with-yoga      |     60000ms     |  71   | 24020 total, 2798 failed  | avg: 10543ms, p95: 60000ms, max: 60032ms, med: 3228ms  |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 768669     ✗ 0     
     data_received..................: 1.3 GB  4.1 MB/s
     data_sent......................: 304 MB  981 kB/s
     http_req_blocked...............: avg=847.5µs  min=900ns  med=1.8µs    max=1.21s p(90)=3µs     p(95)=3.7µs  
     http_req_connecting............: avg=834.73µs min=0s     med=0s       max=1.21s p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=906.83ms min=6.4ms  med=841.39ms max=3.18s p(90)=1.66s   p(95)=1.91s  
       { expected_response:true }...: avg=906.83ms min=6.4ms  med=841.39ms max=3.18s p(90)=1.66s   p(95)=1.91s  
     http_req_failed................: 0.00%   ✓ 0          ✗ 256223
     http_req_receiving.............: avg=5.09ms   min=13.5µs med=27.2µs   max=1.07s p(90)=167.3µs p(95)=642.2µs
     http_req_sending...............: avg=1.67ms   min=5.8µs  med=10.2µs   max=1.07s p(90)=22.7µs  p(95)=98.2µs 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s       max=0s    p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=900.06ms min=6.35ms med=837.7ms  max=3.1s  p(90)=1.64s   p(95)=1.88s  
     http_reqs......................: 256223  826.516144/s
     iteration_duration.............: avg=925.37ms min=6.92ms med=855.31ms max=3.63s p(90)=1.7s    p(95)=1.96s  
     iterations.....................: 256223  826.516144/s
     vus............................: 9       min=9        max=1499
     vus_max........................: 1500    min=1500     max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ddeb7050-dcaf-4c1c-2cb2-2d62d7b36e00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/62b3a78b-3333-4ea7-e1d9-4127188c2200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  98% — ✓ 25275 / ✗ 308
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 25583

     checks.........................: 66.26% ✓ 50858     ✗ 25891 
     data_received..................: 132 MB 421 kB/s
     data_sent......................: 30 MB  97 kB/s
     http_req_blocked...............: avg=52.65µs min=1.4µs  med=2.7µs  max=43.74ms  p(90)=5µs    p(95)=224.18µs
     http_req_connecting............: avg=44.41µs min=0s     med=0s     max=42.89ms  p(90)=0s     p(95)=155.69µs
     http_req_duration..............: avg=9.62s   min=1.06s  med=9.54s  max=23.23s   p(90)=16.95s p(95)=18.05s  
       { expected_response:true }...: avg=9.62s   min=1.06s  med=9.54s  max=23.23s   p(90)=16.95s p(95)=18.05s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 25583 
     http_req_receiving.............: avg=84.46µs min=25.3µs med=66.5µs max=107.39ms p(90)=94µs   p(95)=105.1µs 
     http_req_sending...............: avg=56.72µs min=9µs    med=16.4µs max=181.53ms p(90)=36.1µs p(95)=66.5µs  
     http_req_tls_handshaking.......: avg=0s      min=0s     med=0s     max=0s       p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=9.62s   min=1.06s  med=9.54s  max=23.23s   p(90)=16.95s p(95)=18.05s  
     http_reqs......................: 25583  81.788039/s
     iteration_duration.............: avg=9.62s   min=1.06s  med=9.54s  max=23.23s   p(90)=16.95s p(95)=18.05s  
     iterations.....................: 25583  81.788039/s
     vus............................: 45     min=0       max=1498
     vus_max........................: 1500   min=1216    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0aaf24cc-5634-46d1-f998-b755bdccdf00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a4e1fd8b-adc7-49f2-fb46-1de788586800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-deno`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  98% — ✓ 26318 / ✗ 443
     ✗ valid response structure
      ↳  98% — ✓ 26318 / ✗ 443

     checks.........................: 98.89% ✓ 79397     ✗ 886   
     data_received..................: 139 MB 448 kB/s
     data_sent......................: 32 MB  102 kB/s
     http_req_blocked...............: avg=43.94µs  min=1µs      med=2.4µs  max=21.86ms p(90)=4.59µs p(95)=182.9µs
     http_req_connecting............: avg=34.62µs  min=0s       med=0s     max=21.8ms  p(90)=0s     p(95)=117.5µs
     http_req_duration..............: avg=9.11s    min=626.58ms med=8.63s  max=33.57s  p(90)=16.04s p(95)=18.33s 
       { expected_response:true }...: avg=9.11s    min=626.58ms med=8.63s  max=33.57s  p(90)=16.04s p(95)=18.33s 
     http_req_failed................: 0.00%  ✓ 0         ✗ 26761 
     http_req_receiving.............: avg=111.94µs min=17.1µs   med=34.9µs max=37.3ms  p(90)=85µs   p(95)=113.8µs
     http_req_sending...............: avg=75.01µs  min=6.4µs    med=13µs   max=24.36ms p(90)=50.8µs p(95)=96.9µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=9.11s    min=626.5ms  med=8.63s  max=33.57s  p(90)=16.04s p(95)=18.33s 
     http_reqs......................: 26761  85.931216/s
     iteration_duration.............: avg=9.11s    min=627.49ms med=8.64s  max=33.57s  p(90)=16.04s p(95)=18.33s 
     iterations.....................: 26761  85.931216/s
     vus............................: 156    min=50      max=1500
     vus_max........................: 1500   min=1500    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/35d3e4e1-5c90-498f-3554-468edaed9300/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/162918cf-a10e-49d8-fe65-33b8bbb28800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  98% — ✓ 24089 / ✗ 261
     ✗ valid response structure
      ↳  98% — ✓ 24089 / ✗ 261

     checks.........................: 99.28% ✓ 72528     ✗ 522   
     data_received..................: 124 MB 397 kB/s
     data_sent......................: 29 MB  92 kB/s
     http_req_blocked...............: avg=78.92µs min=1.4µs    med=2.7µs  max=178.21ms p(90)=4.89µs  p(95)=217.85µs
     http_req_connecting............: avg=70.38µs min=0s       med=0s     max=178.06ms p(90)=0s      p(95)=149.61µs
     http_req_duration..............: avg=10.1s   min=995.33ms med=9.72s  max=25.3s    p(90)=17.93s  p(95)=19.23s  
       { expected_response:true }...: avg=10.1s   min=995.33ms med=9.72s  max=25.3s    p(90)=17.93s  p(95)=19.23s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 24350 
     http_req_receiving.............: avg=90.8µs  min=23µs     med=59.2µs max=72.04ms  p(90)=84.3µs  p(95)=95µs    
     http_req_sending...............: avg=72.47µs min=8.1µs    med=15µs   max=93.9ms   p(90)=35.11µs p(95)=68.4µs  
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s     max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=10.1s   min=995.21ms med=9.72s  max=25.3s    p(90)=17.93s  p(95)=19.23s  
     http_reqs......................: 24350  77.758339/s
     iteration_duration.............: avg=10.11s  min=996.25ms med=9.72s  max=25.3s    p(90)=17.94s  p(95)=19.23s  
     iterations.....................: 24350  77.758339/s
     vus............................: 145    min=0       max=1500
     vus_max........................: 1500   min=1271    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/39be5e69-6037-4dce-262c-62014d71f900/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/62054002-fcc0-4053-2932-2f0e4ddf6e00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 62727     ✗ 0     
     data_received..................: 105 MB  338 kB/s
     data_sent......................: 25 MB   80 kB/s
     http_req_blocked...............: avg=61.49µs min=1.4µs  med=3.4µs  max=60.95ms p(90)=14.8µs  p(95)=449.4µs 
     http_req_connecting............: avg=51.17µs min=0s     med=0s     max=60.52ms p(90)=0s      p(95)=371.82µs
     http_req_duration..............: avg=11.61s  min=1.03s  med=11.7s  max=21.97s  p(90)=19.68s  p(95)=20.79s  
       { expected_response:true }...: avg=11.61s  min=1.03s  med=11.7s  max=21.97s  p(90)=19.68s  p(95)=20.79s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 20909 
     http_req_receiving.............: avg=83.58µs min=23.6µs med=74.3µs max=26.36ms p(90)=99.9µs  p(95)=112.2µs 
     http_req_sending...............: avg=42.83µs min=7.8µs  med=19µs   max=17.17ms p(90)=48.52µs p(95)=79.6µs  
     http_req_tls_handshaking.......: avg=0s      min=0s     med=0s     max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=11.61s  min=1.03s  med=11.7s  max=21.97s  p(90)=19.68s  p(95)=20.79s  
     http_reqs......................: 20909   67.262398/s
     iteration_duration.............: avg=11.61s  min=1.04s  med=11.7s  max=21.97s  p(90)=19.68s  p(95)=20.79s  
     iterations.....................: 20909   67.262398/s
     vus............................: 228     min=0       max=1499
     vus_max........................: 1500    min=1409    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6adb8521-48be-4199-0e0e-f75591df1600/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/96e92799-1ea4-4c84-37ef-4f41eff08000/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 25992 / ✗ 7
     ✗ valid response structure
      ↳  99% — ✓ 25992 / ✗ 7

     checks.........................: 99.98% ✓ 77983     ✗ 14    
     data_received..................: 130 MB 413 kB/s
     data_sent......................: 31 MB  98 kB/s
     http_req_blocked...............: avg=212.58µs min=1.5µs    med=2.7µs   max=329.36ms p(90)=18.39µs p(95)=197.23µs
     http_req_connecting............: avg=197.14µs min=0s       med=0s      max=329.18ms p(90)=0s      p(95)=121.2µs 
     http_req_duration..............: avg=9.42s    min=730.54ms med=9.04s   max=47.04s   p(90)=13.39s  p(95)=21.96s  
       { expected_response:true }...: avg=9.42s    min=730.54ms med=9.04s   max=47.04s   p(90)=13.39s  p(95)=21.96s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 25999 
     http_req_receiving.............: avg=702.2µs  min=23.9µs   med=62.2µs  max=255.32ms p(90)=112.8µs p(95)=192µs   
     http_req_sending...............: avg=332.36µs min=8.9µs    med=16.89µs max=264.59ms p(90)=66.8µs  p(95)=121.2µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=9.42s    min=730.33ms med=9.04s   max=47.04s   p(90)=13.39s  p(95)=21.96s  
     http_reqs......................: 25999  82.708215/s
     iteration_duration.............: avg=9.42s    min=731.48ms med=9.04s   max=47.04s   p(90)=13.39s  p(95)=21.96s  
     iterations.....................: 25999  82.708215/s
     vus............................: 98     min=0       max=1500
     vus_max........................: 1500   min=834     max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4a000e7a-b246-4980-c59e-1ed9cbd25800/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0fcad889-e058-4b82-808d-2be97073f100/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  99% — ✓ 22650 / ✗ 185
     ✗ no graphql errors
      ↳  98% — ✓ 22481 / ✗ 354
     ✗ valid response structure
      ↳  99% — ✓ 22481 / ✗ 169

     checks.........................: 98.96% ✓ 67612     ✗ 708   
     data_received..................: 113 MB 349 kB/s
     data_sent......................: 27 MB  84 kB/s
     http_req_blocked...............: avg=58.5µs  min=1.1µs    med=2.9µs  max=20.31ms p(90)=8.8µs    p(95)=193.36µs
     http_req_connecting............: avg=47µs    min=0s       med=0s     max=20.27ms p(90)=0s       p(95)=123.63µs
     http_req_duration..............: avg=11.27s  min=142.21ms med=9.78s  max=33.26s  p(90)=21.56s   p(95)=23.74s  
       { expected_response:true }...: avg=11.1s   min=142.21ms med=9.7s   max=33.01s  p(90)=21.3s    p(95)=23.3s   
     http_req_failed................: 0.81%  ✓ 185       ✗ 22650 
     http_req_receiving.............: avg=82.21µs min=22.6µs   med=62.3µs max=43.85ms p(90)=103.46µs p(95)=127.1µs 
     http_req_sending...............: avg=64µs    min=9.19µs   med=17µs   max=35.48ms p(90)=50.8µs   p(95)=76.3µs  
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=11.27s  min=142.1ms  med=9.78s  max=33.26s  p(90)=21.56s   p(95)=23.74s  
     http_reqs......................: 22835  70.653423/s
     iteration_duration.............: avg=11.27s  min=143.07ms med=9.78s  max=33.26s  p(90)=21.56s   p(95)=23.74s  
     iterations.....................: 22835  70.653423/s
     vus............................: 125    min=0       max=1500
     vus_max........................: 1500   min=1298    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/db52fa56-44aa-4f3b-1f9b-003d136de700/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/86f49d97-2e80-493a-3642-2d661f5e9c00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga-uws`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  62% — ✓ 13235 / ✗ 7962
     ✗ valid response structure
      ↳  62% — ✓ 13235 / ✗ 7962

     checks.........................: 74.95% ✓ 47667     ✗ 15924 
     data_received..................: 91 MB  283 kB/s
     data_sent......................: 25 MB  79 kB/s
     http_req_blocked...............: avg=61.31µs min=1.3µs   med=2.5µs  max=126.06ms p(90)=8.6µs  p(95)=338.56µs
     http_req_connecting............: avg=51.94µs min=0s      med=0s     max=125.76ms p(90)=0s     p(95)=157.38µs
     http_req_duration..............: avg=12.1s   min=40.75ms med=8.32s  max=49.1s    p(90)=26s    p(95)=30.88s  
       { expected_response:true }...: avg=12.1s   min=40.75ms med=8.32s  max=49.1s    p(90)=26s    p(95)=30.88s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 21197 
     http_req_receiving.............: avg=71.78µs min=16.5µs  med=46.9µs max=48.87ms  p(90)=76.2µs p(95)=89.8µs  
     http_req_sending...............: avg=59.6µs  min=6.7µs   med=13.3µs max=27.07ms  p(90)=46.1µs p(95)=74.9µs  
     http_req_tls_handshaking.......: avg=0s      min=0s      med=0s     max=0s       p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=12.1s   min=40.66ms med=8.32s  max=49.1s    p(90)=26s    p(95)=30.88s  
     http_reqs......................: 21197  66.107059/s
     iteration_duration.............: avg=12.1s   min=41.41ms med=8.32s  max=49.1s    p(90)=26s    p(95)=30.88s  
     iterations.....................: 21197  66.107059/s
     vus............................: 239    min=4       max=1500
     vus_max........................: 1500   min=1500    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f6ae2db4-195c-4a1f-b617-b41eb9907500/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4f4d0c84-a2ed-4f12-fe79-88b87aaa4200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-uws`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  37% — ✓ 13364 / ✗ 22343
     ✗ no graphql errors
      ↳  24% — ✓ 8898 / ✗ 26809
     ✗ valid response structure
      ↳  66% — ✓ 8898 / ✗ 4466

     checks.........................: 36.75% ✓ 31160      ✗ 53618 
     data_received..................: 108 MB 347 kB/s
     data_sent......................: 18 MB  58 kB/s
     http_req_blocked...............: avg=169.92µs min=0s       med=0s    max=185.59ms p(90)=4.6µs  p(95)=184.98µs
     http_req_connecting............: avg=161.12µs min=0s       med=0s    max=185.52ms p(90)=0s     p(95)=121.27µs
     http_req_duration..............: avg=6.2s     min=0s       med=0s    max=1m0s     p(90)=23.39s p(95)=34.41s  
       { expected_response:true }...: avg=12.9s    min=997.61ms med=7.71s max=59.99s   p(90)=33.02s p(95)=37.78s  
     http_req_failed................: 62.57% ✓ 22343      ✗ 13364 
     http_req_receiving.............: avg=41.97µs  min=0s       med=0s    max=63.61ms  p(90)=89.8µs p(95)=123.57µs
     http_req_sending...............: avg=59.9µs   min=0s       med=0s    max=56.84ms  p(90)=32.9µs p(95)=61.1µs  
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s    max=0s       p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=6.2s     min=0s       med=0s    max=1m0s     p(90)=23.38s p(95)=34.41s  
     http_reqs......................: 35707  115.180322/s
     iteration_duration.............: avg=6.51s    min=327.12µs med=1.14s max=1m1s     p(90)=23.9s  p(95)=34.41s  
     iterations.....................: 35707  115.180322/s
     vus............................: 2      min=0        max=1499
     vus_max........................: 1500   min=1221     max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a904217b-4272-4dd8-f29b-81f41b7b8600/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a16113a9-6258-4dbb-990e-81e55af1d300/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server-node16`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  99% — ✓ 18631 / ✗ 18
     ✗ no graphql errors
      ↳  57% — ✓ 10669 / ✗ 7980
     ✗ valid response structure
      ↳  57% — ✓ 10669 / ✗ 7962

     checks.........................: 71.46% ✓ 39969     ✗ 15960 
     data_received..................: 82 MB  251 kB/s
     data_sent......................: 22 MB  68 kB/s
     http_req_blocked...............: avg=188.03µs min=1.4µs    med=2.5µs  max=107.75ms p(90)=14.3µs  p(95)=412.5µs
     http_req_connecting............: avg=177.21µs min=0s       med=0s     max=107.45ms p(90)=0s      p(95)=337.1µs
     http_req_duration..............: avg=13.63s   min=175.91ms med=7.71s  max=1m0s     p(90)=33.26s  p(95)=42.4s  
       { expected_response:true }...: avg=13.59s   min=175.91ms med=7.68s  max=57.88s   p(90)=33.24s  p(95)=42.31s 
     http_req_failed................: 0.09%  ✓ 18        ✗ 18631 
     http_req_receiving.............: avg=66.02µs  min=0s       med=57.8µs max=11.15ms  p(90)=84.82µs p(95)=95.7µs 
     http_req_sending...............: avg=54.19µs  min=7.8µs    med=14µs   max=122.66ms p(90)=41.2µs  p(95)=70.86µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=13.63s   min=175.81ms med=7.71s  max=1m0s     p(90)=33.26s  p(95)=42.4s  
     http_reqs......................: 18649  57.314187/s
     iteration_duration.............: avg=13.63s   min=176.53ms med=7.71s  max=1m0s     p(90)=33.26s  p(95)=42.4s  
     iterations.....................: 18649  57.314187/s
     vus............................: 32     min=32      max=1500
     vus_max........................: 1500   min=1500    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1f9b978b-0c99-4832-6628-145c7bd2bd00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d3005d67-b71f-4e34-ba48-8f5bd1aa8300/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  87% — ✓ 19266 / ✗ 2717
     ✗ no graphql errors
      ↳  86% — ✓ 18916 / ✗ 3067
     ✗ valid response structure
      ↳  98% — ✓ 18916 / ✗ 350

     checks.........................: 90.29% ✓ 57098     ✗ 6134  
     data_received..................: 96 MB  288 kB/s
     data_sent......................: 26 MB  79 kB/s
     http_req_blocked...............: avg=252.81µs min=1.1µs   med=2.7µs  max=32.56ms p(90)=330.38µs p(95)=658.66µs
     http_req_connecting............: avg=233.18µs min=0s      med=0s     max=32.42ms p(90)=264.98µs p(95)=537.18µs
     http_req_duration..............: avg=11.53s   min=88.2ms  med=3.89s  max=1m0s    p(90)=59.99s   p(95)=1m0s    
       { expected_response:true }...: avg=4.7s     min=88.2ms  med=3.82s  max=59.19s  p(90)=4.53s    p(95)=5.49s   
     http_req_failed................: 12.35% ✓ 2717      ✗ 19266 
     http_req_receiving.............: avg=55.61µs  min=0s      med=51.2µs max=10.86ms p(90)=81.1µs   p(95)=90µs    
     http_req_sending...............: avg=47.33µs  min=7.7µs   med=14.9µs max=30.97ms p(90)=51.9µs   p(95)=68.9µs  
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=11.53s   min=88.09ms med=3.89s  max=1m0s    p(90)=59.99s   p(95)=1m0s    
     http_reqs......................: 21983  65.752404/s
     iteration_duration.............: avg=11.53s   min=88.94ms med=3.89s  max=1m0s    p(90)=1m0s     p(95)=1m0s    
     iterations.....................: 21983  65.752404/s
     vus............................: 3      min=0       max=1500
     vus_max........................: 1500   min=1500    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/90f28008-80b6-41c2-1607-18b6b4060600/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/80fdd532-685f-4755-eb81-4290f1b7d100/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  81% — ✓ 13455 / ✗ 2980
     ✗ no graphql errors
      ↳  80% — ✓ 13273 / ✗ 3162
     ✗ valid response structure
      ↳  98% — ✓ 13273 / ✗ 182

     checks.........................: 86.34% ✓ 40001     ✗ 6324  
     data_received..................: 69 MB  207 kB/s
     data_sent......................: 20 MB  60 kB/s
     http_req_blocked...............: avg=372.44µs min=1.8µs    med=3.6µs  max=42.3ms  p(90)=502.78µs p(95)=1.3ms  
     http_req_connecting............: avg=338.49µs min=0s       med=0s     max=42.21ms p(90)=406.26µs p(95)=1.11ms 
     http_req_duration..............: avg=15.1s    min=104.58ms med=4.3s   max=1m0s    p(90)=1m0s     p(95)=1m0s   
       { expected_response:true }...: avg=5.16s    min=104.58ms med=4.21s  max=59.55s  p(90)=4.88s    p(95)=5.79s  
     http_req_failed................: 18.13% ✓ 2980      ✗ 13455 
     http_req_receiving.............: avg=75.96µs  min=0s       med=74.8µs max=7.36ms  p(90)=112.8µs  p(95)=131.3µs
     http_req_sending...............: avg=63.65µs  min=10µs     med=22µs   max=26.94ms p(90)=70.3µs   p(95)=95.03µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=15.1s    min=104.47ms med=4.3s   max=1m0s    p(90)=59.99s   p(95)=1m0s   
     http_reqs......................: 16435  49.142973/s
     iteration_duration.............: avg=15.1s    min=105.3ms  med=4.31s  max=1m0s    p(90)=1m0s     p(95)=1m0s   
     iterations.....................: 16435  49.142973/s
     vus............................: 29     min=0       max=1500
     vus_max........................: 1500   min=1021    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/dcc8203f-8ed5-4070-c956-347c9d8f3000/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/587af5e9-aad4-4b02-cd85-2b5d724c4800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  88% — ✓ 21222 / ✗ 2798
     ✗ no graphql errors
      ↳  88% — ✓ 21181 / ✗ 2839
     ✗ valid response structure
      ↳  99% — ✓ 21181 / ✗ 41

     checks.........................: 91.80% ✓ 63584     ✗ 5678  
     data_received..................: 107 MB 321 kB/s
     data_sent......................: 29 MB  86 kB/s
     http_req_blocked...............: avg=256.78µs min=1.6µs   med=3.2µs max=44.28ms p(90)=356.24µs p(95)=682.45µs
     http_req_connecting............: avg=234.49µs min=0s      med=0s    max=44.21ms p(90)=283.62µs p(95)=538.72µs
     http_req_duration..............: avg=10.54s   min=76.01ms med=3.22s max=1m0s    p(90)=59.99s   p(95)=1m0s    
       { expected_response:true }...: avg=4.02s    min=76.01ms med=3.18s max=59.88s  p(90)=3.52s    p(95)=4.59s   
     http_req_failed................: 11.64% ✓ 2798      ✗ 21222 
     http_req_receiving.............: avg=70.87µs  min=0s      med=65µs  max=10.27ms p(90)=93µs     p(95)=104µs   
     http_req_sending...............: avg=57.87µs  min=8.3µs   med=18µs  max=23.17ms p(90)=59.1µs   p(95)=80.2µs  
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s    max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=10.54s   min=75.87ms med=3.22s max=1m0s    p(90)=59.99s   p(95)=1m0s    
     http_reqs......................: 24020  71.830232/s
     iteration_duration.............: avg=10.54s   min=76.77ms med=3.22s max=1m0s    p(90)=1m0s     p(95)=1m0s    
     iterations.....................: 24020  71.830232/s
     vus............................: 10     min=0       max=1500
     vus_max........................: 1500   min=1124    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a84e8ec2-f453-4a07-0d52-0244c7229200/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3d9b7230-f913-444f-0beb-ae7cf1e7d000/public" alt="HTTP Overview" />


  </details>