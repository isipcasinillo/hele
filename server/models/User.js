const { Schema, model } = require('moongose');


const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
      email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, "Must use a valid email address"],
    },
      password: {
        type: String,
        required: true,
    },
})