const jwt= require("jsonwebtoken")


const generateToken=(userId)=>{
    const token=jwt.sign({userId})
}