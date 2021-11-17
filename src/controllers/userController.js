const UserModel= require("../models/userModel.js")

const createNewBook= async function (req, res) {
    var data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})    
}


const getBooks= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}

module.exports.createNewBook= createNewBook
module.exports.getBooks= getBooks

//const allBookslist= async function (req, res) {
    //let Bookslist= await bookModel.find().select({bookName:1,authorName:1})
     //res.send({msg: Bookslist})
 //}
 
 //const yeardetails= async function (req, res) {
     //let yearlist= await bookModel.find({year:req.body.year})
     //res.send({msg: yearlist})
 //}
 
 //const ParticularBooks= async function (req, res) {
     //let specificBook= await bookModel.find(req.body)
     //res.send({msg: specificBook})
 //}
 
 //const XINRBooks= async function (req, res) {
     //let list= await bookModel.find({'prices.indianPrice':{$in:["100INR","200INR","500INR"]}})
     //res.send({msg: list})
 //}
 
 //const RandomBooks= async function (req, res) {
     //let allBooks= await bookModel.find({$or:[{stockAvailable:true},{totalPages:{$gt:500} }]})
     //res.send({msg: allBooks})
 //}
 
 //module.exports.allBookslist = allBookslist
 //module.exports.yeardetails= yeardetails
 //module.exports.ParticularBooks= ParticularBooks
 //module.exports.XINRBooks= XINRBooks
 //module.exports.RandomBooks= RandomBooks