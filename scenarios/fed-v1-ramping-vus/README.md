## Overview for: `fed-v1-ramping-vus`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. We are running a heavy load of concurrent VUs to measure response time and other stats, during stress. It measure things like memory usage, CPU usage, response times. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was trying to reach 1000 concurrent VUs over 60s


### Comparison


| Gateway                             | duration(p95)⬇️ |  RPS  |       Requests        |                       Durations                        |
| :---------------------------------- | :-------------: | :---: | :-------------------: | :----------------------------------------------------: |
| wundergraph                         |     1222ms      |  785  | 55009 total, 0 failed |    avg: 628ms, p95: 1222ms, max: 2010ms, med: 610ms    |
| mesh                                |     9965ms      |  90   | 6311 total, 0 failed  |  avg: 6027ms, p95: 9966ms, max: 12667ms, med: 6046ms   |
| mercurius                           |     11758ms     |  76   | 5340 total, 0 failed  |  avg: 6920ms, p95: 11758ms, max: 12487ms, med: 7323ms  |
| apollo-router                       |     11965ms     |  106  | 7755 total, 0 failed  |  avg: 5376ms, p95: 11965ms, max: 16967ms, med: 4854ms  |
| stitching-federation-with-yoga-bun  |     16846ms     |  82   | 5977 total, 0 failed  |  avg: 6886ms, p95: 16846ms, max: 23561ms, med: 6285ms  |
| stitching-federation-with-yoga-deno |     19925ms     |  43   | 3209 total, 0 failed  | avg: 13074ms, p95: 19926ms, max: 23157ms, med: 13624ms |
| stitching-federation-with-yoga      |     25386ms     |  51   | 3942 total, 0 failed  | avg: 10818ms, p95: 25386ms, max: 36365ms, med: 8159ms  |
| apollo-gateway-with-yoga            |     29324ms     |  60   | 4378 total, 0 failed  |  avg: 9236ms, p95: 29325ms, max: 39312ms, med: 5353ms  |
| apollo-server                       |     49468ms     |  56   | 4767 total, 0 failed  |  avg: 9473ms, p95: 49469ms, max: 58356ms, med: 2504ms  |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 165027     ✗ 0     
     data_received..................: 274 MB  3.9 MB/s
     data_sent......................: 65 MB   933 kB/s
     http_req_blocked...............: avg=258.23µs min=1µs    med=2.1µs    max=369.26ms p(90)=3.5µs   p(95)=5.1µs   
     http_req_connecting............: avg=251.83µs min=0s     med=0s       max=369.18ms p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=627.68ms min=6.26ms med=609.57ms max=2.01s    p(90)=1.09s   p(95)=1.22s   
       { expected_response:true }...: avg=627.68ms min=6.26ms med=609.57ms max=2.01s    p(90)=1.09s   p(95)=1.22s   
     http_req_failed................: 0.00%   ✓ 0          ✗ 55009 
     http_req_receiving.............: avg=598.79µs min=16.6µs med=39.5µs   max=272.81ms p(90)=168.2µs p(95)=362.06µs
     http_req_sending...............: avg=330.52µs min=6.6µs  med=11.8µs   max=272.67ms p(90)=25.2µs  p(95)=94µs    
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s       max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=626.75ms min=6.17ms med=608.82ms max=1.99s    p(90)=1.08s   p(95)=1.22s   
     http_reqs......................: 55009   785.763209/s
     iteration_duration.............: avg=628.73ms min=6.55ms med=610.56ms max=2.01s    p(90)=1.09s   p(95)=1.22s   
     iterations.....................: 55009   785.763209/s
     vus............................: 7       min=7        max=990 
     vus_max........................: 1000    min=1000     max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/be2d4d0c-ce7a-454f-abeb-0a2bcbbe7900/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0da96f27-6779-41e4-0a34-4a9d21ccfc00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 6288 / ✗ 23
     ✓ expected_result

     checks.........................: 99.87% ✓ 18910     ✗ 23    
     data_received..................: 32 MB  456 kB/s
     data_sent......................: 7.5 MB 107 kB/s
     http_req_blocked...............: avg=118.34µs min=1µs     med=2.1µs  max=14.41ms p(90)=376.6µs p(95)=427.9µs
     http_req_connecting............: avg=106.05µs min=0s      med=0s     max=13.48ms p(90)=314.7µs p(95)=365.9µs
     http_req_duration..............: avg=6.02s    min=13.59ms med=6.04s  max=12.66s  p(90)=9.6s    p(95)=9.96s  
       { expected_response:true }...: avg=6.02s    min=13.59ms med=6.04s  max=12.66s  p(90)=9.6s    p(95)=9.96s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 6311  
     http_req_receiving.............: avg=51.63µs  min=16.5µs  med=43.7µs max=1.44ms  p(90)=71µs    p(95)=79.85µs
     http_req_sending...............: avg=37.9µs   min=6.7µs   med=12.7µs max=27.67ms p(90)=54.1µs  p(95)=66µs   
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s      p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=6.02s    min=13.54ms med=6.04s  max=12.66s  p(90)=9.6s    p(95)=9.96s  
     http_reqs......................: 6311   90.153335/s
     iteration_duration.............: avg=6.02s    min=13.86ms med=6.04s  max=12.66s  p(90)=9.6s    p(95)=9.96s  
     iterations.....................: 6311   90.153335/s
     vus............................: 7      min=7       max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9bba7d78-feab-459b-d980-55851b010d00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/78b42d39-a681-48c6-ca78-c99651b52a00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 16020     ✗ 0     
     data_received..................: 27 MB   384 kB/s
     data_sent......................: 6.3 MB  91 kB/s
     http_req_blocked...............: avg=114.76µs min=1.5µs   med=2.9µs  max=15.4ms p(90)=430.5µs  p(95)=471.41µs
     http_req_connecting............: avg=95.82µs  min=0s      med=0s     max=15.3ms p(90)=354.91µs p(95)=395.6µs 
     http_req_duration..............: avg=6.92s    min=10.38ms med=7.32s  max=12.48s p(90)=11.3s    p(95)=11.75s  
       { expected_response:true }...: avg=6.92s    min=10.38ms med=7.32s  max=12.48s p(90)=11.3s    p(95)=11.75s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 5340  
     http_req_receiving.............: avg=77.52µs  min=20.8µs  med=71.8µs max=8.91ms p(90)=99.4µs   p(95)=110µs   
     http_req_sending...............: avg=36.15µs  min=6.6µs   med=18.3µs max=3.34ms p(90)=74.81µs  p(95)=89.21µs 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s     p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=6.92s    min=10.3ms  med=7.32s  max=12.48s p(90)=11.3s    p(95)=11.75s  
     http_reqs......................: 5340    76.276215/s
     iteration_duration.............: avg=6.92s    min=10.71ms med=7.32s  max=12.48s p(90)=11.3s    p(95)=11.75s  
     iterations.....................: 5340    76.276215/s
     vus............................: 8       min=8       max=1000
     vus_max........................: 1000    min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/03de24e7-4c29-4a70-2ac3-b7fbcf4b2500/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/60bbf802-0cbf-40e0-5e10-2e2875914700/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 7724 / ✗ 31
     ✗ expected_result
      ↳  99% — ✓ 7754 / ✗ 1

     checks.........................: 99.86% ✓ 23233      ✗ 32    
     data_received..................: 39 MB  533 kB/s
     data_sent......................: 9.2 MB 127 kB/s
     http_req_blocked...............: avg=82.66µs min=1.1µs    med=2.2µs   max=22.65ms p(90)=176.32µs p(95)=413.4µs 
     http_req_connecting............: avg=68.87µs min=0s       med=0s      max=16.6ms  p(90)=114.9µs  p(95)=344.66µs
     http_req_duration..............: avg=5.37s   min=449.57ms med=4.85s   max=16.96s  p(90)=11.42s   p(95)=11.96s  
       { expected_response:true }...: avg=5.37s   min=449.57ms med=4.85s   max=16.96s  p(90)=11.42s   p(95)=11.96s  
     http_req_failed................: 0.00%  ✓ 0          ✗ 7755  
     http_req_receiving.............: avg=58.5µs  min=20.8µs   med=46.59µs max=12.81ms p(90)=77µs     p(95)=87.8µs  
     http_req_sending...............: avg=38.37µs min=6.8µs    med=13.4µs  max=13.36ms p(90)=53.3µs   p(95)=70.33µs 
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s      max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=5.37s   min=449.5ms  med=4.85s   max=16.96s  p(90)=11.42s   p(95)=11.96s  
     http_reqs......................: 7755   106.981333/s
     iteration_duration.............: avg=5.37s   min=449.85ms med=4.85s   max=16.96s  p(90)=11.42s   p(95)=11.96s  
     iterations.....................: 7755   106.981333/s
     vus............................: 149    min=55       max=1000
     vus_max........................: 1000   min=1000     max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2f5e0e16-9008-478f-2369-d5413e631d00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/829d1fc5-8fad-4fcb-3bad-67a481797400/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 17931    ✗ 0     
     data_received..................: 30 MB   412 kB/s
     data_sent......................: 7.1 MB  98 kB/s
     http_req_blocked...............: avg=105.91µs min=900ns    med=2µs    max=73.57ms  p(90)=166.04µs p(95)=414.76µs
     http_req_connecting............: avg=87.87µs  min=0s       med=0s     max=58.34ms  p(90)=109.34µs p(95)=343.04µs
     http_req_duration..............: avg=6.88s    min=574.33ms med=6.28s  max=23.56s   p(90)=12.39s   p(95)=16.84s  
       { expected_response:true }...: avg=6.88s    min=574.33ms med=6.28s  max=23.56s   p(90)=12.39s   p(95)=16.84s  
     http_req_failed................: 0.00%   ✓ 0        ✗ 5977  
     http_req_receiving.............: avg=226.58µs min=15.1µs   med=36.2µs max=125.14ms p(90)=73.5µs   p(95)=212.28µs
     http_req_sending...............: avg=483.78µs min=5.7µs    med=11.4µs max=154.18ms p(90)=80.84µs  p(95)=116.64µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=6.88s    min=574.29ms med=6.28s  max=23.56s   p(90)=12.39s   p(95)=16.84s  
     http_reqs......................: 5977    82.65954/s
     iteration_duration.............: avg=6.88s    min=574.61ms med=6.28s  max=23.56s   p(90)=12.39s   p(95)=16.84s  
     iterations.....................: 5977    82.65954/s
     vus............................: 376     min=56     max=1000
     vus_max........................: 1000    min=1000   max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1e8acf48-24b7-49f7-0019-101fc445fc00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/94740659-8147-4269-e607-09432a468700/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-deno`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 3194 / ✗ 15
     ✗ expected_result
      ↳  99% — ✓ 3204 / ✗ 5

     checks.........................: 99.79% ✓ 9607      ✗ 20    
     data_received..................: 16 MB  221 kB/s
     data_sent......................: 3.8 MB 52 kB/s
     http_req_blocked...............: avg=325.19µs min=1.2µs  med=3.3µs  max=23.49ms p(90)=548.56µs p(95)=614.8µs 
     http_req_connecting............: avg=294.17µs min=0s     med=0s     max=23.31ms p(90)=464.16µs p(95)=527.42µs
     http_req_duration..............: avg=13.07s   min=1.83s  med=13.62s max=23.15s  p(90)=19.46s   p(95)=19.92s  
       { expected_response:true }...: avg=13.07s   min=1.83s  med=13.62s max=23.15s  p(90)=19.46s   p(95)=19.92s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 3209  
     http_req_receiving.............: avg=116.76µs min=19.4µs med=55.1µs max=8.08ms  p(90)=129.52µs p(95)=207.26µs
     http_req_sending...............: avg=95.49µs  min=8.4µs  med=21.1µs max=17.56ms p(90)=93.1µs   p(95)=118.56µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=13.07s   min=1.83s  med=13.62s max=23.15s  p(90)=19.46s   p(95)=19.92s  
     http_reqs......................: 3209   43.755809/s
     iteration_duration.............: avg=13.07s   min=1.84s  med=13.62s max=23.15s  p(90)=19.46s   p(95)=19.92s  
     iterations.....................: 3209   43.755809/s
     vus............................: 11     min=11      max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0dfbae14-5463-4052-1c02-dd8002b62800/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/abae96d5-d081-4a96-da98-fcdada96ec00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  76% — ✓ 3021 / ✗ 921
     ✗ expected_result
      ↳  96% — ✓ 3809 / ✗ 133

     checks.........................: 91.08% ✓ 10772     ✗ 1054  
     data_received..................: 24 MB  317 kB/s
     data_sent......................: 4.7 MB 61 kB/s
     http_req_blocked...............: avg=197.6µs  min=1µs    med=2.2µs   max=106.43ms p(90)=392.48µs p(95)=435.67µs
     http_req_connecting............: avg=165.43µs min=0s     med=0s      max=99.1ms   p(90)=323.99µs p(95)=363.8µs 
     http_req_duration..............: avg=10.81s   min=1.12s  med=8.15s   max=36.36s   p(90)=21.86s   p(95)=25.38s  
       { expected_response:true }...: avg=10.81s   min=1.12s  med=8.15s   max=36.36s   p(90)=21.86s   p(95)=25.38s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 3942  
     http_req_receiving.............: avg=79.61µs  min=17.3µs med=46.05µs max=9.13ms   p(90)=85.59µs  p(95)=98.8µs  
     http_req_sending...............: avg=110.06µs min=6.7µs  med=15µs    max=62.64ms  p(90)=70.9µs   p(95)=87.5µs  
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=10.81s   min=1.12s  med=8.15s   max=36.36s   p(90)=21.86s   p(95)=25.38s  
     http_reqs......................: 3942   51.415385/s
     iteration_duration.............: avg=10.81s   min=1.12s  med=8.15s   max=36.36s   p(90)=21.86s   p(95)=25.38s  
     iterations.....................: 3942   51.415385/s
     vus............................: 60     min=56      max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/430d81fe-b1cb-4c28-c0a6-0b7d93e85900/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a8b0e544-c078-43ba-2580-558a4e1c9a00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  79% — ✓ 3481 / ✗ 897
     ✗ expected_result
      ↳  95% — ✓ 4175 / ✗ 203

     checks.........................: 91.62% ✓ 12034     ✗ 1100  
     data_received..................: 20 MB  281 kB/s
     data_sent......................: 5.2 MB 72 kB/s
     http_req_blocked...............: avg=132.69µs min=1.4µs  med=2.5µs  max=17.87ms p(90)=437.13µs p(95)=487.67µs
     http_req_connecting............: avg=114.39µs min=0s     med=0s     max=17.8ms  p(90)=366.45µs p(95)=411.62µs
     http_req_duration..............: avg=9.23s    min=1.04s  med=5.35s  max=39.31s  p(90)=24.67s   p(95)=29.32s  
       { expected_response:true }...: avg=9.23s    min=1.04s  med=5.35s  max=39.31s  p(90)=24.67s   p(95)=29.32s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 4378  
     http_req_receiving.............: avg=66.02µs  min=20.1µs med=52.9µs max=6.46ms  p(90)=86.6µs   p(95)=98.3µs  
     http_req_sending...............: avg=36.71µs  min=8.9µs  med=14.9µs max=3.58ms  p(90)=73.1µs   p(95)=89.82µs 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=9.23s    min=1.04s  med=5.35s  max=39.31s  p(90)=24.67s   p(95)=29.32s  
     http_reqs......................: 4378   60.773949/s
     iteration_duration.............: avg=9.23s    min=1.04s  med=5.35s  max=39.31s  p(90)=24.67s   p(95)=29.32s  
     iterations.....................: 4378   60.773949/s
     vus............................: 336    min=55      max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/123899df-6d36-45d9-fa8b-6ed0872dd400/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b9f133eb-ddc9-4bfd-a0d4-af29a063f500/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 4739 / ✗ 28
     ✗ expected_result
      ↳  99% — ✓ 4758 / ✗ 9

     checks.........................: 99.74% ✓ 14264     ✗ 37    
     data_received..................: 25 MB  288 kB/s
     data_sent......................: 5.7 MB 67 kB/s
     http_req_blocked...............: avg=127.33µs min=1.2µs    med=2.5µs  max=16.02ms p(90)=432.89µs p(95)=492.58µs
     http_req_connecting............: avg=109.1µs  min=0s       med=0s     max=15.95ms p(90)=357.9µs  p(95)=413.24µs
     http_req_duration..............: avg=9.47s    min=143.52ms med=2.5s   max=58.35s  p(90)=39.15s   p(95)=49.46s  
       { expected_response:true }...: avg=9.47s    min=143.52ms med=2.5s   max=58.35s  p(90)=39.15s   p(95)=49.46s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 4767  
     http_req_receiving.............: avg=76.13µs  min=25.3µs   med=65.3µs max=8.85ms  p(90)=97.8µs   p(95)=108µs   
     http_req_sending...............: avg=58µs     min=7.4µs    med=15.2µs max=10.67ms p(90)=75.2µs   p(95)=89.91µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=9.47s    min=143.41ms med=2.5s   max=58.35s  p(90)=39.15s   p(95)=49.46s  
     http_reqs......................: 4767   56.025737/s
     iteration_duration.............: avg=9.47s    min=143.85ms med=2.5s   max=58.35s  p(90)=39.15s   p(95)=49.46s  
     iterations.....................: 4767   56.025737/s
     vus............................: 4      min=4       max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/21c13c99-4b57-4729-e071-033b50058100/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/59801c23-a365-4b6d-da30-feb9e5e16800/public" alt="HTTP Overview" />


  </details>