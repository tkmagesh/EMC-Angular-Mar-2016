angular
	.module("myApp.products")
	.controller('productInfoController', function($scope, productService, $routeParams){
			$scope.product = productService.getById(parseInt($routeParams.id,10));
		});