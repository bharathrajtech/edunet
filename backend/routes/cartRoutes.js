import express from "express";
import {
  addToCart,
  getCart,
  updateCartItem,
  removeFromCart,
  clearCart,
} from "../controllers/cartController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/add", authMiddleware, addToCart);
router.get("/", authMiddleware, getCart);
router.put("/update/:dishId", authMiddleware, updateCartItem);
router.delete("/remove/:dishId", authMiddleware, removeFromCart);
router.delete("/clear", authMiddleware, clearCart);

export default router;
