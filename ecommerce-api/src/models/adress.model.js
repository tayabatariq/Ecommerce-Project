const mongoose=require("mongoose")

const adressSchema=new mongoose.Schema({
    firstNmae:{
        type:String,
        required:true

    },
    lastNmae:{
        type:String,
        required:true

    },
    streetAdress:{
        type:String,
        required:true

    },
    city:{
        type:String,
        required:true

    },
    state:{
        type:String,
        required:true

    },
    zipCode:{
        type:Number,
        required:true

    },
    user:{
        type:mongoose.Schema.Types.ObjectId,

        ref:"user"

    },
    mobile:{
        type:String,
        required:true

    },
    
})

const Adress=mongoose.model("adrsses",adressSchema)

module.exports=Adress