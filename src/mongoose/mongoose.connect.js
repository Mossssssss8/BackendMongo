const mongoose = require("mongoose")
module.exports = mongooseConnection = () => {
    mongoose.connect(`${process.env.MONGODB_URI}`)
        .then(() => {
            console.log("Database connected")
        }).catch((err) => {
            console.log(err)
        })
}