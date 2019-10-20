const router = require("express").Router();
const userController = require("../../controllers/userController");
const verify = require("../verifyToken")

// Matches with "/api/equipment"
router.route("/register").post(userController.createNewUser);
router.route("/login").post(userController.loginUser);
router.route("/posts").get(verify, userController.posts)


module.exports = router;