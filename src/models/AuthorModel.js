const mongoose = require('mongoose')
const axios = require('axios')


const AuthorSchema = new mongoose.Schema({
    fname:{
        trim:true,
        type:String,
        required:true
    },
    lname:{
        trim:true,
        type:String,
        required:true
    },
    title:{
        trim: true,
        type:String,
        required:true,
        enum:['Mr' ,'Mrs','Miss']
    },
    email:{
        trim: true,
        type:String,
        unique: true,
        lowercase: true
    },
    password:{
        trim: true,
        type: String,
        required:true
    }
   
}, {timestamps: true})

module.exports = mongoose.model('Author', AuthorSchema)

