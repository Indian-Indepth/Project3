const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const packageSchema = new Schema({
  packageType: String,
  price: String,
  description: String
});

const Package = mongoose.model("packages", packageSchema);

module.exports = Package;
