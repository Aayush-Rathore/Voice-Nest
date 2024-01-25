import mongoose, { Schema } from "mongoose";

const followingSchema = new Schema(
  {
    following: [
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

export const Following = mongoose.model("Followers", followingSchema);
