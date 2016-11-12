'use strict';

var mongoose = require('mongoose');

var rpgpcsSchema = new mongoose.Schema({
	identity: {
		name: String,
		items: []
	}
});

var model = mongoose.model('Rpgpcs', rpgpcsSchema);

module.exports = model;
