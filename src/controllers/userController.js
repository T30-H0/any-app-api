import { compare, hash } from "bcrypt";
import "dotenv/config";
import pkg from "jsonwebtoken";
import { user } from "../models/userModel.js";

const SECRET_KEY = process.env.SECRET_KEY;

const { sign } = pkg;

const signUp = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const existingUser = await user.findOne({ email: email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    if (username) {
      existingUser.username = username;
    }

    const hashedPassword = await hash(password, 10);
    const result = await user.create({
      email: email,
      password: hashedPassword,
      username: username || null,
    });

    const token = sign({ email: res.email, id: res._id }, SECRET_KEY);
    res.status(201).json({ user: result, token: token });
  } catch (error) {
    throw new Error(error.message);
  }
};

const signIn = async (req, res) => {
  console.log("req.body", req.body);
  const { email, password, username } = req.body;
  try {
    const existingUser = await user.findOne({ email: email });
    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    }
    if (username !== null) {
      existingUser.username = username;
    }
    const matchPassword = await compare(password, existingUser.password);
    if (!matchPassword) {
      return res.status(400).json({ message: " Invalid Credentials" });
    }

    const token = sign(
      { email: existingUser.email, id: existingUser._id },
      SECRET_KEY
    );
    res.status(201).json({ user: existingUser, token: token });
  } catch (error) {
    throw new Error(error.message);
  }
};

export { signIn, signUp };
