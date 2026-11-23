const express=require("express");
require("dotenv").config({path : "../.env"});
const mongodb = require("./mongodbcrt/db");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
async function mongoconnect() {
    await mongodb();
}
mongoconnect();
app.listen(3000,()=>{
    console.log(`server is running on the port ${3000}..`);
});