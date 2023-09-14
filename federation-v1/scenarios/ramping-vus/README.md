## Overview for: `fed-v1-ramping-vus`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. We are running a heavy load of concurrent VUs to measure response time and other stats, during stress. It measure things like memory usage, CPU usage, response times. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was trying to reach 2000 concurrent VUs over 600s


### Comparison


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/61122181-09dc-4c02-e6e8-dfffc66a0000/public" alt="Comparison" />


| Gateway         | duration(p95)⬇️ |  RPS  |         Requests         |                       Durations                        | Notes                                                                          |
| :-------------- | :-------------: | :---: | :----------------------: | :----------------------------------------------------: | :----------------------------------------------------------------------------- |
| wundergraph     |     6259ms      |  166  |  101678 total, 0 failed  |  avg: 2675ms, p95: 6259ms, max: 23124ms, med: 2295ms   | ✅                                                                              |
| apollo-router   |     7120ms      |  173  |  105971 total, 0 failed  |  avg: 2608ms, p95: 7121ms, max: 23465ms, med: 2048ms   | ✅                                                                              |
| mesh-bun        |     21115ms     |  92   |  57577 total, 0 failed   | avg: 11138ms, p95: 21116ms, max: 52679ms, med: 10291ms | ✅                                                                              |
| mesh-supergraph |     21399ms     |  90   |  56299 total, 0 failed   | avg: 11237ms, p95: 21399ms, max: 29131ms, med: 11075ms | ✅                                                                              |
| mesh            |     23605ms     |  82   |  51181 total, 0 failed   | avg: 12432ms, p95: 23606ms, max: 31905ms, med: 12327ms | ✅                                                                              |
| apollo-server   |     58994ms     |  63   | 39650 total, 1806 failed | avg: 16289ms, p95: 58994ms, max: 60494ms, med: 4984ms  | ❌ 1806 failed requests, 1806 non-200 responses, 1806 unexpected GraphQL errors |
| mercurius       |     60000ms     |  37   | 24106 total, 2878 failed | avg: 25803ms, p95: 60001ms, max: 60014ms, med: 21404ms | ❌ 2878 failed requests, 2878 non-200 responses, 2878 unexpected GraphQL errors |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 305034     ✗ 0     
     data_received..................: 8.9 GB  15 MB/s
     data_sent......................: 121 MB  198 kB/s
     http_req_blocked...............: avg=47.5ms   min=1.38µs  med=3.6µs   max=17.63s p(90)=5.84µs   p(95)=10.48µs 
     http_req_connecting............: avg=44.69ms  min=0s      med=0s      max=13.2s  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=2.67s    min=6.82ms  med=2.29s   max=23.12s p(90)=5.29s    p(95)=6.25s   
       { expected_response:true }...: avg=2.67s    min=6.82ms  med=2.29s   max=23.12s p(90)=5.29s    p(95)=6.25s   
     http_req_failed................: 0.00%   ✓ 0          ✗ 101678
     http_req_receiving.............: avg=555.08ms min=22.65µs med=78.31µs max=19.22s p(90)=1.79s    p(95)=3.55s   
     http_req_sending...............: avg=78.1ms   min=6.22µs  med=15.64µs max=15.18s p(90)=133.71µs p(95)=189.19ms
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s     p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=2.04s    min=6.72ms  med=1.64s   max=14.25s p(90)=4.54s    p(95)=5.18s   
     http_reqs......................: 101678  166.682726/s
     iteration_duration.............: avg=5.98s    min=13.84ms med=4.83s   max=44.01s p(90)=12.73s   p(95)=15.65s  
     iterations.....................: 101678  166.682726/s
     vus............................: 73      min=51       max=1994
     vus_max........................: 2000    min=2000     max=2000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2257f5d6-f939-4f92-f476-3deb4ded3700/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/df389d4c-52c6-4dd0-5c0e-5302a0e45600/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/dd7184b7-45cb-40c8-0ce1-de596bf4d700/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 317913     ✗ 0     
     data_received..................: 9.3 GB  15 MB/s
     data_sent......................: 126 MB  206 kB/s
     http_req_blocked...............: avg=40.29ms min=1.43µs  med=3.7µs   max=16.01s p(90)=6.02µs   p(95)=9.89µs  
     http_req_connecting............: avg=36.4ms  min=0s      med=0s      max=16.01s p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=2.6s    min=8.86ms  med=2.04s   max=23.46s p(90)=5.32s    p(95)=7.12s   
       { expected_response:true }...: avg=2.6s    min=8.86ms  med=2.04s   max=23.46s p(90)=5.32s    p(95)=7.12s   
     http_req_failed................: 0.00%   ✓ 0          ✗ 105971
     http_req_receiving.............: avg=694.2ms min=22.69µs med=81.75µs max=15.56s p(90)=2.24s    p(95)=4.47s   
     http_req_sending...............: avg=81.59ms min=6.17µs  med=15.86µs max=13.28s p(90)=122.53µs p(95)=135.55ms
     http_req_tls_handshaking.......: avg=0s      min=0s      med=0s      max=0s     p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=1.83s   min=8.76ms  med=1.51s   max=9.44s  p(90)=3.92s    p(95)=4.58s   
     http_reqs......................: 105971  173.714542/s
     iteration_duration.............: avg=5.71s   min=18.41ms med=4.34s   max=47.98s p(90)=12.55s   p(95)=15.8s   
     iterations.....................: 105971  173.714542/s
     vus............................: 7       min=7        max=1982
     vus_max........................: 2000    min=2000     max=2000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ab4097f8-f6cf-4f85-8926-c3fb24c23200/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e1f72775-707e-46f4-3ebf-ce76019c9900/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/34218173-ea91-4ca3-da5a-c8a465049b00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 172731    ✗ 0     
     data_received..................: 5.1 GB  8.1 MB/s
     data_sent......................: 68 MB   110 kB/s
     http_req_blocked...............: avg=798.89µs min=1.38µs   med=3.9µs    max=688.18ms p(90)=6.98µs   p(95)=12.55µs 
     http_req_connecting............: avg=759.43µs min=0s       med=0s       max=502.3ms  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=11.13s   min=365.54ms med=10.29s   max=52.67s   p(90)=20.13s   p(95)=21.11s  
       { expected_response:true }...: avg=11.13s   min=365.54ms med=10.29s   max=52.67s   p(90)=20.13s   p(95)=21.11s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 57577 
     http_req_receiving.............: avg=139.92ms min=29.15µs  med=109.82µs max=16.02s   p(90)=570.04µs p(95)=58.12ms 
     http_req_sending...............: avg=1.5ms    min=7.99µs   med=18.56µs  max=890.95ms p(90)=44.57µs  p(95)=130.27µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=10.99s   min=365.39ms med=10.25s   max=52.65s   p(90)=20.04s   p(95)=20.82s  
     http_reqs......................: 57577   92.406864/s
     iteration_duration.............: avg=11.19s   min=371.91ms med=10.4s    max=52.68s   p(90)=20.22s   p(95)=21.25s  
     iterations.....................: 57577   92.406864/s
     vus............................: 136     min=51      max=2000
     vus_max........................: 2000    min=2000    max=2000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9cdf9eae-8e3c-4747-4719-2cf4e8cd1d00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/cab88b81-cd45-4eb5-7412-a830f1430300/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ce5c7edb-4f27-45b8-47a5-24bd5e2bf900/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 168897    ✗ 0     
     data_received..................: 4.9 GB  8.0 MB/s
     data_sent......................: 67 MB   108 kB/s
     http_req_blocked...............: avg=1.81ms  min=1.7µs    med=3.89µs  max=1.06s    p(90)=6.26µs  p(95)=11.96µs 
     http_req_connecting............: avg=1.75ms  min=0s       med=0s      max=876.61ms p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=11.23s  min=346.22ms med=11.07s  max=29.13s   p(90)=19.77s  p(95)=21.39s  
       { expected_response:true }...: avg=11.23s  min=346.22ms med=11.07s  max=29.13s   p(90)=19.77s  p(95)=21.39s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 56299 
     http_req_receiving.............: avg=10.38ms min=32.11µs  med=74.75µs max=1.75s    p(90)=1.09ms  p(95)=10.28ms 
     http_req_sending...............: avg=2.51ms  min=8.78µs   med=17.61µs max=1.28s    p(90)=41.99µs p(95)=155.08µs
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s      max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=11.22s  min=346.1ms  med=11.06s  max=29.13s   p(90)=19.75s  p(95)=21.38s  
     http_reqs......................: 56299   90.916593/s
     iteration_duration.............: avg=11.33s  min=363.94ms med=11.17s  max=29.15s   p(90)=19.87s  p(95)=21.48s  
     iterations.....................: 56299   90.916593/s
     vus............................: 292     min=51      max=2000
     vus_max........................: 2000    min=2000    max=2000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/88c28e4b-8cf0-4241-8e2f-e85f38a6ff00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c16b0ac7-0572-45e7-28d7-93bad6fa0600/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/99fca72f-f9e4-4ab2-6178-69d80f015a00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 153543    ✗ 0     
     data_received..................: 4.5 GB  7.2 MB/s
     data_sent......................: 61 MB   98 kB/s
     http_req_blocked...............: avg=1.11ms min=1.72µs   med=3.98µs  max=1.07s    p(90)=6.42µs   p(95)=12.85µs 
     http_req_connecting............: avg=1.06ms min=0s       med=0s      max=1.07s    p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=12.43s min=332.07ms med=12.32s  max=31.9s    p(90)=21.98s   p(95)=23.6s   
       { expected_response:true }...: avg=12.43s min=332.07ms med=12.32s  max=31.9s    p(90)=21.98s   p(95)=23.6s   
     http_req_failed................: 0.00%   ✓ 0         ✗ 51181 
     http_req_receiving.............: avg=5.7ms  min=32.44µs  med=80.51µs max=2.27s    p(90)=714.15µs p(95)=7.36ms  
     http_req_sending...............: avg=1.53ms min=8.69µs   med=18.26µs max=917.96ms p(90)=40.38µs  p(95)=134.27µs
     http_req_tls_handshaking.......: avg=0s     min=0s       med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=12.42s min=331.98ms med=12.31s  max=31.9s    p(90)=21.97s   p(95)=23.6s   
     http_reqs......................: 51181   82.435878/s
     iteration_duration.............: avg=12.5s  min=346.82ms med=12.42s  max=31.93s   p(90)=22.11s   p(95)=23.7s   
     iterations.....................: 51181   82.435878/s
     vus............................: 83      min=51      max=1999
     vus_max........................: 2000    min=2000    max=2000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f04ecd18-67ae-4bb3-20ac-aab4a5eced00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c34926ab-823f-416f-b47e-e82d4d345200/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/af04f46d-6771-4cb7-ce9b-01d38783cd00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  95% — ✓ 37844 / ✗ 1806
     ✗ no graphql errors
      ↳  95% — ✓ 37844 / ✗ 1806
     ✓ valid response structure

     checks.........................: 96.91% ✓ 113532    ✗ 3612  
     data_received..................: 3.3 GB 5.3 MB/s
     data_sent......................: 47 MB  75 kB/s
     http_req_blocked...............: avg=436.46µs min=1.35µs   med=3.19µs  max=267.74ms p(90)=11.55µs  p(95)=200.71µs
     http_req_connecting............: avg=415.38µs min=0s       med=0s      max=266.1ms  p(90)=0s       p(95)=133.67µs
     http_req_duration..............: avg=16.28s   min=375.61ms med=4.98s   max=1m0s     p(90)=50.6s    p(95)=58.99s  
       { expected_response:true }...: avg=14.26s   min=375.61ms med=4.53s   max=1m0s     p(90)=42.46s   p(95)=52.85s  
     http_req_failed................: 4.55%  ✓ 1806      ✗ 37844 
     http_req_receiving.............: avg=881.08µs min=0s       med=86.42µs max=3.01s    p(90)=141.47µs p(95)=349.15µs
     http_req_sending...............: avg=248.07µs min=7.67µs   med=15.01µs max=386.47ms p(90)=36.65µs  p(95)=60.2µs  
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=16.28s   min=375.45ms med=4.98s   max=1m0s     p(90)=50.6s    p(95)=58.99s  
     http_reqs......................: 39650  63.327964/s
     iteration_duration.............: avg=16.3s    min=386.22ms med=4.99s   max=1m0s     p(90)=50.62s   p(95)=59.01s  
     iterations.....................: 39650  63.327964/s
     vus............................: 135    min=51      max=2000
     vus_max........................: 2000   min=2000    max=2000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/36f9055a-f5ec-4e42-1ecd-57cadf21bf00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/994dc9ed-2704-4425-a176-790fd7240400/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/240be2ac-ed32-46c2-9819-efe7dec6cb00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  88% — ✓ 21228 / ✗ 2878
     ✗ no graphql errors
      ↳  88% — ✓ 21228 / ✗ 2878
     ✓ valid response structure

     checks.........................: 91.71% ✓ 63684     ✗ 5756  
     data_received..................: 1.9 GB 2.9 MB/s
     data_sent......................: 30 MB  47 kB/s
     http_req_blocked...............: avg=50.53µs  min=1.68µs   med=4.5µs    max=30.26ms p(90)=157.2µs  p(95)=201.24µs
     http_req_connecting............: avg=37.74µs  min=0s       med=0s       max=30.19ms p(90)=106.96µs p(95)=137.49µs
     http_req_duration..............: avg=25.8s    min=775.08ms med=21.4s    max=1m0s    p(90)=1m0s     p(95)=1m0s    
       { expected_response:true }...: avg=21.16s   min=775.08ms med=19.06s   max=59.99s  p(90)=43.29s   p(95)=48.88s  
     http_req_failed................: 11.93% ✓ 2878      ✗ 21228 
     http_req_receiving.............: avg=113.84µs min=0s       med=103.93µs max=32.32ms p(90)=142.34µs p(95)=161.59µs
     http_req_sending...............: avg=39.68µs  min=9.05µs   med=26.2µs   max=28.19ms p(90)=41.12µs  p(95)=52.63µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=25.8s    min=774.64ms med=21.4s    max=1m0s    p(90)=1m0s     p(95)=1m0s    
     http_reqs......................: 24106  37.718422/s
     iteration_duration.............: avg=25.81s   min=784.32ms med=21.41s   max=1m0s    p(90)=1m0s     p(95)=1m0s    
     iterations.....................: 24106  37.718422/s
     vus............................: 2      min=2       max=2000
     vus_max........................: 2000   min=2000    max=2000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1a8b2ee5-1ee1-4ea9-12be-364ba10a3900/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d958f5bd-2d3f-4d1e-085a-fa0d64fafb00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/41992695-b0a7-470d-6f1e-a2eb88494b00/public" alt="HTTP Overview" />


  </details>