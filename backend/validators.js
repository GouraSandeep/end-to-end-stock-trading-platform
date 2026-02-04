import Joi from "joi";

/* ===================== HOLDING ===================== */
export const holdingSchema = Joi.object({
  name: Joi.string().trim().required(),
  symbol: Joi.string().trim().optional(),
  qty: Joi.number().positive().required(),
  price: Joi.number().positive().required(),
  avg: Joi.number().positive().optional(),
  net: Joi.number().optional(),
  day: Joi.number().optional(),
  isLoss: Joi.boolean().optional(),
});

/* ===================== POSITION ===================== */
export const positionSchema = Joi.object({
  product: Joi.string().optional(),
  name: Joi.string().required(),
  qty: Joi.number().required(),
  avg: Joi.number().required(),
  price: Joi.number().required(),
  net: Joi.string().optional(),
  day: Joi.string().optional(),
  isLoss: Joi.boolean().optional(),
});

/* ===================== ORDER ===================== */
export const orderSchema = Joi.object({
  name: Joi.string().required(),
  qty: Joi.number().positive().required(),
  price: Joi.number().positive().required(),
  mode: Joi.string().valid("BUY", "SELL").required(),
});

/* ===================== AUTH ===================== */
export const userSchema = Joi.object({
  email: Joi.string().email().required(),
  username: Joi.string().min(3).required(),
  password: Joi.string().min(6).required(),
});

export const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});
