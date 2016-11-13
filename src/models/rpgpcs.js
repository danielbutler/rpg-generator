'use strict';

var mongoose = require('mongoose');
var itemSchema = new mongoose.Schema({
	name: String,
	items: []
});

var rpgpcsSchema = new mongoose.Schema({
	identity: String,
	children: [itemSchema]
});

var newRpgpcsSchema = new mongoose.Schema({
	name: String,
	items: []
})

// var model = mongoose.model('Rpgpcs', rpgpcsSchema);
var model = mongoose.model('Rpgpcs', newRpgpcsSchema);

module.exports = model;
