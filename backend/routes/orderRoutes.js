import express from "express";
import { verifyUser, verifyAdmin } from "../middleware/authMiddleware.js";
import Order from "../models/Order.js";

const router = express.Router();

// 📌 Place a New Order
router.post("/", verifyUser, async (req, res) => {
  try {
    const { restaurantId, items, totalPrice } = req.body;

    if (!restaurantId || !items || items.length === 0 || !totalPrice) {
      return res.status(400).json({ message: "Invalid order data." });
    }

    const newOrder = new Order({
      user: req.user.id,
      restaurant: restaurantId,
      items,
      totalPrice,
    });

    await newOrder.save();
    res.status(201).json({ message: "Order placed successfully!", order: newOrder });
  } catch (error) {
    res.status(500).json({ message: "Internal server error." });
  }
});

// 📌 Get User Orders
router.get("/", verifyUser, async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id }).populate("restaurant items.dish");
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: "Internal server error." });
  }
});

// 📌 Get All Orders (Admin)
router.get("/all", verifyAdmin, async (req, res) => {
  try {
    const orders = await Order.find().populate("user restaurant items.dish");
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: "Internal server error." });
  }
});

// 📌 Update Order Status (Admin)
router.put("/:orderId", verifyAdmin, async (req, res) => {
  try {
    const { status } = req.body;
    const order = await Order.findById(req.params.orderId);

    if (!order) {
      return res.status(404).json({ message: "Order not found." });
    }

    order.status = status;
    await order.save();
    res.json({ message: "Order updated successfully.", order });
  } catch (error) {
    res.status(500).json({ message: "Internal server error." });
  }
});

export default router;
