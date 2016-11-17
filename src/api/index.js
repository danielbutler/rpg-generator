'use strict';

var express = require('express');
var Rpg = require('../models/rpg');

var router = express.Router();

router.get('/rpg', function(req, res) {
  Rpg.find({}, function(err, rpg) {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    res.json({ rpg : rpg });
  });
});

router.put('/rpg/:id', function(req, res) {
  var id = req.params.id;
  var rpg_item = req.body;
  if(rpg_item && rpg_item._id !== id) {
    return res.status(500).json({err: "Ids don't match: " + id});
  }
  Rpg.findByIdAndUpdate(id,
    {$push: {items: rpg_item.items}},
    {safe: true, upsert: true},
    function(err, rpg_item) {
    if (err) {
      return res.status(500).json({ err: err.message });
    }
    res.json({ 'rpg': rpg_item, message: 'RPG Updated' });
  });

});

  // Rpgpcs.findByIdAndUpdate(id, rpgpc, {new: true}, function(err, rpgpc) {
  //   if(err) {
  //     return res.status(500).json({err: err.message});
  //   }
  //   res.json({'rpgpc': rpgpc, messsage: 'RPGPC entry added'});
  // });
// });

module.exports = router;
