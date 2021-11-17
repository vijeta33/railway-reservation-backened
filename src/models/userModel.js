const mongoose=require('mongoose')

const bookSchema=new mongoose.Schema({
    bookName: String,
    authorName: String,
    category: String,
    year : Number
   // emailId: String, 
   // gender: {type: String, enum: ['male', 'female', 'LGBTQ']}, // falana will give an error 
   // age: Number,

    // isIndian: Boolean,
    // parentsInfo : { motherName: String, fatherName: String , siblingName: String },
    // cars: [ String ]

}, {timestamps: true} )



module.exports=mongoose.model('Book',bookSchema)

// String, Number
// Boolean, Object/json, array