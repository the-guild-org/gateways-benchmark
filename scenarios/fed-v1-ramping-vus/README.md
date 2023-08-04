## Overview for: `fed-v1-ramping-vus`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. We are running a heavy load of concurrent VUs to measure response time and other stats, during stress. It measure things like memory usage, CPU usage, response times. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was trying to reach 1500 concurrent VUs over 300s


### Comparison


| Gateway                             | duration(p95)⬇️ |  RPS  |         Requests         |                       Durations                        |
| :---------------------------------- | :-------------: | :---: | :----------------------: | :----------------------------------------------------: |
| wundergraph                         |     2354ms      |  659  |  204562 total, 0 failed  |   avg: 1144ms, p95: 2354ms, max: 4164ms, med: 1078ms   |
| stitching-federation-with-yoga-bun  |     12972ms     |  140  |  43458 total, 0 failed   |  avg: 5559ms, p95: 12972ms, max: 35715ms, med: 5619ms  |
| mesh                                |     16206ms     |  94   |  29628 total, 0 failed   |  avg: 8310ms, p95: 16206ms, max: 29861ms, med: 7996ms  |
| apollo-router                       |     16478ms     |  86   |  27731 total, 0 failed   |  avg: 8963ms, p95: 16478ms, max: 17726ms, med: 8902ms  |
| mesh-supergraph                     |     20013ms     |  76   |  23868 total, 0 failed   | avg: 10341ms, p95: 20014ms, max: 28180ms, med: 10259ms |
| mercurius                           |     21166ms     |  66   |  20531 total, 0 failed   | avg: 11838ms, p95: 21166ms, max: 21952ms, med: 11787ms |
| stitching-federation-with-yoga-deno |     28817ms     |  57   |  18146 total, 0 failed   | avg: 13667ms, p95: 28817ms, max: 53647ms, med: 11725ms |
| apollo-gateway-with-yoga-uws        |     34371ms     |  56   |  18267 total, 0 failed   | avg: 13870ms, p95: 34372ms, max: 51719ms, med: 9195ms  |
| apollo-server-node16                |     59999ms     |  34   | 11781 total, 704 failed  | avg: 20350ms, p95: 60000ms, max: 60016ms, med: 11846ms |
| apollo-gateway-with-yoga            |     60000ms     |  56   | 18793 total, 2839 failed | avg: 13368ms, p95: 60000ms, max: 60029ms, med: 4166ms  |
| apollo-server                       |     60000ms     |  46   | 15399 total, 3042 failed | avg: 16108ms, p95: 60001ms, max: 60046ms, med: 4370ms  |
| stitching-federation-with-yoga      |     60000ms     |  86   | 29003 total, 2629 failed |  avg: 8713ms, p95: 60000ms, max: 60037ms, med: 3000ms  |
| stitching-federation-with-yoga-uws  |     60000ms     |  44   | 14966 total, 1082 failed | avg: 15995ms, p95: 60000ms, max: 60034ms, med: 7493ms  |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 613686     ✗ 0     
     data_received..................: 1.0 GB  3.3 MB/s
     data_sent......................: 243 MB  783 kB/s
     http_req_blocked...............: avg=953.1µs  min=1µs    med=2.5µs  max=1.26s p(90)=4.3µs  p(95)=5.6µs  
     http_req_connecting............: avg=931.53µs min=0s     med=0s     max=1.26s p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=1.14s    min=7.18ms med=1.07s  max=4.16s p(90)=2.08s  p(95)=2.35s  
       { expected_response:true }...: avg=1.14s    min=7.18ms med=1.07s  max=4.16s p(90)=2.08s  p(95)=2.35s  
     http_req_failed................: 0.00%   ✓ 0          ✗ 204562
     http_req_receiving.............: avg=7.49ms   min=15.1µs med=39.1µs max=1.11s p(90)=224µs  p(95)=1.09ms 
     http_req_sending...............: avg=2ms      min=6.8µs  med=13µs   max=1.08s p(90)=31.8µs p(95)=133.1µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s    p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=1.13s    min=7.12ms med=1.07s  max=4.16s p(90)=2.05s  p(95)=2.3s   
     http_reqs......................: 204562  659.868879/s
     iteration_duration.............: avg=1.16s    min=7.84ms med=1.08s  max=4.19s p(90)=2.12s  p(95)=2.4s   
     iterations.....................: 204562  659.868879/s
     vus............................: 10      min=10       max=1500
     vus_max........................: 1500    min=1500     max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/58a44695-e8c8-46b8-267b-674f4f699500/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5445de13-1f35-4baa-9d86-02b90a42b600/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 130374     ✗ 0     
     data_received..................: 217 MB  698 kB/s
     data_sent......................: 52 MB   166 kB/s
     http_req_blocked...............: avg=128.22µs min=800ns  med=1.8µs  max=374.96ms p(90)=2.9µs  p(95)=11.4µs  
     http_req_connecting............: avg=119.44µs min=0s     med=0s     max=313.41ms p(90)=0s     p(95)=0s      
     http_req_duration..............: avg=5.55s    min=6.16ms med=5.61s  max=35.71s   p(90)=8.16s  p(95)=12.97s  
       { expected_response:true }...: avg=5.55s    min=6.16ms med=5.61s  max=35.71s   p(90)=8.16s  p(95)=12.97s  
     http_req_failed................: 0.00%   ✓ 0          ✗ 43458 
     http_req_receiving.............: avg=770.2µs  min=13µs   med=27.5µs max=377.27ms p(90)=54.6µs p(95)=159.71µs
     http_req_sending...............: avg=295.49µs min=5.9µs  med=10.3µs max=553.66ms p(90)=28.4µs p(95)=85.5µs  
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=5.55s    min=6.1ms  med=5.61s  max=35.71s   p(90)=8.14s  p(95)=12.97s  
     http_reqs......................: 43458   140.183214/s
     iteration_duration.............: avg=5.56s    min=6.76ms med=5.61s  max=35.71s   p(90)=8.2s   p(95)=12.97s  
     iterations.....................: 43458   140.183214/s
     vus............................: 61      min=50       max=1500
     vus_max........................: 1500    min=1500     max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d8bf1b70-7926-4b38-65e9-fa9591962e00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b57b0d55-9dec-4925-8d77-1ffae5af6a00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 29421 / ✗ 207
     ✗ valid response structure
      ↳  99% — ✓ 29421 / ✗ 207

     checks.........................: 99.53% ✓ 88470     ✗ 414   
     data_received..................: 149 MB 477 kB/s
     data_sent......................: 35 MB  112 kB/s
     http_req_blocked...............: avg=42.33µs min=1.2µs    med=2.29µs max=112.88ms p(90)=4.1µs  p(95)=155.9µs
     http_req_connecting............: avg=35.62µs min=0s       med=0s     max=112.74ms p(90)=0s     p(95)=99.7µs 
     http_req_duration..............: avg=8.31s   min=695.46ms med=7.99s  max=29.86s   p(90)=14.65s p(95)=16.2s  
       { expected_response:true }...: avg=8.31s   min=695.46ms med=7.99s  max=29.86s   p(90)=14.65s p(95)=16.2s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 29628 
     http_req_receiving.............: avg=73.12µs min=20.4µs   med=47.2µs max=71.4ms   p(90)=74.7µs p(95)=85.9µs 
     http_req_sending...............: avg=57.57µs min=7.7µs    med=13µs   max=81.43ms  p(90)=28.5µs p(95)=59.1µs 
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s     max=0s       p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=8.31s   min=695.39ms med=7.99s  max=29.86s   p(90)=14.65s p(95)=16.2s  
     http_reqs......................: 29628  94.674905/s
     iteration_duration.............: avg=8.31s   min=696.22ms med=7.99s  max=29.87s   p(90)=14.65s p(95)=16.2s  
     iterations.....................: 29628  94.674905/s
     vus............................: 116    min=50      max=1500
     vus_max........................: 1500   min=1500    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/35d33d1c-3934-449a-0460-90d1feae1600/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/61b689a0-0cd5-4859-194e-c19dd497c600/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 27704 / ✗ 27
     ✗ valid response structure
      ↳  99% — ✓ 27704 / ✗ 27

     checks.........................: 99.93% ✓ 83139     ✗ 54    
     data_received..................: 138 MB 433 kB/s
     data_sent......................: 33 MB  103 kB/s
     http_req_blocked...............: avg=67.11µs min=1.3µs    med=2.9µs   max=32ms    p(90)=8.69µs   p(95)=226.99µs
     http_req_connecting............: avg=56.25µs min=0s       med=0s      max=31.75ms p(90)=0s       p(95)=145.84µs
     http_req_duration..............: avg=8.96s   min=240.74ms med=8.9s    max=17.72s  p(90)=16.14s   p(95)=16.47s  
       { expected_response:true }...: avg=8.96s   min=240.74ms med=8.9s    max=17.72s  p(90)=16.14s   p(95)=16.47s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 27731 
     http_req_receiving.............: avg=83.68µs min=24.2µs   med=68.89µs max=18.85ms p(90)=112.89µs p(95)=136.09µs
     http_req_sending...............: avg=46.85µs min=8.4µs    med=17.7µs  max=30.03ms p(90)=48.8µs   p(95)=72.09µs 
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s      max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=8.96s   min=240.62ms med=8.9s    max=17.72s  p(90)=16.14s   p(95)=16.47s  
     http_reqs......................: 27731  86.966912/s
     iteration_duration.............: avg=8.96s   min=241.8ms  med=8.9s    max=17.72s  p(90)=16.14s   p(95)=16.47s  
     iterations.....................: 27731  86.966912/s
     vus............................: 46     min=0       max=1500
     vus_max........................: 1500   min=1262    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1c4d0eb3-60e1-43a4-8524-2c9104770000/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/33fddba4-9aed-42da-f68e-4645448cd300/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  98% — ✓ 23605 / ✗ 263
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 23868

     checks.........................: 66.29% ✓ 47473     ✗ 24131 
     data_received..................: 122 MB 390 kB/s
     data_sent......................: 28 MB  90 kB/s
     http_req_blocked...............: avg=49.77µs min=1.6µs    med=2.6µs  max=42.71ms p(90)=5.93µs p(95)=264.33µs
     http_req_connecting............: avg=40.43µs min=0s       med=0s     max=42.32ms p(90)=0s     p(95)=175µs   
     http_req_duration..............: avg=10.34s  min=845.6ms  med=10.25s max=28.17s  p(90)=18.33s p(95)=20.01s  
       { expected_response:true }...: avg=10.34s  min=845.6ms  med=10.25s max=28.17s  p(90)=18.33s p(95)=20.01s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 23868 
     http_req_receiving.............: avg=77.44µs min=26.8µs   med=60.3µs max=27.97ms p(90)=95.4µs p(95)=112.46µs
     http_req_sending...............: avg=36.88µs min=10.2µs   med=15.3µs max=84.01ms p(90)=42.6µs p(95)=63.7µs  
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s     max=0s      p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=10.34s  min=845ms    med=10.25s max=28.17s  p(90)=18.33s p(95)=20.01s  
     http_reqs......................: 23868  76.196355/s
     iteration_duration.............: avg=10.34s  min=852.09ms med=10.25s max=28.18s  p(90)=18.33s p(95)=20.01s  
     iterations.....................: 23868  76.196355/s
     vus............................: 277    min=0       max=1500
     vus_max........................: 1500   min=1160    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/98543724-abc2-42ad-e504-c39fe3927e00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ee65aecc-f0a8-4424-3065-74a410030b00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 61593     ✗ 0     
     data_received..................: 103 MB  332 kB/s
     data_sent......................: 24 MB   78 kB/s
     http_req_blocked...............: avg=87.05µs min=1.4µs    med=3.6µs  max=29.19ms p(90)=14.5µs  p(95)=457.42µs
     http_req_connecting............: avg=75.24µs min=0s       med=0s     max=29.16ms p(90)=0s      p(95)=376.82µs
     http_req_duration..............: avg=11.83s  min=573.98ms med=11.78s max=21.95s  p(90)=20.46s  p(95)=21.16s  
       { expected_response:true }...: avg=11.83s  min=573.98ms med=11.78s max=21.95s  p(90)=20.46s  p(95)=21.16s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 20531 
     http_req_receiving.............: avg=84.83µs min=25.9µs   med=77.1µs max=15.4ms  p(90)=102.9µs p(95)=115.1µs 
     http_req_sending...............: avg=42.25µs min=7.9µs    med=19.8µs max=22.13ms p(90)=45.4µs  p(95)=76.8µs  
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s     max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=11.83s  min=573.82ms med=11.78s max=21.95s  p(90)=20.46s  p(95)=21.16s  
     http_reqs......................: 20531   66.037187/s
     iteration_duration.............: avg=11.83s  min=575.38ms med=11.78s max=21.95s  p(90)=20.47s  p(95)=21.16s  
     iterations.....................: 20531   66.037187/s
     vus............................: 202     min=0       max=1499
     vus_max........................: 1500    min=1358    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/917a6e06-fd5f-415f-ca05-395a3b6c1500/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/76628922-adf9-495e-1198-93003160d900/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-deno`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  95% — ✓ 17268 / ✗ 878
     ✗ valid response structure
      ↳  95% — ✓ 17268 / ✗ 878

     checks.........................: 96.77% ✓ 52682    ✗ 1756  
     data_received..................: 103 MB 326 kB/s
     data_sent......................: 22 MB  68 kB/s
     http_req_blocked...............: avg=141.45µs min=1.1µs    med=2.6µs   max=47.66ms p(90)=21.4µs  p(95)=520.28µs
     http_req_connecting............: avg=96.66µs  min=0s       med=0s      max=47.47ms p(90)=0s      p(95)=427.65µs
     http_req_duration..............: avg=13.66s   min=641.54ms med=11.72s  max=53.64s  p(90)=25.96s  p(95)=28.81s  
       { expected_response:true }...: avg=13.66s   min=641.54ms med=11.72s  max=53.64s  p(90)=25.96s  p(95)=28.81s  
     http_req_failed................: 0.00%  ✓ 0        ✗ 18146 
     http_req_receiving.............: avg=193.09µs min=22.7µs   med=51.1µs  max=55.52ms p(90)=144.4µs p(95)=240.52µs
     http_req_sending...............: avg=102.31µs min=8.2µs    med=16.29µs max=46.02ms p(90)=79µs    p(95)=118µs   
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=13.66s   min=641.45ms med=11.72s  max=53.64s  p(90)=25.96s  p(95)=28.81s  
     http_reqs......................: 18146  57.42209/s
     iteration_duration.............: avg=13.66s   min=642.46ms med=11.72s  max=53.65s  p(90)=25.96s  p(95)=28.81s  
     iterations.....................: 18146  57.42209/s
     vus............................: 71     min=0      max=1500
     vus_max........................: 1500   min=1262   max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d065bee1-0350-4e54-9456-dbdd4efbaa00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/284f6b3c-f1e1-4f07-5a4b-c356142fae00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga-uws`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  57% — ✓ 10496 / ✗ 7771
     ✗ valid response structure
      ↳  57% — ✓ 10496 / ✗ 7771

     checks.........................: 71.63% ✓ 39259     ✗ 15542 
     data_received..................: 76 MB  237 kB/s
     data_sent......................: 22 MB  68 kB/s
     http_req_blocked...............: avg=89.53µs min=1.4µs   med=2.9µs  max=118.68ms p(90)=16.2µs p(95)=456.27µs
     http_req_connecting............: avg=63.57µs min=0s      med=0s     max=118.57ms p(90)=0s     p(95)=373.84µs
     http_req_duration..............: avg=13.87s  min=89.59ms med=9.19s  max=51.71s   p(90)=31.25s p(95)=34.37s  
       { expected_response:true }...: avg=13.87s  min=89.59ms med=9.19s  max=51.71s   p(90)=31.25s p(95)=34.37s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 18267 
     http_req_receiving.............: avg=88.4µs  min=17.3µs  med=58.9µs max=57.43ms  p(90)=91.5µs p(95)=106.5µs 
     http_req_sending...............: avg=64.96µs min=8.1µs   med=15.9µs max=82.15ms  p(90)=58.2µs p(95)=89.2µs  
     http_req_tls_handshaking.......: avg=0s      min=0s      med=0s     max=0s       p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=13.87s  min=89.51ms med=9.19s  max=51.71s   p(90)=31.25s p(95)=34.37s  
     http_reqs......................: 18267  56.871153/s
     iteration_duration.............: avg=13.87s  min=90.34ms med=9.19s  max=51.72s   p(90)=31.25s p(95)=34.37s  
     iterations.....................: 18267  56.871153/s
     vus............................: 146    min=0       max=1498
     vus_max........................: 1500   min=1277    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5d31dbcd-3e33-49d2-f184-d44bccaa7700/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/088d4790-df0c-445b-27b9-71e265fb6500/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server-node16`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  94% — ✓ 11077 / ✗ 704
     ✗ no graphql errors
      ↳  39% — ✓ 4637 / ✗ 7144
     ✗ valid response structure
      ↳  41% — ✓ 4637 / ✗ 6440

     checks.........................: 58.75% ✓ 20351     ✗ 14288 
     data_received..................: 43 MB  125 kB/s
     data_sent......................: 15 MB  43 kB/s
     http_req_blocked...............: avg=196.51µs min=1.6µs    med=3.4µs  max=80.59ms p(90)=454µs   p(95)=657.4µs
     http_req_connecting............: avg=174.33µs min=0s       med=0s     max=80.22ms p(90)=368.6µs p(95)=565.5µs
     http_req_duration..............: avg=20.34s   min=170.06ms med=11.84s max=1m0s    p(90)=54.62s  p(95)=59.99s 
       { expected_response:true }...: avg=17.82s   min=170.06ms med=10.2s  max=59.95s  p(90)=48.97s  p(95)=54.34s 
     http_req_failed................: 5.97%  ✓ 704       ✗ 11077 
     http_req_receiving.............: avg=104.92µs min=0s       med=87µs   max=17.43ms p(90)=142.6µs p(95)=165µs  
     http_req_sending...............: avg=58.39µs  min=9.29µs   med=22.3µs max=18.1ms  p(90)=69.9µs  p(95)=94.2µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=20.34s   min=169.93ms med=11.84s max=1m0s    p(90)=54.61s  p(95)=59.99s 
     http_reqs......................: 11781  34.700561/s
     iteration_duration.............: avg=20.35s   min=171.01ms med=11.84s max=1m0s    p(90)=54.62s  p(95)=1m0s   
     iterations.....................: 11781  34.700561/s
     vus............................: 3      min=0       max=1500
     vus_max........................: 1500   min=1272    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/bc368817-d8a4-41dc-4a3a-f987621dc700/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/715f6456-9524-4efd-4946-2968869b4600/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  84% — ✓ 15954 / ✗ 2839
     ✗ no graphql errors
      ↳  83% — ✓ 15674 / ✗ 3119
     ✗ valid response structure
      ↳  98% — ✓ 15674 / ✗ 280

     checks.........................: 88.34% ✓ 47302     ✗ 6238  
     data_received..................: 80 MB  239 kB/s
     data_sent......................: 23 MB  68 kB/s
     http_req_blocked...............: avg=260.1µs  min=1.6µs    med=3.2µs  max=29.04ms p(90)=425.14µs p(95)=943.89µs
     http_req_connecting............: avg=236.37µs min=0s       med=0s     max=28.99ms p(90)=335.86µs p(95)=745.67µs
     http_req_duration..............: avg=13.36s   min=118.35ms med=4.16s  max=1m0s    p(90)=59.99s   p(95)=1m0s    
       { expected_response:true }...: avg=5.07s    min=118.35ms med=4.06s  max=59.94s  p(90)=4.81s    p(95)=5.87s   
     http_req_failed................: 15.10% ✓ 2839      ✗ 15954 
     http_req_receiving.............: avg=65.2µs   min=0s       med=64.3µs max=8.2ms   p(90)=95.2µs   p(95)=106.6µs 
     http_req_sending...............: avg=54.65µs  min=8.1µs    med=18.8µs max=36.38ms p(90)=64.9µs   p(95)=87.9µs  
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=13.36s   min=118.26ms med=4.16s  max=1m0s    p(90)=59.99s   p(95)=1m0s    
     http_reqs......................: 18793  56.193752/s
     iteration_duration.............: avg=13.36s   min=119.26ms med=4.16s  max=1m0s    p(90)=1m0s     p(95)=1m0s    
     iterations.....................: 18793  56.193752/s
     vus............................: 30     min=0       max=1500
     vus_max........................: 1500   min=1094    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/55217de7-9a07-4ca2-c0e8-8a255307c300/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/bd64a298-2f68-4eba-6fcc-7357baa60f00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  80% — ✓ 12357 / ✗ 3042
     ✗ no graphql errors
      ↳  78% — ✓ 12018 / ✗ 3381
     ✗ valid response structure
      ↳  97% — ✓ 12018 / ✗ 339

     checks.........................: 84.33% ✓ 36393     ✗ 6762  
     data_received..................: 63 MB  189 kB/s
     data_sent......................: 19 MB  56 kB/s
     http_req_blocked...............: avg=387.61µs min=1.5µs    med=4µs    max=49.45ms p(90)=607.3µs  p(95)=1.49ms  
     http_req_connecting............: avg=350.75µs min=0s       med=0s     max=43.87ms p(90)=498.22µs p(95)=1.33ms  
     http_req_duration..............: avg=16.1s    min=205.58ms med=4.37s  max=1m0s    p(90)=1m0s     p(95)=1m0s    
       { expected_response:true }...: avg=5.3s     min=205.58ms med=4.23s  max=59.76s  p(90)=5.02s    p(95)=6.19s   
     http_req_failed................: 19.75% ✓ 3042      ✗ 12357 
     http_req_receiving.............: avg=87.92µs  min=0s       med=80.6µs max=16.93ms p(90)=131.4µs  p(95)=154.61µs
     http_req_sending...............: avg=74.33µs  min=9.29µs   med=25.1µs max=17.59ms p(90)=82.6µs   p(95)=119.21µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=16.1s    min=205.47ms med=4.37s  max=1m0s    p(90)=59.99s   p(95)=1m0s    
     http_reqs......................: 15399  46.045053/s
     iteration_duration.............: avg=16.1s    min=207.3ms  med=4.37s  max=1m0s    p(90)=1m0s     p(95)=1m0s    
     iterations.....................: 15399  46.045053/s
     vus............................: 59     min=0       max=1500
     vus_max........................: 1500   min=1130    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/27c9ae7d-e3d6-468a-e311-f6cd6d838900/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/56b1b917-d200-46e2-b02b-4e8885f50200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  90% — ✓ 26374 / ✗ 2629
     ✗ no graphql errors
      ↳  90% — ✓ 26135 / ✗ 2868
     ✗ valid response structure
      ↳  99% — ✓ 26135 / ✗ 239

     checks.........................: 93.20% ✓ 78644     ✗ 5736  
     data_received..................: 135 MB 405 kB/s
     data_sent......................: 35 MB  104 kB/s
     http_req_blocked...............: avg=297.5µs  min=1.2µs   med=2.4µs  max=104.1ms  p(90)=239.3µs  p(95)=461.18µs
     http_req_connecting............: avg=281.06µs min=0s      med=0s     max=104.03ms p(90)=188.84µs p(95)=379.88µs
     http_req_duration..............: avg=8.71s    min=72.35ms med=3s     max=1m0s     p(90)=34.96s   p(95)=1m0s    
       { expected_response:true }...: avg=3.6s     min=72.35ms med=2.96s  max=59.87s   p(90)=3.51s    p(95)=4.67s   
     http_req_failed................: 9.06%  ✓ 2629      ✗ 26374 
     http_req_receiving.............: avg=58.49µs  min=0s      med=44.1µs max=33.63ms  p(90)=67.9µs   p(95)=79.6µs  
     http_req_sending...............: avg=67.98µs  min=7.2µs   med=12.9µs max=38.27ms  p(90)=45.5µs   p(95)=67µs    
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=8.71s    min=72.25ms med=3s     max=1m0s     p(90)=34.96s   p(95)=59.99s  
     http_reqs......................: 29003  86.979738/s
     iteration_duration.............: avg=8.71s    min=73.08ms med=3s     max=1m0s     p(90)=34.97s   p(95)=1m0s    
     iterations.....................: 29003  86.979738/s
     vus............................: 18     min=18      max=1500
     vus_max........................: 1500   min=1500    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/cff0cb70-1ea4-4589-553c-498364b56d00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/065298ac-0473-4c0c-ea6c-8f588fa28c00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-uws`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  92% — ✓ 13884 / ✗ 1082
     ✗ no graphql errors
      ↳  63% — ✓ 9451 / ✗ 5515
     ✗ valid response structure
      ↳  68% — ✓ 9451 / ✗ 4433

     checks.........................: 74.82% ✓ 32786     ✗ 11030 
     data_received..................: 110 MB 323 kB/s
     data_sent......................: 19 MB  55 kB/s
     http_req_blocked...............: avg=142.34µs min=1.2µs   med=2.6µs  max=80.77ms p(90)=183.65µs p(95)=535.95µs
     http_req_connecting............: avg=119.05µs min=0s      med=0s     max=80.6ms  p(90)=117.35µs p(95)=447.2µs 
     http_req_duration..............: avg=15.99s   min=54.06ms med=7.49s  max=1m0s    p(90)=49.64s   p(95)=1m0s    
       { expected_response:true }...: avg=12.56s   min=54.06ms med=6.82s  max=1m0s    p(90)=35.26s   p(95)=44.99s  
     http_req_failed................: 7.22%  ✓ 1082      ✗ 13884 
     http_req_receiving.............: avg=87.5µs   min=0s      med=64.8µs max=31.3ms  p(90)=124.3µs  p(95)=165.07µs
     http_req_sending...............: avg=61.92µs  min=9.7µs   med=15.7µs max=59.92ms p(90)=59.3µs   p(95)=84.2µs  
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=15.99s   min=53.98ms med=7.49s  max=1m0s    p(90)=49.64s   p(95)=1m0s    
     http_reqs......................: 14966  44.016974/s
     iteration_duration.............: avg=15.99s   min=54.7ms  med=7.49s  max=1m0s    p(90)=49.64s   p(95)=1m0s    
     iterations.....................: 14966  44.016974/s
     vus............................: 2      min=0       max=1500
     vus_max........................: 1500   min=1238    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/93ffecbd-4701-4686-59a3-c8bbb6debf00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/85dcf141-f572-4f58-ce3a-9b134c1aeb00/public" alt="HTTP Overview" />


  </details>