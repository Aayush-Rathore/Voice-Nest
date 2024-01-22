const mongoose = require("mongoose");
const { Schema, ObjectId } = mongoose;

// User Credential Schema
const userCredentialSchema = new Schema({
  username: {
    type: String,
    trim: true,
    required: [true, "Username name is required!"],
    unique: [true, "Username should be unique!"],
    lowercase: [true, "Username should be in lowercase!"],
  },
  email: {
    type: String,
    unique: [true, "Email is already being used!"],
    trim: true,
    lowercase: [true, "Invalid email address!"],
  },
  password: {
    type: String,
    trim: true,
  },
});

// User Network Schema
const userNetworkSchema = new Schema({
  numberOfFollowers: {
    type: Number,
    default: 0,
  },
  numberOfFollowing: {
    type: Number,
    default: 0,
  },
  following: [
    {
      type: ObjectId,
      ref: "User", // Reference to other users whom the user is following
    },
  ],
  followers: [
    {
      type: ObjectId,
      ref: "User", // Reference to other users who are followers
    },
  ],
});

// User Media Schema
const userMediaSchema = new Schema({
  songs: [
    {
      title: String,
      artist: String,
      likes: [{ type: ObjectId, ref: "User" }], // Reference to users who liked the song
      comments: [{ comment: String, type: ObjectId, ref: "User" }], // Reference to users who commented on the song
    },
  ],
  posts: [
    {
      url: String,
      description: String,
      likes: [{ type: ObjectId, ref: "User" }], // Reference to users who liked the post
      comments: [{ comment: String, type: ObjectId, ref: "User" }], // Reference to users who commented on the post
    },
  ],
  blogs: [
    {
      title: String,
      content: String,
      likes: [{ type: ObjectId, ref: "User" }], // Reference to users who liked the blog
      comments: [{ comment: String, type: ObjectId, ref: "User" }], // Reference to users who commented on the blog
    },
  ],
});

// User Schema
const userSchema = new Schema({
  firstName: {
    type: String,
    required: [true, "First name is required!"],
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, "Last name is required!"],
    trim: true,
  },
  bio: {
    type: String,
    sparse: true,
  },
  profileUrl: {
    type: String,
    sparse: true,
  },
  followers: {
    type: ObjectId,
    ref: "userNetwork", // Reference to user network information
  },
  following: {
    type: ObjectId,
    ref: "userNetwork", // Reference to user network information
  },
  credentials: {
    type: ObjectId,
    ref: "userCredential", // Reference to user credentials
  },
  media: {
    type: ObjectId,
    ref: "userMedia", // Reference to user media information
  },
});

// Models
const User = mongoose.model("User", userSchema);
const UserCredentials = mongoose.model("UserCredentials", userCredentialSchema);
const UserNetwork = mongoose.model("UserNetwork", userNetworkSchema);
const UserMedia = mongoose.model("UserMedia", userMediaSchema);

export { User, UserCredentials, UserNetwork, UserMedia };
