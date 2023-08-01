## Overview for: `scenarios/fed-v1-constants-vus-subgraphs-delay`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. All subgraphs have an intentional delay on replying, and this creates additional pressure on the gateway's memory. We are running a heavy load of concurrent VUs to measure response time and other stats, during stress. It measure things like memory usage, CPU usage, response times.


This scenario was running 100 VUs over 60s


### Comparison


| Gateway         | RPS ⬇️ |       Requests       |          Duration          |
| :-------------- | :----: | :------------------: | :------------------------: |
| mesh-supergraph |   58   | 3564 total, 0 failed |  avg: 1703ms, p95: 2346ms  |
| apollo-router   |   55   | 3400 total, 0 failed |  avg: 1805ms, p95: 1884ms  |
| mesh            |   55   | 3380 total, 0 failed |  avg: 1792ms, p95: 2678ms  |
| apollo-server   |   48   | 3004 total, 0 failed |  avg: 2016ms, p95: 2538ms  |
| wundergraph     |   23   | 1500 total, 0 failed |  avg: 4263ms, p95: 4359ms  |
| mercurius       |   4    | 300 total, 0 failed  | avg: 23002ms, p95: 26637ms |



<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 3564

     checks.........................: 66.66% ✓ 7128      ✗ 3564 
     data_received..................: 18 MB  292 kB/s
     data_sent......................: 4.2 MB 69 kB/s
     http_req_blocked...............: avg=132.8µs  min=1.5µs  med=3.1µs   max=12.2ms  p(90)=4.59µs p(95)=14.9µs  
     http_req_connecting............: avg=127.38µs min=0s     med=0s      max=11.93ms p(90)=0s     p(95)=0s      
     http_req_duration..............: avg=1.7s     min=1.41s  med=1.59s   max=3.65s   p(90)=2.02s  p(95)=2.34s   
       { expected_response:true }...: avg=1.7s     min=1.41s  med=1.59s   max=3.65s   p(90)=2.02s  p(95)=2.34s   
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 3564 
     http_req_receiving.............: avg=76.87µs  min=23.4µs med=72.2µs  max=3.64ms  p(90)=97.5µs p(95)=111.15µs
     http_req_sending...............: avg=40.28µs  min=8.3µs  med=18.89µs max=5.54ms  p(90)=35.5µs p(95)=44.9µs  
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s      p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=1.7s     min=1.41s  med=1.59s   max=3.65s   p(90)=2.02s  p(95)=2.34s   
     http_reqs......................: 3564   58.040258/s
     iteration_duration.............: avg=1.7s     min=1.41s  med=1.59s   max=3.65s   p(90)=2.02s  p(95)=2.34s   
     iterations.....................: 3564   58.040258/s
     vus............................: 37     min=37      max=100
     vus_max........................: 100    min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7ed1f7a3-1a6c-48da-9c40-9ecda787c700/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/99539516-a86c-428c-7167-fc3067c57800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 10200     ✗ 0    
     data_received..................: 17 MB   274 kB/s
     data_sent......................: 4.0 MB  65 kB/s
     http_req_blocked...............: avg=329.76µs min=1.3µs  med=2.6µs  max=28.8ms  p(90)=4.2µs   p(95)=13.4µs 
     http_req_connecting............: avg=311.64µs min=0s     med=0s     max=28.76ms p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=1.8s     min=1.75s  med=1.77s  max=2.68s   p(90)=1.84s   p(95)=1.88s  
       { expected_response:true }...: avg=1.8s     min=1.75s  med=1.77s  max=2.68s   p(90)=1.84s   p(95)=1.88s  
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 3400 
     http_req_receiving.............: avg=65.47µs  min=20.9µs med=53.5µs max=6.65ms  p(90)=85.42µs p(95)=95.9µs 
     http_req_sending...............: avg=82.12µs  min=7.9µs  med=14.9µs max=27.94ms p(90)=28.8µs  p(95)=101.6µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=1.8s     min=1.75s  med=1.77s  max=2.68s   p(90)=1.84s   p(95)=1.88s  
     http_reqs......................: 3400    55.076666/s
     iteration_duration.............: avg=1.8s     min=1.75s  med=1.77s  max=2.71s   p(90)=1.84s   p(95)=1.88s  
     iterations.....................: 3400    55.076666/s
     vus............................: 97      min=97      max=100
     vus_max........................: 100     min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/35e7b64e-ba22-40c7-ef2e-59ef27102800/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/397938e9-b0d9-4153-0ab8-e494e11c4600/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 10140     ✗ 0    
     data_received..................: 17 MB   275 kB/s
     data_sent......................: 4.0 MB  65 kB/s
     http_req_blocked...............: avg=380.88µs min=1.6µs  med=3.1µs  max=20.83ms p(90)=4.4µs  p(95)=18.89µs
     http_req_connecting............: avg=372.61µs min=0s     med=0s     max=20.66ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=1.79s    min=1.34s  med=1.65s  max=3.9s    p(90)=2.08s  p(95)=2.67s  
       { expected_response:true }...: avg=1.79s    min=1.34s  med=1.65s  max=3.9s    p(90)=2.08s  p(95)=2.67s  
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 3380 
     http_req_receiving.............: avg=71.64µs  min=29.6µs med=65.2µs max=6.53ms  p(90)=96.3µs p(95)=108µs  
     http_req_sending...............: avg=72.98µs  min=9.6µs  med=17.6µs max=12.7ms  p(90)=40.3µs p(95)=54.57µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=1.79s    min=1.34s  med=1.65s  max=3.9s    p(90)=2.08s  p(95)=2.67s  
     http_reqs......................: 3380    55.077051/s
     iteration_duration.............: avg=1.79s    min=1.35s  med=1.66s  max=3.91s   p(90)=2.08s  p(95)=2.67s  
     iterations.....................: 3380    55.077051/s
     vus............................: 31      min=31      max=100
     vus_max........................: 100     min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c0af606c-b3ca-475b-c688-5586c148f100/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/bd1223ed-0731-46e4-d554-b69e42c28a00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 2999 / ✗ 5
     ✗ valid response structure
      ↳  99% — ✓ 2999 / ✗ 5

     checks.........................: 99.88% ✓ 9002      ✗ 10   
     data_received..................: 16 MB  251 kB/s
     data_sent......................: 3.6 MB 58 kB/s
     http_req_blocked...............: avg=155.73µs min=1.6µs  med=2.7µs  max=21.76ms p(90)=4µs    p(95)=15.8µs 
     http_req_connecting............: avg=146.45µs min=0s     med=0s     max=21.7ms  p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=2.01s    min=1.76s  med=1.92s  max=3.78s   p(90)=2.29s  p(95)=2.53s  
       { expected_response:true }...: avg=2.01s    min=1.76s  med=1.92s  max=3.78s   p(90)=2.29s  p(95)=2.53s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 3004 
     http_req_receiving.............: avg=71.6µs   min=24.2µs med=63.2µs max=14.29ms p(90)=87.6µs p(95)=95.1µs 
     http_req_sending...............: avg=65.98µs  min=10.4µs med=16µs   max=11.78ms p(90)=30.6µs p(95)=41.38µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=2.01s    min=1.76s  med=1.92s  max=3.78s   p(90)=2.29s  p(95)=2.53s  
     http_reqs......................: 3004   48.627349/s
     iteration_duration.............: avg=2.01s    min=1.76s  med=1.92s  max=3.79s   p(90)=2.29s  p(95)=2.53s  
     iterations.....................: 3004   48.627349/s
     vus............................: 11     min=11      max=100
     vus_max........................: 100    min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9395afb7-7f61-4028-55a9-0ea0d98d5c00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0dd48bd7-7fda-4ece-535e-4bb3bd54ed00/public" alt="HTTP Overview" />


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
     http_req_blocked...............: avg=1.96ms   min=1.4µs  med=2.9µs  max=51.88ms  p(90)=8.41µs   p(95)=21.47ms
     http_req_connecting............: avg=1.89ms   min=0s     med=0s     max=49.4ms   p(90)=0s       p(95)=21.07ms
     http_req_duration..............: avg=4.26s    min=4.08s  med=4.26s  max=4.41s    p(90)=4.33s    p(95)=4.35s  
       { expected_response:true }...: avg=4.26s    min=4.08s  med=4.26s  max=4.41s    p(90)=4.33s    p(95)=4.35s  
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 1500 
     http_req_receiving.............: avg=723.74µs min=21.7µs med=44.7µs max=105.94ms p(90)=329.07µs p(95)=532.7µs
     http_req_sending...............: avg=512.84µs min=9.8µs  med=15.3µs max=123.5ms  p(90)=546.03µs p(95)=1.46ms 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=4.26s    min=4.08s  med=4.26s  max=4.41s    p(90)=4.33s    p(95)=4.35s  
     http_reqs......................: 1500    23.427813/s
     iteration_duration.............: avg=4.26s    min=4.08s  med=4.26s  max=4.45s    p(90)=4.33s    p(95)=4.38s  
     iterations.....................: 1500    23.427813/s
     vus............................: 100     min=100     max=100
     vus_max........................: 100     min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8bdb303c-55e8-46b1-53b7-3ff4e812c200/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/05233a40-99a6-44ba-8973-74696f789600/public" alt="HTTP Overview" />


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
     http_req_blocked...............: avg=1.89ms   min=2.1µs  med=3.8µs  max=16.01ms  p(90)=7.8ms    p(95)=9.77ms 
     http_req_connecting............: avg=1.81ms   min=0s     med=0s     max=15.23ms  p(90)=7.7ms    p(95)=9.51ms 
     http_req_duration..............: avg=23s      min=19.08s med=22.74s max=28.95s   p(90)=26.36s   p(95)=26.63s 
       { expected_response:true }...: avg=23s      min=19.08s med=22.74s max=28.95s   p(90)=26.36s   p(95)=26.63s 
   ✓ http_req_failed................: 0.00%   ✓ 0        ✗ 300  
     http_req_receiving.............: avg=98.75µs  min=32.2µs med=86.3µs max=994.69µs p(90)=141.88µs p(95)=173.2µs
     http_req_sending...............: avg=356.99µs min=13.3µs med=30.1µs max=6.08ms   p(90)=1.22ms   p(95)=2.37ms 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=23s      min=19.08s med=22.74s max=28.95s   p(90)=26.36s   p(95)=26.63s 
     http_reqs......................: 300     4.040106/s
     iteration_duration.............: avg=23s      min=19.08s med=22.74s max=28.95s   p(90)=26.36s   p(95)=26.63s 
     iterations.....................: 300     4.040106/s
     vus............................: 2       min=2      max=100
     vus_max........................: 100     min=100    max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/09d9fb18-86cc-487f-fc72-ba0a9fcdc300/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/612d4801-4f2f-4aed-3f3f-de4f57b0a600/public" alt="HTTP Overview" />


  </details>