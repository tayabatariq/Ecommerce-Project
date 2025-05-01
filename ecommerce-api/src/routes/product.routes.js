const express=require("express")
const router=express()

const authenticate = require("../middlewares/authenticate.js");

const productController=require("../controller/productcontroller.js")


router.get('/',authenticate,productController.getAllProducts)
router.get("/id/:id",authenticate,productController.findProductById)

module.exports=router