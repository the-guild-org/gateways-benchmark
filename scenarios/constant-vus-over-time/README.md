## Overview for scenario: `constant-vus-over-time`


This scenario runs 4 servics and a GraphQL gateway with Federation spec, and runs a heavy query. It's being executed with a constant amount of VUs over a fixed amount of time. It measure things like memory usage, CPU usage, average RPS. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was running 100 VUs over 60s


### Comparison


| Gateway                             | RPS ⬇️ |       Requests        |         Duration         |
| :---------------------------------- | :----: | :-------------------: | :----------------------: |
| wundergraph                         |  837   | 50328 total, 0 failed |  avg: 119ms, p95: 193ms  |
| apollo-router                       |  104   | 6327 total, 0 failed  | avg: 952ms, p95: 1703ms  |
| stitching-federation-with-yoga-bun  |   86   | 5238 total, 0 failed  | avg: 1150ms, p95: 1928ms |
| mesh                                |   81   | 4957 total, 0 failed  | avg: 1216ms, p95: 1770ms |
| mercurius                           |   63   | 3851 total, 0 failed  | avg: 1562ms, p95: 2062ms |
| apollo-gateway-with-yoga            |   50   | 3094 total, 0 failed  | avg: 1959ms, p95: 2573ms |
| stitching-federation-with-yoga-deno |   44   | 2700 total, 0 failed  | avg: 2260ms, p95: 3030ms |
| apollo-server                       |   40   | 2510 total, 0 failed  | avg: 2423ms, p95: 2759ms |
| stitching-federation-with-yoga      |   38   | 2329 total, 0 failed  | avg: 2612ms, p95: 3703ms |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 150984     ✗ 0    
     data_received..................: 245 MB  4.1 MB/s
     data_sent......................: 60 MB   995 kB/s
   ✓ expected_result................: 0.00%   ✓ 0          ✗ 0    
     http_req_blocked...............: avg=28.21µs  min=1µs     med=2.1µs    max=30.18ms  p(90)=3.1µs    p(95)=3.7µs   
     http_req_connecting............: avg=24.13µs  min=0s      med=0s       max=28.09ms  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=118.6ms  min=12.45ms med=112.11ms max=388.11ms p(90)=171.59ms p(95)=192.58ms
       { expected_response:true }...: avg=118.6ms  min=12.45ms med=112.11ms max=388.11ms p(90)=171.59ms p(95)=192.58ms
   ✓ http_req_failed................: 0.00%   ✓ 0          ✗ 50328
     http_req_receiving.............: avg=479.94µs min=17.5µs  med=41.1µs   max=130.32ms p(90)=204.53µs p(95)=524.08µs
     http_req_sending...............: avg=110.57µs min=6.5µs   med=12.2µs   max=100.39ms p(90)=23.5µs   p(95)=62.4µs  
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=118.01ms min=12.34ms med=111.7ms  max=308.18ms p(90)=170.76ms p(95)=191.81ms
     http_reqs......................: 50328   837.980338/s
     iteration_duration.............: avg=119.23ms min=12.79ms med=112.68ms max=388.38ms p(90)=172.42ms p(95)=193.61ms
     iterations.....................: 50328   837.980338/s
   ✓ no_errors......................: 0.00%   ✓ 0          ✗ 0    
     vus............................: 100     min=100      max=100
     vus_max........................: 100     min=100      max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/57b751d1-5253-4123-70ec-f975a6733700/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c0da521c-361e-48f5-38e6-00a7a8ce8a00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 18981      ✗ 0    
     data_received..................: 32 MB   522 kB/s
     data_sent......................: 7.5 MB  124 kB/s
   ✓ expected_result................: 0.00%   ✓ 0          ✗ 0    
     http_req_blocked...............: avg=228.26µs min=1.2µs   med=2.4µs    max=29.43ms p(90)=3.4µs   p(95)=4.2µs 
     http_req_connecting............: avg=216.01µs min=0s      med=0s       max=28.83ms p(90)=0s      p(95)=0s    
     http_req_duration..............: avg=951.79ms min=92.23ms med=874.37ms max=4.56s   p(90)=1.47s   p(95)=1.7s  
       { expected_response:true }...: avg=951.79ms min=92.23ms med=874.37ms max=4.56s   p(90)=1.47s   p(95)=1.7s  
   ✓ http_req_failed................: 0.00%   ✓ 0          ✗ 6327 
     http_req_receiving.............: avg=56.3µs   min=19.8µs  med=52.9µs   max=2.98ms  p(90)=75.89µs p(95)=81.7µs
     http_req_sending...............: avg=37.61µs  min=7.2µs   med=14.4µs   max=39.22ms p(90)=27.6µs  p(95)=32.2µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s      p(90)=0s      p(95)=0s    
     http_req_waiting...............: avg=951.69ms min=92.14ms med=874.32ms max=4.56s   p(90)=1.47s   p(95)=1.7s  
     http_reqs......................: 6327    104.705626/s
     iteration_duration.............: avg=952.35ms min=92.61ms med=874.66ms max=4.56s   p(90)=1.47s   p(95)=1.7s  
     iterations.....................: 6327    104.705626/s
   ✓ no_errors......................: 0.00%   ✓ 0          ✗ 0    
     vus............................: 100     min=100      max=100
     vus_max........................: 100     min=100      max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0ea927f0-c104-431e-546b-8a5fa5bc4900/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c7276f5f-22dc-42b4-31df-f647ad1ccb00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 15714     ✗ 0    
     data_received..................: 26 MB   432 kB/s
     data_sent......................: 6.2 MB  103 kB/s
   ✓ expected_result................: 0.00%   ✓ 0         ✗ 0    
     http_req_blocked...............: avg=176.19µs min=900ns    med=2µs    max=29.25ms p(90)=3µs     p(95)=4.1µs   
     http_req_connecting............: avg=164.79µs min=0s       med=0s     max=29.21ms p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=1.14s    min=264.78ms med=1.07s  max=2.77s   p(90)=1.64s   p(95)=1.92s   
       { expected_response:true }...: avg=1.14s    min=264.78ms med=1.07s  max=2.77s   p(90)=1.64s   p(95)=1.92s   
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 5238 
     http_req_receiving.............: avg=91.58µs  min=13.8µs   med=30.7µs max=33.72ms p(90)=66.23µs p(95)=122.74µs
     http_req_sending...............: avg=96.43µs  min=6.4µs    med=10.9µs max=35.69ms p(90)=26.23µs p(95)=141.3µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=1.14s    min=264.44ms med=1.07s  max=2.77s   p(90)=1.64s   p(95)=1.92s   
     http_reqs......................: 5238    86.620317/s
     iteration_duration.............: avg=1.15s    min=266.27ms med=1.07s  max=2.77s   p(90)=1.64s   p(95)=1.93s   
     iterations.....................: 5238    86.620317/s
   ✓ no_errors......................: 0.00%   ✓ 0         ✗ 0    
     vus............................: 100     min=100     max=100
     vus_max........................: 100     min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/140538db-56d2-46a5-b53f-41be6f5bd100/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/86475cee-5f9f-4f1b-9325-b78b5d34a300/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 14871     ✗ 0    
     data_received..................: 25 MB   409 kB/s
     data_sent......................: 5.9 MB  97 kB/s
   ✓ expected_result................: 0.00%   ✓ 0         ✗ 0    
     http_req_blocked...............: avg=432.87µs min=1.3µs    med=2.4µs  max=43.03ms p(90)=3.6µs  p(95)=5µs   
     http_req_connecting............: avg=420.12µs min=0s       med=0s     max=35.01ms p(90)=0s     p(95)=0s    
     http_req_duration..............: avg=1.21s    min=501.99ms med=1.15s  max=2.8s    p(90)=1.55s  p(95)=1.77s 
       { expected_response:true }...: avg=1.21s    min=501.99ms med=1.15s  max=2.8s    p(90)=1.55s  p(95)=1.77s 
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 4957 
     http_req_receiving.............: avg=62.2µs   min=20.5µs   med=58.4µs max=5.45ms  p(90)=80.1µs p(95)=87.8µs
     http_req_sending...............: avg=62.83µs  min=7.9µs    med=14.6µs max=11.29ms p(90)=26.8µs p(95)=32.8µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s     p(95)=0s    
     http_req_waiting...............: avg=1.21s    min=501.92ms med=1.15s  max=2.8s    p(90)=1.55s  p(95)=1.77s 
     http_reqs......................: 4957    81.867957/s
     iteration_duration.............: avg=1.21s    min=502.27ms med=1.15s  max=2.82s   p(90)=1.55s  p(95)=1.77s 
     iterations.....................: 4957    81.867957/s
   ✓ no_errors......................: 0.00%   ✓ 0         ✗ 0    
     vus............................: 100     min=100     max=100
     vus_max........................: 100     min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/953a390c-7e97-4600-af32-5ede229c5a00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/fb173f56-76b8-4c96-d999-efac963e6f00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 11553     ✗ 0    
     data_received..................: 19 MB   321 kB/s
     data_sent......................: 4.6 MB  76 kB/s
   ✓ expected_result................: 0.00%   ✓ 0         ✗ 0    
     http_req_blocked...............: avg=200.38µs min=1.6µs    med=2.8µs  max=21.9ms  p(90)=4.1µs  p(95)=13.15µs 
     http_req_connecting............: avg=195.86µs min=0s       med=0s     max=21.87ms p(90)=0s     p(95)=0s      
     http_req_duration..............: avg=1.56s    min=353.85ms med=1.49s  max=5s      p(90)=1.77s  p(95)=2.06s   
       { expected_response:true }...: avg=1.56s    min=353.85ms med=1.49s  max=5s      p(90)=1.77s  p(95)=2.06s   
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 3851 
     http_req_receiving.............: avg=68.97µs  min=23.4µs   med=60.6µs max=5.34ms  p(90)=87µs   p(95)=102.15µs
     http_req_sending...............: avg=31.18µs  min=8.6µs    med=16.1µs max=4.56ms  p(90)=32.2µs p(95)=40.1µs  
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=1.56s    min=353.79ms med=1.49s  max=5s      p(90)=1.77s  p(95)=2.06s   
     http_reqs......................: 3851    63.806355/s
     iteration_duration.............: avg=1.56s    min=354.21ms med=1.49s  max=5s      p(90)=1.77s  p(95)=2.06s   
     iterations.....................: 3851    63.806355/s
   ✓ no_errors......................: 0.00%   ✓ 0         ✗ 0    
     vus............................: 100     min=100     max=100
     vus_max........................: 100     min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b85e4493-a28c-4d45-f85e-bdde54830500/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0f18e668-0ad2-4987-97f8-c6c5e35e2500/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  98% — ✓ 3060 / ✗ 34
     ✗ expected_result
      ↳  99% — ✓ 3090 / ✗ 4

     checks.........................: 99.59% ✓ 9244      ✗ 38   
     data_received..................: 15 MB  253 kB/s
     data_sent......................: 3.7 MB 60 kB/s
   ✓ expected_result................: 0.00%  ✓ 0         ✗ 0    
     http_req_blocked...............: avg=1.46ms   min=1.5µs  med=2.6µs  max=85.62ms p(90)=4.27µs  p(95)=17.77µs
     http_req_connecting............: avg=1.42ms   min=0s     med=0s     max=68.09ms p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=1.95s    min=1.09s  med=1.83s  max=4.2s    p(90)=2.34s   p(95)=2.57s  
       { expected_response:true }...: avg=1.95s    min=1.09s  med=1.83s  max=4.2s    p(90)=2.34s   p(95)=2.57s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 3094 
     http_req_receiving.............: avg=65.81µs  min=26.3µs med=59.5µs max=3.07ms  p(90)=87.07µs p(95)=96.4µs 
     http_req_sending...............: avg=356.74µs min=9.9µs  med=16.7µs max=50.93ms p(90)=33.7µs  p(95)=44.14µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=1.95s    min=1.09s  med=1.83s  max=4.18s   p(90)=2.34s   p(95)=2.57s  
     http_reqs......................: 3094   50.639196/s
     iteration_duration.............: avg=1.96s    min=1.09s  med=1.83s  max=4.24s   p(90)=2.34s   p(95)=2.57s  
     iterations.....................: 3094   50.639196/s
   ✓ no_errors......................: 0.00%  ✓ 0         ✗ 0    
     vus............................: 32     min=32      max=100
     vus_max........................: 100    min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/cc0edcf7-8bf3-4879-a619-f52b4880d500/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9d429150-3d96-4a8e-f89d-5ca5cfb4d300/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-deno`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 2699 / ✗ 1
     ✓ expected_result

     checks.........................: 99.98% ✓ 8099      ✗ 1    
     data_received..................: 14 MB  221 kB/s
     data_sent......................: 3.2 MB 52 kB/s
   ✓ expected_result................: 0.00%  ✓ 0         ✗ 0    
     http_req_blocked...............: avg=441µs    min=1µs    med=2.4µs  max=22.72ms p(90)=4µs      p(95)=20.08µs 
     http_req_connecting............: avg=435.58µs min=0s     med=0s     max=22.52ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=2.25s    min=1.28s  med=2.16s  max=3.72s   p(90)=2.74s    p(95)=3.03s   
       { expected_response:true }...: avg=2.25s    min=1.28s  med=2.16s  max=3.72s   p(90)=2.74s    p(95)=3.03s   
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 2700 
     http_req_receiving.............: avg=103.56µs min=19.5µs med=38.8µs max=9.06ms  p(90)=105.21µs p(95)=156.94µs
     http_req_sending...............: avg=71.84µs  min=8.8µs  med=14.5µs max=8.78ms  p(90)=40µs     p(95)=165.43µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=2.25s    min=1.28s  med=2.16s  max=3.71s   p(90)=2.74s    p(95)=3.03s   
     http_reqs......................: 2700   44.115838/s
     iteration_duration.............: avg=2.26s    min=1.28s  med=2.16s  max=3.72s   p(90)=2.74s    p(95)=3.03s   
     iterations.....................: 2700   44.115838/s
   ✓ no_errors......................: 0.00%  ✓ 0         ✗ 0    
     vus............................: 81     min=81      max=100
     vus_max........................: 100    min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/556328a8-e4bb-4185-7325-15f4848ffa00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7df13070-ce16-4a55-e167-4b28d124ac00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 2501 / ✗ 9
     ✓ expected_result

     checks.........................: 99.88% ✓ 7521      ✗ 9    
     data_received..................: 13 MB  211 kB/s
     data_sent......................: 3.0 MB 49 kB/s
   ✓ expected_result................: 0.00%  ✓ 0         ✗ 0    
     http_req_blocked...............: avg=139.73µs min=2µs      med=3.3µs  max=11.32ms p(90)=5.1µs   p(95)=21.8µs  
     http_req_connecting............: avg=130.03µs min=0s       med=0s     max=8.01ms  p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=2.42s    min=862.46ms med=2.14s  max=27.44s  p(90)=2.48s   p(95)=2.75s   
       { expected_response:true }...: avg=2.42s    min=862.46ms med=2.14s  max=27.44s  p(90)=2.48s   p(95)=2.75s   
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 2510 
     http_req_receiving.............: avg=98.41µs  min=30.3µs   med=81µs   max=20.43ms p(90)=128.6µs p(95)=154.15µs
     http_req_sending...............: avg=49.12µs  min=12.6µs   med=21.8µs max=3.83ms  p(90)=46.2µs  p(95)=77.65µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=2.42s    min=861.72ms med=2.14s  max=27.44s  p(90)=2.48s   p(95)=2.75s   
     http_reqs......................: 2510   40.906892/s
     iteration_duration.............: avg=2.42s    min=866.38ms med=2.14s  max=27.45s  p(90)=2.48s   p(95)=2.75s   
     iterations.....................: 2510   40.906892/s
   ✓ no_errors......................: 0.00%  ✓ 0         ✗ 0    
     vus............................: 47     min=47      max=100
     vus_max........................: 100    min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d552e11d-55da-4acd-c828-7dc82a414e00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/08662cd5-b8b1-4627-d4db-b0863787f100/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  98% — ✓ 2298 / ✗ 31
     ✗ expected_result
      ↳  99% — ✓ 2313 / ✗ 16

     checks.........................: 99.32% ✓ 6940      ✗ 47   
     data_received..................: 12 MB  190 kB/s
     data_sent......................: 2.8 MB 45 kB/s
   ✓ expected_result................: 0.00%  ✓ 0         ✗ 0    
     http_req_blocked...............: avg=555.22µs min=1.5µs  med=2.6µs  max=54.06ms p(90)=5.92µs   p(95)=38.29µs 
     http_req_connecting............: avg=493.88µs min=0s     med=0s     max=23.49ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=2.61s    min=1.4s   med=2.48s  max=5.15s   p(90)=3.02s    p(95)=3.7s    
       { expected_response:true }...: avg=2.61s    min=1.4s   med=2.48s  max=5.15s   p(90)=3.02s    p(95)=3.7s    
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 2329 
     http_req_receiving.............: avg=72.18µs  min=25.9µs med=61.9µs max=2.47ms  p(90)=110.72µs p(95)=131.62µs
     http_req_sending...............: avg=94.26µs  min=11.3µs med=17.7µs max=39.94ms p(90)=47.6µs   p(95)=147.66µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=2.61s    min=1.4s   med=2.48s  max=5.15s   p(90)=3.02s    p(95)=3.69s   
     http_reqs......................: 2329   38.021613/s
     iteration_duration.............: avg=2.61s    min=1.4s   med=2.49s  max=5.17s   p(90)=3.02s    p(95)=3.71s   
     iterations.....................: 2329   38.021613/s
   ✓ no_errors......................: 0.00%  ✓ 0         ✗ 0    
     vus............................: 55     min=55      max=100
     vus_max........................: 100    min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ce841bb2-e9c9-48bd-9594-d08ecf898a00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f94527cf-a737-40dc-df84-896493b62500/public" alt="HTTP Overview" />


  </details>