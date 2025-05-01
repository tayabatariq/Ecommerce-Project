const userServices = require("../services/userservice.js");

const getUserProfile = async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    console.log("Authorization Header:", authHeader);

    const jwt = authHeader?.split(" ")[1];
    console.log("Extracted Token:", jwt);

    if (!jwt) {
      return res.status(401).send({ error: "Token not found in request" });
    }

    const user = await userServices.getUserProfileByToken(jwt);
    return res.status(200).send(user);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await userServices.getAllUsers(); // added await
    return res.send(users);
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
};

module.exports = { getAllUsers, getUserProfile };
