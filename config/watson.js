var watson = require('watson-developer-cloud');

// Set up Conversation service wrapper.
exports.config = watson.conversation({
  username: '1a63234a-64ec-4b4e-ab15-b8a23429c589',
  password: 'nEQ6ufmEBij3',
  version: 'v1',
  path: { workspace_id: '67182dd4-dfb3-4049-900a-f70e32af9918' },
  version_date: '2017-12-02'
});