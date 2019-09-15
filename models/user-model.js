const mongoose = require("mongoose");
var bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  screenName: String,
  socialId: String,
  profileImageUrl: String,
  userType: String,
  email: String,
  password: String
});


userSchema.methods.validUserPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};
// Hooks are automatic methods that run during various phases of the User Model lifecycle
// In this case, before a User is created, we will automatically hash their password
userSchema.methods.encryptPassword= function(user) {
  user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
};
const User = mongoose.model("user", userSchema);
module.exports = User;
