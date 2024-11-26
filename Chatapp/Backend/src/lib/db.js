import mongoose from "mongoose";

export const connectDB = async ()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`MongDB connected: ${conn.connection.host}`);
    }
    catch(error){
        console.log("MongDB connection error:", error);
    }
};