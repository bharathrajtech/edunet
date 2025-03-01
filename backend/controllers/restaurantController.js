import Restaurant from "../models/Restaurant.js";

// Add a new restaurant
export const addRestaurant = async (req, res) => {
  try {
    const { name, location, cuisine, image } = req.body;
    const newRestaurant = new Restaurant({ name, location, cuisine, image });
    await newRestaurant.save();
    res.status(201).json({ message: "Restaurant added successfully", newRestaurant });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a restaurant
export const updateRestaurant = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedRestaurant = await Restaurant.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedRestaurant) return res.status(404).json({ message: "Restaurant not found" });
    res.status(200).json(updatedRestaurant);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a restaurant
export const deleteRestaurant = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedRestaurant = await Restaurant.findByIdAndDelete(id);
    if (!deletedRestaurant) return res.status(404).json({ message: "Restaurant not found" });
    res.status(200).json({ message: "Restaurant deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all restaurants
export const getRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.status(200).json(restaurants);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
