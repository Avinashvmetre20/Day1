const express = require("express");
const dotenv = require("dotenv");
const {connectDB} = require("./config/db");
const userRouter = require("./routes/userRotes")
const productRoter = require("./routes/productRoutes")
dotenv.config();

const app = express();
app.use(express.json())

app.use("/api",userRouter);
app.use("/api",productRoter);

const PORT = process.env.PORT || 8081;
app.listen(PORT,()=>{
    connectDB()
    console.log("Port is running on 8080")
})