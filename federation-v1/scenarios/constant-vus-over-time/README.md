## Overview for: `constant-vus-over-time`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. It's being executed with a constant amount of VUs over a fixed amount of time. It measure things like memory usage, CPU usage, average RPS. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was running 350 VUs over 400s


### Comparison


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f9c7324e-be3a-4439-cb45-3c8e76badd00/public" alt="Comparison" />


| Gateway              | RPS ⬇️ |       Requests        |         Duration         | Notes |
| :------------------- | :----: | :-------------------: | :----------------------: | :---- |
| apollo-router        |  172   | 69246 total, 0 failed | avg: 1071ms, p95: 2936ms | ✅     |
| wundergraph          |  167   | 67166 total, 0 failed | avg: 1058ms, p95: 2873ms | ✅     |
| mesh-bun             |   96   | 38915 total, 0 failed | avg: 3579ms, p95: 3733ms | ✅     |
| mesh-supergraph      |   81   | 32850 total, 0 failed | avg: 4237ms, p95: 5238ms | ✅     |
| mesh                 |   70   | 28541 total, 0 failed | avg: 4895ms, p95: 6101ms | ✅     |
| apollo-server-node16 |   66   | 26639 total, 0 failed | avg: 5252ms, p95: 7860ms | ✅     |
| apollo-server        |   65   | 26520 total, 0 failed | avg: 5291ms, p95: 8171ms | ✅     |
| mercurius            |   42   | 17035 total, 0 failed | avg: 8237ms, p95: 8992ms | ✅     |



