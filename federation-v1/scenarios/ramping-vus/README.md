## Overview for: `federation-v1/ramping-vus`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. We are running a heavy load of concurrent VUs to measure response time and other stats, during stress. It measure things like memory usage, CPU usage, response times. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was trying to reach 2000 concurrent VUs over 600s


### Comparison


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/84533017-bfcf-41b8-ffc5-c364a669a000/public" alt="Comparison" />


| Gateway       | duration(p95)⬇️ |  RPS  |         Requests         |                       Durations                       | Notes                                                                          |
| :------------ | :-------------: | :---: | :----------------------: | :---------------------------------------------------: | :----------------------------------------------------------------------------- |
| cosmo         |     5894ms      |  179  |  109778 total, 0 failed  |  avg: 2421ms, p95: 5895ms, max: 18788ms, med: 1922ms  | ✅                                                                              |
| apollo-router |     6467ms      |  176  | 108093 total, 21 failed  |  avg: 2473ms, p95: 6468ms, max: 18926ms, med: 2002ms  | ❌ 21 failed requests, 21 non-200 responses, 21 unexpected GraphQL errors       |
| wundergraph   |     7261ms      |  161  |  98403 total, 0 failed   |  avg: 2746ms, p95: 7262ms, max: 23172ms, med: 2151ms  | ✅                                                                              |
| hive-gateway  |     59929ms     |  103  | 65350 total, 4021 failed | avg: 9484ms, p95: 59929ms, max: 61471ms, med: 6496ms  | ❌ 4021 failed requests, 4021 non-200 responses, 4021 unexpected GraphQL errors |
| apollo-server |     60000ms     |  85   | 54347 total, 7145 failed | avg: 11840ms, p95: 60001ms, max: 60532ms, med: 4032ms | ❌ 7145 failed requests, 7145 non-200 responses, 7145 unexpected GraphQL errors |



