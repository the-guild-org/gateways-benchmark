## Overview for: `federation-v1/constant-vus-subgraphs-delay-resources`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. It's being executed with a constant amount of VUs over a fixed amount of time. It measure things like memory usage, CPU usage, average RPS. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was running 500 VUs over 90s


### Comparison


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ecb4b4d3-c194-42ab-1ff1-6cf11c180c00/public" alt="Comparison" />


| Gateway       | RPS ⬇️ |         Requests         |         Duration          | Notes                                                                          |
| :------------ | :----: | :----------------------: | :-----------------------: | :----------------------------------------------------------------------------- |
| cosmo         |  184   |  111161 total, 0 failed  | avg: 1251ms, p95: 3168ms  | ✅                                                                              |
| apollo-router |  173   |  104063 total, 0 failed  | avg: 1303ms, p95: 3456ms  | ✅                                                                              |
| wundergraph   |  160   |  96533 total, 0 failed   | avg: 1449ms, p95: 3731ms  | ✅                                                                              |
| hive-gateway  |  101   | 61617 total, 161 failed  | avg: 4809ms, p95: 6806ms  | ❌ 161 failed requests, 161 non-200 responses, 161 unexpected GraphQL errors    |
| apollo-server |   84   | 51182 total, 2730 failed | avg: 5853ms, p95: 59955ms | ❌ 2730 failed requests, 2730 non-200 responses, 2730 unexpected GraphQL errors |
| mercurius     |   56   |  33902 total, 0 failed   | avg: 8858ms, p95: 9453ms  | ✅                                                                              |



