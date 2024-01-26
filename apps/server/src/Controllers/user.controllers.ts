import { asyncHandler } from "../utils/asyncHandler";

const SignUp = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "ok",
  });
});

export { SignUp };
