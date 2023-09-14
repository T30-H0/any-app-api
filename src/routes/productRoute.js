import express from "express";
import {
  createProduct,
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct,
} from "../controllers/productController.js";
const productRoute = express.Router();

// Get all products
productRoute.get("/", getProducts);

// Get product by ID
productRoute.get("/:id", getProduct);

// Create a new product
productRoute.post("/", createProduct);

// Update a product
productRoute.put("/:id", updateProduct);

// Delete product
productRoute.delete("/:id", deleteProduct);

export { productRoute };
