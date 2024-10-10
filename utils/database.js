import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
    // Set strict query to avoid warnings with query handling in mongoose
    mongoose.set('strictQuery', true);

    // If already connected, log it and return
    if (isConnected) {
        console.log('MongoDB is already connected');
        return;
    }

    try {
        // Connect without deprecated options
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "share_prompt", // specify your database name
        });

        // Once connected, mark as connected
        isConnected = true;
        console.log('MongoDB is connected');
    } catch (error) {
        console.error('MongoDB connection error:', error);
    }
};
