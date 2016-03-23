angular
	.module("myApp", ["ngRoute", "myApp.products", "myApp.customers"])
	.config(function($routeProvider){
		$routeProvider
			.otherwise({
				redirectTo : "/products"
			});
	});		