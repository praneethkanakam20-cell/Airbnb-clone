const express=require("express");
require("dotenv").config({path : "../.env"});
const mongodb = require("./mongodbcrt/db");
const cors = require("cors");
const userRoutes = require("./routes/userroutes");
const app = express();
app.use(express.json());
app.use(cors());
async function mongoconnect() {
    await mongodb();
}
mongoconnect();
app.use("/api/users",userRoutes);
app.listen(3000,()=>{
    console.log(`server is running on the port ${3000}..`);
});