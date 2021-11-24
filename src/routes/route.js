const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken')

const userController =require("../controllers/usercontroller")
const commonMw = require("../middleware/commonmw")






router.post('/users', userController.createUser)
router.post('/login', userController.login)
router.get('/users/:userId', commonMw.authenticate, userController.getDetails)
router.put('/users/:userId', commonMw.authenticate, userController.updateEmail)







module.exports = router;