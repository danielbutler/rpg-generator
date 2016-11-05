'use strict';

var pcMessage = [
  "The PCs are "," "," "," who, with ",", fight "," for "," "
];

function getRandomInt(max) {
  return Math.floor((Math.random() * max));
};

function qCheck (foo) {
  var lastChar = foo.substr(foo.length - 1);
  if (lastChar === "?") {
    return true;
  }
};

function MessageCreator (data) {
  var pcKeys = [];
  var message = "";
  for (var key in data) {
    pcKeys.push(key);
  }
  for (var i = 0; i < pcMessage.length; i ++) {
    var y = data[pcKeys[i]].length;
    var z = getRandomInt(y);
    message += pcMessage[i]+data[pcKeys[i]][z];;
  }
  if(!qCheck(message)) {
    message += ".";
  };
  return message;
};

angular.module('rpgGenerator',[])
.controller('mainCTRL', ['$scope', 'data', function mainCTRL($scope, data) {
  $scope.greeting = 'Hola!';

  data.getInfo(function(response) {
    $scope.PcInfoRaw = response.data;
    $scope.PcInfo = MessageCreator($scope.PcInfoRaw);
  });

  $scope.numberGenerator = function() {
    console.log(getRandomInt(0, 7));
  };

  $scope.fillOutForm = function() {
    console.log('what up g');
  };

  $scope.getPcInfo = function() {
    $scope.PcInfo = MessageCreator($scope.PcInfoRaw);
  };

}])

.service('data', function($http) {
  this.getInfo = function(callback) {
    $http.get('mock/data.json')
    .then(callback)
  };
});
