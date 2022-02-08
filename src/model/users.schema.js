const mongoose = require('mongoose')
const user = new mongoose.Schema({
    username: {
        required: true,
        type: String,
    },
    password: {
        required: true,
        type: String,
    },
    gender: {
        // required: true,
        type: String,
    },
    age: {
        // require: true,
        type: Number,
    },
    email: {
        require: true,
        type: String,
    },
    Weight: {
        // require: true,
        type: String
    },
    Height: {
        // require: true,
        type: String
    },

}, { timestamps: true })

module.exports = mongoose.model('Users', user)