var express = require('express');
var router = express.Router();
var watson = require('../config/watson')

conversation = watson.config
conversation.message({}, watson.processResponse);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title : 'Hello World'});
});

module.exports = router;