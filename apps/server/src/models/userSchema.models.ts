import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { SALT_ROUND } from "../constants/constants.variable";

const userSchema = new Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full name is required!"],
      trim: true,
      index: true,
    },

    username: {
      type: String,
      index: true,
      unique: true,
      trim: true,
      lowercase: true,
      required: [true, "Username is required!"],
    },

    email: {
      type: String,
      unique: true,
      trim: true,
      lowercase: true,
      required: [true, "Email is required!"],
    },

    profileUrl: {
      type: String,
    },

    coverImage: {
      type: String,
    },

    posts: [{ type: Schema.Types.ObjectId, ref: "Post" }],

    followers: { type: Schema.Types.ObjectId, ref: "Followers" },

    following: { type: Schema.Types.ObjectId, ref: "Following" },

    music: [{ type: Schema.Types.ObjectId, ref: "Music" }],

    password: {
      type: String,
      required: [true, "Password is required!"],
    },

    isVerified: {
      type: Boolean,
      default: false,
    },

    refreshToken: {
      type: String,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, SALT_ROUND);

  next();
});

userSchema.methods.matchPassword = async function (password: string) {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.tempToken = async function () {
  return await jwt.sign({ id: this.id }, process.env.TEMP_TOKEN_KEY, {
    expiresIn: process.env.TEMP_TOKEN_EXPIRY,
  });
};

userSchema.methods.generateAccessToken = async function () {
  return await jwt.sign(
    {
      id: this._id,
      email: this.email,
      username: this.username,
    },
    process.env.REFRESH_TOKEN_KEY,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
    }
  );
};

userSchema.methods.generateRefreshToken = async function () {
  return await jwt.sign(
    {
      id: this._id,
    },
    process.env.REFRESH_TOKEN_KEY,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
    }
  );
};

export const User = mongoose.model("User", userSchema);
