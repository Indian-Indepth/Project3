const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  screenName: String,
  socialId: String,
  profileImageUrl: String,
  userType: String,
  password:{type: String, default : ""},
  phoneNumber: String,
  email: {type : String, trim: true},
  specialize: {
    type: String,
    trim: true,
  },
  training: {
    type: String,
    trim: true,
  },
  recentSuccess: {
    type: String,
    trim: true,
  },
  experience: {
    type: String,
    trim: true,
  },
  personality: {
    type: String,
    trim: true,
  },
  testimonial: {
    type: String,
    trim: true,
  },
  workoutPlan: {
    type: String,
    trim: true,
  },
  // Trainee
  height: {
    type: String,
    trim: true,
  },

  weight: {
    type: String,
    trim: true,
  },
  fitnessGoal: {
    type: String,
    trim: true
  },

  nutritionGoals: {
    type: String,
    trim: true
  },

  motivation: {
    type: String,
    trim: true
  },

  personalTraining: {
    type: String,
    trim: true
  },

  trainingExperience: {
    type: String,
    trim: true
  },

  trainerExpectation: {
    type: String,
    trim: true
  },
  currentExercise: {
    type: String,
    trim: true
  },

  physicalLimit: {
    type: String,
    trim: true
  },

  currentActivities: {
    type: String,
    trim: true
  },
  excerciseWeekly: {
    type: String,
    trim: true
  },
  tabaccoUse:{
    type: String,
    trim: true
  },

  alcoholUse: {
    type: String,
    trim: true
  },

  medsHealth: {
    type: String,
    trim: true
  }

});

userSchema.methods.encryptPassword = function(password){
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
};

userSchema.methods.validUserPassword = function(password){
  return bcrypt.compareSync(password, this.password);
};


const User = mongoose.model("user", userSchema);

module.exports = User;
