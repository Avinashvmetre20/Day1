const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },

productName:{
        type:String,
        required:true
    },
    value:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true,
    }
});

const product =mongoose.model("Product",productSchema);

module.exports = product;