'use strict';

var Rpg = require('./models/rpg');

var rpg = {
	"pcsAreAdjective": {
		"name": "How Are They",
		"items": [
		"misunderstood",
		"mechanical",
		"grim and gritty",
		"enchanted",
		"surly",
		"profaned",
		"tubular",
		"monstrous"
	]},
	"pcsAre": {
		"name": "Who Are They",
		"items": [
		"perfect silver spheres",
		"robots",
		"astronauts",
		"carpenters",
		"centurions",
		"republicans",
		"salesmen",
		"board game enthusiasts",
		"cars",
		"elephants"
	]},
	"pcsLocation": {
		"name": "Where are They",
		"items": [
		"travelling faster than light",
		"in Dr. Frankenstein's laboratory",
		"in a beseiged castle",
		"trapped in a walk-in freezer",
		"backpacking in Europe",
		"inside the dark heart of man",
		"in a closed down Wal-Mart",
		"around the back of the parking lot"
	]},
	"pcsWhoWith": {
		"name": "What are they fighting with",
		"items": [
		"high-pitched voices",
		"throwing stars",
		"their winning smiles",
		"swords",
		"an embarassing lack of self-awareness",
		"water tubes",
		"coffee cans",
		"smarts you were just born with",
		"a bunch of hot air",
		"transforming cars"
	]},
	"pcsFight": {
		"name": "What are they fighting",
		"items": [
		"people who are just plain mean",
		"organized crime",
		"judicial activism",
		"barbarian invaders",
		"a twitter egg",
		"existential dread given form",
		"plain old orcs",
		"gentrification"
	]},
	"pcsFor": {
		"name": "What are they fighting for",
		"items": [
		"pieces of eight",
		"a college degree",
		"an encore",
		"the One Ring",
		"career advancement",
		"hot dates",
		"whatever they can find",
		"a toy car",
		"blessings upon blessings",
		"aspirin",
		"a delicious can of corned beef"
	]},
	"pcsWhy": {
		"name": "Why are they fighting",
		"items": [
    "when the world needs them most",
    "in a time of legends",
		"because it's the right thing to do",
		"...but what's that behind them?",
		"...well, it seemed like a good idea at the time",
    "because why not",
    "around about midnight",
    "for the good of the land",
    "all because mom said so",
    "because if they didn't who would?"
	]}
};

Object.keys(rpg).forEach(function(rpg_item, index) {
	var Rname = rpg[rpg_item].name;
	var Ritems = rpg[rpg_item].items;
	Rpg.find({ 'name': Rname }, function(err, rpg) {
		if (!err && !rpg.length) {
			Rpg.create({'name': Rname, 'items': Ritems});
		} else {
			return err;
		}
	});
});
