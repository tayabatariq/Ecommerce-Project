const express=require('express')
const router=express.Router()

const usercontoller=require("../controller/user.controller.js")


router.get("/profile",usercontoller.getUserProfile)
router.get("/",usercontoller.getAllUsers)
module.exports=router