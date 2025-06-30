const express = require("express");
const {protect} = require("../middleware/userMiddle")
const{addProduct,getProduct,updateproduct,deleteproduct} = require("../controllers/productController")

const productRoter = express.Router();

productRoter.post("/create",protect,addProduct)
productRoter.get("/get",getProduct);
productRoter.post("/:id",updateproduct);
productRoter.delete("/:id",deleteproduct);

module.exports = productRoter;