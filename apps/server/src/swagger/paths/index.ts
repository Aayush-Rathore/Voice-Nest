import {
  ForgetPassword,
  Login,
  ResetPassword,
  SignUp,
  VerifyEmail,
} from "./users";

const paths = {
  "/api/v1/users/signup": {
    post: SignUp,
  },

  "/api/v1/users/signin": {
    post: Login,
  },

  "/api/v1/users/verifyEmail": {
    get: VerifyEmail,
  },

  "/api/v1/users/forgetPassword": {
    post: ForgetPassword,
  },

  "/api/v1/users/resetPassword": {
    post: ResetPassword,
  },
};

export default paths;
