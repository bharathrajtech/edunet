import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";


function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const { cart } = useCart();


  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <Link to="/" className="text-xl font-bold !no-underline text-white">QuickEat</Link>
      <div className="flex justify-between">
      <div className="space-x-4">
        <Link to="/restaurants" className="!no-underline text-white">Restaurants</Link>
        <Link to="/cart" className="!no-underline text-white">
          Cart 🛒 ({cart.length})
        </Link>
      </div>
        <div>
          {user ? (
            <>
              <span className="mr-4">{user.name}</span>
              <button onClick={logout} className="bg-red-500 p-2 rounded">Logout</button>
            </>
          ) : (
            <Link to="/signin" className="mr-4">Sign In</Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
