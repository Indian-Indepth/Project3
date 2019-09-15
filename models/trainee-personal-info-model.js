const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const traineePersonalInfoSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "name is Required",
  },

  phoneNumber: {
    type: String,
    trim: true,
    required: "Password is Required",
  },

  profilePicture: Buffer,

  height: {
    type: String,
    trim: true,
  },

  weight: {
    type: String,
    trim: true,
  },
});

const TraineePersonalInfo = mongoose.model(
  "traineePersonalInfo",
  traineePersonalInfoSchema
);

module.exports = TraineePersonalInfo;
