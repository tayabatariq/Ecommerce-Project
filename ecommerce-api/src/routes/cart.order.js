

const express = require("express");
const router = express.Router();

const cartController = require("../controller/cartcontroller.js");
const authenticate = require("../middlewares/authenticate.js");


router.get("/", authenticate, cartController.findUserCart);

router.put("/add", authenticate, cartController.addItemToCart);

module.exports = router;


 