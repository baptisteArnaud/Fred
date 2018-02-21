var watson = require('watson-developer-cloud');

// Set up Conversation service wrapper.
exports.config = watson.conversation({
  username: '93841e76-6e6a-434f-8704-a64fae3d0d47',
  password: 'DYmtxJZSyNK8',
  version: 'v1',
  path: { workspace_id: '93dc5551-c50a-484a-901d-20eae1db7260' },
  version_date: '2017-02-21'
});