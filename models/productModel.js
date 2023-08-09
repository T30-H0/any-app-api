const mongoose = require("mongoose");

const productScheme = mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Please enter a product name"]
    },
    quantity: {
      type: Number,
      required: true,
      default: 0
    },
    price: {
      type: Number,
      required: true
    },
    image: {
      type: String,
      required: false
    }
  },
  {
    timestamps: true
  }
);

const product = mongoose.model("Product", productScheme);
module.exports = product;
