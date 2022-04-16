
const UserModels = require('../models/UserModels')

const registeruser = async(req,res)=>{
    try{
        const requestbody = req.body
        let{name,email,password,phone,isAdmin}= requestbody
        const isEmailAlreadyUsed = await UserModels.findOne({ email });
        if (isEmailAlreadyUsed) {
            return res.status(400).send({ status: false, message: `email address is already registered` })
        }
        if (!(password.length >= 8 && password.length <= 15)) {
            return res.status(400).send({ status: false, message: "Password should be Valid min 8 and max 15 " })
        }
        const isphoneNumberAlreadyUsed = await UserModels.findOne({ phone });
        if (isphoneNumberAlreadyUsed) {
            res.status(400).send({ status: false, message: `${phone} phone number is already registered`, });
            return;
        }
        const user ={name,email,password,phone,isAdmin}
        const registered = await UserModels.create(user)
        res.status(201).send({ status: true, message: `User created successfully`, data: registered })
    }catch(err){
        res.status(500).send({status:false,msg:err.msg})
    }
}

const login = async(req,res)=>{
    try{
        const Email =req.body.email
        const Password = req.body.password

        let user = await UserModels.findOne({email:Email, password:Password})
        if(!user){
            res.status(400).send({status:false,msg:"Either email or password incorrect"})
        }
        const token = jwt.sign({
            userId:user._id
        },"Admin")
        res.header("x-api key", token)
        res.status(201).send({status:true,msg:"successful login", token:{token}})
    }catch(err){
        res.status(500).send({status:false,msg:err.msg})
    }
}


module.exports.registeruser = registeruser
module.exports.login = login