<details>
  <summary>Summary for: `cosmo`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     █ setup

     checks.........................: 100.00% ✓ 329274     ✗ 0     
     data_received..................: 9.6 GB  16 MB/s
     data_sent......................: 130 MB  213 kB/s
     http_req_blocked...............: avg=39.5ms   min=1.37µs  med=3.65µs  max=16.67s p(90)=5.68µs   p(95)=8.56µs  
     http_req_connecting............: avg=37.25ms  min=0s      med=0s      max=12.3s  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=2.42s    min=4.6ms   med=1.92s   max=18.78s p(90)=4.88s    p(95)=5.89s   
       { expected_response:true }...: avg=2.42s    min=4.6ms   med=1.92s   max=18.78s p(90)=4.88s    p(95)=5.89s   
     http_req_failed................: 0.00%   ✓ 0          ✗ 109778
     http_req_receiving.............: avg=458.91ms min=33.14µs med=86.21µs max=14.85s p(90)=1.39s    p(95)=3.07s   
     http_req_sending...............: avg=103.78ms min=7.76µs  med=16.87µs max=16.71s p(90)=155.23µs p(95)=300.51ms
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s     p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=1.85s    min=4.4ms   med=1.43s   max=11.02s p(90)=4.19s    p(95)=4.78s   
     http_reqs......................: 109778  179.729652/s
     iteration_duration.............: avg=5.58s    min=18.68ms med=4.31s   max=47.38s p(90)=11.9s    p(95)=14.55s  
     iterations.....................: 109758  179.696908/s
     vus............................: 140     min=51       max=1990
     vus_max........................: 2000    min=2000     max=2000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6364cc56-d57b-4824-3b52-b1eae2cee200/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0a4834aa-3659-4bfb-15ab-d339414a6d00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e62b3ce2-7ead-4d28-bfb0-a1e3753f6200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  99% — ✓ 108052 / ✗ 21
     ✗ no graphql errors
      ↳  99% — ✓ 108052 / ✗ 21
     ✓ valid response structure

     █ setup

     checks.........................: 99.98% ✓ 324156     ✗ 42    
     data_received..................: 9.5 GB 16 MB/s
     data_sent......................: 128 MB 210 kB/s
     http_req_blocked...............: avg=38.69ms  min=1.39µs med=3.28µs  max=15.52s p(90)=4.98µs   p(95)=6.75µs  
     http_req_connecting............: avg=36.92ms  min=0s     med=0s      max=12.49s p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=2.47s    min=0s     med=2s      max=18.92s p(90)=5.18s    p(95)=6.46s   
       { expected_response:true }...: avg=2.47s    min=6.09ms med=2s      max=18.92s p(90)=5.17s    p(95)=6.46s   
     http_req_failed................: 0.01%  ✓ 21         ✗ 108072
     http_req_receiving.............: avg=543.59ms min=0s     med=74.98µs max=15.88s p(90)=1.59s    p(95)=3.2s    
     http_req_sending...............: avg=61.82ms  min=0s     med=14.76µs max=15.74s p(90)=118.92µs p(95)=112.76ms
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s     p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=1.86s    min=0s     med=1.47s   max=15.35s p(90)=4.06s    p(95)=5.02s   
     http_reqs......................: 108093 176.946436/s
     iteration_duration.............: avg=5.59s    min=23.3ms med=4.41s   max=38.3s  p(90)=12.09s   p(95)=14.68s  
     iterations.....................: 108073 176.913696/s
     vus............................: 59     min=51       max=1991
     vus_max........................: 2000   min=2000     max=2000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4f65b9b1-73ce-4e2e-9751-710b424c4600/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/724e37b0-412b-4231-fad0-7dcf46d8f300/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d61be7ed-8fc6-4043-d233-f578cc92a000/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     █ setup

     checks.........................: 100.00% ✓ 295149     ✗ 0     
     data_received..................: 8.6 GB  14 MB/s
     data_sent......................: 117 MB  191 kB/s
     http_req_blocked...............: avg=42.6ms  min=1.44µs  med=3.47µs  max=18.18s p(90)=5.43µs   p(95)=8.91µs 
     http_req_connecting............: avg=39.82ms min=0s      med=0s      max=18.18s p(90)=0s       p(95)=0s     
     http_req_duration..............: avg=2.74s   min=6.04ms  med=2.15s   max=23.17s p(90)=5.82s    p(95)=7.26s  
       { expected_response:true }...: avg=2.74s   min=6.04ms  med=2.15s   max=23.17s p(90)=5.82s    p(95)=7.26s  
     http_req_failed................: 0.00%   ✓ 0          ✗ 98403 
     http_req_receiving.............: avg=703.3ms min=29.4µs  med=87.71µs max=19.55s p(90)=2.06s    p(95)=3.86s  
     http_req_sending...............: avg=86.24ms min=7.35µs  med=15.85µs max=15.57s p(90)=138.38µs p(95)=202.7ms
     http_req_tls_handshaking.......: avg=0s      min=0s      med=0s      max=0s     p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=1.95s   min=5.94ms  med=1.54s   max=12.98s p(90)=4.39s    p(95)=5.4s   
     http_reqs......................: 98403   161.253115/s
     iteration_duration.............: avg=6.16s   min=23.63ms med=4.79s   max=41.77s p(90)=13.48s   p(95)=16.76s 
     iterations.....................: 98383   161.220341/s
     vus............................: 284     min=52       max=1998
     vus_max........................: 2000    min=2000     max=2000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/74d1efde-c26a-4dda-f0f1-b8a004b75300/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/604d859e-30d4-4b85-bc3a-9a4f19942c00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/59db1a40-62ce-4bf5-62c3-919101c98400/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `hive-gateway`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  93% — ✓ 61309 / ✗ 4021
     ✗ no graphql errors
      ↳  93% — ✓ 61309 / ✗ 4021
     ✓ valid response structure

     █ setup

     checks.........................: 95.81% ✓ 183926     ✗ 8042  
     data_received..................: 5.4 GB 8.5 MB/s
     data_sent......................: 78 MB  124 kB/s
     http_req_blocked...............: avg=3.71ms min=1.4µs    med=3.95µs  max=786.82ms p(90)=7.48µs   p(95)=1.97ms
     http_req_connecting............: avg=3.62ms min=0s       med=0s      max=786.76ms p(90)=0s       p(95)=1.51ms
     http_req_duration..............: avg=9.48s  min=12.06ms  med=6.49s   max=1m1s     p(90)=10.53s   p(95)=59.92s
       { expected_response:true }...: avg=6.17s  min=12.06ms  med=6.37s   max=59.94s   p(90)=8.48s    p(95)=10.21s
     http_req_failed................: 6.15%  ✓ 4021       ✗ 61329 
     http_req_receiving.............: avg=4.92ms min=0s       med=76.33µs max=1.37s    p(90)=527.12µs p(95)=4.44ms
     http_req_sending...............: avg=3ms    min=9.05µs   med=18.21µs max=782.9ms  p(90)=107.14µs p(95)=7.02ms
     http_req_tls_handshaking.......: avg=0s     min=0s       med=0s      max=0s       p(90)=0s       p(95)=0s    
     http_req_waiting...............: avg=9.47s  min=11.97ms  med=6.48s   max=1m1s     p(90)=10.52s   p(95)=59.89s
     http_reqs......................: 65350  103.129798/s
     iteration_duration.............: avg=9.57s  min=161.59ms med=6.58s   max=1m1s     p(90)=10.64s   p(95)=1m0s  
     iterations.....................: 65329  103.096658/s
     vus............................: 162    min=50       max=2000
     vus_max........................: 2000   min=2000     max=2000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f51b601f-d02d-44d0-cfa1-e72b279df200/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9ffbb26b-1f19-42bb-e7d9-9c61ac4c7100/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/68172f08-6539-4910-7960-94940ae2a500/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  86% — ✓ 47182 / ✗ 7145
     ✗ no graphql errors
      ↳  86% — ✓ 47182 / ✗ 7145
     ✓ valid response structure

     █ setup

     checks.........................: 90.83% ✓ 141546    ✗ 14290 
     data_received..................: 4.1 GB 6.5 MB/s
     data_sent......................: 65 MB  102 kB/s
     http_req_blocked...............: avg=955.41µs min=1.32µs  med=3.7µs    max=301.26ms p(90)=305.31µs p(95)=971.58µs
     http_req_connecting............: avg=929.4µs  min=0s      med=0s       max=301.18ms p(90)=248.35µs p(95)=849.39µs
     http_req_duration..............: avg=11.83s   min=13.73ms med=4.03s    max=1m0s     p(90)=59.99s   p(95)=1m0s    
       { expected_response:true }...: avg=4.63s    min=13.73ms med=3.76s    max=59.96s   p(90)=6.2s     p(95)=7.05s   
     http_req_failed................: 13.14% ✓ 7145      ✗ 47202 
     http_req_receiving.............: avg=649.22µs min=0s      med=101.42µs max=386.11ms p(90)=181.65µs p(95)=328.4µs 
     http_req_sending...............: avg=420.61µs min=8.27µs  med=18.62µs  max=314.65ms p(90)=50.73µs  p(95)=114.07µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=11.83s   min=13.58ms med=4.03s    max=1m0s     p(90)=59.99s   p(95)=1m0s    
     http_reqs......................: 54347  85.628233/s
     iteration_duration.............: avg=11.86s   min=75.42ms med=4.05s    max=1m0s     p(90)=1m0s     p(95)=1m0s    
     iterations.....................: 54327  85.596721/s
     vus............................: 13     min=13      max=1999
     vus_max........................: 2000   min=2000    max=2000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/58e50c25-96ca-40be-0dfe-15fcc9a60700/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/466d86da-be9a-4a87-a855-3cf72932fe00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/64f27f49-02fd-4c04-eae0-6440bd632200/public" alt="HTTP Overview" />


  </details>