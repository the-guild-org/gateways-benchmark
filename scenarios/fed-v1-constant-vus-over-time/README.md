## Overview for scenario: `fed-v1-constant-vus-over-time`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. It's being executed with a constant amount of VUs over a fixed amount of time. It measure things like memory usage, CPU usage, average RPS. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was running 100 VUs over 60s


### Comparison


| Gateway                             | RPS ⬇️ |       Requests        |         Duration         |
| :---------------------------------- | :----: | :-------------------: | :----------------------: |
| wundergraph                         |  480   | 28892 total, 0 failed |  avg: 207ms, p95: 333ms  |
| apollo-router                       |   75   | 4689 total, 0 failed  | avg: 1303ms, p95: 2148ms |
| apollo-gateway-with-yoga            |   65   | 3998 total, 0 failed  | avg: 1513ms, p95: 1994ms |
| mercurius                           |   63   | 3843 total, 0 failed  | avg: 1566ms, p95: 2000ms |
| stitching-federation-with-yoga-bun  |   58   | 3600 total, 0 failed  | avg: 1692ms, p95: 2782ms |
| mesh                                |   54   | 3349 total, 0 failed  | avg: 1811ms, p95: 2992ms |
| stitching-federation-with-yoga-deno |   45   | 2775 total, 0 failed  | avg: 2184ms, p95: 2855ms |
| apollo-server                       |   40   | 2481 total, 0 failed  | avg: 2451ms, p95: 2860ms |
| stitching-federation-with-yoga      |   39   | 2438 total, 0 failed  | avg: 2493ms, p95: 3306ms |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 86676      ✗ 0    
     data_received..................: 144 MB  2.4 MB/s
     data_sent......................: 34 MB   571 kB/s
   ✓ expected_result................: 0.00%   ✓ 0          ✗ 0    
     http_req_blocked...............: avg=56.29µs  min=1.3µs   med=2.7µs    max=26.74ms  p(90)=4µs      p(95)=4.89µs  
     http_req_connecting............: avg=48.18µs  min=0s      med=0s       max=23.81ms  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=207.01ms min=21.85ms med=195.31ms max=525.74ms p(90)=297.15ms p(95)=333.24ms
       { expected_response:true }...: avg=207.01ms min=21.85ms med=195.31ms max=525.74ms p(90)=297.15ms p(95)=333.24ms
   ✓ http_req_failed................: 0.00%   ✓ 0          ✗ 28892
     http_req_receiving.............: avg=533.5µs  min=23.4µs  med=71.4µs   max=88.14ms  p(90)=313.89µs p(95)=1.06ms  
     http_req_sending...............: avg=119.72µs min=9.5µs   med=15.6µs   max=165.63ms p(90)=36.6µs   p(95)=97.64µs 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=206.36ms min=21.68ms med=194.59ms max=525.62ms p(90)=296.28ms p(95)=331.91ms
     http_reqs......................: 28892   480.817608/s
     iteration_duration.............: avg=207.79ms min=22.25ms med=196.1ms  max=526.14ms p(90)=298.07ms p(95)=334.14ms
     iterations.....................: 28892   480.817608/s
   ✓ no_errors......................: 0.00%   ✓ 0          ✗ 0    
     vus............................: 100     min=100      max=100
     vus_max........................: 100     min=100      max=100
```


**Performance Overview**


<img src="**INVALID CLOUDFLARE IMAGES LINK**" alt="Performance Overview" />


**HTTP Overview**


<img src="**INVALID CLOUDFLARE IMAGES LINK**" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 4680 / ✗ 9
     ✓ expected_result

     checks.........................: 99.93% ✓ 14058     ✗ 9    
     data_received..................: 23 MB  378 kB/s
     data_sent......................: 5.6 MB 90 kB/s
   ✓ expected_result................: 0.00%  ✓ 0         ✗ 0    
     http_req_blocked...............: avg=130.15µs min=1.6µs    med=3.1µs   max=17.4ms  p(90)=4.5µs    p(95)=18.3µs  
     http_req_connecting............: avg=123.16µs min=0s       med=0s      max=17.36ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=1.3s     min=326.12ms med=1.2s    max=5.73s   p(90)=1.7s     p(95)=2.14s   
       { expected_response:true }...: avg=1.3s     min=326.12ms med=1.2s    max=5.73s   p(90)=1.7s     p(95)=2.14s   
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 4689 
     http_req_receiving.............: avg=84.83µs  min=27.1µs   med=71.5µs  max=8.3ms   p(90)=114.39µs p(95)=139.09µs
     http_req_sending...............: avg=43.8µs   min=10.7µs   med=20.29µs max=8.31ms  p(90)=43µs     p(95)=60.25µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=1.3s     min=326.04ms med=1.2s    max=5.73s   p(90)=1.7s     p(95)=2.14s   
     http_reqs......................: 4689   75.938917/s
     iteration_duration.............: avg=1.3s     min=326.42ms med=1.2s    max=5.75s   p(90)=1.7s     p(95)=2.14s   
     iterations.....................: 4689   75.938917/s
   ✓ no_errors......................: 0.00%  ✓ 0         ✗ 0    
     vus............................: 59     min=59      max=100
     vus_max........................: 100    min=100     max=100
```


