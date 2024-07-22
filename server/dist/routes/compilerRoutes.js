"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.compilerRoutes = void 0;
const express_1 = __importDefault(require("express"));
const compilerController_1 = require("../controllers/compilerController");
const verifyTokenAnonymous_1 = require("../middleware/verifyTokenAnonymous");
exports.compilerRoutes = express_1.default.Router();
exports.compilerRoutes.post("/save", verifyTokenAnonymous_1.verifyTokenAnonymous, compilerController_1.saveCode);
exports.compilerRoutes.post("/load", compilerController_1.loadCode);
