## Overview for: `constant-vus-over-time`


This scenario runs 4 subgraphs and a GraphQL gateway with Federation v1 spec, and runs a heavy query. It's being executed with a constant amount of VUs over a fixed amount of time. It measure things like memory usage, CPU usage, average RPS. It also includes a summary of the entire execution, and metrics information about HTTP execution times.


This scenario was running 300 VUs over 700s


### Comparison


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7a9101db-36c7-4587-1c01-4f37a23eab00/public" alt="Comparison" />


| Gateway              | RPS ⬇️ |        Requests        |         Duration         | Notes |
| :------------------- | :----: | :--------------------: | :----------------------: | :---- |
| apollo-router        |  171   | 120422 total, 0 failed | avg: 943ms, p95: 2534ms  | ✅     |
| wundergraph          |  168   | 118102 total, 0 failed | avg: 882ms, p95: 2576ms  | ✅     |
| mesh-bun             |   91   | 64190 total, 0 failed  | avg: 3256ms, p95: 3430ms | ✅     |
| mesh-supergraph      |   81   | 57572 total, 0 failed  | avg: 3619ms, p95: 5065ms | ✅     |
| mesh                 |   73   | 51620 total, 0 failed  | avg: 4044ms, p95: 4830ms | ✅     |
| apollo-server        |   66   | 47077 total, 0 failed  | avg: 4454ms, p95: 6255ms | ✅     |
| apollo-server-node16 |   66   | 46915 total, 0 failed  | avg: 4468ms, p95: 6265ms | ✅     |
| mercurius            |   46   | 32625 total, 0 failed  | avg: 6436ms, p95: 7028ms | ✅     |



