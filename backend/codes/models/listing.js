const { timeStamp } = require("console");
const mongoose = require("mongoose");
const listingschema = mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    location : {
        type : String,
        required : true
    },
    price : {
        type : String,
        required : true
    },
    images : [{
        type : String
    }],
    category : {
        type : String,
        required : true
    },
    host : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true
    }
} , {timeStamps : true});
const Listing = mongoose.model("Listing",listingschema);
module.exports=Listing;