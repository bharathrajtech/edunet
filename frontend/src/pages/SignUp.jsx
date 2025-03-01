import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();

    // Validation
    if (!name || !email || password.length < 6) {
      setError("Please fill all fields correctly. Password must be at least 6 characters.");
      return;
    }

    // Save user data in local storage (for now, since no backend)
    const userData = { name, email };
    localStorage.setItem("user", JSON.stringify(userData));

    alert("Sign Up successful! You can now log in.");
    navigate("/signin"); // Redirect to Sign In page
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
        
        {error && <p className="text-red-500 text-center">{error}</p>}

        <form onSubmit={handleSignUp}>
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
            Sign Up
          </button>
        </form>

        <p className="text-center mt-4">
          Already have an account? <Link to="/signin" className="text-blue-500">Sign In</Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
