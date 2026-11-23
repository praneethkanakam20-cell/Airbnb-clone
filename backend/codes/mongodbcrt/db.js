const mongoose = require("mongoose");
const a = process.env.MONGO_URI;
async function dbconnect(){
    try{
        await mongoose.connect(a);
        console.log("Database is connected");
    }catch(error){
        console.log("Error in the connection of mongodb");
    };
};
module.exports=dbconnect;