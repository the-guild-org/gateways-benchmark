## Overview for: `federation-v1/constant-vus-subgraphs-delay`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. It's being executed with a constant amount of VUs over a fixed amount of time. It measure things like memory usage, CPU usage, average RPS. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was running 300 VUs over 60s


### Comparison


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b27a665d-ad3e-4562-0482-dcc83cb71800/public" alt="Comparison" />


| Gateway       | RPS ⬇️ |        Requests         |         Duration         | Notes                                                                       |
| :------------ | :----: | :---------------------: | :----------------------: | :-------------------------------------------------------------------------- |
| cosmo         |  190   | 114189 total, 0 failed  | avg: 787ms, p95: 2051ms  | ✅                                                                           |
| apollo-router |  178   | 107022 total, 0 failed  | avg: 876ms, p95: 2442ms  | ✅                                                                           |
| wundergraph   |  158   |  94985 total, 0 failed  | avg: 927ms, p95: 2585ms  | ✅                                                                           |
| hive-gateway  |  100   |  60510 total, 0 failed  | avg: 2932ms, p95: 3995ms | ✅                                                                           |
| apollo-server |   77   | 46601 total, 211 failed | avg: 3857ms, p95: 5352ms | ❌ 211 failed requests, 211 non-200 responses, 211 unexpected GraphQL errors |
| mercurius     |   57   |  34450 total, 0 failed  | avg: 5220ms, p95: 5468ms | ✅                                                                           |



