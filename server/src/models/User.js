import mongoose from "mongoose";
import modelOptions from "./model.options.js";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  dni: {
    type: Number,
    required: true,
  },
  phone: Number,
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  salt: String,
  rol: {
    type: String,
    default: "client",
  },
  active: {
    type: Boolean,
    default: true,
  },
}, modelOptions);

export default mongoose.model("users", userSchema);
