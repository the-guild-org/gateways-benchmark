## Overview for: `scenarios/fed-v1-constant-vus-over-time`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. It's being executed with a constant amount of VUs over a fixed amount of time. It measure things like memory usage, CPU usage, average RPS. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was running 100 VUs over 60s


### Comparison


| Gateway                             | RPS ⬇️ |       Requests        |         Duration         |
| :---------------------------------- | :----: | :-------------------: | :----------------------: |
| wundergraph                         |  396   | 23867 total, 0 failed |  avg: 249ms, p95: 404ms  |
| apollo-router                       |  112   | 6835 total, 0 failed  | avg: 882ms, p95: 1231ms  |
| mesh-supergraph                     |   97   | 5857 total, 0 failed  | avg: 1028ms, p95: 1558ms |
| mesh                                |   95   | 5795 total, 0 failed  | avg: 1041ms, p95: 1569ms |
| stitching-federation-with-yoga-bun  |   92   | 5578 total, 0 failed  | avg: 1077ms, p95: 1712ms |
| stitching-federation-with-yoga      |   65   | 3973 total, 0 failed  | avg: 1521ms, p95: 1961ms |
| stitching-federation-with-yoga-deno |   65   | 3992 total, 0 failed  | avg: 1513ms, p95: 2045ms |
| apollo-server                       |   64   | 3944 total, 0 failed  | avg: 1532ms, p95: 1741ms |
| stitching-federation-with-yoga-uws  |   61   | 3746 total, 0 failed  | avg: 1620ms, p95: 2263ms |
| apollo-gateway-with-yoga-uws        |   57   | 3536 total, 0 failed  | avg: 1716ms, p95: 2320ms |
| mercurius                           |   52   | 3166 total, 0 failed  | avg: 1904ms, p95: 2483ms |
| apollo-gateway-with-yoga            |   50   | 3088 total, 0 failed  | avg: 1961ms, p95: 2243ms |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 71601      ✗ 0    
     data_received..................: 119 MB  2.0 MB/s
     data_sent......................: 28 MB   471 kB/s
     http_req_blocked...............: avg=54.64µs  min=1.3µs   med=2.8µs    max=49.9ms   p(90)=4.3µs    p(95)=6.37µs  
     http_req_connecting............: avg=39.97µs  min=0s      med=0s       max=15.51ms  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=249.23ms min=55.48ms med=236.09ms max=760.24ms p(90)=358.61ms p(95)=404.4ms 
       { expected_response:true }...: avg=249.23ms min=55.48ms med=236.09ms max=760.24ms p(90)=358.61ms p(95)=404.4ms 
   ✓ http_req_failed................: 0.00%   ✓ 0          ✗ 23867
     http_req_receiving.............: avg=1.65ms   min=23.4µs  med=59.9µs   max=212.24ms p(90)=326.38µs p(95)=4.01ms  
     http_req_sending...............: avg=484.96µs min=9.6µs   med=15.9µs   max=183.03ms p(90)=46.14µs  p(95)=167.19µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=247.09ms min=55.25ms med=234.27ms max=710.95ms p(90)=355.93ms p(95)=400.21ms
     http_reqs......................: 23867   396.409824/s
     iteration_duration.............: avg=251.92ms min=56.3ms  med=238.5ms  max=760.88ms p(90)=361.66ms p(95)=408.12ms
     iterations.....................: 23867   396.409824/s
     vus............................: 100     min=100      max=100
     vus_max........................: 100     min=100      max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7f59390d-ed41-4c2a-e4d8-4a22badc7700/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/cde2ff68-5fa0-4905-eaf1-de31adb9a600/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 6832 / ✗ 3
     ✗ valid response structure
      ↳  99% — ✓ 6832 / ✗ 3

     checks.........................: 99.97% ✓ 20499      ✗ 6    
     data_received..................: 34 MB  562 kB/s
     data_sent......................: 8.1 MB 134 kB/s
     http_req_blocked...............: avg=82.47µs  min=1.3µs    med=2.9µs    max=19.26ms p(90)=4.2µs  p(95)=5.73µs 
     http_req_connecting............: avg=76.57µs  min=0s       med=0s       max=17.67ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=882.27ms min=352.35ms med=846.57ms max=3.41s   p(90)=1.11s  p(95)=1.23s  
       { expected_response:true }...: avg=882.27ms min=352.35ms med=846.57ms max=3.41s   p(90)=1.11s  p(95)=1.23s  
   ✓ http_req_failed................: 0.00%  ✓ 0          ✗ 6835 
     http_req_receiving.............: avg=64.53µs  min=22µs     med=58.5µs   max=12.99ms p(90)=81.9µs p(95)=88.43µs
     http_req_sending...............: avg=47.82µs  min=7.5µs    med=16.4µs   max=9.23ms  p(90)=30µs   p(95)=36.1µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s      p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=882.16ms min=352.28ms med=846.46ms max=3.41s   p(90)=1.11s  p(95)=1.23s  
     http_reqs......................: 6835   112.895941/s
     iteration_duration.............: avg=883.11ms min=353.1ms  med=847.26ms max=3.42s   p(90)=1.11s  p(95)=1.23s  
     iterations.....................: 6835   112.895941/s
     vus............................: 100    min=100      max=100
     vus_max........................: 100    min=100      max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/26c2ff98-4a33-4c0d-eb7f-3ce0f87ece00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/5a61ff67-b3f4-4ed7-5b93-cf07ddfaea00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 5852 / ✗ 5
     ✗ valid response structure
      ↳  0% — ✓ 0 / ✗ 5857

     checks.........................: 66.63% ✓ 11709    ✗ 5862 
     data_received..................: 30 MB  489 kB/s
     data_sent......................: 7.0 MB 115 kB/s
     http_req_blocked...............: avg=237.66µs min=1.3µs    med=2.29µs   max=24.49ms p(90)=3.5µs   p(95)=4.2µs  
     http_req_connecting............: avg=233.32µs min=0s       med=0s       max=24.46ms p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=1.02s    min=355.47ms med=966.87ms max=2.7s    p(90)=1.3s    p(95)=1.55s  
       { expected_response:true }...: avg=1.02s    min=355.47ms med=966.87ms max=2.7s    p(90)=1.3s    p(95)=1.55s  
   ✓ http_req_failed................: 0.00%  ✓ 0        ✗ 5857 
     http_req_receiving.............: avg=60.8µs   min=21µs     med=54.1µs   max=5.14ms  p(90)=75.9µs  p(95)=83.92µs
     http_req_sending...............: avg=58.62µs  min=8.1µs    med=13µs     max=13.48ms p(90)=23.24µs p(95)=30.2µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s      p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=1.02s    min=355.39ms med=966.8ms  max=2.7s    p(90)=1.3s    p(95)=1.55s  
     http_reqs......................: 5857   97.06927/s
     iteration_duration.............: avg=1.02s    min=355.76ms med=967.17ms max=2.71s   p(90)=1.3s    p(95)=1.55s  
     iterations.....................: 5857   97.06927/s
     vus............................: 100    min=100    max=100
     vus_max........................: 100    min=100    max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/34b75b4c-a1c6-4f58-d647-4cadc95a5800/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9291f2ed-da13-4d7f-ec4a-1a64c5855000/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 17385     ✗ 0    
     data_received..................: 29 MB   478 kB/s
     data_sent......................: 6.9 MB  114 kB/s
     http_req_blocked...............: avg=45.05µs min=1µs      med=2.2µs    max=8.03ms  p(90)=3.2µs  p(95)=3.9µs  
     http_req_connecting............: avg=42.04µs min=0s       med=0s       max=8.01ms  p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=1.04s   min=434.59ms med=979.34ms max=2.7s    p(90)=1.34s  p(95)=1.56s  
       { expected_response:true }...: avg=1.04s   min=434.59ms med=979.34ms max=2.7s    p(90)=1.34s  p(95)=1.56s  
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 5795 
     http_req_receiving.............: avg=55.16µs min=18.29µs  med=44µs     max=9.22ms  p(90)=66.9µs p(95)=74.8µs 
     http_req_sending...............: avg=38.33µs min=6.99µs   med=12.7µs   max=12.71ms p(90)=25.6µs p(95)=30.32µs
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s       max=0s      p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=1.04s   min=434.53ms med=979.28ms max=2.69s   p(90)=1.34s  p(95)=1.56s  
     http_reqs......................: 5795    95.653535/s
     iteration_duration.............: avg=1.04s   min=435.13ms med=979.94ms max=2.7s    p(90)=1.34s  p(95)=1.57s  
     iterations.....................: 5795    95.653535/s
     vus............................: 100     min=100     max=100
     vus_max........................: 100     min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b233d8aa-f148-4983-3132-3f86114a2900/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/51537668-e682-46f8-62e2-5332977c9a00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 16734     ✗ 0    
     data_received..................: 28 MB   460 kB/s
     data_sent......................: 6.6 MB  110 kB/s
     http_req_blocked...............: avg=71.17µs  min=1.4µs    med=2.4µs   max=13.29ms p(90)=3.9µs   p(95)=8.9µs   
     http_req_connecting............: avg=65.6µs   min=0s       med=0s      max=13.26ms p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=1.07s    min=372.36ms med=1.01s   max=3.92s   p(90)=1.45s   p(95)=1.71s   
       { expected_response:true }...: avg=1.07s    min=372.36ms med=1.01s   max=3.92s   p(90)=1.45s   p(95)=1.71s   
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 5578 
     http_req_receiving.............: avg=119.84µs min=20.7µs   med=46.3µs  max=33.23ms p(90)=74.3µs  p(95)=125.83µs
     http_req_sending...............: avg=187.37µs min=8µs      med=13.89µs max=26.14ms p(90)=34.03µs p(95)=154.83µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=1.07s    min=372.11ms med=1.01s   max=3.92s   p(90)=1.45s   p(95)=1.71s   
     http_reqs......................: 5578    92.343369/s
     iteration_duration.............: avg=1.07s    min=376.61ms med=1.01s   max=3.92s   p(90)=1.45s   p(95)=1.71s   
     iterations.....................: 5578    92.343369/s
     vus............................: 100     min=100     max=100
     vus_max........................: 100     min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f37061f3-07da-4a62-9055-d8a94e14aa00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/73eb3b84-4062-40f8-7c5d-892deabfa600/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 3970 / ✗ 3
     ✗ valid response structure
      ↳  99% — ✓ 3970 / ✗ 3

     checks.........................: 99.94% ✓ 11913     ✗ 6    
     data_received..................: 20 MB  329 kB/s
     data_sent......................: 4.7 MB 78 kB/s
     http_req_blocked...............: avg=190.26µs min=1.6µs    med=2.9µs  max=17.47ms p(90)=4.98µs p(95)=15.9µs 
     http_req_connecting............: avg=182.42µs min=0s       med=0s     max=17.27ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=1.52s    min=521.38ms med=1.39s  max=19.19s  p(90)=1.62s  p(95)=1.96s  
       { expected_response:true }...: avg=1.52s    min=521.38ms med=1.39s  max=19.19s  p(90)=1.62s  p(95)=1.96s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 3973 
     http_req_receiving.............: avg=68.25µs  min=24.8µs   med=62.7µs max=6.11ms  p(90)=91.3µs p(95)=99.84µs
     http_req_sending...............: avg=64.5µs   min=9.7µs    med=16.9µs max=23.22ms p(90)=33.5µs p(95)=39.58µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=1.52s    min=521.02ms med=1.38s  max=19.19s  p(90)=1.62s  p(95)=1.96s  
     http_reqs......................: 3973   65.315014/s
     iteration_duration.............: avg=1.52s    min=535.4ms  med=1.39s  max=19.19s  p(90)=1.62s  p(95)=1.96s  
     iterations.....................: 3973   65.315014/s
     vus............................: 100    min=100     max=100
     vus_max........................: 100    min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4f41665e-e432-4151-198c-87ad323b4b00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/57a6b685-5f09-4c44-2cee-7a1917ddca00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-deno`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 3988 / ✗ 4
     ✗ valid response structure
      ↳  99% — ✓ 3988 / ✗ 4

     checks.........................: 99.93% ✓ 11968     ✗ 8    
     data_received..................: 20 MB  332 kB/s
     data_sent......................: 4.7 MB 78 kB/s
     http_req_blocked...............: avg=388.84µs min=1.3µs    med=2.8µs  max=34.23ms p(90)=4.59µs  p(95)=13µs    
     http_req_connecting............: avg=381.25µs min=0s       med=0s     max=34.12ms p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=1.51s    min=757.95ms med=1.46s  max=2.66s   p(90)=1.76s   p(95)=2.04s   
       { expected_response:true }...: avg=1.51s    min=757.95ms med=1.46s  max=2.66s   p(90)=1.76s   p(95)=2.04s   
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 3992 
     http_req_receiving.............: avg=139.48µs min=21.3µs   med=41.3µs max=18.55ms p(90)=96.38µs p(95)=136.36µs
     http_req_sending...............: avg=156.41µs min=7.2µs    med=15.4µs max=20.92ms p(90)=40.9µs  p(95)=178.85µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=1.51s    min=757.92ms med=1.46s  max=2.66s   p(90)=1.76s   p(95)=2.04s   
     http_reqs......................: 3992   65.708101/s
     iteration_duration.............: avg=1.51s    min=758.54ms med=1.46s  max=2.68s   p(90)=1.76s   p(95)=2.04s   
     iterations.....................: 3992   65.708101/s
     vus............................: 100    min=100     max=100
     vus_max........................: 100    min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/759da268-8aac-460b-0283-feadc73db000/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0383f595-f4a2-427c-10bc-4abb9c65f400/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 3943 / ✗ 1
     ✗ valid response structure
      ↳  99% — ✓ 3943 / ✗ 1

     checks.........................: 99.98% ✓ 11830     ✗ 2    
     data_received..................: 20 MB  334 kB/s
     data_sent......................: 4.7 MB 77 kB/s
     http_req_blocked...............: avg=89.07µs min=1.4µs    med=2.29µs  max=11.06ms p(90)=3.5µs   p(95)=11.08µs
     http_req_connecting............: avg=84.98µs min=0s       med=0s      max=11.03ms p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=1.53s   min=391.91ms med=1.4s    max=18.85s  p(90)=1.61s   p(95)=1.74s  
       { expected_response:true }...: avg=1.53s   min=391.91ms med=1.4s    max=18.85s  p(90)=1.61s   p(95)=1.74s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 3944 
     http_req_receiving.............: avg=59.26µs min=22.3µs   med=49.84µs max=9.68ms  p(90)=77.69µs p(95)=84.58µs
     http_req_sending...............: avg=40.4µs  min=8.2µs    med=13.89µs max=6.08ms  p(90)=28.1µs  p(95)=34.16µs
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s      max=0s      p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=1.53s   min=391.83ms med=1.4s    max=18.85s  p(90)=1.61s   p(95)=1.74s  
     http_reqs......................: 3944   64.881904/s
     iteration_duration.............: avg=1.53s   min=392.5ms  med=1.4s    max=18.85s  p(90)=1.61s   p(95)=1.74s  
     iterations.....................: 3944   64.881904/s
     vus............................: 100    min=100     max=100
     vus_max........................: 100    min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e21e837e-3845-4b4b-b24a-0d71ea743500/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4c422597-7b16-4b18-c6c4-083c7ac99f00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-uws`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 3740 / ✗ 6
     ✗ valid response structure
      ↳  99% — ✓ 3740 / ✗ 6

     checks.........................: 99.89% ✓ 11226     ✗ 12   
     data_received..................: 19 MB  307 kB/s
     data_sent......................: 4.4 MB 73 kB/s
     http_req_blocked...............: avg=254.72µs min=1.4µs  med=2.5µs   max=20.19ms p(90)=4.1µs  p(95)=16.64µs
     http_req_connecting............: avg=250.37µs min=0s     med=0s      max=20.16ms p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=1.61s    min=1.09s  med=1.53s   max=3.19s   p(90)=1.99s  p(95)=2.26s  
       { expected_response:true }...: avg=1.61s    min=1.09s  med=1.53s   max=3.19s   p(90)=1.99s  p(95)=2.26s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 3746 
     http_req_receiving.............: avg=87.47µs  min=22.1µs med=56.2µs  max=31.3ms  p(90)=80.5µs p(95)=93.55µs
     http_req_sending...............: avg=99.23µs  min=9.4µs  med=14.55µs max=58.7ms  p(90)=31.5µs p(95)=45.97µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s      p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=1.61s    min=1.09s  med=1.53s   max=3.19s   p(90)=1.99s  p(95)=2.26s  
     http_reqs......................: 3746   61.340104/s
     iteration_duration.............: avg=1.62s    min=1.09s  med=1.53s   max=3.19s   p(90)=1.99s  p(95)=2.26s  
     iterations.....................: 3746   61.340104/s
     vus............................: 26     min=26      max=100
     vus_max........................: 100    min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/00af8033-80eb-4099-b4a3-e06c2bfc8e00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f58e0c4c-fe46-451a-c675-a60c8a8dc400/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga-uws`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 3505 / ✗ 31
     ✗ valid response structure
      ↳  99% — ✓ 3505 / ✗ 31

     checks.........................: 99.41% ✓ 10546     ✗ 62   
     data_received..................: 18 MB  289 kB/s
     data_sent......................: 4.2 MB 69 kB/s
     http_req_blocked...............: avg=33.82µs min=1.2µs  med=2.7µs  max=4.05ms  p(90)=4.2µs  p(95)=14.77µs
     http_req_connecting............: avg=27.76µs min=0s     med=0s     max=3.93ms  p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=1.71s   min=1.07s  med=1.62s  max=3.98s   p(90)=2.07s  p(95)=2.31s  
       { expected_response:true }...: avg=1.71s   min=1.07s  med=1.62s  max=3.98s   p(90)=2.07s  p(95)=2.31s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 3536 
     http_req_receiving.............: avg=64.63µs min=24.4µs med=58µs   max=4.96ms  p(90)=83.4µs p(95)=91.32µs
     http_req_sending...............: avg=52.4µs  min=7.1µs  med=15.3µs max=21.02ms p(90)=29.8µs p(95)=57.35µs
     http_req_tls_handshaking.......: avg=0s      min=0s     med=0s     max=0s      p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=1.71s   min=1.07s  med=1.62s  max=3.97s   p(90)=2.07s  p(95)=2.31s  
     http_reqs......................: 3536   57.896603/s
     iteration_duration.............: avg=1.71s   min=1.07s  med=1.62s  max=3.98s   p(90)=2.07s  p(95)=2.32s  
     iterations.....................: 3536   57.896603/s
     vus............................: 23     min=23      max=100
     vus_max........................: 100    min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/af30e3e9-a49c-4617-bf9b-227d4f3da600/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ae46e39f-c36e-46f8-ff85-31d995e50d00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 9498      ✗ 0    
     data_received..................: 16 MB   263 kB/s
     data_sent......................: 3.8 MB  62 kB/s
     http_req_blocked...............: avg=221.04µs min=1.7µs    med=3.9µs   max=20.14ms p(90)=6µs      p(95)=24.55µs 
     http_req_connecting............: avg=207.18µs min=0s       med=0s      max=20.1ms  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=1.9s     min=684.5ms  med=1.8s    max=6.13s   p(90)=2.16s    p(95)=2.48s   
       { expected_response:true }...: avg=1.9s     min=684.5ms  med=1.8s    max=6.13s   p(90)=2.16s    p(95)=2.48s   
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 3166 
     http_req_receiving.............: avg=102.35µs min=27.9µs   med=89.84µs max=14.37ms p(90)=129.39µs p(95)=148.57µs
     http_req_sending...............: avg=88.45µs  min=10.7µs   med=24µs    max=20.7ms  p(90)=50.6µs   p(95)=122.99µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=1.9s     min=684.43ms med=1.8s    max=6.13s   p(90)=2.16s    p(95)=2.48s   
     http_reqs......................: 3166    52.180331/s
     iteration_duration.............: avg=1.9s     min=685.5ms  med=1.8s    max=6.14s   p(90)=2.16s    p(95)=2.48s   
     iterations.....................: 3166    52.180331/s
     vus............................: 100     min=100     max=100
     vus_max........................: 100     min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0a58f531-3c24-40d4-0d74-2fa0d1a14200/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/0dd36ea2-b9f2-4b67-1f61-608b7d894100/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no graphql errors
      ↳  99% — ✓ 3075 / ✗ 13
     ✗ valid response structure
      ↳  99% — ✓ 3075 / ✗ 13

     checks.........................: 99.71% ✓ 9238      ✗ 26   
     data_received..................: 16 MB  254 kB/s
     data_sent......................: 3.7 MB 60 kB/s
     http_req_blocked...............: avg=68.74µs min=1.6µs    med=3µs    max=7.12ms  p(90)=5µs     p(95)=19.3µs  
     http_req_connecting............: avg=61.14µs min=0s       med=0s     max=6.97ms  p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=1.96s   min=677.06ms med=1.75s  max=22.36s  p(90)=2.05s   p(95)=2.24s   
       { expected_response:true }...: avg=1.96s   min=677.06ms med=1.75s  max=22.36s  p(90)=2.05s   p(95)=2.24s   
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 3088 
     http_req_receiving.............: avg=71.42µs min=26.8µs   med=62.3µs max=8.43ms  p(90)=91.5µs  p(95)=101µs   
     http_req_sending...............: avg=72.79µs min=8.8µs    med=17.4µs max=12.51ms p(90)=35.83µs p(95)=106.71µs
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s     max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=1.96s   min=676.17ms med=1.75s  max=22.36s  p(90)=2.05s   p(95)=2.24s   
     http_reqs......................: 3088   50.662991/s
     iteration_duration.............: avg=1.96s   min=679.4ms  med=1.75s  max=22.36s  p(90)=2.05s   p(95)=2.24s   
     iterations.....................: 3088   50.662991/s
     vus............................: 8      min=8       max=100
     vus_max........................: 100    min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/567335dd-d15d-468f-999e-0e65b344a200/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8852d293-0739-488b-cbb8-53516dd41a00/public" alt="HTTP Overview" />


  </details>