'use strict';

var pcMessage = [
  "The PCs are "," "," "," who, with ",", fight "," for "," "
];

function getRandomInt(max) {
  return Math.floor((Math.random() * max));
}

function qCheck (foo) {
  var lastChar = foo.substr(foo.length - 1);
  if (lastChar === "?") {
    return true;
  }
}

function MessageCreator (data, form) {
  var message = "";
  var newObject = [];
  // form is used to determine if MessageCreator is building the input form
  // or just the general RPG Message
  if(form === undefined) {
    form = false;
  }
  for (var i = 0; i < pcMessage.length; i ++) {
    var rpgData = data['rpg'][i];
    var y = rpgData.items.length;
    var z = getRandomInt(y);
    if(form) {
      var currentName = rpgData.name;
      var currentItems = rpgData.items[z];
      newObject.push({name: currentName, items: currentItems});
    } else {
      message += pcMessage[i]+rpgData.items[z];
    }
  }
  if(!qCheck(message)) {
    message += ".";
  }
  if(form) {
    return newObject;
  } else {
    return message;
  }
}

angular.module('rpgGenerator', []);
