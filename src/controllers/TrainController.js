const trainModels = require('../controllers/TrainController')

const isValid = function (value) {
    if (typeof value === 'undefined' || value === null) return false
    if (typeof value === 'string' && value.length === 0) return false
    return true;
}

const createtrain = async (req, res) => {
    try {
        const { name, userId, destination, startpoint, DepartureDate, ArrivalDate, price } = req.body
        if (!isValid(name)) {
            return res.status(400).send({ status: false, message: "Please provide name" });
        }
        const checkduplicate = await trainModels.findOne({ name })
        if (checkduplicate) {
            return res.status(400).send({ status: false, msg: 'train is already registered with this name' })
        }
        if (!isValid(userId)) {
            return res.status(400).send({ status: false, message: `${userId} is not a valid userId or not present ` })
        }
        const tokendetails = req.userId
        if (req.userId != tokendetails) {
            return res.status(400).send({ status: false, message: "Sorry you are not authorized to do this action" })
        }

        if (!isValid(destination)) {
            return res.status(400).send({ status: false, message: "Please provide destination" });
        }
        if (!isValid(startpoint)) {
            return res.status(400).send({ status: false, message: "Please provide startpoint" });;
        }
        if (!isValid(DepartureDate)) {
            return res.status(400).send({ status: false, message: "Please provide DepartureDate" });
        }
        if (!isValid(ArrivalDate)) {
            return res.status(400).send({ status: false, message: "Please provide ArrivalDate" });
        }
        if (!isValid(price)) {
            return res.status(400).send({ status: false, message: "Please provide price" });;
        }

        const traindata = { name, userId, destination, startpoint, DepartureDate, ArrivalDate, price }
        const data = await trainModels.create(traindata)
        res.status(201).send({ status: true, msg: 'train data created successfully', data })

    } catch (err) {
        res.status(500).send({ status: false, msg: err.msg })
    }
}

const gettrain = async (req, res) => {
    try {
        const trainId = req.params.trainId
        if (!isValid(trainId)) {
            return res.status(400).send({ status: false, message: `${trainId} is not a valid train id or not present ` })
        }
        const findtrain = await trainModels.findOne({ _id: trainId })
        if (!findtrain) {
            return res.status(400).send({ status: false, message: 'train does not exist' })
        }
        const traindata = await trainModels.find({ trainId: trainId }).sort({ "createdAt": -1 })
        return res.status(200).send({ status: true, message: "train data succefully", data: traindata })
    }catch (err) {
        return res.status(500).send({ status: false, message: err.message });
    }
}



module.exports.createtrain = createtrain
module.exports.gettrain = gettrain