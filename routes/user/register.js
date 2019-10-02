const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/equipment"
router.route("/POST").post(userController.createNewUser);
router.route("/GET").get(userController.findAll);
// router.route("/GET/:username").get(userController.findUser);


module.exports = router;