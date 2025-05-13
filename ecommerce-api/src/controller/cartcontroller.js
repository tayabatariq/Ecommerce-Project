const cartServices = require("../services/cart.service");

const findUserCart = async (req, res) => {
  const user = req.user;
  try {
    const cart = await cartServices.findUserCart(user._id);
    return res.status(200).send(cart);
  } catch (err) {
    return res.status(500).send({ err: err.message });
  }
};

const addItemToCart = async (req, res) => {
  const user = req.user;
  try {
    const cartItem = await cartServices.addItemToCart(user.id, req.body);
    return res.status(200).send(cartItem);
  } catch (err) {
    return res.status(500).send({ err: err.message });
  }
};

module.exports = {
  findUserCart,
  addItemToCart,
};
