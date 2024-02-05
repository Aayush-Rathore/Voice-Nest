import { body } from "express-validator";
import { User } from "../models/userSchema.models";

const signUpValidations = [
  body("fullName")
    .notEmpty()
    .withMessage("Name is required!")
    .isString()
    .withMessage("Not a valid Name!")
    .escape(),

  body("username")
    .notEmpty()
    .withMessage("Username is required!")
    .isString()
    .withMessage("Not a valid Username")
    .escape()
    .toLowerCase()
    .custom(async (username) => {
      try {
        const user = await User.findOne({ username });
        if (user) {
          throw new Error("Username already in use!");
        }
      } catch (error: any) {
        throw new Error(error);
      }
    }),

  body("email")
    .notEmpty()
    .withMessage("Name is required!")
    .isEmail()
    .withMessage("Email is not valid!")
    .custom(async (email) => {
      try {
        const user = await User.findOne({ email });
        if (user) {
          throw new Error("Email already in use!");
        }
      } catch (error: any) {
        throw new Error(error);
      }
    }),

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

export default signUpValidations;
