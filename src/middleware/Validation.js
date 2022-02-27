const isValid = function (value) {
    if (typeof value === 'undefined' || value === null) return false
    if (typeof value === 'string' && value.length === 0) return false
    return true;
}

const isValidRequestBody = function (requestBody) {
    return Object.keys(requestBody).length > 0;
}


const checkCustomer = async (req, res, next) => {
    try {
        const Customer = req.body;
        if (!isValidRequestBody(Customer)) {
            return res.status(400).send({ status: false, message: 'Invalid request parameters. Please provide user details' })
        }

        const { firstName, lastName, mobileNumber, DOB, emailID, address, status } = Customer;

        if (!isValid(firstName)) {
            return res.status(400).send({ status: false, message: 'firstName is required' })
        }
        if (!isValid(lastName)) {
            return res.status(400).send({ status: false, message: 'lastName is required' })
        }
        if (!isValid(mobileNumber)) {
            return res.status(400).send({ status: false, message: 'mobileNumberis required' })
        }


        if (!/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/.test(mobileNumber.trim())) {
            res.status(400).send({
                status: false,
                message: `mobileNumber should be a valid number`
            });
            return;
        }
        if (!isValid(emailID)) {
            return res.status(400).send({ status: false, message: `EmailID is required` })
        }

        if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailID))) {
            return res.status(400).send({ status: false, message: `Email should be a valid email address` })
        }

        if (!isValid(DOB)) {
            return res.status(400).send({ status: false, message: `DOB is required` })
        }

        if (!isValid(address)) {
            return res.status(400).send({ status: false, message: `address is required` })
        }
        if (!isValid(status)) {
            return res.status(400).send({ status: false, message: `status is required` })
        }


        next();
    }
    catch (err) {
        res.status(500).send(err.message)
    }
}


const checkCard = async (req, res, next) => {
    try {
        let card = req.body
        let { cardType, customerName, status, vision, customerID } = card
        if (!isValidRequestBody(card)) {
            return res.status(400).send({ status: false, message: 'Invalid request parameters. Please provide user details' });
        }
        if (!isValid(cardType)) {
            return res.status(400).send({ status: false, message: "cardType is required" });
        }
        if (!isValid(customerName)) {
            return res.status(400).send({ status: false, message: "customerName is required" });
        }
        if (!isValid(status)) {
            return res.status(400).send({ status: false, message: "status is required" });
        }
        if (!isValid(vision)) {
            return res.status(400).send({ status: false, message: "vision is required" });
        }
        if (!isValid(customerID)) {
            return res.status(400).send({ status: false, message: "customerID is required" });
        }
        const CardAlreadyGenerated = await CardModel.findOne({ customerID });
        if (CardAlreadyGenerated) {
            return res.status(400).send({ status: false, message: `${customerID} is already registered` })
        }

        next();
    }
    catch (err) {
        res.status(500).send(err.message)
    }
}


module.exports.checkCustomer = checkCustomer
module.exports.checkCard = checkCard
