## Overview for: `constant-vus-over-time`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. It's being executed with a constant amount of VUs over a fixed amount of time. It measure things like memory usage, CPU usage, average RPS. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was running 300 VUs over 600s


### Comparison


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1612add4-3b96-4eb0-090c-de9875eba900/public" alt="Comparison" />


| Gateway              | RPS ⬇️ |        Requests        |         Duration         | Notes |
| :------------------- | :----: | :--------------------: | :----------------------: | :---- |
| apollo-router        |  174   | 104611 total, 0 failed | avg: 936ms, p95: 2595ms  | ✅     |
| wundergraph          |  167   | 100739 total, 0 failed | avg: 888ms, p95: 2545ms  | ✅     |
| mesh-bun             |   97   | 58975 total, 0 failed  | avg: 3028ms, p95: 3217ms | ✅     |
| mesh-supergraph      |   84   | 50883 total, 0 failed  | avg: 3504ms, p95: 4185ms | ✅     |
| apollo-server-node16 |   66   | 39806 total, 0 failed  | avg: 4517ms, p95: 6302ms | ✅     |
| apollo-server        |   65   | 39660 total, 0 failed  | avg: 4537ms, p95: 6397ms | ✅     |
| mesh                 |   52   | 31539 total, 0 failed  | avg: 5689ms, p95: 7007ms | ✅     |
| mercurius            |   49   | 29850 total, 0 failed  | avg: 6029ms, p95: 6589ms | ✅     |



