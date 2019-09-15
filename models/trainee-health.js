const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const traineeHealthSchema = new Schema({


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

const TraineeHealth = mongoose.model(
  "traineeHealth",
  traineeHealthSchema
);

module.exports = TraineeHealth;