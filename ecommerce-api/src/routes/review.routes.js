const express=require("express")
const router=express()

const authenticate = require("../middlewares/authenticate.js");

const reviewController=require("../controller/reviewcontroleer.js")

router.post("/create",authenticate,reviewController.createReview)
router.get("/product/:productId",authenticate,reviewController.getAllReview)

module.exports=router