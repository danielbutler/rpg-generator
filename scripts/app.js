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

function MessageCreator (data, form) {
  var pcKeys = [];
  var message = "";
  var newObject = [];
  // form is used to determine if MessageCreator is building the input form
  // or just the general RPG Message
  if(form === undefined) {
    form = false;
  }
  for (var key in data) {
    pcKeys.push(key);
  }
  for (var i = 0; i < pcMessage.length; i ++) {
    var y = data[pcKeys[i]].length;
    var z = getRandomInt(y);
    if(form) {
      // message += "<label>" + pcMessage[i] + "</label><input value='" + data[pcKeys[i]][z] + "'></input>";
      newObject.push(data[pcKeys[i]][z]);
    } else {
      message += pcMessage[i]+data[pcKeys[i]][z];
    }
  }
  if(!qCheck(message)) {
    message += ".";
  };
  if(form) {
    return newObject;
  } else {
    return message;
  }
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

  $scope.getPcInfo = function() {
    var form = false;
    $scope.PcInfo = MessageCreator($scope.PcInfoRaw, form);
  };

  $scope.fillOutForm = function() {
    var form = true;
    $scope.PcInput = MessageCreator($scope.PcInfoRaw, form);
    console.log($scope.PcInput);
  };

}])

.service('data', function($http) {
  this.getInfo = function(callback) {
    $http.get('mock/data.json')
    .then(callback)
  };

});
