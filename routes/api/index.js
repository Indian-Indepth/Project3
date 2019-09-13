const router = require("express").Router();
const booksRoutes = require("./users");

// Books routes
router.use("/users", booksRoutes);

module.exports = router;