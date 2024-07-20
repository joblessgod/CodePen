import { login, logout, signup, userDetails } from "../controllers/userControllers";
import { verifyToken } from "../middleware/verifyToken";

const express = require("express");

export const userRoutes = express.Router();


userRoutes.post("/signup", signup);
userRoutes.post("/login", login);
userRoutes.post("/logout", logout);
userRoutes.get("/user-details", verifyToken, userDetails);
