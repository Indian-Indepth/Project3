const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  screenName: String,
  socialId: String,
  profileImageUrl: String,
  userType: String,
});

const User = mongoose.model("user", userSchema);

module.exports = User;
