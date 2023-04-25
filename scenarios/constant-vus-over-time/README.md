## Overview for scenario: `constant-vus-over-time`


This scenario runs 4 servics and a GraphQL gatway with Federation spec, and runs a heavy query. It's being executed with a constant amount of VUs over a fixed amount of time. It measure things like memory usage, CPU usage, average RPS. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was trying to reach 100 concurrent VUs over 60s


### Comparison


| Gateway                  | RPS ⬇️ |       Requests        |         Duration         |
| :----------------------- | :----: | :-------------------: | :----------------------: |
| wundergraph              |  1129  | 67798 total, 0 failed |  avg: 88ms, p95: 144ms   |
| apollo-router            |  103   | 6249 total, 0 failed  | avg: 964ms, p95: 1704ms  |
| mercurius                |   87   | 5283 total, 0 failed  | avg: 1140ms, p95: 1534ms |
| apollo-server            |   70   | 4314 total, 0 failed  | avg: 1403ms, p95: 1907ms |
| apollo-gateway-with-yoga |   61   | 3720 total, 0 failed  | avg: 1628ms, p95: 2425ms |
| mesh                     |   35   | 2203 total, 0 failed  | avg: 2757ms, p95: 4351ms |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 203394      ✗ 0    
     data_received..................: 329 MB  5.5 MB/s
     data_sent......................: 81 MB   1.3 MB/s
   ✓ expected_result................: 0.00%   ✓ 0           ✗ 0    
     http_req_blocked...............: avg=11.09µs min=700ns   med=1.5µs   max=13.49ms  p(90)=2.29µs   p(95)=2.8µs   
     http_req_connecting............: avg=8.36µs  min=0s      med=0s      max=13.46ms  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=87.99ms min=11.27ms med=82.96ms max=260.22ms p(90)=126.18ms p(95)=143.81ms
       { expected_response:true }...: avg=87.99ms min=11.27ms med=82.96ms max=260.22ms p(90)=126.18ms p(95)=143.81ms
   ✓ http_req_failed................: 0.00%   ✓ 0           ✗ 67798
     http_req_receiving.............: avg=335.8µs min=13.2µs  med=29.4µs  max=94.56ms  p(90)=146.69µs p(95)=319.89µs
     http_req_sending...............: avg=80.87µs min=5.4µs   med=8.8µs   max=66.33ms  p(90)=17.5µs   p(95)=39.91µs 
     http_req_tls_handshaking.......: avg=0s      min=0s      med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=87.57ms min=11.19ms med=82.68ms max=260.17ms p(90)=125.38ms p(95)=142.6ms 
     http_reqs......................: 67798   1129.370587/s
     iteration_duration.............: avg=88.49ms min=11.53ms med=83.45ms max=260.62ms p(90)=126.77ms p(95)=144.4ms 
     iterations.....................: 67798   1129.370587/s
   ✓ no_errors......................: 0.00%   ✓ 0           ✗ 0    
     vus............................: 100     min=100       max=100
     vus_max........................: 100     min=100       max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/cb05f091-8c93-494c-96db-1f415dadf400/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8fdb52aa-7776-458d-90ff-6489c5353400/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 18747      ✗ 0    
     data_received..................: 31 MB   505 kB/s
     data_sent......................: 7.4 MB  123 kB/s
   ✓ expected_result................: 0.00%   ✓ 0          ✗ 0    
     http_req_blocked...............: avg=46.9µs   min=1.1µs    med=2.29µs   max=39.01ms p(90)=3.2µs   p(95)=4.1µs  
     http_req_connecting............: avg=30.55µs  min=0s       med=0s       max=7.48ms  p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=963.95ms min=189.64ms med=884.27ms max=3.92s   p(90)=1.42s   p(95)=1.7s   
       { expected_response:true }...: avg=963.95ms min=189.64ms med=884.27ms max=3.92s   p(90)=1.42s   p(95)=1.7s   
   ✓ http_req_failed................: 0.00%   ✓ 0          ✗ 6249 
     http_req_receiving.............: avg=62.18µs  min=22.7µs   med=58.1µs   max=6.07ms  p(90)=77.42µs p(95)=84.3µs 
     http_req_sending...............: avg=35.95µs  min=8µs      med=14.8µs   max=20.88ms p(90)=27.4µs  p(95)=31.76µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s      p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=963.85ms min=189.58ms med=884.17ms max=3.92s   p(90)=1.42s   p(95)=1.7s   
     http_reqs......................: 6249    103.358698/s
     iteration_duration.............: avg=964.33ms min=189.96ms med=884.56ms max=3.92s   p(90)=1.42s   p(95)=1.7s   
     iterations.....................: 6249    103.358698/s
   ✓ no_errors......................: 0.00%   ✓ 0          ✗ 0    
     vus............................: 100     min=100      max=100
     vus_max........................: 100     min=100      max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0e10a65d-8774-4b00-a2a4-149e3eb0f700/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1fc94967-ff82-4e8e-724f-b6acffcdb100/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 15849     ✗ 0    
     data_received..................: 26 MB   428 kB/s
     data_sent......................: 6.3 MB  104 kB/s
   ✓ expected_result................: 0.00%   ✓ 0         ✗ 0    
     http_req_blocked...............: avg=171.37µs min=1µs      med=2.2µs   max=28.5ms  p(90)=3µs     p(95)=3.7µs  
     http_req_connecting............: avg=167.49µs min=0s       med=0s      max=28.36ms p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=1.13s    min=389.93ms med=1.08s   max=3.38s   p(90)=1.23s   p(95)=1.53s  
       { expected_response:true }...: avg=1.13s    min=389.93ms med=1.08s   max=3.38s   p(90)=1.23s   p(95)=1.53s  
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 5283 
     http_req_receiving.............: avg=52.84µs  min=20.2µs   med=49.39µs max=3.71ms  p(90)=71.57µs p(95)=77.59µs
     http_req_sending...............: avg=28.96µs  min=6.8µs    med=13.7µs  max=3.64ms  p(90)=26.5µs  p(95)=31µs   
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s      p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=1.13s    min=389.88ms med=1.08s   max=3.38s   p(90)=1.23s   p(95)=1.53s  
     http_reqs......................: 5283    87.511365/s
     iteration_duration.............: avg=1.14s    min=390.15ms med=1.08s   max=3.39s   p(90)=1.23s   p(95)=1.53s  
     iterations.....................: 5283    87.511365/s
   ✓ no_errors......................: 0.00%   ✓ 0         ✗ 0    
     vus............................: 100     min=100     max=100
     vus_max........................: 100     min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/58273b6c-d283-423d-ea56-2ff0bc28d700/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9f956225-e7d8-461f-f077-be0904931300/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 4313 / ✗ 1
     ✗ expected_result
      ↳  99% — ✓ 4313 / ✗ 1

     checks.........................: 99.98% ✓ 12940     ✗ 2    
     data_received..................: 22 MB  359 kB/s
     data_sent......................: 5.1 MB 84 kB/s
   ✓ expected_result................: 0.00%  ✓ 0         ✗ 0    
     http_req_blocked...............: avg=110.81µs min=1.1µs    med=2µs     max=23.91ms p(90)=2.9µs   p(95)=3.7µs  
     http_req_connecting............: avg=106.34µs min=0s       med=0s      max=23.88ms p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=1.4s     min=824.57ms med=1.32s   max=3.47s   p(90)=1.65s   p(95)=1.9s   
       { expected_response:true }...: avg=1.4s     min=824.57ms med=1.32s   max=3.47s   p(90)=1.65s   p(95)=1.9s   
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 4314 
     http_req_receiving.............: avg=57.55µs  min=22.7µs   med=49.19µs max=18.45ms p(90)=68.36µs p(95)=75.99µs
     http_req_sending...............: avg=36.7µs   min=7.1µs    med=12.2µs  max=5.09ms  p(90)=25.6µs  p(95)=29.53µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s      p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=1.4s     min=824.53ms med=1.32s   max=3.47s   p(90)=1.65s   p(95)=1.9s   
     http_reqs......................: 4314   70.925876/s
     iteration_duration.............: avg=1.4s     min=824.85ms med=1.32s   max=3.47s   p(90)=1.65s   p(95)=1.9s   
     iterations.....................: 4314   70.925876/s
   ✓ no_errors......................: 0.00%  ✓ 0         ✗ 0    
     vus............................: 100    min=100     max=100
     vus_max........................: 100    min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b3a7bdba-5543-4dc6-177a-4de0d0434800/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f42b973a-3369-49ca-55ad-1717bcb02f00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 3712 / ✗ 8
     ✗ expected_result
      ↳  99% — ✓ 3715 / ✗ 5

     checks.........................: 99.88% ✓ 11147     ✗ 13   
     data_received..................: 18 MB  301 kB/s
     data_sent......................: 4.4 MB 73 kB/s
   ✓ expected_result................: 0.00%  ✓ 0         ✗ 0    
     http_req_blocked...............: avg=229.15µs min=1.4µs    med=2.2µs  max=18.69ms  p(90)=3.3µs   p(95)=9.63µs
     http_req_connecting............: avg=222.3µs  min=0s       med=0s     max=18.65ms  p(90)=0s      p(95)=0s    
     http_req_duration..............: avg=1.62s    min=872.96ms med=1.51s  max=4.09s    p(90)=1.92s   p(95)=2.42s 
       { expected_response:true }...: avg=1.62s    min=872.96ms med=1.51s  max=4.09s    p(90)=1.92s   p(95)=2.42s 
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 3720 
     http_req_receiving.............: avg=54.32µs  min=22.2µs   med=50.9µs max=744.95µs p(90)=76.51µs p(95)=86µs  
     http_req_sending...............: avg=69.53µs  min=8.2µs    med=13.3µs max=12.6ms   p(90)=28.6µs  p(95)=34.6µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s      p(95)=0s    
     http_req_waiting...............: avg=1.62s    min=872.87ms med=1.51s  max=4.09s    p(90)=1.92s   p(95)=2.42s 
     http_reqs......................: 3720   61.109315/s
     iteration_duration.............: avg=1.62s    min=873.23ms med=1.51s  max=4.1s     p(90)=1.92s   p(95)=2.42s 
     iterations.....................: 3720   61.109315/s
   ✓ no_errors......................: 0.00%  ✓ 0         ✗ 0    
     vus............................: 100    min=100     max=100
     vus_max........................: 100    min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b74d19bf-4a95-4356-56fc-c828b36bd600/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9ea7c000-1d57-490d-fe67-c46079b70b00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 2190 / ✗ 13
     ✓ expected_result

     checks.........................: 99.80% ✓ 6596      ✗ 13   
     data_received..................: 11 MB  176 kB/s
     data_sent......................: 2.6 MB 43 kB/s
   ✓ expected_result................: 0.00%  ✓ 0         ✗ 0    
     http_req_blocked...............: avg=384.4µs  min=1.9µs  med=2.7µs  max=24.7ms  p(90)=4.4µs   p(95)=28.82µs 
     http_req_connecting............: avg=367.44µs min=0s     med=0s     max=24.66ms p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=2.75s    min=1.42s  med=2.49s  max=6.47s   p(90)=3.81s   p(95)=4.35s   
       { expected_response:true }...: avg=2.75s    min=1.42s  med=2.49s  max=6.47s   p(90)=3.81s   p(95)=4.35s   
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 2203 
     http_req_receiving.............: avg=68.65µs  min=29.8µs med=55.2µs max=7.65ms  p(90)=93.58µs p(95)=109.5µs 
     http_req_sending...............: avg=103.06µs min=12.1µs med=17.3µs max=21.8ms  p(90)=42.68µs p(95)=157.02µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=2.75s    min=1.42s  med=2.49s  max=6.47s   p(90)=3.81s   p(95)=4.35s   
     http_reqs......................: 2203   35.930789/s
     iteration_duration.............: avg=2.75s    min=1.42s  med=2.49s  max=6.47s   p(90)=3.81s   p(95)=4.35s   
     iterations.....................: 2203   35.930789/s
   ✓ no_errors......................: 0.00%  ✓ 0         ✗ 0    
     vus............................: 47     min=47      max=100
     vus_max........................: 100    min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0fd1031f-fc15-4029-9ac2-ce34fbe96e00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/64b210f2-30fa-46f5-6d6e-9dc4ce73b800/public" alt="HTTP Overview" />


  </details>