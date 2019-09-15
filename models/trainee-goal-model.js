const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const traineeGoalSchema = new Schema({


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
  }

});

const TraineeGoal = mongoose.model(
  "traineeGoal",
  traineeGoalSchema
);

module.exports = TraineeGoal;