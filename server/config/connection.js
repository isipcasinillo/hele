// using the mongoose package for the database
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/hele', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
