const router = require("express").Router();
const userController = require("../../controllers/userController");
// const verify = require("../verifyToken")

// Routes from /user
router.route("/register").post(userController.register);
router.route("/login").post(userController.loginUser);
// router.route("/posts").get(verify, userController.posts)


module.exports = router;