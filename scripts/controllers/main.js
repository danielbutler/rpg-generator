'use strict';

angular.module('rpgGenerator')
.controller('mainCTRL', ['$scope', 'data', 'theMessage', function mainCTRL($scope, data, theMessage) {

  data.getInfo(function(response) {
    // response.data is the information from the Mongo database.
    $scope.PcInfoRaw = response.data;
    // We need filter the raw data with the Message Creator
    // This also supplies the initial Message you see when
    // you open the page
    $scope.PcInfo = theMessage.Creator($scope.PcInfoRaw);
  });

  $scope.getPcInfo = function() {
    // because we have a form I want to fill random variables
    // with, I need to differentiate between the form and the
    // regular message printed at the top of the page so
    // I supply the form field as a boolean
    var form = false;
    $scope.PcInfo = theMessage.Creator($scope.PcInfoRaw, form);
  };

  $scope.fillOutForm = function() {
    // form is true so the Message Creator
    var form = true;
    // this takes the raw data and and message creates a form
    // that use random variables to give the user an idea of
    // what stuff to put into fields
    $scope.PcInput = theMessage.Creator($scope.PcInfoRaw, form);
  };

  $scope.save = function(rpgSaves) {
    // we use rpgCheck to get an id for the same data that isn't
    // supplied by data that is supplied as 'rpgSaves'
    var rpgCheck = ($scope.PcInfoRaw);
    // since we have the possibility of many entries to be
    // submitted I created an array to hold them
    var saveFile = [];

    angular.forEach(rpgSaves, function(value, key) {
      // here we are going to go through 'rpgSaves' and verify
      // 1. is this new data?
      // 2-3. is there actual data?
      if(rpgSaves[key].edited === true && value.items !== null && value.items !== "") {
        // we pull the id so we have something to crossreference
        // when we upload to the MongoDB
        var rpg_id = rpgCheck.rpg[key]._id;
        this.push({"_id": rpg_id, "name": value.name, "value": value.items});
      }
    }, saveFile);
    // take the new saveFile and process it through the database
    data.saveRpg(saveFile);
    // the PcInfoRaw data is where you get all the entries
    // and I didn't want user to have to refresh the pages
    // to get those entries as a chance to be used in the
    // generator so we throw pull new data from the database
    // at the end of the submission
    data.getInfo(function(response) {
      $scope.PcInfoRaw = response.data;
    });
  };
}]);
