import { User } from "../models/userSchema.models";
import ApiError from "./apiError.utils";

export default async function changePassword(
  id: string,
  oldPassword: string,
  newPassword: string
): Promise<Boolean> {
  const user = await User.findById(id);
  if (!user)
    throw new ApiError(404, "USER_NOT_FOUND", "User not found with this id!");

  const checkPass = await user.matchPassword(oldPassword);
  if (!checkPass)
    throw new ApiError(
      401,
      "WRONG_PASSWORD",
      "Wrong password, Please check password and try again!"
    );

  user.password = newPassword;
  await user.save({ validateBeforeSave: false });
  return true;
}
