angular.module('rpgGenerator')
.service('theMessage', function(data) {

  // this app is random by nature so I need your
  // basic random number generator
  function getRandomInt(max) {
    return Math.floor((Math.random() * max));
  }

  // this actually checks inside the 'Creator'
  // to see if the last item will contain a
  // question mark.
  function qCheck (foo) {
    var lastChar = foo.substr(foo.length - 1);
    if (lastChar === "?") {
      return true;
    }
  }

  this.Creator = function (data, form) {
    // This is the basic array for the sentence generated
    // at the top of the page
    var pcMessage = [
      "The PCs are "," "," "," who, with ",", fight "," for "," "
    ];
    var message = "";
    // newObject is used to hold the array for the  submit form
    var newObject = [];
    // form is used to determine if MessageCreator is
    // building the input form or just the general RPG Message
    if(form === undefined) {
      form = false;
    }
    // let's cycle through the array that were passed
    // as 'data'
    for (var i = 0; i < pcMessage.length; i ++) {
      // 'rpg' is the actual database name that response
      // data got.
      var rpgData = data['rpg'][i];
      // because each array isn't the same length
      // because all the arrays might have more than
      // one submission (from the form!) I need to
      // cycle through them correctly
      var y = rpgData.items.length;
      // I need a random number so I can get an
      // entry in the database randomly!
      var z = getRandomInt(y);
      // now we use the form boolean to see if
      // user clicked on the form field to get
      // random entries
      if(form) {
        // these will be pulled into the form field on the html
        // as value.name and value.items
        var currentName = rpgData.name;
        var currentItems = rpgData.items[z];
        // pushed into the newObject array to be filled out
        // in the angular's repeat
        newObject.push({name: currentName, items: currentItems});
      } else {
        // otherwise here is the message at the top of the page!
        message += pcMessage[i]+rpgData.items[z];
      }
    }
    // as mentioned above ^^ this will check if message is
    // a question or statement.  The very last variable
    // allows you to put a question but user will usually not
    // put in a period.. It's a true/false"
    if(!qCheck(message)) {
      message += ".";
    }
    // finally, we know to return either the newObject or
    // the simple message!
    if(form) {
      return newObject;
    } else {
      return message;
    }
  }
});
