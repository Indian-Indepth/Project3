const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const trainerExperienceSchema = new Schema({

    recentSuccess: {
        type: String,
        trim: true
      },

      experience: {
        type: String,
        trim: true
      },

      personality: {
        type: String,
        trim: true
      },

      testimonial: {
        type: String,
        trim: true
      },

     workoutPlan: {
        type: String,
        trim: true
      }

});


const TrainerExperienceSchema = mongoose.model("trainerExperience", trainerExperienceSchema);

module.exports = TrainerExperienceSchema;