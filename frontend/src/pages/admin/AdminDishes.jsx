import { useState } from "react";

function AdminDishes() {
  const [dishes, setDishes] = useState(
    JSON.parse(localStorage.getItem("dishes")) || []
  );
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [restaurantId, setRestaurantId] = useState("");

  const addDish = () => {
    if (!name || !price || !restaurantId) return alert("All fields are required!");

    const newDishes = [...dishes, { id: Date.now(), name, price, restaurantId }];
    setDishes(newDishes);
    localStorage.setItem("dishes", JSON.stringify(newDishes));

    setName("");
    setPrice("");
    setRestaurantId("");
  };

  const deleteDish = (id) => {
    const updated = dishes.filter((d) => d.id !== id);
    setDishes(updated);
    localStorage.setItem("dishes", JSON.stringify(updated));
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Manage Dishes</h2>
      <div className="mb-4">
        <input 
          type="text" placeholder="Dish Name"
          value={name} onChange={(e) => setName(e.target.value)}
          className="border p-2 mr-2"
        />
        <input 
          type="number" placeholder="Price"
          value={price} onChange={(e) => setPrice(e.target.value)}
          className="border p-2 mr-2"
        />
        <input 
          type="text" placeholder="Restaurant ID"
          value={restaurantId} onChange={(e) => setRestaurantId(e.target.value)}
          className="border p-2 mr-2"
        />
        <button onClick={addDish} className="bg-blue-500 text-white p-2">Add</button>
      </div>
      <ul>
        {dishes.map((dish) => (
          <li key={dish.id} className="flex justify-between items-center p-2 border-b">
            {dish.name} - ₹{dish.price} (Restaurant ID: {dish.restaurantId})
            <button 
              onClick={() => deleteDish(dish.id)} 
              className="bg-red-500 text-white p-1 rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminDishes;
