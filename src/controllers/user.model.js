import mongoose from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    min: 3,
  },
  password: {
    type: String,
    required: true,
    min: 5,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  roles: {
    type: String,
    required: true,
  },
});
