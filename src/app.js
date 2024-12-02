import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors" ;
import { router as userRouter } from "./routes/user.routes.js";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    Credential: true,
  })
);
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"))
app.use(cookieParser())


app.use("/user",userRouter)
export { app };


