const mongoose = require("mongoose");
const connectdb = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Mongodb was connected successfully");
    }catch(error){
        console.log("Error in the mongodb connection");
    }
};
module.exports=connectdb;