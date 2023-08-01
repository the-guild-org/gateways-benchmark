## Overview for: `fed-v1-ramping-vus`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. We are running a heavy load of concurrent VUs to measure response time and other stats, during stress. It measure things like memory usage, CPU usage, response times. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was trying to reach 1000 concurrent VUs over 60s


### Comparison


| Gateway                             | duration(p95)⬇️ |  RPS  |       Requests        |                       Durations                        |
| :---------------------------------- | :-------------: | :---: | :-------------------: | :----------------------------------------------------: |
| wundergraph                         |     1768ms      |  541  | 37938 total, 0 failed |    avg: 898ms, p95: 1769ms, max: 2787ms, med: 840ms    |
| mesh-supergraph                     |     11246ms     |  78   | 5496 total, 0 failed  |  avg: 7013ms, p95: 11247ms, max: 14249ms, med: 7111ms  |
| stitching-federation-with-yoga-bun  |     13205ms     |  102  | 7230 total, 0 failed  |  avg: 5423ms, p95: 13205ms, max: 20301ms, med: 5448ms  |
| mesh                                |     13485ms     |  65   | 4697 total, 0 failed  |  avg: 8497ms, p95: 13485ms, max: 16389ms, med: 8581ms  |
| mercurius                           |     15594ms     |  55   | 3906 total, 0 failed  | avg: 9723ms, p95: 15595ms, max: 16437ms, med: 10115ms  |
| stitching-federation-with-yoga-deno |     15667ms     |  55   | 4103 total, 0 failed  | avg: 10000ms, p95: 15668ms, max: 22666ms, med: 11157ms |
| apollo-router                       |     17682ms     |  66   | 5227 total, 0 failed  |  avg: 8715ms, p95: 17683ms, max: 24953ms, med: 7790ms  |
| apollo-gateway-with-yoga-uws        |     26722ms     |  50   | 3703 total, 0 failed  | avg: 11041ms, p95: 26723ms, max: 38630ms, med: 8373ms  |
| stitching-federation-with-yoga-uws  |     30143ms     |  45   | 3823 total, 0 failed  | avg: 12023ms, p95: 30143ms, max: 40468ms, med: 6975ms  |
| stitching-federation-with-yoga      |     51061ms     |  50   | 4677 total, 0 failed  |  avg: 9757ms, p95: 51061ms, max: 59911ms, med: 2214ms  |
| apollo-gateway-with-yoga            |     51489ms     |  45   | 4212 total, 0 failed  | avg: 10891ms, p95: 51490ms, max: 59216ms, med: 2875ms  |
| apollo-server                       |     54901ms     |  40   | 3684 total, 45 failed | avg: 12848ms, p95: 54902ms, max: 60002ms, med: 3089ms  |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 113814     ✗ 0     
     data_received..................: 189 MB  2.7 MB/s
     data_sent......................: 45 MB   643 kB/s
     http_req_blocked...............: avg=3.14ms   min=1.3µs   med=2.7µs    max=1.29s    p(90)=4.5µs    p(95)=9.1µs  
     http_req_connecting............: avg=3.13ms   min=0s      med=0s       max=1.29s    p(90)=0s       p(95)=0s     
     http_req_duration..............: avg=898.27ms min=10.94ms med=840.25ms max=2.78s    p(90)=1.56s    p(95)=1.76s  
       { expected_response:true }...: avg=898.27ms min=10.94ms med=840.25ms max=2.78s    p(90)=1.56s    p(95)=1.76s  
     http_req_failed................: 0.00%   ✓ 0          ✗ 37938 
     http_req_receiving.............: avg=13ms     min=17.4µs  med=43.4µs   max=1.07s    p(90)=310.22µs p(95)=11.87ms
     http_req_sending...............: avg=3.75ms   min=7.8µs   med=14.4µs   max=857.67ms p(90)=99.73µs  p(95)=1.64ms 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s       p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=881.51ms min=10.73ms med=833.59ms max=2.65s    p(90)=1.52s    p(95)=1.7s   
     http_reqs......................: 37938   541.932063/s
     iteration_duration.............: avg=915.67ms min=11.81ms med=854.32ms max=3.37s    p(90)=1.6s     p(95)=1.81s  
     iterations.....................: 37938   541.932063/s
     vus............................: 8       min=8        max=999 
     vus_max........................: 1000    min=1000     max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/64c86806-5ed8-4b30-487f-3ffa54405300/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ec239db9-661f-4095-18e3-b11207fd6900/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 5496

     checks.........................: 66.66% ✓ 10992     ✗ 5496  
     data_received..................: 28 MB  395 kB/s
     data_sent......................: 6.5 MB 93 kB/s
     http_req_blocked...............: avg=134.48µs min=1.4µs   med=2.8µs  max=20.58ms p(90)=494.39µs p(95)=553.27µs
     http_req_connecting............: avg=115.62µs min=0s      med=0s     max=18.29ms p(90)=414.18µs p(95)=468.33µs
     http_req_duration..............: avg=7.01s    min=16.9ms  med=7.11s  max=14.24s  p(90)=10.95s   p(95)=11.24s  
       { expected_response:true }...: avg=7.01s    min=16.9ms  med=7.11s  max=14.24s  p(90)=10.95s   p(95)=11.24s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 5496  
     http_req_receiving.............: avg=76.77µs  min=23.8µs  med=66µs   max=20.39ms p(90)=95.75µs  p(95)=107.3µs 
     http_req_sending...............: avg=44.75µs  min=9.3µs   med=16.7µs max=16.49ms p(90)=75.9µs   p(95)=93.63µs 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=7.01s    min=16.78ms med=7.11s  max=14.24s  p(90)=10.95s   p(95)=11.24s  
     http_reqs......................: 5496   78.494577/s
     iteration_duration.............: avg=7.01s    min=17.32ms med=7.11s  max=14.24s  p(90)=10.95s   p(95)=11.24s  
     iterations.....................: 5496   78.494577/s
     vus............................: 74     min=53      max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2396f90f-8bf4-4726-6d3c-bb1121b9bb00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0ff956ac-a099-4bc5-0b47-ca8950a6de00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 21690    ✗ 0     
     data_received..................: 36 MB   513 kB/s
     data_sent......................: 8.6 MB  122 kB/s
     http_req_blocked...............: avg=556.6µs  min=1.2µs    med=2.4µs   max=208.79ms p(90)=180.2µs p(95)=462.01µs
     http_req_connecting............: avg=537.55µs min=0s       med=0s      max=208.72ms p(90)=118µs   p(95)=383.21µs
     http_req_duration..............: avg=5.42s    min=236.96ms med=5.44s   max=20.3s    p(90)=8.86s   p(95)=13.2s   
       { expected_response:true }...: avg=5.42s    min=236.96ms med=5.44s   max=20.3s    p(90)=8.86s   p(95)=13.2s   
     http_req_failed................: 0.00%   ✓ 0        ✗ 7230  
     http_req_receiving.............: avg=165.58µs min=20.1µs   med=50.05µs max=77.83ms  p(90)=77.8µs  p(95)=117.21µs
     http_req_sending...............: avg=389.53µs min=7.3µs    med=13.8µs  max=117.65ms p(90)=70.6µs  p(95)=112.52µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=5.42s    min=236.84ms med=5.44s   max=20.3s    p(90)=8.86s   p(95)=13.18s  
     http_reqs......................: 7230    102.9897/s
     iteration_duration.............: avg=5.42s    min=237.76ms med=5.44s   max=20.45s   p(90)=8.86s   p(95)=13.2s   
     iterations.....................: 7230    102.9897/s
     vus............................: 113     min=56     max=1000
     vus_max........................: 1000    min=1000   max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9da5cc3f-428c-4e72-b937-32c3e6310b00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/96871b76-964d-438e-526b-c333edaef800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 4683 / ✗ 14
     ✗ valid response structure
      ↳  99% — ✓ 4683 / ✗ 14

     checks.........................: 99.80% ✓ 14063     ✗ 28    
     data_received..................: 24 MB  330 kB/s
     data_sent......................: 5.6 MB 78 kB/s
     http_req_blocked...............: avg=473.57µs min=1.4µs  med=2.9µs  max=79.26ms p(90)=498.32µs p(95)=547.69µs
     http_req_connecting............: avg=446.75µs min=0s     med=0s     max=78.87ms p(90)=420.3µs  p(95)=471.55µs
     http_req_duration..............: avg=8.49s    min=1.61s  med=8.58s  max=16.38s  p(90)=12.69s   p(95)=13.48s  
       { expected_response:true }...: avg=8.49s    min=1.61s  med=8.58s  max=16.38s  p(90)=12.69s   p(95)=13.48s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 4697  
     http_req_receiving.............: avg=80.17µs  min=25.3µs med=60.4µs max=16.33ms p(90)=89.8µs   p(95)=100.62µs
     http_req_sending...............: avg=91.02µs  min=9.4µs  med=15.7µs max=36.71ms p(90)=77.8µs   p(95)=94.12µs 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=8.49s    min=1.61s  med=8.58s  max=16.38s  p(90)=12.69s   p(95)=13.48s  
     http_reqs......................: 4697   65.799412/s
     iteration_duration.............: avg=8.49s    min=1.64s  med=8.58s  max=16.39s  p(90)=12.69s   p(95)=13.48s  
     iterations.....................: 4697   65.799412/s
     vus............................: 74     min=52      max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ed95e645-db7b-4aca-bb18-b404eb178000/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c9b6043d-034e-4757-6b2b-e1b3c654f600/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 11718     ✗ 0     
     data_received..................: 20 MB   281 kB/s
     data_sent......................: 4.6 MB  66 kB/s
     http_req_blocked...............: avg=637.35µs min=1.5µs   med=3.1µs   max=71.37ms p(90)=575.15µs p(95)=703.43µs
     http_req_connecting............: avg=607.39µs min=0s      med=0s      max=70.98ms p(90)=478.65µs p(95)=595.08µs
     http_req_duration..............: avg=9.72s    min=14.47ms med=10.11s  max=16.43s  p(90)=15.07s   p(95)=15.59s  
       { expected_response:true }...: avg=9.72s    min=14.47ms med=10.11s  max=16.43s  p(90)=15.07s   p(95)=15.59s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 3906  
     http_req_receiving.............: avg=85.08µs  min=29.7µs  med=74.15µs max=8.09ms  p(90)=123.65µs p(95)=149.1µs 
     http_req_sending...............: avg=87.66µs  min=11.2µs  med=21.6µs  max=26.95ms p(90)=89.35µs  p(95)=115.45µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=9.72s    min=14.36ms med=10.11s  max=16.43s  p(90)=15.07s   p(95)=15.59s  
     http_reqs......................: 3906    55.784692/s
     iteration_duration.............: avg=9.72s    min=15.06ms med=10.11s  max=16.43s  p(90)=15.07s   p(95)=15.59s  
     iterations.....................: 3906    55.784692/s
     vus............................: 49      min=49      max=1000
     vus_max........................: 1000    min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d218da03-5739-422c-f505-89e13ba28700/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9669834c-918a-4af3-dcec-960a17581800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-deno`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  96% — ✓ 3977 / ✗ 126
     ✗ valid response structure
      ↳  96% — ✓ 3977 / ✗ 126

     checks.........................: 97.95% ✓ 12057     ✗ 252   
     data_received..................: 23 MB  307 kB/s
     data_sent......................: 4.9 MB 66 kB/s
     http_req_blocked...............: avg=905.43µs min=1.2µs  med=3.3µs  max=71.33ms p(90)=543.53µs p(95)=623.96µs
     http_req_connecting............: avg=878.03µs min=0s     med=0s     max=71.18ms p(90)=457.5µs  p(95)=531.43µs
     http_req_duration..............: avg=9.99s    min=2s     med=11.15s max=22.66s  p(90)=14.62s   p(95)=15.66s  
       { expected_response:true }...: avg=9.99s    min=2s     med=11.15s max=22.66s  p(90)=14.62s   p(95)=15.66s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 4103  
     http_req_receiving.............: avg=161.87µs min=20.6µs med=52.1µs max=17.57ms p(90)=125.89µs p(95)=199.89µs
     http_req_sending...............: avg=148.34µs min=7.3µs  med=20.7µs max=29.59ms p(90)=96.77µs  p(95)=142.58µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=9.99s    min=2s     med=11.15s max=22.66s  p(90)=14.62s   p(95)=15.66s  
     http_reqs......................: 4103   55.918395/s
     iteration_duration.............: avg=10s      min=2s     med=11.15s max=22.66s  p(90)=14.62s   p(95)=15.66s  
     iterations.....................: 4103   55.918395/s
     vus............................: 21     min=21      max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c7bea944-d0e2-4e7c-aba6-4310ab844f00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d6f26e67-dc3a-4df4-a13a-f0a55b75d200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 5203 / ✗ 24
     ✗ valid response structure
      ↳  99% — ✓ 5203 / ✗ 24

     checks.........................: 99.69% ✓ 15633     ✗ 48    
     data_received..................: 26 MB  331 kB/s
     data_sent......................: 6.2 MB 79 kB/s
     http_req_blocked...............: avg=218.02µs min=1.5µs    med=3.2µs  max=71.54ms p(90)=494.7µs  p(95)=637.58µs
     http_req_connecting............: avg=195.97µs min=0s       med=0s     max=71.47ms p(90)=415.48µs p(95)=542.41µs
     http_req_duration..............: avg=8.71s    min=748.62ms med=7.78s  max=24.95s  p(90)=16.59s   p(95)=17.68s  
       { expected_response:true }...: avg=8.71s    min=748.62ms med=7.78s  max=24.95s  p(90)=16.59s   p(95)=17.68s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 5227  
     http_req_receiving.............: avg=130.68µs min=27.2µs   med=73.5µs max=79.68ms p(90)=127.68µs p(95)=165.9µs 
     http_req_sending...............: avg=202.55µs min=11.4µs   med=22.3µs max=36.54ms p(90)=88.9µs   p(95)=136.7µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=8.71s    min=748.47ms med=7.78s  max=24.95s  p(90)=16.59s   p(95)=17.68s  
     http_reqs......................: 5227   66.532719/s
     iteration_duration.............: avg=8.71s    min=750.56ms med=7.79s  max=24.95s  p(90)=16.59s   p(95)=17.68s  
     iterations.....................: 5227   66.532719/s
     vus............................: 158    min=53      max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/fa442fe8-abe8-4edd-84fb-ae5914b53f00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7249fb70-98f4-4797-96c4-73f6e8074100/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga-uws`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  65% — ✓ 2438 / ✗ 1265
     ✗ valid response structure
      ↳  65% — ✓ 2438 / ✗ 1265

     checks.........................: 77.22% ✓ 8579      ✗ 2530  
     data_received..................: 16 MB  221 kB/s
     data_sent......................: 4.4 MB 60 kB/s
     http_req_blocked...............: avg=191.97µs min=1.6µs    med=3.4µs  max=33.15ms p(90)=525.44µs p(95)=589.49µs
     http_req_connecting............: avg=162.62µs min=0s       med=0s     max=20.23ms p(90)=445.47µs p(95)=501.48µs
     http_req_duration..............: avg=11.04s   min=338.09ms med=8.37s  max=38.63s  p(90)=21.87s   p(95)=26.72s  
       { expected_response:true }...: avg=11.04s   min=338.09ms med=8.37s  max=38.63s  p(90)=21.87s   p(95)=26.72s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 3703  
     http_req_receiving.............: avg=86.76µs  min=18.8µs   med=65.5µs max=11.24ms p(90)=104.5µs  p(95)=131.06µs
     http_req_sending...............: avg=140.86µs min=8.9µs    med=21.2µs max=40.9ms  p(90)=91.6µs   p(95)=129.88µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=11.04s   min=338ms    med=8.37s  max=38.63s  p(90)=21.87s   p(95)=26.72s  
     http_reqs......................: 3703   50.834221/s
     iteration_duration.............: avg=11.04s   min=339.12ms med=8.37s  max=38.63s  p(90)=21.87s   p(95)=26.72s  
     iterations.....................: 3703   50.834221/s
     vus............................: 118    min=54      max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/cd305f0c-bd09-4bb6-1bd9-aa6ee34a2500/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/42207e77-47e0-4a4c-0b65-7742d9d7d400/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-uws`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  71% — ✓ 2735 / ✗ 1088
     ✗ valid response structure
      ↳  71% — ✓ 2735 / ✗ 1088

     checks.........................: 81.02% ✓ 9293      ✗ 2176  
     data_received..................: 29 MB  342 kB/s
     data_sent......................: 4.5 MB 54 kB/s
     http_req_blocked...............: avg=201.37µs min=1.7µs    med=3.2µs  max=71.14ms  p(90)=513.98µs p(95)=580.19µs
     http_req_connecting............: avg=171.14µs min=0s       med=0s     max=70.86ms  p(90)=433.42µs p(95)=490.5µs 
     http_req_duration..............: avg=12.02s   min=769.46ms med=6.97s  max=40.46s   p(90)=26.95s   p(95)=30.14s  
       { expected_response:true }...: avg=12.02s   min=769.46ms med=6.97s  max=40.46s   p(90)=26.95s   p(95)=30.14s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 3823  
     http_req_receiving.............: avg=379.27µs min=24.5µs   med=68.9µs max=180.19ms p(90)=143.8µs  p(95)=242.57µs
     http_req_sending...............: avg=84.94µs  min=7.9µs    med=19.5µs max=27.29ms  p(90)=83.3µs   p(95)=103.69µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=12.02s   min=769.39ms med=6.97s  max=40.46s   p(90)=26.95s   p(95)=30.14s  
     http_reqs......................: 3823   45.478967/s
     iteration_duration.............: avg=12.02s   min=769.7ms  med=6.97s  max=40.46s   p(90)=26.95s   p(95)=30.14s  
     iterations.....................: 3823   45.478967/s
     vus............................: 50     min=50      max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2569dd69-640c-47c7-5e6f-3bfc1f8b7d00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/efffe9fa-d345-4880-9ad2-faad112bd400/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 4668 / ✗ 9
     ✗ valid response structure
      ↳  99% — ✓ 4668 / ✗ 9

     checks.........................: 99.87% ✓ 14013     ✗ 18    
     data_received..................: 24 MB  256 kB/s
     data_sent......................: 5.6 MB 61 kB/s
     http_req_blocked...............: avg=143.45µs min=1.8µs   med=3.5µs  max=15.04ms p(90)=475.5µs  p(95)=540.48µs
     http_req_connecting............: avg=118.63µs min=0s      med=0s     max=14.97ms p(90)=388.01µs p(95)=448.88µs
     http_req_duration..............: avg=9.75s    min=73.55ms med=2.21s  max=59.91s  p(90)=41.03s   p(95)=51.06s  
       { expected_response:true }...: avg=9.75s    min=73.55ms med=2.21s  max=59.91s  p(90)=41.03s   p(95)=51.06s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 4677  
     http_req_receiving.............: avg=91.9µs   min=26.9µs  med=77.3µs max=8.06ms  p(90)=111.1µs  p(95)=129.36µs
     http_req_sending...............: avg=88.52µs  min=9.9µs   med=20.4µs max=52.95ms p(90)=82.1µs   p(95)=101.88µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=9.75s    min=73.44ms med=2.21s  max=59.91s  p(90)=41.03s   p(95)=51.06s  
     http_reqs......................: 4677   50.894107/s
     iteration_duration.............: avg=9.75s    min=74.35ms med=2.21s  max=59.91s  p(90)=41.04s   p(95)=51.06s  
     iterations.....................: 4677   50.894107/s
     vus............................: 3      min=3       max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/eef48b4d-2a06-408a-cbdc-6db7fbb8f200/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0474ad03-b70c-4137-afcd-7a44e897ab00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  98% — ✓ 4164 / ✗ 48
     ✗ valid response structure
      ↳  98% — ✓ 4164 / ✗ 48

     checks.........................: 99.24% ✓ 12540     ✗ 96    
     data_received..................: 21 MB  230 kB/s
     data_sent......................: 5.0 MB 55 kB/s
     http_req_blocked...............: avg=657.31µs min=1.6µs    med=3.5µs  max=54.52ms  p(90)=474.18µs p(95)=534.43µs
     http_req_connecting............: avg=634.73µs min=0s       med=0s     max=54.28ms  p(90)=394.59µs p(95)=450.55µs
     http_req_duration..............: avg=10.89s   min=150.06ms med=2.87s  max=59.21s   p(90)=42.43s   p(95)=51.48s  
       { expected_response:true }...: avg=10.89s   min=150.06ms med=2.87s  max=59.21s   p(90)=42.43s   p(95)=51.48s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 4212  
     http_req_receiving.............: avg=79µs     min=25.4µs   med=75.3µs max=857.73µs p(90)=105.3µs  p(95)=118.3µs 
     http_req_sending...............: avg=152.61µs min=10.1µs   med=20µs   max=23.66ms  p(90)=80.1µs   p(95)=95.94µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=10.89s   min=149.95ms med=2.87s  max=59.21s   p(90)=42.43s   p(95)=51.48s  
     http_reqs......................: 4212   45.883882/s
     iteration_duration.............: avg=10.89s   min=150.91ms med=2.87s  max=59.21s   p(90)=42.44s   p(95)=51.49s  
     iterations.....................: 4212   45.883882/s
     vus............................: 2      min=2       max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c8ac4341-6962-43a9-14ee-ecf1ef0a0600/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4c67f565-6bce-46cb-4aa8-5801e8286b00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  98% — ✓ 3639 / ✗ 45
     ✗ no graphql errors
      ↳  97% — ✓ 3595 / ✗ 89
     ✗ valid response structure
      ↳  98% — ✓ 3595 / ✗ 44

     checks.........................: 98.38% ✓ 10829     ✗ 178   
     data_received..................: 19 MB  203 kB/s
     data_sent......................: 4.4 MB 48 kB/s
     http_req_blocked...............: avg=187.49µs min=1.6µs    med=3.5µs   max=16.94ms p(90)=530.94µs p(95)=610.73µs
     http_req_connecting............: avg=154.07µs min=0s       med=0s      max=16.87ms p(90)=437.98µs p(95)=503.97µs
     http_req_duration..............: avg=12.84s   min=155.41ms med=3.08s   max=1m0s    p(90)=47.78s   p(95)=54.9s   
       { expected_response:true }...: avg=12.26s   min=155.41ms med=3.07s   max=59.99s  p(90)=46.15s   p(95)=53.25s  
     http_req_failed................: 1.22%  ✓ 45        ✗ 3639  
     http_req_receiving.............: avg=104.25µs min=0s       med=87.45µs max=5.6ms   p(90)=139.27µs p(95)=158.7µs 
     http_req_sending...............: avg=56.94µs  min=13.3µs   med=22.8µs  max=6.14ms  p(90)=95.27µs  p(95)=126.52µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=12.84s   min=155.24ms med=3.08s   max=1m0s    p(90)=47.78s   p(95)=54.9s   
     http_reqs......................: 3684   40.072409/s
     iteration_duration.............: avg=12.84s   min=156.53ms med=3.08s   max=1m0s    p(90)=47.78s   p(95)=54.9s   
     iterations.....................: 3684   40.072409/s
     vus............................: 17     min=17      max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/028c4b08-6401-459b-de02-5df674541d00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c96dbd2c-effe-4a4c-47ed-1b68fd712900/public" alt="HTTP Overview" />


  </details>