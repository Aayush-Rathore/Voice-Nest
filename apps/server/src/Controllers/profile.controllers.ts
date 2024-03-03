import { Request, Response } from "express";
import ApiError from "../utils/apiError.utils";
import ApiResponse from "../utils/apiResponse.utils";
import ProfileServices from "../services/profile.services";
import ProfileValidation from "../validations/profile.validation";

const profileServices = new ProfileServices();
const profileValidation = new ProfileValidation();

export const LogOut = async (req: Request, res: Response): Promise<void> => {
  res.send("Hello");
};

export const UpdatePassword = async (
  req: Request,
  res: Response
): Promise<void> => {
  await profileValidation.UpdatePassword.validateAsync(req.body);

  const {
    oldPassword,
    newPassword,
  }: { oldPassword: string; newPassword: string; id: string } = req.body;

  if (oldPassword === newPassword)
    throw new ApiError(
      304,
      "NOT_MODIFIED",
      "Old and new password, both are same! Please try with different password!"
    );

  const isPasswordChanged: Boolean = await profileServices.updatePassword(
    req.body
  );

  if (isPasswordChanged)
    new ApiResponse(
      200,
      "SUCCESS!",
      "Password changed successfully!",
      {
        message: "Your new password is updated successfully",
      },
      res
    );
};
