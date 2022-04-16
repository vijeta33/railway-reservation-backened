const express = require('express');
const router = express.Router();

const AdminController =require("../controllers/Admincontroller")
const Middleware = require('../middleware/AuthMiddleware');
const BookingController = require('../controllers/BookingController')
const TrainController = require('../controllers/TrainController')




router.post('/register',AdminController.registeruser)
router.post('/login',AdminController.login)

router.post('/train', Middleware.AuthMiddleware,TrainController.createtrain)
router.get('/gettrain',Middleware.AuthMiddleware,TrainController.gettrain)

router.post('/booktrain',Middleware.AuthMiddleware,BookingController.createbooking)







module.exports = router;