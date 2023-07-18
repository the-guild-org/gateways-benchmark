## Overview for scenario: `ramping-vus`


This scenario runs 4 servics and a GraphQL gateway with Federation spec, and runs a heavy query. We are running a heavy load of concurrent VUs to measure response time and other stats, during stress. It measure things like memory usage, CPU usage, response times. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was trying to reach 1000 concurrent VUs over 60s


### Comparison


| Gateway                             | duration(p95)⬇️ |  RPS  |       Requests        |                       Durations                        |
| :---------------------------------- | :-------------: | :---: | :-------------------: | :----------------------------------------------------: |
| wundergraph                         |     1086ms      |  901  | 63119 total, 0 failed |    avg: 544ms, p95: 1086ms, max: 1745ms, med: 511ms    |
| mercurius                           |     10495ms     |  87   | 6103 total, 0 failed  |  avg: 6017ms, p95: 10495ms, max: 10904ms, med: 5950ms  |
| stitching-federation-with-yoga-bun  |     14212ms     |  86   | 6087 total, 0 failed  |  avg: 6300ms, p95: 14213ms, max: 21408ms, med: 5911ms  |
| apollo-router                       |     15093ms     |  69   | 5138 total, 0 failed  |  avg: 7870ms, p95: 15093ms, max: 26860ms, med: 7574ms  |
| stitching-federation-with-yoga-deno |     16565ms     |  53   | 3830 total, 0 failed  | avg: 10556ms, p95: 16566ms, max: 21756ms, med: 11255ms |
| mesh                                |     25177ms     |  37   | 2896 total, 0 failed  | avg: 15388ms, p95: 25178ms, max: 32336ms, med: 15912ms |
| stitching-federation-with-yoga      |     30398ms     |  49   | 3843 total, 0 failed  | avg: 11616ms, p95: 30398ms, max: 40902ms, med: 8008ms  |
| apollo-gateway-with-yoga            |     32689ms     |  44   | 3414 total, 0 failed  | avg: 12784ms, p95: 32690ms, max: 49801ms, med: 10104ms |
| apollo-server                       |     47537ms     |  60   | 5202 total, 0 failed  |  avg: 8538ms, p95: 47538ms, max: 57474ms, med: 2339ms  |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 189357     ✗ 0     
     data_received..................: 307 MB  4.4 MB/s
     data_sent......................: 75 MB   1.1 MB/s
     http_req_blocked...............: avg=622.16µs min=900ns  med=2.1µs    max=531.36ms p(90)=3.7µs    p(95)=5.6µs   
     http_req_connecting............: avg=614.37µs min=0s     med=0s       max=531.24ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=543.73ms min=5.88ms med=510.81ms max=1.74s    p(90)=965.73ms p(95)=1.08s   
       { expected_response:true }...: avg=543.73ms min=5.88ms med=510.81ms max=1.74s    p(90)=965.73ms p(95)=1.08s   
     http_req_failed................: 0.00%   ✓ 0          ✗ 63119 
     http_req_receiving.............: avg=1.04ms   min=16.4µs med=38.6µs   max=296.04ms p(90)=185.8µs  p(95)=371.31µs
     http_req_sending...............: avg=709.82µs min=7µs    med=12.2µs   max=363.75ms p(90)=30µs     p(95)=116.01µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=541.97ms min=5.8ms  med=509.6ms  max=1.73s    p(90)=963.88ms p(95)=1.07s   
     http_reqs......................: 63119   901.603631/s
     iteration_duration.............: avg=546.37ms min=6.18ms med=512.71ms max=1.74s    p(90)=972.12ms p(95)=1.08s   
     iterations.....................: 63119   901.603631/s
     vus............................: 9       min=9        max=999 
     vus_max........................: 1000    min=1000     max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/eaf90516-51cc-4a27-a7d1-cb232bebf300/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/176dc662-3c4c-419c-4e10-cb8402c65d00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 18309     ✗ 0     
     data_received..................: 31 MB   439 kB/s
     data_sent......................: 7.2 MB  104 kB/s
     http_req_blocked...............: avg=92.03µs min=900ns  med=2.6µs  max=15.01ms p(90)=364.75µs p(95)=408.98µs
     http_req_connecting............: avg=78.72µs min=0s     med=0s     max=14.94ms p(90)=304.97µs p(95)=339.56µs
     http_req_duration..............: avg=6.01s   min=7.62ms med=5.95s  max=10.9s   p(90)=9.96s    p(95)=10.49s  
       { expected_response:true }...: avg=6.01s   min=7.62ms med=5.95s  max=10.9s   p(90)=9.96s    p(95)=10.49s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 6103  
     http_req_receiving.............: avg=62.93µs min=19.7µs med=56.9µs max=8.35ms  p(90)=84.67µs  p(95)=93.39µs 
     http_req_sending...............: avg=31.51µs min=7.2µs  med=16.4µs max=6.28ms  p(90)=61.7µs   p(95)=73.09µs 
     http_req_tls_handshaking.......: avg=0s      min=0s     med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=6.01s   min=7.55ms med=5.95s  max=10.9s   p(90)=9.96s    p(95)=10.49s  
     http_reqs......................: 6103    87.179659/s
     iteration_duration.............: avg=6.01s   min=7.95ms med=5.95s  max=10.9s   p(90)=9.96s    p(95)=10.49s  
     iterations.....................: 6103    87.179659/s
     vus............................: 6       min=6       max=1000
     vus_max........................: 1000    min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2c8043dc-555e-4eec-a69d-563f031fa900/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e837bc1e-a32c-4b31-5561-3f08ff035f00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 18261     ✗ 0     
     data_received..................: 30 MB   433 kB/s
     data_sent......................: 7.2 MB  103 kB/s
     http_req_blocked...............: avg=325.17µs min=800ns   med=1.6µs  max=366.51ms p(90)=165.53µs p(95)=388.74µs
     http_req_connecting............: avg=173.14µs min=0s      med=0s     max=191.72ms p(90)=111.2µs  p(95)=327.64µs
     http_req_duration..............: avg=6.3s     min=32.5ms  med=5.91s  max=21.4s    p(90)=11.1s    p(95)=14.21s  
       { expected_response:true }...: avg=6.3s     min=32.5ms  med=5.91s  max=21.4s    p(90)=11.1s    p(95)=14.21s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 6087  
     http_req_receiving.............: avg=5.66ms   min=14.5µs  med=26.4µs max=175.15ms p(90)=85.7µs   p(95)=1.32ms  
     http_req_sending...............: avg=357µs    min=6µs     med=9.4µs  max=178.38ms p(90)=63.84µs  p(95)=98.19µs 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=6.29s    min=32.39ms med=5.91s  max=21.4s    p(90)=11.1s    p(95)=14.17s  
     http_reqs......................: 6087    86.942253/s
     iteration_duration.............: avg=6.3s     min=32.84ms med=5.91s  max=21.4s    p(90)=11.11s   p(95)=14.21s  
     iterations.....................: 6087    86.942253/s
     vus............................: 128     min=57      max=1000
     vus_max........................: 1000    min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3e8a8a0b-b89d-4ba3-6585-6f451ea83000/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/daf747cb-b852-4f58-df6f-e44cb03c0700/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 5090 / ✗ 48
     ✗ expected_result
      ↳  99% — ✓ 5137 / ✗ 1

     checks.........................: 99.68% ✓ 15365     ✗ 49    
     data_received..................: 26 MB  346 kB/s
     data_sent......................: 6.1 MB 83 kB/s
     http_req_blocked...............: avg=151.03µs min=1.7µs    med=2.7µs   max=13.58ms p(90)=517.35µs p(95)=643.53µs
     http_req_connecting............: avg=128.63µs min=0s       med=0s      max=13.49ms p(90)=429.2µs  p(95)=545.77µs
     http_req_duration..............: avg=7.86s    min=205.58ms med=7.57s   max=26.85s  p(90)=13.7s    p(95)=15.09s  
       { expected_response:true }...: avg=7.86s    min=205.58ms med=7.57s   max=26.85s  p(90)=13.7s    p(95)=15.09s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 5138  
     http_req_receiving.............: avg=78.16µs  min=23.7µs   med=61.45µs max=5.54ms  p(90)=112.7µs  p(95)=138.81µs
     http_req_sending...............: avg=45.92µs  min=10.4µs   med=19.7µs  max=11.16ms p(90)=76.23µs  p(95)=103.9µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=7.86s    min=205.45ms med=7.57s   max=26.85s  p(90)=13.7s    p(95)=15.09s  
     http_reqs......................: 5138   69.550086/s
     iteration_duration.............: avg=7.87s    min=206.1ms  med=7.57s   max=26.86s  p(90)=13.7s    p(95)=15.09s  
     iterations.....................: 5138   69.550086/s
     vus............................: 88     min=53      max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9fb81263-6a55-4bb2-684a-84f3a2d48600/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9f8dcce7-deb4-4797-70ed-5953c4438500/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-deno`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 3818 / ✗ 12
     ✓ expected_result

     checks.........................: 99.89% ✓ 11478     ✗ 12    
     data_received..................: 19 MB  271 kB/s
     data_sent......................: 4.5 MB 64 kB/s
     http_req_blocked...............: avg=144.1µs  min=900ns  med=2.7µs   max=15.01ms p(90)=475.03µs p(95)=516.76µs
     http_req_connecting............: avg=122.07µs min=0s     med=0s      max=14.95ms p(90)=396.41µs p(95)=437.59µs
     http_req_duration..............: avg=10.55s   min=1.19s  med=11.25s  max=21.75s  p(90)=16.27s   p(95)=16.56s  
       { expected_response:true }...: avg=10.55s   min=1.19s  med=11.25s  max=21.75s  p(90)=16.27s   p(95)=16.56s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 3830  
     http_req_receiving.............: avg=91.25µs  min=16.8µs med=47.25µs max=12.08ms p(90)=107.11µs p(95)=139.8µs 
     http_req_sending...............: avg=45.97µs  min=6.7µs  med=17.89µs max=4.65ms  p(90)=83.11µs  p(95)=101.65µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=10.55s   min=1.19s  med=11.25s  max=21.75s  p(90)=16.27s   p(95)=16.56s  
     http_reqs......................: 3830   53.539432/s
     iteration_duration.............: avg=10.55s   min=1.19s  med=11.25s  max=21.75s  p(90)=16.27s   p(95)=16.56s  
     iterations.....................: 3830   53.539432/s
     vus............................: 143    min=55      max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4795694e-175d-4c22-5012-704788d66700/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/831c3062-d80f-4819-54f9-217a9fdf3b00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 2870 / ✗ 26
     ✗ expected_result
      ↳  99% — ✓ 2887 / ✗ 9

     checks.........................: 99.59% ✓ 8653      ✗ 35    
     data_received..................: 15 MB  186 kB/s
     data_sent......................: 3.4 MB 44 kB/s
     http_req_blocked...............: avg=1.73ms   min=1.7µs  med=3.3µs   max=118.4ms  p(90)=710.04µs p(95)=848.94µs
     http_req_connecting............: avg=1.66ms   min=0s     med=0s      max=117.27ms p(90)=602.79µs p(95)=716.42µs
     http_req_duration..............: avg=15.38s   min=2.53s  med=15.91s  max=32.33s   p(90)=24.01s   p(95)=25.17s  
       { expected_response:true }...: avg=15.38s   min=2.53s  med=15.91s  max=32.33s   p(90)=24.01s   p(95)=25.17s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 2896  
     http_req_receiving.............: avg=100.05µs min=28.4µs med=83.2µs  max=7.55ms   p(90)=135.94µs p(95)=167.55µs
     http_req_sending...............: avg=153.31µs min=9.79µs med=33.44µs max=12.94ms  p(90)=115.85µs p(95)=165.45µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=15.38s   min=2.52s  med=15.91s  max=32.33s   p(90)=24.01s   p(95)=25.17s  
     http_reqs......................: 2896   37.118744/s
     iteration_duration.............: avg=15.39s   min=2.61s  med=15.91s  max=32.33s   p(90)=24.01s   p(95)=25.17s  
     iterations.....................: 2896   37.118744/s
     vus............................: 165    min=52      max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/44294dd7-04b8-4c76-8603-b704dd972400/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8a5c7217-c0c0-4917-7e29-59d7b1317500/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  68% — ✓ 2629 / ✗ 1214
     ✗ expected_result
      ↳  92% — ✓ 3568 / ✗ 275

     checks.........................: 87.08% ✓ 10040     ✗ 1489  
     data_received..................: 27 MB  341 kB/s
     data_sent......................: 4.6 MB 58 kB/s
     http_req_blocked...............: avg=133.27µs min=900ns   med=2.29µs  max=18ms    p(90)=405.37µs p(95)=440.17µs
     http_req_connecting............: avg=114.23µs min=0s      med=0s      max=17.83ms p(90)=336.87µs p(95)=374.75µs
     http_req_duration..............: avg=11.61s   min=1.41s   med=8s      max=40.9s   p(90)=25.4s    p(95)=30.39s  
       { expected_response:true }...: avg=11.61s   min=1.41s   med=8s      max=40.9s   p(90)=25.4s    p(95)=30.39s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 3843  
     http_req_receiving.............: avg=55.24µs  min=15.49µs med=46µs    max=1.03ms  p(90)=87.59µs  p(95)=105.89µs
     http_req_sending...............: avg=41.84µs  min=6.7µs   med=14.79µs max=8.16ms  p(90)=68.99µs  p(95)=79.78µs 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=11.61s   min=1.41s   med=8s      max=40.9s   p(90)=25.4s    p(95)=30.39s  
     http_reqs......................: 3843   49.229722/s
     iteration_duration.............: avg=11.61s   min=1.41s   med=8s      max=40.9s   p(90)=25.4s    p(95)=30.39s  
     iterations.....................: 3843   49.229722/s
     vus............................: 149    min=57      max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/43e1dd8d-6377-4d7c-b6a6-4e568e3b0b00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a2d0089b-1ea9-46b1-0795-ff73504ff900/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  67% — ✓ 2292 / ✗ 1122
     ✗ expected_result
      ↳  93% — ✓ 3180 / ✗ 234

     checks.........................: 86.76% ✓ 8886      ✗ 1356  
     data_received..................: 15 MB  195 kB/s
     data_sent......................: 4.1 MB 53 kB/s
     http_req_blocked...............: avg=330.83µs min=1.5µs    med=3.2µs  max=23.54ms p(90)=642.94µs p(95)=776.57µs
     http_req_connecting............: avg=294.61µs min=0s       med=0s     max=23.28ms p(90)=543.38µs p(95)=647.32µs
     http_req_duration..............: avg=12.78s   min=917.19ms med=10.1s  max=49.8s   p(90)=25.99s   p(95)=32.68s  
       { expected_response:true }...: avg=12.78s   min=917.19ms med=10.1s  max=49.8s   p(90)=25.99s   p(95)=32.68s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 3414  
     http_req_receiving.............: avg=84.75µs  min=25.9µs   med=72.1µs max=3.37ms  p(90)=124.81µs p(95)=153.84µs
     http_req_sending...............: avg=57.16µs  min=11.3µs   med=23.8µs max=1.9ms   p(90)=101.07µs p(95)=131.4µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=12.78s   min=917.12ms med=10.1s  max=49.8s   p(90)=25.99s   p(95)=32.68s  
     http_reqs......................: 3414   44.956704/s
     iteration_duration.............: avg=12.78s   min=917.61ms med=10.1s  max=49.8s   p(90)=25.99s   p(95)=32.69s  
     iterations.....................: 3414   44.956704/s
     vus............................: 220    min=0       max=1000
     vus_max........................: 1000   min=949     max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/86976a52-49d2-4b59-fd52-973f51baf900/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1716c77d-657b-421c-1584-2b84a8c89600/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 5199 / ✗ 3
     ✓ expected_result

     checks.........................: 99.98% ✓ 15603     ✗ 3     
     data_received..................: 27 MB  314 kB/s
     data_sent......................: 6.2 MB 72 kB/s
     http_req_blocked...............: avg=112.45µs min=1.2µs   med=2.5µs   max=14.82ms p(90)=367.97µs p(95)=418.89µs
     http_req_connecting............: avg=96.2µs   min=0s      med=0s      max=14.76ms p(90)=304.65µs p(95)=351.77µs
     http_req_duration..............: avg=8.53s    min=73.52ms med=2.33s   max=57.47s  p(90)=36.9s    p(95)=47.53s  
       { expected_response:true }...: avg=8.53s    min=73.52ms med=2.33s   max=57.47s  p(90)=36.9s    p(95)=47.53s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 5202  
     http_req_receiving.............: avg=65.67µs  min=19.9µs  med=62.8µs  max=9.94ms  p(90)=89.2µs   p(95)=95.8µs  
     http_req_sending...............: avg=34.68µs  min=7.2µs   med=16.29µs max=3.81ms  p(90)=66.4µs   p(95)=76.59µs 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=8.53s    min=73.44ms med=2.33s   max=57.47s  p(90)=36.9s    p(95)=47.53s  
     http_reqs......................: 5202   60.993875/s
     iteration_duration.............: avg=8.53s    min=73.82ms med=2.33s   max=57.47s  p(90)=36.9s    p(95)=47.53s  
     iterations.....................: 5202   60.993875/s
     vus............................: 5      min=5       max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b55bd67e-2746-4666-e12a-790a84390800/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6fcf4cb4-5d4c-4868-cf83-d140b288f500/public" alt="HTTP Overview" />


  </details>