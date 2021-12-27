// using the mongoose package for the database
const mongoose = require('mongooes');


// connects to the mongoDB Atlas using the URI link
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/hele', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
});

module.exports = mongoose.connection;