## Overview for: `constant-vus-subgraphs-delay-resources`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. It's being executed with a constant amount of VUs over a fixed amount of time. It measure things like memory usage, CPU usage, average RPS. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was running 500 VUs over 600s


### Comparison


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/26099179-af91-4f46-07cd-c0f5a6566300/public" alt="Comparison" />


| Gateway         | RPS ⬇️ |        Requests        |          Duration          | Notes |
| :-------------- | :----: | :--------------------: | :------------------------: | :---- |
| wundergraph     |  189   | 114259 total, 0 failed |  avg: 1820ms, p95: 3360ms  | ✅     |
| apollo-router   |  184   | 111024 total, 0 failed |  avg: 1646ms, p95: 3495ms  | ✅     |
| mesh-supergraph |   89   | 54218 total, 0 failed  |  avg: 5464ms, p95: 6281ms  | ✅     |
| mesh-bun        |   87   | 53282 total, 0 failed  |  avg: 5635ms, p95: 6124ms  | ✅     |
| mesh            |   82   | 49600 total, 0 failed  |  avg: 6005ms, p95: 7299ms  | ✅     |
| apollo-server   |   63   | 38179 total, 0 failed  | avg: 7885ms, p95: 18007ms  | ✅     |
| mercurius       |   12   |  7895 total, 0 failed  | avg: 38666ms, p95: 42028ms | ✅     |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 342777     ✗ 0     
     data_received..................: 10 GB   17 MB/s
     data_sent......................: 136 MB  225 kB/s
     http_req_blocked...............: avg=471.51µs min=1.03µs   med=3.01µs  max=3.16s  p(90)=5.17µs  p(95)=6.35µs
     http_req_connecting............: avg=157.8µs  min=0s       med=0s      max=1.96s  p(90)=0s      p(95)=0s    
     http_req_duration..............: avg=1.81s    min=488.7ms  med=1.65s   max=9.13s  p(90)=2.8s    p(95)=3.35s 
       { expected_response:true }...: avg=1.81s    min=488.7ms  med=1.65s   max=9.13s  p(90)=2.8s    p(95)=3.35s 
     http_req_failed................: 0.00%   ✓ 0          ✗ 114259
     http_req_receiving.............: avg=304.3ms  min=20.52µs  med=79.09µs max=7.9s   p(90)=1.33s   p(95)=1.84s 
     http_req_sending...............: avg=25.15ms  min=7.35µs   med=13.87µs max=4.92s  p(90)=35.27µs p(95)=1.02ms
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s     p(90)=0s      p(95)=0s    
     http_req_waiting...............: avg=1.49s    min=488.35ms med=1.42s   max=4.48s  p(90)=2.07s   p(95)=2.24s 
     http_reqs......................: 114259  189.900657/s
     iteration_duration.............: avg=2.61s    min=516.94ms med=2.27s   max=14.72s p(90)=4.51s   p(95)=5.3s  
     iterations.....................: 114259  189.900657/s
     vus............................: 252     min=252      max=500 
     vus_max........................: 500     min=500      max=500 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d03a71eb-6cd4-4b1a-3466-5f6f41ee1500/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3916efb5-918a-4b5b-7a83-492522b1fc00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2107860a-8899-41a0-e38b-fd4bf8388e00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 333072     ✗ 0     
     data_received..................: 9.7 GB  16 MB/s
     data_sent......................: 132 MB  219 kB/s
     http_req_blocked...............: avg=1.43ms   min=1.24µs   med=3.09µs  max=3.53s p(90)=4.96µs  p(95)=6.06µs 
     http_req_connecting............: avg=1.05ms   min=0s       med=0s      max=3.53s p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=1.64s    min=243.26ms med=1.45s   max=9.47s p(90)=2.84s   p(95)=3.49s  
       { expected_response:true }...: avg=1.64s    min=243.26ms med=1.45s   max=9.47s p(90)=2.84s   p(95)=3.49s  
     http_req_failed................: 0.00%   ✓ 0          ✗ 111024
     http_req_receiving.............: avg=367.67ms min=21.72µs  med=72.21µs max=8.82s p(90)=1.53s   p(95)=2.29s  
     http_req_sending...............: avg=33.64ms  min=6.84µs   med=14.01µs max=5.21s p(90)=37.66µs p(95)=24.25ms
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s    p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=1.24s    min=243.18ms med=1.17s   max=5.59s p(90)=1.94s   p(95)=2.16s  
     http_reqs......................: 111024  184.521389/s
     iteration_duration.............: avg=2.68s    min=272.95ms med=2.33s   max=16.3s p(90)=4.92s   p(95)=5.85s  
     iterations.....................: 111024  184.521389/s
     vus............................: 340     min=340      max=500 
     vus_max........................: 500     min=500      max=500 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f3d4f7b9-5e75-427e-ec79-7756b0979c00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/52c2dc89-cfa9-41e6-0745-f1884d3c2c00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/85f67b09-4e06-466b-958a-c50ea0d81800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 162654    ✗ 0    
     data_received..................: 4.8 GB  7.9 MB/s
     data_sent......................: 64 MB   107 kB/s
     http_req_blocked...............: avg=175.16µs min=1.74µs  med=4.1µs   max=173.9ms p(90)=6.15µs p(95)=7.23µs  
     http_req_connecting............: avg=142.21µs min=0s      med=0s      max=43.75ms p(90)=0s     p(95)=0s      
     http_req_duration..............: avg=5.46s    min=2.37s   med=5.44s   max=9.07s   p(90)=6.08s  p(95)=6.28s   
       { expected_response:true }...: avg=5.46s    min=2.37s   med=5.44s   max=9.07s   p(90)=6.08s  p(95)=6.28s   
     http_req_failed................: 0.00%   ✓ 0         ✗ 54218
     http_req_receiving.............: avg=13.57ms  min=34.07µs med=79.94µs max=2.07s   p(90)=2.71ms p(95)=19.94ms 
     http_req_sending...............: avg=1.6ms    min=8.33µs  med=18.48µs max=2.51s   p(90)=37.4µs p(95)=144.75µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s      p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=5.44s    min=2.37s   med=5.43s   max=7.9s    p(90)=6.06s  p(95)=6.25s   
     http_reqs......................: 54218   89.763296/s
     iteration_duration.............: avg=5.55s    min=2.38s   med=5.52s   max=9.11s   p(90)=6.19s  p(95)=6.42s   
     iterations.....................: 54218   89.763296/s
     vus............................: 66      min=66      max=500
     vus_max........................: 500     min=500     max=500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2b5da248-be2a-4149-460a-df7558436a00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/be4038ad-5b83-4f1d-84e2-be9df982d200/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8172aeff-5435-435c-a9cb-2aba401acc00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 159846    ✗ 0    
     data_received..................: 4.7 GB  7.7 MB/s
     data_sent......................: 63 MB   104 kB/s
     http_req_blocked...............: avg=167.91µs min=1.39µs  med=3.04µs  max=123.88ms p(90)=4.95µs   p(95)=6.08µs 
     http_req_connecting............: avg=151.65µs min=0s      med=0s      max=44.33ms  p(90)=0s       p(95)=0s     
     http_req_duration..............: avg=5.63s    min=3.2s    med=5.51s   max=11.6s    p(90)=5.92s    p(95)=6.12s  
       { expected_response:true }...: avg=5.63s    min=3.2s    med=5.51s   max=11.6s    p(90)=5.92s    p(95)=6.12s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 53282
     http_req_receiving.............: avg=16ms     min=32.52µs med=82.41µs max=2.89s    p(90)=329.22µs p(95)=1.66ms 
     http_req_sending...............: avg=579.75µs min=7.89µs  med=14.03µs max=353.89ms p(90)=29.46µs  p(95)=69.58µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s       p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=5.61s    min=3.2s    med=5.5s    max=11.45s   p(90)=5.9s     p(95)=6.08s  
     http_reqs......................: 53282   87.980435/s
     iteration_duration.............: avg=5.66s    min=3.24s   med=5.54s   max=11.61s   p(90)=5.96s    p(95)=6.18s  
     iterations.....................: 53282   87.980435/s
     vus............................: 80      min=80      max=500
     vus_max........................: 500     min=500     max=500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8d88e56a-c437-4838-2604-631d285d1a00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d24dbab5-af0e-448d-0038-7156c9e92100/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5530271c-8b34-4464-54e8-ed578f4c4800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 148800    ✗ 0    
     data_received..................: 4.4 GB  7.2 MB/s
     data_sent......................: 59 MB   97 kB/s
     http_req_blocked...............: avg=517.66µs min=1.52µs  med=3.92µs  max=216.96ms p(90)=5.85µs  p(95)=6.97µs 
     http_req_connecting............: avg=484.88µs min=0s      med=0s      max=105.2ms  p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=6s       min=2.92s   med=6s      max=9.16s    p(90)=7.02s   p(95)=7.29s  
       { expected_response:true }...: avg=6s       min=2.92s   med=6s      max=9.16s    p(90)=7.02s   p(95)=7.29s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 49600
     http_req_receiving.............: avg=8.61ms   min=32.43µs med=83.09µs max=1.25s    p(90)=2.04ms  p(95)=11.9ms 
     http_req_sending...............: avg=904.96µs min=8.53µs  med=18.17µs max=1.27s    p(90)=35.02µs p(95)=117.3µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s       p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=5.99s    min=2.91s   med=5.99s   max=9.16s    p(90)=7s      p(95)=7.28s  
     http_reqs......................: 49600   82.060338/s
     iteration_duration.............: avg=6.07s    min=2.98s   med=6.06s   max=9.54s    p(90)=7.1s    p(95)=7.39s  
     iterations.....................: 49600   82.060338/s
     vus............................: 79      min=79      max=500
     vus_max........................: 500     min=500     max=500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5ac2767f-824a-42b3-9633-39ca46b98600/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/cae337f6-9fa2-4acd-0f80-b3b700d44500/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6e75b578-114c-4d62-2ff3-aafbee996f00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 114537    ✗ 0    
     data_received..................: 3.4 GB  5.5 MB/s
     data_sent......................: 45 MB   75 kB/s
     http_req_blocked...............: avg=423.43µs min=1.26µs   med=3.26µs  max=62.29ms  p(90)=5.17µs   p(95)=6.2µs  
     http_req_connecting............: avg=412.94µs min=0s       med=0s      max=62.22ms  p(90)=0s       p(95)=0s     
     http_req_duration..............: avg=7.88s    min=805.08ms med=5.86s   max=38.89s   p(90)=14.76s   p(95)=18s    
       { expected_response:true }...: avg=7.88s    min=805.08ms med=5.86s   max=38.89s   p(90)=14.76s   p(95)=18s    
     http_req_failed................: 0.00%   ✓ 0         ✗ 38179
     http_req_receiving.............: avg=1.48ms   min=35.91µs  med=91.12µs max=339.78ms p(90)=161.57µs p(95)=561µs  
     http_req_sending...............: avg=165.63µs min=8.03µs   med=16.1µs  max=168.05ms p(90)=31.38µs  p(95)=45.61µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s       p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=7.88s    min=804.99ms med=5.86s   max=38.89s   p(90)=14.76s   p(95)=18s    
     http_reqs......................: 38179   63.003767/s
     iteration_duration.............: avg=7.9s     min=812.18ms med=5.87s   max=38.9s    p(90)=14.81s   p(95)=18.04s 
     iterations.....................: 38179   63.003767/s
     vus............................: 29      min=29      max=500
     vus_max........................: 500     min=500     max=500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/36157855-d9d1-4def-3d9e-18c8b705fb00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1828cfba-57d7-4fa7-13e1-c92e8f64aa00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/eb2a6a5d-737c-4d25-351e-a2e0e2700500/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 23685     ✗ 0    
     data_received..................: 693 MB  1.1 MB/s
     data_sent......................: 9.5 MB  15 kB/s
     http_req_blocked...............: avg=1.16ms   min=1.7µs   med=4.12µs   max=52.41ms p(90)=6.08µs   p(95)=3.49ms  
     http_req_connecting............: avg=1.13ms   min=0s      med=0s       max=37.1ms  p(90)=0s       p(95)=3.31ms  
     http_req_duration..............: avg=38.66s   min=11.75s  med=39.79s   max=44.01s  p(90)=40.41s   p(95)=42.02s  
       { expected_response:true }...: avg=38.66s   min=11.75s  med=39.79s   max=44.01s  p(90)=40.41s   p(95)=42.02s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 7895 
     http_req_receiving.............: avg=131.36µs min=39.84µs med=109.33µs max=13.62ms p(90)=147.54µs p(95)=164.53µs
     http_req_sending...............: avg=74.07µs  min=9.25µs  med=23.55µs  max=3.85ms  p(90)=33.88µs  p(95)=350.94µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=38.66s   min=11.75s  med=39.79s   max=44.01s  p(90)=40.41s   p(95)=42.02s  
     http_reqs......................: 7895    12.531685/s
     iteration_duration.............: avg=38.67s   min=11.76s  med=39.79s   max=44.02s  p(90)=40.41s   p(95)=42.03s  
     iterations.....................: 7895    12.531685/s
     vus............................: 113     min=113     max=500
     vus_max........................: 500     min=500     max=500
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/890a330a-039e-40e5-197e-ed1613818100/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1969491b-8c30-4fa7-ce24-fd41e9059a00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4480230c-a555-4f3c-72dc-08ac4236e400/public" alt="HTTP Overview" />


  </details>