**Performance Overview**


<img src="**INVALID CLOUDFLARE IMAGES LINK**" alt="Performance Overview" />


**HTTP Overview**


<img src="**INVALID CLOUDFLARE IMAGES LINK**" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 3976 / ✗ 22
     ✗ expected_result
      ↳  99% — ✓ 3996 / ✗ 2

     checks.........................: 99.79% ✓ 11970     ✗ 24   
     data_received..................: 20 MB  328 kB/s
     data_sent......................: 4.7 MB 78 kB/s
   ✓ expected_result................: 0.00%  ✓ 0         ✗ 0    
     http_req_blocked...............: avg=267.01µs min=1.1µs    med=2.2µs   max=35.73ms p(90)=3.4µs   p(95)=6.21µs 
     http_req_connecting............: avg=262.5µs  min=0s       med=0s      max=35.69ms p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=1.51s    min=831.16ms med=1.42s   max=3.65s   p(90)=1.87s   p(95)=1.99s  
       { expected_response:true }...: avg=1.51s    min=831.16ms med=1.42s   max=3.65s   p(90)=1.87s   p(95)=1.99s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 3998 
     http_req_receiving.............: avg=53.04µs  min=19.59µs  med=49.85µs max=3.46ms  p(90)=76.03µs p(95)=81.4µs 
     http_req_sending...............: avg=56.6µs   min=7.3µs    med=13.8µs  max=7.68ms  p(90)=28.2µs  p(95)=33.11µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s      p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=1.51s    min=831.1ms  med=1.42s   max=3.65s   p(90)=1.87s   p(95)=1.99s  
     http_reqs......................: 3998   65.780411/s
     iteration_duration.............: avg=1.51s    min=831.45ms med=1.42s   max=3.66s   p(90)=1.87s   p(95)=1.99s  
     iterations.....................: 3998   65.780411/s
   ✓ no_errors......................: 0.00%  ✓ 0         ✗ 0    
     vus............................: 100    min=100     max=100
     vus_max........................: 100    min=100     max=100
```


**Performance Overview**


<img src="**INVALID CLOUDFLARE IMAGES LINK**" alt="Performance Overview" />


**HTTP Overview**


<img src="**INVALID CLOUDFLARE IMAGES LINK**" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 11529     ✗ 0    
     data_received..................: 19 MB   320 kB/s
     data_sent......................: 4.6 MB  75 kB/s
   ✓ expected_result................: 0.00%   ✓ 0         ✗ 0    
     http_req_blocked...............: avg=382.56µs min=1.5µs    med=2.7µs  max=29.65ms p(90)=3.9µs  p(95)=13.68µs
     http_req_connecting............: avg=373.67µs min=0s       med=0s     max=29.45ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=1.56s    min=470.52ms med=1.49s  max=4.82s   p(90)=1.76s  p(95)=2s     
       { expected_response:true }...: avg=1.56s    min=470.52ms med=1.49s  max=4.82s   p(90)=1.76s  p(95)=2s     
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 3843 
     http_req_receiving.............: avg=69.01µs  min=25.9µs   med=62.8µs max=4.76ms  p(90)=93.1µs p(95)=104.5µs
     http_req_sending...............: avg=59.11µs  min=11.1µs   med=17.5µs max=7.57ms  p(90)=39.3µs p(95)=47.19µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=1.56s    min=470.42ms med=1.49s  max=4.81s   p(90)=1.76s  p(95)=2s     
     http_reqs......................: 3843    63.555917/s
     iteration_duration.............: avg=1.56s    min=470.92ms med=1.49s  max=4.82s   p(90)=1.76s  p(95)=2s     
     iterations.....................: 3843    63.555917/s
   ✓ no_errors......................: 0.00%   ✓ 0         ✗ 0    
     vus............................: 100     min=100     max=100
     vus_max........................: 100     min=100     max=100
```


**Performance Overview**


<img src="**INVALID CLOUDFLARE IMAGES LINK**" alt="Performance Overview" />


**HTTP Overview**


