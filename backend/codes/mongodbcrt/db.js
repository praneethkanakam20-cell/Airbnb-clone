const mongoose = require("mongoose");
async function mongocrt(){
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Databaase is connected Successfully");
    }catch(error){
        console.log("Database connection failed");
        console.log(error);
    }
}
module.exports=mongocrt;