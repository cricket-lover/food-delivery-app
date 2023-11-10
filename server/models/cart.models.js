const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    item: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
    quantity: {
      type: Number,
      required: true,
      min: 1,
    },
  },
  { timestamps: true }
);

export const Cart = mongoose.model("Cart", cartSchema);
