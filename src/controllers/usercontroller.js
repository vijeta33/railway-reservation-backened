
const jwt = require('jsonwebtoken')
const axios = require("axios")
const coinsModel = require('../models/coinsModel')




const getcoins = async function (req, res){

    try{ 

        
        
        let options = {
          method : "get",
          url : ("http://api.coincap.io/v2/assets")
        }

        let response= await axios(options)

        let dataArray = response.data.data
        for (i in dataArray) {
            let coinsData = {
                symbol: dataArray[i].symbol,
                name: dataArray[i].name,
                marketCapUsd: dataArray[i].marketCapUsd,
                priceUsd: dataArray[i].priceUsd
            }
            await coinsModel.create(coinsData)
        }
        dataArray.sort(function (a,b){ return (a.changePercent24Hr)- (b.changePercent24Hr)})
        res.status(200).send( {msg: "Success", data: dataArray} )

    }
    catch(err) {
        console.log(err.message)
        res.status(500).send( { msg: "Something went wrong" } )
    }
}


module.exports.getcoins = getcoins


