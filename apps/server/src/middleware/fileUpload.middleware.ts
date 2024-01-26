import multer from "multer";
import { Request } from "express";

const storage = multer.diskStorage({
  destination: function (req: Request, file: Express.Multer.File, cb: any) {
    cb(null, "./public");
  },
  filename: function (req: Request, file: Express.Multer.File, cb: any) {
    const uniqueSuffix: string = String(
      Date.now() + Math.round(Math.random() * 100)
    );
    cb(null, file.originalname + "-*-" + uniqueSuffix);
  },
});

export const fileUpload = multer({ storage });
