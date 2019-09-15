const router = require("express").Router();
const traineePersonalInfoController = require("../../controllers/traineePersonalInfoController");

// Matches with "/api/traineePersonalInfoController"
router.route("/")
  .get(traineePersonalInfoController.findAll)
  .post(traineePersonalInfoController.create);

// Matches with "/api/traineePersonalInfoController/:id"
router
  .route("/:id")
  .get(traineePersonalInfoController.findById)
  .post(traineePersonalInfoController.updateAll)
  .delete(traineePersonalInfoController.remove);

module.exports = router;
