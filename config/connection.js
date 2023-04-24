const { connect, connection } = require('mongoose');

//setting up a connection for heroku otherwise execute locally
const connectionString =
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/networkingDB';

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
