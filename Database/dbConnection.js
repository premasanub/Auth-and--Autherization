import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB= async ()=>{
 try{
     await mongoose.connect(process.env.MONGODB_URL)
     console.log("mongoDb connected successfully");
 }
 catch(error)
 {
    console.log("mongodb connection error", error);
 }
};

export default connectDB;