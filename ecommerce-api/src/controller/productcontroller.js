const productService = require("../services/productservices.js");

// Create a single product
const createProduct = async (req, res) => {
    try {
        const product = await productService.createProduct(req.body);
        return res.status(201).send(product); // 201 for created
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
};

// Delete a product by ID
const deleteProduct = async (req, res) => {
    const productId = req.params.id;
    try {
        const product = await productService.deleteProduct(productId);
        return res.status(200).send(product); // 200 for success
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
};

// Update a product by ID
const updateProduct = async (req, res) => {
    const productId = req.params.id;
    try {
        const product = await productService.updateProduct(productId, req.body);
        return res.status(200).send(product); // 200 for success
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
};

// Find product by ID
const findProductById = async (req, res) => {
    const productId = req.params.id;
    try {
        const product = await productService.findProductById(productId);
        return res.status(200).send(product); // 200 for success
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
};

// Get all products (with optional query filters)
const getAllProducts = async (req, res) => {
    try {
        const products = await productService.getAllProducts(req.query);
        return res.status(200).send(products); // 200 for success
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
};

// Create multiple products
const createMultipleProducts = async (req, res) => {
    try {
        await productService.createMultipleProducts(req.body);
        return res.status(201).send({ message: "Products created successfully" }); // 201 for created
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
};

// Export all functions
module.exports = {
    createProduct,
    deleteProduct,
    updateProduct,
    findProductById,
    getAllProducts,
    createMultipleProducts,
};
