const express=require("express")
const router=express()
const authController=require("../controller/authcontroller.js")


router.post("/signup",authController.register)
router.post("/signin",authController.login)

module.exports=router