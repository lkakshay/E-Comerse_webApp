
const User=require('../../models/userModel')

module.exports=async(req,res)=>{
    try {
        await User.create(req.body)
        return res.status(201).send("success")

    } catch (e) {
        res.staus(500).send(e.message)
    }
}