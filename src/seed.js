'use strict';

var Rpgpcs = require('./models/rpgpcs');

var rpgpcs = {
	"pcsAreAdjective": {
		"name": "How Are They?",
		"items": [
		"misunderstood",
		"mechanical"
	]},
	"pcsAre": {
		"name": "Who Are They?",
		"items": [
		"perfect silver spheres",
		"robots",
		"astronauts"
	]},
	"pcsLocation": {
		"name": "Where are They?",
		"items": [
		"travelling faster than light",
		"in Dr. Frankenstein's laboratory"
	]},
	"pcsWhoWith": {
		"name": "What are they fighting with?",
		"items": [
		"high-pitched voices",
		"throwing stars"
	]},
	"pcsFor": {
		"name": "What are they fighting for?",
		"items": [
		"pieces of eight",
		"a college degree"
	]},
	"pcsWhy": {
		"name": "Why are they fighting?",
		"items": [
    "when the world needs them most",
    "in a time of legends"
	]}
};

for (var key in rpgpcs) {
  console.log(key);
  Rpgpcs.find({'identity': key}, function(err, rpgpcs) {
    if(!err && !rpgpcs.length) {
      console.log({ identity: key });
    } else {
      console.log("error: " + err);
    }
  });
};
// rpgpcs.forEach(function (rpgpc, index) {
//   Rpgpcs.find({ 'name': rpgpc }, function(err, rpgpcs) {
//   	if (!err && !rpgpcs.length) {
//       console.log(rpgpc);
//       // Todo.create({ name: todo });
//   	} else {
//       console.log(err);
//     }
//   });
// });
