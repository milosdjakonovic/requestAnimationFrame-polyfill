# requestAnimationFrame polyfill
Polyfills missing `requestAnimationFrame`/`cancelAnimationFrame` API in legacy browsers.
### So, why another one?
This is, as far as I know, the only one that implements callback queueing/dequeuing and simultaneous execution.

Other `requestAnimationFrame` polyfills, again AFAIK, are operating by doing it's best to calculate dynamic next frame time for each callback and thus scheduling each callback execution separately.

This requestAnimationFrame polyfill queues callback for **single next-frame execution**. 

---------------------------------------

### Are there performance benefits from this approach?
Theoretically **it should be**. Single call to queued functions is expected to perform better than multiple `setTimeout` functions trying to target the same moment.


---------------------------------------

### Usage
Drop minified version (`836`bytes) somewhere in the code before first use of `requestAnimationFrame`.