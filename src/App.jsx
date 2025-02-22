import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Navbar from "./components/Navbar";
import Restaurants from "./pages/Restaurants";
import RestaurantDetails from "./pages/RestaurantDetails";
import Cart from "./pages/Cart";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminSignup from "./pages/admin/AdminSignup";
import AdminRestaurants from "./pages/admin/AdminRestaurants";
import AdminDishes from "./pages/admin/AdminDishes";
import AdminOrders from "./pages/admin/AdminOrders";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/restaurant/:id" element={<RestaurantDetails />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/admin-signup" element={<AdminSignup />} />
        <Route path="/admin-restaurants" element={<AdminRestaurants />} />
        <Route path="/admin-dishes" element={<AdminDishes />} />
        <Route path="/admin-orders" element={<AdminOrders />} />
      </Routes>
    </>
  );
}

export default App;
