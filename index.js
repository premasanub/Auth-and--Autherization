import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./Database/dbConnection.js";
import authRouter from "./Routers/userRouter.js";

 dotenv.config();


 //initialize the express
 const app = express();

 //express default middleware
 app.use(express.json());  //used to access the body content / payload from request or client 
 app.use(cors());

 //db connection
connectDB();

 //default route
 app.get("/",(req,res)=>{
    res.status(200).send("welcome to API")
 });


 //custom route
 app.use("/api/auth",authRouter)


 //port
 const port = process.env.PORT || 3000;


 //server starting
 app.listen(port,()=>{
    console.log( `server started ${port}`  );
 });
