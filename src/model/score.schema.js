const mongoose = require('mongoose')
const score = new mongoose.Schema({
    UserId: {
        required: true,
        type: String,
    },
    NameEx: {
        type: String,
    },
    Score:{
        type: Number,
    },
    DateTime: {
        type: Date,
    },
    Status:{
        type: Boolean
    }

}, { timestamps: true })

module.exports = mongoose.model('Scores', score)