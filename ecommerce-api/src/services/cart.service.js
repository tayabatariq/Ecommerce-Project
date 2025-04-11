
const Cart=require('../models/cart.model')
async function createCart(user){
try{
    const cart=new Cart({user})
    const createdCart=await cart.save()
    return createdCart
}
catch(err){
    throw new Error(err.message)
}
}

module.exports={createCart}