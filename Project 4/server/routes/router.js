const express = require("express");
const router = express.Router();
const Products = require("../models/productSchema");
const User = require("../models/userSchema");
const bcrypt = require("bcryptjs");
const authenticate =require('../middleware/authenticate')
//get product data api
router.get("/getProducts", async (req, res) => {
  try {
    const productsData = await Products.find();
    // console.log("Data: ",productsData)
    res.status(201).json(productsData);
  } catch (error) {
    console.log("Error !! ", error.message);
  }
});

// get individual data
router.get("/getproductsone/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Products.findOne({ id: id });
    res.status(201).json(data);
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
    console.log(error.message);
  }
});

//register data
router.post("/register", async (req, res) => {
  // console.log(req.body);
  const { fname, email, mobile, password, cpassword } = req.body;

  if (!fname || !email || !mobile || !password || !cpassword) {
    res.status(422).json({ error: "filll the all details" });
    console.log("bhai nathi present badhi details");
  }

  try {
    const preuser = await User.findOne({ email: email });

    if (preuser) {
      res.status(422).json({ error: "This email is already exist" });
    } else if (password !== cpassword) {
      res.status(422).json({ error: "password are not matching" });
    } else {
      const finaluser = new User({
        fname,
        email,
        mobile,
        password,
        cpassword,
      });

      const storedata = await finaluser.save();
      console.log(storedata);
      res.status(201).json(storedata);
    }
  } catch (error) {
    console.log("error!!! " + error.message);
    res.status(422).send(error);
  }
});

// log in user api
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Fill in your data" });
  }

  try {
    const userlogin = await User.findOne({ email: email });

    if (userlogin) {
      const isMatch = await bcrypt.compare(password, userlogin.password);

      if (!isMatch) {
        return res.status(400).json({ error: "Password is incorrect" });
      }

      const token = await userlogin.generateAuthToken();

      if (isMatch) {
        res.cookie("Amazonweb", token, {
          expires: new Date(Date.now() + 900000),
          httpOnly: true,
        });

        res.status(200).json(userlogin);
      }
    } else {
      res.status(400).json({ error: "Invalid details" });
    }
  } catch (error) {
    res.status(400).json({ error: "invalid crediential pass" });
    console.log("Invalid Data");
  }
});


// adding the data to cart
router.post('/addcart/:id',authenticate,async(req,res)=>{
  try {
    const {id}=req.params
    const cart = await Products.findOne({id:id})
    console.log(cart + "cart value")

    const UserContact = await User.findOne({_id:req.userId})
    console.log(UserContact)

    if(UserContact){
      const cartData = await UserContact.addcartdata(cart);
      await UserContact.save();
      console.log(cartData)

      res.status(201).json(UserContact)
    }else{
      res.status(401).json({error:"Invalid User"})
    }
  } catch (error) {
    res.status(401).json({error:"Invalid User"})
  }
})

//get user data
router.get("/cartdetails",authenticate,async(req,res)=>{
  try {
    const buyuser = await User.findOne({_id:req.userId});
    res.status(201).json(buyuser);
  } catch (error) {
    console.log("error " +error);
  }
})

//get valid user 
router.get("/validuser",authenticate,async(req,res)=>{
  try {
    const validuserone = await User.findOne({_id:req.userId});
    res.status(201).json(validuserone);
  } catch (error) {
    console.log("error " +error);
  }
})

//remove item from cart
router.delete("/remove/:id",authenticate,async(req,res)=>{
  try {
    const {id}= req.params
    req.rootUser.carts = req.rootUser.carts.filter((currVal)=> {
      return currVal.id!==id
    })
    req.rootUser.save();
    res.status(201).send(req.rootUser)
    console.log('item removed');
  } catch (error) {
    console.log("Error ",error);
    res.status(400).json(req.rootUser)
  }
})

// for user logout
router.get("/logout",authenticate,(req,res)=>{
  try {
    req.rootUser.tokens = req.rootUser.tokens.filter((currElem)=>{
      return currElem.token!==req.token
    }); 

    res.clearCookie("Amazonweb",{path:"/"});

    req.rootUser.save();
    res.status(201).json(req.rootUser.tokens)
  } catch (error) {
    res.status(400).json({error:"Not log out"})
    console.log("Error not logg out ",error.message);
  }
})
module.exports = router;


