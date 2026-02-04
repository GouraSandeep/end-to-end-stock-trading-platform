import mongoose from "mongoose";

export const PositionsSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    product: { type: String, trim: true, required: true },
    name: { type: String, trim: true, required: true },
    qty: { type: Number, default: 0 },
    avg: { type: Number, default: 0 },
    price: { type: Number, default: 0 },
    net: { type: String, default: "0" },
    day: { type: String, default: "0" },
    isLoss: { type: Boolean, default: false },
  },
  {
    strict: false,
  },
);
