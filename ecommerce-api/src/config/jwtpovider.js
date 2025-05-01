const jwt = require("jsonwebtoken");

const SECRET_KEY = "mmkmekmkemxmkrjkejrlxermkejrkejrkxjekrjkerjejrokelrj";

const generateToken = (userId) => {
  const token = jwt.sign({ userId }, SECRET_KEY, { expiresIn: "48h" });
  return token;
};

const getUserIdFromToken = (token) => {
  try {
    const decodedToken = jwt.verify(token, SECRET_KEY); // Sync version
    return decodedToken.userId;
  } catch (err) {
    console.log("Invalid token");
    return null;
  }
};

module.exports = { generateToken, getUserIdFromToken };
