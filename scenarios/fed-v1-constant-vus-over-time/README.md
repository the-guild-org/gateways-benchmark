## Overview for: `scenarios/fed-v1-constant-vus-over-time`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. It's being executed with a constant amount of VUs over a fixed amount of time. It measure things like memory usage, CPU usage, average RPS. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was running 400 VUs over 200s


### Comparison


| Gateway                             | RPS ⬇️ |        Requests         |         Duration          |
| :---------------------------------- | :----: | :---------------------: | :-----------------------: |
| wundergraph                         |  3255  | 651195 total, 0 failed  |  avg: 116ms, p95: 221ms   |
| apollo-gateway-with-yoga-bun        |  221   |  44410 total, 0 failed  | avg: 1803ms, p95: 2041ms  |
| mesh                                |  217   |  43578 total, 0 failed  | avg: 1838ms, p95: 2226ms  |
| apollo-server-node16                |  150   |  30369 total, 0 failed  | avg: 2643ms, p95: 3442ms  |
| mercurius                           |  143   |  29010 total, 0 failed  | avg: 2769ms, p95: 3011ms  |
| stitching-federation-with-yoga-bun  |  118   |  23966 total, 0 failed  | avg: 3362ms, p95: 5383ms  |
| apollo-router                       |  113   |  22893 total, 0 failed  | avg: 3513ms, p95: 5348ms  |
| stitching-federation-with-yoga-deno |  105   |  21301 total, 0 failed  | avg: 3774ms, p95: 4128ms  |
| apollo-gateway-with-yoga            |   93   | 19112 total, 423 failed | avg: 4226ms, p95: 3266ms  |
| apollo-server                       |   79   | 16040 total, 73 failed  | avg: 5032ms, p95: 6260ms  |
| stitching-federation-with-yoga-uws  |   79   |  16121 total, 0 failed  | avg: 5016ms, p95: 7199ms  |
| stitching-federation-with-yoga      |   63   | 13320 total, 555 failed | avg: 6154ms, p95: 29307ms |
| mesh-supergraph                     |   61   |  12515 total, 0 failed  | avg: 6428ms, p95: 7304ms  |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 1953585     ✗ 0     
     data_received..................: 94 MB   472 kB/s
     data_sent......................: 773 MB  3.9 MB/s
     http_req_blocked...............: avg=118.5µs  min=700ns   med=1.5µs    max=471.49ms p(90)=2.8µs    p(95)=3.7µs   
     http_req_connecting............: avg=109.43µs min=0s      med=0s       max=367.6ms  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=115.82ms min=238.6µs med=105.01ms max=896.41ms p(90)=179.09ms p(95)=220.69ms
       { expected_response:true }...: avg=115.82ms min=238.6µs med=105.01ms max=896.41ms p(90)=179.09ms p(95)=220.69ms
   ✓ http_req_failed................: 0.00%   ✓ 0           ✗ 651195
     http_req_receiving.............: avg=532.27µs min=10.1µs  med=20.6µs   max=377.63ms p(90)=63.2µs   p(95)=210.1µs 
     http_req_sending...............: avg=229.71µs min=5.5µs   med=9.29µs   max=285.64ms p(90)=23.3µs   p(95)=93µs    
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=115.06ms min=208.5µs med=104.48ms max=896.37ms p(90)=177.49ms p(95)=218.61ms
     http_reqs......................: 651195  3255.223712/s
     iteration_duration.............: avg=122.71ms min=331.7µs med=109.31ms max=896.55ms p(90)=190.98ms p(95)=236.57ms
     iterations.....................: 651195  3255.223712/s
     vus............................: 400     min=400       max=400 
     vus_max........................: 400     min=400       max=400 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8140c959-772a-48b6-ff63-32728a1e0100/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7b16d808-efe8-4f92-5834-ac042970c100/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/580c2cca-397e-4b11-0c45-76eb97a91700/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 133230     ✗ 0    
     data_received..................: 224 MB  1.1 MB/s
     data_sent......................: 53 MB   263 kB/s
     http_req_blocked...............: avg=421.82µs min=700ns  med=1.6µs max=94.61ms  p(90)=2.2µs   p(95)=2.8µs  
     http_req_connecting............: avg=413.17µs min=0s     med=0s    max=90.06ms  p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=1.8s     min=1.13s  med=1.76s max=5.43s    p(90)=1.96s   p(95)=2.04s  
       { expected_response:true }...: avg=1.8s     min=1.13s  med=1.76s max=5.43s    p(90)=1.96s   p(95)=2.04s  
   ✓ http_req_failed................: 0.00%   ✓ 0          ✗ 44410
     http_req_receiving.............: avg=270.32µs min=14.7µs med=30µs  max=85.18ms  p(90)=51.09µs p(95)=59.49µs
     http_req_sending...............: avg=78.85µs  min=4.89µs med=10µs  max=123.16ms p(90)=18.99µs p(95)=25.4µs 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s    max=0s       p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=1.8s     min=1.1s   med=1.76s max=5.43s    p(90)=1.96s   p(95)=2.04s  
     http_reqs......................: 44410   221.525098/s
     iteration_duration.............: avg=1.8s     min=1.13s  med=1.76s max=5.43s    p(90)=1.96s   p(95)=2.04s  
     iterations.....................: 44410   221.525098/s
     vus............................: 400     min=400      max=400
     vus_max........................: 400     min=400      max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4a65e1fc-898b-4bf9-702a-86d682552500/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/31ca8ae0-8e43-4645-522b-e057cc664b00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/005bfc22-bb84-4fd0-26f7-da2241839b00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 130734     ✗ 0    
     data_received..................: 56 MB   277 kB/s
     data_sent......................: 52 MB   258 kB/s
     http_req_blocked...............: avg=566.66µs min=1µs      med=2.1µs  max=115.6ms p(90)=3.3µs  p(95)=4.3µs  
     http_req_connecting............: avg=554.6µs  min=0s       med=0s     max=91.04ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=1.83s    min=760.51ms med=1.8s   max=4.71s   p(90)=2.06s  p(95)=2.22s  
       { expected_response:true }...: avg=1.83s    min=760.51ms med=1.8s   max=4.71s   p(90)=2.06s  p(95)=2.22s  
   ✓ http_req_failed................: 0.00%   ✓ 0          ✗ 43578
     http_req_receiving.............: avg=97.22µs  min=15.6µs   med=41.1µs max=56.91ms p(90)=75.1µs p(95)=118.8µs
     http_req_sending...............: avg=129.74µs min=7.4µs    med=13.5µs max=90.09ms p(90)=28.7µs p(95)=69.3µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=1.83s    min=760.46ms med=1.8s   max=4.7s    p(90)=2.06s  p(95)=2.22s  
     http_reqs......................: 43578   217.064027/s
     iteration_duration.............: avg=1.83s    min=760.68ms med=1.8s   max=4.73s   p(90)=2.06s  p(95)=2.22s  
     iterations.....................: 43578   217.064027/s
     vus............................: 216     min=216      max=400
     vus_max........................: 400     min=400      max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/35fefc51-920e-4c88-cb7a-15305a1bb900/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1a2a4370-1c3c-4cbc-92ff-e225991bad00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/87081708-1b3b-44b2-384c-ed0524372d00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server-node16`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 91107      ✗ 0    
     data_received..................: 159 MB  788 kB/s
     data_sent......................: 36 MB   179 kB/s
     http_req_blocked...............: avg=616.14µs min=800ns  med=1.7µs  max=131.14ms p(90)=2.7µs  p(95)=3.3µs  
     http_req_connecting............: avg=603.1µs  min=0s     med=0s     max=102.75ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=2.64s    min=1.62s  med=2.5s   max=6.65s    p(90)=3.18s  p(95)=3.44s  
       { expected_response:true }...: avg=2.64s    min=1.62s  med=2.5s   max=6.65s    p(90)=3.18s  p(95)=3.44s  
   ✓ http_req_failed................: 0.00%   ✓ 0          ✗ 30369
     http_req_receiving.............: avg=73.77µs  min=17.5µs med=40.8µs max=31.15ms  p(90)=63µs   p(95)=75.05µs
     http_req_sending...............: avg=130.09µs min=6.1µs  med=10.9µs max=48.72ms  p(90)=23.9µs p(95)=27.3µs 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=2.64s    min=1.62s  med=2.5s   max=6.65s    p(90)=3.18s  p(95)=3.44s  
     http_reqs......................: 30369   150.821542/s
     iteration_duration.............: avg=2.64s    min=1.63s  med=2.5s   max=6.69s    p(90)=3.18s  p(95)=3.44s  
     iterations.....................: 30369   150.821542/s
     vus............................: 252     min=252      max=400
     vus_max........................: 400     min=400      max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c089dcdc-fde8-4a30-9abc-6df1a3f1bc00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1bc9abb4-8149-4430-6dad-af7896115d00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1a1932b4-bd48-445c-8443-12cc32321900/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 87030      ✗ 0    
     data_received..................: 131 MB  649 kB/s
     data_sent......................: 34 MB   171 kB/s
     http_req_blocked...............: avg=601.41µs min=1µs    med=2.1µs  max=146.59ms p(90)=3.2µs  p(95)=4µs   
     http_req_connecting............: avg=590.37µs min=0s     med=0s     max=146.56ms p(90)=0s     p(95)=0s    
     http_req_duration..............: avg=2.76s    min=1.47s  med=2.76s  max=6.26s    p(90)=2.95s  p(95)=3.01s 
       { expected_response:true }...: avg=2.76s    min=1.47s  med=2.76s  max=6.26s    p(90)=2.95s  p(95)=3.01s 
   ✓ http_req_failed................: 0.00%   ✓ 0          ✗ 29010
     http_req_receiving.............: avg=54.3µs   min=17.8µs med=44.8µs max=23.45ms  p(90)=75.7µs p(95)=85.3µs
     http_req_sending...............: avg=52.45µs  min=6.4µs  med=12.3µs max=36.49ms  p(90)=24.8µs p(95)=30.7µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s     p(95)=0s    
     http_req_waiting...............: avg=2.76s    min=1.47s  med=2.76s  max=6.26s    p(90)=2.95s  p(95)=3.01s 
     http_reqs......................: 29010   143.992148/s
     iteration_duration.............: avg=2.76s    min=1.47s  med=2.76s  max=6.26s    p(90)=2.95s  p(95)=3.01s 
     iterations.....................: 29010   143.992148/s
     vus............................: 246     min=246      max=400
     vus_max........................: 400     min=400      max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8408a9ca-f825-404c-7ed9-1ec9636d9200/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/593d9fd3-8ceb-4339-31d3-c3d7b990bd00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ab074edc-7a6c-4018-30ff-3a60fb8f5300/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 71898      ✗ 0    
     data_received..................: 121 MB  598 kB/s
     data_sent......................: 28 MB   141 kB/s
     http_req_blocked...............: avg=1.53ms   min=1.1µs    med=2.1µs  max=197.84ms p(90)=3.4µs  p(95)=4.8µs   
     http_req_connecting............: avg=1.51ms   min=0s       med=0s     max=197.66ms p(90)=0s     p(95)=0s      
     http_req_duration..............: avg=3.36s    min=144.35ms med=3.22s  max=8.35s    p(90)=4.13s  p(95)=5.38s   
       { expected_response:true }...: avg=3.36s    min=144.35ms med=3.22s  max=8.35s    p(90)=4.13s  p(95)=5.38s   
   ✓ http_req_failed................: 0.00%   ✓ 0          ✗ 23966
     http_req_receiving.............: avg=385.32µs min=18.7µs   med=43.1µs max=174.96ms p(90)=81.9µs p(95)=244.61µs
     http_req_sending...............: avg=361.21µs min=7.3µs    med=13.3µs max=222.82ms p(90)=31.8µs p(95)=126.18µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=3.36s    min=143.72ms med=3.22s  max=8.35s    p(90)=4.13s  p(95)=5.38s   
     http_reqs......................: 23966   118.375851/s
     iteration_duration.............: avg=3.36s    min=264.58ms med=3.22s  max=8.35s    p(90)=4.13s  p(95)=5.38s   
     iterations.....................: 23966   118.375851/s
     vus............................: 200     min=200      max=400
     vus_max........................: 400     min=400      max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/441ce9b3-63d7-4c63-7935-40db7dd4a200/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/41ce1af7-e909-40a3-a1f7-ca9305c7e000/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/376ee357-ee23-4b7d-5cec-44f66be9cb00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 68679      ✗ 0    
     data_received..................: 116 MB  572 kB/s
     data_sent......................: 27 MB   134 kB/s
     http_req_blocked...............: avg=1.68ms   min=1.6µs    med=3.4µs  max=195.19ms p(90)=5.5µs   p(95)=20.4µs 
     http_req_connecting............: avg=1.64ms   min=0s       med=0s     max=147.48ms p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=3.51s    min=583.46ms med=3.49s  max=8.9s     p(90)=4.87s   p(95)=5.34s  
       { expected_response:true }...: avg=3.51s    min=583.46ms med=3.49s  max=8.9s     p(90)=4.87s   p(95)=5.34s  
   ✓ http_req_failed................: 0.00%   ✓ 0          ✗ 22893
     http_req_receiving.............: avg=97.71µs  min=28.8µs   med=80.9µs max=18.35ms  p(90)=130.3µs p(95)=157.5µs
     http_req_sending...............: avg=295.11µs min=10.2µs   med=22.9µs max=88.95ms  p(90)=48.7µs  p(95)=66.1µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=3.51s    min=583.31ms med=3.48s  max=8.9s     p(90)=4.87s   p(95)=5.34s  
     http_reqs......................: 22893   113.257605/s
     iteration_duration.............: avg=3.51s    min=584.06ms med=3.49s  max=8.91s    p(90)=4.88s   p(95)=5.35s  
     iterations.....................: 22893   113.257605/s
     vus............................: 222     min=222      max=400
     vus_max........................: 400     min=400      max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a59458bc-9852-4595-7111-0202f8201600/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/743e5722-4522-4e41-f347-f8226be70c00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f86614ed-5d51-44e1-b4b9-c6d7e1574900/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-deno`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 63903      ✗ 0    
     data_received..................: 108 MB  537 kB/s
     data_sent......................: 25 MB   126 kB/s
     http_req_blocked...............: avg=83µs    min=900ns  med=1.9µs  max=23.69ms p(90)=3.3µs  p(95)=4.4µs  
     http_req_connecting............: avg=77.46µs min=0s     med=0s     max=23.65ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=3.77s   min=1.53s  med=3.76s  max=6.3s    p(90)=3.99s  p(95)=4.12s  
       { expected_response:true }...: avg=3.77s   min=1.53s  med=3.76s  max=6.3s    p(90)=3.99s  p(95)=4.12s  
   ✓ http_req_failed................: 0.00%   ✓ 0          ✗ 21301
     http_req_receiving.............: avg=98.34µs min=16.5µs med=33.4µs max=29.13ms p(90)=80µs   p(95)=112.2µs
     http_req_sending...............: avg=49.9µs  min=6.2µs  med=11.4µs max=16.3ms  p(90)=24.6µs p(95)=97.1µs 
     http_req_tls_handshaking.......: avg=0s      min=0s     med=0s     max=0s      p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=3.77s   min=1.53s  med=3.76s  max=6.3s    p(90)=3.99s  p(95)=4.12s  
     http_reqs......................: 21301   105.727115/s
     iteration_duration.............: avg=3.77s   min=1.53s  med=3.76s  max=6.3s    p(90)=3.99s  p(95)=4.12s  
     iterations.....................: 21301   105.727115/s
     vus............................: 332     min=332      max=400
     vus_max........................: 400     min=400      max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/39ae16d8-84bc-4870-bffa-7c94fdfa7f00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/081a2f3b-bf6c-40ca-9e13-c69f24e88c00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ea933eac-91fd-4ebe-3a0f-11f1e6b54900/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  97% — ✓ 18689 / ✗ 423
     ✗ no graphql errors
      ↳  97% — ✓ 18689 / ✗ 423
     ✓ valid response structure

     checks.........................: 98.51% ✓ 56067     ✗ 846  
     data_received..................: 95 MB  465 kB/s
     data_sent......................: 23 MB  111 kB/s
     http_req_blocked...............: avg=1.44ms   min=1.1µs med=2.8µs  max=178.02ms p(90)=4.89µs p(95)=19.9µs  
     http_req_connecting............: avg=1.4ms    min=0s    med=0s     max=177.98ms p(90)=0s     p(95)=0s      
     http_req_duration..............: avg=4.22s    min=1.61s med=2.69s  max=1m0s     p(90)=3.06s  p(95)=3.26s   
       { expected_response:true }...: avg=2.96s    min=1.61s med=2.68s  max=59.74s   p(90)=3.02s  p(95)=3.13s   
   ✓ http_req_failed................: 2.21%  ✓ 423       ✗ 18689
     http_req_receiving.............: avg=84.03µs  min=0s    med=64.1µs max=20.32ms  p(90)=95.9µs p(95)=113.34µs
     http_req_sending...............: avg=352.84µs min=6.5µs med=16.5µs max=73.86ms  p(90)=33.7µs p(95)=87.29µs 
     http_req_tls_handshaking.......: avg=0s       min=0s    med=0s     max=0s       p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=4.22s    min=1.61s med=2.69s  max=1m0s     p(90)=3.06s  p(95)=3.26s   
     http_reqs......................: 19112  93.167395/s
     iteration_duration.............: avg=4.22s    min=1.61s med=2.69s  max=1m0s     p(90)=3.06s  p(95)=3.26s   
     iterations.....................: 19112  93.167395/s
     vus............................: 50     min=50      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/13e8cccc-ab73-48c7-3ba9-da6f6e548d00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a46a6a26-0c7f-45c0-a917-68ce55998e00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/cb31e941-06b6-482c-dd50-852573305800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  99% — ✓ 15967 / ✗ 73
     ✗ no graphql errors
      ↳  99% — ✓ 15967 / ✗ 73
     ✓ valid response structure

     checks.........................: 99.69% ✓ 47901     ✗ 146  
     data_received..................: 83 MB  411 kB/s
     data_sent......................: 19 MB  94 kB/s
     http_req_blocked...............: avg=2.38ms   min=1.1µs med=2.29µs max=181.32ms p(90)=3.6µs  p(95)=14µs   
     http_req_connecting............: avg=2.34ms   min=0s    med=0s     max=165.62ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=5.03s    min=3.2s  med=4.44s  max=1m0s     p(90)=5.62s  p(95)=6.26s  
       { expected_response:true }...: avg=4.78s    min=3.2s  med=4.43s  max=59.72s   p(90)=5.61s  p(95)=6.19s  
   ✓ http_req_failed................: 0.45%  ✓ 73        ✗ 15967
     http_req_receiving.............: avg=74.82µs  min=0s    med=58.8µs max=22.36ms  p(90)=87.5µs p(95)=103.8µs
     http_req_sending...............: avg=521.83µs min=8µs   med=14µs   max=132.31ms p(90)=30.8µs p(95)=42.6µs 
     http_req_tls_handshaking.......: avg=0s       min=0s    med=0s     max=0s       p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=5.03s    min=3.2s  med=4.44s  max=1m0s     p(90)=5.62s  p(95)=6.25s  
     http_reqs......................: 16040  79.043558/s
     iteration_duration.............: avg=5.03s    min=3.2s  med=4.44s  max=1m0s     p(90)=5.62s  p(95)=6.27s  
     iterations.....................: 16040  79.043558/s
     vus............................: 74     min=74      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/13b66e52-4de6-4318-4c99-62fb46bd1400/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6eb98277-a524-4911-38fc-2ae75c2f3600/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/fe84dca9-c18d-426d-44a2-9a5516c29300/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-uws`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 48363     ✗ 0    
     data_received..................: 82 MB   402 kB/s
     data_sent......................: 19 MB   94 kB/s
     http_req_blocked...............: avg=1.5ms    min=1µs    med=2.1µs  max=110.25ms p(90)=3.8µs  p(95)=12.1µs
     http_req_connecting............: avg=1.48ms   min=0s     med=0s     max=110.23ms p(90)=0s     p(95)=0s    
     http_req_duration..............: avg=5.01s    min=2.91s  med=4.82s  max=11.94s   p(90)=5.59s  p(95)=7.19s 
       { expected_response:true }...: avg=5.01s    min=2.91s  med=4.82s  max=11.94s   p(90)=5.59s  p(95)=7.19s 
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 16121
     http_req_receiving.............: avg=65.4µs   min=20.7µs med=52.6µs max=19.06ms  p(90)=83.4µs p(95)=96.7µs
     http_req_sending...............: avg=293.68µs min=7.1µs  med=13.1µs max=76.48ms  p(90)=29.7µs p(95)=98.6µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s     p(95)=0s    
     http_req_waiting...............: avg=5.01s    min=2.91s  med=4.82s  max=11.93s   p(90)=5.59s  p(95)=7.19s 
     http_reqs......................: 16121   79.339599/s
     iteration_duration.............: avg=5.01s    min=2.91s  med=4.82s  max=12.02s   p(90)=5.59s  p(95)=7.19s 
     iterations.....................: 16121   79.339599/s
     vus............................: 173     min=173     max=400
     vus_max........................: 400     min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/825598d5-35c7-4e9c-6abb-ee21b7899800/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f3f712f1-75ae-49dd-148e-0809c08d7800/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/80868941-1e3f-443a-7231-9fe0954b2f00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  95% — ✓ 12765 / ✗ 555
     ✗ no graphql errors
      ↳  95% — ✓ 12765 / ✗ 555
     ✓ valid response structure

     checks.........................: 97.18% ✓ 38295     ✗ 1110 
     data_received..................: 65 MB  308 kB/s
     data_sent......................: 16 MB  75 kB/s
     http_req_blocked...............: avg=1.95ms   min=1.2µs med=2.9µs  max=130.83ms p(90)=14.5µs  p(95)=7.39ms  
     http_req_connecting............: avg=1.88ms   min=0s    med=0s     max=109.97ms p(90)=0s      p(95)=6.63ms  
     http_req_duration..............: avg=6.15s    min=2.11s med=3.26s  max=1m0s     p(90)=4.06s   p(95)=29.3s   
       { expected_response:true }...: avg=3.81s    min=2.11s med=3.25s  max=58.61s   p(90)=3.75s   p(95)=4.58s   
   ✓ http_req_failed................: 4.16%  ✓ 555       ✗ 12765
     http_req_receiving.............: avg=85.34µs  min=0s    med=66.9µs max=20.21ms  p(90)=102.6µs p(95)=120.5µs 
     http_req_sending...............: avg=282.92µs min=7.8µs med=17.8µs max=83.69ms  p(90)=49.3µs  p(95)=322.13µs
     http_req_tls_handshaking.......: avg=0s       min=0s    med=0s     max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=6.15s    min=2.11s med=3.26s  max=1m0s     p(90)=4.06s   p(95)=29.3s   
     http_reqs......................: 13320  63.075372/s
     iteration_duration.............: avg=6.16s    min=2.11s med=3.26s  max=1m0s     p(90)=4.06s   p(95)=29.3s   
     iterations.....................: 13320  63.075372/s
     vus............................: 32     min=32      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c82e49bb-cb9a-4034-b8f6-69b0d985d100/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/defd8c44-897b-4ad3-f12c-1c65021e6f00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1be20b87-a932-421b-8f80-be73ef00e000/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 37545     ✗ 0    
     data_received..................: 63 MB   314 kB/s
     data_sent......................: 15 MB   74 kB/s
     http_req_blocked...............: avg=2.89ms  min=1.1µs med=2.29µs max=227.95ms p(90)=4.3µs  p(95)=13.6µs  
     http_req_connecting............: avg=2.83ms  min=0s    med=0s     max=227.88ms p(90)=0s     p(95)=0s      
     http_req_duration..............: avg=6.42s   min=2.24s med=6.39s  max=9.66s    p(90)=7.07s  p(95)=7.3s    
       { expected_response:true }...: avg=6.42s   min=2.24s med=6.39s  max=9.66s    p(90)=7.07s  p(95)=7.3s    
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 12515
     http_req_receiving.............: avg=76.66µs min=23µs  med=56.7µs max=16.31ms  p(90)=91.5µs p(95)=111.9µs 
     http_req_sending...............: avg=1.64ms  min=7.6µs med=14.1µs max=152.73ms p(90)=31.2µs p(95)=115.16µs
     http_req_tls_handshaking.......: avg=0s      min=0s    med=0s     max=0s       p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=6.42s   min=2.24s med=6.39s  max=9.64s    p(90)=7.07s  p(95)=7.3s    
     http_reqs......................: 12515   61.977888/s
     iteration_duration.............: avg=6.43s   min=2.24s med=6.4s   max=9.79s    p(90)=7.07s  p(95)=7.3s    
     iterations.....................: 12515   61.977888/s
     vus............................: 123     min=123     max=400
     vus_max........................: 400     min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/566b0c4f-80bc-4ddf-0e0a-5e0fc75d8000/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4dfacbaf-2a0a-4aae-6ce8-f41d0d173000/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/bc802843-2db3-4130-d7aa-49630c2a8f00/public" alt="HTTP Overview" />


  </details>