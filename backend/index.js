import dotenv from "dotenv";
dotenv.config();
console.log("ENV CHECK:", process.env.JWT_SECRET);

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import argon2 from "argon2";

import { HoldingsModel } from "./model/HoldingsModel.js";
import { PositionsModel } from "./model/PositionsModel.js";
import { OrdersModel } from "./model/OrdersModel.js";
import { userModel } from "./model/UserModel.js";

import { requireAuth } from "./middlewares/requireAuth.js";
import { createSecretToken } from "./util/SecretToken.js";
import { verifyToken } from "./util/verifyToken.js";

import {
  normalizeHoldingInput,
  normalizePositionInput,
  normalizeOrderInput,
} from "./normalizers.js";

import {
  holdingSchema,
  positionSchema,
  orderSchema,
  userSchema,
  loginSchema,
} from "./validators.js";

import {
  holdingListResponse,
  holdingSingleResponse,
  positionListResponse,
  positionSingleResponse,
  orderSingleResponse,
  ordersListResponse,
} from "./formatters.js";

const app = express();
const PORT = process.env.PORT || 3002;
const MONGO_URL = process.env.MONGO_URL;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

/* ===================== MIDDLEWARE ===================== */

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:3001",
      "http://localhost:5173",
    ],
    credentials: true,
  }),
);

/* ===================== AUTH ===================== */

app.post("/signup", async (req, res) => {
  try {
    const { error, value } = userSchema.validate(req.body, {
      stripUnknown: true,
    });

    if (error) {
      return res.status(400).json({ message: "Invalid signup data" });
    }

    const { email, username, password } = value;

    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const hashedPassword = await argon2.hash(password, {
      type: argon2.argon2i,
    });

    await userModel.create({
      email,
      username,
      password: hashedPassword,
    });

    res.status(201).json({ message: "Signup successful" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { error, value } = loginSchema.validate(req.body, {
      stripUnknown: true,
    });

    if (error) {
      return res.status(400).json({ message: "Invalid login data" });
    }

    const { email, password } = value;

    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const valid = await argon2.verify(user.password, password);
    if (!valid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = createSecretToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      path: "/",
      maxAge: 3 * 24 * 60 * 60 * 1000,
    });

    res.json({ message: "Login successful" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

app.get("/me", requireAuth, (req, res) => {
  res.status(200).json({ user: req.user });
});

/* ===================== PROTECTED DATA ===================== */

app.get("/allHoldings", requireAuth, async (req, res) => {
  try {
    const holdings = await HoldingsModel.find({
      userId: req.user.id,
    }).lean();

    res.json(holdingListResponse(holdings));
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: "Failed to fetch holdings",
    });
  }
});

app.get("/allOrders", requireAuth, async (req, res) => {
  const orders = await OrdersModel.find({ userId: req.user.id }).lean();
  res.json(ordersListResponse(orders));
});

app.get("/allPositions", requireAuth, async (req, res) => {
  const positions = await PositionsModel.find({ userId: req.user.id }).lean();
  res.json(positionListResponse(positions));
});

app.get("/allUsers", requireAuth, async (req, res) => {
  const users = await userModel.find({}, "-password").lean();
  res.json(users);
});

app.post("/logout", (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    sameSite: "strict",
    secure: false, // true in production (HTTPS)
  });

  return res.status(200).json({ message: "Logged out successfully" });
});

/* ===================== CREATE ORDER ===================== */

app.post("/newOrder", verifyToken, async (req, res) => {
  try {
    console.log("new order api hit");

    const normalized = normalizeOrderInput(req.body);

    const { error, value } = orderSchema.validate(normalized, {
      stripUnknown: true,
      convert: true,
    });

    if (error) {
      return res.status(400).json({
        status: "error",
        message: "Invalid order data",
        errors: error.details?.map((d) => d.message),
      });
    }

    const order = await OrdersModel.create({
      ...value,
      userId: req.user.id,
      status: "PENDING",
    });

    res.status(201).json({
      status: "success",
      orderId: order._id,
      data: orderSingleResponse(order),
    });
  } catch (err) {
    console.error("Order creation failed:", err);
    res.status(500).json({
      status: "error",
      message: "Failed to place order",
    });
  }
});

console.log("buy successful");

app.post("/holding/add", verifyToken, async (req, res) => {
  try {
    const normalized = normalizeHoldingInput(req.body);

    normalized.avg = Number.isFinite(normalized.avg)
      ? normalized.avg
      : normalized.price;

    normalized.net = Number.isFinite(Number(normalized.net))
      ? Number(normalized.net)
      : 0;

    normalized.day = Number.isFinite(Number(normalized.day))
      ? Number(normalized.day)
      : 0;

    const { error, value } = holdingSchema.validate(normalized, {
      abortEarly: false,
      stripUnknown: true,
      convert: true,
    });

    if (error) {
      return res.status(400).json({
        status: "error",
        message: "Invalid Holdings payload",
        errors: error.details.map((d) => d.message),
      });
    }

    const holding = await HoldingsModel.create({
      ...value,
      userId: req.user.id,
    });

    res.status(201).json({
      status: "success",
      holdingId: holding._id,
      data: holdingSingleResponse(holding),
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: "Failed to create holding",
    });
  }
});

app.delete("/holding/remove", verifyToken, async (req, res) => {
  try {
    let { name, qty } = req.body;

    qty = Number(qty);
    if (!name || !Number.isFinite(qty) || qty <= 0) {
      return res.status(400).json({ message: "Invalid sell data" });
    }

    const holding = await HoldingsModel.findOne({ name });

    if (!holding) {
      return res.status(404).json({ message: "Holding not found" });
    }

    if (holding.qty < qty) {
      return res.status(400).json({
        message: "Insufficient quantity to sell",
      });
    }

    const remainingQty = holding.qty - qty;

    if (remainingQty === 0) {
      await HoldingsModel.deleteOne({ _id: holding._id });
      return res
        .status(200)
        .json({ message: "Holding fully sold and removed" });
    }

    holding.qty = remainingQty;
    await holding.save();

    return res.status(200).json({
      message: "Holding updated after sell",
      holding,
    });
  } catch (err) {
    console.error("SELL REMOVE ERROR:", err);
    return res.status(500).json({ message: "Failed to process sell" });
  }
});

/* ===================== DB ===================== */

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error(err));
