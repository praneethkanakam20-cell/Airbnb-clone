const mongoose = require("mongoose");
const Userschema = mongoose.Schema({
    name : {
        type: String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String ,
        required : true
    },
    role : {
        type: String,
        enum : ["guest","host"],
        default : "guest"
    }
},{timeStamp : true});
const User = mongoose.model("User",Userschema);
module.exports = User;