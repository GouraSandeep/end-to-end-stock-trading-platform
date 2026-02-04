import mongoose from "mongoose";
import { userSchema } from "../schemas/UserSchema.js";

export const userModel = mongoose.model("user", userSchema);
