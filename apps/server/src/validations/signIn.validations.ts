import { body } from "express-validator";

const signInValidations = [
  body("loginValue")
    .notEmpty()
    .withMessage("Email or Username is required!")
    .isString()
    .withMessage("Username or Email is not valid!")
    .escape()
    .toLowerCase(),

  body("password")
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

export default signInValidations;
