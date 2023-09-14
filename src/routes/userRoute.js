import express from "express";
const userRoute = express.Router();

import { signIn, signUp } from "../controllers/userController.js";

userRoute.post("/signup", signUp);

userRoute.post("/signin", signIn);

export { userRoute };
