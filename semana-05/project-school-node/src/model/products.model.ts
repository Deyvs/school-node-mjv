import mongoose, { Schema } from "mongoose";
// export interface Product {
//   id: number;
//   description: string;
//   img: string;
//   price: number;
//   quantity: number;
// }

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
  },
  quantity: {
    type: Number,
    required: [true, "Quantity is a required field!"],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

export const Product = mongoose.model("Product", ProductSchema);
