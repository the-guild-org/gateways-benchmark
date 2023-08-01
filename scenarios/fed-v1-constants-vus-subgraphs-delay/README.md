## Overview for: `scenarios/fed-v1-constants-vus-subgraphs-delay`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. All subgraphs have an intentional delay on replying, and this creates additional pressure on the gateway's memory. We are running a heavy load of concurrent VUs to measure response time and other stats, during stress. It measure things like memory usage, CPU usage, response times.


This scenario was running 100 VUs over 60s


### Comparison


| Gateway         | RPS ⬇️ |       Requests       |          Duration          |
| :-------------- | :----: | :------------------: | :------------------------: |
| mesh            |   66   | 4092 total, 0 failed |  avg: 1482ms, p95: 1946ms  |
| apollo-router   |   55   | 3400 total, 0 failed |  avg: 1792ms, p95: 1842ms  |
| mesh-supergraph |   55   | 3427 total, 0 failed |  avg: 1771ms, p95: 2568ms  |
| apollo-server   |   49   | 3062 total, 0 failed |  avg: 1992ms, p95: 2568ms  |
| wundergraph     |   23   | 1500 total, 0 failed |  avg: 4273ms, p95: 4405ms  |
| mercurius       |   4    | 300 total, 0 failed  | avg: 22977ms, p95: 26677ms |