<details>
  <summary>Summary for: `apollo-router`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 361266    ✗ 0     
     data_received..................: 11 GB   15 MB/s
     data_sent......................: 143 MB  204 kB/s
     http_req_blocked...............: avg=1.12ms   min=1.46µs  med=3.83µs   max=3.98s  p(90)=6.26µs   p(95)=7.29µs  
     http_req_connecting............: avg=831.48µs min=0s      med=0s       max=3.98s  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=943.11ms min=9.58ms  med=724.36ms max=9.18s  p(90)=2.05s    p(95)=2.53s   
       { expected_response:true }...: avg=943.11ms min=9.58ms  med=724.36ms max=9.18s  p(90)=2.05s    p(95)=2.53s   
     http_req_failed................: 0.00%   ✓ 0         ✗ 120422
     http_req_receiving.............: avg=380.53ms min=23.94µs med=87.74µs  max=6.86s  p(90)=1.42s    p(95)=2.01s   
     http_req_sending...............: avg=18.66ms  min=7.38µs  med=17.27µs  max=5.44s  p(90)=41.12µs  p(95)=187.58µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s     p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=543.91ms min=9.01ms  med=510.89ms max=2.97s  p(90)=974.07ms p(95)=1.13s   
     http_reqs......................: 120422  171.80612/s
     iteration_duration.............: avg=1.73s    min=20.08ms med=1.4s     max=12.52s p(90)=3.66s    p(95)=4.52s   
     iterations.....................: 120422  171.80612/s
     vus............................: 300     min=300     max=300 
     vus_max........................: 300     min=300     max=300 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1beb6473-22a0-4bde-18d2-8c35361f9100/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/18678d4c-d031-444f-7d9c-ba16fe4d0800/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/1fdcdc1a-5604-47f2-34f4-4b5ece379b00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `wundergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 354306    ✗ 0     
     data_received..................: 10 GB   15 MB/s
     data_sent......................: 140 MB  200 kB/s
     http_req_blocked...............: avg=1.54ms   min=1.52µs  med=3.19µs   max=4.2s   p(90)=4.66µs   p(95)=5.68µs 
     http_req_connecting............: avg=1.11ms   min=0s      med=0s       max=4.14s  p(90)=0s       p(95)=0s     
     http_req_duration..............: avg=882.08ms min=8.68ms  med=646.39ms max=8.34s  p(90)=2.01s    p(95)=2.57s  
       { expected_response:true }...: avg=882.08ms min=8.68ms  med=646.39ms max=8.34s  p(90)=2.01s    p(95)=2.57s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 118102
     http_req_receiving.............: avg=367.72ms min=20.79µs med=75.72µs  max=7.7s   p(90)=1.42s    p(95)=2.07s  
     http_req_sending...............: avg=24.68ms  min=7.02µs  med=14.2µs   max=5.49s  p(90)=44.16µs  p(95)=12.42ms
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s     p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=489.67ms min=7.26ms  med=432.99ms max=3.32s  p(90)=923.47ms p(95)=1.08s  
     http_reqs......................: 118102  168.50723/s
     iteration_duration.............: avg=1.76s    min=18.09ms med=1.39s    max=16.14s p(90)=3.82s    p(95)=4.71s  
     iterations.....................: 118102  168.50723/s
     vus............................: 300     min=300     max=300 
     vus_max........................: 300     min=300     max=300 
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8f650b04-7523-48b1-9831-9ad37b8de700/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/e5d26be5-4e2a-4714-b9d6-f65cb8c8c900/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7fcaea82-769b-4621-c5ee-6dd82ec9af00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-bun`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 192570  ✗ 0    
     data_received..................: 5.6 GB  8.0 MB/s
     data_sent......................: 76 MB   108 kB/s
     http_req_blocked...............: avg=158.33µs min=1.41µs   med=3.5µs   max=127.77ms p(90)=5.88µs   p(95)=7.01µs  
     http_req_connecting............: avg=144µs    min=0s       med=0s      max=41.18ms  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=3.25s    min=147.53ms med=3.19s   max=6.92s    p(90)=3.35s    p(95)=3.43s   
       { expected_response:true }...: avg=3.25s    min=147.53ms med=3.19s   max=6.92s    p(90)=3.35s    p(95)=3.43s   
     http_req_failed................: 0.00%   ✓ 0       ✗ 64190
     http_req_receiving.............: avg=5.92ms   min=33.84µs  med=98.6µs  max=1.97s    p(90)=242.61µs p(95)=760.86µs
     http_req_sending...............: avg=368.88µs min=7.56µs   med=16.96µs max=315.04ms p(90)=34.09µs  p(95)=57.75µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=3.24s    min=146.16ms med=3.19s   max=6.92s    p(90)=3.35s    p(95)=3.41s   
     http_reqs......................: 64190   91.2938/s
     iteration_duration.............: avg=3.28s    min=169.87ms med=3.22s   max=6.98s    p(90)=3.39s    p(95)=3.48s   
     iterations.....................: 64190   91.2938/s
     vus............................: 23      min=23    max=300
     vus_max........................: 300     min=300   max=300
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/76661d9b-64ba-499d-dbe2-266e216af300/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/49dbd362-6d37-419d-2c31-fa36c181da00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/de053227-984d-4f5c-5e06-58001a4e1400/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh-supergraph`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 172716    ✗ 0    
     data_received..................: 5.1 GB  7.2 MB/s
     data_sent......................: 68 MB   97 kB/s
     http_req_blocked...............: avg=31.19µs  min=1.29µs  med=3.76µs  max=135.93ms p(90)=5.67µs  p(95)=6.51µs 
     http_req_connecting............: avg=14.17µs  min=0s      med=0s      max=18.29ms  p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=3.61s    min=1.7s    med=3.43s   max=8.83s    p(90)=4.78s   p(95)=5.06s  
       { expected_response:true }...: avg=3.61s    min=1.7s    med=3.43s   max=8.83s    p(90)=4.78s   p(95)=5.06s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 57572
     http_req_receiving.............: avg=4.18ms   min=30.96µs med=90.07µs max=483.56ms p(90)=3.22ms  p(95)=13.97ms
     http_req_sending...............: avg=497.17µs min=7.28µs  med=19.32µs max=376.97ms p(90)=34.51µs p(95)=48.78µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s       p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=3.61s    min=1.7s    med=3.43s   max=8.83s    p(90)=4.78s   p(95)=5.05s  
     http_reqs......................: 57572   81.915971/s
     iteration_duration.............: avg=3.65s    min=1.71s   med=3.47s   max=8.98s    p(90)=4.82s   p(95)=5.1s   
     iterations.....................: 57572   81.915971/s
     vus............................: 124     min=124     max=300
     vus_max........................: 300     min=300     max=300
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4c66f242-7592-48c0-bf33-908ce07f7d00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f895d03b-47c8-47f5-7361-1f699343d700/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a44a8f17-5fb1-4a94-332f-dd01f52e0d00/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mesh`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 154860    ✗ 0    
     data_received..................: 4.5 GB  6.4 MB/s
     data_sent......................: 61 MB   87 kB/s
     http_req_blocked...............: avg=39.6µs   min=1.25µs  med=3.62µs  max=253.35ms p(90)=5.46µs  p(95)=6.3µs  
     http_req_connecting............: avg=21.64µs  min=0s      med=0s      max=39.23ms  p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=4.04s    min=2.16s   med=4.01s   max=7.83s    p(90)=4.62s   p(95)=4.83s  
       { expected_response:true }...: avg=4.04s    min=2.16s   med=4.01s   max=7.83s    p(90)=4.62s   p(95)=4.83s  
     http_req_failed................: 0.00%   ✓ 0         ✗ 51620
     http_req_receiving.............: avg=3.42ms   min=33.08µs med=94.8µs  max=719.86ms p(90)=2.66ms  p(95)=12.18ms
     http_req_sending...............: avg=327.13µs min=7.16µs  med=17.93µs max=467.94ms p(90)=33.19µs p(95)=45.27µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s       p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=4.04s    min=2.16s   med=4.01s   max=7.83s    p(90)=4.61s   p(95)=4.82s  
     http_reqs......................: 51620   73.480709/s
     iteration_duration.............: avg=4.07s    min=2.17s   med=4.05s   max=7.85s    p(90)=4.66s   p(95)=4.87s  
     iterations.....................: 51620   73.480709/s
     vus............................: 108     min=108     max=300
     vus_max........................: 300     min=300     max=300
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/fb0013e1-7689-4122-5c3b-fbcf68e23300/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/4032aacd-2a86-4516-0670-d7071fc03700/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/f09e8102-e81f-4ce3-6b8e-ed4fa3462500/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 141231    ✗ 0    
     data_received..................: 4.1 GB  5.9 MB/s
     data_sent......................: 56 MB   80 kB/s
     http_req_blocked...............: avg=19.87µs min=1.31µs  med=3.05µs  max=73.5ms   p(90)=4.93µs   p(95)=5.77µs  
     http_req_connecting............: avg=12.26µs min=0s      med=0s      max=20.46ms  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=4.45s   min=1.41s   med=4.19s   max=9.87s    p(90)=5.83s    p(95)=6.25s   
       { expected_response:true }...: avg=4.45s   min=1.41s   med=4.19s   max=9.87s    p(90)=5.83s    p(95)=6.25s   
     http_req_failed................: 0.00%   ✓ 0         ✗ 47077
     http_req_receiving.............: avg=1.06ms  min=35.94µs med=90.64µs max=342.95ms p(90)=151.39µs p(95)=544.43µs
     http_req_sending...............: avg=141.9µs min=8.08µs  med=15.28µs max=170.01ms p(90)=29.69µs  p(95)=39.87µs 
     http_req_tls_handshaking.......: avg=0s      min=0s      med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=4.45s   min=1.41s   med=4.19s   max=9.87s    p(90)=5.83s    p(95)=6.25s   
     http_reqs......................: 47077   66.967706/s
     iteration_duration.............: avg=4.47s   min=1.43s   med=4.21s   max=9.9s     p(90)=5.85s    p(95)=6.28s   
     iterations.....................: 47077   66.967706/s
     vus............................: 17      min=17      max=300
     vus_max........................: 300     min=300     max=300
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/87b712f0-73db-43fd-5361-2a99cda15a00/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/8991306b-3672-41c6-ad9a-f6c067f0e300/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/6a2639b2-45d9-4e97-27eb-34068881c000/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `apollo-server-node16`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 140745    ✗ 0    
     data_received..................: 4.1 GB  5.9 MB/s
     data_sent......................: 56 MB   79 kB/s
     http_req_blocked...............: avg=72.02µs  min=1.27µs   med=2.83µs  max=49.82ms  p(90)=4.52µs   p(95)=5.41µs  
     http_req_connecting............: avg=64.74µs  min=0s       med=0s      max=37.22ms  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=4.46s    min=746.41ms med=4.23s   max=13.56s   p(90)=5.79s    p(95)=6.26s   
       { expected_response:true }...: avg=4.46s    min=746.41ms med=4.23s   max=13.56s   p(90)=5.79s    p(95)=6.26s   
     http_req_failed................: 0.00%   ✓ 0         ✗ 46915
     http_req_receiving.............: avg=988.73µs min=35.08µs  med=85.49µs max=255.74ms p(90)=154.23µs p(95)=563.21µs
     http_req_sending...............: avg=161.96µs min=7.65µs   med=13.7µs  max=230.36ms p(90)=27.25µs  p(95)=40.93µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=4.46s    min=746.3ms  med=4.23s   max=13.56s   p(90)=5.79s    p(95)=6.26s   
     http_reqs......................: 46915   66.765308/s
     iteration_duration.............: avg=4.48s    min=752.3ms  med=4.25s   max=13.59s   p(90)=5.81s    p(95)=6.28s   
     iterations.....................: 46915   66.765308/s
     vus............................: 113     min=113     max=300
     vus_max........................: 300     min=300     max=300
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/b6c49941-e7e5-4e47-a280-6c52f1ff3300/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/9bbdbe5c-2984-4084-f365-940c32048500/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/7d09e435-1a1b-4d21-0604-0b76eee47500/public" alt="HTTP Overview" />


  </details>

