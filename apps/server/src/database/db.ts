import dotenv from "dotenv";
import mongoose from "mongoose";
import { DB_Name } from "../constants/constants.variable";

dotenv.config();
const MONGO_DB_URL: string | undefined = process.env.MONGO_DB_URL;

const connectDB = async (): Promise<void> => {
  try {
    const connectionInstance = await mongoose.connect(
      `${MONGO_DB_URL}/${DB_Name}`
    );
    console.log(
      `\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error: any) {
    console.error("ERROR: ", error);
    process.exit(1);
  }
};

export default connectDB;