<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 12276    ✗ 0    
     data_received..................: 21 MB   334 kB/s
     data_sent......................: 4.9 MB  79 kB/s
     http_req_blocked...............: avg=121.11µs min=1.6µs  med=2.5µs   max=14.82ms p(90)=3.7µs  p(95)=15.2µs
     http_req_connecting............: avg=114µs    min=0s     med=0s      max=10.71ms p(90)=0s     p(95)=0s    
     http_req_duration..............: avg=1.48s    min=1.31s  med=1.4s    max=2.81s   p(90)=1.65s  p(95)=1.94s 
       { expected_response:true }...: avg=1.48s    min=1.31s  med=1.4s    max=2.81s   p(90)=1.65s  p(95)=1.94s 
   ✓ http_req_failed................: 0.00%   ✓ 0        ✗ 4092 
     http_req_receiving.............: avg=59.62µs  min=22.4µs med=54.3µs  max=6.42ms  p(90)=74.3µs p(95)=79.9µs
     http_req_sending...............: avg=47.5µs   min=7.2µs  med=13.89µs max=10.96ms p(90)=28µs   p(95)=33.6µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s      p(90)=0s     p(95)=0s    
     http_req_waiting...............: avg=1.48s    min=1.31s  med=1.4s    max=2.81s   p(90)=1.65s  p(95)=1.94s 
     http_reqs......................: 4092    66.72157/s
     iteration_duration.............: avg=1.48s    min=1.31s  med=1.4s    max=2.81s   p(90)=1.65s  p(95)=1.94s 
     iterations.....................: 4092    66.72157/s
     vus............................: 28      min=28     max=100
     vus_max........................: 100     min=100    max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f60d1134-edf0-40e9-668d-34c473337400/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/11f39372-fb26-42ea-bb96-fa14492f8900/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 3399 / ✗ 1
     ✗ valid response structure
      ↳  99% — ✓ 3399 / ✗ 1

     checks.........................: 99.98% ✓ 10198     ✗ 2    
     data_received..................: 17 MB  276 kB/s
     data_sent......................: 4.0 MB 66 kB/s
     http_req_blocked...............: avg=157.91µs min=1.2µs  med=2.1µs   max=17.68ms p(90)=3µs    p(95)=6.6µs 
     http_req_connecting............: avg=150.96µs min=0s     med=0s      max=17.52ms p(90)=0s     p(95)=0s    
     http_req_duration..............: avg=1.79s    min=1.75s  med=1.76s   max=2.55s   p(90)=1.8s   p(95)=1.84s 
       { expected_response:true }...: avg=1.79s    min=1.75s  med=1.76s   max=2.55s   p(90)=1.8s   p(95)=1.84s 
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 3400 
     http_req_receiving.............: avg=50.58µs  min=16.8µs med=39.49µs max=3.83ms  p(90)=63.7µs p(95)=70.9µs
     http_req_sending...............: avg=154.15µs min=6.4µs  med=12.5µs  max=12.19ms p(90)=26.1µs p(95)=98.3µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s      p(90)=0s     p(95)=0s    
     http_req_waiting...............: avg=1.79s    min=1.75s  med=1.76s   max=2.55s   p(90)=1.8s   p(95)=1.84s 
     http_reqs......................: 3400   55.469883/s
     iteration_duration.............: avg=1.79s    min=1.75s  med=1.76s   max=2.56s   p(90)=1.81s  p(95)=1.84s 
     iterations.....................: 3400   55.469883/s
     vus............................: 58     min=58      max=100
     vus_max........................: 100    min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/906f49a3-cd9d-457c-403c-142aea139a00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/cd9e6ed1-0934-4bb8-23c8-39889589f500/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 3427

     checks.........................: 66.66% ✓ 6854      ✗ 3427 
     data_received..................: 17 MB  281 kB/s
     data_sent......................: 4.1 MB 66 kB/s
     http_req_blocked...............: avg=68.78µs min=1.7µs  med=3.1µs   max=7.72ms p(90)=5µs     p(95)=22.03µs 
     http_req_connecting............: avg=60.73µs min=0s     med=0s      max=7.68ms p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=1.77s   min=1.42s  med=1.65s   max=3.63s  p(90)=2.15s   p(95)=2.56s   
       { expected_response:true }...: avg=1.77s   min=1.42s  med=1.65s   max=3.63s  p(90)=2.15s   p(95)=2.56s   
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 3427 
     http_req_receiving.............: avg=85.22µs min=28µs   med=76.5µs  max=3.08ms p(90)=120.9µs p(95)=145.47µs
     http_req_sending...............: avg=53.66µs min=10.8µs med=19.59µs max=8.16ms p(90)=43.8µs  p(95)=65.76µs 
     http_req_tls_handshaking.......: avg=0s      min=0s     med=0s      max=0s     p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=1.77s   min=1.42s  med=1.65s   max=3.63s  p(90)=2.15s   p(95)=2.56s   
     http_reqs......................: 3427   55.794472/s
     iteration_duration.............: avg=1.77s   min=1.42s  med=1.65s   max=3.63s  p(90)=2.15s   p(95)=2.56s   
     iterations.....................: 3427   55.794472/s
     vus............................: 45     min=45      max=100
     vus_max........................: 100    min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/17899159-ca68-45df-6c3e-50311e891500/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/90215390-4ddc-4aee-5dc0-b7e019ed1600/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 9186     ✗ 0    
     data_received..................: 16 MB   255 kB/s
     data_sent......................: 3.6 MB  59 kB/s
     http_req_blocked...............: avg=181.33µs min=1.5µs med=2.6µs  max=12.64ms p(90)=4.4µs  p(95)=15.8µs 
     http_req_connecting............: avg=173.67µs min=0s    med=0s     max=12.61ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=1.99s    min=1.75s med=1.9s   max=3.82s   p(90)=2.18s  p(95)=2.56s  
       { expected_response:true }...: avg=1.99s    min=1.75s med=1.9s   max=3.82s   p(90)=2.18s  p(95)=2.56s  
   ✓ http_req_failed................: 0.00%   ✓ 0        ✗ 3062 
     http_req_receiving.............: avg=67.05µs  min=25µs  med=59.3µs max=2.68ms  p(90)=85.9µs p(95)=94.89µs
     http_req_sending...............: avg=89.68µs  min=8.6µs med=14.7µs max=8.84ms  p(90)=29.8µs p(95)=44.18µs
     http_req_tls_handshaking.......: avg=0s       min=0s    med=0s     max=0s      p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=1.99s    min=1.75s med=1.9s   max=3.82s   p(90)=2.18s  p(95)=2.56s  
     http_reqs......................: 3062    49.55567/s
     iteration_duration.............: avg=1.99s    min=1.75s med=1.9s   max=3.83s   p(90)=2.18s  p(95)=2.56s  
     iterations.....................: 3062    49.55567/s
     vus............................: 62      min=62     max=100
     vus_max........................: 100     min=100    max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/30832b37-3822-4d83-e86f-5f86c14c8700/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/94950727-4cbf-4e10-69cf-d4cb7dd72100/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 4500      ✗ 0    
     data_received..................: 7.5 MB  116 kB/s
     data_sent......................: 1.8 MB  28 kB/s
     http_req_blocked...............: avg=475.7µs  min=1.5µs  med=2.8µs   max=16.43ms  p(90)=4.7µs    p(95)=2.96ms  
     http_req_connecting............: avg=468.94µs min=0s     med=0s      max=16.39ms  p(90)=0s       p(95)=2.9ms   
     http_req_duration..............: avg=4.27s    min=4.13s  med=4.26s   max=4.49s    p(90)=4.33s    p(95)=4.4s    
       { expected_response:true }...: avg=4.27s    min=4.13s  med=4.26s   max=4.49s    p(90)=4.33s    p(95)=4.4s    
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 1500 
     http_req_receiving.............: avg=773.16µs min=24.2µs med=41.95µs max=109.68ms p(90)=159.95µs p(95)=443.53µs
     http_req_sending...............: avg=399.6µs  min=8.9µs  med=15.1µs  max=79.74ms  p(90)=133.24µs p(95)=983.28µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=4.27s    min=4.13s  med=4.26s   max=4.48s    p(90)=4.33s    p(95)=4.4s    
     http_reqs......................: 1500    23.379999/s
     iteration_duration.............: avg=4.27s    min=4.13s  med=4.26s   max=4.5s     p(90)=4.33s    p(95)=4.41s   
     iterations.....................: 1500    23.379999/s
     vus............................: 100     min=100     max=100
     vus_max........................: 100     min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/837f879c-a2f4-4621-e7e6-1467a51ef300/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/db861a20-2f3a-42d8-9bc8-279eb00f3300/public" alt="HTTP Overview" />


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
     http_req_blocked...............: avg=1.67ms   min=1.9µs  med=4.2µs  max=12.74ms p(90)=5.74ms   p(95)=7.61ms  
     http_req_connecting............: avg=1.64ms   min=0s     med=0s     max=12.68ms p(90)=5.72ms   p(95)=7.4ms   
     http_req_duration..............: avg=22.97s   min=19.04s med=22.73s max=28.97s  p(90)=26.35s   p(95)=26.67s  
       { expected_response:true }...: avg=22.97s   min=19.04s med=22.73s max=28.97s  p(90)=26.35s   p(95)=26.67s  
   ✓ http_req_failed................: 0.00%   ✓ 0        ✗ 300  
     http_req_receiving.............: avg=93.94µs  min=32.7µs med=88.4µs max=711.1µs p(90)=123.44µs p(95)=133.84µs
     http_req_sending...............: avg=165.85µs min=10.7µs med=26µs   max=3.26ms  p(90)=636.79µs p(95)=705.5µs 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=22.97s   min=19.04s med=22.73s max=28.97s  p(90)=26.35s   p(95)=26.67s  
     http_reqs......................: 300     4.042826/s
     iteration_duration.............: avg=22.97s   min=19.04s med=22.74s max=28.98s  p(90)=26.36s   p(95)=26.68s  
     iterations.....................: 300     4.042826/s
     vus............................: 2       min=2      max=100
     vus_max........................: 100     min=100    max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/bbf21cbe-a289-410b-c530-cc4afa650500/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/651b6b23-7f9a-4282-d1b0-8ee413e40300/public" alt="HTTP Overview" />


  </details>