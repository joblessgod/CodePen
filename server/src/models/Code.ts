import mongoose from "mongoose";

interface ICodeSchema {
    fullCode: {
        html: string,
        css: string,
        javascript: string
    },
    ownerInfo: mongoose.Types.ObjectId | string
    ownerName: string
}

const CodeSchema = new mongoose.Schema<ICodeSchema>({
    fullCode: {
        html: String,
        css: String,
        javascript: String,
    },
    ownerInfo: {
        type: mongoose.Schema.Types.ObjectId, ref: "User"
    },
    ownerName: String
})

export const Code = mongoose.model("Code", CodeSchema)