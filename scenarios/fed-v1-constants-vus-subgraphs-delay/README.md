## Overview for: `scenarios/fed-v1-constants-vus-subgraphs-delay`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. All subgraphs have an intentional delay on replying, and this creates additional pressure on the gateway's memory. We are running a heavy load of concurrent VUs to measure response time and other stats, during stress. It measure things like memory usage, CPU usage, response times.


This scenario was running 350 VUs over 400s


### Comparison


| Gateway              | RPS ⬇️ |        Requests         |          Duration          |
| :------------------- | :----: | :---------------------: | :------------------------: |
| wundergraph          |  829   | 332041 total, 0 failed  |   avg: 338ms, p95: 667ms   |
| mesh-bun             |  489   | 196105 total, 0 failed  |  avg: 712ms, p95: 1031ms   |
| mesh                 |  320   | 128501 total, 0 failed  |  avg: 1088ms, p95: 1333ms  |
| mesh-supergraph      |   36   |  14829 total, 0 failed  | avg: 9506ms, p95: 10289ms  |
| apollo-router        |   35   |  14606 total, 0 failed  | avg: 9641ms, p95: 12974ms  |
| apollo-server-node16 |   27   |  11250 total, 0 failed  | avg: 12539ms, p95: 18314ms |
| apollo-server        |   23   |  9578 total, 0 failed   | avg: 14759ms, p95: 23335ms |
| mercurius            |   6    | 2944 total, 1040 failed | avg: 47717ms, p95: 60001ms |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 332041

     checks.........................: 66.66% ✓ 664082     ✗ 332041
     data_received..................: 48 MB  120 kB/s
     data_sent......................: 394 MB 984 kB/s
     http_req_blocked...............: avg=142.32µs min=1.3µs    med=3.2µs    max=787.17ms p(90)=4.6µs    p(95)=5.7µs   
     http_req_connecting............: avg=125.55µs min=0s       med=0s       max=787.1ms  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=338.36ms min=389.33µs med=321.36ms max=2.84s    p(90)=582.45ms p(95)=666.8ms 
       { expected_response:true }...: avg=338.36ms min=389.33µs med=321.36ms max=2.84s    p(90)=582.45ms p(95)=666.8ms 
   ✓ http_req_failed................: 0.00%  ✓ 0          ✗ 332041
     http_req_receiving.............: avg=34.18ms  min=9.7µs    med=35.2µs   max=2.45s    p(90)=86.28ms  p(95)=242.89ms
     http_req_sending...............: avg=3.16ms   min=6.7µs    med=16.2µs   max=2.55s    p(90)=136.11µs p(95)=733.25µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=301ms    min=345.52µs med=303.11ms max=1s       p(90)=505.15ms p(95)=552.61ms
     http_reqs......................: 332041 829.324072/s
     iteration_duration.............: avg=420.98ms min=1.04ms   med=386.28ms max=2.86s    p(90)=711.32ms p(95)=877.95ms
     iterations.....................: 332041 829.324072/s
     vus............................: 350    min=350      max=350 
     vus_max........................: 350    min=350      max=350 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7b3199d7-8508-4fdd-6d30-6b42d0627700/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/cf43b59a-b95e-4d15-9a03-d8ee0cc62400/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1e47af49-dd0b-47f0-aa52-2a934a36f800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  0% — ✓ 0 / ✗ 196105
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 196105

     checks.........................: 33.33% ✓ 196105    ✗ 392210
     data_received..................: 187 MB 466 kB/s
     data_sent......................: 233 MB 581 kB/s
     http_req_blocked...............: avg=57.1µs   min=900ns    med=1.8µs    max=179.65ms p(90)=3µs      p(95)=3.7µs  
     http_req_connecting............: avg=50.28µs  min=0s       med=0s       max=54.98ms  p(90)=0s       p(95)=0s     
     http_req_duration..............: avg=711.64ms min=119.55ms med=741.09ms max=1.73s    p(90)=947.94ms p(95)=1.03s  
       { expected_response:true }...: avg=711.64ms min=119.55ms med=741.09ms max=1.73s    p(90)=947.94ms p(95)=1.03s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 196105
     http_req_receiving.............: avg=4.03ms   min=10.5µs   med=20.1µs   max=374.1ms  p(90)=577.85µs p(95)=17.89ms
     http_req_sending...............: avg=878.08µs min=5.3µs    med=10.2µs   max=448.98ms p(90)=92.89µs  p(95)=130.6µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s       p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=706.73ms min=109.05ms med=736.4ms  max=1.73s    p(90)=941.17ms p(95)=1.01s  
     http_reqs......................: 196105 489.66708/s
     iteration_duration.............: avg=714.38ms min=120.05ms med=743.27ms max=1.8s     p(90)=951.87ms p(95)=1.03s  
     iterations.....................: 196105 489.66708/s
     vus............................: 350    min=350     max=350 
     vus_max........................: 350    min=350     max=350 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/300a3cd4-d6dc-4ae0-4e55-bc8184a5ca00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7edeed81-88ec-4e02-ca5c-fa81c45d7600/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6733eed5-4437-4ea5-4b13-e9b713f37000/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 128501

     checks.........................: 66.66% ✓ 257002     ✗ 128501
     data_received..................: 145 MB 363 kB/s
     data_sent......................: 153 MB 381 kB/s
     http_req_blocked...............: avg=153.37µs min=1.1µs    med=2µs     max=227.34ms p(90)=3.2µs   p(95)=3.8µs   
     http_req_connecting............: avg=144.1µs  min=0s       med=0s      max=90.01ms  p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=1.08s    min=276.03ms med=1.07s   max=2.9s     p(90)=1.26s   p(95)=1.33s   
       { expected_response:true }...: avg=1.08s    min=276.03ms med=1.07s   max=2.9s     p(90)=1.26s   p(95)=1.33s   
   ✓ http_req_failed................: 0.00%  ✓ 0          ✗ 128501
     http_req_receiving.............: avg=4.54ms   min=11.2µs   med=23.29µs max=449.62ms p(90)=375.4µs p(95)=17.14ms 
     http_req_sending...............: avg=708.17µs min=6.2µs    med=11.1µs  max=372.7ms  p(90)=88.5µs  p(95)=198.99µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=1.08s    min=275.92ms med=1.07s   max=2.87s    p(90)=1.25s   p(95)=1.32s   
     http_reqs......................: 128501 320.809682/s
     iteration_duration.............: avg=1.09s    min=277.48ms med=1.07s   max=2.97s    p(90)=1.26s   p(95)=1.33s   
     iterations.....................: 128501 320.809682/s
     vus............................: 350    min=350      max=350 
     vus_max........................: 350    min=350      max=350 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/474a8dee-741e-4e84-2019-2a7df7aa8300/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/706f0d8e-b9c1-4923-ed8e-ce08e8a50200/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f8c1be53-87bf-455c-ef18-2ff5780a6d00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 14829

     checks.........................: 66.66% ✓ 29658     ✗ 14829
     data_received..................: 1.3 GB 3.2 MB/s
     data_sent......................: 18 MB  43 kB/s
     http_req_blocked...............: avg=784.94µs min=2µs    med=3.5µs   max=62.01ms  p(90)=5.5µs    p(95)=12.95µs 
     http_req_connecting............: avg=770.44µs min=0s     med=0s      max=54.39ms  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=9.5s     min=5.23s  med=9.5s    max=14.52s   p(90)=10.07s   p(95)=10.28s  
       { expected_response:true }...: avg=9.5s     min=5.23s  med=9.5s    max=14.52s   p(90)=10.07s   p(95)=10.28s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 14829
     http_req_receiving.............: avg=560.86µs min=68.2µs med=149.3µs max=592.89ms p(90)=387.82µs p(95)=530.28µs
     http_req_sending...............: avg=270.89µs min=10.3µs med=18.89µs max=84.58ms  p(90)=34.29µs  p(95)=47.66µs 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=9.5s     min=5.23s  med=9.5s    max=14.52s   p(90)=10.07s   p(95)=10.28s  
     http_reqs......................: 14829  36.548609/s
     iteration_duration.............: avg=9.5s     min=5.23s  med=9.5s    max=14.54s   p(90)=10.08s   p(95)=10.29s  
     iterations.....................: 14829  36.548609/s
     vus............................: 86     min=86      max=350
     vus_max........................: 350    min=350     max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5b43525a-9978-48f1-fbf2-2dec37a15800/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/22ce1531-7ace-4f6b-f7c4-9453774c9900/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e767a1db-aa00-4786-781c-54831ba55500/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 43818    ✗ 0    
     data_received..................: 1.3 GB  3.2 MB/s
     data_sent......................: 17 MB   43 kB/s
     http_req_blocked...............: avg=639.79µs min=2µs    med=5.1µs   max=292.39ms p(90)=6.9µs    p(95)=8.1µs   
     http_req_connecting............: avg=574.01µs min=0s     med=0s      max=108.34ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=9.64s    min=3.28s  med=9.63s   max=18.55s   p(90)=12.26s   p(95)=12.97s  
       { expected_response:true }...: avg=9.64s    min=3.28s  med=9.63s   max=18.55s   p(90)=12.26s   p(95)=12.97s  
   ✓ http_req_failed................: 0.00%   ✓ 0        ✗ 14606
     http_req_receiving.............: avg=624.56µs min=65.3µs med=121.6µs max=209.87ms p(90)=423.38µs p(95)=549.41µs
     http_req_sending...............: avg=2.12ms   min=8.8µs  med=29.7µs  max=213.76ms p(90)=56.1µs   p(95)=1.01ms  
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=9.63s    min=3.28s  med=9.63s   max=18.55s   p(90)=12.25s   p(95)=12.97s  
     http_reqs......................: 14606   35.92518/s
     iteration_duration.............: avg=9.67s    min=3.32s  med=9.66s   max=18.56s   p(90)=12.29s   p(95)=13s     
     iterations.....................: 14606   35.92518/s
     vus............................: 71      min=71     max=350
     vus_max........................: 350     min=350    max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3b4a271f-1f45-45db-9e06-175ea3790e00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3e6010b4-44ca-4fad-6034-bf89a2de6200/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/768d4265-57b9-4e73-471e-3e5775ff9a00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server-node16`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 33750     ✗ 0    
     data_received..................: 989 MB  2.4 MB/s
     data_sent......................: 13 MB   33 kB/s
     http_req_blocked...............: avg=561.63µs min=1.9µs  med=4.3µs   max=66.7ms   p(90)=6.3µs    p(95)=9.46µs
     http_req_connecting............: avg=521.24µs min=0s     med=0s      max=45.18ms  p(90)=0s       p(95)=0s    
     http_req_duration..............: avg=12.53s   min=4.93s  med=11.88s  max=27.35s   p(90)=16.75s   p(95)=18.31s
       { expected_response:true }...: avg=12.53s   min=4.93s  med=11.88s  max=27.35s   p(90)=16.75s   p(95)=18.31s
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 11250
     http_req_receiving.............: avg=7.15ms   min=58.9µs med=113.7µs max=618.42ms p(90)=1.07ms   p(95)=9.24ms
     http_req_sending...............: avg=1.89ms   min=8.6µs  med=24µs    max=425.73ms p(90)=107.42µs p(95)=6.43ms
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s       p(90)=0s       p(95)=0s    
     http_req_waiting...............: avg=12.52s   min=4.93s  med=11.88s  max=27.35s   p(90)=16.74s   p(95)=18.3s 
     http_reqs......................: 11250   27.511835/s
     iteration_duration.............: avg=12.59s   min=4.99s  med=11.93s  max=27.36s   p(90)=16.82s   p(95)=18.35s
     iterations.....................: 11250   27.511835/s
     vus............................: 24      min=24      max=350
     vus_max........................: 350     min=350     max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4700b764-b0b7-4ad1-0574-6442a70ea100/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2cee2ab6-e343-40e6-8d1e-d0728b68bb00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/fbe59106-4ac0-462f-ad18-936f3f2d7c00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 28734    ✗ 0    
     data_received..................: 842 MB  2.1 MB/s
     data_sent......................: 11 MB   28 kB/s
     http_req_blocked...............: avg=703.79µs min=2.2µs  med=4.5µs   max=76.31ms  p(90)=7.9µs    p(95)=22.31µs
     http_req_connecting............: avg=679.39µs min=0s     med=0s      max=76.27ms  p(90)=0s       p(95)=0s     
     http_req_duration..............: avg=14.75s   min=3.08s  med=13.56s  max=45.52s   p(90)=21.08s   p(95)=23.33s 
       { expected_response:true }...: avg=14.75s   min=3.08s  med=13.56s  max=45.52s   p(90)=21.08s   p(95)=23.33s 
   ✓ http_req_failed................: 0.00%   ✓ 0        ✗ 9578 
     http_req_receiving.............: avg=8.16ms   min=66.5µs med=143.1µs max=1.09s    p(90)=1.07ms   p(95)=9.05ms 
     http_req_sending...............: avg=2.36ms   min=11.1µs med=26.7µs  max=466.05ms p(90)=393.46µs p(95)=7.84ms 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s       p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=14.74s   min=3.08s  med=13.56s  max=45.52s   p(90)=21.08s   p(95)=23.33s 
     http_reqs......................: 9578    23.37367/s
     iteration_duration.............: avg=14.82s   min=3.1s   med=13.62s  max=45.81s   p(90)=21.12s   p(95)=23.38s 
     iterations.....................: 9578    23.37367/s
     vus............................: 18      min=18     max=350
     vus_max........................: 350     min=350    max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e0113a55-7724-40d9-82e8-72c1733cb300/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/45ac5cf9-5a15-45bd-b311-2e1f25353a00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9ed5ec0f-9ca1-406a-9b71-d56319cda400/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  64% — ✓ 1904 / ✗ 1040
     ✗ no graphql errors
      ↳  64% — ✓ 1904 / ✗ 1040
     ✓ valid response structure

     checks.........................: 73.30% ✓ 5712     ✗ 2080 
     data_received..................: 167 MB 389 kB/s
     data_sent......................: 3.7 MB 8.6 kB/s
     http_req_blocked...............: avg=2.97ms   min=2.7µs  med=6.2µs   max=54.55ms p(90)=12.45ms  p(95)=28.4ms  
     http_req_connecting............: avg=2.88ms   min=0s     med=0s      max=42.31ms p(90)=12.03ms  p(95)=28.23ms 
     http_req_duration..............: avg=47.71s   min=10.89s med=51.53s  max=1m0s    p(90)=1m0s     p(95)=1m0s    
       { expected_response:true }...: avg=41s      min=10.89s med=45.41s  max=59.94s  p(90)=55.02s   p(95)=57.8s   
   ✗ http_req_failed................: 35.32% ✓ 1040     ✗ 1904 
     http_req_receiving.............: avg=282.53µs min=0s     med=127.3µs max=63.05ms p(90)=326.18µs p(95)=480.37µs
     http_req_sending...............: avg=506.68µs min=11.1µs med=36.2µs  max=61.97ms p(90)=1ms      p(95)=2.79ms  
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=47.71s   min=10.89s med=51.53s  max=1m0s    p(90)=1m0s     p(95)=1m0s    
     http_reqs......................: 2944   6.846349/s
     iteration_duration.............: avg=47.72s   min=10.9s  med=51.53s  max=1m0s    p(90)=1m0s     p(95)=1m0s    
     iterations.....................: 2944   6.846349/s
     vus............................: 155    min=155    max=350
     vus_max........................: 350    min=350    max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/cc155bc7-3581-4c42-fcbc-a6073ee29400/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/cac83df4-a5f1-4b74-252b-97bf8a011000/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/56040391-518a-42d9-84bd-024ce069f000/public" alt="HTTP Overview" />


  </details>