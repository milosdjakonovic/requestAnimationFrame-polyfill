# requestAnimationFrame polyfill
Polyfills missing `requestAnimationFrame` API in legacy browsers.
### So, why another one?
- This one is, as far as I know, the only one that implements callback queueing/dequeuing and simultaneous execution.

- Other requestAnimationFrame polyfills, again AFAIK, are doing job by calculating dynamic next frame time for each callback and scheduling ( via `setTimeout` ) each callback separately.

This requestAnimationFrame polyfill queues callback for **single scheduled next-frame execution**. 

---------------------------------------

### What are performance benefits from this approach?
Still examining. Looks good in my test so far.