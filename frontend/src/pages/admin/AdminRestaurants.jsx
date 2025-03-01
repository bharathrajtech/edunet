import { useState } from "react";

function AdminRestaurants() {
  const [restaurants, setRestaurants] = useState(
    JSON.parse(localStorage.getItem("restaurants")) || []
  );
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");

  const addRestaurant = () => {
    if (!name || !location) return alert("Please enter all fields!");
    
    const newRestaurants = [...restaurants, { id: Date.now(), name, location }];
    setRestaurants(newRestaurants);
    localStorage.setItem("restaurants", JSON.stringify(newRestaurants));
    
    setName("");
    setLocation("");
  };

  const deleteRestaurant = (id) => {
    const updated = restaurants.filter((r) => r.id !== id);
    setRestaurants(updated);
    localStorage.setItem("restaurants", JSON.stringify(updated));
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Manage Restaurants</h2>
      <div className="mb-4">
        <input 
          type="text" placeholder="Restaurant Name"
          value={name} onChange={(e) => setName(e.target.value)}
          className="border p-2 mr-2"
        />
        <input 
          type="text" placeholder="Location"
          value={location} onChange={(e) => setLocation(e.target.value)}
          className="border p-2 mr-2"
        />
        <button onClick={addRestaurant} className="bg-blue-500 text-white p-2">Add</button>
      </div>
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id} className="flex justify-between items-center p-2 border-b">
            {restaurant.name} - {restaurant.location}
            <button 
              onClick={() => deleteRestaurant(restaurant.id)} 
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

export default AdminRestaurants;
