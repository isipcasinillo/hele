// using the mongoose package for the database
const mongoose = require('mongoose');
const dotenv =  require('dotenv');
dotenv.config();
// connects to the mongoDB Atlas using the URI link
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/hele', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });


// #1 Problem with connecting to Mongo Atlas if using || it goes straight to localhost db
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/hele' , {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
