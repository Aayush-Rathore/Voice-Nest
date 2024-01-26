import dotenv from "dotenv";
import connectDB from "./database/db";
import app from "./app";
import { PORT } from "./constants/constants.variable";

dotenv.config();

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
