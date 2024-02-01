import express from "express";
import userRouter from './routes/user.js';
import chatRouter from './routes/chat.js';
import { config } from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";

export const app = express();

config({
    path: "./data/.env",
});

// Using Middleware
app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
        origin: 'https://chat-codebot.netlify.app/',
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    })
);

app.use("/api/v1/users", userRouter);
app.use("/api/v1/notes", chatRouter);

app.get("/", (req, res) => {
    res.send("Nice working");
});

// Using Error Middleware
app.use(errorMiddleware);
