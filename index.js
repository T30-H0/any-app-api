import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import { errorMiddleware } from "./src/middleware/errorMiddleware.js";
import { productRoute } from "./src/routes/productRoute.js";
import { universalLinkRoute } from "./src/routes/universalLinkRoute.js";
import { userRoute } from "./src/routes/userRoute.js";

dotenv.config();

const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use("/api/any-app", productRoute);
app.use("/", universalLinkRoute);
app.use("/api/any-app", userRoute);

app.post("/send-notification", async (req, res) => {
  const { token, title, body } = req.body;

  const message = {
    notification: {
      title,
      body,
    },
    token,
  };

  try {
    const response = await admin.messaging().send(message);
    console.log("Notification sent:", response);
    res.status(200).json({ message: "Notification sent successfully" });
  } catch (error) {
    console.error("Error sending notification:", error);
    res.status(500).json({ error: "Error sending notification" });
  }
});

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
    console.error("Error:", error);
  });
