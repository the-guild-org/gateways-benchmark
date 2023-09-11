## Overview for: `scenarios/fed-v1-constants-vus-subgraphs-delay`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. All subgraphs have an intentional delay on replying, and this creates additional pressure on the gateway's memory. We are running a heavy load of concurrent VUs to measure response time and other stats, during stress. It measure things like memory usage, CPU usage, response times.


This scenario was running 350 VUs over 400s


### Comparison


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/84115382-bce1-4ef7-fa41-94db2c85ee00/public" alt="Comparison" />


| Gateway              | RPS ⬇️ |          Requests           |          Duration          | Notes                                                                                |
| :------------------- | :----: | :-------------------------: | :------------------------: | :----------------------------------------------------------------------------------- |
| wundergraph          |  1227  | 491014 total, 488734 failed |    avg: 51ms, p95: 0ms     | ❌ 488734 failed requests, 488734 non-200 responses, 488733 unexpected GraphQL errors |
| mesh-bun             |  419   |   168054 total, 0 failed    |  avg: 831ms, p95: 1201ms   | ❌ 168054 unexpected GraphQL errors, non-compatible response structure (168054)       |
| apollo-router        |   63   |    25847 total, 0 failed    |  avg: 4929ms, p95: 6684ms  | ✅                                                                                    |
| mesh-supergraph      |   42   |    17167 total, 0 failed    | avg: 8216ms, p95: 10165ms  | ❌ non-compatible response structure (17167)                                          |
| mesh                 |   38   |    15802 total, 0 failed    | avg: 8902ms, p95: 10282ms  | ✅                                                                                    |
| apollo-server-node16 |   37   |    15282 total, 0 failed    | avg: 9207ms, p95: 13098ms  | ✅                                                                                    |
| apollo-server        |   26   |    10769 total, 0 failed    | avg: 13118ms, p95: 20803ms | ✅                                                                                    |
| mercurius            |   7    |   3070 total, 659 failed    | avg: 45104ms, p95: 60001ms | ❌ 659 failed requests, 659 non-200 responses, 659 unexpected GraphQL errors          |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  0% — ✓ 2280 / ✗ 488734
     ✗ no graphql errors
      ↳  0% — ✓ 2281 / ✗ 488733
     ✓ valid response structure

     checks.........................: 0.69%  ✓ 6842        ✗ 977467
     data_received..................: 200 MB 500 kB/s
     data_sent......................: 3.1 MB 7.8 kB/s
     http_req_blocked...............: avg=187.71µs min=0s      med=0s       max=249.79ms p(90)=0s       p(95)=0s      
     http_req_connecting............: avg=184.53µs min=0s      med=0s       max=249.75ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=50.61ms  min=0s      med=0s       max=19.73s   p(90)=0s       p(95)=0s      
       { expected_response:true }...: avg=9.7s     min=1s      med=10.66s   max=19.73s   p(90)=15.2s    p(95)=16.31s  
     http_req_failed................: 99.53% ✓ 488734      ✗ 2280  
     http_req_receiving.............: avg=1.52ms   min=0s      med=0s       max=6.7s     p(90)=0s       p(95)=0s      
     http_req_sending...............: avg=70.73µs  min=0s      med=0s       max=1.6s     p(90)=0s       p(95)=0s      
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=49.02ms  min=0s      med=0s       max=19.73s   p(90)=0s       p(95)=0s      
     http_reqs......................: 491014 1227.206343/s
     iteration_duration.............: avg=244.47ms min=279.7µs med=174.27ms max=19.74s   p(90)=377.02ms p(95)=476.64ms
     iterations.....................: 491014 1227.206343/s
     vus............................: 350    min=350       max=350 
     vus_max........................: 350    min=350       max=350 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5450b343-2945-4209-ae81-bc1ae229d600/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/21f032e0-124a-464f-1ae9-4cc618c0f000/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/00bf9ef6-c6db-4175-16f5-f9db0bd66400/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  0% — ✓ 0 / ✗ 168054
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 168054

     checks.........................: 33.33% ✓ 168054     ✗ 336108
     data_received..................: 160 MB 399 kB/s
     data_sent......................: 200 MB 498 kB/s
     http_req_blocked...............: avg=121.79µs min=1.2µs    med=2.29µs   max=343.67ms p(90)=3.9µs   p(95)=4.89µs 
     http_req_connecting............: avg=106.17µs min=0s       med=0s       max=144.85ms p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=830.71ms min=143.59ms med=875.32ms max=2.11s    p(90)=1.12s   p(95)=1.2s   
       { expected_response:true }...: avg=830.71ms min=143.59ms med=875.32ms max=2.11s    p(90)=1.12s   p(95)=1.2s   
     http_req_failed................: 0.00%  ✓ 0          ✗ 168054
     http_req_receiving.............: avg=2.9ms    min=10.4µs   med=26.8µs   max=533.18ms p(90)=318.5µs p(95)=5.59ms 
     http_req_sending...............: avg=1.1ms    min=6.4µs    med=12.5µs   max=582.49ms p(90)=118µs   p(95)=176.5µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s       p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=826.7ms  min=143.16ms med=871.59ms max=2.05s    p(90)=1.12s   p(95)=1.18s  
     http_reqs......................: 168054 419.495406/s
     iteration_duration.............: avg=833.72ms min=247.74ms med=878.22ms max=2.11s    p(90)=1.12s   p(95)=1.2s   
     iterations.....................: 168054 419.495406/s
     vus............................: 350    min=350      max=350 
     vus_max........................: 350    min=350      max=350 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/16caded7-a9dd-478a-0e95-e664059ca600/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c0229078-0628-480b-c5f8-934152d6ab00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3b4428f2-b9c5-4fdb-843d-2b5f992a6f00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 77541     ✗ 0    
     data_received..................: 2.3 GB  5.6 MB/s
     data_sent......................: 31 MB   76 kB/s
     http_req_blocked...............: avg=625.15µs min=1.7µs    med=4.89µs  max=2.09s   p(90)=7.4µs   p(95)=9.29µs 
     http_req_connecting............: avg=136.69µs min=0s       med=0s      max=21.46ms p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=4.92s    min=328.16ms med=4.91s   max=9.72s   p(90)=6.23s   p(95)=6.68s  
       { expected_response:true }...: avg=4.92s    min=328.16ms med=4.91s   max=9.72s   p(90)=6.23s   p(95)=6.68s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 25847
     http_req_receiving.............: avg=165.95ms min=41.9µs   med=115.9µs max=5.51s   p(90)=522.7ms p(95)=1.06s  
     http_req_sending...............: avg=21.6ms   min=8.1µs    med=24µs    max=5.92s   p(90)=12.26ms p(95)=82.62ms
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s      p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=4.74s    min=314.13ms med=4.77s   max=8.5s    p(90)=6.02s   p(95)=6.4s   
     http_reqs......................: 25847   63.851867/s
     iteration_duration.............: avg=5.44s    min=344.66ms med=5.3s    max=15.2s   p(90)=6.95s   p(95)=7.56s  
     iterations.....................: 25847   63.851867/s
     vus............................: 80      min=80      max=350
     vus_max........................: 350     min=350     max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d2c80ecb-3a26-4333-d3c0-db603fa38f00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d521abb8-3922-42ab-1f84-70b9b16dde00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b8d5a907-7a91-4ce4-c06b-77154ac43500/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 17167

     checks.........................: 66.66% ✓ 34334     ✗ 17167
     data_received..................: 1.5 GB 3.7 MB/s
     data_sent......................: 20 MB  50 kB/s
     http_req_blocked...............: avg=454.29µs min=1.2µs  med=3.4µs    max=39.2ms  p(90)=4.5µs  p(95)=6.5µs  
     http_req_connecting............: avg=445µs    min=0s     med=0s       max=33.76ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=8.21s    min=4.86s  med=8.22s    max=14.63s  p(90)=9.86s  p(95)=10.16s 
       { expected_response:true }...: avg=8.21s    min=4.86s  med=8.22s    max=14.63s  p(90)=9.86s  p(95)=10.16s 
     http_req_failed................: 0.00%  ✓ 0         ✗ 17167
     http_req_receiving.............: avg=1.74ms   min=45.7µs med=299.69µs max=67.41ms p(90)=5.1ms  p(95)=8.79ms 
     http_req_sending...............: avg=151.61µs min=7.8µs  med=19.59µs  max=38.41ms p(90)=33.6µs p(95)=41.09µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s       max=0s      p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=8.21s    min=4.86s  med=8.22s    max=14.63s  p(90)=9.86s  p(95)=10.16s 
     http_reqs......................: 17167  42.346438/s
     iteration_duration.............: avg=8.21s    min=4.86s  med=8.23s    max=14.64s  p(90)=9.86s  p(95)=10.16s 
     iterations.....................: 17167  42.346438/s
     vus............................: 53     min=53      max=350
     vus_max........................: 350    min=350     max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f4c4204c-9426-417f-4731-c2420b418100/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5850bc4e-2c21-402c-dd27-fde1b1da3b00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/febd38bc-aa30-4bdc-42f3-bb122e019000/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 47406     ✗ 0    
     data_received..................: 1.4 GB  3.4 MB/s
     data_sent......................: 19 MB   46 kB/s
     http_req_blocked...............: avg=1.12ms min=1.3µs  med=3.1µs    max=119.76ms p(90)=4.3µs   p(95)=5.2µs  
     http_req_connecting............: avg=1.08ms min=0s     med=0s       max=89.17ms  p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=8.9s   min=5.35s  med=8.9s     max=14.5s    p(90)=9.95s   p(95)=10.28s 
       { expected_response:true }...: avg=8.9s   min=5.35s  med=8.9s     max=14.5s    p(90)=9.95s   p(95)=10.28s 
     http_req_failed................: 0.00%   ✓ 0         ✗ 15802
     http_req_receiving.............: avg=4.01ms min=39.5µs med=103.15µs max=475.36ms p(90)=5ms     p(95)=11.46ms
     http_req_sending...............: avg=1.26ms min=7.3µs  med=16.2µs   max=367.43ms p(90)=61.82µs p(95)=5.15ms 
     http_req_tls_handshaking.......: avg=0s     min=0s     med=0s       max=0s       p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=8.89s  min=5.34s  med=8.89s    max=14.5s    p(90)=9.94s   p(95)=10.27s 
     http_reqs......................: 15802   38.921762/s
     iteration_duration.............: avg=8.93s  min=5.36s  med=8.92s    max=14.53s   p(90)=9.98s   p(95)=10.35s 
     iterations.....................: 15802   38.921762/s
     vus............................: 24      min=24      max=350
     vus_max........................: 350     min=350     max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e36c1815-5ecc-4724-718c-289f31426100/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c275b363-839c-43a6-ac37-053d93a83f00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5a03df5e-9419-4060-407b-b19e0793cc00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server-node16`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 45846     ✗ 0    
     data_received..................: 1.3 GB  3.3 MB/s
     data_sent......................: 18 MB   45 kB/s
     http_req_blocked...............: avg=1.85ms  min=1.4µs   med=3.3µs   max=184.8ms  p(90)=4.8µs    p(95)=6µs    
     http_req_connecting............: avg=1.8ms   min=0s      med=0s      max=175.11ms p(90)=0s       p(95)=0s     
     http_req_duration..............: avg=9.2s    min=4s      med=9.01s   max=19.11s   p(90)=12.32s   p(95)=13.09s 
       { expected_response:true }...: avg=9.2s    min=4s      med=9.01s   max=19.11s   p(90)=12.32s   p(95)=13.09s 
     http_req_failed................: 0.00%   ✓ 0         ✗ 15282
     http_req_receiving.............: avg=13.18ms min=45.59µs med=99.79µs max=1.34s    p(90)=2.74ms   p(95)=78.9ms 
     http_req_sending...............: avg=3.5ms   min=7µs     med=18.1µs  max=1.47s    p(90)=122.89µs p(95)=13.22ms
     http_req_tls_handshaking.......: avg=0s      min=0s      med=0s      max=0s       p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=9.19s   min=4s      med=9s      max=19.11s   p(90)=12.29s   p(95)=13.06s 
     http_reqs......................: 15282   37.473062/s
     iteration_duration.............: avg=9.27s   min=4.01s   med=9.06s   max=19.12s   p(90)=12.46s   p(95)=13.26s 
     iterations.....................: 15282   37.473062/s
     vus............................: 116     min=116     max=350
     vus_max........................: 350     min=350     max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5ae21a7c-9f34-4d40-81e0-f3a6353d7000/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e85fb12c-0c86-4d4f-cdfd-e4efa6e40000/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5b48b8d6-3ac2-40f4-51f4-a04b83c4d600/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 32307     ✗ 0    
     data_received..................: 947 MB  2.3 MB/s
     data_sent......................: 13 MB   31 kB/s
     http_req_blocked...............: avg=259.32µs min=2.2µs  med=5.6µs    max=104.92ms p(90)=7.8µs    p(95)=13.8µs 
     http_req_connecting............: avg=211.2µs  min=0s     med=0s       max=29.2ms   p(90)=0s       p(95)=0s     
     http_req_duration..............: avg=13.11s   min=2.73s  med=12.04s   max=31.57s   p(90)=18.91s   p(95)=20.8s  
       { expected_response:true }...: avg=13.11s   min=2.73s  med=12.04s   max=31.57s   p(90)=18.91s   p(95)=20.8s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 10769
     http_req_receiving.............: avg=7.7ms    min=63.8µs med=139.11µs max=872.19ms p(90)=1.39ms   p(95)=9.76ms 
     http_req_sending...............: avg=2.85ms   min=8.9µs  med=27.9µs   max=734.08ms p(90)=148.77µs p(95)=12.41ms
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s       max=0s       p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=13.1s    min=2.73s  med=12.03s   max=31.57s   p(90)=18.91s   p(95)=20.78s 
     http_reqs......................: 10769   26.296743/s
     iteration_duration.............: avg=13.18s   min=2.77s  med=12.09s   max=31.59s   p(90)=19.06s   p(95)=20.9s  
     iterations.....................: 10769   26.296743/s
     vus............................: 45      min=45      max=350
     vus_max........................: 350     min=350     max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/97bc5184-3d21-4675-9134-b080cc884b00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d7a259a9-1ba7-4cea-19e0-4438b94d6000/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6920b5f2-e47b-4b5d-2ee6-009ded21c200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  78% — ✓ 2411 / ✗ 659
     ✗ no graphql errors
      ↳  78% — ✓ 2411 / ✗ 659
     ✓ valid response structure

     checks.........................: 84.58% ✓ 7233     ✗ 1318 
     data_received..................: 212 MB 492 kB/s
     data_sent......................: 3.9 MB 9.1 kB/s
     http_req_blocked...............: avg=2.47ms   min=1.9µs  med=4µs      max=75.52ms p(90)=4.44ms   p(95)=23.46ms
     http_req_connecting............: avg=2.43ms   min=0s     med=0s       max=75.5ms  p(90)=4.17ms   p(95)=23.36ms
     http_req_duration..............: avg=45.1s    min=8.61s  med=48.8s    max=1m0s    p(90)=1m0s     p(95)=1m0s   
       { expected_response:true }...: avg=41.03s   min=8.61s  med=45.5s    max=59.98s  p(90)=55.8s    p(95)=57.56s 
     http_req_failed................: 21.46% ✓ 659      ✗ 2411 
     http_req_receiving.............: avg=213.39µs min=0s     med=106.29µs max=17.95ms p(90)=341.61µs p(95)=479.5µs
     http_req_sending...............: avg=427.65µs min=8.69µs med=25.7µs   max=20.62ms p(90)=301.33µs p(95)=1.59ms 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s       max=0s      p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=45.1s    min=8.61s  med=48.8s    max=1m0s    p(90)=1m0s     p(95)=1m0s   
     http_reqs......................: 3070   7.139386/s
     iteration_duration.............: avg=45.11s   min=8.61s  med=48.8s    max=1m0s    p(90)=1m0s     p(95)=1m0s   
     iterations.....................: 3070   7.139386/s
     vus............................: 223    min=223    max=350
     vus_max........................: 350    min=350    max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e3cbfc74-9ec4-4152-355b-c3760d5c9200/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3e528964-086d-4910-c2a2-4699c0378600/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/cbc417ea-7244-4bc2-d7a2-ad715c59a300/public" alt="HTTP Overview" />


  </details>