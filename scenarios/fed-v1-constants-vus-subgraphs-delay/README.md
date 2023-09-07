## Overview for: `scenarios/fed-v1-constants-vus-subgraphs-delay`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. All subgraphs have an intentional delay on replying, and this creates additional pressure on the gateway's memory. We are running a heavy load of concurrent VUs to measure response time and other stats, during stress. It measure things like memory usage, CPU usage, response times.


This scenario was running 350 VUs over 400s


### Comparison


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/bdefa114-05fb-436f-ecbd-66510806be00/public" alt="Comparison" />


| Gateway              | RPS ⬇️ |        Requests        |          Duration          |
| :------------------- | :----: | :--------------------: | :------------------------: |
| wundergraph          |  1239  | 496086 total, 0 failed |   avg: 232ms, p95: 462ms   |
| mesh                 |  317   | 126976 total, 0 failed |  avg: 1101ms, p95: 1340ms  |
| mesh-bun             |  286   | 114667 total, 0 failed |  avg: 1217ms, p95: 1777ms  |
| apollo-router        |   43   | 17748 total, 0 failed  | avg: 7924ms, p95: 10696ms  |
| mesh-supergraph      |   42   | 17160 total, 0 failed  |  avg: 8195ms, p95: 8846ms  |
| apollo-server        |   34   | 14108 total, 0 failed  | avg: 9960ms, p95: 14550ms  |
| apollo-server-node16 |   21   |  8996 total, 0 failed  | avg: 15715ms, p95: 22768ms |
| mercurius            |   7    | 3134 total, 972 failed | avg: 44847ms, p95: 60001ms |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 496086

     checks.........................: 66.66% ✓ 992172      ✗ 496086
     data_received..................: 72 MB  180 kB/s
     data_sent......................: 589 MB 1.5 MB/s
     http_req_blocked...............: avg=89.77µs  min=900ns    med=2.1µs    max=543.31ms p(90)=3.2µs    p(95)=4µs     
     http_req_connecting............: avg=80.74µs  min=0s       med=0s       max=543.24ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=232.42ms min=277.69µs med=217.72ms max=1.57s    p(90)=398.32ms p(95)=462.15ms
       { expected_response:true }...: avg=232.42ms min=277.69µs med=217.72ms max=1.57s    p(90)=398.32ms p(95)=462.15ms
     http_req_failed................: 0.00%  ✓ 0           ✗ 496086
     http_req_receiving.............: avg=19.68ms  min=8.1µs    med=21µs     max=1.22s    p(90)=31.28ms  p(95)=132.22ms
     http_req_sending...............: avg=1.7ms    min=5.6µs    med=11.2µs   max=1.19s    p(90)=100.79µs p(95)=257.17µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=211.04ms min=245.89µs med=210.03ms max=765.22ms p(90)=352.45ms p(95)=387.66ms
     http_reqs......................: 496086 1239.640069/s
     iteration_duration.............: avg=281.77ms min=767.29µs med=253.01ms max=1.97s    p(90)=483.72ms p(95)=587.3ms 
     iterations.....................: 496086 1239.640069/s
     vus............................: 350    min=350       max=350 
     vus_max........................: 350    min=350       max=350 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ec797c16-1590-41c5-15f8-7b63afff0000/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/58fb9159-a685-462c-6461-8396eb025f00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/05fedb7f-6d9d-4c5a-8a73-b397866bba00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 126976

     checks.........................: 66.66% ✓ 253952     ✗ 126976
     data_received..................: 144 MB 359 kB/s
     data_sent......................: 151 MB 377 kB/s
     http_req_blocked...............: avg=129.59µs min=1µs      med=2.1µs  max=92.16ms  p(90)=3.3µs   p(95)=4µs     
     http_req_connecting............: avg=122.32µs min=0s       med=0s     max=80.99ms  p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=1.1s     min=266.92ms med=1.08s  max=2.82s    p(90)=1.27s   p(95)=1.33s   
       { expected_response:true }...: avg=1.1s     min=266.92ms med=1.08s  max=2.82s    p(90)=1.27s   p(95)=1.33s   
     http_req_failed................: 0.00%  ✓ 0          ✗ 126976
     http_req_receiving.............: avg=3.37ms   min=11µs     med=23.9µs max=373.59ms p(90)=271.1µs p(95)=10.28ms 
     http_req_sending...............: avg=758.56µs min=5.9µs    med=11.3µs max=341.7ms  p(90)=90.9µs  p(95)=238.47µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=1.09s    min=239.95ms med=1.08s  max=2.78s    p(90)=1.26s   p(95)=1.33s   
     http_reqs......................: 126976 317.172041/s
     iteration_duration.............: avg=1.1s     min=268.5ms  med=1.09s  max=2.87s    p(90)=1.27s   p(95)=1.34s   
     iterations.....................: 126976 317.172041/s
     vus............................: 350    min=350      max=350 
     vus_max........................: 350    min=350      max=350 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c91f3969-6e0a-4613-219f-db54d2fdcd00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/bbadadc7-43c4-4e00-5a2c-bb54b0237000/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2d2047f2-622a-4445-ce99-12ee960efe00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  0% — ✓ 0 / ✗ 114667
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 114667

     checks.........................: 33.33% ✓ 114667     ✗ 229334
     data_received..................: 109 MB 272 kB/s
     data_sent......................: 136 MB 340 kB/s
     http_req_blocked...............: avg=270.4µs  min=1.2µs    med=2.5µs  max=133.61ms p(90)=4µs     p(95)=6µs    
     http_req_connecting............: avg=260.57µs min=0s       med=0s     max=133.42ms p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=1.21s    min=378.76ms med=1.28s  max=3.46s    p(90)=1.67s   p(95)=1.77s  
       { expected_response:true }...: avg=1.21s    min=378.76ms med=1.28s  max=3.46s    p(90)=1.67s   p(95)=1.77s  
     http_req_failed................: 0.00%  ✓ 0          ✗ 114667
     http_req_receiving.............: avg=3.84ms   min=13.5µs   med=33.6µs max=592.54ms p(90)=375.4µs p(95)=4.96ms 
     http_req_sending...............: avg=1.95ms   min=9.1µs    med=15.5µs max=736.4ms  p(90)=140.2µs p(95)=809.4µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=1.21s    min=378.71ms med=1.28s  max=3.46s    p(90)=1.66s   p(95)=1.76s  
     http_reqs......................: 114667 286.068193/s
     iteration_duration.............: avg=1.22s    min=379.47ms med=1.29s  max=3.58s    p(90)=1.68s   p(95)=1.78s  
     iterations.....................: 114667 286.068193/s
     vus............................: 138    min=138      max=350 
     vus_max........................: 350    min=350      max=350 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/80a232f0-a2de-4a8a-1cda-f09c452ad900/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/adcf8e4f-00db-452f-dcbd-689b65578d00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0ceb2919-bd36-481b-855e-9591dcbb4800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 53244     ✗ 0    
     data_received..................: 1.6 GB  3.8 MB/s
     data_sent......................: 21 MB   52 kB/s
     http_req_blocked...............: avg=1.14ms   min=2µs    med=4.7µs   max=127.46ms p(90)=6.5µs    p(95)=7.6µs   
     http_req_connecting............: avg=1.11ms   min=0s     med=0s      max=127.28ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=7.92s    min=1.48s  med=7.86s   max=15.34s   p(90)=10.03s   p(95)=10.69s  
       { expected_response:true }...: avg=7.92s    min=1.48s  med=7.86s   max=15.34s   p(90)=10.03s   p(95)=10.69s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 17748
     http_req_receiving.............: avg=629.95µs min=60.2µs med=115.4µs max=214.64ms p(90)=348.53µs p(95)=498.27µs
     http_req_sending...............: avg=713.19µs min=9.8µs  med=28µs    max=257.12ms p(90)=49.7µs   p(95)=2.42ms  
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=7.92s    min=1.47s  med=7.86s   max=15.34s   p(90)=10.02s   p(95)=10.69s  
     http_reqs......................: 17748   43.786933/s
     iteration_duration.............: avg=7.94s    min=1.49s  med=7.89s   max=15.36s   p(90)=10.05s   p(95)=10.71s  
     iterations.....................: 17748   43.786933/s
     vus............................: 64      min=64      max=350
     vus_max........................: 350     min=350     max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5150c14e-461b-4545-7a0b-d72f85eb9200/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a05edd00-0ce2-4c63-038d-86bd3f7df100/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6c725cf7-6062-4884-eda0-d11c1f4dad00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 17160

     checks.........................: 66.66% ✓ 34320    ✗ 17160
     data_received..................: 1.5 GB 3.7 MB/s
     data_sent......................: 20 MB  50 kB/s
     http_req_blocked...............: avg=213.67µs min=1.5µs  med=2.6µs    max=57.73ms p(90)=3.7µs    p(95)=8.5µs 
     http_req_connecting............: avg=197.7µs  min=0s     med=0s       max=32.4ms  p(90)=0s       p(95)=0s    
     http_req_duration..............: avg=8.19s    min=4.03s  med=8.16s    max=12.07s  p(90)=8.67s    p(95)=8.84s 
       { expected_response:true }...: avg=8.19s    min=4.03s  med=8.16s    max=12.07s  p(90)=8.67s    p(95)=8.84s 
     http_req_failed................: 0.00%  ✓ 0        ✗ 17160
     http_req_receiving.............: avg=483.8µs  min=41.6µs med=101.39µs max=1.66s   p(90)=284.79µs p(95)=340µs 
     http_req_sending...............: avg=122.34µs min=7.1µs  med=15.5µs   max=73.3ms  p(90)=28.4µs   p(95)=35.4µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s       max=0s      p(90)=0s       p(95)=0s    
     http_req_waiting...............: avg=8.19s    min=4.03s  med=8.16s    max=12.04s  p(90)=8.66s    p(95)=8.84s 
     http_reqs......................: 17160  42.48592/s
     iteration_duration.............: avg=8.19s    min=4.04s  med=8.17s    max=12.09s  p(90)=8.67s    p(95)=8.84s 
     iterations.....................: 17160  42.48592/s
     vus............................: 4      min=4      max=350
     vus_max........................: 350    min=350    max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/54bd070f-2d11-4918-0295-6d2e76b68e00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3ab337a7-2c70-4f5d-c363-717044f6dc00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/048c1ed7-d892-4253-b327-fe36652b3400/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 42324     ✗ 0    
     data_received..................: 1.2 GB  3.1 MB/s
     data_sent......................: 17 MB   41 kB/s
     http_req_blocked...............: avg=427.91µs min=1.7µs  med=3.5µs  max=43.83ms  p(90)=5.2µs    p(95)=6.6µs 
     http_req_connecting............: avg=412.93µs min=0s     med=0s     max=43.69ms  p(90)=0s       p(95)=0s    
     http_req_duration..............: avg=9.96s    min=4.43s  med=9.49s  max=23.68s   p(90)=13.28s   p(95)=14.55s
       { expected_response:true }...: avg=9.96s    min=4.43s  med=9.49s  max=23.68s   p(90)=13.28s   p(95)=14.55s
     http_req_failed................: 0.00%   ✓ 0         ✗ 14108
     http_req_receiving.............: avg=4.9ms    min=53.4µs med=94µs   max=589.32ms p(90)=606.43µs p(95)=6.6ms 
     http_req_sending...............: avg=1.88ms   min=8.2µs  med=16.4µs max=484.12ms p(90)=104.36µs p(95)=6.78ms
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s       p(95)=0s    
     http_req_waiting...............: avg=9.95s    min=4.43s  med=9.48s  max=23.68s   p(90)=13.25s   p(95)=14.54s
     http_reqs......................: 14108   34.710069/s
     iteration_duration.............: avg=10.01s   min=4.44s  med=9.54s  max=24.22s   p(90)=13.38s   p(95)=14.61s
     iterations.....................: 14108   34.710069/s
     vus............................: 52      min=52      max=350
     vus_max........................: 350     min=350     max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6c084dee-dac0-44d7-9c5c-2d56b8056a00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3309aae4-a3fc-4121-ac2c-9b222e7e9e00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6b4fa95a-6f8c-4652-2010-271c00775b00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server-node16`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 26988     ✗ 0    
     data_received..................: 791 MB  1.9 MB/s
     data_sent......................: 11 MB   26 kB/s
     http_req_blocked...............: avg=5.45ms min=2.1µs  med=4.5µs   max=264.06ms p(90)=8µs     p(95)=22.7µs 
     http_req_connecting............: avg=5.32ms min=0s     med=0s      max=239.19ms p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=15.71s min=7.32s  med=15.18s  max=33.69s   p(90)=21.3s   p(95)=22.76s 
       { expected_response:true }...: avg=15.71s min=7.32s  med=15.18s  max=33.69s   p(90)=21.3s   p(95)=22.76s 
     http_req_failed................: 0.00%   ✓ 0         ✗ 8996 
     http_req_receiving.............: avg=7.13ms min=66.3µs med=137.4µs max=602.67ms p(90)=1.38ms  p(95)=9.7ms  
     http_req_sending...............: avg=2.69ms min=9.7µs  med=26.1µs  max=264.28ms p(90)=212.5µs p(95)=15.86ms
     http_req_tls_handshaking.......: avg=0s     min=0s     med=0s      max=0s       p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=15.7s  min=7.32s  med=15.18s  max=33.69s   p(90)=21.3s   p(95)=22.73s 
     http_reqs......................: 8996    21.923285/s
     iteration_duration.............: avg=15.78s min=7.37s  med=15.22s  max=33.71s   p(90)=21.38s  p(95)=22.93s 
     iterations.....................: 8996    21.923285/s
     vus............................: 55      min=55      max=350
     vus_max........................: 350     min=350     max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7f943cc1-fa0b-43f4-bc60-7f5379b76c00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e3dbd991-54de-4100-6b5a-be1a0e4c4f00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/54408ec8-7bb0-414f-f437-efd74fa4c800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  68% — ✓ 2162 / ✗ 972
     ✗ no graphql errors
      ↳  68% — ✓ 2162 / ✗ 972
     ✓ valid response structure

     checks.........................: 76.93% ✓ 6486     ✗ 1944 
     data_received..................: 190 MB 441 kB/s
     data_sent......................: 3.9 MB 9.1 kB/s
     http_req_blocked...............: avg=2.27ms   min=2.1µs  med=5.7µs    max=58.82ms p(90)=4.24ms   p(95)=18.19ms 
     http_req_connecting............: avg=2.23ms   min=0s     med=0s       max=58.79ms p(90)=4.08ms   p(95)=18.03ms 
     http_req_duration..............: avg=44.84s   min=10.41s med=45.33s   max=1m0s    p(90)=1m0s     p(95)=1m0s    
       { expected_response:true }...: avg=38.03s   min=10.41s med=37.95s   max=59.99s  p(90)=55.36s   p(95)=56s     
     http_req_failed................: 31.01% ✓ 972      ✗ 2162 
     http_req_receiving.............: avg=240.26µs min=0s     med=127.05µs max=88.14ms p(90)=329.04µs p(95)=463.11µs
     http_req_sending...............: avg=288.32µs min=13.3µs med=34µs     max=21.78ms p(90)=430.99µs p(95)=1.97ms  
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s       max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=44.84s   min=10.41s med=45.33s   max=1m0s    p(90)=1m0s     p(95)=1m0s    
     http_reqs......................: 3134   7.288256/s
     iteration_duration.............: avg=44.85s   min=10.42s med=45.34s   max=1m0s    p(90)=1m0s     p(95)=1m0s    
     iterations.....................: 3134   7.288256/s
     vus............................: 165    min=165    max=350
     vus_max........................: 350    min=350    max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4b76540a-3f3b-437e-6f17-00142dd81700/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3fbea745-03a6-44e3-2cad-8ee652016400/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7ae6cb1b-bfde-4396-406c-3cbacd10b500/public" alt="HTTP Overview" />


  </details>