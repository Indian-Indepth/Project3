const router = require("express").Router();
const usersRoutes = require("./users");
const packagesRoutes = require("./packages");
const braintreeRoutes = require("./braintree");
const pdfRoutes = require("./pdf");
const transactionRoutes = require("./transaction");

// Users routes
router.use("/users", usersRoutes);
router.use("/packages", packagesRoutes);
router.use("/braintree", braintreeRoutes);
router.use("/pdf", pdfRoutes);
router.use("/transaction", transactionRoutes);

module.exports = router;