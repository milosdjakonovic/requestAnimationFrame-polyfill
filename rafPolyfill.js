/**
 * -----------------------------------------------------------|
 * -------------- requestAnimationFrame polyfill--------------|
 * -----------------------------------------------------------|
 * @description does what requestAnimationFrame polyfill should do
 * @author      Milos Djakonovic ( @Miloshio )
 * @license     MIT
 * --------------------------------------
**/

(function(w){

	
	/**
	 * 
	 * How many times should polyfill call
	 * update callback? By canon, it should
	 * be 60 times per second, so that ideal
	 * framerate 60fps could be reached.
	 *
	 * However, even native implementations
	 * of requestAnimationFrame often cannot
	 * do 60fps, but, unlike any polyfill,
	 * they can synchronise achievable fps
	 * rate with screen refresh rate.
	 *
	 * So, leave this value 1000/60 unless
	 * you target specific browser on spec
	 * ific device that is going to work 
	 * better with custom value. I think
	 * that this is the longest comment I've
	 * written on single variable so far.
	**/	
	var FRAME_RATE_INTERVAL = 1000/60,

	/**
	 *
	 * All queued callbacks.
	**/	
	allCallbacks = [],
	
	/**
	 *
	 * Crutches for `performance.now`.
	**/
	now = function(){
		if ("performance" in w && w.performance.now)
			return w.performance.now();
		else if(w.Date.now){
			return w.Date.now();
		} else new Date().getTime();
	},
	
	/**
	 * Executes all (surprise) callbacks in
	 * and removes them from callback queue
	 * subsequently.
	 *
	**/	
	executeAll = function(){
		var _allCallbacks = allCallbacks;
		for(var i=0;i<_allCallbacks.length;i++){
			_allCallbacks[i].apply(w, [ now() ] );
			_allCallbacks.splice(i, 1);
		}
	}
	
	/**
	 *
	 * Global exposure. In this phase I
	 * purposely don't want to polyfill
	 * requestAnimationFrame, because of
	 * testing. One can manually polyfill
	 * requestAnimationFrame easily.
	 *
	 * Just like native takes callback as 
	 * arg and queues it for later execution.
	 * 
	**/	
	w.raf =	function(callback){
		allCallbacks.push(callback);
		w.setTimeout(executeAll, FRAME_RATE_INTERVAL);	
		return callback;
	};

	/**
	 *
	 * Cancels raf.
	**/	
	w.cancelRaf = function(callback){

		var _allCallbacks = allCallbacks;
		for(var i=0;i<_allCallbacks.length;i++){
			if( _allCallbacks[i]=== callback )
			_allCallbacks.splice(i, 1);
		}

	};

})(window);