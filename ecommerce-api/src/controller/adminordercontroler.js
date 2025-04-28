const orderService = require("../services/orderService.js");

const getAllOrders = async (req, res) => {
  try {
    const orders = await orderService.getAllOrders();
    return res.status(200).send(orders);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};


const confirmOrders = async (req, res) => {
    const orderId=req.params.orderId

    try {
      const orders = await orderService.confirmOrders(orderId);
      return res.status(200).send(orders);
    } catch (error) {
      return res.status(500).send({ error: error.message });
    }
  };