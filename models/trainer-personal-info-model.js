const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const trainerPersonalInfoSchema = new Schema({

  name: {
    type: String,
    trim: true,
    required: "name is Required"
  },

  phoneNumber: {
    type: String,
    trim: true,
    required: "Password is Required"
  },

  profilePictureUrl: String,

  specialize: {
    type: String,
    trim: true,
  },

  training: {
    type: String,
    trim: true,
  }

});


const TrainerPersonalInfo = mongoose.model("trainerPersonalInfo", trainerPersonalInfoSchema);

module.exports = TrainerPersonalInfo;