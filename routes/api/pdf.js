const router = require("express").Router();
const pdfController = require("../../controllers/pdfController");

// Matches with "/api/pdf"
router.route("/:id").get(pdfController.findById);

module.exports = router;
