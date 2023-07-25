## Overview for: `scenarios/fed-v1-constants-vus-subgraphs-delay`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. All subgraphs have an intentional delay on replying, and this creates additional pressure on the gateway's memory. We are running a heavy load of concurrent VUs to measure response time and other stats, during stress. It measure things like memory usage, CPU usage, response times.


This scenario was running 100 VUs over 60s


### Comparison


| Gateway       | RPS ⬇️ |       Requests       |          Duration          |
| :------------ | :----: | :------------------: | :------------------------: |
| mesh          |   68   | 4193 total, 0 failed |  avg: 1450ms, p95: 1824ms  |
| apollo-router |   55   | 3400 total, 0 failed |  avg: 1792ms, p95: 1844ms  |
| apollo-server |   48   | 2992 total, 0 failed |  avg: 2046ms, p95: 2846ms  |
| wundergraph   |   23   | 1500 total, 0 failed |  avg: 4252ms, p95: 4359ms  |
| mercurius     |   4    | 300 total, 0 failed  | avg: 23002ms, p95: 26709ms |



<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 12579     ✗ 0    
     data_received..................: 21 MB   342 kB/s
     data_sent......................: 5.0 MB  81 kB/s
   ✓ expected_result................: 0.00%   ✓ 0         ✗ 0    
     http_req_blocked...............: avg=48.84µs min=1.1µs  med=2.4µs   max=5.14ms p(90)=3.3µs   p(95)=4.43µs 
     http_req_connecting............: avg=44.71µs min=0s     med=0s      max=4.97ms p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=1.44s   min=1.31s  med=1.38s   max=2.86s  p(90)=1.56s   p(95)=1.82s  
       { expected_response:true }...: avg=1.44s   min=1.31s  med=1.38s   max=2.86s  p(90)=1.56s   p(95)=1.82s  
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 4193 
     http_req_receiving.............: avg=60.4µs  min=18.8µs med=55.09µs max=4.2ms  p(90)=76.59µs p(95)=82.63µs
     http_req_sending...............: avg=31.64µs min=6.6µs  med=14.69µs max=8.97ms p(90)=28.29µs p(95)=33.29µs
     http_req_tls_handshaking.......: avg=0s      min=0s     med=0s      max=0s     p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=1.44s   min=1.31s  med=1.38s   max=2.86s  p(90)=1.56s   p(95)=1.82s  
     http_reqs......................: 4193    68.406722/s
     iteration_duration.............: avg=1.45s   min=1.31s  med=1.38s   max=2.86s  p(90)=1.56s   p(95)=1.82s  
     iterations.....................: 4193    68.406722/s
   ✓ no_errors......................: 0.00%   ✓ 0         ✗ 0    
     vus............................: 37      min=37      max=100
     vus_max........................: 100     min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d76890ea-7a09-4a30-b849-9e526f5e7d00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/70c74e6f-0ede-4a18-b1d9-3e1c23eafb00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 10200     ✗ 0    
     data_received..................: 17 MB   276 kB/s
     data_sent......................: 4.0 MB  66 kB/s
   ✓ expected_result................: 0.00%   ✓ 0         ✗ 0    
     http_req_blocked...............: avg=396.67µs min=900ns  med=2.2µs  max=21.07ms p(90)=3.4µs  p(95)=6.2µs 
     http_req_connecting............: avg=381.3µs  min=0s     med=0s     max=20.81ms p(90)=0s     p(95)=0s    
     http_req_duration..............: avg=1.79s    min=1.75s  med=1.76s  max=2.49s   p(90)=1.81s  p(95)=1.84s 
       { expected_response:true }...: avg=1.79s    min=1.75s  med=1.76s  max=2.49s   p(90)=1.81s  p(95)=1.84s 
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 3400 
     http_req_receiving.............: avg=54.46µs  min=15.7µs med=49.7µs max=1.88ms  p(90)=78µs   p(95)=86.3µs
     http_req_sending...............: avg=145.29µs min=6.2µs  med=14.8µs max=20.14ms p(90)=26.1µs p(95)=35.6µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s     p(95)=0s    
     http_req_waiting...............: avg=1.79s    min=1.75s  med=1.76s  max=2.49s   p(90)=1.81s  p(95)=1.84s 
     http_reqs......................: 3400    55.449556/s
     iteration_duration.............: avg=1.79s    min=1.75s  med=1.77s  max=2.51s   p(90)=1.81s  p(95)=1.84s 
     iterations.....................: 3400    55.449556/s
   ✓ no_errors......................: 0.00%   ✓ 0         ✗ 0    
     vus............................: 59      min=59      max=100
     vus_max........................: 100     min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/902e5262-ec01-45fd-d3f4-8e6870fd7000/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0686aaca-577a-47f9-6f28-f8a49a73cd00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 2990 / ✗ 2
     ✓ expected_result

     checks.........................: 99.97% ✓ 8974      ✗ 2    
     data_received..................: 15 MB  250 kB/s
     data_sent......................: 3.6 MB 58 kB/s
   ✓ expected_result................: 0.00%  ✓ 0         ✗ 0    
     http_req_blocked...............: avg=360.39µs min=1.3µs  med=2.6µs  max=27.75ms p(90)=4.4µs   p(95)=15.4µs 
     http_req_connecting............: avg=342.06µs min=0s     med=0s     max=23.53ms p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=2.04s    min=1.77s  med=1.94s  max=3.72s   p(90)=2.26s   p(95)=2.84s  
       { expected_response:true }...: avg=2.04s    min=1.77s  med=1.94s  max=3.72s   p(90)=2.26s   p(95)=2.84s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 2992 
     http_req_receiving.............: avg=72.07µs  min=25.9µs med=64.7µs max=6.54ms  p(90)=89.8µs  p(95)=99.74µs
     http_req_sending...............: avg=131.6µs  min=9µs    med=15.5µs max=9.24ms  p(90)=30.69µs p(95)=37.99µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=2.04s    min=1.77s  med=1.94s  max=3.71s   p(90)=2.26s   p(95)=2.84s  
     http_reqs......................: 2992   48.400393/s
     iteration_duration.............: avg=2.04s    min=1.77s  med=1.94s  max=3.73s   p(90)=2.26s   p(95)=2.84s  
     iterations.....................: 2992   48.400393/s
   ✓ no_errors......................: 0.00%  ✓ 0         ✗ 0    
     vus............................: 88     min=88      max=100
     vus_max........................: 100    min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c97b4301-d0d6-43ad-36d8-79b0c34a7700/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c258fe43-5025-4131-1c60-6e9a7c812b00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 4500    ✗ 0    
     data_received..................: 7.5 MB  117 kB/s
     data_sent......................: 1.8 MB  28 kB/s
   ✓ expected_result................: 0.00%   ✓ 0       ✗ 0    
     http_req_blocked...............: avg=147.55µs min=800ns  med=1.5µs   max=12.09ms p(90)=4.11µs   p(95)=847.43µs
     http_req_connecting............: avg=134.25µs min=0s     med=0s      max=7.16ms  p(90)=0s       p(95)=760.45µs
     http_req_duration..............: avg=4.25s    min=4.18s  med=4.24s   max=4.39s   p(90)=4.27s    p(95)=4.35s   
       { expected_response:true }...: avg=4.25s    min=4.18s  med=4.24s   max=4.39s   p(90)=4.27s    p(95)=4.35s   
   ✓ http_req_failed................: 0.00%   ✓ 0       ✗ 1500 
     http_req_receiving.............: avg=169.68µs min=15.9µs med=25.35µs max=40.38ms p(90)=104.28µs p(95)=249.33µs
     http_req_sending...............: avg=90.74µs  min=5.9µs  med=8.69µs  max=13.12ms p(90)=97.54µs  p(95)=478.62µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=4.25s    min=4.18s  med=4.24s   max=4.39s   p(90)=4.27s    p(95)=4.35s   
     http_reqs......................: 1500    23.5082/s
     iteration_duration.............: avg=4.25s    min=4.18s  med=4.24s   max=4.39s   p(90)=4.27s    p(95)=4.36s   
     iterations.....................: 1500    23.5082/s
   ✓ no_errors......................: 0.00%   ✓ 0       ✗ 0    
     vus............................: 100     min=100   max=100
     vus_max........................: 100     min=100   max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/11af743d-f9c9-460c-f816-3242a90b1000/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f7ae5dd8-54e3-4459-26fd-58ad9fbc4000/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 900      ✗ 0    
     data_received..................: 1.5 MB  20 kB/s
     data_sent......................: 356 kB  4.8 kB/s
   ✓ expected_result................: 0.00%   ✓ 0        ✗ 0    
     http_req_blocked...............: avg=2.65ms  min=1.9µs  med=3.7µs  max=16.77ms  p(90)=9.97ms   p(95)=13.29ms 
     http_req_connecting............: avg=2.63ms  min=0s     med=0s     max=16.6ms   p(90)=9.94ms   p(95)=13.26ms 
     http_req_duration..............: avg=23s     min=18.93s med=22.77s max=29.21s   p(90)=26.22s   p(95)=26.7s   
       { expected_response:true }...: avg=23s     min=18.93s med=22.77s max=29.21s   p(90)=26.22s   p(95)=26.7s   
   ✓ http_req_failed................: 0.00%   ✓ 0        ✗ 300  
     http_req_receiving.............: avg=99.22µs min=29.1µs med=92.1µs max=779.18µs p(90)=129.13µs p(95)=149.91µs
     http_req_sending...............: avg=185.2µs min=13.7µs med=27.3µs max=890.17µs p(90)=720.09µs p(95)=789.97µs
     http_req_tls_handshaking.......: avg=0s      min=0s     med=0s     max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=23s     min=18.93s med=22.77s max=29.21s   p(90)=26.22s   p(95)=26.7s   
     http_reqs......................: 300     4.038785/s
     iteration_duration.............: avg=23s     min=18.93s med=22.77s max=29.21s   p(90)=26.23s   p(95)=26.71s  
     iterations.....................: 300     4.038785/s
   ✓ no_errors......................: 0.00%   ✓ 0        ✗ 0    
     vus............................: 1       min=1      max=100
     vus_max........................: 100     min=100    max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ce0abdc6-71d9-4d43-2e1f-91ecc4838d00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/bc84b26f-cfba-4016-f6cc-0cb791308600/public" alt="HTTP Overview" />


  </details>