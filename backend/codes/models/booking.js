const mongoose = require("mongoose");
const bookingschema = mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        require : true
    },
    listing : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Listing",
        required : true
    },
    checkIn : {
        type : Date,
        required : true
    },
    checkOut : {
        type : Date ,
        required : true
    },
    totalPrice : {
        type : Number ,
        required : true
    },
    status : {
        type : String,
        enum : ["pending","confirmed","cancelled"],
        required : true 
    },
} , {timeStamps : true});
const Booking = mongoose.model("Booking",bookingschema);
module.exports=Booking;