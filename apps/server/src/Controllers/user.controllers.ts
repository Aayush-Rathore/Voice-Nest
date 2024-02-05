import { Request, Response } from "express";
import ApiError from "../utils/apiError.utils";
import { validationResult, Result, ValidationError } from "express-validator";
import sendMail from "../utils/sendMail.utils";
import { User } from "../models/userSchema.models";
import ApiResponse from "../utils/apiResponse.utils";

export const SignUp = async (req: Request, res: Response): Promise<void> => {
  const result: Result<ValidationError> = validationResult(req);
  const {
    fullName,
    username,
    email,
    password,
  }: {
    fullName: string;
    username: string;
    email: string;
    password: string;
  } = req.body;
  if (!result.isEmpty()) {
    throw new ApiError(
      401,
      "VALIDATION_ERROR",
      "User validation error",
      result.array()
    );
  }

  const registeredUser = await User.create({
    fullName,
    username,
    email,
    password,
  });

  const token: string = await registeredUser.generateRefreshToken();
  await sendMail(fullName, email, token);
  new ApiResponse(
    201,
    "SUCCESS!",
    "Verify your email for Voice-Nest",
    {
      message:
        "Check your inbox and click the provided link to verify you email address!",
    },
    res
  );
};

export const SignIn = async (req: Request, res: Response): Promise<void> => {};
