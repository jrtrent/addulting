const router = require("express").Router();

const subjectRoutes = require('./subjects');
const taskRoutes = require('./tasks');
const userRoutes = require('./users')



router.use("/subjects", subjectRoutes);
router.use("/tasks", taskRoutes);
router.use("/users", userRoutes);

module.exports = router;