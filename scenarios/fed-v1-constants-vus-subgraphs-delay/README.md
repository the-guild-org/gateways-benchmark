## Overview for: `scenarios/fed-v1-constants-vus-subgraphs-delay`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. All subgraphs have an intentional delay on replying, and this creates additional pressure on the gateway's memory. We are running a heavy load of concurrent VUs to measure response time and other stats, during stress. It measure things like memory usage, CPU usage, response times.


This scenario was running 350 VUs over 400s


### Comparison


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ee6a5fcd-9c29-49a5-ec64-990b298dba00/public" alt="Comparison" />


| Gateway              | RPS ⬇️ |        Requests         |          Duration          |
| :------------------- | :----: | :---------------------: | :------------------------: |
| wundergraph          |  1237  | 495039 total, 0 failed  |   avg: 233ms, p95: 463ms   |
| mesh-bun             |  480   | 192327 total, 0 failed  |  avg: 726ms, p95: 1039ms   |
| mesh                 |  274   | 110082 total, 0 failed  |  avg: 1271ms, p95: 1571ms  |
| apollo-router        |   42   |  17357 total, 0 failed  | avg: 8104ms, p95: 12283ms  |
| apollo-server-node16 |   39   |  16075 total, 0 failed  | avg: 8751ms, p95: 13341ms  |
| mesh-supergraph      |   32   |  13098 total, 0 failed  | avg: 10791ms, p95: 11682ms |
| apollo-server        |   24   |  10159 total, 0 failed  | avg: 13893ms, p95: 20090ms |
| mercurius            |   6    | 2941 total, 1149 failed | avg: 47807ms, p95: 60001ms |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 495039

     checks.........................: 66.66% ✓ 990078      ✗ 495039
     data_received..................: 72 MB  179 kB/s
     data_sent......................: 588 MB 1.5 MB/s
     http_req_blocked...............: avg=117.78µs min=900ns   med=2µs      max=655.93ms p(90)=3.1µs    p(95)=3.8µs   
     http_req_connecting............: avg=109.52µs min=0s      med=0s       max=655.88ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=233.48ms min=267.6µs med=218.96ms max=1.53s    p(90)=402.38ms p(95)=463.29ms
       { expected_response:true }...: avg=233.48ms min=267.6µs med=218.96ms max=1.53s    p(90)=402.38ms p(95)=463.29ms
     http_req_failed................: 0.00%  ✓ 0           ✗ 495039
     http_req_receiving.............: avg=18.49ms  min=8.2µs   med=21.3µs   max=1.36s    p(90)=22.45ms  p(95)=135.13ms
     http_req_sending...............: avg=1.8ms    min=5.3µs   med=11.4µs   max=1.28s    p(90)=100.1µs  p(95)=285.8µs 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=213.18ms min=243.8µs med=211.7ms  max=741.19ms p(90)=353.55ms p(95)=391.85ms
     http_reqs......................: 495039 1237.198505/s
     iteration_duration.............: avg=282.4ms  min=703.5µs med=254.11ms max=1.86s    p(90)=483.95ms p(95)=584.45ms
     iterations.....................: 495039 1237.198505/s
     vus............................: 332    min=332       max=350 
     vus_max........................: 350    min=350       max=350 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/38c3cbf1-c37d-4ded-8bca-b32f8505c400/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d75b4e1c-4d20-4a6c-ea57-f14011968d00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a3b3ce55-150f-4536-0f46-b1432f80fc00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  0% — ✓ 0 / ✗ 192327
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 192327

     checks.........................: 33.33% ✓ 192327     ✗ 384654
     data_received..................: 183 MB 457 kB/s
     data_sent......................: 228 MB 570 kB/s
     http_req_blocked...............: avg=77.11µs  min=900ns    med=1.8µs    max=295.52ms p(90)=3µs      p(95)=3.6µs   
     http_req_connecting............: avg=67.86µs  min=0s       med=0s       max=57.19ms  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=725.69ms min=184.74ms med=757.52ms max=1.94s    p(90)=962.67ms p(95)=1.03s   
       { expected_response:true }...: avg=725.69ms min=184.74ms med=757.52ms max=1.94s    p(90)=962.67ms p(95)=1.03s   
     http_req_failed................: 0.00%  ✓ 0          ✗ 192327
     http_req_receiving.............: avg=4.55ms   min=10µs     med=20.1µs   max=651.14ms p(90)=600.09µs p(95)=23.79ms 
     http_req_sending...............: avg=983.27µs min=5.8µs    med=10µs     max=575.76ms p(90)=90.2µs   p(95)=130.39µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=720.15ms min=184.72ms med=751.39ms max=1.86s    p(90)=956.37ms p(95)=1.02s   
     http_reqs......................: 192327 480.246743/s
     iteration_duration.............: avg=728.34ms min=185.47ms med=759.38ms max=2s       p(90)=966.04ms p(95)=1.04s   
     iterations.....................: 192327 480.246743/s
     vus............................: 350    min=350      max=350 
     vus_max........................: 350    min=350      max=350 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c542cdb9-57e8-4a0e-ca4c-e87c86a8eb00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5dcd6d27-3364-452a-5aa9-1035f5a59e00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/387586e2-d21a-4736-de0f-6f00efc10300/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 110082

     checks.........................: 66.66% ✓ 220164     ✗ 110082
     data_received..................: 125 MB 311 kB/s
     data_sent......................: 131 MB 326 kB/s
     http_req_blocked...............: avg=121.32µs min=1.2µs    med=2.6µs  max=88.36ms  p(90)=4µs      p(95)=4.8µs   
     http_req_connecting............: avg=110.55µs min=0s       med=0s     max=56.79ms  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=1.27s    min=508.79ms med=1.25s  max=3s       p(90)=1.49s    p(95)=1.57s   
       { expected_response:true }...: avg=1.27s    min=508.79ms med=1.25s  max=3s       p(90)=1.49s    p(95)=1.57s   
     http_req_failed................: 0.00%  ✓ 0          ✗ 110082
     http_req_receiving.............: avg=4.7ms    min=11.7µs   med=36.9µs max=365.27ms p(90)=741.49µs p(95)=21.94ms 
     http_req_sending...............: avg=845.55µs min=7.1µs    med=13.4µs max=460.83ms p(90)=102.2µs  p(95)=340.48µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=1.26s    min=508.76ms med=1.24s  max=3s       p(90)=1.48s    p(95)=1.56s   
     http_reqs......................: 110082 274.721546/s
     iteration_duration.............: avg=1.27s    min=515.59ms med=1.25s  max=3.06s    p(90)=1.49s    p(95)=1.57s   
     iterations.....................: 110082 274.721546/s
     vus............................: 350    min=350      max=350 
     vus_max........................: 350    min=350      max=350 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/353a7301-ffd6-42de-f1f3-5fe8379d7100/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/69db182f-fc91-42e6-01b0-068ad37bb800/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e8273b08-d720-419c-7010-35b8a39b8800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 52071    ✗ 0    
     data_received..................: 1.5 GB  3.8 MB/s
     data_sent......................: 21 MB   51 kB/s
     http_req_blocked...............: avg=2.86ms   min=1.8µs  med=5µs     max=284.6ms  p(90)=7.2µs    p(95)=8.6µs   
     http_req_connecting............: avg=2.79ms   min=0s     med=0s      max=279.27ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=8.1s     min=1.13s  med=8.19s   max=20.1s    p(90)=11.24s   p(95)=12.28s  
       { expected_response:true }...: avg=8.1s     min=1.13s  med=8.19s   max=20.1s    p(90)=11.24s   p(95)=12.28s  
     http_req_failed................: 0.00%   ✓ 0        ✗ 17357
     http_req_receiving.............: avg=836.54µs min=56.7µs med=119.8µs max=423ms    p(90)=340.14µs p(95)=504.81µs
     http_req_sending...............: avg=953.32µs min=8.6µs  med=27.5µs  max=169.71ms p(90)=45.2µs   p(95)=2.78ms  
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=8.1s     min=1.13s  med=8.19s   max=20.1s    p(90)=11.24s   p(95)=12.28s  
     http_reqs......................: 17357   42.81355/s
     iteration_duration.............: avg=8.12s    min=1.15s  med=8.21s   max=20.12s   p(90)=11.27s   p(95)=12.3s   
     iterations.....................: 17357   42.81355/s
     vus............................: 91      min=91     max=350
     vus_max........................: 350     min=350    max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e02f81d0-17d5-4692-65a5-71cee86b1c00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ce57de07-9f45-4b4a-6303-dd204737a200/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c347eb7d-f22f-4015-3c6b-7f3cf3638500/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server-node16`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 48225     ✗ 0    
     data_received..................: 1.4 GB  3.5 MB/s
     data_sent......................: 19 MB   47 kB/s
     http_req_blocked...............: avg=1.24ms min=1.2µs    med=3.1µs   max=149ms    p(90)=4.45µs   p(95)=5.3µs  
     http_req_connecting............: avg=1.03ms min=0s       med=0s      max=83.53ms  p(90)=0s       p(95)=0s     
     http_req_duration..............: avg=8.75s  min=593.44ms med=8.29s   max=18.85s   p(90)=12.06s   p(95)=13.34s 
       { expected_response:true }...: avg=8.75s  min=593.44ms med=8.29s   max=18.85s   p(90)=12.06s   p(95)=13.34s 
     http_req_failed................: 0.00%   ✓ 0         ✗ 16075
     http_req_receiving.............: avg=6.83ms min=43.1µs   med=81.69µs max=849.95ms p(90)=510.06µs p(95)=8.34ms 
     http_req_sending...............: avg=2.35ms min=6.59µs   med=16.89µs max=664.95ms p(90)=74.94µs  p(95)=10.04ms
     http_req_tls_handshaking.......: avg=0s     min=0s       med=0s      max=0s       p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=8.74s  min=593.26ms med=8.29s   max=18.85s   p(90)=12.05s   p(95)=13.33s 
     http_reqs......................: 16075   39.545447/s
     iteration_duration.............: avg=8.79s  min=600.64ms med=8.32s   max=18.96s   p(90)=12.15s   p(95)=13.43s 
     iterations.....................: 16075   39.545447/s
     vus............................: 68      min=68      max=350
     vus_max........................: 350     min=350     max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d3c94da7-106c-442b-1a88-e38d57c06200/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8261e96e-08ab-4315-621d-d093af5ed800/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c7f3b395-9243-423f-06bc-c0595e1dcc00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 13098

     checks.........................: 66.66% ✓ 26196     ✗ 13098
     data_received..................: 1.2 GB 2.8 MB/s
     data_sent......................: 16 MB  38 kB/s
     http_req_blocked...............: avg=951.72µs min=2.2µs  med=3.6µs    max=60.35ms p(90)=5.4µs    p(95)=14.8µs  
     http_req_connecting............: avg=932.61µs min=0s     med=0s       max=60.3ms  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=10.79s   min=6.93s  med=10.77s   max=15.18s  p(90)=11.43s   p(95)=11.68s  
       { expected_response:true }...: avg=10.79s   min=6.93s  med=10.77s   max=15.18s  p(90)=11.43s   p(95)=11.68s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 13098
     http_req_receiving.............: avg=893.49µs min=68.1µs med=164.61µs max=1.61s   p(90)=435.15µs p(95)=567.08µs
     http_req_sending...............: avg=165.09µs min=12.3µs med=21.9µs   max=61.39ms p(90)=38.6µs   p(95)=54.8µs  
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s       max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=10.78s   min=6.93s  med=10.76s   max=15.18s  p(90)=11.43s   p(95)=11.68s  
     http_reqs......................: 13098  32.186222/s
     iteration_duration.............: avg=10.79s   min=6.93s  med=10.77s   max=15.22s  p(90)=11.43s   p(95)=11.68s  
     iterations.....................: 13098  32.186222/s
     vus............................: 21     min=21      max=350
     vus_max........................: 350    min=350     max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ab98934a-1b22-4f10-0ff2-69f15178f600/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9503b891-acf2-42fc-248c-ef2e78fe1e00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/af8202f8-d104-4c20-e17f-19a329597f00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 30477     ✗ 0    
     data_received..................: 893 MB  2.2 MB/s
     data_sent......................: 12 MB   30 kB/s
     http_req_blocked...............: avg=3ms    min=2.2µs  med=4.2µs   max=326.2ms  p(90)=7.1µs    p(95)=21.2µs 
     http_req_connecting............: avg=2.91ms min=0s     med=0s      max=170.47ms p(90)=0s       p(95)=0s     
     http_req_duration..............: avg=13.89s min=6.95s  med=12.98s  max=29.13s   p(90)=18.87s   p(95)=20.09s 
       { expected_response:true }...: avg=13.89s min=6.95s  med=12.98s  max=29.13s   p(90)=18.87s   p(95)=20.09s 
     http_req_failed................: 0.00%   ✓ 0         ✗ 10159
     http_req_receiving.............: avg=6.26ms min=67.9µs med=132.5µs max=715.72ms p(90)=839.04µs p(95)=6.76ms 
     http_req_sending...............: avg=2.17ms min=9.9µs  med=25.8µs  max=378.59ms p(90)=169.82µs p(95)=11.14ms
     http_req_tls_handshaking.......: avg=0s     min=0s     med=0s      max=0s       p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=13.88s min=6.95s  med=12.98s  max=29.13s   p(90)=18.84s   p(95)=20.07s 
     http_reqs......................: 10159   24.868884/s
     iteration_duration.............: avg=13.96s min=6.97s  med=13.03s  max=29.14s   p(90)=18.98s   p(95)=20.13s 
     iterations.....................: 10159   24.868884/s
     vus............................: 5       min=5       max=350
     vus_max........................: 350     min=350     max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8655405a-c615-4075-3da1-e62d46cebc00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/89ae56ec-499a-4198-887c-c0c691346900/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c5fc26dd-ca85-4c25-6d8a-5c1db1d2c100/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  60% — ✓ 1792 / ✗ 1149
     ✗ no graphql errors
      ↳  60% — ✓ 1792 / ✗ 1149
     ✓ valid response structure

     checks.........................: 70.05% ✓ 5376     ✗ 2298 
     data_received..................: 157 MB 366 kB/s
     data_sent......................: 3.6 MB 8.5 kB/s
     http_req_blocked...............: avg=5.69ms   min=2.2µs  med=6µs     max=95.77ms p(90)=17.87ms  p(95)=53.54ms 
     http_req_connecting............: avg=5.57ms   min=0s     med=0s      max=78.49ms p(90)=17.52ms  p(95)=53.17ms 
     http_req_duration..............: avg=47.8s    min=13.06s med=53.99s  max=1m0s    p(90)=1m0s     p(95)=1m0s    
       { expected_response:true }...: avg=39.98s   min=13.06s med=40.68s  max=59.97s  p(90)=58.17s   p(95)=58.58s  
     http_req_failed................: 39.06% ✓ 1149     ✗ 1792 
     http_req_receiving.............: avg=241.32µs min=0s     med=118.8µs max=50.6ms  p(90)=323.22µs p(95)=494.13µs
     http_req_sending...............: avg=890.06µs min=13.1µs med=37.1µs  max=68.71ms p(90)=1.15ms   p(95)=7.2ms   
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=47.8s    min=13.06s med=53.99s  max=1m0s    p(90)=1m0s     p(95)=1m0s    
     http_reqs......................: 2941   6.839477/s
     iteration_duration.............: avg=47.82s   min=13.07s med=54.01s  max=1m0s    p(90)=1m0s     p(95)=1m0s    
     iterations.....................: 2941   6.839477/s
     vus............................: 129    min=129    max=350
     vus_max........................: 350    min=350    max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/aeae0e33-1bd8-4ef0-9c37-77b92d026300/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b0b9782a-f7d9-48e0-c3bd-dd98ead03a00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ec75f0e7-9ec3-4f4b-7f85-35724b4ed100/public" alt="HTTP Overview" />


  </details>