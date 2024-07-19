import { login, logout, signup } from "../controllers/userControllers";

const express = require("express");

export const userRoutes = express.Router();


userRoutes.post("/signup", signup);
userRoutes.post("/login", login);
userRoutes.post("/logout", logout);
