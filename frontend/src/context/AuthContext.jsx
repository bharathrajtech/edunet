import { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [adminToken, setAdminToken] = useState(localStorage.getItem("adminToken") || null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const storedAdmin = JSON.parse(localStorage.getItem("admin"));
    if (storedUser && token) setUser(storedUser);
    if (storedAdmin && adminToken) setAdmin(storedAdmin);
  }, [token, adminToken]);

  const login = (userData, jwtToken) => {
    setUser(userData);
    setToken(jwtToken);
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("token", jwtToken);
  };

  const adminLogin = (adminData, jwtToken) => {
    setAdmin(adminData);
    setAdminToken(jwtToken);
    localStorage.setItem("admin", JSON.stringify(adminData));
    localStorage.setItem("adminToken", jwtToken);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  const adminLogout = () => {
    setAdmin(null);
    setAdminToken(null);
    localStorage.removeItem("admin");
    localStorage.removeItem("adminToken");
  };

  return (
    <AuthContext.Provider value={{ user, admin, token, adminToken, login, adminLogin, logout, adminLogout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
