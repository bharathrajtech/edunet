import express from "express";
import { addRestaurant, updateRestaurant, deleteRestaurant, getRestaurants } from "../controllers/restaurantController.js";
import { verifyAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", verifyAdmin, addRestaurant);
router.put("/:id", verifyAdmin, updateRestaurant);
router.delete("/:id", verifyAdmin, deleteRestaurant);
router.get("/", getRestaurants);

export default router;
