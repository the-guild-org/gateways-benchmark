## Overview for: `scenarios/fed-v1-constant-vus-over-time`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. It's being executed with a constant amount of VUs over a fixed amount of time. It measure things like memory usage, CPU usage, average RPS. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was running 100 VUs over 60s


### Comparison


| Gateway                             | RPS ⬇️ |       Requests        |         Duration         |
| :---------------------------------- | :----: | :-------------------: | :----------------------: |
| wundergraph                         |  412   | 24781 total, 0 failed |  avg: 239ms, p95: 380ms  |
| mesh-supergraph                     |  113   | 6840 total, 0 failed  | avg: 881ms, p95: 1361ms  |
| apollo-router                       |   94   | 5737 total, 0 failed  | avg: 1054ms, p95: 1593ms |
| mercurius                           |   78   | 4724 total, 0 failed  | avg: 1275ms, p95: 1629ms |
| stitching-federation-with-yoga      |   71   | 4365 total, 0 failed  | avg: 1383ms, p95: 1901ms |
| mesh                                |   70   | 4311 total, 0 failed  | avg: 1402ms, p95: 2214ms |
| stitching-federation-with-yoga-deno |   69   | 4197 total, 0 failed  | avg: 1440ms, p95: 1850ms |
| stitching-federation-with-yoga-bun  |   66   | 4004 total, 0 failed  | avg: 1500ms, p95: 2342ms |
| apollo-gateway-with-yoga            |   59   | 3642 total, 0 failed  | avg: 1666ms, p95: 2299ms |
| apollo-server                       |   56   | 3431 total, 0 failed  | avg: 1765ms, p95: 2080ms |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 74343      ✗ 0    
     data_received..................: 123 MB  2.1 MB/s
     data_sent......................: 29 MB   489 kB/s
     http_req_blocked...............: avg=25.91µs  min=1.3µs   med=2.7µs    max=11.88ms  p(90)=4.2µs    p(95)=7.5µs   
     http_req_connecting............: avg=18.61µs  min=0s      med=0s       max=11.84ms  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=239.43ms min=55.7ms  med=227.92ms max=720.49ms p(90)=338.09ms p(95)=380.03ms
       { expected_response:true }...: avg=239.43ms min=55.7ms  med=227.92ms max=720.49ms p(90)=338.09ms p(95)=380.03ms
   ✓ http_req_failed................: 0.00%   ✓ 0          ✗ 24781
     http_req_receiving.............: avg=1.84ms   min=21.9µs  med=58.3µs   max=208.66ms p(90)=387.8µs  p(95)=5.06ms  
     http_req_sending...............: avg=581.09µs min=9.19µs  med=15.4µs   max=240.65ms p(90)=52.7µs   p(95)=165.5µs 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=237ms    min=55.48ms med=225.84ms max=638.45ms p(90)=333.68ms p(95)=373.92ms
     http_reqs......................: 24781   412.256226/s
     iteration_duration.............: avg=242.3ms  min=56.23ms med=230.5ms  max=782.33ms p(90)=342.07ms p(95)=384.83ms
     iterations.....................: 24781   412.256226/s
     vus............................: 100     min=100      max=100
     vus_max........................: 100     min=100      max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/db95083e-11eb-486f-9c42-aae5ccbdea00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/65c603e1-982a-4727-54d4-4490940eb100/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 6840

     checks.........................: 66.66% ✓ 13680      ✗ 6840 
     data_received..................: 34 MB  570 kB/s
     data_sent......................: 8.1 MB 134 kB/s
     http_req_blocked...............: avg=82.05µs  min=1µs      med=2µs      max=23.39ms p(90)=3µs    p(95)=3.6µs 
     http_req_connecting............: avg=78.82µs  min=0s       med=0s       max=23.19ms p(90)=0s     p(95)=0s    
     http_req_duration..............: avg=880.87ms min=368.58ms med=825.02ms max=2.24s   p(90)=1.11s  p(95)=1.36s 
       { expected_response:true }...: avg=880.87ms min=368.58ms med=825.02ms max=2.24s   p(90)=1.11s  p(95)=1.36s 
   ✓ http_req_failed................: 0.00%  ✓ 0          ✗ 6840 
     http_req_receiving.............: avg=48.9µs   min=17.3µs   med=40.2µs   max=9.4ms   p(90)=68.8µs p(95)=76.5µs
     http_req_sending...............: avg=27.81µs  min=6.6µs    med=12.5µs   max=13.26ms p(90)=24µs   p(95)=29µs  
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s      p(90)=0s     p(95)=0s    
     http_req_waiting...............: avg=880.79ms min=368.52ms med=824.96ms max=2.24s   p(90)=1.11s  p(95)=1.36s 
     http_reqs......................: 6840   113.159786/s
     iteration_duration.............: avg=881.28ms min=368.86ms med=825.3ms  max=2.25s   p(90)=1.11s  p(95)=1.36s 
     iterations.....................: 6840   113.159786/s
     vus............................: 100    min=100      max=100
     vus_max........................: 100    min=100      max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4fbe5b9f-0778-4935-83ef-39abb4dc7f00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e8fb7179-4006-4e24-764d-3b2ce9b1b000/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 5736 / ✗ 1
     ✗ valid response structure
      ↳  99% — ✓ 5736 / ✗ 1

     checks.........................: 99.98% ✓ 17209     ✗ 2    
     data_received..................: 29 MB  468 kB/s
     data_sent......................: 6.8 MB 112 kB/s
     http_req_blocked...............: avg=143.31µs min=1.5µs   med=3.1µs    max=14.96ms p(90)=4.3µs  p(95)=9.27µs 
     http_req_connecting............: avg=137.98µs min=0s      med=0s       max=14.82ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=1.05s    min=86.42ms med=990.24ms max=4.6s    p(90)=1.33s  p(95)=1.59s  
       { expected_response:true }...: avg=1.05s    min=86.42ms med=990.24ms max=4.6s    p(90)=1.33s  p(95)=1.59s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 5737 
     http_req_receiving.............: avg=72.24µs  min=23.6µs  med=60.2µs   max=8.12ms  p(90)=86µs   p(95)=94.5µs 
     http_req_sending...............: avg=71.56µs  min=9µs     med=17.89µs  max=11.71ms p(90)=34.5µs p(95)=44.72µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s      p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=1.05s    min=86.29ms med=990.1ms  max=4.6s    p(90)=1.33s  p(95)=1.59s  
     http_reqs......................: 5737   94.023033/s
     iteration_duration.............: avg=1.05s    min=87.72ms med=991.29ms max=4.61s   p(90)=1.33s  p(95)=1.59s  
     iterations.....................: 5737   94.023033/s
     vus............................: 25     min=25      max=100
     vus_max........................: 100    min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a0ff3adc-a788-4931-8cbb-b6f813007300/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/580ac91b-b4a4-46ed-4210-013ea44adb00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 14172     ✗ 0    
     data_received..................: 24 MB   393 kB/s
     data_sent......................: 5.6 MB  93 kB/s
     http_req_blocked...............: avg=127.38µs min=1.3µs    med=2.7µs  max=13.07ms p(90)=4.2µs  p(95)=8.42µs
     http_req_connecting............: avg=118.72µs min=0s       med=0s     max=13.04ms p(90)=0s     p(95)=0s    
     http_req_duration..............: avg=1.27s    min=462.6ms  med=1.22s  max=4.13s   p(90)=1.39s  p(95)=1.62s 
       { expected_response:true }...: avg=1.27s    min=462.6ms  med=1.22s  max=4.13s   p(90)=1.39s  p(95)=1.62s 
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 4724 
     http_req_receiving.............: avg=64.14µs  min=21.7µs   med=59.7µs max=5.4ms   p(90)=82.2µs p(95)=90.1µs
     http_req_sending...............: avg=73.63µs  min=7.9µs    med=15.6µs max=9.48ms  p(90)=30.2µs p(95)=38µs  
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s     p(95)=0s    
     http_req_waiting...............: avg=1.27s    min=462.45ms med=1.22s  max=4.12s   p(90)=1.39s  p(95)=1.62s 
     http_reqs......................: 4724    78.144098/s
     iteration_duration.............: avg=1.27s    min=463.18ms med=1.22s  max=4.13s   p(90)=1.39s  p(95)=1.62s 
     iterations.....................: 4724    78.144098/s
     vus............................: 100     min=100     max=100
     vus_max........................: 100     min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3c03e3f5-f8fe-4cc0-8ebd-4143146b4100/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/cdda3a0a-9040-4acd-2ec9-872041053300/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 4357 / ✗ 8
     ✗ valid response structure
      ↳  99% — ✓ 4357 / ✗ 8

     checks.........................: 99.87% ✓ 13079     ✗ 16   
     data_received..................: 22 MB  360 kB/s
     data_sent......................: 5.2 MB 85 kB/s
     http_req_blocked...............: avg=181.06µs min=1.4µs    med=2.29µs max=25.04ms p(90)=3.6µs   p(95)=12.58µs
     http_req_connecting............: avg=169.47µs min=0s       med=0s     max=24.7ms  p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=1.38s    min=724.5ms  med=1.31s  max=3.04s   p(90)=1.66s   p(95)=1.9s   
       { expected_response:true }...: avg=1.38s    min=724.5ms  med=1.31s  max=3.04s   p(90)=1.66s   p(95)=1.9s   
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 4365 
     http_req_receiving.............: avg=54.61µs  min=20.1µs   med=49.2µs max=4.07ms  p(90)=74.56µs p(95)=83.18µs
     http_req_sending...............: avg=133.56µs min=7.8µs    med=13µs   max=23.32ms p(90)=27.3µs  p(95)=32.58µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=1.38s    min=724.45ms med=1.31s  max=3.04s   p(90)=1.66s   p(95)=1.89s  
     http_reqs......................: 4365   71.879742/s
     iteration_duration.............: avg=1.38s    min=725.05ms med=1.31s  max=3.04s   p(90)=1.66s   p(95)=1.9s   
     iterations.....................: 4365   71.879742/s
     vus............................: 100    min=100     max=100
     vus_max........................: 100    min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f1c94ca4-fee7-4978-96a0-71712a6a6100/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/024cb100-2de5-4a5f-9890-b3fd79800b00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 12933     ✗ 0    
     data_received..................: 22 MB   354 kB/s
     data_sent......................: 5.1 MB  84 kB/s
     http_req_blocked...............: avg=269.83µs min=1.5µs    med=2.7µs  max=28.15ms p(90)=4.2µs  p(95)=14.45µs
     http_req_connecting............: avg=255.13µs min=0s       med=0s     max=28.11ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=1.4s     min=753.87ms med=1.33s  max=3.43s   p(90)=1.76s  p(95)=2.21s  
       { expected_response:true }...: avg=1.4s     min=753.87ms med=1.33s  max=3.43s   p(90)=1.76s  p(95)=2.21s  
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 4311 
     http_req_receiving.............: avg=71.33µs  min=21.9µs   med=54.6µs max=28.96ms p(90)=84.1µs p(95)=93.95µs
     http_req_sending...............: avg=128.06µs min=9.6µs    med=15.1µs max=23.42ms p(90)=32µs   p(95)=38.95µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=1.4s     min=753.78ms med=1.33s  max=3.43s   p(90)=1.76s  p(95)=2.21s  
     http_reqs......................: 4311    70.831239/s
     iteration_duration.............: avg=1.4s     min=754.7ms  med=1.33s  max=3.43s   p(90)=1.76s  p(95)=2.21s  
     iterations.....................: 4311    70.831239/s
     vus............................: 100     min=100     max=100
     vus_max........................: 100     min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4fa8e825-fa8d-4a42-7bc3-146c90357900/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/373c5117-af42-4474-a60a-c35717d10e00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-deno`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 4196 / ✗ 1
     ✗ valid response structure
      ↳  99% — ✓ 4196 / ✗ 1

     checks.........................: 99.98% ✓ 12589     ✗ 2    
     data_received..................: 21 MB  346 kB/s
     data_sent......................: 5.0 MB 82 kB/s
     http_req_blocked...............: avg=64.55µs  min=1.3µs    med=2.7µs  max=10.64ms p(90)=4.4µs   p(95)=8.76µs  
     http_req_connecting............: avg=58.41µs  min=0s       med=0s     max=10.6ms  p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=1.44s    min=768ms    med=1.4s   max=2.45s   p(90)=1.68s   p(95)=1.84s   
       { expected_response:true }...: avg=1.44s    min=768ms    med=1.4s   max=2.45s   p(90)=1.68s   p(95)=1.84s   
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 4197 
     http_req_receiving.............: avg=134.38µs min=18.5µs   med=40.3µs max=46.69ms p(90)=91.74µs p(95)=129.86µs
     http_req_sending...............: avg=100.74µs min=7.7µs    med=15.2µs max=24.73ms p(90)=41.14µs p(95)=142.8µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=1.43s    min=767.92ms med=1.4s   max=2.45s   p(90)=1.68s   p(95)=1.84s   
     http_reqs......................: 4197   69.059979/s
     iteration_duration.............: avg=1.44s    min=768.64ms med=1.4s   max=2.45s   p(90)=1.68s   p(95)=1.85s   
     iterations.....................: 4197   69.059979/s
     vus............................: 100    min=100     max=100
     vus_max........................: 100    min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/68c13ba6-7810-4987-2338-2d71b066ca00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9a8891ce-63c2-46b6-02d9-21b69da46400/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 12012     ✗ 0    
     data_received..................: 20 MB   331 kB/s
     data_sent......................: 4.8 MB  79 kB/s
     http_req_blocked...............: avg=82.91µs  min=1.5µs    med=3µs     max=9.55ms  p(90)=5.2µs    p(95)=20.7µs  
     http_req_connecting............: avg=71.82µs  min=0s       med=0s      max=9.52ms  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=1.5s     min=314.33ms med=1.43s   max=3.86s   p(90)=1.85s    p(95)=2.34s   
       { expected_response:true }...: avg=1.5s     min=314.33ms med=1.43s   max=3.86s   p(90)=1.85s    p(95)=2.34s   
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 4004 
     http_req_receiving.............: avg=101.18µs min=25.7µs   med=61.95µs max=12.89ms p(90)=119.47µs p(95)=160.04µs
     http_req_sending...............: avg=183.34µs min=11.5µs   med=17.6µs  max=55.93ms p(90)=50.51µs  p(95)=207.58µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=1.5s     min=314.25ms med=1.43s   max=3.86s   p(90)=1.85s    p(95)=2.34s   
     http_reqs......................: 4004    66.382248/s
     iteration_duration.............: avg=1.5s     min=315.6ms  med=1.43s   max=3.86s   p(90)=1.85s    p(95)=2.34s   
     iterations.....................: 4004    66.382248/s
     vus............................: 100     min=100     max=100
     vus_max........................: 100     min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/22bf3609-5ae0-4113-54d6-8901b3c34d00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/78a2f767-a3f4-4512-08f9-588c39948300/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 3609 / ✗ 33
     ✗ valid response structure
      ↳  99% — ✓ 3609 / ✗ 33

     checks.........................: 99.39% ✓ 10860     ✗ 66   
     data_received..................: 18 MB  298 kB/s
     data_sent......................: 4.3 MB 71 kB/s
     http_req_blocked...............: avg=206.21µs min=1.4µs    med=2.4µs  max=14.15ms p(90)=3.8µs  p(95)=14.89µs
     http_req_connecting............: avg=196.28µs min=0s       med=0s     max=13.99ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=1.66s    min=683.22ms med=1.59s  max=3.27s   p(90)=1.98s  p(95)=2.29s  
       { expected_response:true }...: avg=1.66s    min=683.22ms med=1.59s  max=3.27s   p(90)=1.98s  p(95)=2.29s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 3642 
     http_req_receiving.............: avg=59.2µs   min=18.8µs   med=42.4µs max=10.17ms p(90)=71.9µs p(95)=81.9µs 
     http_req_sending...............: avg=101.15µs min=7.9µs    med=13.3µs max=13.98ms p(90)=28.5µs p(95)=86.78µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=1.66s    min=683.16ms med=1.59s  max=3.26s   p(90)=1.98s  p(95)=2.29s  
     http_reqs......................: 3642   59.653825/s
     iteration_duration.............: avg=1.66s    min=683.42ms med=1.59s  max=3.27s   p(90)=1.98s  p(95)=2.3s   
     iterations.....................: 3642   59.653825/s
     vus............................: 29     min=29      max=100
     vus_max........................: 100    min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/cf9fa768-416c-4862-83e5-899b83ae3800/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9875923b-9f95-41d7-d20a-c74537108800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 3416 / ✗ 15
     ✗ valid response structure
      ↳  99% — ✓ 3416 / ✗ 15

     checks.........................: 99.70% ✓ 10263     ✗ 30   
     data_received..................: 18 MB  290 kB/s
     data_sent......................: 4.1 MB 67 kB/s
     http_req_blocked...............: avg=193.5µs  min=1.4µs    med=2.5µs  max=12.61ms p(90)=4.3µs  p(95)=14.85µs
     http_req_connecting............: avg=189.39µs min=0s       med=0s     max=12.58ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=1.76s    min=705.01ms med=1.62s  max=19.17s  p(90)=1.88s  p(95)=2.07s  
       { expected_response:true }...: avg=1.76s    min=705.01ms med=1.62s  max=19.17s  p(90)=1.88s  p(95)=2.07s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 3431 
     http_req_receiving.............: avg=69.09µs  min=27.9µs   med=58.5µs max=9.72ms  p(90)=86.8µs p(95)=94.7µs 
     http_req_sending...............: avg=110.01µs min=8.4µs    med=14.6µs max=11.29ms p(90)=29.2µs p(95)=41.25µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=1.76s    min=704.89ms med=1.62s  max=19.17s  p(90)=1.88s  p(95)=2.07s  
     http_reqs......................: 3431   56.306971/s
     iteration_duration.............: avg=1.76s    min=705.8ms  med=1.62s  max=19.17s  p(90)=1.88s  p(95)=2.08s  
     iterations.....................: 3431   56.306971/s
     vus............................: 100    min=100     max=100
     vus_max........................: 100    min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/261043ac-54b7-4499-712d-00c3ef8d1b00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0809d77c-f56c-41d4-48b3-b3082d2c9300/public" alt="HTTP Overview" />


  </details>