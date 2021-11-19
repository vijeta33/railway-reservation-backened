const bookModel= require("../models/bookModel.js")
const authorModel= require("../models/AuthorModel.js")
const publisherModel= require("../models/publisherModel")

 const createBook= async function (req, res) {
    var data= req.body
     let authorId =req.body.author
     let request = await authorModel.findById(authorId)
     let pubId = req.body.publisher
     let pubRequest = await publisherModel.findById(pubId)

     if(request && pubRequest) {
         let bookCreated = await bookModel.create(data)
         res.send({data: bookCreated})
     } else {
         res.send('Publisher Id or author Id provided is not valid')
     }
     
 }
const getBooks = async function (req, res) {
    let allBooks = await bookModel.find().populate('author',{author_name:1,age:1});
    res.send({data: allBooks})
}


const createpublisher= async function (req, res) {
    var data= req.body
    let publisherCreated= await publisherModel.create(data)
    res.send({data: publisherCreated})    
}






 //module.exports.createBook = createBook
 module.exports.getBooks = getBooks
module.exports.createBook = createBook
module.exports.createPublisher = createpublisher
