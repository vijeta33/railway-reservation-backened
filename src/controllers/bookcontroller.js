const BookModel= require("../models/bookModel.js")
const AuthorModel= require("../models/AuthorModel.js")

const createBooks= async function (req, res) {
    var books= req.body
    let savedBooks= await BookModel.create(books)
    res.send({msg: savedBooks})    
}

const createAuthor= async function (req, res) {
    var author= req.body
    let savedData= await BookModel.create(author)
    res.send({msg: savedData})  
 
}
const authorBooks = async function (req, res) {
    let data = await BookModel.find({author_id:1})
    res.send({msg: data})
}

const updatedData = async function(req, res) {
    let savedData = await BookModel.findOne({name:"Two states"}).select({author_id:1,_id:0})
   // console.log(savedData)
    let author = await AuthorModel.find(savedData).select({authorName:1,_id:0})
    //console.log(author)
    let updatedPrice = await BookModel.findOneAndUpdate({name:"Two states"},{price:100},{new:true}).select({price:1,_id:0})
    res.send({msg:author,updatedPrice})
}

const findBooks = async function(req, res){
    let books = await BookModel.find({price:{ $gt:49, $lt:101}}).select({author_id:1,_id:0})
    //console.log(books)
    let authorNames = await AuthorModel.find({$or:books}).select({authorName:1,_id:0})
    res.send({msg:authorNames})
}

module.exports.createBooks = createBooks
module.exports.createAuthor = createAuthor
module.exports.authorBooks = authorBooks
module.exports.findBooks=findBooks
module.exports.updatedData = updatedData