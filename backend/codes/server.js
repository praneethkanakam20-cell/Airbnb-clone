const express = require("express")
const cors = require("cors");
const app = express();
app.use(cors())
app.use(express.json())
app.get("/",(req,res)=>{
    res.send({
        message : "Backend server is working"
    });
})
app.get("/api",(req,res)=>{
    res.status(200).json({
        message : "This is api"
    });
});
app.listen(3000,()=>{
    console.log(`Server is running on the post ${3000}...`)
});