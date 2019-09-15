const router = require("express").Router();
const traineeHealthController = require("../../controllers/traineeHealthController");

// Matches with "/api/traineeHealthController"
router.route("/")
  .get(traineeHealthController.findAll)
  .post(traineeHealthController.create);

// Matches with "/api/traineeHealthController/:id"
router
  .route("/:id")
  .get(traineeHealthController.findById)
  .post(traineeHealthController.updateAll)
  .delete(traineeHealthController.remove);

module.exports = router;
