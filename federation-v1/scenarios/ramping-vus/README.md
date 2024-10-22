## Overview for: `federation-v1/ramping-vus`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. We are running a heavy load of concurrent VUs to measure response time and other stats, during stress. It measure things like memory usage, CPU usage, response times. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was trying to reach 2000 concurrent VUs over 90s


### Comparison


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0201a086-f6ce-4d81-99b6-8d52b75d6700/public" alt="Comparison" />


| Gateway       | duration(p95)⬇️ |  RPS  |         Requests         |                       Durations                       | Notes                                                                          |
| :------------ | :-------------: | :---: | :----------------------: | :---------------------------------------------------: | :----------------------------------------------------------------------------- |
| cosmo         |     5798ms      |  185  |  112897 total, 0 failed  |  avg: 2380ms, p95: 5799ms, max: 14188ms, med: 1935ms  | ✅                                                                              |
| apollo-router |     6972ms      |  171  | 104852 total, 47 failed  |  avg: 2674ms, p95: 6972ms, max: 24279ms, med: 2032ms  | ❌ 47 failed requests, 47 non-200 responses, 47 unexpected GraphQL errors       |
| wundergraph   |     7078ms      |  163  |  99664 total, 0 failed   |  avg: 2683ms, p95: 7079ms, max: 18725ms, med: 2118ms  | ✅                                                                              |
| hive-gateway  |     59944ms     |  100  | 63651 total, 4108 failed | avg: 9674ms, p95: 59945ms, max: 61661ms, med: 6714ms  | ❌ 4108 failed requests, 4108 non-200 responses, 4108 unexpected GraphQL errors |
| apollo-server |     60000ms     |  85   | 54427 total, 7122 failed | avg: 11817ms, p95: 60001ms, max: 60655ms, med: 4071ms | ❌ 7122 failed requests, 7122 non-200 responses, 7122 unexpected GraphQL errors |



