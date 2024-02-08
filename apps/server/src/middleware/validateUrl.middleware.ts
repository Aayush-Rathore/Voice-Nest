import { NextFunction, Request, Response } from "express";
import { verify, JwtPayload } from "jsonwebtoken";
import ApiError from "../utils/apiError.utils";

const validateUrl = async (req: Request, res: Response, next: NextFunction) => {
  const urlValidationToken = req.query.token as string;

  try {
    const isUrlValid: JwtPayload | string =
      await verifyToken(urlValidationToken);
    if (!isUrlValid)
      throw new ApiError(401, "INVALID_URL", "Invalid url, Please try again!");

    console.log(isUrlValid);

    next();
  } catch (error) {
    // Log the full error object for debugging purposes
    console.error("Error validating token:", error);

    // Throw an ApiError with a generic error message
    throw new ApiError(
      401,
      "INVALID_TOKEN",
      "Invalid token, Please try again!"
    );
  }
};

const verifyToken = async (token: string) => {
  return await verify(token, process.env.TEMP_TOKEN_KEY);
};

export default validateUrl;
