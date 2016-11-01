angular.module("rpgGenerator", [])
.controller('mainCtrl', function($scope, dataService) {
	$scope.helloWorld = function() {
		console.log("Hello there! This is the helloWorld controller function, in the mainCtrl!");
	};
	$scope.changeInput = function() {
		console.log("changeInput working!");
	};
	dataService.getRpgList(function(response) {
		console.log(response.data);
		$scope.rpgList = response.data;
	});
})
.service('dataService', function($http) {
	this.getRpgList = function(callback) {
		$http.get('mock/data.json')
		.then(callback)
	}
});
