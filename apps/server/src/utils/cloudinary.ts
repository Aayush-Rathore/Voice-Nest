import { v2 } from "cloudinary";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config();

v2.config({
  cloud_name: process.env.CLOUD_STORAGE_NAME,
  api_key: process.env.CLOUD_STORAGE_API_KEY,
  api_secret: process.env.CLOUD_STORAGE_API_SECRET,
});

const uploadFileToCloud = async (localFilePath: string) => {
  try {
    if (!localFilePath) return "Could not find path!"; // Could not find file path
    const file = await v2.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    // Uploaded successfully
    return file;
  } catch (error: any) {
    return "Unable to upload file!";
  } finally {
    fs.unlinkSync(localFilePath); // clear file storeted on server tem.
  }
};

export default uploadFileToCloud;
