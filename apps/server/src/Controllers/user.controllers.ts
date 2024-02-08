import { Request, Response } from "express";
import ApiError from "../utils/apiError.utils";
import { validationResult, Result, ValidationError } from "express-validator";
import sendMail from "../utils/sendMail.utils";
import { User } from "../models/userSchema.models";
import ApiResponse from "../utils/apiResponse.utils";

// Generate Access and Refresh token together
const generateAccessAndRefreshToken = async (userId: string) => {
  try {
    const user = await User.findById(userId);
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error: any) {
    throw new ApiError(
      500,
      error.message,
      "Something went wrong while generating Access and Refresh token!"
    );
  }
};

// SignUp Functionality completed
export const SignUp = async (req: Request, res: Response): Promise<void> => {
  const result: Result<ValidationError> = validationResult(req);

  if (!result.isEmpty()) {
    throw new ApiError(
      401,
      "VALIDATION_ERROR",
      "User validation error",
      result.array()
    );
  }

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

  const registeredUser = await User.create({
    fullName,
    username,
    email,
    password,
  });

  const token: string = await registeredUser.generateRefreshToken();
  sendMail(fullName, email, "Verify Your Email Address for Voice Nest", token);
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

// SignIn Functionality completed
export const SignIn = async (req: Request, res: Response): Promise<void> => {
  const result: Result<ValidationError> = validationResult(req);

  if (!result.isEmpty()) {
    throw new ApiError(
      401,
      "VALIDATION_ERROR!",
      "User validation error",
      result.array()
    );
  }

  const { loginValue, password }: { loginValue: string; password: string } =
    req.body;

  const user = await User.findOne({
    $or: [{ username: loginValue }, { email: loginValue }],
  });

  if (!user)
    throw new ApiError(
      402,
      "WRONG_CREDENTIALS!",
      "Check your Username or Email and try again!"
    );

  if (!user?.isVerified)
    throw new ApiError(
      402,
      "WRONG_CREDENTIALS!",
      "Email is not verified!\n Verify your email before login!"
    );

  const checkPass = await user.matchPassword(password);

  const logedInUser = await User.findById(user._id).select(
    "-password -isVerified"
  );

  if (!checkPass)
    throw new ApiError(
      401,
      "WRONG_CREDENTIALS!",
      "Check your Username or Email and try again!"
    );

  const { accessToken, refreshToken } = await generateAccessAndRefreshToken(
    user._id
  );

  const options = {
    httpOnly: true,
    secure: true,
  };

  res
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
      new ApiResponse(
        200,
        "SUCCESSFULLY_LOGED_IN!",
        `Welcome to Voice Nest ${logedInUser.fullName}`,
        [logedInUser, accessToken, refreshToken],
        res
      )
    );
};

// Forget Password Functionality completed
export const ForgetPassword = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { loginValue }: { loginValue: string } = req.body;

  if (!loginValue || loginValue === "")
    throw new ApiError(
      404,
      "EMAIL/USERNAME_NOT_FOUND",
      "Email or Username is required"
    );

  const user = await User.findOne({
    $or: [{ username: loginValue }, { email: loginValue }],
  });

  if (!user)
    throw new ApiError(
      404,
      "USER_NOT_FOUND",
      `User not found with Email/Username ${loginValue}`
    );

  if (!user?.isVerified)
    throw new ApiError(
      402,
      "WRONG_CREDENTIALS!",
      "Email is not verified!\n Verify your email before resetting your password!"
    );

  const token: string = user.tempToken();
  const { fullName, email } = user;
  sendMail(fullName, email, "Change your password!", token);

  new ApiResponse(
    200,
    "SUCCESS!",
    "Check your email to reset password!",
    {
      message:
        "Check your inbox and click the provided link to change your password!",
    },
    res
  );
};

export const ResetPassword = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { newPassword }: { newPassword: string } = req.body;
  console.log(newPassword);
  res.send(newPassword);
};
