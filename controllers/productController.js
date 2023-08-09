const Product = require("../models/productModel");
const asyncHandler = require("express-async-handler");

//get all product
const getProduct = asyncHandler(async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

//get product by id
const getProducts = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

//create a new product
const createProduct = asyncHandler(async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

//update product
const updateProduct = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findByIdAndUpdate(id, req.body);
    if (!product) {
      if (!product) {
        res.status(404);
        throw new Error(`cannot find any product with ID ${id}`);
      }
    }
    const updatedProd = await Product.findById(id);
    res.status(200).json(updatedProd);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

//delete product
const deleteProduct = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      res.status(404);
      throw new Error(`cannot find any product with ID ${id}`);
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

module.exports = {
  getProduct,
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct
};
