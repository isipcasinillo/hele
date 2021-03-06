const { Schema, model } = require('mongoose');


const bottleSchema = new Schema({
  bottleText: {
    type: String,
    required: 'You need to leave a bottle ammount!',
    // trim: true,
  },
  bottleAuthor: {
    type: String,
    required: 'You need to be signed in!',
    trim: true,
  },
  bottleTime: {
    type: String,
    required: 'You need to enter time'
  },
  date: {
    type: String,
    required: 'You need a date'
  },
  createdAt: {
    type: Date,
    immutable: true,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  upDatedAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
});

const Bottle = model('Bottle', bottleSchema);

module.exports = Bottle;
