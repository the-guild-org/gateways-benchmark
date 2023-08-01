## Overview for: `scenarios/fed-v1-constants-vus-subgraphs-delay`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. All subgraphs have an intentional delay on replying, and this creates additional pressure on the gateway's memory. We are running a heavy load of concurrent VUs to measure response time and other stats, during stress. It measure things like memory usage, CPU usage, response times.


This scenario was running 100 VUs over 60s


### Comparison


| Gateway         | RPS ⬇️ |       Requests       |          Duration          |
| :-------------- | :----: | :------------------: | :------------------------: |
| mesh            |   65   | 4021 total, 0 failed |  avg: 1508ms, p95: 1981ms  |
| mesh-supergraph |   59   | 3635 total, 0 failed |  avg: 1670ms, p95: 2191ms  |
| apollo-router   |   53   | 3326 total, 0 failed |  avg: 1819ms, p95: 1906ms  |
| apollo-server   |   48   | 2981 total, 0 failed |  avg: 2049ms, p95: 2631ms  |
| wundergraph     |   23   | 1500 total, 0 failed |  avg: 4268ms, p95: 4396ms  |
| mercurius       |   4    | 300 total, 0 failed  | avg: 22968ms, p95: 26617ms |



<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 12063     ✗ 0    
     data_received..................: 20 MB   327 kB/s
     data_sent......................: 4.8 MB  78 kB/s
     http_req_blocked...............: avg=134.85µs min=1.6µs  med=2.5µs   max=12.37ms p(90)=3.8µs  p(95)=14.1µs
     http_req_connecting............: avg=130.65µs min=0s     med=0s      max=12.33ms p(90)=0s     p(95)=0s    
     http_req_duration..............: avg=1.5s     min=1.31s  med=1.42s   max=3.01s   p(90)=1.71s  p(95)=1.98s 
       { expected_response:true }...: avg=1.5s     min=1.31s  med=1.42s   max=3.01s   p(90)=1.71s  p(95)=1.98s 
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 4021 
     http_req_receiving.............: avg=60.13µs  min=24.9µs med=55.9µs  max=7.32ms  p(90)=76.8µs p(95)=82.7µs
     http_req_sending...............: avg=47.93µs  min=9.4µs  med=13.89µs max=10.64ms p(90)=27.7µs p(95)=32.1µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s      p(90)=0s     p(95)=0s    
     http_req_waiting...............: avg=1.5s     min=1.31s  med=1.42s   max=3.01s   p(90)=1.71s  p(95)=1.98s 
     http_reqs......................: 4021    65.428928/s
     iteration_duration.............: avg=1.5s     min=1.31s  med=1.42s   max=3.01s   p(90)=1.71s  p(95)=1.98s 
     iterations.....................: 4021    65.428928/s
     vus............................: 27      min=27      max=100
     vus_max........................: 100     min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/07742b78-cc42-406e-7651-67a9ef46ef00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/108fb276-1bc7-4f77-61ab-91ec96420a00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 3635

     checks.........................: 66.66% ✓ 7270      ✗ 3635 
     data_received..................: 18 MB  298 kB/s
     data_sent......................: 4.3 MB 70 kB/s
     http_req_blocked...............: avg=292.91µs min=1.3µs  med=3µs     max=22.62ms p(90)=4.3µs   p(95)=20.8µs 
     http_req_connecting............: avg=284.98µs min=0s     med=0s      max=22.56ms p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=1.67s    min=1.41s  med=1.57s   max=3.51s   p(90)=1.96s   p(95)=2.19s  
       { expected_response:true }...: avg=1.67s    min=1.41s  med=1.57s   max=3.51s   p(90)=1.96s   p(95)=2.19s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 3635 
     http_req_receiving.............: avg=75.35µs  min=27.9µs med=66.3µs  max=5.34ms  p(90)=98.66µs p(95)=111.9µs
     http_req_sending...............: avg=85.38µs  min=9.4µs  med=19.09µs max=8.97ms  p(90)=39.86µs p(95)=56.3µs 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s      p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=1.67s    min=1.41s  med=1.57s   max=3.51s   p(90)=1.96s   p(95)=2.19s  
     http_reqs......................: 3635   59.170357/s
     iteration_duration.............: avg=1.67s    min=1.42s  med=1.57s   max=3.52s   p(90)=1.96s   p(95)=2.19s  
     iterations.....................: 3635   59.170357/s
     vus............................: 41     min=41      max=100
     vus_max........................: 100    min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/41d5108e-5f29-4cbe-488f-c2d628f11200/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8d92dd0d-fd9b-4b2d-d233-b833f7d85200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 9978     ✗ 0    
     data_received..................: 17 MB   268 kB/s
     data_sent......................: 3.9 MB  64 kB/s
     http_req_blocked...............: avg=146.16µs min=1.4µs  med=3µs     max=13.24ms p(90)=4.5µs   p(95)=13.02µs 
     http_req_connecting............: avg=138.02µs min=0s     med=0s      max=13.19ms p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=1.81s    min=1.75s  med=1.77s   max=2.87s   p(90)=1.86s   p(95)=1.9s    
       { expected_response:true }...: avg=1.81s    min=1.75s  med=1.77s   max=2.87s   p(90)=1.86s   p(95)=1.9s    
   ✓ http_req_failed................: 0.00%   ✓ 0        ✗ 3326 
     http_req_receiving.............: avg=73.7µs   min=20.4µs med=63.35µs max=5.63ms  p(90)=89.75µs p(95)=100.32µs
     http_req_sending...............: avg=71.29µs  min=7.3µs  med=17.7µs  max=10.18ms p(90)=31µs    p(95)=93.75µs 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=1.81s    min=1.75s  med=1.77s   max=2.86s   p(90)=1.86s   p(95)=1.9s    
     http_reqs......................: 3326    53.85049/s
     iteration_duration.............: avg=1.81s    min=1.75s  med=1.77s   max=2.87s   p(90)=1.86s   p(95)=1.9s    
     iterations.....................: 3326    53.85049/s
     vus............................: 26      min=26     max=100
     vus_max........................: 100     min=100    max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/308d0588-6e90-44a5-7477-5d90e0ade300/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/74dd5a85-1fb3-4559-6579-89331427bc00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 2971 / ✗ 10
     ✗ valid response structure
      ↳  99% — ✓ 2971 / ✗ 10

     checks.........................: 99.77% ✓ 8923      ✗ 20   
     data_received..................: 15 MB  249 kB/s
     data_sent......................: 3.5 MB 57 kB/s
     http_req_blocked...............: avg=154.59µs min=1.6µs  med=2.8µs  max=12.38ms  p(90)=4.7µs  p(95)=16.2µs 
     http_req_connecting............: avg=147.96µs min=0s     med=0s     max=12.35ms  p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=2.04s    min=1.78s  med=1.95s  max=3.69s    p(90)=2.38s  p(95)=2.63s  
       { expected_response:true }...: avg=2.04s    min=1.78s  med=1.95s  max=3.69s    p(90)=2.38s  p(95)=2.63s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 2981 
     http_req_receiving.............: avg=66.32µs  min=27.9µs med=62.8µs max=679.21µs p(90)=90.9µs p(95)=100.5µs
     http_req_sending...............: avg=103.32µs min=9.29µs med=15.6µs max=11.86ms  p(90)=30.5µs p(95)=51.5µs 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=2.04s    min=1.78s  med=1.95s  max=3.69s    p(90)=2.38s  p(95)=2.63s  
     http_reqs......................: 2981   48.303752/s
     iteration_duration.............: avg=2.05s    min=1.78s  med=1.95s  max=3.69s    p(90)=2.38s  p(95)=2.63s  
     iterations.....................: 2981   48.303752/s
     vus............................: 78     min=78      max=100
     vus_max........................: 100    min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e9300225-ec0d-4ea9-94c0-a832c2bf3700/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/523f0d20-d9d6-409f-bd5a-e87653f64200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 4500      ✗ 0    
     data_received..................: 7.5 MB  117 kB/s
     data_sent......................: 1.8 MB  28 kB/s
     http_req_blocked...............: avg=757.86µs min=1.8µs med=2.6µs  max=30.82ms  p(90)=4.89µs   p(95)=4.78ms  
     http_req_connecting............: avg=732.29µs min=0s    med=0s     max=30.67ms  p(90)=0s       p(95)=4.29ms  
     http_req_duration..............: avg=4.26s    min=4.13s med=4.26s  max=4.54s    p(90)=4.32s    p(95)=4.39s   
       { expected_response:true }...: avg=4.26s    min=4.13s med=4.26s  max=4.54s    p(90)=4.32s    p(95)=4.39s   
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 1500 
     http_req_receiving.............: avg=688.65µs min=23µs  med=42.2µs max=121.29ms p(90)=315.83µs p(95)=539.29µs
     http_req_sending...............: avg=433.25µs min=12µs  med=15µs   max=72.38ms  p(90)=237.61µs p(95)=1.38ms  
     http_req_tls_handshaking.......: avg=0s       min=0s    med=0s     max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=4.26s    min=4.13s med=4.25s  max=4.54s    p(90)=4.31s    p(95)=4.39s   
     http_reqs......................: 1500    23.404705/s
     iteration_duration.............: avg=4.26s    min=4.13s med=4.26s  max=4.55s    p(90)=4.32s    p(95)=4.4s    
     iterations.....................: 1500    23.404705/s
     vus............................: 100     min=100     max=100
     vus_max........................: 100     min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/acd010b5-0f6f-44fa-f1bc-fc80470a6700/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f522c5df-7ae5-4f1e-2db7-9d011918e000/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 900      ✗ 0    
     data_received..................: 1.5 MB  20 kB/s
     data_sent......................: 356 kB  4.8 kB/s
     http_req_blocked...............: avg=5.78ms   min=1.8µs  med=3.5µs   max=36.1ms  p(90)=21.72ms  p(95)=24.43ms 
     http_req_connecting............: avg=5.67ms   min=0s     med=0s      max=36.07ms p(90)=21.64ms  p(95)=24.35ms 
     http_req_duration..............: avg=22.96s   min=19.16s med=22.66s  max=28.92s  p(90)=26.16s   p(95)=26.61s  
       { expected_response:true }...: avg=22.96s   min=19.16s med=22.66s  max=28.92s  p(90)=26.16s   p(95)=26.61s  
   ✓ http_req_failed................: 0.00%   ✓ 0        ✗ 300  
     http_req_receiving.............: avg=85.13µs  min=36.8µs med=81.44µs max=599.5µs p(90)=106.81µs p(95)=116.86µs
     http_req_sending...............: avg=640.56µs min=12.3µs med=24.25µs max=13.5ms  p(90)=2.44ms   p(95)=3.64ms  
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=22.96s   min=19.16s med=22.66s  max=28.92s  p(90)=26.16s   p(95)=26.61s  
     http_reqs......................: 300     4.046507/s
     iteration_duration.............: avg=22.97s   min=19.18s med=22.66s  max=28.93s  p(90)=26.16s   p(95)=26.63s  
     iterations.....................: 300     4.046507/s
     vus............................: 2       min=2      max=100
     vus_max........................: 100     min=100    max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/472d2f2f-ff48-48d3-c8c5-659fc2ad8c00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c7a336e8-abc6-4a3f-8b3e-9176675ef500/public" alt="HTTP Overview" />


  </details>