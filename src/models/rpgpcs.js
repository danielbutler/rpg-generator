'use strict';

var mongoose = require('mongoose');

var rpgpcsSchema = new mongoose.Schema({
	name: String,
	completed: Boolean
});

var model = mongoose.model('Rpgpcs', rpgpcsSchema);

module.exports = model;
