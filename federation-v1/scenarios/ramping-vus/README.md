## Overview for: `federation-v1/ramping-vus`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. We are running a heavy load of concurrent VUs to measure response time and other stats, during stress. It measure things like memory usage, CPU usage, response times. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was trying to reach 2000 concurrent VUs over 600s


### Comparison


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/229b6c3b-9aea-44b9-7f63-3e26d45ed000/public" alt="Comparison" />


| Gateway             | duration(p95)⬇️ |  RPS  |         Requests         |                       Durations                        | Notes                                                                          |
| :------------------ | :-------------: | :---: | :----------------------: | :----------------------------------------------------: | :----------------------------------------------------------------------------- |
| wundergraph         |     6798ms      |  168  |  102752 total, 0 failed  |  avg: 2665ms, p95: 6799ms, max: 18164ms, med: 2218ms   | ✅                                                                              |
| apollo-router       |     6826ms      |  172  |  104975 total, 0 failed  |  avg: 2565ms, p95: 6827ms, max: 18279ms, med: 2098ms   | ✅                                                                              |
| mesh-supergraph-bun |     16168ms     |  120  |  74289 total, 0 failed   |  avg: 8354ms, p95: 16169ms, max: 40017ms, med: 7648ms  | ✅                                                                              |
| mesh-supergraph     |     18031ms     |  105  |  64859 total, 0 failed   |  avg: 9598ms, p95: 18032ms, max: 25650ms, med: 9483ms  | ✅                                                                              |
| mesh-bun            |     18066ms     |  109  |  67768 total, 0 failed   |  avg: 9245ms, p95: 18067ms, max: 44697ms, med: 8680ms  | ✅                                                                              |
| mesh                |     19777ms     |  98   |  60981 total, 0 failed   | avg: 10275ms, p95: 19777ms, max: 27667ms, med: 10122ms | ✅                                                                              |
| apollo-server       |     60000ms     |  75   | 48009 total, 7489 failed | avg: 13363ms, p95: 60001ms, max: 60717ms, med: 4289ms  | ❌ 7489 failed requests, 7489 non-200 responses, 7489 unexpected GraphQL errors |



