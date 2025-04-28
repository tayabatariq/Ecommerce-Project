const express= require("express")
const cors= require("cors")
const authrouter=require('./routes/authroute.js')
const userRouters=require('./routes/userrouter.js')



const app = express()
app.use(express.json())
app.use(cors())
app.get("/",(req,res)=>{
    res.status(200).send({messeage:"welcome to ecommerce api - node",status:true})
})

app.use("/auth",authrouter)
app.use("/api/users",userRouters)
module.exports=app;
