const mongoose = require("mongoose");
const { timeStamp } = require("node:console");
const reviewschema = mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true
    },
    listing : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Listing",
        required : true 
    },
    rating : {
        type : Number,
        min : 1,
        max : 5
    },
    comment : {
        type : String ,
    }
} , {timeStamp : true});
const Review = mongoose.model("Review",reviewschema);
module.exports = Review;