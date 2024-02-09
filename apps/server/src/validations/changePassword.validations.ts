import { body } from "express-validator";

const changePasswordValidation = [
  body("newPassword")
    .notEmpty()
    .withMessage("Password is required!")
    .isString()
    .withMessage("Invalid password!")
    .isLength({ min: 6, max: 24 })
    .withMessage("Password must be between 6 and 24 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]+$/
    )
    .withMessage(
      "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character"
    )
    .escape(),
];

export default changePasswordValidation;
