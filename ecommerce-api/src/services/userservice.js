const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const createUser = async (userdata) => {
  try {
    let { firstNmae, lastName, email, password } = userdata;
    const isUserExist = await User.findOne({ email });
    if (isUserExist) {
      throw new Error("user already exist with email:", email);
    }
    password = await bcrypt.hash(password, 8);

    const user = await User.create({ firstName, lastName, email, password });
    console.log("created user:", user);
    return user;
  } catch (err) {
    throw new Error(err.message);
  }
};
const findUserById = async (userId) => {
  try {
    const user = await User.findById(userId);
    if (!user) {
      throw new Error("user nor found with id :", userId);
      return user;
    }
  } catch (err) {
    throw new Error(err.message);
  }
};
const findUserByEmail = async (email) => {
  try {
    const user = await User.findOne(email);
    if (!user) {
      throw new Error("user nor found with Email :", email);
      return user;
    }
  } catch (err) {
    throw new Error(err.message);
  }
};
const getUserProfileByToken=async (token)=>{
    try{

    }catch(err){

    }
}
module.exports = { createUser, findUserByEmail, findUserById };
