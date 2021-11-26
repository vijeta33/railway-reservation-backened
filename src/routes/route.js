const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken')
const axios = require("axios")
const coinsModel = require("../models/coinsModel")

const userController =require("../controllers/usercontroller")






router.get("/assets" , userController.getcoins)






module.exports = router;