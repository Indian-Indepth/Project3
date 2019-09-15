const router = require("express").Router();
const usersRoutes = require("./users");
const trainerPersonalInfoRoutes = require("./trainerPersonalInfo");
const trainerExperienceRoutes = require("./trainerExperience");
const traineePersonalInfoRoutes = require("./traineePersonalInfo");
const traineeGoalsRoutes = require("./traineeGoals");
const traineeHealthRoutes = require("./traineeHealth");

// Users routes
router.use("/users", usersRoutes);

// Trainer personal info routes
router.use("/trainerPersonalInfo", trainerPersonalInfoRoutes);

// Trainer experience routes
router.use("/trainerExperience", trainerExperienceRoutes);

// Trainee personal info routes
router.use("/traineePersonalInfo", traineePersonalInfoRoutes);

// Trainee goals routes
router.use("/traineeGoals", traineeGoalsRoutes);

// Trainee health routes
router.use("/traineeHealth", traineeHealthRoutes);


module.exports = router;
