const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// User registration 
async function userregistration(req,res){
    try{
        const {name , email , password , role} = req.body;
        if (!name || !email || !password ){
            return res.status(400).json({
                message : "Where the name , email & password should not be empty"
            });
        }
        const existuser = await User.findOne({email});
        if (existuser){
            return res.status(409).json({
                message : "User already exist in the database"
            });
        }
        const hashedpassword = await bcrypt.hash(password,10);
        const user = await User.create({name,email,password:hashedpassword,role});
        const JWT = await jwt.sign(
            {id:user._id},
            process.env.JWT_SECRET,
            {expiresIn : process.env.JWT_EXPIRES_IN ||"8d"}
        );
        res.status(201).json({
            message : "Account Created successfully",
            data : user
        });
    }catch(error){
        console.log(error);
        res.status(500).json({
            message : "Error in the data creation in the backend",
        });
    }
}
// User login 
async function userlogin(req,res) {
    try{
        const {email,password} = req.body;
        if (!email || !password){
            return res.status(400).json({
                message : "Email and password was required"
            });
        }
        const user = await User.findOne({email});
        if (!user){
            return res.status(401).json({
                message : "Invalid email or password"
            });
        }
        const passwordcomp = await bcrypt.compare(password,user.password);
        if (!passwordcomp){
            return res.status(401).json({
                message : "Invalid email or the password"
            });
        }
        const JWT = await jwt.sign(
            {id : user._id},
            process.env.JWT_SECRET,
            {expiresIn : process.env.JWT_EXPIRES_IN || "8d"}
        );
        res.status(200).json({
            message : "Login successfully",
            token : JWT,
            data : user
        });
    }catch(error){
        console.log(error);
        res.status(500).json({
            message : "error in the data base"
        });
    }
}
module.exports={userregistration,userlogin};