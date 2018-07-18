const router = require("express").Router();

const subjectRoutes = require('./subjects')



router.use("/subjects", subjectRoutes);

module.exports = router;