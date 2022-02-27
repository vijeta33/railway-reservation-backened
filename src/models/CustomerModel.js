const mongoose = require('mongoose')


const CustomerSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required: true
    },
    lastName:{
        type:String,
        required: true
    },
    mobileNumber: {
        type:String,
        required: true
    },
    DOB: {
        type:Date,
        required: true
    },
    emailID:{
        type:String,
        required:true
    },
    address: {
        type:String,
        required: true
    },
    CustomerID: {
        type:String,
        required: true
    },
    status: {
        type:String,
        uppercase: true,
        enum:["ACTIVE","INACTIVE"]
    },
    isDeleted :{
        type:Boolean,
        default: false
    }
    
}, {timestamps: true})

module.exports = mongoose.model('Customer', CustomerSchema)

