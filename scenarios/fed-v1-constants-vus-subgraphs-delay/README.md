## Overview for: `scenarios/fed-v1-constants-vus-subgraphs-delay`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. All subgraphs have an intentional delay on replying, and this creates additional pressure on the gateway's memory. We are running a heavy load of concurrent VUs to measure response time and other stats, during stress. It measure things like memory usage, CPU usage, response times.


This scenario was running 100 VUs over 60s


### Comparison


| Gateway       | RPS ⬇️ |       Requests       |          Duration          |
| :------------ | :----: | :------------------: | :------------------------: |
| mesh          |   65   | 4027 total, 0 failed |  avg: 1506ms, p95: 1938ms  |
| apollo-router |   52   | 3215 total, 0 failed |  avg: 1882ms, p95: 2113ms  |
| apollo-server |   48   | 2999 total, 0 failed |  avg: 2048ms, p95: 2834ms  |
| wundergraph   |   23   | 1500 total, 0 failed |  avg: 4267ms, p95: 4409ms  |
| mercurius     |   4    | 300 total, 0 failed  | avg: 23014ms, p95: 26717ms |



<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 12081     ✗ 0    
     data_received..................: 20 MB   328 kB/s
     data_sent......................: 4.8 MB  78 kB/s
     http_req_blocked...............: avg=69.25µs min=1.6µs  med=2.7µs  max=5.72ms p(90)=4.5µs  p(95)=13.9µs 
     http_req_connecting............: avg=64.5µs  min=0s     med=0s     max=5.48ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=1.5s    min=1.31s  med=1.42s  max=2.86s  p(90)=1.7s   p(95)=1.93s  
       { expected_response:true }...: avg=1.5s    min=1.31s  med=1.42s  max=2.86s  p(90)=1.7s   p(95)=1.93s  
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 4027 
     http_req_receiving.............: avg=63µs    min=22.4µs med=59.4µs max=4.36ms p(90)=81.8µs p(95)=89.57µs
     http_req_sending...............: avg=46.78µs min=9.3µs  med=15µs   max=9.97ms p(90)=29.1µs p(95)=35.5µs 
     http_req_tls_handshaking.......: avg=0s      min=0s     med=0s     max=0s     p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=1.5s    min=1.31s  med=1.42s  max=2.86s  p(90)=1.7s   p(95)=1.93s  
     http_reqs......................: 4027    65.645953/s
     iteration_duration.............: avg=1.5s    min=1.31s  med=1.42s  max=2.87s  p(90)=1.7s   p(95)=1.93s  
     iterations.....................: 4027    65.645953/s
     vus............................: 34      min=34      max=100
     vus_max........................: 100     min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5ca7ee70-e585-41a7-eb7e-f2661635a000/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d2ede850-cfbf-4d49-b2c7-c5ea6dc1f500/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 9645      ✗ 0    
     data_received..................: 16 MB   259 kB/s
     data_sent......................: 3.8 MB  62 kB/s
     http_req_blocked...............: avg=425.6µs  min=1.6µs  med=2.6µs  max=28.6ms  p(90)=4.2µs    p(95)=19.59µs 
     http_req_connecting............: avg=414.46µs min=0s     med=0s     max=28.56ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=1.88s    min=1.75s  med=1.8s   max=3.84s   p(90)=1.94s    p(95)=2.11s   
       { expected_response:true }...: avg=1.88s    min=1.75s  med=1.8s   max=3.84s   p(90)=1.94s    p(95)=2.11s   
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 3215 
     http_req_receiving.............: avg=77.82µs  min=23.7µs med=58.8µs max=5.87ms  p(90)=101.19µs p(95)=121.09µs
     http_req_sending...............: avg=77.36µs  min=8.6µs  med=15.2µs max=20.01ms p(90)=38.1µs   p(95)=81.65µs 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=1.88s    min=1.75s  med=1.8s   max=3.83s   p(90)=1.94s    p(95)=2.11s   
     http_reqs......................: 3215    52.062655/s
     iteration_duration.............: avg=1.88s    min=1.75s  med=1.8s   max=3.84s   p(90)=1.94s    p(95)=2.11s   
     iterations.....................: 3215    52.062655/s
     vus............................: 15      min=15      max=100
     vus_max........................: 100     min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3fa0c2d9-51ec-4716-649d-bfbd012eb600/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/877d524e-b91d-4914-313a-286af20c6000/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 2997 / ✗ 2
     ✗ valid response structure
      ↳  99% — ✓ 2997 / ✗ 2

     checks.........................: 99.95% ✓ 8993      ✗ 4    
     data_received..................: 16 MB  249 kB/s
     data_sent......................: 3.6 MB 57 kB/s
     http_req_blocked...............: avg=130.04µs min=1.6µs  med=2.8µs  max=14.01ms p(90)=5µs     p(95)=16.8µs 
     http_req_connecting............: avg=123.95µs min=0s     med=0s     max=13.97ms p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=2.04s    min=1.77s  med=1.95s  max=3.62s   p(90)=2.24s   p(95)=2.83s  
       { expected_response:true }...: avg=2.04s    min=1.77s  med=1.95s  max=3.62s   p(90)=2.24s   p(95)=2.83s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 2999 
     http_req_receiving.............: avg=81.93µs  min=26.5µs med=65.1µs max=14.62ms p(90)=94.42µs p(95)=103.5µs
     http_req_sending...............: avg=54.33µs  min=9.1µs  med=17.2µs max=8.36ms  p(90)=33µs    p(95)=53.92µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=2.04s    min=1.77s  med=1.95s  max=3.62s   p(90)=2.24s   p(95)=2.83s  
     http_reqs......................: 2999   48.330248/s
     iteration_duration.............: avg=2.04s    min=1.78s  med=1.95s  max=3.62s   p(90)=2.24s   p(95)=2.83s  
     iterations.....................: 2999   48.330248/s
     vus............................: 4      min=4       max=100
     vus_max........................: 100    min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e041c81f-cde7-4bba-08ce-8b231dd96800/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6baed35d-b7d3-468d-6e27-ad144da22f00/public" alt="HTTP Overview" />


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
     http_req_blocked...............: avg=229.18µs min=1.3µs  med=2.65µs max=18.34ms  p(90)=5.41µs   p(95)=985.59µs
     http_req_connecting............: avg=222µs    min=0s     med=0s     max=17.76ms  p(90)=0s       p(95)=939.69µs
     http_req_duration..............: avg=4.26s    min=4.12s  med=4.25s  max=4.47s    p(90)=4.32s    p(95)=4.4s    
       { expected_response:true }...: avg=4.26s    min=4.12s  med=4.25s  max=4.47s    p(90)=4.32s    p(95)=4.4s    
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 1500 
     http_req_receiving.............: avg=464.23µs min=21.4µs med=40.8µs max=91.83ms  p(90)=320.51µs p(95)=493.4µs 
     http_req_sending...............: avg=601.19µs min=9.5µs  med=14.7µs max=118.81ms p(90)=118.21µs p(95)=546.33µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=4.26s    min=4.12s  med=4.25s  max=4.46s    p(90)=4.32s    p(95)=4.4s    
     http_reqs......................: 1500    23.411386/s
     iteration_duration.............: avg=4.26s    min=4.13s  med=4.25s  max=4.48s    p(90)=4.32s    p(95)=4.41s   
     iterations.....................: 1500    23.411386/s
     vus............................: 100     min=100     max=100
     vus_max........................: 100     min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b82b239c-3a89-4489-0dc4-62ed43a37c00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f17fd7c5-20fb-41b3-b3a6-9f32d854fc00/public" alt="HTTP Overview" />


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
     http_req_blocked...............: avg=9.09ms   min=2.4µs  med=4.4µs    max=59.35ms p(90)=41.21ms  p(95)=56.31ms
     http_req_connecting............: avg=8.99ms   min=0s     med=0s       max=59.31ms p(90)=41.18ms  p(95)=49.08ms
     http_req_duration..............: avg=23.01s   min=18.86s med=22.79s   max=29.63s  p(90)=26.41s   p(95)=26.71s 
       { expected_response:true }...: avg=23.01s   min=18.86s med=22.79s   max=29.63s  p(90)=26.41s   p(95)=26.71s 
   ✓ http_req_failed................: 0.00%   ✓ 0        ✗ 300  
     http_req_receiving.............: avg=126.27µs min=45.2µs med=101.95µs max=3.01ms  p(90)=155.71µs p(95)=174.5µs
     http_req_sending...............: avg=1.6ms    min=14.7µs med=34.4µs   max=14.7ms  p(90)=10.44ms  p(95)=13.65ms
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s       max=0s      p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=23.01s   min=18.86s med=22.79s   max=29.63s  p(90)=26.41s   p(95)=26.71s 
     http_reqs......................: 300     4.049811/s
     iteration_duration.............: avg=23.02s   min=18.86s med=22.79s   max=29.65s  p(90)=26.41s   p(95)=26.74s 
     iterations.....................: 300     4.049811/s
     vus............................: 3       min=3      max=100
     vus_max........................: 100     min=100    max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/59bca715-2930-4494-9dc9-e4a48fafcb00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b0234778-d2f7-4175-369a-5f5be0607b00/public" alt="HTTP Overview" />


  </details>