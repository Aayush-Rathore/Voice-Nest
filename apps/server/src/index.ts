import dotenv from "dotenv";
import connectDB from "./database/db";
import app from "./app";

dotenv.config();

const PORT = process.env.PORT;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
