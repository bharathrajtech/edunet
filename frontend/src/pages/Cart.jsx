import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

  // Calculate total price
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen p-6 bg-orange-100">
      <h1 className="text-3xl font-bold mb-4">Your Cart 🛒</h1>
      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty. <Link to="/restaurants" className="text-blue-500">Browse Restaurants</Link></p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md">
              <div>
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p className="text-gray-600">${item.price} x {item.quantity}</p>
              </div>
              <div className="flex items-center space-x-2">
                <button onClick={() => decreaseQuantity(item.id)} className="px-3 py-1 bg-gray-300 rounded">-</button>
                <span className="text-lg">{item.quantity}</span>
                <button onClick={() => increaseQuantity(item.id)} className="px-3 py-1 bg-gray-300 rounded">+</button>
                <button onClick={() => removeFromCart(item.id)} className="ml-4 text-red-500">Remove</button>
              </div>
            </div>
          ))}
          <h2 className="text-2xl font-bold mt-6">Total: ${totalPrice.toFixed(2)}</h2>
        </div>
      )}
    </div>
  );
}

export default Cart;
