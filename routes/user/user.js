const router = require("express").Router();
const userController = require("../../controllers/userController");
const verify = require("../verifyToken")

// Matches with "/api/equipment"
router.route("/register").post(userController.createNewUser);
router.route("/login").post(userController.loginUser);
router.route("/jwt", verify).get(userController.jwtRoute)


module.exports = router;