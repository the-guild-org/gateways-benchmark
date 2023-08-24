## Overview for: `scenarios/fed-v1-constants-vus-subgraphs-delay`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. All subgraphs have an intentional delay on replying, and this creates additional pressure on the gateway's memory. We are running a heavy load of concurrent VUs to measure response time and other stats, during stress. It measure things like memory usage, CPU usage, response times.


This scenario was running 400 VUs over 200s


### Comparison


| Gateway              | RPS ⬇️ |        Requests        |          Duration          |
| :------------------- | :----: | :--------------------: | :------------------------: |
| wundergraph          |  236   | 47703 total, 0 failed  |  avg: 1681ms, p95: 2020ms  |
| mesh                 |  107   | 21787 total, 0 failed  |  avg: 3690ms, p95: 4309ms  |
| mesh-supergraph      |   97   | 19789 total, 0 failed  |  avg: 4089ms, p95: 5055ms  |
| apollo-router        |   68   | 13903 total, 0 failed  |  avg: 5838ms, p95: 9162ms  |
| apollo-server-node16 |   63   | 12831 total, 0 failed  |  avg: 6292ms, p95: 9446ms  |
| apollo-server        |   56   | 11462 total, 50 failed |  avg: 7071ms, p95: 9728ms  |
| mercurius            |   7    |  1613 total, 0 failed  | avg: 53090ms, p95: 56843ms |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 143109     ✗ 0    
     data_received..................: 238 MB  1.2 MB/s
     data_sent......................: 57 MB   281 kB/s
     http_req_blocked...............: avg=550.34µs min=1.3µs    med=2.5µs  max=201.13ms p(90)=3.6µs   p(95)=5µs     
     http_req_connecting............: avg=536.57µs min=0s       med=0s     max=200.94ms p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=1.68s    min=874.34ms med=1.67s  max=2.67s    p(90)=1.91s   p(95)=2.01s   
       { expected_response:true }...: avg=1.68s    min=874.34ms med=1.67s  max=2.67s    p(90)=1.91s   p(95)=2.01s   
   ✓ http_req_failed................: 0.00%   ✓ 0          ✗ 47703
     http_req_receiving.............: avg=1.25ms   min=17.89µs  med=44.6µs max=522.58ms p(90)=307µs   p(95)=591.68µs
     http_req_sending...............: avg=1.16ms   min=9.7µs    med=14.4µs max=502.53ms p(90)=49.48µs p(95)=169.7µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=1.67s    min=869.77ms med=1.67s  max=2.65s    p(90)=1.91s   p(95)=2.01s   
     http_reqs......................: 47703   236.779206/s
     iteration_duration.............: avg=1.68s    min=874.95ms med=1.68s  max=2.73s    p(90)=1.92s   p(95)=2.02s   
     iterations.....................: 47703   236.779206/s
     vus............................: 239     min=239      max=400
     vus_max........................: 400     min=400      max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/14731ac1-f9af-4b4f-1032-52e639bd4000/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/cdd61137-ce69-43ed-e9fa-faf20a9c0600/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 65361      ✗ 0    
     data_received..................: 109 MB  540 kB/s
     data_sent......................: 26 MB   128 kB/s
     http_req_blocked...............: avg=845.94µs min=1.1µs   med=2.1µs  max=76.84ms p(90)=3µs     p(95)=3.8µs  
     http_req_connecting............: avg=831.94µs min=0s      med=0s     max=75.05ms p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=3.68s    min=1.31s   med=3.58s  max=7.61s   p(90)=3.99s   p(95)=4.3s   
       { expected_response:true }...: avg=3.68s    min=1.31s   med=3.58s  max=7.61s   p(90)=3.99s   p(95)=4.3s   
   ✓ http_req_failed................: 0.00%   ✓ 0          ✗ 21787
     http_req_receiving.............: avg=54.09µs  min=17.39µs med=39.4µs max=28.06ms p(90)=62.03µs p(95)=69.79µs
     http_req_sending...............: avg=112.42µs min=6.2µs   med=12.2µs max=57.61ms p(90)=24.99µs p(95)=28.46µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s      p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=3.68s    min=1.31s   med=3.58s  max=7.61s   p(90)=3.99s   p(95)=4.3s   
     http_reqs......................: 21787   107.975706/s
     iteration_duration.............: avg=3.69s    min=1.31s   med=3.58s  max=7.63s   p(90)=3.99s   p(95)=4.3s   
     iterations.....................: 21787   107.975706/s
     vus............................: 227     min=227      max=400
     vus_max........................: 400     min=400      max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c3419eac-e504-4fd7-a283-e2da317c2a00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0b8f5b75-5c60-4d34-d5fb-ad43c1a9b600/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 19788 / ✗ 1
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 19789

     checks.........................: 66.66% ✓ 39577     ✗ 19790
     data_received..................: 100 MB 491 kB/s
     data_sent......................: 24 MB  116 kB/s
     http_req_blocked...............: avg=752.16µs min=1.1µs  med=2.1µs  max=106.06ms p(90)=3.2µs  p(95)=4.1µs  
     http_req_connecting............: avg=734.97µs min=0s     med=0s     max=106.01ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=4.08s    min=2.85s  med=3.97s  max=9.06s    p(90)=4.36s  p(95)=5.05s  
       { expected_response:true }...: avg=4.08s    min=2.85s  med=3.97s  max=9.06s    p(90)=4.36s  p(95)=5.05s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 19789
     http_req_receiving.............: avg=66.07µs  min=20.6µs med=44.3µs max=35.93ms  p(90)=68.8µs p(95)=77.21µs
     http_req_sending...............: avg=71.75µs  min=7.4µs  med=12.5µs max=41.49ms  p(90)=24.4µs p(95)=30.4µs 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=4.08s    min=2.85s  med=3.97s  max=9.06s    p(90)=4.36s  p(95)=5.05s  
     http_reqs......................: 19789  97.550788/s
     iteration_duration.............: avg=4.08s    min=2.85s  med=3.97s  max=9.06s    p(90)=4.36s  p(95)=5.05s  
     iterations.....................: 19789  97.550788/s
     vus............................: 57     min=57      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b069801b-141f-413b-d5bc-a0763b727700/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f479f6a8-8d72-463e-cc96-b6d44424f600/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 13833 / ✗ 70
     ✗ valid response structure
      ↳  99% — ✓ 13833 / ✗ 70

     checks.........................: 99.66% ✓ 41569     ✗ 140  
     data_received..................: 69 MB  339 kB/s
     data_sent......................: 17 MB  81 kB/s
     http_req_blocked...............: avg=971.55µs min=1.5µs  med=3µs    max=78.2ms   p(90)=5.2µs   p(95)=23.7µs  
     http_req_connecting............: avg=951.61µs min=0s     med=0s     max=78.16ms  p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=5.83s    min=1.99s  med=5.59s  max=11.99s   p(90)=7.65s   p(95)=9.16s   
       { expected_response:true }...: avg=5.83s    min=1.99s  med=5.59s  max=11.99s   p(90)=7.65s   p(95)=9.16s   
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 13903
     http_req_receiving.............: avg=90.69µs  min=25.4µs med=62.7µs max=32.73ms  p(90)=109.9µs p(95)=143.2µs 
     http_req_sending...............: avg=212.92µs min=9.7µs  med=17.7µs max=231.51ms p(90)=50.8µs  p(95)=125.19µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=5.83s    min=1.98s  med=5.59s  max=11.99s   p(90)=7.65s   p(95)=9.16s   
     http_reqs......................: 13903  68.077992/s
     iteration_duration.............: avg=5.84s    min=1.99s  med=5.59s  max=11.99s   p(90)=7.65s   p(95)=9.17s   
     iterations.....................: 13903  68.077992/s
     vus............................: 62     min=62      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/dfa28964-5ef8-42ff-be2d-fdf69183b700/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/787c0c6e-f946-4297-0ee7-ae14a7b7e100/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server-node16`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  82% — ✓ 10649 / ✗ 2182
     ✗ valid response structure
      ↳  82% — ✓ 10649 / ✗ 2182

     checks.........................: 88.66% ✓ 34129     ✗ 4364 
     data_received..................: 64 MB  313 kB/s
     data_sent......................: 15 MB  75 kB/s
     http_req_blocked...............: avg=1.09ms   min=900ns   med=2.2µs   max=97.22ms p(90)=3.4µs   p(95)=13.14µs
     http_req_connecting............: avg=1.07ms   min=0s      med=0s      max=97.19ms p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=6.29s    min=1.44s   med=5.95s   max=12.35s  p(90)=8.42s   p(95)=9.44s  
       { expected_response:true }...: avg=6.29s    min=1.44s   med=5.95s   max=12.35s  p(90)=8.42s   p(95)=9.44s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 12831
     http_req_receiving.............: avg=63.6µs   min=20.29µs med=51.59µs max=27.34ms p(90)=75.19µs p(95)=83.49µs
     http_req_sending...............: avg=203.14µs min=6.3µs   med=13.4µs  max=53.36ms p(90)=28.5µs  p(95)=71.59µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s      p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=6.29s    min=1.44s   med=5.95s   max=12.34s  p(90)=8.42s   p(95)=9.44s  
     http_reqs......................: 12831  63.114016/s
     iteration_duration.............: avg=6.29s    min=1.44s   med=5.95s   max=12.4s   p(90)=8.42s   p(95)=9.44s  
     iterations.....................: 12831  63.114016/s
     vus............................: 67     min=67      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2738d7f5-31b1-4368-c50e-9aca3d3baa00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/50140ea9-6b82-417c-5a83-41c86071a500/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  99% — ✓ 11412 / ✗ 50
     ✗ no graphql errors
      ↳  83% — ✓ 9564 / ✗ 1898
     ✗ valid response structure
      ↳  83% — ✓ 9564 / ✗ 1848

     checks.........................: 88.94% ✓ 30540     ✗ 3796 
     data_received..................: 57 MB  276 kB/s
     data_sent......................: 14 MB  67 kB/s
     http_req_blocked...............: avg=2.29ms   min=1.3µs    med=2.4µs  max=180.47ms p(90)=3.9µs  p(95)=16.5µs 
     http_req_connecting............: avg=2.24ms   min=0s       med=0s     max=180.28ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=7.07s    min=976.05ms med=6.31s  max=1m0s     p(90)=8.76s  p(95)=9.72s  
       { expected_response:true }...: avg=6.83s    min=976.05ms med=6.31s  max=59.88s   p(90)=8.73s  p(95)=9.6s   
   ✓ http_req_failed................: 0.43%  ✓ 50        ✗ 11412
     http_req_receiving.............: avg=62.27µs  min=0s       med=53.5µs max=11.66ms  p(90)=78µs   p(95)=87.19µs
     http_req_sending...............: avg=277.84µs min=7.5µs    med=13.5µs max=106.11ms p(90)=29.1µs p(95)=105.3µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=7.07s    min=976ms    med=6.31s  max=1m0s     p(90)=8.76s  p(95)=9.72s  
     http_reqs......................: 11462  56.070088/s
     iteration_duration.............: avg=7.07s    min=976.27ms med=6.32s  max=1m0s     p(90)=8.78s  p(95)=9.72s  
     iterations.....................: 11462  56.070088/s
     vus............................: 127    min=127     max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/61d8b1d6-f15f-4abb-df37-897121f91100/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c3c9e715-8b83-4f9f-89ba-ea5cee180e00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 4839     ✗ 0    
     data_received..................: 8.1 MB  35 kB/s
     data_sent......................: 1.9 MB  8.3 kB/s
     http_req_blocked...............: avg=12.54ms min=1.8µs  med=2.6µs  max=97.41ms p(90)=59.17ms p(95)=65.24ms 
     http_req_connecting............: avg=12.36ms min=0s     med=0s     max=97.37ms p(90)=58.85ms p(95)=64.61ms 
     http_req_duration..............: avg=53.09s  min=29.42s med=56.51s max=57s     p(90)=56.79s  p(95)=56.84s  
       { expected_response:true }...: avg=53.09s  min=29.42s med=56.51s max=57s     p(90)=56.79s  p(95)=56.84s  
   ✓ http_req_failed................: 0.00%   ✓ 0        ✗ 1613 
     http_req_receiving.............: avg=69.44µs min=25.8µs med=63.3µs max=716.7µs p(90)=95.27µs p(95)=110.37µs
     http_req_sending...............: avg=1.37ms  min=10.6µs med=21µs   max=22.95ms p(90)=3.33ms  p(95)=11.39ms 
     http_req_tls_handshaking.......: avg=0s      min=0s     med=0s     max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=53.08s  min=29.42s med=56.51s max=57s     p(90)=56.79s  p(95)=56.84s  
     http_reqs......................: 1613    7.031608/s
     iteration_duration.............: avg=53.1s   min=29.42s med=56.51s max=57s     p(90)=56.79s  p(95)=56.84s  
     iterations.....................: 1613    7.031608/s
     vus............................: 10      min=10     max=400
     vus_max........................: 400     min=400    max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9282862b-a10c-4a96-b863-be4855052a00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d83c1429-d540-4f73-8813-dc8672b6f300/public" alt="HTTP Overview" />


  </details>