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
  var pcKeys = [];
  var message = "";
  var newObject = [];
  // form is used to determine if MessageCreator is building the input form
  // or just the general RPG Message
  if(form === undefined) {
    form = false;
  }
  for (var key in data) {
    pcKeys.push(key);
  }
  for (var i = 0; i < pcMessage.length; i ++) {
    var y = data[pcKeys[i]].items.length;
    var z = getRandomInt(y);
    if(form) {
      var currentName =  data[pcKeys[i]].name;
      var currentItems = data[pcKeys[i]].items[z];
      newObject.push({name: currentName, items: currentItems})
    } else {
      message += pcMessage[i]+data[pcKeys[i]].items[z];
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
