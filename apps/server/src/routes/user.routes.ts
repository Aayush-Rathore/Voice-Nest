import { Router } from "express";
import {
  ForgetPassword,
  SignIn,
  SignUp,
  ResetPassword,
} from "../Controllers/user.controllers";
import { asyncHandler } from "../utils/asyncHandler.utils";
import signUpValidations from "../validations/signUp.validations";
import signInValidations from "../validations/signIn.validations";
import { verifyEmail } from "../utils/verifyEmail.utils";
import validateUrl from "../middleware/validateUrl.middleware";

const router = Router();

router.route("/signin").post(signInValidations, asyncHandler(SignIn));
router.route("/signup").post(signUpValidations, asyncHandler(SignUp));
router.route("/forgetPassword").post(asyncHandler(ForgetPassword));
router.route("/resetPassword").post(validateUrl, asyncHandler(ResetPassword));
router.route("/verify").get(asyncHandler(verifyEmail));

export default router;
