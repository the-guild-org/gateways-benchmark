## Overview for: `scenarios/fed-v1-constants-vus-subgraphs-delay-resources`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. All subgraphs have an intentional delay on replying, and this creates additional pressure on the gateway's memory. We are running a heavy load of concurrent VUs to measure response time and other stats, during stress. It measure things like memory usage, CPU usage, response times. In this specific execution, we are running the same scenario as `fed-v1-constants-vus-subgraphs-delay` but with added resources (more RAM and CPU allocated for the gateway).


This scenario was running 350 VUs over 400s


### Comparison


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/45a219ab-dfc6-44df-284c-122f42170d00/public" alt="Comparison" />


| Gateway              | RPS ⬇️ |        Requests        |          Duration          | Notes                                                                          |
| :------------------- | :----: | :--------------------: | :------------------------: | :----------------------------------------------------------------------------- |
| mesh-bun             |  358   | 143441 total, 0 failed |  avg: 973ms, p95: 1430ms   | ❌ 143441 unexpected GraphQL errors, non-compatible response structure (143441) |
| apollo-router        |   76   | 30879 total, 0 failed  |  avg: 4042ms, p95: 5733ms  | ✅                                                                              |
| wundergraph          |   46   | 18870 total, 0 failed  | avg: 7205ms, p95: 12527ms  | ✅                                                                              |
| mesh                 |   33   | 13621 total, 0 failed  | avg: 10361ms, p95: 12192ms | ✅                                                                              |
| apollo-server-node16 |   29   | 12142 total, 0 failed  | avg: 11634ms, p95: 17769ms | ✅                                                                              |
| apollo-server        |   19   | 8127 total, 13 failed  | avg: 17540ms, p95: 27852ms | ❌ 13 failed requests, 13 non-200 responses, 13 unexpected GraphQL errors       |
| mercurius            |   13   |  5724 total, 0 failed  | avg: 25108ms, p95: 27029ms | ✅                                                                              |



