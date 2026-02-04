import mongoose from "mongoose";

export const OrdersSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    name: { type: String, trim: true, required: true },
    qty: { type: Number, default: 1 },
    price: { type: Number, default: 0 },
    mode: {
      type: String,
      enum: ["BUY", "SELL"],
      uppercase: true,
      required: true,
    },
  },
  {
    strict: false,
  },
);
