import { Router } from "express";
import { SignUp } from "../Controllers/user.controllers";

const router = Router();

router.route("/signup").post(SignUp);

export default router;
