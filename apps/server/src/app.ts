import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import passport from "./utils/passport.utils";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(
  express.json({
    limit: "25kb",
  })
);

app.use(
  express.urlencoded({
    extended: true,
    limit: "15kb",
  })
);

app.use(express.static("public"));

app.use(cookieParser());

app.use(passport.initialize());

// import routes

import userRouter from "./routes/user.routes";

// using users routes {SignIn, SignUp}

app.use("/api/v1/users", userRouter);

export default app;
