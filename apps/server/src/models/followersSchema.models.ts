import mongoose, { Schema } from "mongoose";

const followersSchema = new Schema(
  {
    followers: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    count: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export const Followers = mongoose.model("Followers", followersSchema);
