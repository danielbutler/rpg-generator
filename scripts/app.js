var myApp = angular.module('myApp',[]);

myApp.controller('GreetingController', ['$scope', function GreetingController($scope) {
  $scope.greeting = 'Hola!';
}]);
