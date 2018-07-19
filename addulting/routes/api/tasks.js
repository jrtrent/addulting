const router = require("express").Router();
const subjectsController = require("../../controllers/subjectController");

// Matches with "/api/subjects"
router.route("/subjectentry")
  .get(subjectsController.findAll)
  .post(subjectsController.create);

// Matches with "/api/subjects/:id"
router
  .route("/subjectentry/:id")
  .get(subjectsController.findById)
  .put(subjectsController.update)
  .delete(subjectsController.remove);

module.exports = router;
