const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwtProvider=require("../config/jwtpovider.js")
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
    const user = await User.findById(userId).populate("address");
    if (!user) {
      throw new Error("user nor found with id :", userId);
      return user;
    } 
  } catch (err) {
    throw new Error(err.message);
  }
};
const getUserByEmail = async (email) => {
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

      const userId=jwtProvider.getUserIdFromToken(token)
      const user=await findUserById(userId)
      if(!user){
        throw new Error("user nor found with id :", userId);
        return user;
      }
    }catch(err){
  throw new Error(err.message)
    }
}

const getAllUsers=async()=>{
try{
const users=await User.find()
return users
}catch(err){
  throw new Error(err.message)
}
}
module.exports = { createUser, getUserByEmail, findUserById,getUserProfileByToken,getAllUsers };
