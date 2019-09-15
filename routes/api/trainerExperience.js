const router = require("express").Router();
const trainerExperienceController = require("../../controllers/trainerExperienceController");

// Matches with "/api/trainerExperienceController"
router.route("/")
  .get(trainerExperienceController.findAll)
  .post(trainerExperienceController.create);

// Matches with "/api/trainerExperienceController/:id"
router
  .route("/:id")
  .get(trainerExperienceController.findById)
  .post(trainerExperienceController.updateAll)
  .delete(trainerExperienceController.remove);

module.exports = router;
