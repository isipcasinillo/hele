const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const bottleSchema = new Schema({
  bottleText: {
    type: String,
    // required: 'You need to leave a bottle!',
    // trim: true,
  },
  bottleAuthor: {
    type: String,
    // required: true,
    trim: true,
  },
  bottleTime: {
    type: String,
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
