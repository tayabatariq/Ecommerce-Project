const express=require("express")
const router=express()

const authenticate = require("../middlewares/authenticate.js");

const ratingController=require("../controller/ratingcontroller.js")

router.post("/create",authenticate,ratingController.createRating)
router.put("/product/:productId",authenticate,ratingController.getAllRating)

module.exports=router