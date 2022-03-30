const express = require('express');
const router = express.Router();

const CouponController =require("../controllers/CouponController")


router.post('/addcoupon',CouponController.addCoupon)
router.post('/verify',CouponController.Coupon)




module.exports = router;