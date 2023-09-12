## Overview for: `fed-v1-ramping-vus`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. We are running a heavy load of concurrent VUs to measure response time and other stats, during stress. It measure things like memory usage, CPU usage, response times. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was trying to reach 350 concurrent VUs over 400s


### Comparison


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b4170492-a2ed-4eb0-4ae7-4830a23b8d00/public" alt="Comparison" />


| Gateway         | duration(p95)⬇️ |  RPS  |           Requests            |                       Durations                        | Notes                                                                                   |
| :-------------- | :-------------: | :---: | :---------------------------: | :----------------------------------------------------: | :-------------------------------------------------------------------------------------- |
| mercurius       |       0ms       | 3643  | 1457369 total, 1457160 failed |       avg: 6ms, p95: 0ms, max: 26348ms, med: 0ms       | ❌ 1457160 failed requests, 1457160 non-200 responses, 1457160 unexpected GraphQL errors |
| wundergraph     |       0ms       | 3654  | 1461984 total, 1461852 failed |       avg: 1ms, p95: 0ms, max: 3233ms, med: 0ms        | ❌ 1461852 failed requests, 1461852 non-200 responses, 1461852 unexpected GraphQL errors |
| apollo-router   |     2611ms      |  183  |     73776 total, 0 failed     |   avg: 1255ms, p95: 2612ms, max: 7650ms, med: 1076ms   | ✅                                                                                       |
| apollo-server   |     7447ms      |  65   |     26474 total, 0 failed     |  avg: 5302ms, p95: 7448ms, max: 10223ms, med: 5126ms   | ✅                                                                                       |
| mesh-bun        |     16499ms     |  96   |     30495 total, 0 failed     |  avg: 8108ms, p95: 16499ms, max: 43905ms, med: 7865ms  | ✅                                                                                       |
| mesh            |     18625ms     |  30   |   12625 total, 5617 failed    | avg: 11341ms, p95: 18626ms, max: 28979ms, med: 11981ms | ❌ 5617 failed requests, 5617 non-200 responses, 5617 unexpected GraphQL errors          |
| mesh-supergraph |     23409ms     |  83   |   26151 total, 1930 failed    |  avg: 9332ms, p95: 23409ms, max: 34464ms, med: 8140ms  | ❌ 1930 failed requests, 1930 non-200 responses, 1930 unexpected GraphQL errors          |



