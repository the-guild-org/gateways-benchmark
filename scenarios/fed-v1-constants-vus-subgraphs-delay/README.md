## Overview for: `scenarios/fed-v1-constants-vus-subgraphs-delay`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. All subgraphs have an intentional delay on replying, and this creates additional pressure on the gateway's memory. We are running a heavy load of concurrent VUs to measure response time and other stats, during stress. It measure things like memory usage, CPU usage, response times.


This scenario was running 100 VUs over 60s


### Comparison


| Gateway       | RPS ⬇️ |       Requests       |          Duration          |
| :------------ | :----: | :------------------: | :------------------------: |
| mesh          |   65   | 3985 total, 0 failed |  avg: 1520ms, p95: 2051ms  |
| apollo-router |   52   | 3255 total, 0 failed |  avg: 1870ms, p95: 2107ms  |
| apollo-server |   51   | 3180 total, 0 failed |  avg: 1922ms, p95: 2395ms  |
| wundergraph   |   21   | 1402 total, 0 failed |  avg: 4282ms, p95: 4433ms  |
| mercurius     |   4    | 300 total, 0 failed  | avg: 22945ms, p95: 26559ms |



<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 11955     ✗ 0    
     data_received..................: 20 MB   325 kB/s
     data_sent......................: 4.7 MB  77 kB/s
   ✓ expected_result................: 0.00%   ✓ 0         ✗ 0    
     http_req_blocked...............: avg=475.52µs min=1.5µs  med=2.8µs  max=69.08ms p(90)=4.4µs   p(95)=11.5µs 
     http_req_connecting............: avg=438.13µs min=0s     med=0s     max=68.76ms p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=1.52s    min=1.31s  med=1.44s  max=2.98s   p(90)=1.77s   p(95)=2.05s  
       { expected_response:true }...: avg=1.52s    min=1.31s  med=1.44s  max=2.98s   p(90)=1.77s   p(95)=2.05s  
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 3985 
     http_req_receiving.............: avg=73.64µs  min=25.2µs med=67.5µs max=16.18ms p(90)=89.96µs p(95)=97.5µs 
     http_req_sending...............: avg=69.02µs  min=9.7µs  med=17.2µs max=41.5ms  p(90)=31.46µs p(95)=36.96µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=1.51s    min=1.31s  med=1.44s  max=2.98s   p(90)=1.77s   p(95)=2.05s  
     http_reqs......................: 3985    65.002664/s
     iteration_duration.............: avg=1.52s    min=1.31s  med=1.44s  max=3.05s   p(90)=1.77s   p(95)=2.05s  
     iterations.....................: 3985    65.002664/s
   ✓ no_errors......................: 0.00%   ✓ 0         ✗ 0    
     vus............................: 35      min=35      max=100
     vus_max........................: 100     min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b8d7c365-2ef7-4850-af23-0f1669169100/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ce349a0a-cbe1-46ac-975b-da276cb88900/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 9765      ✗ 0    
     data_received..................: 16 MB   262 kB/s
     data_sent......................: 3.9 MB  63 kB/s
   ✓ expected_result................: 0.00%   ✓ 0         ✗ 0    
     http_req_blocked...............: avg=267.64µs min=1.5µs  med=3.1µs  max=21.02ms p(90)=4.8µs    p(95)=19.7µs  
     http_req_connecting............: avg=260.62µs min=0s     med=0s     max=20.76ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=1.87s    min=1.75s  med=1.81s  max=3.11s   p(90)=1.97s    p(95)=2.1s    
       { expected_response:true }...: avg=1.87s    min=1.75s  med=1.81s  max=3.11s   p(90)=1.97s    p(95)=2.1s    
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 3255 
     http_req_receiving.............: avg=85.24µs  min=28.2µs med=73.7µs max=15.55ms p(90)=114.15µs p(95)=133.58µs
     http_req_sending...............: avg=52.39µs  min=8.8µs  med=20.9µs max=12.29ms p(90)=45.55µs  p(95)=88.42µs 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=1.87s    min=1.75s  med=1.81s  max=3.11s   p(90)=1.97s    p(95)=2.1s    
     http_reqs......................: 3255    52.686896/s
     iteration_duration.............: avg=1.87s    min=1.75s  med=1.81s  max=3.13s   p(90)=1.97s    p(95)=2.1s    
     iterations.....................: 3255    52.686896/s
   ✓ no_errors......................: 0.00%   ✓ 0         ✗ 0    
     vus............................: 55      min=55      max=100
     vus_max........................: 100     min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8564a8a2-1af6-465d-3217-a36b2229be00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/aa6bb1f8-eb64-41dd-1649-c4733b5cb900/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 9540      ✗ 0    
     data_received..................: 16 MB   265 kB/s
     data_sent......................: 3.8 MB  61 kB/s
   ✓ expected_result................: 0.00%   ✓ 0         ✗ 0    
     http_req_blocked...............: avg=278.25µs min=1.2µs  med=2.2µs  max=25.23ms p(90)=3.2µs   p(95)=11.6µs
     http_req_connecting............: avg=262.69µs min=0s     med=0s     max=19.84ms p(90)=0s      p(95)=0s    
     http_req_duration..............: avg=1.92s    min=1.75s  med=1.82s  max=3.77s   p(90)=2.03s   p(95)=2.39s 
       { expected_response:true }...: avg=1.92s    min=1.75s  med=1.82s  max=3.77s   p(90)=2.03s   p(95)=2.39s 
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 3180 
     http_req_receiving.............: avg=57.62µs  min=21.8µs med=54.4µs max=2.7ms   p(90)=76.59µs p(95)=83.1µs
     http_req_sending...............: avg=45.72µs  min=7.1µs  med=14µs   max=4.39ms  p(90)=27.79µs p(95)=32.6µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s      p(95)=0s    
     http_req_waiting...............: avg=1.92s    min=1.75s  med=1.82s  max=3.77s   p(90)=2.03s   p(95)=2.39s 
     http_reqs......................: 3180    51.452108/s
     iteration_duration.............: avg=1.92s    min=1.75s  med=1.82s  max=3.78s   p(90)=2.03s   p(95)=2.39s 
     iterations.....................: 3180    51.452108/s
   ✓ no_errors......................: 0.00%   ✓ 0         ✗ 0    
     vus............................: 75      min=75      max=100
     vus_max........................: 100     min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5cdfd3aa-d6d2-471a-0b76-4e9738e24800/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e57f9c65-8ed6-4fda-8d11-e53222d46900/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 4206      ✗ 0    
     data_received..................: 7.0 MB  109 kB/s
     data_sent......................: 1.7 MB  26 kB/s
   ✓ expected_result................: 0.00%   ✓ 0         ✗ 0    
     http_req_blocked...............: avg=1.06ms   min=1.4µs  med=2.5µs  max=48.16ms p(90)=8.29µs   p(95)=8.1ms   
     http_req_connecting............: avg=1.04ms   min=0s     med=0s     max=47.88ms p(90)=0s       p(95)=8.06ms  
     http_req_duration..............: avg=4.28s    min=4.16s  med=4.27s  max=4.52s   p(90)=4.33s    p(95)=4.43s   
       { expected_response:true }...: avg=4.28s    min=4.16s  med=4.27s  max=4.52s   p(90)=4.33s    p(95)=4.43s   
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 1402 
     http_req_receiving.............: avg=888.11µs min=24.5µs med=46.9µs max=55.51ms p(90)=311.74µs p(95)=1.26ms  
     http_req_sending...............: avg=357.63µs min=10µs   med=15.1µs max=90.48ms p(90)=133.53µs p(95)=488.96µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=4.28s    min=4.16s  med=4.26s  max=4.51s   p(90)=4.32s    p(95)=4.43s   
     http_reqs......................: 1402    21.827932/s
     iteration_duration.............: avg=4.28s    min=4.16s  med=4.27s  max=4.53s   p(90)=4.33s    p(95)=4.45s   
     iterations.....................: 1402    21.827932/s
   ✓ no_errors......................: 0.00%   ✓ 0         ✗ 0    
     vus............................: 2       min=2       max=100
     vus_max........................: 100     min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5419278f-3b17-46a3-d12d-5991920a0400/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9aab025a-00e1-494b-4872-29ab0301b700/public" alt="HTTP Overview" />


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
     http_req_blocked...............: avg=2.41ms   min=1.6µs  med=3µs     max=21.01ms p(90)=10.59ms  p(95)=12.78ms 
     http_req_connecting............: avg=2.32ms   min=0s     med=0s      max=20.98ms p(90)=10.26ms  p(95)=12.45ms 
     http_req_duration..............: avg=22.94s   min=19.12s med=22.67s  max=28.88s  p(90)=26.07s   p(95)=26.55s  
       { expected_response:true }...: avg=22.94s   min=19.12s med=22.67s  max=28.88s  p(90)=26.07s   p(95)=26.55s  
   ✓ http_req_failed................: 0.00%   ✓ 0        ✗ 300  
     http_req_receiving.............: avg=86.2µs   min=22.5µs med=72.15µs max=3.34ms  p(90)=98.68µs  p(95)=110.71µs
     http_req_sending...............: avg=138.34µs min=8.69µs med=22.3µs  max=2.08ms  p(90)=459.85µs p(95)=466.46µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=22.94s   min=19.12s med=22.67s  max=28.88s  p(90)=26.07s   p(95)=26.55s  
     http_reqs......................: 300     4.048349/s
     iteration_duration.............: avg=22.94s   min=19.12s med=22.68s  max=28.88s  p(90)=26.07s   p(95)=26.55s  
     iterations.....................: 300     4.048349/s
   ✓ no_errors......................: 0.00%   ✓ 0        ✗ 0    
     vus............................: 2       min=2      max=100
     vus_max........................: 100     min=100    max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/de68d202-bf12-4039-e2ba-cf95291bce00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/84b56b60-2203-4a5b-e1b5-85b070522200/public" alt="HTTP Overview" />


  </details>