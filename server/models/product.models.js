const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    imageUrl: String,
    tags: [String],
    rating: {
      type: Number,
      min: 0,
      max: 5,
    },
    cost: {
      type: Number,
      required: true,
    },
    deliveryTime: Number,
  },
  { timestamps: true }
);

export const Product = mongoose.model("Product", productSchema);
