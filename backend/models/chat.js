import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    chat: {
        message: [
            {
                usermsg: {
                    type: String,
                    required: true,
                },
                apimsg: {
                    type: String,
                    required: true,
                },
            },
        ],
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export const Chats = mongoose.model("Chats", chatSchema);

