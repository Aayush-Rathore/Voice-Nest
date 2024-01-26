import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import {
  SALT_Rounds,
  ACCESS_TOKEN_KEY,
  ACCESS_TOKEN_EXPIRY,
  REFRESH_TOKEN_KEY,
  REFRESH_TOKEN_EXPIRY,
} from "../constants/constants.variable";
import jwt from "jsonwebtoken";

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

    dob: {
      type: Date,
      required: [true, "Date of birth is required!"],
    },

    profileUrl: {
      type: String,
    },

    coverImage: {
      type: String,
    },

    posts: [{ type: Schema.Types.ObjectId, ref: "Post" }],

    followers: [{ type: Schema.Types.ObjectId, ref: "Followers" }],

    following: [{ type: Schema.Types.ObjectId, ref: "Following" }],

    music: [{ type: Schema.Types.ObjectId, ref: "Music" }],

    password: {
      type: String,
      required: [true, "Password is required!"],
    },

    refreshToken: {
      type: String,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (this.isModified(this.password)) {
    this.password = await bcrypt.hash(this.password, SALT_Rounds);
  }
  next();
});

userSchema.methods.matchPassword = async function (password: string) {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateAccessToken = async function () {
  return await jwt.sign(
    {
      _id: this._id,
      email: this.email,
      username: this.username,
    },
    REFRESH_TOKEN_KEY,
    {
      expiresIn: REFRESH_TOKEN_EXPIRY,
    }
  );
};

userSchema.methods.generateRefreshToken = async function () {
  return await jwt.sign(
    {
      _id: this._id,
    },
    ACCESS_TOKEN_KEY,
    {
      expiresIn: ACCESS_TOKEN_EXPIRY,
    }
  );
};

export const User = mongoose.model("User", userSchema);
