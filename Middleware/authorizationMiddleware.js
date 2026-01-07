 import jwt from "jsonwebtoken";
import User from "../Model/userSchema.js";
import dotenv from "dotenv";



dotenv.config();

// export const ownDataOnly = async (req, res, next) => {
//   //method1
//    //const token=req.header("Authorization");
  
//     //method2
//     //method2
//  const authHeader=req.headers.authorization;
//     if (!authHeader) {
//     return res.status(401).json({ message: "Authorization header Missing" });
//   }
//   req.filter={
//     _id: req.user._id
//   };
//   next();

// };


export const ownDataOnly = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: "Authorization header Missing" });
  }

  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(404).json({ message: "Token Missing" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    const user = await User.findById(req.user._id);
    
       req.user=user;
      next();
    
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};