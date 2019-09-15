const router = require("express").Router();
const traineeGoalsController = require("../../controllers/traineeGoalsController");

// Matches with "/api/traineeGoalsController"
router.route("/")
  .get(traineeGoalsController.findAll)
  .post(traineeGoalsController.create);

// Matches with "/api/traineeGoalsController/:id"
router
  .route("/:id")
  .get(traineeGoalsController.findById)
  .post(traineeGoalsController.updateAll)
  .delete(traineeGoalsController.remove);

module.exports = router;
