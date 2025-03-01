import express from "express";
import { addDish, updateDish, deleteDish, getDishesByRestaurant } from "../controllers/dishController.js";
import { verifyAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", verifyAdmin, addDish);
router.put("/:id", verifyAdmin, updateDish);
router.delete("/:id", verifyAdmin, deleteDish);
router.get("/:restaurantId", getDishesByRestaurant);

export default router;