<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 207738     ✗ 0    
     data_received..................: 6.1 GB  15 MB/s
     data_sent......................: 82 MB   205 kB/s
     http_req_blocked...............: avg=1.14ms   min=1.51µs  med=3.64µs   max=2.6s   p(90)=6.25µs  p(95)=7.43µs
     http_req_connecting............: avg=762.18µs min=0s      med=0s       max=1.94s  p(90)=0s      p(95)=0s    
     http_req_duration..............: avg=1.07s    min=10.25ms med=804.09ms max=12.08s p(90)=2.34s   p(95)=2.93s 
       { expected_response:true }...: avg=1.07s    min=10.25ms med=804.09ms max=12.08s p(90)=2.34s   p(95)=2.93s 
     http_req_failed................: 0.00%   ✓ 0          ✗ 69246
     http_req_receiving.............: avg=432.46ms min=24.44µs med=86.46µs  max=9.95s  p(90)=1.64s   p(95)=2.3s  
     http_req_sending...............: avg=26.57ms  min=7.02µs  med=16.99µs  max=6.21s  p(90)=46.96µs p(95)=5.1ms 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s     p(90)=0s      p(95)=0s    
     http_req_waiting...............: avg=611.7ms  min=9.04ms  med=573.58ms max=3.37s  p(90)=1.09s   p(95)=1.29s 
     http_reqs......................: 69246   172.621503/s
     iteration_duration.............: avg=2.01s    min=23.3ms  med=1.59s    max=15.57s p(90)=4.29s   p(95)=5.28s 
     iterations.....................: 69246   172.621503/s
     vus............................: 128     min=128      max=350
     vus_max........................: 350     min=350      max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b69b8535-7037-4a56-e72b-a69397d5bf00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/035326d0-8af6-4ac6-56e7-a2499c1b8700/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8e06d194-5bf1-4f6f-63ca-fef242084200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 201498     ✗ 0    
     data_received..................: 5.9 GB  15 MB/s
     data_sent......................: 80 MB   199 kB/s
     http_req_blocked...............: avg=2.65ms   min=1.47µs  med=3.4µs    max=4.21s  p(90)=5.28µs  p(95)=6.6µs
     http_req_connecting............: avg=2.13ms   min=0s      med=0s       max=4.21s  p(90)=0s      p(95)=0s   
     http_req_duration..............: avg=1.05s    min=8.55ms  med=868.04ms max=9.74s  p(90)=2.24s   p(95)=2.87s
       { expected_response:true }...: avg=1.05s    min=8.55ms  med=868.04ms max=9.74s  p(90)=2.24s   p(95)=2.87s
     http_req_failed................: 0.00%   ✓ 0          ✗ 67166
     http_req_receiving.............: avg=400.43ms min=27.82µs med=82.11µs  max=8.51s  p(90)=1.52s   p(95)=2.27s
     http_req_sending...............: avg=22.84ms  min=7.45µs  med=15.17µs  max=6.89s  p(90)=41.87µs p(95)=3.6ms
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s     p(90)=0s      p(95)=0s   
     http_req_waiting...............: avg=635.03ms min=7.95ms  med=596.55ms max=3.56s  p(90)=1.15s   p(95)=1.36s
     http_reqs......................: 67166   167.510957/s
     iteration_duration.............: avg=2.07s    min=20.81ms med=1.71s    max=14.41s p(90)=4.27s   p(95)=5.23s
     iterations.....................: 67166   167.510957/s
     vus............................: 44      min=44       max=350
     vus_max........................: 350     min=350      max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6fa88d48-7e98-4a3a-0451-94f83f6ab600/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1227f49e-f85c-486b-45cc-d2f0d9c8ee00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f2c30aa0-978d-4a5f-d32c-33477fc25200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 116745    ✗ 0    
     data_received..................: 3.4 GB  8.5 MB/s
     data_sent......................: 46 MB   115 kB/s
     http_req_blocked...............: avg=45.88µs  min=1.28µs   med=2.78µs  max=81.58ms  p(90)=4.63µs   p(95)=5.66µs 
     http_req_connecting............: avg=39.28µs  min=0s       med=0s      max=44.61ms  p(90)=0s       p(95)=0s     
     http_req_duration..............: avg=3.57s    min=347.64ms med=3.51s   max=7.35s    p(90)=3.66s    p(95)=3.73s  
       { expected_response:true }...: avg=3.57s    min=347.64ms med=3.51s   max=7.35s    p(90)=3.66s    p(95)=3.73s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 38915
     http_req_receiving.............: avg=11.23ms  min=32.75µs  med=83.71µs max=2.04s    p(90)=275.21µs p(95)=1.55ms 
     http_req_sending...............: avg=404.19µs min=7.46µs   med=13.49µs max=438.23ms p(90)=26.21µs  p(95)=51.72µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s       p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=3.56s    min=347.3ms  med=3.51s   max=7.32s    p(90)=3.65s    p(95)=3.71s  
     http_reqs......................: 38915   96.664755/s
     iteration_duration.............: avg=3.6s     min=356.37ms med=3.54s   max=7.35s    p(90)=3.72s    p(95)=3.84s  
     iterations.....................: 38915   96.664755/s
     vus............................: 119     min=119     max=350
     vus_max........................: 350     min=350     max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/38c85077-bd73-435f-e972-fcfa8b117100/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9e886eff-7128-45e9-2154-bc9f8342e000/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/15d002aa-78e6-4f79-a9b5-1c65bd4aa400/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 98550     ✗ 0    
     data_received..................: 2.9 GB  7.2 MB/s
     data_sent......................: 39 MB   97 kB/s
     http_req_blocked...............: avg=60.12µs  min=1.42µs  med=3.72µs  max=130.85ms p(90)=5.7µs   p(95)=6.8µs   
     http_req_connecting............: avg=35.51µs  min=0s      med=0s      max=33.87ms  p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=4.23s    min=2.14s   med=4.21s   max=8.54s    p(90)=5s      p(95)=5.23s   
       { expected_response:true }...: avg=4.23s    min=2.14s   med=4.21s   max=8.54s    p(90)=5s      p(95)=5.23s   
     http_req_failed................: 0.00%   ✓ 0         ✗ 32850
     http_req_receiving.............: avg=5.26ms   min=32.75µs med=88.39µs max=1.05s    p(90)=3.56ms  p(95)=15.04ms 
     http_req_sending...............: avg=628.75µs min=7.64µs  med=18.25µs max=406ms    p(90)=34.86µs p(95)=111.95µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=4.23s    min=2.14s   med=4.2s    max=8.54s    p(90)=4.99s   p(95)=5.22s   
     http_reqs......................: 32850   81.493849/s
     iteration_duration.............: avg=4.27s    min=2.16s   med=4.25s   max=8.55s    p(90)=5.05s   p(95)=5.3s    
     iterations.....................: 32850   81.493849/s
     vus............................: 35      min=35      max=350
     vus_max........................: 350     min=350     max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e61145b1-972e-45f2-a6a3-73de0842e300/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6d22bc0b-9e7d-47ae-83c3-6bc97d75b900/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/40977b2d-d6ec-4b2c-ad33-dae611130700/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 85623     ✗ 0    
     data_received..................: 2.5 GB  6.2 MB/s
     data_sent......................: 34 MB   84 kB/s
     http_req_blocked...............: avg=137.15µs min=1.36µs  med=3.75µs  max=72.08ms  p(90)=5.58µs  p(95)=6.69µs 
     http_req_connecting............: avg=114.28µs min=0s      med=0s      max=36.39ms  p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=4.89s    min=2.44s   med=4.82s   max=9.27s    p(90)=5.79s   p(95)=6.1s   
       { expected_response:true }...: avg=4.89s    min=2.44s   med=4.82s   max=9.27s    p(90)=5.79s   p(95)=6.1s   
     http_req_failed................: 0.00%   ✓ 0         ✗ 28541
     http_req_receiving.............: avg=3.26ms   min=33.86µs med=95.87µs max=934.68ms p(90)=2.1ms   p(95)=11.86ms
     http_req_sending...............: avg=591.7µs  min=7.94µs  med=18.08µs max=226.41ms p(90)=32.73µs p(95)=59.26µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s       p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=4.89s    min=2.43s   med=4.82s   max=9.27s    p(90)=5.78s   p(95)=6.09s  
     http_reqs......................: 28541   70.751333/s
     iteration_duration.............: avg=4.92s    min=2.45s   med=4.86s   max=9.28s    p(90)=5.82s   p(95)=6.13s  
     iterations.....................: 28541   70.751333/s
     vus............................: 69      min=69      max=350
     vus_max........................: 350     min=350     max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/86cf9f99-6f1a-43e1-e465-16eee9dc5800/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ab1807e7-4a35-4938-8095-3d9fa3b8b500/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9180bc2b-2aa2-47f1-bd6b-7d20409ca600/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server-node16`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 79917     ✗ 0    
     data_received..................: 2.3 GB  5.8 MB/s
     data_sent......................: 32 MB   79 kB/s
     http_req_blocked...............: avg=157.86µs min=1.2µs   med=2.81µs  max=54.62ms  p(90)=4.53µs   p(95)=5.54µs  
     http_req_connecting............: avg=143.75µs min=0s      med=0s      max=25.99ms  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=5.25s    min=1.54s   med=5.2s    max=13.07s   p(90)=7.21s    p(95)=7.86s   
       { expected_response:true }...: avg=5.25s    min=1.54s   med=5.2s    max=13.07s   p(90)=7.21s    p(95)=7.86s   
     http_req_failed................: 0.00%   ✓ 0         ✗ 26639
     http_req_receiving.............: avg=1.7ms    min=34.32µs med=84.17µs max=322.07ms p(90)=204.44µs p(95)=681.92µs
     http_req_sending...............: avg=278.96µs min=7.79µs  med=13.52µs max=233.1ms  p(90)=26.96µs  p(95)=65.6µs  
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=5.25s    min=1.54s   med=5.2s    max=13.07s   p(90)=7.2s     p(95)=7.85s   
     http_reqs......................: 26639   66.142868/s
     iteration_duration.............: avg=5.27s    min=1.55s   med=5.22s   max=13.08s   p(90)=7.25s    p(95)=7.9s    
     iterations.....................: 26639   66.142868/s
     vus............................: 135     min=135     max=350
     vus_max........................: 350     min=350     max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/717b408a-ec18-4a0f-40b2-634993398600/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e383d809-9ed2-47b1-9d69-0d756ce63400/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a1841a6b-0752-48da-5446-81369be6fb00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 79560     ✗ 0    
     data_received..................: 2.3 GB  5.8 MB/s
     data_sent......................: 32 MB   78 kB/s
     http_req_blocked...............: avg=186.2µs  min=1.26µs  med=2.72µs  max=69.56ms  p(90)=4.46µs   p(95)=5.5µs   
     http_req_connecting............: avg=168.01µs min=0s      med=0s      max=40.96ms  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=5.29s    min=1.23s   med=5.02s   max=13.03s   p(90)=7.47s    p(95)=8.17s   
       { expected_response:true }...: avg=5.29s    min=1.23s   med=5.02s   max=13.03s   p(90)=7.47s    p(95)=8.17s   
     http_req_failed................: 0.00%   ✓ 0         ✗ 26520
     http_req_receiving.............: avg=1.48ms   min=36.33µs med=86.6µs  max=330.77ms p(90)=156.89µs p(95)=577.82µs
     http_req_sending...............: avg=195.03µs min=7.94µs  med=13.82µs max=106.18ms p(90)=27.82µs  p(95)=45.08µs 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=5.28s    min=1.23s   med=5.02s   max=13.03s   p(90)=7.46s    p(95)=8.16s   
     http_reqs......................: 26520   65.666052/s
     iteration_duration.............: avg=5.31s    min=1.24s   med=5.04s   max=13.04s   p(90)=7.48s    p(95)=8.18s   
     iterations.....................: 26520   65.666052/s
     vus............................: 138     min=138     max=350
     vus_max........................: 350     min=350     max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/cf95e0ae-169a-4fca-cb38-353f28680a00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/15809988-e819-42c3-3b3c-19a32f4b2e00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2aa43d09-b68d-4b1c-7212-674d05ad3b00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 51105     ✗ 0    
     data_received..................: 1.5 GB  3.7 MB/s
     data_sent......................: 20 MB   50 kB/s
     http_req_blocked...............: avg=41.78µs  min=1.88µs  med=4.67µs   max=27.46ms  p(90)=6.23µs   p(95)=7.02µs  
     http_req_connecting............: avg=32.13µs  min=0s      med=0s       max=24.37ms  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=8.23s    min=2.87s   med=8.17s    max=10.95s   p(90)=8.88s    p(95)=8.99s   
       { expected_response:true }...: avg=8.23s    min=2.87s   med=8.17s    max=10.95s   p(90)=8.88s    p(95)=8.99s   
     http_req_failed................: 0.00%   ✓ 0         ✗ 17035
     http_req_receiving.............: avg=211.02µs min=41.62µs med=109.28µs max=107.57ms p(90)=147.27µs p(95)=163.92µs
     http_req_sending...............: avg=47.42µs  min=7.76µs  med=26.09µs  max=16.17ms  p(90)=36.22µs  p(95)=41.87µs 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=8.23s    min=2.87s   med=8.17s    max=10.95s   p(90)=8.88s    p(95)=8.99s   
     http_reqs......................: 17035   42.317356/s
     iteration_duration.............: avg=8.24s    min=2.88s   med=8.18s    max=10.97s   p(90)=8.89s    p(95)=9s      
     iterations.....................: 17035   42.317356/s
     vus............................: 102     min=102     max=350
     vus_max........................: 350     min=350     max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/66fab1d7-524e-45d3-4283-8f343798fc00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/76986f5f-e6e4-4267-b3f3-11bfa59c9c00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3efe4a76-fb14-4874-a638-d389f1f41800/public" alt="HTTP Overview" />


  </details>