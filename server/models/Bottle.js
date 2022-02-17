const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const bottleSchema = new Schema({
  bottleText: {
    type: String,
    // required: 'You need to leave a bottle!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  bottleAuthor: {
    type: String,
    // required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
});

const Bottle = model('Bottle', bottleSchema);

module.exports = Bottle;
