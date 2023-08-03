## Overview for: `scenarios/fed-v1-constants-vus-subgraphs-delay`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. All subgraphs have an intentional delay on replying, and this creates additional pressure on the gateway's memory. We are running a heavy load of concurrent VUs to measure response time and other stats, during stress. It measure things like memory usage, CPU usage, response times.


This scenario was running 400 VUs over 200s


### Comparison


| Gateway              | RPS ⬇️ |        Requests        |          Duration          |
| :------------------- | :----: | :--------------------: | :------------------------: |
| wundergraph          |  236   | 47617 total, 0 failed  |  avg: 1684ms, p95: 1975ms  |
| mesh-supergraph      |   94   | 19080 total, 0 failed  |  avg: 4245ms, p95: 5101ms  |
| apollo-router        |   85   | 17376 total, 0 failed  |  avg: 4664ms, p95: 7210ms  |
| mesh                 |   66   | 13491 total, 0 failed  |  avg: 6011ms, p95: 7447ms  |
| apollo-server        |   42   | 9042 total, 438 failed | avg: 9104ms, p95: 47635ms  |
| apollo-server-node16 |   36   |  7512 total, 0 failed  | avg: 10747ms, p95: 18985ms |
| mercurius            |   7    |  1606 total, 0 failed  | avg: 53305ms, p95: 56921ms |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 142851     ✗ 0    
     data_received..................: 237 MB  1.2 MB/s
     data_sent......................: 57 MB   281 kB/s
     http_req_blocked...............: avg=334.09µs min=1.2µs  med=2.6µs  max=100.32ms p(90)=3.9µs    p(95)=4.7µs   
     http_req_connecting............: avg=323.88µs min=0s     med=0s     max=68.61ms  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=1.68s    min=1.09s  med=1.67s  max=2.78s    p(90)=1.89s    p(95)=1.97s   
       { expected_response:true }...: avg=1.68s    min=1.09s  med=1.67s  max=2.78s    p(90)=1.89s    p(95)=1.97s   
   ✓ http_req_failed................: 0.00%   ✓ 0          ✗ 47617
     http_req_receiving.............: avg=994.05µs min=19.4µs med=39.2µs max=288.42ms p(90)=292.32µs p(95)=527.43µs
     http_req_sending...............: avg=663.46µs min=7.7µs  med=14.4µs max=266.48ms p(90)=33.8µs   p(95)=147.11µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=1.68s    min=1.09s  med=1.67s  max=2.77s    p(90)=1.89s    p(95)=1.97s   
     http_reqs......................: 47617   236.575302/s
     iteration_duration.............: avg=1.68s    min=1.09s  med=1.67s  max=2.84s    p(90)=1.89s    p(95)=1.97s   
     iterations.....................: 47617   236.575302/s
     vus............................: 185     min=185      max=400
     vus_max........................: 400     min=400      max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4d4684f8-bfb4-462f-4b9d-1e8bed48cf00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ee8ed362-7180-49b1-a42b-5e3c68381100/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 19072 / ✗ 8
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 19080

     checks.........................: 66.65% ✓ 38152     ✗ 19088
     data_received..................: 96 MB  474 kB/s
     data_sent......................: 23 MB  112 kB/s
     http_req_blocked...............: avg=1.64ms   min=1.3µs  med=2.29µs max=197.11ms p(90)=3.8µs  p(95)=5.4µs 
     http_req_connecting............: avg=1.6ms    min=0s     med=0s     max=148.93ms p(90)=0s     p(95)=0s    
     http_req_duration..............: avg=4.24s    min=2.9s   med=4.15s  max=9.43s    p(90)=4.77s  p(95)=5.1s  
       { expected_response:true }...: avg=4.24s    min=2.9s   med=4.15s  max=9.43s    p(90)=4.77s  p(95)=5.1s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 19080
     http_req_receiving.............: avg=71.82µs  min=21.9µs med=56.6µs max=75.07ms  p(90)=78.5µs p(95)=87.6µs
     http_req_sending...............: avg=204.26µs min=8.3µs  med=13.5µs max=79.88ms  p(90)=26.7µs p(95)=32.4µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s     p(95)=0s    
     http_req_waiting...............: avg=4.24s    min=2.9s   med=4.15s  max=9.43s    p(90)=4.77s  p(95)=5.1s  
     http_reqs......................: 19080  94.005142/s
     iteration_duration.............: avg=4.24s    min=2.9s   med=4.15s  max=9.56s    p(90)=4.77s  p(95)=5.1s  
     iterations.....................: 19080  94.005142/s
     vus............................: 151    min=151     max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a4ec5bf0-bbb3-4d8f-8dc5-9a5d3576c600/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0da10878-9c6a-4720-b1e6-34f4c6fb3400/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 17334 / ✗ 42
     ✗ valid response structure
      ↳  99% — ✓ 17334 / ✗ 42

     checks.........................: 99.83% ✓ 52044     ✗ 84   
     data_received..................: 87 MB  424 kB/s
     data_sent......................: 21 MB  101 kB/s
     http_req_blocked...............: avg=2.22ms   min=1.3µs med=2.7µs  max=225.8ms  p(90)=4.2µs  p(95)=13µs    
     http_req_connecting............: avg=2.2ms    min=0s    med=0s     max=225.77ms p(90)=0s     p(95)=0s      
     http_req_duration..............: avg=4.66s    min=1.6s  med=4.43s  max=10.11s   p(90)=6.36s  p(95)=7.2s    
       { expected_response:true }...: avg=4.66s    min=1.6s  med=4.43s  max=10.11s   p(90)=6.36s  p(95)=7.2s    
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 17376
     http_req_receiving.............: avg=198.88µs min=21µs  med=52.9µs max=74.31ms  p(90)=83.8µs p(95)=95.3µs  
     http_req_sending...............: avg=1.74ms   min=7.8µs med=15.5µs max=191.27ms p(90)=33.5µs p(95)=103.33µs
     http_req_tls_handshaking.......: avg=0s       min=0s    med=0s     max=0s       p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=4.66s    min=1.6s  med=4.43s  max=10.06s   p(90)=6.36s  p(95)=7.2s    
     http_reqs......................: 17376  85.124241/s
     iteration_duration.............: avg=4.66s    min=1.6s  med=4.43s  max=10.2s    p(90)=6.37s  p(95)=7.22s   
     iterations.....................: 17376  85.124241/s
     vus............................: 42     min=42      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/db1ee9af-6baf-442d-787d-e2e13d023300/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d55818fb-de20-45a0-8e9f-e6191004b200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 13374 / ✗ 117
     ✗ valid response structure
      ↳  99% — ✓ 13374 / ✗ 117

     checks.........................: 99.42% ✓ 40239     ✗ 234  
     data_received..................: 68 MB  334 kB/s
     data_sent......................: 16 MB  78 kB/s
     http_req_blocked...............: avg=1.42ms   min=1.7µs  med=2.9µs  max=111.62ms p(90)=4.5µs  p(95)=22.7µs  
     http_req_connecting............: avg=1.4ms    min=0s     med=0s     max=111.58ms p(90)=0s     p(95)=0s      
     http_req_duration..............: avg=6.01s    min=3.02s  med=5.91s  max=11.54s   p(90)=6.82s  p(95)=7.44s   
       { expected_response:true }...: avg=6.01s    min=3.02s  med=5.91s  max=11.54s   p(90)=6.82s  p(95)=7.44s   
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 13491
     http_req_receiving.............: avg=251.25µs min=28.3µs med=60.1µs max=98.85ms  p(90)=96.3µs p(95)=120.55µs
     http_req_sending...............: avg=257.82µs min=10µs   med=15.9µs max=68.45ms  p(90)=40.5µs p(95)=90.75µs 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=6.01s    min=3.02s  med=5.91s  max=11.54s   p(90)=6.82s  p(95)=7.44s   
     http_reqs......................: 13491  66.076045/s
     iteration_duration.............: avg=6.01s    min=3.02s  med=5.91s  max=11.59s   p(90)=6.82s  p(95)=7.44s   
     iterations.....................: 13491  66.076045/s
     vus............................: 146    min=146     max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f67d5b07-c6d1-4ca1-1921-66c539dc5f00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5b864fa0-7bdb-464c-775d-6bcb989f3c00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  95% — ✓ 8604 / ✗ 438
     ✗ no graphql errors
      ↳  78% — ✓ 7107 / ✗ 1935
     ✗ valid response structure
      ↳  82% — ✓ 7107 / ✗ 1497

     checks.........................: 85.49% ✓ 22818     ✗ 3870 
     data_received..................: 43 MB  200 kB/s
     data_sent......................: 11 MB  50 kB/s
     http_req_blocked...............: avg=3.97ms   min=1.7µs  med=2.8µs  max=214.63ms p(90)=27.35µs  p(95)=14.67ms
     http_req_connecting............: avg=3.86ms   min=0s     med=0s     max=214.6ms  p(90)=0s       p(95)=13.67ms
     http_req_duration..............: avg=9.1s     min=1.14s  med=5.89s  max=1m0s     p(90)=8.04s    p(95)=47.63s 
       { expected_response:true }...: avg=6.51s    min=1.14s  med=5.81s  max=59.31s   p(90)=7.6s     p(95)=8.08s  
   ✓ http_req_failed................: 4.84%  ✓ 438       ✗ 8604 
     http_req_receiving.............: avg=78.42µs  min=0s     med=69µs   max=14.03ms  p(90)=107.39µs p(95)=125µs  
     http_req_sending...............: avg=810.48µs min=10.3µs med=18.8µs max=109.42ms p(90)=65.59µs  p(95)=1.28ms 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=9.1s     min=1.14s  med=5.89s  max=1m0s     p(90)=8.03s    p(95)=47.62s 
     http_reqs......................: 9042   42.285176/s
     iteration_duration.............: avg=9.11s    min=1.14s  med=5.89s  max=1m0s     p(90)=8.07s    p(95)=47.73s 
     iterations.....................: 9042   42.285176/s
     vus............................: 15     min=15      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/31bd2039-5f98-4416-8984-90ceb47bd900/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/46cc925b-747d-4e56-3ddc-993fb2769800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server-node16`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  57% — ✓ 4302 / ✗ 3210
     ✗ valid response structure
      ↳  57% — ✓ 4302 / ✗ 3210

     checks.........................: 71.51% ✓ 16116     ✗ 6420 
     data_received..................: 34 MB  165 kB/s
     data_sent......................: 8.9 MB 44 kB/s
     http_req_blocked...............: avg=4.62ms   min=1.5µs  med=3.1µs  max=159.06ms p(90)=6.5µs   p(95)=33.55ms 
     http_req_connecting............: avg=4.53ms   min=0s     med=0s     max=159.02ms p(90)=0s      p(95)=33.03ms 
     http_req_duration..............: avg=10.74s   min=1.21s  med=11.23s max=25.68s   p(90)=16.79s  p(95)=18.98s  
       { expected_response:true }...: avg=10.74s   min=1.21s  med=11.23s max=25.68s   p(90)=16.79s  p(95)=18.98s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 7512 
     http_req_receiving.............: avg=95.89µs  min=31.1µs med=76.8µs max=16.75ms  p(90)=127.9µs p(95)=152.87µs
     http_req_sending...............: avg=970.82µs min=9.29µs med=20.7µs max=72.08ms  p(90)=56.4µs  p(95)=774.26µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=10.74s   min=1.21s  med=11.22s max=25.68s   p(90)=16.79s  p(95)=18.97s  
     http_reqs......................: 7512   36.945555/s
     iteration_duration.............: avg=10.75s   min=1.21s  med=11.23s max=25.68s   p(90)=16.79s  p(95)=19.03s  
     iterations.....................: 7512   36.945555/s
     vus............................: 96     min=96      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a80b716d-eda0-449c-f010-02dbfcebc000/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8316ccd9-56dd-4010-da18-dbf21b57ec00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 4818     ✗ 0    
     data_received..................: 8.1 MB  35 kB/s
     data_sent......................: 1.9 MB  8.3 kB/s
     http_req_blocked...............: avg=19.32ms  min=2.2µs  med=4.1µs  max=168.37ms p(90)=92.03ms  p(95)=112.72ms
     http_req_connecting............: avg=19.05ms  min=0s     med=0s     max=168.3ms  p(90)=91.08ms  p(95)=112.12ms
     http_req_duration..............: avg=53.3s    min=28.78s med=56.58s max=57.1s    p(90)=56.87s   p(95)=56.92s  
       { expected_response:true }...: avg=53.3s    min=28.78s med=56.58s max=57.1s    p(90)=56.87s   p(95)=56.92s  
   ✓ http_req_failed................: 0.00%   ✓ 0        ✗ 1606 
     http_req_receiving.............: avg=117.43µs min=31.8µs med=107µs  max=753.2µs  p(90)=160.85µs p(95)=189.15µs
     http_req_sending...............: avg=2.25ms   min=12.3µs med=31.5µs max=63.74ms  p(90)=6.3ms    p(95)=10.32ms 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=53.3s    min=28.78s med=56.58s max=57.1s    p(90)=56.87s   p(95)=56.92s  
     http_reqs......................: 1606    7.019219/s
     iteration_duration.............: avg=53.32s   min=28.78s med=56.58s max=57.11s   p(90)=56.88s   p(95)=56.92s  
     iterations.....................: 1606    7.019219/s
     vus............................: 3       min=3      max=400
     vus_max........................: 400     min=400    max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/fdf6d2ef-c9c4-46c4-3b8a-95d4c01f2700/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/844be634-f51b-485b-ecbd-4e82dd1fa900/public" alt="HTTP Overview" />


  </details>