<img src="**INVALID CLOUDFLARE IMAGES LINK**" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 10800     ✗ 0    
     data_received..................: 18 MB   294 kB/s
     data_sent......................: 4.3 MB  70 kB/s
   ✓ expected_result................: 0.00%   ✓ 0         ✗ 0    
     http_req_blocked...............: avg=439.1µs  min=1.3µs    med=2.6µs  max=65.69ms p(90)=4µs      p(95)=13.21µs 
     http_req_connecting............: avg=409.04µs min=0s       med=0s     max=34.49ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=1.69s    min=454.91ms med=1.55s  max=4.42s   p(90)=2.25s    p(95)=2.78s   
       { expected_response:true }...: avg=1.69s    min=454.91ms med=1.55s  max=4.42s   p(90)=2.25s    p(95)=2.78s   
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 3600 
     http_req_receiving.............: avg=262.3µs  min=22µs     med=43µs   max=94.62ms p(90)=123.91µs p(95)=298.24µs
     http_req_sending...............: avg=325.13µs min=9.1µs    med=14.9µs max=76.77ms p(90)=110.01µs p(95)=482.4µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=1.69s    min=453.61ms med=1.55s  max=4.42s   p(90)=2.25s    p(95)=2.77s   
     http_reqs......................: 3600    58.998599/s
     iteration_duration.............: avg=1.69s    min=465.97ms med=1.55s  max=4.42s   p(90)=2.25s    p(95)=2.79s   
     iterations.....................: 3600    58.998599/s
   ✓ no_errors......................: 0.00%   ✓ 0         ✗ 0    
     vus............................: 64      min=64      max=100
     vus_max........................: 100     min=100     max=100
```


**Performance Overview**


<img src="**INVALID CLOUDFLARE IMAGES LINK**" alt="Performance Overview" />


**HTTP Overview**


<img src="**INVALID CLOUDFLARE IMAGES LINK**" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 10047    ✗ 0    
     data_received..................: 17 MB   274 kB/s
     data_sent......................: 4.0 MB  65 kB/s
   ✓ expected_result................: 0.00%   ✓ 0        ✗ 0    
     http_req_blocked...............: avg=477.66µs min=1.5µs    med=3µs     max=30.91ms p(90)=4.59µs   p(95)=18.3µs  
     http_req_connecting............: avg=453.43µs min=0s       med=0s      max=30.63ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=1.81s    min=830.5ms  med=1.74s   max=5.3s    p(90)=2.38s    p(95)=2.99s   
       { expected_response:true }...: avg=1.81s    min=830.5ms  med=1.74s   max=5.3s    p(90)=2.38s    p(95)=2.99s   
   ✓ http_req_failed................: 0.00%   ✓ 0        ✗ 3349 
     http_req_receiving.............: avg=83.61µs  min=26.5µs   med=64.5µs  max=20.7ms  p(90)=106.36µs p(95)=129.19µs
     http_req_sending...............: avg=99.84µs  min=11.6µs   med=17.89µs max=23.71ms p(90)=41.2µs   p(95)=75.1µs  
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=1.81s    min=830.35ms med=1.73s   max=5.3s    p(90)=2.38s    p(95)=2.99s   
     http_reqs......................: 3349    54.84715/s
     iteration_duration.............: avg=1.81s    min=830.92ms med=1.74s   max=5.32s   p(90)=2.38s    p(95)=2.99s   
     iterations.....................: 3349    54.84715/s
   ✓ no_errors......................: 0.00%   ✓ 0        ✗ 0    
     vus............................: 37      min=37     max=100
     vus_max........................: 100     min=100    max=100
```


**Performance Overview**


<img src="**INVALID CLOUDFLARE IMAGES LINK**" alt="Performance Overview" />


**HTTP Overview**


<img src="**INVALID CLOUDFLARE IMAGES LINK**" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-deno`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 8325      ✗ 0    
     data_received..................: 14 MB   228 kB/s
     data_sent......................: 3.3 MB  54 kB/s
   ✓ expected_result................: 0.00%   ✓ 0         ✗ 0    
     http_req_blocked...............: avg=205.5µs  min=1.2µs  med=2.4µs  max=14.96ms p(90)=3.9µs    p(95)=20.51µs 
     http_req_connecting............: avg=197.09µs min=0s     med=0s     max=14.93ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=2.18s    min=1.04s  med=2.1s   max=3.98s   p(90)=2.55s    p(95)=2.85s   
       { expected_response:true }...: avg=2.18s    min=1.04s  med=2.1s   max=3.98s   p(90)=2.55s    p(95)=2.85s   
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 2775 
     http_req_receiving.............: avg=104.39µs min=20.8µs med=39.9µs max=11.18ms p(90)=110.12µs p(95)=166.73µs
     http_req_sending...............: avg=129.13µs min=8.5µs  med=14.5µs max=25.69ms p(90)=52.3µs   p(95)=161.93µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=2.18s    min=1.04s  med=2.09s  max=3.98s   p(90)=2.55s    p(95)=2.85s   
     http_reqs......................: 2775    45.456766/s
     iteration_duration.............: avg=2.18s    min=1.04s  med=2.1s   max=3.99s   p(90)=2.55s    p(95)=2.85s   
     iterations.....................: 2775    45.456766/s
   ✓ no_errors......................: 0.00%   ✓ 0         ✗ 0    
     vus............................: 51      min=51      max=100
     vus_max........................: 100     min=100     max=100
```


