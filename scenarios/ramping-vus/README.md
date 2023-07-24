## Overview for scenario: `ramping-vus`


This scenario runs 4 servics and a GraphQL gateway with Federation spec, and runs a heavy query. We are running a heavy load of concurrent VUs to measure response time and other stats, during stress. It measure things like memory usage, CPU usage, response times. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was trying to reach 1000 concurrent VUs over 60s


### Comparison


| Gateway                             | duration(p95)⬇️ |  RPS  |       Requests        |                       Durations                        |
| :---------------------------------- | :-------------: | :---: | :-------------------: | :----------------------------------------------------: |
| wundergraph                         |     1158ms      |  863  | 60481 total, 0 failed |    avg: 567ms, p95: 1159ms, max: 2558ms, med: 548ms    |
| mesh                                |     9594ms      |  94   | 6609 total, 0 failed  |  avg: 5757ms, p95: 9594ms, max: 11637ms, med: 5929ms   |
| mercurius                           |     10170ms     |  86   | 6059 total, 0 failed  |  avg: 6042ms, p95: 10170ms, max: 10463ms, med: 6275ms  |
| stitching-federation-with-yoga-bun  |     14538ms     |  89   | 6377 total, 0 failed  |  avg: 6252ms, p95: 14538ms, max: 21135ms, med: 5686ms  |
| stitching-federation-with-yoga-deno |     16443ms     |  54   | 3875 total, 0 failed  | avg: 10436ms, p95: 16443ms, max: 18373ms, med: 11705ms |
| apollo-router                       |     17573ms     |  73   | 5308 total, 0 failed  |  avg: 7328ms, p95: 17573ms, max: 33085ms, med: 6712ms  |
| apollo-gateway-with-yoga            |     26744ms     |  57   | 4299 total, 0 failed  |  avg: 9963ms, p95: 26744ms, max: 37734ms, med: 5830ms  |
| stitching-federation-with-yoga      |     38235ms     |  24   | 2415 total, 7 failed  | avg: 17017ms, p95: 38235ms, max: 48070ms, med: 12555ms |
| apollo-server                       |     52117ms     |  49   | 4198 total, 0 failed  | avg: 11070ms, p95: 52117ms, max: 59638ms, med: 2738ms  |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 181443     ✗ 0     
     data_received..................: 294 MB  4.2 MB/s
     data_sent......................: 72 MB   1.0 MB/s
     http_req_blocked...............: avg=628.28µs min=1µs    med=2.2µs    max=490.77ms p(90)=3.8µs    p(95)=6.2µs  
     http_req_connecting............: avg=611.63µs min=0s     med=0s       max=423.14ms p(90)=0s       p(95)=0s     
     http_req_duration..............: avg=567.24ms min=6.11ms med=548.31ms max=2.55s    p(90)=979.18ms p(95)=1.15s  
       { expected_response:true }...: avg=567.24ms min=6.11ms med=548.31ms max=2.55s    p(90)=979.18ms p(95)=1.15s  
     http_req_failed................: 0.00%   ✓ 0          ✗ 60481 
     http_req_receiving.............: avg=1.23ms   min=17µs   med=39.5µs   max=475.06ms p(90)=203.6µs  p(95)=461.2µs
     http_req_sending...............: avg=677.94µs min=6.3µs  med=12.5µs   max=594.72ms p(90)=30.8µs   p(95)=120.6µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s       max=0s       p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=565.33ms min=5.89ms med=547.03ms max=2.55s    p(90)=975.84ms p(95)=1.15s  
     http_reqs......................: 60481   863.950212/s
     iteration_duration.............: avg=570.71ms min=6.41ms med=551.22ms max=2.55s    p(90)=986ms    p(95)=1.16s  
     iterations.....................: 60481   863.950212/s
     vus............................: 8       min=8        max=996 
     vus_max........................: 1000    min=1000     max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/33051e87-ba52-4773-9f6d-892b8997a600/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b0df649c-24aa-472a-f78c-97f28c30c700/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 6608 / ✗ 1
     ✗ expected_result
      ↳  99% — ✓ 6608 / ✗ 1

     checks.........................: 99.98% ✓ 19825     ✗ 2     
     data_received..................: 33 MB  472 kB/s
     data_sent......................: 7.8 MB 112 kB/s
     http_req_blocked...............: avg=437.87µs min=1µs     med=2.09µs max=61.53ms p(90)=376.25µs p(95)=427.27µs
     http_req_connecting............: avg=425.35µs min=0s      med=0s     max=61.47ms p(90)=312.15µs p(95)=363.13µs
     http_req_duration..............: avg=5.75s    min=15.64ms med=5.92s  max=11.63s  p(90)=8.93s    p(95)=9.59s   
       { expected_response:true }...: avg=5.75s    min=15.64ms med=5.92s  max=11.63s  p(90)=8.93s    p(95)=9.59s   
     http_req_failed................: 0.00%  ✓ 0         ✗ 6609  
     http_req_receiving.............: avg=52.36µs  min=17.7µs  med=45.2µs max=1.49ms  p(90)=72.71µs  p(95)=82.1µs  
     http_req_sending...............: avg=44.26µs  min=6.4µs   med=12.9µs max=6.47ms  p(90)=57.9µs   p(95)=74.59µs 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=5.75s    min=15.55ms med=5.92s  max=11.63s  p(90)=8.93s    p(95)=9.59s   
     http_reqs......................: 6609   94.405333/s
     iteration_duration.............: avg=5.75s    min=15.94ms med=5.92s  max=11.63s  p(90)=8.93s    p(95)=9.59s   
     iterations.....................: 6609   94.405333/s
     vus............................: 7      min=7       max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/eb14f9cf-1eab-4d4a-7fe8-28b944a0f200/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/158ecbba-674c-4189-5ba3-54f2d7d11b00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 18177     ✗ 0     
     data_received..................: 31 MB   435 kB/s
     data_sent......................: 7.2 MB  103 kB/s
     http_req_blocked...............: avg=116.1µs  min=1µs     med=2.8µs   max=19.45ms p(90)=361.64µs p(95)=416.41µs
     http_req_connecting............: avg=102.63µs min=0s      med=0s      max=19.37ms p(90)=301.9µs  p(95)=347.14µs
     http_req_duration..............: avg=6.04s    min=13.04ms med=6.27s   max=10.46s  p(90)=9.66s    p(95)=10.17s  
       { expected_response:true }...: avg=6.04s    min=13.04ms med=6.27s   max=10.46s  p(90)=9.66s    p(95)=10.17s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 6059  
     http_req_receiving.............: avg=66.01µs  min=20.8µs  med=61.05µs max=1.71ms  p(90)=89.72µs  p(95)=99.41µs 
     http_req_sending...............: avg=33.63µs  min=6.2µs   med=17.39µs max=11.21ms p(90)=60.3µs   p(95)=73.7µs  
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=6.04s    min=12.94ms med=6.27s   max=10.46s  p(90)=9.66s    p(95)=10.17s  
     http_reqs......................: 6059    86.541577/s
     iteration_duration.............: avg=6.04s    min=13.42ms med=6.27s   max=10.46s  p(90)=9.66s    p(95)=10.17s  
     iterations.....................: 6059    86.541577/s
     vus............................: 6       min=6       max=1000
     vus_max........................: 1000    min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6b716caa-9dcf-425c-1fec-111df82f5e00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5697ed14-28bd-4684-cb66-94bb6172c000/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 19131     ✗ 0     
     data_received..................: 32 MB   447 kB/s
     data_sent......................: 7.6 MB  106 kB/s
     http_req_blocked...............: avg=132.79µs min=800ns    med=1.6µs  max=53.2ms   p(90)=157.44µs p(95)=379.52µs
     http_req_connecting............: avg=120.77µs min=0s       med=0s     max=53.12ms  p(90)=104.74µs p(95)=315.51µs
     http_req_duration..............: avg=6.25s    min=719.11ms med=5.68s  max=21.13s   p(90)=9.83s    p(95)=14.53s  
       { expected_response:true }...: avg=6.25s    min=719.11ms med=5.68s  max=21.13s   p(90)=9.83s    p(95)=14.53s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 6377  
     http_req_receiving.............: avg=379.88µs min=14.7µs   med=25.4µs max=205.23ms p(90)=63.6µs   p(95)=187.42µs
     http_req_sending...............: avg=623.05µs min=5.9µs    med=9.5µs  max=200.88ms p(90)=71µs     p(95)=101.21µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=6.25s    min=715.82ms med=5.68s  max=21.13s   p(90)=9.82s    p(95)=14.53s  
     http_reqs......................: 6377    89.664278/s
     iteration_duration.............: avg=6.25s    min=721.22ms med=5.68s  max=21.17s   p(90)=9.83s    p(95)=14.53s  
     iterations.....................: 6377    89.664278/s
     vus............................: 540     min=58      max=1000
     vus_max........................: 1000    min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/803e3f5e-dc6d-4eee-856a-f3610044d700/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/31e2becc-c56e-495c-647a-0be85c4d4700/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-deno`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 3863 / ✗ 12
     ✓ expected_result

     checks.........................: 99.89% ✓ 11613     ✗ 12    
     data_received..................: 20 MB  272 kB/s
     data_sent......................: 4.6 MB 64 kB/s
     http_req_blocked...............: avg=581.29µs min=900ns  med=2.6µs   max=61.1ms  p(90)=454.04µs p(95)=515.96µs
     http_req_connecting............: avg=554.26µs min=0s     med=0s      max=60.77ms p(90)=379.42µs p(95)=436.43µs
     http_req_duration..............: avg=10.43s   min=1.34s  med=11.7s   max=18.37s  p(90)=16.08s   p(95)=16.44s  
       { expected_response:true }...: avg=10.43s   min=1.34s  med=11.7s   max=18.37s  p(90)=16.08s   p(95)=16.44s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 3875  
     http_req_receiving.............: avg=85.93µs  min=16.5µs med=46.1µs  max=8.91ms  p(90)=103.86µs p(95)=141.06µs
     http_req_sending...............: avg=56.02µs  min=6.9µs  med=17.39µs max=4.61ms  p(90)=83.78µs  p(95)=103.3µs 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=10.43s   min=1.34s  med=11.7s   max=18.37s  p(90)=16.08s   p(95)=16.44s  
     http_reqs......................: 3875   54.189526/s
     iteration_duration.............: avg=10.43s   min=1.34s  med=11.7s   max=18.37s  p(90)=16.08s   p(95)=16.44s  
     iterations.....................: 3875   54.189526/s
     vus............................: 103    min=56      max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ae3fdd84-97de-456b-d426-3dfcc7547200/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6676198f-11af-4f22-dc95-46e9eda1ff00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 5289 / ✗ 19
     ✗ expected_result
      ↳  99% — ✓ 5306 / ✗ 2

     checks.........................: 99.86% ✓ 15903     ✗ 21    
     data_received..................: 26 MB  364 kB/s
     data_sent......................: 6.3 MB 87 kB/s
     http_req_blocked...............: avg=145.58µs min=1.4µs    med=2.7µs   max=20.16ms p(90)=469.28µs p(95)=600.7µs 
     http_req_connecting............: avg=124.06µs min=0s       med=0s      max=20.11ms p(90)=389.69µs p(95)=501.42µs
     http_req_duration..............: avg=7.32s    min=222.38ms med=6.71s   max=33.08s  p(90)=14.84s   p(95)=17.57s  
       { expected_response:true }...: avg=7.32s    min=222.38ms med=6.71s   max=33.08s  p(90)=14.84s   p(95)=17.57s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 5308  
     http_req_receiving.............: avg=78.8µs   min=25.7µs   med=62.9µs  max=9.34ms  p(90)=106.4µs  p(95)=131.2µs 
     http_req_sending...............: avg=55.73µs  min=7.6µs    med=17.89µs max=22.32ms p(90)=68.33µs  p(95)=88.52µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=7.32s    min=222.31ms med=6.71s   max=33.08s  p(90)=14.84s   p(95)=17.57s  
     http_reqs......................: 5308   73.007027/s
     iteration_duration.............: avg=7.32s    min=222.7ms  med=6.71s   max=33.08s  p(90)=14.84s   p(95)=17.57s  
     iterations.....................: 5308   73.007027/s
     vus............................: 92     min=54      max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/958f5fee-fdc4-4175-f07a-66f838c09900/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3b03dbc5-1ce6-4d00-c312-7ba7811f2c00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  76% — ✓ 3288 / ✗ 1011
     ✗ expected_result
      ↳  94% — ✓ 4042 / ✗ 257

     checks.........................: 90.16% ✓ 11629     ✗ 1268  
     data_received..................: 20 MB  262 kB/s
     data_sent......................: 5.1 MB 68 kB/s
     http_req_blocked...............: avg=135.24µs min=1.3µs   med=2.9µs  max=20.51ms p(90)=494.42µs p(95)=548.22µs
     http_req_connecting............: avg=114.63µs min=0s      med=0s     max=20.44ms p(90)=417.8µs  p(95)=460.91µs
     http_req_duration..............: avg=9.96s    min=52.94ms med=5.82s  max=37.73s  p(90)=23.71s   p(95)=26.74s  
       { expected_response:true }...: avg=9.96s    min=52.94ms med=5.82s  max=37.73s  p(90)=23.71s   p(95)=26.74s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 4299  
     http_req_receiving.............: avg=95.21µs  min=22.2µs  med=62.7µs max=30.79ms p(90)=101.3µs  p(95)=125.44µs
     http_req_sending...............: avg=39.7µs   min=8.69µs  med=17.5µs max=2.85ms  p(90)=83.82µs  p(95)=100.7µs 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=9.96s    min=52.85ms med=5.82s  max=37.73s  p(90)=23.71s   p(95)=26.74s  
     http_reqs......................: 4299   57.093096/s
     iteration_duration.............: avg=9.96s    min=53.31ms med=5.83s  max=37.73s  p(90)=23.71s   p(95)=26.74s  
     iterations.....................: 4299   57.093096/s
     vus............................: 27     min=27      max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e5ca8dc0-2062-4e13-3a1a-a3d086afbc00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c984fd25-2313-4a4a-7a99-17ce602ca700/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  99% — ✓ 2408 / ✗ 7
     ✗ no_errors
      ↳  63% — ✓ 1530 / ✗ 885
     ✗ expected_result
      ↳  94% — ✓ 2271 / ✗ 137

     checks.........................: 85.78% ✓ 6209      ✗ 1029  
     data_received..................: 18 MB  181 kB/s
     data_sent......................: 3.3 MB 34 kB/s
     http_req_blocked...............: avg=295.67µs min=1.3µs  med=3.3µs  max=13.61ms p(90)=621.91µs p(95)=749.44µs
     http_req_connecting............: avg=259.94µs min=0s     med=0s     max=13.55ms p(90)=526.38µs p(95)=637.66µs
     http_req_duration..............: avg=17.01s   min=2.17s  med=12.55s max=48.07s  p(90)=35.08s   p(95)=38.23s  
       { expected_response:true }...: avg=16.93s   min=2.17s  med=12.52s max=48.07s  p(90)=34.96s   p(95)=38.07s  
     http_req_failed................: 0.28%  ✓ 7         ✗ 2408  
     http_req_receiving.............: avg=107.66µs min=0s     med=81.9µs max=6.65ms  p(90)=158.66µs p(95)=199.46µs
     http_req_sending...............: avg=93.38µs  min=9.19µs med=28.5µs max=10.4ms  p(90)=102.4µs  p(95)=142.22µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=17.01s   min=2.17s  med=12.55s max=48.06s  p(90)=35.08s   p(95)=38.23s  
     http_reqs......................: 2415   24.629445/s
     iteration_duration.............: avg=17.01s   min=2.17s  med=12.55s max=48.07s  p(90)=35.08s   p(95)=38.23s  
     iterations.....................: 2415   24.629445/s
     vus............................: 3      min=3       max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5de13efb-3de0-460b-35a4-98d19e6ae200/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/429f77a2-ca19-4e90-ec2c-23e8afbde400/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 4167 / ✗ 31
     ✗ expected_result
      ↳  99% — ✓ 4190 / ✗ 8

     checks.........................: 99.69% ✓ 12555     ✗ 39    
     data_received..................: 22 MB  254 kB/s
     data_sent......................: 5.0 MB 59 kB/s
     http_req_blocked...............: avg=162.53µs min=1.6µs    med=3.1µs  max=14.84ms p(90)=477.91µs p(95)=541.35µs
     http_req_connecting............: avg=140.11µs min=0s       med=0s     max=14.77ms p(90)=393.32µs p(95)=458.04µs
     http_req_duration..............: avg=11.06s   min=136.83ms med=2.73s  max=59.63s  p(90)=43.38s   p(95)=52.11s  
       { expected_response:true }...: avg=11.06s   min=136.83ms med=2.73s  max=59.63s  p(90)=43.38s   p(95)=52.11s  
     http_req_failed................: 0.00%  ✓ 0         ✗ 4198  
     http_req_receiving.............: avg=88.26µs  min=28.2µs   med=78.8µs max=12.06ms p(90)=112µs    p(95)=126.1µs 
     http_req_sending...............: avg=52.07µs  min=9.5µs    med=19.5µs max=3.12ms  p(90)=83.83µs  p(95)=105.01µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=11.06s   min=136.73ms med=2.73s  max=59.63s  p(90)=43.38s   p(95)=52.11s  
     http_reqs......................: 4198   49.405137/s
     iteration_duration.............: avg=11.07s   min=137.26ms med=2.73s  max=59.63s  p(90)=43.38s   p(95)=52.11s  
     iterations.....................: 4198   49.405137/s
     vus............................: 11     min=11      max=1000
     vus_max........................: 1000   min=1000    max=1000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/dc93baf0-a9a5-4188-3656-1b597bd9e200/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/fc2a9c4c-bd7b-4284-450d-8877d41f2500/public" alt="HTTP Overview" />


  </details>