angular.module('rpgGenerator')
.directive('rpg', function() {
  return {
    templateUrl: 'templates/rpg.html',
    controller: 'mainCTRL',
    replace: true // replaces <todo> tags
  }
})
