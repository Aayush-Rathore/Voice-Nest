import { v2 } from "cloudinary";
import fs from "fs";
import ApiError from "./apiError.utils";

import S3Helper from "./s3Helper.utils";

const s3Helper = new S3Helper();
// import { S3Client } from "@aws-sdk/client-s3";
// import { ListBucketsCommand, PutObjectCommand } from "@aws-sdk/client-s3";

// const CloudStorage = async () => {
//   try {
//     const credentials = {
//       accessKeyId: process.env.CLOUD_STORAGE_KEY,
//       secretAccessKey: process.env.CLOUD_STORAGE_SECRET,
//     };

//     // Create an S3 service client object.
//     const s3Client = new S3Client({
//       endpoint: "https://s3.tebi.io",
//       credentials: credentials,
//       region: "global",
//     });

//     const buckets_data = await s3Client.send(new ListBucketsCommand({}));

//     console.log(buckets_data);

//     const upload_data = await s3Client.send(
//       new PutObjectCommand({
//         Bucket: "knowledge.nest",
//         Key: "node-js.txt",
//         Body: "some data",
//       })
//     );

//     console.log(upload_data);
//   } catch (error: any) {
//     console.log(error);
//   }
// };

v2.config({
  cloud_name: process.env.CLOUD_STORAGE_NAME,
  api_key: process.env.CLOUD_STORAGE_API_KEY,
  api_secret: process.env.CLOUD_STORAGE_API_SECRET,
});

const uploadFileToCloud = async (localFilePath: string): Promise<string> => {
  try {
    // CloudStorage();
    if (!localFilePath) return "Could not find path!"; // Could not find file path
    const profile = await v2.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    // Uploaded successfully
    return profile.url;
  } catch (error: any) {
    throw new ApiError(
      400,
      "SOMETHING_WENT_WRONG!",
      "Something went wrong while uploading files to the cloud!",
      error
    );
  } finally {
    fs.unlinkSync(localFilePath); // clear file storeyed on server tem.
  }
};

export default uploadFileToCloud;
