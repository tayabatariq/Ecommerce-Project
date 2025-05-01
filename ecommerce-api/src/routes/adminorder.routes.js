const express=require("express")
const router=express()

const orderController = require("../controller/adminordercontroler.js");
const authenticate = require("../middlewares/authenticate.js");

router.get("/", authenticate, orderController.getAllOrder);
router.put("/:orderId/confirmed", authenticate, orderController.confirmOrder);
router.put("/:orderId/ship", authenticate, orderController.shippOrders);
router.put("/:orderId/deliver", authenticate, orderController.deliverOrders);
router.put("/:orderId/cancel", authenticate, orderController.canceledOrders);
router.put("/:orderId/delete", authenticate, orderController.deleteOrders);

module.exports = router;



 