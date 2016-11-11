'use strict';

var express = require('express');
var Rpgpcs = require('../models/rpgpcs');

var router = express.Router();

router.get('/rpgpcs', function(req, res) {
  Rpgpcs.find({}, function(err, rpgpcs) {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    res.json({ rpgpcs : rpgpcs });
  });
});

module.exports = router;
