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

const sendMail = async (
  fullName: string,
  email: string,
  subject: string,
  token: string
) => {
  const mail = {
    from: "Voice Nest community",
    to: email,
    subject: subject,
    test: `Dear ${fullName}`,
    html:
      subject === "Verify Your Email Address for Voice Nest"
        ? `<b>Welcome to Voice Nest!</b><br>We're excited to have you join our community.<br><p>To get started, Please verify your email address by clicking the link below:<br><a href='http://localhost:3000/api/v1/users/varifyEmail/${token}'>Click here to verify</a></p>`
        : `<b>Welcome to Voice Nest!</b><br>To change you password for your Voice Nest account click the link below.<br><p>Please click this link to change your password:<br><a href='http://localhost:3000/api/v1/users/resetPassword/${token}'>Click here to reset</a></p>`,
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

export default sendMail;
