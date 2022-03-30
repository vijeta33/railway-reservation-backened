const CouponModels = require('../models/CouponModels')


const addCoupon = async (req, res) => {
    try {
        const newCoupon = {
            startDate: req.body.start_date,
            endDate: req.body.end_date,
            TotalAmount: req.body.minAmount,
            type: req.body.type,
            value: req.body.couponValue,
            code: req.body.codestring
        }
        const couponCode = await CouponModels.create(newCoupon)
        res.status(201).send({ msg: 'coupon created sucessfully', data: couponCode })
    } catch (err) {
        res.status(500).send({ msg: 'some error occured' })
    }


}
module.exports.addCoupon = addCoupon


const Coupon = async (req, res) => {
    const Coupon = await CouponModels.findOne({ code: req.body.coupon })
    if (Coupon) {
        if (new Date().getTime() > Coupon.startDate.getTime() && new Date().getTime() < Coupon.endDate.getTime()) {
            if (req.body.total >= Coupon.totalAmount) {
                let discount;
                if (Coupon.type === 'flatdiscount') {
                    discount = (body.total * Coupon.value) / 100
                } else {
                    discount = Coupon.value
                }

                return {
                    finalAmount: body.total - discount
                }
            } else {
                res.status(400).send({ msg: 'Coupon expired! Try another coupon.' })

            }
        } else {
            res.status({ msg: 'Coupon invalid!please use a valid Coupon.' })

        }

    }

}

module.exports.Coupon = Coupon