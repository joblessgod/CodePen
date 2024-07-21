import mongoose from "mongoose";

interface IUserSchema {
    username: string,
    email: string,
    password: string,
    picture: string,
    savedCode: Array<mongoose.Types.ObjectId>
}

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            trim: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            trim: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
            trim: true,
        },
        picture: {
            type: String,
            default: "https://static.vecteezy.com/system/resources/previews/045/944/199/large_2x/male-default-placeholder-avatar-profile-gray-picture-isolated-on-background-man-silhouette-picture-for-user-profile-in-social-media-forum-chat-greyscale-illustration-vector.jpg"
        },
        savedCodes: [
            { type: mongoose.Schema.Types.ObjectId, ref: "Code" }
        ]
    },
    { timestamps: true }
);

export const User = mongoose.model("User", UserSchema);