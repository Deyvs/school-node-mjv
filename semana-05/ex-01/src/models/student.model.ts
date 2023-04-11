import mongoose, { Schema } from "mongoose";

export const studentSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is a required field!"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Email is a required field!"],
    unique: true,
  },
  document: {
    type: String,
    required: [true, "Document is a required field!"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Name is a required field!"],
  },
  age: {
    type: Number,
  },
  phone: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

export const Student = mongoose.model("Student", studentSchema);
