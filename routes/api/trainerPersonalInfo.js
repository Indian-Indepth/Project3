const router = require("express").Router();
const trainerPersonalInfoController = require("../../controllers/trainerPersonalInfoController");

// Matches with "/api/trainerPersonalInfoController"
router.route("/")
  .get(trainerPersonalInfoController.findAll)
  .post(trainerPersonalInfoController.create);

// Matches with "/api/trainerPersonalInfoController/:id"
router
  .route("/:id")
  .get(trainerPersonalInfoController.findById)
  .post(trainerPersonalInfoController.updateAll)
  .delete(trainerPersonalInfoController.remove);

module.exports = router;
