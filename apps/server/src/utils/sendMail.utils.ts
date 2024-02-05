import nodemailer from "nodemailer";
import ApiError from "./apiError.utils";

const transporter = nodemailer.createTransport({
  port: 465,
  host: "smtp.gmail.com",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
  secure: true,
});

const sendMail = async (fullName: string, email: string, token: string) => {
  const mail = {
    from: "Voice Nest community",
    to: email,
    subject: "Verify Your Email Address for Voice Nest",
    test: `Dear ${fullName}`,
    html: `<b>Welcome to Voice Nest!</b><br>We're excited to have you join our community.<br><p>To get started, Please varify your email address by clicking the link below:<br><a href='http://localhost:3000/api/v1/users/varifyEmail/${token}'>Click here to varify</a></p>`,
  };
  try {
    const mailStatus = await transporter.sendMail(mail);
    return mailStatus;
  } catch (error) {
    throw new ApiError(
      500,
      "UNABLE_TO_SEND_VERIFICATION_MAIL",
      "Something went wrong while send verification mail",
      error
    );
  }
};

// http://localhost:3000/users/varifyEmail/:token
// param.token

export default sendMail;
