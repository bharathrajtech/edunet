import jwt from "jsonwebtoken";
import User from "../models/User.js";
import dotenv from "dotenv";

dotenv.config();

const authMiddleware = (req, res, next) => {
    const token = req.header("Authorization");
  
    console.log("Received Token:", token); // Debugging
    
    if (!token) return res.status(401).json({ message: "Access Denied: No Token Provided" });
  
    try {
      const decoded = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);
      console.log("Decoded Token:", decoded); // Debugging
      req.user = decoded;
      next();
    } catch (error) {
      console.error("JWT Verification Error:", error);
      res.status(403).json({ message: "Invalid Token" });
    }
  };
  
export const adminMiddleware = (req, res, next) => {
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Access Denied: Admins Only" });
    }
    next();
  };
  
  export const verifyAdmin = async (req, res, next) => {
    try {
      const token = req.headers.authorization?.split(" ")[1];
  
      if (!token) return res.status(403).json({ message: "Access denied. No token provided." });
  
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findById(decoded.id);
  
      if (!user || user.role !== "admin") return res.status(403).json({ message: "Access denied. Admins only." });
  
      req.user = user;
      next();
    } catch (error) {
      res.status(401).json({ message: "Invalid token" });
    }
  };

  export const verifyUser = async (req, res, next) => {
    try {
      const token = req.headers.authorization?.split(" ")[1]; // Extract token from Authorization header
  
      if (!token) {
        return res.status(401).json({ message: "Access denied. No token provided." });
      }
  
      const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify token
      const user = await User.findById(decoded.id).select("-password"); // Fetch user from DB, exclude password
  
      if (!user) {
        return res.status(404).json({ message: "User not found." });
      }
  
      req.user = user; // Attach user data to the request object
      next(); // Proceed to the next middleware
    } catch (error) {
      return res.status(403).json({ message: "Invalid or expired token." });
    }
  };
    
export default authMiddleware;
