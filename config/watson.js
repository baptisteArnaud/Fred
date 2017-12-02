var watson = require('watson-developer-cloud');

// Set up Conversation service wrapper.
exports.config = watson.conversation({
  username: '1a63234a-64ec-4b4e-ab15-b8a23429c589',
  password: 'nEQ6ufmEBij3',
  version: 'v1',
  path: { workspace_id: '67182dd4-dfb3-4049-900a-f70e32af9918' },
  version_date: '2017-12-02'
});

// Process the conversation response.
exports.processResponse = function(err, response) {
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
      console.log(response.output.text[0]);
  }
}