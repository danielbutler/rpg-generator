'use strict';

var mongoose = require('mongoose');
var RpgSchema = new mongoose.Schema({
	name: String,
	items: []
})

var model = mongoose.model('Rpg', RpgSchema);

module.exports = model;
