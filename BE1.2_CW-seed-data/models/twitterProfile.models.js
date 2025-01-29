const mongoose = require("mongoose");

const TwitterSchema = mongoose.Schema({
  profilePic: String,
  fullName: String,
  userName: String,
  bio: String,
  companyName: String,
  city: String,
  portFolioLink: String,
  twitHandler: String,
  followersCount: Number,
  followingCount: Number,
  isOnline: Boolean,
});

const Twitter = mongoose.model("Twitter", TwitterSchema);
module.exports = Twitter;
