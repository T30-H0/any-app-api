import mongoose from "mongoose";

const userScheme = mongoose.Schema(
  {
    email: {
      type: String,
      require: [true, "Please enter a valid Email"],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      require: [true, "Please enter a valid password"],
    },
    username: {
      type: String,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

const user = mongoose.model("User", userScheme);

export { user, userScheme };
