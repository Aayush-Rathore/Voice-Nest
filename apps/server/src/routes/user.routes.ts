import { Router } from "express";
import { SignUp } from "../Controllers/user.controllers";
import { asyncHandler } from "../utils/asyncHandler.utils";
import signUpValidations from "../validations/signUp.validations";
import { verifyEmail } from "../utils/verifyEmail.utils";

const router = Router();

router.route("/signup").post(signUpValidations, asyncHandler(SignUp));
router.route("/verify").get(asyncHandler(verifyEmail));

export default router;
