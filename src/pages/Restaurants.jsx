import { useNavigate } from "react-router-dom";

const restaurants = [
  { id: 1, name: "Pizza Palace", image: "/pizza.jpg", rating: 4.8, cuisine: "Italian" },
  { id: 2, name: "Sushi Spot", image: "/sushi.jpg", rating: 4.5, cuisine: "Japanese" },
  { id: 3, name: "Burger Hub", image: "/burger.jpg", rating: 4.7, cuisine: "American" },
  { id: 4, name: "Taco Fiesta", image: "/taco.jpg", rating: 4.6, cuisine: "Mexican" },
  { id: 5, name: "Curry House", image: "/curry.jpg", rating: 4.9, cuisine: "Indian" },
  { id: 6, name: "BBQ Nation", image: "/bbq.jpg", rating: 4.5, cuisine: "Barbecue" },
  { id: 7, name: "Noodle Heaven", image: "/noodles.jpg", rating: 4.7, cuisine: "Chinese" },
  { id: 8, name: "Vegan Delight", image: "/vegan.jpg", rating: 4.8, cuisine: "Vegan" },
  { id: 9, name: "Steakhouse", image: "/steak.jpg", rating: 4.9, cuisine: "Steak" },
  { id: 10, name: "Doughnut World", image: "/doughnut.jpg", rating: 4.6, cuisine: "Dessert" },
  { id: 11, name: "Pasta Paradise", image: "/pasta.jpg", rating: 4.7, cuisine: "Italian" },
  { id: 12, name: "Seafood Bay", image: "/seafood.jpg", rating: 4.8, cuisine: "Seafood" },
  { id: 13, name: "Ice Cream Bliss", image: "/icecream.jpg", rating: 4.9, cuisine: "Dessert" },
  { id: 14, name: "Fried Chicken Shack", image: "/friedchicken.jpg", rating: 4.6, cuisine: "Fast Food" },
  { id: 15, name: "Biryani House", image: "/biryani.jpg", rating: 4.9, cuisine: "Indian" },
];

function Restaurants() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <h2 className="text-3xl font-bold text-center mb-6">Available Restaurants</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {restaurants.map((restaurant) => (
          <div
            key={restaurant.id}
            className="bg-white shadow-lg rounded-lg p-4 cursor-pointer hover:shadow-xl transition"
            onClick={() => navigate(`/restaurant/${restaurant.id}`)}
          >
            <img src={restaurant.image} alt={restaurant.name} className="w-full h-40 object-cover rounded-md" />
            <h3 className="text-xl font-semibold mt-2">{restaurant.name}</h3>
            <p className="text-gray-600">{restaurant.cuisine}</p>
            <p className="text-yellow-500">⭐ {restaurant.rating} Rating</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Restaurants;
