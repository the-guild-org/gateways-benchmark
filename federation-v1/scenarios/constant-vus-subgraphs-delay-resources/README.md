## Overview for: `constant-vus-subgraphs-delay-resources`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. It's being executed with a constant amount of VUs over a fixed amount of time. It measure things like memory usage, CPU usage, average RPS. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was running 500 VUs over 600s


### Comparison


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/34e4fe71-8717-49ca-6be5-dd1cc8d9e600/public" alt="Comparison" />


| Gateway             | RPS ⬇️ |         Requests         |          Duration          | Notes                                                                          |
| :------------------ | :----: | :----------------------: | :------------------------: | :----------------------------------------------------------------------------- |
| wundergraph         |  189   |  113852 total, 0 failed  |  avg: 1851ms, p95: 3451ms  | ✅                                                                              |
| apollo-router       |  185   |  111774 total, 0 failed  |  avg: 1650ms, p95: 3340ms  | ✅                                                                              |
| mesh-supergraph-bun |  105   |  64050 total, 0 failed   |  avg: 4609ms, p95: 7923ms  | ✅                                                                              |
| mesh-bun            |  101   |  61430 total, 0 failed   |  avg: 4785ms, p95: 8068ms  | ✅                                                                              |
| mesh                |   98   |  59372 total, 0 failed   |  avg: 4967ms, p95: 5818ms  | ✅                                                                              |
| mesh-supergraph     |   90   |  54828 total, 0 failed   |  avg: 5359ms, p95: 6474ms  | ✅                                                                              |
| apollo-server       |   67   | 40896 total, 2610 failed | avg: 7327ms, p95: 59989ms  | ❌ 2610 failed requests, 2610 non-200 responses, 2610 unexpected GraphQL errors |
| mercurius           |   12   |   7944 total, 0 failed   | avg: 38429ms, p95: 41567ms | ✅                                                                              |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 341556     ✗ 0     
     data_received..................: 10 GB   17 MB/s
     data_sent......................: 135 MB  225 kB/s
     http_req_blocked...............: avg=395.41µs min=1.18µs   med=3.14µs  max=2.74s  p(90)=5.32µs  p(95)=6.64µs 
     http_req_connecting............: avg=169.73µs min=0s       med=0s      max=2.37s  p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=1.85s    min=563.53ms med=1.65s   max=9.41s  p(90)=2.92s   p(95)=3.45s  
       { expected_response:true }...: avg=1.85s    min=563.53ms med=1.65s   max=9.41s  p(90)=2.92s   p(95)=3.45s  
     http_req_failed................: 0.00%   ✓ 0          ✗ 113852
     http_req_receiving.............: avg=331.59ms min=25.81µs  med=83.86µs max=6.78s  p(90)=1.43s   p(95)=1.97s  
     http_req_sending...............: avg=27.69ms  min=6.32µs   med=13.75µs max=5.03s  p(90)=40.17µs p(95)=15.05ms
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s     p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=1.49s    min=563.46ms med=1.42s   max=4.47s  p(90)=2.08s   p(95)=2.25s  
     http_reqs......................: 113852  189.098377/s
     iteration_duration.............: avg=2.62s    min=625.17ms med=2.27s   max=16.96s p(90)=4.56s   p(95)=5.39s  
     iterations.....................: 113852  189.098377/s
     vus............................: 5       min=5        max=500 
     vus_max........................: 500     min=500      max=500 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1a87a06f-c498-4c81-3872-4f16a77a7100/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3caaa30e-f08e-4584-714f-a9a8b8cc7c00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9a773a2d-9b6b-4687-bcd8-15cb271fda00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 335322     ✗ 0     
     data_received..................: 9.8 GB  16 MB/s
     data_sent......................: 133 MB  221 kB/s
     http_req_blocked...............: avg=1.47ms  min=1.32µs   med=3.13µs  max=6.81s  p(90)=5.07µs  p(95)=6.32µs  
     http_req_connecting............: avg=1.05ms  min=0s       med=0s      max=6.81s  p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=1.65s   min=196.45ms med=1.48s   max=10.45s p(90)=2.74s   p(95)=3.33s   
       { expected_response:true }...: avg=1.65s   min=196.45ms med=1.48s   max=10.45s p(90)=2.74s   p(95)=3.33s   
     http_req_failed................: 0.00%   ✓ 0          ✗ 111774
     http_req_receiving.............: avg=371.1ms min=23.45µs  med=73.66µs max=9.43s  p(90)=1.54s   p(95)=2.2s    
     http_req_sending...............: avg=24.18ms min=6.65µs   med=13.93µs max=6.74s  p(90)=32.76µs p(95)=278.32µs
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s      max=0s     p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=1.25s   min=196.36ms med=1.2s    max=4.98s  p(90)=1.93s   p(95)=2.15s   
     http_reqs......................: 111774  185.771479/s
     iteration_duration.............: avg=2.66s   min=265.48ms med=2.33s   max=13.63s p(90)=4.83s   p(95)=5.8s    
     iterations.....................: 111774  185.771479/s
     vus............................: 249     min=249      max=500 
     vus_max........................: 500     min=500      max=500 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/bff4a501-cd55-47d3-b944-2102098ae300/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ab6cd858-3334-4542-989c-b06432738400/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6eca62c5-01ae-493f-fc19-711ae4917300/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 192150    ✗ 0    
     data_received..................: 5.6 GB  9.3 MB/s
     data_sent......................: 76 MB   126 kB/s
     http_req_blocked...............: avg=215.4µs  min=1.48µs  med=3.5µs   max=560.36ms p(90)=5.76µs  p(95)=7.06µs  
     http_req_connecting............: avg=141.33µs min=0s      med=0s      max=43.28ms  p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=4.6s     min=1.84s   med=4.1s    max=9.27s    p(90)=7.44s   p(95)=7.92s   
       { expected_response:true }...: avg=4.6s     min=1.84s   med=4.1s    max=9.27s    p(90)=7.44s   p(95)=7.92s   
     http_req_failed................: 0.00%   ✓ 0         ✗ 64050
     http_req_receiving.............: avg=35.4ms   min=29.66µs med=71.42µs max=2.88s    p(90)=18.8ms  p(95)=224.64ms
     http_req_sending...............: avg=2.77ms   min=6.99µs  med=15.08µs max=1.36s    p(90)=40.32µs p(95)=531.4µs 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=4.57s    min=1.84s   med=4.07s   max=9.08s    p(90)=7.41s   p(95)=7.87s   
     http_reqs......................: 64050   105.92035/s
     iteration_duration.............: avg=4.71s    min=1.84s   med=4.18s   max=9.54s    p(90)=7.57s   p(95)=8.05s   
     iterations.....................: 64050   105.92035/s
     vus............................: 128     min=128     max=500
     vus_max........................: 500     min=500     max=500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8bd73580-2b2f-4ac0-430d-77108c020a00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/258498f5-b1ff-4135-8937-104de86ff900/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/deff1a96-4c03-462c-68fc-c88816e40b00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 184290     ✗ 0    
     data_received..................: 5.4 GB  8.9 MB/s
     data_sent......................: 73 MB   121 kB/s
     http_req_blocked...............: avg=411.46µs min=1.28µs  med=3.07µs  max=750.54ms p(90)=4.93µs  p(95)=6.04µs  
     http_req_connecting............: avg=353.9µs  min=0s      med=0s      max=81.06ms  p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=4.78s    min=2.39s   med=4.11s   max=9.52s    p(90)=7.69s   p(95)=8.06s   
       { expected_response:true }...: avg=4.78s    min=2.39s   med=4.11s   max=9.52s    p(90)=7.69s   p(95)=8.06s   
     http_req_failed................: 0.00%   ✓ 0          ✗ 61430
     http_req_receiving.............: avg=35.35ms  min=26.69µs med=64.98µs max=2.35s    p(90)=17.19ms p(95)=221.91ms
     http_req_sending...............: avg=2.91ms   min=7.41µs  med=13.76µs max=1.27s    p(90)=33.36µs p(95)=457.91µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=4.74s    min=2.39s   med=4.08s   max=9.02s    p(90)=7.66s   p(95)=8.03s   
     http_reqs......................: 61430   101.774277/s
     iteration_duration.............: avg=4.9s     min=2.42s   med=4.2s    max=9.61s    p(90)=7.88s   p(95)=8.25s   
     iterations.....................: 61430   101.774277/s
     vus............................: 121     min=121      max=500
     vus_max........................: 500     min=500      max=500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5016fad9-d041-4e3f-124c-3c2070cd8700/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/aa45ae89-8ea6-4b00-deb1-f06d6c545d00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/768cf21a-4fbf-4a68-9d33-984c7addc600/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 178116    ✗ 0    
     data_received..................: 5.2 GB  8.6 MB/s
     data_sent......................: 71 MB   117 kB/s
     http_req_blocked...............: avg=175.55µs min=1.55µs med=3.73µs  max=257.47ms p(90)=5.79µs  p(95)=7.12µs  
     http_req_connecting............: avg=153.15µs min=0s     med=0s      max=39.17ms  p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=4.96s    min=2.4s   med=4.94s   max=9.17s    p(90)=5.6s    p(95)=5.81s   
       { expected_response:true }...: avg=4.96s    min=2.4s   med=4.94s   max=9.17s    p(90)=5.6s    p(95)=5.81s   
     http_req_failed................: 0.00%   ✓ 0         ✗ 59372
     http_req_receiving.............: avg=13.71ms  min=33µs   med=71.28µs max=1.44s    p(90)=2.3ms   p(95)=27.42ms 
     http_req_sending...............: avg=1.66ms   min=8.44µs med=16.46µs max=853.48ms p(90)=34.62µs p(95)=147.75µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=4.95s    min=2.4s   med=4.92s   max=9.17s    p(90)=5.58s   p(95)=5.78s   
     http_reqs......................: 59372   98.387607/s
     iteration_duration.............: avg=5.07s    min=2.4s   med=5.03s   max=9.22s    p(90)=5.74s   p(95)=5.98s   
     iterations.....................: 59372   98.387607/s
     vus............................: 216     min=216     max=500
     vus_max........................: 500     min=500     max=500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/932513cc-d9af-403f-4b30-a4dc5e8fdf00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/dfede86c-f310-49e1-ac69-699ce785eb00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/958b7119-2561-4898-5d50-5c4784826000/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 164484    ✗ 0    
     data_received..................: 4.8 GB  8.0 MB/s
     data_sent......................: 65 MB   108 kB/s
     http_req_blocked...............: avg=367.4µs min=1.64µs  med=4.71µs  max=253.18ms p(90)=7.73µs  p(95)=9.61µs  
     http_req_connecting............: avg=321.8µs min=0s      med=0s      max=118.36ms p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=5.35s   min=2.53s   med=5.3s    max=10.38s   p(90)=6.2s    p(95)=6.47s   
       { expected_response:true }...: avg=5.35s   min=2.53s   med=5.3s    max=10.38s   p(90)=6.2s    p(95)=6.47s   
     http_req_failed................: 0.00%   ✓ 0         ✗ 54828
     http_req_receiving.............: avg=17.09ms min=37.62µs med=92.95µs max=2.99s    p(90)=3.84ms  p(95)=47.66ms 
     http_req_sending...............: avg=2.18ms  min=9µs     med=20.56µs max=2.22s    p(90)=49.22µs p(95)=207.66µs
     http_req_tls_handshaking.......: avg=0s      min=0s      med=0s      max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=5.33s   min=2.53s   med=5.28s   max=10.36s   p(90)=6.18s   p(95)=6.44s   
     http_reqs......................: 54828   90.800857/s
     iteration_duration.............: avg=5.49s   min=2.6s    med=5.42s   max=10.41s   p(90)=6.39s   p(95)=6.68s   
     iterations.....................: 54828   90.800857/s
     vus............................: 148     min=148     max=500
     vus_max........................: 500     min=500     max=500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/40213c53-4b54-41d4-dc58-a63d97cf7000/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9276fc5a-07e1-46e9-d7ae-110b5fefa300/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d8e87831-5f66-48cc-d3ec-2eb23c977800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  93% — ✓ 38286 / ✗ 2610
     ✗ no graphql errors
      ↳  93% — ✓ 38286 / ✗ 2610
     ✓ valid response structure

     checks.........................: 95.65% ✓ 114858    ✗ 5220 
     data_received..................: 3.4 GB 5.6 MB/s
     data_sent......................: 49 MB  81 kB/s
     http_req_blocked...............: avg=1.57ms   min=1.22µs   med=3.08µs  max=296.19ms p(90)=5.88µs   p(95)=866.8µs 
     http_req_connecting............: avg=1.48ms   min=0s       med=0s      max=294.3ms  p(90)=0s       p(95)=770.44µs
     http_req_duration..............: avg=7.32s    min=743.26ms med=3.8s    max=1m0s     p(90)=4.77s    p(95)=59.98s  
       { expected_response:true }...: avg=3.73s    min=743.26ms med=3.74s   max=59.78s   p(90)=4.45s    p(95)=4.69s   
     http_req_failed................: 6.38%  ✓ 2610      ✗ 38286
     http_req_receiving.............: avg=674.15µs min=0s       med=87.25µs max=237.79ms p(90)=150.13µs p(95)=481.42µs
     http_req_sending...............: avg=516.63µs min=8µs      med=16.07µs max=180.86ms p(90)=36.94µs  p(95)=147.04µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=7.32s    min=742.02ms med=3.8s    max=1m0s     p(90)=4.77s    p(95)=59.98s  
     http_reqs......................: 40896  67.910984/s
     iteration_duration.............: avg=7.34s    min=798.85ms med=3.82s   max=1m0s     p(90)=4.8s     p(95)=1m0s    
     iterations.....................: 40896  67.910984/s
     vus............................: 36     min=36      max=500
     vus_max........................: 500    min=500     max=500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7c7ba766-066c-40e4-ccbe-dce5e2fcbf00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/cffb16e4-cd4d-4c0b-fb86-52fa5e51c000/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4a164ed5-50e5-4a88-ac30-53a3222abe00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 23832     ✗ 0    
     data_received..................: 697 MB  1.1 MB/s
     data_sent......................: 9.6 MB  15 kB/s
     http_req_blocked...............: avg=1.62ms   min=1.44µs  med=3.47µs max=54.37ms p(90)=5.46µs   p(95)=10.2ms 
     http_req_connecting............: avg=1.59ms   min=0s      med=0s     max=52.51ms p(90)=0s       p(95)=9.68ms 
     http_req_duration..............: avg=38.42s   min=11.06s  med=39.58s max=44.38s  p(90)=40.23s   p(95)=41.56s 
       { expected_response:true }...: avg=38.42s   min=11.06s  med=39.58s max=44.38s  p(90)=40.23s   p(95)=41.56s 
     http_req_failed................: 0.00%   ✓ 0         ✗ 7944 
     http_req_receiving.............: avg=119.38µs min=46.79µs med=101µs  max=25.24ms p(90)=139.68µs p(95)=157.6µs
     http_req_sending...............: avg=317.14µs min=7.72µs  med=20.2µs max=15.2ms  p(90)=31.2µs   p(95)=1.53ms 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s      p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=38.42s   min=11.06s  med=39.58s max=44.38s  p(90)=40.23s   p(95)=41.56s 
     http_reqs......................: 7944    12.609488/s
     iteration_duration.............: avg=38.43s   min=11.06s  med=39.59s max=44.39s  p(90)=40.23s   p(95)=41.57s 
     iterations.....................: 7944    12.609488/s
     vus............................: 113     min=113     max=500
     vus_max........................: 500     min=500     max=500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c1886876-fcf0-4590-0c0e-59c4de8ca200/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5ad76a25-5102-40fc-e272-853a5c8b3400/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0cb56d8a-1d84-4259-045e-accbe5e92e00/public" alt="HTTP Overview" />


  </details>