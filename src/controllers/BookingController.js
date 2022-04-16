const BookingModel = require("../models/BookingModel")


const isValid = function (value) {
    if (typeof value === 'undefined' || value === null) return false
    if (typeof value === 'string' && value.length === 0) return false
    return true;
}


const createbooking = async(req,res)=>{
    try{
        const {userId,trainId} = req.body
        if (!isValid(userId)) {
            return res.status(400).send({ status: false, message: `${userId} is not a valid userId id or not present ` })
        }
        const tokendetails = req.userId
        if (req.userId != tokendetails) {
            return res.status(400).send({ status: false, message: "Sorry you are not authorized to do this action" })
        }
        if (!isValid(trainId)) {
            return res.status(400).send({ status: false, message: `${trainId} is not a valid train id or not present ` })
        }
        const userexist = await user.findOne({ _id: userId })
        if(!userexist){
            return res.status(400).send({ status: false, message: 'user does not exist' })
        }
        const trainexist = await user.findOne({ _id: trainId })
        if(!trainexist){
            return res.status(400).send({ status: false, message: 'train does not exist' })
        }
        const newbooking  = {userId,trainId}
        const booking = await BookingModel.create(newbooking)
        res.status(201).send({ status: true, message: `booking done successfully`, data: booking })

    }catch(err){
        res.status(500).send({status:false,msg:err.msg})
    }
}

module.exports.createbooking = createbooking