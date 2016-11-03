'use strict';

angular.module("rpgGenerator", [])
.controller('mainCtrl', function($scope, $http) {
  dataService.getRPGList(function(response) {
    console.log(response.data);
    $scope.todos = response.data;
  });
});

.service('dataService', function($http) {
  this.helloConsole = function() {
    console.log('This is the helloConsole service!');
  };

  this.getRPGList = function(callback) {
    $http.get('./mock/data.json')
    .then(function (response) {
        $scope.myWelcome = response.data;
    });
});
