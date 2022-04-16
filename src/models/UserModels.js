const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
    },
    phone: {
        type: String,
        trim: true,
        unique: true,
    },
    isAdmin: {
        type: Boolean,
    }


}, { timestamps: true })


module.exports = mongoose.model('user', UserSchema)

