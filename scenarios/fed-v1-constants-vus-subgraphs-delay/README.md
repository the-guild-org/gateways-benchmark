## Overview for: `scenarios/fed-v1-constants-vus-subgraphs-delay`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. All subgraphs have an intentional delay on replying, and this creates additional pressure on the gateway's memory. We are running a heavy load of concurrent VUs to measure response time and other stats, during stress. It measure things like memory usage, CPU usage, response times.


This scenario was running 400 VUs over 200s


### Comparison


| Gateway              | RPS ⬇️ |        Requests        |          Duration          |
| :------------------- | :----: | :--------------------: | :------------------------: |
| wundergraph          |  234   | 47332 total, 0 failed  |  avg: 1691ms, p95: 2022ms  |
| mesh                 |  108   | 22004 total, 0 failed  |  avg: 3665ms, p95: 4323ms  |
| apollo-router        |   99   | 20080 total, 0 failed  |  avg: 4000ms, p95: 6241ms  |
| mesh-supergraph      |   73   | 14999 total, 0 failed  |  avg: 5396ms, p95: 6970ms  |
| apollo-server        |   44   | 9578 total, 609 failed | avg: 8661ms, p95: 59948ms  |
| apollo-server-node16 |   37   |  7718 total, 0 failed  | avg: 10508ms, p95: 20138ms |
| mercurius            |   7    |  1608 total, 0 failed  | avg: 53270ms, p95: 56932ms |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 141996     ✗ 0    
     data_received..................: 236 MB  1.2 MB/s
     data_sent......................: 56 MB   279 kB/s
     http_req_blocked...............: avg=1.1ms    min=1.5µs    med=2.6µs  max=290.32ms p(90)=3.7µs    p(95)=5µs     
     http_req_connecting............: avg=1.07ms   min=0s       med=0s     max=267.81ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=1.69s    min=942.5ms  med=1.68s  max=2.87s    p(90)=1.92s    p(95)=2.02s   
       { expected_response:true }...: avg=1.69s    min=942.5ms  med=1.68s  max=2.87s    p(90)=1.92s    p(95)=2.02s   
   ✓ http_req_failed................: 0.00%   ✓ 0          ✗ 47332
     http_req_receiving.............: avg=955.82µs min=20µs     med=45.1µs max=430.72ms p(90)=303.69µs p(95)=553.34µs
     http_req_sending...............: avg=890.95µs min=9.29µs   med=15.2µs max=305.35ms p(90)=51.3µs   p(95)=168.54µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=1.68s    min=942.29ms med=1.68s  max=2.8s     p(90)=1.92s    p(95)=2.02s   
     http_reqs......................: 47332   234.793837/s
     iteration_duration.............: avg=1.69s    min=943.19ms med=1.68s  max=3.04s    p(90)=1.93s    p(95)=2.02s   
     iterations.....................: 47332   234.793837/s
     vus............................: 192     min=192      max=400
     vus_max........................: 400     min=400      max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/077f56cb-2436-4492-d530-5ab445f86800/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/120986f8-6d83-4638-136d-c45323648500/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 22002 / ✗ 2
     ✗ valid response structure
      ↳  99% — ✓ 22002 / ✗ 2

     checks.........................: 99.99% ✓ 66008      ✗ 4    
     data_received..................: 110 MB 543 kB/s
     data_sent......................: 26 MB  129 kB/s
     http_req_blocked...............: avg=954.88µs min=1.1µs  med=2µs     max=135.2ms p(90)=2.8µs  p(95)=3.4µs  
     http_req_connecting............: avg=939.83µs min=0s     med=0s      max=135.1ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=3.66s    min=2.49s  med=3.59s   max=7.63s   p(90)=4.11s  p(95)=4.32s  
       { expected_response:true }...: avg=3.66s    min=2.49s  med=3.59s   max=7.63s   p(90)=4.11s  p(95)=4.32s  
   ✓ http_req_failed................: 0.00%  ✓ 0          ✗ 22004
     http_req_receiving.............: avg=55.89µs  min=16.7µs med=38.29µs max=98.13ms p(90)=60.1µs p(95)=66.69µs
     http_req_sending...............: avg=262.24µs min=7.1µs  med=12.1µs  max=64.73ms p(90)=24.1µs p(95)=28.29µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s      p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=3.66s    min=2.49s  med=3.59s   max=7.61s   p(90)=4.11s  p(95)=4.32s  
     http_reqs......................: 22004  108.601534/s
     iteration_duration.............: avg=3.66s    min=2.49s  med=3.59s   max=7.66s   p(90)=4.11s  p(95)=4.32s  
     iterations.....................: 22004  108.601534/s
     vus............................: 170    min=170      max=400
     vus_max........................: 400    min=400      max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2ff57145-35d1-403f-3eed-f16c56a13b00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2aa29e49-9c68-4363-6b41-ba26b9f80000/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 20053 / ✗ 27
     ✗ valid response structure
      ↳  99% — ✓ 20053 / ✗ 27

     checks.........................: 99.91% ✓ 60186     ✗ 54   
     data_received..................: 100 MB 495 kB/s
     data_sent......................: 24 MB  118 kB/s
     http_req_blocked...............: avg=697.97µs min=1.2µs  med=2.4µs  max=66.07ms p(90)=3.9µs  p(95)=8.3µs 
     http_req_connecting............: avg=688.62µs min=0s     med=0s     max=56.74ms p(90)=0s     p(95)=0s    
     http_req_duration..............: avg=3.99s    min=1.49s  med=3.83s  max=8.94s   p(90)=5.41s  p(95)=6.24s 
       { expected_response:true }...: avg=3.99s    min=1.49s  med=3.83s  max=8.94s   p(90)=5.41s  p(95)=6.24s 
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 20080
     http_req_receiving.............: avg=88.19µs  min=21.8µs med=45.8µs max=67.07ms p(90)=76.2µs p(95)=86.1µs
     http_req_sending...............: avg=147.88µs min=6.9µs  med=13.2µs max=89.8ms  p(90)=27.8µs p(95)=50µs  
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s     p(95)=0s    
     http_req_waiting...............: avg=3.99s    min=1.49s  med=3.83s  max=8.94s   p(90)=5.41s  p(95)=6.24s 
     http_reqs......................: 20080  99.373071/s
     iteration_duration.............: avg=4s       min=1.49s  med=3.83s  max=8.94s   p(90)=5.41s  p(95)=6.24s 
     iterations.....................: 20080  99.373071/s
     vus............................: 19     min=19      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d1aa143e-0f56-4132-9dd5-3b242e639500/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b2781b53-7938-40ad-1b29-ed380749a100/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 14896 / ✗ 103
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 14999

     checks.........................: 66.43% ✓ 29895     ✗ 15102
     data_received..................: 76 MB  375 kB/s
     data_sent......................: 18 MB  88 kB/s
     http_req_blocked...............: avg=1.89ms   min=1.4µs  med=2.4µs  max=179.81ms p(90)=3.9µs   p(95)=18.2µs 
     http_req_connecting............: avg=1.86ms   min=0s     med=0s     max=179.76ms p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=5.39s    min=3.98s  med=5.19s  max=11.14s   p(90)=6s      p(95)=6.97s  
       { expected_response:true }...: avg=5.39s    min=3.98s  med=5.19s  max=11.14s   p(90)=6s      p(95)=6.97s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 14999
     http_req_receiving.............: avg=69.47µs  min=24.6µs med=57.1µs max=12.68ms  p(90)=95µs    p(95)=111.8µs
     http_req_sending...............: avg=310.36µs min=10.2µs med=14.6µs max=54.46ms  p(90)=35.82µs p(95)=54.51µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=5.39s    min=3.98s  med=5.19s  max=11.14s   p(90)=6s      p(95)=6.97s  
     http_reqs......................: 14999  73.913813/s
     iteration_duration.............: avg=5.39s    min=3.98s  med=5.19s  max=11.19s   p(90)=6s      p(95)=6.97s  
     iterations.....................: 14999  73.913813/s
     vus............................: 140    min=140     max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e30bcf83-2c1e-456f-0e30-d1ac197bb900/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7e0bea32-dd9b-4a70-f5f0-9271d664c900/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  93% — ✓ 8969 / ✗ 609
     ✗ no graphql errors
      ↳  88% — ✓ 8512 / ✗ 1066
     ✗ valid response structure
      ↳  94% — ✓ 8512 / ✗ 457

     checks.........................: 92.41% ✓ 25993     ✗ 2132 
     data_received..................: 46 MB  213 kB/s
     data_sent......................: 11 MB  53 kB/s
     http_req_blocked...............: avg=6.05ms  min=1.6µs med=3.3µs  max=310.38ms p(90)=327.15µs p(95)=19.03ms 
     http_req_connecting............: avg=5.87ms  min=0s    med=0s     max=310.25ms p(90)=220.74µs p(95)=14.85ms 
     http_req_duration..............: avg=8.66s   min=1.72s med=4.32s  max=1m0s     p(90)=6.6s     p(95)=59.94s  
       { expected_response:true }...: avg=5.17s   min=1.72s med=4.26s  max=59.43s   p(90)=5.25s    p(95)=5.84s   
   ✓ http_req_failed................: 6.35%  ✓ 609       ✗ 8969 
     http_req_receiving.............: avg=79.73µs min=0s    med=69.9µs max=32.98ms  p(90)=100.71µs p(95)=115.11µs
     http_req_sending...............: avg=1.39ms  min=9µs   med=18.3µs max=101.3ms  p(90)=63.41µs  p(95)=1.4ms   
     http_req_tls_handshaking.......: avg=0s      min=0s    med=0s     max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=8.65s   min=1.72s med=4.32s  max=1m0s     p(90)=6.6s     p(95)=59.93s  
     http_reqs......................: 9578   44.437164/s
     iteration_duration.............: avg=8.67s   min=1.72s med=4.33s  max=1m0s     p(90)=6.61s    p(95)=1m0s    
     iterations.....................: 9578   44.437164/s
     vus............................: 53     min=53      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6881874d-99dc-4164-64b8-57b9b544a100/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d88b93f5-672e-4db7-0a36-b52d76207500/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server-node16`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  49% — ✓ 3835 / ✗ 3883
     ✗ valid response structure
      ↳  49% — ✓ 3835 / ✗ 3883

     checks.........................: 66.45% ✓ 15388     ✗ 7766 
     data_received..................: 33 MB  161 kB/s
     data_sent......................: 9.2 MB 44 kB/s
     http_req_blocked...............: avg=4.23ms   min=1.7µs  med=2.9µs   max=188.31ms p(90)=6.73µs  p(95)=1.51ms  
     http_req_connecting............: avg=4.11ms   min=0s     med=0s      max=188.25ms p(90)=0s      p(95)=1.14ms  
     http_req_duration..............: avg=10.5s    min=1.52s  med=10.86s  max=26.65s   p(90)=17.72s  p(95)=20.13s  
       { expected_response:true }...: avg=10.5s    min=1.52s  med=10.86s  max=26.65s   p(90)=17.72s  p(95)=20.13s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 7718 
     http_req_receiving.............: avg=99.85µs  min=28.4µs med=73.59µs max=29.2ms   p(90)=123.2µs p(95)=152.9µs 
     http_req_sending...............: avg=420.81µs min=11.2µs med=19.5µs  max=106.24ms p(90)=58.6µs  p(95)=693.89µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=10.5s    min=1.52s  med=10.86s  max=26.65s   p(90)=17.72s  p(95)=20.13s  
     http_reqs......................: 7718   37.437749/s
     iteration_duration.............: avg=10.51s   min=1.52s  med=10.87s  max=26.65s   p(90)=17.78s  p(95)=20.16s  
     iterations.....................: 7718   37.437749/s
     vus............................: 42     min=42      max=400
     vus_max........................: 400    min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/aa60257b-3807-4b28-c954-e2f20ab99300/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f4907ca7-cbe0-4f2c-ae1f-aac422228600/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 4824     ✗ 0    
     data_received..................: 8.1 MB  35 kB/s
     data_sent......................: 1.9 MB  8.3 kB/s
     http_req_blocked...............: avg=14.56ms min=1.9µs  med=3.7µs  max=109.39ms p(90)=77.97ms  p(95)=82.02ms 
     http_req_connecting............: avg=14.24ms min=0s     med=0s     max=97.87ms  p(90)=77.71ms  p(95)=81.84ms 
     http_req_duration..............: avg=53.27s  min=29.11s med=56.62s max=57.08s   p(90)=56.88s   p(95)=56.93s  
       { expected_response:true }...: avg=53.27s  min=29.11s med=56.62s max=57.08s   p(90)=56.88s   p(95)=56.93s  
   ✓ http_req_failed................: 0.00%   ✓ 0        ✗ 1608 
     http_req_receiving.............: avg=96.34µs min=34.4µs med=84.7µs max=5.75ms   p(90)=126.94µs p(95)=144.74µs
     http_req_sending...............: avg=1.15ms  min=11.1µs med=25.6µs max=102.53ms p(90)=2.51ms   p(95)=10.02ms 
     http_req_tls_handshaking.......: avg=0s      min=0s     med=0s     max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=53.26s  min=29.11s med=56.62s max=57.08s   p(90)=56.88s   p(95)=56.93s  
     http_reqs......................: 1608    7.018347/s
     iteration_duration.............: avg=53.28s  min=29.11s med=56.63s max=57.12s   p(90)=56.89s   p(95)=56.93s  
     iterations.....................: 1608    7.018347/s
     vus............................: 6       min=6      max=400
     vus_max........................: 400     min=400    max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/448ed682-b931-4898-ba01-c902c19c7800/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8290037e-aa0b-4eaa-5915-3aa98eed6b00/public" alt="HTTP Overview" />


  </details>