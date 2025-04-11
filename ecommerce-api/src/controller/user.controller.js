const userServices=require('../services/userservice.js')

const getUserProfile=async(req,res)=>{
    try{
const jwt=req.headers.autorization?.split(' ')[1]
if(!jwt){
    return res.status(404).send({error:"token message found"})
}

const user=await userServices.getUserProfileByToken(jwt)
return res.status(200).send(user)

    }catch(error){

        return res.status(500).send({error:error.message})
    }
}

const getAllUsers=async (req,res)=>{
    try{

        const users= userServices.getAllUsers()
        return res.send(users)

    }
    catch(err){
        return res.status(500).send({error:error.message})

    }
}

module.exports={getAllUsers,getUserProfile}