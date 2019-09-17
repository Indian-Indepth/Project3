const router = require("express").Router();
const transactionsController = require("../../controllers/transactionsController");

// Matches with "/api/transactions"
router.route("/:id").get(transactionsController.findById);
router.route("/").get(transactionsController.findAll)

module.exports = router;