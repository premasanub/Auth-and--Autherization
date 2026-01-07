import express from "express";
import {  registerUser, loginUser,getUserData} from "../Controllers/userController.js";
import {authMiddleware} from "../Middleware/authMiddleware.js";
import { ownDataOnly} from "../Middleware/authorizationMiddleware.js";


const authRouter = express.Router();

authRouter.post("/register",registerUser)
authRouter.post("/login",loginUser)
authRouter.get("/get",authMiddleware,ownDataOnly,getUserData)



export default authRouter;