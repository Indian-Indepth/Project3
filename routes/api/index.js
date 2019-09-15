const router = require("express").Router();
const usersRoutes = require("./users");
const packagesRoutes = require("./packages");

// Users routes
router.use("/users", usersRoutes);
router.use("/packages", packagesRoutes);

module.exports = router;