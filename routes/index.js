var express = require('express');
var router = express.Router();
var watson = require('../config/watson')

conversation = watson.config

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title : 'Hello World'});
});

router.post('/', function(req, res, next){
	input = req.body.message;
	conversation.message({
      input: { text: input },
      context : res.context,
    }, function(err, response) {
		  if (err) {
		    console.error(err); // something went wrong
		    return;
		  }
		  // If an intent was detected, log it out to the console.
		  if (response.intents.length > 0) {
		    console.log('Detected intent: #' + response.intents[0].intent);
		  }

		  // Display the output from dialog, if any.
		  if (response.output.text.length != 0) {
		    var jsonMessage = {};
		    jsonMessage.message = response.output.text[0];
		    console.log(response.output.text[0]);
		    res.send(jsonMessage);
		  }
	});
});

module.exports = router;