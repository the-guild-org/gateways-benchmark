## Overview for: `fed-v1-ramping-vus`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. We are running a heavy load of concurrent VUs to measure response time and other stats, during stress. It measure things like memory usage, CPU usage, response times. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was trying to reach 1500 concurrent VUs over 300s


### Comparison


| Gateway                             | duration(p95)⬇️ |  RPS  |         Requests         |                       Durations                        |
| :---------------------------------- | :-------------: | :---: | :----------------------: | :----------------------------------------------------: |
| wundergraph                         |     2145ms      |  710  |  220299 total, 0 failed  |   avg: 1065ms, p95: 2146ms, max: 3754ms, med: 1005ms   |
| apollo-router                       |     11209ms     |  126  |  39540 total, 0 failed   |  avg: 6186ms, p95: 11209ms, max: 12137ms, med: 6221ms  |
| mesh-supergraph                     |     15369ms     |  100  |  31241 total, 0 failed   |  avg: 7757ms, p95: 15370ms, max: 19873ms, med: 7279ms  |
| mercurius                           |     16461ms     |  88   |  27331 total, 0 failed   |  avg: 8845ms, p95: 16461ms, max: 17426ms, med: 8361ms  |
| mesh                                |     16893ms     |  93   |  29172 total, 0 failed   |  avg: 8313ms, p95: 16894ms, max: 22219ms, med: 7820ms  |
| stitching-federation-with-yoga-bun  |     22531ms     |  80   |  25380 total, 0 failed   |  avg: 9656ms, p95: 22531ms, max: 47876ms, med: 9535ms  |
| stitching-federation-with-yoga-deno |     24339ms     |  66   |  20921 total, 0 failed   | avg: 11864ms, p95: 24340ms, max: 45203ms, med: 11167ms |
| apollo-gateway-with-yoga-uws        |     31812ms     |  66   |  20890 total, 0 failed   | avg: 11974ms, p95: 31813ms, max: 58233ms, med: 7520ms  |
| stitching-federation-with-yoga-uws  |     43904ms     |  61   | 19490 total, 976 failed  | avg: 13015ms, p95: 43904ms, max: 60002ms, med: 5994ms  |
| apollo-gateway-with-yoga            |     60000ms     |  52   | 17703 total, 2898 failed | avg: 14122ms, p95: 60000ms, max: 60033ms, med: 4329ms  |
| apollo-server                       |     60000ms     |  55   | 18433 total, 2891 failed | avg: 13706ms, p95: 60000ms, max: 60048ms, med: 4100ms  |
| stitching-federation-with-yoga      |     60000ms     |  82   | 27523 total, 2681 failed |  avg: 9195ms, p95: 60000ms, max: 60036ms, med: 3107ms  |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 660897     ✗ 0     
     data_received..................: 1.1 GB  3.5 MB/s
     data_sent......................: 262 MB  844 kB/s
     http_req_blocked...............: avg=804.16µs min=1.1µs  med=2.4µs  max=1.02s    p(90)=3.9µs   p(95)=4.89µs 
     http_req_connecting............: avg=789.83µs min=0s     med=0s     max=1.02s    p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=1.06s    min=7.26ms med=1s     max=3.75s    p(90)=1.9s    p(95)=2.14s  
       { expected_response:true }...: avg=1.06s    min=7.26ms med=1s     max=3.75s    p(90)=1.9s    p(95)=2.14s  
     http_req_failed................: 0.00%   ✓ 0          ✗ 220299
     http_req_receiving.............: avg=5.59ms   min=15.4µs med=36.6µs max=991.89ms p(90)=216.2µs p(95)=1.06ms 
     http_req_sending...............: avg=1.53ms   min=6.7µs  med=12.4µs max=1.03s    p(90)=26.8µs  p(95)=113.3µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=1.05s    min=7.14ms med=1s     max=3.75s    p(90)=1.88s   p(95)=2.11s  
     http_reqs......................: 220299  710.621419/s
     iteration_duration.............: avg=1.07s    min=7.87ms med=1.01s  max=3.75s    p(90)=1.93s   p(95)=2.19s  
     iterations.....................: 220299  710.621419/s
     vus............................: 10      min=10       max=1499
     vus_max........................: 1500    min=1500     max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/dded5592-f812-4b9e-fbfc-4cf388778f00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/618734cf-fea7-4ef1-ebd6-c011e3360f00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 39523 / ✗ 17
     ✗ valid response structure
      ↳  99% — ✓ 39523 / ✗ 17

     checks.........................: 99.97% ✓ 118586     ✗ 34    
     data_received..................: 197 MB 628 kB/s
     data_sent......................: 47 MB  150 kB/s
     http_req_blocked...............: avg=61.42µs min=1µs      med=2.4µs  max=52.16ms p(90)=3.5µs   p(95)=16.5µs
     http_req_connecting............: avg=55.14µs min=0s       med=0s     max=51.84ms p(90)=0s      p(95)=0s    
     http_req_duration..............: avg=6.18s   min=204.64ms med=6.22s  max=12.13s  p(90)=10.67s  p(95)=11.2s 
       { expected_response:true }...: avg=6.18s   min=204.64ms med=6.22s  max=12.13s  p(90)=10.67s  p(95)=11.2s 
     http_req_failed................: 0.00%  ✓ 0          ✗ 39540 
     http_req_receiving.............: avg=56.45µs min=17.3µs   med=47.4µs max=12.09ms p(90)=74.59µs p(95)=81.5µs
     http_req_sending...............: avg=32.4µs  min=6µs      med=14.4µs max=23.18ms p(90)=29.5µs  p(95)=46.6µs
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s     max=0s      p(90)=0s      p(95)=0s    
     http_req_waiting...............: avg=6.18s   min=204.57ms med=6.22s  max=12.13s  p(90)=10.67s  p(95)=11.2s 
     http_reqs......................: 39540  126.078021/s
     iteration_duration.............: avg=6.18s   min=205.23ms med=6.22s  max=12.13s  p(90)=10.67s  p(95)=11.2s 
     iterations.....................: 39540  126.078021/s
     vus............................: 91     min=50       max=1500
     vus_max........................: 1500   min=1500     max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/41ce0330-7114-4ef7-f153-d191dcb70100/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d7ef1756-bc50-4a03-19b5-e7463a773300/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 31144 / ✗ 97
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 31241

     checks.........................: 66.56% ✓ 62385     ✗ 31338 
     data_received..................: 159 MB 511 kB/s
     data_sent......................: 37 MB  120 kB/s
     http_req_blocked...............: avg=56.58µs min=1.1µs   med=2.29µs max=28.97ms p(90)=3.8µs  p(95)=19.9µs
     http_req_connecting............: avg=49.87µs min=0s      med=0s     max=28.6ms  p(90)=0s     p(95)=0s    
     http_req_duration..............: avg=7.75s   min=18.3ms  med=7.27s  max=19.87s  p(90)=14.29s p(95)=15.36s
       { expected_response:true }...: avg=7.75s   min=18.3ms  med=7.27s  max=19.87s  p(90)=14.29s p(95)=15.36s
     http_req_failed................: 0.00%  ✓ 0         ✗ 31241 
     http_req_receiving.............: avg=60.29µs min=20µs    med=55.2µs max=23.88ms p(90)=78.1µs p(95)=87.6µs
     http_req_sending...............: avg=33.83µs min=7.6µs   med=13µs   max=19.55ms p(90)=27.2µs p(95)=50.2µs
     http_req_tls_handshaking.......: avg=0s      min=0s      med=0s     max=0s      p(90)=0s     p(95)=0s    
     http_req_waiting...............: avg=7.75s   min=18.22ms med=7.27s  max=19.87s  p(90)=14.29s p(95)=15.36s
     http_reqs......................: 31241  100.76995/s
     iteration_duration.............: avg=7.75s   min=18.64ms med=7.27s  max=19.87s  p(90)=14.29s p(95)=15.36s
     iterations.....................: 31241  100.76995/s
     vus............................: 1      min=1       max=1500
     vus_max........................: 1500   min=1500    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d5dfcc54-a121-44e8-bd6c-99e916792f00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/750e5cc6-ab1f-4660-92af-947d72d8d600/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 81993     ✗ 0     
     data_received..................: 138 MB  444 kB/s
     data_sent......................: 32 MB   105 kB/s
     http_req_blocked...............: avg=79.57µs min=900ns   med=2.6µs  max=52.9ms  p(90)=4.2µs   p(95)=173.64µs
     http_req_connecting............: avg=72.36µs min=0s      med=0s     max=52.84ms p(90)=0s      p(95)=113.64µs
     http_req_duration..............: avg=8.84s   min=9.1ms   med=8.36s  max=17.42s  p(90)=15.56s  p(95)=16.46s  
       { expected_response:true }...: avg=8.84s   min=9.1ms   med=8.36s  max=17.42s  p(90)=15.56s  p(95)=16.46s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 27331 
     http_req_receiving.............: avg=61.92µs min=18.39µs med=54.8µs max=19.76ms p(90)=79.39µs p(95)=85.4µs  
     http_req_sending...............: avg=36.08µs min=6.6µs   med=14.8µs max=14.28ms p(90)=31.7µs  p(95)=59.09µs 
     http_req_tls_handshaking.......: avg=0s      min=0s      med=0s     max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=8.84s   min=9.04ms  med=8.36s  max=17.42s  p(90)=15.56s  p(95)=16.46s  
     http_reqs......................: 27331   88.162853/s
     iteration_duration.............: avg=8.84s   min=9.65ms  med=8.36s  max=17.42s  p(90)=15.56s  p(95)=16.46s  
     iterations.....................: 27331   88.162853/s
     vus............................: 9       min=9       max=1500
     vus_max........................: 1500    min=1500    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9a434d35-cdba-4645-1d4a-e145502e5800/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/99308111-882f-4c67-2a15-5155a05c7200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 29055 / ✗ 117
     ✗ valid response structure
      ↳  99% — ✓ 29055 / ✗ 117

     checks.........................: 99.73% ✓ 87282     ✗ 234   
     data_received..................: 147 MB 470 kB/s
     data_sent......................: 35 MB  111 kB/s
     http_req_blocked...............: avg=41.08µs min=1.1µs   med=2.2µs  max=118.48ms p(90)=3.6µs   p(95)=153.69µs
     http_req_connecting............: avg=34.56µs min=0s      med=0s     max=118.41ms p(90)=0s      p(95)=100.84µs
     http_req_duration..............: avg=8.31s   min=14.48ms med=7.82s  max=22.21s   p(90)=15.24s  p(95)=16.89s  
       { expected_response:true }...: avg=8.31s   min=14.48ms med=7.82s  max=22.21s   p(90)=15.24s  p(95)=16.89s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 29172 
     http_req_receiving.............: avg=68.88µs min=15.1µs  med=42.8µs max=109.46ms p(90)=71.09µs p(95)=79.94µs 
     http_req_sending...............: avg=61.23µs min=6.7µs   med=12.9µs max=129.51ms p(90)=28.2µs  p(95)=49.54µs 
     http_req_tls_handshaking.......: avg=0s      min=0s      med=0s     max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=8.31s   min=14.41ms med=7.82s  max=22.21s   p(90)=15.24s  p(95)=16.89s  
     http_reqs......................: 29172  93.614893/s
     iteration_duration.............: avg=8.31s   min=15.12ms med=7.82s  max=22.21s   p(90)=15.24s  p(95)=16.89s  
     iterations.....................: 29172  93.614893/s
     vus............................: 269    min=50      max=1500
     vus_max........................: 1500   min=1500    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/809c2b57-4a45-4f34-a1d0-72a357436400/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3c1c6b4a-38c7-4ac7-1464-b3c0c544df00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 25371 / ✗ 9
     ✗ valid response structure
      ↳  99% — ✓ 25371 / ✗ 9

     checks.........................: 99.97% ✓ 76122     ✗ 18    
     data_received..................: 127 MB 403 kB/s
     data_sent......................: 30 MB  96 kB/s
     http_req_blocked...............: avg=130.79µs min=1.5µs    med=2.8µs  max=530.23ms p(90)=18.39µs  p(95)=198.79µs
     http_req_connecting............: avg=111.08µs min=0s       med=0s     max=429.71ms p(90)=0s       p(95)=123.5µs 
     http_req_duration..............: avg=9.65s    min=419.6ms  med=9.53s  max=47.87s   p(90)=13.66s   p(95)=22.53s  
       { expected_response:true }...: avg=9.65s    min=419.6ms  med=9.53s  max=47.87s   p(90)=13.66s   p(95)=22.53s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 25380 
     http_req_receiving.............: avg=528.05µs min=24.1µs   med=64.4µs max=293.86ms p(90)=108.09µs p(95)=183.4µs 
     http_req_sending...............: avg=279.91µs min=10.2µs   med=17.2µs max=292.04ms p(90)=66.99µs  p(95)=117.79µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=9.65s    min=419.38ms med=9.53s  max=47.87s   p(90)=13.66s   p(95)=22.53s  
     http_reqs......................: 25380  80.768204/s
     iteration_duration.............: avg=9.65s    min=421.02ms med=9.53s  max=47.87s   p(90)=13.66s   p(95)=22.53s  
     iterations.....................: 25380  80.768204/s
     vus............................: 99     min=0       max=1500
     vus_max........................: 1500   min=1196    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8a7604ab-736a-4d4b-abe4-633a20500e00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/67ae5363-61d8-4024-01ba-c8e524dd0100/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-deno`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  97% — ✓ 20369 / ✗ 552
     ✗ valid response structure
      ↳  97% — ✓ 20369 / ✗ 552

     checks.........................: 98.24% ✓ 61659     ✗ 1104  
     data_received..................: 112 MB 354 kB/s
     data_sent......................: 25 MB  79 kB/s
     http_req_blocked...............: avg=61.35µs  min=1.1µs    med=2.7µs  max=40.07ms p(90)=9.7µs  p(95)=249µs  
     http_req_connecting............: avg=50.13µs  min=0s       med=0s     max=39.91ms p(90)=0s     p(95)=154.1µs
     http_req_duration..............: avg=11.86s   min=920.75ms med=11.16s max=45.2s   p(90)=22.3s  p(95)=24.33s 
       { expected_response:true }...: avg=11.86s   min=920.75ms med=11.16s max=45.2s   p(90)=22.3s  p(95)=24.33s 
     http_req_failed................: 0.00%  ✓ 0         ✗ 20921 
     http_req_receiving.............: avg=139.93µs min=17µs     med=40.2µs max=75.67ms p(90)=92.9µs p(95)=137.4µs
     http_req_sending...............: avg=88.94µs  min=7.1µs    med=14.8µs max=44.88ms p(90)=64µs   p(95)=102.4µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=11.86s   min=920.66ms med=11.16s max=45.2s   p(90)=22.3s  p(95)=24.33s 
     http_reqs......................: 20921  66.403481/s
     iteration_duration.............: avg=11.86s   min=921.48ms med=11.16s max=45.2s   p(90)=22.3s  p(95)=24.34s 
     iterations.....................: 20921  66.403481/s
     vus............................: 36     min=0       max=1499
     vus_max........................: 1500   min=1399    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/418901d4-12c1-464d-b055-06df80843100/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/af85c3fb-941d-427e-5209-96e713b56400/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga-uws`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  63% — ✓ 13232 / ✗ 7658
     ✗ valid response structure
      ↳  63% — ✓ 13232 / ✗ 7658

     checks.........................: 75.56% ✓ 47354     ✗ 15316 
     data_received..................: 90 MB  286 kB/s
     data_sent......................: 25 MB  78 kB/s
     http_req_blocked...............: avg=63.9µs  min=1.2µs    med=2.6µs  max=116.94ms p(90)=10.81µs p(95)=367.15µs
     http_req_connecting............: avg=53.08µs min=0s       med=0s     max=116.7ms  p(90)=0s      p(95)=286.41µs
     http_req_duration..............: avg=11.97s  min=298.26ms med=7.52s  max=58.23s   p(90)=29.25s  p(95)=31.81s  
       { expected_response:true }...: avg=11.97s  min=298.26ms med=7.52s  max=58.23s   p(90)=29.25s  p(95)=31.81s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 20890 
     http_req_receiving.............: avg=66.53µs min=16.8µs   med=48.1µs max=50.09ms  p(90)=81.7µs  p(95)=92.9µs  
     http_req_sending...............: avg=54.22µs min=6.9µs    med=14.1µs max=49.95ms  p(90)=48.1µs  p(95)=77.3µs  
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s     max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=11.97s  min=298.19ms med=7.52s  max=58.23s   p(90)=29.25s  p(95)=31.81s  
     http_reqs......................: 20890  66.039831/s
     iteration_duration.............: avg=11.97s  min=298.88ms med=7.52s  max=58.23s   p(90)=29.25s  p(95)=31.81s  
     iterations.....................: 20890  66.039831/s
     vus............................: 243    min=0       max=1500
     vus_max........................: 1500   min=1287    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/847aae68-3391-4c84-12b3-0cc66aec2100/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7d88f831-85d7-48c1-f9cb-86bdda892200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-uws`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  94% — ✓ 18514 / ✗ 976
     ✗ no graphql errors
      ↳  66% — ✓ 12883 / ✗ 6607
     ✗ valid response structure
      ↳  69% — ✓ 12883 / ✗ 5631

     checks.........................: 77.01% ✓ 44280     ✗ 13214 
     data_received..................: 137 MB 429 kB/s
     data_sent......................: 23 MB  73 kB/s
     http_req_blocked...............: avg=42.81µs min=1.2µs   med=2.4µs  max=31.19ms p(90)=13.4µs p(95)=353.5µs 
     http_req_connecting............: avg=33.99µs min=0s      med=0s     max=30.92ms p(90)=0s     p(95)=283.88µs
     http_req_duration..............: avg=13.01s  min=29.92ms med=5.99s  max=1m0s    p(90)=37.35s p(95)=43.9s   
       { expected_response:true }...: avg=12.12s  min=29.92ms med=5.72s  max=59.93s  p(90)=36.74s p(95)=43.5s   
     http_req_failed................: 5.00%  ✓ 976       ✗ 18514 
     http_req_receiving.............: avg=63.85µs min=0s      med=44.7µs max=41.93ms p(90)=90.6µs p(95)=113.3µs 
     http_req_sending...............: avg=47.34µs min=6.8µs   med=14.4µs max=48.23ms p(90)=40.8µs p(95)=67.15µs 
     http_req_tls_handshaking.......: avg=0s      min=0s      med=0s     max=0s      p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=13.01s  min=29.82ms med=5.99s  max=1m0s    p(90)=37.35s p(95)=43.9s   
     http_reqs......................: 19490  61.157933/s
     iteration_duration.............: avg=13.03s  min=30.76ms med=5.99s  max=1m0s    p(90)=37.39s p(95)=43.91s  
     iterations.....................: 19490  61.157933/s
     vus............................: 670    min=50      max=1500
     vus_max........................: 1500   min=1500    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/59729df4-e42c-4e67-0d59-19a0e0b26700/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/95f51c52-84d8-41d7-80d2-5c94762e2f00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  83% — ✓ 14805 / ✗ 2898
     ✗ no graphql errors
      ↳  82% — ✓ 14526 / ✗ 3177
     ✗ valid response structure
      ↳  98% — ✓ 14526 / ✗ 279

     checks.........................: 87.34% ✓ 43857     ✗ 6354  
     data_received..................: 74 MB  221 kB/s
     data_sent......................: 21 MB  64 kB/s
     http_req_blocked...............: avg=274.38µs min=1.5µs    med=3µs    max=23.38ms p(90)=472.58µs p(95)=1.03ms  
     http_req_connecting............: avg=249.05µs min=0s       med=0s     max=23.32ms p(90)=381.68µs p(95)=881.48µs
     http_req_duration..............: avg=14.12s   min=173.5ms  med=4.32s  max=1m0s    p(90)=59.99s   p(95)=1m0s    
       { expected_response:true }...: avg=5.15s    min=173.5ms  med=4.23s  max=59.55s  p(90)=4.96s    p(95)=5.94s   
     http_req_failed................: 16.37% ✓ 2898      ✗ 14805 
     http_req_receiving.............: avg=68.65µs  min=0s       med=63.8µs max=15.27ms p(90)=107.9µs  p(95)=129.3µs 
     http_req_sending...............: avg=56.27µs  min=9.1µs    med=19.5µs max=23.31ms p(90)=70.09µs  p(95)=102.28µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=14.12s   min=173.44ms med=4.32s  max=1m0s    p(90)=59.99s   p(95)=1m0s    
     http_reqs......................: 17703  52.934439/s
     iteration_duration.............: avg=14.12s   min=174.31ms med=4.32s  max=1m0s    p(90)=1m0s     p(95)=1m0s    
     iterations.....................: 17703  52.934439/s
     vus............................: 43     min=0       max=1500
     vus_max........................: 1500   min=1139    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/09ea9ed6-7a08-4cce-892a-b1fd2b437700/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7a59407d-093a-4ea1-4903-7564a050f100/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  84% — ✓ 15542 / ✗ 2891
     ✗ no graphql errors
      ↳  83% — ✓ 15369 / ✗ 3064
     ✗ valid response structure
      ↳  98% — ✓ 15369 / ✗ 173

     checks.........................: 88.30% ✓ 46280    ✗ 6128  
     data_received..................: 80 MB  239 kB/s
     data_sent......................: 22 MB  66 kB/s
     http_req_blocked...............: avg=243.32µs min=1.5µs    med=3.4µs  max=34.71ms p(90)=421.1µs  p(95)=882.97µs
     http_req_connecting............: avg=214.66µs min=0s       med=0s     max=24.55ms p(90)=338.48µs p(95)=702.11µs
     http_req_duration..............: avg=13.7s    min=109.05ms med=4.1s   max=1m0s    p(90)=59.99s   p(95)=1m0s    
       { expected_response:true }...: avg=5.09s    min=109.05ms med=4.01s  max=59.7s   p(90)=4.72s    p(95)=5.95s   
     http_req_failed................: 15.68% ✓ 2891     ✗ 15542 
     http_req_receiving.............: avg=72.95µs  min=0s       med=71.8µs max=15.2ms  p(90)=102.7µs  p(95)=115.64µs
     http_req_sending...............: avg=64.29µs  min=8.69µs   med=20.8µs max=33.83ms p(90)=65.3µs   p(95)=86.5µs  
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=13.7s    min=108.95ms med=4.1s   max=1m0s    p(90)=59.99s   p(95)=1m0s    
     http_reqs......................: 18433  55.11732/s
     iteration_duration.............: avg=13.7s    min=109.81ms med=4.1s   max=1m0s    p(90)=1m0s     p(95)=1m0s    
     iterations.....................: 18433  55.11732/s
     vus............................: 24     min=0      max=1500
     vus_max........................: 1500   min=1392   max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d0ec3a55-b474-442d-2b34-3aaf42463200/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3711591d-6b3a-4eff-3175-5dfdb2d55b00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  90% — ✓ 24842 / ✗ 2681
     ✗ no graphql errors
      ↳  89% — ✓ 24718 / ✗ 2805
     ✗ valid response structure
      ↳  99% — ✓ 24718 / ✗ 124

     checks.........................: 92.97% ✓ 74278     ✗ 5610  
     data_received..................: 126 MB 378 kB/s
     data_sent......................: 33 MB  98 kB/s
     http_req_blocked...............: avg=159.15µs min=1.2µs   med=2.5µs  max=27.85ms p(90)=237µs   p(95)=415.2µs 
     http_req_connecting............: avg=143.57µs min=0s      med=0s     max=27.63ms p(90)=189.8µs p(95)=340.18µs
     http_req_duration..............: avg=9.19s    min=58.7ms  med=3.1s   max=1m0s    p(90)=43.19s  p(95)=1m0s    
       { expected_response:true }...: avg=3.71s    min=58.7ms  med=3.07s  max=59.72s  p(90)=3.38s   p(95)=4.31s   
     http_req_failed................: 9.74%  ✓ 2681      ✗ 24842 
     http_req_receiving.............: avg=54.92µs  min=0s      med=44.2µs max=64.48ms p(90)=79.7µs  p(95)=86.8µs  
     http_req_sending...............: avg=42.97µs  min=6.7µs   med=14.7µs max=41.03ms p(90)=40.9µs  p(95)=59.89µs 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=9.19s    min=58.6ms  med=3.1s   max=1m0s    p(90)=43.19s  p(95)=1m0s    
     http_reqs......................: 27523  82.540623/s
     iteration_duration.............: avg=9.19s    min=59.34ms med=3.1s   max=1m0s    p(90)=43.2s   p(95)=1m0s    
     iterations.....................: 27523  82.540623/s
     vus............................: 19     min=19      max=1500
     vus_max........................: 1500   min=1500    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/06ee3b9c-4d4a-44ae-1c43-bed0f5a11600/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/28ff34d6-b3e7-4cca-f791-22ceb60cfb00/public" alt="HTTP Overview" />


  </details>