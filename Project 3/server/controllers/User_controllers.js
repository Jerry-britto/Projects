const User = require("../models/Models");
const Joi = require("joi");
exports.createUsers = async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error) {
      res.status(400).send(error.details[0].message);
      return;
    }
    const name = req.body.name;
    const password = req.body.password;
    const id = req.body.id;
    const userExists = await User.findOne({ id });
    if (userExists) {
      throw new Error(`User with the id ${id} already exists`);
    }
    const profile = new User({
      name: name,
      password: password,
      id: id,
    });
    const result = await profile.save();
    console.log(result);
    res.status(200).json({
      success: true,
      message: "User created succesfully",
    });
  } catch (error) {
    // console.log(error);
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

function validate(profile) {
  const schema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    password: Joi.string().required().min(5).max(10),
    id: Joi.number().required(),
  });
  return schema.validate(profile);
}

exports.showData = async (req, res) => {
  const data = await User.find().sort({id:1});
  res.status(200).send(data);
};

exports.deleteProfile = async (req, res) => {
  const id = req.params.id;
  const result = await User.deleteOne({ id: id });
  res.status(200).send(result);
};

exports.showProfile = async (req, res) => {
  const id = req.params.id;
  const data = await User.findOne({ id: id });
  if (!data) {
    res.status(400).send("User doesn't exist");
    return;
  }
  res.status(200).send(data);
};
exports.updateInfo = async (req, res) => {
  try {
    const { id } = req.params;
    const profile = await User.findOne({ id: id });
    if (!profile) {
      throw new Error("User does not exist");
    }
    const data = await User.findOneAndUpdate({id:id},{
      name:req.body.name,
      password:req.body.password
    })
    res.status(200).json({
      success: true,
      message: "Profile updated successfully",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
function checkForUpdate(profile) {
  const schema = Joi.object({
    name: Joi.string().min(3).max(30),
    password: Joi.string().min(5).max(10),
  });
  return schema.validate(profile);
}
