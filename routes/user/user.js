const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/equipment"
router.route("/POST").post(userController.createNewUser);
router.route("/GET").get(userController.findAll);
router.route("/POST/login").post(userController.loginUser);


module.exports = router;