import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
const restaurants = [
  { id: 1, name: "Pizza Palace", image: "/pizza.png", rating: 4.8 },
  { id: 2, name: "Sushi Spot", image: "/sushi.png", rating: 4.5 },
  { id: 3, name: "Burger Hub", image: "/burger.png", rating: 4.7 },
];

const featuredFoods = [
  { id: 1, name: "Pepperoni Pizza", image: "/pepperoni.png", price: "$12.99" },
  { id: 2, name: "California Roll", image: "/california_roll.png", price: "$8.99" },
  { id: 3, name: "Cheese Burger", image: "/cheese_burger.png", price: "$10.99" },
];

function Home() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate(); 


  const handleClick = () => {
    if (!user) {
      navigate("/signin");
    } else {
      navigate("/restaurants");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="relative bg-cover bg-center h-[400px]" style={{ backgroundImage: "url('/hero.png')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl font-bold">Delicious Food Delivered Fast</h1>
          <p className="mt-2 text-lg">Order from top-rated restaurants near you!</p>
          <button className="mt-4 bg-red-500 px-6 py-2 rounded-full text-white font-semibold hover:bg-red-600" onClick={handleClick}>
            {user ? "Explore Restaurants" : "Sign In to Order"}
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto py-10">
        <h2 className="text-3xl font-bold text-center mb-6">Top Restaurants</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {restaurants.map((restaurant) => (
            <div key={restaurant.id} className="bg-white shadow-lg rounded-lg p-4">
              <img src={restaurant.image} alt={restaurant.name} className="w-full h-40 object-cover rounded-md" />
              <h3 className="text-xl font-semibold mt-2">{restaurant.name}</h3>
              <p className="text-gray-600">⭐ {restaurant.rating} Rating</p>
            </div>
          ))}
           <button
              onClick={() => navigate("/restaurants")}
              className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition"
            >
              Browse Restaurants 🍽️
          </button>
        </div>
      </div>

      {/* Featured Food Section */}
      <div className="max-w-6xl mx-auto py-10">
        <h2 className="text-3xl font-bold text-center mb-6">Featured Foods</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredFoods.map((food) => (
            <div key={food.id} className="bg-white shadow-lg rounded-lg p-4">
              <img src={food.image} alt={food.name} className="w-full h-40 object-cover rounded-md" />
              <h3 className="text-xl font-semibold mt-2">{food.name}</h3>
              <p className="text-gray-800 font-bold">{food.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
