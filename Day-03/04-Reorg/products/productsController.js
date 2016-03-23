angular
	.module("myApp.products")
	.controller("productsController", function($scope, productService){
		$scope.products = productService.getAll();
	});