'use strict';

angular.module('rpgGenerator')
.service('data', function($http) {
  this.getInfo = function(callback) {
    $http.get('mock/data.json')
    .then(callback);
  };

  this.putInfo = function(callback) {
    $http.put('mock/data.json')
    .then(callback);
  };

})
