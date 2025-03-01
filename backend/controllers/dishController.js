import Dish from "../models/Dish.js";
import Restaurant from "../models/Restaurant.js";

// Add a new dish
export const addDish = async (req, res) => {
  try {
    const { name, price, description, image, restaurant } = req.body;
    
    if(!name || !price){
        return res.status(400).json({message:"Missing literals"});
    }
    
    const existingRestaurant = await Restaurant.findById(restaurant);
    if (!existingRestaurant) return res.status(404).json({ message: "Restaurant not found" });

    const newDish = new Dish({ name, price, description, image, restaurant });
    await newDish.save();
    
    res.status(201).json({ message: "Dish added successfully", newDish });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a dish
export const updateDish = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedDish = await Dish.findByIdAndUpdate(id, req.body, { new: true });

    if (!updatedDish) return res.status(404).json({ message: "Dish not found" });
    res.status(200).json(updatedDish);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a dish
export const deleteDish = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedDish = await Dish.findByIdAndDelete(id);

    if (!deletedDish) return res.status(404).json({ message: "Dish not found" });
    res.status(200).json({ message: "Dish deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all dishes of a specific restaurant
export const getDishesByRestaurant = async (req, res) => {
  try {
    const { restaurantId } = req.params;
    const dishes = await Dish.find({ restaurant: restaurantId });

    if (dishes.length === 0) return res.status(404).json({ message: "No dishes found for this restaurant" });

    res.status(200).json(dishes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
