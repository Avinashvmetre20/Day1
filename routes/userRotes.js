const express = require("express");
const{register,login} = require("../controllers/userController")

const userRoter = express.Router();

userRoter.post("/login",login)
userRoter.post("/register",register);
// userRoter.get("/user",getuserController)

module.exports = userRoter;