const express = require('express')
const cors = require('cors')

const app = express()
require('dotenv').config()
const mongooseConnection = require("./src/mongoose/mongoose.connect")
const UserRoute = require("./src/route/user.route")
const ScoreRoute = require("./src/route/score.route")
app.use(cors())
mongooseConnection()

app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.use("/user", UserRoute)
app.use("/score", ScoreRoute)

app.listen(process.env.PORT, () => {
    console.log("server is running on port", process.env.PORT)
});