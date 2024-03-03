import mongoose, { Schema } from "mongoose";

const musicSchema = new Schema(
  {
    music: {
      type: String,
      required: [true, "Music file is required!"],
    },

    title: {
      type: String,
      required: [true, "Title is required!"],
      default: "Hy there, I am using Voice-Nest :innocent: ",
    },

    description: {
      type: String,
    },

    views: {
      type: Number,
      default: 0,
    },

    shares: {
      type: Number,
      default: 0,
    },

    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },

    actions: {
      type: Schema.Types.ObjectId,
      ref: "Actions",
    },
  },
  {
    timestamps: true,
  }
);

export const Music = mongoose.model("Music", musicSchema);
