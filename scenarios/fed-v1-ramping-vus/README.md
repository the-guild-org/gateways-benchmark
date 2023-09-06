## Overview for: `fed-v1-ramping-vus`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. We are running a heavy load of concurrent VUs to measure response time and other stats, during stress. It measure things like memory usage, CPU usage, response times. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was trying to reach 1500 concurrent VUs over 300s


### Comparison


| Gateway                             | duration(p95)⬇️ |  RPS  |        Requests         |                      Durations                       |
| :---------------------------------- | :-------------: | :---: | :---------------------: | :--------------------------------------------------: |
| wundergraph                         |      578ms      | 2793  | 865872 total, 0 failed  |   avg: 260ms, p95: 578ms, max: 1843ms, med: 235ms    |
| mesh-bun                            |     4115ms      |  432  | 134217 total, 0 failed  |  avg: 1773ms, p95: 4115ms, max: 9539ms, med: 1666ms  |
| mercurius                           |     6989ms      |  204  |  63451 total, 0 failed  | avg: 3777ms, p95: 6990ms, max: 10677ms, med: 3673ms  |
| mesh                                |     7765ms      |  191  |  59349 total, 0 failed  | avg: 4050ms, p95: 7766ms, max: 14768ms, med: 3806ms  |
| apollo-router                       |     11779ms     |  171  |  53041 total, 0 failed  | avg: 4558ms, p95: 11780ms, max: 20010ms, med: 3730ms |
| apollo-gateway-with-yoga-bun        |     12194ms     |  150  |  46721 total, 0 failed  | avg: 5216ms, p95: 12194ms, max: 32060ms, med: 5026ms |
| stitching-federation-with-yoga-deno |     13814ms     |  103  |  32023 total, 0 failed  | avg: 7578ms, p95: 13815ms, max: 15113ms, med: 7757ms |
| stitching-federation-with-yoga-uws  |     15693ms     |  90   |  28104 total, 0 failed  | avg: 8611ms, p95: 15693ms, max: 20377ms, med: 8698ms |
| stitching-federation-with-yoga      |     15700ms     |  88   |  27513 total, 0 failed  | avg: 8946ms, p95: 15700ms, max: 20431ms, med: 9086ms |
| stitching-federation-with-yoga-bun  |     15925ms     |  122  |  38302 total, 0 failed  | avg: 6415ms, p95: 15926ms, max: 33272ms, med: 6003ms |
| mesh-supergraph                     |     18571ms     |  80   |  25155 total, 0 failed  | avg: 9784ms, p95: 18572ms, max: 23665ms, med: 9753ms |
| apollo-server-node16                |     21609ms     |  151  | 46830 total, 102 failed | avg: 5172ms, p95: 21610ms, max: 60028ms, med: 2918ms |
| apollo-gateway-with-yoga-uws        |     21986ms     |  134  |  41582 total, 0 failed  | avg: 5787ms, p95: 21986ms, max: 51445ms, med: 3449ms |
| apollo-gateway-with-yoga            |     24357ms     |  130  | 40458 total, 109 failed | avg: 5993ms, p95: 24357ms, max: 60053ms, med: 3333ms |
| apollo-server                       |     38963ms     |  80   | 25295 total, 271 failed | avg: 9751ms, p95: 38964ms, max: 60042ms, med: 5779ms |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 2597616     ✗ 0     
     data_received..................: 126 MB  405 kB/s
     data_sent......................: 1.0 GB  3.3 MB/s
     http_req_blocked...............: avg=333.35µs min=800ns   med=1.9µs    max=1.39s p(90)=3.8µs    p(95)=5.3µs   
     http_req_connecting............: avg=326.1µs  min=0s      med=0s       max=1.39s p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=259.66ms min=244.7µs med=234.96ms max=1.84s p(90)=486.3ms  p(95)=578.18ms
       { expected_response:true }...: avg=259.66ms min=244.7µs med=234.96ms max=1.84s p(90)=486.3ms  p(95)=578.18ms
     http_req_failed................: 0.00%   ✓ 0           ✗ 865872
     http_req_receiving.............: avg=665.89µs min=10.4µs  med=24.2µs   max=1.14s p(90)=68.3µs   p(95)=243.3µs 
     http_req_sending...............: avg=359.89µs min=5.3µs   med=10.7µs   max=1.16s p(90)=25.2µs   p(95)=73.9µs  
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s    p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=258.63ms min=215µs   med=234ms    max=1.8s  p(90)=484.81ms p(95)=576.43ms
     http_reqs......................: 865872  2793.071728/s
     iteration_duration.............: avg=273.28ms min=344.4µs med=245.15ms max=2.48s p(90)=514.35ms p(95)=619.22ms
     iterations.....................: 865872  2793.071728/s
     vus............................: 4       min=0         max=1498
     vus_max........................: 1500    min=1132      max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5dc1fcf2-b30f-48ba-2a41-58dd0f3c9800/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/fbefd16b-acc1-4528-8884-2435b7791800/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a2b4e2d2-bd59-4e01-710f-eb2fe9aeae00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  0% — ✓ 0 / ✗ 134217
     ✓ valid response structure

     checks.........................: 66.66% ✓ 268434     ✗ 134217
     data_received..................: 128 MB 412 kB/s
     data_sent......................: 159 MB 514 kB/s
     http_req_blocked...............: avg=92.65µs  min=900ns  med=1.9µs  max=1.01s    p(90)=2.9µs  p(95)=3.8µs   
     http_req_connecting............: avg=86.4µs   min=0s     med=0s     max=876.01ms p(90)=0s     p(95)=0s      
     http_req_duration..............: avg=1.77s    min=1.97ms med=1.66s  max=9.53s    p(90)=3.31s  p(95)=4.11s   
       { expected_response:true }...: avg=1.77s    min=1.97ms med=1.66s  max=9.53s    p(90)=3.31s  p(95)=4.11s   
     http_req_failed................: 0.00%  ✓ 0          ✗ 134217
     http_req_receiving.............: avg=367.67µs min=11.5µs med=27.6µs max=584.95ms p(90)=92.6µs p(95)=249.31µs
     http_req_sending...............: avg=158.34µs min=6.5µs  med=11.5µs max=402.7ms  p(90)=26.1µs p(95)=85.5µs  
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=1.77s    min=1.92ms med=1.66s  max=9.53s    p(90)=3.31s  p(95)=4.11s   
     http_reqs......................: 134217 432.953486/s
     iteration_duration.............: avg=1.77s    min=2.14ms med=1.66s  max=9.53s    p(90)=3.31s  p(95)=4.12s   
     iterations.....................: 134217 432.953486/s
     vus............................: 7      min=0        max=1500
     vus_max........................: 1500   min=895      max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a029de5c-a0f1-471f-e7f0-108a4bf06600/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/86839a6c-6da5-4803-8520-6a9c5268d100/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2c9a90ee-f3d7-42c8-6503-4d9152d7fa00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 190353     ✗ 0     
     data_received..................: 286 MB  923 kB/s
     data_sent......................: 75 MB   243 kB/s
     http_req_blocked...............: avg=74.86µs min=800ns  med=1.9µs  max=123.29ms p(90)=3µs     p(95)=4.4µs  
     http_req_connecting............: avg=70.01µs min=0s     med=0s     max=122.54ms p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=3.77s   min=4.63ms med=3.67s  max=10.67s   p(90)=6.49s   p(95)=6.98s  
       { expected_response:true }...: avg=3.77s   min=4.63ms med=3.67s  max=10.67s   p(90)=6.49s   p(95)=6.98s  
     http_req_failed................: 0.00%   ✓ 0          ✗ 63451 
     http_req_receiving.............: avg=50.12µs min=14.5µs med=37.1µs max=33.05ms  p(90)=69.79µs p(95)=78.29µs
     http_req_sending...............: avg=23.58µs min=5.8µs  med=11.4µs max=22.2ms   p(90)=24.9µs  p(95)=39.29µs
     http_req_tls_handshaking.......: avg=0s      min=0s     med=0s     max=0s       p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=3.77s   min=4.57ms med=3.67s  max=10.67s   p(90)=6.49s   p(95)=6.98s  
     http_reqs......................: 63451   204.676648/s
     iteration_duration.............: avg=3.77s   min=4.85ms med=3.67s  max=10.67s   p(90)=6.49s   p(95)=6.99s  
     iterations.....................: 63451   204.676648/s
     vus............................: 10      min=10       max=1500
     vus_max........................: 1500    min=1500     max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/260588c7-3671-4284-b97d-b115c5756f00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2b22e76c-e46c-4a1a-ef2a-ae6a3b662000/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f96ead93-ecbd-470a-db29-232d34f3c400/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 178047    ✗ 0     
     data_received..................: 76 MB   245 kB/s
     data_sent......................: 70 MB   227 kB/s
     http_req_blocked...............: avg=100.25µs min=1.2µs  med=2.6µs  max=138.08ms p(90)=4µs    p(95)=16.8µs  
     http_req_connecting............: avg=91.1µs   min=0s     med=0s     max=136.6ms  p(90)=0s     p(95)=0s      
     http_req_duration..............: avg=4.05s    min=4.27ms med=3.8s   max=14.76s   p(90)=7.52s  p(95)=7.76s   
       { expected_response:true }...: avg=4.05s    min=4.27ms med=3.8s   max=14.76s   p(90)=7.52s  p(95)=7.76s   
     http_req_failed................: 0.00%   ✓ 0         ✗ 59349 
     http_req_receiving.............: avg=111.04µs min=21.1µs med=45.9µs max=82.18ms  p(90)=99.6µs p(95)=152.79µs
     http_req_sending...............: avg=67.45µs  min=9.29µs med=16µs   max=103.22ms p(90)=42.6µs p(95)=88.59µs 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=4.05s    min=4.18ms med=3.8s   max=14.76s   p(90)=7.52s  p(95)=7.76s   
     http_reqs......................: 59349   191.44228/s
     iteration_duration.............: avg=4.05s    min=4.49ms med=3.8s   max=14.76s   p(90)=7.52s  p(95)=7.76s   
     iterations.....................: 59349   191.44228/s
     vus............................: 10      min=0       max=1500
     vus_max........................: 1500    min=674     max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a3281f27-8c1c-4d79-277b-6d36c4aa0800/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/00c564ac-f2a4-446c-e48e-5e301ecc8f00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5a873bb9-db86-4d1d-5213-af28d2009200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 159123     ✗ 0     
     data_received..................: 268 MB  864 kB/s
     data_sent......................: 63 MB   203 kB/s
     http_req_blocked...............: avg=23.36µs min=1µs    med=2.29µs max=32.73ms p(90)=4µs    p(95)=12.1µs
     http_req_connecting............: avg=16.98µs min=0s     med=0s     max=32.64ms p(90)=0s     p(95)=0s    
     http_req_duration..............: avg=4.55s   min=4.03ms med=3.72s  max=20s     p(90)=9.63s  p(95)=11.77s
       { expected_response:true }...: avg=4.55s   min=4.03ms med=3.72s  max=20s     p(90)=9.63s  p(95)=11.77s
     http_req_failed................: 0.00%   ✓ 0          ✗ 53041 
     http_req_receiving.............: avg=70.89µs min=22.1µs med=61.4µs max=22.13ms p(90)=84.5µs p(95)=92.6µs
     http_req_sending...............: avg=24.81µs min=6.5µs  med=14.5µs max=23.28ms p(90)=28.8µs p(95)=36.1µs
     http_req_tls_handshaking.......: avg=0s      min=0s     med=0s     max=0s      p(90)=0s     p(95)=0s    
     http_req_waiting...............: avg=4.55s   min=3.95ms med=3.72s  max=20s     p(90)=9.63s  p(95)=11.77s
     http_reqs......................: 53041   171.094197/s
     iteration_duration.............: avg=4.55s   min=4.26ms med=3.73s  max=20.01s  p(90)=9.63s  p(95)=11.78s
     iterations.....................: 53041   171.094197/s
     vus............................: 4       min=0        max=1498
     vus_max........................: 1500    min=1177     max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a18ee616-281a-451d-646e-04499cb26000/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/86d0575f-6781-48b0-8e72-491673af1500/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d399ec87-c4b7-4516-5294-ebfc7c87ee00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 140163     ✗ 0     
     data_received..................: 236 MB  761 kB/s
     data_sent......................: 56 MB   179 kB/s
     http_req_blocked...............: avg=46.01µs  min=1.1µs    med=2.2µs  max=132.48ms p(90)=3.5µs  p(95)=9.5µs 
     http_req_connecting............: avg=40.29µs  min=0s       med=0s     max=132.32ms p(90)=0s     p(95)=0s    
     http_req_duration..............: avg=5.21s    min=410.87ms med=5.02s  max=32.05s   p(90)=7.54s  p(95)=12.19s
       { expected_response:true }...: avg=5.21s    min=410.87ms med=5.02s  max=32.05s   p(90)=7.54s  p(95)=12.19s
     http_req_failed................: 0.00%   ✓ 0          ✗ 46721 
     http_req_receiving.............: avg=107.02µs min=18.5µs   med=47µs   max=149.68ms p(90)=75.4µs p(95)=87.3µs
     http_req_sending...............: avg=67.41µs  min=7µs      med=13.3µs max=99.71ms  p(90)=29.1µs p(95)=58.3µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s     p(95)=0s    
     http_req_waiting...............: avg=5.21s    min=410.75ms med=5.02s  max=32.05s   p(90)=7.54s  p(95)=12.19s
     http_reqs......................: 46721   150.533245/s
     iteration_duration.............: avg=5.21s    min=411.23ms med=5.02s  max=32.06s   p(90)=7.54s  p(95)=12.19s
     iterations.....................: 46721   150.533245/s
     vus............................: 528     min=0        max=1500
     vus_max........................: 1500    min=932      max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c6abe104-1ede-4170-4ecc-9db724faf400/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/81bdc492-d3a6-4962-6fcc-c03198830600/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c1d57e97-cb39-430e-99bf-539c6a378200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-deno`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 96069      ✗ 0     
     data_received..................: 163 MB  524 kB/s
     data_sent......................: 38 MB   123 kB/s
     http_req_blocked...............: avg=32.65µs min=900ns  med=2µs    max=20.02ms p(90)=3.7µs  p(95)=134.8µs
     http_req_connecting............: avg=25.33µs min=0s     med=0s     max=19.94ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=7.57s   min=8.15ms med=7.75s  max=15.11s  p(90)=13.24s p(95)=13.81s 
       { expected_response:true }...: avg=7.57s   min=8.15ms med=7.75s  max=15.11s  p(90)=13.24s p(95)=13.81s 
     http_req_failed................: 0.00%   ✓ 0          ✗ 32023 
     http_req_receiving.............: avg=95.73µs min=15.6µs med=35.9µs max=19.93ms p(90)=83.4µs p(95)=119µs  
     http_req_sending...............: avg=40.76µs min=6.2µs  med=11.9µs max=18.21ms p(90)=33.6µs p(95)=91.1µs 
     http_req_tls_handshaking.......: avg=0s      min=0s     med=0s     max=0s      p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=7.57s   min=8.07ms med=7.75s  max=15.11s  p(90)=13.24s p(95)=13.81s 
     http_reqs......................: 32023   103.296714/s
     iteration_duration.............: avg=7.57s   min=8.44ms med=7.75s  max=15.11s  p(90)=13.24s p(95)=13.81s 
     iterations.....................: 32023   103.296714/s
     vus............................: 3       min=0        max=1498
     vus_max........................: 1500    min=1196     max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/561f8ed2-7e2d-4d1a-aaf7-c0632ca5d400/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d5e42521-131d-4e09-4f0a-29cad8134700/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d8869689-665a-49a3-1e8d-cdf61bda9200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-uws`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 28041 / ✗ 63
     ✓ valid response structure

     checks.........................: 99.92% ✓ 84249     ✗ 63    
     data_received..................: 143 MB 461 kB/s
     data_sent......................: 33 MB  108 kB/s
     http_req_blocked...............: avg=35.07µs min=800ns   med=1.6µs  max=175.71ms p(90)=3µs     p(95)=152.09µs
     http_req_connecting............: avg=28.78µs min=0s      med=0s     max=175.63ms p(90)=0s      p(95)=97.88µs 
     http_req_duration..............: avg=8.61s   min=12.01ms med=8.69s  max=20.37s   p(90)=14.9s   p(95)=15.69s  
       { expected_response:true }...: avg=8.61s   min=12.01ms med=8.69s  max=20.37s   p(90)=14.9s   p(95)=15.69s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 28104 
     http_req_receiving.............: avg=69.08µs min=15.7µs  med=28.5µs max=141.97ms p(90)=55.89µs p(95)=74.89µs 
     http_req_sending...............: avg=41.64µs min=5.7µs   med=9.4µs  max=96.36ms  p(90)=26.6µs  p(95)=53.59µs 
     http_req_tls_handshaking.......: avg=0s      min=0s      med=0s     max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=8.61s   min=11.93ms med=8.69s  max=20.37s   p(90)=14.9s   p(95)=15.69s  
     http_reqs......................: 28104  90.651316/s
     iteration_duration.............: avg=8.61s   min=12.3ms  med=8.69s  max=20.37s   p(90)=14.9s   p(95)=15.69s  
     iterations.....................: 28104  90.651316/s
     vus............................: 10     min=10      max=1500
     vus_max........................: 1500   min=1500    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/33d6fc8d-2a98-48f8-6188-8fdd8e235f00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/37902494-dddd-4728-a97b-511715c12c00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7be662e8-3bda-4a27-961c-8f50e2417100/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 27492 / ✗ 21
     ✓ valid response structure

     checks.........................: 99.97% ✓ 82518     ✗ 21    
     data_received..................: 140 MB 450 kB/s
     data_sent......................: 33 MB  105 kB/s
     http_req_blocked...............: avg=51.62µs min=700ns    med=1.6µs  max=173.68ms p(90)=3.2µs   p(95)=152.8µs
     http_req_connecting............: avg=44.32µs min=0s       med=0s     max=172.94ms p(90)=0s      p(95)=99.44µs
     http_req_duration..............: avg=8.94s   min=820.31ms med=9.08s  max=20.43s   p(90)=14.93s  p(95)=15.7s  
       { expected_response:true }...: avg=8.94s   min=820.31ms med=9.08s  max=20.43s   p(90)=14.93s  p(95)=15.7s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 27513 
     http_req_receiving.............: avg=64.33µs min=14.6µs   med=29.3µs max=75.37ms  p(90)=58.7µs  p(95)=78.6µs 
     http_req_sending...............: avg=43.03µs min=5.7µs    med=9.6µs  max=65.75ms  p(90)=27.67µs p(95)=56.9µs 
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s     max=0s       p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=8.94s   min=820.23ms med=9.08s  max=20.43s   p(90)=14.93s  p(95)=15.7s  
     http_reqs......................: 27513  88.164535/s
     iteration_duration.............: avg=8.94s   min=820.57ms med=9.08s  max=20.43s   p(90)=14.93s  p(95)=15.7s  
     iterations.....................: 27513  88.164535/s
     vus............................: 210    min=0       max=1500
     vus_max........................: 1500   min=1389    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/38be5fa5-70bc-40c3-ecff-813507d56900/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/32f4018d-c746-4f13-d6ec-098370c68e00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a94047a5-223b-4bc7-3ada-c08870ceef00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 114906     ✗ 0     
     data_received..................: 194 MB  620 kB/s
     data_sent......................: 46 MB   146 kB/s
     http_req_blocked...............: avg=187.68µs min=1.1µs    med=2.1µs  max=695.14ms p(90)=3.7µs  p(95)=14.1µs 
     http_req_connecting............: avg=171.79µs min=0s       med=0s     max=694.99ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=6.41s    min=248.77ms med=6s     max=33.27s   p(90)=9.07s  p(95)=15.92s 
       { expected_response:true }...: avg=6.41s    min=248.77ms med=6s     max=33.27s   p(90)=9.07s  p(95)=15.92s 
     http_req_failed................: 0.00%   ✓ 0          ✗ 38302 
     http_req_receiving.............: avg=300.2µs  min=17.2µs   med=40.9µs max=351.32ms p(90)=85.9µs p(95)=261.7µs
     http_req_sending...............: avg=254.9µs  min=7.3µs    med=12.7µs max=389.95ms p(90)=58.3µs p(95)=115.8µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=6.41s    min=248.1ms  med=6s     max=33.27s   p(90)=9.07s  p(95)=15.92s 
     http_reqs......................: 38302   122.745521/s
     iteration_duration.............: avg=6.41s    min=252.92ms med=6s     max=33.27s   p(90)=9.07s  p(95)=15.92s 
     iterations.....................: 38302   122.745521/s
     vus............................: 205     min=0        max=1500
     vus_max........................: 1500    min=688      max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/54677e49-7f23-458f-1969-b91035219a00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/89804669-d21c-449c-7b6f-02f82f4cfe00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ec7f177f-939d-45fd-7252-0d3303b0fd00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 75465     ✗ 0     
     data_received..................: 128 MB  409 kB/s
     data_sent......................: 30 MB   96 kB/s
     http_req_blocked...............: avg=42.61µs min=1.1µs    med=2µs    max=56.89ms p(90)=4.4µs   p(95)=229.3µs 
     http_req_connecting............: avg=33.03µs min=0s       med=0s     max=56.83ms p(90)=0s      p(95)=146.73µs
     http_req_duration..............: avg=9.78s   min=792.97ms med=9.75s  max=23.66s  p(90)=17.34s  p(95)=18.57s  
       { expected_response:true }...: avg=9.78s   min=792.97ms med=9.75s  max=23.66s  p(90)=17.34s  p(95)=18.57s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 25155 
     http_req_receiving.............: avg=79.26µs min=18.8µs   med=50.6µs max=62.8ms  p(90)=73.6µs  p(95)=90.7µs  
     http_req_sending...............: avg=51µs    min=6.9µs    med=12.4µs max=81.09ms p(90)=31.86µs p(95)=78.33µs 
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s     max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=9.78s   min=792.87ms med=9.75s  max=23.66s  p(90)=17.34s  p(95)=18.57s  
     http_reqs......................: 25155   80.619083/s
     iteration_duration.............: avg=9.78s   min=793.35ms med=9.75s  max=23.66s  p(90)=17.34s  p(95)=18.57s  
     iterations.....................: 25155   80.619083/s
     vus............................: 111     min=0       max=1500
     vus_max........................: 1500    min=1187    max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/603c5ab1-5edf-41cc-6d7d-4fe9c8ea4c00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4db04193-f1e4-48e3-8812-35f8ee01b300/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/49b3dfc9-6cf8-4b01-88b4-19ef10528200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server-node16`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  99% — ✓ 46728 / ✗ 102
     ✗ no graphql errors
      ↳  99% — ✓ 46728 / ✗ 102
     ✓ valid response structure

     checks.........................: 99.85% ✓ 140184     ✗ 204   
     data_received..................: 244 MB 787 kB/s
     data_sent......................: 56 MB  179 kB/s
     http_req_blocked...............: avg=40µs    min=800ns  med=1.8µs  max=55.6ms  p(90)=2.9µs  p(95)=15.3µs
     http_req_connecting............: avg=34.29µs min=0s     med=0s     max=55.57ms p(90)=0s     p(95)=0s    
     http_req_duration..............: avg=5.17s   min=4.46ms med=2.91s  max=1m0s    p(90)=14.14s p(95)=21.6s 
       { expected_response:true }...: avg=5.05s   min=4.46ms med=2.91s  max=59.84s  p(90)=13.36s p(95)=21.45s
     http_req_failed................: 0.21%  ✓ 102        ✗ 46728 
     http_req_receiving.............: avg=52.52µs min=0s     med=43µs   max=38.88ms p(90)=66.1µs p(95)=77.4µs
     http_req_sending...............: avg=26.52µs min=5.9µs  med=11.1µs max=55.3ms  p(90)=25.8µs p(95)=33.3µs
     http_req_tls_handshaking.......: avg=0s      min=0s     med=0s     max=0s      p(90)=0s     p(95)=0s    
     http_req_waiting...............: avg=5.17s   min=4.37ms med=2.91s  max=1m0s    p(90)=14.14s p(95)=21.6s 
     http_reqs......................: 46830  151.062609/s
     iteration_duration.............: avg=5.17s   min=4.68ms med=2.91s  max=1m0s    p(90)=14.14s p(95)=21.61s
     iterations.....................: 46830  151.062609/s
     vus............................: 55     min=0        max=1498
     vus_max........................: 1500   min=1258     max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f04a279e-88bc-41fc-cf2e-86ca2f653100/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7b45b5fa-28b3-4a3a-3879-cb3e6be57f00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c10368d1-8563-4e17-a9df-5ad66558ee00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga-uws`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 124746     ✗ 0     
     data_received..................: 211 MB  680 kB/s
     data_sent......................: 49 MB   159 kB/s
     http_req_blocked...............: avg=103.18µs min=1µs    med=2.29µs  max=85.9ms  p(90)=4µs    p(95)=16.1µs 
     http_req_connecting............: avg=95.78µs  min=0s     med=0s      max=85.73ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=5.78s    min=4.9ms  med=3.44s   max=51.44s  p(90)=15.74s p(95)=21.98s 
       { expected_response:true }...: avg=5.78s    min=4.9ms  med=3.44s   max=51.44s  p(90)=15.74s p(95)=21.98s 
     http_req_failed................: 0.00%   ✓ 0          ✗ 41582 
     http_req_receiving.............: avg=72.34µs  min=20.7µs med=59.3µs  max=14.72ms p(90)=90.1µs p(95)=102.1µs
     http_req_sending...............: avg=33.85µs  min=6.7µs  med=13.89µs max=37.7ms  p(90)=30.1µs p(95)=50.3µs 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s      p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=5.78s    min=4.84ms med=3.44s   max=51.44s  p(90)=15.74s p(95)=21.98s 
     http_reqs......................: 41582   134.133508/s
     iteration_duration.............: avg=5.78s    min=5.18ms med=3.44s   max=51.44s  p(90)=15.74s p(95)=21.98s 
     iterations.....................: 41582   134.133508/s
     vus............................: 7       min=0        max=1500
     vus_max........................: 1500    min=816      max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/22e705fa-1617-4654-060d-57981fa64200/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b329f6ec-45bb-489c-ce15-433e82207a00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3157c37a-3750-4d73-16fb-1abc7415cc00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  99% — ✓ 40349 / ✗ 109
     ✗ no graphql errors
      ↳  99% — ✓ 40349 / ✗ 109
     ✓ valid response structure

     checks.........................: 99.82% ✓ 121047     ✗ 218   
     data_received..................: 206 MB 664 kB/s
     data_sent......................: 48 MB  155 kB/s
     http_req_blocked...............: avg=55.11µs min=1µs    med=2.29µs max=75.41ms p(90)=4.2µs  p(95)=17.6µs
     http_req_connecting............: avg=44.65µs min=0s     med=0s     max=73.93ms p(90)=0s     p(95)=0s    
     http_req_duration..............: avg=5.99s   min=5.65ms med=3.33s  max=1m0s    p(90)=13.86s p(95)=24.35s
       { expected_response:true }...: avg=5.84s   min=5.65ms med=3.32s  max=59.78s  p(90)=13.62s p(95)=24.04s
     http_req_failed................: 0.26%  ✓ 109        ✗ 40349 
     http_req_receiving.............: avg=76.76µs min=0s     med=58µs   max=78.46ms p(90)=85.1µs p(95)=97.6µs
     http_req_sending...............: avg=48.74µs min=6.9µs  med=13.5µs max=77.36ms p(90)=30.2µs p(95)=58.2µs
     http_req_tls_handshaking.......: avg=0s      min=0s     med=0s     max=0s      p(90)=0s     p(95)=0s    
     http_req_waiting...............: avg=5.99s   min=5.55ms med=3.33s  max=1m0s    p(90)=13.86s p(95)=24.35s
     http_reqs......................: 40458  130.505744/s
     iteration_duration.............: avg=5.99s   min=5.94ms med=3.33s  max=1m0s    p(90)=13.86s p(95)=24.35s
     iterations.....................: 40458  130.505744/s
     vus............................: 1      min=0        max=1500
     vus_max........................: 1500   min=1420     max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b03c3521-495f-4373-d629-e89e5368ff00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b0ca07aa-ae14-4e18-fbad-0584222aac00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7342f218-e000-45bb-9651-096a706b1d00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  98% — ✓ 25024 / ✗ 271
     ✗ no graphql errors
      ↳  98% — ✓ 25024 / ✗ 271
     ✓ valid response structure

     checks.........................: 99.28% ✓ 75072     ✗ 542   
     data_received..................: 131 MB 415 kB/s
     data_sent......................: 30 MB  95 kB/s
     http_req_blocked...............: avg=114.31µs min=1.3µs    med=2.8µs  max=71.74ms p(90)=18.89µs p(95)=557.73µs
     http_req_connecting............: avg=98.58µs  min=0s       med=0s     max=71.13ms p(90)=0s      p(95)=458.34µs
     http_req_duration..............: avg=9.75s    min=783.63ms med=5.77s  max=1m0s    p(90)=25.3s   p(95)=38.96s  
       { expected_response:true }...: avg=9.2s     min=783.63ms med=5.74s  max=59.82s  p(90)=22.55s  p(95)=33.96s  
     http_req_failed................: 1.07%  ✓ 271       ✗ 25024 
     http_req_receiving.............: avg=94.83µs  min=0s       med=75.7µs max=21.96ms p(90)=120.7µs p(95)=152.7µs 
     http_req_sending...............: avg=46.05µs  min=9.5µs    med=17.2µs max=52.86ms p(90)=55µs    p(95)=84.2µs  
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=9.75s    min=783.46ms med=5.77s  max=1m0s    p(90)=25.3s   p(95)=38.96s  
     http_reqs......................: 25295  80.373772/s
     iteration_duration.............: avg=9.75s    min=784.23ms med=5.78s  max=1m0s    p(90)=25.3s   p(95)=38.96s  
     iterations.....................: 25295  80.373772/s
     vus............................: 137    min=0       max=1500
     vus_max........................: 1500   min=996     max=1500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2433da35-a8c6-4655-4281-85c748017e00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6ae52119-7289-4001-db7f-a9077f28c900/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/129ca59f-eb5f-4091-3391-4eae80986a00/public" alt="HTTP Overview" />


  </details>