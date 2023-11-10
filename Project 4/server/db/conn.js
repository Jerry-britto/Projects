const mongoose = require('mongoose')

const db = process.env.MONGO_URI

mongoose.connect(db).then(()=>{
    console.log("db connected")
})
.catch(error=> console.log("Error ",error.message))