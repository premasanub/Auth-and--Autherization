import express from "express";
import {  registerUser, loginUser,getUser} from "../Controllers/userController.js";
import {authMiddleware} from "../Middleware/authMiddleware.js";
import { adminMiddleware} from "../Middleware/adminMiddleware.js";


const authRouter = express.Router();

authRouter.post("/register",registerUser)
authRouter.post("/login",loginUser)
authRouter.get("/getdata",authMiddleware,adminMiddleware,getUser)
//authRouter.get("/getdata",adminMiddleware,getUser)


export default authRouter;