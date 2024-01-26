import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(
  express.json({
    limit: "10kb",
  })
);

app.use(
  express.urlencoded({
    extended: true,
    limit: "10kb",
  })
);

app.use(express.static("pulic"));

app.use(cookieParser());

// import routes

import userRouter from "./routes/user.routes";
import { PORT } from "./constants/constants.variable";

// using users routes {SignIn, SignUp}
app.use("/api/v1/users", userRouter);

export default app;
