import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);

    console.log(`MongoDB COnnected Successfully: ${conn.connection.host}`);
  } catch (error) {
    console.error("error while connectiong DB", error.message);
    process.exit(1);
  }
};

export default connectDB;
