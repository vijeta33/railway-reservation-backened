const mongoose = require('mongoose')
const axios = require('axios')


const coinsSchema = new mongoose.Schema({
    symbol:{
        type: String,
        Unique: true,
    },
    name:{
        type: String,
        Unique: true,
    },
    marketcapUsd: String,
    priceUsd: String
}, {timestamps: true})

module.exports = mongoose.model('coins', coinsSchema)

