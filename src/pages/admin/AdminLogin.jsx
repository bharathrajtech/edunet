import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleAdminLogin = (e) => {
    e.preventDefault();
    const storedAdmin = JSON.parse(localStorage.getItem("admin"));

    if (!storedAdmin) {
      setError("No admin account found. Please sign up.");
      return;
    }

    if (storedAdmin.email === email && storedAdmin.password === password) {
      alert("Admin Login successful!");
      navigate("/admin-dashboard"); // Redirect to Admin Dashboard
    } else {
      setError("Invalid admin email or password.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Admin Login</h2>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <form onSubmit={handleAdminLogin}>
          <input
            type="email"
            placeholder="Admin Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded mb-2"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded mb-2"
            required
          />
          <button type="submit" className="w-full bg-red-500 text-white p-2 rounded hover:bg-red-600">
            Admin Sign In
          </button>
        </form>

        <p className="text-center mt-4">
          Don't have an admin account?{" "}
          <Link to="/admin-signup" className="text-red-500 font-bold hover:underline">
            Sign Up as Admin
          </Link>
        </p>
      </div>
    </div>
  );
}

export default AdminLogin;
