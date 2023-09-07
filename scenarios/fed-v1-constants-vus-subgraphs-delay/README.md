## Overview for: `scenarios/fed-v1-constants-vus-subgraphs-delay`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. All subgraphs have an intentional delay on replying, and this creates additional pressure on the gateway's memory. We are running a heavy load of concurrent VUs to measure response time and other stats, during stress. It measure things like memory usage, CPU usage, response times.


This scenario was running 350 VUs over 400s


### Comparison


| Gateway              | RPS ⬇️ |        Requests        |          Duration          |
| :------------------- | :----: | :--------------------: | :------------------------: |
| wundergraph          |  640   | 256464 total, 0 failed |   avg: 435ms, p95: 871ms   |
| mesh-bun             |  429   | 171977 total, 0 failed |  avg: 811ms, p95: 1168ms   |
| mesh                 |  191   | 76826 total, 0 failed  |  avg: 1821ms, p95: 2195ms  |
| apollo-router        |   52   | 21086 total, 0 failed  |  avg: 6663ms, p95: 8948ms  |
| apollo-server-node16 |   34   | 13889 total, 0 failed  | avg: 10115ms, p95: 16713ms |
| mesh-supergraph      |   33   | 13783 total, 0 failed  | avg: 10224ms, p95: 11166ms |
| apollo-server        |   22   |  9388 total, 1 failed  | avg: 15126ms, p95: 24494ms |
| mercurius            |   7    | 3167 total, 418 failed | avg: 44884ms, p95: 60001ms |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 256464

     checks.........................: 66.66% ✓ 512928     ✗ 256464
     data_received..................: 37 MB  93 kB/s
     data_sent......................: 304 MB 760 kB/s
     http_req_blocked...............: avg=329.31µs min=1.4µs    med=3.2µs    max=1.45s p(90)=4.89µs   p(95)=8.5µs   
     http_req_connecting............: avg=307.44µs min=0s       med=0s       max=1.01s p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=434.51ms min=449.39µs med=417.76ms max=2.87s p(90)=750.31ms p(95)=870.79ms
       { expected_response:true }...: avg=434.51ms min=449.39µs med=417.76ms max=2.87s p(90)=750.31ms p(95)=870.79ms
     http_req_failed................: 0.00%  ✓ 0          ✗ 256464
     http_req_receiving.............: avg=55.24ms  min=9.1µs    med=44.2µs   max=2.03s p(90)=205.88ms p(95)=350.29ms
     http_req_sending...............: avg=5.13ms   min=8.5µs    med=17.6µs   max=1.8s  p(90)=150.99µs p(95)=1.32ms  
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s    p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=374.13ms min=378.19µs med=386.95ms max=1.58s p(90)=620.24ms p(95)=679.38ms
     http_reqs......................: 256464 640.372673/s
     iteration_duration.............: avg=545.25ms min=1.28ms   med=508.57ms max=3.74s p(90)=932.12ms p(95)=1.15s   
     iterations.....................: 256464 640.372673/s
     vus............................: 25     min=25       max=350 
     vus_max........................: 350    min=350      max=350 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/67fae414-c068-478c-b9b8-7cc4e4656000/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/421d6976-aa80-4225-54be-1cd3a706db00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c649147b-b34c-4884-0c7b-b460d3654700/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  0% — ✓ 0 / ✗ 171977
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 171977

     checks.........................: 33.33% ✓ 171977     ✗ 343954
     data_received..................: 164 MB 408 kB/s
     data_sent......................: 204 MB 509 kB/s
     http_req_blocked...............: avg=59.31µs  min=1µs      med=2.1µs    max=253.03ms p(90)=3.4µs    p(95)=4.1µs   
     http_req_connecting............: avg=48.76µs  min=0s       med=0s       max=37.59ms  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=811.29ms min=190.96ms med=847.28ms max=1.74s    p(90)=1.09s    p(95)=1.16s   
       { expected_response:true }...: avg=811.29ms min=190.96ms med=847.28ms max=1.74s    p(90)=1.09s    p(95)=1.16s   
     http_req_failed................: 0.00%  ✓ 0          ✗ 171977
     http_req_receiving.............: avg=4.1ms    min=10.1µs   med=24.6µs   max=507.39ms p(90)=680.42µs p(95)=12.69ms 
     http_req_sending...............: avg=954.08µs min=6.3µs    med=11.8µs   max=462.67ms p(90)=102.4µs  p(95)=152.32µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=806.24ms min=190.14ms med=842.3ms  max=1.67s    p(90)=1.08s    p(95)=1.15s   
     http_reqs......................: 171977 429.183644/s
     iteration_duration.............: avg=814.94ms min=196.02ms med=850.43ms max=1.75s    p(90)=1.09s    p(95)=1.17s   
     iterations.....................: 171977 429.183644/s
     vus............................: 350    min=350      max=350 
     vus_max........................: 350    min=350      max=350 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ff0a1c3a-aab1-44f1-1a8a-9abc5fb93c00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a45623bd-fcd7-4a8c-8785-1cb783cdbd00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e4804448-d978-4fa5-591b-a4793066bb00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 76826

     checks.........................: 66.66% ✓ 153652     ✗ 76826
     data_received..................: 87 MB  217 kB/s
     data_sent......................: 91 MB  227 kB/s
     http_req_blocked...............: avg=154.45µs min=1.4µs    med=2.6µs  max=293.23ms p(90)=4.1µs   p(95)=7.3µs   
     http_req_connecting............: avg=134.9µs  min=0s       med=0s     max=110.31ms p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=1.82s    min=763.77ms med=1.79s  max=5.29s    p(90)=2.1s    p(95)=2.19s   
       { expected_response:true }...: avg=1.82s    min=763.77ms med=1.79s  max=5.29s    p(90)=2.1s    p(95)=2.19s   
     http_req_failed................: 0.00%  ✓ 0          ✗ 76826
     http_req_receiving.............: avg=2.49ms   min=14.6µs   med=40.9µs max=405.02ms p(90)=295.9µs p(95)=1.26ms  
     http_req_sending...............: avg=1.05ms   min=9µs      med=15.4µs max=418.11ms p(90)=126.2µs p(95)=514.43µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=1.81s    min=763.7ms  med=1.79s  max=5.29s    p(90)=2.09s   p(95)=2.19s   
     http_reqs......................: 76826  191.604592/s
     iteration_duration.............: avg=1.82s    min=765.66ms med=1.8s   max=5.54s    p(90)=2.1s    p(95)=2.2s    
     iterations.....................: 76826  191.604592/s
     vus............................: 166    min=166      max=350
     vus_max........................: 350    min=350      max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/dea49c2e-0671-4c72-4203-eb5cbce34f00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6f3a65fc-0cec-4924-e2d6-0d32e2041900/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a618be10-b811-4871-9116-ab5037a61800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 63258     ✗ 0    
     data_received..................: 1.8 GB  4.6 MB/s
     data_sent......................: 25 MB   62 kB/s
     http_req_blocked...............: avg=419.58µs min=1.2µs  med=3µs    max=42.13ms  p(90)=4.2µs    p(95)=5µs     
     http_req_connecting............: avg=404.85µs min=0s     med=0s     max=42.11ms  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=6.66s    min=2.06s  med=6.57s  max=13.12s   p(90)=8.35s    p(95)=8.94s   
       { expected_response:true }...: avg=6.66s    min=2.06s  med=6.57s  max=13.12s   p(90)=8.35s    p(95)=8.94s   
     http_req_failed................: 0.00%   ✓ 0         ✗ 21086
     http_req_receiving.............: avg=592.3µs  min=40.8µs med=78.3µs max=178.51ms p(90)=254.55µs p(95)=362.57µs
     http_req_sending...............: avg=716.9µs  min=6.9µs  med=16.6µs max=173.3ms  p(90)=31.2µs   p(95)=943.82µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=6.66s    min=2.03s  med=6.56s  max=13.12s   p(90)=8.35s    p(95)=8.94s   
     http_reqs......................: 21086   52.109201/s
     iteration_duration.............: avg=6.68s    min=2.07s  med=6.59s  max=13.13s   p(90)=8.36s    p(95)=8.97s   
     iterations.....................: 21086   52.109201/s
     vus............................: 87      min=87      max=350
     vus_max........................: 350     min=350     max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d10886fe-1891-4699-8dff-1689eeebca00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d219ac4c-1f21-42da-6814-2e22caa78e00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7d406ba9-323e-4f05-bd0a-2e729a8d5600/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server-node16`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 41667     ✗ 0    
     data_received..................: 1.2 GB  3.0 MB/s
     data_sent......................: 17 MB   41 kB/s
     http_req_blocked...............: avg=240.91µs min=1.7µs  med=3.6µs  max=195.29ms p(90)=5.4µs    p(95)=7.1µs  
     http_req_connecting............: avg=197.46µs min=0s     med=0s     max=48.64ms  p(90)=0s       p(95)=0s     
     http_req_duration..............: avg=10.11s   min=1.38s  med=9.47s  max=30.43s   p(90)=14.27s   p(95)=16.71s 
       { expected_response:true }...: avg=10.11s   min=1.38s  med=9.47s  max=30.43s   p(90)=14.27s   p(95)=16.71s 
     http_req_failed................: 0.00%   ✓ 0         ✗ 13889
     http_req_receiving.............: avg=4.56ms   min=52.8µs med=95.2µs max=590.39ms p(90)=493.19µs p(95)=4.92ms 
     http_req_sending...............: avg=2.59ms   min=8.2µs  med=17.7µs max=484.12ms p(90)=70.38µs  p(95)=10.51ms
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s       p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=10.1s    min=1.38s  med=9.46s  max=30.43s   p(90)=14.27s   p(95)=16.7s  
     http_reqs......................: 13889   34.229399/s
     iteration_duration.............: avg=10.16s   min=1.39s  med=9.52s  max=30.44s   p(90)=14.32s   p(95)=16.76s 
     iterations.....................: 13889   34.229399/s
     vus............................: 23      min=23      max=350
     vus_max........................: 350     min=350     max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/12cfee2c-cff2-4533-1708-9a173b181900/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/bea7aa62-64f3-4619-0cfc-22d155587400/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c8e572ee-5362-4fb2-611e-cb4e20dd5d00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 13783

     checks.........................: 66.66% ✓ 27566     ✗ 13783
     data_received..................: 1.2 GB 3.0 MB/s
     data_sent......................: 16 MB  40 kB/s
     http_req_blocked...............: avg=347.94µs min=2.1µs  med=4.59µs max=74.72ms p(90)=6.8µs   p(95)=15.3µs  
     http_req_connecting............: avg=326.83µs min=0s     med=0s     max=28.32ms p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=10.22s   min=5.28s  med=10.23s max=14.43s  p(90)=10.94s  p(95)=11.16s  
       { expected_response:true }...: avg=10.22s   min=5.28s  med=10.23s max=14.43s  p(90)=10.94s  p(95)=11.16s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 13783
     http_req_receiving.............: avg=606.93µs min=65.4µs med=164µs  max=1.12s   p(90)=407.2µs p(95)=527.24µs
     http_req_sending...............: avg=167.05µs min=9.6µs  med=26.1µs max=60.69ms p(90)=41.09µs p(95)=60.38µs 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=10.22s   min=5.28s  med=10.22s max=14.43s  p(90)=10.93s  p(95)=11.16s  
     http_reqs......................: 13783  33.971939/s
     iteration_duration.............: avg=10.22s   min=5.28s  med=10.23s max=14.46s  p(90)=10.94s  p(95)=11.16s  
     iterations.....................: 13783  33.971939/s
     vus............................: 70     min=70      max=350
     vus_max........................: 350    min=350     max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/367d44aa-17f3-47af-f268-57a954aa4300/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c431235c-596b-4f38-060a-0717bbad7900/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8f498890-c2e3-49c7-8f42-a23ad3dd8d00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  99% — ✓ 9387 / ✗ 1
     ✗ no graphql errors
      ↳  99% — ✓ 9387 / ✗ 1
     ✓ valid response structure

     checks.........................: 99.99% ✓ 28161     ✗ 2    
     data_received..................: 825 MB 2.0 MB/s
     data_sent......................: 11 MB  27 kB/s
     http_req_blocked...............: avg=2.53ms min=2.2µs  med=4.7µs   max=142.28ms p(90)=8.3µs    p(95)=23.56µs
     http_req_connecting............: avg=2.44ms min=0s     med=0s      max=94.44ms  p(90)=0s       p(95)=0s     
     http_req_duration..............: avg=15.12s min=1.12s  med=13.77s  max=48.96s   p(90)=22.05s   p(95)=24.49s 
       { expected_response:true }...: avg=15.12s min=1.12s  med=13.77s  max=48.96s   p(90)=22.04s   p(95)=24.48s 
     http_req_failed................: 0.01%  ✓ 1         ✗ 9387 
     http_req_receiving.............: avg=5.24ms min=0s     med=145.7µs max=603.59ms p(90)=930.45µs p(95)=5.97ms 
     http_req_sending...............: avg=2.29ms min=11.2µs med=27.5µs  max=511.49ms p(90)=179.68µs p(95)=11.07ms
     http_req_tls_handshaking.......: avg=0s     min=0s     med=0s      max=0s       p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=15.11s min=1.12s  med=13.77s  max=48.73s   p(90)=22.02s   p(95)=24.46s 
     http_reqs......................: 9388   22.836776/s
     iteration_duration.............: avg=15.19s min=1.13s  med=13.85s  max=49.25s   p(90)=22.14s   p(95)=24.68s 
     iterations.....................: 9388   22.836776/s
     vus............................: 65     min=65      max=350
     vus_max........................: 350    min=350     max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7f69fe91-b678-466c-bbc5-99292bdef600/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/448f219a-ad03-424a-45d6-359dd8122600/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/96d8a7fd-3b8e-41a6-e87c-c226543c9900/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  86% — ✓ 2749 / ✗ 418
     ✗ no graphql errors
      ↳  86% — ✓ 2749 / ✗ 418
     ✓ valid response structure

     checks.........................: 90.79% ✓ 8247     ✗ 836  
     data_received..................: 241 MB 561 kB/s
     data_sent......................: 3.9 MB 9.2 kB/s
     http_req_blocked...............: avg=3.61ms   min=2.1µs  med=4.5µs   max=58.71ms  p(90)=5.76ms   p(95)=39.68ms 
     http_req_connecting............: avg=3.58ms   min=0s     med=0s      max=58.47ms  p(90)=5.73ms   p(95)=39.65ms 
     http_req_duration..............: avg=44.88s   min=9.61s  med=50.83s  max=1m0s     p(90)=1m0s     p(95)=1m0s    
       { expected_response:true }...: avg=42.58s   min=9.61s  med=46.83s  max=59.99s   p(90)=57.43s   p(95)=59.01s  
     http_req_failed................: 13.19% ✓ 418      ✗ 2749 
     http_req_receiving.............: avg=359.25µs min=0s     med=121.8µs max=149.28ms p(90)=358.86µs p(95)=505.18µs
     http_req_sending...............: avg=394.1µs  min=12.2µs med=29µs    max=16.1ms   p(90)=910.32µs p(95)=1.96ms  
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=44.88s   min=9.61s  med=50.83s  max=1m0s     p(90)=1m0s     p(95)=1m0s    
     http_reqs......................: 3167   7.364934/s
     iteration_duration.............: avg=44.89s   min=9.61s  med=50.84s  max=1m0s     p(90)=1m0s     p(95)=1m0s    
     iterations.....................: 3167   7.364934/s
     vus............................: 152    min=152    max=350
     vus_max........................: 350    min=350    max=350
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/aa408428-2dda-45a2-9645-3757def5ff00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/93447755-2387-4876-635e-34937c941d00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e07019d5-7a54-4d39-8d06-2d4928405100/public" alt="HTTP Overview" />


  </details>