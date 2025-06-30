const User = require("../model/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs")


const register = async (req,res)=>{
    const {name,email,password} = req.body;
    try{
        const userExist = await User.findOne({email});
        if(userExist){
            return res.status(400).json({msg:"user already exist"})
        }
        const hasedPassed = await bcrypt.hash(password, 10);

        const user = await User.create({name,password:hasedPassed,email})
        const token = jwt.sign({userId:user._id,email:email},process.env.JWT_SECRET,{expiresIn:"1h"})
        res.status(201).json({msg:"Sucessfull",Token :token})
    }
    catch(err){
        res.status(500).json({msg:err.message})
    }
    
}

const login = async (req,res)=>{
    const {email,password} = req.body;
    try{
        const userExist = await User.findOne({email});
        if(!userExist){
            return res.status(400).json({msg:"Please register"})
        }
        const isMatch = await bcrypt.compare(password,userExist.password);
        if(!isMatch){
            return res.status(401).json({msg:"Invalid credentials"})
        }
        const token = jwt.sign({userId:userExist._id,email:userExist.email},process.env.JWT_SECRET,{expiresIn:"1h"})
        res.status(201).json({msg:"Sucessfull",Token :token})
    }
    catch(err){
        res.status(500).json({msg:err.message})
    }
    
}


module.exports = {register,login}