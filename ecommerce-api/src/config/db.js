const mongodbUrl="mongodb+srv://tayabatariq3:hYlF9T7uN4UABSAo@cluster0.cow4t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const mongoose=require("mongoose")
const connectDB=()=>{
    return mongoose.connect(mongodbUrl)
}

module.exports={connectDB}