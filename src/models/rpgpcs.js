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


var model = mongoose.model('Rpgpcs', rpgpcsSchema);

module.exports = model;
