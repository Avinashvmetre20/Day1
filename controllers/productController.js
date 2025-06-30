
const  product = require('../model/product');

const addProduct = async (req, res) => {
    try {
        const { productName, value, category } = req.body;
        // const userID = req.user.id;
        // console.log(userID)
        const newprodct = await product.create({
            userID:req.user.id, productName, value, category
        });

        // console.log(newprodct)

        res.status(201).json(newprodct);
    } catch (error) {
        res.status(500).json({ msg: "error", message: error.message });
    }
};

const getProduct = async (req, res) => {
    try {
        const products = await product.find({ userID:req.user.id });
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const updateproduct = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;

        const product = await product.findByIdAndUpdate(id, updatedData, { new: true });

        if (!product) {
            return res.status(404).json({ message: 'product not found' });
        }

        res.json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteproduct = async (req, res) => {
    try {
        const { id } = req.params;

        const product = await product.findByIdAndDelete(id);

        if (!product) {
            return res.status(404).json({ message: 'product not found' });
        }

        res.json({ message: 'product deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { addProduct,getProduct,updateproduct,deleteproduct };