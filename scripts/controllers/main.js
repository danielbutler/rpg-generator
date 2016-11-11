'use strict';

angular.module('rpgGenerator')
.controller('mainCTRL', ['$scope', 'data', function mainCTRL($scope, data) {

  data.getInfo(function(response) {
    $scope.PcInfoRaw = response.data;
    $scope.PcInfo = MessageCreator($scope.PcInfoRaw);
  });

  $scope.getPcInfo = function() {
    var form = false;
    $scope.PcInfo = MessageCreator($scope.PcInfoRaw, form);
  };

  $scope.fillOutForm = function() {
    var form = true;
    $scope.PcInput = MessageCreator($scope.PcInfoRaw, form);
  };

  $scope.save = function(data) {
    /*$http.post('path/to/server/file/to/save/json', $scope.languages).then(function(data) {
      $scope.msg = 'Data saved';
    });*/

    var saveFile = [];
    angular.forEach(data, function(value, key) {
      if(data[key].edited === true && value.items !== null && value.items !== "") {
        console.log(data[key].edited);
        this.push({"key": key, "value": value.items});
      }
    }, saveFile);
    console.log(saveFile);
    };

}]);
