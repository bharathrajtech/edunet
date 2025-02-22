import { createContext, useState, useEffect } from "react";

const AdminContext = createContext();

export function AdminProvider({ children }) {
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    const storedAdmin = JSON.parse(localStorage.getItem("admin"));
    if (storedAdmin) {
      setAdmin(storedAdmin);
    }
  }, []);

  const login = (email, password) => {
    if (email === "admin@foodie.com" && password === "admin123") {
      const adminData = { email };
      setAdmin(adminData);
      localStorage.setItem("admin", JSON.stringify(adminData));
    } else {
      alert("Invalid admin credentials");
    }
  };

  const logout = () => {
    setAdmin(null);
    localStorage.removeItem("admin");
  };

  return (
    <AdminContext.Provider value={{ admin, login, logout }}>
      {children}
    </AdminContext.Provider>
  );
}

export default AdminContext;
