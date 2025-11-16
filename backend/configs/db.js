import mongoose from "mongoose";

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("✅ Connected to Mongodb")
    } catch (error) {
        console.log("❌ Failed to connect to Mongodb")
    }
}
export default connectDb