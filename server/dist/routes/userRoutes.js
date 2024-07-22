"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const userControllers_1 = require("../controllers/userControllers");
const verifyToken_1 = require("../middleware/verifyToken");
const express = require("express");
exports.userRoutes = express.Router();
exports.userRoutes.post("/signup", userControllers_1.signup);
exports.userRoutes.post("/login", userControllers_1.login);
exports.userRoutes.post("/logout", userControllers_1.logout);
exports.userRoutes.get("/user-details", verifyToken_1.verifyToken, userControllers_1.userDetails);