<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  0% — ✓ 209 / ✗ 1457160
     ✗ no graphql errors
      ↳  0% — ✓ 209 / ✗ 1457160
     ✓ valid response structure

     checks.........................: 0.02%   ✓ 627         ✗ 2914320
     data_received..................: 18 MB   46 kB/s
     data_sent......................: 681 kB  1.7 kB/s
     http_req_blocked...............: avg=1.4µs   min=0s       med=0s      max=55.59ms  p(90)=0s       p(95)=0s      
     http_req_connecting............: avg=1.28µs  min=0s       med=0s      max=47.6ms   p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=6.32ms  min=0s       med=0s      max=26.34s   p(90)=0s       p(95)=0s      
       { expected_response:true }...: avg=24.24s  min=22.02s   med=24.26s  max=26.27s   p(90)=25.87s   p(95)=26.08s  
     http_req_failed................: 99.98%  ✓ 1457160     ✗ 209    
     http_req_receiving.............: avg=17ns    min=0s       med=0s      max=491.22µs p(90)=0s       p(95)=0s      
     http_req_sending...............: avg=122ns   min=0s       med=0s      max=35.67ms  p(90)=0s       p(95)=0s      
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=6.32ms  min=0s       med=0s      max=26.34s   p(90)=0s       p(95)=0s      
     http_reqs......................: 1457369 3643.005066/s
     iteration_duration.............: avg=72.05ms min=210.11µs med=65.39ms max=26.43s   p(90)=135.06ms p(95)=164.07ms
     iterations.....................: 1457369 3643.005066/s
     vus............................: 350     min=350       max=350  
     vus_max........................: 350     min=350       max=350  
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8520f73e-e532-4d7f-ea6c-30d9871b8800/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4acf6653-15df-481a-5f49-099d2ca39900/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1210ea4b-ab40-40b9-5ada-9a5f7a08d800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  0% — ✓ 132 / ✗ 1461852
     ✗ no graphql errors
      ↳  0% — ✓ 132 / ✗ 1461852
     ✓ valid response structure

     checks.........................: 0.01%   ✓ 396         ✗ 2923704
     data_received..................: 12 MB   29 kB/s
     data_sent......................: 546 kB  1.4 kB/s
     http_req_blocked...............: avg=5.7µs    min=0s       med=0s     max=138.78ms p(90)=0s       p(95)=0s      
     http_req_connecting............: avg=5.32µs   min=0s       med=0s     max=136.03ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=733.15µs min=0s       med=0s     max=3.23s    p(90)=0s       p(95)=0s      
       { expected_response:true }...: avg=2.68s    min=2.28s    med=2.71s  max=3.23s    p(90)=2.95s    p(95)=3.15s   
     http_req_failed................: 99.99%  ✓ 1461852     ✗ 132    
     http_req_receiving.............: avg=1.63µs   min=0s       med=0s     max=432.94ms p(90)=0s       p(95)=0s      
     http_req_sending...............: avg=408ns    min=0s       med=0s     max=100.94ms p(90)=0s       p(95)=0s      
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=731.11µs min=0s       med=0s     max=3.22s    p(90)=0s       p(95)=0s      
     http_reqs......................: 1461984 3654.520144/s
     iteration_duration.............: avg=70.56ms  min=209.15µs med=68.5ms max=3.32s    p(90)=147.31ms p(95)=178.15ms
     iterations.....................: 1461984 3654.520144/s
     vus............................: 350     min=350       max=350  
     vus_max........................: 350     min=350       max=350  
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2767c683-34e0-4b1f-8c9d-80f0b296e800/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/285b9435-b5c1-4732-a2dd-317333daba00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/837af276-0ee7-44fa-859e-beb197c44900/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 221328     ✗ 0    
     data_received..................: 6.5 GB  16 MB/s
     data_sent......................: 88 MB   218 kB/s
     http_req_blocked...............: avg=576.1µs  min=1.31µs   med=3.17µs   max=2.28s p(90)=5.24µs  p(95)=6.31µs
     http_req_connecting............: avg=351.64µs min=0s       med=0s       max=2.28s p(90)=0s      p(95)=0s    
     http_req_duration..............: avg=1.25s    min=227.57ms med=1.07s    max=7.65s p(90)=2.16s   p(95)=2.61s 
       { expected_response:true }...: avg=1.25s    min=227.57ms med=1.07s    max=7.65s p(90)=2.16s   p(95)=2.61s 
     http_req_failed................: 0.00%   ✓ 0          ✗ 73776
     http_req_receiving.............: avg=326.49ms min=25.54µs  med=81.49µs  max=6.79s p(90)=1.26s   p(95)=1.76s 
     http_req_sending...............: avg=18.42ms  min=6.91µs   med=14.47µs  max=5.25s p(90)=37.62µs p(95)=1.2ms 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s    p(90)=0s      p(95)=0s    
     http_req_waiting...............: avg=910.47ms min=224.03ms med=835.07ms max=3.06s p(90)=1.38s   p(95)=1.52s 
     http_reqs......................: 73776   183.974047/s
     iteration_duration.............: avg=1.89s    min=244.91ms med=1.63s    max=9.47s p(90)=3.47s   p(95)=4.17s 
     iterations.....................: 73776   183.974047/s
     vus............................: 2       min=2        max=350
     vus_max........................: 350     min=350      max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/36d4baaf-f00b-42e0-7cc7-2a1758c08a00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/64620be1-ea33-4ad0-9a41-25e136d9d400/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4002ee78-c202-41c9-fccf-11387bec0e00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 79422     ✗ 0    
     data_received..................: 2.3 GB  5.8 MB/s
     data_sent......................: 31 MB   78 kB/s
     http_req_blocked...............: avg=70.41µs  min=1.27µs  med=2.9µs   max=179.56ms p(90)=4.74µs  p(95)=5.72µs  
     http_req_connecting............: avg=57.29µs  min=0s      med=0s      max=18.3ms   p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=5.3s     min=2.74s   med=5.12s   max=10.22s   p(90)=6.86s   p(95)=7.44s   
       { expected_response:true }...: avg=5.3s     min=2.74s   med=5.12s   max=10.22s   p(90)=6.86s   p(95)=7.44s   
     http_req_failed................: 0.00%   ✓ 0         ✗ 26474
     http_req_receiving.............: avg=1.07ms   min=36.34µs med=88.96µs max=715.19ms p(90)=150.9µs p(95)=542.08µs
     http_req_sending...............: avg=128.29µs min=8.25µs  med=15.3µs  max=442.24ms p(90)=30.01µs p(95)=43.9µs  
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=5.3s     min=2.74s   med=5.12s   max=10.22s   p(90)=6.86s   p(95)=7.44s   
     http_reqs......................: 26474   65.536648/s
     iteration_duration.............: avg=5.31s    min=2.75s   med=5.14s   max=10.33s   p(90)=6.89s   p(95)=7.48s   
     iterations.....................: 26474   65.536648/s
     vus............................: 2       min=2       max=350
     vus_max........................: 350     min=350     max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d9460729-c988-4bf7-1ad8-268f2f1fa300/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4087fa09-7298-4bc1-edbe-03005a85a900/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e39f7da0-3cee-4c5f-c978-f6a766ac0700/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 91485     ✗ 0     
     data_received..................: 2.7 GB  8.4 MB/s
     data_sent......................: 36 MB   114 kB/s
     http_req_blocked...............: avg=1.2ms   min=1.33µs   med=3µs     max=611.98ms p(90)=5.72µs  p(95)=92.02µs 
     http_req_connecting............: avg=1.15ms  min=0s       med=0s      max=611.93ms p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=8.1s    min=135.03ms med=7.86s   max=43.9s    p(90)=14.01s  p(95)=16.49s  
       { expected_response:true }...: avg=8.1s    min=135.03ms med=7.86s   max=43.9s    p(90)=14.01s  p(95)=16.49s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 30495 
     http_req_receiving.............: avg=97.11ms min=29.46µs  med=90.68µs max=12.35s   p(90)=1.15ms  p(95)=272.35ms
     http_req_sending...............: avg=2.01ms  min=7.52µs   med=13.73µs max=772.31ms p(90)=45.35µs p(95)=131.85µs
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s      max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=8s      min=134.86ms med=7.74s   max=43.9s    p(90)=13.35s  p(95)=16.45s  
     http_reqs......................: 30495   96.161761/s
     iteration_duration.............: avg=8.16s   min=144.47ms med=7.89s   max=43.91s   p(90)=14.05s  p(95)=16.51s  
     iterations.....................: 30495   96.161761/s
     vus............................: 55      min=52      max=1499
     vus_max........................: 1500    min=1500    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4ccf5c4f-9b54-4d61-de3f-3e495cee3a00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f67dcc8e-152d-4339-7790-a25565560900/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/77e32d91-ce08-4e18-8f92-92ad9f027700/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  55% — ✓ 7008 / ✗ 5617
     ✗ no graphql errors
      ↳  55% — ✓ 7008 / ✗ 5617
     ✓ valid response structure

     checks.........................: 65.17% ✓ 21024     ✗ 11234
     data_received..................: 615 MB 1.5 MB/s
     data_sent......................: 15 MB  36 kB/s
     http_req_blocked...............: avg=1.4ms   min=1.39µs  med=6.35µs  max=46.34ms p(90)=4.01ms   p(95)=7.98ms  
     http_req_connecting............: avg=1.34ms  min=0s      med=0s      max=46.18ms p(90)=3.82ms   p(95)=7.78ms  
     http_req_duration..............: avg=11.34s  min=0s      med=11.98s  max=28.97s  p(90)=16.62s   p(95)=18.62s  
       { expected_response:true }...: avg=12.19s  min=3.51s   med=12.21s  max=28.97s  p(90)=16.77s   p(95)=18.73s  
     http_req_failed................: 44.49% ✓ 5617      ✗ 7008 
     http_req_receiving.............: avg=2.12ms  min=0s      med=83.71µs max=2.3s    p(90)=337.73µs p(95)=1.02ms  
     http_req_sending...............: avg=293.6µs min=0s      med=30.74µs max=43.24ms p(90)=402.12µs p(95)=943.01µs
     http_req_tls_handshaking.......: avg=0s      min=0s      med=0s      max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=11.33s  min=0s      med=11.97s  max=28.9s   p(90)=16.62s   p(95)=18.62s  
     http_reqs......................: 12625  30.488101/s
     iteration_duration.............: avg=11.36s  min=12.66ms med=12s     max=29s     p(90)=16.64s   p(95)=18.64s  
     iterations.....................: 12625  30.488101/s
     vus............................: 8      min=8       max=350
     vus_max........................: 350    min=350     max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/91818762-fdd1-4316-6e26-e9159aec9900/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ada8fbcc-6445-4177-5986-c5f49e1ec500/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d614e95b-57eb-4dea-53ce-b00424822a00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  92% — ✓ 24221 / ✗ 1930
     ✗ no graphql errors
      ↳  92% — ✓ 24221 / ✗ 1930
     ✓ valid response structure

     checks.........................: 94.95% ✓ 72663     ✗ 3860  
     data_received..................: 2.1 GB 6.8 MB/s
     data_sent......................: 31 MB  99 kB/s
     http_req_blocked...............: avg=3.43ms min=1.3µs    med=4.35µs  max=530.15ms p(90)=167.42µs p(95)=5.22ms  
     http_req_connecting............: avg=3.35ms min=0s       med=0s      max=530.08ms p(90)=112.34µs p(95)=4.9ms   
     http_req_duration..............: avg=9.33s  min=24.17ms  med=8.14s   max=34.46s   p(90)=19.29s   p(95)=23.4s   
       { expected_response:true }...: avg=8.95s  min=24.8ms   med=7.89s   max=34.46s   p(90)=18.37s   p(95)=21.1s   
     http_req_failed................: 7.38%  ✓ 1930      ✗ 24221 
     http_req_receiving.............: avg=6.26ms min=0s       med=85.86µs max=1.23s    p(90)=905.67µs p(95)=9.74ms  
     http_req_sending...............: avg=1.9ms  min=8.14µs   med=21.09µs max=748.16ms p(90)=75.03µs  p(95)=642.24µs
     http_req_tls_handshaking.......: avg=0s     min=0s       med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=9.32s  min=111.22µs med=8.12s   max=34.46s   p(90)=19.27s   p(95)=23.4s   
     http_reqs......................: 26151  83.726588/s
     iteration_duration.............: avg=9.42s  min=35.06ms  med=8.22s   max=34.47s   p(90)=19.41s   p(95)=23.63s  
     iterations.....................: 26151  83.726588/s
     vus............................: 677    min=52      max=1497
     vus_max........................: 1500   min=1500    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/016f840d-3334-4768-7cb8-a59b91efb000/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9f49597f-236b-43f2-4250-10b5d2713000/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d4be1eb0-e3a2-4b53-b295-89280deb8500/public" alt="HTTP Overview" />


  </details>