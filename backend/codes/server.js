const express = require("express");
require("dotenv").config({path : "../.env"});
const cors = require("cors");
const mongodb = require("./mongodbcrt/db");
const app = express();
app.use(cors())
app.use(express.json())
const dbstart = async ()=>{
    await mongodb();
};
dbstart();
app.listen(3000,()=>{
    console.log(`Server is running on the post ${3000}...`)
});