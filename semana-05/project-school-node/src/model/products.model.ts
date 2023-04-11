import mongoose, { Schema } from "mongoose";

export const ProductSchema = new Schema({
  description: {
    type: String,
  },
  img: {
    type: String,
  },
  price: {
    type: Number,
    required: [true, "Price is a required field!"],
    min: 0.01,
  },
  quantity: {
    type: Number,
    required: [true, "Quantity is a required field!"],
    min: 1,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

export const Product = mongoose.model("Product", ProductSchema);
