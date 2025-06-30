const mongoose = require("mongoose");

const connectDB = async ()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGODB_URL);
        console.log(`databse connected successfully`)
    }
    catch(err){
        console.log(err)
    }
};

module.exports = {connectDB}