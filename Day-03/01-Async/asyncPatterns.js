var program = (function(){
	
	function addSync(x,y){
		console.log("[Provider] - processing ", x, " and ", y);
		var result = x + y;
		console.log("[Provider] - returning result");
		return result;
	}

	function addSyncClient(x,y){
		console.log("[Consumer] - triggering addSync");
		var result = addSync(x,y);
		console.log("[Consumer] - result = ", result);
	}

	function addAsyncCallback(x,y, onResult){
		console.log("[Provider] - processing ", x, " and ", y);
		setTimeout(function(){
			var result = x + y;
			console.log("[Provider] - returning result");
			if (typeof onResult === 'function')
				onResult(result);
		},3000);
	}

	function addAsyncCallbackClient(x,y){
		console.log("[Consumer] - triggering addAsyncCallback");
		addAsyncCallback(x,y, function(result){
			console.log("[Consumer] - result = ", result);
		});
	}	

	function addAsyncPromise(x,y){
		console.log("[Provider] - processing ", x, " and ", y);
		var promise = new Promise(function(resolveFn, rejectFn){
			setTimeout(function(){
				var result = x + y;
				console.log("[Provider] - returning result");
				resolveFn(result);
			},3000);
		});
		return promise;
	}

	function addAsyncPromiseClient(x,y){
		console.log("[Consumer] - triggering addAsyncPromise");
		var promise = addAsyncPromise(100,200);
		promise.then(function(result){
  			console.log("[Consumer] - result= ", result);
		})
	}

	return {
		addSyncClient : addSyncClient,
		addAsyncCallbackClient : addAsyncCallbackClient,
		addAsyncPromiseClient : addAsyncPromiseClient
	};
})();