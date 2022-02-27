const express = require('express');
const router = express.Router();

const CustomerController =require("../controllers/CustomerController")
const CardController = require("../controllers/CardController")
const  validator= require('../middleware/validation');


//---------------------CustomerAPI-----------------------//
router.post('/customer', validator.checkCustomer,CustomerController.createCustomer)
router.get('/getdata',CustomerController.getallcustomers);
router.delete('/customer/:customerId', CustomerController.Deletecustomer)

//---------------------CardAPI-----------------------------//
router.post('/card',validator.checkCard,CardController.createCard)
router.get('/getcard',CardController.getCarddetails)






module.exports = router;