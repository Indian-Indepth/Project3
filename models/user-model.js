const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  screenName: String,
  socialId: String,
  profileImageUrl: String,
  userType: String,
  phoneNumber: String,
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

const User = mongoose.model("user", userSchema);

module.exports = User;
