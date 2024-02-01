import mongoose from "mongoose";

export const connectDB = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: 'CodeBot',
    }).then(() => {
        console.log("Database Connected!");
    }).catch((error) => {
        console.log(error);
    });
};