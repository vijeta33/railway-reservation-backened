const mongoose=require('mongoose')

//const bookSchema=new mongoose.Schema({
    //bookName: 
   // {
        //type:String,
        //required:true
    //},
    //authorName: String,
    //year : {
       // type: Number,
       // default: 2021
   // },
    //tags: [String],
    //prices:{
        //IndianPrice: String,
        //europeanPrice: String,
    //},
    //totalpages: Number,
    //stockAvailable:{
        //type: Boolean,
        //default: false
    //}


//}, {timestamps: true} )

const bookSchema = new mongoose.Schema({
    name:String,
    author_id:Number,
    price: String,
    ratings: String
}, {timestamps: true} )



//module.exports=mongoose.model('Book1',bookSchema)
module.exports=mongoose.model('newBook',bookSchema)