<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 308256     ✗ 0     
     data_received..................: 9.0 GB  15 MB/s
     data_sent......................: 122 MB  200 kB/s
     http_req_blocked...............: avg=46.22ms  min=1.37µs  med=3.53µs  max=14.44s p(90)=5.59µs   p(95)=10.31µs
     http_req_connecting............: avg=44.2ms   min=0s      med=0s      max=13.89s p(90)=0s       p(95)=0s     
     http_req_duration..............: avg=2.66s    min=7.74ms  med=2.21s   max=18.16s p(90)=5.56s    p(95)=6.79s  
       { expected_response:true }...: avg=2.66s    min=7.74ms  med=2.21s   max=18.16s p(90)=5.56s    p(95)=6.79s  
     http_req_failed................: 0.00%   ✓ 0          ✗ 102752
     http_req_receiving.............: avg=541.61ms min=24.39µs med=73.85µs max=14.31s p(90)=1.8s     p(95)=3.64s  
     http_req_sending...............: avg=61.98ms  min=6.76µs  med=15.13µs max=12.81s p(90)=124.02µs p(95)=95.69ms
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s     p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=2.06s    min=7.67ms  med=1.73s   max=15.1s  p(90)=4.28s    p(95)=5.41s  
     http_reqs......................: 102752  168.442244/s
     iteration_duration.............: avg=5.91s    min=20.05ms med=4.84s   max=37.16s p(90)=12.72s   p(95)=15.37s 
     iterations.....................: 102752  168.442244/s
     vus............................: 8       min=8        max=1974
     vus_max........................: 2000    min=2000     max=2000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d765c51d-e121-46f0-67be-1055eb6fb200/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/196c058e-b4b1-4a50-4134-26f7a1b00900/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/20ea8470-e0fb-4be8-062d-d36467763300/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 314925     ✗ 0     
     data_received..................: 9.2 GB  15 MB/s
     data_sent......................: 125 MB  204 kB/s
     http_req_blocked...............: avg=42.5ms   min=1.67µs  med=3.69µs  max=16.36s p(90)=5.98µs   p(95)=10.39µs 
     http_req_connecting............: avg=39.47ms  min=0s      med=0s      max=16.36s p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=2.56s    min=7ms     med=2.09s   max=18.27s p(90)=5.36s    p(95)=6.82s   
       { expected_response:true }...: avg=2.56s    min=7ms     med=2.09s   max=18.27s p(90)=5.36s    p(95)=6.82s   
     http_req_failed................: 0.00%   ✓ 0          ✗ 104975
     http_req_receiving.............: avg=599.35ms min=25.16µs med=78.54µs max=15.62s p(90)=2.07s    p(95)=4.11s   
     http_req_sending...............: avg=81.38ms  min=7.74µs  med=16.24µs max=12.33s p(90)=143.47µs p(95)=254.83ms
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s     p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=1.88s    min=6.92ms  med=1.53s   max=11.87s p(90)=3.98s    p(95)=4.73s   
     http_reqs......................: 104975  172.089204/s
     iteration_duration.............: avg=5.82s    min=12.28ms med=4.53s   max=39.47s p(90)=12.85s   p(95)=15.72s  
     iterations.....................: 104975  172.089204/s
     vus............................: 7       min=7        max=2000
     vus_max........................: 2000    min=2000     max=2000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/334d12ae-fd51-4178-484c-ba3f8683e700/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/88ef1444-996b-44eb-31df-7cead638b800/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/64c58e58-8ec4-45d5-3d82-def8d5528800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 222867     ✗ 0     
     data_received..................: 6.5 GB  11 MB/s
     data_sent......................: 88 MB   143 kB/s
     http_req_blocked...............: avg=3.35ms   min=1.37µs   med=3.14µs  max=1.4s   p(90)=5.51µs   p(95)=10.21µs 
     http_req_connecting............: avg=3.22ms   min=0s       med=0s      max=1.4s   p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=8.35s    min=140.72ms med=7.64s   max=40.01s p(90)=15.16s   p(95)=16.16s  
       { expected_response:true }...: avg=8.35s    min=140.72ms med=7.64s   max=40.01s p(90)=15.16s   p(95)=16.16s  
     http_req_failed................: 0.00%   ✓ 0          ✗ 74289 
     http_req_receiving.............: avg=139.58ms min=28.28µs  med=69.69µs max=12.5s  p(90)=145.36ms p(95)=672.54ms
     http_req_sending...............: avg=6.77ms   min=7.09µs   med=13.83µs max=2.37s  p(90)=46.74µs  p(95)=254.3µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s     p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=8.2s     min=140.37ms med=7.52s   max=39.99s p(90)=15.02s   p(95)=15.89s  
     http_reqs......................: 74289   120.567989/s
     iteration_duration.............: avg=8.54s    min=150.76ms med=7.85s   max=41.61s p(90)=15.46s   p(95)=16.57s  
     iterations.....................: 74289   120.567989/s
     vus............................: 147     min=51       max=2000
     vus_max........................: 2000    min=2000     max=2000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/166c0326-41b2-41a9-abc1-5af7e0579500/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/db678203-1c0b-484b-2284-6bce32233800/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/76b44946-f71a-4d6a-26b0-ac382de5bf00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 194577     ✗ 0     
     data_received..................: 5.7 GB  9.2 MB/s
     data_sent......................: 77 MB   125 kB/s
     http_req_blocked...............: avg=3.84ms  min=1.64µs  med=3.76µs  max=1.9s   p(90)=6.21µs  p(95)=11.59µs 
     http_req_connecting............: avg=3.67ms  min=0s      med=0s      max=1.9s   p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=9.59s   min=35.13ms med=9.48s   max=25.65s p(90)=16.77s  p(95)=18.03s  
       { expected_response:true }...: avg=9.59s   min=35.13ms med=9.48s   max=25.65s p(90)=16.77s  p(95)=18.03s  
     http_req_failed................: 0.00%   ✓ 0          ✗ 64859 
     http_req_receiving.............: avg=36.88ms min=30.39µs med=70.67µs max=2.89s  p(90)=3.72ms  p(95)=138.58ms
     http_req_sending...............: avg=6.5ms   min=8.27µs  med=16.46µs max=2.73s  p(90)=53.87µs p(95)=10.27ms 
     http_req_tls_handshaking.......: avg=0s      min=0s      med=0s      max=0s     p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=9.55s   min=35.07ms med=9.44s   max=25.65s p(90)=16.71s  p(95)=17.89s  
     http_reqs......................: 64859   105.187397/s
     iteration_duration.............: avg=9.81s   min=60.1ms  med=9.69s   max=27.46s p(90)=17.07s  p(95)=18.42s  
     iterations.....................: 64859   105.187397/s
     vus............................: 177     min=51       max=1999
     vus_max........................: 2000    min=2000     max=2000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b711c6a5-ad66-4983-3a46-d66e9da50200/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/3f3e04be-137d-48f3-76e6-4fc7ac486b00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/693205a8-8abe-4a1c-2076-e0c9aeb51900/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 203304     ✗ 0     
     data_received..................: 5.9 GB  9.6 MB/s
     data_sent......................: 80 MB   130 kB/s
     http_req_blocked...............: avg=3.47ms   min=1.54µs   med=3.49µs  max=1.87s  p(90)=6.27µs  p(95)=11.32µs 
     http_req_connecting............: avg=3.21ms   min=0s       med=0s      max=1.87s  p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=9.24s    min=150.54ms med=8.68s   max=44.69s p(90)=17.1s   p(95)=18.06s  
       { expected_response:true }...: avg=9.24s    min=150.54ms med=8.68s   max=44.69s p(90)=17.1s   p(95)=18.06s  
     http_req_failed................: 0.00%   ✓ 0          ✗ 67768 
     http_req_receiving.............: avg=152.82ms min=28.85µs  med=75.48µs max=13.34s p(90)=86.45ms p(95)=645.12ms
     http_req_sending...............: avg=7.37ms   min=7.88µs   med=15.08µs max=2.6s   p(90)=52.46µs p(95)=539.46µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s     p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=9.08s    min=150.19ms med=8.61s   max=43.83s p(90)=16.84s  p(95)=17.74s  
     http_reqs......................: 67768   109.479886/s
     iteration_duration.............: avg=9.42s    min=177.03ms med=8.8s    max=44.8s  p(90)=17.34s  p(95)=18.6s   
     iterations.....................: 67768   109.479886/s
     vus............................: 287     min=50       max=1999
     vus_max........................: 2000    min=2000     max=2000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9b7ce636-9d6c-478c-9382-1b54c93e0d00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/31dab542-4b4d-4344-3dfb-c2d0c92db900/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b0def30a-3c76-4556-3554-7acf52bd2800/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 182943   ✗ 0     
     data_received..................: 5.4 GB  8.7 MB/s
     data_sent......................: 72 MB   117 kB/s
     http_req_blocked...............: avg=2.95ms  min=1.68µs  med=4.04µs  max=979.55ms p(90)=6.82µs  p(95)=12.42µs 
     http_req_connecting............: avg=2.88ms  min=0s      med=0s      max=979.46ms p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=10.27s  min=25.61ms med=10.12s  max=27.66s   p(90)=18.1s   p(95)=19.77s  
       { expected_response:true }...: avg=10.27s  min=25.61ms med=10.12s  max=27.66s   p(90)=18.1s   p(95)=19.77s  
     http_req_failed................: 0.00%   ✓ 0        ✗ 60981 
     http_req_receiving.............: avg=26.34ms min=30.33µs med=74.59µs max=2.18s    p(90)=3.01ms  p(95)=52.55ms 
     http_req_sending...............: avg=4.4ms   min=7.79µs  med=17.71µs max=2.22s    p(90)=47.93µs p(95)=386.58µs
     http_req_tls_handshaking.......: avg=0s      min=0s      med=0s      max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=10.24s  min=25.55ms med=10.09s  max=27.59s   p(90)=18.05s  p(95)=19.71s  
     http_reqs......................: 60981   98.76263/s
     iteration_duration.............: avg=10.44s  min=38.41ms med=10.29s  max=28.9s    p(90)=18.3s   p(95)=19.94s  
     iterations.....................: 60981   98.76263/s
     vus............................: 65      min=51     max=2000
     vus_max........................: 2000    min=2000   max=2000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/d005497d-b392-4be4-1423-7ee1c53de900/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/735068e5-fdf0-4c36-ac58-7a6c020c2500/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/bd1593fb-d25a-4f1c-5eef-2e7417730d00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✗ response code was 200
      ↳  84% — ✓ 40520 / ✗ 7489
     ✗ no graphql errors
      ↳  84% — ✓ 40520 / ✗ 7489
     ✓ valid response structure

     checks.........................: 89.03% ✓ 121560    ✗ 14978 
     data_received..................: 3.6 GB 5.6 MB/s
     data_sent......................: 57 MB  90 kB/s
     http_req_blocked...............: avg=796.68µs min=1.22µs  med=3.15µs  max=303.35ms p(90)=213.44µs p(95)=893.56µs
     http_req_connecting............: avg=771.3µs  min=0s      med=0s      max=303.31ms p(90)=167.18µs p(95)=785µs   
     http_req_duration..............: avg=13.36s   min=51.19ms med=4.28s   max=1m0s     p(90)=59.99s   p(95)=1m0s    
       { expected_response:true }...: avg=4.74s    min=51.19ms med=4.08s   max=58.71s   p(90)=5.86s    p(95)=6.44s   
     http_req_failed................: 15.59% ✓ 7489      ✗ 40520 
     http_req_receiving.............: avg=382.93µs min=0s      med=81.18µs max=292.64ms p(90)=132.75µs p(95)=275.55µs
     http_req_sending...............: avg=308.78µs min=7.63µs  med=15.06µs max=277.05ms p(90)=42.81µs  p(95)=82.77µs 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=13.36s   min=51.06ms med=4.28s   max=1m0s     p(90)=59.99s   p(95)=1m0s    
     http_reqs......................: 48009  75.698015/s
     iteration_duration.............: avg=13.37s   min=57.35ms med=4.3s    max=1m0s     p(90)=1m0s     p(95)=1m0s    
     iterations.....................: 48009  75.698015/s
     vus............................: 28     min=28      max=2000
     vus_max........................: 2000   min=2000    max=2000
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/fce58f73-6a23-42d3-fee6-91bab7d01f00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/38315d5a-73a9-4f70-4745-d7cdfe3c8f00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b9145cd9-42e3-4781-eebd-e97def758900/public" alt="HTTP Overview" />


  </details>