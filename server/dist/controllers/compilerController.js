"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadCode = exports.saveCode = void 0;
const Code_1 = require("../models/Code");
const User_1 = require("../models/User");
const saveCode = async (req, res) => {
    const fullCode = req.body;
    let ownerName = "Anonymous";
    let user = undefined;
    let ownerInfo = undefined;
    let isAuthenticated = false;
    if (req._id) {
        user = await User_1.User.findById(req._id);
        if (!user) {
            return res.status(404).send({ message: "User not found!" });
        }
        ownerName = user?.username;
        ownerInfo = user._id;
        isAuthenticated = true;
    }
    if (!fullCode.html && !fullCode.css && !fullCode.javascript) {
        return res.status(400).send({
            message: "Code Can't be blank!"
        });
    }
    try {
        const newCode = await Code_1.Code.create({
            fullCode: fullCode,
            ownerInfo,
            ownerName,
        });
        if (isAuthenticated && user) {
            user?.savedCodes.push(newCode._id);
            user.save();
        }
        console.log(newCode);
        return res.status(201).send({ url: newCode._id, status: "saved!" });
    }
    catch (error) {
        return res.status(500).send({ message: "Error saving Code", error });
    }
};
exports.saveCode = saveCode;
const loadCode = async (req, res) => {
    const { urlId } = req.body;
    try {
        const existingCode = await Code_1.Code.findById(urlId);
        if (!existingCode) {
            return res.status(404).send("Code not Found");
        }
        return res.status(200).send({ fullCode: existingCode.fullCode });
    }
    catch (error) {
        return res.status(500).send({ message: "Error loading Code", error });
    }
};
exports.loadCode = loadCode;
