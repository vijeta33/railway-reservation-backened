const CardModels = require('../models/CardModels')
const CardModel = require('../models/CardModels')



const createCard = async function (req,res) {
    try{
        let Card = req.body 
        let {cardType,customerName,status,vision,customerID} = Card
        let dbexists = await CardModel.find()
        let length = dbexists.length
        let Carddata = {cardNumber: length+1,cardType,customerName,status,vision,customerID}
        const carddetails = await CardModel.create(Carddata)
        return res.status(201).send({ status: true, message: 'success', data: carddetails})
    
    }
    catch (err) {
        console.log(err.message);
        res.status(500).send({ msg: "Some error occured" });
    }
}




const getCarddetails = async function (req,res){
    try{
       let carddetails = await CardModels.find()
       return res.status(200).send({ status: true, message: 'success', data: carddetails})
    }
    catch (err) {
        console.log(err.message);
        res.status(500).send({ msg: "Some error occured" });
    }
}



module.exports.createCard = createCard
module.exports.getCarddetails=getCarddetails