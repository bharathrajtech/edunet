import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  cuisine: { type: String, required: true },
  image: { type: String }, // Optional restaurant image
});

export default mongoose.model("Restaurant", restaurantSchema);
