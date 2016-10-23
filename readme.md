# requestAnimationFrame polyfill
Fixes missing `requestAnimationFrame` API in legacy browsers.
### So, why another one?
Proof of concept. This one implements callback queueing/dequeuing and simultaneous execution, unlike some often used.
### Why is `raf`/`cancelRaf` globals defined instead of expected ones?
Still in development. Testing.