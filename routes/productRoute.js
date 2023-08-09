const express = require("express");
const router = express.Router();
const {
  getProduct,
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct
} = require("../controllers/productController");

// get all product
router.get("/", getProduct);

//get product by id
router.get("/:id", getProducts);

//create new product
router.post("/", createProduct);

// update a product
router.put("/:id", updateProduct);

// delete product
router.delete("/:id", deleteProduct);

module.exports = router;