**Performance Overview**


<img src="**INVALID CLOUDFLARE IMAGES LINK**" alt="Performance Overview" />


**HTTP Overview**


<img src="**INVALID CLOUDFLARE IMAGES LINK**" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 2472 / ✗ 9
     ✗ expected_result
      ↳  99% — ✓ 2480 / ✗ 1

     checks.........................: 99.86% ✓ 7433     ✗ 10   
     data_received..................: 13 MB  208 kB/s
     data_sent......................: 2.9 MB 48 kB/s
   ✓ expected_result................: 0.00%  ✓ 0        ✗ 0    
     http_req_blocked...............: avg=199.18µs min=1.8µs    med=3.3µs  max=24.75ms p(90)=5µs     p(95)=23.1µs 
     http_req_connecting............: avg=193.19µs min=0s       med=0s     max=24.7ms  p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=2.45s    min=619.19ms med=2.17s  max=27.55s  p(90)=2.55s   p(95)=2.86s  
       { expected_response:true }...: avg=2.45s    min=619.19ms med=2.17s  max=27.55s  p(90)=2.55s   p(95)=2.86s  
   ✓ http_req_failed................: 0.00%  ✓ 0        ✗ 2481 
     http_req_receiving.............: avg=86.43µs  min=31.7µs   med=78.7µs max=4.9ms   p(90)=113.4µs p(95)=130.3µs
     http_req_sending...............: avg=68.68µs  min=11.4µs   med=21µs   max=8.84ms  p(90)=43.4µs  p(95)=56.2µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=2.45s    min=618.87ms med=2.17s  max=27.55s  p(90)=2.55s   p(95)=2.86s  
     http_reqs......................: 2481   40.36829/s
     iteration_duration.............: avg=2.45s    min=620.07ms med=2.17s  max=27.56s  p(90)=2.55s   p(95)=2.86s  
     iterations.....................: 2481   40.36829/s
   ✓ no_errors......................: 0.00%  ✓ 0        ✗ 0    
     vus............................: 48     min=48     max=100
     vus_max........................: 100    min=100    max=100
```


**Performance Overview**


<img src="**INVALID CLOUDFLARE IMAGES LINK**" alt="Performance Overview" />


**HTTP Overview**


<img src="**INVALID CLOUDFLARE IMAGES LINK**" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 2426 / ✗ 12
     ✗ expected_result
      ↳  99% — ✓ 2433 / ✗ 5

     checks.........................: 99.76% ✓ 7297      ✗ 17   
     data_received..................: 12 MB  201 kB/s
     data_sent......................: 2.9 MB 47 kB/s
   ✓ expected_result................: 0.00%  ✓ 0         ✗ 0    
     http_req_blocked...............: avg=84.85µs min=1.5µs  med=3µs    max=5.6ms  p(90)=4.6µs  p(95)=21.03µs 
     http_req_connecting............: avg=75.14µs min=0s     med=0s     max=5.12ms p(90)=0s     p(95)=0s      
     http_req_duration..............: avg=2.49s   min=1.23s  med=2.38s  max=5.35s  p(90)=2.9s   p(95)=3.3s    
       { expected_response:true }...: avg=2.49s   min=1.23s  med=2.38s  max=5.35s  p(90)=2.9s   p(95)=3.3s    
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 2438 
     http_req_receiving.............: avg=79.27µs min=22.7µs med=66.6µs max=9.33ms p(90)=93.2µs p(95)=101.75µs
     http_req_sending...............: avg=56.65µs min=8.7µs  med=18.6µs max=3.29ms p(90)=36.2µs p(95)=93.45µs 
     http_req_tls_handshaking.......: avg=0s      min=0s     med=0s     max=0s     p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=2.49s   min=1.23s  med=2.38s  max=5.35s  p(90)=2.9s   p(95)=3.3s    
     http_reqs......................: 2438   39.889525/s
     iteration_duration.............: avg=2.49s   min=1.23s  med=2.38s  max=5.35s  p(90)=2.91s  p(95)=3.3s    
     iterations.....................: 2438   39.889525/s
   ✓ no_errors......................: 0.00%  ✓ 0         ✗ 0    
     vus............................: 49     min=49      max=100
     vus_max........................: 100    min=100     max=100
```


**Performance Overview**


<img src="**INVALID CLOUDFLARE IMAGES LINK**" alt="Performance Overview" />


**HTTP Overview**


<img src="**INVALID CLOUDFLARE IMAGES LINK**" alt="HTTP Overview" />


  </details>