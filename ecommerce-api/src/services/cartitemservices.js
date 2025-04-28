const userService=require("../services/userservice.js")


async function updateCartItem(userId,cartItemId,cartItemData){
    try{
        const item=await findCartItemById(cartItemId)
        if(!item){
            throw new Error("cart item not found: ")

        }
        const user=await userService.findUserById(item.userId)
        if(!user){

            throw new Error("user not found: ")

        }
        if(user._id.toString() === userId.toString()){
            item.quantity = cartItemData.quantity
            item.price=item.quantity*item.prodcut.price
            item.discountedPrice=item.quantity*item.prodcut.discountedPrice
            const updatedCartItem= await item.save()
        return updatedCartItem;
        }else{
            throw new Error("you can't update this cart item")
        }
    }
    catch(err){
        throw new Error(err.message)
    }
}



async function removeCartItem(userId,cartItemId){
    const cartItem=await findCartItemById(cartItemId)
    const user=await userService.findUserById(userId)

    if(user._id.toString()===cartItem.userId.toString()){
        await cartItem.findUserByIdAndDelete(cartItemId)
    }
    throw new Error("you cant remove another user-s item")
}
async function findCartItemById(cartItemId){
    const cartItem=await findCartItemById(cartItemId)
if(cartItem){
    return cartItem
}
else{
    throw new Error("cart item not found with id ",cartItemId)
}
}
module.exports={
    updateCartItem,
    updateCartItem,
    removeCartItem
}