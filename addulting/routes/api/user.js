const router = require("express").Router();
const loginController = require("../../controllers/loginController");

router.route("/")
  
  .post(userController.create);


module.exports = router;
