const express = require("express");
const router = express.Router();
const {userregistration,userlogin} = require("../controllers/usercontroller");
router.post("/register",userregistration);
router.post("/login",userlogin);
module.exports=router;
