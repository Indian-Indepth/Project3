const router = require("express").Router();
const packagesController = require("../../controllers/packagesController");

// Matches with "/api/packages"
router.route("/").get(packagesController.findAll)
router.route("/create").post(packagesController.create);

// Matches with "/api/packages/:id"
router
  .route("/:id")
  .get(packagesController.findById)
  .post(packagesController.updateAll)
  .delete(packagesController.remove);

module.exports = router;
