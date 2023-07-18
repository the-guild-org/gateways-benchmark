## Overview for scenario: `constant-vus-over-time`


This scenario runs 4 servics and a GraphQL gateway with Federation spec, and runs a heavy query. It's being executed with a constant amount of VUs over a fixed amount of time. It measure things like memory usage, CPU usage, average RPS. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was running 100 VUs over 60s


### Comparison


| Gateway                             | RPS ⬇️ |       Requests        |         Duration         |
| :---------------------------------- | :----: | :-------------------: | :----------------------: |
| wundergraph                         |  900   | 54055 total, 0 failed |  avg: 110ms, p95: 180ms  |
| apollo-router                       |   92   | 5612 total, 0 failed  | avg: 1074ms, p95: 2080ms |
| mercurius                           |   87   | 5252 total, 0 failed  | avg: 1145ms, p95: 1515ms |
| mesh                                |   67   | 4098 total, 0 failed  | avg: 1473ms, p95: 1798ms |
| apollo-server                       |   65   | 3982 total, 0 failed  | avg: 1518ms, p95: 1768ms |
| stitching-federation-with-yoga      |   58   | 3540 total, 0 failed  | avg: 1713ms, p95: 2159ms |
| stitching-federation-with-yoga-bun  |   58   | 3544 total, 0 failed  | avg: 1715ms, p95: 2669ms |
| apollo-gateway-with-yoga            |   40   | 2486 total, 0 failed  | avg: 2448ms, p95: 3380ms |
| stitching-federation-with-yoga-deno |   38   | 2392 total, 0 failed  | avg: 2554ms, p95: 3713ms |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 162165     ✗ 0    
     data_received..................: 263 MB  4.4 MB/s
     data_sent......................: 64 MB   1.1 MB/s
   ✓ expected_result................: 0.00%   ✓ 0          ✗ 0    
     http_req_blocked...............: avg=21.72µs  min=1µs     med=2.1µs    max=23.13ms  p(90)=3µs      p(95)=3.6µs   
     http_req_connecting............: avg=17.8µs   min=0s      med=0s       max=23.04ms  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=110.3ms  min=9.58ms  med=103.85ms max=373.99ms p(90)=159.87ms p(95)=179.96ms
       { expected_response:true }...: avg=110.3ms  min=9.58ms  med=103.85ms max=373.99ms p(90)=159.87ms p(95)=179.96ms
   ✓ http_req_failed................: 0.00%   ✓ 0          ✗ 54055
     http_req_receiving.............: avg=614µs    min=14.7µs  med=40µs     max=86.13ms  p(90)=215.61µs p(95)=634.87µs
     http_req_sending...............: avg=115.81µs min=6.4µs   med=11.5µs   max=69.59ms  p(90)=22.16µs  p(95)=59.03µs 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=109.57ms min=9.51ms  med=103.25ms max=373.94ms p(90)=158.48ms p(95)=177.59ms
     http_reqs......................: 54055   900.080064/s
     iteration_duration.............: avg=110.97ms min=10.04ms med=104.48ms max=374.24ms p(90)=160.76ms p(95)=181.34ms
     iterations.....................: 54055   900.080064/s
   ✓ no_errors......................: 0.00%   ✓ 0          ✗ 0    
     vus............................: 100     min=100      max=100
     vus_max........................: 100     min=100      max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/dbd7c631-9225-498d-342e-46fbd5fd5100/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/18d81a35-b034-4d41-d733-9d81dd504b00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 5611 / ✗ 1
     ✓ expected_result

     checks.........................: 99.99% ✓ 16835     ✗ 1    
     data_received..................: 28 MB  462 kB/s
     data_sent......................: 6.7 MB 110 kB/s
   ✓ expected_result................: 0.00%  ✓ 0         ✗ 0    
     http_req_blocked...............: avg=135.03µs min=1.4µs    med=2.5µs    max=30.34ms p(90)=3.6µs  p(95)=4.9µs  
     http_req_connecting............: avg=126.71µs min=0s       med=0s       max=21.5ms  p(90)=0s     p(95)=0s     
     http_req_duration..............: avg=1.07s    min=112.19ms med=959.78ms max=3.83s   p(90)=1.77s  p(95)=2.08s  
       { expected_response:true }...: avg=1.07s    min=112.19ms med=959.78ms max=3.83s   p(90)=1.77s  p(95)=2.08s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 5612 
     http_req_receiving.............: avg=62.13µs  min=24µs     med=55µs     max=7.34ms  p(90)=80.3µs p(95)=90.45µs
     http_req_sending...............: avg=36.01µs  min=7.9µs    med=15.3µs   max=13ms    p(90)=31.4µs p(95)=36.6µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s      p(90)=0s     p(95)=0s     
     http_req_waiting...............: avg=1.07s    min=112.11ms med=959.7ms  max=3.83s   p(90)=1.77s  p(95)=2.08s  
     http_reqs......................: 5612   92.718178/s
     iteration_duration.............: avg=1.07s    min=112.61ms med=960.21ms max=3.83s   p(90)=1.77s  p(95)=2.08s  
     iterations.....................: 5612   92.718178/s
   ✓ no_errors......................: 0.00%  ✓ 0         ✗ 0    
     vus............................: 100    min=100     max=100
     vus_max........................: 100    min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ff3006ad-ab02-4d58-5873-a7bceb148e00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ba082239-e65a-41fd-32b5-499c7f416f00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 15756     ✗ 0    
     data_received..................: 26 MB   438 kB/s
     data_sent......................: 6.2 MB  103 kB/s
   ✓ expected_result................: 0.00%   ✓ 0         ✗ 0    
     http_req_blocked...............: avg=277.8µs min=1.1µs    med=2.6µs   max=40.52ms p(90)=3.4µs   p(95)=4.84µs 
     http_req_connecting............: avg=261.7µs min=0s       med=0s      max=40.47ms p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=1.14s   min=279.61ms med=1.09s   max=3.41s   p(90)=1.28s   p(95)=1.51s  
       { expected_response:true }...: avg=1.14s   min=279.61ms med=1.09s   max=3.41s   p(90)=1.28s   p(95)=1.51s  
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 5252 
     http_req_receiving.............: avg=62.31µs min=20.2µs   med=62.29µs max=2.95ms  p(90)=82.19µs p(95)=86.99µs
     http_req_sending...............: avg=40.48µs min=6.5µs    med=16.99µs max=22.22ms p(90)=31.38µs p(95)=35.5µs 
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s      max=0s      p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=1.14s   min=279.45ms med=1.09s   max=3.41s   p(90)=1.28s   p(95)=1.51s  
     http_reqs......................: 5252    87.129807/s
     iteration_duration.............: avg=1.14s   min=279.89ms med=1.09s   max=3.43s   p(90)=1.28s   p(95)=1.51s  
     iterations.....................: 5252    87.129807/s
   ✓ no_errors......................: 0.00%   ✓ 0         ✗ 0    
     vus............................: 100     min=100     max=100
     vus_max........................: 100     min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/c26d91dd-12c8-4c98-0c8d-cd3dd1d94400/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/bbc8399c-a889-4798-913b-bd8546ea8800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 12294     ✗ 0    
     data_received..................: 21 MB   338 kB/s
     data_sent......................: 4.9 MB  80 kB/s
   ✓ expected_result................: 0.00%   ✓ 0         ✗ 0    
     http_req_blocked...............: avg=72.63µs min=1.1µs    med=1.9µs  max=24.64ms p(90)=3.1µs   p(95)=5.6µs  
     http_req_connecting............: avg=62.15µs min=0s       med=0s     max=6.43ms  p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=1.47s   min=655.48ms med=1.43s  max=2.94s   p(90)=1.64s   p(95)=1.79s  
       { expected_response:true }...: avg=1.47s   min=655.48ms med=1.43s  max=2.94s   p(90)=1.64s   p(95)=1.79s  
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 4098 
     http_req_receiving.............: avg=46.88µs min=17.8µs   med=41.8µs max=7.63ms  p(90)=66.89µs p(95)=74.8µs 
     http_req_sending...............: avg=92.99µs min=6µs      med=11.8µs max=22.02ms p(90)=26.6µs  p(95)=32.01µs
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s     max=0s      p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=1.47s   min=655.41ms med=1.43s  max=2.94s   p(90)=1.64s   p(95)=1.79s  
     http_reqs......................: 4098    67.600936/s
     iteration_duration.............: avg=1.47s   min=655.78ms med=1.43s  max=2.94s   p(90)=1.64s   p(95)=1.79s  
     iterations.....................: 4098    67.600936/s
   ✓ no_errors......................: 0.00%   ✓ 0         ✗ 0    
     vus............................: 100     min=100     max=100
     vus_max........................: 100     min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/64c5c425-269f-43ac-639a-50976f1c0000/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4e994fb5-fba3-4d0a-6058-c6ab21f97600/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 11946     ✗ 0    
     data_received..................: 21 MB   338 kB/s
     data_sent......................: 4.7 MB  78 kB/s
   ✓ expected_result................: 0.00%   ✓ 0         ✗ 0    
     http_req_blocked...............: avg=118.72µs min=1.1µs    med=2.2µs  max=11.61ms p(90)=3.2µs   p(95)=4.1µs  
     http_req_connecting............: avg=114.42µs min=0s       med=0s     max=11.57ms p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=1.51s    min=531.36ms med=1.4s   max=16.54s  p(90)=1.63s   p(95)=1.76s  
       { expected_response:true }...: avg=1.51s    min=531.36ms med=1.4s   max=16.54s  p(90)=1.63s   p(95)=1.76s  
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 3982 
     http_req_receiving.............: avg=56.82µs  min=19µs     med=53.4µs max=3.51ms  p(90)=78.39µs p(95)=85µs   
     http_req_sending...............: avg=47.52µs  min=7.2µs    med=13.8µs max=2.03ms  p(90)=27.59µs p(95)=32.69µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=1.51s    min=529.8ms  med=1.4s   max=16.54s  p(90)=1.63s   p(95)=1.76s  
     http_reqs......................: 3982    65.561285/s
     iteration_duration.............: avg=1.51s    min=543.49ms med=1.4s   max=16.55s  p(90)=1.63s   p(95)=1.76s  
     iterations.....................: 3982    65.561285/s
   ✓ no_errors......................: 0.00%   ✓ 0         ✗ 0    
     vus............................: 100     min=100     max=100
     vus_max........................: 100     min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9dc477a0-5436-40fe-4bcc-5ba4b0807400/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/673b1a30-8b05-4330-be0f-d6df7aa5fa00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 3533 / ✗ 7
     ✗ expected_result
      ↳  99% — ✓ 3539 / ✗ 1

     checks.........................: 99.92% ✓ 10612     ✗ 8    
     data_received..................: 18 MB  291 kB/s
     data_sent......................: 4.2 MB 69 kB/s
   ✓ expected_result................: 0.00%  ✓ 0         ✗ 0    
     http_req_blocked...............: avg=126.1µs  min=800ns    med=2.1µs  max=12.33ms p(90)=3.3µs   p(95)=6.53µs 
     http_req_connecting............: avg=121.37µs min=0s       med=0s     max=12.17ms p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=1.71s    min=952.22ms med=1.65s  max=3.64s   p(90)=1.97s   p(95)=2.15s  
       { expected_response:true }...: avg=1.71s    min=952.22ms med=1.65s  max=3.64s   p(90)=1.97s   p(95)=2.15s  
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 3540 
     http_req_receiving.............: avg=52.28µs  min=17.5µs   med=47.6µs max=2.59ms  p(90)=76.49µs p(95)=82.6µs 
     http_req_sending...............: avg=31.93µs  min=6.8µs    med=13.5µs max=1.46ms  p(90)=28.5µs  p(95)=41.51µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=1.71s    min=952.16ms med=1.65s  max=3.64s   p(90)=1.97s   p(95)=2.15s  
     http_reqs......................: 3540   58.090919/s
     iteration_duration.............: avg=1.71s    min=952.46ms med=1.65s  max=3.64s   p(90)=1.97s   p(95)=2.15s  
     iterations.....................: 3540   58.090919/s
   ✓ no_errors......................: 0.00%  ✓ 0         ✗ 0    
     vus............................: 100    min=100     max=100
     vus_max........................: 100    min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/45fa42da-4f66-406f-ffa3-60435bdbd200/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1e5efe66-2119-4922-5063-74f82c6dd800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no_errors
     ✓ expected_result

     checks.........................: 100.00% ✓ 10632     ✗ 0    
     data_received..................: 18 MB   289 kB/s
     data_sent......................: 4.2 MB  69 kB/s
   ✓ expected_result................: 0.00%   ✓ 0         ✗ 0    
     http_req_blocked...............: avg=682.49µs min=1.2µs    med=2.29µs  max=62.53ms p(90)=3.8µs    p(95)=18.57µs 
     http_req_connecting............: avg=636.86µs min=0s       med=0s      max=52.84ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=1.71s    min=320.66ms med=1.61s   max=5.49s   p(90)=2.38s    p(95)=2.66s   
       { expected_response:true }...: avg=1.71s    min=320.66ms med=1.61s   max=5.49s   p(90)=2.38s    p(95)=2.66s   
   ✓ http_req_failed................: 0.00%   ✓ 0         ✗ 3544 
     http_req_receiving.............: avg=163.23µs min=21.8µs   med=39.44µs max=38.32ms p(90)=109.17µs p(95)=198.41µs
     http_req_sending...............: avg=186.81µs min=8.69µs   med=14.1µs  max=49.69ms p(90)=111.54µs p(95)=463.45µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=1.71s    min=315.97ms med=1.61s   max=5.49s   p(90)=2.38s    p(95)=2.66s   
     http_reqs......................: 3544    58.029321/s
     iteration_duration.............: avg=1.71s    min=369.2ms  med=1.61s   max=5.51s   p(90)=2.38s    p(95)=2.66s   
     iterations.....................: 3544    58.029321/s
   ✓ no_errors......................: 0.00%   ✓ 0         ✗ 0    
     vus............................: 9       min=9       max=100
     vus_max........................: 100     min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/cc9b565c-a8f7-440c-231d-26be6ebe9d00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/2fd70c2c-2e14-4eac-aff0-72da99126600/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-gateway-with-yoga`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  97% — ✓ 2430 / ✗ 56
     ✗ expected_result
      ↳  99% — ✓ 2478 / ✗ 8

     checks.........................: 99.14% ✓ 7394      ✗ 64   
     data_received..................: 12 MB  201 kB/s
     data_sent......................: 3.0 MB 48 kB/s
   ✓ expected_result................: 0.00%  ✓ 0         ✗ 0    
     http_req_blocked...............: avg=246.36µs min=1.6µs    med=3.4µs  max=16.6ms  p(90)=6.5µs   p(95)=24.8µs  
     http_req_connecting............: avg=236.38µs min=0s       med=0s     max=16.54ms p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=2.44s    min=935.94ms med=2.3s   max=5.16s   p(90)=2.99s   p(95)=3.37s   
       { expected_response:true }...: avg=2.44s    min=935.94ms med=2.3s   max=5.16s   p(90)=2.99s   p(95)=3.37s   
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 2486 
     http_req_receiving.............: avg=89.75µs  min=27.6µs   med=77.6µs max=6.72ms  p(90)=124.3µs p(95)=154.47µs
     http_req_sending...............: avg=70.47µs  min=11.8µs   med=22.4µs max=3.72ms  p(90)=50.55µs p(95)=120.7µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=2.44s    min=935.76ms med=2.3s   max=5.16s   p(90)=2.99s   p(95)=3.37s   
     http_reqs......................: 2486   40.507574/s
     iteration_duration.............: avg=2.44s    min=936.42ms med=2.3s   max=5.16s   p(90)=2.99s   p(95)=3.38s   
     iterations.....................: 2486   40.507574/s
   ✓ no_errors......................: 0.00%  ✓ 0         ✗ 0    
     vus............................: 56     min=56      max=100
     vus_max........................: 100    min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/ebbb081f-6203-4143-030d-7b21d9b69400/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7721593f-21d4-447d-cc04-1e694b440200/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `stitching-federation-with-yoga-deno`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✗ no_errors
      ↳  99% — ✓ 2384 / ✗ 8
     ✓ expected_result

     checks.........................: 99.88% ✓ 7168      ✗ 8    
     data_received..................: 12 MB  196 kB/s
     data_sent......................: 2.8 MB 46 kB/s
   ✓ expected_result................: 0.00%  ✓ 0         ✗ 0    
     http_req_blocked...............: avg=416.04µs min=1.4µs  med=2.8µs   max=26.74ms p(90)=5.4µs    p(95)=26.87µs 
     http_req_connecting............: avg=399.95µs min=0s     med=0s      max=26.48ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=2.55s    min=1.47s  med=2.43s   max=4.32s   p(90)=2.99s    p(95)=3.71s   
       { expected_response:true }...: avg=2.55s    min=1.47s  med=2.43s   max=4.32s   p(90)=2.99s    p(95)=3.71s   
   ✓ http_req_failed................: 0.00%  ✓ 0         ✗ 2392 
     http_req_receiving.............: avg=169.91µs min=23µs   med=56.05µs max=29.36ms p(90)=138.19µs p(95)=245.02µs
     http_req_sending...............: avg=288.91µs min=10.8µs med=16.6µs  max=30ms    p(90)=50.78µs  p(95)=324.2µs 
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=2.55s    min=1.47s  med=2.43s   max=4.32s   p(90)=2.99s    p(95)=3.71s   
     http_reqs......................: 2392   38.919534/s
     iteration_duration.............: avg=2.55s    min=1.47s  med=2.43s   max=4.34s   p(90)=3s       p(95)=3.71s   
     iterations.....................: 2392   38.919534/s
   ✓ no_errors......................: 0.00%  ✓ 0         ✗ 0    
     vus............................: 80     min=80      max=100
     vus_max........................: 100    min=100     max=100
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6e7dde32-77d9-450b-a834-8b655cb1da00/public" alt="Performance Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d247c64b-9760-4c9a-b4ca-9e27e3526f00/public" alt="HTTP Overview" />


  </details>