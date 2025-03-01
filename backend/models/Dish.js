import mongoose from "mongoose";

const dishSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  image: { type: String }, // Optional dish image
  restaurant: { type: mongoose.Schema.Types.ObjectId, ref: "Restaurant", required: true },
});

export default mongoose.model("Dish", dishSchema);
