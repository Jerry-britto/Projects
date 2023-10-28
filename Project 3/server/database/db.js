require("dotenv").config()
const mongoose = require('mongoose')

const connectToDb = async()=>{
    mongoose.connect(process.env.MONGO_URI)
}

module.exports = connectToDb;

