const jwtProvider = require("../config/jwtpovider.js");   // ✅ JWT provider
const userService = require("../services/userservice.js"); // ✅ userService for DB call

const authenticate = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];  // ✅ Token extract
        if (!token) {
            return res.status(401).send({ error: "Token not found" });
        }

        const userId = jwtProvider.getUserIdFromToken(token);  // ✅ Decode user ID
        const user = await userService.findUserById(userId);   // ✅ DB se user find

        if (!user) {
            return res.status(404).send({ error: "User not found" });
        }

        req.user = user;  // ✅ Attach user to request
        next();           // ✅ Go to next middleware/controller
    } catch (error) {
        console.error("Authentication error:", error.message);
        return res.status(500).send({ error: error.message });
    }
};

module.exports = authenticate;
