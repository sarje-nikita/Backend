import mongoose from "mongoose";
import { DB_NAME } from "../constants";


const connectDB =async ()=>{
    try{
       const connectionInstance = await mongoose.connect(`${process.env.MOGODB_URI}/${DB_NAME}`)
       console.log(connectionInstance)
    }
    catch(error){
        console.error("MONGODB connection error",error);
        process.exit(1)
    }
}
export default connectDB