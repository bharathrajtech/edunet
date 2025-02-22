import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminSignup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleAdminSignup = (e) => {
    e.preventDefault();

    if (name && email && password.length >= 6) {
      localStorage.setItem("admin", JSON.stringify({ name, email, password }));
      alert("Admin Sign Up successful! You can now log in.");
      navigate("/admin-login"); // Redirect to Admin Login
    } else {
      setError("Please fill all fields correctly.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Admin Sign Up</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleAdminSignup}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded mb-2"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded mb-2"
            required
          />
          <input
            type="password"
            placeholder="Password (6+ chars)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded mb-2"
            required
          />
          <button type="submit" className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600">
            Register as Admin
          </button>
        </form>

        <p className="text-center mt-4">
          Already have an admin account?{" "}
          <button onClick={() => navigate("/admin-login")} className="text-red-500 font-bold hover:underline">
            Login as Admin
          </button>
        </p>
      </div>
    </div>
  );
}

export default AdminSignup;
