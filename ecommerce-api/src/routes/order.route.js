const express=require("express")
const router=express.Router()
const authenticate = require("../middlewares/authenticate.js");
const orderController=require("../controller/oder.controller.js")


router.post("/",authenticate,orderController.createOrder)
router.get("/user",authenticate,orderController.orderHistory)
router.get("/:id",authenticate,orderController.findOrderById)
module.exports=router