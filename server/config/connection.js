// using the mongoose package for the database
const mongoose = require('mongoose');

// connects to the mongoDB Atlas using the URI link
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/hele', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
