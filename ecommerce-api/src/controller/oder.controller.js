const orderService = require("../services/orderService.js");
const createOrder=async (req,res)=>{
    const user=req.user
    try{
        let createOrder=await orderService.createOrder(user,req.body)
        return res.status(201).send(createOrder)


    }
    catch(err){
return res.status(500).send({err:err.message})
    }
}

const findOrderById=async (req,res)=>{
    const user=req.user
    try{
        let createOrder=await orderService.findOrderById(req.params.id)
        return res.status(201).send(createOrder)


    }
    catch(err){
return res.status(500).send({err:err.message})
    }
}
const orderHistory=async (req,res)=>{
    const user=req.user
    try{
        let createOrder=await orderService.orderHistory(user-_id)
        return res.status(201).send(createOrder)


    }
    catch(err){
return res.status(500).send({err:err.message})
    }
}

module.exports={
    createOrder,
    findOrderById,
    orderHistory
}