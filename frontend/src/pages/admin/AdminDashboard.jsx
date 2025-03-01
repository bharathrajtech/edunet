import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AdminContext from "../../context/AdminContext";

function AdminDashboard() {
  const { admin, logout } = useContext(AdminContext);
  const navigate = useNavigate();

  if (!admin) {
    navigate("/admin/login");
    return null;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>
      <div className="mt-6 space-x-4">
        <Link to="/admin-restaurants" className="bg-gray-800 text-white p-2 rounded">Manage Restaurants</Link>
        <Link to="/admin-dishes" className="bg-gray-800 text-white p-2 rounded">Manage Dishes</Link>
        <Link to="/admin-orders" className="bg-gray-800 text-white p-2 rounded">View Orders</Link>
      </div>
      <button onClick={logout} className="mt-6 bg-red-500 p-2 text-white rounded">
        Logout
      </button>
    </div>
  );
}

export default AdminDashboard;