<details>
  <summary>Summary for: `cosmo`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     █ setup

     checks.........................: 100.00% ✓ 342507     ✗ 0     
     data_received..................: 10 GB   17 MB/s
     data_sent......................: 136 MB  226 kB/s
     http_req_blocked...............: avg=1.22ms   min=1.34µs  med=2.95µs   max=4.89s  p(90)=4.2µs    p(95)=4.98µs 
     http_req_connecting............: avg=926.3µs  min=0s      med=0s       max=3.55s  p(90)=0s       p(95)=0s     
     http_req_duration..............: avg=786.72ms min=3.41ms  med=658.55ms max=6.71s  p(90)=1.6s     p(95)=2.05s  
       { expected_response:true }...: avg=786.72ms min=3.41ms  med=658.55ms max=6.71s  p(90)=1.6s     p(95)=2.05s  
     http_req_failed................: 0.00%   ✓ 0          ✗ 114189
     http_req_receiving.............: avg=236.51ms min=28.32µs med=77.12µs  max=6.2s   p(90)=981.1ms  p(95)=1.45s  
     http_req_sending...............: avg=23.05ms  min=7.31µs  med=13.8µs   max=4.24s  p(90)=33.98µs  p(95)=12.35ms
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s     p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=527.15ms min=3.32ms  med=497.66ms max=4.38s  p(90)=954.51ms p(95)=1.11s  
     http_reqs......................: 114189  190.044744/s
     iteration_duration.............: avg=1.56s    min=16.8ms  med=1.25s    max=10.57s p(90)=3.27s    p(95)=3.99s  
     iterations.....................: 114169  190.011458/s
     vus............................: 300     min=300      max=300 
     vus_max........................: 300     min=300      max=300 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e63eb176-f9b7-4c2a-0155-c2b40bd38f00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6b49d5d6-33f0-486e-fa2c-edf64e267e00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c3b48baa-f1ad-49be-9f3b-272fdc8c2300/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     █ setup

     checks.........................: 100.00% ✓ 321006     ✗ 0     
     data_received..................: 9.4 GB  16 MB/s
     data_sent......................: 127 MB  211 kB/s
     http_req_blocked...............: avg=1.33ms   min=1.22µs  med=3.06µs   max=3.98s  p(90)=4.51µs   p(95)=5.28µs  
     http_req_connecting............: avg=1.07ms   min=0s      med=0s       max=3.98s  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=875.83ms min=5.97ms  med=664.24ms max=7.18s  p(90)=1.96s    p(95)=2.44s   
       { expected_response:true }...: avg=875.83ms min=5.97ms  med=664.24ms max=7.18s  p(90)=1.96s    p(95)=2.44s   
     http_req_failed................: 0.00%   ✓ 0          ✗ 107022
     http_req_receiving.............: avg=349.52ms min=23.91µs med=78.09µs  max=6.3s   p(90)=1.39s    p(95)=1.92s   
     http_req_sending...............: avg=18.64ms  min=7.49µs  med=14.04µs  max=6s     p(90)=32.35µs  p(95)=306.85µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s     p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=507.66ms min=5.91ms  med=465.3ms  max=2.94s  p(90)=943.93ms p(95)=1.09s   
     http_reqs......................: 107022  178.082145/s
     iteration_duration.............: avg=1.67s    min=18.61ms med=1.31s    max=14.33s p(90)=3.57s    p(95)=4.37s   
     iterations.....................: 107002  178.048866/s
     vus............................: 300     min=300      max=300 
     vus_max........................: 300     min=300      max=300 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/abeca4ed-074f-490e-4f02-5e8747bee700/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/55a29447-2e67-4e8d-2aaf-5ab6b730c500/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/596f3043-70b9-4df1-1e4d-87d407c5cd00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     █ setup

     checks.........................: 100.00% ✓ 284895     ✗ 0    
     data_received..................: 8.3 GB  14 MB/s
     data_sent......................: 113 MB  188 kB/s
     http_req_blocked...............: avg=2.37ms   min=1.55µs  med=3.59µs   max=3.95s  p(90)=5.47µs   p(95)=6.45µs 
     http_req_connecting............: avg=2.02ms   min=0s      med=0s       max=3.95s  p(90)=0s       p(95)=0s     
     http_req_duration..............: avg=927.03ms min=7.01ms  med=711.87ms max=8.16s  p(90)=2.1s     p(95)=2.58s  
       { expected_response:true }...: avg=927.03ms min=7.01ms  med=711.87ms max=8.16s  p(90)=2.1s     p(95)=2.58s  
     http_req_failed................: 0.00%   ✓ 0          ✗ 94985
     http_req_receiving.............: avg=375.68ms min=31.71µs med=99.11µs  max=7.52s  p(90)=1.49s    p(95)=2.06s  
     http_req_sending...............: avg=29.38ms  min=6.86µs  med=17.95µs  max=4.4s   p(90)=122.03µs p(95)=28.72ms
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s     p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=521.96ms min=6.89ms  med=457.54ms max=3.85s  p(90)=993.37ms p(95)=1.16s  
     http_reqs......................: 94985   158.027936/s
     iteration_duration.............: avg=1.88s    min=20.73ms med=1.55s    max=15.34s p(90)=3.93s    p(95)=4.8s   
     iterations.....................: 94965   157.994662/s
     vus............................: 36      min=36       max=300
     vus_max........................: 300     min=300      max=300
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f2143dd3-555d-493f-1189-4b2097f8cc00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1a54f647-0892-4942-79d3-f97ee91ec100/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ed85eaa0-3f44-4810-d6f0-367412028e00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `hive-gateway`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     █ setup

     checks.........................: 100.00% ✓ 181470     ✗ 0    
     data_received..................: 5.3 GB  8.8 MB/s
     data_sent......................: 72 MB   119 kB/s
     http_req_blocked...............: avg=61.64µs  min=1.21µs   med=3.6µs   max=145.34ms p(90)=5.25µs   p(95)=5.91µs  
     http_req_connecting............: avg=36.22µs  min=0s       med=0s      max=32.31ms  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=2.93s    min=11.85ms  med=2.81s   max=41.08s   p(90)=3.36s    p(95)=3.99s   
       { expected_response:true }...: avg=2.93s    min=11.85ms  med=2.81s   max=41.08s   p(90)=3.36s    p(95)=3.99s   
     http_req_failed................: 0.00%   ✓ 0          ✗ 60510
     http_req_receiving.............: avg=3.4ms    min=38.18µs  med=80.57µs max=491.5ms  p(90)=594.69µs p(95)=7.02ms  
     http_req_sending...............: avg=690.63µs min=7.45µs   med=16.99µs max=408.51ms p(90)=36.14µs  p(95)=140.03µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=2.92s    min=11.78ms  med=2.81s   max=41.08s   p(90)=3.35s    p(95)=3.98s   
     http_reqs......................: 60510   100.400301/s
     iteration_duration.............: avg=2.98s    min=164.21ms med=2.86s   max=41.14s   p(90)=3.43s    p(95)=4.06s   
     iterations.....................: 60490   100.367116/s
     vus............................: 155     min=155      max=300
     vus_max........................: 300     min=300      max=300
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6d1d26ad-3b6f-4bb7-6a56-32d4edaadd00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1717d6ac-47ad-485f-9224-2290d507c200/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c1d59a84-123d-4366-3d95-59a7c7dbfa00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  99% — ✓ 46370 / ✗ 211
     ✗ no graphql errors
      ↳  99% — ✓ 46370 / ✗ 211
     ✓ valid response structure

     █ setup

     checks.........................: 99.69% ✓ 139110    ✗ 422  
     data_received..................: 4.1 GB 6.8 MB/s
     data_sent......................: 55 MB  92 kB/s
     http_req_blocked...............: avg=54.98µs  min=1.53µs   med=3.72µs   max=31.21ms  p(90)=5.45µs   p(95)=6.31µs 
     http_req_connecting............: avg=47.52µs  min=0s       med=0s       max=30.62ms  p(90)=0s       p(95)=0s     
     http_req_duration..............: avg=3.85s    min=12.72ms  med=3.34s    max=1m0s     p(90)=4.81s    p(95)=5.35s  
       { expected_response:true }...: avg=3.6s     min=12.72ms  med=3.34s    max=59.98s   p(90)=4.78s    p(95)=5.29s  
     http_req_failed................: 0.45%  ✓ 211       ✗ 46390
     http_req_receiving.............: avg=335.84µs min=0s       med=112.69µs max=195.2ms  p(90)=179.74µs p(95)=242.4µs
     http_req_sending...............: avg=126.42µs min=8.25µs   med=18.75µs  max=203.35ms p(90)=34.24µs  p(95)=43.57µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s       p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=3.85s    min=12.6ms   med=3.34s    max=1m0s     p(90)=4.81s    p(95)=5.35s  
     http_reqs......................: 46601  77.232114/s
     iteration_duration.............: avg=3.87s    min=131.93ms med=3.36s    max=1m0s     p(90)=4.83s    p(95)=5.36s  
     iterations.....................: 46581  77.198968/s
     vus............................: 73     min=73      max=300
     vus_max........................: 300    min=300     max=300
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/acf4ede3-7864-44ad-2592-c18f7b285200/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b75bd851-4a44-4e7e-80a5-7eed049b1000/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/db8fa799-ed1a-4c64-8b9c-290441feba00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     █ setup

     checks.........................: 100.00% ✓ 103290    ✗ 0    
     data_received..................: 3.0 GB  5.0 MB/s
     data_sent......................: 41 MB   68 kB/s
     http_req_blocked...............: avg=57.33µs  min=1.5µs    med=3.71µs   max=17.53ms  p(90)=5.02µs   p(95)=5.59µs  
     http_req_connecting............: avg=51.2µs   min=0s       med=0s       max=17.49ms  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=5.22s    min=14.84ms  med=5.3s     max=11.21s   p(90)=5.41s    p(95)=5.46s   
       { expected_response:true }...: avg=5.22s    min=14.84ms  med=5.3s     max=11.21s   p(90)=5.41s    p(95)=5.46s   
     http_req_failed................: 0.00%   ✓ 0         ✗ 34450
     http_req_receiving.............: avg=225.18µs min=39.98µs  med=116.57µs max=238.69ms p(90)=164.67µs p(95)=185.44µs
     http_req_sending...............: avg=38.32µs  min=8.66µs   med=21.15µs  max=46.38ms  p(90)=33.6µs   p(95)=38.19µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=5.22s    min=14.73ms  med=5.3s     max=11.21s   p(90)=5.41s    p(95)=5.46s   
     http_reqs......................: 34450   57.212784/s
     iteration_duration.............: avg=5.23s    min=369.47ms med=5.31s    max=11.22s   p(90)=5.42s    p(95)=5.47s   
     iterations.....................: 34430   57.179569/s
     vus............................: 52      min=52      max=300
     vus_max........................: 300     min=300     max=300
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8a89bdb1-bb0c-4b72-1855-3b199c9cdb00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/86aa33e2-b12a-4639-5e97-69e851387400/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1a1b9252-fe22-4551-bf86-996e91112d00/public" alt="HTTP Overview" />


  </details>