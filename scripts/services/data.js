'use strict';

angular.module('rpgGenerator')
.service('data', function($http, $q) {
  this.getInfo = function(callback) {
    // $http.get('mock/data.json')
    $http.get('/api/rpg')
    .then(callback);
  };

  this.saveRpg = function(rpg, err) {
    var queue = [];
    rpg.forEach(function(rpg_item){
      var request;
      if(!rpg_item._id) {
        console.log("no id? no ticket!");
      } else {
        request = $http.put('/api/rpg/' + rpg_item._id, {'items': rpg_item.value, '_id': rpg_item._id}).then(function(result) {
          rpg_item = result.data.rpg;
          return rpg_item;
        });
      }
      queue.push(request);
    });
    $q.all(queue).then(function(results) {
      console.log("I saved " + rpg.length + " rpg!");
    });
  };
});
