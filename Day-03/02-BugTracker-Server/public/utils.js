
angular
	.module("utils", [])
	.value("defaultTrimLength", 30)
	.filter("trimText", function(defaultTrimLength){
		return function(data, trimLength){ 
			trimLength  = trimLength || defaultTrimLength;
			return data.length < trimLength ? data : data.substr(0,trimLength) + '...';
		};
	})
	.value("momentApi", moment)
	.filter('elapsed', function(momentApi){
		return function(data){
			return momentApi(data).fromNow();
		};
	});
