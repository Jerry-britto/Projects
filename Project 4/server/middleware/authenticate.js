const jwt = require('jsonwebtoken')
const User = require('../models/userSchema')
const secretKey = process.env.KEY;

const authenticate = async(req,res,next)=>{
    try {
        const token = req.cookies.Amazonweb;
        //comparing the secret key of that user and the cookie and verify them to get the user id.
        const verifyToken = jwt.verify(token,secretKey)
        console.log(verifyToken); //id of the user

        const rootUser = await User.findOne({_id:verifyToken._id,"tokens.token":token})

        console.log(rootUser)

        if(!rootUser){
            throw new Error ("User not found");
        }

        //setting request values for any route if it invokes this middleware
        req.token = token;
        req.rootUser = rootUser;
        req.userId = rootUser._id;

        next()

    } catch (error) {
        res.status(401).send("unautherized:No token provide")
        console.log(error)
    }
}

module.exports = authenticate
