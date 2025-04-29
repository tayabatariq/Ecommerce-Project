const express = require("express");
const router = express.Router();

const cartItemController = require("../controller/");
const authenticate = require("../middlewares/authenticate.js");


// Route to update a cart item by ID
router.put("/:id", authenticate, cartItemController.updateCartItem);

// Route to remove a cart item by ID
router.delete("/:id", authenticate, cartItemController.removeCartItem);

module.exports = router;
