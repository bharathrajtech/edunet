import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import restaurantData from "../data/restaurants"; // Your dummy restaurant data

function RestaurantFood() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const restaurant = restaurantData.find((r) => r.id === parseInt(id));

  return (
    <div className="min-h-screen p-6 bg-orange-100">
      <h1 className="text-3xl font-bold">{restaurant.name}</h1>
      <p className="text-gray-700 mb-4">{restaurant.description}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {restaurant.dishes.map((dish) => (
          <div key={dish.id} className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">{dish.name}</h2>
            <p className="text-gray-600">${dish.price}</p>
            <button
              onClick={() => addToCart(dish)}
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RestaurantFood;
