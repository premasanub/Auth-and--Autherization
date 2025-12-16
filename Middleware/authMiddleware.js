import jwt from "jsonwebtoken";
import User from "../Model/userSchema.js";
import dotenv from "dotenv";

dotenv.config();


export const authMiddleware =async (req,res,next)=>{
// //method1
// const token = req.head("Authorization");

//method2
 const authHeader=req.headers.authorization;
    if (!authHeader) {
    return res.status(401).json({ message: "Authorization header Missing" });
  }
  
const token =authHeader.split(" ")[1];
 if (!token) {
    return res.status(404).json({ message: "Token Missing" });
  }
 try {
     const decoded = jwt.verify(token, process.env.JWT_SECRET);
    //console.log("decoded", decoded);
    req.user = await User.findById(decoded._id).select("-password");
    //console.log("req.user", req.user);
    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};