const mongoose = require('mongoose');

const { Schema } = mongoose;

const foodSchema = new Schema({
    created_at: {
        type: Date,
        default: Date.now,
    },
    ounce: {
        type: String,
    },
});

const Food = mongoose.model('Food', foodSchema);

module.exports = Food;


