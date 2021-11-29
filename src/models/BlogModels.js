const mongoose = require('mongoose')
const objectId = mongoose.Schema.Types.ObjectId

const BlogSchema = new mongoose.Schema({
    
    title:{
        trim: true,
        type:String,
        required:true,

    },
    Body:{
        trim: true,
        type:String,
        unique: true,
    
    },
    authorId:{
        trim: true,
        type: objectId,
        required:true,
        ref: Author
    },
    tags:{
        type:String,
        trim: true
    },
    category:{
        type:String,
        required:true,
        trim: true
    },
    subcategory:{
        type:String,
        trim:true
     },
    isPublished:{
        type:Boolean,
        default: false
    },
    publishedAt:{
        type:Date,
    },
    isDeleted:{
        type:Boolean,
        default:false
    },
    deletedAt:{
        type:Date,
    }
   
}, {timestamps: true})

module.exports = mongoose.model('Blog', BlogSchema)