<details>
  <summary>Summary for: `mesh-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  0% — ✓ 0 / ✗ 143441
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 143441

     checks.........................: 33.33% ✓ 143441     ✗ 286882
     data_received..................: 136 MB 341 kB/s
     data_sent......................: 170 MB 425 kB/s
     http_req_blocked...............: avg=142.69µs min=1.2µs    med=2.5µs   max=254.02ms p(90)=4µs     p(95)=4.8µs  
     http_req_connecting............: avg=128.28µs min=0s       med=0s      max=234.33ms p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=972.94ms min=273.43ms med=1.02s   max=2.61s    p(90)=1.33s   p(95)=1.43s  
       { expected_response:true }...: avg=972.94ms min=273.43ms med=1.02s   max=2.61s    p(90)=1.33s   p(95)=1.43s  
     http_req_failed................: 0.00%  ✓ 0          ✗ 143441
     http_req_receiving.............: avg=3.42ms   min=11.2µs   med=27.9µs  max=756.4ms  p(90)=321µs   p(95)=6.09ms 
     http_req_sending...............: avg=1.74ms   min=7µs      med=13.89µs max=597.29ms p(90)=135.9µs p(95)=249.6µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s       p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=967.77ms min=273.37ms med=1.02s   max=2.47s    p(90)=1.32s   p(95)=1.41s  
     http_reqs......................: 143441 358.004164/s
     iteration_duration.............: avg=976.53ms min=274.08ms med=1.02s   max=2.66s    p(90)=1.34s   p(95)=1.43s  
     iterations.....................: 143441 358.004164/s
     vus............................: 350    min=350      max=350 
     vus_max........................: 350    min=350      max=350 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5a7b44da-8914-42e2-6428-808270ea1e00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/19f5cd78-c0e7-4698-2e41-bda30510d300/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/aed88886-fb4f-4a8b-f18a-f340cb5c4800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 92637     ✗ 0    
     data_received..................: 2.7 GB  6.7 MB/s
     data_sent......................: 37 MB   91 kB/s
     http_req_blocked...............: avg=573.03µs min=1.7µs    med=4.1µs   max=959.61ms p(90)=6.3µs   p(95)=7.7µs  
     http_req_connecting............: avg=303.36µs min=0s       med=0s      max=50.5ms   p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=4.04s    min=388.7ms  med=4.01s   max=11.1s    p(90)=5.28s   p(95)=5.73s  
       { expected_response:true }...: avg=4.04s    min=388.7ms  med=4.01s   max=11.1s    p(90)=5.28s   p(95)=5.73s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 30879
     http_req_receiving.............: avg=294.79ms min=38.5µs   med=104.5µs max=6.95s    p(90)=1.05s   p(95)=1.83s  
     http_req_sending...............: avg=29.17ms  min=7.4µs    med=17µs    max=7.3s     p(90)=11.56ms p(95)=85.72ms
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s       p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=3.71s    min=388.6ms  med=3.78s   max=8.12s    p(90)=4.85s   p(95)=5.19s  
     http_reqs......................: 30879   76.483961/s
     iteration_duration.............: avg=4.55s    min=440.57ms med=4.39s   max=16.27s   p(90)=6.04s   p(95)=6.76s  
     iterations.....................: 30879   76.483961/s
     vus............................: 94      min=94      max=350
     vus_max........................: 350     min=350     max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2ed07d5f-69c1-4677-0714-67f3e1783700/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ca64c9e2-1060-48da-20ed-d6dd7a37a100/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e3b03563-b0d8-43f8-d2b9-9b1239f1c000/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 56610     ✗ 0    
     data_received..................: 1.7 GB  4.1 MB/s
     data_sent......................: 22 MB   55 kB/s
     http_req_blocked...............: avg=719.9µs  min=2µs    med=5.3µs  max=1.69s  p(90)=8.1µs    p(95)=12µs    
     http_req_connecting............: avg=531.1µs  min=0s     med=0s     max=49.3ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=7.2s     min=1.47s  med=7s     max=20.28s p(90)=11.2s    p(95)=12.52s  
       { expected_response:true }...: avg=7.2s     min=1.47s  med=7s     max=20.28s p(90)=11.2s    p(95)=12.52s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 18870
     http_req_receiving.............: avg=108.93ms min=48.1µs med=126µs  max=9.89s  p(90)=216.72ms p(95)=572.97ms
     http_req_sending...............: avg=11.5ms   min=8.69µs med=24.6µs max=4.07s  p(90)=3.45ms   p(95)=24.3ms  
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s     p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=7.08s    min=1.46s  med=6.91s  max=20.28s p(90)=11.18s   p(95)=12.5s   
     http_reqs......................: 18870   46.237283/s
     iteration_duration.............: avg=7.49s    min=1.48s  med=7.31s  max=20.29s p(90)=11.39s   p(95)=12.7s   
     iterations.....................: 18870   46.237283/s
     vus............................: 58      min=58      max=350
     vus_max........................: 350     min=350     max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/156c5497-a50b-40d6-e05e-7dc941474300/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ec22ffb1-6f4f-4cb8-4a3d-6cf70f81aa00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7df41bb1-6ab1-4b5e-0816-5a114c038e00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 40863     ✗ 0    
     data_received..................: 1.2 GB  2.9 MB/s
     data_sent......................: 16 MB   40 kB/s
     http_req_blocked...............: avg=829.28µs min=1.9µs  med=5.6µs   max=101.53ms p(90)=7.6µs  p(95)=12.6µs 
     http_req_connecting............: avg=793.77µs min=0s     med=0s      max=59.01ms  p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=10.36s   min=6.21s  med=10.3s   max=15.16s   p(90)=11.86s p(95)=12.19s 
       { expected_response:true }...: avg=10.36s   min=6.21s  med=10.3s   max=15.16s   p(90)=11.86s p(95)=12.19s 
     http_req_failed................: 0.00%   ✓ 0         ✗ 13621
     http_req_receiving.............: avg=2.79ms   min=59.8µs med=171.8µs max=1.3s     p(90)=5.42ms p(95)=10.68ms
     http_req_sending...............: avg=1.11ms   min=9µs    med=31.7µs  max=204.03ms p(90)=66.4µs p(95)=4.54ms 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s       p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=10.35s   min=6.21s  med=10.29s  max=15.15s   p(90)=11.86s p(95)=12.19s 
     http_reqs......................: 13621   33.390673/s
     iteration_duration.............: avg=10.39s   min=6.22s  med=10.33s  max=15.21s   p(90)=11.88s p(95)=12.23s 
     iterations.....................: 13621   33.390673/s
     vus............................: 27      min=27      max=350
     vus_max........................: 350     min=350     max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ef87e555-e048-4685-69bd-da5a47f8d400/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/50e59e28-c04e-423a-082e-a91920ef7c00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e4ab2810-59d3-4169-5f9d-f7fd6d70d900/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server-node16`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 36426     ✗ 0    
     data_received..................: 1.1 GB  2.6 MB/s
     data_sent......................: 14 MB   35 kB/s
     http_req_blocked...............: avg=1.58ms min=1.5µs  med=5.6µs   max=111.13ms p(90)=8.2µs    p(95)=12.4µs 
     http_req_connecting............: avg=1.52ms min=0s     med=0s      max=108.91ms p(90)=0s       p(95)=0s     
     http_req_duration..............: avg=11.63s min=4.55s  med=10.98s  max=24.9s    p(90)=16.11s   p(95)=17.76s 
       { expected_response:true }...: avg=11.63s min=4.55s  med=10.98s  max=24.9s    p(90)=16.11s   p(95)=17.76s 
     http_req_failed................: 0.00%   ✓ 0         ✗ 12142
     http_req_receiving.............: avg=7.19ms min=59.1µs med=138.4µs max=556.67ms p(90)=1ms      p(95)=10.32ms
     http_req_sending...............: avg=2.32ms min=8.3µs  med=29.2µs  max=434.97ms p(90)=214.65µs p(95)=10.35ms
     http_req_tls_handshaking.......: avg=0s     min=0s     med=0s      max=0s       p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=11.62s min=4.55s  med=10.96s  max=24.54s   p(90)=16.1s    p(95)=17.75s 
     http_reqs......................: 12142   29.667523/s
     iteration_duration.............: avg=11.69s min=4.58s  med=11.04s  max=25s      p(90)=16.21s   p(95)=17.86s 
     iterations.....................: 12142   29.667523/s
     vus............................: 37      min=37      max=350
     vus_max........................: 350     min=350     max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/fceae70b-ac54-45fa-5ce4-8b9775cb0200/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/dee9e8f1-04a7-40b9-c431-cb0cd15e4400/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f157dad6-bacd-4a9a-0337-1755b21e5100/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  99% — ✓ 8114 / ✗ 13
     ✗ no graphql errors
      ↳  99% — ✓ 8114 / ✗ 13
     ✓ valid response structure

     checks.........................: 99.89% ✓ 24342     ✗ 26   
     data_received..................: 713 MB 1.7 MB/s
     data_sent......................: 9.6 MB 23 kB/s
     http_req_blocked...............: avg=3.28ms min=2.9µs   med=6.8µs   max=280.12ms p(90)=11.24µs p(95)=42.34µs
     http_req_connecting............: avg=3.15ms min=0s      med=0s      max=111.53ms p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=17.54s min=2.98s   med=16.64s  max=45.95s   p(90)=24.9s   p(95)=27.85s 
       { expected_response:true }...: avg=17.55s min=2.98s   med=16.66s  max=45.95s   p(90)=24.92s  p(95)=27.85s 
     http_req_failed................: 0.15%  ✓ 13        ✗ 8114 
     http_req_receiving.............: avg=9.29ms min=0s      med=183.6µs max=975.87ms p(90)=2.34ms  p(95)=14.03ms
     http_req_sending...............: avg=3.32ms min=11.59µs med=36.5µs  max=895.52ms p(90)=1.07ms  p(95)=15.97ms
     http_req_tls_handshaking.......: avg=0s     min=0s      med=0s      max=0s       p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=17.52s min=2.98s   med=16.64s  max=45.71s   p(90)=24.9s   p(95)=27.8s  
     http_reqs......................: 8127   19.626768/s
     iteration_duration.............: avg=17.64s min=2.99s   med=16.73s  max=45.97s   p(90)=25.05s  p(95)=27.96s 
     iterations.....................: 8127   19.626768/s
     vus............................: 52     min=52      max=350
     vus_max........................: 350    min=350     max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f82189f9-e1e9-4b23-3428-609ff653ce00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/fc8a772d-d219-4924-60c4-935948146100/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5db2cbfa-f030-4dba-0604-b12583bbe300/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 17172     ✗ 0    
     data_received..................: 502 MB  1.2 MB/s
     data_sent......................: 6.8 MB  16 kB/s
     http_req_blocked...............: avg=4.03ms   min=3.1µs  med=5.9µs   max=195.62ms p(90)=8.3µs    p(95)=29.45ms
     http_req_connecting............: avg=3.9ms    min=0s     med=0s      max=118.98ms p(90)=0s       p(95)=27.91ms
     http_req_duration..............: avg=25.1s    min=10.33s med=25.5s   max=28.97s   p(90)=26.71s   p(95)=27.02s 
       { expected_response:true }...: avg=25.1s    min=10.33s med=25.5s   max=28.97s   p(90)=26.71s   p(95)=27.02s 
     http_req_failed................: 0.00%   ✓ 0         ✗ 5724 
     http_req_receiving.............: avg=518.32µs min=72.3µs med=162.8µs max=56.4ms   p(90)=492.72µs p(95)=1.41ms 
     http_req_sending...............: avg=653.29µs min=13.2µs med=33.5µs  max=119.13ms p(90)=59.59µs  p(95)=2.37ms 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s       p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=25.1s    min=10.33s med=25.5s   max=28.96s   p(90)=26.71s   p(95)=27.02s 
     http_reqs......................: 5724    13.567723/s
     iteration_duration.............: avg=25.12s   min=10.34s med=25.51s  max=29.11s   p(90)=26.71s   p(95)=27.03s 
     iterations.....................: 5724    13.567723/s
     vus............................: 2       min=2       max=350
     vus_max........................: 350     min=350     max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/bcb24d85-c1c1-404a-7faf-c20edc1a2300/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ab9e6e9c-fdc0-4460-a7c4-a2a7fe64c100/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/bb2aed66-6452-4ce4-83a4-178b9464df00/public" alt="HTTP Overview" />


  </details>