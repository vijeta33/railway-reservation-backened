const mongoose = require("mongoose");

const TrainSchema = new mongoose.Schema({
    name: {
        trim: true,
        type: String,
        unique: true,
    },
    
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },

    destination: {
        type: String
    },
    startpoint: {
        type: String,
    },
    DepartureDate: {
        type: Date,
    },
    ArrivalDate: {
        type: Date,
    },
    price: {
        type: Number,
    },

}, { timestamps: true })


module.exports = mongoose.model("train", TrainSchema);