import mongoose, { Schema } from "mongoose";

const actionsSchema = new Schema(
  {
    likes: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],

    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comments",
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const Actions = mongoose.model("Actions", actionsSchema);
