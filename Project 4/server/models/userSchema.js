const mongoose = require('mongoose')
const validator = require('validator')
const bcyrpt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const secretKey = process.env.KEY;
const userSchema = new mongoose.Schema({
    fname:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error ("Not valid Email Address")
            }
        }
    },
    mobile:{
        type:String,
        required:true,
        unique:true,
        maxLength:10,
        minLength:8
    },
    password:{
        type:String,
        required:true,
        minLength:6
    },
    cpassword:{
        type:String,
        required:true,
        minLength:6
    },
    tokens:[
        {
            token:{
                type:String,
                required:true
            }
        },
    ],
    carts: Array
});

//hash user password
userSchema.pre("save",async function(next){
    if(this.isModified("password")){
        this.password = await bcyrpt.hash(this.password,12)
        this.cpassword = await bcyrpt.hash(this.cpassword,12)
    }
    next()
})

//generate token for user 
//token generated for the user after password validation will be done by instance methods of mongoose

userSchema.methods.generateAuthToken = async function(){
    try {
        //generated token based on a data set in the payload as first parameter and a secret key
        let token = jwt.sign({_id:this._id},secretKey); 
        this.tokens = this.tokens.concat( {token:token} )
        await this.save();
        return token;
    } catch (error) {
        console.log(error);
    }
}

// add to cart data
userSchema.methods.addcartdata = async function(cart){
    try {
        this.carts = this.carts.concat(cart)
        await this.save()
        return this.carts
    } catch (error) {
        console.log(error)
    }
}
const User = new mongoose.model("User",userSchema)


module.exports = User

