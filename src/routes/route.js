const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken')
const axios = require("axios")

const userController =require("../controllers/usercontroller")
//const commonMw = require("../middleware/commonmw")





//router.post("/cowin/getOtp", userController.getOtp)
router.get("/getweather", userController.getweatherofLondon)
router.get("/londontemp", userController.Londontemp)






module.exports = router;