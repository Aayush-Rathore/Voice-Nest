import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const postsSchema = new Schema(
  {
    post: {
      type: String,
      required: [true, "Post is required!"],
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

postsSchema.plugin(mongooseAggregatePaginate);

export const Post = mongoose.model("Post", postsSchema);
