import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MOGODB_URI}/${DB_NAME}`

    );
    console.log("database connected to the following  host : ")
    console.log(connectionInstance.connection.host);
  } catch (error) {
    console.error("MONGODB connection error", error);
    process.exit(1);
  }
};
export default connectDB;
