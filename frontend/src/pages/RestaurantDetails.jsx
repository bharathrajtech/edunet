import { useParams } from "react-router-dom";

const restaurantData = {
  1: { name: "Pizza Palace", image: "/pizza.jpg", foodItems: [
    { name: "Pepperoni Pizza", image: "/pepperoni.jpg", price: "$12.99" },
    { name: "Margherita Pizza", image: "/margherita.jpg", price: "$10.99" },
    { name: "BBQ Chicken Pizza", image: "/bbq_chicken.jpg", price: "$13.99" },
  ] },
  2: { name: "Sushi Spot", image: "/sushi.jpg", foodItems: [
    { name: "Salmon Sushi", image: "/salmon.jpg", price: "$9.99" },
    { name: "Tuna Roll", image: "/tuna_roll.jpg", price: "$8.99" },
    { name: "Dragon Roll", image: "/dragon_roll.jpg", price: "$11.99" },
  ] },
  3: { name: "Burger Hub", image: "/burger.jpg", foodItems: [
    { name: "Cheese Burger", image: "/cheese_burger.jpg", price: "$7.99" },
    { name: "Veggie Burger", image: "/veggie_burger.jpg", price: "$6.99" },
    { name: "BBQ Burger", image: "/bbq_burger.jpg", price: "$8.99" },
  ] },
  4: { name: "Taco Fiesta", image: "/taco.jpg", foodItems: [
    { name: "Beef Taco", image: "/beef_taco.jpg", price: "$4.99" },
    { name: "Chicken Taco", image: "/chicken_taco.jpg", price: "$5.49" },
    { name: "Fish Taco", image: "/fish_taco.jpg", price: "$6.49" },
  ] },
  5: { name: "Curry House", image: "/curry.jpg", foodItems: [
    { name: "Butter Chicken", image: "/butter_chicken.jpg", price: "$12.99" },
    { name: "Paneer Tikka", image: "/paneer_tikka.jpg", price: "$11.99" },
    { name: "Lamb Curry", image: "/lamb_curry.jpg", price: "$14.99" },
  ] },
};

function RestaurantDetails() {
  const { id } = useParams();
  const restaurant = restaurantData[id];

  if (!restaurant) {
    return <div className="text-center py-10 text-red-500">Restaurant not found</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">{restaurant.name}</h2>
        <img src={restaurant.image} alt={restaurant.name} className="w-full h-60 object-cover rounded-lg mb-6" />
        <h3 className="text-2xl font-semibold mb-4">Menu</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {restaurant.foodItems.map((food, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-4">
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

export default RestaurantDetails;
