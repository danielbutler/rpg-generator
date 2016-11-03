'use strict';

angular.module('rpgGenerator',[])
.controller('mainCTRL', ['$scope', 'data', function mainCTRL($scope, data) {
  $scope.greeting = 'Hola!';

  data.getInfo(function(response) {
    console.log(response.data);
    $scope.PcInfo = response.data;
  });

}])

.service('data', function($http) {
  this.getInfo = function(callback) {
    $http.get('mock/data.json')
    .then(callback)
  };
});

// .factory('getTodos', ['$http', function($http) {
//   return function(callback) {
//     $http.get('/mock/todos.json')
//     .then(callback);
//   };
// }]);
