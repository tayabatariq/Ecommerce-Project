const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwtProvider = require("../config/jwtpovider.js");

// Create new user
const createUser = async (userdata) => {
  try {
    let { firstName, lastName, email, password } = userdata;

    const isUserExist = await User.findOne({ email });
    if (isUserExist) {
      throw new Error("User already exists with this email");
    }

    password = await bcrypt.hash(password, 8);
    const user = await User.create({ firstName, lastName, email, password });
    console.log("Created user:", user);
    return user;
  } catch (err) {
    throw new Error(err.message);
  }
};

// Find user by ID
const findUserById = async (userId) => {
  try {
    const user = await User.findById(userId);
    if (!user) {
      throw new Error(`User not found with id: ${userId}`);
    }
    return user;
  } catch (err) {
    throw new Error(err.message);
  }
};

// Find user by email
const getUserByEmail = async (email) => {
  try {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error(`User not found with email: ${email}`);
    }
    return user;
  } catch (err) {
    throw new Error(err.message);
  }
};

// Get user profile using JWT token
const getUserProfileByToken = async (token) => {
  try {
    const userId = jwtProvider.getUserIdFromToken(token);
    const user = await findUserById(userId);
    return user;
  } catch (err) {
    throw new Error(err.message);
  }
};

// Get all users
const getAllUsers = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = {
  createUser,
  getUserByEmail,
  findUserById,
  getUserProfileByToken,
  getAllUsers,
};
