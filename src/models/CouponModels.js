const mongoose = require('mongoose')

const CouponSchema = new mongoose.Schema({
    startDate: Date,
    endDate: Date,
    TotalAmount:Number,
    type: String,
    value: Number,
    code: String
   
   
}, {timestamps: true})

module.exports = mongoose.model('Coupon', CouponSchema)

