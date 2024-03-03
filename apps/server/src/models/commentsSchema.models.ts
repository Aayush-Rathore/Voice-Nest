import mongoose, { Schema } from "mongoose";

const commentsSchema = new Schema(
  {
    content: {
      type: String,
      required: [true, "Content is required in comment!"],
    },

    likes: {
      type: Number,
      default: 0,
    },

    post: {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },

    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

export const Comments = mongoose.model("Comments", commentsSchema);
