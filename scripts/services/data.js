'use strict';

angular.module('rpgGenerator')
.service('data', function($http, $q) {
  this.getInfo = function(callback) {
    // $http.get('mock/data.json')
    $http.get('/api/rpg')
    .then(callback);
  };

  this.saveRpg = function(rpg, err) {
    // queue is used to hold up all the database requests
    var queue = [];
    // rpg is the 'saveFile' array from the 'mainCTRL'
    // so we have to cycle through each 'rpg_item' to process
    rpg.forEach(function(rpg_item){
      // request will be the http request
      var request;
      // just making sure that the rpg_items have an actual
      // id and not some weird bug
      if(!rpg_item._id) {
        console.log("no id? no ticket!");
      } else {
        // create the http request
        request = $http.put('/api/rpg/' + rpg_item._id, {'items': rpg_item.value, '_id': rpg_item._id}).then(function(result) {
          rpg_item = result.data.rpg;
          return rpg_item;
        });
      }
      // requests will now be put into the queue
      queue.push(request);
    });
    // all requests submitted? Ok, queue will now actually
    // process through to the database.
    $q.all(queue).then(function(results) {
      console.log("I saved " + rpg.length + " rpg!");
    });
  };
});
