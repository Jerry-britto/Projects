const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required : true,
        minLength:[3,"Min length should be 3"],
        maxLength:[30,"Max length is 30"],
        uppercase:true,
        trim:true
    },
    password:{
        type:String,
        minLength:[5,"Length of your password should be more than 5"],
        maxLength:[10,"Length of your password should not be more than 10"],
        required:true
    },
    id:{
        type:Number,
        required: true,
        unique:[true,"Id should be unique"],
    }
},{timestamps:true})

module.exports = mongoose.model("User",userSchema)