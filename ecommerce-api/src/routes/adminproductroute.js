const express=require("express")
const router=express()

const authenticate = require("../middlewares/authenticate.js");

const productController=require("../controller/productcontroller.js")

router.post("/",authenticate,productController.createProduct)
router.post("/creates",authenticate,productController.createMultipleProducts)
router.delete("/:id",authenticate,productController.deleteProduct)
router.put("/:id",authenticate,productController.updateProduct)

module.exports=router