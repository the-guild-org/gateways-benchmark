## Overview for: `federation-v1/constant-vus-subgraphs-delay`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. It's being executed with a constant amount of VUs over a fixed amount of time. It measure things like memory usage, CPU usage, average RPS. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was running 300 VUs over 600s


### Comparison


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/57d12056-449a-4241-8e13-9f89ee8e1000/public" alt="Comparison" />


| Gateway             | RPS ⬇️ |        Requests        |          Duration          | Notes                                                                    |
| :------------------ | :----: | :--------------------: | :------------------------: | :----------------------------------------------------------------------- |
| wundergraph         |  192   | 115808 total, 0 failed |  avg: 1311ms, p95: 2017ms  | ✅                                                                        |
| apollo-router       |  186   | 112402 total, 0 failed |  avg: 1123ms, p95: 2335ms  | ✅                                                                        |
| mesh-supergraph-bun |  109   | 65876 total, 0 failed  |  avg: 2664ms, p95: 4510ms  | ✅                                                                        |
| mesh-bun            |  103   | 62060 total, 0 failed  |  avg: 2832ms, p95: 4791ms  | ✅                                                                        |
| mesh-supergraph     |  101   | 61344 total, 0 failed  |  avg: 2875ms, p95: 3437ms  | ✅                                                                        |
| mesh                |   93   | 56112 total, 0 failed  |  avg: 3154ms, p95: 3838ms  | ✅                                                                        |
| apollo-server       |   64   | 38683 total, 92 failed |  avg: 4652ms, p95: 6050ms  | ❌ 92 failed requests, 92 non-200 responses, 92 unexpected GraphQL errors |
| mercurius           |   12   |  7838 total, 0 failed  | avg: 23393ms, p95: 24457ms | ✅                                                                        |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 347424     ✗ 0     
     data_received..................: 10 GB   17 MB/s
     data_sent......................: 138 MB  229 kB/s
     http_req_blocked...............: avg=64.84µs min=1.23µs   med=2.92µs  max=508.76ms p(90)=4.44µs   p(95)=5.29µs 
     http_req_connecting............: avg=7.16µs  min=0s       med=0s      max=24.41ms  p(90)=0s       p(95)=0s     
     http_req_duration..............: avg=1.31s   min=586.89ms med=1.24s   max=4.59s    p(90)=1.73s    p(95)=2.01s  
       { expected_response:true }...: avg=1.31s   min=586.89ms med=1.24s   max=4.59s    p(90)=1.73s    p(95)=2.01s  
     http_req_failed................: 0.00%   ✓ 0          ✗ 115808
     http_req_receiving.............: avg=129.3ms min=24.01µs  med=75.76µs max=2.93s    p(90)=481.53ms p(95)=835.5ms
     http_req_sending...............: avg=8.03ms  min=7.38µs   med=13.37µs max=2.16s    p(90)=30.35µs  p(95)=1.28ms 
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s      max=0s       p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=1.17s   min=555.05ms med=1.16s   max=2.29s    p(90)=1.42s    p(95)=1.5s   
     http_reqs......................: 115808  192.532397/s
     iteration_duration.............: avg=1.55s   min=597.22ms med=1.43s   max=5.81s    p(90)=2.25s    p(95)=2.54s  
     iterations.....................: 115808  192.532397/s
     vus............................: 18      min=18       max=300 
     vus_max........................: 300     min=300      max=300 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5c281d2e-e941-4b78-85ac-8eff1a53e500/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/cfc3520e-1ca2-40fc-a45c-25d44ae1ca00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/df7bf405-024e-4104-b0b0-f68cd2ffef00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 337206     ✗ 0     
     data_received..................: 9.9 GB  16 MB/s
     data_sent......................: 133 MB  222 kB/s
     http_req_blocked...............: avg=177.36µs min=1.21µs   med=2.91µs   max=1.11s  p(90)=4.79µs  p(95)=5.78µs 
     http_req_connecting............: avg=54.39µs  min=0s       med=0s       max=1.11s  p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=1.12s    min=246.82ms med=960.68ms max=7.51s  p(90)=1.91s   p(95)=2.33s  
       { expected_response:true }...: avg=1.12s    min=246.82ms med=960.68ms max=7.51s  p(90)=1.91s   p(95)=2.33s  
     http_req_failed................: 0.00%   ✓ 0          ✗ 112402
     http_req_receiving.............: avg=261.12ms min=22.43µs  med=71.67µs  max=6.37s  p(90)=1.06s   p(95)=1.51s  
     http_req_sending...............: avg=16.08ms  min=7.3µs    med=13.69µs  max=4.91s  p(90)=35.67µs p(95)=10.68ms
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s     p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=845.31ms min=246.77ms med=787.57ms max=2.39s  p(90)=1.21s   p(95)=1.32s  
     http_reqs......................: 112402  186.826706/s
     iteration_duration.............: avg=1.59s    min=286.47ms med=1.36s    max=13.21s p(90)=2.88s   p(95)=3.39s  
     iterations.....................: 112402  186.826706/s
     vus............................: 127     min=127      max=300 
     vus_max........................: 300     min=300      max=300 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/38a92ecd-19aa-4b18-8309-e83867c02500/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b0c4eb05-966a-475f-c248-21154c212100/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ca2c6d5f-fae3-472a-1912-602965ecef00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 197628     ✗ 0    
     data_received..................: 5.8 GB  9.6 MB/s
     data_sent......................: 78 MB   130 kB/s
     http_req_blocked...............: avg=49.48µs min=1.36µs  med=3.11µs  max=206.4ms  p(90)=5.12µs p(95)=6.29µs  
     http_req_connecting............: avg=30.23µs min=0s      med=0s      max=29.96ms  p(90)=0s     p(95)=0s      
     http_req_duration..............: avg=2.66s   min=1.06s   med=2.35s   max=9.35s    p(90)=4.29s  p(95)=4.51s   
       { expected_response:true }...: avg=2.66s   min=1.06s   med=2.35s   max=9.35s    p(90)=4.29s  p(95)=4.51s   
     http_req_failed................: 0.00%   ✓ 0          ✗ 65876
     http_req_receiving.............: avg=17.42ms min=29.04µs med=68.37µs max=1.53s    p(90)=1.57ms p(95)=90.87ms 
     http_req_sending...............: avg=1.51ms  min=7.18µs  med=14.14µs max=971.28ms p(90)=33.8µs p(95)=140.81µs
     http_req_tls_handshaking.......: avg=0s      min=0s      med=0s      max=0s       p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=2.64s   min=1.06s   med=2.34s   max=9.11s    p(90)=4.28s  p(95)=4.49s   
     http_reqs......................: 65876   109.366799/s
     iteration_duration.............: avg=2.73s   min=1.07s   med=2.41s   max=9.44s    p(90)=4.39s  p(95)=4.64s   
     iterations.....................: 65876   109.366799/s
     vus............................: 123     min=123      max=300
     vus_max........................: 300     min=300      max=300
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d79e06b7-5dbd-41b0-a8d6-78dd1205c100/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/14c27ac7-23c1-4b88-7f3c-0f4f09989100/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/cebfc478-22d2-4c87-c84a-6bbbf3e99800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 186180     ✗ 0    
     data_received..................: 5.4 GB  9.0 MB/s
     data_sent......................: 74 MB   122 kB/s
     http_req_blocked...............: avg=47.46µs min=1.26µs  med=3µs     max=256.22ms p(90)=4.91µs  p(95)=5.98µs  
     http_req_connecting............: avg=5.53µs  min=0s      med=0s      max=37.62ms  p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=2.83s   min=1.3s    med=2.48s   max=5.67s    p(90)=4.6s    p(95)=4.79s   
       { expected_response:true }...: avg=2.83s   min=1.3s    med=2.48s   max=5.67s    p(90)=4.6s    p(95)=4.79s   
     http_req_failed................: 0.00%   ✓ 0          ✗ 62060
     http_req_receiving.............: avg=19.92ms min=28.54µs med=64.4µs  max=1.35s    p(90)=3.29ms  p(95)=116.67ms
     http_req_sending...............: avg=1.72ms  min=7.58µs  med=13.83µs max=943.91ms p(90)=32.75µs p(95)=136.21µs
     http_req_tls_handshaking.......: avg=0s      min=0s      med=0s      max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=2.81s   min=1.3s    med=2.46s   max=5.45s    p(90)=4.58s   p(95)=4.77s   
     http_reqs......................: 62060   103.152499/s
     iteration_duration.............: avg=2.9s    min=1.31s   med=2.54s   max=5.88s    p(90)=4.69s   p(95)=4.91s   
     iterations.....................: 62060   103.152499/s
     vus............................: 108     min=108      max=300
     vus_max........................: 300     min=300      max=300
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1dac2a6b-21e4-4bf1-41cb-66c45b4e8e00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f865457c-6c34-4c32-4831-910f6f6bf600/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/45d09e25-ccb2-422a-05ea-3bd67ebfbf00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 184032     ✗ 0    
     data_received..................: 5.4 GB  8.9 MB/s
     data_sent......................: 73 MB   121 kB/s
     http_req_blocked...............: avg=31.2µs min=1.25µs  med=3.47µs  max=129.6ms  p(90)=5.37µs  p(95)=6.24µs  
     http_req_connecting............: avg=9.3µs  min=0s      med=0s      max=24.49ms  p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=2.87s  min=1.46s   med=2.85s   max=6.31s    p(90)=3.3s    p(95)=3.43s   
       { expected_response:true }...: avg=2.87s  min=1.46s   med=2.85s   max=6.31s    p(90)=3.3s    p(95)=3.43s   
     http_req_failed................: 0.00%   ✓ 0          ✗ 61344
     http_req_receiving.............: avg=8.06ms min=32.53µs med=70.06µs max=1s       p(90)=2.58ms  p(95)=22.5ms  
     http_req_sending...............: avg=1ms    min=7.4µs   med=16.24µs max=982.09ms p(90)=33.34µs p(95)=113.36µs
     http_req_tls_handshaking.......: avg=0s     min=0s      med=0s      max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=2.86s  min=1.45s   med=2.84s   max=6.31s    p(90)=3.29s   p(95)=3.41s   
     http_reqs......................: 61344   101.859411/s
     iteration_duration.............: avg=2.94s  min=1.51s   med=2.91s   max=6.33s    p(90)=3.39s   p(95)=3.54s   
     iterations.....................: 61344   101.859411/s
     vus............................: 92      min=92       max=300
     vus_max........................: 300     min=300      max=300
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/032a6074-bb10-4618-42da-c3e4987e4a00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/fdc77fc9-5e30-4886-a4af-a227bdcb3d00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2311704e-8bc9-4388-fcb5-7eea32ac8d00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 168336    ✗ 0    
     data_received..................: 4.9 GB  8.2 MB/s
     data_sent......................: 67 MB   111 kB/s
     http_req_blocked...............: avg=78.16µs  min=1.36µs med=3.83µs  max=152ms    p(90)=5.89µs  p(95)=6.81µs  
     http_req_connecting............: avg=50.23µs  min=0s     med=0s      max=58.34ms  p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=3.15s    min=1.64s  med=3.18s   max=6.96s    p(90)=3.68s   p(95)=3.83s   
       { expected_response:true }...: avg=3.15s    min=1.64s  med=3.18s   max=6.96s    p(90)=3.68s   p(95)=3.83s   
     http_req_failed................: 0.00%   ✓ 0         ✗ 56112
     http_req_receiving.............: avg=7.92ms   min=32.2µs med=78.43µs max=994.14ms p(90)=2.85ms  p(95)=20.5ms  
     http_req_sending...............: avg=827.22µs min=7.18µs med=18.22µs max=695.49ms p(90)=35.93µs p(95)=128.18µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=3.14s    min=1.64s  med=3.18s   max=6.87s    p(90)=3.67s   p(95)=3.82s   
     http_reqs......................: 56112   93.157353/s
     iteration_duration.............: avg=3.21s    min=1.65s  med=3.24s   max=6.99s    p(90)=3.76s   p(95)=3.93s   
     iterations.....................: 56112   93.157353/s
     vus............................: 114     min=114     max=300
     vus_max........................: 300     min=300     max=300
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8af953c2-7a89-4515-d918-929189714000/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7ca6b4f3-c460-4062-d871-659a0027dc00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e6df28d6-b875-4ab2-3f95-37b4d79f3500/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  99% — ✓ 38591 / ✗ 92
     ✗ no graphql errors
      ↳  99% — ✓ 38591 / ✗ 92
     ✓ valid response structure

     checks.........................: 99.84% ✓ 115773   ✗ 184  
     data_received..................: 3.4 GB 5.6 MB/s
     data_sent......................: 46 MB  76 kB/s
     http_req_blocked...............: avg=117.15µs min=1.38µs   med=3.43µs  max=49.85ms  p(90)=5.23µs   p(95)=6.05µs  
     http_req_connecting............: avg=106.99µs min=0s       med=0s      max=24.2ms   p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=4.65s    min=733.49ms med=4.39s   max=1m0s     p(90)=5.64s    p(95)=6.04s   
       { expected_response:true }...: avg=4.51s    min=733.49ms med=4.39s   max=59.97s   p(90)=5.63s    p(95)=6.02s   
     http_req_failed................: 0.23%  ✓ 92       ✗ 38591
     http_req_receiving.............: avg=672.24µs min=0s       med=92.96µs max=193.89ms p(90)=152.22µs p(95)=492.68µs
     http_req_sending...............: avg=98.62µs  min=7.98µs   med=17.54µs max=143.07ms p(90)=31.95µs  p(95)=40.47µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=4.65s    min=733.39ms med=4.39s   max=1m0s     p(90)=5.64s    p(95)=6.04s   
     http_reqs......................: 38683  64.12612/s
     iteration_duration.............: avg=4.66s    min=743.67ms med=4.4s    max=1m0s     p(90)=5.66s    p(95)=6.07s   
     iterations.....................: 38683  64.12612/s
     vus............................: 58     min=58     max=300
     vus_max........................: 300    min=300    max=300
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/02e0002f-7db5-46bb-0f0a-7b51580b7a00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b43f8f57-3d20-41fc-0764-96c853c0b500/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/bb26ee70-8f65-41b0-9596-240cad359400/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 23514     ✗ 0    
     data_received..................: 688 MB  1.1 MB/s
     data_sent......................: 9.3 MB  15 kB/s
     http_req_blocked...............: avg=114.51µs min=1.44µs  med=3.89µs   max=21.7ms  p(90)=5.35µs   p(95)=6.46µs  
     http_req_connecting............: avg=106.56µs min=0s      med=0s       max=21.67ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=23.39s   min=7.32s   med=23.74s   max=26.25s  p(90)=24.24s   p(95)=24.45s  
       { expected_response:true }...: avg=23.39s   min=7.32s   med=23.74s   max=26.25s  p(90)=24.24s   p(95)=24.45s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 7838 
     http_req_receiving.............: avg=127.09µs min=42.32µs med=108.75µs max=51.98ms p(90)=146.07µs p(95)=160.71µs
     http_req_sending...............: avg=69.3µs   min=8.74µs  med=21.48µs  max=3.32ms  p(90)=30.36µs  p(95)=37.22µs 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=23.39s   min=7.32s   med=23.74s   max=26.25s  p(90)=24.24s   p(95)=24.45s  
     http_reqs......................: 7838    12.588587/s
     iteration_duration.............: avg=23.39s   min=7.32s   med=23.75s   max=26.26s  p(90)=24.25s   p(95)=24.46s  
     iterations.....................: 7838    12.588587/s
     vus............................: 15      min=15      max=300
     vus_max........................: 300     min=300     max=300
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/28bb7844-be38-4de6-973c-f1664e889e00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4f618172-aee2-46f5-be1c-7a7670911300/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b71a0375-83f6-4911-f99b-39f028244200/public" alt="HTTP Overview" />


  </details>