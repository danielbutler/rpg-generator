'use strict';

var Rpgpcs = require('./models/rpgpcs');

var rpgpcs = [
	'Feed the dog',
	'Walk the kids',
	'Water the trees'
];

rpgpcs.forEach(function (rpgpc, index) {
  console.log("Is this even working?");
  Rpgpcs.find({ 'name': rpgpc }, function(err, rpgpcs) {
  	if (!err && !rpgpcs.length) {
      console.log(rpgpcs);
      // Todo.create({ completed: false, name: todo });
  	} else {
      console.log(err);
    }
  });
});
