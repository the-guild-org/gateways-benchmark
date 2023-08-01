## Overview for: `fed-v1-ramping-vus`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. We are running a heavy load of concurrent VUs to measure response time and other stats, during stress. It measure things like memory usage, CPU usage, response times. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was trying to reach 3000 concurrent VUs over 300s


### Comparison


| Gateway                             | duration(p95)⬇️ |  RPS  |          Requests           |                       Durations                        |
| :---------------------------------- | :-------------: | :---: | :-------------------------: | :----------------------------------------------------: |
| stitching-federation-with-yoga-uws  |       0ms       |  779  | 241593 total, 237558 failed |      avg: 323ms, p95: 0ms, max: 60001ms, med: 0ms      |
| wundergraph                         |     7357ms      |  524  |   165007 total, 0 failed    |  avg: 2851ms, p95: 7358ms, max: 30649ms, med: 1936ms   |
| mesh-supergraph                     |     28494ms     |  107  |    34295 total, 0 failed    | avg: 14547ms, p95: 28495ms, max: 38332ms, med: 13671ms |
| mercurius                           |     38980ms     |  74   |    23471 total, 0 failed    | avg: 20772ms, p95: 38980ms, max: 42481ms, med: 20422ms |
| stitching-federation-with-yoga-bun  |     39647ms     |  80   |   27051 total, 214 failed   | avg: 18148ms, p95: 39648ms, max: 60008ms, med: 13879ms |
| apollo-router                       |     48792ms     |  69   |  22940 total, 6229 failed   | avg: 22809ms, p95: 48792ms, max: 60011ms, med: 23930ms |
| mesh                                |     49562ms     |  57   |  18963 total, 1446 failed   | avg: 26836ms, p95: 49563ms, max: 60015ms, med: 27713ms |
| apollo-gateway-with-yoga-uws        |     51970ms     |  69   |  23189 total, 1207 failed   | avg: 21739ms, p95: 51971ms, max: 60005ms, med: 20542ms |
| apollo-gateway-with-yoga            |     60000ms     |  68   |  22827 total, 6890 failed   | avg: 21321ms, p95: 60001ms, max: 60064ms, med: 4001ms  |
| apollo-server                       |     60000ms     |  60   |  20356 total, 7042 failed   | avg: 23578ms, p95: 60001ms, max: 60053ms, med: 4398ms  |
| stitching-federation-with-yoga      |     60000ms     |  93   |  31167 total, 6681 failed   | avg: 15876ms, p95: 60001ms, max: 60056ms, med: 2839ms  |
| stitching-federation-with-yoga-deno |     60001ms     |  39   |  13262 total, 3339 failed   | avg: 35207ms, p95: 60001ms, max: 60040ms, med: 36284ms |