<details>
  <summary>Summary for: `cosmo`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     █ setup

     checks.........................: 100.00% ✓ 333423     ✗ 0     
     data_received..................: 9.8 GB  16 MB/s
     data_sent......................: 132 MB  219 kB/s
     http_req_blocked...............: avg=2.05ms   min=1.42µs  med=3.07µs   max=4.37s  p(90)=4.42µs  p(95)=5.31µs
     http_req_connecting............: avg=1.44ms   min=0s      med=0s       max=4.37s  p(90)=0s      p(95)=0s    
     http_req_duration..............: avg=1.25s    min=3.75ms  med=1.06s    max=10.07s p(90)=2.46s   p(95)=3.16s 
       { expected_response:true }...: avg=1.25s    min=3.75ms  med=1.06s    max=10.07s p(90)=2.46s   p(95)=3.16s 
     http_req_failed................: 0.00%   ✓ 0          ✗ 111161
     http_req_receiving.............: avg=344.53ms min=30.17µs med=78.27µs  max=8.95s  p(90)=1.35s   p(95)=2.21s 
     http_req_sending...............: avg=37.18ms  min=7.51µs  med=14.09µs  max=5.95s  p(90)=34.19µs p(95)=4.49ms
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s     p(90)=0s      p(95)=0s    
     http_req_waiting...............: avg=869.51ms min=3.65ms  med=829.75ms max=6.95s  p(90)=1.53s   p(95)=1.8s  
     http_reqs......................: 111161  184.810359/s
     iteration_duration.............: avg=2.65s    min=17.61ms med=2.27s    max=17.46s p(90)=5.23s   p(95)=6.27s 
     iterations.....................: 111141  184.777108/s
     vus............................: 257     min=257      max=500 
     vus_max........................: 500     min=500      max=500 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0aab9fb2-d28c-4302-a852-ee41b123ad00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5566c4a5-2ce4-4cc3-3597-f9cad146fa00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1fb5d6b4-368c-4234-af7d-c6f005ca9b00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     █ setup

     checks.........................: 100.00% ✓ 312129     ✗ 0     
     data_received..................: 9.1 GB  15 MB/s
     data_sent......................: 124 MB  205 kB/s
     http_req_blocked...............: avg=2.98ms   min=1.55µs  med=3.48µs   max=6.35s  p(90)=5.35µs  p(95)=6.24µs 
     http_req_connecting............: avg=2.43ms   min=0s      med=0s       max=5.53s  p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=1.3s     min=6.35ms  med=1.07s    max=11.66s p(90)=2.71s   p(95)=3.45s  
       { expected_response:true }...: avg=1.3s     min=6.35ms  med=1.07s    max=11.66s p(90)=2.71s   p(95)=3.45s  
     http_req_failed................: 0.00%   ✓ 0          ✗ 104063
     http_req_receiving.............: avg=459.42ms min=25.84µs med=86.63µs  max=9.88s  p(90)=1.79s   p(95)=2.54s  
     http_req_sending...............: avg=40.73ms  min=7.85µs  med=16.77µs  max=8.1s   p(90)=67.87µs p(95)=30.29ms
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s     p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=803.03ms min=6.26ms  med=751.71ms max=6.04s  p(90)=1.48s   p(95)=1.74s  
     http_reqs......................: 104063  173.010379/s
     iteration_duration.............: avg=2.82s    min=20.46ms med=2.38s    max=21.06s p(90)=5.77s   p(95)=6.94s  
     iterations.....................: 104043  172.977128/s
     vus............................: 195     min=195      max=500 
     vus_max........................: 500     min=500      max=500 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/eb785748-320e-4efb-1280-20fa183ba900/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5188051f-f0ae-40dc-435c-4af067500200/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/fe5abe67-6414-4565-88f9-9ccb36c92900/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     █ setup

     checks.........................: 100.00% ✓ 289539     ✗ 0    
     data_received..................: 8.5 GB  14 MB/s
     data_sent......................: 115 MB  191 kB/s
     http_req_blocked...............: avg=3.32ms   min=1.45µs  med=3.41µs   max=6.32s  p(90)=5.18µs  p(95)=6.21µs
     http_req_connecting............: avg=2.5ms    min=0s      med=0s       max=6.32s  p(90)=0s      p(95)=0s    
     http_req_duration..............: avg=1.44s    min=6.62ms  med=1.21s    max=13.48s p(90)=2.89s   p(95)=3.73s 
       { expected_response:true }...: avg=1.44s    min=6.62ms  med=1.21s    max=13.48s p(90)=2.89s   p(95)=3.73s 
     http_req_failed................: 0.00%   ✓ 0          ✗ 96533
     http_req_receiving.............: avg=460.74ms min=32.73µs med=86.06µs  max=11.45s p(90)=1.75s   p(95)=2.57s 
     http_req_sending...............: avg=37.95ms  min=6.92µs  med=15.28µs  max=7.13s  p(90)=39.75µs p(95)=5.29ms
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s     p(90)=0s      p(95)=0s    
     http_req_waiting...............: avg=950.74ms min=6.51ms  med=881.85ms max=5.85s  p(90)=1.73s   p(95)=2.1s  
     http_reqs......................: 96533   160.465296/s
     iteration_duration.............: avg=3.06s    min=21.57ms med=2.65s    max=23.26s p(90)=6.08s   p(95)=7.26s 
     iterations.....................: 96513   160.432051/s
     vus............................: 368     min=368      max=500
     vus_max........................: 500     min=500      max=500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1b4042ac-ee0e-49f2-467a-75520e0d6a00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3d8b1a81-f2c4-4de9-0f56-8522f748bf00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5cefa689-6d15-4e09-86bb-8b59f9771300/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `hive-gateway`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  99% — ✓ 61436 / ✗ 161
     ✗ no graphql errors
      ↳  99% — ✓ 61436 / ✗ 161
     ✓ valid response structure

     █ setup

     checks.........................: 99.82% ✓ 184308     ✗ 322  
     data_received..................: 5.4 GB 8.9 MB/s
     data_sent......................: 73 MB  121 kB/s
     http_req_blocked...............: avg=454.86µs min=1.72µs   med=3.63µs  max=415.79ms p(90)=5.37µs   p(95)=6.34µs  
     http_req_connecting............: avg=426.6µs  min=0s       med=0s      max=308.37ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=4.8s     min=11.92ms  med=4.48s   max=1m0s     p(90)=5.59s    p(95)=6.8s    
       { expected_response:true }...: avg=4.66s    min=11.92ms  med=4.48s   max=59.96s   p(90)=5.56s    p(95)=6.74s   
     http_req_failed................: 0.26%  ✓ 161        ✗ 61456
     http_req_receiving.............: avg=6.44ms   min=0s       med=78.05µs max=940.79ms p(90)=596.91µs p(95)=9.85ms  
     http_req_sending...............: avg=1.33ms   min=8.17µs   med=17.32µs max=935.75ms p(90)=40.78µs  p(95)=172.96µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=4.8s     min=11.83ms  med=4.47s   max=1m0s     p(90)=5.57s    p(95)=6.8s    
     http_reqs......................: 61617  101.954371/s
     iteration_duration.............: avg=4.88s    min=334.11ms med=4.56s   max=1m0s     p(90)=5.7s     p(95)=6.89s   
     iterations.....................: 61597  101.921278/s
     vus............................: 128    min=128      max=500
     vus_max........................: 500    min=500      max=500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/34795d6f-6fbc-4626-9dea-5a8e15537000/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9cf86be0-48cc-4153-8eed-4788a253e600/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b17283d3-64be-4063-c43b-3e8879360400/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  94% — ✓ 48432 / ✗ 2730
     ✗ no graphql errors
      ↳  94% — ✓ 48432 / ✗ 2730
     ✓ valid response structure

     █ setup

     checks.........................: 96.37% ✓ 145296    ✗ 5460 
     data_received..................: 4.3 GB 7.1 MB/s
     data_sent......................: 61 MB  101 kB/s
     http_req_blocked...............: avg=824.05µs min=1.25µs   med=2.84µs   max=239.2ms  p(90)=5.14µs   p(95)=302.07µs
     http_req_connecting............: avg=779.89µs min=0s       med=0s       max=200.51ms p(90)=0s       p(95)=240.83µs
     http_req_duration..............: avg=5.85s    min=14.49ms  med=2.77s    max=1m0s     p(90)=3.09s    p(95)=59.95s  
       { expected_response:true }...: avg=2.8s     min=14.49ms  med=2.77s    max=59.73s   p(90)=2.99s    p(95)=3.09s   
     http_req_failed................: 5.33%  ✓ 2730      ✗ 48452
     http_req_receiving.............: avg=228.07µs min=0s       med=103.18µs max=174.26ms p(90)=168.91µs p(95)=201.24µs
     http_req_sending...............: avg=245.08µs min=7.93µs   med=14.53µs  max=297.3ms  p(90)=32.18µs  p(95)=118.92µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=5.85s    min=14.37ms  med=2.77s    max=1m0s     p(90)=3.09s    p(95)=59.94s  
     http_reqs......................: 51182  84.893736/s
     iteration_duration.............: avg=5.87s    min=534.05ms med=2.79s    max=1m0s     p(90)=3.11s    p(95)=1m0s    
     iterations.....................: 51162  84.860563/s
     vus............................: 116    min=116     max=500
     vus_max........................: 500    min=500     max=500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/39aed544-3997-43b1-d0ff-2b1a0115f600/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b3594bc0-bfcb-4463-b2a9-0d27e0435600/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e88eb815-e840-47eb-929b-1787c7844600/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     █ setup

     checks.........................: 100.00% ✓ 101646    ✗ 0    
     data_received..................: 3.0 GB  4.9 MB/s
     data_sent......................: 40 MB   67 kB/s
     http_req_blocked...............: avg=229.35µs min=1.29µs   med=3.35µs   max=34.84ms  p(90)=4.51µs   p(95)=5.08µs  
     http_req_connecting............: avg=221.12µs min=0s       med=0s       max=32.11ms  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=8.85s    min=13.9ms   med=8.93s    max=17.78s   p(90)=9.18s    p(95)=9.45s   
       { expected_response:true }...: avg=8.85s    min=13.9ms   med=8.93s    max=17.78s   p(90)=9.18s    p(95)=9.45s   
     http_req_failed................: 0.00%   ✓ 0         ✗ 33902
     http_req_receiving.............: avg=559.66µs min=39.57µs  med=112.22µs max=759.47ms p(90)=162.84µs p(95)=184.36µs
     http_req_sending...............: avg=38.74µs  min=8.52µs   med=17.82µs  max=24.91ms  p(90)=30.49µs  p(95)=35.67µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=8.85s    min=13.81ms  med=8.93s    max=17.78s   p(90)=9.18s    p(95)=9.45s   
     http_reqs......................: 33902   56.195847/s
     iteration_duration.............: avg=8.87s    min=530.53ms med=8.94s    max=17.79s   p(90)=9.19s    p(95)=9.46s   
     iterations.....................: 33882   56.162695/s
     vus............................: 53      min=53      max=500
     vus_max........................: 500     min=500     max=500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/82f6cd1f-b347-45ae-575e-26cf4d88b100/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/730e0a86-63f1-4a78-6871-12060feb1d00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/97fac7e7-918c-47ea-7051-e2a499a48400/public" alt="HTTP Overview" />


  </details>