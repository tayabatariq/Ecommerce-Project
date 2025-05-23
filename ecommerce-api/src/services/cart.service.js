
const Cart=require('../models/cart.model')
const Product=require("../models/product.model")
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
const CartItem = require("../models/cartItem.model"); // correct this path

async function findUserCart(userId) {
    try {
        let cart = await Cart.findOne({ user: userId });
        if (!cart) throw new Error("Cart not found");

        const cartItems = await CartItem.find({ cart: cart._id }).populate("product");

        cart = cart.toObject(); // Convert Mongoose document to plain object
        cart.cartItems = cartItems;

        let totalPrice = 0;
        let totalDiscountedPrice = 0;
        let totalItem = 0;

        for (let item of cartItems) {
            totalPrice += item.price;
            totalDiscountedPrice += item.discountedPrice;
            totalItem += item.quantity;
        }

        cart.totalPrice = totalPrice;
        cart.totalItem = totalItem;
        cart.discount = totalPrice - totalDiscountedPrice;

        return cart;
    } catch (err) {
        throw new Error(err.message);
    }
}


async function addCartItem(userId,req){
    try{
        const cart=await Cart.findOne({user:userId})
        const product=await product.findById(req.productId)
        const isPresent= await CartItem.findOne({cart:cart._id,product:product._id,userId})

        if(!isPresent){
            const cartItem=new CartItem({
                product :product._id,
                cart:cart._id,
                userId,
                price:product.price,
                size:req.size,
                discountedPrice:product.discountedPrice
            })

            const createdCartItem=await cartItem.save
            ()
            cart.cartItems.push(createdCartItem)
            await cart.save()
            return "item added to cart"
        }
    }catch(err){
        throw new Error(err.message)
    }

}



module.exports={createCart,findUserCart,addCartItem}