const router = require("express").Router();
const tasksController = require("../../controllers/taskController");

// Matches with "/api/tasks"
router.route("/taskentry")
  .get(tasksController.findAll)
  .post(tasksController.create);

// Matches with "/api/tasks/:id"
router
  .route("/taskentry/:id")
  .get(tasksController.findById)
  .put(tasksController.update)
  .delete(tasksController.remove);

module.exports = router;
