import { Request, Response } from "express";
import { Code } from "../models/Code";
import { fullCodeType } from "../types/compilerTypes";
import { AuthRequest } from "../middleware/verifyToken";
import { User } from "../models/User";


export const saveCode = async (req: AuthRequest, res: Response) => {
    const fullCode: fullCodeType = req.body
    let ownerName = "Anonymous"
    let user = undefined;
    let ownerInfo = undefined;
    let isAuthenticated = false

    if (req._id) {
        user = await User.findById(req._id)
        if (!user) {
            return res.status(404).send({ message: "User not found!" })
        }
        ownerName = user?.username
        ownerInfo = user._id
        isAuthenticated = true

    }
    if (!fullCode.html && !fullCode.css && !fullCode.javascript) {
        return res.status(400).send({
            message: "Code Can't be blank!"
        })
    }
    try {
        const newCode = await Code.create({
            fullCode: fullCode,
            ownerInfo,
            ownerName,
        })
        if (isAuthenticated && user) {
            user?.savedCodes.push(newCode._id)
            user.save()
        }
        console.log(newCode)
        return res.status(201).send({ url: newCode._id, status: "saved!" })
    } catch (error) {
        return res.status(500).send({ message: "Error saving Code", error })
    }
}

export const loadCode = async (req: Request, res: Response) => {
    const { urlId } = req.body

    try {
        const existingCode = await Code.findById(urlId)
        if (!existingCode) {
            return res.status(404).send("Code not Found")
        }
        return res.status(200).send({ fullCode: existingCode.fullCode })
    } catch (error) {
        return res.status(500).send({ message: "Error loading Code", error })

    }
}