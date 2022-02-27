
const CustomerModel = require('../models/CustomerModel')
const { v4: uuidv4 } = require('uuid');


const createCustomer = async function (req, res) {
    try {
        let customer = req.body
        let { firstName, lastName, mobileNumber, DOB, emailID, address, CustomerID, status } = customer
        let uuid = uuidv4()
        let customerdata = { firstName, lastName, mobileNumber, DOB, emailID, address, CustomerID: uuid, status }
        const createddata = await CustomerModel.create(customerdata)
        return res.status(201).send({ status: true, message: 'success', data: createddata })
    }
    catch (err) {
        console.log(err.message);
        res.status(500).send({ msg: "Some error occured" });
    }
}



const getallcustomers = async function (req, res) {
    try {
        let getcustomer = await CustomerModel.find({ status: "ACTIVE" })
        return res.status(201).send({ status: true, message: 'success', data: getcustomer })

    }
    catch (err) {
        console.log(err.message);
        res.status(500).send({ msg: "Some error occured" });
    }
}




const Deletecustomer = async function (req, res) {
    try {
        let CustomerId = req.params.customerId
        let deletedId = await CustomerModel.findOneAndUpdate({ _id: CustomerId},{ isDeleted: true }, { new: true });
        return res.status(200).send({ status: true, message: 'data deleted successfully', data: deletedId})
    }
    catch (err) {
        console.log(err.message);
        res.status(500).send({ msg: "Some error occured" });
    }
}











module.exports.createCustomer = createCustomer
module.exports.getallcustomers = getallcustomers
 module.exports.Deletecustomer = Deletecustomer


