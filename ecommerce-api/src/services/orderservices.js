const cartService=require(
    "../services/cart.service"
)
const Address=require("../models/adress.model") 
const Order=require("../models/order.model");
const { populate } = require("../models/user.model");

async function createOrder(user,shipAddress){
    let address;

    if(shipAddress._id)
    {
        let existadress=await Address.findById(shipAddress._id)
        address=existadress

    }else
    {
        address=new Address(shipAddress)
        address.user=user
        await address.save()

        user.addresses.push(address)
        await user.save()
    }

    const cart=await cartService.findUserCart(user._id)
    const orderItems=[]

    for(const item of cart.cartItems)
    {
        const orderItem=new orderItems({
            price:item.price,
            product:item.product,
            quantity:item.quantity,
            size:item.size,
            userId:item.userId,
            discountedPrice:item.discountedPrice
        })
        const createdOrderItems=await orderItem.save()
        orderItems.push(createdOrderItems)
    }
   const createdOrder=new Order({
    user,orderItems,totalPrice:cart.totalPrice,
    totalDiscountedPrice:cart.totalDiscountprice,
    discount:cart.discount,
    totalItem:cart.totalItem,
    shippAddress:address


   })

   const saveOrder=await createOrder.save()
   return saveOrder
}


async function placeOrder(orderId){
    const order=await findOrderById(orderId)
    order.orderStatus="PLACED"
    order.paymentDetails.status="completed"
return await order.save()
}

async function confirmOrder(orderId){
    const order=await findOrderById(orderId)
    order.orderStatus="confirmed"
    return await order.save()

}

async function shipOrder(orderId){
    const order=await findOrderById(orderId)
    order.orderStatus="shipped"
    return await order.save()

}

async function deliverOrder(orderId){
    const order=await findOrderById(orderId)
    order.orderStatus="delivered"
    return await order.save()

}
async function cancleorder(orderId){
    const order=await findOrderById(orderId)
    order.orderStatus="cancled"
    return await order.save()




}

async function findOrderById(orderId){
    const order=await Order.findById(orderId).populate("user").populate({path:"orderItems",populate:{path:"product"}}).populate("shippingAddress")
    return order
}

async function usersOrderHistory(userId){
    try{
const orders=await Order.find({user:userId,orderStatus:"placed"}).populate({path:"oderitems",populate:{path:"product"}}).lean()
return orders
    }
    catch(err){
throw new Error(err.message)
    }
}


async function getAllOrder(){
    return await Order.find().populate({path:"oderitems",populate:{path:"product"}}).lean()
}

async function deleteOrder(orderId){
    const order=await findOrderById(orderId)
    await Order.findByIdAndDelete(order._id)
}

module.exports={
    createOrder,placeOrder,confirmOrder,cancleorder
    ,deliverOrder,shipOrder,findOrderById,usersOrderHistory,getAllOrder,deleteOrder
}