## Overview for: `fed-v1-ramping-vus`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. We are running a heavy load of concurrent VUs to measure response time and other stats, during stress. It measure things like memory usage, CPU usage, response times. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was trying to reach 1500 concurrent VUs over 300s


### Comparison


| Gateway                             | duration(p95)⬇️ |  RPS  |         Requests         |                       Durations                        |
| :---------------------------------- | :-------------: | :---: | :----------------------: | :----------------------------------------------------: |
| wundergraph                         |     1844ms      |  851  |  263850 total, 0 failed  |    avg: 786ms, p95: 1845ms, max: 4626ms, med: 684ms    |
| mesh-bun                            |     3466ms      |  463  |  143596 total, 0 failed  |   avg: 1645ms, p95: 3466ms, max: 5686ms, med: 1507ms   |
| mesh                                |     6442ms      |  228  |  70688 total, 0 failed   |  avg: 3379ms, p95: 6443ms, max: 12162ms, med: 3233ms   |
| stitching-federation-with-yoga      |     39225ms     |  38   |  12691 total, 0 failed   | avg: 20426ms, p95: 39225ms, max: 46680ms, med: 20432ms |
| apollo-router                       |     45204ms     |  39   | 13335 total, 3545 failed | avg: 18671ms, p95: 45204ms, max: 60002ms, med: 13616ms |
| stitching-federation-with-yoga-uws  |     56901ms     |  22   |  7577 total, 166 failed  | avg: 31454ms, p95: 56902ms, max: 60338ms, med: 30781ms |
| stitching-federation-with-yoga-bun  |     59998ms     |  30   | 10346 total, 800 failed  | avg: 23860ms, p95: 59998ms, max: 60969ms, med: 25404ms |
| apollo-gateway-with-yoga            |     60001ms     |  37   | 12815 total, 1739 failed | avg: 19101ms, p95: 60001ms, max: 60427ms, med: 7918ms  |
| apollo-gateway-with-yoga-bun        |     60001ms     |  29   | 10080 total, 1021 failed | avg: 23275ms, p95: 60001ms, max: 64930ms, med: 20141ms |
| apollo-gateway-with-yoga-uws        |     60001ms     |  29   | 10130 total, 1827 failed | avg: 23510ms, p95: 60002ms, max: 60258ms, med: 11111ms |
| apollo-server                       |     60001ms     |  28   | 9764 total, 2226 failed  | avg: 25498ms, p95: 60002ms, max: 60263ms, med: 14425ms |
| mercurius                           |     60001ms     |  14   | 5076 total, 3482 failed  | avg: 46855ms, p95: 60001ms, max: 60031ms, med: 60000ms |
| mesh-supergraph                     |     60001ms     |  21   | 7214 total, 1553 failed  | avg: 32901ms, p95: 60001ms, max: 60041ms, med: 30191ms |
| stitching-federation-with-yoga-deno |     60001ms     |  20   |  6873 total, 941 failed  | avg: 34258ms, p95: 60001ms, max: 60090ms, med: 35015ms |
| apollo-server-node16                |     60003ms     |  24   | 8484 total, 2174 failed  | avg: 27773ms, p95: 60003ms, max: 60309ms, med: 14810ms |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 263850

     checks.........................: 66.66% ✓ 527700     ✗ 263850
     data_received..................: 38 MB  123 kB/s
     data_sent......................: 313 MB 1.0 MB/s
     http_req_blocked...............: avg=4.4ms    min=1.2µs   med=3.5µs    max=3.35s p(90)=6µs     p(95)=8.1µs   
     http_req_connecting............: avg=4.36ms   min=0s      med=0s       max=3.26s p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=786.17ms min=395.2µs med=684.25ms max=4.62s p(90)=1.62s   p(95)=1.84s   
       { expected_response:true }...: avg=786.17ms min=395.2µs med=684.25ms max=4.62s p(90)=1.62s   p(95)=1.84s   
     http_req_failed................: 0.00%  ✓ 0          ✗ 263850
     http_req_receiving.............: avg=18.4ms   min=9.79µs  med=37.1µs   max=2.26s p(90)=538.6µs p(95)=64.42ms 
     http_req_sending...............: avg=4.39ms   min=6.8µs   med=16.4µs   max=2.28s p(90)=138.1µs p(95)=321.35µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s    p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=763.37ms min=350.8µs med=673.74ms max=3.46s p(90)=1.55s   p(95)=1.77s   
     http_reqs......................: 263850 851.060126/s
     iteration_duration.............: avg=900.36ms min=1.04ms  med=788.33ms max=6.47s p(90)=1.8s    p(95)=2.06s   
     iterations.....................: 263850 851.060126/s
     vus............................: 2      min=0        max=1495
     vus_max........................: 1500   min=1433     max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9d920cba-d920-495c-c5c7-fb2958d84000/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/fda83dac-e08c-42ab-594e-2accc71cb700/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5c6c1e62-8c7e-4e2c-1192-47b51e781a00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  0% — ✓ 0 / ✗ 143596
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 143596

     checks.........................: 33.33% ✓ 143596     ✗ 287192
     data_received..................: 137 MB 441 kB/s
     data_sent......................: 170 MB 550 kB/s
     http_req_blocked...............: avg=1.09ms min=900ns  med=1.9µs  max=1.17s    p(90)=3.4µs   p(95)=4.5µs  
     http_req_connecting............: avg=1.07ms min=0s     med=0s     max=1.17s    p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=1.64s  min=1.63ms med=1.5s   max=5.68s    p(90)=3.13s   p(95)=3.46s  
       { expected_response:true }...: avg=1.64s  min=1.63ms med=1.5s   max=5.68s    p(90)=3.13s   p(95)=3.46s  
     http_req_failed................: 0.00%  ✓ 0          ✗ 143596
     http_req_receiving.............: avg=5.41ms min=9.4µs  med=19.9µs max=1.17s    p(90)=247µs   p(95)=2.98ms 
     http_req_sending...............: avg=1.84ms min=6.5µs  med=10.2µs max=810.51ms p(90)=87.85µs p(95)=120.7µs
     http_req_tls_handshaking.......: avg=0s     min=0s     med=0s     max=0s       p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=1.63s  min=1.6ms  med=1.5s   max=5.68s    p(90)=3.12s   p(95)=3.44s  
     http_reqs......................: 143596 463.202349/s
     iteration_duration.............: avg=1.65s  min=2.16ms med=1.51s  max=5.96s    p(90)=3.16s   p(95)=3.47s  
     iterations.....................: 143596 463.202349/s
     vus............................: 1      min=0        max=1499
     vus_max........................: 1500   min=1499     max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9d9b6c44-ba89-4f12-3d2a-f8bb71b2ec00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/856f5c6c-5f35-46cf-1621-64f3d0fecc00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6682ffa2-b620-48dc-76da-16f1dff29a00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 70688

     checks.........................: 66.66% ✓ 141376     ✗ 70688 
     data_received..................: 80 MB  258 kB/s
     data_sent......................: 84 MB  271 kB/s
     http_req_blocked...............: avg=1.09ms min=1.3µs  med=2.9µs  max=1.03s    p(90)=4.59µs   p(95)=8.5µs   
     http_req_connecting............: avg=1.05ms min=0s     med=0s     max=999.86ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=3.37s  min=3.8ms  med=3.23s  max=12.16s   p(90)=6.18s    p(95)=6.44s   
       { expected_response:true }...: avg=3.37s  min=3.8ms  med=3.23s  max=12.16s   p(90)=6.18s    p(95)=6.44s   
     http_req_failed................: 0.00%  ✓ 0          ✗ 70688 
     http_req_receiving.............: avg=3.96ms min=13.3µs med=37.7µs max=1.08s    p(90)=284.61µs p(95)=1ms     
     http_req_sending...............: avg=1.91ms min=7.2µs  med=15.1µs max=843.8ms  p(90)=113µs    p(95)=225.97µs
     http_req_tls_handshaking.......: avg=0s     min=0s     med=0s     max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=3.37s  min=3.74ms med=3.22s  max=12.16s   p(90)=6.18s    p(95)=6.43s   
     http_reqs......................: 70688  228.022505/s
     iteration_duration.............: avg=3.38s  min=4.59ms med=3.23s  max=12.16s   p(90)=6.19s    p(95)=6.44s   
     iterations.....................: 70688  228.022505/s
     vus............................: 2      min=0        max=1500
     vus_max........................: 1500   min=1200     max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b5307a22-e149-4c49-9f37-4429f6805100/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f3d64475-db65-4bee-7127-c9b6622dfc00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a5b28cdd-ed48-45c2-47d8-d2b3eb211000/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 38073    ✗ 0     
     data_received..................: 1.1 GB  3.4 MB/s
     data_sent......................: 15 MB   45 kB/s
     http_req_blocked...............: avg=2.5ms  min=1.5µs   med=3.5µs   max=587.03ms p(90)=153.1µs p(95)=431.65µs
     http_req_connecting............: avg=2.42ms min=0s      med=0s      max=586.88ms p(90)=100.6µs p(95)=364.6µs 
     http_req_duration..............: avg=20.42s min=1.25s   med=20.43s  max=46.67s   p(90)=34.46s  p(95)=39.22s  
       { expected_response:true }...: avg=20.42s min=1.25s   med=20.43s  max=46.67s   p(90)=34.46s  p(95)=39.22s  
     http_req_failed................: 0.00%   ✓ 0        ✗ 12691 
     http_req_receiving.............: avg=3.37ms min=41.09µs med=87.1µs  max=650.24ms p(90)=396.8µs p(95)=2.43ms  
     http_req_sending...............: avg=2.72ms min=7.5µs   med=18.59µs max=580.5ms  p(90)=88.9µs  p(95)=7.1ms   
     http_req_tls_handshaking.......: avg=0s     min=0s      med=0s      max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=20.42s min=1.25s   med=20.42s  max=46.67s   p(90)=34.46s  p(95)=39.22s  
     http_reqs......................: 12691   38.23074/s
     iteration_duration.............: avg=20.47s min=1.27s   med=20.46s  max=46.68s   p(90)=34.48s  p(95)=39.37s  
     iterations.....................: 12691   38.23074/s
     vus............................: 23      min=0      max=1500
     vus_max........................: 1500    min=1206   max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d7f3afdf-ee6b-4f87-2370-19262a93b500/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/be17c5de-1132-4c57-742b-bec479c06900/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/390048e3-1663-4acf-963a-308257e19200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  73% — ✓ 9790 / ✗ 3545
     ✗ no graphql errors
      ↳  73% — ✓ 9790 / ✗ 3545
     ✓ valid response structure

     checks.........................: 80.55% ✓ 29369     ✗ 7090  
     data_received..................: 859 MB 2.6 MB/s
     data_sent......................: 16 MB  49 kB/s
     http_req_blocked...............: avg=783.91µs min=1.2µs    med=3.1µs  max=347.27ms p(90)=138.94µs p(95)=379.68µs
     http_req_connecting............: avg=712.78µs min=0s       med=0s     max=274ms    p(90)=86.8µs   p(95)=318.81µs
     http_req_duration..............: avg=18.67s   min=247.78ms med=13.61s max=1m0s     p(90)=42.22s   p(95)=45.2s   
       { expected_response:true }...: avg=11.36s   min=247.78ms med=9.39s  max=56.25s   p(90)=22.12s   p(95)=28.39s  
     http_req_failed................: 26.58% ✓ 3545      ✗ 9790  
     http_req_receiving.............: avg=848.27µs min=0s       med=73.1µs max=294.21ms p(90)=191.17µs p(95)=317.67µs
     http_req_sending...............: avg=837.07µs min=8µs      med=18.1µs max=399.2ms  p(90)=54µs     p(95)=122.07µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=18.66s   min=247.69ms med=13.61s max=1m0s     p(90)=42.22s   p(95)=45.2s   
     http_reqs......................: 13335  39.79631/s
     iteration_duration.............: avg=18.68s   min=254.81ms med=13.63s max=1m0s     p(90)=42.22s   p(95)=45.2s   
     iterations.....................: 13334  39.793326/s
     vus............................: 94     min=50      max=1499
     vus_max........................: 1500   min=1500    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f8f94466-1ab0-46a3-f156-431b13517c00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/faeb6004-f120-4711-6d77-f5d4f2aeb300/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f59c9476-53c8-4ce4-da75-68d68d583100/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-uws`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  97% — ✓ 7411 / ✗ 166
     ✗ no graphql errors
      ↳  97% — ✓ 7411 / ✗ 166
     ✓ valid response structure

     checks.........................: 98.52% ✓ 22233     ✗ 332   
     data_received..................: 650 MB 1.9 MB/s
     data_sent......................: 9.8 MB 29 kB/s
     http_req_blocked...............: avg=4.33ms  min=2.2µs  med=4.5µs   max=720.11ms p(90)=501.98µs p(95)=1.76ms
     http_req_connecting............: avg=4.23ms  min=0s     med=0s      max=720.01ms p(90)=414.04µs p(95)=1.32ms
     http_req_duration..............: avg=31.45s  min=2.19s  med=30.78s  max=1m0s     p(90)=54.15s   p(95)=56.9s 
       { expected_response:true }...: avg=30.81s  min=2.19s  med=30.24s  max=59.91s   p(90)=53.38s   p(95)=55.26s
     http_req_failed................: 2.19%  ✓ 166       ✗ 7411  
     http_req_receiving.............: avg=10.39ms min=0s     med=152.9µs max=11.28s   p(90)=941.75µs p(95)=4.45ms
     http_req_sending...............: avg=2.69ms  min=12.7µs med=28.2µs  max=352.53ms p(90)=136.58µs p(95)=8.4ms 
     http_req_tls_handshaking.......: avg=0s      min=0s     med=0s      max=0s       p(90)=0s       p(95)=0s    
     http_req_waiting...............: avg=31.44s  min=2.14s  med=30.77s  max=1m0s     p(90)=54.15s   p(95)=56.88s
     http_reqs......................: 7577   22.311236/s
     iteration_duration.............: avg=31.52s  min=2.21s  med=30.8s   max=1m0s     p(90)=54.21s   p(95)=56.93s
     iterations.....................: 7577   22.311236/s
     vus............................: 4      min=0       max=1500
     vus_max........................: 1500   min=883     max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/39d85eea-3115-4ee5-b974-3ebd47b3c800/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0b3c40bb-8a60-44bf-db38-367920689400/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8f1a5e6c-eeaf-4736-5a6a-a71badebd800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-bun`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  92% — ✓ 9546 / ✗ 800
     ✗ no graphql errors
      ↳  92% — ✓ 9546 / ✗ 800
     ✓ valid response structure

     checks.........................: 94.70% ✓ 28638     ✗ 1600  
     data_received..................: 837 MB 2.5 MB/s
     data_sent......................: 13 MB  38 kB/s
     http_req_blocked...............: avg=13.33ms  min=2.4µs    med=5.4µs    max=1.38s    p(90)=639.79µs p(95)=43.28ms
     http_req_connecting............: avg=13.14ms  min=0s       med=0s       max=1.38s    p(90)=540.54µs p(95)=42.23ms
     http_req_duration..............: avg=23.86s   min=998.56ms med=25.4s    max=1m0s     p(90)=49.14s   p(95)=59.99s 
       { expected_response:true }...: avg=20.83s   min=998.56ms med=20.97s   max=59.94s   p(90)=30.67s   p(95)=41.39s 
     http_req_failed................: 7.73%  ✓ 800       ✗ 9546  
     http_req_receiving.............: avg=178.95ms min=0s       med=139.55µs max=30.73s   p(90)=5.17ms   p(95)=95.29ms
     http_req_sending...............: avg=11.03ms  min=11.4µs   med=30.8µs   max=797.04ms p(90)=13.6ms   p(95)=62.2ms 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s       p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=23.67s   min=986.25ms med=25.11s   max=1m0s     p(90)=49.04s   p(95)=59.99s 
     http_reqs......................: 10346  30.564084/s
     iteration_duration.............: avg=24.02s   min=1.15s    med=25.54s   max=1m0s     p(90)=49.26s   p(95)=1m0s   
     iterations.....................: 10346  30.564084/s
     vus............................: 1      min=0       max=1500
     vus_max........................: 1500   min=783     max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6dc627de-a98c-4066-0340-f4e0ec7b6f00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/991b81e6-0188-4dda-fc2b-26fbaed28400/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6d66f7fa-ab0f-42f8-3489-af9de2276200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  86% — ✓ 11076 / ✗ 1739
     ✗ no graphql errors
      ↳  86% — ✓ 11076 / ✗ 1739
     ✓ valid response structure

     checks.........................: 90.52% ✓ 33223     ✗ 3478  
     data_received..................: 972 MB 2.9 MB/s
     data_sent......................: 16 MB  46 kB/s
     http_req_blocked...............: avg=4.21ms  min=1.5µs    med=3.5µs  max=988.34ms p(90)=415.38µs p(95)=4.48ms 
     http_req_connecting............: avg=3.98ms  min=0s       med=0s     max=988.27ms p(90)=352.1µs  p(95)=3.61ms 
     http_req_duration..............: avg=19.1s   min=978.86ms med=7.91s  max=1m0s     p(90)=59.99s   p(95)=1m0s   
       { expected_response:true }...: avg=12.68s  min=978.86ms med=6.72s  max=59.97s   p(90)=35.35s   p(95)=42.83s 
     http_req_failed................: 13.57% ✓ 1739      ✗ 11076 
     http_req_receiving.............: avg=18.33ms min=0s       med=74µs   max=1.87s    p(90)=338.7µs  p(95)=6.38ms 
     http_req_sending...............: avg=4.66ms  min=6.9µs    med=18.8µs max=1.85s    p(90)=149.82µs p(95)=12.69ms
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s     max=0s       p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=19.07s  min=978.46ms med=7.9s   max=1m0s     p(90)=59.99s   p(95)=1m0s   
     http_reqs......................: 12815  37.953761/s
     iteration_duration.............: avg=19.14s  min=985.7ms  med=7.94s  max=1m0s     p(90)=1m0s     p(95)=1m0s   
     iterations.....................: 12810  37.938953/s
     vus............................: 3      min=0       max=1499
     vus_max........................: 1500   min=1402    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0276abec-e8e7-4853-e38b-d232f8f3d300/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/18484fe0-4c4c-4f52-2d08-54789bb5a400/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3ee63aaa-208b-4560-ab6d-62c6fe438700/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga-bun`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  89% — ✓ 9059 / ✗ 1021
     ✗ no graphql errors
      ↳  89% — ✓ 9059 / ✗ 1021
     ✓ valid response structure

     checks.........................: 93.01% ✓ 27177     ✗ 2042  
     data_received..................: 795 MB 2.3 MB/s
     data_sent......................: 13 MB  38 kB/s
     http_req_blocked...............: avg=42.19ms  min=1.7µs    med=4.7µs   max=3.95s  p(90)=235.68µs p(95)=40.09ms 
     http_req_connecting............: avg=41.66ms  min=0s       med=0s      max=3.95s  p(90)=142.01µs p(95)=32.58ms 
     http_req_duration..............: avg=23.27s   min=919.3ms  med=20.14s  max=1m4s   p(90)=57.07s   p(95)=1m0s    
       { expected_response:true }...: avg=19.14s   min=919.3ms  med=17.99s  max=58.15s p(90)=37.11s   p(95)=43.22s  
     http_req_failed................: 10.12% ✓ 1021      ✗ 9059  
     http_req_receiving.............: avg=135.47ms min=0s       med=106.7µs max=19.96s p(90)=68.83ms  p(95)=860.55ms
     http_req_sending...............: avg=32.11ms  min=9.19µs   med=23.7µs  max=3.46s  p(90)=24.73ms  p(95)=144.19ms
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s     p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=23.1s    min=919.1ms  med=20s     max=1m2s   p(90)=56.6s    p(95)=1m0s    
     http_reqs......................: 10080  29.664153/s
     iteration_duration.............: avg=23.9s    min=952.86ms med=21.09s  max=1m4s   p(90)=1m0s     p(95)=1m0s    
     iterations.....................: 10080  29.664153/s
     vus............................: 4      min=0       max=1500
     vus_max........................: 1500   min=759     max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/43df1e5a-4cfd-4555-ef4d-bd157d0f5d00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/859563cc-6afa-424c-4958-db1ead219500/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ccf057a5-0b5f-414d-07fa-ecc453a1b200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga-uws`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  81% — ✓ 8303 / ✗ 1827
     ✗ no graphql errors
      ↳  81% — ✓ 8303 / ✗ 1827
     ✓ valid response structure

     checks.........................: 87.20% ✓ 24909     ✗ 3654  
     data_received..................: 729 MB 2.1 MB/s
     data_sent......................: 13 MB  37 kB/s
     http_req_blocked...............: avg=4.8ms  min=2.1µs med=6.5µs   max=722.1ms  p(90)=645.85µs p(95)=8.66ms 
     http_req_connecting............: avg=4.71ms min=0s    med=0s      max=722ms    p(90)=542.13µs p(95)=7.96ms 
     http_req_duration..............: avg=23.5s  min=1.69s med=11.11s  max=1m0s     p(90)=1m0s     p(95)=1m0s   
       { expected_response:true }...: avg=15.48s min=1.69s med=8.91s   max=59.98s   p(90)=43.37s   p(95)=49.85s 
     http_req_failed................: 18.03% ✓ 1827      ✗ 8303  
     http_req_receiving.............: avg=14.3ms min=0s    med=114.1µs max=36.9s    p(90)=366.76µs p(95)=1.52ms 
     http_req_sending...............: avg=3.51ms min=9.6µs med=32.5µs  max=567.74ms p(90)=799.44µs p(95)=17.47ms
     http_req_tls_handshaking.......: avg=0s     min=0s    med=0s      max=0s       p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=23.49s min=1.69s med=11.09s  max=1m0s     p(90)=1m0s     p(95)=1m0s   
     http_reqs......................: 10130  29.793888/s
     iteration_duration.............: avg=23.56s min=1.7s  med=11.19s  max=1m0s     p(90)=1m0s     p(95)=1m0s   
     iterations.....................: 10130  29.793888/s
     vus............................: 2      min=2       max=1500
     vus_max........................: 1500   min=1500    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/74aa5e6a-216e-4062-937d-7d58a5204a00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/82dd8ef9-2d3f-4dcf-9fda-ead5346ec200/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ee2fdd3b-bdeb-4297-9989-c03ae71bcb00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  77% — ✓ 7538 / ✗ 2226
     ✗ no graphql errors
      ↳  77% — ✓ 7538 / ✗ 2226
     ✓ valid response structure

     checks.........................: 83.55% ✓ 22614     ✗ 4452  
     data_received..................: 663 MB 2.0 MB/s
     data_sent......................: 12 MB  36 kB/s
     http_req_blocked...............: avg=2.66ms   min=2.1µs    med=6.3µs   max=391.56ms p(90)=641.63µs p(95)=4.49ms
     http_req_connecting............: avg=2.55ms   min=0s       med=0s      max=391.48ms p(90)=538.3µs  p(95)=3.87ms
     http_req_duration..............: avg=25.49s   min=861.57ms med=14.42s  max=1m0s     p(90)=1m0s     p(95)=1m0s  
       { expected_response:true }...: avg=15.3s    min=861.57ms med=8.48s   max=59.98s   p(90)=41.51s   p(95)=46.97s
     http_req_failed................: 22.79% ✓ 2226      ✗ 7538  
     http_req_receiving.............: avg=980.83µs min=0s       med=111.9µs max=485.09ms p(90)=345.98µs p(95)=1.17ms
     http_req_sending...............: avg=1.98ms   min=9.9µs    med=32.1µs  max=294.24ms p(90)=173.22µs p(95)=8.75ms
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s       p(90)=0s       p(95)=0s    
     http_req_waiting...............: avg=25.49s   min=845.34ms med=14.42s  max=1m0s     p(90)=1m0s     p(95)=1m0s  
     http_reqs......................: 9764   28.742551/s
     iteration_duration.............: avg=25.53s   min=911.1ms  med=14.46s  max=1m0s     p(90)=1m0s     p(95)=1m0s  
     iterations.....................: 9764   28.742551/s
     vus............................: 2      min=0       max=1500
     vus_max........................: 1500   min=1274    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/08886c02-7092-4f4d-08a4-73bcfe34d400/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0d30fb46-0495-4aa8-0225-d35eacbed300/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4ca780bd-a1f2-4a21-b0cc-58b9851aa000/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  31% — ✓ 1594 / ✗ 3482
     ✗ no graphql errors
      ↳  31% — ✓ 1594 / ✗ 3482
     ✓ valid response structure

     checks.........................: 40.71% ✓ 4782      ✗ 6964  
     data_received..................: 140 MB 412 kB/s
     data_sent......................: 6.9 MB 20 kB/s
     http_req_blocked...............: avg=818.18µs min=2.2µs med=230.45µs max=88.11ms  p(90)=1.02ms   p(95)=1.77ms  
     http_req_connecting............: avg=752.58µs min=0s    med=157.25µs max=59.22ms  p(90)=924.97µs p(95)=1.65ms  
     http_req_duration..............: avg=46.85s   min=2.04s med=59.99s   max=1m0s     p(90)=1m0s     p(95)=1m0s    
       { expected_response:true }...: avg=18.14s   min=2.04s med=11.24s   max=57.98s   p(90)=49.38s   p(95)=53.52s  
     http_req_failed................: 68.59% ✓ 3482      ✗ 1594  
     http_req_receiving.............: avg=128.4µs  min=0s    med=0s       max=131.39ms p(90)=196.85µs p(95)=299.71µs
     http_req_sending...............: avg=155.55µs min=13µs  med=45.4µs   max=76.33ms  p(90)=87.55µs  p(95)=137.02µs
     http_req_tls_handshaking.......: avg=0s       min=0s    med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=46.85s   min=2.04s med=59.99s   max=1m0s     p(90)=1m0s     p(95)=1m0s    
     http_reqs......................: 5076   14.946867/s
     iteration_duration.............: avg=46.86s   min=2.05s med=1m0s     max=1m0s     p(90)=1m0s     p(95)=1m0s    
     iterations.....................: 5076   14.946867/s
     vus............................: 1      min=0       max=1500
     vus_max........................: 1500   min=1483    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7e5a48fa-1454-4bdf-3a57-0d14d5c3ae00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b07acbfa-6750-488f-6326-3308b2bd9500/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/13199d14-9e54-4cb5-6df5-c8da99767100/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  78% — ✓ 5661 / ✗ 1553
     ✗ no graphql errors
      ↳  78% — ✓ 5661 / ✗ 1553
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 5661

     checks.........................: 56.35% ✓ 11322     ✗ 8767  
     data_received..................: 498 MB 1.5 MB/s
     data_sent......................: 9.4 MB 28 kB/s
     http_req_blocked...............: avg=225.02µs min=2.6µs  med=5.4µs    max=39.96ms p(90)=666.66µs p(95)=782.19µs
     http_req_connecting............: avg=191.69µs min=0s     med=0s       max=39.75ms p(90)=575.67µs p(95)=677.91µs
     http_req_duration..............: avg=32.9s    min=2.52s  med=30.19s   max=1m0s    p(90)=1m0s     p(95)=1m0s    
       { expected_response:true }...: avg=25.46s   min=2.52s  med=23.54s   max=59.92s  p(90)=48.02s   p(95)=53.76s  
     http_req_failed................: 21.52% ✓ 1553      ✗ 5661  
     http_req_receiving.............: avg=968.37µs min=0s     med=193.69µs max=3.57s   p(90)=588.56µs p(95)=802.98µs
     http_req_sending...............: avg=163.06µs min=15.9µs med=37.9µs   max=29.82ms p(90)=95.19µs  p(95)=131.1µs 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s       max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=32.89s   min=2.52s  med=30.19s   max=1m0s    p(90)=1m0s     p(95)=1m0s    
     http_reqs......................: 7214   21.229899/s
     iteration_duration.............: avg=32.9s    min=2.52s  med=30.19s   max=1m0s    p(90)=1m0s     p(95)=1m0s    
     iterations.....................: 7214   21.229899/s
     vus............................: 4      min=0       max=1500
     vus_max........................: 1500   min=729     max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/247af33f-21b7-4de7-21dd-dd2bbff00200/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/31b9da36-0f12-42ad-ae1d-820214eaf700/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ace96b93-0e94-4029-4726-9cf75f968c00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-deno`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  86% — ✓ 5932 / ✗ 941
     ✗ no graphql errors
      ↳  86% — ✓ 5932 / ✗ 941
     ✓ valid response structure

     checks.........................: 90.43% ✓ 17795     ✗ 1882  
     data_received..................: 521 MB 1.5 MB/s
     data_sent......................: 9.1 MB 27 kB/s
     http_req_blocked...............: avg=2.71ms min=2.2µs  med=5.3µs   max=455.71ms p(90)=739.94µs p(95)=6.98ms 
     http_req_connecting............: avg=2.59ms min=0s     med=0s      max=455.63ms p(90)=634µs    p(95)=6.03ms 
     http_req_duration..............: avg=34.25s min=1.64s  med=35.01s  max=1m0s     p(90)=1m0s     p(95)=1m0s   
       { expected_response:true }...: avg=30.17s min=1.64s  med=29.99s  max=59.97s   p(90)=54.4s    p(95)=56.67s 
     http_req_failed................: 13.69% ✓ 941       ✗ 5932  
     http_req_receiving.............: avg=2.2ms  min=0s     med=136.6µs max=681.61ms p(90)=943.36µs p(95)=10.09ms
     http_req_sending...............: avg=1.32ms min=11.8µs med=30.9µs  max=183.83ms p(90)=132.64µs p(95)=5.04ms 
     http_req_tls_handshaking.......: avg=0s     min=0s     med=0s      max=0s       p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=34.25s min=1.63s  med=35.01s  max=1m0s     p(90)=1m0s     p(95)=1m0s   
     http_reqs......................: 6873   20.214572/s
     iteration_duration.............: avg=34.29s min=1.78s  med=35.05s  max=1m0s     p(90)=1m0s     p(95)=1m0s   
     iterations.....................: 6872   20.211631/s
     vus............................: 5      min=0       max=1500
     vus_max........................: 1500   min=865     max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/649c1c4e-4f21-4a21-7b6e-30df5211a600/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9361df29-ed67-4d9a-6206-479461378000/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0b4f3869-00f1-4747-ebf2-4de5323f9100/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server-node16`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  74% — ✓ 6310 / ✗ 2174
     ✗ no graphql errors
      ↳  74% — ✓ 6310 / ✗ 2174
     ✓ valid response structure

     checks.........................: 81.32% ✓ 18929     ✗ 4348  
     data_received..................: 555 MB 1.6 MB/s
     data_sent......................: 11 MB  32 kB/s
     http_req_blocked...............: avg=4.25ms  min=2.4µs  med=6.3µs   max=684.15ms p(90)=1.59ms   p(95)=10.09ms
     http_req_connecting............: avg=4.11ms  min=0s     med=0s      max=684.07ms p(90)=1.25ms   p(95)=9.56ms 
     http_req_duration..............: avg=27.77s  min=1.37s  med=14.8s   max=1m0s     p(90)=1m0s     p(95)=1m0s   
       { expected_response:true }...: avg=16.67s  min=1.37s  med=10.08s  max=59.98s   p(90)=43.71s   p(95)=53.87s 
     http_req_failed................: 25.62% ✓ 2174      ✗ 6310  
     http_req_receiving.............: avg=880.5µs min=0s     med=112.7µs max=312.94ms p(90)=387.44µs p(95)=1ms    
     http_req_sending...............: avg=2.94ms  min=10.3µs med=34.5µs  max=604.05ms p(90)=181.59µs p(95)=12.93ms
     http_req_tls_handshaking.......: avg=0s      min=0s     med=0s      max=0s       p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=27.76s  min=1.37s  med=14.8s   max=1m0s     p(90)=1m0s     p(95)=1m0s   
     http_reqs......................: 8484   24.959943/s
     iteration_duration.............: avg=27.82s  min=1.38s  med=14.85s  max=1m0s     p(90)=1m0s     p(95)=1m0s   
     iterations.....................: 8483   24.957001/s
     vus............................: 4      min=0       max=1500
     vus_max........................: 1500   min=1367    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f1f5b10b-03d7-4b9d-a929-1f77fa9cee00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/559104f7-58c5-4fd1-5164-7062a0bbd700/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b727c122-cd80-4070-032e-71dbbfe65200/public" alt="HTTP Overview" />


  </details>