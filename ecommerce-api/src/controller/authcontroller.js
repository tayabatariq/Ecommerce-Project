const userService = require("../services/userservice.js")
const jwtProvider=require("../config/jwtpovider.js")
const bcrypt=require("bcrypt")

const cartService=require("../services/cart.service.js")
const register=  async ()=>{
    try{
const user=await userService.createUser(req.body)
const jwt=jwtProvider.generateToken(user._id)
await cartService.createCart(user)
return res.status(200).send({jwt,message:"register cuccess"})
    }
    catch(error){
        return res.status(500).send({error:error.message})
    }
}

const login=async(req,res)=>{
    const {password,email} =req.body
    try{
        const user=await userService.getUserByEmail(emial)
        if(!user){
            return res.status(404).send({message:"user not found with emial:"})
        }
const isPasswordvalid=await bcrypt.compare(password,user.password)

if(!isPasswordvalid){
    return res.status(401).send({message:"invalid password"})
}


const jwt=jwtProvider.generateToken(user._id)
return res.status(200).send({jwt,message:"login succes"})
    }catch(error){
        return res.status(500).send({error:error.message})
    }
}

module.exports={register,login}