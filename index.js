require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const productRoute = require("./routes/productRoute");
const errorMiddleware = require("./middleware/errorMiddleware");

const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT;

app.use(express.json());
app.use("/api/any-app", productRoute);

app.use(errorMiddleware);

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("Connected to Mongoose DB");
    app.listen(PORT, () => {
      console.log(`AnyApp listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("error", error);
  });