<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 313833     ✗ 0     
     data_received..................: 9.2 GB  15 MB/s
     data_sent......................: 124 MB  207 kB/s
     http_req_blocked...............: avg=1.2ms    min=1.62µs  med=3.51µs   max=4.1s   p(90)=5.79µs   p(95)=6.85µs
     http_req_connecting............: avg=841.65µs min=0s      med=0s       max=4.1s   p(90)=0s       p(95)=0s    
     http_req_duration..............: avg=936.02ms min=9.06ms  med=708.37ms max=9.1s   p(90)=2.03s    p(95)=2.59s 
       { expected_response:true }...: avg=936.02ms min=9.06ms  med=708.37ms max=9.1s   p(90)=2.03s    p(95)=2.59s 
     http_req_failed................: 0.00%   ✓ 0          ✗ 104611
     http_req_receiving.............: avg=379.49ms min=23.09µs med=80.07µs  max=7.69s  p(90)=1.46s    p(95)=2.04s 
     http_req_sending...............: avg=20.32ms  min=7.43µs  med=15.67µs  max=5.31s  p(90)=40.62µs  p(95)=8.87ms
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s     p(90)=0s       p(95)=0s    
     http_req_waiting...............: avg=536.2ms  min=8.7ms   med=500.72ms max=3.13s  p(90)=956.79ms p(95)=1.12s 
     http_reqs......................: 104611  174.098575/s
     iteration_duration.............: avg=1.7s     min=21.77ms med=1.35s    max=12.79s p(90)=3.66s    p(95)=4.49s 
     iterations.....................: 104611  174.098575/s
     vus............................: 300     min=300      max=300 
     vus_max........................: 300     min=300      max=300 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/958bae9e-f0c4-4b10-405e-b3f97d6a5100/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7c3250d4-4de3-46db-461f-fa9bc9d1f500/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/264c7cbd-4239-4170-857c-455c1557c100/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 302217     ✗ 0     
     data_received..................: 8.8 GB  15 MB/s
     data_sent......................: 120 MB  199 kB/s
     http_req_blocked...............: avg=1.83ms   min=1.46µs  med=3.37µs   max=3.85s  p(90)=5.13µs   p(95)=6.25µs 
     http_req_connecting............: avg=1.43ms   min=0s      med=0s       max=3.85s  p(90)=0s       p(95)=0s     
     http_req_duration..............: avg=888.14ms min=9.58ms  med=677.78ms max=8.73s  p(90)=1.97s    p(95)=2.54s  
       { expected_response:true }...: avg=888.14ms min=9.58ms  med=677.78ms max=8.73s  p(90)=1.97s    p(95)=2.54s  
     http_req_failed................: 0.00%   ✓ 0          ✗ 100739
     http_req_receiving.............: avg=348.13ms min=24.3µs  med=78.29µs  max=7.87s  p(90)=1.36s    p(95)=2s     
     http_req_sending...............: avg=27.23ms  min=6.36µs  med=14.83µs  max=5.63s  p(90)=86.71µs  p(95)=22.08ms
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s     p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=512.77ms min=8.81ms  med=462.34ms max=3.36s  p(90)=964.21ms p(95)=1.11s  
     http_reqs......................: 100739  167.705241/s
     iteration_duration.............: avg=1.77s    min=19.04ms med=1.42s    max=13.43s p(90)=3.81s    p(95)=4.62s  
     iterations.....................: 100739  167.705241/s
     vus............................: 300     min=300      max=300 
     vus_max........................: 300     min=300      max=300 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/78c5fb1a-55bd-4f5f-6a5a-e73eefce7a00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4766fff0-2eb1-4c94-f123-167d8954bc00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d97b3986-c712-4c1b-19b5-91aca9776400/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 176925    ✗ 0    
     data_received..................: 5.2 GB  8.6 MB/s
     data_sent......................: 70 MB   116 kB/s
     http_req_blocked...............: avg=35.34µs  min=1.26µs   med=2.64µs  max=146.06ms p(90)=4.36µs   p(95)=5.24µs 
     http_req_connecting............: avg=23.26µs  min=0s       med=0s      max=24.23ms  p(90)=0s       p(95)=0s     
     http_req_duration..............: avg=3.02s    min=306.98ms med=2.95s   max=6.72s    p(90)=3.1s     p(95)=3.21s  
       { expected_response:true }...: avg=3.02s    min=306.98ms med=2.95s   max=6.72s    p(90)=3.1s     p(95)=3.21s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 58975
     http_req_receiving.............: avg=7.83ms   min=30.11µs  med=77.25µs max=1.78s    p(90)=270.29µs p(95)=2.65ms 
     http_req_sending...............: avg=514.86µs min=7.42µs   med=13.15µs max=998.98ms p(90)=25.78µs  p(95)=59.41µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s       p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=3.01s    min=306.63ms med=2.95s   max=6.47s    p(90)=3.09s    p(95)=3.16s  
     http_reqs......................: 58975   97.888401/s
     iteration_duration.............: avg=3.05s    min=328.79ms med=2.98s   max=6.73s    p(90)=3.16s    p(95)=3.31s  
     iterations.....................: 58975   97.888401/s
     vus............................: 109     min=109     max=300
     vus_max........................: 300     min=300     max=300
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d6a62b77-50e6-404f-4452-cfdb08f4eb00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ab7135f6-9f92-4046-2976-3a0f4513ee00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/96c113ae-cfd1-416c-cefe-531ac3745400/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 152649    ✗ 0    
     data_received..................: 4.5 GB  7.4 MB/s
     data_sent......................: 60 MB   100 kB/s
     http_req_blocked...............: avg=79.92µs  min=1.23µs  med=3.82µs  max=83.67ms  p(90)=5.86µs p(95)=6.79µs 
     http_req_connecting............: avg=62.41µs  min=0s      med=0s      max=45.17ms  p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=3.5s     min=1.81s   med=3.49s   max=7.19s    p(90)=4.01s  p(95)=4.18s  
       { expected_response:true }...: avg=3.5s     min=1.81s   med=3.49s   max=7.19s    p(90)=4.01s  p(95)=4.18s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 50883
     http_req_receiving.............: avg=4.27ms   min=28.78µs med=86.93µs max=670.42ms p(90)=3.2ms  p(95)=14.18ms
     http_req_sending...............: avg=483.86µs min=6.1µs   med=18.73µs max=686.93ms p(90)=34.7µs p(95)=56.17µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s       p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=3.49s    min=1.81s   med=3.48s   max=7.18s    p(90)=4s     p(95)=4.17s  
     http_reqs......................: 50883   84.460408/s
     iteration_duration.............: avg=3.54s    min=1.83s   med=3.52s   max=7.2s     p(90)=4.06s  p(95)=4.24s  
     iterations.....................: 50883   84.460408/s
     vus............................: 95      min=95      max=300
     vus_max........................: 300     min=300     max=300
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3a962491-3aa2-472e-ba7f-344857e14b00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a0f9d685-741a-47c0-d72f-b0e3fe4abb00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d6f14b9e-59d6-4dcc-ea3c-6871578c9600/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server-node16`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 119418    ✗ 0    
     data_received..................: 3.5 GB  5.8 MB/s
     data_sent......................: 47 MB   78 kB/s
     http_req_blocked...............: avg=17.06µs  min=1.3µs   med=2.76µs  max=161.34ms p(90)=4.49µs   p(95)=5.38µs  
     http_req_connecting............: avg=7.98µs   min=0s      med=0s      max=21.59ms  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=4.51s    min=2.02s   med=4.23s   max=9.12s    p(90)=5.95s    p(95)=6.3s    
       { expected_response:true }...: avg=4.51s    min=2.02s   med=4.23s   max=9.12s    p(90)=5.95s    p(95)=6.3s    
     http_req_failed................: 0.00%   ✓ 0         ✗ 39806
     http_req_receiving.............: avg=762.27µs min=32.78µs med=85.89µs max=337.13ms p(90)=150.48µs p(95)=529.34µs
     http_req_sending...............: avg=153.93µs min=7.7µs   med=13.84µs max=155.87ms p(90)=27.48µs  p(95)=38.45µs 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=4.51s    min=2.02s   med=4.23s   max=9.12s    p(90)=5.95s    p(95)=6.29s   
     http_reqs......................: 39806   66.001928/s
     iteration_duration.............: avg=4.53s    min=2.11s   med=4.25s   max=9.48s    p(90)=5.97s    p(95)=6.32s   
     iterations.....................: 39806   66.001928/s
     vus............................: 16      min=16      max=300
     vus_max........................: 300     min=300     max=300
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5e42f020-668a-44d5-1321-cee76fcef100/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/953c813c-983b-4446-4af4-79ec1bb17900/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0f34b012-6185-4d24-0c77-15221b13c300/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 118980    ✗ 0    
     data_received..................: 3.5 GB  5.8 MB/s
     data_sent......................: 47 MB   78 kB/s
     http_req_blocked...............: avg=43.45µs  min=1.38µs  med=3.15µs  max=34.85ms  p(90)=5.12µs   p(95)=6.1µs   
     http_req_connecting............: avg=36.15µs  min=0s      med=0s      max=29.88ms  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=4.53s    min=2.18s   med=4.26s   max=10.3s    p(90)=5.95s    p(95)=6.39s   
       { expected_response:true }...: avg=4.53s    min=2.18s   med=4.26s   max=10.3s    p(90)=5.95s    p(95)=6.39s   
     http_req_failed................: 0.00%   ✓ 0         ✗ 39660
     http_req_receiving.............: avg=649.21µs min=36.47µs med=93.23µs max=180.49ms p(90)=153.37µs p(95)=482.03µs
     http_req_sending...............: avg=99.46µs  min=7.89µs  med=16.43µs max=116.13ms p(90)=31.33µs  p(95)=40.99µs 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=4.53s    min=2.18s   med=4.26s   max=10.3s    p(90)=5.95s    p(95)=6.39s   
     http_reqs......................: 39660   65.749748/s
     iteration_duration.............: avg=4.55s    min=2.18s   med=4.28s   max=10.31s   p(90)=5.97s    p(95)=6.41s   
     iterations.....................: 39660   65.749748/s
     vus............................: 37      min=37      max=300
     vus_max........................: 300     min=300     max=300
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ba0bcbcf-b9c9-4b1e-1127-55237d21d000/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/085fde0f-d8c2-4e56-9ec4-097ef2280a00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3fd1680b-a2f9-449d-2a3e-4c3c82e42a00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 94617     ✗ 0    
     data_received..................: 2.8 GB  4.6 MB/s
     data_sent......................: 37 MB   62 kB/s
     http_req_blocked...............: avg=49.83µs  min=1.31µs  med=6.21µs   max=106.18ms p(90)=11.1µs  p(95)=13.02µs 
     http_req_connecting............: avg=23.84µs  min=0s      med=0s       max=38.1ms   p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=5.68s    min=2.56s   med=5.68s    max=10.33s   p(90)=6.69s   p(95)=7s      
       { expected_response:true }...: avg=5.68s    min=2.56s   med=5.68s    max=10.33s   p(90)=6.69s   p(95)=7s      
     http_req_failed................: 0.00%   ✓ 0         ✗ 31539
     http_req_receiving.............: avg=3.65ms   min=35.32µs med=186.98µs max=1s       p(90)=4.03ms  p(95)=12.98ms 
     http_req_sending...............: avg=453.49µs min=8.22µs  med=31.57µs  max=552.55ms p(90)=63.56µs p(95)=193.66µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=5.68s    min=2.56s   med=5.68s    max=10.33s   p(90)=6.68s   p(95)=7s      
     http_reqs......................: 31539   52.209455/s
     iteration_duration.............: avg=5.72s    min=2.57s   med=5.72s    max=10.36s   p(90)=6.73s   p(95)=7.06s   
     iterations.....................: 31539   52.209455/s
     vus............................: 29      min=29      max=300
     vus_max........................: 300     min=300     max=300
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8be76ecd-7e84-45b0-f10b-55f75bcf3d00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7d096dfb-1eca-44da-3abb-934001723600/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5fb2e4bd-1f27-4dc8-948f-25822ad15c00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 89550     ✗ 0    
     data_received..................: 2.6 GB  4.4 MB/s
     data_sent......................: 35 MB   59 kB/s
     http_req_blocked...............: avg=66.91µs  min=1.44µs  med=3.63µs  max=33.53ms  p(90)=5.01µs   p(95)=5.69µs  
     http_req_connecting............: avg=60.47µs  min=0s      med=0s      max=29.09ms  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=6.02s    min=1.73s   med=5.91s   max=8.36s    p(90)=6.5s     p(95)=6.58s   
       { expected_response:true }...: avg=6.02s    min=1.73s   med=5.91s   max=8.36s    p(90)=6.5s     p(95)=6.58s   
     http_req_failed................: 0.00%   ✓ 0         ✗ 29850
     http_req_receiving.............: avg=368.51µs min=34.76µs med=98.09µs max=438.04ms p(90)=133.03µs p(95)=148.79µs
     http_req_sending...............: avg=34.75µs  min=8.24µs  med=20.09µs max=33.44ms  p(90)=30.73µs  p(95)=35.1µs  
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=6.02s    min=1.73s   med=5.91s   max=8.36s    p(90)=6.5s     p(95)=6.58s   
     http_reqs......................: 29850   49.605053/s
     iteration_duration.............: avg=6.04s    min=1.74s   med=5.92s   max=8.37s    p(90)=6.51s    p(95)=6.59s   
     iterations.....................: 29850   49.605053/s
     vus............................: 169     min=169     max=300
     vus_max........................: 300     min=300     max=300
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/64b53ffe-816a-4cf0-a584-04724bb2c200/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/31f98516-e48c-422b-f9ab-d329c5b4ad00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e80a6fbb-8387-4d30-afd0-ea042db18100/public" alt="HTTP Overview" />


  </details>