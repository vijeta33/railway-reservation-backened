const authorModel= require("../models/AuthorModel.js")

const createAuthor= async function (req, res) {
    var data= req.body
    let authorCreated= await authorModel.create(data)
    res.send({data: authorCreated})    
}



module.exports.createAuthor= createAuthor;