<details>
  <summary>Summary for: `mercurius`</summary>

  **K6 Output**




```
     ✓ response code was 200
     ✓ no graphql errors
     ✓ valid response structure

     checks.........................: 100.00% ✓ 97875     ✗ 0    
     data_received..................: 2.9 GB  4.1 MB/s
     data_sent......................: 39 MB   55 kB/s
     http_req_blocked...............: avg=103.64µs min=1.46µs  med=3.82µs  max=53.78ms  p(90)=5.26µs  p(95)=5.91µs  
     http_req_connecting............: avg=94.37µs  min=0s      med=0s      max=27ms     p(90)=0s      p(95)=0s      
     http_req_duration..............: avg=6.43s    min=2.11s   med=6.3s    max=8.21s    p(90)=6.95s   p(95)=7.02s   
       { expected_response:true }...: avg=6.43s    min=2.11s   med=6.3s    max=8.21s    p(90)=6.95s   p(95)=7.02s   
     http_req_failed................: 0.00%   ✓ 0         ✗ 32625
     http_req_receiving.............: avg=231.18µs min=35.96µs med=98.72µs max=170.48ms p(90)=134.3µs p(95)=152.17µs
     http_req_sending...............: avg=43.84µs  min=8.46µs  med=21.26µs max=43.33ms  p(90)=31.24µs p(95)=35.53µs 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s       p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=6.43s    min=2.11s   med=6.3s    max=8.21s    p(90)=6.95s   p(95)=7.02s   
     http_reqs......................: 32625   46.471953/s
     iteration_duration.............: avg=6.44s    min=2.12s   med=6.31s   max=8.26s    p(90)=6.97s   p(95)=7.03s   
     iterations.....................: 32625   46.471953/s
     vus............................: 21      min=21      max=300
     vus_max........................: 300     min=300     max=300
```


**Performance Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/bd42194b-ca13-4095-2eb5-566bf850e500/public" alt="Performance Overview" />


**Subgraphs Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a5d94cfe-7808-4e55-2dc4-27676160cf00/public" alt="Subgraphs Overview" />


**HTTP Overview**


<img src="https://imagedelivery.net/KYe9TScr4TldYHA48pczVg/a6f709f3-f3d6-4faf-b335-4491c03ec600/public" alt="HTTP Overview" />


  </details>