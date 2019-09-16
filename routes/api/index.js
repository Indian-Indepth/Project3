const router = require("express").Router();
const usersRoutes = require("./users");
const packagesRoutes = require("./packages");
const braintreeRoutes = require("./braintree");

// Users routes
router.use("/users", usersRoutes);
router.use("/packages", packagesRoutes);
router.use("/braintree", braintreeRoutes);

module.exports = router;