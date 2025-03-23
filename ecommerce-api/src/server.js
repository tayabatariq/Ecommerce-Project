const app = require(".");
const { connectDB } = require("./config/db");
const PORT=8000
app.listen(PORT,async()=>{
    await connectDB();
    console.log("server ready ecommerce api listing on port:",PORT)
})