## Overview for: `scenarios/fed-v1-constant-vus-over-time`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. It's being executed with a constant amount of VUs over a fixed amount of time. It measure things like memory usage, CPU usage, average RPS. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was running 400 VUs over 200s


### Comparison


| Gateway                             | RPS ⬇️ |        Requests        |         Duration         |
| :---------------------------------- | :----: | :--------------------: | :----------------------: |
| wundergraph                         |  2061  | 412471 total, 0 failed |  avg: 184ms, p95: 339ms  |
| mesh-bun                            |  505   | 101455 total, 0 failed | avg: 789ms, p95: 1303ms  |
| mesh                                |  318   | 63918 total, 0 failed  | avg: 1254ms, p95: 1574ms |
| apollo-gateway-with-yoga-bun        |  224   | 45288 total, 0 failed  | avg: 1777ms, p95: 2048ms |
| apollo-router                       |  204   | 41194 total, 0 failed  | avg: 1947ms, p95: 2939ms |
| mercurius                           |  188   | 37917 total, 0 failed  | avg: 2116ms, p95: 2406ms |
| stitching-federation-with-yoga-bun  |  178   | 35750 total, 0 failed  | avg: 2239ms, p95: 3845ms |
| apollo-gateway-with-yoga-uws        |  177   | 35726 total, 0 failed  | avg: 2247ms, p95: 2583ms |
| apollo-gateway-with-yoga            |  164   | 33219 total, 0 failed  | avg: 2416ms, p95: 3151ms |
| apollo-server-node16                |  121   | 24462 total, 0 failed  | avg: 3286ms, p95: 4275ms |
| mesh-supergraph                     |   94   | 19054 total, 0 failed  | avg: 4223ms, p95: 4863ms |
| stitching-federation-with-yoga-deno |   84   | 17020 total, 0 failed  | avg: 4734ms, p95: 5252ms |
| apollo-server                       |   82   | 16691 total, 0 failed  | avg: 4834ms, p95: 5451ms |
| stitching-federation-with-yoga      |   80   | 16235 total, 0 failed  | avg: 4954ms, p95: 5932ms |
| stitching-federation-with-yoga-uws  |   78   | 15946 total, 0 failed  | avg: 5070ms, p95: 6035ms |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 1237413     ✗ 0     
     data_received..................: 60 MB   299 kB/s
     data_sent......................: 490 MB  2.4 MB/s
     http_req_blocked...............: avg=237.76µs min=1.1µs    med=2.1µs    max=433.65ms p(90)=3.4µs    p(95)=4.59µs  
     http_req_connecting............: avg=214.36µs min=0s       med=0s       max=396.5ms  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=184.01ms min=333.1µs  med=166.04ms max=1.39s    p(90)=279.82ms p(95)=339.38ms
       { expected_response:true }...: avg=184.01ms min=333.1µs  med=166.04ms max=1.39s    p(90)=279.82ms p(95)=339.38ms
   ✓ http_req_failed................: 0.00%   ✓ 0           ✗ 412471
     http_req_receiving.............: avg=850.41µs min=9.29µs   med=28.8µs   max=420.33ms p(90)=105.6µs  p(95)=307.8µs 
     http_req_sending...............: avg=367.56µs min=7.8µs    med=13.4µs   max=387.53ms p(90)=38.7µs   p(95)=120µs   
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=182.79ms min=286.6µs  med=165.25ms max=1.29s    p(90)=277.35ms p(95)=336.37ms
     http_reqs......................: 412471  2061.262084/s
     iteration_duration.............: avg=193.71ms min=458.74µs med=171.74ms max=1.39s    p(90)=299.96ms p(95)=362.56ms
     iterations.....................: 412471  2061.262084/s
     vus............................: 400     min=400       max=400 
     vus_max........................: 400     min=400       max=400 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ee9b1c72-da79-444f-7215-fa74ee41ac00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e0b5b1a5-fe2e-4761-98ed-adeb8edcef00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a38144da-f9a5-4971-cd9d-7e4819e8d300/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  0% — ✓ 0 / ✗ 101455
     ✓ valid response structure

     checks.........................: 66.66% ✓ 202910     ✗ 101455
     data_received..................: 97 MB  481 kB/s
     data_sent......................: 120 MB 600 kB/s
     http_req_blocked...............: avg=223.51µs min=800ns    med=1.7µs    max=152.61ms p(90)=2.6µs  p(95)=3.2µs   
     http_req_connecting............: avg=214.76µs min=0s       med=0s       max=137.16ms p(90)=0s     p(95)=0s      
     http_req_duration..............: avg=789.27ms min=222.17ms med=748.89ms max=2.25s    p(90)=1.15s  p(95)=1.3s    
       { expected_response:true }...: avg=789.27ms min=222.17ms med=748.89ms max=2.25s    p(90)=1.15s  p(95)=1.3s    
   ✓ http_req_failed................: 0.00%  ✓ 0          ✗ 101455
     http_req_receiving.............: avg=267.14µs min=10.3µs   med=24.7µs   max=269.9ms  p(90)=67.3µs p(95)=230.13µs
     http_req_sending...............: avg=105.48µs min=5.7µs    med=10.6µs   max=183.78ms p(90)=21.7µs p(95)=97.1µs  
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s       p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=788.9ms  min=222.06ms med=748.46ms max=2.25s    p(90)=1.15s  p(95)=1.3s    
     http_reqs......................: 101455 505.706083/s
     iteration_duration.............: avg=790.05ms min=222.3ms  med=749.86ms max=2.25s    p(90)=1.15s  p(95)=1.3s    
     iterations.....................: 101455 505.706083/s
     vus............................: 400    min=400      max=400 
     vus_max........................: 400    min=400      max=400 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1b2f6b77-4bb2-467c-886a-1f4a2f9db700/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/68cb7ced-c12e-4a90-b83a-22278987e900/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c57358b3-c4e0-4bd4-93ab-f40f9e62a300/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 191754     ✗ 0    
     data_received..................: 82 MB   407 kB/s
     data_sent......................: 76 MB   378 kB/s
     http_req_blocked...............: avg=341.25µs min=900ns    med=1.8µs  max=95.62ms  p(90)=2.4µs  p(95)=3.1µs 
     http_req_connecting............: avg=334.37µs min=0s       med=0s     max=95.59ms  p(90)=0s     p(95)=0s    
     http_req_duration..............: avg=1.25s    min=150.88ms med=1.21s  max=2.99s    p(90)=1.42s  p(95)=1.57s 
       { expected_response:true }...: avg=1.25s    min=150.88ms med=1.21s  max=2.99s    p(90)=1.42s  p(95)=1.57s 
   ✓ http_req_failed................: 0.00%   ✓ 0          ✗ 63918
     http_req_receiving.............: avg=83.64µs  min=12.1µs   med=32.3µs max=114.29ms p(90)=55µs   p(95)=78µs  
     http_req_sending...............: avg=95.27µs  min=6.1µs    med=11µs   max=83.52ms  p(90)=21.4µs p(95)=30.3µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s     p(95)=0s    
     http_req_waiting...............: avg=1.25s    min=150.65ms med=1.21s  max=2.99s    p(90)=1.42s  p(95)=1.57s 
     http_reqs......................: 63918   318.374674/s
     iteration_duration.............: avg=1.25s    min=152.86ms med=1.21s  max=3.07s    p(90)=1.42s  p(95)=1.57s 
     iterations.....................: 63918   318.374674/s
     vus............................: 102     min=102      max=400
     vus_max........................: 400     min=400      max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6bfe01f8-8489-46e3-a3ca-19aebd246400/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a0f495c8-425d-4a3e-253f-eca619b09200/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/079875c0-2d8d-463d-3b76-03bfefd42400/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 135864     ✗ 0    
     data_received..................: 229 MB  1.1 MB/s
     data_sent......................: 54 MB   267 kB/s
     http_req_blocked...............: avg=354.57µs min=800ns    med=1.6µs  max=98.45ms  p(90)=2.29µs p(95)=3µs   
     http_req_connecting............: avg=346.93µs min=0s       med=0s     max=77.56ms  p(90)=0s     p(95)=0s    
     http_req_duration..............: avg=1.77s    min=446.61ms med=1.71s  max=5.4s     p(90)=1.92s  p(95)=2.04s 
       { expected_response:true }...: avg=1.77s    min=446.61ms med=1.71s  max=5.4s     p(90)=1.92s  p(95)=2.04s 
   ✓ http_req_failed................: 0.00%   ✓ 0          ✗ 45288
     http_req_receiving.............: avg=102.51µs min=14.1µs   med=29.2µs max=109.29ms p(90)=50.8µs p(95)=62.5µs
     http_req_sending...............: avg=85.6µs   min=5.4µs    med=9.7µs  max=109.59ms p(90)=20.7µs p(95)=26.9µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s     p(95)=0s    
     http_req_waiting...............: avg=1.77s    min=444.34ms med=1.71s  max=5.4s     p(90)=1.92s  p(95)=2.04s 
     http_reqs......................: 45288   224.692886/s
     iteration_duration.............: avg=1.77s    min=493.91ms med=1.71s  max=5.4s     p(90)=1.92s  p(95)=2.04s 
     iterations.....................: 45288   224.692886/s
     vus............................: 400     min=400      max=400
     vus_max........................: 400     min=400      max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/acf915a8-60c1-486e-d5ed-1bb4d4012f00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/afc0e8bf-79f5-4c04-f36b-a18a55853200/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b0cbd3ed-acaa-4c68-b595-00277bebb600/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 123582     ✗ 0    
     data_received..................: 208 MB  1.0 MB/s
     data_sent......................: 49 MB   243 kB/s
     http_req_blocked...............: avg=894.83µs min=900ns    med=1.9µs  max=182.26ms p(90)=2.7µs  p(95)=3.2µs 
     http_req_connecting............: avg=879.05µs min=0s       med=0s     max=182.19ms p(90)=0s     p(95)=0s    
     http_req_duration..............: avg=1.94s    min=285.89ms med=1.93s  max=5.92s    p(90)=2.68s  p(95)=2.93s 
       { expected_response:true }...: avg=1.94s    min=285.89ms med=1.93s  max=5.92s    p(90)=2.68s  p(95)=2.93s 
   ✓ http_req_failed................: 0.00%   ✓ 0          ✗ 41194
     http_req_receiving.............: avg=52.09µs  min=16.8µs   med=48.9µs max=19.49ms  p(90)=62µs   p(95)=68.8µs
     http_req_sending...............: avg=218.83µs min=6.3µs    med=12.1µs max=66.14ms  p(90)=24.7µs p(95)=28.1µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s     p(95)=0s    
     http_req_waiting...............: avg=1.94s    min=285.82ms med=1.93s  max=5.92s    p(90)=2.68s  p(95)=2.93s 
     http_reqs......................: 41194   204.776362/s
     iteration_duration.............: avg=1.94s    min=286.18ms med=1.93s  max=5.92s    p(90)=2.68s  p(95)=2.94s 
     iterations.....................: 41194   204.776362/s
     vus............................: 183     min=183      max=400
     vus_max........................: 400     min=400      max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/76aef11c-c6f6-47ae-0905-8bf97fe4dc00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/18641764-4ffd-4347-66ba-3671f1df6200/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/91b98341-09e6-4a87-8db2-101d4c58de00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 113751     ✗ 0    
     data_received..................: 171 MB  851 kB/s
     data_sent......................: 45 MB   224 kB/s
     http_req_blocked...............: avg=267.99µs min=1µs   med=1.9µs  max=54.29ms p(90)=2.9µs  p(95)=3.6µs 
     http_req_connecting............: avg=260.65µs min=0s    med=0s     max=54.23ms p(90)=0s     p(95)=0s    
     http_req_duration..............: avg=2.11s    min=1.01s med=2.08s  max=5.09s   p(90)=2.32s  p(95)=2.4s  
       { expected_response:true }...: avg=2.11s    min=1.01s med=2.08s  max=5.09s   p(90)=2.32s  p(95)=2.4s  
   ✓ http_req_failed................: 0.00%   ✓ 0          ✗ 37917
     http_req_receiving.............: avg=53.29µs  min=18µs  med=40.5µs max=27.26ms p(90)=65.8µs p(95)=75.5µs
     http_req_sending...............: avg=49.18µs  min=6µs   med=11.5µs max=30.28ms p(90)=23.1µs p(95)=29.5µs
     http_req_tls_handshaking.......: avg=0s       min=0s    med=0s     max=0s      p(90)=0s     p(95)=0s    
     http_req_waiting...............: avg=2.11s    min=1.01s med=2.08s  max=5.09s   p(90)=2.32s  p(95)=2.4s  
     http_reqs......................: 37917   188.622037/s
     iteration_duration.............: avg=2.11s    min=1.01s med=2.08s  max=5.13s   p(90)=2.32s  p(95)=2.4s  
     iterations.....................: 37917   188.622037/s
     vus............................: 248     min=248      max=400
     vus_max........................: 400     min=400      max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/10e87a4c-b0e8-4f7f-a657-d28e6d59c300/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/84674f5d-11c9-4a5b-ffad-dc822ae76c00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e475a580-e230-4c74-9db3-14d93180f100/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 107250     ✗ 0    
     data_received..................: 181 MB  901 kB/s
     data_sent......................: 42 MB   212 kB/s
     http_req_blocked...............: avg=904.63µs min=799ns    med=1.4µs  max=158.3ms  p(90)=2.2µs  p(95)=2.7µs   
     http_req_connecting............: avg=887.21µs min=0s       med=0s     max=132.27ms p(90)=0s     p(95)=0s      
     http_req_duration..............: avg=2.23s    min=978.58ms med=2.1s   max=6.24s    p(90)=3.45s  p(95)=3.84s   
       { expected_response:true }...: avg=2.23s    min=978.58ms med=2.1s   max=6.24s    p(90)=3.45s  p(95)=3.84s   
   ✓ http_req_failed................: 0.00%   ✓ 0          ✗ 35750
     http_req_receiving.............: avg=431.77µs min=13.2µs   med=24.7µs max=198.44ms p(90)=58.8µs p(95)=215.45µs
     http_req_sending...............: avg=164.65µs min=4.8µs    med=8.8µs  max=150.16ms p(90)=20.8µs p(95)=99.8µs  
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=2.23s    min=977.75ms med=2.1s   max=6.24s    p(90)=3.45s  p(95)=3.84s   
     http_reqs......................: 35750   178.336093/s
     iteration_duration.............: avg=2.23s    min=978.84ms med=2.1s   max=6.24s    p(90)=3.45s  p(95)=3.85s   
     iterations.....................: 35750   178.336093/s
     vus............................: 400     min=400      max=400
     vus_max........................: 400     min=400      max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/270cbbec-c294-46d5-55c8-427a1e3c9200/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2c7baafa-6006-42ef-c8e0-b6940afb2c00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e8b8b472-fb4b-40af-0558-fd692ce57200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga-uws`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 107178     ✗ 0    
     data_received..................: 181 MB  900 kB/s
     data_sent......................: 42 MB   211 kB/s
     http_req_blocked...............: avg=887.31µs min=800ns  med=1.7µs   max=158.38ms p(90)=2.7µs  p(95)=3.3µs  
     http_req_connecting............: avg=871.91µs min=0s     med=0s      max=158.26ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=2.24s    min=1.33s  med=2.2s    max=6.33s    p(90)=2.47s  p(95)=2.58s  
       { expected_response:true }...: avg=2.24s    min=1.33s  med=2.2s    max=6.33s    p(90)=2.47s  p(95)=2.58s  
   ✓ http_req_failed................: 0.00%   ✓ 0          ✗ 35726
     http_req_receiving.............: avg=45.93µs  min=16.7µs med=34.79µs max=16.21ms  p(90)=59.8µs p(95)=70.09µs
     http_req_sending...............: avg=231.47µs min=6µs    med=10.7µs  max=61.35ms  p(90)=23µs   p(95)=26.7µs 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s       p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=2.24s    min=1.33s  med=2.2s    max=6.33s    p(90)=2.47s  p(95)=2.58s  
     http_reqs......................: 35726   177.445117/s
     iteration_duration.............: avg=2.24s    min=1.33s  med=2.2s    max=6.38s    p(90)=2.47s  p(95)=2.58s  
     iterations.....................: 35726   177.445117/s
     vus............................: 255     min=255      max=400
     vus_max........................: 400     min=400      max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/751c8597-ed95-4987-d988-af6b33d30300/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/180380fe-3339-49f7-53eb-7dc99092c600/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f22340b8-0315-4db4-948b-110b28dbb500/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 99657      ✗ 0    
     data_received..................: 169 MB  841 kB/s
     data_sent......................: 39 MB   196 kB/s
     http_req_blocked...............: avg=2.06ms   min=800ns  med=1.7µs  max=269.65ms p(90)=2.7µs  p(95)=3.4µs 
     http_req_connecting............: avg=2.04ms   min=0s     med=0s     max=269.61ms p(90)=0s     p(95)=0s    
     http_req_duration..............: avg=2.41s    min=1.47s  med=2.31s  max=5.79s    p(90)=2.91s  p(95)=3.15s 
       { expected_response:true }...: avg=2.41s    min=1.47s  med=2.31s  max=5.79s    p(90)=2.91s  p(95)=3.15s 
   ✓ http_req_failed................: 0.00%   ✓ 0          ✗ 33219
     http_req_receiving.............: avg=51.77µs  min=16.5µs med=36µs   max=39.43ms  p(90)=61.6µs p(95)=73.5µs
     http_req_sending...............: avg=384.18µs min=6µs    med=10.7µs max=143.6ms  p(90)=23.6µs p(95)=27.4µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s     p(95)=0s    
     http_req_waiting...............: avg=2.41s    min=1.47s  med=2.31s  max=5.76s    p(90)=2.91s  p(95)=3.15s 
     http_reqs......................: 33219   164.977367/s
     iteration_duration.............: avg=2.41s    min=1.47s  med=2.31s  max=5.99s    p(90)=2.91s  p(95)=3.15s 
     iterations.....................: 33219   164.977367/s
     vus............................: 260     min=260      max=400
     vus_max........................: 400     min=400      max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f1065441-7954-42e8-6654-90bab1990b00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4e25f907-3ead-4665-4436-95d575119800/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/086ea5ef-4019-45b9-374a-2e0a00f01500/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server-node16`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 73386     ✗ 0    
     data_received..................: 128 MB  634 kB/s
     data_sent......................: 29 MB   144 kB/s
     http_req_blocked...............: avg=888.06µs min=1µs      med=2µs    max=91.06ms p(90)=3.4µs  p(95)=5µs   
     http_req_connecting............: avg=874.21µs min=0s       med=0s     max=91.04ms p(90)=0s     p(95)=0s    
     http_req_duration..............: avg=3.28s    min=271.15ms med=3.12s  max=9.75s   p(90)=3.93s  p(95)=4.27s 
       { expected_response:true }...: avg=3.28s    min=271.15ms med=3.12s  max=9.75s   p(90)=3.93s  p(95)=4.27s 
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 24462
     http_req_receiving.............: avg=67.8µs   min=22µs     med=54.4µs max=25.91ms p(90)=76.3µs p(95)=88.7µs
     http_req_sending...............: avg=162.34µs min=7.2µs    med=12.1µs max=51.27ms p(90)=26.1µs p(95)=30µs  
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s     p(95)=0s    
     http_req_waiting...............: avg=3.28s    min=271.05ms med=3.12s  max=9.75s   p(90)=3.93s  p(95)=4.27s 
     http_reqs......................: 24462   121.30309/s
     iteration_duration.............: avg=3.28s    min=271.53ms med=3.12s  max=9.79s   p(90)=3.93s  p(95)=4.27s 
     iterations.....................: 24462   121.30309/s
     vus............................: 313     min=313     max=400
     vus_max........................: 400     min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a1cc0121-9c29-4f22-54bb-84c03f397400/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/07f707da-99d4-4215-acd9-9f5bce25c000/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/fb11cb8a-a7bb-4455-3611-84ba25b5f900/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 57162    ✗ 0    
     data_received..................: 97 MB   478 kB/s
     data_sent......................: 23 MB   112 kB/s
     http_req_blocked...............: avg=2.24ms   min=900ns  med=1.6µs  max=193.78ms p(90)=2.7µs   p(95)=3.9µs 
     http_req_connecting............: avg=2.14ms   min=0s     med=0s     max=184.52ms p(90)=0s      p(95)=0s    
     http_req_duration..............: avg=4.22s    min=2.02s  med=4.15s  max=7.58s    p(90)=4.65s   p(95)=4.86s 
       { expected_response:true }...: avg=4.22s    min=2.02s  med=4.15s  max=7.58s    p(90)=4.65s   p(95)=4.86s 
   ✓ http_req_failed................: 0.00%   ✓ 0        ✗ 19054
     http_req_receiving.............: avg=50.4µs   min=15.9µs med=31.5µs max=40.65ms  p(90)=55.69µs p(95)=67.2µs
     http_req_sending...............: avg=580.94µs min=6.2µs  med=10.3µs max=171.27ms p(90)=23.29µs p(95)=28.1µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s      p(95)=0s    
     http_req_waiting...............: avg=4.22s    min=2.02s  med=4.15s  max=7.51s    p(90)=4.65s   p(95)=4.86s 
     http_reqs......................: 19054   94.35024/s
     iteration_duration.............: avg=4.22s    min=2.02s  med=4.15s  max=7.63s    p(90)=4.65s   p(95)=4.86s 
     iterations.....................: 19054   94.35024/s
     vus............................: 147     min=147    max=400
     vus_max........................: 400     min=400    max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/46164a93-cde7-4db9-216c-da0704780800/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5994d9ca-7acd-4405-7693-de00e2de3900/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e4d652c5-d19c-4ef8-d017-70516f244400/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-deno`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 51060     ✗ 0    
     data_received..................: 86 MB   427 kB/s
     data_sent......................: 20 MB   100 kB/s
     http_req_blocked...............: avg=2.06ms   min=1µs    med=2.2µs  max=154.73ms p(90)=3.9µs   p(95)=6.8µs   
     http_req_connecting............: avg=2.03ms   min=0s     med=0s     max=151.59ms p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=4.73s    min=2.18s  med=4.67s  max=8.95s    p(90)=4.99s   p(95)=5.25s   
       { expected_response:true }...: avg=4.73s    min=2.18s  med=4.67s  max=8.95s    p(90)=4.99s   p(95)=5.25s   
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 17020
     http_req_receiving.............: avg=136.72µs min=17.4µs med=41.9µs max=51.44ms  p(90)=100.3µs p(95)=147.22µs
     http_req_sending...............: avg=345.92µs min=6.9µs  med=13.7µs max=36.95ms  p(90)=37.31µs p(95)=149.87µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=4.73s    min=2.18s  med=4.67s  max=8.95s    p(90)=4.99s   p(95)=5.25s   
     http_reqs......................: 17020   84.183703/s
     iteration_duration.............: avg=4.73s    min=2.18s  med=4.67s  max=9.01s    p(90)=4.99s   p(95)=5.25s   
     iterations.....................: 17020   84.183703/s
     vus............................: 253     min=253     max=400
     vus_max........................: 400     min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/46629d1c-dfd9-465d-1b2f-aee4553e7700/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/fe1797a5-c6bb-403f-9e7f-2219f3c10c00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/95846465-c084-44d3-a402-80e334736300/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 50073    ✗ 0    
     data_received..................: 87 MB   430 kB/s
     data_sent......................: 20 MB   98 kB/s
     http_req_blocked...............: avg=1.64ms   min=1.5µs  med=2.8µs   max=177.13ms p(90)=4.59µs  p(95)=18.2µs 
     http_req_connecting............: avg=1.61ms   min=0s     med=0s      max=177.08ms p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=4.83s    min=3.11s  med=4.71s   max=12.15s   p(90)=5.22s   p(95)=5.45s  
       { expected_response:true }...: avg=4.83s    min=3.11s  med=4.71s   max=12.15s   p(90)=5.22s   p(95)=5.45s  
   ✓ http_req_failed................: 0.00%   ✓ 0        ✗ 16691
     http_req_receiving.............: avg=103.11µs min=30.2µs med=74.09µs max=21.84ms  p(90)=120.4µs p(95)=152.4µs
     http_req_sending...............: avg=360.41µs min=9.19µs med=17.8µs  max=66.34ms  p(90)=42.3µs  p(95)=65.3µs 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s       p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=4.83s    min=3.11s  med=4.71s   max=12.14s   p(90)=5.22s   p(95)=5.45s  
     http_reqs......................: 16691   82.21708/s
     iteration_duration.............: avg=4.83s    min=3.11s  med=4.71s   max=12.21s   p(90)=5.22s   p(95)=5.45s  
     iterations.....................: 16691   82.21708/s
     vus............................: 117     min=117    max=400
     vus_max........................: 400     min=400    max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7faa2dde-a5af-4d22-ce8d-4e85c16d4800/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ca6e55fa-a432-4370-faaf-e5675520c800/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/23a24e20-b1c3-480f-1b56-069990e82c00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 48705     ✗ 0    
     data_received..................: 83 MB   410 kB/s
     data_sent......................: 19 MB   95 kB/s
     http_req_blocked...............: avg=2.86ms   min=1µs     med=2µs     max=183.61ms p(90)=3.4µs  p(95)=7.7µs 
     http_req_connecting............: avg=2.83ms   min=0s      med=0s      max=179.3ms  p(90)=0s     p(95)=0s    
     http_req_duration..............: avg=4.95s    min=2.02s   med=4.85s   max=9.84s    p(90)=5.66s  p(95)=5.93s 
       { expected_response:true }...: avg=4.95s    min=2.02s   med=4.85s   max=9.84s    p(90)=5.66s  p(95)=5.93s 
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 16235
     http_req_receiving.............: avg=53.74µs  min=18.39µs med=40.59µs max=17.19ms  p(90)=68.9µs p(95)=83.6µs
     http_req_sending...............: avg=344.81µs min=6.7µs   med=12µs    max=64.02ms  p(90)=26.3µs p(95)=41.9µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s       p(90)=0s     p(95)=0s    
     http_req_waiting...............: avg=4.95s    min=2.02s   med=4.85s   max=9.83s    p(90)=5.66s  p(95)=5.93s 
     http_reqs......................: 16235   80.400807/s
     iteration_duration.............: avg=4.95s    min=2.02s   med=4.85s   max=9.89s    p(90)=5.66s  p(95)=5.93s 
     iterations.....................: 16235   80.400807/s
     vus............................: 78      min=78      max=400
     vus_max........................: 400     min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2fdc921b-23a5-46cc-d722-4e5d01defc00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6aa4d1b5-304e-4ceb-94cd-8a3607138900/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c542f1ef-647d-41b7-b4b5-1d92e60d9a00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-uws`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 47838     ✗ 0    
     data_received..................: 81 MB   398 kB/s
     data_sent......................: 19 MB   93 kB/s
     http_req_blocked...............: avg=1.28ms  min=1µs    med=1.9µs  max=116.28ms p(90)=3.2µs  p(95)=8.27µs 
     http_req_connecting............: avg=1.26ms  min=0s     med=0s     max=84.22ms  p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=5.07s   min=3.22s  med=4.96s  max=8.21s    p(90)=5.74s  p(95)=6.03s  
       { expected_response:true }...: avg=5.07s   min=3.22s  med=4.96s  max=8.21s    p(90)=5.74s  p(95)=6.03s  
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 15946
     http_req_receiving.............: avg=64.33µs min=18.2µs med=36.7µs max=24.17ms  p(90)=77.4µs p(95)=90.87µs
     http_req_sending...............: avg=359.8µs min=6.4µs  med=11.6µs max=83.74ms  p(90)=26.9µs p(95)=100.7µs
     http_req_tls_handshaking.......: avg=0s      min=0s     med=0s     max=0s       p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=5.06s   min=3.22s  med=4.96s  max=8.19s    p(90)=5.74s  p(95)=6.03s  
     http_reqs......................: 15946   78.496598/s
     iteration_duration.............: avg=5.07s   min=3.22s  med=4.96s  max=8.3s     p(90)=5.74s  p(95)=6.03s  
     iterations.....................: 15946   78.496598/s
     vus............................: 217     min=217     max=400
     vus_max........................: 400     min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/20da82a2-38ad-452d-4396-7d81cda93600/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8fa7325e-93ad-4081-16c4-1189d4bbe100/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a7010011-e40d-4bcb-b215-e84d2cc87900/public" alt="HTTP Overview" />


  </details>