<details>
  <summary>Summary for: `stitching-federation-with-yoga-uws`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  1% — ✓ 4035 / ✗ 237558
     ✗ no graphql errors
      ↳  0% — ✓ 2207 / ✗ 239386
     ✗ valid response structure
      ↳  54% — ✓ 2207 / ✗ 1828

     checks.........................: 1.73%  ✓ 8449       ✗ 478772
     data_received..................: 28 MB  90 kB/s
     data_sent......................: 6.3 MB 20 kB/s
     http_req_blocked...............: avg=12.21µs  min=0s       med=0s    max=190.34ms p(90)=0s     p(95)=0s    
     http_req_connecting............: avg=11.13µs  min=0s       med=0s    max=101.7ms  p(90)=0s     p(95)=0s    
     http_req_duration..............: avg=322.93ms min=0s       med=0s    max=1m0s     p(90)=0s     p(95)=0s    
       { expected_response:true }...: avg=12s      min=753.68ms med=8.41s max=54.49s   p(90)=25.02s p(95)=36.56s
     http_req_failed................: 98.32% ✓ 237558     ✗ 4035  
     http_req_receiving.............: avg=2.19µs   min=0s       med=0s    max=28.65ms  p(90)=0s     p(95)=0s    
     http_req_sending...............: avg=3.29µs   min=0s       med=0s    max=103.02ms p(90)=0s     p(95)=0s    
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s    max=0s       p(90)=0s     p(95)=0s    
     http_req_waiting...............: avg=322.92ms min=0s       med=0s    max=1m0s     p(90)=0s     p(95)=0s    
     http_reqs......................: 241593 779.293222/s
     iteration_duration.............: avg=1.48s    min=366.3µs  med=1.21s max=1m0s     p(90)=2.13s  p(95)=2.69s 
     iterations.....................: 241593 779.293222/s
     vus............................: 1      min=0        max=2999
     vus_max........................: 3000   min=955      max=3000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/862295d5-cc9e-43ef-27a3-a5798713c400/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1de05d33-2d3a-4f88-9243-5b319a673200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✗ valid response structure
      ↳  99% — ✓ 163662 / ✗ 1345

     checks.........................: 99.72% ✓ 493676    ✗ 1345  
     data_received..................: 818 MB 2.6 MB/s
     data_sent......................: 196 MB 622 kB/s
     http_req_blocked...............: avg=5.64ms  min=1.3µs   med=2.8µs  max=2.98s  p(90)=4.6µs    p(95)=8.5µs   
     http_req_connecting............: avg=5.57ms  min=0s      med=0s     max=2.98s  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=2.85s   min=56.86ms med=1.93s  max=30.64s p(90)=5.96s    p(95)=7.35s   
       { expected_response:true }...: avg=2.85s   min=56.86ms med=1.93s  max=30.64s p(90)=5.96s    p(95)=7.35s   
     http_req_failed................: 0.00%  ✓ 0         ✗ 165007
     http_req_receiving.............: avg=14.64ms min=16.7µs  med=41.4µs max=3.35s  p(90)=284.35µs p(95)=1.62ms  
     http_req_sending...............: avg=4.61ms  min=8.1µs   med=14.7µs max=2.48s  p(90)=74.6µs   p(95)=265.42µs
     http_req_tls_handshaking.......: avg=0s      min=0s      med=0s     max=0s     p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=2.83s   min=56.7ms  med=1.92s  max=30.64s p(90)=5.88s    p(95)=7.24s   
     http_reqs......................: 165007 524.03705/s
     iteration_duration.............: avg=2.92s   min=58.09ms med=1.98s  max=30.93s p(90)=6.08s    p(95)=7.4s    
     iterations.....................: 165007 524.03705/s
     vus............................: 160    min=0       max=3000
     vus_max........................: 3000   min=1506    max=3000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6c5f011a-e316-4a94-76bc-504380649000/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7f156478-6eb2-4d40-3b99-1d8e630fe400/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 34021 / ✗ 274
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 34295

     checks.........................: 66.40% ✓ 68316      ✗ 34569 
     data_received..................: 176 MB 553 kB/s
     data_sent......................: 41 MB  128 kB/s
     http_req_blocked...............: avg=43.24µs min=800ns    med=2µs    max=37.34ms p(90)=11.66µs p(95)=370.72µs
     http_req_connecting............: avg=35.48µs min=0s       med=0s     max=25.94ms p(90)=0s      p(95)=310.92µs
     http_req_duration..............: avg=14.54s  min=881.76ms med=13.67s max=38.33s  p(90)=27.29s  p(95)=28.49s  
       { expected_response:true }...: avg=14.54s  min=881.76ms med=13.67s max=38.33s  p(90)=27.29s  p(95)=28.49s  
     http_req_failed................: 0.00%  ✓ 0          ✗ 34295 
     http_req_receiving.............: avg=50.97µs min=15.9µs   med=40µs   max=18.78ms p(90)=65.1µs  p(95)=74.19µs 
     http_req_sending...............: avg=22.7µs  min=6µs      med=12.1µs max=20.4ms  p(90)=31.6µs  p(95)=56µs    
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s     max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=14.54s  min=881.65ms med=13.67s max=38.33s  p(90)=27.29s  p(95)=28.49s  
     http_reqs......................: 34295  107.683132/s
     iteration_duration.............: avg=14.54s  min=882.17ms med=13.67s max=38.33s  p(90)=27.29s  p(95)=28.49s  
     iterations.....................: 34295  107.683132/s
     vus............................: 241    min=0        max=3000
     vus_max........................: 3000   min=1667     max=3000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b4b1764d-5876-4052-c3cd-0b5208da4100/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c3b4d9b9-29b5-4601-1994-4ab425169400/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 70413     ✗ 0     
     data_received..................: 118 MB  373 kB/s
     data_sent......................: 28 MB   88 kB/s
     http_req_blocked...............: avg=67.01µs min=1µs   med=2.8µs  max=15.75ms p(90)=245.31µs p(95)=430.41µs
     http_req_connecting............: avg=54.1µs  min=0s    med=0s     max=15.66ms p(90)=157.3µs  p(95)=359.66µs
     http_req_duration..............: avg=20.77s  min=1s    med=20.42s max=42.48s  p(90)=37.17s   p(95)=38.98s  
       { expected_response:true }...: avg=20.77s  min=1s    med=20.42s max=42.48s  p(90)=37.17s   p(95)=38.98s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 23471 
     http_req_receiving.............: avg=67.11µs min=20µs  med=56.3µs max=33.21ms p(90)=83.8µs   p(95)=94µs    
     http_req_sending...............: avg=35.75µs min=7µs   med=14.9µs max=22.8ms  p(90)=56.7µs   p(95)=72.5µs  
     http_req_tls_handshaking.......: avg=0s      min=0s    med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=20.77s  min=1s    med=20.42s max=42.48s  p(90)=37.17s   p(95)=38.98s  
     http_reqs......................: 23471   74.146754/s
     iteration_duration.............: avg=20.77s  min=1.01s med=20.42s max=42.48s  p(90)=37.18s   p(95)=38.98s  
     iterations.....................: 23471   74.146754/s
     vus............................: 137     min=0       max=2999
     vus_max........................: 3000    min=1484    max=3000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6d6679b8-05c6-4d0b-8251-d692556ddb00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f04e42af-54e8-47d9-fb34-d6961d1ec300/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-bun`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  99% — ✓ 26837 / ✗ 214
     ✗ no graphql errors
      ↳  99% — ✓ 26830 / ✗ 221
     ✗ valid response structure
      ↳  99% — ✓ 26830 / ✗ 7

     checks.........................: 99.45% ✓ 80497    ✗ 442   
     data_received..................: 134 MB 400 kB/s
     data_sent......................: 33 MB  99 kB/s
     http_req_blocked...............: avg=481.28µs min=1.5µs    med=3.2µs  max=1.16s    p(90)=202.51µs p(95)=307.07µs
     http_req_connecting............: avg=446.44µs min=0s       med=0s     max=1.15s    p(90)=120.3µs  p(95)=202.06µs
     http_req_duration..............: avg=18.14s   min=461.62ms med=13.87s max=1m0s     p(90)=32.16s   p(95)=39.64s  
       { expected_response:true }...: avg=17.81s   min=461.62ms med=13.83s max=59.97s   p(90)=31.89s   p(95)=36.8s   
     http_req_failed................: 0.79%  ✓ 214      ✗ 26837 
     http_req_receiving.............: avg=266.38µs min=0s       med=65.5µs max=895.47ms p(90)=103.6µs  p(95)=141.66µs
     http_req_sending...............: avg=242.33µs min=8.6µs    med=17.7µs max=578.75ms p(90)=78.6µs   p(95)=114.75µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=18.14s   min=461.25ms med=13.87s max=1m0s     p(90)=32.16s   p(95)=39.64s  
     http_reqs......................: 27051  80.79047/s
     iteration_duration.............: avg=18.15s   min=473.01ms med=13.88s max=1m0s     p(90)=32.16s   p(95)=39.64s  
     iterations.....................: 27051  80.79047/s
     vus............................: 132    min=0      max=3000
     vus_max........................: 3000   min=1135   max=3000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/70c1a6e8-bff1-4f03-1984-da1d97129c00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3653d9f8-5881-4cb0-519b-b0a122dd4e00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  72% — ✓ 16711 / ✗ 6229
     ✗ no graphql errors
      ↳  72% — ✓ 16561 / ✗ 6379
     ✗ valid response structure
      ↳  94% — ✓ 16561 / ✗ 1011

     checks.........................: 78.53% ✓ 49833     ✗ 13619 
     data_received..................: 84 MB  255 kB/s
     data_sent......................: 27 MB  82 kB/s
     http_req_blocked...............: avg=96.94µs  min=1.4µs    med=3µs     max=77.06ms p(90)=207.51µs p(95)=529.11µs
     http_req_connecting............: avg=79.8µs   min=0s       med=0s      max=77ms    p(90)=127.81µs p(95)=434.62µs
     http_req_duration..............: avg=22.8s    min=416.36ms med=23.92s  max=1m0s    p(90)=38.67s   p(95)=48.79s  
       { expected_response:true }...: avg=18.21s   min=416.36ms med=15.51s  max=59.48s  p(90)=34.7s    p(95)=38.66s  
     http_req_failed................: 27.15% ✓ 6229      ✗ 16711 
     http_req_receiving.............: avg=104.85µs min=0s       med=60.7µs  max=87.26ms p(90)=113.6µs  p(95)=151.5µs 
     http_req_sending...............: avg=74.37µs  min=9.9µs    med=17.89µs max=75.91ms p(90)=71.9µs   p(95)=100.8µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=22.8s    min=416.25ms med=23.92s  max=1m0s    p(90)=38.67s   p(95)=48.79s  
     http_reqs......................: 22940  69.397406/s
     iteration_duration.............: avg=22.82s   min=417.38ms med=23.94s  max=1m0s    p(90)=38.67s   p(95)=48.79s  
     iterations.....................: 22940  69.397406/s
     vus............................: 112    min=0       max=3000
     vus_max........................: 3000   min=1179    max=3000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d52c2ae8-318f-46c1-50b9-5770dd362400/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/aa828a10-1e35-43db-3846-1075aa298500/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  92% — ✓ 17517 / ✗ 1446
     ✗ no graphql errors
      ↳  91% — ✓ 17320 / ✗ 1643
     ✗ valid response structure
      ↳  98% — ✓ 17320 / ✗ 197

     checks.........................: 94.07% ✓ 52157     ✗ 3286  
     data_received..................: 91 MB  277 kB/s
     data_sent......................: 23 MB  69 kB/s
     http_req_blocked...............: avg=431.04µs min=1.3µs  med=2.9µs  max=495.45ms p(90)=438.66µs p(95)=547.19µs
     http_req_connecting............: avg=402.26µs min=0s     med=0s     max=447.08ms p(90)=366µs    p(95)=465.89µs
     http_req_duration..............: avg=26.83s   min=1.59s  med=27.71s max=1m0s     p(90)=46.79s   p(95)=49.56s  
       { expected_response:true }...: avg=25.89s   min=1.59s  med=25.61s max=59.32s   p(90)=46.08s   p(95)=49.53s  
     http_req_failed................: 7.62%  ✓ 1446      ✗ 17517 
     http_req_receiving.............: avg=96.98µs  min=0s     med=59.9µs max=99.42ms  p(90)=102.5µs  p(95)=122.89µs
     http_req_sending...............: avg=213.05µs min=11.7µs med=17.3µs max=337.1ms  p(90)=65.8µs   p(95)=87µs    
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=26.83s   min=1.59s  med=27.71s max=1m0s     p(90)=46.79s   p(95)=49.56s  
     http_reqs......................: 18963  57.981935/s
     iteration_duration.............: avg=26.9s    min=1.64s  med=27.71s max=1m0s     p(90)=47.02s   p(95)=49.56s  
     iterations.....................: 18963  57.981935/s
     vus............................: 95     min=0       max=3000
     vus_max........................: 3000   min=958     max=3000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1180a136-0779-4761-8f59-a2addab79f00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3491f00d-8d61-49b0-b847-7efcb7466400/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga-uws`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  95% — ✓ 21982 / ✗ 1051
     ✗ no graphql errors
      ↳  52% — ✓ 12113 / ✗ 10920
     ✗ valid response structure
      ↳  55% — ✓ 12113 / ✗ 9869

     checks.........................: 67.90% ✓ 46208     ✗ 21840 
     data_received..................: 94 MB  282 kB/s
     data_sent......................: 28 MB  85 kB/s
     http_req_blocked...............: avg=63.29µs min=800ns   med=2.1µs   max=35.96ms p(90)=157.5µs  p(95)=381.86µs
     http_req_connecting............: avg=51.66µs min=0s      med=0s      max=35.9ms  p(90)=103.02µs p(95)=318.9µs 
     http_req_duration..............: avg=21.73s  min=41.01ms med=20.54s  max=1m0s    p(90)=44.94s   p(95)=51.97s  
       { expected_response:true }...: avg=20.47s  min=41.01ms med=18.66s  max=59.9s   p(90)=43.47s   p(95)=50.87s  
     http_req_failed................: 5.20%  ✓ 1207      ✗ 21982 
     http_req_receiving.............: avg=52.59µs min=0s      med=35.29µs max=15.45ms p(90)=68.09µs  p(95)=80.8µs  
     http_req_sending...............: avg=46.62µs min=6.2µs   med=12.5µs  max=26.33ms p(90)=54.3µs   p(95)=75.2µs  
     http_req_tls_handshaking.......: avg=0s      min=0s      med=0s      max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=21.73s  min=40.93ms med=20.54s  max=1m0s    p(90)=44.94s   p(95)=51.97s  
     http_reqs......................: 23189  69.635204/s
     iteration_duration.............: avg=21.61s  min=41.58ms med=20.44s  max=1m0s    p(90)=44.97s   p(95)=52.21s  
     iterations.....................: 23033  69.166746/s
     vus............................: 914    min=0       max=3000
     vus_max........................: 3000   min=1586    max=3000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/be7175be-a848-4399-f55b-30486cf71200/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/830f3f58-1ced-4fa2-c4d7-5fe79ab69500/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  69% — ✓ 15937 / ✗ 6890
     ✗ no graphql errors
      ↳  68% — ✓ 15716 / ✗ 7111
     ✗ valid response structure
      ↳  98% — ✓ 15716 / ✗ 221

     checks.........................: 76.90% ✓ 47369     ✗ 14222 
     data_received..................: 80 MB  239 kB/s
     data_sent......................: 28 MB  84 kB/s
     http_req_blocked...............: avg=751.82µs min=1.3µs    med=3.5µs  max=59.36ms p(90)=1.14ms  p(95)=4.26ms  
     http_req_connecting............: avg=713.29µs min=0s       med=0s     max=59.07ms p(90)=1.02ms  p(95)=4.01ms  
     http_req_duration..............: avg=21.32s   min=100.16ms med=4s     max=1m0s    p(90)=1m0s    p(95)=1m0s    
       { expected_response:true }...: avg=5.04s    min=100.16ms med=3.77s  max=59.95s  p(90)=4.5s    p(95)=5.54s   
     http_req_failed................: 30.18% ✓ 6890      ✗ 15937 
     http_req_receiving.............: avg=57.97µs  min=0s       med=54.9µs max=12.31ms p(90)=91.91µs p(95)=103.81µs
     http_req_sending...............: avg=78.84µs  min=8.7µs    med=21.5µs max=26.89ms p(90)=79µs    p(95)=107.57µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=21.32s   min=100.03ms med=4s     max=1m0s    p(90)=1m0s    p(95)=1m0s    
     http_reqs......................: 22827  68.188689/s
     iteration_duration.............: avg=21.32s   min=100.92ms med=4s     max=1m0s    p(90)=1m0s    p(95)=1m0s    
     iterations.....................: 22827  68.188689/s
     vus............................: 148    min=0       max=3000
     vus_max........................: 3000   min=1312    max=3000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/339a536f-b389-4a24-896c-caffb796f300/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3f677442-9bd9-428d-ccb9-11d9d67fda00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  65% — ✓ 13314 / ✗ 7042
     ✗ no graphql errors
      ↳  63% — ✓ 12903 / ✗ 7453
     ✗ valid response structure
      ↳  96% — ✓ 12903 / ✗ 411

     checks.........................: 72.40% ✓ 39120     ✗ 14906 
     data_received..................: 68 MB  203 kB/s
     data_sent......................: 25 MB  76 kB/s
     http_req_blocked...............: avg=838.93µs min=1.6µs    med=3.9µs   max=66.44ms p(90)=1.24ms  p(95)=3.11ms  
     http_req_connecting............: avg=784.38µs min=0s       med=0s      max=66.34ms p(90)=1.09ms  p(95)=2.82ms  
     http_req_duration..............: avg=23.57s   min=147.59ms med=4.39s   max=1m0s    p(90)=1m0s    p(95)=1m0s    
       { expected_response:true }...: avg=5.04s    min=147.59ms med=3.98s   max=59.46s  p(90)=4.99s   p(95)=5.76s   
     http_req_failed................: 34.59% ✓ 7042      ✗ 13314 
     http_req_receiving.............: avg=66.41µs  min=0s       med=59.95µs max=13.29ms p(90)=119.6µs p(95)=147.8µs 
     http_req_sending...............: avg=82.39µs  min=8.6µs    med=29.9µs  max=29.37ms p(90)=93.65µs p(95)=140.32µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=23.57s   min=147.46ms med=4.39s   max=1m0s    p(90)=1m0s    p(95)=1m0s    
     http_reqs......................: 20356  60.817821/s
     iteration_duration.............: avg=23.58s   min=148.34ms med=4.39s   max=1m0s    p(90)=1m0s    p(95)=1m0s    
     iterations.....................: 20356  60.817821/s
     vus............................: 8      min=0       max=3000
     vus_max........................: 3000   min=1304    max=3000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f7981f07-b2a9-42dd-5b09-f10b6451c000/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e469a214-0350-42f8-6ce9-0a3f6222bf00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  78% — ✓ 24486 / ✗ 6681
     ✗ no graphql errors
      ↳  78% — ✓ 24449 / ✗ 6718
     ✗ valid response structure
      ↳  99% — ✓ 24449 / ✗ 37

     checks.........................: 84.52% ✓ 73384     ✗ 13436 
     data_received..................: 124 MB 369 kB/s
     data_sent......................: 38 MB  112 kB/s
     http_req_blocked...............: avg=493.82µs min=1.1µs   med=2.6µs  max=32.08ms p(90)=438.92µs p(95)=1.35ms 
     http_req_connecting............: avg=461.57µs min=0s      med=0s     max=28.45ms p(90)=360µs    p(95)=1.21ms 
     http_req_duration..............: avg=15.87s   min=60.21ms med=2.83s  max=1m0s    p(90)=1m0s     p(95)=1m0s   
       { expected_response:true }...: avg=3.91s    min=60.21ms med=2.78s  max=59.62s  p(90)=3.07s    p(95)=4.6s   
     http_req_failed................: 21.43% ✓ 6681      ✗ 24486 
     http_req_receiving.............: avg=46.89µs  min=0s      med=40.4µs max=16.88ms p(90)=77µs     p(95)=86.2µs 
     http_req_sending...............: avg=46.23µs  min=7.3µs   med=15.6µs max=19.53ms p(90)=55.59µs  p(95)=71.67µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s      p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=15.87s   min=60.08ms med=2.83s  max=1m0s    p(90)=1m0s     p(95)=1m0s   
     http_reqs......................: 31167  93.193429/s
     iteration_duration.............: avg=15.87s   min=61.03ms med=2.83s  max=1m0s    p(90)=1m0s     p(95)=1m0s   
     iterations.....................: 31167  93.193429/s
     vus............................: 71     min=0       max=3000
     vus_max........................: 3000   min=1534    max=3000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a81b66cc-d256-4dcc-36b9-33076f8a6b00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a254f788-ee72-40d6-a7bf-16e45c47a000/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-deno`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  74% — ✓ 9923 / ✗ 3339
     ✗ no graphql errors
      ↳  72% — ✓ 9631 / ✗ 3631
     ✗ valid response structure
      ↳  97% — ✓ 9631 / ✗ 292

     checks.........................: 80.07% ✓ 29185     ✗ 7262  
     data_received..................: 53 MB  155 kB/s
     data_sent......................: 18 MB  52 kB/s
     http_req_blocked...............: avg=644.72µs min=1.5µs  med=4µs    max=139.21ms p(90)=582.7µs p(95)=723.38µs
     http_req_connecting............: avg=610.01µs min=0s     med=0s     max=138.94ms p(90)=488.4µs p(95)=616.99µs
     http_req_duration..............: avg=35.2s    min=1.87s  med=36.28s max=1m0s     p(90)=1m0s    p(95)=1m0s    
       { expected_response:true }...: avg=26.86s   min=1.87s  med=25.61s max=59.98s   p(90)=51.93s  p(95)=55.63s  
     http_req_failed................: 25.17% ✓ 3339      ✗ 9923  
     http_req_receiving.............: avg=158.96µs min=0s     med=51.7µs max=29.75ms  p(90)=148.3µs p(95)=193.4µs 
     http_req_sending...............: avg=139.78µs min=9.29µs med=25µs   max=48.24ms  p(90)=108.1µs p(95)=147.8µs 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=35.2s    min=1.87s  med=36.28s max=1m0s     p(90)=1m0s    p(95)=1m0s    
     http_reqs......................: 13262  39.005017/s
     iteration_duration.............: avg=35.2s    min=1.87s  med=36.28s max=1m0s     p(90)=1m0s    p(95)=1m0s    
     iterations.....................: 13262  39.005017/s
     vus............................: 3      min=0       max=3000
     vus_max........................: 3000   min=1156    max=3000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/317960e7-635d-4dc6-5fde-56ad20b67800/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d45fe888-c84d-4241-992a-3c1ac0944600/public" alt="HTTP Overview" />


  </details>