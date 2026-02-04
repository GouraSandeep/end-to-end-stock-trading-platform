import mongoose from "mongoose";
import { PositionsSchema } from "../schemas/PositionsSchema.js";

export const PositionsModel = mongoose.model("positions", PositionsSchema);
