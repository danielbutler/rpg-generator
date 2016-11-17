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

  $scope.save = function(rpgSaves) {
    var rpgCheck = ($scope.PcInfoRaw);
    var saveFile = [];
    angular.forEach(rpgSaves, function(value, key) {
      if(rpgSaves[key].edited === true && value.items !== null && value.items !== "") {
        var rpg_id = rpgCheck.rpg[key]._id;
        this.push({"_id": rpg_id, "name": value.name, "value": value.items});
      }
    }, saveFile);
    data.saveRpg(saveFile);
    data.getInfo(function(response) {
      $scope.PcInfoRaw = response.data;
    });
  };
}]);
