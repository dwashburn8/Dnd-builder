const router = require("express").Router();
const userRoutes = require("./Users");

// Book routes
router.use("/users", userRoutes);

module.exports = router;
