const productService = require("../services/product.service.js");

const createProduct = async (req, res) => {
    try {
        const product = await productService.createProduct(req.body);
        return res.status(201).send(product);
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
}

const deleteProduct = async (req, res) => {
    const productId=req.params.id
    try {
        const product = await productService.deleteProduct(productId);
        return res.status(201).send(product);
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
}

const updateeProduct = async (req, res) => {
    const productId=req.params.id
    try {
        const product = await productService.updateeProduct(productId,req.body);
        return res.status(201).send(product);
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
}


const findproductbyid = async (req, res) => {
    const productId=req.params.id
    try {
        const product = await productService.findproductbyid(productId);
        return res.status(201).send(product);
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
}

const getAllProducts = async (req, res) => {
    try {
        const products = await productService.getAllProducts(req.query);
        return res.status(201).send(products);
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
}

const createMultipleProducts = async (req, res) => {
    try {
        const products = await productService.createMultipleProducts(req.body);
        return res.status(201).send({message:"products created succesfuly"});
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
}
module.exports={
    createMultipleProducts,
    getAllProducts,
    findproductbyid,
    updateeProduct,
    deleteProduct,
    createProduct

}