<details>
  <summary>Summary for: `cosmo`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     █ setup

     checks.........................: 100.00% ✓ 338631     ✗ 0     
     data_received..................: 9.9 GB  16 MB/s
     data_sent......................: 134 MB  220 kB/s
     http_req_blocked...............: avg=38.89ms min=1.43µs  med=3.28µs  max=12.25s p(90)=4.9µs    p(95)=6.86µs  
     http_req_connecting............: avg=37.16ms min=0s      med=0s      max=12.25s p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=2.37s   min=3.6ms   med=1.93s   max=14.18s p(90)=4.91s    p(95)=5.79s   
       { expected_response:true }...: avg=2.37s   min=3.6ms   med=1.93s   max=14.18s p(90)=4.91s    p(95)=5.79s   
     http_req_failed................: 0.00%   ✓ 0          ✗ 112897
     http_req_receiving.............: avg=309ms   min=29.34µs med=73.26µs max=11.01s p(90)=971.42ms p(95)=2.04s   
     http_req_sending...............: avg=63.46ms min=7.49µs  med=14.88µs max=9.61s  p(90)=106.04µs p(95)=157.26ms
     http_req_tls_handshaking.......: avg=0s      min=0s      med=0s      max=0s     p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=2s      min=3.51ms  med=1.54s   max=11.89s p(90)=4.48s    p(95)=5.18s   
     http_reqs......................: 112897  185.04393/s
     iteration_duration.............: avg=5.37s   min=8.93ms  med=4.32s   max=40.72s p(90)=11.63s   p(95)=13.97s  
     iterations.....................: 112877  185.011149/s
     vus............................: 4       min=4        max=1999
     vus_max........................: 2000    min=2000     max=2000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7bedd227-3f06-4eaf-c55b-cd6a371b5d00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/932bf9ee-ff14-43ad-dc87-fbd1b30f7500/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1cf9b554-23eb-422c-7c07-e4a5bb9a4a00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  99% — ✓ 104785 / ✗ 47
     ✗ no graphql errors
      ↳  99% — ✓ 104785 / ✗ 47
     ✓ valid response structure

     █ setup

     checks.........................: 99.97% ✓ 314355     ✗ 94    
     data_received..................: 9.2 GB 15 MB/s
     data_sent......................: 124 MB 203 kB/s
     http_req_blocked...............: avg=44ms     min=1.53µs  med=3.67µs  max=18.12s p(90)=5.76µs   p(95)=7.97µs
     http_req_connecting............: avg=41.38ms  min=0s      med=0s      max=18.12s p(90)=0s       p(95)=0s    
     http_req_duration..............: avg=2.67s    min=0s      med=2.03s   max=24.27s p(90)=5.89s    p(95)=6.97s 
       { expected_response:true }...: avg=2.67s    min=7.6ms   med=2.03s   max=24.27s p(90)=5.89s    p(95)=6.96s 
     http_req_failed................: 0.04%  ✓ 47         ✗ 104805
     http_req_receiving.............: avg=648.74ms min=0s      med=85.15µs max=20.87s p(90)=2.04s    p(95)=3.98s 
     http_req_sending...............: avg=64.6ms   min=0s      med=16.87µs max=13.64s p(90)=127.48µs p(95)=85.8ms
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s     p(90)=0s       p(95)=0s    
     http_req_waiting...............: avg=1.96s    min=0s      med=1.43s   max=12.23s p(90)=4.72s    p(95)=5.81s 
     http_reqs......................: 104852 171.438676/s
     iteration_duration.............: avg=5.84s    min=22.96ms med=4.57s   max=38.22s p(90)=12.93s   p(95)=16.02s
     iterations.....................: 104832 171.405975/s
     vus............................: 21     min=21       max=1999
     vus_max........................: 2000   min=2000     max=2000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8d325dbc-5a60-4a6b-acaf-c0355cb18c00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c6126192-23d3-4574-11d7-6637bd2f0800/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b99f3234-0995-41ac-2deb-9eb8c7481800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     █ setup

     checks.........................: 100.00% ✓ 298932     ✗ 0     
     data_received..................: 8.7 GB  14 MB/s
     data_sent......................: 118 MB  194 kB/s
     http_req_blocked...............: avg=48.8ms   min=1.3µs   med=3.24µs  max=13.5s  p(90)=4.81µs   p(95)=9.84µs 
     http_req_connecting............: avg=47.37ms  min=0s      med=0s      max=13.5s  p(90)=0s       p(95)=0s     
     http_req_duration..............: avg=2.68s    min=5.51ms  med=2.11s   max=18.72s p(90)=5.56s    p(95)=7.07s  
       { expected_response:true }...: avg=2.68s    min=5.51ms  med=2.11s   max=18.72s p(90)=5.56s    p(95)=7.07s  
     http_req_failed................: 0.00%   ✓ 0          ✗ 99664 
     http_req_receiving.............: avg=517.75ms min=28.94µs med=74.84µs max=18.18s p(90)=1.59s    p(95)=3.26s  
     http_req_sending...............: avg=66.7ms   min=7.03µs  med=14.55µs max=13.17s p(90)=116.79µs p(95)=85.28ms
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s     p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=2.09s    min=5.42ms  med=1.6s    max=17.27s p(90)=4.61s    p(95)=5.64s  
     http_reqs......................: 99664   163.340828/s
     iteration_duration.............: avg=6.08s    min=14.32ms med=4.78s   max=43.3s  p(90)=13.09s   p(95)=16.2s  
     iterations.....................: 99644   163.30805/s
     vus............................: 5       min=5        max=1999
     vus_max........................: 2000    min=2000     max=2000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/038d425f-2e18-4809-d11d-8dce46c32200/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/66e12927-0d25-4b50-3cac-fac8c004d700/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/427025b9-1e17-41f5-c0f4-b5e6f7196900/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `hive-gateway`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  93% — ✓ 59523 / ✗ 4108
     ✗ no graphql errors
      ↳  93% — ✓ 59523 / ✗ 4108
     ✓ valid response structure

     █ setup

     checks.........................: 95.60% ✓ 178569     ✗ 8216  
     data_received..................: 5.2 GB 8.3 MB/s
     data_sent......................: 76 MB  121 kB/s
     http_req_blocked...............: avg=3.53ms min=1.65µs  med=4.37µs  max=657.21ms p(90)=11.48µs  p(95)=2.14ms
     http_req_connecting............: avg=3.4ms  min=0s      med=0s      max=656.97ms p(90)=0s       p(95)=1.6ms 
     http_req_duration..............: avg=9.67s  min=13.46ms med=6.71s   max=1m1s     p(90)=10.8s    p(95)=59.94s
       { expected_response:true }...: avg=6.2s   min=13.46ms med=6.59s   max=59.77s   p(90)=8.48s    p(95)=10.33s
     http_req_failed................: 6.45%  ✓ 4108       ✗ 59543 
     http_req_receiving.............: avg=5.6ms  min=0s      med=82.03µs max=1.2s     p(90)=561.02µs p(95)=4.8ms 
     http_req_sending...............: avg=2.96ms min=8.6µs   med=21.38µs max=1.09s    p(90)=129.7µs  p(95)=6.75ms
     http_req_tls_handshaking.......: avg=0s     min=0s      med=0s      max=0s       p(90)=0s       p(95)=0s    
     http_req_waiting...............: avg=9.66s  min=13.37ms med=6.7s    max=1m1s     p(90)=10.79s   p(95)=59.92s
     http_reqs......................: 63651  100.438212/s
     iteration_duration.............: avg=9.76s  min=63.64ms med=6.78s   max=1m1s     p(90)=10.89s   p(95)=1m0s  
     iterations.....................: 63631  100.406653/s
     vus............................: 200    min=50       max=1999
     vus_max........................: 2000   min=2000     max=2000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b8ebe74f-7647-4779-abe5-b0702138ba00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/070e6b0e-7fec-479a-1aae-f543cde60500/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/26b887f7-b73b-48d5-3e8a-045899486200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  86% — ✓ 47285 / ✗ 7122
     ✗ no graphql errors
      ↳  86% — ✓ 47285 / ✗ 7122
     ✓ valid response structure

     █ setup

     checks.........................: 90.87% ✓ 141855    ✗ 14244 
     data_received..................: 4.2 GB 6.6 MB/s
     data_sent......................: 65 MB  102 kB/s
     http_req_blocked...............: avg=928.37µs min=1.46µs  med=3.29µs  max=244.72ms p(90)=295.24µs p(95)=889.61µs
     http_req_connecting............: avg=900.62µs min=0s      med=0s      max=241.31ms p(90)=236.66µs p(95)=771.13µs
     http_req_duration..............: avg=11.81s   min=12.37ms med=4.07s   max=1m0s     p(90)=59.99s   p(95)=1m0s    
       { expected_response:true }...: avg=4.6s     min=12.37ms med=3.79s   max=1m0s     p(90)=6.13s    p(95)=6.88s   
     http_req_failed................: 13.08% ✓ 7122      ✗ 47305 
     http_req_receiving.............: avg=678.89µs min=0s      med=98.9µs  max=402.73ms p(90)=182.08µs p(95)=335.64µs
     http_req_sending...............: avg=471.07µs min=8.23µs  med=15.88µs max=313.26ms p(90)=50.78µs  p(95)=117.09µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=11.81s   min=12.26ms med=4.06s   max=1m0s     p(90)=59.99s   p(95)=1m0s    
     http_reqs......................: 54427  85.755699/s
     iteration_duration.............: avg=11.83s   min=63.76ms med=4.08s   max=1m0s     p(90)=1m0s     p(95)=1m0s    
     iterations.....................: 54407  85.724187/s
     vus............................: 5      min=5       max=2000
     vus_max........................: 2000   min=2000    max=2000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/87310a1f-fadd-4064-40a6-a490a747b600/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/eff661f5-a33d-4fb8-f468-6686991aa100/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/dd1db179-d40d-4a1e-1fc9-703d1a530a00/public" alt="HTTP Overview" />


  </details>