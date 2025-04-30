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




const productRouter=require("./routes/product.routes.js")
app.use("/api/products",productRouter)

const adminproductroutes=require("./routes/adminproductroute.js")
app.use("/api/admin/products",adminproductroutes)

const cartRoutes=require("./routes/cart.order.js")
app.use("/api/cart",cartRoutes)

const cartItemRouter = require('./routes/cartitem.routes.js');
app.use('/api/cart_items', cartItemRouter);

const orderRouter = require('./routes/order.route.js');
app.use('/api/orders', orderRouter);

const adminOrderRouter=require("./routes/adminorder.routes.js")
app.use("/api/admin/orders",adminOrderRouter)
const reviewRouter = require('./routes/review.routes.js');
app.use('/api/reviews', reviewRouter);

const ratingRouter = require('./routes/rating.routes.js');
app.use('/api/ratings', ratingRouter);  // Fixed from 'retimes' to 'ratings'

module.exports=app;
