'use strict';

var pcMessage = [
  "The PCs are "," "," "," who, with ",", fight "," for "," "
];

function MessageCreator (data) {
  var pcKeys = [];
  var message = "";
  for (var key in data) {
    pcKeys.push(key);
  }
  for (var i = 0; i < pcMessage.length; i ++) {
    message += pcMessage[i]+data[pcKeys[i]];
  }
  message += ".";
  return message;
};

angular.module('rpgGenerator',[])
.controller('mainCTRL', ['$scope', 'data', function mainCTRL($scope, data) {
  $scope.greeting = 'Hola!';

  data.getInfo(function(response) {
    // console.log(response.data);
    $scope.PcInfoRaw = response.data;
    $scope.PcInfo = MessageCreator($scope.PcInfoRaw);
    // $scope.PcMessage = {{PcInfo.pcsAreAdjective[0]}}
    // $scope.PcMessage += {{PcInfo.pcsAre}}
    // $scope.PcMessage += $scope.PcMessage += $scope.PcMessage += $scope.PcMessage += $scope.PcMessage += {{PcInfo.pcsLocation}}
    // $scope.PcMessage += $scope.PcMessage += $scope.PcMessage += $scope.PcMessage += {{PcInfo.pcsWhoWith}}
    // $scope.PcMessage += $scope.PcMessage += $scope.PcMessage += {{PcInfo.pcsFight}}
    // $scope.PcMessage += $scope.PcMessage += {{PcInfo.pcsFor}}
    // $scope.PcMessage += {{PcInfo.pcsWhy}}
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
