import mongoose from "mongoose";

export const HoldingsSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    name: { type: String, trim: true, required: true },
    qty: { type: Number, default: 0 },
    avg: { type: Number, default: 0 },
    price: { type: Number, default: 0 },
    net: { type: String, default: "0" },
    day: { type: String, default: "0" },
  },
  {
    strict: false,
    minimize: false,
  },
);
