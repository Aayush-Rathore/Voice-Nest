import { Router } from "express";
import {
  ForgetPassword,
  SignIn,
  SignUp,
  ResetPassword,
  UpdatePassword,
} from "../Controllers/user.controllers";
import { asyncHandler } from "../utils/asyncHandler.utils";
import signUpValidations from "../validations/signUp.validations";
import signInValidations from "../validations/signIn.validations";
import changePasswordValidation from "../validations/changePassword.validations";
import { verifyEmail } from "../utils/verifyEmail.utils";
import validateUrl from "../middleware/validateUrl.middleware";

const router = Router();

router.route("/signin").post(signInValidations, asyncHandler(SignIn));

router.route("/signup").post(signUpValidations, asyncHandler(SignUp));

router
  .route("/updatePassword")
  .post(changePasswordValidation, asyncHandler(UpdatePassword));

router.route("/forgetPassword").post(asyncHandler(ForgetPassword));

router
  .route("/resetPassword")
  .post(
    asyncHandler(validateUrl),
    changePasswordValidation,
    asyncHandler(ResetPassword)
  );

router.route("/verifyEmail").get(asyncHandler(verifyEmail));

export default router;
