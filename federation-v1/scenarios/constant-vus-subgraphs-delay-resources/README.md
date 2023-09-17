## Overview for: `federation-v1/constant-vus-subgraphs-delay-resources`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. It's being executed with a constant amount of VUs over a fixed amount of time. It measure things like memory usage, CPU usage, average RPS. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was running 500 VUs over 600s


### Comparison


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/17e22866-248d-463a-e158-1d8545041900/public" alt="Comparison" />


| Gateway             | RPS ⬇️ |         Requests         |          Duration          | Notes                                                                          |
| :------------------ | :----: | :----------------------: | :------------------------: | :----------------------------------------------------------------------------- |
| wundergraph         |  192   |  115980 total, 0 failed  |  avg: 1808ms, p95: 3277ms  | ✅                                                                              |
| apollo-router       |  185   |  111874 total, 0 failed  |  avg: 1674ms, p95: 3630ms  | ✅                                                                              |
| mesh-supergraph-bun |  109   |  65985 total, 0 failed   |  avg: 4451ms, p95: 7530ms  | ✅                                                                              |
| mesh-bun            |  102   |  61716 total, 0 failed   |  avg: 4756ms, p95: 7949ms  | ✅                                                                              |
| mesh-supergraph     |  102   |  61806 total, 0 failed   |  avg: 4746ms, p95: 5971ms  | ✅                                                                              |
| mesh                |   95   |  57722 total, 0 failed   |  avg: 5109ms, p95: 5981ms  | ✅                                                                              |
| apollo-server       |   67   | 40608 total, 2610 failed | avg: 7387ms, p95: 59998ms  | ❌ 2610 failed requests, 2610 non-200 responses, 2610 unexpected GraphQL errors |
| mercurius           |   12   |   7941 total, 0 failed   | avg: 38437ms, p95: 41293ms | ✅                                                                              |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 347940     ✗ 0     
     data_received..................: 10 GB   17 MB/s
     data_sent......................: 138 MB  229 kB/s
     http_req_blocked...............: avg=548.99µs min=1.17µs   med=3.04µs  max=4.05s  p(90)=4.89µs  p(95)=6.09µs 
     http_req_connecting............: avg=213.55µs min=0s       med=0s      max=4.05s  p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=1.8s     min=571.75ms med=1.64s   max=8.38s  p(90)=2.76s   p(95)=3.27s  
       { expected_response:true }...: avg=1.8s     min=571.75ms med=1.64s   max=8.38s  p(90)=2.76s   p(95)=3.27s  
     http_req_failed................: 0.00%   ✓ 0          ✗ 115980
     http_req_receiving.............: avg=288.64ms min=21.56µs  med=75.74µs max=7.36s  p(90)=1.19s   p(95)=1.73s  
     http_req_sending...............: avg=24.25ms  min=7.13µs   med=13.2µs  max=5.7s   p(90)=34.32µs p(95)=11.12ms
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s     p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=1.49s    min=541.05ms med=1.44s   max=4.56s  p(90)=2.06s   p(95)=2.22s  
     http_reqs......................: 115980  192.564953/s
     iteration_duration.............: avg=2.57s    min=609.78ms med=2.23s   max=13.54s p(90)=4.45s   p(95)=5.23s  
     iterations.....................: 115980  192.564953/s
     vus............................: 2       min=2        max=500 
     vus_max........................: 500     min=500      max=500 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/56b44ea4-7405-4047-6238-9c4ad7944c00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2f2add10-ebf7-4fec-0e30-d5025ad71000/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f96c808b-12f7-4c9f-130e-44bc03badd00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 335622     ✗ 0     
     data_received..................: 9.8 GB  16 MB/s
     data_sent......................: 133 MB  221 kB/s
     http_req_blocked...............: avg=1.6ms    min=1.26µs   med=3.04µs  max=4.81s  p(90)=5.01µs  p(95)=6.21µs 
     http_req_connecting............: avg=1.1ms    min=0s       med=0s      max=4.81s  p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=1.67s    min=208.76ms med=1.45s   max=10.29s p(90)=2.94s   p(95)=3.63s  
       { expected_response:true }...: avg=1.67s    min=208.76ms med=1.45s   max=10.29s p(90)=2.94s   p(95)=3.63s  
     http_req_failed................: 0.00%   ✓ 0          ✗ 111874
     http_req_receiving.............: avg=408.89ms min=21.35µs  med=72.34µs max=9.31s  p(90)=1.7s    p(95)=2.46s  
     http_req_sending...............: avg=30.44ms  min=7.23µs   med=13.47µs max=6.44s  p(90)=36.88µs p(95)=19.06ms
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s     p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=1.23s    min=208.71ms med=1.18s   max=5.91s  p(90)=1.89s   p(95)=2.12s  
     http_reqs......................: 111874  185.925102/s
     iteration_duration.............: avg=2.67s    min=271.7ms  med=2.29s   max=17.33s p(90)=4.95s   p(95)=5.91s  
     iterations.....................: 111874  185.925102/s
     vus............................: 334     min=334      max=500 
     vus_max........................: 500     min=500      max=500 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/54452d6b-e837-466c-bbd0-afc4ce728300/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ffe9b48b-b9e8-4d81-ba25-c0b7f2d3c600/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5b8d3224-67d5-46c4-4b43-8d8f61329500/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 197955    ✗ 0    
     data_received..................: 5.8 GB  9.6 MB/s
     data_sent......................: 78 MB   130 kB/s
     http_req_blocked...............: avg=211.43µs min=1.25µs  med=3.08µs  max=574.02ms p(90)=5.11µs  p(95)=6.36µs  
     http_req_connecting............: avg=176.99µs min=0s      med=0s      max=42.93ms  p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=4.45s    min=2.02s   med=3.86s   max=9.12s    p(90)=7.17s   p(95)=7.53s   
       { expected_response:true }...: avg=4.45s    min=2.02s   med=3.86s   max=9.12s    p(90)=7.17s   p(95)=7.53s   
     http_req_failed................: 0.00%   ✓ 0         ✗ 65985
     http_req_receiving.............: avg=32.76ms  min=27.77µs med=67.3µs  max=2.45s    p(90)=7.19ms  p(95)=194.28ms
     http_req_sending...............: avg=3.05ms   min=7.05µs  med=13.92µs max=1.5s     p(90)=35.53µs p(95)=196.52µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=4.41s    min=2.02s   med=3.83s   max=8.53s    p(90)=7.14s   p(95)=7.48s   
     http_reqs......................: 65985   109.24058/s
     iteration_duration.............: avg=4.56s    min=2.03s   med=3.94s   max=9.3s     p(90)=7.33s   p(95)=7.73s   
     iterations.....................: 65985   109.24058/s
     vus............................: 80      min=80      max=500
     vus_max........................: 500     min=500     max=500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/08df151f-c8fa-4ff5-776c-542c95f00d00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/853570bc-a364-4f27-6f11-35dd38c26f00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3f9f3af2-0fd0-4cb7-e753-a1cbff405600/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 185148    ✗ 0    
     data_received..................: 5.4 GB  9.0 MB/s
     data_sent......................: 73 MB   122 kB/s
     http_req_blocked...............: avg=219.78µs min=1.18µs med=2.92µs  max=402.4ms p(90)=4.71µs  p(95)=5.75µs  
     http_req_connecting............: avg=177.97µs min=0s     med=0s      max=56.24ms p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=4.75s    min=2.3s   med=4.09s   max=9.74s   p(90)=7.67s   p(95)=7.94s   
       { expected_response:true }...: avg=4.75s    min=2.3s   med=4.09s   max=9.74s   p(90)=7.67s   p(95)=7.94s   
     http_req_failed................: 0.00%   ✓ 0         ✗ 61716
     http_req_receiving.............: avg=38.44ms  min=27.8µs med=63.24µs max=2.66s   p(90)=11.61ms p(95)=227.57ms
     http_req_sending...............: avg=3.52ms   min=7.2µs  med=13.38µs max=1.82s   p(90)=30.76µs p(95)=162.86µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=4.71s    min=2.3s   med=4.06s   max=9.15s   p(90)=7.65s   p(95)=7.91s   
     http_reqs......................: 61716   102.35158/s
     iteration_duration.............: avg=4.87s    min=2.31s  med=4.17s   max=10.1s   p(90)=7.85s   p(95)=8.14s   
     iterations.....................: 61716   102.35158/s
     vus............................: 59      min=59      max=500
     vus_max........................: 500     min=500     max=500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a3d0536f-d310-42b9-405f-ceddc3f72000/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a2fadea9-a4d1-47f7-093a-b001a71b6d00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/febb1de2-29ed-41a1-2316-177bad28f300/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 185418     ✗ 0    
     data_received..................: 5.4 GB  9.0 MB/s
     data_sent......................: 73 MB   122 kB/s
     http_req_blocked...............: avg=176.78µs min=1.87µs  med=4.43µs  max=340.03ms p(90)=6.72µs p(95)=7.65µs  
     http_req_connecting............: avg=133.83µs min=0s      med=0s      max=39.17ms  p(90)=0s     p(95)=0s      
     http_req_duration..............: avg=4.74s    min=1.94s   med=4.69s   max=8.27s    p(90)=5.73s  p(95)=5.97s   
       { expected_response:true }...: avg=4.74s    min=1.94s   med=4.69s   max=8.27s    p(90)=5.73s  p(95)=5.97s   
     http_req_failed................: 0.00%   ✓ 0          ✗ 61806
     http_req_receiving.............: avg=19.75ms  min=31.62µs med=79.83µs max=2.13s    p(90)=3.8ms  p(95)=66.27ms 
     http_req_sending...............: avg=1.84ms   min=8.49µs  med=20.98µs max=2.09s    p(90)=40.3µs p(95)=156.58µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s       p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=4.72s    min=1.94s   med=4.67s   max=8.01s    p(90)=5.7s   p(95)=5.93s   
     http_reqs......................: 61806   102.459598/s
     iteration_duration.............: avg=4.86s    min=1.99s   med=4.81s   max=8.87s    p(90)=5.88s  p(95)=6.15s   
     iterations.....................: 61806   102.459598/s
     vus............................: 120     min=120      max=500
     vus_max........................: 500     min=500      max=500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a9c39f45-ebad-445c-c8e3-6caa6a8fd000/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f57f5bce-f93b-4a24-2bf3-8781ee716700/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a75da5e9-6fb0-46a1-fdf8-a3779ad1f400/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 173166   ✗ 0    
     data_received..................: 5.1 GB  8.4 MB/s
     data_sent......................: 69 MB   114 kB/s
     http_req_blocked...............: avg=193.13µs min=1.94µs  med=4.75µs  max=195.6ms p(90)=6.82µs  p(95)=7.91µs  
     http_req_connecting............: avg=151.06µs min=0s      med=0s      max=33.46ms p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=5.1s     min=2.9s    med=5.1s    max=9.28s   p(90)=5.77s   p(95)=5.98s   
       { expected_response:true }...: avg=5.1s     min=2.9s    med=5.1s    max=9.28s   p(90)=5.77s   p(95)=5.98s   
     http_req_failed................: 0.00%   ✓ 0        ✗ 57722
     http_req_receiving.............: avg=12.95ms  min=33.25µs med=84.93µs max=2.81s   p(90)=2.1ms   p(95)=23.38ms 
     http_req_sending...............: avg=1.75ms   min=8.27µs  med=23.68µs max=2.03s   p(90)=42.13µs p(95)=159.89µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=5.09s    min=2.79s   med=5.09s   max=8.45s   p(90)=5.75s   p(95)=5.95s   
     http_reqs......................: 57722   95.61364/s
     iteration_duration.............: avg=5.21s    min=2.94s   med=5.2s    max=9.36s   p(90)=5.92s   p(95)=6.16s   
     iterations.....................: 57722   95.61364/s
     vus............................: 180     min=180    max=500
     vus_max........................: 500     min=500    max=500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/94d3805f-67f4-4582-61c6-981497a6bd00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7f94377e-5331-4b66-9a51-a18ddcb11100/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2d92f491-c393-4521-8d3b-a4bf8bfc5d00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  93% — ✓ 37998 / ✗ 2610
     ✗ no graphql errors
      ↳  93% — ✓ 37998 / ✗ 2610
     ✓ valid response structure

     checks.........................: 95.62% ✓ 113994    ✗ 5220 
     data_received..................: 3.3 GB 5.5 MB/s
     data_sent......................: 48 MB  80 kB/s
     http_req_blocked...............: avg=686.41µs min=1.39µs   med=3.2µs   max=200.35ms p(90)=6.15µs   p(95)=248.62µs
     http_req_connecting............: avg=619.65µs min=0s       med=0s      max=182.62ms p(90)=0s       p(95)=188.2µs 
     http_req_duration..............: avg=7.38s    min=797.06ms med=3.82s   max=1m0s     p(90)=4.81s    p(95)=59.99s  
       { expected_response:true }...: avg=3.77s    min=797.06ms med=3.77s   max=59.84s   p(90)=4.5s     p(95)=4.73s   
     http_req_failed................: 6.42%  ✓ 2610      ✗ 37998
     http_req_receiving.............: avg=694.33µs min=0s       med=88.74µs max=176ms    p(90)=152.28µs p(95)=492.22µs
     http_req_sending...............: avg=313.47µs min=8.2µs    med=16.06µs max=179.67ms p(90)=33.02µs  p(95)=98.38µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=7.38s    min=796.99ms med=3.82s   max=1m0s     p(90)=4.81s    p(95)=59.99s  
     http_reqs......................: 40608  67.299143/s
     iteration_duration.............: avg=7.4s     min=806.53ms med=3.84s   max=1m0s     p(90)=4.84s    p(95)=1m0s    
     iterations.....................: 40608  67.299143/s
     vus............................: 114    min=114     max=500
     vus_max........................: 500    min=500     max=500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/02dfe141-7374-4bb9-309e-63534c794c00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9fe2f13b-9d45-49d3-f9a2-2f3f62d6f000/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ea32c78b-e40a-4f1e-2248-2b2de2e90000/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 23823     ✗ 0    
     data_received..................: 697 MB  1.1 MB/s
     data_sent......................: 9.6 MB  15 kB/s
     http_req_blocked...............: avg=198.52µs min=1.35µs  med=3.16µs  max=70.39ms p(90)=5.17µs   p(95)=79.43µs 
     http_req_connecting............: avg=152.99µs min=0s      med=0s      max=24.16ms p(90)=0s       p(95)=50.76µs 
     http_req_duration..............: avg=38.43s   min=11.46s  med=39.59s  max=43.68s  p(90)=40.2s    p(95)=41.29s  
       { expected_response:true }...: avg=38.43s   min=11.46s  med=39.59s  max=43.68s  p(90)=40.2s    p(95)=41.29s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 7941 
     http_req_receiving.............: avg=112.88µs min=41.46µs med=96.47µs max=12.76ms p(90)=131.06µs p(95)=148.07µs
     http_req_sending...............: avg=559.73µs min=7.87µs  med=18.36µs max=42.82ms p(90)=27.9µs   p(95)=32.55µs 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=38.43s   min=11.46s  med=39.59s  max=43.68s  p(90)=40.2s    p(95)=41.29s  
     http_reqs......................: 7941    12.604716/s
     iteration_duration.............: avg=38.44s   min=11.46s  med=39.6s   max=43.68s  p(90)=40.21s   p(95)=41.3s   
     iterations.....................: 7941    12.604716/s
     vus............................: 116     min=116     max=500
     vus_max........................: 500     min=500     max=500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/900014ee-8373-43aa-848d-301980aef900/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/245e1b2b-3efb-43ba-f168-228b2c81c200/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/40ecf690-56b1-4396-e0fe-0a9bae02c700/public" alt="HTTP Overview" />


  </details>