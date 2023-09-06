## Overview for: `scenarios/fed-v1-constants-vus-subgraphs-delay`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. All subgraphs have an intentional delay on replying, and this creates additional pressure on the gateway's memory. We are running a heavy load of concurrent VUs to measure response time and other stats, during stress. It measure things like memory usage, CPU usage, response times.


This scenario was running 400 VUs over 200s


### Comparison


| Gateway              | RPS ⬇️ |        Requests         |         Duration         |
| :------------------- | :----: | :---------------------: | :----------------------: |
| wundergraph          |  3391  | 678453 total, 0 failed  |  avg: 111ms, p95: 206ms  |
| apollo-router        |  191   |  38512 total, 0 failed  | avg: 2084ms, p95: 3043ms |
| mesh                 |  187   |  37726 total, 0 failed  | avg: 2123ms, p95: 2425ms |
| apollo-server-node16 |  129   |  26078 total, 0 failed  | avg: 3083ms, p95: 4097ms |
| apollo-server        |  111   | 22787 total, 453 failed | avg: 3539ms, p95: 3031ms |
| mesh-supergraph      |   79   |  16000 total, 0 failed  | avg: 5024ms, p95: 5369ms |
| mercurius            |   55   |  11586 total, 0 failed  | avg: 7020ms, p95: 7255ms |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 2035359     ✗ 0     
     data_received..................: 98 MB   492 kB/s
     data_sent......................: 805 MB  4.0 MB/s
     http_req_blocked...............: avg=58.44µs  min=700ns   med=1.5µs    max=239.93ms p(90)=2.6µs    p(95)=3.3µs   
     http_req_connecting............: avg=51.27µs  min=0s      med=0s       max=239.69ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=110.61ms min=240.1µs med=101.33ms max=510.73ms p(90)=169ms    p(95)=206.03ms
       { expected_response:true }...: avg=110.61ms min=240.1µs med=101.33ms max=510.73ms p(90)=169ms    p(95)=206.03ms
   ✓ http_req_failed................: 0.00%   ✓ 0           ✗ 678453
     http_req_receiving.............: avg=496.04µs min=8.1µs   med=19.09µs  max=360.76ms p(90)=60.4µs   p(95)=200.54µs
     http_req_sending...............: avg=210.09µs min=5.2µs   med=8.9µs    max=335.43ms p(90)=21.8µs   p(95)=88.1µs  
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=109.9ms  min=212.1µs med=100.85ms max=448.78ms p(90)=167.52ms p(95)=204.21ms
     http_reqs......................: 678453  3391.069481/s
     iteration_duration.............: avg=117.84ms min=335.6µs med=105.52ms max=604.06ms p(90)=183.44ms p(95)=224.68ms
     iterations.....................: 678453  3391.069481/s
     vus............................: 400     min=400       max=400 
     vus_max........................: 400     min=400       max=400 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d34e7963-f387-4374-e529-8318d3db1200/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/187feb0b-1b75-4218-7cb4-2b454f2d0b00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c2755e84-013f-49ee-12db-988588a61700/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 115536     ✗ 0    
     data_received..................: 195 MB  966 kB/s
     data_sent......................: 46 MB   227 kB/s
     http_req_blocked...............: avg=406.85µs min=1.2µs    med=2.2µs  max=93.42ms p(90)=3.4µs  p(95)=4.2µs 
     http_req_connecting............: avg=378.81µs min=0s       med=0s     max=93.39ms p(90)=0s     p(95)=0s    
     http_req_duration..............: avg=2.08s    min=406ms    med=2.04s  max=6.12s   p(90)=2.79s  p(95)=3.04s 
       { expected_response:true }...: avg=2.08s    min=406ms    med=2.04s  max=6.12s   p(90)=2.79s  p(95)=3.04s 
   ✓ http_req_failed................: 0.00%   ✓ 0          ✗ 38512
     http_req_receiving.............: avg=63.9µs   min=23µs     med=56.7µs max=27.66ms p(90)=76.4µs p(95)=83.9µs
     http_req_sending...............: avg=162.39µs min=8.2µs    med=13.7µs max=31.37ms p(90)=26µs   p(95)=30.9µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s     p(95)=0s    
     http_req_waiting...............: avg=2.08s    min=405.91ms med=2.04s  max=6.12s   p(90)=2.79s  p(95)=3.04s 
     http_reqs......................: 38512   191.317787/s
     iteration_duration.............: avg=2.08s    min=406.3ms  med=2.04s  max=6.12s   p(90)=2.79s  p(95)=3.04s 
     iterations.....................: 38512   191.317787/s
     vus............................: 273     min=273      max=400
     vus_max........................: 400     min=400      max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/27ca4aeb-dcb0-433b-9db7-6c3730584700/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/54ef2f13-ffe9-42cb-efa0-f02146064700/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/efe690d9-fa8c-46bd-2e2c-78c606ccd400/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 113178     ✗ 0    
     data_received..................: 48 MB   240 kB/s
     data_sent......................: 45 MB   223 kB/s
     http_req_blocked...............: avg=1.33ms   min=1.1µs    med=2.5µs  max=357.79ms p(90)=3.5µs   p(95)=5.1µs  
     http_req_connecting............: avg=1.27ms   min=0s       med=0s     max=306.19ms p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=2.12s    min=878.03ms med=2.09s  max=4.88s    p(90)=2.31s   p(95)=2.42s  
       { expected_response:true }...: avg=2.12s    min=878.03ms med=2.09s  max=4.88s    p(90)=2.31s   p(95)=2.42s  
   ✓ http_req_failed................: 0.00%   ✓ 0          ✗ 37726
     http_req_receiving.............: avg=77.73µs  min=20.4µs   med=45µs   max=71.26ms  p(90)=85.55µs p(95)=107.1µs
     http_req_sending...............: avg=434.51µs min=8.8µs    med=15.5µs max=154.17ms p(90)=35.9µs  p(95)=51.4µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=2.12s    min=877.92ms med=2.09s  max=4.8s     p(90)=2.31s   p(95)=2.42s  
     http_reqs......................: 37726   187.815804/s
     iteration_duration.............: avg=2.12s    min=878.26ms med=2.09s  max=5.09s    p(90)=2.31s   p(95)=2.42s  
     iterations.....................: 37726   187.815804/s
     vus............................: 197     min=197      max=400
     vus_max........................: 400     min=400      max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/992e4918-86ee-4885-e9a1-0d088ca9e700/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/20f19546-025b-4745-5abd-894311239400/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7a6918cb-df93-49e3-40a8-550f5316ac00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server-node16`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 78234      ✗ 0    
     data_received..................: 136 MB  676 kB/s
     data_sent......................: 31 MB   154 kB/s
     http_req_blocked...............: avg=908.5µs  min=1.1µs  med=2µs    max=120.16ms p(90)=3.2µs  p(95)=4.5µs 
     http_req_connecting............: avg=894.43µs min=0s     med=0s     max=110.89ms p(90)=0s     p(95)=0s    
     http_req_duration..............: avg=3.08s    min=1.51s  med=2.87s  max=7.08s    p(90)=3.92s  p(95)=4.09s 
       { expected_response:true }...: avg=3.08s    min=1.51s  med=2.87s  max=7.08s    p(90)=3.92s  p(95)=4.09s 
   ✓ http_req_failed................: 0.00%   ✓ 0          ✗ 26078
     http_req_receiving.............: avg=62.22µs  min=21.1µs med=56.6µs max=13.33ms  p(90)=76.8µs p(95)=84.3µs
     http_req_sending...............: avg=204.69µs min=6.9µs  med=12.7µs max=49.95ms  p(90)=26.6µs p(95)=30.1µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s     p(95)=0s    
     http_req_waiting...............: avg=3.08s    min=1.51s  med=2.87s  max=7.06s    p(90)=3.92s  p(95)=4.09s 
     http_reqs......................: 26078   129.322246/s
     iteration_duration.............: avg=3.08s    min=1.51s  med=2.87s  max=7.17s    p(90)=3.92s  p(95)=4.09s 
     iterations.....................: 26078   129.322246/s
     vus............................: 307     min=307      max=400
     vus_max........................: 400     min=400      max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6c68120b-f7c7-4fac-e808-5ab005abc000/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/623eb044-8cde-4a0e-547e-1aa74b7ec700/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/58e3978a-ecb0-4de6-4ae5-fe85a6dee100/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  98% — ✓ 22334 / ✗ 453
     ✗ no graphql errors
      ↳  98% — ✓ 22334 / ✗ 453
     ✓ valid response structure

     checks.........................: 98.66% ✓ 67002      ✗ 906  
     data_received..................: 117 MB 571 kB/s
     data_sent......................: 27 MB  132 kB/s
     http_req_blocked...............: avg=1.24ms   min=900ns    med=2.2µs   max=143.64ms p(90)=3.4µs   p(95)=16.66µs
     http_req_connecting............: avg=1.21ms   min=0s       med=0s      max=111.26ms p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=3.53s    min=432.61ms med=2.02s   max=1m0s     p(90)=2.84s   p(95)=3.03s  
       { expected_response:true }...: avg=2.39s    min=432.61ms med=2.01s   max=59.81s   p(90)=2.8s    p(95)=2.93s  
   ✓ http_req_failed................: 1.98%  ✓ 453        ✗ 22334
     http_req_receiving.............: avg=61.05µs  min=0s       med=55.89µs max=9.61ms   p(90)=79.69µs p(95)=85.79µs
     http_req_sending...............: avg=222.71µs min=6.8µs    med=14.3µs  max=135.42ms p(90)=28.8µs  p(95)=35.49µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s       p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=3.53s    min=432.54ms med=2.02s   max=1m0s     p(90)=2.84s   p(95)=3.03s  
     http_reqs......................: 22787  111.560105/s
     iteration_duration.............: avg=3.54s    min=432.91ms med=2.02s   max=1m0s     p(90)=2.84s   p(95)=3.03s  
     iterations.....................: 22787  111.560105/s
     vus............................: 52     min=52       max=400
     vus_max........................: 400    min=400      max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/051fea43-1735-46cf-cfc8-51dc918c0400/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ae1999d5-d89a-4f03-c27e-3f335f8c6500/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/bec4017d-ac7c-4707-873a-ec21ec182b00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 48000     ✗ 0    
     data_received..................: 81 MB   403 kB/s
     data_sent......................: 19 MB   94 kB/s
     http_req_blocked...............: avg=1.14ms   min=800ns  med=1.8µs   max=92.84ms p(90)=2.8µs  p(95)=4.59µs 
     http_req_connecting............: avg=1.12ms   min=0s     med=0s      max=91.6ms  p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=5.02s    min=3.32s  med=4.93s   max=8.86s   p(90)=5.2s   p(95)=5.36s  
       { expected_response:true }...: avg=5.02s    min=3.32s  med=4.93s   max=8.86s   p(90)=5.2s   p(95)=5.36s  
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 16000
     http_req_receiving.............: avg=96.1µs   min=15.2µs med=33.99µs max=60.46ms p(90)=62.5µs p(95)=76.69µs
     http_req_sending...............: avg=142.44µs min=6µs    med=10.8µs  max=91.81ms p(90)=23.3µs p(95)=72.9µs 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s      p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=5.02s    min=3.32s  med=4.93s   max=8.85s   p(90)=5.2s   p(95)=5.36s  
     http_reqs......................: 16000   79.444756/s
     iteration_duration.............: avg=5.02s    min=3.32s  med=4.93s   max=8.92s   p(90)=5.2s   p(95)=5.36s  
     iterations.....................: 16000   79.444756/s
     vus............................: 361     min=361     max=400
     vus_max........................: 400     min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/deb24fcb-a77d-4f91-52af-0fca96afea00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/fd9c36eb-e778-41f6-99e3-3613e454a500/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/09a6f643-cc41-4eba-a588-3af417c92f00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 34758     ✗ 0    
     data_received..................: 52 MB   253 kB/s
     data_sent......................: 14 MB   67 kB/s
     http_req_blocked...............: avg=2.06ms   min=1µs    med=2.29µs max=134.94ms p(90)=3.3µs  p(95)=12.3µs 
     http_req_connecting............: avg=1.79ms   min=0s     med=0s     max=99.3ms   p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=7.02s    min=2.71s  med=7.11s  max=8.48s    p(90)=7.22s  p(95)=7.25s  
       { expected_response:true }...: avg=7.02s    min=2.71s  med=7.11s  max=8.48s    p(90)=7.22s  p(95)=7.25s  
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 11586
     http_req_receiving.............: avg=55.67µs  min=18.7µs med=52.9µs max=2.4ms    p(90)=72.8µs p(95)=78.8µs 
     http_req_sending...............: avg=446.51µs min=7.1µs  med=15.1µs max=41.96ms  p(90)=26.6µs p(95)=32.87µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=7.01s    min=2.71s  med=7.11s  max=8.48s    p(90)=7.22s  p(95)=7.25s  
     http_reqs......................: 11586   55.998596/s
     iteration_duration.............: avg=7.02s    min=2.8s   med=7.11s  max=8.48s    p(90)=7.22s  p(95)=7.25s  
     iterations.....................: 11586   55.998596/s
     vus............................: 8       min=8       max=400
     vus_max........................: 400     min=400     max=400
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/88fcfad1-fc4a-463d-e873-3a459fcc8d00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5b6c5683-9f9b-4a6e-57d1-1e75b6ed6100/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/23dc516b-0272-4ceb-99e2-8a43ad70d400/public" alt="HTTP Overview" />


  </details>