## Overview for: `scenarios/fed-v1-constants-vus-subgraphs-delay-resources`





This scenario was running 350 VUs over 400s


### Comparison


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0ec9125a-0cc8-4779-b733-70572d5a6c00/public" alt="Comparison" />


| Gateway              | RPS ⬇️ |           Requests            |         Duration         |
| :------------------- | :----: | :---------------------------: | :----------------------: |
| mercurius            |  2808  | 1123864 total, 1122764 failed |   avg: 22ms, p95: 0ms    |
| wundergraph          |  2290  |    916366 total, 0 failed     |  avg: 87ms, p95: 223ms   |
| mesh-bun             |  807   |    323227 total, 0 failed     |  avg: 430ms, p95: 661ms  |
| mesh                 |  563   |    225549 total, 0 failed     |  avg: 618ms, p95: 919ms  |
| apollo-router        |  111   |     44803 total, 0 failed     | avg: 2891ms, p95: 3976ms |
| apollo-server        |   62   |     25086 total, 0 failed     | avg: 5583ms, p95: 7855ms |
| apollo-server-node16 |   60   |     24477 total, 0 failed     | avg: 5729ms, p95: 8029ms |



<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  0% — ✓ 1100 / ✗ 1122764
     ✗ no graphql errors
      ↳  0% — ✓ 1100 / ✗ 1122764
     ✓ valid response structure

     checks.........................: 0.14%   ✓ 3300        ✗ 2245528
     data_received..................: 97 MB   241 kB/s
     data_sent......................: 1.8 MB  4.4 kB/s
     http_req_blocked...............: avg=1.07µs  min=0s       med=0s      max=38.24ms p(90)=0s       p(95)=0s      
     http_req_connecting............: avg=1µs     min=0s       med=0s      max=31.07ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=22.17ms min=0s       med=0s      max=24.27s  p(90)=0s       p(95)=0s      
       { expected_response:true }...: avg=19.14s  min=6.59s    med=19.66s  max=24.27s  p(90)=22.66s   p(95)=23.55s  
     http_req_failed................: 99.90%  ✓ 1122764     ✗ 1100   
     http_req_receiving.............: avg=158ns   min=0s       med=0s      max=9.37ms  p(90)=0s       p(95)=0s      
     http_req_sending...............: avg=347ns   min=0s       med=0s      max=35.31ms p(90)=0s       p(95)=0s      
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s      max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=22.17ms min=0s       med=0s      max=24.27s  p(90)=0s       p(95)=0s      
     http_reqs......................: 1123864 2808.760162/s
     iteration_duration.............: avg=97.91ms min=206.69µs med=76.36ms max=24.28s  p(90)=150.98ms p(95)=183.48ms
     iterations.....................: 1123864 2808.760162/s
     vus............................: 350     min=350       max=350  
     vus_max........................: 350     min=350       max=350  
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/89f6f1f0-1e29-4ba1-e7cc-e92645557e00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b3c9ec9f-bba5-499d-ec69-fde103879000/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/42f760c6-0e5e-4e8f-d2d3-e7efa4f47900/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 916366

     checks.........................: 66.66% ✓ 1832732     ✗ 916366
     data_received..................: 133 MB 332 kB/s
     data_sent......................: 1.1 GB 2.7 MB/s
     http_req_blocked...............: avg=19.99µs  min=681ns    med=2.22µs  max=476.33ms p(90)=3.28µs   p(95)=4.11µs  
     http_req_connecting............: avg=10.07µs  min=0s       med=0s      max=255.73ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=87.45ms  min=224.82µs med=68.22ms max=1.22s    p(90)=171.73ms p(95)=222.61ms
       { expected_response:true }...: avg=87.45ms  min=224.82µs med=68.22ms max=1.22s    p(90)=171.73ms p(95)=222.61ms
     http_req_failed................: 0.00%  ✓ 0           ✗ 916366
     http_req_receiving.............: avg=10.74ms  min=5.05µs   med=22.18µs max=1.1s     p(90)=4.6ms    p(95)=59.43ms 
     http_req_sending...............: avg=1.23ms   min=5.12µs   med=12.47µs max=979.39ms p(90)=93.81µs  p(95)=132.65µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=75.47ms  min=196.3µs  med=64.74ms max=452.82ms p(90)=150.07ms p(95)=176.86ms
     http_reqs......................: 916366 2290.543027/s
     iteration_duration.............: avg=151.07ms min=658.8µs  med=110.6ms max=1.71s    p(90)=323.91ms p(95)=439.89ms
     iterations.....................: 916366 2290.543027/s
     vus............................: 350    min=350       max=350 
     vus_max........................: 350    min=350       max=350 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/765d348a-9568-44e2-c5c1-d95512f0b900/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/439ae1c2-2664-4758-9b65-7e54f6a21800/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3359e33d-495b-48fb-0eba-083ebebda900/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  0% — ✓ 0 / ✗ 323227
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 323227

     checks.........................: 33.33% ✓ 323227     ✗ 646454
     data_received..................: 307 MB 768 kB/s
     data_sent......................: 384 MB 958 kB/s
     http_req_blocked...............: avg=12.68µs  min=781ns   med=2.1µs    max=279.71ms p(90)=3.37µs   p(95)=4.17µs  
     http_req_connecting............: avg=2.66µs   min=0s      med=0s       max=25.53ms  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=429.93ms min=86.55ms med=428.91ms max=1.17s    p(90)=612.02ms p(95)=660.51ms
       { expected_response:true }...: avg=429.93ms min=86.55ms med=428.91ms max=1.17s    p(90)=612.02ms p(95)=660.51ms
     http_req_failed................: 0.00%  ✓ 0          ✗ 323227
     http_req_receiving.............: avg=2.63ms   min=9.08µs  med=23.78µs  max=391.64ms p(90)=307.06µs p(95)=11.46ms 
     http_req_sending...............: avg=338.25µs min=5.67µs  med=12.88µs  max=338.28ms p(90)=114.17µs p(95)=143.92µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=426.95ms min=86.51ms med=425.37ms max=973.14ms p(90)=607.74ms p(95)=652.22ms
     http_reqs......................: 323227 807.376551/s
     iteration_duration.............: avg=433.23ms min=91.39ms med=434.18ms max=1.17s    p(90)=616.28ms p(95)=666.29ms
     iterations.....................: 323227 807.376551/s
     vus............................: 350    min=350      max=350 
     vus_max........................: 350    min=350      max=350 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/863566fc-577a-4e3c-93b1-a9344f6aaf00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/fcee5aa8-46e0-48a8-f3b2-2223d1ac7a00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/dd06f72a-32cd-49ab-f4f7-cc52eb57aa00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 225549

     checks.........................: 66.66% ✓ 451098     ✗ 225549
     data_received..................: 255 MB 637 kB/s
     data_sent......................: 268 MB 669 kB/s
     http_req_blocked...............: avg=16.5µs   min=782ns    med=2.6µs    max=108.46ms p(90)=3.92µs   p(95)=4.65µs  
     http_req_connecting............: avg=7.35µs   min=0s       med=0s       max=36.71ms  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=617.84ms min=134.65ms med=599.63ms max=2.46s    p(90)=844.11ms p(95)=919.35ms
       { expected_response:true }...: avg=617.84ms min=134.65ms med=599.63ms max=2.46s    p(90)=844.11ms p(95)=919.35ms
     http_req_failed................: 0.00%  ✓ 0          ✗ 225549
     http_req_receiving.............: avg=4.66ms   min=12.43µs  med=30.49µs  max=370.35ms p(90)=352.42µs p(95)=34.45ms 
     http_req_sending...............: avg=306.65µs min=6.54µs   med=14.18µs  max=354.59ms p(90)=75.03µs  p(95)=137.95µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=612.87ms min=134.49ms med=595.37ms max=2.46s    p(90)=837.33ms p(95)=911.62ms
     http_reqs......................: 225549 563.432645/s
     iteration_duration.............: avg=620.93ms min=140.78ms med=602.55ms max=2.47s    p(90)=848.42ms p(95)=923.69ms
     iterations.....................: 225549 563.432645/s
     vus............................: 350    min=350      max=350 
     vus_max........................: 350    min=350      max=350 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b2524815-3668-4bcb-ea1a-2972faf83700/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/54773a93-0716-496c-719d-4bde0cec9d00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f69cae32-ba3c-4bc6-bab3-3c5b46eb6800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 134409     ✗ 0    
     data_received..................: 3.9 GB  9.8 MB/s
     data_sent......................: 53 MB   132 kB/s
     http_req_blocked...............: avg=186.37µs min=1.59µs   med=3.6µs   max=688.14ms p(90)=5.74µs   p(95)=6.91µs  
     http_req_connecting............: avg=111.38µs min=0s       med=0s      max=32.29ms  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=2.89s    min=639.06ms med=2.84s   max=6.63s    p(90)=3.66s    p(95)=3.97s   
       { expected_response:true }...: avg=2.89s    min=639.06ms med=2.84s   max=6.63s    p(90)=3.66s    p(95)=3.97s   
     http_req_failed................: 0.00%   ✓ 0          ✗ 44803
     http_req_receiving.............: avg=73.08ms  min=29.48µs  med=70.71µs max=3.49s    p(90)=231.55ms p(95)=524.13ms
     http_req_sending...............: avg=4.16ms   min=7.86µs   med=16.64µs max=2.17s    p(90)=41.13µs  p(95)=448.13µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=2.81s    min=638.98ms med=2.78s   max=5.77s    p(90)=3.52s    p(95)=3.8s    
     http_reqs......................: 44803   111.456216/s
     iteration_duration.............: avg=3.13s    min=686.93ms med=3.03s   max=8.8s     p(90)=4.04s    p(95)=4.48s   
     iterations.....................: 44803   111.456216/s
     vus............................: 41      min=41       max=350
     vus_max........................: 350     min=350      max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c6969bae-86d1-4343-4690-6bccd3f44300/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/fc2e528c-72af-4477-0eaf-2fbf3795bb00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/eeac1fcc-4824-45ff-50e9-a44e6610b200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 75258     ✗ 0    
     data_received..................: 2.2 GB  5.5 MB/s
     data_sent......................: 30 MB   74 kB/s
     http_req_blocked...............: avg=55.15µs  min=1.32µs med=2.98µs  max=41.97ms  p(90)=4.73µs   p(95)=5.8µs   
     http_req_connecting............: avg=42.07µs  min=0s     med=0s      max=30.43ms  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=5.58s    min=2.34s  med=5.41s   max=12.77s   p(90)=7.26s    p(95)=7.85s   
       { expected_response:true }...: avg=5.58s    min=2.34s  med=5.41s   max=12.77s   p(90)=7.26s    p(95)=7.85s   
     http_req_failed................: 0.00%   ✓ 0         ✗ 25086
     http_req_receiving.............: avg=1.93ms   min=35.4µs med=78.11µs max=453ms    p(90)=183.22µs p(95)=769.03µs
     http_req_sending...............: avg=193.89µs min=8.15µs med=14.77µs max=257.86ms p(90)=30.36µs  p(95)=53.26µs 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=5.58s    min=2.34s  med=5.4s    max=12.77s   p(90)=7.25s    p(95)=7.85s   
     http_reqs......................: 25086   62.164694/s
     iteration_duration.............: avg=5.6s     min=2.46s  med=5.43s   max=12.84s   p(90)=7.29s    p(95)=7.89s   
     iterations.....................: 25086   62.164694/s
     vus............................: 90      min=90      max=350
     vus_max........................: 350     min=350     max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c0de4402-8f67-412d-c729-209b4fc10600/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/adb06f42-923e-474d-b30c-99ee3ef34400/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0283d9c4-5420-451a-1579-af87d64a0000/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server-node16`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 73431     ✗ 0    
     data_received..................: 2.2 GB  5.3 MB/s
     data_sent......................: 29 MB   72 kB/s
     http_req_blocked...............: avg=59.62µs  min=1.37µs  med=3.22µs  max=36.91ms  p(90)=4.96µs   p(95)=5.97µs 
     http_req_connecting............: avg=49µs     min=0s      med=0s      max=24.54ms  p(90)=0s       p(95)=0s     
     http_req_duration..............: avg=5.72s    min=2.04s   med=5.62s   max=12.45s   p(90)=7.39s    p(95)=8.02s  
       { expected_response:true }...: avg=5.72s    min=2.04s   med=5.62s   max=12.45s   p(90)=7.39s    p(95)=8.02s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 24477
     http_req_receiving.............: avg=2.46ms   min=34.83µs med=79.5µs  max=304.28ms p(90)=211.54µs p(95)=1.04ms 
     http_req_sending...............: avg=251.42µs min=8.23µs  med=16.24µs max=259.68ms p(90)=32.7µs   p(95)=72.69µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s       p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=5.72s    min=1.97s   med=5.62s   max=12.45s   p(90)=7.39s    p(95)=8.02s  
     http_reqs......................: 24477   60.629895/s
     iteration_duration.............: avg=5.75s    min=2.05s   med=5.65s   max=12.47s   p(90)=7.43s    p(95)=8.05s  
     iterations.....................: 24477   60.629895/s
     vus............................: 131     min=131     max=350
     vus_max........................: 350     min=350     max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3119fd3f-e0be-4bf2-05a5-f3d74c166a00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4693bbd0-2874-448a-bab7-f372040dc100/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a9920599-e355-4c32-8d51-0bce39746300/public" alt="HTTP Overview" />


  </details>