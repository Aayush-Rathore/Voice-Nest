import mongoose, { Schema } from "mongoose";

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

export const User = mongoose.model("User", userSchema);
