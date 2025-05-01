const orderService = require("../services/orderservices.js");

const getAllOrder = async (req, res) => {
  try {
    const orders = await orderService.getAllOrder();
    return res.status(200).send(orders);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};


const confirmOrder = async (req, res) => {
    const orderId=req.params.orderId

    try {
      const orders = await orderService.confirmOrder(orderId);
      return res.status(200).send(orders);
    } catch (error) {
      return res.status(500).send({ error: error.message });
    }
  };



  const shippOrders = async (req, res) => {
    const orderId=req.params.orderId

    try {
      const orders = await orderService.shippOrders(orderId);
      return res.status(200).send(orders);
    } catch (error) {
      return res.status(500).send({ error: error.message });
    }
  };

  const deliverOrders = async (req, res) => {
    const orderId=req.params.orderId

    try {
      const orders = await orderService.deliverOrders(orderId);
      return res.status(200).send(orders);
    } catch (error) {
      return res.status(500).send({ error: error.message });
    }
  };



  const canceledOrders = async (req, res) => {

    const orderId=req.params.orderId

    try {
      const orders = await orderService.canceledOrders(orderId);
      return res.status(200).send(orders);
    } catch (error) {
      return res.status(500).send({ error: error.message });
    }
  };


  const deleteOrders = async (req, res) => {
    const orderId=req.params.orderId

    try {
      const orders = await orderService.deleteOrders(orderId);
      return res.status(200).send(orders);
    } catch (error) {
      return res.status(500).send({ error: error.message });
    }
  };

  module.exports={deleteOrders,canceledOrders,deliverOrders,shippOrders,confirmOrder,getAllOrder}